import './PokemonGeneral.scss';
import HudPokemon from "../HudPokemon/HudPokemon";
import Pokemon from "../../../models/Pokemon";
import React from "react";

interface ComposantPokemonProps {
    typeCote: 'joueur' | 'adversaire';
    pokemon: Pokemon;
}

const PokemonGeneral: React.FC<ComposantPokemonProps> = ({typeCote, pokemon}) => {

    return (
        <div className={`cote cote-${typeCote}`}>
            <div className={`sprite-pokemon-container pokemon-${typeCote}`}>
                {pokemon.hp > 0 && (
                    <img
                        className="sprite-pokemon"
                        src={`/sprites/pokemon/${pokemon.image}_${typeCote === 'joueur' ? 'b' : 'f'}.gif`}
                        alt={`sprite-pokemon-${typeCote}`}
                    />
                )}
            </div>
            <HudPokemon typeCote={typeCote} pokemon={pokemon} vieRestante={pokemon.hp}/>
        </div>
    );
}

export default PokemonGeneral;
