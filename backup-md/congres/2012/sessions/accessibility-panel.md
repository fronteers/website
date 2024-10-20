<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>Accessibility panel with Antoine Hegeman, Bor Verkroost, Bram Duvigneau &amp; Chris Heilmann · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p750">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>Accessibility panel with Antoine Hegeman, Bor Verkroost, Bram Duvigneau &amp; Chris Heilmann</h2>
     <video width="480" height="270" controls>
      <source src="/_downloads/2012/accessibility-panel.webm" type="video/webm">
      <source src="/_downloads/2012/accessibility-panel.mp4" type="video/mp4">
      <track src="/congres/2012/sessions/accessibility-panel.vtt" default>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2012/accessibility-panel.webm">download the video</a> (or the alternatives: <a href="/_downloads/2012/accessibility-panel.mp4">1</a>) and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="https://vimeo.com/52882798">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2012/accessibility-panel.webm">Download video</a> (WebM, 110MB)</li>
      <li><a href="/_downloads/2012/accessibility-panel.mp3">Download audio</a> (MP3, 48MB)</li>
     </ul>
     <h3>Transcript</h3>
     <div class="transcript">
      <p><span data-start="00:00:06.000" data-end="00:00:20.000" data-start-seconds="6">This is the moment where in the conference, I'm nervous for the first time because we have a lot of moving parts onstage that might go wrong. I've been working in accessibility for a long time. I have yet to find the first presentation where the screen reader doesn't crash.</span></p>
      <p><span data-start="00:00:20.000" data-end="00:00:43.000" data-start-seconds="20">Which is actually only on stage. It must be some weird karma thing, because day-to-day work with them works well. Fronteers put together an accessibility panel that hasn't been covered in the last years a lot. The problem that I always have with accessibility presentations is that there are always people who are developers, who are telling us what people with disabilities need.</span></p>
      <p><span data-start="00:00:43.000" data-end="00:01:03.000" data-start-seconds="43">Why do we play telephone if we have very capable people with different disabilities telling us what their issues are when they use the web, and how they use the web? Here and now it's going to start with the fun of pronouncing names. We've got Bram Duvigneau, Antoine Hegeman and Bor Verkroost.</span></p>
      <p><span data-start="00:01:03.000" data-end="00:01:04.000" data-start-seconds="63">Correct. [laughter] [applause] </span></p>
      <p><span data-start="00:01:10.000" data-end="00:01:19.000" data-start-seconds="70">Why don't we go through, starting from left to right. What are you? What do you do and how do you use the web normally?</span></p>
      <p><span data-start="00:01:19.000" data-end="00:01:26.000" data-start-seconds="79">My name is, as you said, Bor Verkroost. [Sound] That's really creep.</span></p>
      <p><span data-start="00:01:26.000" data-end="00:01:28.000" data-start-seconds="86">Show-off.</span></p>
      <p><span data-start="00:01:28.000" data-end="00:01:34.000" data-start-seconds="88">Don't mention me on Twitter, it will go over the speakers. [laughter]</span></p>
      <p><span data-start="00:01:34.000" data-end="00:01:57.000" data-start-seconds="94">Now I started in 1999 with Games Hotline. I've been basically involved in both the Internet and the game technically. All of the things about accessibility. In 2004, I couldn't really keep up with the hotline because of my degrading condition.</span></p>
      <p><span data-start="00:01:57.000" data-end="00:02:19.000" data-start-seconds="117">Therefore, I started up a more consultancy based company. Focusing, amongst other things, especially on game accessibility. I've done several things about it. I've done that in close collaboration with GameAccessibilityGuidelines.com.</span></p>
      <p><span data-start="00:02:19.000" data-end="00:02:41.000" data-start-seconds="139">How can games be made in a way that a broad audience can play them, and even some niche markets, exactly the same way as we are doing here today, by looking at what accessibility issues lie before us and what we can relatively easily tackle.</span></p>
      <p><span data-start="00:02:41.000" data-end="00:02:55.000" data-start-seconds="161">Did you find in terms of feedback, making amends to make things more accessible made it easier for the whole users as well? Because that's what we always claimed is a great win, if you put accessibility in.</span></p>
      <p><span data-start="00:02:55.000" data-end="00:03:16.000" data-start-seconds="175">True, true. I think one of the most prominent examples of that would be the thing that I've benefited greatly from. Most people here, with or without disabilities, have benefited greatly from. That's the fact that websites have started to slowly change to become less scrollable.</span></p>
      <p><span data-start="00:03:16.000" data-end="00:03:36.000" data-start-seconds="196">The least scrolling for me is better, because I need to be there in just a few clicks of the button. Not by endlessly pushing two buttons or having to hold one button and then scroll down the other one. That's a general accessibility issue that also greatly benefits my group.</span></p>
      <p><span data-start="00:03:36.000" data-end="00:03:44.000" data-start-seconds="216">It's also an annoyance issue. I laugh when old-school newspaper sites cut up an article into five pages and had forward and backward links.</span></p>
      <p><span data-start="00:03:44.000" data-end="00:03:46.000" data-start-seconds="224">Exactly.</span></p>
      <p><span data-start="00:03:46.000" data-end="00:03:49.000" data-start-seconds="226">I always use the print version then, because it's on one screen.</span></p>
      <p><span data-start="00:03:49.000" data-end="00:03:52.000" data-start-seconds="229">Exactly. It's the same thing, I suppose. Yeah.</span></p>
      <p><span data-start="00:03:52.000" data-end="00:03:59.000" data-start-seconds="232">Cool. So, our second contestant, how do you use the web and what do you do?</span></p>
      <p><span data-start="00:03:59.000" data-end="00:04:29.000" data-start-seconds="239">Well, I am Duvigneau. I started out a few years ago as a backend web developer. After that, I did a year of developing, specifically solutions for the blind. Not really web related, but more in company settings where someone who is blind is having a job or getting a job, and to use the internal company systems.</span></p>
      <p><span data-start="00:04:29.000" data-end="00:05:11.000" data-start-seconds="269">I had to go there, and somehow hack around all the issues that rise up. These days, I am a freelance developer. I do backend web development. If there is anything to do in the accessibility field, where my expertise can be used as a blind user and a blind developer. I do that kind of project. I really like to combine my point of view as an end-user and my advice from a developer perspective, to make things better accessible.</span></p>
      <p><span data-start="00:05:11.000" data-end="00:05:28.000" data-start-seconds="311">I was lucky enough to work next to a PHP developer who was blind as well, for six years. I saw that on the first go. But a lot of people are just like &quot;How can somebody program blind?&quot; What is the trick that you're using, mostly? How do you see what you're typing, so to say?</span></p>
      <p><span data-start="00:05:28.000" data-end="00:05:51.000" data-start-seconds="328">Well, the two basic things of output are speech and Braille. Text the speech, that's a technique that converts text into spoken output. And a Braille display, that's a device at the table. My laptop gives Braille output.</span></p>
      <p><span data-start="00:05:51.000" data-end="00:06:07.000" data-start-seconds="351">This one contains 40 cells for the characters, so that I can put 40 characters of text on the display. And this is just controlled by software, and the software is called a screen reader.</span></p>
      <p><span data-start="00:06:07.000" data-end="00:06:39.000" data-start-seconds="367">Whenever I want to read more than 40 characters, I need to scroll using this device. Speech is usually faster for me to get information, because the normal speech rate, there is a slider called speech rate on the Mac that goes from 0 to 100, and it's normally at 80 or 85. Yeah, that's quite fast and you can really easily skim around and listen what's there.</span></p>
      <p><span data-start="00:06:39.000" data-end="00:06:54.000" data-start-seconds="399">But if you really want to read code and see where all the quotes are, and all the little annoying semicolons and all those things you have to put in there, then you just read it in Braille.</span></p>
      <p><span data-start="00:06:54.000" data-end="00:06:59.000" data-start-seconds="414">You normally go for the speech so you don't write 40 lines of code and then annoy other developers who have to work with your code?</span> <span data-start="00:06:59.000" data-end="00:07:01.000" data-start-seconds="419">No.</span></p>
      <p><span data-start="00:07:01.000" data-end="00:07:21.000" data-start-seconds="421">Because that's, is it 80 characters or 60 or 100? How do we do the style guide? It's pretty impressive when, we talked about this particularly earlier, my colleague was always complaining about interfaces that didn't work for him. That was in our company, which is a large company that is purple and has a &quot;Y&quot; in it.</span></p>
      <p><span data-start="00:07:21.000" data-end="00:07:34.000" data-start-seconds="441">When he complained to people it was not, there was always a back and forth. Instead, he actually wrote little GreaseMonkey scripts and sent them to people and said, &quot;Look at the side with GreaseMonkey script on, that's how I could use the website.&quot;</span></p>
      <p><span data-start="00:07:34.000" data-end="00:07:49.000" data-start-seconds="454">That actually made people more responsive, and all of a sudden realizing that it's not that much work. Because people are unhappy to change code that is existing, or interfaces that are existing, but if you show them that is not much work, it's much easier.</span></p>
      <p><span data-start="00:07:49.000" data-end="00:08:01.000" data-start-seconds="469">Do you find that there is a positive attitude towards when you talk to people, who say like &quot;I'm a blind user but I'm also a developer.&quot; Can you talk better, on the same level?</span></p>
      <p><span data-start="00:08:01.000" data-end="00:08:36.000" data-start-seconds="481">Yes. One of my recent projects was a large company here in the Netherlands that wanted to user-test with blind people, but after all they preferred to test with me, because I could not only say what wasn't working, but also I probably would be easily able to fix it. That saved lots of work and time, because you're not just getting a complaint, but also, at least part of the solution.</span></p>
      <p><span data-start="00:08:36.000" data-end="00:08:51.000" data-start-seconds="516">When I look at a website, and I just see, &quot;Oh, this is something clickable, but it's not a link or a button&quot;, well, it's easily, it should be easily fixable by a company.</span></p>
      <p><span data-start="00:08:51.000" data-end="00:08:58.000" data-start-seconds="531">Antoine, last but not least. What do you do? How do you use the Internet?</span></p>
      <p><span data-start="00:08:58.000" data-end="00:09:01.000" data-start-seconds="538">I am starting this week as a teacher.</span></p>
      <p><span data-start="00:09:01.000" data-end="00:09:04.000" data-start-seconds="541">Nice.</span></p>
      <p><span data-start="00:09:04.000" data-end="00:09:05.000" data-start-seconds="544">I teach kids HTML, CSS.</span></p>
      <p><span data-start="00:09:05.000" data-end="00:09:07.000" data-start-seconds="545">Yes.</span></p>
      <p><span data-start="00:09:07.000" data-end="00:09:09.000" data-start-seconds="547">Web usability design.</span></p>
      <p><span data-start="00:09:09.000" data-end="00:09:13.000" data-start-seconds="549">Don't tell them the stuff that Mathias showed us. [laughter]</span></p>
      <p><span data-start="00:09:13.000" data-end="00:09:17.000" data-start-seconds="553">No. Well, maybe. In their third year or something.</span></p>
      <p><span data-start="00:09:17.000" data-end="00:09:20.000" data-start-seconds="557">Yeah.</span></p>
      <p><span data-start="00:09:20.000" data-end="00:09:26.000" data-start-seconds="560">I also teach some Dreamweaver. I'm sorry. Photoshop.</span></p>
      <p><span data-start="00:09:26.000" data-end="00:09:29.000" data-start-seconds="566">We have to deal with all kinds of disabilities on this planet. [laughter] [applause] </span></p>
      <p><span data-start="00:09:36.000" data-end="00:09:53.000" data-start-seconds="576">So, this is pretty cool. We have this web maker project as well, where we teach basic web literacy and HTML. Do you find interactive editors that show immediate results are much easier in this, or do you still go through &quot;Here's your editor, save it, open it in the browser&quot;?</span></p>
      <p><span data-start="00:09:53.000" data-end="00:09:57.000" data-start-seconds="593">I still do. I have been following brackets, right now.</span></p>
      <p><span data-start="00:09:57.000" data-end="00:09:59.000" data-start-seconds="597">Yeah.</span></p>
      <p><span data-start="00:09:59.000" data-end="00:10:16.000" data-start-seconds="599">And I kind of love the fact that it's live updating. So, I would really like to see all of them go in that direction, but I still have that work flow. Doing something, saving, and refreshing my browser and going &quot;Nope.&quot;</span></p>
      <p><span data-start="00:10:16.000" data-end="00:10:30.000" data-start-seconds="616">Cool. As I understand it, you have a few demos for us to show when you get online, where you get stuck, where our most problems are out there. Shall we just dive into that? Do you want to start? Can we start this computer?</span></p>
      <p><span data-start="00:10:30.000" data-end="00:10:58.000" data-start-seconds="630">Well it's just mainly a few examples I wanted to show you, because for me, accessibility means of course, I spent a lot of time online. Both doing all the mail stuff and keeping up with my contacts, social networking, of course. What I used to do with the game hotline was to look up a lot of information that I got a lot of questions about.</span></p>
      <p><span data-start="00:10:58.000" data-end="00:11:33.000" data-start-seconds="658">Like, &quot;What's the sixth key in the Zelda seventh dungeon?&quot;, which I sometimes had to look up even though I played virtually all games myself. But the thing is with the accessibility, it's mostly small and little things. For starters, and you cannot really see that out there, but for me, it's easier to, this laptop has a touchscreen. A touchpad, sorry. [fast screenreader output]</span></p>
      <p><span data-start="00:11:33.000" data-end="00:11:35.000" data-start-seconds="693">That's people tweeting his name. Really.</span></p>
      <p><span data-start="00:11:35.000" data-end="00:11:39.000" data-start-seconds="695">That was a time-out, that I had to enter my password, otherwise it would go.</span></p>
      <p><span data-start="00:11:39.000" data-end="00:12:05.000" data-start-seconds="699">Oh, otherwise the system will go crazy. All right. Well, no, I use a touchpad on this laptop. But preferably, I use a mouse. Because one of the accessibility issues I have, because of my many hand surgeries, and there are now a total of 60, my hands are often totally bandaged. Now I have a part out of the bandage, but usually it can be damaged as well.</span></p>
      <p><span data-start="00:12:05.000" data-end="00:12:29.000" data-start-seconds="725">In which case, all things like touchpads, iPads, everything touch related won't work. I even have to switch on my PlayStation three using my elbow. That's one of the things that causes me A, to use a mouse, and B, to never buy an iPad, which really I would like to have because it has a lot of nice features.</span></p>
      <p><span data-start="00:12:29.000" data-end="00:13:02.000" data-start-seconds="749">For websites, it's like I said, scrolling for me is a real issue. I used to use a control F key combination very often just to look up the word, because I know where I want to look, and then it easily scroll down itself. But I wanted to show you two examples. This is a well-known Dutch youth network which has a really busy website.</span></p>
      <p><span data-start="00:13:02.000" data-end="00:13:04.000" data-start-seconds="782">It sometimes a bit...</span></p>
      <p><span data-start="00:13:04.000" data-end="00:13:29.000" data-start-seconds="784">Sorry, again sometimes a bit too cramped up. What you can see, it has incredibly many options that are pretty close together. For me now, that's not a problem, but in days that I am lesser physically capable, I have trouble focusing on the exact same thing.</span></p>
      <p><span data-start="00:13:29.000" data-end="00:14:00.000" data-start-seconds="809">What they did do however, and I will show you, once you get a little bit outside the drop box, as you can see, it doesn't immediately disappear. There are a lot of websites out there that once you slightly go off the track, it immediately disappears, having you to scroll back up again and redo the whole thing again.</span></p>
      <p><span data-start="00:14:00.000" data-end="00:14:33.000" data-start-seconds="840">The other example I wanted to show you. As you can see, it's &quot;Al Jazeera.&quot; Oh, I'm sorry. It's more widened up. It's wider. It has a space in between the headlines. And it's all pretty much focused in one streak. In which case, when you click on one of the items, of course you get another selection.</span></p>
      <p><span data-start="00:14:33.000" data-end="00:14:46.000" data-start-seconds="873">But it doesn't have the endless scrolling-out and scrolling-in kinds of menus, which is, for me, a main thing which saves me an incredible amount of time when I'm working.</span></p>
      <p><span data-start="00:14:46.000" data-end="00:14:52.000" data-start-seconds="886">So that's mainly the focus of my accessibility. And the thing is....</span></p>
      <p><span data-start="00:14:52.000" data-end="00:15:23.000" data-start-seconds="892">I was talking with Antoine here a little earlier. A lot of the things you learn to work your way around, and you can use those websites even if they're not that handy. But once I started to really pay attention to it, I found that websites who have a more broad stream and who are not cramped up have a lot more appeal to me.</span></p>
      <p><span data-start="00:15:23.000" data-end="00:15:38.000" data-start-seconds="923">Of course, also visually, but also in accessibility terms. And I think that's basically one of the important things I wanted to say here today, because that for me, it just takes me a hell of a long time.</span></p>
      <p><span data-start="00:15:38.000" data-end="00:15:41.000" data-start-seconds="938">It's basic usability.</span></p>
      <p><span data-start="00:15:41.000" data-end="00:15:42.000" data-start-seconds="941">It is.</span></p>
      <p><span data-start="00:15:42.000" data-end="00:15:46.000" data-start-seconds="942">When we're on a train, or something, or we move our hands around, we don't want to lose the menu as well.</span></p>
      <p><span data-start="00:15:46.000" data-end="00:15:48.000" data-start-seconds="946">Exactly.</span></p>
      <p><span data-start="00:15:48.000" data-end="00:16:03.000" data-start-seconds="948">This has been the best practice for years, but I keep seeing it badly implemented, because people use menu systems that they don't know, or they cannot actually change. It's good to see that. What was fascinating me about when people told me that &quot;You're going to be on this&quot;, and I have to plug this, because I'm fascinated by it.</span></p>
      <p><span data-start="00:16:03.000" data-end="00:16:13.000" data-start-seconds="963">Your condition, I have a colleague that has exactly the same condition. The difference is that that person works on the developer tools in Firefox and is a JavaScript developer.</span></p>
      <p><span data-start="00:16:13.000" data-end="00:16:30.000" data-start-seconds="973">He writes most of the developer tool stuff that you see and actually knows firsthand that there should be bigger spaces. It's just incredible to see that, because as developers, we always feel like we've got to do something for people. But you can do things if you're just empowered.</span></p>
      <p><span data-start="00:16:30.000" data-end="00:17:02.000" data-start-seconds="990">When I pick up a new laptop, or a new computer, I always look at the keyboard. If the keys are a little bit apart, you have keys you have to press in very deep and keys that are pretty much layered on top of the keyboard. You only have to use a very light push and you don't have to push it all away inward. Because, as you can see, I have my fingers folded in a way, so I can really stretch one finger to push in a button.</span></p>
      <p><span data-start="00:17:02.000" data-end="00:17:27.000" data-start-seconds="1022">As you said, one of your colleagues has the same condition. It might be worthwhile to tell in short, what it is. It's a very rare genetic disorder called EB, which basically allows, or doesn't allow the skin to build up its layers as it should. It also makes that in my case, not in all cases but in my case at least, it makes the fingers go into a fist.</span></p>
      <p><span data-start="00:17:27.000" data-end="00:17:37.000" data-start-seconds="1047">I have most of my fingers still, and I can feel them as fingers the same as you, even make the same gestures, but you don't see them.</span></p>
      <p><span data-start="00:17:37.000" data-end="00:17:41.000" data-start-seconds="1057">That's handy. How many people have you flipped up already?</span></p>
      <p><span data-start="00:17:41.000" data-end="00:17:46.000" data-start-seconds="1061">They're folded together, pretty much.</span></p>
      <p><span data-start="00:17:46.000" data-end="00:17:49.000" data-start-seconds="1066">You can make rude gestures without people realizing it.</span></p>
      <p><span data-start="00:17:49.000" data-end="00:17:52.000" data-start-seconds="1069">Oh, a lot, I suppose.</span></p>
      <p><span data-start="00:17:52.000" data-end="00:18:03.000" data-start-seconds="1072">One question here is, does zooming help? Can you zoom into a website and then have better space to get the menus out? But then I guess the problem then is that you can't read as many menu items.</span></p>
      <p><span data-start="00:18:03.000" data-end="00:18:23.000" data-start-seconds="1083">Exactly. Exactly. I want to keep the general view. I am a quick searcher, so I need to keep up the pace. If I have to zoom in every time, then I'll lose time zooming and I don't gain as much on the accessibility itself.</span></p>
      <p><span data-start="00:18:23.000" data-end="00:18:36.000" data-start-seconds="1103">It's very interesting, because seeing people say the touch interfaces are so much more accessible to children and to the elderly. That people find it so much easier to touch a screen than they understand that horrible keyboard thing. And sometimes it just doesn't really mean the same thing.</span></p>
      <p><span data-start="00:18:36.000" data-end="00:18:50.000" data-start-seconds="1116">That in general, has always been my problem with accessibility panels. We just talked about blind users and said that is accessibility. And sometimes doing something for one disability, to help it, is actually doing worse to others.</span></p>
      <p><span data-start="00:18:50.000" data-end="00:18:51.000" data-start-seconds="1130">Exactly, yeah.</span></p>
      <p><span data-start="00:18:51.000" data-end="00:18:55.000" data-start-seconds="1131">It's not an exact black and white science, there's lots of shades of gray there.</span></p>
      <p><span data-start="00:18:55.000" data-end="00:18:56.000" data-start-seconds="1135">True.</span></p>
      <p><span data-start="00:18:56.000" data-end="00:19:24.000" data-start-seconds="1136">Thank you very much. Talking of shades of gray, how about we take a look at what problems screen reader users have, and what we can help you with? Where you actually fix other peoples problems, because they don't listen to you if you email them? Can we switch to the second computer please? You're live. It might be good to tell you.</span></p>
      <p><span data-start="00:19:24.000" data-end="00:19:37.000" data-start-seconds="1164">OK. So first of all, to give you an impression of what I'm hearing usually when I'm working, it sounds a bit like this. [fast screenreader output]</span></p>
      <p><span data-start="00:19:37.000" data-end="00:19:42.000" data-start-seconds="1177">Who could make a word out of that?</span> <span data-start="00:19:42.000" data-end="00:19:44.000" data-start-seconds="1182">It sounded Dutch to me.</span></p>
      <p><span data-start="00:19:44.000" data-end="00:19:49.000" data-start-seconds="1184">Well, it was English. [laughter]</span></p>
      <p><span data-start="00:19:49.000" data-end="00:19:56.000" data-start-seconds="1189">We saw an English talk with the same speed earlier. [laughter]</span></p>
      <p><span data-start="00:19:56.000" data-end="00:20:05.000" data-start-seconds="1196">You should get used to it by now, let's slow it down a little bit. It's now on 80 percent. Let's make it 50 percent.</span></p>
      <p><span data-start="00:20:05.000" data-end="00:20:11.000" data-start-seconds="1205">45 percent, 50 percent, 45 percent.</span></p>
      <p><span data-start="00:20:11.000" data-end="00:20:15.000" data-start-seconds="1211">45. When I do the same thing at the higher speed.</span></p>
      <p><span data-start="00:20:15.000" data-end="00:20:23.000" data-start-seconds="1215">Find. Finder. Desktop, deskop, Safari, about, blank window, HTML content.</span></p>
      <p><span data-start="00:20:23.000" data-end="00:20:24.000" data-start-seconds="1223">That's somewhat more understandable, I guess.</span></p>
      <p><span data-start="00:20:24.000" data-end="00:20:26.000" data-start-seconds="1224">Yeah.</span></p>
      <p><span data-start="00:20:26.000" data-end="00:20:47.000" data-start-seconds="1226">Well, to give a good example of accessibility or what describes it well to me is Google search, I'm explicitly mentioning Google search because, well, some of the other Google products are not really that good.</span></p>
      <p><span data-start="00:20:47.000" data-end="00:20:50.000" data-start-seconds="1247">Google search. Search Google.</span></p>
      <p><span data-start="00:20:50.000" data-end="00:21:03.000" data-start-seconds="1250">I activate the search bar in Safari. It's one input bar by now. Let's Google for Fronteers.</span></p>
      <p><span data-start="00:21:03.000" data-end="00:21:06.000" data-start-seconds="1263">Unhighlighted. Selection deleted.</span></p>
      <p><span data-start="00:21:06.000" data-end="00:21:09.000" data-start-seconds="1266">No autocompletion, please.</span></p>
      <p><span data-start="00:21:09.000" data-end="00:21:16.000" data-start-seconds="1269">Fronteers highlighted.</span></p>
      <p><span data-start="00:21:16.000" data-end="00:21:22.000" data-start-seconds="1276">Well, there we are. Google search. I could start reading this page, it goes like this.</span></p>
      <p><span data-start="00:21:22.000" data-end="00:21:30.000" data-start-seconds="1282">List 11 items.</span></p>
      <p><span data-start="00:21:30.000" data-end="00:21:31.000" data-start-seconds="1290">Oh, there is an iPhone going off somewhere to the right over there. Please turn it off.</span></p>
      <p><span data-start="00:21:31.000" data-end="00:21:35.000" data-start-seconds="1291">Plus one. Search, images, maps, Play, YouTube, news, Gmail, drive.</span></p>
      <p><span data-start="00:21:35.000" data-end="00:21:54.000" data-start-seconds="1295">They'll beep. That's the indication of a link. You can choose if it says link or just beeps. I prefer little beep. If I had to reach my search results by just sitting back and waiting for this.</span></p>
      <p><span data-start="00:21:54.000" data-end="00:21:59.000" data-start-seconds="1314">Calendar, more, web, Google search button, list four items.</span></p>
      <p><span data-start="00:21:59.000" data-end="00:22:17.000" data-start-seconds="1319">That might take some time. Shut up. There is an easier way, and that's because Google implemented headings in this page. So I'm now going to use a command to jump to the next heading, like this.</span></p>
      <p><span data-start="00:22:17.000" data-end="00:22:29.000" data-start-seconds="1337">Heading level two, search options, clickable, heading level two, search results, heading level three, visit Fronteers vakvereniging voor front-end developers.</span></p>
      <p><span data-start="00:22:29.000" data-end="00:22:33.000" data-start-seconds="1349">Yeah, that's some Dutch in an English speech synthesizer. That's always a good combination.</span></p>
      <p><span data-start="00:22:33.000" data-end="00:22:44.000" data-start-seconds="1353">Which is why people should always put the lang attributes in, otherwise you will get these problems. If it had a language attribute on that result, it wouldn't switch to the Dutch voice, right?</span></p>
      <p><span data-start="00:22:44.000" data-end="00:22:45.000" data-start-seconds="1364">Not on Mac. Still not on Mac. On iPhone, it does.</span></p>
      <p><span data-start="00:22:45.000" data-end="00:22:47.000" data-start-seconds="1365">Oh, dear lord. [laughter]</span></p>
      <p><span data-start="00:22:47.000" data-end="00:22:48.000" data-start-seconds="1367">I'm sorry.</span></p>
      <p><span data-start="00:22:48.000" data-end="00:22:50.000" data-start-seconds="1368">Macs.</span></p>
      <p><span data-start="00:22:50.000" data-end="00:23:00.000" data-start-seconds="1370">Heading. level three, visit Fronteers 2012.</span></p>
      <p><span data-start="00:23:00.000" data-end="00:23:12.000" data-start-seconds="1380">I can go from heading to heading and see what my results are. And if I want to see the snippet for the result, I just navigate from the heading.</span></p>
      <p><span data-start="00:23:12.000" data-end="00:23:21.000" data-start-seconds="1392">Entering main results details button. Fronteers 2012 will take place on Thursday fourth and Friday fifth. Heading, level three, vacature bank</span></p>
      <p><span data-start="00:23:21.000" data-end="00:23:23.000" data-start-seconds="1401">That's a very short snippet.</span></p>
      <p><span data-start="00:23:23.000" data-end="00:23:27.000" data-start-seconds="1403">Heading, level three, visit Fronteers 2012.</span></p>
      <p><span data-start="00:23:27.000" data-end="00:23:34.000" data-start-seconds="1407">I could also make a list of all these headings to easily jump to one.</span></p>
      <p><span data-start="00:23:34.000" data-end="00:23:45.000" data-start-seconds="1414">Links, 68 items. Landmarks, headings, 15 items. 2, 2, search results, 3, Fronteers, 3, Fronteers 2012, 3, 3, Fronteers 2011.</span></p>
      <p><span data-start="00:23:45.000" data-end="00:23:52.000" data-start-seconds="1425">You see the level of the heading and the title. And what's interesting is there is this.</span></p>
      <p><span data-start="00:23:52.000" data-end="00:23:53.000" data-start-seconds="1432">2, 2.</span></p>
      <p><span data-start="00:23:53.000" data-end="00:24:01.000" data-start-seconds="1433">Heading level 2, search options, and search results. And all results are on level 3, as it should be.</span></p>
      <p><span data-start="00:24:01.000" data-end="00:24:02.000" data-start-seconds="1441">2, 2.</span></p>
      <p><span data-start="00:24:02.000" data-end="00:24:09.000" data-start-seconds="1442">One interesting aspect is that there is no heading level one here, which you would expect.</span></p>
      <p><span data-start="00:24:09.000" data-end="00:24:13.000" data-start-seconds="1449">It's bad for search engine optimization. Weird, isn't it? [laughter]</span></p>
      <p><span data-start="00:24:13.000" data-end="00:24:17.000" data-start-seconds="1453">I never Google for Google, actually. I don't know.</span></p>
      <p><span data-start="00:24:17.000" data-end="00:24:19.000" data-start-seconds="1457">Heading.</span></p>
      <p><span data-start="00:24:19.000" data-end="00:24:29.000" data-start-seconds="1459">But anyway, so that's how you can easily jump to a certain area of the page.</span></p>
      <p><span data-start="00:24:29.000" data-end="00:24:30.000" data-start-seconds="1469">So this is voiceover now, isn't it?</span> <span data-start="00:24:30.000" data-end="00:24:58.000" data-start-seconds="1470">This is voiceover, yes. That's the screen reader built into Apple products. It's a totally different code base, usually. It's built into iPhone, iPad, iPod, Mac. That's quite unique because you can, I could get one of the other Macs here, and I could work with this. That's a great concept.</span></p>
      <p><span data-start="00:24:58.000" data-end="00:25:00.000" data-start-seconds="1498">And it comes for free with the operating system?</span> <span data-start="00:25:00.000" data-end="00:25:01.000" data-start-seconds="1500">Yes.</span></p>
      <p><span data-start="00:25:01.000" data-end="00:25:02.000" data-start-seconds="1501">Which is not too expensive either.</span></p>
      <p><span data-start="00:25:02.000" data-end="00:25:04.000" data-start-seconds="1502">That's true.</span></p>
      <p><span data-start="00:25:04.000" data-end="00:25:08.000" data-start-seconds="1504">More expensive operating systems could come out with screen readers to as well, if they wanted, right?</span> <span data-start="00:25:08.000" data-end="00:25:19.000" data-start-seconds="1508">I guess. Yeah, it's built-in technology. That's quite good. That's the way to go.</span></p>
      <p><span data-start="00:25:19.000" data-end="00:25:26.000" data-start-seconds="1519">So what are your biggest stumbling blocks? What are the things that are easy to fix, but people get wrong all the time?</span> <span data-start="00:25:26.000" data-end="00:26:04.000" data-start-seconds="1526">Well, quite a lot, actually. Things that really get wrong, well the really annoying thing these days, I think, is the web application stuff. Why? Because you have a website, and you're going to, you're expecting some kind of interaction. If I have an email application, and am using a mouse for example, I expect to double click on the email message to open it.</span></p>
      <p><span data-start="00:26:04.000" data-end="00:26:24.000" data-start-seconds="1564">If it's a website and the subject of the email message is a link, I expect to single click it. But if you are building an email application and using web technology, in all your designer wisdom, you say &quot;Now we have to double-click on the message to open it.&quot;</span></p>
      <p><span data-start="00:26:24.000" data-end="00:26:42.000" data-start-seconds="1584">And that's where the confusion starts, because if you don't properly tag your content as being in an application, what all of the widgets and things in your application are. It looks like some kind of malfunctioning website, usually.</span></p>
      <p><span data-start="00:26:42.000" data-end="00:27:01.000" data-start-seconds="1602">It's the same with sighted users, because an app normally has keyboard navigation with the cursor keys. A website doesn't. Basically, we don't expect our websites ago left and right and go to the next page and the last page, because that's not how the web works. But in an application, we expect this kind of pagination.</span></p>
      <p><span data-start="00:27:01.000" data-end="00:27:15.000" data-start-seconds="1621">It's like we need to somehow tell people that it is an app. A question already here, does Aria help with that? Is there a meta-tag that you can put in to say this is an app, or what's going on here?</span></p>
      <p><span data-start="00:27:15.000" data-end="00:27:42.000" data-start-seconds="1635">Yes. In Aria, there are certain roles that you can apply to elements. That's the application role. Be careful with that role, because when you apply it, depending on the screen reader used, it goes out of its web rendering mode. Most screen readers on Windows have a special mode for web rendering where you see the web page in a structured way.</span></p>
      <p><span data-start="00:27:42.000" data-end="00:28:15.000" data-start-seconds="1662">When you use an application role, goes out of that mode. That means that I should be able to interact with the website as if it was an application. That means that it should be totally keyboard navigable, and all elements you use should have the shortcuts I expect. And that's the problem, because if you use a more standard graphical toolkit on the native platform, well, all the elements will have the default shortcuts.</span></p>
      <p><span data-start="00:28:15.000" data-end="00:28:48.000" data-start-seconds="1695">That's all been worked out by now. But if you implement your own controls, or you use some library to do that, you'll have to make sure that all the keyboard shortcuts that should be usable are there. For example, I once saw an implementation of a tree of items, and I could move up and down, but I couldn't expand or collapse items using the left and right arrow keys.</span></p>
      <p><span data-start="00:28:48.000" data-end="00:29:11.000" data-start-seconds="1728">Or another example, most people don't know that you can do first letter navigation in most trees. For example you just press the letter, and you go to the item which starts with that letter. If you don't know that, you don't implement it. As long as we all have to implement this basic navigation features, it will never feel as smooth as native applications.</span></p>
      <p><span data-start="00:29:11.000" data-end="00:29:31.000" data-start-seconds="1751">And the problem, especially with keyboard controls, is that some of the keyboard shortcuts that you would expect in a screen reader or a desktop app to work are used by browsers for certain things. You actually can't use those because they do something in the browser, rather than Command K in other apps would do.</span></p>
      <p><span data-start="00:29:31.000" data-end="00:29:46.000" data-start-seconds="1771">That's an interesting thing. For example, if you go to YouTube and you play movie, you can use J and L to seek back and forward five seconds or something. Where is it documented? I don't know where it is documented, but that's how it works.</span></p>
      <p><span data-start="00:29:46.000" data-end="00:29:47.000" data-start-seconds="1786">Accessibility as an Easter egg.</span></p>
      <p><span data-start="00:29:47.000" data-end="00:29:49.000" data-start-seconds="1787">Yes.</span></p>
      <p><span data-start="00:29:49.000" data-end="00:29:54.000" data-start-seconds="1789">I know actually where that's from. That's from video editing software.</span></p>
      <p><span data-start="00:29:54.000" data-end="00:29:56.000" data-start-seconds="1794">Final Cut Pro? Yeah.</span></p>
      <p><span data-start="00:29:56.000" data-end="00:30:02.000" data-start-seconds="1796">All video editing software, it's always &quot;J&quot;.</span></p>
      <p><span data-start="00:30:02.000" data-end="00:30:03.000" data-start-seconds="1802">But I never use video editing software.</span></p>
      <p><span data-start="00:30:03.000" data-end="00:30:07.000" data-start-seconds="1803">I know, that's the problem. [laughter]</span></p>
      <p><span data-start="00:30:07.000" data-end="00:30:08.000" data-start-seconds="1807">Why not?</span> <span data-start="00:30:08.000" data-end="00:30:22.000" data-start-seconds="1808">How does YouTube work in terms of a subtitling interface that they do? Is that something that you could use for navigating? For example, TED.com allows you a transcript of a video so that you can jump to a certain word. Is there something like that on YouTube by now?</span></p>
      <p><span data-start="00:30:22.000" data-end="00:30:48.000" data-start-seconds="1822">From what I know, no. That's not there. Correct me if I'm wrong, but I didn't see it. But what I wanted to say about YouTube is the J and L commands interfere with, in this case, Safari. If I press command L, I go to the location bar, but in YouTube I go to the location bar and I seek my movie five seconds forward.</span></p>
      <p><span data-start="00:30:48.000" data-end="00:30:52.000" data-start-seconds="1848">You're trying to forward to another website and you just get another sound bite of the video.</span></p>
      <p><span data-start="00:30:52.000" data-end="00:30:53.000" data-start-seconds="1852">I get both.</span></p>
      <p><span data-start="00:30:53.000" data-end="00:30:55.000" data-start-seconds="1853">That's not good.</span></p>
      <p><span data-start="00:30:55.000" data-end="00:31:05.000" data-start-seconds="1855">That's not good. I guess that's not good in the browser, and it's also not good in the web application because, like you said, you get conflicting keys, sooner or later.</span></p>
      <p><span data-start="00:31:05.000" data-end="00:31:16.000" data-start-seconds="1865">It gets even more interesting when you get into internationalization, that some countries expect other keyboard shortcuts because it's different names for things. Most of the time keyboard shortcuts are abbreviations of the words.</span></p>
      <p><span data-start="00:31:16.000" data-end="00:31:41.000" data-start-seconds="1876">Yes, and different plus forms. For example, if you have Gmail or another Google app, they have, I don't know why, but they have accessibility disabled by default. You have to press a hot key to enable it. That, from the top of my head, is &quot;alt-shift-accent-grave-something.&quot;</span></p>
      <p><span data-start="00:31:41.000" data-end="00:31:45.000" data-start-seconds="1901">Very easy to find by accident..</span></p>
      <p><span data-start="00:31:45.000" data-end="00:31:46.000" data-start-seconds="1905">Of course.</span></p>
      <p><span data-start="00:31:46.000" data-end="00:31:53.000" data-start-seconds="1906">What's it on a Mac, anyway? Is it Control? Command? Option?</span> <span data-start="00:31:53.000" data-end="00:32:09.000" data-start-seconds="1913">I don't know. I don't know what. They choose that key, because otherwise they would get a conflict of any kind. And now they choose a key that you might not be able to find anyway. Yes, I don't know what's the better option.</span></p>
      <p><span data-start="00:32:09.000" data-end="00:32:27.000" data-start-seconds="1929">Wasn't there a government guideline, or an international guideline that every website should have certain hot keys to go to certain parts of a page? Like there was alt zero for home page, and things like that. That was used years ago but they might have dismissed that.</span></p>
      <p><span data-start="00:32:27.000" data-end="00:32:50.000" data-start-seconds="1947">I'm not sure if there was really a guideline that said which key should go where, but I saw quite a few of those implementations. I find that the disadvantage of putting an access key on the link is that if I press that access key, in most browsers I would ultimately activate a link.</span></p>
      <p><span data-start="00:32:50.000" data-end="00:33:06.000" data-start-seconds="1970">You just press a key, and you activate a link. You don't know what you activated unless you already knew the website. And if I know the website, I can easily grab a link list. For example, if I wanted to go to Google drive.</span></p>
      <p><span data-start="00:33:06.000" data-end="00:33:08.000" data-start-seconds="1986">Having 50 links, 68 items, one item drop drive.</span></p>
      <p><span data-start="00:33:08.000" data-end="00:33:31.000" data-start-seconds="1988">I could go there. If I press enter now, it would go to Drive. If they put access keys on these links, I don't think I would use them because this is as fast as using a hotkey, and this works on every website I know what text to search for.</span></p>
      <p><span data-start="00:33:31.000" data-end="00:33:53.000" data-start-seconds="2011">I'm using it myself. I see a massive page and I'd start searching in it. Especially on my mobile phone, when I have a small screen. So a lot of these use cases could actually be sold to customers saying &quot;Yeah, it's great for accessibility&quot;, but it also means that you on your small iPhone that doesn't resize in pixels or whatever it is, we had a discussion about that earlier.</span></p>
      <p><span data-start="00:33:53.000" data-end="00:34:12.000" data-start-seconds="2033">You can use that much easier there, so it was quite ironic to see when the iPhone came out that it was very, very much acclaimed by lots of blind users that I know. That's the most touchy, coolest, shiny phone, but then people can't see it, but it's very good for them because it had voiceover installed from the very beginning.</span></p>
      <p><span data-start="00:34:12.000" data-end="00:34:18.000" data-start-seconds="2052">How do you boot something like that? Does it boot into a screen reader? Is there an option for that?</span> <span data-start="00:34:18.000" data-end="00:34:36.000" data-start-seconds="2058">On the iPhone, it's quite interesting implementation. If you are on the setup screen, so if you turn it on for the very first time, you can press the home button three times and you will get voiceover. And it will stay on after the setup if you turned it on that way.</span></p>
      <p><span data-start="00:34:36.000" data-end="00:35:06.000" data-start-seconds="2076">You can, if you're connecting an iPhone to iTunes, there's a button called accessibility settings here that you can enable or disable the settings from a PC, which supposedly should have the screen reader then, or a Mac. And that's often a problem. For example, if you look at all the systems that try this, like Windows has Windows Narrator.</span></p>
      <p><span data-start="00:35:06.000" data-end="00:35:24.000" data-start-seconds="2106">It doesn't truly work. It's improved in Windows 8, but in early versions it's just not really useful. As a tool to get up and running, to install another screen reader.</span></p>
      <p><span data-start="00:35:24.000" data-end="00:35:25.000" data-start-seconds="2124">Cool.</span></p>
      <p><span data-start="00:35:25.000" data-end="00:35:43.000" data-start-seconds="2125">And yeah, there is a hotkey to boot Narrator, but that's only there since, I think, Vista or 7. In the earlier versions, you just had to try and get it up and running.</span></p>
      <p><span data-start="00:35:43.000" data-end="00:36:04.000" data-start-seconds="2143">So it's not as easy as it looks. Because that was always a big thing when I talked to people about setting accessibility. Well, a blind user could never set up his own computer and they always need somebody to do it for them. That kind of argument always annoys me, because it is just belittling people that can do things if you just wouldn't put barriers in their way.</span></p>
      <p><span data-start="00:36:04.000" data-end="00:36:23.000" data-start-seconds="2164">It's a weird situation that we're sometimes in that we need to solve. So, what would you say? Sometimes there's false positives were people say &quot;OK, use Aria and then everything is fine and your website is really, really good.&quot; What kind of website enhancements do you find that really don't help you?</span></p>
      <p><span data-start="00:36:23.000" data-end="00:36:59.000" data-start-seconds="2183">What kind of? Well, one thing that really annoys me sometimes is that you already said Aria, but especially larger websites and companies put a great service on their website, and it's called a reading service. You get a nice button, and you click it, and it will start reading the page. Usually, they claim that it's a good thing for blind people, and I don't know anybody who's blind and who uses such reading utilities.</span></p>
      <p><span data-start="00:36:59.000" data-end="00:37:34.000" data-start-seconds="2219">If you are blind, you have your own reading software. And if you are not blind, you probably don't need reading software. Sure. There is a small target group for such things. First of all, reading a web page is better done by a browser extension. Second, it's not what some people claim. It's not improving your accessibility by just putting a nice little icon there to press it and to read your site aloud.</span></p>
      <p><span data-start="00:37:34.000" data-end="00:37:40.000" data-start-seconds="2254">It doesn't help, at least, blind people. It doesn't help blind people.</span></p>
      <p><span data-start="00:37:40.000" data-end="00:37:59.000" data-start-seconds="2260">It's a big thing for clients, though. It's a feel-good thing for them. &quot;Look, we've done something.&quot; Some of them want to get out of that way of being sued, as well. &quot;Look, we've done something. Look, we're nice guys. Why do you say we're not accessible?&quot; I found these buttons to be useful for people with dyslexia, though. But they never saw it that way.</span></p>
      <p><span data-start="00:37:59.000" data-end="00:38:05.000" data-start-seconds="2279">That's true. As I said, there are uses for them, but not for the blind, I think.</span></p>
      <p><span data-start="00:38:05.000" data-end="00:38:14.000" data-start-seconds="2285">One question here is about banners ads with video's, that start auto-playing. Do you use AdBlock Plus for that?</span></p>
      <p><span data-start="00:38:14.000" data-end="00:38:19.000" data-start-seconds="2294">Usually yes, because I don't read them anyway. I don't want to bother with ads.</span></p>
      <p><span data-start="00:38:19.000" data-end="00:38:23.000" data-start-seconds="2299">It's a bit tricky, like &quot;Look at this car.&quot;</span></p>
      <p><span data-start="00:38:23.000" data-end="00:38:54.000" data-start-seconds="2303">Yes. And, well, auto playing videos, if it's a Flash video might be a good thing because at least on Mac, Flash is totally inaccessible. Flash sometimes is praised, well not really praised but said as being an accessible technology if the Flash developer implements it well, and it's kind of true on Windows. But on all the other platforms it's totally useless.</span></p>
      <p><span data-start="00:38:54.000" data-end="00:39:18.000" data-start-seconds="2334">If it's not an auto playing video, the only solution for me is to scroll the web page to the right position. Get the mouse over there, and click somewhere, hoping to find a big play button to start the video, or just walk over to my Windows machine and opening that over there. But that's really an annoyance.</span></p>
      <p><span data-start="00:39:18.000" data-end="00:39:35.000" data-start-seconds="2358">Which is sadly not a copyright thing or a patent thing that you actually have to click to start on other platforms. I don't know, I'm not a lawyer, but there is awful things there. Auto playing video is annoying for me as well, so just don't do that. Make it a nice button for people to start.</span></p>
      <p><span data-start="00:39:35.000" data-end="00:39:54.000" data-start-seconds="2375">Just in terms of performance, it's a good idea as well. Don't load the video that I don't need. Well, thanks for that. We have to move on to get everybody here in the mix. Now that we know that you like Dreamweaver, let's go on with what else you do. Can we switch over? Yeah.</span></p>
      <p><span data-start="00:39:54.000" data-end="00:39:58.000" data-start-seconds="2394">I'll start with this example.</span></p>
      <p><span data-start="00:39:58.000" data-end="00:40:00.000" data-start-seconds="2398">Can you describe your condition, first of all?</span> <span data-start="00:40:00.000" data-end="00:40:30.000" data-start-seconds="2400">I have cerebral palsy, which causes spasms in my hands and my legs. It pretty much is a problem for me to make small movements. I have a trackpad. If I have a spasm, it can go all over the place sometimes. Those things are a problem. I can't walk, that's the biggest bummer.</span></p>
      <p><span data-start="00:40:30.000" data-end="00:40:33.000" data-start-seconds="2430">Not that much problem with the websites.</span></p>
      <p><span data-start="00:40:33.000" data-end="00:40:34.000" data-start-seconds="2433">No, exactly.</span></p>
      <p><span data-start="00:40:34.000" data-end="00:40:37.000" data-start-seconds="2434">Maybe games, when you do Wii stuff.</span></p>
      <p><span data-start="00:40:37.000" data-end="00:40:39.000" data-start-seconds="2437">Wii is OK. Kinect is a problem.</span></p>
      <p><span data-start="00:40:39.000" data-end="00:40:41.000" data-start-seconds="2439">Yeah?</span> <span data-start="00:40:41.000" data-end="00:40:54.000" data-start-seconds="2441">It doesn't really understand that you're sitting down. When I put my hand down, it connects my wrists to my knee and thinks it becomes a part of my leg. So, it really becomes bad.</span></p>
      <p><span data-start="00:40:54.000" data-end="00:40:57.000" data-start-seconds="2454">Dance games are bad that way.</span></p>
      <p><span data-start="00:40:57.000" data-end="00:41:07.000" data-start-seconds="2457">I tried Kung-Fu Panda, but the Panda just keeps jumping and doing stuff, and dies every time. [laughter]</span></p>
      <p><span data-start="00:41:07.000" data-end="00:41:09.000" data-start-seconds="2467">That's not really encouraging, is it?</span> <span data-start="00:41:09.000" data-end="00:41:38.000" data-start-seconds="2469">It's a great game if you want to look at something like that. I brought a couple of examples. This is something, don't look at the date, I just marked it up. This is a form from UWV, where if you're on welfare they send you the welfare checks. But they want to know every little change that happens in your life.</span></p>
      <p><span data-start="00:41:38.000" data-end="00:42:13.000" data-start-seconds="2498">Does your condition or your disability, does it improve? Please send us a form. Are you going to go work? Please send us a form. And so on. This is important information. Do not forget. What's interesting is they have finally decided to give you an online form to fill out so that you don't have to grab a pen and write this down. Writing is hard for me, and my hand cramps up. It takes me about an hour to fill out a simple form.</span></p>
      <p><span data-start="00:42:13.000" data-end="00:42:30.000" data-start-seconds="2533">They made it easier. The only problem is, if you come to the end of the form, which is luckily divided into all kinds of categories and small things. You fill it out. You move on. Small questions.</span></p>
      <p><span data-start="00:42:30.000" data-end="00:42:48.000" data-start-seconds="2550">You come to the end of the form, it asks you to print and then grab a pen, sign it, fumble around putting it in an envelope and putting it in the mailbox. Negates the entire process.</span></p>
      <p><span data-start="00:42:48.000" data-end="00:43:02.000" data-start-seconds="2568">So they spend a lot of time making the form accessible and actually usable. Not really pretty, as we can see, but at the end, it's the final, physical moment that basically stopped you from submitting it or having to sign it.</span></p>
      <p><span data-start="00:43:02.000" data-end="00:43:14.000" data-start-seconds="2582">Same with blind users. When I went to lunch with a friend of mine, and they asked him to sign his bill, he's like &quot;I don't know what I am signing here, so not going to pay this.&quot;</span></p>
      <p><span data-start="00:43:14.000" data-end="00:43:19.000" data-start-seconds="2594">It's a tricky thing, but this is all, again, I think a legal requirement that has to be a printed document.</span></p>
      <p><span data-start="00:43:19.000" data-end="00:43:35.000" data-start-seconds="2599">Yeah, but you also have DigiD when you have a number assigned to your Social Security number, and you can use that to fill out forms for the government.</span></p>
      <p><span data-start="00:43:35.000" data-end="00:43:39.000" data-start-seconds="2615">Oh, so you already know and you already have an identity that is verified.</span></p>
      <p><span data-start="00:43:39.000" data-end="00:43:47.000" data-start-seconds="2619">You really don't, correct me if I'm wrong, have to sign anything for that. So there's a way around it.</span></p>
      <p><span data-start="00:43:47.000" data-end="00:43:57.000" data-start-seconds="2627">So it's a classic case of some paper form that has been put on the website and they haven't thought it through in the end to just have a button that says &quot;Here, I filled it out because you already know who I am.&quot;</span></p>
      <p><span data-start="00:43:57.000" data-end="00:44:04.000" data-start-seconds="2637">Well, the excuse that the UWV uses is &quot;You cannot email us.&quot;</span></p>
      <p><span data-start="00:44:04.000" data-end="00:44:05.000" data-start-seconds="2644">That's useful.</span></p>
      <p><span data-start="00:44:05.000" data-end="00:44:14.000" data-start-seconds="2645">Yeah, it's a company that is somewhere in 1988 that doesn't have email. They do, they just don't want you to use it.</span></p>
      <p><span data-start="00:44:14.000" data-end="00:44:18.000" data-start-seconds="2654">Oh, wow.</span></p>
      <p><span data-start="00:44:18.000" data-end="00:44:27.000" data-start-seconds="2658">That's just what's weird about this entire thing. And it annoys me, because this helps, in the end negates everything.</span></p>
      <p><span data-start="00:44:27.000" data-end="00:44:45.000" data-start-seconds="2667">Something like a digital signature would be more helpful with that. That's a question we had here as well, and a discussion I had for a long time. Why isn't there websites that ask you up front if you're blind, or if you have other kinds of certain disabilities to give you the right interface.</span></p>
      <p><span data-start="00:44:45.000" data-end="00:44:58.000" data-start-seconds="2685">I always found it technically a good idea, but actually you shouldn't have to tell people that you're blind. Would that be something that you would be OK with, or would that be something like &quot;This is weird to me as well.&quot;</span></p>
      <p><span data-start="00:44:58.000" data-end="00:45:15.000" data-start-seconds="2698">It would be weird to me, because it would mean just one more step to take. One more button to click before I can get to the content I want. And I want as little clicks as possible. It just counteracts that point.</span></p>
      <p><span data-start="00:45:15.000" data-end="00:45:16.000" data-start-seconds="2715">Yeah.</span></p>
      <p><span data-start="00:45:16.000" data-end="00:45:29.000" data-start-seconds="2716">And I know it would be easier if a website were to tailor itself to the user, but again, you have blind people. You have people with bad eyesight.</span></p>
      <p><span data-start="00:45:29.000" data-end="00:45:35.000" data-start-seconds="2729">There would be a massive drop down with 10.000 disabilities, so it's really not that easy.</span></p>
      <p><span data-start="00:45:35.000" data-end="00:45:41.000" data-start-seconds="2735">Every disability is unique, so it would be a real pain to get that right.</span></p>
      <p><span data-start="00:45:41.000" data-end="00:45:55.000" data-start-seconds="2741">It's disappointing that even somebody who should actually know about this, who is the government initiative that actually deals with people's needs, fails at that certain moment. You have a few other demonstrations. What else do you have?</span></p>
      <p><span data-start="00:45:55.000" data-end="00:46:09.000" data-start-seconds="2755">I have one. Don't be blown away by this beautiful design. It's been like this for as long as I can remember, and that's got to be at least eight years.</span></p>
      <p><span data-start="00:46:09.000" data-end="00:46:14.000" data-start-seconds="2769">It's a supermarket. Pink and yellow and big arrows, that's the navigation for you.</span></p>
      <p><span data-start="00:46:14.000" data-end="00:46:18.000" data-start-seconds="2774">I don't understand why no one is ever told them this is not beautiful.</span></p>
      <p><span data-start="00:46:18.000" data-end="00:46:33.000" data-start-seconds="2778">This is on purpose. They want to appear cheap and affordable, that's why their flyers and stuff looks like that as well. It's a psychological thing. Painful, too.</span></p>
      <p><span data-start="00:46:33.000" data-end="00:46:59.000" data-start-seconds="2793">Yeah. What happens in this website, and forgive me for the horizontal scrolling, it's the screen size. You have to pick one of these buttons. I'm sorry, I lost the English word. Either get the folder, or go to the site. The first choice. And whatever you do, it doesn't matter, because you're going to get this navigation.</span></p>
      <p><span data-start="00:46:59.000" data-end="00:47:12.000" data-start-seconds="2819">You're going to get that same link over here. You're going to get that same link over here. Who really cares about that extra click? It's pointless, and it's one more thing. It's one more thing that a user with a disability has to do.</span></p>
      <p><span data-start="00:47:12.000" data-end="00:47:17.000" data-start-seconds="2832">So it's like one of those flash tunnel pages, look how beautiful our buttons are and choose one of them.</span></p>
      <p><span data-start="00:47:17.000" data-end="00:47:29.000" data-start-seconds="2837">See this one slide over here? This is great. What it actually does on a bigger screen size, I think it's an iFrame, I didn't check it.</span></p>
      <p><span data-start="00:47:29.000" data-end="00:47:30.000" data-start-seconds="2849">Yeah it is one.</span></p>
      <p><span data-start="00:47:30.000" data-end="00:47:53.000" data-start-seconds="2850">It has a frame inside, and it has scrollbars inside the page, and you can scroll as long as you stay inside that iFrame, but if you go outside, your page doesn't scroll that easily anymore. So again, you lose a little bit of easy functionality. For me, when you go outside that iFrame.</span></p>
      <p><span data-start="00:47:53.000" data-end="00:48:09.000" data-start-seconds="2873">It's what we talked about earlier as well, simplifying your interface would help everybody here. For starters, you don't have that extra click. Nobody needs &quot;welcome to our website&quot; pages anymore. It's not 1997 where we need to explain what a website is. It's interesting to see that.</span></p>
      <p><span data-start="00:48:09.000" data-end="00:48:31.000" data-start-seconds="2889">That whole digital autograph thing, it's mainly a thing from the government that they're afraid of fraud, or either way that they cannot confirm that it's really you putting on the signature. But as far as I'm concerned, you could easily tackle that by sending some sort of confirmation email.</span></p>
      <p><span data-start="00:48:31.000" data-end="00:49:01.000" data-start-seconds="2911">If you have really filled in this form and put your digital signature under it, please click this link to confirm. Or you can even send, what I would really like to do, is send you a bunch of paper saying this is what you filled in on the form. If you don't agree, please call us now. There are many ways you could work around the fear of purely fraud.</span></p>
      <p><span data-start="00:49:01.000" data-end="00:49:07.000" data-start-seconds="2941">We're working on a system called Persona that would allow you to verify your email as your identity and then log in to every website.</span></p>
      <p><span data-start="00:49:07.000" data-end="00:49:09.000" data-start-seconds="2947">Yes, exactly.</span></p>
      <p><span data-start="00:49:09.000" data-end="00:49:18.000" data-start-seconds="2949">The fraud thing is fascinating me. When people say &quot;I don't use my credit card online because it could be stolen&quot;, but they're totally happy if their waiter goes away with their credit card for 20 minutes.</span></p>
      <p><span data-start="00:49:18.000" data-end="00:49:19.000" data-start-seconds="2958">Exactly.</span></p>
      <p><span data-start="00:49:19.000" data-end="00:49:41.000" data-start-seconds="2959">It's a very interesting point. In summary, because we have to wrap up here, what would you say are the things that make you the happiest about what's happening already, and what people should do more to help you out on the web, or to stop you from being annoyed?</span></p>
      <p><span data-start="00:49:41.000" data-end="00:50:09.000" data-start-seconds="2981">Is my mic off? No, it isn't. I think in most cases, don't think of the web as just being a design and code and being done with it. Think about these things. You know, I see a lot of designers that never think about interaction design. They just go for the beauty, and then code it, and they're done.</span></p>
      <p><span data-start="00:50:09.000" data-end="00:50:34.000" data-start-seconds="3009">Look what I did. As soon as you start doing interaction design, you're very quickly find out that some things might or might not work. Often, if you think to yourself &quot;well, this is too close, these two elements are too close together&quot;, they are definitely going to be too close together for someone with a disability.</span></p>
      <p><span data-start="00:50:34.000" data-end="00:50:35.000" data-start-seconds="3034">So don't spare on the space.</span></p>
      <p><span data-start="00:50:35.000" data-end="00:50:37.000" data-start-seconds="3035">No, white space is your best friend.</span></p>
      <p><span data-start="00:50:37.000" data-end="00:51:02.000" data-start-seconds="3037">Two very important things are, first, gladly as we pointed out from the very beginning of our talk here, is that more and more developers and publishers are thinking about accessibility issues in general. For a big audience and it might have a positive flow towards the more niche related markets.</span></p>
      <p><span data-start="00:51:02.000" data-end="00:51:28.000" data-start-seconds="3062">Secondly, the most important thing is that we are creating awareness. By being here today, by talking to you, by letting all these people share that with us, that's the main thing. That's the thing, how we can make people think about it? Look towards the future and think, &quot;Yeah, it's easily implement-able. It's not going to have to cost too much time wise, money wise, and we can make a whole big group happy with it.&quot;</span></p>
      <p><span data-start="00:51:28.000" data-end="00:51:34.000" data-start-seconds="3088">Cool. Any last words from you?</span></p>
      <p><span data-start="00:51:34.000" data-end="00:52:07.000" data-start-seconds="3094">We are here with three different accessibility point of views. It's really important, because when I hear talks about accessibility, it usually starts and ends with &quot;Oh yeah, those blind guys have screen readers and such.&quot; But there's more to accessibility. I think there's a huge overlap between accessibility and usability, as you both showed using spacing issues and such.</span></p>
      <p><span data-start="00:52:07.000" data-end="00:52:15.000" data-start-seconds="3127">This is really good, to see accessibility in a more broad perspective.</span></p>
      <p><span data-start="00:52:15.000" data-end="00:52:22.000" data-start-seconds="3135">Splendid. Thank you so very much for doing this. I think we all learned a lot, so give them a big hand, thank you very much. [applause]</span></p>
     </div>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2012/sessions/accessibility-panel.md" id="comment">
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
