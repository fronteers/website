---
title: "Ceci n’est pas une pipe | or on CSS naming"
date: 2015-03-16
author: Wilfred Nas
categories: 
  - De Artikelen
---
Wilfred Nas hield tijdens de jam session van het Fronteerscongres een praatje over naamgeving van classes. Dit praatje heeft hij omgezet in een artikel voor onze website.

# Ceci n’est pas une pipe | or: on CSS naming

Most of us write CSS daily, it is something we do and not the most difficult thing that we do. Or so we tell ourselves, as most of us would rather concentrate on the more difficult stuff, such as writing JavaScript or semantically correct HTML. Most of the time we don't really think about what it is we write, but I think that CSS is a poorly understood part of our work. 
And I think we tend to forget the most important part of it: 
naming things.

# In the beginning

There used to be a time when life was simple. You built a website or an app, all by yourself. In those days stuff was simple and you didn't need to really think about the name of that `.button` or was it `.btn` or even `.defaultButton`. You just had a couple of hundred lines of CSS and you could oversee it all easily. That is, when you were working on it. If the client came back in three months there sometimes was that moment that you honestly had no clue what you had done in the past, but most of the times you managed.

# Enter the modern times

Nowadays there is almost no project I tackle all by myself, most of the time there are two or more people working on the same code that I work on. And I have to communicate with those people, to avoid mistakes or unnecessary rework. So to avoid these things, we start to think about naming conventions. There are some tools and methodologies around to help you, [SMACSS](http://smacss.com), [BEM](http://bem.info) and [OOCSS](http://oocss.org) to name but a few and I advise you to look at those. But I think that rather than blindly following one of those methods you should settle on your own and build these things with your team. As the most important thing about this is communication and that happens best when you do it together…

# So a proposal

Something that I like to do is to work really simply, so the first thing I like to do is set up boundaries. So the first part of each class will be the name of the project or the sub-project you are working on.

`.*g*-form-checkbox`: Where G is the Generic part of the project you are working on.
This is a real life example from a project I worked on, this one involved around 30 people working in 7 different teams. So you see, we had quite some coordinating to do. Each team has its own prefix thus preventing them to overwrite other peoples code by accident.

.g-*form*-checkbox: The second part is what we are working on, the form bit of the application. 
Each project has its own sections in the code base, most of the time in its own .less file.

.g-form-*checkbox*: The third part is for... you can figure that one out.

Ok you say, this all sounds reasonable, but why should we bother? Well maybe to really start thinking about the names you give to stuff, as to avoid stuff like this:

```
.textAlignRight { text-align:left;}
.width756px { width: 740px; }
```

## Real code

I know you are smarter than that, but the truth is, what I have seen is stuff like naming a button three different ways:

`.button`

`.btn`

`.defaultButton`

So I will just show you some of the CSS naming conventions me and the people that I have worked with have came up with in the past. It is not something you have to do, think of it like tips or guidelines...

We have always tried to make use of smart people and starting from some of the things of patternlab seemed like a good idea. So we started out with Atoms.

## Atoms

Atom are the smallest part of a page or application, for instance, the input box on a page.

So how do we name those atoms? 
For an `<input />` we set a class of `.g-form-input`. If we wanted to be more specific for a `<input type="search" />` we could do `.g-form-input-search` or we could go `.g-form-input[type=“search”]`, whatever strikes your fancy.
In the same jest, we could approach states like focus, by either providing an extra class `.g-form-input-focus` or using attribute selectors `.g-form-input:focus`.

You could even do without the classes all together and go `input[type=search]`, that only is a different kind of naming, CSS naming is not about classes, it is  about how we address things. So if you want to go another way, please do so consistently.

## Molecules

Atoms make up molecules. So the input from the atom could be located in a search box and there, it would need some different styles. What we are not going to do is make up a new atom for it, we are going to create a class that contains only the difference and add that to the surrounding element like :

```
<div class="g-m-search-input">
    <label for="search">  </label>
    <input id="search" type="search" class="g-form-input g-form-input-search">
    <button class="g-form-button g-form-button-primary">  </button>
</div>
```

Where in the CSS, the `*.g-m-search-input*` will only contain the declarations that make it different, carefully avoiding overwriting any generic styles if we can avoid it.

## Organisms

Next up in the chain are organisms, things made up of the molecules. Let's say that we have a header organism `.g-o-header` that contains a search box. If the search box needs any styles different applied to it, we supply it with some extra css, like this:

```
.g-o-header .m-search-input .g-form-input-search { 
   foo:bar; 
}
```

Needless to say, we only need to specify the difference here, not overwrite stuff that is already there...

## Templates

Next up in our hierarchy are the templates, here is where we put even more stuff together. The atoms, molecules and organisms all on the same kind of page. A search page for instance could go with a class of `*.g-t-search*` and the results page could have `*.g-t-results*`.

## Pages

Finally we have the actual pages, where our templates are used to create actual web pages. Please note that the bulk of the css you will write will be for the Atoms and will diminish as we get down to the molecules and on to the pages. If you have a lot of code for each page, you need to look closely at your atoms and see what you can change there.
Pages come like this `*.g-p-awesomeblogpost*` and contain only the stuff needed there, like on the page `*.g-p-saintpatricksday*` you will set the borders of the `*.g-form-input-search*` to green, as we all know.

# Wrap up and pointers

So in a nut shell, here is what I do in big projects:

* I prefix each name with the name of the project or an abbreviation of that name.
* 
* Molecules have a -m after that, organisms an -o, templates a -t and pages a -p. By doing this you should make your names easily understandable to all of your team members and you will get new members up to speed in no time.

So now you know what a naming convention could look like, I will give you some random pointers that I have found useful.

## Avoid using ID's

They are too specific and generally cause you more harm than do you good. In a lot of projects ID's are used by backend or JavaScript programmers, so leave them alone.

## Don't over nest

Ya, I know it sounds daft, with me just giving you all these layers and all. But try to avoid excessive nesting, my rule of thumb is max 4 layers but you can set that to what you like. It is not for performance reasons, but to make debugging easier.

## Avoid the direct > child selector

It looks nice, doing stuff with that kind of selector, it will make you look really smart and all. But it will bind you to a specific dom construction and that is not something you have total control over at all times.

(TODO: (Same goes for the adjacent sibling combinator (+) and the general sibling combinator (~)))

## Talk about it

This is the most important advice I can give you on CSS naming conventions. There is no ultimate solution for your problem, you have to decide on that with your whole team. If you talk about your naming convention and get everybody on board, it is more probable that everyone will adhere to these conventions.

(TODO: Over Wilfred Nas
blog/2015/wilfrednas.jpeg
Freelance front end developer, loves to travel by rocket, father of two sons and founding member of the gang of 5. Nuts about html5 forms and semantics.
He writes more at [wnas.nl](http://wnas.nl) and rants on twitter as [@wnas](https://twitter.com/wnas).)