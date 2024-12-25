---
title: WebXR - The React Way
date: 2024-11-20
author: Ruben van der Leun
summary: "Ontdek hoe je meeslepende Virtual en Augmented Reality-ervaringen kunt bouwen met WebXR en React. Het is gemakkelijker dan je denkt!"
categories:
    - Adventskalender
key: advent-2024-rvdleun
---
Het is weer december en daarmee komen ook de feestdagen. Persoonlijk hoop ik dat er dit jaar enkele Virtual Reality-headsets onder de kerstboom liggen. Als ontwikkelaar denk je misschien na over het creëren van je eigen meeslepende ervaringen. Als je hebt gezocht naar tutorials, heb je waarschijnlijk genoeg gevonden over Unity of Unreal—tools die misschien vreemd aanvoelen als je achtergrond ligt in webontwikkeling.

Het goede nieuws? Al die JavaScript-vaardigheden die je hebt aangescherpt, kun je ook gebruiken om deze virtuele werelden te bouwen. Met de [WebXR API](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API) kun je XR-apps direct in de browser maken en profiteren van alle flexibiliteit en gemak die het biedt. De API wordt ondersteund in browsers zoals die van Meta en de open-source [Wolvic](https://wolvic.com/en/), met extra AR-ondersteuning in Chrome voor Android. Helaas ondersteunt iOS de WebXR API nog niet, hoewel het wel [Quick Look](https://developer.apple.com/augmented-reality/quick-look/) heeft om modellen in de realiteit te projecteren.

In deze post wil ik je helpen om aan de slag te gaan met het bouwen van WebXR-ervaringen met React.

## Enkele opmerkingen voordat we beginnen

* XR staat voor Extended Reality—een overkoepelende term die omvat:
  * **Virtual Reality (VR):** Meeslepende ervaringen in volledig virtuele omgevingen.
  * **Augmented Reality (AR):** Virtuele objecten over de echte wereld heen leggen.
* Deze post gaat ervan uit dat je enige bekendheid hebt met React.
* Het voorbeeld zal simpel zijn—het doel is om je snel aan het experimenteren te krijgen met je nieuwe apparatuur.

## Een beetje achtergrond...

Als je ooit 3D-werk in de browser hebt gedaan, ben je misschien bekend met [three.js](https://threejs.org/). Het is een bibliotheek waarmee je 3D-scènes kunt maken, objecten kunt toevoegen, een camera kunt positioneren en alles kunt renderen naar een canvas—met behulp van vanilla JavaScript.

Hier is een basisvoorbeeld om een eenvoudige scène te renderen:

```javascript
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffce2e });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
```

![Een 3D-scène met een rode bol, een draaiende gele kubus en een blauwe kegel](/_img/blog/2024/12/advent-2024-rvdleun/boring-flatscreen.gif)

Deze snippet creëert een eenvoudige scène met een draaiende kubus. Hoewel Three.js krachtig is, kan het snel overweldigend worden—vooral bij het beheren van interacties of het integreren van XR-functies. Dat is waar React-Three-Fiber (R3F) een game-changer wordt.

## Enter React-Three-Fiber

Het was pas vorig jaar dat ik echt met React aan de slag ging. En hoewel ik er zeker een mening over heb, zal ik niet ontkennen dat het een zeer robuuste bibliotheek is waarmee ik relatief eenvoudig een webapp kan bouwen en de code gemakkelijk kan opsplitsen in afzonderlijke componenten.

Ik had gehoord van [react-three-fiber](https://r3f.docs.pmnd.rs/getting-started/introduction), maar had het nooit echt geprobeerd. Toen ik eenmaal wat ervaring met React had, besloot ik het een kans te geven. En ik moet toegeven dat ik al snel tot de conclusie kwam dat dit was wat ik zocht.

Laten we het voorbeeld van hierboven herschrijven in R3F:

```javascript
function Scene() {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry />
      <meshBasicMaterial color={0xffce2e} />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}
```

Als je bekend bent met React, zou deze structuur natuurlijk moeten aanvoelen. R3F transformeert Three.js-objecten in React-componenten, waardoor scène-updates worden vereenvoudigd met hooks zoals `useFrame`.

## Interactiviteit toevoegen

Interactiviteit kan een statische scène transformeren in iets dynamisch en boeiends. Met R3F is dit eenvoudig. Laten we onze kubus bijwerken zodat deze van kleur verandert wanneer erop wordt geklikt:

```javascript
function InteractiveBox() {
  const boxRef = useRef();
  const [color, setColor] = useState(0xffce2e);

  const handleClick = () => {
    setColor(Math.random() * 0xffffff);
  };

  useFrame(() => {
    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh onClick={handleClick} ref={boxRef}>
      <boxGeometry />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function Scene() {
  return (
    <InteractiveBox />
  );
}
```

![Een 3D-scène met een rode bol, een draaiende gele kubus en een blauwe kegel. Een muiscursor klikt op de kubus en deze verandert van kleur](/_img/blog/2024/12/advent-2024-rvdleun/still-boring-but-with-interactivity.gif)

Nu verandert de kubus van kleur wanneer erop wordt geklikt. R3F vereenvoudigt het proces van het toevoegen van interactiviteit met vertrouwde React-concepten zoals eventhandlers.

Het belangrijkste dat ik hier probeer te communiceren, is dat R3F het bouwen van scènes eenvoudig maakt. Naar mijn mening is het bijna hetzelfde als het bouwen van een reguliere pagina, behalve dan in 3D. Vergeet niet dat je ook bibliotheken kunt implementeren die je misschien eerder hebt gebruikt, zoals react-router, framer of zustand. Veel van deze werken direct uit de doos.

Dus nu kunnen we 3D-ruimtes tonen op een plat scherm. Wat als we dit naar onze VR-headsets willen verplaatsen? Gelukkig vereist dit met [@react-three/xr](https://github.com/pmndrs/xr) niet veel moeite.

## Laat er XR zijn!

Je project uitbreiden naar XR is eenvoudig met [@react-three/xr](https://github.com/pmndrs/xr). Laten we VR-functionaliteit toevoegen:

```javascript
const store = createXRStore();

function App() {
  return (
    <>
      <button onClick={() => store.enterVR()}>Enter VR</button>
      <Canvas>
        <XR store={store}>
          <Scene />
        </XR>
      </Canvas>
    </>
  );
}
```

![Een virtual reality-scène met een rode bol, een draaiende gele kubus en een blauwe kegel. Een controller richt op de kubus en deze verandert van kleur](/_img/blog/2024/12/advent-2024-rvdleun/awesome-VR.gif)

In de app heb ik een knop toegevoegd waarmee gebruikers de ruimte als VR-gebruiker kunnen betreden en onze scène omhuld in een XR-component.

...en zo zijn we klaar! Nu kun je deze pagina openen op je headset, op de knop "Enter VR" drukken en duiken in een virtuele wereld met een doos, een bol en een geometrie. Het `onClick`-event dat we eerder hebben geïmplementeerd, werkt ook—richt je controller op de doos, druk op de trekker en kijk in verbazing hoe de kleur verandert.

Let op: als je je project wilt testen op een headset, moet je toegang krijgen tot de webpagina via `https://`.

### Laten we van virtueel naar de echte wereld gaan

Hoewel mijn persoonlijke interesses neigen naar Virtual Reality, kan Augmented Reality (AR) net zo boeiend zijn. Hier is hoe je AR kunt inschakelen met React-XR:

```javascript
<button onClick={() => store.enterAR()}>Enter AR</button>
```

![Een augmented reality-scène met een rode bol, een draaiende gele kubus en een blauwe kegel. Een controller richt op de kubus en deze verandert van kleur. Een schattige zwarte labrador slaapt op een stoel](/_img/blog/2024/12/advent-2024-rvdleun/awesome-AR.gif)

Wanneer op de knop wordt geklikt op een ondersteund apparaat (bijv. Chrome op Android), wordt de camerafeed weergegeven met de scène over de echte wereld heen. Je kunt je telefoon bewegen om de objecten in fysieke ruimte te zien geplaatst.

Dit werkt prachtig voor het projecteren van 3D-elementen zoals meubels in een kamer of het overlayen van graphics op echte omgevingen.

## Alternatieven verkennen

React-Three-Fiber en React-XR zijn niet de enige tools voor WebXR-ontwikkeling. Hier zijn enkele alternatieven die het overwegen waard zijn:

### AFrame

In 2017 had ik het genoegen om te praten over WebVR op de Fronteers-conferentie. Destijds was mijn belangrijkste wapen van keuze [AFrame](https://aframe.io/). Het werkt ook met THREE.js onder de motorkap en laat je de scène bouwen door 3D-objecten toe te voegen met HTML en alle logica toe te voegen door componenten te koppelen.

Het voorbeeld van eerder zou er ongeveer zo uitzien:

```javascript
<a-scene>
  <a-box color="#ffce2e" change-color-on-click />
  <a-sphere position="-1 1 -1" color="#fe796a" />
  <a-cone position=".25 -.65 1" color="#2e7cff" />
</a-scene>
```

### Model Viewer

[Model-Viewer](https://modelviewer.dev/) is perfect voor het weergeven van 3D-modellen en bevat ingebouwde ondersteuning voor AR met minimale setup. Hier is een voorbeeld:

```
<model-viewer 
  alt="Een rode bol, een gele kubus en een blauwe kegel" 
  src="./sphere-box-cone-scene.glb" 
  ar
  camera-controls
/>
```

### Visuele editors

Als je de voorkeur geeft aan een grafische interface, kunnen deze editors handig zijn:

* [Rogue Engine](https://rogueengine.io/)– Een Unity-achtige editor voor het bouwen van Three.js-apps.
* [PlayCanvas](https://playcanvas.com/)– Een browsergebaseerde 3D-editor met realtime samenwerking.
* [Wonderland Engine](https://wonderlandengine.com/)– Een editor gericht op high-performance WebXR-ervaringen.

## Ter afronding

Hopelijk heeft deze post laten zien hoe eenvoudig het kan zijn om te beginnen met het creëren van WebXR met React. Voordat je vertrekt, zijn hier enkele tips om in gedachten te houden:

* **Sluit je aan bij de community:** De [WebXR Discord](http://discord.ly/webxr) is een geweldige plek om advies te krijgen en je projecten te delen.
* **Test vroeg:** Wat er goed uitziet op een plat scherm, vertaalt zich misschien niet perfect naar XR. Testen op hardware zo vroeg mogelijk kan je tijd besparen.
* **Gebruik browsertools:** Functies zoals hot reloading en multi-tab testen maken het ontwikkelproces soepeler.

Tot slot, hier zijn enkele apps die mij inspireren en de mogelijkheden van WebXR laten zien:

* [size.link](http://size.link): Projecteer metingen in de echte wereld—geweldig voor interieurontwerp.
* [Moonrider](http://moonrider.xyz): Een open-source WebXR-ritmespel vergelijkbaar met Beat Saber, met tonnen aangepaste nummers.
* [Hubs](https://github.com/Hubs-Foundation/hubs): Een open-source virtueel samenwerkingsplatform voor meetups, conferenties of casual ontmoetingen.
* [FrameVR](https://framevr.io/): Vergelijkbaar met Hubs, hoewel niet open-source. Toch indrukwekkend en kan honderden gebruikers ondersteunen.
* [The Escape Artist](https://esc.art/): Een bekroonde WebXR-escape room die de grenzen van wat mogelijk is verlegt.

Tot slot, als je vragen hebt of dit verder wilt bespreken, neem dan gerust contact met me op! Je kunt me vinden op Discord als `@rvdleun`, of verbinden met me op [Mastodon](https://mas.to/@rvdleun) en [BlueSky](https://bsky.app/rvdleun).
