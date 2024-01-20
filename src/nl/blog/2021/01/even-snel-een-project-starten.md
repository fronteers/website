---
title: '&quot;Even snel&quot; een project starten'
date: 2021-01-03
author: Renee de Kruijf
categories:
    - Adventskalender
---

Je kent het wel, je wil even snel iets bouwen of wat code uitproberen. Je maakt een map aan, gooit daarin een index.html, een CSS bestand en een JavaScript bestandje, om vervolgens met wat code te rommelen. In dit voorbeeld heb je gewoon statische bestanden die je in een browser (naar keuze) kunt laden om te checken of het klopt wat je aan het maken bent.

Je kent het wel, je wil even snel iets bouwen of wat code uitproberen. Je maakt een map aan, gooit daarin een index.html, een CSS bestand en een JavaScript bestandje, om vervolgens met wat code te rommelen. In dit voorbeeld heb je gewoon statische bestanden die je in een browser (naar keuze) kunt laden om te checken of het klopt wat je aan het maken bent.

Als ik met een onderdeel bezig ben voor een project en het wil maar niet lukken, doe ik dit soms. Dan vind ik het handig als ik dat ene onderdeeltje even uit het grotere geheel kan halen om er los van het project mee aan de gang te gaan. Ik vind het zelf dan wel heel handig als de browser de pagina herlaad als ik iets aangepast heb. Maar dan komen er nog meer handelingen aan te pas voordat ik kan beginnen. Dat is allemaal best te doen, maar wat zou het toch handig zijn als dat met één commando veel sneller kan?

Natuurlijk kan dat! Ik heb in mijn _command line_ een functie gemaakt die in een mum van tijd een klein projectje voor me aanmaakt, zodat ik snel iets uit kan proberen.

In het _config_ bestand van de _command line_ kun je namelijk zelf functies maken. De functie die ik gebruik ziet er als volgt uit:

```
function basicsetup() {

   mkdir /home/reneedekruijf/Bureaublad/"$1"

   cd /home/reneedekruijf/Bureaublad/"$1"

   mkdir /home/reneedekruijf/Bureaublad/"$1"/images

   mkdir /home/reneedekruijf/Bureaublad/"$1"/js

   mkdir /home/reneedekruijf/Bureaublad/"$1"/css

   touch index.pug js/script.js css/style.css

   code .

	 npm init -y

   parcel serve index.pug --open

}
```

Als ik nu iets wil uitproberen, type ik in de terminal: `basicsetup "testproject"`. Er wordt nu een folder op mijn bureaublad aangemaakt met de naam _testproject_.

Deze functie `basicsetup` roep je aan door de naam in je CLI te typen, de functie wordt dan uitgevoerd. Ik heb op een paar plekken `$1` gebruikt. Dit is een variabele die je een willekeurige waarde mee kunt geven. Dit doe je door achter de functienaam de naam van je project in te voeren tussen aanhalingstekens. In dit geval wordt `$1` dus _testproject_. Die kun je vervolgens in de functie zo vaak als je wil terug laten komen.

## Wat doet deze code?

Op de eerste regel maken we de folder aan door het commando `mkdir` te gebruiken, dit staat voor _make directory_.

Op de volgende regel gebruiken we `cd` (_change directory_) om in de folder _testproject_ te komen, die we net hebben gemaakt. In de drie volgende regels gebruiken we weer `mkdir` om in de nieuw aangemaakte folder achtereenvolgens drie nieuwe folders te maken, een images-, een js- en css-folder.

Dan maken we met `touch` (hiermee kun je bestanden aanmaken) drie bestanden aan. Een CSS file en een JavaScript file en beide al meteen in de juiste folder. Als laatste van deze regels maken we een index.pug bestand in de root folder.

Deze _index_ heeft niet de extensie `.html` maar `.pug`. [PUG](https://pugjs.org/api/getting-started.html) is een templating taal voor HTML. Met PUG kun je met een aangepaste notatie HTML genereren. Ook kun je templates maken en je kunt variabelen gebruiken. De header of de footer zet je 1x op en die kun je steeds blijven gebruiken in al je bestanden, als je nu iets verandert in de header of footer dan hoef je dat maar 1x te doen. PUG-code moet alleen wel omgezet worden naar HTML (net zoals SASS ook omgezet wordt in CSS) en daar heb je tooling voor nodig, dat wordt in de laatste 2 regels van de `basicsetup` opgezet.

Met `code .` start ik [Visual Studio Code](https://code.visualstudio.com/) op, dit is de code editor die ik graag gebruik. Als je een andere editor gebruikt dan komt hier het commando voor die editor te staan.

De laatste twee regels dienen meerdere doelen. Als je dit wilt laten werken op je eigen computer heb je [Nodejs](https://nodejs.org/en/) nodig. Dit kun je gewoon installeren en is voor elk platform te downloaden. Zonder Nodejs kun je `PUG` niet gebruiken en werken de laatste twee regels dus ook niet.

De regel `npm init -y` zorgt ervoor dat je folder klaar wordt gemaakt voor het installeren van _NPM packages_, dit zijn kleine programmaatjes die je kunt installeren en die het leven van een developer makkelijker (kunnen) maken. Op [https://www.npmjs.com/](https://www.npmjs.com/) kun je zoeken naar deze packages.

[Parcel](https://parceljs.org/) is zo'n NPM package en deze moet je van tevoren installeren. Op de site van _Parcel_ kun je zien hoe dat moet. _Parcel_ is een zogenaamde bundler en kan meerdere handige dingen voor je doen. Ik gebruik het hier vooral om mijn PUG code om te zetten naar HTML en ik gebruik het voor hot reloading. Dit laatste zorgt ervoor dat mijn browser automatisch wordt ververst als ik iets in de HTML, CSS of JavaScript aanpas. Je ziet dus meteen wat je aanpast in je code. Echt heel handig. Parcel werkt out-of-the-box. Je hebt daarvoor wel de laatste regel van de `basicsetup` functie nodig, dan wordt automatisch PUG omgezet naar HTML, en je krijgt hot reloading. Eigenlijk zorgt Parcel ervoor dat je een pagina in HTML krijgt met CSS en Javascript.

Dus wil je snel even wat dingetjes checken of uitproberen, dan kan deze functie je helpen. Door een kort commando in de _command line_ heb je snel een basis setup waar je mee aan de slag kunt.
