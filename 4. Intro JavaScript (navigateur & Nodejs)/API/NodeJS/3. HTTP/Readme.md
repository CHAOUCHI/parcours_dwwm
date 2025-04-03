# Serveur HTTP

## A quoi sert le HTTP ?
Le HTTP est le protocole utilisé par les applications web. Le HTTP est un protocole client serveur basé sur le protocole TCP.

Il est utilisé pour : 
- Récupérer une ressource : le plus souvent du html, du css, du json,un png ou n'importe quel type de fichiers.
- Envoyer une données : le plus souvent un formulaire HTML ou du JSON.

Pour résumer, le protocole HTTP permet d'envoyer une ressource ou. Récupérer une donnée.

Il est donc idéal pour récupérer des pages HTML ou des données Json enregistrées dans une base de données. 

Mais il convient aussi pour uploader un fichier par exemple ou envoyer des données JSON à une base de données.

## Résumé du fonctionnement du HTTP

Le HTTP est un protocole cient serveur sans maintient de connexion. C'est à dire que lorsque le serveur reçoit une connexion TCP d'un client il va :

0. Accepter la connexion du client
1. Lire son message et formater la requete
2. Envoyer une reponse en fonction de la requete
3. Déconnecter le client

Voici un exemple de serveur HTTP qui accepte une connexion client, lit le message du client et envoie une réponse avant de déconnecter le client.

Ce serveur fournit un nombre aléatoire entre *min* et *max*. min et max sont fournit dans l'url comme ceci :

```http
http://localhost:3030/random?min=2&max=8
```

```js
import http from "http";
const server = http.createServer((request, response) => {
    //1. Un nouveau client est accepté !

    // Exemple de requete 
    // /random?min=0&max=10
    const url = new URL(`http://localhost/${request.url}`);

    if(url.pathname == "/random"){

    }

    response.end("\n");
    
    


}).listen(3030);

```


### Une requête pour demander une ressource
Le HTTP permet l'envoi par un client HTTP d'une requête HTTP au serveur. Une requête HTTP a pour but de récupérer une unique ressource. 

Voici une requête http brut qu'un socket TCP pourrait envoyer au serveur pour communiquer en HTTP.
```http
GET / HTTP/1.1
Host: leboncoin.fr
User-Agent: curl/7.88.1
Accept: */*
```

La requête précédente à été produite par le client http linux `curl` :

```bash
curl --verbose leboncoin.fr
```
<!-- 
Voici la requête produite par un client bien plus lourd `firefox` :

```http
GET / HTTP/2
Host: www.leboncoin.fr
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate, br, zstd
Connection: keep-alive
Cookie: __Secure-Install=fafbca23-1475-4e36-aaa5-9c0b37c8664b; datadome=IlORjDWzxA8CMwG8_CoNp45hvYwUyY4W1IcPJYERbvI4fzxfedfQre61I2Ls98JMTGFKcSMoB0RIGG3IPXmozJNVNGTeubZpF0ij7vIyHxZfnUU6~Bg75jOuDCTyH_6v; pa_privacy=%22exempt%22; _dd_s=aid=08864cbf-fd8c-4c86-af91-04cc0939ff82&rum=0&expire=1742408819045; utag_main=v_id:0195af9ae20d000daa01e5ae235d05046001900900c48$_sn:1$_ss:1$_pn:1%3Bexp-session$_st:1742409718093$ses_id:1742407918093%3Bexp-session; didomi_token=eyJ1c2VyX2lkIjoiMTk1YWY5YWUtMzc2MS02NjA3LTkwNWQtNzg3MjZiMDdlNTllIiwiY3JlYXRlZCI6IjIwMjUtMDMtMTlUMTg6MTE6NTguNDU0WiIsInVwZGF0ZWQiOiIyMDI1LTAzLTE5VDE4OjExOjU4LjQ1NFoiLCJ2ZXJzaW9uIjpudWxsfQ==; _pcid=%7B%22browserId%22%3A%22m8g8opubflf7aukk%22%2C%22_t%22%3A%22mo4lh2f8%7Cm8g8oqv8%22%7D; _pctx=%7Bu%7DN4IgrgzgpgThIC4B2YA2qA05owMoBcBDfSREQpAeyRCwgEt8oBJAE0RXSwH18yBbSgBZUACwBMAMwAcAH37SA5tMoBHAG7SQAXyA
Upgrade-Insecure-Requests: 1
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: cross-site
Priority: u=0, i
Pragma: no-cache
Cache-Control: no-cache
TE: trailers
``` -->

Je peux aussi faire cette requete via un fetch :

```http
fetch("http://leboncoin.fr");
```

> La requete fetch va echouer car le serveur http de leboncoin respect la regle du Same-Origin.

### Une réponse pour fournir la ressource
Le HTTP permet également, lorsque le serveur reçoit une requête, l'envoi d'une réponse par le serveur Au client. 

Une réponse http doit contenir un code pour dire si la ressource demandée a bien été fournie comme 200 si tout va bien, 300 si la requet n'est pas autorisé ou encore le fameux 404 si la ressource n'existe pas et surtout la ressource demandée.


La réponse http de la commande curl vu plus tôt :

```http
HTTP/1.1 301 Moved Permanently
Server: CloudFront
Date: Wed, 19 Mar 2025 18:08:05 GMT
Content-Type: text/html
Content-Length: 167
Connection: keep-alive
Location: https://leboncoin.fr/
X-Cache: Redirect from cloudfront
Via: 1.1 e36c32cacca3348932522b77d9a47dca.cloudfront.net (CloudFront)
X-Amz-Cf-Pop: CDG50-P2
X-Amz-Cf-Id: 3vE87hRPBiF-A6pJfUuVE6jiWk8BszpIRrhcjSWo-WJYUWKR_aHcFQ==

<html>
<head><title>301 Moved Permanently</title></head>
<body>
<center><h1>301 Moved Permanently</h1></center>
<hr><center>CloudFront</center>
</body>
</html>
```

Dans la première ligne de l'entête HTTP, nous trouvons de nombreuses informations comme :
- la version du protocole HTTP utilisé par le serveur 
- ou encore le code de statut de la réponse, c'est à dire est ce que la requête a été acceptée ? Est ce que la ressource existe ? Est ce que la requête a été refusée ? 

```
HTTP/1.1 301 Moved Permanently
```

Ici, notre requête a été refusée, comme le montre le code 301. C'est logique, CURL est un client en ligne de commande Linux et le serveur de leboncoin l'a donc reconnu comme étrange et repoussée.

Les lignes d'après sont des variables appelées header que le serveur nous transmet pour nous informer quant à la réponse. 

Par exemple, le Header `Content-Length` nous informe que la réponse fait exactement 167 octets. Le header `Content-Type` quant à lui, nous informe que le type de données est `HTML`. 

Les navigateurs utilisent header pour afficher correctement les données. Si la données est du HTML alors il va vous afficher une page web, si la donnée est une image .png, alors il va vous afficher l'image, pour un PDF un lecteur pdf et cetera. 

Le serveur renvoie les données brutes et informe du type des données et c'est au client de s'adapter pour afficher correctement les données. 

C'est donc ça le rôle du développeur backend :  récupérer des données et les fournir via le protocole HTTP en réponse au client. En informant le client correctement Quant au type des données à leur taille, quelques informations dont il aurait besoin. C'est ensuite au développeur frontend le client de développer l'affichage des données

### La ressource demandée, le body HTTP.
La ressource demandée est une chaîne de caractères qu'on appelle le *body* HTTP. 

#### Les types de body
Le *body* est le plus souvent du texte HTML mais parfois, il peut également être un fichier du CSS, du Javascript ou dans le cas des *API Rest* du *JSON* qui a été formaté à partir d'une base de données.

Le body étant une caractère et un caractère faisant un octet, il est facile via le protocole HTTP d'envoyer des fichiers. Les fichiers étant simplement une suite d'octets. On peut donc également envoyer à grâce au protocole HTTP des fichiers de n'importe quel type comme : mp3, mp4, png, jpeg, gif.

Parfois, le body peut être une structure un peu plus complexe, comme les données d'un formulaire HTML qui possède leur propre type spécial chez HTTP, le formdata. 

Mais concrètement, le body reste au final toujours une chaîne de caractères.
<!-- 
## La requête HTTP
Le message envoyé par les clients s'appelle une requête HTTP. La plupart du temps, la requête HTTP est produite par une fonction qui effectue une requête HTTP. 


Par exemple en javascript :

```js
fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/10")
.then(reponseHttp=>{
    console.log(reponseHttp);
});
``` -->

## Composantes d'une requête http

### Pré-requis d'une requête http (URL, METHODE, headers et body)

Pour fonctionner une requête http est faite :

- d'une **url** (obligatoire) : c'est la ressource demandé par le client, *leboncoin.fr/contact* par exemple
- d'une **méthode** (obligatoire) : par défaut c'est la méthode GET. *Mais il existe aussi d'autre méthode pour POST (ajouter) ou encore DELETE(supprimer)*
- de ***headers*** (optionels) : une suite de variable qui donne des infos complémentaire au serveur.
- d'un ***body*** (optionel) : les données que le client veut envoyer (POST) vers le serveur, comme le contenu d'un formulaire html par exemple.


### Exemple 1 - GET
Voici par exemple une requête http qui accéde à une donnée et ne fournit aucune donnée.

```http
GET /data.html HTTP/2
Host: localhost:3030
```

En JavaScript ça donne :

```js
fetch("http://localhost:3030/data.html");
```

On a donc :
- url : /data.html
- méthode : GET
- headers : `Host : localhost:3030`
- body : *aucun*

> fetch remplit tout seul le header `Host`

### Exemple 2 - POST


Voici un autre exemple d'une requête HTTP. Qui, elle, envoie des données JSON au serveur. 

```http
POST /new-product HTTP/2
Host : localhost:3030
Content-Type : application/json

{
    "name" : "Bic Mac",
    "price" : 6
}
```

En JavaScript ça donne :

```js
const newProduct = {
    name:"Big Mac",
    price:6
};

fetch("http://localhost:3030/new-product", {
    method: "POST",
    headers: new Headers({
        "Content-Type": "application/json"
    }),
    body: JSON.stringify(newProduct)
});
```

On a donc :
- url : /new-product
- méthode : POST
- headers : `Host : localhost:3030`,`Content-Type : application/json`
- body : *aucun*


### Request-line
La requestline est la première ligne durant le catch HTTP. Elle est composée de la méthode, de la ressource et de la version http utilisée par le client. 

Exemples :

```http
GET /data.html HTTP/1.1
```
```http
POST /new-product HTTP/2
```

```http
GET / HTTP/1.1
```

Souvent, les requests Nine ne précisent pas l'ip ou le nom de domaine de la machine hôte qui contient le serveur HTTP. 

Il est donc nécessaire d'utiliser un header pour lui fournir. 

### Header

Un header est une variable HTTP présente dans une requête HTTP. 

Il se trouve juste en dessous de la request line. 

Vous pouvez placer autant de headers que vous le souhaitez.

> Certains noms prédéfinis existent comme content type et host, mais vous pouvez également placer vos propres headers en les nommant comme bon vous semble.


Par exemple, le Header host permet de définir l'adresse IP ou le nom de domaine de la machine hote. 

```http
Host : leboncoin.fr
```

Le header content taille, pluie permet de définir le type du body. 
Que ce soit le petit d'une requête HTTP pour envoyer un nouveau produit par exemple. 

```http
Content-Type : application/json
```
Ou bien le body d'une réponse HTTP si le serveur HTTP a envoyé du HTML par exemple.

```http
Content-Type : text/html
```

Voir même si la requête envoi un formulaire HTTP

```http
Content-Type: multipart/form-data
```
> La réception d'un formulaire HTML et un peu plus complexe a coder coté serveur que la reception de données Json, nous aborderons ce sujet plus tard.

### Body

Parfois, une requête a besoin d'envoyer une donnée. Que ce soit du JSON ou bien un formulaire HTML.

Peu importe le type de données, vous voyez au final, tout est formatable sous la forme de textes.

C'est ainsi que le HTTP fonctionne.

Les body se trouvent juste en dessous des headers après avoir laissé un espace vide (`\n\r`).

```http

{
    "name" : "Bic Mac",
    "price" : 6
}
```

## Composantes d'une réponse HTTP
### Pré-requis d'une réponse
Les prérequis d'une réponse HTTP sont plus ou moins les mêmes que celles d'une requête HTTP.

La seule différence se trouve dans la request line qui devient la statue line.

Aussi donc une réponse HTTP basique

```http
HTTP/1.1 200 OK
Content-Type: text/html

<h1>Accueil</h1>
<p>Bienvenue sur mon site web!</p>
```

Ou encore une autre réponse HTTP qui cette fois ci renvoie à un tableau d'objet au format Json. 

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "nom": "Ordinateur Portable Lenovo",
    "prix": 799.99
  },
  {
    "nom": "Smartphone Samsung Galaxy S23",
    "prix": 580
  }
]
```

Ou encore la fameuse erreur 404 avec une réponse HTTP qui indique que la ressource de monnaie n'existe pas.

```http
HTTP/1.1 404 Not Found
Content-Type: text/html

<h1>Erreur ressource inconnu !</h1>
```


### Status Line

Status line est composé de la version HTTP du code d'erreur et du message d'erreur. 

```http
HTTP/VERSION statusCode statusMessage
```

Par exemple, si le serveur utilise http version 1.1 et que tout s'est bien passé, la status line de la réponse ressemblera à ceci :

```http
HTTP/1.1 200 OK
```

Par contre, si le client a fourni une ressource inconnue dans la requête, la réponse ressemblera plutôt à quelque chose comme ça. 

```http
HTTP/1.1 404 Not Found
```

### Header
Il n'y a aucune différence entre les headers d'une requête et les headers d'une réponse. 

Il est tout de même important de savoir qu'un serveur qui ENVOi une donnée en réponse doit précise le content-type de la donnée.
### Body
Il n'y a aucune différence entre le body d'une requête et celle d'une réponse.

Il est tout de même important de savoir qu'un serveur qui ENVOi une donnée en réponse doit préciser cette donnée dans le body de la réponse.

La réponse de donc obligatoirement être au format textuel.

C'est plutôt facile de s imaginer ça pour du json par contre pour des fichiers c'est plus compliqué.

Pour la réponse de fichier il y a 2 méthodes :
- Envoyez simplement dujison qui contient l'URL du fichier.(Le plus courant)
- Serialiser le fichier en base64 pour envoyer le fichier brut dans la réponse.

Par exemple, pour voir que l'a PI Pokémon envoie les images sous la forme d'un URL placé dans un objet JSON.

```http
https://pokebuildapi.fr/api/v1/pokemon/Pikachu
```

Réponse :

```http
{
    "id":25,
    "pokedexId":25,
    "name":"Pikachu",
    "image":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
}
```

Ici, l'image du pokemon est une URL sur un serveur HTTP qui s'appelle visiblement `raw.githubusercontent.com/PokeAPI`.


Peu importe votre cas de figure, la plupart du temps, une réponse HTTP d'une API REST sera de `Content-Type: application/json` alors qu'une réponse HTTP d'un serveur web classique sera de `Content-Type: text/html`.

## Exemple de serveur HTTP


1. Voici un exemple simple de serveur http qui tourne sur le port 4000

*server.mjs*
```js
import http from "http";
import {readFileSync} from "fs";

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

Accéder au serveur sur un navigteur à l'adresse http://localhost:4000 ou en ligne de commande avec curl.
```
curl --verbose localhost:4000
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




## Effectuer une requête HTTP

Il existe que ce soit plusieurs façons de faire une requête HTTP :

### Avec bash (Le terminal linux):
```bash
curl --verbose leboncoin.fr
```

### Avec postman

```bash
sudo snap install postman
```


```bash
snap run postman
```

POSTMAN est un client HTTP visuel. A vous donc de cliquer sur les bons boutons pour choisir la méthode HTTP, utiliser et écrire la bonne URL etc.

Postman est un outil très complet et vous permet même de pouvoir passer un body dans la requête, ainsi que différents headers HTTP.

Utilisez pour postman pour tester vos back end avant d'effectuer des `fetch()` sur votre front-end.

### Avec fetch

Faites une fonction javascript côté client qui permet d'effectuer une requête HTTP et de récupérer la réponse HTTP. En fait, c'est une fonction asynchrone et la réponse HTTP est disponible dans le then de la Promise.

https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

<!-- ### Avec la balise form

Le langage HTML possède déjà un client http intégré. On appelle ça la balise form.

Par défaut, la balise forme effectue une requête de type post sur l'u. RL du serveur qui a fourni le HTML.

Cependant, il est possible de configurer la balise forme pour créer une véritable requête HTTP. 

```html

``` -->


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
    
- requête HTTP - Envoyer au serveur
    - récupérer du texte
        - fetch ; body : req.on("data")
    - récupérer du JSON
        - fetch ; body ; Content type application/json ;  req.on("data") JSON.parse
    - Récupérer des query-params : https://nodejs.org/api/all.html#all_url_class-urlsearchparams
    - Récupérer un formulaire
        - fetch ; body : formData ; Content type multipart/form-data
        -  req.on("data") (parse form Data)???? -->