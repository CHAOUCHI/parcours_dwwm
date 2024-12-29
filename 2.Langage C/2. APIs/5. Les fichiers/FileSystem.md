# Le FileSystem Linux

En C, vous pouvez interagir avec le système de fichiers à l'aide de la bibliothèque `<stdio.h>` et des fonctions spécifiques :

- **Ouverture de fichiers** : `fopen()`
- **Placer le curseur de lecture du fichier** : `fseek()`
- **Lecture/Écriture** : `fread()`, `fprintf()`
- **Fermeture** : `fclose()`

1. La première étape de la lecture d'un fichier est de créer une variable de type `FILE*` avec la fonction `fopen()`. En précisiant le mode d'accès.
    - `"w"` : Ecriture seule, curseur au début, fichier crée si inconnu. **ECRASE TOUT LE CONTENU DU FICHIER**
    - `"r"` : Lecture seule, curseur au début.
    - `"w+"` : Lecture et écriture, curseur au début, fichier crée si inconnu **ECRASE TOUT LE CONTENU DU FICHIER**
    - `"r+"` : : Lecture et écriture, curseur au début.

2. Je n'oublie pas de précisier les droits d'accès au fichier : `"w"` pour l'écriture, `"r"` pour la lecture.



# Exemples d'utilisation

Je vous recommande de lire la partie sur l'ouverture, le curseur et les rêgles d'accès d'abord, ensuite en fonction de vos besoins vous pouvez picher dans les différentes méthodes du dessous pour lire un fichier dans de bonne conditions.

## Créer un fichier - fopen
fopen et le mode *w* (*write*) crée un fichier si il n'existe pas déjà sinon renvoi l'adresse d'un file descriptor. Les fichiers sous linux peuvent être manipulé avec un pointeur `FILE*`, c'est une `struct`.
```c
char filename[] = "mon_fichier";
FILE* fd = fopen(filename,"w"); // crée le fichier mon_fichier
```

## Créer une fichier si il n'existe pas

Si je ne suis pas sur que mon fichier existe je peux le créer avec `fopen()` et le mode append `a`.

```c
FILE* fdAppend = fopen("mon_fichier","a");
fclose(fdAppend);
```

Un fichier `mon_fichier` à été crée si il n'existe pas. L'interet de `a` par rapport à `w` c'est que `a` ne supprime pas les données précédentes.

## Les rêgles d'accès

Les rêgles d'accès sont les suivantes :

- Lecture (**L**)
- Ecriture (**E**)
- Suppression de données précédentes (**S**)
- Curseur position (**C**) : *START* ou *END only* (impossible d'écrire avant la fin du fichier)

|MODE|L|E|S|C|
|-|-|-|-|-|
|r|oui|||START
|r+|oui|oui||START
|w||oui|oui|START
|w+|oui|oui|oui|START
|a||oui||END (only)
|a+|oui|oui||END (only)


> Le mode le plus souple et le moins dangereux est le r+ car il ne supprime pas les données précédente et permet de lire ET d'écrire.

### Les rêgles d'accès binaire
Il existent également des types binaires qui permettent de lire et écrire par tranche d'octets différent de 1 (la taille d'un char). 

On ne s'en sert donc pas pour les fichier texte, mais il sont très utile pour lire les données brut d'un fichier audio ou vidéo par exemple.

|MODE|L|E|S|C|
|-|-|-|-|-|
|rb|oui|||START
|rb+|oui|oui||START
|wb||oui|oui|START
|wb+||oui|oui|START
|ab||oui||END (only)
|ab+|oui|oui||END (only)

> Les accès binaires utilisent de préférence les fonctions `fread` et `fwrite` qui permettent d'écrire ou de lire une suite d'octets directement dans le fichier.


## Lire dans un fichier

Lire dans un fichier se fait via les fonctions :

- `fgets()` : Lire une ligne du fichier **(le curseur est placé sur la ligne suivante)**
- `fread()` : Lire un nombres d'éléments en fonction de la taille en octet d'une élément (accès binaire)

### Lire ligne par ligne

```c
#include <stdio.h>
#include <string.h>

#define BUF_SIZE 255

int main(){
    // Accès Ecriture et Lecture SANS SUPPRESSION DE DONNEES
    FILE * fd = fopen("test","r+");

    char buf[BUF_SIZE];memset(buf,0,BUF_SIZE);
    fgets(buf,BUF_SIZE,fd); // fgets() sur le fd et non sur stdin comme d'habitude
    
    printf("%s",buf);
    
    return 0;
}
```

Résultat

```linux
La programmation web a vu émerger des figures emblématiques qui ont révolutionné la manière dont nous interagissons avec le web. 
```

Voici le fichier `test` : 
```
La programmation web a vu émerger des figures emblématiques qui ont révolutionné la manière dont nous interagissons avec le web. 

- Tim Berners-Lee, l'inventeur du World Wide Web, est sans doute le pionnier le plus connu. En créant le premier navigateur et le langage HTML en 1991, il a ouvert la voie à l'ère moderne d'Internet. 

- Brendan Eich est également un nom incontournable : il a créé JavaScript en 1995, un langage essentiel pour la création de sites web interactifs. 

- John Resig, quant à lui, est le développeur derrière jQuery, une bibliothèque JavaScript qui a simplifié la manipulation du DOM et a rendu le développement web plus accessible. 

- Plus récemment, des figures comme Evan You, créateur de Vue.js, et Ryan Dahl, fondateur de Node.js, ont permis d'élargir les possibilités du développement web côté client et serveur, transformant la manière dont les applications web modernes sont construites.
```

### Le Curseur

Le file descriptor retourné par `fopen()`  contient un curseur qui est l'index de la *"tête de lecture"* du fichier. A peu à la manière d'une machine à écrire le curseur garde le compte de là ou la lecture ou l'écriture en est.

C'est très pratique pour ne pas lire en boucle les mêmes données.

Vous pouvez voir ici qu'à chaque appel d'une fonction de manipulation de fichier le curseur est déplacé.
```c
#include <stdio.h>
#include <string.h>

#define BUF_SIZE 255

int main(){
    // Accès Ecriture et Lecture SANS SUPPRESSION DE DONNEES
    FILE * fd = fopen("test","r+");

    // r+ : donc curseur au début du fichier

    char buf[BUF_SIZE];memset(buf,0,BUF_SIZE);
    fgets(buf,BUF_SIZE,fd);
    // fgets! : donc curseur au début de la deuxième ligne après le \n
    fgets(buf,BUF_SIZE,fd);
    // fgets! : donc curseur au début de la troisème ligne après le \n
    fgets(buf,BUF_SIZE,fd);
    // fgets! : donc curseur au début de la quatrième ligne après le \n
    
    printf("%s",buf); // Affiche la troisème ligne ...
    
    return 0;
}
```

```
- Tim Berners-Lee, l'inventeur du World Wide Web, est sans doute le pionnier le plus connu. En créant le premier navigateur et le langage HTML en 1991, il a ouvert la voie à l'ère moderne d'Internet. 
```

#### Déplacer le curseur - `fseek()`

Ormit pendant l'utilisation de fonctions de manipulations de fichier, pour déplacer le curseur il faut utiliser la fonction `fseek()`.


```c
#include <stdio.h>
#include <string.h>

#define BUF_SIZE 255

int main(){
    // Accès Ecriture et Lecture SANS SUPPRESSION DE DONNEES
    FILE * fd = fopen("test","r+");

    char buf[BUF_SIZE];memset(buf,0,BUF_SIZE);
    
    // Déplacer le curseur de 43 caractères avant le fin du fichier.
    fseek(fd,-43,SEEK_END); 
    
    // Récupère 3 caractères à la fin du fichier (3 + '\0' = 4char) 
    fgets(buf,4,fd); 
    
    printf("%s\n",buf);
    // > app
    return 0;
}
```

Le *offset* de `fseek()` peut être négatif à partir du curseur ou positif.

Les modes de `fseek()` sont :

- SEEK_SET : début de fichier
- SEEK_END : fin de fichier
- SEEK_CUR : position actuel du curseur

Je peux par exemple déplacer le curseur d'un rend sur la droite comme ceci :
```c
#include <stdio.h>
#include <string.h>

#define BUF_SIZE 255

int main(){
    // Accès Ecriture et Lecture SANS SUPPRESSION DE DONNEES
    FILE * fd = fopen("test","r+");

    char buf[BUF_SIZE];memset(buf,0,BUF_SIZE);
    fseek(fd,1,SEEK_CUR); // Déplacer le curseur 43 caractère avant le fin du fichier.
    fgets(buf,4,fd); // Récupère 3 caractère (3 + '\0') dans le fichier
    
    printf("%s\n",buf);
    // > a p

    return 0;
}
```

### Connaitre le nombre de caractère (la taille) d'un fichier

Pour connaitre la taille d'un fichier nous procederons en deux étapes :
1. Déplacer le curseur à la fin du fichier
2. Lire la position du curseur pour connaitre le nombre le `char`(octet) du fichier.

```c
FILE* fd = fopen("mon_fichier","r");
fseek(fd,0,SEEK_END);
int sizeFile = ftell(fd);
```

Un char étant un octet la taille du fichier est donc sa taille en octet.
C'est particulierement utile à savoir pour parcourir un fichier `char` après `char`.

```c
FILE* fd = fopen("mon_fichier","r");

// Je place le curseur à la fin du fichier
fseek(fd,0,SEEK_END);
int sizeFile = ftell(fd); // Je récupère la position du curseur, la taille de mon fichier

char buf[sizeFile];memset(buf,0,sizeFile);
fseek(fd,0,SEEK_SET);  // Je replace le curseur au début pour pouvoir lire du début.
fread(buf,sizeFile,sizeof(char),fd); // Remplir le buf de tout les char(octet) du fichier 

for(int i =0;i<sizeFile;i++){
    printf("%c",buf[i]);  // j'affiche tout les caractères...
}
```


### Lire à une ligne spécifique

A l'aide d'une boucle for je peux facilement concevoir une fonction qui lit la ligne demandée et remplit un buffer.

`fgets()` va lire un ligne plusieurs fois dans une boucle for pendant le nombre de ligne `int line_index` fournit à l'appel.

```c
#include <stdio.h>
#include <string.h>

#define BUF_SIZE 255

int readLine(FILE* fd,char* buf,int buf_size,int line_index){
    int i;
    for (i = 1; i <= line_index; i++)
    {
        fgets(buf,buf_size,fd);
    }

    return i; // renvoi l'index de la dernière ligne lue
}

int main(){
    // Accès Ecriture et Lecture SANS SUPPRESSION DE DONNEES
    FILE * fd = fopen("test","r+");

    char buf[BUF_SIZE];memset(buf,0,BUF_SIZE);
    readLine(fd,buf,BUF_SIZE,7); // Lire la ligne 7 !

    printf("%s\n",buf);
    return 0;
}
```

### Lire / Extraire des valeurs d'une ligne

Une fois une ligne récupéré je peux extraire des données d'une ligne en les repérants par des caractère de séparation. 

Les fonctions `strtok()` et `sscanf()` vous nous simplifier la vie.

##### strtok - divisier la chaine

`strtok()` permet de récupérer une chaine bloc par bloc séparer par un caractère de séparation. A chaque appel de `strtok()` je récupère le bloc (token) suivant.

*Pour ce fichier test*
```
Content-Type : text/html
Content-Length : 1024
Host : massi.com
```

```c
#include <stdio.h>
#include <string.h>

#define BUF_SIZE 255

int readLine(FILE* fd,char* buf,int buf_size,int line_index){
    int i;
    for (i = 0; i < line_index; i++)
    {
        fgets(buf,buf_size,fd);
    }

    return i; // renvoi l'index de la ligne
}

int main(){
    // Accès Ecriture et Lecture SANS SUPPRESSION DE DONNEES
    FILE * fd = fopen("test","r+");

    char buf[BUF_SIZE];memset(buf,0,BUF_SIZE);
    readLine(fd,buf,BUF_SIZE,1);
    printf("%s\n",strtok(buf,":"));
    // A partir du second appel si je veux continuer à lire buf
    // Je fournis NULL à la place du buf
    printf("%s\n",strtok(NULL,":"));
    return 0;
}
```
Résultat
```
Content-Type 
 text/html
```

`strtok()` est très pratique pour lire une ligne formatée par des caratères de séparation

> Notez l'espace vide avant ` text/html` lui aussi est copié par `strtok()`

##### sscanf - extraire des données formatées
`sscanf()` est une fonction qui permet de remplir des variables à partir de plusieurs blocs de texte successifs séparés par des ***espaces blanc***.

> Attention ne confondez pas barre espace et *espace blanc* un espace blanc peut être n'importe quel caractère : `space`,`\n`,`\t` ou `EOF`
> EOF signifie End Of File c'est le code de fin de fichier (habituellement -1).

*Le fichier test*
```
HP 90
END 100
PV 200
```

*main.c*
```c
#include <stdio.h>
#include <string.h>

#define BUF_SIZE 255

int readLine(FILE* fd,char* buf,int buf_size,int line_index){
    int i;
    for (i = 0; i < line_index; i++)
    {
        fgets(buf,buf_size,fd);
    }

    return i; // renvoi l'index de la ligne
}

int main(){
    // Accès Ecriture et Lecture SANS SUPPRESSION DE DONNEES
    FILE * fd = fopen("test","r+");

    char buf[BUF_SIZE];memset(buf,0,BUF_SIZE);

    // Je lis la deuxième ligne
    readLine(fd,buf,BUF_SIZE,2);
    
    char carac_name[255];memset(carac_name,0,255);
    int carac_value = -1;

    // Je récupère les deux premiers tokens
    sscanf(buf,"%s%d",carac_name,&carac_value);
    // Je les affiches à l'écran
    printf("%s : %d\n",carac_name,carac_value);

    return 0;
}
```
```
END : 100
```


Attention les fonctions de la familles de `scanf` enregistre tout les tokens dans l'ordre tant qu'on lui donne des formats `(%d,%s,%c,%p)` à remplir.

Il ignore complètement le type du format, scanf n'est donc pas un moyen de rechercher dans une string des données d'un certain type !

Si je change le texte du fichier en ceci, scanf va lire les deux premiers tokens : `"HP"` et `":"`. Même si `:` ne correspond pas au type `%d`. 

`scanf()` ne fait que lire dans l'ordre.

*test file*
```
HP : 90
END : 100
PV : 200
```

Je  lance le code d'en haut...
*Résultat*
```
END : -1
```

`carac_value` est toujours égale à `-1` car elle n'a pas été modifié par `sscanf()` à cause de l'erreur de type entre `:` et `%d`.


###### Changer le caractère de séparation d'un `scanf()`
Si je prend l'exemple précedent scanf() échouait à récupérer le nombre d'HP car il lisais le token `:`.

Il fait ceci car le caractère de séparation par défaut du `scanf()` est l'*espace blanc*.

Je peux en "ajouter un autre".

Exemple 1 - ajouter un caratère de séparation `:`
```
HP : 90
END : 500
PV : 5
```

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>

#define BUF_SIZE 255

int main(){
    char line[BUF_SIZE]; memset(line,0,BUF_SIZE);
    char carac_name[BUF_SIZE]; memset(carac_name,0,BUF_SIZE);
    int carac_value = -1;
    
    FILE * fd = fopen("test","r+");
    fgets(line,BUF_SIZE,fd);
    sscanf(line,"%s : %d",carac_name,&carac_value);
    printf("%s %d\n",carac_name,carac_value);
    
    return 0;
}
```

```
HP 90
```

Attention cependant à ne pas coller le caractère de séparation à un token, les espace blancs sont toujours pri en compte pour séparer les tokens.

Pour ce fichier (les `:` sont collés à `HP` ! )
```
HP: 90
END: 500
PV: 5
```
Résultat érroné : `HP` et le `:` ont étés confondus en un seul token `HP:` 

```
HP: -1
``` 



# Ecrire dans un fichier

Pour écrire dans un fichiers je doit utiliser les fonctions `fprintf()` ou `fwrite()`.

- `fprintf()` va pouvoir écrire une chaine formaté au niveau du curseur
- `fwrite()` va pouvoir ecrire une suite d'octet au niveau du curseur

Pour les fichiers texte nous utilisons `fprintf()`.

Par défaut la classique fonction `printf()` écrit sur le fichier `stdout` : l'écran du PC.

Avec `fprintf()` je peux utiliser toute la puissance de la fonction `printf()` pour écrire dans n'importe quel fichiers. Y compris les fichiers ouvert avec `fopen()`.

```c
#include <stdio.h>
#include <string.h>

#define BUF_SIZE 255

int main(){
    FILE * fd = fopen("test","r+");
    char* name = "Billy";
    int age = 19;


    fprintf(fd,"Salut je suis %s et j'ai %d ans !",name,age);

    return 0;
}
```

Avec l'aide de `fseek()` je peux être plus précis dans l'endroit que je souhaite écrire.

Si vous voulez modifier une ligne je vous recommande de la supprimer complement et de la reformater avec un `fprintf()`.

## Remplacer le contenu d'une ligne

Grâce à `fseek()` et un peu d'algo je peux modifier le contenu d'une ligne pour mettre à jour les points de vie dans ma sauvegarde.

*Pour le fichier test suivant :*
```
HP : 120
END : 500
PV : 005
```
> Pour me simplifier la tâche, j'ai décider de formater les valeurs en nombres de 3 chiffres obligatoirement.

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>

#define BUF_SIZE 255

int main(){

    char line[BUF_SIZE]; memset(line,0,BUF_SIZE);
    char carac_name[BUF_SIZE]; memset(carac_name,0,BUF_SIZE);
    int carac_value = -1;
    
    FILE * fd = fopen("test","r+");
    fgets(line,BUF_SIZE,fd);
    // 0. Après avoir récupéré les données importantes.
    sscanf(line,"%s : %d",carac_name,&carac_value);

    /*-- 1. J'efface la ligne --*/
    // Je place le curseur au début de la ligne
    fseek(fd,-strlen(line),SEEK_CUR);
    // Je remplis le buffer line d'espace
    memset(line,' ',strlen(line)-1); // -1 pour ne pas écraser le \n
    // J'écrit la ligne vide par dessus la ligne existante
    fprintf(fd,line);
    // Je replace le curseur au début de la ligne
    fseek(fd,-strlen(line),SEEK_CUR);
    
    // ...
    carac_value+=1;
    // ...

    /*-- 2. J'ecrit la nouvelle ligne --*/
    fprintf(fd,"%s : %03d",carac_name,carac_value); 
    // Je formate avec %03d pour afficher les nombres par 3 chiffres systématiquement ainsi la line fait toujours la même taille et je ne risque par d'écraser la suite du fichier
    return 0;
}
```
