// Used for hero on home, activities, blog

const { shield } = require("../shield/shield");

const heroShield = shield("triangular", "thunder", "lilac", "purple");

exports.pagehero = (heroStyle, herotitle, herotext, heroImage) => `
<section class="hero-wrapper outer-wrapper outer-wrapper--${heroStyle}">
  <div class="hero hero--${heroStyle}">
    ${heroStyle == 'aboutus' ? heroShield : ''}
    ${heroStyle == 'activities' ? heroImage : ''}
    ${heroStyle == 'blog' ? heroImage : ''}
 
    <div class="hero-graphic">
      <div class="hero-content">
        ${heroStyle == 'members-single' ? `<img src="${heroImage}" class="member-graphic">` : ''}
        ${herotitle != '' ? `<h2>${herotitle}</h2>` : ''}
        ${herotext != '' ? `<p>${herotext}</p>` : ''}
      </div>
    </div>
  </div>
</section>
`;
