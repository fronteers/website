---
title: “To Hell With Bad Browsers”
date: 2009-02-16
author: Krijn Hoetmer
categories: 
  - Browsers
---
Precies 8 jaar geleden publiceerde Jeffrey Zeldman zijn artikel [To Hell With Bad Browsers](http://www.alistapart.com/articles/tohell). In datzelfde jaar kwam Internet Explorer 6 uit. En ondertussen bedienen we deze browser nog steeds met [hacks](http://www.positioniseverything.net/explorer.html). Wanneer wordt het tijd om IE6 ook de vinger te geven?

Hoe zit dit bij jullie? Hoeveel werk steek jij nog in IE6? Houden designers zich (onbewust) in, omdat ze geen PNG'tjes met alpha transparantie "kunnen" gebruiken? Is het echt zo erg om een beetje rond te strooien met een `zoom: 1;` hier en daar? Of zit het probleem vooral bij JavaScript gerelateerd werk?

Zijn de 4% IE6 gebruikers hier op fronteers.nl een beetje tekenend voor overige sites, of zit het meer in de buurt van de 60% (!), zoals op youngprofessionaloftheyear.nl (een site die vooral leeft bij de grotere bedrijven van Nederland)? Zien jullie ook Firefox pieken 's avonds en in het weekend, en diepe IE dalen rond diezelfde tijd? Wat kunnen we hier aan doen? _Willen_ we hier wel wat aan doen? [Wie helpen we](http://friendlybit.com/browsers/motivation-for-building-for-ie6/) als we [stoppen met hacken](http://www.robertnyman.com/2009/02/09/stop-developing-for-internet-explorer-6/)?

Heeft het zin als we IE6 gewoon een [naked year](http://www.dustindiaz.com/naked-day/) bezorgen, zoals Dan Cederholm [zou _kunnen_ doen](http://www.simplebits.com/notebook/2009/02/13/iegone.html):

```
<!--[if !IE]><!-->
 <link rel="stylesheet" href="screen.css">
<!--<![endif]-->
<!--[if gte IE 7]>
 <link rel="stylesheet" href="screen.css">
<![endif]-->
```

Waarom durven we het niet gewoon? *To Hell With Bad Browsers!* Of zijn we met z'n allen bang dat dat als "To Hell With Some Of Our Users" gezien gaat worden? De bezoekers mogen toch niet de dupe worden? Hoe lang houden we deze situatie nog in stand? Wordt het een combinatie van percentages bekijken en afwegen tegen de kosten van het ontwikkelen voor IE6 (die apart op een offerte kunnen staan), of is dit een vicieuze cirkel?
