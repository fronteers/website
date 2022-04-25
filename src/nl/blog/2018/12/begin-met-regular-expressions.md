---
title: "Begin met regular expressions"
date: 2018-12-06
author: Melle Wynia
categories: 
  - Adventskalender
---
Misschien dat je het wel kent: als je in je team begint over regular expressions trekken er vaak direct een aantal lijkbleek weg en beginnen er meteen een aantal anderen te kwispelen van enthousiasme. Allebei hebben ze gelijk, het is een soort superwapen. Een superwapen waarmee je soms met een regel code honderden regels code kunt besparen. In goede handen los je bondig problemen op. In de verkeerde handen leidt het tot code die niemand meer wil aanraken. Dit artikel is bedoeld als een inleiding voor die mensen die lijkbleek wegtrokken, maar nu toch wel nieuwsgierig geworden zijn.

# Wat zijn regular expressions eigenlijk?

Regular expressions zijn als het ware een eigen programmeertaal met een eigen syntax. Het is een feature waarmee je eenvoudig een reeks tekens of groepen van tekens kunt herkennen. Bijvoorbeeld alle woorden in een tekst die op een ‘s’ eindigen. In haast elke programmeertaal is de   basis hetzelfde. Zelfs JavaScript ondersteunt het al sinds EcmaScript 3 (1999).

Een scenario waarin een regular expression van pas komt, is als je dynamische input van een formulier alvast in de front-end wilt valideren. Bijvoorbeeld een postcode. Het officiële format van een postcode is vier cijfers, een spatie en twee hoofdletters. Met regular expressions kun je eenvoudig controleren of een ingevulde postcode correct is en de gebruikers zelfs een handje helpen met het automagisch aanvullen of correct formatteren van de postcode.

In JavaScript zijn regular expressions een soort object waaraan je kunt refereren in een variable.

```
const mijnEigenRegExps = new RegExp('wow');
```

De meest voorkomende vorm waarin je regular expressions in JavaScript tegenkomt, is als _literal_ regular expression welke herkenbaar is door twee forward slashes.

```
const mijnEigenRegExps = /wow/;
```

In veel (string) methods kun je een regular expression ook als argument gebruiken. Onder andere bij de methods `replace` en `split` is dit het geval. Dit biedt extra flexibiliteit en functionaliteit.

```
'Een soort superwapen'.replace('super', 'hyper');
// "Een soort hyperwapen"

'Een soort superwapen'.replace(/super/, 'hyper');
// "Een soort hyperwapen"

'Koe, schaap, kip'.split(/, /);
// ["Koe", "schaap", "kip"]
```

# Leer basis concept(en)

Laten we kijken of er een `a` character in de onderstaande string staat. Met de `test` method op een regular expression kun je eenvoudig zien of een character voorkomt in een string.

```
/a/.test("Content Security Policy (CSP) is an added layer of security.");
// true
```

Stel, je wil alle `a` characters in een stukje tekst vervangen door een emoji. Daarvoor kun je de `replace` (string) method gebruiken die zowel een string als een regexp als argument accepteert. Met een normale string loop je snel tegen limitaties op.

```
const txt = "Content Security Policy (CSP) is an added layer of security.";

txt.replace('a', '❤️');
// "Content Security Policy (CSP) is ❤️n added layer of security."

txt.replace(/a/, '❤️');
// "Content Security Policy (CSP) is ❤️n added layer of security."
```

Met regexps heb je meer opties. Zo kun je ervoor kiezen om ‘global’ alle `a` characters te vervangen, in plaats van slechts de eerste. Dit doe je door de global `g` flag toe te voegen.

```
txt.replace(/a/g, '❤️')
// "Content Security Policy (CSP) is ❤️n ❤️dded l❤️yer of security."
```

Laten we nog een paar stappen verder gaan. Alle voorbeelden kun je in de console van je browser uitproberen.

Als je alle `a`, `b` en `c` characters wil vervangen door een smiley, dan kan dat met een character set. Als er op een plek een `a`, `b` of `c` character staat, heb je een match.

```
txt.replace(/[abc]/g, '❤️')
// "Content Se❤️urity Poli❤️y (CSP) is ❤️n ❤️dded l❤️yer of se❤️urity."
```

Regular expressions zijn standaard hoofdlettergevoelig, dus de eerste C van Content wordt niet gematcht. Er zijn twee manieren om dit wel te doen: het toevoegen van de hoofdlettervarianten aan de character set of het gebruik van de `ignore case` flag. De ignore case flag kun je gewoon naast de andere flags zetten, zoals in ons voorbeeld naast de global.

```
txt.replace(/[abcABC]/g, '❤️')
// "❤️ontent Se❤️urity Poli❤️y (CSP) is ❤️n ❤️dded l❤️yer of se❤️urity."

txt.replace(/[abc]/gi, '❤️')
// "❤️ontent Se❤️urity Poli❤️y (CSP) is ❤️n ❤️dded l❤️yer of se❤️urity."
```

Als je wilt, kun je in dit geval ook een character set range definiëren: alle characters vanaf a tot en met c: `[a-c]`.

```
txt.replace(/[a-c]/gi, '❤️')
// "❤️ontent Se❤️urity Poli❤️y (CSP) is ❤️n ❤️dded l❤️yer of se❤️urity."
```

Het matchen op een character set range werkt ook voor getallen: een character set range van 1 tot en met 6 `[1-6]` in plaats van `[123456]`.

```
'06-06-1991'.replace(/[1-6]/gi, '❤️')
// "0❤️-0❤️-❤️99❤️"
```

Als je groepen characters wil vervangen, kun je die tussen haakjes zetten en meerdere mogelijkheden per groepje scheiden met een vertical bar character. Bijvoorbeeld alle ‘onnodige’ woorden in deze zin.

```
const txt2 = 'The referrer of the document in which the violation occurred.';

txt2.replace(/(of|the|in)/gi, '❤️')
// "❤️ referrer ❤️ ❤️ document ❤️ which ❤️ violation occurred."
```

# Use case: valideer en autocorrect postcode

Nu je de basis van regular expressions in JavaScript onder de knie hebt, kunnen we ook eens opnieuw naar het eerder beschreven postcodeprobleem kijken.

Met onderstaande code kun je controleren of de notatie van de postcode geldig is. Even ter herhaling: check voor vier cijfers, een spatie en twee hoofdletters. Het `^` character geeft aan dat de tekst ermee moet starten en `\d` is equivalent aan de character set range `[0-9]`. Het `$` character geeft aan dat de match die je maakt aan het einde van de string moet zitten.

```
const gebruikersInput = '2384 AB';

/^\d\d\d\d [A-Z][A-Z]$/.test(gebruikersInput);
// true
```

Dit voorbeeld keurt de input alleen goed als dit het juiste format heeft: 2345 AB. Variaties daarop zoals 2345ab of 2345 Ab zijn incorrect, terwijl deze inhoudelijk wel kloppen.

Om dit op te vangen kun je regular expressions inzetten om de gebruikersinput te formatteren. Denk bijvoorbeeld aan het vergeten van een spatie of het gebruik van kleine letters. Daarvoor zou het onderstaande voorbeeld geschikt zijn. Hierin wordt gekeken of de input uit vier cijfers en twee letters bestaat en het `?` character voegt een spatie toe tussen beide groepen. De letters in de postcode worden omgezet naar hoofdletters.

```
const gebruikersInput2 = '2345aB';

gebruikersInput2.replace(/^(\d\d\d\d) ?([a-z][a-z])$/i, '$1 $2').toUpperCase();
// "2345 AB"
```

Dit voorbeeld zou je ook op andere, meer efficiënte manieren kunnen oplossen, maar om het eenvoudig te houden heb ik hiervoor gekozen.

# Conclusie

Met dit artikel heb je de basis van regular expressions: je kunt ze herkennen, lezen en in de basis toepassen. Eenvoudige regular expressions kunnen vele regels code schelen, maar soms kan het een onnodig ingewikkelde oplossing voor een probleem zijn of nieuwe bugs introduceren.

Daarom geldt voor regular expressions hetzelfde als voor elk ander superwapen: use it wisely. Want je kunt het jezelf - en je collega's - heel snel heel moeilijk maken.

# Meer weten?

Regular expressions zijn een uitgebreid onderwerp. Het kan even duren voordat je je de basisconcepten helemaal eigen hebt gemaakt, daarom zou ik aanraden om eerst een aantal introducties te lezen. Die van MDN en Eloquent JavaScript zijn een uitstekend startpunt.

[Eloquent JavaScript](https://eloquentjavascript.net/09_regexp.html)

[MDN web docs over regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

(TODO: Over Melle Wynia
/adventskalender/melle.jpg
Melle Wynia werkt als freelance front-end developer/consultant. Voor zijn klanten sluit hij aan bij hun teams om kennis over te dragen, de kwaliteit te waarborgen, beveiliging op peil te brengen en nieuwe features te realiseren. Tot zijn tools behoren onder andere Node, Angular en Vue.js.
Donatie: de Hersenstichting)
