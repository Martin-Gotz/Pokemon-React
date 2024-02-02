import Type from "./models/Type";
import Pokemon from "./models/Pokemon";
import Capacite from "./models/Capacite";


// TYPES
export const feu: Type = {
    nom: 'Feu',
    couleur: '#FF4500',
    faiblesses: ['Eau', 'Roche'],
    immunites: ['Glace'],
};

export const eau: Type = {
    nom: 'Eau',
    couleur: '#4169E1',
    faiblesses: ['Électrique', 'Plante'],
    immunites: [],
};

export const electrique: Type = {
    nom: 'Électrique',
    couleur: '#FFD700',
    faiblesses: ['Sol'],
    immunites: ['Électrique'],
};

export const plante: Type = {
    nom: 'Plante',
    couleur: '#0f990f',
    faiblesses: ['Feu', 'Glace', 'Poison', 'Vol', 'Insecte'],
    immunites: [],
};



// CAPACITES
export const lanceFlammes: Capacite = {
    id: 1,
    nom: "Lance-Flammes",
    type: feu,
    pp: 10,
    puissance: 90,
    precision: 75,
    categorie: "special"
}
export const hydrocanon: Capacite = {
    id: 2,
    nom: "Hydrocanon",
    type: eau,
    pp: 8,
    puissance: 110,
    precision: 65,
    categorie: "special"
}
export const eclair: Capacite = {
    id: 3,
    nom: "Eclair",
    type: electrique,
    pp: 15,
    puissance: 80,
    precision: 90,
    categorie: "special"
}
export const fouetLianes: Capacite = {
    id: 4,
    nom: "Fouet Lianes",
    type: plante,
    pp: 1,
    puissance: 70,
    precision: 95,
    categorie: "physique"
}

// POKEMONS
export const donneesPokemonJoueur: Pokemon = {
    numero: 4,
    nom: 'Salamèche',
    niveau: 5,
    type: 'Feu',
    attaque: 52,
    defense: 43,
    vitesse: 65,
    special: 50,
    hp: 39,
    image: 'Charmander',
    capacites: [
        lanceFlammes, eclair, hydrocanon, fouetLianes
    ],
};

export const donneesPokemonAdversaire: Pokemon = {
    numero: 25,
    nom: 'Pikachu',
    niveau: 5,
    type: 'Electrique',
    attaque: 50,
    defense: 40,
    vitesse: 60,
    special: 55,
    hp: 35,
    image: 'Pikachu',
    capacites: [
        lanceFlammes, eclair, hydrocanon, fouetLianes
    ],
};