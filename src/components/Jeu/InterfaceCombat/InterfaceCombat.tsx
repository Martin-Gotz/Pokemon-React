import './InterfaceCombat.scss';
import React, {useState} from "react";
import Pokemon from "../../../models/Pokemon";
import Capacite from "../../../models/Capacite";
import BoutonCapacite from "../BoutonCapacite/BoutonCapacite";
import InfosCapacite from "../InfosCapacite/InfosCapacite";
import BoiteTextuelle from "../BoiteTextuelle/BoiteTextuelle";

interface InterfaceProps {
    pokemonJoueur: Pokemon;
    pokemonAdversaire: Pokemon;
    decisionAttaque: (idCapaciteChoisie: number) => void;
    texteEnCours: string;
}

const InterfaceCombat: React.FC<InterfaceProps> = ({pokemonJoueur, decisionAttaque, texteEnCours}) => {
    const [capaciteSurvolee, setCapaciteSurvolee] = useState<Capacite | null>(null);

    const obtenirCapaciteParId = (idCapacite: number): Capacite | undefined => {
        return pokemonJoueur.capacites.find(capacite => capacite.id === idCapacite);
    };

    const gererCapaciteHover = (capacite: Capacite) => {
        setCapaciteSurvolee(capacite);
    };

    const gererCapaciteOut = () => {
        setCapaciteSurvolee(null);
    };

    return (
        <div className={"interface"} >

            <BoiteTextuelle texteEnCours={texteEnCours}/>

            {!texteEnCours && (
                <>
                    <div className={"boite boite-selection"}>
                        {pokemonJoueur.capacites.map((capacite, index) => (
                            <BoutonCapacite
                                key={index}
                                capacite={capacite}
                                gererClic={() => decisionAttaque(capacite.id)}
                                gererMouseOver={() => gererCapaciteHover(capacite)}
                                gererMouseOut={gererCapaciteOut}
                            />
                        ))}
                    </div>
                    <div className={"boite boite-information"}>
                        {capaciteSurvolee && (
                            <InfosCapacite capacite={capaciteSurvolee} obtenirCapaciteParId={obtenirCapaciteParId}/>
                        )}
                    </div>
                    <div className={"boite boite-information-fond"}></div>
                </>
            )}
        </div>
    );
}

export default InterfaceCombat;
