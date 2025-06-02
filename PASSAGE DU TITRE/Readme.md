# Roadmap Projet de Fin d’Année – Titre Pro DWWM

Referenciel de formation officiel : https://www.afpa.fr/formation-qualifiante/developpeur-web-et-web-mobile

| Étape                           | Description/Attendus                                                                                               | Livrables/Preuves à fournir           | Temps recommandée(s) |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------|----------------------------------------|---------------------------|
| **1. Choix et cadrage du projet**| Définir le sujet, les fonctionnalités principales, les différent type d'utilisateurs, le contexte de l'application.                                   | Synopsis (1 page)                      | 1 jour                        |
| **2. Analyse & Conception**      | - Rédiger le cahier des charges<br>- Réaliser les diagrammes Use Case et MCD(description des champs et des relations des tables SQL)<br>         | Cahier des charges, diagrammes Use Case, MCD         | 1 jour (modifier le mcd au fur et a mesure des changement de l'application)                     |
| **3. Initialisation du projet**  | - Création repo GitHub, branches principales(prod,dev et issues)<br>- Initialisation README   | Repo GitHub, README.md                 | 1 matinée                      |
| **4. Conception Base de Données**| - Choisir SGBD (ex : MySQL, PostgreSQL(sur supabase par exemple))<br>- Implémenter le MCD en SQL(Workbench)<br>- Tests des commandes SQL sur la BDD                      | Un Script SQL de la BDD (create table ect)                | 2-3jours                      |
| **5. Développement Back-End**    | - API REST NodeJS(CRUD de vos tables)<br>- Authentification JWT/Bcrypt(pour les mot de passe)<br>- Création des route<br>- Sécurisation (middleware JWT)          | Code source, TOUT les endpoints(routes) documentés      | 2 semaines                     |
| **6. Développement Front-End**   | - Angular : composants, services, formulaires d'accès au CRUD du back <br>- Intégration maquettes<br>- Responsive design                    | Code source, captures d’écrans et maquette Figma        | 2 semaines                      |
| **7. Déploiement**       | - Déployer avec Docker/GitLab CI/CD(option)       ou à la mains sur un serveur (Plesk)             | Pipelines(option), Dockerfile        | 1 semaine                     |
| **8. Documentation Projet**      | - Rédiger la documentation utilisateur<br>- Documenter l’API<br>- Compléter le README<br>- Rédiger le dossier final| Dossier projet, documentation complète | à faire en parallèle du développement                   |
| **9. Préparation à l’oral**      | - Préparer la présentation (PowerPoint/Canva)<br>- S’entraîner à l’oral<br>- Démonstration du projet               | Slides, plan de présentation           |                  |
| **10. Livraison finale**         | - Vérifier que tout est sur GitHub<br>- Dossier complet remis au jury<br>- Projet accessible sur github et **fonctionnel**         | Répo à jour, dossier envoyé            |                        |
| **11. Passage de l’oral**        | Présentation orale devant le jury                                                                      | Épreuve orale                          | Examen à Marseille              |

---


# Livrables obligatoires pour le jury

- **Synopsis (1 page)**
- **Dossier projet (avec Use Case, MCD, explications front, back, sécurité)**
- **Projet sur GitHub (code, documentation, instructions d’installation)**
- **Slides de présentation**
- **Projet fonctionnel déployé ou démontrable**
- **Dossier professionnel de la région à remplir**

## À ne pas oublier tout au long du projet
- **Utiliser Git et créer des issues pour avancer de façon linéaire**
- **Faire des commits réguliés et des messages clairs**
- **Prendre en compte la sécurité (authentification, validation des données des formulaire, verrouiller les routes en ecriture de votre API)**
- **Respecter les deadlines et rendre le livrable à temps**

## Compétences évaluées & modules

- **Module 1 (CCP1)** : Développement Front-End (Angular, Responsive, intégration, maquettes figma)
- **Module 2 (CCP2)** : Développement Back-End (NodeJS ou PHP, API, BDD, sécurité : hash password et attention au injection)
- **Dossier & Oral** : Documenter, présenter, justifier ses choix et démontrer votre compréhension du projet

---