/*
Nouvelles compétences:
- querySelector // Selectionne le premier element seulement mieux que getElementsBy
- HTMLElement.style 
*/

// 1. Je recupere le bouton "Accepter les cookies"
const acceptBtn = document.querySelector(".btn-accept");
// 2. Je recupere la banniere de cookies
const cookiesBanner = document.querySelector(".cookies");

// 3. J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"
acceptBtn.addEventListener("click",function(e){
    // 4. Je rend transparent la bannière pour effectuer une jolie animation de "fadeOut", chose impossible avec la proprieté "display:none"
    cookiesBanner.style.opacity = 0;
});
