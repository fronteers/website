---
title: "Een eigen kalendercomponent bouwen"
date: 2019-12-02
author: Joep van der Heijden
categories: 
  - Adventskalender
---
Het is natuurlijk belangrijk componenten in je applicatie niet allemaal zelf te maken, maar gebruik te maken van het enorme assortiment aan componenten die al geschreven zijn door anderen. Het kost immers tijd om dingen zelf te maken en dus ook geld. Maar soms is het ook goed om eens kritisch te kijken naar welke functionaliteiten je daadwerkelijk benut van het component dat je gebruikt en is het ook gewoon leuk en leerzaam om zelf iets te bouwen.

Zo deden wij dat bij Withlocals voor onze datepicker- kalender- en agenda-componenten. Er zijn bij ons ongeveer 2000 gebruikers die iedere dag hun beschikbaarheid bijwerken, dus de agenda is een cruciaal onderdeel van ons platform. Veel kant-en-klare kalendercomponenten op het web zijn echter te uitgebreid voor ons, omdat ze moeten werken voor iedere mogelijke use-case.

# Stap 1: datastructuur

Als je per maand het aantal dagen weet en hoe je dit kunt vertalen naar een visuele weergave van een kalender wordt alles een stuk eenvoudiger. Naast het aantal dagen in de maand willen we ook tonen op welke dag de maand begint.

Het beste zou dus zijn als we een functie hadden die deze informatie teruggeeft voor een maand. In het `[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)` object is al de nodige data beschikbaar

## Aantal dagen in een maand

Het aantal dagen in een maand is uit te rekenen met [de getDate method van het Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate).

De constructor van `Date` vraag om de parameters `year`, `month` en `day`. Als we `day` op 0 zetten wordt de laatste dag van de vorige maand gebruikt. `new Date(2020, 1, 0)` is dus niet 0 februari maar 31 januari. We kunnen dus als volgt het aantal dagen in een maand uitrekenen:

```
function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

const daysInJanuary = getDaysInMonth(2020, 0); // 31
```

## Begin van een maand

De `[getDay()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)` method van een `Date` object geeft terug welke weekdag — van 0 tot en met 6, waarbij 0 zondag is — een datum is. Dat kunnen we gebruiken om de weekdag van de eerste dag van een maand te bepalen:

```
function getStartOfMonth(year, month) {
    return new Date(year, month, 1).getDay();
}

const startOfJanuary = getStartOfMonth(2020, 0); // 3 = woensdag
```

## Genereren van een maand

Een tweedimensionale array van de maand kunnen we vervolgens als volgt berekenen:

```
function generateMonth(year, month) {
    const startOfMonth = getStartOfMonth(year, month);
    const daysInMonth = getDaysInMonth(year, month);
    const amountOfWeeks = Math.ceil((startOfMonth + daysInMonth) / 7);

    return Array(amountOfWeeks)
        .fill()
        .map((_, week) => {
            return Array(7).fill().map((_, day) => {
                const dayOfTheMonth = 
                    (week * 7) -
                    (startOfMonth - 1) +
                    day;

                if (dayOfTheMonth < 1 ||
                    dayOfTheMonth > daysInMonth
                ) {
                    return null;
                }

                return dayOfTheMonth;
            });
        });
}

const january = generateMonth(2020, 0);
/* =>
 * [
 *     [null, null, null, 1, 2, 3 ,4],
 *     [5, 6, 7, 8, 9, 10, 11],
 *     [12, 13, 14, 15, 16, 17, 18],
 *     [19, 20, 21, 22, 23, 24, 25],
 *     [26, 27, 28, 29, 30, 31, null]
 * ]
 */
```

In de output van `generateMonth()` is er al bijna een kalender te zien. Op mijn [CodePen met bovenstaande functies](https://codepen.io/klaasvaak/pen/pooYEGe?editors=0011) kun je de output voor het gehele jaar 2020 zien.

# Stap 2: de view

Nu de kalender al bijna te zien is in de data kan dit relatief ‘eenvoudig’ vertaald worden naar HTML en CSS. In het volgende voorbeeld is dit gedaan met behulp van React.

De volgende componenten zien hiervoor gemaakt:

* `Day` (rendert een enkele dag)
* `Week` (rendert meerdere `Day` componenten)
* `Month` (rendert meerdere `Week` componenten en de labels voor de dagen van de week)
* `Calendar` (rendert de huidige `Month` componenten)

Op CodeSandbox is het [het volledige voorbeeld van een simpele kalenderweergave](https://codesandbox.io/s/heuristic-mestorf-oxmtu) te zien.

![Voorbeeld van versimpelde kalenderweergave](https://fronteers.nl/_img/adventskalender/02-12-2019-1.png)



Voor een meer uitgebreide versie kan je naast extra styling ook denken aan event handlers voor datumselectie en het formatteren van de datums met bijvoorbeeld [moment.js](https://momentjs.com/) of [date-fns](https://date-fns.org/).

# Stap 3: internationalisatie

In bovenstaande voorbeelden werd zondag steeds gebruikt als begin van de week, maar als dit een andere dag moet zijn kunnen we de dataset daarvoor aanpassen.

De output van `generateMonth()` voor januari 2020 zag er zo uit:

```
[
    [null, null, null, 1, 2, 3 ,4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, null],
]
```

Als de week op maandag zou beginnen moet alles 1 naar links opschuiven en zou het er dus zo uitzien:

```
[
    [null, null, 1, 2, 3, 4 ,5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, null, null]
]
```

Aan `generateMonth` voegen we een parameter toe die aangeeft wat het begin van de week is. Zondag (de default) is 0, maandag is 1, etc cetera. Binnen `generateMonth` wordt deze parameter gebruikt om op de juiste manier een kalender te genereren door een offset te berekenen

```
const sundayBasedOffset = getStartOfMonth(year, month);
let realOffset = sundayBasedOffset - startOfCalendarWeek;

if (realOffset < 0) {
    realOffset = 7 + realOffset;
}

const daysInMonth = getDaysInMonth(year, month);
const amountOfWeeks = Math.ceil((realOffset + daysInMonth) / 7);
```

[Op CodeSandbox vind je een voorbeeld van deze berekening.](https://codesandbox.io/s/vigorous-tesla-97y6s)

![Een voorbeeld van een kalendercomponent waarbij de begindag van de week kan worden ingesteld](https://fronteers.nl/_img/adventskalender/02-12-2019-2.png)



# De mogelijkheden

Nu het duidelijk is hoe een kalender te genereren kun je de logica op verschillende manieren gebruiken. Zoals bijvoorbeeld in een datepicker of een daterange-picker:

![Een daterange-picker](https://fronteers.nl/_img/adventskalender/02-12-2019-3.gif)

## Een daterange-picker

Ook kun je dezelfde logica in een agenda gebruiken:

![Toepassing van het component in een kalender-app](https://fronteers.nl/_img/adventskalender/02-12-2019-4.gif)



Wie weet volgt er binnenkort nog een vervolgpost voor de toegankelijkheid van deze componenten.

### Over Joep van der Heijden
<img src="/_img/adventskalender/joep.jpeg" alt="Foto van joep" class="floating-portrait" /> 
Sinds een kleine 3 jaar is Joep lead front-end developer bij de startup Withlocals in Eindhoven waar hij een team van 5 front-enders leidt. Naast het werk houdt hij zich bezig met het organiseren van de Eindhoven Developers Meetup, waar je elke meetup een kijkje neemt bij een anderbedrijf in de regio Eindhoven.
Joeps donatie gaat naar Bits of Freedom.
