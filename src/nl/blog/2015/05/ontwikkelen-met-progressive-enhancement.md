---
title: "Ontwikkelen met progressive enhancement"
date: 2015-05-18
author: Sanne Veroude
categories: 
  - De Artikelen
---
Sanne Veroude werkt bij de Voorhoede in Amsterdam, waar ze bij het bouwen van websites gebruik maken van progressive enhancement. In haar artikel vertelt ze over het proces dat zij gebruiken voor progressive enhancement.

# Ontwikkelen met progressive enhancement

De term ‘progressive enhancement’ werd voor het eerst genoemd door Steven Champeon en Nick Finck in [2003](http://hesketh.com/publications/inclusive_web_design_for_the_future/). In de wereld van front-end development waarin ontwikkelingen zo ontzettend snel gaan, lijkt dit een eeuwigheid geleden. Sinds die tijd is er veel veranderd, maar progressive enhancement is zeker niet minder relevant geworden.

De diversiteit aan apparaten waarmee we toegang hebben tot het web is de laatste jaren enorm gegroeid. Het is verleidelijk om hierbij te denken aan de nieuwste smartphone of iPad. De verscheidenheid aan apparaten waarmee gebruikers websites bezoeken is echter veel groter dan dat. We krijgen daardoor meer en meer te maken met verschillen in browsermogelijkheden.

Als ontwikkelaars willen we graag een rijke en interactieve ervaring leveren aan moderne smartphones en nieuwe desktop browsers. Tegelijkertijd is het belangrijk dat we oudere browsers en minder bekwame devices blijven ondersteunen. Dit kunnen we realiseren door te ontwikkelen vanuit een progressive enhancement (PE) benadering: we starten met een eenvoudige bruikbare ervaring, en verrijken de gebruikerservaring stap voor stap wanneer we er zeker van zijn dat browsers deze verrijking ondersteunen.

# Hoe brengen we progressive enhancement in de praktijk?

We kunnen progressive enhancement op twee niveaus toepassen:

## 1. Website niveau:

Op website niveau kunnen we een PE techniek gebruiken die bekend staat als ‘cutting the mustard’. Hierbij ontwikkelen we een basiservaring voor alle browsers met HTML, eenvoudige CSS en zonder JavaScript. Door middel van feature detection maken we een onderscheid tussen ‘verouderde’ en ‘moderne’ browsers.

```
if ('querySelector' in document) {
    // enhance the application
}
```

Browsers die de ‘cut the mustard’ test niet doorstaan, krijgen de minimale gebruikerservaring. Wanneer een browser de cut the mustard test doorstaat:

* wordt JavaScript ingeladen.
* wordt de class name ‘enhanced’ aan de HTML tag toegevoegd. Binnen deze class wordt de enhanced CSS toegevoegd. JavaScript afhankelijke controls worden binnen deze class gescoped.

Doordat JavaScript niet wordt ingeladen voor de oudere browsers, worden deze niet belemmerd door extra requests.

## 2. Component niveau:

Nu onze websites moeten werken op een breed scala aan apparaten, zijn onze werkprocessen veranderd. In plaats van het bouwen van complete webpagina’s ontwikkelen we nu een systeem van [componenten](http://daverupert.com/2013/04/responsive-deliverables).
Ook op dit niveau beginnen we het ontwikkelen van een component met toegankelijke en semantische HTML. Vervolgens voegen we CSS en JavaScript enhancements toe, op basis van features die door de browser worden ondersteund.

Een voorbeeld: we willen een standaard input element met type=”file” laten passen binnen de look & feel van de website. Bovendien willen we het element gebruiksvriendelijker maken voor mobiele devices door het touch target te vergroten. We kunnen [dit doen door](http://www.filamentgroup.com/examples/jquery-custom-file-input/#) het input element een opacity van 0 te geven en er een `<div>` element overheen te plaatsen die we de custom CSS geven. 
Omdat deze oplossing gebruik maakt van de opacity property, willen we de enhancement alleen serveren aan browsers die deze property ondersteunen. Dus eerst checken we voor opacity support:

```
var supportsOpacity = typeof document.body.style.opacity === 'string';
if (supportsOpacity) {
    // enhance the component
}
```

Als de opacity property wordt ondersteund, dan voegen we de enhancement toe. Zo niet, dan ziet de gebruiker het native input element. En dat is prima, want [een site hoeft er niet op alle apparaten hetzelfde uit te zien](http://dowebsitesneedtolookexactlythesameineverybrowser.com/). Waar het om gaat is dat de gebruiker in beide gevallen in staat is om het input element te gebruiken.

# Bestand tegen onverwachte omstandigheden

Gebruikers maken niet langer alleen vanachter hun bureau gebruik van het internet, maar steeds vaker onderweg en op openbare plaatsen, waar regelmatig sprake is van een instabiele internetverbinding. Progressive enhancement is daardoor niet langer slechts een kwestie van support. We moeten er ook voor zorgen dat onze websites een bruikbare ervaring bieden in het geval van onverwachte omstandigheden (bijvoorbeeld wanneer de internetverbinding wegvalt, omdat een gebruiker zojuist een tunnel is binnengereden).

Veel websites gebruiken tegenwoordig web fonts om de typografie te laten aansluiten bij de huisstijl van de website. Maar wat gebeurt er als het web font door een falende internetverbinding niet gedownload kan worden?

Browsers gaan hier [op verschillende manieren](https://speakerdeck.com/zachleat/bulletproof-font-icons?slide=68) mee om. Sommige browsers (zoals Chrome 36+, Opera 23+ en Firefox) hebben een timeout voor `@font-face` requests. Als het font na deze timeout nog niet is geladen, wordt het fallback font weergegeven. Andere browsers (Mobile Safari, Safari, Android, Blackberry) hebben geen timeout en verbergen de fallback tekst. De gebruiker wordt daardoor geconfronteerd met een ‘flash of invisible text’ (FOIT): zolang het custom font bezig is met downloaden, is de tekst onzichtbaar.

![](https://fronteers.nl/_img/blog/2015/example-of-foit.png)

(TODO: Een voorbeeld van FOIT)

Uiteraard willen we dat onze content zo snel mogelijk beschikbaar is: een font request zou geen single point of failure moeten zijn. We moeten websites op zo’n manier bouwen dat ze bij onverwachte omstandigheden, zoals een falende internetverbinding, nog steeds bruikbaar zijn.

We hebben meer controle over de manier waarop browsers met font loading omgaan door gebruik te maken van load events. De native oplossing hiervoor, de [CSS Font Loading Module](http://dev.w3.org/csswg/css-font-loading/), wordt helaas nog niet door alle browsers ondersteund. Voor een betere browserondersteuning kunnen we gebruik maken van [Font Face Observer](https://github.com/bramstein/fontfaceobserver), een polyfill waarmee je een font family en andere eigenschappen (zoals de font weight en style) kan specificeren in de _FontFaceObserver constructor_.

```
var observer = new FontFaceObserver(‘Custom Font Family', {
    weight: 400
});
```

Met de check() methode wordt gesignaleerd wanneer fonts zijn geladen. We voegen de class name enhanced-font toe wanneer dit het geval is:

```
observer.check().then(function () {
    // font is available
    w.document.documentElement.className += ‘enhanced-font’;
    }, function () {
        // font is not available
});
```

In de CSS specificeren we een fallback font dat wordt gebruikt zolang het custom font niet beschikbaar is:

```
body {
    font-family: sans-serif;
}
```

Binnen de class enhanced-font specificeren we in de CSS het custom font:

```
.enhanced-font body {
    font-family: Open Sans;
}
```

Met deze werkwijze wordt het standaard lettertype weergegeven terwijl de custom fonts worden geladen, ook wanneer het laden van de fonts lang duurt of mislukt. In plaats van gebruikers FOIT te presenteren bieden we hen het standaard lettertype aan, waardoor de content altijd beschikbaar is. Zodra het custom font beschikbaar is, wordt het als een enhancement toegevoegd.

![](https://fronteers.nl/_img/blog/2015/kapotte-roltrap.png)

# Geen liften maar roltrappen

Christian Heilmann vergelijkt progressive enhancement met [liften en roltrappen](http://christianheilmann.com/tag/progressive-enhancement/): wanneer een lift buiten werking is, is hij onbruikbaar en heb je er niets aan. Wanneer een roltrap buiten werking is, is hij nog steeds te gebruiken als trap. Het is wellicht minder gemakkelijk, maar gebruikers kunnen nog steeds op de volgende verdieping komen.

Hetzelfde geldt voor de manier waarop we websites bouwen: gebruikers moeten altijd hun doel kunnen bereiken, ook wanneer de techniek faalt. En hier moeten we door grotere verschillen in browsermogelijkheden en instabiele internetverbindingen steeds meer rekening mee moeten houden.

Progressive enhancement biedt ons een aantal praktische methodes waarmee we:

* door middel van feature detection geavanceerde technieken kunnen aanbieden aan moderne browsers, terwijl de basiservaring altijd beschikbaar is voor minder capabele browsers.
* 
* een website bestand maken tegen onverwachte gebeurtenissen, waardoor deze ook bruikbaar is in het geval van een instabiele internetverbinding.

(TODO: Over Sanne Veroude
blog/2015/sanneveroude.png
Front-end developer, likes building stuff accessible for everyone and on every device)