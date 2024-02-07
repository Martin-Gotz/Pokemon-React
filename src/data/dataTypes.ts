import Type from "../models/Type";

interface Types {
    [key: string]: Type;
}

const types: Types = {
    normal: {
        nom: 'Normal',
        couleur: '#999',
        faiblesses: [],
        immunites: [],
    },
    feu: {
        nom: 'Feu',
        couleur: '#FF4500',
        faiblesses: [],
        immunites: [],
    },
    eau: {
        nom: 'Eau',
        couleur: '#4169E1',
        faiblesses: [],
        immunites: [],
    },
    electrique: {
        nom: 'Électrique',
        couleur: '#FFD700',
        faiblesses: [],
        immunites: [],
    },
    plante: {
        nom: 'Plante',
        couleur: '#0f990f',
        faiblesses: [],
        immunites: [],
    }
};

export default types;