
const banner = document.querySelector(".cookies");

// get button
const btn = document.querySelector(".btn-accept");


if(getCookies()===true){ // Si les cookies sont déjà acceptés
    banner.remove();
}else{
    // click button
    btn.addEventListener("click",function(){
        setCookies(true);
        
        //Disparaitre banniere
        banner.style.opacity = 0;
        setTimeout(function(){
            banner.remove();
        },1000);
    });
}


/**
 * Returns a boolean that tell if the cookies have been accepted by the user
 * @returns {boolean}
 */
function getCookies(){
    // Get cookies states from localStorage, false if null
    const isCookiesAccepted = JSON.parse( localStorage.getItem("is-cookie-accepted") ) ?? false;

    return isCookiesAccepted;
}

/**
 * 
 * @param {boolean} newCookiesState 
 * @returns {undefined} void
 */
function setCookies(newCookiesState){
    switch (newCookiesState) {
        case true:
        case false:
            localStorage.setItem("is-cookie-accepted",JSON.stringify(newCookiesState));
            break;
    
        default:
            throw TypeError("newCookiesState should be a boolean");
            break;
    }
}