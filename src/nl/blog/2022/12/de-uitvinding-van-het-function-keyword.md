---
title: De uitvinding van het function keyword
date: 2022-12-16
author: Maarten Hus
summary: 'Ergens in een parallel universum dicht bij het jouwe... staat Steve Jobs op een groot podium.'
categories: 
  - Adventskalender
---
Ergens in een parallel universum dicht bij het jouwe... staat Steve Jobs op een groot podium.

Na de introductie van de iPhone 20 en de nieuwe
iMac air max, zegt Steve:

"One more thing"

"Years ago when Apple acquired Netscape we tasked Brendan Eich to create JavaScript in 9 days. It was a tight deadline for sure, but he pulled through."

"Here at Apple we often wonder, just as the the rest of you, what we would have gotten if we had given Brendan 10 days instead."

Plotseling dooft het licht. Het auditorium gesluierd in duisternis.

Het publiek houd zijn adem in... gaat het dan toch na al die jaren gebeuren...

"[Also sprach Zarathustra](https://www.youtube.com/watch?v=IFPwm0e_K98)" begint te spelen.
Beelden schieten voorbij: man landt op de maan, klimaat crisis opgelost, vrede op aarde.

En dan verschijnt het in beeld, één woord.
Één magisch woord!

Het publiek begint te juichen, mensen vallen elkaar in de armen, emacs vs vim, spaces vs tabs, Tailwind vs CSS, het maakt niet uit.

"Function"

Steve Jobs spreekt met een glimlach:

"The tyranny of the const lambda is finally at an end."

Terug naar ons universum.

Deze post gaat over iets waar ik me mateloos aan erger, namelijk: de "const lambda" of de "const fat arrow" function.,

Het idee achter het verhaal hierboven is het volgende: als het function keyword nu uitgevonden zou worden, zouden we nooit meer de "const lambda" gebruiken, en was iedereen nu bezig met blogposts schrijven over hoe geweldig het function keyword wel niet is.

Even een paar voorbeelden van de `const lambda`:

```
// Een wiskundige berekening
const surfaceOfCircle = (diameter) => {
  const radius = diameter / 2;
  return radius * radius * Math.PI;
};

// Een React component
const Greeter = ({name, age}) => {
  return <p>Hello {name}, you are {age} years old</p>
};
```

Ik vind het "signaal" in deze code niet heel sterk.
Met "signaal" bedoel ik dat de schrijver de intentie, wat de code gaat doen, verbergt.

We lezen van links naar rechts: eerst staat de naam er, en dan pas dat het een functie is.

Neem de vorige twee voorbeelden, maar dan geschreven met het `function` keyword:

```
// Een wiskundige berekening
function surfaceOfCircle(diameter) {
  const radius = diameter / 2;
  return radius * radius * Math.PI;
}

// Een React component
function Greeter({name, age}) {
  return <p>Hello {name} you are {age} years old</p>
}
```

Ik vind deze varianten in mijn bescheiden mening veel leesbaarder, het signaal, de intentie is sterker.

Van links naar rechts rusten mijn ogen op het keyword "function", in één oogopslag weet ik wat er nu gaat komen... een functie.

Is er dan geen enkele reden om een lambda / fat arrow te gebruiken? Nee hoor: voor callbacks zijn ze ideaal. Ze nemen dan juist "ruis" weg.

Zoals bijvoorbeeld bij de verschillende array functions:

```
const persons = [
  { name: "Maarten", age: 33 },
  { name: "Tosca", age: 31 },
  { name: "Owen", age: 5 },
  { name: "Jane", age: 2 },
];

const adults = persons
  .filter(person => person.age >= 18);
```

Ook hebben lambda's de mooie eigenschap dat ze de `this` niet manipuleren.

Neem het volgende voorbeeld dat geschreven is voordat de lambda  beschikbaar was: het idee is dat de `birthday` pas na 1 seconde wordt uitgevoerd.

```
var person = { 
  name: "Maarten", 
  age: 33,
  birthday: function () {
    setTimeout(function() {
      console.log("Birthday timeout", this);

this.age += 1;
    }, 1000);
  }
};
person.birthday();
```

In de code hierboven zit een subtiele bug, namelijk dat de "this" in de timeout niet naar "person" wijst maar naar de "window".

Na 1 seconde is de `window.age` dus met plus 1 gedaan wat `NaN` (Not a Number) oplevert.

Vroeger pre lambda loste je dit zo op:

```
var person = { 
  name: "Maarten", 
  age: 33,
  birthday: function () {
    // Stel de "this" even veilig zodat
    // het in de timeout gebruikt kan
    // worden.
    var self = this;

    setTimeout(function() {
      console.log("Birthday timeout", this, self);

      // Hier self ipv this omdat this
      // anders de `window` wijst.
      self.age += 1;
    }, 1000);
  }
};

// Pas na 1 seconde gaat age omhoog
person.birthday();
```

Maar met lambda / fat arrow functions hoeft dit `self` trucje dus niet meer. Lambda functions behouden de `this`:

```
const person = { 
  name: "Maarten", 
  age: 33,
  birthday() {
    setTimeout(() => {
      console.log("Birthday timeout", this);

      this.age += 1;
    }, 1000);
  }
};
person.birthday();
```

Lambda functies zijn dus helemaal zo gek nog niet.

* Mijn advies samengevat is dus: gebruik het function keyword
* om functies te definieren in plaats van "const lambda"
* voor een sterker signaal.

En gebruik lambda's voor callbacks, voor compactere code, en om vervelende this bugs te voorkomen.
