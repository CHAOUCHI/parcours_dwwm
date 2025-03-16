# STDIN et STDOUT - Input output CLI linux avec nodejs
Comme premier exemple d'api Node JS. Nous allons vouloir accéder à stdin et stdout sur notre système Linux.

Notre objectif est donc de pouvoir récupérer l'entrée du terminal utilisateur(stdin). Et d'écrire Dans stdout Le terminal utilisateur. 

***Un programme en ligne de commande (CLI,Comand line interface).***

### Ecrire dans le terminal 1 méthode - console.log()

Pour écrire dans le terminal nodejs à décalrer la variable `console`.

L'objet console Possède. Plusieurs méthodes Fonction permettant d'écrire dans la console Les plus connues étant `console.log` `console.error` et `console.warn`.

```js
console.log("Message de journaux(logging");
console.error("Message d'erreur");
console.warn("Message d'avertissement !");
```

Lancez le programme avec node.

```bash
node main.mjs
```


Voilà par exemple un programme qui affiche un message formaté correctement pour un tchat de discussion par exemple.

```js
main();
function main(){

    const userName = "Massinissa";

    const userText = "Salut tout le monde !";


    const message = formatedTchatMessage(userName,userText);

    console.log(message);
}



// Fonction pour formater le message 


/**
 * 
 * @param {string} userName Le nom de l'utilisateur
 * @param {string} userText Le texte qu'il souhaite afficher
 * @returns {string} Le message correctement formaté.
 */
function formatedTchatMessage(userName,userText){
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

> En javascript par besoin de définir de fonction `main` je le fais juste pout fixer un point d'entrée facile à indentifier pour les autres developpeurs.

