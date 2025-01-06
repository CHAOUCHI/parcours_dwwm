export class Notes{

    static get(id){
        /**
         * Getting notes from localStorage
         */
        const notesJSON = localStorage.getItem("notes");
        const notes = notesJSON ? JSON.parse(notesJSON) : [];

        return notes.find(note=>note.id == id);
    }
    static all(){
        /**
         * Getting notes from localStorage
         */
        const notesJSON = localStorage.getItem("notes");
        const notes = notesJSON ? JSON.parse(notesJSON) : [];

        return notes;
    }

    static add(text){
        /**
         * Update then get count id from localStorage
         */
        let countId = Number(localStorage.getItem("countId"));
        localStorage.setItem("countId",countId+1);
        countId = Number(localStorage.getItem("countId"));

        /**
         * Getting notes from localStorage
         */
        const notes = this.all();

        /**
         * Add a note to localStorage
         */
        localStorage.setItem(
            "notes",
            JSON.stringify(
                [
                    ...notes,
                    {
                        id : countId,
                        text : text,
                        date : Date.now(),
                        like : false
                    }
                ]
            )
        );
        
        return Notes.get(countId);
    }

    static delete(deletedNote){
        /**
         * Get all notes except the deleted one
         */
        const notesToKeep = this.all().filter(note=>{
            return note.id != deletedNote.id
        });

         /**
         * Update notes inside localStorage
         */
         localStorage.setItem("notes",JSON.stringify(notesToKeep));
    }

    static toogleLike(likedNote){
        /**
         * Get updated notes
         */
        const updatedNotes = this.all().map(note => {
            if(likedNote.id == note.id){
                return {
                    ...note,
                    like : !likedNote.like // set like to true
                };
            }
            return note;
        });

        /**
         * Update notes inside localStorage
         */
        localStorage.setItem("notes",JSON.stringify(updatedNotes));
    }
}