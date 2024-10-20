---
title: 'Webrichtlijn 82: Het gebruik van frames'
date: 2009-02-24
author: Krijn Hoetmer
categories: 
  - Webrichtlijnen
---
Gebruik geen frames op websites. Dit geldt voor zowel reguliere frames binnen framesets, als zogenaamde iframes. ([R-pd.12.1](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/frames/richtlijnen/#r-pd-12-1))

Dat frames [veel nadelen hebben](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/frames/nadelen/), weet ([bijna](/blog/2008/02/webrichtlijnen-r-pd-2-4-en-r-pd-2-5#reactie-718)) iedereen. [HTML 5](http://www.whatwg.org/specs/web-apps/current-work/multipage/) ondersteunt ze dan ook niet, hoewel [het tekenen ervan](http://www.whatwg.org/specs/web-apps/current-work/multipage/rendering.html#frames-and-framesets) wel gesneden koek is. Kunnen wij nog cases bedenken waarbij `frameset` en `frame` wel toegevoegde waarde hebben?

Geldt hetzelfde echt voor [inline frames](http://www.whatwg.org/specs/web-apps/current-work/multipage/embedded-content-0.html#the-iframe-element)? Hier zijn toch wel goede toepassingen voor te bedenken? Of geldt het invoegen van een [IE6 upgrade bannertje](/blog/2009/02/wordt-noorwegen-ons-voorbeeld#reactie-816) niet als een goede case? Heeft een `iframe` dezelfde nadelen als gewone frames?

Wat vind jij trouwens van de nieuwe [`sandbox`](http://www.whatwg.org/specs/web-apps/current-work/multipage/embedded-content-0.html#attr-iframe-sandbox) en [`seamless`](http://www.whatwg.org/specs/web-apps/current-work/multipage/embedded-content-0.html#attr-iframe-seamless) attributen die HTML 5 introduceert voor inline frames?

En wordt het embedden van een HTML document met het [`object` element](http://www.whatwg.org/specs/web-apps/current-work/multipage/embedded-content-0.html#the-object-element) eigenlijk ook gezien als een `iframe`? Of kun je op die manier toch die functionaliteit krijgen _en_ een puntje scoren voor deze Webrichtlijn? Komt dit door een [formele inspectie](http://www.accessibility.nl/toetsing)?
