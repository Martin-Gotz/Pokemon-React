import React from 'react';
import Pokemon from "../../../models/Pokemon";
import "./ListePokemons.scss"
import BoutonPokemon from "../BoutonPokemon/BoutonPokemon";

interface ListePokemonProps {
    listePokemons: Pokemon[];
    pokemonSelectionne: Pokemon | null;
    gererSelectionPokemon: (pokemon: Pokemon) => void;
}

const ListePokemons: React.FC<ListePokemonProps> = ({ listePokemons, pokemonSelectionne, gererSelectionPokemon }) => {
    return (
        <div className={"liste-pokemons"}>
            {listePokemons.map((pokemon: Pokemon, index: number) => (
                <BoutonPokemon
                    key={index}
                    pokemon={pokemon}
                    index={index}
                    pokemonSelectionne={pokemonSelectionne}
                    gererSelectionPokemon={gererSelectionPokemon}
                />
            ))}
        </div>
    );
};

export default ListePokemons;
