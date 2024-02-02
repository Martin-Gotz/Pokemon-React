import './Pokemon.scss';
import HudPokemon from "../HudPokemon/HudPokemon";

const Pokemon = ({typeCote, pokemon}) => {

    return (
        <div className={`cote cote-${typeCote}`}>
            <div className={`sprite-pokemon-container pokemon-${typeCote}`}>
                {pokemon.hp > 0 && (
                    <img
                        className="sprite-pokemon"
                        src={`/sprites/pokemon/${pokemon.image}_${typeCote === 'joueur' ? 'b' : 'f'}_a.gif`}
                        alt={`sprite-pokemon-${typeCote}`}
                    />
                )}
            </div>
            <HudPokemon typeCote={typeCote} pokemon={pokemon} vieRestante={pokemon.hp}/>
        </div>
    );
}

export default Pokemon;
