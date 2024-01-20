---
title: 'CSS statistieken om je codebase te verbeteren'
date: 2018-12-13
author: Bart Veneman
categories:
    - Adventskalender
---

Front-end is makkelijk, CSS helemaal. Toch valt het veel developers niet mee om complexiteit de baas te blijven bij groeiende CSS codebases. Zeker wanneer met meerdere personen en teams aan een project gewerkt wordt, is het lastig om bij te houden en te controleren of iedereen zich nog wel aan de afspraken houdt. Het klassieke voorbeeld is de monoliet van duizenden regels code die [meer dan 50 tinten grijs](https://www.projectwallace.com/printdeal/drukzo/colors) bevat of [ruim 100 unieke font-sizes](https://www.projectwallace.com/teamwallace/smashing-magazine/fontsizes). Gelukkig zijn er tools voorhanden die je inzicht kunnen geven in de CSS die jouw applicatie uitspuugt. Deze tools analyseren je CSS en genereren een rapport met bijvoorbeeld de filesize, het aantal selectors, de unieke kleuren en ga zo maar door. Tijdens [een presentatie](https://codepen.io/bartveneman/pen/OPMevb) die ik hierover een aantal jaar geleden gaf, bleek de interesse voor CSS statistiek-tools groot, dus hieronder wat tips om CSS statistieken in te zetten om de kwaliteit van je codebase inzichtelijk te maken en te verbeteren.

## De tools

Allereerst, de tools. Zelf gebruik ik de volgende tools om statistieken over mijn CSS te laten genereren:

-   [CSS Stats](https://cssstats.com/) - Webapp en CLI tool om verschillende statistieken over je CSS te visualiseren
-   [Parker](https://github.com/katiefenn/parker) - CLI tool/node module voor CSS statistieken
-   [Project Wallace CSS Analyzer](https://github.com/bartveneman/wallace-cli) - CLI tool voor CSS statistieken. [Op de website](https://www.projectwallace.com/) kan ik bijhouden hoe de statistieken veranderen naarmate de tijd verstrijkt.

De ene tool is niet per definitie beter dan de andere. Het is maar wat je er mee wilt bereiken. Voor dit artikel kijken we voornamelijk naar het meten van complexiteit en kwaliteit.

## Complexiteit meten

‘Echte’ developers hebben het al heel lang, maar wij CSS-nerds zijn nog een beetje verstoken van tooling zoals het meten van bijvoorbeeld _[cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity)_. Gelukkig kunnen we met wat statistieken wel vergelijkbare metrics opstellen. Enkele belangrijke metrics die ik zelf toepas om de complexiteit van een codebase te bepalen zijn:

-   _Gemiddeld aantal identifiers per selector:_ Lange selectors betekenen dat je CSS nauw verbonden is aan de HTML. Dat betekent dat je styling stuk kan gaan als een kleine wijziging wordt gedaan in je template. Eigenlijk is elke identifier in je selector een if-statement en daarom is deze metric voor mij min of meer gelijk aan het meten van _cyclomatic complexity_.

```
.my-selector {} /* 1 identifier */
.my #super [complex^="selector"] > with ~ many :identifiers {} /* 6 identifiers */
```

-   _Average cohesion:_ Het gemiddeld aantal declarations per ruleset. Een laag gemiddelde is een indicatie van complexe ‘objecten’.

```
/* 1 rule, 1 declaration => cohesion = 1 */
.text-center {
    text-align: center;
}

/* 1 rule, 8 declarations => cohesion = (1 / 8) = 0.125 */
.button {
    background-color: blue;
    color: white;
    padding: 1em;
    border: 1px solid;
    display: inline-block;
    font-size: normal;
    font-weight: bold;
    text-decoration: none;
}
```

-   _Filesize:_ Hoe groter je CSS, hoe complexer…
-   _Importants:_ Hoewel een `!important` op zijn tijd zeker niet verkeerd is, kan een hoog aantal !importants duiden op een moeilijk onderhoudbaar stuk CSS.
-   _Aantal unieke kleuren/font-families/font-sizes:_ Projecten die honderden unieke kleuren en font-sizes gebruiken zijn lastig. Wanneer weet je of je de juiste `font-size` of `color` hebt? En is de grijs van de header nou de goede, of die van de footer? Ach, ik gebruik de color picker van Photoshop wel weer om een kleurtje uit het design te pikken…
-   _Aantal unieke @media queries:_ Zoals met elke metric is het lastig te bepalen wat goed is en wat slecht, maar als ik 150 unieke `@media` queries zie, dan weet ik dat het lastig gokken wordt om de juiste te gebruiken.
-   _Specificity graph:_ Het gebruik van de [specificity graph](https://csswizardry.com/2014/10/the-specificity-graph/) is handig als je wilt kunnen zien waar complexe selectors zich in je codebase bevinden. Daar zijn gelukkig ook [tools](https://isellsoap.github.io/specificity-visualizer/) voor!

## Kwaliteit meten

Wat de term kwaliteit inhoudt verschilt per project (evenals complexiteit overigens), maar voor veel projecten gelden de volgende punten zeker:

-   _Branding - aantal unieke kleuren/font-families/font-sizes:_ CSS gaat voornamelijk om branding en het mooi maken van webpagina’s. Vormgevers doen hun best op het maken van mockups die wij weer omzetten in code. Daarbij gaat wel eens een detail verloren en kan het gebeuren dat het eindproduct andere kleuren bevat dan de vormgever voor ogen had. Ik heb voor bedrijven gewerkt waar geëist werd dat alle kleuren en fonts voldeden aan de voorgeschreven _brand guide_. Gelukkig had ik [tools](https://github.com/bartveneman/gromit-cli) om aan te tonen dat alles netjes binnen de kaders was.
-   _Methodologie - cohesion, gemiddeld aantal identifiers:_ Een opkomende trend in het CSS-landschap is utility-based CSS. Kort gezegd is dat een stylesheet vol classes die een heel klein dingetje doen. Een kenmerk van zo’n library is dan dus ook dat de cohesion heel dicht bij 1 ligt, evenals het gemiddeld aantal identifiers per selector. Goede metrics om aan te tonen dat je niet afwijkt van je gekozen strategie!

```
/*
  Voorbeeld uit Tailwind CSS waar 1 rule
  1 selector en 1 declaration heeft:
  https://tailwindcss.com/docs/text-color
*/
.text-transparent   { color: transparent; }
.text-black         { color: #22292f; }
  .text-grey-darkest  { color: #3d4852; }
```

## Bugs opsporen

Soms kom je onverwachte dingen tegen in je CSS statistieken. Rare selectors of onverwacht complexe declarations. Een greep uit een aantal vondsten die ik de afgelopen tijd in eigen of andermans codebases deed:

-   Fronteers.nl bevat [20 lege rulesets](https://www.projectwallace.com/bartveneman/fronteers/stylesheet) 😱
-   Bol.com heeft een wel [heel rare selector](https://www.projectwallace.com/bartveneman/bolcom/selectors): `Bulk beeldmerk 22 mei 2017 .flexbanner--billboard .flexbanner__button.c-btn-tertiary--small.mini_details:before`
-   Een project op mijn werk waar een selector als volgt werd getoond als meest complex: `input[type=checkbox]:checked+.label input[type=radio]+label:focus:after`. Een gevalletje waar we een foutje hadden gemaakt met nesting in de preprocessor (inputs nesten werkt doorgaans niet zo best). Gelukkig zagen we de fout op tijd dankzij [Project Wallace](https://www.projectwallace.com/adwise/sportdirect/imports/20181001090916777#selectors.identifiers.top).
-   Facebook heeft [vier verschillende manieren](https://www.projectwallace.com/teamwallace/facebookcom/colors#duplicate:%23fff) om de kleur wit te beschrijven. Dat is niet noodzakelijk verkeerd, maar het kan een teken zijn van [een aantal issues](https://www.projectwallace.com/blog/detecting-color-aliases/) in de codebase, zoals bijvoorbeeld een kapotte CSS minifier.
-   Catawiki had op enig moment meer dan 4095 selectors ([IE selector limit](https://stackoverflow.com/a/9906889), iemand?) en wetende dat zij IE8+ supporten in verband met een breed internationaal publiek, betekende het dat bezoekers met IE9 niet alle CSS voorgeschoteld kregen wat mogelijk tot bugs geleid heeft. Na een melding hebben zij hun stylesheet in tweeën gesplitst en was het euvel voorlopig verholpen.

## Tot slot

Voor alle metrics die deze tools genereren geldt dat er niet noodzakelijk een goed of fout is. Er zijn developers die zweren bij het nesten van selectors met behulp van preprocessors en er zijn developers die dat haten. Zo zijn er ook mensen die fel gekant zijn tegen het gebruik van `!important` en mensen die het inzetten om hun utility classes meer kracht bij te zetten. Wat je voorkeur ook is, deze en andere tools kunnen je helpen om de gevolgen van jouw keuzes inzichtelijk te maken voor jezelf, maar hopelijk ook voor anderen. Doe er je voordeel mee.

Wil je meer lezen? Hier enkele leestips:

-   [Improving your CSS with Parker](https://csswizardry.com/2016/06/improving-your-css-with-parker/)
-   [Project Wallace Blog](https://www.projectwalace.com/blog)
-   [Understanding CSS Stats: How to Make the Most of the Numbers](https://webdesign.tutsplus.com/tutorials/understanding-css-stats-how-to-make-the-most-of-the-numbers--cms-22756)

## Over Bart Veneman

<img src="/_img/adventskalender/bart.jpeg" alt="Foto van bart" class="floating-portrait">
Bart is frontend developer met een sterke voorliefde voor CSS op elke schaal, maar is ook niet vies van een portie backend op zijn tijd. Al zijn vaardigheden bundelt hij in het bouwen van [ProjectWallace.com](http://projectwallace.com/), een platform voor CSS analytics.

Donatie: KiKa!
