/**
 * setTimeout()
 * 
 */

// 2. Je recupere la modale
const modal = document.querySelector(".modal");
// 3. Je recupere le bouton quitter de la modale
const modalQuit = document.querySelector(".modal-quit");

setTimeout(function(){
    modal.style.display = "flex";
},2000);
// 5. Je fais disparaite la modale au clique sur la croix
modalQuit.addEventListener("click",function(){
    modal.style.display = "none";
});
