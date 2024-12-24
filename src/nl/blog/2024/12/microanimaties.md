---
title: "It's all in the details: Microanimaties als kers op de taart"
date: 2024-12-15
author: Anke Willems
summary: "Voeg microanimaties toen aan je site om deze net dat beetje extra te geven."
categories:
    - Adventskalender
key: microanimations-awillems
---

Het verschil tussen een goede site en een site die echt lekker werkt voor de bezoeker zit hem in de kleine dingen. Het gebruik van microanimaties kan de ervaring voor een gebruiker echt verbeteren. De ontwerper Charles Eames zei al: 'Details zijn niet gewoon details. Details maken het ontwerp'. En microanimaties zijn nét het soort details die je website naar een hoger plan kan tillen.

Een hover op een knop of een focus outline die mooi in fade zijn al voorbeelden van microanimaties die je waarschijnlijk al gebruikt. In dit artikel wil ik vooral in gaan op manieren waarop deze animaties de UX kunnen verbeteren.

## Microanimaties?

Het gebruik van animatie op een website kan je doen met grootse gebaren. Een pagina bouwt een grid in masonry op, de achtergrond heeft allerlei bewegende onderdelen of het logo komt aanvliegen op de homepage. Er kunnen vast use cases zijn voor deze beweging, maar dat bevindt zich meer op het vlak van branding.

Microanimaties daarentegen zijn kleine, ogenschijnlijk onopvallende stukjes bewegend design. Ze zijn er om de bezoekerservaring te verbeteren, net wat extra's te geven aan je ontwerp, en vooral om de flow en gebruiksvriendelijkheid te verbeteren. Denk hierbij aan een animatie wanneer een element focus krijgt, aangeklikt wordt, of naar een andere staat of plek beweegt.

## Wat maakt een microanimatie een aanwinst voor de UX?

Animaties kunnen je site prettiger in het gebruik maken, maar alleen als de timing ook daadwerkelijk goed is. De Nielsen Norman group, een kenniscentrum voor UX, stelt dat een goede ondersteunende animatie aan drie zaken moet voldoen:

- Snel
- Subtiel
- Doelgericht

### Snelheid

De ideale tijd voor een animatie is tussen de 100 en 500ms. Maar eigenlijk moet je al een goede reden hebben om hoger dan 300ms te gaan zitten. Het lijkt snel, zeker tijdens het ontwerp en de bouw. Maar voor een gebruiker die een actie op je site doet is dit een timing die snel genoeg is om wel feedback te geven maar niet vertragend aanvoelt. De NN groep geeft als vuistregel: Hoe verder iets moet bewegen, hoe langzamer de animatie.

Daarnaast wil je niet dat een animatie linear is. In de natuur is weinig lineair en zeker beweging niet. Massa doet er even over om in beweging te komen, en ook afremmen kost even tijd. Voeg dus wat easing aan je animatie. Het gebruik van bijvoorbeeld `ease-in-out` zorgt dat je animatie wat langzamer start, dan sneller gaat, en uiteindelijk weer vertraagt naar het einde toe.

### Aanwezig, maar subtiel

Een subtiele animatie werkt beter dan een lange trage transitie van het één naar het ander. Het is leuk om je technische skills tentoon te spreiden, maar de gebruiker moet misschien wel drie keer terug naar de index met de nieuwsberichten, en zit helemaal niet te wachten om een paginaopbouw die twee seconden duurt. Veel prettiger is het om een kleine animatie te hebben bij bv. het aanklikken van een checkbox, of het hoveren over een knop. Hou je animaties klein, subtiel en doelgericht.

### Doelgericht

Het hele doel van een animatie moet zijn om je gebruiker feedback te geven over een actie die ze net gedaan hebben, of te wijzen op een mogelijkheid van je site. Je voegt een item toe om te kopen en bij je winkelwagentje verschijnt een klein bolletje. Je maakt een keuze in een formulier en de checkbox animeert naar een aangeklikte staat. De kleine beweging van de animatie trekt de aandacht naar het element en bevestigt dat de actie gelukt is. Het refereert aan de 'echte wereld' waar iets ook niet zomaar op een andere plek verschijnt, maar ergens heen gebracht wordt door een actie.

Een ander bekend voorbeeld is het toevoegen van een _loader_. De bezoeker heeft een actie gedaan, maar de site moet eerst de info nog ophalen. Het tonen van een kleine laadanimatie geeft én feedback (en dus bevestiging) dat er wat gebeurt, én uit onderzoek blijkt dat de laadtijd korter wordt ervaren dan wanneer er geen voortgang getoond wordt.

Daarnaast kan je een animatie gebruiken om de gebruiker een indruk te geven hoe de website in elkaar zit. Als je op een tab klikt en vanaf de zijkant schuift een card in, dan 'leeft' die card dus aan de rechterkant van de site. Een swipe naar links zou dan een goede gesture zijn om de card weer te laten verdwijnen.

## Spaarzaam en bewust

Er is nog een reden om je animaties klein te houden, hoeveel we ook houden van _scrolljacking_ en parallax animaties. Hou er rekening mee dat er gebruikers zijn die niet goed tegen veel beweging op een site kunnen, er misselijk van worden of er zelfs epileptische aanvallen van kunnen krijgen. De WCAG richtlijnen raden aan om een maximaal van 3 knippers per minuut te gebruiken. Beter nog is het om gebruik te maken van de media query `@media (prefers-reduced-motion)`. Je kan ermee de instellingen van de gebruiker uitlezen en bijvoorbeeld geen animaties voorschotelen als deze setting aan staat.

## Test!

Maak gebruik van microanimaties om je site net dat beetje extra te geven. Wat leent zich bij jouw project voor wat extra beweging? Kijk vooral hoe andere websites het aanpakken, en wees niet bang om uit te proberen. Vraag mensen om je heen mee te kijken, want het goed timen van een animatie zodat deze natuurlijk aanvoelt kan best wat trial en error kosten. Begin klein, bouw langzaam uit naar andere elementen en bedenk dat het beter is een paar goede animaties te hebben, dan heel veel die net de plank misslaan. Enjoy!
