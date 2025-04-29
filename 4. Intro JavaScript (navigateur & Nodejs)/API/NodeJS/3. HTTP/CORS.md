# CORS Explication

Par défaut le navigateur refuse toute requete vers un serveur qui ne possède pas la même origine que le client.

Par exemple

Une fetch de 
```
http://localhost:3000
```

Vers un server sur
```
http://localhost:4004
```

Sera refusé.

C'est pourquoi il faut qu ele serveur ajoute un header HTTP dans sa réponse pour dire au client qu'il est le bienvenue.

```http
Access-Control-Allow-Origin : *
```

```js
http.createServer((req,res)=>{
    res.appendHeader("Access-Control-Allow-Origin","*");


    res.end("coucou"):
}).listen(4004);
```

Le serveur accepte maintenant TOUTE les origines grâce a la valeur `*`.

> Je peux aussi précisier un origin précise.
