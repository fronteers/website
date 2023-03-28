---
title: "Welkom op het Audiologische Internet"
date: 2011-12-19
author: Peter Beverloo
categories: 
  - Adventskalender
---
Het internet. Een praktisch oneindige bron aan tekstuele en grafische informatie. Tegenwoordig kunnen wij, als webontwikkelaars, gebruik maken van net iets meer dan twintig jaar aan evolutie betreft mogelijkheden op het internet. Wat begon als statische tekstdocumenten groeide al snel door tot interactieve pagina’s, en tegenwoordig zelfs tot webapplicaties met miljoenen regels aan JavaScript code en multiplayer spellen. De afname in het gebruik van Adobe Flash, samen met de nieuwe driedimensionale grafische mogelijkheden die WebGL geïntroduceerd heeft, heeft nadruk gelegd op een zintuig dat het internet nog niet volledig kan verzorgen: het gehoor.

# Achtergrondgeluidjes, Adobe Flash en `<audio>`

Terug naar het jaar 1995, waarin Microsoft Internet Explorer 2 vrijgeeft. Dit is de eerste browser die ondersteuning voor het invoegen van verschillende soorten media toevoegt, namelijk het `<bgsound>` element en de mogelijkheid om geluid en video te embedden. Niet veel later volgden ook andere browsers en plugins; in 2005 is de door Opera geïntroduceerde [Audio JavaScript interface](http://www.whatwg.org/specs/web-apps/2005-09-01/#sound) in de Web Application specificatie toegevoegd, een mogelijkheid die we nu kennen als het HTML5 `<audio>` element.

# Gebrekkige mogelijkheden

Ondanks dat het `<audio>` element het afspelen van geluid toestaat, en zelfs de mogelijkheden biedt om geluid te pauzeren en de afspeelsnelheid te veranderen, zijn er belangrijke tekortkomingen. Een goed voorbeeld hiervan is de afwezigheid van positiebepaling van geluid. Vergelijk dit met een spel waarin iemand een wapen op je afvuurt: je wilt kunnen horen waar in de omgeving deze tegenstander staat. WebGL geeft ons de mogelijkheid om prachtige omgevingen in drie dimensies te creëren, enkel met de beperking dat het huidige geluidsspectrum op het internet enkel links en rechts kent.

Een ander probleem dat je tegen kunt komen is een vertraging bij het afspelen van korte geluidsfragmenten. Net zoals bij het kijken naar nagesynchroniseerde televisie de stemmen duidelijk nep zijn, wordt het als frustrerend ervaren als het ratelen van een geweer een kwart seconde na het afvuren van het wapen volgt. En dan is er natuurlijk ook nog het codec probleem, want geen enkel bestandsformaat werkt in elke browser.

Voor het oplossen van deze problemen is een [klein groepje mensen](http://www.w3.org/2005/Incubator/audio/charter) van Mozilla, Google, de BBC en de MIDI Manufacturers Association in 2005 al begonnen met een werkgroup binnen het W3C om de mogelijkheden te onderzoeken. Dit is uitgegroeid tot de [W3C Audio Working Group](http://www.w3.org/2011/audio/), met als doel het ontwikkelen van een geavanceerde Audio API om spellen en applicaties toch de mogelijkheid te geven geluid te analyseren, bewerken en te creëren.

# De Mozilla Audio Data API, en de Web Audio API

De eerste publieke geavanceerde Audio API is in oktober 2010 geïntroduceerd door Mozilla's David Humphrey, namelijk de [Audio Data API](https://wiki.mozilla.org/Audio_Data_API). Deze API stelt de ontwikkelaar in staat om geluiden te analyseren, te bewerken of zelfs volledig zelf te creëren door de eigenlijke audio data beschikbaar te stellen aan JavaScript, waarna de ontwikkelaar hier berekeningen op kan uitvoeren. Naast het uitrollen van deze functionaliteiten in Mozilla Firefox 4, heeft het bedrijf besloten om een deel van de focus te verleggen naar de [MediaStream Processing API](http://www.w3.org/2011/audio/drafts/1WD/MediaStream/). Deze biedt, naast het analyseren en bewerken van geluid via de Audio Data API, betere integratie met andere functies zoals camera toegang.

Een tegenhanger hiervan is de [Web Audio API](http://www.w3.org/2011/audio/drafts/1WD/WebAudio/), een project van Google en Apple dat in 2009 gestart is door Google's Chris Rogers. De API volgt een totaal andere methodiek, en biedt standaardfunctionaliteiten aan in de vorm van Nodes. Functionaliteiten als positionering van geluid, omgevingseffecten, fade-ins, het mixen van geluid en simpele analyse kunnen hierdoor met slechts een paar regels JavaScript worden toegevoegd.

Om een vergelijking te schetsen tussen de twee voorstellen:

| Audio Data API                       | Web Audio API                                                |
| ------------------------------------ | ------------------------------------------------------------ |
| Mozilla Firefox                      | Google Chrome, Apple Safari, binnenkort mogelijk iOS.        |
| Imperatief                           | Declaratief (met mogelijkheid tot imperatief)                |
| Low-level, zelf de berekeningen doen | High-level met Nodes voor de meeste operaties, maar opnieuw met de mogelijkheid tot low-level. |
| 1 input, 1 bewerking, 1 output       | 1 of meer inputs, 1 of meer bewerkingen, 1 output            |



De Web Audio API is in principe een superset van de Audio Data API: het biedt dezelfde functionaliteiten, maar geeft de ontwikkelaar ook de optie om gebruik te maken van geoptimaliseerde procedures die veelal tot hetzelfde effect zullen leiden. Er zijn al verschillende JavaScript libraries voor Mozilla’s Audio Data API geschreven om tot datzelfde punt te komen, zoals [DSP.js](https://github.com/corbanbrook/dsp.js/).

Het volgende voorbeeld zal een ingelezen geluidsbestand, bijvoorbeeld via [XMLHttpRequest](http://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html), afspelen nadat er een lowpass filter toegepast is (Web Audio API).

```
var audioContext = new AudioContext();
function playAndAnalyzeAudio(inputBuffer /* ArrayBuffer */) {
  audioContext.decodeAudioData(inputBuffer, function(decodedData) {
    var inputNode = audioContext.createBufferSource(),
        filterNode = audioContext.createBiquadFilter();
    filterNode.type = 0; // BiquadFilterNode.LOWPASS;
    filterNode.connect(audioContext.destination);
    inputNode.buffer = decodedData;
    inputNode.loop = true;
    inputNode.connect(filterNode);
    inputNode.noteOn(0); // speel het geluid af.
  });
}
```

Persoonlijk geloof ik meer in een API die het gros van de berekeningen op een geoptimaliseerde manier kan uitvoeren, gezien de formules die in geluidsbewerking gebruikt worden veelal standaard zijn, maar tevens de mogelijkheid biedt om verder—imperatief—te gaan als je dat zelf wilt. Een voorbeeld hiervan zijn bijvoorbeeld CSS Animaties: animaties op de pagina gebruiken is al jaren mogelijk via JavaScript, maar juist omdat ze declaratief in CSS worden gedefinieerd kan een browser anticiperen op het resultaat en hardware gebruiken om het effect te tonen, wat tot een beter resultaat leidt. Een moderne Blu-Ray film met 7.1 geluidskanalen op 192 kHz zal over de anderhalf miljoen signalen per seconde verwerken, en hardware speelt hier een essentiële rol in.

Toch is er nog veel discussie aan de gang, en beide APIs zijn nog niet volledig in staat om met alle andere specificaties te integreren: de `<video>` en `<audio>` elementen, microfoon input via de `getUserMedia()`-methode en het synchroniseren van meerdere geluidsstromen via de nieuwe HTML5 [MediaController interface](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#synchronising-multiple-media-elements). Dit zijn allemaal vraagstukken waarop we in 2012 een antwoord gaan krijgen, want op het gebied van multimedia gaat het een heel interessant jaar worden!

### Over Peter Beverloo
/2011/12/peter-beverloo.jpg
[Peter Beverloo](http://peter.sh/) is een Software Engineer bij Google en onderdeel van de Chromium en WebKit teams. Hiernaast is hij actief op [Twitter](https://twitter.com/beverloo), deelnemer van projecten als [HTML5 Boilerplate](http://html5boilerplate.com/) en [W3Fools](http://w3fools.com/) en vrijwilliger bij de Fronteers en Mobilism conferenties.

Donatie: [Electronic Frontier Foundation](https://www.eff.org/)
Electronic Frontier Foundation zal ook namens mij een donatie ontvangen. Hun bezigheden zijn essentieel voor het voortbestaan van het vrije internet zoals we dat vandaag kennen.
