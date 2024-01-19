---
title: 'Bijeenkomst bij SETUP op 14 juni 2010'
date: 2010-06-14
eventdate: 2010-06-14
location:
categories:
    - meetup
---

Op 14 juni was Fronteers te gast bij [SETUP](http://www.setuputrecht.nl/) in Utrecht. Het thema van deze bijeenkomst was 'het semantische web'.

## Het semantische web door Thomas Markus van Universiteit Utrecht

Thomas stelt dat front-end webdevelopers dagelijks bezig zijn met het omvormen van data—die bijvoorbeeld in databases staat—naar HTML, CSS en JavaScript. Maar wat gebeurt er als er twee databases samengevoegd moeten worden? Welke database heeft dan prioriteit als er twee dezelfde items toegevoegd worden?

Hier springt het semantische web in. Door informatie niet op te slaan in databases, maar op de website zelf, kan informatie accuraat opgehaald worden. Links tussen documenten worden de relaties die de twee documenten hebben. Zo wordt een link zonder verdere semantische betekenis ineens een link naar een copyright license.

De taal waarmee het semantische web in elkaar zit is RDF, dat staat voor Resource Description Framework. RDF bestaat uit een serie van driehoeksrelaties. Er is een onderwerp, dat een URI is naar een bestand op het internet. Daarnaast is er een relatie (dat ook een URI is), en als laatste een object (dat een URI of string is). Door deze driehoeksrelatie kan alle mogelijke informatie op het internet in een model gevormd worden.

Dit betekent echter ook dat URI's herzien moeten worden. Wat is bijvoorbeeld de URI van je oma, of ridders in de middeleeuwen.

Er zijn diverse manieren om meer semantiek (betekenis) aan je HTML toe te voegen. Eén optie is RDFa, die echter alleen aand XHTML kan worden toegevoegd door middel van XML namespaces (wat dus alleen werkt in XHTML verstuurd als `application/xhtml+xml`). Het is echter ook mogelijk de informatie in een apart bestand te plaatsen, bijvoorbeeld een XML bestand, en die te linken vanaf het HTML bestand.

Met de querytaal [Sparql](http://en.wikipedia.org/wiki/SPARQL) kun je snel en eenvoudig data uit het web van RDF documenten halen. Je kunt definiëren waar je informatie aan moet voldoen, en een programma zoekt daarna naar alle informatie die binnen je beperkingen valt.

Iemand uit het publiek merkt op dat er een interessant [TED.com presentatie is van Sir Tim Berners-Lee: over het volgende web](http://live5.ted.com/talks/tim_berners_lee_on_the_next_web.html).

## Data portability door Andreas Creten van My Name is E en madewithlove

Om te laten zien dat we veel meer open standaarden gebruiken dan je wellicht verzint, laat Andreas een foto zien van de iPhone, met de vraag welke open standaarden we gebruiken. Dit blijken er een heleboel zijn, waaronder telefoonstandaarden, afbeeldingstandaarden (JPEG), vCards et cetera.

Het is echter nog bij heel veel dingen zo dat alle data gesloten zit binnen het product wat je gebruikt. Nu vinden we het bijvoorbeeld heel gewoon om op elke profilewebsites dezelfde informatie in te voeren. Dit is over tien jaar niet meer het geval. Dit is een typisch voorbeeld van data portability: al die informatie wordt uitwisselbaar.

APML is een voorbeeld van een nieuwe standaard. Met deze standaard kan informatie tussen de diverse profielenwebsites uitgewisseld worden. Een voorbeeld van data is de vriendconnecties die je hebt, en 'likes'. Daarnaast is er OpenSocial: een API voor alle sociale websites. Je kunt eenvoudig
lijsten vrienden ophalen en eventueel synchroniseren.

Een ander voorbeeld van een open standaard die veel meer gebruikt wordt de afgelopen tijd zijn Microformats. Microsormats kunnen gebruikt worden om metadata toe te voegen aan de markup van een website, zodat browsers en zoekmachines meer informatie hebben over de content. Zo kun je gemakkelijk een adres van een website in je adresboek kopiëren.

Andreas sluit af met OAuth. Een website kan na toestemming van de gebruiker informatie ophalen van een serviceprovider. Stel: applicatie X wil alle tweets van persoon Y inlezen, dan stuurt hij persoon Y door naar Twitter.com, waar die gebruiker toestemming geeft voor de informatie-uitwisseling. Daarna gaat de gebruiker terug naar applicatie X, waar de tweets ingelezen kunnen worden.

Dit leidde tot een discussie over de verhoogde kans op een phising aanval, omdat alle informatie vanaf één plaats gehaald kan worden. Een cracker hoeft dan slechts één wachtwoord van je af te troggelen, en je bent direct gehackt op meerdere plaatsen op het internet.

## Overige materialen en verslagen

[Slides van de presentatie van Thomas](http://www.phil.uu.nl/~tmarkus/presentations/fronteers-2010-06-14.pdf)
[Slides van de presentatie van Andreas](http://www.slideshare.net/andreascreten/data-portability-fronteers-meetup)

## Aanwezigen

-   Matijs Brinkhuis
-   Peter Beverloo
-   Arjan Eising
-   Michel Klomp
-   Luc De Brouwer
-   Luuk Wilms
-   Jan van Hellemond
-   Martijn Jongkind
-   Hidde de Vries
-   Corné Verbruggen
-   George van Veen
-   Joko Ruwhof
-   Monique Martens
-   Bjorn Boonen
-   Niels Claessens
-   Jules Ernst
-   Marc Bruisten
-   Siemen van Dijk
-   Tom Greuter
-   Sander Aarts
-   Chris Dijkshoorn
-   Victor Bastiaansen
-   Jurgen van der Vlist
-   Hans Overbeek
-   Edwin Martin
-   Robin Gruyters
-   Wilfred Nas
-   Krijn
-   Bas Olthoff
-   Peter Westendorp
-   W.H. Fris
-   Nico Druif
-   Vincent Smedinga
-   Mallory van Achterberg
-   Sander van Lambalgen
-   Jan Velthuizen
-   Martijn La Feber
-   Leonard Eshuis
-   Peter van der Zee
-   David Hund
-   Marc van Zee
-   Peter
-   +9
