---
title: "Een API schrijven als een front end developer"
date: 2018-12-16
author: Thomas Machielsen
categories: 
  - Adventskalender
---
De laatste 12 maanden ben ik aan de slag gegaan om een “beer-API” te bouwen. De voornaamste reden om een API te bouwen was om te oefenen. En nu laat ik graag zien hoe ik het heb aangepakt. Hopelijk inspireert het jou ook om zelf een API te bouwen, ook als front-end developer! Na dit artikel kun je zelf een kleine API bouwen. Je zou bijvoorbeeld een database kunnen bijhouden met boeken die je hebt gelezen.

# Wat gaan we bouwen?

Een verkleinde versie van mijn beer-api. Deze versie vraagt biertjes op uit mijn database. Het bevat 1 route, 1 controller, 1 service en 1 view. De view bestaat uit JSON. Het product wat we gaan bouwen kun je vinden op _[GitHub](https://github.com/Thomas-Machielsen/beer-api-tutorial/tree/master/final)_.

# Technologie die we gaan gebruiken

Als front-ender kies je er natuurlijk voor om zoveel mogelijk met JavaScript te doen. De meest voor de hand liggende keuze is dan ook Node.js voor de back-end.

Als database heb ik gekozen voor MySQL, omdat ik er al ervaring mee had. Aangezien ik geen MySQL queries wil schrijven gebruik ik _[Sequelize](http://docs.sequelizejs.com/)_. Sequelize is een JavaScript *ORM* [(Object Relational Mapping)](https://en.wikipedia.org/wiki/Object-relational_mapping) zodat je met JavaScript queries kan schrijven.

<p class="note">
(Ik heb gekozen voor MySQL in dit project maar als ik het weer zou doen, zou ik kiezen voor Mongo of een andere NoSQL taal. NoSQL sluit namelijk beter aan bij JavaScript.)
</p>

```
this.UserSchema.User.findAll({
	attributes: ["username", "role"],
	})
	.then(users => resolve(users))
	.catch(reject);
```

_Een sequelize query die alle usernames en beroepsrollen uit de “user” tabel haalt (SELECT username, role from USERS)_

Als laatste heb ik het populaire _[Express Framework](https://www.express.com/)_ gebruikt. Dit is een eenvoudig en snel in te zetten framework om web applicatie’s te bouwen.

<p class="note">
Express was echter geen goede keus voor dit project omdat ik enkel JSON terug ga sturen, Polka zou een betere keuze zijn geweest. Express heeft namelijk een rendering engine in zich maar dat is in dit specifieke geval overkill.
</p>

# Projectstructuur

![De projectstructuur](https://fronteers.nl/_img/adventskalender/projectstructuur.png)

Om een overzichtelijk project te hebben is het van belang dat je van te voren nadenkt over de projectstructuur. Ik maak gebruik van MVCS (Model Controller View Service), een variant van [MVC](https://nl.wikipedia.org/wiki/Model-view-controller-model).

Een model representeert data, bijvoorbeeld een rij uit de bier-tabel in de database. De controller is een dunne laag tussen de view en de service. De controller vraagt data uit de service en geeft deze data door aan de view. De view in mijn geval is 1 regel code in de controller die de JSON rendert.

```
res.json({ data: results });
```

Nu er een structuur is, kan ik beginnen met bouwen!

# Stap 1: de server starten

Ik begin met app.js, het startpunt van de applicatie. Hierin start ik de app op en begin ik ook met importeren van packages.

```
require('dotenv').config();
const express = require('express');
const app = express();
const defaultPort = 3030;
const port = process.env.PORT || defaultPort;

app.listen(port, () => console.log(`App listening at http://localhost:${port}`)); //eslint-disable-line no-console
```

Als je naar _[GitHub](https://github.com/Thomas-Machielsen/beer-api-tutorial/tree/master/v1)_ gaat zie je hoe het project er nu uit ziet.

Het valt je misschien op dat er process.env.PORT staat. Dit zijn *_environment variabelen_*. Deze sla je op in een .env file. Dit is configuratie van een server maar deze configuratie wil je per server instellen. Als ik dit hardcoded erin zou zetten en het dan zou pushen naar de server zou de applicatie kapot gaan. En dan zou ik andere code moeten pushen en dat willen we niet. Dit is gebaseerd op het principe “*_config in the environment_*” van de website _[12 factor](https://12factor.net/config)_.

Als je dit zou opstarten krijg je een console message. Heel leuk natuurlijk maar verder doet het nog niks.

# Stap 2: routes

Om verder te gaan wil ik mock data laten zien als de gebruiker naar localhost:3030/api/beers gaat. Hiervoor hebben we een route nodig. Een route is een stukje code die bepaalt waar een request heen gaat. De request is in dit geval /api/beers (een _[GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)_). In de route vertellen we dan wat er moet gebeuren als /api/beers wordt aangeroepen.

Allereerst gaan we in app.js zeggen dat we gebruik gaan maken van routes.

```
require('dotenv').config();
const express = require('express');
const app = express();
const defaultPort = 3030;
const port = process.env.PORT || defaultPort;

const router = require('./routes');
app.use(router);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`)); //eslint-disable-line no-console
```

De regel `const router = require(‘./routes’);` is een verwijzing naar waar het bestandje met routes staat. Vervolgens vertellen we de app deze routes te gebruiken door app.use aan te roepen met als argument router.

In de root van het project maak je een bestandje aan ‘routes.js’. En in dit bestand zet je:

```
const { Router } = require('express');
const router     = module.exports = Router();

// Controllers
const beerCtrl  = require('./controllers/beersCtrl');

router.get('/api/beers', [beerCtrl.getBeer]);
```

Hierin gebruiken we de router van express. Met router.get zeggen we dat de router moet luisteren naar HTTP methode GET. Als er dus een GET methode komt op /api/beers gaat de applicatie naar de beerCtrl waarin weer een functie staat die ‘getBeer’ heet.

Aangezien we nu een verwijzing hebben naar de beerCtrl moeten we natuurlijk ook de controller maken. De controller haalt data op uit de service en geeft deze door aan de view.

```
const Sequelize = require("sequelize");
const BeerSchema = require("../schemas/Beer");
const RatingSchema = require("../schemas/Rating");
const BeersService = require("../services/beers");
const { STATUSCODES } = require('../constants');

const Beers = new BeersService(Sequelize, BeerSchema, RatingSchema);

const getBeer = (req, res) => {
  Beers.getBeer(req)
    .then(results => res.json(results))
    .catch(err => {
      res.status(STATUSCODES.NOT_FOUND);
      res.json(err);
    });
};

module.exports = { getBeer };
```

De controller moet communiceren met de service dus we requiren de BeerService en vervolgen instantiëren we hem door er _[New](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)_ op aan te roepen. Daarna roepen we de functie getBeer van de service aan. We gebruiken hier de request (req) en result (res) objecten van Express. Vervolgens pakken we deze resultaten van de service en renderen we ze terug als JSON. Dan zit er nog wat error handling in maar dat ga ik nu niet behandelen.

Nu moet de Service natuurlijk gemaakt worden. Maak nu een folder aan en noem die services. Vervolgens maken we een bestandje aan: 'beers.js'.

```
module.exports = class BeersService {
 getBeer() {
   return new Promise(resolve => {
     resolve({ data: 'beers' })
   });
 }
};
```

Er is voor gekozen om hier gebruik te maken van een class, dit is echter niet per se nodig. Je zou ook een gewone functie kunnen gebruiken.

Als je nu naar localhost:3030/api/beers gaat zie je JSON met daarin “data: ‘beers’”.

Maar dit is mock data. We willen natuurlijk echte data. Op _[GitHub](https://github.com/Thomas-Machielsen/beer-api-tutorial/tree/master/v2)_ zie je nu de huidige status.

# Stap 3: koppelen met echte data

In het mapje final zit een schema voor de database, database.sql. Als je dit installeert en verbindt met de app kun je dit gedeelte ook draaien. Je kan natuurlijk altijd gewoon blijven lezen.

Zoals ik al eerder aangaf gebruik ik sequelize zodat ik op een JavaScript manier queries kan bouwen en geen SQL queries hoef te schrijven. Eerst moeten we schema’s definiëren. We definiëren hoe de database tabellen in elkaar zitten. Dit komt overeen met hoe de database in elkaar zit. Maak een folder aan en noem die `schemas`, zet hier Beer.js in.

```
const dbConfig = require("../config/db");
const Sequelize = require("sequelize");

const Beer = dbConfig.db.define("Beer", {
 name: Sequelize.STRING,
 userId: Sequelize.INTEGER,
 style: Sequelize.STRING,
 brewer: Sequelize.STRING,
 desc: Sequelize.TEXT
});

const associations =  (Rating) => {
 Beer.hasMany(Rating);
};

module.exports = { Beer, associations };
```

In dit bestand zeggen we dat er een Beer schema is, die definiëren we met Sequelize. We doen ook een association, hiermee verbinden we het Rating schema met het Beer Schema. Dit hebben we nodig om joins op de query uit te voeren. We zeggen dat één bier (één rij in de tabel) meerdere ratings kan hebben. (Meerdere mensen kunnen hetzelfde biertje raten.)

Hetzelfde doen we voor ratings. Zet dit in Rating.js:

```
const dbConfig = require("../config/db");
const Sequelize = require("sequelize");

const Rating = dbConfig.db.define("Rating", {
 rating: Sequelize.INTEGER,
 userId: Sequelize.INTEGER,
 beerId: Sequelize.INTEGER
});

const associations = (Beer) => {
 Rating.belongsTo(Beer);
};

module.exports = { Rating, associations };
```

De dbConfig bevat informatie om te verbinden met de database. Dit bestand bevat bijvoorbeeld inlog gegevens voor de database.

```
const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABSE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
);

module.exports = { db };
```

Om ervoor te zorgen dat onze beer-service gebruik kan maken van Sequelize, moeten we sequelize beschikbaar maken. We zouden in services/beers.js Sequelize kunnen requiren maar dan kunnen we Sequelize niet mocken. Om in een later stadium services/beers.js te kunnen testen moeten we Sequelize kunnen mocken. Daarvoor gaan we alle dependencies meegeven als een argument aan de service. Dit doen we in de controller.

```
const Sequelize = require("sequelize");
const BeerSchema = require("../schemas/Beer");
const RatingSchema = require("../schemas/Rating");
const BeersService = require("../services/beers");
const { STATUSCODES } = require('../constants');

const Beers = new BeersService(Sequelize, BeerSchema, RatingSchema);

const getBeer = (req, res) => {
  Beers.getBeer(req)
    .then(results => res.json(results))
    .catch(err => {
      res.status(STATUSCODES.NOT_FOUND);
      res.json(err);
    });
};

module.exports = { getBeer };
```

Je ziet hier dat ik Sequelize, BeerSchema en het RatingSchema meegeef aan de service. Deze manier van dependencies meegeven aan code wordt ook wel *_dependency injection_* genoemd.

Aangezien we deze dependencies meegeven aan de beer-service moeten we ook zorgen dat de beer-service deze gebruikt.

Dit doen we door een *_constructor_* toe te voegen. Een constructor is een methode van een klasse. De constructor wordt als eerste uitgevoerd zodra de klasse wordt geïnitialiseerd.

```
constructor(Sequelize, BeerSchema, RatingSchema) {
    this.Sequelize = Sequelize;
    this.BeerSchema = BeerSchema;
    this.RatingSchema = RatingSchema;
}
```

_De constructor in services/beers.js_

Van de biertjes die we gaan selecteren willen we enkele dingen weten. We zijn geïnteresseerd in de attributen "id", "name", "style", "brewer" en de gemiddelde “rating”. De attributen die we gaan selecteren slaan we op in een aparte functie. Dit volgens het principe _[“*functions should do one thing”*.](https://www.bol.com/nl/f/clean-code-a-handbook-of-agile-software-craftsmanship/9200000033313462/)_

Hetzelfde gaan we doen voor het koppelen van de twee schema’s.

```
constructor(Sequelize, BeerSchema, RatingSchema) {
  this.Sequelize = Sequelize;
  this.BeerSchema = BeerSchema;
  this.RatingSchema = RatingSchema;

  this.makeAssocations();
  this.saveSelectors();
}

makeAssocations() {
  this.RatingSchema.associations(this.BeerSchema.Beer);
  this.BeerSchema.associations(this.RatingSchema.Rating);
}

saveSelectors() {
  this.attributesArrayWithId = ["id", "name", "style", "brewer"];
  this.starAttribute = [
    [this.Sequelize.fn("AVG", this.Sequelize.col("rating")), "stars"]
  ];
};
```

_De constructor in services/beers.js. We slaan de attributen op die we willen opvragen en we koppelen de databases._

Nu is het tijd om de query te maken. Zoals reeds gezegd is Sequelize een ORM. Een ORM mapped objecten naar relaties. Een query bouw je dus op uit objecten. Omdat database code async is, werkt sequelize met promises. (Async, await werd destijds nog niet ondersteund, nu wel).

```
this.BeerSchema.Beer.findAll({
  attributes: this.attributesArrayWithId,
  required: false,
  include: [
    {
      model: this.RatingSchema.Rating,
      attributes: this.starAttribute
    }
  ],
  raw: true,
  nest: true,
  group: ["id"],
  where: helpers.getParams(req.params.id)
})
```

Hierin wordt gezegd BeerScheme kijk naar de database definitie “Beer”. (Een verwijzing naar Beer in schemas/Beer.js). Vervolgens voeren we het Sequelize commando “findAll” uit. Dit betekent dat ik alle rijen terug wil, die voldoen aan de requirements. (Er bestaat bijvoorbeeld ook findOne). Daarna geef ik op welke attributen ik terug wil zien, zoals aangegeven in de vorige stap.

Daarna include ik de rating tabel. (required, raw & nest sla ik even over, dat is configuratie van Sequelize)

Vervolgens group ik het op id. Dan is er nog een where clause, die verwijst naar een functie namelijk ‘helpers.getParams’. Dit is een helper functie, die of een leeg object meegeeft of een id. In een later stadium kan je met behulp van dat id één biertje opvragen.

```
this.BeerSchema.Beer.findAll({
  attributes: this.attributesArrayWithId,
  required: false,
  include: [
    {
      model: this.RatingSchema.Rating,
      attributes: this.starAttribute
    }
  ],
  raw: true,
  nest: true,
  group: ["id"],
  where: helpers.getParams(req.params.id)
})
```

Uit Sequelize komt een promise dus die gaan we opvangen. We kijken eerst of er resultaat is. Zo niet gaan we gelijk weg uit de promise. Dit noem je ook wel het _[“bouncer pattern”](http://rikschennink.nl/thoughts/the-bouncer-pattern/)_. Het moment dat je weet dat een functie niks meer doet, ga je er gelijk uit weg. Het voordeel is dat je er plattere code door krijgt. Wat weer beter leesbaar is.

Mocht de code echter wel resultaten geven, dan geven we een bericht terug aan de controller. De controller verwacht echter een promise dus we moeten alles nog wrappen in een promise.

```
getBeer(req) {
  return new Promise((resolve, reject) => {
    this.BeerSchema.Beer.findAll({
      attributes: this.attributesArrayWithId,
      required: false,
      include: [
        {
          model: this.RatingSchema.Rating,
          attributes: this.starAttribute
        }
      ],
      raw: true,
      nest: true,
      group: ["id"],
      where: helpers.getParams(req.params.id)
    })
    .then(beers => {
      if (beers.length === 0) { reject(NO_BEERS); }
      resolve({
        success: true,
        beers
      });
    })
    .catch(e => {
      reject(e);
    });
  });
}
```

De volledige code is wederom te vinden op _[GitHub](https://github.com/Thomas-Machielsen/beer-api-tutorial/tree/master/final)_.

# Conclusie

Je hebt nu hopelijk genoeg informatie om als hobby-project zelf een API te bouwen. Natuurlijk is dit een versimpelde versie, er zitten bijvoorbeeld geen gebruikers in. De biertjes zijn niet aan te passen, niet te verwijderen en nieuwe toevoegen kan ook nog niet. Toch hoop ik dat dit een basis is voor iedereen om eens zelf een API te bouwen. Want als FED is het erg leerzaam (en leuk!) om zelf een API te bouwen.

En als je interesse hebt in een grotere variant, de volledige code is natuurlijk op _[GitHub](https://github.com/Thomas-Machielsen/beer-api)_.

### Over Thomas Machielsen
<img src="/archief/_img/adventskalender/thomas.jpeg" alt="Foto van thomas" class="floating-portrait">
Thomas is een front end developer bij Mirabeau. Daar werkt hij aan allerlei toffe projecten. Dat is ook precies wat die doet in z'n vrije tijd! Zolang het JavaScript is, wordt Thomas gelukkig!

Donatie: Longfonds
