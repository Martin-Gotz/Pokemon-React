import React from 'react';
import Pokemon from "../../../models/Pokemon";
import "./InfosPokemon.scss"
import BarreStatistique from "../BarreStatistique/BarreStatistique";

interface InfosPokemonProps {
    pokemon: Pokemon | null;
}

const InfosPokemon: React.FC<InfosPokemonProps> = ({ pokemon }) => {
    return (
        <div className={"info-pokemon"}>
            {pokemon && (
                <>
                    <div className={"portrait"}>
                        <img
                            src={`/sprites/pokemon/${pokemon.image}_f.gif`}
                            alt={pokemon.nom}
                            className={"image-pokemon"}
                        />
                    </div>
                    <div className={"boite-information"}>
                        <div className={"nom"}>{pokemon.nom}</div>
                        <div className={"type"}>
                            Type :
                            {pokemon.type && (
                                <div className={"valeur-type"} style={{color : pokemon.type.couleur}}>{pokemon.type.nom}</div>
                            )}
                        </div>
                        <div className={"statistiques"}>
                            <BarreStatistique nomStat="HP" valeurStat={pokemon.hp} couleur="green" />
                            <BarreStatistique nomStat="Attaque" valeurStat={pokemon.attaque} couleur="yellow" />
                            <BarreStatistique nomStat="Défense" valeurStat={pokemon.defense} couleur="orange" />
                            <BarreStatistique nomStat="Vitesse" valeurStat={pokemon.vitesse} couleur="deeppink" />
                            <BarreStatistique nomStat="Spécial" valeurStat={pokemon.special} couleur="dodgerblue" />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default InfosPokemon;
