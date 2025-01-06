const fullImage = document.querySelector("#full");
const vignettes = document.querySelectorAll(".small");

console.log(fullImage);
console.log(vignettes);

//onClick sur vignettes
    // tampon_fullSrc = full.src
    // full.src = vignetteClicked.src
    // vignetteClicked.src = tampon_fullSrc
const panierMsg = document.querySelector(".panier-msg");
const btnAjouter = document.querySelector(".btn-add");

let nbPanier = 0;

vignettes.forEach(function(vignette){
    vignette.addEventListener("click",function(){
        const tampon_FullSrc = fullImage.getAttribute("src");
        fullImage.setAttribute("src",vignette.getAttribute("src"));
        vignette.setAttribute("src",tampon_FullSrc);
    });
})
btnAjouter.addEventListener("click",function(){
    nbPanier++;
    panierMsg.innerText = `Vous avez ${nbPanier} produit${nbPanier>1?"s":""} dans le panier.`;
});


