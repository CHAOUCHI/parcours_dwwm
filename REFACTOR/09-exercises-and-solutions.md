# Exercices et corrigés sélectionnés

Contient solutions commentées pour les exercices clés présentés dans les chapitres précédents.

Exemple: `duplicate` (copie d'une chaîne)
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* duplicate(const char* s) {
    size_t n = strlen(s) + 1;
    char* r = malloc(n);
    if (!r) return NULL;
    memcpy(r, s, n);
    return r;
}

int main(void) {
    char *s = duplicate("hello");
    printf("%s\n", s);
    free(s);
}
```

Autres corrigés: `max`, `save/load player`, `makefile example`, `client/server echo` (extraits).
