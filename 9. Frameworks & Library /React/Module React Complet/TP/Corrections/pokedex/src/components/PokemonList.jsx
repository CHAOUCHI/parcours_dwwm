import { Pokemon } from "./Pokemon";
import "./PokemonList.css";

/**
 * 
 * @param {Object} props
 * @param {Array} props.pokemons Un tableau de pokémons à afficher
 * @param {Function} props.onClickPokemon Une callback qui fournit le pokemon cliqué
 * @returns JSX
 */
export function PokemonList({pokemons,onClickPokemon}){
    
    return (
        <div className="pokemon_list">
            { pokemons.map(pokemon=><Pokemon pokemon={pokemon} key={pokemon.id} onClickPokemon={(pokemon)=>onClickPokemon(pokemon)}/>) }
        </div>
    );
}