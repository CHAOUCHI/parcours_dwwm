const switchBtn = document.querySelector(".switch");

switchBtn.addEventListener("click",function(){
    //passer tout en darkmode
    const allTags = document.querySelectorAll("*");

    allTags.forEach(function(tag){
        tag.classList.toggle("darkmode");
    })
});


// function ForEach(funct){
   
//     for (let index = 0; index < allTags.length; index++) {
//         const tag = allTags[index];
//         funct(tag);
//     }
// }