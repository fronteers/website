<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>Vector Graphics for the Web by Brad Neuberg · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p347">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>Vector Graphics for the Web by Brad Neuberg</h2>
     <h3>Videos</h3>
     <video width="480" height="270" src="/_downloads/2010/brad-neuberg-vector-graphics-for-the-web.webm" controls>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2010/brad-neuberg-vector-graphics-for-the-web.webm">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="http://vimeo.com/15773144">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2010/brad-neuberg-vector-graphics-for-the-web.webm">Download video</a> (WebM, 156MB)</li>
      <li><a href="/_downloads/2010/brad-neuberg-vector-graphics-for-the-web.ogv">Download video</a> (OGV, 71MB)</li>
     </ul>
     <h3>Slides</h3>
     <ul>
      <li><a href="http://codinginparadise.org/projects/html5-3d-slides/html5.html">See slides</a> (Requires a modern browser)</li>
     </ul>
     <h3>Transcript</h3>
     <p>Brad Neuberg: [0:04] Thanks, everyone. I loved Robert's talk. I don't think I'll ever be able to get the sitcom, &quot;Friends,&quot; and closures - that linkage - out of my head. So I just want to ask, who was at the party late last night? Yeah. And who drunk a bunch? [laughter]</p>
     <p>Brad: [0:23] Who has a little bit of a hangover? I do. Wow. I'm lightweight. I went home early, but I'm a little loopy from jet lag, so excuse the bad jokes if they land flat.</p>
     <p>[0:36] So just before we jump in, I want to say that this slide deck is actually a little bit of a universal slide deck, and I'll be showing you what that means.</p>
     <p>[0:46] But today, we're going to be going deep into SVG. And I just want to know, again, who here has gotten to work with SVG. OK. And who, here, hasn't necessarily gotten to play with it, but has read a little bit about it. OK, great.</p>
     <p>[1:03] So SVG is one of those technologies - there's this old saying that, &quot;I spent 10 years to be an overnight success.&quot; SVG, in some ways, is finally arriving. And one of the things that's making it unique is that it's, as part of HTML5, you can now bring SVG into your pages.</p>
     <p>[1:23] So one thing, I want to apologize is there's some network difficulties, so some of my demos are on the network, so they may not load, so I might be painting a picture for you and describing what you'd be seeing.</p>
     <p>[1:34] And I also had wanted to take questions on Twitter that I can address at the end of the talk, so maybe if that comes up, if you add me at BradNeuberg when we get to the end of the talk I can take questions through Twitter.</p>
     <p>[1:52] So I just quickly want to state, who in the heck is this guy up here, a little bit about my background. So some of the things I've been involved with is when AJAX was a little bit of a trendier word, creating lots of libraries like Dojo Storage, Dojo Offline. Really simple history.</p>
     <p>[2:13] And when I was at Google, I was a developer advocate of Google Gears, which was trying to push the browser forward a little bit before HTML5 arrived. I started something called co-working.</p>
     <p>[2:24] When I was self-employed, even though I'm a little bit of an introvert geek, even though I'm standing up here, it was nice to work around people, so I wanted a space where there were other programmers, so I started something called co-working.</p>
     <p>[2:36] And I was also in a group at Google called the &quot;Open Web Advocacy Group,&quot; where we created things like SVG Web. And most recently, I was a software engineer on the Google Docs and Google Buzz Teams.</p>
     <p>[2:50] So even though we're going to be focusing on SVG today, I want to place SVG in context. There's a great quote by an author named David Weinberger - it's actually a book title called &quot;Small Pieces Loosely Joined,&quot; and he uses this to describe the Internet itself.</p>
     <p>[3:07] And we're getting a whole host of new technologies and existing technologies, things like HTML5, CSS3, SVG, JavaScript, and WebGL. And when you actually start like working with these things, you find that they're like these small pieces. They can get really interesting when you can combine them together.</p>
     <p>[3:27] And one of the demos - well, let's cross our fingers on this one, it might not work, but what you would be seeing is a &quot;WebGL&quot; - Ah! It's going to stream in. Oops! I'm not running Safari nightly.</p>
     <p>[3:49] Here, I'll paint the picture. You'd be seeing a 3D teapot, rendered in WebGL, and when we would click it, CSS3 animations would flip it around. So these are two different technologies, that when you put it together, something interesting happens.</p>
     <p>[4:05] And you may have seen when I did this, these are actually SVG masks, the text lying on top of HTML5 elements, masking through the image. So keep in mind these are tools that you can add to your tool belt that get really interesting when you put them together.</p>
     <p>[4:25] Now, like I mentioned, this is a little bit of a universal slide deck. We're only going to be covering SVG today. But I just want to show you that the slide deck is built using all these technologies. And for example, there's a whole thing on HTML5 in here. We're not going to cover that.</p>
     <p>[4:45] Today, we'll be talking about SVG. Ah, it loaded, but one of the eyebrows didn't.</p>
     <p>[laughter]</p>
     <p>Brad: [4:54] Was it Vanilla Ice who shaved off one of his eyebrows or something? We've got a little Vanilla Ice thing. So one of the things I love about this - what it should be saying over here is a Twitter stream of whenever anyone mentions &quot;Mr. T.&quot;</p>
     <p>[5:06] And I love this demo, because Mr. T, each one of his arms, is a separate SVG file brought in with the image tag. And then, the animation is done using something called CSS3 animations. So again with that theme, different technologies, but when you put them together, you can do some really interesting things.</p>
     <p>[5:28] Who, here, has gotten to play with CSS3 animations or transitions? Great.</p>
     <p>[5:36] So let's jump into SVG. So the best way I like to think about SVG is &quot;HTML for Graphics.&quot; So just like in HTML, we've got the Form tag, a Button tag, SVG gives you more tags, but for graphics.</p>
     <p>[5:53] So for example, a Rectangle tag, a Circle tag - and these are Vector shapes. And what that means is that actually behind the scenes, they're described by math.</p>
     <p>[6:06] So for example, this is SVG. And because it's described by math, as we zoom in, it stays beautiful. The lines stay clear. They don't break up. And that's what vector graphics gives you.</p>
     <p>[6:25] And one of the other really unique things about SVG is it uses your existing skills. You use CSS to style it. You use JavaScript in order to add behavior. That's one of the unique aspects.</p>
     <p>[6:40] So common questions are when should I use SVG, and when should I not use SVG? Well, because SVG is those vector graphics, it's really great in situations when you have &quot;Dynamic sizings and scalings.&quot;</p>
     <p>[6:53] So let's say, for example, you have a web page and you want to have a background. You can set that to an SVG file, and as you change the size of the page, the SVG will scale and it will still look nice. SVG is a great thing to use in that situation.</p>
     <p>[7:11] If you want to use CSS, SVG is great. And we're not going to be going into CSS3 in this talk. But SVG and CSS3 work together really well because you've got all these new selectors. It could be very powerful. So being able to put those together is really nice.</p>
     <p>[7:29] SVG is great when you're dealing with &quot;mouse-driven&quot; applications. So in SVG, when you say, &quot;Here's my rectangle. Here's my circle.&quot; The computer knows that it's a rectangle and a circle, so it's easy to add behavior. You can say, &quot;onmouseover&quot;, for example, and link some JavaScript to it.</p>
     <p>[7:47] And finally, SVG is great when you want something to be easy to comprehend by search engines.</p>
     <p>[7:53] Google, for example, has announced that they're indexing SVG recently. And also if you want something to be accessible. Because it's just text, it's easy for screen readers and actually other sites and applications to hook into what you've built.</p>
     <p>[8:09] So when is SVG not a great choice? Well, when you have something that needs a lot of sprites. If you have an interactive graph with 10,000 data points and things flying around, if you have a game that's primarily keyboard-driven, SVG - the overhead of the browser tracking everything, you don't need that, so Canvas is a better choice in that situation.</p>
     <p>[8:40] If you're dealing with something that's predominantly pixel-oriented, if you're an entrepreneur and you're building the next Photo Shop, but on the web, Canvas is a better choice because it's more naturally dealing with Bitmaps. So those are two good things to know, should I be using SVG or Canvas?</p>
     <p>[9:01] So let's jump in with some real code. I want to make sure - people in the back, can you see the source code? Yeah? Raise your hand if you can. OK, good.</p>
     <p>[9:12] Just a quick thing - the monitor keeps turning off. I don't know if there's something to be done there.</p>
     <p>[9:19] So there's a whole bunch of different ways to embed SVG. One of the one's that's coming up, it's actually going to be in the next generation of the browsers, is being able to drop it right into HTML5.</p>
     <p>[9:31] So I'll get my little laser here. Here, we actually see the HTML5 DOCTYPE, and right here, we see a little bit of SVG. And we can actually draw - we can actually just say SVG now, and HTML5, and you see some stuff in here. And we'll be covering some of these different elements.</p>
     <p>But the code that's right here is actually being rendered right there, in real time. There are a couple of little things here. You see, you don't have to grab all this right now - Aw! My battery died, OK, Murphy is alive.</p>
     <p>[10:11] So we have a circle, here's our circle. We have some text, there's our text. We have a gradient, which you can see here. And one of the other things you can see is we can have IDs, just like HTML. We can have CSS classes, just like HTML. And we can style these.</p>
     <p>[10:31] So here we say, &quot;The circle is important,&quot; and we attach it to a style. And you see some new style properties here - a stroke, a stroke-width. And we're doing the same thing for text. Here, we're changing the stroke and the font-size. That's pretty cool.</p>
     <p>[10:47] You see one other thing. Here, we're attaching some behavior. On &quot;mousedown,&quot; say, &quot;Hello.&quot; And if we come over here, there we go.</p>
     <p>[11:01] Now, traditionally, SVG has kind of been in its own file as an XML file format, and here's what that looks like. So now you have kind of the &quot;XLM-y&quot; stuff. So we have a declaration.</p>
     <p>[11:14] And you see when you use it as XML, you need to have the XML name spaces right here. But then, everything else looks pretty much the same, and we're rendering it right there.</p>
     <p>[11:26] There are other ways to embed SVG. One is as an object tag. So we say, &quot;&lt;object type=&quot;image/svg+xml&quot;…&quot; that's the SVG mimetype. If you put the stuff on a webserver you want to make sure to add that mimeype, and you point to your SVG file.</p>
     <p>[11:46] This is a great way, for example - a lot of these demos, for example, I included using the object tag. As is this guy right here.</p>
     <p>[11:56] Finally, almost all browsers support using SVG in the image tag like you saw in that Twitter demo with Mr. T moving around. And that's really straight-forward. You say &quot;&lt;image src=&quot;sampleEmbed.svg&quot;&gt;&quot; and then point overhere.</p>
     <p>Something special about that is what do you think would happen if you could use the image tag to pull SVG in and there was JavaScript inside. Would that be a good thing or a bad thing?</p>
     <p>[12:22] [audience: &quot;bad&quot;]</p>
     <p>Brad: [12:23] Bad, yeah. So when you include SVG using the image tag, JavaScript is disabled. I'm clicking, but there's no &quot;Hello.&quot;</p>
     <p>[12:34] And finally, one of the cool things is you can use SVG as a background image. Shelley Powers has written some really cool articles about doing this. It really lets you make some really nice markup and that's pretty straightforward. We just say .SVG instead of a .gif or .png file.</p>
     <p>[12:54] Let's get into the basics. Here were see some of the basic shapes I'm going to run my mouse over. We're going to see some of them change.</p>
     <p>[13:03] We've got a circle. We say here's the center x of the circle and the center y. Here's the radius. I've made these red because it's special circles. But then you'll see some things that show up all over elements in SVG.</p>
     <p>Fill, which obviously fills with orange and stroke, which actually makes it black and that's the default. I'm not showing it here, but I have a CSS calling hover that changes the stroke to yellow when I run over it to make it easier to figure out what I'm talking about.</p>
     <p>[13:35] Rectangles, pretty straightforward, give the x and the y, the width and the height. You can say rx and ry to make rounded corners. So it's very straightforward - PPK is laughing. One thing I wanted to say, I really wanted to bring a shirt that said, &quot;I love drag and drop,&quot; and give it to PPK. [laughs]</p>
     <p>[14:01] Then now you see here, a little different styles. So just like HTML, you actually can have a style element and you can choose. You can use attributes or you can use CSS styles. Here we're doing a similar thing.</p>
     <p>We have ellipses. So we have our basic shapes: [14:13] ellipse, set the center, set the radius on both axis and then you see those standard things.</p>
     <p>[14:23] Now you start seeing something here. We're going to talk about measurements. But not everything has to be pixels. Here we are saying, make the outside one centimeter. We have a polygon and you give the points. Each of these is an x, y point and a polygon with fill. It makes it a star.</p>
     <p>[14:44] We'll be talking about transform as well, but this lets you draw something and then move it around, move it here, rotate it, scale it. Here's a path.</p>
     <p>[14:53] Now a path takes a tiny, little language that essentially says, here I have a pen, move it around, pick it up, and so on. I'm not going to go into it. It's pretty straightforward. Generally you might be using a tool that generates this - basically you just say move in different ways.</p>
     <p>[15:16] We see our standard properties and finally we have a polyline which allows you to draw something like a polygon, but you have a little bit more control over whether it's filled. So there are your basic shapes. That's like your ABCs.</p>
     <p>[15:34] I'm not going to go deep into this. There's something called a ViewBox. I'm only mentioning it because sometimes you might run into issues and it's good to know that it exists in case you need to solve something.</p>
     <p>[15:47] We have a couple of things going on here. We have an image that I've brought in and I've set the width and the height. The ViewBox, you can think of, as the x/y width and height to draw over your SVG.</p>
     <p>[16:09] Working with ViewBox is a little bit of an art. If you need to use it you just fool around until you get the right value. So we can actually move this around. Right now we're saying, go from 0, 0 to 200, 200. But if I was to say, -50, -50...</p>
     <p>[16:32] [mumble]</p>
     <p>[16:52] That's weird. So while I work out this technical difficulty I'll talk about something called... There we go. Excuse the technical difficulty there.</p>
     <p>[17:12] I'm not going to go deep into this, but it allows you to move your thing around and have a little bit more control over how the SVG draws itself. Just keep it in your mind. If you run into something really funky, think about, &quot;Oh, maybe ViewBox can solve this.&quot; It's a little bit more of an advanced thing.</p>
     <p>[17:32] One of the cool things about SVG is it can have hyperlinks. You can hyperlink into an SVG file on specific elements and you can jump back out.</p>
     <p>[17:43] One of the things that you need to do is SVG uses something called XLink. You don't need to know it. It turns out to be cruft. All that you really care about is your href, just like the normal link, but you just have to add the little name space.</p>
     <p>[17:57] So making a link - here we are, we have our circle. You actually see here I'm using percentages to lay it out. You don't have to use pixels. So I'm saying, put it in the middle and then give a 10 percent radius of the total area.</p>
     <p>[18:10] Then here, link the whole thing over - I'm just putting my website here - and make the target blank, just like normal things.</p>
     <p>[18:21] I'm not going to click because the network is down. But you see it turns into a finger where if I click on the circle. Notice it's truly a circular link. It doesn't turn into the finger unless you're right on the circle.</p>
     <p>[18:32] So you can make interactive, linkable things, which is great because that means that your diagrams can interact with page rank, for example.</p>
     <p>[18:41] They can really say, here's a medical diagram, here's a business diagram, and the individual things can link out and do cool stuff.</p>
     <p>[18:51] One of the things I like the best about SVG is that it integrates with CSS and you can embed it. I actually left off some of the SVG, but we can have a style element inside.</p>
     <p>[19:05] Here we are saying, there was our hyperlink, when you hover over it, change the stroke and the width, and then we actually use a little bit of CSS3 here.</p>
     <p>[19:16] We say, when you hover over the link, grab the immediate child circle and give it a gradient. Here's what that looks like. When I run over it, it changes.</p>
     <p>[19:36] Another one of the cool things about SVG is you can actually build up a library of reusable stuff.</p>
     <p>[19:43] So there's something called the use element that, essentially, you can define, make a happy face, make a complicated thing over here and then you use the &quot;use&quot; element to stamp copies of what you just defined. This can be really useful if you want to have common styles.</p>
     <p>[20:02] So one of the things in SVG is a defs section for definitions; it's like the head element in HTML. That's where you put things like gradient definitions, fonts, or things that you want to reuse.</p>
     <p>So here, for example, we define a polygon. We give it a name: [20:16] polygon sprite. We give it a fill and an opacity, so it's a little invisible or a little see-through. Then we give our points.</p>
     <p>[20:28] Then right here we use the &quot;use&quot; element and we point to our sprite; three times, boom, boom, boom. Then we use this transform property - which I'll be talking about - which lets you move things around. So for the first one we actually translate. We say, move it over on the y-axis minus 20 and then rotate it 15 degrees.</p>
     <p>[20:49] Here we move it on this x and y and scale it to half-size; that's that guy. Here we move it again, we scale it a little bit, and we rotate it the other way. So this is really great to have a common library of reusable things, one of the nice aspects of SVG.</p>
     <p>[21:09] So just like in HTML you have a div that can group things together; acts as the super parent. SVG has something similar but it's called the group or the G element. This is very powerful. So you say G and then you nest things. Here we're nesting a rectangle and then some text.</p>
     <p>[21:28] What's cool about the group is just like if you've ever used a drawing program. You know how you group things together and then you can change it as a unit. Well, you can do the same thing here. Here we're grouping these together and then we're doing that transform again.</p>
     <p>[21:45] We're saying, move it over on the x and the y, rotate 45 degrees. And you can also set common styles. So we're saying, everything that's inside of me, make it blue. Again, this is one of the basic things at SVG. It's very useful.</p>
     <p>[22:04] I haven't quite talked about transforms yet, but one of the things that's useful about groups is maybe you make your group for a happy face, for example, and you can actually translate it to the middle of the screen to make drawing easier and you can translate it back to where you want.</p>
     <p>[22:23] That can actually help to make it easier to figure out how to draw things. That's another useful aspect of groups.</p>
     <p>[22:30] OK. So now we're transformed. I mentioned that you could transform a group as a unit. Here we have that shapes demo again, but I've put it all inside of a group and they're all in there. I'm not showing that. I'm showing the group.</p>
     <p>[22:43] Let's start adding some transforms to this. There we just added a translate. I said, -100,-100. So you saw them jump up and to the left. Then I'm skewing it on the x. Skewing is when I push one side to the side.</p>
     <p>[23:01] Do you ever have a box and you push it to the side, it folds a little bit? So that's what we're doing here. You notice it skews.</p>
     <p>[23:11] Then we rotate. Now this is actually a special form of rotate where I can give the degree and then give the x and the y point for where you want the center to rotate. By default it's going to try to rotate from the upper left. So everything will swing around like this, which may or may not be what you want.</p>
     <p>[23:35] But you can actually say no, put the center here, and rotate around this point, which is what we're doing right here.</p>
     <p>[23:45] Then finally, we're doing a scale. So by default everything has scale 1.0; that means do nothing. If you go smaller than 1.0 you're smushing something down, making it smaller. If you go larger, you're making it bigger. So we are making it just a tiny bit smaller.</p>
     <p>[24:02] One thing to know about transforms is they add up. They go from left to right. So if I were to flip and do this the opposite way, you would see something different. Remember that, they add up just like in certain forms of math you can't mix things up. Know that; just keep that in mind when you're doing it if you run into some issue.</p>
     <p>[24:31] Let's talk a little bit about scripting. You see a lot of text here, but what I want to show you is that working with SVG from JavaScript is pretty similar to working with it from HTML. There are a couple of little differences.</p>
     <p>[24:47] The first thing is technically SVG lives in XML name spaces. So you're going to have to know just a little bit about those. Here we set some variables to the SVG and XML name spaces.</p>
     <p>[24:59] Who here knows XML name spaces? I personally think they were a mistake, but they're there and they're just for SVG. They're grandfathered in a little bit in HTML5.</p>
     <p>[25:13] So it's a little bit of boilerplate. Here we're actually dynamically creating a new SVG element. So you see the standard &quot;create&quot; element. But you see we're using the &quot;NS&quot; form, which stands for namespace and the first thing you pass in is the namespace of what you want to create.</p>
     <p>[25:30] So when you're working with SVG I just generally define a variable like this and pass in SVG NS and then you give the thing that you want to create. So you have one extra thing to add versus HTML. So that we're making the SVG element.</p>
     <p>[25:44] And then we call setAttribute() to set a width and height. So, by the way, this is all dynamic. It's right there. Then we create our circle. You see the same thing. Create element NS. Give that namespace. Say make me a circle.</p>
     <p>[25:56] And then we just set all the attributes that you may have seen earlier. Center X, Center Y, radius. And then you see, just like HTML, you can access the style property and so we say &quot;.style.fill&quot; equals blue, so it's blue.</p>
     <p>[26:09] We can set the class name just like HTML and we can even add event listeners. Here we're adding mouseover to alert &quot;hello world&quot;. So if we mouse over we get &quot;hello world&quot;.</p>
     <p>And finally, just to mention it, you never need to know about Xlink except when you're making links and a in few other little places so just to show you that as well, here we're making a hyperlink in SVG and we say that the link itself is part of SVG, but when you set the href, remember it was &quot;xlinkns,'href'&quot;, we had to say &quot;xlinkns&quot;.</p>
     <p>[26:49] We use a little bit different to setAttributeNS and there we do that and then you can use all the setAttribute(). You see that appendChild() is normal and then actually, in this case, container is actually a DIV element. Actually I skipped over this.</p>
     <p>One of the new things, it's actually not part of HTML5, it's part of the general thing that's coming along, so query selector where, like jQuery, you can give CSS selectors to grab things from the page.</p>
     <p>[27:18] So here we're grabbing a DIV that we're going to put the SVG in. So, by the way, you can use that with SVG as well, which is very powerful.</p>
     <p>[27:30] I want to just mention, it's really hard to find information about this so I wanted to mention it here, a lot of times you embed SVG using the object tag, like I mentioned earlier, and a lot of times you want to have the containing page tunnel into the object to do interesting things.</p>
     <p>[27:48] Like maybe, for example, your SVG is a button element and you want to customize it in different part of your page to tunnel in. Other times your object you want to tunnel back out to your containing page.</p>
     <p>I'm just mentioning this here because it's really hard to find information about it and here's how you do it. If you're in your HTML page and you want to go into your SVG object you do this: [28:02] you grab the object, and we're doing that, you grab what's called the contentDocument, and once you have that you can treat it like you normally do.</p>
     <p>[28:21] Here we are using querySelectorAll(), one of these newer methods showing up in the newer browsers, to grab, we're grabbing all the rectangles with the class name &quot;important&quot;, so that shows you how to grab some elements. You could just getElementById as well.</p>
     <p>[28:36] Then here's how you grab the root. There's a quick terminology. The &quot;doc.rootElement&quot;. If you're inside of an object and you want to jump to your containing page, maybe you have jQuery loaded into your outer page, for example, and you want to access some functions, there's something called top.</p>
     <p>[28:52] So you can go top.document.getElementById, and that will grab it from your parent page, the parent that contains you, and here we are calling some JavaScript function in the upper page. top.someFunction.</p>
     <p>[29:04] So just store this away if you ever need to do this. And then one final thing, if you're inside of an object you actually have a document that you can call.</p>
     <p>[29:18] So here we are inside of our SVG file and we use getElementsByTagName(), we have to use the NS version, getElementsByTagNamsNS, for example, we're grabbing all the rectangles. Does that make some sense? A little.</p>
     <p>[29:33] So I've shown you a little bit sort of raw SVG. There are a lot of great libraries that have been coming down the pipeline for working with SVG.</p>
     <p>[29:42] One is SVG Web, the library that I'm involved with and we'll be going deeper into that today, but I also want to mention Raphaël. Who here is using Raphael?</p>
     <p>[29:52] It's a great library. You don't have mark-up in your JavaScript, you build up. It's good for animations and things like that. jQuery SVG is very powerful. It essentially lets you use jQuery in SVG. Ample SDK is very cool. Sergey Ilinsky is here. Where are you? Are you in here? I saw you earlier.</p>
     <p>Man 2: [30:15] He's outside.</p>
     <p>Brad: [30:15] He's outside. Well, go and talk to him. Ample SDK has a lot of cool features and it's open source as well for working with SVG.</p>
     <p>[30:25] So let's talk about SVG Web. The browser support for SVG is that it's on Firefox, Chrome, Safari, and Opera and Microsoft has announced that Internet Explorer 9  will support it, but a lot of people OK what do I do about IEs six, seven, and eight.</p>
     <p>[30:46] So I created, along with other developers, a library called SVG Web that does various hacks to give the illusion that Internet Explorer natively supports SVG.</p>
     <p>[31:02] It's a JavaScript library that you include in your page, I'm actually going to be stepping you through it. Inside of it, it actually uses Flash to do its rendering because Flash is almost always available when you have IEs six, seven, and eight. Something like 97 percent coverage.</p>
     <p>[31:18] And then it uses various grody JavaScript hacks to give the illusion that the SVG is really a part of the browser then your JavaScript can script the SVG using methods very similar to what I showed you earlier.</p>
     <p>[31:33] And there's the URL, if you want to grab it. Let's see if this video loads. I'm betting no. Probably not. [laughs] There's a little introductory video that will not load.</p>
     <p>[31:59] What you would be seeing is a description that SVG Web is actually about 70K, so that's fairly large and that get pushed into Internet Explorer.</p>
     <p>[32:10] So, I mean, the Adobe SVG plug-in, for example, used to be several megabytes, so it's quite compact as a solution and it supports a lot of things. So we've been talking about what's called SVG 1.1 full.</p>
     <p>[32:28] That's, in some sense, what's becoming what everyone knows as SVG, so we support a huge amount of it. We support DOM scripting with JavaScript, so when you saw that code sample earlier we can do that on Internet Explorer using these grody tricks. I've got no illusions that they're anything but grody, but they get the job done.</p>
     <p>[32:45] We have partial support for actually style sheets, CSS inside of your SVG. We have partial support for SMILE. I'm not going to go deep into the SMILE, but it's a way to do animation.</p>
     <p>[32:58] We have support for SVG fonts. Again, not going deeper into those. Both SMILE and SVG fonts are, in some ways, being eclipsed by other solutions, but we have them in there. They could be useful.</p>
     <p>[33:11] And then finally we support video and sound, which allows you to do some interesting things. So let's talk about how do you add SVG Web to your page?</p>
     <p>Well, the first thing is you grab these three files: [33:20] SVG.JS, SVG.SWF which is the Flash file, and SVG.HTC, which is what's known as a Microsoft behavior. Who here has worked with Microsoft behaviors before?</p>
     <p>[33:33] Whoa. All of you need a heavy drink. So you put those on your web server and you have to be sure to add these minetypes, right like I love the Shockwave roots of Flash and you have to add this guy, which is the Microsoft behavior mine type just to make sure things are served up correctly.</p>
     <p>[34:00] Then, pretty simple. In your web page you just say SVG.JS and if you're storing SVG Web in a different place than relative to your page, so for example let's say we're putting it in a different directory; you have to use this data-path to tell SVG Web where it is so it can load the SWF file and Microsoft behavior.</p>
     <p>[34:28] OK. So on the left you're actually seeing Flash rendering the mark up here and on the right you're seeing native by Safari, for the simple example.</p>
     <p>[34:40] We support direct embedding in the HTMl similar to HTML5, but for various reasons we require you to do a little bit to help SVG Web. You actually embed it into your HTML page using a script tag and you set the type to 'type=&quot;image/svg+xml&quot;'.</p>
     <p>[34:59] Once you do that you can use SVG and this will go right into your web page, which is what you're seeing right here and all the things you've seen before and you actually you don't have to namespace it as well, very similar to HTML5.</p>
     <p>[35:14] So that's cool. So you can drop SVG right into your page today and it will work across, at least 95 percent plus of the browsers out there. You don't have to wait for IE9.</p>
     <p>[35:29] OK. Object embedding. You remember seeing that nice object syntax. SVG web supports all the way back IE6. We support IE6, 7, and 8 doing this solution. Because of that our object tag is a little groddier. Really because of IE6 and IE7 a little bit.</p>
     <p>[35:51] Treat this as boiler plate. I would just cut and paste it, but basically what we're doing is a trick where for normal browsers you see the object tag as it's meant to be done and then you see a conditional IE comments so that IE actually gets this guy and we're overloading.</p>
     <p>[36:10] We're saying source equals and we're overloading the class ID attribute to get the mind type. But if you want to have your SVG in another file and link to it and have it work with SVG Web, that's the object syntax. So it's a little different than the standard what's necessary just a little bit.</p>
     <p>[36:29] So one of the interesting things with SVG Web, actually, you can force the Flash renderer on Firefox, Chrome, and Safari, which can help when you're developing because you have better dev tools.</p>
     <p>[36:43] And you can actually have two ways. You can force, you can say Firefox use Flash to render this instead of your native abilities and there are two ways to do that.</p>
     <p>[36:52] You can add a meta tag and you set svg.render.forceflash and you say true. Another way is during testing maybe you run into a bug in SVG Web or maybe you run into a bug in the native functionality, you can force it in the query parameter by just saying svg.render.forceflash equals false or true.</p>
     <p>[37:12] That can be really useful when you're debugging. I would say SVG Web like 95 percent it lets you use the existing abstraction, but, again, like I said, there's a few little places you have to change.</p>
     <p>[37:26] One of them is if you're using SVG Web and you want to wait for your page to completely finish loading and SVG Web and the Flash tricks, you can't use window.onload().</p>
     <p>[37:40] Instead we have window.onsvgload and then you can put all your stuff in there and now you know that, hey, everything's loaded including the Flash stuff and the Microsoft behavior.</p>
     <p>[37:51] Or you can use SVGLoad, which is actually part of the SVG standard if you don't want to do an inline thing, and there we're doing the same thing. So this is a simple example.</p>
     <p>[38:08] I've kept the examples pretty simple just to make them easier to grasp or to understand. Here we have the object tag embedding some simple SVG and it's being rendered by Flash.</p>
     <p>[38:21] In these scripts I have a button in HTML. I say change the colors, change the colors in the circle, change the text, pretty straightforward. Let's look at what that script looks like using SVG and SVG Web. Well, you see that it looks exactly the same.</p>
     <p>Here's our change colors function for example. Remember, we changed the inside of the circle from one color to another. Look at that, we can use document.getElementById to grab your circle. You can set the stroke attribute to green. We're setting the fill property.</p>
     <p>[38:56] Then remember I talked about navigating into and out of objects? There we're grabbing contentDocument to tunnel in, grabbing the circle, and setting the fill. So you're actually seeing the one on the top is inside of the SVG file and the one on the bottom is inside of an HTML page that might be scripting SVG. So it's exactly the SVG standard.</p>
     <p>Remember too, I put the change text as the hello world and then goodbye world. Well here's what that looks like. We can still use getElementsByTagName; there we're grabbing all of the text elements. Then we're looping through them and you see the Dom that we all love. I'm surprised no one laughed.</p>
     <p>[39:43] You love the Dom, right?</p>
     <p>Man 2: [39:44] Yeah.</p>
     <p>Brad: [laughs] [39:45] But you can use the DOM. There we are iterating through our text elements, grabbing the childnodes and changing the value to &quot;goodbye world&quot;. Here we're doing it the other way of tunneling in. Then you see something similar. So SVG Web doesn't have its own API. The API is the SVG standard other than a couple of small things you have to do to help it.</p>
     <p>[40:15] Creating nodes, exactly the same. This should look similar to an older example I showed before SVG Web. There we are making a circle, setting its attributes, grabbing the group, adding it, making some text, and adding that; so very easy to port your code to work on IE.</p>
     <p>[40:42] There's one more final thing that you have to do to help SVG Web. Remember I said you can put SVG inside of its own XML file? When you do that there's something called the onload attribute. You need to add just a little bit of code to help SVG Web. There we say &quot;loaded&quot;.</p>
     <p>[41:02] You see the loaded method, treat that as a boilerplate, cut and paste it. What we're doing in there is we're actually telling the SVG Web, &quot;Hey, this file is done loading.&quot; You see &quot;onloadFunc = doload&quot;? You just set that to real onload function.</p>
     <p>[41:23] Basically, you have a little intermediate step to help SVG Web and then you call the &quot;doload&quot;. Instead of &quot;doload&quot; that's your code; that's your real onload and now you know that everything is loaded.</p>
     <p>[41:40] For example, there we are grabbing a circle. We know it's loaded and we're adding an event listener.</p>
     <p>[41:52] So we have 10 minutes. I wanted to take questions through Twitter but I think it's not working. So if you ask a question just pretend, just say @brad... Oh! Let's see. Maybe there are no questions because...</p>
     <p>[42:12] Ilinsky, who is in two places at once - I thought he was outside - he says, &quot;You could discover data-path in library by resolving svg.js script location against the HTML document.</p>
     <p>[42:25] Let me think about that. As far as I understand if I have a JavaScript node that I've pulled from the document, I don't know if there's a cross-browser way to know where it was loaded from. If there is that would be nice and I could get rid of data-path. So Ilinsky, if you know about that, definitely tell me.</p>
     <p>[42:52] HuskyR asks, &quot;Why don't you use VML to support Internet Explorer?&quot; There's actually another cool library - there's two cool libraries. One is called XCanvas, from Erik Arvidsson and Emil Eklund, that simulates the canvas tag using VML.</p>
     <p>[43:12] There have been experiments doing SVG with VML. I chose Flash for a bunch of reasons. One is the VML has been a decaying technology for several years. Every version of IE that comes out degrades performance and introduces bugs to VML. So it didn't seem like a great, safe place to build on.</p>
     <p>[43:33] It also would have set an upper bound to what I could do. We depend on Flash 10, for example, in SVG Web and I can do very advanced things with fonts and so on, filters and everything.</p>
     <p>[43:49] So I felt like the features we could support in Flash are much higher. Frankly, I've done a lot of libraries that use Flash to do questionable things like Dojo Storage and it's something that I've built up a lot of techniques to get a lot of performance out of.</p>
     <p>[44:06] That's actually quite fast. SVG Web's gotten pretty fast.</p>
     <p>[44:16] &quot;So name spacing is actually a NS fail according to Brad Neuberg&quot;. Yeah, I think... Anyone know about the IANA of mime type registries? It's just a page where you add different new mimetypes and if you come up with a new mimetype you just say X- and then it gets accepted.</p>
     <p>[44:33] They should have just made prefixes be the name spaces. It's a layer of indirection that's not needed and it's fail. But that's my opinion about it.</p>
     <p>[44:45] &quot;You never need to know about xlinks except when using xlinks&quot;. xlink is actually a fairly big standard. It's got all kinds of different things. SVG only took the href property and what are called simple links.</p>
     <p>[44:59] So you don't need to know anything more other than to add that magic xlink colon. xlink colon is what is called extended links and group links and rolls, there's a lot of stuff.</p>
     <p>[45:12] &quot;Transform, is mirror possible? Any other transforms?&quot; Is mirror possible? Let me think about that. That's a good question. I don't know. You might be able to fake it somehow. There's always a way. Does anyone know? What's that?</p>
     <p>Man 3: [speaks off-mic] [45:30]</p>
     <p>Brad: [45:32] That's interesting. I bet you could, yeah. I bet you could, yeah, scale negatively and that might do something interesting. It's a good question.</p>
     <p>[45:42] &quot;What are your thoughts about raphael.js? Is cross-browsing very intuitive. Do you use it? Why?&quot; I really like Raphael. I think it's got a great API. It's got a straightforward API. It solves lots of great problems and it's actively maintained. I would use it for certain projects.</p>
     <p>[46:03] The thing about Raphael.js is it's all dynamic SVG. There's no mark-up. So it's good for graphing and so on. But there are some things. I was talking to a journalist who is a computer programmer and they're doing experiments at The Times of London newspaper of having interactive info graphics, for example.</p>
     <p>[46:24] These make sense to have as a mark-up because you want search engines to be able to find them; you want them to be archival friendly, the resolution independent. They've been around for something like 150, 250 years.</p>
     <p>[46:38] So Raphael.js, everything is in JavaScript. So it's just like that old refrain, &quot;There are no silver bullets.&quot; It's a great solution for the right thing.</p>
     <p>[46:47] Is polyline absolute or relative point to point? I talk about the path statement. Remember I said there's that little language. You actually give a letter and then an X, Y coordinate. Some of the letters for paths are relative and some are absolute depending on how you want to control it.</p>
     <p>[47:08] I personally haven't use polyline as much because generally paths will almost do - they'll do that. I don't know if polyline - it's actually not relative, it's absolute.</p>
     <p>[47:23] I don't know if it can be overloaded to be relative, but if you want to get advanced use paths because they let you, say, pick up the pen, do other things, make it relative.</p>
     <p>[47:37] OK. I think we're out of... Oh, look at that, eight more results. One thing that's very exciting - what do we have? Do we have five more minutes? Yeah?</p>
     <p>Man 2: [47:50] Yeah.</p>
     <p>Brad: [47:50] Before I'm kicked off to speak on. You know the gong should. I know people are probably getting hungry too.</p>
     <p>[47:57] One of the cool things about SVG - Adobe just released something called the HTML5 pack, which hooks into Illustrator, the latest version, you can export SVG.</p>
     <p>[48:08] Not only can it export SVG, but you can create things like buttons and then set variables inside those buttons that when you bring them into your page, you can pass in as query parameters to customize.</p>
     <p>[48:24] So you could imagine having Sprite for a game as SVG. You could imagine having logos and you can programmatically control how they show up in different places. That's really cool.</p>
     <p>[48:38] The other thing is when you're using the canvas tag... Everyone heard of the draw image method? Yeah, you can draw graphics. Some browsers and more and more browsers are allowing you to draw SVG onto the canvas.</p>
     <p>[48:53] Now that's really cool because, again, if you're making a game you draw all your sprites in Illustrator and then you use canvas because maybe you have special performance reasons where you don't need to do funky stuff with CSS on them. So that's nice.</p>
     <p>[49:06] All right, a few more questions. Why would you require users of older IEs to have the latest flash player for SVG Web? It seems conflicting, old versus new. A couple of reasons; one is that Flash has always been very impressive at turning over their installed base.</p>
     <p>[49:22] They move their users to the new version in about a period of eight months to a year and a half. So I am always checking the installed base of Flash 10 is like 97 percent.</p>
     <p>[49:34] We used to support Flash 9, which was the basic cut off for some of the methods. The Flash 10 is faster and has other things. So most users will have Flash 10 in the scenarios were SVG Web is in.</p>
     <p>The question is: [49:50] How many layers/objects can you stack with SVG? As many as you want; you're not going to get a stack overflow, but just like any of these technologies you'll probably hit some limit if you do 10,000 or something crazy.</p>
     <p>[50:04] &quot;You promised us bad jokes. Go ahead.&quot; Wow. I've never been on the spot to provide a bad joke. Does someone have a bad joke they can provide? OK. Let's take one more question by my phone and then that's it.</p>
     <p>Man 4: [off mic] [50:25]</p>
     <p>Brad: [50:26] What's that?</p>
     <p>Man 5: [50:27] You skipped one question.</p>
     <p>Brad: [50:31] Oh. Then this will be our final question. Oh, that's a comment. Oh, the question mark theme, there's a bad joke.</p>
     <p>[50:41] &quot;I do use the Raphael SVG library, but Fomatronic prefers Donatello and then a question mark.&quot; That was bad, wasn't it? OK. Thanks everyone.</p>
     <p>[applause]</p>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2010/sessions/vector-graphics-for-the-web-brad-neuberg.md" id="comment">
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
      <li><a href="/congres/2010/sessions/css-workflow-jina-bolton">CSS Workflow by Jina Bolton</a></li>
      <li><a href="/congres/2010/sessions/high-performance-javascript-nicholas-zakas">High Performance JavaScript by Nicholas Zakas</a></li>
      <li><a href="/congres/2010/sessions/html5-accessibility-is-it-ready-yet-steve-faulkner-hans-hillen">HTML5 Accessibility: Is it ready yet? By Steve Faulkner &amp; Hans Hillen</a></li>
      <li><a href="/congres/2010/sessions/javascript-like-a-box-of-chocolates-robert-nyman">JavaScript - Like a box of chocolates by Robert Nyman</a></li>
      <li><a href="/congres/2010/sessions/progressive-downloads-and-rendering-stoyan-stefanov">Progressive Downloads and Rendering by Stoyan Stefanov</a></li>
      <li><a href="/congres/2010/sessions/real-world-responsive-design-stephen-hay">Real-world Responsive Design by Stephen Hay</a></li>
      <li><a href="/congres/2010/sessions/reasons-to-be-cheerful-chris-heilmann">Reasons to be cheerful by Chris Heilmann</a></li>
      <li><a href="/congres/2010/sessions/reusable-code-for-good-or-for-awesome-jake-archibald">Reusable Code, for good or for awesome! by Jake Archibald</a></li>
      <li><a href="/congres/2010/sessions/the-renaissance-of-browser-animation-cameron-adams">The Renaissance of Browser Animation by Cameron Adams</a></li>
      <li><a href="/congres/2010/sessions/the-state-of-html5-inaugural-address-paul-irish">The State of HTML5: Inaugural Address by Paul Irish</a></li>
      <li class="current"><a href="/congres/2010/sessions/vector-graphics-for-the-web-brad-neuberg" class="current">Vector Graphics for the Web by Brad Neuberg</a></li>
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
