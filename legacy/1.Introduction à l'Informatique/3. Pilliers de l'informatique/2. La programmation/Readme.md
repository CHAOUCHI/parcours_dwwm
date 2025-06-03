## La programmation - Pilier de l'informatique

> Les exercices pratiques de programmation démarrent dès le début du module Langage C. Lisez tout de même tout le cours.

La programmation, c'est l'action de créer un programme exécutable par un ordinateur. 

À l'origine, les premiers programmes étaient des cartes perforées (un trou pour *1*, pas de trou pour *0*) qu'un opérateur humain passait dans un ordinateur géant appelé *mainframe*.

Avec le temps, les ordinateurs devinrent de plus en plus puissants et il a été possible d'écrire des programmes directement depuis un ordinateur avec un clavier et un écran qui affiche des caractères.

Le binaire étant particulièrement long pour la rédaction d'un programme, il nous fallait une abstraction compréhensible par les humains.

On a donc inventé les langages assembleurs qui représentent chaque instruction binaire de l'ordinateur par un mot.

Aujourd'hui, presque plus personne ne code en assembleur. On préfère utiliser des langages plus proches de l'Homme.

Un langage proche de l'anglais qui nous permet d'allouer de la mémoire, faire des calculs, lire des entrées (clavier, carte réseau, ...) et écrire sur des sorties (écran, carte réseau, ...) sans pour autant connaître le fonctionnement du processeur.

On appelle ce langage un langage de programmation et son plus éminent représentant est le **langage C**, le langage à la base de tous les systèmes d'exploitation modernes et de la plupart des programmes qui forment la colonne vertébrale de l'informatique moderne.

### La création d'un programme - "coder"

La création d'un programme se fait en 3 étapes :
1. Écrire du code dans un langage de programmation.
2. Compiler le code en un exécutable binaire grâce à un compilateur.
3. Faire exécuter l'exécutable (le programme) par un système d'exploitation.

> L'exécutable fabriqué par le compilateur est également appelé programme ou logiciel. Chrome, Steam, Skype et l'explorateur de fichiers Windows sont tous des programmes. Et comme tout programme, ils ont tous été compilés par un compilateur.

![alt text](../../images/image-18.png)

En fonction de notre système d'exploitation, l'installation d'un compilateur et l'exécution d'un programme diffèrent.

Même si la majorité des utilisateurs d'ordinateurs utilisent Windows, aujourd'hui la plupart des programmes sont exécutés sur des serveurs Linux. La connaissance des commandes et du système Linux est une compétence qu'un étudiant doit aborder le plus tôt possible.

### L'algorithmie ou comment concevoir un programme ?

L'algorithmie est un domaine des mathématiques qui consiste à définir, via des règles non ambiguës, une procédure permettant de résoudre un problème.

Programmer, c’est définir un plan composé d’instructions que l’on exécute les unes après les autres. Parfois, le plan peut contenir plusieurs branches de possibilités dépendantes de conditions : « Y a-t-il des bouchons sur l’autoroute ? Si oui, prenons la nationale pendant 20 kilomètres, sinon prenons l’autoroute ». Ce plan est appelé un algorithme.

Un algorithme est composé de différentes briques élémentaires qui permettent la résolution de problèmes.

### Briques élémentaires d'un algorithme

Un algorithme peut être représenté via une suite de pictogrammes appelée algorigramme. Voici par exemple un algorithme qui est une suite de briques *Traitement*, puis une condition *SI*, comme défini dans le tableau suivant.

#### Algorithme de l'omelette
![La recette de l'omelette_schema](../../images/image-2.png)

> Les algorigrammes et leurs briques sont définis dans la norme ISO 5807 (sortie en 1985).

| Brique d'algorigramme | Description | Exemple |
|------------------------|-------------|---------|
| Traitement            | Un traitement quelconque | ![alt text](../../images/image-8.png) |
| Donnée ou variable    | Stocker une valeur dans une case mémoire | ![alt text](../../images/image-7.png) *Donnée quelconque, j'écris le nom de la variable à l'intérieur* |
| ENTRÉE (input)        | Demander, lire | ![alt text](../../images/image-13.png) *Entrée manuelle de l'utilisateur (par exemple un clavier), peut être remplacée par un Traitement comme "demander x à l'utilisateur"* |
| SORTIE (output)       | Écrire, afficher | ![alt text](../../images/image-14.png) *Afficher (écran), peut être remplacé par un Traitement comme "afficher x à l'écran"* |
| + - * / %             | Faire des calculs arithmétiques dans des briques Traitement | - |

| Structure de contrôle | Description | Exemple |
|-----------------------|-------------|---------|
| SI ALORS SINON (*if else*) | *SI age > 17 ALORS affiche "majeur" SINON affiche "mineur"* | ![alt text](../../images/image-12.png) |
| La boucle TANT QUE (while) | *TANT QUE age < 1 FAIRE demander age* | ![alt text](../../images/image-15.png) |

| Opérateurs logiques   | Description |
|------------------------|-------------|
| < >                   | Inférieur à ou Supérieur à |
| ==                    | Égal à |
| !=                    | Différent de |
| AND                   | ET, par exemple : *age > 17 AND taille > 1,60* |
| OR                    | OU, par exemple : *keyPressed == "q" OR keyPressed == "Echap"* |
| NOT, !                | NOT true == false ; 20 > 10 == true ; NOT 20 > 10 == false. C'est l'opérateur d'inversion. |

---

Avec ces briques, je peux écrire un algorithme simple qui calcule la surface d'un rectangle.

![alt text](../../images/image-10.png)

*Exemple d'algorithme : je déclare trois variables et j'effectue un traitement pour obtenir la surface.*

Grâce aux pictogrammes ENTRÉE et SORTIE, je peux demander à l'utilisateur de rentrer la longueur et la largeur, puis lui afficher le résultat pour rendre le programme dynamique.

![alt text](../../images/image-17.png) 

*Demander la longueur et la largeur à l'utilisateur, puis afficher la surface.*
