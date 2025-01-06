/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/

// 1. Je recupere l'icone smiley
const icone = document.querySelector("#emoji");
// 2. Je recupere le bouton ABONNER
const btnAbonnez = document.querySelector(".btn-sub");
// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur
let isAbonne = false;

// 4. J'ecoute le clique sur l'icone smiley
icone.addEventListener("click",function(){
    // Je change l'apparence de l'icone
    icone.classList.toggle("fa-smile-wink");
    icone.classList.toggle("fa-face-meh");
    icone.classList.toggle("happy");
});

// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ
btnAbonnez.addEventListener("click",function(){
    // Je modifie le texte du bouton en fonction de l'etat isAbonne de l'utilisateur
    //if(!isAbonne){
    if(isAbonne === false){
        btnAbonnez.innerText = "Abonné";
    }else{
        btnAbonnez.innerText = "Abonnez-vous";
    }
    isAbonne = !isAbonne;
    btnAbonnez.classList.toggle("abonne");
});
