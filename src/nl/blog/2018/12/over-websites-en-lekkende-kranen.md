---
title: "Over websites en lekkende kranen"
date: 2018-12-11
author: Josee Wouters
categories: 
  - Adventskalender
---
Bij de loodgieter thuis lekt de kraan. Het kind van de dokter is altijd ziek. De schoenmaker loopt op versleten schoenen. Wat heeft het Nederlands [veel spreekwoorden](https://twitter.com/onzetaal/status/1012230346912534528) die allemaal ongeveer op hetzelfde neerkomen. Het is dan ook geen wonder waarschijnlijk dat dit voor veel front-enders ook opgaat. Voor anderen de mooiste dingen bouwen, maar de eigen website is vaak een ondergeschoven kindje.

Mijn eigen website is ook zo’n lekkende kraan. In de loop der jaren heb ik er heel wat versleten. Van ‘plain old HTML’ naar Wordpress (en verschillende flirts met andere CMS’en) en uiteindelijk kwam ik toch weer uit bij ‘plain old HTML’. Makkelijk, snel, geen concessies hoeven doen voor een CMS en precies zo te perfectioneren als ik zelf wil. Het enige nadeel: ‘even’ een blogpost maken of andere dingen aan de site updaten, zijn toch wat meer werk dan ik zou willen. Met als gevolg dat mijn website precies aan het rijtje spreekwoorden toegevoegd kan worden. Daar baalde ik eigenlijk een beetje van.

Ik had weleens van het wonder van static site generators gehoord, maar ook dat leek mij niet de heilige graal, tot ik van het bestaan van Netlify leerde. Een commit maken naar Github en de website wordt geüpdatet? Te mooi om waar te zijn, dacht ik. Maar toch de moeite waard om eens naar te kijken. Ik neem je mee in mijn persoonlijke werkwijze. Als je wilt, kun je via [mijn Github](https://github.com/JoseeWouters/Josee-Wouters) meekijken.

# Stap 1 - Een static site generator uitkiezen

Mijn startpunt hiervoor was [https://www.staticgen.com/](https://www.staticgen.com/). Ik had een keer eerder met Nuxt.js gewerkt - het bood toen precies de extra opties die ik met Vue.js wilde gebruiken - maar ik wilde niet direct hiervoor kiezen zonder andere opties te overwegen. Jekyll werkt met Ruby en Liquid, Hugo met Go en Gatsby met React. Nuxt.js is een framework voor Vue.js applicaties. Omdat ik Vue.js geweldig vind, wilde ik daar graag mee werken. Het werd dus toch Nuxt.

# Stap 2 - de eerste opzet met Nuxt

Je kunt een Nuxt project op twee manieren starten: via npm kun je een een default applicatie opstarten of je kunt ‘from scratch' beginnen door een package.json te maken. Ik koos voor deze laatste optie.

```
{
  "name": "joseewouters",
  "scripts": {
    "dev": "nuxt",
    "generate": "nuxt generate"
  }
}
```

Het command `generate` staat niet genoemd in het voorbeeld bij Getting Started op de website van Nuxt.js, maar dit is wel nodig. Anders zul je een error krijgen bij het builden van de website en bij Netlify. Verder kun je wel de stappen volgen die op de website staan.

Behalve het aanmaken van een pages directory heb ik een aantal andere die ik meteen heb toegevoegd. Mijn structuur ziet er als volgt uit:

```
- assets
- - css
- components
- - app
- - icons
- layouts
- pages
- - blog
- static
- - media
- - - images
```

Een aantal dingen van mijn aanpak wil ik uitlichten.

## Icons

Ik gebruik graag de icons van FontAwesome, maar ik laad liever niet alles in. Daarom sla ik de icons die ik wil gebruiken op in components/icons. Hier heb ik bijvoorbeeld een file iconGithubSquare.vue. Binnen de `template` tags plaats ik de svg code.

In components/app staan de files voor onder andere de header en footer.  Hierin kan ik nu eenvoudig mijn custom icons aanroepen. In AppHeader.vue importeer ik het icon als volgt:

```
<script>
import iconGithubSquare from '@/components/icons/iconGithubSquare.vue'
export default {
    components: { 
            iconGithubSquare
    }
}
</script>
```

Zodat ik vervolgens in mijn HTML het icon kan gebruiken met `<icon-github-square/>`.

## Blog

Nuxt.js zorgt er automatisch voor dat de vue-router geconfigueerd wordt, op basis van de files binnen pages. Mijn blogs bevinden zich daarom allemaal in pages/blogs. Daarbinnen maak ik voor elke blog een nieuwe folder. Bevat de desbetreffende blog afbeeldingen, dan zet ik deze hier ook in, zodat ik alles bij elkaar houd. pages/blog/hello-fronteers/index.vue wordt automatisch /blog/hello-fronteers.

Ik schrijf mijn blogs in markdown. Nuxt.js ondersteunt het niet out-of-the-box en het staat ook niet beschreven op de website, maar door het toevoegen van een module kun je het wel beschikbaar maken. Dit doe je door `@nuxtjs/markdownit` met npm of yarn aan je project toe te voegen en vervolgens deze in `nuxt.config.js` te plaatsen. Heb je het project net als ik zelf opgezet, dan moet je deze file nog aanmaken in de root.

```
module.exports = {
    modules: [
        '@nuxtjs/markdownit'
    ]
}
```

Vervolgens kun je in een .vue file aangeven dat je markdown wilt schrijven met:

```
<template lang="md">
</template>
```

## Layouts

Voor ik mijn website wil proberen te deployen met Netlify wil ik nog een layout maken. Ik heb zoals gezegd in components/app een aantal files, waaronder de header en footer. Doordat je deze elementen in een layout file importeert, mag een file niet header.vue heten.

In layouts heb ik vervolgens mijn home.vue en blog.vue. Zo heb ik twee templates tot mijn beschikking, een blogpagina en een homepagina.

Mijn home ziet er zo uit:

```
<template>
    <div class="wrapper">
        <app-header/>
        <nuxt/>
        <app-footer/>
    </div>
</template>

<script>

import appHeader from '@/components/app/appHeader.vue'
import appFooter from '@/components/app/appFooter.vue'

export default {
    components: {
            appHeader,
            appFooter
    }
}
</script>
```

Het `<nuxt/>` component wordt alleen in layout files gebruikt om de content te tonen van de pagina, bijvoorbeeld je index.vue.

Om deze layout nu te gebruiken op een pagina, geef je dit eenvoudig aan in het desbetreffende file door middel van:

```
<script>
export default {
    layout: 'home'
}
</script>
```

# Stap 3 - Netlify

Ik kan nu blogs schrijven in markdown en ik heb een layout waar deze in getoond worden. Klaar voor de volgende stap: het live brengen van de website. Om eerlijk te zijn, had ik hier van tevoren niet zoveel vertrouwen in. Dingen als 'zo gedaan' en 'maar een paar stappen' blijken vaak meer werk dan websites beloven, is mijn ervaring.

Ik volgde de stappen: Registreren bij Netlify met Github, de juiste repository kiezen, een paar build settings en klaar! Nou, niet helemaal. Ik kreeg een foutmelding. Ik had de package.json opgenomen in .gitignore. Niet zo slim, maar snel hersteld. En wonderlijk genoeg, werkte het nu meteen. Zodra ik de commit maakte, ging Netlify bijna direct aan de slag met opnieuw builden en hoogstens een paar minuten later stond mijn website live.

Om een wijziging te maken, heb ik er bijna geen omkijken meer naar: ik maak een nieuwe commit en Netlify doet de rest zelf.

# De lekkende kraan

Ik geef het niet graag toe, maar mijn website is eigenlijk nog steeds een lekkende kraan. Ik wil nog een keer uitgebreid gaan kijken naar de toegankelijkheid van mijn website, ik wil ervoor zorgen dat nieuwe blogs automatisch in de lijst op de homepage verschijnen en stiekem doet de website het niet zo goed in IE11. Het lijstje met nice-to-have's en need-to-have's is lang. Maar deze werkwijze van Nuxt en Netlify zorgt er voor mij wel voor dat ik makkelijker en sneller even een kleine wijziging kan maken. Ik heb hoop dat het nog wel wat wordt met die kraan.

# Meer weten:

* [https://nuxtjs.org/](https://nuxtjs.org/)
* [https://www.netlify.com/](https://www.netlify.com/)
* [https://github.com/JoseeWouters/Josee-Wouters](https://github.com/JoseeWouters/Josee-Wouters)
* [https://fronteers.nl/workshops/workshop-netlify-static-site-generators](https://fronteers.nl/workshops/workshop-netlify-static-site-generators)

### Over Josee Wouters
<img src="/archief/_img/adventskalender/josee-square.jpg" alt="Foto van Josee" class="floating-portrait">
Front-end developer en vrijwilliger bij Fronteers. Werkt naast haar reguliere werk ook freelance en heeft in haar vrije tijd een app genaamd What Dinner? gemaakt. Programmeert ook graag met Arduino.

Donatie: Nationaal Fonds Kinderhulp
Kinderhulp vindt dat in Nederland armoede geen reden mag zijn dat kinderen worden buitengesloten. Kinderhulp wil ervoor zorgen dat alle kinderen er gewoon bij kunnen horen.
