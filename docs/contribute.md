# Contributing

You want to help us? Great! Please read through this document first to get an idea of the way you can contribute. There are various ways you can help:

- by giving us advice on tooling
- by [building components](https://github.com/fronteers/website/issues?q=is%3Aissue+component+is%3Aopen).
- by improving components (making them leaner, faster, smarter, more robust or mobile-friendly)
- by building functionality for the website (a lot has been done, but could maybe do with finetuning)
- by building [advanced functionality](https://github.com/fronteers/website/issues?q=is%3Aissue+is%3Aopen+label%3Achallenge)

Curious as to how the site looks right now? Check out [the Fronteers website beta on Netlify](https://fronteers-beta.netlify.app/)! :)

## 👯 Development principles

Before you start contributing consider the following principles:

**1. This is for everyone**
Make sure everyone feels welcome to contribute to fronteers.nl. Keep your feedback or issue descriptions civil and on point.

**2. Three see more than two, see more than one**
There are a lot of smart people in our community, so ask for feedback on your idea, and let's learn from each other!

**3. Keep it simple, sweetie**
We're all volunteers with limited time, so keep your contributions small and simple so people can easily pick up where you left off.

**4. There's no harm in asking**
When you are stuck or want to get started on an issue but are not entirely sure how, ask around in Fronteers Slack. There's always someone willing to help. If you're not a member of our Slack community yet, you can [register here](https://fronteers-slack.herokuapp.com/).

## 🏗 Good first issues

We have labelled issues that might be good first issues to help out with as [Good first issues](https://github.com/fronteers/website/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).
These are usually issues that need help with styling.

## ✨ Challenging issues

Issues that require back-end expertise, knowledge/experience of Liquid, or knowledge of a certain technical solution that we would love to add to the website that would help UX in a big way.

Why don't you take a look? [Check out all challenging issues](https://github.com/fronteers/website/issues?q=is%3Aissue+is%3Aopen+label%3Achallenge).

## 💡 Issues that need some research into the best option

We're not sure yet about how to tackle a few things, and we've marked those as [questions](https://github.com/fronteers/website/issues?q=is%3Aissue+is%3Aopen+label%3Aquestion). What is your advice on how to do this? Have you seen a website where something seems to be working super smoothly?

## 🤔 Have a question for our designers?

We collect questions and feedback in batches, so the designers have one point of contact and can work on this project with 100% focus. [Leave your question/feedback in this issue](https://github.com/fronteers/website/issues/79)

## 🐛 Just have an opinion or see something buggy?

As we are all volunteers working on this, it would be most helpful to us if you could open a pull-request. But we understand it if you are a little daunted by all of this, or not at home with the code enough to confidently make a change. We get it!

You can [open a bug report](https://github.com/fronteers/website/issues/new?assignees=&labels=&template=bug_report.md&title=🐛) here on GitHub
or if you think more discussion would be helpful [join us on Slack](https://fronteers-slack.herokuapp.com/) in the channel `#nieuwe-website`.

# How to start developing

The website is built using [Eleventy](https://www.11ty.dev/) (Static site generator) and hosted on [Netlify](https://www.netlify.com/).

Every time a new pull-request is made, at the bottom of the pull-request detail page you'll see a link from Netlify where reviewers can see what everything looks like if the changes would be merged. The `main` branch also has a [preview link](https://fronteers-beta.netlify.app/) if you want to look at what has been built so far!

In most issues, we mention a link to the design file. Our designers directly share [the design](https://xd.adobe.com/view/bd533314-bf05-4cbe-b634-499f8f25dbbc-e800/grid) with us through the AdobeXD platform.
Most issues also have a checklist, so you can tick off any boxes when you've done some work that has been merged, or notice that it has been done. So the next person can see what is still left to do.

Want to get your hands dirty? Follow the steps below!

> Don't understand one of these steps or want to have it explained differently? [Join us on Slack](https://fronteers-slack.herokuapp.com/) in the channel `#nieuwe-website`. We'll brainstorm with you on how best to get you up to speed!

## Step 1: Clone the repository on your computer

If you don't have it installed yet, [download and install Git](https://git-scm.com/downloads) for your computer.
Git is a version management tool. While coding, you create "save points" (called commits), which makes it really useful when coding with other people. They can see what you've done and why, because you'll add a descriptive 'commit message'. And if you both edited a file, it'll help you make sure you don't overwrite the other person's code. [This article on Git by Milu Franz is a great explanation](https://dev.to/milu_franz/git-explained-the-basics-igc). [Roger Dudler's git guide](https://rogerdudler.github.io/git-guide/) lists all the useful commands.
Git articles and video's online can be a little intimidating. It can help to install a good [Git graphical user interface](https://git-scm.com/downloads/guis).

Once you have Git, open a command line and go to a folder on your harddisk where you want to keep a copy of the Fronteers website code.
**For example:** Go to a folder like `your-username/github/`, and do the following command. It will then create the Fronteers website code in `your-username/github/website` :)

```bash
git clone https://github.com/fronteers/website.git
```

This makes a copy of all the code on your harddrive. Stay in this location on the commandline, we'll continue working here.

## Step 2: Install node modules

First, make sure to install all the necessary modules with NPM:

```bash
npm install
```

If this command seems foreign to you, check out this article: "[A beginner's guide to NPM](https://www.stackchief.com/tutorials/A%20Beginner%27s%20Guide%20to%20NPM)". In summary, it will install all the necessary modules to run Eleventy.
If you haven't worked with it before, you will also need to [install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm) ([If you have iOS or Windows, this link](https://nodejs.org/en/download/)).

## Step 3: Create a git branch to work on

We'll make a branch, sort of a copy of the code where you save all your changes (`commits`). This helps keep all your changes in making a new component or a bugfix together. After you finish coding, you'll make a `pull-request`, which is essentially the expression we use for asking feedback of the team and permission to add your changes to the project.

```bash
git checkout -b [branch-name]
```

Replace [branch-name] in the above command with a name that explains what the end-result will be. Here are some examples:

```
git checkout -b feature/about-hero-element

git checkout -b bugfix/fix-typos-on-homepage

git checkout -b content/add-my-meetup
```

## Step 4: Run Eleventy

After you've installed all the necessary node modules, run

```bash
npm start
```

This command tells Eleventy to go through all the files in the `src` folder. When run, first it generates the site in the `dist` directory. After it finishes doing that, it tells you at what address in the browser you can find a running version of the website. Then it goes into `watch` mode, which means it will keep an eye on the files you edit and save. If it sees you make changes to a `.md`, `.html` or `.liquid` file, it will regenerate all the files and automatically refresh the browser.

![Example of what you get when running the command npm run start](https://github.com/fronteers/website/blob/main/docs/afterrunningnpmstart.png?raw=true)

> Sidenote
> All this is really smart, but it is not _that_ smart. If you generated a html page, which you're looking at in the browser, and you delete it so the page in the browser shouldn't exist anymore, it will look to you as if nothing changes. This is because Eleventy doesn't delete all the files in the `dist` folder before it generates all the pages again. However, re-running npm `start` solves this problem.

### Quick build

If you are working with files that trigger a full re-build, such as `.liquid` files, you probably don't want to wait for all files to re-generate. In this case, run `npm run start:quick` instead to exclude all older content.

### Just generating the site

If you're not developing, but just want to have Eleventy generate a copy of the website, you can use the following command.
You don't really need to do this, because we host the site on Netlify, and it does this for us by downloading the main GitHub branch and then running this. (You can see it on [our Netlify beta version](https://fronteers-beta.netlify.app/))

```bash
npm run build
```

## Step 5: Start coding

Every issue that is open on the [issues page](https://github.com/fronteers/website/issues) has a little checklist that shows what still needs to be done to consider it finished. This reflects our Definition of Done:

- Responsive: we make sure pages and components work on all device formats.
- Accessible: we want to be WCAG 2.1 AAA compliant. Don't forget: do images have an alt-attribute? Is everything accessible using only a keyboard? Is the contrast high enough?
- Progressive enhancement: all main content should be accessible with JavaScript turned off.
- Document the things you do: Add components to the [Kitchensink](https://fronteers-beta.netlify.app/nl/kitchensink/) with various states, so editors know how to use them.

## Creating components

Right now, we don't make use of this functionality as much as we could, because we basically use liquid includes. But we have the option to make them true components. Come discuss in [our Slack](https://fronteers-slack.herokuapp.com/) in the channel `#nieuwe-website`!
