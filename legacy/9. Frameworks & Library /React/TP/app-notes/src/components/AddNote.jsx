import { useState } from "react"

export function AddNote({onAddNote}) {

    const [initialValues, setInitialValues] = useState({
        title: "",
        content: ""
    }); 

   // const [formValues, setFormValues] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        // setInitialValues((prevValue) => ({
        //     ...prevValue,
        // }))
        const form = e.target;
        const title = form.querySelector("#title").value;       // SEND VALUE
        const content = form.querySelector("#content").value;   // SEND VALUE
        const note = {title,content};
        onAddNote(note);
    }

    return (
        <div className="addNote">
            <form onSubmit={submitForm} className="newNote">
                <input 
                    type="text" 
                    id="title"
                    // onChange={(e) => 
                    //     setInitialValues({...initialValues, title: e.target.value})
                    // } 
                    placeholder="Titre de votre note"
                />

                <textarea 
                    cols="30" 
                    rows="10" 
                    id="content"
                    placeholder="Contenu de votre note" 
                    // onChange={(e) => 
                    //     setInitialValues({...initialValues, content: e.target.value})
                    // } 
                />
                <button type="submit">Enregistrer</button>
            </form>
        </div>
    )
}