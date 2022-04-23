---
title: Een &quot;that's all folks&quot; animatie in CSS met slechts één div
date: 2021-01-05
author: Kilian Valkhof
summary: CSS is opgebouwd uit allemaal rechthoeken. Rechthoeken kunnen boven of onder andere rechthoeken liggen. Rechthoeken kunnen ook weer andere rechthoeken in zich hebben, en dan kan je er voor kiezen dat de binnenste rechthoeken ook buiten hun omringende rechthoek zichtbaar zijn (dat ze _overflowen_) of dat ze afgekapt worden door de omringende rechthoek (met overflow:hidden).  Maar als je wilt dat een rechthoek aan één zijde wel buiten de omringende rechthoek zichtbaar is, maar niet aan de andere kant, dan kan dat niet. Toch?
categories: 
  - Adventskalender
graphic: 
  src: bloemen.png
  alt: Lampionnen
---
CSS is opgebouwd uit allemaal rechthoeken. Rechthoeken kunnen boven of onder andere rechthoeken liggen. Rechthoeken kunnen ook weer andere rechthoeken in zich hebben, en dan kan je er voor kiezen dat de binnenste rechthoeken ook buiten hun omringende rechthoek zichtbaar zijn (dat ze _overflowen_) of dat ze afgekapt worden door de omringende rechthoek (met overflow:hidden).

Maar als je wilt dat een rechthoek aan één zijde wel buiten de omringende rechthoek zichtbaar is, maar niet aan de andere kant, dan kan dat niet. Toch?

![Drie vierkanten waarbij bij de eerste een binnenste element er uit komt met de tekst "Dit kan" er onder. Bij de tweede blijft het binnenste element binnen de zichtbare rand, hier staat "Dit kan ook" onder. Bij de derde komt het binnenste element aan de bovenkant er uit, maar aan de onderkant niet. Hier onder staat "Dit kan ...niet".](https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/selection-633.png)

Misschien gaan er bij jou nu wel allemaal radertjes draaien: wat nou als ik de binnenste rechthoek kopieer en de helft clip en dan er precies boven positioneer dan lijkt het net alsof... Maar in principe kan je er niet voor kiezen dat één element aan bijvoorbeeld de bovenkant uitsteekt, maar niet aan de onderkant. Of toch wel?

# 3D transformaties

Een tijdje terug was ik een lijst aan het verzamelen van websites die [interessant gebruik maken van CSS 3D transforms](https://polypane.app/css-3d-transform-examples/). Met CSS 3D transforms kan je elementen in 3D roteren, transformeren en verplaatsen, en ook cross-browser werkt dat ondertussen gewoon prima.

Er zijn twee CSS properties die je moet inzetten om elementen in 3D te kunnen positioneren:

* `perspective` met een waarde in pixels, om te bepalen hoe sterk het 3d effect moet zijn.
* `transform-style: preserve-3d`, om de browser te vertellen dat je de 3D-transformaties wilt behouden

Toch zie je het niet veel gebruikt worden, en ook ik had er nog niet heel veel mee geprobeerd. Websites blijven toch een "2d" iets, een scrollende, platte pagina.

De meest interessante 3D transform die ik tegen kwam was deze:

![Drie vlakken die in 3d ruimte boven elkaar zweven.](https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/selection-630.png)

Hoewel je drie vlakken ziet, is dit slechts éen div. De andere twee vlakken zijn de `::before` en `::after`, die door middel van de `translate()` CSS functie omhoog en omlaag zijn verplaatst, en zo boven elkaar liggen.

Wat me daar op viel was hoe het `::after` element, wat normaal gesproken over een element ligt _achter_ de div zelf zat. Dat kreeg de maker voor elkaar met `transform: translateZ(-1px);`.

Hoewel ik daarvoor al veel andere transforms had gezien was dit de eerste die me echt deed beseffen dat ik elementen in 3D ruimte aan het positioneren was. En als dat kan, dan kunnen ze elkaar dus ook doorkruizen:

![Twee vlakken die elkaar in 3D ruimte doorkruizen.](https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/selection-631.png)

Ik wist niet direct wat ik daar mee kon, maar niet veel later zag ik een plaatje van een tekenfilmfiguurtje wat uit een frame leek te komen: aan de onderkant zat het achter het frame, maar het gezicht aan de bovenkant kwam er uit. Zou ik dat met CSS kunnen namaken? En als extra uitdaging, met maar één element?

Ik zat wat te pielen en al vrij snel had ik dit:

![Een oranje vierkant dat door een blauwe rand steekt: aan de bovenkant zit het over de blauwe rand, maar aan de onderkant zit het achter de rand.](https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/selection-632.png)

In dit plaatje zie je één div met een `::before` en een `::after`. De div zelf is transparant, de `::before` heeft een border en de `::after` is op de X-as geroteerd. Doordat de div `perspective` heeft wordt alles in 3d gepositioneerd, en daarmee ligt het `::after` element aan de bovenkant _voor_ de border, en aan de onderkant _achter_ de border.

```
div {
  transform: perspective(3000px);
  transform-style: preserve-3d;
  position: relative;
  width: 200px;
  height: 200px;
}

div::before {
  content: " ";
  width: 100%;
  height: 100%;
  border:10px solid darkblue;
}

div::after {
  content: " ";
  position: absolute;
  background: orangered;
  width: 80%;
  height: 150%;
  display: block;
  left: 10%;
  bottom: -25%;
  transform: rotateX(-10deg);
}
```

Klik door naar de [Codepen](https://codepen.io/Kilian/pen/ZEpQQdo) om het in actie te zien.

# Tussendoor, `perspective`

Met perspective kan je aangeven hoever je als "kijker" af zit van z=0, wat je kan zien als "de horizon". Hoe hoger het perspectief, hoe minder sterk het 3D effect (en hoe kleiner, hoe sterker het effect). Voor de meeste effecten is een perspectief van tussen de 500 en 1000 pixels prima, en je kan met dit getal spelen om het effect te krijgen wat je wilt.

Je kan dit vergelijken met perspectieftekenen. Als je twee horizonspunten dicht bij elkaar tekent heb je een sterk perspectief, maar als je ze ver van elkaar af tekent lijkt alles veel platter.

# Van rechthoeken naar cartoons

De rechthoekjes zijn leuk, maar wat ik eigelijk wilde maken was dit:

![Een filmcel van Porky Pig die uit een cirkel lijkt te komen met de tekst "That's all folks".](https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg)

Het klassieke einde van de looney tunes cartoons, waarbij porky pig uit een cirkel tevoorschijn komt en "that's all folks" stottert. Een mooi uitgeknipte versie van Porky Pig in dit plaatje kon ik niet vinden, maar de [wikipedia pagina](https://en.wikipedia.org/wiki/Porky_Pig) heeft een ander mooi uitgeknipt plaatje, dus die gebruiken we.

Om het effect te bouwen delen we het plaatje op in drie onderdelen:

* De blauwe achtergrond, dat is de div zelf
* De rode cirkels, dit wordt de `::before`
* Porky Pig, die gebruiken we als `background` voor de `::after`.

We beginnen met de div, dit wordt de achtergrond en ook de basis voor de rest van de onderdelen. Op deze div zetten we het eerder genoemde `perspective` en `transform-style`, samen met de achtergrondkleur en wat afmetingen:

```
div {
  transform: perspective(3000px);
  transform-style:preserve-3d;
  position: relative;
  width: 200px;
  height: 200px;
  background: #4992AD;
}
```

Dan komen we bij het tweede onderdeel, de rode cirkels. Het "element" zelf moet hier transparant blijven, dat is het gat waar Porky zometeen doorheen komt. Hoe zorgen we dan voor de rode cirkels? We kunnen een border gebruiken zoals in het eerdere voorbeeld, maar daar hebben we er maar eentje van. In dit geval heb je een serie van cirkels, waar ook nog eens een kleurverloop in zit.

We kunnen dit namaken met box-shadows. Je kan meerdere box-shadows toevoegen en door een blur radius van 0 maar een grote spread radius te gebruiken kan je meerdere "borders" toevoegen.

```
box-shadow: <x-offset> <y-offset> <blur-radius> <spread-radius> <color>
```

We gebruiken een border-radius die even groot is als de div zelf, waardoor de `::before` een cirkel wordt, en voegen daar de box-shadows aan toe. Wanneer je box-shadow gebruikt om een aantal rode cirkels te maken waar witte schaduwen met een blur radius op zitten, krijg je een effect wat erg dicht bij de afbeelding zit:

```
box-shadow: 0 0 20px   0px #fff, 0 0 0  30px #CF331F,
            0 0 20px  30px #fff, 0 0 0  60px #CF331F,
            0 0 20px  60px #fff, 0 0 0  90px #CF331F,
            0 0 20px  90px #fff, 0 0 0 120px #CF331F,
            0 0 20px 120px #fff, 0 0 0 150px #CF331F;
```

We maken hier vijf cirkels van steeds 30 pixels breed. Iedere cirkel heeft een vlakke rode achtergrond en daarboven maken we met behulp van een witte schaduw met een blur radius van 20 pixels het kleurverloop-effect.

![De achtergrond en de cirkels in pure CSS, nog zonder Porky.](https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/selection-629.png)

Als laatste hebben we Porky, laten we beginnen met die op de plek neer te zetten waar we hem uiteindelijk willen hebben, maar voor nu nog vóór de cirkels.

```
div::after {
  position: absolute;
  content: " ";
  width:80%;
  height:150%;
  display: block;
  left:10%;
  bottom: -12%;
  background:url("https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Porky_Pig.svg/800px-Porky_Pig.svg.png") no-repeat center/contain;
}
```

![Porky Pig is boven op de cirkels gepositioneerd.](https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/selection-628.png)

De afmetingen en positionering hier is een beetje willekeurig, ik heb gekeken wat voor het plaatje mooi uitkwam.

# De truuk

Dan nu de truuk: Porky's benen moeten achter de rode cirkels, maar zijn hoofd en petje er boven. Om dit voor elkaar te krijgen moeten we zowel de cirkels als Porky in 3d-ruimte verplaatsen.

Als we Porky willen roteren, dan moeten we op een aantal dingen letten:

* Hij mag niet door de achtergrond clippen
* We kunnen niet zo ver roteren dat de afbeelding vervormt
* Hij moet met zijn benen achter en met zijn hoofd voor de cirkels zetten

Om er voor te zorgen dat Porky niet door de achtergrond clipt doen we een aantal dingen. Eerst verplaatsen we de cirkels in de Z-as zodat ze dichter naar ons toe komen. Omdat `preserve-3d` aan staat betekent dat ook dat ze inzoomen, maar als we ze slechts een klein beetje naar voren verschuiven hebben we genoeg ruimte tussen de achtergrond en de cirkels:

```
transform: translateZ(20px);
```

Vervolgens hebben we Porky zelf. Die gaan we op de x-as roteren, zo dat de bovenkant van de afbeelding dichterbij is dan de onderkant, bijvoorbeeld met

```
transform: rotateX(-10deg);
```

Maar als we dat doen, zien we dat het er niet helemaal goed uit ziet, Porky zit nu namelijk deels verstopt achter de blauwe achtergrond, en bij de cirkels gaat er ook iets mis.

![Porky Pig wordt deels afgekapt door de achtergrond en door de cirkels.](https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/selection-626.png)

We kunnen dit proberen op te lossen door Porky ook dichterbij te halen, met `translateZ`, maar wat we beter kunnen doen is de plek waar we roteren te veranderen. Nu doen we dat namelijk in het midden van de afbeelding, waardoor het onderste deel naar achter gaat.

Als we aan de onderkant van de afbeelding draaien, of zelfs ietsje daar onder, dan draait Porky als het ware in zijn geheel naar ons toe. En omdat we de cirkels al dichterbij hebben gehaald, komt alles mooi uit:

```
transform: rotateX(-10deg);
transform-origin:center 120%;
```

![Porky Pig komt nu uit de cirkel: Zijn benen zitten achter de cirkels, maar zijn hoofd er boven.](https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/selection-627.png)

Mocht je nou in 3d willen zien hoe alles zich verhoud, kijk dan op deze code pen en klik op "show debug".

[Codepen voorbeeld](https://codepen.io/Kilian/pen/wvzMMEW)

# Animatie

Nu hebben we Porky, en hij piept mooi achter de cirkels vandaan, maar als het een statisch plaatje blijft hadden we niet al deze moeite hoeven nemen. Door een animatie toe te voegen kunnen we de gelaagdheid zichtbaar maken en het effect versterken.

De animatie die ik wil maken doet het volgende: Porky begint klein, en vergroot dan vanuit de blauwe achtergrond naar over de rode achtergrond. Daar blijft hij even staan, en zoomt daarna weer terug.

Voor de beste prestaties gebruiken we ook voor de animatie `transform`, en omdat we dat doen moeten we zorgen dat de `rotateX` behouden blijft.

```
@keyframes zoom {
  0% {
    transform: rotateX(-10deg) scale(0.66);
  }
  40% {
    transform: rotateX(-10deg) scale(1);
  }

  60% {
    transform: rotateX(-10deg) scale(1);
  }

  100% {
    transform: rotateX(-10deg) scale(0.66);
  }
}
```

Met `scale()` zoomen we in en uit, en omdat we al eerder de `transform-origin` hebben gezet,  schaalt het vanuit midden onder, precies het effect wat we willen.

Door tussen 40% en 60% even te pauzeren hebben we dat moment rust als hij boven de rode cirkels zit.

Die animatie voegen we dan toe aan de `::after`.  Om de animatie wat natuurlijker te laten verlopen gebruiken we een timing functie, "ease-in-out", waardoor de animatie aan het begin en eind iets slomer gaat.

```
div::after {
  animation-name: zoom;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-fill-mode:forwards;
  animation-timing-function: ease-in-out;
}
```

[Klik door naar de codepen](https://codepen.io/Kilian/pen/abmddja) om te zien hoe het er nu uit ziet, maar we kunnen nog twee dingen aanpassen om het er nog nét iets leuker uit te laten zien:

* We kunnen meer diepte creeëren door een schaduw achter Porky te laten groeien, zodat het lijkt alsof Porky dichterbij komt
* We kunnen Porky een beetje draaien tijdens de animatie waardoor het effect verstrekt wordt

Die tweede kunnen we oplossen met `rotateZ`, maar voor die eerste moeten we nog een truukje uithalen. Omdat we een plaatje gebruiken kunnen we niet `box-shadow` gebruiken, die maakt namelijk een vierkant schaduwtje om het `::after` element.

In plaats daarvan kunnen gebruik maken van een `filter`. Wanneer je die gebruikt wordt er gekeken naar de ondoorzichtige pixels van een element, en die krijgen een schaduwtje. Voeg je dat samen, dan krijg je dit:

```
@keyframes zoom {
  0% {
    transform: rotateX(-10deg) scale(0.66);
    filter: drop-shadow(-5px 5px 5px rgba(0,0,0,0));
  }
  40% {
    transform: rotateZ(-10deg) rotateX(-10deg) scale(1);
    filter: drop-shadow(-10px 10px 10px rgba(0,0,0,0.5));
  }

  60% {
    transform: rotateZ(-10deg) rotateX(-10deg) scale(1);
    filter: drop-shadow(-10px 10px 10px rgba(0,0,0,0.5));
  }

  100% {
    transform: rotateX(-10deg) scale(0.66);
    filter: drop-shadow(-5px 5px 5px rgba(0,0,0,0));
  }
}
```

En hier is de uiteindelijke Codepen:

[Porky Pig "That's all Folks" in pure CSS](https://codepen.io/Kilian/pen/yLJBymR)

En zo hebben we een animatie gemaakt van Porky Pig die ons uitzwaait en rest mij enkel nog het volgende te zeggen: "That's all Folks!"
