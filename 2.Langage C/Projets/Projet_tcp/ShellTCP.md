# Projet - Minishell
Le projet est divisé en deux parties.

1. Minishell, un shell qui permet d'executer les programmes du `$PATH` et quelque commandes en plus comme : `cd`, `ls`.
2. Créer un client TCP qui envoi les commandes tapez par l'utilisateur sur un serveur TCP. Ce serveur utilise le minishell pour executer les commandes tpaez sur le client puis envoi le résultat au client.

# Projet - Minishell

## Fonctionnalités

### Executer les commandes du $PATH
La variable `$PATH` contient une liste de dossier. Quand un utilisateur tape une commande le shell cherche si le programme est présent dans les dossier du $PATH et l'execute.

Par exemple `ls` se trouve dans `/bin`, et `/bin` se trouve dans `$PATH`.

Il n'est pas néccessaire de coder la recherche dans le `$PATH` car la fonction `execvp()` s'en charge.

#### `exevp()`
`execvp()` execute le programme donné en paramètre en fonction des dossier de `$PATH`.


### Changer le repertoire courant.

La commande cd peut être faite à la main avec l'appel système `chdir()`.

### L'historique
Si l'utilisateur tape sur flèche du haut il peut choisir ces commandes précedentes.

### && chain operator
Il doit être possible d'enchainer plusieurs commandes séparés par `&&`.

### | : Le pipe
Mettre en place le fonctionnement d'un PIPE. `|`

Voir cette article qui décrit le fonctionnement d'un pipe.
https://medium.com/@ravi.eticala/understanding-how-linux-pipe-works-9a5565ed26e9


Les pipes permettent de transferer une donnée d'un programme à un autre.

Par exemple pour un fichier todo.txt

``` 
- Faire les courses
- Faire le ménage
```

La commande 

```
cat todo.txt | grep "courses"
```

Affiche le résultat suivant

```
- Faire les courses
```

<!-- 
### & -->





## Cahier des charges
|Taches|Description|Contraintes|
|-|-|-|
|Executer une commande du PATH| ls, apt, etc ...|Il doit être possible de mettre un nombre dynamique d'arguments *(ls -a -l)*|
| Changer le répertoire courant|Concrètement coder le `cd` |
|Historique de commandes|
| Mise en produiction sur le VPS|


# Projet Minishell TCP

Créer un client TCP qui envoi les commandes tapées par l'utilisateur sur un serveur TCP. Ce serveur utilise le minishell pour executer les commandes tapez sur le client puis envoi le résultat au client.


En somme cela permet de controler un ordinateur à distance.