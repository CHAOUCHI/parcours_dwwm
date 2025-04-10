# Les jetons JWT (JSON Web Token)
Un jeton (token) JWT est un moyen d'autoriser l'accès à une ressource HTTP. Dans sa forme la plus classique, un token est généré coté serveur lorsque le client effectue une requête d'autentification. Si le client fourni les bons identifiants, le jeton généré lui est fourni. Le client va ensuite fournir ce jeton à chaque requête, si le jeton est valide le serveur va lui renvoyer la ressource demandée, sinon un status code 401.

Un jeton peux transporter des données au format JSON appelées `payload` (un rôle utilisateur, un pseudo, ...). Il possède une signature qui certifie de sa validité et seul le serveur est capable de vérifier le jeton.

Un jeton JWT doit obligatoirement posséder une durée de validité (1semaine, 1mois, 1an).

## Structure d'un JWT
Un token JWT est une string JSON chiffré composé de 3 parties séparés par des points.

`header.payload.signature`

Le ***Header*** est un objet JSON qui défini l'algo utilisé pour le chiffrement du token.
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

Le ***Payload*** (charge utile) est une objet JSON qui contient les données utile à l'utilisation du token.
```json
{
  "sub": "massi.chaouchi@mail.com",
  "name": "Massinissa",
  "role":"admin",
  "iat":16273839,
  "exp":182929803
}
```
> `exp` est la date d'expiration du token : 1heure, 6mois ou 10s peut importe; si la date d'expiration est dépassée le token sera invalide.

> `ìat` (issued at) est la date d'émission du token

> `sub` (subject) est l'identifiant de la personne à qui on fournit le token

La ***Signature*** est une string chiffrée à partir de la concaténation du header et du payload ( chacun encodés en base64) séparée par un point. 

```
HS256(base64(header).base64(payload),secret_key)
```

Pour former le token final chaque partie est encodé en base64 et concaténé par un point.
```js
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

> ***eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9*** est le header encodé en base64. 

> ***eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ***. est le payload encodé en base64

> ***SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c*** est la singature encodé en base64

## Fournir un token JWT
Il existe de nombreuse bibliotèques pour générer un JWT, je vais utiliser le paquet npm `jsonwebtoken`.

Voir la liste des bibliotèques jwt  : https://jwt.io/libraries

```js
const jwt = require("jsonwebtoken");
const secret = "my-secret-key-of-the-dead";

app.post("/login",(req,res)=>{
    // testing user credentials...

    const payload = { name : "Massinissa", role : "admin"};
    const newToken = jwt.sign(payload,secret,{
        expiresIn : "30 days"
    });

    return res.json({jwt : newToken});
})
```
> La clé secrète doit être stockée dans un fichier séparé et ne jamais apparaitre dans un repo github (gitignore).

## Vérifier un token JWT
A chaque requete sensible, le client va devoir fournir le token jwt pour être autoriser à effectuer sa requête.

Le token ce place dans le header `Authorization` de la requête et est lu à chaque requete par un middleware.

> Je pourrais aussi recevoir le token dans le body de la rquete du client mais etant donné que fetch() refuse le body pour la méthode GET je ne pourrais pas fournir le token sur mes routes GET. Voilà pourquoi l'utilise le header `Authorization`.

### Le client envoie le token 

La requete du client ressemble donc par exemple à :

```http
POST /product HTTP/1.1

Host : localhost
Content-type : application/json
Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

{
    "name" : "Converse noire taille 42",
    "price" : 60,
    "categoryId" : 2
}
```
En JS :
```js
const token = localStorage.getItem("token"); // Soit un token
if(!token)return;

const headers = new Headers();
headers.append("Content-type","application/json");
headers.append("Authorization",`Bearer ${token}`);
fetch("http://localhost/product",{
    method : "POST",
    headers : headers,
    body : JSON.stringify({
        name : "Converse noire taille 42",
        price : 60,
        categoryId : 2
    })
});

```
### L'api vérifie le token
J'utilise un middleware pour vérifier le token.

Le token se trouve dans le header Authrozations je peux donc y accéder avec `req.headers.authorization`, attention tout de même il ne nous faut que la deuxième partie (sans "Bearer").

```js
const jwt = require("jsonwebtoken");
const secret = "my-secret-key-of-the-dead";

// J'utilise le middleware checkJwt pour vérifier le jwt avant la route post.
app.post("/product",checkJwt,(req,res)=>{
   // ...
   res.status(200).json({...});
})


function checkJwt(req,res,next){
    const authHeader = req.headers.authorization;
    // Je récupère uniquement le token du header pas le mot Bearer
    const token = authHeader.split(" ")[1];

    jwt.verify(token,secret,(err,decodedToken)=>{
        if(err){
            console.log(err.message);
            // La signature n'est pas bonne
            // ou le token est expiré
            // ou le token n'est pas un JWT
            res.status(401).json("Unauthorized, wrong token");
            return;
        }
        switch (decodedToken.role){
            case "admin":
                next();
                break;

            case "guest":
            default:
                res.status(401).json("Unauthorized role");
                break;
        }
    })
}
```

> Le status code 401 correspond à la réponse HTTP `Unauthorized`.

## Comment stocker le token dans le front
Le token envoyé par l'api peut être facilement stocké dans le localStorage.
```js
localStorage.setitem("token",token);
```
Je peut ensuite facilement accéder au payload du token pour vérifier des infos comme le role ou l'expiration du token par exemple.
```js
function getPayload(){
    const token = localStorage.getItem("token");
    const asciiPayload = token.split(".")[1];
    const jsonPayload = atob(ascciPayload);
    const payload = JSON.parse(jsonPayload);
    return payload;
}

const role = getPayload().role;
const isSessionExpired = new Date(getPayload().exp) < Date.now();
```
> atob (ascii to binary) permet de décrypté une string base64 en sa forme d'origine.

### Se *déconnecter*
Un système de connexion via JWT a pour vocation *d'effectuer une deconnexion* de façon automatique quand le token expire.

Cependant si vous souhaitez que le client n'est plus accès au token pour limité son accès à certaine page du front-end par exemple, il suffit de le supprimer du localStorage.
```js
localStorage.removeItem("token");
```

Se genre d'action peut s'effectuer si le token à expiré par exemple ou que le back-end me renvoi une erreur 401; je redige alors vers un formulaire de connexion pour que le client récupére un nouveau jeton JWT.

> Plus haut je dis *effectuer une deconnexion* mais en réalité le serveur est sans état (il n'a pas consience des utilisateurs qui le consomme); il n'effectue donc pas expréssement de déconnexion mais vérifie juste si le token à expiré via la méthode `jwt.verify()`.

<!-- ## Le client envoi son token

L'exemple plus haut montre comment fournir au client un token JWT et comment lire un token envoyé par le client. Cependant pour des raisons de sécurité il est préférable de fournir au client le token via un Http Cookie. 

Cela empèche le client d'avoir accès au token et donc sécurise le token en cas de code JS malveillant dans le client front.

Une fois placé dans un cookie une donnée est automatiquement renvoyée par le navigateur à chaque requête. Le client n'a donc pas besoin de gérer l'envoi du token.

Pour placer le token dans le cookie avec express :

```js
const jwt = require("jsonwebtoken");
const secret = "my-secret-key-of-the-dead";

app.post("/login",(req,res)=>{
    // testing user credentials...

    const payload = { name : "Massinissa", role : "admin"};
    const newToken = jwt.sign(payload,secret);

    res.cookie("token",newToken,{httpOnly:true});

    return res.json({msg : "Authorized"});
});
```

Le middleware `checkJwt` doit donc lire les cookies plutôt que le `body` de la requête.

```bash
npm i cookie-parser
```
```js
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// ...

function checkJwt(req,res,next){
    
    const token = req.cookies.token; // Lire les cookies plutôt que le body.


    jwt.verify(token,secret,(err,decodedToken)=>{
        if(err){
            res.status(401).json("Unauthorized, wrng token");
            return;
        }
        switch (decodedToken.role){
            case "admin":
                next();
                break;

            case "guest":
            default:
                res.status(401).json({msg:"Unauthorized role"});
                break;
        }
    })
}
``` -->
