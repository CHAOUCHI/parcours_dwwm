# FileSystem PHP

Un fichier est une suite d'octet enregistré sur le disque dur.

Dans un système Linux tout est fichier. Alors évidement il est possible de créer, lire et écrire sur des fichiers en PHP, mais vous allez voir que même le clavier est considéré comme un fichier ou appel ça un buffer ou stream (flux de donnée en français).

## Fichier I/O - Création, lecture, écriture

En PHP, la gestion des fichiers est similaire à celle du C, mais avec des fonctions adaptées au langage. Voici les principales étapes et fonctions pour manipuler des fichiers :

## Ouvrir un fichier

Pour ouvrir un fichier, on utilise la fonction `fopen()` :

```php
$fichier = fopen("mon_fichier.txt", "w+"); // Ouvre en écriture, crée le fichier s'il n'existe pas
```

Les modes d'ouverture sont proches de ceux du C :

| Mode | Lecture | Écriture | Curseur |
|------|---------|----------|---------|
| r    | **oui**     | non      | début   |
| r+   | **oui**     | **oui**      | début   |
| w    | non     | **oui**      | début   |
| w+   | **oui**     | **oui**      | début   |
| a    | non     | **oui**      | fin     |
| a+   | **oui**     | **oui**      | fin     |


> Les modes d'accès `+` crée le fichier si il n'existe pas.
> Le mode `a` ajoute les caratère à la fin du fichier sans effacer le contenu existant.

## Lire un fichier

Pour lire tout le contenu d'un fichier :

```php
$contenu = file_get_contents("test.txt");
echo $contenu;
```

Pour lire un fichier ligne par ligne :

```php
$fichier = fopen("test.txt", "r");
do {
    $line = fgets($fichier);
    echo $line;
}while($line !== false);

fclose($fichier);
```


## Écrire dans un fichier

Pour écrire dans un fichier texte :

```php
$handle = fopen("test.txt", "w");
fwrite($handle, "Bonjour, monde !");
fclose($handle);
```

Pour ajouter à la fin d'un fichier :

```php
$handle = fopen("test.txt", "a");
fwrite($handle, "Nouvelle ligne\n");
fclose($handle);
```

## Déplacer le curseur

La fonction `fseek()` permet de déplacer le curseur dans le fichier :

```php
$handle = fopen("test.txt", "r+");
fseek($handle, 10, SEEK_SET); // Place le curseur au 10e octet
$line = fgets($handle);
fclose($handle);
```

Les constantes sont :
- `SEEK_SET` : début du fichier
- `SEEK_CUR` : position actuelle
- `SEEK_END` : fin du fichier

## Connaitre la taille d'un fichier

```php
$size = filesize("test.txt");
echo "Taille : $size octets";
```

## Lire une ligne spécifique

Pour lire une ligne précise :

```php
$handle = fopen("test.txt", "r");
$lineNumber = 3;
$current = 1;
while (($line = fgets($handle)) !== false) {
    if ($current == $lineNumber) {
        echo $line;
        break;
    }
    $current++;
}
fclose($handle);
```

## Extraire des valeurs d'une ligne

Pour découper une ligne selon un séparateur :

```php
$line = "Content-Type : text/html";
list($key, $value) = explode(":", $line, 2);
echo trim($key);   // Content-Type
echo trim($value); // text/html
```

Pour extraire plusieurs valeurs formatées :

```php
$line = "HP 90";
list($name, $value) = explode(" ", $line, 2);
echo "$name : $value"; // HP : 90
```

## Modifier une ligne dans un fichier

En PHP, il faut généralement lire tout le fichier, modifier la ligne, puis réécrire le fichier :

```php
$lines = file("test.txt");
$lines[0] = "HP : 121\n"; // Modifie la première ligne
file_put_contents("test.txt", implode("", $lines));
```

> Pour des modifications précises, il est souvent plus simple de travailler sur le tableau de lignes.

## Fermer un fichier

N'oubliez pas de fermer le fichier après utilisation :

```php
fclose($handle);
```

---

PHP propose aussi des fonctions pratiques comme `file()`, `file_get_contents()`, `file_put_contents()` pour simplifier la lecture et l'écriture de fichiers.

## Lire le terminal Standard I/O - Stdin & stdout


```php
<?php
$user_input = fgets(STDIN);
echo $user_input;
```

Par exemple ici je demande j'affiche chaque phrase tapez par l'utilisateur.


```php
<?php
while(true){

    $user_input = fgets(STDIN);
echo $user_input;
}
```