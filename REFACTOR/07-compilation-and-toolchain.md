# Principe de la compilation (préprocesseur / compilation / linkage)

Objectif: expliquer les étapes de compilation et outils (`gcc`, `ld`, `ar`, `make`).

Étapes
1. Préprocesseur: gère `#include`, `#define`, conditionnels — produit un fichier `.i`
2. Compilation: traduit le C en assembleur `.s`
3. Assemblage: assemble l'ASM en objet `.o`
4. Linkage: lie les objets `.o` et les librairies pour produire l'exécutable

Exemple: compilation manuelle
```bash
gcc -c main.c -o main.o   # compilation -> objet
gcc -c util.c -o util.o
gcc main.o util.o -o app  # link
```

Makefile minimal
```
CC=gcc
CFLAGS=-Wall -g

app: main.o util.o
	$(CC) $(CFLAGS) -o $@ $^

main.o: main.c
	$(CC) $(CFLAGS) -c main.c

util.o: util.c
	$(CC) $(CFLAGS) -c util.c
```

Bonnes pratiques
- `-Wall -Wextra` pour warnings
- `-g` pour debugger (gdb)
- séparer headers `.h` et `.c`

Exercice
- produire un Makefile pour une petite application composée de 3 fichiers sources.
