---
title: 'Webrichtlijn 84 en 85: Volgorde en groeperen van invoervelden'
date: 2009-05-12
author: Krijn Hoetmer
categories: 
  - Markup
  - Webrichtlijnen
---
Gebruik het tabindex attribuut om van de standaard tab-volgorde op formuliervelden af te wijken wanneer deze volgorde niet toereikend is voor correct gebruik van het formulier door toetsenbordgebruikers. ([R-pd.13.2](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/formulieren/toegankelijkheid/toetsenbord-navigatie/#r-pd-13-2)) Breng groepering van invoervelden aan door middel van het fieldset element. ([R-pd.13.3](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/formulieren/toegankelijkheid/invoervelden-groeperen/#r-pd-13-3))

Zoals de Webrichtlijnen al melden: "Gebruik het tabindex attribuut zo min mogelijk: de volgorde van de invoervelden in de HTML broncode bepaalt de standaard tabvolgorde. Deze is meestal toereikend." Het voorbeeld in [Webrichtlijn 52 & 53: Tabben tussen links](/blog/2008/09/webrichtlijnen-tabben) is misschien een uitzondering; zie ook de discussie bij die post. Is hierin ondertussen nog iets veranderd? Is `tabindex` niet alleen nog maar relevant voor webapplicaties die last hebben van divitis en ["toegankelijk" gemaakt moeten worden](http://www.w3.org/TR/wai-aria-practices/#keyboard "WAI-ARIA Best Practices - Keyboard and Structural Navigation")?

Interessanter is het groeperen van invoerelementen door middel van het `fieldset` element en het eventueel labelen van zo'n groep met het `legend` element.

Hoe vaak gebruik jij het `fieldset` element? Gebruik je dit bij ieder formulier, of alleen als een formulier aan bepaalde eisen voldoet? En doe je ook wel eens aan geneste `fieldset`s, zoals [hier op de site](/bijeenkomsten/planning#formulier-1), of is dat juist overkill?

Aangezien de Webrichtlijnen het niet als richtlijn opnemen en het valide is bij gebruik van een strict doctype (en conforming als je HTML 5 gebruikt): wanneer gebruik jij _wel_ een `fieldset`, maar _geen_ `legend`?

En omdat het stijlen van de `legend` soms "erg lastig" is, bieden de Webrichtlijnen je een alternatief: het gebruik van een _heading_ in plaats van een _`legend`_. Wat vind jij hiervan? Gebruik jij liever `legend`s of `h1`–`h6`? Tegen welke problemen loop jij aan? Zijn er niet genoeg tutorials die laten zien dat het wel kan, zoals [Fancy Form Design Using CSS](http://www.sitepoint.com/article/fancy-form-design-css/) dat doet?
