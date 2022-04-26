---
title: "Learn you a Flexbox for Great Good!"
date: 2011-12-16
author: Stephen Hay
categories: 
  - Adventskalender
---
Dus...je wilt iets weten over Flexbox; misschien heb je er wel eens van gehoord, of misschien heb je één van de vele [tutorials](http://www.the-haystack.com/2010/01/23/css3-flexbox-part-1) erover gelezen. Het kan zelfs zijn dat je er al mee gewerkt hebt.

Vergeet alles wat je over Flexbox weet: we beginnen opnieuw! De spec is namelijk veranderd; de nieuwste versie verscheen op 29 november 2011!

# Wat heb je nodig?

Chrome Canary heeft een deel van de spec geïmplementeerd. Als je mee wilt doen heb je niets anders nodig dan Chrome Canary en je favoriete text editor.

* Chrome Canary: <http://tools.google.com/dlpage/chromesxs>;
* Je favoriete text editor: <http://www.vim.org/> (Relax, _relax_)

Laten we beginnen!

# Wat is Flexbox?

Flexbox is de roepnaam van CSS Flexible Box Layout Module. Het is één van de CSS Working Drafts dat zich bezighoudt met layout. Flexbox biedt een aangepast *box model* aan, die voor gebruikersinterfaces is geoptimaliseerd. In het kort: de kinderen van een “box” kunnen horizontaal of verticaal binnen de box worden geplaatst, en de overblijvende ruimte kan worden verdeeld over één of meer van de kinderen. Het nesten van dit soort boxes is ook mogelijk, waardoor complexe layouts mogelijk zijn.

## Pas op!

Er zijn andere CSS layout modules in ontwikkeling die wellicht veel beter zullen zijn voor algehele pagina-layout! Flexbox is mooi en eenvoudig, maar wordt bij het nesten van veel boxes vrij snel complex. Het is zeker [geen oplossing voor alle soorten layout](http://www.xanthir.com/blog/b4580 "Why Flexboxes Aren't Good for Page Layout"). Maar voor UI-componenten zoals forms, toolbars of kolommen en rijen met inhoudsblokken die anders gefloat zouden zijn, is Flexbox zeker een uitkomst. Flexbox is ook bedoeld om lief te spelen met alle andere aspecten van CSS, dus hebben de flexbox-regels enkel invloed op de kinderen van een flexbox.

# Three Little Boxes

Als je een beetje lui bent, kun je de [demopagina](/_downloads/2011/flexbox/demo.html) downloaden en bewerken. Anders...

Open je editor, maak een eenvoudig HTML-document aan met één box (een `div` in dit geval):

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Flexbox</title>
  </head>
  <body>
    <div>
    </div>
  </body>
</html>
```

Prachtig. Maar we willen natuurlijk iets zien, dus moeten we wat stijl toevoegen:

```
<style>
  body > div {
    height: 500px;
    padding: 1em;
    background-color: gray;
  }
</style>
```

Nu voegen we drie boxes toe aan onze eerste box. Dit zijn (uiteraard) de kinderen:

```
<div>
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>
```

En deze dienen ook wat stijl te krijgen:

```
div > div {
  width: 100px;
  height: 100px;
  background-color: pink;
}
```

Bekijk de pagina in Canary. We zien niets vreemds: de drie block-level elementen zitten netjes onder elkaar, zoals block-level elementen dat doen. Maar daar brengen we verandering in! We hebben een kleine Flexbox-speeltuin gemaakt; nu gaan we er in spelen.

# Het Flexbox Box Model toekennen aan een box

Wij willen de kracht van Flexbox toepassen op de drie kinderen van onze parent `div`. Dit wordt gedaan met de `display` property, jou vast niet onbekend. Door `display: flexbox;` te geven aan onze parent `div`, kunnen we de kracht van Flexbox beginnen te gebruiken. Maar stel dat onze parent geen block-level element moet zijn, maar inline? We hebben toch onze `display` property al in gebruik? Geen paniek, in dat geval gebruiken we `display: inline-flexbox`. Pfieuw!

```
body > div {
  display: -webkit-flexbox; /* Prefix nog nodig, helaas */
  height: 500px;
  padding: 1em;
  background-color: gray;
}
```

Nu wordt het Flexbox Box Model toegepast op onze drie kinder-`div`s, die wij voortaan *flexbox items* gaan noemen. Er zijn regels die aangeven wat een flexbox item is; als wij bijvoorbeeld `position: absolute;` zouden geven aan één kind, dat is dat kind niet meer een flexbox item! Logisch, maar toch. Lees in de spec [meer over flexbox items](http://www.w3.org/TR/css3-flexbox/#flex-items).

Terug naar onze oefening. Kijk even in de browser: omdat de Flexbox default is om de kinderen horizontaal te plaatsen, ziet het er uit alsof wij `inline`, `inline-block` of `float` op deze elementen heb toegepast. Op zich niets bijzonders, behalve het feit dat wij geen stijlen aan de kinderen hebben moeten toevoegen om dit effect te krijgen.

# Source-order onafhankelijkheid

De naam “Flexible Box Module” komt van de mogelijkheid om flexibel om te gaan met resterende ruimte binnen een box. Dit is werkelijk fantastisch, maar Flexbox biedt iets dat minstens zo belangrijk is: source-order onafhankelijkheid. Laten we spelen met nog een paar Flexbox properties om de volgorde van onze flexbox items te manipuleren.

```
body > div {
  display: -webkit-flexbox; 
  -webkit-flex-flow: row-reverse;
  height: 500px;
  padding: 1em;
  background-color: gray;
}
```

OMG. Onze flexbox items zijn rechts uitgelijnd, en de volgorde is omgedraaid! Dit doen we met de `flex-flow` property, die een default van `row` kent. `row-reverse` draait alles precies andersom. Naast `row` en `row-reverse` zijn er ook `column` en `column-reverse`. Probeer `column` even uit (`column-reverse` is nog niet geïmplementeerd), en zet daarna de waarde weer op `row` voor onze volgende stap.

Overigens, `flex-flow` accepteert ook een waarde voor het “wrappen” van flexbox items naar nieuwe “rows” (of columns, afhankelijk van de waarde die je gebruikt); `wrap` of `wrap-reverse` zijn echter nog niet in Canary geïmplementeerd. Ik zal dat wel eens vaker moeten zeggen. In elk geval, stel dat we `wrap` nu konden gebruiken, dan zouden we zoiets kunnen gebruiken:

```
body > div {
  display: -webkit-flexbox; 
  -webkit-flex-flow: row wrap; /* `wrap` zorgt voor een multi-line flexbox. */
  height: 500px;
  padding: 1em;
  background-color: gray;
}
```

## Spiegel, spiegel...

Alle properties die te maken hebben met de volgorde, richting of uitlijnen van flexbox items worden beïnvloed door de huidige *writing mode*. De writing mode is de oorspronkelijke layoutrichting van de tekst. De meesten van ons in Nederland zijn boven-naar-onderen, links-naar-rechts gewend. Maar zodra wij dat spiegelen, gaan onze properties dat ook doen. In je voorbeeldbestand heb je al kunnen zien wat `row-reverse` doet. Maar stel dat je writing mode niet de default (top-bottom, left-right) is maar juist (top-bottom, right-left)? Dan zijn je flexbox items *in eerste instantie* al omgekeerd geplaatst. `row-reverse` draait dit om, en plaatst ze juist van links naar rechts.

Probeer het uit:

```
body > div {
  display: -webkit-flexbox; 
  direction: rtl; /* De `writing-mode` property heeft momenteel geen visueel effect in Canary. Dit werkt voor ons voorbeeld. */
  -webkit-flex-flow: row;
  height: 500px;
  padding: 1em;
  background-color: gray;
}
```

Verander `row` nu in `row-reverse`. Zie je wat er gebeurt?

Verwarrend? Een beetje, maar over het algemeen zullen de meeste developers kunnen uitgaan van de default writing mode.

Om te begrijpen welk effect een aantal Flexbox properties hebben op flexbox items is het belangrijk om te begrijpen wat de *main axis* en *cross axis* zijn. De *main axis* is de as waarop de flexbox items worden geplaatst. Met andere woorden, als de flexbox items horizontaal (`row`, dus) worden geplaatst, dan is de horizontale as de *main axis*. Verticaal is dan de *cross axis*. Bij verticaal geplaatste flexbox items is dat precies andersom: de *main axis* is verticaal en de *cross axis* is horizontaal.

Mja. Dat is lastig uitleggen. Laten we een plaatje tekenen:



![Bij horizontaal geplaatste items is de main axis horizontaal.](https://fronteers.nl/_img/2011/12/axis.png)

Onthou main axis en cross axis; we komen er straks op terug.

# Order! Order in the court!

Laten we kijken naar een andere property die belooft dat *source order* ooit onbelangrijk wordt: `flex-order`.

In je voorbeeld code, zorg ervoor dat je `flex-flow` op `row` hebt gezet, en `direction: rtl;` hebt verwijderd. Als het goed is, heb je drie flexbox items, A, B en C, linksboven in `body > div`. Stel je voor dat we die volgorde niet goed vinden; we willen juist A-C-B. Hiervoor gebruiken we `flex-order`:

```
div > div:nth-child(2) { /* Ja, je zou een class of ID ook kunnen gebruiken, maar goed. */
  -webkit-flex-order: 1;
}
```

Kijk maar even in je browser; de volgorde van de flexbox items zou nu A-C-B moeten zijn.

`flex-order` plaatst flexbox items in *geordende groepen*. Boxes zonder expliciete `flex-order` zitten in groep 0, en blijven in volgorde van broncode. In dit geval wordt de tweede `div`, B, in groep 1 geplaatst. A en C blijven in groep 0, in broncode volgorde (A-C dus). Als we B-A-C wilden, dan hadden we B in groep 0 kunnen laten, en A en C in groep 1 kunnen plaatsen:

```
div > div:first-child,
div > div:last-child {
  -webkit-flex-order: 1;
}
```

# Flexibiliteit

Eén van de mooiste aspecten van Flexbox is waar de naam vandaan komt: flexibiliteit. Wij kunnen bepalen wat er met overblijvende ruimte in onze `body > div` (in dit geval) gebeurt. We kunnen het verdelen tussen de flexbox items, of we kunnen één of meer van de flexbox items *flexible maken* om die ruimte te gebruiken. Laten we eerst naar flexibiliteit kijken, dan komen we zo terug op het verdelen van de ruimte.

Stel dat onze drie flexbox items knoppen zijn in een web app, die ook voor mobiel zal worden gebruikt. Soms hebben we er drie, en soms hebben we er twee. Wij willen eigenlijk zeggen: “Het maakt niet uit hoeveel van jullie er zijn, ik wil dat jullie allemaal even groot worden, en alle beschikbare ruimte gebruiken.” Zoiets zonder Flexbox wordt bijna uitsluitend met JavaScript gedaan. Maar kijk wat er gebeurt als wij onze flexbox items flexibel maken met de `flex()` functie:

```
div > div {
  /* width: 100px; */
  width: -webkit-flex(1 0 100px);
  height: 100px;
  background-color: pink;
}
```

De `flex()` functie kan als waarde voor `width` en `height` worden toegepast. `flex()` accepteert drie waarden: positieve flex, negatieve flex en *preferred size*. De laatste twee waarden hoefde ik niet te geven; 0 is de default voor negatieve flex en 0px is de default voor *preferred size*. In elk geval werkt `flex()` als volgt:

1. De flexbox items krijgen de *preferred width*;
2. Als er dan nog ruimte over is in de parent, wordt die ruimte verdeeld aan de hand van de positieve flex waarde;
3. Als de flexbox items op preferred width overflow veroorzaken (ze zijn gezamenlijk breder dan de parent), dan wordt de negatieve flex waarde gebruikt. Let wel, de negatieve flex waarde is een positief cijfer (bijv. 2 en niet -2).

Een positieve waarde van 1 betekent min of meer “een gelijk deel van de beschikbare ruimte”. Een waarde van 2 zou betekenen “twee keer zoveel als de ruimte die items met `flex(1)` hebben”. Niet helemaal ”twee delen whisky, één deel cola” dus. Laten we het proberen. Typ de volgende code in *onder* je regels voor `div > div`:

```
div > div:first-child,
div > div:last-child {
  width: -webkit-flex(2);
  background-color: magenta; /* Hierdoor kunnen we het verschil iets beter zien. Plus, het doet zeer aan je ogen. */
}
```

Als je nu in je browser kijkt, zie je dat de eerste en de laatste flexbox items niet twee delen van de beschikbare ruimte hebben, maar *twee keer zoveel* als de middelste, die `flex(1)` heeft. Ben jij niet blij dat je dit niet in een browser hoeft te implementeren?

Let wel, dit betekent ook niet dat de twee buitenste flexbox items *twee keer zo breed* zijn als de middelste. Het gaat alleen om hoe de beschikbare ruimte in de parent wordt toegevoegd aan de breedte van de flexbox items.

Verwijder die regels weer. Haal nu één van de `div`s weg en kijk wat er dan gebeurt. Zet haar daarna terug, want we hebben haar nog nodig.

Er zijn veel meer details over `flex()`, en ook over de andere properties. Deze vind je allemaal in de spec. Heerlijk leesvoer na een avondje stappen.

# Het uitlijnen van flexbox items

Heb je alles onthouden over main axis en cross axis? Mooi. `flex-pack` bepaalt namelijk het uitlijnen van elementen langs de main axis. In ons voorbeeldbestandje is dat horizontaal. Om dit effect goed te bekijken, halen we `flex()` weg en zetten we de `width` weer op `100px`:

```
div > div {
  width: 100px;
  height: 100px;
  background-color: pink;
}
```

`flex-pack` accepteert vier waarden: `start`, `end`, `justify` en `center`. Heel helder. Laten we ze centreren. Dit doen we op de parent:

```
body > div {
  display: -webkit-flexbox; 
  -webkit-flex-flow: row;
  -webkit-flex-pack: center; /* <-- */
  height: 500px;
  padding: 1em;
  background-color: gray;
}
```

Speel met de andere waarden totdat je het leuk vindt.

Uiteraard is er een property die het uitlijnen regelt op de *cross axis*: `flex-align`. De mogelijke waarden verschillen een beetje, maar het grootste verschil is dat `flex-align` op de *flexbox items* wordt toegepast en niet op de flexbox zelf (m.a.w. niet op de parent).

```
div > div {
  width: 100px;
  height: 100px;
  background-color: pink;
  -webkit-flex-align: center; /* Ook: start | end | baseline | stretch  <-- Probeer deze waarden ook! */
}
```

Niet alle waarden werken nog in Canary, maar je kunt ervan uit gaan dat naarmate de spec definitief wordt, de implementatie vrij snel zal komen. Er is heel veel belangstelling voor Flexbox onder de browsermakers!

# Genoeg! Tijd om te spelen

Er zijn nog een paar properties die te maken hebben met multi-line flexboxes, maar omdat we de meeste dingen daarvan niet kunnen uitproberen, laten we het hierbij. Hopelijk hebben we hier voldoende behandeld dat je met Flexbox kunt spelen. Probeer na te denken over mogelijke toepassingen. Hoe zou je Flexbox in kunnen zetten bij een “responsive design”? Welke mogelijkheden biedt dit voor het stijlen van formulier layout? Navigatie?

Dit soort specs zijn geweldig om mee te experimenteren. En ondersteuning komt sneller dan je misschien denkt.

Veel plezier ermee (en fijne feestdagen) :)

(TODO: Over Stephen Hay
2011/12/stephen-hay.jpg
[Stephen](https://twitter.com/stephenhay) is een designer/developer met een sterke interesse in CSS en multi-platform design. Hij spreekt en schrijft ook graag over deze onderwerpen.
Donatie: ICCF Holland
Overal (en veel in ons vakgebied) kun je zien dat de inspanningen van enkelingen en kleine groepen mensen een groot verschil kunnen maken. [ICCF Holland](http://iccf-holland.org/) is ook zo'n groep: vrijwilligers die kinderen helpen in Kibaale, Uganda. Als je de Vim text editor gebruikt, dan heb je er vast van gehoord: Vim is “charityware”; gebruikers worden gevraagd om een donatie te doen aan ICCF Holland. 
Het project is kleinschalig, en dat spreekt mij erg aan. 99% van al het gedoneerde geld gaat naar het project. Mocht je meer willen weten over dit project: op de website kun je foto's van het project zien en bezoekverslagen lezen.)
