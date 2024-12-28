---
title: Angular NgRx
date: 2025-01-05
author: Sven Hoffmann
summary: Het gebruik van NgRx als state management-oplossing in Angular biedt structuur en testbaarheid door een unidirectionele datastroom, maar kan ook extra boilerplate code en complexiteit voor side-effects met zich meebrengen. Is het de juiste oplossing voor jouw Angular app?
---

# Introductie

Hallo iedereen, mijn naam is Sven. Momenteel werk ik als softwareontwikkelaar bij MO4, waar ik betrokken ben bij het creëren van een webportaal voor de offshore-industrie.

Het front-end van dit webportaal is geschreven in Angular en heeft veel bewegende onderdelen. Informatie uit verschillende bronnen komt samen in één overzichtelijke weergave.

Een van de uitdagingen waarmee we tijdens de ontwikkeling geconfronteerd werden, was dat data op verschillende momenten binnenkwam. Dit zorgde voor complexe Observable-streams om data op de juiste manier te combineren. En dat maakte debuggen een stuk lastiger.

> 💡 **Wat zijn Observables?**
> Observables zijn een datatype die een stroom van waarden over de tijd representeert. Angular werkt grotendeels met behulp van Observables.

Het kon zo niet verdergaan, dus begonnen we onze zoektocht naar een _state management_-oplossing. Na het vergelijken van diverse opties, kozen we uiteindelijk voor NgRx.

# Waarom State Management?

Laten we een stapje terug doen. Een state management oplossing kan structuur brengen aan je business logic en het werken met data vereenvoudigen. Maar het kan ook extra boilerplate code met zich meebrengen.

Wanneer kies je voor een state management-oplossing en wanneer niet?

**State management libraries zijn overbodig...**

- Bij kleine applicaties waar het acceptabel is als de state lokaal op componentniveau wordt bijgehouden.
- Als een groot deel van de front-end complexiteit kan worden opgelost via endpoints of back-end oplossingen. In dat geval moet er meer nadruk liggen op de organisatie van je back-end.

**State management libraries zijn nuttig...**

- Bij grotere applicaties, vooral wanneer toegang tot dezelfde data nodig is op meerdere pagina's.
- Als de data complex is en er behoefte is aan een duidelijke dataflow in de front-end.

# Angular Redux: NgRx

NgRx is een Angular-implementatie van de Redux library, met enkele aanpassingen om het beter te laten werken met Angular als view-layer.

Het kenmerkende aan NgRx (en vergelijkbare implementaties), is de unidirectionele datastroom.

{% figure "/_img/blog/2025/01/angular-ngrx/ngrx-diagram-nl.svg" "Een schematische weergave van de NgRx dataflow. Het diagram toont vier hoofdcomponenten verbonden met pijlen: ‘Store’, ‘View’, ‘Reducers’ en hun onderlinge relaties. De Store stuurt ‘selectors’ naar de View, de View stuurt een ‘action’ naar de Reducers, en de Reducers sturen een ‘nieuwe state’ terug naar de Store, waarmee de cyclus compleet is. Het diagram is uitgevoerd in lichtpaarse rechthoeken met zwarte tekst en pijlen." "Een schematische weergave van de NgRx dataflow" %}

- **Store:** Bevat de huidige state van de applicatie.
- **Selectors:** Delen van de state kunnen worden gecombineerd en/of weergegeven als Observable streams.
- **View:** Angular-componenten kunnen de selectors gebruiken om de state weer te geven of op een andere manier te gebruiken.
- **Action:** Een 'bericht' dat wordt gestuurd vanuit de view, bijvoorbeeld bij het klikken op een knop. Deze berichten representeren events die in de applicatie gebeuren.
- **Reducers:** Via pure functions wordt met de huidige state en een action de volgende state gemaakt.

> 💡 **Wat zijn pure functions?**
> Een pure function moet altijd hetzelfde resultaat geven wanneer je deze een andere keer zou aanroepen met dezelfde input. Er mogen geen side-effects zijn.

Maar hoe haal je data op van een API of implementeer je andere side-effects als reducers altijd pure functions moeten zijn?

# Effects

NgRx biedt *effects* voor het afhandelen van side-effects.

{% figure "/_img/blog/2025/01/angular-ngrx/ngrx-diagram-effects-nl.svg" "Een schematische weergave van de NgRx dataflow. Het diagram toont vier hoofdcomponenten verbonden met pijlen: ‘Store’, ‘View’, ‘Effect’ en ‘Reducers’. De Store stuurt ‘selectors’ naar de View, die vervolgens acties kan sturen naar zowel Effect als Reducers. Het Effect component stuurt ook acties naar de Reducers, en de Reducers sturen een nieuwe state terug naar de Store, waarmee de cyclus compleet is. Het diagram is uitgevoerd in lichtpaarse rechthoeken met zwarte tekst en pijlen." "Een schematische weergave van de NgRx dataflow met effecten" %}

Effecten zijn Observable streams die luisteren naar alle acties die worden uitgestuurd. Je kunt luisteren naar een specifieke actie, side-effects uitvoeren, en vervolgens een nieuwe actie uitsturen op basis van het resultaat.

Voor een API-call kan het er als volgt uitzien:

{% figure "/_img/blog/2025/01/angular-ngrx/ngrx-effect-sequence-nl.svg" "Een diagram dat de interactie tussen View, Effect en Reducer componenten toont voor het ophalen van kattenfeitjes. De View stuurt een ‘Dashboard Get Cat Fact’ actie naar het Effect component, dat vervolgens twee mogelijke paden kan volgen: een succesvol pad ‘Cat API Get Cat Fact Success’ of een mislukt pad ‘Cat API Get Cat Fact Failure’ naar de Reducer. Het diagram is uitgevoerd in lichtpaarse rechthoeken met zwarte tekst en pijlen." "Interactie tussen de View, Effects en Reducers" %}

# Eenrichtingsverkeer

De data in NgRx stroomt in één richting, wat grote voordelen biedt, maar ook voor wat nadelen zorgt.

**Voordelen:**

- De state kan alleen worden veranderd via actions, waardoor het eenvoudig is om te achterhalen waarom iets is veranderd.
- NgRx werkt met de Redux debugger extension voor webbrowsers, waarmee je de huidige state kunt zien en alle uitgevoerde acties kunt terugspoelen. Dit maakt debuggen een stuk makkelijker.
- Reducers en selectors moeten pure functies zijn, wat het testen vereenvoudigt.

**Nadelen:**

- De state kan niet zomaar worden veranderd. De code die acties en reducers definieert, kan aanvoelen als veel boilerplate om iets eenvoudigs te bereiken.
- Voor side-effects moet je Effect streams schrijven, wat complex kan aanvoelen voor bijvoorbeeld een eenvoudige API-call.

# Conclusie

De NgRx state management library heeft een unieke architectuur die je dwingt na te denken over de datastroom van je applicatie. Het grootste voordeel is de testbaarheid en transparantie die het biedt. Het grootste nadeel is dat er veel bestanden en onderdelen nodig zijn om state toe te voegen aan je applicatie.

Wil je zelf een keer aan de slag met NgRx? [De officiële documentatie kan je hier vinden.](https://ngrx.io/)

Heb je vragen of opmerkingen? Ik vind het altijd gezellig om over tech te praten. [Vind me via mijn website.](https://svenh.dev/)

Bedankt voor het lezen!
