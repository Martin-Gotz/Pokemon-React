import React, {useEffect, useState} from "react";
import "./BoiteTextuelle.scss"

interface BoiteTextuelleProps {
    texteEnCours: string;
}

const BoiteTextuelle: React.FC<BoiteTextuelleProps> = ({ texteEnCours}) => {
    const [text, setText] = useState("");
    const [indiceCaractere, setIndex] = useState(0);
    const vitesseTexte = 10;

    useEffect(() => {
        setIndex(0);
        setText("");
    }, [texteEnCours]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (indiceCaractere < texteEnCours.length) {
                setText((prev) => prev + texteEnCours.charAt(indiceCaractere));
                setIndex((prev) => prev + 1);
            } else {
                clearInterval(interval);
            }
        }, vitesseTexte);

        return () => clearInterval(interval);
    }, [texteEnCours, indiceCaractere]);

    return (
        <div className={`boite boite-textuelle ${texteEnCours ? 'depliee' : ''}`}>
            {text}
            <svg className={"icone-suivant"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="#111">
                <polygon points="50 85, 100 0, 0 0"/>
            </svg>
        </div>
    );
};

export default BoiteTextuelle;