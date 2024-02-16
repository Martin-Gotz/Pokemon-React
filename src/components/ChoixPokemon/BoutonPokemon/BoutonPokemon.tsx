import React from 'react';
import Pokemon from "../../../models/Pokemon";
import "./BoutonPokemon.scss"

interface BoutonPokemonProps {
    pokemon: Pokemon;
    index: number;
    pokemonSelectionne: Pokemon | null;
    gererSelectionPokemon: (pokemon: Pokemon) => void;
}

const BoutonPokemon: React.FC<BoutonPokemonProps> = ({ pokemon, index, pokemonSelectionne, gererSelectionPokemon }) => {
    return (
        <div
            key={index}
            className={`bouton-pokemon ${pokemonSelectionne === pokemon ? 'selectionne' : ''}`}
            onClick={() => gererSelectionPokemon(pokemon)}
        >
            <div className={"conteneur-image-pokemon"}>
                <img
                    src={`/sprites/pokemon/${pokemon.image}_f.gif`}
                    alt={pokemon.nom}
                    className={"image-pokemon"}
                />
            </div>
            <div className={"nom-pokemon"}>{pokemon.nom}</div>
        </div>
    );
};

export default BoutonPokemon;
