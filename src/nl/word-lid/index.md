---
title: Word lid van Fronteers
key: join-us
heroSlogan: Wat leuk dat je lid wil worden. We hebben alleen nog wat gegevens van je nodig!
---
Iedereen mag lid worden van Fronteers. De contributie bedraagt {{ general-info.contribution }} (inclusief btw). Leden die zich na 30 juni opgeven, betalen hiervan de helft, {{ general-info.contribution_discounted }}. Een lidmaatschap van Fronteers geldt voor een kalenderjaar.

Voor studenten worden deze bedragen gehalveerd, tot {{ general-info.students_contribution }} en {{ general-info.students_discounted }}.

<div style="padding: var(--spacing-half) var(--spacing); background: #efefef;">

**Let op:** Vanzelfsprekend gaan we vertrouwelijk met je gegevens om. Alleen het bestuur krijgt de ingevulde gegevens te zien. Je naam en eventuele werkgever worden, indien gewenst, gepubliceerd op de openbare ledenlijst. De data wordt wel tijdelijk opgeslagen via Netlify. Als je daar bezwaar tegen hebt, kun je ook lid worden door het [sturen van een e-mail](mailto:penningmeester@fronteers.nl?subject=Lidmaatschap%20Aanvraag&body=Naam:%20%0A[VOOR-EN%20ACHTERNAAM]%0A%0AAdres:%20%0A[ADRES]%0A%0AE-mailadres:%20%0A[EMAILADRES]%0A%0ATelefoonnummer:%20%0A[TELEFOONNUMMER]%0A%0AWerkgever:%20%0A[WERKGEVER]%0A%0AStudent:%20%0A[JA/NEE]%0A%0AVrijwilligerswerk:%20%0A[INTERESSE%20IN%20VRIJWILLIGERSWERK]%0A%0AHoe%20ken%20je%20Fronteers:%20%0A[KENNISMAKING]%0A%0AWelke%20verwachtingen%20heb%20je%20van%20de%20vereniging:%20%0A[VERWACHTINGEN]%0A%0AOverige%20opmerkingen%20of%20vragen:%20%0A[OPMERKINGEN]%0A%0AAkkoord%20met%20ledenlijst:%20%0A[JA/NEE]%0A%0A). Als deze e-maillink niet werkt, is hier een [e-mail sjabloon](https://github.com/fronteers/website/blob/main/templates/lidmaatschap.txt) dat je kunt kopieren in een e-mail.
 
</div><br />

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
      <li><label><input type="checkbox" name="ledenlijst" id="ledenlijst"> Ik ga er mee akkoord dat mijn naam gepubliceerd wordt in de <a href="/nl/leden">ledenlijst</a></label></li>
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
      <div style="text-align: center">
        <a href="#" id="emailButton" hidden>
            of verstuur direct via e-mail
        </a>
      </div>
    </p>
  </fieldset>
</form>

<script>
    document.getElementById('emailButton').hidden = false;

    document.getElementById('emailButton').addEventListener('click', function () {
    const form = document.getElementById('formulier-lidmaatschap');
    const inputs = form.querySelectorAll('input, textarea');
    let bodyContent = "";
    let abortSend = false;  // Flag to determine if the form should be aborted

    inputs.forEach((input) => {
        const label = form.querySelector(`label[for="${input.id}"]`);
        const labelText = label ? getTextWithoutChildTags(label) : input.name;
        let value = "Niet ingevuld";

        const isBotField = input.name === 'bot-field';  // Check by the name attribute
        const inputLeftEmpty = input.value === '';

        // If it's the bot field and it is filled, we abort the form submission
        if (isBotField && !inputLeftEmpty) {
        abortSend = true;  // Set flag to true if bot field is filled
        }

        // Process other fields that are not the bot field
        if (!isBotField) {
        if (!inputLeftEmpty) {
            value = encodeURIComponent(input.value);
        }
        bodyContent += `${labelText}:\n ${value}\n\n`;
        }
    });

    // If abortSend is true, do not proceed with sending the email
    if (abortSend) {
        alert("Invalid submission detected. Please try again.");
        return;  // Stop further execution and prevent the mailto link from opening
    }

    // Construct the mailto link if everything is okay
    const subject = encodeURIComponent("Iemand wil graag lid worden");
    const mailtoLink = `mailto:penningmeester@fronteers.nl?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    // Open the mailto link
    window.location.href = mailtoLink;
    });

    // Function to get text content excluding any child HTML tags (like <em>)
    function getTextWithoutChildTags(element) {
    let text = '';
    element.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent.trim() + ' ';
        }
    });
    return text.trim();
    }
</script>


