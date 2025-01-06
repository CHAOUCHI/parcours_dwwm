import { useState } from "react";

export function Clicker(){
    const [compteur,setCompteur] = useState(0);
    function handleClick(){
        setCompteur(compteur+1);
    }
    
    return <button onClick={handleClick}>{compteur}</button>
}