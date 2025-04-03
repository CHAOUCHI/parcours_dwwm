# Les APIs du JavaScript

Les APIs disponibles en JS dépendent de l'environnement d'execution du code JS.

> Environnement d'execution : le programme ou système qui execute le code.

Un environnement d'execution est aussi appelé "*runtime environnement*" ou juste *runtime*.

## Les environnements d'execution du JavaScript

Il en existe deux pour le JS: 
- **NodeJS** un programme codé en C++ qui utilise le moteur V8 (Google) pour intérpréter le code et donne accès à l'OS via des API.
- Un **navigateur web** qui va executer le code via un intépréteur et donner accès au navigateur via des APIs.

## NodeJS

https://nodejs.org/fr

De nombreuses API système analogue au API Linux du Langage C  sont disponible sous NodeJS comme : 
- FileSystem
- http
- Net
- Process
- OS

Grâce à son ensemble d'API, NodeJS permet à un developpeur JavaScript de coder a peu près n'importe quel application comme il est possible de le faire en Python. Les CLI des framework du web comme Angular ou NextJS sont d'ailleurs souvent codés en JavaScript et executé par nodejs.

Vous pouvez consulter la liste des API de nodejs ici : 
https://nodejs.org/docs/latest/api/

// TODO : insert schéma NetflixAuthService>NodeJS>Linux

Les API NodeJS forment l'épine dorsal du JavaScript coté serveur et de nombreuses sur-couche de ces APIs sont disponibles et installable via le Node Package Manager NPM.

## Les navigateurs web

Les API du navigateur sont également nombreuses en voici quelque une :
- DOM
- Fetch
- localstorage
- Canvas
- WebWorker
- Geolocalisation

Vous trouverez la liste des API du navigateur appelées *Web APIs* sur le site de mozilla developper network.

https://developer.mozilla.org/en-US/docs/Web/API

La liste est longue et constitue toutes les APIs disponible dans les navigateur web moderne. Il existe de petite API, comme le Battery API qui donne le niveau de batterie de l'appareil client, et des plus imposante et largement utilisé comme le DOM qui permet de modifier du HTML en JS. C'est d'ailleurs l'api DOM que vous apprendrez en premier.

## Conclusion
Pour devenir un developpeur JavaScript performant il vous faut apprendre la syntaxe et le fonctionnement du Langage puis un certain nombres d'API coté client (Browser) puis coté serveur (NodeJS).

Cette intorduction vous offira un départ coté back et front avec :
- la création de sites interatifs avec l'API *DOM* (coté client) 
- la création d'un serveur web HTTP capable de délivrer ces sites avec l'API *http* de NodeJS.