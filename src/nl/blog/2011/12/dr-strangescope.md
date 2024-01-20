---
title: 'Dr. Strangescope or: How I Learned to Stop Worrying and Love the Closure'
date: 2011-12-24
author: Arjan Eising
categories:
    - Adventskalender
---

Scopes en closures in JavaScript zijn altijd een soort van taboe geweest: het is er altijd, maar je hebt het er liever niet over. In dit artikel probeer ik, voor de beginnende JavaScripter, een introductie in scopes en closures te geven. En aangezien ik een enorme filmfreak ben, heb ik er enkele referenties naar de film ['Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb'](http://www.imdb.com/title/tt0057012/) in gestopt.

## Scope

Scopes in JavaScript (en alle andere programeertalen) zijn een soort ballenbak. Alle variabelen (en stiekem ook functies) zijn de ballen. Je kunt gewoon een bal pakken en de waarde van de variabele opvragen, of je kunt de waarde veranderen.

In JavaScript zijn er twee soorten scopes: _globale scope_ en _functie scope_. In de globale scope zitten alle variabelen die niet in een functie staan, en in de functie scope zitten variabelen die in een specifieke functie aangemaakt zijn.

De functiescope moet je zien als een soort doos in de ballenbak. Het is mogelijk een variabele in de globale scope aan te passen, maar vanuit de globale scope kun je _niet_ bij variabelen in de functie scope.

Tijd voor een voorbeeld:

```
var russianAmbassador = 'Alexi de Sadesky';

function warRoom() {
  alert(russianAmbassador); // Alexi de Sadesky
  var president = 'Merkin Muffley';
  alert(president); // Merkin Muffley
}

warRoom();

alert(president); // undefined

function warTable() {
  alert(russianAmbassador); // undefined
  var russianAmbassador = 'Foo';
  alert(russianAmbassador); // Foo
}

warTable();
```

In de eerste functie (`warRoom`) kijken we eerst of binnen de functie de variabele `russianAmbassador` bestaat. Dit is niet het geval, dus wordt in de globale scope gekeken. Daar wordt de variabele wel gevonden en dus zal de naam van de Russische ambassadeur getoond worden. Omdat de variabele `president` in de functie scope zit van `warRoom`, zal die in de alert eronder helaas niet opvraagbaar zijn.

De tweede functie gaat iets anders werken. Omdat de JavaScript parser een variabele initialisatie van `russianAmbassador` tegenkomt, kan de globale variabele `russianAmbassador` niet meer benaderd worden. De eerste alert zal dus een `undefined` teruggeven. Daarna wordt de variabele gezet, en kan die alleen in de functie `warTable` benaderd worden.

Het weten dat een variabele ergens later in de code gezet gaat worden, lijkt veel op het feit dat een functieaanroep ook prima _voor_ de functiedeclaratie geplaatst kan worden. Probeer het maar eens! In JavaScript worden stiekem alle functiedeclaraties, en ook variabeledeclaraties, helemaal bovenin de code gezet.

> "Sir, you can't let him in here. He'll see everything. He'll see the big board!"

## Closures

Closures maken gebruik van het feit dat er een functie scope bestaat. Wat ze doen is een of meerdere functies retourneren bij een bepaalde functieaanroep. Deze buitenste functie houdt dan alle variabelen geheim voor de globale scope.

```
function telOpEnAlert(a) {
  return function(b) {
    alert(a + b);
  }
}

var vijf = telOpEnAlert(5);
vijf(10); // 15
vijf(100); // 105
```

Wat bovenstaande code doet, is eigenlijk een vernuftig trucje. Eerst wordt de variabele `vijf` geïnitialiseerd door de functie `telOpEnAlert` aan te roepen. Deze functie neemt één argument aan, namelijk `a`. Deze variabele (in ons geval gezet op 5) zit in de functie scope van `telOpEnAlert`. Daarna retourneert het een anonieme functie die ook één argument aanneemt.

Deze anonieme functie wordt aangeroepen bij `vijf(10)`. Omdat de variabele `a` in de functie scope zit, is die bekend (namelijk 5). Door daarna het argument van de anonieme functie (in de eerst aanroep 10 en tweede 100) erbij op te tellen, kan hij een getal alerten.

Het grote voordeel van closures is dus dat de globale scope niet wordt vervuild, en dat dus scripts van meerdere makers niet conflicteren. Stel je voor dat iedereen de variabele `a` gebruikt in zijn of haar script.

> "Well, boys, we got three engines out, we got more holes in us than a horse trader's mule, the radio is gone and we're leaking fuel and if we was flying any lower why we'd need sleigh bells on this thing... but we got one little budge on them Rooskies. At this height why they might harpoon us but they dang sure ain't gonna spot us on no radar screen!"

Nog een laatste voorbeeld, met een voorbeeld dat je in de praktijk kan gebruiken.

```
function MijnLightBox(element) {
  function roteerLinks() {
    // code
    geheim(1337);
    // code
  }

  function roteerRechts() {
    // code
  }

  function geheim(argument) {
    // voer geheime code uit
    alert(argument);
    // voer meer geheime code uit
  }

  function maakHtmlAan() {
    // maak enige HTML aan
  }

  return {
    linksom: roteerLinks,
    rechtsom: roteerRechts
  };
}

var lightbox = MijnLightBox('element');
lightbox.linksom();
```

De overkoepelende functie `MijnLightbox` heeft twee functies die privé zijn: `geheim` en `maakHtmlAan`. Ze zitten namelijk in de functie scope van `MijnLightbox`. Ze kunnen alleen binnen die overkoepelende functie gebruikt worden.

Twee andere functies, `roteerLinks` en `roteerRechts`, worden geretourneerd met een object.

Door de functie `MijnLightbox` aan te roepen, krijg je een object terug met daarin die twee functies. Vervolgens kun je door `lightbox.linksom()` een van die functies gebruiken.

Overigens kunnen alle vier de functies bij het argument van de ouderfunctie: `element`. In ons geval doen we daar even niets mee, maar het kan wel.

> "Gentlemen, you can't fight in here! This is the War Room."

_Fijne feestdagen!_

## Over Arjan Eising

/2011/12/arjan-eising.jpg
Front-end developer bij [Springest](http://www.springest.nl). Bestuurslid en bijeenkomstenorganisator bij Fronteers. Kijkt te veel films.

Donatie: Fonds Psychische Gezondheid
[Fonds Psychische Gezondheid](http://www.psychischegezondheid.nl/) zorgt voor onderzoek om de zorg voor mensen met psychische klachten te verbeteren, alsmede voorlichting voor patiënten en betrokkenen.
