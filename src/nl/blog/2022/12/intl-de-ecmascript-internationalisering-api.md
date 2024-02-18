---
title: Intl, de ECMAScript internationalisering API
date: 2022-12-20
author: Edwin Martin
summary: 'Intl is de standaard ECMAScript internationalisering API en wordt al sinds 2016 door alle browsers ondersteund, maar ontwikkelaars vallen toch vaak terug op onnodige (en verouderde) JavaScript bibliotheken.'
categories:
    - Adventskalender
---

Intl is de standaard ECMAScript internationalisering API en wordt al sinds 2016 door alle browsers ondersteund, maar ontwikkelaars vallen toch vaak terug op onnodige (en verouderde) JavaScript bibliotheken.

![Een vrouw die Intl vertegenwoordigt, kijkt verontwaardigd naar haar vriend die een vrouw die Moment Luxon vertegenwoordigt nafluit](/_img/adventskalender/blog-edwin.jpg)

## Aargh, tijdzones en zomertijd

Ontwikkelaars klagen vaak als ze tijdzones of zomertijd moeten ondersteunen. Het tijdstip dat ze willen tonen verschilt een (of meer) uur van het tijdstip dat in de data zit. Soms lossen ze dat op door er zelf het verschil erbij op te tellen, niet wetende dat daarmee het probleem alleen groter is geworden en de tijd na de eerstvolgende zomer-wintertijdwisseling waarschijnlijk weer onjuist is.

Terwijl de oplossing heel eenvoudig is. Sla tijd altijd op als GMT, dus zonder tijdzone-offset en zonder zomertijd. Je kan hiervoor de Unix epoch gebruiken, dat is het aantal seconden sinds 1 januari 1970 GMT. Gebruik deze tijd ook in je API’s.

_Tip: gebruik hiervoor geen 32-bits integer, want dan heb je in 2038 weer een probleem._

Vanuit deze GMT-tijd kan je met JavaScript eenvoudig de lokale tijd tonen. Het Date object heeft al heel lang functies om zowel de tijd als de datum in de gewenste locale weer te geven (`date.toLocaleDateString()`, `date.toLocaleString()` en `date.toLocaleTimeString()`). Je kan helaas niet afwijken van de standaard tijd/datum-weergave van deze functies.

Als je toch invloed wil hebben op hoe de tijd wordt weergegeven, dan kon je (in het verleden) zelf iets schrijven of je wenden tot JavaScriptbibliotheken. Een veel gebruikte bibliotheek, die ook overweg kan met tijdzones en zomertijd is Moment.js.

## Moment.js

Er zijn inmiddels veel betere alternatieven voor Moment.js. Toch zie ik veel ontwikkelaars nog steeds met Moment.js werken. Het is te begrijpen dat als je een API eenmaal goed kent, je niet graag overstapt op een andere API.

Er zijn toch een aantal goede redenen om over te stappen, want Moment.js heeft een aantal serieuze nadelen:

1. Moment.js is verouderd en wordt niet meer verder ontwikkeld. _"We recognize that many existing projects may continue to use Moment, but we would like to discourage Moment from being used in new projects going forward."_ Zoals te lezen is op de [Documentatiepagina](https://momentjs.com/docs/). Verdere uitleg over dit besluit staat op hun [Project Status pagina](https://momentjs.com/docs/#/-project-status/).
2. Moment.js bevat alle tijdzone- en zomertijdgegevens van alle landen is daardoor best groot.
3. Moment is niet geschikt voor tree shaking, dus je laadt altijd de hele bibliotheek in, ongeacht hoeveel je ervan gebruikt.
4. Moment.js is niet _immutable_. Als je een tijdstip x hebt en je wil de tijd twee uur later weten, dan verandert de waarde van x, wat je meestal niet wilt. Als je dit eenmaal weet, dan zorg je dat je eerst een kopie van x maakt, maar het blijft onhandig.
5. Een reden die ik op andere plekken niet tegenkom: door de tijdzone- en zomertijdgegevens in je JavaScript op te nemen, kunnen ze niet makkelijk worden bijgewerkt. Met een paar honderd landen kan je je voorstellen dat deze gegevens regelmatig wijzigen, maar als je je JavaScriptbibliotheken maar af en toe bijwerkt, of in het slechtste geval nooit, dan weet je dat je snel met verouderde gegevens zit.

## Erdogantijd

Een interessant voorbeeld is de tijdzonechaos in 2015 in Turkije. De wintertijd zou ingaan op 25 oktober, maar omdat er op 1 november verkiezingen waren, werd dit een paar weken van te voren verplaatst naar 8 november, zodat het tijdens de verkiezingen een uur langer licht zou zijn. Microsoft, Apple, Google (Android) brachten snel updates uit, maar zoals je je kunt voorstellen, werden niet alle systemen op tijd bijgewerkt. De Turken leefden twee weken lang met een deel van de klokken op de gewone tijd en een ander deel op "Erdogantijd".

Zie ook [On the Timing of Time Zone Changes](https://codeofmatt.com/on-the-timing-of-time-zone-changes/) van Matt Johnson-Pint voor andere voorbeelden van tijdzonechaos.

Door de tijdzone- en zomertijdgegevens hardcoded in JavaScript op je website te zetten maak je het probleem niet echt kleiner.

Je kan in plaats van Moment.js ook een modernere bibliotheek gebruiken zoals Luxon, die op Intl is gebaseerd. Maar waarom zou je dan niet gelijk Intl gebruiken?

## Intl

Intl kan op het eerste gezicht wat ingewikkeld overkomen, maar zoals je hieronder kan zien, valt dat best mee.

Hier is een voorbeeld:

```
// Take any date object
const date = new Date(Date.UTC(2022, 11, 25, 11, 30, 00));

// Create a DateTimeFormat
const dateTimeFormat = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' })

// Format the provided date
dateTimeFormat.format(date)

// returns "Sunday, 25 December 2022 at 12:30:00 CET"
```

De eerste parameter van `DateTimeFormat` is de _locale_. Dat is de taal waarin de datum weergegeven moet worden, niet te verwarren met de tijdzone. Gewoonlijk is dit de taal van de pagina zelf, maar wil je ingestelde taal van de gebruiker gebruiken, dan kan je als waarde `undefined` meegeven.

De tweede parameter bevat de opties. Bij zowel `dateStyle` als `timeStyle` zijn de volgende waarden mogelijk: `"full"`, `"long"`, `"medium"` en `"short"`.

Als dat niet voldoende is, kan je ook voor elke deel van de datum aangeven hoe deze moet worden weergegeven. Voor bijvoorbeeld de maand kan je `month` de volgende waarden geven:

-   `"numeric"` (bijvoorbeeld 3)
-   `"2-digit"` (bijvoorbeeld 03)
-   `"long"` (bijvoorbeeld March)
-   `"short"` (bijvoorbeeld Mar)
-   `"narrow"` (bijvoorbeeld M)

Wil je de datum voor een bepaalde tijdzone weergeven, dan kan je de optie `timeZone` meegeven, bijvoorbeeld `timeZone: "Asia/Tokyo"`.

Vrijwel elke denkbare datumnotatie is mogelijk. Zie voor de lijst van alle mogelijke opties de pagina [Intl.DateTimeFormat() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

`format()` geeft altijd een string terug, maar wat als je de seconden in een kleiner font wil weergeven? Of AM/PM in een andere kleur? Ook dat is mogelijk. In plaats van `format(date)` roep je dan `formatToParts(date)` aan en je krijgt een array terug van alle datumonderdelen en hun waardes. Je kan dan zelf bepalen hoe je elk van deze waarden weergeeft.

```
dateTimeFormat.formatToParts(date);

// returns
[
  { type: "weekday", value: "Sunday" },
  { type: "literal", value: ", " },
  { type: "day", value: "25" },
  { type: "literal", value: " " },
  { type: "month", value: "December" },
  { type: "literal", value: " " },
  { type: "year", value: "2022" },
  { type: "literal", value: " at " },
  { type: "hour", value: "12" },
  { type: "literal", value: ":" },
  { type: "minute", value: "30" },
  { type: "literal", value: ":" },
  { type: "second", value: "00" },
  { type: "literal", value: " " },
  { type: "timeZoneName", value: "CET" }
]
```

Naast `DateTimeFormat` bevat Intl nog een reeks mogelijkheden die nuttig zijn bij internationalisatie.

## RelativeTimeFormat

Relatieve tijd, zoals je vaak ziet op fora en chatkanalen.

```
// Create a RelativeTimeFormat
const rtf = new Intl.RelativeTimeFormat('nl-NL');

rtf.format(-2, 'minute')
// returns "2 minuten geleden"
```

## ListFormat

Het weergeven van lijsten in de gewenste taal.

```
// Create a ListFormat
const listFormat = new Intl.ListFormat('nl-NL', { style: 'long', type: 'conjunction' });

listFormat.format(["bananen", "appels", "mandarijnen"])
// returns "bananen, appels en mandarijnen"
```

Daarnaast kan je met Intl ook taalafhankelijk getallen juist weergeven, meervoudsregels toepassen, alfabetisch sorteren en tekst opdelen in (onder andere) woorden.

Wil je aan de slag met de Intl API en alle mogelijkheden bekijken, dan kan je zoals altijd terecht bij de goede [documentatie op MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl).

Maar wil je de Intl API interactief ontdekken, dan kan je [Intl Explorer](https://www.intl-explorer.com/?locale=nl-NL) van Jesper Orb uitproberen.

En mocht je denken "heel leuk die Intl API, maar de Date API mag ook wel wat beter", dan heb ik goed nieuws: momenteel wordt gewerkt aan de [Temporal API](https://tc39.es/proposal-temporal/docs/) die de oude Date API zal vervangen.
