---
title: Valkuilen van toegankelijke componenten
date: 2022-12-02
author: Erik Kroes
summary: 'Al zijn je bouwblokken (componenten) nog zo mooi, je kan er nog steeds verkeerd mee bouwen!'
categories:
- Adventskalender
---
Al zijn je bouwblokken (componenten) nog zo mooi, je kan er nog steeds verkeerd mee bouwen!

Steeds vaker zie je dat componenten claimen toegankelijk te zijn. Dat klinkt goed: componenten die voor iedereen te gebruiken zijn, ook voor mensen met beperkingen! Wat zo’n claim precies inhoudt is niet altijd duidelijk. Daarnaast geeft het je als bouwer ook geen garanties. Je kan er nog steeds een zooitje van maken!

Wat kan er zoal misgaan? We bekijken een aantal veel voorkomende valkuilen.

# Waar zijn componenten goed voor?

Componenten zijn geweldig voor alles wat je meer dan één keer moet doen. Je wil niet telkens je button of link opnieuw ontwerpen en bouwen. Dat is zonde van je tijd. Liever bouw je één versie die heel goed is, en dan kun je die hergebruiken. Waarom vaak iets half bouwen, als je ook al die tijd in één hele goede versie kan steken? Die ene versie kun je dan testen met verschillende browsers, mobiel, met screen readers en hopelijk zelfs met echte gebruikers!

Wat je dan ook meteen krijgt is consistentie. Daar maak je iedereen blij mee! Denk bijvoorbeeld aan een focus-state die overal hetzelfde is. Dat scheelt een hoop denkwerk.

![Een plastic speelset geplaatst op de dakrand van een flat.](/_img/adventskalender/toepassing-blog-erik-full.png)

*Het zit hem helemaal in de toepassing.*

### Pagina-specifiek: content

De ene pagina is de andere niet. En juist in de onderdelen die variëren kan het natuurlijk alsnog verkeerd gaan.

## Content

Een beetje een inkoppertje misschien maar goed om bewust van te zijn. Voor elke pagina schrijf je content. Die moet toegankelijk zijn. Hierbij kun je denken aan het vermijden van complex taalgebruik, en het vermijden van omschrijvingen op basis van specifieke zintuigen (zoals een “open de rode link” of “de tekst rechts hiervan”).

Content gaat ook verder dan paragraafjes en tekstblokjes. Vergeet niet je alternatieve teksten voor afbeeldingen, of captions en transcripties voor andere media-bestanden.

## De paginatitel

Laat deze zoveel mogelijk overeen komen met de belangrijkste heading op je pagina (de `<h1>`) en de namen van de links die naar de pagina verwijzen. Als er herhalende delen in de titel zitten (zoals de naam van de website) plaats die dan zoveel mogelijk naar achter in de titel. Dit maakt scannen (ook met screen readers) makkelijker. Het unieke en onderscheidende deel komt vooraan.

Je krijgt in een webshop iets als: “Product - categorie - [webShopNaam.nl](http://webShopNaam.nl)”

### Pagina-specifiek: structuur

Misschien heb je hier deels wel iets herbruikbaars voor, zoals templates. Dat is enorm fijn. De ervaring leert echter dat deze niet altijd beschikbaar zijn, en niet de prioriteit hebben.

## Landmarks

Voor elke pagina wil je je landmarks op orde hebben:

* Plaats je navigatie in een `<nav>`
* Plaats de belangrijkste content in een `<main>`
* Gebruik aan het begin van je pagina een `<header>` en aan het eind een `<footer>`
* Heb je informatie die terzijde is? Gebruik dan een `<aside>`

## Heading structuur

Je headings helpen mensen navigeren door je pagina. Net zoals je koppen kan scannen in een krant, zo wil je dat op een website ook.

De `<h1>` is voor de belangrijkste heading; voor waar je pagina overgaat. Daaronder wil je een soort boomstructuur maken van je headings. Alle content valt logischerwijs (zowel visueel als in code) onder één van je headings. Je gaat van hoofdonderwerp (`<h1>`) naar deel-onderwerp (`<h2>`), naar deel-deel-onderwerp (`<h3>`), en zo verder. Nooit meer dan één stap tegelijk vooruit.

## Focus volgorde

Zorg ervoor dat elke pagina waar je met je tab-toets doorheen gaat logisch navigeert. Dit gaat makkelijker als je geen `tabindex` gebruikt met een waarde hoger dan 0. Ook creatief toepassen van CSS grid of flexbox kan de visuele volgorde laten afwijken van die in de code.

Wil je het je bezoeker helemaal makkelijk maken? Voeg een skip link toe. Dat is een (vaak verborgen) link aan het begin van de pagina waarmee je naar de content kan “springen”.

# Lastig te testen

## Variaties van componenten

Hoe meer features een component heeft, hoe groter de kans dat het mis gaat. Als component een boolean-attribuut, dark mode en twee responsive zoom-niveaus heeft, dan zit je al snel op (2x2x3=8) acht variaties die allemaal getest en onderhouden moeten worden. Let hier dus op! Als iedereen om je heen standaard dark mode aan heeft staan, reken maar op issues in light mode.

## Compositie

Zodra je componenten gaat combineren kun je ook problemen voorzien. Het liefst zie je bijvoorbeeld dat formulieren als een compleet systeem ontwikkeld en gebundeld zijn. In formulieren combineer je vaak dezelfde componenten. Worden ze los geleverd dan kunnen er onverwachte (en ongeteste) situaties ontstaan. Weer een punt van aandacht!

Hieraan gerelateerd is ook het onderwerp van relaties. Alles wat je zelf aan elkaar knoopt is gevoelig voor fouten. Als je bovenaan je pagina een table of contents hebt, moet je goed opletten hoe die verbonden is aan de content van je pagina. Of wat dacht je van een formulier(veld) en een foutmelding of instructie? Relaties wil je zowel visueel als in de code helder hebben.

![Een projector hangt aan een muur. Een scherm hangt er opgerold boven. Het scherm kan zo niet uitgerold worden, en de projector kan er niet op projecteren.](/_img/adventskalender/advents-erik-2.jpeg)

*De juiste onderdelen in de verkeerde volgorde.*

# Website-breed

Zoals eerder benoemd zijn componenten goed voor consistentie. Is je set componenten nog niet heel volwassen of volledig, dan kan dit nog een punt van verbetering zijn.

Zo kunnen focus states tussen pagina’s en components nog verschillen als dit niet goed centraal bedacht en uitgevoerd is.

Een ander verbeterpunt in de bredere structuur is vaak de navigeerbaarheid. Je wil dat pagina’s op meer dan één manier te vinden en benaderen zijn. Denk aan een zoekfunctie of sitemap naast je menu-structuur. Typisch iets wat je niet kan oplossen met een component. Zorg dat al je pagina’s hier onderdeel van uitmaken en duidelijk vertegenwoordigd zijn.

## Voorbij de valkuilen

Stel je waakt nu voor al deze valkuilen. Weet je dan zeker dat het goed komt? Nee, helaas! Je kan nog steeds het verkeerde component kiezen bijvoorbeeld! Je hebt geen garantie voor een toegankelijk eindresultaat. De kans dat het je lukt met toegankelijke componenten is wel vele malen groter dan zonder!

Componenten zijn als de basis van een huis. Bouw je met scheve kozijnen op drijfzand? Succes! Een stevig fundament met kwalitatieve onderdelen is wat je wil. Maar ook daarmee kun je een huis bouwen dat tekort schiet!

![Een muur met hoekjes en een bocht met een plint. De plint is in allemaal losse stukjes in een vergeefse poging om de vorm van de muur te volgen.](/_img/adventskalender/advents-erik-3.png)
