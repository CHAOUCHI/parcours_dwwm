# Java

Java est un langage de programmation orienté objet multiplateforme. Java est un langage de programmation parfaitement adapté à un projet qui doit respecter des normes très strictes Il est fortement typé et fortement orienté objet. Ce qui signifie que en Java, il va falloir typer toutes ces variables et que la création de n'importe quel objet signifie également la création d'une classe obligatoirement. 

On peut donc dire que Java est un langage plutôt strict, et donc également très stable. 

## Cross-Palteforme
Java est un langage qui multiplateforme ou cross plateforme car le code Java n'est pas exécuté directement par le Processeur via des instructions assembleurs comme les autres langages compilés. 

En effet, votre code Java, c'est à dire un fichier point Java, est d'abord compilé par le compilateur Java en bytecode. Puis la machine Virtual Java va Interprétez vos bytecode comme le ferait un processeur pour l'assembleur. 

La machine virtuelle Java est installable sur les machines Windows, Linux ou Mac, est donc disponible sur toutes les plateformes. Voilà pourquoi Java et Cross Platform.

Vos programmes Java ne seront donc jamais des exécutables à proprement parler, mais plutôt un code bytecode interprétable par la Java Virtual machine.

Java est donc un langage à la fois compilé et interprété. 

- Compiler car le Java compiler transforme votre code Java en bytecode.

- Interprété parce que la JVM, la Java Virtual machine va interpréter votre bytecode ligne par ligne et exécuter votre programme. 

Le code Java n'est donc pas directement en lien avec les appels système Linux par exemple, et il faudra utiliser des API officielles Java ou des API externes pour arriver à vos fins. 

Java est également un des langages de programmation avec le plus de documentation et d'a PI disponible. Vous pourrez littéralement démarrer votre carrière Java aujourd'hui et ne jamais vous arrêter jusqu'à la fin de votre carrière sans jamais ou presque avoir besoin d'un autre langage de programmation.

## Pré-requis

- JRE : Java a une taille environnement le programme qui exécute votre bytecode. 
- JDK : Java Development kit Le programme contenant le compilateur Java et l'ensemble des API standard du langage Java. 

### Installer Java (JDK + JRE)

#### 1. Installer sdkman!

Si vous êtes dans un environnement unique, s'il existe un programme nommé `SDKMAN!` qui vous permet de facilement gérer l'installation de Java et de toutes ces dépendances JDK et JRE.  Ce programme permet également de facilement switcher entre les différentes versions de Java Et éviter les conflits.

http://sdkman.io/


1. Installer sdkman
```bash
curl -s "https://get.sdkman.io" | bash
```

2. Une fois le SDKMAN installer il vous affichera la commande source à executer l'initalisation de sdkman et finaliser l'installation. **FAITE LE ET LISEZ BIEN LE RESULTAT DE LA COMMANDE PR2CEDENTE**

3. Faite la commande suivante pour connaitre les commande de bases de sdk:
``` bash
sdk help
``` 

#### 2. Installer Java
Installer la dernière version de Java avec la commande suivante :
```bash
sdk install java
```

Voilà, nous avons à présent tout ce qu'il nous faut pour faire du Java. Le compilateur, la machine virtuelle, tout.

## Hello World

### Ecrire le code source Main.java

1. Créez un fichier dans mes mains. Java dans un dossier vide et écrivez-y le code suivant. 

```java
class Main{

    public static void main(String[] args){

        System.out.println("Hello World !");
        
    }
}
```

Java est un langage strictement orienté objet. Ignorez donc les mots clés publiques et statiques pour l'instant. 

```java
public static void main(String[] args)
```

Dis tout simplement que la fonction main de la classe Main est l'entrée de notre programme. 

Qu'elle prend en paramètre les arguments de la ligne de commande comme ARGV en langage C.

Ici, notre programme n'est composé que d'une seule instruction, l'appel de la fonction println.

```java
System.out.println("Hello World !");
```

En Java, tout est forcément contenu dans un objet. Par conséquent, la fonction **println** n'est pas vraiment une fonction, mais plutôt une **méthode**.

Une méthode est une fonction qui appartient à un objet.Ici, la méthode `println` appartient à l'objet `out` qui lui même appartient à l'objet `System`. 

L'objet `System` est un objet très utilisé en Java, on l'appelle également l'API `System`.

> L'objet out contenu n'est qu'une encapsulation du fichier stdout qui, sous Linux, permet d'écrire dans le terminal.

### Compiler le code source

1. Compiler le code source avec javac, le compilateur Java. 

```bash
javac Main.java
```

Un fichier `Main.class` a normalement été créé. C'est ce fichier qui sera exécuté. 

### Executer le programme

Enfin, exécutez votre programme avec la commande Java, suivi du nom de votre fichier exécutable.

```bash
java Main
```

```
Hello World !
```

> Attention, il ne faut pas préciser, `.class` dans le nom du fichier lorsque vous appelez votre programme avec Java.
