/**
 * let
 * element.getAttribute()
 * element.setAttribute()
 * ++ operator
 * operateur ternaire
 */

// 1. Je recupere toutes les petites vignettes
const vignettes = document.querySelectorAll(".small");
// 2. Je recupere la grande photo
const fullImg = document.getElementById("full");

// 3. Je recupere le bouton AJOUTER
const btnAdd = document.querySelector(".btn-add");

// 4. Je recupere la balise vide de message d'ajout du panier
const panierMsg = document.querySelector(".panier-msg");
// 5. Je crée une variable qui contient le nombre de produits ajoutées ua panier
let panier = 0;

// 6. Je parcours le tableaux de vignettes
vignettes.forEach(function(vignette){
    // 7. Pour chaque vignette j'ecoute l'evenement click
    vignette.addEventListener("click",function(){
        // J'inverse les sources de la vignette et de la grande photo
        // Je recupere
        const vignetteSrc = vignette.getAttribute("src");
        const fullImgSrc = fullImg.getAttribute("src");
        // J'inverse
        fullImg.setAttribute("src",vignetteSrc);
        vignette.setAttribute("src",fullImgSrc);
    });
});

// 8. J'ecoute l'evenement clique sur le bouton AJOUTER
btnAdd.addEventListener("click",function(){
    // J'incremente le panier de 1
    panier++;
    // J'ecris un message pour avertir l'utilisateur que l'ajout a fonctionné.
    
    //panierMsg.innerText = "Vous avez "+panier+ (panier>1?" produits ":" produit ")+ "dans votre panier.";
    panierMsg.innerText = `Vous avez ${panier} produit${panier>1?"s":""} dans votre panier.`;
});