# Introduction au JavaScript et aux langages interprétés

Ce cours traite de la syntaxe du JavaScript et les avantages d'un langage haut niveau non fortement typés (typage dynamique).

Retrouvez la syntaxe complète sur le site de la mdn ou sur w3schools.

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

Par défaut node cli affiche la valeur de retour de la commande que l'on tape. 

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
1. Affichez "Bonjour tout le monde" à l'écran.
2. Testez nodejs pour faire des calculs comme `5*6/78`.
2. Affichez la valeur de retour de la fonction `console.log`. Que signifie `undefined` et selon vous pour est ce que la log return `undefined`.
3. Affichez le contenu de l'objet `global` et cherchez les fonctions `setTimeout` et `setInterval`.

## Un ficher source .js
Créez un ficher nommé qui contient ce code : 

*main.js*
```js
let age = 25;
const prenom = "Massinissa";
console.log("Salut !");
console.log("Je m'appelle "+prenom+" et j'ai "+age+" ans !");
```

## Executer le code source avec Nodejs. 
Dans le shell linux tapez :
```bash
node main.js
```
1. Observez le résultat.

Voyez comme le `+` possède des strings en tant qu'opérandes, chose impossible en C ! 

2. Selon vous quelles sont les nouvelles capacités de l'opérateur `+` en JavaScript par rapport à son utilisation habituel pour les additions de nombres (int ou float) en C.

# Déclarez une variable
```js
let age = 24;
```
Les points virgules sont optionels en JS mais mieux vaux les laisser pour prévenir certain cas de figures problématiques.

Il existe deux types de variables en JavaScript : 
- Les variables : `let`. La valeur et le type de la variabe peux changer.
- Les constantes : `const`. La valeur et le type de la variable sont constants. 

Toute opérations d'affectation via l'opérateur `=` provoquera l'arret du programme et la levée d'une erreur : `TypeError : Assignement to constant variable`.

*main.js*
```js
const a = 4;
a = 30;         // TypeError !
a = "Salut";    // TypeError ! 
```

## Bloc

Une bloc d'instruction est une accolade ouvrante suivie d'une accolade fermante.
```js
{
    let a = 10;
}
console.log(a); // ReferenceError : a is not defined
```


# Types primitifs du JavaScript
Les types du JavaScript sont
- number : nombres réels NaN inclus (NaN est une valeur spécial qui signifie Not a Number le résultat d'une division par 0 par exemple).
- string
- undefined
- null
- Object
- Array

# Typage dynamique
Vous avez vu que le JavaScript permet le typage dynamique c'est à dire le changement de type d'une variable pendant son cycle de vie.

Contrairement au langage C il n'y pas besoin d'avoir concience de l'espace mémoire de chaque type en JS.

Les variables ne sont pas directement déclaré dans la pile ou dans la RAM mais dans la pile virtuel et la mémoire virtuel de l'interpréteur JavaScript nommées respectivement la *stack* et le *heap*.

La stack est la mémoire local à une fonction.
Lae heap est une mémoire globale au script entier.

# Scope, portée de variable

- Si une variable est déclarer avec `let` ou `const` elle est loval au bloc soit : les accolades d'un if,else,while,for ou d'une fonction voir même des accolades seules. ***UTILISEZ TOUJOURS `let` OU `const` pour déclarer vos variables.*** Et utilisez `const` de préférence voir éviter les effets de bords.
- Si une variable est déclaré avec `var`elle est est local à sa fonction ou global si elle est délclarée à la racine du script. A éviter donc , let ou const sont plus strict en rendant les variables local à n'importe quels blocs et pas seulement les fonctions.

1. Lisez le cours de la *mdn* et testez les exemples de code
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/let

# Fonction callback
Une fonction callback est une fonction passée en paramètre d'une autre.

```js
function hello(prenom){
    console.log("Salut "+prenom);
}

function welcome(name,callback){
    callback(name);
}

welcome("Massinissa",hello);
```

En JS les fonctions sont également des variables comme les autres et je peux les passer en paramètre d'une fonction tel quelle.

Il n'est pas forcement nécessaire de déclarer explisitement une fonction, on peut créer la fonction à la volé via une fonction fléchée anonyme.

```js
function welcome(name,callback){
    callback(name);
}

welcome("Massinissa",(prenom)=>{
    console.log("Salut "+prenom);
});
```

La fonction hello à été remplacée par une fonction fléchée anonyme.

## setTimeOut()
Les fonctions callback trouve leurs sens quand on souhaite effectuer une action asyncrone ou "pour plus tard".

Par exemple la fonction setTimeout permet d'executer une fonction après un certain delai passé en paramètre.

```js
function whatTimeIsIt(){
    console.log(Date());
}
setTimeout(whatTimeIsIt,5000);
```

Ici le navigateur va appeler la fonction `whatTimeIsIt` 5000ms après l'appel de `setTimeout`.

## setInterval()

setInterval() fonction de la même façon que setTimeout à la différence que l'appel de la fonction callback se fait à l'infini.

1. Codez une horloge en JavaScript qui affiche l'heure à chaque seconde.

# Les Liste (Array), des tableaux plus puissants

Les tableaux n'existe pas en JavaScript on parle plutot de liste.

Une liste ou Array est une structure de données qui possède : 
- un nombres dynamique d'élément 
- ces éléments peuvent être de type différent

On dit qu'une liste est l'instance de la classe `Array`.

> Les classes sont des structures de données orientée objet proche des structs C en plus puissantes.

*main.js*
```js

// Je déclare une liste vide
const table = [];

// Je déclare une liste de number
const notes = [10,12,18,19,15,8];

// Je déclare une liste de string
const names = [
    "Billy",
    "Arnaud",
    "Cléo"
];

// Je déclare une liste de number et de string
const ages = [24, 25, "8", "Immortel"];
```


On accède au éléments d'une liste, comme en C, via l'opérateur d'indexation.

```js
const notes = [10, 12, 18, 19, 15, 8];

for(let i = 0;i < notes.length; i++){
    console.log(notes[i]);
}
```

On peut également utiliser la forme raccourci *for of* de la boucle `for`.

```js
const notes = [10, 12, 18, 19, 15, 8];

for(const note of notes){
    console.log(note); // note équivaut à notes[i]
}
```

## Fonction usuelles des liste (Array)
Il existe un ensemble de fonctions de la classe `Array` qui permettent le traitement simplifier des liste.

Ces fonctions sont directement contenu dans l'objet elles sont donc appelées méthodes de l'objet.

> Une fonction contenu dans un objet s'appelle une méthode.

Les méthodes d'objet sont définis dans une structure de donnée appelée classe.

La classe des listes s'appelle `Array`.

Deux méthodes de classe différentes peuvent avoir le même nom pour ne pas les confondres dans le cours et dans la documention on peut écrire Array.push() pour dire La méthode push de la classe Array.

Vous trouverez toutes les méthodes des listes sur la documention de la classe Array.

1. Consulter la documention de la classe Array : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array

### push
Array.push() permet d'ajouter un élement à la fin de la liste.
https://www.w3schools.com/jsref/jsref_push.asp

### pop
La fonction pop supprime le dernier élement de la liste.

### splice
La fonction `Array.splice()` permet de supprimer un ou plusieurs élements à partir d'un index. Correctement utilisée elle permet de supprimer un élément en fonction de son index.

#### *Exemple de l'utilisation de la fonction Array.splice pour supprimer un élément d'une liste en focntion de son index.*
```js
const fruits = ["pomme","cassis","framboise"];
fruits.splice(0,1);
console.log(fruits); // [ "cassis","framboise" ]
```

## Le prototype de la classe Array
En JavaScript il est possible d'ajouter des nouvelles fonctions (méthodes) ou variables (attributs) aux objets primitifs du langages.

Cela est possible car la déclaration d'un nouvelle objet en JS se fait par clonage.

*La déclaration d'un objet en JavaScript*
![La déclaration d'un objet en JavaScript](https://refactoring.guru/images/patterns/content/prototype/prototype-comic-3-en.png?id=ff16dedbd0c10944d27bf87d2adcf8a6)

> https://en.wikipedia.org/wiki/Prototype-based_programming
> https://refactoring.guru/design-patterns/prototype

Quand je déclare une liste comme ceci :
```js
const fruits = [];
```
Je fais enfaite un clone d'un objet nommé `Array` et je récupère donc toutes les méthodes de la classe Array par la même occasion.

Pour voir les méthodes et attributs disponible de l'objet je peux afficher sa classe.

Dans la console d'un navigateur web tapez ceci
```js
console.log(Array);
```
> Attention à bien faire ce console.log dans un navigateur car l'impémentation de console.log de nodejs est moins verbeux que celles des navigateurs web.

1. Parcourez les attributs de cet object jusqu'à voir son prototype : `prototype: Array []`.
2. Cherchez la fonction `splice` dans le prototype.
3. Cherchez les méthodes qui permettent de : trier, filtrer, rechercher un élément dans le prototype puis dans la documention de la classe `Array`.

C'est ce prototype qui est cloné quand vous déclarez une liste.

### Ajouter une méthode au prototype (classe).
 Le JavaScript permet donc de customiser les classe primitives du langage en modifiant le prototype.

*removeIndex.js*
```js
/**
 * Ajout d'une méthode de suppression d'un élément d'une liste par index.
 */ 
Array.prototype.removeIndex = function(indexToRemove){
    this.splice(indexToRemove,1);
}

const fruits = ["pomme","cassis","framboise"];

fruits.removeIndex(0);
console.log(fruits); // [ "cassis","framboise" ]
```

- `this` est une constante qui signifie "lui-même" elle est remplacée par l'adresse de l'instance de la liste à l'execution de la fonction removeIndex. Ici l'instance est la variable fruits.
- `function(){ }` est une fonction *callback* similaire à une fonction fléchée `()=>{}`. Il est impossible d'utiliser une fonction fléchée ici car il interdit l'utilisation de la constante `this`.

### `forEach` - Parcourir une liste

`forEach` permet de parcourir une liste sans faire de boucle for explicite.

Pour ce faire elle va executer une fonction callback pour chaque tour de la boucle for et fournir l'itérateur (`tableau[i]`) en paramètre de la fonction.

```js
const notes = [10, 12, 18, 19, 15, 8];

notes.forEach((note)=>{
    console.log(note);
});
```

Pour chaque élément de la liste la fonction fléchée sera appelée et l'élément habituellement nommée `note[i]` sera fournit en paramètre de la fonction callback sous le nom de votre choix. Par convention on lui donne le même nom que la liste au singulier.

D'autres fonctions similaires existent :
- filter, qui renvoi une nouvelle liste contenant uniquement les éléments pour lesquelles la fonction callback renvoi true : https://www.w3schools.com/jsref/jsref_filter.asp
- map, renvoi une nouvelle liste fabriqué à partir de la liste d'origine. Par exemple on pourrait utiliser la fonction map pour transformer un tableau de prix de euro à dollars en tapant la formule de convertion EUR -> USD dans la fonction callback. 
- reduce

# Les objets, des struct plus puissantes.
- attribution dynamique d'attributs d'objet
- Tout est un objet donc les fonction,variable,et tableau sonbt tous des objet.