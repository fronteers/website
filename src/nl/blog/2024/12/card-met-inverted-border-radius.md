---
title: Een card met een ‘inverted border radius’
date: 2024-12-31
author: Imani Dap
summary: De inverted border radius is een leuk effect wat je toe kan voegen aan diverse web componenten. In deze blogpost lopen we stap voor stap door een mogelijke implementatie gebaseerd op HTML & CSS.
categories:
    - Adventskalender
key: advent-2024-maniflames
---
Afgelopen maand heb ik mogen werken aan website met een minimalistisch maar experimenteel ontwerp. De grafisch ontwerpers, die meer gefocust waren op print dan op digitaal kwamen met idee voor een card met een kleine edge case die ik zelf nog niet eerder was tegen gekomen. De kaart ziet er ongeveer zo uit:

![Een website card bestaande uit een groot rechthoekig vlak met ronde hoeken en een overlapende titel verspreid over drie regels. Elke regel van de titel lijkt uit de kaart gesneden met 'bolle' en 'holle' ronde hoeken.](/_img/blog/2024/12/inverted-border-radius/card-final.png)

Het is een klein detail maar er zijn een aantal randen die niet zomaar gestyled kunnen worden zoals in het design. Wat ook niet helpt is dat de tekst in een card dynamisch is, hierdoor is het niet mogelijk om een SVG achter de tekst te plaatsten.

![Een website card bestaande uit een groot rechthoekig vlak met ronde hoeken en een overlapende titel verspreid over drie regels. Elke regel van de titel lijkt uit de kaart gesneden met 'bolle' en 'holle' ronde hoeken. Alle holle hoeken zijn omcirkeld.](/_img/blog/2024/12/inverted-border-radius/card-highlighted-inverted-borders.jpg)

Juist omdat de rest van de website zo minimaal was in het design heb ik ervoor gekozen om op zijn minst te proberen dit visuele probleem op te lossen.

## De ‘inverted border radius’
Het viel me al snel op dat ik eigenlijk het omgekeerde van de css-property `border-radius` wou hebben en na wat googlen werd het duidelijk dat de meesten deze vorm een ‘inverted border radius’ noemen. 

De benaming is niet zo gek. Als je inzoomt op een hoekje met een border radius en een hoekje met een inverted border radius zie je dat de boogjes van die hoeken precies de een tegengestelde kant op.

![Er worden twee vierkanten met verschillende afwerkingen van de rechter bovenhoek getoond. Het vierkant aan de linker kant is afgewerkt met een border-radius en heeft daardoor een bolle hoek. Het vierkant aan de rechter kant is afgewerkt met een inverted border-radius en heeft daardoor een holle hoek.](/_img/blog/2024/12/inverted-border-radius/normal-vs-inverted.jpg)

Je kunt helaas geen negatieve waarde instellen voor de `border-radius` property. Gelukkig is er toch nog een truc om het design tot leven te laten komen.

## Het bouwen van de basis
De basis van de card bestaat uit drie belangrijke onderdelen. Allereerst een pagina met een solide achtergrond kleur. Vervolgens een simpel vlak met een andere achtergrond kleur. En tot slot een overlappende titel waarvan elk woord op een unieke regel staat. Elke regel van de titel krijgt een achtergrondkleur die overeenkomt met de achtergrondkleur van de pagina. 

Er zijn meerdere manieren waarop je dit zou kunnen implementeren maar ik heb code gebruikt die er ongeveer zo uit ziet:

`index.html`
```html
<div class="c-card">
    <div class="c-card__media"></div>
    <h3 class="c-card__title">
        <div>Enjoy</div>
        <div>the</div>
        <div>holidays</div>
    </h3>
</div>
```

`main.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');

:root {
  --color-background: #B7B8F8;
  --color-primary: #1A247B;
  --color-highlight: #EF8170;
  --color-text: #FFFFFF;
}

body {
    min-height: 100vh;
    display: grid;
    justify-content: center;
    align-content: center;
    background: var(--color-background);
    font-family: "Syncopate", serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1.8em;
    text-transform: uppercase;
}

.c-card {
    position: relative;
}

.c-card .c-card__media {
    width: 356px;
    height: 396px;
    background: var(--color-primary);
    border-radius: 8px;
}

.c-card .c-card__title {
    position: absolute;
    bottom: 0px;
    margin: 0;
    color: var(--color-text);
}

.c-card .c-card__title > div {
    position: relative;
    width: fit-content;
    padding-top: 0.2em;
    padding-right: 0.2em;
    background: var(--color-background);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}
```
![Een website card bestaande uit een groot rechthoekig vlak met ronde hoeken en een overlapende titel verspreid over drie regels. Elke regel van de titel lijkt uit de kaart gesneden met 'bolle' hoeken.](/_img/blog/2024/12/inverted-border-radius/card-without-inverted-border-radius.png)

Het resultaat is het gewenste resultaat maar dan zonder de ‘uitdagende hoekjes’.

## Het toevoegen van de eerste inverted border radius

Nu de basis van de card staat kunnen we de inverted border radius aan een aantal hoekjes toevoegen. Het is het makkelijkst om er eerst het uiterst linkse hoekje toe te voegen en daarna uit te breiden.

![Een website card bestaande uit een groot rechthoekig vlak met ronde hoeken en een overlapende titel verspreid over drie regels. Elke regel van de titel lijkt uit de kaart gesneden met 'bolle' en 'holle' ronde hoeken. De eerste holle hoek is omcirkeld.](/_img/blog/2024/12/inverted-border-radius/card-highlighted-first-border-radius.jpg)

Het hoekje kan gemaakt worden in vier stappen.

### 1. Geen border radius

Zorg ervoor dat het hoekje waarmee je gaat werken geen border radius heeft. In dit geval gaat het om de linker bovenhoek van de eerste regel die in de titel zit. Omdat de linker bovenhoek geen border radius heeft hoeven we nog niets te doen. 

### 2. Maak een pseudo element

Om de vorm van een inverted border te maken op de gewenste plek hebben we een pseudo element nodig. Dit pseudo element maakt niet de uiteindelijke vorm maar de vorm waarmee we die vorm kunnen uitsnijden. Het is nu even handig om hem nog te kunnen zien, daarom geven we het een leuk kleurtje.

`index.html`
```html
<h3 class="c-card__title">
    <div class="--inverted-border-radius --top-left">Enjoy</div>
    <div>the</div>
    <div>holidays</div>
</h3>
```

`main.css`
```css
.c-card .c-card__title .--inverted-border-radius.--top-left::before {
    top: 0;
    transform: translateY(-100%);
    border-bottom-left-radius: 8px;
    background: var(--color-highlight);
}
```

![Een close up van de card waarbij een rood psuedo element met een ronde hoek zichbaar is op plek waar de eerste holle hoek uit eindelijk geplaatst moet worden. Er is een gat tussen de rand van de card en het pseudo element.](/_img/blog/2024/12/inverted-border-radius/card-closeup-pseudo-element.png)

### 3. Geef het psuedo element een shadow

De daadwerkelijke vorm van de inverted border kunnen we naar voren brengen door een shadow toe te voegen aan het pseudo element. De shadow heeft dus dezelfde kleur nodig Het pseudo element zelf is dus een soort masker omdat een shadow altijd onder een element wordt geplaatst.

`main.css`
```css
.c-card .c-card__title .--inverted-border-radius.--top-left::before {
    top: 0;
    transform: translateY(-100%);
    border-bottom-left-radius: 8px;
    background: var(--color-highlight);
    /* only the property below is new */
    box-shadow: -3px 2px 0 0 var(--color-background); 
}
```

![Een close up van de card waarbij een rood psuedo element met een ronde hoek zichbaar is op plek waar de eerste holle hoek uit eindelijk geplaatst moet worden. Het gat tussen de rand van de card en het psuedo element is nu opgevuld met de kleur van de shadow.](/_img/blog/2024/12/inverted-border-radius/card-closeup-pseudo-element-and-shadow.png)

### 4. Verberg het pseudo element

Nu je de juiste vorm hebt gemaakt kun je het psuedo element ‘verbergen’. De makkelijkste manier om dit te doen is door de achtergrond kleur te veranderen in `transparent`.

`main.css`
```css
.c-card .c-card__title .--inverted-border-radius.--top-left::before {
    top: 0;
    transform: translateY(-100%);
    border-bottom-left-radius: 8px;
     /* only the value property below has been changed */
    background: transparent;
    box-shadow: -3px 2px 0 0 var(--color-background);
}
```

![Een close up van de card waarbij een holle hoek zichtbaar is.](/_img/blog/2024/12/inverted-border-radius/card-closeup-first-inverted-border-radius.png)

## De laatste hoekjes plaatsen

In dit ontwerp zijn er drie unieke hoeken die voorkomen. De linker bovenhoek die we net hebben gemaakt, de rechterbovenhoek te zien in de tweede regel en de rechter onderhoek te zien in de tweede en onderste regel. De code voor deze hoeken is voor een groot gedeelte hetzelfde. Alleen de niet afgeronde hoek en de richting van de schaduw zijn anders.

`index.html`
```html
<div class="c-card">
    <div class="c-card__media"></div>
    <h3 class="c-card__title">
        <div class="--inverted-border-radius --top-left">Enjoy</div>
        <div class="--inverted-border-radius --top-right --bottom-right">the</div>
        <div class="--inverted-border-radius --bottom-right">holidays</div>
    </h3>
</div>
```

`main.css`
```css
.c-card .c-card__title .--inverted-border-radius.--top-right {
    border-top-right-radius: 0;
}

.c-card .c-card__title .--inverted-border-radius.--top-right::before {
    top: 0;
    right: 0;
    transform: translate(100%);
    background: transparent;
    border-top-left-radius: 8px;
    box-shadow: -3px -2px 0 0 var(--color-background);
}

.c-card .c-card__title .--inverted-border-radius.--bottom-right {
    border-bottom-right-radius: 0;
}

.c-card .c-card__title .--inverted-border-radius.--bottom-right::after {
    bottom: 0;
    right: 0;
    transform: translate(100%);
    background: transparent;
    border-bottom-left-radius: 8px;
    box-shadow: -3px 2px 0 0 var(--color-background);
}
```

Geniet van het resultaat!
{% codepen "MYgpmye" "Inverted border radius" %}