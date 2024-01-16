const { JSDOM } = require('jsdom');
const transforms = {};

transforms['convert_markdown_headers'] = function (content, outputPath) {
    if (!outputPath || outputPath.endsWith('kitchensink-html.html') || !outputPath.endsWith('.html')) {
        return content;
    }

    const dom = new JSDOM(content);

    const swapHeading = (domHeading, targetHeading) => {
        const targetDomHeading = dom.window.document.createElement(targetHeading);
        targetDomHeading.innerHTML = new String(domHeading.innerHTML);
        domHeading.replaceWith(targetDomHeading);
    }

    dom.window.document.querySelectorAll('.page-content h5').forEach(h5 => swapHeading(h5, 'h6'));
    dom.window.document.querySelectorAll('.page-content h4').forEach(h4 => swapHeading(h4, 'h6'));
    dom.window.document.querySelectorAll('.page-content h3').forEach(h3 => swapHeading(h3, 'h5'));
    dom.window.document.querySelectorAll(`[data-layout="blog-single"] .page-content h2,
                                          .page-content[data-layout="page"] h2, 
                                          .page-content[data-layout="kitchensink"] h2:not(h2:first-child), 
                                          .page-content[data-layout="jobs-single"] h2, 
                                          .page-content[data-layout="activity-single"] h2:not(h2:first-child)`)
                       .forEach(h2 => swapHeading(h2, 'h4'));
    dom.window.document.querySelectorAll('.page-content h1').forEach(h1 => swapHeading(h1, 'h3'));

    return dom.serialize();
};

transforms['add_table_scope'] = function (content, outputPath) {
    if (!outputPath || !outputPath.endsWith('.html')) {
        return content;
    }

    const dom = new JSDOM(content);
  
    dom.window.document.querySelectorAll('th').forEach(
        (th) => {
            th.setAttribute('scope', 'col');
        }
    );

    return dom.serialize();
};

module.exports = transforms;