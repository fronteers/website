---
title: Nullish Coalescing en Optional Chaining
date: 2022-12-10
author: Tim Severien
summary: 'Sinds ECMAScript 2020 zijn twee veelgevraagde features onderdeel geworden van de geliefde (en gehate) taal, JavaScript: de Nullish Coalescing operator en Optional Chaining. Beide zijn vooral *syntactical sugar*; een syntactische toevoeging voor iets wat we al konden schrijven, maar wel toevoegingen die welkom zijn, omdat ze code leesbaarder houden.'
categories: 
  - Adventskalender
---
Sinds ECMAScript 2020 zijn twee veelgevraagde features onderdeel geworden van de geliefde (en gehate) taal, JavaScript: de Nullish Coalescing operator en Optional Chaining. Beide zijn vooral *syntactical sugar*; een syntactische toevoeging voor iets wat we al konden schrijven, maar wel toevoegingen die welkom zijn, omdat ze code leesbaarder houden.

Beide features worden ondersteund door alle moderne browsers. Als je oude browsers moet ondersteunen, kan je ze nog steeds gebruiken door de code omzetten naar beter ondersteunde code middels compilers zoals TypeScript en Babel.

Voordat we deze nieuwigheidjes gaan verkennen, laten we eerst naar pre-ES2020 kijken zodat we begrijpen wat ze toevoegen.

# De Logical OR (`||`) operator

De kans is groot dat je de Logical OR operator gebruikt hebt. Deze komt veel voor bij het omschrijven van (meerdere) condities in bijvoorbeeld `if` statements:

```
// Als een product op voorraad is OF voorbesteld kan worden...
if (isInStock || isPreorderable) {
	// Toon de bestelknop
}
```

Als je de naam van de operator en het voorbeeld ziet, wekt dit de indruk dat dit een operator voor twee booleans is. Als geen van de twee booleans `true` is, geeft de operator `false` terug. Als één of beide booleans `true` is, geeft het `true` terug. Deze beweringen kloppen, maar op een minder intuïtieve manier: het geeft de eerste waarde terug dat *truthy* is, en anders de laatste waarde. De operator werkt voor booleans, maar ook andere data types!

Omdat de logical OR operator één van de twee waardes terug geeft, ontstaat er een interessante eigenschap. Wanneer de waarde aan de linker kant *falsy* is (zoals een lege string), geeft de operator de rechter waarde terug. Dat kan erg handig zijn met fallback waardes:

```
// Vul de variabel met de input waarde
// Als het veld leeg is, waardoor input.value een lege string is, vul met "No name"
const name = input.value || 'No name';
```

De flexibiliteit van deze operator is tevens het probleem. *Truthy* en *falsy* waardes zijn min of meer arbitrair en JavaScript doet aannames over specifieke waardes. Wellicht begrijp je dat `null` en `undefined` falsy waarden zijn. Een lege string (`""`) en de cijfer nul (`0`) worden ook gezien als falsy waarden, ondanks dat die in sommige situaties gewenst zijn.

Stel, we maken het systeem om kaartjes te bestellen voor het Fronteers congres. Nadat iemand z’n bestelling heeft geplaatst, willen we het resterende aantal tickets bijwerken:

```
ticketCount -= orderCount || 1;
```

Wanneer de gebruiker geen aantal opgeeft, bevat `orderCount` de waarde `null`, en anders een cijfer. Middels de OR operator doen we de aanname dat als gebruiker geen aantal heeft opgegeven, er één kaart besteld wordt. Alles lijkt te werken, totdat een gebruiker 9 kaartjes wilt bestellen, maar per ongeluk 0 invoert. Omdat 0 een falsy waarde is, word `ticketCount` verlaagd met de fallback waarde van 1. Het lijkt alsof er één kaart is besteld, ook al is dat niet zo.

Om dat geval af te vangen, moeten we specifieker zijn wanneer we de waarde als leeg achtten, zoals met een Ternary operator:

```
ticketCount -= orderCount !== null ? orderCount : 1;
```

# De Nullish Coalescing (`??`) Operator

Zoals we net zagen, zijn er gevallen waar we niet alle falsy waarden over één willen kam scheren, en bijvoorbeeld lege strings (`""`) en het cijfer nul (`0`) behouden. Met de Nullish Coalescing operator, kan dat!

In principe werkt het nagenoeg hetzelfde als de Logical OR (`||`) operator, alleen geeft deze operator de linker waarde terug wanneer die niet *nullish* (`null` of `undefined`) is, en anders waarde rechts van de operator. Laten we het voorbeeld van ons bestelsysteem herzien met deze operator:

```
ticketCount -= orderCount ?? 1;
```

Wanneer `orderCount` `null` is, geeft de operator de fallback waarde van 1 terug. Wanneer `orderCount` een cijfer bevat, ook nul (`0`), zal die waarde gebruikt worden.

`x ?? y` is min of meer een shorthand voor de volgende expressie:

```
x !== null && x !== undefined ? x : y
```

Let op dat het gebruik van de Nullish Coalescing operator in een `if` statement verwarring kan veroorzaken.

```
if (orderCount ?? false) {
	// ...
}
```

Bovenstaande code herintroduceert hetzelfde probleem. Ook al zal de expressie `orderCount ?? false` werken zoals verwacht, indien `orderCount` 0 is, krijg je effectief `if (0)`, en zal de code niet uitgevoerd worden.

De Chaining (`.`) Operator

Misschien heb je wel eens JSON opgehaald via REST API en werd er conditioneel informatie teruggegeven, bijvoorbeeld o.b.v. een rol of rechten.

Stel, hebben een object ontvangen, `order`, en we willen de naam van de persoon uit een opdracht halen:

```
const customerName = order.customer.name;
```

Wanneer `order` of `order.customer` bijvoorbeeld `null` is, geeft dit een error: `Uncaught TypeError: Cannot read properties of null`. Dit kan bijvoorbeeld gebeuren als een beheerder naar een bestelling wilt kijken, maar geen persoonsgegevens mag inzien.

We kunnen in meerdere stappen controleren of het veld, dat we uit willen lezen, bestaat. Misschien heb je wel eens dit soort code gezien of geschreven:

```
const customerName = order
	&& order.customer
	&& order.customer.name;
```

Omdat deze situatie en daardoor dit soort controles vaak voorkomt, zijn er zelfs functies (zoals `[_.get()](https://lodash.com/docs/#get)` in lodash) geschreven en npm packages gepubliceerd om veilig informatie uit een onbekend object te halen zonder JavaScript errors te veroorzaken.

Voor een dynamische taal zoals JavaScript is het vreemd dat er geen ingebouwde manier is om veilig een object uit te lezen. Dat is verleden tijd dankzij de Optional Chaining operator!

# Optional Chaining ( `?.` )

Optional Chaining maakt het uitlezen van object veel veiliger. We kunnen de Chaining operator (`.`) vervangen met deze nieuwe operator wanneer er onzekerheid is over het uit te lezen object. In andere programmeertalen is er een vergelijkbare operator die bekend staat als de Elvis operator (omdat die syntax, `?:` op twee ogen en een kuif lijkt).

Het voorbeeld van eerder kunnen we herschrijven naar:

```
const customerName = order?.customer?.name;
```

Wanneer `order` of `order.customer` nullish is, krijgt `customerName` de waarde `undefined` in plaats van dat het een error veroorzaakt. We hoeven deze operator niet overal te gebruiken. Als we zeker weten dat `order` altijd een object is, is onderstaand voldoende:

```
const customerName = order.customer?.name;
```

Ook kunnen we Optional Chaining combineren met Property Accessors (`obj['veld']`):

```
const field = 'name';
const customerField = order.customer?.[field];
```

We kunnen met de operator ook de error `Undefined is not a function` voorkomen. Let op dat de Optional Chaining operator enkel controleert of een waarde niet-nullish is:

```
const obj = {
	myString: 'Not a function',
	myFunction() {
		// ...
	},
};
//
// obj.myNullish is niet gedefinieerd in obj
obj.myNullish?.();
obj.myFunction?.();
// De waarde is niet nullish, maar proberen het aan te roepen als een functie, terwijl het een string is
obj.myString?.(); // Error: obj.myString is not a function
```

Dat we `undefined` terug krijgen wanneer een property niet bestaat, wat een nullish waarde is, betekent dat we dit kunnen combineren met de Nullish Coalescing operator!

```
const customerOrderCount = order.customer?.orderCount ?? 'N/A';
```

Door deze operators te combineren, kunnen we code schrijven dat erg robuust is. Bovenstaande regel houdt niet alleen rekening met situaties wanneer `order.customer` of niet bestaat, bijvoorbeeld wanneer de gebruiker deze informatie niet mag zien, maar zal ook netjes nul teruggeven wanneer de klant nog geen orders heeft geplaatst. Elk alternatief is een stuk minder elegant:

```
const customerOrderCount = (
		order.customer &&
		typeof order.customer.orderCount === 'number'
)
	? order.customer.orderCount
	: 'N/A';
```

# Conclusie

Het komt vaak voor dat nieuwe ECMAScript features geen verandering betekenen voor de code die we dagelijks schrijven. Nullish Coalescing en Optional Chaining, daarentegen, wel.

De één is een zeer handige toevoeging voor het schrijven van condities en de ander om veilig objecten uit te lezen. Twee dingen die je vaak terug vindt in elke codebase van elk formaat. Ook al zijn het twee kleine operators, de impact is groot.
