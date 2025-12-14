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

    const filtered = collection.filter((event) => {
      if(!event || !event.data) {
        return false;
      }
      
      if(event.data.eventdate) {
        try {
          // Handle both Date objects and date strings
          if(event.data.eventdate instanceof Date) {
            eventDate = DateTime.fromJSDate(event.data.eventdate);
          } else if (typeof event.data.eventdate === 'string') {
            // Parse string date (YYYY-MM-DD format)
            eventDate = DateTime.fromISO(event.data.eventdate);
          } else {
            // Try to convert to string and parse
            eventDate = DateTime.fromISO(String(event.data.eventdate));
          }
          
          // Check if date is valid and in the future
          if (eventDate.isValid) {
            return eventDate >= currentDate;
          } else {
            console.warn(`[upcomingEvents] Invalid eventdate for "${event.data.title || 'unknown'}": ${event.data.eventdate}`);
            return false;
          }
        } catch (error) {
          console.warn(`[upcomingEvents] Error parsing eventdate for "${event.data.title || 'unknown'}":`, error);
          return false;
        }
      } else {
        return false;
      }
    });

    // Sort by eventdate in ascending order (earliest first)
    return filtered.sort((a, b) => {
      let dateA, dateB;
      
      if(a.data.eventdate instanceof Date) {
        dateA = DateTime.fromJSDate(a.data.eventdate);
      } else {
        dateA = DateTime.fromISO(a.data.eventdate);
      }
      
      if(b.data.eventdate instanceof Date) {
        dateB = DateTime.fromJSDate(b.data.eventdate);
      } else {
        dateB = DateTime.fromISO(b.data.eventdate);
      }
      
      return dateA - dateB;
    });
  },
  
  pastEvents(collection) {
    let eventDate;

    return collection.filter((event) => {
      if(event.data && event.data.eventdate) {
        // Handle both Date objects and date strings
        if(event.data.eventdate instanceof Date) {
          eventDate = DateTime.fromJSDate(event.data.eventdate);
        } else {
          // Parse string date (YYYY-MM-DD format)
          eventDate = DateTime.fromISO(event.data.eventdate);
        }
        return eventDate < currentDate;
      } else {
        return false;
      }

    });
  },

};
