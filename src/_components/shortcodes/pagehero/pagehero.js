// Used for hero on home, activities, blog

const { shield } = require("../shield/shield");

const heroShield = shield("triangular", "thunder", "lilac", "purple");

exports.pagehero = (heroStyle, herotitle, herotext, heroImage) => `
<section class="outer-wrapper outer-wrapper--${heroStyle}">
  <div class="hero hero--${heroStyle}">
    ${heroStyle == 'aboutus' ? heroShield : ''}
    ${heroStyle == 'activities' || 'blog' ? heroImage : ''}

    <div class="hero-graphic">
      <div class="hero-content">
        ${heroStyle != '' ? `<h2>${herotitle}</h2>` : ''}
        ${heroStyle != '' ? `<p>${herotext}</p>` : ''}
      </div>
    </div>
  </div>
</section>
<br />
`;
