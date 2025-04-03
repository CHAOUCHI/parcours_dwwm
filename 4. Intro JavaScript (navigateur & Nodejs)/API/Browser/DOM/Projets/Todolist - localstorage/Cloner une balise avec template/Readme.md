# Template

Il est possible de cloner une balise avec la fonction cloneNode.

Si vous avez une page très dynamique il est utile de connaitre la balise template qui permet de préparer une balise sans l'afficher pour pouvoir la cloner à volonté.

```html
<h1> Mon site </h1>

<template>
    <div class="item">
        <img/>
        <p></p>
    </div>
<template>
<script>
// Je récupère le template
const template document.querySelector("template");

// Je le clone
const clone1 = template.content.cloneNode(true);
const clone2 = template.content.cloneNode(true);

// Je prépare mes balises à ma convenance
clone1.querySelector("p").textContent = "clone1";
clone2.querySelector("p").textContent = "clone2";

// Je les affiches à l'écran
document.body.appendChild(clone1);
document.body.appendChild(clone2);

</script>
```

Vous trouverez un exemple plus complet dans le dossier démo.