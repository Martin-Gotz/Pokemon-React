import Type from "./Type";

interface Capacite {
    id: number;
    nom: string;
    type: Type;
    pp: number;
    pp_max?: number;
    puissance: number;
    precision: number;
    categorie: 'physique' | 'special' | 'statut';
}

export default Capacite;