# Projet boutique en ligne BACK END

Définissez chaque model dans un fichier du même nom.

Par exemple le modèle `User` est défini dans le fichier `User.js`.

## Diagramme simpliste : sans jointure ni champs
```mermaid
erDiagram
    Product
    Review["Review(join)"]
    Cart
    User
    Carac
    Images
    Role

    Product }|--|| Category : has

    Product ||--|{ Review : got
    Review }|--|| User : post

    Product }|--|{ Images : has
    Product }|--|{ Carac : has
    Product }|--|{ Cart : has
    User ||--|| Cart : got
    User }|--|| Role : has
```
## Diagramme complet avec jointure et champs des tables
```mermaid
erDiagram
    Product{
        name TEXT
        price FLOAT
        description TEXT
    }
    Review["Review(join)"]{
        rating INT
        content TEXT
    }
    Cart{

    }
    User{
        name TEXT
        password TEXT
        email TEXT
        birth_date DATE
    }
    Carac{
        name TEXT
        unit TEXT
    }
    Images{
        url TEXT
    }
    Role{
        name TEXT
        importance INT
    }
    CaracProduct["CaracProduct(join)"]{
        value TEXT
    }
    ProductImages["ProductImages(join)"]
    Category{
        title TEXT
    }
    ProductCart{
        quantity INT
    }

    Product }|--|| Category : has

    Product ||--|{ Review : got
    Review }|--|| User : post
    
    Product ||--|{ ProductImages : has
    Images ||--|{ ProductImages : has
    
    Product ||--|{ CaracProduct : has
    Carac ||--|{ CaracProduct : has
    
    Product ||--|{ ProductCart : has
    Cart ||--|{ ProductCart : has

    User ||--|| Cart : has
    User }|--|| Role : has
```
## 1. Implémentation avec un ORM

Avec un ORM (sequelize, Doctrine, ...) implementer le diagramme d'entité relation.

> Faite attention ! Ce diagramme ne contient pas les clés primaires et les clés etrangères.


## 2. Crud
Créez un programme NodeJS (un service) qui permet d'effectuer les actions CRUD sur ce diagramme.
- Faite le avec express.
- Tout le projet doit être dans un dossier nommé `api_crud`
- Le dossier `database` contient la connexion à la BDD et exporte la variable `sequelize` via le fichier `index.js`
- Les Models sont crées dans des fichiers specifiques éponymes. 

> Comme pour du HTML par défaut `require()` cherche un fichier nommé `index.js`.

> C'est important de mettre tout le projet dans un même dossier pour pouvoir faire un docker compose facilement plus tard.

### Voici les routes à construire :

#### *Pour les produits :*
- GET /product/:id
- GET /products/search/:input
- GET /products/:limit
- GET /products/category/:categoryId
- POST /product
- DELETE /product/:id
- PUT /product
- POST /product/review
- PUT /product/review
- GET /product/review/:productId
- DELETE /product/review/:productId

#### *Pour les categories de produit :*
- GET /categories
- GET /category/:id
- POST /category
- DELETE /category/:id
- PUT /category

#### *Pour les utilisateurs :*
- POST /user/login
- POST /user/signin
- PUT /user
- GET /user/:id
- GET /users

> Veuillez hasher les mots de passe utilisateur dans un setter du modèle `User`.

> Pour la connexion il faut **comparer le mot de passe** passé par le client **avec le mot de passe hashé** contenu dans la BDD. 

>  Pour hasher vous pouvez utiliser le npm package `bcrypt`  : https://www.npmjs.com/package/bcrypt

> Voir la doc sequelize sur les setter : https://sequelize.org/docs/v6/core-concepts/getters-setters-virtuals/#setters

> Pour comparer vous pouvez utiliser le npm package `bcrypt`  : https://www.npmjs.com/package/bcrypt


#### *Pour le panier :*
- GET /cart/:userid
- POST /cart/:userid/:productid/:quantity
- PUT /cart/:userid/:productid/:quantity

## 3 Front

Faite un front-end avec un framework comme Angular, VueJS ou NextJs.

- Page Home : Catalogue de produit
- Page Search : résultat de recherche de produit
- Page Categories : Afficher toutes les categories
- Page Categorie : Affiche tout les produits d'une categorie
- Page panier : Affiche les produits stocké dans le panier associé à l'utilisateur actuellement connecté
- Page Connexion : Login form qui permet de récupérer le JWT