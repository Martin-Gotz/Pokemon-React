import './App.scss';
import React, {useRef, useState} from "react";
import Pokemon from "./models/Pokemon";
import ChoixPokemon from "./components/ChoixPokemon/ChoixPokemon";
import Jeu from "./components/Jeu/Jeu";

const App = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [jeuLance, setJeuLance] = useState<boolean>(false);

    const [pokemonJoueur, setPokemonJoueur] = useState<Pokemon | null>(null);
    const [pokemonAdversaire, setPokemonAdversaire] = useState<Pokemon | null>(null);

    const jouerAudio = async () => {
        if (audioRef.current) {
            //await audioRef.current.play();
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

    const validerChoixPokemon = async (pokemonSelectionne: Pokemon) => {
        const initialPokemonJoueur = initialiserPokemon(pokemonSelectionne);
        const initialPokemonAdversaire = initialiserPokemon(pokemonSelectionne);

        setPokemonJoueur(initialPokemonJoueur);
        setPokemonAdversaire(initialPokemonAdversaire);
        setJeuLance(true);
    }

    return (
        <div className={"pokemon-app"}>
            <div className={"cadre-jeu"}>
                { jeuLance ? (pokemonJoueur && pokemonAdversaire && (
                    <Jeu pokemonJoueur={pokemonJoueur} pokemonAdversaire={pokemonAdversaire} />
                )) : (
                    <ChoixPokemon validerChoixPokemon={validerChoixPokemon} jouerAudio={jouerAudio}/>
                )}
            </div>

            <div className={"musique"}>
                <audio ref={audioRef} controls loop>
                    <source src={`/audio/Wild-Battle.mp3`} type="audio/mp3" />
                </audio>
            </div>
        </div>
    );
}

export default App;
