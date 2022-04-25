---
title: "Bijeenkomst bij ASPACE op 23 juni 2011"
date: 2011-06-23
eventdate: 2011-06-23
location: 
categories: 
    - meetup
---
[Mathias Bynens](https://mathiasbynens.be/) opent de avond en bedankt [ASPACE](http://aspace.be) en [iLibris](http://ilibris.be) voor het hosten van de avond.

Mathias is ook de eerste die gaat spreken, vandaag over JavaScript performance. Hij steekt van wal met het feit dat JavaScript de rendering van de pagina blokkeert. Daarom dien je de scripts pas in de HTML te voegen aan het einde zo dichtbij de `</body>` mogelijk.

Trage dingen in JavaScript zijn: de DOM, functiecalls en lookups. Een manier om de DOM sneller te maken is door een container of DocumentFragment aan te maken, in plaats van meerdere keren de DOM aan te passen. Ook bij libraries zoals jQuery is het handiger om de DOM zo min mogelijk op te vragen:

```
$('.foo').hide();
$('.foo').show();
```

_wordt_

```
var $foo = $('.foo').hide();
$foo.show();
```

De laatste trage JavaScript eigenschap is property lookups. Net als de functiecalls is dit gemakkelijk te 'cachen'.

Het testen of een string leeg is kan in plaats van `if (string != '')` naar `if (string)` omdat lege strings “falsy” zijn.

[Roel Van Gils](http://catchup.be/) neemt het stokje over en gaat praten over keyboard accessibility. WCAG2 specificeert dat alle functionaliteit toegankelijk moet zijn door middel van het toetsenbord.

Stay focussed: verwijder niet de outline on focus zonder een `:focus` style te definieeren. Ook `<a href=".." onfocus="this.blur()">` om de outline in IE te verwijderen, zou men nooit meer moeten gebruiken.

`Tabindex` kan handig zijn om links niet meer clickable te maken, door de waarde `-1` toe te kennen. Met waarde `0` kan een niet-link ineens getabt worden. Echter, je kunt dan nog niet activeren. Hiervoor dien je nog een keycode 13 te controleren, en alsnog de clickfunctie aan te roepen.

Met ARIA roles en states kun je extra informatie doorgeven aan screenreaders. Indien je ARIA gebruikt ga je over op applicatiemodus, in plaats van browsemodus.

`<select multiple>` is niet handig, bijna niemand weet hoe je meerdere waarden kunt selecteren. Handiger is om een lijstje `<input type="checkbox">`s.

Enkele don't: `accesskey`s, die gaan voor native keys in verschillende browsers. Jumpenu's met een onchange op een selectmenu en autotab scripts zijn ook niet handig, ze voeren onverwachts code uit die niet handig is voor toetsrnbordgebruikers.

# Overige materialen en verslagen

* [Slides van de presentatie van Roel](http://www.slideshare.net/roelvangils/keyboard-accessibility-youve-been-doing-it-wrong-8410245)

(Hidden)

(Hidden)

(Hidden)

(Hidden)

(Hidden)

(Hidden)

(Hidden)

(Hidden)

(Hidden)

(Hidden)

# Aanwezigen

* Ad Eggermont
* Steve Franciscus Julia De Jonghe
* Arjan Eising
* Nick Looijmans
* Steven Benisek
* Thomas Byttebier
* Gregory Van Looy
* Lennart Schoors
* Klaas Cuvelier
* Jelle Versele
* Jan Moesen
* Shahways Romani
* Anthony Ringoet
* Senne Van Den Bogaert
* Filip Breckx
* Rik Rijnders
* Filip Vanderstappen
* Danny Calders
* Gunter Van Steen
* Wesley Verbruggen
* Sebastien Toussaint
* Kristof Houben
* Toon Struyf
* Yoni De Beule
* Keegan Street
* Thomas Deceuninck
* Johan Ronsse
* Sander Aarts
* Paul Olyslager
* Tim Schillemans
* Mark Tempelaere
* Mathias Baert
* Joris Hens

(Hidden)