
## La programmation - Pillier de l'informatique

La programmation c'est l'action de créer un programme executable par un ordinateur. 

A l'origine les premiers programmes était des cartes perforées (un trou pour *1* pas de trou pour *0*) qu'un opérateur humain passaient dans un ordinateur géant appellé *main-frame*.

Avec le temps les ordinateurs devinrent de plus en plus puissant et il nous à été possible d'écrire des programmes directement depuis un ordinateur avec un clavier et un écran qui affiche des caractères.

Le binaire étant particulièrement long et compliqué pour la rédaction d'un programme, il nous fallait une abstraction compéhensible des humains.

Un langage proche de l'anglais qui nous permetterais d'allouer de la mémoire, faire des calculs et lire des entrées(clavier,carte réseau,...), écrire sur des sorties(écran, carte réseau,...).

On appel ce langage un langage de programmation et son plus éminant représentant est le **langage C**, le langage à la base de tout les systèmes d'exploitation moderne et de la plupart des programmes qui formes la colonne vertebarale de l'informatique moderne.

### La création d'un programme - "coder"

La création d'un programme se fait en 3 étapes :
1. Ecrire du code dans un langage de programmation
2. Compiler le code en un executable binaire grâce à un compilateur.
3. Faire éxecuter l'executable (le programme) par un système d'exploitation

> L'éxectuable fabriqué par le compilateur est également appelé programme ou logiciel. Chrome, Steam, Skype et l'explorateur de fichier Windows sont tous des programmes. Et comme tout programme ils ont tous été compilés par un compilateur.

![alt text](images/image-18.png)

En fonction de notre système d'exploitation l'installation d'un compilateur et l'éxécution d'un programme diffère.

Même si la majorité des utilisateurs d'ordinateurs utilise Windows, aujourd'hui la plupart des programmes son executés sur des serveurs Linux et la connaissance des commandes et du système Linux est un compétences qu'un étudiant doit aborder le plus tôt possible.

### Activité - Créer son premier programme !
Si vous êtes sous Windows : Activité-compiler un programme sous Windows
 
Si vous êtes sous Linux ou MAC : Activité-compiler un programme sous Linux
> Sous Mac utilisez *brew* plutot que apt pour installer des logiciels.

### L'algorithmie ou comment concevoir un programme ?
L'algorithmie est un domaine des mathématiques qui consiste à définir, via des rêgles non-anbigüe, une procedure permettant de résoudre un problème.

Programmer c’est définir un plan, composé d’instructions que l’on exécutes les unes après les autres. Parfois le plan peut contenir de plusieurs branches de possibilités dépendantes de conditions : « Il à t-il des bouchons sur l’autoroute, si oui prenons la nationale pendant 20 kilomètres sinon prenons l’autoroute ».  Ce plan est appelée un algorithme.

Un algorithme est composées de différentes briques élémentaires qui permettent la résolution de problème.

### Briques élémentaires d'un algorithme
Un algorithme peut être représenté via une suite de pictogrammes appellée algorigramme. Voici par exemple un algorithme qui est une suite de brique *Traitement* puis une condition *SI* comme défini dans le tableau suivant.
*Algorithme de l'omellette*
![La recette de l'omelette_schema](images/image-2.png)

> Les algorigrammes et leurs briques sont définies dans la norme ISO 5807 (sortie 1985)

|Tableau des briques d'un algorigramme|||
|-|-|-|
|Traitement|Un traitement quelconque|![alt text](images/image-8.png)|
|Donnée ou variable|Stocker un valeur dans un case mémoire|![alt text](images/image-7.png)*Donnée quelconque, j'écrit le nom de la variable à l'interieur* |
| ENTREE (input) | demander, lire | ![alt text](images/image-13.png) *Entrée manuelle de l'utilisateur( un clavier par exemple ), peut être remplacé par un Traitement comme "demander x à l'utilisateur"* |
| SORTIE (output) | écrire, afficher| ![alt text](images/image-14.png)*afficher(écran) peut être remplacer par un Traitement comme "afficher x à l'écran"* |
|+ - * / %| Faire des calculs arithmétiques dans des briques Traitement|  |

|Structure de controle|||
|-|-|-|
| SI ALORS SINON (*if else*) | *SI age > 17 ALORS affiche "majeur" SINON affiche "mineur"* | ![alt text](images/image-12.png) |
| La boucle TANT QUE (while) | TANT QUE age < 1  FAIRE demander age |*Je demande prix à l'utilisateur, puis je le redemande en boucle TANT QUE le prix est inférieur à 0.*  ![alt text](images/image-15.png) |

|Opérateurs logiques| Opérateurs utilisables dans un SI ou un TANT QUE|
|-|-|
|< >|Inférieur à ou Supérieur à|
|==| Egale à|
|!=| Différent de|
|AND| ET, par exemple : *age >17 AND taille>1,60*; age est supérieur à 17 et la taille plus d'1m60 |
|OR| OU, par exemple : keyPressed == "q" OR keyPressed == "Echap"  |
|NOT,!| NOT true == false ; 20 > 10 == true ; NOT 20 > 10 == false; c'est l'opérateur d'inversion qui inverse vrai à faux et vis versa.|

Avec ces briques je peux écrire un algorithme simple qui effectue la surface d'un rectangle.

![alt text](images/image-10.png)
*Exemple d'algorithme, je déclare trois variables et j'effectue un traitment pour obtenir la surface.*

Grace aux pictogrammes ENTREE et SORTIE je peux demander à l'utilisateur de rentrer les longueur et largeur et lui afficher le resultat pour rendre le programme dynamique.

![alt text](images/image-17.png) 
*Demander longueur et largeur à l'utilisateur puis afficher la surface*
