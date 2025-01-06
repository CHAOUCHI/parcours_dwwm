const form = document.querySelector("#formulaire");

form.addEventListener("submit",function(event){
    event.preventDefault();
    hideError(document.querySelector("#prenom"));
    hideError(document.querySelector("#nom"));
    hideError(document.querySelector("#email"));
    hideError(document.querySelector("#message"));

    const prenom = document.querySelector("#prenom").value.trim();
    const nom = document.querySelector("#nom").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();
    
    if(prenom.length < 2){
        document.querySelector("#prenom").nextElementSibling.classList.remove("invisible")
    }
    if (nom.length < 2 && nom.length > 20){
        document.querySelector("#nom").nextElementSibling.classList.remove("invisible")
    }

    const data = {
        prenom : prenom,
        nom : nom,
        email : email,
        message : message
    }
    console.log(data);
    // fetch("http://www.domain.com/api/sendMail",{
    //     method : "POST",
    //     body : data
    // });
    
});


function hideError(element){
    element.nextElementSibling.classList.add("invisible");
}