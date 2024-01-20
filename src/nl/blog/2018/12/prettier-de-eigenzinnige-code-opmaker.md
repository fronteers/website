---
title: 'Prettier, de eigenzinnige code-opmaker'
date: 2018-12-09
author: Edwin Martin
categories:
    - Adventskalender
---

Bij HTML, CSS en JavaScript en de meeste andere computertalen is niet voorgeschreven hoe je de code moet opmaken. Alles op één regel of juist niet, veel spaties, tabs of alles dicht op elkaar, voor de computer maakt het echt niet uit.

Dit zorgt er ook voor dat iedereen een eigen stijl ontwikkelt. Dat is op zich niet erg, maar als meerdere ontwikkelaars met elk een eigen stijl aan dezelfde code gaan werken, dan wordt dat lastiger. Met verschillende stijlen wordt de code lastiger leesbaar en als code steeds anders wordt opgemaakt geeft dat vervuiling in het versiebeheersysteem.

Stijl van Gerard:

```
const hc = h => h>300?'hoogte-'+hcls:null
```

Stijl van Sergey:

```
function getHeaderClass ( height )
{
	headerClass = null;

	if ( height > 300 )
	{
		headerClass = `hoogte-${highHeaderClassname}`;
	}

	return headerClass;
}
```

Vaak gebruiken veel bedrijven daarom coderichtlijnen waarin staat hoe code geschreven moet worden zodat men niet verschillende stijlen door elkaar gebruikt. Vroeger werden die vaak zelf geschreven, maar tegenwoordig kies je er een die al door anderen is geschreven. Een bekende coderichtlijn voor JavaScript is de [coderichtlijn van Airbnb](https://github.com/airbnb/javascript).

## Standaard codestijl

Zou het niet handig zijn om een tooltje te hebben die je code automatisch naar de juiste stijl herschrijft? Hier komt Prettier om de hoek kijken, want dat is precies wat het doet. Prettier converteert je code naar een standaard codestijl.

Standaard codestijl? Wat is dat? In veel editors met een eigen codeopmaker kan je heel precies aangeven wat jouw favoriete stijl is. Wil je spaties binnen de haakjes van een if? Wil je een spatie voor de accolade van een while?

![Stijlinstellingen](/_img/adventskalender/stijlinstellingen.png)

Prettier doet het omgekeerde: het gaat uit van één codestijl, waar ze goed over hebben nagedacht en die voor iedereen geldt.

## Hoe gebruik je prettier?

Je kunt Prettier globaal installeren met:

```
npm install --global prettier
```

Een bestand kan je dan opnieuw opmaken met:

```
prettier --write filename.js
```

Het is echter veel handiger om Prettier op te nemen in je editor. Je kunt dan zorgen dat de tool wordt uitgevoerd met een bepaalde toetscombinatie of zelfs elke keer als je het bestand opslaat.

Dat laatste doe ik en ik merk dat ik al snel productiever werd omdat ik niet steeds handmatig de code hoef op te maken. Ik typ een blurb code zonder spaties en enters… <save> en hoppa, de code ziet er weer netjes uit.

Misschien denk je dat een programma nooit de code zo netjes opmaakt als jijzelf. Dat was in ieder geval mijn grootste weerstand om Prettier te gebruiken. Maar de code waar Prettier mee komt, ligt erg in de buurt met hoe ik het ook zou doen. En als je een stukje precies opgemaakte code hebt of bijvoorbeeld een grafiekje in ASCII-art met zijn eigen opmaak, dan kan je `// prettier-ignore` erboven zetten en de code wordt dan met rust gelaten.

Naast het niet zelf hoeven opmaken, ontdekte ik nog een voordeel. Het zoeken in code wordt beter. Als je bijvoorbeeld zoekt naar `varname =` dan hoef je niet bang te zijn dat `varname=` of `varname<tab>=` worden overgeslagen want al deze code heeft Prettier al veranderd in `varname =`.

## Toevoegen aan een bestaand project

Hoe voeg je Prettier toe aan een bestaand project? Als je Prettier begint te gebruiken kan het zijn dat je ergens een bugje oplost, één regel aanpast en dat Prettier ook nog eens het hele bestand opnieuw opmaakt. In je versiebeheersysteem zie je dan niet die ene aangepaste regel, maar heel veel aanpassingen in de opmaak. Je versiebeheersysteem raakt zo erg vervuild.

Beter is om alle bestanden één keer opnieuw op te maken en verder geen andere aanpassingen te maken en die wijzigingen in één commit op te nemen.

Prettier toepassen op alle JavaScriptbestanden gaat op een UNIX-gebaseerd systeem zoals Linux of macOS met dit commando:

```
find . -name "*.js" | grep -v node_modules | xargs prettier --write
```

## Linter

En wat nu als je ook nog een linter gebruikt? Die kunnen namelijk met Prettier conflicteren. Een optie is om elke keer dat er een conflict is een uitzondering toe te voegen aan het linter configuratiebestand, zo heb ik dat gedaan. Maar op internet kan je ook linter configuratiebestanden vinden die geschikt zijn voor Prettier. Het uitschakelen van de linter is in ieder geval geen goed idee. Een linter kijkt in tegenstelling tot Prettier verder dan alleen de opmaak, het kijkt ook naar veelgemaakte programmeerfouten.

## Uitzonderingen

Het idee van Prettier is dat er één stijl is die voor iedereen geldt en dat er geen tientallen instellingen zijn. Maar zoals geen enkel programma is ook Prettier niet perfect en al snel kwamen er toch opties om uitzonderingen toe te voegen.

Eén daarvan is [jsxBracketSameLine](https://prettier.io/docs/en/options.html#jsx-brackets) dat er zelfs kwam omdat dit een dealbreaker was om Prettier binnen Facebook te gebruiken.

Van de meeste opties kan je gewoon de defaultwaarden kiezen. Twee opties heb ik wel aangepast.

Een daarvan is de achterliggende komma, die sinds ES5 in JavaScript is toegestaan. Als je in JavaScript een lijst met items hebt met elk item op een eigen regel, dan is het handig om achter elke item een komma te zetten. Als je dan een item onderaan toevoegt of weghaalt, dan hoef je geen komma’s aan te passen en in je versiebeheersysteem ziet het er ook netter uit.

De tweede is het altijd gebruiken van ronde haakjes in een fat arrow-functie. Standaard laat Prettier bij een fat arrow-functie met één parameter de haakjes weg. Maar bij geen of meer parameters zijn er wel haakjes. Het is net iets netter om dan altijd haakjes te gebruiken.

Uitzonderingen kan je toevoegen aan het `.prettierrc.json`-bestand in de root van je project.

Met bovengenoemde twee uitzonderingen ziet deze er dan zo uit:

```
{
  "trailingComma": "es5",
  "arrowParens": "always",
}
```

In eerste instantie was Prettier bedoelt voor JavaScript, maar al gauw kwamen daar andere talen bij zoals TypeScript, JSX voor React en CSS.

Op 7 november 2018 is daar met [versie 1.15](https://prettier.io/blog/2018/11/07/1.15.0.html) ook HTML-, Vue-, Angular- and MDX-ondersteuning bijgekomen. Er is dus haast geen front-endcode meer die je niet door Prettier kan laten opmaken.

## Over Edwin Martin

<img src="/_img/adventskalender/edwin.jpg" alt="Foto van Edwin Martin" class="floating-portrait" /> 
Edwin loopt alweer een tijdje mee en kent het internet nog van toen er nog geen World Wide Web was. Toen dit kwam, was hij gelijk verkocht. Edwin is sinds 2000 freelancer en [blogt](https://bitstorm.org/) en [twittert](https://twitter.com/edwinm).
Donatie
Mijn donatie gaat naar Artsen zonder Grenzen. Zij zorgen voor noodzakelijke medische hulp bij natuurrampen en in oorlogsgebieden.
