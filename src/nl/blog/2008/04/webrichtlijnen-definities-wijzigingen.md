---
title: Webrichtlijn 19, 20 &amp; 21: Tekstopmaak, definities, wijzigingen, superscript en subscript
date: 2008-04-08
author: Krijn Hoetmer
categories: 
  - Markup
  - Webrichtlijnen
---
Gebruik het dfn (definition) element voor het aangeven van termen, elders gedefiniëerd in een definitielijst. ([R-pd.3.7](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/beschrijvende-markup/het-schrijven-van/tekstopmaak/#r-pd-3-7)) Gebruik het ins (insertion) en del (deletion) element voor het aangeven van regelmatige wijzigingen in de inhoud van een pagina. ([R-pd.3.8](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/beschrijvende-markup/het-schrijven-van/tekstopmaak/#r-pd-3-8)) Vermijd het gebruik van het sup (superscript) en sub (subscript) element waar mogelijk. ([R-pd.3.9](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/beschrijvende-markup/het-schrijven-van/tekstopmaak/#r-pd-3-9))

Even vlug door de laatste 3 richtlijnen van tekstopmaak heen, wat natuurlijk niet wil zeggen dat de discussie hierover ook kort moet zijn!

## Definities

Wat betreft het `<dfn>` element zijn de webrichtlijnen lekker summier:

> Termen die geschikt zijn voor opname in een definitielijst of glossary elders op de pagina of website, kan worden opgemaakt met het dfn (definition) element.

_Wie_ doet dit? En wat heb je eraan als je het doet?

## Wijzigingen

> Als de informatie op een pagina aan regelmatige wijziging onderhevig is en het belangrijk is dat deze wijzigingen als zodanig zichtbaar zijn, gebruik dan het ins (insert) element voor toevoegingen en het del (deletion) element voor verwijderingen.

Dit betekent dus dat een automatische [`diff`](http://en.wikipedia.org/wiki/Diff) met `<ins>` en `<del>` elementen niet per se goed is. Of niet?

Op welke site heb jij markup voor wijzigingen in proza wel eens goed toegepast gezien?

En heb jij deze twee elementen wel eens oneigenlijk gebruikt om een validerende pagina op te leveren? Opeens "mag" dit dan:

```
<a href="#foo">
 <ins>
  <div>
   <h3>Foo</h3>
   <p>Bar</p>
  </div>
 </ins>
</a>
```

## Superscript en subscript

Hierin zijn de webrichtlijnen wel duidelijk: probeer `<sup>` en `<sub>` te vermijden. Zijn we het daar mee eens? Zijn dit gevaarlijke elementen?
