---
title: 'Webrichtlijn 13, 14 &amp; 15: Beschrijvende markup, kopregels'
date: 2008-03-11
author: Krijn Hoetmer
categories: 
  - Markup
  - Webrichtlijnen
---
Schrijf zowel grammaticaal correcte, als beschrijvende markup. ([R-pd.3.1](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/beschrijvende-markup/#r-pd-3-1)) Gebruik markup voor kopregels die de hiërarchie van de informatie op de pagina uitdrukken. ([R-pd.3.2](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/beschrijvende-markup/het-schrijven-van/kopregels/#r-pd-3-2)) Sla in de markup geen niveaus in de hiërarchie van kopregels over. ([R-pd.3.3](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/beschrijvende-markup/het-schrijven-van/kopregels/#r-pd-3-3))

De webrichtlijnen leggen veel focus op [semantische markup](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/beschrijvende-markup/voorbeelden/). [Validiteit wordt even aangehaald](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/beschrijvende-markup/#beschrijvende-valide-verschil) (hoewel dat _niet_ hetzelfde is als well-formedness). Gestreefd wordt naar zowel _grammaticaal correcte_ (valide) als _beschrijvende_ (semantische) markup. Ik denk dat we [validiteit](/blog/2008/01/webrichtlijnen-r-pd-2-1) al aardig besproken hebben, dus laten we meteen beginnen met semantiek en [kopregels](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/beschrijvende-markup/het-schrijven-van/kopregels/).

In HTML 4.01 hebben we [de keuze](http://www.w3.org/TR/html4/struct/global.html#h-7.5.5) uit `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>` en `<h6>`, waarmee we de hiërarchie van de informatie op een pagina kunnen uitdrukken. Volgens de webrichtlijnen mogen we geen niveau overslaan op een pagina. Hoeveel CMS'en volgen die richtlijn ook echt?

Wat doe jij meestal met de `<h1>`? Zet je het logo van een site wel eens op het hoogste niveau (zoals hier op fronteers.nl)? Waarom wel/niet? En gebruik jij wel eens meerdere `<h1>`'tjes op 1 pagina?

Geef je navigatiemenu's ook altijd een kop? En hou je daarbij rekening met de hiërarchie in de pagina, of zet je daar soms stiekem gewoon een `<h6>` boven? :)

Zijn er trouwens SEO experts die meelezen en hierover nog iets kunnen vertellen? Hoe belangrijk vinden zoekmachines een goede koppenstructuur? En is het echt zo dat (verborgen) koppen boven een menu de overige kopjes op datzelfde niveau in een pagina minder belangrijk maken? En wat vindt de SEO wereld van bijvoorbeeld `<h2><img src="..." alt="Koptekst"></h2>`?

Tot slot: wat vinden we van toekomstige oplossingen die bijvoorbeeld [XHTML 2](http://www.w3.org/TR/xhtml2/mod-structural.html#sec_8.5.) en [HTML 5](http://www.whatwg.org/specs/web-apps/current-work/multipage/section-sections.html#headings) voor ogen hebben?
