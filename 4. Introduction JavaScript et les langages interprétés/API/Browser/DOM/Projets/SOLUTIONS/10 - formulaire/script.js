/**
 * Event submit
 * event.preventDefault()
 * HTMLInputElement.value
 * String.prototype.trim()
 * regex
 * RegexExp.prototype.test()
 */



/**
 * 1 .Je recupère
 *      - le formulaire
 *      - le champ prenom
 *      - le champ nom
 *      - le champ email
 *      - le champ message
 */
const form = document.getElementById("formulaire");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");

// 2. Lorsque le formulaire est soumit (clique du bouton submit ou touche ENTER)
form.addEventListener("submit",function(event){
    // 3. J'annule le comportement par défaut du formulaire  : qui consiste à envoyer une requete http GET à l'adresse de l'attribut action du formualire et donc recharger la page
    event.preventDefault();

    // 4. Je cache les eventuelles messages d'erreur d'un précedent envoi de mail
    hideError(prenom);
    hideError(nom);
    hideError(email);
    hideError(message);

    // 5. Je recupère le contenu des champs grâce à l'attribut HTMLInputElement.value
    //    Je retire les espaces vides grâce à la methode String.prototype.trim()
    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    // 6. Je vérifie que les valeurs des champs sont conformes
    if(prenomValue.length < 2 || prenomValue.length > 20){
        showError(prenom);
    }
    if(nomValue.length < 2 || nomValue.length > 20){
        showError(nom);
    }
    if(isValidEmail(emailValue) == false){
        showError(email);
    }
    if(messageValue.length < 10 || messageValue.length > 100){
        showError(message);
    }

    const data = {
        prenom : prenomValue,
        nom : nomValue,
        email : emailValue,
        message : messageValue
    }
    console.log(data); 
    /**
     * Utilise l'objet data a ta convenance, par exemple dans une requete HTTP 
     * vers un serveur web(apache/php ou nodejs/express) qui prendra en charge l'envoi du mail via un serveur SMTP.
     * Cette etape ne rentre pas dans cette activité.
     */
    //sendMail(data.message,data.email);
});

/**
 * Retire la classe "invisible" de l'element suivant à l'element passé en parametre
 */
function showError(element){
    element.nextElementSibling.classList.remove("invisible");
}
/**
 * Ajoute la classe "invisible" de l'element suivant à l'element passé en parametre
 */
function hideError(element){
    element.nextElementSibling.classList.add("invisible");
}
/**
 * Renvoie vrai si la string email passé en paramètre correspond à une adresse email valide.
 */
function isValidEmail(email){
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Création d'un objet RegexExp
    if (emailFormat.test(email))
    {
        return true;
    }else{
        return false
    }
}


/**
 * BONUS HORS ACTIVITE *********************************************
 * Envoyer un mail
 */
/**
 * sendMail : Fonction qui permet d'envoyer un mail
 */
function sendMail(message,from){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"message":"${message}","from":"${from}"}`
      };
      
    fetch('http://localhost:3000/sendmail', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}