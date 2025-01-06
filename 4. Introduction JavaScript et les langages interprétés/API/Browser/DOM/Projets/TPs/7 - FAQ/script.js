//recuperer les questions

//ecouters le click sur chaque question
    //afficher la reponse correspondante avec nextElementSibilings

const container = document.querySelector(".container")
const questions = document.querySelectorAll(".question")
questions.forEach(function(question){
    question.addEventListener("click",function(){
        const btnArrow = question.lastElementChild;
        question.nextElementSibling.classList.toggle("show-reponse");
        btnArrow.classList.toggle("fa-chevron-down");
        btnArrow.classList.toggle("fa-chevron-up");
    })
});

fetch("https://pokeapi.co/api/v2/pokemon?limit=160")
.then(pokemons=>pokemons.json())
.then(pokemons=>{
    const balise = `<a href="${pokemons.results[0].url}">${pokemons.results[0].name}</a>`
    container.innerHTML += balise;
});