---
title: A Design Token Carol
date: 2022-12-23
author: Nina Westenbrink
summary: 'Design Tokens implementeren. Waarom zou je eraan willen beginnen? Welke mogelijkheden zijn er? En wat komt men zoal tegen tijdens de implementatie ervan?'
categories:
    - Adventskalender
---

Design Tokens implementeren. Waarom zou je eraan willen beginnen? Welke mogelijkheden zijn er? En wat komt men zoal tegen tijdens de implementatie ervan?

Het is bijna kerst en als ik denk aan kerst, denk ik aan ‘A Christmas Carol’ van Charles Dickens. Eigenlijk denk ik dan ook altijd aan Harry Potter. Elke kerst kijk ik weer een keer alle Harry Potter films. Maar omdat Harry’s Design Tokens niet zo lekker klinkt en ik 7 delen wat lang vind houd ik het bij de 3 delen van ‘a Christmas Carol’. En met dat kerstverhaal in gedachten, schrijf ik dit verhaal met behulp van de 3 design token geesten:

1. De geest van de tijd toen we nog niet wisten wat design tokens waren
2. De geest van de huidige tijd nu we design tokens implementeren
3. De geest van de toekomst die ons laat zien wat we met design tokens kunnen bereiken

## De tijd toen we nog niet wisten wat design tokens waren

De eerste geest neemt ons mee naar de tijd toen we nog niet wisten wat design tokens waren.

-   Toen gebruikten we nog SCSS- en CSS variabelen door elkaar heen.
-   We hadden variabelen voor alle design system kleuren. We hadden ook al variabelen voor lettertypen en scherm groottes. Maar nog niet voor de verschillende lagen, maatvoering en schaduwen van componenten.
-   Bij een rebranding werden er nieuwe kleurnamen bedacht met nieuwe waardes. En dan was het een stoelendans om de nieuwe kleuren op de verouderde kleuren te plotten en ervoor te zorgen dat het design system in overeenstemming met oudere versies bleef.

Er miste nog iets; een structuur voor de benaming van de kleinste herbruikbare onderdelen van het design system. Een methode om die onderdelen te definiëren en te gebruiken in elke technische implementatie. Met als doel de technische implementatie(s) zo agnostisch, droog(DRY) mogelijk en direct overal te kunnen updaten wanneer er wijzigingen zijn.

Voor die redenen zijn Design Tokens bedacht. Design Tokens zijn de kleinste ondeelbare delen van een design system zoals kleuren, tussenruimte en lettergrootte. Design tokens zijn gecreëerd door het Salesforce design system team, en de naam is ook door dat team bedacht.

> Design Tokens are a methodology. IMHO, saying "design tokens are just variables" is like saying "responsive design is just media queries". It's a technology-agnostic architecture and process for scaling design across multiple platforms and devices, including native, and more.

In 2019 is ‘[The Design Tokens Community Group](https://www.w3.org/community/design-tokens/)’ opgericht. Het doel van deze groep is om standaarden te creëeren, waarop producten en design software kunnen steunen voor het delen van de styling onderdelen van een design system.

## Vandaag

De tweede geest neemt ons mee naar het nu. De tijd waarin we bezig zijn om design tokens te implementeren. Design Token standaarden zijn nog niet definitief. En tot die tijd zijn er verschillende mogelijkheden om uit te kiezen en om mee te werken. De opbouw en stappen die men daarin volgt zijn overal wel hetzelfde:

## 1. Structuur en Opbouw

Er zijn verschillende manieren om de taxonomie van design tokens in te richten. Zo een structuur zorgt ervoor dat wanneer (nieuwe) tokens geïntroduceerd worden deze dezelfde opbouw hebben. Een voorbeeld vind je in de afbeelding hieronder. Daar bestaat een token altijd uit een design system naam en categorie en zal een token meestal ook een modifier bevatten. [Bron](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676)

![Een voorbeeld van een structuur van de naamgeving van design tokens](https://fronteers.nl/_img/adventskalender/blog-nina-1.png)

## 2. Naamgeving

Elk design system dat ik ben tegen gekomen hanteert weer andere conventies voor de naamgeving van tokens. Zo maakt [Adobe Spectrum](https://www.notion.so/2317415513144ecc9ff32b5160254bcb) gebruik van de volgende type tokens en lagen: (Zie afbeelding).
[Bron](https://spectrum.adobe.com/page/design-tokens/#Design-token-types)

-   globale tokens als basis voor andere tokens zoals bijvoorbeeld een kleur: `blue-400`
-   alias tokens t.b.v. een activiteit of andere toepassing zoals `cta-background-color` (cta staat hier voor call to action)
-   component specifieke tokens zoals`button-cta-background-color`

![De naamgeving die Adobe Spectrum hanteert](https://fronteers.nl/_img/adventskalender/blog-nina-2.png)

[Salesforce](https://www.notion.so/2317415513144ecc9ff32b5160254bcb) hanteert een iets andere structuur. Ze hebben bijvoorbeeld 2 type tokens en hanteren een andere naamgeving zoals bijvoorbeeld voor kleur: `$palette-blue-95` die als basis dient voor `$brand-background-primary` . En [Shopify](https://www.notion.so/2317415513144ecc9ff32b5160254bcb) hanteert ook een eigen structuur. En die heeft bijvoorbeeld gekozen voor de term interactive in plaats van de afkorting for call to action en houdt het bij 1 token: `p-interactive`.

Welke conventie ook gekozen wordt, leg eerst met het team een aantal voorbeelden vast. Op die manier zorg je ervoor dat de kans op miscommunicatie en misverstanden verkleint.

## 3. Notatie en Verspreiding

Afhankelijk van hoeveel developers/designers design tokens gaan gebruiken, zijn er verschillende keuzes voor het vastleggen van design tokens. Als de tokens gebruikt gaan worden door een kleine groep die allemaal CSS gebruikt kan het voldoende zijn de tokens alleen als CSS variabelen vast te leggen. Je kunt zelfs overwegen design software in te zetten als compiler voor je tokens. Zowel [Figma](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens) als [Sketch](https://sketchelements.com/plugins/design-tokens/) bieden de optie design tokens vanuit je design om te zetten naar CSS variabelen of een JSON bestand. Als de gebruikers groep groter is en ook gebruikt maakt van verschillende technieken zoals SCSS of Flutter dan is het wellicht handiger een standaard notatie als JSON te gebruiken en zelf een compiler te bouwen. Of om een package als [Style Dictionary](https://amzn.github.io/style-dictionary/#/) te implementeren die het voor je naar elk gewenst formaat kan omzetten.

## De Toekomst

De laatste geest van vandaag neemt ons mee naar de toekomst. In de toekomst is er 1 standaard voor het vastleggen en verspreiden van design tokens; de Design Token(DT) Standaard. De DT Standaard is in 2025 ontwikkeld en gepubliceerd door de Design Token community groep. Via elke design software kunnen designers de design tokens van hun merk veilig publiceren en kunnen de design tokens via die weg in elke applicatie worden gebruikt. Wanneer een designer een token update en opslaat is dat direct te zien in de applicaties die gebruik maken van de tokens.

Wil je op de hoogte gehouden worden van die toekomst of bijdragen eraan? Ga dan naar de [Design Token community groep](https://www.w3.org/community/design-tokens/). Wil je af en toe gezellig mee praten over UI en UX op Fronteers Slack? Join dan [de channel #ui-ux](https://fronteersnl.slack.com/archives/C0YCG8058).
