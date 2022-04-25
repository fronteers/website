---
title: "Het platform bouwen"
date: 2011-12-15
author: Anne van Kesteren
categories: 
  - Adventskalender
---
"Dat kan beter." Zo dacht ik zeven jaar geleden over de standaarden voor het web. En eerlijk gezegd, dat is niet echt veranderd. De omvang wel. Toen hadden we qua standaarden HTML, CSS, JavaScript, beetje HTTP, en XML leek belangrijk, maar niemand gebruikte het. Nu is HTML een parser, syntax, taal, omvat het video, audio, en offline applicaties. CSS bestaat uit over dertig min of meer onafhankelijk ontwikkelde componenten, van verticale text layout tot arbitraire matrixtransformaties, van animaties tot kleuren met alpha-kanaal. En het aantal JavaScript API's is enorm gegroeid, met als doel de traditionele computerplatformen te vervangen. Dat JavaScript zo'n honderd keer sneller is geworden helpt daar natuurlijk in mee.

De complexiteit van standaarden is enorm toegenomen. Zo las een standaard eerst als een redelijk technische introductie tot een onderwerp, nu bevat een standaard algoritmes en gedetailleerde eisen om te zorgen dat software op dezelfde manier werkt. Navigatie, garbage collection (het verwijderen van ongebruikte objecten uit het geheugen van de computer), laden van pagina's met een onbekend MIME type, de volgorde van events relatief tot netwerkactiviteit; alles wordt keurig uitgewerkt. De huidige HTML specificatie vertelt hoe een byte stream, die over het netwerk binnenkomt, wordt omgezet in een set Unicode karakters. Deze worden vervolgens omgezet in tokens en daarvan wordt de DOM opgebouwd. Zo weet iedereen dat `<image>` een `<img>` element wordt.

De benodigde precisie vloeit voort uit te de talloze problemen die onnauwkeurige specificaties uit het verleden veroorzaakt hebben. Elke browser implementeerde de ambiguïteiten in specificaties op een andere manier, wat er toe leidde dat pagina's en code niet op dezelfde manier werkten. Een ander probleem was dat developers vaak fouten maakten in hun code en deze code alleen testten in de dominante browser. `width: 20` werkte prima daarin en dus veranderden ze er verder niets aan. Er was nergens beschreven wat `width: 20` moest doen en als gevolg werkte het net als `width: 20px` in sommige browsers en in andere deed het niets.

Binnen het W3C begon de CSS groep hiermee. Grote delen van CSS 2.0 werden herschreven in een revisie, CSS 2.1 genaamd. Deze revisie beschreef de features van CSS in groter detail en hield rekening met het feit dat features incorrect gebruikt konden worden. Dat gaf ook gelijk een extensie-pad voor CSS, want nieuwe features zijn niets meer dan incorrect gebruikte oude features (`color: rgba(7, 6, 42, 0.5)` was bijvoorbeeld ooit incorrect gebruik van de `color` property).

Opschonen van HTML en de DOM begon buiten het W3C, in de WHATWG, en is inmiddels een coöperatieve onderneming. En door het beter definiëren (en daardoor ook vollediger begrijpen) van de fundamentele aspecten van het platform, zoals het `Window` object, de same origin policy, en parsen van HTML, wordt het een stuk gemakkelijker om nieuwe features toe te voegen. Zo kun je nu ook SVG en MathML direct in HTML gebruiken, zonder al te veel gedoe.

```
<!DOCTYPE html>
<title>SVG in HTML!</title>
<p>A circle:</p>
<svg viewBox="0 0 1 1" width="100px">
  <circle cx=".5" cy=".5" r=".5" />
</svg>
```

Features toevoegen aan het platform gebeurt redelijk informeel. En belangrijker, het is nu gemakkelijker dan ooit tevoren om er aan deel te nemen. De groepen die bij het W3C en de WHATWG werken aan API's, CSS, en HTML, hebben allemaal publieke mailing lists waar iedereen aan kan deelnemen. Wanneer je een voorstel wilt doen, is het belangrijk om hier op te letten:

* Vraag niet om een feature, maar leg je probleem uit. Bij het ontwikkelen van features kijken we altijd naar de achterliggende scenario's ("use cases") en werken we vanaf daar naar een oplossing. Wel "ik wil Japanse karaoke kunnen weergeven"; niet "ik wil vertical text rendering".
* Kun je om je probleem heen werken en doen mensen dat in de praktijk? Timeout ondersteuning voor XMLHttpRequest werd al volop gedaan in het wild, maar vereiste een hoop extra code. Om het makkelijker te maken voor iedereen hebben we XMLHttpRequest uitgebreid met timeout ondersteuning. Andere problemen, zoals het ondersteunen van de camera van de gebruiker, zijn compleet nieuwe functionaliteit en waren eerder onmogelijk, tenzij gebruik werd gemaakt van plugins.
* Breng je probleem ter discussie. Leg het voor aan collega's, fora, IRC, en verfijn het gebaseerd op de reacties die je krijgt.

Hierdoor, en uiteindelijke iteratie over mogelijke features die het probleem oplossen, middels specificatie, implementatie, discussie, en uitproberen door web developers, wordt het platform steeds een stukje beter. En kun je morgen iets meer problemen oplossen dan vandaag. Succes ermee! ;-)

(TODO: Over Anne van Kesteren
2011/12/anne-van-kesteren.jpg
[Anne van Kesteren](http://annevankesteren.nl/) chillt 'm in Utrecht wanneer hij niet ergens anders is en bouwt aan het platform. Momenteel druk met [XMLHttpRequest](http://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html), [Cross-Origin Resource Sharing](http://dvcs.w3.org/hg/cors/raw-file/tip/Overview.html), en de nieuwe [DOM](http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html) standaard. Hij werkt voor [Opera Software](http://www.opera.com/), een browsermakertje uit Noorwegen.
Donatie: [Electronic Frontier Foundation](https://www.eff.org/)
Mijn goede doel keuze is de Electronic Frontier Foundation omdat het beschermen van onze vrijheden en privacy op het internet enorm belangrijk is. Ik match dan ook de donatie van Fronteers.)
