---
title: 'Pump up the JAM'
date: 2018-12-04
author: Iain van der Wiel
categories:
    - Adventskalender
---

In de jaren dat ik werk als front-end developer, en ook in mijn tienerjaren als hobby, heb ik vele sites ontwikkeld in een heel scala aan frameworks en CMS’en. De bekendste CMS’en waar ik mee heb gewerkt zijn toch wel WordPress, Drupal en Sitecore. Maar hoe verschillend al deze traditionele CMS’en ook zijn, hoe je er in de basis een website mee ontwikkelt blijft vrijwel hetzelfde:

Zet een installatie op van het CMS, begin de paginatypes en content daarin te definiëren en maak templates waarmee je de content mee presenteert. Voor veel sites werkt deze werkwijze ook gewoon prima, gezien de hoeveelheid websites er sinds jaar en dag op deze manier ontwikkeld zijn.

## Jack of all trades…

Gevolg van deze werkwijze is dat _alles en iedereen_ met dit CMS moet (leren) werken om er een site mee te ontwikkelen.

Simpel gezegd moeten er onder andere:

-   Content editors leren omgaan met de editor van het CMS;
-   Back-end developers het CMS uitbreiden om gewenste pagina’s en gegevens te kunnen beheren;
-   Front-end developers de ‘internals’ van het CMS leren omgaan met diens template-taal (of afwezigheid daarvan);
-   Hosting en ontwikkelomgevingen moeten opgezet en ingericht worden zodat het CMS kan draaien.

Zoals je ziet draaien alle onderdelen van een website om dit ene punt heen: het traditionele CMS. Alles is _*tightly coupled*_.

Dat is gelijk de keerzijde van het tradtionele CMS, ze zijn vaak heel generalistisch. Zodra er iets ontwikkeld moet worden dat niet matcht met wat het systeem standaard biedt, dan kan het zijn dat dit niet zonder slag of stoot mogelijk is en je bent overgeleverd aan bijvoorbeeld een hoop plugins of een flinke tijdsinvestering om het zelf te ontwikkelen.

Dit type CMS kunnen we om deze redenen een _*jack of all trades, master of none*_ noemen.

## Hit the road, Jack

Vrij recentelijk zijn er ook andere soorten CMS’en op de markt gekomen, het zogenaamde headless of decoupled CMS. Dit type CMS is gericht op maar één ding: het gemakkelijk beheren en opslaan van content en data.

Het grote verschil met het traditionele CMS is dat een headless CMS geen pagina’s serveert aan bezoekers, maar de content die erin is opgeslagen alleen beschikbaar maakt via een API. Deze API kan dan door andere systemen aangesproken worden om toegang te krijgen tot deze content om er uiteindelijk pagina’s voor te serveren. Op deze manier zijn het beheer en opslag van content volledig ontkoppeld van de uiteindelijke presentatie ervan.

Dit geeft mogelijkheden tot het ontwikkelen van de front-end, aangezien je op deze manier niet beperkt bent tot alleen de features die het CMS (en diens plugins/modules) aanbiedt. Er is meer vrijheid om precies de onderdelen te ontwikkelen zoals ze nodig zijn voor het project waar je aan werkt. Aan de andere kant kan dit wel arbeidsintensiever zijn dan bouwen op een traditioneel CMS, omdat er over zaken nagedacht moet worden die met een traditioneel CMS al uit handen worden genomen, zoals routing, caching, meertaligheid, URL-opbouw, etc.

## 🍓 Pump up the JAM 🍓

Stel, er is voor het project waar je aan werkt gekozen voor een headless CMS, hoe ga je daar dan mee aan de slag? Hoe zorg je ervoor dat er een website is, een front-end, waar de content die in het CMS zit op gepresenteerd wordt?

Daar komt de _‘JAM stack’_ om de hoek kijken. Maar wat is dan precies de JAM stack?

> A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.

Websites gebouwd op basis van de JAM stack worden veelal ontwikkeld met een static site generator, zoals bv. Jekyll, Hugo of Gatsby. Nu denk je misschien: “Statische sites? Maar hoe ga ik dan om met dynamische content? En hoe zit het met formulieren? Of webshops?”.

Dat is waar een headless CMS en de JAM stack samenkomen, de ‘reusable APIs’. Static site generators kunnen namelijk de content uitlezen uit de API van het headless CMS! Deze content kan je dan gebruiken om statische pagina’s mee te genereren, zodat je nog steeds dynamische content hebt. Maar in tegenstelling tot traditionele CMS’en zijn beide systemen nu van elkaar gescheiden, oftewel _*decoupled*_.

Dit zorgt ervoor dat elk systeem (CMS, hosting, front-end, etc.) minder sterk afhankelijk is van elkaar en er andere, betere keuzes gemaakt kunnen worden.

## ⚡️ De voordelen van statisch ⚡️

Een statische site heeft ten opzichte van een dynamisch gegenereerde site (direct uit het CMS) een aantal _flinke_ voordelen. Statische sites zijn:

_Sneller_ Sites worden opgebouwd tot simpele statische HTML files. Bestanden lezen en serveren is supersnel, er hoeft immers geen hele applicatie te draaien of op te starten om een request af te handelen.

_Veiliger_ Omdat er op de server geen back-end code of database aangesproken hoeft te worden om een verzoek af te handelen, is de site ook een stuk minder vatbaar voor aanvallen als XSS en SQL injection.

_Schaalbaarder_ Het opzetten van servers en hosting die statische files serveren is flink simpeler op te zetten en op te schalen bij grote hoeveelheden verkeer. In principe is elke vorm van hosting voldoende, omdat er alleen maar files verstuurd hoeven te worden. Er draait geen server-side CMS of framework wanneer er een verzoek binnenkomt op de server.

_Bevrijdend_ Er is meer vrijheid om de juiste tools en technieken te kiezen voor de front-end van de website of applicatie. De front-end is veel minder afhankelijk van achterliggende technieken zoals een CMS of framework met een eigen template engine.

## Ooh shiny! Can I touch?

Klinkt goed toch? Dat dacht ik ook! 😉

Maar hoe gaan we er nu mee aan de slag? Daar zijn verschillende combinaties in mogelijk, zodat je de keuze hebt wat er het beste bij jouw project past. Ik ga niet verder op alle opties in, dat zou materiaal zijn voor nog een serie blogposts! Maar hieronder zal ik een aantal opties noemen:

_CMS_ [Contentful](https://www.contentful.com/), [Prismic](https://prismic.io/), [GraphCMS](https://graphcms.com/), [Netlify CMS](https://www.netlifycms.org/)

_Static site generator_ [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/), [Gatsby](https://www.gatsbyjs.org/)

_Formulieren_ [Wufoo](https://www.wufoo.com/), [Typeform](https://www.typeform.com/), [Netlify Forms](https://www.netlify.com/features/#forms)

_Authenticatie_ [Auth0](https://auth0.com/), [OAuth](https://oauth.net/), [Netlify Identity](https://www.netlify.com/features/#identity)

_Webshops_ [Shopify](https://www.shopify.com/), [Stripe](http://stripe.com/)

_Hosting_ [Zeit](https://zeit.co/), [Google Cloud](https://cloud.google.com/), [Amazon AWS](https://aws.amazon.com/), [Netlify](https://www.netlify.com/features/)

Zoals je ziet is er ruime keuze in het hele ecosysteem om services en tools te kiezen die precies bij jouw project passen.

Zelf ben ik erg fan van de combinatie Netlify + Gatsby + Contentful (of Netlify CMS). Het zijn systemen die erg makkelijk zijn op te zetten, een goede community en een rijk ecosysteem hebben.

Hopelijk heb ik je hiermee geīnspireerd om er zelf een keer mee aan de slag te gaan. Kom je ergens niet uit? Kom even langs in de [Fronteers Slack](https://fronteers-slack.herokuapp.com/) en stel gerust je vraag!

### Over Iain van der Wiel

<img src="/_img/adventskalender/iain.png" alt="Foto van iain" class="floating-portrait">
Iain van der Wiel is een front-end developer bij Frontmen in Eindhoven. Met passie voor UX, standaarden en toegankelijkheid probeert hij elke dag het web ietsje beter te maken. Tevens is hij Fronteers Slack coryfee. 😄
Donatie
Mijn donatie gaat naar de Hersenstichting. Een kwart van de mensen in Nederland heeft in meer of mindere mate een hersenaandoening. De Hersenstichting steunt onderzoek, voorlichting en ondersteuning voor deze grote groep mensen.)
