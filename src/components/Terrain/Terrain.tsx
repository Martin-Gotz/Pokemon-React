import './Terrain.scss';
import ComposantPokemon from "./ComposantPokemon/ComposantPokemon";
import Pokemon from "../../models/Pokemon";
import React from "react";

interface TerrainProps {
    pokemonJoueur: Pokemon;
    pokemonAdversaire: Pokemon;
}

const Terrain: React.FC<TerrainProps> = ({pokemonJoueur, pokemonAdversaire}) => {
    return (
        <div className={"terrain"}>
            <ComposantPokemon typeCote={"adversaire"} pokemon={pokemonAdversaire}/>
            <ComposantPokemon typeCote={"joueur"} pokemon={pokemonJoueur}/>
            <img className={"arriere-plan-terrain"} src="/terrain-2.png" alt="terrain"/>
        </div>
    );
}

export default Terrain;
