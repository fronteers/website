const { shield } = require("../shield/shield");

const heroShield = shield("triangular", "thunder", "lilac", "purple");

exports.aboutushero = (herotitle, herotext) => `
<section class="outer-wrapper">
  <div class="about-us-hero">
    ${heroShield}
    <div class="about-us-hero-graphic">
      <div class="about-us-hero-content">
        <h2> ${herotitle}</h2>
        <p>${herotext}</p>
      </div>
    </div>
  </div>
</section>
`;
