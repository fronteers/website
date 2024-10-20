<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>A Pixel is not a Pixel by Peter-Paul Koch · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p746">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>A Pixel is not a Pixel by Peter-Paul Koch</h2>
     <video width="480" height="270" controls>
      <source src="/_downloads/2012/peter-paul-koch-a-pixel-is-not-a-pixel.webm" type="video/webm">
      <source src="/_downloads/2012/peter-paul-koch-a-pixel-is-not-a-pixel.mp4" type="video/mp4">
      <track src="/congres/2012/sessions/a-pixel-is-not-a-pixel-peter-paul-koch.vtt" default>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2012/peter-paul-koch-a-pixel-is-not-a-pixel.webm">download the video</a> (or the alternatives: <a href="/_downloads/2012/peter-paul-koch-a-pixel-is-not-a-pixel.mp4">1</a>) and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="https://vimeo.com/52851511">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2012/peter-paul-koch-a-pixel-is-not-a-pixel.webm">Download video</a> (WebM, 100MB)</li>
      <li><a href="/_downloads/2012/peter-paul-koch-a-pixel-is-not-a-pixel.mp3">Download audio</a> (MP3, 41MB)</li>
     </ul>
     <h3>Transcript</h3>
     <div class="transcript">
      <p><span data-start="00:00:04.000" data-end="00:00:20.000" data-start-seconds="4">Thank you so much, Chris. I've been working in mobile for three and a half years now. Mobile web development, that is. And during that time, I've noticed that there are three things on mobile that are really, really, really different from the desktop.</span></p>
      <p><span data-start="00:00:20.000" data-end="00:00:32.000" data-start-seconds="20">The first is the small screen. And we've found a solution, meanwhile, which is responsive design. Mark already talked about that. The second is touch events, which are somewhat different from mouse events. I'm not going to talk about that today.</span></p>
      <p><span data-start="00:00:32.000" data-end="00:01:04.000" data-start-seconds="32">Today, instead, I'm going to talk about pixels and viewports, because pixel-y stuff is actually much more complicated than you think. On desktop, we do it kind of naturally, and we understand what's going on and we don't really think about it. But once you make the step to mobile, we do have to start thinking about pixels, about viewports, about zooming and about more of that kind of stuff, and that's what I'm going to talk about today. So pixels. What exactly is a pixel?</span></p>
      <p><span data-start="00:01:04.000" data-end="00:01:30.000" data-start-seconds="64">I'm not going to read this to you. It's complicated. It's a W3C definition. It's an old W3C definition. Basically, what they're saying here is that a pixel is a certain angle of view. They use this graphic to show, basically, if you are close to the screen, for instance, if you are watching a mobile phone, pixels are comparatively smaller than when you're watching something far away, for instance on TV.</span></p>
      <p><span data-start="00:01:30.000" data-end="00:01:55.000" data-start-seconds="90">So it's all about the angle of view. Now, in theory, this sounds nice. But in practice, it doesn't make much sense, because if a pixel is a certain angle in your view and you have, say, a font size of 12 pixels or something, you're not allowed to zoom, or at least the font should stay exactly the same size, because it is supposed to cover a certain angle in your view.</span></p>
      <p><span data-start="00:01:55.000" data-end="00:02:19.000" data-start-seconds="115">So basically, if we would follow W3C's definition of a pixel to the letter, we would not be allowed to zoom. I had a long conversation about this with Chris Wilson, currently from Google, and he said, &quot;Yeah, but really, zooming is like a kind of special issue, and you are allowed to zoom.&quot; Which is OK by me, but then the whole definition just doesn't make too much sense to me.</span></p>
      <p><span data-start="00:02:19.000" data-end="00:02:45.000" data-start-seconds="139">So, in fairness, this whole definition stems from, I don't know, 1998 or something. And back then, W3C just basically didn't pay attention to the actual web and just went on with its academic pursuits and so on. So I kind of expect this definition to be changed in the not-too-distant future. But for now, we have to conclude that pixels, according to the W3C, have nothing to do with reality.So a pixel is not a pixel because there are actually three kinds of pixels: </span></p>
      <p><span data-start="00:02:45.000" data-end="00:03:13.000" data-start-seconds="165">CSS pixels; density-independent pixels, or DIPs; and device pixels. The density-independent pixels are new, and I'm going to talk about them later. But CSS pixels and device pixels have basically existed as long as web browsers existed, and secretly, you already know how to work with them; you just don't realize it.</span></p>
      <p><span data-start="00:03:13.000" data-end="00:03:43.000" data-start-seconds="193">What is a CSS pixels? Basically, they are the ones we use in CSS declarations. If you say &quot;width: 190 pixels&quot; you mean 190 CSS pixels. If you say &quot;padding-left: 20 pixels,&quot; you mean 20 CSS pixels. They are basically an abstract construct, kind of a layer that browser vendors have created especially for us web developers so we can write some CSS. And the trick of CSS pixels is that their size may be increased or decreased.</span></p>
      <p><span data-start="00:03:43.000" data-end="00:04:05.000" data-start-seconds="223">You already know this, but I'm now going to explain it to you. This is an example site, this is Mobilism 2012 site, which is of course properly responsive and all that. Mobilism is for mobile conference so we say, &quot;OK, we're going to make it responsive,&quot; but for the most of this presentation I'm going to pretend it's not responsive so that you can actually see the problems that mobile browser vendors are facing.First, something about CSS pixels. We have navigation here with 190 pixels, and we have </span></p>
      <p><span data-start="00:04:05.000" data-end="00:04:25.000" data-start-seconds="245">&quot;padding-left&quot; here of 34 percent. If we zoom in, we get this, and you all know this. I mean, you've done this countless times. Stop for a moment and think about what's happening here.</span></p>
      <p><span data-start="00:04:25.000" data-end="00:04:58.000" data-start-seconds="265">This box is now larger than it was. Is that because it secretly has a higher width now, no it does not. It's still 190 pixels wide, 190 CSS pixels, but those pixels themselves have increased in size. That is what is happening when you zoom. Basically we don't really think about this, we do this automatically, so basically what I'm trying to say is you already know how CSS pixels work, right? They are just this layer that you need to make sense of your CSS.</span></p>
      <p><span data-start="00:04:58.000" data-end="00:05:21.000" data-start-seconds="298">Now, device pixels are also easy to understand. They are the physical, actual pixels on the device. A certain device has a certain amount of fixed, hardware pixels. You cannot change that in any way. That's what device pixels are. So for instance, the old iPhone had 320 pixels, device pixels.</span></p>
      <p><span data-start="00:05:21.000" data-end="00:05:38.000" data-start-seconds="321">The problem is Retina screens and other similar things that are happening, especially in the Android world. Because what a Retina screen does...It creates more device pixels. There are more hardware device pixels on a Retina screen than on a normal screen.</span></p>
      <p><span data-start="00:05:38.000" data-end="00:06:06.000" data-start-seconds="338">That's the whole point of retina. The problem here is that, because the number of device pixels increases, it could start to break sites. Early responsive sites. Because now we have 640 actual device pixels on the new iPhone. But if we say, &quot;OK. A website should now become 640 pixels wide,&quot; then we would have a serious breakage problem.</span></p>
      <p><span data-start="00:06:06.000" data-end="00:06:29.000" data-start-seconds="366">That's why Google, in fact, first, and Apple followed only later, said, &quot;OK. We're going to create a new pixel layer called density independent pixels,&quot; which is basically yet another abstract construct created for us web developers. I'm going to get back to DIPs later on. But I want you to remember that it's somewhere in between CSS pixels and device pixels.</span></p>
      <p><span data-start="00:06:29.000" data-end="00:06:59.000" data-start-seconds="389">It's usually less than device pixels, and it is a complicated way of thinking if you first encounter it, but if I give a few more examples later on in this presentation, you will totally understand it. Oh, yeah. And this is the definition I use 'The number of DIPs is equal to the number of CSS pixels that is optimal for viewing a website on that device.' What does that mean, I'll explain to you later, because you need to know a little more stuff. OK. So, always ask yourself, &quot;OK, I'm using pixels here. What kind of pixels am I using?&quot; In CSS, that's easy: </span></p>
      <p><span data-start="00:06:59.000" data-end="00:07:32.000" data-start-seconds="419">it's always CSS pixels. In JavaScript, if a property is expressed in pixels, for instance the offset width of an element or something like that, always ask yourself what kind of pixels JavaScript is using here. 99 out of 100 times, that's actually CSS pixels, because especially all the DOM properties and methods are supposed to be working with a layout that uses CSS pixels, right?</span></p>
      <p><span data-start="00:07:32.000" data-end="00:08:03.000" data-start-seconds="452">It's only when you talk about the screen size and that sort of thing that JavaScript may express pixels as device pixels or possibly DIPs. Again, 99 percent of JavaScript is just CSS pixels, except for the screen sizes. OK, let's talk about viewports a bit. What is a viewport? It's basically the total amount of space you have for you CSS layout.</span></p>
      <p><span data-start="00:08:03.000" data-end="00:08:24.000" data-start-seconds="483">On the desktop it's as wide as a browser window is, and in practice we all know that. If you have a sidebar on your site and you say width: 20 percent what do you mean? You mean 20 percent of the entire browser window, right? If you resize the browser window, the width of the sidebar goes up and down, et cetera, et cetera.</span></p>
      <p><span data-start="00:08:24.000" data-end="00:08:39.000" data-start-seconds="504">Technically that is because the width of 20 percent is 20 percent of width of the HTML element, which again is 100 percent of the width of the viewport. It is nested blocks, right? This may sound complicated but it's just a matter of nested blocks.</span></p>
      <p><span data-start="00:08:39.000" data-end="00:08:58.000" data-start-seconds="519">The problem is the HTML element is the upper most block in our websites, and basically it too has to know what its size should be, and it basically looks at the viewport, which is the browser window. In a normal desktop website, this is the viewport, right? That's easy.</span></p>
      <p><span data-start="00:08:58.000" data-end="00:09:23.000" data-start-seconds="538">Basically what you do with percentages and that kind of stuff is you take percentages of the entire browser window. On mobile, unfortunately, it's a lot more complicated. Basically, if the mobile browser vendors would copy the desktop system literally, and without thinking, many sites would be squeezed to death. It would be horrible.</span></p>
      <p><span data-start="00:09:23.000" data-end="00:09:42.000" data-start-seconds="563">The point is, especially four years ago when the whole mobile web started, mobile web browsing vendors had to make sure that people could look at desktop sites on their mobile browsers, right? Because responsive design hadn't been invented yet. Almost no web developers ever did anything about mobiles.</span></p>
      <p><span data-start="00:09:42.000" data-end="00:09:53.000" data-start-seconds="582">Basically they created desktop websites, and the whole challenge of the mobile browser vendors at that point and time was, to make sure that those desktop websites showed decently on a mobile device.</span></p>
      <p><span data-start="00:09:53.000" data-end="00:10:16.000" data-start-seconds="593">It will never be great, because it is a desktop website which basically means too wide but you can still show them decently. However, if we would take this website and now we go to a mobile view and we pretend the mobile browser vendors did absolutely nothing, we get this. This is horrible.</span></p>
      <p><span data-start="00:10:16.000" data-end="00:10:38.000" data-start-seconds="616">We do not want this. This is again, the viewport is as wide as the browser window, about 320 pixels now, it's all squeezed in and this is exactly the sort of thing that mobile browser vendors wanted to prevent. Basically what they did is they split the viewport into two, and that is actually quite clever.First of all we have the layout viewport and the layout viewport is the one that CSS uses. If you say:</span></p>
      <p><span data-start="00:10:38.000" data-end="00:11:02.000" data-start-seconds="638">&quot;padding-left: 34 percent&quot;, 34 percent of what? Of the layout viewport. Under normal circumstances, if you just have a desktop website and don't do anything about mobile, the layout viewport is roughly 800 to 1.000 pixels wide on several mobile browsers.</span></p>
      <p><span data-start="00:11:02.000" data-end="00:11:30.000" data-start-seconds="662">Basically, this is the layout viewport, right? We're looking at the desktop website which has not been optimized for mobile. We're looking at it on a mobile device and basically we cannot see the entire site. Because the browser vendor has said &quot;OK, our screen is about 320 pixels wide but we're going to say CSS layout you can have, I don't know-960 pixels, 980 pixels, 800 pixels, something like that.&quot;</span></p>
      <p><span data-start="00:11:30.000" data-end="00:11:57.000" data-start-seconds="690">That's a layout viewport and it is used to calculate all your CSS stuff. The other viewport is a visual viewport and that is part of the site that you're actually seeing right now. It's basically this. The layout viewport is for the CSS, the visual viewport is actually for the user. This is what a user is currently seeing on his screen.</span></p>
      <p><span data-start="00:11:57.000" data-end="00:12:17.000" data-start-seconds="717">Look at it like this, we have a viewport, a canvas if you wish, and the artist which is you, the web developer, creates a beautiful picture on that canvas, right? This is a beautiful desktop website, but mobile users are forced to look at it through a keyhole, and that is a visual viewport.</span></p>
      <p><span data-start="00:12:17.000" data-end="00:12:36.000" data-start-seconds="737">Then you can, of course, move the keyhole around and you can zoom in and zoom out if you want to, but it is still a keyhole. Which means that even the best desktop website out there is not going to work really brilliantly on mobile.</span></p>
      <p><span data-start="00:12:36.000" data-end="00:12:50.000" data-start-seconds="756">Initially also, most browsers make the visual viewport equal to the layout viewport. Again, if they encounter a website that has not been optimized for mobile. Basically they zoom out the page as much as possible making this effect.</span></p>
      <p><span data-start="00:12:50.000" data-end="00:13:13.000" data-start-seconds="770">This is, of course, absolutely impossible to read for anyone, but the good part about it is you as a user can scan the web page and kind of figure out, OK I want to go to the main navigation or I want to read the text and zoom in on that. It's not brilliant. It's not what we want on mobile, but it's a decent compromise for those websites that are just not mobile optimized.</span></p>
      <p><span data-start="00:13:13.000" data-end="00:13:32.000" data-start-seconds="793">One important JavaScript property per a window in the width and in the height, they give the width and the height of the visual viewport in CSS pixels, which means that if the user zooms in, less CSS pixels fit in the visual viewport, and these properties are updated.</span></p>
      <p><span data-start="00:13:32.000" data-end="00:13:57.000" data-start-seconds="812">Basically, when I started studying this it was horrible. Basically it was only supported by Blackberry, Nokia, and Apple. The situation meanwhile has improved drastically, because basically it now works on all modern mobile browsers except for Android 2. It works fine in Android 3 and 4. Firefox so far, and IE9; works fine in IE10.</span></p>
      <p><span data-start="00:13:57.000" data-end="00:14:09.000" data-start-seconds="837">This is actually usable, if you want to know how much of your website the user is currently viewing, query &quot;window.innerWidth and &quot;window.innerHeight.&quot;</span></p>
      <p><span data-start="00:14:09.000" data-end="00:14:29.000" data-start-seconds="849">Let's talk about zooming a bit, because &quot;window.innerWidth&quot; and height react to user zooming. what you have to realize is that zooming on desktop and a mobile is something completely different. What you do on the desktop when zoom is basically make the CSS pixels larger, right? We saw that in the very first example.The point is, that the viewport stays the same, which means that less CSS pixels fit in the viewport, so</span></p>
      <p><span data-start="00:14:29.000" data-end="00:14:49.000" data-start-seconds="869">&quot;padding: left&quot; to 34 percent has to be recalculated because there are less CSS pixels now and they have to take 34 percent of that, et cetera, et cetera.</span></p>
      <p><span data-start="00:14:49.000" data-end="00:15:10.000" data-start-seconds="889">We already saw that. This is unzoomed, this is zoomed. Note that it adapts to the new size in CSS pixels of the viewport. Why? There are less CSS pixels in the viewport now, so this line is going to wrap and this 190 pixels is going to become larger, et cetera, et cetera.</span></p>
      <p><span data-start="00:15:10.000" data-end="00:15:31.000" data-start-seconds="910">You are all used to that. You've used it for years now. But I want you to think about what's actually happening under the hood. So this is mobile zooming. Basically what happens on mobile, when you zoom on mobile, is that the visual viewport becomes smaller or larger but they layout viewport stays the same.</span></p>
      <p><span data-start="00:15:31.000" data-end="00:15:50.000" data-start-seconds="931">The trick behind that is every time you zoom a site in the desktop browser, it has to recalculate the entire layout. Right? We probably use clever tricks nowadays, but the point remains that they have to recalculate everything. Your 34 percent is now 34 percent of less pixels, et cetera, et cetera, et cetera.</span></p>
      <p><span data-start="00:15:50.000" data-end="00:16:04.000" data-start-seconds="950">They could do that on mobile, too, but it eats a lot of CPU power and battery life, especially battery life. These things are expensive in terms of battery life, and that's what mobile vendors, especially Apple, want to prevent, right?</span></p>
      <p><span data-start="00:16:04.000" data-end="00:16:18.000" data-start-seconds="964">So they do not change the layout viewport at all, just the visual viewport. And the visual viewport, if you zoom in, contains less CSS pixels. User sees less of the complete site. But OK, that's what he wants, right? Because he zooms in. So basically, what happens on mobile. We still have the layout viewport here, and we are going to make this part of the site bigger by zooming. You see it happens. Also note: </span></p>
      <p><span data-start="00:16:18.000" data-end="00:16:45.000" data-start-seconds="978">it runs a bit off-screen, but this line doesn't wrap, because the actual size of the layout viewport hasn't changed. You have just made the keyhole slightly smaller. That's all that's happening. The site, in the layout viewport, is still exactly the same. So that is a crucial difference between desktop and mobile zooming. Let's talk about</span></p>
      <p><span data-start="00:16:45.000" data-end="00:17:05.000" data-start-seconds="1005">&quot;position: fixed&quot; for a bit. Who likes to use &quot;position: fixed&quot; on mobile websites here? Nobody! I'm talking about the ideal situation. A few people, a few people.That's because, over the past few years, with all the, &quot;Oh,</span></p>
      <p><span data-start="00:17:05.000" data-end="00:17:22.000" data-start-seconds="1025">'position: fixed' doesn't really work on the mobile web.&quot; First of all, actually, the situation is improving rather dramatically. And secondly, I want to explain to you why it's such a hassle on mobile websites.This is the official W3C definition. You probably know it.</span></p>
      <p><span data-start="00:17:22.000" data-end="00:17:40.000" data-start-seconds="1042"> &quot;Position: fixed&quot; is like &quot;position: absolute,&quot; right? You place an element somewhere at a fixed location, and it stays there when the user scrolls because it's fixed with respect to the viewport. But for mobile, we have two viewports: </span></p>
      <p><span data-start="00:17:40.000" data-end="00:18:00.000" data-start-seconds="1060">the visual viewport and the layout viewport. So the question is now, which viewports are the mobile browsers using to fix their elements relative to? Of course, as you may have guessed, that is browser dependent. Some browsers do this, other browsers do that. Still, I said a minute ago, the situation is improving dramatically because nowadays most browsers actually use the visual viewport. Which means that</span></p>
      <p><span data-start="00:18:00.000" data-end="00:18:18.000" data-start-seconds="1080"> &quot;position: fixed&quot; actually works as you would expect it to work. I'm going to show you that in a moment. Others still use layout viewport, and if you use the layout viewport, I'll show that in a minute, basically</span></p>
      <p><span data-start="00:18:18.000" data-end="00:18:46.000" data-start-seconds="1098"> &quot;position: fixed&quot; is the same as &quot;position:absolute&quot; because the fixed thing still scrolls with the page. Opera hops, I'm going to show you that too. Safari does something really weird. I haven't tested an IOS6 yet, but I'm not really happy with the way Safari implements &quot;position:fixed&quot; in IOS5, because to me it doesn't make sense.</span></p>
      <p><span data-start="00:18:46.000" data-end="00:19:04.000" data-start-seconds="1126">They tried to create a complicated compromise between something and something else, then they went high on something. Then they thought, &quot;Yeah, let's do this, like let it scroll slower than the page,&quot; whatever. I don't know, I don't understand, and I'm not going to talk about that today.Instead I'm going to show you some, I hope my demo works. If you want to see the actual test page I'm going to show you go to quirksmode.org/m and go to</span></p>
      <p><span data-start="00:19:04.000" data-end="00:19:35.000" data-start-seconds="1144">&quot;position: fixed.&quot; Works fine so far. Go full screen. What I have here is a Samsung Galaxy Note running Android 4 and I am going to show you how &quot;position:fixed&quot; works in four browsers.</span></p>
      <p><span data-start="00:19:35.000" data-end="00:19:57.000" data-start-seconds="1175">We start with the UC browser, you've all heard of the UC browser, right? It's the most popular browser in China. If China's important to you, you should definitely make you stuff work in UC. This is the UC browser, what you have to look at is this red layer, that's the fixed layer. Now what happens when I scroll in the UC browser? It goes up. Basically it's the same as</span></p>
      <p><span data-start="00:19:57.000" data-end="00:20:29.000" data-start-seconds="1197">&quot;position: absolute&quot; and that is because it is fixed relative to the layout viewport. The layout viewport is basically what you see on the screen now and it stays that way, the rest is just overflow. It's a bit complicated to explain, but basically this is what you get when you implement &quot;position: fixed&quot; relative to the layout viewport.</span></p>
      <p><span data-start="00:20:29.000" data-end="00:20:48.000" data-start-seconds="1229">You get basically &quot;position: absolute&quot;. Now, interesting, what happens when I zoom? Ooh, where has it gone? Ooh it's gone, it's gone, it's gone. Where is my fixed layout? Where's my fixed layout I don't know. Let's zoom out a bit, where is it, where is it? Oh my god I lost my fixed layer, I've lost my fixed layer.</span></p>
      <p><span data-start="00:20:48.000" data-end="00:21:20.000" data-start-seconds="1248">This is a browser bug. It's what I make money with. This is not a particularly brilliant example of implementing &quot;position: fixed&quot;. Let's go to Opera Mobile. Opera Mobile fixes their layer relative to the lay-out viewport, just as we saw now, but when I release the screen and stop scrolling it jumps to the bottom. That's what I meant with hopping. Let's go up again, it hops up. Hop down, it hops down.</span></p>
      <p><span data-start="00:21:20.000" data-end="00:21:55.000" data-start-seconds="1280">This again, is not really brilliant but it's a lot better than what you saw. What happens when I zoom? Oh dear, where has my layer gone? Ah, there it is. No, it's still hopping, well sometimes, not always, which is probably understandable but it's still a bit vague. I will zoom out, oh excuse me. We zoom out again, it kind of works. At least it's reliable, that's something. Let's switch to Chrome on Android.</span></p>
      <p><span data-start="00:21:55.000" data-end="00:22:09.000" data-start-seconds="1315">Here the fixed layer is placed relative to the visual viewport and what we get is this. This is what we want, right? The layer stays in place no matter how I scroll. Let's zoom in and see what happens now.</span></p>
      <p><span data-start="00:22:09.000" data-end="00:22:33.000" data-start-seconds="1329">Ooh where is my layer? Ah, there it is. The jump is not particularly elegant but the rest of what Chrome is doing is actually pretty good because not only is the layer still fixed, even when I zoom, it also wraps the line for us. Basically it tries to fit the entire fixed element into the viewport, and that's important.We zoom out again, hop is gone, there it is again. Finally let's go to Android WebKit, which is the default Android 4 browser. Ooh, that's weird. Ooh, it's good except that there is a bit here that doesn't really work very well. Let's reload it, let's see if that helps. Ooh yeah, now it's fine. Great. Again this is what we want with</span></p>
      <p><span data-start="00:22:33.000" data-end="00:23:11.000" data-start-seconds="1353"> &quot;position: fixed.&quot; Let's zoom in a bit. Oh yes, this grows really nicely, this is what we want. This is really what we want. We want the fixed layer to remain visible even during the zooming process.</span></p>
      <p><span data-start="00:23:11.000" data-end="00:23:45.000" data-start-seconds="1391">Except for one thing, as you see, it doesn't wrap the line. Basically if I want to read the entire text I try to scroll, but of course the layer doesn't move because it's fixed. Right? There is no way in hell I can read this entire bit of text while I'm zoomed in. I would like to take the opportunity to thank the browser vendors for making stuff so different, because that supports my business model. Thank you browser vendors.</span></p>
      <p><span data-start="00:23:45.000" data-end="00:24:05.000" data-start-seconds="1425">I want to show you one more thing. A while ago I was thinking about &quot;position: fixed&quot; and I thought, &quot;Hmmm, yeah maybe what we need is a new value for position, which is called &quot;device: fixed&quot;. I created a demo, the demo is done in JavaScript and basically what I do...This is a so-called fixed layer.</span></p>
      <p><span data-start="00:24:05.000" data-end="00:24:32.000" data-start-seconds="1445">What I want it to do is stay at its position and also keep the same font size, because I was thinking, &quot;OK, we might want to have a device fixed layer that basically says OK, I'm entirely relative to basically the screen.&quot; Technically this is quite complicated also because it will be relative to device pixels and not CSS, but I thought, &quot;OK, I'll throw it in.&quot;</span></p>
      <p><span data-start="00:24:32.000" data-end="00:24:50.000" data-start-seconds="1472">I created this demo and actually this demo that I want to show you, because I do this purely with JavaScript, I just reposition the stuff after scrolling and resizing. But, exactly how do I do that? It's extremely simple but I just want to show you because you need to figure out how to do this sort of stuff.</span></p>
      <p><span data-start="00:24:50.000" data-end="00:25:16.000" data-start-seconds="1490">We go to BBedit. Oh, come along now, there we are. You read this, no not really. Basically I do it here. I calculate the lower left of the screen, right? That's what I want to know the lower left and lower right. How do I calculate that? It is pretty simple.</span></p>
      <p><span data-start="00:25:16.000" data-end="00:25:31.000" data-start-seconds="1516">You take the window.pageYOffset, which is basically the amount the user has scrolled. This works exactly the same on desktop and a mobile. If you want the scrolling offset just query window.pageYOffset and window.pageXOffset and it absolutely works fine.</span></p>
      <p><span data-start="00:25:31.000" data-end="00:26:01.000" data-start-seconds="1531">Then we're at the top left of the screen but we want to go to bottom left so we simply add &quot;window.innerHeight&quot; which is basically the height of the entire screen in CSS pixels depending on the current zoom level. This reliably gives you the coordinate of the bottom left. That is the pixel that happens to be in the bottom left at the current zooming and panning. Why, because it changes all the time.</span></p>
      <p><span data-start="00:26:01.000" data-end="00:26:40.000" data-start-seconds="1561">Basically it's not really complicated and I mean the great thing that has happened over the past year is that &quot;window.innerHeight&quot; has become reliable in many browsers. OK, so that was the demo. We continue. We need to talk a little bit about media queries. This is a media query. Who here has never yet used a media query? Nobody, cool, because you need them. Basically I'm saying here if the width of the screen is maximum of 600 pixels at this bit of CSS, right?</span></p>
      <p><span data-start="00:26:40.000" data-end="00:27:12.000" data-start-seconds="1600">That is how media queries work, but what kind of pixels and which width exactly. What does width 600 pixels mean here, how does a browser actually calculate that? That's what we're going to talk about. There are basically two important media queries, with respect to pixels and viewports &quot;width&quot; and &quot;device-width&quot;. Usually we use &quot;min-width&quot; and &quot;max-width&quot; because we don't want to target an exact width, but more like a spectrum. Say from 300 to 600 pixels, whatever.</span></p>
      <p><span data-start="00:27:12.000" data-end="00:27:35.000" data-start-seconds="1632">&quot;Width&quot; is the one you want, forget about &quot;device-width&quot;, because what device width does, it gives the width of the device screen in device pixels and not CSS pixels. It's equal to JavaScript &quot;screen.width&quot; in all browsers, even the mobile ones. Basically it gives you this dimension on desktop.</span></p>
      <p><span data-start="00:27:35.000" data-end="00:27:50.000" data-start-seconds="1655">Do you care about how wide the user screen is? No, you do not. What you want to know is how wide his browser window is. That's exactly what width does, it gives the width of the viewport in CSS pixels, so that's great.</span></p>
      <p><span data-start="00:27:50.000" data-end="00:28:07.000" data-start-seconds="1670">There are a few zooming problems, but I have to study them better and it's equal to &quot;document.documentElement.clientWidth.&quot; This is a width media query and this is what you want, right? You want to know how wide the browser window currently is.</span></p>
      <p><span data-start="00:28:07.000" data-end="00:28:22.000" data-start-seconds="1687">Now on mobile, it's almost exactly the opposite because this is the device width, right? It's the width of the actual physical screen of the device, but in general you do not care about that especially not, because it's usually in device pixels.</span></p>
      <p><span data-start="00:28:22.000" data-end="00:28:48.000" data-start-seconds="1702">This is the width media query. The width media query mobile gives the width of the layout viewport and that's important to know. Width is a media query you want except that it seems odd with the last screenshot involved, because you do not really care about the layout viewport, you want to know something about the device, about width of the screen of the device, right?</span></p>
      <p><span data-start="00:28:48.000" data-end="00:29:26.000" data-start-seconds="1728">There is one last element that we need to treat and then you will understand everything, and that's of course the meta viewport. This is a meta viewport, who here has never yet heard of the meta viewport? Nobody, cool. I like this syntax more, Opera proposed it and as far as I know it is Opera only. We're stuck with this for the moment. OK, so what exactly is happening here? Basically what you set here is the size of the layout viewport.</span></p>
      <p><span data-start="00:29:26.000" data-end="00:29:42.000" data-start-seconds="1766">Usually you set it to &quot;device-width&quot;. You can also give it pixel value. If you want to say...On one of my tests I deliberately gave it a pixel value of 380 pixels because it's a value that is used natively by no mobile device, so it's really cool for testing purposes.</span></p>
      <p><span data-start="00:29:42.000" data-end="00:30:07.000" data-start-seconds="1782">In general you create a website not to test, but to actually show something interesting to users, right? That's basically where &quot;device-width&quot; is the most important one, because it basically means the screen size in device pixels or in DIPs, the density-independent pixels we talked about at the start, right? This is what's going to happen.</span></p>
      <p><span data-start="00:30:07.000" data-end="00:30:20.000" data-start-seconds="1807">This is the site without meta viewport, and this is the site with meta viewport. And, of course, a lot of media queries that make sure that the elements are rearranged. Standard responsive design, right? This is what we'll want.</span></p>
      <p><span data-start="00:30:20.000" data-end="00:30:47.000" data-start-seconds="1820">What we do here, technically speaking, is saying, &quot;Dear browser, the layout viewport now is not 800 or 1.000 pixels wide, but the size you consider best for the device.&quot; That's why there is little reason to use other values than &quot;device-width&quot;, because usually browser vendors are pretty good at taking a value that's actually useful and nice on the device.</span></p>
      <p><span data-start="00:30:47.000" data-end="00:31:32.000" data-start-seconds="1847">And because you now tell the layout viewport, basically, &quot;Please become as wide as the device,&quot; the width media query now contains useful information, because it gives you this width. Even better, it also works on desktop. Right? So what we have done here, via the meta-viewport tag, is make sure that the size of the layout viewport makes sense for the device. And I thought I had another slide here, but what I have to explain is DIPs.</span></p>
      <p><span data-start="00:31:32.000" data-end="00:31:54.000" data-start-seconds="1892">We have the iPhone, the old iPhone. 320 device pixels and if you use the meta viewport, &quot;device-width&quot; you also get a layout viewport of 320 pixels wide, right? Because Apple said this is perfect and optimal for our device, so that's what you should use. In general you should listen to that kind of stuff.</span></p>
      <p><span data-start="00:31:54.000" data-end="00:32:13.000" data-start-seconds="1914">Then the retina screen came out and suddenly had 640 device pixels. That was going to be a problem because if they now say, &quot;OK, &quot;device-width&quot; is now 640 pixels instead of 320, lots of websites, lots of mobile optimized websites would break.&quot;</span></p>
      <p><span data-start="00:32:13.000" data-end="00:32:35.000" data-start-seconds="1933">That's why they basically said, &quot;OK, so we're going to insert yet another layer of abstraction and that's DIPs, Device Independent Pixels.&quot; Right? Basically, the device pixels on a retina screen are 640, but the density independent pixels are still 320 and that is what the meta viewport uses.</span></p>
      <p><span data-start="00:32:35.000" data-end="00:33:06.000" data-start-seconds="1955">Basically, they inserted yet another layer that says, &quot;OK, the layout viewport should be roughly as wide as this, because it's optimal for our device.&quot; That is what DIPs do. In general, you don't really have to think about DIPs. Unless you go into device pixel ratio and that kind of stuff that is interesting but also complicated and I'm not yet totally sure it's actual practical use to web development. I could be wrong.</span></p>
      <p><span data-start="00:33:06.000" data-end="00:33:29.000" data-start-seconds="1986">In any case, what we basically treated now is how responsive design works. The trick for creating a responsive design is using the meta viewport with &quot;device-width&quot;, telling the browser, &quot;OK, please optimize it for this specific device.&quot; Combine it with width media queries and that is basically it.</span></p>
      <p><span data-start="00:33:29.000" data-end="00:33:57.000" data-start-seconds="2009">This is the technical foundation of responsive design and you probably already knew that, but I hope in this presentation I've made clear why that is the case. Because it's pretty complicated on mobile but with this trick it just basically works, 99 percent of the time it basically works is enough but Fronteers is a rather high level conference and I want you to understand why this sort of stuff works. I hope you understand it a little better now.</span></p>
      <p><span data-start="00:33:57.000" data-end="00:34:14.000" data-start-seconds="2037">Thank you for your attention, I will put these slides online and then I think Chris is going to interview me now unless there are no questions at all. [applause]</span></p>
      <p><span data-start="00:34:14.000" data-end="00:34:27.000" data-start-seconds="2054">All right, thanks PPK. If the next speaker wants to set up as well and sell his Mac laptop, we can do that. Good, that was a lot.</span></p>
      <p><span data-start="00:34:27.000" data-end="00:34:31.000" data-start-seconds="2067">OK, it was. Yeah it's complicated but people need to understand this.</span></p>
      <p><span data-start="00:34:31.000" data-end="00:34:34.000" data-start-seconds="2071">Doesn't everybody just have an iPhone?</span> <span data-start="00:34:34.000" data-end="00:34:35.000" data-start-seconds="2074">No.</span></p>
      <p><span data-start="00:34:35.000" data-end="00:34:36.000" data-start-seconds="2075">OK.</span></p>
      <p><span data-start="00:34:36.000" data-end="00:34:37.000" data-start-seconds="2076">Do you have an iPhone</span> <span data-start="00:34:37.000" data-end="00:34:38.000" data-start-seconds="2077">No.</span></p>
      <p><span data-start="00:34:38.000" data-end="00:35:03.000" data-start-seconds="2078">Exactly. It's interesting in fact, how many of you people here have an iPhone? Androids? Oh, there are not so many Androids. Windows phone? Blackberry? Symbian? Ah, somebody with Symbian, oh that's cool. Any other kind of phone I haven't mentioned yet?</span></p>
      <p><span data-start="00:35:03.000" data-end="00:35:04.000" data-start-seconds="2103">Firefox OS?</span> <span data-start="00:35:04.000" data-end="00:35:06.000" data-start-seconds="2104">It's not out yet.</span></p>
      <p><span data-start="00:35:06.000" data-end="00:35:19.000" data-start-seconds="2106">OK. A few questions out there, especially for people who are asking, &quot;OK, this is all good, do you know any responsive framework that you would actually recommend?&quot;</span></p>
      <p><span data-start="00:35:19.000" data-end="00:35:30.000" data-start-seconds="2119">No, I do not. My problem is, I have never used a framework or JavaScript library, never ever in my entire life. [applause]</span></p>
      <p><span data-start="00:35:30.000" data-end="00:36:00.000" data-start-seconds="2130">OK, that's popular obviously. It means I do not follow the framework library market at all. It could be that we get a nice responsive framework, but I mean what's the point? You just have to create, I don't know, two, three, maybe five layouts. Set nice breakpoints with media queries and all that and I think it's too early still to start using frameworks and that gives you kind of answer.</span></p>
      <p><span data-start="00:36:00.000" data-end="00:36:17.000" data-start-seconds="2160">It's more like a time to ask questions now. &quot;OK, how do I make this best&quot; and it's best to actually create the site yourself. To say, &quot;OK, this doesn't work so I am going to remove the sidebar or put it at the bottom of the site, or whatever,&quot; and just figure it out, just monkey with the site.</span></p>
      <p><span data-start="00:36:17.000" data-end="00:36:23.000" data-start-seconds="2177">Actually I would not recommend using a responsive framework at all.</span></p>
      <p><span data-start="00:36:23.000" data-end="00:36:27.000" data-start-seconds="2183">OK, because you have enough time to write things from scratch every single time.</span></p>
      <p><span data-start="00:36:27.000" data-end="00:36:28.000" data-start-seconds="2187">Yes.</span></p>
      <p><span data-start="00:36:28.000" data-end="00:36:29.000" data-start-seconds="2188">There are some people that would have to deliver things quickly.</span></p>
      <p><span data-start="00:36:29.000" data-end="00:36:32.000" data-start-seconds="2189">Oh. That's a problem.</span></p>
      <p><span data-start="00:36:32.000" data-end="00:36:46.000" data-start-seconds="2192">OK. Their problem obviously. One thing that I've found, and your JavaScript solution is a great example, is there already a specification recommendation or are there discussions in the mailing lists about this?</span></p>
      <p><span data-start="00:36:46.000" data-end="00:36:57.000" data-start-seconds="2206">No. There is no specification for all of this, I basically figured it out myself and then I just started mailing browser vendors, &quot;OK, you must implement this now,&quot; and they actually obeyed me, which is kind of cool.</span></p>
      <p><span data-start="00:36:57.000" data-end="00:36:58.000" data-start-seconds="2217">Yep.</span></p>
      <p><span data-start="00:36:58.000" data-end="00:37:25.000" data-start-seconds="2218">What I said, I've got a couple of pages on my site quirksmode.org/mobile, you can find it there. They basically talk about window.innerWidth, and height, and viewports, and the JavaScript properties. Actually browser compatibility is getting better, and better, and better. I kind of get we're only a year away from a true compatibility across all modern mobile browsers.</span></p>
      <p><span data-start="00:37:25.000" data-end="00:37:35.000" data-start-seconds="2245">The Blackberry Dev group in the Netherlands asks how to start handling these insane large screens for mobile 1280x768 in responsive design?</span> <span data-start="00:37:35.000" data-end="00:37:38.000" data-start-seconds="2255">Well then you just show desktop site, right?</span> <span data-start="00:37:38.000" data-end="00:37:39.000" data-start-seconds="2258">Yeah, it seems to be.</span></p>
      <p><span data-start="00:37:39.000" data-end="00:38:02.000" data-start-seconds="2259">I would say, well OK I'm saying desktop site, but that's not really fair of course because we just have to think of it as a continuum. You say, &quot;OK I'm 320, we show basically a one column site. Then from 320 to 600 or whatever, we show two columns and above that we maybe show three columns, and on really large sizes above 1,024, we do something else.&quot;</span></p>
      <p><span data-start="00:38:02.000" data-end="00:38:24.000" data-start-seconds="2282">But it's a continuum. And we definitely should not say, &quot;OK, our site should look exactly like this on the desktop and exactly like that on this specific tablet.&quot; It's just a matter of responsive design, which includes, of course, a liquid layout, elastic layout, however they call it nowadays. That's the most important part.</span></p>
      <p><span data-start="00:38:24.000" data-end="00:38:39.000" data-start-seconds="2304">So I would say, if you have a really, really big device, you show the desktop website. And I don't care if it's a mobile device or a laptop or a desktop or whatever.</span></p>
      <p><span data-start="00:38:39.000" data-end="00:38:58.000" data-start-seconds="2319">It's very interesting, it seems like we have to duplicate our work continuously. And it's getting worse with high-DPI resolution systems. We don't even know what's coming in the Windows tablets, for example. Would it be sometimes to say, &quot;You know what? Just let it zoom and then people click on it&quot;?</span></p>
      <p><span data-start="00:38:58.000" data-end="00:39:11.000" data-start-seconds="2338">As you said, you have an overview the page and just what you want to have, you zoom into. That's the use case that most people are actually used to because our devices didn't do it. When did you say is it really worthwhile to go into the nitty-gritty of making the different layouts?</span></p>
      <p><span data-start="00:39:11.000" data-end="00:39:13.000" data-start-seconds="2351">Ooh, that's a good question.</span></p>
      <p><span data-start="00:39:13.000" data-end="00:39:14.000" data-start-seconds="2353">Thank you.</span></p>
      <p><span data-start="00:39:14.000" data-end="00:39:33.000" data-start-seconds="2354">First of all responsive design right now is a fashion. Just like Ajax was, I think Mark said exactly the same. Basically we have now a powerful new tool but everybody assumes that they have to use it all the time, which is not the case because what I'm thinking of is zoom based layout.</span></p>
      <p><span data-start="00:39:33.000" data-end="00:39:52.000" data-start-seconds="2373">I made a little example, I don't know, years ago. Basically like a newspaper, when you come on the site you see one main article plus a lot of other articles which are much smaller. So what you have to do is zoom in to the actual article that you want to read.</span></p>
      <p><span data-start="00:39:52.000" data-end="00:40:08.000" data-start-seconds="2392">I think actually that's going to be one of the next steps in web development. We are going to create zoom based interfaces. Where zooming is actually a crucial part of the interface, and not just something that you have to do because your screen is too small. Right?</span></p>
      <p><span data-start="00:40:08.000" data-end="00:40:15.000" data-start-seconds="2408">Which again brings me back to all those JavaScript properties, because if we're going to create zoom based sort of interfaces, we're really going to need them.</span></p>
      <p><span data-start="00:40:15.000" data-end="00:40:31.000" data-start-seconds="2415">It takes me back to when Geocities had the branding on the side that was positioned with JavaScript and on scrolling it always flickered and stuff. Seeing the processors in mobile phones, a JavaScript solution would have that problem, wouldn't it?</span></p>
      <p><span data-start="00:40:31.000" data-end="00:40:58.000" data-start-seconds="2431">Yes it would. That's why I'm also saying that you really should not use JavaScript libraries on mobile, because they just eat too much battery life and too much processing power. There was an interesting research done back in April, presented back in April, where they just took an Android device and measured its battery energy consumption when they loaded I think it was Wikipedia or something.</span></p>
      <p><span data-start="00:40:58.000" data-end="00:41:13.000" data-start-seconds="2458">That was huge because Wikipedia basically uses, I think jQuery for a simple accordion effect. Then they created a simple accordion effect just in 30 lines of JavaScript, as you can, and that markedly reduced the energy consumption of the site.</span></p>
      <p><span data-start="00:41:13.000" data-end="00:41:44.000" data-start-seconds="2473">That's what we are seeing right now, is that all the tools, all the client side tools that we've developed for desktop are just too heavy for mobile. Not only because of the processing power involved, but also because there is a finite battery life and as a user you're not happy if you go through three pages which eat up all your battery because the web developer thought, &quot;OK, I'll use six JavaScript libraries on the page.&quot; I think we should reconsider the use of JavaScript libraries, especially mobile.</span></p>
      <p><span data-start="00:41:44.000" data-end="00:41:53.000" data-start-seconds="2504">Well, a lot of JavaScript libraries are just there to simulate things that are now in CSS for the less enabled browsers, we don't mention names.</span></p>
      <p><span data-start="00:41:53.000" data-end="00:41:54.000" data-start-seconds="2513">No, we don't, but then you don't need it on mobile.</span></p>
      <p><span data-start="00:41:54.000" data-end="00:41:59.000" data-start-seconds="2514">Yeah, you don't have to on mobile so learning more CSS for the average JavaScript guy is a good idea?</span> <span data-start="00:41:59.000" data-end="00:42:21.000" data-start-seconds="2519">Yes. I mean we should, it's what Mark talked about with all the silos, right? You are a designer so you work in Photoshop and he is a developer so he works in something complicated and he types all kinds of things with brackets and stuff. You have to learn a little bit about each other's work and that's basically what we are getting here.</span></p>
      <p><span data-start="00:42:21.000" data-end="00:42:35.000" data-start-seconds="2541">Even if you're a CSS wizard and basically what you create is CSS, you should know a bit about HTML, about CSS, about interface design, graphic design and all kinds of stuff that you need. Not a lot, just a little bit.</span></p>
      <p><span data-start="00:42:35.000" data-end="00:42:49.000" data-start-seconds="2555">You hear a lot of truisms right now, and I've been ranting about this in a few of my talks when people talk about high density and retina displays on iPhones and and iPads. They say start with the retina picture then scale down on the other browsers.</span></p>
      <p><span data-start="00:42:49.000" data-end="00:43:15.000" data-start-seconds="2569">Completely ridiculous. Start with the simple picture, even maybe with a low source picture then scale up for retina displays. If the connection speed allows it, because even if you are on a retina iPad and you love seeing retina enhanced graphics, you do not like it so much when you're on 3G or even 2G out somewhere in the wild and you just want to download a website.</span></p>
      <p><span data-start="00:43:15.000" data-end="00:43:20.000" data-start-seconds="2595">You don't care about the retina optimized images, you just want to see the website.</span></p>
      <p><span data-start="00:43:20.000" data-end="00:43:25.000" data-start-seconds="2600">Should that be the job of the developer or should there be an image format that has different formats streaming...</span></p>
      <p><span data-start="00:43:25.000" data-end="00:43:40.000" data-start-seconds="2605">I love the whole thing with the picture element or whatever it is nowadays, I mean I want that. It is absolutely what we are going to need. You basically have to be able to specify several versions of your image-low source, normal and high res, something like that.</span></p>
      <p><span data-start="00:43:40.000" data-end="00:44:01.000" data-start-seconds="2620">Of course you have to be able to set ways of figuring out which ones to use. Currently I think they do it with media queries, right? But you should also factor in connection speed again. Again, if I'm on a retina iPad, that I'm somewhere in the bush-bush and there is only 2G connection available, I don't want high resolution images.</span></p>
      <p><span data-start="00:44:01.000" data-end="00:44:14.000" data-start-seconds="2641">I just want the site and maybe a low res image if it's fun or something. It doesn't depend only on screen size or even on retina displays, it also depends on connection speed, and that's where people don't realize enough nowadays.</span></p>
      <p><span data-start="00:44:14.000" data-end="00:44:15.000" data-start-seconds="2654">Bush-bush?</span> <span data-start="00:44:15.000" data-end="00:44:18.000" data-start-seconds="2655">Bush-bush.</span></p>
      <p><span data-start="00:44:18.000" data-end="00:44:19.000" data-start-seconds="2658">Did you find it on Apple Maps or...</span></p>
      <p><span data-start="00:44:19.000" data-end="00:44:24.000" data-start-seconds="2659">Yes I did. It was actually pretty, it's roughly here.</span></p>
      <p><span data-start="00:44:24.000" data-end="00:44:26.000" data-start-seconds="2664">OK, fair enough. Thank you very much PPK. [applause]</span></p>
      <p><span data-start="00:44:26.000" data-end="00:44:27.000" data-start-seconds="2666">Thank you.[applause]</span></p>
     </div>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>1</strong> comment</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <h3 class="extra">Comments</h3>
     <dl id="comments" class="reacties">
      <dt id="comment-110"><a href="#comment-110" class="number" id="latest-comment">1</a> Jiseung Roh on 14-06-2016 at 16:58 o'clock:</dt>
       <dd>This is the most amazing explanation about pixel stuffs. I was struggling to find out the all those concepts of device pixels, css pixel and dips but now it became pretty much clear. Thank you for this amazing lecture.</dd>
     </dl>
     <form method="post" action="/congres/2012/sessions/a-pixel-is-not-a-pixel-peter-paul-koch.md" id="comment">
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
