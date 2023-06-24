---
title: "Front-end meta languages"
date: 2011-12-08
author: Roy Tomeij
categories: 
  - Adventskalender
---
Front-end meta languages. Een hippe, zelfverzonnen naam voor talen die compileren naar HTML, CSS en JavaScript, maar dat zelf niet zijn. Het gebruik scheelt op z'n minst veel typewerk en zorgt voor overzichtelijkere code. Dankzij extensies als Compass is er nog meer tijdsbesparing en gemak te realiseren, bijvoorbeeld voor het beheer van je sprites.

# Waar hebben we het over?

Voor HTML en JavaScript zijn er een paar bekende spelers, zoals [Haml](http://haml-lang.com/) en [CoffeeScript](http://jashkenas.github.com/coffee-script/). Voor CSS hebben we talen als [Sass](http://sass-lang.com/) en [Less](http://lesscss.org/). Haml, Sass en Less zullen de revue passeren, met een uitstapje naar [Compass](http://compass-style.org/). In dit artikel komen syntaxis en voorbeelden aan bod, zodat je meteen aan de slag kunt met experimenteren. CoffeeScript blijft buiten beschouwing, omdat de leercurve daarvan hoger is en het gebruik ervan voor de meeste front-enders niet direct winst op zal leveren.

NB: Als je [Node.js](http://nodejs.org/) gebruikt, zou je eens kunnen kijken naar [Jade](http://jade-lang.com/) en [Stylus](http://learnboost.github.com/stylus/). In dit artikel komen ze verder niet terug.

# Compilers schrijven geen slechte code

Om dit fabeltje maar meteen de wereld uit te helpen: compilers schrijven geen slechte code. Uiteindelijk is wat er uit Haml, Sass, Less en CoffeeScript komt afhankelijk van de kwaliteit van de ontwikkelaar die deze tools gebruikt. Kenmerkend voor al deze talen is dat ze weinig dicteren: als je je CSS 20 niveaus diep wilt nesten of tabellen voor lay-out wilt gebruiken, dan houden ze je niet tegen. Zoals je text editor dat ook niet doet. Wél vangen ze syntactische fouten af; een compiler gooit een error als je een dubbele punt vergeet. Speel een tijdje met je code, zie wat uit de compiler komt en je leert snel hoe je code er uit zal zien na compilatie.

# Compileren: van meta language naar HTML, CSS en JavaScript

Dit artikel is gebaseerd op het lokaal compileren ("vertalen naar de uiteindelijke taal") van alle code. Zodra je deze talen in een dynamisch project wilt gebruiken zijn er allerlei setups mogelijk. Voor nu doen we alles zonder enige dynamiek en richten we ons puur op de compilatie. Dat kan voor een deel van deze talen client side met JavaScript (Less heeft hier een officiële oplossing voor, terwijl Sass enkele officieuze implementaties kent). Omdat ik meen dat er geen enkele reden is om dit te willen, compileren we alles voordat we het naar de browser sturen.

Als je OSX gebruikt dan heb je de beschikking over verschillende tools, zoals het kersverse [CodeKit](http://incident57.com/codekit/). Dit programma is nog in beta en daarom voorlopig gratis. CodeKit houdt de bestanden in een folder in de gaten en compileert zodra er iets gewijzigd is. Het is een one-stop-shop voor alle talen in dit artikel, op het moment van schrijven met uitzondering van Compass. Er kan echter ieder moment een update uitkomen met ondersteuning voor Compass; de kans is groot dat het zover is wanneer je dit leest. Kijk na het installeren ook eens naar de opties. Je kunt er onder andere instellen of en hoe code geminified moet worden, of er enkele of dubbele quotes gebruikt worden, enzovoort. Voor alternatieven voor OSX, zie hieronder.

Als je op Windows werkt, is het een klein beetje meer werk. Voor zover ik weet is er voor dat platform geen alles-in-één oplossing. Je kunt gebruik maken van [Scout](http://mhs.github.com/scout-app/) of [Compass.app](http://compass.handlino.com/) voor Sass en Compass (deze apps werken ook op OSX). Voor Less kun je [SimpLESS](http://wearekiss.com/simpless) of [WinLess](http://winless.org/) gebruiken. Voor CoffeeScript is er de [CoffeeScript Compiler](https://github.com/alisey/CoffeeScript-Compiler-for-Windows). Een GUI voor Haml is er niet, maar als je niet bang bent voor de command-line kun je daarmee een eind komen.

Als Linux-goeroe ben je vast handig genoeg om de stack zelf te installeren, maar je kunt ook de Linux-versie van bovenstaande Compass.app gebruiken als je een GUI wilt voor Sass en Compass.

Met [Rendera](http://rendera.heroku.com/) kun je online het één en ander proberen in Haml, Sass en CoffeeScript. Handig als je alleen een beetje met de syntaxis wilt stoeien.

# HTML: [Haml](http://haml-lang.com/)

Het schrijven van HTML is zo erg niet: je editor sluit iedere tag met één toetscombinatie zelf wel af, "angle brackets" zijn helemaal niet overbodig en een sloot aan afsluitende tags onderaan hoort er nu eenmaal bij. Zo dachten de meesten erover die met Haml begonnen en—toegegeven: na enige gewenning—nooit meer iets anders willen.

Haml is alweer vijf jaar oud en daarmee in de developmentwereld zeker volwassen te noemen. De code erachter draait op Ruby, maar dat wil niet zeggen dat je het alleen in op Ruby-gebaseerde projecten in kunt zetten. Als je lokaal ontwikkelt zonder dynamische data (je schrijft puur statische HTML), dan kun je met Haml prima uit de voeten. Wil je het gebruiken in bijvoorbeeld een PHP-project, kijk dan eens naar [deze port](http://code.google.com/p/phamlp/ "PHamlP") (er zijn ook ports voor .NET, Java en zelfs Perl). Gebruik je Wordpress, dan is [Wordless](https://github.com/welaika/wordless) een goede optie.

Van alle in dit artikel besproken talen is Haml het eenvoudigst qua hoeveelheid opties en syntaxis. Een prima optie om mee te beginnen dus. Er zitten geen wereldschokkende features in Haml; de voornaamste voordelen zijn de overzichtelijke hiërarchie en het niet hoeven sluiten van je tags. Haml gebruikt "significant whitespace": het aantal spaties aan het begin van de regel geeft het niveau en daarmee de hiërarchie aan. Alle editors kunnen gebruik maken van "soft tabs", waarbij het gebruik van de tab-toets ervoor zorgt dat onder water twee spaties gebruikt worden.

De syntaxis van Haml is overzichtelijk. Hieronder eerst wat Haml, met daarna het gecompileerde resultaat.

## Haml:

```
!!!
%section#about
  %h1 About us

  %p.introduction
    %a{:href => 'http://fronteers.nl/'} Fronteers website

  #carousel.projects
    :javascript
      alert('initialize');

  %form{:method => 'post'}
    %fieldset
      %legend Some form…
```

## HTML:

```
<!DOCTYPE html>
<section id="about">
  <h1>About us</h1>

  <p class="introduction">
    <a href="http://fronteers.nl/">Fronteers website</a>
  </p>

  <div id="carousel" class="projects">
    <script>
      <![CDATA[
        alert('initialize');
      ]]>
    </script>
  </div>

  <form method="post">
    <fieldset>
      <legend>Some form…</legend>
    </fieldset>
  </form>
</section>
```

Zoals je ziet worden HTML-elementen aangegeven met een %-teken. Alles wat je aansluitend tussen curly brackets zet worden attributen (de dubbele punt voor het attribuut komt uit Ruby, eventueel kun je ook gewoon `href` gebruiken, met quotes).

Door een `#`-teken te gebruiken geef je aan dat dit een ID is, terwijl een punt een classname aangeeft. Een duidelijke relatie tussen je HTML en CSS dus, wat de leesbaarheid ten goede komt. Door het element weg te laten, zoals bij `#carousel.projects`, zal Haml een `<div>` gebruiken.

`:javascript` is een filter, meer hierover in de [Haml-documentatie](http://haml-lang.com/docs/yardoc/file.HAML_REFERENCE.html#filters). Je hebt er nog veel meer, bijvoorbeeld om whitespace te preserveren of een `<style>`-element toe te voegen.

De voordelen van Haml op een rijtje: inzichtelijke hiërarchie tussen HTML-elementen onderling, duidelijke relatie tussen markup en CSS selectors, geen onnodige haakjes en geen onoverzichtelijke sloot aan afsluitende tags onderaan je pagina. Als bonus kun je aangeven of je enkele of dubbele quotes wilt gebruiken en hoe je je markup wilt compileren (ingesprongen, niet ingesprongen of alles op één regel).

# CSS: [Sass](http://sass-lang.com/) & [Less](http://lesscss.org/)

Of je Sass of Less wilt gebruiken hangt sterk af van je voorkeur en ontwikkelomgeving. In Ruby on Rails wordt Sass veel vaker gebruikt dan Less, terwijl ik zelfstandige front-enders juist vaker over Less hoor. Belangrijkste is dat je een tool gebruikt waarvan de syntax bij je past en die eenvoudig in te zetten is in de projecten waar je aan werkt. Voor dit artikel maakt het weinig uit: met de hierboven beschreven software kun je ze allebei lokaal compileren. De functionaliteit is vrijwel hetzelfde, met als uitzondering dat Compass (zie verderop in dit artikel) of een vergelijkbare extensie niet beschikbaar is voor Less.

Sass en Less voegen de functionaliteit toe die je al jaren mist in CSS. Wat dacht je van variabelen, herbruikbare functies en calculaties met verschillende eenheden? En dan kun je je bestaande CSS-bestand nog gewoon hernoemen ook, waarna je in je eigen tempo de wijzigingen door kunt voeren die voor jou nuttig zijn. Hieronder staan enkele voorbeelden.

NB: Sass kent twee verschillende syntaxissen: Scss ("Sassy CSS") en "original Sass". Original Sass gebruikt geen curly brackets en puntkomma's, maar significant whitespace. Velen, waaronder ondergetekende, vinden dit een overzichtelijkere manier van schrijven. Door het ontbreken van deze "onnodige" karakters is er minder visuele afleiding. Voor dit artikel is gekozen voor Scss, omdat dit voor beginnende gebruikers bekender oogt.

## Nested selectors

Wat velen een doorn in het oog is aan CSS is het niet DRY karakter ervan (Don't Repeat Yourself), wat bijvoorbeeld opvalt wanneer je gebruik maakt van geneste selectors. Zowel Sass als Less lossen dit op door nesting toe te staan, waarna er valide CSS van gemaakt wordt. Let echter op dat je hier geen nestingfeest van maakt: meer dan een paar niveaus diep is niet bevorderlijk voor de verwerkingssnelheid van de browser en de hoofdpijn die je gaat krijgen door een te hoge [specificity](http://coding.smashingmagazine.com/2007/07/27/css-specificity-things-you-should-know/). Hetzelfde als wanneer je je selectors met de hand zou schrijven dus.

## Scss / Less:

```
#header {
  color: #f0f;
  h1 {
    color: #000;
  }
  p {
    color: #333;
    a {
      color: #999;
    }
  }
}
```

## CSS:

```
#header {
  color: #f0f;
}
#header h1 {
  color: #000;
}
#header p {
  color: #333;
}
#header p a {
  color: #999;
}
```

## Mixins

Mixins zijn herbruikbare blokken met stijldeclaraties die je eventueel kunt combineren met zelf te kiezen parameters. De syntax van Scss is iets meer verbose en daarmee wat mij betreft duidelijker, omdat er geen verwarring kan ontstaan tussen een class selector en een mixin.

In de dagelijkse praktijk zul je zien dat mixins veel tijd kunnen schelen, bijvoorbeeld doordat je in een herbruikbare mixin alle vendor specifieke prefixen kunt definiëren. Een voorbeeld hiervan vind je in het onderdeel over Compass een stukje naar verderop.

## Scss:

```
@mixin left($distance: 20px) {
  float: left;
  margin-left: $distance;
}
.foo {
  @include left;
}
.bar {
  @include left(10px);
}
```

## Less:

```
.left(@distance: 20px) {
  float: left;
  margin-left: @distance;
}
.foo {
  .left;
}
.bar {
  .left(10px);
}
```

## CSS:

```
.foo {
  float: left;
  margin-left: 20px;
}
.bar {
  float: left;
  margin-left: 10px;
}
```

## En nog veel meer

Bovenstaande is slechts het topje van de ijsberg. Zowel Sass als Less bieden de mogelijkheid om variabelen te gebruiken, zodat je kleuren, marges, regelafstanden of wat dan ook maar één keer hoeft te definiëren, waardoor zoeken en vervangen voor het maken van een aanpassing niet meer nodig is. Daarnaast is iets als `$link-hover-color` een stuk duidelijker voor jezelf of een toekomstige ontwikkelaar dan een willekeurige #hexadecimale kleurcode.

Een grote collectie aan ingebouwde functies zorgen ervoor dat bijvoorbeeld het gebruiken van afgeleide kleuren eenvoudig is. Zo gebruik je `lighten(kleur, 10%)` om een kleur 10% lichter te maken, waarna Sass of Less de nieuwe #hex-waarde berekenen. Sass heeft meer functies in zich dan Less, maar je moet je afvragen hoe vaak je de meer exotische functies gebruikt.

Mathematische operaties worden door beide talen ondersteund. Van optellen en vermenigvuldigen (handig bij het berekenen van afmetingen in em's) tot het "optellen" van kleuren (wat alleen goed werkt in simpele gevallen, zoals bij grijswaarden).

Daarnaast heeft Sass onderstaande manier om stijlen in een media query overzichtelijk te koppelen aan een selector. Op deze manier hoef je niet totaal ergens anders te gaan zoeken naar een media query-specifieke stijl. Sass combineert media queries waar mogelijk: gebruik je twee keer dezelfde `@media`-regel, dan komen de bijbehorende stijlen gecombineerd binnen een enkele `@media`-regel te staan.

## Scss:

```
#header {
  width: 300px;
  @media screen and (orientation: landscape) {
    width: 500px;
  }
}
```

## CSS:

```
#header {
  width: 300px;
}
@media screen and (orientation: landscape) {
  #header {
    width: 500px;
  }
}
```

# [Compass](http://compass-style.org/)

Compass is een extensie voor Sass waarmee je nóg meer snelheidswinst kunt boeken. Het maakt het onder andere makkelijk om afbeeldingen en fonts in je CSS te embedden (door middel van Data URI's), afmetingen van een afbeelding te achterhalen en te gebruiken in je CSS, met één regel een CSS reset toe te voegen of een collectie helpers aan te roepen om eenvoudiger gebruik te maken van diverse grid systems. De [documentatie van Compass](http://compass-style.org/help/) is uitstekend, dus ik verwijs je graag daar naartoe voor alle informatie hierover. Maar eerst overtuig ik je met twee voorbeelden die de winst die uit Compass te halen is meteen duidelijk maken.

## Vendor specifieke prefixen

Het is vermoeiend om steeds weer een sloot aan vendor specifieke prefixen te moeten gebruiken. Ze zorgen voor extra regels code (en dus meer scrollen) en "visual clutter". Compass heeft mixins voor veel CSS3-property's die dit voorkomen. Bijvoorbeeld voor `border-radius`:

## Compass:

```
a {
  @include border-radius(10px);
}
```

## CSS:

```
a {
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  -khtml-border-radius: 10px;
  border-radius: 10px;
}
```

## Sprites beheren: onbegonnen werk

Het maken en beheren van sprites is veel werk. Afbeeldingen samenvoegen tot een groter geheel, de `background-position` van ieder element opzoeken en de hele boel weer aanpassen wanneer je één van de afbeeldingen een paar pixels groter maakt. Natuurlijk zijn er tools die het leven wat makkelijker maken, maar er zijn er weinig die zo verweven zijn met je ontwikkelproces als Compass.

Stel je voor dat je een `images/flags` folder hebt met daarin de vlaggen van verschillende landen: `nl.png`, `be.png`, enzovoort. Je wilt deze in een sprite gebruiken, zonder na te hoeven denken over de sprite zelf. Eventueel wil je later grotere afbeeldingen gebruiken, maar ook daar wil je in dat geval geen omkijken naar hebben. Tijd voor wat Compass-magie.

## Scss

```
@import "images/flags/*.png";
a.nl {
  @include flags-sprite(nl);
}
a.be {
  @include flags-sprite(be);
}
```

## CSS:

```
a.nl,
a.be {
  background: url('/images/flags-s34fe0604ab.png') no-repeat;
}
a.nl {
  background-position: 0 0;
}
a.be {
  background-position: 0 -16px;
}
```

Dit is een simpel voorbeeld, waarbij Compass op basis van de eerste `@import` alle PNG's in de folder `images/flags` samenvoegt tot één afbeelding en de coördinaten van de verschillende afbeeldingen berekent. De bestandsnaam is gebaseerd op de inhoud van de afbeeldingen, dus wanneer je er eentje aanpast, krijgt de sprite een nieuwe bestandsnaam. Handig als je far future expiry headers gebruikt.

Hierna komt de functie `flags-sprite()` beschikbaar, waarbij de naam een afgeleide is van het pad. Als je het over kerstbomen in `images/trees` zou hebben, dan gebruik je `trees-sprite()`. De functie accepteert de naam van het bestand als parameter, zonder `.png`. Er zijn optionele parameters om offsets aan te geven, bijvoorbeeld om de achtergrondafbeelding een x-aantal pixels naar rechts of naar beneden te positioneren.

Sass kan gebruik maken van each-loops, waarmee je door alle landen heen kunt lopen. Dat scheelt nog meer typewerk. Compass heeft zelf ook methoden om op basis van de bestandsnamen van de afbeeldingen een lijst met classnames op te bouwen. Meer hierover in de zeer complete [Compass spriting tutorial](http://compass-style.org/help/tutorials/spriting/), net als informatie over de verschillende opties (verticale of horizontale sprites, tussenruimte, enzovoort).

# Waar wacht je op?

Front-end meta languages zijn niet altijd eenvoudig om in bestaande processen te implementeren. Je moet iedereen mee krijgen, omdat jij niet steeds andermans CSS kunt overschrijven met code die wordt gecompileerd op basis van jouw Sass of Less. Als je echter iedereen zo ver kunt krijgen, dan zorgt het gebruik van deze talen voor een grote tijdswinst en betere onderhoudbaarheid van je front-end code.

Als je een zelfstandige front-ender bent die HTML of CSS oplevert, dan staat niets je in de weg om vandaag nog te beginnen met het gebruik van front-end meta languages. Wat eruit komt is immers "gewoon" HTML en CSS.

Maar het allerbelangrijkste: gebruik van front-end meta languages is leuker en maakt je leven makkelijker. Happy holidays!

### Over Roy Tomeij
<img src="/_img/2011/12/roy-tomeij.jpg" alt="Foto van roy tomeij uit 2011" class="floating-portrait" /> 
Roy Tomeij is co-founder van [80beans](http://www.80beans.com/) en [SliceCraft](http://www.slicecraft.nl/) in Amsterdam, front-end developer en spreker. Hij houdt van front-end meta languages zoals Haml, Sass en CoffeeScript. Als je meer wilt weten, neem dan contact op met [@roy](https://twitter.com/roy) via Twitter.

Donatie: Doe Een Wens Stichting Nederland
De vergoeding voor dit artikel gaat naar [Doe Een Wens Stichting Nederland](http://www.doeeenwens.nl/), zodat de liefste wens van kinderen met een levensbedreigende ziekte vervult kan worden.
