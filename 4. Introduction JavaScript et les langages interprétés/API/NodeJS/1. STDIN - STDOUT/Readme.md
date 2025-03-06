# STDIN et STDOU - Input output linux avec nodejs
Comme premier exemple d'api Node JS. Nous allons vouloir accéder à stdin et stdout sur notre système Linux.

Notre objectif est donc de pouvoir récupérer l'entrée du terminal utilisateur(stdin). Et d'écrire Dans stdout Le terminal utilisateur. 

## Ecrire dans le terminal de node - stdout


### L'objet console 

Pour écrire dans le terminal nodejs à décalrer la variable `console`.

L'objet console Possède. Plusieurs méthodes Fonction permettant d'écrire dans la console Les plus connues étant `console.log` `console.error` et `console.warn`.

```js
const userName = "Massinissa";

const userText = "Salut tout le monde !";


const message = formatMessage(userName,userText);

console.log(message);

/**
 * 
 * @param {string} userName Le nom de l'utilisateur
 * @param {string} userText Le texte qu'il souhaite afficher
 * @returns {string} Le message correctement formaté.
 */
function formatMessage(userName,userText){
    // Je test la validité des paramètres.
    if(typeof userName!="string" || typeof userText != "string"){
        console.warn("Warning : userName and userText parameters should be of time string ! ");
        throw TypeError(`Warning : userName and userText parameters should be of time string ! 
            But are of type :
                userName : ${typeof userName},
                userText : ${typeof userText}
            `);
    }

    if(userName == "" || userText == ""){
        console.warn("Warning : userName and userText parameters should not be empty string !");
        return;
    }

    const date = new Date(Date.now());
    // console.assert permet d'afficher un message SI et SEULEMENT SI la condition en paramètre un est fausse.
    console.assert(date instanceof Date,"date should be instance of Date");

    // Formate la date
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
    // Formate le message
    const message = `${time} ${userName} à dit "${userText}"`;

    return message;
}
```

### La fonction `createInterface()`

#### Demander une fois dans le terminal
La fonction `createInterface()` permet de créer un objet qui possède des fonctions d'accès en lecteur et écriture sur des file descriptors(fd).

Concretement sous linux il existe 2 fichiers (fd) permettant d'écrire dans le terminal ou de lire dans le terminal. `stdout` permet d'écrire dans le terminal. `stdin` permet de lire dans le terminal. La fonction `createInterface()` renvoi un objet de type `Interface` possédant certaines fonctions qui vont grandement nous simplifier la vie Dans l'écriture et surtout la lecture de stdin et stdout. 

La méthode la plus classique pour écrire dans stdout est d'utiliser la fonction `console.log` Seulement, il est également possible d'écrire directement dans stdout, nous le souhaitons Comme ceci :

```js
import { stdin, stdout } from "process";
import {createInterface} from "readline";

// Je crée un objet qui fait interface avec les fd stdin et stdout
const logger = createInterface({
    input : stdin,
    output : stdout
});


// J'écrit dans le output, stdout. J'acrit dans le terminal donc
logger.write("Salut");

// Il est obligatoire de férmer l'interface car le programme est bloqué à cause de la lecture de stdin (comme un scanf le ferait en C)
logger.close();
```

Il est inutile d'utiliser un Interface pour écrire dans le terminal car console.log le fait dèjà très bien. Par contre l'interface deviens très utilise lire le terminal et demander à l'utilisateur de taper quelque chose.

Pour lire nous utilisons la fonction question de la classe Interface.

```js
import { stdin, stdout } from "process";
import {createInterface} from "readline";

// Je crée un objet qui fait interface avec les fd stdin et stdout
const logger = createInterface({
    input : stdin,
    output : stdout
});

console.log("Lecture du terminal...");

logger.question("Quel age as tu ?\n",(answer)=>{
    
    console.log(answer+" ans");        
    logger.close();
});

console.log("Fin du programme.");
```
Voilà nous avez demandé un input à l'utilisateur.

#### Demander plusieurs fois dans le terminal

Pour créer un programme de type CLI le mieux est d'écouter l'évenement line qui se produit quand l'utilisateur tape du texte et appuie sur entrer.

> Je peux écouter des évenements de la même manière que j'écoute les évenements du DOM en JS front-end.

```js
import { stdin, stdout } from "process";
import {createInterface} from "readline";

// Je crée un objet qui fait interface avec les fd stdin et stdout
const logger = createInterface({
    input : stdin,
    output : stdout
});

logger.addListener("line",onUserAnswer);

function onUserAnswer(answer){
   console.log(answer);
}
```


Si je veux arrété d'écouter, par exemple après 3 line tapées, je peux utiliser les fonctions *removeListener* puis *close* pour fermer mon interface.

```js
import { stdin, stdout } from "process";
import {createInterface} from "readline";

// Je crée un objet qui fait interface avec les fd stdin et stdout
const logger = createInterface({
    input : stdin,
    output : stdout
});

let nbInput = 0;

logger.addListener("line",onUserAnswer);

function onUserAnswer(answer){
   console.log(nbInput,answer);
    nbInput++;
   if(nbInput > 3){
    logger.removeListener("line",onUserAnswer);
    logger.close();
   }
}
```


## Asyncrone  et fonction callback

*app.js*
```js
import { stdin, stdout } from "process";
import {createInterface} from "readline";

// Je crée un objet qui fait interface avec les fd stdin et stdout
const logger = createInterface({
    input : stdin,
    output : stdout
});

console.log("Lecture du terminal...");

logger.question("Quel age as tu ?\n",(answer)=>{
    
    console.log(answer+" ans");        
    logger.close();
});

console.log("Fin du programme.");
```
Notez comme la réponse de l'utilisateur arrive après la dernière ligne du programme.

```bash
Lecture du terminal...
Quel age as tu ?
Fin du programme.
25
25 ans
```

Le programme c'est executé de façon asyncrone, celà signifie qu'il n'a pas attendu la réponse de l'utilisateur pour continuer sont travail.

Celà signifie aussi que la fonction fléchée suivante a été *"mise de coté par nodejs"* pour être appelé plus tard".

La fonction à été rappelée plus tard on l'appel donc une fonction de rappel ou **fonction callback** en anglais
```js
(answer)=>{
    
    console.log(answer+" ans");        
    logger.close();
}
```

**Mettre de coté une fonction pour l'appeller plus tard voilà ce qu'est l'asyncrone.**

### Défintion Asyncrone
***Programmation asyncrone*** : Un programme est dit asyncrone quand il possède des instrcutions qui s'execute sans attendre la fin de l'execution d'une instruction précédente.

### Fonction callback

fonction callback : Une fonction qui est passé en paramètre d'une autre fonction pour être appelé plus tard. En JavaScript les fonctions callback sont souvent passé sous la forme d'une fonction fléchée pour simplifier le code.
