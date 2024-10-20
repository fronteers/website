---
title: 'Webrichtlijn 83: Invoervelden en labels'
date: 2009-03-03
author: Krijn Hoetmer
categories: 
  - Webrichtlijnen
---
Gebruik het label element om tekst expliciet met een invoerveld in een formulier te associëren. ([R-pd.13.1](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/formulieren/toegankelijkheid/invoervelden-labels/#r-pd-13-1))

Deze richtlijn kun je op drie manieren naleven:

```
<!-- Mogelijkheid 1: -->
<label>
 Uw naam:
 <input type="text" name="naam">
</label>

<!-- Mogelijkheid 2: -->
<label for="naam">Uw naam:</label>
<input type="text" name="naam" id="naam">

<!-- Mogelijkheid 3: -->
<label for="naam">
 Uw naam:
 <input type="text" name="naam" id="naam">
</label>
```

In het tweede geval heb je een `for=""` en `id=""` paartje nodig. Welke manier heeft jouw voorkeur? Waarom?

Hoe ver ga je met labels in het volgende voorbeeld:

![Een simpel formulier met tekstlabels en invoervelden, met achter 1 invoerveld het woord "uur" en voor 2 invoervelden een €-teken.](https://fronteers.nl/_img/2009/03/labels.png)

En hack je in het volgende voorbeeld met positioning, of gebruik je gewoon 2 labels, ondanks [de problemen](http://www.456bereastreet.com/archive/200809/multiple_form_labels_and_screen_readers/):

![Een invoerveld met een tekstlabel aan de linkerkant en een foutmelding eronder.](https://fronteers.nl/_img/2009/03/foutmelding.png)

Hoe vaak kom je nog tegen dat een checkbox of een radio button niet geassocieerd is met een tekstlabel? Erger je je dan ook zo enorm?
