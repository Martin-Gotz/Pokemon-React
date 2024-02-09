import Capacite from "./Capacite";
import Type from "./Type";

interface Pokemon {
    numero: number;
    nom: string;
    niveau: number;
    type: Type;
    attaque: number;
    defense: number;
    vitesse: number;
    special: number;
    hp: number;
    hp_max?: number;
    image: string;
    capacites: Capacite[];
}

export default Pokemon;