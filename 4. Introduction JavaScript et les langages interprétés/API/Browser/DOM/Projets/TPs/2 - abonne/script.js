
const smiley = document.querySelector("#icone");
const btnSub = document.querySelector(".btn-sub");

smiley.addEventListener("click",function(){
    smiley.classList.toggle("fa-face-smile");
    smiley.classList.toggle("happy");
});

let isAbonne = false;

btnSub.addEventListener("click",function(){
    btnSub.classList.toggle("abonne");
    if(isAbonne === false){
        btnSub.innerText = "Abonné";
    }else{
        btnSub.innerText = "Abonnez-vous";
    }
    isAbonne = !isAbonne;

});
