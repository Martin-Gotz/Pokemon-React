import Capacite from "../models/Capacite";
import types from "./dataTypes";

interface Capacites {
    [key: string]: Capacite;
}

const capacites: Capacites = {
    lanceFlammes: {
        id: 1,
        nom: "Lance-Flammes",
        type: types.feu,
        pp: 10,
        puissance: 90,
        precision: 75,
        categorie: "special"
    },

    griffe: {
        id: 9,
        nom: "Griffe",
        type: types.normal,
        pp: 35,
        puissance: 40,
        precision: 100,
        categorie: "physique"
    },

    crochetFeu: {
        id: 10,
        nom: "Crochet Feu",
        type: types.feu,
        pp: 15,
        puissance: 60,
        precision: 100,
        categorie: "physique"
    },

    hydrocanon: {
        id: 2,
        nom: "Hydrocanon",
        type: types.eau,
        pp: 8,
        puissance: 110,
        precision: 65,
        categorie: "special"
    },

    canonEau: {
        id: 2,
        nom: "Canon à Eau",
        type: types.eau,
        pp: 15,
        puissance: 60,
        precision: 100,
        categorie: "special"
    },

    eclair: {
        id: 3,
        nom: "Eclair",
        type: types.electrique,
        pp: 15,
        puissance: 80,
        precision: 90,
        categorie: "special"
    },

    tonnerre: {
        id: 8,
        nom: "Tonnerre",
        type: types.electrique,
        pp: 10,
        puissance: 110,
        precision: 70,
        categorie: "special"
    },

    fouetLianes: {
        id: 4,
        nom: "Fouet Lianes",
        type: types.plante,
        pp: 15,
        puissance: 70,
        precision: 95,
        categorie: "physique"
    },

    lanceSoleil: {
        id: 5,
        nom: "Lance-Soleil",
        type: types.plante,
        pp: 10,
        puissance: 120,
        precision: 75,
        categorie: "special"
    },

    trempette: {
        id: 11,
        nom: "Trempette",
        type: types.eau,
        pp: 40,
        puissance: 0,
        precision: 0,
        categorie: "statut"
    },

    morsure: {
        id: 12,
        nom: "Morsure",
        type: types.normal,
        pp: 25,
        puissance: 60,
        precision: 100,
        categorie: "physique"
    },

    auraSphere: {
        id: 13,
        nom: "Aura Sphere",
        type: types.psy,
        pp: 20,
        puissance: 80,
        precision: 100,
        categorie: "special"
    },

    psyko: {
        id: 14,
        nom: "Psyko",
        type: types.psy,
        pp: 10,
        puissance: 90,
        precision: 100,
        categorie: "special"
    },

    gigaImpact: {
        id: 15,
        nom: "Giga Impact",
        type: types.normal,
        pp: 5,
        puissance: 150,
        precision: 90,
        categorie: "physique"
    },

    eclateGriffe: {
        id: 16,
        nom: "Éclate Griffe",
        type: types.normal,
        pp: 10,
        puissance: 75,
        precision: 100,
        categorie: "physique"
    },

    viveAttaque: {
        id: 19,
        nom: "Vive-Attaque",
        type: types.normal,
        pp: 30,
        puissance: 40,
        precision: 100,
        categorie: "physique"
    },

    dardVenin: {
        id: 20,
        nom: "Dard Venin",
        type: types.insecte,
        pp: 35,
        puissance: 15,
        precision: 100,
        categorie: "physique"
    },

    roulade: {
        id: 23,
        nom: "Roulade",
        type: types.roche,
        pp: 20,
        puissance: 30,
        precision: 90,
        categorie: "physique"
    },

    charge: {
        id: 2,
        nom: "Charge",
        type: types.normal,
        pp: 15,
        puissance: 50,
        precision: 100,
        categorie: "physique"
    },

    tornade: {
        id: 4,
        nom: "Tornade",
        type: types.vol,
        pp: 10,
        puissance: 40,
        precision: 100,
        categorie: "special"
    },

    picpic: {
        id: 5,
        nom: "Picpic",
        type: types.vol,
        pp: 35,
        puissance: 35,
        precision: 100,
        categorie: "physique"
    },

    ecrasFace: {
        id: 8,
        nom: "Écras'Face",
        type: types.sol,
        pp: 10,
        puissance: 40,
        precision: 100,
        categorie: "physique"
    },
};

export default capacites;