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

### Exercice 1 : Division entre `int` et résultat inattendu
Écrire un programme qui divise deux `int` et stocke le résultat dans un `float`. Observer le résultat inattendu.
```c
int main() {
    int a = 5, b = 2;
    float result = a / b;
    printf("Result: %f\n", result);
    return 0;
}
```

### Exercice 2 : Conversion explicite de `float` en `int`
Écrire un programme qui déclare une variable `float` avec une partie décimale, puis la convertit en `int`. Imprimer les deux variables et observer la différence.

```c
int main() {
    float a = 5.75;
    int b = (int) a;
    printf("Float a = %f\n", a);
    printf("Int b = %d\n", b);
    return 0;
}
```

### Exercice 3 : Conversion avec division
Écrire un programme qui divise deux `int` et stocke le résultat dans un `float` avec une conversion explicite.

```c
int main() {
    int a = 5, b = 2;
    float result = (float) a / b;
    printf("Result: %f\n", result);
    return 0;
}
```

### Exercice 4 : Conversion de `double` vers `int`
Écrire un programme qui convertit un `double` en `int` et observer la troncature.

```c
int main() {
    double pi = 3.14159;
    int pi_int = (int) pi;
    printf("Double: %f\n", pi);
    printf("Int: %d\n", pi_int);
    return 0;
}
```

### Exercice 5 : Perte de précision lors de la conversion
Déclarer une variable `double` et la convertir en `float`, puis afficher la différence.

```c
int main() {
    double bigNumber = 123456789.123456789;
    float smallerNumber = (float) bigNumber;
    printf("Double: %f\n", bigNumber);
    printf("Float: %f\n", smallerNumber);
    return 0;
}
```

### Exercice 6 : Promouvoir un `int` en `double` lors de l'addition
Écrire un programme qui ajoute un `int` et un `double`, et stocker le résultat dans un `double`.

```c
int main() {
    int a = 10;
    double b = 3.14;
    double result = a + b;
    printf("Result: %f\n", result);
    return 0;
}
```

### Exercice 7 : Comparaison entre types différents
Comparer un `float` avec un `double` et observer les résultats inattendus.

```c
int main() {
    float a = 0.1f;
    double b = 0.1;
    if (a == b) {
        printf("Equal\n");
    } else {
        printf("Not Equal\n");
    }
    return 0;
}
```

### Exercice 8 : Conversion de `float` en `int` avec arrondi
Écrire un programme qui convertit un `float` en `int` avec arrondi correct.

```c
int main() {
    float value = 3.75;
    int roundedValue = (int)(value + 0.5);
    printf("Rounded Value: %d\n", roundedValue);
    return 0;
}
```

### Exercice 9 : Conversion implicite lors du calcul
Multiplier un `int` par un `double` sans conversion explicite, et observer le résultat.

```c
int main() {
    int a = 5;
    double b = 2.5;
    double result = a * b;
    printf("Result: %f\n", result);
    return 0;
}
```

### Exercice 10 : Perte de données lors de la conversion
Écrire un programme qui affecte une valeur `double` très grande à une variable `int`.

```c
int main() {
    double largeNumber = 1e20;
    int smallNumber = (int) largeNumber;
    printf("Double: %f\n", largeNumber);
    printf("Int: %d\n", smallNumber);
    return 0;
}
```

Avec ces exercices, les étudiants pourront comprendre la différence entre les conversions implicites et explicites, ainsi que les erreurs fréquentes comme la perte de données ou les résultats inattendus lors des calculs avec différents types.