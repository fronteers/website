---
title: 'CSS Custom Properties, Cascading Variables en het Einde van de Stijl'
date: 2019-12-05
author: Edwin Martin
categories:
    - Adventskalender
---

Het is al heel lang mogelijk om de CSS-stijl vanuit HTML te bepalen met het `style` attribuut:

```
<div style="color: red; border: 1px solid red">Waarschuwing</div>
```

Hetzelfde geldt voor JavaScript met de `style` property:

```
element.style = "color: red; border: 1px solid red";
```

Dit is erg onhandig, want nu staan de CSS-stijlen verspreid over meerdere bestanden, wat het onderhoud lastig maakt. Wil je een stijl die je vanuit HTML of JavaScript gezet hebt, wijzigen via CSS, dan moet je `!important` gebruiken, wat het nog onhandiger maakt. Al snel ontstond de _best practice_ om alle CSS alleen in CSS-bestanden te beschrijven en `style` niet meer te gebruiken, maar stijlen onder te brengen in `classes` en die vanuit HTML of JavaScript aan of uit te zetten.

```
.warning {
    color: red;
    border: 1px solid red;
}
```

De HTML wordt dan:

```
<div class="warning">Waarschuwing</div>
```

En de JavaScript wordt:

```
element.classList.add("warning");
```

Nu zou ik dit artikel kunnen eindigen met het advies om nooit meer het HTML-attribuut `style` en de JavaScript-property `style` te gebruiken, maar je had vast al gezien dat dit artikel nog wat langer is. Er zijn namelijk situaties waarin je in JavaScript een waarde berekent die je in een stijl wil gebruiken. Je berekent bijvoorbeeld een kleur of je gebruikt een complexe berekening om een x-positie uit te rekenen. Je kan dan weer de style-property erbij pakken en de `color` of de `left` properties veranderen. Maar dan heb je weer dezelfde problemen als hierboven beschreven. Wat als je later een ander element ook deze kleur wil geven? En niet `left`, maar `transform` wil gebruiken? Dan heb je toch weer een probleem.

## CSS variabelen

Gelukkig is daar een oplossing voor, die inmiddels door [alle moderne browsers](https://caniuse.com/#feat=css-variables) wordt ondersteund: [CSS Custom Properties for Cascading Variables](https://www.w3.org/TR/css-variables/), kortweg CSS variabelen. Hoe werken CSS variabelen? Laten we beginnen met een voorbeeld in CSS:

```
:root {
    --warning-color: orange;
}

.warning {
    color: var(--warning-color, red);
    border: 1px solid var(--warning-color, red);
}
```

Binnen CSS kan je dus een custom property zetten en die op verschillende plekken weer gebruiken. Het aanpassen van de waarde is hierdoor veel eenvoudiger geworden. Een CSS custom property zet je op dezelfde manier als een CSS property, maar ze beginnen altijd met '--'. Het uitlezen doe je met `var(--varname)`. De optionele tweede parameter van `var()`, in het voorbeeld hierboven `red`, is de default waarde voor het geval de variabele `--warning-color` (nog) niet is gezet. Het is belangrijk om te weten dat deze variabelen dezelfde regels voor cascading volgen als alle andere CSS properties, vandaar ook de naam Cascading Variables.

## Custom Properties of Variables?

De termen custom properties en variables lijken in teksten over dit onderwerp door elkaar te worden gebruikt, maar wat is nou wat? In CSS heb je een declaratie zoals `color: white`. Links van de dubbele punt staat de property en rechts daarvan de waarde. Als de property met '--' begint, is het altijd een custom property. Als je deze aan de rechterkant van de dubbele punt gebruikt in een `var()`-functie, dan is het een variabele.

## JavaScript

In JavaScript is het mogelijk om een waarde te geven aan een CSS custom property waarna je in CSS precies kan bepalen wat je ermee doet. Het veranderen van de property `--warning-color` doe je in JavaScript als volgt:

```
element.style.setProperty("--warning-color", "maroon");
```

De waarschuwing uit het eerdere voorbeeld zal nu kastanjebruin worden. Om een variabele in het hele document te kunnen gebruiken, zet je deze op het root element:

```
document.documentElement.style.setProperty("--warning-color", "maroon");
```

Was de strekking van dit artikel niet om nooit meer `style` te gebruiken? Nu doen we het toch. Oké, we laten dan één uitzondering toe, namelijk om `setProperty()` te kunnen gebruiken.

## Rekenen

Met CSS variabelen kan je ook rekenen. Stel, je hebt een box waarvan in JavaScript is bepaald dat je die 80 pixels van de linkerkant wil weergeven:

```
boxElement.style.setProperty("--box-left", "80px");
```

Maar in je CSS weet je dat je daar ook de linkermarge bij moet optellen, die je ook in een CSS-variabele hebt opgeslagen. Dan kan je CSS er als volgt uitzien:

```
:root {
    --margin-left: 10px;
}

.box {
    position: relative;
    left: calc(var(--box-left) + var(--margin-left));
}
```

De `left`-property van de box wordt nu `90px`.

## Geen eenheid

Nog beter is om in de `setProperty`-functie geen eenheid zoals `px` te gebruiken. Die kan je het best bepalen waar dat hoort: in de CSS. Neem bijvoorbeeld een voortgangsindicator die van 0 naar 100 loopt.

```
document.documentElement.style.setProperty("--progress", bytes/totalBytes * 100);
```

Je CSS kan er dan zo uitzien:

```
.progress-box {
    background-color: deepskyblue;
    width: calc(var(--progress) * 0.6rem);
    height: 1rem;
}
```

Als de voortgang 40% is, dan zal de breedte gelijk zijn aan 40 × 0,6rem = 24rem.

## Media queries

CSS variabelen zijn heel goed te gebruiken in media queries. Bijvoorbeeld om op hele kleine schermen alle marges klein te maken om alles nog goed te laten passen:

```
:root {
    --margin: 8px;
}

@media (max-width: 360px) {
    :root {
        --margin: 2px;
    }
}

.some-text-box {
  margin: var(--margin);
}
```

## Theming

Je kan een theme natuurlijk heel eenvoudig houden met een voor- en achtergrondkleur en een paar classes. Maar als je sommige teksten, randen of iconen bepaalde accentkleuren wil geven, dan wordt het met op de oude manier snel erg omslachtig. CSS variabelen zijn hier juist heel geschikt voor. Ook bijvoorbeeld voor _dark mode_, waarbij de dark/lightmodus van de pagina meeverandert met die van het besturingssysteem:

```
:root {
  --background: white;
  --text: black;
  --accent: lightblue;
}

@media (prefers-color-scheme: dark) {
    :root {
      --background: black;
      --text: white;
      --accent: purple;
    }
}

html {
  color: var(--text);
  background-color: var(--background);
}

.some-box {
  border: 3px solid var(--accent);
}
```

Je kan op deze manier met verschillende kleurenpaletten werken en deze in de CSS toekennen aan verschillende properties, in dit geval de `border`.

## Variëren met kleuren

Met een beetje creativiteit kan je ook kleuren variëren. Dat werkt het beste als je `hsl()` of `hsla()`-notatie gebruikt. Je kan bijvoorbeeld de tint (hue) vastleggen in een variabele en in de CSS allerlei variaties definiëren:

```
:root {
    --theme-hue: 120; /* 120 is green */
}

.themed-box {
    color: hsl(var(--theme-hue), 50%, 90%);
    background-color: hsl(var(--theme-hue), 50%, 30%);
    border: 2px solid hsl(var(--theme-hue), 100%, 50%);
}
```

Door nu enkel `--theme-hue` te veranderen van bijvoorbeeld 120 (groen) in 0 (rood), verandert ook de stijl van `.themed-box`, inclusief alle variaties op die kleur. Natuurlijk kan je op deze manier ook de verzadiging (saturation) wijzigen om een pagina/element feller of ingetogener te maken. Of de helderheid (lightness) wijzigen om een pagina lichter of donkerder te maken. Combineer deze techniek met calc, media queries, theming en dark mode en er gaat een nieuwe wereld open. Je zal buiten vast een regenboog zien. En misschien wel een eenhoorn!

## Browser variabelen

Naast `var()` voor het uitlezen van CSS-variabelen, bestaat er ook `env()` voor het uitlezen van browser-omgevingsvariabelen. Op dit moment (2019) zijn er vier van deze omgevingsvariabelen
gedefinieerd: `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom` en `safe-area-inset-left`. Deze vier variabelen geven de afstand van de rand aan waarbinnen de inhoud geheel te bekijken is. Denk bijvoorbeeld aan een rond horloge met daarop een rechthoek met tekst. De variabelen geven de afstanden aan van de rechthoek tot de randen van het scherm. Een voorbeeld in CSS:

```
.safe-box {
    position: absolute;
    top: env(safe-area-inset-top, 8px);
    right: env(safe-area-inset-right, 8px);
    bottom: env(safe-area-inset-bottom, 8px);
    left: env(safe-area-inset-left, 8px);
}
```

Bij `env()` is, net als bij `var()`, de tweede parameter de default parameter als de variabele niet is gezet.

## Preprocessors

Ik heb meerdere projecten gezien waarbij Sass of Less alleen werd gebruikt om een rij waarden aan variabelen toe te kennen om die vervolgens in de rest van de style sheets te gebruiken. Is het dan niet handiger om de preprocessor weg te laten en CSS variabelen te gebruiken? Ik denk van wel. In het buildproces sla je een stap over en bijvoorbeeld het debuggen wordt een stuk makkelijker.

## Internet Explorer 11

En Internet Explorer 11 dan? Nee, die ondersteunt helaas geen CSS variabelen. In oktober 2019 had IE11 wereldwijd een [marktaandeel van 1,8%](https://gs.statcounter.com/browser-version-market-share#monthly-201811-201910). Wil je deze browser (en andere oude browsers) toch ondersteunen, dan kan je _graceful degradation_ toepassen, wat eigenlijk altijd wel een goed idee is:

```
.warning {
    color: red;
    color: var(--warning-color, red);
    border: 1px solid red;
    border: 1px solid var(--warning-color, red);
}
```

In dit geval wordt de waarschuwing in oude browsers altijd rood weergegeven. Het is misschien niet precies de kleur die de ontwerper had bedacht, maar een gebruiker van zo'n oude browser is al blij als een website bruikbaar is.

## Toekomst

Lea Verou wilde ook diagrammen in CSS kunnen tekenen, inclusief schuine verbindingslijnen. Dat gaat nog niet goed met alleen `calc()`, want daar heb je ook trigonometrische functies voor nodig. Op het moment van schrijven, in 2019, wordt er [gewerkt](https://github.com/w3c/csswg-drafts/issues/2331) om de functies `sin()`, `cos()`, `tan()`, `acos()`, `asin()`, `atan()`, `atan2()`, `hypot()`, `sqrt()` en `pow()` aan CSS toe te voegen.

## Breinbreker

Tot slot een leuk stukje code uit een [tweet van Micah Godbolt](https://twitter.com/micahgodbolt/status/1131626097349496833?s=20) om even over na te denken. Welke kleur is "Hello World"?

```
<style>
  #blue { --myVar: blue }
  .red { --myVar: red }
</style>

<div style='--myVar: pink'>
  <div id='blue'>
    <div class='red'>
      <span style='color: var(--myVar)'>Hello World</span>
    </div>
  </div>
</div>
```

Bedenk eerst zelf wat je antwoord zal zijn en kijk daarna pas naar het [antwoord](https://codepen.io/edwinm/pen/bGGOdpa). Aan de stembalkjes in de [tweet](https://twitter.com/micahgodbolt/status/1131626097349496833?s=20) te zien, zitten er nogal wat mensen naast. Bedenk ook waarom het juiste antwoord het juiste antwoord is.

## Over Edwin Martin

<img src="/_img/adventskalender/edwin.jpg" alt="Foto van Edwin Martin" class="floating-portrait" /> 
Edwin is freelance frontend webontwikkelaar en woont in Hilversum. Hij [blogt](https://bitstorm.org/), twittert in het Engels over frontendzaken op [@edwinmdev](https://mobile.twitter.com/edwinmdev/) en schrijft af en toe [stukjes code](https://github.com/edwinm).
Edwins donatie gaat naar Bits of Freedom.
