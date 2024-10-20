---
title: 'Webrichtlijn 52 &amp; 53: Tabben tussen links'
date: 2008-09-23
author: Krijn Hoetmer
categories: 
  - Markup
  - Webrichtlijnen
---
Voorzie in een logische volgorde van de links op de pagina. Gebruik het tabindex attribuut om van de standaard tabvolgorde van links af te wijken wanneer deze volgorde niet toereikend is voor correct gebruik van de pagina door toetsenbordgebruikers. ([R-pd.8.9](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/links-navigatie/tabben/#r-pd-8-9)) Maak het tabben naar links niet onmogelijk. Verwijder niet de focus rectangle rondom een link of de mogelijkheid tot focus op een link. ([R-pd.8.10](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/links-navigatie/tabben/#r-pd-8-10))

Wanneer gebruik jij het `tabindex` attribuut? Is onderstaande code een goede case, omdat gebruikers misschien verwachten dat je na je gebruikersnaam kunt tabben naar je wachtwoord? Of zou je de volgorde van de markup wijzigen?

```
<p>
 <label for="user">Gebruikersnaam:</label>
 <input type="text" name="user" id="user" tabindex="1">
</p>
<p>
 <label for="pass">Wachtwoord:</label>
 (<a href="/wachtwoord-vergeten" tabindex="3">vergeten?</a>)
 <input type="password" name="pass" id="pass" tabindex="2">
</p>
```

Begrijp jij nog welke waardes je het attribuut mag geven? [Tussen 1 en 32768?](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/links-navigatie/tabben/) [Tussen 0 and 32767?](http://www.w3.org/TR/html4/interact/forms.html#adef-tabindex) [Of ook negatieve waardes?](http://www.whatwg.org/specs/web-apps/current-work/multipage/editing.html#tabindex)

Hoeveel designers en/of opdrachtgevers en/of marketingafdelingen willen de [focus rectangle](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/links-navigatie/tabben/#focus-rectangle) nog steeds niet accepteren? Ga je de discussie aan, of geef je toe en doe je `:focus { outline: none; }` of iets wat erop lijkt? Of het nog mooiere `onfocus="this.blur()"` en equivalenten?

En is dit alles wel ons probleem? Moeten we gebruikers die graag met het toetsenbord door een site navigeren niet gewoon uitleggen hoe [spatial navigation](http://en.wikipedia.org/wiki/Spatial_navigation) werkt?

Of kunnen we niet gewoon [een site compleet opnieuw maken](http://www.sitepen.com/blog/2008/09/22/accessibility-experiment/)? Eentje speciaal voor gebruikers die graag tabben?
