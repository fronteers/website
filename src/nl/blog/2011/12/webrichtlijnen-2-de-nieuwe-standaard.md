---
title: 'Webrichtlijnen 2: de nieuwe standaard'
date: 2011-12-04
author: Janita Top
categories:
    - Adventskalender
---

Sinds juni van dit jaar is de nieuwe versie van de Webrichtlijnen, versie 2, de officiële overheidsstandaard. Dit betekent dat overheden bij het bouwen van nieuwe websites moeten kiezen voor deze versie, via het 'pas toe of leg uit'-principe.

Wat houdt die verplichting precies in? Momenteel moeten websites van de rijksoverheid voldoen aan het hoogste niveau, dus alle richtlijnen onder versie 1. Mede-overheden zoals gemeenten en waterschappen moeten eind 2012 voldoen aan prioriteit 1, en per 1 januari 2015 aan de maximale vereisten.

Onder Webrichtlijnen 2 moeten websites voldoen aan het tweede niveau, AA. Dit is dus een verlichting ten opzichte van versie 1.

Minister Donner heeft toegezegd dat er een _algemene maatregel van bestuur_ (AMvB) komt als de resultaten achterblijven.

Bestaande websites die voldoen aan versie 1 van de Webrichtlijnen hoeven niet direct aangepast te worden. Er is een _overgangsregeling_ tot 1 januari 2015, dan vervalt de standaard voor Webrichtlijnen 1. De inspectie conform Webrichtlijnen 2 is nog niet van start gegaan, omdat er nog gewerkt wordt aan de toetsingsdocumentatie. De formele datum van de start van deze inspecties zal worden aangekondigd op [www.drempelvrij.nl](http://www.drempelvrij.nl).

Overigens zijn het niet alleen overheden die bouwen volgens richtlijnen: er zijn (gelukkig) ook bedrijven die er de voordelen van inzien voor hun bezoekers en voor henzelf en die een waarmerk hebben gekregen. Voorbeelden zijn de SNS-bank (prioriteit 1 voor toegankelijkheid) en Microsoft (Webrichtlijnen).

Nu weten we wat de status is van de nieuwe richtlijnen, maar wat verandert er inhoudelijk nu eigenlijk?

## Verschil in uitgangspunten, eenduidigheid en gelaagdheid

De nieuwe richtlijnen zijn flexibeler als het gaat om het uitgangspunt voor de te gebruiken technologie. Onder versie 1 moest je bijvoorbeeld HTML 4.01 of XHTML 1.0 Strict gebruiken. De nieuwe richtlijnen zijn _technologie-onafhankelijk_. Wel moet het _door toegankelijkheid zijn ondersteund_. Je kunt dus prima HTML5 gebruiken, mits het op zo'n manier gebouwd is dat hulptechnologieën zoals screenreaders er mee om kunnen gaan. Deze benadering is meer toekomstgericht dan die onder Webrichtlijnen 1; het maakt niet uit welke technologieën erbij komen, omdat dit principe altijd toepasbaar zal zijn.

Ten tweede is er nu _meer eenduidigheid_ in internationale context. Onder versie 1 was de relatie met de WCAG1.0 (Web Content Accessibility Guidelines van W3C) ijkpunten niet altijd even duidelijk. In versie 2 is WCAG2.0 één op één opgenomen. Dit past binnen de doelstellingen om internationaal meer op één gemeenschappelijke standaard uit te komen als het gaat om regels en toetsingen voor toegankelijkheid. Dit is bijvoorbeeld interessant voor websites die meerdere landen bedienen.

Voor de duidelijkheid: de _kwaliteitsrichtlijnen_ die binnen de webrichtlijnen aan de WCAG2.0 toegankelijkheidsrichtlijnen zijn toegevoegd, gelden dus alleen in Nederland. Dit is geen 'verbetering' van de WCAG richtlijnen, maar deze zijn er om de algehele toegankelijkheid te vergroten; niet alleen voor mensen met een functiebeperking, maar voor iedereen. Zo zijn unieke en duurzame URI's voor iedereen handig.

Tenslotte is er _gelaagdheid_ toegevoegd aan de webrichtlijnen. Voorheen kon je alleen aan alle 125 richtlijnen voldoen of niet, en veel mensen hadden hier problemen mee. Want als je voldeed aan 120 richtlijnen, dan leek het nog of je nergens aan voldeed, omdat het niet aan te tonen was met een webrichtlijnen waarmerk (wel met een Drempelvrij prioriteit 1 of 2 waarmerk voor toegankelijkheid). In versie 2 zijn er nu ook 3 niveaus in de webrichtlijnen waar je aan kunt voldoen. De niveaus heten nu A, AA en AAA, net als in WCAG2.0. En het zijn er geen 125 meer, maar 22!

## Nieuwe indeling

De webrichtlijnen hebben nu ook een andere structuur. In plaats van één lange lijst met 125 ijkpunten heb je nu 5 _principes_ met daaronder 12 richtlijnen voor toegankelijkheid en 10 voor bouwkwaliteit. Per richtlijn zijn er verschillende _succescriteria_. Pas op een dieper niveau staan de technische aspecten. Hier staat gedetailleerde uitleg en er staan voorbeelden van technieken die je kunt gebruiken—_afdoende technieken_—en veelvoorkomende fouten. Dit deel is dus wel technologie-specifiek, maar deze beschreven technieken zijn niet uitputtend en kunnen in de loop der tijd worden bijgesteld. Nog steeds future-proof dus, en handig als referentie bij het ontwikkelen.

## JavaScript mag. Inline frames ook.

Een aantal concrete veranderingen tussen versie 1 en versie 2:

-   Een JavaScriptloos alternatief is niet altijd vereist. De manier waarop het gebruikt wordt, moet natuurlijk wel toegankelijk zijn (zoals geen toetsenbordval).
-   Afkortingen beschrijven is niet langer een basiseis (`<abbr>`).
-   Inline frames zijn toegestaan, onder voorwaarde dat de content ook op een andere manier benaderd kan worden.
-   Well-formedness van opmaaktalen is een basiseis, in plaats van validatie. Het gaat erom dat het op de juiste manier geparsed kan worden.
-   Unieke en duurzame URI's is geen basiseis (AAA-niveau).
-   Markeren van dubbele content is nieuw (maar wel AAA-niveau). (En ook erg goed voor SEO.)
-   PDF's worden onder WCAG2.0 gezien als webpagina's, en moeten daarom ook toegankelijk zijn of er moet een toegankelijk alternatief worden geboden.

## Meer eisen op het eerste niveau

Tenslotte zijn er veranderingen in richtlijnen wat betreft het WCAG niveau waar ze onder vallen. Er is nu een aantal eisen onder prioriteit 1—A niveau—bij gekomen. Voorbeelden hiervan zijn geen toetsenbordval en duidelijke foutmeldingen. Op de website van het W3C staat de [volledige lijst met vergelijkingen](http://www.w3.org/WAI/WCAG20/from10/comparison-priorities/).

De nieuwe richtlijnen zijn te vinden op [versie2.webrichtlijnen.nl/norm](http://versie2.webrichtlijnen.nl/norm).

Voor wie de verschillen wil zien tussen WCAG1.0 en WCAG2.0 staat hier het [mapping-document van W3C](http://www.w3.org/WAI/WCAG20/from10/comparison-priorities/).

## Conclusie

Al met al een hoop veranderingen voor een meer flexibele en toekomstgerichte set Webrichtlijnen, waar de huidige gebruikte technieken beter in passen. En met de mogelijkheid van een AMvB is er eindelijk ook een stok achter de deur voor (mede-)overheden om er echt aan te gaan voldoen.

### Over Janita Top

<img src="/_img/2011/12/janita-top.jpg" alt="Foto van janita top uit 2011" class="floating-portrait" /> 
Janita is freelance front-end developer en zit namens Fronteers in de Normcommissie Drempelvrij.nl. Haar kernwoorden, zowel in werk als privé, zijn kwaliteit en duurzaamheid. Ze is gek op (trein)reizen, fietsen en gaat geregeld naar (pop)concerten.
Ze is te vinden op [Twitter](https://twitter.com/sigvi) en op haar eigen website [janitatop.nl](http://www.janitatop.nl/).

Donatie: Sea Shepherd
[Sea Shepherd](http://www.seashepherd.nl/) voert directe actie op zee om de afslachting van o.a. walvissen en dolfijnen tegen te gaan en de vernietiging van de leefomgeving te stoppen. Dit is hard nodig om ecosystemen en soorten te beschermen en te behouden. De organisatie krijgt geen subsidies en is daardoor volledig afhankelijk van donaties.
