---
title: Join us!
key: join-us
heroSlogan: We're excited you want to join and support us. We just need some info!
---
The contribution is {{ general-info.contribution }} (including 21% VAT). Members who sign up after June 30 will pay {{ general-info.contribution_discounted }}. You are only a member of the association after payment of the invoice. Volunteers receive a 50% discount.

The contribution for students at a higher educational institution is {{ general-info.students_contribution }} (including VAT). Students who register after June 30 pay {{ general-info.students_discounted }}. 

<div style="padding: var(--spacing-half) var(--spacing); background: #efefef;">

**Please note:** Naturally, we will treat your data confidentially. Only the board will see this data. Your name and possible employer will be published on the public membership list, if desired. We do temporarily store form submissions with Netlify. If this is something you object to, you can also <a href="mailto:?subject=Membership%20Application&body=Name:%20%0A[FULL%20NAME]%0A%0AAddress:%20%0A[PERSONAL%20ADDRESS]%0A%0AEmail%20Address:%20%0A[EMAIL]%0A%0APhone%20Number:%20%0A[PHONE%20NUMBER]%0A%0AEmployer:%20%0A[EMPLOYER]%0A%0AStudent:%20%0A[YES/NO]%0A%0AVolunteer%20Interest:%20%0A[INTEREST%20IN%20VOLUNTEERING]%0A%0AHow%20Did%20You%20Learn%20About%20Fronteers:%20%0A[INTRODUCTION]%0A%0AExpectations%20of%20the%20Organization:%20%0A[EXPECTATIONS]%0A%0AAdditional%20Comments%20or%20Questions:%20%0A[COMMENTS]%0A%0AConsent%20for%20Member%20List%20Publication:%20%0A[YES/NO]%0A%0A">
send us an e-mail</a>. If this e-maillink does not work you can also copy this [e-mail template](https://github.com/fronteers/website/blob/main/templates/lidmaatschap.txt) in an e-mail.

</div><br />

<form action="/en/join-us/success" method="post" id="formulier-lidmaatschap" netlify-honeypot="bot-field" netlify>
  <fieldset>
    <legend>Your details</legend>
    <p>
      <label for="naam">Name <em>first and last name, required</em></label>
      <input type="text" class="text" name="naam" id="naam" required>
    </p>
    <p>
      <label for="adres">Address <em>must be your personal address, required</em></label>
      <textarea name="adres" id="adres" cols="60" rows="5" class="small" required></textarea>
    </p>
    <p>
      <label for="email">Email Address <em>required</em></label>
      <input type="email" class="text email" name="email" id="email" required>
    </p>
    <p class="form-inline">
      <label for="telefoon">Phone Number</label>
      <input type="text" class="text" name="telefoon" id="telefoon" inputmode="tel">
    </p>
    <p>
      <label for="werkgever">Employer <em>we will not send the invoice to your employer; you are a personal member</em></label>
      <input type="text" class="text" name="werkgever" id="werkgever">
    </p>
  </fieldset>
  <fieldset>
    <legend><span>Student Membership</span></legend>
    <ul>
      <li>
        <label>
          <input type="checkbox" name="student" id="student"> Yes, I am a student at a higher education institution.<br />
          <em>To receive a student discount, you must make proof of enrollment from the higher education institution where you are studying available to the board, either as a scan via <a href="mailto:ledenadministratie@fronteers.nl">email</a>, or by post to P.O. Box 10458, 1001 EL Amsterdam</em>
        </label>
      </li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>Other</legend>
    <p>
      <label for="vrijwilligerswerk">Would you like to volunteer as a <a href="/vereniging/vrijwilligers">volunteer</a>? If yes, in what area?</label>
      <textarea name="vrijwilligerswerk" id="vrijwilligerswerk" cols="60" rows="5" class="small"></textarea>
    </p>
    <p>
      <label for="via">How did you hear about Fronteers?</label>
      <textarea name="via" id="via" cols="60" rows="5" class="small"></textarea>
    </p>
    <p>
      <label for="verwachtingen">Expectations from the association</label>
      <textarea name="verwachtingen" id="verwachtingen" cols="60" rows="5" class="small"></textarea>
    </p>
    <p>
      <label for="opmerkingen">Other comments or questions</label>
      <textarea name="opmerkingen" id="opmerkingen" cols="60" rows="5" class="small"></textarea>
    </p>
  </fieldset>
  <fieldset>
    <legend>Finalization</legend>
    <ul>
      <li>
        <label>
          <input type="checkbox" name="ledenlijst" id="ledenlijst"> I agree that my name will be published in the <a href="/leden">members list</a>
        </label>
      </li>
    </ul>
    <p id="let-op">
      <em>Note: you will receive a manual welcome email within a few days to a week, which you must respond to before you are officially a member. Add @fronteers.nl to your whitelist soon.</em>
    </p>
    <p style="display: none;">
        <label>
        Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
    </p>
    <p class="submit">
      <input type="hidden" name="taal" value="Nederlands">
      <button class="button-curly-braces">Submit</button>
    </p>
  </fieldset>
</form>
