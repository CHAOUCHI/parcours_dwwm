
## Activité - Comment compiler son premier programme ?

### Pré-requis
Je recommande de coder en C sous linux car la plupart des logiciels codés en C tourne sous Linux ou dans un environnement UNIX.

Il est également important pour vous de vous familirisez le plus tôt possible avec les commandes Linux pour ne pas être handicapé plus tard lors de la conception de vértiable logiciel.

Il existe plusieurs moyens d'être sous Linux sans abandonner Windows : 
- Le dual-boot, installer deux OS sur le même PC.
- Un Machine Virtuel(VM) qui va émuler un ordinateur et dans laquelle je peux installer Linux.
- WSL(Windows subsytem for Linux)

Si vous n'etes pas sous linux veuillez consulter l'activité sur les machines virtuel pour mêttre en place une VM Debian.

> Si vous voulez installer Linux sur votre machine vous aurez besoin :
> - Un fichier .iso Ubuntu téléchargable sur le siteweb d'Ubuntu.
> - Rufus, un logiciel qui permet de créer une clé bootable. C'est à dire une clé usb qui contient le programme d'installation d'un OS.
> - Accéder au BIOS pour charger votre machine sur la clé et ainsi installer Ubuntu.

### Ecrire le code source.

Pour compiler un programme il faut d'abord l'écrire dans un fichier texte en respectant la syntaxe d'un langage de programmation.

Le texte ainsi écrit est appelé *code source*.

Voici le code source d'un programme tout simple écrit en C qui affiche "Bonjour !".
```c
#include <stdio.h>

int main(){
    printf("Bonjour !\n");
    return 0;
}
```
1. Créez un dossier nommée *my_first_app*
2. Ecrivez ce code source dans un editeur de texte (blocnote, notepad++ ou vscode)
3. Enregistrez ce fichier sous le nom ***main.c***

### Compiler le code source
Pour compiler notre code source il nous faut un compilateur.

Sous GNU/Linux installez le compilateur gcc via apt.
```bash
sudo apt install gcc
```

> *sudo* permet de demander les droits administrateur néccessaire à l'installation d'un programme.

Rendez-vous ensuite dans le dossier qui contient votre code source grâce à la commande *cd*(*change directory*):

```bash
cd Documents/my_first_app
```

Compiler *main.c* en un fichier nommé *hello*

```bash
gcc main.c -o hello
```

Voilà ! Nous venons de créer un programme nommé *hello*.

> Sous linux les programmes n'on pas besoin d'extension pour fonctionner. Mais sous windows votre programme s'appelle *hello.exe*.

> Pour avoir plus d'info sur le programme *gcc*, notament la signification du paramètre *-o*, tapez la commande suivante et accédé au manuel :
>```
>man gcc
>```

> Si vous ne tapez pas le paramètre `-o` gcc nommera votre programme `a.out`.
> `.out` n'est pas une extension comme les `.exe` de windows votre programme pourrais tout aussi bien s'appeler `michel`.

### Executer le programme
Il est temps d'éxécuter notre programme !

```bash
./hello
Bonjour !
```
> *./* permet de dire à l'invité de commande (shell) de chercher un fichier qui se trouve dans le répertoire courant. 

> Pour voir le repertoire courant tapez la commande `pwd` dans le terminal.

> Par defaut le terminal cherche le nom des programmes dans des dossiers inscrit dans la variable d'environnement *PATH* (chemin) or notre dossier my_first_app n'est pas connu du *PATH*.

### Récupérez l'entrée utilisateur
```c
#include <stdio.h>

int main(){
    int user_input; // Je déclare une variable de type entier (integer)
    
    printf("Tapez un nombre\n");

    // J'attend que l'utilisateur tape un nombre
    scanf("%d",&user_input); 
    // La valeur à été stockée dans la variable user_input.

    // J'affiche la valeur de la variable user_input
    printf("%d",user_input); 
}
```

#### Questions
1. Compilez puis executez le programme.
2. Modifiez le code pour que a question affiché soit maintant `"Quel est votre age ?"`.
1. Si je retire la ligne scanf, que ce passe-t-il a l'execution et pourquoi ?
2. A quoi sert scanf() ?

#### **Fonctionnement d'une variable**
Une variable est un espace mémoire auquel je donne un nom.
Voyez ca comme une boite que je crée et dans laquelle je place une valeur.

Ici je crée deux variables. La variable a de type entier (integer) et la variable b de type réel (float).

> Les float sont les nombres à virgules
> Les integer sont les nombres entiers.

```c
int a = 10;
float b = 10;
```

> **Attention à toujours ecrire vos lignes de code entre les accolades du la fonction main**
> Dans la suite du cours je ne le préciserais pas systématiquement pour réduire la longueur des extraits de code.

La taille de l'espace mémoire occupé par une variable varie en fonction du ***type de variable***.

Parmis les types variables les plus classiques on retrouve.

|type|syntaxe en C|taille en mémoire|
|-|-|-|
|integer|*int age = 24;*|4 octets|
|float|*float taille = 1.70;*|8 octets|
|character|*char lettre = 'h';*|1 octet|
|chaine de caractère|*char\* mot = "hello";*|1octet * le nombre de caractère (4 octets pour la chaine *hello* par exemple)|

4 octets c'est 32 bits. Un integer à donc 2^16 valeurs possible.

> Une chaine de caractère (string) est une suite de caractère stockées dans la mémoire les uns à la suite des autres.

#### **Fonctionnement de printf**
printf() signifie Print formated, il permet d'afficher du texte dans la console. On peut afficher la valeur d'une variable grâce au caratère de formatage de printf().


Si je déclare quelque variables.
```c
#include <stdio.h>

int main(){
    // Je déclare quelque variables.
    int a = 10;
    float b = 6.896;
    int variable = 88;
    char une_lettre = 'f';
    char* prenom = "Massinissa";

    return 0;
}
```
> Ici j'écris les valeurs (10,88,'f') *en dur* dans le code pour vous montrer un exemple simple. C'est un exemple purement pédagogique en situation réel ces valeurs sont lu dans des fichiers ou dans une base de données. Ne vous formalisez pas la dessus pour l'instant.

Et je les affiches avec un printf en précisiant le bon symbole de formatage.

- `%d` pour les `int`
- `%f` pour les `float`
- `%c` pour les `char`
- `%s` pour les string(char*)

```c
#include <stdio.h>

int main(){
    // Je déclare quelque variables.
    int a = 10;
    float b = 6.896;
    int variable = 88;
    char une_lettre = 'z';
    char* prenom = "Massinissa";

    printf("La valeur de a est %d .\n",a);
    printf("la valeur de b est %f .\n",b);
    printf("La valeur de la variable une_lettre est %c .\n",une_lettre);
    printf("Je m'appelle %s :)\n",prenom);
    
    return 0;
}
```

Je peux aussi fournir autant de variables que de formatage à `printf` pour afficher les valeurs de plusieurs variables en même temps.

```c
#include <stdio.h>

int main(){
    printf("Salut\n");

    // Je déclare quelque variables.
    int a = 10;
    float b = 6.896;
    
    // J'affiche deux variables
    printf(" %d %f \n",a,b);

    return 0;
}
```



#### **Programmation conditionnel, le fonctionnement du If**
Avec un SI (if) je peut vérifier si une chose est vrai avant d'effectuer une action.
```c

    int age = 24;
    // Si age est inférieur à 18
    if(age < 18){
        // J'execute cette ligne
        printf("Je suis mineur");
    }
    if(age > 17){
        // Sinon je fais celle-ci
        printf("Je suis majeur");
    }
```

#### **Fonctionnement de scanf**
*scanf* permet de demander à l'utilisateur de taper du texte au clavier.
Il prend en deuxième paramètre l'adresse d'une variable pour y stocker la valeur fournit par l'utilisateur.
```c
#include <stdio.h>

int main(){
    int nombre; // JE déclare une variable integer
    scanf("%d",&nombre);
    printf("L'utilisateur a tapé : %d\n",nombre);

    return 0;
}
```


En lanagage C l'opérateur *&* permet de récupérer l'adresse d'une variable.
```c
int a = 5;
printf("La valeur de a est %d\n",a); // AFFICHE 5
printf("L'adresse de a est %d\n",&a); // AFFICHE L'adresse de la variable
```
**Il faut toujours utiliser l'opérateur & avec scanf.**


#### Exercices
Ecrivez un programme,

3. Qui dit si le nombre tapé par l'utilisateur est inférieur à 100.

4. Qui affiche le carré d'un float fournit par l'utilisateur.

5. Qui demande deux nombres et affiche leurs produits.


#### Activité Question pour un champion
Consigne : Avec l'aide de scanf() et printf() codez un mini-jeu "Question pour champion !" ! 

Voici un code source à compléter.

```c
#include <stdio.h>

int main(){
    // Je déclare quelque variables.
    printf("Bienvenue dans question pour un champion !\n");

    printf("Quel est la couleur du cheval blanc d'henri 4 ?\n");

    printf("1. Rouge.\n2. Blanc\n");
    int reponse = 0;
    scanf("%d",&reponse);
    if(reponse == 2){
        printf("Bonne réponse !\n");
    }else{
        printf("Faux !\n");
    }

    // Continuez... et ajoutez une dizaine de questions !
    // ... 

    printf("Au revoir.\n");
    return 0;
}
```
