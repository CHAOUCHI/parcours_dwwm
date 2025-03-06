

# Projet CopyPaster-Node

Un programme nodejs en CLI qui permet de copier un fichier comme le fait la commande `cp`.

## Commandes du programme

### **Copier un fichier**
```bash
node copy-paster.js mon_fichier
> Fichier créé avec succès.
```
### Cas d'erreur
#### Argument file_path manquant.
Si l'utilisateur oublie de préciser le chemin vers le fichier dans les paramètres de la ligne de commande Indiquez lui son erreur via un message d'erreur clair.
```bash
node copy-paster.js
> Argument file_path manquant. Préciser le chemin du fichier 
node copy-paster.js chemin/du/fichier
```

#### Fichier innexistant
Si l'utilisateur se trompe dans le nom du fichier Étape un fichier qui n'existe pas. Indiquez lui son erreur via un message.
```bash
node copy-paster.js  mon_fjskej
> Fichier inconnue : mon_fjskej au fichier de ce nom
```

## Cahier des charges

| Taches | Description |
|-|-|
| Copier un fichier et renommez le avec un nom différent mais reconnaissable.| Le nom du fichier est fournit en argument du cli. Vous pouvez accéder a ses arguments avec la liste argv disponible dans l'api process.(VSCode fait les import automatiquement).|
| Couvertures d'erreur | Mettez en place au minimum les messages d'erreurs décrit dans la section *cas d'erreur*|