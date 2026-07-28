# Gestion de la mémoire — version narrative et progressive

But du chapitre
- Faire comprendre simplement où vivent les données
- Anticiper les questions des étudiants et y répondre au moment utile
- Proposer des mini-exercices et des vérifications concrètes

Comment je le lirais en cours
1. Montrer un petit exemple concret (2 minutes)
2. Poser les questions que vous allez naturellement vous poser
3. Expliquer la règle (pile vs tas)
4. Faire une manipulation simple, observer, debugger
5. Donnez un exercice guidé

---

## Petite mise en situation (2 lignes)
"Vous avez écrit une fonction qui crée une carte pour votre jeu, et le jeu se casse au bout de quelques minutes — pourquoi ?"

Nous allons suivre ce fil : écrire, comprendre pourquoi ça casse, corriger.

## 1) Exemple très court — observez et dites ce que vous voyez

```c
#include <stdio.h>

int main(void) {
    int x = 42;
    int *p = &x;
    printf("x=%d, &x=%p, p=%p, *p=%d\n", x, (void*)&x, (void*)p, *p);
    return 0;
}
```

Question à l'oral : que se passe-t-il si je lance ce programme plusieurs fois ?
- Réponse attendue : les adresses changent parfois — on explique brièvement ASLR.

Point clé : `x` est une variable locale, elle vit dans la **pile** (stack).

## 2) Pourquoi la pile n'est pas suffisante ? (question pratique)

Scénario : vous voulez créer un tableau dont la taille dépend du joueur (ex : nombre d'ennemis). Si vous écrivez :

```c
void build(void) {
    int local_array[1000]; // gros tableau sur la pile
    // ...
}
```

- Problème : la pile peut être limitée ; des tableaux trop grands provoquent un crash.

Solution : utiliser le **tas** (heap) via `malloc`.

## 3) Allons-y pas à pas : `malloc`, `free` (avec questions anticipées)

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int n = 5; // imaginez que l'utilisateur choisit n
    int *arr = malloc(sizeof *arr * n); // pourquoi sizeof *arr ? explication en classe
    if (!arr) { perror("malloc"); return 1; }
    for (int i = 0; i < n; ++i) arr[i] = i;
    for (int i = 0; i < n; ++i) printf("%d ", arr[i]);
    puts("");
    free(arr);
    return 0;
}
```

Questions que j'anticipe et réponses courtes :
- "Pourquoi `sizeof *arr` et pas `sizeof(int)` ?" → moins d'erreur si le type change.
- "Pourquoi vérifier `if (!arr)` ?" → `malloc` peut échouer, toujours vérifier.
- "Que se passe-t-il si j'oublie `free` ?" → fuite mémoire (s'accumule si l'opération est répétée).

## 4) Erreurs courantes (expliquer, montrer et corriger)

1) Use-after-free
```c
int *p = malloc(sizeof *p);
*p = 5;
free(p);
// printf("%d\n", *p); // comportement indéfini
```
Correction : ne pas accéder après `free` ; si besoin, `p = NULL;` après `free`.

2) Ne pas vérifier le retour de `malloc`
```c
int *p = malloc(1000000000);
*p = 3; // crash possible si p == NULL
```
Correction : vérifier `if (!p) { /* gérer l'erreur */ }`.

3) Débordement de pile
```c
void f(void) { char buf[1000000]; /* peut planter */ }
```
Correction : utiliser le tas pour de larges buffers.

## 5) Exemple utile : renvoyer une chaîne depuis une fonction

Mauvaise idée (pile) :
```c
char *bad_dup(const char *s) {
    char buf[256];
    strcpy(buf, s);
    return buf; // buf disparait à la sortie -> bug
}
```
Bonne solution (tas) :
```c
char *dup(const char *s) {
    size_t n = strlen(s) + 1;
    char *r = malloc(n);
    if (!r) return NULL;
    memcpy(r, s, n);
    return r;
}
```
En classe : on montre `gcc -Wall` puis `valgrind` pour vérifier l'absence de fuite.

## 6) Exercice guidé (TP rapide, 20-30 min)

A faire en binôme :
1) Implémentez `int *creer_tableau(int n)` qui alloue et initialise.
2) Dans `main`, appelez-la, affichez les valeurs, libérez la mémoire.
3) Lancez sous `valgrind --leak-check=full ./app` et corrigez si fuite.

Variante (challenge) : écrivez `void liberer_tableau(int **p)` qui fait `free(*p)` et met `*p = NULL`.

## 7) Outils et bonnes pratiques rapides

- Toujours compiler avec `-Wall -Wextra -g` pendant l'apprentissage.
- `valgrind --leak-check=full ./app` pour trouver fuites et erreurs mémoire.
- Après `free(ptr)`, pensez à `ptr = NULL` si la variable est réutilisée.

---

Souhaites-tu que je :
- remplace l'ancien fichier par cette version narrative, ou
- laisse les deux et je mets à jour les références dans le README ?
