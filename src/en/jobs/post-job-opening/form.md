---
title: submit vacancy
---
<form action="/en/jobs/post-job-opening/success" method="post" id="formulier-vacatures" netlify>
<fieldset>
<legend>I want to post a vacancy</legend>
<p class="form-element">
<label for="form-1-input-0" class="form-label">Contact person</label>
<input type="text" name="Contact person" id="form-1-input-0" class="text">
</p>
<p class="form-element">
<label for="form-1-input-1" class="form-label">Contact person's email address</label>
<input type="email" name="Contact person's email address" id="form-1-input-1" class="text">
</p>
<p class="form-element">
<label for="form-1-input-2" class="form-label">Phone number</label>
<input type="text" name="Phone number" id="form-1-input-2" class="text">
</p>
<p class="form-element">
<label for="form-1-input-3" class="form-label">Company name</label>
<input type="text" name="Company name" id="form-1-input-3" class="text">
</p>
<p class="form-element">
<label for="form-1-input-4" class="form-label">Company Twitter account <em>optional</em></label>
<input type="text" name="Company Twitter account" id="form-1-input-4" class="text">
</p>
<p class="form-element">
<label for="form-1-input-5" class="form-label">Billing address</label>
<textarea name="Billing address" id="form-1-input-5" cols="50" rows="5" class="small"></textarea>
</p>
<p class="form-element">
<label for="form-1-input-6" class="form-label">Email address for the invoice</label>
<input type="text" name="Email address for the invoice" id="form-1-input-6" class="text">
</p>
<p class="form-element">
<label for="form-1-input-7" class="form-label">Your reference <em>optional, for example, a purchase number</em></label>
<input type="text" name="Your reference" id="form-1-input-7" class="text">
</p>
<fieldset>
<legend><span>Employment or freelance?</span></legend>
<ul>
    <li>
    <label for="form-1-input-8">
    <input type="radio" name="Employment_or_freelance" value="Employment" class="radio" id="form-1-input-8">
    Employment
    </label>
    </li>
    <li>
    <label for="form-1-input-9">
    <input type="radio" name="Employment_or_freelance" value="Freelance" class="radio" id="form-1-input-9">
    Freelance
    </label>
    </li>
</ul>
</fieldset>
<fieldset>
<legend><span>Agree with the above terms?</span></legend>
<ul>
    <li>
    <label for="form-1-input-10">
    <input type="radio" name="Agree_with_above_terms" value="Yes" class="radio" id="form-1-input-10">
    Yes
    </label>
    </li>
    <li>
    <label for="form-1-input-11">
    <input type="radio" name="Agree_with_above_terms" value="No" class="radio" id="form-1-input-11">
    No
    </label>
    </li>
</ul>
</fieldset>
<p class="form-element">
<label for="form-1-input-12" class="form-label">Any comments or questions</label>
<textarea name="Any comments or questions" id="form-1-input-12" cols="50" rows="5" class="small"></textarea>
</p>
<p class="form-element" style="display: none;">
<label for="form-1-spam-check" class="form-label">Is this spam? <em>Fill in no</em></label>
<input type="text" name="spam-check" id="form-1-spam-check" class="form-input text spam-check" data-decorator="prevent-spam">
</p>
<p class="submit">
    <button class="button-curly-braces">Send</button>
</p>
</fieldset>
</form>
