import { useState } from "react";

export function SearchBar({defaultValue}){
    
    function handleUserInput(event){
        console.log("Changing...");
        console.log(event.target.value);
        setTexte(event.target.value);
    }

    const [texte,setTexte] = useState("");

    return (
        <div>
            <p>{texte}</p>
            <input type="text" onChange={ handleUserInput } value={defaultValue}/>
        </div>
    );
}