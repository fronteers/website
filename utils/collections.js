const { strToSlug, getAllKeyValues } = require('./helpers');

const now = new Date();

function published_posts(locale) {
  return (collection) => collection
    .getFilteredByTag("posts")
    .filter((post) => Boolean(!post.data.draft))
    .filter((post) => Boolean(!post.data.excludeFromCollection))
    .filter((post) => Boolean(post.date <= now))
    .filter((post) => Boolean(!post.data.parent))
    .filter((post) => Boolean(post.data.locale == locale))
    .reverse();
};

function published_activities(locale) {
  return (collection) => collection
    .getFilteredByTag("activities")
    .filter((post) => Boolean(!post.data.draft))
    .filter((post) => Boolean(!post.data.excludeFromCollection))
    .filter((post) => Boolean(post.date <= now))
    .filter((post) => Boolean(!post.data.parent))
    .filter((post) => Boolean(post.data.locale == locale))
    .sort((a, b) => b.data.eventdate - a.data.eventdate);
};

function published_jobs(locale) {
  return (collection) => collection
    .getFilteredByTag("jobs")
    .filter((post) => Boolean(!post.data.draft))
    .filter((post) => Boolean(!post.data.excludeFromCollection))
    .filter((post) => Boolean(post.date <= now))
    .filter((post) => Boolean(!post.data.parent))
    .filter((post) => Boolean(post.data.locale == locale))
    .reverse();
};

function freelancers(locale) {
  return (collection) => collection
    .getFilteredByTag("members")
    .filter((post) => Boolean(post.date <= now))
    .filter((post) => Boolean(!post.data.excludeFromCollection))
    .filter((post) => Boolean(post.data.freelancer))
    .filter((post) => Boolean(post.data.locale == locale))
    .filter((post) => Boolean(!post.data.draft));
};

function published_members(locale) {
  return collection => collection
    .getFilteredByTag("members")
    .filter((post) => Boolean(post.date <= now))
    .filter((post) => Boolean(!post.data.draft))
    .filter((post) => Boolean(!post.data.excludeFromCollection))
    .filter((post) => Boolean(post.data.locale == "en"));
};

function activity_categories(locale) {
  return collection => {
    const allCategories = getAllKeyValues(
        collection
          .getFilteredByTag("activities")
          .filter((post) => Boolean(!post.data.excludeFromCollection))
          .filter((post) => Boolean(post.data.locale === locale))
          .filter((post) => Boolean(!post.data.draft)),
        "categories"
    )
    
    return allCategories.map((category) => ({
      title: category,
      slug: strToSlug(category),
    }))
  }
};

function blog_categories(locale) {
  return collection => {
    const allCategories = getAllKeyValues(
      collection
        .getFilteredByTag("posts")
        .filter((post) => Boolean(post.date <= now))
        .filter((post) => Boolean(!post.data.excludeFromCollection))
        .filter((post) => Boolean(post.data.locale === locale))
        .filter((post) => Boolean(!post.data.draft)),
      "categories"
    )
  
    return allCategories.map((category) => ({
      title: category,
      slug: strToSlug(category),
    }))
  }
};

function job_categories(locale) {
  return collection => {
    const allCategories = getAllKeyValues(
      collection.getFilteredByTag("jobs")
        .filter((post) => Boolean(post.data.locale === locale)),
      "categories"
    )
  
    return allCategories.map((category) => ({
      title: category,
      slug: strToSlug(category),
    }))
  }
};

function categorised_activities(locale) {
  const categorisedActivities = {}

  return (collection) => {
    //get published activities
    const allActivities = collection
      .getFilteredByTag("activities")
      .filter((post) => Boolean(!post.data.draft))
      .filter((post) => Boolean(!post.data.excludeFromCollection))
      .filter((post) => Boolean(post.date <= now))
      .filter((post) => Boolean(!post.data.parent))
      .filter((post) => Boolean(post.data.locale == locale))
      .sort((a, b) => b.data.eventdate - a.data.eventdate);

    //loop through published activities and create collections per category
    allActivities.forEach(item => {
      let categorySet = item.data.categories;

      if(categorySet) {
        
        for (const category of categorySet) {
          // Ignore the ones without a category
          if (typeof category !== "string")
          return
  
          const slug = strToSlug(category)
  
          if (Array.isArray(categorisedActivities[slug])) {   
            //  category array exists? Just push
            categorisedActivities[slug].push(item)
          } else {
            //  Otherwise create it and make the `item` the first item.
            categorisedActivities[slug] = [item]
          }
          
        }
      }
      
    })

    return categorisedActivities;
  } 
}

module.exports = {
  published_posts_en: published_posts("en"),
  published_posts_nl: published_posts("nl"),
  published_activities_en: published_activities("en"),
  published_activities_nl: published_activities("nl"),
  published_jobs_en: published_jobs("en"),
  published_jobs_nl: published_jobs("nl"),
  freelancers_en: freelancers("en"),
  freelancers_nl: freelancers("nl"),
  published_members_en: published_members("en"),
  published_members_nl: published_members("nl"),
  activity_categories_en: activity_categories("en"),
  activity_categories_nl: activity_categories("nl"),
  blog_categories_en: blog_categories("en"),
  blog_categories_nl: blog_categories("nl"),
  jobcategories_en: job_categories("en"),
  job_categories_nl: job_categories("nl"),
  categorised_activities_en: categorised_activities("en"),
  categorised_activities_nl: categorised_activities("nl"),

  canonical(collection) {
    return collection
      .getFilteredByTag("pages")
      .filter((post) => Boolean(post.data.key))
      .filter((post) => Boolean(post.date <= now))
      .filter((post) => Boolean(post.data.locale == "nl"));
  },

  published_posts(collection) {
    return collection
      .getFilteredByTag("posts")
      .filter((post) => Boolean(!post.data.draft))
      .filter((post) => Boolean(!post.data.excludeFromCollection))
      .filter((post) => Boolean(post.date <= now))
      .filter((post) => Boolean(!post.data.parent))
      .reverse();
  },

  published_activities(collection) {
    return collection
      .getFilteredByTag("activities")
      .filter((post) => Boolean(!post.data.draft))
      .filter((post) => Boolean(!post.data.excludeFromCollection))
      .filter((post) => Boolean(post.date <= now))
      .filter((post) => Boolean(!post.data.parent))
      .sort((a, b) => b.data.eventdate - a.data.eventdate);
  },

  published_jobs(collection) {
    return collection
      .getFilteredByTag("jobs")
      .filter((post) => Boolean(!post.data.draft))
      .filter((post) => Boolean(!post.data.excludeFromCollection))
      .filter((post) => Boolean(post.date <= now))
      .filter((post) => Boolean(!post.data.parent))
      .reverse();
  },

  published_members(collection) {
    return collection
      .getFilteredByTag("members")
      .filter((post) => Boolean(post.date <= now))
      .filter((post) => Boolean(!post.data.excludeFromCollection))
      .filter((post) => Boolean(!post.data.draft));
  },

  freelancers(collection) {
    return collection
      .getFilteredByTag("members")
      .filter((post) => Boolean(!post.data.excludeFromCollection))
      .filter((post) => Boolean(post.date <= now))
      .filter((post) => Boolean(post.data.freelancer))
      .filter((post) => Boolean(!post.data.draft));
  },

  drafts(collection) {
    return collection.getAll().filter((post) => Boolean(post.data.draft));
  },

  memberSpecialties(collection) {
    const allSpecialties = getAllKeyValues(
      collection
        .getFilteredByTag("members")
        .filter((post) => Boolean(post.data.freelancer)),
        "specialties"
    );

    return allSpecialties.map((category) => ({
      title: category,
      slug: strToSlug(category),
    }));
  }
}