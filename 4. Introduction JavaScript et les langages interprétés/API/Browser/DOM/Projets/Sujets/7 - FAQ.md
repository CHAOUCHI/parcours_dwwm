# Projet 7 - FAQ

## Le Besoin
Créer un element type FAQ qui cache du contenu par tiroir.
## Pré-requis
- L'evenement *click*
- Modifier les class css dynamiquement
- Selectionner des balises soeurs et enfants
```html
<div>
    <p>1er element</p>
    <p>2eme element</p>
    <p>3eme element</p>
    <p>dernier element</p>
</div>
```

```js
const conteneur = document.querySelector("div");

// Récupérer le premier element enfant
const premier = conteneur.firstElementChild;
// Récupérer le dernier element enfant
const dernier = conteneur.lastElementChild;

// Récupérer l'element suivant au premier
const deuxieme = premier.nextElementSibiling;
// Récupérer l'element precedent au dernier
const troiseme = dernier.previousElementSibiling;

```
# Cahier des charges
|Tâches| Description | Contraintes |
|---|---|---|
| Intégrer trois question FAQ composé de la question et d'un texte de réponse |
| Faire apparaitre la réponse au clic de la question correspondante. |
