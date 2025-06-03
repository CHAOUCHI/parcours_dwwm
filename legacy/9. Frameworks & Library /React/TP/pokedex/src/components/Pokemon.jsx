import "./Pokemon.css";
/**
 * 
 * @param {Object} props 
 * @param {Object} props.pokemon Le pokemon à afficher, assurez vous qu'il est un pokedexId
 * @param {Function} props.onClickPokemon Une callback qui fournit le pokemon cliqué
 * @returns JSX | null si le pokemon fournis est `null`
 */
export function Pokemon({pokemon,onClickPokemon = ()=>{}}){
    if(!pokemon) return null;

    return (
        <div className="pokemon" onClick={()=>{onClickPokemon(pokemon)}}>
            <p className="pokemon_id">{pokemon.id}</p>
            <p className="pokemon_name">{pokemon.name}</p>
            <img className="pokemon_image" src={pokemon.image} alt={pokemon.name} />
        </div>
    )
}