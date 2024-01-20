---
title: De slimmigheden in de standaardstylesheets van browsers
date: 2022-12-13
author: Kilian Valkhof
summary: 'Een marge van 8px om je hele pagina, koppen zijn uit zichzelf al groter en wie heeft dat afgrijselijke lettertype uitgekozen? Een "ongestijlde pagina" is stiekem helemaal niet zo ongestijld, maar bevat een flinke bak styling. Waar komt die stijl vandaan?'
categories:
    - Adventskalender
---

Een marge van 8px om je hele pagina, koppen zijn uit zichzelf al groter en wie heeft dat afgrijselijke lettertype uitgekozen? Een "ongestijlde pagina" is stiekem helemaal niet zo ongestijld, maar bevat een flinke bak styling. Waar komt die stijl vandaan?

## Standaard browser stylesheets

Die stijl komt uit de standaard browser stylesheets: CSS die je browser automatisch toevoegt aan iedere pagina. In tegenstelling tot wat je misschien verwacht staat deze standaard stijl letterlijk in CSS bestanden die de browser voor iedere pagina inlaadt:

-   Gecko (Firefox): https://searchfox.org/mozilla-central/source/layout/style/res/html.css
-   Chromium (Chrome, Polypane e.a.): https://github.com/chromium/chromium/blob/main/third_party/blink/renderer/core/html/resources/html.css (Met wat extra CSS bestanden, bijvoorbeeld voor selectmenu, in hetzelfde mapje!)
-   Webkit (Safari): https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css

Iedere browser heeft zijn eigen standaard CSS en daar staan een hoop interessante dingen in. Hoewel dit geen geschiedenisles is, is het goed om te vermelden dat voor een lange tijd de stijl van elementen geen deel uitmaakte van de HTML specificatie. Iedere browser kon dus doen wat 'ie wilde.

Gelukkig probeerden browsers steeds meer hetzelfde te renderen (onder druk van web standards fanaten, bijvoorbeeld met de Acid en Acid2 tests) waardoor dit minder een probleem werd, en met [HTML4](https://www.w3.org/TR/CSS2/sample.html) en later [HTML5](https://html.spec.whatwg.org/multipage/rendering.html) werd een hoop van de standaard browser stylesheet vastgelegd.

Enfin, geen geschiedenisles dus. Maar als je nou echt wilt weten waarom er 8px marge op de `body` zit, heeft Miriam Suzanne [dat voor je uitgezocht](https://www.miriamsuzanne.com/2022/07/04/body-margin-8px/).

Wat we wel gaan doen is kijken wat voor interessante, slimme dingen er in die standaard stylesheets zit. De CSS die daar in staat kan namelijk precies geschreven worden op de capaciteiten van de browser, en per definitie hebben ze dus altijd toegang tot de meest nieuwe features in browsers. De stylesheets worden ook actief bijgehouden: de CSS van Webkit is voor het laasts op 16 juni dit jaar aangepast, die van Gecko op 16 september en Chromium voor het laatst ...twee uur geleden (9 november)!

## Dus dat voor leuke dingen staan er in?

Voor het gemak slaan we de "CSS Reset" achtige dingen over. De standaard stylesheets voegen `display: none` en `display: block` toe op alle elementen die dat nodig hebben (en `display: table` op tables!) en tekstgroottes worden allemaal in `em` gezet zodat ze automatisch meeschalen. Dat is allemaal niet super spannend, dus gaan we niet verder op in.

## Logical properties

Alle marges in een document zoals die boven en onder koppen en het inspringen van `ul`s en `blockquote`s komen uit deze standaard stylesheet. Maar in plaats van `margin-top` en `margin-bottom` gebruiken ze andere CSS properties: "logical properties".

In plaats van `margin-bottom` gebruiken ze `margin-block-end` en in plaats van `margin-left` gebruiken ze `margin-inline-start`.

| 'oude' margins | Logical properties (voor NL) |
| -------------- | ---------------------------- |
| margin-top     | margin-block-start           |
| margin-bottom  | margin-block-end             |
| margin-left    | margin-inline-start          |
| margin-right   | margin-inline-end            |

Logical properties gebruiken niet de absolute richtingen top, right, bottom en left, maar block voor de flow richting en inline voor de tekst richting (in latijnse talen respectievelijk van boven naar beneden en van links naar rechts).

Het voordeel van deze logical properties is dat ze automatisch meeveranderen met de leesrichting van de pagina. In een pagina in het Arabisch staat `margin-inline-start` dus aan de rechterkant, niet aan de linkerkant. Dat scheelt weer typen.

## `:is()` en `:-webkit-any()`

Voordat `:is()` er was, heette het `:matches()` en daarvoor heette het `:-moz-any()`/`:-webkit-any()`. Die laatste werd al in 2010(!) aan Firefox 4 toegevoegd als een manier om delen van selectors te groeperen, en het heeft dus een flinke tijd geduurd voordat we dat allemaal in ons dagelijkse leven konden gebruiken.

> Wil je daar meer over lezen? Check :where() :is() :has()? New CSS selectors that make your life easier

De browsers zelf gebruiken het echter al een hele tijd. In HTML5 bestond het "document outline algoritm" en onderdeel daarvan was dat je meerdere H1s kon gebruiken als die maar telkens in een nieuwe section of article stonden. De browser zou ze dan magisch omtoveren tot H2, H3 enz.

Nu is dat algoritme er nooit gekomen, maar de stijl ervoor wel, en die zit er nog steeds in. Zo wordt de stijl voor de `h2` met de volgende selector beschreven:

```
h2,
:is(article, aside, nav, section) h1 {
    /* */
}
```

Hierdoor ziet de h1 in een article, aside, nav of section er dus hetzelfde uit als een H2. En hoe denk je dat ze dat met 4 niveau's diep geneste sections doen? Inderdaad, vier keer hetzelfde achter elkaar:

```
h4,
:is(article, aside, nav, section)
:is(article, aside, nav, section)
:is(article, aside, nav, section)
h1 {

}
```

De grote vraag is nu of ze, met het verdwijnen van het algoritme, ook deze stijl weer weg gaan halen. Zoals je kan bedenken is het aanpassen van de standaard browser stijl niet zonder gevaren, en browsers mogen de miljoenen bestaande websites niet kapot maken. We gaan het zien.

Oh en die `:-webkit-any()`, die vinden we enkel nog terug in de CSS van Chromium. Gecko en Webkit zijn al overgestapt op `:is()`. 💪

## Case insensitive attribute matching

Alle stylesheets maken uitgebreid gebruik van attribute selectors om bijvoorbeeld verschillende input types mee te selecteren, maar in het chromium stylesheet staat daar overal een "i" achter:

```
input[type="search" i] {
    -webkit-appearance: searchfield;
    box-sizing: border-box;
}
```

Die "i" kan je toevoegen om ["case insensitive" te matchen](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors#syntax). Ongeacht of het attribuut hoofdletters of kleine letters gebruikt dus. Wanneer je geen controle hebt over hoe een attribuutwaarde geschreven is (bijvoorbeeld in een standaard stylesheet) kan dit handig zijn om toe te voegen en ook al gebruiken de andere browsers het niet in hun standaard stylesheet, ze ondersteunen het wel.

## Met CSS de alt tekst laten zien

Wanneer een afbeelding niet geladen is laat de browser in plaats daarvan de alt tekst zien. Je verwacht misschien dat browsers hier in hun engine wat voor doen, maar Firefox lost dit op met CSS:

```
img::before {
  content: -moz-alt-content !important;
}
```

Die `-moz-alt-content` is er ééntje die je zelf niet mag gebruiken, dat is een interne waarde. Maar het gaat er om hoe dit er voor zorgt dat de alt-tekst zichtbaar is als de afbeelding niet geladen kan worden: Afbeeldingen in browsers zijn "replaced content", dat betekent dat de browser de afbeelding als het ware bovenop je website plakt. Form controls zijn hier een ander voorbeeld van.

En omdat het replaced content is, kan je dus ook geen pseudo-content (met `::before`of `::after`) toevoegen aan afbeeldingen. Die worden door de browser genegeerd. Dus als de afbeelding werkt, doet deze CSS niks. Maar als de afbeelding niet geladen kan worden, wordt er niks _replaced_ en werkt de pseudo content dus wel. En ziedaar: de alt tekst verschijnt.

## Vreemde code

Ook staan er een aantal ongewone dingen in de stylesheets:

## Quirky ems

Als je in de Chromium en Webkit stylesheets kijkt zie je daar een CSS unit die je waarschijnlijk niet kent: `__qem`. Die hoef je ook helemaal niet te kennen, maar Webkit (en Chromium, die daar op gebaseerd is) gebruikt deze eenheid om de juiste marges toe te kunnen passen in quirks mode. Heb je niks aan, maar leuk feitje om op de volgende Fronteersbijeenkomst te delen.

## internal-light-dark()

In de stylesheet van Chromium zie je soms waar kleuren worden gedefinieerd een interessante CSS functie: -internal-light-dark() met twee waardes:

```
input[type="range" i] {
    color: -internal-light-dark(#101010, #ffffff);
}
```

Deze functie kiest één van de twee kleuren afhankelijk van of er light of darkmode gebruikt wordt in de browser. Dat is een stuk compacter dan we momenteel met media queries kunnen doen:

```
@media (prefers-color-scheme: light) {
    input[type="range" i] {
        color: #101010
    }
}

@media (prefers-color-scheme: dark) {
       input[type="range" i] {
        color: #ffffff
    }
}
```

Wie weet wordt deze functie in de toekomst ook voor ons gewone developers beschikbaar.

## Namespaces in CSS?

Alle drie de stylesheets beginnen met dezelfde regel:

@namespace "<http://www.w3.org/1999/xhtml>";

Waarschijnlijk heb je dit nog nooit zelf toegevoegd (en dat hoeft ook niet), maar door deze regel weet je browser dus welke elementen je bedoeld met `body`, `div` en `p`, namelijk die uit de HTML namespace. Maar hoe komt het dan dat SVG elementen zoals `path` en `g` stijlen ook werkt? Dat is een slimmigheid van de HTML5 specificatie: SVG (en MathML) zijn bekende "foreign elements" en die krijgen automatisch de juiste namespace. Bedankt HTML5!

## FIXME

In de stylesheets van Chromium en Webkit staat een interessante comment:

```
/* page */
@page {
    /* FIXME: Define the right default values for page properties. */
    size: auto;
    margin: auto;
    padding: 0px;
    border-width: 0px;
}
```

Een FIXME klinkt vrij urgent toch? Ik heb het even opgezocht en deze comment staat er sinds 2010 in. Zo urgent is het dus niet.

## Jouw vondsten

Tot zover mijn "deep dive" door de standaard stylesheets van Chromium. Gecko en Webkit. Neem er vooral zelf ook een kijkje door en deel jouw vondsten in de reacties hieronder.
