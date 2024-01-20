---
title: 'Code in style!'
date: 2018-12-02
author: Lody Borgers
categories:
    - Adventskalender
---

In een perfecte wereld schrijven we allemaal code zonder bugs, onduidelijkheden of stijlfouten. Discussies over spaties, tabs, haakje-op-dezelfde-regel-of-juist-op-die-eronder bestaan alleen in de fantasieboeken die we aan onze kinderen voorlezen. In een perfecte wereld bestaat alleen perfecte code.

Maar ja, wij leven in de realiteit. In de realiteit schrijven we onze code niet allemaal op dezelfde manier en is onze code zeker niet foutloos!

Wanneer we in teams werken aan dezelfde codebase, is het hebben van verschillende schrijfstijlen bijna problematisch. In plaats van het werken aan nieuwe functionaliteit, of het reactoren van oude code, verspillen we tijd aan het begrijpen van onlogische code en constructies. Tijd die we veel beter kunnen besteden.

Om deze reden bestaan er coding styleguides. Deze richtlijnen geven aan in welke stijl de code moet worden geschreven in een team. De regels gaan vooral over de leesbaarheid en consistentie van code. Hierdoor hebben we minder tijd nodig om wat we lezen te ontleden in ons hoofd en kunnen we sneller begrijpen wat er bestaat.

In mijn werk was het maken van een coding styleguide tot voor kort iets dat “later altijd nog kan”. Ik werkte als enige front-ender in een team dat bestaat uit onder meer back-enders en een business analist. Recentelijk heeft één van mijn teamleden besloten zich meer op full-stack te richten. Dit bracht de coding styleguide vrijwel meteen van de dit-komt-nog-wel-stapel naar de dit-moeten-we-nu-gaan-hebben-stapel.

## Let’s go!

Dit brengt mij naar het onderwerp van deze post: hoe zet je een coding styleguide op in je team? De manier die ik hier beschrijf, is niet de enige, maar gebruik het als leidraad als je zelf in deze situatie komt. We zijn er zelf nog steeds hard mee bezig, maar een aantal stappen zijn inmiddels al wel duidelijk. Let wel op: in deze post richt ik me op JavaScript.

Het maken van een coding styleguide bestaat grofweg uit de volgende stappen:

-   Stel de lint regels op.
-   Configureer deze regels in een lint tool.
-   Configureer Babel (meestal op basis van je `browserslist`).

We gaan door ieder punt heen lopen. Op het einde volgt er natuurlijk een codevoorbeeld. De code in dit artikel is terug te vinden op [GitHub](https://github.com/lodybo/code-in-style-examples).

## It’s not code, they’re more what you’d call “guidelines”

De eerste stap is het precies afspreken volgens welke regels de code geschreven wordt. Het is aan te raden om dit zoveel mogelijk met het hele team af te tikken in een meeting (oké... het worden er waarschijnlijk meer dan één).

Een andere tactiek is het pakken van een bestaande styleguide en bij iedere regel bekijken of je het ermee eens bent. Zo niet, wat zou je eraan veranderen? Dit is handig als niet iedereen tijd heeft, of als er maar een paar mensen zijn die het schrijven van een styleguide als taak hebben. Wanneer je een voorstel hebt geschreven op basis van de bestaande styleguide, is het zaak om deze met het hele team door te spreken. Best practices kan je zo makkelijk introduceren, maar het blijft aan het team om te bepalen of ze die willen volgen.

Wij baseren onze styleguide op die van Airbnb. Het handige aan hun styleguide is hoe gedetailleerd hij is. Niet alle regels hebben we overgenomen (sommige zijn niet eens van toepassing bij onze applicaties), maar in het gesprek met het hele team kunnen we wel uitleggen wáárom we die keuzes hebben gemaakt.

Wat essentieel is: zorg dat de verantwoordelijkheid van de styleguide duidelijk is vastgelegd. Styleguides die achterlopen kunnen misschien wel schadelijker zijn voor code quality dan géén styleguide. Degene die deze verantwoordelijkheid draagt moet zich dan ook geroepen voelen dit bij te houden en _het team er op te wijzen als dit niet wordt nageleefd_.

## Lint All The Code!

Dus, je hebt nu een document met alle regels voor je JavaScript code? Goed, dan gaan we nu instellen dat de linter de codebase ook daadwerkelijk inspecteert of deze regels worden nageleefd. Wij gebruiken ESLint om de code te inspecteren op schrijf- en stijlfouten. Uiteindelijk is het doel om op deze manier kleine foutjes te voorkomen (zoals het gebruiken van een ongedefinieerde variabele) en om consistente code te gebruiken. Er zijn meerdere manieren om ESLint in te zetten, zo zijn er mensen die iedere keer dat ze opslaan de linter draaien in de command line (guilty as charged...). Anderen stellen hun code editor of IDE in alles te linten en weer te geven tijdens het typen. En weer anderen gebruiken ESLint in combinatie met Prettier om hun code automatisch te formatten bij het opslaan. Maak hier gezamenlijk afspraken over zodat degene die de styleguide beheert, weet met welke voorkeuren hij rekening moet houden.

## Shareable configuration

ESLint heeft een lijst [met alle regels](https://eslint.org/docs/rules/) die ondersteund worden. Deze regels kunnen met nummers geconfigureerd worden om niet af te gaan (“0”), een waarschuwing te geven (“1”) of een fout op te gooien (“2”). Het configureren van ESLint gaat door middel van een configuration file (zoals `.eslintrc`). Ieder project dat via ESLint gelint wordt maakt dan gebruik van die configuratie.

Maar... dat moeten we dan met de hand bijhouden en kopiëren?

Gelukkig niet! ESLint ondersteunt het gebruik van [“shareable configs”](https://eslint.org/docs/developer-guide/shareable-configs). Het voordeel van shareable configs is dat deze te publishen zijn in een `npm` registry. Dit is perfect in het onderhouden van een styleguide, omdat de configuratie niet iedere keer gekopieerd wordt en daardoor snel achterloopt. Het enige wat je teamleden hoeven te doen, is de styleguide definiëren als een `devDependency`.

Later gaan we een voorbeeld hiervan bekijken.

## The Power of Babel

Babel wordt gebruikt om transformaties op je code uit te voeren. Babel _transpilet_ ES2015+ JavaScript naar bijv. ES5 JavaScript die oudere browsers kunnen begrijpen. Deze browsers komen meestal uit een `browserslist` en kan je in je project definiëren, maar slimme developers zorgen er natuurlijk voor dat de `browserslist` onderdeel wordt van de styleguide!

Babel kan je configureren om een aantal presets en/of plugins te gebruiken om je code te _transpilen_. Een Babel preset is een verzameling van andere presets en plugins, en als dat nou nét zo klinkt als de shareable configs van ESLint dan heb je het goed: je kan je eigen [Babel presets maken](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/user-handbook.md#making-your-own-preset).

Babel presets hebben dezelfde voordelen als ESLints shareable configs: het zijn `npm` modules die je kan publishen in de `npm` registry (zowel de publieke als de lokale variant als je team die gebruikt). Projecten hoeven dan alleen je preset als een `devDependency` op te geven.

## Practicum

Na al deze theorie is het tijd om dit in de praktijk te gaan gebruiken. Eerder in dit artikel vertelde ik al dat de sharable config van ESLint en de presets van Babel eigenlijk niks meer zijn dan kleine `npm` modules. In het practicum maken we een kleine shareable config van één regel voor ESLint, en een Babel preset met één plugin. We gebruiken deze vervolgens in ons testproject.

Om dit practicum te volgen heb je het volgende nodig:

-   Node (ik gebruik versie 8.9.1)
-   Een code editor of IDE (ik gebruik - heel origineel - VS Code).

## Setup

Om te beginnen maken we drie mappen:

-   `eslint-config-custom-team-rules/`: in dit project definiëren we onze shareable config
-   `babel-preset-custom-team-preset/`: in dit project schrijven we onze eigen Babel preset.
-   `test-project/`: in dit project gebruiken we bovenstaande “styleguide” op de source code.

Ja, de namen van de mappen zijn niet erg spannend. Deal with it.

## ESLint and the Shareable Configs

We beginnen met het schrijven van onze shareable config in ESLint. Hierbij gaan we naar de `eslint-config-custom-team-rules` map en maken we een `npm` module aan:

```
$ cd eslint-config-custom-team-rules
$ npm init -y
```

Voilà, we hebben een basis `npm` module. Tenzij je verder bouwt op bestaande ESLint regels of shareable configs hoef je verder niet veel te doen in `package.json`. Er is wel één ding wat handig is om weer te geven, en dat is de minimale versie van ESLint waar je op bouwt. Voeg daarom het volgende toe aan je `package.json`:

```
"peerDependencies": {
    "eslint": ">= 5"
}
```

Hiermee geef je aan dat ESLint (versie 5 en hoger) nodig is als dependency in het project waar jouw shareable config wordt gebruikt.

Als volgende stap maken we een `index.js` bestand aan waar de regels zich in gaan bevinden:

```
module.exports = {
  rules: {
    'no-eval': 2
  },
  env: {
    'es6': true
  }
}
```

Onze shareable config zegt eigenlijk niks anders dan dit:

-   Onze code wordt uitgevoerd in een omgeving die ES6 code begrijpt.
-   Onze code mag geen `eval()` bevatten.

Deze `npm` module is nu klaar om te publishen.

## `eval()` is `evil()`

Het advies dat vaak gegeven wordt is om `eval()` [niet te gebruiken](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Do_not_ever_use_eval!). Deze post gaat daar niet verder op in, maar de reden dat ik deze regel toch toevoegde is erg simpel: ESLint heeft zelf een regelset met aanbevolen regels (`"extends": eslint:recommended`). In deze regelset is het niet verboden om `eval()` te gebruiken. In een team is het niet ongebruikelijk om het gebruik van `eval()` toch af te laten vangen door de linter. Dit maakte het uitermate geschikt om als voorbeeld configuratie te gebruiken.

## Babel and presets

De volgende stap is om een custom Babel preset te maken. Ook hierbij beginnen we met het maken van een `npm` module:

```
$ cd babel-preset-custom-team-preset
$ npm init -y
```

Onze Babel preset heeft, in tegenstelling tot onze ESLint shareable config, een dependency op een bestaande Babel plugin: `@babel/plugin-transform-arrow-functions`. Deze installeren we eerst in onze preset:

```
$ npm i -D @babel/plugin-transform-arrow-functions
```

Ook in deze module gaan we aangeven dat wij afhankelijk zijn van een `peerDependency`, namelijk `@babel/core` versie 7 of hoger:

```
"peerDependencies": {
    "@babel/core": ">= 7"
}
```

Dan naar de configuratie! We maken eerst een `index.js` aan die de configuratie van onze plugin bevat:

```
module.exports = () => ({
  plugins: [
    require('@babel/plugin-transform-arrow-functions')
  ]
});
```

Als plugin `require`’n we onze Babel plugin.

Let wel op: in het uitgebreide [Babel Handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/user-handbook.md#toc-making-your-own-preset) van James Kyle wordt op het moment van schrijven een voorbeeld gegeven waarbij de configuratie bestaat uit het exporteren van een object. Babel geeft echter een fout als presets dit doen:

```
Error: Plugin/Preset files are not allowed to export objects, only functions.
```

Let er dus op dat je Babel preset een functie exporteert dat zelf een config object `return`’ed.

Deze `npm` module is nu klaar om te publishen in een registry.

## Bringing it together

Nu we onze shareable config en Babel preset hebben gedefinieerd is het tijd om ze in ons project samen te brengen. `cd` naar ons testproject en maak daar een nieuwe `npm` module:

```
$ cd test-project/
$ npm init -y
```

In dit project geven we aan van welke `devDependencies` wij afhankelijk zijn:

```
"devDependencies": {
    "@babel/cli": "^7.1.5",
    "@babel/core": "^7.1.6",
    "eslint": "^5.9.0",
    "eslint-config-custom-team-rules": "^1.0.0",
    "babel-preset-custom-team-preset": "^1.0.0"
}
```

Vervolgens maken we onze project-specifieke ESLint configuratie in`.eslintrc`:

```
{
  "extends": "custom-team-rules"
}
```

In deze configuratie geven we aan dat wij verder bouwen op onze shareable config. Je hebt vast gemerkt dat we overal hebben aangegeven dat de volledige naam van onze shareable config `eslint-config-custom-team-rules` is. Als je je aan deze conventie houdt weet ESLint dat je een shareable config inlaadt en hoef je de prefix `eslint-config-` niet te gebruiken.

De volgende stap is het maken van een Babel configuratie. Maak een `.babelrc` bestand aan en voeg daar de volgende regels aan toe:

```
{
  "presets": [
    "custom-team-preset"
  ]
}
```

Net zoals bij ESLint, geven wij Babel nu instructies om onze eigen preset in te laden. De prefix `babel-preset` hoeven wij niet op te geven omdat wij ons aan de conventies van Babel presets houden.

De volgende stap is het maken van onze source code. Maak een map aan genaamd `src/` en plaats daarin de volgende code in `index.js` bestand:

```
const add = (num1, num2) => {
  return eval('num1 + num2', {
    num1: num1,
    num2: num2
  });
};
```

```
const result = add(1, 2);
```

Onze source code bevat 2 punten die we in onze shareable config of preset behandelen:

-   Het gebruik van `eval()`.
-   Het gebruik van een arrow functie (wat in oudere browsers niet ondersteunt wordt.

Als laatste stap mogen we onze bouwstap configureren. Om het makkelijk te houden doen we dit via `npm` scripts, maar door het gebruik van standaard configuratie bestanden zou je dit ook makkelijk in Webpack doen.

Voeg de volgende `scripts` toe aan `package.json`:

```
"scripts": {
    "lint": "eslint src/index.js",
    "build": "babel -o src/script.min.js src/index.js"
},
```

En nu komen we aan het spannendste deel van de avond: het uittesten van onze configuratie!

Zoals eerder gezegd, geeft ESLint geen fout of waarschuwing op het gebruik van `eval()` in onze code. Het draaien van `npx eslint --no-eslintrc src/index.js` geeft het volgende resultaat:

![EsLint zonder config](/_img/adventskalender/code-in-style/eslint-no-config.png)

Hier is te zien wat ESLint standaard teruggeeft: `eval()` is toegestaan, en aangezien ESLint normaal gesproken uitgaat van een ES5 omgeving is `const` niet toegestaan.

Wanneer we onze eigen shareable config gebruiken krijgen we een heel ander resultaat:

![](/_img/adventskalender/code-in-style/eslint-shareable-config.png)

Hierin kunnen we zien dat ESLint een fout geeft op het gebruik van `eval()`, maar het gebruik van `const` toestaat in onze code.

## Op naar Babel!

We kunnen een zelfde test uitvoeren wanneer we Babel draaien. Wanneer we Babel zonder configuratie draaien moet de output er hetzelfde uitzien als onze source code, want Babel doet van zichzelf niks:

![Babel zonder config](/_img/adventskalender/code-in-style/babel-no-config.png)

Dit geeft ons het volgende resultaat:

![Resultaat van Babel zonder config](/_img/adventskalender/code-in-style/babel-no-config-result-3.png)

Maar als we onze `npm` script uitvoeren krijgen we een ander resultaat, omdat onze Babel preset dan wél uitgevoerd wordt:

```
$ npm run build
```

Dit geeft:

![Resultaat van Babel met custom preset](/_img/adventskalender/code-in-style/babel-custom-preset-result-3.png)

En dat is het. We hebben nu een eigen project gemaakt dat onze eigen ESLint en Babel configuratie (of preset) gebruikt op de source code. Wil je de voorbeeldcode in actie zien? Dan kan je het altijd terugvinden op [Github](https://github.com/lodybo/code-in-style-examples).

## Wrapping up

Het proces zoals hierboven beschreven is natuurlijk niet de enige manier om een coding styleguide te maken met je team. En zoals voor veel dingen geldt in de wereld van development: your mileage may vary. Het belangrijkste is dat er een set richtlijnen vastligt waardoor het hele team zich kan richten op het schrijven van goede code!

### Over Lody Borgers

<img src="/_img/adventskalender/lody.png" alt="Foto van lody" class="floating-portrait">
Lody Borgers is front-end developer bij TAF Verzekeringen in Eindhoven. Naast zijn kennis op het gebied van front-end is hij mede geroemd om zijn scherp inzicht, zijn enthousiasme voor JavaScript, en zijn ongelooflijke bescheidenheid. Hij kijkt altijd meer uit naar een meeting dan de mensen die deze meeting met hem hebben. Studeerde naast ICT ook Communicatie, maar zegt zelf nooit teveel. [@lodybo](https://www.twitter.com/lodybo)

Donatie: Nederlandse Hartstichting
