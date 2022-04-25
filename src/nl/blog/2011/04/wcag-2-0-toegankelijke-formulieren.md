---
title: "WCAG 2.0: Toegankelijke formulieren"
date: 2011-04-17
author: Janita Top
categories: 
  - Toegankelijkheid
  - Webrichtlijnen
---
Richtlijn 2.1 Toetsenbordtoegankelijk: Maak alle functionaliteit beschikbaar vanaf een toetsenbord.

Meer specifiek: _[2.1.1 Toetsenbord](http://www.w3.org/Translations/WCAG20-nl/#keyboard-operation): Alle functionaliteit van de content is bedienbaar via een toetsenbordinterface zonder dat afzonderlijke toetsaanslagen aan tijd gebonden zijn, behalve als de onderliggende functie een invoer vereist die afhangt van het pad dat de gebruiker aflegt en niet alleen van de eindpunten. (Niveau A)_

Na deze technisch neutrale richtlijn staan vervolgens bij de [Afdoende technieken](http://www.w3.org/WAI/WCAG20/quickref/#qr-keyboard-operation-keyboard-operable) voorbeelden van HTML, scripting en Flash technieken waarmee je aan deze regel kunt voldoen.

In WCAG 2.0 wordt soepeler omgegaan met het gebruik van Javascript dan in WCAG 1.0. Dit is niet raar als je de uitkomsten ziet van de laatste [screenreader-enquête](http://webaim.org/projects/screenreadersurvey3/#javascript). Hierin komt naar voren dat ruim 98% van de screenreader gebruikers javascript enabled heeft. Daarnaast is er ook qua usability wat voor te zeggen als je bijvoorbeeld in uitgebreide formulieren dynamisch de vragen en keuzemogelijkheden kan aanpassen, zodat ook iemand met een screenreader minder opties hoeft te doorlopen. Voor deze gebruikers is dit zelfs nog handiger, omdat het veel tijd kan schelen. 
Hetzelfde geldt voor client-side validation. Via javascript kun je bij een verkeerd ingevuld veld een foutmelding invoegen via de DOM, met daarin een link naar het veld waar het gecorrigeerd moet worden. Zodoende hoef je niet het hele formulier te doorzoeken wanneer je niet in een oogopslag kunt zien waar de fout zit.

Eventueel kan het formulier dan nog uitgebreid worden met [WAI-ARIA](http://www.w3.org/TR/wai-aria-practices/) roles en states zoals 'role=alert' en 'aria-invalid' of 'aria-live'. En/of met [HTML5 formuliervalidatie](http://diveintohtml5.org/forms.html), eventueel met javascript-fallback.

Hoe maken jullie formulieren toegankelijk?
