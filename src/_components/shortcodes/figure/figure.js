exports.figure = (source, altText, caption) => `
<figure class="figure">
    <img src="${source}" alt="${altText}"/>
    <figcaption class="figure__caption">${caption}</figcaption>
</figure>
`;
