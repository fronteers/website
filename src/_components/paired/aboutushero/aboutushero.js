const { shield, generateShield } = require("../../shortcodes/shield/shield");

const DEFAULTS_FOR_SHIELD = ["triangular", "thunder", "lilac", "purple"];
exports.aboutushero = (text, title, shieldText = null) => {
  const heroShield =
    shieldText == null
      ? shield(...DEFAULTS_FOR_SHIELD)
      : generateShield(
          shieldText,
          {},
          {
            color: ["red"],
          }
        );

  return `<section class="hero-wrapper outer-wrapper" data-shield="${shieldText}">
<div class="about-us-hero">
${heroShield}
<div class="about-us-hero-graphic">
<div class="about-us-hero-content">
<h2> ${title ?? ""}</h2>
<p>${text ?? ""}</p>
</div>
</div>
</div>
</section>`;
};
