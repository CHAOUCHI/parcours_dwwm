# Projet 6 - Toast
## Le Besoin
Faire apparaitre d'un notification type toast lors du clique sur le bouton enregistrer
## Pré-requis
### Le DOM
#### Créer un element HTML dynamiquement 
Ce passe en 3 étapes : la création, la customisation et l'affichage.

Exemple : 
```js

const section = document.querySelector(".hero-section");

// Création de la balise
const nouvelleBalise = document.createElement("p");

// Customisation de la balise
nouvelleBalise.classList.add("text_content");
nouvelleBalise.innerText = "Je suis un paragraphe crée dynamique en JS !";

// Affichage de la nouvelle balise en tant qu'enfant de la section.
section.appendChild(nouvelleBalise);

// Destruction d'une balise
nouvelleBalise.remove();
```
# Cahier des charges
|Tâches| Description | Contraintes |
|---|---|---|
| Intégrer la page HTML | Intégrer une page HTML qui contient un texte "Projet Toast" et un bouton "Enregistrer| Les elements doivent être centré au millieu de l'écran. |
| Apparition d'un toast | Faire apparaitre un toast disant "Le fichier a bien été enregistré" lors du clique sur le bonton enregistrer | Le toast apparait en dessous du bouton enregistrer sans permturber l'affichage de la page |
| Dispariton du toast | Le toast disparait au bout de quelques secondes ou lorsque l'on clic dessus. | La disparition se fait avec une animation fade-out.