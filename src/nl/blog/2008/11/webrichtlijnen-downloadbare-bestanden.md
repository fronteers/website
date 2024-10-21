---
title: 'Webrichtlijn 63 t/m 66: Links naar downloadbare bestanden'
date: 2008-11-18
author: Krijn Hoetmer
categories: 
  - Webrichtlijnen
---
Bij het aanbieden van downloadbare bestanden, informeer de bezoeker over hoe deze te downloaden en vervolgens te gebruiken. ([R-pd.8.20](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/links-navigatie/downloadbare-bestanden/#r-pd-8-20)) Serveer bestanden met het correcte MIME type. ([R-pd.8.21](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/links-navigatie/downloadbare-bestanden/#r-pd-8-20)) Open links naar downloadbare bestanden niet in een automatisch nieuw venster. ([R-pd.8.22](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/links-navigatie/downloadbare-bestanden/#r-pd-8-22)) Serveer downloadbare bestanden niet met opzet een onbekend of incorrect MIME type om de browser tot een bepaald gedrag te dwingen. ([R-pd.8.23](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/links-navigatie/downloadbare-bestanden/#r-pd-8-23))

Hoe informeer jij bezoekers over bijvoorbeeld het type en de grootte van het bestand? Doe je dit middels het `title` attribuut, of tussen haakjes? En wat is in dat laatste geval handiger? De uitleg _in_ de link, of _na_ de link? Gebruik je voor het type van het bestand ook het [`type` attribuut](http://www.whatwg.org/specs/web-apps/current-work/multipage/structured-client-side-storage.html#attr-hyperlink-type), of gaat dat te ver?

Bij wie ligt volgens jou de verantwoordelijkheid voor correcte MIME-types? Hoort dit thuis in een CMS, bij de back-end ontwikkelaars of moet dit vastliggen in de serverconfiguratie? Dit zou een makkelijk te wijzigen lijstje met variabelen moeten zijn, maar waarom is dit zo vaak een probleem? Ligt dit aan (verouderde) software op de server, of aan onwetendheid bij een bepaalde partij? Hoe ga je hier mee om?

Links naar downloads niet laten openen in een nieuw venster is een duidelijke richtlijn, maar waarom moeten we voorkomen dat plugins in een browser het bestand ook _in_ de browser openen? We mogen toch aannemen dat gebruikers hiervoor bewust gekozen hebben bij het installeren van een plugin? Of dat browser bouwers hier wat onderzoek naar gedaan hebben, voordat ze tijd en energie staken in het ontwikkelen van een plugin-architectuur? De `Content-disposition: attachment` opmerking leidt nog net niet tot een richtlijn, maar hoe kan het dat zoveel mensen het _niet_ prettig vinden als een bestand in de browser geopend wordt, terwijl dit wel de standaard instelling is?

En bij welk type bestand trekken we de grens? Waarom zou je JPG'jes wel in je browser laten openen, maar PDF'jes niet? Als browsers straks zelf video's af kunnen spelen, worden ze dan gezien als downloads, of niet?
