# Storage online CLI
Le projet *storage* est une application en ligne de commande (cli) qui permet d'uploader un fichier sur un serveur distant.

Le client cli et le serveur doivent être codé en C.

## Utilisation de l'application

### Uploader un fichier
```bash
./storage upload chat.png
```
Le fichier *chat.png* est uploadé sur le serveur.

### Lister les fichiers uploadés

```bash
./storage list
[Ajouté le 02/06/2024 : 12:30] 134Ko  chat.png
[Ajouté le 05/07/2023 : 08:45] 134Ko  autre_fichier.txt
```
J'ai 2 fichiers sur mon serveur.

### Télécharger un fichier
```bash
./storage download chat.png
```

## Pré-requis

- argc, argv : https://medium.com/@theodoretsori/command-line-arguments-in-c-a-beginners-guide-to-argc-and-argv-b5904693f0ea
- API Directory : https://medium.com/@noransaber685/exploring-directory-operations-opendir-readdir-and-closedir-system-calls-a8fb1b6e67bb
- SOCKET TCP
    - socket
    - bind
    - listen
    - connect
    - recv
    - send
- FileSystem
    - fgets
    - fprintf
    - fread
    - fwrite
    - fopen

## Cahier des charges

|Tache|Description|Contraintes|
|-|-|-|
|UPLOAD|Mettre en place la commande `storage upload *file_name*` pour uploader un fichier *file_name* sur le serveur.|Définir et implémenter les cas critiques : le fichier demandé n'existe pas, etc...|
|LIST| Mettre en place la commande `storage list` pour afficher |Définir et implémenter les cas critiques : le storage est vide|
|DOWNLOAD| Mettre en place la commande `storage download *file_name*` pour télécharger un fichier *file_name* sur le serveur|Définir et implémenter les cas critiques : le fichier demandé n'existe pas, etc...|

> Toute question vis à vis du projet doit être posée dans le canal *AIDE*.


## Annexe

Pour des fichiers volumineux l'api socket TCP divise la donnée en plusieurs `recv` pour un même `send`. Ce qui peut résulter en un fichier partiellement récupéré.

Il vous faudra multiplier les `recv` pour récupérer l'image complète. 

Dans un premier temps faite fonctionner l'appli pour des petits fichier, quand ça fonctionne vous pourrez faire une branche et réfléchir à une solution pour les gros fichiers. :)
