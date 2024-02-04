const slugify = require("slugify");
const lodash = require("lodash");

module.exports = { 
  /**
   * Transform a string into a slug
   * Uses slugify package
   *
   * @param {String} str - string to slugify
   */
  strToSlug(str) {
    const options = {
      replacement: "-",
      remove: /[&,+()$~%.'":*?<>{}]/g,
      lower: true,
    };

    return slugify(str, options);
  },

  /**
   * Get all unique key values from a collection
   *
   * @param {Array} collectionArray - collection to loop through
   * @param {String} key - key to get values from
   */
  getAllKeyValues(collectionArray, key) {
    // get all values from collection
    let allValues = collectionArray.map((post) => {
      let values = post.data[key] ? post.data[key] : [];
      return values;
    });

    // flatten values array
    allValues = lodash.flattenDeep(allValues);
    // to lowercase
    allValues = allValues.map((post) => post.toLowerCase());
    // remove duplicates
    allValues = [...new Set(allValues)];
    // order alphabetically
    allValues = allValues.sort(function (a, b) {
      return a.localeCompare(b, "en", { sensitivity: "base" });
    });
    // return
    return allValues;
  },
}
