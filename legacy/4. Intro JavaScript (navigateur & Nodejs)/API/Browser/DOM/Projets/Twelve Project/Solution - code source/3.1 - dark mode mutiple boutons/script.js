
//1. Je recupere tout les switchs
const switchbtns = document.querySelectorAll(".switch");

//2. Je recupere tout les elements html de ma page
const allElements = document.querySelectorAll("*");

//3. Je parcours tout les switchs
switchbtns.forEach(function(switchbtn){
    //4. Pour chaque switch, j'ecoute l'evenement "click" sur chaque switch
    switchbtn.addEventListener("click",function(){
        //5. je recupere toute les icones 
        const icones = document.querySelectorAll(".icon");
        //6. Je parcours les icones
        icones.forEach(function(icone){
            //7. J'inverse l'apparence de l'icone
            icone.classList.toggle("fa-moon");
        });
        //8. Je parcours tout les elements
        allElements.forEach(function(element){
            //9. j'applique le dark mode sur tout les elements
            console.log("1")
            element.classList.toggle("darkmode");
        });
    })
})
