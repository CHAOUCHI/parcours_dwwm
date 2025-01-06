import {Notes} from "../Notes";
export function AddNote({onAddNote}){

    function handleSubmit(e){
        e.preventDefault();
        const text = e.target.querySelector("#note_text").value;
        const newNote = Notes.add(text);
        onAddNote(newNote);
    }

    return (
        <form onSubmit={handleSubmit}>
                <input type="text" id="note_text"/>
                <button>Add note</button>
        </form>
    );
}