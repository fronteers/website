---
title: 'Introductie Web Components'
date: 2020-12-29
author: Edwin Martin
categories:
    - Adventskalender
---

Web components is een W3C webstandaard waarmee je, eenvoudig gezegd, je eigen HTML-tags kunt maken.

Het toevoegen van een plattegrond op je webpagina kan dan zo eenvoudig zijn als het toevoegen van deze tag:

```
<g-map latitude="52.3812258" longitude="4.9001255"></g-map>
```

Met web components kan je component-gebaseerd werken zonder dat je een JavaScript framework nodig zoals Angular, React of Vue. De tag moet wel beschikbaar gemaakt worden in de pagina met JavaScript. Hier komen we nog op terug.

[Volgens Wikipedia](https://en.wikipedia.org/wiki/Web_Components#History) werden web components geïntroduceerd door [Alex Russell van Google tijdens de Fronteers Conferentie in 2011](https://fronteers.nl/congres/2011/sessions/web-components-and-model-driven-views-alex-russell).

De specificatie is na een aantal langdurige wijzigingen eindelijk gereed en wordt nu door alle [moderne browsers](https://caniuse.com/custom-elementsv1) ondersteund.
Oudere browsers kunnen web components gebruiken in combinatie met polyfills.

Begonnen als zo'n polyfill is het door Google ontwikkelde [Polymer](https://www.polymer-project.org/). Hiermee konden web components al worden gebruikt terwijl browsers nog geen ondersteuning hadden.
Het is het enige bekende framework met web components als basis.

Sinds 2018 zijn van dit project nog twee delen over die ook nu handig zijn als je met web components aan de slag gaat:

-   [LitElement](https://lit-element.polymer-project.org/): een basisclass voor Web Components.
-   [lit-html](https://lit-html.polymer-project.org/): een templating library gebaseerd op JavaScript template literals (dus gebruik makend van `${var}…`).

## Technologieën

Web Components is een verzamelnaam van drie webtechnologieën: Shadow DOM, Custom Elements en HTML Templates.

## Shadow DOM

Met Shadow DOM is het mogelijk om binnen je eigen tag een hele HTML-structuur op te nemen inclusief CSS en JavaScript die is afgeschermd van de rest van de pagina, zodat conflicten met de rest van de pagina worden vermeden.

In de browser inspector is het mogelijk om in de Shadow DOM te kijken:

![Een screenshot van Firefox Devtools, waarin de shadow DOM van een element wordt gemarkeerd met "#shadow-root"](/_img/adventskalender/2020/shadow-root.png)

## Custom Elements

Een Custom Element is een JavaScript class waarmee je het gedrag van het element definieert.

## HTML Templates

Alle HTML die tussen `<template>` en `</template>` staat wordt door de browser niet geparsed, dus CSS, JavaScript en bijvoorbeeld afbeeldingen worden niet uitgevoerd en gedownload. Dit template kan je met JavaScript kopiëren en in je Custom Element gebruiken, waarna het wel wordt geparset. Meer over het template element vind je op
[<template>: The Content Template element op MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template).

## Code voorbeeld

Hieronder staat de de code van een waarschuwings-component dat verder nog niet veel kan.

```
// Definieer het MyWarning Custom Element
class MyWarning extends HTMLElement {
  // De constructor wordt aangeroepen als van de class
  // een instantie wordt gemaakt
  constructor() {
    super();

    // Maak een shadow DOM en verbind die aan dit custom element
    this.attachShadow({mode: 'open'});

    // Vul de shadow DOM met HTML
    this.shadowRoot.innerHTML = `
      <style>
        div {
          padding: 20px;
          border: 5px solid red;
        }
      </style>
      <div>
        <slot>
      </div>
    `;
  }
}

// Definieer een my-warning tag en koppel deze aan het custom
// element MyWarning
customElements.define('my-warning', MyWarning);
```

Dit custom element zou je als volgt in HTML kunnen gebruiken:

```
<my-warning>Dit is een waarschuwing</my-warning>
```

In de browser ziet dit er zo uit:

![Een blok met een rode rand met daarin de tekst "Dit is een waarschuwing"](/_img/adventskalender/2020/my-warning.png)

Je kan de code en het resultaat ook bekijken en aanpassen in deze [Codepen](https://codepen.io/edwinm/pen/QWKMaKy).

Wat misschien het eerste opvalt is het gebruik van het koppelteken in de HTML-tag. Dit is om onderscheid te maken tussen web components en "native" HTML-tags en is dus verplicht als het om web components gaat.

In het JavaScript zien we dat de Shadow DOM wordt gevuld met CSS en HTML-code. `<slot>` is de plaatshouder voor de inhoud van de `<my-warning>`-tag.

Door het gebruik van de Shadow DOM is de toegepaste CSS alleen geldig binnen deze Shadow DOM en nooit op de rest van de pagina.

-   Dit custom element kan worden uitgebreid met verschillende "levenscyclus functies", die worden aangeroepen als het bijvoorbeeld aan de pagina wordt toegevoegd wordt of juist wordt verwijderd.
-   Je kan de attributen uitlezen, reageren als de waarde van een attribuut verandert en je kan net als gewone HTML-elementen events afvuren.
-   Op [Web Fundamentals](https://developers.google.com/web/fundamentals/web-components/customelements) wordt uitgebreid beschreven hoe je een custom element maakt.

Miniplugje: een paar onderdelen van een Web Component zijn wat omslachtig en niet zo declaratief. Om dit te verbeteren heb ik de lichtgewicht [web-component-decorator](https://github.com/edwinm/web-component-decorator) geschreven. Je hebt hiervoor wel TypeScript nodig.

## Customized built-in elements

Met customized built-in elements kan je deze notatie gebruiken:

```
<button is="my-super-button">Klik mij</button>
```

Dit is een bestaand HTML-element die met het is-attribuut wordt uitgebreid naar een custom element. Een groot voordeel van deze notatie is dat je progressive enhancement kan toepassen: de button werkt in elke browser, ook als deze geen web components ondersteunt. Als JavaScript en web components wel beschikbaar zijn, dan krijgt de bezoeker een rijkere "my-super-button" custom element.

Als je op de [caniuse pagina](https://caniuse.com/custom-elementsv1) kijkt, dan zal je zien dat Safari deze customized built-in elements niet ondersteunt. De toepassing hiervan wordt daardoor erg beperkt en dat is erg jammer.

## Bibliotheken

## Webcomponents.org

Het [webcomponents.org](https://www.webcomponents.org/) project heeft als doel om een complete bibliotheek aan te bieden van Web Components. Iedereen kan web components toevoegen, vergelijkbaar met npmjs.com.

## Open Web Components

Het [Open Web Components](https://open-wc.org/) project is gebaseerd op LitElement en lit-html uit het Polymer-project, maar uitgebreid met verschillende tools om het ontwikkelen makkelijker te maken, zoals build- en test-scripts.

## Web Components in Angular, Vue en React

Het idee van Web Components is niet nieuw. Diverse JavaScript-frameworks bieden ook componenten aan. Het voordeel van web components is dat ze native zijn en je niet aan een bepaald framework vast zit.

Bedrijven die jaren geleden hebben geïnvesteerd in AngularJS en zagen dat hun codebase van de een op de andere dag was verouderd bij de introductie van Angular 2, weten wat het nadeel is van framework-afhankelijkheid. Bijvoorbeeld ING werkt nu wereldwijd met web components. Ze hebben zelfs hun componentenbibliotheek [Lion Web Components](https://lion-web-components.netlify.app/) voor iedereen beschikbaar gemaakt.

Het voordeel van web components is dat je daarin je componenten kunt schrijven en die vervolgens in elk ander framework kunt gebruiken. Of toch niet?

In Angular en Vue kan je prima web components gebruiken, precies zoals je gewend bent in dat framework. Je kunt Angular- en Vue-componenten ook goed omzetten in web components.

In [Custom Elements Everywhere](https://custom-elements-everywhere.com/) staat een lijst van alle bekende frameworks en hoe goed ze met custom elements omgaan. Spoiler: React is de enige spelbreker.

In React moet je extra toeren uithalen om web components te kunnen gebruiken. Het toekennen van datastructuren aan een attribuut of het luisteren naar events werkt namelijk anders. Het werkt alleen als je eerst een referentie maakt naar het web component en vervolgens met die referentie het web component gebruikt. Handig is anders.

Binnen React kan je ook een component omzetten naar een web component, maar daar heb je wel externe wrappers voor nodig. Hopelijk gaat React snel beter om met web components.

## Conclusie

Web components zijn heel krachtig en te gebruiken op zowel moderne als oudere browsers. Als je al een framework gebruikt, dan is het misschien niet zo nuttig. Maar wil je framework-onafhankelijk zijn of juist een lichtgewicht (JAMStack) website met snelle laadtijden bouwen, dan zijn web components een voor de hand liggende keus.
