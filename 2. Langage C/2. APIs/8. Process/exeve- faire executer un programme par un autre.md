# execve - appel système pour executer un programme

exec est une famille de fonction qui permet de faire executer un programme par un autre programme.

- Le programme que l'on souhaite executer s'appelle le programme appelé.
- Le programme qui l'execute s'appelle le programme d'origine ou appelant.

## Qu'est ce que c'est executer un programme ?
S un programme veut executer un autre programme, le programme appelant subit un remplacement complet de sa mémoire par les données binaire du programme appelé. Le kernel relance ensuite le programme dans son etat nouveau ce qui permet d'executer le nouveau programme.

Après l'appel d'un `exec` toute les données du programme d'origine sont supprimé et remplacé par le programme appelé, toute les lignes qui suivent un exec ne seront donc JAMAIS executé.

## Exemple 1 - appeler clear

Ici j'utilise execlp pour appeler le programme `clear`.
```c

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

int main(){
	execlp("clear","clear",NULL);perror("execvp()");

	// code ignoré...
	printf("Une erreur est arrivée car je ne suis pas sensé voir ce printf\n");
    return 0;
}
```

## Exemple 2 - execvp - Utiliser un tableau pour des paramètre dynamique
Il est possible de fournir un tableau plutôt que d'écrire en dur les paramètres du programme.

```c

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

int main(){
	char* argv[] = {
		"ls", 		// 0
		"/home"
		NULL		// 1
	};
	// Executer ls /home
	execvp(argv[0],argv);perror("execvp()");

    return 0;
}
```

> Attention ! argv doit toujours centenir le nom du programme et finir par NULL. TOUJOURS.

## Exemple Complet execvp et execlp:
`a.out` veut executer `clear`. `a.out` devra disparaitre pour ça et sera remplacé dans la RAM par `clear`.

```c

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

/**
 * Fonctionnement des familles de fonction execve
 * Execve permet "d'executer" un programme, c'est à dire : remplacer le programme appelant (a.out) par un programme appelé (ls ou clear ou apt ou code)
 * On utilise plutôt les fonctions execvp ou execlp car le programme appelant est cherché dans le PATH.
 */
int main(){
	// ################ execvp ###################
	// Fonctionnement avec des tableaux
	// exec vector path : execute le program via un tableau de paramètre contenant les paramètres de la commande. 
	// Attention !!!
	// Y compris le nom du progamme. 
	//Il doit finir par NULL.
	char* argv[] = {
		"clear", 		// 0
		NULL		// 1
	};
	execvp(argv[0],argv);perror("execvp()");
	
	// ############### execlp ###################
	// exec list path : execute le programme via des paramètres multiples dont le dernier est NULL (une liste de paramètres)
	// Utilisez la quand vous voulez faire une commande précise
	// Par exemple : clear
	execlp("clear","clear",NULL);perror("execvp()");

    return 0;
}
```

## Préciser des paramètres 

