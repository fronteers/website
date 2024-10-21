<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>CreativeJS - beauty in the browser by Seb Lee-Delisle · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p541">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>CreativeJS - beauty in the browser by Seb Lee-Delisle</h2>
     <h3>Video</h3>
     <video width="640" height="360" src="/_downloads/2011/seb-lee-delisle-creativejs.webm" controls>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2011/seb-lee-delisle-creativejs.webm">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="http://vimeo.com/30909615">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2011/seb-lee-delisle-creativejs.webm">Download video</a> (WebM, 129MB)</li>
     </ul>
     <h3>Code examples</h3>
     <ul>
      <li><a href="https://github.com/sebleedelisle/JavaScript-PixelPounding-demos">See code examples on github</a></li>
     </ul>
     <h3>Transcript</h3>
     <p>[silence] [applause]</p>
     <p>Seb: [0:02] Wow, thank you. Thanks very much. That was a nice introduction wasn't it? Thanks, Justin. Doing a great job, I think. It is quite hard to describe me, isn't it? I'll maybe take a little bit of time to do that in a moment, but before I do that I'm going to try something today that is a bit crazy and might not work but that's always the best type of thing to try. If it's like &quot;Yeah, it'll be fine,&quot; then that's boring. [0:34] What's that music? Is that my computer, that music? It probably is. I'm going to mute that. I have some things in the background I want to show you. Before I start I just want to ask you to all do something for me. Who has a smart phone? [laughs] That's good. One or two of you. Brilliant. I need people with either an iPhone or an Android phone that has Flash on it or maybe a Playbook or something like that to do something for me.</p>
     <p>[1:08] Are you ready? This is what I want you to do. Turn utility lock off, set the brightness to max, open a browser page, and go to that URL. I'm not going to actually do anything with this yet. This is for later in my talk but I just thought maybe if you could all start trying to connect to that now it would be better than later. I might just give you a few minutes.</p>
     <p>[1:33] This is where I need some nice music, actually. Hang on. Where's the music? [music starts]</p>
     <p>[1:41] There you go. Is that out of my computer? I don't even know. It's quite nice, isn't it? I think there's a demo running in the background or something. How are you getting on with your tasks? Am I even running my app? I'm not so don't worry about that. I will run my app.</p>
     <p>[2:06] Hang on. It's seb dot local if you're on IOS and if you're not on IOS you have to go to this horrible IP address. There you go. You should get a green screen if everything's good so that's cool. That's quite a lot of you. Good. Is that long enough? Are you seeing that enough now? Can I move on to my actual presentation? Yeah. That music's really dramatic actually. Whoa. It's adding an air of suspense because it really might not work.</p>
     <p>[2:50] OK. I'm going to turn it off because it's actually freaking me out a little bit. I'm going to try and explain what the hell I do. It's really hard because there's so many things, but I think this kind of sums it up. Creative coder. Everything I do is about visual coding. Right from the very start when I learned how to program Basic on my BBC Micro. Then later I became an Amiga programmer and subsequently did some JavaScript and Director and Flash.</p>
     <p>[3:22] I guess I did Flash for a very long time, five or six years. I was primarily known for Flash but then moved into other things like processing and open frameworks, Unity 3D, IOS, Objective C. Out of all of these things there's one core thing that goes through them all and that is the visual coding and interactivity. This is what I call creative coding.</p>
     <p>[3:44] It's not about specs and getting it right and testing. It's more about being creative, having iterative process, experimenting, seeing what's happening, and of course learning all these techniques for animation and visual as well. This is some of my work. This is what I won the BAFTA for with my company, Plug-in Media, that I set up a few years ago. I'm not so involved there anymore.</p>
     <p>[4:08] This is a huge Flash project for kids. All 3D, real time 3D and this was three years ago so it was really hard to do 3D in those days. I also do the creative coding podcast. Anyone listen to that? One guy. Excellent. Maybe tell your friends. Yeah? Next year if I come back I hope to have at least three or four people. That would be fantastic.</p>
     <p>[4:35] It's a weird thing, the podcast, because apparently there are 15,000 downloads every month but I don't hear very much from the people that listen. They're running or at the gym or whatever. They get all angry about what I say and then they forget. It's better than Twitter or a blog because everyone forgets to get back to you. It's brilliant.</p>
     <p>[4:55] I also like playing with large-scale projections. This was one in Brighton. I was making tweets and text messages roam around the edge of this building to fill in sometime between large-scale animations. This was my favorite program possibly which is digital interactive fireworks. That's why Justin described me as a digital pyrotechnician.</p>
     <p>[5:18] It consists of this huge projection with motion detection so you can actually wave your arms around and fireworks would come out, which is cool right? This is a little test for you. Does anyone know what this is? Can you imagine what that is? Kind of pretty, though, isn't it? Everyone's like, &quot;Eh.&quot; I can't hear you. You've got to speak up if you've got an idea.</p>
     <p>[5:45] Asteroids? It's close. This is what it is. It's Lunar Lander. I made a very accurate recreation of the original Lunar Lander game, put it on my website a while ago. I was experimenting with multiplayer technology because I wanted to have a multiplayer Lunar Lander and the first step in this process was to have everyone that played it broadcast their position to me.</p>
     <p>[6:11] I never actually finished the multiplayer Lunar Lander because I was just staring at all these little ships flying around in the special version of the app I had on my computer and I also had them leave a little trail and I left it running overnight. All these people, it gets about 20,000 plays a month so overnight there would be maybe 1,000 people playing it, something like that, and in the morning that's what I was left with, everyone's trail of everyone that had played it all night.</p>
     <p>[6:38] You could see the landing zones where they bounced up and down a little bit and tried to land and panicked. There's one guy over here, he'd just gone right off the top. He's like &quot;Whoa, see you.&quot; It's like OK, come back, calm down. That's just an example of the pointless things that I do that I find rather pleasing.</p>
     <p>[6:59] I've also been running a series of workshops called Creative JS in HTML5 and this is a little excerpt from some of that. I've been taking these workshops. They're two-day workshops, and it's all about discovering the new visual capabilities of JavaScript. It's really pretty, you've got Canvas and web GL.</p>
     <p>[7:23] Of course you've been able to do simple animation forever, but in the last two or three years it seems like we've gone &quot;whoa&quot; right up there to the point now you can do some really sophisticated stuff. I'm just taking all my experience in the other platforms and implementing them in JavaScript. Bit of 3D. Why not? We make our own 3D engine on the second day.</p>
     <p>[7:47] We have 10 minutes to spare. Seriously, though, it's not actually that hard. A 3D engine, at its core, is maybe three or four lines of code. It's all about demystifying and showing you how easy it is and also how fun it is, this iterative process where you get things wrong sometimes. Sometimes you get things wrong and a cool thing happens. How cool is that? It's like where you actually want mistakes. That guy really likes that.</p>
     <p>[applause]</p>
     <p>Seb: [8:21] That's very kind of you. I'll try to make more mistakes from now on. As a spin-off from these workshops, I realized there was all this cool JavaScript happening. There was a few places where it was but I thought it would be nice to have my own curated list of links and tutorials and stuff. I got about seven or eight people together. We now run creativejs.com and there's usually a few posts a week, just really cool things that we find on the Internet. [8:52] I'll show you a few if you want. That was my app. It broke. It's good to have mistakes, right? You just clapped for mistake. That's fine. OK. What am I doing? This is Creative JS. It's got a cool web GL header because we can. Look at that. Whoa. It's even got little light rays, rays of light. There's actually an Easter egg here. If you pull it down you get a clock.</p>
     <p>[9:25] I don't know if anyone's even noticed that or not. I've never heard anyone mention it. It took me ages as well. [laughs] Check out creativejs.com. There's all these cool things. We link to really awesome stuff like this. This is Moxy Code's Endless Forest. This is what's playing the creepy music, actually.</p>
     <p>[music]</p>
     <p>[9:46] Let's turn it back on. I quite like it. I don't know why I like it, I just do. It's really beautiful. It's really nice graphics.</p>
     <p>[10:00] There's also this. Has anyone seen this? That's a cool picture, isn't it? Except it's not. Oh my God. That's not a picture at all. I'm driving my car. That's all done with Three.JS and it's AlteredQualia. I don't know what his real name is but he's one of the Three.JS team members. You know Three.JS, the amazing 3D engine. It was founded by Mr. D. Ricardo Cabello but now it's quite a big team.</p>
     <p>[10:30] Look at this. I've got to show you this. Even better, you can go through things. Whoa.</p>
     <p>[laughter]</p>
     <p>Seb: [10:43] Collision detection. Who needs that? That's too hard. That's some quite complicated things. It takes quite a long time to get the hang of those sort of things. Then there's these experiments like this which I just really, really love. This is very, very simple but it's quite a nice, sophisticated effect. Most of it is because it's got this filter on it, this shader. [11:07] If you turn that off you can actually see what's going on there. There's lots of additive, blended plains that all blob together. I've actually forgotten what the name of this filter is now. That's a bit embarrassing as I really should know. When you put on this filter, which I will name later on Twitter, everything comes together. It's suddenly a very sophisticated looking effect.</p>
     <p>[11:30] Of course, looking at cool things is one thing but learning how to do them is even better. I try to occasionally write tutorials. There's only two at the moment but there's links to lots of other tutorials all around the web, so have a check at that as well. There's this one which is all about making a game that can run really well on IOS and web kit browsers.</p>
     <p>[11:51] There's this one which is an intro to Three.JS, just making a simple star field. Check it out if you want to learn some stuff.</p>
     <p>[11:59] I can close my browser now, because now, I must say, when I was talking to the organizers here about what I was hoping to do, they're like, &quot;Yeah, probably best if you don't do any live coding, just show demos and talk about it, that's probably much better, much safer.&quot;</p>
     <p>[12:21] I'm just going to show you some code. You want some, a bit of live coding, right?</p>
     <p>Audience: [12:29] Yeah. [applause]</p>
     <p>Man: [12:37] OK. It's not even really live coding, it's just, I'm commenting things, pretty much. All my secrets out. OK. [12:40] I want to talk a bit about particles, particle systems. It sounds like it would be really hard to make a particle system, right? Anyone good at particle physics? One guy, that guy.</p>
     <p>[12:53] I don't do it, I should just say that there are two ways to do things with visual effects. One is like the really accurate way that's physically, completely accurate, uses all the proper formulae, and could be used in the engineering simulations, and is really hard.</p>
     <p>Then, there's another way, which is really easy, and not very accurate, but looks OK. So, that's what I'm going to show you [indecipherable 00: [13:12] 13:24] . I'm going to show you how to make a particle system that isn't very accurate at all, but looks OK.</p>
     <p>[13:29] I need to open this folder, there you go.</p>
     <p>[13:31] Here's an example. I assume that most of you have, like, moved things with code before, right? It's a pretty simple concept.</p>
     <p>[13:39] You've got a position of something, you update its position every frame by a certain amount. The amount it changes every frame can be considered its velocity, right? Yeah, you're with me on that, right? Yeah. Both of you, excellent.</p>
     <p>[13:54] What if I want to recreate the effects of drag? Yeah, now, of course, I could do it with the complicated physics, but instead, I do it this way. I just literally multiply that velocity by a number close to 1, and every frame it gets a little bit slower. It eventually stops, pretty much.</p>
     <p>[14:10] That's good enough for me, because multiplying a number by another number is really fast, and it looks good enough, so might as well do it.</p>
     <p>[14:19] Then, of course, that works in two dimensions, as well. You can apply the same drag to both X and Y velocity. If you want to add gravity, again, super, super simple. You just add a small amount to the Y velocity every frame and it actually makes your object fall down a little bit.</p>
     <p>[14:37] Just a quick word about collision detection, not hard collision detection. I could talk, probably, not only for an hour, but probably for two days about collision detection, because I'm really that boring.</p>
     <p>[14:48] But this is, like, the easiest collision detection. Sometimes it's good enough, right? If I want to bounce on the floor, I just literally check it's Y position, if it's below certain amount. Then, I'm going to move it up, and I'm going to reverse its Y velocity.</p>
     <p>[15:02] Or, I can multiply its Y velocity by a negative number that is between 0 and -1. If I multiply the Y velocity by -1, then it means that it's going to be bouncing up with exactly the same velocity as it was falling down with, so it's super, super bouncy.</p>
     <p>[15:20] If I want it to be half as bouncy, then it would be -.5, right? So then, it would be going up with half the speed that it was going down. Pretty easy, right? Easy, so easy. Like, the code on this stuff is just insanely easy.</p>
     <p>[15:35] I've made this simple particle object. Maybe I'll show you it later. Maybe I'll wait. Who knows? They're a mystery.</p>
     <p>[15:44] OK. But here it is, I'm just creating one of these particles. Now, the particle doesn't have any display component at all, the particle just draws itself into a canvas. It's not a very complicated object at all.</p>
     <p>[15:56] But I'm just creating a new one, putting it in the middle of the screen, because the parameters are X and Y position. I've stored this screen width and screen height there, which is just the, you know, width and height of the browser. By dividing that by 2, that's basically my particle is in the middle of the screen.</p>
     <p>[16:12] Then, I call the render method of the particle, pass it through a context to the Canvas 2D. I can tell you're all really excited about this. Are you ready to see your first particle?</p>
     <p>Audience: [16:24] Yeah.</p>
     <p>Man: [16:27] I know, it's pretty exciting. I'm just building up the tension. I need that dramatic music, again. Yeah, I know. Yeah? [applause]</p>
     <p>[16:36] Look at that. That's pretty cool, isn't it?</p>
     <p>[16:44] Now, it's pretty boring, actually, I have to say, because particles are pointless on their own. Ha, pointless, that was terrible.</p>
     <p>[laughter]</p>
     <p>[16:52] That was truly awful, I do apologize. You know what? I've been talking about particles for, probably, six, seven years. I'm kind of a one-trick pony. But I've never noticed that joke before. It's nice, I can still discover new ways to make people cringe. It's good.</p>
     <p>[17:16] I want to animate my particles, that's the first step. Instead of just rendering it once, I'm going to actually move this render function into my loop, here.</p>
     <p>[17:25] And I'm doing a set ins for here, which is, you know, I should be doing a set animation, and animation, request animation frame. But I'm just doing it the easy way now, because I'm favoring simplicity.</p>
     <p>[17:37] What I'm doing here is, every 30 times a second to get the number of milliseconds per frame, if you've got 30 frames a second, you divide 1,000 by the frames per second. Easy, right?</p>
     <p>[17:48] If I pass in that number, it means it will call 30 times a second. So, this gets called 30 times a second every time I clear the canvas. Then, I render the particle again.</p>
     <p>[18:01] Let's see how excitingly impressive this looks now. Subtle. It's subtle. I mean, the thing is, that although I'm clearing the screen and drawing the particle again every frame, I'm not drawing it in a different position. It's like, a bit pointless.</p>
     <p>[18:21] My particle has a built-in method, it's got a built in property called vel X and vel Y. I'm going to set that to 1. But then, in order to add vel X to position, to pos X, I actually need to call particle update. That does all the drag and stuff like that.</p>
     <p>[18:39] Ehoa. I know. Yeah, I know, I run particles, it's brilliant. OK. Thank you, I do appreciate it.</p>
     <p>[18:55] I bet you're all regretting saying that you wanted live coding now, aren't you? It's gets better.</p>
     <p>[19:02] Let's take a look at the next example, because, like, one particle is one thing. But really, a particle system, you need loads of particles, because one particle is boring. I know, it seemed exciting at the time, but just wait.</p>
     <p>[19:15] OK, so this time, I'm creating an array of particles here, and every time round the loop, I'm making five particles. Then, I clear the canvas, and then I iterate through all the particles and update and render them. Then, this bit just gets rid of the oldest particles.</p>
     <p>[19:30] Let's look at, make a particle, we put it in the middle of the screen, give it a random X and Y velocity, give it some drag and gravity, make it a bit bigger, and then push it into the array.</p>
     <p>[19:43] Do you get it? So, we're making a new particle, five new particles, adding into the array, updating them all every time. Let's just take a look at that and see how that looks.</p>
     <p>[19:53] Whoa. Yeah? OK, you cut one particle, but it's like, &quot;It's fine, forget it.&quot;</p>
     <p>[laughter]</p>
     <p>[applaud] [20:00]</p>
     <p>[20:04] It's that awkward moment, should we clap? Should we not? It's so very embarrassing.</p>
     <p>[20:13] OK Let's just have a look at the sort of things that we can play with, here. Well, first of all, we can change the velocity, right? At the moment, we're having a random velocity between -5 and +5. Let's just change that so it's between -10 and +10. Let's take the gravity off, let's just have a look at that now.</p>
     <p>[20:29] Yeah, so you can see, they all go out from the center. You can see, because there's drag applied to them, they sort of slow down. It's quite a nice effect. They slow down quite quickly, actually.</p>
     <p>[20:40] That's cool. Now, there's also a shrink built into the particle. This is what the size of the particle is multiplied by the number every frame. Then, suddenly, we have, like, particles that shrink a little bit. It's getting a bit more interesting now, isn't it? Let's make them a bit.</p>
     <p>[20:57] And then, of course, there's fade out, as well. Instead of shrinking, we can actually just make them more transparent. See that?</p>
     <p>[21:04] I want to make them a bit faster. Let's just put the drag up a little bit so they don't slow down so quickly. There you go. That's kind of cool, a slightly different effect from before.</p>
     <p>[21:14] Let's make them all go up instead of down, instead of round in directions. At the moment, I'm getting a Y velocity between -10 and +10. Let's just make it between 0 and -10.</p>
     <p>[21:28] Yeah, so now, they kind of go up, right? Let's give them a bit less X velocity, so they don't go to the left and right so much. I'm just making this up as I go along, really. That's fine, there you go. That's cool, it's kind of like a &quot;fountainy&quot; sort of thing.</p>
     <p>[21:45] I'm going to minus a bit more from that, so they go up. There you go. Now, I can add some gravity again. Yeah? Now they fall down a little bit.</p>
     <p>[21:57] Let's stop them, I'm going to keep them fading out. But this time, instead of making them shrink and get smaller, I'm going to actually make them get bigger. Whoa, I know, it's pretty crazy.</p>
     <p>[22:08] Let's make that 1.1. Whoa. I mean, hopefully, you're starting to get an idea of the sort of different effects that you can create with just a few lines of code, right? It's not about being a really clever programmer at this point at all. In fact, this code is quite dumb.</p>
     <p>[22:27] At this point, it's about becoming a creative person and just thinking and imagining what will the results of what I'm doing do?</p>
     <p>[22:38] OK, let's look at the next example. Particle 2.0. Now, all this code is on my site, as well, by the way. It's all on my GitHub. You guys can all play with this later.</p>
     <p>[22:49] This is the same code as before, but this time, I'm using a little image particle. And when I click, even more come out. You can see, I've implemented that collision detection. Yeah?</p>
     <p>[22:59] Same code, just using an image, this time. Then, here we have this one. OK, so, now we've got, again, it's exactly the same particle object. I'm just giving it different values. Let's have a look at the values.</p>
     <p>[23:14] This is in 2.1. So, here's the bit that makes, I'm just seeing Christian Holloman, like, tweeting at replies to me. I really should turn that off while I'm onstage, it's very distracting.</p>
     <p>[23:28] OK. This time, the vel X and vel Y is between -6 and +6, quite slow. It slows down pretty, well, a little bit, it slows down. It shrinks pretty slowly. But again, it's a very, very different looking effect.</p>
     <p>[23:41] Now, right now, I want to show you, in Canvas, there's a constant operation. To get that particle blend made, this particle effect looks like this. Straight away, a very, very simple thing to do. This is where you get this really beautiful blobbing together.</p>
     <p>[24:18] I'm running out of time, if I need to do phone things. I'm going to speed things up a little bit. I say that, of course, but I'm probably not going to. [laughs] It's really hard.</p>
     <p>[24:28] This is my particle image. This is the bit of code that I'm using to set it up. It's got a tiny, tiny bit of X velocity. Only between -0.5 and 0.5. No Y velocity, a random transparency, gravity -0.2. What do you think that would do?</p>
     <p>[laughs]</p>
     <p>[24:55] Yes, it's going to go up. Don't be so afraid. It's fine. It's like a really hesitant, &quot;It might go up...&quot; Shout at me, it's fine. I know, you've just had lunch, I've got the graveyard shift, it's fine.</p>
     <p>[25:12] Notice that shrink is 1.04, which means what? It gets bigger, yes. This is more like it. I'm sorry to put so much pressure on you, but you know.</p>
     <p>[25:23] Fade is very slow, so it's slowly fading out. Just imagine what this is going to look like. What's it going to look like? Huh? Soap bubbles? Yeah, not a bad idea. Anyone else?</p>
     <p>[25:37] Smoke. You probably saw it in the video at the beginning. I always ruin that surprise. Dammit.</p>
     <p>[25:44] Here we are. Same code exactly, different image, different settings, and we have this rather nice smoke effect. We can make it even better, if we change the image that we're using to be this shape here, which is like a crescent. This time we're spinning it around a little bit, and you can see the effect it has there.</p>
     <p>[26:08] Again, this was just something I was playing with years ago. I was like, &quot;How can I get maybe a more detailed, more turbulent smoke?&quot; I tried it with this image, and look, it's kind of nice, right? I don't know if you can see that on the projector.</p>
     <p>[applause]</p>
     <p>Seb: [26:28] You're too kind. That's very kind of you. [26:30] OK. Now, I'm going to show you my favorite ever particle effect. There's a few stages to it, so don't get too excited.</p>
     <p>[26:45] This is the first stage. This is the image I'm using. Can you see that? It's a very low res image. It's got a little white spot in the middle, and then very dark, kind of blue, glow. It's not a transparent image at all.</p>
     <p>[26:59] Let's have a look at the code here. I'm going to do this really quickly, because I'm really running out of time. Let's run this as it is at the moment. You can see there, it's following the mouse. Instead of just starting the particles in the middle I start them at the mouse position.</p>
     <p>[27:12] They've got a floaty setting. Yeah, it's similar to what we've seen before, right?</p>
     <p>[27:20] You can see, because it's a solid image, it overlays everything underneath it. How do I fix that?</p>
     <p>[27:30] No, not transparencies. What was it before, does anybody remember? Composite operating, yes, I can use additive blending. Don't forget, that means only light things will show on top of other light things, and the black outlines should disappear.</p>
     <p>[27:42] Let's switch that on here, it's a property of my particle. Somewhere... Here. I'm going to uncomment that. Whoa. That's better, right? That's not it. That's not it.</p>
     <p>[28:01] I know you're about to clap, but that's not it. [laughs] Because there's one other thing, this really cool thing you can do. That is, track the mouse, and you can subtract the last mouse position from the current mouse position to know how fast the mouse is moving. I can take a tiny bit of that and add it to my random velocity of my particles. That means particles should come out in the direction of the mouse.</p>
     <p>[28:27] You can look at this code yourself later, to see exactly how I do that. Literally tracking the mouse velocity X and Y, and then I'm adding 40% of that X and Y velocity to that existing random velocity X and Y that I already have. You ready for this?</p>
     <p>[28:44] Now, when I throw the particles around, they come flying out. It's all watery. But that's not it.</p>
     <p>[laughter]</p>
     <p>Seb: [28:57] There's one final thing to make this the most awesome particle effect in the world ever. I might be over-selling this a little bit. [laughs] I'm not over-selling it, it's awesome. [29:10] It's this, the shimmer property. I've set this shimmer property of my particle to true. All this does, it's really dumb, is instead of drawing the particles at the size it's meant to be, it draws it a random size, between zero and the size it's meant to be. This is the effect that we get.</p>
     <p>[29:29] Are you ready for this? This is the best particle effect in the world, ever.</p>
     <p>[applause]</p>
     <p>Seb: [29:44] So pretty. OK. This is on my GitHub account. You should be able to find this code. I'll make sure to post it online as well. [29:55] That's all the live code that I'm going to do today. [laughs]</p>
     <p>[30:03] Now, I'm going to play with phones. Because when I first did this presentation, when I first wrote what I was going to do, it was... I need to open my app again as well, of course. I'd better do that.</p>
     <p>[30:21] Come on. Hopefully it won't crash this time.</p>
     <p>[30:27] I was going to do just more particle stuff and more 3D stuff, but I had this really cool project I've been working on for three months. It's really, really hard. Can you see this number at the top? That's how many of you are connecting. It's really scary. I've never had so many connections so fast before.</p>
     <p>[30:47] Let me just explain what it is. I had this crazy idea, that wouldn't it be cool to turn everyone's phone, in the audience, into individual pixels on a really massive display? Wouldn't that be cool? I thought it would be cool.</p>
     <p>[31:03] It's actually really, really hard. Let me just get this slide back up in case you need to connect.</p>
     <p>[31:10] What are the problems with this? I shouldn't really talk about it. I'm going to be really, really quick. My initial idea was to make an orchestra of phones, and I still want to do that, but actually someone else did it already in 2002.</p>
     <p>[laughter]</p>
     <p>Seb: [31:29] Can you believe it? It was Golan Levin, who's probably the godfather of creative code. He runs faculty at Carnegie Mellon University, very influential in processing and open frameworks communities. [31:40] He had this crazy concept. I think it was Ars Electronica in Minsk, where everyone got a little crappy phone. You know what phones were like in those days, right? They either brought their own phone and had to get their own special ringtone, which they downloaded, and they all sat in special places. An insane project.</p>
     <p>[31:57] They even had spotlights that lit up the individual audience members as their phones went off. Check that out, there's a link... I don't know where the link is, but I'll dig it up. It's really cool.</p>
     <p>[32:08] That ruined my plans a little bit. Then I thought, I can still do this display idea. I can still do that.</p>
     <p>[32:14] What are the problems? Well, the first problem that I had is that I've got no idea where your phone is. By the way, you should probably turn your computers off. Because if they're connected to the WiFi, it's really going to bring it down. Just keep it to phones for now. I really hope it doesn't crash again.</p>
     <p>[32:29] Let's see how it's going. Whoa, 233. I can guarantee that is the most number of phones I've ever had connected.</p>
     <p>[32:37] If you're connected to the WiFi with your laptop, just switch the WiFi off. That would be really cool. I don't want to tempt fate any more than I have.</p>
     <p>[32:43] The issue is, I don't know where your phone is, right? Your phone doesn't know where your phone is. I can't just say, &quot;Give me your GPS location.&quot; It's so unreliable. Probably not even going to work inside a building, and even in a very best case scenario it's going to be accurate within three meters.</p>
     <p>[33:01] I need to know exactly where the phone is. That's the first problem.</p>
     <p>[33:05] Second problem is, if I tell your phone to change color, it's going to take a little while to go through the WiFi, magic Internet stuff, and end up on your phone and change color. Which is kind of OK, but I wanted everything to be perfectly in sync.</p>
     <p>[33:19] I'm going to talk about syncing first. Who's connected? Hold up your phones, and I'll show you...</p>
     <p>[33:30] Look at that. Don't you look cool? Oh my god. That is actually really cool.</p>
     <p>[33:37] How many have we got? 234. Is anyone having trouble connecting? Yeah, what's the problem?</p>
     <p>Audience Member: [indecipherable 00:33:45] [33:43]</p>
     <p>Seb: [33:48] OK. Keep trying. [33:50] I see a tablet there that doesn't look very bright. You might want to turn the brightness up. Don't forget to turn the brightness up.</p>
     <p>[33:58] The first thing is synchronization. Let's just try giving you a color. You ready? I'm going to make yours turn a color, let's see how quickly it works.</p>
     <p>[34:09] Slowly. Not that fast, was it? Some of you are still green. There's one person there who's still green.</p>
     <p>[laughter]</p>
     <p>Seb: [34:18] I think that might have broken that one. Is that an Android phone, by any chance? [laughter]</p>
     <p>Seb: [34:25] No, no, no, I didn't mean that. It's just that the Android phones haven't implemented web sockets, so I actually have to use a Flash SIM on Androids. [34:35] Let's make them all flash on and off. OK, can you see that? Let's make it a bit faster.</p>
     <p>[34:44] It's not even a little bit in sync, is it? Can you see that? It's rubbish.</p>
     <p>[34:50] What I'm going to do, is I'm actually going to synchronize everyone's phones. It's this button here, I can turn it on and slowly you'll see every phone go orange and then yellow, when it's synced. Let's just see what happens.</p>
     <p>[35:05] That is me pinging your phone ten times. It's actually the phone saying, &quot;Give me the time&quot; to the server, and my server telling it the time ten times. It gets the average latency, and then it works out the time on my server compared to the time on the phone.</p>
     <p>[35:23] Now everyone's gone yellow pretty much. That's pretty cool. I'm going to leave that there.</p>
     <p>[35:27] Now if I run this, everyone should flash on and off in perfect sync.</p>
     <p>[laughter]</p>
     <p>[applause] [35:35]</p>
     <p>Seb: [35:44] Let's just make the stripe a bit fatter. There you go. Speed it up a bit, maybe. That's still in sync? [35:52] I'm just doing a latency of 420 mils. Instead of saying to the phones, &quot;Change color now,&quot; I'm saying, &quot;Change color at this exact time, 420 mils in the future.&quot; The phones get that message at some point, in between the time it takes me to send it and them getting it. Because the clocks on the phones are synced up with my server, it just waits until the right time to change.</p>
     <p>[36:16] That's pretty cool, isn't it? I like that.</p>
     <p>[36:19] That's the first problem, that's the synchronicity sorted out. But what about the second problem? Where are your phones?</p>
     <p>[36:28] That's the harder problem. Let me just stop this. I was inspired by a project called, I'm like, actually, I'm just going to leave it. Let's make it go really fast. Whoa. Let's make it go even faster. Oh, no, I need to, maybe put the latency up a bit. That's pretty good, isn't it? I like it.</p>
     <p>[36:55] Anyway, let's not do that. I was inspired by this project called the Junkyard Jumbotron. I don't know if you've seen it, but you can take all of your tablets and all of your phones and put them on a table next to each other, make them go to a special web page, and then, they all show this marker, it's kind of like a QR code, but it's a different protocol for a fiduciary market.</p>
     <p>[37:18] Then you take a picture of all of those tablets, those markers on, and send it to the same website, which analyzes that picture, figures out where all the phones are and their orientation, and then, sends each bit of the picture to each phone, until it makes up one whole image.</p>
     <p>[37:35] I thought, well, that's pretty cool. The phones are actually, somehow, broadcasting their location to a camera. I thought, well, I can do that.</p>
     <p>[37:43] Except, look at your phones in this image. Like, if I put a marker on your phone, do you think I'd see it? Like, some cases, they're like, one pixel big. It's like, I'm not going to see anything. I have to come up with this other solution, which was.</p>
     <p>[37:57] Now, I still send all of your phones and ID from probably, see, it says it on it, as you've got an ID number on there. When I tell your phones to do so, they all start flashing on and off and it's this special encoding that I invented, which is based on Manchester encoding. I'm going to make that protocol completely open so anyone can use it. In fact, all of this source code will be completely open.</p>
     <p>[38:25] Your phones will then starting flashing on and off. This is the bit that's really hard to get right, because there's so many variables in this.</p>
     <p>[38:33] Your phone starts flashing. My camera's picking you up. I'm looking for flashing objects. I use Open CV to lock onto all those points. I read the pixels on your phone that are being flashed. Then you should see when it's running, these little lines coming out of your phones, which is black and white lines that basically are your pixel over time.</p>
     <p>[38:54] Then, it tries to decode it back into an ID, and then it knows where you are.</p>
     <p>[39:02] Whoa, don't clap yet, because it really might not work.</p>
     <p>[39:07] Let's just have a look. Where are we at? Are we doing a difference at the moment? Update difference. Update difference uses difference blending, you see at the top left there? That's all the difference. So, whenever you move your phone, it should show up then. You see that? Yeah.</p>
     <p>[39:21] Don't move your phone anymore. Because this really won't work otherwise.</p>
     <p>[39:27] Well, I guess I'd better just try it, I suppose. Now, it should, best case scenario, it should take a few seconds for me to decode your thing, but when there's so many, it sometimes takes a while.</p>
     <p>[39:39] There's also other settings, like the brightness of the camera, the blob size, the undetecting. I'm just basically making excuses, at this point. But it might take a little while to find them all. Let's see what happens. Are you ready?</p>
     <p>[39:55] Can you see? Has it found any yet? This is where I might have to start tweaking numbers. And can you see, also, it, like, my computer grinds to a halt a little bit, as well. I think that I probably need to optimize. Look, it's just completely hung there for a moment. I probably need to maybe work on this.</p>
     <p>[40:19] But it's so hard to test it with so many phones, right? I'm going to slow down the phone frame rate, hopefully, that should help a little bit and just start over. It's really not even working a little bit, that's really embarrassing.</p>
     <p>[40:32] Oh, it's just hanging. It worked perfectly when I tried it the other day, with 200 phones, as you do. Now, I wonder if I've got anything else running that might be slowing it down. Let me just close Keynote and close my browsers. I'm not running a Canvas thing, still, I hope. That would just be ridiculous.</p>
     <p>[40:55] OK. That's not working great right now. I think, &quot;Look, it's just grinding to a halt.&quot; I did fiddle with this a little bit. Oh, it's found a few. Can you see the little green markers?</p>
     <p>[41:06] I'll tell you what, If, like, everyone put your phone down, and like, maybe just a handful of people stick their phone up. Let' see if that, oh, it's completely broken, look at that, hang on. Oh, I think it might actually have crashed. Oh no, here we are. OK, it's got it right, let's see what happens.</p>
     <p>[41:36] Come on. OK, I clearly need to work on that. But I've got some video I can show you. But before that, despite the fact that I couldn't find your, it normally works perfectly, it's brilliant.</p>
     <p>[41:49] I told you it might not work, that's part of the fun. It doesn't matter, because we can still play a game.</p>
     <p>Audience: [41:56] Yeah.</p>
     <p>Seb: [41:59] Yeah, thank you. You've all heard of the Nyan nyan Cat, right? I'm going to play a game now where you guys have to catch the Nyan nyan Cat, as he runs from phone to phone. The fastest person to catch him will be the winner. I'll try and find some cool prize from one of the sponsors. [42:23] You have to tap your phone as he runs past your phone, as fast as you can. I might just, now, there are 200 of you. It might be quite slow, now what's that, half a second. 200 times half a second is about a minute. Let me speed it up a little bit. 200 mls between each phone. You've got to be quick.</p>
     <p>[42:52] Are you ready? Are you ready? Can we have the lights down? Because that would look pretty cool. I just need to start this. Oh, I need to move it to this program, number three. It's people playing with lights. Can I have the house lights down?</p>
     <p>[43:08] If I click that, you should go purple, yeah? Has everyone gone purple? No?</p>
     <p>[43:19] Anyone not gone purple, then, hold up your phone. Only a couple. Most people have gone purple. This is where, can I have audio on my computer, please? Although you might regret it.</p>
     <p>[43:38] Are you ready to play Nyan Cat? Yes? Are you ready?</p>
     <p>Audience: [43:45] Yes.</p>
     <p>Seb: [43:47] In 5, 4, 3, 2, 1. Go. Where's the music gone? It's all gone to shit. Hang on.</p>
     <p>Man 2: [44:02] I've got a blue screen.</p>
     <p>Seb: [44:04] Have I got the wrong program, even? No, no, it's good, it's working, but I don't know where the music's gone. No music, that's a bit of a downer. [44:15] If you catch him, then your screen goes rainbows. Who's got rainbows?</p>
     <p>Man 3: [44:20] I've got.</p>
     <p>Man 4: [44:21] I've got it.</p>
     <p>Seb: [44:23] I don't know when it's finished, even. That's why it's still going. It would be a lot more dynamic at this stage if the music was playing. We just have to wait for the cat to go from phone to phone. I don't know what's happened to the music, it's all at, it's ridiculous.</p>
     <p>Man 4: [44:43] Just sing the music.</p>
     <p>Seb: [44:44] La la la la la la, meow, meow, meow, meow, meow. [laughter]</p>
     <p>[44:48] What am I doing, even? I don't even know. OK, it's, oh.</p>
     <p>[applause]</p>
     <p>Seb: [45:07] Thank you very much. Obviously, that was a deliberate mistake. Just for dramatic effect. Did it tell you what ranking you were on your phone before it crashed? Yeah? It told you your rank? Who came first? Who's number one? [45:26] Shout out your rank if you got a rank. What, Fibonacci? That's not a number. OK, well, it was a catastrophic failure, also. Well, that was fun, right? Should we try again?</p>
     <p>Audience: [45:47] Yeah.</p>
     <p>Seb: [45:49] Maybe I should just try, maybe I should run an older version that might work a bit better. Let's try it, because you know how it is when you screwing with stuff, right before you're about to go on? [46:03] OK. It didn't connect, it didn't make a port properly, hang on. Oh, wrong one, dammit. Oh, this is exciting, isn't it? Watch as I open and close applications. OK, good, right. I've just got to wait for yours to connect, see the little number at the top? Oh my god, that's so fast.</p>
     <p>[46:35] OK. 174, that's most of you. This is a great WiFi here, isn't it? I just want to have a round of applause for the WiFi people, come on.</p>
     <p>[applause]</p>
     <p>[46:43] OK. Is that mirrored? Is that mirrored, that image? Yes, OK, so you can probably see yourself a bit better. OK, should we try Nyan, well, should I try, like finding your phones again? Maybe I'll just quickly try that, seeing as, you know. Keep your phones still, please. OK.</p>
     <p>[47:15] Oh, see the little green numbers? Finding a few of you this time. Oh, there you go, see, it's slowly finding you. I knew it would work. I really did. It's fine.</p>
     <p>[47:30] I guess if it finds you, if I turn a program on, then, it should go a color. If I turn this one on, then you should get a color. Let's see, who's still, I might have to fiddle with the settings a little bit. I should have done that before, really, instead of just going, &quot;Oh, it broke.&quot; Turn that down a bit. Maybe turn that down a bit, too.</p>
     <p>[47:58] It's found quite a few of you, hasn't it? It's probably found about half of you. Let's slow down the frame rate a bit. That's going to make it easier.</p>
     <p>[48:10] Start it over. Crashed, come on. Come on, little computer. Yeah, I need a faster computer, you're right. I just need to be able to write good optimized code, to be honest.</p>
     <p>[48:31] OK, well, it's found a few of you. If your phone is still flashing just put it down for a minute. Let's see how many I've actually found. A few. That's not bad, is it? Let's put the sweeping thing on that then. I need to sync it, of course. Sync it. Everyone syncing. Good. They're all going yellow. Makes me very happy to see that. Let's see the stripe.</p>
     <p>[49:04] It's not quite running very well is it? Let's try again. Let's turn the latency up. Yeah? That's kind of cool isn't it?</p>
     <p>[applause]</p>
     <p>Seb: [49:21] Let me just turn the position markers off so you can see better. That's so fast. I think I've gone a bit too fast now. I can even put a fade down on it so it leaves a trail hopefully. It's so pretty. I've got this particle program as well. Let's see what happens with the particles. There you go. Some little particles flying around. It kind of works. Not really. [49:55] I've got Pac Man too. Do you want to see Pac Man? It's pretty low resolution at the moment. I'm not sure if you quite get that at the minute. For those of you that weren't found, we're going to try to play Nyan Catch again. Maybe, just maybe, it should all go pink. Yes? You guys look awesome, by the way. Let me speed up the cat so it's not too slow because there are 200 of you. Fingers crossed.</p>
     <p>[50:32] Let's see if for me it works this time as well. You ready? Three, two, one, go.</p>
     <p>[music playing]</p>
     <p>Seb: [50:49] See, if the cat was found he'll jump on top of you there. [music playing]</p>
     <p>Seb: [laughs] [51:10] It takes ages when there are 200 of you. [music playing]</p>
     <p>Seb: [51:25] I really hope it doesn't crash again. [music playing]</p>
     <p>Seb: [51:35] Has it done everyone? [music playing]</p>
     <p>Seb: [51:45] I don't know if it's still going. [laughs] [applause]</p>
     <p>Seb: [51:58] I like how you only clap when it crashes but that's fine. I like it. Did you get a ranking this time?</p>
     <p>Audience: [52:04] Yeah.</p>
     <p>Seb: [52:05] Yeah? Who got number one? Anyone? Number two? Who got in the top five? What number are you?</p>
     <p>Audience Member 1: [52:14] I'm number three.</p>
     <p>Seb: [52:15] Three?</p>
     <p>Audience Member 1: [52:17] Three here.</p>
     <p>Seb: [52:17] Any offers on three? What's your name?</p>
     <p>Audience Member: [52:19] Yacob.</p>
     <p>Seb: [52:22] Yacob? Let's hear it for Yacob, number three on the Nyan Catch game. [applause]</p>
     <p>Seb: [52:30] I can't believe that crashed. It's so embarrassing. Let's finish up, shall we? I just wanted to say a bit about the creative coding stuff to finish up. Where am I here? Now, of course, in JavaScript you can do some really cool, impressive visual effects. This is something that you might hear often these days. [53:01] I think Elliot Jay Stocks, it's his favorite term. I've sort of been shamed a little bit recently by Val Head, who does a presentation about all of this stuff too. She says that everyone at a web conference like this will know not to abuse stuff. You're all smart. You're all professionals.</p>
     <p>[53:23] I don't even really need to tell you this message because you're not going to put particle effects on your corporate website but it is still a fun thing to do. It can teach you things about programming. It can teach you things about responsiveness and animation that feels good in a user interface.</p>
     <p>[53:41] Just as a little warning, I have probably the worst atrocity ever committed in the Flash community as an example of what can happen if you push things a little too far. Are you ready for this? It's the wonder of K &amp;amp; K Gospel Mime.</p>
     <p>[music]</p>
     <p>Narrator: [54:03] Before I formed them in the womb I knew them.</p>
     <p>Seb: [54:06] Volume pace. It's got a full dramatic effect.</p>
     <p>Narrator: [54:08] Before they were born I set them apart. I appointed them as prophets to a nation. The founders of Gospel Mime, the nation's choice, K &amp;amp; K Mime. Breaking through the barriers of religion and tradition, they will electrify, elevate, and inspire you with quick reflexes and a driving force from within allowing them to carry out the purpose of God. [54:32] You will be inspired, enlightened, and challenged to your high place in worship. K &amp;amp; K's dramatic depiction of the arts literally brings the songs to life right before your very eyes. Get ready to see the power of God and get catapulted to a new dimension of worship. Ladies and gentleman, boys and girls, put your hands together. Welcome the animated ministry of K &amp;amp; K Mime. [echo]</p>
     <p>[applause]</p>
     <p>Seb: [55:09] I'm not sure you should really clap at that. It is, of course, totally awesome in its awfulness. This is a skip intro, you remember those horrible things, except there isn't even a skip intro button. All there is is this replay button. Why would you ever want to skip it? The only thing you'd ever want to do is play it over. [55:34] Of course you could do stuff like this in JavaScript. I think my eyes will get back to normal after a little while. Watch it. I don't even need to give you this warning. You're all cool. What I do want to say is there's a lot of excitement amongst the JavaScript community right now and it's really cool because you can do these creative visual effects.</p>
     <p>[55:56] The best thing about JavaScript is that you can very immediately share these things. You just do a little cool effect, stick it on your website and immediately it's all over the twittersphere, ends up on Crime Experiments or creativejs.com if you're really lucky.</p>
     <p>[56:15] The best thing about it is there's a real excitement about it and you're rediscovering these cool things and discovering new things as well. That's really cool. You should always experiment. I always encourage experimentation in my courses and just in general really. Experimentation and also of course play because it doesn't matter if things go wrong, right? [laughs]</p>
     <p>[56:40] Don't worry about breaking stuff. Just screw around because often the mistakes can give you the best results. Then, of course, the most important thing is sharing it because everyone on the Internet is excited and interested in this stuff right now.</p>
     <p>[56:55] As soon as you start sharing then other people learn from it. They might improve it. They might add something you didn't think of, you might get it back in a better form. That's what great about JavaScript and HTML is that you can do that so easily.</p>
     <p>[57:06] I think that's pretty much it. There's my link. Seb.lee is my blog, creativecodingpocast.com, and creativejazz.com. There's my Twitter there as well. I hope you've had fun. Thank you.</p>
     <p>[applause]</p>
     <p>Seb: [57:27] I think we have five or 10 minutes for questions if there are any? Yes, PPK? No. Five minutes. I thought he was like, &quot;Me. Me.&quot; Five minutes. We've got time for one question. Two and a half. Maybe three. I don't know. It depends if they're hard. Is there somebody at the back? My eyesight is terrible. Yes, hello.</p>
     <p>Audience Member 2: [57:52] Hi there.</p>
     <p>Seb: [57:53] Hi.</p>
     <p>Audience Member 2: [57:53] Great presentation.</p>
     <p>Seb: [57:54] Thanks.</p>
     <p>Audience Member 2: [57:56] I've seen this all with Flash. Do we have such a tool as Pixel Bender available for JavaScript?</p>
     <p>Seb: [58:03] Kind of because you've got GLSL and Web GL, which is a shader language, so you do. I'm not really an expert in this stuff, by the way. I'm just making it up as I go along. I think it's GLSL. Is that right? Yeah. I'm just going to pretend that I know. You're going to be able to apply those using CSS. Something Pixel Bender like is coming soon.</p>
     <p>Audience Member 2: [58:38] OK. Thanks.</p>
     <p>Seb: [58:41] Anyone else? Just dumbfounded aren't you? Yes, there's a gentleman here in the middle. Go. Run. Run. He's got bare feet on and everything. Yes. Hello.</p>
     <p>Audience Member 3: [58:58] Great presentation.</p>
     <p>Seb: [58:59] Thank you.</p>
     <p>Audience Member 3: [59:02] At the beginning you showed us a lot of JavaScript code. It's all simple, easy, and you can figure this stuff. I wonder, did you write the simpleparticle.js or the imageparticle.js, does that include a lot of code?</p>
     <p>Seb: [59:17] Do you want to have a look?</p>
     <p>Audience Member 3: [59:18] Is it an existing framework or is it something that you made?</p>
     <p>Seb: [59:21] It's just one file. I'll show you it. I said I'd show you it, I didn't show you it, I've let you down. Here's the simple particle. It's not even using prototype or anything. It's just this very simple hackey way of making objects. There are my properties. Position, velocity, shrink, size, drag, gravity, alpha, and fade. [59:41] That's the update function there. It applies drag to the velocity, adds gravity to velocity y, adds velocity to position, sorts out the size and alpha. Then render, all this does it draw it, in this case a little white circle, onto the canvas. There's not much code. It's not a framework, it's not a library, it's just one file.</p>
     <p>[60:02] Always play with stuff that's simple first. As programmers it's very easy to make things complicated. It's not very easy to make things simple. Things get complicated, even simple things end up complicated, so as long as you can retain the KISS thing. Rather than reaching for the nearest library figure out what you need to do for yourself first maybe. If you want. It's fun. That answer your question? Cool.</p>
     <p>[60:27] Anyone else? Silent. Crickets. You all understood everything I said. That was brilliant. Excellent. I don't usually explain things so well. Thanks very much. Thank you.</p>
     <p>[applause]</p>
     <p>[60:43]</p>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2011/sessions/creativejs-seb-lee-delisle.md" id="comment">
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
