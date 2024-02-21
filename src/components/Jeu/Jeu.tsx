import Terrain from "./Terrain/Terrain";
import InterfaceCombat from "./InterfaceCombat/InterfaceCombat";
import React, {useState} from "react";
import Pokemon from "../../models/Pokemon";
import Capacite from "../../models/Capacite";
import Type from "../../models/Type";

interface JeuProps {
    pokemonJoueur: Pokemon;
    pokemonAdversaire: Pokemon;
    redemarrerJeu: () => void;
}

const Jeu: React.FC<JeuProps> = ({pokemonJoueur, pokemonAdversaire, redemarrerJeu}) => {
    const [jeuFini, setJeuFini] = useState<boolean>(false);

    const [numeroTour, setNumeroTour] = useState<number>(1);
    const [texteEnCours, setTexteEnCours] = useState<string>("");

    const finirCombat = async (gagnant: Pokemon, vaincu: Pokemon) => {
        setTexteEnCours(`${vaincu.nom} est K.O.`);
        await attente();
        setTexteEnCours(`${gagnant.nom} remporte la victoire !`);
        await attente();

        setJeuFini(true);
        redemarrerJeu();
    }


    const attente = async () => {
        await new Promise(resolve => setTimeout(resolve, 2300));
    }

    const decisionAttaque = async (idCapaciteChoisie: number) => {
        if (pokemonJoueur && pokemonAdversaire && !jeuFini) {
            const capaciteChoisieJoueur = pokemonJoueur.capacites.find(capacite => capacite.id === idCapaciteChoisie);

            if (capaciteChoisieJoueur && capaciteChoisieJoueur.pp > 0) {
                const indexAleatoire = Math.floor(Math.random() * pokemonAdversaire.capacites.length);
                const capaciteChoisieAdversaire = pokemonAdversaire.capacites[indexAleatoire];

                await jouerTour(capaciteChoisieJoueur, capaciteChoisieAdversaire);
            }
        }
    };

    const jouerTour = async (capaciteChoisieJoueur: Capacite, capaciteChoisieAdversaire: Capacite) => {
        if (pokemonJoueur && pokemonAdversaire) {
            const joueurPlusRapide = pokemonJoueur.vitesse >= pokemonAdversaire.vitesse;

            const [premier, second, capacitePremier, capaciteSecond] = joueurPlusRapide
                ? [pokemonJoueur, pokemonAdversaire, capaciteChoisieJoueur, capaciteChoisieAdversaire]
                : [pokemonAdversaire, pokemonJoueur, capaciteChoisieAdversaire, capaciteChoisieJoueur];

            await attaquer(premier, second, capacitePremier);

            if (second.hp === 0) {
                await finirCombat(premier, second);
            }
            else {
                await attaquer(second, premier, capaciteSecond);

                if (premier.hp === 0) {
                    await finirCombat(second, premier);
                }
                else {
                    setTexteEnCours("");
                    setNumeroTour(numeroTour + 1);
                }
            }
        }
    }

    const attaquer = async (attaquant: Pokemon, defenseur: Pokemon, capacite: Capacite) => {
        if (attaquant.hp > 0) {

            if (attaquant === pokemonJoueur) {
                setTexteEnCours(`${attaquant.nom} attaque ${capacite.nom}.`);
            }
            else {
                setTexteEnCours(`Le ${attaquant.nom} adverse attaque ${capacite.nom}.`);
            }
            decrementerPp(capacite);

            if (capacite.categorie === 'statut') {
                await attente();
                setTexteEnCours(`Mais rien ne se passe.`);
                await attente();
            }
            else if (Math.random() > capacite.precision / 100) {
                await attente();
                setTexteEnCours(`Mais ${attaquant.nom} rate.`);
                await attente();
            }
            else {
                const { degats, critique, efficacite } = resultatsDegats(attaquant, defenseur, capacite);
                defenseur.hp = Math.max(defenseur.hp - degats, 0);

                await attente();

                await afficherTextesAdditionnels(critique, efficacite, defenseur)
            }
        }
    };

    const decrementerPp = (capacite: Capacite) => {
        capacite.pp = capacite.pp - 1;
    };

    const resultatsDegats = (attaquant: Pokemon, defenseur: Pokemon, capacite: Capacite) => {
        const { multiplicateurCritique, multiplicateurType } = calculerMultiplicateurs(attaquant, defenseur, capacite);
        const degats = Math.floor(
            (
                ((
                    ((attaquant.niveau * 0.4 + 2) * attaquant.attaque * capacite.puissance)
                    /
                    (capacite.categorie === "physique" ? defenseur.defense : defenseur.special)
                ) / 50) + 2
            )
            * multiplicateurCritique * multiplicateurType
        );

        const efficacite: "" | "non-efficace" | "peu-efficace" | "super-efficace" = multiplicateurType === 0
            ? "non-efficace" : multiplicateurType < 1
                ? "peu-efficace" : multiplicateurType > 1
                    ? "super-efficace" : "";

        return { degats: degats > 0 ? degats : 0, critique: multiplicateurCritique !== 1, efficacite: efficacite };
    };

    const calculerMultiplicateurs = (attaquant: Pokemon, defenseur: Pokemon, capacite: Capacite) => {

        const multiplicateurCritique = calculerMultiplicateurCritique(attaquant);
        const multiplicateurType = calculerMultiplicateurType(defenseur, capacite);

        return { multiplicateurCritique: multiplicateurCritique, multiplicateurType: multiplicateurType };
    };

    const calculerMultiplicateurCritique = (attaquant: Pokemon) => {
        const T = (attaquant.vitesse/2) % 2 === 0 ? attaquant.vitesse/2 : attaquant.vitesse/2 + 1;
        const TPlafonee = T > 255 ? 255 : T;

        const nombreAleatoireCritique = Math.floor(Math.random() * 256);

        return nombreAleatoireCritique < TPlafonee
            ? (( 2 * attaquant.niveau ) + 5 ) / ( attaquant.niveau + 5 ) : 1;
    }

    const calculerMultiplicateurType = (defenseur: Pokemon, capacite: Capacite) => {
        const typeAttaquant: Type = capacite.type;
        const typeDefenseur: Type = defenseur.type;

        if (typeDefenseur.immunites.includes(typeAttaquant.nom)) {
            return 0;
        } else if (typeDefenseur.resistances.includes(typeAttaquant.nom)) {
            return 0.5;
        } else if (typeDefenseur.faiblesses.includes(typeAttaquant.nom)) {
            return 2;
        } else {
            return 1;
        }
    }

    const afficherTextesAdditionnels = async (critique: boolean, efficacite: "" | "non-efficace" | "peu-efficace" | "super-efficace", defenseur: Pokemon) => {
        if (critique) {
            setTexteEnCours(`Coup critique !`);
            await attente();
        }

        if (efficacite === "peu-efficace") {
            setTexteEnCours(`Ce n'est pas très efficace.`);
            await attente();
        }
        else if (efficacite === "super-efficace") {
            setTexteEnCours(`C'est super efficace !`);
            await attente();
        }
        else if (efficacite === "non-efficace") {
            setTexteEnCours(`Cela n'affecte pas le ${defenseur.nom} adverse`);
            await attente();
        }
    }

    return (
        <>
            <Terrain
                pokemonJoueur={pokemonJoueur}
                pokemonAdversaire={pokemonAdversaire}
            />
            <InterfaceCombat
                pokemonJoueur={pokemonJoueur}
                pokemonAdversaire={pokemonAdversaire}
                decisionAttaque={decisionAttaque}
                texteEnCours={texteEnCours}
            />
        </>
    );
}

export default Jeu;
