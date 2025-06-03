# Pokémon Arena Online

Un jeu (*cli*) pokemon en tour par tour, chaque joueur joue sur son ordinateur.

La connexion entre les deux clients de jeu se fait en TCP. 

## Utilisation de l'application

### Se connecter
Au départ le joueur doit se connecter comme ceci
```bash
./pokemon-arena connect Massi
```

Ensuite un *prompt* apparait il permet les commandes suivantes : 

```bash
################## POKEMON ARENA ################
Bonjour bienvenue dans l'arène ! 

- list : Lister les joueurs connectés et leurs statuts (LIBRE ou EN COMBAT)

- fight player_fd : combattre un joueur LIBRE

- quit : Se déconnecter
################################################

[pokemon-arena]$ 
```
### Voir les joueurs connectés
Dans le prompt le joueur peut voir les joueurs connectés avec la commande `list`.
```bash
[pokemon-arena]$ list

FD  Dispo       Nom
1   [LIBRE]     Arnaud 
3   [LIBRE]     Billy 
2   [EN PARTIE] Louis 
```

### Lancer un combat
Le joueur LIBRE peut lancer un combat contre un autre joueur LIBRE.
Ici le joueur lance un combat avec Billy le joueur numéro 3.
```bash
[pokemon-arena]$ fight 3

FD  Dispo       Nom
1   [LIBRE]     Arnaud 
3   [LIBRE]     Billy 
2   [EN PARTIE] Louis 
```

### Quitter le jeu
```bash
[pokemon-arena]$ quit

Au revoir dresseur !
```

### Système de combat
Voici l'affichage du système de combat.
```bash
### FIGHT MODE ###

Pokemon Adverse : Tiplouf
PV : 100

----------------

Votre Pokemon : Salamèche
PV : 39

Attaques de Salamèche :
Nom         |   Utilisations    |   Element |   Dégats   |
---------------------------------------------------------
Charge      |   2/10            |   Neutre  |   20      |
Flammèche    |   9/10            |   Feu     |   95      |

Rappel commandes :
use atk attack_name    
use item item_name
inventory
fuite
[pokemon-arena]$
```

#### Les commandes possibles du mode combat

##### Attaquer
```
[pokemon-arena]$ use atk attack_name    
```
*Exemple*
```
[pokemon-arena]$ use atk Charge    
```

##### Voir son inventaire
Je peut voir mes objets et leur quantité avec la commande `inventory`.
```
[pokemon-arena]$ inventory
- (10)potion_soin : redonne 10PV  
- (2)poison : empoisonne la cible de -3PV par tour pendant 4 tours
```
##### Utiliser un objet
Je peut utiliser un objet comme ceci :
*Exemple*
```
[pokemon-arena]$ use item potion_soin

Salamèche regagne 10PV !     
``` 

#### Fuite
Le joueur peut abandonner le combat en fuyant avec la commande `fuite`.

Abandonner le combat renvoi au menu principale.

## Cahier des charges

|Tache|Description|Contraintes|
|-|-|-|
|Connexion|| |
|Voir les joueurs connectés|Afficher les joueurs connectés (LIBRE ou EN COMBAT) | Seuls les joueurs LIBRES peuvent être défiés en combat. |
|Quitter le jeu(Déconnexion)| 
 | |
|Lancer un combat|Lance un combat contre un joueur connecté en piochant un pokemon au hasard dans une liste de pokémon| La liste est un ou plusieurs fichiers éditables par n'importe qui, a vous de réfléchir au format textuel.|
|Attaquer| Le joueur attaque le pokemon adverse | |
|Voir son inventaire| | |
|Utiliser un objet| |Les objets ne sont pas néccessairement des fichiers modifiables faites comme bon vous semble |
| GAME OVER | - Si un des deux pokémon n'a plus de PV le combat est fini <br> - Si un des deux joueurs fuit ou se déconnecte le combat s'arrete|