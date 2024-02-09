import Pokemon from "../models/Pokemon";
import capacites from "./dataCapacites";
import types from "./dataTypes";

interface Pokemons {
    [key: string]: Pokemon;
}

const pokemons: Pokemons = {
    Pikachu: {
        numero: 25,
        nom: 'Pikachu',
        niveau: 5,
        type: types.electrique,
        attaque: 50,
        defense: 40,
        vitesse: 60,
        special: 55,
        hp: 35,
        image: 'Pikachu',
        capacites: [
            capacites.eclair,
            capacites.tonnerre,
        ],
    },
    Salameche: {
        numero: 4,
        nom: 'Salameche',
        niveau: 5,
        type: types.feu,
        attaque: 52,
        defense: 43,
        vitesse: 65,
        special: 50,
        hp: 39,
        image: 'Charmander',
        capacites: [
            capacites.lanceFlammes,
            capacites.griffe,
            capacites.crochetFeu,
        ],
    },
    Carapuce: {
        numero: 7,
        nom: 'Carapuce',
        niveau: 5,
        type: types.eau,
        attaque: 48,
        defense: 65,
        vitesse: 43,
        special: 50,
        hp: 44,
        image: 'Squirtle',
        capacites: [
            capacites.canonEau,
        ],
    },
    Bulbizarre: {
        numero: 1,
        nom: 'Bulbizarre',
        niveau: 5,
        type: types.plante,
        attaque: 49,
        defense: 49,
        vitesse: 45,
        special: 65,
        hp: 45,
        image: 'Bulbasaur',
        capacites: [
            capacites.fouetLianes,
            capacites.lanceSoleil,
        ],
    },
};

export default pokemons;