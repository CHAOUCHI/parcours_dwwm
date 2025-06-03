# NodeJS

Habituellement le JavaScript tourne sur le navigateur du client, coté front-end donc. Il est donc impossible pour du JavaScript coté front-end d'accéder à une BDD SQL, d'envoyer des mails ou de gérer la connexion d'un utilisateur.

Voilà pourquoi il faut un programme coté serveur qui peut exécuter du JavaScript coté Back-End. Ce programme s'appelle NODEJS.

## NodeJS un runtime JavaScript

NodeJS est un environnement d'exécution JavaScript basé sur le moteur V8 utilisé par Chrome.

NodeJS va exécuter notre code JS et donne accès, via ses nombreuses apis au réseau, au fichier ou à une bdd SQL,etc.

> Voici un lien vers le cours introductif à nodejs du site officiel : https://nodejs.org/fr/learn/getting-started/introduction-to-nodejs

# Pré-requis

Pour correctement se servir de nodejs vous allez avoir besoin de deux logiciels :
- `nodejs` pour executer votre JavaScript
- `npm` (Node package manager) pour génerer un projet et installer facilement des extensions non-native à nodejs (comme le connecteur mysql par exemple).

## Installer NodeJS et npm sous Windows
Télécharger NodeJS Long term Support (LTS) ici : https://nodejs.org/en

> Long Term Support signifie que cette version de NodeJS est stable et toutes les failles seront corrigées pendant encore un moment. C'est donc une version fiable à utiliser pour la plupart des projets.

## Installer NodeJS et npm sous Linux
```bash
sudo apt install nodejs npm
```
> Sous linux il est necessairs d'installer explictement nodejs et npm
## Installer NodeJS et npm sous Mac
Avec HomeBrew, le gestionnaire de paquet MacOS :
```bash
brew install node
```
Ou à la main via le lien suivant : https://nodejs.org/en/download/

## Executer du JavaScript
Créez un fichier `app.js` et placez y un `console.log()` pour vérifier que tout fonctionne.

*app.js*
```js
console.log("Hello App");
```

Puis executer le code dans un terminal via la commande :
```bash
node app.js
```

## Travailler avec plusieur fichiers -  .js ou .mjs

### ESModule

En javascript il est possible d'exporter une variable d'un fichier pour l'importer dans un autre.

Avec les mots clés `export` et `import ... from`.

autre-fichier.js
```js
export let prenom = "Massinissa";
```

*main.js*
```js
import {prenom} from "./autre-fichier.js";

console.log(prenom);  // Massinissa
```

Normalement vous allez avoir un message d'avertissement d'un reparsing de CommonJS à ESModule.

Il faut donc changer l'extension de nos fichiers de .js à .mjs pour utiliser la syntaxe la plus moderne ESModule : les `import from`.

#### **Pourquoi les { }** dans l'import ?
Le partage de variables entres fichiers JavaScript se fait par d'exposition d'un objet d'export.

Les accolades Sont un opérateur D'extraction, d'attributs d'objets .C'est à dire Collieu D'export L'entièreté de l'objet autre fichier Je choisis uniquement Les attributs dont j'ai besoin .On appelle cela Le destructuring assignment.

Mais en soi, en javascript L'export de variables se fait simplement par l'export d'un objet qui contient toutes les variables exportées. .

Concrètement Je pourrais très bien exporter une variable `autreFichier` et écrire `aurtreFichier.prenom` dans mon code. 

autre-fichier.js
```js
export let prenom = "Massinissa";
```

*main.js*
```js
import autreFichier from "./autre-fichier.js";

console.log(autreFichier.prenom);  // Massinissa
```

### CommonJS
Nodejs est sortie avant l'uniformisation du JavaScript avec la norme ECMAScript.

Il utilise donc par défaut une ancienne syntaxe le CommonJS, une syntaxe d'import née de la communauté JavaScript dans les années 2010.

> Les CommonJS sont en .js et les ESModule sont en .mjs

Notre code précedent en CommonJS 
autre-fichier.js
```js
let prenom = "Massinissa";

module.exports =  {
    prenom
}
```

*main.js*
```js
const {prenom} = require("./autre-fichier.js");

console.log(prenom);  // Massinissa
```

NodeJS execute le code de autre-fichier lors de l'appel de require qui return la varibale `module.exports` (une primitive fournis par NodeJS)

> Notez l'utilisation du *destructuring assignement* pour déclarer une variable par un attribut d'objet, ici l'objet module.exports de l'autre fichier.
> https://www.w3schools.com/JS//js_destructuring.asp


Je me permet d'utiliser les deux syntaxes de temps à autre dans le cours. Vous devez les connaitres toutes les deux, même si ECModule est celle préféré par les frameworks (Angular, Vue, Next(React)).

ECModule est également **la seule syntaxe disponible dans le code front-end** d'un navigateur web. Privilégié donc `import from`.

