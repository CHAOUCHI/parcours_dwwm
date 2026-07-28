# Typage et valeurs de retour — version progressive

Ce chapitre est essentiel, parce que tout le reste du langage C repose dessus.

Quand un étudiant commence, il se pose souvent cette question :
- "Pourquoi est-ce que je dois écrire `int` ou `char` ?"
- "Pourquoi une fonction doit-elle renvoyer quelque chose ?"
- "Est-ce que je peux mélanger des types sans problème ?"

Nous allons répondre à ces questions de façon concrète.

## 1) Le type, c'est la nature de la donnée

En C, chaque variable a un type.
Ce type dit au compilateur :
- quelle sorte de donnée je veux stocker,
- combien d'espace mémoire elle occupe,
- quelles opérations je peux faire avec elle.

Exemple :
```c
#include <stdio.h>

int main(void) {
    int age = 20;
    float taille = 1.78f;
    char initiale = 'M';

    printf("age = %d\n", age);
    printf("taille = %.2f\n", taille);
    printf("initiale = %c\n", initiale);

    return 0;
}
```

### Ce que l'on comprend ici
- `int` = nombre entier
- `float` = nombre à virgule
- `char` = un caractère

## 2) Un type, ce n'est pas seulement une écriture : c'est aussi de la place en mémoire

Voici une idée très importante à garder dès le début.

Quand vous écrivez :
```c
int age = 20;
```
vous ne créez pas seulement une "variable" dans votre tête. Vous demandez au programme de réserver un espace précis en mémoire.

Sur beaucoup de machines modernes, un `int` occupe 4 octets en mémoire.
Un octet, c'est une petite quantité de stockage. Donc, concrètement :
- un `char` : 1 octet
- un `int` : 4 octets
- un `float` : 4 octets
- un `double` : 8 octets

### Schéma mental simple
```c
int age = 20;
char lettre = 'z';
float taille = 1.75; // la taille d'un humain en mètres
double pi = 3.14159265358979323846;
```
```text
RAM disponible pour le programme
+---------------------+
|  [age]    4 octets  |  
|  [lettre] 1 octet   |  
|  [taille] 4 octets  |
|  [pi]     8 octets  |
+---------------------+
```

Chaque variable déclarée prend donc une place réelle dans la mémoire du programme.

Si vous écrivez :
```c
int a = 1;
int b = 2;
int c = 3;
```
vous avez réservé 12 octets au total pour ces trois variables.

Ce n’est pas une abstraction théorique. C’est une réalité matérielle.

### Pourquoi c'est important
Quand un étudiant voit `int`, il doit pouvoir imaginer :
- "j'ai un espace en mémoire qui est réservé",
- "j'utilise de la RAM",
- "plus j'ai de variables, plus j'occupe de place".

Cette philosophie est la bonne façon de comprendre le C.
Le langage n'est pas seulement une syntaxe : il manipule des données concrètes dans la mémoire de l'ordinateur.

## 3) Le type influence les opérations

Si vous mélangez des types sans réfléchir, vous pouvez obtenir des résultats surprenants.

```c
#include <stdio.h>

int main(void) {
    int a = 5;
    int b = 2;

    float result = a / b; // attention : ici, la division est entière
    printf("result = %f\n", result);

    return 0;
}
```

Pourquoi ce code est trompeur ?
Parce que `5 / 2` en C, avec deux `int`, donne `2` avant même la conversion en `float`.

La version correcte est :
```c
#include <stdio.h>

int main(void) {
    int a = 5;
    int b = 2;

    float result = (float)a / b;
    printf("result = %.2f\n", result);

    return 0;
}
```

### À retenir
- Les types n'ont pas seulement un aspect "syntaxique".
- Ils changent le comportement de l'expression.

## 4) Le type d'une variable est visible dans le code

Par exemple, cette ligne :
```c
int note = 15;
```
veut dire : "j'ai une variable entière appelée `note`".

Si maintenant vous écrivez :
```c
char note = 'A';
```
vous n'avez plus une note numérique, mais un caractère.

C'est pourquoi le type est un principe fondamental du langage C.

Une bonne manière de penser le code, c'est de se dire :
- "je déclare une variable, donc je réserve un espace",
- "si je change le type, je change la taille et la signification de cet espace".

## 5) Les fonctions ont aussi un type de retour

Une fonction ne fait pas seulement quelque chose : elle peut aussi retourner une valeur.

```c
#include <stdio.h>

int somme(int a, int b) {
    return a + b;
}

int main(void) {
    int r = somme(3, 4);
    printf("somme = %d\n", r);
    return 0;
}
```

### Ce qu'il faut retenir
- `int` avant `somme(...)` = type de retour
- `return a + b;` = valeur renvoyée à l'appelant
- `int r = somme(3, 4);` = on récupère cette valeur dans une variable

## 6) Pourquoi `return` est si important ?

Un étudiant pose souvent cette question :
- "Pourquoi ne pas simplement afficher le résultat dans la fonction ?"

Réponse simple :
- parce que la fonction doit être réutilisable,
- parce que le code devient plus clair,
- parce que le résultat peut être utilisé ailleurs.

Exemple :
```c
#include <stdio.h>

int carre(int x) {
    return x * x;
}

int main(void) {
    int a = carre(4);
    int b = carre(6);
    printf("%d %d\n", a, b);
    return 0;
}
```

## 7) Les fonctions peuvent aussi retourner d'autres types

```c
#include <stdio.h>

float moyenne(float a, float b) {
    return (a + b) / 2.0f;
}

int main(void) {
    float m = moyenne(10.0f, 20.0f);
    printf("moyenne = %.2f\n", m);
    return 0;
}
```

Ici, le type de retour est `float`.

## 8) Le type d'une fonction et le type de la variable qui reçoit son résultat doivent correspondre

```c
int result = somme(3, 4);
```
C'est correct, parce que `somme` retourne un `int`.

Mais cela serait problématique :
```c
char result = somme(3, 4);
```
Car on demande à une variable de type `char` de recevoir un résultat qui n'est pas adapté au type attendu.

## 9) Mini exercice guidé

Écrivez une fonction `int max(int a, int b)` qui retourne le plus grand des deux nombres.

Puis dans `main` :
- demandez deux entiers à l'utilisateur,
- affichez le plus grand.

### Variante plus simple
Écrivez une fonction `int carre(int x)` qui retourne le carré de `x`.

## 10) Les 3 idées à retenir absolument

- Un type dit la nature d'une donnée.
- Une fonction a un type de retour.
- Le `return` permet de transmettre un résultat à l'endroit qui l'appelle.

> En programmation, comprendre le typage, c'est comprendre la façon dont le programme "parle" à lui-même.
