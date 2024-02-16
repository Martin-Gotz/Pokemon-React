import Pokemon from "../models/Pokemon";
import capacites from "./dataCapacites";
import types from "./dataTypes";

const niveauPokemons = 20;
interface Pokemons {
    [key: string]: Pokemon;
}

const pokemons: Pokemons = {
    Pikachu: {
        numero: 25,
        nom: 'Pikachu',
        niveau: niveauPokemons,
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
        niveau: niveauPokemons,
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
        niveau: niveauPokemons,
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
        niveau: niveauPokemons,
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

    Rattata: {
        numero: 19,
        nom: 'Rattata',
        niveau: niveauPokemons,
        type: types.normal,
        attaque: 56,
        defense: 35,
        vitesse: 72,
        special: 25,
        hp: 30,
        image: 'Rattata',
        capacites: [
            capacites.charge,
            capacites.viveAttaque,
        ],
    },

    Pidgey: {
        numero: 16,
        nom: 'Roucool',
        niveau: niveauPokemons,
        type: types.vol,
        attaque: 45,
        defense: 40,
        vitesse: 56,
        special: 35,
        hp: 40,
        image: 'Pidgey',
        capacites: [
            capacites.tornade,
            capacites.picpic,
        ],
    },

    Ekans: {
        numero: 23,
        nom: 'Abo',
        niveau: niveauPokemons,
        type: types.poison,
        attaque: 60,
        defense: 44,
        vitesse: 55,
        special: 40,
        hp: 35,
        image: 'Ekans',
        capacites: [
            capacites.morsure,
            capacites.dardVenin,
        ],
    },

    Magicarpe: {
        numero: 129,
        nom: 'Magicarpe',
        niveau: niveauPokemons,
        type: types.eau,
        attaque: 10,
        defense: 55,
        vitesse: 80,
        special: 20,
        hp: 20,
        image: 'Magikarp',
        capacites: [
            capacites.trempette,
        ],
    },

    Leviathor: {
        numero: 130,
        nom: 'Leviathor',
        niveau: niveauPokemons,
        type: types.eau,
        attaque: 125,
        defense: 79,
        vitesse: 81,
        special: 100,
        hp: 95,
        image: 'Gyarados',
        capacites: [
            capacites.hydrocanon,
            capacites.morsure,
        ],
    },

    Alakazam: {
        numero: 65,
        nom: 'Alakazam',
        niveau: niveauPokemons,
        type: types.psy,
        attaque: 50,
        defense: 45,
        vitesse: 120,
        special: 135,
        hp: 55,
        image: 'Alakazam',
        capacites: [
            capacites.auraSphere,
            capacites.psyko,
        ],
    },

    Ronflex: {
        numero: 143,
        nom: 'Ronflex',
        niveau: niveauPokemons,
        type: types.normal,
        attaque: 110,
        defense: 65,
        vitesse: 30,
        special: 65,
        hp: 160,
        image: 'Snorlax',
        capacites: [
            capacites.gigaImpact,
            capacites.eclateGriffe,
        ],
    },

    Rondoudou: {
        numero: 39,
        nom: 'Rondoudou',
        niveau: niveauPokemons,
        type: types.normal,
        attaque: 45,
        defense: 20,
        vitesse: 20,
        special: 45,
        hp: 115,
        image: 'Jigglypuff',
        capacites: [
            capacites.charge,
        ],
    },

    Miaouss: {
        numero: 52,
        nom: 'Miaouss',
        niveau: niveauPokemons,
        type: types.normal,
        attaque: 70,
        defense: 45,
        vitesse: 90,
        special: 40,
        hp: 40,
        image: 'Meowth',
        capacites: [
            capacites.griffe,
            capacites.viveAttaque,
        ],
    },

    Chenipan: {
        numero: 10,
        nom: 'Chenipan',
        niveau: niveauPokemons,
        type: types.insecte,
        attaque: 30,
        defense: 35,
        vitesse: 45,
        special: 20,
        hp: 45,
        image: 'Caterpie',
        capacites: [
            capacites.dardVenin,
        ],
    },

    Racaillou: {
        numero: 74,
        nom: 'Racaillou',
        niveau: niveauPokemons,
        type: types.roche,
        attaque: 80,
        defense: 100,
        vitesse: 20,
        special: 30,
        hp: 40,
        image: 'Geodude',
        capacites: [
            capacites.roulade,
            capacites.griffe,
        ],
    },

    Sandshrew: {
        numero: 27,
        nom: 'Sabelette',
        niveau: niveauPokemons,
        type: types.sol,
        attaque: 75,
        defense: 85,
        vitesse: 40,
        special: 30,
        hp: 50,
        image: 'Sandshrew',
        capacites: [
            capacites.ecrasFace,
            capacites.griffe,
        ],
    },
};

const pokemonArray: Pokemon[] = Object.values(pokemons);

export default pokemonArray;