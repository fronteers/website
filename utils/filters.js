const { strToSlug } = require('./helpers');

module.exports = {
  getLocale(collection, locale) {
    return collection.filter((post) => Boolean(post.data.locale == locale));
  },

  displayDate(date, locale) {
      return new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(date);
  },

  slugify(string) {
    return strToSlug(string);
  },
};