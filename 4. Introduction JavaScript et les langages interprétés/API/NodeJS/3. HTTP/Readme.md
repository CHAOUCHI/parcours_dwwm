# Serveur HTTP

## A quoi sert le HTTP ?
Le HTTP est le protocole utilisé par les applications web. Le HTTP est un protocole client serveur basé sur le protocole TCP.

## Fonctionnement du HTTP

### Une requete pour demander une ressource
Le HTTP permet l'envoi par un client HTTP d'une requête HTTP au serveur. Une requête HTTP a pour but de récupérer une unique ressource. 

Voici une requête http brut qu'un socket TCP pourrait envoyé au serveur pour communiquer en HTTP.
```http
GET / HTTP/1.1
Host: leboncoin.fr
User-Agent: curl/7.88.1
Accept: */*
```

La requete précédente à été produite par le client http linux `curl` :

```bash
curl --verbose leboncoin.fr
```

Voici la requete produite par un client bien plus lourd `firefox` :

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

```

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

Par exemple, le Header Content Lenge nous informe que la réponse fait exactement 167 octets. Le header content type quant à lui, nous informe que le type de données est HTML. 

Les navigateurs utilisent Head pour afficher correctement les données. Si la Données est du HTML. Alors il va vous afficher une page web si la donnée est une image point PNG, alors il va vous afficher l'image 1PDF 1PDF et cetera. Le serveur renvoie les données brutes et informe du type des données et c'est au client de s'adapter pour afficher correctement les données. 

C'est donc ça le rôle du développeur backend, récupérer des données et les fournir via le protocole HTTP en réponse au client. En informant le client correctement Quant au type des données à leur taille, quelques informations dont il aurait besoin. C'est ensuite au développeur frontend le client de développer l'affichage des données

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