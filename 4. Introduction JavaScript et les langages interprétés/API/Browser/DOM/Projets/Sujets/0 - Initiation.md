# Projet - Compteur JavaScript
**Besoin** : Créer un compteur de clic en JavaScript.

## Pré-requis
### Le DOM
Selectionner une balise 
```js
const balise = document.querySelector(cssSelector);
```
Modifier le contenu textuel d'une balise
```js
balise.innerText = "Nouveau texte";
```

Réagir à un évenement - *click*
```js
balise.addEventListener("click",onClicSurBalise);
// ou
balise.onclick = onClicSurBalise;

function onClicSurBalise(){ /* Faire quelque chose... */ }
```

# Cahier des charges
|Tâches| Description | Contraintes |
|---|---|---|
| Affichage | Integration d'une page HTML qui contient un bouton d'incmentation du compteur et un texte qui affiche la valeur de la variable de compteur.  | 
| Bouton + | Le bouton HTML incremente une variable de compteur.|
| Mise à jour du compteur | Mettre à jour l'affichage du compteur lors ce que la variable de compteur augemente.
