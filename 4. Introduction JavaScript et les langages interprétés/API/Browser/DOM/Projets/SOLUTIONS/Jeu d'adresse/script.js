/*
Nouvelles compétences:
- Utiliser une constante pour recupérer les balises
- variables
- document
- getElementById()
- innerHTML
- 
- function et function orpheline
- setInterval && clearInterval
*/

// 1. Je recupere la boucle rouge
const circleRed = document.getElementById("red-ball");   //const d'un HTMLElement
// 2. Je recupere la boucle bleue
const circleBlue = document.getElementById("blue-ball"); //const d'un HTMLElement

// 3. Je recupere le titre
const titre = document.getElementById("score"); //const d'un HTMLElement
// 4. Je recupere le timer
const time = document.getElementById("timer");  //const d'un HTMLElement

let compteur = 0; //Variable globale
let chrono = 10;  //Variable globale

// 5. J'ecoute l'evenement click pour les boules de couleurs et j'execute la fonction countUp si un clique est effectué
circleRed.addEventListener("click",countUp);  //ecoute de l'evenement click
circleBlue.addEventListener("click",countUp); //ecoute de l'evenement click

function countUp(){
    // J'incremente le compteur de 1 click réussi sur les boules
    compteur++;
    titre.innerText = "Score : "+compteur;
}

// 6. Toute les secondes, j'execute une fonction
const intervalChrono = setInterval(function(){
    // Je décrémente le chrono de 1 seconde
    chrono--;
    console.log(chrono);
    // J'affiche le temps restant
    time.innerText = "Timer : "+chrono+"s";
    // Si le chrono arrive à 0 le jeu s'arrete completement
    if(chrono <= 0){
        clearInterval(intervalChrono);  // Arreter le chronometre
        time.innerText = "GAME OVER";
        circleBlue.remove();            // Supprimer le cercle bleu
        circleRed.remove();             // Supprimer le cercle rouge
    }
},1000);