<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>HTML5 Semantics: you too can be a bedwetting antfucker by Bruce Lawson · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p510">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>HTML5 Semantics: you too can be a bedwetting antfucker by Bruce Lawson</h2>
     <h3>Video</h3>
     <video width="640" height="360" src="/_downloads/2011/bruce-lawson-html5-semantics.webm" controls>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2011/bruce-lawson-html5-semantics.webm">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="http://vimeo.com/31380928">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2011/bruce-lawson-html5-semantics.webm">Download video</a> (WebM, 121MB)</li>
     </ul>
     <h3>Slides</h3>
     <iframe src="https://www.slideshare.net/slideshow/embed_code/9588237" width="550" height="460"></iframe>
     <ul>
      <li><a href="http://www.slideshare.net/brucelawson/you-too-can-be-a-bedwetting-antfucker-bruce-lawson-opera-fronteers-2011">See slides on SlideShare</a></li>
     </ul>
     <h3>Transcript</h3>
     <p>Bruce Lawson: [0:05] Hi. So I get the after-lunch spot when you're all sleepy and I am talking about dull shit like HTML5 Semantics, so feel free to drop-off. As Justin said, I am from Opera if you like the talk. If you don't, I am from Motorola or Mozilla or something. There is the QR code for the talk. It's not up there yet, it will be as soon as I get on the WiFi.</p>
     <p>[0:30] So the subtitle of this talk is &quot;You, too, can be a bedwetting ant-fucker.&quot; I was advised to use this presentation title by the Dutch organizers, so if you are offended, talk to Peter Beverloo, don't take it out on me.</p>
     <p>[0:49] It's kind of quite tricky talking about semantics because there is this belief that people who are interested in semantics are very, very anally retentive. Even if you are the kind of person who will berate somebody else about specificity in their CSS, or even if you're somebody who will shout at another person because they haven't prototyped their constructors in ECMAScript 6 Dominatrix Mode, you will still dislike people who argue about semantics.</p>
     <p>[1:23] The reason is, is that semantics are to do with words, they're to do with meaning, they're to do with human concerns like that. And so you can't run something through a validator to tell you whether you've chosen the correct HTML element and that pisses some people off if they are maybe from an engineering perspective. My degree is English literature and drama, so I'm entirely comfortable with worrying about small meanings of words. I wrote a 10,000-word dissertation on the use of the word &quot;the&quot; in late Anglo-Saxon poetry. It's true.</p>
     <p>[2:03] I was going to call this &quot;You, too, can be a bedwetting hairsplitter.&quot; Hairsplitting in English is the act of cutting a hair in two and it means preoccupied with petty distinctions. The organizers told me that hairsplitter didn't really translate and this word was more appropriate in Dutch. And I admired the immediacy of the word &quot;ant-fucking,&quot; and was slightly taken aback by so much bestiality in common Dutch parlance. I thought about doing a joke about hare-splitting, but I decided not to do that joke, so we'll move swiftly on.</p>
     <p>[2:52] So HTML5 gives us 30 new elements, so, in HTML now we have about 105 elements. Sounds like a lot, but it's not many because these are the words we use to communicate our meaning to the users and communicate our meaning to machines.</p>
     <p>[3:12] In the Second World War, the English government invented something called &quot;Basic English&quot; which was for different people who didn't have English as a first language to talk with each other and that was very basic and had a vocabulary of 5,000 words. So 100 words isn't that much, which means that there will be times when you can't choose the right element for the stuff you are trying to markup, that's just the way it is. HTML is a general markup language. It's not able to have elements for every specific use and that is fine.</p>
     <p>[3:48] Another good thing about HTML5 is it frees us from the tyranny of XML parsing. As you probably know, XML -- if it meets a badly formed markup -- it will stop. And the Web is a medium for humans to communicate with each other, so stopping because there is a slight error is the equivalent of having a foreign friend who knows all the right words, has a little bit of grammatical problem, and you are going, &quot;La-la-la, I can't hear you.&quot; It's shit and it's gone and HTML sorts it out.</p>
     <p>[4:24] OK, so it would be really, really boring -- sorry it's a new presentation, I don't know how long it takes to do, so I keep looking at my watch. I am not trying to get away or anything. So it will be really boring if I just listed 30 new elements and told you what they did, so I am going to try not to. If you wanted to do that, you could buy a book. There are several great books on the market. Second Edition of Introducing HTML5 coming out soon.</p>
     <p>[4:53] We are going to look at some of the elements that you might not necessarily know about or some of the things that have changed. Some presentational elements are gone, the &lt;center&gt; element, the &lt;font&gt; element, the &lt;big&gt; element are gone and not missed. Good riddance! Simply because you can do this stuff in CSS, similarly some attributes, like align, background on &lt;body&gt;, bgcolor, are similarly gone because you can do this better in CSS. But not everything you think of as presentational has gone, some of them have been redefined to have semantics.</p>
     <p>[5:33] So the &quot;b&quot; element no longer means bold, it means a product name or something that you wish to draw attention to but are not emphasizing. The &quot;i&quot; element is now redefined and apparently the spec tells you that if you want to markup a ship name, use the &quot;i&quot; element. Now worrying about marking up ship names is so niche, even we ant-fuckers don't do it. People who worry about that we call flea-fuckers and those guys are filthy, filthy perverts. Don't talk to them.</p>
     <p>[6:14] The &quot;u&quot; element, for example, is now a span of text with unarticulated, though explicitly rendered, non-textual annotation and also marks up proper names in Chinese. I can see you will be rushing to use this one in your webpages. It feels to me, personally, like this is a bit of a mopping-up exercise. These things exist in webpages and now they've been redefined.</p>
     <p>[6:41] How useful these redefinitions are? I don't know. I should have said, by the way, earlier that &lt;big&gt; and &lt;font&gt; and &lt;center&gt; have gone. If you use them and you validate your code, the validator will punch you. But, if you have them in legacy pages, they will continue to render as they always have, because HTML5 specifies things that you, as authors, can use and it also specifies how browsers should render these legacy things. So everything with &lt;center&gt; and &lt;font&gt; isn't going to suddenly start rendering weirdly.</p>
     <p>[7:20] There are of course the sexy new &quot;woo!&quot; semantics, which we won't really go into simply because everybody has seen the &lt;video&gt; elements, everybody has seen &lt;canvas&gt;, et cetera. The top three - &lt;video&gt;, &lt;audio&gt;, and &lt;canvas&gt; -- have closing tags. When &lt;canvas&gt; was invented by Apple, it didn't have a closing element. When implemented by Mozilla, they added a closing element for excellent reasons that then you can have content in the middle, which is fall back content.</p>
     <p>[7:49] So stuff in the middle of a &lt;canvas&gt; element is only shown by browsers that can't do &lt;canvas&gt;. Likewise, with &lt;video&gt; and &lt;audio&gt;, and that enables you to add a link or a flash movie that plugs that. So that's really, really useful.</p>
     <p>[8:04] And a recurring theme of HTML5 semantics is backwards compatibility. There are some new semantics for internationalization because, of course, the Web is not just a Wealthy Western Web, it's a World Wide Web, and some languages haven't been properly served by HTML previously.</p>
     <p>[8:27] So we have the &lt;ruby&gt; element. Do you guys all know the &lt;ruby&gt; element? OK, I'll briefly run through it. This says &quot;origin sun&quot; in Japanese and that is the &quot;land of the rising sun,&quot; it's the name of Japan in Japanese. The thing is with these characters, these characters are ideogrammatic. They express a concept. You can't know from these characters how to pronounce the word.</p>
     <p>[8:55] Now, obviously, every Japanese person is going to know how to pronounce this one, but with some more obscure words, they like to add an annotation in a different alphabet that tells you how you can pronounce them. And that stuff because in print it's typically been done with a 5-point font called &quot;Ruby,&quot; it's now known as ruby text.</p>
     <p>[9:19] So using Ruby, here, I've got my ideogrammatic characters. And then, my ruby text I have characters in the different language that tells somebody how to pronounce that. I've also got this &lt;rp&gt; element, and that stands for ruby parenthesis. So I'm putting brackets around my pronunciation guide to distinguish it. What this will do in conforming browsers is the ruby parenthesis doesn't show, but the ruby text is shown over the main characters.</p>
     <p>[9:56] And this is how a lot of print publications in Chinese, Japanese, and Korean are shown. In non-supporting browsers, you get that - which is a good enough fallback. And this is really useful for CJK languages, although Chinese often have a vertical ruby text which I don't think is yet supported.</p>
     <p>[10:19] We also have the &lt;bdi&gt; element. &lt;bdi&gt; is really useful. That's the only phrase of Dutch I know. It comes in very, very useful in a multitude of circumstances. The &lt;bdi&gt; element is used in pages which have some left to right languages and some right to left languages. It's actually more accurately scripts, because you don't speak right-to-left, you write it down right-to-left.</p>
     <p>[10:54] So Arabic, here, is right-to-left, and the Hebrew here is right-to-left. The Greek, Dutch, Tamil and Russian are left-to-right. There's a problem with HTML4. Here is an example. I have two restaurant reviews. This one the name is in Hebrew. Usually the unicode algorithm knows which is right-to-left and which is left-to-right, but it sometimes gets it wrong.</p>
     <p>[11:23] So when you markup like this, you get this coming out which is nonsense and incomprehensible. So the &lt;bdi&gt; element allows bidirectional - God -- independence? What is it?</p>
     <p>Audience: [11:37] Isolation.</p>
     <p>Bruce: [11:38] Isolation. Thanks Tab. If you use the &lt;bdi&gt; element, it tells the unicode algorithm to leave this stuff alone and you will get this which is the proper content. You could also use the &lt;bdi&gt; element around here and it wouldn't change anything. But if you are having user-generated content that might be in different directional scripts, this will always make your content work properly. It's not very glamourous, it's not very sexy, but it's really, really useful for people who read Hebrew and Arabic and it's kind of weird that it has taken so long to get into the language.</p>
     <p>[12:19] The &lt;time&gt; element is new. I love the &lt;time&gt; element. &lt;time&gt; allows you to unambiguously mark up time for machines. This was invented for the microformats community, because microformats misused the &lt;abbreviation&gt; element. They filled the title with machine-readable dates, which, if you are using a screen reader that reads out the title attribute, it's incomprehensible.</p>
     <p>[12:49] So they invented the &lt;time&gt; attribute for the microformats people. It looks like this. You can put what you want to in the middle of those tags. This stuff is unambiguously readable for a machine. So that is today, at 13:40, in the time zone of GMT +1, and it is 13:45. Damn! I'm running ahead.</p>
     <p>[13:16] The trouble is with the &lt;time&gt; attribute, the &lt;time&gt; element, is it is weirdly, weirdly curtailed. So I know -- we all know that Julius Caesar was murdered on the 15th of March, 54 B.C., but you can't mark this up using the &lt;time&gt; element because you're not allowed to have dates that go below zero. Similarly, if you want to mark up a vague date like May 1886, like that, you can't do it in the &lt;time&gt; element, which means the microformats people didn't adopt this.</p>
     <p>[13:51] I was speaking to some guys who use microformats a lot. One guy runs a museum website and he said, &quot;Well, there's no point in using the &lt;time&gt; element for some dates, but not for other dates.&quot; So they don't use it at all, they use a different pattern. Wikipedia has the same problem with its historical articles.</p>
     <p>[14:11] So this is a case I think of when it's a great idea, but for some reason these things are disallowed. And when we complained to the working group -- a guy researching family trees, the guy from the museum website, some people that do Wikipedia articles -- we complained, and they said, &quot;There is no use case for this stuff.&quot; So it doesn't go in. In fact, not only does it not go in, they are thinking about taking the &lt;time&gt; element out, which is a shame.</p>
     <p>[14:42] &lt;figure&gt;, I love &lt;figure&gt; as well because it always used to piss me off when I'd have a little caption below an image and that was indistinguishable with the running text around it. So &lt;figure&gt; first made its appearance in HTML3. HTML3 never made it. It was replaced by HTML3.2. But HTML3 was designed to be backwards compatible with HTML2.</p>
     <p>[15:10] And one of the things guiding the way it was written was they were looking at lots and lots of websites and working out what people did, and then they tried to put that into the language, which is very similar with what we have with HTML5.</p>
     <p>[15:23] So in HTML3 you had &lt;fig src = and a picture&gt;, a &lt;caption&gt; element, a &lt;credit&gt; element to say who took the picture, and that was it. We've got something very similar now. HTML5 &lt;figure&gt;, you'll notice it doesn't have a src attribute there. The reason is it's backwards compatible.</p>
     <p>[15:45] If a browser doesn't know what to do with a &lt;figure&gt; element, and none of them really understand it, you'll still get this image shown. With this, if you don't know what to do with a &lt;fig&gt; element, then the picture isn't shown, so it's not backwards compatible. HTML5 attempts to be backwards compatible, or at least degrade properly.</p>
     <p>[16:07] We don't have a &lt;caption&gt; child because of legacy DOM issues with using caption, and we don't have a &lt;credit&gt; element, but the &lt;small&gt; element here has been redefined. It no longer means, &quot;Show me small text.&quot; It means &quot;Small print, legal things, caveats, and attributions.&quot; So that works well here.</p>
     <p>[16:31] And with a trivial bit of CSS3 bling, you can get it looking quite nice, so that is that with the mandatory rounded corners and the box shadows, which, as you all know, you must have in a design, or the design police come and get you.</p>
     <p>[16:53] So &lt;figure&gt; doesn't do anything in modern browsers, so obviously, therefore, all HTML5 semantics are meaningless and useless. &lt;details&gt; does something. I really like the &lt;details&gt; element because I've seen people drag in the whole jQuery library just to do what &lt;details&gt; does.</p>
     <p>[17:15] &lt;details&gt; is simple. You have this &lt;summary&gt; element here, and you could say something like, &quot;Click here.&quot; In Derek's earlier presentation with the contextual help in a form, you could probably use this here, and instead of saying, &quot;Click here,&quot; you could say, &quot;Help,&quot; or something.</p>
     <p>[17:31] And when you do click here, this stuff is revealed. It's basically an &quot;expando/collapso&quot; box, but it doesn't need any JavaScript. It's only implemented at the moment in Chrome, and it's - you can only access it by the keyboard. You can't use - you can only access it by the mouse, you can't use the keyboard.</p>
     <p>[17:51] But it looks like this, so there it is closed up, and when you click on &quot;More Information,&quot; you get this useful information there. That's how &lt;details&gt; works. So this has a use in browsers now. We're implementing it in Opera. It will doubtless be implemented in Firefox and Safari and IE, probably. So the biggie is the structural semantics. This is an anthill, by the way. It's kind of an ant structure sort of thing.</p>
     <p>[18:27] We've all seen this kind of website. It could be a blog. It could be a news site, and these could be news articles, or it could be YouTube and those could be videos. It could be Amazon.com and those are books. What you'll notice is, of course, there are no semantics here. All you've got is DIV, and DIV in HTML4 means nothing. It's just an arbitrary grouping mechanism.</p>
     <p>[18:56] So for styling and etc., people give it IDs and classes. The thing is, with those, is they can be arbitrary. You could equally well style this if your CSS allowed it, with these words, these completely random words that mean very little. This would work. The trouble is - the trouble is it's completely - it's completely invisible to any kind of a machine crawler.</p>
     <p>[19:36] So, in 2004, the HTML5 working group did an analysis of, I think, a billion webpages, a 1,000 million webpages, and Ian Hickson, the editor, published a report. In 2008, we did a similar thing at Opera called MAMA. It was 3 million randomly chosen URLs -- kind of random, because we made sure we grabbed some non-English language URLs as well.</p>
     <p>[20:06] And these are the top 20 class names that get attached to elements on the real Web, the real Web that we write. And you see class footer, content, header, nav, main, the immortal msonormal - God bless it. Here's the top 20 IDs. You can see the top 3,000 if you want to go to that URL. Footer, logo, container, main, menu.</p>
     <p>[20:35] But if I wanted to write a browser extension, when I press the letter, &quot;n,&quot; and it jumped straight to the navigation, I'm going to have to use some kind of heuristics. I'm going to have to maybe guess that any group of links close to each other is the nav, or I might look for a DIV of ID menu. But I might also have to look for DIV ID of nav or maybe sidebar, or maybe navigation.</p>
     <p>[21:04] And, of course, at a restaurant website, DIV ID of menu may not be navigation at all. It might be a food menu. And heuristics are rubbish, because they are ambiguous. And so, what we need are semantics that tell us what this content means, and that's what semantic means. Semantic is unambiguously describing your content for meaning.</p>
     <p>[21:29] Now ARIA, which Derek mentioned earlier gives us this. In ARIA you can say role of banner, role of navigation, role of content info. But the trouble is with ARIA is you have to know about it, and you have to bolt it on, and we know that most people can't be bothered to write alternate text, so the likelihood of them bolting this stuff on is very, very little.</p>
     <p>[21:53] What we need is this stuff built in. They said they're going to do this. This is in 2004, so not everything suggested in here made it into the spec. But the idea was to relieve the most common pseudo semantic uses of DIV, and now we have this: &lt;header&gt;, &lt;nav&gt;, &lt;footer&gt;.</p>
     <p>[22:16] So now if I want to write a browser extension whereby I press &quot;n,&quot; and it scrolls straight to the navigation. It just has to look for the &lt;nav&gt; element, and there you go. There's no ambiguity. There's no heuristics. It can just hone in and do that.</p>
     <p>[22:32] There's no &lt;content&gt; element, you'll notice. I don't have a &lt;main&gt; or a &lt;content&gt; tag. The reason is is you can deduce this unambiguously with an algorithm. I call this the Scooby-Doo algorithm. Are you all familiar with Scooby-Doo? Do you know the cartoon of Scooby-Doo?</p>
     <p>[22:54] So you'll know that at the end of each episode when they pull the face -- the mask -- off the ghost, it's always the janitor of the disused theme park. And you know it's going to be the janitor of the disused theme park because he's the only character in the episode who isn't Fred, Daphne, Velma, Shaggy, or Scoobs.</p>
     <p>[23:14] It's the same thing with the Scooby-Doo algorithm. The first bit of content on the page that is not &lt;header&gt;, &lt;footer&gt;, &lt;nav&gt;, or &lt;aside&gt; is, by definition, the beginning of the main content. Therefore, we don't have a tag for it. But it doesn't matter, because we can find out where it is, so we don't need an extra element. And there's the Scooby-Doo algorithm illustrated for you.</p>
     <p>[23:43] These elements have in the spec built-in ARIA roles. So the &lt;nav&gt; element carries with it the ARIA role of navigation. It doesn't work yet, but it will work, and because screen readers already hook into those ARIA roles, there's absolutely no reason to assume that when the spec is finally settled and the screen reader manufacturers get their asses together, that they will not hook in to these semantics.</p>
     <p>[24:19] You can use them now and they don't do anything, but they almost certainly will have a value. Just because nothing can use them yet should not mean that you don't use these things now. The good thing with this is that accessibility, which I care a lot about, is carried along on the back of the furry bunny of HTML5. Where the furry bunny goes, the bird of accessibility follows. I want to emphasize this is a bunny and not a hare, and therefore I have no romantic interest in it. That would be absolutely disgusting.</p>
     <p>[25:01] OK, sectioning content. This is a bit of what we in the computer science world call a bit of a head fuck. Now what this does, these tags make new sections. Consider this &lt;article&gt;. Here we have an &lt;article&gt;, &quot;Ant fucking for beginners. Never fuck an elephant. It is not an ant. It will not be happy about your advances.&quot; The heading is an &lt;h1&gt;.</p>
     <p>[25:33] Now you see this article on my website and you think, &quot;By God, that's a useful article! I'm going to syndicate that.&quot; Your website, however, looks like this. There's a &lt;h2&gt; for today's articles, and you want to put my article here. But that means you've got an &lt;h1&gt;, an &lt;h2&gt;, and then another &lt;h1&gt;, and the heading structure is, therefore, illogical.</p>
     <p>[25:59] With HTML5, that doesn't matter, because with HTML5, it knows what logical heading you use by the nesting of those tags. So, in HTML5, this is the same as this, is the same as this. In effect, think of &lt;h1&gt; to &lt;h6&gt; as a generic heading element.</p>
     <p>[26:31] The reason we don't have a heading element is because that wouldn't be backwards compatible, but don't really think about the number after the &quot;h.&quot; Think about how you nest them. And then, this will give you a logical structure regardless of how you syndicate this stuff around.</p>
     <p>[26:52] The spec says you should, in the golden future, only use h1s, but you can't do that now, because no browser, I think, actually implements this outlying algorithm yet, and therefore no screen reader will understand it, and if everything on your page is an &lt;h1&gt;, there's no hierarchy for a screen reader user to navigate through.</p>
     <p>[27:15] But the spec also says, &quot;Well, you can just use the ranking that you would normally use anyway, and it will still understand it.&quot; So if you want to do this, I'd advise that you still use &lt;h1&gt;, &lt;h2&gt; to &lt;h6&gt; as you ordinarily would. It might be weird when syndicated, but in this golden future, it will not matter. It will just work. But, again, nothing implements this now, but it will.</p>
     <p>[27:42] Where am I? OK, what's the difference between &lt;section&gt; and &lt;article&gt;? A lot of people ask me this. &lt;section&gt; is a part of a whole, &lt;article&gt; is a thing in and of itself. A &lt;section&gt; is a discrete entity that can be syndicated like my &lt;article&gt; there about ant fucking, for example.</p>
     <p>[28:08] I don't know if you have the same linguistic confusion in Dutch, but in English people think of &quot;article,&quot; and they think of a magazine article or a blog post. But article doesn't really mean that. Article is like article of clothing, and a visual image is - imagine that this lime green mankini is an article.</p>
     <p>[28:37] I would have worn it. I packed it because the weather looked nicer, but it's turned bad, and so, sadly, I'm not going to wear it. But if you play your cards right and buy me a beer at the party afterwards, I may be tempted.</p>
     <p>[28:49] Now, if you were to cut this mankini, it would not be the full discrete article anymore. It can't be cut up, or it can be, but you have to be really nice and respect me in the morning. It can be syndicated. So articles can be syndicated like a blog article, but also an Amazon book, for example, can be syndicated in Amazon Wish List.</p>
     <p>[29:17] So I can syndicate this mankini. I can give it to Chris Heilman and he can wear it, and that's like syndicating it. And he can syndicate it by giving it to ppk, who will hopefully wash it first. But you see where I'm going with this whole thing. So this is an article, OK? That's the difference.</p>
     <p>[29:35] Right. Where am I? Yeah. &lt;articles&gt; are a discrete entity, &lt;sections&gt; cut up those things into smaller parts. Maybe you have a blog and you have a list of &lt;articles&gt; about sports news, and a list of &lt;articles&gt; about entertainment news. You have a &lt;section&gt; titled &quot;Sports News,&quot; and then &lt;articles&gt; within that, and a &lt;section&gt; headed &quot;Entertainment News,&quot; and &lt;articles&gt; within that. You can put &lt;sections&gt; inside of &lt;articles&gt; to divide up the heading levels. That's how it works.</p>
     <p>[30:07] OK, so we've looked at some of the new semantics, but the confusion between &lt;section&gt; and &lt;article&gt; - personally I don't think it's terribly confusing, but then, I'm an ant fucker. But we get so many emails to html5doctor.com asking this question, that it got me thinking, &quot;Is the spec actually tight enough for people to use these things properly?&quot;</p>
     <p>[30:35] So the spec says that header element is a group of introductory or navigational aids. The footer, conversely, contains information about the section that it's contained in, about who wrote it. But if in the top of my article I want a header, and then I want to say, &quot;By Bruce,&quot; do I have to put a footer at the top? That's kind of weird.</p>
     <p>[31:02] &lt;CITE&gt; is another example. In HTML4, you can put &lt;CITE&gt; around a name. In HTML5, this is explicitly disallowed. Is that a problem? We could worry about that, but there is a golden rule, and the golden rule is, &quot;There is no golden rule,&quot; unfortunately.</p>
     <p>[31:23] Like I said earlier, these things are about meaning, and meanings are about communication, and those aren't necessarily easily pigeon-holed into 105 different elements. What you got to do is decide, make your best guess, and having made your best guess, be consistent. That's the golden rule.</p>
     <p>[31:50] Then, are semantics teleological? By teleological, I mean are semantics a thing in and of themselves, or do you mark stuff up with an eye on what's going to consume it? I've always said semantic is about meaning, and meaning is just meaning. Meaning is just is.</p>
     <p>[32:13] So when I first started playing with HTML5, every link to somewhere else in my website I was wrapping in a &lt;nav&gt; element. Then I realized that on some pages I had seven different &lt;navs&gt;. Now people who would need that &lt;nav&gt; element - I'm not talking about search engines or screen scrapers - people who would need that &lt;nav&gt; element, probably people with screen readers, would probably be really pissed off by all these &lt;nav&gt; elements.</p>
     <p>[32:46] In the same way that if every word in your email is in capital letters, none of them are emphasized, if you have loads and loads of &lt;nav&gt; elements, it makes it almost impossible, or certainly very frustrating for the people who need to hone in on the &lt;nav&gt; to find it. So I've started to think about who's going to use my &lt;nav&gt; element, and I've started to think that I'm only going to mark up the most important &lt;nav&gt; on my page with the &lt;nav&gt; element.</p>
     <p>[33:16] On the other hand, with the &lt;time&gt; element, it worries me that they're thinking about taking out of the spec, because nothing uses it. No search engines are looking at &lt;times&gt;. There are no microformats use for it. It seems to me, though, if you take stuff out of the spec because nothing's going to use it, you mean that nothing can ever use it. So, personally, I'm still using this stuff, even though at the moment nothing is consuming it.</p>
     <p>[33:51] Do we have the right semantics? These things were invented in 2004. Now, when the Web was invented, when HTML1 was dreamed up, it was mostly for marking up physics or maths papers, which means that we have a keyboard element, a &lt;SAMP&gt; element, the &lt;VAR&gt; elements, which most of us probably never really use. Now we've got &lt;header&gt;, &lt;footer&gt;, &lt;nav&gt;, etc. because we use those. But that was the Web as of 2004.</p>
     <p>[34:20] Does the Web in 2011 now actually need new semantics? So there's a guy called Dmitry Turin, in Russia, who's been inventing HTML6 for a long time. His HTML6 has handy stuff, whereby, a 3x100 DBMS table can be looked at in a 10x10 table. He's displaying hypercubes, etc. I don't think Dmitry has the right idea about what semantics we need. Bless him.</p>
     <p>[34:53] But HTML3, so we've got the banner we've renamed header, and we use that. Do we need a &lt;NOTE&gt; element? That was suggested in HTML3. HTML3 suggested a &lt;person&gt; element. That could be useful, but we don't have it.</p>
     <p>[35:08] To me, a lot of the things we see on the Web are based around who, where, and when. We can say &quot;when&quot; with &lt;time&gt;. We don't have a way to say &quot;who,&quot; and we don't have a way to say &quot;where,&quot; even though geolocation is prevalent. You could have a &lt;location&gt; element with a latitude and longitude attributes.</p>
     <p>[35:29] I, personally, would like it to be called &quot;place,&quot; because then I could have a T-shirt saying, &quot;I've got the time if you've got the place,&quot; and it would be a great T-shirt. I doubt we're going to see these things coming soon, but HTML is a living standard, and just in the same way that it's evolved to add new structures for the Web as it is now, it will continue to evolve.</p>
     <p>[35:53] Do we need a &lt;login&gt; element? Do we need a &lt;share&gt; element that you click and it sends it off to your favorite social network? I don't know. Do we need a &lt;picture&gt; element? This would be really cool. This is basically the &lt;video&gt; element, but I've just put the word &quot;picture&quot; in, and what this could do, for example, is it could use media queries to grab a different sized image from the server depending upon screen width.</p>
     <p>[36:19] I think that would be pretty useful, and inside you could have an image fallback. That would be pretty cool. We don't have it, but there's a use for it, probably. And do these things matter anyway? Do semantics matter if there is nobody consuming &lt;header&gt;, &lt;footer&gt;, etc? Is there any point in them?</p>
     <p>[36:48] Here is a button from a big-name website. It's a button, and as Derek would tell you, you would probably mark this up with a &lt;button&gt; element. This is actually the markup that they use. You've got five DIVs, IDs that don't make sense, a nice class name there, a tabindex of zero so that you can actually focus on it with a keyboard.</p>
     <p>[37:22] If they wanted to they could add role equals button and bolt on a bit of accessibility. You've got some other completely nonsensical stuff like, &quot;unselectable='non'&quot;… &quot;unselectable='on'&quot; Sorry.</p>
     <p>[37:35] But, of course, rather than bolting on tabindex, and rather than bolting on role, what they could have just used is a &lt;button&gt; element. The reason they don't - I surmise, I don't know - the reason they don't is because they want that &lt;button&gt; to look the same across all browsers.</p>
     <p>[37:56] Now, I'm personally of the opinion that it's folly, and it's foolish, and it's unnecessary to try to make everything look the same across browsers, personally, but you might be designers and your mileage may vary.</p>
     <p>[38:11] A good friend of mine, a lovely Dutch lady called Annie, Anne van Kesteren, - here, Anne. Anne works for Opera, but is also one of the core committee of the type behind HTML5 wrote this plea for clean markup. &quot;Write whatever the fuck you want with some WAI-ARIA sugar on top is in some scenarios the only thing that works right now. I do not believe that means we should continue to let its course. The real solution to this problem isn't to have five DIVs with some WAI-ARIA bolt-on. It's just to make &lt;input type=&quot;button&quot;&gt; more style-able.&quot;</p>
     <p>[38:53] So I could understand in this circumstance why people do that. Personally, I wouldn't. But if you believe that everything should be pixel-perfect across every browser, I can understand why you do that. I find it more difficult to understand why this link is marked up like that. There seems to be no earthly reason for this. The trouble is with this is it's arguably unmaintainable, it's got dodgy accessibility, and it's just using the tech wrongly, I think.</p>
     <p>[39:37] Pretty much everyone agrees that semantics are yummy. But if you actually ask them why, it's a bit tricky for them to answer. What do you want to do with those semantics? This was a question by a guy called Robin Bergeong on an &quot;A List Apart&quot; article written by Lachlan Hunt. Years ago now, a preview of HTML5 semantics. And I think the thing is is that it's easy to dream up some use cases.</p>
     <p>[40:06] The use case for &lt;nav&gt;, for example, we see every day when you go to a site, or when you have to code a site with skip links at the top. This is a hack, actually, to jump to or over navigation. If you have semantics, you can make a browser button that just does this, and then you don't need to do skip links.</p>
     <p>[40:31] The thing is, is the way the Web has grown up is that we haven't really ever known what's going to come next. It's because that we built it on relatively simple technologies with a small arsenal of pretty easy to understand elements and tags that we've been able to add all this extra, cool shit on.</p>
     <p>[40:55] If you abandon the idea of marking up your meaning, I think - and we're free to disagree -- I think you lose a lot of potential for stuff that we haven't dreamed of yet. Because I'll bet you that when Tim Berners-Lee was inventing this shit, he didn't dream of what we've got now. The reason we've got what we have now is because of things like semantics and simplicity.</p>
     <p>[41:25] And I see this a lot. This really distresses me. I see websites that just have an opening &lt;body&gt; element, and a closing &lt;/body&gt; element and the rest of the stuff is squirted in through JavaScript. If you analyze the JavaScript, some of it's pretty decent, some of it's using semantics. But a lot of it is just squirting in DIVs, mucking around with it, occasionally squirting in a bit of WAI-ARIA sugar as a sop, as a lip service to accessibility, as lip service to semantics.</p>
     <p>[42:02] The trouble with this is that the worst example I've seen of this is somebody squirting in loads of JavaScript that can only be consumed by one particular rendering engine - because they block others - and the final result is simply a blog with some photographs.</p>
     <p>[42:26] If you do that - because if your vision of the Web is just a mechanism of squirting down some obfuscated JavaScript that can only be read by one rendering engine - that's your prerogative, but what you're doing is just reinventing Flash, but just using the browser instead of a plugin. It's unreadable. It's unmaintainable. It loses all the things that have made the Web great, it's unmashupable. The Web has been based upon the ability to get hold of stuff from one website, mash it up.</p>
     <p>[42:58] It also - and call me a silly old romantic here - but you also lose the ability to do this. This is view source. This is how I learned. I'm an old guy, but the guy who wrote this, Jack Osborne, is 24 years old. Feel free to look around my source code, it's how I learned.</p>
     <p>[43:17] This is absolutely vital, I think, to the continuing Web that is open to all because the Web is meant to be a mechanism for people to communicate to people via a machine. And it's meant to be open, it's meant to be accessible, it's meant to be international, it's meant to be universal.</p>
     <p>[43:42] So, yeah, I'm Bruce, I fuck ants - but some ants are worth fucking. Thank you very much.</p>
     <p>[applause]</p>
     <p>Bruce: [44:05] Anybody want to tell me I'm talking nonsense, or berate me, or ask a question? Chap down there.</p>
     <p>Audience Member: [44:22] In the beginning, you said that the HTML role can be done well in 4, [HTML4] but should be driven, right? And you also said, that if you said that [inaudible 44:36] are correlated with 5 [HTML5] , just by different means. What do you think about using just custom namespaces and stuff that if you find it with custom, it was done?</p>
     <p>Bruce: [44:46] What do I think about what, sorry?</p>
     <p>Audience Member: [44:47] Do you find custom namespaces or do you customize them?</p>
     <p>Bruce: [44:51] What do I think about using custom namespaces, et cetera? It all feels a bit... Viscerally, my gut feels that that's not good. I think that in order to use that stuff, it immediately stops this content being universal. That's my personal opinion. I'm very attached to the fact that we have those 105 tags that mean something. Yeah there's woolliness, and yes, there's ambiguity. But that stuff can be consumed anywhere, just inside the browser without reference to something else or somewhere else. So, to me, it's extra universality, personally. Does that answer the question?</p>
     <p>Audience Member: [45:40] Yep.</p>
     <p>Bruce: [45:41] Do you agree, or disagree, or?</p>
     <p>Audience Member: [45:43] Well, I see Facebook and stuff where they're having profiles and stuff in something else that they use. Like an additional markup language.</p>
     <p>Bruce: [45:54] Like FBML, et cetera.</p>
     <p>Audience Member: [45:55] Exactly. So, there are a lot of directions. Some of these like data attributes for Firefox use the XML markup. Technically, you would benefit from the document object model, so there are two different branches.</p>
     <p>Bruce: [46:10] Yeah, the data attributes are really good. But data attributes are only meant to be consumed by a script on the same page, they're not for wider scraping. There is microdata that can do that, but the thing is that microdata - again, it's bolting stuff on and I always think that building stuff in beats bolting on.</p>
     <p>[46:28] I am also suspicious of people who invent their own markup languages or try to embrace and extend the existing standard, because there is an end result to embracing and extending, I think, which can often be extinguish.</p>
     <p>[46:43] Anybody else, you want to tell me off? Chap at the back or maybe chapess.</p>
     <p>Audience Member: [46:49] How do search engines value these new semantics at the moment?</p>
     <p>Bruce: [46:56] How do search engines deal with them? I don't know, because weirdly, Mr. Google hasn't given me his algorithm. But I had a look -- if you go to html5doctor.com, which is a site I co-curate, we had a look at all the stuff that Google have said publicly and basically it boils down to, &quot;We don't do anything with these HTML5 tags yet, but we encourage you to continue experimenting and using them, and then we will do something with them in the future.&quot;</p>
     <p>[47:33] Now, that was at least a year ago, 18 months ago. When they will is something I just really can't answer, but it seems to me that Ian Hickson, who is the editor of HTML5, has been employed by Google for half a decade to write the spec. So it would seem to me that a search engine manufacturer who was paying for this stuff to be written is probably going to make use of it.</p>
     <p>[47:57] Also with microdata, which is a way of adding extra semantics -- a bit like microformats -- to HTML5, there is an organization called Schema.org, which is a consortium of Google, Bing, and Yahoo who are publishing data patterns that you can use - that they will use when indexing pages. I mean, that's what they say, &quot;We will use this stuff.&quot; Schema.org.</p>
     <p>[48:25] I didn't cover microdata simply because it's after lunch, I've talked for 45 minutes, and you would get bored after three hours, but maybe on the redux edition of the talk or something.</p>
     <p>[48:38] Anymore questions? Yes, the gentleman at the front.</p>
     <p>Audience Member: [48:47] The question is mainly that - oh, this is loud -- in reading the news packet, they talk a lot about, like, documents, how we specify documents, sections, articles and so on, but now the Web is moving towards Web apps, so you want like interfaces configured - which is components and something like that - and that seems to be totally left out.</p>
     <p>Bruce: [49:13] I agree. It does look to me like quite document-centric markup, probably because it was written in 2004 and at that point they knew that there were going to be more and more Web apps, but they don't seem to meet that many semantics for Web apps.</p>
     <p>[49:29] That's why I was kind of thinking, &quot;Do we need a &lt;login&gt; element? Do we need a &lt;share&gt; element? I know that there are moves afoot to invent some kind of components and I believe Alex Russell from Google is going to talk about those tomorrow.</p>
     <p>[49:45] I haven't looked to them in any great depth. It looks to me like - from the little I have seen and I am hoping to learn loads from Alex tomorrow -- it looks to me like it's a Web for computer scientists to write rather than for real human beings to write. But that's purely on looking at the spec for about a minute-and-a-half and not researched.</p>
     <p>[50:08] But, yes, I agree that the new semantics we have were dreamed up in 2004, however, HTML is a living standard and they will be doubtless dreaming up stuff more suited to apps. And, of course, don't also forget that, &quot;Yes, there are Web apps,&quot; and, &quot;Yeah, they're high profile,&quot; but I haven't done any statistical analysis but I would still reckon that the vast majority of webpages that are written are document-centric webpages. Did that answer the question?</p>
     <p>Audience Member: [50:41] Mostly, yeah.</p>
     <p>Bruce: [50:42] Cool. Tune in for Alex's talk tomorrow, I think, to learn about components and stuff. Ralph?</p>
     <p>Ralph: [50:50] Hey, Bruce, great talk. On the same vein, actually, as we're seeing more components come out - things like form elements with validation, et cetera - we're seeing things that have behaviors defined that go along with them. We see them implementing Opera, for example, in one way.</p>
     <p>[51:09] Are there any efforts afoot and I know we talked about this earlier, maybe half-a-year ago, to either make those extendable so that people can alter those or actually have user experience guidelines and user interface guidelines for how they are implemented? And is there any focus on user experience when these guidelines are being created because we are creating more complicated components that have lots of behaviors in them?</p>
     <p>Bruce: [51:35] I'll deal with that in two parts. So are there any moves afoot to make those things extendable or customizable? Yes, there was a spec called XBL2. So every time I said to people, &quot;How can we style the slider in an HTML5 &lt;input type=&quot;range&quot;&gt;? How can we make weekends a different color in the date picker?&quot;</p>
     <p>[52:01] Everybody said, &quot;Wait for XBL2 to be implemented,&quot; which was an unsatisfactory answer. XBL died last week. They had a funeral, and the guys who are - the cool stuff like that is being wrapped into, I think, the component stuff that Alex will talk about tomorrow.</p>
     <p>[52:22] I don't know nothing more than that, but I have seen Alex talk before and he is going to tell us all about it. As for user experience guidelines, the specs just say a browser can throw an error if you type in an invalid email format into &lt;input type=&quot;email&quot;&gt;.</p>
     <p>[52:41] There is no indication or suggestion of how that error should manifest itself or how it should be shown. It's for the browsers to work out how best to fit in with their user experience guidelines, how they manifest itself, which is unfortunate, because it means that they will be different across browsers but it depends.</p>
     <p>[53:04] For myself, I don't worry too much about differences between browsers, but I know that you all are much more for an homogenous user experience, so maybe it's unfortunate from your perspective or maybe I am putting words into your mouth.</p>
     <p>Ralph: [53:15] As we go from more documents to applications, do you see that becoming more of an issue? I don't know why my voice has changed on this microphone, but...</p>
     <p>Bruce: [53:27] I have not thought about it in any depth in order to say anything sensible here at the moment.</p>
     <p>[53:36] Anymore? Anyone ask about ants? No? I'd done so much ant research for this. What's my favorite ant? It's got to be Adam Ant, the singer from the '80s, who did &quot;Prince Charming&quot; and &quot;Stand And Deliver.&quot;</p>
     <p>[53:57] In which case, as there are no more questions and as my time is up, thank you very much for listening and not at least obviously falling asleep. Cheers. Thank you very much, everybody.</p>
     <p>[applause]</p>
     <p>[54:13]</p>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>1</strong> comment</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <h3 class="extra">Comments</h3>
     <dl id="comments" class="reacties">
      <dt id="comment-62"><a href="#comment-62" class="number" id="latest-comment">1</a> <a href="http://tinnituss.net/">tinnitus cure</a> on 29-01-2013 at 16:58 o'clock:</dt>
       <dd>i love this blog very informative post thanks</dd>
     </dl>
     <form method="post" action="/congres/2011/sessions/html5-semantics-bruce-lawson.md" id="comment">
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
