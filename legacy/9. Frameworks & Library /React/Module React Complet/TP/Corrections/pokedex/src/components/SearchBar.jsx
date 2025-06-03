import "./SearchBar.css";
/**
 * 
 * @param {Object} props 
 * @param {Function} props.onPokemonFound  Une callback qui fournit un pokemon quand il est trouvé.
 * @returns JSX
 */
export function SearchBar({onPokemonFound}){
    
    /**
     * 
     * @param {Event} event Un event change de la balise input
     */
    function onSearchPokemon(event){
        const name = event.target.value;

        // Si le texte ecrit est vide j'arrète la fonction
        if(name.length < 1){
            return;
        }

        fetch(`https://pokebuildapi.fr/api/v1/pokemon/${name}`)
        .then(res=>{
            if(res.ok) return res.json();
        })
        .then(pokemon=>{
            console.log(pokemon);

            // Je vérifie que je reçois est bien un pokemon en m'assurant qu'il possède un pokedexId, 
            // si l'utilisation écrit par exemple "type/Eau" comme nom de pokemon je receverait un type et non un pokémon
            if(pokemon?.pokedexId){
                onPokemonFound(pokemon);    // J'appel la fonction en props
            }
        }).catch(err=>console.log(err));
    }

    return (
        <div>
            <input type="text" onChange={onSearchPokemon} className="search_bar"/>
        </div>
    );
}