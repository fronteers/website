---
title: Design Tokens gebruiken voor de Theming van een website
date: 2022-12-19
author: Sanne Peters
summary: 'De kans is groot dat je hier terecht kwam omdat je op zoek was naar een effeciente manier om theming toe te passen in een website. Om te beginnen is het belangrijk om duidelijk te krijgen wat er precies met Theming en Design Tokens bedoeld wordt.'
categories:
    - Adventskalender
---

De kans is groot dat je hier terecht kwam omdat je op zoek was naar een effeciente manier om theming toe te passen in een website. Om te beginnen is het belangrijk om duidelijk te krijgen wat er precies met Theming en Design Tokens bedoeld wordt.

## Wat is Theming?

Theming is een techniek binnen software development waarbij je op basis van een voorgedefineerd kleurenschema de vormgeving van die website aan past.

In de praktijk kom je theming vaker tegen in UI libraries, zoals [Chakra UI](https://chakra-ui.com/), [Bootstrap](https://getbootstrap.com/) en [TailwindCSS](https://tailwindcss.com/). Op die manier kan je de uiteindelijke vormgeving van de UI componenten aanpassen, maar helaas zitten daar dan ook weer grenzen aan.

Wat vaker het geval is dat je zaken zoals de primaire, secundaire kleuren kan aangeven en daarnaast lettertypes voor kopjes en normale tekst. De daadwerkelijk opties verschillen natuurlijk per UI library, maar het is vaker lastig te controleren waar hoe die kleuren en lettertypes toegepast worden.

## Wat zijn Design Tokens?

Design Tokens is een werkwijze die vaak als onderdeel van Design Systems gebruikt wordt. Een Design System is methode waarmee de vormgeving van een merk (brand in het Engels) op een systematische manier toegepast kan worden op al haar uitingen. Denk hier bij aan websites en apps. Wat het Design System in feite doet is alle ideeën en logica van het ontwerp vast leggen in richtlijnen en code. Op die manier kan het werk en de moeite die gedaan is het ontwerp beter gewaarborgd worden, omdat het Design System dan als een automatische autoriteit geldt als het aankomt op ontwerp.

In zo’n systeem is het essentieel dat zaken zoals typografie (lettertypes e.d.), kleurgebruik en maatvoering (marges, paddings en groottes) gemakkelijk, op 1 plaats, beheerd en gedefinieerd kunnen worden.

Dit is precies wat Design Tokens doen. Het zijn als het ware globale variabelen (binnen het systeem) waarin al deze zaken als waarden opgeslagen zijn. Een bijkomende kracht van deze tokens is dan direct ook dat een waarde een betekenis meekrijgt. Neem als voorbeeld deze css code voor het stylen van een link:

```
/*
De link heeft voor de tekst een rood-paarse kleur en voor de lijn
onder de tekst een ietwat andere rood-paarse kleur. De gedachte
achter de kleurwaarden is echter niet duidelijk.
Als in, waar zijn deze kleuren op gebaseerd?
*/

a[href] {
    display: inline-block;
    color: #ff4400;
    border-bottom: 2px solid #ffdd12;
}

/*
Door de kleurwaarden te definiëren als tokens (effectief hier als
css-variabelen) koppel je de kleurwaarde aan een betekenis.
Op die manier wordt het duidelijker wat het idee achter de
vormgeving van de link is. Met andere woorden, door het gebruiken
van tokens documenteer je impliciet de betekenis van de tekstkleur
en de onderlijningskleur van deze link.
*/

:root {
    --PerenComputer-colour-brand-main-text: #ff4400;
    --PerenComputer-colour-brand-main-lines: #ffdd12;
}

a[href] {
    display: inline-block;
    color: var(--PerenComputer-colour-brand-main-text);
    border-bottom: 2px solid var(--PerenComputer-colour-brand-main-lines);
}
```

## Design Tokens voor Theming

Er zit een overlap tussen hoe standaard Theming gedaan wordt (zoals in UI libraries) en hoe Design Tokens gebruikt worden. Beiden gebruiken in de basis een configuratie (bestand of data-object), waarin alle waarden gekoppeld zijn aan definities (variabelen of properties).

Hier is een voorbeeld om het verschil tussen Theming zonder design en met design tokens uit te leggen:

```
/*
Dit is een voorbeeld van hoe theming werkt voor de UI library Chakra UI.
In dit voorbeeld pas je het bestaande standaard thema aan door de kleur
tokens voor success, error, primary en secondary aan te passen.
**/

import { extendTheme } from '@chakra-ui/react'

/*
red.[nummer] refereert naar een voorgedefineerd kleurenschema van
Chakra UI: <https://chakra-ui.com/docs/styled-system/theme>
*/

const theme = extendTheme({
  semanticTokens: {
    colors: {
      error: 'red.500',
      success: 'green.500',
      primary: 'red.500',
      secondary: 'yellow.800',
    },
  },
})
```

In het bovenstaande voorbeeld van Chakra UI pas je het standaard kleuren schema aan naar je eigen wensen. Echter ontstaat er hier een subtiel probleem met betrekking tot schaalbaarheid. De namen error en success geven enkel dat de kleuren op een bepaalde manier gebruikt worden voor communicatie van de success en error staat van iets, maar niet hoe en op wat voor manier. En dan hebben we het nog niet eens over de kleur definities primary en secondary. Deze twee vertellen je nog minder over hoe, waar en wanneer ze wel en niet gebruikt worden.

Op een kleine schaal zal dit niet voor grote problemen zorgen en is deze manier van werken daarom ook vaker ok, maar zodra de complexiteit omhoog gaat (meer code, meer componenten, grotere codebase), wordt het steeds lastiger om kleuren correct toe te passen, omdat het ook onduidelijk hoe kleuren precies gebruikt moeten worden. M.a.w. zorgen dat het kleurgebruik klopt met de originele intenties van het ontwerp.

## Design Tokens gebruiken binnen Theming

Een methode om hier beter mee om te gaan is door Design Tokens te gaan gebruiken. Omdat Design Tokens juist bedoeld zijn om het gebruik van waarden (zoals kleur) te documenteren krijg je automatisch een meer gestructureerde manier van werken. Neem als voorbeeld hieronder waar het eerdere voorbeeld aangepast is om meer te werken volgens de filosofie van design tokens:

```
import { extendTheme } from '@chakra-ui/react'

/*
Dit is een aangepaste versie van het eerdere voorbeeld
Dit gebruikt nog steeds het kleurenschema van Chakra UI, maar de
naamgevingen van de properties zijn daarentegen gebasseerd op de
functie van de tokens. M.a.w. hoe de waarde gebruikt moet worden.
Let op: niet iedere UI library ondersteunt het defiëneren van
eigen tokens.
Chakra UI ondersteunt dit wel, maar je moet dan nog wel handmatig
deze tokens toepassen op de respectievelijke componenten.
*/

const theme = extendTheme({
  semanticTokens: {
    colors: {
      error: {
        border: 'red.500',
      },
      success: {
	border: 'green.500',
      },
      ctaButton: {
	background: 'red.500',
      },
      button: {
	background: 'yellow.800'
      },
      text: {
	onLightBackground: 'gray.900', // heel donker grijs
	onDarkBackground: 'white'
      },
    },
  },
})
```

Als je Design Tokens voor Theming wilt gaan gebruiken dan is de eerste stap de beste manier vinden voor het definiëren van de token-namen. Een goede basis richtlijn hier is om de naamgeving van de tokens te baseren op waar ze voor gebruikt worden. Een vraag die je jezelf dan kan stellen is bijvoorbeeld hoe wordt `red.500` gebruikt? En waarom? De antwoorden (op basis van ons voorbeeld) zijn dan:

-   -   Als rand (border) kleur bij error meldingen
-   -   Als achtergrondkleur bij Call-to-action knoppen

Met deze basis van naamgeving op basis van functie, kan je vervolgens o.b.v. kleurenpalet (bijvoorbeeld gebaseerd op een ander merk), dezelfde tokens andere waarden geven:

```
import { extendTheme } from '@chakra-ui/react'

/* Pear computer's merk kleuren zijn 'red.500'(primair)
en 'yellow.800'(secundair). */

const PearComputersDesignTokens = {
  colors: {
    error: {
      border: 'red.500', // is de primaire kleur
    },
    success: {
      border: 'green.500',
    },
    ctaButton: {
      background: 'red.500', // is de primaire kleur
    },
    button: {
      background: 'yellow.800',
    },
    text: {
      onLightBackground: 'gray.900', // heel donker grijs
      onDarkBackground: 'white'
    },
  },
}

/* gebruikt oranje (primair en teal (mint-groen, secundair) en
blauw (tertiair), maar pas die anders toe dan Pear Computers.
Let op de achtergrondkleur van de ctaButton. */

const OrangeComputersDesignTokens = {
  colors: {
    error: {
      border: 'orange.700', // is de primaire kleur
    },
    success: {
      border: 'teal.500',
    },
    ctaButton: {
      background: 'teal.500', // is NIET de primaire kleur
    },
    button: {
      background: 'blue.800',
    },
    text: {
      onLightBackground: 'gray.900', // heel donker grijs
      onDarkBackground: 'white'
    },
  },
}
const theme = extendTheme({
  semanticTokens: OrangeComputersDesignTokens,
})
```

## Conclusie

Je zou kunnen zeggen op basis van de voorbeelden dat Design Tokens in deze context hetzelfde zijn als Theming, maar dat is niet helemaal waar. Ze gedragen zich enkel alleen maar zo. De kracht van het gebruiken van Design Tokens, voor het Themen van een applicatie of website, ligt in de methode van werken. Deze werkwijze dwingt, als het ware, om goed na te denken over de structuur en naamgeving van 1 van de meest basale onderdelen van een website.

Dit betekend natuurlijk niet dat Design Tokens daarmee altijd de beste oplossing zijn voor Theming. De werkwijze van Design Tokens is namelijk met zo een hoge mate gestructureerd dat het ook meer tijd kost om te implementeren. Dus het loont altijd om eerst te evalueren of er genoeg tijd beschikbaar is om deze werkwijze te hanteren. Zo nee, is een simpelere oplossing misschien beter.

Uiteindelijk is het in ieder project de kunst om de juiste balans tussen elegantie (goede architectuur e.d.) en pragmatisme (_OK_ is soms ook _goed_ genoeg) te vinden.
