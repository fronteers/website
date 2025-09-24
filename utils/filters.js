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

  readablePostDate(dateObj) {
      return DateTime.fromJSDate(dateObj, {
          zone: "Europe/Amsterdam",
      }).setLocale('en').toLocaleString(DateTime.DATE_FULL);
  },

  postDate(dateObj) {
      return DateTime.fromJSDate(dateObj, {
          zone: "Europe/Amsterdam",
      }).setLocale('en').toISODate();
  },

  splitlines(input) {
    const parts = input.split(' ');
    const lines = parts.reduce(function (prev, current) {
      if (!prev.length) {
        return [current];
      }

      let lastOne = prev[prev.length - 1];

      if (lastOne.length + current.length > 23) {
        return [...prev, current];
      }

      prev[prev.length - 1] = lastOne + ' ' + current;
      return prev;
    }, []);

    return lines;
  },

  stringify(data) {
    return JSON.stringify(data, null, "\t");
  },

  customSlug(value) {
    if (!value) return "fallback-title"; // Fallback for empty titles
    return strToSlug(value).replace(/\s+/g, '-'); // Replace spaces with dashes
  },

  localizedDate(dateObj, locale = "en") {
    return DateTime.fromJSDate(dateObj)
      .setLocale(locale)
      .toFormat("d LLLL yyyy");
  }
};
