import { useState } from "react";

export function App({socket}){
    const [author,setAuthor] = useState(null);

    function sendMessage(event){
        event.preventDefault();

        const content = event.target.querySelector("#message").value;
        const msg = {
            content : content,
            date : Date.now(),
            author : "Massinissa"
        }

        socket.emit("send_msg",msg);  // Envoi du message au serveur
    }

    function handleConnexion(event){
        event.preventDefault();

        const author = event.target.querySelector("#author").value;
        setAuthor(author);
    }

    return (
    <div>
        <h1>Client Chat</h1>
        <form onSubmit={handleConnexion} hidden={author != null}>
        <input type="text" id="author" />
        <button >Se connecter</button>
        </form>

        <form onSubmit={sendMessage} hidden={author == null}>
        <input type="text" id="message" />
        <button>Envoyer</button>
        </form>
        
        <div>
        {messageElements}
        </div>
    </div>
    )
}