const { JSDOM } = require('jsdom');
const transforms = {};

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