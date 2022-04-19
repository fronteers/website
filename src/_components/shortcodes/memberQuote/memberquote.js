exports.memberquote = (member, jobtitle, avatarsrc, memberquote) => `
<section class="inner-wrapper member-quote">
  <div class="member-quote-wrapper curly-braces-open curly-braces-close">
    <div class="member-quote-image-container">
      <img class="member-quote-image" src="${avatarsrc}" alt="Member Avatar" />
      <div class="member-quote-flag"></div>
    </div>
    <figure class="member-quote-text-container">
      <blockquote class="member-quote-quote fancy">
       ${memberquote}
      </blockquote>
      <figcaption class="member-quote-names-container">
        <h4 class="member-quote-name thin">${member}, ${jobtitle}</h4>
      </figcaption>
    </figure>
  </div>
</section>
`;
