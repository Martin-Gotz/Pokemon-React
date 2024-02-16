import React from "react";
import Capacite from "../../../models/Capacite";
import "./InfosCapacite.scss"

interface BoutonCapaciteProps {
    capacite: Capacite;
    obtenirCapaciteParId: (id: number) => Capacite | undefined;
}

const BoutonCapacite: React.FC<BoutonCapaciteProps> = ({ capacite, obtenirCapaciteParId}) => {
    return (
        <>
            <div className={"type-capacite"}
                 style={{backgroundColor : capacite.type.couleur}}
            >
                {capacite.type.nom}
            </div>
            <div className={"pp-capacite"}>{capacite.pp}/{obtenirCapaciteParId(capacite.id)?.pp_max}</div>
        </>
    );
};

export default BoutonCapacite;