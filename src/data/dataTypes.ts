import Type from "../models/Type";

interface Types {
    [key: string]: Type;
}

const types: Types = {
    normal: {
        nom: 'Normal',
        couleur: '#999',
        faiblesses: [],
        resistances: [],
        immunites: [],
    },
    feu: {
        nom: 'Feu',
        couleur: '#FF4500',
        faiblesses: ['Eau'],
        resistances: [],
        immunites: [],
    },
    eau: {
        nom: 'Eau',
        couleur: '#4169E1',
        faiblesses: ['Plante'],
        resistances: [],
        immunites: [],
    },
    electrique: {
        nom: 'Électrique',
        couleur: '#FFD700',
        faiblesses: [],
        resistances: [],
        immunites: [],
    },
    plante: {
        nom: 'Plante',
        couleur: '#0f990f',
        faiblesses: ['Feu'],
        resistances: [],
        immunites: [],
    }
};

export default types;