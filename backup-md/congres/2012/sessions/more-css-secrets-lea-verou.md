<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>More CSS secrets: Another 10 things you may not know about CSS by Lea Verou · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p751">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>More CSS secrets: Another 10 things you may not know about CSS by Lea Verou</h2>
     <video width="480" height="270" controls>
      <source src="/_downloads/2012/lea-verou-more-css-secrets.webm" type="video/webm">
      <source src="/_downloads/2012/lea-verou-more-css-secrets.mp4" type="video/mp4">
      <track src="/congres/2012/sessions/more-css-secrets-lea-verou.vtt" default>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2012/lea-verou-more-css-secrets.webm">download the video</a> (or the alternatives: <a href="/_downloads/2012/lea-verou-more-css-secrets.mp4">1</a>) and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="https://vimeo.com/52882799">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2012/lea-verou-more-css-secrets.webm">Download video</a> (WebM, 116MB)</li>
      <li><a href="/_downloads/2012/lea-verou-more-css-secrets.mp3">Download audio</a> (MP3, 50MB)</li>
     </ul>
     <h3>Transcript</h3>
     <div class="transcript">
      <p><span data-start="00:00:05.000" data-end="00:00:36.000" data-start-seconds="5">Hello, everyone. Christian's introduction makes my first slide a bit redundant. Also, I will need to restart my browser now. Just a second. OK. This didn't start very well, but hopefully, it will go better.</span></p>
      <p><span data-start="00:00:36.000" data-end="00:00:59.000" data-start-seconds="36">Christian's introduction makes my first slide a bit redundant, but I will introduce myself anyway. I'm Lea. If you've heard my name before, it's probably due to one of my open source projects. The most popular of those are Prism, css3test.com and dabblet. Oh, and -prefix-free. You can see more at my website.</span></p>
      <p><span data-start="00:00:59.000" data-end="00:01:18.000" data-start-seconds="59">I work at W3C, as a developer advocate. Like Christian told you, last year, I was here giving a presentation called CSS3 Secrets. I've stopped using the term CSS3 ever since. So this presentation is called More CSS Secrets.</span></p>
      <p><span data-start="00:01:18.000" data-end="00:01:25.000" data-start-seconds="78">Because CSS3 doesn't exist. After CSS 2.1, CSS was broken into modules. So CSS3 is a non-existent buzzword, practically. Because every module has its own versioning.</span></p>
      <p><span data-start="00:01:25.000" data-end="00:01:38.000" data-start-seconds="85">How many of you were here last year and attended this talk? Quite a few. For the ones that weren't, here's a very small recap. The first one was bouncing transitions...</span></p>
      <p><span data-start="00:01:38.000" data-end="00:01:58.000" data-start-seconds="98">How you can use cubic-bezier values out of range, out of the zero to one range, to create bouncing transitions like this one. The second one was how you can use border-radius 50 percent to create flexible ellipses that remain ellipses, regardless of dimensions.</span></p>
      <p><span data-start="00:01:58.000" data-end="00:02:12.000" data-start-seconds="118">The third one was multiple outlines. How you can hack box shadow to give the multiple box shadows with high spread radius and no blur, to give the impression of multiple borders, or multiple outlines.</span></p>
      <p><span data-start="00:02:12.000" data-end="00:02:20.000" data-start-seconds="132">The fourth one, how you can use pointer events known to make elements ignore mouse-overs and mouse clicks.</span></p>
      <p><span data-start="00:02:20.000" data-end="00:02:34.000" data-start-seconds="140">Fifth one -- I love tabs, so I love tab size property. You can use tab size to make tabs have a reasonable width, and not this horrible eight characters that they usually do.</span></p>
      <p><span data-start="00:02:34.000" data-end="00:02:50.000" data-start-seconds="154">Sixth was how to take advantage of the relationship between nth last child and first child, to style elements based on how many siblings they have regardless of whether those siblings are before or after them.</span></p>
      <p><span data-start="00:02:50.000" data-end="00:03:04.000" data-start-seconds="170">The seventh one was how you can use the check pseudo-class and pseudo-elements and labels to create custom check boxes that are accessible and work just like the browser check boxes, without any JavaScript.</span></p>
      <p><span data-start="00:03:04.000" data-end="00:03:15.000" data-start-seconds="184">The eighth one was which new cursors we get in CSS3 UI, that allows us to enhance usability of our apps.</span></p>
      <p><span data-start="00:03:15.000" data-end="00:03:22.000" data-start-seconds="195">The ninth one was how you can take advantage of gradients to create background patterns.</span></p>
      <p><span data-start="00:03:22.000" data-end="00:03:39.000" data-start-seconds="202">The tenth one was how you can make background images follow the padding, regardless of how much the padding is, so that you can have something positioned -- for example, in the bottom right corner. But not being stuck at the bottom right corner, but actually following the padding.</span></p>
      <p><span data-start="00:03:39.000" data-end="00:03:45.000" data-start-seconds="219">If you're interested in any of those, you can look in Vimeo for the video from last year's Fronteers.</span></p>
      <p><span data-start="00:03:45.000" data-end="00:04:16.000" data-start-seconds="225">This year, I have another ten things. This is kind of like a sequel of a talk. I know that sequels are usually worse than the original, so this is a bit of a challenge. But I'm hoping this will be a bit more like...If it was a movie, I'm hoping it would be a bit more like the first Star Wars movies, and not like the last sequels. So I'm hoping it will be as good as the original.</span></p>
      <p><span data-start="00:04:16.000" data-end="00:04:32.000" data-start-seconds="256">Let's start with the first one. Here's a screenshot of my Google Reader. Let's go to the live thing. As you can see, you should look here, when I scroll, there's this shadow at the top that indicates that I can scroll up.</span></p>
      <p><span data-start="00:04:32.000" data-end="00:05:04.000" data-start-seconds="272">You can see the same shadow at the bottom, which indicates I can scroll down. If I scroll all the way down, there is no shadow anymore. Same happens with the top shadow. If I scroll up and there's no more scrolling to do, the shadow disappears. I find that this is a very nice little usability enhancement, that indicates where you are without needing to see the scroll bar, in a very rough way. It turns out you can do that with plain CSS.</span></p>
      <p><span data-start="00:05:04.000" data-end="00:05:14.000" data-start-seconds="304">A property that helps us a lot is background attachment. You might be thinking, &quot;What is there to learn about background attachment?&quot;</span></p>
      <p><span data-start="00:05:14.000" data-end="00:05:43.000" data-start-seconds="314">Background attachment is just CSS 2.1. We know everything. It has two values, scroll and fixed. They work kind of like that. If you scroll the page, if background attachment is scroll. It doesn't scroll if it's fixed. You can see the background of the box scroll. And if you scroll the element itself, is background doesn't move, regardless of the background attachment value.</span></p>
      <p><span data-start="00:05:43.000" data-end="00:05:55.000" data-start-seconds="343">That's what we had in CSS 2.1. However, in backgrounds and borders, level three, we got a new value. Local. So you can scroll the element and its background now moves, as well. Of course, if you scroll the page, it behaves as if it was scroll background.</span></p>
      <p><span data-start="00:05:55.000" data-end="00:06:27.000" data-start-seconds="355">It turns out that this is actually immensely useful for creating this effect. Because we can have a shadow and then...This shadow can have background attachment scroll, so that it doesn't scroll when the element is scrolled, but we can have something else that covers it, which has background attachment local. So that when we scroll, it reveals it, because it scrolls with the element. If this doesn't sound very comprehensive, let's see it in action.</span></p>
      <p><span data-start="00:06:27.000" data-end="00:06:42.000" data-start-seconds="387">So, we add a radial gradient, which will be our shadow. It will start from black and go to transparent. This will be very intense. We don't want something like this. But it will help us see what we're doing.</span></p>
      <p><span data-start="00:06:42.000" data-end="00:07:20.000" data-start-seconds="402">Let's move it to the top center. Let's make it a bit smaller, because that's not a shadow. That's huge. We don't care about the horizontal background size, but we want to restrict the vertical background size, and make it that small. Of course, we don't want to repeat it. So background-repeat would be no-repeat. This is a bit too intense shadow, so let's move the transparent colors up a bit.</span></p>
      <p><span data-start="00:07:20.000" data-end="00:07:36.000" data-start-seconds="440">Let's change this black to be semi-transparent. This is still too intense. Let's make it 20 percent. But let's make it a bit more intense shadow now so that you can see what I'm doing.</span></p>
      <p><span data-start="00:07:36.000" data-end="00:07:49.000" data-start-seconds="456">This is our shadow. When I scroll the element, the shadow shape stays in place. So we lose a usability benefit unless we do something more.</span></p>
      <p><span data-start="00:07:49.000" data-end="00:08:09.000" data-start-seconds="469">We will need a linear gradient on top of that, which will have a solid color -- let's make it red now, so that you can see what I'm doing. We'll change it to white afterwards, to match the background. As you can see, now, the red linear gradient obscures our shadow all the time.</span></p>
      <p><span data-start="00:08:09.000" data-end="00:08:43.000" data-start-seconds="489">We don't want that. We want it to obscure our shadow only when we're scrolled up. Background attachment to the rescue. We will give a different background attachment value to the red linear gradient and scroll to our shadow. You can see how, when we scroll, we can see the shadow. When we're scrolled up, we see the gradient. Of course, we can make it white, so that it blends with the background.</span></p>
      <p><span data-start="00:08:43.000" data-end="00:09:05.000" data-start-seconds="523">It has a little bit of a problem now, however. It doesn't reveal the shadow very smoothly. It's very harsh. Most people wouldn't notice it, but it's quite easy to make it better. How will we make this better? Let's go back to red, see what we're doing, and scroll up.</span></p>
      <p><span data-start="00:09:05.000" data-end="00:09:48.000" data-start-seconds="545">We will make it a gradient, from white to completely transparent white. In this case, it will be from red to semi-transparent white, so that we see what we're doing. We're going to change it to white afterwards. And let's make it a bit bigger. Nope. The first one. OK. So now you can see what's happening here. And we can change it to white. And make it a bit lower, so that it completely obscures it.</span></p>
      <p><span data-start="00:09:48.000" data-end="00:10:17.000" data-start-seconds="588">Now, you can see how it's more smoothly revealed as we scroll. We can make our shadow a bit less prominent. That's the final effect for the first shadow. Of course, we can do the exact same thing with the bottom shadow. This is the final result. [applause]</span></p>
      <p><span data-start="00:10:17.000" data-end="00:10:47.000" data-start-seconds="617">Thank you. So background attachment local has pretty good browser support. Even IE9 supports it and practically every used version of Opera, Safari and Chrome. Firefox is not playing nice here. It doesn't support it yet. But I think there's a bug about it. They're working on it, so hopefully Firefox will soon support it. If you want more information about it, here is a link to the spec.</span></p>
      <p><span data-start="00:10:47.000" data-end="00:11:17.000" data-start-seconds="647">Of course, I can't finish this section without crediting Roman Komarov, who is the one that came up with the original version of this effect. He was taking advantage of pseudo-elements and positioning. I suggested we use backgrounds and background attachment local. Also, if you plan to have this work on IE9, you should use solid images for the gradients, because IE9 doesn't support gradients. But the rest of the technique is exactly the same. And it degrades very gracefully.</span></p>
      <p><span data-start="00:11:17.000" data-end="00:11:39.000" data-start-seconds="677">If the browser doesn't support background-attachment local, you will just get scroll for both of them for both of the backgrounds. So the shadow will be obscured at all times. So you just get no shadow. And the caveat is that it requires a solid background. So if you want to have a pattern or something, that's problem.</span></p>
      <p><span data-start="00:11:39.000" data-end="00:11:57.000" data-start-seconds="699">Our second secret for today. I am sure many of you have seen this trend in websites fixed width, fluid background. You have sections with different styling, usually different colors. They extend all the width of the viewport but their content is actually fixed width.</span></p>
      <p><span data-start="00:11:57.000" data-end="00:12:15.000" data-start-seconds="717">Usually, they are implemented with something like this. We have our sections and we have a wrapper in the section that has our fixed width and margin auto. The code looks something like this for the wrapper and the section has the color and everything.</span></p>
      <p><span data-start="00:12:15.000" data-end="00:12:33.000" data-start-seconds="735">However, how could we do this without the wrappers? This always bothered me. I hate using non-semantic elements in my HTML. It always bothered me that if I wanted to use this effect, I had to use the wrapper element. However, it doesn't need to be like that.</span></p>
      <p><span data-start="00:12:33.000" data-end="00:13:14.000" data-start-seconds="753">Basically what this &quot;margin auto&quot; mean? It means you take the available space, if you subtract the width of the element and you divide it by two. Basically if we use &quot;calc,&quot; which allows us to do arithmetic operations between percentages and units and different units, all sorts of cool things. So margin auto, in our case, could be written like this. Fifty percent, which is the horizontal space we have available, minus half the width of the content that we want to have, half the width, half of this basically, which is 350.</span></p>
      <p><span data-start="00:13:14.000" data-end="00:13:34.000" data-start-seconds="794">However, it should be obvious now that instead of having a margin in the wrapper, we can actually replace it, move the CSS to the section and convert the margin to a padding. And this works exactly the same way. Let's see it in action.</span></p>
      <p><span data-start="00:13:34.000" data-end="00:14:20.000" data-start-seconds="814">Here we have the same kind of structure without the wrappers. And we're going to style this section. It has the same width. It will have the same width. Let's try something like this. You can see how it instantly becomes what we wanted. And we only have sections, no wrappers. Unfortunately, Calc doesn't have very good browser support. We can pretty much rely on Firefox for it. You can't expect IE8 to support anything.</span></p>
      <p><span data-start="00:14:20.000" data-end="00:14:52.000" data-start-seconds="860">Chrome quite recently supported it, but not so recently that we can't depend on it. Because you know how frequently Chrome updates. Safari 6, that's kind of a problem. The worst thing is Opera doesn't support Calc yet. It's kind of a layout thing. So it's not one of the things that degrade very gracefully. Thankfully, or maybe not so thankfully, depending on how you see it, there is a hackie way to do it in CSS 2.1.</span></p>
      <p><span data-start="00:14:52.000" data-end="00:15:30.000" data-start-seconds="892">Here we have our container, which could be the body. In this case, it's a div called &quot;sectional&quot; inside my slide. It has a width of 700 pixels that we want. It has a margin of auto, to be centered. The hack is, you use a very large negative...A very small horizontal padding for both sides, and a very large horizontal padding. That gives us the effect we want.</span></p>
      <p><span data-start="00:15:30.000" data-end="00:15:51.000" data-start-seconds="930">I'm not sure how browsers deal with this sort of thing. Because it's usually large numbers like this don't have the greatest performance and it's kind of a hack. Hopefully, we'll be able to use Calc very soon. Or maybe you could apply this conditionally, for browsers that don't support Calc.</span></p>
      <p><span data-start="00:15:51.000" data-end="00:16:15.000" data-start-seconds="951">So, a third secret for today. Assume you have something like a Lightbox, and as you all know, Lightboxes start from something small and they grow. However, they don't exactly grow in this way. Here, we have on the second state, we basically set the width and height, which are originally zero.</span></p>
      <p><span data-start="00:16:15.000" data-end="00:16:31.000" data-start-seconds="975">We have a very simple transition that goes like this. It transitions every property that can be transitioned over the course of one second, but that's not the Lightbox effect, that's not what we wanted to do.</span></p>
      <p><span data-start="00:16:31.000" data-end="00:16:52.000" data-start-seconds="991">So, how do we deal with this? One way would be to use CSS animations, but that's kind of like using a Swiss Army knife to cut your bread. You don't need to use animations for this. You can just use good old transitions that have much better browser support.</span></p>
      <p><span data-start="00:16:52.000" data-end="00:17:31.000" data-start-seconds="1012">What we're going to take advantage of is two things. We can restrict transitions based on which property they apply to. So you can write width here and have only the width transition. You see the height just jumps, which isn't very useful at this point. But you can combine multiple transitions with different parameters. And the third thing that's going to be very useful is a value called transition delay, which can delay the transition by the amount we specify.</span></p>
      <p><span data-start="00:17:31.000" data-end="00:17:33.000" data-start-seconds="1051">The transition delay, in the shorthand, is always second value. So if we have a one-second delay, the only difference it makes is that the transition takes one second to actually start happening.</span></p>
      <p><span data-start="00:17:33.000" data-end="00:17:53.000" data-start-seconds="1053">So we can combine these and have two transitions on the element. One of them will be one second delayed and one of them will happen instantly. The first one on the width, the second one on the height.</span></p>
      <p><span data-start="00:17:53.000" data-end="00:18:24.000" data-start-seconds="1073">What this transition delay does is that when the first one finishes -- because the first one is one second -- the second one starts, because it has a delay of one second, which is the same delay as the first one. Obviously, if we wanted to sequence even more effects, we could add another transition here with a two second delay, so that it happens after the height transition. Let's see this in action. You see, first the width, then the height. Now it opens. First the width, then the height.</span></p>
      <p><span data-start="00:18:24.000" data-end="00:18:54.000" data-start-seconds="1104">But that's not what we wanted. Not exactly. It closes in the way we wanted. We wanted first width, then height. But it doesn't open in the same way. We want to reverse it when it opens. We want, first, the height, and then the width. So what do we do? Behind the scenes, this gets a class of current when it's open. That doesn't matter for your CSS. It could be anything.</span></p>
      <p><span data-start="00:18:54.000" data-end="00:19:27.000" data-start-seconds="1134">Let me show you an entire rule that does the same thing. Yes, that works. Now, we can give a different transition value when it's open and we can reverse these. First height, then width. It might be the exact opposite effect that I want. I always forget which way it goes.</span></p>
      <p><span data-start="00:19:27.000" data-end="00:19:47.000" data-start-seconds="1167">Yes. Now when it opens, it's first height then width but when it closes it's first width then height. Which is what we wanted. That's how you can have a Lightbox effect without any lines of JavaScript or even no CSS animations.</span></p>
      <p><span data-start="00:19:47.000" data-end="00:20:09.000" data-start-seconds="1187">Browser support for transitions is pretty good if you ignore IE, but it's coming in IE10. I swear that browser is going to be released at some point. I've been saying this for ages, but I'm hoping at some point, they have to release it, right? It can't be in beta forever.</span></p>
      <p><span data-start="00:20:09.000" data-end="00:20:32.000" data-start-seconds="1209">Our fourth secret for today. We have a lined paper here. It has these very common lines that follow the text. What's good about this demo is that you can change the font size, the way it's implemented, which we're going to see next. But let me show you how the end result works before I show you how to do it.</span></p>
      <p><span data-start="00:20:32.000" data-end="00:21:09.000" data-start-seconds="1232">So if you change the font size, you can see how the lines just follow whatever font size you pick. Another benefit of this technique is if you vary the padding, the lines also follow the text that it doesn't break. Practically the only thing that breaks it is if you change the line height, which I can show you. In this case, it will break.</span></p>
      <p><span data-start="00:21:09.000" data-end="00:21:23.000" data-start-seconds="1269">But things can't be infinitely flexible. The more flexible they are, the more they allow you to make edits without having to change multiple values, the better.</span></p>
      <p><span data-start="00:21:23.000" data-end="00:21:49.000" data-start-seconds="1283">So how do you do this? We use a background which is a linear gradient, which has black...we'll make the lines black at first just to see them better. Back at one pixel and then transparent at one pixel. We need this to be a background image because we want to keep our background color.</span></p>
      <p><span data-start="00:21:49.000" data-end="00:22:17.000" data-start-seconds="1309">So right now, you can't see this, because it's just one line somewhere and the rest of it's just transparent. So we need to adjust the background size. Each one of those tiles will need to be the same height as our lines. Our lines have a line height of 1.2, so we make it 1.2 ems.</span></p>
      <p><span data-start="00:22:17.000" data-end="00:23:05.000" data-start-seconds="1337">If we adjust the background position as well...Let's make it something like this. Seven. That looks OK. If we adjust the font size, it works. It does follow the text. If we adjust the padding, though, it will break. That's no good. Can we fix this? We can, by using the background origin property, with a value of content box. Which means the background position starts where the content starts.</span></p>
      <p><span data-start="00:23:05.000" data-end="00:23:23.000" data-start-seconds="1385">Not where the border starts. Of course, since it starts from a different place now, we need to adjust our background position as well. Let's make it something like 0.2. Yeah, that looks OK.</span></p>
      <p><span data-start="00:23:23.000" data-end="00:23:34.000" data-start-seconds="1403">Now, we can adjust the padding as much as we want, and the lines just follow the text.</span></p>
      <p><span data-start="00:23:34.000" data-end="00:24:12.000" data-start-seconds="1414">We can take advantage of the same trick to highlight...to do zebra striping on lines. We know how to do zebra striping on tables, or anything that uses different elements, but we don't have pseudo-elements or anything for lines. So if we want to apply alternate coloring, like each line having a different...like the first line having a white background, the second line having a beige background, the third line having a white background again. We can do that with a variation of this technique.</span></p>
      <p><span data-start="00:24:12.000" data-end="00:24:50.000" data-start-seconds="1452">I'm going to use white and beige, and I hope it's visible on the projector. Otherwise, I'll use even worse colors. Let me make it a bit smaller first. The width doesn't matter, that's why I'm using a hundred percent. You can use anything. As long as it's not zero, it doesn't matter. What matters is that the height of the background is twice your line height. So if your line height is 1.5, the height of the background should be three ems. Yeah, I think that's visible.</span></p>
      <p><span data-start="00:24:50.000" data-end="00:25:18.000" data-start-seconds="1490">So we will need to make it start from the content edge as well. Otherwise, you can see now that they're a bit mismatched. So we use background origin again -- content box. You can see now that they follow the size of the code quite nicely. We can even adjust the font size, and they still follow the code quite nicely.</span></p>
      <p><span data-start="00:25:18.000" data-end="00:25:35.000" data-start-seconds="1518">The only time where you will need to change the numbers here is if you adjust the line height. Basically, the tricky thing here is gradients. Browser support for these is pretty good, except IE.</span></p>
      <p><span data-start="00:25:35.000" data-end="00:26:05.000" data-start-seconds="1535">They're coming in IE10. They're not going to be prefixed in IE10. So if you write code with gradients today, you do not need to use the MS prefix. Because there was never a stable browser that used the MS preface in gradients, transitions, animations. They prefixed those before they released the browser. So it's completely pointless to use MS in those features.</span></p>
      <p><span data-start="00:26:05.000" data-end="00:26:38.000" data-start-seconds="1565">Let's move on to the fifth secret for today. Here we have a container with this kind of rhombus shape. You might be thinking, &quot;That's easy to do. I can just use pseudo-elements and transform the pseudo-element.&quot; However, you can't animate the pseudo-element, not in any browser except Firefox, at least. So how can we do this?</span></p>
      <p><span data-start="00:26:38.000" data-end="00:26:59.000" data-start-seconds="1598">Remember, we can't use pseudo-elements for this. Of course, we could use an HTML element that does the same thing as the pseudo-element, but in this case, if we have two nested elements, it's even easier to do. And the benefit of this technique is that when the content adjusts, this one adjusts too.</span></p>
      <p><span data-start="00:26:59.000" data-end="00:27:28.000" data-start-seconds="1619">So let's move to our starting point. You can see the HTML here. This is the HTML we're going to be styling. The trick here is, we use a regular rotate transform on the element, and then we apply the opposite transform on the element, or on the element that's inside.</span></p>
      <p><span data-start="00:27:28.000" data-end="00:28:01.000" data-start-seconds="1648">So the outside element will have 45, the inner element will have minus 45. Of course, you can reverse these, it doesn't matter. It produces the same effect practically, and you can even use other kinds of transforms. As long as you reverse them on the inside element, you can even combine multiple of these. But it becomes a bit more complex after which to cancel them.</span></p>
      <p><span data-start="00:28:01.000" data-end="00:28:37.000" data-start-seconds="1681">David Storey used this in a very clever way, this kind of trick, to create a sliding panel. I think this is a very cool demo. So basically, these elements have a skew transform which is cancelled on the inner elements. So the images themselves are normal. They're not skewed, but their containers are skewed and they have overflow hidden, so we see this diagonal line between them. You can find this demo in this link, this dabblet.</span></p>
      <p><span data-start="00:28:37.000" data-end="00:28:51.000" data-start-seconds="1717">The caveat is that it requires an extra HTML element. However, since that extra HTML element is not an empty element, but it's actually a wrapper, you might already have something like this in your markup.</span></p>
      <p><span data-start="00:28:51.000" data-end="00:29:20.000" data-start-seconds="1731">This technique is supported by every browser that supports CSS transforms and the browser support for that is pretty much every browser in use today except IE. There is a matrix filter that you can use in IE to emulate transforms. There are tools for this. I'm not going to go into much depth about that in this talk because I don't like IE filters, but you can look it up.</span></p>
      <p><span data-start="00:29:20.000" data-end="00:29:49.000" data-start-seconds="1760">The sixth secret for today...A while ago, Chris Coyier came to me and we were having this discussion about how can we move an element in a circular path. As you probably know, in CSS animations, you can't animate over a path like you can in SVG, in SMIL animations. You can only have key frames.</span></p>
      <p><span data-start="00:29:49.000" data-end="00:30:16.000" data-start-seconds="1789">We were wondering, &quot;How can we do something like this with CSS animation?&quot; And we decided that probably our best bet was to use multiple key frames that are like over a circle, and it would move linearly between the two key frames.</span></p>
      <p><span data-start="00:30:16.000" data-end="00:30:35.000" data-start-seconds="1816">However, a while after which I realized that there was a better way to do this. And it's based on the tweak I showed you before, canceling transforms. However, in this case, the transforms we're going to cancel are going to have different transform origins. So the movement you'll see will be the result of that transform origin.</span></p>
      <p><span data-start="00:30:35.000" data-end="00:30:53.000" data-start-seconds="1835">Let's see that in action. Here we have this smiley face. This is its HTML. It has a class of smile. Let's apply this simple animation to it. It's just a very simple animation from 0 degrees to 360. Nothing fancy.</span></p>
      <p><span data-start="00:30:53.000" data-end="00:31:14.000" data-start-seconds="1853">So, let's try to apply it. Let's turn it over six seconds, and let's have infinite so that it doesn't stop moving. Also, let's have linear, so that it doesn't accelerate, but it moves linearly. As you can see, it now moves around itself. We don't want that.</span></p>
      <p><span data-start="00:31:14.000" data-end="00:31:28.000" data-start-seconds="1874">Let's apply the transform origin to it that's outside the elements, so that it moves in a circle. We don't care about the horizontal value much. We do care about the vertical value, so let's provide something close to our radius.</span></p>
      <p><span data-start="00:31:28.000" data-end="00:32:03.000" data-start-seconds="1888">You can see now it kind of starts moving like a circle. It's a bit misplaced, so let's remove this, and the radius is also not big enough, so let's adjust it. And this kind of looks like the effect we wanted, but the problem is, the smiley is also rotating. It's not just moving, it's just rotating around the center.</span></p>
      <p><span data-start="00:32:03.000" data-end="00:32:34.000" data-start-seconds="1923">Like we discussed before, if we want to cancel transforms, we can't do it...Well, we can do it with one element, but it's more complicated. We'll see how afterwards. The simplest way to do the movement we want is to use a second wrapper element around the image, which we're going to do here. This already has the element around it. It's a div with a class of smile, and an image inside it.</span></p>
      <p><span data-start="00:32:34.000" data-end="00:33:04.000" data-start-seconds="1954">We will make a copy of this animation which will be reversed anti-clockwise. It will go from 360 to 0. We will apply it to the inner element so that the rotations cancel each other. Let's copy this one so that they're exactly the same and just change the animation.</span></p>
      <p><span data-start="00:33:04.000" data-end="00:33:45.000" data-start-seconds="1984">As you can see, this is the effect we wanted. Our code is a bit sloppy and repetitive, but this is the effect we wanted, and we can even combine the animation in both of these selectors so that if we want to change the duration or something, we can just change it in one place. I'm very obsessed about this, I want to keep my code as dry as possible. Dry means don't repeat yourself. If I want to change a value, I always strive to make my code to be able to change my code, but with the least number of edits, ideally one.</span></p>
      <p><span data-start="00:33:45.000" data-end="00:34:21.000" data-start-seconds="2025">So, this is the effect we wanted. We still have two animations that are basically exactly the same, with the difference that the second one is reversed. It would be nice if we could reverse an animation, and we can actually do that. But let's see browser support for animations first. Sorry if that's a bit of a shock, they're not supported by IE9. They're coming in IE10, and in every other browser, you can pretty much depend on support by now.</span></p>
      <p><span data-start="00:34:21.000" data-end="00:35:05.000" data-start-seconds="2061">So, the way we can reduce our code to one animation is if we use animation direction reverse here. This practically takes this animation and reverses every iteration, so we get a copy of the first animation that's reversed, which saves us the extra animation we were using. Unfortunately, this is something you'll be able to do in the future and not now, because its support is not very good. It's much worse than animations in general. Firefox recently supported it, Chrome also kind of recently supported it, and IE10 supports it, but it's not even released yet.</span></p>
      <p><span data-start="00:35:05.000" data-end="00:35:27.000" data-start-seconds="2105">However, you shouldn't be disappointed, because you can do the exact same effect with just one element, no wrappers. Let me show you. No wrappers, just one element, and just one animation. No weird stuff, this is supported by every browser that supports animations.</span></p>
      <p><span data-start="00:35:27.000" data-end="00:35:56.000" data-start-seconds="2127">How is this done? It took me months to actually understand how this works. I didn't come up with this code. A guy that edits the transform spec did. When I posted to the mailing list to ask that it would be nice if we could use multiple transform origins for multiple transforms on the same element, and he told me that you can already do this in this way. And he gave me this solution, which is actually even less code than any of the previous ones.</span></p>
      <p><span data-start="00:35:56.000" data-end="00:36:36.000" data-start-seconds="2156">So basically, the way this works is every frame has a rotate transform, and every frame is some value between 0 and 360, goes from 0 to 360. Then the coordinate system moves by 330, and then the opposite rotation is applied. It's always the opposite. In every frame, you have the same degrees here and the opposite degrees here, so you don't see any rotation because both of the rotations cancel each other. But you see their movement, you see the translate.</span></p>
      <p><span data-start="00:36:36.000" data-end="00:37:19.000" data-start-seconds="2196">It might help if I show you how each frame of that works, instead of the animation. Our first frame would look like this, and it would be somewhere here. Actually, that would be our last frame. At some point previously, it would be like this, and at some point even before, it would be like this. Do you see how the rotate transforms cancel each other so you don't see any rotation? But you see the effect of this.</span></p>
      <p><span data-start="00:37:19.000" data-end="00:37:58.000" data-start-seconds="2239">What helps in understanding this is that transforms are not applied...The order of transforms matters. Each transform doesn't just rotate the element, it actually changes the coordinate system for every other transform that you apply after that. So basically, this rotation doesn't just rotate our element, it rotates our coordinate system. So, this one moves the element in that rotation in the rotation that this one caused, which is why it doesn't move in the same place all the time, but it moves depending on where this transform took it.</span></p>
      <p><span data-start="00:37:58.000" data-end="00:38:21.000" data-start-seconds="2278">I need to credit the guy that came up with this. He's much smarter than I am. He now edits the spec, so that kind of explains a lot. [applause]</span></p>
      <p><span data-start="00:38:21.000" data-end="00:38:47.000" data-start-seconds="2301">Thank you. So, the seventh secret for today. I'm sure pretty much all of you...Well, many of you have done something like this. Don't bother with reading the text, it's not relevant. You've used a pseudo-element to make a speech bubble. Don't worry. This secret is not about how you can use pseudo-elements to make speech bubbles. I assume most of you have heard about this.</span></p>
      <p><span data-start="00:38:47.000" data-end="00:39:24.000" data-start-seconds="2327">This is about applying shadows to these speech bubbles. Because it always bothered me how if I tried to apply a shadow to that speech bubble, that's what I got. And the more intense the shadow, the worse the effect, because this thing doesn't have any shadow, and it looks unnatural. Sometimes you can get away with it, especially if your pointer is at the top of the element and your shadow is at the bottom, so it wouldn't have much of a shadow anyway. But in most cases, it makes things less natural.</span></p>
      <p><span data-start="00:39:24.000" data-end="00:40:02.000" data-start-seconds="2364">So, we can solve this with box shadow, but there's another thing that's coming. I should warn you, browser support at this point is not very good. It's called CSS filter effects. Forget IE filters, this is not related to them in any way, it's something entirely different. It's related to SVG, and what the filter property will do is that it allows us to apply SVG filters on HTML elements with syntax that's just a few simple functions like this.</span></p>
      <p><span data-start="00:40:02.000" data-end="00:40:38.000" data-start-seconds="2402">This is basically an SVG filter, and we didn't write a single line of SVG. It's just this function that does everything behind the scenes. As you can see, the shadow now follows every transparent region of the element, including this pointer. The difference is even more prominent in things like this where you have, like, a dotted border. And if you try to apply a shadow, the result is kind of terrible. That's not a shadow for our dotted border.</span></p>
      <p><span data-start="00:40:38.000" data-end="00:41:12.000" data-start-seconds="2438">So, apparently browsers do this because it's easier and faster, but if we want to actually cast a shadow to the transparent regions of this, we can again use filters same way we did before. You can see how the dotted border is shadowed as well, which is what we wanted for the border. The text looks kind of terrible.</span></p>
      <p><span data-start="00:41:12.000" data-end="00:41:34.000" data-start-seconds="2472">So, this is one of these tradeoffs that you should keep in mind. Sometimes having a real shadow might not be the best idea. Sometimes you might want to use box shadow even if CSS filter effects start to be supported very widely.</span></p>
      <p><span data-start="00:41:34.000" data-end="00:41:51.000" data-start-seconds="2494">Right now, browser support is only Chrome, but you can have the same effect in Firefox by using SVG, because Firefox allowed us to use SVG filters and HTML content for ages, for years.</span></p>
      <p><span data-start="00:41:51.000" data-end="00:42:15.000" data-start-seconds="2511">I think Mozilla was the first one that thought about this. Of course, you can't use the nice syntax that allows you to change values in your code, you have to hard code the values in an SVG file and reference it. You probably can use an inline SVG as well if you want to reduce HTTP requests at the cost of polluting your markup. I wouldn't do it.</span></p>
      <p><span data-start="00:42:15.000" data-end="00:42:39.000" data-start-seconds="2535">The way I would use it is, you could have one SVG with a shadow that's kind of close to the one you want to use, and then adjust the values for browsers that actually support these functions. Because otherwise, you would have to make tons of SVG files and it's not really worth it.</span></p>
      <p><span data-start="00:42:39.000" data-end="00:42:56.000" data-start-seconds="2559">For example, in this presentation, I'm using blur filters, and I use different values for the blur in every different thing. But for Firefox, I just use one SVG file and one blur value.</span></p>
      <p><span data-start="00:42:56.000" data-end="00:43:32.000" data-start-seconds="2576">Of course, what should be mentioned is that filter effects are one of these things that degrade very gracefully. You just don't get the effect. That's why I'm very excited about them, because it's one of those things you can use today. Even though the browser support is shitty, you can use them today because nothing will break in browsers that don't support them. They just won't be there. It's not like some cool layout stuff which in browsers that don't support them would completely break the layout.</span></p>
      <p><span data-start="00:43:32.000" data-end="00:44:08.000" data-start-seconds="2612">So, the eighth secret for today is also about filters. Can you see how I'm doing this blur behind the eight? I was also doing it in the title of this talk. It makes the text easier to read, and then just having a semi-transparent white background. Here we just have the semi-transparent background. In this overlay, we have applied some other effects like shadows and stuff like that, which I guess most of you already know how to do. But the text is not very readable because we have this busy image behind it.</span></p>
      <p><span data-start="00:44:08.000" data-end="00:44:37.000" data-start-seconds="2648">Here's the HTML we're going to be styling. It has a class of glass pane, just a div, nothing else. So, our first thought would be to do something like this. Filter, blur, five pixels, no go. That's not exactly what we would expect. Or, maybe you would expect it, but it's definitely not what we want.</span></p>
      <p><span data-start="00:44:37.000" data-end="00:45:04.000" data-start-seconds="2677">So, what can we do here? It's a bit hacky, but the way I did it in my presentation is, I create a pseudo-element with the same background as what's behind, and I style the pseudo-element. So, let's do something like this.</span></p>
      <p><span data-start="00:45:04.000" data-end="00:45:33.000" data-start-seconds="2704">We need content empty string because otherwise the pseudo-element doesn't get created. Position absolute. Of course, our glass pane will need to have position relative. We give offsets of zero so that it matches exactly the same size as our main element glass pane.</span></p>
      <p><span data-start="00:45:33.000" data-end="00:45:55.000" data-start-seconds="2733">Let's give it a background of red to see what we're doing. See, it's on top of the text, which we don't want. We want it to be behind the text, because the whole thing is about making it easier to read, not more difficult. So, we give it a z-index of minus 1, and that brings the pseudo-element behind its parent.</span></p>
      <p><span data-start="00:45:55.000" data-end="00:46:35.000" data-start-seconds="2755">We don't like these corners here. They don't follow the border radius of the parent. In Firefox, if you apply overflow hidden to the parent, it clips the children according to the border radius. In WebKit that doesn't happen. I'm using Chrome right now, so for the other browsers that aren't Firefox you will need to use border radius inherit. Do not respecify your border radius, because if you do, you would have to change it twice if you want to change the border radius of the parent. Always avoid creating things like that that will make you need to change things twice.</span></p>
      <p><span data-start="00:46:35.000" data-end="00:47:16.000" data-start-seconds="2795">So, we might think that at this point we can do filter blur, but we're still not there yet. Because as you can see, it doesn't blur the background, it blurs the element itself. So, we still have some work here. We will need to give it the same background as what's behind, which is called cover.jpg. Same background position, fixed so that the background positioning area is the same, and same background size. In this case, I'm using cover.</span></p>
      <p><span data-start="00:47:16.000" data-end="00:48:01.000" data-start-seconds="2836">So, as you can see, it now matches the background perfectly, and I can even resize this if I can grab it with this huge cursor. Nope. Well, maybe I can apply some CSS to show you that even if I resize this...Like, let's make it 900 pixels maybe. Too much. 800. And let's give it a height of 100 pixels. And you can see that no matter how I resize it, it still matches the background, so it's quite bulletproof in that sense.</span></p>
      <p><span data-start="00:48:01.000" data-end="00:48:33.000" data-start-seconds="2881">Now, finally after all this, we can blur, and we can even blur a lot to get the most out of the work we did. Nah, I don't like this, let's do it 10. So, there it is. Hopefully in the future, we'll have a better way to do this kind of thing so that we won't have to duplicate backgrounds and things like that.</span></p>
      <p><span data-start="00:48:33.000" data-end="00:48:58.000" data-start-seconds="2913">Of course, the caveat is the messy background positioning, even worse when there are other elements behind. Let's just say it's not possible when there are other elements behind and not just the background image. It is actually possible, but it involves cloning these elements and positioning them behind and blurring that it's a mess. Just don't do it.</span></p>
      <p><span data-start="00:48:58.000" data-end="00:49:16.000" data-start-seconds="2938">Another cool thing you can do with blur filters is this that this guy made, Hakim El Hattab I think is his name. He's using blur filter to do this kind of effect. I'm not sure what's the difference between these two, but it's a very cool effect, I think, and one that degrades gracefully. If it's not blurred, it's still perfectly usable.</span></p>
      <p><span data-start="00:49:16.000" data-end="00:49:34.000" data-start-seconds="2956">CSS filters have the same browser support like we mentioned before, but we can also apply the same workaround for Firefox, and in this case the SVG needed is smaller. And here it will be the parameter of the blur.</span></p>
      <p><span data-start="00:49:34.000" data-end="00:49:53.000" data-start-seconds="2974">So, for the ninth secret for today, I'm going to switch to Firefox, because what I'm going to show you is not supported by Chrome yet. It is supported by Safari, though, but I didn't want to use WebKit for everything.</span></p>
      <p><span data-start="00:49:53.000" data-end="00:50:41.000" data-start-seconds="2993">So, here we have this text which is justified, has text align justify. I'm sure every one of you that designs pages probably avoids text align justify like the plague, and we can see why here. It creates these ugly blank rivers of text that make it really hard to read. And the reason for that is, unlike print, we don't have hyphenation in HTML CSS. However, in some browsers we do, just hyphens auto. [applause]</span></p>
      <p><span data-start="00:50:41.000" data-end="00:51:17.000" data-start-seconds="3041">Thank you. So, in some browsers we can just use hyphens auto. It's part of CSS text module level three, and of course you can use hyphens none to cancel it, but why would you want to do that? Perhaps for code or something. And browser support for this is not great. It's supported by Safari, including Mobile Safari, Firefox 6, and IE10, what's the appropriate prefix. Opera and Chrome don't support it yet.</span></p>
      <p><span data-start="00:51:17.000" data-end="00:51:35.000" data-start-seconds="3077">But one of the good things about this is also that it degrades very gracefully. Well, depending on how much of a typography geek you are, maybe don't consider just having justified text without hyphenation, maybe you don't consider that graceful. But I think the text is still readable and it looks nice on these three browsers.</span></p>
      <p><span data-start="00:51:35.000" data-end="00:51:57.000" data-start-seconds="3095">The last secret that I wanted to tell you has to do with animation. So, assume you have an image with 10 frames, it's called frames.png. The dimensions are 500x72, and you have this div that has the same size as one frame. I can even show you the dimensions of that div.</span></p>
      <p><span data-start="00:51:57.000" data-end="00:53:02.000" data-start-seconds="3117">All right, I haven't showed it yet. Well, there it is, but let's remove the outline for the rest. You can see that we can move this by 50 pixels every time, and see the next frame. We want to make a frame by frame animation here. If we do something like this, we only need a &quot;to&quot; keyframe. The &quot;from&quot; will be automatically generated by the state. Let's change background-position.</span></p>
      <p><span data-start="00:53:02.000" data-end="00:53:16.000" data-start-seconds="3182">Let's apply this animation. I haven't given it a name. Right. I'm a little nervous because I'm going overtime.</span></p>
      <p><span data-start="00:53:16.000" data-end="00:53:24.000" data-start-seconds="3196">Let's give it an infinite value so that it keeps repeating, that's not what we wanted. We wanted to only see one frame at a time.</span></p>
      <p><span data-start="00:53:24.000" data-end="00:53:54.000" data-start-seconds="3204">There is this timing function called Steps and you can provide the number of steps. This causes you to have that number of steps without having any actual animation, any actual transition. It's not smooth, it's just these 10 steps. We should make it shorter and that's our frame by frame animation. [applause]</span></p>
      <p><span data-start="00:53:54.000" data-end="00:54:10.000" data-start-seconds="3234">Of course I should credit Simurai. I think he's actually here. He came up with this. Steps is supported by these browsers. Almost every browser that supports animations. Opera was a little late to this.</span></p>
      <p><span data-start="00:54:10.000" data-end="00:54:40.000" data-start-seconds="3250">Another thing I came up with is using Steps to create a step by step animation. The basic idea is this -- you give it a width, you enlarge it one step at a time, you can use the CH unit for that, which has this browser support. You can provide a full back in ems, which is here. And the caveat of that is the character count is hard coded and it doesn't work with multiple lines, so it's only like for headings and things like that.</span></p>
      <p><span data-start="00:54:40.000" data-end="00:54:48.000" data-start-seconds="3280">This is a total browser support. I think it's quite interesting because IE, including 10, supports everything we presented. I guess we don't have time for questions. Do we?</span></p>
      <p><span data-start="00:54:48.000" data-end="00:54:51.000" data-start-seconds="3288">No.[laughter]</span></p>
      <p><span data-start="00:54:51.000" data-end="00:54:53.000" data-start-seconds="3291">OK. [applause]</span></p>
      <p><span data-start="00:54:53.000" data-end="00:54:56.000" data-start-seconds="3293">Well, question everything on Twitter. Thank you.[applause]</span></p>
     </div>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>1</strong> comment</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <h3 class="extra">Comments</h3>
     <dl id="comments" class="reacties">
      <dt id="comment-109"><a href="#comment-109" class="number" id="latest-comment">1</a> <a href="http://tahirtaous.com">Tahir Taous</a> on 17-03-2015 at 05:20 o'clock:</dt>
       <dd>Learning new tricks and secrets about CSS is always a good practice. Thanks you very much for this video. I am going to buy your CSS Secrets book soon.</dd>
     </dl>
     <form method="post" action="/congres/2012/sessions/more-css-secrets-lea-verou.md" id="comment">
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
