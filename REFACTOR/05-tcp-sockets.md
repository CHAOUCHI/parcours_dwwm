# TCP Sockets - concepts et exemples (débutant)

Objectif: expliquer les sockets TCP, modèle client/serveur, code minimal et mapping conceptuel vers les "streams" Java.

Concepts
- Socket = file descriptor réseau (comme un fichier)
- TCP = connexion orientée, fiable, flux d'octets (stream)
- Appels principaux: `socket()`, `bind()`, `listen()`, `accept()`, `connect()`, `send()`, `recv()`, `close()`

Serveur minimal (ébauche)
```c
// serveur.c (simplifié)
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>

int main() {
    int server = socket(AF_INET, SOCK_STREAM, 0);
    struct sockaddr_in addr = {.sin_family=AF_INET, .sin_port=htons(3000), .sin_addr.s_addr=INADDR_ANY};
    bind(server, (struct sockaddr*)&addr, sizeof addr);
    listen(server, 5);
    int client = accept(server, NULL, NULL);
    char buf[256];
    ssize_t n = recv(client, buf, sizeof buf, 0);
    if (n>0) write(1, buf, n);
    close(client); close(server);
}
```

Client minimal
```c
// client.c (simplifié)
int sock = socket(AF_INET, SOCK_STREAM, 0);
connect(sock, (struct sockaddr*)&addr, sizeof addr);
send(sock, "Hello", 5, 0);
close(sock);
```

Mapping vers Java Streams
- Un `Socket` Java expose `getInputStream()` et `getOutputStream()` — en C, `recv()`/`send()` lisent/écrivent des octets sur le socket; conceptuellement identique.

Bonnes pratiques
- vérifier toutes les valeurs de retour
- gérer les erreurs et timeouts
- fermer les sockets proprement
- utiliser `select()`/`poll()` ou `pthread` pour gérer plusieurs clients

Exercice
- Écrire un serveur echo multiclient basique (utiliser `fork()` ou `pthread_create()` pour chaque client).
