# Structure de données

Une structure de données est une variable qui contient plusieurs autres variables.

A la différence des tableaux une `struct` peut contenir des données de plusieurs types différents.

Les `struct` sont comme des types primitifs : `int`, `float`, `char` à la différence qu'une `struct` peut être fabriqué par le programeur et contenir plusieurs variables de type différent.

Voyez les `struct` comme des "objets" de la vraie vie.

Un *"player"* par exemple peut ressembler à ça :

|name|pv|endurance|
|-|-|-|
|Billy|89|100|

Les struct C permettent de représenter ce genre de donnée sans créer autant de variables que d'attributs (colonnes) de l'objet.

## Déclaration d'un type `struct`

Je déclare le nom de ma struct ainsi que ses attributs et leurs types. Je le fais **en dehors et avant la fonction `main()`**

Un player ressemble à ceci :
|name|pv|endurance|
|-|-|-|

Le code ressemble donc à ceci.

```c

// Je délare un nouveau type : struct player
struct player{
  int pv;
  int endurance;
  char name[255];
};

int main()
{

    return 0;
}
```


## Instanciation d'une struct
Une fois ma `struct` crée je peux m'en servir comme un type classique pour créer des instances d'elle même. Des variables en somme.

```c

struct player{
  int pv;
  int endurance;
  char name[255];
};

int main()
{
    struct player player_one;
    struct player player_two;
    return 0;
}
```

## Affectation et accès au attributs
L'interet d'une struct c'est de représenter un "objet" qui contient plusieurs informations variables.

|name|pv|endurance|
|-|-|-|
|Billy|89|100|
|Hector|20|6|

Je peux accéder à ces variables, appellées attributs, grâce à l'opérateur `.`.

Je peux même leurs affecter une valeurs.

```c
#include <stdio.h>

struct player{
  int pv;
  int endurance;
  char name[255];
};

int main()
{
   struct player player_one;
   strcpy(player_one.name,"Billy");
   player_one.pv = 89;
   player_one.endurance = 100;

   struct player player_two;
   strcpy(player_two.name,"Hector");
   player_two.pv = 20;
   player_two.endurance = 6;

   return 0;
}
```

Et même accéder à ses attributs.

```c

#include <stdio.h>

struct player{
  int pv;
  int endurance;
  char name[255];
};

void showPlayerInfo(struct player player){
   printf("%s\n",player.name);
   printf("PV : %d\n",player.pv);
   printf("END : %d\n",player.endurance);
}

int main()
{
   struct player player_one;
   strcpy(player_one.name,"Billy");

   player_one.pv = 89;
   player_one.endurance = 100;

   struct player player_two;
   strcpy(player_two.name,"Hector");
   player_two.pv = 20;
   player_two.endurance = 6;
   

   printf("Ce soir !\n C'est %s ! Cooooontre !!! %s !!!!!!!\n",player_one.name,player_two.name);
   showPlayerInfo(player_one);
   showPlayerInfo(player_two);
   return 0;
}
```

### Exercice 1 : Déclaration et instanciation d'une struct

**Objectif : Prendre en main la syntaxe de base des struct en C.**

1. Créez une struct appelée `struct car` avec les attributs suivants :
   -  `char brand[255]` (marque de la voiture),
   -  `int year` (année de fabrication),
   -  `float price` (prix).

2. Déclarez une instance de `struct car` nommé `myCar` et affectez les valeurs suivantes :
   - brand : "Toyota"
   - year : 2015
   - price : 15000.0

3. Affichez les informations de `myCar` en utilisant `printf`.

---

### Exercice 2 : Déclaration et instanciation d'une struct pour des livres


1. Créez une struct appelée `struct book` avec les attributs suivants :
   - `char title[255]` (titre du livre),
   - `char author[255]` (auteur),
   - `float price` (prix).

2. Déclarez une instance de `struct book` nommée `myBook` et affectez les valeurs suivantes :
   - title : "L'Alchimiste"
   - author : "Paulo Coelho"
   - price : 12.99

3. Affichez les informations de `myBook` en utilisant `printf`.

---

### Exercice 3 : Déclaration et instanciation d'une struct pour des films

**Objectif** : Maîtriser la déclaration et l'instanciation de struct en créant des "objets" variés.

1. Créez une struct appelée `struct movie` avec les attributs suivants :
   - `char title[255]` (titre du film),
   - `int releaseYear` (année de sortie),
   - `float rating` (note sur 10).

2. Déclarez une instance de `struct movie` nommée `myMovie` et affectez les valeurs suivantes :
   - title : "Inception"
   - releaseYear : 2010
   - rating : 8.8

3. Affichez les informations de `myMovie` en utilisant `printf`. 




## Modifier et accéder à une struct dans une fonction

Passer une struct par référence permet de la modifier dans une fonction. En passant l’adresse de la struct, on peut modifier directement les attributs originaux.

```c

#include <stdio.h>

struct player {
    int pv;
    int endurance;
    char name[255];
};

void damagePlayer(struct player *p, int damage) {
   // -> permet d'accéder aux attributs de la struct pointé par le pointeur 
    p->pv -= damage;  // `p->pv` est équivalent à `(*p).pv`
    printf("Pv restant : %d\n",p->pv);
}

int main() {
    struct player player_one = {89, 100};
    char buf[255];memset(buf,0,255);
    fgets(buf,255,stdin)
    strcpy(player_one.name,buf);
    
    damagePlayer(&player_one, 10);  // Passe l'adresse de `player_one`
    printf("%s a maintenant %d PV\n", player_one.name, player_one.pv);
    
    return 0;
}
```

1. Créer une fonction qui prend en paramètre un pointeur sur `struct movie`. Cette fonction permet d'affecter des valeurs en une struct en vérifiant que l'utilisateur ne rentre pas n'importe quoi. Mettez en place cette fonction pour la `struct movie` en demandant les infos d'un film à l'utilisateur.

Return value : 
- 1 si la struct à bien été edité
- 0 si il y a une erreurs dans les champs fournit.

Vérifiez bien que :
- Titre supérieur à 1 caractère.
- relaseYear après 1895
- rating entre 0 et 10 inclus.

```c
int createMovie(struct movie* s_movie);
```

## Faire un tableau de struct

Un tableau de struct permet de stocker plusieurs instances d'une même structure dans un tableau. Par exemple, on peut créer une équipe de joueurs dans un tableau.

```c

#include <stdio.h>

struct player {
    int pv;
    int endurance;
    char* name;
};

int main() {
    struct player team[2] = { 
        {89, 100, "Billy"}, 
        {20, 6, "Hector"} 
    };

    for (int i = 0; i < 2; i++) {
        printf("Joueur : %s, PV : %d, Endurance : %d\n", team[i].name, team[i].pv, team[i].endurance);
    }
    return 0;
}
```

### Exercice 4 : Création d'un tableau de structs pour des étudiants

1. Déclarez une struct appelée `struct student` avec les attributs suivants :
   - `char name[255]` (nom de l’étudiant),
   - `int age` (âge),
   - `float grade` (note).

2. Dans `main`, créez un tableau de 3 étudiants et affectez les valeurs suivantes :

   - Étudiant 1 : nom "Alice", âge 20, note 15.5
   - Étudiant 2 : nom "Bob", âge 22, note 14.0
   - Étudiant 3 : nom "Charlie", âge 19, note 16.2

3. Utilisez une boucle pour afficher les informations de chaque étudiant dans le tableau.

---

### Exercice 5 : Tableau de structs pour des produits en magasin

1. Déclarez une struct appelée `struct product` avec les attributs suivants :
   - `char name[255]` (nom du produit),
   - `int stock` (quantité en stock),
   - `float price` (prix).

2. Créez un tableau de 4 produits dans `main` et initialisez-le avec les valeurs suivantes :

   - Produit 1 : nom "Ordinateur", stock 10, prix 799.99
   - Produit 2 : nom "Souris", stock 50, prix 19.99
   - Produit 3 : nom "Clavier", stock 30, prix 49.99
   - Produit 4 : nom "Écran", stock 15, prix 149.99

3. Affichez les informations de chaque produit en utilisant une boucle `for`.
4. Affichez tout les produits inférieur à 60 euros.

---

## Une struct en tant qu'attribut d'une autre struct

Les structures en C permettent aussi d'utiliser une struct comme type d'attribut d'une autre struct. Par exemple, si on veut ajouter des informations de position pour chaque joueur.

```c

#include <stdio.h>

struct position {
    int x;
    int y;
};

struct player {
    int pv;
    int endurance;
    char* name;
    struct position pos;  // Attribut de type `position`
};

int main() {
    struct player player_one = {89, 100, "Billy", {10, 20}};

    printf("Joueur : %s, PV : %d, Position : (%d, %d)\n", 
           player_one.name, player_one.pv, player_one.pos.x, player_one.pos.y);
    
    return 0;
}
```

1. Créer un petit programme qui demande ses informations personnel à l'utilisateur ainsi que sa position et qui affiche le tout en stockant tout ça dans un struct.

Je peux également défini un pointeur sur struct en tant qu'attribut ce qui me permet de créer séparement la struct avant de la fournir en attribut d'une autre.

```c
#include <stdio.h>

struct human {
    char name[255];
    int age;
    struct human* father;
    struct human* mother;
};

int main() {
   struct human jerome;
   // set jerome attributs...

   struct human michel;
   // set michel attributs...

   struct human samantha;
   // set samantha attributs...

   jerome.father = &michel;
   jerome.mother = &samantha;

   // Je peux ensuite accèder au attribut des struct pointé grâce à ->

   printf("Je suis %s et ma mère s'appelle : %s",jerome.name,jerome.mother->name);

   return 0;
}
```

2. Créer un petit programme qui demande ses infos personnel à l'utilisateur, puis les infos de ses parents. Ses parents sont egalement des struct. Respectez les struct ci-dessous:
```c
#include <stdio.h>

struct human {
    char name[255];
    int age;
    struct human* father;
    struct human* mother;
};

int main() {
   // Code here ...
   return 0;
}
```

## Enregistrer une struct dans un fichier texte

Pour enregistrer les informations d'une struct dans un fichier texte, on peut utiliser fprintf pour écrire chaque attribut.

```c

#include <stdio.h>

struct player {
    int pv;
    int endurance;
    char name[255];
};

int main() {
    struct player player_one = {89, 100, "Billy"};

    FILE *file = fopen("player_data.txt", "w");
    if (file) {
        fprintf(file, "Nom : %s\nPV : %d\nEndurance : %d\n", player_one.name, player_one.pv, player_one.endurance);
        fclose(file);
    }
    return 0;
}
```

1. Créer un programme fiche_de_perso qui demande des infos au joueur et lui créer un personnage. Il enregistre ensuite un fichier texte qui est la fiche de personnage du joueur.
2. Au début du programme on demande son nom au joueur et charger les données de sa fiche dans une struct. Affichez ensuite ses données.


## Enregistrer une struct dans un fichier binaire

Pour sauvegarder une struct dans un fichier binaire, on utilise fwrite, qui permet d'enregistrer directement les données en mémoire.

```c

#include <stdio.h>

struct player {
    int pv;
    int endurance;
    char name[20];
};

int main() {
    struct player player_one = {89, 100, "Billy"};
    
    FILE *file = fopen("player_data.bin", "wb");
    if (file) {
        fwrite(&player_one, sizeof(struct player), 1, file);
        fclose(file);
    }

    
    return 0;
}
```

*Presque pareil que en haut mais en binaire*
1. Créer un programme fiche_de_perso qui demande des infos au joueur et lui créer un personnage. Il enregistre ensuite un fichier binaire qui est la fiche de personnage du joueur.
2. Au début du programme on demande son nom au joueur et charge les données de sa fiche dans une struct. Affichez ensuite ses données.

## Lire un fichier binaire
Pour lire un fichier binaire il faut utiliser `fread()` et lui fournir :
- Un buffer à remplir
- le nombre d'élément à enregistrer
- La taille en octet d'un element

```c
// fread(BUFFER,NB_ELEMENTS,SIZEOF_ELEMENT,FILE*);
fread(buf,sizeFile,sizeof(char),fd);
printf("%s\n",buf);
```

<!-- ## Exercices

1. **Déclaration de structures simples :**
   Déclare une structure appelée `Personne` avec les champs : `nom` (une chaîne de caractères), `age` (un entier), et `taille` (un flottant). Crée ensuite une fonction pour afficher les informations d'une personne.

2. **Structure imbriquée :**
   Crée une structure `Adresse` avec les champs `rue`, `ville` et `codePostal`. Puis crée une structure `Personne` contenant un champ `Adresse`. Écris un programme pour afficher les informations d'une personne et de son adresse.

3. **Tableau de structures :**
   Déclare une structure `Etudiant` avec les champs `nom`, `matricule` et `note`. Crée un tableau de 5 étudiants et écris une fonction pour afficher leurs informations.

4. **Structure avec pointeur :**
   Déclare une structure `Rectangle` avec les champs `largeur` et `hauteur`. Crée une fonction qui prend un pointeur sur un rectangle et calcule sa surface.
> **Rappel Passage par référence**
> Le seul moyen de modifier une structure ou même une variable à l'intérieur d'une fonction et passé l'adresse de la variable et non sa valeur ! 
>
> On appel ceci le passage par adresse.
>```c
> 
>```

5. **Manipulation de structures avec fonctions :**
   Crée une structure `Point` avec deux champs `x` et `y` (coordonnées). Écris une fonction qui prend deux `Point` en paramètre et retourne la distance entre ces deux points.

6. **Structure dynamique :**
   Déclare une structure `Livre` avec les champs `titre`, `auteur` et `annee`. Utilise l'allocation dynamique pour créer un tableau de livres. Demande à l'utilisateur d'entrer les informations sur chaque livre.

7. **Tri de structures :**
   Déclare une structure `Joueur` avec les champs `nom` et `score`. Crée un tableau de 5 joueurs et écris une fonction pour trier ce tableau par score croissant.

8. **Copie de structure :**
   Déclare une structure `Vecteur` avec les champs `x`, `y`, et `z`. Écris une fonction qui prend un `Vecteur` en paramètre, en crée une copie, et retourne cette copie.

9. **Structure avec énumération :**
   Crée une structure `Voiture` avec les champs `marque`, `modele` et une énumération `TypeCarburant` qui peut être `Essence`, `Diesel` ou `Electrique`. Écris une fonction qui affiche les informations d'une voiture.

10. **Liste chaînée simple avec structures :**
    Crée une structure `Noeud` représentant un élément d'une liste chaînée avec un champ `valeur` (entier) et un pointeur vers le prochain noeud. Implémente une fonction pour ajouter un élément à la fin de la liste chaînée et une autre pour afficher tous les éléments de la liste.
 -->
# Projet RPG Texutel : /Langage C/Projets/RPG.md
