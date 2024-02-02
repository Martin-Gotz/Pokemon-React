import Capacite from "./Capacite";

interface Pokemon {
    numero: number;
    nom: string;
    niveau: number;
    type: string;
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