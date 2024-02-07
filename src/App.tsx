import './App.scss';
import Terrain from "./components/Terrain/Terrain";
import Interface from "./components/Interface/Interface";
import React, {useEffect, useRef, useState} from "react";
import Menu from "./components/Menu/Menu";
import pokemons from "./data/dataPokemons";
import Pokemon from "./models/Pokemon";
import Capacite from "./models/Capacite";

const App = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [jeuLance, setJeuLance] = useState<boolean>(false);
    const [jeuFini, setJeuFini] = useState<boolean>(false);

    const [pokemonJoueur, setPokemonJoueur] = useState<Pokemon | null>(null);
    const [pokemonAdversaire, setPokemonAdversaire] = useState<Pokemon | null>(null);

    const [numeroTour, setNumeroTour] = useState<number>(1);
    const [texteEnCours, setTexteEnCours] = useState<string>("");

    const initialiserPokemon = (donneesPokemon: Pokemon) => {
        return {
            ...donneesPokemon,
            hp_max: donneesPokemon.hp,
            capacites: donneesPokemon.capacites.map(capacite => ({
                ...capacite,
                pp_max: capacite.pp,
            })),
        };
    };

    useEffect(() => {
        const donneesPokemonJoueur: Pokemon = pokemons.Pikachu;
        const donneesPokemonAdversaire: Pokemon = pokemons.Pikachu;

        const initialPokemonJoueur = initialiserPokemon(donneesPokemonJoueur);
        const initialPokemonAdversaire = initialiserPokemon(donneesPokemonAdversaire);

        setPokemonJoueur(initialPokemonJoueur);
        setPokemonAdversaire(initialPokemonAdversaire);
    }, []);

    const jouerAudio = async () => {
        if (audioRef.current) {
            await audioRef.current.play();
        }
    };

    const lancerJeu = async () => {
        setJeuLance(true);
        await jouerAudio();
    };

    const finirCombat = async (gagnant: Pokemon, vaincu: Pokemon) => {
        setTexteEnCours(`${vaincu.nom} est K.O.`);
        await attente();
        setTexteEnCours(`${gagnant.nom} remporte la victoire !`);
        await attente();
        setJeuFini(true);
    }


    const attente = async () => {
        await new Promise(resolve => setTimeout(resolve, 2500));
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
                await attaquer(second, premier, joueurPlusRapide ? capaciteChoisieAdversaire : capaciteSecond);

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
            const manque = false;

            if (attaquant === pokemonJoueur) {
                setTexteEnCours(`${attaquant.nom} attaque ${capacite.nom}.`);
            }
            else {
                setTexteEnCours(`Le ${attaquant.nom} adverse attaque ${capacite.nom}.`);
            }
            decrementerPp(capacite);

            if (manque) {
                await attente();
                setTexteEnCours(`Mais cela échoue.`);
                await attente();
            }
            else {
                const { degats, critique, efficacite } = resultatsDegats(attaquant, defenseur, capacite);
                defenseur.hp = Math.max(defenseur.hp - degats, 0);

                await attente();

                await afficherTextesAdditionnels(critique, efficacite)
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

        const efficacite: "" | "peu-efficace" | "super-efficace" = multiplicateurType < 1 ? "peu-efficace" : multiplicateurType > 1 ? "super-efficace" : "";

        return { degats: degats > 0 ? degats : 0, critique: multiplicateurCritique !== 1, efficacite: efficacite };
    };

    const calculerMultiplicateurs = (attaquant: Pokemon, defenseur: Pokemon, capacite: Capacite) => {
        let multiplicateurCritique = 1;

        const T = (attaquant.vitesse/2) % 2 === 0 ? attaquant.vitesse/2 : attaquant.vitesse/2 + 1;
        const TPlafonee = T > 255 ? 255 : T;

        const nombreAleatoireCritique = Math.floor(Math.random() * 256);

        if (nombreAleatoireCritique < TPlafonee){
            multiplicateurCritique = (( 2 * attaquant.niveau ) + 5 ) / ( attaquant.niveau + 5 );
        }

        let multiplicateurType = 1;

        return { multiplicateurCritique: multiplicateurCritique, multiplicateurType: multiplicateurType };
    };

    const afficherTextesAdditionnels = async (critique: boolean, efficacite: "" | "peu-efficace" | "super-efficace") => {
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
    }

    return (
        <div className={"pokemon-app"}>
            <div className={"cadre-jeu"}>
                { jeuLance ? (pokemonJoueur && pokemonAdversaire && (
                    <>
                        <Terrain
                            pokemonJoueur={pokemonJoueur}
                            pokemonAdversaire={pokemonAdversaire}
                        />
                        <Interface
                            pokemonJoueur={pokemonJoueur}
                            pokemonAdversaire={pokemonAdversaire}
                            decisionAttaque={decisionAttaque}
                            texteEnCours={texteEnCours}
                        />
                    </>
                )) : (
                    <>
                        <Menu onPlayButtonClick={lancerJeu} />
                    </>
                )}
            </div>
            <div className={"musique"}>
                <audio ref={audioRef} controls loop>
                    <source src="/audio/Wild-Battle.mp3" type="audio/mp3" />
                </audio>
            </div>
        </div>
    );
}

export default App;
