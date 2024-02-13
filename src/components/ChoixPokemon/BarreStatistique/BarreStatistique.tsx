import React from 'react';
import './BarreStatistique.scss';

interface BarreStatistiqueProps {
    nomStat: string;
    valeurStat: number;
    couleur: string;
}

const BarreStatistique: React.FC<BarreStatistiqueProps> = ({ nomStat, valeurStat, couleur }) => {
    return (
        <div className="stat-bar">
            <div className="nom-stat">
                {nomStat}
            </div>
            <div className="conteneur-barre">
                <div className="barre" style={{ width: `${(valeurStat / 255) * 100}%`, backgroundColor: couleur }}></div>
            </div>
        </div>
    );
};

export default BarreStatistique;