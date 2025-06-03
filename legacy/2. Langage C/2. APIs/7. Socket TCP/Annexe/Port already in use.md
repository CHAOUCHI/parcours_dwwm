```c
#include <stdio.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <netdb.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <string.h>


#define SOCKET_PORT 3000

int main(){

    /**
    * socket
    * Je crée le socket client
    */
    int socket_fd = socket(AF_INET,SOCK_STREAM,0);perror("socket");
    // Si la création échoue je ferme mon programme
    if(socket_fd == -1) return EXIT_FAILURE;

    // Si le port est déjà pris le serveur va retenter de se connecter.
    // A activer par défaut d'après Christophe Bless
    int value = 1;
    setsockopt(sock,SOL_SOCKET,SO_REUSEADDR,&value,sizeof(value));

    /**
     * bind
     * Je relie le socket à un port et une ip avec la fonction bind()
     */
    struct sockaddr_in socket_addr = {
        .sin_addr.s_addr = INADDR_ANY, // Adresse localhost et LAN
        .sin_family = AF_INET,
        .sin_port = htons(SOCKET_PORT)
    };
    int error = bind(socket_fd,(struct sockaddr*)&socket_addr,sizeof socket_addr);perror("bind");
    if(error == -1) { close(socket_fd); return EXIT_FAILURE; }


    //...

    return EXIT_SUCCESS;
}
``` 