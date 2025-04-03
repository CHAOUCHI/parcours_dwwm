# File System - Accéder aux fichiers avec nodejs
L'API du file system Permet de créer,lire ou bien écrire dans des fichiers, les fichiers de l'ordinateur qui execute notre script. L'API file system de Node JS est récupérable via un import from fs. 

```js
import fs from "fs";
```


L'API file system permet également de créer, lire ou modifier les droits d'administration sur des dossiers ou des fichiers. Elle est donc très puissante. 

Nous nous limitons ici uniquement à la création, l'écriture ou la lecture de fichiers. 

## Lire un fichier

Pour lire un fichier, il nous faut un fichier à lire. Créez en donc un qui contient le texte. Bonjour tout le monde. 

```bash
touch mon_fichier && echo "Bonjour tout le monde" > mon_fichier
``` 

Votre projet devrait maintenant ressembler à ça :

```
projet_fs/
----app.js
----fichier
```

### fs.readFile()

La fonction readFile permet de lire un fichier. La lecture d'un fichier est considérée comme une opération qui prend du temps; readFile est donc une fonction asynchrone. C'est à dire une fonction dont le résultat est disponible en paramètres d'une fonction callback.

```js
import fs from "fs";

fs.readFile("fichier",(error,dataBuffer)=>{
    console.log("Fichier lu !");

});
```

- Le premier paramètre de readfile est le chemin vers le fichier ici la string `"fichier"`.
- Le 2nd paramètre de readFile est une fonction. Dont readFile nous fournira, en tant que paramètres :  `error` et `dataBuffer` des variables qui contiennent les éventuelles erreurs de lecture les données du fichier.

```js
import fs from "fs";

fs.readFile("fichier",(error,dataBuffer)=>{
    console.log("Fichier lu !",error);

    // error doit être null sinon affiche les messages d'erreur.
    console.assert(error === null,error?.message,error?.cause,error);

    console.log(dataBuffer); // Buffer des données
});
```

Le résultat doit être celui ci, une suite d'octet qui sont chacun un caractère de notre fichier.

```bash
Fichier lu ! null
<Buffer 42 6f 6e 6a 6f 75 72 20 74 6f 75 74 20 6c 65 20 6d 6f 6e 64 65 0a>
```

Je peux connaitre la taille de mon fichier et donc le nombres de caratères avec l'attribut length du buffer.

```js
import fs from "fs";

fs.readFile("fichier",(error,dataBuffer)=>{
    console.log("Fichier lu !",error);
    // Si error doit être null sinon affiche les messages d'erreur.
    console.assert(error === null,error?.message,error?.cause,error);
    console.log(`Mon fichier fait ${dataBuffer.length} caractères donc ${dataBuffer.length} octets !`);
    console.log(dataBuffer); // Buffer des données
});
```

Je peux même afffichier chaque octet et donc chaque lettre de mon fichier.

```js
import fs from "fs";

fs.readFile("fichier",(error,dataBuffer)=>{
    console.log("Fichier lu !",error);
    // Si error doit être null sinon affiche les messages d'erreur.
    console.assert(error === null,error?.message,error?.cause,error);
    console.log(dataBuffer); // Buffer des données
    dataBuffer.forEach(octet=>{
        console.log(octet);
    });
    console.log(`Mon fichier fait ${dataBuffer.length} caractères donc ${dataBuffer.length} octets !`);
});
```

### Lire un fichier texte

Pour lire les données du fichier comme une string je doit utiliser la fonction dataBuffer.toString().

```js
import fs from "fs";

fs.readFile("fichier",(error,dataBuffer)=>{
    console.assert(error === null,error?.message,error?.cause,error);

    console.log(dataBuffer.toString());
});
```

```
Bonjour tout le monde
```

Je peux aussi changer l'encoding en ajoutant des options en 2nd paramètre de readFile

```js
import fs from "fs";

fs.readFile("ffichier",{encoding:"ascii"},(error,data)=>{
    console.assert(error === null,error);

    console.log(data) // Bonjour tout le monde

});
```

### Lire un fichier JSON

1. Créez ce fichier nommée *fruits.json*

```json
[
    {
        "nom": "pomme",
        "couleur": "rouge",
        "saison": "automne"
    },
    {
        "nom": "cassis",
        "couleur": "noir",
        "saison": "été"
    },
    {
        "nom": "framboise",
        "couleur": "rouge",
        "saison": "été"
    }
]
```
Pour lire un fichier json, il faut lire un fichier contenant du json. Le contenu d'un fichier JSON n'est qu'un texte. 

Il faut donc décoder le fichier en UTF-8 le format qui permet les emojis et tout les types de caractère accepté sur le web.

Les données reçues sont une chaîne de caractères. `data`Comme pour la lecture d'un fichier texte. 

J'utilise la fonction `JSON.parse` Pour transformer les données texte json En une véritable variable javascript nommée `fruits`. 

Pour chacun des fruits j'affiche ensuite son nom et sa couleur.

```js
import fs from "fs";


fs.readFile("fruits.json",{encoding:"utf8"},(error,data)=>{
    console.assert(error === null,error);

    const fruits = JSON.parse(data);

    fruits.forEach(fruit => {
        console.log("Je suis une",fruit.nom,"de couleur",fruit.couleur);
    });

});
```

```
Je suis une pomme de couleur rouge
Je suis une cassis de couleur noir
Je suis une framboise de couleur rouge
```

## Ecrire dans un fichier

## Ecrire du texte

```js
import fs from "fs";

const texte = `Salut tout le monde !!`;

fs.writeFile("fichier",texte,(error)=>{
    console.assert(error===null,error);
});
```

### Ecrire du json
```js
import fs from "fs";
const fruits = ["pomme","cassis","framboise"];

fs.writeFile("fichier.json",JSON.stringify(fruits),(error)=>{
    console.assert(error===null,error)
});

```

### Ecrire un fichier binaire - Enregistrer un fichier

Pour montrer comment enregister un fichier nous allons codé une petite commande de copié-collé.

Pour enregistrer un fichier il suffit d'écrire chacun de ses octets dans un autre fichier. Nous avons donc tous les outils pour réaliser cette tâche. 

Pour écrire dans un fichier, il faut utiliser la fonction fs.writeFile. Pour lire le fichier à écrire, il nous suffit d'utiliser la fonction fs.readFile. 

Voici un programme rudimentaire de copie de fichier.

*copy-paste.js*
```js
import fs from "fs";
import path from "path";
import { argv, exit } from "process";

const FILE_PATH_ARGV_INDEX = 2;

console.log("argv", argv);

if (argv.length < FILE_PATH_ARGV_INDEX + 1) {
    console.error("ERROR : File_path missing");
    console.info("node copy-paste.js /chemin/vers/mon/fichier");
    exit(-1);
}

const file_path = argv[FILE_PATH_ARGV_INDEX];

fs.readFile(file_path, (error, dataBuffer) => {
    console.assert(error === null, error);

    const new_file_name = `${file_path + Date.now().toString()}`;

    fs.writeFile(new_file_name, dataBuffer.toString(), (error) => {
        console.assert(error === null, error);

        console.log(`New file created : Successfully  ${new_file_name} !`)
    });
});
```

```bash
node copy-paste.js fichier
```

> Vérifiez bien que fichier existe avant de lancer le programme sinon il plantera.

## Lire un dossier

Pour lire dans un dossier il faut utiliser la fonction `fs.readdir()`. 

```js
import fs from "fs";

fs.readdir("mon_dossier",(error,files)=>{
    console.log(error);

    console.log(files); // J'affiche le nom des fichiers

});
```