import { useState } from "react";
import { useEffect } from "react"

export function ListNotes({listNotes}) {

    return (
        <div className="listNotes">
            <h1>Liste des notes</h1>
            <div>
            {listNotes.map((note, index) => {
                    return (
                        <div key={index}>
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}


