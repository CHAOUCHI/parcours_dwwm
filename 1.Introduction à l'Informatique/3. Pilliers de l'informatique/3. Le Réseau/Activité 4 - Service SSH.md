# Service SSH

## Qu'est-ce qu'un serveur SSH ?

Un **serveur SSH** est un programme qui permet à des utilisateurs de se connecter à une machine distante de manière sécurisée via le protocole SSH (Secure Shell). SSH chiffre la communication entre les deux machines, offrant ainsi une couche de sécurité pour l'administration à distance.

- SSH permet d'effectuer des tâches telles que l'exécution de commandes ou le transfert de fichiers sur une machine distante.

## Qu'est-ce qu'un client SSH ?

Le **client SSH** est l'application utilisée pour établir une connexion avec un serveur SSH. Il envoie une requête de connexion au serveur en fournissant des identifiants de connexion (login, mot de passe ou clé SSH), puis utilise le protocole SSH pour sécuriser cette connexion.

- Les clients SSH courants incluent des outils comme `ssh` (en ligne de commande), ou des applications comme **PuTTY** ou **OpenSSH**.

## Comment fonctionne SSH ? (TCP/IP et Port 22)

Le protocole **SSH** utilise le modèle réseau **TCP/IP** pour établir des connexions sécurisées. Par défaut, SSH fonctionne sur le **port 22**.

- **TCP/IP** : SSH fonctionne sur la couche de transport de TCP (Transmission Control Protocol), assurant ainsi une communication fiable et ordonnée entre client et serveur.
- **Port 22** : Ce port est ouvert par défaut pour SSH sur le serveur, mais il peut être modifié pour améliorer la sécurité.

## Installer SSH Serveur

Sur un système basé sur **Debian/Ubuntu**, le serveur SSH est généralement fourni par le package **OpenSSH**.

### Étapes d'installation :
1. Ouvrez un terminal sur le serveur (ou la machine locale que vous voulez rendre accessible via SSH).
2. Exécutez la commande suivante pour installer le serveur SSH :
   ```bash
   sudo apt update
   sudo apt install openssh-server
   ```
3. Vérifiez que le serveur SSH fonctionne :
   ```bash
   sudo systemctl status ssh
   ```
   Si le service SSH fonctionne correctement, il sera indiqué comme "actif".

## Installer SSH Client

Sur la plupart des distributions Linux, le client SSH est pré-installé. Si ce n'est pas le cas, vous pouvez l'installer facilement.

### Étapes d'installation :
1. Exécutez la commande suivante pour installer le client SSH :
   ```bash
   sudo apt update
   sudo apt install openssh-client
   ```
2. Vous pouvez maintenant utiliser la commande `ssh` pour vous connecter à d'autres machines.

## Accéder à une machine Linux à distance

### Création d'un utilisateur Linux

Avant de se connecter à une machine distante via SSH, il est recommandé de créer un utilisateur dédié.

1. Connectez-vous en tant qu'utilisateur avec des privilèges administratifs (root ou utilisateur avec `sudo`).
2. Créez un nouvel utilisateur :
   ```bash
   sudo adduser nom_utilisateur
   ```
   Suivez les instructions pour définir un mot de passe et d'autres détails.

<!-- ### Se connecter avec ses identifiants Linux via SSH

1. Depuis la machine cliente, lancez une connexion SSH en utilisant le login de l'utilisateur créé :
   ```bash
   ssh nom_utilisateur@adresse_ip_du_serveur
   ```
2. Vous serez invité à entrer le mot de passe de l'utilisateur Linux pour établir la connexion.

## Mettre en place une connexion via clé SSH

### Principe des clés publiques et privées

- **Clé privée** : Elle reste sur votre machine (client) et doit être gardée secrète.
- **Clé publique** : Elle est copiée sur le serveur SSH et utilisée pour authentifier la clé privée.
- Lorsque vous tentez de vous connecter au serveur, le serveur utilise la clé publique pour valider la clé privée du client, sans avoir besoin de mot de passe.

### Avantage en termes de sécurité par rapport à l'accès via login

- **Sécurité renforcée** : Les clés SSH sont beaucoup plus difficiles à craquer que les mots de passe.
- **Éviter les attaques par force brute** : Un serveur qui utilise des clés SSH est moins vulnérable aux attaques visant à deviner un mot de passe.

### Mettre en place la connexion par clé SSH

#### Étapes sur la machine cliente (génération des clés) :
1. Sur votre machine cliente, générez une paire de clés SSH :
   ```bash
   ssh-keygen -t rsa -b 4096
   ```
   Cela générera une clé publique et une clé privée. Laissez les valeurs par défaut si vous n'avez pas de préférence.

2. Copiez la clé publique sur le serveur distant :
   ```bash
   ssh-copy-id nom_utilisateur@adresse_ip_du_serveur
   ```
   Vous devrez entrer le mot de passe de l'utilisateur une dernière fois.

#### Étapes sur le serveur :
1. Vérifiez que la clé publique a bien été ajoutée au fichier `~/.ssh/authorized_keys` de l'utilisateur.

2. Désormais, vous pouvez vous connecter au serveur sans mot de passe :
   ```bash
   ssh nom_utilisateur@adresse_ip_du_serveur
   ``` -->

## Activité - Service SSH

Créez une machine virtuelle Debian accessible à distance.

### Accès via login :
1. Installez le serveur SSH sur la machine Debian (cf. section "Installer SSH Serveur").
2. Créez un nouvel utilisateur (cf. section "Création d'un utilisateur Linux").
3. Depuis une machine cliente, connectez-vous via SSH avec les identifiants de cet utilisateur.

<!-- ### Accès via clé SSH :
1. Sur la machine cliente, générez une paire de clés SSH (cf. section "Mettre en place une connexion par clé SSH").
2. Copiez la clé publique sur la machine virtuelle Debian.
3. Testez la connexion via clé SSH. -->
