<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>The Future of CSS - Current Experiments and Near-Future Reality by Tab Atkins Jr. · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p524">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>The Future of CSS - Current Experiments and Near-Future Reality by Tab Atkins Jr.</h2>
     <h3>Video</h3>
     <video width="640" height="360" src="/_downloads/2011/tab-atkins-the-future-of-css.webm" controls>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2011/tab-atkins-the-future-of-css.webm">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="http://vimeo.com/32135328">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2011/tab-atkins-the-future-of-css.webm">Download video</a> (WebM, 137MB)</li>
     </ul>
     <h3>Slides</h3>
     <ul>
      <li><a href="http://www.xanthir.com/talks/2011-10-06/">See slides on xanthir.com</a></li>
     </ul>
     <h3>Transcript</h3>
     <p>Tab Atkins: Hi, everybody. I'm Tab. As he said, I'm a member of the CSS Working Group. I am a member of the Google Chrome team. I'm a member of a lot of other working groups, too -- HTML, SVG, and a few others. But CSS is my main thing where I focus on.</p>
     <p>[0:19] My day job is writing specs. All the things that define how the browser's going to do. I'm the one writing several of those. I'm especially excited about several things that help write web pages better, help write applications better, rather than just decorating the page.</p>
     <p>[0:37] For the most part, I do like some decorations, but I am...what I'll be talking a little bit today here, I'm the editor of the image list Flexbox spec.</p>
     <p>[0:49] I'm one of the editors of the value spec, and there may be more if we have extra time. There's another spec or two that I am also editor of that haven't made official stuff yet. A few of the others I've contributed to. Grid layouts are very exciting to me though I've not actually written any of it.</p>
     <p>[1:06] So we'll start right in. What I'm going to talk about today are current experiments in CSS and things that will be reality in the near future.</p>
     <p>[1:15] Some of this has already been talked about like regions and so on that have implementations, experimentally at least, in at least one browser. Almost everything I say here already has an implementation in at least one browser.</p>
     <p>[1:26] It's not cross browser usable yet, but it will be in the very near future. We're talking for most of these things one to two years and they'll be good. Some of these are already implemented widely. We'll talk about it as we go along.</p>
     <p>[1:40] The only real exception is selectors. The new selectors I'll be talking about don't have implementation in any browser yet for the most part, but they are relatively simple, and they should show up pretty soon, pretty quickly.</p>
     <p>[1:52] So we're going to start with the image value spec. I really love this one because it was my very first spec to write. It's what got me into the group. I was just an ordinary web developer writing web pages for my company, and I participated in the www-style mailing list, the official public mailing list of the CSS Working Group.</p>
     <p>[2:10] I was just an ordinary person talking and asking questions and so on until eventually at some point Apple released their initial draft of Gradients in WebKit. This was written by Dave Hyatt, who's a really cool guy, but I don't think that Gradients were very well baked. It was a pretty bad syntax to start with.</p>
     <p>[2:29] So I worked out a better version of it and described it well enough that they're like, &quot;Hey! This dude can write spec text. Let's invite him into the group.&quot; And I did, starting writing the spec, or improving it from the original version which was a lot lighter, and here I am today now writing lots of specs.</p>
     <p>[2:46] So the most important thing is gradients here. This is from Lea's website. You've probably already heard Lea talk about a whole lot. I unfortunately missed that this morning. I was very sad about that, but I had to sleep more. I was still too jet-lagged when I woke up this morning to do anything.</p>
     <p>[3:02] The interesting thing about gradients is they are supported in the all of the browsers now. Sometimes only in experimental versions, but they show up in everywhere still with prefixes.</p>
     <p>[3:18] This will change very soon, though. I expect to take the image value spec to last call, which is the stage just before we can drop prefixes, either next week or the week after.</p>
     <p>[3:24] So by the end of the year, I expect, the image-value spec will be in CR, Candidate Recommendation, which means that at that point once browsers alter themselves to match the current spec, which has changed in some small ways between every browser, everybody can drop prefixes.</p>
     <p>[3:41] We can just use linear gradient and radial gradient and be happy instead of repeating all of our background rules four times.</p>
     <p>[3:48] Gradients have changed over time from the initial implementation in WebKit -- that was a completely different syntax entirely -- to the first standards-based syntax that Mozilla put in, to the latest syntax, the latest up-comer to here.</p>
     <p>[4:02] I believe IE 10 is the last one to have achieved it. All of them still differ slightly from what is currently specified because I've been tweaking it in small bits over time.</p>
     <p>[4:14] One of the most important bits is that linear gradients use bearing angles now. I was not sure exactly what to do with angles for a long time, but finally after some polls of what people think of naturally when they hear a particular angle, this works out right.</p>
     <p>[4:30] The distinction is before 0 degrees was east, 90 degrees was north, and it went around counter-clockwise like you learned for polar angles back in algebra.</p>
     <p>[4:42] Now they use these bearing angles. Those come from ship terms. 0 degrees is up, 90 degrees is east, and you go clockwise. That seems a little bit more intuitive to people, and also the clockwise rotation matches every other use of angles in CSS such as in the rotate/transform. So it's more consistent, a little bit easier to use.</p>
     <p>[4:58] The key word that you use in linear gradients has also changed slightly, again because people were slightly confused by it. The old version, the one that most of the browsers currently implement, if you said your gradient was left and then red, blue, or something, the gradient would start on the left.</p>
     <p>[5:17] This is different from saying...giving the angle where it shows where the gradient goes towards.</p>
     <p>[5:22] This caused some confusion. If you ask somebody just straight up what direction it should be, it's not that hard, but when you combine them, it gets confusing.</p>
     <p>[5:30] So this now has the direction. You now say, &quot;to left,&quot; and it...so it starts on the right and goes to the left similar to the way the angle starts somewhere and then goes to the angle that you specify.</p>
     <p>[5:41] Corner-to-corner gradients have now changed to be a magical form. Rather than being directly from one corner to the other corner and then just like straight line there with the angle of the gradient being something arbitrary based on the box, it's now set up specifically so the 50 percent point exactly touches the other two corners.</p>
     <p>[6:05] I'm sad that I don't have a demonstration on here. I left that out when I was thinking about what I need to edit my slides for. But it makes it a lot more useful for common cases.</p>
     <p>[6:13] And finally, radial gradients can take an explicit size now. Before they could only take some key words that implicitly size them based on where they started and how large the box was.</p>
     <p>[6:23] This makes it a lot easier to do a lot of advanced effects. You can simply say, &quot;OK, I want my gradient to start at this point and then be 100 pixels wide and 100 pixels tall.&quot; We're done. You don't have to worry about how big the box is possibly messing that up.</p>
     <p>[6:38] A really exciting part of image values that's currently implemented in Mozilla, and a variant of is implemented in WebKit right now, is the element function. This is a Mos Hacks article about it. The element function lets you use an arbitrary element in your page as an image. Scroll down where you can see a few things.</p>
     <p>[7:00] There's some trivial examples here. The orange paragraph is in the document, and then it's reused as a background in the next paragraph. It gets tiled across.</p>
     <p>[7:07] This is a silly example. You would never want to dot this, but down a little bit you see something that is actually useful. You have a couple of slides, a couple of videos in the content area, and then the previews on the side are generated using the element function, not static images.</p>
     <p>[7:20] So if these things change all you have to do is update the main area. You automatically get the correct slide previews on the right side, and if this is, say, a video or something that's playing, the playing version of the video will show up on the site as well giving you immediate view into what's going on.</p>
     <p>[7:39] The exciting part that I really like, scroll down a bit here, is the ability to use canvas. This is possibly the crappiest canvas picture they could have possibly done for this example. I don't even know why they chose that. There are a lot of exciting things for it.</p>
     <p>[7:52] For example, on my blog for a while I was generating the Mandelbrot set, and then based on where your mouse was in reference to that, the appropriate Julia set and superimposing it on top. This ate too much CPU so I killed it, but it was really fun to look at.</p>
     <p>[8:07] I had to do it by adding a canvas to my page, making it fill the screen, and then z-indexing it below everything else. This is a bit of abuse, and it's a little bit fragile. It's possible that other things can screw this up if I'm styling canvasses in a particular way, etc.</p>
     <p>[8:21] Using element function, though, I can simply create a canvas in script, never insert it into the document at all, and then reference it from CSS directly, drawing into it, and then seeing it as the background that I set on the body element, for example.</p>
     <p>[8:34] It's a lot cleaner design, and that one example I just gave on my blog is kind of the best case for using a real canvas. You just have a single thing that fills the whole screen and doesn't move.</p>
     <p>[8:46] If you wanted to do it on, say, a particular heading -- you want to give all your headings a nice fancy generated images or something as backgrounds -- it's very difficult, very hacky to do with real canvasses.</p>
     <p>[8:58] With the element function, though, it's trivial because you just are putting a background on, not trying to position another element relative to every heading that you have.</p>
     <p>And just in case you're wondering you can say, &quot;Hey, element, use yourself as your own background.&quot; That gets detected and wiped out, so you can't paint Sierpinski triangles with the element function. Let's [inaudible 9: [9:08] 31] over here.</p>
     <p>[9:22] The next bit that I've watered down a little bit in this version of the spec, but only slightly, is the image function. It's a souped-up URL. The URL takes a function, takes a single URL, shows the image.</p>
     <p>[9:34] Image function lets you specify several URLs, each of which will be tried in turn until it finds one that works. This is useful for A) supporting new types of images early.</p>
     <p>[9:45] In the first example, for example, I'm showing WebP and SVG. So if a browser doesn't understand how to display a WebP yet, it'll fall back, try to do the SVG. If not, it'll fall back to the PNG.</p>
     <p>[9:57] If the PNG at the end ends up 404-ing and returning an HTML page instead, that's not a valid image, either, so then it will do the final fallback to blue.</p>
     <p>[10:06] This is really good for maintaining accessibility in some cases. For example, if you have a white page, just a standard light background web page, and you have some buttons that have a dark picture background and then light text, if those images ever fail to load, you'll then have light text on a light background, nearly unreadable.</p>
     <p>[10:25] The image function with a fallback color there let's you at least say, &quot;All right. Just in case everything goes horribly wrong, I can still have something dark underneath the text.&quot;</p>
     <p>[10:42] The next example is a little bit more interesting. Some images are used in a way that they're almost like directional text. For example, if I have a background on a tweet -- say I'm displaying some tweet timeline -- and I want a little arrow as a background pointing below the name to the text or something.</p>
     <p>[10:52] If I have an RTL tweet that's going the other direction, I probably want to flip the entire background around and point the arrow in the opposite direction. Always want it to point to the start of the text.</p>
     <p>[11:01] This can't be done right now without some hackiness. Image makes it very easy. You simply declare, hey, this arrow is LTR. That's its direction. It's intended to be used as specified in LTR text.</p>
     <p>[11:14] If it ever shows up in RTL, just flip it for me, automatically go ahead and mirror it across the inline direction and don't worry me about it.</p>
     <p>[11:21] One final use that I got out of talking with Lea before is the background color in the background syntax always goes at the very bottom underneath all the images that you specify.</p>
     <p>[11:32] So if you ever wanted to just put a blue tint on an image by just putting a partially transparent blue over it or something like that, you can't do it because the color always goes underneath.</p>
     <p>[11:40] With image, though, it's a really trivial way to generate an image of a particular color, which you can then insert anywhere into the list of background layers. In this particular case I have a partially transparent blue put on top of some image so tinting the whole thing a little bit blue.</p>
     <p>[11:59] There's a few other bits specified in the spec. They are useful in limited situations, but they're good for figuring things. Image resolution is pretty interesting here. Normally, CSS assumes that all images are 96 DPI. One pixel of the image is one CSS pixel big.</p>
     <p>[12:20] This screws up royally if you are using high DPI images. If you have a 300 DPI image, when you put it in the page it's five times bigger than you think, or, no, roughly three times bigger than you think because CSS doesn't understand the DPI of it.</p>
     <p>[12:37] This is a problem because you want to use high DPI for printing, because printers have very high-density display, basically.</p>
     <p>[12:46] Image-resolution lets you tell the browser, hey, this picture is a particular resolution. Size it appropriately. This one is 300 DPI so it should be...if it's 1500 pixels wide, it should be five inches and that's it, not 15.</p>
     <p>[12:57] Image-orientation is useful for when you're taking...yeah you take photographs. You rotate the camera around, take them sideways or even upside-down sometimes, and you don't have the time or perhaps the &quot;rollability&quot; to manually re-rotate them afterwards.</p>
     <p>[13:12] Image-orientation is an easy way to rotate them with CSS rather than having to manually go in and adjust the image. You can only do 90-degree increments so it stays rectangular, but this affects the layout.</p>
     <p>[13:24] If it was previously 200 by 100, it is now 100 by 200 when you do a 90-degree rotation, unlike rotating it with a transform, which still keeps a shadow geometry that's 200 by 100 and just displays it rotated.</p>
     <p>[13:37] Object-fit and object-position are the final ones here. Normally images will automatically fill their box. If you have an image that's naturally 100 by 100 square, and you set its width and height to be 200 by 100, it just scales. It stretches.</p>
     <p>[13:52] Object-fit and object-position lets you change that behavior and then even move it around within that box. Occasionally useful, and it works for other things as well.</p>
     <p>[14:00] Like video, it uses it to achieve the letter boxing that video does whenever you have a video different from the aspect ratio of the actual file. It could be potentially used in object and iframe as well for similar uses.</p>
     <p>[14:14] Next spec I want to talk about is the list spec. This will be a real short thing because the actual functionality isn't that long, but I'm excited about it because this was originally written in 2003 by Hicksey, the guy who's now writing HTML 5.</p>
     <p>[14:27] It got abandoned when he left the CSS working group to work on HTML 5, and nobody touched it since then.</p>
     <p>[14:33] I thought that was really interesting. I picked it up, dusted it off and added some new stuff. The first important one from this is the marker pseudo. This is not implemented anywhere yet. It should be soon. It is a relatively easy thing to do.</p>
     <p>[14:45] Whenever you want to style the list bullet itself, you want to give it a particular color, for example. If you want black text on your unordered list items, but a light green bullet, right now the way to do it is to style the list item green and then put a span inside there to style the text back to black.</p>
     <p>[15:01] That's a little annoying. Here you can simply say, &quot;Hey marker, be green.&quot; in the standard way you use for pseudo-elements. You can also position it around and give it other values, whatever you want to do. You can go crazy with it. But it's just a quick way to access the marker directly.</p>
     <p>[15:17] Something little bit more interesting is the ability to find your own list styles. A trivial example I have left out here is that you can now, once people implement this appropriately, simply put a string in for list style type.</p>
     <p>[15:29] If you want, for example, just an arrow as your bullet or a star as your bullet, grab the Unicode character, pop it in list style. Done. You don't have to do anything crazy. You don't have to use before and content and all those things.</p>
     <p>[15:39] For less trivial examples, say you have three ornate leaf images that you want to cycle between as your list items. It's very simple. Counter-style leaves, declare it to be a type repeating and give it the three images as glyphs.</p>
     <p>[15:53] It will then, for the first list item, use leaf one, for the second, leaf two, et cetera. The fourth one gets leaf one again and it goes back around.</p>
     <p>[16:01] You can do numeric types. There is actually a total of, I think, seven list types to find with different construction algorithms. Binary is really trivial. Call it numeric. Give it zero and one. It will make really long list markers. But, you might want to do that.</p>
     <p>[16:17] A little bit more complex one is the additive type. This is used for the Roman numeral types, which are actually defined in the spec. This is an example given in the spec of a dice type. You may not have known Unicode contains glyphs for dice, along with everything else, except Klingon.</p>
     <p>[16:32] So this lets you easily show do a list item based on the pits showing on the dice. This, like Roman numerals, sort of just says, all right. Let's look at the last one. There are 13. To render a 13, I first look for the largest glyph that will fit. That is a six.</p>
     <p>[16:48] So we take a six out. There are seven left. Grab another six. There is one left. Grab the one. Bam. You get a six, six and a one in the list item.</p>
     <p>[16:57] So these are exciting little things, sort of niche but the spec itself defines about 100 different new list styles in terms of these counter-style rules, mostly to address lots of other languages.</p>
     <p>[17:09] The 2.1 list styles were mainly focused on English numbering and English letters, just the upper Roman and so on. There are lots of other numbering systems and lots of other alphabets in the world that could potentially be used here.</p>
     <p>[17:26] So, I have a ton of those defined, and a few others. Legal style writings sometimes use a particular way of doing lettering, where they will go A through Z then AA, BB, CC, DD, et cetera. That is definable as well.</p>
     <p>[17:40] Let's move onto the next one. Flexbox. I'm excited about Flexbox. I'm excited about all the layout specs, because the CSS working group loves you and realizes that layout for CSS sucks, because it's never been a layout language unfortunately.</p>
     <p>[17:53] We have been able to do amazing hacks with floats and table cells and everything to make it work as a layout language. But that's not right. It's not true. It is fragile.</p>
     <p>[18:04] I gave up on float-based layouts a long time ago, when I realized that it is too damn easy to break the entire page with an image that is too big.</p>
     <p>I still occasionally use display: [18:11] Table to do equal sized columns. That's alright. But it doesn't work very well if you want to have a particular ordering of content on your page that doesn't match the visual ordering.</p>
     <p>[18:23] Flexbox fixes a lot of this. It's just the first layout language designed for applications these days. So, as has been stated, there are currently three implementations. Everybody but Opera implements a version of Flexbox. They all do it buggily and they all do a slightly different subset.</p>
     <p>[18:44] But there is some version of Flexbox out there. I rewrote the whole spec and changed everything. I thought it was a good idea at the time. I still think it is, actually.</p>
     <p>[18:57] So, we are changing the matched spec. Chrome's implementation is right now being rewritten. We have thrown out the old code and put a new one in.</p>
     <p>[19:03] It will be faster. It will be less buggy. It will be magic and sunshine and rainbows. Then, soon after, hopefully we should see it in IE for example, because my coeditor is the guy who wrote the original Flexbox code in IE. It should show up everywhere else, too.</p>
     <p>[19:19] So, don't worry. This is something that will show up really quickly in the next couple of months in Chrome. Don't quote me on those numbers, especially since couple is a very fuzzy number. Somewhere between two and 20. I don't know.</p>
     <p>[19:35] So, as a basic example, you have probably all seen something like this. Flexbox lets me quickly say I want these three elements to be the same size, except when I hover. Let's just make one of them a bit bigger and the other ones it should adjust however I want.</p>
     <p>[19:46] So let's hover this guy. The other one's just squished down and take up whatever space is left over. We move over here. You see there is some weird jumpiness. That's because our current implementation of old Flexbox is buggy as hell. Don't worry about it. It shouldn't actually be like that.</p>
     <p>[20:00] But that's a basic use case. I've got a couple more examples that are more useful, more directly useful. One that I like a lot is combining an input and a button that makes the input as wide as necessary.</p>
     <p>[20:12] It's useful for doing a chat window, for example. You just want the button to size normally. You don't know how wide the page is going to be. The input should be wide enough. This is trivial with Flexbox.</p>
     <p>You simply put a wrapper that is a Flexbox. Tell the input to flex its width and you are done. The display: [20:21] block has just a little hackiness to make it actually pay attention to width, because inputs are inline by default and it doesn't work quite right.</p>
     <p>[20:38] The next one that is interesting is the horizontal nav bar. We have all done variants of this, using all sorts of different things. I've used float. I've used in-line block. I've used table cells.</p>
     <p>[20:47] All of them work to some extent. All of them suck to some extent. Flexbox does it correctly. Whatever width you have, you can fill in all five of them and make them all equal size. There are lots of variations on what you can do surprisingly.</p>
     <p>If I change this so that they didn't flex, but I used flex-pack: [20:59] justify, the spacing between them would be equivalent for all of them. This is a useful visual effect at times, rather than the items themselves being equally wide.</p>
     <p>I can also trivially turn this into a vertical bar as well. Right now I have display: [21:14] Flexbox. This is the next example. If I then simply say flex-flow: column, instead of a row, it goes vertical. So, accordion style.</p>
     <p>[21:31] Accordion is a common UI thing. You have a wrapper. You have some headings or whatnot. You click on one of them to make them active. That one expands out its content. The rest of them hide.</p>
     <p>So this is really easy with Flexbox as well. Again, make the wrapper Flexbox. Make it float a column. Use flex-pack: [21:39] start, because we are not going to be using up any flex originally. So you have to say where to put the leftover space.</p>
     <p>[21:55] Scroll down. Most of the sections are hidden. Once you make one active though, it flexes its height. That's all you need to do. No JavaScript necessary. Nothing crazy. If I had a transition on height, it would do it nice and smoothly, as well. It's very nice, very pretty, very easy to do.</p>
     <p>[22:11] The next one that I am super excited about, that has already been talked about, is the Grid Layout Spec. I geeked out hard core over the template layout spec, back when it existed. Grid is the successor to that.</p>
     <p>[22:22] It subsumes nearly all of the functionality of template, all the useful stuff and adds a bunch more. The really cool part is that there is no source-order dependence. But otherwise, it gives you the same functionality that using tables always did without the suckiness inherent in that, the non-maintainability.</p>
     <p>[22:39] I have a quick example over here, from an old blog post of mine. Visit my blog, by the way. It's awesome.</p>
     <p>[22:45] So here is a pretty standard page layout. Nothing fancy here. This is the sort of layout generically that you could see on any site on the Web.</p>
     <p>[22:52] You have a heading. You have maybe a logo in the corner. A heading. A nav. Some sidebar. A footer on the bottom. Some content, maybe some stuff over on the side. Whatever. It's relatively complex. But this is nothing contrived. You can see this sort of thing.</p>
     <p>[23:06] So, doing this with Flexbox, for example, is relatively annoying. This is roughly what the page would look like in structure with the Vbox and Hbox being just elements that are Flexbox that are rows or columns, anti-respectively.</p>
     <p>[23:21] It's lots of nested stuff. It's not very pretty and it's hard to change. If I want to do a tiny little thing. See, this is a D right here?</p>
     <p>[23:32] Say I decided I didn't want the sidebar to go all the way down. I want the footer to go all the way across instead. Changing Flexbox goes from this to this, a significant change for a tiny change in the page template.</p>
     <p>[23:43] On the other hand, if you are using grid layout, no additional structure. The only thing that gets added is a display. Oh, I forgot. This is an old blog, based on template layout. It's basically the same thing. Change display to grid template and you are pretty much done here.</p>
     <p>[24:01] You simply specify a quick ASCII version of the layout. You'll notice the letters cleverly match up, the letters that I used in the old diagram.</p>
     <p>[24:10] If I want to change that corner, this corner right here, from a D to an F, that is all I need to do. One character change for a minor change in the layout and it's done. Everything else is identical.</p>
     <p>[24:21] This makes me so excited, because, as a web page developer, who has designed probably 100 web pages over the course of my life, this is the most painful part of doing web design, anytime, doing the overall page layout.</p>
     <p>[24:36] We can use templates. We do things. But it's always hacky. It's always bad. It's always painful. This finally makes it fun and pretty.</p>
     <p>[24:44] Oh, right. OK. In the original template layout, you could specify a special cell that would take anything that wasn't explicitly positioned in. The @ determined that.</p>
     <p>[24:58] In grid layout there isn't one. But it doesn't make a lot of difference anyway. You just make sure that everything is positioned correctly. The rest of it gets hidden away. I think it's appended to the bottom maybe. Something like that.</p>
     <p>[25:12] Let's move on. The Values &amp;amp; Units spec. I and Elika Etemad, also known as fantasai on the mailing list, recently picked this one up. It's another one of those specs that was almost abandoned for several years.</p>
     <p>[25:23] We have dusted it off. We are going to finish it up right now. We expect it to go into the CR level, like I said, probably early next year. It defines all the basic values that are used across CSS. Simple things like the syntax of number, the syntax of a string, what URL means, those sorts of things.</p>
     <p>[25:40] These are just commonly used stuff. It also defines the syntax used in the property descriptors.</p>
     <p>[25:47] Let's head back to a spec. Is that a spec? Yes. OK. For example, let's go to image. Resolution. If you have ever wondered what the hell this double bar means and how it is different from single bar or &amp;amp;&amp;amp;, values defines it. For your information, double bar means you can do any of them in either order.</p>
     <p>[26:08] So I can have one, the other, both. I can't have none. At least one of them is required. So let's go forward a bit. A little bit more. More. More. More. More. More. More. More. There we go. OK.</p>
     <p>[26:27] There are some useful new units being defined. Most of these have been implemented in at least one browser now. They are relatively small and easy. So they should be done. Like I want to spend some time implementing the vw and vh, because they should be really easy to do. I just haven't gotten around to that yet.</p>
     <p>[26:44] Vw and vh units are relative to the window size. If you have ever wanted to make sure that something is no more than half the screen tall, or, something simple, if you want to make sure nothing is no more than the size of the screen, so you can set overflow hidden on it, and it won't...OK. Back up.</p>
     <p>[26:58] Example. You want a fixed display element. Position fixed. You want it to just sit on the sidebar and make sure it doesn't overflow the page, because it's fixed and you can't scroll down further to see more of it. You can do it only one way right now. Well, two ways.</p>
     <p>[27:14] You can measure the size in JavaScript and set it appropriately. Or you can make sure that the fixed position element is like the child of body and then set it to height 100%. If you wanted anywhere else in the page, that doesn't really work.</p>
     <p>[27:25] Vh let you do that. You simply say max height 100 vh and you are done. 100 vh represents the height of the window. vw similarly. 100 vw is the width of the window.</p>
     <p>[27:40] There are a lot of font relative ones, too. If you are a font geek at all, you know about the x-height of fonts. It is roughly the height of an x. Usually somewhere around .5 or .6 of an em.</p>
     <p>[27:52] This is occasionally useful when you are doing font geeky stuff. For most of us it probably won't matter too much. But it's really nice for certain use cases.</p>
     <p>[28:00] Rem is a little bit more useful when you're doing em-based designs. These have fallen a little bit out of favor these days. But they are still useful at times, when you want something to scale with the font size.</p>
     <p>[28:10] Rem is simply whatever an em would be, on the body, or actually on the HTML element, so that you can change the font size later on. Inside of a heading, you can make the heading be two lines worth of text.</p>
     <p>[28:25] That's a little annoying, when your heading can be a different size than the rest of your text. With rem it's easy. You simply say its height is two rem.</p>
     <p>[28:32] Finally, ch is useful for when you are wanting to make sure something is wide enough for a particular amount of text. Right now, I use a general rule of one em is about two characters wide. That's roughly correct. But it's not very exact.</p>
     <p>[28:48] Ch lets us simply say I want something to be able to hold 20 characters. Inputs already have a size attribute that does basically the same thing. But other elements don't have this.</p>
     <p>[29:00] If you have a constant editable and you want to make sure it is wide enough to support some numbers or something like that, just specify its width in ch and it will work, especially with monospace fonts. For variable width, it's going to be a little bit less useful. But still.</p>
     <p>[29:13] The Calc function is really cool. We finally get to do some math in CSS. There are a lot of different types of units that can be combined together. All the linked units can be added, divided, et cetera.</p>
     <p>[29:24] So, if I have ever wanted to put something, for example, 50% across, plus a little bit more for a gutter, I can do that finally, without a lot of weird hacks involving position it and then throw some margin in. So the position can be percentage and the margin is the extra pixels or whatever.</p>
     <p>[29:40] It's also useful for when you just don't want to do some tricky math. Dividing 100% by seven, that's 14.28%. I know that, just because it's a cool number. 100 divided by seven is 14 and then another 28.</p>
     <p>[29:54] But a, it's hard to read when you are looking at the actual CSS code, and it's not precise. 14.28 is an approximation to it. Depending on rounding, it may end up weird.</p>
     <p>[30:07] You have to specify enough digits that you are close enough and that is undefined. This gives you the exact value you want. The implementations can track around for you.</p>
     <p>[30:16] The attribute and cycle functions are pretty cool too. Cycle has not yet been implemented. I believe attr is implemented in IE10. We might be doing it in Chrome. I don't know. Somewhere around there.</p>
     <p>[30:28] Let's just take values directly from the HTML attributes. For example, if I have a data size attribute being used in a component or in whatever, I can say set the width to whatever value of the data size is, parse it as a number, make it a pixel length.</p>
     <p>[30:45] Then, if it doesn't exist, or if it is invalid, if I just put a string there instead of a number, it defaults to 100 pixels. Easy.</p>
     <p>[30:52] Cycle is an interesting one, too. It is really tricky to implement and specify, but really easy to understand. Every time you see the cycle value in a nested tree of things, use the next one around and then return back to the beginning.</p>
     <p>[31:07] This rule I have up here, for example, lets you implement the useful thing where you want your emphasis or your italics, just in general, when you nest them to switch back to normal.</p>
     <p>[31:18] You see this a lot in books. A quote might be in italics and then they are emphasizing inside the quote. So it switches back to normal inside of there. This lets you implement that easily, without having to do a lot of trickery with selectors.</p>
     <p>[31:29] Another interesting case is switching the bullet on a nested list. Right now, every user agents' default style sheet defines three levels of list bullets. After that it just keeps on going with squares or something.</p>
     <p>[31:43] You can use cycle to make it properly rotate through the three types forever, if you have a really deeply nested list. I would rethink that deeply nested list, by the way.</p>
     <p>[31:56] Finally, we are going to hit the new selectors in selectors four. These are not implemented anywhere, as far as I know. But they are really exciting and fun.</p>
     <p>[32:03] I won't go over all of them, because there are quite a few additions. But I'm going to head a couple of the really fun ones that will affect how you write certain things.</p>
     <p>[32:12] So, one of them is column pseudos. Whenever you're looking at an HTML table, the rows are indicated directly in the markup. If you want to know what row a table cell is in, just look for its parent. It's very simple.</p>
     <p>[32:24] Columns are indirect, because we can't represent two-dimensional things directly in a tree-based structure. There are a few, four actually, properties that you can put on the column element that will apply to the cells in there.</p>
     <p>[32:37] You can't do everything, though, for some arcane reasons revolving around exactly when layout is resolved.</p>
     <p>[32:44] Old IE did it, because they actually did lay out in tables in a weird way. Now they have switched the proper way, they are back to matching everyone else, with only four properties, which I think are background visibility and a few others.</p>
     <p>[32:56] The column selector then lets us go ahead and select elements, based on what column they are in. There are two variants, the selector-based and the number based. The first one, just col... I think it's column actually... I'm probably just writing this wrong, takes a selector for the column that you care about and it selects the cell that is in that column.</p>
     <p>[33:15] You also have a number variants, which are very simple. I just want all the cells in the second column to be bolded or underlined. TD in col 2. Done. Last col. Same thing. I think last col is probably the saddest thing I can hear.</p>
     <p>[33:31] Link pseudos. If you have ever tried to play around with the link pseudo-class you will notice it is slightly strange. Link does not apply to visited links.</p>
     <p>[33:42] This was a mistake. We recognize that he was just a bad thing to do at the time. Because if you want to style links in general, you have to use the a selector, which doesn't work in all cases, because if it's not a valid link, you will still style it, et cetera. Or you have to have two selectors in there, one that ends with link and one that ends in visited.</p>
     <p>[34:00] Any link is just our way to fix that. We can't change link at this point. There's too much legacy content using it that might be screwed up. So we are introducing a new one. Any link just matches any link, no matter what its state is.</p>
     <p>[34:12] Local link is a little bit more interesting for matching in page links. Just without any argument, it only goes to things in the exact same page, not elsewhere on your site, just that page exactly.</p>
     <p>[34:24] So any target links, anything that's like href=#top, those will be matched by local links. You can style them a little bit differently to indicate that they are within the page.</p>
     <p>[34:34] If you give a numeric argument to it, though, it goes along subsets of the path. Local link zero is the big one that looks at the whole domain. Everything within your site will match local link zero.</p>
     <p>[34:46] Similarly, if you wanted to match all the external links that are leaving your site, just match on not local link zero and it will be simple. Local link one, two et cetera, match on subsets as if you're doing multiple applications on the same website and they are differentiated by a folder path. You can use that to match for things that are within your application.</p>
     <p>[35:07] Time pseudos are little bit more interesting. We pulled those out of HTML. They were defined for video captions. We went ahead and yanked them and put them into selectors, because that's the proper place. We should be defining CSS things in a CSS spec.</p>
     <p>[35:24] This is also useful for other things, anything that is based on time. But it was originally about karaoke and similar captions and HTML videos. It's still a primary use case.</p>
     <p>[35:34] So, for example here, you can color, while you are doing karaoke and sprinting across the time. You can put all the things that have already passed in red and all the things that haven't yet been sung in white.</p>
     <p>[35:44] You cannot specify the bouncing ball. If you can figure out how, that would be great. Tell Lea and she will write up some blog post about it.</p>
     <p>[35:57] Cool. Finally we are going to hit the reference combinator. This is always bothered me. Anytime I need to do anything related to labels and their inputs, I have to twist around my markup quite a bit.</p>
     <p>[36:08] I end up doing a lot of things where I hide the input before the label. I have to put IDs on, because if I wrap the label around the input, normally easier, I have less options for styling.</p>
     <p>[36:20] The reference combinator is a new combinator, the first combinator to be added in a long time. It is the fifth one to add to the original child descended, next sibling, general next sibling, basically just anything that has an ID ref.</p>
     <p>[36:36] This is the label. For attr is the big one. There are a few other properties that take the ID of some element you can do it for. It's just the name of the attribute you are selecting on, surrounded by slashes.</p>
     <p>[36:47] Note that you, if we omitted the input at the end and just had label hover for, that doesn't work. It's just like label hover &amp;gt;. It is an invalid selector there, because this is actually a combinator, not a selector by itself.</p>
     <p>[37:01] But, with this here then, any time I hover over the label, I can outline the input that it is attached to, which otherwise requires me to have a very particular structure, like either the input inside the label or the input directly after the label, if I am putting them in tables or something that I can't even do that. This lets us do it a little bit more easily.</p>
     <p>[37:21] OK. So, since I've still got 10 minutes. I get to go on a little bit further. So, I've got a few more slides here.</p>
     <p>[37:26] CSS variables. These have been requested for a long time. Hold the applause. We can applaud all you want afterwards, believe me. I also accept personal checks. Make them out to cash.</p>
     <p>[37:41] So, variables. I'm working on that spec right now. It's been a painful thing getting it in. It's unfortunate some of the CSS working group is not Web author.</p>
     <p>[37:53] That sentence made no sense. So, most of the people in the CSS working group are browser developers. They have not written a complex website in their life.</p>
     <p>[38:05] They have mostly just done personal home pages and other small things. They don't understand a lot of the tribulations that we normal Web developers face in designing a medium to large site and trying to keep our CSS actually making sense and worthwhile.</p>
     <p>[38:19] At this point, we are mostly turning to server preprocessors like SAS or LESS or something to help handle these things. I'm trying to take some of the pressure off of that, so that we can do the most useful stuff that preprocessors do, directly in CSS. Make it a little bit more native, a little bit more accessible.</p>
     <p>[38:35] So variables... I already said that one. Let's go back actually. So, like I said, most of these features... I'm just going to do this slide. OK.</p>
     <p>[38:44] Most of these features are implemented in at least one browser. Variables is no different. We have an experimental implementation that we are working on in Chrome right now.</p>
     <p>[38:52] Nobody else has an implementation of it. But, once we develop it and everybody likes it, it should be pretty easy to convince everyone else.</p>
     <p>[39:02] We did have an older implementation, again done by Hyatt. Dave Hyatt, by the way, is a ridiculous genius hacker. But we had to rip that one out, because nobody could agree on it. That was several years ago. I'm trying again to do this thing. Like I said, it's been going on for a decade. It's kind of ridiculous.</p>
     <p>[39:18] It'll look something like this. This is the current syntax specified in the draft. It might change in the future. What are those #'s doing there? How did that even happen?</p>
     <p>[39:27] OK. Pretend that all of the variables are prefixed with a $, because that is what it should be doing. What was I thinking? OK. So anyway. You declare some variables. It's very easy. You use them the same way in the trivial way. You simply say, &quot;Hey, my color is main color,&quot; et cetera.</p>
     <p>[39:43] You can use this wherever you want. Seriously. What is with these extra $ now? Ignore the one at the end of main color. I swear to God the last time I used this slide, it did not have these things.</p>
     <p>[39:54] OK. It's very easy. I really shouldn't have to go over why this is so useful. But, just in case somebody is slow in the audience. Any design I have ever done, we have six colors we use everywhere in the entire site, all sorts of things.</p>
     <p>[40:14] If I ever want to change color, if we decide that orange is not quite the right orange we need, slightly more towards the burnt sienna type is what we should do. I have to go search-and-replace every single use of this color.</p>
     <p>[40:25] If I happen to be using the same color for two different things and I only want to change one use, that's hell, because search-and-replace doesn't work anymore. I have to individually search and then check.</p>
     <p>[40:35] I can change all that with variables. I define the color once and give it a name. I use the name instead elsewhere. Then, if I ever want to change that orange to be more like burnt sienna, I change it in one spot and we're done.</p>
     <p>[40:46] These can be any values, by the way. Right here I am using colors. It can be keywords. It can be links. It can be functions. It can be other variables. If I wanted to set create a variable of a linear gradient that used other variables as colors, just like I have in the background row right here, I can do that.</p>
     <p>[41:02] I can just say att var main gradient, set up and use the main color there. Once again, if you have cycles or something, like a variable referring to itself, possibly through which a chain of several things circle around, we can detect that. We make things invalid. It's all safe.</p>
     <p>[41:17] Next thing is nesting. If you have used any preprocessor, you know how painful or how much good this does. For example, here are a couple of easy selectors that you would see in any style sheet.</p>
     <p>[41:32] Main header H1. We go to the next one and I want to style links inside the header, we have to repeat the entire thing. If you want to do visited, you have to repeat the entire thing again.</p>
     <p>[41:40] This is error prone. If we ever change the structure of our site, such that one of these selectors has to change, everything has to change. All of them have to change simultaneously.</p>
     <p>[41:49] It's easy to make a mistake. It's easy to overlook problems and then not see it until years later, when you're looking at your design and going, &quot;I never did figure out why the visited didn't change color.&quot; Nesting lets us change all of this for the much simpler &amp;amp; sign.</p>
     <p>[42:04] Used within a style block, you start up a new selector. The &amp;amp; refers to whatever was on top. So I don't have to do anything special. Just &amp;amp; arrow a is exactly identical to the second one.</p>
     <p>Then similarly, if I just, without a space, just correctly though &amp;amp;: [42:18] visited, it refers back to the a. It's very simple and very easy. You just close them all afterwards.</p>
     <p>[42:29] This is exactly what you see in SAS and LESS, et cetera. They don't always use a particular glyph. We actually need to for arcane parsing reasons. But, this is pretty easy to look at. Cool.</p>
     <p>[42:47] Oh, it worked out really well for timing. So, all of these are just syntax sugar. Like I said, this is exactly identical to the previous long form one. You can never express something in nesting that you couldn't express in long form.</p>
     <p>[43:00] It's the same with variables. Anything you can do with a variable, you could do just writing it out explicitly. It is useful syntax sugar that was innovated by preprocessors. We learn what they have done right and can pull them back in.</p>
     <p>[43:11] This is similar to what I know Alex is going to talk about with components, about learning from the libraries and pulling them into the core platform. It's a really nice way to get a lot of free Q&amp;amp;A, without having to actually do any work yourself.</p>
     <p>[43:26] So, that is the actual end. We are going to go ahead and break for questions now. We've got about 15 minutes. So, has anybody got questions?</p>
     <p>[applause]</p>
     <p>Man 1: [43:45] Let me see if I can actually explain what I want to ask. If you take JavaScript, there's been enormous steps taken for debugging, but CSS debugging is still ridiculously hard because you only see the end results.</p>
     <p>[44:00] You cannot see how a particular selector will be applied. You cannot put break points in there. Since you're on the Chrome dev team, I was wondering if you know anything about steps being taken there.</p>
     <p>Tab: [44:13] I don't directly, but I know work is being done. Our Web Inspector, and similar efforts in other browsers, are trying their hardest to make this work as well as possible and as easily as possible.</p>
     <p>[44:24] There's a whole lot you can do in Web Inspector now that's kind of amazing that you could never have done previously that helps with debugging.</p>
     <p>[44:31] I don't know how direct it's ever going to be. You'll never probably be able to insert break points into your style sheet because that kind of doesn't make sense. Style sheets are declarative rather than imperative, run through line by line.</p>
     <p>[44:41] But we're making advancements with developer tools. So while the language itself is probably never going to do anything super useful for that to solve your problem, the browsers are because they want people to develop in them.</p>
     <p>[44:55] Some things, like variables and nesting, make your style sheet at least easier to understand so there's less debugging to be done. That will help in some ways.</p>
     <p>[45:02] So, eh-eh. It's being worked on. Not by CSS. By the browsers instead.</p>
     <p>[45:10] Next?</p>
     <p>Brucie: [45:11] , what's up?</p>
     <p>Brucie: [45:16] About every second Wednesday for the last decade, some people email the working group and ask for a parent selector. So you can, say, any paragraph that has a link in it, style the paragraph green.</p>
     <p>[45:31] For a long time, everybody said no, that's preposterous because of performance issues. I hear rumors that such a beast turns up in Selectors 4.</p>
     <p>Tab: [45:40] These rumors are true. It is in Selectors four as the matches pseudo-class. I didn't put it in here just because it's still not certain that we're going to be able to do it.</p>
     <p>[45:49] We're going to try because it's been such a request. But, ah, the performance implications are pretty horrible.</p>
     <p>[45:54] It's really easy to do from a JavaScript selector engine that already has the whole DOM available. But most selector parsing in a real browser is done as the page is being built. That makes the parent selector expensive for various reasons.</p>
     <p>[46:07] We're going to try to do that and hope that it works out as the subject indicator. Anyway, yes, we're going to try to do it. If it doesn't work out, we'll pull it. That's why I didn't talk about it. Because it's one of the things that's most volatile right now.</p>
     <p>[46:28] Anyone in the upper level? Is there anyone?</p>
     <p>[46:34] If you were in the upper level and you tried to say anything, too bad. You're slow.</p>
     <p>Man 2: [46:40] CSS variables have global scope on them, but selectors are organized in a hierarchical way. Also with nesting, it provides a sort of scope. Shouldn't you have also several different scopes for variables?</p>
     <p>Tab: [46:58] Yes, we should, but we should do it somewhat generally. Right now we're punting on the issue -- selectors are global. You can scope them somewhat in a scoped style sheet. This is a concept introduced in HTML 5. Any variables defined in there should be scoped to just that style sheet.</p>
     <p>[47:15] But a general scoping or a general name spacing we haven't done yet. Because there are actually a lot of rules that define things that should be name spaced. Like the counter style rule I talked about in lists defines a global name. Font face defines a global new font name, et cetera.</p>
     <p>[47:31] So we would like a generic name spacing mechanism for CSS that works for all the things. We just haven't done that yet. For now, prefixing your variables that works fine in JavaScript libraries for now. It's not an ideal solution, but it's workable.</p>
     <p>[47:47] We're going to go with that at the moment and then try to work on a generic scoping mechanism in the future.</p>
     <p>[47:57] Again, anyone up there? OK. That'll be all the questioning. You, let's go. Earl.</p>
     <p>Earl: [48:02] Great talk, by the way. Thank you.</p>
     <p>[48:05] A question for you. You mentioned variables. Any work on mix ins? I find them very useful with things like Sass or Stylus.</p>
     <p>Tab: [48:17] Yes. I haven't talked about mix ins in here because I haven't written that spec yet. It's not going to be planned to be written until after we do variables.</p>
     <p>[48:24] Selling variables itself was very difficult politically within the working group. We think we have success right now. We're still going to have to work pretty hard to get it completed.</p>
     <p>[48:33] Mix ins were an even harder sell. I'm hoping that after variables, and after nesting has gone through, and we've seen the value of extending the syntax a bit to help development, mix ins will be a lot easier to do.</p>
     <p>[48:47] However, we have, in Chrome at least, done experimental implementation of it. We have it working and responding in the Inspector and everything. It's pretty impressive. We just haven't ever written a spec and are not yet pursuing it. We will, though.</p>
     <p>Woman: [49:05] I have a question about any-link and local-link, those pseudo-classes. What's the difference between any-link and an A element selector with an attribute of HREF?</p>
     <p>[49:21] And what's the difference between the local-link pseudo-class and an A selector with an HREF attribute that starts from a pound sign?</p>
     <p>Tab: [49:35] Let's start with the difference between any-link and an A HREF selector. A HREF will still overmatch a little bit if you happen to have an A element with an empty HREF.</p>
     <p>Plus...Woman: [49:50] Wait. If you have an HREF...Tab: Oh, no. Empty HREF. It'll just do an empty link area.</p>
     <p>[50:01] It's really more for like... Wait. What?</p>
     <p>[50:04] I don't know if that's supposed to be intended. Divia brought up a JavaScript URL in the link. I'm not certain if that is a distinction we're making, like those are not links. Could be.</p>
     <p>[50:14] But also for other languages that may have multiple ways to define links. HTML only really has one. It has the link element as well, but that doesn't create anything in the page.</p>
     <p>[50:22] CSS is more general, and since we already have link and visited, we should just fix that properly, just as any-link.</p>
     <p>[50:34] The next question was about using local-link versus an A HREF with a prefix selector on pound. That fails if you happen to be writing the full URL out. It's a little bit easier if you just have local-link.</p>
     <p>Man 3: [51:02] Hi, Tab. You changed the Flexbox syntax to flex(numerical value). Right?</p>
     <p>Tab: [51:09] Yes.</p>
     <p>Man 3: [51:10] Is the lack of a numerical value equal to one?</p>
     <p>Tab: [51:15] Yes. In fact, the flex function that I demonstrated briefly up there can take up to three values. I only showed what you get when you just put a single number in there. That sets the positive flexibility. It'll start at zero width and then grow to fill the space.</p>
     <p>[51:34] You can put in any number, and it'll flex proportionally. Something with flex one, flex two, the flex two will be twice as big. You can put a length in there. I can say 100 pixels and one. That means it will start from 100 pixels and then flex.</p>
     <p>[51:48] This is useful if you have, say, a toolbar with an image inside of it. You want it to start from the size of the image so it never gets smaller than that, but then flex to fill the space left over. So you'll simply say flex(auto 1). It will auto-size itself and then grow from there.</p>
     <p>[52:07] Also, you can specify a second number that's negative flexibility. Because Flexbox also helps, sometimes, when you're overflowing. If something has negative flexibility, it will shrink to prevent the whole thing from overflowing.</p>
     <p>[52:22] So, yes, and I guess I just explained the whole thing. Oh, and omitting everything. If you just say flex with nothing else, it is equivalent to saying flex(1). I think that was the actual question.</p>
     <p>Man 4: [52:38] Do you know why the REM unit is attached to the HTML element and not body? Because it's not the regular workflow for developers. Usually you have body, font size, and whatever. But not HTML and font size.</p>
     <p>Tab: [52:54] It's attached to HTML because that's the root element. Generically, in any language, we want the root to be the thing to do. HTML happens to have a little special structure where body is the real root that you usually care about.</p>
     <p>[53:07] But it's not a big deal. If you have a font size on the body, just move it up to HTML instead. It'll work identically, and then REM will work.</p>
     <p>[53:19] All right. That's how I like it.</p>
     <p>Man 5: [53:22] Hello. I've been looking at this. This question is going to sound awfully snarky because writing less CSS or less code in general was a good thing. But this is starting to look like PostScript.</p>
     <p>Tab: [53:35] Yeah, I once looked at a variable rule. I was like, Jesus Christ, there's so much punctuation here I'm writing Perl.</p>
     <p>[53:43] That's something that we're trying to avoid. There are high-value additions to the syntax we can make that we think are worth the additional complexity in the syntax. But we won't go crazy.</p>
     <p>[53:55] Pre-processors can go as psycho as they want in doing whatever they think is a good idea. We're trying to be conservative and just take the couple of things that are really super valuable and are worth the new syntax for it.</p>
     <p>[54:06] It's always a balance, and we think we're making the right choice right now. But it will inevitably make things a little bit more complicated to read, at the benefit of the style sheet as a whole being easier to read.</p>
     <p>Man 6: [54:20] I saw that there are a lot of things being pulled in from these pre-processor libraries. At least in the CSS selectors, the new version 4, I haven't seen anything being pulled in from JavaScript libraries.</p>
     <p>[54:36] Namely, jQuery has a ton of custom selectors that are actually very, very useful and a lot of developers use. I don't see that in this specification at all. Getting those standardized seems like it would be really useful.</p>
     <p>Tab: [54:51] True. I suspect that most of that is simply the editors don't use jQuery very much. The main editor of that one is Fantasai, and she doesn't use jQuery or other selector engines.</p>
     <p>[55:04] It would be one of those things where somebody that wants to spend the time arguing about it on the list comes around and argues about it on the list.</p>
     <p>[55:14] I would like to, but I have so many specs on my belt right now that any time I mention trying to talk about a new spec, people shout me down. It's like, &quot;Shut up and do your work.&quot;</p>
     <p>[55:27] It's something that probably somebody sufficiently motivated just needs to come around the list and start arguing for them. John?</p>
     <p>John: [55:35] No.</p>
     <p>Tab: [laughs] [55:37] The list is public, www.style@w3.org. You can subscribe to it at lists.w3.org. Just go find it. Anyone can read it. Anyone can post to it. The only limitation on people being members... Members can write specs; everybody can write emails.</p>
     <p>[55:55] Anybody who wants to contribute, wants to talk about these things, feel free. Please do so, especially if you have really good use cases.</p>
     <p>[56:02] You can show, &quot;Hey, this sort of thing would be way easier if I had these new selectors that are borrowed from jQuery.&quot; Or borrowed from some other selector engine. That sort of thing.</p>
     <p>Man 7: [56:17] With the variables, can you use variables inside media queries? When they start working, do they override that variable for the whole style sheet, or are they scoped to the media query?</p>
     <p>Tab: [56:31] That's excellent. Yes. If you put a variable inside of a media query, or inside of a style sheet that has a media attribute on its link, they are indeed only active when that media query matches.</p>
     <p>[56:43] So you can specifically say whenever the width is 800 pixels, I want my columns to be this wide with a gutter of this wide. Set up two variables for that. When the page is bigger than that, I want larger columns, smaller gutter. Whatever. And they'll work appropriately. So yes.</p>
     <p>Man 7: [56:57] Does it affect uses of that variable outside the media query?</p>
     <p>Tab: [56:59] Yes.</p>
     <p>Man 7: [57:00] So they're not scoped. They're global to the whole style sheet.</p>
     <p>Tab: [57:05] Variables are still global, but the media query limits when they're active or not.</p>
     <p>[57:21] Anybody else? All right. Oh, OK, we got a question.</p>
     <p>Man 8: [57:27] My question is we have the old import statement when you import old style sheets. Is there any work being done on making that where you can put the import statement into a selector?</p>
     <p>[57:39] So if you find a certain element on a page, this would require this kind of style sheet. So on these huge websites that have thousands of lines of styles, you don't have to load everything at once because you don't know which styles you have to use.</p>
     <p>Tab: [57:53] No, I don't think any thought has been given to that, actually. There's a little bit. There's an aspect of your question in the mix ins proposal that SAS does, but only a little bit.</p>
     <p>[58:05] Your general question about conditionally loading style sheets based on the presence of stuff, I don't believe that anybody has given any thought to that. That's interesting. I'll put that on my list of things to care about once I get done with these current ones.</p>
     <p>[58:23] Anyone else?</p>
     <p>Man 9: [58:25] Unfortunately, we don't have any time for questions.</p>
     <p>Tab: [58:27] OK, sounds good.</p>
     <p>Man 9: [58:29] Thank you very much. Thanks everybody.</p>
     <p>[applause]</p>
     <p>[58:29]</p>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2011/sessions/the-future-of-css-tab-atkins.md" id="comment">
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
