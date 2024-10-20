---
title: "Webrichtlijn 27 t/m 33: URL's"
date: 2008-05-06
author: Krijn Hoetmer
categories: 
  - Protocollen
  - Usability
  - Webrichtlijnen
---
Produceer unieke, onveranderende URL's ([R-pd.4.1](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/permanente-unieke-urls/produceren/#r-pd-4-1)) Dynamisch gegenereerde URL's dienen nog steeds naar dezelfde inhoud te verwijzen als inhoud wordt gewijzigd of toegevoegd. ([R-pd.4.2](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/permanente-unieke-urls/produceren/dynamische-urls/#r-pd-4-2)) Vermijd het gebruik van sessies in URL's. ([R-pd.4.3](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/permanente-unieke-urls/produceren/sessies/#r-pd-4-3)) Zorg voor doorverwijzing naar de nieuwe locatie bij het verplaatsen van informatie. ([R-pd.4.4](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/permanente-unieke-urls/produceren/doorverwijzing/#r-pd-4-4)) Automatische doorverwijzing dient, indien mogelijk, uitgevoerd te worden door de server. ([R-pd.4.5](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/permanente-unieke-urls/produceren/doorverwijzing/methodes/#r-pd-4-5)) Gebruik vriendelijke URL's, die leesbaar en herkenbaar zijn. ([R-pd.4.6](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/permanente-unieke-urls/vriendelijke-urls/#r-pd-4-6)) Zet een leesbare, uitbreidbare directory-structuur op. ([R-pd.4.7](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/permanente-unieke-urls/vriendelijke-urls/#r-pd-4-7))

Helaas zitten vrijwel al deze punten niet binnen het bereik van een front-ender, en zijn we hierbij afhankelijk van het te gebruiken CMS, framework of back-end taal. Het enige wat wij kunnen doen, is _geen_ gebruik maken van frames en `<meta http-equiv="refresh">`.

Waar we het wel over kunnen hebben, zijn onze voorkeuren. Wat vind _jij_ een mooie [URL](http://en.wikipedia.org/wiki/Uniform_Resource_Locator) (of [URI](http://en.wikipedia.org/wiki/Uniform_Resource_Identifier), of [IRI](http://en.wikipedia.org/wiki/Internationalized_Resource_Identifier))?

De webrichtlijnen spreken over het opzetten van een leesbare, uitbreidbare directory-structuur. Hoe doe je dit met bijvoorbeeld tags (die gecombineerd kunnen worden)?

Als je wel de controle over de infrastructuur van de URL's hebt, hoe ver ga je dan? Zorg jij dat iedere pagina op slechts 1 URL te vinden is? Hoe ver ga je met HTTP? Denk je na over het verschil tussen een `301` header, en een `302`? En als een pagina verwijderd is, gebruik je dan een `410`, in plaats van een `404`?

Hebben wij als front-enders, of de webrichtlijnen..als webrichtlijnen, genoeg overtuigingskracht (gehad) om grote, logge back-end systemen met nette URL's te laten werken? Of is dit vooral te danken aan SEO bedrijven en zoekmachines?
