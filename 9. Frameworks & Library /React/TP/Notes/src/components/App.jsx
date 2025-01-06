import { useState } from "react";

import { Note } from "./Note.jsx";
import { Notes } from "../Notes.js";
import { AddNote } from "./AddNote.jsx";

export function App(){

    const [notes,setNotes] = useState(Notes.all());

    function onDeleteNote(note){
        Notes.delete(note);
        setNotes(Notes.all());
    }
    function onLikeNote(note){
        Notes.toogleLike(note);
        setNotes(Notes.all());
    }

    const likedNotes = notes.filter(note=>note.like==true);
    const notLikedNotes = notes.filter(note=>note.like==false);
    return (
        <div>
            <AddNote onAddNote={()=>setNotes(Notes.all())}/>
            { likedNotes.map(note=><Note note={note} key={note.id} onLiked={onLikeNote} onDelete={onDeleteNote}/>) }
            { notLikedNotes.map(note=><Note note={note} key={note.id} onLiked={onLikeNote} onDelete={onDeleteNote}/>) }
        </div>
    );
}
