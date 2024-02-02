import './Terrain.scss';
import Pokemon from "./Pokemon/Pokemon";

const Terrain = ({pokemonJoueur, pokemonAdversaire}) => {
    return (
        <div className={"terrain"}>
            <Pokemon typeCote={"adversaire"} pokemon={pokemonAdversaire}/>
            <Pokemon typeCote={"joueur"} pokemon={pokemonJoueur}/>
            <img className={"arriere-plan-terrain"} src="/terrain-2.png" alt="terrain"/>
        </div>
    );
}

export default Terrain;
