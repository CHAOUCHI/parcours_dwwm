# Projet Iceberg

## Ce projet vise a recoder un Saas (Service as a Software)

### Inspiré des Serveurs Glacier et S3, Votre objectif est de coder un serveur qui peut stocker massivement des données sans failles de sécurité ou de performances.

## Avant tout c'est quoi un S3 ?
S3 est un service crée par AWS (Amazon), son but est de stocker des grandes charges de données tout en étant accessible, rapide, sécurisé et flexible. Le Glacier en revanche comme son nom l'indique est un serveur qui maintient les données en place, Un exemple de Glacier en condition réelle : Icloud, Google Drive. C'est des données fixes qui sont géré par un serveur qui à prévu toute inconvénience.

## Votre Role :
### Coder Un serveur pouvant stocker énorméments de fichiers / données, tout en vérifiant à maintenir la sécurité, et gérer/prévoir le plus d'erreurs possibles. Ensuite Créer des composants d'accès à ces serveurs via un microservice RESTFUL, 
## En gros vous Coderez un Drive / Cloud !

# Cahier des Charges :
## Stack Technique :
- Un Framework Backend pour l'API rest, Pattern MVC requis (C#, PHP, Java, JS) Je conseille Symfony ou Spring.
- Pour le Serveur Iceberg : (PHP, C, Java, n'importe quel langage autre que  Javascript / Typescript) je conseille le PHP étant plus bas niveau il s'adapte bien a certains framework
- Un Framework Front (Angular, React+framework, Svelte, Vue, Blazor, Flutter) Je conseille Svelte ou Blazor(Si vous codez en C#)
- Docker (Docker Compose / kubernetes pour les génies comme taiyang) Implémentation de docker pour une database requise.
- DB (MongoDb / Postgres / Mysql, SQL nécessaire, mongodb est une possible implémentation)
## Requis :
- L'ICEBERG DOIT ÊTRE ASYNCHRONE !!
- Un CRUD Pour l'Iceberg
- Un Systême de Permissions / Users pour l'iceberg, Implémentez du SQL / NoSQL minimum.
- Des Composants d'accès structuré grace à l'Orienté Objet
- Un Front End Avec un routage, 
- Une Page de connexion, Une Page d'inscription
- Un Dashboard pour avoir accès au Drive
- Pouvoir Ajouter, Retirer, Télécharger des Fichiers.
- Système D'authentification (oAuth & oAuth2+ ne sont pas authorisés.)
## Contraintes :
> Sécurité
- Protéger le serveur de faille de permissions
- Protéger le frontend d'injection sql, xss, crsf. (backend compris)
- Protéger l'accès des dossiers et du fs (filesystem), Même un user root est limité qu'au dossier data ou public de votre serveur Iceberg
- Mdp hashés dans la db, Utiliser un algo custom + sha256 Ou Bcrypt, Votre but est d'éviter les attaques par dictionnaire (pas de sha256 raw)
- (Bonus) Rate Limiting fixe / Dynamique 
> Stabilité
- Logging et gestion d'erreur, (Logs de fichiers, leur type mime. Vous pouvez implémenter une base de donnée NoSQL MongoDb pour les logs ou GraphQL)
- Optimisation (éviter la surcharge de donnée et de connexions)
- En cas de fichier trop grand bloquez le téléchargement et renvoyez l'erreur
- Callback / Promesses coté client et serveur pour les réponses, 

## Point Bonus !
- Rajoutez un éditeur de texte pour pouvoir modifier les fichiers éditables dans l'Iceberg
- CLI Iceberg, Vous codez l'application mais en CLI, Langage à la Carte (Si vous utilisez Python ou Rust, Aucune librairies externes a celles de Python 3.9+ sont authorisées)
- CDN, Vous codez un cdn pour les fichiers de L'Iceberg, Vous pouvez récuperer un élément de l'url en Php Voici un exemple avec Symfony : 

```php
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CdnController extends AbstractController
{
    #[Route('/cdn/{path}', name: 'cdn_proxy', requirements: ['path' => '.+'])]
    public function proxy(Request $request, string $path): Response
    {
        $fullUrl = $request->getUri(); 
        $cdnPath = $path; 

    }
}

```

# Comment m'organiser ?

- Poser ses contraintes et faire sa logique métier,
- Comprendre la sécurité et enjeux de certains choix lors du démarrage du projet.
- Utiliser Git Et Documenter votre code au fil du développement.
- Se Renseigner sur les S3 et Glaciers pour comprendre le fonctionnement (Indice : IAM sur Aws)
- Comprendre le fileSystem et bien regarder les documentations liées au fichiers, autant front que back.
- Coder Bloc Par Bloc, Si vous codez le crud de L'Iceberg n'hésitez pas à coder le crud de L'API REST après avoir terminé.


# Pour Commencer :
```
📁 Iceberg-Project/
├── 📁 backend-api/             # API REST (Symfony, Spring, etc.)
│   ├── 📁 src/
│   │   ├── 📁 Controller/
│   │   ├── 📁 Entity/
│   │   ├── 📁 Repository/
│   │   ├── 📁 Service/
│   │   └── 📁 Security/
│   ├── 📁 config/
│   ├── 📁 migrations/
│   ├── 📁 tests/
│   └── 📄 .env
│
├── 📁 iceberg-core/            # Serveur de stockage (PHP, Java, C...)
│   ├── 📁 storage/             # Fichiers utilisateurs (sécurisés)
│   ├── 📁 core/                # Logique principale d'Iceberg
│   │   ├── FileHandler.php
│   │   ├── AuthHandler.php
│   │   └── Logger.php
│   ├── 📁 routes/
│   └── 📄 index.php
│
├── 📁 frontend/                # Interface utilisateur (Svelte, Blazor...)
│   ├── 📁 public/
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   ├── 📁 routes/
│   │   ├── 📁 pages/
│   │   ├── 📁 services/        # Appels API, auth, etc.
│   │   └── 📁 utils/
│   └── 📄 vite.config.js       # ou autre selon framework
│
├── 📁 docker/                  # Configuration Docker
│   ├── 📄 docker-compose.yml
│   ├── 📄 Dockerfile.api
│   ├── 📄 Dockerfile.iceberg
│   └── 📄 Dockerfile.front
│
├── 📁 database/                # Fichiers d’init SQL / scripts Mongo
│   ├── 📄 init.sql
│   └── 📄 users_schema.sql
│
├── 📁 docs/                    # Documentation / Cahier des charges
│   ├── 📄 README.md
│   ├── 📄 architecture.md
│   └── 📄 security-notes.md
│
├── 📁 cli-iceberg/             # (Bonus) Interface en ligne de commande
│   └── 📄 main.py              # Python ou Rust CLI
│
├── 📁 cdn/                     # (Bonus) CDN Proxy / gestion des assets
│   ├── 📄 index.php
│   └── 📄 CdnController.php
│
├── 📁 tests/                   # Tests de charge, unitaires, sécurité
│   ├── 📁 api/
│   ├── 📁 core/
│   └── 📁 frontend/
│
└── 📄 .gitignore
```

### Quel Framework ?
- Pour un framework solide sans prises de tête, je conseille Symfony en backend + le s3, le php étant très polyvalent 
- Niveau frontend la charge est légère, partez sur du Preact / react voir même du svelte, angular est assez lourd 

### Comment je start ?

- Faire le getting started de chaque techologie choisie, puis regarder un tuto / des documentations liées a vos besoins.

