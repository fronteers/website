<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>The State of HTML5 Video by Jeroen Wijering · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p754">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>The State of HTML5 Video by Jeroen Wijering</h2>
     <video width="480" height="270" controls>
      <source src="/_downloads/2012/jeroen-wijering-the-state-of-html5-video.webm" type="video/webm">
      <source src="/_downloads/2012/jeroen-wijering-the-state-of-html5-video.mp4" type="video/mp4">
      <track src="/congres/2012/sessions/the-state-of-html5-video-jeroen-wijering.vtt" default>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2012/jeroen-wijering-the-state-of-html5-video.webm">download the video</a> (or the alternatives: <a href="/_downloads/2012/jeroen-wijering-the-state-of-html5-video.mp4">1</a>) and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="https://vimeo.com/53317252">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2012/jeroen-wijering-the-state-of-html5-video.webm">Download video</a> (WebM, 99MB)</li>
      <li><a href="/_downloads/2012/jeroen-wijering-the-state-of-html5-video.mp3">Download audio</a> (MP3, 41MB)</li>
     </ul>
     <h3>Transcript</h3>
     <div class="transcript">
      <p><span data-start="00:00:12.000" data-end="00:00:30.000" data-start-seconds="12">I'm the original developer of JW Player. No code writing anymore at this point unfortunately. What's interesting is the player actually started out much like David was discussing in the previous session.</span></p>
      <p><span data-start="00:00:30.000" data-end="00:01:00.000" data-start-seconds="30">I wrote something, put it on the Internet. More and more people started to use it. At this point, I thought, &quot;Well, let's charge some money for it.&quot; This is basically the first version of the JW Player. YouTube was one of the first sites that started using the video player as they started their whole video sharing theme.</span></p>
      <p><span data-start="00:01:00.000" data-end="00:01:15.000" data-start-seconds="60">I would say to David one thing to not do when the next YouTube comes in is to charge them a $15 license and be very happy about it. [laughter]</span></p>
      <p><span data-start="00:01:15.000" data-end="00:01:35.000" data-start-seconds="75">Because, in the case of YouTube, a tiny fraction of the company or something else would have been more interesting. Nonetheless, the player did very well. There were tons of more and more websites that started using the video player.</span></p>
      <p><span data-start="00:01:35.000" data-end="00:02:04.000" data-start-seconds="95">At present over a million websites are using JW Player. Tons of small websites, tons of small company websites, blogs, and also big names like the ones listed here. For example, the White House, so Obama is on JW Player. We'll see what happens next year.</span></p>
      <p><span data-start="00:02:04.000" data-end="00:02:30.000" data-start-seconds="124">Then currently we're working on version 6, first version which will have HTML5 as the default set-up. So what we used to do with the previous player, version 5, is that HTML5 was used as the fallback. So everything on desktop was Flash. On mobile devices we used HTML5 because there was no Flash.</span></p>
      <p><span data-start="00:02:30.000" data-end="00:02:50.000" data-start-seconds="150">Now we're actually switching around because we think that HTML5 video has come at a point where it's actually better for the more use cases than Flash for presenting video. This is a little mark-up.</span></p>
      <p><span data-start="00:02:50.000" data-end="00:03:26.000" data-start-seconds="170">I think one of the things a player like JW Player is very known for is the depth of functionality around things that you don't get when you just drop a video in a video tag, things like sharing related functionality, multiple quality levels, play lists, advertising support. So even with the brave new world of HTML5 video, there will always be room for framework like JW Player.</span></p>
      <p><span data-start="00:03:26.000" data-end="00:03:50.000" data-start-seconds="206">We are here to talk about HTML5. So why HTML5? I think at first there was the iPad where it was clear that Flash would not be going on there. So a lot of people started to talk seriously about or treat the concept of HTML5 video seriously.</span></p>
      <p><span data-start="00:03:50.000" data-end="00:04:15.000" data-start-seconds="230">HTML5 video has been around for a while, for a couple of years. Opera started it, I think, back in 07 or so. Anne will be able to tell more about that later. What you now also see is Android, so the new Android version don't have flash anymore. HTML5 is really the way to push your video to mobile.</span></p>
      <p><span data-start="00:04:15.000" data-end="00:04:50.000" data-start-seconds="255">The second reason for HTML5 over a Flash or a Silverlight is it's really easy to use. You drop a video tag on your page. You set source video. You set a poster image, and it's done. The browser will give you some UI. The video will play. Everything is being taken care of, and the same goes for mobile devices. So with the same single line of code your video will work on every iOS, Android, Windows phone, etc.</span></p>
      <p><span data-start="00:04:50.000" data-end="00:05:10.000" data-start-seconds="290">Overall there is a bigger reason for HTML5 video, and that really is for video as this &quot;First Class Citizen&quot; on the Internet. You have images which are always inline and you can see like view source to see the image and download images, play with them.</span></p>
      <p><span data-start="00:05:10.000" data-end="00:05:34.000" data-start-seconds="310">There has always been text on the Internet which you can use, modify, adapt, etc. But video has always been locked up. When your video is on the page itself instead of locked up in some sort of player or plug-in, you'll see that a lot of things will suddenly start to become much easier with video.</span></p>
      <p><span data-start="00:05:34.000" data-end="00:05:59.000" data-start-seconds="334">Accessibility is a big topic, not only for humans -- for humans, it's very important -- but also for robots, so search engines understanding better what is in video. Because it's part of the web stack it's also part of the things that you all know, HTML, CSS, JavaScript. So it will be very easy to manipulate video.</span></p>
      <p><span data-start="00:05:59.000" data-end="00:06:20.000" data-start-seconds="359">There are tons of very cool HTML5 demos with video, like exploding video or building small video editors online. Because it's all standardized, it's faster, it's more secure, it's more robust if you use HTTP and HTML.</span></p>
      <p><span data-start="00:06:20.000" data-end="00:06:31.000" data-start-seconds="380">There are tons of companies that will work on that same stack instead of one company. Then there is a glaring security hole and we'll have to wait for three months until that gets fixed.</span></p>
      <p><span data-start="00:06:31.000" data-end="00:07:00.000" data-start-seconds="391">So really what you see in terms of video, there's this evolution in a couple of years from separate video players, like the Real Player and Windows Media Player where you had the nail-sized images to Flash and Silverlight where video is already on this page but still in this separate container to HTML5 where the video really is part of the HTML.</span></p>
      <p><span data-start="00:07:00.000" data-end="00:07:22.000" data-start-seconds="420">Those dates are slightly arbitrary. The 2015 date is something that maybe we will be there faster, maybe we'll be there slower. It's hard to tell when the last people will move over. This is what we're currently tracking.</span></p>
      <p><span data-start="00:07:22.000" data-end="00:07:38.000" data-start-seconds="442">So right now, we see about 80 percent of the world, so 80 percent of the page views worldwide to be precise, we used Statcounter statistics, is able to watch an HTML5 video.</span></p>
      <p><span data-start="00:07:38.000" data-end="00:08:02.000" data-start-seconds="458">You can see this is kind of topping off a little bit. That's, in part, because the last people are always the slowest to move over and in part more and more mobile phones are actually being used but not all these mobile platforms are video ready.</span></p>
      <p><span data-start="00:08:02.000" data-end="00:08:28.000" data-start-seconds="482">So if you look at the desktop site, you'll see that Chrome and Firefox have had video for a while. We're good there. On the Internet Explorer side, you see that the 9 version which has HTML5 support is really overtaking the 8 version which does not have HTML5 support. So that's really a good trend.</span></p>
      <p><span data-start="00:08:28.000" data-end="00:08:50.000" data-start-seconds="508">Overall you see that mobile, where there's only HTML5 and no Flash, is growing actually fairly rapidly in the last couple of months according to the Statcounter. What's interesting here is that these guys do not include the iPad with mobile.</span></p>
      <p><span data-start="00:08:50.000" data-end="00:09:09.000" data-start-seconds="530">You could say if you include tablets with mobile then this version is actually coming up to like a 20 percent. On the mobile front, you have iOS, you have Android which are the big boxers that are HTML5 ready.</span></p>
      <p><span data-start="00:09:09.000" data-end="00:09:43.000" data-start-seconds="549">The red line is Opera, and it's mostly Opera mini so that's the Opera that renders the pages on the servers. That one does not currently have HTML5 video support. If they would release HTML5 video support that would get rolled out into not so smart phones, then you really have a big reach on the mobile front as well.</span></p>
      <p><span data-start="00:09:43.000" data-end="00:10:11.000" data-start-seconds="583">So something you probably all read a lot about is the problem around video codecs. Some of the browsers support the H.264 codec which is covered in patents but very, very widely used. Then there's the WebM codec which is the previous onto VP8 codec which was bought by Google and then open sourced.</span></p>
      <p><span data-start="00:10:11.000" data-end="00:10:43.000" data-start-seconds="611">At this point, it's still hard to tell what codec to use. You really need both in order to get maximum reach with HTML5 video. However, this on the left is what Mozilla's CTO recently said. We really need H.264 at first for Mozilla and for Firefox mobile and for Boot to Gecko, their mobile OS.</span></p>
      <p><span data-start="00:10:43.000" data-end="00:11:15.000" data-start-seconds="643">But there is also a lot of problems on the desktop side where if you look at big encoding firms, they release stats around which codecs people are encoding in. I see that like 95 percent is just MP4. Then there is some WebM, but there are also other formats like FLV and Windows Media in there. So like H.264, the video codec in MP4 is really leading.</span></p>
      <p><span data-start="00:11:15.000" data-end="00:11:39.000" data-start-seconds="675">We've heard for a long time now that Chrome would drop H.264 support which would skew balance in favor of WebM, but that announcement has been made a year and a half ago and nothing has happened so far.</span></p>
      <p><span data-start="00:11:39.000" data-end="00:11:58.000" data-start-seconds="699">So something that is very interesting and only released recently to HTML5 is the ability to push full screen video. Actually this slide presentation uses the same feature to blow up the slides full screen.</span></p>
      <p><span data-start="00:11:58.000" data-end="00:12:12.000" data-start-seconds="718">That is great because then you really have that cinema experience for the videos and the TV experience. I think it's very important for online video to also be able to have like a lean back mode.</span></p>
      <p><span data-start="00:12:12.000" data-end="00:12:38.000" data-start-seconds="732">This is how it looks in Chrome. Other browsers have similar messages where they say, &quot;Hey, you just jumped full screen&quot; to prevent like hostile takeovers or phishing. The only browser that has not committed to the full screen API yet is Internet Explorer. The new version of Internet Explorer 10 that is coming out does not have full screen.</span></p>
      <p><span data-start="00:12:38.000" data-end="00:12:57.000" data-start-seconds="758">You could simulate it because there is also no Chrome around the browser. The full browser screen is more or less full screen. It would be nice, however, if they would also implement this API which is W3C standard in progress.</span></p>
      <p><span data-start="00:12:57.000" data-end="00:13:26.000" data-start-seconds="777">Then the last thing, and this one I think is really exciting, is a new element that's part of HTML5. The element is called Track. It loads so-called VTT files, and I think this is really the first major innovation of HTML5 video over the likes of Flash and Silverlight.</span></p>
      <p><span data-start="00:13:26.000" data-end="00:13:49.000" data-start-seconds="806">Track is a new element supported by, today, Safari. Within the coming months probably Chrome 23, Internet Explorer 10, Opera 12.5. I'll have to ask Christian when Firefox will release this so we're complete.</span></p>
      <p><span data-start="00:13:49.000" data-end="00:14:25.000" data-start-seconds="829">What it does is it defines, for example, captions. It defines captions in a file format called VTT which is a very simple text format that contains queues with time stamps. So it will show this text at 10 seconds, show this text at 15 seconds, etc. This is really all there is to it. So from one second to 10 seconds, show that line of text. From 15 seconds to 20 seconds, show the other two lines of text.</span></p>
      <p><span data-start="00:14:25.000" data-end="00:14:55.000" data-start-seconds="865">What you can do with this is really standardize closed captioning which is a requirement in many countries for accessibility in video. You take the video. You make a script for the captions. You enter that in a VTT file. You drop that one in a track, and then accessible video.</span></p>
      <p><span data-start="00:14:55.000" data-end="00:15:17.000" data-start-seconds="895">Captions are not the only kind of text track that are supported out of the get go. You have subtitles which are similar to captions but for other languages not including the non spoken texts. You have audio descriptions, so really descriptions of parts of the video.</span></p>
      <p><span data-start="00:15:17.000" data-end="00:15:51.000" data-start-seconds="917">You have chapters. So if you have long videos, you can segment it up and make like chapters like a DVD. There is metadata, and that is really the one where you can put queues in that VTT file, listen to it with JavaScript, and then do whatever you want with it. For those I have a few demos.</span></p>
      <p><span data-start="00:15:51.000" data-end="00:16:17.000" data-start-seconds="951">So this one is just the captions. This is Chrome 23, Chrome Canary beta browser which has built in support. [video plays]</span></p>
      <p><span data-start="00:16:17.000" data-end="00:17:17.000" data-start-seconds="977">So if you have no audio you know what is going on in the video. That's the premise of captions. Chapter markers are in itself very simple. Browsers do not yet expose a UI for it. There's a lot of talk about it. Maybe through like little dots on a control bar until the point that there is really no UI for it. You can always write your own. For example, something like this where you can...[video plays]</span></p>
      <p><span data-start="00:17:17.000" data-end="00:17:24.000" data-start-seconds="1037">This page has a description track. [video plays]</span></p>
      <p><span data-start="00:17:24.000" data-end="00:17:46.000" data-start-seconds="1044">And it basically tells you what's going on. So if you have no video you can see what's going on. In this form, it's not as useful, but if you are using a screen reader, for example, this one, ChromeVox extension...</span></p>
      <p><span data-start="00:17:46.000" data-end="00:18:15.000" data-start-seconds="1066">[screenreader voice] Slide one of 42. Layout title the size of a cat. The scaly dragon widens its eyes. Blood oozes from the wound on one of its leathery, bat-like wings. Syntel cautiously holds out her hand, and the dragon sniffs her fingers. Later in her hovel Syntel cleans the wound. [end screenreader voice] </span></p>
      <p><span data-start="00:18:15.000" data-end="00:18:35.000" data-start-seconds="1095">So this way it becomes really easy to not only put closed captions on the Internet but also audio descriptions which have been, until right now, really a nightmare for just about any media company or media publisher.</span></p>
      <p><span data-start="00:18:35.000" data-end="00:19:12.000" data-start-seconds="1115">Then as to the metadata here, I have a few more exotic demos. This is probably known from YouTube where you can slide over the control bar and then actually see a thumbnail image. This is just a VTT file with a list of thumbnail images to show its current positions. A few lines of CSS are used to place those in certain positions on the control bar. So that way you know where you're searching to for your search engine.</span></p>
      <p><span data-start="00:19:12.000" data-end="00:19:39.000" data-start-seconds="1152">Page interaction, something that popcorn.js framework is very powerful in. It's also easy. With a few lines of code, you can hook up such things like time aligned artworks. So you go to another section...[video playing]</span></p>
      <p><span data-start="00:19:39.000" data-end="00:20:11.000" data-start-seconds="1179">Then all the data can, of course, be used by search engines to index not only what your video is about and not only scrape the stuff around the video but actually index the files and then understand what's going on inside the video. So we search for chicken. [video playing]</span></p>
      <p><span data-start="00:20:11.000" data-end="00:20:45.000" data-start-seconds="1211">And these are all things that really the standardization with HTML5 and the track element are making possible. It's all not rocket science but because everybody is doing it the same way, everybody can build upon it. Browsers can build upon it. Video players can build upon it. Search engines can build upon it.</span></p>
      <p><span data-start="00:20:45.000" data-end="00:21:04.000" data-start-seconds="1245">So the demos you saw can be found at http://longtailvideo.com/html5. Feel free to grab them, use the source code. You'll find that there's surprisingly little JavaScript required for each of those demos. It's literally just a few lines each.</span></p>
      <p><span data-start="00:21:04.000" data-end="00:21:40.000" data-start-seconds="1264">Then the other more interesting references are in here as well, http://gs.statcounter.com for the analytics. http://diveintohtml5.info/video.html is a great reading resource for the basics of HTML5 video. On our website at /HTML5 we update a quarterly report which tells you which features in which browsers are really used today. That's it. Thank you. [applause]</span></p>
      <p><span data-start="00:21:40.000" data-end="00:21:52.000" data-start-seconds="1300">All right, we have another very fast speaker, so we've got quite some time to talk through things and maybe you can show some demos later on as well if you wanted to. But come over for now.</span></p>
      <p><span data-start="00:21:52.000" data-end="00:22:04.000" data-start-seconds="1312">HTML5 video. It must be cool to go to your parents and say, &quot;Look, the Obama video is done with the stuff that I did.&quot;</span></p>
      <p><span data-start="00:22:04.000" data-end="00:22:26.000" data-start-seconds="1324">Yeah, they have no clue. It's really hard to explain the underwater stuff. What has helped a lot is if you right click on the video player it says &quot;JW Player&quot; and they get that. So now they right click on every video player and say, &quot;Ah, I just saw your video player on this and this website.&quot;</span></p>
      <p><span data-start="00:22:26.000" data-end="00:22:30.000" data-start-seconds="1346">You should put an Easter egg in to say like &quot;Hi Mom&quot; every fifth click or something.</span></p>
      <p><span data-start="00:22:30.000" data-end="00:22:33.000" data-start-seconds="1350">I should do that, yeah. Maybe the top right corner.</span></p>
      <p><span data-start="00:22:33.000" data-end="00:22:52.000" data-start-seconds="1353">Yeah, it's not bad. I liked when Google did the experimental HTML5 feature in YouTube and you right clicked it and you said &quot;save link as...&quot; it actually redirected you to the Rick Roll video.</span></p>
      <p><span data-start="00:22:52.000" data-end="00:22:53.000" data-start-seconds="1372">Yeah.</span></p>
      <p><span data-start="00:22:53.000" data-end="00:23:13.000" data-start-seconds="1373">Because that's still the biggest issue, isn't it? I mean, when I talk with Firefox OS in other talks that I have and I talk to people, everybody goes on like, &quot;OK, we would love to encode our video in HTML5, but how do we stop it from being downloaded?&quot; Is there anything being done like that? What ways are there?</span> <span data-start="00:23:13.000" data-end="00:23:25.000" data-start-seconds="1393">I mean, we all know there are glass shields because you can always do an HTTP sniffing or whatever. But what is the current state of that? And you having a commercial company as well, you probably have that request a lot as well.</span></p>
      <p><span data-start="00:23:25.000" data-end="00:23:47.000" data-start-seconds="1405">Yeah, yeah. There are a few things that hold up really widespread adoption of HTML5 video. I think just the core tech is there. If you have videos where things like copyright is not a problem, you should start using HTML5 because it's better than Flash now.</span></p>
      <p><span data-start="00:23:47.000" data-end="00:24:11.000" data-start-seconds="1427">But for media, there are a few issues. One is the fact actually that there are two codecs. If you pay 1.5 million a year to your CDN for storing and streaming your video, you don't want to start paying 2.5 million dollars because Firefox requires WebM.</span></p>
      <p><span data-start="00:24:11.000" data-end="00:24:29.000" data-start-seconds="1451">I think that is still a big hold-up for especially companies with larger libraries. There are companies that have terabytes or petabytes of data. Then in addition to that it's, indeed, the security that is a problem.</span></p>
      <p><span data-start="00:24:29.000" data-end="00:24:51.000" data-start-seconds="1469">It goes hand in hand with streaming because in with video usually the security is layered into the streaming protocol or the streaming model. Streaming is not really there in HTML5. Only Apple supports streaming on its iOS devices.</span></p>
      <p><span data-start="00:24:51.000" data-end="00:25:15.000" data-start-seconds="1491">It's a custom streaming model called HTTP Live Streaming that they released because they dropped Flash and then found out, &quot;Oh, shit, we need something for streaming fast.&quot; So they built it and released it and Apple now has something. But nobody else really has something.</span></p>
      <p><span data-start="00:25:15.000" data-end="00:25:42.000" data-start-seconds="1515">It's a big problem still. You see that Chrome and Firefox, now Google and Microsoft are working on two things, two extensions to video. One is called the Media Source API, which allows you to do streaming instead of loading a video in the video tag you give it little bits of video. Then the video tech will stitch them together.</span></p>
      <p><span data-start="00:25:42.000" data-end="00:26:11.000" data-start-seconds="1542">So you give it five seconds of video, which is more or less streaming but then over playing HTTP. Then the other is like the key, the encryption API. What they do there is allow encryption on the media file to be detected and then an external piece of software to be used to get the decryption key and decrypt the data.</span></p>
      <p><span data-start="00:26:11.000" data-end="00:26:35.000" data-start-seconds="1571">Then you're really entering a realm of is this just encryption? Is this DRM? Do we want this in open browsers? How would like a Firefox with its open source model, would they be able to do that? The key of encryption is that it's secret. The key of open source is that it's not secret.</span></p>
      <p><span data-start="00:26:35.000" data-end="00:27:04.000" data-start-seconds="1595">So that's really difficult. Then you can ask yourself on a higher level, how important is DRM? How many additional walls do you need? Do these additional walls help you or block you? We see that the entire music industry is off DRM now. The film industry is still on there.</span></p>
      <p><span data-start="00:27:04.000" data-end="00:27:23.000" data-start-seconds="1624">You see outside of the film industry, companies like YouTube or Vimeo or Revision3, big online streaming companies, they don't need it. They understand how the model works and that DRM is not required.</span></p>
      <p><span data-start="00:27:23.000" data-end="00:27:40.000" data-start-seconds="1643">It's more about downloading as well. When I see, for example, on YouTube, I'm constantly installing add-ons to download the videos and watch them off line when I'm on a train. I love what's on YouTube, but I cannot stream it when I'm somewhere offline.</span></p>
      <p><span data-start="00:27:40.000" data-end="00:27:59.000" data-start-seconds="1660">So a download button can be added by an add-on, but it's not part of the normal YouTube interface. But it would be interesting to have. Whereas streaming is, to me, the main solution for bad connectivity or slow connectivity like the HTTP streaming of iOS5 and 6 as well.</span></p>
      <p><span data-start="00:27:59.000" data-end="00:28:16.000" data-start-seconds="1679">It just recognizes how many packets you can get in the first five seconds or something and then gives you the video quality that is probably most appropriate for your device. That's something that's not in the HTML5 spec yet except for the source set thing that you said that you're working on.</span></p>
      <p><span data-start="00:28:16.000" data-end="00:28:37.000" data-start-seconds="1696">Yeah, indeed. It is something that is not in the HTML5 spec. The media source extension is something that is only available as a demo. It is available, but as a demo in Chrome which you have to enable by setting certain flags in the browser.</span></p>
      <p><span data-start="00:28:37.000" data-end="00:28:47.000" data-start-seconds="1717">Is that something that Flash had before? I mean, Flash was always the benefit of being able to give you different quality video rather than like giving you one stream that is just a fixed size.</span></p>
      <p><span data-start="00:28:47.000" data-end="00:28:53.000" data-start-seconds="1727">Yeah, this area is really a catch up with Flash area, yeah.</span></p>
      <p><span data-start="00:28:53.000" data-end="00:29:04.000" data-start-seconds="1733">And another big thing that Flash developers keep telling me is opacity like opacity on video content. You could do it with Canvas, but it's brutal.</span></p>
      <p><span data-start="00:29:04.000" data-end="00:29:54.000" data-start-seconds="1744">Yeah. I only see that with more or less sketchy websites where there is a woman walking in front of the page that you just want to read. Then you click next to the woman but still the video canvas and then the ad pops up. I think the opacity is...There is definitely interesting misuse cases, but the big use case is really for like ads with opacity. I think streaming is far, far more important than having an alpha channel, which is only supported by the old VP6 codec, and not with H.264 either. So it's really a marketing trick, a marketing tool.</span></p>
      <p><span data-start="00:29:54.000" data-end="00:30:04.000" data-start-seconds="1794">So one question is that WebVTT and track element are supported in JW6 and polyfill for IE and older browsers or just with the new ones?</span> <span data-start="00:30:04.000" data-end="00:30:18.000" data-start-seconds="1804">Right now we polyfill everything because older browsers do not support it yet. So those browser versions that I mentioned...Well, Safari 6 is out, but the other browser versions that I mentioned are not there yet.</span></p>
      <p><span data-start="00:30:18.000" data-end="00:30:48.000" data-start-seconds="1818">IE is at 9, Chrome is like at 21 or 22. Opera is working on track and maybe it will be in 12.5. They are now in 12.0. For now it's really full polyfill with the intention to move like detect the feature set. If the feature set is there, move to internal.</span></p>
      <p><span data-start="00:30:48.000" data-end="00:30:56.000" data-start-seconds="1848">Question here. I'd like to reposition my subtitles via CSS in case of self styled player. Is this possible by now?</span></p>
      <p><span data-start="00:30:56.000" data-end="00:30:58.000" data-start-seconds="1856">So styling of the controls?</span> <span data-start="00:30:58.000" data-end="00:31:00.000" data-start-seconds="1858">Yeah.</span></p>
      <p><span data-start="00:31:00.000" data-end="00:31:12.000" data-start-seconds="1860">No, no. There is no...so the video control bar at this point is something that is provided by the browser and cannot be styled yet.</span></p>
      <p><span data-start="00:31:12.000" data-end="00:31:13.000" data-start-seconds="1872">Shadow-DOM proposol though.</span></p>
      <p><span data-start="00:31:13.000" data-end="00:31:15.000" data-start-seconds="1873">proposal, though?</span> <span data-start="00:31:15.000" data-end="00:31:22.000" data-start-seconds="1875">There is a proposal, but right now, it's not possible.</span></p>
      <p><span data-start="00:31:22.000" data-end="00:31:39.000" data-start-seconds="1882">It's also not necessarily a clever idea because people are used to seeing a player and actually know where the controls are. Switching that interface to an own that might be better, means that end users have to be reeducated about them.</span></p>
      <p><span data-start="00:31:39.000" data-end="00:31:40.000" data-start-seconds="1899">Yeah, that is the downside, yeah.</span></p>
      <p><span data-start="00:31:40.000" data-end="00:31:44.000" data-start-seconds="1900">Do you find that JW Player gets a lot of customization by people?</span> <span data-start="00:31:44.000" data-end="00:32:12.000" data-start-seconds="1904">We do see a lot of skinning, yes. What we do, we have like a CSS PNG skinning model, but we very much restrict what you can do in terms of skinning. So by doing that, we hope to keep the UX standards and usual so it's not possible to put the play button in the top right corner, for example.</span></p>
      <p><span data-start="00:32:12.000" data-end="00:32:25.000" data-start-seconds="1932">You'll always have a control bar with buttons that have specific positions and you can change the sizes, change the colors, change the rollovers but you cannot change it altogether.</span></p>
      <p><span data-start="00:32:25.000" data-end="00:32:36.000" data-start-seconds="1945">That's quite a ballsy approach, because I'm quite sure a lot of clients would want that. I think it's more like sticking to your &quot;I want to have a consistent experience in the player.&quot;</span></p>
      <p><span data-start="00:32:36.000" data-end="00:33:03.000" data-start-seconds="1956">Yeah, I think overall that is something that we stick to with JW Player. We are not trying to make it as flexible or as hackable as possible. We always think about the player as having two types of customers.</span></p>
      <p><span data-start="00:33:03.000" data-end="00:33:30.000" data-start-seconds="1983">The first type of customer is the publisher. They are buying our product, so they are actually our monetary customer. The second type of customer, that's the end visitor. If you give publishers a lot of ways to really develop bad UI, then the end customer will not like that.</span></p>
      <p><span data-start="00:33:30.000" data-end="00:33:45.000" data-start-seconds="2010">We think that the end customer, the viewer, is also an important customer because that is what the publishers are seeing on all these websites. They see this player on all these websites and think, &quot;Oh, this works nice. I want to use that.&quot;</span></p>
      <p><span data-start="00:33:45.000" data-end="00:34:10.000" data-start-seconds="2025">If they see this player on a website where it's like, &quot;I can't even find the play button. Where is it? How do I start it? Oh, it's a JW Player. Should not use that one.&quot; I think that's something that, for us, it's very important, that balance between giving the publisher flexible tools but maintaining a certain standard in terms of accessibility and UX.</span></p>
      <p><span data-start="00:34:10.000" data-end="00:34:23.000" data-start-seconds="2050">Talk about accessibility. We saw that screen readers can parse the track titles, but how is the tooling going? Video encoding, we have lots of companies that actually start helping you with that.</span></p>
      <p><span data-start="00:34:23.000" data-end="00:34:46.000" data-start-seconds="2063">We've got things like encoding with their Vid.ly service, for example. Subtitling is quite a hard task, and closed captioning even more. I don't see any product coming out that makes it easier. MAGpie is the classic one. Then there is UniversalSubtitles.org which is a crowd sourced approach for subtitling.</span></p>
      <p><span data-start="00:34:46.000" data-end="00:34:59.000" data-start-seconds="2086">But working with content providers, how does it work? For video production, for DVD production, they do all that stuff. Is that content readily available from content providers to be used on the web as well?</span></p>
      <p><span data-start="00:34:59.000" data-end="00:35:14.000" data-start-seconds="2099">Yes, what you see with content providers is that a lot of the captions, a lot of work is being done to make sure that all the captioning and all the subtitling that they do for broadcast is also transferred to online.</span></p>
      <p><span data-start="00:35:14.000" data-end="00:35:45.000" data-start-seconds="2114">So they are moving from internal systems and internal formats to something like a DFXP or line 21. They have to because it's mandated country by country, and in the United States it's now mandated by the FCC that everything that has captions in broadcast, the rebroadcast has to have captions as well.</span></p>
      <p><span data-start="00:35:45.000" data-end="00:36:16.000" data-start-seconds="2145">They have their internal tools for actually writing out the captions and the audio descriptions. I think for online it's still quite early and there are not a lot of tools out there. Like UniversalSubtitles and a company like Dotsub, those are really the first ones that work on it, then only on captions, audio descriptions.</span></p>
      <p><span data-start="00:36:16.000" data-end="00:36:41.000" data-start-seconds="2176">I think up until now audio description has just been too hard to put in a product. Such a set up where you describe your content with text and then the screen reader takes it out. That's really something that you can scale across like millions of websites that have 10 video views per day.</span></p>
      <p><span data-start="00:36:41.000" data-end="00:36:58.000" data-start-seconds="2201">One thing I've found hilarious is when you talk to people about this and they're like &quot;Yeah, but YouTube now has automated captioning. You just analyze the soundtrack, and it gives you the captions.&quot; How is the quality of these tools so far?</span></p>
      <p><span data-start="00:36:58.000" data-end="00:37:09.000" data-start-seconds="2218">I only know that anecdotally from watching YouTube videos. You see it's doing a pretty good job but some misses are hilarious.</span></p>
      <p><span data-start="00:37:09.000" data-end="00:37:29.000" data-start-seconds="2229">Yeah, there's actually a video of an artist group in New York that played a sketch, filmed it, uploaded to YouTube, had automated captioning and then reenacted the sketch with the automated captioning. It's just incredibly wonderful to watch because it's like playing telephone.</span></p>
      <p><span data-start="00:37:29.000" data-end="00:37:54.000" data-start-seconds="2249">That's the annoying thing. You obviously did a lot of work with the JW Player to be keyboard accessible as well for people who cannot use a mouse. A lot of people just wait for the magic moment to happen. What would you think is the most important thing to make a video as accessible as possible if you put it online, within limits that a normal end developer could do?</span></p>
      <p><span data-start="00:37:54.000" data-end="00:38:25.000" data-start-seconds="2274">I think if you would do one thing I would do a caption track. So I would add a caption track. It's great for accessibility, for your prime audiences, but there is also a huge secondary audience around for like people who are slow learning, people that understand your language but not really, so like people who are foreign speakers who know a little bit of your language.</span></p>
      <p><span data-start="00:38:25.000" data-end="00:38:58.000" data-start-seconds="2305">For them, the caption is actually great. When I'm tired and I'm watching an American movie I enable the captions to read. It's a lot easier. Then on top of that I think that there will be a time where search engines, like something you build internally or the big guys like the Googles, will start indexing that and be more smart about in video search.</span></p>
      <p><span data-start="00:38:58.000" data-end="00:39:10.000" data-start-seconds="2338">That's where copyright comes in again, though. Like, for example, with music and lyrics this would have always been amazing. But no music publisher actually publishes lyrics.</span></p>
      <p><span data-start="00:39:10.000" data-end="00:39:26.000" data-start-seconds="2350">There is not a single legal lyric site on the web. There are millions of illegal ones, but it's just incredible that nobody sees that lyrics are more or less a time stamped caption for a music piece. Nobody uses that for navigation yet. It's all about copyright.</span></p>
      <p><span data-start="00:39:26.000" data-end="00:39:57.000" data-start-seconds="2366">Yeah, yeah. I think music is really a big part of audio. Like TV shows and feature films are not such a big part of video. There is a huge range of video applications from the talk of the CEO to online presentations, e-learning things, marketing material, all of that will benefit from the captioning.</span></p>
      <p><span data-start="00:39:57.000" data-end="00:40:24.000" data-start-seconds="2397">Then maybe the people whose content is their product will take copyright considerations, will take those seriously. But for video, much more so than audio, there are a lot of cases where video is the tool to sell some other product or service or to explain some other message.</span></p>
      <p><span data-start="00:40:24.000" data-end="00:40:38.000" data-start-seconds="2424">A question here. Will HTML be the enabler of apps on connected devices like TV set-top boxes, etc? Can you see set-top boxes will run plainly on HTML5, maybe Raspberry Pi based these kind of things?</span></p>
      <p><span data-start="00:40:38.000" data-end="00:40:57.000" data-start-seconds="2438">I think that's hard to tell at this point. It's such a fragmented market, and if you look at the numbers there are a sliver of a sliver of web and really a sliver of mobile as well.</span></p>
      <p><span data-start="00:40:57.000" data-end="00:41:00.000" data-start-seconds="2457">It will be a big market in the future, in the nearer future, though, isn't it?</span> <span data-start="00:41:00.000" data-end="00:41:28.000" data-start-seconds="2460">It will be a big market. I think whoever will come up with something that works from a UX point of view, that really works, they'll be able to dominate that scene. You see that with mobile with the Apple app store and the apps, that could be what will happen for set-tops and TV. Maybe there will be something HTML5 that's a lot smarter, but it's hard to tell at this point.</span></p>
      <p><span data-start="00:41:28.000" data-end="00:41:38.000" data-start-seconds="2488">Having worked on TV widgets at Yahoo, it was a lot about like hardware providers wanting to own their proprietary things as well rather than making a standard. It's always the same story, sadly enough.</span></p>
      <p><span data-start="00:41:38.000" data-end="00:41:40.000" data-start-seconds="2498">Yeah.</span></p>
      <p><span data-start="00:41:40.000" data-end="00:42:00.000" data-start-seconds="2500">There is another one here which is actually an interesting one that I never thought of. How would you deal with videos not allowed for kids? Should the embedded confirmation button for video tag, whatever that means? How about an age restriction of video, how could that be done in a video HTML format?</span></p>
      <p><span data-start="00:42:00.000" data-end="00:42:40.000" data-start-seconds="2520">Those things are things that at this point you have to manage at the website level. So you come up with a scheme for age restriction for yourself, tag your content with that, and then provide access or deny access to videos based on that. In HTML5 itself, there is not so much in that area. You see that, for example, in media RSS there are age restrictions schemas and in the big video platforms like Brightcove and Kaltura also provide that tooling.</span></p>
      <p><span data-start="00:42:40.000" data-end="00:43:02.000" data-start-seconds="2560">There's also pics rating for pages which could be applied to video tracks as well on an HG access level, for example. But it's tricky. I once had a job offer to write an adult filter for the Internet. It was basically my coding skill against the sex drive of every 15 year old out there. As that, I don't take the job.</span></p>
      <p><span data-start="00:43:02.000" data-end="00:43:05.000" data-start-seconds="2582">It gets hard just to look at pixel color.</span></p>
      <p><span data-start="00:43:05.000" data-end="00:43:19.000" data-start-seconds="2585">Yeah, and false positives are quite interesting as well at times. No, that was actually me doing the chicken rather than naked people cooking a chicken. [microphone noise] That's not good.</span></p>
      <p><span data-start="00:43:19.000" data-end="00:43:32.000" data-start-seconds="2599">Streaming, of course, is essential for live video. So what about live video HTML5 streaming? I mean, we have a few WebM things in experimentation on Mozilla, but it's not easy. Is it?</span></p>
      <p><span data-start="00:43:32.000" data-end="00:43:53.000" data-start-seconds="2612">No, no, it is not easy. There is indeed no tooling, no market behind it. The market is moving towards this chopping up of videos in small fragments and that lends itself great for live streaming as well.</span></p>
      <p><span data-start="00:43:53.000" data-end="00:44:21.000" data-start-seconds="2633">I think that is something that will also bring live video to HTML5, not so much the demos with ever increasing files or still using UDP protocols. That media source API that mostly the people from Chrome are working on, I think that is a very interesting prospect.</span></p>
      <p><span data-start="00:44:21.000" data-end="00:44:32.000" data-start-seconds="2661">The other one, of course, is WebRTC. That's the other standard that actually does streaming of any data over two peer connections, but that's another discussion between three browsers, at the moment.</span></p>
      <p><span data-start="00:44:32.000" data-end="00:44:52.000" data-start-seconds="2672">Yeah, WebRTC is also one of these areas that development is going really fast, but I consider that more for indeed webcam-style collaboration applications, and not so much for, &quot;I'm BBC1, and let me live-broadcast.&quot;</span></p>
      <p><span data-start="00:44:52.000" data-end="00:44:54.000" data-start-seconds="2692">Cool. Thank you very much.</span></p>
      <p><span data-start="00:44:54.000" data-end="00:44:54.000" data-start-seconds="2694">Thank you. [applause]</span></p>
     </div>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2012/sessions/the-state-of-html5-video-jeroen-wijering.md" id="comment">
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
