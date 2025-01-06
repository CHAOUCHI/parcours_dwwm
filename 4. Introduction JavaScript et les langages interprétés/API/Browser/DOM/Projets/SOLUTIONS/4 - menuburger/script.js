
// 1. Je recupere le burger
const burger = document.querySelector(".burger");
// 2. Je recupere la fenetre modal
const modal = document.querySelector(".modal");

// 3. Lors du clique sur le burger
burger.addEventListener("click",function(){
    // 4. J'ajoute ou je retire la modal avec la classe show-modal
    modal.classList.toggle("show-modal");
    // 5. Je transforme le burger en croix et je rend la croix fixe
    burger.classList.toggle("fa-x");        //Le bruger devient une croix
    burger.classList.toggle("show-modal");
});