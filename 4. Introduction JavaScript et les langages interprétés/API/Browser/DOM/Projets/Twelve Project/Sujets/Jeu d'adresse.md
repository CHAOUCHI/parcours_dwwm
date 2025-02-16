# Projet - Initiation
**Besoin** : Créer un jeu d'adresse ou il faut cliquer sur des boules qui se déplaces.

# Pré-requis
## Le DOM

Récupérer une balise avec querySelector
```js
const balise = document.querySelector(cssSelector);
```

Modifier le contenu textuel d'une balise
```js
balise.innerText = "Nouveau texte";
```

Attacher une fonction à un evenement "*click*" avec querySelector
```js
balise.addEventListener
```
## L'asyncrone
Utiliser la fonction *setInterval* pour l'execution d'une fonction à intervalle régulier.
Et *clearInterval* pour stopper l'execution de la fonction.
```js
const intervalleId = setInterval(fonctionName); // démarre l'intervalle
clearInterval(intervalleId);  // Stop l'intervalle
```

# Cahier des charges
## Partie 1
|Tâches| Description | Contraintes |
|---|---|---|
| Affichage du score | Le score doit être affiché |
| Mouvement des balles | Les balles doivent se déplacer |
| Mise à jour du score | | A chaque clique sur une balle le score augemente de 1 point |

## Partie 2
|Tâches| Description | Contraintes |
|---|---|---|
| Affichage du chronomètre | Le chronomètre doit être affiché en haut du score | 
| Gameover | | Si le chronomètre arrive à zéro la partie est finie |
