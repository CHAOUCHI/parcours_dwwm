# Appels système et interaction avec le noyau

Objectif: expliquer la différence entre les fonctions haut niveau (`fopen`, `fread`) et les appels système (`open`, `read`, `write`, `close`) ainsi que la gestion d'erreur (`errno`, `perror`).

Exemples
```c
#include <fcntl.h>
#include <unistd.h>
#include <stdio.h>
#include <errno.h>

int main(void) {
    int fd = open("/tmp/test.txt", O_RDONLY);
    if (fd == -1) { perror("open"); return 1; }
    char buf[128];
    ssize_t n = read(fd, buf, sizeof buf);
    if (n == -1) { perror("read"); close(fd); return 1; }
    write(1, buf, n); // écrire sur stdout
    close(fd);
    return 0;
}
```

Points clés
- `open/read/write/close` travaillent avec file descriptors (entiers)
- `fopen/fread/fwrite` sont des wrappers stdio (FILE*) qui utilisent buffering
- `errno` contient la raison de l'échec; `perror` affiche un message lisible

Exercice
- Remplacez un code utilisant `fopen/fgets` par `open/read` et comparez les comportements.
