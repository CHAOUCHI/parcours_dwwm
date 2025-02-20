# GET - Récupérer des données avec fetch

La fonction `fetch()` permet de récupérer des données d'un serveur. Concrètement fetch est un **client http** il permet donc d'**effectuer une requête HTTP**.

## Pré-requis - un serveur http
La destination d'une requete http est un serveur http. Il nous en faut donc un.
-
1. Créer un fichier `server.js` et copié collé le code suivant.

Ne vous attardez pas sur le fonctionnement du serveur vous apprenderez son fonctionnement dans le module NodeJS.

Sachez seulement qu'il est accessible via l'origine :

`http://localhost:8080`

*server.js*
```js
import http from "http";

const PORT = 8080;
const IP = "0.0.0.0";

const server = http.createServer((req,res)=>{
    
    // Si le server et le client non pas la même origine
    // (si un client fetch sur le port 3000 fetch notre server port 8000)
    if(req.headers.origin !== undefined){
        console.log("request header - Origin : ",req.headers.origin);
        res.setHeader("Access-Control-Allow-Origin",req.headers.origin);
        console.log("response header - Access-Control-Allow-Origin : ",res.getHeader("Access-Control-Allow-Origin"));
    }
    const body = "abcd";
    // Ecrire la réponse HTTP
    res.write(body);

    // Terminer la connexion (Envoi la requête au client)
    res.end(); 

});


server.listen(8080,"0.0.0.0",()=>{
    console.log(`Server starts on ${IP}:${PORT}`);
});
```

2. Lancer le server http avec la commande `node`

```bash
node server.js
```

## Effectuer une requête http

A partir de cet index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
<script src="script.js"></script>
</html>
```

J'importe ce fichier script.js
```js
console.log("Hello");
```

### Fetch le server GET /
```js
fetch("http://localhost:8080")
.then(res=>{
    // Je log la réponse HTTP
    console.log(res)
    // Le body de la réponse est un tableau d'octet : { 'a','b','c','d'}
    // Node me fournit une fonction res.text() pour lire le body en temps que string
    return res.text();
})
.then(body=>{
    // Le résultat du premier then se trouve dans le suivant !

    // J'affiche le body
    console.log(body)
})
.catch(err=>console.log(err));
```

```

```