exports.quote = (quote, author) => `
<figure class="simple-quote">
    <div class="simple-quote_decorative-start" aria-hidden="true">{</div>
        <div class="simple-quote-content">
            <blockquote>
                ${quote}
            </blockquote>
            <figcaption class="simple-quote-author">— ${author}</figcaption>
        </div>
    <div class="simple-quote_decorative-end" aria-hidden="true">}</div>
</figure>
`;
