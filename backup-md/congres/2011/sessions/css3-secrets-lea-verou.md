<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>CSS3 Secrets: 10 things you might not know about CSS3 by Lea Verou · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p512">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>CSS3 Secrets: 10 things you might not know about CSS3 by Lea Verou</h2>
     <h3>Video</h3>
     <video width="640" height="360" src="/_downloads/2011/lea-verou-css3-secrets.webm" controls>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2011/lea-verou-css3-secrets.webm">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="http://vimeo.com/31719130">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2011/lea-verou-css3-secrets.webm">Download video</a> (WebM, 116MB)</li>
     </ul>
     <h3>Slides</h3>
     <iframe src="https://www.slideshare.net/slideshow/embed_code/9591089" width="550" height="460"></iframe>
     <ul>
      <li><a href="http://lea.verou.me/css3-secrets/#intro">See interactive slides</a></li>
      <li><a href="http://www.slideshare.net/LeaVerou/css3-secrets-10-things-you-might-not-know-about-css3">See slides on SlideShare</a></li>
      <li><a href="http://speakerdeck.com/u/leaverou/p/css3-secrets-10-things-you-might-not-know-about-css3">See slides on Speaker Deck</a></li>
     </ul>
     <h3>Transcript</h3>
     <p>Lea Verou: [0:05] Hello, everyone. Thank you for being here today. This talk is a bit different from other talks you might be used to. It doesn't have a topic. Sure, it's about CSS3, but it's not about a specific CSS3 feature, and it's not a general introduction. It's for people who have done some work with CSS3 already and just wanted to learn a few things to do it better.</p>
     <p>[0:31] It's little bits and pieces I've discovered while working with CSS3, a bunch of different features. It's kind of like 10 different small talks, the first being - oh, also, I think I have to warn you because I know many of you might be allergic, there might be traces of JavaScript, not many, don't worry. It's not too much, but there can be some traces.</p>
     <p>[1:05] For the first part, I think most of you have worked with a basic case of at least basic transitions. For example, something like this. That's like the very basic transition. I'm pretty sure you probably know that you can specify some easeing keywords to set how the transition progresses. This is the default one, which is called ease, but there are others like ease-in, for example, which starts slowly and then becomes faster or ease-out, which is like the opposite.</p>
     <p>[1:39] Also, all these keywords can be expressed in a more detailed form that allows us to do even more easing functions that are allowed by the keywords. For example, the default ease keyword can also be written as cubic-bezier(.25, .1, .25, 1), I think. Yes. But this function can be used to express many, many different effects.</p>
     <p>[2:12] It's a bit hard to picture how it works if you don't see a graphic or a presentation, so I've coded this tool , in which you drag the handles and you can preview the results. Essentially, the way cubic-bezier works is that the first two parameters are the coordinates of this point. As you can see, if I move it, they change. The second ones are the coordinates of this point.</p>
     <p>[2:41] A very interesting thing you can do with this function, except just expressing easing, is that you can drag it like this so that it moves above 100%. The vertical axis is the progression of the property and the horizontal axis is the progression of the time. If you move it above 100% on the vertical axis, what do you think will happen? The transition progresses above 100%, but eventually, it has to snap back to 100% here.</p>
     <p>[3:18] Let me make my cursor bigger so that I can show things.</p>
     <p>[3:26] OK, but it has to snap back here at 100%, so essentially what that thing is - getting above 100 and then snapping back -- it's a bounce. We can preview it here. It's the pink one. Do you see that it went beyond the ending point and then it snapped back? We can make the bounce even more intense if we move this even more to the top. As you can see now, the bounce is much more intense.</p>
     <p>[4:02] We can do many kinds of interesting effects with this. This is something like the JavaScript warning I had on the cover. It uses a scale transform, which bounces, so it scales a bit more than the end value, and then it snaps back.</p>
     <p>[4:20] What's way more cool, although less useful than those, is when you actually apply bouncing to colors. For example, these colors allow me to change the background of the slide when I click on them. It has a bouncing transition already, and it's a quite intense bounce, as you can imagine, because the last value is five, so the second point is much higher.</p>
     <p>[4:45] Let's try to transition from this value for this color to gray. It moves back to green and then it snaps to gray. It's very interesting I think. Of course, if you try to transition to edge colors like, for example, to red, you won't see any bounce because there's no point in moving beyond 255. There's no color that's like RGB 300.</p>
     <p>[5:12] This is supported by every modern browser, every browser that supports transitions. There used to be a problem with WebKit, and currently, if you try to test it on Chrome or Safari, it won't work. It will drop the value. That's because in the first versions of the spec, values - cubic-bezier values - out of the 0 to 1 range weren't allowed.</p>
     <p>[5:35] If you see the spec right now, it says that they're still not allowed, but the dev version of the spec that's not yet published perfectly allows them. That's why Opera, Firefox, and now IE10 support them. WebKit did not, but recently a patch was landed. If you test in the nightlies, you can actually test that implementation. I'm hoping that soon it will be in some stable release.</p>
     <p>[6:05] The second thing is about border radius, and you might be thinking, &quot;What is there to know about border radius? I know everything about border radius. I've done rounded corners.&quot; Well, yeah, I'm pretty sure you've used border radius to do rounded corners and maybe you've actually done this, as well, using two lengths to have different vertical and horizontal radiuses.</p>
     <p>[6:31] The problem with doing ellipses in this way is that it works fine when the dimensions are fixed, but what happens if the content changes? Usually, when we make a website, we don't know the exact content in advance. It's usually dynamic, so what happens if you try to resize this ellipse? Let's try to do that.</p>
     <p>[6:54] You can see the resulting shape is horrible. It doesn't even have a name. I don't know what to call this thing. It's ugly as hell. What do we do to actually make it resize properly and still stay an ellipse? It turns out, we can actually use percentages in border radius. They define the vertical and horizontal radius at the same time, and the horizontal one depends on the width and the vertical one depends on the height.</p>
     <p>[7:26] Essentially, what 50% means is horizontally, give me 50% of the width and vertically, give me 50% of the height so when we resize this, it's fine. It works great. It's a true ellipse. We don't see any straight edges or nothing.</p>
     <p>[7:45] This actually has pretty good support. There are some glitches in browsers, but essentially, the latest version of every browser supports it. Opera used to have a problem with it before version 11.5. Even though it parsed it and it allowed it, the percentages used to depend on the window dimensions.</p>
     <p>[8:10] I don't know who thought of that. It was really horrible, but I'm so glad they fixed it. I reported it two years ago, and they fixed it after two years -- yay! Well, to be fair, they usually fix bugs more quickly than that, I don't want to bash Opera or anything. They're great.</p>
     <p>[8:33] Multiple outlines, I'm sure you've all used border or the outline property if you want to do two borders at once, but what happens if you want more? You can't have two borders, you can't have two outlines, so what happens in this case? Usually, you have to use multiple HTML elements, which kind of sucks.</p>
     <p>[9:00] Before I show you how to do that with pure CSS, let's talk about something else which is kind of relevant. Here is a basic box shadow without any offset. You can hardly see it, I'm sure. It doesn't show very much. That's because it has a blur of five pixels, which makes it very not visible. I can show it to you if I give it some offset -- like this -- and now you can see it. We actually didn't want it to have any offset, so it's not very visible.</p>
     <p>[9:36] What we can do to make it more visible is there's a fourth length in the box shadow definition called spread. This length enlarges or shrinks the shadow by the length you specify. For example, by default it's zero, but you can specify one pixel, and now it's one pixel bigger on every side. Let's make it even bigger. You can see how it gets enlarged. Of course, this also applies to inset shadows.</p>
     <p>[10:08] This is the default, this one. And then, we can start enlarging it or even make it bigger with a negative spread, which doesn't show much here, but it will show if we move it a bit. Can you see that now it's much smaller? This actually solves the problem that I see posted on stack overflow so frequently. I think there are 50 questions that ask the same thing, &quot;How do we do a shadow that's on just one side?&quot;</p>
     <p>[10:43] Well, that's how we do a shadow that's just on one side, with a spread value. We just have to move it and position it properly. It's not perfect here. I have to make it a bit bigger, kind of like this, and then move it a bit to the top, but I'll get there. That's how you do this effect. And, yes, it's quite useful.</p>
     <p>[11:11] You might be wondering what do shadows have to do with what I'm discussing. Well, let's get back to the original case where we had no offsets, and let's give it a positive spread and make the blur zero. What do we have here? We have an outline essentially. We have something that works like an outline. We can even make the widths different on every side by moving it -- like this.</p>
     <p>[11:44] Essentially, we can use box shadow to fake outlines as long as the blur is zero and the spread is positive. Why can we do multiple outlines with box shadow? Because we can have unlimited box shadows. We can just add another one, and it will still show great.</p>
     <p>[12:06] Let's add a red outline, for example. We can add unlimited outlines. For example, in this case, I have four outlines. You might be thinking, &quot;OK, I might be using a shadow property to add outlines, so what do I do if I actually want to add a shadow as well?&quot; You can add a shadow as long as you give it at least this big of a spread, so that otherwise, it would be covered by the outlines you have.</p>
     <p>[12:46] Let's add a shadow with five pixels offset and the blur, five pixels. Remember, it needs this spread. Let's make it red, and it needs a comma here. Here it is. If we want to make it even bigger, like it actually had a spread itself, we can just increase the spread even more like this.</p>
     <p>[13:15] This is supported very well, at least in browsers that support box shadow. I'm not aware of any browser that supports box shadow and not that. I think some really old versions of Safari didn't support multiple box shadows, but they're not significant anymore.</p>
     <p>[13:37] Another case that you probably used an overlay of some sort at some point. For example, if you want to create a modal window and you don't want the user to click on anything else because you want them to interact with your modal window. You create an overlay that covers the whole thing, and it's semi-transparent, and you put it on top of all your content except the modal window.</p>
     <p>[14:03] When the user tries to click on something else except the modal window, it can't, because his clicks are captured by the overlay. In this case, that effect is very useful, that every element captures mouse clicks and hovers and everything.</p>
     <p>[14:24] Sometimes, we just use things decoratively and overlay them over other things, and we don't want them to capture mouse events, we don't want them to capture mouse-overs and clicks. For example, do you remember this old home page of Twitter that used to have this kind of like marquee of trending topics? On both edges, it had these little gradients, for example, here and here, and they were purely for styling purposes.</p>
     <p>[15:01] They look quite nice because they make this fade out effect, but they introduce a problem. If you mouse-over these links in the center, you can see that they become white. However, if you mouse-over links that are in one of the edges -- like here, for example -- nothing happens because your mouse-over is captured by the gradients.</p>
     <p>[15:24] Let's see how big these gradients are. If we highlight them -- they're these parts. In these parts of the header, we couldn't click or mouse-over links. How did they solve it? There's this property called pointer-events, and it came from SVG. However, some browsers allow us to use it on HTML content.</p>
     <p>[15:49] Essentially, this value, when used on HTML, it has two values, auto and none. Auto is the default behavior that the element captures mouse clicks, hovers, and everything. But if we give it the value of none, it's like it doesn't exist as far as the mouse is concerned.</p>
     <p>[16:10] Let's try hovering over a link again. As you can see, it works fine. Our pointer changes to a hand, the link gets highlighted, and if we tried, we could actually click on it. This is useful in yet another case. For example, assuming we wanted to create styled select menus, and we've actually applied all of our nice CSS3 on this select menu, and it would look nice if it wasn't for this ugly arrow.</p>
     <p>[16:41] We add a pseudo element to its label that adds an arrow on top of it, and now it looks the way we expected. I think it looks nicer than the default, but that's just my opinion. If we try to click on this arrow, nothing happens. Of course, nothing happens because the arrow captures our click. It doesn't go through the menu. If we click here, the menu opens, but if we click here, nothing. This is because the pointer-events is at its default value, which is auto. If we make it none, it starts working now, the menu opens, and it works perfectly like a select menu.</p>
     <p>[17:26] The problem with pointer-events is that it's not supported in every browser. Every browser supports it in SVG, but on HTML, it's only supported by Firefox and WebKit. And an even bigger problem is that if we try to detect it to actually do something when it's not there, like not include the arrow, for example, the default detection method that we usually try for detecting CSS properties doesn't work.</p>
     <p>[17:57] Usually, for detecting CSS properties, we check if the camel case version of the property is in the style object of some element. But, in this case, it's a no-go. Why is that? Because in some browsers, like Opera, because they support the pointer-events property on SVG, they recognize it and they already have it on style elements, even though it won't work on HTML.</p>
     <p>[18:20] Up to a while ago, this used to be an unsolvable problem, &quot;How do we detect pointer-events?&quot; It's actually in the undetectable list that Modernizr keeps. However, this clever guy called Martin Auswöger came up with a detection method, which essentially tries something and checks if it worked.</p>
     <p>[18:42] He creates a dummy element, of course. He first tries the straightforward method only in one way. If it's not there, it means it's not supported, which makes sense. If it's not there, it can't be supported. If it is there, it doesn't mean it is supported, but if it's not, it's not supported.</p>
     <p>[19:01] If it is supported, he tries something else. He sets the property to a value that's recognized and then to a value that shouldn't be accepted, and checks afterward. It appends that the dummy element to the body because any element needs to appended to the document to have a computed style. Then, he gets the pointer-events property from the computed style and checks if it's auto, and that removes the dummy element and returns what happened.</p>
     <p>[19:34] He tested that thing in multiple browsers and it turned out, it worked. We can use that to add the class to the body element and do style changes if it's not there, for example, include the arrow if it's supported, not include the arrow if it's not supported.</p>
     <p>[19:48] Also, there's a rudimentary polyfill we could do in JavaScript about this method. We could make a function that kind of simulates what pointer-events does, and the general idea is this. Don't copy/paste this code, but it's the general idea. You hide the element that got clicked and you don't want it to receive pointer-events. You get the coordinates of the mouse click or the mouse-over, and then you get which element is at those coordinates. That's why we hid our original element because if it still was there, we would just get that.</p>
     <p>[20:25] After we found which element is there, we show our element again. We stop the event in any way. If we were actually using jQuery, like I'm doing in this example, we would also call a stop immediate propagation to not have any other event handlers get called. Then, we trigger the event on the object that was underneath.</p>
     <p>[20:45] It's not perfect, and I was actually not sure if I should show it because in most cases, you want to do things that can't really be done with JavaScript. You can't open a select menu with JavaScript by just sending a click event there. It doesn't work this way. In some cases, I guess it could be useful.</p>
     <p>[21:10] How many of you are tab people and use tabs when writing code instead of spaces? Great! We're a lot. Kudos to all of you, and the ones that you use spaces should be ashamed. The ones of you that do the right thing and use tabs have probably noticed that when you post code snippets on your blog, for example, they look really ugly. Why is that? Because, for some reason, people that made browsers didn't like tabs, so they made them huge to look ugly. We usually resort to converting our nice little tabs into spaces.</p>
     <p>[21:57] However, in CSS3, we can actually control the size of the tab character by using the property tab-size. It's the full value, of course, this horrible eight, which we can actually now control it and make it whatever we want. You usually would want to use four, but you can actually specify any value, even zero to completely remove indentation. But please don't do that!</p>
     <p>[22:25] If you're a spaces person, this could still be useful for you. You could make it 999 and remove any code that uses tabs from the page. That's actually the only example they have on MDN. I don't know why. Was the property created for that? I hope not!</p>
     <p>[22:49] Tab size is supported by Opera and Firefox. Unfortunately not by IE or WebKit yet, but it degrades very gracefully I think. You just get the default sizing. Yes, the code won't look as pretty, but it will be readable.</p>
     <p>[23:14] I'm sure you've all used this pseudo class, this CSS3 pseudo class, usually for zebra striping or styling like every third element differently, like I am doing here. I guess you know that the way it works is usually by setting - that the end gets different values starting from zero to infinity. The results that make sense get selected.</p>
     <p>[23:40] For example, 3 x 0 = 1, so the first element gets selected, 3 x 1 = 3, so + 1, it's 4, and so on. You probably also know that we have this last-child pseudo class that does exactly the same thing, but it starts counting from the end.</p>
     <p>[24:04] You might also know, although you might not be able to think of many use cases, of a class called only-child that only selects elements that don't have any siblings. For example, here, it didn't select anything, but let's start removing elements until we only have one, and now it got selected.</p>
     <p>[24:23] This could actually be a very, very useful pseudo class if it wasn't so restricted, if it didn't only select elements that didn't have any siblings, but it selected elements that had an exact number of siblings, whether they were before them or after them. For example, you want to select all the list items, but only if the list has five items in total. How do you do that?</p>
     <p>[24:47] Let's think of it as a first step to make only-child more general -- let's think a bit of what it consists of. Only-child doesn't give us any functionality we didn't already have with the other structural pseudo classes. Only-child is just this, it can be written as this, a first-child that's also a last-child. Isn't that what an only-child is? We can start by making the last-child pseudo class a bit more general.</p>
     <p>[25:19] For example, let's try this. Because essentially, what last-child is nth-last-child(1). We can change this to (2). Then, what does this do? It selects the first element only, but only if the total number of siblings are two. If we have three, nothing gets selected. If we have one, nothing gets selected, but if we have two, the first element gets selected.</p>
     <p>[25:46] That's almost what we wanted, but not exactly, because we wanted to select all elements. We didn't want to select only the first one. That's very easy at this point, because we just take the same thing and just use the sibling selector to select everything after it. As long as we can target the first one, we can target them all. Now, we effectively target all of the elements, but only if - and only if - the total count is two. If it's one, nothing gets selected.</p>
     <p>[26:23] We can even make it a bit more relaxed and only select elements if their total count is at least five. Remember how we do at least with these pseudo classes? It's n + the number we want. Why? Because n starts from zero, so 0 + 5 = 5, 1 + 5 = 6. So it starts from five and goes all the way. It selects everything from five and afterward. Now, it will match all the elements as long as their total count is at least five. Now, no matter what I add, they still get matched.</p>
     <p>[27:00] This is useful in a number of different cases because it kind of works like a media query for the DOM. It's supported by every browser that supports CSS3 selectors, and CSS3 selectors were the first things to get supported. Of course, IE is a bit of a party-pooper here. They're only supported by IE9 and after.</p>
     <p>[27:25] Let me show you a bit of a practical example of this technique, one of the many cases it can be used. Assume you're making a color palette application, like color for example or color lovers. These applications allow you to have defined color combinations. In this case, I'm not going to select the colors myself. That would be a bit too complex of a demo for a slide. They're predefined. I'll just add more colors by clicking addcolor.</p>
     <p>[27:55] When I have two colors or one color, these controls look fine, but when I add the third color, they start looking bad. What can I do in this case? I can hide the text. If there are three or more, I use the same technique to hide the text. Now, they look fine again. The user doesn't really need the text after this point because if he pressed those buttons two times, he already knows what they do.</p>
     <p>[28:26] Let's keep adding colors. They look fine at this point, but at some point, we'll have problems again. We actually have the same problem. What do we do in this case? Well, I think it's time to give up on the bright floating and just float both of them on the same side. We float all of them on the same side if the elements are at least nine. Now, it looks kind of better. Of course, it could look even better. We could put them in the center and make even more changes, but I wanted to keep this simple. Then, we can keep adding colors, and it will look fine forever.</p>
     <p>[applause]</p>
     <p>Lea: [29:18] Is that for the thing I'm going to present or for what I presented before? OK. Thank you very much. I'm sure most of you had some client at some point or a boss that wanted custom check-boxes or custom radio buttons, and they really insisted because they didn't understand that those aren't meant to be styled even in 2011.</p>
     <p>[29:45] So you probably had to resort in some JavaScript solution with some dev, hopefully, with a top index of zero, so it was still accessible. But, some dev that if you clicked it, it kind of changed and it kind of emulated a check-box or a radio button. But the thing is, you can do the same thing with Purity SS.</p>
     <p>[30:11] Here we have a default check-box. That's just the default check-box that the browser renders. And the first step of this technique by Ryan Seddon, that, he's an amazing guy, he came up with this, not me. First idea is to hide the check-box. And, actually I'm not sure if this is the best way to hide it because I headed a job with Derrick Featherstone yesterday, and it turned out that that's not the best way to hide it accessibility-wise.</p>
     <p>[30:42] It's probably to use a text-indent of -900 or something or hide it another way like visibility hidden, maybe. Anyway, you hide it in a way that still makes it focusable. That's what you should keep in mind. Don't use display none. It should still be focusable. And we're using this prefix here, root, because we only want this root to apply in browsers that support CSS3 selectors because we're going to use CSS3 selectors afterward.</p>
     <p>[31:15] And if it wasn't supported, it means that browsers would in IE8 for example would hide the check-box, but it wouldn't do the other things. So the user just wouldn't have a check-box. The thing is we want regular check-boxes in IE8 because that's what its users deserve, and we want nice-styled check-boxes in other browsers.</p>
     <p>[31:40] The next step is to use the before pseudo-element of the label that's after the check-box and add something. In this case I'm using a symbol, but that's not really a good idea for a multiple of reasons. I'm just using a symbol here to keep things, to keep the demo simple. First of all, if you're using a unicode symbol for this, it means that on Windows it might not show up. Many unicode symbols don't show in other environments, in other browsers, in other operating systems.</p>
     <p>[32:09] And also, some screen readers will actually pronounce this symbol which I don't think you want to. It's better to use an image and you can use different images for different states. It's essentially the same idea. And this is the core of this technique. We're using the checked pseudo-class to style, to change the styling only when the check-box is checked. And what's the difference between the checked pseudo-class and the check, if we use the attribute selector for check?</p>
     <p>[32:40] The attribute selector for check, that just selects check-boxes that were preselected when the HTML document was loaded, whether they are selected now or not. But the checked pseudo-class is dynamic and it only applies to check-boxes or radio buttons. Everything I'm saying also applies to radio buttons. It applies to check-boxes that are currently checked.</p>
     <p>[33:02] So, essentially, now we can actually use it already like a regular check-box. I'm clicking it here now and it's checked. I'm clicking it again and it's unchecked. And, of course, it still works with the label. And let's give it a bit of a focus style to make it better for keyboard users. And now, I'm focusing on it with the keyboard, and you can see it gets wide. It gets the focus style in.</p>
     <p>[33:30] And, if I press the spacebar, it gets checked. If I press the spacebar again, it gets unchecked. So, it's perfectly keyboard accessible. It's even better than those JavaScript workarounds, because in most cases they don't care about keyboard users. And it's just done with a few lines of Purity SS, no JavaScript, whatsoever.</p>
     <p>[33:55] The support for the check pseudo-class is pretty good, too. It's supported by every latest browser. The only thing that probably should concern you is IE8. Apart from that, every used browser currently supports it.</p>
     <p>[34:16] Also, I guess you know that CSS2 gave us a few cursors to allow us to change the cursor to show different interactions. And these were the cursors we had on CSS2. And that's why I made my cursor bigger, so that you can see this. You're all probably already familiar with these cursors, so I'm not going to get into detail for them.</p>
     <p>[34:45] But the thing is that CSS3 gives us a bunch of other cursors as well because Web applications have advanced and now we need to represent interactions that we didn't need to before. We have this non-cursor that hides the cursor and that's not only useful for tricks and pranks. That's actually useful for real, legitimate use cases. For example, in games where you use the cursor to control a character on the screen and you don't want the users to be confused with their actual cursor, or in videos or in things like that.</p>
     <p>[35:19] There's also this cursor which I think it only works on OSX. It's to show that there's a context menu. We didn't use to have context menus back then, but now we do and a cursor for showing that is useful. This is for resizing cells and tables like, for example, spreadsheet applications, vertical text. It's kind of obvious what it does.</p>
     <p>[35:40] Aligns and copy are for dragging something and representing like it's supposed to become a shortcut or copy. And I think no drop and especially not allowed are the most useful cursors, because they allow you to show the user in yet one more way that something is impossible.</p>
     <p>[35:59] For example, many designers use styling that's not very clear that an element is disabled, a button is disabled, for example. Then the user tries to click it and they're like, &quot;Why doesn't this work?&quot; And this cursor allows you to provide, even an additional cue that this button is not meant to be pressed right now. Who would think that a button is supposed to work if you moused over it and you got this thing?</p>
     <p>[36:29] There's also a col-resize and row-resize which might seem like they're only useful for tables, like spreadsheet applications and such, but they're actually very useful for dragging any kind of horizontal or vertical divider.</p>
     <p>[36:43] For example, I was recently doing a border image application to allow people to graphically control a border image declaration and drag the dividers over the image. I haven't released it yet. I used the col-resize and row-resize cursors to drag the dividers over the image. They're much better than the generic move cursor.</p>
     <p>[37:09] There's also this one, which I don't think is very useful, and zoom-in and zoom-out, which can be useful in a number of different applications, although they don't have the same level of support that others do. For example, in Firefox they need prefixes.</p>
     <p>[37:25] To sum up the level of support for these things, WebKit has the best support. It supports all of them. Firefox supports almost all of them, but like I said, it requires prefixes for zoom-in and zoom-out, which is quite uncommon for cursors. The no-drop cursor is the same as not-allowed, which I don't think is very important, but it still conveys the same message.</p>
     <p>[37:52] Opera and IE don't support a few of them, but I think it's not very important because it degrades very gracefully. You just see the default cursor, and you can even provide fallbacks, like cursor move, for example, and then cursor row-resize, and the browsers that understand row-resize will use that. The browsers that don't will use move.</p>
     <p>[38:20] Yes, you've all used gradients to do something like this, which is a very, very simple gradient from black to gray. I guess you know that you can use angles as a first parameter to move it in different angles. I guess you also know that you can use color stop positions to move these colors.</p>
     <p>[38:47] For example, in this case if we specify 20% for the first color and like 80% for the second then... Let's make it vertical to make it even more obvious. Then we have black on 20% of the width, gray on the other 20% of the width, solid gray, and on the middle 60%, we have a gradient.</p>
     <p>[39:09] We actually shrunk the gradient and we gave it a bit more solid color. Let's keep moving those color stops closer to each other. Now our gradient is only 60% of the width. You can see it shrinking. Can you, actually? I hope you can. You can see it shrinking.</p>
     <p>[39:32] Now we have 40% black and 40% solid gray, and the gradient is only at 20%. We can keep doing this and moving them even closer, and even closer.</p>
     <p>[39:45] What happens when they actually meet? It just continues moving in this trend. Now we start having a line that kind of becomes blurry. When they are exactly at the same point, we don't have a gradient anymore. We only have a gray color and a black color, and that's it. We can even change where the black stops and the gray begins by changing these positions.</p>
     <p>[40:11] The thing you should keep in mind is that when two color stops are in the same position, you don't see a gradient anymore, you only see an abrupt change from one to another. Even at this simple state, this gradient is still useful.</p>
     <p>[40:27] For example, we can use it to replicate the four columns effect without any images. I guess you know the four columns technique, where you use a background image to show that some columns have a height of 100%. Now, you can just use gradients for that instead of images.</p>
     <p>[40:53] If we combine them with other CSS3 background properties, like for example background-size, we can create even more interesting effects.</p>
     <p>[41:03] Let's move back to 50% so that they are both equal. Let's use background-size 100 pixels. As you can see, now we have stripes with just CSS gradients. No images whatsoever. We can even remove this to make horizontal stripes.</p>
     <p>[41:23] Now you might be wondering, &quot;Yeah, OK. Horizontal, vertical stripes are kind of useful but, usually, when I use stripes on the web they are not horizontal or vertical, they are diagonal. They are usually these 45 degree diagonal stripes.&quot;</p>
     <p>[41:37] And yes, we can actually do that with CSS gradients as well. For example, our first thought would probably be to use 45 degrees here, but as you can see that won't work, because the gradient is rotated inside every tile. It's not the whole background that gets rotated. But we can use the same technique we use in Photoshop when we create diagonal stripes, and just have every stripe twice, instead of having every stripe just once in the tile.</p>
     <p>[42:13] Let's get back to our gradient. We start from 25%. We use gray at the exact same position. We have to use every color twice to create the width of the stripe. Silver at the same position, and then, again, silver to show the stripe width, and then gray at the same position, and then gray.</p>
     <p>[42:48] At this point, I would be done, but I'm using Firefox, and Firefox on Mac OS has this bug where it needs this last color stop. Normally, we wouldn't need a last color stop, just like we don't need the first color stop here - but Firefox needs it, so we need to add it just in the Moz version.</p>
     <p>[43:10] You might be thinking, &quot;Yeah, OK, that's useful, but it's a bit too big of a code. You specify every color three or four times.&quot; And yes, there is an easier way to do it. It has its advantages and disadvantages. For example, it would be harder to change the background size. Now you can change the background size like this, just by changing two values. But then, with some effort I'm going to show next, it's going to be a bit harder.</p>
     <p>[43:38] There's a function you can use that's called repeating-linear-gradient. This function just takes the color stops you specify and repeats them indefinitely on both sides. Essentially, now, you need to specify everything in pixels, because the width of the stripe is here.</p>
     <p>[44:02] Let's make stripes that are like 30 pixels wide. Let's remove the other color stops because they're kind of confusing. Essentially, in this case, we only need four color stops. That's it. Every color is specified two times in this gradient.</p>
     <p>[44:26] If we want to change the size, that's the problem. We have to edit it three times. Of course, the exact start and end doesn't matter, just the relative offsets. For example, if this was 30 pixels, it would still work, we would just have to offset all of them by 30 pixels, but it would still work fine.</p>
     <p>[44:49] Do we have time? No. OK. That's it. CSS gradients are supported by, essentially, every modern browser. Opera doesn't support radial gradients, which can also be used for a number of different effects, like for example creating polka-dot patterns.</p>
     <p>Actually, I've created this gallery with many different patterns that you can create with CSS gradients and it's - just a moment. You can find it on http: [45:08] //lea.verou.me/css3patterns. It displays many different kinds of patterns that can be created with this technique, and combining it with other CSS3 background properties. Many people have contributed to it. You can see their names if the pattern is not mine. For example, Tab Atkins who was also giving a talk today, I think, or Divya, which is also giving a talk here, and many, many other nice people.</p>
     <p>[46:09] Getting back to browser support, Firefox supports them since Firefox 3.6. There are very few issues, not too important, like the one I showed, or that it doesn't support explicitly sized ellipses and radial gradients. IE 10 supports them as well. Opera only supports linear gradients, and WebKit also supports them, but on Safari only since the 5.1.</p>
     <p>[46:34] Older versions of WebKit used to support this proprietary version of gradients. Also, if you want to use gradients for the iPhone, you still have to use that horrible proprietary version, which is called WebKit-gradient. It uses the same function to create both radial and linear gradients.</p>
     <p>[46:59] For our last trick today, let's move a bit to Opera. How many times have you used the bottom-right background-position, only to be disappointed because your background was sticking at the edges of the box and there was no way to move it so that it follows the padding, for example, that you have?</p>
     <p>[47:28] CSS3 extended the definition of background-position, so that we can specify offsets that aren't just from the left top corner, but are from every corner. How did they do that? By allowing us to include four values in background-position. Bottom-right is a perfectly legit CSS2 background-position definition, but CSS3 allows us to specify also some offsets -- like this, for example.</p>
     <p>[47:59] As we increase them, the background moves. That's exactly what designers have been wishing for ages. However, the problem with that is that the CSS3 background-position is only supported by IE and Opera. Yes, I know you're shocked, but WebKit and Firefox don't support everything.</p>
     <p>[48:26] What can we do in this case? Is it a lost cause? Is our only way to just use a fallback and the CSS3 background-position? Actually, no. It turns out that for the most common use case of this, there's an even better way -- even if CSS3 background-position was supported.</p>
     <p>[48:45] Here we have a padding of 40 pixels and, essentially, we just want this background image to follow that padding. What can we do? There is a property that controls where an image starts from, where a background image starts from, and it's called background-origin.</p>
     <p>[49:04] Its default value is padding-box, which means that the element starts from the padding box, but if we change this to content-box, the element moves to start from the content box. The padding box is outside it, so now it follows the padding, and we can actually change the padding in one place.</p>
     <p>[49:25] If we were using the CSS3 background-position, then we would have to change it in three places, so this is even better, so let's not get too sad that background-position isn't supported, because background-origin is supported by every browser.</p>
     <p>[49:43] Just for a laugh, since I'm done now, here's a browser scorecard for the future, as I showed. I'm pretty sure it will be surprising for some, because WebKit isn't first, Opera isn't last, and actually, a while ago WebKit used to be last. It just climbed back up to the top because it now supports balancing transitions, so it supports nine things instead of eight.</p>
     <p>[50:14] How many of you were surprised by this ranking?</p>
     <p>[pause]</p>
     <p>Lea: [50:21] I expected more. OK. It's question time now. Just, before you ask, I usually get the question, When will my slides be published? They'll be published today or tomorrow, hopefully. I frequently get the question about what did I use for the slides. I used a slideshow framework I coded last year, and some plugins that I coded this year for the editable regions, and everything - you can find it at this URL.</p>
     <p>[50:54] Are there any other questions?</p>
     <p>[pause]</p>
     <p>[applause]</p>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>2</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <h3 class="extra">Comments</h3>
     <dl id="comments" class="reacties">
      <dt id="comment-65"><a href="#comment-65" class="number">1</a> Nilam on 27-03-2013 at 11:56 o'clock:</dt>
       <dd>its really good one... I am looking for the same, i mean you create transcript for particular time of video and that logged also. as seen in transcript.<br><br>I want to add same functionality when user watching vimeo video on my website and he comments for some part of video while video is playing so that record time of video and i can see how many user comment on particular time of video and which is their comment.</dd>
      <dt id="comment-66" class="odd"><a href="#comment-66" class="number" id="latest-comment">2</a> Nilam on 27-03-2013 at 11:57 o'clock:</dt>
       <dd class="odd">can we use css3 for that. if yes then how can I?<br><br>could you please guide me...</dd>
     </dl>
     <form method="post" action="/congres/2011/sessions/css3-secrets-lea-verou.md" id="comment">
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
