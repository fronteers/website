const { strToSlug, getAllKeyValues } = require('./helpers');

// https://www.11ty.dev/docs/collections/#collection-api-methods

/** @typedef {{ date: Date, data: Record<string, unknown>}} Post */
/** @typedef {(value: Post, index: number, array: Post[]) => boolean} FilterPredicate */
/** @typedef {((a: Post, b: Post) => number)} SortCallback */
/** @typedef {{ getAll(): CollectionApi, getAllSorted(): CollectionApi, reverse(): CollectionApi, getFilteredByTag(tag: string): CollectionApi, getFilteredByTags(...tags: string[]): CollectionApi, getFilteredByGlob(glob: string | string[]): CollectionApi, filter(callback: FilterPredicate): CollectionApi, sort(callback: SortCallback): CollectionApi }} CollectionApi */

/** @type {Record<string, (api: CollectionApi) => CollectionApi>} */
const collections = {};

collections['canonical'] = function (collection) {
    const now = new Date();

    return collection
        .getFilteredByTag('pages')
        .filter((post) => Boolean(post.data.key))
        .filter((post) => Boolean(post.date <= now))
        .filter((post) => Boolean(post.data.locale == 'nl'));
};

collections['published_posts'] = function (collection) {
    const now = new Date();

    return collection
        .getFilteredByTag('posts')
        .filter((post) => Boolean(!post.data.draft))
        .filter((post) => Boolean(!post.data.excludeFromCollection))
        .filter((post) => Boolean(post.date <= now))
        .filter((post) => Boolean(!post.data.parent))
        .reverse();
};

collections['published_posts_nl'] = function (collection) {
    const now = new Date();

    return collection
        .getFilteredByTag('posts')
        .filter((post) => Boolean(!post.data.draft))
        .filter((post) => Boolean(!post.data.excludeFromCollection))
        .filter((post) => Boolean(post.date <= now))
        .filter((post) => Boolean(!post.data.parent))
        .filter((post) => Boolean(post.data.locale == 'nl'))
        .reverse();
};

collections['published_posts_en'] = function (collection) {
    const now = new Date();

    return collection
        .getFilteredByTag('posts')
        .filter((post) => Boolean(!post.data.draft))
        .filter((post) => Boolean(!post.data.excludeFromCollection))
        .filter((post) => Boolean(post.date <= now))
        .filter((post) => Boolean(!post.data.parent))
        .filter((post) => Boolean(post.data.locale == 'en'))
        .reverse();
};

collections['published_activities'] = function (collection) {
    const now = new Date();

    return collection
        .getFilteredByTag('activities')
        .filter((post) => Boolean(!post.data.draft))
        .filter((post) => Boolean(!post.data.excludeFromCollection))
        .filter((post) => Boolean(post.date <= now))
        .filter((post) => Boolean(!post.data.parent))
        .sort((a, b) => b.data.eventdate - a.data.eventdate);
};

collections['published_activities_nl'] = function (collection) {
    const now = new Date();

    return collection
        .getFilteredByTag('activities')
        .filter((post) => Boolean(!post.data.draft))
        .filter((post) => Boolean(!post.data.excludeFromCollection))
        .filter((post) => Boolean(post.date <= now))
        .filter((post) => Boolean(!post.data.parent))
        .filter((post) => Boolean(post.data.locale == 'nl'))
        .sort((a, b) => b.data.eventdate - a.data.eventdate);
};

collections['published_activities_en'] = function (collection) {
    const now = new Date();

    return collection
        .getFilteredByTag('activities')
        .filter((post) => Boolean(!post.data.draft))
        .filter((post) => Boolean(!post.data.excludeFromCollection))
        .filter((post) => Boolean(post.date <= now))
        .filter((post) => Boolean(!post.data.parent))
        .filter((post) => Boolean(post.data.locale == 'en'))
        .sort((a, b) => b.data.eventdate - a.data.eventdate);
};

collections['published_jobs'] = function (collection) {
    const now = new Date();

    return collection
        .getFilteredByTag('jobs')
        .filter((post) => Boolean(!post.data.draft))
        .filter((post) => Boolean(!post.data.excludeFromCollection))
        .filter((post) => Boolean(post.date <= now))
        .filter((post) => Boolean(!post.data.parent))
        .reverse();
};

collections['published_jobs_nl'] = function (collection) {
    const now = new Date();

    return collection
        .getFilteredByTag('jobs')
        .filter((post) => Boolean(!post.data.draft))
        .filter((post) => Boolean(!post.data.excludeFromCollection))
        .filter((post) => Boolean(post.date <= now))
        .filter((post) => Boolean(!post.data.parent))
        .filter((post) => Boolean(post.data.locale == 'nl'))
        .reverse();
};

collections['published_jobs_en'] = function (collection) {
    const now = new Date();

    return collection
        .getFilteredByTag('jobs')
        .filter((post) => Boolean(!post.data.draft))
        .filter((post) => Boolean(!post.data.excludeFromCollection))
        .filter((post) => Boolean(post.date <= now))
        .filter((post) => Boolean(!post.data.parent))
        .filter((post) => Boolean(post.data.locale == 'en'))
        .reverse();
};

collections['published_members'] = function (collection) {
    const now = new Date();

    return collection
        .getFilteredByTag('members')
        .filter((post) => Boolean(post.date <= now))
        .filter((post) => Boolean(!post.data.excludeFromCollection))
        .filter((post) => Boolean(!post.data.draft));
};

collections['published_members_nl'] = function (collection) {
    const now = new Date();

    return collection
        .getFilteredByTag('members')
        .filter((post) => Boolean(post.date <= now))
        .filter((post) => Boolean(!post.data.draft))
        .filter((post) => Boolean(!post.data.excludeFromCollection))
        .filter((post) => Boolean(post.data.locale == 'nl'));
};

collections['published_members_en'] = function (collection) {
    const now = new Date();

    return collection
        .getFilteredByTag('members')
        .filter((post) => Boolean(post.date <= now))
        .filter((post) => Boolean(!post.data.draft))
        .filter((post) => Boolean(!post.data.excludeFromCollection))
        .filter((post) => Boolean(post.data.locale == 'en'));
};

collections['freelancers'] = function (collection) {
    const now = new Date();

    return collection
        .getFilteredByTag('members')
        .filter((post) => Boolean(!post.data.excludeFromCollection))
        .filter((post) => Boolean(post.date <= now))
        .filter((post) => Boolean(post.data.freelancer))
        .filter((post) => Boolean(!post.data.draft));
};

collections['freelancers_nl'] = function (collection) {
    const now = new Date();

    return collection
        .getFilteredByTag('members')
        .filter((post) => Boolean(post.date <= now))
        .filter((post) => Boolean(!post.data.excludeFromCollection))
        .filter((post) => Boolean(post.data.freelancer))
        .filter((post) => Boolean(post.data.locale == 'nl'))
        .filter((post) => Boolean(!post.data.draft));
};

collections['freelancers_en'] = function (collection) {
    const now = new Date();

    return collection
        .getFilteredByTag('members')
        .filter((post) => Boolean(post.date <= now))
        .filter((post) => Boolean(!post.data.excludeFromCollection))
        .filter((post) => Boolean(post.data.freelancer))
        .filter((post) => Boolean(post.data.locale == 'en'))
        .filter((post) => Boolean(!post.data.draft));
};

collections['drafts'] = function (collection) {
    return collection.getAll().filter((post) => Boolean(post.data.draft));
};

collections['memberSpecialties'] = function (collection) {
    const allSpecialties = getAllKeyValues(
        collection
            .getFilteredByTag('members')
            .filter((post) => Boolean(post.data.freelancer)),
        'specialties'
    );

    const memberSpecialties = allSpecialties.map((category) => ({
        title: category,
        slug: strToSlug(category),
    }));

    return memberSpecialties;
};

collections['activityCategories'] = function (collection) {
    const allCategories = getAllKeyValues(
        collection.getFilteredByTag('activities'),
        'categories'
    );

    const eventCategories = allCategories.map((category) => ({
        title: category,
        slug: strToSlug(category),
    }));

    return eventCategories;
};

collections['blogCategories'] = function (collection) {
    const allCategories = getAllKeyValues(
        collection.getFilteredByTag('posts'),
        'categories'
    );

    const blogCategories = allCategories.map((category) => ({
        title: category,
        slug: strToSlug(category),
    }));

    return blogCategories;
};

collections['jobCategories'] = function (collection) {
    const allCategories = getAllKeyValues(
        collection.getFilteredByTag('jobs'),
        'categories'
    );

    const jobCategories = allCategories.map((category) => ({
        title: category,
        slug: strToSlug(category),
    }));

    return jobCategories;
};

module.exports = collections;
