import React from 'react'
import ReactDOM from 'react-dom/client.js'
import {App} from './App.jsx'

import {io} from "socket.io-client";

const socket = io("localhost:3000");

// const msg = {
//   content : "Salut",
//   date : Date.now(),
//   author : "Massinissa"
// }

// socket.emit("send_msg",JSON.stringify(msg));
// socket.on("new_msg",(data)=>{
//   console.log(data);
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App socket={socket}/>
  </React.StrictMode>,
)
 