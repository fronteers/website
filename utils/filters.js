const { strToSlug } = require('./helpers');
const { DateTime } = require("luxon");

const currentDate = DateTime.now();


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

  count(collection) {
    return collection.length;
  },

  upcomingEvents(collection) {
    let eventDate;

    return collection.filter((event) => {
      if(event.data && event.data.eventdate) {
        eventDate = DateTime.fromJSDate(event.data.eventdate);
        return eventDate >= currentDate;
      } else {
        return false;
      }
    });
  },
  
  pastEvents(collection) {
    let eventDate;

    return collection.filter((event) => {
      if(event.data && event.data.eventdate) {
        eventDate = DateTime.fromJSDate(event.data.eventdate);
        return eventDate < currentDate;
      } else {
        return false;
      }

    });
  },

};