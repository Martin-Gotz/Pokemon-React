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

    Magicarpe: {
        numero: 1,
        nom: 'Magicarpe',
        niveau: 5,
        type: types.eau,
        attaque: 49,
        defense: 49,
        vitesse: 45,
        special: 65,
        hp: 45,
        image: 'Magikarp',
        capacites: [
            capacites.fouetLianes,
            capacites.lanceSoleil,
        ],
    },

    Lucario: {
        numero: 1,
        nom: 'Lucario',
        niveau: 5,
        type: types.eau,
        attaque: 49,
        defense: 49,
        vitesse: 45,
        special: 65,
        hp: 45,
        image: 'Lucario',
        capacites: [
            capacites.fouetLianes,
            capacites.lanceSoleil,
        ],
    },

    Gallame: {
        numero: 1,
        nom: 'Gallame',
        niveau: 5,
        type: types.eau,
        attaque: 49,
        defense: 49,
        vitesse: 45,
        special: 65,
        hp: 45,
        image: 'Gallade',
        capacites: [
            capacites.fouetLianes,
            capacites.lanceSoleil,
        ],
    },

    Dracaufeu: {
        numero: 6,
        nom: 'Dracaufeu',
        niveau: 5,
        type: types.feu,
        attaque: 78,
        defense: 78,
        vitesse: 100,
        special: 85,
        hp: 78,
        image: 'Charizard',
        capacites: [
            capacites.lanceFlammes,
            capacites.aileDAcier,
        ],
    },

    Mewtwo: {
        numero: 150,
        nom: 'Mewtwo',
        niveau: 70,
        type: types.psychique,
        attaque: 110,
        defense: 90,
        vitesse: 130,
        special: 154,
        hp: 106,
        image: 'Mewtwo',
        capacites: [
            capacites.psyko,
            capacites.lanceSoleil,
        ],
    },

    Gyarados: {
        numero: 130,
        nom: 'Gyarados',
        niveau: 20,
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
        niveau: 40,
        type: types.psychique,
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

    Snorlax: {
        numero: 143,
        nom: 'Snorlax',
        niveau: 30,
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

    Arcanin: {
        numero: 59,
        nom: 'Arcanin',
        niveau: 30,
        type: types.feu,
        attaque: 110,
        defense: 80,
        vitesse: 95,
        special: 80,
        hp: 90,
        image: 'Arcanine',
        capacites: [
            capacites.lanceFlammes,
            capacites.hate,
        ],
    },

    Rondoudou: {
        numero: 39,
        nom: 'Rondoudou',
        niveau: 5,
        type: types.normal,
        attaque: 45,
        defense: 20,
        vitesse: 20,
        special: 45,
        hp: 115,
        image: 'Jigglypuff',
        capacites: [
            capacites.charme,
            capacites.repos,
        ],
    },

    Miaouss: {
        numero: 52,
        nom: 'Miaouss',
        niveau: 5,
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
        niveau: 5,
        type: types.insecte,
        attaque: 30,
        defense: 35,
        vitesse: 45,
        special: 20,
        hp: 45,
        image: 'Caterpie',
        capacites: [
            capacites.dardVenin,
            capacites.stringShot,
        ],
    },

    Aspicot: {
        numero: 13,
        nom: 'Aspicot',
        niveau: 5,
        type: types.insecte,
        attaque: 40,
        defense: 35,
        vitesse: 30,
        special: 20,
        hp: 40,
        image: 'Weedle',
        capacites: [
            capacites.dardVenin,
            capacites.mimiQueue,
        ],
    },

    Racaillou: {
        numero: 74,
        nom: 'Racaillou',
        niveau: 5,
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

    Mystherbe: {
        numero: 43,
        nom: 'Mystherbe',
        niveau: 5,
        type: types.plante,
        attaque: 50,
        defense: 55,
        vitesse: 30,
        special: 40,
        hp: 45,
        image: 'Oddish',
        capacites: [
            capacites.fouetLianes,
            capacites.tenebres,
        ],
    },

    Ptitard: {
        numero: 54,
        nom: 'Ptitard',
        niveau: 5,
        type: types.eau,
        attaque: 65,
        defense: 40,
        vitesse: 90,
        special: 45,
        hp: 40,
        image: 'Poliwag',
        capacites: [
            capacites.ebullition,
            capacites.noeudHerbe,
        ],
    },
};

const pokemonArray: Pokemon[] = Object.values(pokemons);

export default pokemonArray;