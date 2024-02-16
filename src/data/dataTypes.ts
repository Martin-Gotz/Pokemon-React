import Type from "../models/Type";

interface Types {
    [key: string]: Type;
}

const types: Types = {
    normal: {
        nom: 'Normal',
        couleur: '#A8A878',
        faiblesses: ['Combat'],
        resistances: [],
        immunites: ['Spectre'],
    },
    feu: {
        nom: 'Feu',
        couleur: '#FF4500',
        faiblesses: ['Eau', 'Roche'],
        resistances: ['Plante', 'Glace', 'Insecte', 'Acier', 'Fée', 'Feu'],
        immunites: [],
    },
    eau: {
        nom: 'Eau',
        couleur: '#4169E1',
        faiblesses: ['Plante', 'Électrique'],
        resistances: ['Feu', 'Eau', 'Glace', 'Acier'],
        immunites: [],
    },
    electrique: {
        nom: 'Électrique',
        couleur: '#FFD700',
        faiblesses: ['Terre'],
        resistances: ['Électrique', 'Vol', 'Acier'],
        immunites: [],
    },
    plante: {
        nom: 'Plante',
        couleur: '#0f990f',
        faiblesses: ['Feu', 'Vol', 'Glace', 'Poison', 'Insecte'],
        resistances: ['Eau', 'Électrique', 'Plante', 'Glace', 'Sol'],
        immunites: [],
    },
    psy: {
        nom: 'Psy',
        couleur: '#c25acd',
        faiblesses: ['Insecte', 'Spectre', 'Ténèbres'],
        resistances: ['Combat', 'Psy'],
        immunites: [],
    },
    insecte: {
        nom: 'Insecte',
        couleur: '#8B4513',
        faiblesses: ['Feu', 'Vol', 'Roche'],
        resistances: ['Combat', 'Plante', 'Sol'],
        immunites: [],
    },
    roche: {
        nom: 'Roche',
        couleur: '#A9A9A9',
        faiblesses: ['Eau', 'Plante', 'Combat', 'Sol', 'Acier'],
        resistances: ['Normal', 'Vol', 'Feu', 'Poison'],
        immunites: [],
    },
    vol: {
        nom: 'Vol',
        couleur: '#A890F0',
        faiblesses: ['Électrique', 'Roche', 'Glace'],
        resistances: ['Plante', 'Combat', 'Insecte'],
        immunites: ['Sol'],
    },
    poison: {
        nom: 'Poison',
        couleur: '#A040A0',
        faiblesses: ['Sol', 'Psychique'],
        resistances: ['Combat', 'Fée', 'Plante', 'Insecte'],
        immunites: [],
    },
    sol: {
        nom: 'Sol',
        couleur: '#E0C068',
        faiblesses: ['Eau', 'Plante', 'Glace'],
        resistances: ['Poison', 'Roche'],
        immunites: ['Électrique'],
    },
};

export default types;