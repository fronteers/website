<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>CSS3 by Håkon Wium Lie · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p348">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>CSS3 by Håkon Wium Lie</h2>
     <h3>Videos</h3>
     <video width="480" height="270" src="/_downloads/2010/hakon-wium-lie-css3.webm" controls>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2010/hakon-wium-lie-css3.webm">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="http://vimeo.com/15775937">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2010/hakon-wium-lie-css3.webm">Download video</a> (WebM, 160MB)</li>
      <li><a href="/_downloads/2010/hakon-wium-lie-css3.ogv">Download video</a> (OGV, 60MB)</li>
     </ul>
     <h3>Transcript</h3>
     <p>Håkon Wium Lie:  [0:04] Thank you so much. It's great to be here. Wonderful place. I wonder if there was a pipe organ in these things here, if it ever used to have pipe organs. When I'm sick and tired of computers I'm going to build a pipe organ. That's my long term project. [0:20] But today I'm going to speak about something that's been my kind of long term project, has been an important part of my life for the last 16 years or so, CSS.</p>
     <p>[0:29] Now we come to CSS3 and we're going to go through a little bit of the history, show you some pictures from the early days, and also speak about what can be used with CSS3 today. In between I will probably show that I have an emotional attachment to this. It's kind of my baby. But I still hope it can be useful for others as well. And hopefully there will be some time at the end to throw tomatoes at me or other things you may want to contribute.</p>
     <p>[1:02] I'm really a stand in here though. The guy who should have been here is Brendan Eich. I only came in here into the program a week ago when Brendan couldn't come for other reasons. I'm very happy to be a stand in for Brendan. I have a lot of respect for Brendan.</p>
     <p>[1:20] Brendan is, as you know, the father of JavaScript, which along with HTML and CSS kind of has become the web platform. Since I also, myself, have kind of a father of role, people thought it was OK to invite me instead. Maybe they asked this guy first. I don't know. This is the father of HTML, Tim Berners Lee, in a video from 1994 at CERN.</p>
     <p>[1:52] I'm going to show some more pictures of CERN later. They could also have invited this guy. He's Dutch, Bert Bos. He's the co creator of CSS. I started it, but Bert joined our mailing list, he had these wonderful ideas and together we sat down one summer and specced out CSS1, basically. So I'm very indebted to all these people and many more in the web community.</p>
     <p>[2:21] Let me show you some pictures first. This is from CERN. This is 1994. This is the first public web terminal that was set up. It was sort of set up in the corner there. CERN is a physics laboratory. They don't really do... Well, they do a lot of computers, but that's not their main purpose. They're there to do physics and there's probably something very dangerous going through these pipes. I don't know. I'm not a physicist myself.</p>
     <p>[2:46] We found some room for that terminal and we even found a slogan for it.</p>
     <p>[laughter]</p>
     <p>Håkon:  [2:55] &quot;You click. We do the rest.&quot; I think now we can safely say that the web didn't become popular because of the marketing.</p>
     <p>[laughter]</p>
     <p>Håkon:  [3:10] These were some of the pipes. Tim Berners Lee, when he was going to his office every day he had to walk past these things. My hypothesis here is that when Tim created the tags in HTML, he looked at these things. You know in HTML you have H1, H2, H3...</p>
     <p>[laughter]</p>
     <p>Håkon:  [3:30] ...five, six, some other ones.</p>
     <p>[laughter]</p>
     <p>Håkon:  [3:36] That's a joke. I'm glad you laughed in the right place.</p>
     <p>[laughter]</p>
     <p>Håkon:  [3:39] But HTML is fantastic. It's the simple little language. It has a simple structure. It has universal semantics. You can display. You can show percent HTML on any kind of device. And you can teach it to somebody in, roughly, 15 minutes. In 15 minutes a computer literate person can grab the basic concepts of HTML. So that was great. [4:05] When I came to CERN that's what we did and we could create pages like this, here shown an early mosaic screen shot. For scientists that's good. You can organize your information, structure it, communicate it to others. But it doesn't look so great really. It looks kind of boring.</p>
     <p>[4:29] And if you stick your head outside the CERN laboratory, if you go outside, you see a fantastic world, a very visual world. This is one of the most beautiful places I know. This is close to Geneva. You have the Mont Blanc, the Alps in the background. If you turn 180 degrees you have the Jura Mountains behind you.</p>
     <p>[4:51] It's fantastically beautiful and I think the human mind is really wired for beauty more than it's wired for structure. For scientists it's very important that something is correct, much more important that it's correct than it's beautiful. For most other people they'd rather look at beautiful pictures than to look at structured information.</p>
     <p>[5:09] So when the authors came to the web they wanted to create beautiful pages, they wanted to do typography, they wanted to do desktop publishing. They wanted to say something about fonts and colors and typography. Then they came to HTML and they found they couldn't do that. HTML doesn't have tags to do typography.</p>
     <p>[5:30] They had a few like italics and bold and somebody added a font tag and such, but that wasn't really the plan and authors were not happy. So they started making images of their text because if you make an image of text you can code any color, any font you want, of course.</p>
     <p>[5:48] The problems with images, we know, is that they take a lot of space, they're hard to translate, it's very hard to index. It's impossible to read it out through a machine to a blind person. There's all these negative things associated with images.</p>
     <p>[6:01] So if you stop that slide towards an image only web some of us thought we should do style sheets instead. I put forward a proposal for a web based style sheet language called CSS which is equally simple to HTML. You can pretty much describe CSS in 15 minutes as well.</p>
     <p>[6:23] So these are meant to be cousins, to live next to each other and I'm sure all of you know both these languages and I'm not going to go through it. I will, though, just briefly show some examples of what CSS can do. We're very conscious of trying to make sure that CSS1 was simple. So we only included the things that we knew authors really needed in order to do basic stuff.  So in CSS you can do these things. You can set fonts and colors and backgrounds and borders and such.</p>
     <p>[7:01] Then CSS2 came along and there were more requests. By then we had a dialogue with designers and they said, &quot;We want text shadows. That's something we can do in Photoshop. We want to be able to do it.&quot; So we added it to CSS2, which came two years later in 1998. It hasn't been really usable until now because it wasn't implemented at IE. Now it is implemented and now we can start using it. It has some interesting features.</p>
     <p>[7:29] This is still selectable text if you create halo effects and such. The code is very simple. Basically it's all one liners. Simplicity was always a basic design premise in CSS. And if you find out that your CSS code is horrendously complex, it's either because you're working around some bug in some browser, you have my sympathy then. Or it's because you have a problem with your own mark up, your own structures, or maybe your own CSS. It should really be simple. If you have more than a screen full doing something, maybe you should go and revisit.</p>
     <p>[8:08] This could change a little bit with CSS3 though because we now have so many requests from people to do things. They all believe this is very important and in order for the web to progress we need to do this.</p>
     <p>[8:24] There's probably more than 30 specs on the W3C sites, CSS3 specs, and not all of them are going to succeed. Some of them are going to be left dead on the side of the road. But some will succeed and I think we're seeing an outline of which ones will be there tomorrow to be used.</p>
     <p>[8:43] I'm going to go through some of them. One is an old classic. Actually, this was a request for this one early on in the CSS1 days as well. Me and my aesthetic thinking, I'm not a designer. You have to know that. But to me those rounded things; they look like something from the 1970s. I said, &quot;Nobody is ever going to need rounded borders on something.&quot;</p>
     <p>[laughter]</p>
     <p>Håkon:  [9:11] I was obviously wrong on that. I have retracted and now I think border radius is probably the one CSS3 property that's used the most out there.</p>
     <p>[9:23] It's quite elegant, I think, just by changing a little attribute, a little number up here. From being 40 pixel on all sides, you add all the numbers to say 150 pixels is the radius in the horizontal dimension. Then the vertical dimension you have 50 pixels.</p>
     <p>[9:42] So you can set these things and just by a few characters different code you get a very different visual expression. So prototyping this is very easy. And compared to some of the techniques that were developed to do rounded border, of course, this will save you time by a factor of 100 or so.</p>
     <p>[10:04] Then there's box shadow which is very similar to text shadow. You can also add a few parameters here to make it fuzzy, give it a color. Not give it X and Y coordinates, but you now have sort of a stencil effect, a fuzzy spray paint thing going on there. Did you see that one?</p>
     <p>[10:26] Here's an interesting one. By adding the keyword inset to the box shadow, you can make the box shadow move from the outside to the inside. It totally changes the visual expression here. It's so easy to do. Just like I started out by saying we started doing CSS to not have the web go to an image only web.</p>
     <p>[10:52] This is also in the same philosophy. Here we're trying to save the web from a lot of stylistic pictures, a lot of images that are created to have these kind of fuzziness effect. We don't really need those. We can replace them with a simple language. These are one liners, almost all of the examples I'm showing here.</p>
     <p>[11:10] Here it's actually a two liner because you have a comma separated list of values on box shadow where you have both inset and outset. Then you get this fuzzy effect that you see on the screen here.</p>
     <p>[11:23] Then when you start combining these things, of course, you end up with an enormous number of possibilities. Here's border radius combined with box shadow. This is a real world example. This is the menu that you're shown when you go to Apple.com. At the top there you have a menu. It looks pretty good, but it's all done in images.</p>
     <p>[11:50] I don't know if you can see it. It's a little small, maybe, but you see just a little bit of rounded corners here, a little bit of shadow. The text has a little bit of 3D effect and then there's the gradient across there. There's a rounded field,  search field on the side</p>
     <p>[12:08] And the good news is that all of this, perhaps with the exception of the Apple logo, can be now done in CSS3. Here I've coded it in CSS3 and there's not a single image here at all. This is all now selectable text. If I highlight some of the things I've done, I've added some box shadow, a fuzzy one. There's a little bit of shadow underneath the letters here as well to give it that 3D effect. Then I've done rounded border radius on the search field.</p>
     <p>[12:46] So by using these new techniques in CSS3 in the backgrounds and border module, we can actually take real world examples and recode them and get rid of all the images.</p>
     <p>[12:59] I said there were no pictures there. There's actually one in the corner, the Opera logo, but we can do this one in CSS as well. It so happens that the Opera logo comes with only rounded things. And by carefully crafting a set of like 10 div elements and giving them a border, a border radius, a little gradient, a little shadow, you can actually create this entirely in CSS3. It's not gonna to work for the Apple logo or the Microsoft or Google or Mozilla logos I'm afraid. Opera is given special treatment here. But I think it's pretty cool.</p>
     <p>[13:44] I've shown you one of those specifications that are coming out. Here are the other ones that I'd like to say something about. There's probably... I think these six are going to be important. They're all going to change the web. They're going to change the look of the web. They're going to be available.</p>
     <p>[14:03] They have been implemented already. They're out there in browsers. They may not have full coverage, yet. Typically, IE is a little behind, but we see that IE9 is catching up, as well, and adding support for some of these things, too. This is sort of the menu that I can offer you as designers of things you can start using, stuff you can start experimenting with in your pages.</p>
     <p>[14:28] Let's do fonts first. Fonts are very important. We've had all these fonts and related properties in CSS from CSS1, it looks at size and family and slanting and weight, etc., and that's great. If you worked hard to have interoperable implementations of those so that one almost to the pixel level would get the same font rendition on all web pages. The problem, of course, was that the fonts that were available...</p>
     <p>[15:01] Sorry, that froze somehow, that's not what I'm going to show. There we are.</p>
     <p>[15:12] The problem, of course, is that the fonts we have available or that have been available to us have been very limited. These are like the four fonts that Microsoft released in the mid 1990s. There's about 10 of them, and I think that we all know them by heart by now. We know what they look like. They're very good. Microsoft did a great job, and they did a great job in releasing it to everyone so that all platforms could use them. So these are now universally available on Linux, Mac, Windows, and have been used to great effect.</p>
     <p>[15:43] But we're getting a little sick and tired of them now. If we go to the CSS Zen Garden where they take the boring looking HTML page and turn it into a fantastic looking styled page, we see that fonts are often what they hard code. They use fonts in background images to achieve the effects they want.</p>
     <p>[16:10] Sometimes, that's necessary. For example, we can't do vertical text like we have on the left there in CSS yet. Even in the W3C specification, you have this little bar on the left side with vertical text, which is an image. So we're never going to eradicate text in images totally, but we can do a lot.</p>
     <p>[16:31] For example, this page, I think can be entirely done in fonts, if we have the right fonts available. You can certainly do what we see as text there. You can probably even do the graphics. Since this is just one color graphics, you can probably encode that as a glyph in the font and put it into the private sector in Unicode, likewise with the flowers in the background there. I think you can do everything in one font here if you try. Somebody should try that.</p>
     <p>[17:06] So the point is if we had access to more fonts then the web would change the look and feel of it. That's what we're getting now with CSS3. It was actually part of CSS2 as well to have web fonts where you can take a simple style sheet, point to the font that's out there on the web, and just start using it. It was in CSS2, and it was implemented by Microsoft and Netscape, but unfortunately they chose different formats. Neither of them supported TrueType, which even then, was the most common format.</p>
     <p>[17:40] That's now changing. All browsers now support TrueType fonts on the web, and there's also emerging support for WOFF, which is a compressed font format, which is being developed by W3C. For designers, that means by adding two lines of code, they can get access to and start using those fonts today, like the Angel font, which I'm selecting here.</p>
     <p>[18:08] I'm doing two things. First, I'm importing a style sheet. This style sheet contains a list of all of Dieter Steffmann, the German font designer. He's made hundreds of fonts available for free to use on the web or wherever. So this import fetches a style sheet, which lists all of the URLs to those fonts, and it also lists, it gives them a name, says what kind of weight they have, what kind of slanting they have, etc.</p>
     <p>[18:36] So we're not going to go into details of what's behind that style sheet. For users, it's very simple just to import it. Then, you can start using... On the font family property, you can just start using the names.</p>
     <p>[18:51] There are so many fonts available, thousands, that are freely usable. Not all of them will work for everything. I wouldn't recommend you use this on your CV, for example. It's not very readable, but it's very creative, and as a headline, it will work. It will show a different set of design. It will convey something that a designer wants to say about the page.</p>
     <p>[19:21] If you're afraid of the web turning into this terrible place where all the amateur designers go crazy and use all sorts of fonts, you can actually turn it off. You can turn off CSS or turn off web fonts, and you will have the text there. The text is available behind here and can be copied and pasted.</p>
     <p>[19:46] Multi column layouts, I'm going to show you something. Let's see. Multi column layouts has been a little sore point for me because I've been the editor for that specification for more than 10 years. Then Firefox came along and implemented it, and Safari came along and implemented it, but Opera wasn't there. I'm very happy today to show publicly for the first time a screenshot of Opera also doing multi column layouts.</p>
     <p>[applause]</p>
     <p>Håkon:  [20:26] We're going to get there after a decade of hard work. I think multi column layout is needed for printed publications. It's also going to be very useful for on screen. We're not quite sure how it's going to be used, and there are some problems. [20:39] For example, if the content of the multi column element has overflow, if there's more content than will fit a page, is it going to overflow to the right currently? So that's something that has been discussed a lot in the CSS working group. I think we found the solution that will work, but I look forward to hearing what you think. You can already try this out, as I said, in Firefox and Chrome and Safari, and Opera will be coming along, as well.</p>
     <p>[21:12] Then, there is transitions. That was mentioned in the previous talk. These are small animations. They're not quite animations, there's another thing called animations, but they basically will do animations and do them in a very elegant CSS code, I would say. Here's the code behind our examples.</p>
     <p>[21:37] So basically, what goes on here is that we start by setting a duration of this small animation. I call it an animation although the specs are something else. We set how long the animation's going to last. Here, we set it to one second. Then we describe the state of the element when it's being hovered. So when I hover this element, I give it a different color, a different background color, and a different letter spacing.</p>
     <p>[22:06] So when it goes into the hovered state, it will change from black to white to red on black over the course of one second. So the browser will then at various points in between will actually compute what the frame should look like and show that. Exactly how many frames should be computed? That's not for the CSS code to decide; that's something that the implementation can find out itself. It will depend on probably the processing power, etc.</p>
     <p>[22:40] That's one of the beautiful things about doing this in CSS instead of doing it in JavaScript because if you were doing it in JavaScript, if you were programming this, then you would actually have to do all of those different key frames yourself. This is much easier. You just declare what you want it to be at the beginning and end, and then you set it to be soft over one second.</p>
     <p>[23:03] So this is a good example of how CSS and JavaScript work together. We try to take the stuff that people are doing in JavaScript... If we see something that's very popular, like the hover effect...</p>
     <p>[23:18] The hover effect was initially done in JavaScript. That was Brendan's domain. But then we saw this as really very useful, and people are really using it to good effect. So we said, &quot;OK, maybe we should take this into CSS, make it declarative, make it easier for people to use so that you don't have to become a JavaScript programmer, so that it will work in the browser even when JavaScript is turned off.&quot;</p>
     <p>[23:44] So hover was the first example of that, and transitions is another example of that. I think we're going to see more stuff. People are always experimenting with JavaScript, and the things that people will do the most will either end up in the library, which becomes so ubiquitous that it's there all the time, or we'll take it into CSS.</p>
     <p>[24:08] Media queries, that's another specification that's been going on for a very long time. I'm going to give you a little demonstration of media queries. Media queries make the style sheet conscious of its environment. Here we have on page...</p>
     <p>[24:31] This is my home page, actually, where I'm using media queries, and I've set the style sheet. In the style sheet, I say something about the width of the page so that... Did you see that? Something changed there. When I have room to have that cute little blue border on the side and then I have text horizontally left and right, I do so, but when I don't have room for that, I take it away.</p>
     <p>[25:01] Here I'm highlighting the fact that I'm adding a red border instead of that blue thing. I'm sure you, as designers, can do better. So basically, you apply a different style sheet and you set when this should take it to effect. So when this goes into a very small effect, it's CSS I can use to display property as well. So you can see, this is dangerous stuff, powerful, dangerous stuff. Don't show it to your kids.</p>
     <p>That was the media queries code. Again, very simple. You have an @media, and you set... It looks like a CSS property, it isn't really a property, it's called a media descriptor, and you give it a logical expression there. Then, the stuff inside the quotes: apply or not.</p>
     <p>[26:01] Anne van Kesteren, my dear colleague at Opera, he's actually the editor of the media queries. Where are you Anne? Anne is there. OK, good. So if you have problems with media queries, go to him and not to me.</p>
     <p>[laughter]</p>
     <p>[26:16] This is another favorite of mine, generated content of page media, DCPM. This is basically everything that one needs to do. Printing on the web has been put into that specification. I truly think printing is important still. We're not going to print a whole lot of books in the future, but we're going to print some.</p>
     <p>[26:37] When I wrote a book along with Bernie about CSS some years ago, we first printed it in Frame Maker, the first and second edition. For the third edition, which came in 1990, when was it? I don't remember the year, some years ago, though. We said, &quot;We want to figure out how to do this in CSS. We want to write our book in HTML, we want to style it in CSS, and what comes out in the end, we should send to the printer,&quot; and it worked. You can see it. We have the book here.</p>
     <p>[27:15] We did have to do a few things, though. First, we had to add some stuff to CSS. Then we had to find some software to process that CSS. None of the browsers are good enough for printing so you can't do a book through them. Browsers are actually very bad at printing. I'm sure you know that. I think that's a reason why people don't print so much from the web. Maybe that's a good thing. We shouldn't really be doing too much printing, but sometimes, you really want to print something nice, and then you need to have this functionality.</p>
     <p>[27:45] This is another example of a book that has been generated from the web and has been put into print. This is the German Wikipedia. What they did is take about 20% of all the articles in German. I think this was two years back. Then they took roughly the first three sentences of each article. It turned into a really big book. It probably would have been three times, five times the size now if they did that today. This is growing very quickly. But even then, it turned into a really, really big book. I don't know if they used any CSS for that. Probably not.</p>
     <p>[28:20] But it shows a trend. In the beginning, we took content from paper and put it onto the Web. In the future, it's going to be the other way around. Whenever you want something to be printed, whether it's a letter or a book or something, it's going to come from the Web. The Web is going to be the source of all information, the document repository for humanity, where everything will be, and then we will take it from there into other forms when you need them.</p>
     <p>[28:49] So some of the challenges with printing are that you split things into pages. You need to have stuff like page numbers. You need to have an index that points to page numbers. So in the top left there you see an index. Then come some dotted lines    leaders they are called in typography. Then comes the page number. You can't put that page number into the source code because you don't know where the processor is going to split the pages. You don't know where it's going to end up. So this has to be computed as the text is being formatted.</p>
     <p>[29:27] Then you have the multicol thing, which I already showed you. Here is a multicol within multicol. Then there are footnotes. On the side you have some marks that printers use to cut the paper. Things like this haven't been part of the Web. It hasn't been part of CSS until we sat down and said, &quot;What is missing in order for us to use this for printing?&quot;</p>
     <p>[29:52] On the second page we have another example. We have a thing that has been floated to the bottom of the page. In CSS1 and two you have float left and right. Now you can also float things to the top and bottom. Then you have running headers and footers    at the top here is an example    and a page number at the bottom.</p>
     <p>[30:12] I'm going to give a few examples of what we did to CSS to add these kinds of things. The first one is very simple. Basically we had an @page rule, which gives us a container to set properties without damaging anything else. Here you can set your preferred size. You can set those crop and cross marks and you can set the margin on the page, etc.</p>
     <p>[30:35] Then you can add content into the margin by saying, I think still reasonably legible, @bottomleft. The content of that bottom left thing should be the page counter. This is a hardcoded counter that is found in CSS, which is incremented automatically for every page there is. If you want to have the page counter in different places on the left and right pages, you have to use basically a selector here to select &quot;all left pages&quot; and &quot;all right pages.&quot;</p>
     <p>[31:15] Then you can set running headers and footers by specifying a string in the style sheet. But that's not the best way to do it because you don't want to tie that style sheet to that HTML code. It's better to find the title of the document in the HTML file, so that you can reuse the CSS style sheet, and that we do by stealing it from the title element. The title element is there for that purpose. It's very well suited.</p>
     <p>[31:43] So we introduce string set as a property. We set the variable title. I call it a variable. It's not really a variable, but it feels like a variable. So we set the title variable to have the content of the title element. Then we can refer to that later by using the string functional notation. Are you with me on this? Are you following me? Yeah? OK.</p>
     <p>[32:11] I'm going to give you one example to see if this gets too weird. I mean, I started out by saying we are minimalist in CSS land. We don't want things to be too complex. This is just about as complex as things are ever going to get in CSS. This is how we do the table of contents. So let me try and go through this page and see if you follow.</p>
     <p>[32:36] We have the table of contents in the markup. It's in the UL element and it points to the various chapters: Chapter one, Chapter two, etc. So we represent that index as a set of hyperlinks. They point to where that chapter begins. Now, what we would like to have are leaders    all these dots. We don't know how many dots there are, but we do want dots so that the eye can follow. Then we want a page number to appear, a page number at the end of the link.</p>
     <p>[33:07] So what we do here is that we say after the A element    here is the A element    we have generated content. That content is first leaders. This says, add as many dots as you find room for. Then you add one more thing. You add the page counter at the target at the end of the link. The link is found in the href attribute. I had to jump a little back and forward there to explain it. But are you with me? Can this be decoded? Yeah?</p>
     <p>[33:49] It works. We have implemented it. The index came out beautifully. We didn't have to make any corrections like we normally had to do. So it kind of works. But I think this shows you how far we are willing to take CSS. If you want anything more complex than this, you probably have to go to JavaScript or something.</p>
     <p>[34:08] I think that's a reasonable division of labor. Prints are actually implemented in the latest beta. They are implemented for JavaScript two in the batch formatters so you can actually generate the table of contents from JavaScript. You don't have to have this UL element hardcoded in the HTML file from the beginning.</p>
     <p>[34:28] So I think we are seeing some interesting things happening where CSS, JavaScript and HTML together form a platform. That platform stretches outside, not only to screens, not only to mobile phones, but also to other things: games, consoles, printers, anything really. We are going to see many, many interesting devices come out.</p>
     <p>[34:53] So that completes my talk on CSS3. I have to say something about testing, because testing is going to be essential for this. There are so many visual features and they are not all going to come out right from the hands of the implementers.</p>
     <p>[35:06] Here is one test page that I worked on for a while. I think this looks much better now if you try it in browsers today. But it shows the kind of problems that designers will be facing and that they will have to code around or we had better fix this very quickly so that we don't have to start coding around things.</p>
     <p>[35:26] It doesn't really matter which browser it is. The point is that we need to start testing and start using this and point out where the bugs are. I think you have a role to play there, as being web pioneers, to start using these features. Blog about the problems you experience so that the programmers can go and fix their browsers.</p>
     <p>[35:55] Sometimes browsers don't really want to fix bugs. I know that from Opera I have to say and also from other browsers. When Microsoft finally started doing browsers again after five years of silence, some of us thought we should give them a challenge. We knew about all the problems that were there. We wanted to make sure that they fixed all those problems.</p>
     <p>[36:21] How do we go about doing that? You can ask them to do it. You can beg them to do it. You can pray for them to do it. But in the end, we found the way that I think worked quite well. That was a combination of the stick and the carrot. This page that we created    Acid2    showed up like this when the browser does it correctly. You can see that it's right. In a tenth of a second you see that this looks OK.</p>
     <p>[36:54] When this came out, all the browsers had problems rendering it. We found that we shouldn't just target this to Microsoft. That wouldn't be fair, because all the browsers have bugs. So we looked at problems in all browsers and we tried to code as many as possible of them into one page. This is how the Acid2 page looked in IE6 I think it must have been when that came out. It looks pretty bloody.</p>
     <p>[37:24] The other browsers also looked weird and bloody, not quite as bad. This was IE7 I believe. I may be off by one version number. I'm not sure. But it looks a little better. You can sort of see there is a face there. It's not smiling yet. He's got something dripping from his chin. But it's getting there. [laughter]</p>
     <p>Håkon:  [37:45] The fantastic thing happened that in IE8 it looks perfect. So by shaming the browser vendor, by shaming Microsoft into, &quot;Why does it look so ugly in your browser?&quot; we sort of made them fix the bugs. Of course, we weren't able to make them fix all the bugs. There are limits to what you can do on one page. But we fixed some of the very important bugs that IE had had for years and about which designers had been complaining.</p>
     <p>[38:13] I think we are going to have to do the same kind of stuff for CSS3. Acid2 is there. Acid3 is there as well. It tests a lot of JavaScript. So we sort of have something going there I think. If you want to take part in discussions about CSS and the future development, here is the mailing list for that.</p>
     <p>[38:33] I hope to leave little time for questions too. But I'd like to say something that I think is important. In addition to the technical stuff we are doing, because we are all doing specs and pages and codes and such, I also think we should be conscious of where the Web is heading.</p>
     <p>[38:52] I'm going to give you a small example of a project that I was lucky enough to stumble across in the early days of the Web, while I was at CERN. At that point in time, the laws of Norway    we pay our governments to create laws    the laws were not available for free. You had to pay a subscription fee in order to get electronic access to the laws.</p>
     <p>[39:15] Some of us thought that wasn't right. So we started scanning and typing the laws of Norway and put them out on the Web. I remember sitting there one day in the office. Here is the office. There is my computer on the left there. That's Tim's NextBox in the middle and Henry Friedrich Nielsen's SUN Station on the right. We were sharing an office.</p>
     <p>[39:42] So Tim had to pass me to get his computer. There was one day, when I was sitting doing this law stuff, he looked at my screen. He said, &quot;Håkon, what are you doing?&quot; I should have been working on CSS and stuff. I said, &quot;Well, I'm publishing illegally the laws of Norway on CERN's computers.&quot;</p>
     <p>[laughter]</p>
     <p>Håkon:  [40:09] Tim said, &quot;Do you need more disk space?&quot;</p>
     <p>[laughter]</p>
     <p>Håkon:  [40:14] Tim of course has been very active. I'm sure some of you will see his role in promoting open access to data through governments. He has especially been active in the UK, but also other places. He has a fantastic talk that you can go and look at.</p>
     <p>[40:31] Now, 15 years after those first projects, we now have more conscious governments. But I still think they need to be pushed a little. I don't know what it's like in the Netherlands. Do you have access to your laws? You have free access? Do you have access to maps for free? Maybe. I'm sure the Netherlands is way ahead of many other countries.</p>
     <p>[40:57] Norway you would think so, too. It's a small country, quite rich, quite transparent. We still have problems with maps for example. We don't have free access to map data, even though 95% of the money that they use for funding all this data comes from public sources.</p>
     <p>[41:16] So I think as technologists, we should also be conscious of where the Web is heading. We have seen Wikipedia do great stuff. That's really good. I also think we should have a focus on open data as well. So if some of you can help in that effort in your country, in your favorite country, that would be good.</p>
     <p>[41:37] Before I end, I'd like to show a few slides on another development, which I find to be very important. It happens to be about and Opera product. I'm not really here to plug Opera today. But Opera Mini is giving us a lot of data that I'd like to share with you.</p>
     <p>[41:58] I'm sure many of you also have Opera Mini yourself in your pockets. If so, you share that with many other people on the planet. We are currently running about 30 billion pages through Opera Mini every month. Opera Mini works by Opera having servers processing pages in the fixed network. Then we send those pages on requests in a compressed binary form to mobile phones. You can run Opera Mini on just about any mobile phone out there, low end mobile phone even.</p>
     <p>[42:38] So people across the planet can download this small Java thingy, run it on their computer. When they type in a URL or click on a link or something, the request goes to our servers. So we have fantastic statistics. We can see where these people come from and we can see what they are doing.</p>
     <p>[42:54] We don't really collect personal information. Good, good. I'm glad you are on  guard here. We don't really collect personal information. But we do collect things about, for example, the top 20 countries. I think this list will surprise you. It's not going to be the U.S. and Japan and the other rich countries on top necessarily. Indonesia is number one. You find countries like South Africa, Kenya, Malaysia and Bangladesh in the top 20.</p>
     <p>[43:29] The United States made it only to the top 10 of this list when we released Opera Mini for the iPhone. Then the U.S. got into number 10, edging Nigeria out. So this shows how the Web has the potential of changing the world. It can be made into a truly World Wide Web, if you just give people access through the devices that they have and can afford. A lot of people in the developing world have mobile phones. But they don't have computers necessarily. They may not even have the power to run their computer.</p>
     <p>[44:02] If we look at what people do on the Web though, that's also very interesting. Here is Indonesia. They do Facebook, too. In a way, it's a little disappointing. You kind of have this idea of a poor fisherman in a poor country going out to sea, catching some fish and then using technology to find out which market to go to. Should he head East or West? Where can he get the best price for his catch today?</p>
     <p>[44:32] It turns out that's not really what people are using it for. They are using it for many of the same things that we do in our part of the world. Google is number two there, though. So I think a lot of the searches people make will send them to other sites that don't necessarily end up on the top 10 sites.</p>
     <p>[44:51] So I don't think it's maybe quite as bad as it looks. Because I do think there should be diversity on the Web. We shouldn't just go to the same global web pages, all of us. I think that will be a very boring Web if we end up like this.</p>
     <p>[45:06] Another interesting column is the handsets that are being used. It seems that Nokia has a grip on the Indonesian market. [laughter]</p>
     <p>Håkon:  [45:17] There are not many iPhones there. The world is different. This is not Android or iPhone land. The world has many more Nokia devices. Nokia is still outselling everyone else.</p>
     <p>[45:33] Syria    another country, which you think of maybe as very close, and it is I'm sure in many ways. But they do use Opera Mini there and they do go to places. Here is actually one interesting one    number seven    SyrianEducation.org.sy. That's the page. I don't know what it's about. But it has education in it. So I'm hopeful.</p>
     <p>[45:54] Two words at the end    how long is this thing going to last? I think it's going to last for 500 years. The number is not random. 500 years back, in Europe Johannes Gutenberg invented the printing press. That totally changed Europe. We had the Renaissance. We had the Reformation. We had the Industrial Revolution.</p>
     <p>[46:15] The printing press really put Europe to the forefront of the Web. It was a backwater place in the Middle Ages. But the printing press made it, by distributing information, by giving out information to people, who otherwise didn't have it, it turned Europe around. I think the Web is really the only invention that can be compared to the printing press in terms of importance for information distribution.</p>
     <p>[46:44] If we had a lot of Gutenberg's Bibles here today, we would still know how to use it. It has pages. We turn the pages. We read it. We may choose a different font for it. But it is still a user interface that we can relate to.</p>
     <p>[47:00] I think the same will be said about web pages. I think web pages that we write today will still be readable in 500 years. Therefore, we must ensure that the standards we use, the languages, the HTML, the CSS, the JavaScript and whatever comes after, that they can contain all the information we want to put out on the Web, that it can last for a long time, that there are no patents or any other usage restrictions on them.</p>
     <p>[47:28] I'm proud that CSS has that role today, along with HTML and JavaScript. Fortunately I'm not going to be around 500 years. So nobody can tell me I was wrong on that point. But I am a Web optimist and I plan to spend the rest of my life there. I hope many of you will be there, too. Thank you.</p>
     <p>[applause]</p>
     <p>Håkon:  [48:00] I think we maybe have a few minutes left, do we? Seven minutes. Should I...? There is a question here in the front row. Yeah.</p>
     <p>Man 1:  [48:19] With layouts on the Web, with floats and all that we have been trying out there, with the specs, templates and the grids and all that, where do you see this going? Do you think there is another option or a brighter future for layout on the Web?</p>
     <p>Håkon:  [48:37] It's a good question. I think we all agree that we need better tools for layout on the Web. We can do some things, but we can't do everything. We want designs to be scalable and easy to specify, etc.</p>
     <p>[48:51] So there are a couple of interesting specifications being developed there. You mentioned template based layout. There is also a grid based layout. Maybe the two are merging. The reason why I didn't talk about them is that these are quite far in advance. There has been one implementation of the template based layout thing I think in JavaScript, where somebody reads it and simulates it.</p>
     <p>[49:12] So it's being worked on. But it's not advanced enough that I would recommend anyone to start using it. But if you want to be part of that, and make sure that your requirements are met, etc., then you should be on the mailing list and be part of the discussions.</p>
     <p>Man 2:  [49:36] With media queries it's possible to do style for small screens and mobile devices.</p>
     <p>Håkon:  [49:39] Yes.</p>
     <p>Man 2:  [49:41] But now, with the iPhone and Android and iPad, you're getting touch devices as well. It's really difficult to hit small links and small buttons. Is there any work on getting media queries for touch devices?</p>
     <p>Håkon:  [49:57] It's an interesting question. I think that would be very natural to do. There have also been proposals whether we could do something like hover for touch events. I'm not sure what the list would be and I'm not sure exactly what the syntax would be of your proposal. I said you should ask Anne about media queries, didn't I? I think it's his problem. What do you think Anne? Should we do that?</p>
     <p>Anne van Kesteren:  [50:27] We have been considering to do that    some capability like that, so you can actually just hover... It is a capability of the device, which will be added at some point.</p>
     <p>Håkon:  [50:36] Yeah. But it's not in the current spec or in the drafts at the moment.</p>
     <p>Anne:  [50:40] Correct. Yeah. They’re experimental implementations, but by vendors basically. We haven't quite figured out what to do. Yeah.</p>
     <p>Håkon:  [50:51] There are more questions here? There? A couple, yeah? Go ahead.</p>
     <p>Man 3:  [50:57] I've got a question. You say there is a long future for the Web.</p>
     <p>Håkon:  [51:01] Yes.</p>
     <p>Man 3:  [51:02] I'm over here by the way.</p>
     <p>Håkon:  [51:05] There you go.</p>
     <p>[laughter]</p>
     <p>Man 3:  [51:07] So if we need the Web for another 500 years or so, do you share Stephen Pemberton's view that we need something more rigid, such as XHTML2?</p>
     <p>Håkon:  [51:20] Right. Yeah. Stephen is a dear friend of mine and he of course lives right over in the Bloemengracht area in Amsterdam. [51:28] I think Stephen and I probably differ a little bit on that. Stephen was spearheading the XHTML efforts. One used the XML syntax combined with the HTML semantics and then added more stuff on top of that. They were basically starting out from the grammar sites, starting out based on XML, starting out with something new.</p>
     <p>[51:52] Whereas the Web continued to evolve based on HTML four. At some point we had a clash    not a personal clash    but there was a meeting in W3C, where the two groups kinda …. clashed I think is the word. We decided we can't live together in the same organization anymore. That's how the WHAT Working Group was started. We left W3C to continue the development of HTML, because we saw that we couldn't really kill all the sheep and start with goats instead.</p>
     <p>[52:25] We had to continue to do what we are doing. There's no such thing as spring cleaning on the Web. You can't turn it off, clean up everything and turn it back on again. You had to continue from where you are.</p>
     <p>[52:37] Now, that doesn't mean you shouldn't start doing experiments and doing new things. I think there was a point when XHTML had a chance. I think it was killed by the strictness of the XML syntax. That wasn't really Stephen Pemberton's fault. XML syntax is draconian. It says once you have done an error, you should stop processing the document. I think that's terrible in the Web world. We don't really want to harass users and authors in that way. So I think I differ with Stephen on that one.</p>
     <p>[53:10] I do think though, as in the long term here, we are going to need more things. We are going to need more stylistic things, like what we are doing with CSS3 now. Of course, we are only 15 years into this. If we have a 500 year span, there are going to be a lot of things that happen. My reason for saying 500 years though is that we must ensure that we don't put in those short term hacks now. We should always look to the future, while at the same time building on what we have today.</p>
     <p>[53:39] We cannot disregard those first 15 years. They are there. They are going to be there for a very, very long time. Whatever you type into Wikipedia today is certainly going to live for 500 years.</p>
     <p>[53:53] There’s somebody...? Are you somewhere?</p>
     <p>Man 4:  [53:57] Other way. [laughs]</p>
     <p>Håkon:  [54:00] I like it blind. [laughs]</p>
     <p>Man 4:  [54:03] So CSS media queries are very powerful. But one criticism has been that it downloads all the full size images and let's say HTML5 video as well. Do you think it would be possible if we could set image source and video source through CSS then the media query could change it to be something smaller or more appropriate?</p>
     <p>Håkon:  [54:26] Well, you can certain do it through media queries, like I showed you with my picture changing radically as it became smaller, right? Now, the problem with that was that my browser still had to load all of the images. You could potentially work your way around that. For example, in an Opera Mini setting, we could evaluate that media query in our servers instead of in the phone. [54:50] I don't think you should put too many links into CSS. I don't think that should be where the URL is. I don't think that is where the tags should be, like I showed you with the running headers. It's much better for that to be in HTML. I think the URLs should be in HTML as well.</p>
     <p>[55:07] Except the font stuff that I showed    links to the font file should be in CSS, because it is clearly stylistic. You must try to keep those separate    the content on one side and the styling of the content on the other side. It's not always that there is a very clear cut line between them. But I do believe in that separation.</p>
     <p>[55:27] So I guess my answer is no. But maybe Anne will qualify this, because this is a media query thing. No? OK. Good.</p>
     <p>[55:37] That was the last question. OK. Thanks a lot.</p>
     <p>[applause]<br>[55:40]</p>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2010/sessions/css3-hakon-wium-lie.md" id="comment">
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
      <li><a href="/congres/2010/sessions/vector-graphics-for-the-web-brad-neuberg">Vector Graphics for the Web by Brad Neuberg</a></li>
      <li class="current"><a href="/congres/2010/sessions/css3-hakon-wium-lie" class="current">CSS3 by Håkon Wium Lie</a></li>
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
