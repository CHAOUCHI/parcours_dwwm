/**
 * element.parentElement
 * element.remove()
 */

// 1. Je recupere le forumlaire de saisi d'un nouvelle tache
const form = document.querySelector("#form");
// 2. Je recupere le conteneur des taches
const listTasks = document.querySelector(".list-tasks");

// 3. Lorsque le formulaire est soumis
form.addEventListener("submit",function(e){
    // 4. J'annule le comportement par défaut du formulaire
    e.preventDefault();
    // 5. Je recupere la valeur du champ input
    const  todoValue = document.getElementById("todo").value;

    // 6. Je rajoute un nouvelle element à la suite des taches du conteneur de taches
    listTasks.innerHTML+=
    `
    <div class="task">
        <p>${todoValue}</p>
        <button class="btn-delete">
            <i class="fas fa-trash-alt"></i>
        </button>
        <button class="btn-archive">
            <i class="fas fa-check-circle"></i>
        </button>
    </div>
    `;

    // 7. Je recupere tout les boutons de suppressions de tache
    const btnsDelete = document.querySelectorAll(".btn-delete");
    // 8. Pour chaque bouton, je supprime la tache correspondante, au clique
    btnsDelete.forEach((btn)=>{
        // J'ecoute le clique
        btn.addEventListener("click",function(){
            const task = btn.parentElement; // Je recupere l'element parent au bouton soit la tache.
            task.remove(); // Je supprimme la tache
        })
    });

    // 9. Je recupere tout les boutons archiver
    const btnsArchive = document.querySelectorAll(".btn-archive");
    // 10. Pour chaque boutons, je barre la tache, au clique
    btnsArchive.forEach((btn)=>{
        // J'ecoute le clique
        btn.addEventListener("click",function(){
            btn.parentElement.classList.toggle("done")
        })
    });
    // 11. Je reset le contenu du formulaire pour eviter que le texte reste une fois la tache crée (ergonomique)
    form.reset();
});

