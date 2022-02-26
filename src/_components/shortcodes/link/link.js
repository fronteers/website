exports.link = (href, linkText, variant = "parentheses") =>
  `<a href="${href}" class="link link-${variant}">${linkText}</a>`;
