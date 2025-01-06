
## Le système - Pillier de l'informatique
Von Neumann est un schéma matériel d'un ordinateur. A l'origine les premiers programmeurs concevaient des programmes qui écrivaient directement dans les registres du matériel, le développement de logiciel demandait donc des compétences pointues et prenaient énormement de temps.

L'idée de concevoir un logiciel qui fournit, une bonne fois pour toute, un interface avec les ressources matériel gérmat et les premiers systèmes d'exploitation (*Operating system* ou *OS*) furent conçu.
### Schéma en couche d'un ordinateur
De nombreux systèmes virent le jour jusqu'à l'apparation *d'un système pour les réunir tous* : ce système s'appelle ***UNIX***. Il naquit en même temps que le **langage C**, dans le années 1970, des mains des légendaires : Ken Thompson (*UNIX*), Dennis Ritchie (*UNIX & C*) et Brian Kernighan (*UNIX & C*) dans les laboratoires de *Bell*.

Unix a été adopté en masse grâce à sa grande compatibilité avec la plupart des architectures d'ordinateurs de l'époque. Le langage C est né en même temps que Linux, leurs relations symbiotique fait qu'un programmeur de l'époque pouvait apprendre le C et écrire des programmes compatible avec la plupart des ordinateurs et ce sans avoir à se soucier de son architecture spécifique.

Son modèle de représentation des données et du matériel sous la forme de fichier fût une révolution et encore aujourd'hui le système UNIX sert de norme aux systèmes comme MACOS et GNU/Linux via leurs adoptions de la norme POSX, Windows restant à part.

> Le noyaux Linux sert aujourd'hui (2024) les 3,9 milliards d'utilisateur de smartphone android.

> La plupart des commandes fonctionnant sous Linux fonctionne également sous MAC : *ls, mkdir, cd*.

On peut voir sur le schéma suivant une reprsentation du fonctionnement logiciel d'un ordinateur.

D'abord le matériel (voir Architecture Von Neumann) qui ne possède aucune partie logiciel, puis un logiciel nommée Système d'exploitation.

Les fabriquant de système d'exploitation on coder en avance de nombreuses fonctionnalitées utilisable par le programmeur. On appel ses fonctions appels système, en voici un extrait :

|Les appels systèmes||||
|-|-|-|-|
|open()|ouvre ou crée un fichier|
|read()|Lit un fichier|
|write()|écrit sur un fichier|
|exec()|Execute un programme|
|kill()|Arrete un programme|

La plupart des programmeurs d'aujourd'hui ne touche jamais à ces fonctions et travail avec des langage de programmation dit "haut niveau" c'est à dire moins proche de la machine. Cependant peu importe à quel "niveau" vous travaillerez, au bon du compte, se sont forcement les appels système qui sont utilisés pour communiquer avec le matériel par l'intérmédiaire du système d'exploitation.


![alt text](images/image-1.png)
*Schéma du fonctionnement logiciel d'un ordinateur*

Le système d'exploitation nous fournit des fonctions comme *read()* ou *write()* pour écrire dans des fichiers ou encore *exec()* pour executer un programme. Ces fonctions sont des appels systèmes et on peut les utiliser librements dans des langages comme le Langage C par exemple.

Vous pouvez essayer de compiler ce programme, vous verrez qu'un fichier todo.txt sera crée et qu'il contiendra la chaine de caratère *"Faire les courses"*.

```c
// Inclusion des bibliotèque d'appels système
#include <unistd.h>
#include <fcntl.h>

int main(){
    // Demander à l'OS d'ouvrir le fichier todo.txt dans le disque dur 
    int fichier = open("todo.txt",O_CREAT | O_WRONLY, 0777);
    char* tache = "Faire les courses";
    // Ecrire le texte "Faire les courses" dans le fichier
    write(fichier,tache,17);
    return 0;
}
```
**Et c'est ainsi qu'un programme à accès aux ressources d'un ordinateur.**

> Dans le programme précedent,
> - O_WRONLY signifie *Open write only* : ouvrir en lecture seule.
> - O_CREAT signifie *OPEN_CREATE* : créer le fichier si il n'existe pas
> - 0777 signifie que tout les monde à le droits de lire et écrire sur le fichier
> - 17 c'est le nombres de lettre à écrire. "Faire les courses" fait 17 lettres en comptant les espaces.
