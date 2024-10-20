<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>Beyond simple transitions, with a pinch of JavaScript by Peter Nederlof · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p757">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>Beyond simple transitions, with a pinch of JavaScript by Peter Nederlof</h2>
     <video width="480" height="270" controls>
      <source src="/_downloads/2012/peter-nederlof-beyond-simple-transitions-with-a-pinch-of-javascript.webm" type="video/webm">
      <source src="/_downloads/2012/peter-nederlof-beyond-simple-transitions-with-a-pinch-of-javascript.mp4" type="video/mp4">
      <track src="/congres/2012/sessions/beyond-simple-transitions-with-a-pinch-of-javascript-peter-nederlof.vtt" default>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2012/peter-nederlof-beyond-simple-transitions-with-a-pinch-of-javascript.webm">download the video</a> (or the alternatives: <a href="/_downloads/2012/peter-nederlof-beyond-simple-transitions-with-a-pinch-of-javascript.mp4">1</a>) and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="https://vimeo.com/53317255">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2012/peter-nederlof-beyond-simple-transitions-with-a-pinch-of-javascript.webm">Download video</a> (WebM, 103MB)</li>
      <li><a href="/_downloads/2012/peter-nederlof-beyond-simple-transitions-with-a-pinch-of-javascript.mp3">Download audio</a> (MP3, 42MB)</li>
     </ul>
     <h3>Transcript</h3>
     <div class="transcript">
      <p><span data-start="00:00:09.000" data-end="00:00:23.000" data-start-seconds="9">...it's when you watch a television show and there's a second screen with it and you can play along with the game, answer questions. One of the second screens we made is this one.</span></p>
      <p><span data-start="00:00:23.000" data-end="00:00:42.000" data-start-seconds="23">Last month, we had elections here in the Netherlands, and you could play along via your phone or via an iPad. This was all developed in HTML5, of course. It was one version for both the iPad and the phone.</span></p>
      <p><span data-start="00:00:42.000" data-end="00:00:59.000" data-start-seconds="42">But one thing that's really cool and why I'm showing this is what my boss told me afterwards of the statistics. You always have these exit polls, and they tell you like, &quot;This part is going to win or this party is going to win&quot;.</span></p>
      <p><span data-start="00:00:59.000" data-end="00:01:14.000" data-start-seconds="59">One of the questions was &quot;Wie was het sterkst in de eerste ronde van het debat?&quot; Now this is not the screen of the debate of the fourth of September, but at the end, they asked &quot;Who do you think is the winner of the debate?&quot;</span> <span data-start="00:01:14.000" data-end="00:01:40.000" data-start-seconds="74">There were four party leaders among them, actually these four I believe, and the outcome of this poll was the most exact outcome, closest to the actual outcome of the elections. No poll actually got as close as we got with this second screen, which I think is pretty awesome.</span></p>
      <p><span data-start="00:01:40.000" data-end="00:02:04.000" data-start-seconds="100">So transitions, this is what I want to talk about. First a brief recap of transition and transformation properties. My guess is everybody has at least worked somewhat with transitions and transformations. Is there anyone who hasn't by a show of hands? I see some hands, but fortunately not too many.</span></p>
      <p><span data-start="00:02:04.000" data-end="00:02:25.000" data-start-seconds="124">Then what I actually propose to do is to animate everything with transitions, so not just using them a little bit but using them for everything you can possibly think of. Of course, there is a problem with that. That's what this talk is about, and I found the solution to it. I would like to show some demos and then some closing thoughts.</span></p>
      <p><span data-start="00:02:25.000" data-end="00:02:46.000" data-start-seconds="145">So to begin with, about vendor prefixes, I'm not going to talk about vendor prefixes. I get that you know that you have to use vendor prefixes for most transformation and transition properties, so I'm just not going to name them. Imagine these were there.</span></p>
      <p><span data-start="00:02:46.000" data-end="00:03:22.000" data-start-seconds="166">Also all JavaScript demos or JavaScript code examples in this session are going to be native JavaScript only. I'm not using any libraries for this. Good. Please work. Brief recap, transformations, butterflies. These are known, this is translate and it translates an element over a given distance. Great, is that...it's kind of distorted. Well, it doesn't matter.</span></p>
      <p><span data-start="00:03:22.000" data-end="00:03:32.000" data-start-seconds="202">Another one, scale, probably known scale X, scale Y. You can use short hands. You can use dual scale, something like that.</span></p>
      <p><span data-start="00:03:32.000" data-end="00:03:58.000" data-start-seconds="212">Rotate is awesome too in degrees. I thought that it also worked in radians, but somehow it doesn't. Now as a coder, and I love math, I would love to rotate stuff in radians. I don't know, something happened or didn't happen. That's a simple rotation. Of course, there's skew and skews it. As Lea Verou</span></p>
      <p><span data-start="00:03:58.000" data-end="00:04:14.000" data-start-seconds="238">showed yesterday, you can skew and unskew and nest elements and make all kinds of cool stuff. Skew, skew, skew, skew.</span></p>
      <p><span data-start="00:04:14.000" data-end="00:04:32.000" data-start-seconds="254">And, of course, you can combine transformations into one property and they'll all be applied consecutively. So the order matters. If you do one thing before the other, the outcome changes. That's a transformation combined.</span></p>
      <p><span data-start="00:04:32.000" data-end="00:04:52.000" data-start-seconds="272">My personal favorite, of course, is the matrix. The matrix takes six properties. It's scale, skew, and translate. There's no rotation in there because rotation is basically a combination of two skews and two scales.</span></p>
      <p><span data-start="00:04:52.000" data-end="00:05:16.000" data-start-seconds="292">That might look something like this. Now these properties are mostly used internally by your browser. I don't think anyone does this kind of stuff. Does this work? Yeah, it works. Does anyone know if there are pointers with another color than red because I am color blind, and I cannot see that pointer. [laughter]</span></p>
      <p><span data-start="00:05:16.000" data-end="00:05:20.000" data-start-seconds="316">I have to look very closely, then I can see it.</span></p>
      <p><span data-start="00:05:20.000" data-end="00:05:21.000" data-start-seconds="320">There are green ones.</span></p>
      <p><span data-start="00:05:21.000" data-end="00:05:29.000" data-start-seconds="321">There are green ones. Green is not good either. [laughter]</span></p>
      <p><span data-start="00:05:29.000" data-end="00:05:52.000" data-start-seconds="329">I don't think anybody does these, writes these manually. So about a year ago I made a little tool for that. Probably some of you might have seen that. It's a lovely tool. It allows you to move around an element, and it shows you the matrix code that goes along with it.</span></p>
      <p><span data-start="00:05:52.000" data-end="00:06:16.000" data-start-seconds="352">So I can rotate this element, and it gives me the matrix. Rotate it back. I can move it around a little, skew, and scale. And it gives me the matrix that is the CSS matrix. It's a funny little tool. I use it from time to time.</span></p>
      <p><span data-start="00:06:16.000" data-end="00:06:34.000" data-start-seconds="376">Great! Those were 2D transformation properties. Of course, there is also the 3D variance. 3D basically adds a Z axis transformation along with all the X and Y transform properties except for skew.</span></p>
      <p><span data-start="00:06:34.000" data-end="00:06:59.000" data-start-seconds="394">Skew in 2D obviously does something like this, but in 3D, I'd expect a Z skew to do something like this. I don't know why it's omitted. I don't know if it's in the spec actually. Does anyone know if there's a skew Z in the spec? No? OK. But it's missing.</span></p>
      <p><span data-start="00:06:59.000" data-end="00:07:05.000" data-start-seconds="419">I'm not going to go over all the properties. 3D is basically like 2D but then it's really...</span></p>
      <p><span data-start="00:07:05.000" data-end="00:07:15.000" data-start-seconds="425">3D also has the 4x4 homogenous transformation matrix of 16 values in column major order. Have fun with that.</span></p>
      <p><span data-start="00:07:15.000" data-end="00:07:28.000" data-start-seconds="435">This is a quote from, I don't think it's readable, Webkit.org. It looks a bit like this. It does something like that.</span></p>
      <p><span data-start="00:07:28.000" data-end="00:07:58.000" data-start-seconds="448">Just like the 2D matrix, this matrix is mostly an internal value. You can do really cool stuff with that, and, actually, I'm going to do some real cool stuff with that. But, of course, you're not going to write this manually. You're going to make tools for this.</span></p>
      <p><span data-start="00:07:58.000" data-end="00:08:17.000" data-start-seconds="478">3D also has several other properties. Of course, you need perspective to show anything in 3D. Perspective origin allows you to kind of shift your perspective, and that is in respect to the original elements box.</span></p>
      <p><span data-start="00:08:17.000" data-end="00:08:32.000" data-start-seconds="497">So if you have 100x100 pixel box and you move it backwards, the perspective origin allows you to shift the perspective in regards to the original 100x100 box. You'd have to see it.</span></p>
      <p><span data-start="00:08:32.000" data-end="00:08:59.000" data-start-seconds="512">Transformation style is the flat versus preserve 3D variant. It's a really handy property when you need it, but I'm not going to really go into depth about that. Backface visibility obviously allows you to define whether backface is visible or not. OK?</span></p>
      <p><span data-start="00:08:59.000" data-end="00:09:20.000" data-start-seconds="539">Those were the transformations. Also I wanted to do a brief recap of transitions which we have also seen yesterday. Transition is defined over a property with a given duration, has easing or timing, whatever you'd like to call it, and a possible delay.</span></p>
      <p><span data-start="00:09:20.000" data-end="00:09:32.000" data-start-seconds="560">Single transition is just a single transition. If you want to define multiple transitions, you can just separate them with a comma. It's straightforward.</span></p>
      <p><span data-start="00:09:32.000" data-end="00:09:51.000" data-start-seconds="572">A typical transition would use a hover. This is a very simple hover transition over a beautiful div with a drop shadow. It scales it to 1.25, it's original size.</span></p>
      <p><span data-start="00:09:51.000" data-end="00:10:14.000" data-start-seconds="591">One funny thing to notice is that default easing is actually not linear, which I would have expected it to be because linear is, I don't know, linear is linear. But if you have an undefined easing, it actually does an ease in and an ease out.</span></p>
      <p><span data-start="00:10:14.000" data-end="00:10:55.000" data-start-seconds="614">So if you're doing anything code-wise with a transition and easing you really should not forget to specify easing. For instance, imagine you have a progress bar or a timer bar and it performs an animation via transition and you forgot to specify the easing, you're going to have a progress bar with ease in and ease out. That obviously makes no sense. So don't forget easing. It's a really cool effect.</span></p>
      <p><span data-start="00:10:55.000" data-end="00:11:10.000" data-start-seconds="655">Delays too are funny. We saw some examples using delays yesterday. This is a really simple one. It does a fade in, and it does a rotate. Then it does a rotate and a fade out. That's basically your trick, switching which transition goes first.</span></p>
      <p><span data-start="00:11:10.000" data-end="00:11:29.000" data-start-seconds="670">The confusing thing is that derp has initial transition on transform with no delay and a half second duration and opacity has the half a second delay, but it performs the fade in first.</span></p>
      <p><span data-start="00:11:29.000" data-end="00:11:52.000" data-start-seconds="689">That is because as soon as you hover, the new delay is applied first and then the transition is performed. So, again, just like easing, you have to take a little bit of care when you're using delays.</span></p>
      <p><span data-start="00:11:52.000" data-end="00:12:14.000" data-start-seconds="712">Good, animating things. Well, I really love to animate everything. If there is something that can be animated, I typically do it. I've done DHTML games, moving divs around, canvas implementations, playing with pixels, all kinds of stuff.</span></p>
      <p><span data-start="00:12:14.000" data-end="00:12:41.000" data-start-seconds="734">So when it comes to animating things, I basically think there are two kinds of animations. You have your static animations that go from A to B like a mouse over that does scale or a movement from some place to another. A and B are defined, are fixed, and those are easy because most of these transitions you can do with CSS, with a simple transition and a hover where a class will change.</span></p>
      <p><span data-start="00:12:41.000" data-end="00:12:58.000" data-start-seconds="761">Then aside from that there are dynamic animations. Dynamic animations mostly follow some kind of user interaction. It's like you're dragging, you drag and drop something around, you're doing something with inertia.</span></p>
      <p><span data-start="00:12:58.000" data-end="00:13:17.000" data-start-seconds="778">As you see, I think I'm the only speaker that has a Windows laptop. I hope I'm not the only one present with a Windows laptop. Two, three, four, oh back in there too. Thank God I'm not alone, upstairs too.</span></p>
      <p><span data-start="00:13:17.000" data-end="00:13:33.000" data-start-seconds="797">I also don't have an iPhone, but I really love the scroll thingy. When you scroll, you get this beautiful scroll bar. As you pull it out if you pull too far, the scroll bar becomes smaller. When you let go, it bounces back. It's a really cool effect.</span></p>
      <p><span data-start="00:13:33.000" data-end="00:14:03.000" data-start-seconds="813">That's an example of dynamic animation. There may be a defined starting point, but there is no defined end point. Or there may be a defined ending point and there's no defined starting point. There are no variables in CSS, so you cannot define that with CSS alone. So some JavaScript is still required.</span></p>
      <p><span data-start="00:14:03.000" data-end="00:14:33.000" data-start-seconds="843">Most of these animations are based on JavaScript in some way. So they might use a library. They might use some kind of made shell script. You basically plot every frame where the element moves at a given time. This is a lot of work. You could make a lot of mistakes doing that. They're unpredictable by nature, and that's the A versus B remark.</span></p>
      <p><span data-start="00:14:33.000" data-end="00:14:44.000" data-start-seconds="873">They may use transformations. In fact I would say you should use transformations, of course, but they probably don't use transitions because you cannot enter variables.</span></p>
      <p><span data-start="00:14:44.000" data-end="00:15:08.000" data-start-seconds="884">Couldn't these animations too use transitions? That is what I ask myself. There are really great benefits to using transitions.</span></p>
      <p><span data-start="00:15:08.000" data-end="00:15:31.000" data-start-seconds="908">For one, the CSS animation interface, it is a complete animation engine. I really don't want to write easing equations. I have done so. I know a couple of them. But if I don't have to, I don't want to write easing equations.</span></p>
      <p><span data-start="00:15:31.000" data-end="00:16:00.000" data-start-seconds="931">So this is a complete animation engine, and if I could use the easing equations from CSS, that would be really awesome. So no per frame script calculations. When you start out animating stuff, you typically use a time out or an interval. You add several pixels to the distance in regard to the last step. That is your next step.</span></p>
      <p><span data-start="00:16:00.000" data-end="00:16:24.000" data-start-seconds="960">But when things evolve and it becomes more complex, you need time based animations. It starts at a certain point. It has a given velocity, and after two seconds or so it has to be somewhere or two seconds is your duration and you don't know how many frames you're going to have to render that thing. So that's pretty complex stuff. If CSS can do that for me, that would be awesome.</span></p>
      <p><span data-start="00:16:24.000" data-end="00:16:34.000" data-start-seconds="984">It's already optimized. Per frame calculations are, perhaps, on a desktop computer running Chrome on a JIT compiler or script engine.</span></p>
      <p><span data-start="00:16:34.000" data-end="00:16:54.000" data-start-seconds="994">That's all really awesome, but on a mobile phone if I'm going to do per frame calculations for all my animations, it's going to stutter like hell. It's going to drain the battery. That's really terrible stuff. Why would you want to use 3D transitions, 3D transitions in particular or transitions at all?</span></p>
      <p><span data-start="00:16:54.000" data-end="00:17:14.000" data-start-seconds="1014">Transitions don't cause reflows of elements. If you animate a width or a height property, it's going to trigger a reflow, and the browser has to rerender the element. This goes for most properties in CSS. I believe, actually, all of them. I'm not sure.</span></p>
      <p><span data-start="00:17:14.000" data-end="00:17:31.000" data-start-seconds="1034">Transitions, they don't actually cause these reflows. Aside from that, they are hardware accelerated so you get lots of frames per second. They are also hardware accelerated on mobiles.</span></p>
      <p><span data-start="00:17:31.000" data-end="00:17:55.000" data-start-seconds="1051">I don't know how many of you have done animations on, for instance, an older iPad. But if you do a transition of a width or a height property on an old iPad, say an iPad 1, it's going to be stuttery and, well, you don't want that. Even the iPad 1 already supports these 3D CSS properties.</span></p>
      <p><span data-start="00:17:55.000" data-end="00:18:11.000" data-start-seconds="1075">As I said, it's battery friendly, and it's actually pretty widely supported. The only browser really not supporting these transitions is Internet Explorer, but it's going to catch up with version 10.</span></p>
      <p><span data-start="00:18:11.000" data-end="00:18:42.000" data-start-seconds="1091">This talk is not specifically about what browsers support or what they don't support, so I'm not really considering this. If I want to do dynamic animations using CSS transformations, there is a huge problem. The transitions cannot be stopped at a current position.</span></p>
      <p><span data-start="00:18:42.000" data-end="00:18:56.000" data-start-seconds="1122">So I made this beautiful image. Imagine I have some kind of div element. I'm dragging it around, and when I let go, I want it to have a moment of inertia, that it comes to a halt over a given time, say one or two seconds.</span></p>
      <p><span data-start="00:18:56.000" data-end="00:19:24.000" data-start-seconds="1136">This is fine, and I could write some script that finds out what the velocity is of when I was moving my mouse, but during that moment of inertia, if that were to be a CSS transition, there would be no way to actually pick it up halfway and move it somewhere else, because it's currently running a transition, and it has only a starting point and an ending point.</span></p>
      <p><span data-start="00:19:24.000" data-end="00:19:38.000" data-start-seconds="1164">I don't know where it is, I don't know how to stop it, so I need some kind of way to interrupt a running transition.</span></p>
      <p><span data-start="00:19:38.000" data-end="00:20:06.000" data-start-seconds="1178">How would you go about doing that? There is a JavaScript way to query the current property value of an element. And it's called Get Computed Style. This is probably well known. Who's ever used this? Quite some hands.</span></p>
      <p><span data-start="00:20:06.000" data-end="00:20:33.000" data-start-seconds="1206">Computed Style gives you the computed style of an element, and you can request the current property value of an element. If I have an element, and this element has two transitions, it can either move to the right with an ease out, or it can move to the left with an ease out.</span></p>
      <p><span data-start="00:20:33.000" data-end="00:20:56.000" data-start-seconds="1233">Behind this is a little script, and the script outputs the current value of the transformation using the requestAnimationFrame callback.</span></p>
      <p><span data-start="00:20:56.000" data-end="00:21:17.000" data-start-seconds="1256">Wow. This is funny, because I defined the transition on transformation, and there is nowhere, no place that I defined the matrix to be used, and still it returns a matrix.</span></p>
      <p><span data-start="00:21:17.000" data-end="00:21:45.000" data-start-seconds="1277">This is actually funny, because if it returns a matrix, then in theory, I could request the property, and at a given time, just apply that current value to the element. And then in theory, it should actually stop. That's the plan of attack, query the current transform value and assign it.</span></p>
      <p><span data-start="00:21:45.000" data-end="00:22:13.000" data-start-seconds="1305">These are the first lines from before, querySelector (&quot;#derp&quot;), window.getComputedStyle (derp), and the current transform is (computed.getPropertyValue('transform')). Obviously it should say WebKit here if you want it to run in WebKit. Then at the point where I want to stop the transition, I should remove the transition property.</span></p>
      <p><span data-start="00:22:13.000" data-end="00:22:36.000" data-start-seconds="1333">If I would do nothing else than remove the transition property, the element would just to its final destination, to the B point. But if I immediately set the current property transform to that property that I requested, then it should actually stop at the point it currently is.</span></p>
      <p><span data-start="00:22:36.000" data-end="00:23:20.000" data-start-seconds="1356">Here again, we've got the same box and it moves to the right and it moves to the left. It should actually stop. Wow. This enables everything. From this point on, you can just interrupt a running transition, and make it do other stuff. It doesn't seem like much. I'm just stopping a moving box, but it is CSS and some JavaScript only.</span></p>
      <p><span data-start="00:23:20.000" data-end="00:24:06.000" data-start-seconds="1400">That's all theory, of course. We have to try this. One example is a draggable element, and when I let go, it takes the current velocity and comes to a halt with an ease out. I didn't do any animation coding for this. It's just some script tracking my mouse. When I mouse down, I can pick it up, move it. It finds out the velocity at which I was moving, and when I let go, it constructs a CSS transition which is applied immediately to moving element.</span></p>
      <p><span data-start="00:24:06.000" data-end="00:24:40.000" data-start-seconds="1446">Not only that, when I'm moving it, I can stop it by just picking it up again. We've all seen this before, it's just a movable element with inertia and some dragging, but it's completely animated via CSS. There's no more animation script in this. If you do this on a mobile phone, it's going to be battery friendly, it's going to be hardware accelerated, and it's fully interactive.</span></p>
      <p><span data-start="00:24:40.000" data-end="00:25:20.000" data-start-seconds="1480">Great! Now it's 2D. When I made this demo about a year ago, I also made a 2D matrix implementation in JavaScript, which allows you to rotate and scale and all the transformations that CSS allows, you can also do those with a bit of JavaScript. The end result of the matrix, you could request the string value and apply it to the element.</span></p>
      <p><span data-start="00:25:20.000" data-end="00:25:51.000" data-start-seconds="1520">As I am rotating this, there is a script. It transforms a matrix implementation in JavaScript, which is then finally outputted to the element. That year ago, I remember that Simurai, who is, I believe, sitting over there, tweeted me, &quot;That is really great. Now try the 3D matrix for that.&quot; Am I right?</span></p>
      <p><span data-start="00:25:51.000" data-end="00:25:52.000" data-start-seconds="1551">Yeah.</span></p>
      <p><span data-start="00:25:52.000" data-end="00:26:14.000" data-start-seconds="1552">Yeah. [laughs] So, I figured, if querying the current 2D transformation value and applying it works in 2D space, would that also work in 3D space?</span></p>
      <p><span data-start="00:26:14.000" data-end="00:27:00.000" data-start-seconds="1574">That would allow me to make fully interactive 3D whatever. It doesn't matter. They could be completely run using CSS animations or transitions. I made one too. What this does...this is a beautiful cube and this is the view from the front. There is an entire cube. It works the same way as the little element from before. I can pick it up and move it. When I stop moving, it has a moment of inertia. It keeps rotating.</span></p>
      <p><span data-start="00:27:00.000" data-end="00:27:37.000" data-start-seconds="1620">At any given time that I want, I can pick it up again and remove it. This goes around. If I give it a little bit of a push, it moves. It doesn't matter when I let it go or when I pick it up. It just is a beautiful, moving cube. [applause]</span></p>
      <p><span data-start="00:27:37.000" data-end="00:28:11.000" data-start-seconds="1657">This is all running on CSS transitions. There is not a single line of animation script used in this. The only script that I used is for interaction. Behind this, just like the 2D one, is a 4x4 matrix implementation, allowing 3D transformations. So, I can pick up...it's in the next slide, actually.</span></p>
      <p><span data-start="00:28:11.000" data-end="00:29:01.000" data-start-seconds="1691">I can pick up the transformation value, which returns that huge string of 3D matrix stuff. I parse it into a 4x4 matrix implementation. Then I can use JavaScript calls to rotate it, scale it, move it, or whatever. This is also on Github, so the only thing I have to add is the parse method. I'll have to update it. This is pretty much ta-da code, so it is there. No alt up. I hate Windows. I didn't say that. [laughter]</span></p>
      <p><span data-start="00:29:01.000" data-end="00:29:08.000" data-start-seconds="1741">Should I get a Mac? Yeah? No? Who said that? [laughs]</span> <span data-start="00:29:08.000" data-end="00:29:10.000" data-start-seconds="1748">Marcin is selling his.</span></p>
      <p><span data-start="00:29:10.000" data-end="00:29:11.000" data-start-seconds="1750">Who is selling whose?</span> <span data-start="00:29:11.000" data-end="00:29:13.000" data-start-seconds="1751">The one that fell and [inaudible].</span></p>
      <p><span data-start="00:29:13.000" data-end="00:29:22.000" data-start-seconds="1753">Hmm. One other thing and I don't know if it's visible actually, because there is a bit of a reflection here...is it visible?</span></p>
      <p><span data-start="00:29:22.000" data-end="00:29:25.000" data-start-seconds="1762">No. We trust you.</span></p>
      <p><span data-start="00:29:25.000" data-end="00:29:48.000" data-start-seconds="1765">OK. That is -webkit-box-reflect. I don't know if you know that property. -webkit-box-reflect lets you do iOS style reflections. Of course, they are beautiful. It just turns out that it also works for 3D transformations. Below this cube is a reflected, rotating cube via -webkit-box-reflect.</span></p>
      <p><span data-start="00:29:48.000" data-end="00:30:01.000" data-start-seconds="1788">It should be visible. There is a bit of a thing here. But maybe only I can see that.</span></p>
      <p><span data-start="00:30:01.000" data-end="00:30:21.000" data-start-seconds="1801">Great! There are some things to keep in mind. Querying CSS properties doesn't always work. We had some issues on, for instance, Android, with inherited properties like fonts and colors. What it returns is an empty string. I didn't really look into that.</span></p>
      <p><span data-start="00:30:21.000" data-end="00:30:29.000" data-start-seconds="1821">But, basically, you will probably have to bubble up into the DOM and try requesting the property, until you get something.</span></p>
      <p><span data-start="00:30:29.000" data-end="00:31:06.000" data-start-seconds="1829">Another issue is that the transitionEnd event is not fired, when you interrupt a transition, by assigning its current value. So, if you depend on transitionEnd, which also works in pretty much all browsers, you have to consider that. Of course, assigning styles via the JavaScript API has very high specificity. So, if you have default failures in your CSS, you are going to overwrite them and the CSS is probably going to be lost.</span></p>
      <p><span data-start="00:31:06.000" data-end="00:31:37.000" data-start-seconds="1866">Once you start assigning stuff via JavaScript, you will probably have to continue assigning stuff via JavaScript, and no longer depend on your CSS for, for instance, class names or so, although, some time ago, it appeared that 256 class names overspecify an ID. It was some weird bug.</span></p>
      <p><span data-start="00:31:37.000" data-end="00:32:09.000" data-start-seconds="1897">I don't know why I put this here actually. I believe, if you remove a property from the style member from an element directly, it becomes empty and it reverts back to the style sheet property. So there is a way to work around specificity issue. It also works if you empty the property, so not remove property but set value to empty.</span></p>
      <p><span data-start="00:32:09.000" data-end="00:32:32.000" data-start-seconds="1929">So what about fall backs? Of course, this does not work in any version of Internet Explorer. It's going to work in IE10 presumably. If this is really important to you, you could use a fall back using left and top properties. Of course, you cannot do that for 3D, so 3D is going to revert to 2D. But this is really all fine.</span></p>
      <p><span data-start="00:32:32.000" data-end="00:32:47.000" data-start-seconds="1952">I think if you're making a website or an application and it runs on either desktop and it's also available on your iPad and on your iPhone, the environment in which it runs defines which technologies you can use.</span></p>
      <p><span data-start="00:32:47.000" data-end="00:33:03.000" data-start-seconds="1967">It's fine to use 3D transforms on an iPad. In fact, I would want to encourage you to do so. It doesn't matter that it doesn't work in Internet Explorer because you can use other effects in a desktop version of your app. So otherwise, if you don't have to rely on fall backs, just use them as progressive enhancements. Actually, they're a lot of fun to play with. That's the main reason for me doing these kinds of things. It's just fun. Mathias </span></p>
      <p><span data-start="00:33:03.000" data-end="00:33:36.000" data-start-seconds="1983">likes to read specs, and I too read specs, but I also like math. So in my spare time, I do stuff with math. I don't know.</span></p>
      <p><span data-start="00:33:36.000" data-end="00:34:24.000" data-start-seconds="2016">Finally, convince your client or project manager that this is OK. We all have the knowledge that we should use progressive enhancements. We know the technologies, but we are the ones that need to convince the people deciding things or selling things or creative people making beautiful designs. We have to tell them what we can do for them. That's our job. That was it. [applause]</span></p>
      <p><span data-start="00:34:24.000" data-end="00:34:41.000" data-start-seconds="2064">I think next time we'll give you a bottle of water. I think there were like three breaks going over there. Interesting, I found that the end transition not firing, I think that's by design, isn't it? I wouldn't call it a bug at all.</span></p>
      <p><span data-start="00:34:41.000" data-end="00:34:44.000" data-start-seconds="2081">I think so, yeah, yeah.</span></p>
      <p><span data-start="00:34:44.000" data-end="00:34:55.000" data-start-seconds="2084">Did you find, then, in general, cause transitionEnd and transitionStart also gives you a time stamp. Is that something that could be used for that as well without having to interrupt the transition at all?</span></p>
      <p><span data-start="00:34:55.000" data-end="00:34:57.000" data-start-seconds="2095">How do you mean?</span> <span data-start="00:34:57.000" data-end="00:35:18.000" data-start-seconds="2097">TransitionStart and transitionEnd has a property in between which is a time stamp of the animation, so on click you could say &quot;where would it be in between beginning and end&quot; and things like that. Let's do it on Github, don't worry about it. I like events, but I've found that transition events are not firing reliably.</span></p>
      <p><span data-start="00:35:18.000" data-end="00:35:19.000" data-start-seconds="2118">No.</span></p>
      <p><span data-start="00:35:19.000" data-end="00:35:36.000" data-start-seconds="2119">I don't even use them. OK, the transitionStart even also coincides with interaction in some way, so you already have a click or a mouse over or something. You know when the transition starts because you trigger it. The only thing you don't know is when it ends.</span></p>
      <p><span data-start="00:35:36.000" data-end="00:35:44.000" data-start-seconds="2136">The point is not waiting until ends but interrupting it in the middle, and there is no event for that.</span></p>
      <p><span data-start="00:35:44.000" data-end="00:36:01.000" data-start-seconds="2144">Cool. So in terms of syntax, you said you're a person that likes math. I always find that CSS transition and CSS animation syntax, especially the order of it, that it can be arbitrary...</span></p>
      <p><span data-start="00:36:01.000" data-end="00:36:02.000" data-start-seconds="2161">Yeah.</span></p>
      <p><span data-start="00:36:02.000" data-end="00:36:06.000" data-start-seconds="2162">...and the order defines itself by the value of the property. That seems to be orders of JavaScript developer.</span></p>
      <p><span data-start="00:36:06.000" data-end="00:36:17.000" data-start-seconds="2166">Yeah, it's like the demo that Lea Verou showed yesterday of the smiley face that didn't rotate but it rotated because it rotated against the other rotation.</span></p>
      <p><span data-start="00:36:17.000" data-end="00:36:19.000" data-start-seconds="2177">Yeah.</span></p>
      <p><span data-start="00:36:19.000" data-end="00:36:48.000" data-start-seconds="2179">If you rotate something and then translate it, that is something different from first translating it and then rotating. You're changing the point from where you're transforming it. Maybe it's hard to understand or it's difficult or it's in some unpredictable or something, but more than that, it's actually a powerful tool.</span></p>
      <p><span data-start="00:36:48.000" data-end="00:36:56.000" data-start-seconds="2208">I really like it that the order in which I define transformations gives a different result, and that's the same thing that matrixes do anyway.</span></p>
      <p><span data-start="00:36:56.000" data-end="00:37:01.000" data-start-seconds="2216">It just feels odd the first few times that you have to remember it.</span></p>
      <p><span data-start="00:37:01.000" data-end="00:37:02.000" data-start-seconds="2221">Yeah.</span></p>
      <p><span data-start="00:37:02.000" data-end="00:37:06.000" data-start-seconds="2222">But at the same time, it supposedly doesn't matter which order it's in.</span></p>
      <p><span data-start="00:37:06.000" data-end="00:37:30.000" data-start-seconds="2226">There are things like we don't exactly know how it works so we shun away from it or it's somehow scary. I think that is the wrong way to look at things. It may work differently based on how you write it, and there's a reason for that. There's a very good reason for that. What we need to do is find out what that reason is and just understand it.</span></p>
      <p><span data-start="00:37:30.000" data-end="00:37:38.000" data-start-seconds="2250">Yeah, I like the matrix transformation tool because I did this CSS 3D transformation animation tool as well for myself to understand what's going on.</span></p>
      <p><span data-start="00:37:38.000" data-end="00:37:39.000" data-start-seconds="2258">Yeah.</span></p>
      <p><span data-start="00:37:39.000" data-end="00:37:41.000" data-start-seconds="2259">It is really the best way of learning something, isn't it?</span> <span data-start="00:37:41.000" data-end="00:37:42.000" data-start-seconds="2261">Yeah.</span></p>
      <p><span data-start="00:37:42.000" data-end="00:37:49.000" data-start-seconds="2262">Because you know the syntax is annoying. You might as write a code editor for you to do it.</span></p>
      <p><span data-start="00:37:49.000" data-end="00:37:52.000" data-start-seconds="2269">Yeah, that's how tools come to be.</span></p>
      <p><span data-start="00:37:52.000" data-end="00:38:12.000" data-start-seconds="2272">I found one thing that really annoys me about Chrome especially, and I think it's just...I don't know why it's on design or not. Like when I do a transition on something or an animation on something and I load the page, it starts from where the normal flow is to the first stage. It does a transformation before I actually say do one.</span></p>
      <p><span data-start="00:38:12.000" data-end="00:38:13.000" data-start-seconds="2292">Yeah.</span></p>
      <p><span data-start="00:38:13.000" data-end="00:38:14.000" data-start-seconds="2293">Is there any way to avoid this?</span> <span data-start="00:38:14.000" data-end="00:38:16.000" data-start-seconds="2294">To get the transition?</span> <span data-start="00:38:16.000" data-end="00:38:25.000" data-start-seconds="2296">To stop it from animating from undefined to the first defined state when I just put a transition all on something.</span></p>
      <p><span data-start="00:38:25.000" data-end="00:38:30.000" data-start-seconds="2305">I should see that issue. I don't...do you have an example.</span></p>
      <p><span data-start="00:38:30.000" data-end="00:38:34.000" data-start-seconds="2310">Not here, on my desktop. [laughs] We can do that later as well.</span></p>
      <p><span data-start="00:38:34.000" data-end="00:38:47.000" data-start-seconds="2314">There are some issues with transitions like it's really hard to do an onload transition just when loading a page without JavaScript. You need some kind of trigger to trigger the transition like hover or something.</span></p>
      <p><span data-start="00:38:47.000" data-end="00:38:56.000" data-start-seconds="2327">Yeah, well, it's the other way around actually. Sometimes when there's non defined, it still animates to the first state of the page as it is when you do a transition in it.</span></p>
      <p><span data-start="00:38:56.000" data-end="00:38:57.000" data-start-seconds="2336">That's really weird.</span></p>
      <p><span data-start="00:38:57.000" data-end="00:39:08.000" data-start-seconds="2337">Yeah, it is. How do you find about performance? You said, &quot;This is better for performance. This is better for battery life&quot;. Do you do some excessive testing on that? Do you have a test harness for it? Do you try it out by hand?&quot;</span></p>
      <p><span data-start="00:39:08.000" data-end="00:39:20.000" data-start-seconds="2348">We just try it out by hand. The cube also works on an iPad, so you can just drag it around and it rotates and stuff. The demo is not completely finished, but I'm going to finish it and put it online so everybody can play with it.</span></p>
      <p><span data-start="00:39:20.000" data-end="00:39:39.000" data-start-seconds="2360">That's a good idea. Flickr, their iPad HTML5 version, they basically found that dragging images when you do a navigation left and right, that image elements were much, much slower than divs with background image and then translation was must faster than changing the X and Y.</span></p>
      <p><span data-start="00:39:39.000" data-end="00:39:40.000" data-start-seconds="2379">Yeah, yeah.</span></p>
      <p><span data-start="00:39:40.000" data-end="00:39:45.000" data-start-seconds="2380">That's normally the case, that the 3D acceleration kicks in with translate?</span> <span data-start="00:39:45.000" data-end="00:39:54.000" data-start-seconds="2385">Yeah. I try to do everything with these 3D translations because the performance is so, so amazing.</span></p>
      <p><span data-start="00:39:54.000" data-end="00:39:58.000" data-start-seconds="2394">So you would say it's better than going with the old top and left style which is much easier to understand?</span> <span data-start="00:39:58.000" data-end="00:40:03.000" data-start-seconds="2398">Yeah, don't use left and top. [laughs]</span></p>
      <p><span data-start="00:40:03.000" data-end="00:40:17.000" data-start-seconds="2403">What do you think is still missing? Have you played with richer environments like Flash and saw animation things in there that are not possible in JavaScript yet?</span> <span data-start="00:40:17.000" data-end="00:40:27.000" data-start-seconds="2417">Well, we already have 3D perspective, but we don't have distorted perspective. Jesus, how do you describe that?</span></p>
      <p><span data-start="00:40:27.000" data-end="00:40:33.000" data-start-seconds="2427">You mean like shader style? Like putting something on an environment?</span> <span data-start="00:40:33.000" data-end="00:40:39.000" data-start-seconds="2433">That is just it, you've got a kind of curved perspective. It's fish eye effects.</span></p>
      <p><span data-start="00:40:39.000" data-end="00:40:43.000" data-start-seconds="2439">Yeah. In canvas, I've seen some of them, but they were hard coded.</span></p>
      <p><span data-start="00:40:43.000" data-end="00:40:46.000" data-start-seconds="2443">In canvas, yeah. Canvas can do anything. [laughs]</span></p>
      <p><span data-start="00:40:46.000" data-end="00:40:50.000" data-start-seconds="2446">Why do you like Canvas? I see some math geek would be appealing to you.</span></p>
      <p><span data-start="00:40:50.000" data-end="00:41:12.000" data-start-seconds="2450">Yeah, I don't know. I just love Canvas. It's a 2D...it's an empty piece of paper, and you can draw something on it. I just love it. There are people complaining about Canvas not having a DM and not being able to click on stuff, but that is exactly what makes it so fast. I don't know, I just love it.</span></p>
      <p><span data-start="00:41:12.000" data-end="00:41:19.000" data-start-seconds="2472">I found it more too...I always said Canvas is like an Etch-a-Sketch on your page. You basically can paint on it, and you can shake it to actually delete it.</span></p>
      <p><span data-start="00:41:19.000" data-end="00:41:23.000" data-start-seconds="2479">Canvas is like a mini Photoshop in your browser, a programmatically accessible Photoshop.</span></p>
      <p><span data-start="00:41:23.000" data-end="00:41:30.000" data-start-seconds="2483">Yeah, except it has the wonderful thing of a state in terms of the coordinate system.</span></p>
      <p><span data-start="00:41:30.000" data-end="00:41:31.000" data-start-seconds="2490">Yeah.</span></p>
      <p><span data-start="00:41:31.000" data-end="00:41:35.000" data-start-seconds="2491">I like that you can paint a shape and then rotate it and scale it and reuse it that way.</span></p>
      <p><span data-start="00:41:35.000" data-end="00:41:51.000" data-start-seconds="2495">And those are the same 2D and 3D matrix transformations that we use in CSS. So if you have a JavaScript implementation of a 2D matrix and a 3D matrix, you can also use them in the native transformation methods of Canvas.</span></p>
      <p><span data-start="00:41:51.000" data-end="00:42:00.000" data-start-seconds="2511">So basically that would allow for things like Easel library and things like that to fall back to a CSS transformation in case Canvas is not supported.</span></p>
      <p><span data-start="00:42:00.000" data-end="00:42:01.000" data-start-seconds="2520">Yeah, yeah.</span></p>
      <p><span data-start="00:42:01.000" data-end="00:42:06.000" data-start-seconds="2521">For Internet Explorer. It's hard to actually test...</span></p>
      <p><span data-start="00:42:06.000" data-end="00:42:08.000" data-start-seconds="2526">The browser I didn't want to name.</span></p>
      <p><span data-start="00:42:08.000" data-end="00:42:28.000" data-start-seconds="2528">The browser I didn't want to name. [laughs] After saying that you like Windows much. One question here, there's actually not much coming in interestingly enough. &quot;What do you mean by 'these things are available for browsers internally.' Are matrixes internally used for everything?&quot;</span></p>
      <p><span data-start="00:42:28.000" data-end="00:42:50.000" data-start-seconds="2548">Well, apparently so. Because if you apply a translate, if you do a combined transformation using the translate, rotate, and skew properties, what you get in return if you query the value is a matrix. So your browser uses this matrix anyway.</span></p>
      <p><span data-start="00:42:50.000" data-end="00:43:04.000" data-start-seconds="2570">I don't know, I'm glad this matrix is exposed because it allows me to do more than just the more human readable transformation properties. But I only assume that that is what it internally does.</span></p>
      <p><span data-start="00:43:04.000" data-end="00:43:05.000" data-start-seconds="2584">Mm-hmm.</span></p>
      <p><span data-start="00:43:05.000" data-end="00:43:10.000" data-start-seconds="2585">It's the same with 3D transformations. We simulated them with X and Y and depth of field before.</span></p>
      <p><span data-start="00:43:10.000" data-end="00:43:11.000" data-start-seconds="2590">Yeah, yeah.</span></p>
      <p><span data-start="00:43:11.000" data-end="00:43:13.000" data-start-seconds="2591">And now we've got the real XYZ axes to play with.</span></p>
      <p><span data-start="00:43:13.000" data-end="00:43:32.000" data-start-seconds="2593">Yeah, yeah. You said you love playing with these things and doing this, and I find myself...How do you get around the issue of building something like the cube and then you find yourself sitting in front of it for half an hour and playing with it rather than doing something else?</span></p>
      <p><span data-start="00:43:32.000" data-end="00:43:33.000" data-start-seconds="2612">Yeah, that happens, yeah.</span></p>
      <p><span data-start="00:43:33.000" data-end="00:43:35.000" data-start-seconds="2613">How do you stop yourself?</span> <span data-start="00:43:35.000" data-end="00:43:40.000" data-start-seconds="2615">I know that feeling, so I just have to kick myself and continue working.</span></p>
      <p><span data-start="00:43:40.000" data-end="00:43:53.000" data-start-seconds="2620">Yeah. The side bar on my blog has just z-index tilt, and I get so many emails about how is this done. I wrote a blog post about it. It's not hard to do, but it seems to be very engaging for people to play with things like that.</span></p>
      <p><span data-start="00:43:53.000" data-end="00:43:59.000" data-start-seconds="2633">Yeah. It's extremely funny. You keep doing that, and that's also what keeps you going, what keeps you making these kinds of things.</span></p>
      <p><span data-start="00:43:59.000" data-end="00:44:07.000" data-start-seconds="2639">So do you use any of that in your second screen application, as Easter eggs, for example, or...</span></p>
      <p><span data-start="00:44:07.000" data-end="00:44:19.000" data-start-seconds="2647">Well, this particular technology in stopping a transition and programmatically creating a new one is not yet integrated into our system, but it's going to be.</span></p>
      <p><span data-start="00:44:19.000" data-end="00:44:20.000" data-start-seconds="2659">So you do it for like expanding and bouncing transitions or...</span></p>
      <p><span data-start="00:44:20.000" data-end="00:44:40.000" data-start-seconds="2660">Well, no, not really. One thing, for instance, which we remade, and that's an older discussion about should we recreate the native app field in web apps. Maybe we could agree or disagree that it is either right or wrong, but we did it anyway.</span></p>
      <p><span data-start="00:44:42.000" data-end="00:44:47.000" data-start-seconds="2682">One thing we made is just that scrollable thing that you can scroll content like on iOS.</span></p>
      <p><span data-start="00:44:47.000" data-end="00:44:48.000" data-start-seconds="2687">Like the bounce back...</span></p>
      <p><span data-start="00:44:48.000" data-end="00:44:50.000" data-start-seconds="2688">With the bounce back and the scroll bar thingy.</span></p>
      <p><span data-start="00:44:50.000" data-end="00:44:51.000" data-start-seconds="2690">Canvas in the back?</span> <span data-start="00:44:51.000" data-end="00:44:53.000" data-start-seconds="2691">Yeah, your native field.</span></p>
      <p><span data-start="00:44:53.000" data-end="00:45:02.000" data-start-seconds="2693">Nice. But then you always try this and you put it online. You put it on Github and tell people about it, and then you get 6000 requests &quot;oh, it doesn't perform the same as iOS.&quot;</span></p>
      <p><span data-start="00:45:02.000" data-end="00:45:04.000" data-start-seconds="2702">Yeah.</span></p>
      <p><span data-start="00:45:04.000" data-end="00:45:08.000" data-start-seconds="2704">Are we trying to simulate too much and not having the same access to the hardware?</span> <span data-start="00:45:08.000" data-end="00:45:24.000" data-start-seconds="2708">In my opinion, you can get really, really, really close, but there is always a tiny delay. If you scroll on your iPhone, it's just direct. Your page moves immediately, and there is a slight delay.</span></p>
      <p><span data-start="00:45:24.000" data-end="00:45:28.000" data-start-seconds="2724">But it can be progressively enhanced as well. So if it doesn't work it's just a normal flow.</span></p>
      <p><span data-start="00:45:28.000" data-end="00:45:30.000" data-start-seconds="2728">Yeah.</span></p>
      <p><span data-start="00:45:30.000" data-end="00:45:35.000" data-start-seconds="2730">Cool. Well, I guess that's all we have for now.</span></p>
      <p><span data-start="00:45:35.000" data-end="00:45:37.000" data-start-seconds="2735">OK. Thank you very much. [applause]</span></p>
     </div>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2012/sessions/beyond-simple-transitions-with-a-pinch-of-javascript-peter-nederlof.md" id="comment">
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
