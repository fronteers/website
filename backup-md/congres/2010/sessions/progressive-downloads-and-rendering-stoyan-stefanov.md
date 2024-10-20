<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>Progressive Downloads and Rendering by Stoyan Stefanov · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p341">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>Progressive Downloads and Rendering by Stoyan Stefanov</h2>
     <h3>Videos</h3>
     <video width="480" height="270" src="/_downloads/2010/stoyan-stefanov-progressive-downloads-and-rendering.webm" controls>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2010/stoyan-stefanov-progressive-downloads-and-rendering.webm">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="http://vimeo.com/15981041">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2010/stoyan-stefanov-progressive-downloads-and-rendering.webm">Download video</a> (WebM, 127MB)</li>
      <li><a href="/_downloads/2010/stoyan-stefanov-progressive-downloads-and-rendering.ogv">Download video</a> (OGV, 51MB)</li>
     </ul>
     <h3>Slides</h3>
     <iframe src="https://www.slideshare.net/slideshow/embed_code/5415899" width="427" height="356" allowfullscreen></iframe>
     <ul>
      <li><a href="http://www.slideshare.net/stoyan/progressive-downloads-and-rendering">See slides on SlideShare</a></li>
      <li><a href="/_downloads/2010/stoyan-stefanov-progressive-downloads-and-rendering.pdf">Download slides</a> (PDF, 34MB)</li>
     </ul>
     <h3>Transcript</h3>
     <p>[0:06] ...a bit about performance. This is me, I work at Yahoo and I've written a bunch of stuff. I'm going to talk about progressive downloads and progressive rendering and basically after we've done all the basic stuff like GZipping, minification and all that, what to do next to make the pages faster or just appear faster. Just the tweak the perception of speed.</p>
     <p>[0:34] So why is it important to talk about this stuff is because people are really sensitive of their time. You know the saying that time is money as incorrect as that may be people are really sensitive when you waste their time. So they really don't like to wait. There are all sorts of, even physiological changes that happen when you're waiting, people get more irritated and just, you know, high blood pressure and what not. So we want to make people happy.</p>
     <p>[1:12] Just talking about the perception - so this is sort of a theme of visual illusion. If you look at square A and square B, one appears to be black; the other one appears to be white. But they are actually the exact same shade of gray. The thing is you cannot really see that until you start hiding... Yeah, in part of the...</p>
     <p>[laughter]</p>
     <p>[1:41] Once you hide everything on the page then all of a sudden it kind of pops out that they're actually that same color. But we couldn't tell that. The thing is once you start bringing them back all of a sudden - although you were just convinced that it's the exact same color, you cannot see it anymore. Again, A is black and B is white.</p>
     <p>[2:08] Another kind of similar thing is this one here, two gradients, one on top of the other. Until you hide the background, in which case you see the reflection is all color. If that was too monochromatic... So there is this brown cube here and this orange one are actually the same color.</p>
     <p>[2:37] The reason for those was just to show that we are flawed human beings. We have a distorted idea of reality and even when it comes to seeing, which we have a big portion of the brain dedicated to seeing because that's the thing we do the most in our lives, we look at and are processing information all the time. So if you can't tell black from white chances are we aren't very good at telling anything really.</p>
     <p>[laughter]</p>
     <p>[3:06] So when it comes about performance we care about perception of time and durations. So if something takes some amount of time, but people come to your page with certain expectations, maybe they visited a competitor or they have some idea of how long this page should take. So if their expectation doesn't match - usually it won't match - then they might perceive that as actually being slower than it is.</p>
     <p>[3:37] Then there's additional error related to the retrieval, storage and retrieval of information. Once you want to tell about this page to your friends and family and if you perceive it as slower than it is, chances are you'll remember it was even slower. And we don't want that.</p>
     <p>So when, story short, people perceive is something is slower when it's unpleasant or unknown, when it's too boring or they're just too busy and have too many things to keep track of. So we want to make sure that the first page experience really very fast because when it's unfamiliar, when the user comes to the page for the first time, they will perceive it as slower than it actually is because there's all this new stuff. You don't know where anything is really. So they have to process more information.</p>
     <p>[4:41] The idea is that we should optimize, really, the empty cache. Otherwise there will be no full cache experience. There will be no repeat visits.</p>
     <p>So let's go progressive. But before I just wanted to make sure I mentioned all the basics. You have to make sure that we've done the basic stuff before moving onto those - tweaking the perception and so on. I felt obliged to list those with you. Reducing the number of HTTP requests is the most important thing. Always send compressed text files, minified, CSS and JavaScript, optimized images losslessly, and set expire header and CDN if you've got budget for it.</p>
     <p>So the basics are that you have to list the best practices for those two. Perfplanet is a project of my own. It's just a collection of feeds about performance, feeds and blogs.</p>
     <p>[5:43] We have progressive enhancement, which is more like a development process or philosophy, it doesn't have to do much with the way the page is download. So I'm not going to talk about it.</p>
     <p>[5:59] What I want to talk about was progressive downloads or in other words make sure that once you have the waterfall of components that a page requires, they're downloaded as quickly as possible, they don't block each other, they're not in each others way, they're loaded asynchronously if possible. So that those waterfalls are as free flowing as possible.</p>
     <p>[6:23] Here's one example, just a test page. This is the exact same page in both waterfalls, but the second one takes half of the time than the first one. Just by making sure that there's not much blocking going on. It's really the same page, same features, same images, so everything's the same. This is how important it is.</p>
     <p>[6:48] We talk about progressive rendering; we want to make sure that we render something very quickly at the beginning, ideally within 200 milliseconds. That will be perceived as instantaneous by the user. Even though we're not ready with a complete page, we want to flush something out and just give the idea that something is going on.</p>
     <p>[7:11] This is what we're going to talk about today. JavaScript, flushing, CSS, blocking conditional comments, and some other stuff.</p>
     <p>[7:21] You probably all know that JavaScript blocks the rest of the downloads except for very, very recent browser versions. Then the browser cannot load all the other images and all the other stuff until this JavaScript is parsed and processed and executed. This is something that people sometimes do, which it should never have run it. It's a bunch of script tags.</p>
     <p>If you have scripts, they should be combined into a single file or loaded asynchronously. So this way it kind of makes the waterfall ridiculous because you have all this blocking, blocking, blocking, which is kind of sad. Kitten.</p>
     <p>[laughter]</p>
     <p>[8:08] Yeah, well, I guess what I wanted to say is that every time you do a bunch of blocking JavaScript tags, this software kills the kitten.</p>
     <p>[laughter]</p>
     <p>[8:22] ...or maybe this one.</p>
     <p>[laughter]</p>
     <p>[8:25] All righty. So the easiest thing is to just put JavaScript at the bottom so that there's nothing to block. But we can render the JavaScript in a non-blocking way.</p>
     <p>There's defer and async attributes. Defer has been in IE since forever. Basically it means it's OK to delay this file, they don't have to block the rest. But make sure that all the deferred JavaScripts are then executed in the order they appear on the page. Async is actually now filed as a suggestion that basically says, &quot;Don't block with this script, just whenever you're ready, just execute it. The order doesn't matter and the order might be different.&quot;</p>
     <p>[9:24] This is in Safari. They have, now, load events so that you can call a function once it arrives.</p>
     <p>[9:34] How that looks on a timeline is the deferred script will be downloaded and executed in order before the DOM content loaded event happens and all the asynchronous stuff will be executed whenever it arrives, but before the load event.</p>
     <p>[9:52] But while all the browsers seem behind those, you can asynchronously load JavaScript this way. Instead of creating a script tag in the HTML that refers to an external file, you create that on the fly with DOM insertion, this way it doesn't block. It's great.</p>
     <p>[10:15] So about flushing. Usually when you visit a page, when first you download the HTML for it, then once the browser is done, then it looks at the HTML, figures out, &quot;Oh, I need all those components, those images, CSS, and so on. So let me go ahead and flush them.&quot; But if you flush early, you have a chance to start downloading stuff even before the whole HTML is completed.</p>
     <p>[10:44] I think it's a really well known technique, but it's not nearly as widely used as it should be.</p>
     <p>[10:52] So whenever you flush something small, which refers to external components, then the browser can start fetching those instead of just sitting idle. It's really easy to do. In PHP you have a flush function. It pretty much exists in every scripting language.</p>
     <p>[11:12] The theory behind is that in HTTP 1.1 there is the chunked encoding that was added. So if you send the HTTP headers, then send different chunks by first saying, &quot;OK. This is the size of the chunk and then the chunk itself.&quot; So there's two approaches to implementing this.</p>
     <p>One is called semantic application chunks. So when your application knows about its different parts like headers, footers, sidebars, you can flush there so that you send only the header, for example.</p>
     <p>The other approach is just not bothering with it in the application, but have your server flush it. For example, on Google search if you don't request gzip, if your browser doesn't support gzip they'll send every 4K in different chunks. But if you do they'll do a more semantic flush.</p>
     <p>[12:17] So as soon as you type something and you hit enter in normal Google instant interface, you get the headers flushed immediately. So it usually arrives in something like 100-200 milliseconds. So this is great. This is just awesome because as soon as you type something, something appears and then you're not done with retrieving all the search results and as you can see there's no counter here or anything. The only dynamic part is the query. It's pretty much a static header. They can send it right away and you get a feeling that, &quot;Oh, this page is responding so fast,&quot; while they're actually working on the results.</p>
     <p>[13:04] In the second chunk, when the results arrive, at this point you have a usable page. You can click on those links and just get your stuff done. But they have an extra chunk at the end, which just includes, basically, the JavaScript - actually I'm not sure about the footer anymore. But it just does the JavaScript which enhances the page progressively.</p>
     <p>So even if something bad happens to the connection and that thing never arrives then it's fine because you have a usable page. In terms of code it looks something like this. Where you have the header, flush by chunk, the body of the page, flush with chunk, and then just include the script at the very end. Let me give this script a chance to run, it might take a while.</p>
     <p>[14:01] In Amazon they have a combination of using the chunks with the source order. So they'll flush the header and then they'll flush - because when you think about what's the most important thing on that page, it's the buy button. So they want to make sure that it's, the reason for this page to exist is to sell books, right? Or anything. So they want to make sure that it's available immediately and they put it higher in the source order. So after then comes the image, the title and then all of the other stuff, may arrive whenever it arrives. Like all the reviews and that stuff.</p>
     <p>[14:40] And so this is Google Instant, right? I just wanted to make the point that the HTTP chunking is not necessarily only for HTML. In this case in Google Instant, when you type they send a request to get the search suggestions and to update the results. So the thing that I've noticed is that the response is not in any particular format. It's sort of delimited chunks of JSON data. And they have them actually sent in two chunks.</p>
     <p>[15:15] The first one is the suggestions and the second one is the result. So the reason being sometimes you only get suggestions, right? If they're not confident that this is what you searched for, they will not return all the results. But when you have both suggestions and results in the page, you're probably much more interested in looking at, as you type, looking at the suggestions. So they'll flush that first and then whenever the results are ready they'll flush that second.</p>
     <p>[15:50] Yeah, so unfortunately there's not any good tools to figure that stuff out. So there's a URL here, some script that I did in PHP. You can type in a URL. It's very clumsy and horrendously slow, but it's just something if you're curious to look at what other people are doing with chunking.</p>
     <p>[16:14] So CSS and rendering. So after the previous talk I know this slide is going to look really bad. So what is the worst enemy in progressive rendering? And it is the CSS. [laughter] So, I mean nothing bad of course. But just the thing is that CSS will block the rendering. That's why I coined the words component type. Because images, they can arrive whenever. But until the last piece of CSS arrives on the page, the browser will not render anything.</p>
     <p>[16:52] And that includes even @media print or other @media types that are not necessary at all to display the page. But it's just the way most browsers work, except Opera. Opera will not wait for the very last piece of CSS, but most of the other browsers will. And that's really bad.</p>
     <p>[17:17] So if you have several CSS files, until the very last one is downloaded, even if it's @media print, then the user just stares at a blank page. Which is not something that we want to do. So you can inline all the @media rules. Because most of the time for printing probably you just want to disable some stuff. Maybe hide some navigation, something like this. So they're usually small, it doesn't make sense to put it in a separate file.</p>
     <p>[17:48] And so for example, these are two pages. So this is a screen shot from web pagetest. And this green line here is the moment that something is rendered on the page. And the blue line the onload event. So two different pages. So this one, the initial rendering took off about 0.3 milliseconds, which is great. And this one here, so the next page about 200 milliseconds later. And that's only because one of the component types is a CSS. Because nothing will get rendered until then. Where the previous page did not have any CSS.</p>
     <p>[18:38] All the CSS was inline. This is Google search. So CSS doesn't block downloads the way JavaScript does. But they do block if they're followed by an inline script tag or when used with conditional comments. And I'll talk a little more about conditional comments. But inlining CSS might sound something bad, right? Because it's repeated, right? It shouldn't be cached. Plus the separation of concerns. It should be in a separate files.</p>
     <p>[19:13] But if you're really, really worried about performance and making things as fast as possible, there's always the option of inlining it. And that's what Google search does. There's no external CSS. Although it's a high traffic website. It will save probably quite a bit if they put it in an external file and cache it. But they've chosen to put it with the inline and everything in the first chunk so that it's rendered immediately.</p>
     <p>[19:42] Bing.com uses this technique when it's your first visit in the session they'll put everything inline. And then after on load they'll lazily request the same styles, the same JavaScript, but from external files. So the next view in the same session they will use the external files. So that's also a strategy. So they just write a cookie saying OK this is a second visit.</p>
     <p>[20:16] So it's also a good idea if you don't use CDN. If you don't have money for CDN, but you still split components across different domains, it makes sense to put the CSS on the same domain as HTML. So that there's no extra DNS look up. So you save a bit of time with the DNS look up, so the browser renders something quicker.</p>
     <p>[20:40] So conditional comments and blocking. So this is a normal page with a normal CSS right here. And this is the same page but the style sheet is included with conditional comment. And curiously enough it blocks the rest of the components, and that's really bad. So it's strange, right? So you do something as common as something like this, where you have IE specific stuff. And as soon as you do that then in IE you will have, your CSS will block the rest of the stuff.</p>
     <p>Another common scenario is this one. I think Paul Irish came up with this thing? Where you just include class names depending on the browser. But in this case this will also, although it's not an external instruction, but it also blocks the rest of the downloads. So the solutions are kind of strange, but they work. So you can put an empty conditional comment way at the top before there's any component.</p>
     <p>[21:52] So I guess IE will parse once through the document, look for those. And if it sees a conditional comment way at the top then it will no longer block on the rest. So you just include some dummy conditional comment there and then it doesn't block anymore. For the other case where you have conditional class names you can add them to the HTML tag instead of the body tag. So that they're executed early on in the document and they don't block anymore.</p>
     <p>[22:31] Preloading. Preloading is a good way to cheat. Cheat your way into faster pages, right? So when you're on one page and you have a high confidence that the user will end up on the next page. Then your first page, page A, can start prefetching the components needed by page B. For example you're typing your user name in a log in screen, but you can anticipate what the next page will be.</p>
     <p>[23:05] But there's some problems with this approach, is that it introduces more testing. Right? Because you might anticipate a next page but the next page may be created in a way that, or the JavaScript for this page created in a way that it expects for example to find certain elements. If the JavaScript doesn't find something on the page because it was not tested to run on the previous page, the user might see some errors. So that's unpleasant. So it adds more testing.</p>
     <p>[23:37] And there's also then, however minimal that may be, the time that is spent by the browser parsing and executing this JavaScript and the CSS that you prefetch. Although it's not needed on that page. So there's link prefetch. Something that has been around for quite a while in Firefox. And before all the browsers implemented, there's this technique to preload stuff without executing them.</p>
     <p>[24:10] So this is a, it's kind of an easy solution, will be to say OK I want to load all my stuff as an image. So then I will preload CSS in JavaScript as an image so it doesn't get really executed. It cannot hurt the page.</p>
     <p>[24:27] But turns out that in Firefox and WebKit there's a separate cache for images separate from the cache for scripts and styles. So for those you can use an object tag. Basically create an object tag invisible with zero width and height. And then set that data to the location of the file. So that's a way to preload without executing.</p>
     <p>[24:56] So blocking can happen in all kinds of unexpected places like favicon and is kind of ridiculous. So in all browsers when you have this little favicon it will be downloaded when the browser is just sitting idle. When you have, the page is kind of settled and then the browser says OK, let me fetch favicon. But not in IE, where it's the first component that gets downloaded right after onload.</p>
     <p>So if you had for example some lazy loaded JavaScript and CSS that enhance the page, or lazy loaded images that you just wanted to render, initially the page as soon as possible. But then you want to lazy load some other stuff, then the favicon will be in the way. You would much rather prefer to have the scripts and stuff as opposed to the favicon, right? So if all the scripts and stuff are on different domains, right? It won't hurt the waterfall if you preload the favicon. If that turns out to be a problem in your specific application.</p>
     <p>Data URIs. I think you're all familiar with that. But that's also a great way to reduce the number of HTTP requests. Is if the image is inside, we put them in the sprites, right? Which are kind of painful to create and maintain, although there are some tools. But the other option is to use the data URI. Which is pretty simple. You just use base64 encoding to encode the binary content of an image or anything really. And then include it in the CSS using a background-image:url() instead of HTTP whatever. Then you just put actually input the data for the image.</p>
     <p>[26:57] And you can do the same with image tags, inline that there. And this is not really something theoretical, it's used by the most popular websites out there. So in Yahoo search for example, this example shows that there's actually a gradient here. And it's in a data URI. And this is Google. So all those images are actually inline in the HTML and not separate components.</p>
     <p>[27:32] Which may sound kind of strange, right? Because when you inline all this stuff into the page you made the page bigger and there's no caching. But it turns out that it's that important to have as few requests as possible, just to reduce the number of requests. And in this particular application in Google search, chances are you don't often search for the exact same thing more than once. So they don't really benefit much from the caching so they decided to inline that.</p>
     <p>[28:09] And you can use both. Do flushes and data URIs. So going back to the Google page. It's actually kind of funny the way it's done. So this is the page. If you turn off JavaScript, you'll get no images here. And that is because actually this, when the page is loaded, in that second chunk of response, you don't have any images here because they want to render something really quickly, but you actually have a one-by-one gif as a data URI inline there, inline repeated every time.</p>
     <p>[28:44] It's very important to reduce that number of requests. They don't even have a one-by-one gif hosted anywhere if they chose to inline it every time. So, this is what you get. Then, at the end of the page, in the last trunk when you get all the JavaScript, then, you have all this base64 encoded content for the images. So they just go ahead and swap all of those placeholder one-by-one gifs with the actual image, which arrived in the very large chunk.</p>
     <p>[29:15] So, that's probably a bit of an extreme case of optimization because you don't get any benefits from caching, then the page doesn't work without JavaScript, which is not good. That's something to consider.</p>
     <p>[29:34] The data URIs, the problem is that they only work in IE8 and above, but the thing is that for the other browsers, there's always the thing called MHTML. So this is like my email. In emails, you have multi parts in the email. For example, you have the HTML version of the email, the text version of the email, and then all the attachments are inline in a single document. So this is the same idea for that MHTML. It works in IE6 and 7. For the longest time, there was kind of a misunderstanding with...</p>
     <p>[30:27] There was a problem with IE7 and Vista and Windows 7. It doesn't work properly, so developers have come up with all kinds of crazy hacks to work around this, but it turns out it's actually really simple. It's kind of just using the correct syntax because the incorrect syntax without... Let me see if I can show you.</p>
     <p>[30:53] So this is the MHTML, it's a multipart document. One that has different parts in it. So, one part looks like this, you have a bunch of headers, then the cue line, and then the actual content. Then, the multipart parts are separated by some sort of string that you decide what string that will be and put it right here in the boundary. So you just have to use the syntax.</p>
     <p>[31:20] We have two dashes, the separator, and the very last one is to have two dashes at the end. I call them the double dashes of doom because I spent so much time fighting with IE7 and Vista. The thing is it works fine in all other versions of IE, this particular combination, which is heading errors. It was working fine the first time, but then when you refresh and this thing is cached, then it just wouldn't work.</p>
     <p>[31:50] So, it came to me, the whole thing really is just an example of a CSS file. So it has a comment here, it has that multipart document with the different parts here. At the end, when you have the actual CSS file, then you just refer, unfortunately, you'll have to use absolute URL, and refer to that. So, this is an identifier of the image. It will come up when we declare here. Then you can see the image that I wanted you to.</p>
     <p>[32:27] This is really unreadable, but the idea is that you can do for inline CSS, too. So you can have comments, here we built a multipart document, then you have the actual CSS and everything is inline. So that means that you can actually build cross-browser single request level applications where you just do one page and that's it, no more requests. All the script is inline, all the CSS in inline, and all of the images are inline, and it works across all browsers. So, it's kind of... If you're going to be doing this, it's kind of extreme, because you have to...</p>
     <p>[microphone cuts out]</p>
     <p>[33:03] Was that me?</p>
     <p>[microphone feedback]</p>
     <p>[whispers] [33:06]</p>
     <p>[33:12] Hello!</p>
     <p>[laughter]</p>
     <p>[33:13] All right. It's kind of, you have to worry about separating the content from the presentation. So, many times, we need aspects in performance or in relation, it's a tradeoff. If you really, really want to do it, you are able to.</p>
     <p>So, one drawback of having the cross-browser solution when you have both MHTML and data URIs in the same file, so if you have any sort of site sniffing, then, the problem is that you have to repeat the same image twice. So the solutions are to look in the browser-specific CSS and do the server-site sniffing or, there was somebody who commented in my blog, if you keep them close together because of the better compression and you use them, the duplication is not so bad.</p>
     <p>[34:20] Or there's one crazy hack from this Russian website. Unfortunately, this is only in Russian. I've been meaning to sort of...</p>
     <p>[coughing]</p>
     <p>[34:30] ...and bring it to a more wider audience, but it's just some crazy stuff. In the same document, you have the MHTML and the data URI and the way it works is you put here the header of the JPEG file, this is 6400 encoded, then you put the normal CSS declaration, and then you start, again, you put just the header part, and then the rest of the file.</p>
     <p>[35:00] So, in reality, you have something that looks like this. You have JPEG headers, you have some CSS, JPEG, and then all the data above the image. So what IE sees is the JPEG header, then some garbage in the JPEG file that it ignores, and then the rest of the file. What other browsers will see, this is an invalid CSS, and it's like whatever, and then it will move onto the normal image. It works for JPEGs and it gets a little more complicated for PNGs and GIF, but it really does work. It's a bit crazy and really inventive, but it works.</p>
     <p>[35:45] One last point that I wanted to make is when you tweak the perception of loading the page to use animation, to kind of pretend that you're actually ready with something, but you actually are not. So, for example, animations are usually not really good for performance reasons because it's obviously more code, not in CSS, we don't have to write that much code, but it's usually abused by developers, &quot;OK, let me animate this thing only because I can, and I'll make it really slow and painful because I like to do animations.&quot; But they can be used for good, not only for evil.</p>
     <p>[36:30] These are two examples of... I don't know if the WiFi is... Thanks! That seems to be better. I don't know, I don't speak that language.</p>
     <p>[37:28] So, as you see here, anything in Google search, you have those extra options, which is very nice, which means you can click and use this animation. It looks as if all the content is there, but actually, it has to go and fetch it from the server. But they're confident in their response that they can actually start animating it and pretend that it's there, it looks like it's there, but it's not.</p>
     <p>They just do this nice animation just to keep the page responsive and the user will see that something is happening, and it doesn't have to see that loading indicator, which is not something nice to see. Because the first reflex, I guess, when you make an XHR request or anything to get more data,</p>
     <p>[37:53] you just put that loading image indication to tell you that something's happening. But, if these are really short, then you don't have to do it because then, the whole page appears as if it's less responsive. You click something, and then you wait, click and wait, and, obviously, we don't like to wait.</p>
     <p>[38:38] So let me try now, if I reload this page, and then you see it's here, but it wasn't last time I tested, maybe it's just the Dutch site. When you go here, you are actually seeing animation but no content. So, it's a nice approach if you have something that takes a while or something that shouldn't take a while, don't start with the loading indication right away, but if, for whatever reason, because it's networked, everything happens... So for example, you can set up loading indication after 200 milliseconds or something that if there's any unexpected delays, just to keep the user updated.</p>
     <p>[39:36] Another example, this happened yesterday, [mumbles] ... So here, you have those kind of images here on some popular articles, and you can click through them and see the next one. So, the same thing, you get a nice animation that tells you, OK, this thing is here, but it's actually not. So if you turn off... If you get only the animation without the other thing, so it's just pretending that all of the content is there while fetching. It's much quicker than as soon as you click, it will just slap a loading indicator into your page, not very friendly.</p>
     <p>[40:39] I think that's pretty much all I have to say. Parting words, yeah. So, yeah, there's two important things that I want to say is that something you should never say is that everyone is on high-speed, everybody's on broadband these days. That's not true, but even if it was, the way our protocols work and the way that you do an application, you really want things that much from the good connection.</p>
     <p>And another thing not to say is, &quot;It's all in the cache, oh, I don't care about this stuff. I'll just put it in. It's always cache anyway, right?&quot; Well, most of the time, it's not. Actually, there was confirmed from other companies that I talked to that pretty much that everybody they had knowledge of, about 50% of all the users come to a page with empty cache for various reasons. So it's not all in the cache.</p>
     <p>So, if you want to make high performance and responsive applications, it's great to consider non-blocking, asynchronous downloads just to look at the waterfalls. It's so easy now with web page tests. You don't have to install anything. You just type in the URL and you can see from different locations in the world, in different browsers, and just look at the waterfall and see what happens. There might be surprises along the way.</p>
     <p>[42:00] Progressive rendering, if you can, do a quick flash and just display something in the first 200 milliseconds. That will be incredible, and users will love it. They'll feel that the applications are very responsive.</p>
     <p>[42:14] That's all I have. Any questions?</p>
     <p>[applause]</p>
     <p>[42:18] Questions? We can talk about it in the pub later, right? Thanks again very much.</p>
     <p>[applause]</p>
     <p>[42:41]</p>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2010/sessions/progressive-downloads-and-rendering-stoyan-stefanov.md" id="comment">
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
      <li class="current"><a href="/congres/2010/sessions/progressive-downloads-and-rendering-stoyan-stefanov" class="current">Progressive Downloads and Rendering by Stoyan Stefanov</a></li>
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
