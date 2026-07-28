# Sérialisation / Désérialisation

Objectif: montrer comment sauvegarder et charger des données simples en texte et en binaire, sans entrer dans la complexité des formats industriels.

1) Sérialisation texte (CSV, lignes formatées)
- Simple à lire et déboguer
- Utilise `fprintf` / `fgets` / `sscanf` / `strtok`

Exemple (struct -> texte)
```c
#include <stdio.h>

struct player { char name[64]; int hp; };

void save_text(FILE *f, struct player *p) {
    fprintf(f, "%s;%d\n", p->name, p->hp);
}
```

Lecture:
```c
char line[256];
sscanf(line, "%63[^;];%d", name, &hp);
```

2) Sérialisation binaire (fwrite / fread)
- Compacte et rapide
- Idéal pour des structures simples et des fichiers de sauvegarde locaux

Exemple (struct -> binaire)
```c
FILE *f = fopen("player.bin","wb");
struct player p = {"Alice", 100};
fwrite(&p, sizeof p, 1, f);
```
Lecture:
```c
struct player p2;
fread(&p2, sizeof p2, 1, f);
```

Bonnes pratiques
- Préférer le texte pour les échanges simples et lisibles
- Documenter les champs et tailles
- Tester la lecture/écriture avec un petit jeu de données

Exercice
- Ecrire `save_player_text`, `load_player_text`, `save_player_bin`, `load_player_bin` et tester les deux formats.
