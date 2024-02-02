import './HudPokemon.scss';
import {useEffect, useState} from "react";

const HudPokemon = ({typeCote, pokemon, vieRestante}) => {
    const [pourcentageVie, setPourcentageVie] = useState(100);

    useEffect(() => {
        setPourcentageVie((pokemon.hp/pokemon.hp_max)*100);
    }, [vieRestante]);

    return (
        <div className={`hud-container hud-${typeCote}-container`}>
            <div className={"hud-panel"}>
                <div className={"en-tete-hud"}>
                    <div className={"nom"}>{pokemon.nom}</div>
                    <div className={"niveau"}>Lv{pokemon.niveau}</div>
                </div>
                <div className={"vie"}>
                    <div className={"barre-vie"}>
                        <div className={"titre-hp"}>HP :</div>
                        <div className={"barre-vide"}>
                            <div className={`barre-remplie ${pourcentageVie > 50 ? "vie-pleine" : pourcentageVie > 25 ? "vie-moyenne" : "vie-critique"}`} style={{ width: `${pourcentageVie}%` }}></div>
                        </div>
                    </div>
                    {typeCote === "joueur" && (
                        <div className={"detail-vie"}>{vieRestante}/{pokemon.hp_max}</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HudPokemon;
