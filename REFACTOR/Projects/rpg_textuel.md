# Projet: RPG Textuel (solo)

Objectifs pédagogiques
- Utiliser `struct` pour représenter entités (player, ennemi)
- Sérialiser/deserialiser sauvegarde (fichier texte ou binaire)
- Manipuler tableaux et allocation dynamique

Contraintes techniques
- Sauvegarde/chargement d'une fiche joueur
- Combat simple: attaquer, soigner, inventaire (tableau de struct)
- Interface console

Critères d'acceptation
- Charger une fiche existante ou créer une nouvelle
- Sauvegarder la progression (format texte et binaire optionnel)
- Écrire tests simples (scripts ou procédures manuelles)

Milestones
1. Définir `struct player` et afficher fiche
2. Implémenter sauvegarde/chargement texte
3. Ajouter combat et inventaire
4. Bonus: implémenter sauvegarde binaire et vérification de compatibilité
