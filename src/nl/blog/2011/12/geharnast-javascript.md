---
title: 'Geharnast JavaScript'
date: 2011-12-18
author: Tom Greuter
categories:
    - Adventskalender
---

Het belang van JavaScript op het web is de laatste jaren enorm toegenomen. Ten eerste heeft JavaScript deels de animatierol van Flash overgenomen, ten tweede is het web applicatiever geworden, waardoor JavaScript (bijvoorbeeld in Ajax-communicatie) een grote vlucht genomen heeft. De rol JavaScript wordt groter en tegelijkertijd neemt de professionalisering toe. Het is opvallend te zien dat veel best practices uit de back-end-wereld gemeengoed aan het worden zijn bij JavaScript-development. Testen is zo'n belangrijk onderdeel.

## Testen

Het testen van JavaScript kan op meerdere niveaus gedaan worden:

1. Lint testen. Het testen op correcte syntax door tools als [JsHint](http://www.jshint.com/), [JsLint](http://www.jslint.com/) of [Closure Linter](http://code.google.com/intl/nl/closure/utilities/). Dit kan deels door je editor gedaan worden.
2. Functioneel testen. Het testen van bijvoorbeeld klikscenario's in je website of app met een tool als [Selenium](http://seleniumhq.org/).
3. Unittesten. Daar gaan we in dit artikel dieper op in.
4. Last but not least: handmatig testen. Idealiter stel je hiervoor schriftelijke testscripts op, zodat je gestructureerd dezelfde scenario's kunt testen bij opeenvolgende software releases.

De eerste drie soorten testtools kunnen geautomatiseerd worden, zodat je continu op de hoogte gebracht kunt worden van de staat van je applicatie.

## Unittesten

Wikipedia zegt over [unittesten](http://nl.wikipedia.org/wiki/Unittesten): "Unittesten is een methode om softwaremodulen of stukjes broncode (_units_) afzonderlijk te testen. Bij unittesten zal voor iedere unit een of meerdere tests ontwikkeld worden. Hierbij worden dan verschillende testcases doorlopen. In het ideale geval zijn alle testcases onafhankelijk van andere tests." Verschillende units samen worden getest in een integratietest. Voor JavaScript zijn er diverse unittest frameworks beschikbaar. Enkele bekende zijn:

-   [QUnit](http://docs.jquery.com/QUnit)
-   [YUI Test](http://developer.yahoo.com/yui/yuitest/)
-   [Js Test Driver](http://code.google.com/p/js-test-driver/)
-   [Jasmine](http://pivotal.github.com/jasmine/) (voortgekomen uit JsUnit)

In dit artikel kijken we verder naar unittesten met Jasmine. Jasmine kan onafhankelijk van een JavaScript-library gebruikt worden en heeft ook geen DOM nodig om zijn testen uit te voeren. Verder is Jasmine goed te automatiseren. In syntax en mogelijkheden verschilt Jasmine niet veel van andere unittesting tools.

## TDD - Assume your code will fail

Eén stap verder nog dan systematisch testen is het testen als uitgangspunt te nemen in je software-ontwikkelproces: "Test-Driven Development" (TDD). Test-Driven Development is een ontwikkelmethode voor software waarbij eerst tests worden geschreven en daarna pas de code. De testcases worden beschreven vanuit het oogpunt van de gebruiker. Hoewel TDD (een methodiek) en Jasmine (een tool) niet per definitie een combinatie vormen, werpen we hier een korte, inleidende blik op TDD met Jasmine.

## Jasmine installeren

1. De voorbeeldcode bij dit artikel is te downloaden vanaf [github](https://github.com/ludder/Fronteers-Jasmine-Example).
2. Op het hoogste niveau zie je de directory's "lib", "spec" en "src". "lib" bevat de core-bestanden van Jasmine, in "src" komen de JavaScriptbestanden van je project en in "spec" zitten de bestanden die de sourcecode gaan testen.
3. Open SpecRunner.html in je favoriete browser. Er worden nog geen testen uitgevoerd: "0 specs, 0 failures ...".

## Een eerste Jasmine unit test maken

Jasmine is opgebouwd uit suites, specs en expectations. Eén JavaScript-project bestaat normaal gesproken uit meerdere Jasmine _testsuites_. Eén testsuite, die vaak een component of een class omvat, kan op zijn beurt een geneste suite of meerdere _specs_ bevatten. Een spec test gerelateerde functionaliteit. In een spec kunnen één of meerdere test cases (_expectations_) gedefinieerd zijn. Met de standaard [_matchers_](https://github.com/pivotal/jasmine/wiki/Matchers) van Jasmine (functies zoals `toEqual()`, `toBe()`, `toMatch()`, `toBeUndefined()` etc.) kun je verschillende scenario's testen.

Hoe schrijf je een spec? Belangrijke leidraden voor TDD zijn:

1. Schrijf eerst je test (dus niet eerst je functionele code)
2. Zie de test falen
3. Schrijf nu de code om de test te laten slagen, op de snelst mogelijke manier, dus niet rekening houdend met eventuele aanpassingen in de code
4. Refactor (verbeter de code zonder de functionaliteit te wijzigen)
5. Herhaal deze stappen

## Voorbeeld

Stel dat je de Fronteers webshop beheert. Een product kan een variabele prijs hebben: De gewone bezoeker betaalt de volle mik, vaste klanten krijgen 20% korting, en Fronteersleden toucheren maar liefst 50%. Als je hier een functie voor wilt schrijven zou je dat volgens TDD met Jasmine als volgt kunnen aanpakken:

Maak een suite aan (`/spec/FronteersShopSpec.js`) die het component FronteersShop en de nog te schrijven functie calcDiscount() gaat testen:

```
describe("FronteersShop", function() {

  var fs;
  var CLIENTTYPE_MEMBER    = 'member',
      CLIENTTYPE_FRONTEERS = 'fronteers',
      CLIENTTYPE_NONMEMBER = 'other';

  // Is executed before each spec:
  beforeEach(function() {
    fs = new FronteersShop();
  });

});
```

De bijbehorende JavaScriptcode (`/src/FronteersShop.js`) ziet er dan nog als volgt uit:

```
function FronteersShop() {
  // a lot TODO
}
```

Unittesten worden doorgaans opgeschreven in begrijpelijke taal, zie achtereenvolgens de beschrijving van een suite, een spec en een expectation:

-   describe "when the discount price is calculated"
-   it "should correctly validate function input"
-   expect(fs.calcDiscount(null)).toBeUndefined();

Dit maakt enerzijds de Jasmine-code self-documenting en geeft anderszijds duidelijk aan waar in de testen fouten optreden.

De functie `calcDiscount()` willen we twee input-parameters geven:

-   price {Number} - de prijs van het product
-   customerType {String} - het soort klant: 'member', 'fronteers' of 'other'.

In de eerste stap van onze functie `calcDiscount()` kijken we (in een geneste suite) of de twee input-parameters van het verwachte datatype zijn:

```
describe("FronteersShop", function() {

  var fs;

  var CLIENTTYPE_MEMBER    = 'member',
      CLIENTTYPE_FRONTEERS = 'fronteers',
      CLIENTTYPE_NONMEMBER = 'other';

  beforeEach(function() {
    fs = new FronteersShop();
  });

  describe("when the discount price is calculated", function() {

    it("should correctly validate function input", function() {
      // Wrong number of expected arguments
      expect(fs.calcDiscount(1)).toBeUndefined();
      // First argument of wrong data type
      expect(fs.calcDiscount(null, CLIENTTYPE_FRONTEERS)).toBeUndefined();
      // Second argument of wrong data type
      expect(fs.calcDiscount(100, null)).toBeUndefined();
      // Input should be accepted
      // expect(fs.calcDiscount(100, CLIENTTYPE_FRONTEERS)).toBeDefined();
    });

  });

});
```

De testen zullen falen, want de bijbehorende code ontbreekt. Hier volgt een eerste implementatie van `calcDiscount()`:

```
FronteersShop.prototype.calcDiscount = function(price, customerType) {

  // Check if parameter "price" is correct, must be floating point number
  if (isNaN(parseFloat(price)) || (!isFinite(price)) ) {
    return;
  }
  // Check if parameter "customerType" is a String
  if (typeof customerType !== 'string') {
    return;
  }

}
```

(Normaal gesproken wil je waarschijnlijk geen kale return doen, maar handel je de fout af. Dat valt buiten de scope van dit artikel.) Met deze code zal de eerste spec slagen en groen worden. Vervolgens moet `calcDiscount()` doen waarvoor het in het leven geroepen is, de juiste prijs teruggeven, al dan niet met korting. Eerst schrijven we de spec:

```
describe("FronteersShop", function() {

   // ...

  describe("when the discount price is calculated", function() {

    // ....

    it("should correctly calculate discount", function() {
      // Expect 50% of 100 => 50
      expect(fs.calcDiscount(100, CLIENTTYPE_FRONTEERS)).toEqual(50);
      // Expect 80% of 100 => 80
      expect(fs.calcDiscount(100, CLIENTTYPE_MEMBER)).toEqual(80);
      // Expect 100% of 100 => 100
      expect(fs.calcDiscount(100, CLIENTTYPE_NONMEMBER)).toEqual(100);
      // Check decimals, expect 50% of 17.1 => 8.55
      expect(fs.calcDiscount(17.1, CLIENTTYPE_FRONTEERS)).toEqual(8.55);
    });

  });

});
```

De testen zullen weer falen. Met vallen en opstaan kunnen we dan de bijbehorende JavaScript afleveren:

```
FronteersShop.prototype.calcDiscount = function(price, customerType) {

  // ...

  if (customerType === 'member') {
    return price * 0.8;
  } else if (customerType === 'fronteers') {
    return price * 0.5;
  } else {
    return price;
  }
};
```

Hoera, de testpagina kleurt weer groen!

Dit is natuurlijk een simpel voorbeeld. Hoe complexer je code, hoe meer de waarde van unittesten toeneemt.

## Wat verder?

Om verder up-speed te komen met Jasmine kan het [inleidende artikel op Nettuts](http://net.tutsplus.com/tutorials/javascript-ajax/testing-your-javascript-with-jasmine/) erg nuttig zijn. De [Jasmine-wiki](https://github.com/pivotal/jasmine/wiki/Asynchronous-specs) biedt alle noodzakelijke informatie. Er zijn veel plugins voor Jasmine beschikbaar, bijvoorbeeld om Jasmine in je IDE te integreren ([JsTestDriver](https://github.com/ibolmo/jasmine-jstd-adapter)) of om met zogeheten fixtures de interactie met de DOM te testen (zie de [Jasmine jQuery-plugin](https://github.com/velesin/jasmine-jquery)). Het is ook mogelijk om Jasminetesten automatisch uit te voeren in [Maven](http://maven.apache.org/) en hen zo een onderdeel te maken van de [Continuous Integration](http://en.wikipedia.org/wiki/Continuous_integration). Mocht je offline zijn dan heb je wellicht iets aan het verhelderende boek van Christian Johansen [Test-Driven JavaScript Development](http://tddjs.com/).

## Tot slot

Wanneer moet je nu alles uit de kast halen met unittesten? Als je een JavaScript-library, plugins of herbruikbare componenten schrijft, zijn unittesten een must. Maar ook in langlopende projecten met een snelle release cycle zijn unittesten onmisbaar om mogelijke regressiebugs af te vangen. Zelfs als je korte toevoeging schrijft voor een kleine website kunnen unittesten erg nuttig blijken. Ze laten je anders tegen je code aankijken, waardoor je code robuuster, leesbaarder en makkelijker overdraagbaar wordt. Ook voor front-enders belangrijke waarden.

### Over Tom Greuter

<img src="/_img/2011/12/tom-greuter.jpg" alt="Foto van tom greuter uit 2011" class="floating-portrait" /> 
Tom Greuter is lead front-end developer bij [Info.nl](http://info.nl/) en bestuurslid van Fronteers. Naast het web is hij geboeid door voetbalclub [ФК Томь](http://fctomtomsk.ru/) uit Tomsk. Verder is hij binnen de WHATWG co-author van de draft van het nieuwe HTML6-element '<idle do-not-disturb="true">'.

Donatie: Varkens in nood
In Nederland leven ieder jaar ruim 20 miljoen intelligente en sociale varkens een verschrikkelijk bestaan in kleine hokken. Stichting [Varkens in Nood](http://www.varkensinnood.nl/) komt op voor de varkens. Met beschaafde, actuele en spraakmakende campagnes probeert Varkens in Nood consumenten en supermarkten ervan te overtuigen dat onze varkens een beter leven verdienen. Om de intensieve veehouderij een halt toe te roepen, moet de publieke opinie ten gunste van de dieren veranderen.
