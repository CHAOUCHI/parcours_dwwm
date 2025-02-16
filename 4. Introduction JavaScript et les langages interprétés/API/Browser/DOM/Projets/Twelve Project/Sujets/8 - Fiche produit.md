# Projet 8 - Fiche produit

## Le Besoin
Créer une carte de produit avec un bouton ajouter au panier. Un message apparait indiquant le nombre de produit dans le panier à chaque clic.
## Pré-requis
- L'evenement *click*
- Modifier un attribut HTML en JavaScript
```js
const balise = document.querySelector("img");

// Renvoie l'url de l'image
balise.getAttribute("src")  
    
// Change l'url de l'image
balise.setAttribute("src",nouvelleUrl);
```


# Cahier des charges
|Tâches| Description | Contraintes |
|---|---|---|
| Intégrer la page HTML/CSS | La page contient une carte de produit contenant : Le nom du produit, son prix, une description, des vignettes photos du produit et un bouton "ajouter au panier" | La carte doit être centrée au millieu de l'écran |
|Vignette du produit| La photo doit changer lorsque l'on clic sur une vignette |
| Message d'ajout au panier | Faire apparaitre une phrase inquant le nombre de produit dans le panier lorsque l'utilisateur clique sur le bouton d'ajout au panier | Le message doit bien afficher le nombre total de produit ajouter au panier par le client |