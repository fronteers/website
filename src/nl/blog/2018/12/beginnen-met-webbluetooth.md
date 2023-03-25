---
title: "Beginnen met WebBluetooth"
date: 2018-12-15
author: Niels Leenheer
categories:
  - Adventskalender
---
Het web is traditioneel altijd goed geweest in het praten met servers. De hele infrastructuur van het web is erop gebaseerd. Maar nu het web dankzij Progressive Web Apps naar native applicaties toe beweegt, hebben we ook de mogelijkheden van native apps nodig. Het ophalen en tonen van tekst, afbeeldingen en formulieren is niet meer genoeg.

Het web is traditioneel altijd goed geweest in het praten met servers. De hele infrastructuur van het web is erop gebaseerd. Maar nu het web dankzij Progressive Web Apps naar native applicaties toe beweegt, hebben we ook de  mogelijkheden van native apps nodig. Het ophalen en tonen van tekst, afbeeldingen en formulieren is niet meer genoeg.

Het aantal nieuwe specificaties dat de afgelopen paar jaar is geïmplementeerd is enorm. We hebben specificaties voor 3D, zoals WebGL en binnenkort WebGPU. We kunnen audio streamen, video kijken en de webcam als input device gebruiken. Code schrijven die bijna net zo snel is als native code, met behulp van WebAssembly. En ondanks dat het web oorspronkelijk altijd een netwerkverbinding nodig had, kunnen we nu offline websites en apps maken dankzij Service Workers. Dat is geweldig, maar op één gebied liepen we nog achter op native apps: het praten met andere apparaten.

WebBluetooth is een nieuwe specificatie die beschikbaar is in Chrome en Samsung Internet, die ons in staat stelt om rechtstreeks vanuit de browser te praten met Bluetooth Low Energy apparaten.

Elke dag worden er meer dan 10 miljoen apparaten met Bluetooth-ondersteuning gemaakt. Dat is inclusief computers en mobieltjes, maar ook apparaten zoals hartslagmeters en glucosemeters, IoT-apparaten zoals lampen, en speelgoed zoals op afstand bestuurbare auto's en drones.

# Het saaie theoretische gedeelte

Omdat Bluetooth geen webtechnologie is, komen de woorden die gebruikt worden ons minder bekend voor. Daarom leg ik kort de terminologie uit en hoe Bluetooth werkt.

Elk Bluetooth-apparaat is een 'Central'-apparaat, of een 'Peripheral'. Alleen central-apparaten kunnen verbindingen maken, en central-apparaten kunnen alleen met peripherals praten. Een voorbeeld van een central-apparaat is een computer of een mobiele telefoon.

Een peripheral kan zelf geen verbinding maken en kan alleen met een central-apparaat praten. Bovendien kan het maar met één central-apparaat tegelijkertijd praten. Een peripheral kan niet met een andere peripheral praten.

![Voorbeelden van central en peripherals](https://fronteers.nl/_img/adventskalender/bluetooth/central-peripherals.png)

Een central-apparaat kan met meerdere peripherals tegelijkertijd praten en zou berichten kunnen doorsturen tussen peripherals. Een hartslagmonitor kan niet praten met lampen, beide zijn peripherals. Maar het is mogelijk een programma te schrijven dat draait op het central-apparaat, dat de hartslag uitleest en de lampen rood maakt als de hartslag boven een bepaalde grens komt.

Als we over WebBluetooth praten, dan praten we over een specifiek gedeelte van de Bluetooth-specificatie met de naam Generic Attribute Profile, die een niet zo logische afkorting heeft: GATT. Omdat GAP al in gebruik was.

En dan praten we niet meer over central-apparaten en peripherals, maar over clients en servers. Je lampen zijn servers. Dat klinkt misschien vreemd, maar het wordt logisch als je er wat langer over nadenkt. Net als een browser, die een connectie maakt met een server op het internet, maakt de client - de telefoon of computer - een connectie met de GATT-server in de lamp.

Elke server biedt één of meerdere services aan. Sommige van deze services zijn gedefinieerd door de standaard, maar je kunt ook je eigen services maken. In het geval van de hartslagmonitor is er een officiële service gedefinieerd in de standaard. Voor de lamp is dat er niet, en elke leverancier probeert hetzelfde probleem opnieuw op te lossen. En iedereen natuurlijk op een andere manier.

Elke service heeft één of meerdere characteristics. Elke characteristic heeft een value welke gelezen of geschreven kan worden. Vergelijk het met een array van objects, met elk object een aantal properties welke een value hebben.

![Array of objects](https://fronteers.nl/_img/adventskalender/bluetooth/array-of-objects.png)

Maar anders dan properties van objecten, worden de services en characteristics niet geidentificeerd met een naam. Elke service en characteristic heeft een unieke UUID die 16 of 128 bits lang kan zijn. Officieel is de 16 bit UUID gereserveerd voor de standaard services, maar dat is een regel die vrijwel niemand volgt.

En tot slot, elke value bestaat uit één of meerdere bytes. Geen strings, of objects, maar enkel een aantal bytes, elk met een waarde van 0 tot 255.

# Hoe ziet een Bluetooth-lamp er uit

Laten we naar een echt Bluetooth-apparaat kijken: een Mipow Playbulb Sphere. Je kunt een app gebruiken, zoals BLE Scanner of nRF Connect om connectie te maken met het apparaat, en dan alle services en characteristics bekijken. In dit geval gebruik ik de BLE Scanner-app voor iOS.

{%- vimeo "" -%}

Het eerste wat je ziet als je een connectie maakt met de lamp, is een lijst van alle services. Er zijn een aantal standaard services, zoals 'device information' en de 'battery' service. Maar er zijn ook een aantal eigen services. Ik ben vooral geïnteresseerd in de service met de 16 bit UUID `0xff0f`. Als je deze service bekijkt, zie je een lange lijst met characteristics. En ik heb geen idee wat de meeste van deze characteristics doen, het is geen onderdeel van de standaard, er is helaas geen beschrijving en ze hebben alleen een nietszeggende UUID.

De eerste characteristic met de UUID `0xfffc` is interessant. Het heeft een value van vier bytes. Als we de value van deze bytes veranderen van `0x00000000` naar `0x00ff0000` dan wordt de lamp rood. Veranderen we de value naar `0x0000ff00` dan wordt de lamp groen, en met de value `0x000000ff` wordt de lamp blauw. Dit zijn RGB-kleuren en die komen exact overeen met de hex-kleuren die we ook gebruiken voor HTML en CSS. Maar wat doet die eerste byte? Als we de value veranderen naar `0xff000000` dan wordt de lamp wit.

De lamp bevat 4 LED's en door deze vier bytes te veranderen kunnen we de intensiteit van elk van deze LED's veranderen. En door de intensiteit van de individuele LED's te veranderen kunnen we elke kleur maken die we willen.

# De WebBluetooth API

Het is mooi dat we een native app kunnen gebruiken om de kleur van een lamp te veranderen, maar hoe doen we dat met de browser? Met de kennis van Bluetooth en GATT die we net hebben opgedaan is dit relatief simpel. Dankzij de WebBluetooth API hebben we maar een paar regels JavaScript nodig om de kleur van de lamp te veranderen.

# Connectie maken met het apparaat

Het eerste dat we moeten doen is het opbouwen van de connectie van de browser naar het apparaat. We roepen de function `navigator.bluetooth.requestDevice()` aan met een configuratie-object als parameter. Dat object bepaalt welk apparaat we willen gebruiken en welke services beschikbaar moeten zijn via de API. In het voorbeeld hieronder filteren we de lijst met apparaten op basis van de naam van het apparaat. We willen alleen apparaten zien waarvan de naam begint met 'PLAYBULB'. We specificeren ook dat we de service `0xff0f` willen gebruiken.

Omdat de requestDevice() function een promise teruggeeft, kunnen we het resultaat 'await-en'.

```
let device = await navigator.bluetooth.requestDevice({
    filters: [
        { namePrefix: 'PLAYBULB' }
    ],
    optionalServices: [ 0xff0f ]
});
```

Zodra we deze function aanroepen krijgen we een venster te zien met een lijst van alle apparaten die voldoen aan de filters die we hebben opgegeven. We moeten nu handmatig het apparaat selecteren en handmatig hiermee verbinden. Dit is een essentiële stap, omdat we niet willen dat een willekeurige website zomaar verbinding kan maken met apparaten, of alleen al kan zien welke apparaten je allemaal in huis hebt. De gebruiker heeft de controle.

![Bluetooth apparaat verbinden](https://fronteers.nl/_img/adventskalender/bluetooth/connect.png)

Nu we toegang hebben tot het apparaat kunnen we een connectie maken met de GATT-server door de function connnect() aan te roepen op de gatt property van het device object dat we zojuist terug hebben gekregen. Ook hier kunnen we weer wachten op het result door middel van await.

```
let server = await device.gatt.connect();
```

We hebben nu toegang tot de server en kunnen de function getPrimaryService() aanroepen met de UUID van de service die we willen gebruiken as parameter. En wederom wachten we op het resultaat door middel van await.

```
let service = await server.getPrimaryService(0xff0f);
```

Daarna roepen we de function getCharacteristic() aan met de UUID van de characteristic die we willen gebruiken als parameter.

```
let characteristic = await service.getCharacteristic(0xfffc);
```

We hebben nu de characteristic die we nodig hebben om te lezen en schrijven.

# Schrijven van de value

Om value te kunnen veranderen moeten we de functie writeValue van de characteristic aanroepen met de value die we willen veranderen als parameter.

De value is altijd een ArrayBuffer. Omdat we een ArrayBuffer niet direct kunnen bewerken, gebruiken we in plaats daarvoor een 'typed array'. Een typed array is een ArrayBuffer met een bepaald formaat, en in ons geval gebruiken we het `Uint8Array` formaat. De reden dat we geen normale array kunnen gebruiken is dat normale arrays ook andere soorten van data en zelfs lege plekken kunnen bevatten. Een 'typed array' bestaat maar uit één type en is altijd aansluitend. Het formaat `Uint8Array` betekent dat de array unsigned is en dus geen negatieve getallen kan bevatten; alleen hele getallen kan bevatten; en tevens 8 bits is en dus alleen de waarden 0 tot 255 kan bevatten. Met andere woorden: een array van bytes.

```
characteristic.writeValue(
    new Uint8Array([ 0, r, g, b  ])
);
```

We weten al hoe deze specifieke lamp werkt. We hebben vier bytes nodig, één voor elke LED. Elke byte heeft een waarde van 0 tot 255 en in dit geval willen we alleen rood, groen en blauw gebruiken. We laten de LED voor wit uit, door de waarde 0 te gebruiken.

# Lezen van de value

Als we de huidige kleur van de lamp willen weten, dan kunnen we de readValue() function aanroepen en await gebruiken om het resultaat af te wachten.

```
let value = await characteristic.readValue();

let r = value.getUint8(1);
let g = value.getUint8(2);
let b = value.getUint8(3);
```

De value die we terugkrijgen is altijd een DataView van een ArrayBuffer en biedt een aantal functions om data uit de arraybuffer te halen. In ons geval zijn we weer geïntereseerd in de individuele bytes. We gebruiken de getUint8() function met de index van de byte in de array die we willen ophalen als parameter.

# Notificaties wanneer de value verandert

Als de value van de characteristic op het apparaat verandert, dan is het makkelijk dat de app hiervan op de hoogte wordt gehouden. Niet echt nuttig voor een lamp, maar voor een hartslagmonitor is het onmisbaar. We willen niet elke seconde opnieuw handmatig de huidige waarde ophalen.

```
characteristic.addEventListener(
    'characteristicvaluechanged', e => {
        let r = e.target.value.getUint8(1);
        let g = e.target.value.getUint8(2);
        let b = e.target.value.getUint8(3);
    }
);

characteristic.startNotifications();
```

Om een callback te krijgen wanneer de value verandert moeten we de function addEventListener() aanroepen met de parameter 'characteristicvaluechanged' en een callback function.

Zodra de value verandert wordt de callback function aanroepen met een event object als parameter. De value is een property van de target property van het event en weer een DataView van een ArrayBuffer. Daarna kunnen we de individuele bytes opnieuw uit de ArrayBuffer halen door middel van de getUint8() function.

De bandbreedte van het Bluetooth-netwerk is beperkt, daarom moeten we handmatig de notificaties starten door startNotifications() aan te roepen op de characteristic. Zou dit standaard aan staan, dan zou het netwerk overspoeld worden door onnodige data. En bovendien, deze apparaten gebruiken vaak batterijen en elke byte die we niet hoeven te versturen zal het leven van de batterij verlengen, omdat de interne radio van het apparaat niet zo vaak gebruikt hoeft te worden.

En dit is ongeveer 90% van de WebBluetooth API en alles wat je moet weten om te beginnen. Door een paar functions aan te roepen en 4 bytes aan te passen kunnen we een web app maken die de kleuren van je lampen kan aanpassen. Een paar regels meer en je kunt een speelgoedauto besturen of zelfs een drone laten vliegen. En met steeds meer Bluetooth-apparaten op de markt zijn de mogelijkheden eindeloos.

{%- vimeo "" -%}

## Meer informatie:

* [De WebBluetooth specification](https://webbluetoothcg.github.io/web-bluetooth/)
* [WebBluetooth demos op Bluetooth.rocks](https://bluetooth.rocks/)
* [Source code van de demos](https://github.com/BluetoothRocks)
* [GATT registry met documentatie voor een aantal apparaten](https://github.com/opengatt/registry)

(TODO: Over Niels Leenheer
/adventskalender/niels.jpg
Niels is een browser-geek. Vanaf het moment dat iemand hem de allereerste Nexus browser op een NeXT Cube liet zien is hij bezig met browsers. Niels is de maker van HTML5test.com, de CSS selector test, spreekt op conferenties en zit sinds 2018 in de congrescommissie van Fronteers.

**Donatie:** KWF Kankerbestrijding)
