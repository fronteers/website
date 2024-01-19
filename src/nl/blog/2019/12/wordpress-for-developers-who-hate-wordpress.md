---
title: 'WordPress for developers who hate WordPress'
date: 2019-12-11
author: Luc Princen
categories:
    - Adventskalender
---

WordPress is now over sixteen years old. In those sixteen years it’s grown to power over 33% of the ten million most popular websites. And yet, the most popular system for publishing websites is one of the most hated systems for developers. At least according to the Stack Overflow developer survey who ranked WordPress as the most dreaded platform to work with this year. It has been in the top three for years now.

WordPress has a reputation among developers that it’s cumbersome, slow to load and insecure. This is true in a lot of cases, but I’d like to show you that it is possible to build modern and easy to maintain websites, plugins and themes with WordPress.

This article is divided into four parts:

1. [Why should you (still) care about WordPress?](#why-should-you-still-care-about-wordpress)
2. [WordPress’ modern parts](#wordpress-modern-parts)
3. [How to get around all that other legacy?](#how-to-get-around-all-that-other-legacy)
4. [The last remaining caveats](#why-should-you-still-care-about-wordpress)
5. [Conclusion](#conclusion)

So if you’re either stuck working on a WordPress website, or you think that a huge part of the web shouldn’t be a blind spot in your knowledge; it’s time to pay attention.

## Why should you (still) care about WordPress?

WordPress’ market share is an obvious reason to keep an eye on it. It’s the most used CMS by far, and that’s because it’s easy to set up, relatively cost-effective and because it’s widely supported by developers, agencies and hosting companies. This ease of use attracts a lot of people clicking together a site. And while this is a perfectly valid way to get a site up and running, it isn’t what most developers are looking for in a platform. The fact that WordPress is used this way, however, doesn’t mean it _has_ to be used this way.

WordPress is the biggest content-creating platform where you are still owner of your own content. A service like Medium, for instance, is currently using other people’s content to sell their subscriptions. It’s one of the reasons why Signal vs Noise, the well-known blog by the people at Basecamp, switched back to WordPress. It’s also the reason many big content corporations like Time and CNN are fans of the platform.

If content ownership isn’t important to you, maybe money is: Premium WordPress themes and plugins are million to billion dollar markets. While the products are relatively cheap, they’re sold to a large volume of clients. A big bonus is that these clients are getting more used to subscription models. This means that they are getting comfortable in continuously paying for updates and support on the plugins and themes they buy, making premium WordPress themes and plugins a very stable business.

WordPress is committed to backwards compatibility; they don’t want to break millions of websites. If you’re new to developing for WordPress this can be the cause of a lot of development grievances. It can definitely make your initial development-run a lot harder. But that backwards compatibility also has a positive effect: after the initial build time your project will require a lot less updates to stay compatible. This is true for websites, but also for plugins and themes. As a testament to this feature: I personally had to update a WordPress website that was running version 2.9, which was ten years old at the time. The website kept running without issues after I updated everything. That’s pretty remarkable in a world where an `npm update` command will probably break my application.

## WordPress’ Modern Parts

In 2013 a strapping young WordPress developer by the name of Ryan McCue started working on a modern REST API for WordPress. Although It wouldn’t be added into WordPress core until much later, this would prove to be the spark for much of WordPress’ modern nuts and bolts.

## REST API

The WordPress REST API allows you to basically do anything with WordPress’ content, media and settings in a predictable and RESTful way. It’s a breath of fresh air for anyone who’s accustomed to the many different PHP-based API’s that WordPress offers. Requests are made to endpoints using a request method and output is provided in the form of JSON objects. Authentication for the baked-in endpoints happens automatically.

Now the endpoints that come shipped with WordPress core are pretty basic. Content-wise they only allow you to fetch the default post-types (posts and pages). Luckily adding a new endpoint doesn’t require a lot of code:

```
namespace MyPlugin;

class Endpoint{

    /**
        * Register this endpoint
        */
    public function register(){
        register_rest_route(
            'my-plugin/v1',
            '/my-endpoint',
            [
                'methods' => 'GET',
                'callback' => [ $this, 'callback' ]
            ]
        );
    }

    /**
        * Provide the callback
        */
    public function callback(){
        return 'Hello World!';
    }
}
```

In this example we register an endpoint called “my-endpoint” in the REST namespace “my-plugin”. This means that when we make a GET request to the url `https://example.com/wp-json/my-plugin/v1/my-endpoint`, we’ll get the “Hello World” string back.

The callback can return pretty much anything you’d like. Anything more complicated than a string will automatically be converted into a JSON response.

If you like to process POST, PULL or DELETE requests, you can just change the method you’ve registered the rest route with:

```
/**
* Register this endpoint
*/
public function register(){
    register_rest_route(
        'my-plugin/v1',
        '/custom-delete-function',
        [
            'methods' => 'DELETE',
            'callback' => [ $this, 'callback' ]
        ]
    );
}

/**
* Provide the callback
*/
public function callback( \WP_REST_Request $request ){

    $params = $request->get_json_params();
    if( wp_verify_nonce( $params['my_nonce'], NonceHelper::DELETE_ACTION ) ){
        wp_delete_post( $params['post_id'] );
    }

    return null;
}
```

This example adds a DELETE Rest-method and checks if the nonce accompanying the request is valid with a class called `NonceHelper`, that isn’t included in this example. If the nonce is valid, it deletes the post as requested.

If GraphQL is more your jam, you can also look into [WP GraphQL](https://www.wpgraphql.com/), which adds a full GraphQL to your installation. It's well documented and very developer-friendly.

## Modern Javascript in WordPress

Built on top of this REST API is a layer of modern JavaScript. Automattic, the company behind the dot-com version of WordPress, started moving the entire WordPress admin interface for their platform over to a REST-api powered React app in 2014. They released this app as a completely open source project called [Calypso](https://github.com/Automattic/wp-calypso).

Although the project is very popular and sees continued improvement, it will not be added to WordPress core. It’s a separate app for managing your WordPress site. So if you’re creating a new website and you’re looking for a solid CMS but with a modern and extendable interface, you might be right picking Calypso and WordPress.

However, Calypso is only a small part of how modern JavaScript found it’s way into WordPress. The big project in this space currently is the relatively new WordPress editor dubbed “Gutenberg”.

## Gutenberg

Matt Mullenweg, co-founder of WordPress, announced this full JavaScript content editor based on React components during his keynote at Europe’s biggest WordPress conference in 2017. The deadline of December 2017 proved to be overly ambitious and eventually got pushed back a full year. The current version of Gutenberg available in WordPress is stable and fast. Like any piece of software, though, Gutenberg has its fair share of open issues, it will continue to see big improvements over the coming years.

It’s being developed as a WordPress plugin and will get committed to WordPress core incrementally. That way it’s a lot easier for both the core and Gutenberg teams to keep iterating. It’s really build with extensibility in mind. The editor revolves around blocks of content that the admin user specifies. Adding or removing blocks for certain types of content is relatively easy, if you’re familiar with modern JavaScript and React. Here’s an example of a custom Gutenberg block:

```
//fetch certain functions and components from
//core WordPress JS libraries:
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { RichText } = wp.editor;

registerBlockType(
    'namespace/block',
    {
        title: "__( 'Custom Block', 'namespace' ),"
        description: __( 'Adds a custom block', 'namespace' ),
        category: 'common',
        attributes: {
            hello: {
                type: 'string',
                selector: 'h4',
                default: 'Hello World'
            }
        },
        edit( props ){

            const { attributes: { hello }, className, setAttributes } = props;

            return (
                <section className={ className }>
                    <RichText
                        tagName="h4"
                        value={ hello }
                        placeholder={ __('Write your hello world', 'namespace') }
                        onChange={ (value) => setAttributes({ hello: value }) }
                    />
                </section>
            )
        },
        save( props ){

            const { attributes: { hello }, className } = props;
            return (
                <section className={ className }>
                    <h4>{hello}</h4>
                </section>
            )
        }
    }
);
```

In this example we use the native function of `registerBlockType` to create a “Hello World” block. The only thing this block does is create an input with the default value “Hello World” and echo that input’s eventual value in a `<section>` and `<h4>`.

Let’s loop through that code really quick:

1. It registers the block with a certain title and description. It also adds it to a block category
2. It lists all attributes of the block. In this case a string by the name of ‘hello’
3. It renders a field in the `edit()` function, dictating what to show in the WordPress admin
4. It renders the section in the `save()` function, telling WordPress how to save the data in this block.

You may have noticed the reference of the `<RichText>` component. This is an example how you can easily add your own (React) components to Gutenberg for custom functionality and extensibility. You could always break down the `edit()` and `save()` function into smaller components if they get too complicated, for instance.

For getting to know Gutenberg’s new APIs and gizmos I’d recommend [the Gutenberg development course by Zac Gordon](http://gutenberg.courses/). I also created a simple [boilerplate plugin to write your own Gutenberg blocks, which can be found on Github](https://github.com/lucprincen/my-plugin).

## WP CLI

WP CLI is a command line tool for WordPress. It was started in 2011 by [Cristi Burcă](https://scribu.net/) and within a year was a very popular project in the WordPress ecosystem. It allows you to do everything the WordPress admin UI can do and more, all from the comfort of your command line. The best part about WP CLI is that you’re able to chain commands together and, for instance, update all plugins at once, regenerate all media files to work with new crops or flush those pesky rewrites. If you’re considering working with WordPress again, I would always include WP CLI in your toolbox.

Just as Gutenberg, WP CLI was build with extensibility in mind. I include some custom WP CLI commands in most of my projects nowadays. These commands either simplify development or automate certain tasks, like fetching data from an external API.

Here’s an example of a WP CLI class registering two commands:

```
namespace MyPlugin\Cli;

use WP_CLI;
use WP_CLI_Command;

/**
* Register the various WP CLI commands
*/
class Register extends WP_CLI_Command{

/**
    * Migrate database tables
    *
    * @return void
    */
    public function migrate()
    {
        ( new \MyPlugin\Database\Migrations() )->run();
    }
    /**
    * Fetch external data plugin
    *
    * @return data
    */
    public function fetch_data()
    {
        ( new \MyPlugin\Api\Controller() )->fetch_data();
    }
}

WP_CLI::add_command( 'myplugin', 'MyPlugin\Cli\Register' );
```

This example adds the command `myplugin` to your WP CLI command list. It registers two sub-commands `migrate` and `fetch_data`, which are just the function names of this class. Both those functions neatly defer their work to different classes. If you have tasks in the WordPress admin that can be automated, or triggered by a single button-click, it’s worth writing a small command for them, so you can quickly run them from the terminal.

## How to get around all that other legacy?

Despite of all the modern JavaScript and a consistent and easy way to handle your data-streams, WordPress is still a legacy system build upon a sixteen-year old foundation. We need some outside help to get around all of this aging technology.

## Embracing modern PHP

Just like WordPress, PHP doesn’t have a good name when it comes to modern development. It’s still widely known as the tinkering script-kiddy language it was ten years ago. Lucky for us, PHP has made great strides in the past couple of years. Ever since 5.3 we’ve got a full and modern OOP stack with namespaces, interfaces and abstract classes. And that has only gotten better with the various PHP 7 releases.

The examples used earlier in this article all are set up with namespaces and structured in a modern way, a thing still sorely lacking in most code examples in the WordPress docs. If you’d like to change that, the [WordPress docs team](https://make.wordpress.org/docs/) is always looking for talented people to update documentation.

Stuff like [autoloaders based on namespaces](https://thewebtier.com/php/psr4-autoloading-php-files-using-composer/), proper [php unit testing](https://phpunit.de/) along with [fake data](https://github.com/fzaninotto/Faker) are all becoming commonplace among PHP developers.

## Dependency management with Composer

Another great addition of modern PHP is the use of dependency management. Composer is an open source project that enables you to load in different PHP libraries for use in your own project. Most of the available open source packages are available via Packagist. WordPress plugins that are available in the public WordPress plugin directory are automatically available in Composer via the excellent [wpackagist](https://wpackagist.org/) service. Most of your other required (legacy) packages can be loaded in through Composers’ VCS option.

There’s still an asterisk in working with composer in WordPress, though. This depends on the scope of what you’re trying to build, but a single plugin should deal with vendor packages in a different way than a full website project. One of the more interesting projects in this space is [Mozart by Coen Jacobs](https://coenjacobs.me/projects/mozart/), which tries to have all dependencies in a WordPress install play nice with each other.

## SVN to GIT

The default code repository of WordPress is SVN. The entire plugin and theme repository runs on this, as do all (automated) updates in the WordPress interface. Personally, I don’t really like SVN. The tools and ecosystem surrounding SVN simply aren’t as good as the tools surrounding Git. Luckily there are plenty of workarounds available for this. If you’re planning on releasing a plugin to the WordPress repository, but you’d like to maintain it using Github, use the excellent [Github actions for WordPress by 10up](https://github.com/10up/actions-wordpress). If you don’t really like Github there’s other excellent options like this [Git to SVN deploy script by Gary Jones](https://github.com/GaryJones/wordpress-plugin-svn-deploy).

Getting this workaround up-and-running is a lot faster than waiting for WordPress core to start adopting Git, I can assure you that much.

## Deploying WordPress

Deployments in the WordPress ecosystem still depend on (s)FTP for a large part of the community. It’s one of the reasons why WordPress is known as an amateur platform. But that doesn’t mean that SFTP is the only option for deployment. You’re more than welcome to use regular GIT for deploying your WordPress websites, for instance. Capistrano is another interesting option and there’s also plenty of bash-tools available that work with WP CLI.

There are a bunch of WordPress-only hosts that also have excellent deployment options, like [WP Engine’s custom GIT option](https://wpengine.com/git/), that also runs your tests and checks for compatibility issues with all other code that is running outside of your repo.

How you deploy really depends on how you handle updates within WordPress, so let’s look into that as well.

## Dealing with updates

So the big question in dealing with updates is if you are okay with your users updating plugins themselves through the admin. Giving your users that option is a smart and safe thing to do if you know and trust the third-party code you’re working with.

If you’re not comfortable with handing over control of your stack to people logging into WordPress admin, then it’s possible to take that power away from them. However, stopping updates altogether isn’t a viable option due to security issues. In this case updates should regularly happen through the command-line or your deploys. In any case I’d recommend leaving third party code (like plugins) out of your repository and using either composer and git hooks or a WP CLI method to keep your website up-to-date. The best solution is definitely dependent on what you’re building and how many third party packages you would need.

## The last remaining caveats

Despite all of these improvements to the WordPress ecosystem, there are still areas that will confront you with WordPress’ age and the fact that you’re working with legacy software. There really aren’t that many great solutions for these issues, but I’ll try to ease the pain as much as possible in this chapter.

## Data handling and database structure

WordPress introduces thirteen database tables on install. It doesn’t provide a way for developers to create new ones and mainly focuses on adding APIs for dealing with the existing tables. WordPress suggests to put every piece of extra information surrounding posts, terms and users in so called `meta` tables. These tables contain an `id` to the original object, and a `key` and `value` field. This data model might be flexible, but it’s far from optimized and it will get abused in a lot of cases.

There are great options out there for creating your own data models on top of the existing ones. [This library incorporating Laravel Eloquent into WordPress](https://github.com/corcel/corcel) comes to mind. There’s also a [beta plugin available that will add custom database tables to Woocommerce](https://github.com/woocommerce/woocommerce-product-tables-feature-plugin) that greatly improves speed, but other than that there aren’t a lot of out-of-the-box fixes for this at the moment.

There’s a lot in development surrounding Gutenberg’s data handling that is pretty exciting though and seeing as Gutenberg is eventually going to dictate every aspect of WordPress, this will inevitably lead to better performance and a cleaner data-model. Just don’t hold your breath until then.

## The ecosystem

Science-fiction writer Theodore Sturgeon was asked once why 90% of the science-fiction novels that got published where crap. To which he responded; “90% of everything is crap”. This idea is commonly referred to as “Sturgeon’s Law” and it is very much in effect when it comes to WordPress themes, plugins and other WordPress-related work.

This can give the entire ecosystem an amateur-feel and makes it really hard for people trying to figure out good WordPress-based solutions. There isn’t really a great answer for this except asking other people more familiar with WordPress.

Both the [international](https://make.wordpress.org/chat/) and the [Dutch WordPress slack-channels](https://nl.wordpress.org/team/) are filled with people who work with WordPress on a professional level. These channels are a great place to ask a question or two about which plugin is right for the job.

## Conclusion

While WordPress is in a lot of ways an ancient piece of software, there are a lot of positive things happening in the WordPress ecosystem. It might be fun to completely write off WordPress due to its age, but its market share keeps growing. So why not look a bit further at WordPress’ modern bits and re-evaluate if this really can’t be part of your toolbox? If not, then no worries; at least you’ve read up on the newer capabilities of the platform and can make a more informed decision for your next project.

### About Luc Princen

/adventskalender/luc-princen.jpg
Luc Princen is an independent developer and designer from The Netherlands specializing in WordPress and frontend development. He loves open source, elegant code, fast load times, Dungeons & Dragons and playing the occasional (grand) strategy game. You can find him on Twitter with the handle [@LucP](https://twitter.com/LucP).
Luc's donation will go to Dutch charity _Stem op een Vrouw_.
