import './Interface.scss';
import React, {useEffect, useState} from "react";
import Pokemon from "../../models/Pokemon";
import Capacite from "../../models/Capacite";

interface InterfaceProps {
    pokemonJoueur: Pokemon;
    pokemonAdversaire: Pokemon;
    decisionAttaque: (idCapaciteChoisie: number) => void;
    texteEnCours: string;
}

const Interface: React.FC<InterfaceProps> = ({pokemonJoueur, decisionAttaque, texteEnCours}) => {
    const [capaciteSurvolee, setCapaciteSurvolee] = useState<Capacite | null>(null);
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0);
        setText("");
    }, [texteEnCours]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < texteEnCours.length) {
                setText((prev) => prev + texteEnCours.charAt(index));
                setIndex((prev) => prev + 1);
            } else {
                clearInterval(interval);
            }
        }, 20);

        return () => clearInterval(interval);
    }, [texteEnCours, index]);

    const obtenirCapaciteParId = (idCapacite: number): Capacite | undefined => {
        return pokemonJoueur.capacites.find(capacite => capacite.id === idCapacite);
    };

    const handleCapaciteHover = (capacite: Capacite) => {
        setCapaciteSurvolee(capacite);
    };

    const handleCapaciteOut = () => {
        setCapaciteSurvolee(null);
    };

    return (
        <div className={"interface"} >
            <div className={`boite boite-textuelle ${texteEnCours ? 'depliee' : ''}`}>
                {text}
                <svg className={"icone-suivant"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="#111">
                    <polygon points="50 85, 100 0, 0 0"/>
                </svg>
            </div>
            {!texteEnCours && (
                <>
                    <div className={"boite boite-selection"}>
                        {pokemonJoueur.capacites.map((capacite, index) => (
                            <div key={index} className={`bouton-capacite capacite-${index + 1} ${capacite.pp <= 0 ? "capacite-inactive" : ""}`}
                                 onMouseOver={() => handleCapaciteHover(capacite)}
                                 onMouseOut={handleCapaciteOut}
                                 onClick={() => decisionAttaque(capacite.id)}
                            >
                                {capacite.nom}
                            </div>
                        ))}
                    </div>
                    <div className={"boite boite-information"}>
                        {capaciteSurvolee && (
                            <>
                                <div className={"type-capacite"}
                                     style={{backgroundColor : capaciteSurvolee.type.couleur}}
                                >
                                    {capaciteSurvolee.type.nom}
                                </div>
                                <div className={"pp-capacite"}>{capaciteSurvolee.pp}/{obtenirCapaciteParId(capaciteSurvolee.id)?.pp_max}</div>
                            </>
                        )}
                    </div>
                    <div className={"boite boite-information-fond"}></div>
                </>
            )}
        </div>
    );
}

export default Interface;
