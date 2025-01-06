import { useEffect, useState } from "react";

export function ColorPicker({onColorChange}){
    const [red,setRed] = useState(0);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);

    function updateRed(event){
        setRed(event.target.value);   
    }
    function updateGreen(event){
        setGreen(event.target.value);
    }
    function updateBlue(event){
        setBlue(event.target.value);
    }

    useEffect(()=>{
        onColorChange({
            red : red,
            green : green,
            blue : blue
        });
    },[red,green,blue]);


    return (
        <div>
            <label>
                Red : 
                <input type="range" onInput={updateRed} max="255"/>
            </label>
            <br/>
            <label>
                Green : 
                <input type="range" onInput={updateGreen} max="255"/>
            </label>
            <br/>
            <label>
                Blue : 
                <input type="range" onInput={updateBlue} max="255"/>
            </label>
        </div>
    )
}