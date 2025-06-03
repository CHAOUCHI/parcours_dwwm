# Random :Obtenir des valeurs aléatoire en C

En informatique l'alétoire est impossible, on parle plutot de pseudo-aléatoire, c'est à dire d'une valeur généré via une formule mathématique. 

En C cette formule est implémenté par la fonction `rand()` de la bibliotèque `stdlib`.

```c
#include <stdlib.h>
#include <stdio.h>

int main(){
    // Je génére un premier nombre aléatoire
    int r1 = rand(); 
    printf("%d\n",r1);
    // Je génére un deuxième nombre aléatoire
    int r2 = rand();
    printf("%d\n",r2);
    return 0;
}
```
### Exercice

1. Executez le code précédent plusieurs fois et observez la valeur sortie à chaque execution. Quand concluez-vous ?

## La seed, générer des valeurs aléatoires différentes.
Si vous utilisez `rand()` toute seule vous allez toujours générer les même valeurs car la fonction de génération de `rand()` renvoi une valeur d'une la suite de valeurs à partir d'une valeur appelée seed(graine).

Pour une même *seed* `rand()` fabriquera toujours la même suite de  valeurs.

La fonction srand() permet de définir cette seed.

Ici je donne des seeds différente et j'obtients donc des valeurs différentes.

```c
#include <stdlib.h>
#include <stdio.h>
int main(){
    int r;

    srand(1);
    r = rand(); // Generation d'une valeur random ...
    printf("Premier valeur de la suite basé sur une seed de 1 : %d\n",r);
    r = rand(); // Generation d'une seconde valeur random ...
    printf("Deuxième valeur de la suite basé sur une seed de 1 : %d\n",r);

    // Changement de seed !!!
    srand(19);
    r = rand(); // Generation d'une valeur random ...
    printf("Premier valeur de la suite basé sur une seed de 19 : %d\n",r);

    r = rand();// Generation d'une seconde valeur random ...
    printf("Deuxième valeur de la suite basé sur une seed de 19 : %d\n",r);
    return 0;
}
```

### Une suite de valeurs = une seed
Comme dit précédement à chaque seed correspond une suite de valeurs possible.

Si la *seed* est égale à `1` par exemple la suite de valeur sera toujours :
```
1804289383
846930886
1681692777
1714636915
1957747793
424238335
719885386
1649760492
596516649
1189641421
...
```

> Attention si vous appelez une deuxième fois `srand()` la liste de valeurs sera *reset* et l'appel de `rand()` retournera à la première valeur. Attention à ne pas mettre `srand()` dans la boucle `for`.

1. Afficher les 10 premières valeurs de `rand()` pour une *seed* égale à `1`. (Elle doivent correspondre à la liste plus haut). *Astuce : la boucle `for`*

### Problématique d'une seed fixe
Il est problamatique d'utiliser une seed fixe dans un programme car la suite de valeurs sera alors toujours la même se qui va contre l'objectif de base : faire des valeurs aléatoires.

> Par exemple dans un jeux vidéo imaginez si à chaque fois que l'on demarre le jeu les valeurs aléatoires qui determine les caractéristiques des énnemies et leurs comportements sont toujours les mêmes. Le jeu n'aurais alors rien d'aléatoire et il se passerait toujours la même chose.
>
> A l'avenir on codera un jeu de PILE ou FACE. Si on ne trouve une solution pour obtenir des valeurs aléatoires, le PC jouera par exemple toujours PILE en premier premier coup.

### Utiliser le temps UNIX pour créer une seed dynamique.

Un méthode classique de génération de seed dynamique (différente à chaque execution du programme) est l'utilisation du temps UNIX comme seed (voir */Langage C/Time.md* ).

La fonction time() de la bibliotèque `time.h` renvoi un `int` :  l'heure UNIX, le nombre de secondes passées depuis le 1 janvier 1970.

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    srand(time(NULL));
    int r = rand();
    printf("%d\n",r);
    return 0;
}
```

### Exercice
1. Exectuez le code précedent et vérifié qu'un valeur aléatoire différente est générée à chaque execusion du programme.
2. A l'aide d'une boucle `for` qui tourne 10 fois, afficher les 10 premières valeurs générées par `rand()`.
2. Quelle est la différence entre les code suivant (1) et (2) :

*(1)*
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    while(1){
    
        srand(time(NULL));
    
        int r = rand();
        printf("%d\n",r);
    }
    return 0;
}
```
*(2)*
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    
    srand(time(NULL));
    
    while(1){
        int r = rand();
        printf("%d\n",r);
    }
    return 0;
}
```

### Générer un nombre aléatoire entre 0 et 1
Le nombre aléatoire généré est compris entre `0` et la constante `RAND_MAX`.

Pour générer un nombre aléatoire entre 0 et 1 je dois diviser le nombre par `RAND_MAX`.
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    srand(time(NULL));
    while(1){
        float r = (float)rand()/RAND_MAX;
        printf("%f\n",r);
    }
    return 0;
}
```
#### Exercices
3. Générez un nombre compris entre 0 et 10
4. Générez un nombre compris entre 0 et 17
5. Générez un nombre compris entre 5 et 15
6. Générez un nombre compris entre deux variables `float from` et `float to`.


<!-- 
Correction 6.
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    while(1){
        srand(time(NULL));
        float r = (float)rand()/RAND_MAX;
        int from = 5;
        int to = 15;
        printf("%f\n",r*(to-from)+from);
    }
    return 0;
}
``` -->


## L'entropie - Générer un nombre aléatoire solide entre A et B

Générer un nombre aléatoire avec la fonction time() possède plusieurs défauts:

- La seed est facilement devinable, il suffit de connaitre la date à laquelle la seed à été générée pour trouver la séquence de valeur aléatoire.

**La clé d'une bonne valeur aléatoire réside dans sa seed**.

Plus la seed est imprévisible plus la valeur sera aléatoire.

Il nous faut donc un moyen de fabriquer une seed la plus aléatoire possible.

La solution réside dans la fonction `getentropy()`.

### `getentropy()` obtenir des valeurs imprévisibles.
Pour fabriquer une seed de grande qualitée il faut obtenir des valeurs imprévisibles.

La fonction `getentropy()` renvoie un tableau de `int` aléatoires basés sur les valeurs de tous les ports de l'ordinateur (processeur, carte wifi, usbs, carte graphique). Plus il se passe de chose sur la machine plus la *seed* sera imprévisible.

La fonction `getentropy()` fait partie de la bibliotèque `sys/random.h`

```c
#include <sys/random.h>
#include <stdlib.h>
#include <stdio.h>

int main(){
    // Generating a random buf of bytes
    int buf[255];
    getentropy(buf,sizeof(buf));
    for(int i = 0; i < 255;i++){
        printf("%d\n",buf[i]);
    }
}
```

1. Executer le code suivant et observer la suite d'octets aléatoire affichés à l'écran par le `printf()`.
2. Faite la somme de tout ces `int` et stockez la dans une variable `int seed` qui contiendra notre *seed* de qualité.
3. Maintenant que vous avez cette *seed* fournissez la à la fonction `srand()` puis utiliser `rand()` dans une boucle `while` infinie.Ainsi vous générerez une infinité de nombre aléatoire à haute vitesse. Afficher cette suite de valeur aléatoire à l'infini avec un `printf()` dans le `while`.
4. Complétez la fonction suivante (`aleatoire()`) pour qu'elle fabrique une nombre aléatoire entropique compris entre `from` et `to` :
```c
#include <stdio.h>
#include <stdlib.h>
#include <sys/random.h>

float aleatoire(float,float);

int main(){
    while(1){
        float r = aleatoire(5,15);
        printf("random : %f\n",r);
    }
    return 0;
}


/**
 * Generating a random value between from and to
 * @dependecies : stdlib.h, sys/random.h
 */
float aleatoire(float from, float to){
    // Generating a random buf of bytes
    int buf[255];
    getentropy(buf,sizeof(buf));
    
    // Generating a random seed with the sum of all random bytes.
    int seed = 0;
    for (int i = 0; i < sizeof(buf); i++)
    {
        // addition des éléments du tableau d'int buf pour fabriquer une seed de qualité
        /**
            TO DO...




        */
    }
    // Give the seed to srand
    srand(seed);
    // Generating random value
    int valeur_random = rand();
    float random_from_to = /*  ???? calcul d'un random entre from et to */
    return random_from_to;
}
```
<!-- 
#### *Valeur random de qualité grâce à l'entropie entre 0 et RAND_MAX*
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <sys/random.h>

int main(){
    while(1){

        int buf[255];
        getentropy(buf,sizeof(buf));
        int seed = 0;
        for (int i = 0; i < sizeof(buf); i++)
        {
            seed+=buf[i];
        }
        printf("seed : %d\n",seed);
        
        srand(seed);
        int valeur_random = rand();
        printf("random : %d\n\n",valeur_random);
    }
    return 0;
}
```
#### Fonction de génération d'un nombre aléatoire de qualité en deux `int` `from` et `to`
```c
#include <stdio.h>
#include <stdlib.h>
#include <sys/random.h>

float aleatoire(float,float);

int main(){
    while(1){
        float r = aleatoire(5,15);
        printf("random : %f\n",r);
    }
    return 0;
}


/**
 * Generating a random value between from and to
 * @dependecies : stdlib.h, sys/random.h
 */
float aleatoire(float from, float to){
    // Generating a random buf of bytes
    int buf[255];
    getentropy(buf,sizeof(buf));
    
    // Generating a random seed with the sum of all random bytes.
    int seed = 0;
    for (int i = 0; i < sizeof(buf); i++)
    {
        seed+=buf[i];
    }
    // Give the seed to srand
    srand(seed);
    // Generating random value
    int valeur_random = rand();

    return (to-from)*((float)valeur_random/RAND_MAX)+from;
}
``` -->
