

const modal = document.querySelector(".modal");

window.addEventListener("scroll",onScrollToSection2);
modal.addEventListener("click",onClickModal);

function onScrollToSection2(){
    //Je recupere les elements
    const htmlElem = document.documentElement;
    const section2 = document.querySelector(".two");
    const modal = document.querySelector(".modal");

    //Je recupere la position
    const currentPosX = htmlElem.scrollTop;

    //J'affiche la modale sous condition
    if( currentPosX > section2.offsetTop-(section2.offsetTop/2) ){
        console.log(section2);
        modal.style.opacity = 1;
        
        window.removeEventListener("scroll",onScrollToSection2);
    }
}

function onClickModal(){
    console.log("click modal")
    modal.style.opacity = 0;
}