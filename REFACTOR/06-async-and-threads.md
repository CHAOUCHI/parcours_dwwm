# Asynchrone et multithreading

Objectif: présenter les threads (`pthread`), les opérations bloquantes, et les approches pour gérer plusieurs connexions (threads vs IO multiplexing).

Threads (pthread)
```c
#include <pthread.h>
#include <stdio.h>

void* worker(void *arg) {
    printf("worker running\n");
    return NULL;
}

int main() {
    pthread_t th;
    pthread_create(&th, NULL, worker, NULL);
    pthread_join(th, NULL);
    return 0;
}
```

IO multiplexing (`select`)
- `select()` permet d'attendre simultanément l'arrivée de données sur plusieurs file descriptors sans créer de threads.

Exercice
- Implémenter un serveur chat utilisant `select()` (sans threads) et expliquer les avantages/inconvénients comparés aux threads.
