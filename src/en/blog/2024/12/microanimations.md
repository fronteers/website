---
title: "It's all in the details: Micro animations as the icing on the cake"
date: 2024-12-28
author: Anke Willems
summary: "Add micro animations to your site to give it that little bit extra."
categories:
    - Adventskalender
key: microanimations-awillems-en
---


The difference between a good site and a site that really works for the visitor is in the little things. Using micro animations can really improve the experience for a user. The designer Charles Eames once said: 'Details are not just details. Details make the design'. And micro animations are just the kind of details that can take your website to the next level.

A hover on a button or a focus outline that fades nicely are all examples of micro animations that you probably already use. In this article I want to focus on ways in which these animations can improve the UX.

## Micro animations?

You can use animation on a website with grand gestures. A page builds a grid in masonry, the background has all kinds of moving parts or the logo comes flying in on the homepage. There may be use cases for this movement, but that is more in the area of ​​branding.

Micro animations, on the other hand, are small, seemingly inconspicuous pieces of moving design. They are there to enhance the visitor experience, add a little something extra to your design, and above all to improve the flow and usability. Think of an animation when an element receives focus, is clicked, or moves to another state or location.

## What makes a micro animation a UX asset?

Animations can make your site more pleasant to use, but only if the timing is actually right. The Nielsen Norman group, a knowledge center for UX, states that a good supporting animation must meet three requirements:

- Speed
- Present, but subtle
- Purposeful

### Speed

The ideal time for an animation is between 100 and 500ms. But you really need a good reason to go higher than 300ms. It seems fast, especially during design and construction. But for a user who performs an action on your site, this is a timing that is fast enough to provide feedback but does not feel slow. The NN group gives as a rule of thumb: The further something has to move, the slower the animation.

In addition, you do not want an animation to be linear. In nature, little is linear and certainly not movement. Mass takes a while to get moving, and slowing down also takes a while. So add some easing to your animation. For example, using `ease-in-out` ensures that your animation starts a bit slower, then speeds up, and finally slows down again towards the end.

### Present, but subtle

A subtle animation works better than a long slow transition from one thing to another. It is fun to show off your technical skills, but the user may have to go back to the index with the news items three times, and is not at all waiting for a page build that takes two seconds. It is much more pleasant to have a small animation when, for example, clicking a checkbox, or hovering over a button. Keep your animations small, subtle and purposeful.

### Purposeful

The whole purpose of an animation should be to give your user feedback on an action they just took, or to point out a feature of your site. You add an item to buy and a little dot appears in your shopping cart. You make a choice in a form and the checkbox animates to a clicked state. The small movement of the animation draws attention to the element and confirms that the action was successful. It refers to the 'real world' where something does not just appear in a different place, but is brought somewhere by an action.

Another well-known example is adding a _loader_. The visitor has taken an action, but the site first has to retrieve the information. Showing a small loading animation gives feedback (and therefore confirmation) that something is happening, and research shows that the loading time is perceived as shorter than when no progress is shown.

In addition, you can use an animation to give the user an impression of how the website is put together. If you click on a tab and a card slides in from the side, then that card 'lives' on the right side of the site. A swipe to the left would be a good gesture to make the card disappear again.

## Use with care and intention

There is another reason to keep your animations small, as much as we love _scrolljacking_ and parallax animations. Keep in mind that there are users who can't handle a lot of movement on a site, get nauseous from it or even get epileptic attacks from it. The WCAG guidelines recommend a maximum of 3 blinks per minute. Even better is to use the media query `@media (prefers-reduced-motion)`. You can use it to read the user's settings and, for example, not present animations if this setting is on.

## Test!

Use micro animations to give your site that little bit extra. What lends itself to some extra movement in your project? Look at how other websites do it, and don't be afraid to try it out. Ask people around you to watch, because timing an animation well so that it feels natural can take quite a bit of trial and error. Start small, build out to other elements and remember that it is better to have a few good animations than a lot that just miss the mark. Enjoy!
