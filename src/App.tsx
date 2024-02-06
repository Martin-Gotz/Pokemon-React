import './App.scss';
import Terrain from "./components/Terrain/Terrain";
import Interface from "./components/Interface/Interface";
import React, {useEffect, useRef, useState} from "react";
import Menu from "./components/Menu/Menu";
import {Pikachu, Salameche} from "./data";
import Pokemon from "./models/Pokemon";
import Capacite from "./models/Capacite";

const App = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [jeuLance, setJeuLance] = useState(true);

    const [pokemonJoueur, setPokemonJoueur] = useState<Pokemon | null>(null);
    const [pokemonAdversaire, setPokemonAdversaire] = useState<Pokemon | null>(null);

    const [numeroTour, setNumeroTour] = useState(1);
    const [texteEnCours, setTexteEnCours] = useState("");

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
        const donneesPokemonJoueur: Pokemon = Salameche;
        const donneesPokemonAdversaire: Pokemon = Pikachu;

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

    const decisionAttaque = async (idCapaciteChoisie: number) => {
        if (pokemonJoueur && pokemonAdversaire) {
            const capaciteChoisieJoueur = pokemonJoueur.capacites.find(capacite => capacite.id === idCapaciteChoisie);

            if (capaciteChoisieJoueur && capaciteChoisieJoueur.pp > 0) {
                const indexAleatoire = Math.floor(Math.random() * pokemonAdversaire.capacites.length);
                const capaciteChoisieAdversaire = pokemonAdversaire.capacites[indexAleatoire];

                await jouerTour(capaciteChoisieJoueur, capaciteChoisieAdversaire);
            }
        }
    };

    const jouerTour = async (capaciteChoisieJoueur: Capacite, capaciteChoisieAdversaire: Capacite) => {
        console.log("Le tour " + numeroTour + " debute.");

        if (pokemonJoueur && pokemonAdversaire) {
            const joueurPlusRapide = pokemonJoueur.vitesse >= pokemonAdversaire.vitesse;

            const [premier, second, capacitePremier, capaciteSecond] = joueurPlusRapide
                ? [pokemonJoueur, pokemonAdversaire, capaciteChoisieJoueur, capaciteChoisieAdversaire]
                : [pokemonAdversaire, pokemonJoueur, capaciteChoisieAdversaire, capaciteChoisieJoueur];

            await attaquer(premier, second, capacitePremier);

            await attaquer(second, premier, joueurPlusRapide ? capaciteChoisieAdversaire : capaciteSecond);

            setTexteEnCours("");
            setNumeroTour(numeroTour + 1);
        }
    }

    const attente = async () => {
        await new Promise(resolve => setTimeout(resolve, 2500));
    }

    const attaquer = async (attaquant: Pokemon, defenseur: Pokemon, capacite: Capacite) => {
        let manque = false;

        setTexteEnCours(`${attaquant.nom} attaque avec ${capacite.nom}.`);

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
    };

    const resultatsDegats = (attaquant: Pokemon, defenseur: Pokemon, capacite: Capacite) => {
        const { multiplicateurCritique, multiplicateurType } = calculerMultiplicateur(attaquant, defenseur, capacite);

        const degats = Math.floor(
            (((
                ((attaquant.niveau * 0.4 + 2) * attaquant.attaque * capacite.puissance)
                /
                (capacite.categorie === "physique" ? defenseur.defense : defenseur.special)
            ) / 50) + 2) * multiplicateurCritique * multiplicateurType);

        let efficacite: "peu-efficace" | "" | "super-efficace" = multiplicateurType < 1 ? "peu-efficace" : multiplicateurType > 1 ? "super-efficace" : "";

        return { degats: degats > 0 ? degats : 0, critique: multiplicateurCritique !== 1, efficacite: efficacite };
    };

    const calculerMultiplicateur = (attaquant: Pokemon, defenseur: Pokemon, capacite: Capacite) => {
        let multiplicateurCritique = 1;

        const T = (attaquant.vitesse/2) % 2 === 0 ? attaquant.vitesse/2 : attaquant.vitesse/2 + 1;
        const TLimitee = T > 255 ? 255 : T;

        const nombreAleatoireCritique = Math.floor(Math.random() * 256);

        if (nombreAleatoireCritique < TLimitee){
            multiplicateurCritique = ((2*attaquant.niveau)+5)/(attaquant.niveau+5);
        }

        let multiplicateurType = 1;

        return { multiplicateurCritique: multiplicateurCritique, multiplicateurType: multiplicateurType };
    };

    const decrementerPp = (capacite: Capacite) => {
        capacite.pp = capacite.pp - 1;
    };

    return (
        <div className={"pokemon-app"}>
            <div className={"musique"}>
                <audio ref={audioRef} controls loop>
                    <source src="/audio/Wild-Battle.mp3" type="audio/mp3" />
                </audio>
            </div>
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
        </div>
    );
}

export default App;
