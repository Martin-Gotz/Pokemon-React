import './App.scss';
import React, {useEffect, useRef, useState} from "react";
import Pokemon from "./models/Pokemon";
import ChoixPokemon from "./components/ChoixPokemon/ChoixPokemon";
import Jeu from "./components/Jeu/Jeu";
import {urlApi} from "./Config";
import UseFetchData from "./Utils";
import IconeVolume from "./components/IconeVolume/IconeVolume";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

const App = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [muet, setMuet] = useState(false);

    const [jeuLance, setJeuLance] = useState<boolean>(false);

    const [pokemonJoueur, setPokemonJoueur] = useState<Pokemon | null>(null);
    const [pokemonAdversaire, setPokemonAdversaire] = useState<Pokemon | null>(null);

    const { data: dataPokemon1, loading: loadingPokemon1, error: errorPokemon1 } = UseFetchData(`${urlApi}/pokemon/details/pikachu/100`);
    const { data: dataPokemon2, loading: loadingPokemon2, error: errorPokemon2 } = UseFetchData(`${urlApi}/pokemon/details/roucoups/100`);

    useEffect(() => {
        if (dataPokemon1) {
            console.log(dataPokemon1)
        }
        if (dataPokemon2) {
            console.log(dataPokemon2)
        }
    }, [dataPokemon1, dataPokemon2]);

    const toggleMuet = () => {
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
            setMuet(audioRef.current.muted);
        }
    };

    const jouerAudio = async () => {
        if (audioRef.current) {
            await audioRef.current.play();
        }
    };

    const stopperAudio = async () => {
        if (audioRef.current) {
            await audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

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

    const validerChoixPokemon = async (pokemonSelectionne: Pokemon, choixPokemonAdversaire: Pokemon) => {
        const initialPokemonJoueur = initialiserPokemon(pokemonSelectionne);
        const initialPokemonAdversaire = initialiserPokemon(choixPokemonAdversaire);

        setPokemonJoueur(initialPokemonJoueur);
        setPokemonAdversaire(initialPokemonAdversaire);
        setJeuLance(true);
    }

    const redemarrerJeu = async () => {
        setJeuLance(false);
        await stopperAudio();
    }

    if (loadingPokemon1 || loadingPokemon2) {
        return <div className={"message-donnees chargement-donnees"}>Chargement...</div>;
    }

    if (errorPokemon1 && errorPokemon2) {
        return <div className={"message-donnees erreur-donnees"}>Erreur dans le chargement des données 😥</div>;
    }

    return (
        <div className={"pokemon-app"}>
            <IconeVolume muet={muet} toggleMuet={toggleMuet}/>

            <div className={"cadre-jeu"}>
                { jeuLance ? (pokemonJoueur && pokemonAdversaire && (
                    <Jeu pokemonJoueur={pokemonJoueur} pokemonAdversaire={pokemonAdversaire} redemarrerJeu={redemarrerJeu}/>
                )) : (
                    <ChoixPokemon validerChoixPokemon={validerChoixPokemon} jouerAudio={jouerAudio}/>
                )}
            </div>

            <AudioPlayer src="/audio/Wild-Battle.mp3" audioRef={audioRef} />
        </div>
    );
}

export default App;
