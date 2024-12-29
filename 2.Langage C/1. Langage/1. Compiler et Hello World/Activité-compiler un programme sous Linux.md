
## Activité - Comment compiler son premier programme ?

### Pré-requis
Je recommande de coder en C sous linux car la plupart des logiciels codé en C tourne sous Linux ou dans un environnement UNIX.

Il est également important pour vous de vous familirisez le plus tot possible avec les commandes Linux pour ne pas être handicapé plus tard lors de la conception de vértiable logiciel.

Il existe plusieurs moyens d'être sous Linux sans abandonner Windows : 
- Le dual-boot, installer deux OS sur le même PC.
- Un Machine Virtuel(VM) qui va émuler un ordinateur et dans laquelle je peux installer Linux.
- WSL(Windows subsytem for Linux)

Si vous n'etes pas sous linux veuillez consulter l'activité sur les machines virtuel pour mêttre en place une VM Debian.

### Ecrire le le code source.

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


### Executer le programme
Il est temps d'éxécuter notre programme !

```bash
./hello
Bonjour !
```
> *./* permet de dire à l'invité de commande (shell) de chercher un fichier qui se trouve dans le répertoire courant. 
>Par defaut le shell cherche le nom des programmes dans des dossiers inscrit dans la variable d'environnement *PATH* (chemin) or notre dossier my_first_app n'est pas connu du *PATH*.

### Récupérez l'entrée utilisateur
```c
int user_input;
printf("Tapez un nombre\n");
scanf("%d",&user_input);
printf("%d",user_input);
```

# Questions
1. Si je retire la ligne scanf, que ce passe-t-il a l'execution et pourquoi ?
2. A quoi sert scanf() ?

#### **Fonctionnement d'une variable**
Une variable est un espace mémoire auquel je donne un nom.
Voyez sa comme un casier que je crée et dans lequel je mes une valeur.
```c
// %d permet d'afficher un nombre
int nombre = 10;
printf("%d\n",nombre);
```
> *\n* est le caractère de retour à ligne

La taille de l'espace mémoire occupé par une variable varie en fonction du ***type de variable***.

Parmis les types variables les plus classique ont retrouve.

|type|syntaxe en C|taille en mémoire|
|-|-|-|
|integer|*int age = 24;*|2 octets|
|float|*float taille = 1.70;*|4 octets|
|character|*char lettre = 'h';*|1 octet|
|chaine de caractère|*char\* mot = "hello";*|1octet * le nombre de caractère (4 octets pour la chaine *hello* par exemple)|

>Une chaine de caractère est une suite de caractère stocké dans la mémoire les uns à la suite des autres.

#### **Fonctionnement de printf**
printf() signifie Print formated, car il permet d'afficher un texte dans la console et qu'il foit donc la possibilité d'y ajouter des variables à afficher avec des code de formatage.

```c
// %d permet d'afficher un nombre
int nombre = 10;
printf("%d",nombre);
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
Il prend en deuxième paramètre l'adresse d'une variable pour y stocker la valeur forunit par l'utilisateur.
```c
int nombre; // nombre est égal à ???
scanf("%d",&nombre);
// L'utilisateur tape 5
// nombre est égal à 5
```
En lanagage C l'opérateur *&* permet de récupérer l'adresse de l'espace mémoire d'une variable.
```c
int nombre = 5;
printf("%d",nombre); // AFFICHE 5
printf("%d",&nombre); // AFFICHE L'adresse de la variable
```
Passer l'adresse mémoire de la variable à scanf lui permet de modifier la variable, nous 


Ecrivez un programme,

3. Qui dit si le nombre rentré est inférieur à 100.

4. Qui affiche le carré du nombre

5. Qui demande deux nombres et affiche leurs produit.

4. Avec l'aide de scanf() et printf() essayez de coder un mini-jeu "Question pour champion !" ! :D

5. (Par équipe de 2) Inventez une idée de jeu suffisement simple pour être fait avec les outils que vous connaissez et codez le ensemble ! :)

6. Préparez ensemble un petit oral et expliquez comment vous vous y êtes pris pour faire le jeu.
