const slugify = require('slugify');

/**
 * Transform a string into a slug
 * Uses slugify package
 *
 * @param {String} str - string to slugify
 */
function strToSlug(str) {
    const options = {
        replacement: '-',
        remove: /[&,+()$~%.'":*?<>{}]/g,
        lower: true,
    };

    return slugify(str, options);
}

/**
 * Get all unique key values from a collection
 *
 * @param {Array} collectionArray - collection to loop through
 * @param {String} key - key to get values from
 */
function getAllKeyValues(collectionArray, key) {
    return collectionArray
        .map((post) => {
            const values = post.data[key] ? post.data[key] : [];
            return values;
        })
        .flat(42)
        .map((post) => post.toLowerCase())
        .filter((post, index, self) => self.indexOf(post) === index)
        .sort(function (a, b) {
            return a.localeCompare(b, 'en', { sensitivity: 'base' });
        });
}

module.exports = {
    strToSlug,
    getAllKeyValues,
};
