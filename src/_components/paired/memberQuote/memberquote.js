const { generateShield } = require("../../shortcodes/shield/shield");

/**
 * Render a quote with a member image
 *
 * @param {string} member The name of the member
 * @param {string | undefined} jobTitle The job title of the member
 * @param {string} avatarSrc The image of the member
 * @param {string} memberquote The quote
 * @param {string | undefined} shieldValue
 * @returns
 */
exports.memberquote = (
  memberquote,
  member,
  jobTitle,
  avatarSrc,
  shieldValue
) => `
<figure class="inner-wrapper member-quote">
  <div class="member-quote-wrapper curly-braces-open curly-braces-close">
    <div class="member-quote-image-container" aria-hidden="true">
      <img class="member-quote-image" src="${avatarSrc}"/>
      <div class="member-quote-flag">${generateShield(
        shieldValue ?? member
      )}</div>
    </div>
    <div class="member-quote-text-container">
      <blockquote class="member-quote-quote fancy">
       ${memberquote}
      </blockquote>
      <figcaption class="member-quote-names-container">
        <span class="member-quote-name thin">${[member, jobTitle]
          .filter(Boolean)
          .join(", ")}</span>
      </figcaption>
    </div>
  </div>
</figure>
`;
