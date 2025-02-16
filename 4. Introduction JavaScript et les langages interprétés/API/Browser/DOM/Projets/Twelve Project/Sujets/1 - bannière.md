# Projet 1 - Bannière
**Besoin** : Créer une bannière de cookie qui disparait quand l'utilisateur à accpeter les cookies.

# Pré-requis
## DOM
- Récupérer une balise HTML en JS
- Réagir à un evenement *click*
- Modifier les classe CSS d'une balise HTML en JS
```js
const balise = document.querySelector(cssSeelctor);
balise.classList.add(className);    // Ajouter
balise.classList.remove(className); // Supprimer
balise.classList.toggle(className); // Inverser la présence
```

# Cahier des charges
|Tâches| Description | Contraintes |
|---|---|---|
| Intégration HTML CSS | Intégration du HTML et CSS pour afficher une page placeholder avec une bannière en bas de page qui demande d'accepter les cookies.| Peut importe la longueur de la page la bannière doit restée collée en bas de page par dessus le contenu.|
| Clic sur le bouton accpeter | Lors du clic sur le bouton accepter la bannière disparait |
| Animation CSS | Une animation CSS fade out se produit sur la bannière lorsque l'on accepte les cookies.|
