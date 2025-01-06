# TP PHP Formulaire
## Le Besoin
Créer un système de connexion composé de plusieurs pages :
- une page d'accueil qui contient un formulaire
- une page d'info qui affiche les infos rentrées par l'utilisateur.
## Pré-requis
- `session_start()`
- `if else`
- `header("Location: otherscript.php)`
# Cahier des charges

|Tâches| Description | Contraintes |
|---|---|---|
|Créer un formulaire qui enregistre dans la `session` l'age et le nom d'un utilisateur
| Rajouter un lien "données secrete" sur la page d'accueil qui affiche les données de l'utilisateur uniquement si elle existent|
| Créer une page info qui affiche l'age et le nom de l'utilisateur ||Si l'utilisateur n'est pas enregistré et tente d'accéder à la page info, celle-ci le redirige vers la page du formulaire.
| Ajouter un lien sur la page info et formulaire| Le lien supprime les données de l'utilisateur.