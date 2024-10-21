<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>Style guides are the new Photoshop by Stephen Hay · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p749">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>Style guides are the new Photoshop by Stephen Hay</h2>
     <video width="480" height="270" controls>
      <source src="/_downloads/2012/stephen-hay-style-guides-are-the-new-photoshop.webm" type="video/webm">
      <source src="/_downloads/2012/stephen-hay-style-guides-are-the-new-photoshop.mp4" type="video/mp4">
      <track src="/congres/2012/sessions/style-guides-are-the-new-photoshop-stephen-hay.vtt" default>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2012/stephen-hay-style-guides-are-the-new-photoshop.webm">download the video</a> (or the alternatives: <a href="/_downloads/2012/stephen-hay-style-guides-are-the-new-photoshop.mp4">1</a>) and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="https://vimeo.com/52851510">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2012/stephen-hay-style-guides-are-the-new-photoshop.webm">Download video</a> (WebM, 102MB)</li>
      <li><a href="/_downloads/2012/stephen-hay-style-guides-are-the-new-photoshop.mp3">Download audio</a> (MP3, 42MB)</li>
     </ul>
     <h3>Transcript</h3>
     <div class="transcript">
      <p><span data-start="00:00:05.000" data-end="00:00:10.000" data-start-seconds="5">Thank you. Good afternoon. How did you like Mathias's talk? Good? I enjoyed that. [applause]</span></p>
      <p><span data-start="00:00:10.000" data-end="00:00:32.000" data-start-seconds="10">He is one of the smart people that always make me feel stupid, so I guess that's good. Before I start, I would like to share something with you that has nothing to do with my talk. Is that OK? Every once in a while, you come across something on the web that just kind of gets you angry, and makes you realize why you're doing the work you do.</span></p>
      <p><span data-start="00:00:32.000" data-end="00:00:59.000" data-start-seconds="32">I think everyone here, in your own little way, you're trying to make the web better, or at least do the work you do as well as you can, but I don't think everyone who works on the web thinks the same way. This is something I came across, and I'll explain it to the people who don't understand Dutch. Last week, I went to Portugal, and I had to do an online check-in. I won't say which airline, because you could probably figure it out for yourself, but...</span></p>
      <p><span data-start="00:00:59.000" data-end="00:01:25.000" data-start-seconds="59">...Here is a point. This was a page where you get these options that you can choose, because this is an airline that's really cheap, so everything is an option. &quot;Do you want to eat? Do you want to go to the bathroom?&quot; That kind of thing. It says, &quot;After choosing your options, click 'Add the selected items.'&quot; That's this button right here.</span></p>
      <p><span data-start="00:01:25.000" data-end="00:02:02.000" data-start-seconds="85">And then it says, this is another option, I guess, &quot;Leave the booking as it was,&quot; and this says, &quot;On second thought, don't,&quot; and this says, &quot;No, thank you.&quot; This kind of made me angry, because I thought, &quot;I don't want to do this, so I don't have to click this button. I just want to leave it as it, so do I click on this button, or do I click on that button, and what button does that do? I don't want to do that, can I do that? I... fuck... shit.&quot; [applause]</span></p>
      <p><span data-start="00:02:02.000" data-end="00:02:15.000" data-start-seconds="122">So this is why we do what we do. That had nothing to do with my talk, but it just angered me so much I thought 'Bring you into my anger.'</span></p>
      <p><span data-start="00:02:15.000" data-end="00:02:43.000" data-start-seconds="135">Four years ago, Andy Clark started talking about designing in the browser. I thought, &quot;That's a bunch of malarkey. Designing in the browser, that's now how creative things work, you can't do that.&quot; Basically, he found that it was helpful to his business to start designing in the browser, because the clients were unpleasantly surprised when they saw the difference between Photoshop and the browser.</span></p>
      <p><span data-start="00:02:43.000" data-end="00:03:08.000" data-start-seconds="163">So a year later, he came up with this presentation, &quot;The Walls Come Tumbling Down.&quot; He kind of outlined his idea for designing in the browser. He wanted to come up with a new and better workflow. This was three years ago. Design in the browser, learn to live with the constraints of the web, and then design systems instead of web pages.</span></p>
      <p><span data-start="00:03:08.000" data-end="00:03:23.000" data-start-seconds="188">He often says we design websites, not pictures of websites. This rings true to me. At that time I really disagreed with him. So this presentation is kind of eating my words from then.</span></p>
      <p><span data-start="00:03:23.000" data-end="00:03:51.000" data-start-seconds="203">Photoshop is impractical for design mockups, especially now, now that we have responsive design. You'll find that there are a lot of disadvantages to Photoshop comps now, changes are very time-consuming. If you have a static Photoshop comp and the client says &quot;Well, I would like the type bigger. I just want the headlines bigger,&quot; you'll have to change each of those individually.</span></p>
      <p><span data-start="00:03:51.000" data-end="00:04:21.000" data-start-seconds="231">It doesn't matter to me that Adobe is apparently working on something new, and I'm not insulting Photoshop per se. It could be GIMP, it could be Fireworks, or any image editor, anything that's not a browser. It's too much manual work. It just takes way too much time to do. You need Photoshop to be able to do your work. Photoshop costs money. I guess most people could pay for it, but still, it's something you have to depend on.</span></p>
      <p><span data-start="00:04:21.000" data-end="00:04:47.000" data-start-seconds="261">You're at the mercy of Adobe and what they decide to do, and responsive design means that you won't just have one page. The page will be different sizes depending on the device you're looking at, and you could never really know for sure if the mockups you make for a smartphone in Photoshop are really going to look that way on an actual smartphone, so you're kind of setting yourself up for problems.</span></p>
      <p><span data-start="00:04:47.000" data-end="00:05:17.000" data-start-seconds="287">This is the reality that we have today. These were screenshots taken with a very useful Adobe tool. I'm not anti-Adobe. This is what formerly Adobe Shadow was, Adobe Edge Inspect, and this is the same website in all kinds of different browsers, actual devices. This application makes actual screenshots on actual devices, which is the best way to test. You could see these different things.</span></p>
      <p><span data-start="00:05:17.000" data-end="00:05:37.000" data-start-seconds="317">I can't imagine, especially this one here, that you design that, six different things, in Photoshop for one page. What happens when you have several different page types? That's the reality. It's very tough to deal with.</span></p>
      <p><span data-start="00:05:37.000" data-end="00:06:06.000" data-start-seconds="337">Web technology, on the other hand, is perfect for making design mockups. How many actual just plain designers are in the room? OK, you do nothing else except design? I know Wes, yeah. So there are few. I didn't expect very many at Fronteers, to be honest. How many people are kind of designer, coder, hybrid types? Yeah, a lot more. So this might appeal more to you.</span></p>
      <p><span data-start="00:06:06.000" data-end="00:06:31.000" data-start-seconds="366">I might actually piss the real designers off, so please don't come and find me at the beer thing, OK? But this is why I think web-based comps are really, really good. It doesn't have to take much longer than Photoshop. There is a little learning curve, because if you're not familiar with HTML and CSS, you have to learn it, but we'll come back to that. That's not a bad thing.</span></p>
      <p><span data-start="00:06:31.000" data-end="00:06:56.000" data-start-seconds="391">You can automate trivial tasks because developers have this thing. You've noticed that a lot of the talks today are about tools. This is about tools. This is about tools and process. But developers are lazy. They just want to keep coming up with little tools, right? Like Mathias. And they want to make things easier for themselves, so they invest some time to make a tool to make things easier later on.</span></p>
      <p><span data-start="00:06:56.000" data-end="00:07:24.000" data-start-seconds="416">And that's something that designers really don't get to do, so it's something that we should look at and take advantage of. You don't get much more of a realistic presentation of your web design than you would in an actual browser. Even font rendering issues are something that when the client sees it from the very beginning, they're not surprised when the type looks the same in the browser because they've already seen it, right?</span></p>
      <p><span data-start="00:07:24.000" data-end="00:07:48.000" data-start-seconds="444">So state changes, hover. Hover is just a basic one, so you don't have to make a layer in Photoshop that implies what the hover should be, but other types of complex state changes. What about logged in versus not logged in, for example? You can show those state changes very, very easily in a web-based mockup.</span></p>
      <p><span data-start="00:07:48.000" data-end="00:08:07.000" data-start-seconds="468">These are great things to think about. The best thing about these kinds of comps is they can be responsive, so you can make one page design and have it be responsive right away. If you want, you can take screenshots of those, different screen widths. You can test them in browsers.</span></p>
      <p><span data-start="00:08:07.000" data-end="00:08:30.000" data-start-seconds="487">There are few things more impressive lately than when I go to a client and I use Adobe Shadow, and have some devices, and put them on the table, and invite the client to put his or her devices on the table as well, and then navigate to the page on my laptop, and the page just shows up on all those devices. They can see exactly what the design should look like.</span></p>
      <p><span data-start="00:08:30.000" data-end="00:09:00.000" data-start-seconds="510">It seems like you're already building the site, but you're not. It's an interesting way to look at it. You'll have to find shortcuts so that it's not like building a static website. If you're smart about it, you could make code which could be used for development, but that's not the goal. Developers are going to write their own code, or they use their own process. So if you can work together with the developers, you can do that, but it's not really necessary. It's just instead of Photoshop.</span></p>
      <p><span data-start="00:09:00.000" data-end="00:09:34.000" data-start-seconds="540">So, the whole thing I'm trying to say is we should get rid of Photoshop. OK? Don't hurt me. We don't need to get rid of Photoshop completely. Photoshop is great for things like image editing, for example. It's great for creating image assets. I know people who think in Photoshop. I tend to sketch on paper, but other people like to think and play around in Photoshop. That's great. Just consider not using it as a design tool to do a complete mock-up for your clients.</span></p>
      <p><span data-start="00:09:34.000" data-end="00:09:48.000" data-start-seconds="574">And I think we need two things to replace them. One of them is the mock-up, which I'm not going to talk about today, surprisingly enough, because it's probably one of the big things I could talk about. I'll save that for sometime in the future.</span></p>
      <p><span data-start="00:09:48.000" data-end="00:09:58.000" data-start-seconds="588">Another thing that we need, next to the mock-up, is a style guide. OK? Oops, style guides. That was quick.</span></p>
      <p><span data-start="00:09:58.000" data-end="00:10:30.000" data-start-seconds="598">Style guides are a takeover from the print world. Style manuals or branding guidelines or corporate identity guidelines. These are all books, usually. The first one I ever saw when I was in design school was a book from, I think, early '80s. It was from Apple Computer. It was pretty thick, I would say at least two centimeters thick, all the guidelines about anything having to do with Apple.</span></p>
      <p><span data-start="00:10:30.000" data-end="00:10:53.000" data-start-seconds="630">And the thing about a style guide is it doesn't just show you what's available, like logos and typefaces and things like that. It also tells you when you should use these things, and when you do, how you should use these things. So you use this logo in these cases, at this size, with that much space around it, with that typeface, et cetera.</span></p>
      <p><span data-start="00:10:53.000" data-end="00:11:09.000" data-start-seconds="653">Everything was described. Grids. It was just incredible. I couldn't imagine anyone liking doing that type of work, until later on, when I became a designer and I started doing some of that work myself, which I still hated to do, honestly.</span></p>
      <p><span data-start="00:11:09.000" data-end="00:11:34.000" data-start-seconds="669">But there is a good thing about style guides for your team. If you create a style guide and you pass that on to a developer with a mock up, they don't have to go into Photoshop and measure. Because there are a lot of developers here. Who loves that part? Who loves going into Photoshop and measuring stuff? And now you have to measure stuff and you have to think, OK, that's 15 pixels, but it's responsive so now it's got to be percentages, or wait, should it be ems.</span></p>
      <p><span data-start="00:11:34.000" data-end="00:11:58.000" data-start-seconds="694">Then you have to do all this kind of stupid math and the designer will say well, that's not what I meant. That's not what I designed. Go back and look at the Photoshop thing. Terrible. Stop, OK? State and break point changes can be included. So you can put in a style guide what should a hover look like? What will this look like when you're logged in this block? OK.</span></p>
      <p><span data-start="00:11:58.000" data-end="00:12:19.000" data-start-seconds="718">It's for designers to remember what they decided upon. It's for developers so that they'll know how to implement these design things. It's for the client. You can write a style guide in a language that's client-understandable, and it's also for anyone else who might come on the team later on.</span></p>
      <p><span data-start="00:12:19.000" data-end="00:12:44.000" data-start-seconds="739">It also helps you maintain design consistency. So you might've heard about style guides recently because a lot of people talk about them. Anna Debenham had an article on 24 Ways last year about it, and people quote things like Twitter Bootstrap, which I don't consider to be a style guide, I consider it to be a pattern library.</span></p>
      <p><span data-start="00:12:44.000" data-end="00:13:15.000" data-start-seconds="764">They have all these elements. They don't tell you when to use them and how to use them specifically. It's general, so it can't really be a style guide because it's used for all different types of projects. So here are some. Apple identity guidelines. This is one set of Apple guidelines. There are presumably a lot more. These are for retailers, I guess, resellers. So you get this kind of thing.</span></p>
      <p><span data-start="00:13:15.000" data-end="00:13:39.000" data-start-seconds="795">This is the logo you should use and how much space in between. And there is a lot of text here. And that's the difference between things like bootstrap and a lot of the pattern primers and stuff that you see today, is that this is just human readable text, which tells you some background information and how to use this and when to use this.</span></p>
      <p><span data-start="00:13:39.000" data-end="00:14:09.000" data-start-seconds="819">So it's not just putting all the different types of buttons that you have on there, OK? This is a really well known one, the guidelines for the BBC. I think a lot of you have probably seen this. This goes so far as to outline the grids that you should use. It doesn't say exactly when you need to use these grids compared to other ones. It's just like, &quot;This is the grid, and there are different ways to go about using it,&quot; and they do describe those. So this is brilliant.</span></p>
      <p><span data-start="00:14:09.000" data-end="00:14:36.000" data-start-seconds="849">For those who are interested in these types of things, Anna Debenham has this collection, the links up there, I think...Yeah. This is a collection not only of style guides. There are style guides in there, but there are also pattern primers, tools to help you make your own style guide or pattern primer, so if you're interested at all in making style guides, this is a good place to look. It's a pretty good resource.</span></p>
      <p><span data-start="00:14:36.000" data-end="00:15:02.000" data-start-seconds="876">I went through here, and being the stubborn person that I am, I have specific things that I want in a style guide. They're not that easy to come by. I didn't find any of the style guides or pattern primers that did what I want to do specifically. So first thing is I want this to be free form writable.</span></p>
      <p><span data-start="00:15:02.000" data-end="00:15:32.000" data-start-seconds="902">If you're familiar with things like Kyle Neath's KSS or Jeremy Keith's pattern primer, you'll know that you have to do certain things in a certain way. It's not that you can just write a document and then have that become a style guide. If you're writing a style guide, the chances are that you're not the one who's going to be doing the writing. You might be the one determining what the design is, but the person who does the design is not always the person who writes the style guide.</span></p>
      <p><span data-start="00:15:32.000" data-end="00:16:00.000" data-start-seconds="932">Sometimes there is a documentation person doing that or some other type of copy writer who is doing that or an editor. So I wanted it to be free form writable and not that I have to ask some editor to go into a CSS file and in the comments, in a certain comment syntax, write out all the text, which is just ridiculous. I want to use something like Markdown and just have them write whatever they want.</span></p>
      <p><span data-start="00:16:00.000" data-end="00:16:35.000" data-start-seconds="960">Another thing is that I want to take screen shots of the mock-up that I've made, at different viewport widths, and be able to automatically have those screen shots pulled into the documentation. OK? I'm pretty demanding. Code snippets. When you change the CSS in your mock-up, I want that CSS or the HTML to automatically be updated into the style guide. I don't want someone to have to go in and change the style guide.</span></p>
      <p><span data-start="00:16:35.000" data-end="00:17:05.000" data-start-seconds="995">So these screen shots should also be updated automatically when something changes. So they should not only be made automatically, they should also be automatically updated. The pattern primer that Jeremy Keith has, which was the inspiration for me thinking about style guides in this way at all, was really interesting to me, except for the fact that you had to split each component of your page into separate HTML files.</span></p>
      <p><span data-start="00:17:05.000" data-end="00:17:24.000" data-start-seconds="1025">And I know you can automate that, but it didn't fit right with me. So, if I made navigation, I would have to have the navigation as a separate HTML file. I would have to split all these things out. So it didn't appeal to me, even though the idea really appealed to me.</span></p>
      <p><span data-start="00:17:24.000" data-end="00:17:50.000" data-start-seconds="1044">I want syntax highlighting for the code. I propose, in the style guides that I do...CSS is pretty readable, actually. It's very human-readable, especially for developers who are used to it. So why not let the CSS tell you what the styling is for an element? Instead of going into Photoshop and measuring things and selecting text and seeing how big the text is, you could see the font size in the CSS.</span></p>
      <p><span data-start="00:17:50.000" data-end="00:18:03.000" data-start-seconds="1070">Why not put the CSS right next to the object that you're describing and have the CSS become the technical part of the documentation? And I want that syntax highlighted, because it's easier to read.</span></p>
      <p><span data-start="00:18:03.000" data-end="00:18:42.000" data-start-seconds="1083">So, is this too demanding? Am I asking too much? This is weird, isn't it? I couldn't find a tool to do this. I couldn't find one tool, because Mathias obviously had not made one. So, what are you to do? And that's this weird thing about these tools. I was introduced to Unix when I was a kid, and I thought it was really interesting because you had these little, just simple applications that did one tiny thing. I thought &quot;Well, that's kind of stupid, just one thing.&quot;</span></p>
      <p><span data-start="00:18:42.000" data-end="00:18:49.000" data-start-seconds="1122">But the idea of chaining these things together, which you're all familiar with if you work on a Mac, that can be immensely powerful.So why do we need one tool, anyway? Why not chain a bunch of tools that do their thing well together? Because otherwise, you're going to end up with this: </span></p>
      <p><span data-start="00:18:49.000" data-end="00:19:26.000" data-start-seconds="1129">a sporf. Right? People actually use these. But this is trying to be a fork and a knife and a spoon at the same time. So you can imagine, you can make all these monstrous tools that are part hammer, part nail, part wrench, just crazy stuff. Why? We don't need to do that when we have all these separate tools available. Just put them together, OK?</span></p>
      <p><span data-start="00:19:26.000" data-end="00:19:52.000" data-start-seconds="1166">So I did find one tool that was the basic building block of this whole idea, and that's called Dexy. Dexy, I guess it's a fairly new open-source project. And I've come to know the author, Ana Nelson, who is just brilliant. This is a Python application, and it's just recently changed.</span></p>
      <p><span data-start="00:19:52.000" data-end="00:20:08.000" data-start-seconds="1192">She did that on purpose just to mess me up. So I'm going to show you the old version today, but she has a newer one out. So good luck applying anything I'm talking about, because she said, &quot;Well, I rewrote the whole thing.&quot; It's going to be a little bit different.</span></p>
      <p><span data-start="00:20:08.000" data-end="00:20:45.000" data-start-seconds="1208">Dexy is a free-form-writable documentation software application. So you can write something. If you want to show what things look like in a console, you can actually have Dexy do the commands that you have in your documentation in the console, show the console output, and you can also just do all the calculations and everything. You could just run your application and show each section automatically in your documentation. It's brilliant. So I thought, &quot;Maybe I can use this.&quot; And that's what I use now for the documentation part. For screen shots, Addy Osmani this morning was talking about PhantomJS. And everyone knows what Phantom is, I assume, now? A headless web browser. Which is cool: </span></p>
      <p><span data-start="00:20:45.000" data-end="00:21:12.000" data-start-seconds="1245">a browser that you can't see, but that you can make do things for you and you can script.</span></p>
      <p><span data-start="00:21:12.000" data-end="00:21:55.000" data-start-seconds="1272">And CasperJS, for me, as not a programmer, just a design guy who tries to do his best with code, Casper is pretty good. It's like the jQuery for Phantom, I guess. What you can do is make a little script that tells the viewport to be a certain width in Phantom, take a screen shot, OK, and then go to another element, take a screen shot of that element, go to another page, take a screen shot of that whole page. You can script all that with Casper. And you could probably do it in a different way, but lazy me, right?</span></p>
      <p><span data-start="00:21:55.000" data-end="00:22:20.000" data-start-seconds="1315">Code and screen-shot updating. I use templating for this, which I'm sure the developers are familiar with. For the designer people here, it's placeholders. If you have an HTML document, you can say, &quot;I want that picture. When that picture exists, pull that picture in and put it right here.&quot; So it's placeholders, basically.</span></p>
      <p><span data-start="00:22:20.000" data-end="00:22:55.000" data-start-seconds="1340">So I use this Python templating because Dexy is a Python-based piece of software. I use this templating to pull in the screen shots and to pull in the CSS code that describes the thing in the screen shots. For syntax highlighting, also a Python version of this. And I know that any of you could do exactly the same thing with Ruby if you know this. This is just one syntax-highlighting library for Python, Pygments.</span></p>
      <p><span data-start="00:22:55.000" data-end="00:23:17.000" data-start-seconds="1375">So, what does this all mean? This means that we have to go into the command line, right? As designers. Don't be scared. OK? I don't get it, actually. Why are designers so afraid of the command line? Anyone?</span></p>
      <p><span data-start="00:23:17.000" data-end="00:23:19.000" data-start-seconds="1397">No UI.</span></p>
      <p><span data-start="00:23:19.000" data-end="00:23:24.000" data-start-seconds="1399">I'm sorry? No UI. Well, there is a UI. It's just not a graphical UI, right?</span></p>
      <p><span data-start="00:23:36.000" data-end="00:23:49.000" data-start-seconds="1416">OK. So that's one opinion, that it's not natural. You would like to just drag things around, like a designer would normally do. Yeah, I'll get back to that.</span></p>
      <p><span data-start="00:23:49.000" data-end="00:24:17.000" data-start-seconds="1429">This is the command line. OK? We're not talking about designing right now. We're talking about using a tool to generate documentation. OK? But this is the command line. It's really friendly, right? It's not scary at all. See, there is my name, right there. It's like it's saying, &quot;Hello, Stephen. Good morning. Enjoy your cup of coffee. When you're ready, tell me what you want me to do.&quot;</span></p>
      <p><span data-start="00:24:17.000" data-end="00:24:35.000" data-start-seconds="1457">It's kind of like your butler. It's brilliant. I love this. OK? I'm a designer, and I love this. It's simple. It's minimal. And why would you be afraid of the command line if you can work with something like this?</span></p>
      <p><span data-start="00:24:35.000" data-end="00:25:04.000" data-start-seconds="1475">This is Photoshop, right? Let's get in there, a closeup. See that? You know what all that is? Some of you do. If you do, then it should be no problem to learn one or two commands for the command line. OK? You don't even have to remember them. You do what I do, have this little snippet library of things. I always forget how to do SCP, for example. Why is a designer doing SCP in the first place? I don't know.</span></p>
      <p><span data-start="00:25:04.000" data-end="00:25:37.000" data-start-seconds="1504">See? Photoshop. Photoshop has this color space called LAB. And to give you an idea of how complex Photoshop is, just the LAB color space has a book that was made for it, which is huge. It's like 600 pages, for one color space. It's like one menu item in Photoshop. OK? A book, 600 pages. That's complex. In fact, if you use Photoshop, you're using one of the most complex and sophisticated pieces of software that have been made for consumers. OK?</span></p>
      <p><span data-start="00:25:37.000" data-end="00:25:54.000" data-start-seconds="1537">The command line is not a scary thing. See? Look. That. That. See? [ applause]</span></p>
      <p><span data-start="00:25:54.000" data-end="00:25:57.000" data-start-seconds="1554">OK? So it's very friendly.</span></p>
      <p><span data-start="00:25:57.000" data-end="00:26:36.000" data-start-seconds="1557">The command line does have some problems. So, give me a chance to grab a glass of water. How does this process work that I'm describing? By the way, I'm describing a process to you that I've developed out of necessity over the past two years. I talked at Mobilism about my responsive-design workflow, which is my answer to the problems I had in designing for the responsive world that we live in right now.</span></p>
      <p><span data-start="00:26:36.000" data-end="00:26:53.000" data-start-seconds="1596">So, this is just one of the steps in that workflow. I am working on a book, which should come out sometime around March, which describes this whole workflow. But just because I'm writing a book about it and talking about it here doesn't mean that I'm right. It doesn't mean that it works for you.</span></p>
      <p><span data-start="00:26:53.000" data-end="00:27:09.000" data-start-seconds="1613">It's just my way of doing things, and hopefully you'll get at least one thing out of this that you might think, &quot;Hey, that's a cool idea. I would like to take that and do my own thing with it.&quot; Because that is the whole idea. It's not like this is a workflow you should follow. It's just my thing. OK?</span></p>
      <p><span data-start="00:27:09.000" data-end="00:27:40.000" data-start-seconds="1629">So what we do here is we just take an HTML and CSS mock-up and then take screen shots of that, code snippets out of the CSS. Someone else, or me, it depends, writes a style guide in Markdown, with templates, with placeholders in there, for pulling in the screen shots. And then those things are combined by Dexy to become the style guide.</span></p>
      <p><span data-start="00:27:40.000" data-end="00:28:11.000" data-start-seconds="1660">When you go through these steps, it looks like this. You just create your web-based mock-up, which is using HTML, CSS, and JavaScript to make the same thing that you would make in Photoshop, only now you're doing it in a browser. And it seems like it takes a long time, until the client comes with changes and you only have to change one line of CSS, compared to a half a day in Photoshop manually changing things and then moving them around the screen because something had to become bigger.</span></p>
      <p><span data-start="00:28:11.000" data-end="00:28:24.000" data-start-seconds="1691">OK? And doing that for five different files for one page because you're trying to show what it looks like responsively. OK? So this is just so much easier to do.</span></p>
      <p><span data-start="00:28:24.000" data-end="00:28:45.000" data-start-seconds="1704">The CSS that you write for this type of thing shouldn't be production CSS. It could be, but it doesn't have to be. In fact, if you're going to pull out these pieces of CSS, it's better to have redundant CSS, to have things that are repetitive, so that the blocks that you pull out will contain all the CSS that you need for a certain component. OK?</span></p>
      <p><span data-start="00:28:45.000" data-end="00:29:15.000" data-start-seconds="1725">So I like Jonathan Snook's method, SMACSS. Anyone familiar with SMACSS? This is a really good little book. I don't know why he has a lumberjack on the cover, but it is pretty cool. It's about setting up your CSS in a modular way, which kind of fits with the way I put these style guides together. Then you install Dexy and any dependencies that you might have, Phantom and Casper.</span></p>
      <p><span data-start="00:29:15.000" data-end="00:29:48.000" data-start-seconds="1755">This kind of installation, it's like the things that Addy was talking about this morning. For a designer, that's daunting. You've got to install this stuff, and there are dependencies and stuff like that. This is why I think the way that we've been working in silos...Interaction designer makes wire-frames, gives them to a visual designer, who gets to put colors on top, color by numbers, and then give that to a developer, who then does the developer thing; that's just such a bad, obsolete way of working.</span></p>
      <p><span data-start="00:29:48.000" data-end="00:29:59.000" data-start-seconds="1788">When you're a designer and you want to do something more efficient, that requires tools that you don't know how to install, get together with a developer who would love to show you how to install these things or do it for you.</span></p>
      <p><span data-start="00:29:59.000" data-end="00:30:20.000" data-start-seconds="1799">And developers who want to know something about design should get together with the designers and talk about the things they need from the designer, and interaction designer; the same way. I won't even get into it today, but I think interaction designers should not make wireframes at all, OK? Don't hurt me for that one.</span></p>
      <p><span data-start="00:30:20.000" data-end="00:30:50.000" data-start-seconds="1820">You write your markdown. This is an example. You've got your little placeholders here. This is going to be a button, and here I'm pulling in the CSS for the button. This looks complicated, but five minutes of explanation, and it's not longer complicated, and you'll know exactly how to do it. OK? It's no more complicated than undercover removal or curves in Photoshop.</span></p>
      <p><span data-start="00:30:50.000" data-end="00:31:19.000" data-start-seconds="1850">You script your screenshots in Casper. Now, I am a designer. Do not judge my JavaScript. This is very simple, and what I'll do, to the chagrin of all the Javascripters here, is I'll just repeat. I'll put like 50 Casper then functions in here, right? I'll put one in for each screenshot that I want because it's easier, OK? And it's not going into production, so it doesn't matter, right?</span></p>
      <p><span data-start="00:31:19.000" data-end="00:31:59.000" data-start-seconds="1879">Here is the CSS, and I just marked the sections with comments. This is the button CSS. This is what it looks like when you hover it, OK? And then go into the folder that you want in the command line and type the word &quot;Dexy&quot;. I think everyone can do that. And then style guide. Done. Ding. I could do a demo if I have time, but I'm not sure if I have time. Do you want to see a demo?</span></p>
      <p><span data-start="00:31:59.000" data-end="00:32:03.000" data-start-seconds="1919">Yes.</span></p>
      <p><span data-start="00:32:03.000" data-end="00:32:33.000" data-start-seconds="1923">OK. My grandfather said, when I was a kid, &quot;Don't do live demos. Bad things can happen.&quot; We'll try it out. Let's say we've got this fantastic web page. Wow. This is our mockup, and...Wait a minute. I'm seeing something you're not seeing. See, that's what I mean. Two minutes into the demo, and...</span></p>
      <p><span data-start="00:32:33.000" data-end="00:33:13.000" data-start-seconds="1953">This is your web page. We're keeping it simple, because there are less things that I can mess up in public. This is a button. Obviously, without the pointer, which I know someone was going to point out. Here is the command line. Let's get that up there. LS means &quot;list,&quot; for you designers, you three designers in the audience. LS is &quot;list.&quot; You can imagine that BR would be &quot;beer.&quot; If I went home...</span></p>
      <p><span data-start="00:33:13.000" data-end="00:33:42.000" data-start-seconds="1993">That would be great, if you could just go home and say, &quot;BR,&quot; and the beer would be given to you. I would get the shit slapped out of me. What we've got here is footer and header. Those are headers and footers of the style guide. I want one header and footer. If I have multiple pages, there is no reason to repeat those, so I just have one, and then I have index markdown, which you just saw. Don't laugh that I'm using Vim, please.</span></p>
      <p><span data-start="00:33:42.000" data-end="00:34:13.000" data-start-seconds="2022">This is pretty simple, right? And then we have the screenshots, which you also just saw. Ignore the lint thing. What I'm saying is, make the viewport 800 wide, and then take a picture of that button. If I had more elements, and if it was an actual page, I could take all kinds of screenshots of different elements at different viewport widths, but let's keep it simple, because it's less for me to mess up.</span></p>
      <p><span data-start="00:34:13.000" data-end="00:35:10.000" data-start-seconds="2053">In mockup, I have the HTML file that you just saw here, and the CSS for it. What I'll do now is just set up Dexy, and then run Dexy. Now I've got some other things in this directory, and in output, if we go in there, then you'll see I've got a screenshot of the button, I've got index.html and then the mockup. So what is that index.html? That's the style guide, this should be next to this, but the screen is pretty small right now, and I didn't do it responsively.</span></p>
      <p><span data-start="00:35:10.000" data-end="00:35:44.000" data-start-seconds="2110">The interesting part about this is if we were to go back up and let's say we wanted to change something in our mock up in the CSS. Was it Facides who asked me to use Papaya Whip? It's going to be hard, because in the last conference, I did this talk, I missed spelled the word orange like 27 times.</span></p>
      <p><span data-start="00:35:44.000" data-end="00:36:23.000" data-start-seconds="2144">Those are the types of things that can go wrong. Let's get that out. Then, let's take the border radius out, for fun. So we save that, go back up. Now, we just changed something which means that we want to get rid of the stuff that Dexy did last time. So we did the clean up and then we do Dexy set up. These are really simple commands. Then run Dexy again. Then, you get that. [applause]</span></p>
      <p><span data-start="00:36:23.000" data-end="00:36:46.000" data-start-seconds="2183">This is a very simple example. I like simple examples because I believe simple examples don't introduce a lot of complexity, which detract from what you're learning. So you can imagine, because everyone here is probably smarter than I am, you can do a whole style guide with all these different sections, log in blocks, when you should use them, what should they look like at different screens widths.</span></p>
      <p><span data-start="00:36:46.000" data-end="00:37:20.000" data-start-seconds="2206">And anytime you change anything, whether it's the code or whether it's the element itself, or even complete pages, you can just update your style guide as easy as this. So that's that. Let's get back here, and I'm probably running really late, because Christian's really getting angry. I hear him growling. So it's got a learning curve, but everything does. It's not that bad. You don't have to use everything. You don't have to use any of this. But if you do, you don't have to use everything at once.</span></p>
      <p><span data-start="00:37:20.000" data-end="00:37:46.000" data-start-seconds="2240">There might be one thing that appeals to you, just do that. Just start thinking about how you can make your workflow better and choose what works for you. But just realize that we're in a new time with all different types of devices and we can't even think in terms of smartphone and tablets and desktops anymore, because there are televisions and refrigerators and cars with Internet...Game consoles.</span></p>
      <p><span data-start="00:37:46.000" data-end="00:38:06.000" data-start-seconds="2266">We don't know what we're going to be designing for, so just start thinking about that workflow and seeing what you can change. Have fun with it and keep learning. Thank you. [applause]</span></p>
      <p><span data-start="00:38:06.000" data-end="00:38:13.000" data-start-seconds="2286">Oh god. I've seen it before.</span></p>
      <p><span data-start="00:38:13.000" data-end="00:38:37.000" data-start-seconds="2293">Actually, we don't have much time, so I'm going through the feedback that I got from people, mostly. I loved it last time. I saw it at Smashing Mag. I think it's a good idea, what we're doing here. I think there should be more talks about designers talk about code-y things and coders talk about design-y things, or both of them together, how we work together. And that kind of automation basically means you don't build lots and lots of documentation that nobody reads or wants.</span></p>
      <p><span data-start="00:38:37.000" data-end="00:38:38.000" data-start-seconds="2317">Right.</span></p>
      <p><span data-start="00:38:38.000" data-end="00:38:59.000" data-start-seconds="2318">So, a good question, though, well, except for a lot of people whinging that the CLI is still scary, but you can talk to them in the break, I think. A lot of people said, seeing that you do web-page comps anyways, why not just include the HTML element in an IFrame or something like that rather than generate images?</span></p>
      <p><span data-start="00:38:59.000" data-end="00:39:29.000" data-start-seconds="2339">That's a good question. I actually did that first, because Dexy had no support, itself, for screen shots. So I did have HTML. What I had was I had them, I guess, in iFrames, I think, that I did. So I had all these iFrames in the page. I didn't like it. I didn't like the way it looked, mainly, as a designer. I don't know. I just didn't like that sometimes you would have the scroll-y bits. It was just too much work to tweak.</span></p>
      <p><span data-start="00:39:29.000" data-end="00:39:44.000" data-start-seconds="2369">And also, you would have to split out the files again. So you would have to have all these separate HTML files for the navigation. I guess you could pull them in. I don't know. I'm probably just not much of a programmer to be able to do that myself.</span></p>
      <p><span data-start="00:39:44.000" data-end="00:39:50.000" data-start-seconds="2384">Well, you would have a client that looks at it in IE6 and wonders why there are no rounded corners.</span></p>
      <p><span data-start="00:39:50.000" data-end="00:40:03.000" data-start-seconds="2390">Yeah. I think that's what the mock-up is for. The style guide is to describe how you wanted the design, and the mock-up is to show how the design works in reality. So these two things work together.</span></p>
      <p><span data-start="00:40:03.000" data-end="00:40:09.000" data-start-seconds="2403">One question was, why would a style guide include CSS code?</span> <span data-start="00:40:09.000" data-end="00:40:46.000" data-start-seconds="2409">It's just a way of having an element and having the properties that describe what this thing is made of, what font it uses, how big it should be. Developers understand that. You could hide that for clients, for example, and then developers could then just open it up and take a look at it. It's easier to see what the margins should be by looking at the CSS. It's already in the CSS, because you already have your mock-up. So why type that out again, when the developer can understand it just as easily?</span></p>
      <p><span data-start="00:40:46.000" data-end="00:40:51.000" data-start-seconds="2446">So instead of just putting arrows and &quot;This is that much,&quot; you just put the code under it and people should understand it.</span></p>
      <p><span data-start="00:40:51.000" data-end="00:40:52.000" data-start-seconds="2451">Yeah. Yeah.</span></p>
      <p><span data-start="00:40:52.000" data-end="00:41:08.000" data-start-seconds="2452">Yeah, that's a good point. A very interesting one here is how do you explain to your client that the mock-up prototype in the browser is not production-ready? Because as soon as I showed stuff to people in a browser, they thought, &quot;Oh, cool. I can reuse 90 percent of that. Why do you need another three weeks to build this website?&quot;</span></p>
      <p><span data-start="00:41:08.000" data-end="00:41:32.000" data-start-seconds="2468">Yeah, exactly. That's one of the big problems. I call that &quot;Presentation psychology.&quot; There is a point when you can show a mock-up in the browser, but it's not in the very beginning. So what I do is I make the mock-up and then I take screen shots, and I'll automate those sometimes with Casper and Phantom, or just even take screen shots with your screen-shot tool.</span></p>
      <p><span data-start="00:41:32.000" data-end="00:41:47.000" data-start-seconds="2492">And I'll present the screen shots and I'll say, &quot;These are some pictures of what the design will look like.&quot; And then, when they say, &quot;Oh, we like it,&quot; then I'll say, &quot;OK, well, we're going to get to work on that, and we'll get back to you with a mock-up.&quot;</span></p>
      <p><span data-start="00:41:47.000" data-end="00:42:11.000" data-start-seconds="2507">&quot;Here is my bill.&quot; I tried reverse psychology and basically made three really ugly things and one thing that we wanted to give them. And sadly enough, we had to implement one of the ugly ones. So it's really dangerous, at times, to go with design and HTML for people already. Somebody was asking if there is a live one already out there for a site that we could look at, that you built with Dexy?</span></p>
      <p><span data-start="00:42:11.000" data-end="00:42:41.000" data-start-seconds="2531">No, unfortunately. These types of things and most of my clients are clients who don't appreciate it that much if I publicize materials that I used for them, so a lot of NDA stuff. I'll probably just have to make an example one. That's probably the best thing to do, or take an existing site and just make an example of that. First, have to get the book done.</span></p>
      <p><span data-start="00:42:41.000" data-end="00:42:53.000" data-start-seconds="2561">One earlier question was how do you get the client to write down feedback when the design is in the browser? Could that be extended to allow for an annotations system with Google Docs, or something like that?</span> <span data-start="00:42:53.000" data-end="00:43:25.000" data-start-seconds="2573">That's a great question. In fact, I was talking with Ana about this. That is a request that she has, so we'll probably be working together on doing some kind of annotation system on top of Dexy, where we use... Dexy is all plugins, so we're going to see if we can make a plugin that allows you to annotate. We might use SVG to draw the annotations, or whatever. We'll have to see. It's just something we talked about last week, but it's definitely something we want to do.</span></p>
      <p><span data-start="00:43:25.000" data-end="00:43:34.000" data-start-seconds="2605">One question is how do I generate the style guide for production uses? This is partly what this is about, but you just had a small demo to show how it works.</span></p>
      <p><span data-start="00:43:34.000" data-end="00:43:50.000" data-start-seconds="2614">I don't know if I would do a style guide. The style guide is about the design. It's not necessarily about documentation for production of CSS, especially if you use things like Sass, you're going to have heavily optimized CSS, which won't always lend itself to this.</span></p>
      <p><span data-start="00:43:50.000" data-end="00:44:21.000" data-start-seconds="2630">If you have a button, you might have a lot of the styles that you use for the button like in other selectors, or like in a mix-in, so you would have to include the mix-in styles and any specific styles for that button within a certain module. It can get really complex. So if you want to document production things, I see that more as production documentation and not really a style guide. You could do that. You could use Dexy for that if you want. Dexy is great for all types of documentation.</span></p>
      <p><span data-start="00:44:21.000" data-end="00:44:23.000" data-start-seconds="2661">If it doesn't change from under you?</span> <span data-start="00:44:23.000" data-end="00:44:36.000" data-start-seconds="2663">If it doesn't change from under... Well, I'm aware of a lot of the changes. It's not all that bad. It should even be easier for non-coders to work with.</span></p>
      <p><span data-start="00:44:36.000" data-end="00:44:45.000" data-start-seconds="2676">One last one. How do you store a style guide like that? You can put it somewhere on a website. But if a client wants to have it as one file, do you have to zip it up?</span></p>
      <p><span data-start="00:44:45.000" data-end="00:44:57.000" data-start-seconds="2685">I think there is even a Dexy filter for generating a PDF. What do I use? I use...</span></p>
      <p><span data-start="00:44:57.000" data-end="00:44:58.000" data-start-seconds="2697">Ghost script?</span> <span data-start="00:44:58.000" data-end="00:45:07.000" data-start-seconds="2698">No. It's another mark down converter. I can't come up with the name. It's fantastic. From John McFarland.</span></p>
      <p><span data-start="00:45:07.000" data-end="00:45:08.000" data-start-seconds="2707">Whatever.</span></p>
      <p><span data-start="00:45:08.000" data-end="00:45:14.000" data-start-seconds="2708">Whatever. I'll look it up. I forgot what it is. But yeah, just generate a PDF that way.</span></p>
      <p><span data-start="00:45:14.000" data-end="00:45:17.000" data-start-seconds="2714">Cool. That's it from Stephen Hay. Thank you again.</span></p>
      <p><span data-start="00:45:17.000" data-end="00:45:18.000" data-start-seconds="2717">Thanks. [applause]</span></p>
     </div>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2012/sessions/style-guides-are-the-new-photoshop-stephen-hay.md" id="comment">
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
     <h2>Fronteers 2012</h2>
     <ul>
      <li><a href="/congres/2012/news" title="Fronteers 2012 news">News</a></li>
      <li><a href="/congres/2012/venue" title="Fronteers 2012 venue">Venue</a></li>
      <li><a href="/congres/2012/schedule" title="Fronteers 2012 schedule">Schedule</a></li>
      <li><a href="/congres/2012/speakers" title="Fronteers 2012 speakers">Speakers</a></li>
      <li class="current"><a href="/congres/2012/sessions" title="Fronteers 2012 sessions" class="current">Sessions</a></li>
      <li><a href="/congres/2012/workshops" title="Fronteers 2012 workshops">Workshops</a></li>
      <li><a href="/congres/2012/jam-session" title="Fronteers 2012 Jam Session">Jam Session</a></li>
      <li><a href="/congres/2012/tickets" title="Fronteers 2012 tickets">Tickets</a></li>
      <li><a href="/congres/2012/attendees" title="Fronteers 2012 attendees">Attendees</a></li>
      <li><a href="/congres/2012/contact" title="Fronteers 2012 contact information">Contact</a></li>
     </ul>
    </div>
    <div lang="en">
     <h2>Elsewhere</h2>
     <ul>
      <li><a href="https://twitter.com/FronteersConf">Twitter</a></li>
      <li><a href="http://lanyrd.com/2012/fronteers/">Lanyrd</a></li>
      <li><a href="https://itunes.apple.com/nl/podcast/fronteers-videos/id1136212068?l=en">Podcast on iTunes</a></li>
      <li><a href="https://www.facebook.com/events/327706477288746/">Facebook</a></li>
      <li><a href="http://vimeo.com/fronteers/videos">Vimeo</a></li>
      <li><a href="http://webchat.freenode.net/?channels=fronteers">IRC</a></li>
      <li><a href="http://www.flickr.com/search/?q=fronteers12">Flickr</a></li>
     </ul>
    </div>
    <div lang="en">
     <h2>Fronteers</h2>
     <ul>
      <li><a href="/about">About Fronteers</a></li>
     </ul>
    </div>
    <div class="images" lang="en">
     <h2>Sponsors</h2>
     <ul>
      <li><a href="http://frontlab.nl/"><img src="/_img/congres/2012/sponsors/frontlab.png" alt="Frontlab" width="150" height="56"></a></li>
      <li><a href="http://www.google.nl/"><img src="/_img/congres/2012/sponsors/google.png" alt="Google" width="150" height="50"></a></li>
      <li><a href="http://mailchimp.com/"><img src="/_img/congres/2012/sponsors/mailchimp.png" alt="MailChimp" width="150" height="50"></a></li>
      <li><a href="http://www.ebrella.com/"><img src="/_img/congres/2012/sponsors/ebrella.png" alt="eBrella" width="150" height="50"></a></li>
      <li><a href="http://info.nl/"><img src="/_img/congres/2012/sponsors/infonl.png" alt="Info.nl" width="150" height="56"></a></li>
     </ul>
    </div>
    <div class="images" lang="en">
     <h2>Partners</h2>
     <ul>
      <li><a href="http://www.abookapart.com/"><img src="/_img/congres/2012/sponsors/abookapart.png" alt="A Book Apart" width="150" height="36"></a></li>
      <li><a href="http://www.fivesimplesteps.com/"><img src="/_img/congres/2012/sponsors/five-simple-steps.png" alt="Five Simple Steps" width="150" height="47"></a></li>
      <li><a href="http://lanyrd.com/"><img src="/_img/congres/2012/sponsors/lanyrd-com.png" alt="Lanyrd.com" width="150" height="36"></a></li>
      <li><a href="http://oreilly.com/"><img src="/_img/congres/2012/sponsors/oreilly.png" alt="O'Reilly" width="150" height="36"></a></li>
      <li><a href="http://www.peachpit.com/imprint/index.aspx?st=61074"><img src="/_img/congres/2012/sponsors/new-riders.png" alt="New Riders" width="150" height="43"></a></li>
      <li><a href="http://www.smashingmagazine.com/"><img src="/_img/congres/2012/sponsors/smashing-magazine.png" alt="Smashing Magazine" width="150" height="43"></a></li>
      <li><a href="http://www.vpro.nl/"><img src="/_img/congres/2012/sponsors/vpro.png" alt="VPRO" width="150" height="36"></a></li>
      <li><a href="http://webdesignermagazine.nl/"><img src="/_img/congres/2012/sponsors/webdesigner-magazine.png" alt="Webdesigner Magazine" width="150" height="36"></a></li>
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
      <li class="current"><a href="/congres/2012" class="current">Fronteers 2012</a></li>
      <li><a href="/congres/2011">Fronteers 2011</a></li>
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
    var transcript = document.querySelector && document.querySelector('.transcript'), video = document.querySelector && document.querySelector('video');
    if (transcript && video) {
     transcript.onclick = function(e) {
      if (e && e.target && e.target.getAttribute('data-start-seconds')) {
       video.currentTime = e.target.getAttribute('data-start-seconds') - 1;
      }
     };
     if (transcript.previousElementSibling && transcript.previousElementSibling.tagName.toLowerCase() == 'h3') {
      transcript.previousElementSibling.appendChild(document.createTextNode(' (click to jump to that part in the video)'));
     }
     tellCSS = true;
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
