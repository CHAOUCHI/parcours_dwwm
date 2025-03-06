# Quiz NODEJS

## Synopsis
Voici un tableau de questions écrivez un programme qui pose les questions à l'utilisateur et augmente son score quand il à juste.

Démo du programme ici :

```bash
docker run -it chaouchi/quiz-node
```

> `-it` permet d'avoir un accès interactif à la console du container docker.

## Code base

> J'ai ici utiliser la syntaxe des classes pour pouvoir créer autant que Question que je le veut de façon lisible. Pensez au classe comme à des struct C.

```js
import { stdin, stdout } from "process";
import {createInterface} from "readline";

// Je créer une classe
// Une classe est une structure de donnée qui peut contenir plusieurs vairbales ou fonctions (comme les struct en C)
class Question{
    /**
     * Le constucteur est la fonction appelée par l'opérateur new lorsque l'on veut créer une variable (instance à partir d'une classe).
     * @param {string} phrase la question et les choix de réponses. 
     * @param {number} goodAnswerValue le numéro de la bonne réponse
     */
    constructor(phrase,goodAnswerValue){
        this.phrase = phrase;
        this.goodAnswerValue = goodAnswerValue;
    }
}

// Je déclarer un tableau de questions
const questions = [
    new Question("Quelle est la couleur des cheveux blancs d'Henri IV ?\n1. Blanc\n2. Rouge", 1),
    new Question("Quelle est la capitale de la France ?\n1. Londres\n2. Paris", 2),
    new Question("Combien de côtés a un triangle ?\n1. Trois\n2. Quatre", 1),
    new Question("Quel est le plus grand océan du monde ?\n1. Atlantique\n2. Pacifique", 2),
    new Question("Qui a peint la Joconde ?\n1. Léonard de Vinci\n2. Picasso", 1),
    new Question("Quelle est la planète la plus proche du Soleil ?\n1. Mercure\n2. Mars", 1),
    new Question("En quelle année a eu lieu la Révolution française ?\n1. 1789\n2. 1815", 1),
];

// Je crée un objet qui fait interface avec les fd stdin et stdout
const logger = createInterface({
    input : stdin,
    output : stdout
});

let score = 0;

``` 

Je peux accéder aux attributs de mes question comme ceci :

```js
for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    console.log(question.phrase);
    console.log(question.goodAnswerValue);
}
```