# Les fonctions
Les fonctions sont des *bout* de code réutilisable qui effectue des instructions et renvoi une valeur en fonction de paramètre que l'on lui donne.

Par exemple la fonction suivante fait la somme de deux paramètres `int` et renvoi un `int`, la somme.

```c
#include <stdio.h>

int somme(int a, int b){
  int resultat = a+b;
  return resultat;
}

int main(){
  int c = somme(4,9);
  printf("%d\n",c);
  return 0;
}
```

> **Que se passe t'il si j'enleve return de la fonction somme**
> Certain compilateur peuvent accepter le faite d'oublier le return dans une fonction.
> Il passera parfois la dernière variable crée.
> L'exemple du haut fonctionne donc aussi sans la ligne 
>```c
>return resultat;
>```
> Attention cependant ce n'est pas du tout un comportement normal et **il ne faut jamais oublier le return d'une fonction**.

## Déclaration d'une fonction
**Attention !** pour qu'une fonction soit connu dans la fonction main il faut la déclarer avant la fonction `main()`

Le code suivant est correct :
```c
#include <stdio.h>

// Je déclare et j'implémente la fonction somme()
int somme(int a, int b){
  int resultat = a+b;
  return resultat; // je renvoi 13
}

int main(){
  int c = somme(4,9); // J'appel la fonction somme
  printf("%d\n",c); // 13
  return 0;
}
```
Le code suivant va générer un *warning* à la compilation :
```c
#include <stdio.h>

int main(){
  int c = somme(4,9); // Je ne connais pas cette fonction ...
  printf("%d\n",c);
  return 0;
}


int somme(int a, int b){
  int resultat = a+b;
  return resultat;
}
```

Pour éviter d'avoir à mettre ses fonctions au début du fichier `main.c` on peut **déclarer** la fonction avant de l'**implémenter** (de la remplir avec du code) en bas de `main()`.
```c
#include <stdio.h>

// Je déclare d'abord la fonction !
int somme(int a, int b);

int main(){
  int c = somme(4,9); // Je connais cette fonction !
  printf("%d\n",c);
  return 0;
}

// J'implémente la fonction
int somme(int a, int b){
  int resultat = a+b;
  return resultat;
}
```

## Renvoyez une string.

Si vous avez crée une chaines de caratère dans une fonction et que vous souhaitez la renvoyer vous allez rencontrer un problème.

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>


char* dupliquer(char* str);

int main()
{
  char* copy = dupliquer("Massi");
  printf("%s",copy);
  return 0;
} 

char* dupliquer(char* str){
  char buf[255];
  
  int  i = 0;
  while (str[i]!=0)
  {
    buf[i] = str[i];
    i++;
  }
  return buf;
}
```

```
(null)
```

Le `printf()` de la fonction `main()` n'as pas afficher `"Massi"` mais `(null)`.

Le soucis c'est que la buf à été déclarer dans une fonction et toutes variables déclarer dans une fonction est détruite à la fin de la fonction.

La string contenu dans `buf` à été détruite à la fin de la fonction dupliquer, juste avec l'appel de `printf()` la string retourné est donc `null`.

### Déclarer un bloc mémoire dans la RAM
Les variables locales d'une fonction se détruisent à la fin de son appel.

Il est cependent possible de déclarer des variables dites `globale` c'est à dire des variables sotcké dans la RAM et donc accéssible depuit l'extérieur de la fonction.

La fonction malloc() alloue des octets.

Si je veux remplacer le `buf[255]`.
```c
char buf[255];
```

```c
char* buf = malloc(255); // J'alloue 255 octets (255 char) de mémoire
for(int i = 0; i < 255;i++){
  buf[i] = 0; // J'initialise son contenu à 0
}
```

La version corrigée de ma fonction `dupliquer()` est donc :

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>


char* dupliquer(char* str);

int main()
{
  printf("%s",dupliquer("Massi"));
  return 0;
} 

char* dupliquer(char* str){
  char* buf = malloc(10);
  for (int i = 0; i < 10; i++)
  {
    buf[i] = 0;
  }
  
  int  i = 0;
  while (str[i]!=0)
  {
    buf[i] = str[i];
    i++;
  }
  return buf;
}
```

1. Faite fonctionner la fonction `dupliquer()`.


<!-- ```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* decaler_str(char* str);
int main()
{
  printf("%s",decaler_str("Massi"));
  return 0;
} 

char* decaler_str(char* str){
  char* m = malloc(10);
  for (int i = 0; i < 10; i++)
  {
    m[i] = 0;
  }
  for (int i = 0; i < strlen(str); i++)
  {
    m[i] = str[i]+1;
  }
  
  
  return m;
}
``` -->

**Souvenez-vous !**
- Une fonction renvoie une valeur avec `return`
- La valeur retournée possède un type : `int, float, double, long int, ...`
- Les fonctions doivent être décalerées avec `main()` puis implémentées après `main()`

## Exercices

### 1. **Fonction qui additionne deux entiers**
Écrire une fonction `addition(int a, int b)` qui prend deux entiers en entrée et renvoie leur somme. Testez la fonction dans le programme principal en affichant le résultat.

### 2. **Fonction qui calcule la factorielle**
Écrire une fonction `factorielle(int n)` qui prend un entier et renvoie sa factorielle. Par exemple, `factorielle(5)` renverra 120 (car 5! = 5 * 4 * 3 * 2 * 1).

### 3. **Fonction pour vérifier si un nombre est pair ou impair**
Écrire une fonction `estPair(int n)` qui retourne 1 si le nombre est pair et 0 sinon. Testez cette fonction pour différents nombres dans votre programme.

### 4. **Fonction qui trouve le maximum entre deux nombres**
Écrire une fonction `max(int a, int b)` qui renvoie le plus grand des deux nombres.

### 5. **Fonction qui calcule la somme des éléments d’un tableau**
Écrire une fonction `sommeTableau(int tab[], int taille)` qui prend un tableau d'entiers et sa taille en entrée et renvoie la somme de ses éléments.

### 6. **Fonction qui inverse une chaîne de caractères**
- Pré-requis : String
Écrire une fonction `inverser(char str[])` qui prend une chaîne de caractères en entrée et retourne cette chaîne inversée. Par exemple, pour la chaîne "abc", le programme devrait retourner "cba".

### 7. **Fonction qui calcule la puissance d’un nombre**
Écrire une fonction `puissance(int base, int exposant)` qui prend deux entiers et renvoie la base élevée à la puissance de l'exposant (sans utiliser la fonction `pow` de la bibliothèque mathématique).

### 8. **Fonction qui calcule la moyenne de trois nombres**
Écrire une fonction `moyenne(float a, float b, float c)` qui prend trois nombres à virgule flottante et renvoie leur moyenne.

