### **Service FTP vsftpd**

#### **1. Qu'est-ce qu'un serveur FTP ?**
FTP (File Transfer Protocol) est un protocole standard pour transférer des fichiers entre un client et un serveur sur un réseau. Un **serveur FTP** est un logiciel qui permet de stocker, recevoir et envoyer des fichiers, en fonction des permissions configurées. Le serveur FTP écoute les connexions entrantes des clients sur le port 21 par défaut et traite les commandes de transfert de fichiers.

#### **2. Qu'est-ce qu'un client FTP ?**
Un **client FTP** est un logiciel ou une interface utilisée pour se connecter à un serveur FTP afin de télécharger ou télécharger des fichiers. Exemples de clients FTP : FileZilla, WinSCP, ou les commandes FTP disponibles en ligne de commande sur Linux.

#### **3. Comment fonctionne un serveur FTP ?**
- Le serveur FTP utilise un modèle client-serveur basé sur le protocole TCP/IP.
- Les utilisateurs Linux et les permissions d'accès déterminent qui peut accéder aux fichiers.
- Le port par défaut utilisé par FTP est le **port 21**.
- Les fichiers sont transférés au serveur grâce à un client ftp comme FileZilla

### **Installation de vsftpd**

1. **Mise à jour du système**
    ```bash
    sudo apt update && sudo apt upgrade
    ```
2. **Installation de vsftpd**
    ```bash
    sudo apt install vsftpd
    ```
3. **Vérification du statut de vsftpd**
    ```bash
    sudo systemctl status vsftpd
    ```

### **Ajouter un utilisateur Linux spécifique pour le service**

- Créez un nouvel utilisateur Linux pour les accès FTP :
    ```bash
    sudo adduser ftpuser
    ```
- Définissez un mot de passe pour cet utilisateur :
    ```bash
    sudo passwd ftpuser
    ```

### Autoriser l'écriture sur le serveur FTP
Par défaut vsftp est très restrictif, il n'autorise pas l'écriture sur le serveur ftp.

Il faut donc activer l'écriture dans le fichier `/etc/vsftpd.conf`.

*Vous trouvez cette procédure dans la documention de ubuntu :*
https://doc.ubuntu-fr.org/vsftpd#configuration_de_base

### **Envoyer des fichiers avec FileZilla Client**

1. Télécharger et installer **FileZilla Client** depuis [le site officiel](https://filezilla-project.org).
2. Configurer FileZilla pour se connecter au serveur :
   - **Host** : Adresse IP du serveur.
   - **Username** : Nom de l'utilisateur Linux (`ftpuser`).
   - **Password** : Mot de passe défini pour l'utilisateur Linux.
   - **Port** : 21 (par défaut pour FTP).

Les accès FTP sont en faiite de simple identifiants Linux.
On peut créer un utilisateur avec la commande adduser :
```bash
sudo adduser <nom_d'utilisateur>
```

### **Mettre en production un site web avec FTP**

- Crée un nouvelle identifant Linux nommé `ftpuser`.
- Utiliser un client FTP (comme FileZilla) pour transférer les fichiers du site web vers le serveur.
- Ajouter les fichiers d'un site HTML/CSS dans le répertoire accessible par le serveur web, par exemple `/var/www/html/`.
- Testez si le site est visible.

### **Configurer vsftpd**

#### **Changer le dossier accessible par FTP**
- Modifier le fichier de configuration `/etc/vsftpd.conf` pour définir un nouveau dossier de base :
    ```bash
    sudo nano /etc/vsftpd.conf
    ```
- Ajoutez la ligne en fin de fichier:
    Par exemple resteindre le serveur ftp au seul dossier nommé `html` du répertoire `var/www/`.
    ```conf
    local_root=/var/www/html
    ```
- Redémarrer le service vsftpd :
    ```bash
    sudo systemctl restart vsftpd
    ```

### **Activité FTP / HTTP**

Dans une machine virtuelle Debian :

1. **Mettre en place un accès FTP pour un utilisateur Linux spécifique :**
   - Créer un utilisateur (`ftpuser`).
   - Configurer le service FTP pour restreindre l'accès de cet utilisateur à un seul dossier `/var/www/html`.

Ce cours te donne une vue d'ensemble pour configurer et utiliser un service FTP avec **vsftpd** et intégrer des sites web via Apache sur une machine Debian.