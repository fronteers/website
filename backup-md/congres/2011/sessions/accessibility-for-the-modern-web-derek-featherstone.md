<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>Accessibility for the Modern Web by Derek Featherstone · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p511">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>Accessibility for the Modern Web by Derek Featherstone</h2>
     <h3>Video</h3>
     <video width="640" height="360" src="/_downloads/2011/derek-featherstone-accessibility-for-the-modern-web.webm" controls>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2011/derek-featherstone-accessibility-for-the-modern-web.webm">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="http://vimeo.com/31072025">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2011/derek-featherstone-accessibility-for-the-modern-web.webm">Download video</a> (WebM, 142MB)</li>
     </ul>
     <h3>Transcript</h3>
     <p>Derek Featherstone: [0:05] Thank you. Thank you very much. And thank you to Bruce for the &quot;love god&quot; comment. I'm not exactly sure where that's coming from, but I'm sure it's probably something that happened at South by Southwest over the last couple of years that I don't really remember. [laughs]</p>
     <p>Thank you for having me here. There are things that people say to me over the years, and they stick with me. One thing that I heard in about 2009 was this: [0:21] everything you're doing just seems to be kind of a hack.</p>
     <p>[0:41] They said this directly to me right after I spoke at a conference much like this one. And I had shared several stories about things that we do and they basically said, &quot;This is all well and good, but everything you're doing here is just a hack.&quot;</p>
     <p>[0:55] And I kind of thought, well, you jerk. I can't believe you said that to me. It was kind of rude, or I felt that it was rude, but then it made me think that maybe everything that we are doing on the Web is just a hack anyway.</p>
     <p>[1:08] Part of the reason that he said that was because I had showed a number of accessibility solutions that I think are kind of interesting and clever -- and mostly because I came up with them. But they're hacks for fixing issues that exist out there on the Web that the owner of the website might not take the time to fix.</p>
     <p>[1:31] So it was things like this, creating user scripts. We create user scripts to fix problems in other people's websites all the time. So if you're familiar with this, you might recognize this as a to-do list from the online project management software called Basecamp.</p>
     <p>[1:47] And one of the issues that we have in Basecamp is that we have to-do lists that have this wonderful little hover behavior on them, so that when you hover over a to-do list item you get this little nubbin that sticks out, and that allows you to edit or move or delete that to-do item.</p>
     <p>[2:05] The problem with this is that it requires you to hover over the to-do list item first; there is no way to activate this with a keyboard. You cannot bring those nubbins into play. You cannot expose the nubbins without using a mouse.</p>
     <p>[2:23] So we said this isn't going to work for us. We had people working for us at the time that were screen reader users that relied on keyboards.</p>
     <p>[2:30] So what we did was, we wrote a Greasemonkey script that just used some simple JavaScript to expose all the nubbins. So what we ended up with, even though it doesn't look quite as nice, essentially what it did was take all the nubbins and bring them into play so that a keyboard user could then tab to each one of the controls and expose them and use those controls.</p>
     <p>[2:52] So, yes, it's a little hack, but it's a really useful hack that lets us actually to use Basecamp in a more effective way.</p>
     <p>[2:59] Another one that we've created, or a hack that we've implemented, is our own custom controls for Google Maps. The controls in a Google Map, if you take a look up on the screen you'll see the pan-up, pan-down, pan-left, pan-right, re-center, zoom in and zoom out.</p>
     <p>[3:18] These controls, the default ones on a Google Map, cannot be accessed with a keyboard. You cannot tab to those controls.</p>
     <p>[3:26] So what we ended up doing when we put Google Maps on our sites -- this is one of my sites, IronFeathers, which is my wife and I do Iron Man triathlons, so we wanted to catalogue all of our training rides and runs.</p>
     <p>[3:39] So we wanted to put Google Maps on our site, but we didn't want to have keyboard-inaccessible Google Maps. What we did was used the Google Maps API to put a bunch of controls in there that actually are keyboard accessible.</p>
     <p>[3:54] And you can see here -- this'll come back later -- but up across the top you'll see a bar. That's called the Dragon Naturally Speaking -- the Dragon Bar.</p>
     <p>[4:03] This is a piece of software that's voice recognition software, that helps people that don't have full use of their hands to be able to control the computer with their voice. This has existed for years.</p>
     <p>[4:17] If you take a look in the very top left, you'll see a little yellow box that says &quot;button.&quot; What that is showing is that it recognizes the command &quot;button.&quot; That's what I have said, that's what it's recognizing.</p>
     <p>[4:29] And then you'll see all the buttons on the screen. Each one of them, when you say a generic command like &quot;button&quot; or &quot;link&quot; or &quot;checkbox&quot; or &quot;radio button,&quot; the software will go through and create this overlay over top of the screen and puts a number beside each control of that type.</p>
     <p>[4:45] So what it's done here when I've said &quot;button,&quot; it's gone through the screen and put the numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 beside each button that it found on the page.</p>
     <p>[4:55] The reason that this is useful is because I can just say &quot;button 1&quot; to pan up, or &quot;button 5&quot; to pan down. I don't have to say anything specific like &quot;pan down&quot; or &quot;pan up.&quot; I can't just give it a really specific command, &quot;button 5.&quot; Or I can say &quot;link 10,&quot; which might be much easier to say than the text that is actually in link 10.</p>
     <p>[5:18] So again, we've just used a really simple mechanism to fix some problems that exist in what other people have. YouTube, I know lots of people fool around with YouTube and create mash-ups and do other things.</p>
     <p>[5:36] Christian has a great thing that he's created called, what is it, Easy Tube, where he's got a custom set of controls in a different framework for YouTube videos, so that you can load up videos and you can control them with the keyboard.</p>
     <p>[5:51] We looked at that, and this was all happening around the same time. We took YouTube and we took a slightly different approach.</p>
     <p>[5:59] What we ended up doing was taking the same approach as our map and we took a set of buttons, put them outside the YouTube video, and then used CSS to put them over top of where the actual buttons are, give them a very specific look.</p>
     <p>[6:14] So you know how on YouTube, when you tab to one of the buttons -- if you haven't tried a keyboard with You Tube before, go and try it. As you tab through, you'll see the little yellow outline on the button that has the focus.</p>
     <p>[6:26] So we even went to the point of replicating that and building it into this. So we use -- and you can see it here. The examples are at furtherahead.com/YouTube.</p>
     <p>[6:35] You can go and see how we've used the YouTube API to create a set of controls that are outside the video, that just sit on top of the video and look like they're actually part of the movie itself.</p>
     <p>[6:45] Really simple stuff. It helps fix some of the problems with keyboard access for YouTube.</p>
     <p>[6:52] We took that one step further and said, well, we created a Greasemonkey script for Basecamp. We've done these things with the YouTube API and the Google Maps API, why don't we write a Greasemonkey script that fixes YouTube in Firefox?</p>
     <p>[7:09] So what we ended up doing was creating a Greasemonkey script that takes the same concept, and any time you look at a YouTube page in Firefox with this extension or with this Greasemonkey script, it will inject appropriate keyboard-accessible controls.</p>
     <p>[7:25] So now if you're a keyboard user and you need to have access to YouTube, you have better keyboard access than what was there by default. We continue to do these things and find these holes that we need to plug.</p>
     <p>[7:36] Another one, this is something that came up a few years ago, just from discussions. We talk a lot about people that are visually impaired, that use screen readers, that use keyboards.</p>
     <p>[7:49] We don't always talk about some of the other disabilities as well. So one of them that we got interested in is people with fine motor control issues and how they use a mouse or struggle with using a mouse.</p>
     <p>[8:02] So one of the things that quite often happens is some people will have a tremor in their hand, and what will happen is if they have a small target, when they're trying to click on that target, they'll miss.</p>
     <p>[8:13] So what we did was put together this concept, proof of concept, and I'll let this video roll for you. It's really quite straightforward, so just watch what happens as I try to click the &quot;go&quot; button.</p>
     <p>[8:25] So I type into the search field, just type any search term in. Of course, I chose accessibility. And then I try to click on the button. And we've set it up so that if we miss and we're within a certain radius of the button, we just grow the button. OK?</p>
     <p>[8:42] Now I have no idea if this works. It works in concept. We have never tried this in the real world, in the wild. But what we'd like to do -- That's a big &quot;go&quot; button. Holy cow. That's big on that screen.</p>
     <p>[8:58] We have no idea if this works in the real world, but we wanted to give it a try in concept to see is this something that might be useful.</p>
     <p>[9:05] So and this is not something that we would put into a production website, but it's certainly something that we would consider doing some limited testing with to see if this helps at all.</p>
     <p>[9:15] We did one other thing that I'll share with you, and this is pretty specific. It requires a very specific extension and library. There's a library called Outfox, which basically brings native speech to Firefox for Windows users, for Mac users, for Linux users.</p>
     <p>[9:33] And there's a speech API and what we ended up doing with this was creating, again with our custom controls, creating a self-voicing set of maps.</p>
     <p>[9:43] So that when you manipulate the map controls, it actually tells you -- and of course you need this Outfox library to do it. So if you don't have that, it's not going to work.</p>
     <p>[9:53] But when you move up, it tells you what you've done. You can actually use some libraries to reverse-geolocate and find out where the center of the map is and read that out.</p>
     <p>[10:04] So what we build into this was the ability to self-voice, and then the next step for us is to take a look at that and say, well, can we reverse-geolocate and tell somebody where they are in the map, just based on -- or what the address is at the center of the map based on where they are.</p>
     <p>[10:22] Now I have no idea if a self-voicing map is of any use to anybody at all. I really don't. But we put these things together to play, to experiment, to try these things.</p>
     <p>[10:32] And so it was after showing all these things that the person said to us, &quot;You know It seems like everything that you're doing is a hack.&quot; And in many ways it is.</p>
     <p>[10:46] Why is it that we needed to use these hacks in the first place? Why did we need to do these things? Why did we need to hack Google Maps? Why did we need to hack Basecamp and create these little extensions in other people's software to fix them?</p>
     <p>[11:01] There's a lot of reasons, but the biggest one is just simply because of decisions that somebody else made. Somebody makes a decision somewhere down the line on how you're going to implement a specific feature, and that has a ripple effect in that that one decisions means that this could be an entirely inaccessible piece of code for somebody.</p>
     <p>[11:23] So where do we start and how do we deal with this, and what can we do on the modern Web to ensure that we don't have to do or create these kind of hacks? So the starting point is something that I hope you're all familiar with and I'm sure you are, and it's progressive enhancement.</p>
     <p>[11:39] Now progressive enhancement is the foundation of everything we do, even for the modern Web. A lot of people struggle with this and they're not really sure that they believe this, but I believe this to be true.</p>
     <p>[11:50] So progressive enhancement is really straightforward. We start with HTML for content, add a layer of CSS for presentation, and add in JavaScript for behavior. That's straightforward for documents. In an application, I think it's slightly different.</p>
     <p>[12:05] Progressive enhancement for applications, we start with HTML for our core content and also our core behaviors. So I mean something really specific about core behaviors.</p>
     <p>[12:15] One of the things that has happened over the years, and we've had this discussion with developers, is that people have said, when you're saying that JavaScript is for behavior, well, doing things with Ajax is behavior, but also just submitting regular forms, clicking on links, doing things like that, that's all behavioral as well.</p>
     <p>[12:35] How many people use Gmail? Most of you. So you now have a button in there that says &quot;Compose mail.&quot; That button looks like a button. It used to look like a link. It wasn't a link, though. It was a span. Why it was a span, we'll never know. It was a span with an on-click attached to it.</p>
     <p>[12:58] We make decisions about how we're going to implement something and that has a huge effect. If it looks like a link, it should be a link. Links and form submissions are things that are core behaviors. They're built into HTML and we need to use them more.</p>
     <p>[13:13] We also have that layer of CSS for presentation. We also have our JavaScript for our advanced behaviors. And another thing that we need to consider now is ARIA for our rich interactions.</p>
     <p>[13:24] So ARIA, if you're not familiar with it, Accessible Rich Internet Applications. This is a spec that is still being worked on. They are already planning for the next version of this spec.</p>
     <p>[13:35] Essentially what this does is let us stop hacking. It lets us programmatically say... If you think back to the Google Maps and we have a slider to zoom in and out, that's really in code, just a bunch of divs and spans and links and maybe a few buttons.</p>
     <p>[13:52] But what ARIA allows us to do is to say, this isn't just a div. This is actually a slider. This is a slider, and it's current value is 15, and it's maximum value is 17, and it's lowest value, the minimum value, is zero or one or whatever it happens to be. So we can take ARIA and add that in to already great content and make the things that we're building better.</p>
     <p>[14:21] We also want to choose our layer carefully. We can choose to place images in one of two layers. Actually, we can put them in three layers. We can put images in HTML. We can put images in our CSS, and we can also use JavaScript to add images to our pages, to our sites.</p>
     <p>[14:40] It's really important that we choose our layer carefully. I want to share some thoughts with you on this. I'm going to show some icons on the screen here and I want you to think in your own mind what they represent and what they are.</p>
     <p>[14:52] So this first icon has a very specific meaning in a web app, usually. Now it could be one of a few different meanings. This icon also has a reasonably specific meaning in a web app, and so does this one. What is the top one? I'm not going to pick on Bruce. I'll pick on somebody else. What does the top one tell you?</p>
     <p>[15:20] Warning. Why? You look at the shape. You look at the color. You look at the symbol, the symbol that's on the icon itself. All of those things are familiar to you as a warning.</p>
     <p>[15:32] And the second one? Stop. I'm not going to stop. I want to keep going. The third one? Everything's OK, right?</p>
     <p>[15:44] These icons, when you look at them, they don't need words beside them to communicate meaning to you in that application, do they? So is this content or presentation? Do these icons belong in your CSS or do they belong in your HTML layer?</p>
     <p>[16:01] Now the reason that I ask this is because the choices that you make in where you put those images have an impact on accessibility. Are you aware that in Windows high contrast mode CSS background images disappear?</p>
     <p>[16:17] So if you have high contrast mode, somebody that has low vision using Windows goes into high contrast mode, every single CSS background image that you have in your web page, in your application, in your site, becomes invisible to them. They cannot see it.</p>
     <p>[16:33] So if you're communicating with visuals, with images, with icons, and you're using image replacement techniques, we want to be really careful to make sure that we have some mechanism for those icons to be showing.</p>
     <p>[16:46] This is the number one reason why I prefer to try and keep your icons in the HTML layer. People hate that. We want to put them in the CSS because we can create a sprite. That's more efficient. It makes it easier for us.</p>
     <p>[17:02] But in many ways it makes it more difficult for somebody that has low vision that's using that site with Windows high contrast mode on.</p>
     <p>[17:10] The other question, does this change if there are words with the icon? If you have an icon and you have the word &quot;warning&quot; beside it and then the actual warning, or you have the Stop icon and then the word beside it &quot;error&quot; with the actual error message, or the Success icon and the words beside it &quot;success, your account was created,&quot; does the fact that the words are beside it mean that that icon is now less content and more presentational?</p>
     <p>[17:42] I'm seeing people nodding their heads. Yes, it does mean if the words are beside it then it is more presentational. Well, here's the deal. What if you don't speak the language? What if you don't speak that language, and you're using this app anyway?</p>
     <p>[17:56] Which might be a completely crazy scenario. I've tried to use a couple of web apps here in Dutch and it's really kind of... It's not fun. I don't know how you do it, but I guess you can read it. So that makes it a little bit easier for you, but not so good for me.</p>
     <p>[18:14] So think about that scenario. If you don't understand the words, then the icon probably means more to you than the words do. Alternatively, if you can't see that icon, the words are 100 percent content and the icon is completely presentation.</p>
     <p>[18:33] So it's going to be somewhere in the middle. There is no cut-and-dried, &quot;This is always content, this is always presentation.&quot; You cannot determine that.</p>
     <p>[18:40] Just because you put it in the content layer or you put it in the presentational layer doesn't mean that that's what it's going to be for the people that are using your site and your apps.</p>
     <p>[18:50] So we want to be careful about what we place in what layer. One of the things that we've seen quite often is that images that are in the CSS layer and the text that they are replacing... So we're using image replacement techniques.</p>
     <p>[19:06] You've got your text in the HTML layer. You've got your image in the CSS layer. Those two things are now in separate layers. So if you make a change to one of them, it's easier to have a disconnection there.</p>
     <p>[19:21] When you're using an HTML-based image and it's in the foreground and you've got alt text, then those two things are right together. You're changing your image and you're changing your alternative for it in the same layer.</p>
     <p>[19:32] When we have a CSS background image and we have text replaced in the HTML layer, they are in different layers and it's easier to lose track of them. Things to think about. We need to make good decisions about what we place where.</p>
     <p>[19:46] One of the other things that progressive enhancement allows us to do in this entire strategy is to do things like change layers. So this is the Fronteers' website.</p>
     <p>[19:57] I have a friend named Dwayne who has low vision. And he's got his computer set up -- you might need to hide your eyes for this -- every single site that he looks at looks like this.</p>
     <p>[20:13] He uses a user style sheet to set it up for him. He has low vision. He cannot read specific colors. He needs to have a certain background color and a certain foreground color, a certain size. He even does some other really cool things here I think.</p>
     <p>[20:27] If you take a look up at the top, you'll see that there are borders around different types of content. So the headings have a particular border around it. So the H1, he's always got this big, thick double-border around it. The H2, he always writes out in small caps with a single border around it, still thick.</p>
     <p>[20:47] He also does something really interesting here with the icons.. not the icons, the links. If you take a look at the links, these are links that are in the middle of sentences.</p>
     <p>[21:00] Fronteers 2011 is completely sold out. Only workshop tickets are available. &quot;Workshop tickets&quot; is a link and he's moved that to a new line. Why? As a low vision user, for him to distinguish links from the surround text becomes much more difficult.</p>
     <p>[21:15] Now if you take a look on this site, it's not that difficult to distinguish the links from the surrounding text. They are a different color and they are underlined. But on many sites that doesn't happen for him.</p>
     <p>[21:28] So it becomes very difficult for him to see where the links are. He's moved them out. He's always got them showing on a new line.</p>
     <p>[21:35] Now I'm not saying everybody needs to go and start testing your sites and your applications with Dwayne's style sheet. If you want to, you certainly can.</p>
     <p>[21:42] I've got an article on Simply Accessible about how to do this. You can grab the style sheet. There's a little bookmark. You can use this on your iPad, your iPhone.</p>
     <p>[21:53] You can use it in any browser. It's really straightforward. All it does is append a new style sheet and attach a new style sheet to the page, and that overrides the default styles.</p>
     <p>[22:02] You can use this as a testing tool if you want to. It doesn't mean that everybody with low vision is going to look at the page like this. But what it means is that you can get a good sense of, &quot;How is my CSS layer? Is it override-able?&quot; These are the kinds of things that people are starting to do today.</p>
     <p>[22:21] Now, in terms of progressive enhancement and how this fits, I think we want to take a good look at how all this fits together and what progressive enhancement gives us and doesn't give us.</p>
     <p>[22:31] So web standards and progressive enhancement really gives us a baseline level. This is not our endgame. Web standards gives us a baseline level of functionality, of interoperability, of general availability, to people that use different devices.</p>
     <p>[22:49] They might be using assistive technology or a mobile device or an alternative browser, or who knows what else.</p>
     <p>[22:56] Web standards and progressive enhancement don't give us a superior user experience. What they do is enable people to have an experience in the first place. It's really important to remember that.</p>
     <p>[23:08] This is not our end goal, is to be standards compliant and use progressive enhancement. Our end goal is to make sure that people get to use something that's really easy to use for everybody, not just those of us that have all of our faculties. So let's keep this in mind.</p>
     <p>[23:24] And I know that this happens at home a lot. We work with a lot of government clients, and even private industry. We get very much into that mindset of, &quot;I'm going to meet this guideline and this guideline and this guideline and this guideline, and then we've done our job.&quot;</p>
     <p>[23:42] We want to make sure that we do that, but that becomes the baseline, not the finish line. We want to keep going from there.</p>
     <p>[23:49] So typical problems that we see and how we solve them -- these are a lot of issues that have to do with the use of JavaScript. And they're not JavaScript's problem. It's just the way that the JavaScript is used.</p>
     <p>[24:02] So first trap, we talked about this when I was talking about the voice recognition software. We saw this, using the wrong controls. So the way that this is done in Google Maps is there's essentially, and I'm really simplifying this, there's a div with a CSS background image. That div has a listener on it that listens for clicks and tries to figure out what action to perform.</p>
     <p>[24:30] That's just not good enough. That's the wrong type of control. We've gone and chosen buttons here. We could have used links. We could have used several other techniques, but we chose buttons because they make the most sense.</p>
     <p>[24:46] One of the things that we looked at for this, when we were choosing the right control, was do we use links? Do we use buttons?</p>
     <p>[24:53] Links take you someplace, either to another page or to another spot within the same page. That's what links do. That's what they're designed to do, that's what they've done for years.</p>
     <p>[25:03] Buttons perform an action. One of the advantages or one of the things that I love about buttons is that when you click a button...</p>
     <p>[25:11] Do you know how to use the keyboard for a button? How do you activate a button with the keyboard? Enter, usually if it's a form, but if it's just a button, the space bar.</p>
     <p>[25:24] So one of the beautiful things about a button is when you activate it, the focus stays on that button. That gives you a really useful tool for something like this, where you're manipulating a map and you might want to zoom in five or six different levels.</p>
     <p>[25:38] It would be really silly if we hit Zoom In with the keyboard, and then let the focus go back to the page and then had to tab all the way to the Zoom In button again.</p>
     <p>[25:47] So the Zoom In button, we can click on that, or we can activate that with the keyboard and just stay there. So we can use that four, five, six times. We want to choose the right controls for the right job.</p>
     <p>[26:00] This is an Amazon page. This is the Amazon page for the book. Which I love this book. It's called &quot;The Presentation Secrets of Steve Jobs.&quot; I love this book.</p>
     <p>[26:16] And you can see in the top left, remember we were using voice recognition software before. We said, &quot;Show me the buttons on the page.&quot; Over this right here, I'm asking, &quot;Show me the checkboxes.&quot;</p>
     <p>[26:27] What I want to do is say &quot;Checkbox Five&quot; instead of having to say &quot;Communications.&quot; &quot;Checkbox Five&quot; is easier to say than &quot;Communications.&quot;</p>
     <p>[26:40] Dragon Naturally Speaking does not see any checkboxes here but, visually, we see 12 of them. No, wrong. Ten of them. We see 10 checkboxes here, but Dragon doesn't see them. That's because they're not checkboxes.</p>
     <p>[26:57] If you take a look at the code, we have an italic. An &lt;i&gt; tag with a class of check swSprite checkunmarked title=&quot;You Reported&quot; whatever, blah, blah, blah.</p>
     <p>[27:14] They've made it keyboard-focusable by using the tabindex attribute. They've added tabindex=&quot;0&quot; to an &lt;i&gt; tag. That's their checkboxes.</p>
     <p>[27:31] I don't know, either. I don't know why they're doing that.</p>
     <p>[27:35] This is the beauty of it. I love this. Only certain things can take the focus. Use those things. If you find yourself adding tabindex to something, tabindex=&quot;0&quot; to something because you want to make it clickable, give your head a shake.</p>
     <p>[27:53] Ask why you're doing that in the first place. Choose something else. There's probably something better to use.</p>
     <p>[28:00] We could, and we see this a lot of the times, too and this is an issue. We see onclicks on images, and tr's and td's and div's. We don't need to do that stuff. We can just put the onclick on a button or on a link. It's really not that difficult.</p>
     <p>[28:17] What about ARIA? I mentioned ARIA before. Accessible Rich Internet Applications, and I said that that was useful for saying to the interface, &quot;Hey, this thing is a slider here. We've got a bunch of divs here, but really it's a slider.&quot;</p>
     <p>[28:31] We could use ARIA to improve this scenario, so that with our checkboxes we could...</p>
     <p>[28:38] Really, I can't look at this code. I'm going to hide my eyes. They've added tabindex=&quot;0&quot; to this to make each one of those pseudo checkboxes, these fake checkboxes keyboard, so that you could tab to each one of them, right?</p>
     <p>[28:56] We could improve this by doing something really simple with ARIA and say, &quot;This has a role of checkbox.&quot; But again, and I would really sort of implore you. If you're going to do something like this, this should be your last, like absolute last-ditch effort. If you see yourself adding role=&quot;checkbox&quot; to your code, seriously just go back, change it to make it a checkbox.</p>
     <p>[29:24] There's probably reasons for it. If you take a look up at the checkboxes that are there, they have a really beautiful design to them that looks better than you would probably see for any checkbox in any browser. Except maybe Opera. Opera probably has the nicest checkboxes, I think.</p>
     <p>[29:43] Is that good? Did you like that? [laughs]</p>
     <p>[29:47] Checkboxes are kind of ugly in browsers, and I can understand why they might want to do this, but we really have to ask, at a certain level, you know, what's the point of doing that?</p>
     <p>[29:57] Checkboxes are getting more beautiful in browsers with every new release. Wait till you see the checkboxes in Chrome 22 and Firefox. What are we on now, 85? Firefox 85? Seven, sorry.</p>
     <p>[30:15] Wait till you see the next checkboxes, they're all going to be beautiful. We'd be able to.. we won't have to do this anymore. So ARIA could help us here, and if you tab to one of those controls, a screen reader or other assistive technology, particularly screen readers, would say that this is a checkbox. It would announce it as a checkbox.</p>
     <p>[30:33] That will not help, right now, with the voice recognition user. So putting an ARIA role of checkbox on an italics tag or a span or anything else does not help somebody that's using Dragon Naturally Speaking.</p>
     <p>[30:49] So we've got a lot of catching up to do. We can still use ARIA, but we want to be really careful about when we choose to use it. In this case, it really doesn't make any sense. We should just use a checkbox.</p>
     <p>[31:01] Second trap that we fall into quite often is managing the focus and the linear flow within a page. We can do this in several different ways. Traditionally, we use the tabindex attribute, the tabindex attribute to do this. Generally we don't do that anymore, and there's some good reasons for it.</p>
     <p>[31:20] I'm just going to give you a really quick example. This is a contextual help dialogue, and this is a really dead-simple way to help give the right clues in the interface as to what's going to happen.</p>
     <p>[31:33] Somebody that can't see this, these are contextual help dialogs that are just being launched by these little question mark links. We've used this technique for years and years and years and years. I think we started using it in probably 2004. It worked back then, and it still works.</p>
     <p>[31:55] This is dead simple, so when you click on the question mark to launch the contextual help dialog, you can do that with either a mouse or with a keyboard. What we end up doing is doing this in such a way that it's really easy to understand for everybody, including people that can't see the screen.</p>
     <p>[32:14] One of the tenets that we have in accessibility is that everything needs to be perceivable, operable, understandable and robust. When we think perceivability, we usually think about people that can't see the screen, or people that can't hear, say, the videos that you're showing.</p>
     <p>[32:31] One of the trickiest ones is understandability. We always think that understandability is about helping people with cognitive difficulties, and it certainly is part of it.</p>
     <p>[32:40] But one of the other groups of people that has a really tough time understanding a web page or a web app, is people that can't see the screen, because they can't see what's happening.</p>
     <p>[32:50] So understandability is not just for people with cognitive difficulties. It's for people that are visually impaired as well. One of the things that we can do to help people understand what's happening in the interface is to use this technique.</p>
     <p>[33:01] It's really very straightforward. When we click on the question mark, what we're really doing is clicking on a link, and that link has an href of...</p>
     <p>[33:16] So what do you say here? Hash, octothorpe, pound? What is it? Hash? We're in the Netherlands right? Amsterdam, so hash it is. Sorry, was that bad?</p>
     <p>[33:30] #unamehelp. That's a link that goes further down in the page. With JavaScript off, here's what this page looks like. That link is up there, and all that does is go back down to this spot within the page. Each link is just a link to a piece of content that's further down in the page. Really, really simple.</p>
     <p>[33:53] Then all we do with this, when we put this into the page, we can see how the focus ring is around that piece of content. All we've done there is said, go and click on that link. When you click on it, take the item that is identified by that fragment identifier, that unamehelp.</p>
     <p>[34:13] Figure out what piece that is within the interface, and then go focus on it. Give it a tabindex of -1 and then set the focus on that div or whatever it is. This is a simplified version, so thisDiv.tabindex= -1. We've already seen setting tabindex=0. That makes something keyboard accessible or keyboard focusable.</p>
     <p>[34:36] Tabindex of -1 makes something programmatically focusable, but not keyboard focusable. What you can do with this technique is say, &quot;I want this div to take the focus&quot;. So give that div a tabindex of -1 and then focus on it.</p>
     <p>[34:56] So now what happens? The next piece of content that the user interacts with, generally speaking, is going to be that piece of content and anything that's inside of it.</p>
     <p>[35:07] The next piece of content if you look at this example, the next piece of content that we have in there, if you hit the Tab key after you've launched that, the next piece of content is actually the close button because there's nothing functional in this dialog, but if you had form fields in there, or links or anything else, they would take the focus.</p>
     <p>[35:26] In this particular case, the Close button takes the focus next and we now need to think about what happens when we dismiss that box, when we close it.</p>
     <p>[35:36] So when you close that box, what should happen to the focus? I know some of you probably know this. Where should the focus go after you've closed and dismissed this dialog?</p>
     <p>[35:48] You didn't know I was going to be testing you, did you?</p>
     <p>[35:52] It's going to go right back to where it was before. We shouldn't necessarily go to the field. What we tend to do is, if this question mark, if this link launched that new piece of content, when we dismissed that new piece of content, the focus should go back to that link that launched it.</p>
     <p>[36:08] This is a paradigm that you're seeing more and more and more, in widget based.. or in web apps that use these widgets.</p>
     <p>[36:18] If you launch a date picker, for example, when you click on a field or you click on a link to launch a date picker, what should happen, the focus goes to the date picker, you interact with that date picker.</p>
     <p>[36:29] When you're done and you submit that date picker or you choose your date, or you dismiss it using the escape key, or whatever it is that you do to dismiss it, the focus goes right back to where it was.</p>
     <p>[36:39] It's like an interstitial process. You're in the middle of something, you launch it, you do that thing, and then you go right back to where you were. It's really, really important to do this because if we don't do this...</p>
     <p>[36:52] Now I chose a particular href here, because this is a functional length that goes further down in the page. But quite often we'll see other things in hrefs. You're using an href or you're using a link to launch something.</p>
     <p>[37:09] Now I know some of you in here have done this and I've done it, too. So don't be afraid to admit it. Hands up if you have used href=&quot;JavaScript:void&quot; before. You're all...</p>
     <p>[37:21] The people that have your hands down, you're lying. You've done it. I know you have. href=&quot;#&quot;, have you done that one? What does href=&quot;#&quot; do? It tells you to go to the top of the page. The default action for href=&quot;#&quot; is to go up to the top of the page.</p>
     <p>[37:40] So we've seen this where you've had 100 links in a page that were all just there so that you had something clickable in a web app, and they all have href=&quot;#&quot;.</p>
     <p>[37:51] And you click on them, and you don't manage the focus. Where does the focus go? Where you told it to go, all the way back up to the top of the page.</p>
     <p>[38:00] We need to make sure that we maintain a really solid workflow and a linear flow within that page. This doesn't go just for things like this, for this contextual help. We use this everywhere.</p>
     <p>[38:12] So this is a Google Maps implementation, and we had these little lightboxes that come up. So this is my hometown of Ottawa, and we have these little lightboxes that come up when you click on one of the little flags on the map.</p>
     <p>[38:30] So what we do with this is when you click on it we bring the focus to this lightbox. It's important to bring the focus to this lightbox.</p>
     <p>[38:37] If you don't bring the focus to this lightbox, where does it stay? On the page. So the next time you hit Tab, it's just going to continue on from where it was. So we want to bring the focus to this lightbox.</p>
     <p>[38:50] So we bring the focus, say, from that link up to the top of the lightbox. It can focus on the lightbox itself. You might focus on the heading that's in that dialog. Then we work our way down that just by letting source order dictate.</p>
     <p>[39:04] And then when we're in.. what kind of dialog is this? It has a specific name. It's a modal dialog. It basically means we can only interact with this thing and nothing else.</p>
     <p>[39:17] So we don't want to allow for interaction in the back,  on the underside of the page. We just really want to allow for interaction in this modal.</p>
     <p>[39:25] So now you have to take this to another step and say, when we get to the end, we actually need to return the focus back up to the top and keep it within here.</p>
     <p>[39:34] You have other options. You could say, when you get to the end, close it down and just go back to that original link in the page. You have choices. You need to make some good decisions here.</p>
     <p>[39:45] Even if we used JavaScript to manipulate all of this... Even if we use ARIA, because one of the things that we can do with ARIA is say that this has a role of dialog, just like we said this has a role of checkbox or we talked about role of slider. This can have a role of dialog. We can force the focus to stay within that box.</p>
     <p>[40:05] But what that doesn't do is deal with all the eventualities, because we are still kind of hacking a little bit. We're using techniques to make it seem like it's a dialog even when it's not a true dialog.</p>
     <p>[40:17] So one of the things that exists right now, and there's work being done to try and address this, is that a screen reader user that is accessing this dialog, even though we placed the focus there and we limit them from going outside that box, they have other mechanisms for getting at content.</p>
     <p>[40:36] They have the ability to use a links list. So they can hit Insert F5 and bring up a list of all the links that are in the page. And they can still go and get to any of the links that are in the grayed-out area right now.</p>
     <p>[40:47] Just using JavaScript to manipulate the way that somebody creates a path through that document doesn't change the way that a screen reader user or some other assistive technology user can get at all the other content. So we are still emulating and we are still hacking. We need to move beyond some of this.</p>
     <p>[41:09] Trap number three is getting trapped with the keyboard. That's partly what we're talking about now. The last one, we just talked about trapping the keyboard on purpose. Now we want to talk about some scenarios where it's maybe not so good.</p>
     <p>[41:22] So I want you to take a look at this. I'm not sure how well you can see it, but this is a bank's login form. I'm going to let it run again. I'll just describe it to you here quickly.</p>
     <p>[41:34] The form fields that are there have a tabindex on them. They've used tabindex to manipulate the tab order. So right now you're looking, we're in that card number where you would add your bank card number.</p>
     <p>[41:50] Then you would look at this and say, the next field that you probably are going to tab into if you're using the keyboard is the card nickname right, which is optional.</p>
     <p>[41:59] This is a great option, and then if you hit Tab from there you're probably going to the &quot;Remember my card number and nickname&quot; checkbox.</p>
     <p>[42:05] Then after that you're going to probably go to the password field, then to the &quot;Forgot password&quot; link, and then to the login button. Then you'll continue on from there, if you continued on with the keyboard.</p>
     <p>[42:16] They've got some interesting issues here, though, because they have managed focus and flow with tabindex and with JavaScript.</p>
     <p>[42:25] So I want you to watch what happens. We've already said it should go from card number to card nickname. But they've used tabindex, so when we tab from card number, we actually move to the password field.</p>
     <p>[42:40] So we've missed that description field and we've missed that ability to remember. That remembering checkbox has skipped, as well.</p>
     <p>[42:50] The next thing that you would logically expect to happen when you hit the Tab key is that we go to the &quot;Forgot password&quot; link. Now this is a genericized example, but it is an example from an actual bank that we did some work with.</p>
     <p>[43:04] So if I hit Tab from there, I'm not sure how well you can see it, but the focus actually goes all the way up to the top navigation bar next, because there are only a couple of elements that had tabindex.</p>
     <p>[43:17] So now we've made it actually more difficult. How long is it going to take us to get all the way down to these other fields? And let's let it keep going.</p>
     <p>[pause]</p>
     <p>Derek: [43:30] So now we get into the card nickname. You can see the cursor just there in card nickname. Next you would expect it to go to that checkbox again, right? Well, they've got some JavaScript in there now. Now that forces the focus to go into the password field.</p>
     <p>[43:53] And you remember where it went after the password field? Back up to the top. The way that they've used tabindex and JavaScript together to manage the flow really kind of doesn't manage the flow.</p>
     <p>[44:05] So how easy was it... Did we at any point hit the &quot;Forgot password&quot; link? Kind of a useful piece of functionality. But if you're a keyboard user, you cannot hit the &quot;Forgot password&quot; link.</p>
     <p>[44:19] We are stuck and we have created a little keyboard loop, a keyboard trap here. This kind of thing happens all the time, but we want to avoid it as much as possible.</p>
     <p>[44:27] The easiest way for you to avoid this is to don't mix tabindex and JavaScript for managing the flow. Generally we stay away from tabindex as much as possible except for adding tabindex=&quot;0&quot; and tabindex=&quot;-1&quot;.</p>
     <p>[44:42] We're usually doing that with JavaScript and we're managing the entire process with JavaScript.</p>
     <p>[44:48] What we've created here is a really big keyboard trap that is limiting the amount of functionality that we can get at. We definitely don't want to do this. This is really, really quite easy to avoid.</p>
     <p>[44:59] Another typical keyboard trap is just, we see this from bad code. I hope nobody wrote this particular lightbox implementation.</p>
     <p>[45:10] This is a lightbox implementation that has keyboard functionality to it. So the person that wrote it actually understood that yes, we need to have keyboard functionality. But the code is a keydown function.</p>
     <p>[45:21] And if you take a look at what it says, the very first line should tell you that we're in trouble. Prevent the default keyboard action, like navigating inside the page. We wouldn't want to do that, would we? Why would we want to do that?</p>
     <p>[45:34] In fact, what they've done is said, &quot;If the key that is pressed is not one of the close keys or one of the next keys or one of the previous keys, then return false.&quot;</p>
     <p>[45:48] Now they have set this up, and if you test this in a browser, you can go and you can test this and decide that you're on this page.</p>
     <p>[45:56] I actually did this when I was looking for different lightbox implementations. We started testing this one, and I didn't want to close it. I wanted to keep it open. I wanted to open up a new tab so that I could go and search for some more.</p>
     <p>[46:09] And do you think that I could open a new tab? No. They have prevented the default.</p>
     <p>[46:15] Now that depends on the browser. But because they've trapped everything and said, &quot;Don't let anything else through unless it's close, previous or next,&quot; they impinged on my ability to open a new tab, to go to the address bar. They had basically shut down everything.</p>
     <p>[46:32] These kind of keyboard traps, they're well-meaning in terms of the way that they implemented some keyboard support. But they just didn't think it all the way clearly through. We need to think things through to the end.</p>
     <p>[46:48] Some of the other things that we do in keyboard support really don't have anything to do with JavaScript. We don't really need to do anything except rethink our design.</p>
     <p>[46:57] I don't know how much this affects you, but this affects us all the time. When we write our addresses... Addresses, we tend to think of the postal system.</p>
     <p>[47:06] So when we create a postal address it's street address, city, province and state, country, zip code. We go from the most granular level to the biggest level, so to a higher level. And we've done that for years in web forms.</p>
     <p>[47:24] And what we've done is we've put street address, city, province or state, region, country, zip and postal code, or whatever it is. And so many times I've seen this in forms where we have the province and state be dependent on what the country selection is, yet the country selection is still after the province and state.</p>
     <p>[47:45] Why do we do that? Just because of the way that we write..used to write, because nobody really writes letters anymore, the way we used to write letters on a real envelope.</p>
     <p>[47:54] All this took for us, when we were doing it, was to say, &quot;Well, let's make the country selection first.&quot; You don't need to do anything really overly creative other than think, how are people going to use this?</p>
     <p>[48:06] When you've got a dependency like that, let's make the dependent field or the independent field first and the one that's dependent next.</p>
     <p>[48:15] This doesn't take much, but these are the kinds of traps and things that we see that just reversing the order of these two fields makes this infinitely more usable. Not just more accessible, but more usable for anybody.</p>
     <p>[48:30] When we're testing for keyboard interactivity and when we're keeping it in mind, we need to test for things like those usability issues. We have to test for the success case.</p>
     <p>[48:39] The person entered the right information and it was correctly received. They entered incorrect information and they got the appropriate error message.</p>
     <p>[48:48] But the other thing that we need to deal with is the correction case. By the correction case, I mean how easy is it for the person to go from the incorrect state to the correct state?</p>
     <p>[49:01] We've seen lots of JavaScript that actually impedes this process, where somebody can't actually correct their work or they can't double-check their work.</p>
     <p>[49:11] The other thing that we want to be sure of is that we don't want to kill other keyboard functionality, things that we have built into the browser. We just don't want to kill that stuff.</p>
     <p>[49:27] The trap number four is expecting everything to work right now. We are dealing with new technology. Now HTML5 and ARIA and CSS3, all of these technologies have been around for a little while. They've been in development for a little while. But there are issues with how they work right now.</p>
     <p>[49:51] So let's take a look at them. Very simple. This is a dialog with a role of button. So this role of button is on that closed button. So what do you think we should use for that instead of role of button? This is tough stuff, so I'm not surprised that it's silent right now. This is a tough question. What should we use for that? Just use a button, right?</p>
     <p>[50:17] If you're saying role=&quot;button&quot;, if you look at the interface, if I said to you, &quot;What is that close thingy there?&quot; you would look at it and based on its design you would say that it's a button. So let's just make it a button.</p>
     <p>[50:29] In this dialog, it's actually a link, and it's a link that has a role of button. Now if you have ARIA support in your screen reader and you go to a link that has a role of button, you're going to hear &quot;close button.&quot;</p>
     <p>[50:44] If you don't have an ARIA supporting screen reader or browser combination, you're going to go to that and it's just going to say &quot;link close.&quot;</p>
     <p>[50:54] When you activate a link with the keyboard, you hit the Enter key. That's going to close that down. Now the fatal flaw here is that this button in this dialog has a role of button on it, which tells the screen reader that it's a button.</p>
     <p>[51:12] And the default behavior for a button to activate a button with a screen reader or with the keyboard is to use the spacebar. But that's a link. What happens if you press the space bar on a link? You just move the page down.</p>
     <p>[51:26] You hit Shift, space, you move the page up. Right it's a scrolling mechanism. There is no JavaScript on this to actually deal with that keyboard handler, or with that keyboard event to deal with the spacebar on there.</p>
     <p>[51:43] So this causes a problem. The person's going to think this is a button. They hit the spacebar. They think that they've closed it. And then they try to interact with the content again. It's a modal dialog. They're still going to be stuck in that dialog.</p>
     <p>[51:57] They're going to go to that button again. It's the only thing available to them. They're going to say &quot;Close button, press spacebar to activate.&quot; They'll hit spacebar and they won't be able to get rid of it.</p>
     <p>[52:07] We need to be careful with some of this stuff. Role=&quot;dialog&quot; has some issues with it as well. This is a great role. I love it, because when we launch a dialog we can say, &quot;This is an ARIA dialog.&quot; So the screen reader or other assistive technologies should tap into that and say, &quot;This is a dialog. I get it.&quot;</p>
     <p>[52:27] But we have problems with things that go beyond simple content. Here, these are simple form fields. Really easy. When you launch that dialog, one of the things that is happening with screen readers right now is that they're going into application mode, which basically says, &quot;Use one particular type of interaction model.&quot; And that is using the Tab key.</p>
     <p>[52:47] Now that's OK here when we have form fields, but if you launch a more complicated dialog where you have form fields and maybe some links and some other content, you're forced to use the Tab key. And that breaks your interaction for using your Up and Down Arrow keys to read line-by-line within that dialog.</p>
     <p>[53:06] So a different interaction model is required and it means people are looking are stuff like this. And we've seen implementations where people have grabbed a dialog straight off of a code repository site.</p>
     <p>[53:18] They've grabbed a dialog that's really designed to work just with form fields, and they've put a bunch of other content in it. And then they wonder why a screen reader user can't get to it. It's because of the fact that this is a dialog and it requires a different type of interaction model.</p>
     <p>[53:32] ARIA and non-ARIA mechanisms of working require different types of interaction. We have this as a role of menu. So this is another role that we have available to us.</p>
     <p>[53:47] The ARIA roles for this work really well when you're tabbing through the interface. But tabbing through the interface is not the only way to work.</p>
     <p>[53:53] As I mentioned in the last slide, we have the ability to use the arrow keys to move up and down. When you use the arrow keys to move up and down, ARIA is not triggered. None of the ARIA roles are mentioned by any screen reader for this when you're simply using the arrow keys.</p>
     <p>[54:11] So we have a different type of interaction here. We have the same thing with tabs. Tabs are a pet peeve of mine, and I think they're great that we can make these accessible tabs and use the appropriate keystrokes.</p>
     <p>[54:25] So with a tab list, you would tab to the list of tabs and then you would use the arrow keys to switch between tabs. Then you would use other keys to go in and continue to read the content that's there.</p>
     <p>[54:39] The problem with this is that that works really well when you have full ARIA support, but it doesn't work when you don't. When you're using ARIA, this works reasonably well.</p>
     <p>[54:50] Now I did do a test the other day with this using JAWS 11, which is not that old. And the keystrokes don't work well. So you can tab to the first tab and you can use the Right Arrow key to move to the second tab.</p>
     <p>[55:05] But as soon as that happens, the model switches. The screen reader goes out of its application mode and starts to read letter-by-letter, because that's what the Right Arrow key does.</p>
     <p>[55:16] So there are conflicts right now in that way that these things are interpreted by different assistive technology.</p>
     <p>[55:24] So remember before, we said that we want to consider ARIA to be part of progressive enhancement. Right? We need to take a look at that as a layer of progressive enhancement and not something that we can just start throwing in there.</p>
     <p>[55:35] We need to test these things and make sure that they work really well before we start deploying them everywhere and anywhere.</p>
     <p>[55:47] Other questions that will come up, do we use HTML5-required or do we use ARIA-required? HTML5 has a required attribute but it doesn't really have any good support right now in any of the current assistive technology.</p>
     <p>[56:02] It may get there in some of the new betas, but it's not there. So we need to decide that maybe we want to use ARIA-required instead of HTML5-required.</p>
     <p>[56:13] We need to take a look at these things. Do we use something like a brand new element like Progress or do we use role=&quot;progressbar&quot;? We need to make good decisions about this.</p>
     <p>[56:25] So what do we do? We need to use the simplest, most correct markup anytime that you can. We need to make sure that we manage the keyboard flow. We need to avoid keyboard traps. We need to plan for those modern technologies not to work. We have to be aware of the risks of doing things like this.</p>
     <p>[56:43] Now this sounds doom and gloom. I want you to use ARIA. I want you to use HTML5. But I want you to also spend some time testing these things and making sure that you're not causing conflicts. We want to make sure that we're not causing conflicts.</p>
     <p>[56:59] How can we go beyond the technical? How can we just make things better? Right now we've been really talking about technical solutions for everything. This has been a very technically-oriented talk. How can we make things better? Just make better websites.</p>
     <p>[57:17] We can simplify. We can make the overall user experience better. We can make things more usable, in general.</p>
     <p>[57:24] I can give you a really, really quick example. We kind of use this as a catch phrase, &quot;progressive enhancement for content.&quot; I'm not going to show you this responsive design because everybody has one of these slides. This is my slide, and this is my site, and this is what we can do.</p>
     <p>[57:42] Us geeks are the only people that do this, by the way. We sit there and we, &quot;Oh, look how it resizes. Look how I'm super cool because I can resize everything.&quot; We're the only ones that do that. Users don't do that. They don't care. It's just us.</p>
     <p>[57:56] So moving on from responsive design, I think it's important. I think it's really important. We can set it up so that we're compatible with different devices. But we really need to go beyond and say, &quot;Let's do it with content. Let's enhance our content.&quot;</p>
     <p>[58:10] So this is a site that we built, and you look up at the top. This is the registration page. Let's register. This is an event that we ran in Ottawa. Register now. Well, once registration was closed, we said, &quot;That doesn't make sense anymore. Make it a form to fill out.&quot; And we added some other things in, as well.</p>
     <p>[58:30] We used responsive design. We used media queries. We made it so that it fits on Android phones, on other phones. But the big thing that we did was we said, &quot;On event day, nothing else matters.&quot;</p>
     <p>[58:43] We turned the whole site on event day into this, because the only thing that matters on event day is the schedule. Nothing else matters on event day.</p>
     <p>[58:55] This version of the site was accessible. The other version was accessible. But this one fits better for the context. You've heard content is king? Then people say, &quot;No, no, no. Context is king.&quot; Content in context is king. We need to make sure that we hit the appropriate content in the right context.</p>
     <p>[59:17] We even set this up so that if you were coming to the event and it was before the event at 9:00 AM, instead of just showing the schedule, it actually showed you the directions on how to get there.</p>
     <p>[59:31] So we've got this set up with geolocation now so that if you're within 500 meters you get the schedule. If you're more than 500 meters away, you get the directions on how to get there.</p>
     <p>[59:41] Content in context is king. It was all based around this idea that content over time, and the importance of content over time changes. And that's really not to do with anything technical. That's really just good design. And that's kind of what we're all about, right?</p>
     <p>[59:59] That is the end of my time. I thank you very much. And I hope to be back here someday.</p>
     <p>[applause]</p>
     <p>Derek: [60:19] Should I just keep talking? Hi! Let's keep going!</p>
     <p>Man: [60:26] We have time for one question. So, anybody that wants...</p>
     <p>Derek: [60:37] Have a question right here. Go ahead.</p>
     <p>[background talking off mic]</p>
     <p>Derek: [60:53] Yeah. So the question was when we showed that contextual dialog, the contextual help for that form field, we used the alert dialog role, and was that semantically correct?</p>
     <p>[61:04] And the answer to that is, it's probably not. That's a very fake dialog so we didn't really care too much about it. There's three different types of dialogs that you can use, and you need to choose the one that's appropriate.</p>
     <p>[61:17] So there's alert, dialog, and alert dialog. Basically, alert is &quot;Here's a message,&quot; dialog is &quot;Interact with it,&quot; and alert dialog is &quot;It's a really, really simple message.&quot;</p>
     <p>[61:28] So it's more about choosing the right one for the content that's in there. So yeah, good question.</p>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>1</strong> comment</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <h3 class="extra">Comments</h3>
     <dl id="comments" class="reacties">
      <dt id="comment-38"><a href="#comment-38" class="number" id="latest-comment">1</a> Chris on 19-04-2012 at 20:18 o'clock:</dt>
       <dd>Great presentation. I have been doing accessibility evaluation and education along with beta testing adaptive products for more than 25 years. This is one of the best and most useful presentations I have seen. I hope contents are updated and linked. One of the biggest problems is how much old information is still out there. Even if it is still good IT staff tend to ignore it if it seems old or has not been updated.</dd>
     </dl>
     <form method="post" action="/congres/2011/sessions/accessibility-for-the-modern-web-derek-featherstone.md" id="comment">
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
