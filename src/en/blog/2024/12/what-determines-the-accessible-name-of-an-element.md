---
title: What determines the accessible name of an element?
date: 2024-12-25
author: Kilian Valkhof
summary: "The accessible name of an element is how the browser passes an element to assistive technologies like screen readers or braille displays, and forms the way someone who cannot (fully) see a site consumes the content."
categories:
    - Advent Calendar
key: advent-2024-kilian-en
---

# The role of elements

Whether an element has an accessible name depends on the _role_ that element has on the page. Some elements automatically get an accessible name, such as a button, a link, or a heading. A div has no accessible name because a div has no role. Even if you give a div an explicit accessible name (more on that later in the article), the browser will ignore this until a relevant role is also assigned to the div.

Through these roles, browsers and assistive technologies can determine which parts of a page are relevant at what time. If a user wants to quickly _skim_ through the page, assistive technology will only read out elements with the role _heading_. If a user wants to quickly navigate to the navigation, assistive technology will only read out landmark elements. This way, users don't have to wade through the entire page to find what they're looking for.

Some of these roles are baked into the HTML you use, which is why it's important to use HTML elements with the correct semantics. This not only gives you the role of an element but also the "batteries included" interaction: You don't need to make a button focusable and clickable yourself. If you assign roles yourself, you'll also need to add the interaction yourself.

However, not everything you want to build on a site can be built with HTML; sometimes you need to build a more complex component with generic elements. In that case, you'll work with ARIA roles yourself. If you want to create an interface with tabs, for example, ARIA has the roles tab, tabpanel, and tablist to build that accessibly.

Don't think that at the end of this article you'll be tasked with providing all your elements with an explicit accessible role and name: write good HTML and you'll already get quite far.

# Accessible names

In its simplest form, it's the text within an element. Take this button for example:

```html
<button>
  Add
</button>
```

The accessible name of this button is "Add". So far so good. But maybe I want to add an icon:

```html
<button>
  Add <img src="cool-shopping-cart.gif" alt="icon of a shopping cart" />
</button>
```

The attentive reader notices that this image has a proper alt attribute describing the image. However, the content of that alt attribute also counts towards the button's accessible name. So the accessible name of this button is "Add icon of a shopping cart". And that's not very helpful. Since we already have the text "Add" in the button, the icon is only for decoration. A better solution is to use an empty alt attribute:

```html
<button>
  Add <img src="cool-shopping-cart.gif" alt="" />
</button>
```

The accessible name is now "Add" again, yay!

Time for the next step: The button has no visible text anymore, just the icon. The accessible name is now an empty string, and that's not helpful: we can no longer use the element's content for the accessible name. 

We can solve this in several ways, starting with an aria attribute specifically meant for this: `aria-label`.

```html
<button aria-label="Add">
  <img src="cool-shopping-cart.gif" alt="" />
</button>
```

When an element (one with a role supporting accessible names) has an `aria-label` attribute, the content of the element is **completely ignored**. The accessible name of this button is now "Add", regardless of what's in the element. This can quickly lead to problems.

Let's say we get an urgent ticket to add a "Remove" button next to the Add button. We quickly copy the Add button's code, attach a different event handler, and change the icon to a trash can.

```html
<button aria-label="Add">
  <img src="trash-can.gif" alt="" />
</button>
```

We refresh the browser and the icon looks great and works when clicked. Ship it!

...But we overlooked that aria-label: we _literally can't see it_ in the browser. So you need to be very careful to also update the aria-label when you update an element's content. Another problem with aria-label is that if your browser can automatically translate the page, the aria-label won't be translated ([aria-label does not translate](https://adrianroselli.com/2019/11/aria-label-does-not-translate.html)).

Let's try another solution instead, screenreader-only text:

```html
<button>
  <span class="sr-only">Add</span>
  <img src="cool-shopping-cart.gif" alt="" />
</button>
```

".sr-only" is not a built-in standard, but a convention (with accompanying CSS) that is widely used. This is an example of .sr-only CSS:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

This CSS ensures that the content is absolutely not visible but can still be read by a screen reader. This way we can determine the accessible name with "normal" text that can also be automatically translated. Figuring out how the CSS does that is something for another article.

By the way, there is discussion about whether such a class should be built into browsers. [Ben Myers](https://benmyers.dev/blog/native-visually-hidden/) is in favor, [Scott o'Hara](https://www.scottohara.me/blog/2023/03/21/visually-hidden-hack.html) is against. Both articles are worth reading.

The accessible name of the above buttons is thus determined in this order:

1. Is there an aria-label attribute? Use that.
2. If not, use the content of the element.

However, this is an extremely simplified order. To understand the rest of the 'accessible name' algorithm, we'll make our example more complex. We now have two buttons, each adding something different:

```html
<h3>Fronteers hoodie</h3>
<p>Nice and warm</p>
<button>
  Add <img src="cool-shopping-cart.gif" alt="" />
</button>

<h3>Fronteers cap</h3>
<p>Looks good on you</p>
<button>
  Add <img src="cool-shopping-cart.gif" alt="" />
</button>
```

The accessible name of these buttons is now "Add". But that's not helpful, because one button adds a hoodie and the other a cap. If you can see where the buttons are located, that's clear, but otherwise you have a problem. What we want here is to explicitly link the button to its corresponding product. We can do that with an `aria-labelledby` attribute:

```html
<h3 id="hoodie">Fronteers hoodie</h3>
<p>Nice and warm</p>
<button aria-labelledby="hoodie">
  Add <img src="cool-shopping-cart.gif" alt="" />
</button>

<h3 id="cap">Fronteers cap</h3>
<p>Looks good on you</p>
<button aria-labelledby="cap">
  Add <img src="cool-shopping-cart.gif" alt="" />
</button>
```

With `aria-labelledby` we can specify an ID of another element, and the accessible name of the button becomes the text of that element. Like `aria-label`, the content of the element is then ignored, and that's still a problem because how does a user know the button is for "Add"?

`aria-labelledby` solves this because you can give it not just one ID, but a list. The accessible name of the button then becomes the text of all elements you specify, separated by spaces. If we give our buttons an ID as well, we can also add the button's own text:

```html
<h3 id="hoodie">Fronteers hoodie</h3>
<p>Nice and warm</p>
<button id="hoodie-add" aria-labelledby="hoodie hoodie-add">
  Add <img src="cool-shopping-cart.gif" alt="" />
</button>

<h3 id="cap">Fronteers cap</h3>
<p>Looks good on you</p>
<button id="cap-add" aria-labelledby="cap cap-add">
  Add <img src="cool-shopping-cart.gif" alt="" />
</button>
```

The accessible name of these buttons is now "Fronteers hoodie Add" and "Fronteers cap Add". This is much clearer for a user who cannot see what's on the page.

But wait a minute, we just learned that aria-labelledby on an element ignores the content of that element. How can it be that the button's own text is now being read out? Doesn't this become an _infinite loop_?

Fortunately not! When you reference an element via `aria-labelledby`, it looks at the accessible name of that element as if there was no aria-labelledby attribute. Aria-labelledby only applies to the first step and you therefore don't get tangled up. This has been thought through!

Another thing that's been thought through: all text that now forms the accessible name is text on the page: so it can be translated normally.

With `aria-labelledby` added, this is the order in which the accessible name is determined:

1. Is there an `aria-labelledby` attribute AND is this the first element for which you're determining the accessible name? Use the text of the elements you specify, separated by a space.
2. Is there an aria-label attribute? Use that.
3. If not, use the content of the element.

# Conclusion

Hopefully you now have a better idea of where the accessible name of elements comes from, why you sometimes want to change it, and how to do that properly.

Unfortunately, I have to tell you that the algorithm for determining an accessible name is much more complicated. This complexity exists mainly to provide for cases where the above doesn't work. For certain types of input elements that have no content, for example, it looks at the `value`. Is there no value but is it a button type, like `<input type="submit">`? Then it gets the accessible name "Submit" from the browser. Empty textareas get the accessible name from the `title` or `placeholder` attribute. And there are many more exceptions. And as the very, very last resort, the `title` attribute of an element is used.

This is explicitly a last resort for when the developer hasn't done their job. If you're consciously working with accessible names then look at the three options: text on the page, aria-label, and aria-labelledby.

Want to read more about accessible name calculation? Here you can find a clear explanation: [Accessible name calculation](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#name_calculation) and if you really want to dive in, you can find the specification here: [Accessible Name and Description Computation](https://www.w3.org/TR/accname-1.2/). But be warned, it's quite intense.