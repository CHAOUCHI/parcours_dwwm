/**
 * firstChild
 * lastChild
 * childNodes
 * nextSibiling MAIS preferez nextElementSibiling pour eviter de selectionner les passages à la ligne
 * previousSibiling MAIS preferez previousElementSibiling  pour eviter de selectionner les passages à la ligne
 * 
 */

// 1. Je recupere toutes les questions
const questions = document.querySelectorAll(".question");

// 2. Je parcours toutes les questions
questions.forEach(function(question){
    // 3. Lors du click sur la question
    question.addEventListener("click",function(){
        // 4. Je recupere la reponse correspondante et le chevron correspondante
        const reponse = question.nextElementSibling;
        const btnArrow = question.lastElementChild;

        // 5. J'applique ou retire les classes CSS qui affiche la reponse et change l'apparence des chevrons
        reponse.classList.toggle("show-reponse");
        btnArrow.classList.toggle("fa-chevron-down");
        btnArrow.classList.toggle("fa-chevron-up");
    });
});
