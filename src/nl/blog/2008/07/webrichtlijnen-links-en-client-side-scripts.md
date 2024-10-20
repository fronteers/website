---
title: Webrichtlijn 48, 49 &amp; 50: Links en client-side scripts
date: 2008-07-01
author: Krijn Hoetmer
categories: 
  - Scripting
  - Webrichtlijnen
---
Bij het gebruik van client-side script in combinatie met een link: maak de scriptfunctionaliteit een uitbreiding op de basisfunctionaliteit van de link. ([R-pd.8.5](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/links-navigatie/client-side-scripts/#r-pd-8-5)) Bij het gebruik van client-side script in combinatie met een link: indien de link nergens naartoe leidt, confronteer de bezoeker zonder ondersteuning voor client-side script dan niet met een niet-werkende link. ([R-pd.8.6](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/links-navigatie/client-side-scripts/#r-pd-8-6)) Bij het gebruik van client-side script in combinatie met een link: indien noodzakelijk, gebruik client-side script als een uitbreiding op server-side functies. ([R-pd.8.7](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/links-navigatie/client-side-scripts/#r-pd-8-7))

`<a href="javascript:foo();">` is natuurlijk verschrikkelijk _evil_! Doe dan op z'n minst `<a href="#" onclick="foo();">` (of `onclick="[javascript:foo();](http://www.hedgerwow.com/360/dhtml/js_label/)"`, wat wel zo professioneel staat). Maar wat als je deze link met JavaScript genereert?

Wat doe je als je een lijst met 20 links hebt, waarvan je er slechts 5 wilt tonen (althans, dat wil de ontwerper). Onder de lijst staat een mooi linkje met 'Meer links', die de overige 15 toont? Hoe voeg je dit met JavaScript toe en wat zet je in het `href` attribuut van de link? Hoort dit eigenlijk wel een `<a>`'tje te zijn?

Tabbladen zijn volgens mij een mooi voorbeeld van hoe je links en scripting kunt combineren. Hoe los je dit op, als je het zelf script? Zorg je ervoor dat de links bookmarkable zijn, of in een nieuwe browser tab zijn te openen? Gebruik je `return false;` in de links, of laat je de browser 'springen' naar `#het-id`?

Hoe ver ga je bij bijvoorbeeld carrouselletje met _sfeerafbeeldingen_, waar je met JavaScript doorheen kunt klikken? Is dit iets wat je op de back-end ook laat werken, of vinden we dat te veel gedoe? En in dat laatste geval, wat zet je in de `href=""`? En dezelfde vraag voor _blokken tekstuele content_, die in een carrousel staan, en waar je stoere Web 2.0 Ajax (_niet_ AJAX) effectjes overheen gooit.

En na al dat geneuzel met het nadenken over twee paden in je site (eentje met en eentje zonder JavaScript) kom je erachter dat je het toch nog niet goed doet. Want je mooie Ajax carrousel werkt misschien 'perfect' met en zonder JavaScript, maar hoe werkt het bijvoorbeeld in screenreaders die JavaScript wel ondersteunen, maar animaties met verdwijnende en verschijnende content niet uit kunnen drukken? [ARIA](http://www.w3.org/WAI/intro/aria), met [Live Regions](http://juicystudio.com/article/wai-aria-live-regions.php)? Of vinden we het al goed genoeg dat we de webrichtlijnen naleven?
