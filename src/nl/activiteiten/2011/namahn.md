---
title: "Bijeenkomst bij Namahn op 22 september 2011"
date: 2011-09-22
eventdate: 2011-09-22
location: 
categories: 
    - meetup
---
Mathias heet iedereen welkom bij alweer de vijfde Fronteersbijeenkomst in Vlaanderen. Deze bijeenkomst werd gehouden bij [Namahn](http://www.namahn.com/) in Brussel.

[Lennart Schoors](http://lensco.be/) geeft de presentatie 'Look ma, no images'. over hoe je 'afbeeldingen' met CSS in plaats van afzonderlijke afbeeldingen kunt gebruiken. Het begon allemaal met [het Opera logo in CSS](http://desandro.com/articles/opera-logo-css/). Kort daarna zag je allerlei indrukwekkende voorbeelden van CSS-afbeeldingen.

Waarom zou je dit doen? Voor de snelheid van het binnenhalen van de pagina. Tweede is onderhoudbaarheid, je hebt alles in een CSS bestand, waar je gemakkelijk een kleur kunt aanpassen. In het geval van gewone afbeeldingen moet je het aanpassen in Photoshop, nu gewoon in je CSS. Derde punt is dat je oneindig in kunt zoomen, in plaats van pixelated afbeeldingen als je inzoomt. Het gaat ook goed samen met adaptieve ontwerpen.

Hij vertelt verder over hoe je diverse vormen zoals cirkels en driehoeken kunt maken met CSS. Driehoeken kun je met zowel een `border` als een gradient achtergrond. Dat laatste is iets mooier als je niet-standaard-hoeken gebruikt.

Handig voor het toepassen van de stijlen zijn de `:before` en `:after` pseudo-elementen. Ook kun je de shadow-DOM gebruiken. Als je bijvoorbeeld de handle van een `input[type="range"]` aan wilt passen in kleur of vorm, dan is er een selector om die aan te passen (in dit geval `::-webkit-slider-thumb`, er is nog geen voor niet-Webkit browsers).

Wat is de browserondersteuning voor de coole dingen? IE9 en hoger komen dicht in de buurt. Opera is ook soms een hardkoppige browser. SVG werkt wel op veel meer platformen.

[Benjamin de Cock](http://bdc.vc/) neemt het stokje over en vertelt over CSS Transities en Animaties. Browser support voor transitions is vrij goed, alleen Internet Explorer ondersteund het pas sinds versie 10. Alle browsers behalve Opera ondersteunen CSS Animaties.

De syntax voor transities is vrij simpel. Met `transition: property tijd easing`. Omdat de transities native zijn, zijn ze veel smoother dan JavaScript animaties.

CSS Animaties zijn vrij nieuw. Ze moeten een declaratief blok hebben met de keyframes. Omdat ze met alle vendor prefixes aangemaakt moeten worden, is je CSS bestand al snel heel erg groot. De beschikbare easingfuncties zijn onder andere ease, linear, ease-in/out/in-out en cubic-bezier om je eigen easing te maken. Zie ook [generator door Lea Verou](http://cubic-bezier.com).























# Aanwezigen

* Roel Van Gils
* Mathias Bynens
* Ad Eggermont
* Danny Calders
* Stijn Janssen
* Thomas Byttebier
* Tomas Decrick
* Nick Looijmans
* Jurriaan Persyn
* Rik Rijnders
* Anthony Ringoet
* Martijn Croonen
* Stijn Henderickx
* Arjan Eising
* Frederik De Paepe
* Tom Schuermans
* Roderik van der Veer
* Tom Claus
* Daan Poron
* Steve De Jonghe
* Vincent Battaglia
* Indri Kenens
* Ibe Vanmeenen
* Erwin Heiser
* Bart Geraerts
* Sophie Schuermans
* Jochen Vandendriessche
* Pascal Nosenzo
* Jan Moesen
* Melvyn Hills
* Laurens Surinx
* Joris Hens
* Stijn Van Loo
* Hans Verhaegen
* Joannes Vandermeulen
* Bruno Haarscher
* Kristof Houben
* Elisa Andre
* Peter Vermaercke
* Jessica Longino
* Danté De Rycke
* Stijn Huyberechts
* Thomas Mattheussen
* Wart Claes
* Domien Verbeke
* Vic Rau
* Thomas Bossée
* Kenneth Claes



