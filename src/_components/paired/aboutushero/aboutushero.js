const { shield } = require("../../shortcodes/shield/shield");

const DEFAULTS_FOR_SHIELD = ["triangular", "thunder", "lilac", "purple"];
exports.aboutushero = (text, title, shieldOptions = []) => {
  const [style, shape, primary, secondary] = shieldOptions.concat(
    DEFAULTS_FOR_SHIELD.slice(shieldOptions.length, DEFAULTS_FOR_SHIELD.length)
  );
  const heroShield = shield(style, shape, primary, secondary);

    return `<section class="hero-wrapper outer-wrapper">
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
