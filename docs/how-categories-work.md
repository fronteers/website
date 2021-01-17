# How categories work

Some content types (activities, jobs, blogs) can set a category in the frontmatter, for example:

```
Categories  
    - category one
    - category two
```

In the same way, members can have have 'specialties', which is used for the list of freelancers.

```
Specialties  
    - specialty one
    - specialty two
```

This functionality is then used for adding category lists on the pages members (leden), jobs (werk), activities (activiteiten) and freelancers. 

The templates for these category pages are quite complex and are required to be have `.liquid` extensions because all the logic going on. They live in the folders, close to the content they're filtering.

The functionality is based on what is described here is largely based on [a blog by Jérôme Coupé](https://www.webstoemp.com/blog/basic-custom-taxonomies-with-eleventy/), a belgian front-end designer and teacher. Thanks Jérôme!



