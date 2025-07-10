---
title: Autofill met het autocomplete attribuut
date: 2025-01-06
author: Edwin Martin
summary: "Maak het invullen van formulieren veel gemakkelijker voor de gebruiker met autofill."
categories:
  - Adventskalender
key: 12days2024-autofill
---

Waarschijnlijk ken je het wel: bij sommige inschrijfformulieren ben je zo klaar en bij andere
is het een moeizaam proces waarbij je je telefoonnummer, adres enzovoorts handmatig moet intypen.

Bij de eerste versie wordt waarschijnlijk gebruik gemaakt van autofill, met het `autocomplete` attribuut.
Met autofill kan een browser formuliervelden automatisch invullen.
Het gebruik van autofill maakt het invullen van formulieren makkelijker, veiliger en vergroot het conversiepercentage.

Je kan autofill aanzetten door `autocomplete` op `on` te zetten.

```html
<input type="text" name="phone" autocomplete="on" />
```

Maar dat is niet de beste manier. Gewoonlijk staat `autocomplete` al standaard op `on` en de browser moet gokken
wat precies ingevuld moet worden.
Beter is om `autocomplete` een specifieke waarde te geven, zoals `tel` voor telefoonnummer.

```html
<input type="text" name="phone" autocomplete="tel" />
```

Naast tel voor telefoonnummer zijn er nog veel meer mogelijk waarden voor verschillende
formuliervelden. Dit is de hele lijst:

`name`, `honorific-prefix`, `given-name`, `additional-name`, `family-name`, `honorific-suffix`, `nickname`, `organization-title`, `username`, `new-password`, `current-password`, `one-time-code`, `organization`, `street-address`, `address-line1`, `address-line2`, `address-line3`, `address-level4`, `address-level3`, `address-level2`, `address-level1`, `country`, `country-name`, `postal-code`, `cc-name`, `cc-given-name`, `cc-additional-name`, `cc-family-name`, `cc-number`, `cc-exp`, `cc-exp-month`, `cc-exp-year`, `cc-csc`, `cc-type`, `transaction-currency`, `transaction-amount`, `language`, `bday`, `bday-day`, `bday-month`, `bday-year`, `sex`, `url`, `photo`, `tel`, `tel-country-code`, `tel-national`, `tel-area-code`, `tel-local`, `tel-local-prefix`, `tel-local-suffix`, `tel-extension`, `email` en `impp`.

Een aantal velden, zoals `name`, `street-address`, `cc-name`, `cc-exp`, `bday` and `tel` kunnen opgesplitst worden in kleinere delen.
Zo kan je in plaats van `bday` (verjaardag) ook drie losse invulvelden met `bday-day`, `bday-month` en `bday-year` gebruiken.

Behalve op `<input>`, kan je het `autocomplete` attribuut ook gebruiken op `<textarea>` en `<select>`.

## Autofill uitzetten

Je kan autofill ook uitzetten. Bijvoorbeeld bij een invulveld die elke keer anders is, zoals een 2FA-token.
Je gebruikt dan de waarde `off`.

```html
<input type="text" name="2fa-token" autocomplete="off" />
```

Let er op dat je niet autofill uitzet voor alle velden.
Zo'n tien jaar geleden merkte ze bij het Chrome-team dat bij een aantal formulieren autofill geheel was uitgezet
terwijl daar geen goede reden voor was. Ze hebben er toen voor gekozen om in dat geval het `autocomplete` attribuut te negeren.

Zie hier het bijbehorde bugreport en discussie: [autocomplete=off is ignored on non-login INPUT elements](https://issues.chromium.org/issues/41163264).

## Extra tokens

Het `autocomplete` attribuut kan meerdere tokens bevatten.
Zo kan je `shipping` of `billing` toevoegen, bijvoorbeeld bij een bestelformulier om
het afleveradres en het factuuradres apart op te geven.

```html
<textarea name="address" autocomplete="street-address shipping"></textarea>
```

Om aan te geven om wat voor soort telefoonnummer, email of impp (Instant Messaging and Presence Protocol) het gaat kan je een van deze tokens toevoegen:
`home`, `work`, `mobile`, `fax` of `pager`.

```html
<input type="text" name="phone" autocomplete="tel work" />
```

Als laatste extra token kan je een section opgeven, waarmee je invulvelden kan groeperen en onderscheiden.
Stel dat je de mogelijkheid geeft dat een bezoeker een concertkaartje voor een vriend kan kopen,
dan kan je de gegevens van de koper en de gegevens van de vriend onderscheiden met de tokens `section-buyer` en `section-friend`.
Het sectiontoken begint altijd met `section-` en wat daarna komt kan je zelf bedenken en dient alleen ter onderscheid,
het heeft voor de browser geen inhoudelijke waarde.

```html
<fieldset>
  <legend>Buyer</legend>
  <label for="name-buyer">Name</label>
  <input
    type="text"
    id="name-buyer"
    name="name-buyer"
    autocomplete="name section-buyer"
  />
  <label for="email-buyer">E-mail</label>
  <input
    type="email"
    id="email-buyer"
    name="email-buyer"
    autocomplete="email section-buyer"
  />
</fieldset>

<fieldset>
  <legend>Friend</legend>
  <label for="name-friend">Name</label>
  <input
    type="text"
    id="name-friend"
    name="name-friend"
    autocomplete="name section-friend"
  />
  <label for="email-friend">E-mail</label>
  <input
    type="email"
    id="email-friend"
    name="email-friend"
    autocomplete="email section-friend"
  />
</fieldset>
```

## Wachtwoorden

Goede wachtwoorden zijn niet makkelijk te raden en zijn per website en dienst anders.
Tegenwoordig gebruiken we zoveel websites en diensten dat het onrealistisch is om te verwachten dat we voor elke
websites en dienst een moeilijk wachtwoord bedenken en onthouden.

Daarom wordt een wachtwoordbeheerder [aangeraden](https://www.ncsc.gov.uk/collection/passwords/password-manager-buyers-guide).
De meeste browsers hebben er een ingebouwd, maar nog handiger is een
aparte wachtwoordbeheerder zoals 1Password, Bitwarden of Keeper.

In combinatie met de juiste autofill attributen wordt het aanmelden, inloggen en het vernieuwen van een wachtwoord heel gemakkelijk.

Dit in tegenstelling tot slecht gemaakte sites waar je zelf een moeilijk wachtwoord mag bedenken die je in de volgende
stap weer moet invoeren. Dat is niet fijn als je een parkeerkaartje wil kopen of bij de kassa staat en je wachtwoord
blijkt verlopen of gereset.

Hoe doe je dat dan wel goed? Voor het huidige wachtwoord gebruik je de `autocomplete` waarde `current-password`
en waar je een nieuw wachtwoord kan invoeren gebruik je `new-password`.
De wachtwoordbeheerder bedenkt dan een sterk wachtwoord, onthoud deze en vult het de volgende keer in.

Voorbeeld om in te loggen:

```html
<label for="username">User name</label>
<input type="text" id="username" name="username" autocomplete="username" />
<label for="password">Password</label>
<input
  type="password"
  id="password"
  name="password"
  autocomplete="current-password"
/>
```

Voorbeeld om een nieuw wachtwoord op te geven:

```html
<label for="password">Password</label>
<input
  type="password"
  id="password"
  name="password"
  autocomplete="new-password"
/>
<label for="password-confirm">Confirm password</label>
<input
  type="password"
  id="password-confirm"
  name="password-confirm"
  autocomplete="new-password"
/>
```

## Wachtwoordregels

Mogelijk werk je met (oude) backendsystemen die niet overweg kunnen met de automatisch gegenereerde wachtwoorden
en vereisen ze bepaalde andere regels waaraan het wachtwoord moet voldoen.

Dit kan je gedeeltelijk oplossen met `passwordrules`. Je kan hiermee een minimale en maximale lengte
opgeven en welke tekens wel en niet in het wachtwoord mogen voorkomen.
Vooralsnog wordt dit alleen ondersteunt door Safari en de 1Password wachtwoordbeheerder.

[Password Rules Validation Tool](https://developer.apple.com/password-rules/)

Mozilla (van Firefox) zegt `passwordrules` [niet te ondersteunen](https://mozilla.github.io/standards-positions/#passwordrules-attribute).
In plaats daarvan stellen ze [validatie met het pattern-attribuut](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password#validation) voor.
Helaas werkt dat alleen als je een wachtwoord intypt en niet als je met een wachtwoordbeheerders een wachtwoord laat genereren
en zelfs niet als je Firefox zelf een wachtwoord laat genereren.

Ondertussen is in 2018 een [voorstel aan WHATWG gedaan](https://github.com/whatwg/html/issues/3518) om `passwordrules`
aan HTML toe te voegen, maar verder dan de voorstelfase is het niet gekomen.

## One time code

Je kent het vast wel: je wil je ergens aanmelden en je moet een code uit een SMSje overtypen in een formulier.
Je kan de code onthouden en intypen of je maakt gebruik van copy-paste, maar het is hoe dan ook omslachtig.
One time code (ook wel OTP, one time password) is hier een oplossing voor.
Gebruik hiervoor de `autocomplete` waarde `one-time-code` en voegt een extra regel toe aan de SMS en
de code wordt na bevestiging van de gebruiker automatisch ingevuld.

```html
<input
  type="text"
  inputmode="numeric"
  autocomplete="one-time-code"
  name="otp"
/>
```

Stuur dan een SMS met als laatste regel @<domain name> #<otp>

```text
Your verification code is 123456.

@example.com #123456
```

De gebruiker krijgt dan de mogelijkheid om eenvoudig deze code over te nemen in het formulier.

Lees [SMS OTP form best practices](https://web.dev/articles/sms-otp-form) voor meer informatie.

Zonder JavaScript werkt dit alleen nog in Safari.
Voor Android kan je gebruik maken van de [WebOTP JavaScript API](https://developer.mozilla.org/en-US/docs/Web/API/WebOTP_API).
Zie ook [Verifieer een telefoonnummer op de desktop met behulp van de WebOTP API](https://developer.chrome.com/docs/identity/cross-device-webotp?hl=nl).

## Testen

Autofill is erg lastig om geautomatiseerd te testen. Test een formulier dus altijd handmatig, in verschillende browsers,
op verschillende apparaten en met en zonder wachtwoordbeheerder. Test vooral of het inloggen en de wachtwoordreset goed werkt.

## Meer weten

Wil je precies weten hoe je `autocomplete` waardes kan gebruiken?
Kijk dan op [MDN: HTML attribute: autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#token_list_tokens)
of in the [WHATWG HTML standard: Autofill](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
