# Introduction au JavaScript et aux langages interprétés

Ce cours traite de la syntaxe du JavaScript et les avantages d'un langage haut niveau non fortement typés (typage dynamique).

# Les interpréteurs JavaScript

> Environnement d'execution : le programme ou système qui execute le code.

Un environnement d'execution est aussi appelé "*runtime environnement*" ou juste *runtime*.

## Les environnements d'execution du JavaScript

JavaScript propose deux choix d'environnement d'execution: 
- **NodeJS** un programme codé en C++ qui utilise le moteur V8 (Google) pour intérpréter le code et donne accès à l'OS via des API.
- Un **navigateur web** qui va executer le code via un intépréteur et donner accès au navigateur via des APIs.

## Installer NodeJS - Hello World
Installer nodejs pour interpréter du JS.

Installer ici : https://nodejs.org/fr

Sous Linux:
```bash
apt install nodejs
```

## Interpréteur nodeJS

Executez nodejs : 
```
node
```
Puis tapez cette ligne de code pour affichez Hello World.
```
console.log("Hello World!");
```

Vous devriez voir ceci dans la console :
```
Hello World
undefined
```
`Hello World` c'est la fonction log que nous avons appelez. Rien d'étonnant.

*`undefined`* par contre c'est la valeur de retour de la fonction `log`, au même titre que `printf()` return void en C `console.log()` renvoi *`undefined`* en JS.

`undefined` c'est la valeur de retour d'une fonction qui n'a pas d'appel à `return`; l'équivalent de `void` en C donc.

Par défaut node affiche la valeur de retour de la commande que l'on tape. 

Par exemple tapez
```
24
```
``node`` devrait vous afficher `24` la valeur de retour de 24. Logique.

C'est très pratique car node affiche des informations très utile à propos des objet ou simplement pour connaitre le type d'un fonction.

Tapez ceci pour connaitre le contenu de la variable `global`
```js
global
```
La variable `global` est en quelque sorte la grosse variable global qui contient toutes les variables de notre programme JavaScript.

Il contient par exemple la fonction setTimeout qui permet de programmer une fonction pour plus tard.

### Exercices
1. Affichez "Bonjour tout le monde à l'écran"
2. Testez nodejs pour faire des calculs comme `5*6/78`.
2. Affichez la valeur de retour de la fonction `console.log`. Que signifie undefiened et selon vous pour est ce que la log return undefined.
3. Affichez le contenu de l'objet global et cherchez les fonctions setTimeout et setInterval.
## Un ficher source .js
Créez un ficher nommé qui contien ce code : 
*main.js*
```js
let age = 25;
console.log("Salut ! ");
console.log("Je m'appelle Massinissa est j'ai "+age+" ans ! ");
```

## Executer le code source avec Nodejs. 
Dans le shell linux tapez :
```bash
node main.js
```
1. Observez le résultat.

Voyez comme le `+` possède des strings en tant qu'opérandes, choses impossibles en C ! 
2. Selon vous quels sont les nouvelles capcités de l'opérateur `+` en JavaScript par rapport à son habituel utilisation pour les additions de nombres(int ou float) en C.

# Déclarez une variable
```js
let age = 24;
```
Les points virgules sont optionels en JS mais mieux vaux les laisser pour prévenir certain cas de figures problématiques.
Je peux afficher 
# Typage dynamique
# Fonction callback
- declaratrion
- setTimeOut()
- setinterlave()

# Liste, des tableau plus puissants
- foreach
- filter
- map
- reduce

# Objet, des struct plus puissance.
- attribution dynamique d'attributs d'objet
- Tout est un objet donc les fonction,variable,et tableau sonbt tous des objet.