---
title: Webrichtlijn 67 &amp; 68: Richtlijnen voor het gebruik van CSS
date: 2008-12-09
author: Krijn Hoetmer
categories: 
  - Styling
  - Webrichtlijnen
---
CSS dient in gelinkte bestanden geplaatst te worden en niet gemengd te worden met de HTML broncode. ([R-pd.9.1](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/css/richtlijnen/#r-pd-9-1)) Pagina's dienen bruikbaar te blijven wanneer CSS door een webbrowser niet ondersteund wordt. ([R-pd.9.2](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/css/richtlijnen/#r-pd-9-2))

Wanneer vind jij dat je CSS wel mag mengen met HTML? Met andere woorden; wanneer zijn `<style>` (zonder `@import`) en `style=""` verdedigbaar?

Wat gebruik je liever; `<link rel="stylesheet" href="foo.css">` of `<style>@import url('foo.css');</style>`? Of ontwijk je `@import` vanwege [een andere regel](http://developer.yahoo.com/performance/rules.html#csslink)?

Hoe vaak test jij gemaakte templates of sites terwijl stylesheets uit staan? Welke tools gebruik je daarvoor? En waar let je dan op?

Gebruik jij trouwens nog steeds CSS hacks en/of filters om bijvoorbeeld Netscape en IE5 voor de Mac te ontzien? Of vinden we IE6 en IE7 met een paar conditional comments tegenwoordig al genoeg extra werk?

De webrichtlijnen maken er geen richtlijn van, maar [print stylesheets](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/css/technieken/printen/) (`rel="stylesheet" media="print"` dus) worden wel genoemd. Gebruiken we die ondertussen ook allemaal? En vind je dan dat alle pagina's perfect printbare equivalenten moeten hebben, of is het voor sommige pagina's (zoals een homepage) minder belangrijk? Hoe bepaal je trouwens hoe je de print stylesheet opzet? In hoeverre wordt hier (ook) een design voor gemaakt en over nagedacht?

En om af te sluiten met een flauw puntje: [tabellen voor lay-out](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/css/technieken/css-vs-tabellen/). Hoe vaak heb jij zin om het [op te geven](http://giveupandusetables.com/)? ;)
