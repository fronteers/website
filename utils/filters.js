const { strToSlug } = require('./helpers');

module.exports = {
    obfuscate: function (str) {
        const chars = [];
        for (var i = str.length - 1; i >= 0; i--) {
            chars.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
        }
        return chars.join('');
    },

    filterTagList(tags) {
        return (tags || []).filter(
            (tag) => ['all', 'nav', 'post', 'posts'].indexOf(tag) === -1
        );
    },

    getLocale(collection, locale) {
        return collection.filter((post) => Boolean(post.data.locale == locale));
    },

    slugify(string) {
        return strToSlug(string);
    },

    displayDate(date, locale) {
        return new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(
            date
        );
    },
};
