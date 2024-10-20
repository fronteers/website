<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>The Web Platform and The Process of Progress by Alex Russell · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p759">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>The Web Platform and The Process of Progress by Alex Russell</h2>
     <video width="480" height="270" controls>
      <source src="/_downloads/2012/alex-russell-the-web-platform-the-process-of-progress.webm" type="video/webm">
      <source src="/_downloads/2012/alex-russell-the-web-platform-the-process-of-progress.mp4" type="video/mp4">
      <track src="/congres/2012/sessions/the-web-platform-and-the-process-of-progress-alex-russell.vtt" default>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2012/alex-russell-the-web-platform-the-process-of-progress.webm">download the video</a> (or the alternatives: <a href="/_downloads/2012/alex-russell-the-web-platform-the-process-of-progress.mp4">1</a>) and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="https://vimeo.com/53373706">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2012/alex-russell-the-web-platform-the-process-of-progress.webm">Download video</a> (WebM, 114MB)</li>
      <li><a href="/_downloads/2012/alex-russell-the-web-platform-the-process-of-progress.mp3">Download audio</a> (MP3, 45MB)</li>
     </ul>
     <h3>Transcript</h3>
     <div class="transcript">
      <p><span data-start="00:00:08.000" data-end="00:00:23.000" data-start-seconds="8">Thanks, Christian. By the way, I know we're at the end of two very stimulating days, but Christian has done a fantastic job. Does everyone agree, yes? All right. [applause]</span></p>
      <p><span data-start="00:00:23.000" data-end="00:00:52.000" data-start-seconds="23">As Christian alluded, I was asked to speak, and I was as shocked as anyone when they said, &quot;You're going to be the last slot.&quot; Who was here last year? All right, so you kind of know what I do, and generally, it's not positive. It's not inspirational. I tell you why things are broken, and oh my goodness, [indecipherable 00:48] , and actually, that's what I'm going to do today. I'm here to depress you just a little bit.</span></p>
      <p><span data-start="00:00:52.000" data-end="00:01:16.000" data-start-seconds="52">But it's all planned. I decided to do this intentionally. I'll lift you back out of the pit of despair, hopefully, but you need to come with me into understanding why it is things aren't as good as they should be. There are two parts to this. One of them is, they're not as good as they should be. The world could be better. The other part of it is, how do we make it better?</span></p>
      <p><span data-start="00:01:16.000" data-end="00:01:49.000" data-start-seconds="76">I work on Chrome, as you probably know, and I am one of Google's representatives to the standards committee for JavaScript, so I spend a lot of time trying to make the web platform better. I do that having come from a bruising relationship with a browser for most of a decade. I helped build the JavaScript framework, I have spent more time than I care to digging into the idiosyncrasies of various platforms, and now I feel like I'm in a position on the inside to maybe do something about it.</span></p>
      <p><span data-start="00:01:49.000" data-end="00:02:04.000" data-start-seconds="109">We can think about making progress in a platform as a path, and it could be a random walk. It could just be things happening, and you're sort of subject to them, or it could be directed walk. There might be a destination.The question, I think, that's in front of us now is, &quot;What ability do we have as web developers?&quot; As people who are engaged, maybe, on an occasional basis, you talk to Anne van Kesteren</span></p>
      <p><span data-start="00:02:04.000" data-end="00:02:21.000" data-start-seconds="124">in a bar, or you talk to me someplace, and you're like, &quot;How can we make this better?&quot; Because some things are still definitely painful.</span></p>
      <p><span data-start="00:02:21.000" data-end="00:02:52.000" data-start-seconds="141">I spend a lot of time thinking and writing about the process of making it better. What is it that you can do that is most effective at every point to make something better? The first thing to recognize is that progress, which is what we want, is a man-made process. There is no event in human history which has yielded a better state for the people you love and care about, yourself, the people around you, your family, that has probably been only a natural event.</span></p>
      <p><span data-start="00:02:52.000" data-end="00:03:12.000" data-start-seconds="172">&quot;Yes, the ice age ended.&quot; Well, that happens on a time scale you don't care about. &quot;The crops were good this year.&quot; Well, you planted the crops in the first place. There's something about this which is always relative to a human viewpoint. It's always about, &quot;Is it good for a human?&quot; and it's always about something that we do for, with, and to each other.</span></p>
      <p><span data-start="00:03:12.000" data-end="00:03:28.000" data-start-seconds="192">Progress. The set of things that are better are better in relationship to us, and the way we make them better is something that we do. It's not something that happens to us. There are environmental factors, but collectively, we make what we make, and it can be better.</span></p>
      <p><span data-start="00:03:28.000" data-end="00:03:45.000" data-start-seconds="208">But the fundamental predicate, the thing that must come before you have any progress, before you can make anything better, is that you must make something different. If you would like something to be better by a large amount, it must be different by at least that much.</span></p>
      <p><span data-start="00:03:45.000" data-end="00:04:11.000" data-start-seconds="225">There's probably going to be something that's also worse. Change isn't always good. I like to say that change is a vector; It has both magnitude and direction. When people talk about change as though it is a good thing, I get a little bit skittish. I don't really necessarily agree. I think change can often be a bad thing, but it's only when things are changing that things have the potential at all to ever get better.</span></p>
      <p><span data-start="00:04:11.000" data-end="00:04:40.000" data-start-seconds="251">We need to wrap our mind around the idea that progress is man-made so we, us, we make progress, or we don't, and it's relative to what we want. Progress is not a value-free system. It must require that we think that something is better or worse for us. It requires our value system be applied to a set of events. So our values matter, it's about something we do, and it can be good or bad.</span></p>
      <p><span data-start="00:04:40.000" data-end="00:04:59.000" data-start-seconds="280">We can change things for the better, or we can change things for the worse, so we have a responsibility, then, to think about how much change can we make. How much change are we allowed to make? What changes should we make? Who are they going to be bettering? Who are they worse for? There's almost a moral aspect of this, but I won't get too far into it.</span></p>
      <p><span data-start="00:04:59.000" data-end="00:05:27.000" data-start-seconds="299">This is Thomas Kuhn, a philosopher of science who wrote a book called &quot;The Structure of Scientific Revolutions&quot; in 1962. This is the book for which you can curse/thank for the phrase &quot;paradigm shift.&quot; It wasn't his fault. It's not his fault that he had a good idea, but he has a divergent theory of progress, specifically in science, which up until then had been viewed as a linear set of things getting better, things just get better.</span></p>
      <p><span data-start="00:05:27.000" data-end="00:05:48.000" data-start-seconds="327">But there's also some tension in that. You also recognize that things don't get better just little bit by little bit. Sometimes they make big changes, they jump a lot. So he spent a lot of time thinking about, writing about, the set of times when you don't move a little bit, you move a lot of the time. It's a big discontinuity. You make a large jump all at once.</span></p>
      <p><span data-start="00:05:48.000" data-end="00:06:14.000" data-start-seconds="348">In reality, that's not actually what happens, and he talks a lot about how in order to make a very large change, and a very large apparent change, there has to be this buildup of evidence that the current world isn't working. It's not right. Something about the way we understand or explain things isn't as solid as we once thought it was, and that's the landscape on which you can make a revolutionary change.</span></p>
      <p><span data-start="00:06:14.000" data-end="00:06:28.000" data-start-seconds="374">But there are times in the world where there's normal progress and there's revolutionary progression. It's worth thinking about the times in our past, in the browser world, when we've had normal progression versus revolutionary progression.</span></p>
      <p><span data-start="00:06:28.000" data-end="00:06:53.000" data-start-seconds="388">So I always go back to the late '90s. The late '90s were absolutely revolutionary for us. Obviously, it gave many of us jobs, for one. That was good, I think. I don't know if you're here at gunpoint, but if you're not, the late '90s were probably a big part of that, because we had multiple competitors trying to build a platform together and in opposition, all at once.</span></p>
      <p><span data-start="00:06:53.000" data-end="00:07:14.000" data-start-seconds="413">And they were delivering new features every year-every six months, every year. New things were getting out there. And not only were they getting out into the world, they were getting out into users' machines in a way that you could start to count on. And of course we had all sorts of predictable problems that came along with that. With great change comes a lot of uncertainty.</span></p>
      <p><span data-start="00:07:14.000" data-end="00:07:43.000" data-start-seconds="434">&quot;Oh, I just upgraded for IE4. What am I going to do when the 5.0 browsers come out?&quot; &quot;Oh, the 5.0 browsers are here. What about the 6.0 browsers? Everything's going to break. It's terrible. Slow everything down.&quot; This was what we all were saying. There was a lot of, &quot;Uh, this is terrible. There's too much change. It's too future-y.&quot; And so we settled into a normalcy, specifically when IE6 won.</span></p>
      <p><span data-start="00:07:43.000" data-end="00:08:13.000" data-start-seconds="463">But we've sort of come to expect that there's going to be this slow progression from now on. And I think that's not necessarily how we should think about the world potentially improving. I think our world has mounting evidence that the way we're approaching the task of web development is based on a whole series of flawed assumptions about the world around us, and it's about time for us, collectively, to break out of them. So I want to run you through a couple of thought experiments.</span></p>
      <p><span data-start="00:08:13.000" data-end="00:08:50.000" data-start-seconds="493">Progress is man-made. What are the dials of change? Where are the places that we can slow things up? Speed things up, slow them down. (Slow things up, yes. Let's not do that.) So let's walk through these things one at a time. What if there was only one browser? Just clear stop. Just whatever you're thinking right now, stop. What if there was only one browser? Brand X makes the browser. It could be Microsoft, it could be Apple, who cares? There is one browser in the world.</span></p>
      <p><span data-start="00:08:50.000" data-end="00:09:16.000" data-start-seconds="530">What happens now? Right now, is that good? On your next project, is that a good thing? Do you feel uncomfortable about that idea? Does it make you go, &quot;Yes, it might be really good. I don't have to worry about any of this compatibility stuff. But is it going to get better?&quot; You might have that tinge in the back of your head. You might be saying to yourself, &quot;Well, if there's only one browser, then how do we get our issues or needs solved?&quot;</span></p>
      <p><span data-start="00:09:16.000" data-end="00:09:40.000" data-start-seconds="556">What if the company that makes it or the organization that makes it doesn't share my goals? How do we ensure that there's a new version of that browser? That's interesting. And what if browsers still cost money? This is an interesting friction point. So if we look back at the course of web browser evolution, there was a time, I don't know if you remember it, but web browsers cost money.</span></p>
      <p><span data-start="00:09:40.000" data-end="00:10:10.000" data-start-seconds="580">In the United States, there was a company, still is, called Best Buy, big box electronics retailer. And you could go into Best Buy and get a shrink-wrapped disk or CD with Netscape on it. And you could pay them money, and maybe you would buy Internet service, a dial-up Internet service, and you would get the CD for free, so you would get Netscape Navigator 3.2 Gold as part of your service. You might remember this if you're as old as I am.</span></p>
      <p><span data-start="00:10:10.000" data-end="00:10:37.000" data-start-seconds="610">So what if browsers still cost money? What if Microsoft hadn't walked into this and said, &quot;Oh my goodness, someone's building a platform around us. We will no longer be the ones to build a platform. We should set the price of the browser to zero. It should become a feature of Windows.&quot; That's what happened. What if that hadn't happened? What if there's an alternate future when people are still paying for browsers? Would they be better? Would they be worse? Would that be better or worse for us as developers?</span></p>
      <p><span data-start="00:10:37.000" data-end="00:11:23.000" data-start-seconds="637">OK. What if everyone had the latest version of the best browsers immediately-right now, right this instant? You wake up tomorrow morning, and all of the legacy browsers in the world are gone. Is that good? OK. Why is that good? Why is that good? Is it good for users? Probably. But it's good for you, specifically, right? There's a little bit of separation anxiety in this thought experiment, right? If you've spent as many years as I have thinking and knowing about parts of IE that no one should ever have to care about, or Netscape four back in the day. If you've been cobbling together these little bits of hack to go build a coherent platform out of it, you might feel as though someone's on your turf.</span></p>
      <p><span data-start="00:11:23.000" data-end="00:11:35.000" data-start-seconds="683">But if everyone had the latest version of the best browser right now, would that be better or worse for us collectively, and what would it change about the way you approach your next project?</span> <span data-start="00:11:35.000" data-end="00:11:47.000" data-start-seconds="695">Last thought experiment. What if everyone had that happen to them, you wake up tomorrow, everyone's got the best version of the best browser, or the latest version of whatever browser they've got, but there's no auto update, ever?</span></p>
      <p><span data-start="00:11:47.000" data-end="00:12:07.000" data-start-seconds="707">Every time we release a browser, we go around and maybe we prompt users to upgrade, or we do it in an advertising campaign, or whatever it is. We come up with some way to get the word out, and users can go and download the next version of the browser. Is that better or worse than where we are today?</span></p>
      <p><span data-start="00:12:07.000" data-end="00:12:30.000" data-start-seconds="727">Now, we're starting to see the axis, the set of levers that we've got, or that have been turned for us, in many cases, by different people over time, that have accelerated and decelerated the process of progress. Progress is man-made, and it's a process whose velocity we can change. It's something that we can have something to say about.</span></p>
      <p><span data-start="00:12:30.000" data-end="00:13:04.000" data-start-seconds="750">This rang true for me earlier this year at Front-Trends, where Rachel Andrew was giving a talk about the craft, effectively, of putting together websites, modern websites, modern UI. The thesis of her talk, and I hope not to misrepresent it, but basically what she was saying, if I can paraphrase, was that you should only lean on tools, or techniques, or polyfills, those sorts of things, once you know what they're doing. You should learn your craft, and then you should be able to automate.</span></p>
      <p><span data-start="00:13:04.000" data-end="00:13:27.000" data-start-seconds="784">The question isn't, &quot;Is the plan going to be the thing that you use?&quot; It's, &quot;Did you learn to plan in the first place? Did you make a plan?&quot; Learning to understand what's happening down there in the browser, in your site, getting familiar with the guts of it, is an important thing to do. But this was a talk that was juxtaposed, it was put right next to several talks about polyfills, and how they were amazing, and how you can just include these scripts, and they make these problems go away.</span></p>
      <p><span data-start="00:13:27.000" data-end="00:13:45.000" data-start-seconds="807">The cognitive dissonance, the difference between these two positions, could not have been clearer. One of them said, &quot;Look, this is good. This is great. You get everything here for, effectively, free,&quot; and the other one said, &quot;No, no, no. It's terrible. You should go and learn what's in there, understand it&quot;, and both of those things ring true, don't they?</span></p>
      <p><span data-start="00:13:45.000" data-end="00:13:57.000" data-start-seconds="825">One of them is a key enabler to making your life better, and should you have to know everything about everything? Who does? The other one says, &quot;Well, you should know a lot about things, especially if you're going to make progress, because it's good for you, and it's maybe good for people around you.&quot;</span></p>
      <p><span data-start="00:13:57.000" data-end="00:14:12.000" data-start-seconds="837">I, as someone who works on a browser, was sitting here listening to these two talks next to each other, and the only thing I could think was, &quot;We're doing it all wrong&quot;, because this is not a debate that web developers should be having between themselves necessarily.</span></p>
      <p><span data-start="00:14:12.000" data-end="00:14:38.000" data-start-seconds="852">Yes, this is a debate that will always happen at the margins, but the question of, &quot;What is it that you're doing to take care of some marginal percent of the user base, over and above how you were going to construct your designed experience in the first place?&quot; is really what it gets to. &quot;How much effort, how much cost, how much expense am I going to put into architecting my system, so that I get this top-level experience for everyone?&quot;</span></p>
      <p><span data-start="00:14:38.000" data-end="00:15:13.000" data-start-seconds="878">It's worth acknowledging that polyfills are a tax. They're a form of money taking out of your pocket, be that in terms of complexity, if you're a site, latency, in terms of just the sheer amount of learning you have to do in order to understand what they're doing, and how they work for you or with you, and, as Peter Paul pointed out yesterday, they're increasingly a tax at run time, and that's money that's coming out of, in many cases, literally, your pocket.</span></p>
      <p><span data-start="00:15:13.000" data-end="00:15:32.000" data-start-seconds="913">That's battery life. That is something that's more precious in the mobile world than CPU cycles ever were on the desktop. I think we need to come to a recognition that this is what we're doing. We are, collectively, year over year, leaning on JavaScript.</span></p>
      <p><span data-start="00:15:32.000" data-end="00:15:57.000" data-start-seconds="932">This is the average JavaScript of the top 1.000 websites as surveyed by the HTTP archive earlier this year, so we're looking at, on average, something like 180 kilobytes of JavaScript per page over 14 requests, 14 scripts. Maybe those were buttons. Maybe those were copies of jQuery. Who knows how many there were per page? Maybe those were polyfills.</span></p>
      <p><span data-start="00:15:57.000" data-end="00:16:25.000" data-start-seconds="957">But those requests all represent value that's being added to that page, and a lot of that value is there to accommodate legacy browsers, people who are, in one way or another, either left behind or about to be left behind, and it's a reach out to those users, by those websites, to say, &quot;No, no, no. We can still give you everything. We can give you the whole experience&quot;, but you're taxing everybody else here, too.</span></p>
      <p><span data-start="00:16:25.000" data-end="00:16:53.000" data-start-seconds="985">If you look at the sizes of jQuery 2.0, which is the new version that's going to drop support for old versions of IE, versus modern jQuery at the top of trunk-1.8, you get a relatively huge reduction. I've done experiments once upon a time in Dojo, to say, &quot;What if we only supported a modern WebKit browser?&quot; Well, you get something like 30 percent off of the top, and that's without re-architecting anything.</span></p>
      <p><span data-start="00:16:53.000" data-end="00:17:10.000" data-start-seconds="1013">There's a lot of this cost, which is just there to capture or bring people along with you, as you move into the future. This is a maladaptive trait. Eventually, the set of the things that were you good for you, you evolve to a place where the set of things that were helping you out might be hurting you, and at some point, they hurt you more than they help.</span></p>
      <p><span data-start="00:17:10.000" data-end="00:17:28.000" data-start-seconds="1030">Purebred dogs are a great example of evolution gone a little bit awry. They can barely breathe, subject to all sorts of cancers early on. It's a tough spot to be in when you've done good, and done better, and now you realize that the things that have helped you do better are helping you do worse.</span></p>
      <p><span data-start="00:17:28.000" data-end="00:18:03.000" data-start-seconds="1048">Steve Yegge, in one of his rants, which, this one was leaked. It was meant to be an internal post for Googlers, but was eventually allowed to stay public. I recommend you go read it. It's all about internal platform stuff at Google, but he included in this, he said, &quot;It's called accessibility, and it's the most important thing in the computing world, the most important thing&quot;, and he's right. This is part of a longer discussion about, you never build one product.</span></p>
      <p><span data-start="00:18:03.000" data-end="00:18:20.000" data-start-seconds="1083">If you think that you're going to hit everyone with a single product as a service provider, you're probably wrong. So what are we doing when we build websites or web pages? We're building multiple products. We're always building multiple products. If you think you're building one product, you're wrong and I dislike your work.</span></p>
      <p><span data-start="00:18:20.000" data-end="00:18:41.000" data-start-seconds="1100">That's not a controversial statement, because if you think that you're building one experience, and there's no fallback, if you're building without a fallback, and you're helping to create a world where only sighted people, or young people, can use the web's content, you're doing a dick-ish thing. It's not good.</span></p>
      <p><span data-start="00:18:41.000" data-end="00:19:02.000" data-start-seconds="1121">Accessibility matters, but accessibility isn't in an expensive sense matters. Let's say that in an ideal world, we're building two experiences. It's probably many, many, many different experiences. Mobile, we talk about mobile as though it's a thing now, but it's just one other aspect of the experience that we're trying to build, you design these experiences intentionally.</span></p>
      <p><span data-start="00:19:02.000" data-end="00:19:49.000" data-start-seconds="1142">You design a fallback experience, you design an A-level experience and then you maybe spend marginal time the middle trying to design things one way or the other somewhere to capture users you might've lost. Let's assume that we build into two buckets; your A-level experience and your fallback. You have a fallback, you have a fallback, you must have a fallback. We would like to capture the most users in the world and get them onto that A-level experience and not the fallback. That's good. That's reducing our costs. We heard this yesterday. Alex Graul was saying...he was showing some beautiful stuff at the Guardian, just incredibly gorgeous visualizations and he was saying, &quot;But we need all of this to work in IE7 and IE8&quot; and I just...I hear that and I cry. What he's saying is that no matter what we do, there are two ways to create a better experience; one of them is to...well to create a broader experience. One of them is to bring people along, is to bring people into the new world, is to give them new browsers, whatever and the other way is to set your sites lower. What he's saying is we need to set our sites lower in terms of delivering an experience in order to do it on these browsers. Polyfills are one way we do that.</span></p>
      <p><span data-start="00:19:49.000" data-end="00:20:21.000" data-start-seconds="1189">JavaScripts libraries of all kinds help us do that.</span></p>
      <p><span data-start="00:20:21.000" data-end="00:20:36.000" data-start-seconds="1221">All the responsive design stuff is effectively sort of in this vane it's not quite as bad but we pay a heavy, heavy tax for it. I think of this in terms of pollution. You're looking at this factory and you're thinking I wish they could get a scrubber on that.</span></p>
      <p><span data-start="00:20:36.000" data-end="00:21:02.000" data-start-seconds="1236">If you look at the factory itself, what is this factory doing? It's not polluting, that's not what it's doing. Polluting is a side effect of creating an incredibly valuable thing. This is a factory that's probably lifting people out of poverty, helping to create a local community that people can live in and maybe it makes some the air dirty but it's creating products at a much lower price than if people had to do it without mechanization.</span></p>
      <p><span data-start="00:21:02.000" data-end="00:21:41.000" data-start-seconds="1262">This isn't a one-sided thing. The set of things that are bad about creating value are bad but creating value isn't bad. What happens is that the aggregate effects of our small decisions are the things that cause the entire environment to degrade. Is the mobile web slow? I don't know, is the web slow? These are parallel questions as far as I'm concerned. If you ask why is the web slow? Well, it's JavaScript, it's CSS, it's bloated libraries, it's a bunch of legacy baggage. It's all the stuff that we know that we need to do in order to bring users along with us but eventually it becomes maladaptive and it hurts everyone.</span></p>
      <p><span data-start="00:21:41.000" data-end="00:21:53.000" data-start-seconds="1301">It hurts our perception of the platform, this isn't great. In fact, it's really bad. It's very, very, very bad. This is very bad. I don't know how to express this more succinctly. This sucks.</span></p>
      <p><span data-start="00:21:53.000" data-end="00:22:18.000" data-start-seconds="1313">This is the world that we live in. My argument here is that there's a 90 percent threshold. It's about the line at which if you look over the historical trend of the YUI A-grade libraries over time, they said basically if you wanted to be A-grade, the A-grade list included 90 percent of the web's users at every point in time. That list changes, of course, but it always included about 90 percent.</span></p>
      <p><span data-start="00:22:18.000" data-end="00:22:44.000" data-start-seconds="1338">Modern JavaScript libraries always try to capture at least 90 percent of the set of users that they think they've got. Ninety percent is a pretty good line. If you can say no to one in 10 people that's still ballsy but you're probably not saying no to every one in 10, you're saying no to one tenth of one percent browser here and one crazy thing from China there, that kind of thing. You're not saying no all at once. You're saying no at the margins.</span></p>
      <p><span data-start="00:22:44.000" data-end="00:23:02.000" data-start-seconds="1364">It's worth noting that when we don't get new stuff quickly it hurts. It hurts all of us. It hurts our profession, it hurts our sites, it hurts our clients, it hurts our users and I think we need to own up to the fact that we haven't been doing very well.</span></p>
      <p><span data-start="00:23:02.000" data-end="00:23:38.000" data-start-seconds="1382">I'm sorry. This is the part where I say, mmm. I'll get to the good bit. I don't know really does anyone really recognize it was almost a decade ago that Canvas was released? Almost a decade. I wanted to be doing something else by now. We're only at 82 percent penetration. Browsers that have Canvas as seen by Stat Counter are only about 82 percent. We're not even 90 percent eight years later. Eight years later. OK.</span></p>
      <p><span data-start="00:23:38.000" data-end="00:24:15.000" data-start-seconds="1418">Rounded corners anyone? About the same time Firefox 2004, putting in Safari in 2007, same rate, same rate of decline. We're still waiting on IE8, basically. If IE8 goes away all this stuff so turns into free money. We could start using it everywhere. We don't have to...our fallback experience our bucket for fallback is an experience that we've expressly designed. Our bucket for A-grade is a new experience that we've expressly designed. We can stop kidding ourselves that there's something in the middle here. We can say, the 90 percent I can capture in my A-grade and my fallback is that rest.</span></p>
      <p><span data-start="00:24:15.000" data-end="00:24:52.000" data-start-seconds="1455">Let's look at something a little bit newer. This is video, right? Introduced by Opera in 2007, we're at 82 percent but even newer than that are 3D CSS transforms. We had our talk about that today. Right now, we're at 64 percent over three years. If we look at that and we go what does it take to get to 90 percent? What does it take to get to actually available? It's not good. The optimistic, the early adopters among us can start to target new stuff that we launch in a browser today in 2016. Does that strike you as a good deal?</span></p>
      <p><span data-start="00:24:52.000" data-end="00:25:26.000" data-start-seconds="1492">I got up here last year and I started talking about web components and frankly, I feel a little bit bad about that because it's stuff that we're going to ship but you won't be able to use. Having a plan to ship it from a browser vendor's perspective and having a plan to be able to use it from your perspective wind up being very, very, very different things. The rate of progress here is relatively low. We're looking at commonly understood things that we all would like to be able to use as part of our standard toolbox, still requiring polyfills, still requiring JavaScript to help us get to usability. Right now, I think it's safe to say that most people are still designing in agencies and elsewhere with IE8 is your baseline. OK. I must support IE8 and modern browsers; OK, cool. IE8 is still at 13 percent of the market so no one can say no to IE8. You can't use modern JavaScript, that is to say you can't count on high-performance JavaScript, there's no JIT, there's no ECMAScript 5</span></p>
      <p><span data-start="00:25:26.000" data-end="00:26:01.000" data-start-seconds="1526">you can't use Canvas or SVG without polyfills, which are expensive because those SVG and Canvas things are probably going to end you up...those polyfills will end you up with VML, which is slow and broken in IE8. CSS selectors, Media</span></p>
      <p><span data-start="00:26:01.000" data-end="00:26:49.000" data-start-seconds="1561">queries, backgrounds, I could keep going on and anything new we add, by the way, you won't actually have access to. If we add new stuff IE8, on Windows XP, end of the line; bad news. What about IE7? There are a lot of organizations who are still dependent on IE7. Yeah. Do you remember that? Do you remember when Pluto... when Pluto got dropped as a planet? Yeah. That was IE7. Because if you need IE7 to be your baseline you're going to be pulling in polyfills and JavaScripts and expensive hacks to do local storage, to do fast JSON parsing, accessibility, pretty much anything.</span></p>
      <p><span data-start="00:26:49.000" data-end="00:27:05.000" data-start-seconds="1609">At some point, you start to feel a little bit of sympathy for the hostage taker. You're, like, &quot;Oh, he's in a tough spot financially. It's terrible for him and his family. He needs to make money somehow&quot;. You're still a hostage. You're probably still going to die.</span></p>
      <p><span data-start="00:27:05.000" data-end="00:27:31.000" data-start-seconds="1625">The end of this scenario isn't good, it's terrible. We need to have a little bit less sympathy not for our users but for the hostage takers. If you think about the world of browsers today the way the world, the way I like to think of it is that there is a pack of new browsers that are released relatively frequently; call it once a year, once every year and a half, worst case scenario.</span></p>
      <p><span data-start="00:27:31.000" data-end="00:27:49.000" data-start-seconds="1651">All users who auto update to those browsers get the benefits of whatever competition has happened in the cycle just before that. In the previous turn...in the previous iteration everyone said, &quot;We need this feature&quot;. And then they said, &quot;No, no, no. We did this slightly wrong let's go to the standards and do it and come back&quot;. All right.</span></p>
      <p><span data-start="00:27:49.000" data-end="00:28:06.000" data-start-seconds="1669">Now, we've got the standard version. That happens in the next version. The next version of every browser is the one that we can count on to be helping us out. The last version of every browser is a liability. It's always a liability. The population today is very bimodal.</span></p>
      <p><span data-start="00:28:06.000" data-end="00:28:35.000" data-start-seconds="1686">You have auto update, that's been taken on board by every browser vendor and the users who have the auto updating systems enabled and hopefully as friction free are way out in front. They don't need anybody's help to get the new stuff. But you view this entire world as your customer base. You think of them all as just variations on each other. You need to accommodate this whole world, but you don't.</span></p>
      <p><span data-start="00:28:35.000" data-end="00:29:17.000" data-start-seconds="1715">This is the good part. This is the thing where I think...does anyone use IE7 day-to-day? IE6? My IE6 homies, anyone? No? OK. All right. I didn't think so. I want to show you some new stuff. Stuff you might not have seen. This is YouTube in IE7. I know. It's a little in your face, isn't it? This is actually better than it was. For the longest time there was a bar across the top the entire layout was broken and it said here are our browsers, install one of these. This is YouTube, this is the world's most valuable home page, it is in your face. It says, please, please get a new browser.</span></p>
      <p><span data-start="00:29:17.000" data-end="00:29:39.000" data-start-seconds="1757">This is Gmail in IE7. This is not IE6 by the way, mind you this is not IE6. This is what Gmail is going to look like for IE8 as soon as IE10 is released. [applause]</span></p>
      <p><span data-start="00:29:39.000" data-end="00:30:10.000" data-start-seconds="1779">This is Yahoo now. It's not just us. This is Google Docs and this is trying to edit a document in Google Docs. This is Google Plus; seriously, this is Google Plus, honestly. This is Facebook although I will note for the record that I think that those links that are up there are even broken right now. They'll fix it I'm sure. This is Hyves, this is amazing. This is Google Art Project. These are big, big, big, big sites. If your boss says, &quot;No, we can't afford to turn off support for IE7 or IE8, seriously, go get yourself a copy of IE7 and IE8 and then go browse the web. Seriously, this is [indecipherable 30: </span></p>
      <p><span data-start="00:30:10.000" data-end="00:30:37.000" data-start-seconds="1810">34] in the future already being here.</span></p>
      <p><span data-start="00:30:37.000" data-end="00:31:10.000" data-start-seconds="1837">I just think we haven't collectively accepted that this period of evidence that keeps accumulating about how we're not necessarily doing well for ourselves keeps piling up and we may be missing it. I'm just going to leave you with this, which is, that we can do this. We have seen revolutions in the web before and they're enabled by users getting new browsers. Not new browsers once but new browsers continuously. That change, that churn, that's what causes users to have a better world and gives us access to the benefits of competition.</span></p>
      <p><span data-start="00:31:10.000" data-end="00:31:45.000" data-start-seconds="1870">We don't get anything as long as we have to pay attention to the last version of some browser. We want to be developing against the current version and the next version because as long as there is anyone who is one browser or version back, they might as well be cast in stone. They're end versions back they just don't know it yet. They might as well be lost to all-time. I'm going to leave you with this; only we can do this. It's up to us as web developers to put these prompts in place, to get in users faces and say, &quot;Listen, you're polluting. I realize that you're doing well by your organization by not replacing stuff&quot;</span></p>
      <p><span data-start="00:31:45.000" data-end="00:32:10.000" data-start-seconds="1905">Maybe it's expensive to replace. Maybe it's expensive to put that muffler on top of that smoke stack, but it's up to us to say, &quot;You, as a user, are hurting us. You're hurting the environment. You know that thing where the web is slow and you hate it? You should be doing something about it, dear user&quot;. Maybe you don't have to be as up in someone's face as Hyves or Plus are, but YouTube, think about YouTube. Think about the Google home page.</span></p>
      <p><span data-start="00:32:10.000" data-end="00:32:34.000" data-start-seconds="1930">These are lessons in what we can do together to help change minds, and if there's anything that we've learned in the Chrome experience of the last couple of years, it's that users do what they're asked to do. If you get in their faces, and you say, &quot;Hey, I need you to take a moment of your day&quot;, or just serve them the fallback experience. Stop treating users on old browsers as though they are part of that leading pack. That's my plea to you.</span></p>
      <p><span data-start="00:32:34.000" data-end="00:32:58.000" data-start-seconds="1954">I guarantee you that if you do, we can change this. We can end our legacy nightmare, because the auto updating world is the world we all want to be in, and as you saw, it's already better than anything that we've got right now. It's going to be amazing, and I think we can do this together. Thanks for attention, and... [applause]</span></p>
      <p><span data-start="00:32:58.000" data-end="00:33:17.000" data-start-seconds="1978">Hey. Call to action in the end. Good call. I like the idea that Facebook asks you to download Internet Explorer because Internet Explorer's old. That was a nice screenshot. It's really hard to point to people to upgrade it, because it's like...</span></p>
      <p><span data-start="00:33:17.000" data-end="00:33:33.000" data-start-seconds="1997">Oh, I think Facebook, they actually have a list... They changed their prompt recently, but it was asking you to install the latest versions of IE, and Firefox, and Chrome Frame and Chrome. I think they're doing the right thing.</span></p>
      <p><span data-start="00:33:33.000" data-end="00:33:48.000" data-start-seconds="2013">I very much agree with you. I'm just so tired that people keep building things for Internet Explorer 6, as if it's a browser that should be supported in the interface. People are not used to good experiences there. We should not spend our time to shoehorn that in there.</span></p>
      <p><span data-start="00:33:48.000" data-end="00:34:08.000" data-start-seconds="2028">Well, my view is a little bit more aggressive than that. It's that you shouldn't be spending any time on IE8. IE8 should be your fallback experience. You should be developing your sites with IE8 in mind as the fallback experience, because if you're targeting your top-level experience at any version behind the latest version, you're actually taking money off the table.</span></p>
      <p><span data-start="00:34:08.000" data-end="00:34:28.000" data-start-seconds="2048">You're saying, &quot;I can't build an experience that's that good. My development costs will be that much more. I can't use modern JavaScript. I can't use modern CSS&quot;. You're taking actual user experience advantage off the table, and you're paying users who are on old browsers, who are hurting you, and you're paying them with that money.</span></p>
      <p><span data-start="00:34:28.000" data-end="00:34:46.000" data-start-seconds="2068">That's what you're doing, and I think that that's a place that, collectively, we need to get beyond. We need to understand that this is actually a form of pollution. It's users and organizations that have chosen not to participate in good social behavior, effectively, punishing us all by polluting in the environment.</span></p>
      <p><span data-start="00:34:46.000" data-end="00:35:25.000" data-start-seconds="2086">I think it's also very important to think about this in a global context, because the argument I always hear, and we had lots and lots of meetings in that in Mozilla, is that, for example, in Korea, until a year ago, we almost had every banking locked into Internet Explorer 6, because the security, which is the most ironic thing, was done with ActiveX. By law, the banking sites had to use ActiveX, and no other browser would be allowed but that argument does not count to me in our world. That shouldn't affect our work, to say, &quot;Oh, we have to do that, because some banking site in Asia has to do it as well.&quot;</span></p>
      <p><span data-start="00:35:25.000" data-end="00:35:37.000" data-start-seconds="2125">That is partly their problem if we want to go after the same market, which is not very likely, because we don't get their clients with our websites. I always love when people talk about browser support, that they go for these edge cases in both sides.</span></p>
      <p><span data-start="00:35:37.000" data-end="00:36:06.000" data-start-seconds="2137">Well, I think it's a reasonable thing to do, but my argument here isn't that you shouldn't be trying to help those users out. It's that you need to do something different to help them out. You need to put them not into the group that you're doing the most care and feeding of. It's that you need to put them into the short bus. You need to treat them as though they're using browsers that deserve the fallback experience, and test your fallbacks.</span></p>
      <p><span data-start="00:36:06.000" data-end="00:36:23.000" data-start-seconds="2166">I think testing your fallbacks is really what I'm saying. Test your fallbacks, and aggressively put people in that group, because that's accessibility. That's designing the second experience, and if you're paying as much attention to that second experience as, I think, we all agree that you should be, then you're going to do well by them, too.</span></p>
      <p><span data-start="00:36:23.000" data-end="00:36:43.000" data-start-seconds="2183">It's also a great argument for progressive enhancement. It means that you should start from something that works bloody everywhere and that's HTML, to me, and then enhance with it. You can use Node.js on the server to use your great JavaScript templating into some basic HTML as well, but you have to have something that works everywhere.</span></p>
      <p><span data-start="00:36:43.000" data-end="00:36:55.000" data-start-seconds="2203">A lot of the arguments I hear in web design is, &quot;Yeah, everybody has the newest WebKit, and the coolest, newest browsers, and we don't need any fallback that is server-side rendered anymore at all&quot;, so how do these work together? How is the fallback solution there?</span> <span data-start="00:36:55.000" data-end="00:37:26.000" data-start-seconds="2215">There is a lot of tension, obviously. I think the big change we're seeing now is client-side data models starting to become prevalent. People are starting to finally start doing client-side MVC, and data binding, and live updates, and you wind up with a crisis, effectively, about, &quot;OK, where does this view state logic live? Where's my view model? Does it live on the server? Does it on a client? If I migrate it to the client, how do I make that work for all of my users?&quot; I think just fundamentally, if we accept that... There are going to be some people who can definitely write users off. They're lucky. It's Mr. Doob, right?</span></p>
      <p><span data-start="00:37:26.000" data-end="00:37:49.000" data-start-seconds="2246">Who cares if your OpenGL experiment doesn't work on an old browser? It's an experiment. But if you're shipping stuff to a broad constituency, then you have to have something on a server that's always going to help serve the basic content.</span></p>
      <p><span data-start="00:37:49.000" data-end="00:38:16.000" data-start-seconds="2269">Again, I think this argument bottoms out into very... I don't know how to put this. It's not well-thought through. Because the idea that you're going to have an HTML parser that works against most HTML in the first place, which is your fallback experience. What you're saying, &quot;Oh, well, it has to work on these browsers&quot;, well, those are browsers. You're not saying, &quot;It has to be readable in a text editor&quot;. You're not saying that to users. That's not what you're saying.</span></p>
      <p><span data-start="00:38:16.000" data-end="00:38:41.000" data-start-seconds="2296">There's some assumption of a level of software, some amount of CPU that you assume, some amount of network bandwidth that you can count on. And so we have to understand that these are always marginal arguments. They're not absolutes. And so it's worth saying, at some point, you need to pay attention to what the experience for your users is, but talking about browsers specifically may not be the right frame to get to the accessibility that you want.</span></p>
      <p><span data-start="00:38:41.000" data-end="00:39:03.000" data-start-seconds="2321">I like the hostage situation, because I found there is almost a Stockholm syndrome of interfaces in people. We had these terrible experiences for years and years in enterprise-level software that worked across all the browsers in a very bad way, with five steps for one drag-and-drop could do. And people are just defending those and saying, &quot;This is what software should be like, otherwise it's not professional.&quot;</span></p>
      <p><span data-start="00:39:03.000" data-end="00:39:19.000" data-start-seconds="2343">And I think Google Docs and the Google Apps suite are actually fighting all these old ideas. Do you think there's a way to work around that? Because I would love to see a Chromebox replace every single Windows machine in an enterprise environment out there, but it's not happening at the moment.</span></p>
      <p><span data-start="00:39:19.000" data-end="00:39:48.000" data-start-seconds="2359">Well, in terms of Chromeboxes, I think once enterprises come to understand the mind shift that has happened amongst vulnerability researchers and malware authors right now, I think a lot of those things start to sell themselves. Because they way people write exploits now is just fundamentally different to the way they were engineered a couple years ago. Zero day is zero day. You're probably owned if you're behind at all.</span></p>
      <p><span data-start="00:39:48.000" data-end="00:40:20.000" data-start-seconds="2388">And so the structural solution is to have software that's continuously updating, and has structural security built in. And Microsoft has got the message. But if you've got organizations that are tied into this idea, they're going to have to make a big shift anyway. But I think it's our job as web developers to treat the users of those organizations with respect, but not to pay them for hurting us. It's not impolite to point out that they've kept most of the users in the world from having a better experience.</span></p>
      <p><span data-start="00:40:20.000" data-end="00:40:36.000" data-start-seconds="2420">Because that's what's happening when you put in these polyfills and you do all this work to go do the care and feeding of old browsers. You're hurting your mainline users in most cases. You might say, &quot;Oh, it's just a little bit of script here and there.&quot; That's network latency, that's battery. It hurts. It hurts.</span></p>
      <p><span data-start="00:40:36.000" data-end="00:41:00.000" data-start-seconds="2436">Go load a blank web page. Just do it. Load a blank web page. How much should it cost? It's f-ing instant. Right? But we don't assume that that's what Utilitarian is right now. We assume that it includes a copy of jQuery and some reset CSS and all this junk. And how much of that do you need in the modern world? If you did the thought experiment and said, &quot;OK, everyone's got the latest version of the most modern browsers, how much of that baggage do you actually need?&quot;</span></p>
      <p><span data-start="00:41:00.000" data-end="00:41:18.000" data-start-seconds="2460">That's the sort of revolution that I think we're on the cusp of, and we just need to do a little bit to push that IE8 and soon IE9 percentage out. Android 2.2...whatever that is, we need to get in user spaces and give them the options that they've got.</span></p>
      <p><span data-start="00:41:18.000" data-end="00:41:29.000" data-start-seconds="2478">At worst, we don't update these polyfills. We don't use polyfills as polyfills. We just keep them there indefinitely rather than seeing them as a stopgap solution until we can do better.</span></p>
      <p><span data-start="00:41:29.000" data-end="00:41:57.000" data-start-seconds="2489">I think that's how all software is built, though. I think the idea of software maintenance is mostly a fictional theory. There are some pieces of software that see enough investment that they're going to continue to have new versions, but that's not maintenance. There's some software that can't die, so it's going to be put on life support. And there's some software that's going to never be touched again. And those I think are the three camps. I don't know that the idea of software maintenance exists.</span></p>
      <p><span data-start="00:41:57.000" data-end="00:42:22.000" data-start-seconds="2517">Good point with Android. I think the largest problem we have with Internet Explorer not being updated is because it was highly tied with the operating system, and if the operating system doesn't get updated, then it actually doesn't get improved. And we now have the same problem with the Android Stock browser. Chrome on Android is there, but it's still an opt-in, even for Jelly Bean, for a lot of providers. So that's the next round of that, isn't it?</span></p>
      <p><span data-start="00:42:22.000" data-end="00:42:45.000" data-start-seconds="2542">I think we're in a slightly better position. Yes. That's the position we're in. And this is where I think that we should be doing collective advocacy to those users and say, &quot;Hey, Firefox for Mobile exists. Chrome for Android is great. Please get a modern browser&quot;. It's not often users' faults that they're on bad browsers. But it's also not necessarily fair for us to assume that they've made an explicit choice.</span></p>
      <p><span data-start="00:42:45.000" data-end="00:42:57.000" data-start-seconds="2565">We have to provide them with the set of options that they've got, and to the extent that there are good options available, I think it's our collective responsibility to start presenting users with the options that they've got, because it's good for them, too, in most cases.</span></p>
      <p><span data-start="00:42:57.000" data-end="00:43:20.000" data-start-seconds="2577">My biggest issue is, as well, when you want to go to the bleeding edge, and you want to say, &quot;I want to use all the cool new stuff that you listed&quot;, we're blocked by hardware. That's why we do Firefox OS. That's why Chrome is out now and iOS as well. It's just unfair that browsers cannot access the hardware that it runs on nowadays.</span></p>
      <p><span data-start="00:43:20.000" data-end="00:43:53.000" data-start-seconds="2600">I have a hard time taking a side here, because if you look at it from the perspective of an end user, if you assume that there's competition, and competition makes products better, that's generally, I think, a reasonable way to think about the world, it's evolution in another name, then what you need to enable that is real competition. Real competition is, I think, desirable, as long as there's real competition, and everyone gets the benefits of the latest version.</span></p>
      <p><span data-start="00:43:53.000" data-end="00:44:17.000" data-start-seconds="2633">This is the key thing. If everyone is auto updating, and there's real competition at some level, then everyone's going to get a better experience. You can see failures where not everyone gets auto updates. We've seen that failure real large. We've seen places where there haven't been competition. Without real competition, you don't get the progress that might have otherwise been made.</span></p>
      <p><span data-start="00:44:17.000" data-end="00:44:33.000" data-start-seconds="2657">I don't know of another way to inspire people to do a thing than to say, &quot;Someone else did it better&quot;, and that's true for me. To get me to do a good job, you should say, &quot;Someone else did a better job than you did&quot;. That's probably how you're going to make me get out of bed in the morning.</span></p>
      <p><span data-start="00:44:33.000" data-end="00:44:51.000" data-start-seconds="2673">It works. It absolutely works, and it's the best thing we know to make large scale progress. You need real competitions, and maybe that's at the device level, right as devices become disposable. I don't know. I honestly don't know, and I can't speculate, but I think it's too early to tell what the end game there is.</span></p>
      <p><span data-start="00:44:51.000" data-end="00:44:57.000" data-start-seconds="2691">Interesting question here: &quot;Isn't auto updating also attacks? Browsers have bugs. New browsers bring new bugs.&quot;</span></p>
      <p><span data-start="00:44:57.000" data-end="00:45:21.000" data-start-seconds="2697">Sure, but let's talk about the risk window. I used to be a security engineer once upon a time, and the way to think about risk is not as a bad thing could happen. You live in the real world. Bad things happen every day, you're just comfortable with some of them. You've learned to understand the potential magnitude and the potential frequency of certain things that could go wrong.</span></p>
      <p><span data-start="00:45:21.000" data-end="00:45:39.000" data-start-seconds="2721">New things happening is scary because you don't know how bad they could be, and you don't know how long they'll be there, and if you look at the history of the web world, you feel like you might be left at the alter at any time. &quot;Oh, Microsoft might stop developing a browser. Now everyone's hosed,&quot; or, &quot;Google might drop Chrome.&quot;</span></p>
      <p><span data-start="00:45:39.000" data-end="00:46:02.000" data-start-seconds="2739">Anything could in theory happen, and it could be existentially bad, but focusing on that without saying, &quot;All right. Let's say there's a bug, and it's a common bug, and it hurts live websites. What is a browser vendor incented to do? What are they likely going to respond with?&quot; If the answer is, &quot;There's a popular bug in their bug tracker, and they can roll out a fix in less than a week...&quot; We've done that, by the way.</span></p>
      <p><span data-start="00:46:02.000" data-end="00:46:19.000" data-start-seconds="2762">There have been cases in Chrome where we have rolled out fixed for websites. Where they had compatibility issues with us, we changed Chrome and were able to get it out to users faster than they were able to fix their website and we rolled it back, because we're able to distribute software that fast.</span></p>
      <p><span data-start="00:46:19.000" data-end="00:46:47.000" data-start-seconds="2779">If there's a bug, what's the window of vulnerability, effectively? What's the window of risk? If it's a rolling software world, then that risk goes away, because we can fix it as fast as we break it. I'm not saying that we want to break things, and if you ever go download a browser from a source repository, Firefox, Chrome, whatever, what you'll realize is that most of that many gigabyte download is tests, and those are tests that are born from hard experience.They're not just theoretically like, &quot;Oh, your grammar is correct&quot;, or, &quot;Oh yes, you parsed this thing&quot;. It's like these [indecipherable 46: </span></p>
      <p><span data-start="00:46:47.000" data-end="00:46:59.000" data-start-seconds="2807">53] real world things combined to blow up a scenario. We want to make sure that never happens again. It's mostly regression tests, end-to-end regression tests.</span></p>
      <p><span data-start="00:46:59.000" data-end="00:47:19.000" data-start-seconds="2819">That's how we build browsers, and you should expect us to continue to do that, so I think the premise of the question is what I would have experienced, and what I might have assumed might go wrong, before we had auto updates, which make progress go faster, and before I understood how browsers are developed, which is that it's mostly tests.</span></p>
      <p><span data-start="00:47:19.000" data-end="00:47:37.000" data-start-seconds="2839">It's being scared of the new thing, and being scared to try to shoehorn it into practices that review software every year, or every three months. That is really problematic, but at the same time, when you see how security and attacks changes, it has to change. It really has.</span></p>
      <p><span data-start="00:47:37.000" data-end="00:47:54.000" data-start-seconds="2857">I think the thing that really kills it for me is that if you look back on our recent history, our last decade, we've rolled out new stuff, and we haven't gotten those gains. We can't use most of that stuff. The only stuff that we can use are in certain scenarios, where it's backwards compatible, and you don't break the experience if you're in the fallback.</span></p>
      <p><span data-start="00:47:54.000" data-end="00:48:13.000" data-start-seconds="2874">New CSS features can only be used in certain ways. Adding new core semantics to the platform that don't have a fallback, that don't have some sort of a Polyfill, wow, that sounds like scary talk, but it doesn't necessarily have to be that way. We can't even take advantage of the stuff that we know we've got, let alone the new stuff.</span></p>
      <p><span data-start="00:48:13.000" data-end="00:48:40.000" data-start-seconds="2893">I think the value proposition is better than it appears to be. There's a lot of new stuff just sitting there, waiting for us to take advantage of it at broad scale, and the risks are much lower than they appear to be. Some very large percentage of the world, probably more than 50 percent of the world's web users, are on Firefox or Chrome, or Opera, and they're getting auto updates without being asked, and the world still goes on.</span></p>
      <p><span data-start="00:48:40.000" data-end="00:48:50.000" data-start-seconds="2920">The sun still rises. Software still sucks. Life is life. We haven't broken the world. We're there. We can do this.</span></p>
      <p><span data-start="00:48:50.000" data-end="00:48:52.000" data-start-seconds="2930">With that, thank you very much. [applause]</span></p>
     </div>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2012/sessions/the-web-platform-and-the-process-of-progress-alex-russell.md" id="comment">
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
