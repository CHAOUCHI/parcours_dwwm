# Gérer le temps en C
Le temps actuel est un repère temporel qui permet de connaitre l'heure qu'il est, determiner le temps écoulé entre deux évenements ou même obtenir une valeur variable.

Il existe plusieurs ménière d'exploiter le temps sous les système UNIX et à fortiori en C.

- l'heure UNIX : le nombre de secondes écoulé depuis le 1 janvier 1970 (l'époque UNIX). On utilise cette valeur pour obtenir une valeur changeante ou pour connaitre le temps écoulé entre deux évenements.
- l'heure calendaire : l'heure découpé en année, mois, jour, heure, minutes et secondes. C'est cette heure qui est utilisé pour afficher l'heure par exemple.

## L'heure UNIX
Pour récupérer le temps actuel en C il faut utiliser la fonction `time()` de la bibliotèque `time.h`.

La fonctione `time()` fournit le nombre de seconde écoulé depuis le 1 janvier 1970.
```c
#include <time.h>

int main(){
    int temps = time(NULL);
    printf("%d",temps);
    return 0;
}
```

> Cette valeur est souvent utilisé comme *seed* de génération d'un nombre aléatoire.
>```c
> srand(time(NULL));
> int valeur_random = rand();
>```