---
title: 'Webrichtlijn 86 en 87: Formulieren en JavaScript'
date: 2009-08-11
author: Edwin Martin
categories: 
  - Webrichtlijnen
---
Vermijd automatische doorverwijzing bij interactie met formulieren. ([R-pd.13.4](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/formulieren/navigatie/automatische-doorverwijzing/#r-pd-13-4)) Gebruik geen client-side script of formulieren als de enige manier om informatie op de site te bereiken. ([R-pd.13.5](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/formulieren/navigatie/scriptlozen-zoekspiders/#r-pd-13-5))

Tegen de eerste webrichtlijn van vandaag [13.4](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/formulieren/navigatie/automatische-doorverwijzing/#r-pd-13-4) wordt vaak gezondigd. Veel websites gebruiken een selectiemenu als navigatie en springen gelijk na het selecteren naar de betreffende pagina. Is het niet zo dat veel bezoekers juist verwachten om vanzelf naar een pagina te worden gebracht na het kiezen uit een dergelijk selectiemenu? Is deze richtlijn daardoor niet verouderd? Zelfs usabilityguru Jakob Nielsen beweert dat regels af en toe veranderen omdat het gebruik van het web niet stilstaat, maar constant evolueert en de gebruikers mee-evolueren. Is het niet juist gebruikersvriendelijk om vanzelf te worden doorgelinkt? Daarnaast is een "Ga"-knop eenvoudig toe te voegen door deze tussen `<noscript>`-tags te zetten.

De tweede webrichtlijn [13.5](http://www.webrichtlijnen.nl/richtlijnen/#r-pd-13-5) is om een website optimaal beschikbaar te maken voor zoekmachines. Zoekmachines ondersteunen in het algemeen geen JavaScript en ze zullen ook geen formulieren versturen. Om alle pagina's van een website geïndexeerd te krijgen, zullen ze moeten worden opgenomen in lijsten met links, die voor de zoekmachine toegankelijk zijn.

Deze praktijk zien we bij de meeste database-gebaseerde websites terugkomen en mag als algemeen bekend worden aangemerkt. Hoe ga jij hiermee om? Maak je lijsten met links speciaal voor zoekmachines of zijn de links dezelfde die gebruikers zien? Zijn er gevallen waarbij je juist niet de informatie via links toegankelijk maakt?
