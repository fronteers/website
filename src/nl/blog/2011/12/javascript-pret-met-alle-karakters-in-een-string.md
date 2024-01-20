---
title: 'JavaScript-pret met alle karakters in een string'
date: 2011-12-09
author: Mathias Bynens
categories:
    - Adventskalender
---

Stel: je hebt een functie `encode()` geschreven, die [een string bestaande uit één enkel karakter](http://www.flickr.com/photos/24374884@N08/6346609079/) als argument neemt, en een gecodeerde versie van dat ene karakter teruggeeft. Een praktisch voorbeeld hiervan is [ROT-13-encodering](http://en.wikipedia.org/wiki/ROT13).

Als je nu een willekeurige string bestaande uit meerdere karakters wil gaan coderen volgens `encode()`, hoe zou jij dat dan doen?

Er zijn natuurlijk verscheidene mogelijkheden, maar de ene is al leesbaarder/compacter/sneller/handiger/robuuster dan de andere.

Laat ons om te beginnen uitgaan van volgende invoer:

```
var input = 'foo bar baz';
```

## ECMAScript 5

Ik had onlangs iets dergelijks nodig, en mijn eerste idee was om `String#split` te gebruiken om een array te maken van alle karakters in de invoerstring:

```
input.split(''); // ['f', 'o', 'o', ' ', 'b', 'a', 'r', ' ', 'b', 'a', 'z']
```

Vervolgens kunnen we met ES5 `Array#map` elk karakter omvormen naar zijn gecodeerde versie, om dan met `Array#join` de array van gecodeerde karakters samen te voegen tot een string:

```
var output = input.split('').map(function(character) {
  return encode(character);
}).join('');
output; // de gecodeerde string
```

(Zowel in dit als in de volgende voorbeelden zouden we de anonieme functie ook gewoon kunnen weglaten door `encode` mee te geven als argument aan de `map`-functie, maar dat leek me iets minder duidelijk.)

Dit is wellicht de meest eenvoudige en leesbare oplossing. Helaas werkt deze enkel in omgevingen waar ES5 `Array#map` beschikbaar is. Het is trouwens mogelijk om de `split()`-stap over te slaan:

```
var output = [].map.call(input, function(character) {
  return encode(character);
}).join('');
output; // de gecodeerde string
```

ES5 biedt echter nog een andere mogelijkheid: je kan door middel van een index een bepaald karakter uit een string opvragen. `input[0]` geeft dan het eerste karakter terug, `input[1]` het tweede, enzovoort.

```
var length = input.length,
    counter = 0,
    output = '';

for (; counter < length; counter++) {
  output += encode(input[counter]);
}

output; // de gecodeerde string
```

Helaas ondersteunt IE < 8 dit niet. (IE 8 zelf ondersteunt het enkel voor string literals, maar niet voor string objects.)

## Array generics

Door gebruik te maken van [array generics](https://developer.mozilla.org/en/JavaScript/New_in_JavaScript/1.6#Array_and_String_generics) kan `String#split` vermeden worden:

```
var output = Array.map(input, function(character) {
  return encode(character);
}).join('');
output; // de gecodeerde string
```

Helaas heeft `Array.map` nog minder ondersteuning dan `Array#map`, aangezien het geen deel uitmaakt van de ECMAScript-standaard.

Voor ES3-compatibiliteit is een andere aanpak nodig.

## Compatibiliteit met ES3

Door `String#replace` te gebruiken in plaats van `String#split` kunnen we de array-tussenstap weglaten:

```
var output = input.replace(/[\s\S]/g, function(character) {
  return encode(character);
});
output; // de gecodeerde string
```

Ik vond deze reguliere expressie best interessant: `\s` matcht alle witruimte-karakters, en `\S` matcht alle andere karakters; `[\s\S]` zal dus om het even welk karakter matchen.

Merk op dat je niet gewoon `/./` kan gebruiken, aangezien dat geen line feeds (`\n`), carriage returns (`\r`), line separators (`\u2028`) of paragraph separators (`\u2029`) matcht.

Deze oplossing is volledig conform met ES3.

Een alternatief is om `[^]` te gebruiken in plaats van `[\s\S]`: zoek elk karakter dat niet… niets is. Helaas werkt deze reguliere expressie niet in IE < 9. In browsers waar ze wel werkt, is ze [sneller dan `[\s\S]`](http://jsperf.com/match-any-char-regex 'jsPerf: Match any character using regex').

## Ondersteuning voor Safari 2-achtige WebKits

Jammer genoeg ondersteunen oeroude WebKit-browsers zoals Safari 2 geen functies als tweede argument voor `String#replace`.

We kunnen echter wel `String#split` gebruiken, vervolgens met een loopje door de resulterende array wandelen, en elk gecodeerd karakter stuk voor stuk aan een aparte string-variabele toevoegen.

```
var characters = input.split(''),
    length = characters.length,
    counter = 0,
    output = '';

for (; counter < length; counter++) {
  output += encode(characters[counter]);
}

output; // de gecodeerde string
```

Deze oplossing is net als de vorige volledig ES3-compatibel, en werkt bovendien ook in browsers die gebaseerd zijn op een verouderde WebKit-versie.

## Disclaimer

[JavaScript maakt intern gebruik van de UCS-2-encodering](https://mathiasbynens.be/notes/javascript-encoding) (de voorloper van UTF-16). Alle ingebouwde string-eigenschappen en functies (zoals `String#length`, `String#split` en `String#slice`) werken op basis van 16-bit code-eenheden in plaats van Unicode-karakters. Dit geeft soms op het eerste zicht [onverwachte resultaten](https://mathiasbynens.be/notes/javascript-unicode). Als je `encode`-functie Unicode code-points in plaats van UCS-2/UTF-16 code-eenheden verwacht, zal je dus nog een conversie-functie nodig hebben.

## Over Mathias Bynens

<img src="/_img/2011/12/mathias-bynens.jpg" alt="Foto van mathias bynens uit 2011" class="floating-portrait" /> 
[Mathias](https://mathiasbynens.be/) is een freelance webontwikkelaar uit Grembergen, België. In zijn vrije tijd organiseert hij samen met enkele andere vrijwilligers [Fronteers-meetups in België](https://twitter.com/fronteersbe).

Donatie: ErKriDo
Wat het goede doel betreft: m’n keuze was snel gemaakt :) [ErKriDo](http://erkrido.blogspot.com/) is de Buggenhoutse aftakking van [Kom Op Tegen Kanker](http://www.tegenkanker.be/kom_op_tegen_kanker). Zij organiseren jaarlijks o.a. een benefietconcert waarvan de opbrengst integraal naar de Vlaamse Liga Tegen Kanker gaat, en dus goed besteed wordt.
