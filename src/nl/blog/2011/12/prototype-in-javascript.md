---
title: 'Prototype in JavaScript'
date: 2011-12-21
author: Peter van der Zee
categories:
    - Adventskalender
---

Op zich is het heel makkelijk om met JavaScript te beginnen. Maar als je dan wat verder gaat kijken wordt het al snel moeilijk. De meeste mensen lijken te struikelen over closures, context en prototype. Ik wil in deze post graag prototype behandelen en eens zien of ik het een beetje kan verhelderen. Ik zal daarbij de termen lekker in het Engels houden, want met vertalen introduceer je alleen maar (nog meer) verwarring.

Class inheritance in JavaScript, waarbij een object de eigenschappen erft van een ouder, wordt geregeld via de "prototypal chain". Dat betekent dat er een keten van geheime links is van het kind naar de ouder(s). Maar die link gaat niet direct naar de ouder, maar eigenlijk naar de "prototype property" van de ouder, ook wel "het prototype object" genoemd. Aan de bovenkant van (bijna) iedere keten staat de globale variabele met de naam "`Object`". Dat is soms een beetje verwarrend, omdat je ook praat over objecten.

Oké, dus hoe werkt het nou? Iedere functie die je zelf aanmaakt, heeft automatisch een property die "`prototype`" heet. Dat bevat een normaal object, exact zoals je hem krijgt met `{}`. Tot dusver geen magie (_ok, stiekem wel, misschien dat je aan het einde van dit artikel kunt bedenken waarom!_). Je kan properties toevoegen aan dit `prototype` object of de property gewoon vervangen…

```
function Foo(){}
typeof Foo.prototype; // "object"
Foo.prototype.x = 5;
Foo.prototype.meh = function(){ alert("foo"); };
Foo.prototype = {
  x: 6,
  y: 7
};
```

De magie begint als we een zogenaamde nieuwe instance maken met onze functie (oftewel object `Foo`). Dat doen we met het `new` keyword.

```
var foo = new Foo();
```

We hebben nu een nieuw object `foo` dat erft van zijn ouder, `Foo`. Dit kan je controleren:

```
foo instanceof Foo; // true
```

De magie zit hem in een verborgen property van het kind, `foo`. Deze bevat namelijk een directe link naar de huidige waarde van `Foo.prototype`. Dat wil zeggen, de waarde van `Foo.prototype` op het moment van het instantiëren van het kind. Als de waarde van `Foo.prototype` wijzigt dan heeft dat ook onmiddellijk het effect dat het kind niet meer wijst naar `Foo.prototype` (maar naar de referentie van het vorige object, want deze gaat niet onmiddellijk verloren). Let op:

```
function Foo(){}
var foo = new Foo(); // nieuw kind
foo instanceof Foo; // true
// nu vervangen we Foo.prototype
Foo.prototype = {};
// en dat betekent dat...
foo instanceof Foo; // false
```

Dat betekent dus niet dat de verborgen link nu verbroken is! Nee, de `instanceof` "operator" kijkt alleen of het object waar de geheime link van de linkerkant naar wijst ook inderdaad de waarde is van de prototype property van de rechterkant. Zodra dat niet meer het geval is, zoals in de laatste drie regels van het vorige voorbeeld, zegt `instanceof` dat het niet meer een kind is. En daar zit wat in, want alle nieuwe properties die aan `Foo.prototype` worden toegekend worden niet langer doorgegeven aan het (bestaande) kind `foo`. Wel aan nieuwe kinderen, die dus gemaakt zijn na de toekenning. Maar als oudere kinderen al dingen hadden geërfd worden deze niet gedeeld met de nieuwe kinderen. Hmm.

```
var oud = new Foo;
Foo.prototype = {};
var nieuw = new Foo;
oud instanceof Foo; // false
nieuw instanceof Foo; // true
```

Ok, dat is allemaal wel leuk en aardig, maar wat erf je nou eigenlijk? Hah, goede vraag! We erven en delen de waardes van de properties van het prototype object. Laat die maar eens bezinken, want dat is de kern van het verhaal. Let op:

```
Foo.prototype.x = 5;
var foo = new Foo();
foo.x; // 5, erft van Foo.prototype
Foo.prototype.x = 6;
foo.x; // 6, wijst nog steeds naar Foo.prototoype
foo.x = 10;
foo.x; // 10, hebben we net toegekend...
Foo.prototype.x; // 6, deze hebben we niet gewijzigd
Foo.prototype.x = 12;
foo.x; // ... 10!
```

Wat is er gebeurd? In het begin werd de waarde naar `5` gezet. We maken een nieuw kind aan en kijken wat de waarde is van de property `x`. Omdat dit kind een vers object is met als enig extra de verborgen link naar een prototype, heeft het zelf nog geen properties. Toch is de waarde van `foo.x` gelijk aan `5`, gelijk aan `Foo.prototype.x` dus. Dat komt omdat JavaScript bij het uitlezen van een property eerst gaat kijken of dat object (`foo`) zelf een property heeft met die naam. In dat geval wordt de waarde van die property meteen teruggegeven. Zo niet, dan gaat JavaScript die verborgen link volgen en kijken of dat prototype object een property heeft met die naam. Zo ja, wordt de waarde daarvan teruggegeven. Zo nee, dan gaat JavaScript verder met de verborgen link van dat prototype object. Dit blijft het doen tot de verborgen link niet meer naar een object wijst. In dat geval geeft het op en zal het de waarde `undefined` teruggeven.

Dat was lezen dus. Hoe zit het dan met schrijven? Nou, een stuk makkelijker! Als je naar een property schrijft, zal JavaScript dat altijd opslaan als een eigen property van datzelfde object. Daarbij maakt het niet uit of dat object al bestaat of niet. Als het al bestond, wordt het overschreven. Als het niet bestond, wordt het aangemaakt. JavaScript zal bij het wijzigen van een property dus nooit naar de verborgen link met prototype kijken. Het doet er simpelweg niet toe.

In JavaScript werkt alles op deze manier van erven. Zo staat `Object` aan het hoofd (is dus de ouder) van alle andere objecten die JavaScript automatisch aanmaakt. Dit kunnen we eenvoudig aantonen door de waarde van `Array instanceof Object` te bekijken. Of door `Object.prototype.x = 5` te doen en daarna te kijken wat de waarde van `arr.x` is bij een willekeurig array. Bij het uitlezen van `arr.x` zal JavaScript eerst kijken of `arr` zelf een property heeft met de naam `x`. Waarschijnlijk niet, dus gaat het kijken bij de ouder; `Array.prototype`. Deze zal waarschijnlijk ook geen property `x` hebben, dus gaat het naar diens ouder, welk `Object` is. `Object.prototype.x` heb je net zelf aangemaakt dus wordt `5` teruggegeven.

Als we nou gaan kijken naar subclassing wordt het al meteen een heel stuk moeilijker. Helaas werkt dat niet zo soepeltjes in JavaScript, maar toch is het best mogelijk. Let op, we nemen de volgende objecten:

```
function Beest(){}
function Hond(){}
function Kat(){}
```

We willen nu dat `Hond` en `Kat` allebei een zogenaamde subclass (of sub object) worden van `Beest`, want het zijn allebei beesten. We gaan een paar fictieve methodes toevoegen om dingen duidelijker te maken. Dit doen we eerst op het prototype van `Beest`; daar maken we de generieke versie die misschien dingen doet wat alle beesten toch wel moeten doen...

```
Beest.prototype = {
  spreek: function(){
    this.openMond();
    this.maakGeluid();
  },
  openMond: function(){
    // hier worden spieren aangesproken enz...
    // dit moeten (bijna) alle beesten doen die willen "spreken"
  },
  maakGeluid: function(){
    // tril stembanden
    // dit moeten alle dieren wel doen, maar ieder dier weer op zijn eigen manier
  }
};
```

Nu dan, ieder beest maakt natuurlijk andere geluiden. Dus nu willen we eigenlijk dat als we `kat.spreek()` doen dat we dan mauwen, terwijl `hond.spreek()` moet blaffen. Oei... Welnu, dit kan :) Eerst maken we `Hond` en `Kat` een subclass van `Beest`:

```
Hond.prototype = new Beest();
Kat.prototype = new Beest();
```

Dat was het! Ja, echt. Dit zorgt er nu al voor dat nieuwe kinderen van zowel `Hond` als `Kat` functies zullen teruggeven als je hun `spreek`, `openMond` en `maakGeluid` properties uitleest. Sterker nog, `hond.spreek === kat.spreek`. Deze functies of objecten worden gedeeld. Wat we zojuist hebben gedaan is het prototype object van `Hond` en `Kat` vervangen door een nieuw kind van `Beest`. Dat zorgt ervoor dat we een prototypal link vormen van een kind van `Hond`/`Kat` naar de ouder naar `Beest` naar `Object`. De reden is dat bij deze link alleen de verborgen link naar de ouder wordt beschouwd. Dus gewoon `Hond.prototype = Beest` toekennen zou niet werken, want het object `Beest` heeft alleen een verborgen link naar zijn eigen ouder; `Object`.

We hebben nu dus twee subclasses van `Beest`; `Hond` en `Kat`. Alle properties die we aan `Beest.prototype` toevoegen, zullen we terug kunnen vinden in de kinderen van `Hond` en `Kat`, tenzij deze zelf een property hebben met die naam. Of het prototype object van hun ouder. Ter illustratie:

```
var kat = new Kat();
kat.spreek; // is een functie
kat.spreek === Beest.prototype.spreek; // kat erft van Beest dus het is gelijk, kat -> Kat -> Beest

// voor honden geldt op dit moment hetzelfde
var hond = new Hond();
hond.spreek; // een functie
hond.spreek === Beest.prototype.spreek; // true

// sterker nog...
hond.spreek === kat.spreek; // true

// en ze zijn dus (klein-)kinderen van Beest
kat instanceof Kat; // true
kat instanceof Beest; // true
hond instanceof Beest; // true
kat instanceof Hond; // false, dit werkt dus niet, dat is de bedoeling

// nu gaan we een property "shadowen"...
kat.maakGeluid === Beest.prototype.maakGeluid; // true
Kat.prototype.maakGeluid = function(){ alert("Miauw"); };
kat.maakGeluid === Beest.prototype.maakGeluid; // false, de prototypal lookup stopt nu bij Kat
kat.maakGeluid === hond.maakGeluid; // false, want hond.maakGeluid is nog steeds die van Beest

// als we nu kat.spreek(); doen zal er een alert komen met "miauw".
// we kunnen kat.maakGeluid ook eenvoudig weer die van Beest laten zijn
delete Kat.prototype.maakGeluid;
kat.maakGeluid === Beest.prototype.maakGeluid; // true, hij stopt niet meer bij Kat.prototype
```

Een nadeel van deze manier van subclassing is dat de "constructor" van de ouder wordt uitgevoerd bij initialisatie. Dus bij `Kat.prototype = new Beest()`, want je doet daar wel "gewoon" `new Beest()`. Dat dit voor initialisatie, is maakt voor JavaScript geen verschil. Dat betekent dat eventuele bijwerkingen van de constructor ook zichtbaar zijn. Dat is vaak niet wenselijk, doch soms wel.

```
function Foo(){ alert("ohnoes!"); };
new Foo(); // alert
function Bar(){}
Bar.prototype = new Foo(); // deze regel zorgt voor een extra alert
new Bar(); // geen alert
```

Dus hoe krijgen we dat subclassing voor elkaar zonder de alert? Nou, dat is een beetje lastig :) Er zijn een aantal oplossingen voor, al komen ze vaak op hetzelfde neer. Je maakt een copy van de referentie van het prototype object en zet die in een nieuwe functie. Aangezien `instanceof` er alleen maar naar kijkt of het object van de verborgen link van het kind wijst naar hetzelfde object als de prototype property van de rechterkant van `instanceof`, verandert er niets. Sterker nog, je kunt het heel eenvoudig voor elkaar krijgen dat een object erft van twee of meerdere andere objecten, zelfs als deze nooit met `new` zijn gebruikt. Ter illustratie:

```
function Foo(){}
function Bar(){}
Bar.prototype = Foo.prototype; // dus Foo en Bar hebben nu exact hetzelfde prototype object
var foo = new Foo();
foo instanceof Foo; // true, zoals verwacht
foo instanceof Bar; // true, ja deze ook want foo.[verborgen link] wijst naar het object dat gelijk is aan Bar.prototype.
```

Nu dan, dit kunnen we dus gebruiken... We gaan even terug naar ons `Beest` voorbeeld van boven. We willen dat `Kat` en `Hond` een subclass worden van `Beest`. Hiervoor moet `Kat.prototype` een kind worden van `Beest`, omdat we die verborgen link naar `Beest.prototype` nodig hebben. Hoe die link tot stand kwam is niet zo belangrijk, het gaat immers maar om een referentie naar hetzelfde object. Met de kennis die we zojuist opgedaan hebben wordt het dan als volgt:

```
function Beest(){ alert("foo"); }
function tijdelijk(){}
tijdelijk.prototype = Beest.prototype; // tijdelijke functie verwijst nu naar hetzelfde prototype object
var tmp = new tijdelijk(); // GEEN alert...
tmp instanceof Beest; // true, de verborgen link bestaat
Kat.prototype = tmp;
// let op dat Kat.prototype niet hetzelfde object moet zijn aan Hond.prototype!
Hond.prototype = new tijdelijk(); // ook geen alert
```

Nu zal je zien dat alle voorbeelden van erfelijkheid die we hierboven beschouwden hier ook weer zullen bestaan. Dus nieuwe katten en honden erven in eerste instantie de `spreek`, `openMond` en `maakGeluid` methoden van `Beest`. Deze kunnen dan specifieker worden door een nieuwe functie aan `Kat.prototype.maakGeluid` toe te wijzen, zoals we eerder al lieten zien. Daar verandert niets in.

Het enige dat ons nog rust is de zogenaamde "`super`" call. JavaScript kent geen subclassing en dus ook niet het concept van `super`... Gelukkig is in JavaScript de code van de constructor gelijk aan de code van een normale aanroep van de functie. Daar ga ik nu niet op in, maar ga er maar vanuit dat voor `Beest()` en `new Beest()`, dezelfde code aangeroepen wordt. Het enige verschil is "de context". Deze context kunnen we wijzigen door twee methodes die JavaScript beschikbaar stelt via `Functie.prototype`; `call` en `apply`. Ook hier ga ik niet dieper op in, behalve dan te zeggen dat ze me in staat stellen om te doen alsof een constructor wordt aangeroepen alsof dat met het `new` keyword gebeurde.

```
function Foo(){ this.x = 5; alert("executed"); }
Foo(); // er wordt een globale variabele x aangemaakt, oeps, en er was een alert
var foo = new Foo(); // foo.x is 5 en er was een alert
var nep = {};
Foo.call(nep); // nep.x zal 5 worden! en er was een alert
```

Bij het testen van deze code zal je zien dat je drie alerts krijgt. Dezelfde code wordt dus uitgevoerd. Het enige verschil is dat het keyword `this` naar een ander object verwijst; respectievelijk het globale object (in de browser is dat altijd `window`), een nieuwe instance van `Foo` en een nieuw anoniem object. Uitvoer van de functie is altijd hetzelfde. Enige aparte was dat er bij de tweede keer, dus bij `new Foo()`, ook een nieuw object werd aangemaakt met die verborgen link naar `Foo.prototype`. Verder is de uitvoer hetzelfde. Dat kunnen we dus ook gebruiken voor onze `super`. Stel dat `Beest` nog iets aparts doet in zijn constructor. Dan willen we dat wel laten doen voor ieder beest. Dus…

```
function Beest(){ alert("speciaals, alleen voor nieuwe beesten, maar wel alle beesten"); }
// subclassing zonder super
function Kat(){ alert("miauw"); }
function tmp(){}
tmp.prototype = Beest.prototype;
Kat.prototype = new tmp();
new Kat(); // 1 alert: miauw
// subclassing met super
function Kat(){ Beest.apply(this, arguments); alert("miauw"); }
function tmp(){}
tmp.prototype = Beest.prototype;
Kat.prototype = new tmp();
new Kat(); // twee alerts! die van Beest en miauw
```

Bij het laatste voorbeeld zijn kinderen van `Kat` dus ook kleinkinderen van `Beest`. Ze erven eerst van `Kat` en daarna van `Beest`. De constructor van `Beest` wordt alleen maar uitgevoerd bij het aanmaken van nieuwe kinderen van `Beest` of `Kat`, niet bij het initialiseren van de subclass `Kat` zelf. Achievement achieved!

Ik heb geen idee hoe moeilijk of makkelijk dit is, maar ik hoop dat de voorbeelden een beetje voor zich spreken. Ga er mee spelen. Het is misschien een beetje lastig, maar als je het eenmaal door hebt is het oh-zo logisch :)

Oh, en prettige feestdagen! ;)

## Over Peter van der Zee

<img src="/_img/2011/12/peter-van-der-zee.jpg" alt="Foto van Peter">
[Peter](http://qfox.nl/) is gespecialiseerd in in JavaScript/ECMAScript en werkt voor [Uxebu](http://uxebu.com/), voornamelijk aan JavaScript gerelateerde projecten.

Donatie: [Bits of Freedom](https://www.bof.nl/)
Peter heeft Fronteers de vrijheid gegeven om een goed doel (of geen) te kiezen en we hebben als tegenhanger voor het EFF voor Bits of Freedom gekozen.
