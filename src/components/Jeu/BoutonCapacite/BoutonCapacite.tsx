import React from "react";
import Capacite from "../../../models/Capacite";
import "./BoutonCapacite.scss";

interface BoutonCapaciteProps {
    capacite: Capacite;
    gererClic: () => void;
    gererMouseOver: () => void;
    gererMouseOut: () => void;
}

const BoutonCapacite: React.FC<BoutonCapaciteProps> = ({ capacite, gererClic, gererMouseOver, gererMouseOut }) => {
    return (
        <div className={`bouton-capacite ${capacite.pp <= 0 ? "capacite-inactive" : ""}`}
             onMouseOver={gererMouseOver}
             onMouseOut={gererMouseOut}
             onClick={gererClic}
        >
            {capacite.nom}
        </div>
    );
};

export default BoutonCapacite;