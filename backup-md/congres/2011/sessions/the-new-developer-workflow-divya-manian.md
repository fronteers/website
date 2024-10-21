<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>The New Developer Workflow by Divya Manian · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p537">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>The New Developer Workflow by Divya Manian</h2>
     <h3>Video</h3>
     <video width="640" height="360" src="/_downloads/2011/divya-manian-the-new-developer-workflow.webm" controls>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2011/divya-manian-the-new-developer-workflow.webm">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <h3>Slides</h3>
     <ul>
      <li><a href="http://nimbu.in/fronteers/#intro">Slides</a></li>
      <li><a href="https://github.com/nimbupani/compass-demos">Compass demo</a></li>
     </ul>
     <h3>Transcript</h3>
     <p>Divya Manian: [0:04] OK, let me go on and I think that what I'm going to speak on is a good match to what Alex was speaking on, because he was speaking from the browser perspective. What I am going to speak on is to speak from the developer's perspective, what you need to do to get on board to the new features and how your workflow needs to be updated and changed. So you can get on with the new features as quickly as you can and as seamlessly as you can. [0:29] Before I go on, I would like to give a little bit more about myself. I work at Opera as a web opener. How many of you test in Opera? Hands? Oh, good. That's a lot more than what I usually see in the US.<br>[0:45] Typically in the US, when they don't raise their hands, what I would say is, &quot;Dinosaurs died because you didn't test in Opera, and narwhals are dying now because you are not testing in Opera.&quot; And I just realized that narwhals actually exist. Till now, I thought they were well extinct creatures like unicorns and dinosaurs.</p>
     <p>[1:04] Anyway, going on, when I'm not working at doing my day job, I contribute to open source projects like HTML5 Boilerplate. How many of you use that? Ooh, not bad. OK, cool.</p>
     <p>[1:18] I'm also a member of the CSS Working Group, which means I get to spy on what Tab Atkins and other people talk on, and work on the latest CSS specifications. I also write at nimbupani.com and on Twitter I'm @Divya, so if you have any questions that I'm unable to answer during this talk, please contact me there.</p>
     <p>[1:37] Before I go further, I have a small story to tell. The story is about web development. In the late '90s and the early 2000s, web development was like trying to travel from one place to another using an unpaved road. Which was full of robbers, through a jungle or wild animals, and there were thieves right out to get at you, at your valuables. It was lucky if you made it out to your destination alive, safe and with your senses.</p>
     <p>[2:06] Then we had in 2000, a lot of these specifications that came out, like HTML4 and CSS 2.1 and browsers started showing commitment to implementing these specifications. So it was as though someone invented bicycle and asked you as developers to start using the bicycle on a paved road.</p>
     <p>[2:26] There are considerably much less robbers and thieves on the paved road. The chances of you making out alive and without much stress was much higher at the time.</p>
     <p>[2:37] Now, all of us have known how to write and learned how to ride the bicycle. We are pretty sure that we can go to our destination safely and confidently that we are able to do so. But we are now in the throes of another revolution, because now, someone has invented an airplane and said, &quot;You can reach your destination using your airplane,&quot; and has given you a manual, too.</p>
     <p>[3:03] If you fly your airplane you can reach your destination in an hour, compared to when you use a bicycle, which would take you about 10 days.</p>
     <p>[3:10] Now, a lot of us are hesitant to make that transition, because you don't know how to fly an airplane and it's considerably more risky. So you are rather more confident using your bicycle and making sure you reach your destination than trying to fly an airplane that you don't know how to fly using a manual that is really hard to read, and not being sure if you are going to reach your destination.</p>
     <p>[3:35] My talk today is trying to see how we can have certain things in your workflow so that you can start learning all the new features that are in the latest specifications that are available. So you can start making the switch much quicker.</p>
     <p>[3:50] In 2000, the way the web worked was that all you would need was CSS and HTML, and that's all the web was. Primarily web pages were very informative and static.</p>
     <p>[4:02] At best what was supposed to save us all was XHTML, giving structure to that content that you had. And your worst problem at the time was actually trying out which was the right element. Was it the B, the M, or the I that were strong? That was your worst problem at the time.</p>
     <p>[4:21] But in 2011, your web is not just CSS and HTML. You have web phones. There are 3D cameras. There are APIs and some kitchen sink, and then that becomes the web. It's all very dynamic. It's no longer just static information that just gets served to the client. The browser does a lot more than what it used to do in 2000.</p>
     <p>[4:41] HTML is just one of the results. It's not the only one. Your easiest problem now today is choosing the right element. That is no longer that big of an issue.</p>
     <p>[4:53] But unfortunately, our workflow somehow does not seem to have to updated in the whole 11 years that we have been doing web development. So in 2000, you would be doing cutting up Photoshop, chatting on IRC, then using the old project as a starting point. Keep deleting whatever you don't want, and then you'd be reading Slashdot then.</p>
     <p>[5:12] How many of you remember Slashdot still? Do you still read it? No, OK, good.</p>
     <p>[5:18] Then you write mark-up. Then you write CSS. Then you will check in your current browser, which might have been IE6 at the time. Then you would submit to your client and the client will say, &quot;Make it work IE5.5 for Mac.&quot; Then you try to hang yourself and you will be unsuccessful, and then somehow make it work, and then you'd be happy.</p>
     <p>[5:36] If you look at that workflow in 2011, typically it has not changed much. We still do work out of Photoshop. We still, well, we've now reread it. And then you'll be using your old project as a starting point again, which is the same way we used to do. Write markup, write CSS. The new thing now is we will be using JCrop plug-ins. Yay, that's new.</p>
     <p>[5:54] Then you will check on your current browser, which typically would be a modern browser like Opera, Chrome or Firefox. Then submit to your client and client tells you that it needs to work in IE6. Then you try to hang yourself again and that won't work, so you start trying to do your best.</p>
     <p>[6:10] If you'll notice, the workflow has not changed much at all. But the kind of web pages we now create has changed dramatically. They are no longer just visual. Your requirements of the web far exceed what Photoshop mock-up can just provide you. So you have a lot more user interactions.</p>
     <p>[6:28] The user is not just coming to your web page to get information, but to do an action, to pay a bill, find a friend or plan an activity. Users are also much more impatient these days.</p>
     <p>[6:41] In 2000, the kind of bandwidth that you had was very, very slow. So users expected to wait for a while for a page to load. But nowadays, the bandwidth that is available is really high, so people tend to be very impatient for pages to load and not just on desktops, but also on devices that they use.</p>
     <p>[7:02] Web pages are also much more complicated these days. The content does not just come from your server, but it comes from your Twitter integration, your Facebook integration, the ads. All of these things feed into your site and you need to be able to know what works where and how to use the effectively so that the page performance is not impacted.</p>
     <p>[7:23] So your workflow, why does that matter in all this? First thing is, when you have a good workflow you can abstract away the obvious and the very mundane tasks. You can cut away the tedious tasks that are associated with creating a website.</p>
     <p>[7:37] For example, if you have a website and you have to create sprites, imagine doing that again and again manually. Imagine doing that again and again manually. If you can create a workflow that is automated, it would make your task of maintaining a site far more easy and far more quick.</p>
     <p>[7:51] And you can now focus on what really matters, which is all these features that I mentioned, all the new features that are available in the new standards or making sure your page loads quicker rather than working on which element to use, if there is a missing tag, or if your CSS is valid or not.</p>
     <p>[8:10] What would a 2012 workflow look like? Now, I don't want to give you answers. My thing is to just show you what are the ways in which you can use the new technologies and what are things that you should be looking for.</p>
     <p>[8:23] For example, we have been using developer tools for a while, for debugging CSS, JS, and your markup. That is fine. But you also can use developer tools to test for other devices, have your page will render and the performance of your page, and the kind of resources it's requesting. Those things need to be looked into.</p>
     <p>[8:42] We have also used version control systems for a while for a code, but you could use version control systems for your design and the prototypes that you make.</p>
     <p>[8:51] You also need to be aware of making deliberate design choices based on feature support in browser and no longer use browser sniffing.</p>
     <p>[9:00] You also need to be aware of the kind of polyfills that you'll be using. How many of you know what polyfills are? Oh good, so I don't have to explain. If you don't know what they are, ask the person next to you.</p>
     <p>[9:12] While you use polyfills you also, because of the way the web has evolved we have a lot more complications and you can now use preprocessors to remove all those complications and make it far easier to work with markup and CSS and JavaScript. I'll talk a little bit about some of the preprocessors and my favorite one.</p>
     <p>[9:36] Finally, when you're doing your workflow, learning is not a passive activity that you do outside of work, but needs to be involved within the kind of work that you're doing actively. So you'll have to start learning to read the spec and start loving specs. And be part of - I can see people laughing... Actually start learning deliberately rather than doing it as some sort of hobby that is outside of work.</p>
     <p>[10:06] First thing I would like to talk about is developer tools. As I mentioned, it's not just for debugging. You can also test in devices. For example, Opera Mobile Emulator has a Mac app that you can use that will show you how it will look like on different Opera installations.</p>
     <p>[10:26] For example, that's a Galaxy Tab emulator. This is the Nexus S emulator and how it would look like. You can also use it for remote debugging. Let's look at... [laughs]</p>
     <p>[10:45] So if you look - I can do a very basic debugging. Oh great, this is hung. Never mind. We can do remote debugging.</p>
     <p>[10:57] You can use the basic emulator to test how your page would look like on different devices. You don't have to really - especially if you have prototyping a page, rather than doing it on Photoshop you're doing it in HTML.</p>
     <p>[11:11] If you want to quickly see how it will look like on different devices you can use the remote emulators. Even iPhone has an emulator. Use those to quickly prototype and see how it will look like. And remote debug.</p>
     <p>[11:25] There is also documentation that is available for Dragonfly and there is also documentation for other browser as well, the developer tools that are available.</p>
     <p>[11:32] When you're using developer tools just make sure you're proficient in all of them, because different browsers have different kinds of features that you have to debug for. Just make sure you master at least one of them so that you are proficient in all of, so that you can prototype your things much more quickly.</p>
     <p>[11:48] Version control, I don't think I need to mention this because I'm sure everyone's using it. But the thing to know is that there are these two version control systems that are much more powerful and much more used these days than, say, SVN or CVS even. Git is what all the cool kids use.</p>
     <p>[12:07] And if you really want to learn about Git you should read those links and/or, this is where I try to pimp my project which is HTML5 Boilerplate. So if you want to learn Git and also contribute to a project, you can go to the issue queue in HTML5 Boilerplate and start seeing what other issues you can contribute to and start learning that way. It's a win/win situation.</p>
     <p>[12:29] Let's talk about deliberate design choices. A lot of times the way we develop websites is typically for desktops and we don't look at how it will look like on other devices or on browsers that don't support some of the features that we are using.</p>
     <p>[12:42] As I said, this is 2011 and we have the kitchen sink and everything else that is part of the web. So you need to look at what features you will be using for creating your websites.</p>
     <p>[12:54] What are the features that would be most useful when you are creating your web page? If it's WebGL or if it's Catalyst or if it's something else. Because you're no longer restricted to Flash or JavaScript anymore.</p>
     <p>[13:05] How well are these features supported in different browsers? So how would it look like on browsers that lack some of these features? And how would it look like on browsers that lack all of these features? For example, IE6.</p>
     <p>[13:19] So you need to be deliberate about your design choices so that they don't look broken and present a bad experience to the user.</p>
     <p>[13:25] When you're doing a feature-based evaluation of your designs, you also need to make sure you have a proper polyfill policy. Because there are some features which are absolutely necessary and some browsers may not support them. So you need to use the kind of script for a solution that will mimic the features on the browsers that do not support those features.</p>
     <p>[13:48] What features you're willing to polyfill and how would it look like on browsers that do not support those features if you are not polyfilling them?</p>
     <p>[13:56] There are certain things that I would highly recommend you never ever use polyfills for. This is terrible if you are using polyfills for these things, which is text-shadow, gradients, box-shadows, and border-radius. Especially because these are very much bling features and user, if they're coming to a website, do not expect to see border-radius on your site or see there is a box-shadow.</p>
     <p>[14:19] All the user wants is to make sure his or her actions can be taken on your site. So don't ever use polyfills for these, because it just makes the user experience worse on browsers that do not support these features.</p>
     <p>[14:31] But you need to look at providing a polyfill for some of these, because sometimes you have animations that are complicated but are essential to how the user uses the site, that you would have to provide a polyfill. And if you're using canvas and you're creating a game or a user needs to play a game and you need to provide a polyfill so that the user can play the game on other browsers as well.</p>
     <p>[14:55] And for web storage as well, so that you can have that experience of the web app seamless across all browsers.</p>
     <p>[15:01] So there is a very good jQuery plug-in that sort of makes these kinds of deliberate design choices that impact the way the plug-in is used on different browsers based on feature support.That's called Isotope. How many of you have heard of Isotope? OK, not that many. So Isotope is by David DeSandro. Let's look at it.</p>
     <p>[15:26] This is how Isotope looks like. Each of these elements is actually a layout container and it can contain any container within it. What Isotope does is arrange it in this matter where it's like a fitting in a puzzle. This is not possible with CSS right now. It may be possible in the future, but it's not right now.</p>
     <p>[15:45] So if you filter them, you can see the transition effects that happen. What Isotope does is that first it looks for Modernizr. How many of you know about Modernizr? Good, OK. So it looks for Modernizr, if it exists, on a page. If Modernizr exists, then it uses Modernizr's test.For 3D transforms, 2D transforms, 3D perspective and transitions, if they are, and sees what the test results are.</p>
     <p>[16:19] If Modernizr does not exist on the page where Isotope is being used, then it will run its own simple test for all these features.</p>
     <p>[16:28] Now, based on the feature support on the browser, based on these tests, it'll either use the 3D perspective, the 2D transforms, or the transitions if they're available. Now, if transitions are not available, then what Isotope does is to simple JQuery animations to trigger animation that is similar to what you would get with CSS animations.</p>
     <p>[16:49] Now, it's not exact or it's pixel-perfect, but it provides an experience that is best available for the browser, depending on the feature that is supported.</p>
     <p>[17:01] OK, so vendor prefixes are not exactly part of workflow, but it's something I would love to talk about, because I really love to hate vendor prefixes. They are necessary, but they are a necessary evil. If you are going to use vendor prefixes, especially for properties that are implemented across all browsers, just make sure you use all of those prefixes, or you could develop using one prefix and use this online tool called Prefixer.</p>
     <p>[17:31] That could create the other prefixes for you. That will make your job much, much easier. And before you use a prefix, you need to be aware of when you should be using a prefix version and when you should be using a prefix-less version.</p>
     <p>[17:47] So there is a lifecycle for a prefixed feature. It starts at this stage. It is that when you find a prefixed CSS feature or JavaScript feature in a browser, it means typically two things. One, it could have started as an implementation of a feature that's found in an unstable, working draft of a spec or it could be a standalone, third-party feature that's only available on a certain browser.</p>
     <p>[18:13] So you need to be aware that if you're using a feature, if it is a standalone, third-party feature or if it's part of a spec. If it's a third-party feature, you may not want to use that as often as you want to in the cross-browser space that you're developing.</p>
     <p>[18:28] Once a prefixed feature is supported, and if that particular feature that is implemented in an open standard goes to candidate recommendation, there are some other complications involved, which I am not mentioning. Then browsers can start implementing it without a prefix. When that happens, you can stop using the prefixed version.</p>
     <p>[18:51] There's a lot more detail that's available on this Wiki page, which I highly recommend you start reading.</p>
     <p>[18:57] So because of this, you would need to be vigilant on when to be dropping prefixes, especially because it makes your job easier. You can stop using prefixes for these things at least in CSS because they are all part of specs that are now candidate recommendations and all browsers have prefix-less support available.</p>
     <p>[19:16] So box-shadow, border-radius, background-clip don't use prefixes, because you can always have good fallbacks and it doesn't look too ugly when you don't have a particular box-shadow or border-radius. This also brings me to the topic of preprocessors and because when the prefixes are so tedious to write, especially in CSS, it's painful to keep writing the same thing again and again.</p>
     <p>[19:43] Preprocessors try to automate that for you. Now, the good thing about preprocessors is that it's quick, in the sense that you can write using things much quicker because of the functions that are available in them. And they are not tied to Legacy syntax like CSS and HTML. So they can invent using syntaxes. They are easier to use and easier to understand, and faster for you to learn. So you can start prototyping or using them much more quickly.</p>
     <p>[20:10] Another advantage of preprocessors is that they can catch all the syntax errors, because when you are writing directly in your CSS or HTML, it's easy to miss a closing bracket or a closing tag. Then it all screws up and you don't know where exactly you made the mistake. But with the preprocessor, it alerts you when you are making that mistake and you need to make sure that you fix that before you start tagging your HTML or CSS.</p>
     <p>[20:41] It also subtracts away the manual labor, as I mentioned. I would like to only speak about CSS preprocessor because this is something that I have been using for a while and something I found most useful for me in my workflow. Which is, well, there is Sass or Less, and I am a Sass person.</p>
     <p>[20:57] How many of you know Sass? Oh, that's awesome. So how many of you know Compass? Oh, good. OK, so I really like Compass because it's a framework on top of Sass and it provides a lot of powerful functions that typically you don't find in CSS and it gives you the ability to program styles.</p>
     <p>[21:19] There are some magic that you can do with Sass and Compass. For example, in Compass you can do sprites automatically, and I'd like to just show you how you can do that. So let me go to demo.</p>
     <p>[21:32] The way you would typically create a Compass project is to do your Compass edit. That will create a project for you, but because I already have a project existing, it's not doing anything. Then I will do &quot;Compass watch,&quot; which will compile my Sass files into CSS's files.</p>
     <p>[21:58] If I look here, oh, let me see. So I have a very basic -- is it visible to you guys? No? Yeah? Good, OK. So I have a very basic, if you'll notice it all looks like CSS because it is CSS. And this is just a very basic snippet of CSS from the boilerplate CSS.</p>
     <p>[22:36] I have in my images folder something known as Icon. Let's just look at that. I want to create a sprite of all these images. I don't want to keep doing it myself. I want to automate it. The way I will do it is typically by using @import. And this is all I need to do.</p>
     <p>[23:08] Then if I look at my Compass and go back, you would see there is an icon sprite that has been created. It has automatically generated because all I did was @import and it's generated. If you look at the CSS that is output, I have a rule called icon sprite and there's a background sprite attached to it.</p>
     <p>[23:36] Now in my hash table, in my markup, I want to use the sprite for my links. I want to do an image replacement for each of these links and I only want to show the icons for each of these links.</p>
     <p>[23:49] So I have a class called icons and then each of these links has a class name, too, as ours is share or spin. So the way I would do that is that I would say .icons because I want the parent selector. Then I have .rss because I'm using inheritance and I don't want to keep repeating .icons for each of these selectors.</p>
     <p>[24:10] Then I'll say @include and the name of the folder then -- this is the function -- then the name of the particular image in that icon's folder, which is rss. What that would do is, in here now you can see there is icons. This rule now exists. So you have a selector and that has a background position and this rule has been updated to have the new selector, .rss, which also refers the same sprite image.</p>
     <p>[24:42] So you can do the same thing for another one, which is, let's say, share. Then you can say .share, same thing, and it would work. So now it's generated and all of these positions are calculated automatically.</p>
     <p>[25:02] If you have to change a sprite image, you don't have to go around looking at the particular sprite and then updating it manually. You can just replace the image in the folder and it will be automatically created for you. You don't have to update any background positions, nothing. It just happens automatically, which makes it much more easier for upgrading sprites.</p>
     <p>[25:23] You can also specify the vertical spacing, the horizontal spacing between each of these sprites and even individual sprites if you want, using Compass functions like these.</p>
     <p>[25:37] Also I would like to speak about @extend because I think that is really, really useful. As I mentioned, I have this snippet of code here for image replacement. If you notice here, it is output just as it is, no change.</p>
     <p>[25:51] The way you would use this is to have a class called .ir on every element that you want to have image replacement applied on. I don't like that because it's sort of untidy. You have to keep adding those class names in the markup and I don't like to do that.</p>
     <p>[26:08] So Sass makes it a lot more easier to do that without adding things in the markup. I have .icons and every link within this selector I would like to have image replacement applied. So all I need to do is extend that particular class. What that would then do is that, if you notice, now I have .icons a. That selector is now added to that image replacement rule. So it will be automatically used.</p>
     <p>[26:39] So every anchor image within an icon's selector would have image replacement applied. So it's not just on the parent. If you notice, it's also here. So you don't have to worry about anything else, as long as you use @extend. It sort of makes it easy to do what Nicole Sullivan does. It calls object-oriented CSS because it's a cleaner way to use selectors instead of repeating yourself multiple times.</p>
     <p>[27:07] Let's look at what else. Maths -- so there's... Oh, let me see. Oh, there's... It's not there. Let me see. Oh, I don't have Internet? Oh, good. I don't.</p>
     <p>[27:33] OK. So Chris Heilmann recently wrote this article on using math animations in JavaScript. Especially I was fascinated by this particular demo that he had, which was of plotting elements around in a circle. Then I said, &quot;This is pretty simple to do with Compass. Let's just do that,&quot; because Compass has trigonometric functions available, cos and sine, and that's exactly what's being used here, even pi.</p>
     <p>[28:03] So I wanted to do that and see how it would render. This is my result. This is what we'll be creating with the Compass. If you notice, each of these circles is around the center point and the way we create it is using these trigonometric functions.</p>
     <p>[28:23] I have a particular mixin. A mixin is a function that will output a set of declarations or rules that have different values, depending on what you pass in. For example, in this mixin called arc, I'm passing in some arguments. Then based on those arguments it would output a transform -- see, it says transform -- and a background color. We'll see how that works.</p>
     <p>[28:53] So I'm just going to copy this code.</p>
     <p>[29:01] So what I'm doing within the mixin is that I'm passing in a variable that is just a count of each of the elements for which this mixin will be outputting a declaration for. Then I have an angle, then I do a cos of that angle, which is what Chris Heilmann has done in his code, too, but except this is not JavaScript. This is Sass.</p>
     <p>[29:26] Then I get the x-position. I get the y-position. Then based on that I apply another mixin, which will generate the prefixed versions of all the transforms that I want. Then I have a background color which uses the argument that I pass in to automatically generate a color based on the base color, which is set here with the HSLA value.</p>
     <p>[29:52] So in terms of the styles, this is just basic styles. If you notice, we have variables called radius that we're using. Then we have another include transition because I want a transition to be applied as well. Then using that transition mixin would generate all the vendor prefix transitions that you want.</p>
     <p>[30:15] What is the best part? It is the follow up here, because I don't need to write for every element the kind of styles that I need. All I need to do is use the four loop and use the end selector, because I can use that. Then use the add-include to include that mixin so that it outputs the right code.</p>
     <p>[30:34] Now, let's look at how this code will... &quot;Compass watch.&quot; Now, if you look at the style, that's CSS. I have all of these prefixed values generated. All of these translate with using the kind of cross angle, the side angle to generate all of these X and Y positions. It has all of the prefixes also generated here for me. So you don't have to worry about writing them manually again and again.</p>
     <p>[31:12] Then this is the result that you see, which uses all these things. So it's very few lines of code and this is exactly what I was using to create HTML file readiness. Basically, it has 28 lines on an arc, and there is no way I could have just manually typed this in the CSS.</p>
     <p>[31:33] It just uses four lines, a four loop in Sass, to transform each of these rays across a semicircle. It's much easier to do than to start calculating it manually and typing it on your own.</p>
     <p>[31:54] OK, it also does colors. As I mentioned, you can use multiple colors with an argument, and you can darken and lighten, all these color functions that are available to you. Also, the vendor prefixes are taken care of for you.</p>
     <p>[32:08] There is also another way to make your stuff with the bill scripts. For example, you can optimize your resources for faster performance using a bill script. You can run PNG optimizations on your resources and you can make sure that these resources are a lot more maintainable by automatically revving those files.</p>
     <p>[32:29] All these things, you can create, automate the generation of manifest files and concatenate your scripts so that you only include one script file at the end and then make it easy to deploy to production.</p>
     <p>[32:41] We have in Boilerplate a bill script that is hopefully robust because we worked a lot on it. You can use that as your base starting point to work on your projects so that you can get to production much more quickly and have a lot more performance benefits without doing much of the work involved.</p>
     <p>[32:58] When you have all of these features and things that we just talked about, you would want to know what are the other ways to optimize your workflow? HTML5 Boilerplate documentation has some of these things covered, some of the troubleshooting techniques, when you want to know why something is not working in a particular browser. The documentation is pretty exhaustive and I recommend you start looking into that.</p>
     <p>[33:22] If you're looking for feature support, caniuse.com has a very good support table and I hope you are all using that already. I don't think I have to mention that. Then the Modernizr Wiki page is where you go for polyfills. But just make sure you don't go overboard with polyfills because they can really slow users' experience of your web page.</p>
     <p>[33:46] I also mentioned about active learning. What I mean by that is that we are now at the situation where the implementation and the spec features that are available are changing so frequently that you are not really sure which implementation is right or if the spec is right. So you need to start actually reading the specs these days because they are so volatile and dynamic.</p>
     <p>[34:12] The specs are available. The CSS specs are available at dev.wdoc/cssworkinggroup, which is where you will know which specs are most actively maintained by the date modified. You will know what specs you can expect to see in the future very quickly.</p>
     <p>HTML5 often links of the different specs that are maintained for HTML5 and associated specifications. If you are unable to understand some specs, or you want to know more, all of these browser windows have now all these articles that they write for explaining some specs and how you can implement them in a cross-version manner across different browsers. Like we have TARA opera.com, and Chrome has HTML Fireworks, and Mozilla has [indecipherable 34: [34:28] 58] .</p>
     <p>[34:59] Go through those articles to understand what the specs mean. If you still have questions, I hope you all are on IRC. How many of you use IRC? Wow, so few, I am amazed. OK, but we are, a lot of us people hang out on IRC at the HTML channel. We try to answer questions. If you want immediate answers and responses, I recommend you be on it.</p>
     <p>[35:27] Once you know you are somewhat confident with your specs and the kind of features that you are looking for, what features are available, I recommend you do something furthermore so that you can start being even more an expert in using all of these features. Which is to submit bug reports to browsers, because when you start using the features extensively, you start running into edge cases that typically you would not run into.</p>
     <p>[35:51] There are so many features, the kind of combinations that are possible are not always exhaustively tested. So the different browsers may have different kinds of bugs associated with the combination of different features.</p>
     <p>Then [indecipherable 36: [36:03] 08] wrote an excellent article on how to submit bug reports. I highly recommend you read that and start following it if you think you can spend some time on it.</p>
     <p>[36:14] If you consider yourself an expert user, you can also participate and re-up on spec discussions, which happen on some of these mailing lists. These are some of the popular mailing lists. Just be aware that you will get at least 200 mails a day if you subscribe to these mailing lists. So your only hope is that you start filtering your mails and then maybe once a week go through them and try to understand what is happening.</p>
     <p>[36:39] Typically, you will have browser implementers commenting on the performance of different kinds of features or how a particular feature seems to be lacking in something. Or sometimes you can have web developers giving feedback on a feature. So it's interesting to understand a particular feature. Maybe it's about a radius, or median radius or something like that.</p>
     <p>[37:02] You could also, if you're using something very extensively and you find that particular feature on API or the interface lacking in something that you think is necessary, submit suggestions to editors. Now, the problem is that editors receive a lot of suggestions. Most of them are typically not useful suggestions. It's hard for them to take your feedback seriously.</p>
     <p>[37:26] So luckily for us, there is this awesome video by Colin Jackson, which is actually about how to get security features supported in browsers. But it also tells you how exactly you should go through to create the kind of feedback that will be heard and understood by editors of specs and ultimately implemented, even based on the way you put your feedback in.</p>
     <p>[37:50] So I recommend you see this video. It's about 40 minutes. Especially if you are looking to submit feedback and make sure that it gets gets adopted in different specifications.</p>
     <p>[38:00] When you're doing all this, there are also some tools that you could use, especially for if you are looking to isolate some bugs in browsers or bugs in your own code that you have. So jsFiddle and jsbin and gist.github.com.</p>
     <p>[38:13] The good thing about jsFiddle is that you can actually use a Gist to output the demo or render that on Fiddle. JsFiddle has divisions, but the thing is if jsFiddle is down, your code is down. So that's not very useful, and jsFiddle is down a lot of times. So Gist is awesome because every Gist is a Git repo. So now you can have it locally store.</p>
     <p>[38:42] Now, I asked someone to help me build an end to end, local command line interface solution that creates a Gist from a local file you have and then outputs a jsFiddle URL that you can use to send to your users or copy it for isolating these bugs. Then Mickael of MKLabs on Twitter created a solution using a non-package solution and all you need to do is NPN install something, which is in this link.</p>
     <p>[39:13] I don't know how this magic happens, but you can start creating Gis files and jsFiddles out of just your local files using this solution.</p>
     <p>[39:25] If you have something more complicated then you can put your files on your Dropbox, like this talk is actually on a Dropbox folder so that it's backed up and you can link to that.</p>
     <p>[39:37] So in summary what I would like to say is that start mastering your developer tools and testing advices, or at least emulators, so that you at least know how it looks like on everything that is not a desktop. And use version control.</p>
     <p>[39:53] Make sure you're using polyfills, but our vendor prefixes responsibly because they can quickly get out of control and bootstrap your web page design or your architecture with preprocessors so that you can focus on making sure what interactions you have to work with on your web pages, architecting your own web pages, the kind of features you need to be using and how maintainable it is.</p>
     <p>[40:21] If you are even more interested in the OpenWeb, start submitting bug reports, keep up with the latest features, and be an active web developer.</p>
     <p>[40:30] So that's all I have to say. Thank you.</p>
     <p>[applause]</p>
     <p>Divya: [40:43] Questions? Anyone. Yes.</p>
     <p>Audience Member: [40:51] In the beginning you mentioned about the developers workflow and what is the best state of how we're developing websites. It would be interesting to know what's your take on developing the browser. Would you recommend going to the browser right away or start somewhere else, Photoshop, something else?</p>
     <p>Divya: [41:10] No, I think you should start in the browser. That is my way of designing anything.</p>
     <p>Audience Member: [41:14] Hey.</p>
     <p>Divya: [laughs] [41:15] Because I think the - as I mentioned, Photoshop has outlived its utility these days. We have a lot more features and the way we work with... The browser features are implemented, there's no way Photoshop can match the kind of rendering that you expect on a browser. [41:31] Also, when you submit a Photoshop markup to client, the client expects that exact look and feel in each when they actually see the output and that never happens. Then they are always disappointed with the output. So you need to, if the client's seeing - if you create prototypes in HTML and the client is happy with the prototype in their particular browser they're viewing it in, you are safe because you know that they will come to expect that kind of quality in your pages. Rather than trying to polyfill, border-radius, or whatever to make sure it looks exactly pixel perfect.</p>
     <p>[42:11] Anyone else? Yes.</p>
     <p>Audience Member: [42:20] One problem I always have with browser testing is Opera Mini for testing locally and having to punch a hole through my firewall to get to the Opera servers to talk to my local server. Do you have any better recommendations for that?</p>
     <p>Divya: [42:33] Sadly, no. You just have to use the proxy, or whatever, to do that.</p>
     <p>Audience Member: [42:39] OK.</p>
     <p>Divya: [42:39] Yeah. [42:44] Any other questions? Oh, OK.</p>
     <p>Audience Member: [42:48] Hi, Divya, great talk. Thank you.</p>
     <p>Divya: [42:49] Oh, thanks.</p>
     <p>Audience Member: [42:50] Did I just see the coolest command line prompt ever?</p>
     <p>Divya: [42:54] Uh, OK, yeah, maybe. [laughter]</p>
     <p>Divya: [42:57] It uses something called Zsh, OMI Z S H, whatever. Yeah, it looks cool. That's why I installed it, that's all.</p>
     <p>Audience Member: [43:06] OK. Thanks.</p>
     <p>Divya: [43:09] Any other questions? Oh.</p>
     <p>Audience Member: [43:16] Hi. Thank you for this great talk.</p>
     <p>Divya: [43:18] Oh, thanks.</p>
     <p>Audience Member: [43:19] I asked yesterday to Leah, what does she think about things like CSS three PIE? What do you think about it and it could be a good solution for client's that require something like border-radius on Internet Explorer.</p>
     <p>Divya: [43:35] Yeah. My view is that CSS three PIE is great. It's very optimized. But use it only if you have absolutely, absolutely, absolutely need it. I think you shouldn't need it at all, but there are some extreme emergency cases where you might want to use it. So use it then. But I wouldn't want to recommend it out of the box. [43:58] OK. Any other questions? Oh.</p>
     <p>Audience Member: [44:04] So we saw some really good shortcuts using Sass there, but when you would look at those in Opera Dragonfly or Web Inspector, the line numbers would be wrong, I guess, from what you wrote originally. How do you work around that?</p>
     <p>Divya: [44:18] That's true. Well, there is a way to actually comment out the Sass line numbers on top of each of these CSS files. So when you see that particular CSS line number, you can find out where it is in the Sass file. So that is possible. But I have just commented - I don't like to do that. I typically don't have much problem looking at the particular selector and finding it out in the Sass file. But yeah, you could do that too. [44:45] And there is also a Fire Sass extension, I think, which would output the line numbers. I'm not sure if it's still maintained or not. That was available for a long time ago. But, yeah.</p>
     <p>Audience Member: [45:02] What do you think about JavaScript preprocessors and mainly CoffeeScript?</p>
     <p>Divya: [45:06] I don't know about them, so I will not comment on them. [laughs] [45:15] Anyone else, questions? On top. Is that all? Great. Thanks.</p>
     <p>[applause]</p>
     <p>[45:27]</p>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2011/sessions/the-new-developer-workflow-divya-manian.md" id="comment">
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
