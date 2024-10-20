<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>Open-source ain't free by David DeSandro · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p753">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>Open-source ain't free by David DeSandro</h2>
     <video width="480" height="270" controls>
      <source src="/_downloads/2012/david-desandro-open-source-aint-free.webm" type="video/webm">
      <source src="/_downloads/2012/david-desandro-open-source-aint-free.mp4" type="video/mp4">
      <track src="/congres/2012/sessions/open-source-aint-free-david-desandro.vtt" default>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2012/david-desandro-open-source-aint-free.webm">download the video</a> (or the alternatives: <a href="/_downloads/2012/david-desandro-open-source-aint-free.mp4">1</a>) and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="https://vimeo.com/53373707">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2012/david-desandro-open-source-aint-free.webm">Download video</a> (WebM, 116MB)</li>
      <li><a href="/_downloads/2012/david-desandro-open-source-aint-free.mp3">Download audio</a> (MP3, 45MB)</li>
     </ul>
     <h3>Transcript</h3>
     <div class="transcript">
      <p><span data-start="00:00:08.000" data-end="00:00:30.000" data-start-seconds="8">...me if we're going to be tweeting later. These slides are online, so if you want to just follow along, go ahead on the bitly. I work at Twitter right now, but I'm going to be talking about some other things that I do in my spare time. I think the hash tag is #fqa, in case you want to be pinging me later.</span></p>
      <p><span data-start="00:00:30.000" data-end="00:00:46.000" data-start-seconds="30">Today's subjects. I want to talk about two things and how they work together. One, of course, is code and development, specifically open source front-end development. That's what I do. I think everybody in this room is probably interested in that.</span></p>
      <p><span data-start="00:00:46.000" data-end="00:01:18.000" data-start-seconds="46">The other one is money. Not necessarily money, but more like time and the cost of things like that. Or even trying to get more abstract with it. Think about the scarcity of the stuff you have, of resources. I went to college. We had a whole subject on this. It was economics. I didn't learn much from that, but I'm going to try to relate these two things together.</span></p>
      <p><span data-start="00:01:18.000" data-end="00:01:56.000" data-start-seconds="78">Before I get into that, I want to talk about View Source. When I think of front-end development and our craft, I could think of no better resource that we have than View Source. It's incredible. It's something that we all use so much every day, it's just a part of what we are. It's what we do. It's so integrated, it's almost like breathing. It's an invisible act. It's just what we do.</span></p>
      <p><span data-start="00:01:56.000" data-end="00:02:15.000" data-start-seconds="116">What's incredible about it is that we have an essential learning tool that anybody who sees any page can look into it and see the fundamental components behind it. It's universally available on every browser.</span></p>
      <p><span data-start="00:02:15.000" data-end="00:02:43.000" data-start-seconds="135">It's like you get a watch, and you're able to look inside and see all the various clock parts inside it. You get to see all the little machinations, how things move together. But it's even more incredible than that, because you don't get just one watch to practice on if you're working in a workshop. You don't get just one practice on. You get to look at anybody's watch. Anybody's watch that is wearing, you get to look right into it.</span></p>
      <p><span data-start="00:02:43.000" data-end="00:02:56.000" data-start-seconds="163">The things that we make, it's not only that we make them and produce them. Each one is an essential learning tool that we pass on to one another.</span></p>
      <p><span data-start="00:02:56.000" data-end="00:03:15.000" data-start-seconds="176">It's also very important that this tool is free. If we think about it. It doesn't cost any money. It's part of the browser. You don't have to pay for it. I went to university in the United States. That costs a lot of money, but the tools that we have, anybody has free access to.</span></p>
      <p><span data-start="00:03:15.000" data-end="00:03:31.000" data-start-seconds="195">You can think about the implications for that in the economic environment for development for what we do, it's really a low barrier to get into it. All you need is a browser. The browser already has View Source.</span></p>
      <p><span data-start="00:03:31.000" data-end="00:03:45.000" data-start-seconds="211">It creates this incredible environment for people that are creative. If you want to make stuff and actually show it somewhere, you're able to do it. It's also an incredible environment if you're curious and just want to see what's going on underneath the hood.</span></p>
      <p><span data-start="00:03:45.000" data-end="00:04:21.000" data-start-seconds="225">Because of this, people are going to make things. Just by their own sheer will, of being interested in these subjects, they're going to be producing things. We have these incredible tools all around our craft. Some of them we use every day, like Modernizr, HTML5 Boilerplate -- thank you, Mathias, for coming here -- and also Bootstrap, formerly of Twitter. We have these great tools because people had the impetus to make them themselves.</span></p>
      <p><span data-start="00:04:21.000" data-end="00:04:48.000" data-start-seconds="261">Of course, some of these were built out of works for clients or works on projects. But I think what's special about our craft is that these tools that we use every day are side projects. These are things that were made outside of the thing that makes the money. They're done almost as a pet project, as an act of love.</span></p>
      <p><span data-start="00:04:48.000" data-end="00:05:14.000" data-start-seconds="288">Of course, side projects are great. This has been talked about before. Everybody knows it. You get to work on things that interest you and things that excite you. You get to use things that you might not always have been able to use. You get to work those underused muscles, get real buff. Basically, build a brand for yourself and put your own name on it, making that personal brand.</span></p>
      <p><span data-start="00:05:14.000" data-end="00:05:39.000" data-start-seconds="314">If it's good enough, or even if it's interesting, you get to contribute to something that's much larger than yourself and give that tool to the entire community. Side projects are great. They satisfy all these needs which you probably don't get to address at your typical day job. It's great that we have side projects.</span></p>
      <p><span data-start="00:05:39.000" data-end="00:06:03.000" data-start-seconds="339">The other interesting thing is that these other side projects are typically released for free -- the ones I mentioned and pretty much anything that you get on GitHub. It doesn't cost anything. This is something that is omnipresent throughout our profession, it feels. It builds this culture of free, if you think about it.</span></p>
      <p><span data-start="00:06:03.000" data-end="00:06:25.000" data-start-seconds="363">It's particular to what we do as front-end developers, I think, primarily because of View Source. There is no way that you can put something behind the scenes and prevent somebody from getting it, because the things we make are always accessible because of View Source.</span></p>
      <p><span data-start="00:06:25.000" data-end="00:06:42.000" data-start-seconds="385">Speaking to the bigger culture of free, the things I mentioned don't cost any money. So you can learn for free. You can use other things. You don't have to pay for the other tools you make, the tools to make tools. And then even, it's free to market your stuff.</span></p>
      <p><span data-start="00:06:42.000" data-end="00:07:11.000" data-start-seconds="402">I think everybody is very excited to share what's cool and what's interesting. There are a lot of people out there now, myself included in this, that want to share something that's fascinating, that's great work. So it's free to market yourself, which, if you try to think about, if you make a movie, if you want people to talk about your movie, you need to get in touch with other people, and you really schmooze it up and make deals happen.</span></p>
      <p><span data-start="00:07:11.000" data-end="00:07:56.000" data-start-seconds="431">Whereas as opposed to in our craft and what we do, if your stuff is good enough, or just interesting or fascinating, it's going to spark some fire, and it's going to catch. It's free to do these things. I'd like to think of it, it's the ideal environment for the impulsively creative. If you just want to make something and get it out there, HTML and what we do is, it's perfect for this. So I'm going to talk a little bit about an open-source resource that I made called Masonry, just the brief history of it. Give me a moment here.</span></p>
      <p><span data-start="00:07:56.000" data-end="00:08:36.000" data-start-seconds="476">This is what it is. This is working at 800 pixels wide on the screen. I'm actually really impressed with myself here that it's actually holding up. So it's this thing, and I think you may have seen it before. So you have a couple boxes, and they get rearranged into this. It's basically a JavaScript thing. It's a jQuery plug-in. I made it a while ago, several years ago. And it starts getting picked up. I was real lucky to be linked by Andy Clark. That's what his page looks like now, and some other high-profile designers, like Camera Moll. Eventually it gets on Daring Fireball.</span></p>
      <p><span data-start="00:08:36.000" data-end="00:09:14.000" data-start-seconds="516">And I think this is the path that happens with other resources out there, other things that are kind of neat. For whatever reason, like I said about marketing, these things kind of spark unto themselves. But at this point, when the word finally gets out, it starts getting incorporated elsewhere on the web, and it starts becoming a part of the web community. It was picked up by WordPress themes and then put into Tumblr themes. And this eventually becomes the visual language for the web. It's not just a resource itself, it's just another toolkit that people can use and incorporate.</span></p>
      <p><span data-start="00:09:14.000" data-end="00:09:46.000" data-start-seconds="554">And of course, if I'm going to be talking about Masonry, I have to mention Pinterest. Now I should say that Pinterest, the developers, they have crafted their own experience, or their own solutions. So they didn't use any of my code. However, I would like to think that I had a little influence, possibly, in getting to that point. But of course, yeah, once Pinterest hits, then I've just been rolling in it, right?</span></p>
      <p><span data-start="00:09:46.000" data-end="00:10:25.000" data-start-seconds="586">But seriously, once it got to the point of popularity, there's a whole another side to that, which is managing the success of an open-source resource. And that's the meat of what I'm going to get to today. In my case, I started getting a lot of contact -- just emails, and things coming in on GitHub, pull requests, all these good problems, that people are interested and things that are coming my way, responses. People putting questions up on Stack Overflow, or even just sending me tweets and pinging me like that.</span></p>
      <p><span data-start="00:10:25.000" data-end="00:11:00.000" data-start-seconds="625">Most of these came in the form of support requests, which are typically from people that are interested. They can use the web, and they can kind of craft their own experience. But they're typically novice users, I would like to think, or people that are just having trouble. And I'd like to think that most people didn't have a problem with it, or if they're like you and me, or people that are interested in the craft, they usually just figure it out. So it's typically a small fraction of the user base that probably pinged me for...were in there having trouble with Masonry.</span></p>
      <p><span data-start="00:11:00.000" data-end="00:11:37.000" data-start-seconds="660">Typically they're email, their contact, was something like this. &quot;Hey, I tried it. I tried this, I tried that. I just can't figure it out, and it's just not working for me.&quot; Now, individually, each support request is manageable, right? A person takes five minutes. They can't figure it out. It's five minutes of their time which of course is free to them. They can contact me and it typically takes me 30 minutes to an hour to like look at the problem, look at the website, perhaps craft a demo or something like that. Put that online, email them back and get it all going.</span></p>
      <p><span data-start="00:11:37.000" data-end="00:12:33.000" data-start-seconds="697">So it's a short amount of time and each one by themselves can be handled. However in total, all of them together, they began to pile up. To the point where, I wanted to employ what I think is like the jerk face open source attitude which goes something like, &quot;Hey it's open source. You figure it out.&quot; And I even made a GIF for this so let's see if we can actually take a look at it. This is open source so you're free to use this in your own projects. [applause]</span></p>
      <p><span data-start="00:12:33.000" data-end="00:12:43.000" data-start-seconds="753">But really, that's not fair, right, to say deal with it? Because that kind of goes against what we're all about. This is a really friendly culture.</span></p>
      <p><span data-start="00:12:43.000" data-end="00:13:07.000" data-start-seconds="763">But I really had to manage this open source project of mine. It took time out of my life, about eight hours a week. Which doesn't sound like a lot but this is the part of my life that I get to...you know, the free time that you get. So this is a really special time for me and if I'm spending too much of it doing things that I'm not enjoying, that's obviously a problem.</span></p>
      <p><span data-start="00:13:07.000" data-end="00:13:24.000" data-start-seconds="787">I'm updating documentation. I'm writing new demos or maybe I'm putting in new features. But most of my time is really kind of supporting other people's requests.</span></p>
      <p><span data-start="00:13:24.000" data-end="00:13:53.000" data-start-seconds="804">So, like I said at the top, it's a matter of the scarcity of this, right? I only have so much of my time and there are only so many hours in the day. So it comes down to like a matter of cost, if you start thinking about it in this way. Even though it's great to be contributing to these things, it has a cost to it. And start thinking about this question, right? Like how valuable is my time?</span></p>
      <p><span data-start="00:13:53.000" data-end="00:14:19.000" data-start-seconds="833">And so, instead of thinking of the open source projects for all the great reasons that it is, right, instead of thinking about these benefits of it and trying to quantify that. Putting all of the projects in terms of a question like, &quot;Why don't I just put a price on this and put like a monetary value on my work?&quot;</span></p>
      <p><span data-start="00:14:19.000" data-end="00:14:38.000" data-start-seconds="859">Which is like a novel idea, I think, when you talk about open source things, right? But if you think about it in an abstract way, once you put a price on something, the users, they have to make a value judgment because money is something that is tangible. They either have it in their wallet or they can see it in a bank account.</span></p>
      <p><span data-start="00:14:38.000" data-end="00:14:48.000" data-start-seconds="878">And so, when you're going to use something and it costs them money with it, you have to ask yourself the question, is it worth it? Is it worth the money to spend on this?</span> <span data-start="00:14:48.000" data-end="00:15:13.000" data-start-seconds="888">Now, it's interesting to talk about this in front of development but there are other designers and developers that make money. They have all the marketplace. Think of like the app store for IOS or for Android. Or other people that are in the web world like there's WordPress themes and premium Tumbler themes. ExpressionEngine has it's own commercial add-ons kind of market.</span></p>
      <p><span data-start="00:15:13.000" data-end="00:15:41.000" data-start-seconds="913">Or if you're a designer, there's icon packs like Geomicons or Pictos. And now there's even a whole kind of other market that' springing up because of Kickstarter but that's kind of producing for physical good typically, when they ship. But that's not to say that it hasn't been tried before. So you have to wonder about is there a market for what I was trying to do.</span></p>
      <p><span data-start="00:15:41.000" data-end="00:15:58.000" data-start-seconds="941">There was never going to be a way that I was going to be able to prevent people from getting the thing. Like, as I mentioned before, there's no way to put up a pay wall. And so there's no way to say like &quot;Can't steal it&quot; because of view source as I mentioned at the top.</span></p>
      <p><span data-start="00:15:58.000" data-end="00:16:31.000" data-start-seconds="958">There are other people that tried to kind of get into it. So, the first one that at least I know of was FancyZoom by Panic which is a JavaScript kind of thing. So, let's see if this page actually works in the I-frame. So, it's like a light box thing here and you click on an image and something pops up. And what's really cool is that when Cabel at Panic released it, you could put it in these terms where it's like, &quot;Hey, you have to pay for it.&quot;</span></p>
      <p><span data-start="00:16:31.000" data-end="00:16:51.000" data-start-seconds="991">His wording was like, I'll just read it right here. &quot;In a bit of an experiment, if your website is commercial, for example if it makes you money, you can license FancyZoom for 39 dollars per site, a one-time fee.&quot; Kind of like a real novel idea here that, &quot;Hey. This is work and we're selling it. It's a product.&quot;</span></p>
      <p><span data-start="00:16:51.000" data-end="00:17:11.000" data-start-seconds="1011">There's some other examples like Wijmo which packages up jQuery plug-ins, got some really cool jQuery plug ins. And there have been some other innovators in this space. Nick Stakenburg, Shadowbox.js, the Impact JS Game Engine, recently View.js by Rogie.</span></p>
      <p><span data-start="00:17:11.000" data-end="00:17:23.000" data-start-seconds="1031">I was putting together a new product thinking about this as something that I was going to sell, not just like an open source resource. It's called Isotope.</span></p>
      <p><span data-start="00:17:23.000" data-end="00:18:02.000" data-start-seconds="1043">So it's pretty cool. It does this, right so animations. So it's like a nice resource, right? There's a jQuery plug in. I'll just briefly go over what it does. Like I said, it's animated filtering and sorting and it has like kind of neat layouts. There's some cool in-depth going on behind the scenes too. But what's not really interesting is what it is but thinking about this open source resource as something that I was selling as an actual product, right?</span></p>
      <p><span data-start="00:18:02.000" data-end="00:18:29.000" data-start-seconds="1082">I still want it to be open source. So it is available on GitHub. And what I decided is that I was going to adopt the FancyZoom licensing model. So basically, all I'm doing is like asking people to pay me for my work. So it's a one-time licensing fee. You pay it once. You get to use it as much as you want in all your commercial projects.</span></p>
      <p><span data-start="00:18:29.000" data-end="00:18:37.000" data-start-seconds="1109">I have the project but there's like another point to like actually getting like the money into my hands. And there have been other attempts to this.</span></p>
      <p><span data-start="00:18:37.000" data-end="00:18:52.000" data-start-seconds="1117">GitHub used to have a kind of like donation kind of button on their pages. There's also things called like Flattr which is you have to send them money. It goes different places. And of course you can put up like a generic PayPal donation button.</span></p>
      <p><span data-start="00:18:52.000" data-end="00:19:10.000" data-start-seconds="1132">Now, these are all solutions that have kind of been attempted but I really wasn't happy with any one of these. For example... We'll see if we can load up the Modernizr page.</span></p>
      <p><span data-start="00:19:10.000" data-end="00:19:36.000" data-start-seconds="1150">Modernizr is a great resource. I don't know if the page is going to come up, but it has like, &quot;Hey, donate to Modernizr,&quot; on their page, but what happens is, when you click that button, it shows up, and the email address is Faruk's email. He's one of the contributors. FarukAtes@me.com.</span></p>
      <p><span data-start="00:19:36.000" data-end="00:19:57.000" data-start-seconds="1176">I felt like that was a bit of a disconnect, because I'm like, I'm sure that Faruk works out the money, and things like that, but for somebody that wants to contribute to it, and then seeing one person's name on it, as opposed to the entire team or a collective email, that kind of made me feel a little weird, because this is my money, and I want to make sure it's distributed properly.</span></p>
      <p><span data-start="00:19:57.000" data-end="00:20:22.000" data-start-seconds="1197">It was very important for me to actually have something that I felt was proper, so I made an actual company. That's our cute logo, and it's a proper legal entity. This is important, because I wanted to get legitimate, and actually have something that was true, and that's something that people could understand.</span></p>
      <p><span data-start="00:20:22.000" data-end="00:20:56.000" data-start-seconds="1222">An important part of it is that my employers at the time, they were OK with it. They were really behind me putting out my own work and being a better developer. They saw that as an advantage to them, and they really supported me in it. So Metafizzy is a legitimate company, and this is important, because if you think about what companies do, it's that they make money, instead of just putting my own name on it.</span></p>
      <p><span data-start="00:20:56.000" data-end="00:21:24.000" data-start-seconds="1256">So I had all the things together. Giving the product in a way, I'm using Pulley app, so this is what the website looks like, and it hooks into PayPal. What happens it that a customer can make a purchase, and afterwards, once they go through the PayPal, the email gets sent with their product. Now, with Isotope, there's actually no product, because everything is still available online, so it's like, &quot;I don't know. Are they really actually getting anything?&quot;</span></p>
      <p><span data-start="00:21:24.000" data-end="00:21:55.000" data-start-seconds="1284">This is where I should've put my Bermuda pic. I was in Bermuda recently, and we go onto the beach, and there's this hut, and it basically says, &quot;Hey, if you want rental beach equipment, this is how it's going to work. You put the money in the box and you get out the rental equipment.&quot; I saw it, and I was like, &quot;Oh my God, this is the same model that I'm using for my own company, basically.&quot;</span></p>
      <p><span data-start="00:21:55.000" data-end="00:22:29.000" data-start-seconds="1315">Anybody could just go into the hut and just take out the chair, but it's basically asking, &quot;Hey, we're working on the honor system here, that you're going to pay for what we're going use.&quot; As a commercial enterprise, I'd be beholden to paying customers, because there's actually a legal thing that happens here, so I was thinking about in a different way, as opposed to just being open source, and I can't really employ that attitude with my funny gif anymore. It's a legitimate business now.</span></p>
      <p><span data-start="00:22:29.000" data-end="00:22:49.000" data-start-seconds="1349">It's also kind of weird, charging money for it. Does it feel kind of sleazy as an open source developer? Even talking about it, it's always kind of weird to mention money. Nobody really wants to say the things we make are actually worth something. I feel like it's kind of a bit like going against the ideal of open source, and things being free and always available.</span></p>
      <p><span data-start="00:22:49.000" data-end="00:23:24.000" data-start-seconds="1369">But I had everything together, the product, the way to get it out there, and the actual legal company. So the price came out. It was originally $37, it's now sold at $25, but the results have been absolutely incredible. I just basically asked people to pay me, and last year, it made up about 25 percent of my income, which is a substantial amount for me, so I was able to pay off my car loan and my student loan. These are big debt things.</span></p>
      <p><span data-start="00:23:24.000" data-end="00:23:51.000" data-start-seconds="1404">I'm not just trying to brag about the money here, but it impacted my quality of life, the thing which is really important. Typically we just make stuff, and we make it because it feels good, but this, I made it, and it actually helped out my life. Of course, it's not just for free. I actually had to put something into it, so I'd say about 25 percent of my working time was developing this product.</span></p>
      <p><span data-start="00:23:51.000" data-end="00:24:21.000" data-start-seconds="1431">Money is not necessarily completely evil, because people that are interested in the product, and the things that they make, they want to be invested in what they do. Allowing them to pay for it is actually a benefit to them, too, because it allows non-technical people to contribute to the project in a way that they wouldn't otherwise. They can't develop their own code, but they can contribute financially.</span></p>
      <p><span data-start="00:24:21.000" data-end="00:24:47.000" data-start-seconds="1461">I don't necessarily think it's a silver bullet. It's not going to solve all of our problems, putting a price on something. However, I do think this is a good idea. Just like putting a project up on GitHub, I think we should all take this idea and fork it. I don't know if this is the perfect solution, but I do know this could be a way forward. So if support emails are really bugging you, just think about it.</span></p>
      <p><span data-start="00:24:47.000" data-end="00:25:21.000" data-start-seconds="1487">I recently spoke with Scott Robbin a while ago. He's a developer in Chicago, and he makes a couple of real cool jQuery plugins, like jQuery Backstretch. I was talking to him about this same kind of model, and he actually picked it up himself, so he's got a premium support thing. If you want to email him, it's actually going to cost you money. Hopefully, I would love to see other people take up this model and try it out. I think it can really work to our advantage.</span></p>
      <p><span data-start="00:25:21.000" data-end="00:25:54.000" data-start-seconds="1521">I believe there's a huge market for what we do, and for actually putting a price on things. I hope I get competitors, and I hope people will have to decide against my product and what they spend on others, because if you're putting in the work, and you're not getting that value out of it, if it's costing something, it just doesn't scale to the point where people can start emailing you, and it's costing you too much. If you think about it in economic terms, it's basically a deficit that you're working on.</span></p>
      <p><span data-start="00:25:54.000" data-end="00:26:14.000" data-start-seconds="1554">I like to just think of it in this way. There is nothing wrong with making money off of honest work. With that, thank you so much for having me, and thank you for being a great audience. [applause]</span></p>
      <p><span data-start="00:26:14.000" data-end="00:26:38.000" data-start-seconds="1574">All right. Thank you very much. We've quite some time for Q&amp;A now. That's good, even if your images didn't show up and stuff, so join me in my corner here. So you wrote the slides this morning, the system and the slides?</span></p>
      <p><span data-start="00:26:38.000" data-end="00:26:44.000" data-start-seconds="1598">No, they've been in process for a while. Well, I was thinking about that Bermuda thing. I was like, &quot;I should add this,&quot; and then I... Yeah.</span></p>
      <p><span data-start="00:26:44.000" data-end="00:26:52.000" data-start-seconds="1604">We had a restaurant in my hometown, actually, that's pay as much as you think the food was worth, and it worked out really well for them.</span></p>
      <p><span data-start="00:26:52.000" data-end="00:27:11.000" data-start-seconds="1612">Yeah. I've heard about other situations, like a library or a bookstore, where there's a big sign that says, &quot;Hey, pay as much as you want. I trust you. I trust that you value this,&quot; so it's not just applied to code. It happens in other kind of sectors.</span></p>
      <p><span data-start="00:27:11.000" data-end="00:27:21.000" data-start-seconds="1631">There are a few questions coming in. One of the few interesting ones is, &quot;Are people more demanding in support after paying for the plugin?&quot;</span></p>
      <p><span data-start="00:27:21.000" data-end="00:28:00.000" data-start-seconds="1641">I originally had a whole support model, where I said, &quot;Hey, you pay for the product, I'll be happy to work on this for you, because you're a paying customer.&quot; It was good for a while, but it started taking up too much of my time. I work on this as a side project. I work every day at Twitter, and then I come home and maybe work on that stuff. Again, it was taking too much time out of my day, so I just decided to remove it from the product.</span></p>
      <p><span data-start="00:28:00.000" data-end="00:28:27.000" data-start-seconds="1680">I'm not good at it. I'm not good at doing support and helping people, because I have the expertise, and I could really be invested in what they do, and help out my customers, so I'm not really good at it. I hope there are people in the audience that can help out how we really do support on a larger scale, so it's not just one-on-one transactions.</span></p>
      <p><span data-start="00:28:27.000" data-end="00:28:39.000" data-start-seconds="1707">So support requests keep on coming in, and they still come in, but right now, I just put up a disclaimer saying, &quot;I don't know if I'm going to be good at it.&quot;</span></p>
      <p><span data-start="00:28:39.000" data-end="00:29:02.000" data-start-seconds="1719">That's the thing, though. There was the classic blog post by pinboard.in that basically said, &quot;I'm not free. I cost $10 from the very beginning, because I want to be able to support my product. I want to be able that, in a year's time, you can use Pinboard without me being bought by another company, or without me having to shut it down because some investor tells me I have to do it.&quot;</span></p>
      <p><span data-start="00:29:02.000" data-end="00:29:21.000" data-start-seconds="1742">It's quite a step to actually say, &quot;If you pay for it, then you should be getting something for it.&quot; On the other side, when Sparrow got bought the other day, and basically pasture sourced, as I call it, we put it out in the open and hope somebody does something with it, a lot of people complained about this.</span></p>
      <p><span data-start="00:29:21.000" data-end="00:29:46.000" data-start-seconds="1761">Somebody else wrote, &quot;He owes you nothing. It's a $10 app. That's basically two coffees, so let's not get over our heads ourselves, as developers, and say, 'I paid you $10. Where's my gold-played card that you promised me with that?'&quot; Do you think our community as a whole, or the web development communities, cannibalizing itself by not clicking on each other's ads, and not paying for things?</span></p>
      <p><span data-start="00:29:46.000" data-end="00:30:26.000" data-start-seconds="1786">I think if we're developers, this is a problem we need to solve. It's a software problem. Is advertising the right model? I don't know. The app store wasn't able to sustain Sparrow as an independent business, or maybe they were going down a different path anyway, but people are willing to put their dollar towards something that they believe in. Like I said, that gives them a route to actually be invested in something.</span></p>
      <p><span data-start="00:30:26.000" data-end="00:30:49.000" data-start-seconds="1826">I do think that not enough people are talking about how to put money next to code. Typically, we're making things to build other things. We're making tools to make tools, and eventually that tool will have a product, and that product does something, it's a website or it sustains a service.</span></p>
      <p><span data-start="00:30:49.000" data-end="00:31:04.000" data-start-seconds="1849">This is a more direct way of putting... Instead of having a tool to make a tool to have a service to get you money, it's putting the dollar value on the original tool, just like you would for things that you do for fixing up your house.</span></p>
      <p><span data-start="00:31:04.000" data-end="00:31:28.000" data-start-seconds="1864">It's quite interesting, because seeing things, not necessarily like Masonry, but people charge for jQuery Carousels, for example, and it doesn't work. Right now, people don't want to pay for it, or just hack it, or whatever, whereas with flash image galleries, people never complain. They just downloaded it, and basically paid for it, because they couldn't see the source code.</span></p>
      <p><span data-start="00:31:28.000" data-end="00:31:51.000" data-start-seconds="1888">It seems like our own ability to hack with the systems that we have is actually stopping it from being taken seriously as something, &quot;I'm not allowed to touch this. I'm allowed to use it, but I'm not allowed to actually remove the restrictions by hand,&quot; because it's harder to actually find out if your jQuery has been cracked than a game has been cracked, that a copy protection has been taken away from it, because by default, we don't have it.</span></p>
      <p><span data-start="00:31:51.000" data-end="00:32:16.000" data-start-seconds="1911">Yeah. That's one of the decisions I had to make when I was releasing the software, &quot;Am I OK if people just take this and not pay me properly?&quot; I felt like that was a fair trade. If I'm just going to typically go through this route, it's going to happen. It's OK to go through with that and just let it take its own course.</span></p>
      <p><span data-start="00:32:16.000" data-end="00:32:32.000" data-start-seconds="1936">It was a bit of an experiment, and I'm happy to say that it worked out successfully, and I'm interested to see how it's going to work out for others. Now, if it's not happening, if the Carousel people are not actually bringing in money, that concerns me a bit.</span></p>
      <p><span data-start="00:32:32.000" data-end="00:32:59.000" data-start-seconds="1952">I would like to look at that and say, &quot;Why is this product not working where I have had success in it, and how can we resolve that, really? Is the problem with it not being compelling enough, or the problem with the actual interaction between actually making the payment?&quot; There are still solutions I'm looking into. I'm really not happy with using PayPal, and stuff like that.</span></p>
      <p><span data-start="00:32:59.000" data-end="00:33:44.000" data-start-seconds="1979">That blocks out a lot of the customers that are in the Middle East, which is, again, a problem when you think about open source, and that it's available to everybody in the world, and then there's a developer who's really interested in you, in the Middle East, in an exotic place in the world that you never even considered, and they're trying to do the right thing here, but I put up kind of a wall, saying, &quot;My service doesn't work.&quot; Yeah, I'm concerned if people aren't finding the same success, and I hope that we can look to solutions to get that. I think these are problems that are interesting and that are worth making code for.</span></p>
      <p><span data-start="00:33:44.000" data-end="00:33:55.000" data-start-seconds="2024">Good question here, and I'm going to follow it up with more later. &quot;Should people who fork the project in order to contribute also pay? How would you know in advance that they are contributors?&quot;</span></p>
      <p><span data-start="00:33:55.000" data-end="00:34:26.000" data-start-seconds="2035">Yeah, it is open source, and it is on GitHub, and when people are contributing to the project, I haven't really had a proper solution for that. Typically it goes like an email being like, &quot;Hey, thank you for the code, but just so you know, this is my product. This is my work. I'm going to be profiting on this,&quot; and then I might give a donation to them, or a payment to them.</span></p>
      <p><span data-start="00:34:26.000" data-end="00:34:56.000" data-start-seconds="2066">It feels one-on-one at that point. If you're giving me something, I value it, so I'm going to pay for it, but again, it always feels weird to talk about money and things like that. It's like if somebody picks you up from the airport, and they're your friend, they're going to do it, as opposed to paying for a cab, and then do you want to pay your friend for it? If they're a friend, they should want to do it. So it always feels weird.</span></p>
      <p><span data-start="00:34:56.000" data-end="00:35:11.000" data-start-seconds="2096">Typically, when I get the project forked, I've actually been hesitant to actually let the code in, because then I'm worried about how they'll feel about it, so I actually close more pull requests than I add in.</span></p>
      <p><span data-start="00:35:11.000" data-end="00:35:39.000" data-start-seconds="2111">But then you can't call it &quot;open source&quot;. I think that's the main misunderstanding here. I had to learn this starting to work at Mozilla, because when you go to Fosdem for the first time, and you have some guy who's very, very intense, nailing you against wall and talking about LGPL license versus BSD license, and other things for a half hour, then you realize there's a whole world of people that take open source really, really serious, a lot of them making money with it as well.</span></p>
      <p><span data-start="00:35:39.000" data-end="00:36:03.000" data-start-seconds="2139">The main understanding is that open source is not bringing the code out there, but actually building the code with a community, and already with an environment that supports people. So you give code out, but open source means that contributions should go in constantly, and also the sharing, when money comes in, it needs to be shared. That's not saying that you're doing it wrong, it's just this is how I learned it as well. I'm like, &quot;Whoa.&quot;</span></p>
      <p><span data-start="00:36:03.000" data-end="00:36:26.000" data-start-seconds="2163">It's just not good enough to put something on GitHub and call it open source. There's a saying of ta-da source, like, &quot;Ta-da, it's here, and now you can play with the code, but you're not allowed to contribute to it, or put things in there on top of that.&quot; I think in your case, the other issue is that it's reliant on jQuery, which is another open project that brings even more problems in there.</span></p>
      <p><span data-start="00:36:26.000" data-end="00:36:48.000" data-start-seconds="2186">If a government agency, for example, would try to use one of your products, they would have to look if jQuery is OK to be used, and that was only after Microsoft OK'd it, then it's actually OK to use in a commercial product fully, and then people have to actually do audits on your own code before they're allowed to use it. It's a very dangerous point, where actually antagonizing the Fos</span></p>
      <p><span data-start="00:36:48.000" data-end="00:37:09.000" data-start-seconds="2208">community as web developers by saying, &quot;That's free, but I'm not going to support it. You can use it yourself, and hopefully you'll do something cool with it.&quot; That is not why open source became a success.</span></p>
      <p><span data-start="00:37:09.000" data-end="00:37:42.000" data-start-seconds="2229">You touched upon so many complications about open source. The ideal of it, that you contribute to it, and that other people contribute to it, but you have to support, so that takes time out of your day. This is kind of a solution I proposed to address that, but then it gets into other things, where it's a licensing problem. It's the recursive kind of licensing, if it's like GPL and things like that, the waters get muddy.</span></p>
      <p><span data-start="00:37:42.000" data-end="00:38:05.000" data-start-seconds="2262">A lot of the stuff we have is very much ta-da source. I feel like that's a great attitude to have, to put something there, but then the other side of it, about supporting it, these are bigger problems, and I don't know how to take care of all of them.</span></p>
      <p><span data-start="00:38:05.000" data-end="00:38:32.000" data-start-seconds="2285">It's very hard for us to make that step. It's like, if we release something, we should also think about, we will get lots and lots of emails that have to be answered. And if it's only in our free time with a normal job on the side, maybe we should subcontract or hire somebody to do that. So the good thing about an open-source project that is built with a community is that this is already built in. You throw out the idea first, or the stub, and then build the code with other people.</span></p>
      <p><span data-start="00:38:32.000" data-end="00:38:51.000" data-start-seconds="2312">A really great example right now is Brackets by Adobe. That's the first open-source project that they ever do, and they did a great job with that. If you haven't looked at it yet, they actually do a 24-hour pull request answering on GitHub. Requests from the outside take precedence over requests that come from Adobe developers.</span></p>
      <p><span data-start="00:38:51.000" data-end="00:39:05.000" data-start-seconds="2331">That's the kind of attitude that they bring in from the very beginning, and I don't even want to know how the meetings went inside Adobe to try to sell that to managers there. But it's the only way you can actually make it sustainable.</span></p>
      <p><span data-start="00:39:05.000" data-end="00:39:26.000" data-start-seconds="2345">It's good that we make money, but I find our community cannibalizing ourselves. I get reminded of the punk scene. You sing in a punk band, everybody loves you. You bring your first CD out &quot;Oh, these guys are commercial. I'm not supporting them anymore.&quot; Do you find the same thing? Do you get lashed back, that people tell you, &quot;Why are you charging money now? In the past, Masonry was free?&quot;</span></p>
      <p><span data-start="00:39:26.000" data-end="00:39:52.000" data-start-seconds="2366">Yeah, I've definitely got a couple angrier emails. And I think there's a lot of stuff that's going behind the scenes that I don't see. And there's probably people in this room that may not really want to fight for me making money, that support that idea, and I think that's completely fair.</span></p>
      <p><span data-start="00:39:52.000" data-end="00:40:18.000" data-start-seconds="2392">It is a risk to put yourself up here and say, &quot;Hey, this is kind of a new idea. People might not like it, but I think it's worth talking about.&quot; And that's why I hope others either address it or try what I'm doing, or say it's terrible. Let's have a discussion about this. Because like you said, is the open-source model sustainable?</span></p>
      <p><span data-start="00:40:18.000" data-end="00:40:39.000" data-start-seconds="2418">In the case of Adobe, they have to build up the entire infrastructure to support Brackets. They have to hire people to do that, and they have to have managers looking on it -- are they hitting their service levels? A lot of things have to go into that to support that one product being open-source. And most of our projects now, it's just us in our free time.</span></p>
      <p><span data-start="00:40:39.000" data-end="00:40:59.000" data-start-seconds="2439">Isn't that the problem -- that most of the free-time web development front-end things are happening in people's free time, rather than companies' having a 20 percent model or the hack day model that Yahoo had, to actually allow for these kind of things? Bootstrap is a great example, and one of the questions was, well, Bootstrap was not a free-time project.</span></p>
      <p><span data-start="00:40:59.000" data-end="00:41:44.000" data-start-seconds="2459">No, it's not. Yeah. It was developed for Twitter. And it eventually worked its way to being open-source. So I can't speak directly to that. I got to work with Mark Otto for a little bit. But talking with him about Bootstrap, he was like, they have something like 4.000 issues on GitHub -- some astronomical number. The JavaScript developer, he had to develop a solution so he could mass-close pull requests, or issues like that. It's called Haunt. But it's like, he had to develop a solution just so he could keep the noise filter down.</span></p>
      <p><span data-start="00:41:44.000" data-end="00:42:05.000" data-start-seconds="2504">So yeah, it came out of the company. But when I was talking to him one on one, it was like, yeah, it's still like two guys looking at this when they have time to do it. And we have a lot of open-source projects at Twitter. But eventually we're building Twitter. So we make tools to make Twitter.</span></p>
      <p><span data-start="00:42:05.000" data-end="00:42:24.000" data-start-seconds="2525">But it still comes down to the same thing, where it's like, you still have only so many working hours in your day, even if you're working at the company. So you might make the tool, but you can't be invested in sustaining that tool if you have to think about building the larger product.</span></p>
      <p><span data-start="00:42:24.000" data-end="00:42:35.000" data-start-seconds="2544">So yeah, maybe companies should be looking at, like, OK, this is a core business. Is this going to be sustaining this tool and helping out developers work with it...</span></p>
      <p><span data-start="00:42:35.000" data-end="00:42:48.000" data-start-seconds="2555">It's an incredibly good tool to hire people. Contributors to a project like Bootstrap is something that Twitter could pick and choose from developers rather than going into a hiring agency and paying them lots of money to find engineers.</span></p>
      <p><span data-start="00:42:48.000" data-end="00:43:00.000" data-start-seconds="2568">I mean, at Mozilla, we've got 20.000 contributors and 400 people working. So, it basically, it really works. It's just a matter of really understanding open source and throwing it out there.</span></p>
      <p><span data-start="00:43:00.000" data-end="00:43:09.000" data-start-seconds="2580">I had a four hour discussion with Alex Russell about this when he told me that YUI is not open source, versus Dojo. So, it would be interesting to see what's coming.</span></p>
      <p><span data-start="00:43:09.000" data-end="00:43:18.000" data-start-seconds="2589">Jeroen Wijering is coming next and he did actually the JW player, the video player which was open source, and also is a good business.</span></p>
      <p><span data-start="00:43:18.000" data-end="00:43:41.000" data-start-seconds="2598">It is possible, it's just a matter of, maybe it's too easy to make a plug-in and to get them out, as, on rough estimation, 2.3 million jQuery plugins out there. Because people look at them, look at something that you did, oh, I can code that as well, rather than reading his specs and understanding how he used it and paying for it, I could do another one.</span></p>
      <p><span data-start="00:43:41.000" data-end="00:43:45.000" data-start-seconds="2621">Do you think there's a lot of duplication going on in that market that we have right now?</span> <span data-start="00:43:45.000" data-end="00:44:13.000" data-start-seconds="2625">I mean, that's OK. I think that's good, right? Is to have a lot of competition and things that get forked. In fact, if you think about just all the various carousel plug-ins, they can typically, if we're working on something, or if I'm working on something and I've talked to other people about this, you typically write your own for each project each time. Until you're like, whatever, I'll just use this one.</span></p>
      <p><span data-start="00:44:13.000" data-end="00:44:28.000" data-start-seconds="2653">But that's good, it's good to have a diverse market out there in different solutions competing for one another. And even with different ways about distributing it. So, I think it's OK to have a wide array of selections.</span></p>
      <p><span data-start="00:44:28.000" data-end="00:44:46.000" data-start-seconds="2668">But isn't the idea of jQuery plugins to make the life easier for implementers out there? I have to build a website for a client. I want to have an image gallery. I shouldn't have to spend three hours going through 6.000 jQuery plugins, Carousel plugins, until I find one that I want.</span></p>
      <p><span data-start="00:44:46.000" data-end="00:45:17.000" data-start-seconds="2686">Yeah. Just on Carousel plugins, does it work, does it not? I feel that you're either somebody in this room, so you make your own plugin, or you're somebody that just needs an image gallery and you copy and paste the code. Sorry, to your question, I think it's important that these things are available.</span></p>
      <p><span data-start="00:45:17.000" data-end="00:45:27.000" data-start-seconds="2717">The last one. Somebody said, &quot;What about packaging? What about minifying? What about uglyfying? Do you think it's an idea? Do you think it's versatile? With dev tools, I can walk around these issues nowadays.&quot;</span></p>
      <p><span data-start="00:45:27.000" data-end="00:45:55.000" data-start-seconds="2727">Yeah. I've decided, might as well just keep it, have it unminified, fully documented, and not keep that stuff behind a paywall. With Rogie and View.js, clearly, you can get to that script, so you can copy and paste that script, but there is a paywall that... You get the documentation, like the unminified source. That is a way if you're worried about people just taking your code.</span></p>
      <p><span data-start="00:45:55.000" data-end="00:46:14.000" data-start-seconds="2755">In my case, I think it worked to my advantage. Having everything open, people are able to inspect the product before they actually want to purchase it. Like I said, I don't think I have the perfect solution, but it worked out for me. I'm interested to see how others take it.</span></p>
      <p><span data-start="00:46:14.000" data-end="00:46:35.000" data-start-seconds="2774">The View Source is interesting. As Marcin showed, people are looking at the View Source, learning things from it. Rob Hawkes, who works with me, did a game and people actually hacked the game, so to say, and wrote their own weapons in JavaScript and things. And he said he loved it, because he learned from that how to actually come up with new features for his game as well.</span></p>
      <p><span data-start="00:46:35.000" data-end="00:46:49.000" data-start-seconds="2795">So we can turn that kind of, &quot;Oh, open is evil. Everybody can look at my code,&quot; to actually turn it into features if we just put the infrastructure in place. But it's an uphill battle, and if you do it in your free time, there's no free time left.</span></p>
      <p><span data-start="00:46:49.000" data-end="00:47:25.000" data-start-seconds="2809">Yeah, yeah, and I like eating Doritos and watching cartoons. That's a part of my life. So having that free time there is very good for all of us. But having something that people can look at and learn from, that's how we all learn. Look in View Source, copying and pasting that in your own thing, and then deleting stuff -- does it work? Did it change? Did that code mean anything? So that's great for our industry, is having View Source, and opening that up so people can take a look at things and actually change things around. That's how we all learn.That's why I decided to keep my stuff open source. So, yeah, I think it's great that other people can get invested in it. It's also interesting to see that you might do a Ta-Da thing</span></p>
      <p><span data-start="00:47:25.000" data-end="00:47:49.000" data-start-seconds="2845">and other people might take it over. So having stuff as open source is great, but like you said, getting that infrastructure in place, I don't know if that's been completely resolved yet, so I'm excited to learn what you guys do at Mozilla.</span></p>
      <p><span data-start="00:47:49.000" data-end="00:48:12.000" data-start-seconds="2869">It might be just a geek thing. As geeks, we want to do everything ourselves, because we don't trust anybody else to be as good at understanding it as we are, which is most of the time a completely false assumption. So when you find five fans of your product and you ask them, &quot;Hey, do you want to help other people with answering emails and stuff, and we do a sharing of the income of the product,&quot; that might be a start of something.</span></p>
      <p><span data-start="00:48:12.000" data-end="00:48:25.000" data-start-seconds="2892">Maybe it's just a matter of starting to communicate more with each other, and saying, &quot;I own this. I love it to bits. Nobody else is going to touch it.&quot; And half a year later, &quot;I love the next bit now, and I don't like that anymore, and please don't send me any emails about it.&quot;</span></p>
      <p><span data-start="00:48:25.000" data-end="00:48:54.000" data-start-seconds="2905">Yeah, I was talking with [indecipherable 48:26] about open source stuff, and he mentioned, how did jQuery come to be, where they have a board, and they have core developers, and they have this whole organization that is not just like John Resig, where it eventually started. And I think that whole transition from just one person working in the room and working on it to getting other people involved, I don't know how to make that transition, and I am fascinated by how it happens.</span></p>
      <p><span data-start="00:48:54.000" data-end="00:49:00.000" data-start-seconds="2934">There was actually a talk at jQuery Europe last year, how the whole thing started. There's a video out there as well.</span></p>
      <p><span data-start="00:49:00.000" data-end="00:49:02.000" data-start-seconds="2940">I've got to watch that video.</span></p>
      <p><span data-start="00:49:02.000" data-end="00:49:04.000" data-start-seconds="2942">With that, thank you very much.</span></p>
      <p><span data-start="00:49:04.000" data-end="00:49:07.000" data-start-seconds="2944">Thank you. [applause]</span></p>
     </div>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>1</strong> comment</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <h3 class="extra">Comments</h3>
     <dl id="comments" class="reacties">
      <dt id="comment-125"><a href="#comment-125" class="number" id="latest-comment">1</a> <a href="https://www.liputan6.com/tag/liga-europa">www.liputan6.com</a> on 14-09-2024 at 14:40 o'clock:</dt>
       <dd>Unquestionably believ that which you stated.<br>Yoour favorite reason seemed to be on the web the simolest thing to bee aware of.<br>I say to you, I definitely get annoyed while people think <br>about worries that tjey painly do not kow about.<br>You managed to hit the nail upon the top ass well as defined out the whhole thing wthout having side effect , people can take a signal.<br>Will likely be back to get more. Thanks</dd>
     </dl>
     <form method="post" action="/congres/2012/sessions/open-source-aint-free-david-desandro.md" id="comment">
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
