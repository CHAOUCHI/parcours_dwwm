/**
 * removeEventListener
 * Scroll Event
 */

// 1. Je recupere la section à partir de laquelle je veux faire apparaite la modale
const section1 = document.querySelector(".one");

// 2. Je recupere la modale
const modal = document.querySelector(".modal");
// 3. Je recupere le bouton quitter de la modale
const modalQuit = document.querySelector(".modal-quit");

// 4. Je lance la fonction onScrollDisplayModal sur l'evenement scroll de la fenetre
window.addEventListener("scroll",onScrollDisplayModal);

// 5. Je fais disparaite la modale au clique sur la croix
modalQuit.addEventListener("click",function(){
    modal.style.display = "none";
    // 6. Je supprime l'evenement onScrollDisplayModal pour que la modale ne s'affiche plus après avoir ete supprimée.
    window.removeEventListener("scroll",onScrollDisplayModal);
});

/**
 *  Fonction à passer en parametre de addEventListener("scroll",function)
 *  Obligatoire pour pouvoir utiliser removeEventListener(function)
 */
function onScrollDisplayModal(){
    // hauteur est egal à la hauteur entre le haut du document et la position du haut de mon ecran sur le document
    // En gros, la difference en pixel entre le haut du document HTML et là où je me trouve 
    const hauteur = document.documentElement.scrollTop;
    if(hauteur >= getCenterY(section1)){
        modal.style.display = "flex";
    }
}

/**
 *  Fonction qui renvoi le distance entre le centre d'un element et le haut de la page
 */
function getCenterY(element){
    return element.offsetTop+(element.offsetHeight/2);
}