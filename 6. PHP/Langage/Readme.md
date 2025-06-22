Ce cours sera mis à jour dans peu de temps

Vous trouverez également un cours sur PHP ici : https://www.w3schools.com/php/php_syntax.asp

----------------------------------------

# Apprendre le PHP
**PHP (PHP : Hypertext Preprocessor) est un langage de programmation de script généraliste**. Sa principale vocation est l'envoi de réponses HTTP, que ce soit une page HTML générée en PHP ou des données JSON.

Le PHP permet l'utilisation des principes de la **POO** (héritage, polymorphisme, interface) mais n'oblige pas son utilisation comme Java ou, dans une moindre mesure, JavaScript. **Comme tout langage de script, PHP nécessite un interpréteur pour être exécuté.**

# Documentations 
**Le manuel du langage PHP** est disponible sur le site officiel du langage : https://www.php.net/manual/fr/index.php

**La référence des fonctions et objets** du langage est disponible via la barre de recherche du site officiel : https://www.php.net/docs.php

**La référence de la syntaxe du langage** est disponible ici : https://www.php.net/manual/fr/langref.php

Comme d'habitude, **W3schools** est également là : https://www.w3schools.com/php/php_syntax.asp

# Les possibilités du PHP
PHP est le premier langage de programmation du web et, comme son nom l'indique, PHP est un *Préprocesseur d'Hypertexte*. Concrètement, un hypertexte est un fichier HTML et PHP permet d'exécuter un algorithme avant l'envoi de l'hypertexte au client pour envoyer du contenu dynamique.
>Aujourd'hui, on n'envoie pas exclusivement de l'hypertexte (HTML) mais également du JSON ou du XML.

Avec PHP vous pourrez entre autres : 
- **Créer un site web dynamique** sans l'utilisation de JavaScript.
- **Accéder à une base de données SQL**.
- Créer un **système d'authentification**.
- **Concevoir une API REST** accessible depuis un front-end, par exemple en JavaScript via la méthode `fetch()` ou depuis n'importe quel client HTTP.
- Récupérer le contenu des champs d'un formulaire HTML.
- Gérer les **cookies**


# Installation de l'interpréteur PHP 
L'interpréteur PHP est le programme qui va exécuter nos scripts PHP.


## Windows

Lien officiel : https://windows.php.net/downloads/

- https://windows.php.net/downloads/releases/php-8.3.12-nts-Win32-vs16-x64.zip
- Décompressez l'archive dans un dossier nommé php et placez-le dans le dossier Programmes de votre disque dur.
- Ajoutez le chemin vers php.exe dans le PATH Windows
- Décommentez les lignes suivantes dans le fichier php.ini-development
    - extension=mysqli
    - extension=pdo_mysql
- Renommez le fichier php.ini
- Lancez le serveur web PHP
```powershell
le/dossier/de/mon/serveur$ php -S localhost:8080
```
## Linux
```linux
apt install php
le/dossier/de/mon/serveur$ php -S localhost:8080
```
## Mac
```
brew install php
le/dossier/de/mon/serveur$ php -S localhost:8080
```
# Lancez un serveur web compatible avec PHP
Une fois l'interpréteur installé, il faut lancer un serveur HTTP local grâce à une simple commande disponible avec l'interpréteur PHP. À la différence des serveurs HTTP lancés avec Python, ce serveur local va exécuter les scripts PHP si un client demande un fichier `".php"`.

**Dans une console :**
Rendez-vous dans le dossier dans lequel vous souhaitez mettre vos futurs sites web PHP et ouvrez une console à cet endroit.

Puis écrivez ceci pour lancer le serveur en `localhost` sur le port `8080`.
```
php -S localhost:8080
```
> Si vous souhaitez que votre serveur soit accessible à tous les PC du réseau local chez vous : remplacez `localhost` par l'adresse IPv4 de votre PC.

## Apache2
Dans l'industrie, on ne fournit pas un site PHP grâce à cette commande ; le plus souvent, on utilise un serveur Apache.

# Hello World !
Tout code `php` doit être contenu dans un fichier .php et entre les balises php : `<?php ... ?>`

Dans le dossier où vous avez lancé le serveur PHP, créez un fichier **index.php**.

Dans le fichier **index.php** écrivez :
```php
<?php
echo "Hello World";
?>
```
`echo` est une fonction qui n'a pas besoin de parenthèses et qui écrit un texte dans le HTML de la page à l'endroit où elle est placée.
```php
<h1>Le magnifique site de <?php echo "Jeff"; ?> !</h1>
<p>
    <?php
        echo "Bienvenue tout le monde !";
    ?>
</p>
```
Avec la syntaxe alternative `<?= ?>` il est possible de ne pas écrire le `echo`.

```php
<h1>Le magnifique site de <?= "Jeff" ?> !</h1>
<p>
    <?= "Bienvenue tout le monde !" ?>
</p>
```
Ces deux codes sont les mêmes.

## Allez plus loin avec une variable
```php

<?php
$prenom = "Jeff";
?>
<h1>Le magnifique site de <?php echo $prenom; ?> !</h1>
<p>
    <?php
        echo "Bienvenue tout le monde !";
    ?>
</p>
```
> **Précision sur `echo`** 
>Pour être plus précis, `echo` écrit en fait dans le body de la réponse HTTP à envoyer au client. Et oui, PHP est un langage back-end qui a pour but final d'envoyer une réponse HTTP ! Tout texte écrit en dehors des balises PHP sera placé dans le body de la réponse HTTP.

# Syntaxe basique du PHP
En PHP, toute instruction se finit par un point-virgule `;`.

## Types de données
En PHP il existe plusieurs types de données : 
- Integer, les nombres entiers
- Float, les nombres à virgule
- String, les textes
- Boolean, les valeurs binaires : `true` ou `false`
- Array, les tableaux
- Object, les instances de classes.
- NULL, la valeur d'une variable non déclarée.
### À propos de la concaténation 
En PHP, la concaténation de deux strings se fait via l'opérateur point : `.`  . 
```php
$age = 24;
echo "J'ai ".$age." ans !";     // => J'ai 24 ans !
```
> **Note**
> Dans une string, il est possible de placer directement une variable sans concaténation. N'oubliez pas le dollar ! `$`.
>```php
> $age = 24;
> echo "J'ai $age ans !";
>``` 
>

## Les opérateurs en PHP
Les opérateurs en `PHP` respectent la syntaxe classique de tous les langages qui héritent du C.
Parmi les opérateurs les plus communs, on retrouve :
|Opérateur|Opération|Résultat|
|-|-|-|
|=|L'affectation|Une variable|
|**.**|La concaténation : `"J'ai ".$age." ans !"`|String|
|>  <  >=  <=  ==  !=|La comparaison|Boolean|
|%|modulo|Integer|
|+ * - /|Arithmétique|Float ou Integer|
|++|Incrémentation|Float ou Integer|
|--|Décrémentation|Float ou Integer|

## Variables
Une variable est définie par un nom et un type de données parmi les types de données du PHP décrits plus haut.
On utilise le symbole dollar **$** pour déclarer une variable et l'opérateur **=** pour l'affectation.

```php
$age = 24;                  // Nombre
$prenom = "Massinissa";     // String
$isMajeur = $age >= 18;     // Boolean
```
Pour utiliser une variable, il faut toujours placer le dollar devant son nom.

 ```php
 
 echo $prenom;          // => Massinissa
 echo gettype($age);    // => Integer
 ```

## Les Tableaux
En PHP, l'index d'un tableau s'appelle la `key` ou clé en français.
Il existe deux genres de tableaux : les listes et les `map` (ou dictionnaire) en français. La `key` d'une liste est un `Integer` alors que la `key` d'un dictionnaire est une `string`.

### Les Array - Liste
```php
$fruits = ["cerise","pomme","poire"];   
echo $fruits[0];        // => cerise , la key 0 est un Integer.
```
#### Connaître la taille du tableau
La fonction `count()` fournit le nombre d'éléments d'un tableau, c'est très utile pour écrire une boucle `for` par exemple.
```php
count($fruits);         // 3
```

#### Ajouter
```php
$fruits[] = "orange";   // Ajoute à la fin du tableau.
```
#### Modifier
```php
echo $fruits[2];        // => poire
$fruits[2] = "banane";   // Modifie la valeur à l'index 2.
echo $fruits[2];        // => banane
```
#### Supprimer tous les éléments à partir d'un index
`array_splice` permet de supprimer des éléments dans un intervalle donné.

**Définition :**
```php
array_splice(array $table,int startDeletingAt,int nbElementToDelete);
```
**Paramètres :**
- `array` le tableau à modifier
- `int` l'index à partir d'où commence la suppression des éléments
- `int` le nombre d'éléments à supprimer

**Exemple :**
Supprimer l'élément à l'index 0 :
```php
$fruits = ["cerise","pomme","poire"];
array_splice($fruits,0,1);      // Starts at 0, supprime 1 élément
echo $fruits[0];        // => pomme
```
Supprimer 2 éléments à partir de l'index 1 :
```php
$fruits = ["cerise","pomme","poire"];
array_splice($fruits,1,2);
echo $fruits[0];        // => cerise
echo $fruits[1];        // => NULL
echo $fruits[2];        // => NULL
```

Supprimer tous les éléments à partir d'un index donné :
```php
$fruits = ["cerise","pomme","poire"];
array_splice($fruits,1);     // J'omets le nombre d'éléments donc je supprime tout à partir de l'index 1
echo count($fruits);        // 1
```
> Si on omet le troisième paramètre, on supprime tous les éléments à partir de l'index donné.
### Les Array - Map
Les Map possèdent des clés textuelles et sont très utilisées pour récupérer les lignes d'une base de données SQL par exemple.
```php
// Array à key textuelle
$eleve = [
    "name" => "Thomas",
    "lastname" => "Canal",
    "age" => 27,
];
echo $eleve["name"];       // => Thomas , la key "name" est une string.
```

### Ajouter
```php
$eleve["job"] = "web dev";   // Ajoute à la clé job l'élément "web dev"
```
### Modifier la valeur d'une clé
Modifier et ajouter une clé répond à la même syntaxe.
```php
$eleve["name"] = "Mathieu";
```
### Supprimer une clé
La fonction `unset()` permet de supprimer une clé d'un `Map`, elle permet également de supprimer n'importe quelle variable.
```php
unset($eleve["lastname"]);
```
> la fonction `var_dump()` permet d'afficher le détail d'une variable comme les éléments d'un tableau par exemple.
>```php
>var_dump($eleve);     // Écrit le contenu du tableau dans le HTML
>```

## Les Conditions
Les conditions en PHP sont similaires aux conditions des autres langages de programmation.
### if...else
```php
if($age >= 18){
    echo "Majeur";
}
else{
    echo "Mineur";
}
```
### L'opérateur ternaire ? : 
L'opérateur ternaire est un raccourci du if else qui permet de renvoyer une valeur si le test est vrai ou bien une autre si le test est faux.
```php
echo $age >=18 ? "Majeur" : "Mineur";    // Équivalent au code plus haut.
```
**Syntaxe:**
```php
test ? valueIfTrue : valueIfFalse
```

### switch
Le switch permet d'éviter d'écrire une longue suite de `if else if` imbriqués.
Ce code :
```php
$user = [
    "name" => "Thomas",
    "role" => "ADMIN"
];
if($user["role"]=="ADMIN"){
    echo "Welcome administrator ".$user["name"];
}elseif($user["role"]=="USER"){
    echo "Welcome ".$user["name"];
}else{
    echo "Welcome guest.";
}
```
Produit le même résultat que ce code :
```php
$user = [
    "name" => "Thomas",
    "role" => "ADMIN"
];
switch ($user["role"]) {
    case 'ADMIN':
        echo "Welcome administrator ".$user["name"];
    break;      // break définit la fin du case.

    case 'USER':
        echo "Welcome ".$user["name"];
    break;
        
    default:
        echo "Welcome guest.";
    break;
}
```

## Les boucles
### La boucle while
```php
while (test) {

}
```
### La boucle for
Le PHP supporte la syntaxe classique du `for` :
```php
$fruits = ["cerise","pomme","poire"];
for ($i=0; $i < count($fruits); $i++) { 
    echo $fruits[$i];
}
/**
 * cerise
 * pomme
 * poire
*/
```
#### Le foreach
La plupart du temps, la syntaxe classique n'est pas utilisée car le `for` permet surtout de parcourir un tableau, pour cela on préfère utiliser `foreach`.

```php
$fruits = ["cerise","pomme","poire"];
foreach($fruits as $fruit){
    echo $fruit;        // J'affiche l'itérateur $fruit
}
/**
 * cerise
 * pomme
 * poire
*/
```
#### foreach - Utiliser la clé d'un tableau Map
Dans le cas où mon tableau est un `Map`, je veux pouvoir récupérer la clé associée aux valeurs, j'utilise la syntaxe complète du `foreach`.
```php
$eleve = [
    "name" => "Thomas",
    "lastname" => "Canal",
    "age" => 27,
];
foreach($eleve as $key => $value){
    echo $key." : ".$value;
}
/**
 * name : Thomas
 * lastname : Canal
 * age : 27
 * */
```

## Les fonctions en PHP
Les fonctions sont des blocs de code paramétrables et réutilisables qui peuvent renvoyer une valeur de retour. **Une fonction est définie par son nom, ses paramètres et le type de sa valeur de retour.**
> La valeur de retour d'une fonction qui ne renvoie rien est `NULL`.

**Syntaxe :**
```php
function functionName(type param1, type param2, ...) : returnType{
    // Code
    return value;
}
```
**Exemple simple :**
```php
function Somme(float $a,float $b) : float{
    return $a+$b;
}
```
**Exemple réel :**
```php
/***
 * Convertit un tableau en string
 * @param array $table : le tableau à convertir en string
 * @param string $separator : séparateur utilisé entre chaque élément du tableau, par défaut ","
 * @return string : la string qui contient tous les éléments du tableau.
 */
function arrayToString(array $table,string $separator = ",") : string{
    $joinedString = "";

    foreach($table as $key=>$value){
        $joinedString = $key==0 ? $joinedString.$value :$joinedString.$separator.$value;
    }

    return $joinedString;
}

echo arrayToString(["J'ai",24,"ans"]," ");      // => J'ai 24 ans
```
En PHP, si l'on précise le type d'un paramètre ou d'une valeur de retour et qu'une variable du mauvais type est passée, une erreur survient et le script s'arrête.
> Note : `string $separator = ","`
> Le paramètre d'une fonction peut avoir une valeur par défaut, ce qui rend le paramètre optionnel.

### Les fonctions lambda
En PHP, il est possible de créer des fonctions sans nom, ces fonctions sont souvent utilisées en tant que fonctions callback. On les appelle les fonctions lambda.

**Syntaxe :**
```php
function(type param):returnType{
    return value;
}
```
**Exemple :**
```php
$somme = function Somme(float $a,float $b) : float{
    return $a+$b;
}
```

Les fonctions lambda sont utilisées dans l'appel des fonctions de traitement d'un array comme :
- `array_filter()` : https://www.php.net/manual/fr/function.array-filter.php
- `array_map()` : https://www.php.net/manual/fr/function.array-map.php
- `array_reduce()` : https://www.php.net/manual/fr/function.array-reduce.php

# POO - Orienté objet en PHP
Le PHP permet l'utilisation de classes, interfaces, héritage et polymorphisme.
## Déclarer une classe
La déclaration d'une classe se fait via le mot clé `class`.
**Syntaxe :**
```php
class ClassName{
    
    public $attribut1;
    public $attribut2;
    private $attribut3;

    function __construct(type $param){
        $this->attribut1 = $param;
    }
    public function publicMethodName(){

    }
    private function privateMethodName(){

    }
}
```
**Exemple :**
```php
class User{
    private $name;
    public function __construct(string $name){
        $this->name = $name;
    }
    public function getName():string{
        return $this->name;
    }
    public function setName(string $newName){
        $this->name = $newName;
    }
}
```
## Instancier un objet
Le mot clé `new` permet d'instancier une classe.
```php
$user = new User("Massinissa");
```
# Importer des éléments entre plusieurs fichiers PHP
Il est possible de déclarer des fonctions, des constantes ou des classes dans un fichier PHP puis d'y accéder dans un autre. Cela permet d'organiser son projet.

Il y a deux moyens d'importer des éléments :
- **via la fonction `require_once()`** qui copie-colle TOUT le contenu d'un fichier PHP dans le fichier dans lequel il est appelé.
- **via le gestionnaire de paquets `Composer`**, cette option est l'objet d'un cours à part. `Composer` est primordial dans l'utilisation de modules tiers et de frameworks comme `Symfony` ou `Laravel`.

## Import avec `require_once()`
J'écris du code dans un fichier PHP.
*other.php*
```php
<?php
$fruit = "pomme";

class User{
    public $name;
    public function __construct(string $name){
        $this->name = $name;
    }
}

function hello(){
    echo "Hello";
}
```
Je l'importe dans un autre.
```php
<?php
require_once("other.php");

$user = new User("Massinissa");
echo $fruit;
hello();
```

Lorsque j'importe, j'effectue littéralement un copié-collé du script PHP à l'endroit de l'appel du `require_once`. Attention donc à rester organisé et à ne pas importer n'importe quoi.

# Session PHP
En PHP, on peut sauvegarder des données pendant toute la session de l'utilisateur, de cette manière même si l'utilisateur charge de nouvelles pages et donc de nouveaux scripts PHP, les données persistent. 

Une utilisation typique des sessions, c'est l'authentification d'un utilisateur.
On démarre la session et on peuple les clés de la variable `$_SESSION` avec `session_start()` et on supprime les variables de la session avec `session_destroy()`.
> Attention, il ne faut appeler `session_start()` qu'une fois par fichier, au tout début.
**Syntaxe :**
```php
session_start();                // Je lance la session
$_SESSION["userid"] = 1;        // Je crée une variable de session dans le tableau de session.
$_SESSION["role"] = "ADMIN";
```

## Exemple - Authentification
Le header "Location: url" permet de rediriger la page vers une autre page.
> ATTENTION IL FAUT COLLER `Location` et le `:` `"Location: autrepage.php"` sinon ça ne marche pas.

*index.php*
```php
<?php session_start(); ?>

<form action="index.php" method="post">
    <input type="email" name="email">  <!--L'attribut name définit le nom des variables PHP-->
    <input type="password" name="password">
    <input type="submit" value="Se Connecter">
</form>

<?php
/*
 Récupérez l'utilisateur depuis la BDD...
 SELECT * FROM User WHERE email = $_POST["email"];
 
 Dans cet exemple je crée l'utilisateur à la main.
*/

$user = [
    "id"=>3,
    "email"=>$_POST["email"],
    "password"=>"0000"
];

if($user["password"] == $_POST["password"]){
    // Le mot de passe est bon !
    $_SESSION["user_id"] = $user["id"];
    header("Location: profil.php");  // Redirige vers la page du profil
}
?>
```

*profil.php*
```php
<?php
session_start();

if(!isset($_SESSION["user_id"])){
    header("Location: index.php");  // Redirige vers la page du formulaire
}
?>
<h1>Bienvenue !</h1>
<a href="logout.php">Se déconnecter</a>
```
> isset() est une fonction qui renvoie `vrai` si la variable existe.
*logout.php*
```php
<?php
session_start();
session_destroy();

header("Location: index.php");
?>
```
> Il faut charger la session actuelle avec `session_start` avant de pouvoir la détruire.


<!-- 
# TODO
- Cookies ???
- Se connecter à une BDD SQL
    - Connector
    - Simple requête
    - Requêtes préparées
    - Notion de transaction SQL
    - Gestion d'erreurs.
    - Injection XSS
- Système de fichiers
- Envoyer un fichier à un serveur PHP
- Construire une page HTML en PHP
    - balise spécifique 
        - `<?= ?>`
        - `<?php foreach():?>`
        - `<?php if():?>`
 -->

<!-- # Idées TP
- TP Formulaire
    - Créer une page form.php contenant un formulaire HTML
    - Get prenom et age from $_POST et les afficher.
    - Enregistrer l'age et le prénom de l'utilisateur dans $_SESSION avec session_start()
    - Le formulaire renvoie sur une page info.php qui affiche les infos utilisateur stockées dans la session.
    - La page info.php affiche les infos uniquement si $_SESSION age et prenom sont isset() sinon location form.php
    - Dans la page info.php ajoute un lien qui supprime les données utilisateur de la session grâce à la fonction unset() et un nouveau script PHP nommé logout.php.
- TP Simple Shop
    - Se connecter à une base de données SQL
    - Ajouter un produit à la base depuis un formulaire HTML dans un fichier add-product.php
    - Créer une page products.php qui affiche tous les produits
    - Créer une page product.php?id=1 qui affiche les données d'un produit via son id récupéré en GET
    - Faire un lien entre les produits affichés dans la page products.php et la page product.php?id=1
    - Créer une page delete-product.php?id=1 qui supprime un produit via son id en GET et y placer un lien vers la page products.
    - Créer un formulaire de modification d'un produit
        - Afficher les données du produit dans un formulaire
        - Envoyer les données en POST au serveur
        - Le serveur modifie les données grâce à un UPDATE TABLE
        - Affiche la page de l'utilisateur.
- TP Créer le site shoe-shop avec
    - une page d'accueil qui affiche les produits
    - Une page qui affiche le détail d'un produit unique
    - une page pour rajouter un produit à partir d'un formulaire
    - un lien de suppression de produit
    - BONUS : Créer une page de connexion pour les administrateurs et limiter l'accès aux pages : ajout, suppression et modification de produit aux utilisateurs connectés uniquement. Utiliser les sessions pour le faire.


// Idées de TP
- Blog Article
- Boutique en ligne
- User Login Logout
- API Paiement Stripe -->