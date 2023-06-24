---
title: "Fronteers.nl is vanaf heden een single page app"
date: 2015-04-01
author: Bestuur
categories: 
  - Website
---
Nu grote partijen als KLM, ING en de Gemeente Antwerpen hun nieuwste redesigns hebben gebouwd in moderne JavaScript frameworks als Angular.JS, vinden we dat Fronteers niet achter kan blijven. Daarom lanceren we vandaag de nieuwste versie van fronteers.nl, onder de motorkap aangestuurd door bewezen technologieën als require.js en Ember.

De site is geoptimaliseerd op snelheid, doordat we gebruik maken van lazyload.js voor afbeeldingen, en webfonts inladen met Web Font Loader van Google en Adobe.

Met de nieuwe opzet hebben we eindelijk gezorgd dat er in onze code een strikte scheiding bestaat tussen de data zelf (model), hoe het wordt weergegeven (view) en de techniek waarmee het wordt weergegeven (controller). Dit maakt het één en ander ook gemakkelijker voor de back-end ontwikkelaars van Fronteers.nl, voor wie het toevoegen van nieuwe modules een stuk eenvoudiger is geworden.

Omdat de CSS op onze site door veel verschillende mensen wordt bijgehouden, lang niet allemaal front-end ontwikkelaars,  zochten we een manier om onze variabelen te scopen en cascading te voorkomen. CSS zelf biedt alleen globale variabelen, dus hebben we besloten onze CSS voortaan in JavaScript te schrijven. De uiteindelijke style rules injecteren we in een style-attribuut in de DOM.

![Screenshots van Angular.js en Bootstrap homepages](/_img/blog/2015/angularbootstrap.png)

We houden ook vast rekening met de toekomst, door bijvoorbeeld gebruik te maken van Bootstrap. Nieuwe ontwikkelaars kunnen zo gemakkelijker bij het team aansluiten, ze hoeven immers alleen Bootstrap te kennen! Ook hebben we jQuery UI toegevoegd, zodat we straks een stuk minder ontwikkeltijd nodig hebben als we bijvoorbeeld een overlay in de site willen implementeren.

Een website is nooit af. Zo hebben we ook bij deze nieuwe site van Fronteers nog wel wat aandachtspunten. Aan toegankelijkheid, bijvoorbeeld, wordt nog gewerkt. We zijn hiervoor bezig met a11y.js, een plug-in die de site automatisch van de nodige WAI-ARIA zal voorzien.

We zijn benieuwd wat jullie van deze nieuwste versie vinden.
