---
title: "WCAG 2.0 : Betekenisvolle volgorde"
date: 2011-09-16
author: Janita Top
categories: 
  - Toegankelijkheid
  - Webrichtlijnen
---
Van volgorde van belangrijkheid naar betekenisvolle volgorde.

In Webrichtlijnen 1 is er de omstreden richtlijn _Zet de inhoud van de pagina in de HTML broncode op volgorde van belangrijkheid_ (R-pd.6.2). Hier is veel over gediscussieerd, o.a. [hier op site](/blog/2008/05/webrichtlijnen-volgorde-van-belangrijkheid).

In Webrichtlijnen 2/WCAG2.0 is er [Successcriterium 1.3.2](http://versie2.webrichtlijnen.nl/documentatie/1.3.2/): _Betekenisvolle volgorde: Als de volgorde waarin content wordt gepresenteerd van invloed is op zijn betekenis, kan een betekenisvolle leesvolgorde door software bepaald worden._

Dit is flexibeler, omdat er niet meer voorgeschreven wordt wat (als er overeenstemming is over wat het belangrijkst is) boven of verder naar beneden in de html-structuur moet staan. Er is alleen de voorwaarde dat de onderdelen die door een user agent door elkaar gegooid kunnen worden, de betekenis niet veranderen. Duidelijk, toch?

[Update 09-10-2011:] 
Dus als je met css een visuele volgorde creëert, en die verandert wanneer je de site leest met een screenreader (zonder css), of je ziet alleen bepaalde content van die pagina terug in bijvoorbeeld een news-feed, dan moet het nog steeds begrijpelijk zijn.

Op het Fronteers congres afgelopen week was er in de presentatie van [Bruce Lawson](http://www.brucelawson.co.uk/) een mooi voorbeeld van waar dit mis kan gaan _binnen een tekst_, namelijk als een deel van de tekst een andere richting heeft en dit niet in de mark-up wordt aangegeven. In HTML5 is daar nu het <bdi> element voor. Zie [deze use case](http://rishida.net/blog/?p=564,%20follow%20@r12a). WCAG2.0 adviseert hiervoor het gebruik van Unicode right-to-left marks, maar dit schijnt nog wel eens problemen te geven in zoekopdrachten.
