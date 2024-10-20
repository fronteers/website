---
title: 'Front-end vraagstukken: Gebruik van javascript libraries'
date: 2009-03-27
author: Sander van Lambalgen
categories: 
  - Front-end vraagstukken
  - Scripting
---
In het kader van front-end vragen uit de vereniging ([vragen blijven welkom](/contact)) stelt Jeroen Mulder een aantal gerelateerde vragen over het grootschalig gebruik van javascript libraries:

Unobtrusive Javascript is voor de meeste front-end ontwikkelaars een normale zaak geworden. Libraries als jQuery, Dojo en Prototype maken het met functionaliteiten als CSS selectors en event binding nog makkelijker om snel en unobtrusive functionaliteiten in een bestaand document te verwerken.

In een website waar op steeds meer plaatsen functionaliteiten in Javascript worden ontwikkeld, hoe zorg je er voor dat een middel tot groot developmentteam dit op een wijze doet die de onderhoudbaarheid en front-end performance niet verslechteren?

Specifiek voor degenen die uitgebreide ervaring hebben met het gebruik van een Javascript library: hoeveel werk doe je nog naast het gebruik van de library om de code herbruikbaar en onderhoudbaar te houden?

Ik denk dan met name aan de volgende drie vraagstukken:

1. Hoe weet een ontwikkelaar of bepaalde Javascript nog wel wordt gebruikt? En zo ja, op welke pagina's? Het gebruik van CSS selectors in Javascript maakt het net als in CSS zelf niet makkelijk om te zien hoe en waar welke code van toepassing is.

2. Hoe debugged een ontwikkelaar een document waarbij de Javascript functionaliteit op een unobtrusive manier wordt toegewezen? Als verschillende stukken code invloed hebben op de interactie van een element, hoe weet een ontwikkelaar waar hij of zij moet zoeken voor de verantwoordelijke code?

3. Hoe organiseer je het beste vele kleine Javascript functionaliteiten verspreid over een grote website? Kies je voor een aanpak waarbij je de functionaliteit als plugin inpakt welke volledig autonoom kan werken? Of kies je voor een aanpak waarbij de functionaliteit gevoed moet worden met een stel elementen en instellingen, welke vervolgens zichzelf registreert bij de onDOMReady handler?
