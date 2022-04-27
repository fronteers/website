exports.quote = (author, quote) => `
<figure class="simple-quote">
    <div class="simple-quote_decorative-start" aria-hidden="true">{</div>
        <div class="simple-quote-content">
            <blockquote>
                <p>${quote}</p>
            </blockquote> 
            <figcaption class="simple-quote-author">— ${author}</figcaption>
        </div>
    <div class="simple-quote_decorative-end" aria-hidden="true">}</div>
</figure>
`;
