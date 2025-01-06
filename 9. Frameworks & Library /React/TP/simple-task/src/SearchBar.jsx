export function SearchBar({onUserWrite}){
    function handleChange(event){
        const inputText = event.target.value;
        onUserWrite(inputText);    // Fournit à App l'input user
    }
    return (
        <div>
            <input onChange={handleChange}/>
            <h1>Hello {name}</h1>
        </div>
    )
}