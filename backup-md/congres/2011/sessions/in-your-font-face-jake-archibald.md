<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>In your @font-face by Jake Archibald · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p543">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>In your @font-face by Jake Archibald</h2>
     <h3>Video</h3>
     <video width="640" height="360" src="/_downloads/2011/jake-archibald-in-your-font-face.webm" controls>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2011/jake-archibald-in-your-font-face.webm">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="http://vimeo.com/33154573">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2011/jake-archibald-in-your-font-face.webm">Download video</a> (WebM, 113MB)</li>
     </ul>
     <h3>Slides</h3>
     <ul>
      <li><a href="http://speakerdeck.com/u/jaffathecake/p/in-your-font-face">See slides on Speaker Deck</a></li>
     </ul>
     <h3>Transcript</h3>
     <p>Jake Archibald: [0:19] ...talking to a few people yesterday and today around the conference, and people have sort of remembered my talk from last year quite a lot. People are coming up to me and saying, &quot;Hey, are you going to do more stuff with cocks?&quot; And then I was thinking, &quot;I don't think I actually am.&quot; [0:24] So I've decided to fix that, so I've changed my first slide. I'm going to go with that. OK?</p>
     <p>[audience laughs]</p>
     <p>Jake: [0:32] Oh, shit! I've left this on. Fuck, fuck, fuck. Why did no one tell me I left my manki..? [audience laughs]</p>
     <p>Jake: [0:39] Thank you sir. [audience applauds]</p>
     <p>Jake: [0:44] It was too restrictive to do a full talk in. [0:51] Anyway, yes. This is not making me look very intelligent, let's go back.</p>
     <p>[1:10] OK. So I was doing research into the fastest and most compatible way we can serve fonts over the Internet, and how we can improve things like the rendering on particular operating systems. But as I researched it, I got really interested in some of the legal side, and some of the history of fonts, and it sort of became enough to write a presentation on, which is what I'm doing here.</p>
     <p>[1:36] I was chatting about it with my other half, Jen. She doesn't work in the web. She doesn't work in anything technical. But I was excitingly explaining ligatures to her. I was saying, &quot;Oh, yeah, ligatures are great. Sometimes you'll have more than one character in a row, and the font will have a special glyph for those two characters, or those four characters, or whatever. It's really exciting&quot; Afterwards there was a small silence and then she just said to me, &quot;Is that interesting?&quot;</p>
     <p>[audience laughs]</p>
     <p>Jake: [1:43] I do believe that if you have to ask if something's interesting, it probably means it isn't, so ligatures are out for this talk. [audience sighs]</p>
     <p>Jake: [1:50] But first, let's go back in time. Let's go back in time to the late '80s. [2:09] Back in the '80s most fonts were bitmaps. So the font was like a bit of zeroes and ones, where one would render pixel in whatever color you had selected, and zero would leave a space, effectively transparent. That meant every size of the font needed its own set of bitmaps. Some systems would scale between them, but that didn't look awfully good.</p>
     <p>[2:19] The reason it did this is because they're really fast to render. They're in the language of the graphics card all ready, and that's why they were used on all the machines, and low-power devices, and mobile phones.</p>
     <p>[2:22] Can anyone name this particular bitmap font?</p>
     <p>[silence]</p>
     <p>Jake: [2:28] Quite disappointed. [laughs] [2:40] Anyway, the computer would have the bitmap fonts installed on it, whereas printers, they would have vector fonts installed because bitmap fonts look terrible when they're printed. Then this company, they dominated the market of printer fonts with their format PostScript.</p>
     <p>[2:59] But then in the late '80s, early '90s, this company, they came in, Apple. They developed their own font called TrueType font format. Now, like PostScript it was a vector, but it existed on the computer rather than the printer. And that's where the license for the font was. It was sent to the printer just in time for printing.</p>
     <p>[audience laughs]</p>
     <p>Jake: [3:09] It was font war between the two companies. I imagine it was probably actually lawyers rather than lasers, but I think this version is more interesting. [3:22] Then another company joined the battle in 1991, and that's these guys, Microsoft. They joined on the side of Apple, if you can imagine such a thing. They developed TrueType fonts such as Times New Roman and Arial. Fonts that we still have today.</p>
     <p>[3:49] The weight of these two companies versus one, TrueType won out, Adobe were defeated. TrueType got most of the market. But then Microsoft, they expanded TrueType into OpenType, and they added some new features. One of those features was the ability to put postscript style outlines inside the TrueType structure and font. That brought everyone together, and everyone was friends again, and I don't think they've fought since.</p>
     <p>[4:00] But we've got thousands of fonts in these formats now, in both TrueType and OpenType. People use these terms pretty interchangeably. That's good, because fonts can communicate more than the text itself.</p>
     <p>[4:17] Movie posters are a great example of this, because they're all copying each other. You get these font clichés that build up, because they want to be associated with a film that they think is similar or successful. My favorite is the big red font film, where when I see this, I know that the film is stupid and aimed at idiots.</p>
     <p>[4:41] It's not just movie posters. In the 2008 American elections, Obama used quite a modern sans serif font called Gotham for his publications. McCain and Palin, they used a font called Optima, which is also sans serif, but it has quite serif like qualities. It's more old fashioned. I don't mean to spoil it for anyone, but Obama won the election.</p>
     <p>[5:03] Was it all down to the font? I hope not, but it's very telling that the Republicans have started using Gotham in some of their publications since. Even Sarah Palin herself is using a very, very similar font on her website. I'm sure she didn't pick it herself, otherwise it would be in crayon and the D would be backwards. She should probably use a big red font, right? [laughter]</p>
     <p>[5:36] Maybe when fonts are used correctly, the effect can be quite subliminal, but when the wrong font is used, it's anything but subliminal. It screams out at you. This is my favorite example. This is Surrey Police in the UK taking serious sexual assault not quite seriously enough in my opinion. These are the popular examples, because here the text is right, it's the correct text, but the font is wrong.</p>
     <p>[6:05] It does happen the other way around as well. Captain America, I command you to, to what do you command us to do? Oh dear. [laughter] This word didn't have the same meaning in '50s America when Marvel made this. Though the text is wrong, it's confused the meaning, we can tell by the font, we can tell what it's supposed to mean. It's the sound of the Frisbee, it's onomatopoeia.</p>
     <p>[6:25] It's clear that having the right font is really important, but without being able to send users a particular font, we're kind of stuck with these guys, the web-safe fonts. They're designed to look good on really small sizes on originally low end devices. None of them are really designed for headings except Impact. We're sick of these fonts, we're sick of Impact.</p>
     <p>[6:39] Historically, we've used things like images to get around this, we're sending people images of the headings, but that doesn't scale. That doesn't scale graphically, that doesn't scale in terms of maintainability. There is a solution, and I'm going to share that with you today.</p>
     <p>[7:10] Put this in the head of your document. This is a link to a font in truedoc format. Then you can use it on your page, you can use it on your fonttags. You can also use it in CSS as well, if you think that's going to catch on. That was a solution in Netscape Navigator 4. It also worked in IE3, via plugin. That was 17 years ago. 17 years, we had the first implementation of web fonts on the web. But that didn't gain any momentum with the other browser, which was Internet Explorer, even with the plugin.</p>
     <p>[7:44] Microsoft solved the problem again in 1997, with Internet Explorer 4. Their solution was based on the private CSS2 draft. You're loading the font in CSS and using it in CSS, which is a much better system. Microsoft, like Netscape, they developed their own font format. Netscape had TrueDoc, whereas here we've got embedded OpenType. A couple of months later, the CSS two draft goes public. It looks very similar, it has a couple of editions. You can specify multiple URL's for different formats of the fonts, and you can use this format function to say what format is that URL.</p>
     <p>[7:58] The format function doesn't need to be there, but without it, the browser has to download each URL in series until it finds one that it supports. That kicks performance right in the balls. Especially if it has to go through three or four fonts before it can get there.</p>
     <p>[8:11] Now, you would expect, maybe, something like this to use MIME types. That's technically how we express the format of data in a file. Most of the fonts, formats that we use have MIME types. That's why the spec invented its own naming scheme.</p>
     <p>[8:36] The spec talks about OpenType and TrueType and into more exotic formats that we don't see so much anymore. Like Intellifont, PostScript. It even mentions Netscape's TrueDoc format. The spec makes no mention of Microsoft's embedded OpenType, and I think that's deliberate. It was dropped from the spec. It didn't appear in CSS 2.1, and that was in 2002, due to lack of interest in the browser vendors. They couldn't agree on a form.</p>
     <p>[8:50] The ideas have moved to a CSS free web font spec, which was eventually merged with CSS free fonts and that's where it is today. It looks like this. There's only minor changes from the CSS two version, and it's still a draft, but browsers started implementing this one.</p>
     <p>[9:02] OK. What's the support for font-face and which browsers go for what format?</p>
     <p>[9:27] If we take the formatt that we had before. Internet Explorer 9, it goes for the EOT, the rest of the desktop browsers, they go for the WOFF. Internet Explorer nine also supports WOFF, but the browser will go for the first font format that it finds on its support. It's downloaded the EOT already. Safari 5.1 supports WOFF. Before that, it would go for the TTF, which is also downloaded by Android and iOS devices.</p>
     <p>[9:35] Internet Explorer nine kind of supports TTF, but it treats some embedding permissions differently. You can have a problem in IE with TTF.</p>
     <p>[9:59] Finally there's SVG. Probably don't need this anymore. It's for iOS devices less than 4.2. It depends on your mileage. Have a look at what your users are using. Internet Explorer 6, 7, and 8, they download this. Now, what I mean by that, instead of requesting some font .EOT, they treat the whole CSS rule [laughter] as its URL. That will give it a 404 instead of a font.</p>
     <p>[10:08] Now, as Marvel Comics might put it, this is Internet Explorer really wanking us in the face.</p>
     <p>[laughter]</p>
     <p>[10:10] Really hard with a big Frisbee of standards non-compliance.</p>
     <p>[laughter]</p>
     <p>[10:15] How do we solve this? One popular way is to add a question mark into the URL. That's not really solving the problem. It still treats this as the URL, but this part of it becomes the query string. That gets around the 404 issue.</p>
     <p>[10:42] However, if you have particularly long URL's for your fonts, and a lot of web services tend to or some of them are base-64 encoded, you might run into this bug. This is where Internet Explorer won't go near URL's, which are 2,008 free characters in length.</p>
     <p>[10:58] It's a silent failure. It's really difficult to debug. I've encountered this one in the wild with fonts. To work around this, don't use a question mark. Use a hash symbol or a pound symbol. Once again, it's just working around the problem, but now most of the URL is treated as the fragment and it's not part of the request.</p>
     <p>[11:20] We're almost sorted. We've almost got it working in everything, but unfortunately this game existed. Now, this is Sonic and Knuckles with Sonic three plugged into it. Now, when you did this, you were playing Sonic 3, but some elements of Sonic and Knuckles were patched in, and it was a cool thing to do, because you could... it created a unique game. It was kind of familiar, but there was little new bits to find.</p>
     <p>[11:38] Microsoft really liked this idea, and they took inspiration from it when they gave us Compatibility View in Internet Explorers eight and 9. It's, you're playing Internet Explorer 8, but it's plugged into IE9, and it's kind of like IE8, but some of the features of IE9 creep in.</p>
     <p>[12:08] Internet Explorer nine fixes this problem, this parsing error. That's fixed in IE9, and they failed to emulate it in Compatibility Mode. So Internet Explorer eight engine sees this as the URL, which is fine, you could say it's better, but we were relying on that bug to make it work, because Internet Explorer eight doesn't understand format, it doesn't understand the other URLs, and the, as CSS Spec says, if you encounter something in a rule you don't understand, ignore the whole rule. So this doesn't work in Compatibility Mode.</p>
     <p>[12:27] To fix this, we take advantage of CSS parsing rules. We add two sources. So the rules in CSS is you use the last one that you understand, so compatibility view will go for the first one, since it doesn't understand the second, all of our other browsers will go for the second. If you're forcing IE9 to Super Standards Mode, you don't need this fix.</p>
     <p>Oh, and if your font's on a different domain to your page, then you need to add this header to the font: [12:37] Access-Control-Allow-Origin* for some browsers, notably Firefox.</p>
     <p>[12:47] It's taken us 17 years to go from the browser implementing webfonts to this, to this mess.</p>
     <p>[13:03] In 17 years, some people have managed to be born, they've learned to control their own bladder. They've started and finished compulsory education, and that includes learning maths and science from scratch. At the same time, this is the best that we could do for font embedding.</p>
     <p>[13:22] We've now got all the browsers using fonts, at least. How are the fonts downloaded? Which browser do you think is going to be the fastest? This is not interactive. We did the interactive bit earlier, when I asked you what font was on the screen, and no one said anything. The rest of it is just me talking.</p>
     <p>[13:35] Here's the HTML, three paragraphs, the middle one is going to be really, really big, and I'm going to make it load slow too to exaggerate some effects. The final paragraph only contains two letters.</p>
     <p>[13:57] Here's the CSS, the first paragraph uses a webfont, and the final paragraph uses two. Font two only contains a glyph for the uppercase A. Font three only contains a glyph for the lowercase B. The browser is going to have to use both fonts in combination to render that last sentence. It should look like this when it's rendered properly. Not all browsers do render it properly, we'll look at the failures later on.</p>
     <p>[14:18] How quickly does it download? The webkit browsers behave the same. Our HTML file takes about six seconds to download, because I'm making that middle paragraph load slowly. The first font comes in pretty much straight away, it takes about three seconds. I'm making the font load slowly as well to exaggerate things. The second font comes in after the page has downloaded.</p>
     <p>[14:44] Window.unload fires at this point in webkit, and that's a bug, because it shouldn't. It should wait for all the fonts to come in before we unload fires. Font three downloads after font two. In total, it takes about 13 seconds. If we compare this to Firefox, Firefox downloads font two and font three in parallel, and that saves about three seconds, compared to webkit. They also fire unload correctly. Well done, those guys.</p>
     <p>[15:06] What about Internet Explorer? IE downloads everything in parallel. That makes it four seconds faster than Firefox. That makes it seven seconds faster than WebKit. I mean credit where credit's due. I mean it's a fairly contrived test and I understand that, but it's great to see Internet Explorer being good at something.</p>
     <p>[laughter]</p>
     <p>[15:08] Unfortunately, it's cheating. It's cheating massively. The problem here is that Internet Explorer jumps the start. IE will start downloading a font as soon as it sees a declaration in CSS. That's why they were downloading at the start. That's not how we expect things to work. We don't expect that to work with imagery.</p>
     <p>[15:42] We want things to download when they're used on the page. That's why it was cheating. Because of that, don't send font-face rules for pages, which don't use them. If you've got a large site and you're using fonts just on a few pages, only send the declarations for those pages, or else your user is downloading things they don't need. Well, you're Internet Explorer users, anyway.</p>
     <p>[15:57] If your font isn't cachable, for some you might be sending it cache-control/no-cache, which I was when I was testing. Internet Explorer is so efficient at not caching the font, it will delete it before it gets a chance to render it.</p>
     <p>[laughter]</p>
     <p>[16:00] This took me an hour to work out what was going on. It was a terrible bug. Make your teach cachable. It's fairly common sense, right? Because all of your imagery, all of your JavaScript, all of your CSS should be far future caching. That would fix that.</p>
     <p>[16:23] To be fair, these bugs are fixed in IE 9. They're 6, 7, and eight that they exist in. IE nine behaves more like Firefox.</p>
     <p>[16:49] Who's the real winner, then? It's Chrome and Safari. They're the slowest, but they're also doing it right. Chrome and Safari, they don't download font three until they know they need it. Font two might contain all the characters it needs. It might contain the A and the B, in which case Chrome won't go and get font three, but it needs to download font two before it knows that. That's why they're downloaded in series, rather than in parallel.</p>
     <p>[17:01] Firefox and IE nine will download both fonts, even if they don't need the second one, but it is the slowest. There is a way we can get around that. We have font-face rule. We've got a font-family in our source.</p>
     <p>[17:25] We can also add unicode range. Unicode range is a series of unicode points and ranges to tell it exactly what characters are supported by that font, or which characters from that font you want to use. By doing this, the download turns to that. It does the same as Firefox, because we've told it ahead of time, &quot;This font you're about to download only contains a glyph uppercase A, and that's U .41.&quot; Now it knows, well I'm probably going to need that other font as well.&quot; It gets faster.</p>
     <p>[17:34] If you're using web fonts, which only have a few characters, or they're only used in a few places, then using unicode range can save you a download.</p>
     <p>[17:43] Now I can feel the burning of the Opera people's eyes on me, that I've not included them in this competition. Let's look at that.</p>
     <p>[18:02] This is Opera 11.5 on the Mac. Downloads the HTML file in about six seconds and then it downloads the first .EOT. Opera doesn't support .EOT, so this is a bit odd, which is why it has to go and get the .WOFF afterwards. It's not really looking at the format hints. It goes and get the second and third .EOT's. It gets the second .WOFF, kind of at the same time, which is odd.</p>
     <p>[18:05] It's like it's already thinking, &quot;Mm I'm probably not going to understand this .EOT. I'm sort of learning.&quot;</p>
     <p>[laughter]</p>
     <p>[18:06] When it's finished downloading the third .EOT, it downloads it again. Why not?</p>
     <p>[laughter]</p>
     <p>[18:11] Maybe I'll understand it this time.</p>
     <p>[laughter]</p>
     <p>[18:13] Finally gets the .WOFF and when does Window.OnLoad fire? It never does. This is absolutely as mad as a bag of spiders. It's on the weird, and that only happens on the Mac, as well. It doesn't happen in Windows.</p>
     <p>[18:32] The Opera guys are pretty smart. I'm sure they'll get it fixed soon. Bruce, do you want to get your laptop out and just... thank you.</p>
     <p>[laughter]</p>
     <p>Man 1: [18:54] There's one more thing we can do to improve performance when we're downloading, and that's using local. So it's there, it's there on the third line. What I'm telling it here is try and use the font that's on the user's system before you download the web font. And this is particularly useful for fonts which are included in some operating systems and not others, or maybe fonts which are included with like something like Office, which a lot of people have. [19:19] But it fails on i867 and Android. You can tweak the syntax to make it work, but it's also historically buggy in Chrome on Mac, especially if you're using other font managers other than the default. You'll either get just default serif text, or sometimes you'll get that. And this is kind of regressed a few times in Chrome, but that doesn't really matter, because it is just plain unreliable anyway.</p>
     <p>[19:34] You don't know that the fonts on the user's system is anything like the one that you would otherwise send them. This is Zapfino. It comes with OS X, but it doesn't come with Windows, it doesn't come with Linux distributions. So it makes it a perfect candidate for local.</p>
     <p>[20:00] The one on the top there is the one served by a web font service that I'm using that I don't like, so I'm not going to mention them. And the one below that is the default one which ships with OS X. And they're at the same font size, according to CSS, they just have wildly different metrics. So if we use local in this instance, the site would be massively broken, depending on whether you designed it for the web font service one or the OS X default.</p>
     <p>[20:24] So excellent. We can get rid of the images for headings, we can get rid of SIFR and Cufon hacks, but if we're not careful, we'll end up slowing things down even more for the user than those hacks would be, and that's because font files can be pretty big. The Ubuntu Regular .ttf is 352k. And because you need to use a different font for different weights, so say you were going to use Bold and Regular, that's 700k.</p>
     <p>[20:33] That's the best part of a megabyte just for fonts, and that's ridiculous. That's not just kicking performance in the nuts, that's like ripping them off and throwing them in a volcano or something.</p>
     <p>[20:46] But there is some... we can do stuff about this. The bulk of a font is in its outlines. So it's got all of the ones that you're familiar with, and then loads and loads and loads more.</p>
     <p>[21:06] Now, I'm an ignorant Brit, so things like accents and umlauts frighten me in my brain. I'm worried they might fall off and cause unnecessary punctuation. But no matter what your internationalization requirements are, you probably don't need all of these characters. You certainly probably don't need them on the same page. &quot;Certainly probably,&quot; that doesn't make sense.</p>
     <p>[21:22] I'm sure most of you have used Font Squirrel before, and this will let you specify exactly what characters you want to keep, and it will spit out the font in .svg, .ttf, .woff, and .eot, all the formats you need. But if you want a manual, more open-source way of doing it, there is another app called FontForge.</p>
     <p>[21:38] This is FontForge. It's built on top of X, which is why it's as pretty as toenails, but it is open-source, and it's a really good way of getting, you know, deep into fonts and pulling them apart and seeing how they work. And it's cross-platform, you can even get it working on Windows via Cygwin, if you want to do that.</p>
     <p>[21:51] But pulling a font apart really makes you feel like a man. It's like sharpening a pencil with a knife or, you know, building a table or something like that. And we can use FontForge to just sort out the characters we want and get rid of the rest.</p>
     <p>[22:07] And it can output .svg, .woff, and .ttf. It can't output .eot, but there are other tools for that. There's one called EOTFast, which is cross-platform, I believe, and there's a Microsoft one called Microsoft WEFT, which sounds like an air freshener, but it isn't.</p>
     <p>[22:35] I'm going to keep these characters, these ones highlighted in yellow, just really basic ones. But once we do that, that takes the font down to 90k, so that's a real saving. But what happens if you use a character that's outside of that range, what if we need something with an accent or an umlaut or whatever? WebKit's downloading behavior that we saw before, it's the only one which adheres to the CSS3 spec in terms of only downloading a font when you really need it. That's not a WebKit innovation, that is actually in the spec.</p>
     <p>[22:51] The sooner the other brands get it the better, because we can use it to solve this problem. I can specify font 'ubuntu' and use unicode-range to say hey, it's just going to support these characters, and that's the ones that I highlighted in yellow before. And I can define another font 'ubuntu-extended' that has a unicode-range and characters for the rest, the bigger download.</p>
     <p>[23:13] Then we can specify both on a heading. What WebKit will do here is it will only download Ubuntu-extended if you use a character that's out of range. In most cases, you will get a much smaller, nicer download. Unfortunately, in browsers such as Firefox, Opera, they're going to download both, whether you use both or not, so there's a shame.</p>
     <p>[23:34] We can also use web fonts to fill gaps in systems support, so here I'm doing sans-serif stix. Stix is a font which specializes in scientific symbols, in math symbols, which don't exist in the default set or might not in some users' operating systems. Using the WebKit method, it will only download stix if you use one of those characters that's out of range of sans-serif.</p>
     <p>[23:54] Now, I can't remember what I was going to say. Never mind. So yeah, It's just used here as a poly-fill. It will only be downloaded if you use it. Stix does have standard characters for A to Zed, zero to nine or whatever. But it's a really horrible serif font, so by using this method we get the nice system sans-serif and we only use stix when we actually need it.</p>
     <p>[24:15] We already know that Firefox is going to download more than it has to and so are some of the other browsers. But there are more problems than that. Here's a fallback stress test. In the first example, I've got font1 falling back to sans-serif, second example, falling back from one web font to another to sans-serif. Finally here, I've got a stix example using a high code point italic omega symbol which I guess is used for something specific.</p>
     <p>[24:44] Most browsers get it right. Here are the exceptions, IE7 and Opera on Windows. They always fall back to sans-serif, to serif even, no matter what you specify. But it gets worse. Internet Explorer six and Opera on Mac, they fall back to nothing or a little squiggle, depending on how it's feeling at the time. It's quite odd that they both do the same. They all fail on the stix example. Opera gets particularly artistic in some of its attempts. [audience laughs]</p>
     <p>[25:06] So this is Internet Explorer and Opera as Marvel comics might put it, really wanking us all in the face really hard with a big Frisbee of inaccessibility. We can't use fallbacks if we want to support these guys. If you want to use these guys you need to make sure that your webfont has all of the characters it needs or use some kind of snipping thing to make sure it doesn't use the web fonts at all.</p>
     <p>[25:18] OK, I went a little bit off track. We were reducing the size of the fonts. This talk jumps around a bit so be prepared for that. Think of it as being a little bit like &quot;Pulp Fiction&quot; but nerdy rather than cool.</p>
     <p>[audience laughs, applauds]</p>
     <p>[25:25] Although TrueType is a binary format, it's not an efficient binary format. So it does benefit from gzip-ing, gzip-ing takes it down to 29K. Now all of a sudden things are looking a lot better. We can also start removing features from the font that we might not need. If we remove hinting, that takes the gzip size down to 18K and things are looking really good now. Hinting tells the font which parts should sit on the pixel grid and things like if you've got an M, to always keep the arches of the M equidistant apart. With higher resolutions, good anti-aliasing hinting is becoming less and less relevant.</p>
     <p>[26:18] So here's the difference with and without hinting. There's no difference. Or that's at least on OS X, Linux, and DirectWrite. DirectWrite's used by Firefox and Windows 9. Windows 9? That's not out yet. IE9, thank you. In other Windows browsers, it would look like this. So this is Windows GDI ClearType, so your Chrome, Opera, and older versions of IE and Firefox.</p>
     <p>[26:31] This is the software-rendering API, and it looks OK at first; but when you take a closer look, you can see that the tops of some of the capital letters have gone missing, especially at the L at the top there, and at the C further down, it's gone a bit nasty.</p>
     <p>[26:42] But not all users have ClearType enabled, some just have standard anti-aliasing, and you can see when that happens, things have gone a bit faint as the letters are trying to sit between two pixels and it becomes difficult to read.</p>
     <p>Some users have anti-aliasing off altogether, and they get this: [26:50] it's gone a bit &quot;Lord of the Rings,&quot; right? It's completely illegible now.</p>
     <p>[27:15] So actually, don't remove hinting. We'll stick with our 30k. It was a silly idea. But do test in Windows XP with IE8 with all of the different text rendering modes, because although, you know, all the fonts you'll get will be hinted, some of them are also hinted by software, and sometimes the results aren't great. You'll want to find out if they look bad sooner rather than later.</p>
     <p>[27:35] Windows needs a little looking after. In fact, we can improve things further. Here are two versions of the same font running in the same browser with ClearType on. Now, I don't know how well you can see from back there, but the one on the left is significantly more jagged than the one on the right. If you take a closer look, you see it especially on the slope of the top of the T and a bit on the E as well.</p>
     <p>[27:54] What's the actual difference between these font files? One's using TrueType outlines, and one's using PostScript outlines.Windows GDI ClearType, it's a bit rubbish. It only anti-alias horizontally, it doesn't anti-alias vertically, and that's why we're seeing that effect.</p>
     <p>ClearType wasn't coded to deal with PostScript outlines. This isn't something that PostScript is doing particularly better, it's just that ClearType wasn't coded to deal with it. If we're using larger text, such as a heading, it actually benefits us by using PostScript outlines to force ClearType to stop working and just give us standard anti-aliasing. You can use FontForge to convert between the two pretty much [inaudible 28: [28:17] 25]</p>
     <p>[28:42] That doesn't save IE6, seven and eight users, because the ELT spec, which Microsoft wrote, says that you can include PostScript outlines, but the Internet Explorer, which Microsoft also wrote, can't understand the spec that they wrote. If you do it, it only works on Internet Explorer 8, on Vista and Windows 7. Those browsers are going to get a slightly degraded font rendering experience.</p>
     <p>[29:05] My point is that we've improved the size of the font significantly, and the rendering in some cases, by editing the internals of the font. In many cases, this hard work is all for nothing. Ubuntu font can be edited, because it's open source, but here in the Linotype terms and conditions, the following is prohibited, modifying the font software, etc. This is Linotype's, but other font companies have exactly the same thing.</p>
     <p>[29:22] There's barely text big and red enough to describe how much of a wank to the face that this is. Mind altering proportions, we can't help our users out because of silly legal things. Some people think using Saffron Too font works around this. It doesn't.</p>
     <p>[29:42] Font designers were screwed over by the law in the '70s and '80s. Back in the days of bitmap fonts, it was decided that this was a piece of industrial design, and importantly, not art, and not protectable as a work of art. You could trademark your font, but trademark only applies to the name. You could just copy the font and give it a different name, and now it's yours and you can sell it.</p>
     <p>[29:54] Whereas vector fonts, their design wasn't covered as a work of art either, but they were protectable as a computer program. The output isn't protected, but the instructions to create that output were.</p>
     <p>[30:08] That's why, legally, there's a big difference between sending an image of a heading and actually sending the fonts. That's why there's a big difference. This creates a legal gray area, because we know that different computer programs can actually produce the same output.</p>
     <p>[30:34] Adobe took a series of bitmap fonts, that they didn't design, and they manually traced them -- created vector fonts. Then they protected them and then they sold them. Another company called Southern Software, they decided to test the law a bit. They copied the fonts and they scaled it by one percent, vertically, and they claimed rights. All of the control points have moved now. This is a new computer program and they protected it and tried to sell the font.</p>
     <p>[30:52] Adobe took them to court and Adobe won. Adobe's creation of the fonts, although it was copied, it was a manual process and it was seen as being an original piece of expression. Whereas Southern Software, there's was done automatically by a machine. Machines do not have rights to protectable expression in the law.</p>
     <p>[laughter]</p>
     <p>[30:53] Sorry, guys.</p>
     <p>[31:07] At the point at which it was decided the law was broken, was when the font was decompiled to be altered. That's where we get this from and that still hangs around. Unfortunately, we're stuck with this until font foundries start to get the web.</p>
     <p>[31:15] The law means we can't optimize fonts as maybe as well as we can do. Sometimes the download can be longer than it could be.</p>
     <p>[31:18] What's the use of seeing as the fonts are being downloaded?</p>
     <p>[31:37] Here's a quick test. I've got three paragraphs going on to use web fonts. One doesn't. The output looks like this. How does that look like as it's being downloaded? Let's pit two browsers against each. That's IE9 and Chrome. Opera behaves the same as IE9. Safari behaves the same as Chrome. It's a WebKit thing.</p>
     <p>[31:38] Go.</p>
     <p>[32:01] Straight away, when the HTML is downloaded, Internet Explorer will render all of the text, in the wrong font in some cases. Whereas WebKit has chosen to hide the fonts while they are downloading. We can see when the first font finally downloads, Internet Explorer nine finally switches. WebKit just displays it and then the same happens with the second font.</p>
     <p>[32:17] The good thing about the IE method is, people are getting their content quickly. They're not hanging around waiting for that to download. The downside is the switch from one font to the other can be quite visually jarring. With WebKit, you don't get that visual jar, but sometimes you can be staring at a whole lot of nothing while your page is downloading.</p>
     <p>[32:25] Especially if you're on something like hotel WiFi, which is where I took this screen shot. Those underlines you see there. That's the underline of links for a bit of text that I haven't shown yet.</p>
     <p>[32:51] Mozilla came up with a good compromise in Firefox 4. Here's Firefox 4. When the page first renders, the text is hidden. Very much like WebKit. Now as it starts to load, the first font comes in and then we've got a fall back for the lower paragraph. What Firefox four does is, it waits three seconds for the font to finish downloading and if it doesn't complete in three seconds, it shows a fallback so people get they're content quickly.</p>
     <p>[32:54] When the font does load, it will switch. A combination of the two.</p>
     <p>[32:57] There is one more pattern. That's Internet Explorer 8.</p>
     <p>[32:59] Go.</p>
     <p>[33:03] Go.</p>
     <p>[laughter]</p>
     <p>[33:05] Go. Right. Internet Explorer 8's pattern is to display absolutely nothing until all of the fonts have loaded. I put all of my script files at the bottom of the body tag, because I find progressive rendering is really, really important. I think it's one of the most important things in performance. Don't let your user stare at nothing while things are loading. Blocked rendering makes a page feel really slow. We can't leave things like that.</p>
     <p>[33:50] Whenever I compromise on maintainability of performance like this, my brain taunts me with a memory. I was leaving work one day and I had my iPod in heading out the building, and then suddenly was, &quot;Oh, actually, I need the toilet.&quot; So I just went to the toilet, went up to a cubicle. Not into a cubicle, up to a urinal. That's what they're called.</p>
     <p>[33:56] Then I thought, &quot;Oh, I don't actually know what time my train is at, so I'll check that at the same time.&quot; This is extreme multitasking.</p>
     <p>[audience laughs]</p>
     <p>Jake: [34:16] I took my phone out of my pocket, and as I brought it to my face, I caught the wire for my earphones and pulled them out of my ears. Then everything sort of went into slow motion as I just sort of watched them drift them towards the urinal. I thought, &quot;Right. OK, I can switch urinals.&quot; And then there's, &quot;Oh, there's a wall there, and there's a man next to me.&quot; I've learned. I've watched Ghostbusters. &quot;Don't cross the streams,&quot; that's their advice. And it's good advice. [audience laughs]</p>
     <p>Jake: [34:46] But it was bad advice, it was too late by that point. They'd fallen in. [sighs] So a thought occurred, &quot;I'm not going to put those in my ears again. They're ruined now. I might as well just carry on.&quot; So I did, and I sort of watched myself pissing all over my favorite earphones. It was a real depressing moment in my life. [audience laughs]</p>
     <p>Jake: [35:10] This is the mindset I get into when I am forced to compromise on maintainability and performance. I worked on a site recently where their background image was 350K because it had this sort of interlaced effect. I showed them how they could do it with two images that were in total about... Well, it was less than 1K for the two, and it was the same effect. They would just have to change a little bit of markup. But they said, &quot;Oh, no. We use a CMS, so we can't possibly change a background image,&quot; or something like that. [35:19] So I didn't have the energy to do performance things like sprite sheets or optimize rendering because the site had already been pissed on. I might as well keep pissing on it.</p>
     <p>[audience laughs]</p>
     <p>Jake: [35:24] So let's not start with that, not even for IE8. Let's do better. [35:49] To fix IE8, and this is quite odd, you need to take the font declaration out of your CSS file and on to page. You need to move it above external CSS links. You need to move it above other script elements, even if they're inline like that one is there. Then when all of those moons combine, that makes Internet Explorer eight behave like IE9, which is the same as Firefox. You'll get the fallback font and then you'll switch when the font is downloaded.</p>
     <p>[36:07] Out of the most font services they give you a CSS file, and they won't let you take the innards out because they're doing funny browser-sniffing things. As an alternative, you could use JavaScript. So here I am just creating a link element and I'm appending it to the head. You need to append it using set timeout zero, else Internet Explorer just goes back to its old blocking behavior.</p>
     <p>[36:23] But if you're happy with JavaScript, there is another option. Google and TypeKit together developed WebFont Loader. WebFont Loader is a little bit of JavaScript and it tracks the loading of the font. It sets class names on the HTML element that you can use to restyle the page. So you get class names like this.</p>
     <p>[36:37] So at the first part of it, you get the font name, and then the style and weight. And then these events like loading, when the font is loading, active, when the font is finished loading, and then inactive, which is usually you get an error or something has timed out.</p>
     <p>[36:50] Because all fonts have different metrics, we can actually use this to change the size of fonts depending on whether the font is loaded or not. So we can size sans-serif differently from the web font which loads in.</p>
     <p>[37:07] We can emulate both styles of loading as well, the WebKit method, and the Firefox method. And we can do the IE method as well. So here I'm saying, &quot;Hey, use the font.&quot; And then I'm saying, &quot;Oh, but while you're out and while you're loading, hide.&quot; That's the WebKit method.</p>
     <p>[37:15] Or I can say, &quot;Right. When the font is loaded, use it. But until then, use sans-serif.&quot; This is where we can specify a different font size and different line height.</p>
     <p>[37:37] Personally, I try to go for the IE9 way first. Try to get people to content as quickly as possible. I only go to the webkit method when the effect is too jarring of the font switching. This is a site we did at the team. This is what it looks like as it's loading, when it's loaded. There's a very obvious change there, the headings come in when the font's loaded.</p>
     <p>[37:53] If I toggle between the two, there's a subtle change, as well. You can see the nav and the heading, use it to vary the same webfont. It's a much smaller size, the effect's more subtle. In fact, the big text coming in kind of distracts from the smaller changes happening up there. Still, you're giving people the nav, the real informed bit, real early on.</p>
     <p>[38:10] We did that by changing, giving a different size to the fallback font than we did for the webfont. As you can see here, at the same CSS size, the difference is wildly different. When we can specify different sizes, it looks like that. It's still quite jarring, in this example, but it's much better.</p>
     <p>[38:28] You can actually do this without font loader. There's a CSS property called font-size-adjust. It's really good, and it's quite simple to use, is the rendered font size is the x height of the font divided by the font size, divided by the font-size-adjust file, you multiply by the radius and some other things.</p>
     <p>[38:49] Even then, it only lets you match the height of the lower case X. Just the height, and it only lets you do that in Firefox, it's the only browser that supports it. We can specify multiple font families, I don't see why we can't do the same with font size and line heights, because it is something that needs to be done manually, rather than calculated.</p>
     <p>[39:02] Until then, we have webfont loader. It really is simple to set up. We load it asynchronously and ahead of our page, so we need to leave a config object for it to pick up, and that just lists the fonts we're expecting, and URL to CSS file.</p>
     <p>[39:09] Some font websites, they offer their own modules for webfont loader. I say stay away from them. Some of them are really badly written.</p>
     <p>[39:28] Then we just embed it asynchronously. You need to use a set timeout, once again, to stop Internet Explorer eight doing its blocking thing. Because this script it loaded asynchronously, some of those loading classes aren't going to be there that we're using for styling. You can just use a simple JavaScript loop to add all of those on to the body straight away.</p>
     <p>[39:44] That sounds like a lot of code to put in the head of every page, but with a few tricks, it's only about 400 bytes, so it's not a big deal at all. The downside to the method is that it does depend on JavaScript, and all the fonts will be downloaded whether you use them or not. It needs to measure when they've loaded or not.</p>
     <p>[40:09] We mentioned before that there were a lot of different formats, WOFF, SPG, EOT, TTF. TTF, I mentioned that right at the start, back in the '80s. Why do we have these other formats? Hakon said, &quot;We don't need new formats, let's just link the TTFs.&quot; That made sense to me at the time, especially since there's lots of good open source fonts as well. The commercial font foundries really disliked this idea.</p>
     <p>[40:31] When industry's media hits the Internet, it goes through a series of phases that we're all familiar with. Step one is the Internet is coming, run away, and litigate anything that comes close to you. Step two would be let's sell our stuff, but with a ball and chain attached, something normally to stop piracy. That's like the DVD thing where you're forced to sit through the &quot;Don't pirate this DVD message,&quot; that you can't skip.</p>
     <p>[40:41] Finally it's we can make money from this thing, we want to make selling more pleasurable than pirating. That's why we see the music they're there now. It's great, it took a long time.</p>
     <p>[41:07] All industries go through these steps, with the exception of the porn industry, which for some reason, seemed to get it right straight away. A new thing comes up, and if you just invented a box, they go, &quot;Right, how can we sell porn in that box?&quot; And I mean, video on the Internet, they really sort of drove that forward, which is quite scary. Maybe if designers made sexier fonts, we wouldn't be in this problem, it might not have taken 17 years.</p>
     <p>[41:18] Font foundries were at step one for a long time, and we're kind of getting on to step two. Microsoft tried to solve this problem with embedded open type. It was originally created for Microsoft Word, a bit later used on the web.</p>
     <p>[41:28] To make .eot, what they did is they took .ttf, and they compressed it, added a little bit of metadata, and put it in a box marked .eot. There was very little to it.</p>
     <p>[41:46] But one of those bits of metadata was an embedded list of sites that this font was allowed to be on, and Microsoft's marketing guys, bless them, they tried to sell the font based on this. You know, they came to us developers and said, &quot;Hey, use our font format! It's got DRM in it!&quot; And they didn't understand that when we hear that, we hear, &quot;Come play in our ball pool! It's got razorblades in it!&quot;</p>
     <p>[42:14] It must really suck to be a Microsoft developer, because no matter what you create, no matter how good it is, their marketing department will mess it up. You could develop an awesome suit that washes itself and produces infinite bacon from the top pocket, and prolonged wearing would cause you to actually shit money, but marketing would still mess it up. They'd mention it was made by starving children, and they'd give it a name that sounds like two STDs, I don't know.</p>
     <p>[applause]</p>
     <p>Man 1: [42:33] So IE9, IE9 is an awesome browser. The rendering speed that comes out of that thing is brilliant. OK, it has its restrictions, but it's a brilliant piece of technology, but the marketing department did way more damage than good. [42:46] The purpose of .eot was to do very little other than make it difficult to pirate. That was their point. It's trivial to convert an EOT back to a TTF, there's not a lot of clever encoding going on, but doing that shows intent, it shows direct infringement.<br>[43:06] If I left a secret document of mine on your couch, and you read it, that's my problem. No one could really stop you, you might not have even intended to do it. If I left a locked suitcase at your house accidentally, and you broke into it and read my secret documents, you're at fault. That showed you had intent to see stuff that I didn't want you to see.</p>
     <p>[43:30] EOT is quite a complicated way of doing that. That's not supposed to happen. A lot happens when you make your own slide framework. That's better. Hold on, Harkon said, &quot;Why don't just zip the TTF and give it another extension?&quot; This is my favorite answer to the problem, and why not? Then it's not directly installable, you would have to change the extension, unzip it, or whatever, and for me, that shows enough intent.</p>
     <p>[43:39] That was seen as being too easy. They felt they wanted something like the barriers at the train station. Yes, you can jump over them, but that shows intent, and they needed to decide how high the barriers needed to be.</p>
     <p>[44:07] In 2009, Mozilla, Opera and Microsoft, they developed WOFF as an answer to this. How was WOFF made? They took an OpenType font, they compressed it, and they put it in a box marked WOFF. What makes it different from EOT? It doesn't have DRM or anything pretending to be DRM. They decided that the serving of the fonts was the responsibility of the server, which kind of makes sense, and the compression was Zedlib.</p>
     <p>[44:26] The Microsoft format used a superior compression, actually, developed by MonoType, but it looks suspiciously patenty, and Zedlib, it's a known thing. It's already there in the browser, and you get OpenType features as well. As I said, even though Microsoft spec said it was possible, the implementations weren't there.</p>
     <p>[44:55] But it offers us, as developers, nothing, nothing over TTF, other than compression. We get that with GSIF, so it's absolutely nothing. It's just legal mess. I try to come up with a metaphor to sum of the problems with FontFace, and I thought of one, and it seemed to really fit, but it was maybe a little bit too far. I did a little poll on Twitter, saying, &quot;Hey I've got this metaphor. Is it OK?&quot; If this upsets you, remember that it's Dave Shay's fault.</p>
     <p>[laughter]</p>
     <p>[44:59] Welcome to the human centipede, and we're not at the fun end.</p>
     <p>[laughter]</p>
     <p>[45:06] This is the centipede. I didn't draw it. I'm not sick.</p>
     <p>[laughter]</p>
     <p>[45:10] The law messed up to stop the protection of fonts and because of that, font foundries, they're scared of the Internet. Because of that, the browsers take a long time to implement and come to an agreement on formats.</p>
     <p>[45:37] The implementations, even now, are far from perfect, as we saw. Because of that, we can easily make pages with heavy downloads, or pages that render content badly or with missing text, but no. It must stop with us. We must stop the problems passing on to the user.</p>
     <p>[45:40] I'm going to ditch the metaphor, actually. It gets horrible at this point.</p>
     <p>[45:58] Let's just say we need to serve at least EOT and TTF, because that covers most of the browsers we care about. If you need to support old iOS, then use SVG. I wouldn't bother with WOFF, unless the company won't give you a TTF, because it's supported by less browsers.</p>
     <p>[46:18] Avoid unnecessary downloads. Make sure Internet Explorer is not going to try and get greedy trying to help us out. Soon we'll be able to use plain CSS and unicode range to deal with this, when other browsers catch up with WebKit. Show content as quickly as possible, but with a good transition between fonts, and use web font loader if that's the best way of doing it.</p>
     <p>[46:24] Make your font deliverables small, as well. That can help with that.</p>
     <p>[46:26] Slides aren't changing again.</p>
     <p>[46:39] Use font scroll or Font Forge to do that. It's taken us 17 years to get to where we are today and it's still pretty terrible. Things are really starting to move on now. We're starting to get OpenType features being supported in browsers. Kerning is starting to appear in some as well. It's going to be fun.</p>
     <p>[46:44] Last piece of advice I would leave you with is, don't piss on your web fonts.</p>
     <p>[laughter]</p>
     <p>[46:46] It negatively impacts the sound quality.</p>
     <p>[laughter]</p>
     <p>[46:50] Well that's enough talking from me, I think. That's the details of my contact. I'd say, any questions?</p>
     <p>[applause]</p>
     <p>Man 2: [inaudible 47:03] [47:16] [laughter]</p>
     <p>Man 3: [47:20] It does, yeah. Thanks for the talk.</p>
     <p>Jake: [47:21] Thank you.</p>
     <p>Man 3: [47:24] It was like drinking from a fire hose. [laughter]</p>
     <p>Jake: [47:26] Sorry, sorry.</p>
     <p>Man 3: [47:29] Is there a book coming out with all this information?</p>
     <p>Jake: [47:46] I actually wrote an article on it for &quot;.Net Magazine,&quot; which means they'll probably publish it on their website sometime soon. I don't know if it's the edition that's still out. They didn't tell me when it was published, but I guess it will be on the website then. I don't know. Obviously, the video's going to come out. You can play it in slow motion.</p>
     <p>Man 3: [makes sound] [47:49]</p>
     <p>Man 4: [inaudible 47:49] [47:55]</p>
     <p>Jake: [47:57] Thanks. Stickers of just my face? [laughter]</p>
     <p>[47:59] I don't have stickers of that, I'm afraid. Sorry.</p>
     <p>[laughter]</p>
     <p>Man 3: [48:04] What was the font?</p>
     <p>Jake: [48:06] Which font?</p>
     <p>Man 3: [48:08] The one you asked about.</p>
     <p>Jake: [48:35] Oh, right. Oh, yeah. Yeah, it's called Topaz and it's... [laughter] . Yeah, right. That was the first. When I decided that I was going to be a designer, because I had spent my childhood playing with Deluxe Paint III, which, I mean, I would've been playing computer games if it weren't for that application. I mean, it's extremely simple, as you see, but being able to do bits of animation and, you know, loved the creativity. It was an absolutely brilliant app. [48:51] But then I came to the web, and I, because I come from the North of England and no one lives there, so when I actually moved to London and I met other designers, I realized that I can't actually design. So I had to learn JavaScript, and then Google tell me they're going to replace that, so it's not great. I had to learn fonts instead, so...</p>
     <p>Woman 1: [49:16] Yes, hello. You mentioned during the presentation something, I'm not sure I got that 100 percent right, you said font size and line height could be given two different sizes, or is that not yet available?</p>
     <p>Jake: [49:29] I'm afraid it's not even... I don't know, it's not even really being talked about except by me. I mean, that's just my personal wish that it should be that way; unfortunately, I think it's still in the spec font size adjust, and they're sticking with that. [49:40] I imagine the way it will go is they'll see that none of the other browsers seem even interested in adopting that, so they'll come up with another system, and in the meantime, we have to use WebFont Loader to target the element with selectors to change the font size and line height.</p>
     <p>Man 3: [50:03] So in your advice, on the last list, you wouldn't have .woff in there. Do you want to elaborate on that? Because as far as I know, the size, .woff is smaller. Is it just there's more formats to maintain, or is it just not the same quality?</p>
     <p>Jake: [50:17] It is really just more of a maintenance thing. I mean, you want to use the smallest number of formats possible. TTF has more support than WOFF. If WOFF had some amazing features that made me want to use it, then I'd say yeah, let's use it. It's just a legal thing, I suspect that very soon there will come a time when the font companies will start saying, &quot;We're not giving out TTFs, because it's too easy to pirate them.&quot; In which case, we have to start using WOFF, but they won't make that decision until everything uses WOFF, and it's like that for a while. Currently, we've got Android and IOS that don't, but I'm sure that will change soon, because it's a simple file format. It's just a real dumb wrapper. The compression that you get with WOFF you can get from [inaudible 50: [50:57] 58] anywhere near as good.</p>
     <p>Man 2: [51:20] Great presentation, thank you very much. Not so much a question, but a lot of this stuff is very well written, Paul Irish writes a lot about this stuff. He's a really great resource. Also, the Font Squirrel Blog has also a lot of good information on the whole font face debacle.</p>
     <p>Jake: [51:32] I really wish they would open source Font Squirrel. I guess it's obviously really helping them out, and they don't want to give away those secrets. I think there's some clever things they're doing with hinting, and you'll see little things come out. [51:55] When they update their change log, they say a new version of Font Squirrel, we've improved rendering on directright. There's no real blog post to say what they've done and why they've done it. I think that's a bit of a shame. That's why I kind of mentioned Font Forge, as well. I'll go in and have a look at how all that works. Even if you're going to continue using Font Squirrel, have a look at Font Forge, because it's good to see what's in there and how it's all put together.</p>
     <p>[52:07] I think that could be it. Thank you very much, bye-bye. [applause]</p>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2011/sessions/in-your-font-face-jake-archibald.md" id="comment">
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
