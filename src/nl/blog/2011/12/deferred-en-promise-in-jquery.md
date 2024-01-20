---
title: 'Deferred en promise in jQuery'
date: 2011-12-20
author: Edwin Martin
categories:
    - Adventskalender
---

Deferred en promise? Gaan we het hebben over uitstellingen en beloftes in jQuery? Nee, gelukkig niet. Deferred en promise zitten sinds versie 1.5 in jQuery en daarmee kan je asynchrone functies zoals Ajax beter afhandelen.

Even een stapje terug in de tijd, toen we nog met guldens en franken betaalden. Als je een muisklik wilde afvangen, deed je dat met `element.onclick = someFunction;` Dat werd een probleem als een ander stukje code ook naar de klik wilde luisteren. Dat kon niet, want aan `onclick` kan je maar één functie toekennen. Dit is destijds opgelost met de DOM-functie `addEventListener`. Daarmee kan je zoveel functies die luisteren toevoegen als je wilt. En sindsdien weten we niet beter.

Nu hebben we een vergelijkbaar probleem met Ajax-aanroepen. Nu niet met events, maar met het gegeven dat Ajax maar één callback-functie accepteert. Niet alleen bij de jQuery `$.ajax()`-aanroep, maar ook bij het onderliggende XMLHttpRequest-object.

## Promise

Tot jQuery 1.5 zag een typische `$.ajax()`-aanroep er als volgt uit:

```
$.ajax({
  url: "/myServerScript",
  success: mySuccessFunction,
  error: myErrorFunction
});
```

De `$.ajax()`-functie retourneert een jQuery XMLHttpRequest-object.

Tot zover niets nieuws. Vanaf versie 1.5 implementeert het teruggegeven object ook de [CommonJS Promises/A-interface](http://wiki.commonjs.org/wiki/Promises/A). Dat is een hele mond vol. CommonJS is een initiatief om gemeenschappelijke en onafhankelijke interfaces (API's) vast te leggen. Promises/A is zo'n interface. Het voordeel is dat deze niet jQuery-specifiek is. Als je bijvoorbeeld met Node.js werkt, dan is de kans groot dat je met dezelfde interface te maken krijgt. Handig.

De manier van callbacks toewijzen is met Promises heel anders:

```
var promise = $.ajax({
  url: "/myServerScript"
});

promise.done(mySuccessFunction);
promise.fail(myErrorFunction);
```

"Oke, de interface is nu veranderd, maar wat heb ik daaraan?", zul je je vast afvragen.

De voordelen van promises zijn:

1. Je kunt de `done()`- en `fail()`-functies meerdere keren aanroepen, met verschillende callbacks. Misschien heb je wel een callbackfunctie die een animatie stopt, een die een nieuwe Ajax-aanroep doet en een andere functie die de ontvangen gegevens aan de bezoeker toont.

```
var promise = $.ajax({
  url: "/myServerScript"
});

promise.done(myStopAnimationFunction);
promise.done(myOtherAjaxFunction);
promise.done(myShowInfoFunction);
promise.fail(myErrorFunction);
```

2. Ook als de Ajax-aanroep al geweest is, kan je nog steeds de `done()`- en `fail()`-functies aanroepen en de callbacks worden dan gelijk uitgevoerd. Dus geen gedoe meer met variabelen die de verschillende staten moeten onthouden. Als een Ajax-aanroep afgelopen is, dan komt deze of in de succes-staat of in de fout-staat en deze zal niet meer veranderen.

3. Je kunt promises combineren. Soms is het nodig om gelijktijdig twee Ajax-aanroepen te doen en wil je een functie pas aanroepen als beide succesvol zijn verlopen. Hiervoor gebruik je de nieuwe `$.when()`-functie:

```
var promise1 = $.ajax("/myServerScript1");
var promise2 = $.ajax("/myServerScript2");

$.when(promise1, promise2).done(function(response1, response2){
  // Handle both responses
});
```

## Deferred

Wat is dan een deferred en wat is het verschil met een promise? Zoals je hierboven hebt gezien is een promise een object dat je terugkrijgt van een asynchrone functie. Een deferred heb je nodig als je zelf zo'n functie schrijft.

Een deferred object kan hetzelfde als een promise object, maar heeft twee extra functies om de `.done()`- en `.fail()`-functies te laten afgaan.

Een deferred-object heeft een `.resolve()`-functie om een succesvolle uitkomst aan te geven en de met `.done()` geregistreerde functies uit te voeren. De `.reject()`-functie geeft een gefaalde uitkomst aan en voert de met `.fail()` geregistreerde functies uit.

Aan de `.resolve()`- en `.reject()`-functies kunnen parameters worden meegegeven die de met `.done()` en `.fail()` geregistreerde functies als argument meekrijgen.

Het promise-object heeft geen `.resolve()`- en `.reject()`-functie. Het promise object geef je immers weg aan andere scripts waarvan je niet wilt dat zij de promise kunnen laten resolven of rejecten.

Hieronder een eenvoudig script dat de werking illustreert. De html bestaat uit een leeg divje met als id "result".

```
$('#result').html('waiting...');

var promise = wait();
promise.done(result);

function result() {
  $('#result').html('done');
}

function wait() {
  var deferred = $.Deferred();

  setTimeout(function() {
    deferred.resolve();
  }, 2000);

  return deferred.promise();
}
```

Het script is ook te vinden op [jsFiddle](http://jsfiddle.net/TT3G5/), zodat je er zelf mee kunt experimenteren.

De `wait()`-functie is de functie die een promise teruggeeft. Deze wordt resolved via een `setTimeout` van twee seconden. In plaats van de `setTimeout` kan alles gebruikt worden wat asynchroon is, zoals Ajax, animaties, Web workers, enzovoorts. Duidelijk is dat binnen de `wait()`-functie een deferred-object wordt gebruikt, maar dat we het beperkte promise-object teruggeven.

## jQuery-ondersteuning

Op het [jQuery-blog](http://blog.jquery.com/2011/11/08/building-a-slimmer-jquery/) is te lezen dat jQuery helemaal voor promises gaat en dat de oude API, met de `.error()`-, `.success()`- en `.complete()`-functies, uiteindelijk zal verdwijnen. Als je deze functies gebruikt, dan kan je alvast beginnen je code te herschrijven en over te stappen op de promise-interface.

## Meer mogelijk

Dit artikel is slechts een introductie in de werking van het deferred-object. jQuery ondersteunt nog veel meer functies. Bekijk de [jQuery deferred documentatie](http://api.jquery.com/category/deferred-object/) voor alle mogelijkheden. Zo is het bijvoorbeeld ook mogelijk om met promises de voortgang van een proces bij te houden.

### Over Edwin Martin

<img src="/_img/2011/12/edwin-martin.jpg" alt="Foto van edwin martin uit 2011" class="floating-portrait" /> 
Edwin Martin is freelance front-end webontwikkelaar en woont met vrouw en twee dochtertjes in Hilversum. Binnen Fronteers helpt hij mee met het organiseren van de Fronteers conferentie. Hij houdt een blog bij over front-end op [bitstorm.org](http://www.bitstorm.org/) en is te vinden op twitter als [@edwinm](https://twitter.com/edwinm).

Donatie: [Electronic Frontier Foundation](https://www.eff.org/)
Mijn echte goede doel is natuurlijk Fronteers, maar dat past niet zo bij de kerstgedachte. Daarom kies ik voor de EFF, die opkomt voor onze rechten in de digitale wereld. Zo helpen ze bijvoorbeeld softwareontwikkelaars die plots een (onterechte) rechtszaak van een groot bedrijf aan de broek krijgen.
