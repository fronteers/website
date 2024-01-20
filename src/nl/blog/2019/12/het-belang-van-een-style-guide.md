---
title: 'Het belang van een style guide'
date: 2019-12-13
author: Sander Langendoen
categories:
    - Adventskalender
---

In de meeste organisaties waar ik heb gewerkt, is er wel een UX-designer aanwezig. Deze levert de designs aan waarin je duidelijk kunt zien hoe een UI is opgebouwd en vind je uitleg over hoe bepaalde elementen zich tot elkaar verhouden. Ook vind je vaak styleregels. Bijvoorbeeld welke fonts er gebruikt worden, welke fontgroottes moeten er worden toegepast en bij hoeveel woorden wordt een tekst afgekapt en toont er een 'read more' tekst. Allemaal zaken waar we als front-end developer vaak niet meer over hoeven na te denken. Toch zijn er een aantal zaken die van belang zijn als je een consistente UI wilt bouwen.

## Building blocks

De User Experience designer heeft de verschillende kleurenpaletten geaccordeerd gekregen, de typografie uitgewerkt, en het iconenset aangeleverd. Nu is het nog van belang dat deze elementen consistent worden toegepast in de HTML en CSS. Om dit zo goed mogelijk voor elkaar te krijgen zijn style guides in het leven geroepen. Deze kunnen onderdeel uitmaken van een groter geheel, zoals een design system.

## CSS en HTML style guide

Veel developers ontwikkelen een eigen stijl van het schrijven van hun code. Dit is in de basis helemaal niet erg. Zeker niet als het gaat om een project wat je in je eentje draait. Tot het moment daar is dat je werk van een collega moet overnemen. Bootstrap classes overheersen de HTML. Classnames als `row`, `col-sm-6` en `container-fluid`. Irritaties doemen op. Dat terwijl er bij de vorige vergadering nog geroepen is dat we geen Bootstrap grids meer toepassen sinds we Flexbox en CSS Grid breed geaccepteerd hebben in onze layouts.

Dit is een typische situatie waar een HTML/CSS style guide goed van pas kan komen. Een eerste stap om deze situatie in de toekomst te voorkomen zou zijn om een aantal regels vast te stellen. Regels omtrent het schrijven van je HTML en CSS. Dit hoef je vaak niet zelf te verzinnen, gezien er vele bedrijven zijn die al een style guide openbaar beschikbaar hebben. Deze zou je als een soort boilerplate kunnen gebruiken om je eigen regels vast te stellen. Een veelgebruikte [CSS style guide](https://github.com/airbnb/css/) in ons vakgebied is die van AirBnB. Daarin wordt bijvoorbeeld vastgelegd dat een combinatie van OOCSS en BEM een geoorloofde methodiek is voor het schrijven van je CSS. Ook lezen we dat het gebruik van ID’s in je html een anti pattern is, gezien je hiermee te veel specificiteit in je HTML aanbrengt. Niet herbruikbaar dus. Zomaar een aantal regels uit deze style guide. Deze regels maken je codebase consistenter en dwingen jou en je collega's tot het schrijven van kwalitatievere code.

## Pattern libraries

Een pattern library is een verzameling van alle designelementen voor een User Interface. Veel van deze patronen komen meerdere keren terug in een website. Een UI toolkit als [Fabricator](https://fbrctr.github.io/demo/) of [Pattern Lab](https://patternlab.io/demos.html) kunnen je helpen om documentatie over de geschreven code en patronen vast te leggen. Handig dus voor een nieuwe collega!

Andere goede eigenschappen van een pattern library?

-   Het zal consistentie en cohesie aanbrengen in je codebase en uitstraling
-   Het versnelt je hele teams workflow, dus je bespaart tijd en geld
-   Meer samenwerking tussen alle disciplines binnen een projectteam
-   Creëer op deze manier een gedeelde taal die over meerdere disciplines gebruikt wordt
-   Het opbreken van een interface in herbruikbare componenten
-   Een goede style guide informeert het team over welke tools zij op het moment in hun gereedschapskist hebben zitten
-   Waarborgt documentatie om nieuwe collega’s of andere partijen snel up to speed te krijgen
-   Genereert regels omtrent het gebruik
-   Efficiënter onderhoud aan je codebase
-   Het maakt cross-browser/device, performance, en accessibility testen makkelijker

## Design System

Een pattern library en een CSS/HTML style guide maken onderdeel uit van het design system. Een design system is een compleet pakket met design en codestandaarden. Om deze standaarden waar te maken maak je gebruik van uitgebreide, aanwezige documentatie en codevoorbeelden. Een design system leidt in development teams daardoor vrijwel altijd tot een samenhangende, consistente gebruikerservaring voor de eindgebruiker van je website.

Bij mijn huidige opdrachtgever zijn we onlangs gestart met [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/). We gebruiken Pattern Lab als toolkit en we hebben strengere regels ingesteld als het gaat om schrijven van code. Door onze codestandaard strenger van elkaar te reviewen en te accorderen, denken we een goede basis te hebben gelegd voor een toekomstbestendige, consistente basis in onze codebase.

Maak jij in je huidige werk gebruik van een style guide en/of een pattern libary of zou dit juist goed zijn in de toekomst te gaan doen? Deel je ervaring!

### Over Sander

<img src="/_img/adventskalender/sanderlangendoen.jpg" alt="Foto van Kilian" class="floating-portrait">
Ik ben Sander Langendoen. Freelance front-end developer. Momenteel werkzaam voor WPG Media en Uitgevers. Ik ben blij elke dag betaald mijn hobby te mogen uitvoeren.
Sanders donatie gaat naar de Hersenstichting
