---
title: Jamstack - Unwrapping De (mogelijke) toekomst van webdevelopment! 🎁
date: 2024-12-28
author: Gabriël Moawad
summary: Een beknopte introductie tot de Jamstack-architectuur, die pre-rendering, ontkoppeling en statische bestanden combineert om webontwikkeling te stroomlijnen zonder complexe serverinteractie aan de client-side.
categories:
  - Adventskalender
key: jamstack--unwrapping-de-mogelijke-toekomst-van-webdevelopment
---

## De geest van Jamstack

Jamstack is geen set van voorgedefinieerde frameworks, een specifieke tool of een programmeertaal. In de ware geest van de feestdagen, belichaamt het conventies, best practices en tradities die een architectuur weerspiegelen, ontworpen om producten te bouwen met goede performance en veiligheid.

> Jamstack is een moderne architectuur voor webontwikkeling die erop gericht is het web sneller, veiliger en gemakkelijker schaalbaar te maken. De term 'Jamstack' staat voor JavaScript, API's en Markup. Het legt de nadruk op pre-rendering en ontkoppeling, waardoor websites kunnen worden geserveerd als statische bestanden op een CDN, wat de prestaties en beveiliging verbetert. JavaScript handelt dynamische functionaliteiten af, API's maken verbinding met backendservices en Markup wordt vooraf gebouwd tijdens het bouwproces.

Wanneer je deze definitie leest, denk je misschien: “Deze concepten staan nu al op het verlanglijstje van veel bedrijven en hun ontwikkelteams!”. En je hebt gelijk. Er zijn veel parallellen tussen Jamstack en de bewegingen van Microservices, Composable en MACH die we de afgelopen jaren hebben gezien. Maar Matt Biilmann, CEO en medeoprichter van Netlify, die Jamstack voor het eerst noemde in 2015, gaat met 'ontkoppeling' een stapje verder dan we gewend zijn. Maar voordat we daar volledig induiken, eerst een kleine geschiedenisles:

## Het monolithische verleden en de microservice revolutie

In de beginjaren van webontwikkeling hadden we de zogenaamde monolithische architectuur. Stel je een gigantische sneeuwbal voor, waarin alles dicht op elkaar zit in een enkele, ondeelbare structuur, inclusief de interface aan de client-side, de business logica server-side en de database. Deze aanpak resulteert in een grote codebase met weinig modulariteit, waardoor updates een beetje lijken op het veranderen van de vulling van een kerstpudding zonder deze in zijn geheel uit elkaar te moeten halen. Dit alles resulteert in een hoger risico op downtime, omdat een fout in één onderdeel gevolgen kan hebben voor het hele systeem. Bovendien kunnen deze grotere codebases lastig te beheren worden, waardoor het moeilijker wordt om nieuwe functies te implementeren of bugs snel op te lossen.

Toen was daar de microservices-architectuur, een revolutie in de webontwikkelingswereld. Deze aanpak splitst monolithische applicaties op in kleinere, onafhankelijke eenheden. Elke microservice voert een specifieke functie uit en werkt onafhankelijk, waarbij ze communiceren via API's. Deze modulariteit maakt onafhankelijke aanpassingen, schaling en implementatie mogelijk, net als de werkplaats van de Kerstman waar elke elf een gespecialiseerde, geïsoleerde taak heeft.

# Servers vs. CDN's

De werkplaats van de Kerstman bevindt zich op de Noordpool, waar de elfen onvermoeibaar werken om aan alle verzoeken te voldoen. Als elke elf elk verzoek voor hetzelfde speelgoed zou moeten afhandelen en het meteen door de Kerstman zou moeten laten bezorgen als het klaar is, zou dat behoorlijk inefficiënt zijn. Hier komt Jamstack om de hoek kijken en transformeert het proces in een klap door de magie van ✨ pre-rendering ✨.

In plaats van een server elke aanvraag te laten afhandelen, maakt Jamstack alle pagina's vooraf op en verpakt ze in statische HTML-bestanden die klaar zijn om direct getoond te worden. Deze statische bestanden worden vervolgens gedistribueerd naar Content Delivery Networks (CDN's) over de hele wereld. Dus in plaats van dat de Kerstman met zijn arrenslee overal naartoe moet racen, zijn ze wereldwijd gestationeerd, klaar om cadeautjes van dichterbij af te leveren. Deze aanpak zorgt ervoor dat de inhoud snel en efficiënt wordt weergegeven.

![Diagram van de traditionele stroom versus Jamstack stroom](/_img/blog/2024/12/advent-2024-gmoawad/jamstack-diagram.png)

## Aan de slag

Beginnen met Jamstack kan ontmoedigend lijken, maar het is eigenlijk vrij eenvoudig. De magie in dit alles zijn de zogenaamde [Static Site Generators](https://jamstack.org/generators/) die het meeste werk al voor je oppakken! Met deze frameworks kunt u externe data (van bijvoorbeeld een [Headless CMS](https://jamstack.org/headless-cms/)) vooraf omzetten in markup, waardoor statische HTML-bestanden ontstaan. Dit maakt je product minder vatbaar voor fouten, omdat wanneer het gebouwd wordt, het product inclusief data nu verpakt is en volledig op zichzelf staat. Dit zorgt er tevens voor dat als een statische site wordt aangevallen, er geen achterliggende servers om zullen vallen, hoogstens een node van de CDN die de site distribueert.

Dit klinkt misschien alsof er geen wijzigingen meer kunnen plaatsvinden in data of code, maar in meer volwassen Jamstack-implementaties zorgen webhooks (die luisteren naar veranderingen in zowel code als content) ervoor dat de build pipeline automatisch wordt getriggerd. De `dist`-map, bestaande uit puur statische assets, wordt dan opnieuw gegenereerd met nieuwe data/code en geüpload naar de CDNs. Door de onderstaande stappen te volgen, kan je zelf beginnen met het opzetten van een eigen Jamstack-project en de voordelen van deze vorm van webarchitectuur ervaren.

1. Kies een Headless CMS met een trial/gratis component, zoals [Contentful](https://www.contentful.com/sign-up/?plan=Free/) en maak een space aan met een aantal contentdefinities en entries.
2. Kies een eenvoudige Static Site Generator zoals, bijvoorbeeld, [eleventy](https://www.11ty.dev/) en bouw een, voor nu, templates met 'hardcoded' data.
3. Maak een Node.js script met bijvoorbeeld Axios die de gegevens via het headless CMS endpoint ophaalt en lokaal (in een json) wegschrijft.
4. Pas nu de website templates aan zodat het refereert naar de gegevens uit het Headless CMS die lokaal zijn weggeschreven.
5. Zorg er nu voor dat je met nog een Node.js scriptje je de site statisch kan genereren (met functionaliteit uit je Static Site Generator).
6. Push dit alles naar een repository op bijvoorbeeld [GitHub](https://www.github.com).
7. Ga naar een platform zoals [Netlify](https://netlify.com/). Koppel je repository en implementeer daar alles met de combinatie van bovenstaande Node.js scripts.
8. Configureer webhooks voor zowel contentupdates in Contentful als codewijzigingen in je repository om de bouw van je statische site te triggeren.
9. Nu zou je inhoud automatisch moeten worden upgedate daar je script door deze webhooks wordt aangezwengelt, de nieuwe gegevens ophaalt, de site genereert en uitrolt op je gekozen platform!

## Technische beperkingen

Ik hoor je denken: serveerden we eigenlijk al geen statische bestanden toen de Kerstman nog vele jaren jonger was? Nou, dat deden we inderdaad! Alleen werkte we toen rechtstreeks in HTML-bestanden en niet geautomatiseerd met de kracht van alle webdevelopment ontwikkelingen zoals we nu kunnen! Deze Static Site Generators maken dit een stuk eenvoudiger voor ons, maar er zijn nog steeds beperkingen en complexiteiten Waar we rekening mee moeten houden.

Voor grotere of vaak veranderende sites kan er bijvoorbeeld een dilemma ontstaan tussen de frequentie van wijzigingen en het volume. Het genereren van statische sites kan lang duren of zo vaak starten dat het in wezen nieuwe gegevens serveert zoals we gewend waren in de 'ouderwetse' flow, waardoor het onmogelijk wordt om de statische bestanden te cachen op het CDN. Om dit soort problemen op te lossen, moeten we kijken naar geplande of gebundelde runs van de Static Site generator. Of nog complexer, door alleen de delta in wijzigingen te renderen sinds de vorige keer dat het gegenereerd is in plaats van ook alle ongewijzigde pagina's.

Daarnaast zijn er sites die niet in zijn geheel statisch gegenereerd kunnen worden. Denk bijvoorbeeld aan interactie op een e-commercesite, waar dingen aan een winkelwagentje moeten worden toegevoegd en later weer terugkomen, wat betekent dat er tijdens runtime nog steeds API-calls naar microservices plaatsvinden of interactie met localstorage nodig is. Dit heet 'hydrateren', waarbij statische pagina’s aan de client-side pas worden “verrijkt” voor dynamische functionaliteit. Dit brengt uitdagingen met zich mee, zoals data-synchronisatie en het optimaliseren van laadtijden, waardoor statische en dynamische elementen naadloos samenwerken.

## Conclusie

Hoewel Jamstack een moderne, efficiënte en veilige benadering van webontwikkeling biedt, is het niet zonder uitdagingen. De noodzaak om bouwtijden, de frequentie van updates en het hydrateren van statische en dynamische inhoud te ontwikkelen, kan het geheel complex maken. Iets wat vooral bij het werken aan grotere projecten zichtbaar wordt. Met zorgvuldige planning en afweging van de voor- en nadelen kunnen deze uitdagingen mogelijk worden getackled, waardoor een Jamstack-ervaring net zo heerlijk kan zijn als het openen van cadeautjes tijdens Kerst. 🎄

## Over de auteur

Gabriël Moawad is een front-end developer uit Utrecht met meer dan 11 jaar ervaring bij Capgemini's Digital Customer Experience Front-end Team. Hij studeerde ICT aan de Hogeschool van Amsterdam en begon zijn carrière bij kleinere agency-achtige bedrijven zoals Mirabeau en Tizio. Bij Capgemini heeft hij gewerkt met klanten als ABN Amro, Lacoste, SuitSupply, Unilever, de Nederlandse Politie en nu bij Boels waar hij Contentstack implementeert. Gabriëls huidige passie ligt in het MACH, Headless CMS en composable domein, wat aansluit bij de Jamstack focus van dit artikel. Daarnaast houdt hij van basketbal, bord- en videogames en reizen.
