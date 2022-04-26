---
title: "Maak deze kerst een vriend blij met lekker makkelijke collapsibles"
date: 2019-12-17
author: Roel van Gils
categories: 
  - Adventskalender
---
Ik heb een paar vreemde gewoonten. Een ervan is dat ik op iedere website met een accordeon of een FAQ mijn code inspector even opengooi. Gewoon om te checken of de developers `<details>` en `<summary>` gebruikt hebben voor het open- en dichtklapgebeuren. Je zou namelijk wel gek zijn om deze handige HTML-elementen niét te gebruiken in 2019. Helaas moet ik in de meeste gevallen mijn code inspector hoofdschuddend weer sluiten.

Als jouw reactie nu *duh!* is, dan hoef je natuurlijk niet verder te lezen. Dan stuur je dit artikel gewoon naar een onfortuinlijke developer die collapsibles nog met de hand in elkaar puzzelt. Like an animal. Zo heb jij je goede decemberdaad gesteld, en hebben we samen het web weer een stukje makkelijker en toegankelijker gemaakt.

# Het open- en dichtklapgebeuren?

Een collapsible is een dingetje dat je kunt open- en dichtklappen om informatie te tonen of te verbergen. Je vindt ze overal op het web: in FAQ’s, in formulieren en in de filternavigatie op webshops.

Moeilijk is het niet om ze te bouwen: je hebt een `onclick` event nodig, een snuifje CSS en enkele regels JavaScript om te *togglen*.

Maar er is meer: een *toegankelijke* collapsible moet je ook kunnen bereiken en bedienen met het toetsenbord. Bovendien moet een screenreader de *status* van de collapsible (open of dicht) kunnen oppikken. Daarvoor moet je met `aria-expanded` in de weer. Voor je het weet, voel je de verleiding om er een jQuery plugin tegenaan te gooien. Niet nodig.

# Lekker makkelijk

Nieuw zijn ze niet, maar het heeft een tijd geduurd voor de ondersteuning in alle browsers goed werd. Daarom lijken sommige developers ze vergeten te zijn. Maak dus (opnieuw) kennis met `<details>` en `<summary>`:

```
<details>
  <summary>Wat is groen en heeft een gewei?</summary>
  <p>Een dophertje.</p>
</details>
```

Als je op `summary` klikt, kan je de vraag open- en dichtklappen. Geen JavaScript of CSS nodig en toegankelijk ‘out of the box’. Het werkt perfect in [bijna alle browsers](https://caniuse.com/#search=details) en tot wanneer de Chromium-gebaseerde verse van Edge uit beta is, kan je nog steeds [Mathias Bynens’ (allereerste) `detail` polyfill](https://github.com/mathiasbynens/jquery-details) uit 2012 gebruiken.

# Wacht! Kan ik zo’n collapsible ook opsmukken?

Zeker. Je kan zowel de `summary` als de `details` prima stijlen en binnen de `summary` kan je je eigen markup gebruiken.

Als je geen fan bent van de standaard focus ring, kan je die vervangen door iets aantrekkelijkers. Zorg er wel voor dat je de focus ring niet weghaalt, want dat is heel vervelend voor gebruikers die de muis niet kunnen gebruiken.

Ik snap ook dat je heel graag het pijltje zélf wilt stijlen, want in de meeste browsers is dat standaard een zwart driehoekje. Ook dat is makkelijk:

```
summary {
  list-style-image: url(pijltje.svg);
}
```

Voor browsers die op Webkit zijn gebaseerd (zoals Safari), moet je wel even deze extra selector toevoegen:

```
summary::-webkit-details-marker {
  background: url(pijltje.svg);
  color: transparent;
}
```

Wat helaas niet zo makkelijk kan, is het veranderen van de aanwijsrichting van je eigen pijltje. Als je dat echt wilt, moet je alsnog met JavaScript aan de slag, maar laat dat de pret niet bederven.

Lees meer [over `details` en `summary` op MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary).

(TODO: Over Roel van Gils
/adventskalender/roel.jpg
Roel noemt zichzelf een Digital Accessibility Nerd. Met zijn bedrijf Eleven Ways (gevestigd in Gent) helpt hij overheden en bedrijven die hun websites en apps voor zoveel mogelijk mensen toegankelijk willen maken. Roel steekt ook wel eens een handje toe bij het organiseren van Fronteers-bijeenkomsten in Vlaanderen. Hij twittert als [@roelvangils](https://twitter.com/roelvangils).
Roels donatie gaat naar de Hersenstichting.)
