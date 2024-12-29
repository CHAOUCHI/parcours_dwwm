# Exercices d'Algorithmique en C

## 1. Déclaration et Initialisation de Variables

1. **Déclaration et Initialisation de Variables Entières**
   - Écrivez un programme qui déclare trois variables entières, les initialise avec des valeurs différentes, puis affiche ces valeurs.

2. **Calcul de la Somme**
   - Déclarez deux variables entières, initialisez-les avec des valeurs, calculez leur somme, et affichez le résultat.

3. **Échange de Valeurs**
   - Écrivez un programme qui déclare deux variables entières, les initialise avec des valeurs, échange les valeurs de ces deux variables, et affiche les nouvelles valeurs.

4. **Déclaration de Variables à La Volée**
   - Déclarez et initialisez trois variables flottantes en une seule ligne de code et affichez leur valeur.

5. **Calcul de Moyenne**
   - Déclarez trois variables entières représentant des notes d'examen. Calculez la moyenne de ces notes en utilisant une variable flottante pour stocker le résultat et affichez la moyenne.

## 3. Opérations sur les Variables

9. **Opérations Arithmétiques**
   - Écrivez un programme qui demande à l'utilisateur de saisir deux nombres, puis effectue et affiche la somme, la différence, le produit et le quotient de ces nombres.

10. **Calcul du Périmètre et de l'Aire d'un Rectangle**
    - Déclarez des variables pour la longueur et la largeur d'un rectangle, puis calculez et affichez le périmètre et l'aire du rectangle.

11. **Calcul de l'Âge en Années, Mois et Jours**
    - Écrivez un programme qui demande à l'utilisateur de saisir son âge en jours. Convertissez cet âge en années, mois (en supposant 30 jours par mois), et jours restants, et affichez le résultat.

12. **Conversion de Température**
    - Écrivez un programme qui convertit une température de degrés Celsius en degrés Fahrenheit. Utilisez la formule : `F = (C * 9/5) + 32`, où `F` est la température en Fahrenheit et `C` est la température en Celsius.

## 4. Variables et Expressions Conditionnelles

13. **Vérification de Parité**
    - Demandez à l'utilisateur de saisir un nombre entier. Vérifiez si le nombre est pair ou impair et affichez le résultat.

15. **Calcul de la Distance entre Deux Points**
    - Déclarez des variables pour les coordonnées `(x1, y1)` et `(x2, y2)` de deux points. Utilisez la formule de la distance entre deux points pour calculer et afficher la distance : `distance = sqrt((x2 - x1)^2 + (y2 - y1)^2)`.

16. **Calcul du Volume d'une Sphère**
    - Écrivez un programme qui demande à l'utilisateur de saisir le rayon d'une sphère. Utilisez la formule du volume d'une sphère : `V = (4/3) * π * r^3`, et affichez le volume.

## 5. Manipulation Avancée des Variables

17. **Table de Multiplication**
    - Écrivez un programme qui demande à l'utilisateur de saisir un nombre entier et affiche la table de multiplication de ce nombre (de 1 à 10).

19. **Calcul du Facteur de Conversion**
    - Écrivez un programme qui convertit une distance en kilomètres en miles. Utilisez le facteur de conversion : `1 kilomètre = 0.621371 mile`.

20. **Calcul de l'Indice de Masse Corporelle (IMC)**
    - Demandez à l'utilisateur de saisir son poids en kilogrammes et sa taille en mètres. Calculez l'IMC avec la formule : `IMC = poids / (taille * taille)` et affichez la valeur.

## 6. Exercices Avancés

21. **Calcul des Coûts Totaux**
    - Écrivez un programme qui demande à l'utilisateur de saisir le prix unitaire et la quantité d'un produit. Calculez et affichez le coût total, en ajoutant une taxe de 20%.

22. **Calcul du Prix Total avec Remise**
    - Écrivez un programme qui demande à l'utilisateur de saisir le prix d'un article et la remise en pourcentage. Calculez le prix final après remise et affichez-le.

23. **Conversion d'Heures en Minutes**
    - Écrivez un programme qui demande à l'utilisateur de saisir une durée en heures et minutes. Convertissez cette durée en minutes et affichez le résultat total en minutes.

24. **Calcul du Pourcentage d'Augmentation**
    - Écrivez un programme qui demande à l'utilisateur de saisir un salaire initial et un salaire final. Calculez le pourcentage d'augmentation du salaire et affichez le résultat.

26. **Calcul de la Surface d'un Triangle**
    - Écrivez un programme qui demande à l'utilisateur de saisir la base et la hauteur d'un triangle. Calculez et affichez la surface du triangle en utilisant la formule : `Surface = (base * hauteur) / 2`.

27. **Calcul de la Moyenne Pondérée**
    - Écrivez un programme qui demande à l'utilisateur de saisir les notes d'un étudiant et leurs coefficiants respectifs. Calculez et affichez la moyenne pondérée des notes.

28. **Gestion des Fractions**
    - Écrivez un programme qui demande à l'utilisateur de saisir deux fractions (numérateur et dénominateur pour chaque fraction). Calculez et affichez la somme des deux fractions sous forme simplifiée.

29. **Calcul de l'Exposant d'un Nombre**
    - Écrivez un programme qui demande à l'utilisateur de saisir une base et un exposant. Calculez et affichez la puissance de la base élevée à l'exposant (base^exposant).

30. **Calcul du Montant d'un Prêt avec Intérêt**
    - Écrivez un programme qui demande à l'utilisateur de saisir le montant d'un prêt, le taux d'intérêt annuel, et la durée du prêt en années. Calculez le montant total à rembourser après intérêts et affichez le résultat.

## 1. Instructions Conditionnelles (`if`, `else`)

*Pré-requis* :
- if, else
- opérateurs logique
- % modulo (le reste de la division)

1. **Nombre Positif ou Négatif**
   - Écrivez un programme qui demande à l'utilisateur de saisir un nombre et affiche "Positif" si le nombre est supérieur à zéro, "Négatif" si le nombre est inférieur à zéro, et "Zéro" si le nombre est zéro.

2. **Nombre Pair ou Impair**
   - Écrivez un programme qui demande à l'utilisateur de saisir un nombre et affiche "Pair" si le nombre est pair, sinon "Impair".

3. **Comparaison de Deux Nombres**
   - Écrivez un programme qui demande à l'utilisateur de saisir deux nombres et affiche "Le premier nombre est plus grand" si le premier nombre est plus grand que le second, "Le deuxième nombre est plus grand" si le deuxième est plus grand, et "Les deux nombres sont égaux" si les deux nombres sont identiques.

4. **Grade de l'Étudiant**
   - Écrivez un programme qui demande à l'utilisateur de saisir une note (entre 0 et 100) et affiche la mention correspondante : "Excellent" pour une note >= 90, "Très bien" pour une note >= 80, "Bien" pour une note >= 70, "Assez bien" pour une note >= 60, et "Insuffisant" pour les notes inférieures à 60.

5. **Année Bissextile**
   - Écrivez un programme qui demande à l'utilisateur de saisir une année et affiche "Année bissextile" si l'année est bissextile, sinon "Année non bissextile". Une année est bissextile si elle est divisible par 4, sauf si elle est divisible par 100, sauf si elle est aussi divisible par 400.

6. **Évaluation de l'Âge**
   - Écrivez un programme qui demande à l'utilisateur de saisir son âge et affiche "Enfant" si l'âge est inférieur à 12, "Adolescent" si l'âge est compris entre 12 et 17, "Adulte" si l'âge est compris entre 18 et 64, et "Senior" si l'âge est 65 ou plus.

7. **Vérification de Mot de Passe**
   - Écrivez un programme qui demande à l'utilisateur de saisir un mot de passe et affiche "Accès autorisé" si le mot de passe est "securite123", sinon "Accès refusé".

8. **Vérification de Légalité de l'Heure**
   - Écrivez un programme qui demande à l'utilisateur de saisir l'heure puis les minutes et affiche "Heure valide" si l'heure est entre 00:00 et 23:59, sinon "Heure invalide".

9. **Vérification de La Parité d'un Nombre**
   - Écrivez un programme qui demande à l'utilisateur de saisir un nombre et affiche "Nombre est divisible par 3 et 5" si le nombre est divisible à la fois par 3 et par 5.

## 2. Boucles `for`

11. **Affichage des Nombres de 1 à 10**
    - Écrivez un programme qui utilise une boucle `for` pour afficher les nombres de 1 à 10.

12. **Somme des Nombres de 1 à 100**
    - Écrivez un programme qui utilise une boucle `for` pour calculer et afficher la somme des nombres de 1 à 100.

13. **Multiples de 3**
    - Écrivez un programme qui utilise une boucle `for` pour afficher les multiples de 3 entre 1 et 100.

14. **Table de Multiplication**
    - Écrivez un programme qui demande à l'utilisateur de saisir un nombre et utilise une boucle `for` pour afficher la table de multiplication de ce nombre (de 1 à 10).

15. **Factorielle**
    - Écrivez un programme qui demande à l'utilisateur de saisir un nombre entier positif et utilise une boucle `for` pour calculer et afficher le factorielle de ce nombre.
    > La factiorielle c'est la multiplication d'une nombre et de toute les valeurs les valeurs entière plus petit que lui.
    > Factorielle de 5
    > `5*4*3*2*1`

16. **Affichage des Nombres Pair jusqu'à 20**
    - Écrivez un programme qui utilise une boucle `for` pour afficher les nombres pairs de 2 à 20.

17. **Affichage de Nombres en Ordre Décroissant**
    - Écrivez un programme qui utilise une boucle `for` pour afficher les nombres de 10 à 1.

18. **Nombre d'Occurences d'un Caractère dans une Chaîne**
    - Écrivez un programme qui demande à l'utilisateur de saisir une chaîne de caractères et un caractère, puis utilise une boucle `for` pour compter combien de fois le caractère apparaît dans la chaîne.

19. **Affichage des Nombres Impairs**
    - Écrivez un programme qui utilise une boucle `for` pour afficher les nombres impairs de 1 à 15.

20. **Évaluation des Notes**
    - Écrivez un programme qui utilise une boucle `for` pour demander à l'utilisateur 5 notes et afficher la moyenne de ces notes.

## 3. Boucles `while`

21. **Affichage des Nombres de 1 à 10**
    - Écrivez un programme qui utilise une boucle `while` pour afficher les nombres de 1 à 10.

22. **Somme des Nombres de 1 à N**
    - Écrivez un programme qui demande à l'utilisateur de saisir un nombre `N` et utilise une boucle `while` pour calculer et afficher la somme des nombres de 1 à `N`.

23. **Table de Multiplication**
    - Écrivez un programme qui demande à l'utilisateur de saisir un nombre et utilise une boucle `while` pour afficher la table de multiplication de ce nombre (de 1 à 10).

24. **Nombre de Digits d'un Nombre**
    - Écrivez un programme qui demande à l'utilisateur de saisir un nombre entier positif et utilise une boucle `while` pour compter le nombre de chiffres dans ce nombre.

25. **Affichage de Nombres jusqu'à un Nombre Spécifié**
    - Écrivez un programme qui demande à l'utilisateur de saisir un nombre et utilise une boucle `while` pour afficher tous les nombres de 1 jusqu'à ce nombre.

26. **Vérification de Nombre Premier**
    - Écrivez un programme qui demande à l'utilisateur de saisir un nombre entier positif et utilise une boucle `while` pour vérifier si ce nombre est premier (c'est-à-dire divisible uniquement par 1 et lui-même).

27. **Affichage de la Séquence de Fibonacci**
    - Écrivez un programme qui utilise une boucle `while` pour afficher les premiers `n` termes de la séquence de Fibonacci, où `n` est saisi par l'utilisateur.

28. **Conversion de Temps en Heures et Minutes**
    - Écrivez un programme qui demande à l'utilisateur de saisir un nombre de minutes et utilise une boucle `while` pour convertir ce nombre en heures et minutes.

29. **Compteur de Chiffres Zéro**
    - Écrivez un programme qui demande à l'utilisateur de saisir un nombre entier positif et utilise une boucle `while` pour compter combien de fois le chiffre zéro apparaît dans ce nombre.

30. **Saisie de Nombres jusqu'à 0**
    - Écrivez un programme qui utilise une boucle `while` pour demander à l'utilisateur de saisir des nombres jusqu'à ce que l'utilisateur saisisse 0. Le programme affiche la somme de tous les nombres saisis (hors le zéro final).

## 4. Combinaison de Structures de Contrôle

31. **Affichage des Nombres Multiples de 3 entre 1 et 30**
    - Écrivez un programme qui utilise une boucle `for` pour afficher les nombres multiples de 3 entre 1 et 30. Utilisez une instruction `if` pour vérifier si un nombre est un multiple de 3.

32. **Calcul de la Somme des Nombres Impairs**
    - Écrivez un programme qui utilise une boucle `for` pour calculer la somme des nombres impairs de 1 à 50. Utilisez une instruction `if` pour vérifier si un nombre est impair.

33. **Trouver le Plus Grand Nombre**
    - Écrivez un programme qui demande à l'utilisateur de saisir 5 nombres et utilise une boucle `for` avec une instruction `if` pour déterminer et afficher le plus grand nombre.

34. **Calculer la Factorielle d'un Nombre avec `while`**
    - Écrivez un programme qui demande à l'utilisateur de saisir un nombre entier positif et utilise une boucle `while` pour calculer et afficher la factorielle de ce nombre.

35. **Affichage des Nombres Divisibles par 4**
    - Écrivez un programme qui utilise une boucle `for` pour afficher tous les nombres de 1 à 40 qui sont divisibles par 4