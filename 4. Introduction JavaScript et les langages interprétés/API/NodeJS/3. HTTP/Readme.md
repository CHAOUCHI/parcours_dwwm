# Serveur HTTP

## A quoi sert le HTTP ?
Le HTTP est le protocole utilisé par les applications web. Le HTTP est un protocole client serveur basé sur le protocole TCP.

## Fonctionnement du HTTP

### Une requete pour demander une ressource
Le HTTP permet l'envoi par un client HTTP d'une requête HTTP au serveur. Une requête HTTPA pour but de récupérer une unique ressource. 

### Une réponse pour fournir la ressource
Le HTTP permet également, lorsque le serveur reçoit une requête, l'envoi d'une réponse par le serveur Au client. 

Une réponse http doit contenir un code pour dire si la ressource demandée a bien été fournie comme 200 si tout va bien ou encore le fameux 404 si la ressource n'existe pas et surtout la ressource demandée.

### La ressource demandée, le body HTTP.
La ressource demandée est une chaîne de caractères qu'on appelle le *body* HTTP. 

#### Les types de body
Le *body* est le plus souvent du texte HTML mais parfois, il peut également être un fichier du CSS, du Javascript ou dans le cas des *API Rest* du *JSON* qui a été formaté à partir d'une base de données.

Le body étant une caractère et un caractère faisant un octet, il est facile via le protocole HTTP d'envoyer des fichiers. Les fichiers étant simplement une suite d'octets. On peut donc également envoyer à grâce au protocole HTTP des fichiers de n'importe quel type comme : mp3, mp4, png, jpeg, gif.

Parfois, le body peut être une structure un peu plus complexe, comme les données d'un formulaire HTML qui possède leur propre type spécial chez HTTP, le formdata. 

Mais concrètement, le body reste au final toujours une chaîne de caractères.

## Vocabulaires
Les mots clés importants à retenir pour le HTTP sont :

**- Le Serveur HTTP** : le programme qui reçoit les requêtes des clients et envoie les réponses; ce que nous allons coder dans ce module.

**- Le Client HTTP** qui effectue une requête à un serveur. Le plus souvent ce client est un **navigateur web** comme Firefox ou chrome. Le client peut parfois aussi être un **programme** comme `curl` ou *postman*. Ou encore être une **fonction** de programmation comme la fonction `Fetch` en JavaScript front-end. Le client est également appelé *user-agent*.

**- La Requête HTTP** Le message HTTP qui est envoyé par le client Au serveur. Une requête est composée de l'URL de la ressource demandée, que ce soit un fichier CSS Javascript, une image ou même parfois des données Json.

**- La Réponse HTTP**, le message HTTP, qui est envoyé par le serveur au client À la suite d'une requête effectuée par le client. La réponse contient la ressource demandée par la requête du client, que ce soit un fichier javascript CSS, une image ou même parfois des données JSON. ;)

**- Le Body HTTP** : La raison d'exister du HTTP ? La donnée demandée par la requête du client Au serveur. Le Body est une chaîne de caractères, un texte. Il peut donc contenir n'importe quelle donnée textuelle du CSS, du HTML, du Javascript.

## Exemple de serveur HTTP


1. Voici un exemple simple de serveur http qui tourne sur le port 4000

*server.mjs*
```js
import http from "http";
import {readFileSync} from "http";

const server = http.createServer((request,response)=>{
    
    res.appendHeader("Content-type","text/html");
    
    res.write(`<h1>Hello :)</h1>`);
    res.end();
});

server.listen(4000);
```
```bash
node server.mjs
```


Vous trouverez un exemple complet ici : 

2. Répo github : https://github.com/CHAOUCHI/public_serv
```bash
git clone https://github.com/CHAOUCHI/public_serv.git
cd public_server
node app.mjs
```
3. Image docker :
https://hub.docker.com/r/chaouchi/static-web-server
```bash
docker run -p 4000:4000 chaouchi/static-web-server:latest
```




## Effectuer une requete HTTP

Avec bash (Le terminal linux):
```bash
curl --verbose leboncoin.fr
```

<!-- - Réponse HTTP - Envoyer au client
    - servir des données textuels
        - res.write() ; Content-type : text/plain
    - servir des données HTML
        - res.write() ; Content-type : text/html
    - servir un site web
        - req.url ; fs.readFile ; Content-type : dynamic; res.write()
    - servir du JSON
        - res.write() ; JSON.stringify ;Content-type : application/json
    - servir des fichiers; Buffer; Content-type : application/octet-stream
    
- Requete HTTP - Envoyer au serveur
    - récupérer du texte
        - fetch ; body : req.on("data")
    - récupérer du JSON
        - fetch ; body ; Content type application/json ;  req.on("data") JSON.parse
    - Récupérer des query-params : https://nodejs.org/api/all.html#all_url_class-urlsearchparams
    - Récupérer un formulaire
        - fetch ; body : formData ; Content type multipart/form-data
        -  req.on("data") (parse form Data)???? -->