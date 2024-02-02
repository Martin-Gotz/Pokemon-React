import './App.scss';
import Terrain from "./components/Terrain/Terrain";
import Interface from "./components/Interface/Interface";
import React, {useEffect, useRef, useState} from "react";
import Menu from "./components/Menu/Menu";
import {donneesPokemonAdversaire, donneesPokemonJoueur} from "./data";
import Pokemon from "./models/Pokemon";
import Capacite from "./models/Capacite";

const App = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [jeuLance, setJeuLance] = useState(true);

    const [pokemonJoueur, setPokemonJoueur] = useState<Pokemon | null>(null);
    const [pokemonAdversaire, setPokemonAdversaire] = useState<Pokemon | null>(null);

    const [numeroTour, setNumeroTour] = useState(1);
    const [texteEnCours, setTexteEnCours] = useState("");

    useEffect(() => {
        const initialPokemonJoueur = {
            ...donneesPokemonJoueur,
            hp_max: donneesPokemonJoueur.hp,
            capacites: donneesPokemonJoueur.capacites.map(capacite => ({
                ...capacite,
                pp_max: capacite.pp,
            })),
        };

        const initialPokemonAdversaire = {
            ...donneesPokemonAdversaire,
            hp_max: donneesPokemonAdversaire.hp,
            capacites: donneesPokemonAdversaire.capacites.map(capacite => ({
                ...capacite,
                pp_max: capacite.pp,
            })),
        };

        setPokemonJoueur(initialPokemonJoueur);
        setPokemonAdversaire(initialPokemonAdversaire);
    }, []);

    useEffect(() => {

    }, [pokemonJoueur]);

    const jouerAudio = () => {
        if (audioRef.current) {
            //audioRef.current.play();
        }
    };

    const lancerJeu = () => {
        setJeuLance(true);
        jouerAudio();
    };

    const passerAuProchainTexte = (prochainTexte: string) => {
        setTexteEnCours(prochainTexte)
    };

    const decisionAttaque = (idCapaciteChoisie: number) => {
        // Récupération de l'attaque du joueur
        if (pokemonJoueur && pokemonAdversaire) {
            const capaciteChoisieJoueur = pokemonJoueur.capacites.find(capacite => capacite.id === idCapaciteChoisie);

            if (capaciteChoisieJoueur && capaciteChoisieJoueur.pp > 0) {
                // Choix d'une attaque pour l'adversaire
                const indexAleatoire = Math.floor(Math.random() * pokemonAdversaire.capacites.length);
                const capaciteChoisieAdversaire = pokemonAdversaire.capacites[indexAleatoire];

                debutTour(capaciteChoisieJoueur, capaciteChoisieAdversaire);
            }
        }
    };

    const debutTour = (capaciteChoisieJoueur: Capacite, capaciteChoisieAdversaire: Capacite) => {
        console.log("Le tour " + numeroTour + " debute.");
        setTexteEnCours("Tour " + numeroTour)

        if (pokemonJoueur && pokemonAdversaire) {
            // Déterminer quel Pokémon est le plus rapide
            const joueurPlusRapide = pokemonJoueur.vitesse >= pokemonAdversaire.vitesse;

            // Faire attaquer le Pokémon le plus rapide
            if (joueurPlusRapide) {
                attaquer(pokemonJoueur, pokemonAdversaire, capaciteChoisieJoueur);
                attaquer(pokemonAdversaire, pokemonJoueur, capaciteChoisieAdversaire);
            } else {
                attaquer(pokemonAdversaire, pokemonJoueur, capaciteChoisieAdversaire);
                attaquer(pokemonJoueur, pokemonAdversaire, capaciteChoisieJoueur);
            }

            setNumeroTour(numeroTour + 1);
        }
    }

    const attaquer = (attaquant: Pokemon, defenseur: Pokemon, capacite: Capacite) => {
        console.log(`${attaquant.nom} attaque avec ${capacite.nom}`);

        // Mettre à jour les pp
        decrementerPp(capacite);

        // Calculer les dégâts
        const degats = calculerDegats(attaquant, defenseur, capacite);

        // Mettre à jour les points de vie
        defenseur.hp = defenseur.hp - degats >= 0 ? defenseur.hp - degats : 0;
        console.log(`${defenseur.nom} perd ${degats} points de vie`);
    };

    const calculerDegats = (attaquant: Pokemon, defenseur: Pokemon, capacite: Capacite) => {
        const degats = Math.floor(
            (((
                ((attaquant.niveau * 0.4 + 2) * attaquant.attaque * capacite.puissance)
                /
                (capacite.categorie === "physique" ? defenseur.defense : defenseur.special)
            ) / 50) + 2));

        return degats > 0 ? degats : 0; // Les dégâts ne peuvent pas être négatifs
    };

    const decrementerPp = (capacite: Capacite) => {
        capacite.pp = capacite.pp - 1;
    };

    return (
        <div className={"pokemon-app"}>
            {/*<img className={"logo-pokemon"} src="/pokemon-logo.png" alt="logo-pokemon"/>*/}
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
                            passerAuProchainTexte={passerAuProchainTexte}
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
