<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title lang="en">Fronteers 2015 sessions · Fronteers</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="stylesheet" href="/_css/fronteers.css?v=2023">
  <link rel="icon" href="/favicon.ico">
  <link rel="alternate" type="application/rss+xml" href="http://feeds.feedburner.com/FronteersWeblog" title="Fronteers weblog">
  <link rel="alternate" type="application/rss+xml" href="http://feeds.feedburner.com/FronteersWeblogLaatsteReacties" title="Fronteers weblog: laatste reacties">
  <link rel="alternate" type="application/rss+xml" href="http://feeds.feedburner.com/FronteersBijeenkomsten" title="Fronteers bijeenkomsten">
  <link rel="alternate" type="application/rss+xml" href="http://feeds.feedburner.com/FronteersVacaturebank" title="Fronteers vacaturebank">
  <link rel="alternate" type="application/rss+xml" href="http://feeds.feedburner.com/FronteersWorkshops" title="Fronteers workshops">
  <link rel="me" href="https://front-end.social/@fronteers">
  <link rel="alternate" type="application/rss+xml" href="http://feeds.feedburner.com/FronteersCongres" title="Fronteers conference">
  <link rel="shortlink" href="http://frnt.rs/p1334">
  <style>
   /* Fronteers 2014 styling */
   #main { margin: 0 3em 0 21em; }
   #submenu { max-width: 19em; top: 10em; left: 2em; }
    #submenu h2, #submenu ul li { margin-right: 2em; margin-left: 0; }
    #submenu ul li { padding-left: 0; }
    #submenu div { margin-bottom: 2em; font-size: 1.25em; line-height: 1.5; }
    #submenu ul li.mark { background-image: url(/_css/img/marker-left.png); margin-right: 0; background-position: 100% 9px; }
   div.section { overflow: auto; }
   div.section * + h2 { margin-top: 2.4em; }
   div.section * + h3 { margin-top: 2.4em; }
   div.section h2 + h3 { margin-top: 10px; }
   div.section * + h4 { margin-top: 1.5em; }
   div.section p + p { margin-top: 1em; }
   div.section p.figure:last-child { margin-top: 2rem; margin-bottom: -3rem; }
   div.section iframe { margin: 1em 0 !important; }
   .section { font-size: 1.2em; }
   .speaker-section { overflow: hidden; }
   @media all and (max-width: 55em) {
    #main { margin: 0 3em 0 21em; }
    #submenu { position: absolute; -webkit-columns: 1; -moz-columns: 1; columns: 1; margin: 2em 2em 0 0; }
   }
   @media all and (max-width: 37em) {
    #main { margin: 0; }
    #submenu { width: 100%; max-width: 100%; position: static; }
     #submenu h2, #submenu ul li { margin-left: 2em; }
   }
   /* Fronteers 2015 styling */
   html { background-image: url(/_css/img/fronteers15/fronteers15-bg.jpg); }
   #main h1 a { background-color: transparent; background-image: url(/_css/img/fronteers15/fronteers15-header.png); background-repeat: no-repeat; background-size: contain; height:135px; margin-left: -7em; }
    #main h1 a img { display: none; }
   @media (min-width: 1300px) {
    /* Pull the site's content to the left */
    #submenu { left: -6em; }
    #main { margin: 0 11em 0 13em; }
    /* Show extra illustration block on the right */
    #container::after { content: ''; display: block; background-image: url(/_css/img/fronteers15/fronteers15-mascotte.png); background-position: right top; background-size: contain; position: absolute; top: 130px; right: -255px; width: 215px; height: 470px; }
   }
  </style>
 </head>
 <body id="fronteers-nl">
  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>Fronteers 2015 sessions</h2>
    </div>
    <div class="section odd" lang="en">
     <h3 id="scott-jehl"><a href="/congres/2015/sessions/delivering-responsibly-scott-jehl">Delivering Responsibly</a> - <a href="/congres/2015/speakers#scott-jehl">Scott Jehl</a></h3>
     <p>Responsive Design allows us to create flexible user interfaces that support the widest possible audience with a single front-end codebase. But in embracing the ever-increasing contexts in which our sites are used, performance and accessibility must remain our highest priorities; we must continually question each code addition, and improve our delivery and application techniques to ensure they’re best serving users’ needs.</p>
     <p>This talk will explore the challenges of delivering fast and broadly-accessible websites and offer approaches that dramatically improve performance, usability, access, and sustainability.</p>
     <p>I’ve been spending the past two years talking and writing about some of the newest CSS modules for layout. In the comments of any article, and in questions after any presentation, I see people writing off these new techniques due to lack of support in certain browsers.</p>
    </div>
    <div class="section" lang="en">
     <h3 id="rachel-andrew"><a href="/congres/2015/sessions/but-what-about-old-browsers-rachel-andrew">But What About Old Browsers?!? Embracing New CSS When Your Users Are Stuck in the Past</a> - <a href="/congres/2015/speakers#rachel-andrew">Rachel Andrew</a></h3>
     <p>Put your worries about browser support to one side for a little while as I introduce you to the newest specifications used for layout. We’ll then take a look at realistic ways in which you can start to implement some of the shiny goodness today.</p>
    </div>
    <div class="section odd" lang="en">
     <h3 id="chris-eppstein"><a href="/congres/2015/sessions/lightning-fast-sass-chris-eppstein">Lightning Fast Sass</a> - <a href="/congres/2015/speakers#chris-eppstein">Chris Eppstein</a></h3>
     <p>Sass has revolutionized how we write our stylesheets, but you may have found yourself frustrated by waiting for stylesheets to compile. In this talk Sass core developer, Chris Eppstein, will give you ways to speed up your stylesheets and get your app's build running lighting fast. Learn how to use libsass in your javascript asset pipeline, how to use Eyeglass to package and consume sass modules with NPM, and how to write your own custom Sass functions in Javascript.</p>
    </div>
    <div class="section" lang="en">
     <h3 id="soledad-penades"><a href="/congres/2015/sessions/hands-on-web-audio-soledad-penades">Hands-On Web Audio</a> - <a href="/congres/2015/speakers#soledad-penades">Soledad Penadés</a></h3>
     <p>We all know about the <code>&lt;audio&gt;</code> tag, but the Web Audio API still remains this mystical creature very few people dare to get close to.</p>
     <p>In this talk we'll discuss how Web Audio can greatly enhance your app performance and how it will enable you to build sophisticated and efficient tools with very little effort. We'll also cover debugging and interacting with other web APIs.</p>
    </div>
    <div class="section odd" lang="en">
     <h3 id="anna-debenham"><a href="/congres/2015/sessions/front-end-style-guides-anna-debenham">Front-end Style Guides</a> - <a href="/congres/2015/speakers#anna-debenham">Anna Debenham</a></h3>
     <p>After interviewing a dozen people with <a href="https://twitter.com/brad_frost">Brad Frost</a> for their <a href="http://styleguides.io/">podcast on Style Guides for the web</a>, Anna has collated all their findings for this talk on the different kinds that are out there, how they're built, what works (and what doesn't), and what makes them such a useful tool.</p>
     <p>She'll give you a tour of some style guides built by companies with a range of different needs and requirements, and you'll learn how to build your own using a range of possible technologies.</p>
     <p>Most importantly, she'll show you how to make sure they don't get forgotten at the end of the project, and ways that it can be kept up to date as living documentation well after a site has gone live.</p>
    </div>
    <div class="section" lang="en">
     <h3 id="alice-bartlett"><a href="/congres/2015/sessions/what-is-the-business-case-for-accessibility-alice-bartlett">What is the Business Case for Accessibility?</a> - <a href="/congres/2015/speakers#alice-bartlett">Alice Bartlett</a></h3>
     <p>&quot;What is the business case for accessibility?&quot; will examine the various business cases for making websites accessible. It will present their strengths and weaknesses and conclude with some advice for getting accessibility into the things you're building.</p>
    </div>
    <div class="section odd" lang="en">
     <h3 id="rejo-zenger"><a href="/congres/2015/sessions/freedom-can-be-designed-rejo-zenger">Freedom Can Be Designed</a> - <a href="/congres/2015/speakers#rejo-zenger">Rejo Zenger</a></h3>
     <p>The small group of French revolutionaries were able to take control of Paris by using the small and winding streets. Napoleon III didn't want that to happen again, so he created the large boulevards that we love today.</p>
     <p>Nowadays, our built environment is largely made out of software. Developers directly influence the behaviour of their users through what the interface allows people to do with their software. A perfect interface isn't a solution for all software problems, but we do know that even the best algorithms are useless if they are not made accessible through an attractive and intuitive interface. This is essential when creating technology that is meant to protect our freedoms.</p>
     <p>In his talk Rejo Zenger will show how frontend developers and user interface designers have an important responsibility in protecting freedom in our society.</p>
    </div>
    <div class="section" lang="en">
     <h3 id="primate"><a href="/congres/2015/sessions/walking-the-tightrope-between-mediocrity-and-bankruptcy-primate">Walking the Tightrope Between Mediocrity and Bankruptcy</a> - <a href="/congres/2015/speakers#primate">Espen Brunborg, Gordon McLachlan, Bart Oleszczyk</a></h3>
     <p>Why does one set up a digital agency in the middle of a recession? Because one thinks one can do better. As it turns out, 'doing better' – marrying great design and progressive development whilst keeping clients happy and budgets lean – is a tightrope walk between delivering uninspired work and going out of business. Join us as we review what we've learned over the past four years. There will be tears! There will be triumph! There will be monkeys!</p>
    </div>
    <div class="section odd" lang="en">
     <h3 id="sally-jenkinson"><a href="/congres/2015/sessions/an-introduction-to-open-data-sally-jenkinson">An Introduction to Open Data</a> - <a href="/congres/2015/speakers#sally-jenkinson">Sally Jenkinson</a></h3>
     <p>In a world where many of our digital spaces are becoming more closed than ever, open data is a concept that is rapidly on the rise.</p>
     <p>In this talk we'll explore what open data is (and what it isn't), and why we should care about it. We'll look at how you can introduce it into your projects with regards to practical publication and consumption, and discuss some useful tools and reference points.</p>
     <p>Open data isn't just dry and technical - it gives us great scope to be creative, and throughout this talk we'll go through some of the amazing things that it has been used for globally in the hope that it will inspire you to create something amazing yourself.</p>
    </div>
    <div class="section" lang="en">
     <h3 id="wes-bos"><a href="/congres/2015/sessions/modern-workflow-tooling-for-front-end-developers-wes-bos">Modern Workflow + Tooling for Front-end Developers</a> - <a href="/congres/2015/speakers#wes-bos">Wes Bos</a></h3>
     <p>How do you create an efficient workflow that helps you build better and faster websites or web apps? What are the tools you should be using? How do they all fit together?</p>
     <p>Front end development is changing at a rapid pace and we are seeing a flurry of new tools and suggested workflows. While these tools are supposed to make web development easier, we often find ourselves overwhelmed and unsure of where to start.</p>
     <p>This talk will explore and simplify a modern workflow for a front end developer. Diving into what these tools are, how they fit together and which ones you should be using. Using tools such as Gulp, Browserify, Webpack, NPM, PostCSS, Sublime Text and the Command Line, you'll leave this talk with a newfound sense of comfort in our current development landscape.</p>
    </div>
    <div class="section odd" lang="en">
     <h3 id="jake-archibald"><a href="/congres/2015/sessions/modern-progressive-enhancement-jake-archibald">Modern Progressive Enhancement</a> - <a href="/congres/2015/speakers#jake-archibald">Jake Archibald</a></h3>
     <p>Just because it requires JavaScript, doesn't make it wrong, but we often use JavaScript to engineer-away the parts of the web that are already better than native. Let's take a look at some real-world JavaScript-heavy applications, and how they can regain the performance of the web without losing features. Then, let's tackle the area progressive enhancement has largely ignored: Connectivity.</p>
    </div>
    <div class="section" lang="en">
     <h3 id="dominic-szablewski"><a href="/congres/2015/sessions/jsmpeg-by-dominic-szablewski">jsmpeg: Why a JavaScript Video Decoder Actually Makes Sense</a> - <a href="/congres/2015/speakers#dominic-szablewski">Dominic Szablewski</a></h3>
     <p>Let's be honest: A JavaScript MPEG1 decoder sounds like a rather silly idea, but there are real world use cases where jsmpeg shines. In this talk I want to show some of the things that you can do with jsmpeg that you can't do with the HTML5 &lt;video&gt; Element. I will also talk about how WebGL was used to speed up the decoding and discuss other tricks that improved performance.</p>
    </div>
    <div class="section odd" lang="en">
     <h3 id="christian-heilmann"><a href="/congres/2015/sessions/christian-heilmann-of-gaps-fillers-and-empty-spaces">Of Gaps, Fillers and Empty Spaces</a> - <a href="/congres/2015/speakers#christian-heilmann">Christian Heilmann</a></h3>
     <p>Web development is in a state of confusion. We feel we are not innovating enough, we are let down by browsers and OSes and we try to fill all these holes with home made remedies. It's time to look at what we have, what we lost and what is a waste of our time.</p>
    </div>
    <div class="section" lang="en">
     <h3 id="phil-hawksworth"><a href="/congres/2015/sessions/static-sites-go-all-hollywood-phil-hawksworth">Static Sites Go All Hollywood</a> - <a href="/congres/2015/speakers#phil-hawksworth">Phil Hawksworth</a></h3>
     <p>The popularity of building web sites with static site generators is on the rise. Their reduced complexity, easier compliance, cheaper hosting, and other benefits are getting people’s attention, but they do have limits.</p>
     <p>This talk will explore how we can break through some of those limits with the use of a new breed of hosted tools and services. We’ll look at practical examples of how a static site generator can help deliver a modern web development workflow, support a living styleguide, and also pack the kind of dynamic punch that you’d only think possible from bigger application stacks.</p>
    </div>
    <div class="section odd" lang="en">
     <h3 id="remy-sharp"><a href="/congres/2015/sessions/the-art-of-debugging-remy-sharp">The Art of Debugging</a> - <a href="/congres/2015/speakers#remy-sharp">Remy Sharp</a></h3>
     <p>Pretentious title aside, Remy will share how he approaches debugging, techniques that have become muscle memory, old tired and tested methods and (hopefully) show off a neat trick or two that can be achieved with today's state of the art debuggers.</p>
    </div>
    <div class="section" lang="en">
     <h3 id="lisa-welchman"><a href="/congres/2015/sessions/digital-governance-lisa-welchman">Digital Governance</a> - <a href="/congres/2015/speakers#lisa-welchman">Lisa Welchman</a></h3>
     <p>Do you spend a lot of time building products and experiences just to have them be poorly implemented or rejected by various factions in your organization? Sometimes the hardest part of your job is getting your whole organization to fall in line and holistically develop and implement a consistent experience. Fighting about control over web pages, mobile interfaces, and every other aspect of an organization’s online presence can leave one frustrated and fatigued.</p>
     <p>Speaking about Digital Governance, Lisa clarifies organization roles and decision-making structures to help teams collaborate effectively around digital channels. Lisa will discuss good practice for team structures and offers advice on how to best gain the support from senior managers and executives.</p>
    </div>
   </div>
   <div id="submenu">
    <div id="conference-menu" lang="en">
     <h2>Fronteers 2015</h2>
     <ul>
      <li><a href="/congres/2015">Home</a></li>
      <li><a href="/congres/2015/news" title="Fronteers Conference 2015 News">News</a></li>
      <li><a href="/congres/2015/schedule" title="Fronteers 2015 schedule">Schedule</a></li>
      <li class="current"><a href="/congres/2015/sessions" title="Fronteers 2015 sessions" class="current">Sessions</a></li>
      <li><a href="/congres/2015/speakers" title="Fronteers 2015 speakers">Speakers</a></li>
      <li><a href="/congres/2015/venues" title="Fronteers 2015 venues">Venues</a></li>
      <li><a href="/congres/2015/tickets" title="Fronteers 2015 tickets">Tickets</a></li>
      <li><a href="/congres/2015/workshops" title="Fronteers 2015 workshops">Workshops</a></li>
      <li><a href="/congres/2015/jam-session" title="Fronteers 2015 Jam Session">Jam Session</a></li>
      <li><a href="/congres/2015/fronteers-2015-typowalk" title="Fronteers 2015 typowalk">Typowalk</a></li>
      <li><a href="/congres/2015/attendees" title="Fronteers 2015 attendees">Attendees</a></li>
      <li><a href="/congres/2015/sponsorship-fronteers-2015" title="Fronteers 2015 Sponsorship">Sponsorship</a></li>
      <li><a href="/congres/2015/colophon" title="Fronteers 2015 team">Team</a></li>
      <li><a href="/congres/2015/contact" title="Fronteers 2015 contact information">Contact</a></li>
      <li><a href="/congres/2015/code-of-conduct" title="Fronteers 2015 Code of Conduct">Code of Conduct</a></li>
     </ul>
    </div>
    <div lang="en">
     <h2>Elsewhere</h2>
     <ul>
      <li><a href="https://twitter.com/FronteersConf">Twitter</a></li>
      <li><a href="https://vimeo.com/fronteers/videos">Vimeo</a></li>
      <li><a href="https://itunes.apple.com/nl/podcast/fronteers-videos/id1136212068?l=en">Podcast on iTunes</a></li>
      <li><a href="http://webchat.freenode.net/?channels=fronteers">IRC</a></li>
     </ul>
    </div>
    <div lang="en">
     <h2>Previous years</h2>
     <ul>
      <li><a href="/congres/2014">2014</a></li>
      <li><a href="/congres/2013">2013</a></li>
      <li><a href="/congres/2012">2012</a></li>
      <li><a href="/congres/2011">2011</a></li>
      <li><a href="/congres/2010">2010</a></li>
      <li><a href="/congres/2009">2009</a></li>
      <li><a href="/congres/2008">2008</a></li>
     </ul>
    </div>
    <div lang="en">
     <h2>Fronteers</h2>
     <ul>
      <li><a href="/about">About Fronteers</a></li>
      <li><a href="/">Homepage (NL)</a></li>
     </ul>
    </div>
    <div id="feeds" lang="en">
     <h2>Stay updated</h2>
     <ul>
      <li><a href="https://twitter.com/FronteersConf">Twitter</a></li>
      <li><a href="https://feeds.feedburner.com/FronteersCongres" type="application/rss+xml">RSS</a></li>
     </ul>
    </div>
   </div>
  </div>
  <script>
   (function() {
    "use strict";
    var i, j, tellCSS;
    var antiSpamElements = document.querySelectorAll && document.querySelectorAll('.spam-check');
    if (antiSpamElements) {
     for (i = 0; i < antiSpamElements.length; i++) {
      antiSpamElements[i].value = 'Nee';
      antiSpamElements[i].parentNode.style.display = 'none';
     }
    }
    var lis = document.querySelectorAll && document.querySelectorAll('li.current');
    if (lis) {
     var markers = [];
     for (i = 0; i < lis.length; i++) {
      var li = lis[i], ul = li.parentNode, top = li.offsetTop;
      if (ul.parentNode.tagName.toLowerCase() == 'li') {
       ul = ul.parentNode.parentNode;
      }
      var marker = document.createElement('li'), as = ul.querySelectorAll('a'), a;
      markers.push({
       top: top,
       marker: marker,
       mark: function(element) {
        this.marker.style.webkitTransform = this.marker.style.mozTransform = this.marker.style.msTransform = this.marker.style.transform = 'translateY(' + (element.offsetTop - this.top) + 'px)';
       },
       unmark: function() {
        this.marker.style.webkitTransform = this.marker.style.mozTransform = this.marker.style.msTransform = this.marker.style.transform = 'translateY(0)';
       }
      });
      for (j = 0; j < as.length; j++) {
       a = as[j];
       a.setAttribute('marker', i);
       a.onmouseover = a.onfocus = function() {
        markers[this.getAttribute('marker')].mark(this.parentNode);
       };
       a.onmouseout = a.onblur = function() {
        markers[this.getAttribute('marker')].unmark();
       };
       a.onclick = function() {
        markers[this.getAttribute('marker')].unmark = function(){};
       }
      }
      marker.innerHTML = '<span>​</span>';
      marker.className = 'mark';
      marker.style.top = top + 'px';
      ul.appendChild(marker);
     }
     tellCSS = true;
    }
    if (tellCSS) {
     document.documentElement.className = 'js-enabled';
    }
   })();
  </script>
 </body>
</html>
