<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>Ten things I didn’t know about HTML by Mathias Bynens · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p748">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>Ten things I didn’t know about HTML by Mathias Bynens</h2>
     <video width="480" height="270" controls>
      <source src="/_downloads/2012/mathias-bynens-ten-things-i-didnt-know-about-html.webm" type="video/webm">
      <source src="/_downloads/2012/mathias-bynens-ten-things-i-didnt-know-about-html.mp4" type="video/mp4">
      <track src="/congres/2012/sessions/ten-things-i-didn-t-know-about-html-mathias-bynens.vtt" default>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2012/mathias-bynens-ten-things-i-didnt-know-about-html.webm">download the video</a> (or the alternatives: <a href="/_downloads/2012/mathias-bynens-ten-things-i-didnt-know-about-html.mp4">1</a>) and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="https://vimeo.com/52851509">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2012/mathias-bynens-ten-things-i-didnt-know-about-html.webm">Download video</a> (WebM, 99MB)</li>
      <li><a href="/_downloads/2012/mathias-bynens-ten-things-i-didnt-know-about-html.mp3">Download audio</a> (MP3, 41MB)</li>
     </ul>
     <h3>Transcript</h3>
     <div class="transcript">
      <p><span data-start="00:00:00.000" data-end="00:00:26.000" data-start-seconds="0">[silence 00:00 to 00:05]</span> <span data-start="00:00:05.000" data-end="00:05:34.000" data-start-seconds="5">Hello, everyone. Welcome to the graveyard slot. I realize that you’re all probably a bit sleepy after having that delicious lunch, but the next 45 minutes will be my attempt at keeping you all awake. This is me, I’m a frontend web developer from Belgium. Are there any other Belgians in the room? Where you at? [cheering]</span></p>
      <p><span data-start="00:00:26.000" data-end="00:00:48.000" data-start-seconds="26">Oh, you’re spread out across the room, I like that. In my spare time I do all kinds of stuff on the web. I collaborate on various open source projects, one of them is the HTML5 Boilerplate, for which I’m a core developer. I also created some other things like jsPerf, which I’ll hopefully get to talk about a little bit in a few slides.</span></p>
      <p><span data-start="00:00:48.000" data-end="00:01:12.000" data-start-seconds="48"> I wrote a number of small JavaScript libraries, I wrote some jQuery plugins… I create stuff on the web and I like doing it. If you have any questions, my Twitter handle is simply my first name, @mathias. If you have any questions make sure to use the #fqa hashtag, but you might also want to mention me so that I will get back to you later.</span></p>
      <p><span data-start="00:01:12.000" data-end="00:01:30.000" data-start-seconds="72">This talk is titled “Ten things I didn’t know about HTML,” but that’s mostly because I needed a short title. In reality there’s a lot more than just ten things that I would like to talk about. But we’ll just have to see how much time there is left. Also, I won’t be limiting myself to just HTML…</span></p>
      <p><span data-start="00:01:30.000" data-end="00:01:50.000" data-start-seconds="90"> I will talk about JavaScript and maybe even a little CSS as well. This [“∞ Things I didn’t know about HTML, CSS &amp; JavaScript”] would probably be a more accurate title. This will be a talk about a couple of things that were not obvious to me when I started out with web development — the stuff that surprised me over the years when I finally found out about them.</span></p>
      <p><span data-start="00:01:50.000" data-end="00:02:10.000" data-start-seconds="110">Hopefully I’ll be able to surprise some of you with some of these little fun facts today. First, I have a feeling that there will be more than enough talks that will focus on HTML5 and CSS3 and responsive web design. All these modern, new, fancy hip features.</span></p>
      <p><span data-start="00:02:10.000" data-end="00:02:39.000" data-start-seconds="130">That’s all super cool. But, for now, why don’t we just put on our hipster glasses and take a close look at HTML 3.2. Back in the day, when there was no such thing as CSS, HTML actually included some presentational elements. There were also a number of presentational attributes, which still allowed web developers to add some level of styling to their pages, without using actual CSS.</span></p>
      <p><span data-start="00:02:39.000" data-end="00:03:02.000" data-start-seconds="159">One of those presentational attributes is the bgcolor attribute. It’s fairly straightforward. If you set the bgcolor of an element that supports it to, for example, the value pink, you would get something like this wonderful slide. This is probably the most amazing slide that you will get to see at this year’s Fronteers Conference. Enjoy it while you can.</span></p>
      <p><span data-start="00:03:02.000" data-end="00:03:29.000" data-start-seconds="182">Luckily, you can also use other color notations, like the hexadecimal color notation which you’re probably used to from CSS. This would work just as well. This is a hexadecimal color notation for the CSS color pink. I’m probably not telling you anything new right now. What surprised me here is that you can actually omit the first character there, the hash symbol, and it will still work exactly the same way.</span></p>
      <p><span data-start="00:03:29.000" data-end="00:03:42.000" data-start-seconds="209">Browsers don’t really care about the hash symbol in this case. Now, they do care about that symbol in another case: if you’re using the shorthand notation, which consists of only three hexadecimal digits.</span></p>
      <p><span data-start="00:03:42.000" data-end="00:04:06.000" data-start-seconds="222">In this example if you want to use the color #f3f and you want it to map to #ff33ff, which is what I would expect, you really have to use the hash symbol. If you omit it, you end up with a completely different color. Instead of this pinkish type of color, you will end up with #0f030f, which is something that closely resembles the color black.</span></p>
      <p><span data-start="00:04:06.000" data-end="00:04:37.000" data-start-seconds="246">All of this is defined in the HTML5 spec. I know I told you that I wouldn’t talk about HTML5 just five minutes ago, but this is actually one of the coolest parts of HTML5: it’s the first version of HTML that describes a complete parsing algorithm that all browsers can use. This algorithm even defines how legacy content, or how invalid markup and deprecated elements and attributes like these, can still be parsed.</span></p>
      <p><span data-start="00:04:37.000" data-end="00:05:00.000" data-start-seconds="277">In a way this is still HTML5, even though it’s deprecated and invalid code. This is just a very small part of this parsing algorithm and that’s the algorithm for parsing a legacy color value. Basically that’s an algorithm that applies some rules to convert an attribute value into a color, which is the end result that we’re after.</span></p>
      <p><span data-start="00:05:00.000" data-end="00:05:24.000" data-start-seconds="300">One of those rules is that any characters that you add into the attribute value that aren’t a hexadecimal digit, those characters get turned into a zero. They get interpreted as a zero. Now that we know about this rule, if you’re easily bored like me, you can have some geeky fun with this by trying out different attribute values and seeing which colors they map to.</span></p>
      <p><span data-start="00:05:24.000" data-end="00:06:01.000" data-start-seconds="324">I did just that and I noticed that whenever you enter the value sick you end up with the color green, which makes sense, right? [laughter]</span> <span data-start="00:05:34.000" data-end="00:05:54.000" data-start-seconds="334">What really happens here is the C character is the only hexadecimal digit in this value, so everything else gets turned into a 0. We get #00C0. The rest of the algorithm converts that into a full hexadecimal color value, in this case, #00C000, which is the green that you’re seeing right now.</span></p>
      <p><span data-start="00:05:54.000" data-end="00:06:22.000" data-start-seconds="354">There are some other examples as well that are appropriate in some weird and crazy way. For example, if you try the value MrT… [laughter]</span></p>
      <p><span data-start="00:06:01.000" data-end="00:07:03.000" data-start-seconds="361">…which is the actor who played B.A. Baracus in The A-Team, you end up with a full black background, as black as it can be. I thought that was fitting as well. Similarly, and this is actually a rule in HTML5 specification, if you use chucknorris as a value, the browser will render the background using the blood of Chuck’s enemies. [laughter]</span></p>
      <p><span data-start="00:06:22.000" data-end="00:06:38.000" data-start-seconds="382">That’s a true story. There are some of other things that you could try. For example, if you enter the value, crap, you end up with this type of color. I’m not sure if the projection really does it any justice, but on my screen it kinds of looks like a mixture between yellow and brown.</span></p>
      <p><span data-start="00:06:38.000" data-end="00:07:15.000" data-start-seconds="398">Kinda gross. You could try some other stuff as well. For example, if you use the pile of poo symbol, you’ll notice that it will get interpreted as two consecutive zero characters, instead of just one. The end result, in this case, is again the full black color. I think the takeaway here is that, in HTML, crap is brown but poo is black. OK? [laughter]</span></p>
      <p><span data-start="00:07:03.000" data-end="00:07:23.000" data-start-seconds="423">I also noticed that if you use the value fronteers, it turns into this vibrant pink color, which is surprising, but weirdly appropriate, if you know the conference organizers personally. [laughter]</span></p>
      <p><span data-start="00:07:15.000" data-end="00:08:22.000" data-start-seconds="435">Anyhow… Sorry, Peter. Sorry. [applause]</span></p>
      <p><span data-start="00:07:23.000" data-end="00:07:42.000" data-start-seconds="443">But anyhow, there are probably some other colors that would be even more appropriate for something like Fronteers or for this conference. Let’s take a look at the Fronteers logo. Here it is. I don’t know the first thing about graphic design or color theory, but I think it’s safe to say that the primary color in this icon is yellow, right?</span></p>
      <p><span data-start="00:07:42.000" data-end="00:08:06.000" data-start-seconds="462"> It would be cool if we were able to find an attribute value that would somehow be related to Fronteers and that would still map to a yellowish color. That’s my kind of fun, at least. The first thing I tried was using the hashtag for this conference (#fronteers12). Sadly, that didn’t turn out to work. Instead of the yellow that we expected, we get a red-like color.</span></p>
      <p><span data-start="00:08:06.000" data-end="00:15:28.000" data-start-seconds="486">Luckily, by simply tweaking the attribute value a little bit, we can get to a result that we want. If you use the value fronteers2012, or the value fronteersconf, you get almost exactly the same yellow color. How amazing is that? [applause]</span></p>
      <p><span data-start="00:08:22.000" data-end="00:08:46.000" data-start-seconds="502">That’s pretty cool, right? Yeah. I thought so. OK. I think we’ve seen enough colored slides for today. If you don’t mind, let’s just go back to the regular slide background before your eyes all start to bleed or something. All those slides that you’ve just seen, those were all, obviously, invalid HTML. You should never use the bgcolor attribute in any document that you create from now on.</span></p>
      <p><span data-start="00:08:46.000" data-end="00:09:12.000" data-start-seconds="526">Unless, of course, you’re doing it ironically. Now that we’re on the subject of valid and invalid HTML, let’s talk about validation for a little bit. For a long time, when I started out with web development, I always assumed that whenever an HTML validator told me that my markup was valid, that my work as a developer was done. It meant that I had created a document that was written according to web standards.</span></p>
      <p><span data-start="00:09:12.000" data-end="00:09:38.000" data-start-seconds="552">That’s all there is to it. Over the years, my stance on this changed quite a bit. The first thing I learned is that there are actually three separate layers of conformance criteria that a proper HTML validator should check for. The first one of these layers is the Document Type Definition, or the DTD. Basically, the DTD is a document that defines a list of elements that are supported in a language.</span></p>
      <p><span data-start="00:09:38.000" data-end="00:10:01.000" data-start-seconds="578">Then for each element, it also tells you which attributes that element supports, and where in the document the element is allowed. There is a DTD for HTML4. There is a DTD for XHTML1. You get the idea. It’s just a structured data file that defines all these different things. Let’s say we wanted to create an HTML validator of our own, using nothing but the DTD.</span></p>
      <p><span data-start="00:10:01.000" data-end="00:10:22.000" data-start-seconds="601">This validator would be able to detect the validation error in this code, because it would know that the paragraph element, the &lt;p&gt; element is not allowed in the &lt;head&gt;. Similarly, our DTD-based validator would be able to detect that the &lt;kitchensink&gt; element is no real thing. It doesn’t exist in HTML, so the DTD wouldn’t have an entry for that.</span></p>
      <p><span data-start="00:10:22.000" data-end="00:10:49.000" data-start-seconds="622">As you can see, using nothing but the DTD, we can already detect a number of typos and other common mistakes. But there is more to it than just the DTD. For example, the placeholder attribute may only be used for certain &lt;input&gt; types. The date input type turns out not to be one of those input types. This looks like it may be valid HTML, because you’re using the &lt;input&gt; element, which exists.</span></p>
      <p><span data-start="00:10:49.000" data-end="00:11:10.000" data-start-seconds="649">You’re using the type and the placeholder attributes, and both of them exist as far as the DTD is concerned. But, in reality, this is still invalid HTML. The DTD wouldn’t be able to detect it. Here’s another example. If you have a &lt;table&gt; and its first row only consists of a single column, but the second row consists of two columns, something’s not right.</span></p>
      <p><span data-start="00:11:10.000" data-end="00:11:37.000" data-start-seconds="670">This is actually invalid HTML, even though you’re not using any elements that you’ve made up, or attributes that don’t exist. Again, the DTD would not be able to detect this. It’s obvious that we need a second layer of conformance criteria. Those are the criteria that cannot be expressed in the DTD, but a computer or a computer program can still check for these things.</span></p>
      <p><span data-start="00:11:37.000" data-end="00:12:01.000" data-start-seconds="697">Sadly there’s also a third layer of conformance criteria and those are the things that only a human being can really check. This includes stuff like checking if the alt attribute for images has been used correctly, or if the text content of a &lt;time&gt; element does really represent a time, or if the text content of a &lt;blockquote&gt; element is really actually a quote, as is required by the spec.</span></p>
      <p><span data-start="00:12:01.000" data-end="00:12:21.000" data-start-seconds="721">There’s no way that a computer program can ever validate that for you, because it has no concept of context in the web page. Only humans can check these things. I think the takeaway here is that, in my opinion, HTML validators are very useful tools, but I think they’re a tiny bit overrated.</span></p>
      <p><span data-start="00:12:21.000" data-end="00:12:39.000" data-start-seconds="741">We shouldn’t obsess about validation too much. I think it’s OK to have an HTML validation error in your document, as long as you know why the error is there and you have a good reason to have that invalid piece of code there in your page. A good example of that is the X-UA-Compatible &lt;meta&gt; tag that you see here.</span></p>
      <p><span data-start="00:12:39.000" data-end="00:13:00.000" data-start-seconds="759">You can use this one line of HTML to make sure that Internet Explorer will always use the latest available rendering mode that it has to render your document. This is a very welcome behavior and one that you probably want for all of the web pages that you create from now on, but if you include it in your HTML document, the document becomes invalid.</span></p>
      <p><span data-start="00:13:00.000" data-end="00:13:16.000" data-start-seconds="780">Should you care about what the validator tells you in this case? I don’t really think so. Finally, of course you should remember that automated validators can only check for two out of the three layers of conformance criteria. The rest is still up to you.</span></p>
      <p><span data-start="00:13:16.000" data-end="00:13:40.000" data-start-seconds="796">Just because you’re using an HTML validator doesn’t mean that you can stop thinking about your markup and the way you use different HTML elements and attributes. OK. Let’s talk about character references or character entities in HTML. This is probably nothing new, but if you want to include a special character in your HTML you can always use a character reference.</span></p>
      <p><span data-start="00:13:40.000" data-end="00:14:04.000" data-start-seconds="820">This usually starts with the ampersand character, followed by a number of other characters. For this reason, if you want to include the ampersand character itself, you can always escape that and use a character reference for that character. In this case if you want to use the ampersand character, we can escape it as &amp;amp;. Note here that the semicolon marks the end of the character reference.</span></p>
      <p><span data-start="00:14:04.000" data-end="00:14:24.000" data-start-seconds="844">You’re all front-end web developers so I suppose that you know that scientific research indicates that the semicolon is the single most dangerous form of punctuation in the history of programming. Case in point, Twitter Bootstrap Issue #3057. Some of you may remember this, some of you may have even been there.</span></p>
      <p><span data-start="00:14:24.000" data-end="00:14:45.000" data-start-seconds="864">Basically what happened is, there was this one JavaScript file in Twitter’s Bootstrap Library that was missing an optional semicolon. It wasn’t really missing but it would’ve been more conventional if the semicolon would’ve been there. There was no problem whatsoever, the code still executed fine. Bootstrap still worked fine.</span></p>
      <p><span data-start="00:14:45.000" data-end="00:15:08.000" data-start-seconds="885">However, if you tried to minify this JavaScript file using JSMin, which is a very specific JavaScript minifier written by Douglas Crockford, the resulting minified JavaScript code would actually throw an error. The code wouldn’t work anymore. There was this friendly Twitter Bootstrap user who filed an issue to alert the Twitter Bootstrap engineers of the issue, but they quickly closed it.</span></p>
      <p><span data-start="00:15:08.000" data-end="00:00:00.000" data-start-seconds="908">They said, “Sorry, but this is not an issue in our code; it’s an issue in the third-party minifier that you’re using.” Soon after that, the author of that minifier — Douglas Crockford — chimed in. He wrote, and I’m going to quote this, “This is insanely stupid code. I’m not going to dumb down my minifier for this case.” [laughter]</span></p>
      <p><span data-start="00:15:28.000" data-end="00:16:03.000" data-start-seconds="928">Yeah, needless to say, for the next week or so Internet drama ensued. Over 270 comments have been posted by over 150 different participants, all arguing about a single frigging semicolon. Come on, only on the Internet. I think the problem with semicolons is that in many languages they appear to be optional, while in reality they’re not. The reason I just told you all this is: I think that this doesn’t just apply to JavaScript; it applies to HTML as well.</span></p>
      <p><span data-start="00:16:03.000" data-end="00:16:31.000" data-start-seconds="963">If we get back to our previous example, even in this case it turns out that we can omit the semicolon if we want. Look at me, I’m super cool, I omitted a semicolon. Now the only thing that really changed here is that this HTML code is invalid. Other than that you won’t see a difference; browsers will still render it exactly the same way as the code in our previous slide.</span></p>
      <p><span data-start="00:16:31.000" data-end="00:16:52.000" data-start-seconds="991">You know how I feel about HTML validators because I just told you five minutes ago. If the only thing keeping you from having a valid HTML document is a single semicolon, maybe you should just add it. Another reason why I wouldn’t recommend omitting semicolons just because you can get away with is that it gets even more confusing.</span></p>
      <p><span data-start="00:16:52.000" data-end="00:17:12.000" data-start-seconds="1012">Especially if you use it in attribute values as well. Here, we’re using exactly the same string value as the text content of the paragraph and as the content of the title attribute for the same element. You’ll see that the text gets rendered as foo&amp;bar, while the title gets rendered as foo&amp;ampbar.</span></p>
      <p><span data-start="00:17:12.000" data-end="00:17:33.000" data-start-seconds="1032">There’s a difference there. The reason for that is that attribute values have different parsing rules than simple text content. That’s another reason why I wouldn’t recommend using this “trick.” Now, what really surprised me is that in some cases, you don’t even need to escape the ampersand symbol at all.</span></p>
      <p><span data-start="00:17:33.000" data-end="00:17:55.000" data-start-seconds="1053">Like, for example, in this case, you can get away with escaping it all together, because it’s followed by a space character. I’m going to spare you all the gory details and the exceptions to all these rules, but if you’re interested in that, you can always check out the URL at the bottom of this slide [https://mths.be/bdu]. But, for now, let’s just take a look at another example.</span></p>
      <p><span data-start="00:17:55.000" data-end="00:18:16.000" data-start-seconds="1075">Let’s say we want to use the “greater than” symbol in our page. As you know, the greater than symbol has a special meaning in HTML, because we use it to close tags. If you want to use it in your text content, you can always, of course, escape it using a character reference. The character reference for this character is &amp;gt;.</span></p>
      <p><span data-start="00:18:16.000" data-end="00:18:39.000" data-start-seconds="1096">As you probably guessed, this is another one of those character references for which you can get away with omitting the semicolon. Browsers will still render it exactly the same way. The only difference is that the code became invalid now. Of course, here, the same applies as in the previous example. There’s still that difference between how attribute values are parsed and how the text content is parsed.</span></p>
      <p><span data-start="00:18:39.000" data-end="00:18:56.000" data-start-seconds="1119">This is needlessly confusing and I wouldn’t recommend doing this. Just use the full form of the character reference, ending in the semicolon. However, what really was a surprise for me here is that, again, you can get away with simply not escaping the symbol.</span></p>
      <p><span data-start="00:18:56.000" data-end="00:19:17.000" data-start-seconds="1136">You can simply use the greater-than symbol as the raw character in your source code. The reason for that is that unless the browser is currently parsing an open tag, there’s no ambiguity there. The browser knows that you just mean to use the raw character, so there’s no need to escape it.</span></p>
      <p><span data-start="00:19:17.000" data-end="00:19:34.000" data-start-seconds="1157">Now that we’re on the subject of tags and elements and HTML, let’s take a look at a very simple HTML document. Now, I realize that this is using the HTML5 DOCTYPE, but what I’m about to say mostly applies to HTML4 or even HTML2, if you want.</span></p>
      <p><span data-start="00:19:34.000" data-end="00:19:50.000" data-start-seconds="1174">You see we have a DOCTYPE there to trigger standards mode — that’s important. We then have the &lt;html&gt; element, which contains a &lt;head&gt; and a &lt;body&gt; element, and then the &lt;head&gt; element contains the &lt;title&gt; element, and then the &lt;body&gt; element contains all the contents that we want to display on our page.</span></p>
      <p><span data-start="00:19:50.000" data-end="00:20:10.000" data-start-seconds="1190">Well, the first thing I learned here is that it turns out that you can simply omit the closing tags for the &lt;html&gt;, the &lt;body&gt; and the &lt;head&gt; elements. We can simply scratch those, omit them from your markup, and you will still end up with a valid HTML document that will render exactly the same way in all browsers.</span></p>
      <p><span data-start="00:20:10.000" data-end="00:20:29.000" data-start-seconds="1210">That was the first surprise. But it gets even better. It turns out that you can even omit the starting tags for these elements, just like that. The end result is a very compact, but still valid HTML document that will still render exactly the same way on all browsers.</span></p>
      <p><span data-start="00:20:29.000" data-end="00:20:52.000" data-start-seconds="1229">It’s important to note here that even though the &lt;html&gt; and the &lt;head&gt; and the &lt;body&gt; elements, these tags are missing from your markup, but the elements will still be there in the DOM. The browser will automatically generate them even if they’re not available in the source code. You will still be able to style these elements using CSS and you will still be able to interact with these elements using JavaScript.</span></p>
      <p><span data-start="00:20:52.000" data-end="00:21:10.000" data-start-seconds="1252">These elements are implied and there’s not really a need to include them in the markup. On that note, this is probably the most useless tattoo ever. If you’re going to get an HTML tattoo, at least pick some tags that aren’t implied or optional. It’s a waste of tattoo ink.</span></p>
      <p><span data-start="00:21:10.000" data-end="00:21:43.000" data-start-seconds="1270">With that in mind we can say that this tweet is misinformed. It says “&lt;html&gt;&lt;head&gt;&lt;/head&gt;&lt;body&gt;&lt;/body&gt;&lt;/html&gt; is all the HTML you ever really need.” That’s just plain wrong — luckily it’s very easy to fix this tweet. There, I fixed it. These are actually the only elements that you never really need in the document. What you do need, that’s missing from this tweet is a DOCTYPE and in 99 percent of all cases, a &lt;title&gt; element. It’s a bit wrong.</span></p>
      <p><span data-start="00:21:43.000" data-end="00:22:07.000" data-start-seconds="1303">Now let’s talk about CSS for a little bit. Let’s talk about font family names. For a long time whenever I wanted to use a font on my website using CSS, I would always quote the font family name if it contains spaces. The reason for that is, I think this was inspired by the warnings of the CSS validator of the W3C, but I’m not sure anymore.</span></p>
      <p><span data-start="00:22:07.000" data-end="00:22:28.000" data-start-seconds="1327">I lived by this mantra that whenever there’s whitespace in the font family name, it must be quoted or else it wouldn’t work. Only recently I found out that that’s actually not really true. This mantra doesn’t really make sense. If you’re interested in all the exact rules, when the quotes are needed and when they’re not needed, you can always check out the URL in the middle of this slide [https://mths.be/bft].</span></p>
      <p><span data-start="00:22:28.000" data-end="00:22:49.000" data-start-seconds="1348">In short, whenever the font family name is a space-separated set of CSS identifiers, then you don’t have to use the quotes at all. It turns out that that just happens to be the case in 90 percent of all font family names that are actually being used. I just totally made that number up by the way, but it’s something close to 90 percent, I’m sure.</span></p>
      <p><span data-start="00:22:49.000" data-end="00:23:12.000" data-start-seconds="1369">In this case we can just do away with all the quotes. Let’s take a look at another font family name. Let’s say we have a font called 456bereastreet. Because this font family name starts with a digit, it’s not a valid CSS identifier. For that reason, this line of CSS code won’t actually work. It will silently be discarded.</span></p>
      <p><span data-start="00:23:12.000" data-end="00:23:41.000" data-start-seconds="1392">There are a couple of things that we can do to fix this. The first thing that we could do is, we could simply escape the first digit. This makes the whole thing a valid identifier again, but this looks a little bit messy and confusing. The font family name is 456bereastreet, but now it says \34 56bereastreet and there’s this weird space in between the 4 and the 5, there’s this weird backslash at the beginning, and it’s really confusing.</span></p>
      <p><span data-start="00:23:41.000" data-end="00:24:05.000" data-start-seconds="1421">A better solution in this case, I think is to simply use quotes. I’d say whenever you’re in doubt about something, always simply use quotes. It avoids a lot of problems in many different programming languages and it rarely even introduces new problems. Just play it safe and always use quotes. I think the same can be said for semicolons, by the way.</span></p>
      <p><span data-start="00:24:05.000" data-end="00:24:31.000" data-start-seconds="1445">If you’re confused: I created a tool for this [https://mths.be/bjm] that can be used to play around with different font family names. You can enter any value that you want and it will tell you if it would make sense to wrap it in quotes or not. I realize no one ever needs a tool like this, but I still made it just for fun. I think it can be useful if you want to learn about this stuff.</span></p>
      <p><span data-start="00:24:31.000" data-end="00:25:01.000" data-start-seconds="1471">OK, now let’s take a closer look at attribute values in both HTML and CSS. I hope I’m not telling you anything new here, but as you can see, in both HTML and CSS you can use quotes around your attribute values. Mind blown, right? In this case the attribute value is foo in the HTML document. Then we have some CSS that selects all the anchors in the document whose href attribute is set to the value foo.</span></p>
      <p><span data-start="00:25:01.000" data-end="00:25:20.000" data-start-seconds="1501">In this case it will only select the first link in this document here and it would give it a hot pink background. In this case we can simply omit the quotes in both HTML and in CSS. It would still work exactly the same way, and it would still be valid html, and the CSS would be valid, too. There’s no issue there.</span></p>
      <p><span data-start="00:25:20.000" data-end="00:25:58.000" data-start-seconds="1520">However, if we try this with another value, let’s say foo|bar for example, you’ll notice that some things start to go wrong in a very weird and unexpected way. In this example, the HTML is valid, but the CSS isn’t valid. The reason for that is that foo|bar is not a CSS identifier. There’s always an explanation, but you never expect these things to happen. It’s important to note here that there’s a difference between the rules for unquoted attribute values between HTML and CSS.</span></p>
      <p><span data-start="00:25:58.000" data-end="00:26:20.000" data-start-seconds="1558">Again in this case, the solution is to simply just use the damn quotes. I would probably even add the quotes in HTML, just to be safe, just to be sure. However, if you’re that guy or girl who doesn’t want to use quotes unless you absolutely have to, well you can find out about all the different rules and exceptions if you simply check out the URL at the bottom of this slide [https://mths.be/bal].</span></p>
      <p><span data-start="00:26:20.000" data-end="00:26:43.000" data-start-seconds="1580">I’ve also made a tool [https://mths.be/bjn] that can help you with that, if you’re [laughs] interested in that. It’s another one of those useless tools, I know, but I had fun making it. You can simply enter just about any attribute value that you want to use and it will tell you instantly if it’s a valid unquoted attribute value in HTML and in CSS, so there.</span></p>
      <p><span data-start="00:26:43.000" data-end="00:27:08.000" data-start-seconds="1603">Now let’s take a close look at JavaScript, specifically how JavaScript handles characters exactly. Let’s say you had to count all the symbols in a given string in JavaScript, how would you go about that, which function or method would you use? Anyone?</span></p>
      <p><span data-start="00:27:06.000" data-end="00:27:08.000" data-start-seconds="1626">Audience member: [indecipherable]</span> <span data-start="00:27:08.000" data-end="00:27:09.000" data-start-seconds="1628">Mathias: I’m sorry?</span> <span data-start="00:27:09.000" data-end="00:27:11.000" data-start-seconds="1629">Audience member: There is no function for that.</span></p>
      <p><span data-start="00:27:11.000" data-end="00:27:33.000" data-start-seconds="1631">No, there is no function for that, but my first thought would be to use the length property. All strings have a length property. For example, if we try this, if we create a string that contains the capital letter A, its length property will have the value 1. If we make a string with the capital letter B, again its length property will be 1.</span></p>
      <p><span data-start="00:27:33.000" data-end="00:27:58.000" data-start-seconds="1653">In these cases, as you can see, the length property of the string just happens to reflect the number of characters in the string. It’s important to note that this is not always the case. As you can see here, I’ve included the Unicode escape sequences for these code points. For these symbols, in this case it’s very clear that there’s only one escape sequence there so the length of the string will be 1.</span></p>
      <p><span data-start="00:27:58.000" data-end="00:28:25.000" data-start-seconds="1678">However, if we try some different symbols — they look the same, but they’re completely different Unicode symbols — these are the mathematical capital letter A and mathematical capital letter B; they look the same but they’re not, really. As you can see these symbols, even though there’s only a single character there in the string, it’ll still have length of 2. JavaScript will return the wrong thing if that’s what you were expecting.</span></p>
      <p><span data-start="00:28:25.000" data-end="00:28:53.000" data-start-seconds="1705">The reason for this is that any Unicode character that lives outside of the Basic Multilingual Plane, basically any Unicode character that has a code point that is higher than U+FFFF, those will get split up into a surrogate pair. JavaScript will, sadly, expose those separate surrogate halves as separate characters. That’s why you sometimes get a length of 2, even if there’s only a single character there.</span></p>
      <p><span data-start="00:28:53.000" data-end="00:29:19.000" data-start-seconds="1733">Of course this is a pain to work with because if you really want to count the number of symbols in a string: you have to use a lot of different workarounds and write a lot of code yourself. You may be wondering how these surrogates are calculated and how JavaScript converts from the code point to the surrogate. If you want to find out you actually need to look at the Unicode standard version 3.0, which is a very old version of the Unicode spec.</span></p>
      <p><span data-start="00:29:19.000" data-end="00:29:51.000" data-start-seconds="1759">Somewhere in section 3.7, they hide these special algorithms that can be used to convert from a code point to a surrogate pair and back. This is a JavaScript implementation of that and as you can see, we can use it to convert from the original string value, i.e. from the code point, to the surrogate pair. We could use this function to create another function that would be able to accurately count the number of characters or symbols in a string.</span></p>
      <p><span data-start="00:29:51.000" data-end="00:30:15.000" data-start-seconds="1791">Of course, another thing that we could do is use a JavaScript library that already has functions for this. For example, you could use Punycode.js. It comes with these utility methods, for example, in this case ucs2.decode. It will take any string in JavaScript and convert it into an array of Unicode code points. There will be only one array entry for each symbol that lives in the string.</span></p>
      <p><span data-start="00:30:15.000" data-end="00:30:41.000" data-start-seconds="1815">Basically, if you simply convert the string to the array first and then get the length of the array, instead of getting the length of the string directly, we end up with the correct result that we were looking for. As you can see here… If you use our brand new countSymbols function, for both the “normal”, the regular capital letter A, or for the mathematical bold capital letter A… We get 1 as a result in both cases, which is exactly what we want.</span></p>
      <p><span data-start="00:30:41.000" data-end="00:30:58.000" data-start-seconds="1841">Of course, there are many websites that still get this wrong. You can’t really blame them because this is really a pain to work with. It took me a long time to figure this out myself, as well. Another thing I learned is related to JavaScript variable names.</span></p>
      <p><span data-start="00:30:58.000" data-end="00:31:19.000" data-start-seconds="1858">For a very long time, I had been wondering which unicode symbols and crazy characters and stuff like that are all allowed in JavaScript variable names. I looked into it and it turns out that it's not really that straightforward at all. Instead of trying to explain it all to you — you would probably all fall asleep — let’s just do a little quiz here.</span></p>
      <p><span data-start="00:31:19.000" data-end="00:31:42.000" data-start-seconds="1879">I have five different variable declarations here. I would like to know which one of these is invalid. Any ideas? Who thinks it’s the first one? Raise your hand. Who thinks it’s the second one? Some people. Who thinks it’s the third one? Some more people.</span></p>
      <p><span data-start="00:31:42.000" data-end="00:32:12.000" data-start-seconds="1902">Who thinks it’s the fourth one? Yeah, it does contain some characters like plus, minus and greater than symbols — there’s some weird stuff in there. Let’s just take a look… Yes, I believe these are all valid except for the last one. The reason for that is there’s a zero-width non-breaking space right there. [laughter]</span></p>
      <p><span data-start="00:32:04.000" data-end="00:32:56.000" data-start-seconds="1924">There it is, see. [applause]</span></p>
      <p><span data-start="00:32:12.000" data-end="00:32:28.000" data-start-seconds="1932">I can’t believe you didn’t see that, come on. Stay awake, you all. If you’re interested in the exact rules and which Unicode categories and characters are allowed, you can always check out the link at the bottom there [https://mths.be/ber], as usual.</span></p>
      <p><span data-start="00:32:28.000" data-end="00:45:09.000" data-start-seconds="1948">For those of you with a more visual memory, here’s a regular expression that summarizes all the rules for valid variable names in JavaScript according to ECMAScript 5.1, the latest version of the spec, and according to Unicode 6.2, the latest version of the Unicode spec. Are you ready? Here we go. I hope you’re all writing this down because it’s really important. [laughter]</span></p>
      <p><span data-start="00:32:56.000" data-end="00:33:20.000" data-start-seconds="1976">Give it a minute. It’s literally over nine thousand characters long by the way. There we go, it’s actually 11 thousand, three hundred and something characters in total. I actually wrote a Python script to generate this for me — I didn’t manually write it out by hand or anything. I’m not that crazy.</span></p>
      <p><span data-start="00:33:20.000" data-end="00:33:30.000" data-start-seconds="2000">If you didn’t manage to write that down in time, there’s always this other useless tool [https://mths.be/bjo] that I created [laughs], in which you can simply enter just about any string value that you want.</span></p>
      <p><span data-start="00:33:30.000" data-end="00:33:53.000" data-start-seconds="2010">It will instantly tell you if it’s a valid variable name for use in JavaScript according to the spec. Now this doesn’t seem like something that is very useful but it is a cool learning tool and it also helped me find bugs in pretty much every major JavaScript engine out there. It does have a use even if it’s an edge case.</span></p>
      <p><span data-start="00:33:53.000" data-end="00:34:19.000" data-start-seconds="2033">OK. Let’s talk about truthiness in JavaScript: truthy and falsy values. I’m sure you all know what truthy and falsy means because you’re working with this concept all the time whenever you’re writing JavaScript. In this case we’re using a variable called condition. Depending on the truthiness or the falsiness of this variable the first line will be logged or the second line will be logged. I’m sure this is nothing new, right?</span></p>
      <p><span data-start="00:34:19.000" data-end="00:34:38.000" data-start-seconds="2059">Well, the ECMAScript specification defines the following algorithm which defines whether a given value is truthy or falsy. As you can see, if you coerce undefined into a boolean, it becomes false. You could say that undefined is falsy.</span></p>
      <p><span data-start="00:34:38.000" data-end="00:34:53.000" data-start-seconds="2078">Similarly null is another falsy value. If the original value is already a boolean, so it’s true or false, well in that case it’ll simply be the same as the input. true is truthy and false is falsy. That makes sense, right?</span></p>
      <p><span data-start="00:34:53.000" data-end="00:35:13.000" data-start-seconds="2093">If it’s a number it depends on the value: if it’s plus or minus zero or if it’s the number NaN it will be falsy, and any other number value will be truthy. The same goes for strings: if it’s the empty string, that will be falsy, but every other string value is truthy.</span></p>
      <p><span data-start="00:35:13.000" data-end="00:35:32.000" data-start-seconds="2113">Then finally, and this is what you should remember from this slide, is that all the other objects that aren’t listed here are all truthy. It doesn’t matter if it’s an empty array or an empty object literal — all those objects are supposed to be truthy according to the ECMAScript specification.</span></p>
      <p><span data-start="00:35:32.000" data-end="00:35:48.000" data-start-seconds="2132">Of course there’s one exception to this rule in the DOM. Does anyone know which exception I’m talking about? There’s one object that lives in the DOM that is falsy, instead of truthy.</span></p>
      <p><span data-start="00:35:48.000" data-end="00:36:07.000" data-start-seconds="2148">Yeah, it’s document.all. If you inspect the value, you’ll see that it’s an HTMLCollection object, so it is a real object that contains references to various elements that live in the DOM. If you coerce it into a boolean, you’ll see that it’s falsy.</span></p>
      <p><span data-start="00:36:07.000" data-end="00:36:26.000" data-start-seconds="2167">Why has this been done? This is actually a willful violation of the ECMAScript specification for backwards compatibility. The reason this change has been made and it has been specified this way in the DOM specification and HTML5 spec, is that a lot of existing code on the web uses stuff like this.</span></p>
      <p><span data-start="00:36:26.000" data-end="00:36:56.000" data-start-seconds="2186">As you can see it checks for document.all first, tries to use document.all if it’s available, and only if it’s not available it falls back to using document.getElementById. Most modern browsers implement both of these things. They implement document.all for backwards compatibility with pages that rely on it, and they implement document.getElementById because it’s standard and it’s the best way of getting an element based on its ID.</span></p>
      <p><span data-start="00:36:56.000" data-end="00:37:19.000" data-start-seconds="2216">In modern browsers we would prefer to end up in the else fork, instead of the if fork. As long as we support document.all in our modern browser, we’ll never get there, unless of course we make document.all be a falsy object without changing its actual value. That’s the reason why this was changed.</span></p>
      <p><span data-start="00:37:19.000" data-end="00:37:39.000" data-start-seconds="2239">I have one more thing that I would like to talk about and that’s benchmarking in JavaScript. I learned a thing or two about that. Whenever you want to find out how long it takes to execute a given piece of JavaScript, you can always benchmark it. There are a number of different techniques that you can use for that.</span></p>
      <p><span data-start="00:37:39.000" data-end="00:38:00.000" data-start-seconds="2259">My indentation is a bit messed up. I blame Keynote for that. This pattern is probably the most popular one. It’s used in the popular SlickSpeed, TaskSpeed, SunSpider and Kraken benchmark suites. It’s being used a lot. Basically, what it does is it gets a timestamp.</span></p>
      <p><span data-start="00:38:00.000" data-end="00:38:12.000" data-start-seconds="2280">Then it executes the code that you what to benchmark. Then it repeats it for a predefined number of iterations. Then, finally, you get another timestamp and compare it to the original timestamp. That gives you the difference.</span></p>
      <p><span data-start="00:38:12.000" data-end="00:38:41.000" data-start-seconds="2292">From there, you can calculate how long it took to execute the original code once, or in this case, six times. The problem with this approach is that as devices and JavaScript engines get faster and faster, the number six, i.e. the number of iterations won’t be sufficient anymore. As long as you only have six iterations and you have a computer that’s ten times faster than my computer, you will probably end up with a result of zero milliseconds.</span></p>
      <p><span data-start="00:38:41.000" data-end="00:39:09.000" data-start-seconds="2321">Which is, essentially, a useless result. A slightly more future-proof way of doing things is the following. You simply keep on running the test code for at least a second and you keep track manually, in a variable, of how many times you were able to run the code in total. Then, after that, of course, you can easily calculate how long each run of the test code took. Or how many runs per second were achieved.</span></p>
      <p><span data-start="00:39:09.000" data-end="00:39:34.000" data-start-seconds="2349">This is a pattern that is being used in Dromaeo and the V8 Benchmarks Suite. Unfortunately, it’s still not that simple. There are still some other issues that are much harder to solve. For example, I know most of you won’t even care about this anymore. But, if you’re using Windows XP, you should probably know that the internal system clock only gets updated every 10 or 15 milliseconds.</span></p>
      <p><span data-start="00:39:34.000" data-end="00:39:58.000" data-start-seconds="2374">Which one of these numbers it is depends on the exact system that you’re using. The problem with this is that, older browsers, like any version of Internet Explorer that runs on Windows XP… Those all rely on this internal system clock. Whenever your JavaScript code uses something like (new Date).getTime(), it will just fetch the timestamp directly from that system clock.</span></p>
      <p><span data-start="00:39:58.000" data-end="00:40:22.000" data-start-seconds="2398">Of course, if that one only updates once every 15 milliseconds, it’s very hard to get accurate results. For example, let’s say you have a test that takes only two milliseconds to run. This may show a result of either zero milliseconds, if the internal system clock didn’t update while the test was running. Or, if the timer did update, you would get a result of 15 milliseconds.</span></p>
      <p><span data-start="00:40:22.000" data-end="00:40:45.000" data-start-seconds="2422">None of these results are really accurate. The problem is, the margin of error for these results is way too high. Thankfully, there is a way to detect these broken timers in JavaScript. But you quickly see that we need a lot of extra boilerplate code just to get a proper benchmark going. It’s probably a better idea to use a JavaScript library that a does all the hard work for you.</span></p>
      <p><span data-start="00:40:45.000" data-end="00:41:07.000" data-start-seconds="2445">Like Benchmark.js, for example. It’s able to detect the various different timers, each with their own resolution. For example, there is of course (new Date).getTime(), which is the most common timer, which is supposed to have a millisecond resolution. That’s not bad, but as you know, on Windows XP, you don’t nearly get that one-millisecond resolution.</span></p>
      <p><span data-start="00:41:07.000" data-end="00:41:28.000" data-start-seconds="2467">There is also chrome.Interval, which is, of course, a Chrome-specific API that is only available if you start Chrome with a certain common line flag. I doubt a lot of people have this flag enabled. But still, Benchmark.js is able to detect it and use this timer, if it turns out to be the best one that it could find. This timer offers a microsecond resolution.</span></p>
      <p><span data-start="00:41:28.000" data-end="00:41:53.000" data-start-seconds="2488">That’s a thousand times better. There is also, nowadays, the performance.now API, which is a high resolution timer API. This also offers a microsecond resolution. If you’re using Node.js, there is a microtime module that you can install. This will also give you a microsecond timer in Node. If you want to benchmark some JavaScript there, you can go wild.</span></p>
      <p><span data-start="00:41:53.000" data-end="00:42:18.000" data-start-seconds="2513">However, even since Node.js’s latest stable release, they support a high-res timer and it’s already built into the core. You don’t need to install anything. This one features a nanosecond timer, which is even more accurate. I think this is a pretty cool hack: if you want to, you can still use a nanosecond timer in JavaScript in the browser.</span></p>
      <p><span data-start="00:42:18.000" data-end="00:42:51.000" data-start-seconds="2538">But you need to hack a little bit. The Benchmark.js repository on GitHub contains this weird Java timer applet. Basically, all it does is it exposes Java’s nano-timer utility to JavaScript, so that you can use it there. That allows you to use a nanotimer in JavaScript, in the browser. Benchmark.js is able to work with this and detect it as well. We go over all these different timers, then we figure out which one is the most accurate one, and then we will simply use that one to get our actual results.</span></p>
      <p><span data-start="00:42:51.000" data-end="00:43:25.000" data-start-seconds="2571">Then once we get the results, Benchmark.js will perform statistical analysis of all these results, which is really important because if you want to run the same benchmark on the same machine twice in a row, you’re going to expect to have more or less the same results. However if you run the SunSpider test for example and you run it on same machine twice in a row, it’ll probably tell you that your machine is faster or slower than itself. That’s because they’re not doing statistical analysis of the results and removing the outliers and stuff like that.</span></p>
      <p><span data-start="00:43:25.000" data-end="00:43:49.000" data-start-seconds="2605">Benchmark.js is being used nowadays in Google’s RoboHornet benchmark and also on jsPerf.com. It is being tested a lot. It gets regular updates; as soon as new timers are discovered, we immediately add support for it in Benchmark.js. Whenever you want to time something in JavaScript you may want to look into this.</span></p>
      <p><span data-start="00:43:49.000" data-end="00:44:10.000" data-start-seconds="2629">It is also being used on jsPerf.com. As I mentioned, that's another tool that I made. I don’t think this one is as useless as all the other tools though. A lot of people seem to like it. Basically it allows you to enter all the different snippets of JavaScript code that you want to benchmark, or that you want to compare. Then it creates a test case that looks like this.</span></p>
      <p><span data-start="00:44:10.000" data-end="00:44:34.000" data-start-seconds="2650">You get a neat table and an overview. Then finally when you run the test it will tell you, which of the results was fastest and which of them was slowest. As you can see in the screenshot here, there are three different results that get highlighted as being the fastest. Even though their numeric values are slightly different. The reason for that is that we consider the margin of error for these results.</span></p>
      <p><span data-start="00:44:34.000" data-end="00:44:54.000" data-start-seconds="2674">If you do that, there’s no way of knowing which of those three green highlighted results is actually the fastest. Statistically, they’re all equally fast. For that reason, we will simply highlight all of them. OK. Those were a couple of things that I learned. I think that’s it for me. If you have any questions, feel free to ping me on Twitter [@mathias].</span></p>
      <p><span data-start="00:44:54.000" data-end="00:44:57.000" data-start-seconds="2694">I’ll get back to you as soon as I can. Thank you for listening. [applause]</span></p>
     </div>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2012/sessions/ten-things-i-didn-t-know-about-html-mathias-bynens.md" id="comment">
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
