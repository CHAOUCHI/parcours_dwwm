# TP PHP Simple SHOP
## Le Besoin
Créer un catalogue en ligne simpliste qui permet toute les opérations CRUD élémentaire.
## Pré-requis
- SQL
- PDO
- session
- $_POST
- $_GET
# Cahier des charges

|Tâches| Description | Contraintes |
|---|---|---|
| Page d'accueil | La page d'accueil affiche tout les produit present dans la BDD
| Page Single Product| Affiche un seul produit en fonction de son id| Lorsque je clique sur un produit de la page d'accueil j'arrive sur cette page
|Page d'ajout de produit| Contient un forumlaire qui ajout un produit dans la bdd| Une fois l'ajout effectuer, redirige vers la page du nouveau produit
|Suppression d'un produit| Je peux supprimer un produit spécifique en cliquant sur un bouton "supprimer" | le bouton est present dans la page single product
| Modification de produit | Créer une page de modification de produit qui contient un formulaire de modification | un bouton "modifier produit" est présent sur la page single produit|
| **BONUS** Limiter l'accès au utilisateur connectés | Seuls les utilisateurs connectée peuvent : ajouter, supprimer, modifier un produit| Une table d'utilisateur et un forumlaire d'inscription doivent être crée.