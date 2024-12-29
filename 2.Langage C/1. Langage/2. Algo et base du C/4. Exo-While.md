
# Exo boucle while

La boucle while permet d'effectuer un if en boucle, tant que la condition est vraie.

```c
while(condition est vraie){
    // fait ça 
    //...
}
```

```c
if(1){
    printf("vraie");
}
```

```c
while(1){
    printf("vraie à l'infini ...");
}
```

1. Faite une boucle while qui affiche "Coucou" à l'infini.

A l'aide d'une variable on peut tenir compte du nombres de tourde la boucle.

```c
int i =0;
while(1){
    printf("%d",i);
}
```

L'instruction `break` permet d'arréter les conditions : `if` `while` `for` ou `switch`.

```c
int i = 0;
while(1){
    printf("Je commence...");
    if(i == 5){
        printf("STOP !!");
        break;
    }
    printf("Je continue...");
}
```

2. A l'aide d'un `if` et d'un `while` affichez "Coucou !" 18 fois.

3. Afficher uniquement les nombres pair grâce à l'opéarateur `%`.
https://www.geeksforgeeks.org/modulo-operator-in-c-cpp-with-examples/

4. Afficher uniquement les nombres impaires

5. Afficher la somme des nombres de 1 à 67

6. Afficher le produit des nombres de -10 à 50.
6. Afficher le quotient des nombres de -10 à 50.

7. Afficher la table de 13

9. Afficher les nombres de 1 à 100, mais remplacer les multiples de 3 par "Fizz" et les multiples de 5 par "Buzz".

