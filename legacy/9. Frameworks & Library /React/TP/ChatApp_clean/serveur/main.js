const { createServer } = require('node:http');
const io = require('socket.io');

// Création du serveur HTTP
const httpServer = createServer();  

// Liaison du socket TCP avec le serveur HTTP pour le handshake
const server = io(httpServer,{ cors : { origin : "*"} });   
// CORS Autorise le serveur et le client à avoir le même nom de domaine à savoir locahost

server.on('connection', (client) => {
    // Quand un client se connecte
    console.log('a user connected : '+ client.id);

    // J'ecoute l'evenement send_msg
    client.on("send_msg",(data)=>{
        // Quand je reçois un message d'un client
        console.log(data);

        // J'envoie le message à tout les clients
        // server.emit("new_msg",{
        //     content : message.content,
        //     author : message.author,
        //     date : message.date
        // });
        server.emit("new_msg",data);
    });
});


httpServer.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});



function createMsg(author,content,date = Date.now()){
    return {
        author,
        content,
        date
    };
}