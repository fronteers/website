---
title: 'Remix en Next.js: "echt" full-stack bestaat niet, of wel?'
date: 2022-12-07
author: Lody Borgers
summary: 'Een goede blog begint altijd met een controversiële titel, zeggen ze toch? Maar er zit wel een gedachte achter.'
categories:
    - Adventskalender
---

Een goede blog begint altijd met een controversiële titel, zeggen ze toch? Maar er zit wel een gedachte achter.

Een "echte" full-stacker, die zijn ontzettend zeldzaam. In mijn jarenlange carrière heb ik er 1, misschien 2 ontmoet. Let wel, met "echte" full-stacker bedoel ik de term die HR en management helaas vaak gebruiken: iemand die 50% op front-end en 50% op back-end ingezet kan worden.

Dit is lastig, want front-end en back-end (in ieder geval de wat klassiekere variant) zijn twee complete disciplines. Ieder met hun eigen _languages_ en _tools_, met hun eigen _best practices_, met hun eigen _thought leaders_, en ga zo maar door.

Op de werkvloer komt het geregeld voor dat IT-afdelingen zoeken naar (enkel) full-stack ontwikkelaars omdat die flexibel en -vooral- goedkoop zijn. Je krijgt 2 ontwikkelaars voor de prijs van één toch? In de praktijk krijg je meestal iemand die een expert is één discipline, en "goed genoeg" in de andere.

Goed, ik kan hier eindeloos over doorpraten, maar het punt is duidelijk: full-stack is moeilijk om goed te kunnen/doen.

Het is daarom geinig dat er de laatste jaren front-end meta-frameworks op zijn gekomen die front-enders stiekem in full-stack developers veranderen. We duiken in 2 frameworks die hier "schuldig" aan zijn: Remix en Next.js

Trouwens, "schuldig" moet je met een korrel zout nemen. Het is namelijk, als je het mij vraagt, een goede ontwikkeling.

## Wat zijn meta-frameworks?

Remix en Next.js worden tegenwoordig vaak "meta-frameworks" genoemd, omdat ze meer doen dan alleen zorgen dat je met React een user interface kan bouwen. Meta-frameworks hebben ook controle over de server waar je applicatie op draait.

Dit is een hele grote reden waarom Remix (en Next.js) het zo makkelijk maken om full-stack te werken. Ze weten beide _welk_ deel van je code server-side en welk deel client-side is. En daardoor kunnen ze een aantal aannames maken:

-   Het is makkelijk om de code te splitten: de browser downloadt alleen de client-side code en niks van de server-side code waar het niks mee kan.
-   Routing kan worden ingebouwd en is niet meer enkel client-side: we gaan als het ware weg van de single-page applications en weer richting de multi-page applications.
-   De weg tussen client-side en server-side is makkelijker omdat die wordt gecontroleerd door het meta-framework. Dit zie je in zowel Remix als Next.js, waar de server-side code al geprocessed is (Next.js geeft je in zijn `NextAPIRequest` object een `[body` die al geparsed is door de `content-type` header](https://nextjs.org/docs/api-routes/request-helpers) (dit kan je uitzetten trouwens), Remix revalideert telkens de data nadat een `<form/>` is verstuurd).

## Van de server naar de client naar de server

Wat maakt het dan zo interessant om een meta-framework in te zetten? En belangrijker: hoe vertroebelt een meta-framework de grens tussen front-end en back-end? We pakken even Next.js als voorbeeld.

Begin november was het Next.js conference, waar één van de sprekers Theo Browne([@t3dotgg](https://twitter.com/t3dotgg)) was. In zijn presentatie spreekt hij over Next.js als back-end framework (dit klinkt heel bekend, maar ik beloof je dat ik het voorstel voor dit artikel eerder had ingeschoten bij Fronteers). Het stuk waar ik naar link gaat dieper in over de plek die Next.js inneemt op de reis van database via server naar de client.

Op die reis kunnen we een paar "stations" pakken:

1. De database: er wordt een connectie gelegd met een database en data uitgevraagd.
2. Een request: er wordt een request via de server verstuurd en uitgevoerd.
3. HTML: er wordt HTML gegenereerd die naar de client wordt gestuurd.
4. Interactie: de HTML wordt gedownload en ingelezen, de JavaScript draait en het framework (in ons geval React) neemt het over.

Hier wordt goed uitgelicht hoe een meta-framework als Next.js een bredere plek inneemt op die reis. Waar we eerst PHP gebruikten voor stations 1, 2 en 3, en HTML voor station 4, kunnen we met Next.js door alle stations gaan. In feite maakt Next.js het mogelijk om in onze applicatie (of website, waarom niet?) van database naar de client te gaan.

In het voorbeeld hieronder heb ik een simpele Next.js page, die op de server data ophaalt uit de database en vervolgens de pagina vult:

```
// In db.js hebben we een connectie naar de database gemaakt
// db.js draait op de server (station 1)
import { db } from '../db';

// Het Page component rendert een pagina met de data die we
// van de server hebben gehaald
// Page() wordt gegenereerd op de server (station 3) maar draait
// op de client (station 4)
export default function Page({ products }) {
  return (
	  <div>
		  <h1>Onze producten</h1>

		  <ul>
			  { products.map(product => (
				  // Een overzicht van een product
			  ))}
		  </ul>
	  </div>
  );
}

// getServerSide props vraagt data op uit de database
// Deze functie draait alleen op de server en wordt aangeroepen
// op page load (station 2)
export async function getServerSideProps() {
  const products = await db.product.findMany();

  // Pass data to the page via props
  return { props: { products } };
}
```

Dit voorbeeld laat zien hoe je in 33 regels de hele reis van database naar client kunt maken. Meta-frameworks zoals Next.js en Remix maken veranderen de grens tussen "puur" front-end en full-stack, omdat ze ons een aantal voordelen bieden. Bijvoorbeeld de mogelijk dat we de hele reis in 1 taal kunnen doen (in plaats van te moeten switchen tussen PHP en HTML). Ook geven ze ons, als we TypeScript gebruiken, de mogelijkheid onze types te hergebruiken op zowel de client als de server. Dit geldt trouwens ook voor data validatie. Context-switching? Dat is nu een stuk minder geworden.

Meta-frameworks bieden ook al oplossingen voor het routen van je applicatie of website. In het geval van Remix en Next.js is date file-based: voor iedere route in je project maak je een bestand aan dat jouw pagina representeert.

Met de RFC over [React Server Components](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md#basic-example) zien we dat React ook deze kant op aan het bewegen is. Je zien dat deze manier van denken steeds meer voeten aan de grond begint te krijgen in de wereld van front-end.

## Wat is Remix?

Maar waar valt Remix in dit verhaal?

De meeste van ons kennen of werken met Next.js, dat pas geleden alweer versie 13 presenteerde met ontzettend veel nieuwe updates. Next.js presenteert zichzelf als hét React framework. Oftewel: de beste manier om een React applicatie te bouwen is met Next.js. Het React-team doet hieraan mee door Next.js aan te raden in [hun (nieuwe) documentatie](https://beta.reactjs.org/learn/start-a-new-react-project#building-with-a-full-featured-framework) (wel met een _special mention_ voor Remix!). Het is ook interessant dat een van de grootste nieuwe features in React, namelijk React Server Components, eerst gedebuteerd werd in een RFC voor Next.js 13 dan op de website van React zelf. Next.js heeft lang het React-landschap gedomineerd als framework. Tot nu toe, want ineens was daar Remix.

Remix is gemaakt door [Ryan Florence](https://twitter.com/ryanflorence) en [Michael Jackson](https://twitter.com/mjackson) (nee niet díe), de bedenkers van React Router. Zij wilden een framework maken dat focused op [web standaarden en moderne UX](https://remix.run/blog/seed-funding-for-remix#web-standards-modern-ux) (dit zijn hun woorden). Remix richt zich op "use the platform" en maakt daar zoveel mogelijk gebruik van hoe een browser werkt of wat de HTTP standaard vertelt. Component-scoped CSS? Hier heb je geen CSS-In-JS of CSS Modules voor nodig, in Remix exporteer je een `links()` export voor je component of route en [Remix voegt een `` tag toe op de noodzakelijke routes](https://remix.run/docs/en/v1/guides/styling).

Progressive enhancement is ook een belangrijk onderdeel van de principes van Remix. Het is bijvoorbeeld niet alleen _makkelijk_ om een werkende applicatie te bouwen in Remix dat client side **geen JavaScript** gebruikt, Remix duwt je zelfs die kant een beetje in. Een groot deel van applicatie functionaliteiten waar we tegenwoordig JavaScript voor inzetten, zoals het ophalen en versturen van form data, werkt in Remix simpelweg met een `<form method="post">`, een `loader` functie die aangeroepen wordt op GET requests (dus ook page loads, als je route een `loader` functie export) en een `action` functie die op POST (en PUT) requests draait. Is JavaScript niet beschikbaar op een browser? Dan wordt het formulier verstuurd via een redirect naar de server en terug naar de client (zoals we vroeger deden met PHP). Is JavaScript er wel? Dan wordt de request op de pagina zelf gedaan zonder redirect en krijgt de gebruiker automatisch de nieuwe data te zien.

Tot nu toe hebben we het op een redelijk luchtig niveau gehad over full-stack en meta-frameworks, maar je zou je kunnen afvragen _hoe_ een meta-framework ons precies de full-stack kant induwt?

## Op weg naar full-stack

We duiken die vraag in met hulp van een aantal voorbeelden. We zien ook hoe bepaalde dingen die we eerst aan de back-end zouden toeschrijven naar de front-end worden gehaald.

## Databases

We beginnen met databases, want veel projecten zullen er een nodig hebben voor data opslag.

Traditioneel gesproken zal de client van een applicatie/website via een API data opvragen aan de server. Het is dan aan de server om een connectie met de database te leggen, data op te vragen, en het resultaat terug te sturen (of een foutmelding weer te geven indien nodig). Dit is natuurlijk helemaal prima, en in veel gevallen hoeft dit niet per se te veranderen. We kijken straks naar een manier om Remix of Next.js in te zetten in een architectuur met een externe database.

Wat nu mogelijk is, is om in Remix of Next.js direct een verbinding met je database te leggen. Dit wordt helemaal makkelijk als je een tool als [Prisma](https://www.prisma.io/) inzet als ORM. Prisma gaf je al het voordeel om je ORM in JavaScript of TypeScript te schrijven (komen we toch weer terug op context switching), dat je vervolgens kwijt kon tussen je project en je database.

Die laag kan je nu direct in je project kwijt, door Prisma aan te roepen en vervolgens data uit te vragen of weg te schrijven. Dit kan je vervolgens meteen in je pagina kwijt.

Remix geeft een [simpel voorbeeld hiervan](https://remix.run/docs/en/v1/guides/data-loading#databases), maar dit is uiteraard ook in Next.js mogelijk.

## Proxy

Inhakend op het database-verhaal: wat als je een front-end project wil omzetten naar een meta-framework maar de back-end met alle database operaties staan al vast?

Nou, als eerste wil ik je zeggen: je hoeft niet alles om te bouwen naar iets nieuws _omdat_ het iets nieuws is. Als de infrastructuur rondom de back-end en database al staat, gebruik je lekker dat. Het scheelt een boel tijd en moeite voor iets dat al werkt.

Wat je _wel_ kan doen, is de server van je meta-framework gebruiken als proxy. Dit biedt weer een boel nieuwe opties en mogelijkheden:

-   Je kan requests load-balancen en responses cachen.
-   Je kan environment variables gebruiken voor bepaalde secret tokens.
-   Je kan de response van requests naar je database of een externe back-end muteren voor je het terugstuurt (hier kom ik straks nog op terug).

In je meta-framework kan je je server inzetten om requests naar een (externe) back-end te sturen, eventueel voorzien van een authenticatie token.

In het voorbeeld hieronder gebruiken we Notion om een rij in een tabel (wat bij Notion een "database" heet) toe te voegen. Voor het voorbeeld gebruik ik Remix, maar dit is uiteraard ook mogelijk in Next.js.

```
// ./app/notion.server.ts, wordt alleen op de server ingeladen
import { Client } from '@notionhq/client';

export const notionClient = new Client({
	// Het authenticatie token is alleen in te lezen op de server
	auth: process.env.NOTION_AUTH_TOKEN,
});

// ./app/routes/notion.ts
import { notionClient } from '../notion.server';
import type { ActionArgs } from '@remix-run/node';

// `action` functies worden door Remix aangeroepen wanneer bij
// POST en PUT requests. Deze draaien op de server
export const action = async ({ request }: ActionArgs) => {
	// We parsen de body uit onze request. Als het verstuurd is
	// door een `<form/>`, krijgen we een FormData object
	const payload = await request.formData();
	const data = Object.fromEntries(payload);

	// We maken een nieuwe rij aan in de tabel,
	// met de data die is versturd via het <form/>
	const response = await notionClient.pages.create({
		parent: {
			// NOTION_CONTACT_FORM_TABLE_ID is alleen uit te lezen
			// zien op de server
      database_id: process.env.NOTION_CONTACT_FORM_TABLE_ID,
    },
    properties: {
	    // De data die je wilt weg schrijven in je tabel
	    ...data,
    }
	});

	if (!response.ok) {
		// Er is iets fout gegaan, dus we sturen een error terug
		// Omdat we de response `throw`'en, weet Remix dat er iets
		// fout is gegaan. Hier kunnen wij dan weer op acteren
		// Hier komen we later op terug
		throw new Response(JSON.stringify({ status: 'error' }), {
			status: 500,
		});
	}

	// Notion heeft de rij gemaakt, we sturen een response terug
	return new Response(JSON.stringify({ status: 'success' }), {
		status: 201
	});
};
```

Even een side note: Remix heeft helper functions zoals [`json()`](https://remix.run/docs/en/v1/api/remix#json) dat je kan gebruiken om response terug te sturen. Die helpers zijn kleine wrappers om het daadwerkelijke `Response` object heen. Voor dit voorbeeld wilde ik meer focussen op wat de server kan, dan hoe Remix specifiek werkt. Deze code kan je namelijk ook in Next.js gebruiken.

## Dure operaties off-loaden naar de server

Het komt soms voor dat we een dure operatie moeten uitvoeren. Met "duur" bedoel ik dan een operatie die:

-   Veel processorkracht kost;
-   Veel data heen of terugstuurt;

Denk hierbij vooral aan het on-the-fly genereren van responsive afbeeldingen, het omgaan met grote payloads in requests of responses (scheelt weer een GraphQL server), het sanitizen van input data van de gebruiker, of het parsen van markdown uit de database naar HTML voor de client (zoals bij een blog).

Het idee is dat de servers draaien op hardware die gemaakt is om grote operaties efficiënt uit te voeren. De client is altijd afhankelijk van het apparaat dat de gebruiker heeft, hoeveel apps of programma's er toevallig tegelijkertijd aan het draaien zijn, en de internetverbinding of -abonnement dat de gebruiker heeft.

Door de dure operaties op de server plaats te laten vinden, kunnen we onze applicatie/website sneller laten reageren, kunnen we voorkomen dat er kostbare kilobytes over de lijn worden verstuurd en kunnen we (in erge gevallen) zelfs voorkomen dat onze applicatie of website crashed.

## Data mutaties

Met data mutaties bedoel ik het lezen en schrijven van data. Meta-frameworks spelen hier heel handig op in omdat ze in staat zijn de mutaties optimaal in te plannen.

## Data lezen

Wanneer je op de client-side een GET request doet voor data, moet eerst de JavaScript bundle worden gedownload en geparsed, voor React kan draaien om de request uit te voeren voor je component. Dit is in feite een waterval. We moeten namelijk steeds wachten op een stukje dat geladen wordt, voor we het volgende stuk kunnen ophalen.

Wat meta-frameworks kunnen doen, is de request voor de data op de server uitvoeren. In de tijd dat de client een JavaScript bundle krijgt om te download, te parsen en te draaien, kan de request uitspelen en kan de HTML-pagina worden gegenereerd met de opgevraagde data. We hoeven niet meer stapsgewijs de netwerk requests af te wachten. Performance!

## Data muteren

Een ander voordeel is dat het makkelijker is om data te muteren. Dit is het beste uit te leggen aan de hand van een voorbeeldje.

Stel, we maken een website waarop iemand data van voertuigen uit kan lezen. Er is een database, die bereikbaar is via een REST API, waarbij we een simpele GET request kunnen sturen dat we als volgt kunnen typeren:

```
interface VehicleQuery {
	type: 'car' | 'bus' | 'truck';
	licensePlate: string;
}
```

Iedere query geeft een antwoord met de gegevens van dat voertuig:

```
interface VehicleDetails {
	make: string;
	model: string;
	fuelType: string;
	engineType: string;
	maxOccupants: number;
	ownerHistory: Owner[];
}
```

Onze opdracht is om een pagina te maken waarbij iemand zijn kentekenplaat in kan vullen en het merk en model terugkrijgt. Hoewel de API meer informatie kan ontvangen en teruggeven, moeten we voor onze pagina (zie het als een soort landingspagina) er meer voor zorgen dat er z.s.m. data op het scherm te zien is. We vragen dus alleen het kentekenplaat uit, want we stellen dat het voertuigtype (dat wel verplicht is in de query) altijd `car` zal zijn.

We pakken Remix even als voorbeeld:

```
import type { json } from '@remix-run/node';
import type { ActionArgs } from '@remix-run/node';
import { useActionData } from '@remix-run/react';
// `~` is ge-aliased naar `./app/`
import type { VehicleQuery } from '~/models/Vehicle';

export const action = async ({ request }: ActionArgs) => {
	const data = await request.formData();
	const { licensePlate } = Object.fromEntries(data);

	const query: VehicleQuery = {
		type: 'car';
		licensePlate,
	};

	const response = await fetch('/api/vehicles/query', {
		method: 'POST',
		body: JSON.stringify(query),
	});

	const { make, model } = await response.json();

	return json({ make, model });
};

export default function VehicleInfoPage() {
	const data = useActionData<typeof action>();

	if (data) {
		const { make, model } = data;

		return (
			<div>
				De gegevens van het voertuig zijn:

				<ul>
					<li>Merk: { make }</li>
					<li>Model: { model }</li>
				</ul>
			</div>
		);
	}

	return (
		<form method="post">
			<label>
				<p>Wat is het kenteken?</p>
				<input name="licensePlate" type="text" />
			</label>

			<button>Haal informatie op</button>
		</form>
	);
}
```

Wacht, _wat gebeurt hier?_

We beginnen even met de pagina zelf, die laat namelijk een formulier zien waar iemand een kenteken kan invoeren. Zaken als styling is even weggelaten om het simpel te houden.

Wanneer op de knop geklikt wordt, zal Remix een POST request uitvoeren. Onder water wordt er veel gedaan, maar in ons voorbeeld gaat het erom dat de `action` functie wordt aangeroepen.

In de `action`, halen we uit de `request` het kenteken dat de gebruiker heeft ingevoerd. De query vraagt naast een kenteken ook om een voertuigtype, maar dat hoeft de gebruiker niet in te vullen. Wij zetten het naar `car`, en vullen de query aan met het kenteken en hoppa!

Dit is natuurlijk een erg simpel voorbeeld, maar als je wilt interacteren met een API dat veel data vraagt in zijn request én jij weet dat veel properties naar een standaard waarde worden ingesteld, _hoef je die niet te vragen in de request van jouw client naar de server_. Je stuurt enkel de data die daadwerkelijk ingevuld wordt door de gebruiker, vult het aan met alle standaard data (of aangevulde business logica, zoals misschien een `userID` dat je uit je sessie data haalt) en stuurt dit naar de client. In ons voorbeeld bevat `VehicleQuery` maar 2 properties, maar wat als je een API hebt dat 20-30 properties heeft waarvan 80% een standaard waarde heeft?

Dan het vervolg: de query is gelukt en we hebben informatie gekregen van de API. Er is meer data teruggekomen dan we daadwerkelijk nodig hebben, dus we pakken de velden die we wél willen (`make` en `model`), en sturen dit terug naar de client.

In de client kunnen we een check doen of er data is verstuurd van de server (dit is een Remix-specifiek iets, daar kom ik later op terug), en als dat het geval is laten we het antwoord van de server zien. Stel de API geeft een gigantische lading aan data terug, dan kan je op je server gemakkelijk de informatie uitpikken die je nodig hebt en dit terugsturen naar de client.

_GraphQL, anyone?_

Nu is de payload, zowel van de client naar de server als vice versa, zo klein mogelijk. Dit is ontzettend handig, want iedere kilobyte telt!

## Hergebruik van types en validatie

Het is bij Remix en Next.js (en waarschijnlijk ook bij andere meta-frameworks) mogelijk om de types en validaties die je gebruikt in je code te delen tussen de client en de server.

Zo kan je een validatie function schrijven voor een e-mailadres. Die functie kan je gebruiken op de server om een inschrijfformulier te valideren voor je de data verwerkt in je database (want back-end validatie is essentieel in data verwerking).

Maar, in het kader van progressive enhancement, willen we ook het e-mailadres valideren als de gebruiker het e-mail veld heeft ingevuld en vervolgens naar een ander veld gaat.

In dit geval kunnen we dezelfde validatie functie gebruiken, en deze _op de client_ draaien. We hergebruiken de validatie tussen de client en de server zonder problemen.

```
// ./app/validations/email.ts
export function emailIsValid(email: string) {
	return email.match(/^(([^<>()\\\\[\\\\]\\\\\\\\.,;:\\\\s@"]+(\\\\.[^<>()\\\\[\\\\]\\\\\\\\.,;:\\\\s@"]+)*)|(".+"))@((\\\\[[0-9]{1,3}\\\\.[0-9]{1,3}\\\\.[0-9]{1,3}\\\\.[0-9]{1,3}])|(([a-zA-Z\\\\-0-9]+\\\\.)+[a-zA-Z]{2,}))$/);
}

// ./app/routes/contact.tsx
import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useActionData } from '@remix-run/react';
import { emailIsValid } from '~/validations/email';

interface SuccessfulContactFormResponse {
  status: 'success';
}

interface FailedContactFormResponse {
  status: 'error';
  message: string;
}
type ContactFormResponse =
  | SuccessfulContactFormResponse
  | FailedContactFormResponse;

type ContactForm = {
  email: string;
  message: string;
};

export const action = async ({ request }: ActionArgs) => {
  const data = await request.formData();
  const { email, message } = Object.fromEntries(data) as ContactForm;

  if (!emailIsValid(email)) {
		// Het e-mailadres is niet geldig, dus we sturen een error response terug
    const response: ContactFormResponse = {
      status: 'error',
      message: 'E-mail is niet correct',
    };

		return json(response, { status: 500 });
  }

	// Hier doen we iets met `message` om het te versturen
  // of op te slaan.
  const response: ContactFormResponse = { status: 'success' };
	return json(response);
};

export default function ContactPage() {
  const data = useActionData<typeof action>();

  return (
    <form method="post">
      <label>
        <p>E-mail:</p>
        <input
          name="email"
          type="email"
          aria-invalid={data?.status === 'error' ? true : undefined}
          aria-describedby="email-error"
        />
        { data?.status === 'error' && (
          <p id="email-error">
            {data.message}
          </p>
        )}
      </label>

      <label>
        <p>Bericht:</p>
        <textarea name="message" />
      </label>

      <button>Verzenden</button>
    </form>
  );
}
```

Zoals je ziet in het voorbeeld kunnen we hetzelfde principe toepassen voor TypeScript types: zowel de server als de client kan ze gebruiken.

{% note" Als je Remix al kent, zie je dat ik `useActionData<typeof action>()` gebruik. In feite geeft dit al het correcte type mee voor `data` in mijn code editor en hoef ik die niet expliciet te typen voor TypeScript. Je kan het altijd nog expliciet meegeven aan `data` wanneer je het declareert." %}

## State management

De diepe samenwerking tussen client en server in meta-frameworks komt ook van pas als het gaat om state management.

Over de jaren heen zijn er vele mogelijkheden gekomen om state management te doen in React. Dit komt met name omdat applicaties complexer worden én omdat data een steeds grotere rol aan het spelen is in die applicaties. Het komt er grofweg op neer dat een applicatie (dit geldt soms ook voor websites trouwens) rekening moet houden met 2 zaken:

-   De application state, oftewel de _global state_ van een applicatie;
-   Data mutaties, oftewel het aannemen, verwerken en weergeven van gebruikersdata;

Meestal wordt er een state management library gekozen om dit allemaal in bij te houden. Daar komt ook bij dat in Create React App deze state management voornamelijk (of zelfs helemaal) op de client wordt gedaan. Maar het leuke van meta-frameworks is dat ze de mogelijkheid bieden hier slimmer mee om te gaan.

## Application state

Eerst kijken we naar application state, wat wordt daar nou mee bedoeld?

In de meeste applicaties of websites wil je bepaalde states bijhouden zodat de gebruiker bijvoorbeeld functionaliteiten kan doen of instellingen wil bijhouden. Ik pak het voorbeeld van een _dark mode_ toggle. Op de meeste applicaties of websites zit er in het menubalkje een knop waarmee je kan aangeven of je de lichte of donkere versie van de website wil zien.

Op mijn website zie je zo'n toggle button zitten, ik heb hem gefocused met mijn keyboard want waarom niet? ;)

![Mijn website in light mode, waarbij je een lichte achtergrond en donkere tekst ziet](https://fronteers.nl/_img/adventskalender/advents-lody-1.png)

Als je er op klikt verandert het kleurenschema in een donkere variant.

![mijn website in dark mode, waarbij je een donkere achtergrond en lichte tekst ziet](https://fronteers.nl/_img/adventskalender/advents-lody-2.png)

De standaardmode van de website is _light mode_, dus als je de website bezoekt en je hebt nog geen voorkeur aangegeven door te klikken op de knop (of je hebt geen `prefers-color-scheme` instelling) is de achtergrond wit en de tekst donkerblauw.

Nu is het de bedoeling dat de mode die je kiest wordt onthouden op iedere pagina die je bezoekt. Klik je op de homepage op het zonnetje, wordt de achtergrond donkerblauw en de tekst wit. Dit krijg je dan ook te zien op ieder volgende pagina.

In een standaard React app kunnen we deze state onthouden met behulp van een state management library. Dit is zo simpel als het instellen van een default state, en wanneer op de knop wordt geklikt updaten we de default state met de nieuwe waarde. Hoe dit precies gaat verschilt een beetje per state management library, maar het eindresultaat is hetzelfde: de state wordt overal onthouden.

Hier is het wel belangrijk om even te benoemen dat die state meestal alleen lokaal wordt onthouden. Refresh je de pagina, verlies je de bijgewerkte state. Dit kan je makkelijk verhelpen door de state op te slaan in een cookie of `localStorage`.

Mijn website is gebouwd in Remix (surprise, surprise), en de manier hoe ik het oplos is simpelweg met cookies. De implementatie bestaat uit 3 punten:

1. We maken een cookie die door de browsers wordt meegestuurd met iedere request.
2. We bouwen een `<DarkModeToggle/>` knop die via een prop weet of die aan of uit staat (en zijn icoontje aanpast) en een POST doet naar een endpoint op de server als je er op klikt.
3. We bouwen de endpoint op de server om de cookie aan te passen met de nieuwe dark mode state.

## Stap 1: We maken een cookie die door de browsers wordt meegestuurd met iedere request.

In simpele vorm ziet dit er zo uit, waarbij we beginnen met het maken van een cookie. Dit wordt dan door de browser meegestuurd met iedere request.

```
// ./app/cookie.ts
import { createCookie } from '@remix-run/node';

export const userPrefs = createCookie('user-prefs', {
  maxAge: 31536000, // a year
});
```

In `./app/root.tsx` kunnen we dit dan uitlezen. De `root` in een Remix applicatie is wat `_app` is binnen een Next.js applicatie. Alle routes worden hierin meegegeven en wij hebben de mogelijkheid om het skelet van de applicatie of website vorm te geven.

```
import type { ActionArgs } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { userPrefs } from '~/cookies';
import DarkModeToggle from '~/components/DarkModeToggle';

export const loader = async ({ request }: LoaderArgs) => {
  const cookieHeader = request.headers.get('Cookie');
	const { darkModeEnabled = false }  = await userPrefs.parse(cookieHeader);

  return json({
    darkModeEnabled,
  });
};

export default function App() {
	const { darkModeEnabled } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
	      <header>
		      <DarkModeToggle isEnabled={darkModeEnabled} />
	      </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
```

## Stap 2: We bouwen een `<DarkModeToggle/>` knop die via een prop weet of die aan of uit staat (en zijn icoontje aanpast) en een POST doet naar een endpoint op de server als je er op klikt.

We bouwen een knop dat op basis van een prop (`enabled`) weet of dark mode aan staat of niet. In het geval dat het aan staat, laten we een ander icoontje zien en zetten we een andere waarde voor de POST request dan wanneer het uit staat.

In Remix zijn er meerdere manieren om data mutaties uit te voeren, waar ik later dieper op inga. Voor nu volstaat het om te zeggen dat `[useFetcher](<https://remix.run/docs/en/v1/api/remix#usefetcher>)` een `fetch` object teruggeeft dat we kunnen gebruiken om een request te doen zonder dat de pagina automatisch herlaad (alleen als alle JavaScript geladen is). `useFetcher` heeft veel meer handigheidjes ingebouwd zitten, zoals een check of een request "pending" is of niet.

```
// ./app/components/DarkModeToggle.tsx
import Icon from '~/components/Icon';
import { useFetcher } from '@remix-run/react';

type Props = {
  enabled: boolean | undefined;
};

const DarkModeToggle = ({ enabled }: Props) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form
      action="/api/cookies"
      method="post"
    >
      <input
        type="hidden"
        name="action"
        value={enabled ? 'disable' : 'enable'}
      />

      <button type="submit">
        <Icon name={enabled ? 'moon' : 'sun'} />
      </button>
    </fetcher.Form>
  );
};

export default DarkModeToggle;
```

## Stap 3: We bouwen de endpoint op de server om de cookie aan te passen met de nieuwe dark mode state.

Op de server maken we een API route aan. In Next.js kan dit door een bestand genaamd `cookies.ts` aan te maken in de `./pages/api` map. Remix geeft je de mogelijkheid om zogenoemde _resource routes_ aan te maken: routes zonder een React component export. Zelf vind ik het altijd fijner om deze resource routes te bundelen in een `/api/` folder zodat het duidelijk te zien is dat dit een andere soort route is.

We pakken de form data uit de request, kijken of dark mode aan-, of juist uitgezet is, en passen het cookie aan.

```
// ./app/routes/api/cookies.ts
import { userPrefs } from '~/cookies';
import type { ActionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';

type ActionData = {
  action: 'disable' | 'enable';
};

export const action = async ({ request }: ActionArgs) => {
  const cookieHeader = request.headers.get('Cookie');
  const formData = await request.formData();

  const cookie = (await userPrefs.parse(cookieHeader)) || {};

  const { action } = Object.fromEntries(
    formData,
  ) as unknown as ActionData;

  if (action === undefined) {
    throw new Error('An action is missing');
  }

  cookie.darkModeEnabled = action === 'enable';

  return redirect('/', {
    headers: {
      'Set-Cookie': await userPrefs.serialize(cookie),
    },
  });
};
```

Et voilà. We hebben nu management van de state van de dark mode op onze website, zonder een state management library daarvoor te configureren. Deze state wordt onthouden en kan dus later (opnieuw) uitgelezen worden. In ons voorbeeld is dat via een cookie, maar het kan ook via `localStorage` of een database op de server.

## Data mutaties

Een andere vorm van state management kan worden gedaan op data mutaties. Hierbij wordt data uitgelezen, bewerkt en wederom opgeslagen. Het heeft veel weg van application state, met een paar belangrijke verschillen:

-   De _waarde_ van de state is opgeslagen op de server in een data store (zoals een database, in tegenstelling tot een cookie).
-   De _houdbaarheidsdatum_ van de state is langer dan een gebruikerssessie. Neem als voorbeeld een blog: de content (zoals de posts) "leven door" als ik klaar ben met het schrijven van een post en het tabblad weer sluit. Of ik op dat moment dark mode aan of uit heb staan (application state) is minder relevant en die state mag zelfs weer vergeten worden.

De mensen van Remix hebben hier nog een uitgebreide post op geschreven die zeker het moeite waard is om te lezen: https://remix.run/blog/remix-data-flow. Ik jat een van de afbeeldingen die zij in hun post hebben geschreven, omdat dit het beste illustreert hoe Remix het state management overneemt als het gaat over data mutaties.

Door gebruik te maken van de `loader` en `action` functies, die worden uitgevoerd door respectievelijk een GET en POST request, kunnen we het managen van state verplaatsen van een library naar de server.

Voor ons voorbeeld nemen we een bewerkingsscherm voor een product, waarbij we twee velden hebben die we kunnen bewerken: product naam en prijs. Wanneer je op de knop "Opslaan" klikt, wordt de data meegenomen in de state en krijg je de bewerkingspagina weer te zien met daarin de nieuwe data.

In een traditionele React app zou een state management library ingezet kunnen worden om bij het submitten van het formulier, de ingevoerde data te pakken en de huidige state te verversen. Vervolgens wordt die state opgeslagen in de database en wordt ondertussen de huidige pagina ververst waardoor het bewerkingsscherm de laatste versie van deze data heeft.

Wat we zien in Remix, is dat tijdens het laden van de pagina de product data uit de database wordt gehaald. Vervolgens hebben we een React component dat de data uitleest van de server. Wanneer het formulier wordt verstuurd, wordt de data verwerkt en opgeslagen in de database, en vervolgens wordt de gebruiker weer doorgestuurd naar de bewerkingspagina, dat weer de (geüpdatete) data uit de database leest:

![een codevoorbeeld van een product component dat een form bevat, en de loader functie voor de GET requests en action functie voor de POST request](https://fronteers.nl/_img/adventskalender/advents-lody-3.png)

In feite zien we hier de state machine: we "updaten" de state van een product door één van de velden te bewerken en vervolgens op te slaan. Remix voert de `action` functie uit, stuurt de gebruiker terug naar `/products/[product ID]/edit`, waar tijdens de page load data wordt uitgelezen uit de database met behulp van de `load` functie. Remix _rendert_ het `Route` component dat de data van de server "verwerkt" in de HTML. De data stroomt via één route, de client blijft in sync met de server en je hoeft niet te letten op race conditions.

Ik wil je er ook even op wijzen dat er client-side geen JavaScript draait, en dat de inhoud van het formulier op de server gerenderd wordt. Dat betekent dat het ophalen van de nieuwe data en het zetten van de `defaultValue` van de twee inputs, _gebeurt op de server en niet de client_! Het scheelt dus ook dat we geen state management library hoeven te draaien op de client om dit werkend te krijgen.

Next.js biedt hier ook mogelijkheden voor, zowel out-of-the-box als met packages als `next-runtime` waar ik later op terugkom.

## Een diepere blik op Remix

Goed, we hebben nu een aantal voorbeelden gezien waarin full-stack development een steeds grotere rol speelt in ons werk als front-end developer. We hebben ook gezien hoe meta-frameworks zoals Remix ons tonen hoe we bepaalde functionaliteiten of zelfs strategieën kunnen implementeren nu we zelf ook controle hebben over de server.

Ik wil dus even dieper ingaan op Remix zelf. Voor mij heeft Remix een aantal voordelen ten opzichte van Next.js als het gaat om het bouwen van een React project. Veel van de voorbeelden die ik zojuist liet zien maakten gebruik van Remix (ook al zijn ze allemaal ook in Next.js uit te voeren). Er zijn wel wat zaken die ik verder wil uitlichten:

-   Routes, nested routes en resource routes.
-   Wat doen die `action`'s en `loader` functions nou precies?
-   Foutafhandeling in Remix: ErrorBoundaries en CatchBoundaries.
-   Forms

## Routes, nested routes en resource routes

Aan het hart van Remix staan routes. Dat is niet zo vreemd als je bedenkt dat de makers van React Router aan het roer staan bij Remix. De gedachte erachter is dat routes de ruggengraat van een applicatie of website is. En als je dat als uitgangspunt neemt, kan je een aantal aannames doen over het opvragen en binnenhalen van assets en data.

Voor Remix, de `routes` map is de belangrijkste map die je zult hebben. Alle `.jsx` of `.tsx` bestanden vormen uiteindelijk een route die je kan aanroepen via een URL.

Het mooie hier is dat Remix nested routes ondersteunt! Bij een [nested route](https://remix.run/docs/en/v1/guides/routing#what-is-nested-routing) wordt de UI van een applicatie onderverdeeld in URL segments.

![Alt: een afbeelding van een factuurdashboard met daarboven een menu dat aangeeft welke delen van een URL worden weergegeven in een interface zoals dit dashboard](https://fronteers.nl/_img/adventskalender/advents-lody-4.png)

In de afbeelding hierboven (gepakt van de website van Remix), zien we dat de route van het `<Invoice/>` component wordt gerepresenteerd in de URL door het factuurnummer (in dit geval `102000`).

Hoe ziet dit er dan uit in het project?

```
app
├── root.jsx
└── routes
    ├── ... // andere routes
    ├── sales
    │   ├── ... // andere nested routes
    │   ├── index.jsx
    │   ├── invoices
    │   │   ├── $invoiceId.jsx
    │   │   └── index.jsx
    │   ├── invoices.jsx
    └── sales.jsx
```

Voor `example.com/sales` worden 2 routes gerendered: `routes/sales.jsx` en `routes/sales/index.jsx`. In `sales.jsx` kan je de UI voor de "Sales" pagina zetten (in de screenshot kan dat dus de header met "Sales" zijn en het klik menuutje eronder). De `sales/index.jsx` route laat de standaard UI zien voor `example.com/sales`, bijvoorbeeld een placeholder of (in dit geval) alles onder het kopje "Overview".

Klikt de gebruiker op "Invoices", veranderd de URL naar `example.com/sales/invoices` en worden `routes/sales/invoices.jsx` en `routes/sales/invoices/index.jsx` geladen. In `invoices.jsx` kan de lijst met facturen worden geladen, in `invoices/index.jsx` kan bijvoorbeeld de kop "Kies een factuur uit het linkerrijtje" te zien zijn.

En dan als laatste: wanneer iemand op een factuur klikt. Iedere factuur weet zijn eigen factuur ID dus maken we een dynamische route aan voor het detail overzicht: `routes/invoices/$invoiceId.jsx`. Deze wordt alleen getoond als de URL een invoice ID heeft, zoals `example.com/sales/invoices/102000`. De `invoiceId` wordt in Remix meegegeven aan de `loader` functie, waarmee je in de database de factuurgegevens kan opvragen.

Het mooie is dat Remix dit niet alleen heel makkelijk maakt, maar de huidige staat van de UI is nu weergegeven in een URL. Dit kan je via een e-mail aan je collega's doorsturen en zij krijgen dan te zien wat jij ook ziet.

## Resource routes

Er is nog een type route dat Remix kent, een [resource route](https://remix.run/docs/en/v1/guides/resource-routes). Een resource route is niks anders dan een route dat geen React component exporteert, maar wél requests kan behandelen. In Next.js zouden dit de routes zijn die je in de `/pages/api/` map plaatst. Je kan hiermee routes bepalen die alleen iets inladen of een actie uitvoeren. In het dark mode voorbeeld hierboven gebruik ik een resource route om de cookies van mijn website te updaten, maar je kan het ook gebruiken om bijvoorbeeld een PDF te genereren aan de hand van dynamische data.

Op mijn blog gebruik ik Plausible voor mijn analytics, en om adblockers te ontwijken laad ik het Plausible script niet rechtstreeks in mijn pagina in. Ik gebruik een resource route om het Plausible script [te proxiën naar mijn pagina](https://github.com/lodybo/lodybo-nl/blob/main/app/routes/js/script[.js].ts).

## `action` en `loader`

In het voorbeeld van de factuur dashboard zei ik dat de `routes/invoices/$invoiceId.jsx` een `loader` functie gebruikt om factuurgegevens op te vragen. Remix gebruikt `loader` en `action` functies voor data mutaties in je route. Deze zijn overigens niet verplicht voor een specifieke route, en je mag ook één van de twee gebruiken.

In het kort: `loader` functies draaien wanneer er data wordt opgevraagd (een GET request), en `action` functies draaien wanneer er iets met de data gedaan wordt (een POST, PUT of DELETE request).

Beide functies retourneren een response object. Deze heeft de vorm van het standaard `[Response` object](https://developer.mozilla.org/en-US/docs/Web/API/Response) dat bij `fetch` gebruikt wordt. Hier zie je dus goed dat Remix zich houdt aan web standaarden: een request object implementeert bijvoorbeeld de `[Request` interface](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request) van `fetch`.

Door middel van het response object kan je Remix laten weten dat er een antwoord is met een bepaalde status (zoals `201` als je iets hebt aangemaakt in de database), of je kan de gebruiker redirecten naar een andere pagina (met een HTTP status code van `302`). Remix geeft je de `json()` en `redirect()` functies voor het gemak, [want deze zijn niks anders dan wrappers om een `Response` object heen](https://github.com/remix-run/remix/blob/main/packages/remix-server-runtime/responses.ts#L18).

Wat wél leuk is om te weten, is dat je een response ook kan `throw`'en!

## Foutafhandeling in Remix: ErrorBoundaries en CatchBoundaries

Remix geeft je twee opties voor foutafhandeling: een [ErrorBoundary](https://remix.run/docs/en/v1/guides/errors) en een [CatchBoundary](https://remix.run/docs/en/v1/guides/not-found). In het kort gebruik je de ErrorBoundary voor fouten die je niet anticipeert (zoals `500` server errors) en CatchBoundaries voor fouten die je anticipeert óf die de flow van je applicatie niet stopzetten (zoals `400` errors).

Het idee van het Remix-team is dat je `default export`, het React component dus, je happy path voorstelt. Voor de unhappy path kan je je logica verplaatsen naar een ErrorBoundary of CatchBoundary.

Beide boundaries kan je definiëren in de `root.tsx`, dat als basis voor iedere pagina gebruikt wordt. Maar de verborgen kracht is dat Remix ook boundaries op routeniveau ondersteunt. Met andere woorden, als er iets fout gaat in je route (of zelfs nested route!) wordt die ErrorBoundary of CatchBoundary getoond.

Terug naar het factuur dashboard, waar we op de URL `example.com/sales/invoices` een lijst met facturen hadden. Wat nou als je een factuur hebt aangeklikt van een factuur die inmiddels is verwijderd? Bijvoorbeeld omdat je die URL hebt doorgestuurd naar een collega en die kijkt een paar weken later in het systeem.

Stel, de code voor `routes/invoices/$invoiceId.jsx` is als volgt:

```
export const loader = async ({ params }) => {
	// "$invoiceId.jsx" wordt omgezet naar een 'invoiceId'
	// property op het 'params' object.
	const { invoiceId } = params;

	const invoice = await db.invoices.find({id: invoiceId});

	return json({ invoice });
};

export default function InvoiceDetails() {
	const { invoice } = useLoaderData();

	return (
		<Invoice details={invoice} />
	);
}
```

Wanneer een factuur wordt opgevraagd dat niet meer bestaat, gaat de regel `const invoice = await db.invoices.find({id: invoiceId});` verkeerd: we krijgen dan geen invoice terug, terwijl ons React component daar wél van uitgaat. Wat we kunnen doen is in ons React component het scenario behandelen dat `invoice` niet aanwezig is.

Wat we ook kunnen doen is een CatchBoundary inzetten voor een 404 fout!

We kunnen de code voor `routes/invoices/$invoiceId.jsx` zo aanpassen:

```
export const loader = async ({ params }) => {
	const { invoiceId } = params;

	const invoice = await db.invoices.find({id: invoiceId});

	if (!invoice) {
		throw new Response('missing invoice', {
			status: 404,
		});
	}

	return json({ invoice });
};

export default function InvoiceDetails() {
	// ...
}

export function CatchBoundary() {
	// 'caught' bevat nu de response object informatie
	// Het is eigenlijk hetzelfde als useLoaderData
	const caught = useCatch();

	const params = useParams();

	return (
		<h1>Sorry</h1>

		<p>We konden geen factuur vinden met nummer { params.invoiceId }</p>
	);
}
```

Nou, als je collega een paar weken later in het systeem kijkt voor de inmiddels verwijderde factuur, krijgt die een foutmelding te zien. In het React component dat we als `default export` zetten hoeven we alleen rekening te houden met het happy path.

We kunnen dit ook inzetten voor fouten die we niet (kunnen) anticiperen. Dus als React component, de `loader` of een `action` functie een fout opgooit (of een Response met een error status code van 500), dan wordt de ErrorBoundary getoond:

```
export const loader = async ({ params }) => {
	// Dus als we hier een throw doen:
	throw new Error('Something went wrong!');
};

export default function InvoiceDetails() {
	// Of hier:
	throw new Error('Something went wrong!');
}

export function CatchBoundary() {
	// Dan wordt deze boundary NIET getoond
}

export function ErrorBoundary({ error }) {
	// Maar deze wel!

	// Pas op, geen 'use' hook hier. We krijgen de error
	// doorgestuurd als prop.
	console.error(error);

	return (
		<h1>Oeps...</h1>

		<p>Er is iets fout gegaan. Probeer het later opnieuw.</p>
	);
}
```

Als we dit allemaal onder elkaar zetten hebben we een happy en unhappy path voor een route, allemaal in 1 bestand!

Dit is voornamelijk handig wanneer je gebruikt maakt van een CRUD-flow, waarbij een gebruiker ook data kan aanleveren of bewerken.

## Forms

Naast routes zijn forms ook een groot deel van een Remix applicatie. In de meest simpele vorm kan je een form en de afhandeling ervan als volgt bouwen:

```
export default function Form() {
	return (
		<form method="post">
			<label for="username">Gebruikersnaam</label>
			<input type="text" name="username" id="username" />

			<label for="password">Wachtwoord</label>
			<input type="password" name="password" id="password" />

			<button type="submit">Inloggen</button>
		</form>
	);
}

export const action = async ({ request }) => {
	const body = await request.json();

	const accessGranted = checkUserCredentials(body);

	if (accessGranted) {
		return redirect('/profile');
	}

	return json({ unauthorized: true }, { status: 403 });
};
```

Het leuke hiervan is dat dit werkt _zonder JavaScript_. Ik zei al eerder dat Remix je wel eens lichtjes in de richting van progressive enhancement duwt, dit is zo'n voorbeeld. Remix voert de volgende stappen uit wanneer iemand op "Inloggen" klikt:

-   De browser serialiseert de data van het formulier in de body van een POST request;
-   De browser navigeert de gebruiker naar de endpoint van de form (in dit geval is het dezelfde URL, maar met `<form action="/insert-endpoint-here"` kan je dit veranderen);
-   De server verwerkt de request en stuurt een redirect naar de browser (in dit geval wederom naar dezelfde URL, maar dit kan je veranderen);
-   De browser herlaadt de pagina;

Het is ook mogelijk om via `onsubmit` een `fetch` handler in te zetten zodat je het formulier kan verzenden en de nieuwe data in kan laden zónder page reload, zodra JavaScript is ingeladen. Maar Remix vangt dit al voor je af met hun `<Form/>` component.

Dit is een drop-in vervanging voor `<form/>`, werkt ook hetzelfde als er geen JavaScript is ingeladen, en doet een request zonder page load als JavaScript wél is ingeladen:

```
export default function Form() {
	return (
		<form method="post">
			<label for="username">Gebruikersnaam</label>
			<input type="text" name="username" id="username" />

			<label for="password">Wachtwoord</label>
			<input type="password" name="password" id="password" />

			<button type="submit">Inloggen</button>
		</form>
	);
}
```

Maar wat nou als we willen dat de verzend knop niet klikbaar is _terwijl_ de gebruiker wil inloggen (en we dus maar één request naar de server per keer sturen)?

Gebruik `useTransition`:

```
export default function Form() {
	const transistion = useTransition();

	return (
		<form method="post">
			<label for="username">Gebruikersnaam</label>
			<input type="text" name="username" id="username" />

			<label for="password">Wachtwoord</label>
			<input type="password" name="password" id="password" />

			{ // We hebben hier maar een component maar van gemaakt }
			<Button
				showSpinner={ transition.state === 'submitting' }
			>
				Inloggen
			</button>
		</form>
	);
}

export const action = async ({ request }) => {
	const body = await request.json();

	const accessGranted = checkUserCredentials(body);

	if (accessGranted) {
		return redirect('/profile');
	}

	return json({ unauthorized: true }, { status: 403 });
};
```

Okee, maar niet alle formulieren zijn in essentie ook een navigatie actie? Denk aan een formulier om je op te geven voor een nieuwsbrief dat op alle pagina's van je website wordt getoond? Of een dark mode toggle voor je blog?

Voor deze zaken heeft Remix `useFetcher`. Deze geeft je een `fetch`-achtig object terug dat voor jou een `loader` of `action` functie kan aanroepen zonder dat de URL veranderd.

Een simpel voorbeeld van een scenario met `useFetcher` wijs ik je naar mijn eerdere code voor het dark mode toggle, of lees de [Remix documentatie voor `useFetcher` eens door](https://remix.run/docs/en/v1/api/remix#usefetcher).

## Optimistic UI

Dit is een mooi kopje waar ik even in wil duiken. Remix maakt het mogelijk om het "optimistic UI" pattern in te zetten. Hierbij pak je een formulier voor bijvoorbeeld het maken of bewerken van een item of product, en wanneer het formulier wordt verstuurd laat je de server de data van dit product of item bewerken en opslaan in een database. Ondertussen laat jij in je UI "alvast" de pagina zien waarbij je de gegevens van het item of product weergeeft aan je gebruiker. Komt er ergens een foutmelding voorbij? Dan tonen we die, anders gaan we ervan uit dat de opsla-actie lukt en zouden we de gebruiker toch naar deze detailpagina doorsturen.

In het kort: we gaan ervan uit dat de opsla- of bewerkingsactie lukt en laten alvast zien waar je gaat eindigen.

De [documentatie van Remix](https://remix.run/docs/en/v1/guides/optimistic-ui) legt dit concept haarfijn uit, beter dan ik het zou kunnen.

## Maar, hoe zit het dan met Next.js 13?

Een paar weken geleden kwam de Layouts RFC uit van Next.js, waarin ze een plan presenteerden om naast de `pages/` folder nu ook een `app/` folder te ondersteunen. Binnen deze folder kon je dan nested routes, shared layouts en React server components gebruiken. Veel ideeën voelde bekend aan als je Remix had gebruikt, en ik heb het idee dat Vercel, het bedrijf achter Next.js, ook zeker goed had gekeken naar de manier waarom Remix werkte.

Dus, nu Next.js 13 uit is, wat is dan nog de meerwaarde van Remix?

Persoonlijk is voelt mij Remix nog steeds het fijnste als framework. Remix geeft mij het gevoel alsof ik mét het web platform, in plaats van óm het platform heen werk. Ik kan dit het beste uitleggen met wat voorbeelden.

## Progressive enhancement

Dit is voor mij nog steeds een van de hoofdpunten: met Remix werk je makkelijker met progressive enhancement. De discussie over "JavaScript enabled or disabled" is nog steeds gaande, en het is ook niet iets waar ik nu een standpunt voor inneem. Wat ik wél merk, is dat het niet zo'n raar idee is dat je JavaScript niet wordt geladen of juist zo ontzettend traag dat je niet aan de slag kan. Enkele voorbeelden van scenario's die ik mee heb gemaakt waarin een gemiddelde JavaScript bundel niet of nauwelijks werd geladen waren tijdens een weekje op Center Parcs (zeker als meerdere mensen een laptop mee hebben), of als je in Eindhoven op het terras zit tijdens een thuiswedstrijd van PSV of een concert van Guus Meeuwis.

## In dat geval is het "succes ermee!"

Het is niet zo dat ik met Remix nu ineens geen JavaScript verscheep naar de client, zeker wel. Maar ik merk dat ik, door het off-loaden van logica naar de server of de manier hoe data mutaties worden gedaan door forms, ik minder vaak JavaScript "nodig" heb in de client. De grootste boosdoener is voor mij, hilarisch genoeg, de `[classnames](<https://www.npmjs.com/package/classnames>)` package van npm.

En het is niet dat Next.js het je zo moeilijk maakt, [er is een stukje geschreven in hun documentatie](https://nextjs.org/docs/accessibility#disabling-javascript). Het leest wel minder zelfverzekerd dan de [guide in de documentatie van Remix](https://remix.run/docs/en/v1/guides/disabling-javascript).

Sterker nog, in de (naar mijn mening uitstekende) tutorial van Remix [laten ze je pas client-side JavaScript toevoegen aan het einde ervan](https://remix.run/docs/en/v1/tutorials/jokes#javascript). Dat is wel lef hebben als je het mij vraagt.

## SSR vs SSG

Next.js ondersteund al sinds jaar en dag server-side rendering (SSR) en static site generation (SSG). Sinds een tijdje zit daar ook ISR (incremental static regeneration) bij, maar wat is nou het verschil tussen die drie?

## Server-side rendering (SSR)

Bij SSR wordt de pagina op de server gerenderd en wordt de HTML naar de browser gestuurd. De browser download ondertussen ook de JavaScript bundel en voert die vervolgens uit. Als dat gebeurd, worden de dynamische elementen op de pagina geladen en kan de gebruiker interacteren met wat er op het scherm staat. Dat laatste heet _hydration_.

## Static site generation

Bij SSG worden de HTML pagina's tijdens het bouwen van de site opgebouwd. Als je een framework als Next.js (of Gatsby, bijvoorbeeld) naar een database wijst met blog posts, zal er tijdens het bouwen van de site van iedere blog post een HTML pagina worden gemaakt. Dit wordt allemaal op de server gezet, maar als er een blogpost bij komt in de database (of gewijzigd wordt) moet de hele site opnieuw gebouwd worden.

## Incremental static regeneration

Om dat laatste op te lossen heeft Next.js ISR ingebouwd, waarbij een (gedeeltelijke) rebuild van de site wordt gedaan als de data gerevalideerd wordt. Dit kan op basis van tijd, zoals "iedere 60 seconden", of _on-demand_. In Next.js kan je een API route maken die Next.js verteld alles te _revalidaten_ als je die endpoint raakt, bijvoorbeeld met een webhook.

Remix ondersteunt alleen SSR.

Static site generation (daar groepeer ik vanaf nu ook ISR onder), kwam vooral op in de tijd dat servers minder krachtig waren én ook niet al te goedkoop zijn. Voor websites met een zeg maar semi-dynamische content, zoals een blog, scheelde het geld als je die kon hosten op een CDN. Netlify heeft bijvoorbeeld een [gulle _free tier_](https://www.netlify.com/pricing/), dus je kan makkelijk een blog draaien zonder al te veel extra kosten.

Tegenwoordig zijn servers niet alleen krachtiger en goedkoper geworden, de infrastructuur is ook een stuk beter. Het is tegenwoordig niet zo lastig meer om een netwerk van servers in te zetten als CDN. Hosting providers als DigitalOcean maken het makkelijk om meerdere servers ("droplets") in meerdere regionen in te zetten, en [Fly.io](http://fly.io/) heeft zelfs documentatie geschreven over [het scalen in meerdere regio's](https://fly.io/docs/reference/scaling/). [Fly.io](http://fly.io/) wordt trouwens meestal aangeraden door het team van Remix zelf, omdat vinden dat een Remix site met correcte caching headers en gehost in meerdere regionen op [Fly.io](http://fly.io/), [dezelfde performance geeft als een site gemaakt met SSG](https://twitter.com/remix_run/status/1483514038323539972).

Of dat zo is, laat ik als een oefening voor de lezer.

Persoonlijk vind ik het juist fijn dat Remix alleen SSR ondersteund. Ik kan de _flow_ makkelijk in mijn hoofd kwijt: eerst server rendering, dan client hydration. In feite zorg ik ervoor dat mijn routes en components werken op de server en makkelijk gehydrateerd kunnen worden. Browser API's doe ik in `useEffect`, maar dit komt niet eens zo vaak voor.

Bij Next.js projecten moet ik wel eens nadenken of ik kies voor één van de drie strategieën, en SSG/ISR brengen stiekem best wat complexiteit met zich mee. Je moet toch (op zijn een minst simpele vorm van) een build straat aanleggen dat verbonden is met je productie database en het maken van een endpoint om een incremental static regeneration af te vuren is altijd wat werk. Next.js maakt het trouwens in versie 13 wat makkelijk door [een nieuwe API](https://beta.nextjs.org/docs/upgrade-guide#step-6-migrating-data-fetching-methods). Deze werkt trouwens alleen in de `app/` folder.

## Forms

Forms is iets dat vak genoemd wordt bij Remix pitches, zeker als het in vergelijking gaat met Next.js. Ik snap het wel, form handling gaat ook ontzettend goed in Remix en is, in mijn ogen, hetgeen dat 100% de visie en gedachtegoed van Remix "ademt".

Nu is het in Next.js uiteraard mogelijk om met forms te werken, en behandelen ze zelfs [het gebruik van forms zonder JavaScript](https://nextjs.org/docs/guides/building-forms#part-5-form-submission-without-javascript). Maar in Remix voelt het allemaal meer vertrouwd, meer zoals het altijd zou moeten werken. Geen `onSubmit`'s en `event.preventDefault()`'s meer, geen handmatige `fetch` requests meer zodat je onmiddellijk het resultaat van een POST kan laten zien.

In Next.js is dit stuk wel veel verbeterd. Er is een hoofdstuk over data mutaties opgenomen in de [nieuwe beta documentatie van Next.](https://beta.nextjs.org/docs/data-fetching/mutating)[js](https://www.notion.so/Remix-en-Next-js-echt-full-stack-bestaat-niet-of-wel-584cb14bdcaa47229bde5270b0f0f1c6), en die voelt al meer vertrouwd. Belangrijk om te weten: op deze pagina is laat het team achter Next.js weten dat er een nieuwe RFC komt over data mutaties!

In de `pages/` folder is dit allemaal niet ondersteunt helaas. Om er op een (voor mij) logische manier mee te werken heb ik `[next-runtime](<https://www.npmjs.com/package/next-runtime>)` gebruikt in mijn Next.js projecten, waarbij ik POST requests binnen Next.js' `getServerSideProps` kan verwerken.

## Hoe zit het aan het einde van de dag?

Nou, aan het einde van de dag ben ik ontzettend onder de indruk van Next.js 13. Ik ga er zeker induiken en ik ben ontzettend benieuwd naar de updates die er nog gaan komen.

Maar voor mij blijft Remix op nummer één staan. Voor mij "klopt het" gewoon, en kan ik ontzettend snel iets neerzetten. De [starters kits](https://remix.run/docs/en/v1/pages/stacks) zijn belachelijk uitgebreid en production-ready, en de [Jokes App tutorial](https://remix.run/docs/en/v1/tutorials/jokes) is één van de beste tutorials die ik heb gevolgd. Alles klikte toen ik die deed, en ik kan het je zeker aanraden.

Maar wat het belangrijkste is, van zowel Next.js als Remix: ze geven ons front-enders méér tools om ons werk te kunnen doen. Ze bieden meer ruimte en flexibiliteit in ons werk door de _server_ mee te nemen als onderdeel van onze, tjsah, laat ik "runtime environment" zeggen. We opereren niet meer op de zwarte doos dat "de browser van je gebruiker" heet, maar geeft je een extra, betrouwbaar platform dat onderdeel is van je applicatie.

Het maakt ook bepaalde zaken zoveel makkelijker. We hoeven niet meer te wachten op een back-end developer die voor ons een proxy server moet bouwen zodat we een authenticatie token kunnen verbergen én CORS-fouten kunnen vermelden. We bouwen de proxy nu gewoon zelf.

Het maakt de back-end (developer) niet overbodig, het evolueert ons allemaal naar een volledige technologie stack.

Het evolueert ons allemaal naar full-stack.
