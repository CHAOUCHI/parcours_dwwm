export function Note({note,onLiked, onDelete}){
    return (
        <div>
            <h2>{note.text}</h2>
            <p onClick={()=>{onLiked(note)}}>{note.like ? "❤️" : "♡"}</p>
            <button onClick={()=>{onDelete(note)}}>Delete</button>
        </div>
    );
}