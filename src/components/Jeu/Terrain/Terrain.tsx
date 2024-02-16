import './Terrain.scss';
import PokemonGeneral from "../PokemonGeneral/PokemonGeneral";
import Pokemon from "../../../models/Pokemon";
import React from "react";

interface TerrainProps {
    pokemonJoueur: Pokemon;
    pokemonAdversaire: Pokemon;
}

const Terrain: React.FC<TerrainProps> = ({pokemonJoueur, pokemonAdversaire}) => {
    return (
        <div className={"terrain"}>
            <PokemonGeneral typeCote={"adversaire"} pokemon={pokemonAdversaire}/>
            <PokemonGeneral typeCote={"joueur"} pokemon={pokemonJoueur}/>
            <img className={"arriere-plan-terrain"} src="/images/terrain-2.png" alt="terrain"/>
        </div>
    );
}

export default Terrain;
