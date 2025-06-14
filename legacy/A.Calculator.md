# Projet : Calculator

## Synopsis
Un projet des plus classique mais qui permet de comprendre et manipuler la puissance du langage JavaScript et du DOM.

Une application web responsive qui permet à l'utilisateur d'effectuer des opérations de base (addition, soustraction, multiplication, division et modulo) et d'afficher le résultat à l'écran.

## Key Feature (Fonctionnalité Principale)

Permettre à l'utilisateur d'effectuer des opérations arithmétiques de base (addition, soustraction, multiplication, division) et d'afficher le résultat.

<!-- 
## Diagramme Use case

## Maquette
// TODO -->



## Pré-requis

- DOM
- eval()
- HTML
- CSS
    - CSS grid
    - media query
    - overflow

## Cahier des charges

| Fonctionnalité | Description | Contraintes | Bonus (optionnel) |
|-|-|-|-|
|**Expression**|Affichage du calcul (de l'expression) | Si l'expression dépasse de la calculette l'utilisateur peut scroller horizontalement|
|**Boutons Numériques**|Présence de boutons pour les chiffres de 0 à 9. | Cliquer sur un chiffre l'ajoute à l'expression en cours.|
|**Boutons Opérateurs**|Présence de boutons pour les opérateurs +, -, *, / et %(modulo)| Cliquer sur un opérateur l'ajoute à l'expression.| Une expression impossible doit afficher un message d'erreur  |
|**Bouton =** | Un bouton qui déclenche le calcul de l'expression et son affichage à l'écran | L'affichage du résultat écrase la valeur précedente |
| **Bouton Effacer** |Un bouton pour réinitialiser l'expression en cours.|
|**Gestion du point décimal (.)**|Possibilité d'ajouter un point décimal pour les nombres à virgule.| |
| **Responsive** | Le projet doit être correctement afficher et utilisable sur des navigateurs mobile |
| ***(BONUS) Clavier*** | L'utilisateur peut taper directement dans l'Expression | Un message d'erreur doit s'affiche si il tape un caratère rendant impossible l'expression | - Le message d'erreur s'affiche dès qu'il tape un caratère impossible<br> - Le caractère `.` et `,` produisent le même résultat  |

## Exemple de cas d'utilisation
- L'utilisateur clique sur 5, puis +, puis 3, puis =. L'affichage montre 8.
- L'utilisateur clique sur 1, 0, puis /, puis 2, puis =. L'affichage montre 5.
- L'utilisateur clique sur 7, puis *, puis 4, puis =. L'affichage montre 28.
- L'utilisateur clique sur Effacer. L'affichage se vide.


