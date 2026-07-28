# Chapitre prioritaire : Gestion de la mémoire en C

Objectif pédagogique
- Faire comprendre aux débutants ce qu’est la mémoire en C.
- Montrer la différence entre mémoire locale et mémoire dynamique.
- Introduire les notions de pointeurs, allocation, libération et erreurs fréquentes.

## 1. Pourquoi la mémoire est importante en C ?

En C, le programmeur est responsable de la mémoire.
Contrairement à des langages plus haut niveau, le C ne nettoie pas tout automatiquement.

Cela veut dire que vous devez savoir :
- où une variable est stockée,
- combien de mémoire elle occupe,
- quand il faut la libérer,
- et quels sont les risques si vous n’êtes pas prudent.

## 2. La mémoire en deux grands espaces

### a) La pile (stack)
La pile contient les variables locales créées dans une fonction.

Exemple :
```c
#include <stdio.h>

void f(void) {
    int a = 10;
    printf("a = %d\n", a);
}

int main(void) {
    f();
    return 0;
}
```

Dans cet exemple, `a` existe uniquement pendant l’exécution de `f()`.

### b) Le tas (heap)
Le tas est utilisé lorsque vous demandez explicitement de la mémoire au système.

On utilise souvent :
- `malloc()`
- `calloc()`
- `realloc()`
- `free()`

## 3. Les pointeurs, première idée simple

Un pointeur est une variable qui contient l’adresse d’une autre variable.

```c
#include <stdio.h>

int main(void) {
    int age = 25;
    int *p = &age;

    printf("valeur de age = %d\n", age);
    printf("adresse de age = %p\n", (void*)&age);
    printf("valeur du pointeur = %p\n", (void*)p);
    printf("valeur pointée = %d\n", *p);

    return 0;
}
```

### À retenir
- `&age` = l’adresse de `age`
- `p` = pointeur vers `age`
- `*p` = valeur stockée à cette adresse

## 4. Allocation dynamique avec malloc

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *tab = malloc(sizeof(int) * 5);

    if (tab == NULL) {
        printf("Échec de l'allocation\n");
        return 1;
    }

    for (int i = 0; i < 5; i++) {
        tab[i] = i * 10;
    }

    for (int i = 0; i < 5; i++) {
        printf("tab[%d] = %d\n", i, tab[i]);
    }

    free(tab);
    return 0;
}
```

### Ce que ce code montre
- `malloc()` demande de la mémoire au système.
- `sizeof(int) * 5` demande de l’espace pour 5 entiers.
- `free()` libère la mémoire quand on a fini.

## 5. Les erreurs les plus fréquentes

### a) Oublier `free()`
Cela crée une fuite mémoire.

```c
void f(void) {
    int *p = malloc(sizeof(int));
    *p = 42;
    // oublie de free(p)
}
```

### b) Utiliser une mémoire déjà libérée
C’est un bug très courant.

```c
int *p = malloc(sizeof(int));
free(p);
printf("%d\n", *p); // problème
```

### c) Utiliser un pointeur nul
```c
int *p = malloc(sizeof(int));
if (p == NULL) {
    return 1;
}
```

## 6. Exemple plus concret : copier une chaîne

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *dupliquer(const char *s) {
    size_t taille = strlen(s) + 1;
    char *copie = malloc(taille);

    if (copie == NULL) {
        return NULL;
    }

    memcpy(copie, s, taille);
    return copie;
}

int main(void) {
    char *mot = dupliquer("Bonjour");
    if (mot == NULL) {
        return 1;
    }

    printf("%s\n", mot);
    free(mot);
    return 0;
}
```

## 7. Mini schéma mental

- Variable locale : mémoire sur la pile
- Allocation dynamique : mémoire sur le tas
- Pointeur : adresse vers une zone mémoire
- `free()` : rendre la mémoire au système

## 8. Exercice conseillé

Écrire une fonction `int *creer_tableau(int n)` qui :
- alloue un tableau d’entiers de taille `n`,
- remplit chaque case avec sa valeur index,
- et retourne le pointeur.

Puis dans `main()` :
- appeler la fonction,
- afficher les valeurs,
- puis libérer la mémoire.

## 9. Petite phrase à retenir

> En C, la mémoire est une ressource. Si vous l’allouez, vous devez aussi savoir la libérer.
