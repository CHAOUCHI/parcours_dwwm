export function PickNumber({onValueChange}){

    function updateValue(event){
        console.log(event.target.value);
        onValueChange(event.target.value);
    }

    return (
        <div>
            <input type="number" onInput={updateValue}/>
        </div>
    )
}