import React, {useState} from 'react';
import pokemons from "../../data/dataPokemons";
import './ChoixPokemon.scss';
import Pokemon from "../../models/Pokemon";
import BarreStatistique from "./BarreStatistique/BarreStatistique";

interface ChoixPokemonProps {
    validerChoixPokemon: (pokemonSelectionne: Pokemon) => void;
}

const ChoixPokemon: React.FC<ChoixPokemonProps> = ({validerChoixPokemon}) => {
    const [pokemonSelectionne, setPokemonSelectionne] = useState<Pokemon | null>(null);
    const [animationEnCours, setAnimationEnCours] = useState(false);

    const pokemonsTries = pokemons.sort((a, b) => a.numero - b.numero);

    const lancerAnimation = (pokemon: Pokemon) => {
        setAnimationEnCours(true);
        setTimeout(() => {
            validerChoixPokemon(pokemon);
        }, 900);
    };

    const handlePokemonSelection = (pokemon: Pokemon) => {
        setPokemonSelectionne(pokemon);
    };

    return (
        <div className={`choix-pokemon-global`}>
            <div className={"titre-choix-pokemon"}>
                Choix du Pokémon
            </div>
            <div className={"separateur"}></div>
            <div className={"cadre-choix-pokemon"}>
                <div className={"liste-pokemons"}>
                    {pokemonsTries.map((pokemon: Pokemon, index) => (
                        <div key={index}
                             className={`bouton-pokemon ${pokemonSelectionne === pokemon ? 'selectionne' : ''}`}
                             onClick={() => handlePokemonSelection(pokemon)}>
                            <div className={"conteneur-image-pokemon"}>
                                <img
                                    src={`/sprites/pokemon/${pokemon.image}_f.gif`}
                                    alt={pokemon.nom}
                                    className={"image-pokemon"}
                                />
                            </div>
                            <div className={"nom-pokemon"}>{pokemon.nom}</div>
                        </div>
                    ))}
                </div>
                <div className={"info-pokemon"}>
                    {pokemonSelectionne && (
                      <>
                          <div className={"portrait"}>
                              <img
                                  src={`/sprites/pokemon/${pokemonSelectionne.image}_f.gif`}
                                  alt={pokemonSelectionne.nom}
                                  className={"image-pokemon"}
                              />
                          </div>
                          <div className={"boite-information"}>
                              <div className={"nom"}>{pokemonSelectionne.nom}</div>
                                  <div className={"type"}>
                                      Type :
                                      {pokemonSelectionne.type && (
                                        <div className={"valeur-type"} style={{color : pokemonSelectionne.type.couleur}}>{pokemonSelectionne.type.nom}</div>
                                      )}
                                  </div>
                              <div className={"statistiques"}>
                                  <BarreStatistique nomStat="HP" valeurStat={pokemonSelectionne.hp} couleur="green" />
                                  <BarreStatistique nomStat="Attaque" valeurStat={pokemonSelectionne.attaque} couleur="yellow" />
                                  <BarreStatistique nomStat="Défense" valeurStat={pokemonSelectionne.defense} couleur="orange" />
                                  <BarreStatistique nomStat="Vitesse" valeurStat={pokemonSelectionne.vitesse} couleur="deeppink" />
                                  <BarreStatistique nomStat="Spécial" valeurStat={pokemonSelectionne.special} couleur="dodgerblue" />
                              </div>
                          </div>
                      </>
                    )}
                </div>
            </div>
            <div className={"conteneur-bouton-valider"}>
                <div className={"bouton-valider"} onClick={() => pokemonSelectionne && lancerAnimation(pokemonSelectionne)}>Selectionner</div>
            </div>
            <div className={`transition-overlay ${animationEnCours ? 'transition-animee' : ''}`}></div>
        </div>
    );
}
export default ChoixPokemon;
