import Capacite from "../models/Capacite";
import Type from "../models/Type";
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
        pp: 1,
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
    }
};

export default capacites;