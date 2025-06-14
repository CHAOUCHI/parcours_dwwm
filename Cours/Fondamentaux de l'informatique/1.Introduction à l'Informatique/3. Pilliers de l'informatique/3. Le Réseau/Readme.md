
# Le Réseau - Pillier de l'informatique
Nous s'avons maintenant que ordinateur est composé de matériel informatique et que la puissance de ce matériel est rendu disponible par le système d'exploitation aux différent programmes qui vivent sur l'ordinateur.

Une question reste en suspend : *Comment est ce que deux programmes executés par deux ordinateurs distinct font pour communiquer ?*

C'est à cette question que nous allons répondre dans ce chapitre.

## Qu'est ce qu'un réseau informatique
Un réseau informatique est un ensemble d'ordinateurs et de matériaux de transmissions qui permettent le transfert de donnée entre ces ordinateurs.

**Les matériaux de transmissions communs :**
|||
|-|-|
|Le cable de cuivre **RJ45 (cable Ethernet)**|![alt text](../../images/image-19.png) *Cable Ethernet, permet la transmission filaire de donnée*|
|Le cable de **fibre optique**. Un cable composé de fibre de verre permettant une transmission de donnée plus rapide que le RJ45.|![alt text](../../images/image-22.png) *Cable de fibre optique*|
|**Le switch**. La "multiprise" du réseau, permettant de connecter plusieurs ordinateurs ensembles|![alt text](../../images/image-20.png) *Switch à 8 ports permettant de connecter jusqu'à 8 ordinateurs les uns aux autres*|
|**Le router**, qui **connecte un réseau local à un autre réseau**. Par exemple la box internet presente chez vous contient un router qui connecte votre réseau domestique à Internet|![alt text](../../images/image-21.png)*Livebox de chez Orange contenant, entre-autre, un router connecté à Internet*|

### Internet, qu’est-ce-que c’est ?
Internet, c’est l’ensemble des ordinateurs (hotes) et matériels de réseau connectés les uns aux autres à travers le monde grâce au fournisseurs d’accès internet (FAI). Les matériels de réseaux sont les routeurs comme votre box internet mais également les switchs, les NAT, les serveurs, les cables.

> En France les FAI les plus connu sont : Orange, SFR ou Free par exemple.

Internet est composés d’un nombres incalculable de plus petits réseau appelés LAN ou MAN.

### Les LAN
Les LAN ou Local Area Network sont des réseaux informatique de moins de 5km. 
Parmi les LAN les plus répandu on retrouve :
- Votre domicile, il est composé de tout les appareils connectés à votre box. Votre box internet est un routeur et c’est lui qui va relier votre LAN au reste d’internet.
- Le réseau d’un lycée, il est composé de tout les ordinateurs, imprimantes et serveurs présents dans l’établissement. Là encore un routeur sera présent pour relier tout ça avec le reste d’internet.

Comprenez bien que c’est le routeur qui relie les LAN et MAN à internet.


### Les MAN
Les MAN (Metropolitan Area Network) quant à eux vont plutôt recouvrir une ville ou un grand campus universitaire. Chacun de ces MAN et LAN sont reliés à des points de mutualisations(PM) mis en place par un FAI. Ce sont dans ces PM que les techniciens Orange ou SFR viennent connectés votre ligne lorsque vous souscrivez à un abonnement internet chez une FAI.

![alt text](../../images/image-23.png)
*Point de mutualisation d’un FAI présent dans la rue.*

#### Le voyage d’un message:
Imaginons qu’un ordinateur d’un LAN A souhaite envoyer un message vers le serveur d’un LAN B. Le chemin du message donne grossièrement ceci:
1. Un message est émis par un ordinateur du LAN A.
2. Le message arrive au point de mutualisation, le FAI (Orange par exemple) prend le relais.
3. Le FAI amène le message vers un LAN B.
4. Le LAN B amène le message vers le serveur demandé par l’ordinateur du LAN A.

![alt text](../../images/image-24.png)
*Transfert d’un message par internet*

>Le chemin exact parcouru par le message entre le PM du LAN A et le PM du LAN B est inconnu car personne ne peux décrire précisément toutes les branches d’internet **voilà pourquoi on appel cela le nuage d’internet ou « cloud ».**

Vous avez maintenant connaissance du chemin parcouru par un message sur internet, seulement voilà, il existe de multiple messages différents naviguant sur Internet : 
- des pages HTML, 
- des fichiers, des flux vidéos en temps réel,
- des commandes Linux

Alors, comment reconnaître un message d’un autre ? Comment définir la forme d’un message représentant un page web ou un transfert de fichier par exemple ?

La réponse est simple **les protocoles**.

### Les protocoles de communication informatique
Un protocole de communication est un norme définissant le format d’une donnée ainsi que la manière dont elle doit être construite et lue.

L'envoi d'une donnée passe souvent par l'enchainement de plusieurs protocoles. Le HTTP est contenu dans un paquet TCP qui est contenu dans un paquet IP qui est lui même contenu dans un paquet Ethernet.Chaque protocole à son rôle et contient les informations qui permettent l'acheminement correct des données.

Les protocoles peuvent être gérés par un logiciel : la navigateur web s'occupe du HTTP ou par le matériel éléctronique directement : la carte réseau s'occupe du protocole Ethernet, le router s'occupe de la distribution des IP avec le protocole DHCP.

#### Le protocole IP (Internet Protocol)
Le IP est un protocole qui défini l'hôte **destinaire** et l'hôte **source** d'envoi d'un paquet de donnée à transmettre. Les ordinateurs communiquants sont chacun représentés par un adresse codé sur 4 octets appelée adresse IP.

Une adresse IP local (LAN) commence toujours par 192.168 la suite dépend de la configuration faite par l'administrateur du réseau.

L'adresse actuelle de mon ordinateur dans le LAN est
```
192.168.224.98
```

Vous pouvez connaitre votre adresse IP avec les commandes :

*Linux*
```bash
ip addr
```
*Windows*
```PowerShell
ipconfig
```

Ces commandes affiche deux adresse IP:
- L'adresse du *PC dans le LAN* qui commence par `192.168`, ici `192.168.1.102`. C'est à cette adresse que les autre PC du réseau peuvent envoyer des requêtes.
- L'adresse de *loopback* `127.0.0.1` l'adresse local du PC qui permet de mettre en place des services TCP/IP locaux à la machine sans être connecté à un LAN. On s'en sert beaucoup en développement web comme adresse pour un serveur web local sur le port 80.
```

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
       
2: wlp0s20f3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    inet 192.168.1.102/24 brd 192.168.1.255 scope global dynamic
```

##### Ping
Ping est un programme qui utilise le protocole ICMP encapsulé dans une trame IP pour savoir si un hôte est accessible sur le réseau. 
*Cette commande permet de "pinger" un autre hôte à l'adresse 192.168.224.97*
```
ping 192.168.224.97
```
> **Attention !** Ping permet de pinger une adresse IP mais pas de spécifier le port TCP. En effet ping fait partie de la même couche réseau que IP, une couche inférieur à TCP dans le modèle OSI.

#### Le protocole TCP
Le protocole TCP est un des protocoles les plus utilisés sur Internet, il permet de créer une connection entre deux programmes situés sur des ordinateurs différents, ces programmes sont appellés sockets. Une fois la connection crée, les deux sockets sont capables de s’envoyer des messages.

Le TCP permet d'envoyer énormement de type de données et de nombreux protocole demande une connexion TCP pour envoyer des données, comme : le HTTP, le FTP ou le SSH par exemple.

La spécificité du  TCP est sa capcitié à garantir que les paquets de données soit  correctement acheminés du serveur au client. Pour chaque requête envoyer le TCP attend une réponse pour vérifier que le programme destinataire à bien reçu le paquet de donnée.

##### Service TCP
Les serveurs et clients TCP sont des programmes. Ils peuvents être codée dans des langage de programmation bas niveau comme le C par exemple. Ce programme sont appelés ***service*** ou ***deamon***.

Un service TCP est toujours relié à une adresse IP et un port.

Par exemple, par défaut, le serveur web *apache2* est relié à l'adresse IP du PC dans le LAN (192.168.x.x) et au port 80. Alors que celui de *vsftpd*(un serveur ftp) est également relié à l'adresse IP du PC dans le LAN mais cette fois ci sur le port 21.

Si chaque service est une "maison" voyez l'adresse IP comme le nom de la rue et le port comme le numéro de maison.

#### Le protocole UDP
L’UDP permet, tout comme le TCP, de créer une connection entre deux sockets à la différence que l’UDP n’a que faire de savoir si un paquet est bien arrivé; il envoie ce qu’on lui demande et ne s’en occupe plus après.

L’UDP est adapté pour des transferts des données telle que du flux vidéo en temps réel (« Twitch », « Zoom ») ou de l’audio («Whats app» par exemple ) car la perte d’une image dans une vidéo ou d’une millisecondes de son dans une piste audio n’est pas suffisament grave pour nécessiter l’utilisation plus lourde du TCP.

Le fonctionnement de l’UDP en fait un protocole très rapide.

#### Le protocole HTTP
Le protocole HTTP défini le format d’un message HTTP ainsi que la manière dont il doit être lu et construit. 

##### Client HTTP
Les navigateurs web sont des programmes qui vont construire des requêtes HTTP à partir des données écrite par l’utilisateur dans la barre de recherche. *On dit donc que le navigateur web implémente le protocole HTTP.*

##### Serveur HTTP
Le serveur possède un programme permettant de lire les requêtes HTTP provenant d’un navigateur, puis de renvoyer une réponse HTTP au navigateur. Ce programme est appelé un **"serveur web"** . *On dit donc que le serveur web implémente le protocole HTTP.*

Ces deux programmes connaissent les règles de protocole HTTP, par conséquent il peuvent communiquer ensemble.

Le protocole HTTP est plutôt connu du grand public et celui-ci est spécialisé dans l’envoi de page HTML, script CSS, script JS ou encore de donnée JSON ou XML.

Voici quelque exemples d’autre protocole de communication :
- IP ou Internet Protocol : comme vu précedement ce protocole défini l’envoi de donnée d’une source vers une destination au moyen d’adresse nommée adresse IP. Il est le protocole sur lequel pratiquement tout les autres protocoles reposes.
- FTP ou File Transfer Protocol : ce protocole défini l’échange de fichiers entre deux ordinateurs distants. Il est utilisé, par exemple, pour mettre en ligne sur un serveur un site web crée au préalable en local par un développeur.
- SSH ou Secure Shell : est un protocole qui permet d’envoyer des commandes à distances à un système d’exploitation Linux. En d’autre termes grâce à ce protocole plus besoin d’être en présence de l’ordinateur pour le contrôler. Ce protocole est obligatoire dans l’administration de serveur car ces dernier sont souvent éloignés des administrateurs et ne possèdes ni clavier, ni écran avec lesquelles interagir.

##### Structure d’une requête HTTP
![alt text](../../images/image-25.png)
> Voir la documentation RFC du protocole HTTP décrivant précisément le fonctionnement du protocole : https://datatracker.ietf.org/doc/html/rfc2616

#### Modèle OSI et Modèle TCP/IP

Chaque protocole à son rôle est le plu souvent il sont encapsulé dans un autre protocole pour un acheminé vers un autre hôte. Comment se répérer dans tout ces protocoles et savoir qui à besoin de quoi ?

Il existe deux modèles hiérachiques de représentation des protocoles :
- Le modèle OSI qui décrit tout les protocole informatique possible, leurs rôles et leurs places dans l'encapsulation.
- Le modèle TCP/IP qui est un modèle moins exostif se concentrant sur tout les protocoles basé sur le protocole TCP encapsulé dans IP.

![alt text](../../images/image-26.png)
*Le modèle OSI*

![alt text](../../images/image-27.png)
*Le modèle TCP/IP à droite*

Pour un developpeur il est plus important de connaitre le modèle TCP/IP que le modèle OSI car la plupart des applications développées aujourd'hui utilises les protocoles TCP et IP pour fonctionner.

Le modèle TCP/IP à l'avantage de rendre plus abordable la distinction des rôles de chaque protocoles.

