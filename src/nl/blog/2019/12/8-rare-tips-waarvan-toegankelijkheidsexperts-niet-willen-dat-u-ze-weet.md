---
title: '8 Rare Tips Waarvan Toegankelijkheidsexperts Niet Willen Dat U Ze Weet!'
date: 2019-12-04
author: Erik Kroes
categories:
    - Adventskalender
---

_Nummer 4 Zal Je Een Epileptische Aanval Geven!_

Deze titel is geschreven als een zogenaamde [clickbait-titel](https://nl.wikipedia.org/wiki/Clickbait) en ironisch bedoeld. Clickbait-titels presenteren vaak misleidende tips als een vorm van krachtige geheime kennis. In dit geval willen toegankelijkheidsexperts niet dat je deze tips kent omdat ze een slecht advies zijn. Dit zijn tips die je niet moet volgen.

## 1. Het gebruik van afkortingen verbetert je leesbaarheidsscore

> _"Een goede FK-score is belangrijk voor A11Y vanwege de U in WCAG's POUR."_

Het maken van begrijpelijke inhoud is een kernprincipe van de Web Content Accessibility Guidelines (WCAG). Leesbaarheid is een groot deel van het creëren van begrijpelijke inhoud. Ik heb zelf vaak moeite om eenvoudige taal te schrijven. Ik gebruik meestal lange woorden en zinnen die eindeloos lijken. Om dingen gemakkelijker te maken, gebruiken ik en vele anderen een leesbaarheidstool. Ik typ dit momenteel in [Hemingway](http://hemingwayapp.com/): een eenvoudige schrijfapp die een leesbaarheidsscore toont. Deze score is gebaseerd op een [Flesch – Kincaid leesbaarheidstest](https://nl.wikipedia.org/wiki/Leesbaarheid). De test neemt het totale aantal zinnen, woorden en lettergrepen, en berekent er een score uit.

Door mijn score in de gaten te houden, kan ik me concentreren op het doel van mijn tekst: een boodschap duidelijk overbrengen. Er zijn echter enkele valkuilen. Woorden met weinig lettergrepen scoren beter dan woorden met veel lettergrepen. Afkortingen worden vaak geteld als woorden met weinig lettergrepen. Zoals we kunnen leren van WCAG: [afkortingen kunnen lezers verwarren](https://www.w3.org/WAI/WCAG21/Understanding/abbreviations.html). Dus hoewel afkortingen een hogere score geven kunnen ze vaak beter worden vermeden. Hetzelfde geldt voor een andere voorkeur van leesbaarheidsscores. Je krijgt een betere score door korte zinnen te gebruiken. Maar wanneer je woorden begint weg te laten om zinnen in te korten, is het eindresultaat mogelijk minder leesbaar.

Een Flesch-Kincaid-score is een geweldige maatstaf om je te concentreren op leesbaarheid, maar het is niet het uiteindelijke doel van je tekst.

![Een heel smal bord met de tekst "geen alcohol voorbij dit punt". Er zijn gemiddeld 2 letters op elke regel. De tekst is vrijwel onleesbaar en ziet eruit als een lijst met afkortingen.](/_img/adventskalender/04-12-2019-1.png)

## 2. Pagina's die WAI-ARIA gebruiken zijn minder toegankelijk

In februari 2019 deed WebAIM een geautomatiseerde toegankelijkheidstest op 1.000.000 webpagina's. Zo'n enorme dataset geeft veel inzicht in de huidige status van het web. Er zijn veel [interessante conclusies](https://webaim.org/projects/million/) te trekken uit de resultaten. Eén daarvan was: "Startpagina's met ARIA hadden gemiddeld 26.7 meer detecteerbare fouten dan pagina's zonder ARIA". Dat is een behoorlijk demotiverende statistiek.

Ik vind het echter behoorlijk begrijpelijk. ARIA is een complexe techniek. Een van de belangrijkste toepassingen voor ARIA is dat ontwikkelaars hun eigen toegankelijke widgets en elementen kunnen maken die niet beschikbaar zijn als native HTML-elementen. Dit betekent dat wanneer je ARIA op een pagina vindt, dit waarschijnlijk wordt gebruikt om een ​​technisch complex component te maken. Met complexe componenten neemt de kans op problemen aanzienlijk toe.

Moet je ARIA dan niet gebruiken? Nou [als je het niet nodig hebt, gebruik het dan niet](https://www.w3.org/TR/using-aria/).Maar in sommige gevallen heb je misschien geen andere optie. Er is geen `<tablist>` of `<tabpanel>` in HTML. De [ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/) laten een geweldige manier zien om zo'n Tab-widget te bouwen. Maar hun voorbeeld zal niet volstaan ​​zonder aria.

De echte tip is niet om ARIA op zichzelf te vermijden, maar om het gebruik van ARIA te vermijden in situaties waar dit niet nodig is.

![Een kleine papieren paraplu bedekt nauwelijks een open kroonsteen met electriciteitsdraden. Het vormt een hopeloos schild tegen regen.](/_img/adventskalender/04-12-2019-2.png)

## 3. Geautomatiseerde tests dekken slechts 20% van WCAG

Veel cijfers worden rondgeslingerd in gesprekken en presentaties over geautomatiseerde toegankelijkheid. En of je nou denkt dat tests 10% tot 30% van de mogelijke problemen dekken, of 20% van de WCAG-criteria, het maakt niet echt uit.

Elk probleem gevonden door een geautomatiseerde test kost 0 moeite. Dat is het belangrijke nummer. Dit zijn problemen zonder onderzoekskosten, beschikbaar op elk punt van een development life cycle. Daarnaast kan 20% van de WCAG criteria de oorzaak zijn van 60% van je problemen. Geautomatiseerd testen vindt het laaghangende fruit. Mijn ervaring is dat laaghangend fruit het meest voorkomende soort fruit is.

Voeg een handmatige toetsenbordtest toe aan je automatische test en je zal waarschijnlijk de overgrote meerderheid van je problemen vinden. Een handmatige toetsenbordtest bestaat uit het volgende:

1. Ga door je pagina met de <tab> -toets.
2. Zorg ervoor dat elk interactief element kan worden bereikt.
3. Zorg ervoor dat elk interactief element kan worden gebruikt.
4. Zorg ervoor dat de volgorde logisch is.
5. Zorg dat de focus zichtbaar is.
6. Doe hetzelfde in omgekeerde volgorde met <shift> + <tab>.

Gefeliciteerd, je kan nu moeiteloos veel problemen vinden!

![Een betegelde muur heeft een uitsparing in de vorm van een wastafel en zijn silhouette. De wasbak was er duidelijk eerder dan de muur.](/_img/adventskalender/04-12-2019-3.png)

## 4. Je kan een toegankelijk alternatief aanbieden

WCAG heeft een soort ontsnappingsmechanisme voor mensen die van uitvluchten houden. Wanneer je een pagina hebt die niet conformeert aan WCAG, kun je een [‘conforme alternatieve versie'](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conforming-alt-versions-head) aanbieden. Het moet dezelfde informatie en functionaliteit bieden. Het moet bereikbaar zijn op een manier die geen barrières kent. Een [constant knipperende](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) pagina met een link naar een overeenkomstige alternatieve versie is geen oplossing. Knipperende pagina's kunnen epileptische aanvallen veroorzaken. Een bezoeker die aanvallen van lichtflitsen ervaart zal daar waarschijnlijk last van hebben voordat die de alternatieve versie bereikt.

Als je een conforme pagina kunt bouwen, waarom zou je dan toch proberen om een ​​alternatieve versie te maken? Het is gemakkelijk twee keer het werk, wat niemand leuk vindt. Maar het is ook zonde voor je gebruikers. Het verbergt alle toegankelijkheidsverbeteringen voor mensen die zich mogelijk niet identificeren als gehandicapt. Ze kunnen echter wel profiteren van deze verbeteringen. Een opgelost toegankelijkheidsprobleem betekent vaak een verbeterde gebruikerservaring voor iedereen. Door iedereen dezelfde inclusief ontworpen ervaring te geven, geef je mensen met een handicap de bevestiging dat ze erbij horen. Ze zijn niet een alternatieve versie die verborgen zit achter een link.

## 5. Schrijf uitgebreide aria-labels voor blinden

Helaas ben ik wel eens labels tegengekomen die specifiek geschreven waren voor mensen met een visuele beperking. Een voorbeeld was iets wat eenvoudige navigatie op een website had moeten zijn. Visueel had het duidelijke labels en het was eenvoudig te gebruiken. Het bevatte links met beknopte namen die overeenkwamen met hun bestemming, zoals 'home' en 'instellingen'. Het gebruik van een screen reader was echter een heel andere ervaring. Het menu had een label dat klonk als: "Dit hoofdmenu is waar u de website kunt navigeren". De link naar instellingen was gelabeld met: "Met de instellingenpagina kunt u dingen wijzigen zoals uw accountnaam of contactgegevens".

Hoewel goed bedoeld, helpt het niemand. Blind zijn betekent niet dat je niet weet waar een menu voor is, of wat een instellingenpagina je kan bieden. Door mensen te behandelen alsof ze hulpeloos zijn, zullen ze zich hulpeloos voelen. Het is een beetje de mansplaining van de toegankelijkheid. Ablesplaining?

Bij het schrijven van zogenaamde ‘accessible names’ schrijf je [korte functionele aria-labels](https://www.w3.org/TR/wai-aria-practices-1.1/#naming_effectively) die mensen snel kunnen onderscheiden. [Gebruiksinstructies zijn ook niet nodig](https://adrianroselli.com/2019/10/stop-giving-control-hints-to-screen-readers.html) .

## 6. Slechts een klein aantal van onze klanten heeft een handicap

Dit is een misvatting die me altijd blijft verbazen. Meer dan 15% van de wereldbevolking heeft een handicap. Wanneer meer dan 1 miljard mensen problemen hebben met toegang tot digitale informatie en diensten, noemen we dat niet een klein aantal.

Misschien heb je inderdaad een website met weinig gehandicapte bezoekers. Heb je overwogen dat dit eigenlijk een goede reden is om het toegankelijk te maken? Vergroot je bereik. Onderscheid je van anderen. De [business cases voor toegankelijkheid](https://www.w3.org/WAI/business-case/) zijn er genoeg.

De discussie mag echter nooit over het aantal mensen gaan. Praten over cijfers wekt de indruk dat er ergens na veel rekenen, er een redelijke hoeveelheid mensen is die je wel wil discrimineren en uitsluiten. Als iemand je om cijfers vraagt, vertel diegene dan dat het de verkeerde vraag is om te stellen. Zelfs al zijn de aantallen klein, ze doen er niet toe.

![Een parkeerplek die is gemarkeerd als toegankelijk is omgeven door een aaneengesloten stoeprand](/_img/adventskalender/04-12-2019-4.png)

## 7. De standaard focusindicator is veilig

Veilig is hier een gevaarlijk woord, maar technisch gezien is een standaard focusindicator [toegestaan](https://www.w3.org/WAI/WCAG21/Techniques/general/G165) door WCAG. Als je puur en alleen WCAG op de letter wil volgen, ben je hier klaar (hoewel sommige mensen dit succescriterium van WCAG zo interpreteren dat het wijzigen van de achtergrondkleur de standaardfocusindicator ongeldig kan maken).

De kans is groot dat de standaardfocusindicator heel moeilijk te zien is op delen van je website. Je kan waarschijnlijk iets veel beters maken dan deze standaardindicator. Als je enige doel is om WCAG te halen, doe je het toegankelijkheidsequivalent van "[Teaching to the test](https://en.wikipedia.org/wiki/Teaching_to_the_test)". Je scoort misschien goed op de korte termijn, maar als je erkent dat WCAG slechts een hulpmiddel is en geen doel, kunnen er op de lange termijn veel grotere winsten worden behaald.

Het is wel goed om te weten dat [standaard focusindicatoren steeds beter worden](https://blogs.windows.com/msedgedev/2019/10/15/form-controls-microsoft-edge-chromium/).

![Een stopcontact waar water uit giet](/_img/adventskalender/04-12-2019-5.png)

## 8. Onderscheid elementen op je pagina met een mooi fontje

In WCAG Succescriterium 1.4.1 staat dat we niet puur en alleen kleur kunnen gebruiken om iets te communiceren. Een voorbeeld van hoe het niet moet kan zijn dat je je fouten in een formulier met rood markeert. Of als binnen een navigatie de kleur van de huidige pagina verschilt van de andere links. Een ander bekend voorbeeld is het hebben van blauwe links op je pagina, maar zonder de kenmerkende underline. Door alleen op kleur te vertrouwen, sluit je mensen uit die beperkt (kleuren) zien.

Er zijn veel manieren om dit op te lossen, omdat het criterium behoorlijk vergevingsgezind is. Gebruik gewoon geen kleur als je enige visuele communicatiemiddel. Je kunt een passende foutmelding toevoegen aan je rode markeringen. Je kunt in je navigatie de huidige pagina dikgedrukt maken. Je kan ervoor zorgen dat je [links onderstreept zijn](https://adrianroselli.com/2019/01/underlines-are-beautiful.html).

Of ... je kan het lettertype van je links wijzigen. Technisch gezien zou je helemaal conformeren aan WCAG. Je kunt het lettertype zelfs wijzigen in Wingdings, het beroemde Windows-lettertype dat volledig uit pictogrammen bestaat. Volledig onleesbaar, maar geldig voor het 1.4.1 criterium. Een kleine verandering van je kerning, lijnhoogte, lettergrootte ... elke minimale verandering niet op kleur gebaseerd is voldoet.

WCAG heeft vier principes en 1.4.1 valt onder de eerste van vier: Perceivable. Wat u communiceert, moet voor iedereen waarneembaar zijn. Minimale veranderingen zijn een teken van minimale inzet en volgen niet de bedoeling van dit principe. Je wil duidelijk waarneembaar communiceren

Creatieve oplossingen zijn vaak minder effectief dan conventies. Het wijzigen van een lettertype kan nutteloos zijn voor een gebruiker die een aangepast lettertype heeft die de jouwe overschrijft.

Als je een toegankelijkheidstip ziet, bedenk dan of deze daadwerkelijk iets toevoegt voor je eindgebruiker . Als het niets verbetert aan hun ervaring, wees dan kritisch. De toegankelijkheidsgemeenschap is open en gastvrij. Voel je altijd vrij om de mening van anderen te vragen.

## Over Erik Kroes

<img src="/_img/adventskalender/erik-kroes.png" alt="Foto van Erik" class="floating-portrait">
Erik werkt bij ING aan de toegankelijkheid van het design system en is een toegankelijkheidsadviseur voor [Eleven Ways](https://twitter.com/elevenways_be). Hij is mede-organizator van [Idea11y](https://twitter.com/idea11y), de Inclusive Design & Accessibility meetup. Je kunt hem vinden op [Twitter,](https://twitter.com/erikkroes) waar hij ook af en toe serieus is.
Eriks donatie gaat naar de Hersenstichting.
