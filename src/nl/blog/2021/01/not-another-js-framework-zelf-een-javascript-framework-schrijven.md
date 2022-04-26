---
title: "Not another JS framework - zelf een JavaScript framework schrijven"
date: 2021-01-02
author: Josee Wouters
categories: 
  - Adventskalender
graphic:
  src: pankaj-patel-1IW4HQuauSU-unsplash.jpeg
---
React beter leren. Het staat al een hele tijd op mijn to do list, omdat we op mijn werk met React werken. Ik leer het beste door dingen te doen, maar ik hou niet van korte "Hello World" tutorials van een uurtje waarna je eigenlijk nog niets hebt geleerd. Daarom kreeg ik een studieopdracht op het werk: bouw React na. Mijn eigen JavaScript framework maken... Ik moest even slikken. Dat kan ik toch nooit?! Maar ik liet het even bezinken, kreeg wat eerste instructies en ging toen toch aan de slag. Omdat ik ook goed leer door op te schrijven wat ik heb gedaan, doe ik dat hier. Wellicht inspireert het jou om ook zoiets te proberen.

# Research

Ik begon mijn research - uiteraard - met wat googlen. Ik kwam verschillende tutorials tegen die je er door heen loodsen om je eigen framework te maken, maar de moed zonk me in de schoenen. Oké, ik heb duidelijk een andere aanpak nodig. Ik begon de documentatie van React door te lezen en samen met de eerste instructies die ik had meegekregen - "maak een _render_ functie, gebruik `createElement`" - maakte ik een plan van aanpak.

# Stap 0: Een naam

Naamgeving: soms ook wel het moeilijkste deel van programmeren. Na lang nadenken en geen leuke namen, kies ik voor het meest flauwe dat ik kan bedenken. Ik noem mijn framework Clippy. [Wie kent 'm niet?](https://knowyourmeme.com/memes/clippy)

# Stap 1: Maak een statische render functie

De belangrijkste functie uit React is waarschijnlijk wel `ReactDOM.render()`. Deze functie zorgt ervoor dat React elementen daadwerkelijk getoond worden.

Hier moet ik dus mee beginnen. Allereerst maak ik een index.html met een `<div id="clippy"></div>`. In dit bestand wordt een clippy.js file aangroepen met als enige functie een `render` met een _hard coded_ `div` en een `string` "Hello Clippy".

```
function render() {
    const element = document.createElement("div");
    const content = document.createTextNode("Hello Clippy");
    const clippy = document.getElementById("clippy");
    
    element.appendChild(content);
    clippy.appendChild(element);
}
```

Hé, dat ging me iets makkelijker af dan ik had gedacht! Na een uur of twee van researchen, lezen en aan mijn eigen kunnen twijfelen, had ik dit zo staan. Een mooi voorbeeld dat ik beter gewoon kan beginnen en dingen doen.

# Stap 2: Dynamische content renderen met een `createClippyElement`

Dat het werkt met de te renderen `const` is een goede eerste stap, daar word ik blij van. Maar dit is niet hoe React er uit ziet. Hier wordt meestal JSX voor gebruikt. Dat ziet er bijvoorbeeld zo uit: `const element = <h1>Hello world!</h1>`. Met Babel wordt deze JSX expressie _transpiled_ naar een `React.createElement` functie.

De volgende stap is dus het maken van een `createClippyElement` functie. De functie krijgt drie parameters; een type `string` om aan te geven welk HTML element gerenderd moet worden; een props `object` dat bijvoorbeeld een className of inline styles bevat; en een `array` van children. Een child kan een nieuw `createClippyElement` zijn maar bijvoorbeeld ook een `string` met tekst. Voor nu doet deze functie nog niets anders dan de parameters returnen.

```
function createClippyElement( type, props, children ) {
    return {
        type,
        props,
        children
    }
}
```

De `render` functie moet iets herschreven worden, zodat ik het `createClippyElement` kan meegeven als parameter. Ik besluit om de props nog even achterwege te laten, maar eerst te zorgen dat ik een HTML element met content kan laten renderen.

Dat valt op zich wel mee. Zo zou ik er al zijn:

```
function render( clippy, container ) {
    let element = document.createElement( clippy.type );
    let content = document.createTextNode( clippy.children )
	
    element.appendChild(content);
    clippy.appendChild(container);
}
```

# Stap 3 en 4: render children én grandchildren

Maar wat als een child zelf children heeft? En die ook weer? Ik maak een aparte _recursive_ functie, die dit oppakt. Na een hoop _console loggen_ en een pair programming sessie heb ik het uiteindelijk voor elkaar.

```
function createChildElements( element, children ) {
    for( let i = 0; i < children.length; i++ ) {
        let child = children[ i ];
        let childElement;
        if ( typeof child === "string" ) {
            childElement = document.createTextNode( child );
        }
        if ( typeof child === "object" ) {
            childElement = document.createElement ( child.type );
            if ( child.children.length > 0 ) {
                childElement = createChildElements( childElement, child.children );
            }
        }
        element.appendChild( childElement );
    }
    return element;
}
```

De `render` functie moet nu ook iets aangepast worden om de `createChildElements` functie te gebruiken. Dat ziet er als volgt uit:

```
function render( clippy, container ) {
    let element = document.createElement( clippy.type );
	if( clippy.children.length > 0 ) {
		element = createChildElements( element, clippy.children );	
	}
	container.appendChild( element );
};
```

Met nog geen vijftig regels code kan ik nu mijn eigen componenten maken én renderen.

# Hoe nu verder?

Ik had graag een mooie werkende versie van mijn eigen React-inspired framework willen laten zien, maar... zo ver ben ik nog niet. In dit studieproject gaan nog heel wat uren zitten. Zo wordt het belangrijk om props te kunnen renderen en wil ik er nog in duiken hoe state en lifeycle in React werkt.

Maar op deze manier ben ik er in geslaagd om een opdracht die me onmogelijk leek, toch vorm te geven! Het is voor mij een goede manier om te leren. Ik word uitgedaagd, heb iets om naar toe te werken en leer op mijn eigen manier en tempo. Ideaal!

# Zelf aan de slag?

Wil je zelf eens zien hoe deze functies nu samen komen en zorgen dat je een HTML element kunt renderen op een pagina? Probeer [deze CodePen](https://codepen.io/joseewouters/pen/VwKQdpd) eens uit! Je kunt ook proberen om op basis van mijn code zelf verder te gaan om te kijken of je bijvoorbeeld props kunt toevoegen.
