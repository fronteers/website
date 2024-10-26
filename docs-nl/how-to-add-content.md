Op de Fronteers-website hebben we de volgende contenttypen:

- Pagina's (waarnaar kan worden verwezen vanuit de navigatiebalken)
- Blogs
- Activiteiten
- Banen
- Leden

Deze worden gemaakt door "tags" toe te voegen in de frontmatter van een markdown-bestand. Zodra een pagina een waarde heeft voor "tags" (kan er één zijn, kan er meerdere zijn), wordt de pagina opgeslagen als onderdeel van een verzameling.

Bekijk bijvoorbeeld de homepage: `src/index.md`:

```
---
layout: home.liquid
locale: nl

key: home
title: Homepage
---

## We verenigen front-endontwikkelaars! <br /> En dat doen we met trots.

<a href="{{locale}}/join-us/" class="button button-parentheses">Meer informatie
<span class="visually-hidden">over Fronteers</span></a>
```

Bovenaan het document definiëren we de instellingen van de pagina. De meeste [frontmatter voor pagina's is vooraf geconfigureerd](#pre-configuration-of-pages), en we proberen zo min mogelijk frontmatter op elke pagina in te stellen voor onderhoudbaarheid en leesbaarheid.

Laten we de frontmatter-instellingen doornemen zoals hierboven weergegeven:

- _layout_: stelt in welk lay-outbestand wordt gebruikt voor de lay-out van deze pagina
- _locale_: stelt de taal van de pagina in
- _tags_: stelt in tot welke verzameling deze pagina behoort.

Vervolgens zijn er enkele instellingen om deze pagina te laten verschijnen in de navigatiebalken in de header en footer:

- _footer_navigation_: is een Booleaanse waarde. Kan ook `header_navigation` zijn, als je wilt dat de huidige pagina wordt gelinkt vanuit de headernavigatiebalk. Als je dit niet in de frontmatter gebruikt, wordt de link niet weergegeven in een navigatiebalk.
- _key_: Is een unieke sleutel die deze pagina op de website identificeert. Het wordt gebruikt voor drie dingen:
- het wordt gebruikt om een ​​canonieke linktag in de `<head>` in te stellen (die je kunt vinden in het bestand `src/_includes/partials/utility/html-head.liquid`);
- het wordt ook gebruikt om de pagina te vertalen; in `src/_includes/partials/page-header/translate.liquid` wordt de sleutel gecontroleerd op andere pagina's die dezelfde sleutel hebben, dus wanneer de bezoeker van de site op de NL- of ENG-link rechtsboven op de site klikt, komt hij op dezelfde pagina terecht, maar dan in de vertaalde versie. Als er geen overeenkomstige sleutel wordt gevonden, wordt de bezoeker terugverwezen naar de root van de andere taalversie;
- ten slotte wordt het gebruikt om naar deze pagina te verwijzen in de frontmatter van een andere pagina als een ouder van die pagina.
- _order_: Een string met daarin een numerieke waarde (het moet tussen aanhalingstekens staan!). Het nummer geeft Eleventy de opdracht om dit navigatie-item op de gewenste plaats in de gewenste volgorde te zetten.
- _parent_: wanneer ingesteld, verwijst de waarde van deze instelling naar een andere pagina op de website die wordt weergegeven in een navigatiebalk, om de huidige pagina om te zetten in een subitem in de navigatie.

## Algemene frontmatter-instellingen

- _permalink_: de URL die Eleventy voor de pagina moet genereren, handig voor het maken van eenmalige landingspagina's. Wordt gebruikt om de URL voor de pagina te overschrijven naar iets dat gebruiksvriendelijker is voor de lezer. De meeste permalinks worden automatisch gegenereerd volgens de bestandsstructuur. Bijvoorbeeld, `src/nl/jobs/archief` wordt weergegeven als `https://fronteers.nl/nl/jobs/archief/index.html .
- _title_: De paginatitel. Als het bestaat, wordt het gebruikt in de tag `<title></title>` en metatags
- _date_: moet een datum zijn in de indeling `JJJJ-MM-DD`, of de letterlijke tekenreeks "Laatst gewijzigd" om het de buildtijd te laten zijn. Als je een datum in de toekomst toevoegt, wordt deze voor die datum gepland.
- _author_: de naam van de auteur van de pagina. Gebruik de volledige naam van de persoon, voornaam en achternaam, en dit zal linken naar de ledenpagina van de auteur als deze bestaat.

## 'Blogs' frontmatter-instellingen

- _summary_: Voeg een handmatige (korte) samenvatting toe voor de blogpost
- _categories_: kan er één of meerdere zijn. Waarden worden toegevoegd aan een array, die we gebruiken om paginatags te tonen aan 'jobs', 'activities' en 'blogposts'. <span id="categories-syntax">Syntaxis:</span>

```
# enkele categorie
categorieën: Junior

# ook geldig
categorieën:
- Junior

# meerdere categorieën:
categorieën:
- Medior
- UX Developer
```

## 'Jobs' frontmatter-instellingen

- _backgroundcolor_: Stel een kleur in. Dit kan een waarde zijn zoals `skyblue`, maar ook een van onze CSS-eigenschappen, zoals `var(--lilac);`
- _summary_: Voeg een handmatige (korte) samenvatting toe voor de vacature
- _categories_: kan er één of meerdere zijn. Waarden worden toegevoegd aan een array, die we gebruiken om paginatags te tonen voor 'jobs', 'activities' en 'blogposts'. [Zie hierboven voor syntaxis](#categories-syntax)

## Afbeeldingen toevoegen aan 'blogs' en 'jobs'

Blogs en jobs gebruiken een afbeelding in hun lay-outs. Zo stel je een afbeelding in:

```
afbeelding:
src: /assets/images/banner-conference.jpg
alt:
```

Als je alleen een bedrijfslogo wil uploaden, kun je deze toevoegen in de map `nl/jobs/company-logos` en ernaar verwijzen met de afbeelding src `/assets/company-logos/eagerly-internet-logo.png`

## 'Activiteiten' frontmatter-instellingen

Dit zijn unieke velden voor het type `activiteiten`:

- _eventdate_: moet een datum zijn in de notatie `JJJJ-MM-DD`. Dit is de datum waarop een evenement plaatsvindt. Activiteiten worden gesorteerd op basis van deze waarde.
- _summary_: Voeg een handmatige (korte) samenvatting toe voor de activiteit
- _categories_: kan één of meerdere zijn. Waarden worden toegevoegd aan een array, die we gebruiken om paginatags te tonen aan 'jobs', 'activities' en 'blogposts'. [Zie hierboven voor syntaxis](#categories-syntax)

## 'Members' frontmatter-instellingen

Dit zijn unieke velden voor het type 'members':

- _summary_: Voeg een handmatige (korte) samenvatting toe voor de leden
- _freelancer_: Een booleaanse waarde. Bepaalt of dit lid wordt toegevoegd aan de verzameling 'freelancers'.
- _specialties_: Is gewoon een string, geen array met items.

## Pre-configuratie van pagina's' frontmatter

<span id="pre-configuration-of-pages">&nbsp;</span>

In sommige mappen, zoals `src/nl/jobs/`, vind je een `.JSON`-bestand. Dit bestand bevat de standaardinstellingen voor de pagina's (ongeacht of ze de extensie `.liquid` of `.md` hebben) in dezelfde map en de pagina's in de submappen.
