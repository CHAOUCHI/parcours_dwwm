const switchBtn = document.querySelector(".switch");

switchBtn.addEventListener("click",function(){
    //passer tout en darkmode
    const allTags = document.querySelectorAll("*");

    allTags.forEach(function(tag){
        tag.classList.toggle("darkmode");
    })
});