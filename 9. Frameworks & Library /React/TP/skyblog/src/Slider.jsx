
export function Slider({name="Range",onValueChange,min=0,max=100}){

    function updateValue(event){
        onValueChange(event.target.value);
    }

    return (
        <div>
            <label>
                {name}
                <input type="range" onInput={updateValue} min={min} max={max} defaultValue={10}/>
            </label>
        </div>
    )
}