---
title: 'Patronen voor de groei'
date: 2011-12-03
author: Egor Kloos
categories:
    - Adventskalender
---

Zelf, met de hand, een website maken is tegenwoordig zo lastig nog niet. Echter, een grote maatwerk website is heel andere koek. In het begin lijkt het wel simpel maar iedere beslissing heeft invloed op je volgende beslissing en één verkeerde beslissing kan heel snel tot frustratie leiden. Mocht je toevallig het (on)geluk hebben om meerdere grote websites te maken en te onderhouden, dan ben je, als je niet uitkijkt, al heel snel de sigaar.

![](/_img/2011/12/patterns-box.png)

Waarom? Niets blijft hetzelfde en het maken van een website is een oefening in constante verandering.

HTML wil je zo hebben dat je het achteraf niet hoeft aan te passen voor CSS of JavaScript. Dergelijke aanpassingen zijn duur, omdat je met nog meer onderhoud wordt opgezadeld, wat uiteindelijk ook de duurzaamheid van je product aantast. Erger nog, het is meestal onnodig en makkelijker te voorkomen dan je denkt.

De truc is om binnen de drie front-end gebieden (HTML, CSS en JavaScript) generiek te zijn waar deze gebieden elkaar raken en specifiek te zijn binnen een enkel gebied.

## Structuurpatroon

_Generiek_: HTML & JavaScript:

```
<script src="init.js"></script>
```

_Specifiek_: JavaScript:

```
require(['jquery','jquery-ui','validation'],function(){ … });
```

_Generiek_: HTML & CSS:

```
<link href="main.css" />
```

_Specifiek_: CSS:

```
@import url(../normalize.css);
@import url(../forms.css);
```

_Preprocessors zijn uitermate geschikt voor dit soort concatinatie_

Op deze manier is de kans vele malen groter dat de HTML bij aanpassingen aan de website buiten schot blijft.

[OO CSS](http://oocss.org/ 'Object Orientated CSS') en de recentere [SMACSS](http://smacss.com/book/ 'Scalable and Modular Architecture for CSS') zijn ontstaan, omdat grote schaalbare websites een robuuste front-end structuur nodig hebben. Er is simpelweg geen ruimte om even wat te proberen en weer bij te sturen.

Doordat front-end kennis over de jaren iets beter is geworden hebben we de wat starre OO CSS minder hard nodig. De komst van HTML5, CSS3, preprocessors en dependency loaders maken het namelijk eenvoudiger om een duurzaam semantische website op te leveren. SMACSS, bijvoorbeeld, is door de huidige ontwikkelingen eenvoudiger aan te leren, wat de duurzaamheid weer ten goede komt.

## Nulpatroon

Resets lijken best handig. Websites in meerdere browservarianten (cross-browser) gelijkend te krijgen is precies wat we allemaal nodig hebben, zou je denken. Om resets echt handig te maken moet ze je van patronen voorzien om ze niet achteraf weer recht te trekken. Aan elementen die op nul zijn gezet heb je niets. Een paragraaf heeft normaliter een witregel aan de onderkant. Een tabelkop is meestal vet 'gedrukt'. Laat ik het zo zeggen: een site moet met een 'reset' vergelijkbaar weergeven en vooral cross-browser gelijkend weergeven alsof men geen CSS had toegepast.

Basistoevoegingen die projectspecifiek zijn, zijn uiteraard welkom. Mogelijk met een specifieke `font-family` en/of `font-size` voor de headings, `<h1>`, `<h2>`, enz.

Browsers die het _heel_ anders doen bestaan niet meer (zwaait naar IE6), wat de nul-reset onzinnig gemaakt heeft, maar CSS zoals [normalise.css](https://github.com/necolas/normalize.css/)\* zal als een startpunt waarschijnlijk wel nuttig blijven.

_\* normalize.css bevat nog wel browserspecifieke hacks en hierdoor kan ik het niet zonder reserveringen aanbevelen. Wel kan ik het aanraden om door te nemen; er valt veel van te leren en te lenen._

## Content patronen

ID-attributen zijn lastig, omdat ze vaak de basis vormen voor koppeling met de back-end. Je bespaart jezelf een hoop ellende door ze uit je CSS te houden. Beperk ze desnoods tot een handjevol, want ze kunnen ook handig zijn voor performance. Class-attributen zijn ook lastig, maar daar hoeven we ons minder zorgen over te maken. Een deel van de semantische attributen zijn door HTML5-tags opgevangen. Dat scheelt een heleboel onnodige attributen!

-   Niet altijd mogelijk, maar probeer het gebruik van ID’s voor CSS te vermijden
-   Overdadig gebruik van het class-attribuut is net zo slecht als overal `<div>`'s plaatsen
-   Schrijf functionele ID's en classnames zoals; 'progress', 'sign-in' of 'contact'
-   Niet functioneel? Maak deze attributen generiek; 'module','warning' of 'information'
-   Schrijf attributen in de taal van de opmaakcode. HTML is Amerikaans Engels (en-US)
-   Uitzondering is uiteraard een ID voor een 'hash tag' (`<a href=”#informatie”>Lees meer</a>`, `<section id="informatie">Lorem ipsum…</section>`)

Contentspecifieke namen zoals 'dataGridProgress' zijn eigelijk uit den boze en geven meestal dezelfde problemen als attributen die de presentatie spiegelen, zoals:

```
.blue { color: blue; }
```

Webformulieren kunnen eenvoudig generiek worden opgemaakt om vervolgens met een productpatroon te worden aangevuld. Een eenvoudig formulier voor een aanmeldmodule:

```
<form id="sendToBackEnd" class="module log-in">
  <fieldset>
    <div>
      <label for="">E-mail</label>
      <input type="email" value="" placeholder="Enter you e-mail address" />
    </div>
    <div>
      <label for="">Password</label>
      <input type="password" placeholder="password"  />
    </div>
  </fieldset>
  <div class="buttons">
    <button type="submit">log in</button>
  </div>
</form>
```

Maar waarom die extra `<div>`'s? Semantisch gezien zijn labels met invoervelden nu gescheiden maar belangrijker is dat we dit HTML-patroon op verschillende manieren kunnen vormgeven dankzij de extra `<div>` om de `<label>` en `<input>`. Met grote websites is het altijd moeilijker om de HTML aan te passen dan de CSS. HTML dat continue groeit zorgt er vaak ook voor dat de CSS meegroeit. Idealiter beperk je de impact van dergelijke groei, maar de realiteit denkt daar vaak anders over. Zelfs de grootste controlfreak kan daar weinig aan doen. Jens Meiert mag het nog een keer uitleggen: [Get the HTML right](http://meiert.com/en/blog/20080926/get-the-html-right/).

Zoals je het wellicht is opgevallen ga ik hier niet in op de discussie over [semantiek](http://www.w3.org/2001/sw/); daar is door de jaren heen alles over gezegd en er sindsdien weinig veranderd.

## DRY

Patronen worden pas nuttig als deze zijn vastgelegd. Productiecode van een website is op zichzelf geen documentatie en is als zodanig ongeschikt. Achteraf discussies voeren over de semantiek in die code heeft op zichzelf weinig waarde. Bepaal vooraf de basispatronen die je voor een website nodig hebt zodat je niet iedere keer het wiel moet uitvinden. Discussies steeds opnieuw moeten voeren is zonde van je tijd. _Tip_: [Pattern Primer](https://github.com/adactio/Pattern-Primer) van Jeremy Keith.

## Maatwerkpatroon

Met de basis- en standaardpatronen onder je arm kun je nu los met maatwerk CSS. Dit is meestal waar het meteen al scheef gaat. Omdat 'nieuw' vaak gelijk is aan 'we proberen wel wat' en we vervuilen hiermee de HTML en CSS door het te laten staan. Wat niet werkt meteen verwijderen! Dit is waar SMACSS je als gids kan helpen. Beperk je HTML, beperk je classnamen en ID-attributen en beperk je selectorlengte in CSS! [Specificity kills](http://www.stuffandnonsense.co.uk/archives/css_specificity_wars.html)! Om dit te realiseren zul je regelmatig moeten beoordelen of je een refactorronde moet inlassen.

-   Een basis die geschikt is om te bootstrappen; [FE-Patterns](https://github.com/dutchcelt/FE-Patterns), [HTML5 Boilerplate](http://html5boilerplate.com/) of (ik ben er geen fan van: 960 grid)
-   Gebruik een modulaire aanpak; SMACSS of OO CSS.
-   Overweeg een pre-parser; [LESS](http://lesscss.org/), [Sass](http://sass-lang.com/) of [Stylus](http://learnboost.github.com/stylus/try.html) (met mixins en variabelen mag je weer wat specifieker zijn omdat die binnen de CSS zuil blijven)

Dit is uiteraard maar een begin en patronen zijn een goed begin voor ieder project. Daar worden ze namelijk groot en sterk van.

Dus, waar wacht je nog op!? Start je volgende project met een van de bovenstaande patronen of bouw ze zelf!

## Over Egor Kloos

<img src="/_img/2011/12/egor-kloos.jpg" alt="Foto van egor kloos uit 2011" class="floating-portrait" /> 
Geboren in Dublin en woont al decennia in Rotterdam. [Dutchcelt](http://dutchcelt.nl/ "Weblog van Egor Kloos") creëert sinds 1997 met bloed zweet en tranen moderne websites. Vanaf het begin is 'Web Standards' een passie geweest. De kracht van CSS werd hem heel snel duidelijk en resulteerde in zijn 2003 [CSS Zen Garden inzending](http://www.csszengarden.com/062 "Egor's dubbelzinnige 'gemination'"). Twee site designs (eentje voor IE6) via en enkele CSS en javascript.
Hiermee legde hij de basis voor het maken (en herbouwen) van grote websites in de Enterprise wereld. Daar begeleidt hij zijn klant in alles wat web design en moderne front-end te maken heeft. Nu hij voor [Lunatech Research](http://www.lunatech-research.com/) werkt, heeft hij een deel van zijn [kennis in front-end online](http://www1.lunatech.com/~egor/fep/) kunnen zetten.

Donatie: Electronic Frontier Foundation
Het internet verandert de wereld en als individu is het helaas opboksen tegen te de belangen van overheden en grote bedrijven. Wat we denken, wat we doen en wie dat mag weten, wordt niet altijd in het belang van het individu bepaald. Muziek op je muziekspeler, video op tablet computer en bloggen vanaf je laptop is al gebonden aan regels. Waar gaat dat heen?
De [Electronic Frontier Foundation](https://www.eff.org/) vecht voor onze privacy, vecht voor innovatie en dat we onszelf kunnen uiten. Als front-enders werken we op en met het internet en de EFF staat in onze hoek.
