---
title: Word lid van Fronteers
key: join-us
heroSlogan: Wat leuk dat je lid wil worden. We hebben alleen nog wat gegevens van je nodig!
---
Iedereen mag lid worden van Fronteers. De contributie bedraagt {{ general-info.contribution }} (inclusief btw). Leden die zich na 30 juni opgeven, betalen hiervan de helft, {{ general-info.contribution_discounted }}. Een lidmaatschap van Fronteers geldt voor een kalenderjaar.

Voor studenten worden deze bedragen gehalveerd, tot {{ general-info.students_contribution }} en {{ general-info.students_discounted }}.

Vanzelfsprekend gaan we vertrouwelijk met je gegevens om. Alleen het bestuur en de ledenadministratie (aangewezen door het bestuur) krijgt deze gegevens te zien. Je naam en eventuele werkgever worden, indien gewenst, gepubliceerd op de openbare ledenlijst.


<form action="/nl/word-lid/gelukt" method="post" id="formulier-lidmaatschap" netlify-honeypot="bot-field"  netlify>
  <fieldset>
    <legend>Jouw gegevens</legend>
    <p>
      <label for="naam">Naam <em>voor- en achternaam, vereist</em></label>
      <input type="text" class="text" name="naam" id="naam" required>
    </p>
    <p>
      <label for="adres">Adres <em>dient je persoonlijke adres te zijn, vereist</em></label>
      <textarea name="adres" id="adres" cols="60" rows="5" class="small" required></textarea>
    </p>
    <p>
      <label for="email">E-mailadres <em>vereist</em></label>
      <input type="email" class="text email" name="email" id="email" required>
    </p>
    <p class="form-inline">
      <label for="telefoon">Telefoonnummer</label>
      <input type="text" class="text" name="telefoon" id="telefoon" inputmode="tel">
    </p>
    <p>
      <label for="werkgever">Werkgever <em>we sturen de factuur niet naar je werkgever; je bent persoonlijk lid</em></label>
      <input type="text" class="text" name="werkgever" id="werkgever">
    </p>
  </fieldset>
  <fieldset>
    <legend><span>Studentenlidmaatschap</span></legend>
    <ul>
      <li><label><input type="checkbox" name="student" id="student"> Ja, ik ben student aan een hogere onderwijsinstelling <em>Om studentenkorting te ontvangen, dien je een bewijs van inschrijving van de hogere onderwijsinstelling waar je studeert aan het bestuur beschikbaar te maken <a href="mailto:ledenadministratie@fronteers.nl">als scan per e-mail</a>.</em></label></li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>Overig</legend>
    <p>
      <label for="vrijwilligerswerk">Zou jij je willen inzetten als <a href="/nl/vereniging/commissies">vrijwilliger</a>? Zo ja, op welk gebied?</label>
      <textarea name="vrijwilligerswerk" id="vrijwilligerswerk" cols="60" rows="5" class="small"></textarea>
    </p>
    <p>
      <label for="via">Waar ken je Fronteers van?</label>
      <textarea name="via" id="via" cols="60" rows="5" class="small"></textarea>
    </p>
    <p>
      <label for="verwachtingen">Verwachtingen van de vereniging</label>
      <textarea name="verwachtingen" id="verwachtingen" cols="60" rows="5" class="small"></textarea>
    </p>
    <p>
      <label for="opmerkingen">Overige opmerkingen of vragen</label>
      <textarea name="opmerkingen" id="opmerkingen" cols="60" rows="5" class="small"></textarea>
    </p>
  </fieldset>
  <fieldset>
    <legend>Afronden</legend>
    <ul>
      <li><label><input type="checkbox" name="ledenlijst" id="ledenlijst"> Ik ga er mee akkoord dat mijn naam gepubliceerd wordt in de <a href="/leden">ledenlijst</a></label></li>
    </ul>
    <p id="let-op"><em>Let op: je ontvangt binnen een paar dagen tot een week een handmatige welkomstmail, waar je nog op dient te reageren voordat je echt lid bent. Voeg @fronteers.nl dus straks even toe aan je white-list.</em></p>
    <p style="display: none;">
        <label>
        Vul dit veld niet in als je een mens bent: <input name="bot-field" />
        </label>
    </p>
    <p class="submit">
      <input type="hidden" name="taal" value="Nederlands">
      <button class="button-curly-braces">Verstuur</button>
    </p>
  </fieldset>
</form>
