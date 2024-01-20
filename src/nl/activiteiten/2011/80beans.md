---
title: 'Bijeenkomst bij 80beans op 3 maart 2011'
date: 2011-03-03
eventdate: 2011-03-03
location:
categories:
    - meetup
---

3 maart was Fronteers te gast bij 80beans in Amsterdam. Vasilis van Gemert en Roy Tomeij gaven een presentatie.

Arjan Eising heet iedereen welkom en vertelt kort over Fronteers.

[Roy Tomeij](https://twitter.com/roy) vertelt over front-end meta languages. Een front-end meta language is een taal die compileert naar HTML, CSS of JavaScript, maar dat zelf niet zijn. Er is minder ruimte voor fouten, en het is overdraagbaar en onderhoudbaar.

Er bestaan meerdere meta talen, zoals Haml (voor HTML), Sass en Compass (voor CSS) en CoffeeScript (voor JavaScript).

Haml is in eerste instantie voor Ruby ontwikkeld, maar is nu ook geport naar andere talen zoals PHP. Alles is indent gebaseerd, dus je opent alleen, en het wordt automatisch gesloten. Een element begin je met een procentteken, en attributen met accolades. Output is naar keuze, je kunt dus makkelijk switchen tussen minified en volledige HTML.

Sass maakte eerst onderdeel uit van Haml. Net als Haml kun je switchen tussen minified en volledige uitvoer. Voordelen zijn dat je bijvoorbeeld variabelen kunt gebruiken. Mixins zijn herbruikbare stukjes code. Bijvoorbeeld voor `border-radius`, zodat je dit niet ook een vendor prefix mee hoeft te geven, maar slechts eenmalig in de top een functie definieert. Daarnaast kun je berekeningen uitvoeren. Bijvoorbeeld `darken(white, 50%)` levert `gray` op.

Compass is een collectie van mixins, en kan on-the-fly CSS sprites maken vanuit losse bestanden.

[Vasilis van Gemert](http://vasilis.nl) van [Mirabeau](http://mirabeau.nl) neemt het stokje over en houdt een presentatie over het maken adaptive layouts. Hij steekt af met [CSS Zen Garden](http://csszengarden.com), een site uit 2003 die CSS demonstreerde en diverse ontwikkelaars over de streep trok om CSS te gebruiken in plaats van tabellen voor layout.

De eerste flexibele layout werden gemaakt door fluid layouts, die met percentages en `em`'s werken. Ook gebruiken deze vaak `min`- en `max-width`.

Toen in 2007 de iPhone geïntroduceerd werd, kwam voor Vasilis het bestaan van media queries bekend. Toch duurde het nog tot 2010, toen Android geïntroduceerd werd, dat media queries echt door de grootte masse gebruik werd. Media queries kunnen conditioneel CSS toepassen, bijvoorbeeld als een scherm slechts 400 pixels breed is, dat er dan een slanker design getoond word.

De algemene gedacht is om te denken: mobile first.

Vasilis heeft in een weekeind de Flickr.com site aangepast voor mobiele devices. De zoekbalk valt op een andere plaats als het scherm minder breed is. En met `::before` worden teksten ingekort. De afbeeldingen zijn standaard in lage resolutie. Met een stukje JavaScript laadt hij de grotere afbeeldingen in.

# Overige materialen en verslagen

[Slides van de presentatie van Vasilis](http://vasilis.nl/presentaties/adaptive-layout/) (links op laatste slide)

# Aanwezigen

-   Sander Aarts
-   Isaac Andela
-   Patrick Beeker
-   Tibo Beijen
-   Lee Boonstra
-   Frank Bosma
-   Matijs Brinkhuis
-   Robbert Broersma
-   Elmer Bulthuis
-   Paul van Buuren
-   Steven Chim
-   Wiebe Cnossen
-   Siemen van Dijk
-   Dorien Drees
-   Kor Dwarshuis
-   Arjan Eising
-   Flurin Egger
-   Jules Ernst
-   Frank van Gemeren
-   Vasilis van Gemert
-   Wouter van der Graaf
-   Tom Greuter
-   Yomo Guiamo
-   Krijn Hoetmer
-   Marloes Hautmann
-   Mathijs de Jong
-   Peter-Paul Koch
-   Hay Kranen
-   Sander van Lambalgen
-   Harold Leewis
-   Edwin Martin
-   Bran van der Meer
-   Jeroen Mulder
-   Peter Nederlof
-   Vincent Oord
-   Marien van Os
-   Dennis Paagman
-   Jeroen Pulles
-   Thijs Reijgersberg
-   Bart Riemens
-   Ivana Setiawan
-   Galina Slavova
-   Bas Spoorenberg
-   Pascal Strijbos
-   Ruben Timmerman
-   Roy Tomeij
-   Vivienne van Velzen
-   Corné Verbruggen
-   Hidde de Vries
-   Roos van de Vooren
-   Frances de Waal
-   Joris Witteman
-   Peter van der Zee
