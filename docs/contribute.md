# Contributing

If you want to help us, read through this readme first to get an idea of the way you can contribute. There are various ways you can help:
- by giving us advice on tooling
- by  [building components](https://github.com/fronteers/website/issues?q=is%3Aissue+component+is%3Aopen).
- by improving components (making them leaner, faster, smarter, more robust or mobile-friendly)
- by building functionality for the website (a lot has been done, but could maybe do with finetuning)
- by building [advanced functionality](https://github.com/fronteers/website/issues?q=is%3Aissue+is%3Aopen+label%3Achallenge)

## Good first issues

We have labelled issues that might be good first issues to help out with as [Good first issues](https://github.com/fronteers/website/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).
These are usually issues that need help with styling. 

## Challenging issues

Issues that require back-end expertise, knowledge/experience of Liquid, or knowledge of a certain technical solution that we would love to add to the website that would help UX in a big way.

Why don't you take a look? [Check out all challenging issues](https://github.com/fronteers/website/issues?q=is%3Aissue+is%3Aopen+label%3Achallenge).

## Issues that need some research into the best option

We're not sure yet about how to tackle a few things, and we've marked those as [questions](https://github.com/fronteers/website/issues?q=is%3Aissue+is%3Aopen+label%3Aquestion). What is your advice on how to do this? Have you seen a website where something seems to be working super smoothly? 

## Have a question for our designers?

We collect questions and feedback in batches, so the designers have one point of contact and can work on this project with 100% focus. [Leave your question/feedback in this issue](https://github.com/fronteers/website/issues/79)

## Just have an opinion or see something buggy?

As we are all volunteers working on this, it would be most helpful to us if you could open a pull-request. But we understand it if you are a little daunted by all of this, or not at home with the code enough to confidently make a change. We get it!

You can [open a bug report](https://github.com/fronteers/website/issues/new?assignees=&labels=&template=bug_report.md&title=) here on GitHub
or if you think more discussion would be helpful [join us on Slack](https://fronteers-slack.herokuapp.com/) in the channel `#nieuwe-website`.

## How to start developing

The website is built using [Eleventy](https://www.11ty.dev/) (Static site generator) and hosted on [Netlify](https://www.netlify.com/). 

Every time a new pull-request is made, at the bottom of the pull-request detail page you'll see a link from Netlify where reviewers can see what everything looks like if the changes would be merged. The `main` branch also has a [preview link](https://fronteers-beta.netlify.app/) if you want to look at what has been built so far!

In most issues, we mention a link to the design file. Our designers directly share [the design](https://xd.adobe.com/view/bd533314-bf05-4cbe-b634-499f8f25dbbc-e800/grid) with us through the AdobeXD platform. 
Most issues also have a checklist, so you can tick off any boxes when you've done some work that has been merged, or notice that it has been done. So the next person can see what is still left to do.

Want to get your hands dirty? Follow the steps below!

<div style="padding: 10px; border: 1px solid white; box-shadow: inset 0 0 1px 1px #000000; margin-bottom: 1rem" markdown="1">

Don't understand one of these steps or want to have it explained differently? [Join us on Slack](https://fronteers-slack.herokuapp.com/) in the channel `#nieuwe-website`. We'll brainstorm with you on how best to get you up to speed! 

</div>

## Step 1: Install node modules

First, make sure to install all the necessary modules with NPM:

```bash
npm install
```

If this command seems foreign to you, check out this article: "[A beginner's guide to NPM](https://www.stackchief.com/tutorials/A%20Beginner%27s%20Guide%20to%20NPM)". 
Summarised, it installs all the necessary modules to run Eleventy.

## Step 2: Run Eleventy

After you've installed all the necessary node modules, run

```bash
npm run start
```

This command tells Eleventy to go through all the files in the `src` folder. When run, first it generates the site in the `dist` directory. After it finishes doing that, it tells you at what address in the browser you can find a running version of the website. Then it goes into `watch` mode, which means it will keep an eye on the files you edit and save. If it sees you make changes to a `.md`, `.html` or `.liquid` file, it will regenerate all the files and automatically refresh the browser.

<div style="padding: 10px; border: 1px solid white; box-shadow: inset 0 0 1px 1px #000000; margin-bottom: 1rem" markdown="1">

### Sidenote

All this is really smart, but it is not _that_ smart. If you generated a html page, which you're looking at in the browser, and you delete it so the page in the browser shouldn't exist anymore, it will look to you as if nothing changes. This is because Eleventy doesn't delete all the files in the `dist` folder before it generates all the pages again. 

</div>


### Just generating the site

If you're not developing, but just want to have Eleventy generate a copy of the website, you can use the following command. 
You don't really need to do this, because we host the site on Netlify, and it does this for us by downloading the main GitHub branch and then running this. (You can see it on [our Netlify beta version](https://fronteers-beta.netlify.app/))

```bash
npm start build
```

## Step 3: Start coding

Every issue that is open on the [issues page](https://github.com/fronteers/website/issues) has a little checklist that shows what still needs to be done to consider it finished. This reflects our Definition of Done:

- Responsive: we make sure pages and components work on all device formats.
- Accessible: we want to be WCAG 2.1 AAA compliant. Don't forget: do images have an alt-attribute? Is everything accessible using only a keyboard? Is the contrast high enough?
- Progressive enhancement: all main content should be accessible with JavaScript turned off.
- Document the things you do: Add components to the [Kitchensink](https://fronteers-beta.netlify.app/nl/kitchensink/) with various states, so editors know how to use them.

## Creating components

Right now, we don't make use of this functionality as much as we could, because we basically use liquid includes. But we have the option to make them true components. Come discuss in [our Slack](https://fronteers-slack.herokuapp.com/) in the channel `#nieuwe-website`!
