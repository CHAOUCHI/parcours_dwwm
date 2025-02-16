# Projet 9 - Blog
## Le Besoin
Afficher dynamique le contenu d'une base de donnée. Ces données sont des articles de blog.

## Pré-requis
- CSS Grid
- La boucle for
- Savoir créer dynamiquement des balises HTML en JS

# Cahier des charges
|Tâches| Description | Contraintes |
|---|---|---|
| Intégrer le conteneur d'articles en HTML/CSS |
| Remplir le conteneur d'articles avec les données. | Chaque article doit respecter le schema : titre clickable, description, tags  | Utilisez le tableau de donnée fournit |


# La base de donnée
Copiez ce tableau d'objets dans votre code et utilisez le comme une base de données. Le plus souvent les serveurs envois une tableau d'objet comme celui-ci pour formater les données d'une BDD.
```js
const posts = 
[
    {
        titre:"SEO, les bonnes pratiques",
        hashtag:"#SEO",
        link:"#",
        extrait:"Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
    },
    {
        titre:"Bien, les bonnes pratiques",
        hashtag:"#JS",
        link:"#",
        extrait:"Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
    },
    {
        titre:"Content, les bonnes pratiques",
        hashtag:"#PHP",
        link:"#",
        extrait:"Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
    }
];
```