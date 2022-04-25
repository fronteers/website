---
title: "CSS en JavaScripters"
date: 2018-12-21
author: Peter-Paul Koch
categories: 
  - Adventskalender
---
Een probleem dat ik de laatste twee of drie jaar steeds vaker zie opduiken, is dat het lijkt alsof een boel JavaScripters, vooral diegenen die in grote toolchains hebben geïnvesteerd, niet meer zo goed weten hoe CSS werkt.

Om daar wat aan te doen heb ik het plan opgevat hier een boek aan te wijden. Dit artikel is een soort voorschot daarop. Bovendien is het leuke van de Fronteers-crew dat de meeste mensen vloeiend zijn in zowel CSS als JavaScript en dat ik hier dus wellicht wat nuttige feedback kan krijgen.

Het boek gaat niet noodzakelijkerwijs door CSS heen om aan JavaScripters duidelijk te maken wat de cascade is, waar display voor dient, en hoe backgrounds werken. In plaats daarvan wil ik een aantal basisconcepten en -problemen bespreken en hoop ik op wat feedback - vooral van JavaScripters die wat slechter in CSS zijn.

Dit artikel beschrijft twee van die basisconcepten, is geschreven als vingeroefening, en in de hoop wat goede argumenten en suggesties los te maken.

# CSS als JSON

Eén idee dat ik had, is om CSS uit te leggen als een soort JSON-bestand. Mijn analogie gaat op dit moment als volgt:

Stel dat je de opdracht krijgt om een JSON-bestand te herschrijven. Dit bestand wordt later in de toolchain ingevoerd in een module waar je geen toegang toe hebt maar wel incomplete documentatie van kunt inzien, en die module genereert uit de JSON-gegevens een webpagina. Aan jou de taak deze webpagina te herzien.

Een JSON-bestand is geen programma, in plaats daarvan geeft het instructies aan een programma. Deze instructies hoeven niet in een logische volgorde te staan: de properties in een JSON-bestand worden niet noodzakelijkerwijs in volgorde behandeld. In plaats daarvan zoekt de interpretatie-module op naam naar bepaalde properties, en dan naar andere, en maakt het niet uit waar in het JSON file ze staan.

Als je aan het werk gaat en proefversies van de JSON door de module heen haalt, merk je al snel dat sommige JSON-wijzigingen tot grote veranderingen in de webpagina leiden. Sommige van die veranderingen zijn beschreven in de documentatie, maar andere niet - of niet erg duidelijk. Naarmate je project vordert, leer je steeds meer over hoe de interpretatie-module eigenlijk werkt en hoe je de JSON moet herschrijven om de webpagina te verbeteren.

CSS is een soort van JSON. CSS is ook geen programma of programmeertaal. In plaats daarvan geeft het instructies aan een gespecialiseerde module, de CSS Engine. Deze module zorgt ervoor dat de CSS wordt geīnterpreteerd en er, idealiter, een webpagina op het scherm verschijnt die er uit ziet zoals jij bedoeld hebt.

Sommige CSS-declaraties veroorzaken een klein effect: het gebruiken van een bepaald lettertype, een bepaalde kleur, of tekst-decoraties. Andere zijn veel grootschaliger van opzet: ze bepalen de volledige layout van de pagina en in sommige gevallen treden er complexe wisselwerkingen op waardoor je pagina er niet meer uitziet zoals je zou willen. Terwijl je CSS schrijft en herschrijft, begin je steeds beter te begrijpen hoe de CSS engines werken.

Slaat deze vergelijking ergens op? Zou dit helpen om CSS-basisconcepten aan JavaScripters uit te leggen? Zijn er wijzigingen nodig? Ik hoor je commentaar graag.

# Global scope

Het belangrijkste punt is echter de cascade. De cascade lijkt een van de grootste struikelblokken voor JavaScripters te zijn - niet omdat ze hem niet zouden begrijpen, maar omdat ze hem liever niet gebruiken.

Als je klassieke CSS schrijft, is namelijk elke declaratie global; dat wil zeggen dat het op elk element van toepassing is dat aan de selector voldoet. CSS'ers voelen nu een massieve "duh!" vanuit hun onderbuik opborrelen, maar het is belangrijk te beseffen dat dit voor JavaScripters een serieus probleem is. Gij zult uw variabelen niet global maken. En CSS declaraties zijn een soort variabelen, dus die zult gij evenmin global maken. Dus.

Ze hebben hier een punt, soort van. Je `div + p` selector kan fantastisch werken in de hoofdkolom van je site, maar irritante bij-effecten geven als je eenmaal aan de zijbalk werkt - of erger nog, als je een HTML-snippet van een externe bron aan de pagina toevoegt. We willen graag onze selector beperken tot de hoofdkolom waarvoor hij bedoeld is. In JavaScript-termen: we willen de scope van onze selector bepalen.

Voor dit probleem zijn twee oplossingen. De eerste is class names voor alles gebruiken; en dit is het kernconcept van populaire CSS-methodologieën zoals met name BEM. In ons voorbeeld wordt het dus iets als `section.hoofdkolom div + p`, en de stijlen werken niet meer door op andere pagina-elementen.

# CSS-in-JS

JavaScripters gebruiken echter geen BEM, want echte JavaScripters gebruiken geen CSS-methodologieën. In plaats daarvan wordt het gebruik van CSS-in-JS steeds populairder. Het is belangrijk te beseffen dat CSS-in-JS een afgeleide is van de class name-strategie.

Zie bijvoorbeeld [deze introductie tot CSS Modules](https://css-tricks.com/css-modules-part-1-need/) of [dit artikel over CSS-in-JS](https://hackernoon.com/all-you-need-to-know-about-css-in-js-984a72d48ebc). In beide gevallen zorgt een script er voor dat de CSS die je in je module definieert, met een class name wordt versterkt en aan de HTML-pagina wordt toegevoegd. Het script genereert dus op de achtergrond de class names die de gegenereerde CSS nodig heeft.

Persoonlijk ben ik geen groot voorstander van CSS-in-JS, maar ik geef grif toe dat dat gedeeltelijk komt doordat ik de jaren 2001-05 heb besteed aan front-enders te leren hun CSS en JavaScript juist te scheiden. Het is niet makkelijk om weer afscheid te nemen van deze manier van denken, vooral niet als CSS-in-JS gedeeltelijk staat voor "zo, nu hoef ik geen CSS meer te leren."

Niettemin zal ik CSS-in-JS serieus moeten bestuderen en de mogelijkheid moeten overwegen dat het de juiste oplossing voor het probleem is. Op dit moment weet ik dat nog niet - argumenten en suggesties zijn welkom.

Bovendien: zelfs als CSS-in-JS de juiste oplossing is, is de global scope van CSS wel een probleem? Of lijkt het alleen maar een probleem als je teveel JavaScript hebt geschreven en nooit geleerd hebt op een CSS-manier te denken? (Vooropgesteld dat er een CSS-manier van denken bestaat.) Ook hier zijn argumenten en suggesties welkom.

# Web Components

Er is maar één oplossing voor het probleem van de global scope die echt anders is dan class names en dat is Web Components, uitgevonden en uitgedragen door Google. (Ligt het aan mij, of lukt het nou echt niet om Web Components serieus van de grond te krijgen in front-end development?)

Bij Web Components gebruik je de [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) om een deel van je HTML te isoleren van de rest van de pagina, en als je in dat deel CSS definieert, geldt die CSS alleen voor het geīsoleerde gedeelte. In zekere zin is dit een betere oplossing dan BEM/CSS-in-JS, aangezien de HTML en CSS nu _echt_ een aparte module vormen in plaats van class names te gebruiken om dit te emuleren.

Zijn Web Components beter dan CSS-in-JS? Slechter? Of zijn ze bedoeld voor anderssoortige situaties? Ook hier zijn argumenten en suggesties welkom.

# Conclusie

Om CSS aan JavaScripters te leren, is het noodzakelijk te denken zoals JavaScripters denken. Ik heb geen idee of dat in het bovenstaande gelukt is, maar dat is een van de redenen dat ik dit publiceer. Laat maar weten wat je vindt - vooral als je kracht eerder in JavaScript dan in CSS ligt.

En als alles perfect loopt, ligt het boek rond maart 2020 in de winkel.

(TODO: Over Peter-Paul Koch
/adventskalender/ppk.jpg
Peter-Paul Koch is front-end consultant en congresorganisator te Amsterdam. Hij bestudeerde browsers op https://quirksmode.org, praat wat, schrijft wat, runt samen met Krijn Hoetmer [CSS Day](https://cssday.nl) en [performance.now()](https://perfnow.nl), richtte ooit tussen de bedrijven door Fronteers en het Fronteers-congres op, en zoekt nu naar nieuwe manieren om moderne front-enders te behoeden voor dezelfde fouten die tien of twintig jaar geleden zijn gemaakt.
Donatie: Bits of Freedom)
