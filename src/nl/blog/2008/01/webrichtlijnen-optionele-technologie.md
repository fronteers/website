---
title: Webrichtlijn 3: Niet rekenen op optionele technologie (R-pd.1.3)
date: 2008-01-15
author: Krijn Hoetmer
categories: 
  - Markup
  - Scripting
  - Styling
  - Webrichtlijnen
---
Maak de functie van de website niet afhankelijk van optionele technologie, zoals CSS en client-side script: optionele technologie dient de informatie op de site en het gebruik ervan te complementeren en niet de toegang ertoe te belemmeren wanneer deze technologie niet ondersteund wordt. ([R-pd.1.3](http://webrichtlijnen.overheid.nl/handleiding/ontwikkeling/productie/filosofie/gelaagd-bouwen/optionele-technologie/#r-pd-1-3))

Volgens de richtlijn zijn er uitzonderingen. Ben jij het met die uitzonderingen eens?

Hou je rekening met het feit dat afbeeldingen uit kunnen staan? En dan niet met betrekking tot [het `alt` attribuut](http://annevankesteren.nl/2004/12/alt-attribute), maar met oog op `image replacement` technieken (`text-indent: -9999px; background-image: url(foo.png);` bijvoorbeeld). Hoe ver ga je?

Voeg jij HTML met functionaliteit waar JavaScript voor vereist is altijd toe met JavaScript zelf? Of maak je soms een uitzondering? In welke gevallen?

Wanneer adviseer je klanten of opdrachtgevers trouwens [om de hele site opnieuw te (laten) bouwen](http://webrichtlijnen.overheid.nl/handleiding/ontwikkeling/productie/filosofie/gelaagd-bouwen/site-aanpassen/)?
