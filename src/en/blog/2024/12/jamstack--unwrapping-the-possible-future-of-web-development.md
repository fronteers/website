---
title: Jamstack - Unwrapping the (Possible) Future of Web Development! 🎁
date: 2024-12-28
author: Gabriël Moawad
summary: A concise introduction to the Jamstack architecture, which combines pre-rendering, decoupling, and static files to streamline web development without complex server interaction on the client side.
categories:
  - Advent calendar
key: jamstack--unwrapping-de-mogelijke-toekomst-van-webdevelopment
---

## The spirit of Jamstack

Jamstack isn't just a set of predefined frameworks, a specific tool, or any programming language. In the true holiday spirit, it embodies conventions, practices, and traditions that mirror an architecture designed to help you build more performant and secure products.

> Jamstack is a modern web development architecture aimed at making the web faster, more secure, and easier to scale. The term "Jamstack" stands for JavaScript, APIs, and Markup. It emphasizes pre-rendering and decoupling, allowing websites to be served as static files from a CDN, which enhances performance and security. JavaScript handles dynamic functionalities, APIs connect to backend services, and Markup is pre-built during the build process.

Reading this definition, you might think: "These concepts are already on the wishlist of many companies and their development teams right now!" And you'd be right. There are many parallels between Jamstack and the Microservice, Composable, and MACH movements we've seen over the last few years. But Matt Biilmann, CEO and Co-founder of Netlify, who first mentioned Jamstack back in 2015, is taking 'decoupling' a step further than we're used to. But before we can fully understand that, a little history lesson:

## The monolithic past and the microservices revolution

In the olden days of web development, we had the so-called monolithic architecture. magine a giant snowball, where everything—client-side user interface, server-side application, and database—is packed tightly together into a single, indivisible unit. This approach results in a large codebase with little modularity, making updates a bit like trying to change the filling of a Christmas pudding without breaking it apart. This all results in a higher risk of downtime, as a failure in one part can affect the entire system. Additionally, these larger codebases become cumbersome to manage, making it harder to implement new features or quickly fix bugs.

Enter microservices architecture, the elves of the web development world. This approach was aimed at breaking down monolithic applications into smaller, independent units. Each microservice handles a specific function and operates independently, communicating through APIs. This modularity allows for independent updates, scaling, and deployment, much like Santa's workshop where each elf has a specialized, isolated task.

## Servers vs. CDNs

Santa's workshop is located at the North Pole, bustling with elves working tirelessly to fulfill all these requests. If every elf had to handle each request for the same toy, and instantly let Santa deliver it when it's done, it would be quite inefficient. This is where Jamstack steps in, transforming the process with the magic of ✨ pre-rendering ✨.

Rather than having a server handle every single request, Jamstack pre-renders all pages, wrapping them up as static HTML files ready to be delivered. These static files are then distributed to Content Delivery Networks (CDNs) around the globe. So instead of Santa having to race everywhere on his sleigh, they're stationed worldwide, ready to deliver gifts from closer proximity. This approach ensures that content is delivered quickly and efficiently.

![Diagram of the traditional flow versus Jamstack flow](/_img/blog/2024/12/advent-2024-gmoawad/jamstack-diagram.png)

## How to get started

Getting started with Jamstack can seem daunting, but it's actually quite straightforward. The magic in all this are the so-called Static Site Generators](https://jamstack.org/generators/) who already do most of the work for you! These frameworks enable you to pre-render external data (From, for instance, an [Headless CMS](https://jamstack.org/headless-cms/) into markup, creating static HTML files. This makes your product less 'error-prone' as whenever it's build, the product including data is now packaged and completely stand alone. This also ensures that if a static site is attacked, there won't be any backend servers that will go down, at most a node of the CDN serving the site.

This might sound like it won't show any changes in data or code, but how this works in the more mature Jamstack implementations is that webhooks (listening for both code and content changes) trigger the build pipeline automatically, and the `dist` folder, consisting of purely static assets, is regenerated with new data/code and uploaded to the CDNs again. By following these steps, You can start by setting up your own Jamstack project and experience the benefits of this form of web architecture.

1. Pick a Headless CMS with a free plan, such as [Contentful](https://www.contentful.com/sign-up/?plan=Free/), and create a space with some content definitions and entries.
2. Choose a simple Static Site Generator, like [eleventy](https://www.11ty.dev/), and create templates with 'hardcoded' data for now.
3. Write a Node.js script, for example using Axios, to fetch data from the Headless CMS endpoint and save it locally (e.g., in a JSON file).
4. Adjust the website templates so they reference the locally stored data fetched from the Headless CMS.
5. Add another Node.js script to generate the static site using your Static Site Generator's functionality.
6. Push all of this to a repository, such as on [GitHub](https://www.github.com).
7. Go to a platform like [Netlify](https://netlify.com/), link your repository, and deploy your project using the combination of the Node.js scripts created earlier.
8. Configure webhooks for both content updates in Contentful and code changes in your repository to automatically trigger the build process.
9. At this point, your content should update automatically: the webhooks trigger your script to fetch new data, regenerate the site, and deploy it to your chosen platform!

## Technical constraints

I hear you thinking, weren't we serving static files already back when Santa was a lot younger? Well, we did but directly working in HTML files and not automated with the power of modern web development tools like we can now! These Static Site Generators make this a lot easier for us, but there are still constraints and complexities we have to think about.

For instance, for bigger or frequently changing sites, a dilemma of frequency of changes versus volume can arise. Static site generation might take long or get started so often that it essentially is serving up new data just like we used to in the 'old fashioned' flow, making it impossible to cache the static files on the CDN. To solve these types of questions, we might need to look into scheduled or bundled runs of the Static Site generator. Or even more complex, only pre-rendering the changes (delta) since the last run, instead of regenerating all the unchanged pages.

here are also sites that cannot be fully generated statically. For example, consider interactions on an e-commerce site, where items need to be added to a shopping cart and later retrieved. This means that during runtime, API calls to microservices or interaction with local storage are still required. This process is called 'hydration', where static pages are “enriched” on the client side to enable dynamic functionality. This brings challenges such as data synchronization and optimizing load times to ensure that static and dynamic elements work seamlessly together.

## Conclusion

While Jamstack offers a modern, efficient, and secure approach to web development, it's not without its challenges. The need to manage build times, the frequency of updates, and hydrating static and dynamic content can introduce complexities, especially when working on larger projects. However, with careful planning and considering if the benefits outweigh the negatives, these challenges could possibly be managed, making the Jamstack experience as delightful as opening a present on Christmas morning. 🎄

## About the author

Gabriël Moawad is a front-end developer from Utrecht with over 11 years of experience at Capgemini's Digital Customer Experience Front-end Team. He studied ICT at the Amsterdam University of Applied Sciences and started his career at smaller agency-like companies like Mirabeau and Tizio. At Capgemini, he's worked with clients like ABN Amro, Lacoste, SuitSupply, Unilever, the Dutch Police, and now at Boels where he is implementing Contentstack. Gabriël's current passion lies in the MACH, Headless CMS, and composable domain, which ties into the Jamstack focus of this article. In addition, he loves basketball, board games, video games, and traveling.
