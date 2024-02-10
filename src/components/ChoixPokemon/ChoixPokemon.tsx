import React, {useEffect, useState} from 'react';
import pokemons from "../../data/dataPokemons";
import './ChoixPokemon.scss';
import Pokemon from "../../models/Pokemon";

interface ChoixPokemonProps {
}

const ChoixPokemon: React.FC<ChoixPokemonProps> = () => {
    const [pokemonSelectionne, setPokemonSelectionne] = useState<Pokemon | null>(null);

    useEffect(() => {

    }, []);

    const handlePokemonSelection = (pokemon: Pokemon) => {
        setPokemonSelectionne(pokemon);
    };

    return (
        <div className={"choix-pokemon-global"}>
            <div className={"titre-choix-pokemon"}>
                Choix du Pokémon
            </div>
            <div className={"separateur"}></div>
            <div className={"cadre-choix-pokemon"}>
                <div className={"liste-pokemons"}>
                    {pokemons.map((pokemon: Pokemon) => (
                        <div key={pokemon.numero}
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
                                  <div className={"stat-bar"}>
                                      <div className={"nom-stat"}>
                                          HP
                                      </div>
                                      <div className={"conteneur-barre"}>
                                          <div className={"barre"} style={{width: `${(pokemonSelectionne.hp / 255) * 100}%`, backgroundColor: 'green'}}></div>
                                      </div>
                                  </div>
                                  <div className={"stat-bar"}>
                                      <div className={"nom-stat"}>
                                          Attaque
                                      </div>
                                      <div className={"conteneur-barre"}>
                                          <div className={"barre"} style={{width: `${(pokemonSelectionne.attaque / 255) * 100}%`, backgroundColor: 'yellow'}}></div>
                                      </div>
                                  </div>
                                  <div className={"stat-bar"}>
                                      <div className={"nom-stat"}>
                                        Défense
                                      </div>
                                      <div className={"conteneur-barre"}>
                                          <div className={"barre"} style={{width: `${(pokemonSelectionne.defense / 255) * 100}%`, backgroundColor: 'orange'}}></div>
                                      </div>
                                  </div>
                                  <div className={"stat-bar"}>
                                      <div className={"nom-stat"}>
                                        Vitesse
                                      </div>
                                      <div className={"conteneur-barre"}>
                                          <div className={"barre"} style={{width: `${(pokemonSelectionne.vitesse / 255) * 100}%`, backgroundColor: 'deeppink'}}></div>
                                      </div>
                                  </div>
                                  <div className={"stat-bar"}>
                                      <div className={"nom-stat"}>
                                        Spécial
                                      </div>
                                      <div className={"conteneur-barre"}>
                                          <div className={"barre"} style={{width: `${(pokemonSelectionne.special / 255) * 100}%`, backgroundColor: 'dodgerblue'}}></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </>
                    )}
                </div>
            </div>
            <div className={"conteneur-bouton-valider"}>
                <div className={"bouton-valider"}>Selectionner</div>
            </div>
        </div>
    );
}
export default ChoixPokemon;
