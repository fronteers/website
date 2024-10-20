<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>Reusable Code, for good or for awesome! by Jake Archibald · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p344">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>Reusable Code, for good or for awesome! by Jake Archibald</h2>
     <h3>Videos</h3>
     <video width="480" height="270" src="/_downloads/2010/jake-archibald-reusable-code-for-good-or-for-awesome.webm" controls>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2010/jake-archibald-reusable-code-for-good-or-for-awesome.webm">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="http://vimeo.com/15984466">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2010/jake-archibald-reusable-code-for-good-or-for-awesome.webm">Download video</a> (WebM, 158MB)</li>
      <li><a href="/_downloads/2010/jake-archibald-reusable-code-for-good-or-for-awesome.ogv">Download video</a> (OGV, 65MB)</li>
     </ul>
     <h3>Slides</h3>
     <iframe src="https://www.slideshare.net/slideshow/embed_code/5426258" width="427" height="356" allowfullscreen></iframe>
     <ul>
      <li><a href="http://www.slideshare.net/jaffathecake/reusable-code-for-good-or-for-awesome">See slides on SlideShare</a></li>
      <li><a href="/_downloads/2010/jake-archibald-reusable-code-for-good-or-for-awesome.pdf">Download slides</a> (PDF, 17MB)</li>
     </ul>
     <h3>Transcript</h3>
     <p>Jake: [0:04] Hello everyone. Welcome to Reusable Code, For Good or For Awesome! We're going to have a look at what makes reusable code reusable, that's like the API, its style, how it's presented, and how you can help users get really creative with the things that you've made.</p>
     <p>[0:18] I'm kind of one of the anonymous speakers at the conference, so some kind of introductions are in order. I'm Jake Archibald. Hello! I come from the north of England, and to give that some context, that's somewhere where you're considered to be overly clever if you can operate a tap [laughter] or if you can read long words without getting a nose bleed. Frankly, for me, I can operate a tap, so I was sent down to London to the BBC to be domesticated. That turned me from an uncultured northerner with a bad taste in beer into an uncultured northerner with a better taste in beer.</p>
     <p>[laughter]</p>
     <p>[0:57] During my stay at the BBC, I accidentally found myself developing a lot of reusable JavaScript. As I've said before, I left the BBC and now I work at the creative agency, theTeam, doing much of the same thing. I've designed a lot of APIs over the past few years, and some of them worked, and some of them really didn't. It really surprised me how difficult it is to get an API together that works as apparently, there are pitfalls around.</p>
     <p>[1:24] The way I see it there are five elements to writing good reusable code, and they are consistency, flexibility, readability, writeability, and kind of useful-ability.</p>
     <p>[laughter]</p>
     <p>[applause] [1:37]</p>
     <p>Consistency: [1:46] The power to make your code predictable and familiar to your users. Flexibility: The power to let users get creative with what you've built. Readability: Can you make your code familiar to those who aren't familiar with the API to say, &quot;Does it read well?&quot; Writeability: The ability to create good documentation to really help people use your code. Obviously, kind of useful-ability is actually making something that people want to use, it does something that people want.</p>
     <p>[2:13] Once all these powers combined, when you've got all these together, you are Captain Adequately Reusable JavaScript.</p>
     <p>[laughter]</p>
     <p>[applause] [2:20]</p>
     <p>[2:21] It's not the best superhero man in the world, but Marvel [indecipherable] had the copyright on most two and three word combinations. But, you can't become the captain until you've mastered these things. We're going to look at some good examples. We're going to look at some code and see where they meet these things and where they fall down in sort of look at a carousel.</p>
     <p>[2:45] OK, so we begin where most things do, at the start, searching to find something worth building. That might be something that people need now that doesn't exist or something that you can anticipate people needing in the future. Or it could be something existing that you think you can do in a better way, you could be faster or have a different API. That could be like an application, something the size of Google Maps or something like that or just a small component like a cross-domain communication helper. There are no size boundaries when it comes to reusable code.</p>
     <p>[3:20] What you create doesn't even need to have a specific commercial application. Take the laser for instance. In the beginning, there was no laser, and then, one was invented. But it was more of a scientific triumph rather than it didn't really have a commercial application. So, it was like, &quot;Oh, you've made some lights! Excellent! Thank you very much!&quot; But then later, we have lasers everywhere, and everyone loves lasers. Now, they are in commercial applications, in CD players, etc., etc.</p>
     <p>[3:45] So, in terms of JavaScript, you might want to write a WebM or a WebP encoder even [indecipherable], and people will think you're insane, what have you done that for, and then someone more insane will come along and find an awesome use for it.</p>
     <p>[4:01] So, for the sake of this presentation, we're going to look at building a carousel. This comes back from my days at the BBC where the recent design standard, and this appeared in all of the documents, before, &quot;OK, right. So, we've got some images there and some arrows. So, we've got some kind of carousel going on.&quot; As we looked across the overt designs, this thing had spread like a virus. It was obviously some designer who had gone to a conference, and they were told about the usability of a carousel and it just spread through them, and every page had a carousel on it.</p>
     <p>[4:29] We thought, &quot;OK,&quot; we looked to what was there, it was open source, at the time, and there really wasn't anything there that had accessibility and usability, and especially the design requirements that we had at the BBC.</p>
     <p>[4:41] So, we wanted to make something for the people at the BBC to use for every team creating their own, something that would have the flexibility and the design. So we started gathering requirements. We need to work out what this thing is actually going to do.</p>
     <p>[4:56] Gathering requirements, that can mean talking to designers or potential users or just doing research into similar things. So, if you're making something like a helper for Canvas, then, obviously, just going and looking at what people are doing with Canvas, what are the common things that people use Canvas for, how can you make that easier for them. For us, it was the carousel.</p>
     <p>[5:15] We went and talked to these designers and said, &quot;Hey, look, you've got this thing, how does it work? Tell me what happens when I press the button.&quot; Then, from that we got the designs. To demonstrate the basics of the carousel, I've made a mockup of people which I have opinions about, and that's these guys.</p>
     <p>[laughter]</p>
     <p>[5:31] So, the basics were we've got a button, you click the button, and it scrolls through all of the people. One thing that we got is, &quot;Hey, this was a usability thing here. We want our carousel to have a definite start and an end.&quot; You can't go past jolly racist, Mel Gibson. He did use those words. But you can't past Mel Gibson. To go back to the start, you have to go the other way, and that's the usability concern. What we also got from another designer was, &quot;Hey, there's this usability thing I've heard of, so we want our users to be able to start F1 driver, Fernando Alonso, but move back and look around.&quot; So that was the first few requirements we had.</p>
     <p>[6:17] So, that was the basics of what we had done. So, what did we do then? This is where the APIs came in. You want to do some feasibility code just to test that what you're trying to build isn't impossible, but generally, you want to design the API before you've written any implementation. The API and this documentation really are the cornerstones of reusable code.</p>
     <p>[6:39] Bruce Wayne devoted his life to fighting crime when his parents were killed. He later became Batman, and that's his creation story.</p>
     <p>[6:51] I also have a kind of creation story, which I'd like to share with you. Imagine a 13 year old me, sort of the harsh end of puberty, sort of spots, crazy curly hair. My mom said to me, &quot;Hey! There's a good TV show coming on the History Channel. Would you like to watch it?&quot; And I said, &quot;Well, what it is about?&quot; Because it's the History Channel, it was a 95% chance it was going to be Hitler or the Egyptians, and we were doing those at school, and I didn't want to watch anything more on my weekend.</p>
     <p>[7:19] She said, &quot;No, no. It's called Historical Fallacies.&quot; &quot;Well, what's a fallacy?&quot; &quot;It's something that's wrong. It's sort of these misconceptions people have about history in the States, and they're going to be debunking them.&quot; &quot;That sounds pretty cool. I'll watch that.&quot; But no, no, there had been a mistake in the TV guide. The show was actually called Historical Phalluses.</p>
     <p>[laughter]</p>
     <p>[7:40] So there I was with my mother basically watching a show about cocks.</p>
     <p>[laughter]</p>
     <p>[7:48] Stone ones, clay ones, paper ones, painted ones. They had a lot of variety. I actually watched quite a lot of it just sort of gripping my chair going, &quot;No, please debunk something! Just get off the bit about the cocks and onto the rest.&quot; But, you see, that moment didn't come. &quot;Oh, I think they've got it wrong,&quot; my mom said. &quot;Yes, yes I think they have.&quot; No child should have to watch a show about cocks with their mom.</p>
     <p>[laughter]</p>
     <p>[8:11] From then on, I've vowed to take a stand against bad APIs and documentation so others wouldn't have to go through the same thing I did.</p>
     <p>[laughter]</p>
     <p>[applause] [8:19]</p>
     <p>[8:21] So back to the land of code for a little bit. What is the benefit of a good API? Well, the better the API, the more the user is going to get out of your code. A bad API may hide those strengths from the best way of doing something. When you see those sites that like, oh I didn't know that about Photoshop, well, you didn't know those things because Photoshop is really bad at telling you it had all these features. We don't want an API like that that hides its best features.</p>
     <p>[8:51] APIs are also difficult to change as well. A medium to large API change, it tends to be backwards and incompatible. Even if it's a change for the better, users may not even appreciate it.</p>
     <p>[9:04] Take a look at these buttons and have a quick think about what you think these buttons might do. These are buttons on the London Underground. Now, on the Underground, as soon as the train arrives at the station, all of the tube doors open, these buttons do absolutely nothing. You can tell who the tourists are on the Underground because they're the ones pressing the buttons, and there's all the commuters going &quot;Tourist! Doesn't know the buttons don't work.&quot;</p>
     <p>[9:27] But, on the Docklands Light Railway has this button, and the Docklands Light Railway is kind of an extension of the London Underground. It's somewhere where I used to live in London. This button does work. In fact, you have to press it in order to get the train doors open.</p>
     <p>[9:41] I see this quite often, and one that sticks out in mind, I was approaching my station, and there was a couple standing in front of me. The train arrives at the station, the button lights up, it starts beeping, the doors aren't opening. The woman, she goes to reach for the button, and the boyfriend stops her and goes, &quot;No, no, no, the doors open automatically.&quot; I needed to get off the train as well, but I thought, &quot;This is worth watching.&quot;</p>
     <p>[laughter]</p>
     <p>[10:05] So, the train beeped some more, and obviously just carried on moving, and he got this really evil look. It's perfectly illustrated that he was presented with this broken API that he'd gotten used to, and that was it, so it developed his behavior around something broken. When he was presented with this fixed interface, it caused him a problem, and we don't want to be doing that to our users.</p>
     <p>[10:31] We're going to make a function to make this carousel to start with. Not all reusable code requires a public API. You can just have something which loops around the page and fetches all of the elements of a particular class and does something with them. But, we need a bit more configuration than that, so we're going to jump into function straight away, but that begs the question, where do we put the function?</p>
     <p>So, we've got a few choices. We've got global scope, some kind of namespace thing, sending existing object, and a library plugin. Now, I'm not going to go over it again.</p>
     <p>[10:59] Robert who told me yesterday he's my dad. All right, I'm confused. He'd have been 10 when he conceived me, which is why I'm never going to Sweden. Anyway, the global scope is out, what about namespaces that we've touched upon already, but obviously, namespaces are there to group similar things together. There's no actual namespace in JavaScript, but as we've already seen, objects can be used in a very similar way. So I'd have something like jToys.carousel(), and in laser, I could've have jToys.accordion().</p>
     <p>[11:29] I've only made one entry into the global namespace, but now I've got two things working. This keeps the global namespace quite tidy. Also, if when I see this code in a file, I can go, &quot;Oh, OK, so this is something to do with jtoys,&quot; so if I need documentation or help, then I'm going to look, do a Google search for jToys or something like that. So, it's quite descriptive.</p>
     <p>[11:51] Namespaces can also contain other namespaces as well, and you can build up multiple levels of organization. Something like this. So here, I've got a sub namespace. If you want, I can put the user interface components in there and I've got NET, which is what I've got if something's going to get data from another site or something. This kind of organization can go too far. You need to be careful not to over organize.</p>
     <p>[12:10] So a bit of code like this, it's too much organization if we're only going to make user interface components. It's an extra namespace there, that's a waste. I see that you've got a lot of code and it ends up looking like a trophy shelf with only one trophy in it. It's this more organization than stuff to be organized, and it looks a bit sad.</p>
     <p>[12:28] So, just organize when necessary. And because you can always alias for backwards compatibility, as well. To give an example, QUnits, unit testing framework for JavaScript by the jQuery guys, they have their function .same for a de-comparison of two objects.</p>
     <p>Then, [indecipherable] came along, and they defined that function, and they've defined it as deepEqual, doing the same thing, but a bit more descriptive. It refers to the fact that it's a decomparison. So QUnit, they wanted to meet this standard and they changed the name of their function, but to maintain backwards compatibility of all the existing code, they made a simple alias and it is just as simple as that, just one line.</p>
     <p>[13:07] So, namespaces, they seem OK. We had to make an entry into the global namespace there, maybe we can get away without making one at all. That's when extending the existing objects, that's when that comes in.</p>
     <p>[13:19] In JavaScript, all objects can be modified. So, I may have something called .sum, which will take an array of numbers and add them all together. But, if it's always just acting on an array, then, maybe I could just add the method onto the array like this, and it's already shown here [indecipherable], but we've not made an entry in the global namespace.</p>
     <p>[13:39] So, yeah, why not? It can make a quite sexy-looking, readable code. A better example would be this, which is kind of inspired by Rails where it's (6).weeks().fromNow(). If you think about how much code you would need to do that and working on dates is a pain in the ass, so something like that is a real lifesaver, and it reads fantastically.</p>
     <p>[13:57] It's easy to implement, as well. So I just add onto the prototype of the number, a week's method, which will turn the number into a date, and then add onto the date, object and method, and call from there, which would add the two links together, and that's it. It's relatively easy.</p>
     <p>[14:12] So, what's the catch? Well, the problem comes if you've got two pieces of JavaScript on the page that both adds a method onto something like number of array, and it's called the same thing, but behaves slightly differently, maybe just one has an extra parameter or they're in a different order. So one's going to override the other. One bit of code is going to get something that it doesn't expect, something's going to stop working.</p>
     <p>[14:34] And this is not...The worst one is well, what if it's not another piece of JavaScript but it's a standard that comes along, and now, a new JavaScript standard says, &quot;Hey arrays are now going to have a .sum function.&quot; Now, you're going to be either overwriting the one that's already in the browser or letting it through. In one case, one bit of code's going to work, one bit's not, depending on which function it's expecting.</p>
     <p>[14:57] This is not farfetched, either, so getElementsByClassName() was added onto the document object by some libraries like Prototype and Base2. You'll be able to get elements that had a particular Class Name. In Prototype JS it returns like an array of sort of objects, so you could do .slice or .each or one of the other methods that that prototype gave you.</p>
     <p>[15:17] But, then it became part of HTML5, and it returns, as you can see up there, a node list. Now, a node list didn't have a .slice method, but worse, it returns a live node list.</p>
     <p>[15:30] Now, the thing about live node lists, so I can get all of the comments on the page like this, and it would have a length of two, and if I add another element to the page with ID of Class Name comments like that, comments.length is now three. The variable has updated itself automatically, that's the live part to live node list.</p>
     <p>[15:51] But this behavior, it's not possible to do that just in plain JavaScript. We don't have all of the events to be able to emulate that, so it may not be cross browser. So you end up with these small differences between the Base2 implementation and then the one that was actually coming from the browser. The golden rule really is, &quot;Don't mess with objects you don't own.&quot; It's a no for existing objects for me, anyway, that's my opinion.</p>
     <p>[16:18] But some objects do invite you to add to them, and they're the exception. That's where library plug-ins come in. It's very similar to extending core types. In terms of libraries, we're going to look at JQuery. That's JQuery, the JavaScript library, not to be confused with Jake Weary who is a small-town American actor.</p>
     <p>[laughter]</p>
     <p>[16:37] And he won't solve your JavaScript bugs no matter what time of night you call him, I promise you.</p>
     <p>[16:49] So, I could add something like this onto the JQueryobject.carousel, and now making the carousel like that, and it looks really nice, and that's really easy to do as well. So, I decide JQuery.fn.carousel, and now that function's part of the JQuery object.</p>
     <p>[17:02] I can see a little bit of magic at first, but once you realize that '$' and 'jQuery' are exactly the same thing and jQuery.fn is just a reference to jQuery.prototype, you can see now it's exactly the same as when we were adding methods onto array and number and date.</p>
     <p>[17:20] Because of that, you can still have collisions. You can still have two bits of JavaScript on the same page. If you've got a lot of plug-ins, they tend to attack jQuery.fn with lots and lots of methods. So you can still end up with a problem where one function gets overwritten by another and something ends up with the wrong behavior. But the browser's never going to add something onto jQuery.fn, so you're relatively safe. It's a lot better than extending your core object.</p>
     <p>[17:43] So, yes, library plug-ins, they're OK, as well. So, which do you pick?</p>
     <p>[17:50] Well, it's really down to you. It depends on who is considered the users. If your potential users are the kind which know jQuery rather than JavaScript, and we know those kind of users exist, then, yeah, definitely do it in the jQuery plug-in way because otherwise you're outside of their comfort zone. If you're want it to be library agnostic or for a different library or you're working on a server with something like NodeJS, then that has a very traditional JavaScript model, you definitely want to be doing it the namespace way.</p>
     <p>[18:17] We're going to continue to look at both because of some interesting differences between the two. The important thing is to be consistent. Don't mix and match the styles. That's why the consistency is one of the important elements we're looking for. It's not just consistency within your own code, but consistency with other code the user is likely to have come into contact with.</p>
     <p>[18:36] That's really difficult because inconsistency is everywhere. You only have to look as far as core JavaScript. If I want to do something to a string, I can call it method on it or something like this: '.toLowerCase', so I've got an instance method. If I want to create a particular kind of string, there are factors [indecipherable] that fit on the string objects. That behavior is the same for data objects, regex, arrays, very, very similar.</p>
     <p>[18:58] However, when it comes to the number object, you think like if I had a number like this and I wanted to round it, I'd call an instance method because that's how other JavaScript objects behave.</p>
     <p>[19:07] If I wanted to create a particular kind of number, I'd have my factory methods like I do with string, but that's not how it works in reality though. We have to go through the math object, which is this collection of static methods, and it's really, really different from the rest of JavaScript. Like most of the world's problems, this is Java's fault. This is something that was deliberately copied from Java World.</p>
     <p>Consistency: [19:30] with other languages, that's not a bad thing at all, but in this case, it doesn't really work because people who do JavaScript, there's not a lot of us who've come from a strong Java background, but that wasn't to be known at the time.</p>
     <p>[19:43] So, given all of this inconsistency that we face from day to day, we need a kind of guide, a master or sensei in terms of consistency, and that man is Patrick Stewart. I picked Patrick Stewart because his powers of consistency are so strong that he hasn't changed physically in 35 years!</p>
     <p>[laughter]</p>
     <p>[20:01] Don't worry too much about the first image, I think it's a wig. He never had hair! When you're coding, ask yourself, &quot;Would Patrick Stewart approve of what I'm doing here?&quot;</p>
     <p>[laughter]</p>
     <p>[20:16] With that in mind, let's move on. So, we need to do something with functions and parameters one of two ways we've identified to make it work  for the carousel. So, we want to start with documentation.</p>
     <p>[20:30] Why do we start with documentation? Well, things might make sense in your head, but your head doesn't store information in a linear way, and when you explain to me, to another user, it's going to be in a linear way.</p>
     <p>[20:40] You need to find out as soon as possible if what's in your head actually works on paper because the easier an API is as a document generally, the easier it is to use. That's why writability is one of the important elements we're going to look at. Good, clean documentation is far too rare in the reusable code that I see.</p>
     <p>[21:01] OK, not all code would require documentation. If you were going to build something like a fuse in your trigger system for a biological weapon, then you wouldn't want to document it if you wouldn't want the feds to find out how to disarm it. Because of this, this is why I think that code without documentation should be considered an act of terrorism.</p>
     <p>[laughter]</p>
     <p>[21:21] Also, if your documentation is wrong, then little children might end up watching shows about cocks with their mom, and that can scar a man!</p>
     <p>[laughter]</p>
     <p>[21:29] So this is a JsDoc Toolkit. This is a documentation system which I prefer. It's inline docs, so these would go in files, these would go in your actual JavaScript files where the implementation is going to go. In the meantime, they act as a kind of placeholder. I like JsDoc Toolkit because it's implemented in Rhino, and then Java [indecipherable], and JavaScript even on top of that. So I can hack around of it, because that's the language I'm most comfortable with, and it allows you to write templates as well. So you can have all these docs and you can make it spit out a page which looks like this. If you have some design skill, then, unlike me, you'd make it look a lot prettier than that. You can have your own tags, it's really configurable.</p>
     <p>[22:08] So here we've documented, you can see, we've got the method name. We're saying, yeah, it's going to be a function, here's what it does, it takes a parameter, it's a CSS selector, and there's an example there as well.</p>
     <p>[22:18] Examples are very important. It's worth adding a few, a couple of common uses and then less common usage because that lets you test drive your API before you've actually done any implementation work. You might find out really early on this doesn't feel right, so in this case, it's wrong, and it's better to catch that now than before you've invested a lot of time doing the implementation.</p>
     <p>[22:39] If you're writing a plug-in, it's slightly different. There's no parameter because we work on the jQuery object itself, but it's largely the same. Here, I say for each element in the set of matched elements, I'll turn each element into a carousel, and I use that language intentionally because if you look at the jQuery documentation, you will see that same stuff there, and before each element, a set of matched elements, first element in the set of matched elements [indecipherable]. So they've been consistent within themselves. Because we're now in their domain, we should adopt their consistencies. And being consistent, in terms of documentation, that scores real points with the big man.</p>
     <p>[laughter]</p>
     <p>Jake: [23:19] If you're working on a team as well, this is a good point that you can send this code around to the other guys on the team and get their opinions. Because I know what it's like if you've worked on something for a week and then you say, &quot;Hey guys, what do you think of this?&quot; and one goes, &quot;It's crap,&quot; you're horrified. I've spent a week on this. Whereas if you're just sending documentation, you're probably more likely to listen to reason or certainly constructive criticism anyway, and you might be able to spot potential areas of confusion or something you might not fault [indecipherable] in your API.</p>
     <p>[23:48] It's very important that we name our functions and parameters consistently. There's that word again, consistency. I knew consistency was going to be a big part of this presentation, so I did some research on it. I say research, I just did what everyone else does and looked it up on Wikipedia. I was really surprised to see that it just said &quot;not PHP&quot;.</p>
     <p>[laughter]</p>
     <p>[24:07] I was very confused. So, I went and had a look at PHP string functions to see what all the fuss was about. So I see string function, this now underscores camelCasing, but you know, it's fine as long as it's consistent. There's a kind of prefix, str, that's for string function.</p>
     <p>[24:25] And as you look down, underscores start appearing, the prefixes become different suffixes, and then some functions are just taking a piss of a mix of styles, some underscored, some not. Do you think Patrick Stewart likes PHP? No he does not!</p>
     <p>[laughter]</p>
     <p>[applause] [24:38]</p>
     <p>[24:39] I should say for balance that the docs in PHP are actually really, really good and there's a lot of language that I think could do with the kind of documentation PHP has. It is just a shame the rest of the language is like being wrapped in barbed wire and being kicked down the stairs.</p>
     <p>[25:00] So thinking of our requirements, we need an option for looping because we saw some carousels loop, some don't. We also need an option for how fast it moves from one item into the other because websites aimed at teenagers are going to have a shorter sharper movement whereas fast things scare old people, so it's going to be a smoother movement for them.</p>
     <p>[25:19] We add to the configuration, and you can see those parameters coming into the documentation. They have default values, which means the user doesn't have to enter them. So if they're happy with the defaults, it keeps their codes smaller, and it's good.</p>
     <p>[25:30] Let's take a closer look at the example there, '#whatever, true, 500'. The first parameter is very obviously a CSS selector, but if you don't know the API and you haven't read the documentation, you have no idea what the other two do, and that's a problem because readability is one of the powers we're hoping to get.</p>
     <p>[25:52] We try to make the arguments read well. Take a look at this bit of jQuery, dollar, this thing is obviously a bit of HTML appended to this thing, which is obviously a CSS selector. It's brilliant. It's short, it's succinct, it's fantastic. Some things we build just by convention, so something that's a size, it's just two numbers, but we can just assume width and height just through other APIs we've likely encountered.</p>
     <p>[26:17] But then there are things like this, cloneNode (true), I mean, I suppose most people in the room probably will know what it does, but only because you've read the documentation. If you didn't know what it did, you wouldn't know it was what the true meant in that piece of code, and that's something we want to avoid.</p>
     <p>[26:33] But our archenemy when it comes to readable code really is regular expressions. They look like my grand dad writing a text message and not quite being able to find where the letter keys are. Regex is really bad because it's not even readable by the person who wrote it. You could even close your eyes and in 10 seconds, look at it again, and it's like, &quot;What is this mess I've spent the last 20 minutes on?&quot; Ideally, we want to write an API that is readable and writeable by everyone.</p>
     <p>[26:59] So, our carousel has more problems than simple readability. This true 500, I only want to set the duration of the moves, then I have to kind of skip over the second parameter. I do something like undefined or null, and now I've got Boolean in three states, and that's never a good sign in a piece of code. A big contender in terms of this is SWFobject, if you've used that. If you only want to access the eighth parameter, no, no, no, no. I only pick on SWFobject because I've already picked on PHP. You'll see lots of examples of that in there.</p>
     <p>[27:33] What's the solution to this? We use option objects for optional arguments, so here's a bit of code if you know option object, but if we add the option object in, it looks like this, now the user can add just a loop or just duration, both or neither. Because it's like key value pairs, we can see that loop through. It now reads. Just make sure that you document the options. Just last week, I came across a piece of code which was documented like this.</p>
     <p>[28:01] The second parameter is options. Thank you very much, OK, I am going to have to read the code now. And I think that is mainly because a lot of documentation systems make it really difficult to document option objects, which is one of the reasons I adopted jsDoc Toolkit is because it lets you use terms like this.</p>
     <p>[28:17] You have got your opt parameter, and then you just document properties of that opt stop duration. So what other options did we add? So we have got this already.</p>
     <p>[28:26] We also added spotlightSize. What does that do? It is the number of items in the middle of the carousel. So this carousel has a spotlight size of two, which would be the default because it is the highest number of elements that can appear in the space the carousel has.</p>
     <p>[28:43] Whereas we got from the designers that no, OK, independent of the width, we might want just one item in the spotlight. We chose spotlight because, it is a difficult concept to explain, it is not item count, because we are not changing the number of items in the carousel and it is not view size, because you can see three items there.</p>
     <p>[29:00] So that is why we went for the sort of stage metaphor. There are three items on the stage, whereas one of them is in the spotlight. So you can use metaphors if necessary. I treat them as a fallback, because they have a tendency to mislead users.</p>
     <p>[29:15] I was watching an elderly relative using their computer. I mean, they knew I was watching them. I don't want to get in trouble again. But they had all of their icons on the desktop sort of pushed to the sides and the corners.</p>
     <p>[29:27] And so I said, &quot;What is going on with the icons? What have you done that for?&quot; And they went, &quot;Ah ha ha ha!&quot; They sounded really proud of themselves, which is always a bad sign that it is something I am potentially going to have to fix in ten minutes.</p>
     <p>[29:39] But they said, &quot;The computer said it was running out of space so I have made some space.&quot; And I thought, that is really good. Because if you have got a desktop, like an actual desk top at home, and you need to make some space on it, you can do that without removing any items. You just rearrange them around a bit.</p>
     <p>[29:56] And we need to be careful not to mislead users like that. But also don't mix metaphors as well, because that is confusing. The desktop once again, that is a problem for that. Desktop, desk top, wallpaper - desktop wallpaper. If you saw someone wallpapering their desktop, you would call them some professional help or something.</p>
     <p>[30:19] So yeah, back to the code. So what other options did we add? We added 'step', and that came out with talking to designers as well. And that is the number of items to move every time one of the arrows is clicked. So default is one, and you click the button, and it moves by one.</p>
     <p>[30:35] But you might want something where it moves by two at a time, like this. And you kind of get this paged effect on the carousel. And because we have an even step, and an odd number of items, we need to correct this count so it keeps all of the pages in check.</p>
     <p>[30:50] So when we think about it, when we start to think about it, the spotlight size and the step, your steps are going to be one or the same as the spotlight size. It is very rare for you to have a carousel of ten items and move by three at a time. It would be a bit of an odd thing to do. So here we are not considering common usage, and that is something we need to do.</p>
     <p>We need to make the common things easy ahead of the edge cases. We could improve the API by having something like paged be a Boolean, so 'page: true' move by the number of items in the spotlight, 'paged: false' move by one item.</p>
     <p>[31:23] But now we have lost the ability to do that edge case, the one where you have got fifteen items in the carousel and move by five at a time, or something like that. And that is not good either, because then someone is going to come with a good reason that they need that functionality.</p>
     <p>[31:36] So we could have both options and let the user pick the one which works best for them, if you want easy 'paged: true' or if you want to be specific with step and then add a number. But this creates a problem, because now we have got two options that clash, two options that kind of are dealing with the same thing.</p>
     <p>[31:50] But they can't be used together. These are void options which depend on or clash with other options. It makes the code really messy. To use option x, option y must be divisible by four on a Thursday or something like that.</p>
     <p>[32:04] To give a real world example, this is, see it says free. It was more of a Microsoft thing that was adopted. You get overflow-x and overflow-y. But certain combinations of these can't be used together.</p>
     <p>[32:17] If you go and look at the W3 docs it says, &quot;Some combinations with 'visible' are not possible. If one is specified as 'visible' and the other is 'scroll' or 'auto', then 'visible',' is set to 'auto'.&quot; What? That is just words. I have to sit down and just really work out what that means. And remember, bad documentation, cocks with mum. Think of the children. Don't do it.</p>
     <p>[32:39] So how can we solve this? We have got two options that are dealing with the same thing. So there is our first problem. It should be one option for one thing. That is the one to one relationship.</p>
     <p>[32:50] But there are different types of values, and we can make use of JavaScript's loose typing to our advantage here, and roll them into one option, where page could be 'true' or 'false', or it can be an integer. So there you have got the easy case, but you have also got the edge case as well.</p>
     <p>[33:05] Now 'paged: true' does it really fantastically. But we have managed to make the common case easier. So it is kind of the greater good kind of situation where we are making things for the majority of people easier. But we have still got the configurability for people want to do it that way.</p>
     <p>[33:22] And finally, having parameters of varying types - that is fine, we can do that. But be consistent in the types that you offer for similar things. One that really winds me up at the moment is color values in CSS. I was ranting at the pub about it last night.</p>
     <p>[33:35] In CSS you can specify color values as using a set of 8-bit values, either by a hex or like this, with three 8-bit integers. Or you can use percents, that is fine. You can use relative values. But when alpha comes along, alpha has its own special kind of value. It is between zero and one.</p>
     <p>[33:55] It is not a percent, it is not an absolute value. And in terms of consistency that is a little bit surprising.</p>
     <p>[laughter]</p>
     <p>[34:01] So what should have been done here? Well, you should be able to, really, in my opinion, once again it's my opinion, you should be able to mix percentages and absolute values.</p>
     <p>So you do something like this and you have your three 8-bit integers, and then your percentage because that case is for an an inconsistency in graphics applications like Photoshop and Gimp, where regrettably it's presented to you as an 8-bit integer.</p>
     <p>[34:26] But opacity even though it is just an 8-bit integer, is offered to you as percentage. So it kind of takes for that systems, but you could also do the 8-bit integer if you wanted. So we have gone through a lot so far, and we need to make sure that we are on the right track, so we are heading in the right direction.</p>
     <p>[34:42] So we have to test our API. And here's the problem, it is really difficult to proofread your own work. Have a look at this picture. And have a look at what you think you see in that picture. Maybe this is looking a bit like New Zealand. What do you guys see in it?</p>
     <p>[Audience response 35:02]</p>
     <p>[35:00] So a few people are shouting out. I hope everyone didn't see it, because it kind of spoils the illusion. But if I color it in, using my Photoshop skills, though I realized last night that I use the lips of the woman at the top...nevermind. But yeah it's vampires. If I remove those now. Just go back to the picture before.</p>
     <p>[35:18] If you didn't see it before, can you look at that picture now and not see the vampires? So you look at a problem differently now that you know the solution. And that is not always in a good way. And this happens with code and API's as well. You are probably excited to think of how to implement it.</p>
     <p>[35:35] You might have thrown some old API's away but some of the mess from those is still hanging around in terms of the design. You need someone with a fresh opinion to come and take a look at it. So show them your code examples, just the code examples, and see if they have a rough idea of what it does.</p>
     <p>[35:48] Because that will show the readability of your code. They don't need to know exactly what it does, but a rough idea is good. Then let them read your documentation and capture any questions that they have about it. Because if they are asking questions, their questions should probably be answered by your documentation.</p>
     <p>[36:03] It is quite simple. And if you make this a continual process as well, like keep checking with someone else. A new person can easily spot silly mistakes that the author of the actual thing wouldn't.</p>
     <p>[36:13] My favorite photo I ever took was back in my hometown in Carlisle. And I was walking past the bike shop and I saw this. And it was clear that someone has just written that sign and just went, right, 16 boys, in the shop window, no problem.</p>
     <p>[36:27] And if only they had just shown that to someone else. Just said, hey, what do you think of this sign? And they say, &quot;It makes you sound like a massive pedophile. I don't think you should put this up in your shop window.&quot;</p>
     <p>[36:27] We have covered most of the elements now in quite a lot of detail except for one. And that is the flexibility. So we added a few options, but there is more flexibility that we can achieve. So how many times have you used a JavaScript component that doesn't quite do what you want it to do, and it can't be changed to do that little bit different?</p>
     <p>[36:59] And that can be infuriating. So how can we stop that happening to our users? Well, first you need to resign yourself to the idea that what you make is not going to do everything the user wants, certainly not all of the users, anyway.</p>
     <p>[37:12] So far we have got this sorted, so carousel positioning, the looping, the durations, spotlight sites, et cetera, et cetera. But what about this - what if they want to make a carousel like this where there is no back button now, that's gone and the forward button is in a very different place, and some more things happen like, as it moves, the label sort of fades out. But the basic behavior is still there. It has still got to do the positioning. It has still got to do the moving, the looping, and all of that stuff.</p>
     <p>[37:39] The hard work is common. But to make a carousel like this the user is really going to have to fight the design that we've put down there. So how can we sort this out, and how can we have more flexibility?</p>
     <p>[37:48] Well, we can build something that is more abstract to use or inherit from. Something which has a subset of the behaviors, all of the behaviors, but none of the design.</p>
     <p>[38:00] So it would have our own carousel, which would have a full design. Then we would have something else, like a carousel pane, is what we called it in the end. It is basically the carousel without the buttons. And there we called it the carousel pane, because it is like a window pane.</p>
     <p>[38:14] But also because it has the painful little bits of documentation. We were very bored at the BBC. There is no code duplication. The carousel will just use the carousel pane, or inherit from it, or extend it, and just add the buttons on top. And the carousel becomes quite a small module.</p>
     <p>[38:31] If the user wanted to create the carousel like we saw before, they build it on top of carousel pane. They use that. And they would have to make their own buttons. So it requires more setup to get anything going, but it means that they get a bit more freedom with that. They can write a bit more and get a bit more out of the code.</p>
     <p>[38:46] But by keeping the carousel, we have still got the really simple version. This eases the learning curve, and that is your perception of progress as you go along. So I decided I would make a carousel. I go onto the website for the documentation for this.</p>
     <p>[39:02] And I look there, and there is a code example of one line that gets me a carousel on my page. And there, I can see it working. I can click the buttons, I can see it moving. I am interacting with it already. And then I can start customizing it, adding options.</p>
     <p>[39:16] And every time I do that, I am seeing the behavior change. I am seeing it become more and more like what I want. But then, yeah, I want to change the buttons. I want to change some of the behavior the carousel doesn't let me do.</p>
     <p>[39:23] That is fine, we can just change it and I can fix the other one. And now I have got to do a bit more work. But I wasn't thrown into the deep end. In the same way we were talking about progressive rendering earlier on, and that's the perception of speed.</p>
     <p>[39:36] Making your API's like this has to have a perception of progress. You are slowly introducing the user to features, and they can see feedback of what they are building as it goes along. And this technique is not just for user interface components like this it can be used on lower level things, and in jQuery there's '.get', .get, this file, tell me when it's done please.</p>
     <p>[39:54] And you can't really do much more than that. If you want to do more, you go to .ajax, and you can do the same thing with a bit more code. But you can also do a lot more, like check for errors, timeouts and things.</p>
     <p>[40:05] So there is a very similar model going on there in front of that kind of pattern.</p>
     <p>[40:10] So we have now made a carousel that doesn't have buttons. So that begs the question, how does the user control it? How do we tie a custom button user mix to the actual carousel?</p>
     <p>[40:22] And that is where instance properties and methods come in. So if you imagine this is the code for making a carousel pane. It has got the same options as carousel. How do I now tell the carousel to move? Now that button is clicked. One way to do that is to get an instance.</p>
     <p>[40:38] And we talked about constructors earlier, and so now, I am going to speak of a constructor. Hence the uppercasing of the first letter. And that gives us back an instance. With that instance I can call methods like moveTo 3. And I tie that to a non-click handler.</p>
     <p>[40:53] Click the button, move it by one or something.</p>
     <p>[40:56] This method doesn't return anything in particular, so it returns the instance back again. So you can do chaining. So I could have a metric which gets me the itemsInSpotlight, and that would return something like a jQuery object, and we need to return the color, the text for red, white for a reason.</p>
     <p>[41:12] That is a traditional JavaScript way of doing it. You may want to adopt the jQuery UI, which is quite different. This is where two conventions start to split. So you would make the carousels in a very similar way if you were working with a jQuery UI kind of way.</p>
     <p>[41:29] But you don't get an instance. There is an instance, but it is in the background. jQuery UI doesn't want you to get at it. What the $carousel is - it is exactly the same as if we just made a jQuery object from the element, ID, whatever.</p>
     <p>[41:42] So how do we tell the carousel to do something? Well, you call &quot;.carouselPane&quot; again, where you're counting the method name as a string [indecipherable]. Then you can pass in the rest of the parameters. Once again it just returns back an instance of the jQuery object so you can chain things exactly the same as before. This means you don't have to deal with instances, and if you lose a reference to it, you can get it back using a CSS selector, and that can be quite handy.</p>
     <p>[42:08] But there's also the feeling of repetition I find you've got &quot;.CarouselPane&quot; &quot;.CarouselPane.&quot; Also it becomes quite difficult to name a $carousel because it's not the carousel. It's the element from which I originally created the carousel from and that's too long of a variable name we couldn't use that.</p>
     <p>[42:24] And also you need to be careful that some of the normal methods may stop working. If make a dialogue in jQuery UI and I want to add an event listener to that, I can use jQuery method to do that, like .bind. So some jQuery methods work, but then others such as show and hide don't. They don't show and hide the dialogue. They only show and hide parts of it. If you want to show and hide the dialogue, you can call &quot;.dialogue&quot; with open or close.</p>
     <p>[42:49] Another problem is if you misspell part of it, you get silent failure, which I'm not keen on because if you misspell an instance method like that, then something like Firebug or Web Inspector is going to say, &quot;You got this bit wrong, and here's where the problem is, and could you fix it please.&quot;</p>
     <p>[43:05] As you've probably guessed, I prefer the instance way of doing things. I like having instances of jQuery objects but also instances of discrete functionality such as dialogues and carousels, something I can look at in Firebug or Web Inspector so I can see the methods on it, and it's not being polluted with methods which are actually for other things like you have with the jQuery objects.</p>
     <p>[43:24] So I think what I propose is that we start making jQuery plug-ins that actually return instances.</p>
     <p>[43:32] Or maybe, because I'm working in a jQuery UI environment, maybe I should be consistent with that. If your potential users are well versed in jQuery UI, then do things the jQuery UI way. You're not going to gain anything by doing something a different way to confuse them.</p>
     <p>[43:51] Going back to the examples of the tube doors, it's the same thing. You might see it as being the wrong way, but it's the way people are used to and just changing it for the sake of it is not going to gain you a lot.</p>
     <p>[44:03] So we need to react to future requests in a way that benefits lots of users rather than just one. And that's where adding hooks comes into it.</p>
     <p>[44:12] Imagine someone says, hey, &quot;I have this carousel. It looks like this. It's great. It does almost everything that I want. But can you add me an option that will change the labels so they animate like this?&quot; So they fade out as carousel starts moving, and then they sort of drop in when the carousel stops moving?</p>
     <p>[44:28] OK, so we could add that behavior as an option. So it would be something like, tell me where your labels are, and I'll treat those differently. Tell me how you want them to animate in case you want it to animate in a different way.</p>
     <p>[44:41] Now we're getting options bloats. We're getting options that depend on other options as well and you know that's a bad thing. We had too few options earlier on, and that wasn't great. We found it really improved things by adding options. But you need to know when enough is enough. You have succeeded in your goal in that realm...no more.</p>
     <p>[laughter]</p>
     <p>[44:59] Don't get yourself into option hell.</p>
     <p>[45:04] We could point them in the direction of CarouselPane and say, hey here's this more abstract thing, please go and build it yourself. But in this case, they don't want to change the carousel behavior. They want to sort of extend it. They want the full design of carousel, just this extra bit.</p>
     <p>So I had to think about the request as sort of oh, yeah, break it down into components. That's what I am doing. So you've got the carousel. What they're asking for is basically two things:</p>
     <p>[45:17] When the carousel starts moving, fade the labels out; when it stops, slide the labels in.</p>
     <p>[45:32] So it's the bit of the labels really that are a bit too specific for us, so we're not going to do that. We're going to let the user do something at that point, possibly multiple things. We can separate the commonality out further.</p>
     <p>[45:44] So rather than giving the user an option to do exactly what they want, we give them the means to do it themselves. That's something that's useful for other users, and that's how you're going to see more creative things because you're giving more freedom.</p>
     <p>[45:56] As many of you may have guessed, this is the point where we need some kind of event system. Staying with the constructor instance pattern for the time being, we've got our carousel like this. We've got our instance. If we need to add an event listener, we could do that for an instance method something like &quot;.on,&quot; and &quot;.on&quot; would come from another object. It would inherit from something, and where you get that from depends on what else you've got at hand.</p>
     <p>YUI3 they call it EventTarget. Node.js calls it EventEmitter. Even Flash has something a bit similar and they call it EventDispatcher so using something hopefully not flash  but using something similar where you get those objects you'll get [indecipherable 46: [46:21] 36] and listen for events. And &quot;.on&quot; in most libraries just returns the instance.</p>
     <p>[46:41] So you can chain it like that, and it reads really well. It's &quot;carousel.on('move'.. do this please. So that onviously starts the carousel moving by whatever method. It'll log out hello the listener will catch up. (I'm dying.).</p>
     <p>So a firing event differs slightly from API to API. But it's usually something along the lines of this:</p>
     <p>[46:55] You've got some private, pseudo-private method somewhere. Then when you call, you call something like &quot;.fire&quot; and just pass and get that name in that's it, done.</p>
     <p>[47:09] JQuery and jQuery UI are a tiny bit different. We make our carousels as before, and once again we've got an instance method to add a listener so it forwards &quot;.bind&quot; rather &quot;.on&quot; but does exactly the same thing. The thing to note here is the method is not &quot;move&quot;, it's &quot;carouselmove&quot;.</p>
     <p>[47:25] This is a side effect of not dealing with instances of objects. The method the event fires as if it was actually on the html element itself. Because it shares the same name in its own event space as mouseover and keyup and click, etc., it needs to make itself unique so it's not going to collide with that.</p>
     <p>[47:46] Another thing which I sort of discovered that caused me a problem is that jQuery will when you fire and you trigger an event, it will try and call a method of the same name on the html element. So when we trigger this event, it's going to try and call &quot;.carouselmove&quot; on the html element with what ID, whatever.</p>
     <p>[48:04] And that's a useful thing because if it's a form and you trigger the submit event, it will call a submit method and off it goes. But it also means that you can't name your events, anything that is a method on an html element or might one day sometime in the next 500 years apparently appear on that html element.</p>
     <p>So we've created a backdoor [indecipherable] that complicates things a little bit. You cannot have your events named things like play, or pause or stop or something obviously like that because some of those are already methods. They're likely to become methods on every html element. It's just something to watch out for.</p>
     <p>[48:39] But really fire lots of events, these are all little hooks that a user can use to add behavior. Fire events before something happens. Like you've got your click events that tends to fire before the link is followed, and so that's good but also after the asynchronous action. So you've got the load event on an image, and that happens after the image is loaded.</p>
     <p>[48:58] So document them as well, and this is important, once again, like the option objects. You could just use jsDoc toolkit once again. I'm saying, &quot;OK on this instance, I'll do my carousel. I've got an event that's named 'this', and here's the event object, I'm going to pass into the callback.&quot;</p>
     <p>[49:16] So with those events, the user can get exactly want they want. They can get &quot;on('move')&quot;, fade the labels on them, &quot;on('afterMove')&quot; slide the labels in, and they've got exactly the pages they were looking for. But we didn't have to build it for them.</p>
     <p>[49:28] I've been talking for a while now, so I should wrap it up.</p>
     <p>[49:33] Consider the users, consider the people who are likely to be using your code. If you make their lives easier, they're going to make cooler stuff with your code. We make things easier for users by writing great documentation before the implementation.</p>
     <p>[49:49] This ensures that you design the API, and that's the implementation so it grows from the API rather than the APIs sort of growing around the implementation and you end up with this kind of mutant. Adopt existing conventions where relevant. If you're working in jQuery, be like jQuery. If you're aiming at what Ruby offers, then be a bit more like Ruby, etc., no Jazz, no Jazz.</p>
     <p>Ensure that the naming of your method of these parameters read well. Let your code tell a story. Make it familiar to users who don't know the code. Use option objects for optional parameters. That stops stop people skipping over parameters they don't care about with no's and undefined.</p>
     <p>[50:30] Enter a one line, one parameter usage. Let someone have the small line code to get what they're looking for. But then let them write more to get more of out of the code. You can do that with things like the option objects and the CarouselPane like abstractions and events. That way we let the user be creative. They can sort of do their own thing with what we've made.</p>
     <p>[50:52] By doing this we cover all of the elements, all of the five things. Oh, no, actually except one really and that's the kind of useful-ability of the thing. They're actually building something cool. But having talked to quite a few dudes of you last night and other stuff, it's very clear that you already excel in that area. There are some fantastic ideas. I'm quite envious. So once you've got the rest of the this, then you become captains of adequately reusable JavaScript.</p>
     <p>[51:20] That's it. That's my email address. That's my Twitter. I don't extremely tweet about JavaScript. But you might as well phone me anyway. It makes my ego inflate, and any questions?</p>
     <p>[applause]</p>
     <p>Audience Member: [51:50] You said to fire a lot of the events that you make the models interact. In terms of the performance, there is an issue in some browsers firing a lot of events in those the models in some page.</p>
     <p>Jake: [52:02] Hm, yeah. So, you wouldn't fire a standard, something like a jQuery event on something like an animation, something that you're planning on firing 60 times a second. Yeah, you're going to run into problems with that. They use a technique in events to fire it on a different...I forget the word...but it sort of uses hat so it fires a proper event, so if there is an error inside that event, then it doesn't break the whole code. It doesn't stop whatever event that's been running. And it is that that actually kills performance.</p>
     <p>[52:40] The events are really, really, really fast if you don't do that. But it's kind of nice having that feature.</p>
     <p>[52:43] So, but the things is off the carousel though, the performance is negligible compared to the animation you're about to display afterwards. But, yeah, it's really frequent then. So be pragmatic about it, yes.</p>
     <p>Audience Member: [52:57] Do you have any management tips for companies to develop their own school library and then want to integrate them into all their projects but being able to develop and test a library in a central location with like lots of projects but the library's in a central location. How do you manage that?</p>
     <p>Jake: [53:13] Yeah, so that was sort a big problem we had at the BBC obviously in that we wanted to be able to release new versions of our code, and we didn't really actually have the money for a tester, which was unfortunate. So we were kind of doing a lot of our own unit testing. Sometimes we you would fix a bug, and that would actually break someone's code because they're relying on that bug. Or maybe you've ended up with a large piece of code which was just not running, and all of a sudden you fixed the bug; the code starts running, and everything breaks.</p>
     <p>[53:44] So, yeah, we used a sort of loader very similar to... requireJS. I think we're actually moving to using requireJS now. We let the user say, I want version one of the library, and that would give you the latest version one trying to promote sort of crossed sites that are catching. But more also high traffic sites like iPlayer, like the new thing, we let them be more specific about the version number so we could say, hey there's new version, could you go and test it on your pages, and then up the version that you use. And that would bring it all together.</p>
     <p>But, yeah, it was just about having a central point for the code to live. Everyone would be using the same one. We'd ensure it was cached and GZipped etc.</p>
     <p>[54:29] And the BBC home page when it first launched the - not the new latest design, the one before - we were still in beta at the time. They took their own copy because they wanted something urgent with a few of the files to cut down the HTTP requests.</p>
     <p>[54:43] That became a problem because then next they started wanting bug fixes from us, but they had their own copy. We ended up with this version of Glow which was all mutants. It had little bug fixes in here and there.</p>
     <p>[54:54] So when a new version of Opera came out it changed a way to be a bit more like Internet Explorer and a bit like different to something else in that we had to sort of patch those quickly. Yeah, the end it was like no, it's not worth it for them to cut down the HTTP requests. They want to take the same system as everyone else.</p>
     <p>[55:12] Anyone else? Getting me a beer time.</p>
     <p>[55:19] Thank you.</p>
     <p>[applause]</p>
     <p>[55:24]</p>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>1</strong> comment</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <h3 class="extra">Comments</h3>
     <dl id="comments" class="reacties">
      <dt id="comment-119"><a href="#comment-119" class="number" id="latest-comment">1</a> Clara on 08-01-2021 at 14:36 o'clock:</dt>
       <dd>My name is Clara I am here to make a review about how Dr Charles helped me in fixing my marriage and also to those out there seeking for help and advice on how to save your broken marriage or relationship, few months ago I was having issues with my husband I noticed he has been having an affair with another young lady in his place of work I confronted him but he got angry and say to my face that it’s true, as if that was not enough he went ahead by telling me he doesn’t love me anymore that he wanted a divorce I was to devastated and confused, I pleaded with him that I don’t want a divorce but he insisted,before then I had heard about Dr Charles while browsing on the internet how he use to help people with broken marriages and relationships, I gave it a thought and I decided to contact him, he promise to put a smile on my face again, I followed his instructions and after 3days I was so surprised to see my husband kneeling before me and apologizing for what he had said about the divorce, this is something I never expected, I thank Dr Charle for what he has done for me, now am living happily with my husband and he has stopped seeing the other woman. Please if you are having issues like this I advice you to contact Dr Charles he can help you as well.  WhatSApp:  +2348146708557</dd>
     </dl>
     <form method="post" action="/congres/2010/sessions/reusable-code-for-good-or-for-awesome-jake-archibald.md" id="comment">
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
     <h2>Fronteers 2010</h2>
     <ul>
      <li><a href="/congres/2010/news" title="Fronteers 2010 news">News</a></li>
      <li><a href="/congres/2010/venue" title="Fronteers 2010 venue">Venue</a></li>
      <li><a href="/congres/2010/speakers" title="Fronteers 2010 speakers">Speakers</a></li>
      <li class="current"><a href="/congres/2010/sessions" title="Fronteers 2010 sessions" class="current">Sessions</a></li>
      <li><a href="/congres/2010/workshops" title="Fronteers 2010 workshops">Workshops</a></li>
      <li><a href="/congres/2010/jam-session" title="Fronteers 2010 jam session">Jam session</a></li>
      <li><a href="/congres/2010/schedule" title="Fronteers 2010 schedule">Schedule</a></li>
      <li><a href="/congres/2010/attendees" title="Fronteers 2010 attendees">Attendees</a></li>
      <li><a href="/congres/2010/contact" title="Fronteers 2010 contact information">Contact</a></li>
     </ul>
    </div>
    <div lang="en">
     <h2>All sessions</h2>
     <ul>
      <li><a href="/congres/2010/sessions/the-design-of-html5-jeremy-keith">The Design of HTML5 by Jeremy Keith</a></li>
      <li><a href="/congres/2010/sessions/creating-lifelike-designs-with-css3-meagan-fisher">Creating lifelike designs with CSS3 by Meagan Fisher</a></li>
      <li><a href="/congres/2010/sessions/css-workflow-jina-bolton">CSS Workflow by Jina Bolton</a></li>
      <li><a href="/congres/2010/sessions/high-performance-javascript-nicholas-zakas">High Performance JavaScript by Nicholas Zakas</a></li>
      <li><a href="/congres/2010/sessions/html5-accessibility-is-it-ready-yet-steve-faulkner-hans-hillen">HTML5 Accessibility: Is it ready yet? By Steve Faulkner &amp; Hans Hillen</a></li>
      <li><a href="/congres/2010/sessions/javascript-like-a-box-of-chocolates-robert-nyman">JavaScript - Like a box of chocolates by Robert Nyman</a></li>
      <li><a href="/congres/2010/sessions/progressive-downloads-and-rendering-stoyan-stefanov">Progressive Downloads and Rendering by Stoyan Stefanov</a></li>
      <li><a href="/congres/2010/sessions/real-world-responsive-design-stephen-hay">Real-world Responsive Design by Stephen Hay</a></li>
      <li><a href="/congres/2010/sessions/reasons-to-be-cheerful-chris-heilmann">Reasons to be cheerful by Chris Heilmann</a></li>
      <li class="current"><a href="/congres/2010/sessions/reusable-code-for-good-or-for-awesome-jake-archibald" class="current">Reusable Code, for good or for awesome! by Jake Archibald</a></li>
      <li><a href="/congres/2010/sessions/the-renaissance-of-browser-animation-cameron-adams">The Renaissance of Browser Animation by Cameron Adams</a></li>
      <li><a href="/congres/2010/sessions/the-state-of-html5-inaugural-address-paul-irish">The State of HTML5: Inaugural Address by Paul Irish</a></li>
      <li><a href="/congres/2010/sessions/vector-graphics-for-the-web-brad-neuberg">Vector Graphics for the Web by Brad Neuberg</a></li>
      <li><a href="/congres/2010/sessions/css3-hakon-wium-lie">CSS3 by Håkon Wium Lie</a></li>
      <li><a href="/congres/2010/sessions/css-breakout-andy-clarke">CSS breakout with Andy Clarke</a></li>
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
      <li><a href="https://vimeo.com/channels/fronteers10">Vimeo channel</a></li>
      <li><a href="https://itunes.apple.com/nl/podcast/fronteers-videos/id1136212068?l=en">Podcast on iTunes</a></li>
      <li><a href="http://lanyrd.com/2010/fronteers/">Lanyrd</a></li>
      <li><a href="http://speakerrate.com/events/583-fronteers-2010">SpeakerRate</a></li>
      <li><a href="http://events.linkedin.com/Fronteers-2010/pub/255981">LinkedIn Events</a></li>
      <li><a href="http://webchat.freenode.net/?channels=fronteers">IRC</a></li>
     </ul>
    </div>
    <div class="images" lang="en">
     <h2>Sponsors</h2>
     <ul>
      <li><a href="http://www.easytobook.com/"><img src="/_img/congres/2009/sponsors/easytobook.png" alt="EasyToBook.com" width="150" height="37"></a></li>
      <li><a href="http://frontlab.nl/"><img src="/_img/congres/2010/sponsors/frontlab.png" alt="Frontlab" width="150" height="56"></a></li>
      <li><a href="http://www.informaat.nl/"><img src="/_img/congres/2010/sponsors/informaat.png?v=20100820" alt="Informaat" width="150" height="60"></a></li>
      <li><a href="http://www.mirabeau.nl/"><img src="/_img/congres/2009/sponsors/mirabeau.png" alt="Mirabeau" width="150" height="60"></a></li>
      <li><a href="http://www.opera.com/"><img src="/_img/congres/2010/sponsors/opera.png" alt="Opera Software" width="150" height="53"></a></li>
      <li><a href="http://soundcloud.com/"><img src="/_img/congres/2010/sponsors/soundcloud.png" alt="SoundCloud" width="150" height="81"></a></li>
      <li><a href="http://www.watchmouse.com/"><img src="/_img/congres/2010/sponsors/watchmouse.png" alt="WatchMouse" width="150" height="41"></a></li>
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
      <li><a href="/congres/2011">Fronteers 2011</a></li>
      <li class="current"><a href="/congres/2010" class="current">Fronteers 2010</a></li>
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
