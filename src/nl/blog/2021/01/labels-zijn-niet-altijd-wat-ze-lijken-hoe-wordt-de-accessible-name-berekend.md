---
title: "Labels zijn niet altijd wat ze lijken: hoe wordt de Accessible Name berekend?"
date: 2021-01-01
author: Sophie Ragas
categories: 
  - Adventskalender
---
Sinds november ben ik aan de slag als Web Accessibility Consultant bij [Eleven Ways](https://www.elevenways.be). Het toegankelijk maken van websites (zodat iedereen ze kan gebruiken) is altijd al een onderwerp geweest waar ik me graag voor wilde inzetten.

Al tijdens mijn eerste werkweek leerde ik iets wat me verraste. Ik herinner me dat ik luidop “Woah!” zei tegen mijn computerscherm. Dat “iets” is de zogeheten _Accessible Name_. Omdat er niet veel Nederlandstalige artikelen over te vinden zijn, wijd ik er graag een stukje aan.

# Wat is de Accessible Name?

Er zijn een aantal HTML-elementen die interactief zijn. Het gaat dan om elementen als links, knoppen, invoervelden, selectievakjes en keuzelijsten.

In de richtlijnen voor toegankelijkheid zegt het W3C in [Succescriterium 2.5.3](https://www.w3.org/Translations/WCAG21-nl/#label-in-naam) over interactieve elementen het volgende:

> Bij componenten van de gebruikersinterface met labels die tekst of afbeeldingen van tekst bevatten, bevat de naam de tekst die visueel wordt weergegeven.

Dat is een mond vol. Het komt erop neer dat alle interactieve componenten zowel een _label_ als een _naam_ moeten krijgen.

Maar zijn labels en namen niet hetzelfde? Nee. Het _label_ is wat gebruikers typisch op het scherm zien. De _naam_ is wat hulpsoftware ziet. Hulpsoftware haalt de _naam_ uit de zogeheten [Accessibility Tree](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree), die op haart beurt een vereenvoudiging is van het Document Object Model.

Anders gezegd: een _label_ wordt _visueel_ weergegeven, maar een naam wordt enkel opgepikt door hulptechnologieën als schermlezers en spraaksoftware. De _naam_ is dus extra belangrijk om interactieve elementen toegankelijk te maken. In WCAG-jargon noemen we deze naam daarom (toepasselijk, en om verwarring te voorkomen) graag de [Accessible Name](https://www.w3.org/TR/accname-1.1/).

(Noot: dit succescriterium hangt nauwe samen met [Succescriterium 4.1.2](https://www.w3.org/Translations/WCAG21-nl/#naam-rol-waarde) dat voorschrift dat elementen een correcte naam (_name_), rol (_role_) en waarde (_value_) moeten hebben.)

# Hoe wordt de Accessible Name bepaald?

De Accessible Name wordt volgens onderstaande rangorde bepaald (van belangrijkst naar minst belangrijkst):

1. Het `aria-labelledby` attribuut (waarde van attribuut is de id-waarde van een element dat elders staat, vaak een `<p>`. Werking vergelijkbaar met anchor-links)
2. Het `aria-label` attribuut (waarde van attribuut is gewoon tekst)
3. Het `<label>` element (bij formulieronderdelen)
4. Het `value` attribuut (bij formulieronderdelen)
5. Het `alt` attribuut (enkel bij afbeeldingen)
6. Inhoud tussen begin- en eindtag (bij links en knoppen)
7. Het `title` attribuut

Er wordt dus in eerste instantie gekeken of een `aria`-attribuut aanwezig is.

En nu komen we bij de crux van het hele verhaal.

* Als een element *nog geen naam* had dat uit de punten 3 t/m 7 gehaald kan worden, wordt die *toegevoegd* door de waarde van het `aria-labelledby` of het `aria-label` attribuut
* Als een element *al een naam* had dat uit de punten 3 t/m 7 gehaald kan worden, wordt die *vervangen* door de waarde van het `aria-labelledby` of het `aria-label` attribuut

Een `aria-label` of `aria-labelledby` krijgt dus *altijd* voorrang.

(Merk op dat deze berekening gebeurt op basis van de [Accessible Name and Description Computation 1.1](https://www.w3.org/TR/accname-1.1/)-specificatie van het W3C. De meeste Accessibility API’s in browsers en besturingssystemen houden zich hier netjes aan.)

# Voorbeelden

Laten we even naar een eenvoudig voorbeeld kijken:

```
<a href="/overons" title="Ons bedrijf">Ons familiebedrijf</a>
```

Visueel zal _Ons familiebedrijf_ getoond worden. Het `title` attribuut wordt genegeerd door hulpsoftware omdat het de laagste prioriteit heeft. De inhoud tussen de begin- en eindtag krijgt voorrang.

(Merk op dat in sommige situaties het `title` attribuut toch wordt opgepikt door hulpsoftware, maar dan uitsluitend als “tooltip”. Omdat je er nooit zeker van kan zijn dat de informatie wordt voorgelezen, is het dus geen goed idee om essentiële informatie te verstoppen in een `title` attribuut.)

Voorbeeld twee:

```
<a href="lego.html">
  <img src="lego.png" alt="Lego Modular Assembly Square">
  150 euro
</a>
```

Deze link zal door hulpsoftware worden opgelezen als: _Lego Modular Assembly Square 150 euro_. De alt-tekst *en* de tekst worden hier bij elkaar opgeteld.

Dit is bijvoorbeeld ook de reden waarom een populair UI-patroon als _cards_ vaak toegankelijkheidsproblemen vertonen. Lees de uitstekende [blog van Adrian Roselli](https://adrianroselli.com/2020/02/block-links-cards-clickable-regions-etc.html) of de [blog van Nomensa](https://www.nomensa.com/blog/2020/how-build-accessible-cards–block-links) daar maar eens over.

Een laatste voorbeeld:

```
<a href="lego.html" title="Mijn Lego pagina" aria-label="Mijn hele dure Lego-winkel">
  <img src="lego.png" alt="Lego Modular Assembly Square">
  150 euro
</a>
```

Vind je het addertje onder het gras? Dit is wat er gebeurt:

* Het `title` attribuut wordt genegeerd, omdat er tekst staat tussen de begin- en eindtag.
* De tekst ‘150 euro’ en de alt-tekst van het plaatje worden bij elkaar opgeteld omdat deze tussen de begin- en de eindtag staan.
* Maar — en dit is belangrijk — beide waarden worden vervolgens _overschreven_ door het `aria-label` attribuut dat op het `<a>` element is geplaatst.

De link zal uiteindelijk klinken als _Mijn hele dure Legowinkel_. De naam en de prijs van het product worden dus *niet* langer opgepikt, en dat is natuurlijk niet de bedoeling. Wees dus extra voorzichtig met het gebruik van ARIA-labels.

# Hoe kun je de Accessible Name controleren?

In de Developer Tools van Chrome kun je de Accessibility Tree inspecteren. Zo krijg je een idee van hoe de naam van een specifiek element berekend wordt.

![De Accessibility Tree in Chrome dat de naam en rol van een element laat zien](/_img/adventskalender/2020/accessiblename-chrome.jpeg)

(Dat kan overigens ook in andere browsers.)

Natuurlijk kan je ook zelf de proef op de som nemen en je pagina testen met een echte screenreader als Jaws, NVDA of VoiceOver. Zo kan je zelf horen hoe je knoppen, links en andere interactieve elementen worden opgelezen.

# Oefening:

Wat wordt de Accessible Name van deze button? (dank aan Erik Kroes voor deze leuke instinker!) Laat een reactie achter met je antwoord!

```
<button type="button" aria-labelledby="button" aria-label="click here" title="click">
  <img alt="click me">
</button>
```

# Bronnen en verder lezen

* [W3C - Accessible Name and Description Computation 1.1](https://www.w3.org/TR/accname-1.1/)
* [WeAIM - Decoding Label and Name for Accessibility](https://webaim.org/articles/label-name/)
* [The Paciello Group - What is an accessible name?](https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/)
* [Simply Acessible - Demystifying the accessible name?](https://simplyaccessible.com/article/accessible-name/)
* [Hidde de Vries - Naming things to improve accessibility](https://hiddedevries.nl/en/blog/2019-04-18-naming-things-to-improve-accessibility)
