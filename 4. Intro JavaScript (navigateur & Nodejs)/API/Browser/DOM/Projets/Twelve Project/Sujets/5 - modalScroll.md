# Projet 5 - Modal Scroll
## Le Besoin
Faire apparaitre un pop up lorsque l'utilisateur scroll suffisement.
Par suffisement on entend lorsque l'utilisateur a atteint une certaine portion de la page.
## Pré-requis
L'évenement "*scroll*" et la position d'une balise dans le document.

Ecouter l'evenement scroll qui s'active quand l'utilisateur scroll
```js
window.addEventListener("scroll",onScrollFunction);
```

Recupérer la position en pixel d'un balise sur l'axe Y.
```js
balise.offsetTop        // position de la border-top d'une balise
```

Récupérer la position du viewport, soit la position du haut de la fenetre du navigateur en pixel.
```js
document.documentElement.scrollTop;  // => Number , 
```
Pour faire simple scrollTop renvoi la distance entre le border-top de la balise <html> et le haut de la portion de page actuellement visible.


# Cahier des charges
|Tâches| Description | Contraintes |
|---|---|---|
| Intégrer sections HTML | Intégrer une page qui contient 4 ou 5 sections de la hauteur d'un écran, pour que l'utilisateur est suffisement de place pour scroller. |
|Pop up| Intégrer un pop up qui est fixe au centre de l'écran et contient un texte avec un bouton croix. | Par défaut le pop up est caché et l'on peut le fermé avec la croix |
| Apparition du pop up | Faire apparaitre le pop up quand l'utilisateur atteint la section 3 en scrollant |