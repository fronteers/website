<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>CSS Workflow by Jina Bolton · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p337">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>CSS Workflow by Jina Bolton</h2>
     <h3>Videos</h3>
     <video width="480" height="270" src="/_downloads/2010/jina-bolton-css-workflow.webm" controls>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2010/jina-bolton-css-workflow.webm">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <p><a href="http://vimeo.com/15982903">Watch high quality video on Vimeo</a><br><a href="/_downloads/2010/jina-bolton-css-workflow.webm">Download video</a> (WebM, 165MB)<br><a href="/_downloads/2010/jina-bolton-css-workflow.ogv">Download video</a> (OGV, 66MB)</p>
     <h3>Transcript</h3>
     <p>Jina Bolton: [0:05] There it is. OK. I don't really know any bad CSS jokes either, sorry. So I already said hello. He already kind of told you about me, so I think I can skip past this part. I run a blog, Sushi &amp;amp; Robots, Art in my Coffee that is also co-run by Meaghan Fisher who speaks tomorrow.</p>
     <p>[0:30] I just started a new job. I am the user experience designer at Engine Yard, so if you use Engine Yard and you have any issues with their dashboard UI, please come let me know because I am supposed to fix it.</p>
     <p>[0:43] Previously, before that, I worked at Crush and Lovely, an awesome design studio in New York. And before that, I worked for an online store that sells totally awesome computers. Onward.</p>
     <p>[laughter]</p>
     <p>[0:55] So I'm here to talk about CSS workflow. I think CSS workflow is something that needs to be talked about a lot more, because there is a lot of great blog articles, a lot of presentations on, like, CSS3 and all the really cool things you can do with it. But the main part I think that really makes you a true master of CSS is mastering your workflow. So what I am aiming to help people is have less of this. Those are not my hairy legs. This is just a photo I got.</p>
     <p>[laughter]</p>
     <p>[1:30] But less working late. So does workflow really matter that much? It's an obvious answer. Yes. There are so many rewards in mastering your workflow. Obviously, it gives you more... Am I clicking a lot? Sorry. A good workflow gives you more time to be creative. And honestly, that's what you're wanting to do anyway. You're not wanting to just focus on, you know, the code aspect of it, unless you're a weirdo.</p>
     <p>[laughter]</p>
     <p>[2:11] What your goal is is to actually create things. And that's what you should be spending time doing. So, having a good workflow means you're going to have a good design. It also means that you'll have good development and good business. Because, let's face it, time is money and if you're faster, you're going to be able to do more. It's just good for business.</p>
     <p>[2:35] So I'm not up here to tell you that you're doing it wrong. Workflow is a very subjective thing. Everyone has their own way of doing things. You know, you may disagree with everything I tell you today, come at the bar and want to hit me in the face. You know, there are a lot of strong opinions in CSS workflow. The thing I want to tell you instead is to be creative. Really think about how you can use CSS in a really creative way that will help your projects be more creative.</p>
     <p>[3:12] Also, be smart and really think about what it is you are doing. It is really easy to just kind of become mindless zombies working on your CSS. But really think about what it is you're doing. Be efficient. Like I said before, time is money. You want to try to find all the ways that you can be as efficient as you can be, especially if you are on a team of more than one developer that are going to be touching the CSS.</p>
     <p>[3:39] Be realistic. This is something that I struggled with when I first started working on large scale websites. I would have these really idealistic ways that I thought things should be. But all I had really worked on before were my, you know, little static, brochureware type websites. And I had to learn that while, yes, it's good to think about that most idealistic ways that CSS should be, you also have to be realistic, especially when you are working at...</p>
     <p>[4:10] You know, I'm curious, is anyone working on like, a large scale website on a team of people? So yeah, it's a lot of us. So sometimes you have to put down your ego and be realistic. I'm still learning to do that myself.</p>
     <p>[4:26] And I think the biggest part of having a good workflow is being psychic. What I mean by that is, think about where the project will go in the future. It is really easy to just code... Like, let's say you're given a design and you're building that design, it's really easy to just kind of think about what's been given to you.</p>
     <p>[4:45] But you have to think past how it's going to look today, but think about how it's going to look tomorrow and five years from now and 10 years from now, and develop it in such a way that it is able to, you know, scale properly.</p>
     <p>[5:01] So this one of... a good quote that I found that I thought was pretty relevant. &quot;It used to be that designers made an object and walked away.&quot; You know, this is like, back when they are doing like, print projects. &quot;Today the emphasis must shift to designing the entire life cycle&quot;. And so, when you're, you know, doing the design or designing a CSS architecture, you're designing a life cycle of a project, not just a one time, you know, push, if that make sense.</p>
     <p>[5:33] So the parts I guess I decided to focus on was evaluation, and I am going to go into more detail in all of these, you know, really looking at what you have to build. Organization... I can be a pretty messy person. I'm sure a lot of us can be pretty messy people, but it's really important to stay organized. Meaningful markup, it goes hand in hand with building a really solid CSS architecture and having good workflow. CSS architecture, of course. And the part we all hate, the debugging part...</p>
     <p>[laughter]</p>
     <p>[6:10] It's my least favorite part. I try to make the intern do that part. And of course, I'll just list off a couple of resources.</p>
     <p>[6:22] So, evaluation. So this was a kind of a splash page I worked on when I was at Crush and Lovely called the Achilles project. Unfortunately, the site never went live so I feel OK to use this as, you know, a quick example. If I'm given... You know, or in this case, I designed this. I looked at it, and I need to build it out. It's a pretty simple one page, so you can just kind of look at it and say like, &quot;OK. Well, I have this image that fades to black on the left, right, and bottom.&quot;</p>
     <p>[6:55] So it's pretty easy to figure out how you're going to build it. You're going to have a black background for color. And then, when you start jumping into other pages, this would be, you know, when it finally launched, this is the home page. Well, it didn't actually launch, but when it was to finally launch.</p>
     <p>[7:11] You know, it might be quick to just kind of jump in and use the same stuff, but things may vary. So you have, you know, again, it fades to black, but maybe things change like things also fade to gray.</p>
     <p>[7:23] So you have to kind of really look at what's given to you and think about it. You know, things like bread crumbs, do I want them to scale? Do I want them to be fixed? I usually try to make mine scale. Things like, you know, your menus, how are you going to... how are you going to interact with those menus and what kind of technology you want to put into that. Will there be any JavaScript or is it going to be pure CSS?</p>
     <p>[7:48] And you know, like, if you have... It's kind of hard to see on here, but at the bottom of the container there's like a slight shadow. So, you may consider things like, you know, &quot;Am I going to use box shadow for that or am I going to use a background image?&quot;, et cetera. And things like, you know, form elements, how are my form fields going to be styled?</p>
     <p>[8:11] And obviously, as you're evaluating the page, you want to focus on the actual layout, how it's structured, and think about how that may stay the same or how it's going to change over time. And that gives you kind of a foundation that you can build upon.</p>
     <p>[8:27] So when you have a secondary page, there's going to be a lot of similar things to the home page. But then, there are going to be things that are different. You know, like, maybe the active state jumps out of the margin. How do you want to handle that? Obviously, you know, if you are using overflow for whatever ridiculous reason, you're going to run into issues. So, you have to kind of take all that into consideration.</p>
     <p>[8:53] I don't know if you can see the transparent black on there, but, you know, if you have captions anchored to the bottom of an image, like on top, and it needs to flow or be as tall as it needs to be just according to what content is inside, you have to consider how you're going to build that. And the first one is larger than the other, so, et cetera.</p>
     <p>[9:17] And, of course, you know, look at the grid structure and see what is the same, what is different. And, you know, if you have a third level page, you might just look at things like, &quot;OK, this is going to zoom out. How am I going to handle that? Is that going to be JavaScript? Am I going to use Flash? Am I...&quot; Hopefully not.</p>
     <p>[laughter]</p>
     <p>[9:38] You know, like, what's the interaction going to be? You know, what size pickers, submit buttons, et cetera. And of course, a bit of structure.</p>
     <p>[9:52] So this is the part I think a lot of people skip but I think is crucially important, and that is to sketch it out. Like, kind of think through things before you just start jumping into code.</p>
     <p>[10:04] Now I have a bad habit of... Like, when I'm in a hurry, I just kind of jump into code. And then, sometimes I find out that I have to go back and change things because I didn't really think things through. So, just... You know, even if all you are doing is writing down like, &quot;These are going to be my IDs, these are going to be my classes,&quot; you know, just kind of think things through before you start building.</p>
     <p>[10:26] So you'd think the next step is to start creating your pages. Actually, I want you to think about creating systems. Because, if you think about it as pages, you're not really thinking about where the site can go or application can go in the future. You know, if you're thinking about everything in systems, you start to kind of create things in a more smart and intelligent way so it's more flexible and scalable.</p>
     <p>[10:54] So that brings us into organization. So this is just an example, you may think this is trash. That's OK. I'm just showing you an example of, like, I've seen some people organize their sites, they have their CSS, their images together, they have their JavaScript together. And some people even call out separate images in the CSS directory to keep all the layout images with the styles so that they are separate from their content images. You know, that's one way you could do it.</p>
     <p>[11:29] And if... I'm curious, how many of you use, like, Ruby on Rails? Just a few of you. This is a pretty common structure you would see in Ruby on Rails, where it's like images, javascripts, stylesheets. Because I have worked on a lot of Ruby on Rails projects, only in the view section. I don't program.</p>
     <p>[11:49] I have kind of taken it a little bit of a step further, especially on large scale sites, breaking the images into content and layout. So it's sort of this similar concept before where I like to keep my layout images separate from my content images because it's easier to kind of find, like... If you're having to locate an image, it's a lot easier to find it where that image should be.</p>
     <p>[12:12] And then, if you're using like, any libraries or frameworks, sometimes it's nice to keep those all together so that it's easy to just kind of drop things. You know, as things get updated, you can just kind of drop things in there and not really have to worry about touching what you've done.</p>
     <p>[12:29] So, another great quote that I think is relevant, &quot;Be regular and orderly in your life so that you may be violent and original in your work&quot;. And that's by Gustave Flaubert.</p>
     <p>[12:43] I probably butchered that. I just think that's a really fantastic quote. Because, if you're anything like me, you want to be extremely creative and, you know, really create cool things. But to kind of get there you have to know the rules to break the rules. So, that's a pretty common quote you'll hear. Like, if you've ever... You know, if you've gone to art school, they say that all the time, &quot;Got to know the rules to break the rules&quot;. It's kind of the same thing. Like, just be very organized so that you can take that and become more violent in your work.</p>
     <p>[13:17] So focusing on great organization is one thing, also great structure. And that's when you kind of get into actually thinking about an architecture. Great discipline... It's really easy to kind of pick up a best practice and then forget about it and then things kind of get sloppy. You have to kind of be disciplined about it.</p>
     <p>[13:42] And great habits... I find that when I start making, like, really good habits, and I'll bring up a couple of habits that I personally have that might help you guys hopefully. It really helps, like, if you create these habits, then you become more efficient. You become faster, and that lets you have more time to be more creative.</p>
     <p>[14:06] And of course, great time management... This is the one I have a huge problem with. So, I feel if I'm, like, really paying attention to all of these things, then that leads you into having a great workflow.</p>
     <p>[14:22] So going back on talking about structure... I'm not going to talk too much about HTML because there's already been, you know, HTML talks in this conference. But it is extremely important to have meaningful markup. I also just wanted to briefly mention about doctypes, whether you're using the HTML 4.01 doctype, or the XHTML strict, or the HTML5, which is the one I like the best because it's smaller, it's just so important to get everyone on the same page, especially if you're on a team.</p>
     <p>[15:00] When I started working at a really large scale e-commerce site before, I didn't realize that a lot of their sites run HTML 4.01. And some of their pages didn't even have a doctype. And I was just in my habit of writing everything in XHTML. Back then, I was, you know, all about XHTML strict.</p>
     <p>[15:22] You wouldn't think that that would actually cause a whole lot of issues, but it actually can. There were browser rendering issues. I would spend hours trying to debug things in IE, and I couldn't figure out why on earth something wouldn't work.</p>
     <p>[15:36] I had kept my static copy that works perfectly. But then, when it actually gets, you know, pushed out into an actual running environment, it would break. And it all came down to the doctype. So it's really important to get everyone on the same page knowing which doctype you're using. And when you create your HTML and CSS, like, really think about working towards that doctype.</p>
     <p>[16:02] HTML5 is actually a pretty good one because it's more forgiving. And I know that's kind of... Some people may look at that as a bad thing about it. But I think, if you're working on a large team of collaborators, it's a really fantastic thing. I can write my XHTML, close my tags, someone may not, and it's not going to mess anything up. Even though, I highly recommend, just close your tags, it looks neater.</p>
     <p>[16:29] You know, I'm a big fan of some of the new HTML5 elements that have come out. I wasn't sure about them when they first came out because I thought they looked presentational. But now that I've come to understand what they're used for, it's really helpful, not just on a semantic level.</p>
     <p>[16:47] But it also just, like, when you're trying to figure out what things are... And I'll go into a little bit more about that later. But when you're just trying to figure out what things are, it's kind of nice that it makes things a little bit more clear. You're not just using a bunch of divs, which, nowadays, should be just used for stylistic purposes.</p>
     <p>[17:07] So when you're evaluating a page... You know, I prefer to use page. You don't have to use page. I think it looks nicer than container or wrap.</p>
     <p>[17:17] Who's Twittering?</p>
     <p>[laughter]</p>
     <p>[17:20] Not cool! Sorry, so... And then... I pushed one too many. Anyway...</p>
     <p>[17:37] You know, thinking about what's your header, what's your sidebar... When I look at the grid of products, I see a list of products. And so I wouldn't use divs there, I would use an unordered list. And then, looking at each product, they are each a list item. So when you're evaluating, you kind of have to think about, like, what each thing is truly. It's not just all going to be divs and, you know, spans of divs.</p>
     <p>[18:11] Clarity is beautiful. This is so important when you're choosing what to name your classes and your IDs. I've actually seen, in actual production websites, where classes like 'FG359D' were being used or 'left' or 'redborder'. Now, of course, looking at it, you would say, &quot;Well, you know, I can look at 'redborder' and know what that means.&quot;</p>
     <p>[18:43] But, I highly suggest you don't use anything presentational like 'left' or 'redborder'. Because, maybe in five years, that border is going to be blue. And now you have to decide, &quot;Am I going to go back and change all those class names or just keep it 'redborder' and it'll be stupid?&quot;</p>
     <p>[19:02] So what I highly suggest is using names of, like... What is it actually? It's a shopping cart. OK, my class would be 'shopping-cart'. It's not presentational, it's what it is. So pick names like that.</p>
     <p>[19:17] Brevity is OK if you're into, you know, shortening things. Like, maybe, instead of border, you type 'bdr'. That's fine. But I want to stress that clarity is so much more important than brevity.</p>
     <p>[19:31] I've run into situations where things were abbreviated so much that I had no idea of what it was and just was clueless. And other people on the team were clueless because somebody way back when decided that everything was going to be one-letter classes, or one or two, you know, abbreviated classes, two-letter. So really make things super, super clear.</p>
     <p>[19:56] Then, there's also the issue of, &quot;Am I going to use camel case, am I going to use underscores, am I going to use hyphens?&quot; You wouldn't think that this would be really much of an issue, but I think it's extremely important to keep everyone on a consistent system. Consistent system, say that 10 times fast.</p>
     <p>[20:17] Consistent system... Personally, I prefer to use a hyphenated, and that's mostly because if I'm going to be using things like microformats, those are going to be hyphenated, and I want everything to be consistent, so it just makes sense to me.</p>
     <p>[20:31] And of course, I struggle sometimes, even with developers I've worked with, because Ruby on Rails is very much into underscores for everything. And so a lot of times, I find that we have a little bit of a back and forth. But it's really important to get everyone using a consistent naming convention.</p>
     <p>[20:51] If you're interested in microformats, I don't have time to really go into details on that. There are two really, really fantastic slide decks I found. I don't know if you can read that, but it's basically webdirections.org/slide/microformatsfordevelopers.pdf, and then, blah, blah, blah/microformatsfordesigners.pdf.</p>
     <p>[21:16] Both of those are really good. The first one's by John Elsoff, and the second one is by Dan Seigerhald. They were really helpful, to me, to make me understand why I would even use microformats.</p>
     <p>[21:27] The reason I bring this up is because, if you're using something like microformats, people are going to be using the same types of class names over and over again. This is good. This means you're going to expect the same thing. You're going to be able to style for the same thing. It's really great for productivity. So, that's one, I guess, case for microformats.</p>
     <p>[21:53] So, now into CSS architecture, which is, you know, I guess, the meat of the talk. A pretty common way to break things down is, you have your screen styles, you have your mobile styles, and your print styles. Some people even put their print in their screen using media queries. And that's perfectly OK, in fact, probably more recommended for performance.</p>
     <p>[laughter]</p>
     <p>[22:21] Now, when I work on my screen... I'm just going to kind of talk about the screen area for now. This is the way I tend to break things down. And I don't necessarily mean separate style sheets, it may just be the way in which I organize my file. It depends, you know, on how long that file can tend to be.</p>
     <p>[22:46] I do many of my reset styles. In which I just use, like, one that's offered online. I'll give you the URL for that in a moment. Foundation is kind of my own personal patterns that I find myself doing over and over again for every single website I work on, typography, layout, and plug-ins.</p>
     <p>[23:06] The reset style sheet I've been using recently, just in case you're looking for one... I really like the HTML5 doctored one, which is based on Eric Myers' work, but also has some adjustments for today's technology, including HTML5. It's a pretty good one. I recommend checking it out if you're looking for one. Some people think it's bad to use one to begin with, but I use one.</p>
     <p>[23:33] So in my foundation style sheet, this is where I do, like I said, the things I always find myself doing, like creating my focus styles, hover states on buttons because there's no cursor automatically, like, cursor change on buttons. But I think it's nice to have one, so I find myself doing that.</p>
     <p>[23:52] You know, I like to zero out my line-height on inline elements because it helps avoid your line-height varying if you have things like superscript or, you know, maybe a little bit of code. I don't know if you've noticed, but that sometimes breaks your line-height. These are just patterns I find myself doing.</p>
     <p>[24:15] And of course, typography... A lot of people break up their tables and forms separately from typography. But in my eyes, that is also typography. You're laying out the way your, you know, your form labels look. I just kind of put everything, even my tables to mean... Like, you're designing typography there, too. So I put all of that into typography, my section of typography, including any decorative elements, as well.</p>
     <p>[24:44] Layout, a grid system... And then, you know, some people would refer to it as the chrome, but basically, the edging or the backgrounds and borders around things. And any page specific or section specific styles that you might have.</p>
     <p>[25:04] Plug-ins is basically where I put just these random styles that I've... Like, maybe I have a Twitter widget or I have a Flickr scrolly slideshow thingy, that somebody else built, that I'm putting into my web page. But I have to make some style adjustments, because maybe I'm not totally happy with the way it looks out of the box.</p>
     <p>[25:28] So I kind of put everything together there, because it's nice to kind of keep that stuff separate from, like, my work and their work, if that makes any sense. You know, it's also like, if that stuff changes, you kind of know right away that you go to the section and make the changes there, and you don't have to kind of filter through all of your CSS.</p>
     <p>[25:51] So about Internet Explorer, the thing I've taken to doing recently... And it was mentioned earlier, Paul Irish did a blog post about it. I used to do conditional comments to pull in a separate style sheet.</p>
     <p>[26:11] And, you know, taking into account the workaround that was given in the last talk, if you use the body class method, I find that it's actually really great for efficiency because if I'm having to override or, you know, make some workaround in IE, why would I create a whole new style sheet just for that one little workaround? Now I have two style sheets I have to manage.</p>
     <p>[26:37] When, if I use conditional comments to change out the body class, I could keep all of that stuff together so I don't have to hunt around for where any workarounds are. So it's nice.</p>
     <p>[26:50] If you just kind of have: this is my style, and then if I need to work around that for IE6 or 7, or what have you, I just do the .IE7 and have, you know, that bit of styles, and it's together. It makes it really easy to track down where to debug issues.</p>
     <p>[27:12] Another thing I've used on a couple of projects, and only… I don't do this all the time because, frankly, a lot of clients don't like this. But Andy Clarke created this universal style sheet, which is basically a way of saying, &quot;OK, if your IE6, you get this basic level of nice, beautiful typography styles.&quot;</p>
     <p>[27:33] You may not get all the great effects and things, but what you're going to get is going to work. You know, I don't do this on everything because sometimes it's not that much of an issue really to just go ahead and support IE6. But occasionally, if you have something really crazy, like some crazy JavaScript or something, I don't know, like, it can help to just, you know, not support it, but not break it either, like, give them an alternate experience.</p>
     <p>[28:08] And the other thing you can just say is like, &quot;Oh, you want me to support IE6, OK, pay me more.&quot; It's just another part of the package that you have to pay for.&quot;</p>
     <p>[28:17] Anyway, so, that kind of sets up like what my architecture is going to be. Like I said, it may not necessarily be that what's nested on your screen are separate style sheets. Depending on how long it is, I may just have it as one big, long style sheet. But that's usually the system that I use.</p>
     <p>[28:40] System tips that I have for, you know, architecting good CSS is, I really like to follow the DOM. And what I mean by that is starting out and working my way in. So, you know, if I'm doing like container or page styles, and then going inward, I kind of go top down, so it's like header, you know, content, et cetera. By working that way in, it makes sense because that's the way your document is set up. So it just... It makes it easier to kind of know, like, where in the style sheet that you need to look.</p>
     <p>[29:15] I keep talking about being organized. It's so important. Keep your properties organized. So here's an interesting question. Who alphabetizes their properties? And who does it more by, like, you know, their function or what it is they're doing? You'd be surprised like how, how almost split, not quite, but it's almost split 50/50. I was working on...</p>
     <p>[29:42] I never even thought about doing it alphabetical. I've always done it functional because that's the way I think. But, you know, like I said, I kind of think in the way things are structured or I work my way in, so I've always done my properties functional. I was working on a team with another developer who does his alphabetical, and it just really surprised me. And I asked him, &quot;Why do you do yours alphabetically? This just doesn't make any sense.&quot;</p>
     <p>[30:11] He's like, &quot;No, you're wrong. This is the way you have to do it.&quot; I said, &quot;What are you talking about? Why would you even consider doing it that way?&quot; And he said, &quot;Well, Firebug does it that way, so I do it that way.&quot;</p>
     <p>[30:26] That makes no sense! You have your position, your top, your left separated because it's not alphabetical. You have your width and height separated because it's...</p>
     <p>[30:36] Anyway, as you can tell, I prefer functional, but I'm not going to tell you, like he said, that you're wrong if you're using alphabetical. Like I said, CSS workflow is extremely subjective, and people have their own ways of thinking. To some people who think that way, alphabetical makes sense.</p>
     <p>[30:55] What I will say is, whatever system it is you pick, make the entire team stick with that system. Because what I ran into was, I was rewriting all of his styles to be functional, and he was writing all of my styles to be alphabetical, and we were just wasting a lot of time doing that.</p>
     <p>[31:13] Figure it out, make a system, stick with it, everyone on your team has to use that system. If they don't like it, sorry, that's just how it is. Everyone's going to be using that same system.</p>
     <p>[31:28] So, when you're... This kind of goes hand in hand with the organization stuff I was talking about before, separate by focus. This can be like, let's say you have search styles, or you have maybe a shopping cart that appears in multiple places throughout your site, it's extremely handy to keep those styles together. Like, kind of separate them out so that's easier to find without just, like, you know, outright duplicating everything you did. And like, you know, still consider the cascade, but separate things out just to make it easier.</p>
     <p>[32:10] And so, this is like when I was talking about, like, in the layout style sheet. If I ever have, like, page specific styles or section specific, that's kind of where I would be doing that.</p>
     <p>[coughs]</p>
     <p>[32:22] Excuse me, sorry. I'm coughing in your ears.</p>
     <p>[32:29] Documentation with comments... This is really, really important, to write good documentation. In my case, I would mostly do that in the comments. My stuff gets stripped out anyway when it goes into production, so I don't have to really worry too much about optimization.</p>
     <p>[32:47] But, what I like to do that I… or what I did more so when I was doing a lot of conditional comments and things like that for separate style sheets... What I would do that I noticed not too many other people would do is, like, actually notate when they're doing a workaround somewhere else. Because I found that sometimes you would be debugging something, and you'd make a little change, and you totally forget that, &quot;Oh, there's an IE style sheet too,&quot; that you have to go and change as well for whatever reason.</p>
     <p>[33:23] So it's nice to kind of leave a comment there, like, &quot;Hey, you know, this is also being addressed over here.&quot;</p>
     <p>[33:29] Things like that, like little reminders or notes are really helpful. Some people over comment, and that can get kind of counterproductive. I would just recommend commenting where you honestly feel that like later down the road, &quot;This may confuse me, so I better leave a comment so I know what to do later.&quot;</p>
     <p>[33:54] Debugging... I hate debugging, I really do. It's not that it's that difficult, it's just that I just don't... For me, it doesn't feel creative, so I'd rather not do it. But what I have found, because, you know, I've worked on a lot of large scale websites, is that it's going to be part of your job, you're going to have to do it. So it can be really handy to create sort of a toolkit for yourself of the steps that you're going to go through, the resources you're going to use that maybe your whole team will use.</p>
     <p>[34:31] At the last conference I attended, there was a speaker that was making the case for that validation doesn't matter anymore, that it's just... It's not a big deal. And I can kind of understand, to some degree, what he was trying to say. But I do have to make a point, that validation has saved a project for me many times due to just a typo. It's like spell check.</p>
     <p>[35:00] You know, like, I get a little cocky sometimes. I get like, &quot;Oh I know how to write HTML, I don't need to validate. I know how to close my tags. I know how to, you know, properly nest things. Why should I validate?&quot; And then, a page will be totally broken.</p>
     <p>[35:17] It would look fine in Firefox, Safari. But for some reason, not only would it not work in IE, but it wouldn't even... Like, no workaround I would do would even fix it. And it would turn out that maybe I forgot to close a tag or I misspelled something. And I could have saved five hours of debugging if I had just validated it.</p>
     <p>[35:43] So think of it as a spell check, and just go ahead and do it. Make it part of your checklist when you're launching a product. In fact, it's even better if you're able to do it frequently as you're working.</p>
     <p>[36:00] These browsers have fantastic inspector tools that I use, Firebug, Chrome Inspector, Safari Web Inspector, even IE's developer tools. Before these existed, I don't even know how I did anything right. It was like mana falling from the sky when Firebug first became a thing. It was just like, &quot;Holy crap! This is amazing. I can change things and edit them and quickly fix issues. It's so amazing!&quot;</p>
     <p>[36:31] I've actually overheard a few people think or, say that some of Internet Explorer's developer tools, like, aren't useful, won't let you live edit. That's actually not true. It will let you live edit, it's just not as good of an experience as Firebug or Chrome Inspector. It will do it, it's just not as nice. It kind of puts everything inline instead of doing it, like, throughout the entire style sheet like the way Firebug does it.</p>
     <p>[37:02] Eric Meyer has a system that he uses called Diagnostic CSS. This can be really handy if you're wanting to call out maybe, like, images that don't have alt attributes or maybe there's, like, some other issues on your page you want to call out, you can use CSS to call those things out. I won't go into a lot of detail there. But do read meyerweb.com/Eric/tools/css/diagnostics. The slides will be available later, so you can refer to that. Yeah, it's pretty handy.</p>
     <p>[37:36] This slightly goes, maybe, a tiny bit off topic, but I wanted to talk about it because I feel very passionately about it. And that's about clearing floats. First of all, you know, with the thought in mind that floats never were intended for layout, and I definitely think they're overused big time. I know people that will float everything on the page just to try to make the page look the same in every browser.</p>
     <p>[38:09] That's a whole other presentation in itself. I'm very much against that. But you do have to float things sometimes, and you do have to clear things.</p>
     <p>[38:22] The method I use for almost every case is overflow: hidden. When I first found this out, my jaw dropped. I couldn't believe that this actually worked to clear floats, but it does. If you have things inside of an unordered list that are floating and you need to clear it by putting overflow: hidden on that unordered list, it takes care of it. You don't have to have any action markup. You don't have to worry about writing, you know, a huge block of CSS code to do it.</p>
     <p>[38:59] However, sometimes there are cases where overflow: hidden will mess you up... I found this, like, if I have to position something outside and then... or move something out of the margin, things just get chopped off. In which case, in those specific situations is when I would use a clear fix.</p>
     <p>[39:19] This is the one that's kind of more recent that Perishable Press released. It may have even been updated since this one. But, yeah, I... The thing I want to mention about... I don't know if you can see it that well, but… I don't like using the class clear fix. I think that's really ugly. It's presentational. I don't want to see it, so I tend to just use it, you know, where I need to use it on the element that I need to use it on. So that's my suggestion to you, as well.</p>
     <p>[39:58] A note on position relative... I find that, if ever you're in a weird situation where, for some reason, something is invisible on the page in IE and you can't figure it out... I can't explain it to you, I don't know why it works. But occasionally, depending on the situation you're in, of course... Sometimes you won't want to use this for particular reasons, but position: relative can sometimes, like, trigger something that makes it show up. So try that. And the other one is zoom: 1.</p>
     <p>[40:32] I've had pages be entirely broken, things are sitting way over there and way over there, for whatever reason, and I put zoom: 1 on whatever the problem element is, and everything just goes &quot;whoop&quot;. It just, like, snaps into place.</p>
     <p>[40:46] It's really stupid... I think the haslayout concept is stupid. It should have layout, right? Why does it not have layout? But, yeah, if you don't know about those, those are extremely helpful, so try those.</p>
     <p>[41:03] So, we've gone over evaluation, organization, meaningful markup, CSS architecture, and debugging. I'm going to leave you with a few resources that help me. If you're ever in a situation where maybe you're using a third-party widget or some sort of slideshow thing, and they compacted all their CSS, and you just need to look at it and read it and understand it, there's this tool called ProCSSor.</p>
     <p>[41:36] I don't know why it's an OR, I think that's kind of silly. It just kind of helps make the code more pretty so you can read it. And it's really handy for just kind of quickly putting the code in there so you can see it and go, &quot;Oh OK. Now I understand what's going on.&quot;</p>
     <p>[41:53] Of course, CSS3 itself, you know, obviously, there's been presentations on that. There are so many things in CSS3 that make you faster, help your workflow be better, so read up on CSS3 developer code if you want to find out more. There's a bunch of other great tools for that that are out right now.</p>
     <p>[42:18] First, jQuery... The reason I bring up jQuery... Which, you know, you would be like, &quot;Well, this is a CSS talk. Why is she bringing up jQuery?&quot;. If you are having to do some interactive stuff and you're not a JavaScript developer, like myself... I don't know crap about JavaScript. jQuery... If you're looking for a library, the reason I would recommend jQuery is because there is so much documentation on it.</p>
     <p>[42:44] There are so many people that use it. That unless you are having to do something truly custom, that, you know... It's kind of on a case-by-case situation. In most cases, you can find what you need, you know, through jQuery.</p>
     <p>[43:06] Modernizr is pretty awesome. There is going to be actually a talk tomorrow by Paul Irish. He is the Lead Developer on Modernizr. So you'll hear more about it from him tomorrow.</p>
     <p>[43:22] But it's really great for detecting CSS3 so you can kind of make workarounds very easily for cases where maybe this browser doesn't support border-radius. The whole list is there, whatever it would be.</p>
     <p>[43:43] So, I've never been much of a framework kind of person. I have always kind of built my own. And this isn't necessarily a framework, but HTML5 Boilerplate is pretty awesome, spiffing actually.</p>
     <p>[43:58] Paul Irish is also involved on this and he is going to talk about it as well. But I think there is a lot of really, really smart thinking that has gone into this, so I started using it on a couple of my newer projects. And, yeah, it's pretty cool. So if you're looking for a good foundation to build upon, I highly recommend HTML five Boilerplate.</p>
     <p>[44:21] If you're having to do adjustments in your CSS for mobile, a tool I find extremely handy is Mobify. Because, it will load up your website and you can see it as if it were on, you know, a more narrow device and make the adjustments you need on the flight, like, click, &quot;I don't need this.I don't need this,&quot; or make your style adjustments.</p>
     <p>[44:47] It helps just generate the stylesheet that you would need to do what it is you need to do. And it's a good, like, starting point, like, if you are trying to do an alternate experience for mobile. And it's free unless you are using it for enterprise purposes. So definitely check that out.</p>
     <p>[45:09] So what else? There are little things like what time of day are you most creative? I find that I can be most creative towards the end of the day, so that's kind of when I focus most of my development time. Maybe I spend the first part of the day doing other things, like, you know, answering emails or, you know, all the other things, like meetings and such.</p>
     <p>[45:32] But I know that I'm really productive during this time and this time. So I save that time where it is, like, just development.</p>
     <p>[45:42] Write it clean, keep it clean. I have a bad habit of, where... If I rent an apartment, I set it up and I just have everything, like, perfect. It's, like, beautiful. I have people over and I'll love it. And then over time, you know, I maybe just put this over here and then I put this over there. And then, all of a sudden, my apartment is a disaster.</p>
     <p>[46:07] And if I had just kept it clean over time, it would have stayed nice. Markup in CSS can be the same way. It's so easy to think like, &quot;Oh, I'll just throw this over here for now. I'll clean it up later.&quot; Don't do it. Because you won't. You won't clean it up later. I promise you, you won't. I never do. So that's why, just keep it clean. Don't ever just, like, let dirty code sit around.</p>
     <p>[46:37] Speaking of cleaning, sometimes I have a habit of archiving things too much. And I found that lately, when I'm trying to archive things, just archive the things that actually have value. Otherwise, you are just littering things up. You are causing, you know, yourself to have more to look through.</p>
     <p>[46:58] Like, if you are ever having to look through previous work you have done, just archive what has value and trash the rest. I used to be a big pack-rat, so that was something I had to work really hard on.</p>
     <p>[47:11] And then, collaborate. Something I'm going through right now, because I just started a new job, is... I have never really worked with HAML or SASS. Is anybody familiar with those? The old me would have come in like, &quot;Oh, why are we using this crap? We should be doing it this way instead.&quot;</p>
     <p>[47:32] But the new me, the more, I guess you could say realistic me, has learned that, like… They have a reason they are using it. There is a reason they set up HAML and SASS. They are Ruby on Rails developers, there is a certain way they think.</p>
     <p>[47:48] And I'm not the only one that's going to be touching this CSS. There are going to be other people touching it too. So I have to learn to work with them and use the tools that they are using. That I might not necessarily love everything about it. But because it's part of my job, I have to work with them and collaborate with them.</p>
     <p>[48:07] So, I'm learning to find some things about it that I do like, even though I'm still in the learning process. It's really important to, you know, just collaborate, team up with people.</p>
     <p>[48:20] Another thing that is common where I work now is pairing. You know, there is another designer that will sit together and kind of work together. And you'd be surprised how quickly you can solve problems if you work together.</p>
     <p>[48:34] Balance readability and optimization... If you are in a situation like me, you may be lucky, in that, you can write your CSS as clean and organized and indented or however you want, and then it gets outputted in a condensed CSS file in the end. So you don't really have to worry about this.</p>
     <p>[48:56] But not everyone has the technology or knowledge to do that. So, in that case, I, you know, just suggest is try to find a balance of readability and optimization. Some people do this in a single line. I'm a multi-line person.</p>
     <p>[49:17] And the other key thing is patterns and proportions. If you find yourself working in patterns and proportions, you kind of get quicker at things. So any time I'm picking dimensions for paddings or type sizes, I have a system in my head of... Because I always use the 12 scale. And so it's easier to kind of do the math in my head. If like, &quot;OK, well this needs to be this amount, this needs to be this amount.&quot;</p>
     <p>[49:42] But also, it's going to look nice, because you're doing everything in patterns in proportions to each other. It will visually look nice in the end.</p>
     <p>[49:51] And to plug myself for a second, I have an article on &quot;A List Apart&quot; called &quot;Write an Interface Style Guide&quot;. It's a big part of workflow. You may not like writing documentation, but it's extremely important to write documentation, especially if you are working on a large-scale website with a large team of people, and people come and go. Document what it is you do. And that's both, you know, design and HTML and CSS.</p>
     <p>[50:18] My quick note on designing in the browser is... It's pretty cool to do, but it can cause challenges when you are collaborating on teams. Because, maybe you have to change certain graphics, but they worked in the browser and they don't have a full page comp. They only have bits and pieces. It can cause a challenge.</p>
     <p>[50:39] So this is something I suggest doing, you know, when it makes sense. I wouldn't necessarily say it always makes sense.</p>
     <p>[50:49] I'm going to quickly go through this because I'm running out of time. Master your text editor... Whatever text editor you use, find out every single thing you can about all the shortcuts, all the keyboard commands and master it, because that will help you get faster as well.</p>
     <p>[51:05] And I mentioned before, you know, working together. Get critiques and code reviews, because sometimes, if you are staring at something too long, you're going to miss things. So let another pair of eyes look at what you're doing.</p>
     <p>[51:19] Practice safe dev. What I mean by that is, use version control. I've used GIT and, in the past, I've used SVN. Those are both good options. If you don't have... If maybe your company or your team doesn't really have that kind of thing set up.</p>
     <p>[51:38] Even things like Dreamweaver has a check-in/check-out system that you can use. Like, even things like that, just to make sure that you're not stomping on each other's code. Just make sure you practice safe dev.</p>
     <p>[51:50] And of course, prioritize what's most important and do iterations. So, you may have this grandiose idea of, like, completely re-architecting the CSS. Maybe just started at a new company. Some things, you don't have the time... Or, it's not even realistic to do that. Pick out the things that are, like, really important and lay the foundation. And then come back and iterate on that.</p>
     <p>[52:16] And of course, take a break. Because if you are staring at a CSS file for 10 hours, because... And you haven't gotten up to go take a lunch break, you're going to start getting pretty sloppy. Take a break.</p>
     <p>[52:28] So taking all this stuff into account gives you more time to do things that you like, like being creative or spending time with your pets. That's my cat Seyly.</p>
     <p>[52:40] I just wanted to mention two books that I worked on, &quot;Fancy Form Design&quot;. I co-wrote that with Derek Featherstone and Tim Connell, as well as &quot;The Art and Science of CSS&quot;, which is a long list of co-authors. Cameron Adams, who is speaking at this conference as well, David Johnson, Steve Smith and Jonathan Snook...</p>
     <p>[53:01] Please buy many, many copies of those. And unless you have any questions, that's it. Oh, follow me at Twitter, it's @jina. My company is @engineyard.</p>
     <p>[applause]</p>
     <p>[53:13] Questions? OK. Oh, oh, there's a question back there.</p>
     <p>Man: [53:29] You were talking about the order of the CSS stuff, and the question of alphabetically versus functional. If you weren't with a big team, then alphabetically would be more practical, right, because it's easy. The alphabet is the same for everyone, while functional might vary? Do you have a list or something?</p>
     <p>Jina: [53:57] It's not what I... There is not a published list that I know of. I guess I could blog about what I do. I guess in my head it makes sense. I should probably show that. But I love having my positioning stuff together, as I mentioned before.</p>
     <p>[54:14] And I also like to work outward in. So what I tend to do is, I do things like positioning, floating or whatever at the top, because that's kind of, like, the more crucial, like, part of the layout. Like you know, this is determining where on the page it is going to be.</p>
     <p>[54:33] Then I do the box level stuff, like margin, you know, working outward on margin, padding. Things like width and height would come after that. And then I do font styles and stuff like that towards the bottom and defining the color.</p>
     <p>[54:49] So, you know, each element kind of sometimes has its own set of CSS that maybe other elements wouldn't have. So in certain situations, things may kind of just fall in where they make sense. But that's kind of how I work. It's like, where it's going to be, how it's going to be structured, you know, how the box model will look. And then, I do like, type and things like that towards the bottom. And that's per each selector, each selector's properties are organized that way.</p>
     <p>[55:24] Now, I understand your argument for why alphabetical would make sense. That's why I definitely wouldn't ever tell anyone that they are wrong in it. I think it's just for people like me, who think in a more visual way, rather than a more ordered logical way. It's confusing to me. Because I, you know, I don't think alphabetically.</p>
     <p>[55:48] When I think about how something is going to look, I'm thinking about how it's going to look. I'm not thinking about the alphabetical order of how it's going to look. So to each their own, right?</p>
     <p>[56:05] Any other questions? No? OK. Everyone is going to be organized, right? Promise? Cool.</p>
     <p>[applause]</p>
     <p>[56:15]</p>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2010/sessions/css-workflow-jina-bolton.md" id="comment">
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
     <h2>Fronteers 2010</h2>
     <ul>
      <li><a href="/congres/2010/news" title="Fronteers 2010 news">News</a></li>
      <li><a href="/congres/2010/venue" title="Fronteers 2010 venue">Venue</a></li>
      <li><a href="/congres/2010/speakers" title="Fronteers 2010 speakers">Speakers</a></li>
      <li class="current"><a href="/congres/2010/sessions" title="Fronteers 2010 sessions" class="current">Sessions</a></li>
      <li><a href="/congres/2010/workshops" title="Fronteers 2010 workshops">Workshops</a></li>
      <li><a href="/congres/2010/jam-session" title="Fronteers 2010 jam session">Jam session</a></li>
      <li><a href="/congres/2010/schedule" title="Fronteers 2010 schedule">Schedule</a></li>
      <li><a href="/congres/2010/attendees" title="Fronteers 2010 attendees">Attendees</a></li>
      <li><a href="/congres/2010/contact" title="Fronteers 2010 contact information">Contact</a></li>
     </ul>
    </div>
    <div lang="en">
     <h2>All sessions</h2>
     <ul>
      <li><a href="/congres/2010/sessions/the-design-of-html5-jeremy-keith">The Design of HTML5 by Jeremy Keith</a></li>
      <li><a href="/congres/2010/sessions/creating-lifelike-designs-with-css3-meagan-fisher">Creating lifelike designs with CSS3 by Meagan Fisher</a></li>
      <li class="current"><a href="/congres/2010/sessions/css-workflow-jina-bolton" class="current">CSS Workflow by Jina Bolton</a></li>
      <li><a href="/congres/2010/sessions/high-performance-javascript-nicholas-zakas">High Performance JavaScript by Nicholas Zakas</a></li>
      <li><a href="/congres/2010/sessions/html5-accessibility-is-it-ready-yet-steve-faulkner-hans-hillen">HTML5 Accessibility: Is it ready yet? By Steve Faulkner &amp; Hans Hillen</a></li>
      <li><a href="/congres/2010/sessions/javascript-like-a-box-of-chocolates-robert-nyman">JavaScript - Like a box of chocolates by Robert Nyman</a></li>
      <li><a href="/congres/2010/sessions/progressive-downloads-and-rendering-stoyan-stefanov">Progressive Downloads and Rendering by Stoyan Stefanov</a></li>
      <li><a href="/congres/2010/sessions/real-world-responsive-design-stephen-hay">Real-world Responsive Design by Stephen Hay</a></li>
      <li><a href="/congres/2010/sessions/reasons-to-be-cheerful-chris-heilmann">Reasons to be cheerful by Chris Heilmann</a></li>
      <li><a href="/congres/2010/sessions/reusable-code-for-good-or-for-awesome-jake-archibald">Reusable Code, for good or for awesome! by Jake Archibald</a></li>
      <li><a href="/congres/2010/sessions/the-renaissance-of-browser-animation-cameron-adams">The Renaissance of Browser Animation by Cameron Adams</a></li>
      <li><a href="/congres/2010/sessions/the-state-of-html5-inaugural-address-paul-irish">The State of HTML5: Inaugural Address by Paul Irish</a></li>
      <li><a href="/congres/2010/sessions/vector-graphics-for-the-web-brad-neuberg">Vector Graphics for the Web by Brad Neuberg</a></li>
      <li><a href="/congres/2010/sessions/css3-hakon-wium-lie">CSS3 by Håkon Wium Lie</a></li>
      <li><a href="/congres/2010/sessions/css-breakout-andy-clarke">CSS breakout with Andy Clarke</a></li>
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
      <li><a href="https://vimeo.com/channels/fronteers10">Vimeo channel</a></li>
      <li><a href="https://itunes.apple.com/nl/podcast/fronteers-videos/id1136212068?l=en">Podcast on iTunes</a></li>
      <li><a href="http://lanyrd.com/2010/fronteers/">Lanyrd</a></li>
      <li><a href="http://speakerrate.com/events/583-fronteers-2010">SpeakerRate</a></li>
      <li><a href="http://events.linkedin.com/Fronteers-2010/pub/255981">LinkedIn Events</a></li>
      <li><a href="http://webchat.freenode.net/?channels=fronteers">IRC</a></li>
     </ul>
    </div>
    <div class="images" lang="en">
     <h2>Sponsors</h2>
     <ul>
      <li><a href="http://www.easytobook.com/"><img src="/_img/congres/2009/sponsors/easytobook.png" alt="EasyToBook.com" width="150" height="37"></a></li>
      <li><a href="http://frontlab.nl/"><img src="/_img/congres/2010/sponsors/frontlab.png" alt="Frontlab" width="150" height="56"></a></li>
      <li><a href="http://www.informaat.nl/"><img src="/_img/congres/2010/sponsors/informaat.png?v=20100820" alt="Informaat" width="150" height="60"></a></li>
      <li><a href="http://www.mirabeau.nl/"><img src="/_img/congres/2009/sponsors/mirabeau.png" alt="Mirabeau" width="150" height="60"></a></li>
      <li><a href="http://www.opera.com/"><img src="/_img/congres/2010/sponsors/opera.png" alt="Opera Software" width="150" height="53"></a></li>
      <li><a href="http://soundcloud.com/"><img src="/_img/congres/2010/sponsors/soundcloud.png" alt="SoundCloud" width="150" height="81"></a></li>
      <li><a href="http://www.watchmouse.com/"><img src="/_img/congres/2010/sponsors/watchmouse.png" alt="WatchMouse" width="150" height="41"></a></li>
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
      <li><a href="/congres/2011">Fronteers 2011</a></li>
      <li class="current"><a href="/congres/2010" class="current">Fronteers 2010</a></li>
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
