const { shield } = require("../shield/shield");

const heroShield = shield("triangular", "thunder", "lilac", "purple");

exports.pagehero = (heroStyle, herotitle, herotext, heroImage) => `
<section class="outer-wrapper outer-wrapper--${heroStyle}">
  <div class="hero hero--${heroStyle}">
    ${heroStyle == 'aboutus' ? heroShield : ''}
    ${heroImage ? heroImage : ''}
    <div class="hero-graphic">
      <div class="hero-content">
        <h2> ${herotitle}</h2>
        <p>${herotext}</p>
      </div>
    </div>
  </div>
</section>
<br />
`;
