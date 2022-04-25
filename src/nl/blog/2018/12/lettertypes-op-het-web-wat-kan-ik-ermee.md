---
title: "Lettertypes op het web, wat kan ik ermee?"
date: 2018-12-18
author: Amy Davis
categories: 
  - Adventskalender
---
In het begin van het web was dat niet zo veel: de browser deed alles voor je. Het enige waar je controle over had was je HTML. Met semantische [HTML-tags](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) gaf je betekenis aan stukjes van je pagina, zoals `<h1>` tot `<h6>` voor kopjes. Je browser besloot dan hoe dat er uit zag. Zo werden kopjes in hoofdletters weergegeven op monochrome tekst-terminals, of groter en dikgedrukt in grafische browsers.

![Screenshot van Mosaic 1.0 met het Choose Font menu opengeklapt: Gebruikers konden voor elk soort tag instellen hoe het er uit zag.](https://fronteers.nl/_img/adventskalender/lettertypes/blog-1.png)

In de loop van de jaren werd gelukkig steeds meer mogelijk. Zo kregen we met [HTML 2.0](https://www.w3.org/MarkUp/html-spec/html-spec_5.html) niet alleen meer semantische tags zoals `<em>` en `<strong>`, maar ook de typografische tags waarmee we tekst expliciet vet (`<b>`), cursief (`<i>`) of monospaced (`<tt>`) konden maken.

Met [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/#body) kregen we controle over de tekstkleur op een pagina, als mede meer tags zoals onderstrepen (`<u>`), super- en subscript tekst (`<sup>`, `<sub>`) en meer. Ook kregen we de inmiddels befaamde `<font>` en `<basefont>` tags. Officieel kon je hier tekstkleur en lettergrootte mee kiezen, maar als gevolgd van de [browser oorlog](https://thehistoryoftheweb.com/browser-wars-part-2/) die op dat moment gestreden werd, werd ook het `face` attribuut al snel ondersteund. Hiermee konden we eindelijk bepalen welk lettertype onze site gebruikte.

Niet dat er veel keuze was, je was beperkt tot het gebruiken van een lettertype dat gebruikers op hun computer hadden staan. In praktijk betekende dit je te beperken tot één van de elf [TrueType core fonts for the Web](https://web.archive.org/web/19990117012320/http://www.microsoft.com:80/typography/faq/faq8.htm) van Microsoft.

![Afbeelding van de elf core fonts for the web: Andale Mono, Arial, Arial Black, Comic Sans MS, Courier New, Georgia, Impact, Times New Roman, Trebuchet MS, Verdana en Webdings](https://fronteers.nl/_img/adventskalender/lettertypes/blog-7.png)

# CSS

De semantische visie kwam terug met HTML 4.0 tegen het einde van 1997. `<font>` was weer weg, samen met `<fontbase>`, `<s>`, `<strike>` en `<u>`, en CSS werd echt de manier om stijling te doen. Bijvoorbeeld:

```
body {
    font-family: Andale Mono, Courier New, Courier, monospace;
}
```

De pagina krijgt als standaard lettertype Andale Mono, als die niet beschikbaar is Courier New of anders Courier. Als geen van de gekozen lettertypes beschikbaar valt de browser terug op het ingebouwde `monospace`.

# Webfonts

Naast ingebouwde lettertypes hebben we tegenwoordig de mogelijkheid om webfonts te gebruiken. Er zijn verschillende bestandsformaten voor (web)fonts, en het is makkelijk daar in verdwaald te raken. Afhankelijk van welke browsers je nog wil ondersteunen heb je genoeg aan WOFF2 (Web Open Font Format 2.0) of anders WOFF2 met een fallback naar WOFF. Lettertype in een ander formaat? Er zijn tegenwoordig genoeg tools online die een lettertype zo voor je kunnen converteren.

Een webfont maak je beschikbaar door een `@font-face` blok op te nemen in je CSS:

```
@font-face {
  font-family: 'mijn lettertype';
  src:  url('mijn.woff2') format('woff2'),
        url('mijn.woff') format('woff');
}
```

Nu kan je ‘mijn lettertype’ gebruiken alsof het elk ander lettertype is.

Met webfonts gaat een hele wereld open qua mogelijkheden, maar hou er rekening mee dat er gebruikers zijn die je mooie font niet zullen zien: ze hebben misschien een trage internet verbinding of blokkeren webfonts wegens privacy redenen. Dus het blijft handig iets van een fallback te blijven gebruiken.

Als een pagina met webfonts laadt, gaat de tekst op de pagina door twee fases heen: eerst is tekst onzichtbaar (de blokkeerperiode) en als het te lang duurt voor een lettertype gedownload is wordt daarna een fallback gebruikt (de wisselperiode).

Door `font-display` toe te voegen aan je @font-face kan je browsers een hint geven over wat ze moeten doen als een lettertype nog aan het downloaden is:

* `block` Een korte blokkeerperiode en een oneindige wisselperiode, voor als je koste wat kost je webfont wil gebruiken.
* `swap` Een extreem korte blokkeerperiode en een oneindige wisselperiode. Voor als het het belangrijkste is dat tekst snel leesbaar is, maar je eigenlijk niet zonder je webfont wil.
* `fallback` Een extreem korte blokkeerperiode en een korte wisselperiode. Voor als je graag je webfont wil gebruiken, maar als een bezoeker al tekst aan het lezen is, wil je hem niet afleiden door van lettertype te wisselen.
* `optional` Een extreem korte blokkeerperiode en geen wisselperiode. Voor als een webfont een leuk extraatje is.

# Bold, bolder, boldst

In tegenstelling tot wat je in bijv. Word ziet, is op het web dikgedrukte tekst geen kwestie van aan of uit, maar een schaal van 9 verschillende diktes, genaamd 100 tot 900. Op deze schaal is normale, niet vette tekst 400, en vette tekst 700. Je kan `normal` gebruiken ipv 400 en `bold` ipv 700.

```
p.dik-gedrukt {
    font-weight: 700;
}
```

Als je een webfont gebruikt, heb je voor elke `font-weight` een apart bestand nodig:

```
@font-face {
  font-family: 'mijn lettertype';
  font-weight: 400; /* standaard waarde, mag je ook weglaten. */
  src:  url('mijn-normaal.woff2') format('woff2');
}

@font-face {
  font-family: 'mijn lettertype';
  font-weight: 700;
  src:  url('mijn-vet.woff2') format('woff2');
}
```

![Afbeelding van de negen diktes van het lettertype Exo 2](https://fronteers.nl/_img/adventskalender/lettertypes/blog-6.png)

# Stretch

Lettertypes hebben soms meerdere breedtes, deze kan je kiezen met `font-stretch`. Er zijn 9 waardes: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal`, `semi-expanded`, `expanded`, `extra-expanded` en `ultra-expanded`. Sinds kort mag je ook percentages gebruiken zodat je een oneindig aantal breedtes kan hebben, maar dat ondersteunen veel browsers nog niet. `normal` komt dan overeen met 100%, `ultra-condensed` met 25% en `ultra-expanded` met `200%`.

![Afbeelding van Encode Sans met 5 verschillende breedtes.](https://fronteers.nl/_img/adventskalender/lettertypes/blog-8.png)

# Cursief vs obliek

Veel lettertypes hebben een cursieve (italic in het Engels) variant. Deze kan je gebruiken met `font-style: italic;`. Tekst simpelweg schuin zetten kan met `font-style: oblique;`, sommige variabele lettertypes hebben tegenwoordig ook ondersteuning voor tekst onder een specifieke hoek schuin te zetten: `font-style: oblique 14deg;`. Meer over variabele lettertypes later.

![Afbeelding van het lettertype Jost* in drie varianten: romein, obliek en cursief.](https://fronteers.nl/_img/adventskalender/lettertypes/blog-5.png)

Als het lettertype dat je gebruikt geen italic, bold of small-caps ondersteunt, kan een browser die voor je nadoen. Meestal niet zo mooi als een ‘echte’ bold, italic of small-caps, maar het kan goed genoeg zijn. Als je niet wil dat je browser die eigenschappen faket, kan je het uit zetten met `font-synthesis: none;`. Browser ondersteuning hiervoor is helaas [belabberd](https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis#Browser_Compatibility).

# Overhang

Overhang (kerning in het Engels) tussen verschillende lettercombinaties kan bepaald worden door een lettertype. Dit zorgt voor fijner lezende tekst. Normaalgesproken staat dit aan, maar dit kan uit gezet worden met `font-kerning: none;`.

![Afbeelding van Abril Fatface met overhang aan en uit.](https://fronteers.nl/_img/adventskalender/lettertypes/blog-4.png)

# Ligaturen

Met ligaturen worden een set aan gliefen die naast elkaar staan vervangen door een enkele. Een veel voorkomend voorbeeld is de lettercombinatie `f` `i`. Maar hou er rekening mee dat ligaturen taalafhankelijk kunnen zijn. Het turks bijvoorbeeld heeft zowel de letter `i` als `ı` (een i zonder punt). Met een normale fi ligatuur valt dat verschil weg, een goed lettertype houdt hier rekening mee, zorg dus altijd voor de juiste `lang` attributen in je pagina.

![Afbeelding van fi en fı zonder ligaturen, en met ligaturen in het Nederlands en Turks.](https://fronteers.nl/_img/adventskalender/lettertypes/blog-2.png)

Ligaturen worden in verschillende categorieën onderverdeeld die individueel aan en uitgezet kunnen worden. De fi ligatuur valt onder de alledaagse ligaturen (`common-ligatures`).

Verder zijn er de:

* Discrete ligaturen (`discretionary-ligatures`); deze zijn puur voor de mooi, leuk voor kopjes of logo’s maar vaak niet fijn in lopende tekst.
* Historische ligaturen (`historical-ligatures`); ligaturen die vroeger gebruikt werden maar nu verwarrend zouden zijn.
* Contextuele ligaturen (`contextual`); vooral gebruikt door handschriftlettertypes, om letters mooi aan elkaar te laten sluiten.

Een lettertype bepaalt zelf welke standaard aan of uit staan en met `font-variant-ligatures` kan je dit aanpassen:

```
h1 {
    font-variant-ligatures: common-ligatures discretionary-ligatures;
}
```

# Cijfers

Sommige lettertypes hebben meerdere sets getallen waar je uit kan kiezen:

Met `font-variant-numeric: lining-nums;` of `font-variant-numeric: oldstyle-nums;` kan je kiezen tussen moderne getallen die op de basislijn staan en oude getallen die er onder hangen.

Met `font-variant-numeric: proportional-nums;` of `font-variant-numeric: tabular-nums` kan je kiezen tussen cijfers met variabele of vaste breedte, wat soms handig kan zijn voor tabellen, rekening nummers etc.

![Afbeelding van proportional-nums en tabular-nums in Times New Roman, lining-nums en oldstyle-nums in Garamond](https://fronteers.nl/_img/adventskalender/lettertypes/blog-3.png)

Andere opties zijn: `slashed-zero` voor een streep door (of stip in) het cijfer 0, om meer onderscheid te maken met de hoofdletter O. Met `diagonal-fractions` en `stacked-fractions` kunnen breuken netter weergegeven worden en met `ordinal` blijven cijfers normaal maar worden alle letters superscript, voor het gebruik als rangtelwoorden (1e).

# Stijlvariaties

Lettertypes kunnen variaties van gliefen bevatten. Denk aan extra sierlijke varianten van hoofdletters of een ronde g inplaats van een bolletjes-g.

![Afbeelding van alternatieve gliefen in Plex, het nieuwe lettertype van IBM.](https://fronteers.nl/_img/adventskalender/lettertypes/blog-9.png)

Variaties vallen in de volgende categorieën:

* Historische gliefen (`hist`). Gliefen die nu niet meer gebruikt worden, denk aan de [lange S](https://nl.wikipedia.org/wiki/Lange_s).
* Sets van alternatieve gliefen (`ss01` .. `ss20`). Denk aan de verschillende vormen van letters zoals de a en g.
* Krullen en tierlantijntjes (`swsh`, `cswh`). Denk aan extra krullen aan hoofdletters.
* Ornamenten (`ornm`). Denk aan bloempjes, [blaadjes](https://en.wikipedia.org/wiki/Fleuron_(typography)) en andere losstaande symbolen.
* Annotaties (`nalt`). Denk aan omcirkelde of negatieve tekens.

Ondersteuning door browsers van `font-variant-alternates` is nog [vrij matig](https://caniuse.com/#feat=font-variant-alternates), dus voorlopig raad ik aan om `font-feature-settings` te gebruiken. De syntax hier voor is niet echt vriendelijk:

```
body {
    font-feature-settings: "hist" on, "ss01" on, "swsh" 2;
}
```

# Variabele lettertypes

Als je alle 9 diktes gebruikt op een site, heb je 9 verschillende bestanden nodig, die allemaal door bezoekers gedownload moeten worden.

Daar komt gelukkig langzamerhand verandering in: Variabele lettertypes zijn een relatief nieuwe ontwikkeling waarbij je maar één bestand hoeft te downloaden. Makers van variabele lettertypes bouwen als het ware knoppen in waar je met CSS aan kan draaien. Deze knoppen kunnen de meest uiteenlopende dingen aanpassen aan het uiterlijk van het lettertype. Met variabele lettertypes zijn zelfs meer dan de 9 diktes beschikbaar, en kan je alles tussen `font-weight: 1;` en `font-weight: 1000` gebruiken. Browser ondersteuning [wordt steeds beter](https://caniuse.com/#feat=variable-fonts).

(TODO: 480x270
/_downloads/2018/adventskalender/2019-vf.mp4)

Je kan variabele lettertypen gebruiken met fallback naar niet-variabele lettertypen:

```
@font-face {
    font-family: 'mijn lettertype';
    src: url('mijn-lettertype-vf.woff') format('woff-variations'),
         url('mijn-letertype.woff') format('woff');
}

@font-face {
    font-family: 'mijn lettertype';
    font-weight: bold;
    src: url('mijn-lettertype-vf.woff') format('woff-variations'),
         url('mijn-letertype-bold.woff') format('woff');
    }
}

/****/

strong {
    font-weight: 650; /* wordt afgerond naar 700 door browsers die variabele lettertypes nog niet snappen. */
}
```

Variabele lettertypes kunnen potentieel nog veel meer dan het standaard css properties zoals `font-weight`, `font-stretch` en `font-style`. Deze extra eigenschappen kan je een waarde geven met `font-variation-settings: {vierlettercode} {waarde}`. Hiervoor moet je de vierlettercode van de eigenschappen die je aan wil passen weten, zowel als de minimale en maximale waarde voor die eigenschappen.

Het lettertype 'Jam' heeft bijvoorbeeld 4 eigenschappen: "Bang!", "Crumble!", "Splatter!" en "Punch!" die elk een waarde tussen de 1 en 5 moeten hebben:

```
p {
    font-family: "Jam", monospace;
    font-variation-settings: "wght" 3.8, "crum" 3, "spla" 5, "punc" 0;
}
```

# Toekomst

De volgende ontwikkeling die er aan zit te komen zijn kleurenlettertypes: meerdere kleuren in een lettertype, die met CSS aan te passen zijn. Zo zouden 💛 en 💙 de juiste fronteers-kleuren gegeven kunnen worden.

# Wat kan mijn lettertype?

Heel veel van de genoemde functionaliteit hangt af van de lettertypes zelf, dus hoe kom je er achter wat je lettertype kan? Aanbieders van lettertypes geven gelukkig steeds beter in vertellen wat lettertype kunnen, kijk onder het kopje “Features” of “OpenType features”. Als ze een lijst van gliefen hebben kan je daar ook al vaak het een en ander aan zien: zijn er ligaturen? Verschillende cijfer-vormen?

Je kan fonts uploaden naar een site zoals [wakamaifondue](https://wakamaifondue.com/) (spreek uit “What can my font do?”).

Probeer het uit! Met een snel inelkaargeflanst pagina’tje kan je leuk experimenteren.

```
<!DOCTYPE html>
<html lang="{taal}">
  <head>
    <style>
    @font-face {
        font-family: '{naam}';
        src: url('{font.woff2}'), format('woff2');
    }
    body {
        font-family: '{naam}';
        font-variant-ligatures: common-ligatures discretionary-ligatures;
    }
    </style>
  </head>
  <body>
    <p>Welke ligaturen zou dit lettertype hebben? Fi FL Th Qu fi fl ffi ffl st ct th tt qu</p>
  </body>
</html>
```

(TODO: Over Amy Davis
/adventskalender/amy.jpg
Ik ben opgegroeid met computers, en altijd gefascineerd geweest door het web, HTML, CSS en JS. In het dagelijkse leven ben ik Senior Front-end developer bij [B-ware Business Software](https://www.b-ware.com). Sinds 2016 ben ik lid van Fronteers en de meeste dagen te vinden op de [Fronteers Slack](https://fronteers-slack.herokuapp.com/). Mijn favoriete kleur is #6c48a4.
Donatie: Wikimedia Foundation
Ik vind het prachtig om een artikel te schrijven over dingen waar ik verstand van heb en zo anderen verder te helpen. Dé organisatie die dit faciliteert op wereldwijde schaal is de [Wikimedia Foundation](https://wikimediafoundation.org/), bekend van Wikipedia en [vele andere crowd-sourced projecten](https://wikimediafoundation.org/our-work/wikimedia-projects/).)
