# Exercice du matin :
Soit un tableau de 100 pokémons.

**Mettre en place un filtre par point d'attaque similaires à l'exercice de la semaine dernière (tableau d'ordinateur avec un input:range).**

On récupère le tableau de pokémon dans le fichier main.jsx avec un fetch et on le passe en prop du composant `App`.

Vous aurez besoin de la fonction array.filter 

Voici les fichiers App.jsx et main.jsx neccéssaires pour ce projet.

*/src/main.jsx*
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'

fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
.then(res=>res.json())
.then(pokemons=>{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App pokemons={pokemons}/>
    </React.StrictMode>,
  );
});
```

*/src/App.jsx*
```jsx
export function App({pokemons}){
    // Vous possédez un tableau de 100 pokémons en prop.
    // Vous pouvez commencez à coder ici.
    

    return (
        <div> 
        
        </div> 
    )
}
```