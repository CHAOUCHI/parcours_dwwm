import { useState } from "react";

export function App({socket}){
  const [author,setAuthor] = useState(null);
  const [messages,setMessages] = useState([]);

  /**
   * Send a message to the server.
   */
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

  /**
   * Définir le nom de l'utilisateur et ecoute l'evenement new_msg du serveur
   */
  function handleConnexion(event){
    event.preventDefault();

    const author = event.target.querySelector("#author").value;
    setAuthor(author);

    /**
     * Quand un message arrive (event new_msg)
     * Je met à jour l'etat messages
     */
    socket.on("new_msg",(newMessage)=>{
      // Je suis dans une fonction callback je n'ai donc pas accès à la dernière version de messages
      // React enregistre les fonction callback uniquement lors du premier affichage du composant
      // Pour React messages sera toujours est égal à une tableau vide.
      // J'utilise donc un fonction en paramètre de setMessages pour set le state messages
      // Cette syntaxe alternative permet de récuperer à coup sêr l'etat messages.
      setMessages((prevMessages)=>[...prevMessages, newMessage]); 
    });
  }

  /**
   * Je génère mes balises messages
   */
  const messageElements = messages.map((message,i)=>{
    const date = (new Date(message.date)).toUTCString();
    return (
      <div key={i} className="message">
        <p>{message.content}</p>
        <p>{message.author}</p>
        <p>{date}</p>
      </div>

    );
  });

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