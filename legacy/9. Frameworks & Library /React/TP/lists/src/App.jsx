import { useState } from "react";
import { ColorPicker } from "./ColorPicker";
export function App(){
    const [styleContent,setStyleContent] = useState({color : "red"});
    
    function updateColor(newColor){
        setStyleContent({
            ...styleContent,
            color : `rgb(${newColor.red},${newColor.green},${newColor.blue})`
        });
    }

    return (
        <div>
            <p style={styleContent}>Salut</p>
            <ColorPicker onColorChange={updateColor}/>  
        </div>
    )
}