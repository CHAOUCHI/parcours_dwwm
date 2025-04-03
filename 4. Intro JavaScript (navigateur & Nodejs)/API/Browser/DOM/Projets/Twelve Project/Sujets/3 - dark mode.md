# Projet 3 - Dark Mode
## Le Besoin
Concevoir un bouton qui change l'apparence visuel du site de light-mode à dark-mode et inversement. 

## Astuce
Le plus simple est d'appliquer une classe css sur tout les elements voulu lorsque le site est en darkmode ou de la retirer si le site est en light mode. L'utilisation d'une boucle for est conseillé.

# Pré-requis
##  Le DOM
Récupérer un tableau de toutes les balises HTML qui possède un certain selecteur CSS( comme une classe par exemple).
```js
const tableauDeBalise = document.querySelectorAll(cssSelector);
tableauDeBalise.forEach(function(balise){
    /* Faire quelque chose avec les balises */
});
```

# Cahier des charges
|Tâches| Description | Contraintes |
|---|---|---|
|Affichage HTML CSS| Intégrer une page HTML CSS qui contient un titre un bouton darkmode et un fond de couleur claire | Lors de l'activation du darkmode le fond de couleur change et la couleur du texte deviens blanche pour etre lisible |  
| Icone like | L'icone like change d'apparence au clic|
|  Bouton abonnez-vous | Change de couleur au clic et le texte passe de "Abonnez-vous" à "Abonné" |