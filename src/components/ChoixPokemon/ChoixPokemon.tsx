import React, {useState} from 'react';
import pokemons from "../../data/dataPokemons";
import './ChoixPokemon.scss';
import Pokemon from "../../models/Pokemon";
import InfosPokemon from "./InfosPokemon/InfosPokemon";
import ListePokemons from "./ListePokemons/ListePokemons";

interface ChoixPokemonProps {
    validerChoixPokemon: (pokemonSelectionne: Pokemon, choixPokemonAdversaire: Pokemon) => void;
    jouerAudio: () => void;
}

const ChoixPokemon: React.FC<ChoixPokemonProps> = ({validerChoixPokemon, jouerAudio}) => {
    const [pokemonSelectionne, setPokemonSelectionne] = useState<Pokemon | null>(null);
    const [animationEnCours, setAnimationEnCours] = useState(false);

    const pokemonsTries = pokemons.sort((a, b) => a.numero - b.numero);

    const lancerCombat = (pokemonJoueur: Pokemon) => {
        jouerAudio();

        setAnimationEnCours(true);

        const pokemonAdversaire = pokemonsTries[Math.floor(Math.random() * pokemonsTries.length)];

        setTimeout(() => {
            validerChoixPokemon(pokemonJoueur, pokemonAdversaire);
        }, 2000);
    };

    const gererSelectionPokemon = (pokemon: Pokemon) => {
        setPokemonSelectionne(pokemon);
    };

    return (
        <div className={`choix-pokemon-global`}>
            <div className={"titre-choix-pokemon"}>
                Choix du Pokémon
            </div>

            <div className={"separateur"}></div>

            <div className={"cadre-choix-pokemon"}>
                <ListePokemons listePokemons={pokemonsTries} pokemonSelectionne={pokemonSelectionne} gererSelectionPokemon={gererSelectionPokemon}/>
                <InfosPokemon pokemon={pokemonSelectionne}/>
            </div>

            <div className={"conteneur-bouton-valider"}>
                <div className={`bouton-valider ${pokemonSelectionne ? 'active' : ''}`} onClick={() => pokemonSelectionne && lancerCombat(pokemonSelectionne)}>Selectionner</div>
            </div>

            <div className={`transition-overlay ${animationEnCours ? 'transition-animee' : ''}`}></div>
        </div>
    );
}
export default ChoixPokemon;
