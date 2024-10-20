<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>Web Components and Model Driven Views by Alex Russell · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p536">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>Web Components and Model Driven Views by Alex Russell</h2>
     <h3>Video</h3>
     <video width="640" height="360" src="/_downloads/2011/alex-russell-web-components-and-model-driven-views.webm" controls>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2011/alex-russell-web-components-and-model-driven-views.webm">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="http://vimeo.com/33430613">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2011/alex-russell-web-components-and-model-driven-views.webm">Download video</a> (WebM, 117MB)</li>
     </ul>
     <h3>Slides</h3>
     <ul>
      <li><a href="http://infrequently.org/11/fronteers/fronteers.html">Slides</a></li>
      <li><a href="http://infrequently.org/11/fowa/demos/shadow-dom-demo/">Code examples</a></li>
     </ul>
     <h3>Transcript</h3>
     <p>Alex Russell: [0:06] ... So we have this sort of like, aversion right? A: it reminds us of an earlier time in DOM when things weren't standard, but we also have this lock-in risk, that we're always comparing things against &quot;Well, is it a standard? Has it reduced my risk of potentially dying sometime in the future because it wasn't the right thing?&quot; [0:22] We want to make sure that things are standardized. We want things to be high performance, right? If there's some feature that's pretty good, but it turns out that it screws you in the large, you start using it a little bit, and you start to rely on it, and then you start to build bigger and bigger sites with it, and then it hurts you more and more. You learn not to use those things. They get a bad reputation, they earn a bad reputation. JavaScript used to be that way; we're making JavaScript faster.<br>[0:47] I'll give you a for instance. One of the things that we're hitting right now with some stuff I'm going to show you in a bit is performance issues around mutation events. Who knows what mutation events are? OK, I'm sorry for your loss. Mutation events for those of you who didn't raise your hand are the spec that's been around probably since the early 2000s that allows you to add an arbitrary listener for any time anything in the DOM changes. Sounds pretty awesome, right? You can make some really high fidelity synchronous abstractions with mutation events. That's good stuff.</p>
     <p>[1:21] They sound like a panacea, right? You want to build some framework that's going to attach itself to every new element that comes into the DOM that matches a particular selector. Well, just listen on that change, and then go create a DOM, find that element, and then go make your change. Well, yes and no, because the more you do this, the more synchronous it is... Let's say I'm adding a bunch of elements. Now I have to run this code every single time. It winds up being aspect-oriented advice on every synchronous operation in your DOM, and it can really screw you.</p>
     <p>[1:57] Internally in browser implementations, it has a terrible reputation for being re-entrant, which is bad, but also for causing us to do all sorts of stop-the-world, run some JavaScript, stop-the-world, run some JavaScript stuff, which is really going to slow you down.</p>
     <p>[2:10] OK, so we want our new features to be high performance, right? We want there to be markup and semantics for the things that we care about most. It's really good for us to have a new API from JavaScript. It's even better if we have markup that expresses sort of the lowest common denominator version of that. It's really easy to introduce markup to somebody, and it's somewhat harder to introduce an API. When you introduce an API, you're not saying, &quot;Hey, copy and paste this, it'll work.&quot; You're saying, &quot;Copy and paste this, but learn the language a little bit.&quot; You can't use it in the wrong place.</p>
     <p>[2:43] HTML is much more forgiving than either CSS or specifically JavaScript. If we have markup for a thing, it gives us better fallback. It gives us a better entry path for new users, and it gives us better fallback for advanced users, and it gives us a place to hang our DOM.</p>
     <p>[2:57] The last bit is that we'd certainly like there to be these cross-cutting concerns. We don't want to do all of our configuration necessarily in script. If I add a feature through an API, it's all done in JavaScript, and I want somebody to go configure my feature. Well, I have to expressly add hooks for that. CSS is brilliant, not because it's good at what it does. I could argue all day long until I'm blue in the face and Tab will testify that I do, that CSS may not be good at many things at all, but the thing that it's brilliant at is separating out the configuration aspect of a feature from the usage of the underlying semantic.</p>
     <p>[3:37] You can iterate quickly, you can start to configure things orthogonally to the way that it was initially related to other elements in the page. We'd like that feature to show up in the new features that we're looking at too. We want there to be no risk that will be able to lock somebody else out inadvertently. We see this a lot with JavaScript toolkits, but we'll talk about that in a second.</p>
     <p>[4:02] So we don't want there to be technical lock in, we don't to have any runtime risk. We don't want it to be too slow to actually use. We don't want to find ourselves on the wrong side of business or economics. We want our feature to survive, so if that we start to use it or rely heavily on it, we can trust it. It's worth asking, who are these things good for and why?</p>
     <p>[4:23] Markup is good for developers, and it's good for publishers and users. This is sort of like the grand triumvirate. If it's good for developers, if it's good for publishers, and it's good for users, it's probably good for you. Then we look at CSS and CSS is good for designers and it's good for developers. CSS can help users, it can sort of by the by help users, it helps you structure your stuff better, but it's not like a first-order user visible feature. It doesn't deliver mean value to users all of the time.</p>
     <p>[4:53] DOM is really good for developers. So as you see, the more configuration, the more control, the more we actually sort of wrench down our needs -- like we say, &quot;Ah. I can't get this in markup, I'm going to do it in CSS.&quot; OK well, that cuts down the set of potential people who benefit from it a little bit. If you go to DOM or you go to JavaScript, we start to cut down the set of people who can benefit from a particular approach to solving a problem just by the way that we choose to express it. This is really important, because it helps us set up an ontology for thinking about how we want new features to enter into the web.</p>
     <p>[5:28] I want to bring up, as maybe my example of the Platonic ideal of a new web feature, the humble anchor tag. The humble anchor tag is all that and a bucket of chips. So the humble anchor tag gives us the ability to define relationships. These aren't strong relationships, they're not as heavily defined, but they are relationships. The text inside my anchor means something with regards to the thing that I put on the outside. It probably means something in context to the other text around it. It relies on the browser to give you default UI. I can configure it through that other aspect, right? I can go to CSS and I can configure all of those roles and states around anchor tags. I can style it using selectors.</p>
     <p>[6:15] It gives me this high level protocol for interacting with really specific low level behavior. If I click on that link, what's it going to do? The counterfactual here isn't,&quot;What would a link do in some other system?&quot; The counterfactual is, &quot;What would you have to do to recreate this exact behavior in JavaScript?&quot; Think about that, or C++. What would you have to do to build all of this behavior back up, to do this in C++, or to do this in JavaScript for yourself?</p>
     <p>[6:44] The odds are that you would end up with a very finely tuned solution to your specific problem. You wouldn't come up with a link tag. You would not come up with an anchor. This is not what you would end up with, because this doesn't mean exactly what you were going to say. If I want to open this in a new window well, now I have to configure it. I have to come up with some other thing. Well, I would have just written a little bit of code to just open up in a new window, right?</p>
     <p>[7:04] I would not have made all of these nicely layered configuration and relationships hang off of what's really a pretty rough semantic here. This doesn't mean very much. This is how the entire web works. Right? This is what Google sees. This is how we express all of our intent, but it doesn't mean a lot.</p>
     <p>[7:23] We want a lot of things out of new features, and it's worth asking, &quot;Who are they going to be good for?&quot; Right? So ubiquity is really good for us as developers, it reduces a lot of our risk. Performance is great for us as developers, but it's primarily useful for users and publishers. They're not going to adopt stuff unless it works well.</p>
     <p>[7:42] We want high level semantics, which are good for users, developers, and publishers. So if I have a high level semantic, it means that, well, we can all sort of get along, where I can kind of agree. I can say that this thing is an anchor and it means something both to Google and it means something to my page too. We're all getting value out of that. Declare it as configuration, lowers the bar to entry for a lot of features, and then extensibility gives us this big out.</p>
     <p>[8:05] I think we're stuck today in a little bit of a rut of extensibility. We wind up leaning on JavaScript to get things, because it is the Turning complete language in our environment. It is the only thing that can give us an answer when CSS and HTML fail us. So we wind up piling ourselves into the JavaScript boat. We keep piling into the JavaScript boat.</p>
     <p>[8:24] Bruce yesterday brought up the great example of an empty body tag, and sort of this pathological case of piling yourself into the JavaScript boat, where you wind up then having to go recreate all of the stuff that the browser was going to do more or less for you if you'd sent markup down the wire in order to get back to the same value that was going to be provided to you if you'd done it in markup. But you did it for a good reason. Gmail has an empty body tag, not because it's stupid. Gmail does that because that's how you can actually deliver the functionality of Gmail in a way that's both meaningful and reliable and maintainable. You wind up putting all of your bets, all of your eggs, into the JavaScript basket.</p>
     <p>[9:09] OK. We decided that what we want are things that look a lot like the anchor tag. We know now that when we go and we add a new feature to the web platform, we want it to be available everywhere. We don't want to really have to go through this process of sort like, figuring it out. &quot;Can I actually step there, am I going to fall through?&quot; We want the browser to give us this default UI. There's a good default something that you can provide for free, something that I don't have to send down the wire, do it. Just put it there for me by default.</p>
     <p>[9:40] We want it to describe relationships between content. New features, semantics aren't just there to sort of help us feel good about having said something. They're there to express relationships between the sets of things that we're putting in our document. I think this an important and often lost point. We spend a lot of time talking about how many angels fit on the head of a div, but the role of semantics is to express the relationships between things in our document. They have to mean something to the systems that are going to consume them, but they only work really well when they also mean something to users.</p>
     <p>[10:11] The anchor tag is perfect here, because it means something to the user. It gives us something that the user can do, it expresses our relationship, and it lets the browser handle most of the default for us for free. This is where all new features sort of want to be.</p>
     <p>[10:25] How do we get there? I think this is the important question. This is the Chrome adoption curve from Ars Technica from August, I believe. The end of August. So what we're looking at here is Chrome 13 eating into Chrome 12, which was eating into Chrome 11, Chrome 10. The steepness of these lines is actually changing because they're only sampling once a month. These lines would be roughly about the same angle if they were sampling more frequently. How good is it that you're watching browser replacement rates that are affected by the sampling size at once a month? You're getting sampling rate error.</p>
     <p>[11:00] But this is one of the things that can help us move things forward. If we think about the web evolving, we didn't get the anchor tag, we didn't iFrames working correctly everywhere, we didn't get the frameSet working everywhere. We didn't get form elements working everywhere. We didn't get most of the stuff that we take for granted today, CSS working everywhere, without a couple of revisions. It takes browsers time to implement stuff. We have to get it out to users, now users have to start using it, and then we have to look at our deployed population and go, &quot;OK, now I can use this feature, I can target this feature.&quot;</p>
     <p>[11:32] So as developers, this is the sort of things we thrive on. The faster that this crank turns, the more chances we get to see new features enter the market that we can start to target. &quot;OK, well, this is good.&quot;</p>
     <p>[11:43] Chrome's a relatively sizable chunk of your user base, probably. New sites specifically are seeing large percentages of users using Firefox and Chrome. We're moving pretty fast here, right? This is awesome. We're replacing ourselves once every six weeks, more or less.</p>
     <p>[11:58] This is Firefox, all right? We're starting to see that the slope is going significantly steeper as Firefox is pushing more updates more quickly, which is amazing. We're starting to see at the 4.0 to 5.0 transition, they're seeing the same sort of sampling rate error. That line is getting jaggy because they're updating so fast that once a month is no longer quick enough to really get a sense for the curve.</p>
     <p>[12:22] This is good, but we've got this hard core now of 3.6 users that are sort of left, and they're a significant percentage of the world's browser users. OK, I don't mean to depress you before lunch, but yeah, that's not getting any steeper, is it? I mean like, we could sample once every six months and it'd get exactly the same curve, which is really depressing.</p>
     <p>[12:45] IE6 looks sort of intractable, IE7, IE8. I keep joking IE8 is the new IE6, and Paul Irish put it more, I think, generically when he said, IEn is the new IE6. Because what we're seeing here is that we don't really have this crank turning fast, right? If I have to pay attention to this portion of the market, and almost all of us do, right? We're looking at a crank that's turning really, really slowly. We can't start to take advantage of the new stuff, not really anyway. We can't start to really lean on it. We can't get to that Platonic ideal of a new feature without that feature being everywhere, right?</p>
     <p>[13:26] The first thing we wanted was ubiquity. Isn't that the promise of the web, is that we'll have stuff and we'll have it everywhere, and we won't have to work hard to get it? That's the promise of the web. So we're going to have a hard time getting to our Platonic ideal if this is the world that we're living in, for new features anyway.</p>
     <p>[13:42] So Microsoft is trying to help. They've put together the IE6 countdown, and as we saw IE6 is getting better in terms of market share, nine percent. I don't mean to bash on IE6, it's absolutely the best browser that was released in 1998, hands down, no doubt. You'll have to fight me on this if you think otherwise, because you're wrong. IE6 was fricking amazing. It was some amazing engineering. But this is what we're looking at, right? So we're looking at those replacement rates, and IE8 is going to be tied to Windows XP. So wow, 30 percent worldwide.</p>
     <p>[14:21] Every new person who picks up IE8 today is part of the problem. They are already part of the problem. Same with IE9, right? How are IE9 users going to get IE10 faster? It's not clear. We talked about IE10 a lot yesterday. Some of the presentations, the great presentation on CSS talked a lot about what's coming in IE10. Well, when are we going to be able to get IE9 out of the world so that we can start to use IE10?</p>
     <p>[14:48] Looking forward, IE9 yeah. 3.2 percent, well that's the 32 IE8 99 percent... Oh my goodness. All right. We should be clear. We've seen this pattern before. We know what stalled evolution looks like. This is not a new thing for us. We saw it when we were trying to kill NetScape 4. When NetScape four was at 100 percent, more or less... Sorry, NetScape was about at 100 percent with NetScape 3, it took a long time for us to get NetScape three and four out of the world.</p>
     <p>[15:21] Once we had a significantly better set of browsers that could displace them, it took a very long time to get them out in the ecosystem so we could start to take advantage of new stuff because we want those new features to have that property of ubiquity.</p>
     <p>[15:32] So what do we do? This is not a new story, but it's helpful to think it through and say, &quot;What are we going to do in response to a market failure?&quot; Which is what this is.</p>
     <p>[15:45] I was going through some old slide discs of mine last night and I was shocked to this slide that, I think, we put together in 2008 before I joined Google. This show the timeline of IE releases, sort of early to more modern.</p>
     <p>[16:01] From 1995, from IE 1.0, to 2001, which was the golden master release for IE 6.0 for Windows, we saw something like seven or eight releases in the span of five years. And their adoption rates were incredible, in part because the market didn't existed before and it was just expanding like mad. But their replacement rates were incredible too. Now we're in a more stagnant period here.</p>
     <p>[16:27] So what did we do? It worth asking the question, &quot;What did we do?&quot; because this is going to push what we should do and how we should think about what we do next, because plan A is always a fast evolving platform. The faster we turn the crank, the more generations we get in to any particular set of time, the more chances we have to test more features and the more chances we have to make new features available. Which means we get to figure out, &quot;Are they good or are they bad?&quot; and make them Platonic ideal of ubiquity.</p>
     <p>[16:56] So plan B, unfortunately, is something we've come to rely very heavily on which are frameworks and compilers. I'm not saying that frameworks and compilers are bad. God knows I've done my bit. But we should acknowledge that plan B is always going to be these sorts of fallback systems. It's not like we're going to be able to stop thinking about browsers that aren't flushing out of the ecosystem quickly.</p>
     <p>[17:19] Look at mobile. We've got versions of Android that are still 1.6 sitting out there. A lot of them may be getting over the year updates, but it might be awhile. Now admittedly, that story is a lot better. A lot of those users got those phones less than a year ago and they'll swap them out in about another year. So two year timeframe, worse case, that's pretty darn good. But at the same time, we'd like to go a lot faster.</p>
     <p>[17:43] The Chrome world gets us up to date in about six weeks. A new feature in six weeks and gets us up to date in two weeks. So that's where we want to be, and we've got this set of structural drags that keep us from actually getting there.</p>
     <p>[17:55] So how should we think about how we're going to get stuff into the web without doing this? This is a diagram that came out with a proposal from the search team at Google about two years ago for AJAX Search where the idea was that you would run a headless version of a browser on your server. And then you would serve that up when Google comes to you with a Googlebot so that they would be able to send you a hash fragment and you would be able to send back the stuff that you were going to render anyway.</p>
     <p>[18:26] Like, really? That's a little nuts, right? Seriously, that's a little nuts.</p>
     <p>[18:32] The set of people that are going to be able to do this versus putting some files in a directory is small. Let's just acknowledge that upfront. So we do have company strategies. I spent a bunch of time during the last couple of years working on something called Chrome Frame. This is maybe one out. It's a plug-in for IE that makes it look like Chrome to you.</p>
     <p>[18:54] So that's maybe one way that you can be self serve about getting yourself out of this and get everybody into that quickly updating population. If you can pull that population up to the front of the pack, maybe you could start using new features faster. Maybe that's one way that we can start to get the process of progress moving faster for us.</p>
     <p>[19:13] The other ways that we have are also all what I would call &quot;hacks&quot;, but I don't mean that in a derogatory term. They're brilliant and beautiful things that we can do to make life better for us right now. The set of things that we can do include widget frameworks. And widget frameworks -- I have done my share of damage here too -- come with a lot of liabilities.</p>
     <p>[19:35] Let's be honest. They're the sorts of things that you use when the semantic that you're trying to express is so far away from what HTML natively has a semantic for, that you're willing to go and be completely self served for it. Taking on for yourself accessibility, UI, UX, internationalization, localization, performance, theme ability; all of this stuff is mostly taken care of for you by HTML.</p>
     <p>[20:00] If I put in &amp;lt;input type=&quot;date&quot;&amp;gt; in a page today and a browser supports it, it's going to give me a calendar widget. Do you have any idea how hard it is to write a calendar widget that's internationalized, localized, right to left aware, high contrast mode aware? This stuff is a pain in the ass. If you have to send it down the wire, that's hundreds of milliseconds of latency. Not to mention the enormous pile of JavaScript infrastructure you're going to need just to get the damn thing booted up.</p>
     <p>[20:25] Then you have the problem, of course, of once that thing is in your page, you've got your calendar widget in your page, there you go merrily querying the DOM with jQuery and you come along some TR, some TD. Oh, balls.</p>
     <p>[20:37] That doesn't actually mean what you think it does because you don't own that node. That node is owned by the component. That element is owned by a parallel tree of components. A set of things that is being built out of DOM, but exposes all of it's guts to DOM. So you wind up in this place where now you have to be mutually distrustful as well. You can't trust yourself to just go, &quot;Use the DOM as it was.&quot;</p>
     <p>[20:58] It's no longer the contained mode hierarchy that you expected. It's a proxy for a shadow tree over here, another tree that's got fewer things in it which manages small sections of the DOM which means interoperability suffers a lot.</p>
     <p>[21:12] Layout mangers, I think we all know how slow it is to do that in JavaScript. But sometimes you need to, so my favorite whipping boy here is Gmail. For old browsers, for old versions of IE, there is a two pass constraint based layout manager inside of Gmail that looks exactly like what you would have done inside of a browser if you were building it today out of FlexBox.</p>
     <p>[21:36] It's pretty terrible. Not just latency wise, but we have to do this in JavaScript. We have to turn off the layout manager that already comes with a browser. There's huge amounts of duplication here just to make this stuff fly because we actually need to ship the app. We're only going to be competitive as a platform if we can continue to ship better and better apps.</p>
     <p>[21:52] So we're going to get ourselves out of Hawk. The question is, how are going to do it? Can we rely on that fast evolution cycle to deliver new stuff to us sooner? Or when we get stuck, do we have to do this?</p>
     <p>[22:04] I won't belabor the rest of these, but things like microformats give use an example that isn't just for behavior, so all the JavaScript stuff is local behavior. Microformats express the same sort of slang that we might see with things like classes.</p>
     <p>[22:22] This is from Bruce's example yesterday where Opera took a survey of the most common class names that were being used widely on the web in order to inform the HTML5 semantic construction process. And things like microformats, and things like Schema.org and microdata are all part of the same evolutionary process. They turn into a slang that we all wind up using one way or the other. This is actually a really rough slang.</p>
     <p>[22:51] Do you think that all of the people who use the word &quot;footer&quot; inside of their CSS classes meant exactly the same thing with it? I don't think so. If you are using microformats, you're probably a lot closer to the same semantic meaning. But it's like anchor, you don't mean exactly the same thing all the time. You mean sort of something close to the same thing.</p>
     <p>[23:09] So what we wind up with this large and growing body of things that we assume that we have to carry along with us. Think about jQuery. Think about the tool kit that you're using. You're probably pulling that along with you into every project. You're assuming it. It's part of the web as far as you're concerned. It's interceding on your behalf to the platform.</p>
     <p>[23:27] Do you have some basic structural CSS that you carry around with you all the time? It's part of the web as far as you're concerned. It's part of the browser. It's part of your development experience of the browser. So we wind up with these small languages, these small ad hoc languages that do things for us that the browser isn't doing for us.</p>
     <p>[23:47] Is that good or bad? I think we all feel a little bit guilty about this. I'll say it. I think we all feel a little bit guilty that we have these coping strategies, that they're delivering incredible value to us. But at the same time we want to put all of our semantics in HTML. We want to put all of our expressive UI into CSS. We've been told forever that we should be able to split things this way. That's how it should work. Maybe you can put some of your behavior in JavaScript.</p>
     <p>[24:15] So we feel guilty about it. We feel like, &quot;I'm doing it wrong if I put some of my layout inside of JavaScript.&quot; Well, are you doing it wrong or are you shipping a product?</p>
     <p>[24:24] So we wind up with this unspoken tension between deep pragmatism and the Platonic ideal of where we would like to be. But we don't have a really good model for thinking about it.</p>
     <p>[24:36] What I want to say about this is that the to do list for the web platform is the set of things that we're all carting around. When you use these things, when you go and you put in that footer class inside of your CSS, when you use microformats, when you use jQuery and other JavaScript library, you're putting in a vote. You're saying, &quot;This is the stuff that should be in the web platform.&quot; You shouldn't feel guilty about it. You should just make sure that we can see it. Does that make sense?</p>
     <p>[25:04] What made that evolutionary step possible for going from broad use of known class names, not even agreed upon, just the same class names all over the web to new elements in HTML5? The fact that we can see them. We can go and we can search the web. We can find out what declaratively people were using. And we can go, &quot;Oh, right this is what everybody wants.&quot;</p>
     <p>[25:27] Now, we can do some of that today. We can go and look at the top million pages and figure out which JavaScript library that they're using, which features are being most heavily used, we can put those things in DOM. But is that the right place for them? It's a hard thing to figure out.</p>
     <p>[25:40] So when you talk to people who work from a browser, I think we should all stop being a little bit guilty and start being a little bit angry. Because what it means for you to be carrying this stuff around, to be using this sort of slang day to day, is that the browser isn't giving you what you need. The tools are not evolving quickly enough to get you where you want to be.</p>
     <p>[26:01] Part of that is that that ecosystem isn't moving quickly enough. Maybe we're not turning the crank fast enough, we're not getting enough generations on; talk to your Microsoft rep or use Chrome Frame.</p>
     <p>[26:11] Part of it is that we can't trust ourselves and we can't trust the standards process because browsers don't feel like they can ship stuff quickly enough.</p>
     <p>[26:18] Part of it is, like Tab said yesterday, a lot of the folks who work on browsers were not hired because they were badass web developers. At Google if you were hired because you were a badass web developer, you're probably working on a web property. They were hired because they were amazing C++ engineers. Did they write a lot of JavaScript, a lot of CSS? I'm going to guess no.</p>
     <p>[26:35] OK. It's worth remembering too that when we want stuff out of the web, we need to be willing to pay for it a little bit. We've said that there's this slang that we're using and we feel guilty about it, but if a new feature comes along and we want to start using it, what does it mean to start using it? Using it when and where? In which circumstances?</p>
     <p>[26:57] So we wind up with all of this advice about how to use fallback content, how to use degradable markup, how to use these new semantics along with the old semantics so we don't feel quite so guilty.</p>
     <p>[27:07] I'd like to advocate that we should stop doing that a little bit. Not that we shouldn't provide fallback semantics, but in a lot of cases we wind up with these unsemantic equivalents where if I'm using a new element type that didn't have an example in HTML4 or didn't have some easy allegory what you're going to end up with is something that looks like a DIV. It's going to be an unsemantic pile of block or inline block, or whatever it's going to be from a CSS perspective.</p>
     <p>[27:40] That's OK, because you mean something to the future and there's going to be a lot more future than there is past, I hope. So it's all right for you to start taking advantage of things that aren't everywhere yet.</p>
     <p>[27:51] We can start to put down a little bit of our guilt, a little bit of our self-flagellation and start to take advantage of new stuff. Because when we do we're also putting in a vote for the future. What we do defines what users are going to do. If we say, &quot;You need a newer browser in order to view this site,&quot; it's not saying, &quot;Best viewed in Netscape 4,&quot; it's saying, &quot;Best viewed in the future.&quot; Hopefully we want that in our operable future. So it's not saying no.</p>
     <p>[28:17] We want to go from this. Where we wind up using all this pigeon language, all of this stuff, all this slang, all of this new, made up but incredibly valuable, commonly shared vocabulary that isn't really meeting our not feeling guilty needs -- whenever you do something with JavaScript that you feel should be better done in CSS. We want to go from doing that, saying what we have to say in order to get a feature done, to saying what it is we want it to say, saying what we mean.</p>
     <p>[28:51] Bruce also, yesterday, said that heuristics are rubbish because they're ambiguous. I think, if I'm being charitable, what he might have meant was that it's difficult for a browser to parse a document and figure out what you mean about a particular element and do something about it when you're using heuristics, when you're using stuff like microformats.</p>
     <p>[29:17] The less charitable view, and I think what some people might take out of this, is that they'll say, &quot;Microformats and schema.org and all this other stuff is just totally a hack.&quot; Or, &quot;JavaScript is a hack. It adds to the guilt. It adds to this feeling of, 'We shouldn't be doing it this way because somehow it's wrong.'&quot; I want to push back on that interpretation because I want to say that almost everything we do in the browser today is more or less ambiguous. We thrive on ambiguity.</p>
     <p>[29:48] What is it exactly you mean to click on that link? What does it mean? It's a really complex question to answer. It means that we're going to start a new HTTP transaction. OK. But what are we going to do with the current document? What is a document? What does it mean to navigate? Shared session state?</p>
     <p>[30:09] There's all of these things that if you were going to write this behavior from scratch in C++ or in JavaScript, you would have to come up with an answer for it. You would come up with the answer for your application. You wouldn't come up with this general specific mealy-mouthed, not really tightly defined answer for what it means to click on that link.</p>
     <p>[30:30] Today, we just put this in a web page and assume that it means something good for the user. We have this shared vocabulary of, &quot;What is a URL?&quot; It's a parsable thing. We have an ontology for what a URL is, right? It's actually something with a grammar, and we can go figure out, &quot;Well, what are you going to do when you click on that link about that URL?&quot; That's up to the browser, but it's up to this mediated process that out of view of our content.</p>
     <p>[30:58] The more of this behavior that we take into ourselves, the more we do in JavaScript, the more we get away from the idea of shared ambiguity, which is what makes the world work. When you and I sit down to lunch, you know, assuming that you're not bored of me by then. If we sit down to lunch and we start talking, we're going to gloss over a whole series of things. We're going to use words that are incredibly imprecise, but that's the only way we get through the entire day.</p>
     <p>[31:21] Language is built this way. Language is built by not actually understanding what the other person means, but sharing a bunch of ambiguous things that you can sort of get by with in the cultural milieu. They give you this ability to go from one idea to the next without really getting bogged down in them until you really want to.</p>
     <p>[31:38] We shouldn't expect the web to be any different. The web gives us some nice fundamental data types. It gives us text, it gives us URLs, it gives us dates, ranges, emails, a lot of these are new, but selecting text area. But what do these things actually mean for my application? They only mean something in context, most of the time, and that's true of regular language as well. When I put these things together in a form and I say &amp;lt;Input type=text name=&quot;name&quot;&amp;gt; I give some email address, email, whatever. This means something heuristically to a browser, because it's going to try to auto-fill that form for you.</p>
     <p>[32:15] Heuristics aren't how we break the web; heuristics are how we make language. It's how we collectively make language. I'd like to suggest that that's how we're going to make change in our language as well, because we need more observable ways to share loose meaning to feed the process of progress.</p>
     <p>[32:33] What do I mean by observable? We saw that example before, Bruce's great example of searching the web to go find all of the things that have the same class name. That's observable. I can go and I can write a crawler, and I can do it. Now, if I put that in JavaScript, if I put that out in a Turning complete language, I've got the halting problem issue. I would have to interpret all of that JavaScript to go figure out what it means.</p>
     <p>[32:53] So if we can be declarative about our slang, we can start to make it observable, which means that we can go see what everyone else is doing. We can hear the slang everybody else is using, and we can sort of converge on a vocabulary. Then it becomes the browser's job to go blast that vocabulary for us, to give us a good version of that. Something that we can feel less guilty about because it's got a standard, because it's implemented everywhere if we're turning the crank fast enough.</p>
     <p>[33:19] We want to feed this process of progress. I think we get stuck in a place where we consider HTML5, we're done. And I agree with Hixie in some sense about HTML being a living standard. I think what he's getting at here -- and he'll correct me if I'm wrong -- is that if we consider there to be a point in time where a thing is done... we do need checkpoints. We absolutely need checkpoints. But if we consider there to be a point in time when things are done, we stop thinking about what it means to evolve to the next point.</p>
     <p>[33:48] We consider these things to be point events, and we're frustrated that we don't have them yet, and then we're frustrated that we don't have the new thing yet. But we're not really thinking about what it means to be living in this uncomfortable tension, which is the default. We've always had this uncomfortable tension between new features and old browsers. We've always had this uncomfortable tension between slang and the blessed language. That's just how life goes. It's not bad, it's good! It's how we evolve! If we stopped having slang, we'd be Latin, we'd be dead. No one speaks Latin, right? Does anyone here speak Latin? OK. I bet two Latin speakers probably can't speak to each other unless they went to the same school.</p>
     <p>[34:26] You don't want to end up there. You want your language not to die, which means that you need this tension. You need to be able to feed this tension in a way that's productive. So if we hide everything in JavaScript, we get to a place where it's not productive because we can't see it. We can't see the tension.</p>
     <p>[34:40] I'm really frustrated in a lot of ways by some of the proposals that we see in the working groups which suggest that what we should do, if you just a build a JavaScript API and be done, because then you can just get your feature in JavaScript and be good with it. My favorite whipping boy is location. Why is it not &amp;lt;Input type=location&amp;gt;? Anyone? Buehler? I don't know either. Camera input. Why is it an API? Why are people proposing APIs for these things as opposed to markup?</p>
     <p>[35:10] I think because people take the idea of markup very seriously, but we should stop doing that. Markup is serious when it's serious, but until then, it's just slang. We make up slang all of the time. It's OK to make up slang. It's OK to ask the browser to intercede on our behalf when we're using slang. It's slang that gives us this process of progress.</p>
     <p>[35:31] All right, so this is Bruce's list of popular class names from a couple years back. We want this. We absolutely want this, and we want this for the things that we're trying to say in our applications so that we can make our own semantics observable. He asked the question yesterday and I think it's puissant, &quot;Are the semantics we have the semantics we need?&quot;</p>
     <p>[35:53] If we come back to this idea of tension, they're never actually the semantics we need. They're never all of them, anyway. They're part of them. To the extent that we're saying what everybody else is already saying, and we're not saying anything new and original, we don't have to explain ourselves. We use the language that we all have. But when we don't understand collectively what it is that we were going to be saying with the word, we have to explain ourselves. We wind up doing that with JavaScript.</p>
     <p>[36:16] Today, when we put it in JavaScript, it's always hidden away from us. The web looks a little bit like this, right? It's really highly evolved to the set of things that we need to do in our environment all of the time, but it may not be the prettiest thing, and it's certainly not the endpoint. We may not want to end up here.</p>
     <p>[36:31] What if the DOM was extensible? It's worth asking the question. I know this is where the pitchforks are going to come out, so please keep them packed for just a second. What if we could make our extensions observable to crawlers? What if we could create new semantics that were observable to crawlers, like microformats, like schema.org?</p>
     <p>[36:52] What if the DOM didn't feel like it was a weird native, this weird thing over there? Remember I talked about this parallel tree issue, where I've got my tree in JavaScript of components, retained mode components? Then I've got this other tree over here, which is what I'm actually using to render it, which is actually a high level tree of retain mode components, but they don't talk to each other. What if I could just sort of play along? What if I could participate in that tree?</p>
     <p>[37:15] What if the things we're trying to say frequently about the stuff that we're rendering wasn't just sort of like spitting a string into the DOM? What if we could go discover that too? What if the browser was handing out ponies?</p>
     <p>[37:27] All right. So I work on a browser and we're handing out ponies. The first pony we're handing out is Scoped CSS. Tab, I think, talked recently about this yesterday, but Scoped CSS, it's a spec that's been pretty widely accepted already. What we're looking at here is a small example where we've got an image selector, and that image puts a black border on every image that it can see, but it's only going to select inside of that outer div. That image at the bottom is not going to be affected by it at all, because only the rules that are defined inside of that style, those rules will only apply inside of the current element. They'll start matching from that parent element.</p>
     <p>[38:11] It's a nice way of saying... of getting ourselves out of the problem that you often have with CSS where you write a naïve selector, something that looks really simple, and you put it in a small test document and you start iterating on your little component or your little piece of UI, works great. Then you put it into a big document and you've blown somebody else's stuff up. As Nicole Sullivan will tell you, you will end with this place where you're putting important, not all the selectors, which is not really where you want to be.</p>
     <p>[38:41] Scoped CSS is something that we're working on today, we've got an implementation, it's great. It's going to get us out of some of this stuff. This is pony number one. The second part, and this where we get back to this question of evolvable semantics, giving our hacks some meaning, putting ourselves back into the declarative side of things.</p>
     <p>[39:00] This is a web component. Web components are some new work that we're doing to make the DOM extensible. Think of it this way. What is a button, like the button element? The button element is actually a really high level thing. It maps to an OS level button. It has built-in states. It has active hover. It's got the ability to render sub-content. It's got all of this really sophisticated behavior. If you were trying to build a button in Canvas, you'd write a lot of code to do it, but we can just write it out as a button element.</p>
     <p>[39:32] Now, we want to suppose that if the DOM is a high-level representation of retained mode components, then we should be able to put our own high level retain mode components in the DOM too, so that I can just treat the DOM as my lingua franca. I can just come in with jQuery and find my custom elements, as opposed to going through this parallel tree over there.</p>
     <p>[39:52] Is it actually doing us any good to have non-semantic stuff that's living JavaScript, but we're sort of hiding it away from ourselves so we don't feel guilty, because it's living over in this other sort of un-visible tree? I don't think so. Then we're not voting with our feet. We're not saying, &quot;Hey, I wanted something that HTML didn't give me. There was no semantic for this, so I wanted to put it in my document but I couldn't.&quot;</p>
     <p>[40:14] What if we could define a new element type, and then use it from programmatic code really easily? But I'm going to say give me a new one and put it in the body. This is just a regular JavaScript class, by the way. There's nothing really special here except this HTML element &quot;.call&quot;, which is idiomatic JavaScript for &quot;Please call my super class constructor&quot; in the context of my current object. Then down here we wire up the prototype, but that's it. That's all it takes. This is all it should take. Today you can't do this in your browser today, because web IDL was really fucked. Debate for another time, catch me over beer or check my blog.</p>
     <p>[40:54] This is the part where you're going to come at me with pitchforks. There's this x-comment. What we're implicitly saying here is that the browser didn't have a semantic for this. I wanted to say something that was so far away from what the browser could actually give me the ability to say for myself that I wanted to cobble up a new one. Now there's no difference here between this and the div. You're going to tell me, &quot;You shouldn't do that, because you should not be able to extend HTML.&quot;</p>
     <p>[41:17] Well, first, I can't add a new element type that doesn't have this x- prefix. It's not a name space, but we are going to say that if you have extensions, they have to look like extensions so that you know you're using an extension so that when the new stuff comes along, you're not going to be conflicting with real HTML.</p>
     <p>[41:32] But when you're inventing new stuff to say what you mean, you need to be able to say what you mean. Putting it in some class, inventing a new language in some attribute versus using the tag name, I'm sorry, but that's just a little bit of lying to yourself. If you're using a class name to mean that this thing is actually something different and you're not using the tag name directly, you're just sort of hiding from yourself. You're actually imbuing this thing with semantic identity, but trying to pretend like you're not.</p>
     <p>[41:57] Let's not do that. Let's stop the lying to ourselves. Let's build ourselves an out so that we can have discoverable, shared, ambiguous, beautifully ambiguous, but beautifully shared, declarative meaning.</p>
     <p>[42:08] OK, so you know how I was talking about that problem with a calendar widget? Where you might build a calendar widget, and then you're going to spill your guts out to the entire world because you have all of these little tables, divs, whatever? You naively query through the DOM, you find them, you start to script them, not realizing that somebody else had ownership over it? They were the ones who were controlling it, they styled it, so you style it means that it blows up, something like that? Because they are reading back style or something? Or you're going to blow up their event handler, which means that it's going to end up in some nasty, disgusting state?</p>
     <p>[42:41] We have to be very, very careful in JavaScript today. What if instead we could do what browsers do? If I look at an HTML5 video element, it's got all of this nice little control widgetry inside of there, if I say I want it with controls. How is that implemented? Well, in WebKit today, that's implemented as HTML elements. That stuff isn't like, C++ code, it's just HTML elements that we're putting in the document and styling, but they're not exposed to the outside world.</p>
     <p>[43:05] Well, I want to do that trick for my own components. So Shadow DOM is an idea that was taken from XPL, and please don't use the word XPL with the web component model, because they're very different, but this is an idea that was taken from XPL and we're using it all of the time in browsers today, but we want to give you access to it so that you can create something similar.</p>
     <p>[43:22] So that if you have a visual representation, you want to be able to construct that with HTML and CSS, because it's incredibly productive, but you know that it's not the semantic that you're trying to express. It shouldn't bleed out into your page. You shouldn't be able to have to sort of like, spill your guts to any Johnny-come-lately who's walking the DOM in order to just get some visual rendering of the semantic that your element describes.</p>
     <p>[43:42] So Shadow DOM gives us a way to do this. What we're doing here is we're saying, &quot;Please make a public shadow property,&quot; this is by convention, not by fiat. This is the part that you have to do, you say &quot;New shadow root this,&quot; and you can only do this once for any element. Now, most elements in your document won't already have had a shadow created. You'll get an exception if you try to do this a second time, but there's only one shadow per element, and you can script it. It's like a document fragment. You can add new stuff to it. You can take a pen child, and it'll be part of the visible UI of your element.</p>
     <p>[44:13] OK, so that's pretty cool. So every time I create a new comment element, I will create some, in my build UI function, some new UI for that comment that scripts that Shadow DOM, and it's not going to be visible to the public document. That's awesome.</p>
     <p>[44:26] OK, so I've got Shadow DOM. I've got Scoped CSS. I've got web components. Now I want to put something, so I've got this thing that's got the Shadow DOM, it's this visual representation of my element. Now I want to append child. What happens? OK. This is where the content element comes into place. The content element up there says, &quot;When you append child, you put it here.&quot; Poke yourself through the Shadow DOM back into the light DOM. It's like a wormhole, right? There's this visual stuff around me, but if I script it, all I see the outer element, and then the stuff inside. You know, pay no attention to the gigantic, awesome UI that I've put around my actual children.</p>
     <p>[45:06] So how does that work? It works sort of like this. I've got my component element. It looks like an element, it is an element in the DOM. I have two childred -- Child A and child B. Child A actually lives inside the content when I append child, but there's all of this other visual UI, the &quot;child...&quot; That's all visual UI stuff that's going to be living in the shadow. So when I script it, I see component element and child A and child B. From the inside, I can look at the shadow, and I can start to script it, and I can change my visuals in reaction to something, but I don't have to bleed all of that implementation detail to the outside world.</p>
     <p>[45:38] OK, I've got ten minutes left. I'm going to short out my Q&amp;amp;A time a little bit, and we're going to go through some demos. This is a little bit of a Franken-build with Chrome. It's using some patches that we've put together for WebKit and for Chrome to help make this component system down here at the bottom where the comments were... So cute!</p>
     <p>[46:02] All right, I've added a new comment here to my thing. Let's see if I look at the Web Inspector, what do I get... Oh wow, OK, that's cool. X-comment, can you all see that? All right. X-comment, and that's only got the children for that text. All right.</p>
     <p>[46:22] If I come back here and I look at it visually, my comment here has this avatar, and it's got this formatting around it. Huh. OK, that's a component. Let's see how it works. So, we've got this template here and it's just a native element at this point. We'll see it again in a second. But it's got some scope style. Right? I've got some scope style, cool. It's got this content element and then I'm going to define this comment class just the way I did in my example here, right?</p>
     <p>[46:56] I'm going to make an element, I'm going to give it a shadow root and my build UI, I just build up some stuff. I copy this template in and, basically, when I append child, it goes into this content, right? So, that's not visible in the DOM that I'm seeing. So, if I come back through here, now my components or my UI on to the semantics. So, I can see in my console document.query selector all, next-comment slick. I've got two of them, right?</p>
     <p>[47:32] So, what we're looking at now is that we just extended the semantic. We extended the semantic with a thing we were actually trying to say and we improved our interoperability because I can put these x-comments on any document and not blow up when somebody comes through and tries to script it. They're just going to see the UI that I exposed.</p>
     <p>[47:51] They're going to see the semantic that I've exposed. And when a Web crawler and it sees an x-comment in the code, well, it's not going to be semantic in a way that HTML is semantic. Well, maybe because it's all probabilistically semantic. HTML doesn't mean stuff, right? Back to our anchoring sample, HTML doesn't mean stuff unless we all agree that it means stuff, and it's that widespread agreement, that widespread use that imbues it with meaning. OK. So, that's the components and what do you think?</p>
     <p>[applause]</p>
     <p>Alex: [48:25] All right. Quickly before I run out of time, I'll talk a little bit about model driven views. So, you know how we talked earlier about those form types? Those form types are a set of prebuilt semantics that we have for HTML, things that we know how to say, but those form element types in forms, give us some structure representation of the relationship between those pieces of data. But, that's sort of hard to extract and if we try to put all of our programming into forms, we quickly end up in a pretty terrible place because they don't express all of the UI we'd like. [48:57] They do a great job but they're not extensible, right, so we want some sensibility. And then we wind up having this thing where we shipped on template systems in class. I know we have backbone or spine and we pull those down and we use those in conjunction with, maybe, a snapshot of some JSON, right, and then we try to build some markup or we try to upgrade some markup that was there before.<br>[49:16] What if instead, we were just expressing the data that we wanted in the DOM itself, right, because you could think about that form and it's got that visual tree, right, it's got that sort of shadow tree of the UI that it's building, but it's also got that semantic tree. I go through the DOM and I can see the model that's there, right? I can see the values of those input elements. And they're sort of living on the elements themselves. They're sort of in parallel, but they wind up sort of getting conjoined in HTML today because HTML is very confused. It is model. It is view. It is relationship, all in one thing.</p>
     <p>[49:47] So, what if instead, we could directly inside the DOM tease that version out and talk about a model that's implicit on every element in the document and it's inherited through the document like CSS is. So, that's what we're doing here. I'm setting the document's model, the body's model to something which just comes through this Model.get which is, unfortunately, a little bit magic.</p>
     <p>[50:13] But, what we're putting in there is just the JSON object, right? There's nothing special about this. But, now, when we mutate this JSON object, or when we mutate the model, we're going to see live updates because what we're doing here is we're stamping this out once and then we can change it later. So, I'm going to give you a quick example of this. Right. So, this is the same recursive template working here. This is something we'll call model driven views.</p>
     <p>[50:36] But, what we're seeing here is the same recursive template, and what we do is we just smack the data directly in, right? So, now, we've got the DOM managing our templating and our data binding for us. We don't have to go build a system and send it on the wire ourselves. This is pretty good.</p>
     <p>[50:53] OK. The design goes here, although we want unified templating and data binding because they're two aspects of the exact same thing. Templating is data binding as a one-shot deal. Data binding is the upgraded version of templating. You shouldn't have to think of them as separate things. You're taking some data, you're generating a view. And we want to only update the parts of the view that actually change when we update some data.</p>
     <p>[51:15] And we want to make it sure that you can plug in your own persistence layer so that when you update some portion of your model, it gets written back to your back-end, your local storage, whatever it is in the same way that hormones do this for you. Cool.</p>
     <p>[51:28] I want to talk about this, but we will say that we're looking at a declarative version of this so that you can have the search engine be savvy about finding your data in addition to just finding your programmatic implementation of this because, again, if it's declarative, we can see it, and we want to expose things to be declarative and HTML's data too.</p>
     <p>[51:48] So, let's look quickly at what it means to look at our little example here. So, now we've got hierarchical comments. Awesome, we've got threads. So, how did this happen? So, what we've got here is we've got our comments class, right. What we've done is we've just said instead of putting that stuff in the document like I did over here, right, if I look here, I've got my x-comment here which declares that first comment.</p>
     <p>[52:20] Now, it's just using the default text, but that's not really very satisfying. I want to separate our model and our view out a little bit. So, let's go back to the other one and look at what we're doing here. Instead, I put in this JSON object which could have come off the wire. It could have come from someplace else. It's just hierarchical JSON, right. Like, this is just the thing that I was going to be serving out out of my database. Cool.</p>
     <p>[52:39] But, in order to generate that view, I just use a template in a document and it gets automatically generated for me. Now, when I go and I want to update things, I don't put any x-comment in my document, I modify the model. Let's look at that. Last post, all right. It was there. It's immediately done, but I didn't add x-comment. What I did instead was to put a new object into my model. Right?</p>
     <p>[53:08] Now, we've got data binding and model driven views, all managed by the Web platform itself. What do you think? Do you want it?</p>
     <p>[applause]</p>
     <p>Alex: [53:20] Good, done. All right. [53:22] So, we're out of time and I apologize for that. But, let me give you a quick view of what's happening on the JavaScript side because this is how we write these things today. We saw this earlier. This is how we want to write them, and this is coming. This is all going to combine to a place where we can start to write what we mean to say in JavaScript, write what we mean to say in the data model and write what we mean to say in our markup. So, we can start to agree more often than not because we can start to see each other. All right. Thanks a lot and I'll take your questions out in the lobby.<br>[applause]</p>
     <p>[53:54]</p>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2011/sessions/web-components-and-model-driven-views-alex-russell.md" id="comment">
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
