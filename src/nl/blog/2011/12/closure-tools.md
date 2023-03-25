---
title: "Closure Tools"
date: 2011-12-23
author: Johan Schuyt
categories: 
  - Adventskalender
---
Misschien heb je er van gehoord, misschien ook niet, maar Google zelf is er in ieder geval trots op. Het is de onderliggende (client-side) kracht van Gmail, Google Docs, Google Maps en het meest recente Google Plus! Closure Tools zijn een set tools bedoeld om client-side ontwikkeling wat te vergemakkelijken danwel te professionaliseren.

Voordat we inhoudelijk beginnen, een kleine disclaimer: het gebruik van deze tools is voor kleine tot medium websites overkill. Verwacht niet een drop-in replacement voor je website thuis die in elkaar gezet is met jQuery en/of waarbij al je JavaScript source minified is met de YUI minifier. Aan deze toolset zit een noemenswaardige leercurve en tijd die benodigd is voor het opzetten van deze tools voor een project ligt wat hoger vergeleken met andere tools / libraries. Dat gezegd, je krijgt er ook wel wat voor terug ;)

# De Tools

Je zult je wellicht al afgevraagd hebben; waar bestaat deze toolset dan uit? Dat zijn de volgende tools:

* *Closure Compiler*: Een JavaScript to JavaScript compiler (géén minifier!) waar een hoop optimizes in worden gedaan, zoals dead-code elimination, code inlining en chaining, maar waar ook een aantal handige features in zitten, zoals module-splitting en compile-time constants.
* *Closure Library*: Geïnspireerd door Dojo, een volledige library met browser-abstraction en een heleboel widgets. Wat deze library eigenlijk nog wel het meest uniek maakt, is het geïmplementeerde event model wat zeker in JavaScript driven web applications zeer nuttig gebruikt kan worden.
* *Closure Templates*: Templates die zowel server- als client-side kunnen worden gebruikt. De meest relevante keywords zijn: client-side performance, localisation, language-neutral en secure.
* *Closure Stylesheets*: Deze zijn niet door Google zelf gereleased, maar door een ex-Google medewerker gemaakt als aanvulling op de bestaande toolset waarin o.a. CSS constanten en CSS-class renaming worden geïmplementeerd.

Elke tool is een op zichzelf staand project en ook zo te gebruiken, maar dat is eigenlijk niet aan te raden. De kracht zit hem juist in hoe deze tools samenwerken. De Library is bijvoorbeeld geweldig, maar gewoon veel te groot om op te nemen in je website als je de Compiler niet gebruikt. Andersom geldt ook, de Compiler is geweldig, maar je behaalt niet de volledige potentie als de code die je compiled niet volledig voor de compiler is gedocumenteerd. Zodoende raad ik je dan ook altijd aan op z’n minst de Library en de Compiler gecombineerd te gebruiken. De introductie tot de Closure Tools zal in deze post beperkt blijven tot de Compiler en de Library.

# Closure Compiler

Voor de meeste van jullie zal dit eigenlijk het meest interessante onderwerp zijn. Voordat we dieper ingaan op de Compiler, een kleine achtergrond. De Compiler ondersteunt meerdere niveaus van ‘Compiling’. Er is een Simple mode, die wat meer in de buurt komt van een minifier en er is een Advanded mode, die alle features van de Compiler volledig benut. In dit artikel zal ik te allen tijde uitgaan van de Advanced mode.

Wanneer je JavaScript gaat compilen wordt ervan uitgegaan dat je in een closed environment zit. Met andere woorden, alle JavaScript die er bestaat voor jouw project, zit binnen het bereik van de compiler. Als uitzondering is er wel een mogelijkheid om ‘externals’ te definiëren waarmee aangegeven kan worden welke JavaScript-functies en/of variabelen bestaan buiten de compiler. Omdat de compiler letterlijk kennis heeft van alle JavaScript kan deze zeer rigoureus te werk gaan. Een klein voorbeeld:

```
function a() { return 'Hello'; }
function b() { return 'World'; }
alert(a() + ' ' + b());
```

Als je dit leest, zou je je kunnen afvragen, worden de functies ‘a’ en ‘b’ nog ergens anders gebruikt? Zo nee, dan zijn deze functies zelf namelijk behoorlijk overbodig. De compiler denkt hier exact hetzelfde over, juist omdat de compiler kennis heeft van de gehele omgeving maakt de compiler van dit voorbeeldje het volgende:

```
alert("Hello World");
```

Probeer dit voorbeeldje zelf maar eens (vergeet niet Advanded mode aan te zetten): <http://closure-compiler.appspot.com/home>

# Annotations voor de Compiler

Zoals duidelijk mag zijn, kan de compiler best handig zijn. Om te zorgen dat jouw code zo goed mogelijk door de compiler kan worden geparsed dien je je code te voorzien van JSDoc. Met behulp van de juiste documentatie kan je er namelijk voor zorgen dat er bijvoorbeeld een OO-model wordt verplicht in je code. De compiler zal ervoor zorgen dat alle code dat een private member van je class probeert te benaderen een compiler warning zal geven.

Een andere mooie feature is het annotaten van constanten. Door met constanten te werken kan je heel mooi specifieke JavaScript-builds maken voor specifieke scenario’s. Het beste voorbeeld hiervan is eigenlijk hoe de Closure Library constanten gebruikt. In de Library zijn namelijk constanten gedefinieerd voor browser detection. Stel je target alleen maar Chrome en Firefox voor je applicatie, dan kan je een aantal constanten overriden door wat extra opties mee te geven aan de Compiler. Doordat alle code met constanten werkt, kan de compiler met zijn dead-code elimination alle IE related code strippen in jouw build. Dat scheelt aardig wat ruimte.

De laatste grove categorie van annotations is type hinting. JavaScript is geen type-safe language. Dit is aan de ene kant handig, omdat je heel flexibel kan zijn, maar daartegen soms ook wat frustrerend. Er zijn genoeg momenten als programmeur waar je gewoon wilt weten wat je binnen krijgt. De compiler lost dit op door je de mogelijkheid te geven om in je JSDoc het type van je variabelen of parameters te declareren. De compiler zorgt ervoor dat je daadwerkelijk alleen deze types binnenkrijgt. Is dit niet het geval, zal er weer een compiler warning worden gegooid. Een overzichtje van alle annotations kan je terugvinden op: <http://code.google.com/intl/nl-NL/closure/compiler/docs/js-for-compiler.html>

# Closure Library

De Closure Library is wellicht het meest wennen voor verfijnd jQuery-gebruikers, danwel alle andere ontwikkelaars die gebruik maken van JavaScript libraries waar alles voor je wordt geregeld op de achtergrond. De syntax van deze library is een stuk meer verbose dan de meesten van jullie gewend zullen zijn. Persoonlijk vind ik dit een groot voordeel. De meeste code die je zult schrijven is een stuk begrijpbaarder dan code die jQuery gebruikt waarbij 20 calls aan elkaar zijn gechained. Bovendien wordt overhead veroorzaakt door bestandsgrootte tenietgedaan door het gebruik van de compiler.

Wat belangrijker is, is hoe uitgebreid deze library is. Het is voorzien van vele UI widgets, het kent de standaard CSS selectors, er zit een abstractie in voor client-side data storage (HTML5 session storage en IE userdata), er zit functionaliteit in voor encryptie, animaties, internationalisatie, formatting, client-side databases, Ajax calls, etc, etc.

De meest interessante feature binnen deze library is eigenlijk de event handling. Zoals de meeste libraries zit er een abstractie in om browser events op een abstracte wijze af te vangen. Wat echter interessanter is, is dat deze abstractie meteen geldt voor JavaScript-objecten. De Closure Library heeft een interface blootgesteld die je kan extenden, waarmee je volledige events kan gooien vanuit je JavaScript-objecten. Om wat beter te illustreren hoe dit in elkaar zit eerst een korte introductie over hoe je naar browser events luistert met behulp van de Closure Library.

## Browser events

Het luisteren naar browser events gebeurt met `goog.events.listen`. De specificatie van deze functie is als volgt:

```
/**
 * @param {EventTarget|goog.events.EventTarget} src
 * @param {string|Array.} type
 * @param {Function|Object} listener
 * @param {boolean=} opt_capt
 * @param {Object=} opt_handler
 */
goog.events.listen = function(src, type, listener, opt_capt, opt_handler);
```

De namen van de argumenten spreken grotendeels voor zich. Een punt dat misschien opvalt, is dat de bron van het event (`src`) niet alleen een standaard DOM EventTarget hoeft te zijn, maar ook een `goog.events.EventTarget` mag zijn. Dit zorgt voor de eerder genoemde flexibiliteit en het gebruiken van dit event-systeem voor veel meer dan alleen events vanuit de DOM. Dit wordt verderop toegelicht.

De `listener` hoeft niet een functie te zijn, maar mag ook een willekeurig object zijn, als het maar de methode `handleEvent` bevat, die het event afhandelt.

De `opt_capt` geeft (optioneel) aan of er capturing of bubbling moet worden toegepast. Closure zorgt ervoor dat capturing ook in oudere IE browsers toegepast kan worden.

De `opt_handler` methode (ook optioneel) is een mooie uitbreiding van het W3C-model, dat het mogelijk maakt om aan te geven waar het keyword `this` naar verwijst in de functie die het event afhandelt.

## Eigen EventTargets

Zoals eerder aangegeven, kan er dus geluisterd worden naar zowel browser-events als eigen JavaScript-events. Door simpelweg de interface `goog.events.EventTarget` te extenden in een van je eigen classes, krijgt je JavaScript class events. Net zoals bij DOM events kan je hier nu listeners aan koppelen of verwijderen. Hoe dit nou volledig in elkaar zit, is meer een geval van 'een voorbeeld zegt meer dan een duizend woorden'. Hierbij een klein voorbeeldje van een Twitter class die een event dispatched iedere keer als er nieuwe berichten zijn.

```
goog.provide('example.Twitter');
goog.provide('example.Twitter.EventType');

goog.require('goog.events');
goog.require('goog.events.EventTarget');

/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
example.Twitter = function() {
  goog.events.EventTarget.call(this);
};
goog.inherits(example.Twitter, goog.events.EventTarget);

/**
 * Haalt nieuwe tweets op. Als die er zijn wordt een event gedispatched van het
 * type example.Twitter.EventType.NEW_TWEETS.
 */
example.Twitter.prototype.poll = function() {
  var messages = this.getNewMessages();
  if (messages.length) {
    this.dispatchEvent(example.Twitter.EventType.NEW_TWEETS);
  }
};

/** @enum {string} */
example.Twitter.EventType = {
  NEW_TWEETS: goog.events.getUniqueId('new_tweets')
};
```

En uiteraard, een bijhorende listener:

```
// twitter is van het type example.Twitter.
twitter.addEventListener(
  example.Twitter.EventType.NEW_TWEETS,
  function() {
    var twitter = /** @type {!example.Twitter} */ (e.target);
    var count = twitter.getUnreadCount();
    goog.dom.setTextContent(goog.dom.getElement('unread-count'), count);
  }
);
```

# Krachtige combinatie

Het blijft lastig om zo’n uitgebreide toolset in een keer te introduceren, maar zoals je wellicht al hebt gemerkt, zijn de mogelijkheden eindeloos. Mocht je in de nabije toekomst een project hebben waarbij flink wat JavaScript nodig is, duik dan snel wat dieper in deze toolset. Het is een hele opluchting om er mee te mogen werken. Iedereen die hiermee aan de slag wil, kan ik dan ook van harte het boek ‘Closure: The Definitive Guide’ aanraden.

(TODO: Over Johan Schuyt
2011/12/johan-schuyt.jpg
Johan is werkzaam bij [TransIP](https://www.transip.nl/) waar hij zich voornamelijk bezighoudt met alle client-side ontwikkelingen. Ook zijn er veel blog posts van hem te vinden op op [blog.transip.nl](http://blog.transip.nl/). Van tijd tot tijd zal hij wat ventileren op zijn Twitter account [@johansglock](https://twitter.com/johansglock).

**Donatie:** [Red een kind](http://www.redeenkind.nl/)
Kinderen zijn de toekomst, en verdienen een zorgeloos te kunnen opgroeien. Niks is meer belangrijk, vandaar dat ik graag Red een kind ondersteun.)
