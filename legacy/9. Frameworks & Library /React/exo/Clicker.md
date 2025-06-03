# Activité Clicker
Objectif : Créer un bouton CLICK qui incrémente une valeur affichée dans une balise `<p>`.

## Pré-requis :
- useState

# Correction
<pre>






plus bas...
attention no spoil



























</pre>

*App.jsx*
```jsx
import { useState } from "react"

export function App(){

    const [compteur,setCompteur] = useState(0);
    
    function handleClick(){
        setCompteur(compteur+1);
    }

    return (
        <div>
            <p>{compteur}</p>
            <button onClick={handleClick}>+</button>
        </div>
    )
}
```