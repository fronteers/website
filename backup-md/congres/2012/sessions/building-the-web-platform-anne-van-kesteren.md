<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>Building the web platform by Anne van Kesteren · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p755">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>Building the web platform by Anne van Kesteren</h2>
     <video width="480" height="270" controls>
      <source src="/_downloads/2012/anne-van-kesteren-building-the-web-platform.webm" type="video/webm">
      <source src="/_downloads/2012/anne-van-kesteren-building-the-web-platform.mp4" type="video/mp4">
      <track src="/congres/2012/sessions/building-the-web-platform-anne-van-kesteren.vtt" default>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2012/anne-van-kesteren-building-the-web-platform.webm">download the video</a> (or the alternatives: <a href="/_downloads/2012/anne-van-kesteren-building-the-web-platform.mp4">1</a>) and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="https://vimeo.com/53317251">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2012/anne-van-kesteren-building-the-web-platform.webm">Download video</a> (WebM, 132MB)</li>
      <li><a href="/_downloads/2012/anne-van-kesteren-building-the-web-platform.mp3">Download audio</a> (MP3, 52MB)</li>
     </ul>
     <h3>Transcript</h3>
     <div class="transcript">
      <p><span data-start="00:00:07.000" data-end="00:00:18.000" data-start-seconds="7">All right. Thanks a lot for having me, I've been having a lot of fun this far, also with the jam sessions we had earlier. The talks have been great.</span></p>
      <p><span data-start="00:00:18.000" data-end="00:00:55.000" data-start-seconds="18">I guess my talk might be somewhat similar to what Mathias has been talking about yesterday, just the little things that actually make the platform. That's also what I do as a...I was going to say, &quot;for a living,&quot; but I'm actually unemployed at the moment. I've been working seven years for Opera Software and I decided I wanted a change. I haven't quite figured out what the change is, but I've been unemployed since August 1 and I'm trying to figure it out. [laughs]</span></p>
      <p><span data-start="00:00:55.000" data-end="00:01:28.000" data-start-seconds="55">Yes, first, I wanted to pitch a thing. A friend of mine who works at Apple now, he worked at the W3C before, he had this goal. He had it quite a while back. He posted this in March or so, or May, I don't remember. But then my register sent me this email that they had these new top-level domains available. You could have .tf. I sort of recall, &quot;What can you make with TF?&quot; Of course you can make WTF, but they don't do single letter. Then I recalled, &quot;Oh, Dean had that thing.&quot;</span></p>
      <p><span data-start="00:01:28.000" data-end="00:01:46.000" data-start-seconds="88">I registered this domain and you can all go there and you can retweet his tweet. That's pretty much the only purpose for it now. I kind of like just setting up domains, they're pretty cheap to get and you can do fun things with them.</span></p>
      <p><span data-start="00:01:46.000" data-end="00:02:06.000" data-start-seconds="106">That brings me to the next thing. I made sure this exists, as well, so if you go there you get something, but the main point is to discuss URLs a little bit. The URLs is the thing I've been working on during my free time, basically, the last month or two, because there's quite a few problems.</span></p>
      <p><span data-start="00:02:06.000" data-end="00:02:33.000" data-start-seconds="126">But before we get into that, let's talk a little bit about the terminology. People always call these things in different ways. The bit that comes before the first column, I'm going to call the scheme. Then, the bit that's a domain name, I guess you guys, everyone sort of realizes that. And then, the path, then after the path, you have the query. And then, you get the fragment, the last bit.There's a whole lot of different terminology,</span></p>
      <p><span data-start="00:02:33.000" data-end="00:03:01.000" data-start-seconds="153">Tantek Çelik actually made this blog post. And everyone does it slightly differently and everyone includes different parts of the URL, like, you can call it a scheme, you could call it a protocol, as well. The fragment identifier has been called a hash. The query string is called search in JavaScript, path has been called path name, and there's various, lots of things.</span></p>
      <p><span data-start="00:03:01.000" data-end="00:03:33.000" data-start-seconds="181">But URLs are fun. They're quite complex to comprehend and I had a lot of fun figuring it out. But before we dive into that, let's talk briefly about bytes and code points, which is a thing I researched in the first half of this year. And the thing is, bytes and code points, they're important for URLs and we'll get to that later. This is the basic concept.</span></p>
      <p><span data-start="00:03:33.000" data-end="00:03:47.000" data-start-seconds="213">This is what I personally had, I couldn't really comprehend that when you have characters on the screen, there's actually an underlying representation of that on the disk, and you get exposed to it in various ways.</span></p>
      <p><span data-start="00:03:47.000" data-end="00:04:03.000" data-start-seconds="227">Like the moment you submit data to the server or you're working with strings in JavaScript, which are not quite code points as Mathias explained. They're actually code units, so you need to do some extra work to actually work with code points.</span></p>
      <p><span data-start="00:04:03.000" data-end="00:04:25.000" data-start-seconds="243">Then there is all the encoding mess and transcoding things. So I researched that subject and I wrote this document called &quot;The Encoding Standard.&quot; It's hosted on the WHATWG site, at the URL you can see above. Let's dismiss this thing.</span></p>
      <p><span data-start="00:04:25.000" data-end="00:04:51.000" data-start-seconds="265">It basically explains there's a whole ton of legacy encodings, and they're all quite complex, how to go from one of those encodings to Unicode and back. These are the things that browsers do. It's one of the main themes of my talk. It's important to sort of understand one level of extraction lower than what you're working with.</span></p>
      <p><span data-start="00:04:51.000" data-end="00:05:14.000" data-start-seconds="291">So if you work a lot with HTML and writing it out, it's important to have some understanding of bytes and how you get to the HTML, as well, because if you understand that then it's much easier to spot bugs as you encounter them. You have a fuller understanding of what's actually going on in the browser with your product.</span></p>
      <p><span data-start="00:05:14.000" data-end="00:05:36.000" data-start-seconds="314">Let's not go into this in too much detail. Actually, the most interesting thing is the indexes. In the Asian part of the world, they had all of these legacy encodings. Since they have so many more characters than us, they couldn't fit them all in single-byte encodings.</span></p>
      <p><span data-start="00:05:36.000" data-end="00:06:04.000" data-start-seconds="336">Here in Europe, we usually have single-byte encodings. The first 128 bytes were mapped to ASCII, and then the remainder were used...it depends in the country. In Russia, it was usually filled with Cyrillic. Here in the Netherlands, we would have accented characters. Greece would also have its own Cyrillic variant, et cetera.</span></p>
      <p><span data-start="00:06:04.000" data-end="00:06:26.000" data-start-seconds="364">But there they had their own encodings, multi-byte encodings. When they designed Unicode, they didn't actually map them straight, so you need to have these huge mapping tables. Let's see if I can load a small one. I think this one is not too big. That actually works, and that's quite nice.</span></p>
      <p><span data-start="00:06:26.000" data-end="00:06:51.000" data-start-seconds="386">You have all these indexes, which you get from Unicode. You go from a couple of bytes, and you get an index via some calculation, which is the traditional index in that encoding, and then it maps to a character. Is it just me, or is it not...yeah, I guess it's just me, because I'm standing closely. It doesn't look that sharp.</span></p>
      <p><span data-start="00:06:51.000" data-end="00:07:02.000" data-start-seconds="411">You have these huge maps, and browsers have all these things built in. There's quite a bit of complexity there already.</span></p>
      <p><span data-start="00:07:02.000" data-end="00:07:24.000" data-start-seconds="422">Back to URLs. Here's a simple example of a URL. And if we inspect it, the first one you get, you get the Euro characters, you get back because what happens is once the parser hits it, it replaces those things and puts it in the DOM. It's pretty clear.</span></p>
      <p><span data-start="00:07:24.000" data-end="00:07:59.000" data-start-seconds="444">But then if you take a look at the href IDL attribute, you actually get the resolved path. As you can see, a lot of things have been going on there. The URL parser has been going over what you actually put in, and transcoded those characters. Just look at the first bit, it's basically three bytes, and it's the UTF-8 representation of the Euro character, those three bytes.</span></p>
      <p><span data-start="00:07:59.000" data-end="00:08:19.000" data-start-seconds="479">That's because URLs, they work with UTF-8 as their representation for characters that are outside of ASCII. You get these kind of things, you get a lot. Once you search out of ASCII or whatever, you typically get these results.</span></p>
      <p><span data-start="00:08:19.000" data-end="00:08:48.000" data-start-seconds="499">Except, it's not quite that simple, of course. You can get weirder things, like this. What happened here is that, the path is actually, as always, UTF-8. But the query string depends. That is because of a lot of the legacy. We didn't always have the UTF-8 convention for URLs.</span></p>
      <p><span data-start="00:08:48.000" data-end="00:09:10.000" data-start-seconds="528">Form submission and things also went through URLs, so once URLs came to the point that we had to standardize on these characters outside of ASCII, there's already a lot of legacy that was using the local encoding of the server that was serving the document, so if you submitted forms, it had to be encoded in that encoding.</span></p>
      <p><span data-start="00:09:10.000" data-end="00:09:29.000" data-start-seconds="550">This is in Windows-1252, which you might also know is Latin-I or ISO88591. It actually encodes the Euro sign as byte 80.</span></p>
      <p><span data-start="00:09:29.000" data-end="00:09:48.000" data-start-seconds="569">It's best as a front end developer to always do your stuff in UTF-8. You won't hit any of these problems. Always send UTF-8 over the wire, always declare it in your document, and then you never get stuff like this, where you have mismatches going on and the server has no clue what's going on.</span></p>
      <p><span data-start="00:09:48.000" data-end="00:10:08.000" data-start-seconds="588">Especially if you have stuff like this, if you have an API endpoint on the server, and you want to talk to it from another domain, you can do that these days with Chorus and stuff. Your site is encoded in Windows-1252 and you try to talk to this endpoint, it will get the wrong results.</span></p>
      <p><span data-start="00:10:08.000" data-end="00:10:36.000" data-start-seconds="608">Except, of course, that's not always the case. It's more complicated. It depends on the context. In some contexts, like form submission, URLs generated from form submission, URLs in the A element, and most HTML elements, I think, image, script, they all follow the same pattern. There you will get the query component will be encoded according to the document encoding, which should be UTF-8 but isn't always.</span></p>
      <p><span data-start="00:10:36.000" data-end="00:10:58.000" data-start-seconds="636">In different contexts, UTF-8 is actually forced. If you use XMLHttpRequest, your URLs will always be treated as if they were UTF-8. The same goes for CSS and things like that. They're a special kind of fun.</span></p>
      <p><span data-start="00:10:58.000" data-end="00:11:17.000" data-start-seconds="658">The reason I've been researching URLs, I guess I should maybe explain it a little bit, is that there are standards for them of course. You have the RFCs for URI and IRI, which is a crappy term. I wanted to improve the term. They actually don't define things.</span></p>
      <p><span data-start="00:11:17.000" data-end="00:11:38.000" data-start-seconds="677">Like if you have a space in your URL like if you a href and you put &quot;hello world&quot; there and there is a space there it will work everywhere. The browser will parse it, and it will replace that space with %20, and that will go to the server. But those things are not defined, so every browser sort of guesses and has different results.</span></p>
      <p><span data-start="00:11:38.000" data-end="00:11:53.000" data-start-seconds="698">The other thing is the interaction with the JavaScript API for URLs. Like on an A element, you can get to the protocol. You can set the hash. You can query. You can set the query parameter.</span></p>
      <p><span data-start="00:11:53.000" data-end="00:12:04.000" data-start-seconds="713">Those things are also very ill-defined, and they differ greatly between different browser vendors. That's because there's not a single definition for them so everyone is unclear and unsure what to do.</span></p>
      <p><span data-start="00:12:04.000" data-end="00:12:35.000" data-start-seconds="724">That's why I decided to try to fix that problem once and for all and make sure that URLs work properly and that they work the same in all browsers. It's kind of like a fundamental piece of infrastructure. Twenty years after their inception, we still don't quite know how they work. I think it's a sad thing, but it's a fun challenge too, to make it work, of course.</span></p>
      <p><span data-start="00:12:35.000" data-end="00:12:57.000" data-start-seconds="755">So this is another side track again. I have a few different things. I want to talk a little bit about copyright because I kind of figured out earlier, after I left Opera, that I felt quite strongly about it. What is this? Not now.</span></p>
      <p><span data-start="00:12:57.000" data-end="00:13:25.000" data-start-seconds="777">So I'm not a lawyer, and it's not legal advice or anything. I was asked to join the W3C again as an invited expert. I read the document through, and the thing that sort of stung me was that the W3C documents has a fairly permissive license.</span></p>
      <p><span data-start="00:13:25.000" data-end="00:13:39.000" data-start-seconds="805">You cannot actually reuse their text in open source software completely. You cannot fork their documents to write other specifications. So it is exactly, I think, what is important for the web.</span></p>
      <p><span data-start="00:13:39.000" data-end="00:14:01.000" data-start-seconds="819">The web is for the whole world, and its documentation should be too. People should be able to take a specification and rewrite it or improve it and fix it. If their version is the one that ends up mattering, the one that implementers and people start listening to, then that is the one...</span></p>
      <p><span data-start="00:14:01.000" data-end="00:14:13.000" data-start-seconds="841">I mean, then it proves itself. Right? It shouldn't be proven by the fact that it's tied to some kind of organization that has restrictions on it. I don't think that is the way it should go.</span></p>
      <p><span data-start="00:14:13.000" data-end="00:14:29.000" data-start-seconds="853">Actually a lot of the work I've done on the DOM and XMLHttpRequest, it's all based on prior art. It's just researching the subject and improving what already exists. Like URLs, I didn't make them up. I'm just trying to fix their documentation.</span></p>
      <p><span data-start="00:14:29.000" data-end="00:14:53.000" data-start-seconds="869">I feel pretty strongly that that standard should be in the public domain and easily forkable. On the WHATWG, we put most of our stuff on Github, so people can actually go to github.com/WHATWG and you can fork the specifications. You can write new text and do pull requests, the whole thing.</span></p>
      <p><span data-start="00:14:53.000" data-end="00:15:23.000" data-start-seconds="893">So I declined for now. I'm going to talk with the W3C about this, they have a thing coming up later this month. But, for now, I decided to not join as an invited expert and, instead, do my work at WHATWG, and publish in the public domain. These are the standards for the Internet. They should be free. Like the Internet itself, they should be forkable and everyone should be able to influence them. [applause]</span></p>
      <p><span data-start="00:15:23.000" data-end="00:15:44.000" data-start-seconds="923">Thanks. Right. I care about forking. All right. That was my little sidetrack there on copyright. We can go back to the complexity stuff now. Actually, I wanted to do the complexity talk about something simple. Otherwise, it gets too complex.</span></p>
      <p><span data-start="00:15:44.000" data-end="00:16:15.000" data-start-seconds="944">This is a little web page. It has a title, an image, a picture I took. I'm quite proud of this picture. I think it's quite nice. It is somewhere in Greenland, near a small island called Umanak, I recommend visiting it, 1,200 people live there. You get there by helicopter, after a couple of planes. It's really beautiful. You can take this boat tour, at the local hotel, where I don't recommend staying. I recommend taking a tent and camping somewhere, because it's way cheaper.</span></p>
      <p><span data-start="00:16:15.000" data-end="00:16:53.000" data-start-seconds="975">You can camp for free. The hotel is €150 a night. But the boat tour is really cool. They take you along all these huge ass icebergs. These are way, way tall. I have this thing now. Let me try this. Over there, that is a bird. These things are 10 meters high or so. I have another picture somewhere and you can go with the boat underneath. It's a pretty big boat. Anyway. Iceland is cool and Greenland is too. [laughs]</span></p>
      <p><span data-start="00:16:53.000" data-end="00:17:00.000" data-start-seconds="1013">Let's see. I hope the next slide...yeah, it is simple and there are a lot of layers.</span></p>
      <p><span data-start="00:17:00.000" data-end="00:17:36.000" data-start-seconds="1020">This is a document. As Mathias has explained to you...let me just demonstrates that as well, since we are here. You should have a simple DOM like this. You have the markup to test at the top. Then there is the DOM view there and the render view underneath. This is called the Live DOM Viewer. Mathias probably has a short URL for it, but you can also Google it or you can try to read that. Oh, you can't read the thing at the top, because there is some kind of obscured stuff.</span></p>
      <p><span data-start="00:17:36.000" data-end="00:17:49.000" data-start-seconds="1056">Anyway, what happens here is that the browser just parses this. It's already converted to characters here. The input here is characters, not bytes.</span></p>
      <p><span data-start="00:17:49.000" data-end="00:18:20.000" data-start-seconds="1069">It gets the Doctype. It turns it into a token and the token gets handed off to the parser. The parser does the rest of the work. The parser builds up a tree. Here it sees the Doctype. All right. We'll add the Doctype to the tree. Then it sees an image element and it's like, &quot;Oh, what's going on? That's too soon.&quot; It starts popping these other elements in. It's like, &quot;We first need to create an HTML element.&quot; That's what the HTML stage does. Then the HTML stage says, &quot;We are done.&quot;</span></p>
      <p><span data-start="00:18:20.000" data-end="00:18:38.000" data-start-seconds="1100">Then it gets kicked off to the head insertion phase, which is like, &quot;Hey, that is an image element. We can't do anything with that. But let's insert a head element.&quot; Then it gets kicked on. The body says, &quot;Hey, there is no body. Let's insert a body.&quot; Then you get to the image thing. It inserts the image and it renders.</span></p>
      <p><span data-start="00:18:38.000" data-end="00:19:10.000" data-start-seconds="1118">This is not actually valid, because you need a title, as Mathias explained. It doesn't really matter. It works. It also needs an alt attribute. I'm sorry to all the blind people, and Google. [laughs] That is basically what happens in the HTML parser. You get this DOM. Therefore, what I showed here works fine.</span></p>
      <p><span data-start="00:19:10.000" data-end="00:19:47.000" data-start-seconds="1150">What I wanted to talk about were the layers. A browser is very complex software. I wanted to illustrate that a little bit, by just going through and talking a little bit about all these things. Do people want to guess how many layers there are? Who thinks it's more than 10? Who thinks it's more than 20? 30? 40? I don't really know, to be honest.[laughter]</span></p>
      <p><span data-start="00:19:47.000" data-end="00:19:52.000" data-start-seconds="1187">There is a lot of code. Browsers are pretty complex software.</span></p>
      <p><span data-start="00:19:52.000" data-end="00:20:19.000" data-start-seconds="1192">Someone, yesterday, said that Photoshop was pretty complex. I think browsers are more complex. For browsers, you need an engineering team of at least 200 people or so. There is a bunch of code attached to it that is open source. All these people are freaking smart, too. It's a whole lot of work to make a browser and to keep it competitive as well.</span></p>
      <p><span data-start="00:20:19.000" data-end="00:20:35.000" data-start-seconds="1219">In 2004, we didn't have the JavaScript engine. Now you need to have a JavaScript team of at least five people that know JIT (Just In Time) and all those things and implement that. It gets hard.</span></p>
      <p><span data-start="00:20:35.000" data-end="00:20:46.000" data-start-seconds="1235">For simplicity, we will forget about the network for now. Of course, there's a lot of stuff there. It is nice. But let's just talk about the rendering.</span></p>
      <p><span data-start="00:20:46.000" data-end="00:20:54.000" data-start-seconds="1246">I wanted to skip rendering too, because it's kind of complicated. But, you know, I have to talk about something. [laughs]</span></p>
      <p><span data-start="00:20:54.000" data-end="00:21:26.000" data-start-seconds="1254">All right. If we start at the top, do you see the page? You don't have to see it. You remember it, right? There is a heading and an image. It is pretty simple. If you go backwards in the process, the last thing that happened, or the first, depending on how you count, is the painting. You have some kind of input. It gets painted and you see it on screen. That is simple enough. But it's not exactly that simple, because there is hardware acceleration and all these other things.</span></p>
      <p><span data-start="00:21:26.000" data-end="00:21:51.000" data-start-seconds="1286">Before that, you had the layout tree. That is the kind of thing that was painted. What is important to understand is that the layout tree is not equal to the DOM tree. It is a separate thing that was created. Let me just check. Yeah. CSS and the DOM created the layout tree.</span></p>
      <p><span data-start="00:21:51.000" data-end="00:22:17.000" data-start-seconds="1311">The CSS specs confusingly talk about markup all the time, but the DOM is what matters. That is what is being styled. If you update the DOM, it is it is reflected in the page. Let me see. The thing is, if you have a &quot;display none&quot; element, it doesn't end up in the layout tree. Otherwise, it would.</span></p>
      <p><span data-start="00:22:17.000" data-end="00:22:50.000" data-start-seconds="1337">The layout tree is kind of like the DOM tree. It consists of a lot of boxes. But it is also not. If you have just a single in-line element that wraps, in the layout tree, you will end up with several in-line boxes, one for each line. You get the idea. Right. Yeah.</span></p>
      <p><span data-start="00:22:50.000" data-end="00:23:20.000" data-start-seconds="1370">I wanted to point this out. The layout tree is not quite like the CSS Object Model. The CSS Object model is what actually happens. Once the browser fetches the style sheet and creates and parses it, it goes through this process, where you basically get a representation of the style sheet. That is what the CSS Object Model is. It is quite similar to the DOM, which is a representation of the markup.</span></p>
      <p><span data-start="00:23:20.000" data-end="00:23:51.000" data-start-seconds="1400">But the layout tree is separate and it's not actually scriptable in any instance. You can query it in various ways, as Peter Paul showed yesterday. You can query it using offset width and offset height and you can do it on the elements as well. But the interaction between that and CSS is kind of sketchy. Part of that is because the offset stuff came from the DHTML era and it never reconciled with the CSS work very well.</span></p>
      <p><span data-start="00:23:51.000" data-end="00:24:17.000" data-start-seconds="1431">So, the kind of work that happens in CSS and the kind of work that happens on exposing what happens in CSS is not really...there is not a lot of work going on in that area, actually. I think it is improving now in the CSS working group. I believe Google is investing effort in that area. But, actually, the layout tree is an unknown thing, although it's actually quite important, because that is what we end up seeing.</span></p>
      <p><span data-start="00:24:17.000" data-end="00:24:45.000" data-start-seconds="1457">I'm not sure why I put this away. [laughs] Once the browser has built the style sheet and it has all these rules in it, the rules are matched to the nodes in the DOM, using the selectors. All these little things seem very simple, but they are not. Selectors themselves are already quite complex.</span></p>
      <p><span data-start="00:24:45.000" data-end="00:24:51.000" data-start-seconds="1485">Do people know how selectors work? Could people raise their hands?</span> <span data-start="00:24:51.000" data-end="00:25:18.000" data-start-seconds="1491">All right. Quite a few people know how selectors work. Quite a few didn't either, or at least they didn't raise their hands. I will briefly...what happens is that the browser goes through the DOM tree. For each node it sees, it goes through all the selectors in the style sheet and checks whether it matches or not.</span></p>
      <p><span data-start="00:25:18.000" data-end="00:26:00.000" data-start-seconds="1518">To make this a bit more obvious, let's look at the example here and make a selector. All right. We have a style sheet. We have one selector. How many nodes are matched or how many nodes does it traverse through? Let's do that.</span></p>
      <p><span data-start="00:26:00.000" data-end="00:26:03.000" data-start-seconds="1560">Three.</span></p>
      <p><span data-start="00:26:03.000" data-end="00:26:27.000" data-start-seconds="1563">It actually goes through five. First it checks whether it matches the HTML element. Doesn't. Head, doesn't. Style, doesn't. Body, doesn't. Image, does. So you have a match. Of course, there is optimization. Browsers have hash tables for tag names and those things. Effectively, we go through all of those and check whether it matches or not.</span></p>
      <p><span data-start="00:26:27.000" data-end="00:26:50.000" data-start-seconds="1587">Also, there are not really many other ways you can do it. We add one. Let's add more borders. Now, it also goes through all these elements and checks whether they are matched or not. There could be a second body element. So it doesn't quite know, whether that is the first.</span></p>
      <p><span data-start="00:26:50.000" data-end="00:27:27.000" data-start-seconds="1610">If we insert another body element, it will still have to work. Maybe I should give it a different style, because otherwise I guess you can't see it. We can do something like this.</span></p>
      <p><span data-start="00:27:27.000" data-end="00:27:30.000" data-start-seconds="1647">There you go. There it is. [laughs]</span></p>
      <p><span data-start="00:27:30.000" data-end="00:28:18.000" data-start-seconds="1650">You can do all kinds of weird stuff with the DOM. You can't do this in HTML. There was a question about that yesterday. What happens, if you omit the end tags? Is it faster or not? It does, indeed, not matter much. I think it is actually a little bit faster, because it ends up being ignored. If I add this body here, and then add this tags test, you see it still ends up in the document. So the body end tag is kind of useless. It doesn't do anything. The moment you insert text, it just gets there.</span></p>
      <p><span data-start="00:28:18.000" data-end="00:28:57.000" data-start-seconds="1698">Anyway, now we have a quite complex document. The selector has stopped multiplying. Now we have seven elements and three selectors, so you get 21 matches. This is fairly simple, but once you start Gmail-like applications with thousands and thousands of DOM nodes and thousands of selectors, there are really big style sheets. I guess you guys all know these things. You do the same kinds of things. It gets really, really hard to stay performing. That is the kind of reason why...</span></p>
      <p><span data-start="00:28:57.000" data-end="00:29:01.000" data-start-seconds="1737">How many people have heard of matches?</span> <span data-start="00:29:01.000" data-end="00:29:37.000" data-start-seconds="1741">It is a promissed pseudo-class to select parents. You can select the parent nodes and you can make decisions, based on what parent it is and how you want to style the child. So, you would have something like, &quot;I want to style this image element. But only if it has a P as a parent.&quot; That can let you do really powerful stuff. You can select elements and you don't have to have all these classes and stuff. It makes it a little bit simpler. But it makes it a lot harder for the browser to stay performing and to do all these computations effectively and quickly.</span></p>
      <p><span data-start="00:29:37.000" data-end="00:29:54.000" data-start-seconds="1777">The other thing is, once you get to... the main thing that is hard with the browser is that it is dynamic. Each time you might make changes to the DOM and through the parsing stage, everything needs to be updated and all those selectors need to be recomputed.</span></p>
      <p><span data-start="00:29:54.000" data-end="00:30:26.000" data-start-seconds="1794">So, if you have your DOM with 10.000 nodes and your 10.000 selectors and you start updating things and the user starts hovering around with the mouse and interacting, all these things start spinning. You get a lot of work and you understand why something quite simple is actually very complex, because all these processes are going on.</span></p>
      <p><span data-start="00:30:26.000" data-end="00:30:37.000" data-start-seconds="1826">Let me just get some water.</span></p>
      <p><span data-start="00:30:37.000" data-end="00:31:04.000" data-start-seconds="1837">CSS syntax is kind of cool. I think Mathias actually showed us this already. You can basically escape anything. In the selector or the property names, you can use all kinds of weird escapes. Nobody does it and I don't really understand why it was added. I think it was partially because CSS was grammar-based.</span></p>
      <p><span data-start="00:31:04.000" data-end="00:31:30.000" data-start-seconds="1864">You have got all this weird stuff. You can write the background line like this and you can write it in a lot of different ways. If you want to do CSS-based filtering, you really have to do whitelist things. Otherwise you are going to be in trouble. It's kind of weird.</span></p>
      <p><span data-start="00:31:30.000" data-end="00:31:39.000" data-start-seconds="1890">Even this is a tremendous simplification, because there are so many things going on in CSS. Many of you have seen the standard.</span></p>
      <p><span data-start="00:31:39.000" data-end="00:32:11.000" data-start-seconds="1899">It is a whole lot of pages. You have to deal with inherent and initial failures, specificity and complex syntax. There are a whole lot of pieces of code involved in doing all that work. There are 10 people working on the layout team, optimizing it and making sure that it works fast. This is for each browser, of course. You can have external style sheets, just multiple style sheets.</span></p>
      <p><span data-start="00:32:11.000" data-end="00:32:27.000" data-start-seconds="1931">There is an interaction with scripts. All that works together and tries to render this page to make this really simple thing possible for us. I think that is really quite cool.</span></p>
      <p><span data-start="00:32:27.000" data-end="00:33:02.000" data-start-seconds="1947">We covered the layout part a little bit. There is the DOM as well. Everyone knows about the DOM, of course. Nobody really likes it, but it is a core part of the web infrastructure. It is the API, against which script and layout happens. It is basically what the web page is. It's where the semantics are at. The DOM is what everyone reads off. The assistive technology. It is what is being updated by scripts.</span></p>
      <p><span data-start="00:33:02.000" data-end="00:33:28.000" data-start-seconds="1982">So, the semantics are actually at the DOM. They are not really at the markup level. That is why the whole discussion about HTML versus XML, years ago, was not very interesting. In the end, what you get is a DOM. That is what is important. Everyone builds up some kind of representation of the markup. The markup is just a convenient syntax you have created. You can also create a DOM for script or something.</span></p>
      <p><span data-start="00:33:28.000" data-end="00:33:47.000" data-start-seconds="2008">The DOM, itself...its design is somewhat clunky. It was designed a long time ago, back when JavaScript was not the only language.</span></p>
      <p><span data-start="00:33:47.000" data-end="00:34:10.000" data-start-seconds="2027">We had to make this thing work for multiple languages. It had to work for Server and Client. So they designed this really weird thing around the, &quot;Oh My God&quot; IDL. It's not actually &quot;Oh my God,&quot; but it's OMG IDL. It is a kind of syntax to define all these interfaces.</span></p>
      <p><span data-start="00:34:10.000" data-end="00:34:33.000" data-start-seconds="2050">They also designed a DOM, not just for doing scripts and stuff, but also for editing applications, to preserve things in the DOM, like comments. You can find processing instructions in the DOM. The doctype is there. There's not really any reason for a doctype to be in the DOM. It's just a syntactic detail. But yet it is there.</span></p>
      <p><span data-start="00:34:33.000" data-end="00:35:14.000" data-start-seconds="2073">So you need to skip it, if you traverse the document tree, which is kind of annoying. They even had this thing, where attributes were nodes. We are actually trying to fix that. The new DOM standard makes attributes no longer inherent from node. We are not quite sure if it's going to work out or if it breaks the Web. The Mozilla guys are brave enough to pioneer this for us and test it out in Firefox, slowly deprecating the methods over time. If you use an getAttributeNode, you will see warnings in Firefox, which I think is quite awesome. Hopefully, the other browsers move in this direction too.</span></p>
      <p><span data-start="00:35:14.000" data-end="00:35:30.000" data-start-seconds="2114">The main reason is that it is already complex enough. If you can remove some of the complexity and all that it takes, you can focus that on other efforts and improve other areas of the Web.</span></p>
      <p><span data-start="00:35:30.000" data-end="00:36:04.000" data-start-seconds="2130">That is another thing that is really important is that by keeping it simple, or simple enough, we at least make it possible for other players to enter the market. That is, in part, why I am writing standards and I'm trying to write them at such a level of detail that anyone can implement them and they will work the same way as Chrome or Opera. Otherwise, the Web will end up being a locked up space, like it was a couple of years ago.</span></p>
      <p><span data-start="00:36:04.000" data-end="00:36:25.000" data-start-seconds="2164">Not too long ago, when IE6 was still dominating, the other browsers had to actively reverse engineer IE6 behavior. Of course, they did it wrong. They didn't know what to do. But, if they didn't, they couldn't compete with IE effectively, because a lot of sites wouldn't work. It's really important to keep the Web an open marketplace.</span></p>
      <p><span data-start="00:36:25.000" data-end="00:36:39.000" data-start-seconds="2185">I'm a little bit afraid of the whole WebKit dominance thing as well, because what you get is that WebKit gets really big, people start coding towards WebKit, people start coding towards WebKit bugs and WebKit bugs get enshrined in the platform.</span></p>
      <p><span data-start="00:36:39.000" data-end="00:37:08.000" data-start-seconds="2199">I also think and the people at Google agree that it is a problem for the WebKit project itself, because if people start relying on their bugs, they cannot fix them. You end up with all these extra holes and problems in the platform. That's why it's really important that we have solid standards and tests to keep the Web relatively open and progressing.</span></p>
      <p><span data-start="00:37:08.000" data-end="00:37:38.000" data-start-seconds="2228">To get back on the DOM itself, this is quite a complex thing. There are many, many objects. Just for HTML, I think there are about 100 different interfaces. All these interfaces and all these objects have a lot of attributes. These attributes have their own algorithms to set and read.</span></p>
      <p><span data-start="00:37:38.000" data-end="00:38:19.000" data-start-seconds="2258">How many people have actually looked at the HTML spec and read an interface definition, for instance? How many people understand Web IDL? One hand goes up. I agree with Alex Russell I think. He doesn't like Web IDL. Let me just load the HTML spec.</span></p>
      <p><span data-start="00:38:19.000" data-end="00:38:48.000" data-start-seconds="2299">Here is a piece of Web IDL. The thing is that we had OMG IDL, which was heavily generic, for Java, JavaScript, C, and you name it. It was generic and ugly. Web IDL is a refinement that is a bit more tuned towards JavaScript. But it still has an ugly syntax tied to it that people don't really like.</span></p>
      <p><span data-start="00:38:48.000" data-end="00:39:05.000" data-start-seconds="2328">They think we should redefine it, and instead use JavaScript directly in some way. I am OK with that. I don't really care what language we use. I just wanted to be well defined. Web IDL happens to be the current best thing that actually defines how you need to implement all these objects.</span></p>
      <p><span data-start="00:39:05.000" data-end="00:39:27.000" data-start-seconds="2345">Here we have the image element. Let me just explain how to read this, because I think it is useful to know. Then, if you're dealing with some scripts and you are wondering what you can do with this script, you can actually look up what you can do. In the image element, you have the Names Constructors.</span></p>
      <p><span data-start="00:39:27.000" data-end="00:39:58.000" data-start-seconds="2367">That is actually a legacy thing. You can say &quot;New Image&quot; in JavaScript. Some of you might recall this from the old days. But it is still a fine way to create an HTML image element. Instead of &quot;document.createElement,&quot; you do &quot;new Image&quot; and you get an image back. You can even pass your parameters. You can pass width and height. Both need to be numbers. You can guess what they do. They set the width and height. It's not that hard.</span></p>
      <p><span data-start="00:39:58.000" data-end="00:40:08.000" data-start-seconds="2398">Once you have the image element, these attributes are the ones you can set. This is actually different. There is a difference between the set of properties you can set.</span></p>
      <p><span data-start="00:40:08.000" data-end="00:40:19.000" data-start-seconds="2408">I guess, in JavaScript, you would say properties. That is the confusing mismatch here. IDL talks about attributes. JavaScript talks about properties.</span></p>
      <p><span data-start="00:40:19.000" data-end="00:40:43.000" data-start-seconds="2419">These are the properties that the image element has. You have &quot;alt&quot;, &quot;src&quot;, &quot;srcset&quot;. There is a new one, &quot;crossorigin&quot; for doing cross support. There is &quot;usemap&quot;. There is &quot;ismap&quot;. You can read out the natural width, which is the original, intrinsic width of the image. It's not actually the rendered. I have five minutes left? Oh, geez. That goes quick. I thought I had 50 minutes.</span></p>
      <p><span data-start="00:40:43.000" data-end="00:40:44.000" data-start-seconds="2443">You can take 50 minutes.</span></p>
      <p><span data-start="00:40:44.000" data-end="00:41:10.000" data-start-seconds="2444">Oh, OK. Yeah, we can do Q and A. OK. I'll try to. There is &quot;complete&quot;, which tells you whether the image was successfully rendered or not. The main thing I'm saying is that it's not quite that hard to read. You have this thing and it describes an object you have in JavaScript. You can see the properties. You can play around with them and figure out how it works.</span></p>
      <p><span data-start="00:41:10.000" data-end="00:41:31.000" data-start-seconds="2470">It is daunting at first. For me, it was daunting at first to learn about these things and, &quot;How do I get hold of this object?&quot; But, as you read more, it gets more understandable. Maybe, actually, if Alex goes through, we can make it even better and do it in a slightly different way.</span></p>
      <p><span data-start="00:41:31.000" data-end="00:41:47.000" data-start-seconds="2491">Let's see. I have a few slides left, I think. Yeah. I already explained this. Like the DOM. You create it from a large string, from markup and code points, which are transferred as bytes originally. That's how you end up with the DOM.</span></p>
      <p><span data-start="00:41:47.000" data-end="00:42:26.000" data-start-seconds="2507">There are many, many layers. These were not all of them. I think it's hard to make a coherent picture of that, as you have seen. [laughs] Here are a few of them. You have the network, the inputs to the parser, the parser itself, the DOM, the scripts, the style, layout, the tree, the painting. All these concepts have a whole lot of different code paths and complexity tied to them. What it comes down to is that this is why we have bugs.</span></p>
      <p><span data-start="00:42:26.000" data-end="00:42:48.000" data-start-seconds="2546">All these systems are created by people, including the standards and the software. They are not quite perfect. So there are bugs everywhere. But knowing a little bit about how these things fit together, you can realize where the bugs are and make a more coherent bug report maybe.</span></p>
      <p><span data-start="00:42:48.000" data-end="00:43:19.000" data-start-seconds="2568">It's not all bad. There is a little progress as well, by figuring out all this old stuff, like the HTML parser. The HTML was invented in '94. Up until 2011, we haven't had interoperable HTML parser implementations. All the browsers did their own thing. Now, they are finally interoperable.</span></p>
      <p><span data-start="00:43:19.000" data-end="00:44:04.000" data-start-seconds="2599">This is based on work from Ian Hickson, who, in 2006, started figuring out HTML, wrote down the parser algorithm and got all the vendors on board to implement it. Of course, this helps browsers as well. The code base becomes more maintainable. The upside is that we can now make changes to the HTML parser and add new features, without introducing all kinds of problems. This is why I'm doing the work on encodings and URLs. By fixing all the groundwork, we can slowly move ahead with less problems in the future. So, I'm on time. Chris told me.</span></p>
      <p><span data-start="00:44:04.000" data-end="00:44:36.000" data-start-seconds="2644">Actually, before you applaus, I wanted to just raise one thing. We had the jam sessions. I felt that was really cool with the 10 minute things. I was wondering how people feel about doing that same kind of thing for a full conference. There are so many of you here. You have obviously way more interesting things to talk about than I do. I was just invited here, because I worked on standards for seven years. But it would be way cooler to have everyone here just give a five or ten minute pitch on whatever is their passion.</span></p>
      <p><span data-start="00:44:36.000" data-end="00:45:02.000" data-start-seconds="2676">I was just throwing it out there and I'll read on Twitter or something what people think about that idea. Instead of having just 10 people share their thing for two days, have 400 people, or maybe a little bit less share their passion and have some kind of collaboration going on. [applause]</span></p>
      <p><span data-start="00:45:02.000" data-end="00:45:03.000" data-start-seconds="2702">Hey.</span></p>
      <p><span data-start="00:45:03.000" data-end="00:45:04.000" data-start-seconds="2703">Hi.</span></p>
      <p><span data-start="00:45:04.000" data-end="00:45:07.000" data-start-seconds="2704">These things happen. We call them BarCamp. [laughter]</span></p>
      <p><span data-start="00:45:07.000" data-end="00:45:11.000" data-start-seconds="2707">Yeah. I was thinking it would probably be BarCamps, yeah.</span></p>
      <p><span data-start="00:45:11.000" data-end="00:45:20.000" data-start-seconds="2711">Yeah. They are totally happy to do it. You can organize them. I did three of them. They are really easy to organize, rather than these big ones here that cost a lot of money and places. People want food and it's really annoying.</span></p>
      <p><span data-start="00:45:21.000" data-end="00:45:32.000" data-start-seconds="2721">The thing with BarCamps though is that there are a lot of different rooms usually and a lot of different tracks. It would be really nice to just give everyone an audience of 400.</span></p>
      <p><span data-start="00:45:32.000" data-end="00:45:34.000" data-start-seconds="2732">It scares a lot of people as well.</span></p>
      <p><span data-start="00:45:34.000" data-end="00:45:37.000" data-start-seconds="2734">I guess, yeah.</span></p>
      <p><span data-start="00:45:37.000" data-end="00:45:43.000" data-start-seconds="2737">That was a lot of words and kitten pictures, I think, as well.</span></p>
      <p><span data-start="00:45:43.000" data-end="00:45:56.000" data-start-seconds="2743">I have this wonderful question here. Please explain the [inaudible]. [applause]</span></p>
      <p><span data-start="00:45:56.000" data-end="00:45:57.000" data-start-seconds="2756">I'll have to read that again. [laughs]</span></p>
      <p><span data-start="00:45:57.000" data-end="00:45:58.000" data-start-seconds="2757">Yeah, please don't. [laughs]</span></p>
      <p><span data-start="00:45:58.000" data-end="00:46:01.000" data-start-seconds="2758">Oh, OK. [laughs]</span></p>
      <p><span data-start="00:46:01.000" data-end="00:46:12.000" data-start-seconds="2761">There are a few that actually have a more interesting meaning. Does &quot;querySelectorAll&quot; use the same matching algorithm as internal browser methods and is it very fast, because of that?</span></p>
      <p><span data-start="00:46:12.000" data-end="00:46:45.000" data-start-seconds="2772">querySelectorAll uses the same algorithm as the CSS parser does. I would assume that it is faster, yeah. Yeah. It uses the same optimized code path. Selectors are very complex pieces of code actually, in browsers, these days. They are extremely optimized, because layout itself, because it's so complex, because CSS is at such a high level of extraction, there is a lot of time dedicated to it.</span></p>
      <p><span data-start="00:46:45.000" data-end="00:47:13.000" data-start-seconds="2805">I think there is a lot of focus on JavaScript performance, but there is not really much focus on CSS performance. There is more these days. I think that is really what's holding web applications back a little bit is a really good layout performance. We have had JavaScript performance go 10 times or 100 times faster, since we started out. But we haven't had anything like a tenfold increase in CSS performance. That kind of thing would be awesome to have.</span></p>
      <p><span data-start="00:47:13.000" data-end="00:47:18.000" data-start-seconds="2833">We also made CSS much more complex. Now we have animations and transitions and shaders and effects.</span></p>
      <p><span data-start="00:47:18.000" data-end="00:47:26.000" data-start-seconds="2838">Exactly, yeah. Yeah. We keep adding this stuff, while we do not actually understand what we have so far. Yeah.</span></p>
      <p><span data-start="00:47:26.000" data-end="00:47:38.000" data-start-seconds="2846">Here is a good one here. If you could replace the DOM with something better, what would it look like and what are the biggest things in the DOM that need replacing? Is it something like the jQuery selector engine?</span></p>
      <p><span data-start="00:47:38.000" data-end="00:48:06.000" data-start-seconds="2858">I guess we would have a better API and I would drop the redundant stuff. The DOM has a lot of methods that we don't really need. There are a lot of interfaces we don't really need. We don't need doctype. We don't need attributes to be nodes. Attributes could just be strings on the element object, I think. But we have to keep them as objects, to make those attributes work, unfortunately.</span></p>
      <p><span data-start="00:48:06.000" data-end="00:48:25.000" data-start-seconds="2886">I would remove comments. I wouldn't keep that in the tree. That is not needed in the tree. Maybe you could even drop the document node itself. You would just have elements to start. Yeah. You make it much more like the APIs you have in Python like etree or whatever it's called.</span></p>
      <p><span data-start="00:48:25.000" data-end="00:48:45.000" data-start-seconds="2905">One thing about this that ails me a lot, being somebody who came to the Web in 1996, because of passion, coming from another media, radio, to the Web, I look at HTML and it was simple rules and it was wonderful and easy to understand what I do with this. I mark up text with a few commands.</span></p>
      <p><span data-start="00:48:45.000" data-end="00:48:46.000" data-start-seconds="2925">Yeah.</span></p>
      <p><span data-start="00:48:46.000" data-end="00:48:50.000" data-start-seconds="2926">I start with a p and I end with a p and I know it is a paragraph.</span></p>
      <p><span data-start="00:48:50.000" data-end="00:48:51.000" data-start-seconds="2930">Right.</span></p>
      <p><span data-start="00:48:51.000" data-end="00:48:57.000" data-start-seconds="2931">That a rendering engine doesn't need this doesn't mean that we should bastardize HTML that way, I think.</span></p>
      <p><span data-start="00:48:57.000" data-end="00:49:23.000" data-start-seconds="2937">Oh, no. I was trying to explain how the parser works. If you work on a team, you should probably always use quotes. Closing your tags makes sense, unless you have a common understanding on the team and everyone knows what they are doing. Personally, I don't usually bother closing an LI, because LIs are only going to be in an OL anyway. So there's not much point in closing them.</span></p>
      <p><span data-start="00:49:23.000" data-end="00:49:25.000" data-start-seconds="2963">Or a UL.</span></p>
      <p><span data-start="00:49:25.000" data-end="00:49:28.000" data-start-seconds="2965">Yeah. But they are always going to be in a container.</span></p>
      <p><span data-start="00:49:28.000" data-end="00:49:36.000" data-start-seconds="2968">But they have a different meaning. One of them has an order of the lists, a defined one, and the other one could be in any order. That's what I'm saying. It's great that these things are there, but...</span></p>
      <p><span data-start="00:49:36.000" data-end="00:49:44.000" data-start-seconds="2976">No. No. What I meant is that there are always going to be LIs. There are always going to be siblings. I guess that's what I meant. So you don't really need to close them, because you know...</span></p>
      <p><span data-start="00:49:44.000" data-end="00:49:46.000" data-start-seconds="2984">It's the same with the DOM.</span></p>
      <p><span data-start="00:49:46.000" data-end="00:50:07.000" data-start-seconds="2986">I'm fine with people closing all their tags. It's probably better and it's more approachable. Yeah. It makes it easier to understand. But I think it's also good to have an understanding of what is actually going on. If you trip up, you realize, &quot;Oh, OK. I forgot this closing tag and, therefore, this thing happened.&quot;</span></p>
      <p><span data-start="00:50:07.000" data-end="00:50:28.000" data-start-seconds="3007">But, on the most displayed glitches, when you build websites, just because you forgot something, and browsers inject something you didn't even know existed. So, for me, the predictability of an error is always a confusing point. That's why I like the idea of XHTML. I know it's not popular, but I like code breaking, when I make mistakes.</span></p>
      <p><span data-start="00:50:28.000" data-end="00:50:29.000" data-start-seconds="3028">Yeah.</span></p>
      <p><span data-start="00:50:29.000" data-end="00:50:31.000" data-start-seconds="3029">Rather than browsers doing things to fix it for me.</span></p>
      <p><span data-start="00:50:31.000" data-end="00:51:10.000" data-start-seconds="3031">That is great. The thing is that, with XHTML in particular, if you start using the production website, and you don't use...a lot of people use string concatenation to make their websites. We don't have a DOM on the server and we serialize that and make sure it is well formed. Then you have your typical web shop, where you sell games and you search for black and white, which has an ampersand. The guys that made the web shop used XHTML. But they didn't quite realize what they were doing, so they didn't escape the ampersand. I opened it up in Opera I got the well-formedness error and I couldn't order my game. This actually happened back in 2004 or so.</span></p>
      <p><span data-start="00:51:10.000" data-end="00:51:16.000" data-start-seconds="3070">Well, it's much like when people forget a semi-colon in their PHP and the PHP doesn't run. This is what code is like.</span></p>
      <p><span data-start="00:51:16.000" data-end="00:51:17.000" data-start-seconds="3076">Sure.</span></p>
      <p><span data-start="00:51:17.000" data-end="00:51:20.000" data-start-seconds="3077">Forgivable code is very dangerous for people to teach things.</span></p>
      <p><span data-start="00:51:20.000" data-end="00:51:38.000" data-start-seconds="3080">Yeah. PHP runs on one product, whereas your website runs in millions of people's browsers. What is going to happen is out of your control. So it's better to use a forgiving format then to throw these errors at users.</span></p>
      <p><span data-start="00:51:38.000" data-end="00:52:04.000" data-start-seconds="3098">Your PHP is what you control. But, the moment you start serving a website and you include content from third parties, there are going to be unknown variables in that. Unless you have a perfectly airtight system, which is really hard to write, it gets really complex to make sure that all the XHTML and all your output actually is always going to be that case. Then you need to really, really test your backend system.</span></p>
      <p><span data-start="00:52:04.000" data-end="00:52:21.000" data-start-seconds="3124">I can understand it for a slide set or a simple HTML page. You can just use XHTML, because it's going to be static. But the moment you get the dynamic things going on and you get all this input from sources, you need to have a whole XML tool chain on your server that does all these things.</span></p>
      <p><span data-start="00:52:21.000" data-end="00:52:40.000" data-start-seconds="3141">I mean, no disrespect, but it's a complex thing. There are a few people who tried it. Like Sam Ruby tried this on his blog and tried to write this perfect blog system, and there are still people every now and then who found cracks in it and made it give well-formedness errors to users. And giving errors to users is like a big no-no I think.</span></p>
      <p><span data-start="00:52:40.000" data-end="00:52:49.000" data-start-seconds="3160">Yeah, it is, but at the same time allowing anybody to write any code is a big no-no as well because we don't evolve as a craft.</span></p>
      <p><span data-start="00:52:49.000" data-end="00:53:14.000" data-start-seconds="3169">Well, we don't allow it. Right? That's why we say, &quot;Use validation and if you get errors, understand what happened and fix those.&quot; I think that's our thing. We have validators and there are checkers. I think most people here, they care. Right? We care about that kind of stuff. We want to fix the validation errors, and we want to understand what the fuck we're doing.</span></p>
      <p><span data-start="00:53:14.000" data-end="00:53:31.000" data-start-seconds="3194">I mean, there are some people that don't really care, and they just want to put out content and I think that's cool, too. It's really important to put out content, that's the whole thing the web is about, to share your stuff. If you don't really know HTML that well, you made an error, it's better that you can share your content than that you get an error or something I think.</span></p>
      <p><span data-start="00:53:31.000" data-end="00:53:39.000" data-start-seconds="3211">It's more about tooling, that the tools actually allow you to create clean things without having to think about it.</span></p>
      <p><span data-start="00:53:39.000" data-end="00:53:57.000" data-start-seconds="3219">Yes, I guess, in part it might be about tooling. It depends where you're from, I guess. If you don't have a strong background in HTML, then you might want to use a tool. If you have a strong background in HTML, you might want to do it yourself. Even if you don't have a strong background, you might just want to play around with HTML and see.</span></p>
      <p><span data-start="00:53:57.000" data-end="00:54:01.000" data-start-seconds="3237">There's not really any point I'm trying to make here, I'm just saying, yes.</span></p>
      <p><span data-start="00:54:01.000" data-end="00:54:18.000" data-start-seconds="3241">What are your thoughts on the Shadow DOM proposal stuff? And web components, X-tag, these kinds of things? Making the browser mock-up more extensible in the browser with JavaScript.</span></p>
      <p><span data-start="00:54:18.000" data-end="00:54:47.000" data-start-seconds="3258">Yes, I'm getting around to the idea. I still find it kind of scary to release the semantics to the crowd. It might be a good idea. It's not opening the floodgates or anything because, as Alex has said, people are already doing this, right? People are already creating their own elements, so we might as well give them a way to do it properly. I think the Shadow DOM itself plus the web components is a really interesting way.</span></p>
      <p><span data-start="00:54:47.000" data-end="00:55:03.000" data-start-seconds="3287">I edited a Google Maps a couple months ago. I was playing around with the Google Maps API. I had this simple page set up with a div. I had given the div some styling. I don't really use IDs for divs usually, I do div and then give it a width. I gave it a red background.</span></p>
      <p><span data-start="00:55:03.000" data-end="00:55:26.000" data-start-seconds="3303">This Google Map thing wasn't working and I didn't understand why until after all I realized that Google Maps API had inserted a whole bunch of divs in my page. I was tiling those divs and therefore nothing was happening and that's very annoying. That was very annoying because I couldn't use generic styles because it was clashing with this Google Maps thing. That was really weird.</span></p>
      <p><span data-start="00:55:26.000" data-end="00:55:52.000" data-start-seconds="3326">And with components, the Google Maps thing becomes its own separate component and your styles were not affected, unless you want to. There is some kind of bridging thing there. I think that makes that kind of thing, where you have a lot of different components, and different people make those, or you want to embed a map on your page and you don't want to mess around with the styling, it makes it a lot easier to work together and do things.</span></p>
      <p><span data-start="00:55:52.000" data-end="00:56:05.000" data-start-seconds="3352">It can also, for UI stuff, like making new buttons and all those things, like if you want to make a button that consists of ten divs, go ahead, and then you just hide it from the DOM. The DOM stays semantic.</span></p>
      <p><span data-start="00:56:05.000" data-end="00:56:19.000" data-start-seconds="3365">I think that's the other nice thing, the DOM is sort of clean, and in the background you have all these different elements to do your tricks. You sort of hide them from the people that script and try to get content out of your page.</span></p>
      <p><span data-start="00:56:19.000" data-end="00:56:23.000" data-start-seconds="3379">Good, lunch. Thanks Anne. [applause]</span></p>
     </div>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2012/sessions/building-the-web-platform-anne-van-kesteren.md" id="comment">
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
