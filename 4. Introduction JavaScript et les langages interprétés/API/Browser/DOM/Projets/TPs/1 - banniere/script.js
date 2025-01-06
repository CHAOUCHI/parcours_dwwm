
const banner = document.querySelector(".cookies");
// get button
const btn = document.querySelector(".btn-accept");
// click button
btn.addEventListener("click",function(){
//Disparaitre banniere
    banner.style.opacity = 0;
    setTimeout(function(){
        banner.remove();
    },1000);
});