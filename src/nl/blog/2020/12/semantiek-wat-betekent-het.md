---
title: "Semantiek, wat betekent het?"
date: 2020-12-25
author: Erik Kroes
categories: 
  - Adventskalender
---
Als men het heeft over de kwaliteit van HTML-code gaat het vaak over semantiek. Maar wat is nou semantiek? Wat is semantische HTML, en waarom zou je je er wat van aantrekken?

# Wat is semantische HTML?

Semantiek is het communiceren van je intentie door middel van je gekozen HTML. Dit garandeert niet de correcte uitkomst, maar als je een andere intentie communiceert dan de uitkomst, dan klopt het sowieso niet.

Een bekende HTML-tag is bijvoorbeeld de `<h1>`. Deze tag wordt vaak gebruikt voor de belangrijkste kop (heading 1) op een pagina.

```
<h1>Semantiek, wat betekent het?</h1>
```

De tag of het element communiceert de intentie: dit is de belangrijkste kop, dit is waar de pagina over gaat. Als er (bijvoorbeeld door een fout in het CMS) een heel artikel in een `<h1>` staat dan komt het resultaat niet overeen met de intentie.

Op dezelfde manier kun je een link (`<a>`) maken die nergens heen gaat, of een knop (`<button>`) die niks doet. Met semantische HTML geef je je intentie aan. Dat is de eerste stap. Om het resultaat er op aan te laten sluiten is een volgende stap.

Je kan het vergelijken met TypeScript of andere talen die typing bevatten. Deze kunnen niet alleen data bevatten, maar ook iets zeggen over de data die ze bevatten.

# Wat doet semantiek?

Zoals aangegeven geeft semantiek de intentie weer van een element. Als tools op deze intentie kunnen vertrouwen (de semantiek zegt iets over de data in de elementen) dan kunnen ze de inhoud van de elementen voor allerlei doeleinden gebruiken.

Enkele voorbeelden:

* *Readability tools -* Er zijn tegenwoordig talloze manieren om teksten in een leesbaarder formaat door te nemen. Soms staan ze op zichzelf zoals Pocket en Instapaper, maar in Firefox en Safari zitten ze ook ingebouwd. Je kan een bestaande webpagina op een andere (leesbaardere) manier presenteren.
* *Vertalings tools -* Tools als Google Translate kunnen gebruiken maken van de context die je als developer communiceert.
* *Assistive technology -* Software zoals screen readers (“voorleessoftware”) informeren hun gebruikers over de semantische waarde van de HTML die ze lezen. Zo kan een gebruiker begrijpen of iets hoofd- of bijzaak is, en of iets een paragraaf of een lijst is.
* *Mensen die je code lezen -* Het klinkt misschien voor de hand liggend, maar leesbare code is prettige code om mee te werken. HTML code schrijf je vaak ook niet alleen voor jezelf maar voor anderen, of zelfs voor jezelf op een ander moment. Helder geschreven HTML is beter leesbaar en tijdsbestendiger.
* *Custom CSS, adblocking, etc -* Eigenlijk alles wat in je code "hookt" heeft baat bij leesbare, bestendige en robuuste code. Als een bezoeker Custom CSS heeft voor leesbare headings, dan moeten er wel headings zijn.
* *SEO -* Zoekmachines  zijn soms net gebruikers. Ook zij willen weten wat voor informatie je aanlevert en wat de context van die informatie is.

Door structuur in je code te creëren eindig je niet met "los zand". Het geeft houvast aan iedereen die er mee moet werken: developers, bezoekers en tools.

# Hoe doe ik het goed?

Betekent dit dat je [alle HTML-elementen](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) uit je hoofd moet kennen? Nee, dat niet. Al zijn het er niet eens zo veel.

Het is wel leuk om te kijken welke elementen je allemaal kent! Heb je de [HTML Tags Memory Test](https://codepen.io/plfstr/full/zYqQeRw) al geprobeerd?

# Wat wil ik communiceren?

Deze vraag is heel waardevol in heel veel situaties. Als je HTML schrijft en je voegt een element toe, bedenk dat of dit element je intentie goed weergeeft. Schrijf je een paragraaf? Dan voelt het logisch om een `<p>` te gebruiken. Doe je iets voor puur visuele redenen, zonder dat je een specifieke intentie wilt communiceren? Dan kun je misschien prima uit de voeten met een `<div>` of een `<span>` (deze elementen voegen niks toe in de communicatie).

Gebruik je daarentegen een `<div>` of een `<span>` terwijl je juist wel een specifieke intentie wil  overbrengen? Misschien wil je dan even in de lijst van [alle HTML-elementen](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) kijken of er een passend alternatief is.

# Is mijn pagina structuur helder?

Elke pagina heeft baat bij een goede structuur. Zoals een krant leunt op secties, katernen en heldere koppen, zo werkt het ook bij een pagina op het web (en de onderliggende HTML).

Kijk of je je pagina in kan delen met duidelijke HTML landmarks zoals `<header>`, `<main>`, `<aside>` en `<footer>`. Een landmark werkt net als een herkenningspunt in het echte leven. Als een dorp vijf kerktorens heeft dan wordt het lastig om te zeggen "bij de kerktoren rechts".

Daarnaast kun je (ook net als bij een krant) headings gebruiken. De `<h1>` is de hoofdkop van de pagina; deze geeft aan waar de hele pagina over gaat. Technisch gezien valt alle content hieronder. Als je onder de `<h1>` een kopje wil gebruiken, gebruik dan de `<h2>`. Alles wat in de code onder de `<h2>` valt, moet hier logischerwijs in de content ook onder vallen. Je creëert een hiërarchie met je koppen. Sla geen koppen over (ga niet van `<h2>` naar `<h4>`) en plaats alleen iets onder een kop als het er logischerwijs onder valt.

# Is dat het?

Ja, zo'n beetje wel eigenlijk. Communiceer zo duidelijk mogelijk wat de intentie van je code is (meta data) en laat je intentie geen lege belofte zijn.
