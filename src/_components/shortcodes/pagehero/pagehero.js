// Used for hero on home, activities, blog

const { generateShield } = require("../shield/shield");

exports.pagehero = (
  heroStyle,
  herotitle,
  herotext,
  heroImage,
  shieldText = heroStyle
) => `
<section class="hero-wrapper outer-wrapper outer-wrapper--${heroStyle}">
  <div class="hero hero--${heroStyle}">
    ${heroStyle == "aboutus" ? generateShield(shieldText) : ""}
    ${heroStyle == "activities" ? "" : ""}
    ${heroStyle == "blog" ? heroImage : ""} 
    <div class="hero-graphic">
      <div class="hero-content">
        ${
          heroStyle == "members-single"
            ? `<img src="${heroImage}" class="member-graphic">`
            : ""
        }
        ${herotitle != "" ? `<h2>${herotitle}</h2>` : ""}
        ${herotext != "" || herotext != " " ? `<p>${herotext}</p>` : ""}
      </div>
    </div>
  </div>
</section>
`;
