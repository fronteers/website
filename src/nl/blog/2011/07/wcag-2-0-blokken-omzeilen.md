---
title: "WCAG 2.0: Blokken omzeilen met of zonder skip links"
date: 2011-07-31
author: Janita Top
categories: 
  - Toegankelijkheid
  - Webrichtlijnen
---
Ze staan er nog steeds in, de skip links, bovenaan bij de afdoende technieken voor het WCAG2.0 succescriterium 2.4.1. Blokken omzeilen: Er is een mechanisme beschikbaar om blokken content die op meerdere webpagina's worden herhaald te omzeilen. (Niveau A). Is het echt nog nodig met al onze semantische markup en html5 om hiervoor nog extra markup toe te voegen?

[Hoe te voldoen aan succescriterium 2.4.1](http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-skip)

Ik had de hoop dat met het gebruik van html5-elementen zoals `nav` en `section` of `article` en aria roles zoals `navigation` en `main` die skip links wel een keer overbodig zouden worden. Helaas ondersteunen screen readers – in combinatie met browsers – deze elementen en roles nog slecht, zoals in [dit artikel](http://www.accessibleculture.org/research/html5-aria-2011/)  wordt beschreven.

Gelukkig kun je het ook oplossen met headings. En een goede headingstructuur maak je sowieso, dus dan ben je meteen klaar, toch? Screenreader gebruikers kunnen dan een lijst met links gemakkelijk overslaan. Maar bezoekers die visueel navigeren via de tab toets moeten dan nog wel alle links bij langs. Toch weer skip links dus...?

En hoe zit dat eigenlijk met het [map element](http://www.w3.org/TR/2010/NOTE-WCAG20-TECHS-20101014/H50) voor het groeperen voor links? Gebruikt iemand dat wel eens?
