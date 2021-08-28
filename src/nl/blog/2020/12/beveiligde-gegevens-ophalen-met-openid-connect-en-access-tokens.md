---
title: Beveiligde gegevens ophalen met OpenID Connect en access tokens
date: 2020-12-31
author: Jasha Joachimsthal
summary: Wat hebben de website van je bank, een webshop en Twitter gemeen? Ze hebben een publiek gedeelte en tonen daarnaast content op basis van je account. Nadat je bent ingelogd, kun je bij je bank je saldo bekijken, geld overmaken of een nieuwe pas aanvragen. Op de webshop kun je eerdere bestellingen raadplegen of je verlanglijstje bijwerken. Bij Twitter kun je tweets plaatsen, notificaties ontvangen of je profiel aanpassen.
categories: 
  - Adventskalender
---
Wat hebben de website van je bank, een webshop en Twitter gemeen? Ze hebben een publiek gedeelte en tonen daarnaast content op basis van je account. Nadat je bent ingelogd, kun je bij je bank je saldo bekijken, geld overmaken of een nieuwe pas aanvragen. Op de webshop kun je eerdere bestellingen raadplegen of je verlanglijstje bijwerken. Bij Twitter kun je tweets plaatsen, notificaties ontvangen of je profiel aanpassen.

Het is wel de bedoeling dat de frontend de gegevens van de juiste gebruiker toont. In deze blogpost lees je hoe dat kan met het gebruik van OpenID Connect en access tokens.

# Sessies

Als alle pagina's volledig op de server worden gerenderd, hoef je als front-ender je alleen bezig te houden met de opmaak van de inlogpagina. Bij het opvragen van een beveiligde pagina stuurt de server je door naar de inlogpagina. De gebruiker vult een gebruikersnaam en wachtwoord in. Als deze juist zijn, maakt de server een sessie aan en zet de identifier van deze sessie in een cookie. Bij elke (beveiligde) pagina stuurt de browser het sessiecookie mee en de server geeft de persoonlijke content terug zolang de sessie geldig is.

Bij client side rendering kun je dit nog steeds doen. Vraag je beveiligde gegevens op of wil je gegevens wijzigen, dan kan het antwoord een http response status 401 zijn: authorisatie vereist. Op basis van deze response laat je de gebruiker inloggen. Ook dan kan de server een sessiecookie meesturen waardoor de volgende requests wel de beveiligde gegevens kunnen opvragen of aanpassen.

De backendontwikkelaar of de beheerder moeten hier wel extra moeite voor doen. Sessies zijn normaal gesproken gebonden aan een server. Doe je een request op een andere server, dan zal deze opnieuw vragen om in te loggen. Bij een wat grotere website heb je al snel te maken met meerdere servers om beschikbaarheid te garanderen. Ook hier zijn oplossingen voor: de gebruiker elke keer op dezelfde server uit laten komen of de sessies synchroniseren tussen de servers. Dit zullen backend developers en beheerders moeten inregelen.

Grotere websites kunnen uit verschillende backend applicaties bestaan die onderling geen sessies uit kunnen wisselen maar wel willen weten wie er ingelogd is. Elke backend applicatie zou dan zowel verantwoordelijk zijn voor het inloggen als het teruggeven van de juiste gegevens.

# JSON Web Tokens

Een alternatief voor sessiecookies is het gebruik van tokens die je per request meestuurt. Deze tokens kunnen willekeurige, niet te voorspellen strings zijn, maar ook [JSON Web Tokens](https://en.wikipedia.org/wiki/JSON_Web_Token). Een JSON Web Token (JWT, uit te spreken als "dzjôht") bestaat uit drie delen: een header, de payload en een signature (handtekening).

De payload is een JSON object met “claims”, bijvoorbeeld de geldigheid, voor wie het token bestemd is, je gebruikersnaam, e-mailadres of abonnement. Een voorbeeld van de payload van een JWT:

```
{
  "sub": "jasha",
  "iss": "https://example.com/op",
  "aud": ["Fronteers"]
}
```

In dit voorbeeld heeft de payload van de JWT drie claims: sub (gebruiker) en iss (issuer) en aud (audience). Deze claims worden later uitgelegd. Wanneer de frontend mijn profiel opvraagt bij de server, stuurt deze de JWT mee met het request. De backend valideert de JWT en stuurt vervolgens mijn profiel terug naar de frontend.

## Validatie: signature

Hoe kun je een JWT valideren? De uitgever van de JWT zal de header en payload ondertekenen met een JSON Web Key (JWK). Hierbij wordt een cryptografisch algoritme gebruikt. De meest veilige variant werkt met een geheime en een publieke sleutel. De uitgever gebruikt de geheime sleutel om de signature aan te maken. De ontvanger kan vervolgens met de publieke sleutel deze handtekening valideren. Als deze validatie slaagt, weet de ontvanger dat er niet met de JWT is gerommeld. Hierbij is het van groot belang dat die geheime sleutel ook echt geheim blijft.

Om de handtekening te valideren moet de ontvanger de publieke sleutel en het algoritme wel weten. Dit kan op twee manieren: de uitgever stelt een lijst van publieke sleutels online beschikbaar met het bijbehorende algoritme. Deze lijst bevat vaak de huidige sleutel, maar ook de vorige en een toekomstige zodat de uitgever een nieuwe set sleutels kan gaan gebruiken zonder dat de eindgebruiker hier last van heeft. Het kan ook dat de publieke sleutels en het algoritme voor een deployment worden uitgewisseld, bijvoorbeeld via e-mail. Een nadeel is dat deze lijst handmatig moet worden bijgewerkt.

## Validatie: claims

De payload van een JWT kan (optionele) claims bevatten met betrekking tot de geldigheid:

* `iss` (issuer): een unieke identifier voor de uitgever. Is deze anders dan je verwacht, dan kun je de JWT niet vertrouwen.
* `aud` (audience): een lijst van identifiers voor de ontvangers. Alleen als de identifier van jouw applicatie er tussen staat, hoor je de JWT te vertrouwen. Waarom is dit een lijst? Een JWT mag je namelijk doorgeven aan bijvoorbeeld je backend. Ook de backend applicaties kunnen in de `aud` claim voorkomen en die kunnen zelf dan weer de JWT valideren en gebruiken voor het teruggeven van data.
* `sub` (subject): unieke identifier van de gebruiker.
* `exp` (expiration time): timestamp tot wanneer deze JWT geldig is. Is deze tijd verstreken, dan dien je de JWT niet meer te accepteren.
* `nbf` (not before): timestamp vanaf wanneer deze JWT geldig is. Is deze tijd nog niet bereikt, dan mag je deze JWT nog niet accepteren.

Door de combinatie van de handtekening en deze claims kunnen de frontend en diverse backend services onafhankelijk van elkaar beslissen tot welke (beveiligde) gegevens de gebruiker op dat moment toegang heeft. Hierdoor is het niet meer nodig sessies te synchroniseren.

# OpenID Connect

Hoe kom je aan een JWT? Hiervoor zijn standaarden ontwikkeld. Een daarvan is [OpenID Connect](https://openid.net/) (OIDC). OpenID Connect is een laag bovenop [OAuth 2.0](https://oauth.net/). Waar OAuth alleen de authorisatie regelt (wat mag je), regelt OIDC ook de authenticatie (wie ben je). In het vervolg behandel ik ze als één standaard waarbij ik de termen van OpenID Connect gebruik.

![Schematische weergave van gegevens ophalen met OpenID Connect](https://fronteers.nl/_img/adventskalender/2020/oidc-schema-4.svg)

Jouw webapplicatie (een Relying Party, RP, genoemd in OpenID Connect) doet een authenticatieverzoek bij de OpenID Provider (OP, de server). Ik zou je aanraden hiervoor een bestaande library te gebruiken. De OpenID Foundation heeft een aantal [libraries gecertificeerd](https://openid.net/certification/#RPs), wat betekent dat ze aan de specificaties voldoen voor een RP implementatie.

De OpenID Provider kan je vragen in te loggen, maar als er al een bestaande sessie is, mag die vaak hergebruikt worden. Hoe je inlogt verschilt per OP. Eventueel zal de OP jou toestemming vragen om bepaalde gegevens te delen met de RP of acties toe te staan. Dit soort schermen heb je waarschijnlijk wel gezien als je op een website inlogt met je Facebook of Google account. Na succesvolle authenticatie via de OpenID Provider ontvangt de Relying Party maximaal 3 tokens: een ID token, een access token en een refresh token.

## ID token

De OpenID Provider kan een ID token teruggeven. Een ID token is een JWT met [claims](https://openid.net/specs/openid-connect-core-1_0.html#Claims) voor onder andere de tijd en wijze van authenticatie, maar ook gegevens over de gebruiker zoals naam, e-mailadres, telefoonnummer, adres en geboortedatum. Als de OP een ID token met daarin bijvoorbeeld de naam van de gebruiker meestuurt, kun je die informatie direct gebruiken voor personalisatie van je website.

## Access token

Het access token gebruik je om beveiligde gegevens op te halen of te wijzigen in je backend. Je stuurt het access token met elk request naar de backend mee. Vroeger was dit vaak een willekeurige string. De backend controleerde vervolgens bij de OpenID Provider of het access token geldig was, bij welke gebruiker dit hoorde en welke toestemmingen er waren gegeven. Tegenwoordig is een access token vaker een JWT, zodat deze controle niet meer strict noodzakelijk is. De geldigheid, gebruiker en toestemmingen (scopes) kunnen immers als claims in de JWT staan. De backend kan bij elk request de geldigheid controleren en heeft daardoor geen sessie meer nodig.

## Refresh token

Access tokens zijn beperkt geldig, variërend van enkele minuten tot een dag of zelfs langer. De OpenID Provider bepaalt en stuurt deze mee in de response naar de Relying Party. Met het access token kan ook een refresh token meegestuurd worden. Als de Relying Party ziet dat het access token bijna verloopt, of als dit token geweigerd wordt door de backend, dan kan het met een refresh token bij de OP een nieuw access token ophalen. Dit refresh token moet daarom zo veilig mogelijk bewaard worden. De RP moet dit refresh token ook niet delen met de backend of andere sites. Er zijn nog geen echt veilige mogelijkheden om gegevens in de browser op te slaan. [`sessionStorage`](https://developer.mozilla.org/nl/docs/Web/API/Window/sessionStorage) is op dit moment acceptabel voor het opslaan van een refresh token, maar scripts die toegang hebben tot de DOM kunnen je `sessionStorage` uitlezen.

Bij Relying Parties die via de backend access tokens aanvragen, is de geldigheid van refresh tokens vaak onbeperkt of voor een langere periode. Voor client side applicaties, zoals bijvoorbeeld een React app, is het advies om een refresh token beperkt geldig te laten zijn tot maximaal een aantal uren gerekend vanaf de uitgifte van het eerste access token na inloggen. Gedurende die geldigheid kan de RP nieuwe access tokens aanvragen. Is ook de geldigheid van de refresh tokens verlopen, dan moet de gebruiker opnieuw inloggen.

# Verschuiving van verantwoordelijkheden

Wordt het voor jou als frontender nou echt makkelijker om OpenID Connect en access tokens te gebruiken ipv klassieke sessies met een simpel inlogformulier? Waarschijnlijk niet, want nu is de frontend verantwoordelijk voor het zo veilig mogelijk opslaan van tokens en nieuwe tokens aan te vragen als de oude (bijna) verlopen zijn.

Bij volledig publieke websites heb je meestal geen tokens nodig, maar bij gepersonaliseerde websites kun je hier wel mee te maken krijgen. Een reden kan zijn dat het inloggen, het teruggeven van je bestelgeschiedenis en het beheren van je favorieten door drie verschillende webapplicaties wordt afgehandeld. Voor de gebruiker is dit echte één website waarvoor die verwacht met één keer inloggen bij al diens gegevens te kunnen.

In de backend wordt het wel eenvoudiger. Er is geen synchronisatie van sessies nodig, slechts één applicatie houdt zich bezig met het uitgeven van de tokens, terwijl de andere applicaties los van elkaar de access tokens kunnen consumeren voor het teruggeven of wijzigen van beveiligde gegevens.