exports.quote = (author, quote) => `
<figure>
    <blockquote>
        <p>${quote}</p>
    </blockquote>
    <figcaption>— ${author}</figcaption>
</figure>
`;
