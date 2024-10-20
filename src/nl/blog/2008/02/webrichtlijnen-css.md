---
title: 'Webrichtlijn 9: Cascading Style Sheets (CSS) Level 2.1'
date: 2008-02-19
author: Krijn Hoetmer
categories: 
  - Styling
  - Webrichtlijnen
---
Gebruik CSS Level-2.1 volgens de W3C specificatie voor het vormgeven van overheidswebsites. ([R-pd.2.6](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/webstandaarden/css2-1/#r-pd-2-6))

Eindelijk 'ns wat anders dan dat geneuzel over markup :) Laten we het eens gaan hebben over de presentatie van een website; Cascading Style Sheets.

De [voordelen van CSS](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/css/voordelen/) zijn voor iedereen ondertussen waarschijnlijk wel bekend, maar het is niet verkeerd om ze nog eens door te nemen.

[CSS Level 3 wordt afgeraden](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/css/richtlijnen/#css-3), dus volgens de richtlijn mogen we alleen de volgende selectors gebruiken:

* [`*`](http://www.w3.org/TR/CSS21/selector.html#universal-selector)
* [`E`](http://www.w3.org/TR/CSS21/selector.html#type-selectors)
* [`E F`](http://www.w3.org/TR/CSS21/selector.html#descendant-selectors)
* [`E > F`](http://www.w3.org/TR/CSS21/selector.html#child-selectors)
* [`E:first-child`](http://www.w3.org/TR/CSS21/selector.html#first-child)
* [`E:link`](http://www.w3.org/TR/CSS21/selector.html#link-pseudo-classes)
* [`E:visited`](http://www.w3.org/TR/CSS21/selector.html#link-pseudo-classes)
* [`E:active`](http://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)
* [`E:hover`](http://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)
* [`E:focus`](http://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)
* [`E:lang(c)`](http://www.w3.org/TR/CSS21/selector.html#lang)
* [`E + F`](http://www.w3.org/TR/CSS21/selector.html#adjacent-selectors)
* [`E[foo]`](http://www.w3.org/TR/CSS21/selector.html#attribute-selectors)
* [`E[foo="warning"]`](http://www.w3.org/TR/CSS21/selector.html#attribute-selectors)
* [`E[foo~="warning"]`](http://www.w3.org/TR/CSS21/selector.html#attribute-selectors)
* [`E[lang|="en"]`](http://www.w3.org/TR/CSS21/selector.html#attribute-selectors)
* [`DIV.warning`](http://www.w3.org/TR/CSS21/selector.html#class-html)
* [`E#myid`](http://www.w3.org/TR/CSS21/selector.html#id-selectors)

Wie gebruikt er al [selectors uit CSS Level 3](http://www.w3.org/TR/css3-selectors/#selectors)? Wat zijn daarbij je ervaringen?

Hoe ga je om met IE-only stijlen als `zoom: 1;` en `filter: alpha(opacity=25);`? Gebruik je die gewoon, ondanks dat ze niet in de standaard zijn opgenomen? Dezelfde vraag natuurlijk voor `word-wrap: break-word;`, `-moz-opacity`, `-o-background-size` en andersoortige eigenschappen die je niet weg kunt moffelen achter een [conditional comment](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/css/richtlijnen/ondersteuning-browsers/#conditional-comments).

En kan iedereen zich trouwens vinden in de [drie groepen browsers](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/css/richtlijnen/ondersteuning-browsers/#drie-groepen-browsers) die de Webrichtlijnen onderscheidt?

Zien we deze richtlijn als een beperking? Of als een handvat waar we wat aan hebben? Wanneer vind jij dat CSS Level 3 of modules daarvan ook toegestaan mogen worden?
