---
title: 'Een andere manier'
date: 2019-12-10
author: Maarten Brouwers
categories:
    - Adventskalender
---

De kracht van het internet is dat de technieken relatief eenvoudig te gebruiken zijn. Gedreven door het idee dat er binnen enkele seconden iets op het scherm moet staan lijkt het tegenwoordig noodzakelijk om een Single Page App op te tuigen die begint vanuit het neerzetten van placeholders, waarin vervolgens content wordt geladen vanuit GraphQL en REST API’s. Vergelijk dat eens met de eenvoud van weleer, waarbij je HTML en CSS kon uploaden met een FTP programma…

Weinig ontwikkelaars weten nog precies wat ze doen, met als prototypische voorbeeld het “deze-div-is-een-button” tot gevolg. Of de site werkt zonder JavaScript is iets wat naderhand bedacht wordt, bijvoorbeeld omdat iemand zich druk maakt om zoekmachines die geen JavaScript begrijpen. Het lijkt wel alsof JavaScript noodzakelijk is voor een optimale UX (voor animatie-liefhebbende 40-minners met goed zicht dan).

Maar kan waargenomen snelheid niet ook als “progressive enhancement” aangeboden worden? Als iets zonder JavaScript kan werken, moet het toch ook gewoon zonder kunnen werken. Maar pure HTML en CSS net zo snel laten reageren als een moderne “Single-Page-App” / Webpack-compilatie (als het eenmaal geladen is) is niet altijd even gemakkelijk. Je zit dan toch snel van pagina naar pagina te navigeren, waarbij die met wisselende snelheden reageren. Hoe los je dat dan op?

De twee technieken die ik in deze blog introduceer komen uit de wereld [Ruby on Rails](https://rubyonrails.org/). Dit is een “back-end framework”, maar deze bibliotheken zijn onafhankelijk van dit framework te gebruiken.

Een belangrijke pijler voor de ontwikkelaars achter Ruby on Rails — en dus ook deze projecten — is “convention over configuration”: liever dat iets direct goed werkt dan dat je dagen aan het sleutelen bent om alleen al de basis goed werkend te krijgen. Het is dan ook sterk geopinieerd. Werk ermee zoals het bedoeld is en je kunt je concenteren op de inhoud in plaats van bijzaken. Omdat het idee van progressive enhancement redelijk centraal in het gedachtegoed zit kan ik er goed mee leven.

De technieken die ik behandel zijn [Turbolinks](https://github.com/turbolinks/turbolinks) (voor het sneller laten laden van volledige pagina’s) en het meer recente Stimulus (voor het verrijken van pagina’s). Beide zijn pragmatische keuzes en relatief kleine verbeteringen die geen gigantische koerswisseling betekenen ten opzichte van “traditioneel” ontwikkelen op basis van HTML en CSS.

## Turbolinks

Turbolinks is conceptueel voor een webontwikkelaar wellicht het eenvoudigst te begrijpen van de twee technieken. Wat als je, wanneer je binnen dezelfde site navigeert — in plaats van de browser te vragen de hele pagina te verversen — je de te presenteren HTML pagina pakt en slechts de DOM nodes in de body vervangt (plus onder andere de titel). Het is een idee dat geïnspireerd is op [pjax](https://github.com/defunkt/jquery-pjax), maar pjax was afhankelijk van jQuery.

Met deze oplossing hoeven de CSS en JavaScript dan niet meer opnieuw gedownload en geanalyseerd te worden en je kunt bijvoorbeeld JavaScript aan `document` binden die langer leeft dan dat enkele pagina bezoek. Wanneer JavaScript aan staat vangt Turbolinks bijna onzichtbaar het openen van links af en toont wanneer mogelijk direct pagina’s uit de cache waardoor er bijna direct resultaat wordt getoond (welke bij een update wordt ververst). Geen JSON API’s of veranderingen op de server nodig. Een slimmigheid aan de voorkant die ‘traditionele’ websites sneller laat werken en tussentijds haperen van bijvoorbeeld externe lettertypen voorkomt.

## Implementatie

Om Turbolinks te gebruiken voeg je deze regel toe aan de `<head>` van je HTML:

```
<script src="https://cdn.jsdelivr.net/npm/turbolinks@5.2.0/dist/turbolinks.js" integrity="sha256-iM4Yzi/zLj/IshPWMC1IluRxTtRjMqjPGd97TZ9yYpU=" crossorigin="anonymous"></script>
```

[Turbolinks is ook een package in NPM](https://www.npmjs.com/package/turbolinks), dus je kunt ook je favoriete workflow gebruiken met `yarn` of `npm`.

Het is dan:

```
$ npm install --save turbolinks
```

en om het te starten:

```
var Turbolinks = require("turbolinks")
Turbolinks.start()
```

De eerste pagina aanroep zal met Turbolinks 9.4kB (met gzip) meer wegen.

Dat is het. Er zijn vervolgens wat opties om bijvoorbeeld expliciet aan te geven externe bronnen wél opnieuw moeten worden geladen en wanneer een bijzondere pagina niet geladen dient te worden (zoals op [mijn Turbolinks-demo](<(https://murb.github.io/turbolinks-stimulus-fronteers/geen_turbolinks.html)>))

## En “Native”?

Het leuke aan Turbolinks is dat er ook native implementaties mogelijk zijn events koppelen uit webpagina’s. Zo kun je relatief eenvoudig web-gestuurde semi-native apps bouwen. Het gaat echter te ver om hier diep op in te gaan.

## Demo

Open de ‘[geen Turbolinks' demo](https://murb.github.io/turbolinks-stimulus-fronteers/geen_turbolinks.html). De menu items gebruiken wel Turbolinks na de eerste klik en wanneer je het netwerkverkeer bekijkt zie je het verschil. Helaas is het verschil met deze zeer compacte statische pagina’s lastig te zien, maar als de CSS, Javascript en andere zaken complexer worden en een pagina soms vertraagd wordt door bijvoorbeeld een database query dan is het verschil in snelheid goed te merken.

## Nadelen

De twee belangrijkste nadelen zijn het ontbreken van een `document.load` en het feit dat de hele DOM wordt vervangen.

`document.load` is vooral voor analytics-systemen en libraries zoals jQuery een aandachtspunt: alle functies die gebonden zijn aan events die standaard aangeroepen worden bij het laden van een pagina moeten mogelijk opnieuw worden gebonden aan events die Turbolinks stuurt bij het navigeren naar een andere pagina.

Een ander punt om in de gaten te houden is dat de volledige DOM relatief ‘dom’ wordt vervangen. Mooie overgangstransities zijn wat lastiger te doen, al zijn er [workarounds](https://github.com/turbolinks/turbolinks/issues/184#issuecomment-451688212) te vinden die de eenvoudige werkwijze vervangen met een implementatie die de inhoud van de nieuwe en de huidige pagina-inhoud vergelijkt en netjes bijsnijdt waar nodig.

## Stimulus

Turbolinks brengt op zich al meer een ervaring van een Single Page App zonder gelijk alles wat fijn is aan het maken van ‘traditionele’ pagina’s overboord te gooien, maar het is niet ideaal voor alles; soms wil je wat interactiviteit toevoegen.

Er zijn mensen die niet van frameworks houden. Maar wanneer je vaker van project wisselt is de kracht van een framework wel dat ze enige houvast bieden voor andere ontwikkelaars doordat ze goed gedocumenteerd zijn.

Terzijde: er zijn ook ontwikkelaars die liever dichter bij webstandaarden blijven en daarom bijvoorbeeld [WebComponents](https://github.com/w3c/webcomponents/) omarmen. Ik weet het zelf zozeer nog niet en ben meer gecharmeerd van kleine, comfortabelere stappen: stappen die niet direct het vorige volledig breken zonder polyfills.

Stimulus is vooral een handvat om JavaScript-code consistent te laten werken: een logische ordening. Voor dat Stimulus er was en nadat ik gestopt was met jQuery, schreef ik al voor kleinere projecten veelal JavaScript die reageerde op data-attributen, maar wanneer er het aantal acties groter wordt is het onderhoud van een goede naamgeving toch wel lastig. En grotere JavaScript projecten waaraan ik werkte bestonden toch veelal uit de bekendere frameworks die zware maar algemeen bekende structuur oplegden, maar met code dat ook ergens weer wrong omdat het eigenlijk niet de manier is waarop ik het liefst front-end-code zou willen schrijven.

Toen ik Stimulus zag was het voor mij dus al snel een aha-moment, al moest ik nog even wachten voordat ik het concreet kon gaan gebruiken op een nieuw project. In plaats van mijn oude manier — waarbij ik acties koppelde aan DOM-nodes middels data-attributen, waarbij al die acties bestonden in dezelfde scope — middels een Controller structuur waarin een omsluitend element aangeeft welke Controller binnen dat element het gedrag bepaalt.

## Implementatie

Wil je écht niets te maken hebben met Yarn en/of NPM (als je bijvoorbeeld even wilt experimenteren), doe dan:

```
<script src="https://cdn.jsdelivr.net/npm/stimulus@1.1.1/dist/stimulus.umd.js" integrity="sha256-mUuPeK7DRsoSOwJJcvbcMgWsqAVPJs7X8K/h7NxXQj4=" crossorigin="anonymous"></script>
```

Maar [je kunt Stimulus dus ook gewoon op npm vinden](https://www.npmjs.com/package/stimulus). Stimulus maakt je pagina een kleine 9,81kB zwaarder (met gzip). HTML en JavaScript zijn traditioneel gescheiden. In JavaScript definieer je een Controller:

```
const application = Stimulus.Application.start()
```

```
application.register("validator", class extends Stimulus.Controller {
  static get targets() {
    return [ "name" ]
  }
  method() {
    // doe iets
  }
}
```

(Ik gebruik hier de wat uitgebreidere syntax die werkt als je Stimulus hebt geladen via de `<script>`-tag)

En de HTML die erbij hoort kan iets zijn als:

```
<form data-validator="validator">
    <label>Naam
        <input
            name="name"
            data-target="name"
            data-action="change->method"
        />
    </label>
</form>
```

Op ieder `'change'` event dat het input-veld genereert wordt `method()` aangeroepen in de `'validator'`-controller.

Zoals [de makers van Stimulus ook al zeggen](https://stimulusjs.org/handbook/building-something-real):

>

Ze noemen dat _Resilient UI’s_. Ik weet niet of ze het boek [Resillient Web Design van Jeremy Keith](https://resilientwebdesign.com/) hebben gelezen, maar het ademt dezelfde geest.

## Demo

[Een Stimulus-demo is hier te vinden](https://murb.github.io/turbolinks-stimulus-fronteers/stimulus.html) en voel vrij om de broncode te bekijken.

## En nu verder?

Ga vooral naar de website om meer te leren over [Stimulusjs.org](https://stimulusjs.org/). Moet je nu alles omgooien om alles met Stimulus te doen? Zeker niet.

## Tot slot

Frameworks bepalen hoe je werkt. Dit kan soms bevrijdend zijn, omdat je er sneller door kunt werken en gemakkelijker kunt communiceren met je collega’s. Soms kan het echter ook beperkend zijn, omdat je een heel ecosysteem aan plugins en compilers in wordt getrokken waardoor je na iedere update vaak weer in configuratiebestanden bepaalde details zit te configureren omdat _weet jij veel_. Laat staan dat je tijd hebt om je druk te maken over het werkend houden van de isomorphic rendering-setup en toegankelijkheid.

De frameworks/bibliotheken/libraries — _hoe je het ook wilt noemen_ — die ik in deze post heb geïntroduceerd zijn mijns inziens niet van die laatste categorie. Het zijn dusdanig kleine toevoegingen dat het in het frameworkgeweld van vandaag de dag bijna niet meer lijkt op te vallen. Turbolinks is bijna een onzichtbare verbetering wanneer je al gewend was om alle JavaScript-initialisaties niet op de `load` en/of `DOMContentLoaded`-events te binden (een gewoonte die er wellicht door jQuery in is geslopen). De bibliotheken bieden structuur, maar zijn ook overzichtelijk.

Besef ook dat veel van de grotere frameworks van grote organisaties komen. Grote organisaties hebben veelal andere problemen dan kleinere. Misschien lossen die frameworks ook wel problemen op die jij nooit zult ervaren. Groter is niet altijd beter.

## Verder experimenteren?

Je kunt mijn demopagina’s clonen met git:

```
git clone https://github.com/murb/turbolinks-stimulus-fronteers.git
```

Sorry, geen hot reloading, maar met bijvoorbeeld Python (`python -m SimpleHTTPServer 8000`) of Ruby (`ruby -rwebrick -e'WEBrick::HTTPServer.new(:Port => 4000, :DocumentRoot => Dir.pwd).start'`) kun je er snel mee experimenteren.

Over Maarten
<img src="/_img/adventskalender/maarten.jpeg" alt="Foto van maarten" class="floating-portrait">
Maarten Brouwers is freelance ontwikkelaar van webapplicaties. Heeft een liefde voor standaarden en het vinden van De Juiste Manier. Hij combineert dat graag met interesse voor de eindgebruiker, maar zit net zo lief diep in server side Ruby (veelal on Rails) code. Blogt onregelmatig op [murb.nl](http://murb.nl/).
Maartens donatie gaat naar Bits of Freedom.)
