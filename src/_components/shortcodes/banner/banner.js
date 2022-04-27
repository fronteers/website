const svgButton = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
<defs>
  <clipPath id="clip-Button_play">
    <rect width="72" height="72"/>
  </clipPath>
</defs>
<g id="Button_play" clip-path="url(#clip-Button_play)">
  <rect width="72" height="72" fill="transparent"/>
  <g id="Group_503" data-name="Group 503" transform="translate(-0.204)">
    <circle id="Ellipse_4" data-name="Ellipse 4" cx="36" cy="36" r="36" transform="translate(0.204)" fill="#fe796a"/>
    <path id="Path_120" data-name="Path 120" d="M35.213,0V13.347L17.606,25.291,0,13.347V0Z" transform="translate(26.874 53.282) rotate(-90)"/>
  </g>
</g>
</svg>
`;
const style = `
<style> 
.banner_component {
  display: flex;
  place-content: center;
  flex-wrap: wrap;
  min-height: 250px;
  inline-size: 70%;
}
.content-wrapper .banner_component {
  margin-block-end: var(--spacing);
  display: inline-flex;
}

@media all and (min-width: 46.875em) {
    .content-wrapper .banner_component {
        inline-size: 110%;
        transform: translateX(-5%);
    }
}

.banner_component::after {
  content: " ";
  inline-size: 100%;
  block-size: 100%;
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
}

.banner_component svg {
  z-index: 2;
}

.banner_component:hover svg circle,
.banner_component:focus svg circle {
  fill: var(--purple);
}

.banner_component:hover svg path,
.banner_component:focus svg path {
  fill: white;
}

.banner_component .visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  block-size: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  inline-size: 1px;
}
@media all and (max-width: 46.874em) {
  .banner_component {
    -webkit-clip-path: none;
    clip-path: none;
    padding: var(--spacing) 6%;
    min-height: 30vh;
    width: 100%;
  }
}
</style>`;

exports.banner = (
  type = "parentheses",
  title,
  link,
  image = "/assets/images/banner-conference.jpg",
  target = "_blank",
  titleLevel = "h3",
  hint = "go to vimeo"
) =>
  `${
    title
      ? `
<${titleLevel} class="h"> 
    <a href="${link}" target="${target}">${title.toUpperCase()}</a>
</${titleLevel}>`
      : ""
  }

<a class="${type === "curly" ? "curly-braces-bg" : ""}${
    type === "greater" ? "greater-than-bg" : ""
  }${type === "parentheses" ? "parentheses-bg" : ""}${
    type === "none" ? "none-bg" : ""
  } banner_component" style="background: url(${image})" href="${link}" target="${target}">
    <span class="visually-hidden">${hint}</span>
    ${svgButton}
</a>

${style}`;
