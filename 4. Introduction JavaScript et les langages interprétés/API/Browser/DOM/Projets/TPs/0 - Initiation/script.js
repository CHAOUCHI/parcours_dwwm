const boutonHTML = document.querySelector(".bouton");
const compteurHTML = document.querySelector(".compteur");

let compteur = 0;
boutonHTML.addEventListener("click",function(){
    compteur++;
    compteurHTML.innerText = compteur;
});
