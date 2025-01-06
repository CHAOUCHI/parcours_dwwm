/*
Nouvelles compétences:
- forEach
- querySelectorAll
*/

const switchbtn = document.querySelector(".switch");
const icone = document.querySelector(".icon");
const allElements = document.querySelectorAll("*");

switchbtn.addEventListener("click",function(){
    /*Changer icone en  soleil */
    icone.classList.toggle("fa-moon");
    
    /**Appliquer ou retirer la classe darkmode sur l'ensemble des elements du document */
    allElements.forEach(function(element){
        element.classList.toggle("darkmode");
    });
})
