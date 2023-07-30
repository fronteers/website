---
title: Een button ontwerpen, het lijkt zo simpel
date: 2022-12-09
author: Jasha Joachimsthal
summary: 'Een van de eerste zaken die ik in Adobe XD heb ontworpen, waren buttons voor het nieuwe design system van mijn werkgever. Onze producten bevatten vooral pagina’s met formulieren en daar horen buttons bij. In prototypes probeer ik die buttons zoveel mogelijk het gedrag mee te geven voor de uiteindelijke implementatie. In deze blogpost beschrijf ik mijn ervaringen met het maken van een button in Adobe XD, het gebruik ervan in prototypes en hoe bruikbaar de CSS is voor de ontwikkelaars.'
categories: 
  - Adventskalender
---
Een van de eerste zaken die ik in Adobe XD heb ontworpen, waren buttons voor het nieuwe design system van mijn werkgever. Onze producten bevatten vooral pagina’s met formulieren en daar horen buttons bij. In prototypes probeer ik die buttons zoveel mogelijk het gedrag mee te geven voor de uiteindelijke implementatie. In deze blogpost beschrijf ik mijn ervaringen met het maken van een button in Adobe XD, het gebruik ervan in prototypes en hoe bruikbaar de CSS is voor de ontwikkelaars.

# Een button ontwerpen

Het ontwerp van een button begint met een rechthoek, een tekst en een icoontje op een artboard (een soort pagina). De rechthoek geef ik een witte achtergrond, een blauwe rand van 2 pixels en een schaduw. De hoeken van de rechthoek heb ik rond gemaakt met een border radius. Mijn button ziet er nu zo uit:

![Ontwerp van een button. Een ovale witte knop met een blauwe rand. In de button een plus-icoon en de tekst Voeg toe](https://fronteers.nl/_img/blog-jasha-1.png)

# Ontwerp van een button

De rechthoek en tekst heb ik gegroepeerd en vervolgens een padding meegegeven. Voor tekstvlakken kun je de hoogte of breedte in Adobe XD flexibel maken zodat die automatisch schaalt als er meer of minder tekst in staat. Ik heb de breedte van het label flexibel gemaakt. In combinatie met de padding zorgt dat ervoor dat de button automatisch schaalt als ik het label aanpas.

Een button in HTML heeft verschillende states die de gebruiker van elkaar moet kunnen onderscheiden:

* standaard (default)
* hover
* focus
* active
* disabled

Ook in Adobe XD kun je meerdere states aanmaken binnen een component. In dit geval heb ik voor de button een component aangemaakt met de bovenstaande vijf states. Elke state heeft een variant op de styling van de button, maar in de basis blijft het een vlak met een stuk tekst en dit vlak schaalt mee met de tekst.

# Interacties toevoegen

Met Adobe XD kun je meer dan alleen statische pagina’s ontwerpen. Het ondersteunt ook interacties die je aan elke laag binnen je artboard kunt koppelen. Ik heb  een interactie toegevoegd die  vanaf de default naar de hover state van de button gaat als er met een muis overheen gaat. Dit komt overeen met het gedrag van een echte button in HTML. Ik heb nog twee interacties toegevoegd: de overgang naar de active state bij een “tap” (muisklik) en de overgang naar de focus state als de gebruiker op de tab toets drukt. Dit levert het volgende prototype op:

{% vimeo "" %}

De overgang tussen de standaard en de disabled state definieer ik niet als interactie binnen het component in Adobe XD. De disabled state heeft in het ontwerp wel een eigen uiterlijk: geen schaduw, grijze tekst en achtergrond.

# Verschillen met een echte button

Het ontwerp van de button begint al redelijk te lijken op een echte button, maar er zijn wel wat verschillen. Deze verschillen zitten met name in de interacties die je in het prototype kunt maken voor de button, maar ook in de rendering.

Het eerste verschil zit in de focus state. Als een button focus heeft en de gebruiker vervolgens nog een keer de tab toets gebruikt, gaat de focus naar het volgende element op de pagina. Dat kan wel in Adobe XD maar is te omslachtig om in een prototype te verwerken.

Ik wilde de button een focusring meegeven. Deze focusring was in het ontwerp een tweede vlak met iets grotere afmetingen, maar daardoor versprong de button. Het is te begrijpen dat Adobe XD deze extra pixels als onderdeel ziet van de button. Uiteindelijk heb ik de outline uit het component gehaald.

Nog een verschil is het gedrag tijdens de klik op een button. Als je op een echte button klikt, zie je even de active state en vervolgens wordt de eigenlijke actie uitgevoerd. Dit is in Adobe XD niet mogelijk omdat je maar één overgang per interactie kunt instellen. De ontwerper moet een keuze maken tussen het laten zien van de active state of laten zien waar de button voor bedoeld is, bijvoorbeeld het versturen van een formulier. In het design system zie je de overgang naar de active state, terwijl in de prototypes de bedoelde actie te zien is.

# Hand-off naar de ontwikkelaar

Het gaat natuurlijk niet alleen om het laten zien van een interactie van de button. Uiteindelijk zal een front-end developer een echte button maken in HTML en CSS en daar eventueel met JavaScript interactie aan toevoegen.

Adobe XD kan gedeeltelijk CSS tonen die bij de button hoort. Verwacht geen kant-en-klaar component van HTML en CSS, al zijn daar wel plugins voor. Je krijgt CSS met absolute positionering per laag: de rechthoek (achtergrond, border), het icoontje en het label. Ook alle andere afmetingen zullen absoluut zijn: in px, dp of pt. Als de ontwerper de kleuren een naam heeft gegeven, zie je die als CSS variabelen terug die gelden voor het hele ontwerp. Sowieso krijg je de kleur (ook) direct in de CSS op de manier waarop de ontwerper die heeft gedefinieerd: hex, rgba of hsla.

CSS variabelen voor het project gegenereerd door Adobe XD:

```
:root {

/* Colors: */
--theme-background-hover: #EAEAF4;
--theme-color-darken: #423F9D;
--theme-color-primary: #2B24F5;
}
```

CSS fragment voor de box van de button gegenereerd door Adobe XD:

```
/* Layout Properties */

top: 34px;
left: 34px;
width: 144px;
height: 40px;

/* UI Properties */

border: 2px solid var(--theme-color-primary);
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 1px 1px 2px #00000054;
border: 2px solid #2B24F5;
border-radius: 20px;
opacity: 1;
```

CSS fragment voor de box van de button gegenereerd door Adobe XD:

```
/* Layout Properties */

top: 41px;
left: 72px;
width: 86px;
height: 27px;

/* UI Properties */

color: var(--theme-color-primary);
text-align: left;
font: normal normal bold 20px/24px Open Sans;
letter-spacing: 0px;
color: #2B24F5;
opacity: 1;
```

De ontwerper kan een fontgrootte en line-height definiëren, de hoogte van de box van de button en zelfs de padding binnen die box. Verwacht echter geen margins of paddings in de CSS. Daardoor kan er een verschil ontstaan tussen het bedoelde ontwerp en de implementatie. Adobe XD berekent aan de hand van het lettertype de verwachte hoogte van de tekst, die niet per se overeenkomt met de hoogte in de browser. De ontwikkelaar kan wel de afmetingen van de box en de afstanden tussen elementen opvragen om te controleren of die overeenkomen met de implementatie.

![Afstanden binnen de button volgens Adobe XD. Met stippellijntjes en ballonnetjes met cijfers laat Adobe XD zien hoe de uitlijning van de tekst is binnen de button](https://fronteers.nl/_img/blog-jasha-3.png)

Afstanden binnen de button volgens Adobe XD.

Een mogelijkheid om documentatie of een commentaar toe te voegen tijdens het ontwerpen ontbreekt. Opmerkingen kun je alleen in de gepubliceerde online versie toevoegen. In ons design system heb ik van een aantal componenten de gewenste marges erbij gezet.

# Was het echt zo simpel?

Het lijkt zo simpel: een button ontwerpen in Adobe XD en toepassen in een prototype. Toch is de werkelijkheid wat minder eenvoudig. De CSS geeft net een ander resultaat dan bedoeld in het ontwerp. De ontwikkelaar moet daardoor alsnog extra werk doen om de implementatie overeen te laten komen met het ontwerp.

Misschien heb ik de grenzen van Adobe XD opgezocht om een zo realistisch mogelijk prototype te maken. Aan de andere kant, als het een tool is om prototypes voor het web te maken, verwacht ik dat het zich ook zo kan gedragen als op het web.

Inmiddels ken ik de beperkingen van deze tool en weet ik ermee om te gaan. Zijn mijn verwachtingen te hoog geweest? Misschien is het voor een prototype voldoende om alleen de overgang van de ene naar de andere pagina te laten zien. Kan een ontwikkelaar verwachten dat een tool die geen button element kent, daar wel goede CSS voor genereert?

Nu sta ik voor de keuze: de beperkingen accepteren en bij Adobe XD blijven? Of Figma onder de knie krijgen en daar tegen (andere) grenzen aanlopen?
