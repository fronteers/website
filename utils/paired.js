const glob = require('fast-glob');

const shortcodes = {};

glob.sync('src/_components/paired/**/*.js').forEach((file) => {
    const exports = require(`../${file}`);
    Object.entries(exports).forEach(([name, shortcode]) => {
        shortcodes[name] = shortcode;
    });
});

module.exports = shortcodes;
