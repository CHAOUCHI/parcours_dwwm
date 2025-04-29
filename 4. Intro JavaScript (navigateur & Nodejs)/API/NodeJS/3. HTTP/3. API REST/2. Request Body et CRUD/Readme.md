# Recevoir le body de la requete HTTP du client.

Pour récupérer le body de la rêquete http du client il faut écouter l'événemment `data`, il nous fournit le *body* du client lorsqu'il arrive.

*server.mjs*
```js
import http from "http";


http.createServer((req,res)=>{
    // J'autorise les origines inconnus (pas localhost:4004)
    // Obligatoire pour le fonctionnement de fetch()
    res.appendHeader("Access-Control-Allow-Origin","*");
    
    // Lorsque le socket serveur reçoit CRLF
    req.on("data",(body)=>{
        // Il vous envoie le body
        // C'est à dire la suite de la requete HTTP(sans les headers)
        
        
        console.log(body); // J'affiche le body

        res.end("Body reçu, regardez la console du serveur nodejs :)");
    })

}).listen(4004);
```

> Pour que fetch fonctionn ej'ai ajouté un header special obligatoire pour le fonctionnement de fetch().
> ```http
> Access-Control-Allow-Origin : *
> ```
> Voir la doc sur la politique same origin
> https://developer.mozilla.org/fr/docs/Web/HTTP/Guides/CORS

> A l'inverse des headers le body peut être très volumineux, voilà pourquoi les concepteurs de nodejs on décider de rendre son accès asyncrone.

1. Lancez le serveur

```bash
node server.mjs
```

2. Effectuez une requête HTTP avec l'api fetch coté client grâce au code suivant.

```js

const dataString = "Salut tout le monde !";


const options = {
    method : "POST", // Fetch oblige l'utilisation de la méthode POST,
    body : dataString
}

// J'envoi la requête HTTP
fetch("http://localhost:4004",options)
.then(
    response => console.log(response)
)
.catch(err=>console.log(err));
```

3. Modifiez le code pour envoyer le contenu d'un formulaire HTML au serveur. Vous aurez réussi si vous voyez les données tapées dans le formulaire HTML s'afficher dans la console du serveur. *Le formulaire doit contenir les champs username et password*

> Attention le serveur et le client sont dans deux dossiers sépraré et sont deux logiciels séparés !