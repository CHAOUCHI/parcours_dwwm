# Le langage C

Le langage C est un langage de programmation compilé crée dans les années 1970. Il est largement utilisé pour le développement des systèmes d'exploitation, d'application bas niveau(proche du matériels) et lorsque des performances extreme sont nécessaires (simuteur de vol, ...).

# Hello World

Pour créer un programme C il faut **AU MINMUM** : 
- un fichier ayant pour extension *.c*
- un fonction nommée main déclaré et qui renvoi un entier (*int*)

Créez un fichier main.c et ouvrez le dans VSCode.

```bash
mkdir projets # Je crée un dossier
cd projects   # Je me déplace dedant
touch main.c  # Je crée un fichier nommé main.c
code main.c   # J'ouvre main.c avec VSCode
```

> Si vous n'avez pas VSCode d'installé :
> 1. rendez-vous sur le site de VSCode et téléchargé la version *.deb*
> 2. Installer vscode avec apt 
> ```bash
> sudo apt install ./Téléchargements/code_1.93.0-1725459079_amd64.deb
> ```
> Effectivement je peux installer les programmes *.deb* avec apt


Dans le fichier tapez le code source minimum de la fonction *main*, la fonctione d'entrée de notre programme.
```c
int main() {

    return 0;
}
```

Comme toute fonction la fonction est faite de 4 choses :
- Un nom : *main*
- Des parentèses : *()*
- un type de valeur de retour et d'une valeur de retour : *int* et *return 0;*
- des accolades ouvrante *{*  et fermante *}*

Compilez le programme pour en faire un excutable grace à *gcc* :

```bash
sudo apt install gcc # Installez le compilateur gcc
gcc main.c -o main   # Compilez le fichier main.c sous le nom main
./main  # J'execute main depuis le répertoire actuel
```

VOus venez de créer un programme vide. QUi ne fait rien donc. Ajoutant une instruction la fonction printf() qui fait partie de la bibliotèque stdio(Standard Input and Output)

```c
#include <stdio.h>

int main() {
    printf("Hello World");
    return 0;
}
```

```bash
gcc main.c -o main && ./main
Hello World
```
# Les instructions 
Une instruction est une ligne de code se finissent par un point virgule qui effectue des opérations.

Par exemple j'ai ici 6 instrcutions :
- Cinq *printf()* qui effectue un affichage à l'ecran
- un *return* qui indique la valeur de retour de la fonction *main* (valeur utilisée par l'OS)
```c
#include <stdio.h>

int main() {
    printf("Hello World");
    printf("Bonjour tout le monde\n");
    printf("Hola\n");
    printf("Hello World");
    printf("Hello World");
    return 0;
}
```
***Attention toutes les instuctions se font entre les accolades de la fonction main().***
Si vous placez un instructions en dehors elle sera au mieux ignoré au pire empéchera votre de compiler.
***Une instructions fini toujours par un point virgule***

```c
#include <stdio.h>

int main() {
    printf("Hello World");
    return 0;
}

// ????
printf("Je n'ai rien à faire là !!!");
```

***Les instructions possibles sont :***
```c
int age;            // La déclaration d'une variable
age = 24;           // L'affectation d'une valeur
printf("%d",age);   // L'appel d'une fonction
return -1;          // Le retour d'une fonction
```

***Ce qui n'est pas une instruction*** et n'a donc pas de point virgule :
```c
// Une condition
if(age == 24){

} // PAS de point virgule à la fin d'accolades !

// Les directives de preprocesseurs qui indiques des choses au compilateur.
// Ici le compilateur inclus la bibliotèque string.h qui permet de manipuler des textes(string)
// C'est une action de la compilation pas de l'éxecution, ce n'est donc pas une instruction.
#include <string.h>  
```

# Les variables
Une variable est un espace mémoire alloué par l'OS car on le demande de déclarer une varibale.

## La déclaration
Déclaration d'une variable point_de_vie.
```c
int point_de_vie;
```
Syntaxe de la déclaration d'une variable
```c
type nom_variable;
```

La taille de l'espace mémoire alloué par le système dépend du type de donnée fournit. Par exemple un nombre entier int prend 2 octets peu importe sa valeur.


|Type|Ensemble de définition|Syntaxe en C|Taille en mémoire|
|-|-|-|-|
|integer|Les nombres entier|*int age;*|4 octets|
|float|Les nombres à virgule|*float taille;*|4 octets|
|character|Les caractères|*char lettre;*|1 octet|
|chaine de caractère|Les chaines de caractère (string ou texte)|*char\* mot;*|1 octet * le nombre de caractère (4 octets pour la chaine *hello* par exemple)|

## Affectation
On peut affecter à une variable une valeur qui fait parti de son ensemble de défintion(type).

```c
int age; // Declaration
age = 25; // Affectation
```

Je peut aussi faire deux instructions en une sur une seule ligne l'affectation et la déclaration :
```c
int age = 24;
```

Je peux affecter une valeur brut ou bien la valeur de retour d'une fonction

```c
#include <stdio.h>
#include <math.h>

int main(){
    int nombre = 25;
    int puissance = pow(nombre,3); // nombre puissance 3
    printf("%d puissance 3 = %d",nombre,puissance); // J'affiche 15625
    return 0;
}
```

Ou bien carrément affecter le résultat d'un calcul
```c
#include <stdio.h>
#define PI   3.141592 // Je défini une constante

int main(){
    int rayon = 25;
    float circo = PI*rayon*2;
    printf("Le cercle de rayon %d fait %f de circonférence. \n",rayon,circo);
    return 0;
}
```

# Les entrées / sorties
Les fonctions pour lire l'entrée clavier et afficher sur le terminal sont dans *stdio.h*.

## printf() - Afficher du texte

Pour afficher une variable dans un texte on peut utiliser printf() et ses caratère de formatage : `%d`(entier), `%f` (virgule), `c` (char), `s` (string),`%p` (adresse ou pointeur).
```c
int pv = 100;
float endurance = 118.19;
char lettre = 'M';
char* mot_ou_texte = "Massinissa";
printf("%d %f %c %s %p",pv,endurance,lettre,mot_ou_texte,&pv);
```

La valeur de chaque variable est remplacée dans le temps par le %X correspondant.

Il faut voir `printf()` comme un texte à trou.

Je lui fournit en premier paramètre une chaine de caratère contenant la phrase à écrire ainsi que l'endroit où placer des variables.

```c
char* prenom = "Massi"; 
int age = 24;
printf("Je m'appelle %s j'ai %d ans \n",prenom,age);
```

## scanf() - Récupérer une entrée
`scanf()` permet de récupérer une entrée que l'utilisateur tape dans la commande.
```c
int age;
scanf("%d",&age);
printf("J'ai %d ans",age);
```
> ***N'oubliez pas le `&` de `scanf()` !*** Le & de scanf est obligatoire pour toute valeur : int, float, char.
> `&` fournit l'adresse de l'espace mémoire de la variable et donne donc la possibilité a `scanf()` de modifier la variable.


# Les opérateurs

Les opérateurs en C sont des symboles utilisés pour effectuer des opérations sur des variables et des valeurs. Ils sont essentiels pour manipuler et contrôler les données dans un programme. Voici une vue d'ensemble des différents types d'opérateurs en C, avec des exemples pratiques.

## 1. Opérateurs Arithmétiques

Les opérateurs arithmétiques sont utilisés pour effectuer des opérations mathématiques de base.

- **Addition (`+`)**
  - Exemple : `a + b`
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5, b = 3;
        int somme = a + b;
        printf("La somme de %d et %d est %d\n", a, b, somme);
        return 0;
    }
    ```

- **Soustraction (`-`)**
  - Exemple : `a - b`
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5, b = 3;
        int difference = a - b;
        printf("La différence entre %d et %d est %d\n", a, b, difference);
        return 0;
    }
    ```

- **Multiplication (`*`)**
  - Exemple : `a * b`
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5, b = 3;
        int produit = a * b;
        printf("Le produit de %d et %d est %d\n", a, b, produit);
        return 0;
    }
    ```

- **Division (`/`)**
  - Exemple : `a / b`
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5, b = 2;
        int quotient = a / b;
        printf("Le quotient de %d et %d est %d\n", a, b, quotient);
        return 0;
    }
    ```

- **Modulo (`%`)**
  - Exemple : `a % b`
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5, b = 2;
        int reste = a % b;
        printf("Le reste de la division de %d par %d est %d\n", a, b, reste);
        return 0;
    }
    ```

### La conversion de type
La conversion de type en langage C, aussi appelée *casting*, permet de changer le type d'une valeur. Il existe deux types principaux de conversion : la conversion implicite (ou automatique) et la conversion explicite (ou forcée).

#### 1. **Conversion Implicite (Automatique)**

Le compilateur C effectue automatiquement certaines conversions lorsqu'il le juge nécessaire. Cela se produit généralement lors de l'exécution d'expressions où les types de données diffèrent.

##### Exemple de conversion implicite :
```c
int a = 10;
float b = 5.5;
float result = a + b;  // 'a' est implicitement converti en 'float'
```
Dans cet exemple, l'entier `a` est automatiquement converti en `float` avant d'effectuer l'addition avec `b`, car ***l'opération entre types différents nécessite que les deux soient du même type.***

#### 2. **Conversion Explicite (Casting)**

La conversion explicite est effectuée par le programmeur et indique clairement au compilateur de changer le type d'une variable. Cela est utile, par exemple, pour éviter une perte de données ou pour obtenir un résultat spécifique.

##### Syntaxe du *casting* explicite :
```c
(type) expression
```

##### Exemple de conversion explicite :
```c
int a = 10;
int b = 3;
float result = (float) a / b;  // 'a' est converti en 'float' avant la division
```
Ici, nous avons converti `a` en `float` pour forcer une division à virgule flottante au lieu d'une division entière. Sans cette conversion, le résultat serait un entier (`3`), mais avec le *casting*, nous obtenons `3.33333`.

#### 3. **Importance des conversions**

Les conversions explicites sont importantes pour éviter des erreurs de type ou des comportements indésirables dans les calculs, en particulier lorsque vous travaillez avec des types de données différents. Une conversion incorrecte peut entraîner des pertes de données, par exemple lorsqu'un type de plus grande capacité (comme un `double`) est converti en un type de capacité inférieure (comme un `int`).

##### Exemple de perte de données :
```c
double pi = 3.14159;
int pi_as_int = (int) pi;  // La partie décimale est perdue, résultat : 3
```

Dans cet exemple, la conversion d'un `double` en `int` entraîne la perte des décimales.

#### 4. **Promotion de type dans les expressions**

En C, lors de l'évaluation d'expressions complexes, le compilateur effectue souvent une "promotion de type". Cela signifie que les types de données moins précis (comme les `int`) sont convertis en types plus précis (comme les `float` ou `double`) pour garantir la précision des calculs.

##### Exemple de promotion :
```c
int a = 5;
double b = 4.5;
double result = a + b;  // 'a' est promu en 'double' avant l'addition
```

### Exercice :
Trouvez l'erreur dans le programme suivant et corrigez-le en utilisant le *casting* approprié :

```c
int a = 5;
int b = 2;
float result = a / b;
```

Solution :
```c
int a = 5;
int b = 2;
float result = (float) a / b;  // 'a' est converti en float pour éviter la division entière
```

Dans cet exercice, sans *casting*, la division entre deux entiers produirait un entier (`2`), mais avec la conversion explicite, nous obtenons le résultat attendu : `2.5`.

## 2. Opérateurs de Comparaison

Les opérateurs de comparaison sont utilisés pour comparer deux valeurs.

- **Égal à (`==`)**
  - Exemple : `a == b`
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5, b = 3;
        if (a == b) {
            printf("%d est égal à %d\n", a, b);
        } else {
            printf("%d n'est pas égal à %d\n", a, b);
        }
        return 0;
    }
    ```

- **Différent de (`!=`)**
  - Exemple : `a != b`
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5, b = 3;
        if (a != b) {
            printf("%d est différent de %d\n", a, b);
        } else {
            printf("%d est égal à %d\n", a, b);
        }
        return 0;
    }
    ```

- **Supérieur à (`>`)**
  - Exemple : `a > b`
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5, b = 3;
        if (a > b) {
            printf("%d est supérieur à %d\n", a, b);
        }
        return 0;
    }
    ```

- **Inférieur à (`<`)**
  - Exemple : `a < b`
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5, b = 3;
        if (a < b) {
            printf("%d est inférieur à %d\n", a, b);
        }
        return 0;
    }
    ```

- **Supérieur ou égal à (`>=`)**
  - Exemple : `a >= b`
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5, b = 3;
        if (a >= b) {
            printf("%d est supérieur ou égal à %d\n", a, b);
        }
        return 0;
    }
    ```

- **Inférieur ou égal à (`<=`)**
  - Exemple : `a <= b`
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5, b = 3;
        if (a <= b) {
            printf("%d est inférieur ou égal à %d\n", a, b);
        }
        return 0;
    }
    ```

## 3. Opérateurs Logiques

Les opérateurs logiques sont utilisés pour combiner ou inverser des conditions.

- **ET logique (`&&`)**
  - Exemple : `a > 0 && b > 0`
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5, b = -3;
        if (a > 0 && b > 0) {
            printf("Les deux nombres sont positifs\n");
        } else {
            printf("Au moins un des nombres n'est pas positif\n");
        }
        return 0;
    }
    ```

- **OU logique (`||`)**
  - Exemple : `a > 0 || b > 0`
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5, b = -3;
        if (a > 0 || b > 0) {
            printf("Au moins un des nombres est positif\n");
        } else {
            printf("Aucun des nombres n'est positif\n");
        }
        return 0;
    }
    ```

- **NON logique (`!`)**
  - Exemple : `!a`
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5;
        if (!(a == 5)) {
            printf("a est différent de 5\n");
        }
        return 0;
    }
    ```
    Le NON permet d'inverser la logique.

## 4. Opérateurs d'Incrémentation et de Décroissement

Les opérateurs d'incrémentation et de décroissement permettent d'augmenter ou de diminuer la valeur d'une variable.

- **Incrémentation (`++`)**
  - Exemple : `a++` ou `++a`
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5;
        printf("Avant incrémentation : %d\n", a);
        a++;
        printf("Après incrémentation : %d\n", a);
        return 0;
    }
    ```

- **Décroissement (`--`)**
  - Exemple : `a--` ou `--a`
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5;
        printf("Avant décroissement : %d\n", a);
        a--;
        printf("Après décroissement : %d\n", a);
        return 0;
    }
    ```

## 5. Opérateurs d'affectation

Les opérateurs d'affectation sont utilisés pour assigner des valeurs à des variables.

- **Affectation Simple (`=`)**
  - Exemple : `a = b`
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a;
        int b = 10;
        a = b;
        printf("a vaut %d\n", a);
        return 0;
    }
    ```

- **Affectation avec Addition (`+=`)**
  - Exemple : `a += b` (équivalent à `a = a + b`)
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5;
        int b = 3;
        a += b;
        printf("a vaut %d\n", a);
        return 0;
    }
    ```

- **Affectation avec Soustraction (`-=`)**
  - Exemple : `a -= b` (équivalent à `a = a - b`)
  - **Code :**
    ```c
    #include <stdio.h>

    int main() {
        int a = 5;
        int b = 3;
        a -= b;
        printf("a vaut %d\n", a);
        return 0;
    }
    ```

# Structure de Contrôle en C

Le langage C propose plusieurs structures de contrôle qui permettent de gérer le flux d'exécution d'un programme. Ces structures incluent les instructions conditionnelles et les boucles. Dans ce cours, nous allons explorer ces structures avec des exemples pratiques et des exercices pour tester votre compréhension.

## 1. Les Instructions Conditionnelles

Les instructions conditionnelles permettent d'exécuter certaines parties du code en fonction des conditions spécifiées.

### 1.1. `if`

L'instruction `if` est utilisée pour exécuter un bloc de code si une condition est vraie.

**Syntaxe :**

```c
if (condition) {
    // Code à exécuter si la condition est vraie
}
```

**Exemple :**

```c
#include <stdio.h>

int main() {
    int x = 10;

    if (x > 5) {
        printf("x est plus grand que 5\n");
    }

    return 0;
}
```

**Exercice 1 :** Modifiez le programme ci-dessus pour que le message affiché soit "x est inférieur ou égal à 5" lorsque `x` est inférieur ou égal à 5.

### 1.2. `if-else`

L'instruction `if-else` permet d'exécuter un bloc de code si la condition est vraie, et un autre bloc si elle est fausse.

**Syntaxe :**

```c
if (condition) {
    // Code à exécuter si la condition est vraie
} else {
    // Code à exécuter si la condition est fausse
}
```

**Exemple :**

```c
#include <stdio.h>

int main() {
    int x = 3;

    if (x % 2 == 0) {
        printf("x est un nombre pair\n");
    } else {
        printf("x est un nombre impair\n");
    }

    return 0;
}
```

**Exercice 2 :** Écrivez un programme qui affiche "Le nombre est positif", "Le nombre est négatif", ou "Le nombre est zéro" en fonction de la valeur d'une variable `x`.

### 1.3. `if-else if-else`

L'instruction `if-else if-else` permet de tester plusieurs conditions en séquence.

**Syntaxe :**

```c
if (condition1) {
    // Code à exécuter si condition1 est vraie
} else if (condition2) {
    // Code à exécuter si condition1 est fausse et condition2 est vraie
} else {
    // Code à exécuter si toutes les conditions précédentes sont fausses
}
```

**Exemple :**

```c
#include <stdio.h>

int main() {
    int x = 20;

    if (x < 10) {
        printf("x est inférieur à 10\n");
    } else if (x >= 10 && x <= 20) {
        printf("x est entre 10 et 20\n");
    } else {
        printf("x est supérieur à 20\n");
    }

    return 0;
}
```

**Exercice 3 :** Écrivez un programme qui vérifie la note d'un étudiant et affiche "Excellent", "Très bien", "Bien", "Assez bien", ou "Insuffisant" selon la note.

## 2. Les Boucles

Les boucles permettent de répéter un bloc de code plusieurs fois.

### 2.1. `for`

La boucle `for` est utilisée lorsque le nombre d'itérations est connu à l'avance.

**Syntaxe :**

```c
for (initialisation; condition; mise_à_jour) {
    // Code à exécuter à chaque itération
}
```

**Exemple :**

```c
#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        printf("i vaut %d\n", i);
    }

    return 0;
}
```

**Exercice 4 :** Écrivez un programme qui affiche les nombres de 1 à 10 en utilisant une boucle `for`.

### 2.2. `while`

La boucle `while` est utilisée lorsque le nombre d'itérations n'est pas connu à l'avance et dépend d'une condition.

**Syntaxe :**

```c
while (condition) {
    // Code à exécuter tant que la condition est vraie
}
```

**Exemple :**

```c
#include <stdio.h>

int main() {
    int i = 0;

    while (i < 5) {
        printf("i vaut %d\n", i);
        i++;
    }

    return 0;
}
```

**Exercice 5 :** Écrivez un programme qui calcule la somme des nombres de 1 à 100 en utilisant une boucle `while`.

### 2.3. `do-while`

La boucle `do-while` est similaire à la boucle `while`, mais le code est exécuté au moins une fois, même si la condition est fausse dès le départ.

**Syntaxe :**

```c
do {
    // Code à exécuter
} while (condition);
```

**Exemple :**

```c
#include <stdio.h>

int main() {
    int i = 0;

    do {
        printf("i vaut %d\n", i);
        i++;
    } while (i < 5);

    return 0;
}
```

**Exercice 6 :** Écrivez un programme qui demande à l'utilisateur de saisir un nombre positif et continue de le demander tant que le nombre saisi est négatif.

# Les tableaux et les pointeurs

En C, les tableaux et les pointeurs sont des concepts fondamentaux qui permettent une gestion flexible et efficace de la mémoire. Comprendre leur utilisation et leur relation est essentiel pour programmer en C.
## 1. Les Tableaux

### 1.1. Définition et Déclaration

Un tableau est une structure de données qui permet de stocker plusieurs éléments du même type sous un seul nom. Les éléments d'un tableau sont stockés de manière contiguë en mémoire.

**Syntaxe :**

```c
type nom_du_tableau[taille];
```

**Exemple :**

```c
int nombres[5];  // Déclare un tableau de 5 entiers
```

### 1.2. Initialisation

Vous pouvez initialiser un tableau lors de sa déclaration.

**Syntaxe :**

```c
type nom_du_tableau[taille] = {valeur1, valeur2, ..., valeurN};
```

**Exemple :**

```c
int nombres[5] = {1, 2, 3, 4, 5};  // Déclare et initialise un tableau de 5 entiers
```

### 1.3. Accès aux Éléments

Les éléments d'un tableau sont accessibles via leur indice, qui commence à 0.

**Syntaxe :**

```c
nom_du_tableau[indice]
```

**Exemple :**

```c
#include <stdio.h>

int main() {
    int nombres[5] = {1, 2, 3, 4, 5};
    printf("Le premier élément est %d\n", nombres[0]);
    printf("Le troisième élément est %d\n", nombres[2]);
    return 0;
}
```

### 1.4. Parcours d'un Tableau

Vous pouvez parcourir les éléments d'un tableau en utilisant une boucle `for`.

**Exemple :**

```c
#include <stdio.h>

int main() {
    int nombres[5] = {1, 2, 3, 4, 5};
    
    for (int i = 0; i < 5; i++) {
        printf("nombres[%d] = %d\n", i, nombres[i]);
    }
    
    return 0;
}
```

## Les Chaines de caractère
Les chaine de caractère (`char*` ou *string*) sont des tableaux de `char`. Les caractères d'une *string* sont stockés les uns à la suite des autres.

On accède au `char` d'une string via l'opérateur d'indexation `[]`.

```c
char* prenom = "abc";
printf("%c\n",prenom[0]); // a
printf("%c\n",prenom[1]); // b
printf("%c\n",prenom[2]); // c
```

On peut connaitre le nombres de caractère d'une chaine de caractère avec la fonction `strlen()`.

### `0` le charactère de fin de *string*.
Une chaine de caractère fin toujours par le caractère `0` de la table *ASCII*.



## 2. Les Pointeurs

### 2.1. Définition

Un pointeur est une variable qui contient l'adresse mémoire d'une autre variable. Les pointeurs permettent une manipulation directe de la mémoire et sont utilisés pour passer des arguments par référence, gérer des tableaux dynamiques, etc.

Chaque variable possède un nom, un type, une valeur et une adresse.

```c
int age = 200;
printf("Valeur : %d",age);
printf("Adresse : %d",&age);
```

**Syntaxe :**
Le type d'un pointeur possède le type de la variable pointé accompagné d'une étoile.
```c
type *nom_du_pointeur;
```

**Exemple :**

```c
int* pointeur;
```

### 2.2. Initialisation et Attribution

Vous pouvez initialiser un pointeur en lui attribuant l'adresse d'une variable.

**Syntaxe :**

```c
pointeur = &variable;
```

**Exemple :**

```c
#include <stdio.h>

int main() {
    int nombre = 10;
    int *pointeur = &nombre;
    
    printf("Adresse de nombre : %p\n", pointeur);
    printf("Valeur de nombre via le pointeur : %d\n", nombre);
    printf("Valeur de nombre via le pointeur : %d\n", *pointeur);
    
    return 0;
}
```

### 2.3. Déférencement

Le déférencement d'un pointeur vous permet d'accéder à la valeur stockée à l'adresse mémoire pointée par le pointeur.

**Syntaxe :**

```c
*nom_du_pointeur
```

**Exemple :**

```c
#include <stdio.h>

int main() {
    int nombre = 10;
    int *pNombre = &nombre;
    
    printf("Valeur de nombre : %d\n", nombre);
    printf("Valeur de nombre via le pointeur : %d\n", *pNombre);
    
    *pointeur = 20;  // Modifie la valeur de nombre via le pointeur
    printf("Nouvelle valeur de nombre : %d\n", nombre);
    
    return 0;
}
```

### 2.4. Pointeurs et Tableaux

Les tableaux et les pointeurs sont étroitement liés en C. En effet, le nom d'un tableau est en réalité un pointeur vers le premier élément du tableau.

**Exemple :**

```c
#include <stdio.h>

int main() {
    int nombres[5] = {1, 2, 3, 4, 5};
    
    for (int i = 0; i < 5; i++) {
        printf("Adresse de nombres[%d] = %p\n", i, nombres + i);
    }
    
    return 0;
}
```
Les éléments d'un tableau sont placez les uns à la suite des autres en mémoire, donc leurs adresse ce suivent.

1. Cherchez l'adresse mémoire de chaqu'un des éléments du tableau `nombres`.
2. Les adresses se suivent en sautant de 4 en 4. Pourquoi ?

<!-- 
## 3. Allocation Dynamique de Mémoire

### 3.1. `malloc` et `free`

En C, vous pouvez utiliser les fonctions `malloc` et `free` pour allouer et libérer de la mémoire dynamiquement.

**Syntaxe :**

```c
void *malloc(size_t taille);
void free(void *ptr);
```

**Exemple :**

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *tableau;
    int taille = 5;
    
    tableau = (int *)malloc(taille * sizeof(int));  // Allocation dynamique de mémoire
    
    if (tableau == NULL) {
        printf("Échec de l'allocation de mémoire\n");
        return 1;
    }
    
    for (int i = 0; i < taille; i++) {
        tableau[i] = i + 1;
    }
    
    for (int i = 0; i < taille; i++) {
        printf("tableau[%d] = %d\n", i, tableau[i]);
    }
    
    free(tableau);  // Libération de la mémoire
    return 0;
}
``` -->

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

## Déclaration d'une fonction
**Attention !** pour qu'une fonction soit coonu dans la fonction main il faut la déclarer avant la fonction `main()`

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

Pour éviter d'avoir à mettre ses fonctions au début du fichier `main.c` on peut déclarer la fonction avant de l'implémenter(la remplir avec du code) en bas du main.
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

## Les bibliothèques

Les bibliothèques en C offrent des fonctions et des outils supplémentaires pour diverses tâches.

### String

La bibliothèque `<string.h>` fournit des fonctions pour manipuler les chaînes de caractères :
- **Copie** : `strcpy`
- **Concaténation** : `strcat`
- **Comparaison** : `strcmp`
- **Longueur** : `strlen`

Exemple d'utilisation :

```c
#include <string.h>
#include <stdio.h>

int main() {
    char str1[50] = "Hello, ";
    char str2[] = "World!";
    strcat(str1, str2); // Concatène str2 à str1
    printf("%s\n", str1); // Affiche "Hello, World!"
    return 0;
}
```


### Math

La bibliothèque `<math.h>` fournit des fonctions mathématiques :
- **Puissances** : `pow`
- **Racines carrées** : `sqrt`
- **Fonctions trigonométriques** : `sin`, `cos`, `tan`

Exemple d'utilisation :

```c
#include <math.h>
#include <stdio.h>

int main() {
    double result = sqrt(16.0); // Racine carrée de 16
    printf("Square root of 16 is %f\n", result);
    return 0;
}
```

### Time

La bibliothèque `<time.h>` est utilisée pour la gestion du temps :
- **Obtenir l'heure actuelle** : `time`, `localtime`
- **Mesurer le temps écoulé** : `difftime`

Exemple d'utilisation :

```c
#include <time.h>
#include <stdio.h>

int main() {
    time_t t;
    time(&t); // Obtient le temps actuel
    printf("Current time: %s", ctime(&t)); // Affiche le temps actuel
    return 0;
}
```

## Le FileSystem Linux

En C, vous pouvez interagir avec le système de fichiers à l'aide de la bibliothèque `<stdio.h>` et des fonctions spécifiques :

- **Ouverture de fichiers** : `fopen()`
- **Lecture/Écriture** : `fread()`, `fwrite()`, `fprintf()`, `fscanf()`
- **Fermeture** : `fclose()`

1. La première étape de la lecture d'un fichier est de créer une variable de type `FILE*` avec la fonction `fopen()`.
2. Je n'oublie pas de précisier les droits d'accès au fichier : `"w"` pour l'écriture, `"r"` pour la lecture.


Exemple d'utilisation :

```c
#include <stdio.h>

int main() {
    FILE* file = fopen("mon_fichier", "w"); // Ouvre un fichier en écriture
    if (file != NULL) { // Je test si le pointeur d'adresse est nulle
        int age = 24;
        // J'écrit dans le fichier avec fprintf()
        fprintf(file, "Salut tout le monde j'ai %d ans",age);
        fclose(file); // Ferme le fichier
    }
    return 0;
}
```
<!--
## Connexion inter-process

Les connexions inter-processus permettent à différents processus de communiquer.

### Socket UNIX

Les sockets UNIX permettent la communication entre processus sur la même machine :
- **Création** : `socket`
- **Bind** : `bind`
- **Listen** : `listen`
- **Accept** : `accept`
- **Connect** : `connect`
- **Send/Receive** : `send`, `recv`

Exemple simplifié d'une connexion socket UNIX :

```c
#include <sys/socket.h>
#include <sys/un.h>
#include <unistd.h>
#include <stdio.h>

int main() {
    int sock = socket(AF_UNIX, SOCK_STREAM, 0); // Crée un socket UNIX
    if (sock == -1) {
        perror("socket");
        return 1;
    }

    struct sockaddr_un addr;
    addr.sun_family = AF_UNIX;
    strcpy(addr.sun_path, "/tmp/socket_example");
    bind(sock, (struct sockaddr*)&addr, sizeof(addr)); // Associe l'adresse au socket

    listen(sock, 5); // Écoute les connexions entrantes

    close(sock);
    return 0;
}
```

### Socket TCP

Les sockets TCP permettent la communication réseau :
- **Création** : `socket`
- **Bind** : `bind`
- **Listen** : `listen`
- **Accept** : `accept`
- **Connect** : `connect`
- **Send/Receive** : `send`, `recv`

Exemple simplifié d'une connexion socket TCP :

```c
#include <sys/socket.h>
#include <netinet/in.h>
#include <unistd.h>
#include <stdio.h>

int main() {
    int sock = socket(AF_INET, SOCK_STREAM, 0); // Crée un socket TCP
    if (sock == -1) {
        perror("socket");
        return 1;
    }

    struct sockaddr_in addr;
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = INADDR_ANY;
    addr.sin_port = htons(8080);
    bind(sock, (struct sockaddr*)&addr, sizeof(addr)); // Associe l'adresse au socket

    listen(sock, 5); // Écoute les connexions entrantes

    close(sock);
    return 0;
}
```

## Process

Les processus en C sont gérés à l'aide des appels système :
- **Création** : `fork`
- **Exécution** : `exec`
- **Attente** : `wait`
- **Gestion** : `kill`

Exemple de création de processus :

```c
#include <unistd.h>
#include <stdio.h>

int main() {
    pid_t pid = fork(); // Crée un nouveau processus
    if (pid == 0) {
        // Code du processus enfant
        printf("This is the child process.\n");
    } else {
        // Code du processus parent
        printf("This is the parent process.\n");
    }
    return 0;
}
```

## Multithrading

Le multithreading en C est géré avec la bibliothèque pthreads (POSIX threads) :
- **Création** : `pthread_create`
- **Synchronisation** : `pthread_mutex_lock`, `pthread_mutex_unlock`
- **Attente** : `pthread_join`

Exemple de création de threads :

```c
#include <pthread.h>
#include <stdio.h>

void* thread_function(void* arg) {
    printf("Hello from the thread!\n");
    return NULL;
}

int main() {
    pthread_t thread;
    pthread_create(&thread, NULL, thread_function, NULL); // Crée un thread
    pthread_join(thread, NULL); // Attend la fin du thread
    return 0;
}
```

Ce cours fournit une vue d'ensemble des aspects essentiels du langage C. Pour une maîtrise complète, il est recommandé d'explorer chaque sujet en profondeur et de pratiquer régulièrement. -->
