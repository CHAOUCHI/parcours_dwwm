import { useState } from "react";
import { PokemonList } from "./components/PokemonList";
import { PokemonDetail } from "./components/PokemonDetail";
import { SearchBar } from "./components/SearchBar";
import "./App.css";
/**
 * @param {Object} props 
 * @param {Array} props.pokemons Un tableau de pokemon à récupérer depuis l'api pokebuild
 * @returns JSX
 */

export function App({pokemons}) {
  /**
   * Je crée un state pour le pokemon actuellement affiché en détail
   */
  const [currentPokemon,setCurrentPokemon] = useState(pokemons[0]);

  /**
   * Je recupère l'évolution du pokemon si elle existe
   */
  let currentPokemonEvolution = null;
  if(currentPokemon?.apiEvolutions.length > 0){
    const evolutionId = currentPokemon.apiEvolutions[0].pokedexId -1;
    currentPokemonEvolution = pokemons[evolutionId];
  }
  
  /**
   * Est appelée quand un pokemon à été trouvé depuis la SearchBar
   * @param {Object} pokemon Le pokemon trouvé 
   */
  function onPokemonFound(pokemon){
    setCurrentPokemon(pokemon);
  }

  return (
    <div className="app">
        <PokemonList pokemons = {pokemons} onClickPokemon={setCurrentPokemon}/>
        <div className="col-2">
          <SearchBar onPokemonFound={onPokemonFound}/>
          <PokemonDetail pokemon={currentPokemon} evolution={currentPokemonEvolution} onClickEvolution={(evolution)=>{ setCurrentPokemon(evolution) }}/>
        </div>
    </div>
  )
}

