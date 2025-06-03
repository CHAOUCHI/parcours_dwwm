# Activité Horloge
Objectif : Créer une horloge qui affiche l'heure en temps réel.
## Pré-requis :
- Date
- setTimeout
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

    const [date,setDate] = useState(new Date());
    
    setTimeout(()=>{
        setDate(new Date());
    },1000);

    return (
        <div>
            <p>{date.getHours()} : {date.getMinutes()} {date.getSeconds()}</p>
            <button onClick={start}>START</button>
        </div>
    )
}
```