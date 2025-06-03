import { useState } from 'react'
import { ListNotes } from './components/ListNotes.jsx'
import { AddNote } from './components/AddNote.jsx'
import './App.css'

function App()
{
    //Code qui s'exécute au chargement de la page
    const existingNotes = JSON.parse(localStorage.getItem("formValues"));

    //Initialiser la liste des notes / si aucune data alors tableau vide
    const [listNotes, setListNotes] = useState(existingNotes ?? []);
    localStorage.setItem("formValues", JSON.stringify(listNotes));

    //Code qui s'exécute à chaque envoit du formulaire donc ajout d'une nouvelle note
    function addNoteToLocalStorage(note) {
        console.log(note);
        console.log(listNotes);
        localStorage.setItem("formValues", JSON.stringify([
            ...listNotes,
            note
        ]));
        setListNotes(JSON.parse(localStorage.getItem("formValues")));
        // const existingNotes = JSON.parse(localStorage.getItem("formValues"));
        // console.log(existingNotes);
        // setListNotes(existingNotes);
    };

    return (
        <div className='app'>
            <ListNotes listNotes={listNotes}/>
            <AddNote onAddNote={addNoteToLocalStorage}/>
        </div>
    )
}

export default App
