# Template

Il est possible de cloner une balise avec la fonction cloneNode.

Si vous avez une page très dynamique il est utile de connaitre la balise `template` qui permet de préparer une balise sans l'afficher pour pouvoir la cloner à volonté.

***Vous trouverez un exemple plus complet dans le dossier démo.***

```html
<h1> Mon site </h1>

<template>
    <div class="item">
        <img src="http://unsplash.com/100/100"/>
        <p></p>
    </div>
<template>
<script>
// Je récupère le template
const template document.querySelector("template");

// Je le clone
const cloneItem1 = template.content.cloneNode(true);
const cloneItem2 = template.content.cloneNode(true);

// Je prépare mes balises à ma convenance
cloneItem1.querySelector("p").textContent = "clone1";
cloneItem2.querySelector("p").textContent = "clone2";

// Je les affiches à l'écran
document.body.appendChild(cloneItem1);
document.body.appendChild(cloneItem2);
</script>
```
