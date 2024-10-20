<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>Go with the Flow by Stephen Hay · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p519">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>Go with the Flow by Stephen Hay</h2>
     <h3>Video</h3>
     <video width="640" height="360" src="/_downloads/2011/stephen-hay-go-with-the-flow.webm" controls>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2011/stephen-hay-go-with-the-flow.webm">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="http://vimeo.com/32126964">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2011/stephen-hay-go-with-the-flow.webm">Download video</a> (WebM, 116MB)</li>
     </ul>
     <h3>Slides</h3>
     <iframe src="https://www.slideshare.net/slideshow/embed_code/9595283" width="550" height="460"></iframe>
     <ul>
      <li><a href="http://www.slideshare.net/stephenhay/go-with-the-flow-9595283">See slides on SlideShare</a></li>
     </ul>
     <h3>Transcript</h3>
     <p>Stephen Hay: [0:01] Thank you very much. I changed the topic, so... No, I'm just kidding. After seeing all these great presentations today, I don't think it's too early to give a big round of applause to everybody who works with the Fronteers Group and Tuschinski. So, let's give them all a big hand.</p>
     <p>[applause]</p>
     <p>Stephen: [0:39] Last night, I saw @mortendk who is a well-known Drupal developer, and he seemed to have a lot of success by showing a picture of Ron Jeremy in his presentation. People thought he was cool, and charming, and funny, and he got free beer, and women were throwing themselves at him. So, Ron Jeremy, ladies and gentlemen.</p>
     <p>[1:04] What I want to talk about today is layout. I know a lot of you know that I like to talk about layout, and I have this habit of talking about things that are really cool, that we can't use today. Today, I'm going to do exactly the same thing, OK?</p>
     <p>[1:22] But I want to look back to print. The web is kind of weird and print is kind of weird. I don't know if any of you remember the old days. Justin hinted at how long I've been doing this work. My first site was in 1995 and it used server-side image maps, I don't even know if they still exist. But then you'll get an idea, I'm your grandpa, basically.</p>
     <p>[1:47] A long time ago, everyone was talking about the web's going to kill print. We wouldn't have magazines anymore, they would die out, the web would just take over everything. Now that the web has grown, everyone is looking back to print and thinking, &quot;Hey, why can't we do that? Why can't we do that? Why can't we do all these cool things that people do in print?&quot;</p>
     <p>[2:11] If we look at something like this, which I blatantly stole from &quot;Smashing Magazine,&quot; so plug &quot;Smashing Magazine.&quot; This is &quot;The Guardian,&quot; and if you look at the layout here there are a lot of things going on.</p>
     <p>[2:27] Probably the most obvious is that the text flows from one column, to the next column, to the next column, you've got this multicolumn layout thing. It's not really constrained, it does look very neat.</p>
     <p>[2:40] This is the type of thing people are looking at and thinking, &quot;Why can't we do these types of things on the web?&quot;</p>
     <p>[2:47] This also. Strange things with forms, the things you could do with the text here, like a v-form.</p>
     <p>[2:58] The idea is that people think that the web is really nice and it's taken off, but the creativity is limited by the technology. You can't do these types of things in browsers. Or you can, you could probably use Flash to do most of this stuff, but I guess most of you aren't here to learn about Flash.</p>
     <p>[3:20] This is another example, letting text flow around certain types of shapes. In your most basic desktop publishing programs, these things are really, really easy to do. You don't even really have to think about it, you could basically draw a shape that you want text to flow around, text automatically flows from column to column, et cetera.</p>
     <p>[3:46] The reason that people wanted to do this was because of the tablets. Since we have the iPad, and all these other tablets, there are these magazine type of apps that you can get. This is what people find really interesting.</p>
     <p>[4:01] It's not surprising that the spec I'm going to be talking about today was thought up by people who work at Adobe. Adobe's made a lot of the publishing software that we've used, way back when I did print work. It's very easy to use, and you could do all the things that actually, they're trying to implement now. So, tablets is one reason.</p>
     <p>[4:27] It's not a bad thing. People are worried that these apps are going to be more magazine-like, which is kind of contradictory to what you'd want on the web. But it's not really, because now people are thinking about layout.</p>
     <p>[4:41] The funny thing about that is that it's one of the most important things that we need on the web -- layout. It's one of the things, for some reason, we just don't get, we still can't do it.</p>
     <p>[4:54] I talked two years ago, I talked about Flexbox, and what turned out later to be Grid Layout, the template layout module. Just now, in IE10, in the developer preview, that's been implemented. Flexbox can be used in its current form, which is changing, thanks to the person who's going to be speaking later on, my hero, Tab Atkins.</p>
     <p>[5:21] He changed some things around, and it's better now, and it will be changed in all the browsers. But you could use the current implementation in Firefox, WebKit browsers, most of them. They even work on mobile devices, most of them anyways. It's a good thing.</p>
     <p>[5:40] But there are different kinds of layout and the focus has mostly been on this type of thing, decorative properties. I think they're valuable and they're fun. They can be used when they're used subtly, and not like an overblown blink, in this case. The focus has been on those things.</p>
     <p>[6:03] I'm not sure why it is. We sent robots to Mars, and stuff like that, but for some reason, it's too difficult to implement a layout algorithm in a browser. I don't know why that is because I don't understand anything about making browsers.</p>
     <p>[6:17] But I do know that it's very frustrating, that the one thing that we've needed since the very beginning of the web, or at least the commercial web, we haven't been able to use. But, whatever we do, we can put a shadow behind it.</p>
     <p>[6:31] There are different types of layout, page layout. By that I mean, what I talked about two years ago, template layout and grid layout. These are probably the ways that you want to layout pages.</p>
     <p>[6:46] If you remember the grid layout syntax, it looks kind of like ASCII-art, some people called it ASCII-art. Basically, you were setting up a framework, like a pegboard, that you can hang things on or put things in. It's kind of like a table but it's not. That's the best way to layout pages.</p>
     <p>[7:04] Then we have a UI component, or just component layout, which I think Flexbox is more suited to do. Flexbox is, in a way, it's similar to a table as well. But the nice thing about Flexbox is you could have a toolbar with buttons, for example, that just take up all the available space, they just share the available space. You could divvy up the available space however you want.</p>
     <p>[7:34] Flexbox is really good for that, and that's starting to show up. I had this discussion with Tab last night. I hope that Flexbox doesn't get too widely implemented for a long time before Grid Layout gets implemented.</p>
     <p>[7:49] What's going to happen is people are going to do their page layout in Flexbox, which you can do, but after a while, after all this nesting, it can get pretty hairy. Every type of layout is useful within its own domain.</p>
     <p>[8:08] What I'm going to be talking about today is content layout. That's interesting, because there's this focus right now on the web. We know how to make websites, we're thinking a little bit more accessibly, not always, but the current discussion is about content. Content is king, and basically and when you design a mobile site, LukeW talks about Mobile First.</p>
     <p>[8:32] Most of the time you're talking about a linearized version of your content, or just your structure content in the linear format that it has before you style it. There are things that you can do within the content, that have to do with layout, without using things like Grid and Flexbox, that will convolute your markup, or your styles anyway.</p>
     <p>[8:58] So, multicolumn layout, I think... Who's familiar with multicolumn?</p>
     <p>[9:03] OK, almost everyone. It's very easy to use. We've got a bunch of text, and now we have three columns of text. The only thing that we have to do, in order to do this, are these lines. Can everyone read that OK? It's kind of dark.</p>
     <p>[9:29] All you do is put the prefix on there, how many columns do we want, and what is the gap between columns. That's, in its basic form, multicolumn layout. It's just so easy to do and you can use it today.</p>
     <p>[9:43] The default would be, if we go back here, that you'd get this big container of text. For your fallback, for browsers that don't support it, you'd probably want to think about how wide that container is. But this is pretty easy to do and most everyone knows how to do it.</p>
     <p>[10:01] So, CSS3 Regions, who knows about this?</p>
     <p>[10:08] OK. Well, you can all leave now. CSS3 Regions is a way to do... It's like an extension of multicolumn layout, which allows you to arbitrarily place containers.</p>
     <p>[10:22] When you have this div, that you split into three columns in multicolumn layout, they're all next to each other, they have the same height, they're usually of equal widths. Now you can just place things in different places on the page, or on the screen, and let content flow through them.</p>
     <p>[10:45] This is one example of how this works. I love the idea that Leah had of making the cursor really big. Now, if I could only grab it. OK, you see what happens? Here's your mobile layout, if you will, and this just kind of morphs into that. Not totally responsive, that's not the point of this.</p>
     <p>[11:09] The idea is to show that the content moves from one column, in this case, over to one longer box at the top, and then across two columns. That's the whole idea of CSS3 Regions.</p>
     <p>[11:27] Here exist three regions, one at the top and then the two columns. Those two columns could be placed next to each other. I could have one column somewhere else on the page.</p>
     <p>[11:40] Think in terms of a newspaper. Sometimes they'll have a headline, and then the article starts in one column, and then next to that there's this large photo. Then underneath the photo, the story continues over five or six columns. This is the type of thing that you can do with CSS3 Regions.</p>
     <p>[12:02] The use cases for Regions, I even tend to wonder how often you'll be able to use this in practice. If you're going to be playing with all these different containers, and letting content flow through them, often times you'd probably need some real space to do it.</p>
     <p>[12:24] This looks fine when it's Tuschinski size, but when it's on an iPad, I'm not quite sure that... I think two columns would work fine, but after you make your text smaller, you'll run into limits.</p>
     <p>[12:43] This is how that's made. At the top, it's slightly hard to see. We've got content here, say that's the whole article that you just saw. Then underneath, there are three empty divs, in this case. There are more ways to do this, but this is the most basic one.</p>
     <p>[13:06] So, there are three divs that have nothing in them. The CSS basically says, the source, that's the article, we're going to give that a name. We're going to call it a flow and give that a name, hence the name, &quot;named flows.&quot;</p>
     <p>[13:26] Then IDs one, two and three, these empty divs, are accepting content are accepting content from that flow. So this is what it looks like, and what I am showing you now is in Chrome Dev.</p>
     <p>[13:40] So this is in a browser. This works. Now, unfortunately only in Chrome Dev or WebKit Nightly, but we will talk about that in a bit. But this is how simple it is to let your columns go whatever way you want and of course one, two, and three have their own styling. So I have to explicitly say where I want these on the page, etc., etc.</p>
     <p>[14:04] The problem with this type of thing is that it's still being made and the fact that it's in Chrome Dev and WebKit Nightly that means that people are still working on it. And much to my dismay, yesterday morning I realized that the examples that I had prepared were obsolete and that's because I think it was six days ago they changed the spec. OK.</p>
     <p>[14:33] So now instead of what we have here, prefix &quot;flow&quot; and then &quot;flowname&quot; and &quot;from-flow&quot; &quot;flowname.&quot; I think Divya told me that there were a lot of arguments about if it should be &quot;from-flow&quot; or &quot;flow-from&quot; and apparently &quot;flow-from,&quot; that sounds more like what you are doing. It is flowing from this into that, so those must be very interesting discussions. So now it's &quot;flow-into&quot; and &quot;flow-from&quot; and instead of &quot;from-flow&quot; and just &quot;flow.&quot;</p>
     <p>[15:17] So, it looks like this. OK? Flow-into, which I am still trying to get my head around that naming convention, actually this is the thing that you want to flow into other things, so you are giving that the flow-name and then flow-from I understand, but flow-into, I will have to chew on that some more.</p>
     <p>[15:41] So this is the newer syntax. There was also ordering in this and strangely enough they took the ordering out so you would be able to say, &quot;I want content to flow from the first div or section, I want that to go into the third one and then the content to flow into the first one,&quot; so you could like rearrange the order of things.</p>
     <p>[16:04] I guess I don't know why you would want to do that and I guess they didn't know why you would want to do it either, so that's why it's gone. So let me show you these regions -- if I can get in here -- with the red border you could see where the regions are, OK? But also you could see something interesting happening here.</p>
     <p>[16:30] If you look at the top region, which is just a div, the red text which is like, let's say it's in introduction or introductory text. It goes partway from the one div into the next div. So it goes from one region to the other. It flows over. Sometimes you might not want that to happen because let's say my type region is the one that's supposed to span the whole page, but I don't want that. I want the heading to be by itself in the top region.</p>
     <p>[17:00] Who is familiar with paged media here? OK, a lot less people. Very, very, very interesting stuff actually. Paged media treats - well, basically, it was for print, so you have these pages when you print something out and with CSS you could tell the document where it should break. So you could say, &quot;I want it to break after every second level heading or before every heading or after certain paragraphs.&quot;</p>
     <p>[17:34] So, that was a really interesting thing and what they have done now with the newer version of regions is that they have aligned the page aspects with paged media. So, you can treat each region as a page as it were, so the content can flow into one. If you see these red boxes as pages, then you could say, &quot;I want the first page to have only the heading and after the heading it will break and that looks like this.&quot; OK?</p>
     <p>[18:12] So, you can do this type of thing. You could also break it after the introduction. There, I have noticed some limits to this. First of all, in Chrome Dev, it's not a complete specification, it's not a complete implementation of this spec, plus it's the old one, not the one from six days ago. And that one from six days ago that's not even officially published, that's just a dev version right now.</p>
     <p>[18:37] So, it's all going to change. So it's not totally complete, but what I have noticed is there are some weird things that you have to think about. For example, right now, I pretty much have to be explicit about how big those boxes are that content is going to flow into.</p>
     <p>[18:55] Sometimes I don't want to do that. One thing that's important to know is that when you have use regions, first we had the content; if your browser does not support regions, it will just show that content and then three empty divs basically, which you won't see. But what happens is that content gets removed and put into those three divs, so anything you had in those three divs gets replaced by the content and the original content is gone. It's moved over.</p>
     <p>[19:27] That means that you could have content in those three divs and then it would be removed on browsers that support regions. So, at least, that's how it works right now. So, there are couple of things that need to be worked out I guess.</p>
     <p>[19:49] Here is an example of how to do a page-break, break-before. In the implementation I am using it's region break-before, WebKit region break-before and lead is that that little introductory text, so basically what I'm saying here is, put a page-break right before that leading text. OK.</p>
     <p>[20:17] There are three different types of breaks, break-before, break-after, and break-inside. For each one of these, you could say avoid or always. So, for example, I always want to break-before H2s or I never want to, I want to avoid breaking before H2s, for example. So the layout will try to adjust for that type of thing.</p>
     <p>[20:49] Another interesting part of regions is overflow. This is really complicated and does not work right now, but it will be fantastic when it does work. But it does introduce a lot of problems. When you have this type of magazine layout, there is a reason that writers for magazines and newspapers have word counts that they have to do.</p>
     <p>[21:15] I just wrote an article for a magazine and I had to fit my whole story into I think 2,500 words, impossible to do. It's very tough to do. It was the hardest thing of writing the whole article. It wasn't writing, it was keeping it in 2500 words. Why did they do that? Because they have a certain amount of space and they know what they can do with that amount of words. And this is going to be no different.</p>
     <p>[21:40] These kind of problems we are saying we like the stuff that we are doing with print and we are seeing it as a layout problem when it's not only a layout problem. There is a whole logistical problem and editorial problem after that. So, this is what the situation is right now.</p>
     <p>[21:58] You have got your content over here. These are the empty sections in this case and by default it's a region overflow break. That means that the content just stops. It's like basically overflow hidden, which is really weird to see. Right now, you can't even adjust that. You cannot show that content that overflows. It's just not possible, but the whole idea of the spec is to have that be possible and be able to do up there the top right that you could set it to visible.</p>
     <p>[22:34] Then the content which flows out, if some editor writes an extra paragraph, you will be able to see it. But what's under that, what's under that section, that's going to be interesting, things are going to overlap or it will have to push things down. So there are lot of problems that could be introduced in this case.</p>
     <p>[22:59] We are all familiar with media queries @media, da-da-da. There is also @region like this @region #foo. I want the region to have a background color and I want anything that's flowed into that region to have a bigger font size. So that's interesting because it doesn't matter what the content is, you can style a region and any content that flows into it will get those styles. Most properties or most of the decorative properties are supported within regions in this way.</p>
     <p>[23:37] So, you could say anything that's in my intro-box, I want to have a little bit bigger and italic for example. That's a good thing to have because you could also have a region for, let's say that you have the first line of a text that it will always be in a certain style, sidebars and things of that nature. If you combine this with the page-breaks, then you can do really interesting things.</p>
     <p>[24:13] This does not work right now by the way, so. This is what it would look like if you took an article. This is straight from the spec. This top introduction that flows into this section and then it moves over to the middle section and then over to the right. This type of layout is what you can do with regions. Coo, eh?</p>
     <p>[laughter]</p>
     <p>Stephen: [24:48] I am sorry, look at the kittens.</p>
     <p>[laughter]</p>
     <p>Stephen: [24:56] Exclusions -- who knows about this? Anyone seen Adobe's demo? Bruce has written about it. The things I showed you in the beginning, those magazine or newspaper things where content could flow around certain forms, that's exclusions and Adobe is really crazy about the exclusions idea, because most of their demo which is this, is based off of the idea of exclusions, which I think are less important than the regions themselves, but it's eye-candy and everyone likes eye-candy. So, it's right up there with the box shadows.</p>
     <p>[25:40] You can see how the text flows around and right now we have the same problem. This is a nice demo, but still the overflow is hidden, so you don't see what effect it has on the rest of the layout, but these are really interesting things.</p>
     <p>[26:00] This is a prototype that Adobe made about this same subject. This is a really interesting one because I think this is probably the first practical use of exclusions is for dropped caps and this type of thing -- on one side. These exclusions, they call them exclusions because you exclude an area where the text will flow around.</p>
     <p>[26:24] You could also put the text in one of these shapes, so you could see here on an iPad. You will notice one of the problems already is that hyphenation and justification on the web is a real big problem. So the browsers don't know for every language the best place to... Well, right now, it's not supported I guess without JavaScript, you could do it, but it's really tough.</p>
     <p>[26:54] So the best hyphenation and justification that there is right now on the computer as far as I know is LaTeX, which is a document formatting system. Which is really old, but the typography was done not only by a computer scientist, but also by a typographer.</p>
     <p>[27:13] It's just beautiful. You don't have these weird gaps in between the text. You don't have it here as well. But on one of the slides earlier, you saw that there were gaps between the text and stuff like that. That's not a problem that's going to be solved.</p>
     <p>[27:30] Basically, the same rule is applied now that's been applied for years. It's better not to justify text, to full justify text on the web because it's just ugly. You never know what's going to happen and you never know if it's going to increase or decrease a font size.</p>
     <p>[27:44] OK, so this looks perfect now, but as soon as I bump the font size up a bit, then I could have huge gaps in between my words, which doesn't look nice at all. This is exclusion.</p>
     <p>[27:58] I'm not going to go into the syntax of exclusions, because exclusions is going to be moved into position floats, as far as I know. That's pretty much what they are, floats that you can actually write coordinates for to make a form. Much like, I'd say it's similar to SVG in that sense. You just have vector coordinates and you can draw a form that way.</p>
     <p>[28:23] You can either have text in that form or surrounding the form. You can fill the form with a photo, for example, in the shape of a heart and have the text running around that. That's interesting stuff.</p>
     <p>[28:39] Another thing that's important with any type of multicolumn layout, or regions in this case, is line-grid.</p>
     <p>[28:48] The line-grid specification I've found to be very, very interesting. How many of you know about -- I guess Richard Rutter is the one who started talking about it -- the vertical rhythm of text. I think most people have read something about that. You probably do it in your own work as well.</p>
     <p>[29:06] The whole idea of it is to have it as a baseline that all your text lines up against. Ideally, you'd have all your headings and all of your photos, illustrations, anything you have on a page, you'd want to line up with these baselines in some way. So, you'd have this vertical rhythm going from top to bottom.</p>
     <p>[29:26] The focus on grid layout is always about columns and typographic grids and stuff like that. But this type of grid, a line-grid, is just as important. It gives a feeling of calm to a design. It has some kind of system to it, instead of some arbitrary form.</p>
     <p>[29:49] The way we fake that today is by doing a lot of really simple, but really annoying addition and just easy math. But it's really annoying to have to this all the time.</p>
     <p>[30:03] So let's say I want my line height to be 1.5 in this case. I want 1.5em on the top of the paragraph, 1.5em on the bottom of the paragraph. Then I know that all my paragraphs and all my gaps between paragraphs are going to be exactly perfectly spaced the way I want. It could be 1.2 or 1.3, but you do it with all these three -- margin top, margin bottom and line type.</p>
     <p>[30:27] When you have a heading that's a certain height, then you want to calculate what the margins should be on that heading, which should be at least a factor of that that you did for paragraphs. You just have to do that for every single element that you have on a page, which is just annoying as hell.</p>
     <p>[30:52] Now, we will hopefully have this, if people think it's important enough to start implementing, which it is, especially with multicolumn. Imagine multicolumn layout right now, because you're talking about one container with, let's say, three columns, it's easy that the text will line up because the container is the same height across all three columns. So it's not really a problem.</p>
     <p>[31:21] But once you get into regions, you might have containers of different heights, or maybe even different widths and heights. Then you never know when they start, how the content flows over. You want, across the columns, every column of text to line up so that you could actually take a ruler, if you will, and line it up across the screen.</p>
     <p>[31:41] The way to do that would be to set a gridline and say, &quot;I want 1.5,&quot; and 1.5 is just a number based off of your body font, I believe. You just say, &quot;This is the baseline and I want my margin to be one gridline high and the bottom margin to be one grid line on the bottom.&quot;</p>
     <p>[32:07] You could say two gridlines and that wouldn't matter because you would still have that even spacing according to a baseline, which is also very, very basic stuff in most desktop publishing software. This is just new to the web. So hopefully, this will get implemented.</p>
     <p>[32:30] So, we have some nice tools for content layout, multicolumns, regions, exclusions and line-grid. These are basically the tools that we will be able to use, and I think pretty quickly, actually. If you look at how it's working out in Chrome Dev, I think the last commits were probably not even two weeks ago.</p>
     <p>[32:54] Now, of course, everything that they committed, they can go ahead and change because the specs have been changed. But the people working on it know about the changes apparently. Hopefully, those will be worked out at least in WebKit. I know that there are a lot of browser people here. I hope that Firefox and Opera will follow suit, because we need this.</p>
     <p>[33:23] It's hard for me to talk about a tool, because this is a kind of tool talk, without getting all philosophical on you about how you should use this and why you should use this and stuff like that. But the one thing that I notice about the wonderful community that we have -- and that's what it is -- I love working with these people.</p>
     <p>[33:46] I loved the Fronteers conference because the audience is at least as smart or smarter than anyone on the stage and we have great discussions. We all have one thing in common and that's that we love our tools. They're really fun. We love little tinkering with stuff. That's probably that curiosity, that love of playing around with stuff. That's why we do what we do, because this is an industry where we can do that.</p>
     <p>[34:19] The problem with that is that tools, normally, they're a means to an end. So when I'm at home, I don't think, &quot;God, I've got this excellent screwdriver and I'm going to go around the house and try to figure out where I can use the screwdriver.&quot; But that's pretty much what we do, &quot;Oh, cool, rounded corners.&quot;</p>
     <p>[34:41] I think someone told me today that Molly Holzschlag said something like, &quot;We spent years, five years, trying to get rounded corners, and now we have them and no one wants them.&quot; That is the feeling that I get, especially with those decorative properties. But we focus a lot on tools. Even our clients focus on tools.</p>
     <p>[35:04] How many of you have had a client who has decided, &quot;Well, we chose this CMS and we want you to do the front end for it,&quot; or something like that? They start by choosing a system instead of looking at what the problem is and figuring out what the best tool is to solve the problem.</p>
     <p>[35:23] Exclusions is a slippery slope, because it's like all that eye candy of letting things float around other things and making shapes. You could just make cool stuff that everyone is going to ooh and ah about, and that's a problem because we also love to show off.</p>
     <p>[35:40] Why are there 15,000 CSS frameworks? Because mine is better than yours -- that's what everybody thinks. They're going to keep making these things. Everyone, we love to tinker, optimize and stuff like that. So it's something to think about.</p>
     <p>[35:56] Exclusions look really nice. Regions is probably a little bit more useful in some use cases, but be careful. Don't just use them because they're there or because it will look cool. Just see.</p>
     <p>[36:09] CSS is huge now and it keeps changing all the time. So just start with nothing, basically. Use no tools whatsoever. Then only use that tool that you need at every step to make your design better. A lot of people call that zero-based thinking. So you just start with a blank canvas.</p>
     <p>[36:32] I just have text and images. I have nothing. That's the way we teach mobile first as well, just start off with your content. What do you want to do? If it's an app, what's the functionality? And don't think about how you're going to do it yet; that's step two. Then choose the right tools for the job. Otherwise, we're going to be...</p>
     <p>[36:54] There's going to be like exclusions.ES or something like that and we'll be able to see all the exclusions websites. So just be aware that this could become some new fad, especially like with a prototype like what Adobe made. OK?</p>
     <p>[37:11] So, thank you for listening to this. I've got a lot of time for questions. Then we'll have a break. So if any of you have any questions, thank you.</p>
     <p>[applause]</p>
     <p>Stephen: [37:39] None? It's all clear? Oh, there's one, OK. Thank you.</p>
     <p>Woman 1: [37:49] If you look at responsive web design, how would you see flexible images be put in the vertical line-grid?</p>
     <p>Stephen: [38:01] That's a really good question. [laughs]</p>
     <p>[38:07] I don't know. I don't know. I think that would be a fun thing to think about, yeah. I don't even know what line-grid. Line-grid is really being fleshed out, so it's clearly not done. There are almost more notes in there than there are actual texts of the specification.</p>
     <p>[38:29] So, I would think that it would be an idea to get some kind of thing in line-grid, which would accommodate for that. So that would probably be the best thing, to have it in the spec, but right now, I'd have to think about that and probably tinker around with it.</p>
     <p>[38:48] OK, anyone else? Yes?</p>
     <p>Man 1: [38:55] I really love the stuff you showed us. But you talk about we can use this stuff in Chrome Dev, WebKit, etc. These are all cool parameters, and I love them and I use them every day. But in reality, we have to deal with the big elephant in the room, namely Internet Explorer.</p>
     <p>Stephen: [39:05] Yeah.</p>
     <p>Man 1: [39:19] So what would you recommend or how would you recommend to use these tools and still deal with Internet Explorer?</p>
     <p>Stephen: [39:30] Well, first of all, Internet Explorer probably, I think, has the most complete implementation of the current, or at least the previous version of this specification. And Internet Explorer 10.0, it also has grid layout. Actually, Internet Explorer 10.0, that's going to be totally awesome when it comes out, so then I think your question is really 9.0 and earlier.</p>
     <p>[39:57] Regions works off the idea that you have to have this content already there, and you can put that in the container. Then you take anything that's in the container and you flow it through certain regions. That means that you would have to think about...</p>
     <p>[40:15] In the same way that you would have to think about mobile first if you were doing a responsive design, you would have to do your basic content first region-less, before you do regions, until everyone supports it, which probably will take a while. It's the way things always go.</p>
     <p>[40:35] So, that means that what I showed before, I could probably go back there. Oh, hi Chris, here, do this one.</p>
     <p>[40:51] OK. Here, basically, this one is just a div with content, OK? If I didn't have regions, this would just be one big column. So, what I could do is on that column, I could style this div to be a smaller column and that's going to disappear anyway if regions are supported. You understand what I mean?</p>
     <p>[41:21] So you will have to actually style twice, but you could keep your styles pretty simple, but there is just no way around it, that's the world that we live in. So, you have a fall back basically. OK?</p>
     <p>Man 2: [41:42] A question here. You mentioned as an example the newspaper. Hello?</p>
     <p>Stephen: [41:47] Yeah, I am sorry. Where?</p>
     <p>Man 2: [41:48] Up there, hoo-hoo, on the balcony.</p>
     <p>Stephen: [41:51] Oh, hi.</p>
     <p>Man 2: [41:51] Hi. Excuse me.</p>
     <p>Stephen: [41:54] I am sorry. I didn't mean to ignore all of you.</p>
     <p>Man 2: [41:56] That's OK. As an example you mentioned the newspaper and you showed the exclusion and the artwork that resulted from it, but basically it only makes sense when you have a big newspaper and when you can scroll horizontally properly, so that you can see clearly, that's one thing browsers or any mobile content or whatever does that and that's scrolling horizontally.</p>
     <p>[42:24] Should you strive to duplicate lot of the things that we haven't print for legacy reasons, a screen, screens emit light, screens can reflow text, screens can rescale text. I have seen some applications that even show tubes or knobs which is great in the real world because it makes sense there, but it doesn't make on the screen because screens are that different.</p>
     <p>Stephen: [42:49] Right. I think I understand your point is that we don't want to try to emulate real life all the time. We have this technology and that web technology and all the devices that we have, the iPads and everything, they offer something new. So it doesn't make much sense to keep trying to emulate something else when we already have that.</p>
     <p>[43:11] I mean if you want real knobs, just get real knobs, you don't have to get real knobs and then make them on an iPad. I agree with that. I dislike those types of apps. I think it feels unnatural because a tablet has its own naturalness to it and it's not the same naturalness of a physical thing. It's a different kind of physical basically, even if you have like haptics or something like that where you get this kind of feel feedback.</p>
     <p>[43:42] It's still different than the real world, and I think print is the same thing. I don't think people should try to emulate print and I think that's a danger of something like regions. There is a danger with every single thing that gets developed. In this case, the danger would be that you try to make a print magazine on an iPad, which is people have tried to do that and the page turns and everything, I don't know, I don't know.</p>
     <p>[44:10] Why? So I agree, so I agree, it's something to be careful of but people are going to do it. Just like the flash, the catalogs that you can browse through in Flash and you actually have to take your mouse and your pointer and do that, which is just crazy. I'd just rather press a button.</p>
     <p>Man 2: [44:33] Thank you.</p>
     <p>Stephen: [44:34] OK. Robert?</p>
     <p>Robert: [44:39] Hi.</p>
     <p>Stephen: [44:39] Hi.</p>
     <p>Robert: [44:41] Well, you can hear me? Looking at the number of the specifications that have changed recently, like there is the first draft and then some web browsers implemented and then it's changing, so you know sort of redoing implementations and redoing syntax and stuff like that.</p>
     <p>Stephen: [44:55] Redoing presentation slides.</p>
     <p>Robert: [44:57] Right.</p>
     <p>Stephen: [44:57] Right.</p>
     <p>Robert: [44:58] Yeah, that's the worst, that sucks. Do you think we should keep on doing that, having web browsers implement everything as soon as, as you read the first paragraph in a spec or wait a while until it's sort of more stable -- it's never going to be finished but stabilize at least before we start doing things. The way I see it, many developers jump on this and then they don't maintain it or have it forward compatible in anyway. So, when the thing is just built for a certain version of WebKit or something like that, then it just lies around forever.</p>
     <p>Stephen: [45:33] Yeah, I agree. I like talking about this stuff that's pretty new and that you really can't practically use, but the idea is that you will be able to. Just like Flexbox two years ago, I had people come up to me afterward and say, &quot;I loved your talk and it was really interesting but you know it's not practical at all and we'll never be able to use it.&quot; Luckily, that's turning out not to be true. It's taking a long, long time, but it's turning out not to be true.</p>
     <p>[46:02] It's kind of a double-edged sword because I subscribe to the CSS mailing list, which if you want like 57 times more mail than you have today, subscribe to the CSS mailing list. Everyone is talking about every little detail and arguing and stuff like that. Some people, I like their style, like Tab is pretty active and he will say and he will tell you later about all the new stuff going on.</p>
     <p>[46:31] But he's just like &quot;I am going to do it like this because I think this is better and here's why&quot; and yeah, you can't argue with that, but the problem is that people are going to discuss and bicker about things forever. So when do you say &quot;OK. Now, we are at a stopping point and now we are going to implement things.&quot;</p>
     <p>[46:52] I think that the implementation and that has led a lot of the specs in the past and there is no reason why if Chrome takes the lead or the WebKit people take the lead in implementing this type of thing, there is no reason why the spec won't follow suit because you have already got this implementation, people have tried it out, people like me who love to play around with this stuff, you can find out problems and then you could throw it in the group because you can't really find out all the problems without using it, without trying it out first.</p>
     <p>[47:32] So, I like it that at least it's in Chrome Dev because I could play with it and now I already have lot of questions, which I will badger Tab with this evening, so. He is like, oh shit, OK. It's not really an answer to your question, I just think that you have to have implementation. You are worried about people using it in actual websites then?</p>
     <p>Robert: [47:59] Well, in some cases, like you take something like Flexbox, I think the changes are good, but at the same time, it was around so far and people started actually using it live in a number of websites and then it changes after a year or two, and then it sort of becomes a problem with maintenance.</p>
     <p>Stephen: [48:19] Yeah. Well, luckily I don't think Flexbox has changed enough that it has to be a real big problem, but it is more consistent with the other modules and I guess that's important as well. Also, I don't know if you should use these things in a production environment unless you are prepared to go back and change it again or least have really decent fallbacks.</p>
     <p>[48:47] They are bleeding edge, so you got to be careful with that stuff. I hope people don't start doing this stuff tomorrow. This site needs to be viewed in Chrome Dev. My mom won't know what that means. Yeah?</p>
     <p>Man 4: [49:04] OK. We have to - first, mentioning of your mom, that's good. I don't know if you remember and I had discussion with PBK the other day and we both did and I just looked it up and finally found it. The International Herald Tribune in 2005 had a 3-column layout that flowed the text in three columns and allowed it paginate through it with JavaScript.</p>
     <p>[49:26] The site has now been bought by another newspaper I think, so it's not online anymore, but back then it was also awful for performance. So, this stuff is not easy on the rendering engines. Do you think that we will run into a performance problem when people start playing that? As you said, it's very tempting to do really complex things with those.</p>
     <p>Stephen: [49:48] Yeah, but I would call it testing...</p>
     <p>Man 4: [49:52] You just said you should build it.</p>
     <p>Stephen: [49:53] It's like beta testing. I just said it we should build it, oh you mean implement it in your browser?</p>
     <p>Man 4: [49:58] Yeah.</p>
     <p>Stephen: [49:59] Yeah.</p>
     <p>Man 4: [49:59] No, the main problem is like these things it's like it's good to have them in dev builds right now, and I am going to talk about this, we should try them out in content management systems, we should try them out in systems even if it's on a build because we will run into real performance issues once we run them alongside other technologies.</p>
     <p>[50:19] So, just seeing how we can make them flow right now is nice, but it will never be possible because of the over-headed means, then we just innovate it for ourselves again.</p>
     <p>Stephen: [50:30] OK. To be fair, I didn't know there were performance problems. OK, that was a little laugh on your part. Are there performance problems? At least not in Chrome, I didn't notice any, but then again I don't have a whole site running with it.</p>
     <p>Man 4: [50:48] That's the point, like building this inside of the system is probably a better way of testing it out.</p>
     <p>Stephen: [50:53] OK. Well, yeah, but if you build it inside another system, then how do you know to work right in the browser?</p>
     <p>Man 4: [51:02] No, no, inside another site, inside something like WordPress or Drupal or whatever, you know instead of just building demos we should run a heavy site with these things inside it and then see how it performs.</p>
     <p>Stephen: [51:14] Right. I agree.</p>
     <p>[51:21] Hi.</p>
     <p>Man 5: [51:30] Sorry, I work in a browser and I just wanted to question last point that, you know, that's not how we conduct computer science, right? These are algorithms, they are constraint solving algorithms. We can characterize them and we can know their performance.</p>
     <p>[51:41] When they are composed to large scale, yeah, there can be pathological cases but we can know those upfront.</p>
     <p>[51:49] CSS already has plenty of pathological cases, table-out for instance is NP. So, it's not like we are going to be adding more complexity than we have already got. It's just that we are going to be keeping you from sending all the code to figure this stuff out badly down the wire for yourself and having to reinvent it every time. So, thanks.</p>
     <p>Stephen: [52:06] OK. Anyone else? No. OK.</p>
     <p>Man 6: [52:17] I have a question.</p>
     <p>Stephen: [52:19] Well, there is one back there or no. Or did you...?</p>
     <p>Man 6: [52:23] Yeah, I have a question. Are you afraid that regions is going to add lots of excess markup?</p>
     <p>Stephen: [52:36] I am not really afraid of it. It does in this case like the demos that we have shown, but there were other approaches in the previous specification where they had examples of using a generated content. For example, just generating that extra markup in the content property basically, using the content property bit before the body or after the body or something like that. So, yes.</p>
     <p>Man 7: [53:09] Is there sound? Cool, OK. So I think the next speaker up and I can't enter that really well because I am in the group. Right now, the way it's defined you do need to throw extra markups, some dummy divs that you will position as the regions then fill in. It's expected that in the future we'll have a generic way to add arbitrary pseudo elements to stuff.</p>
     <p>[53:28] That way you can just say, OK, I'm not going to need three regions for this, all right, pseudo one, pseudo two, pseudo three, fill, fill, fill and then no new markup. But, we are punting on the issue right now so that we can solve that later properly without requiring regions to solve that before it's useful.</p>
     <p>Stephen: [53:46] Cool, thanks. Question back there? No? OK, well, thank you very much.</p>
     <p>[applause]</p>
     <p>[54:02]</p>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2011/sessions/go-with-the-flow-stephen-hay.md" id="comment">
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
