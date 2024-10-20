<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>jQuery and the Open Source Process by John Resig · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p542">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>jQuery and the Open Source Process by John Resig</h2>
     <h3>Video</h3>
     <video width="640" height="360" src="/_downloads/2011/john-resig-jquery-and-the-open-source-process.webm" controls>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2011/john-resig-jquery-and-the-open-source-process.webm">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="http://vimeo.com/32957711">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2011/john-resig-jquery-and-the-open-source-process.webm">Download video</a> (WebM, 131MB)</li>
     </ul>
     <h3>Transcript</h3>
     <p>John Resig: [0:05] I want to thank everyone for coming out today. I really appreciate it. [0:10] Today I wanted to talk a little bit about some of the things that we do in the jQuery project to essentially make ourselves more open and how, I think, that has effected the course of jQuery over time and how it's made us a better piece of code in the end.</p>
     <p>[0:31] It's not directly about code. I'm not talking about if statements and stuff like that. But it's like all the stuff that makes your code good in the end.</p>
     <p>[0:41] I wanted to show some stuff real quick. This is our Google Analytics for the jQuery.com domain name, comparing this year to last year. We're currently at 347 million page views a year now, over 100 million visitors. But what's pretty cool is that we are just now breaking 50 percent of all websites using jQuery, which is pretty awesome.</p>
     <p>[applause]</p>
     <p>[1:09] I just have to change the refresh rate. Just a second.</p>
     <p>[1:28] OK. Wait, oops. That's not what I want. Right.</p>
     <p>[1:35] OK, so we just broke 50 percent of all websites using jQuery, which is awesome, but what's even more awesome is that we're now more popular than Flash.</p>
     <p>[applause]</p>
     <p>[1:45] Technically speaking, 49.5 percent of websites use jQuery, 48 percent use Flash. It's a very small, one percent, but... I don't have the chart here for Flash, but jQuery's like this and Flash is like that. It's kind of a good feeling. Not that I'm trying to kill Flash, per se, but it's nice nonetheless.</p>
     <p>[2:13] OK, so at least in the jQuery project, there are a number of things that we feel are important. These are sort of the things that I've felt have been important since the very beginning when I first started working on jQuery back in 2005.</p>
     <p>[2:27] Obviously, there are the technical concerns. I think, as developers, we understand the technical concerns the best. We can generally understand when an API is good versus an API that's bad. At least for me, when I was in school I had to do Java stuff. It was create factory, factory, factory. It was just a mess. I knew I never wanted to build an API like that.</p>
     <p>[2:54] At the same time, I think we all have a really good understanding of things like code quality. We know when code is easy to understand, and when it's written well, and things like that.</p>
     <p>[3:06] But there's the things that are harder to understand, I feel, because they don't directly relate to code. The things like community. How do you build community around a code base? How do you interact with your users? How do you provide them the resources that they need in order to use your code? Those are the things I've put a lot of attention into in jQuery. I feel it's been a better code base because of it.</p>
     <p>[3:32] The way I boil it down is that, really, you're trying to get your users engaged and hooked as quickly as possible and give them all the resources they need to get their job done, whatever that job may be. Ultimately, you need to put yourself in your user's shoes.</p>
     <p>[3:54] The reason why I wanted to give this talk is that it's... I feel that the things that we've learned are generically useful. Especially this can apply to the company that you work at, to projects that you write. It pretty much works everywhere.</p>
     <p>[4:12] The way we've broken down the engagement process in jQuery is threefold. Because what we do is we watch new users start to use the library. We watched them become engaged. We try to make sure that each step of the experience is good.</p>
     <p>[4:31] For example, I have it broken down here. I call it the first day. This may not be an actual day. It may be an hour. It may be a week. It's some sort of time when the user is first starting to learn about the code base. In this case, first starting to learn about jQuery. They're doing things like visiting the home page, trying out the tutorial, downloading the code. All very simple things.</p>
     <p>[4:55] This is a case where they're absolutely just getting started. But building off of that, this is when they're first getting engaged with their code. They're actually starting to put it into the application. They're starting to ask questions in the forums. They're actually doing more tutorials and things like that.</p>
     <p>[5:17] Then, finally, building off of that... They're becoming more engaged. They're using it in their second application. Their third application... They're starting to extend the API. They want to create complex applications.</p>
     <p>[5:33] All of these stages here, I've outlined at least 15 of them, is that your greatest weakness is really failing at any one of those steps. If you have a bad home page, you're going to lose your users on the very first step. If you can't download the code easily, you're going to lose even more users.</p>
     <p>[5:57] It's attrition that occurs, that every single step... If you have a website that isn't the best it can be or a service that isn't the best it can be, you're going to not be engaging your users and you're going to be falling away.</p>
     <p>[6:09] Ultimately, I wasn't particularly interested in competition. I was interested in improving jQuery itself. I frequently compared jQuery against itself going forward, and especially so with issues like this. We wanted to make sure that the library was even better and even easier to use going forward.</p>
     <p>[6:32] There's what I call the first day. This is a quote that I found that I liked where this particular user said, &quot;Yeah, I'm just spending less than three hours reading blog posts and perusing the documentation. I was able to do a lot more in a lot less time than ever before. The huge community and the neatly organized jQuery plug-ins make me feel like a sucker for not having jQuery for my pet project.&quot; I was amused by that quote.</p>
     <p>[6:56] But this is important, because while viewing our documentation and our website, he felt very compelled to use us. This kind of brings it back home, because we tried to put a lot of work into making our website really good. There's obviously still a ton of work to do. We have redesign we've been trying to work on now for a long time and all sorts of stuff.</p>
     <p>[7:20] But ultimately, though, you're going to be... You're going to want to iterate in each of these steps that you're really going to want to put yourself in your user's shoes. At least for us, we want to make sure... The very first step is that when someone is first viewing jQuery they're probably going to be hitting the jQuery home page. You are going to want to make an excellent first impression, but ultimately understand what they're trying to do.</p>
     <p>[7:47] You want to answer... There are probably three questions that they're going to have, which is &quot;What on earth is this thing that I'm looking at?&quot; which is a pretty frequent question. What can it ultimately do for them as a developer? Then, finally, where can they learn more?</p>
     <p>[8:03] At least with the jQuery home page, we answer all those three questions. We explain exactly what jQuery is. We show exactly what it is and what you can do and give them a link directly learning more, pointing them to the tutorials and stuff like that.</p>
     <p>[8:16] Then, ultimately... Then, additionally, you're going to want to... If you're linking to things you're going to want to make sure they're well written. Making sure you have good tutorials and things like that. It's going to depend upon your audience.</p>
     <p>[8:27] At least in the case of jQuery, we have a lot of users who aren't coders at all, so we have to assume that there's no background experience in particular. Make sure that we are being very precise in our terminology.</p>
     <p>[8:44] Also, making the download easy. This is a thing that we've done very, very deliberately in the jQuery project. At the very beginning I always included a jQuery download link on the home page, but it was a link directly to the source file of jQuery itself. It wasn't to a .zip file. It wasn't to some other link. I wanted the user to immediately see the code and begin using it.</p>
     <p>[9:10] Because of that, it forced us to always have a simple project. A simple project that could always be encapsulated in a single file that can be understood easily by the user. I think this has helped us with adoption.</p>
     <p>[9:27] I want to mention licensing very briefly, but only to say that it's not a huge concern for the vast majority of users. If you're going to do licensing, just release your code under a liberal license. For example, in the JavaScript world, virtually everything is under a MIT or a BSD license. It makes sense. It allows the maximum number of people to use your code. I'll just leave it at that for now.</p>
     <p>[9:59] Again, I'm often surprised at how... Because since I'm a developer, I frequently try out new technologies. I go to their websites. I do all these steps. I go to the website. I download the code. I try the tutorial. I'm sure we all do this as a developer every day. I'm always blown away by how many times I try the introductory tutorial and things just don't work. Like some critical error occurs. Some module isn't loaded or whatever and the tutorial just fails.</p>
     <p>[10:29] It just kind of blows me away because if a user comes and tries to do the very first, simplest thing you can do with your library, or your website, or whatever and it fails, why on Earth would they stick around? Why would they even try to use it in the future?</p>
     <p>[10:45] In our case, we make very, very sure that the core methods of the jQuery library work very well and work across all platforms. It doesn't matter if they're trying to use jQuery in IE6 or some less optimal browser. It's going to work well. We can be assured that they aren't going to be hitting these major issues.</p>
     <p>[11:11] This was hit upon briefly in the last talk, but I really want to drive it home. I feel very, very strongly that simple APIs are absolutely critical for a library. I guess simplicity in general is phenomenally critical. Specifically, because when users are just getting started, they want to do the things that are intuitive to them and they want to do the things that ultimately make sense.</p>
     <p>[11:42] I've heard this from a number of people where they use jQuery and they say that they haven't even necessarily looked at the documentation. They try a method and it's exactly what they thought it was going to be and it just worked how they thought it was going to work, which is how it should be. Ultimately, it's a challenge, though, because it's really hard to intuit exactly what you think your users might want.</p>
     <p>[12:05] This is something that it's hard. You just have to challenge yourself to try and reduce your complexity because ultimately it will be easier for people to get started.</p>
     <p>[12:19] After the users have become engaged, there's the first month. This is another quote I found on Twitter here. This person says, &quot;All right, I'm now really, really into jQuery. I used to hate JavaScript. What has happened here? JavaScript people speak to me.&quot; This is, the person's got it started, done some tutorials or whatever, and they're really engaged. They love it.</p>
     <p>[12:46] In jQuery, we take our community engagement very, very seriously. We look for where the users are having problems and where they're discussing having problems, and we try to make sure that their issues are being handled and their questions are being answered.</p>
     <p>[13:05] In this case, we provide a couple resources in the project. We have a forum. We have an IRC channel. Both of those things are resources that we provide for the users to talk to us. We would love it if all our users went there to ask all their questions. But ultimately, they don't.</p>
     <p>[13:20] They go to places like Stack Overflow. They go to Twitter. They go to blogs. One of the most baffling things, at least for me, are people who go onto Twitter and they just kind of shout into the void, like, &quot;I have an error in my application.&quot; I don't know who they're expecting. Twitter isn't a debugger. You have to, I guess, engage with someone there.</p>
     <p>[13:40] But this is something that we care about. Even though people are somehow trying to debug through Twitter, we try to help them. We have a team of people, sort of a developer-relations team, dedicated to watching the community and making sure their concerns are being addressed. I feel this is incredibly important, because it helps make sure that the users feel as if they're being heard, their voices are being heard, and that they're being engaged with.</p>
     <p>[14:09] In this case, we have people sitting on the forums watching every day, sitting on IRC, watching blogs, watching Twitter, all these resources, to make sure that people are being heard.</p>
     <p>[14:23] What it boils down to, though, is that when you're engaging with your users, especially so in an open-source project, you want to treat every single user as if they were going to be a contributor someday.</p>
     <p>[14:36] This is very important for us, because, since we're an open-source project, we strive and we depend upon contributions from the community. I contribute to jQuery in my spare time, and so do most other people. In that regard, we want to make sure that, going forward, we have more and more people to continue the life of jQuery indefinitely.</p>
     <p>[15:03] I want to point out a couple examples. This here is a forum thread from March of 2006. It's from the jQuery mailing list, back when we had a mailing list, and I think this is about the time when I first set up the mailing list. It's a thread between Mike Alsup, Michael Geary, and myself. These were two community members at the time.</p>
     <p>[15:22] If I remember the contents of this thread, they were essentially finding bugs. They were like, &quot;Oh, I found this bug,&quot; and I'd be like, &quot;Oh, I just fixed it.&quot; Then they'd be, &quot;I found another bug,&quot; and I'm like, &quot;OK, I just fixed that too.&quot; It was going back and forth, back and forth. This was before bug tracker as well.</p>
     <p>[15:38] But the thing is that, at least in this thread... It's kind of long, but there was lots of threads like this... I was trying to be very engaged. The first year of jQuery, I sat on the mailing list and answered every single question that came in. It was a ton of work. It was really, really time-consuming. But I think it really helped that initial adoption of the library.</p>
     <p>[16:01] I'm always kind of blown away when I see projects where the people that run the project are hostile to their users. I've seen some where a new user would come in and be like, &quot;Oh, I don't understand. How do I hide something?&quot; Or something like that, something very simple.</p>
     <p>[16:17] They'll be like, &quot;Go read the tutorial,&quot; and then they'll ban them from the forum. Which is baffling. Why would you do that? Of course I'm never going to come back. Why would you continue to use something where you've just gotten insulted by the creator of the project?</p>
     <p>[16:31] In this case, I feel it's absolutely critical that you continue to be engaged and you communicate directly. For example, Mike Alsup is a team member today. He's a member of the jQuery team. Michael Geary, he wrote the first jQuery plug-in, and the continues to be a member of the community.</p>
     <p>[16:51] This is another example here. This is a member of our developer-relations team, Rey Bango. This is an example of him going and searching through Twitter, finding people with issues and replying to their concerns. Then, additionally, this is an example of email. I still have people emailing me jQuery questions. I try to help them as much as I can. Please use the forums, though. Don't use all sending jQuery questions.</p>
     <p>[17:18] In this case, this was a user who emailed me and said, oh, he was having problems with the offset method in Firefox three for Mac. I was like, &quot;OK,&quot; as I started to reply. I was kind of going back and forth, and finally figured out the problem and I landed a fix.</p>
     <p>[17:33] After that, I emailed him and said, &quot;Oh, it's all fixed. Here you go.&quot; He's like, &quot;Oh, by the way, I'm using jQuery for Amazon.com.&quot; The fact that he wanted this problem fixed was because he was trying to use jQuery on Amazon.com, the home page.</p>
     <p>[17:51] I was like, &quot;Why didn't you tell me that earlier?&quot; I mean, of course I would have helped someone from Amazon.com. That would have been amazing to get jQuery on there. Thank goodness I actually replied to this email and helped them. But yeah, as a result, Amazon uses jQuery today, and they're a strong supporter of jQuery.</p>
     <p>[18:10] Again, this just kind of goes to show you how critical it is to take everyone seriously, because you may not know who yet that potential user is. You may not know. Maybe they'll be a contributor someday. Maybe they actually could be a really strong proponent for you. You have no idea.</p>
     <p>[18:29] I find that it's important. The follow-up from that is that it's important to keep in touch with your larger users, the ones who can potentially be very vocal. At least for us in our project, we keep in touch with the large companies. Microsoft uses us. Adobe uses us. They ship us with their products. Amazon, of course... We need to make sure that their issues are being addressed. Obviously, we don't treat them special. We don't say, &quot;Oh, hey Adobe. Yes, we'll land that patch,&quot; or whatever.</p>
     <p>[19:07] We treat them like any other person in the community in that regard. We just want to make sure that if there are serious bugs that are coming up, for example, that we know about them. Because, again, really, all this kind of boils down to is communication.</p>
     <p>[19:24] You really, really have to focus on communication in the projects that you do, because if your users don't feel like they are being heard or don't know how they can communicate to you, then they will go away, or they'll be frustrated, or they'll just kind of assume things are being run poorly. This is something that is just so critical.</p>
     <p>[19:48] At least in the case of, another thing we focus a lot on is API documentation. jQuery had API documentation when it was first released in January 2006. That's something I wanted on day one, because I knew that people were going to try and interact with the library. At the time, other libraries that existed didn't really have documentation. I felt that this was super-critical. It wasn't for about another year, in 2007, that they really started to get documentation.</p>
     <p>[20:19] But I continue to feel that documentation, and excellent documentation, is super-critical for a project. Of course, this will depend. If you aren't writing a library in particular, then your documentation's probably going to be different. It'll be tutorials and FAQs and things like that.</p>
     <p>[20:33] At least here, this is an example for jQuery documentation. We have a full website. Every method is documented. Every property is documented. We've even gone above and beyond and tried to document some of the internals of the library as well so that people understand how it works underneath the hood.</p>
     <p>[20:54] Additionally, we've also tried to provide alternate views. While we do have this API to jQuery.com, and we think it's really good, maybe that's not the best way to view the documentation. Maybe you have a better way. For that reason, it's interesting, we actually have an API for our API.</p>
     <p>[21:13] You can go and view our API documentation and do a full XML dump of the entire documentation, all the demos, all the examples, absolutely everything, and you can build this into your own other jQuery documentation viewer. If you look on the app store and stuff like that, people have built dozens of jQuery documentation viewers. You can do this, too, since we provide all this here, because we realize there may be better ways of viewing the docs.</p>
     <p>[21:47] Ultimately, your users are going to want to learn more. For that reason, you can't just have API documentation. You need to have tutorials. You need to have a larger structure to helping the users understand why things work the way they work. This is something we've put a lot of effort into, because we want to make sure that the users can really understand what's going on.</p>
     <p>[22:14] At least, on our website, we provide a number of tutorials, and in a variety of languages. This is something we're actually working to improve. We're going to be launching a new learning site here very soon, with a bunch more tutorials.</p>
     <p>[22:33] I wanted to talk a little bit about getting involved and how we've tried to get people involved with contributing to jQuery. This is something that is rather tricky, because it's not always obvious to potential users how to get involved in a project.</p>
     <p>[22:55] At least, in jQuery, we keep a very open process. There is the concept of open source, which I'm sure most of you are familiar with, just making sure that your source is available, people can see it, they can edit it, maybe it's up on GitHub, something like that.</p>
     <p>[23:11] But open process is decidedly a layer on top of that. Not only is your code open, but so is the reasoning behind what you do, why you do that, so that users who are coming in and getting started with the project can actually know the reasons why this particular feature was in this upcoming release, why this particular feature didn't go in this upcoming release, why is this bug being fixed, why was this bug closed that you won't fix. These are all really critical questions.</p>
     <p>[23:45] This is something that we try to do better in the jQuery project. We try to be more explicit about this. This is an example here. This is some recent commits to jQuery here. We're in the process of releasing jQuery 1.7. That will be coming out here soon. But this is ultimately very hard, keeping this open process.</p>
     <p>[24:13] There are some things that we've done to try and make this easier. For example, we have weekly public team meetings now. This isn't something that we did before. We've started doing it in, I guess, the past year or so. At least, with the core team, we started this in January.</p>
     <p>[24:32] Where we have an IRC channel, it's actually #jQuerymeeting in Freenode. People can go there and at noon Eastern time on every Monday, the full jQuery team comes in and we all talk about what features we're currently working on, what bugs we're fixing, how current releases are going, things like that.</p>
     <p>[24:55] This is really interesting because this is a way for you to see underneath the hood and see how things work and get involved. I feel that this is critical because if people want to become engaged... If you want to have more people working in your process, you have to be more open about it. They have to be able to understand how things work.</p>
     <p>[25:20] We also dump out, for people who can't make the meeting, we also dump out weekly meeting notes explaining exactly what we've done, what we've decide, what things we're working on, things like that. But we're even more open than that. We actually put all of our meeting notes online.</p>
     <p>[25:39] We have a new website now. It's at jQuery.org/updates. On this website are updates from every single sub-team in the jQuery project. There are updates there for mobile, from UI, from jQuery core, from events planning. All these different teams that exist in the jQuery project.</p>
     <p>[26:01] If you want to understand what we're working on collectively, you can go there and see this. Again, this is something very new that we started to do, but we think it's actually a very interesting and very... It can be very effective because, again, this is providing even more transparency into our process and allowing users to understand what it is that we do and hopefully even maybe get involved.</p>
     <p>[26:29] I wanted to talk a little bit about how we do testing in this environment, as well. We have a very highly distributed team. I think, as far as the jQuery core team goes, we have people all over the globe. We have... I'm trying to think. There's one in California, one in Tennessee, one in Belgium, and I'm in Massachusetts. We're kind of distributed all over the place. Obviously, we're never going to be really meeting in person. We just meet in person every couple months or so if we're lucky.</p>
     <p>[27:06] But we're going to be doing development on a day-to-day basis. For that reason, we need to have good testing tools. We need to have a good testing framework to make sure that we aren't stepping on each other's toes. At least, in the case of jQuery, we are very heavily tested. We have unit tests covering every single aspect of the library. There are unit tests all over the place.</p>
     <p>[27:31] We use this tool called TestSwarm. This is something that I developed a couple years ago. I think I mentioned it very briefly the at the last Frontiers conference. But the basic premise is that it's a distributed way to send out test suites to a large number of browsers and a large number of platforms.</p>
     <p>[27:51] For example, here, we have... These are all the different platforms we can target with TestSwarm at the moment. For example, if people with IE7 or 10 or whatever, they can connect their browser and they will receive a test suite to run. Technically, how this works is that, essentially, they're given a URL saying, &quot;Hey, the test suite is located at this URL.&quot; It runs in an I-frame. When it is done, it collects the results and sends it back to the server.</p>
     <p>[28:25] That way we can send out test suites to a large number of browsers, a large number of people who are connected, and we can collect all these results back in a very fast way. This is sort of what the results view looks like. I grabbed this from just the other day. We aren't failing this bad. I actually checked. There's some wonkiness going on.</p>
     <p>[28:46] You can see all the different tests here. For example, we have 724 core tests, 595 attribute tests. We have all these different tests for all these different aspects of jQuery. We can see exactly what is happening with those tests on those platforms. We can see exactly... There are three failing event tests in Safari. We can go right in and see exactly what the issue is and hopefully fix it.</p>
     <p>[29:16] But this is very important for us since is something that the entire team can view. This is something that isn't just limited to me being able to see this. Because if we're in this distributed environment, we all have to be testing against all of these browsers. This is really, really tricky.</p>
     <p>[29:36] This way, we can know if a particular commit broke pretty much everything. We can go in and be like... We can start blaming people. You can be like, &quot;Hey, you just committed this. Now all the events are failing in Internet Explorer.&quot; Stuff like that. This provides us a much more... A lot more information about what's going on.</p>
     <p>[29:56] We just started doing this yesterday. We're playing around now with actually doing IRC updates of when tests start to fail in TestSwarm, as well. That way, we can be sitting in the IRC chat room and we can start blaming people right there when their code starts to break things.</p>
     <p>[30:18] One new tool I'm pretty excited about. I've started to play around with it a little bit and we're trying to use more here in the jQuery project, it's a tool called BrowserStack. This particular tool is... It's a way for you to spin up a virtual machine to do all sorts of testing.</p>
     <p>[30:43] For example, here, you see this drop down menu? You can pick from any of these browsers here. You can run Firefox 5, Safari 5, IE9, whatever you want. Clicking one of these browsers and giving it a URL will spin up a virtual machine and a browser with that particular web site in it.</p>
     <p>[31:05] This is pretty amazing, because it gives you full access to all these different browsers and all these different platforms. You don't actually have to install IE9. You can just use this website to spin up that instance for you.</p>
     <p>[31:21] I've been playing around with that and it's actually really cool. It's really fast, as well. They're doing... You can actually see and interact with the browser. It's not a static image. You can go in. You can click things. You can interact with it. It's really nice.</p>
     <p>[31:35] We're going to be playing around with this some more and we want to see if we can get TestSwarm distributed across a whole bunch of VM instances here on BrowserStack. We think that would be pretty cool.</p>
     <p>[31:51] Another thing that we've done here in the project is we've recently started to implement what we call a bug triage team. This is a team who's dedicated to going through and finding bugs, ones that people submit, or new ones, or whatever and making sure that they have patches, are tested, are being tracked and their status is being resolved.</p>
     <p>[32:21] This is something that is super, super critical. This is the current state of the jQuery bug tracker. At the very moment, we have about 175 open bugs... Open tickets. Not all of them are bugs. You can kind of see where there's been drops here. Usually those drops are around releases. We'll do a release and fix a whole bunch of bugs, or we'll sit down and do some bug triage and close a bunch of bugs, something like that. I think this one here was bug triage and over here was a release.</p>
     <p>[32:54] But what's interesting here is that it used to be a lot, lot worse. Like around 2010, we broke 1,500 open tickets and now we're way down here on the... At the end, we're down to 175. This is the benefit of having a team dedicated to resolving and handling bugs. It can just massively affect us.</p>
     <p>[33:21] In the case of the project here, it's drastically improved our throughput because we know better about what issues are actually real concerns. We can know which things are coming up again and again and again. We can make sure that things are being addressed, and we don't have this inevitable creep.</p>
     <p>[33:41] Since this is what happens, is that since we have a large user base, if we left things unchecked, the number of bugs will just constantly increase over time, just keep going up and up and up, which is obviously not ideal.</p>
     <p>[33:56] One of the other things we've been working on, again, in the name of transparency is opening up our roadmap decisions. When we make decisions about what should go into jQuery 1.7, 1.8 and stuff like that, we need to... Previously, it was pretty much like I was acting as a benevolent dictator. I would say... I was like Caesar, &quot;Yes, that's in. No, that's out.&quot; Then that was it. Whatever got my approval was what went into jQuery. It still kind of is, but not totally.</p>
     <p>[34:31] What we wanted to do is we wanted to make sure that if there were particular features that people wanted or particular bugs that people wanted to see addressed that their voices were being heard. For that reason, we set up a form on the jQuery web site.</p>
     <p>[34:48] For example, when we released jQuery 1.6, we also included a form that people could go and submit any feature that they wanted to see in jQuery 1.7. We collected all these results and set up a voting form for the team. This is the voting form that we had. We had 58 suggestions for jQuery 1.7. This is after we removed ones that were like, &quot;Please make jQuery better, please.&quot; Things like that.</p>
     <p>[35:17] But then we reduced it down to the stuff that are legitimate feature requests. What we did then is that we had the entire jQuery team, so like this is including jQuery core, jQuery UI, all the different teams go through and vote on how they felt about the feature.</p>
     <p>[35:36] The one thing that we've found to be particularly tricky is that in a project like ours, we're very distributed. We don't all have the same opinion. We're all highly opinionated about what we think. It's very hard to form consensus.</p>
     <p>[35:50] What we've done is, we went through and if we found there was a feature there... Each member of the team had the ability to vote and say, &quot;+1. Yes, this should definitely go in. -1. This should definitely not go in.&quot; Stuff like that, and then we would have these discussions in the bug tracker for everyone to see.</p>
     <p>[36:08] This is interesting, because this is different from how we did it before. Like I said, it was just me just picking things. But now, the team got to essentially form a consensus and the entire public could see how we formed that consensus, which I think is very important for understanding how we work.</p>
     <p>[36:26] In the case of this particular feature, this was adding a new method called andself. Four people have said yes. Five people have said no. Three people have abstained. This was something that we're not going to add into jQuery 1.7 because no consensus was formed around actually getting it. There was a lot of consternation.</p>
     <p>[36:48] But a number of things... What was nice, though, is that because of this, because we used this particular technique, we were actually able to close a lot of longstanding, open feature requests because people would come along and say, &quot;Oh, I really wish jQuery did web workers,&quot; or something like that, which jQuery probably never will do web workers.</p>
     <p>[37:11] But the thing is that we had never really formed an opinion about that before. When the feature request came in, the entire team got to sit down and be like, &quot;No, that doesn't really fit here. -1, -1, -1.&quot; When you have a feature where the entire team collectively says, &quot;No, this should not go in, nor should it ever go in,&quot; then we can just say, &quot;Hey, we're never going to implement web workers in jQuery itself. This is something that you should probably do as a plug-in or something like that.&quot;</p>
     <p>[37:41] Again, this is all... tying this in together, because again, we're trying to encourage all these contributions here. We want to encourage users to submit bug reports, to file test cases, to submit patches. All these different things. To help with that, as well, we released a &quot;getting involved&quot; page as well. This is something that I feel that is pretty critical for anything you do. You want to explain to the users how to get engaged and especially how to understand how things work.</p>
     <p>[38:15] At least, in jQuery, we're under a pretty serious constraint, which is that since we're in a browser and we're a piece of JavaScript code, we're heavily restricted by file size. If we had a massive one megabyte library, it would be very difficult for people to use us since that would be a lot of code that would have to be downloaded every single time you view the website, or I guess once if you're doing caching correctly.</p>
     <p>[38:41] In that regard, we need to keep the file size of jQuery to a reasonable size. But what's nice is that, at least in jQuery, we have a nice plug in architecture. With this plug-in architecture, we can encourage users to create extensive... create features that they want to add on to the library.</p>
     <p>[38:59] They can be available to the world. This is how it's always been. This is how... I made sure that jQuery's extensible on the very first day in which it was released because I wanted people to be able to create these sort of plug-ins.</p>
     <p>[39:14] Building off of that, though, people are going to want to be able to create particularly complex applications. In the case of jQuery, this is can be interesting because, like I said, the jQuery core set of functionality is rather... We do this. We focus almost entirely on dom traversal, dom manipulation, and Ajax stuff. We don't really expand beyond that. If you want a particular structure or framework for building a web application, we don't provide that.</p>
     <p>[39:43] But the nice thing is that... We've started to do this with other particular projects inside jQuery itself. For example, we have jQuery UI, which is the full set of widgets and components. Things like a tab and a calendar and all sorts of stuff like that. We have a very nice theme roller which let's you style everything. Then, we also have a jQuery mobile, which we just started last year.</p>
     <p>[40:06] This is a full mobile framework for creating web applications that work really well on mobile devices. This is everything from phones to tablets and everywhere in between.</p>
     <p>[40:20] In these cases, we realized that jQuery itself would not be sufficient. For that reason, we built these larger libraries to tackle these issues.</p>
     <p>[40:31] To go back to the issue of testing, in the case of jQuery mobile, it's much harder to test. There aren't very... There isn't a BrowserStack for mobile phones, at least not ones that are as good as what we need them to be. For example, these are all the browsers that we support that have an A grade support with jQuery mobile.</p>
     <p>[40:57] That's a lot of browsers. It's a lot of browsers on a lot of devices. What's even more frustrating is that the browsers act differently on different devices. It's not just like, &quot;Oh, you're just loading up Safari five or whatever.&quot; It could be potentially very different from device to another.</p>
     <p>[41:15] Not only that, but we also have other devices. It's kind of running off the bottom of the page here, but we have B grade devices. In those cases, those are devices where jQuery works fairly well, but there may be certain features that are missing. In this case, the thing that's missing is that it doesn't have the nice Ajaxy style page loading and animations. But all the A grade browsers have that.</p>
     <p>[41:41] When it comes down to it, when we want to do testing in these browsers, we have to sit there on physical devices and do a lot of clicking with our fingers. It's definitely not ideal. This is just a very, very small subsection of our device farm, if you want to call it that. We have just piles and piles of devices and all these micro-USB cables everywhere. Because if we want to make sure that things are rendering right you have to physically see it.</p>
     <p>[42:14] The hardest part is, and one reason why I want to advocate, in particular, for testing on physical devices for mobile development, is that when you're doing that, touch interaction... It can just be so, so different from what you expect it to be. It can be very, very different from how it works on a desktop, as well.</p>
     <p>[42:36] Just loading up the Android emulator and clicking around will not cut it. It is not equivalent to sitting there on a device and physically clicking with your finger. Interactions just don't work the same. That's the short of it. If you're building a web application, you have to sit there and physically do that.</p>
     <p>[42:55] I want to really just emphasize that. It's unfortunate, because it means that you have to have a pile of devices and you have to spend a lot of money, but at the end of the day that's what it takes to deploy across a lot of platforms.</p>
     <p>[43:10] Ultimately, the crux of it here is that you want to be able to help your users here. You want to make sure you're helping them at every single step of the way, making sure that you aren't providing a suboptimal experience and that you aren't scaring away potential users or potential contributors. Ultimately, you want to get your users engaged. You want to make sure that you are providing them with all the resources they need to succeed.</p>
     <p>[43:41] Ultimately, I feel that it's important to treat those users as if they could become a part of the project, start to contribute back. Again, if you just treat your users with the respect that you wish you had, you end up with something that's very good as a result.</p>
     <p>[43:58] That's all I wanted to cover for today. I think I have some time for questions now. [applause]</p>
     <p>[44:14] I would be happy to answer questions about jQuery or jQuery mobile or things like that. Not necessarily just stuff we talked about today.</p>
     <p>[44:25] I'll just say it right now. This question almost always comes up. The question is almost always, &quot;When will jQuery drop support for IE6?&quot;</p>
     <p>[44:36] Unfortunately, I have to give the answer is that we probably won't, at least not for any time in the foreseeable future. The reality of the situation is that we have a couple things working for us. The core jQuery library, we don't have to worry... Typically we don't have to worry too much about CSS rendering. We don't have to worry... Whereas, jQuery UI or jQuery mobile, they have to worry about that a lot.</p>
     <p>[45:05] For that reason, IE6 is a huge concern for us because the IE6 JavaScript engine is effectively the same as the IE7 JavaScript engine. The IE7 JavaScript engine was bundled in IE8. It's IE6 or what is the JavaScript engine of IE6 is going to be haunting us for a very long time. There's really no way in which we'll probably ever going drop support for IE6.</p>
     <p>[45:31] It's not a huge concern for us as a project. Within, we pretty much have it under wraps these days, but... Yeah. I wanted to mention that. In fact, the JavaScript engine in particular the dom implementation in IE7, has more bugs in it that the IE6 implementation. They actually took the existing code and introduced a couple bugs. That's where we are.</p>
     <p>Participant: [46:00] I thought that was very comprehensive. I don't have so much of a question as an addition. When people think about jQuery and contributing, a lot of the time they think that they have to be, perhaps, an amazing JavaScript developer. [46:13] But the reality is that we require a much broader skill set. We need designers and people that write documentation. People that write for the learning site, et cetera. I just wanted to highlight that if people wanted to get involved in the project, there are always those avenues to get involved with, as well. We keep needing those people.</p>
     <p>John: [46:32] Absolutely. One area in which we also... Some of the best contributors to the jQuery project... For example, I mentioned Ray Bingo. He's helped in developer relations for many years now. His emphasis in the project was all about communication. That was wasn't even necessarily code related. He was initially seeing their web coding for a project. [47:00] Like I said, there are all sorts of all these ancillary issues that require attention. One of the areas in which we need contributors now is a coding thing. We do need server side coders. We have so many projects that we want to do for the project. Implementing different websites and stuff. If you are good at server side development, please come talk to me.</p>
     <p>[47:23] Oh, one thing I want to mention while they're here. I actually have the very first batch of ever produced jQuery stickers, so if you ask a question, I will give you some stickers. Or, if you come up afterwards and ask me a question, I'll give you stickers as well.</p>
     <p>Participant: [47:42] Hi, John. Are there any other open source projects that you think get it right?</p>
     <p>John: [47:55] I think there are aspects of projects that get it right. I think the problem is that it's a lot easier to see when projects get it wrong because they usually get it wrong so spectacularly. I feel like I learned a lot when I was working at Mozilla. I mean, obviously, Mozilla is a very different structure from the jQuery project. It's absolutely massive. I think of that in the same way that webkit is probably very similar in that, as far as like size is concerned. [48:31] But I feel like I learned a lot there about how to efficiently run bug tracking and interacting with the community members over bugs and things like that. Which is a whole area which is... It can be very, very tricky and very, very sensitive because if you...</p>
     <p>[48:53] One of the interesting things in jQuery... We've actually started to add in more bug statuses. When you fix a bug or close a bug, there's like... It's like resolved as not a bug, resolved as won't fix, stuff like that.</p>
     <p>[49:05] But when you resolve a bug as won't fix, that can be very, very caustic because it's essentially telling them that we're never going to fix this. We will never fix this. You're stupid for asking it. Stuff like that.</p>
     <p>[49:17] We started to implement new status that are like &quot;can't fix.&quot; Because the thing is that there are often bugs that we simply can't fix because the browsers are implemented in such a way that we can't resolve this issue. It better encapsulates the reality in which we're in. Also, we have issues like... We resolve as &quot;Browser bug&quot; because sometimes there's just an issue that we can't resolve until we talk to the browser vendor and fix the issue there.</p>
     <p>[49:47] If you ask me a question, come afterwards. I'll give you the stickers.</p>
     <p>Participant: [49:59] In your presentation, you didn't mention any of the conferences that you've been having in the U.S. I've been to two of them and I've spoken to a lot of developers and they consider it to be a huge deal to be able to go there. I'm sure a lot of people here would actually like to go to them as well. I was wondering if you were planning on any European conferences?</p>
     <p>John: [50:22] Yes. This is something that we've been doing. It's interesting, because we just held our seventh conference. I just flew here directly from it. It is pretty funny, because at the very beginning, I held it in a classroom at Harvard in Boston. It was like me carrying boxes of donuts and people coming in. It was very different from what it is now. Now we're up to a 600 person conference. [50:47] We're actually... It hasn't been announced yet, but we're hosting our first one in the U.K. in the spring. Keep a look out on the jQuery blog. We'll be announcing that. That should be good. We're definitely hoping that it will go well.</p>
     <p>[51:03] Obviously, we would love to do conferences everywhere. In Amsterdam or in Asia. Our biggest limiting factor right now is that, again, we're limited by contributors. Running a conference is a huge deal. It's a lot of work. I'm sure the people here will tell you it is not easy. It takes months of tons of work.</p>
     <p>[51:26] We want to put on a good experience, but the only way we can do that is by having people on the ground in this place actually putting it on. That's hard.</p>
     <p>[51:36] This is our first one. We hope it goes well. We'll see.</p>
     <p>[51:47] Oh, the question back there, and there maybe.</p>
     <p>Participant: [51:56] Which first? Am I first?</p>
     <p>Participant: [51:58] Yes, I am. First thing, for your talk, all the way back here... How much trouble did you get with the community when switching... Adding property and adding to the first property debates? How much trouble did you get for that in the community?</p>
     <p>John: [52:14] There's the eternal question about what does it mean to change an API, change a feature. Backwards compatibility in general. This is obviously a very huge concern for us, since so many people use jQuery now, it's incredibly hard for us to ever change how a function works or to back something up, or something like that. [52:44] At least, in the case of jQuery 1.6, we implemented changes to hopefully make the attribute method more consistent with how it actually works. But what we... We made changed there, and then we realized that we were probably a little bit too aggressive. Then we released jQuery 1.61 and essentially rolled back some of the changes.</p>
     <p>[53:12] The issue there is ultimately that, I think in general... I don't think you'll ever find a group of people more paranoid, I guess with the exception of Microsoft because they're pretty paranoid about backwards compatibility. But we're pretty paranoid about backwards compatibility. We're just afraid that removing a feature, making any change like this has the potential to just be highly disruptive.</p>
     <p>[53:43] I think this is another case where getting involved in the development process helps immensely, because if you have particular applications that are affected by potential backwards compatibility, we want to hear about it. Because if it's something that's going to break, we probably don't want to make that change.</p>
     <p>[54:00] Again, getting involved is super helpful there.</p>
     <p>[54:11] Oh, there's a person up there?</p>
     <p>Participant: [54:16] Earlier, you talked about a test framework that you've developed that lets people run tests in the browsers. I was just wondering, do you use any particular JavaScript unit test framework for that, or is that something you've developed yourself?</p>
     <p>John: [54:34] TestSwarm works across many different types of test suites, but we use Q-unit. That's a test framework that we wrote for the jQuery project and is actually used quite extensively now. It's really hard to get metrics on most popular test frameworks. That isn't nearly as sexy of a metric as most popular JavaScript library. [55:02] But we think it's pretty popular and a lot of people use it. I definitely recommend that. That also has a very, very simple API.</p>
     <p>Participant: [55:10] When you get bugs, do write test for them first?</p>
     <p>John: [55:14] The question is, when we get bugs, do we write test for them first? Yes, we do. [55:19] When we resolve something... If you open up our test files, it's like... Just searching, and it's like testing for bug number one, two, three, four, five. We're very specific about... We try to make sure we don't have regressions ever again. Obviously, we want to make sure we have broad coverage, as well. It's hard. It's extremely hard, especially with all the cross browser issues.</p>
     <p>[55:48] But ultimately, though, if you're developing cross browser code of any sort, you have to have a test suite. It is... You cannot mince on that because if you're going to tweak one thing to make it work in one browser, you have to verify that it didn't just break all the other browsers. The only way to do that is with a test suite.</p>
     <p>Participant: [56:17] Yeah, I just wanted to say thanks for a great lecture and thanks for jQuery. [56:24] But my question is last year I saw something on your website that totally changed development in every aspect. That was the jQuery template plug-in. Sadly, you produced... used station data like the most X amount data with axis LT. You can create the most awesome website with that.</p>
     <p>[56:45] But it's still in a development, almost beta phase. It's not a total part of the plug-in. Also, now we've heard Google... They want to implement it as a tag and it won't be a part of the browser.</p>
     <p>[56:58] How do you see the jQuery template and the template?</p>
     <p>John: [57:05] For example, right now we... You were mentioning is we have an official templating plug-in for jQuery. [57:14] We hit some stumbling blocks there because we implemented that... We brought that aboard and it was tricky because the only person... We only have one person working on it, but we wanted more people working on it. We wanted the rest of the team to work on it, as well.</p>
     <p>[57:32] We've made some changes, and least for the jQuery template it won't be in jQuery Core. It will be a part of jQuery UI because in jQuery UI there are a number of jQuery UI plug-ins that are going to be using this templating directly.</p>
     <p>[57:47] I feel like, at least going forward here, that there's a strong need to at least have templating of some sort for moderately complex websites, which is why we want to provide a solution, and which is why we think it's probably a good idea to have it live in a place like jQuery UI.</p>
     <p>[58:03] Yeah, we're working on it. If I remember correctly, we're tweaking some things right now. I think there's a new version scheduled to come out soon. At least that will be available.</p>
     <p>[58:19] Upstairs, I think, first, maybe.</p>
     <p>Participant: [58:26] Regarding TestSwarm, if I were going to use that, would I have to run my own hub or something? Or, do I connect to your system that connects to the browsers in turn?</p>
     <p>John: [58:36] If you wanted to use TestSwarm, you would have to set up your own hub. Right now, it's a collection of PHP scripts, to put it lightly. It's essentially... It just needs a MySQL database or something. My PHP code is not nearly as good as my JavaScript code, I'll say that right now, and there's probably [inaudible 59:03] issues out the wazoo. [59:07] You would run your own hub. You just set up on your website and then you could submit tests directly there. But all the source is open. It's all up on GetHub. The test form project is up at... Let me... I'll just type it here. There you go. If you're interested in trying that If you go... out, you could definitely do that.</p>
     <p>Participant: [59:32] Thanks.</p>
     <p>Participant: [59:34] How are you doing? Thank you for this amazing talk. Just a little curiosity about the architecture of the API... Why did you decide not to use some defined getters and setters for the elements, for example?</p>
     <p>John: [59:52] Instead of saying, &quot;get attribute, set attribute&quot;?</p>
     <p>Participant: [59:56] Exactly.</p>
     <p>John: [59:57] OK. I'm trying to remember why. It's hard to remember why I did the things I did back in 2005. I'm sure a lot of it has to do with my background. I used to be a PERL developer back in the day. PERL developers love the shortest code every. It's all cryptic and there's dollar signs everywhere. That's probably why I picked... In prototype I used dollar signs. They did it first, so I can blame them. [60:30] I'm trying to think. I think what it comes down to is that I like brevity. I liked having concise code that quickly got the job done. I didn't like having to type &quot;.set attribute&quot; every time instead of attribute. Why not just call it &quot;attr&quot; and just say the name? It's implicit.</p>
     <p>[60:51] I guess maybe this came a little bit from my doing Java, as well, because in Java you can do all sorts of method overloading. I think it may have come from that, as well. But at least for me, I liked being able to... It didn't make sense for me to have both a get attribute and a set attribute method when you could just have an attribute method and just overload it.</p>
     <p>[61:13] I don't know. It felt intuitive for me.</p>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2011/sessions/jquery-and-the-open-source-process-john-resig.md" id="comment">
      <fieldset>
       <legend>Post a comment</legend>
       <p>
        <label for="comment-name">Name</label>
        <input type="text" class="text" name="comment-name" required id="comment-name">
       </p>
       <p>
        <label for="comment-mail">E-mail <em>not displayed</em></label>
        <input type="email" class="text email" name="comment-mail" required id="comment-mail">
       </p>
       <p>
        <label for="comment-site">Website</label>
        <input type="url" class="text email" name="comment-site" id="comment-site">
       </p>
       <p>
        <label for="comment-text">Comment <em>HTML not allowed, <a href="/blog/markup" title="Markup for comments">simple markup</a> is</em></label>
        <textarea rows="5" cols="50" name="comment-text" required id="comment-text"></textarea>
       </p>
       <p>
        <label for="comment-spam">Spammer? <em>Fill in 'no'</em></label>
        <input type="text" class="text spam-check" name="comment-spam" id="comment-spam">
       </p>
       <p class="submit">
        <input type="submit" name="submit" value="Add" class="submit">
       </p>
      </fieldset>
     </form>
    </div>
   </div>
   <div id="submenu">
    <div>
     <form method="get" action="//www.google.com/search" lang="en">
      <h2><label for="q">Search fronteers.nl</label></h2>
      <p>
       <input name="q" id="q" type="search">
       <input type="hidden" name="sitesearch" value="fronteers.nl">
       <input type="hidden" name="ie" value="UTF-8">
       <input type="hidden" name="oe" value="UTF-8">
       <input type="hidden" name="hl" value="en">
      </p>
     </form>
    </div>
    <div id="conference-menu" lang="en">
     <h2>Fronteers 2011</h2>
     <ul>
      <li><a href="/congres/2011/news" title="Fronteers 2011 news">News</a></li>
      <li><a href="/congres/2011/venue" title="Fronteers 2011 venue">Venue</a></li>
      <li><a href="/congres/2011/speakers" title="Fronteers 2011 speakers">Speakers</a></li>
      <li class="current"><a href="/congres/2011/sessions" title="Fronteers 2011 sessions" class="current">Sessions</a></li>
      <li><a href="/congres/2011/jam-session" title="Fronteers 2011 Jam Session">Jam Session</a></li>
      <li><a href="/congres/2011/workshops" title="Fronteers 2011 workshops">Workshops</a></li>
      <li><a href="/congres/2011/schedule" title="Fronteers 2011 schedule">Schedule</a></li>
      <li><a href="/congres/2011/tickets" title="Fronteers 2011 tickets">Tickets</a></li>
      <li><a href="/congres/2011/attendees" title="Fronteers 2011 attendees">Attendees</a></li>
      <li><a href="/congres/2011/contact" title="Fronteers 2011 contact information">Contact</a></li>
     </ul>
    </div>
    <div lang="en">
     <h2>Fronteers</h2>
     <ul>
      <li><a href="/about">About Fronteers</a></li>
     </ul>
    </div>
    <div lang="en">
     <h2>Elsewhere</h2>
     <ul>
      <li><a href="https://twitter.com/FronteersConf">Twitter</a></li>
      <li><a href="https://vimeo.com/channels/fronteers11">Vimeo channel</a></li>
      <li><a href="https://itunes.apple.com/nl/podcast/fronteers-videos/id1136212068?l=en">Podcast on iTunes</a></li>
      <li><a href="http://lanyrd.com/2011/fronteers/">Lanyrd</a></li>
      <li><a href="http://webchat.freenode.net/?channels=fronteers">IRC</a></li>
      <li><a href="http://www.flickr.com/search/?q=fronteers11">Flickr</a></li>
     </ul>
    </div>
    <div class="images" lang="en">
     <h2>Sponsors</h2>
     <ul>
      <li><a href="http://www.booking.com/"><img src="/_img/congres/2011/sponsors/booking-com.png" alt="Booking.com" width="150" height="55"></a></li>
      <li><a href="http://frontlab.nl/"><img src="/_img/congres/2010/sponsors/frontlab.png" alt="Frontlab" width="150" height="56"></a></li>
      <li><a href="http://www.informaat.nl/"><img src="/_img/congres/2010/sponsors/informaat.png?v=20100820" alt="Informaat" width="150" height="60"></a></li>
      <li><a href="http://www.mirabeau.nl/"><img src="/_img/congres/2009/sponsors/mirabeau.png" alt="Mirabeau" width="150" height="60"></a></li>
      <li><a href="http://www.mobile.de/"><img src="/_img/congres/2011/sponsors/mobile-de.png" alt="Opera Software" width="150" height="52"></a></li>
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
   <ul id="menu">
    <li id="menu-home"><a href="/">Home</a></li>
    <li id="menu-vereniging"><a href="/vereniging">Vereniging</a></li>
    <li id="menu-leden"><a href="/leden">Ledenlijst</a></li>
    <li id="menu-inschrijven"><a href="/inschrijven">Lid worden</a></li>
    <li id="menu-sign-up"><a href="/sign-up">Fronteers membership</a></li>
    <li id="menu-blog"><a href="/blog">Nieuws</a></li>
    <li id="menu-nieuwsbrief"><a href="/nieuwsbrief">Nieuwsbrief</a></li>
    <li id="menu-community"><a href="/community">Community</a></li>
    <li id="menu-bijeenkomsten"><a href="/bijeenkomsten">Bijeenkomsten</a></li>
    <li id="menu-workshops"><a href="/workshops">Workshops</a></li>
    <li id="menu-contact"><a href="/contact">Contact</a></li>
    <li id="menu-congres"><a href="/congres">Conference</a>
     <ul>
      <li><a href="/congres/2019">FronteersConf 2019</a></li>
      <li><a href="/congres/2018">FronteersConf 2018</a></li>
      <li><a href="/congres/2017">FronteersConf 2017</a></li>
      <li><a href="/congres/2016-spring">Spring Conf 2016</a></li>
      <li><a href="/congres/2016">FronteersConf 2016</a></li>
      <li><a href="/congres/2015">FronteersConf 2015</a></li>
      <li><a href="/congres/2014">Fronteers 2014</a></li>
      <li><a href="/congres/2013">Fronteers 2013</a></li>
      <li><a href="/congres/2012">Fronteers 2012</a></li>
      <li class="current"><a href="/congres/2011" class="current">Fronteers 2011</a></li>
      <li><a href="/congres/2010">Fronteers 2010</a></li>
      <li><a href="/congres/2009">Fronteers 2009</a></li>
      <li><a href="/congres/2008">Fronteers 2008</a></li>
     </ul>
    </li>
    <li id="menu-vacaturebank"><a href="/vacaturebank">Vacaturebank</a></li>
    <li id="menu-communityondersteuning"><a href="/communityondersteuning">Ondersteuning</a></li>
    <li id="menu-videos"><a href="/videos">Video's</a></li>
    <li id="menu-kalender"><a href="/kalender">Kalender</a></li>
    <li id="menu-forum"><a href="https://forum.fronteers.nl/">Forum</a></li>
   </ul>
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
