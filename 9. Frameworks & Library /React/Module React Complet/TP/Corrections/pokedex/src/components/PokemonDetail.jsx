import { Pokemon } from "./Pokemon"
import "./PokemonDetail.css";

/**
 * 
 * @param {Object} props 
 * @param {Object} props.pokemon Le pokemon à détailler 
 * @param {Object} props.evolution L'évolution du pokemon à détailler
 * @param {Function} props.onClickEvolution Une callback qui fournit l'évolution lorsque l'on clique dessus
 * @returns JSX
 */
export function PokemonDetail({pokemon, evolution, onClickEvolution}){
    return (
        <div className="pokemon_detail">
            <div className="card">
                <p className="pokemon_id">n°{pokemon.id}</p>
                <img src={pokemon.image} alt={pokemon.name} className="pokemon_image" />
                <h2 className={pokemon.name}>{pokemon.name}</h2>
                <p className="types_heading">Types</p>
                <div className="types">
                    { pokemon.apiTypes.map((type,i)=><img src={type.image} alt={type.name} key={i}/>) }
                </div>
            </div>
            <div className="evolution" hidden={!evolution}>
                <h2>Evolution</h2>
                <Pokemon pokemon={evolution} onClickPokemon={onClickEvolution}/>
            </div>
        </div>
    )
}