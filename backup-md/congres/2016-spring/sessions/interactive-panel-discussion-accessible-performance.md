<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>Interactive panel discussion Accessible performance · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p1727">
  <style>
   /* Fronteers 2014 styling */
   #main { margin: 0 3em 0 21em; }
   #submenu { max-width: 19em; top: 10em; left: 2em; }
    #submenu h2, #submenu ul li { margin-right: 2em; margin-left: 0; }
    #submenu ul li { padding-left: 0; }
    #submenu div { margin-bottom: 2em; font-size: 1.25em; line-height: 1.5; }
    #submenu ul li.mark { background-image: url(/_css/img/marker-left.png); margin-right: 0; background-position: 100% 9px; }
   div.section { overflow: auto; }
   div.section * + h2 { margin-top: 2.4em; }
   div.section * + h3 { margin-top: 2.4em; }
   div.section h2 + h3 { margin-top: 10px; }
   div.section * + h4 { margin-top: 1.5em; }
   div.section p + p { margin-top: 1em; }
   div.section p.figure:last-child { margin-top: 2rem; margin-bottom: -3rem; }
   div.section iframe { margin: 1em 0 !important; }
   .section { font-size: 1.2em; }
   .speaker-section { overflow: hidden; }
   @media all and (max-width: 55em) {
    #main { margin: 0 3em 0 21em; }
    #submenu { position: absolute; -webkit-columns: 1; -moz-columns: 1; columns: 1; margin: 2em 2em 0 0; }
   }
   @media all and (max-width: 37em) {
    #main { margin: 0; }
    #submenu { width: 100%; max-width: 100%; position: static; }
     #submenu h2, #submenu ul li { margin-left: 2em; }
   }
   html { background: #0a2f41; background: linear-gradient(90deg, #0a2f41 40%, #070707); }
   h1 a { padding: 0; }
  </style>
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/congres/2016-spring"><img src="/_img/congres/2016-spring/fronteers-2016-header.png" width="860" height="175" alt="Fronteers Spring conference"></a></h1>
    <div class="section" lang="en">
     <h2>Interactive panel discussion Accessible performance</h2>
     <video width="640" height="360" src="/_downloads/2016/spring-conference/accessible-performance-q-and-a.mp4" controls>
      <track src="/congres/2016-spring/sessions/interactive-panel-discussion-accessible-performance.vtt" default>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2016/spring-conference/accessible-performance-q-and-a.mp4">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <p class="note">This is the panel discussion after <a href="/congres/2016-spring/videos/accessible-performance">a set of three talks on Accessible Performance</a> delivered on April 1, 2016 at Fronteers Spring Conference in Amsterdam</p>
     <ul>
      <li><a href="https://vimeo.com/163232532">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2016/spring-conference/audio/accessible-performance-q-and-a.mp3">Download audio</a> (MP3, 16MB)</li>
     </ul>
     <h3>Transcript</h3>
     <div class="transcript">
      <p><span data-start="00:00.500" data-end="00:03.469" data-start-seconds="0">We'll try and ask the kind of</span> <span data-start="00:00.500" data-end="00:03.469" data-start-seconds="0">questions that don't induce</span> <span data-start="00:03.469" data-end="00:06.720" data-start-seconds="3">nose bleeds in this section.</span></p>
      <p><span data-start="00:06.720" data-end="00:08.130" data-start-seconds="6">Awesome.</span></p>
      <p><span data-start="00:08.130" data-end="00:10.580" data-start-seconds="8">So there's a few themes that</span> <span data-start="00:08.130" data-end="00:10.580" data-start-seconds="8">come out there straightaway.</span></p>
      <p><span data-start="00:10.580" data-end="00:14.460" data-start-seconds="10">But one of the things</span> <span data-start="00:10.580" data-end="00:14.460" data-start-seconds="10">that I'm trying</span> <span data-start="00:14.460" data-end="00:17.560" data-start-seconds="14">not to sound like a</span> <span data-start="00:14.460" data-end="00:17.560" data-start-seconds="14">bitching developer</span> <span data-start="00:17.560" data-end="00:21.270" data-start-seconds="17">when I ask the question, because</span> <span data-start="00:17.560" data-end="00:21.270" data-start-seconds="17">there's a lot of attributes</span> <span data-start="00:21.270" data-end="00:23.660" data-start-seconds="21">there, a lot of techniques</span> <span data-start="00:21.270" data-end="00:23.660" data-start-seconds="21">that we would probably</span> <span data-start="00:23.660" data-end="00:28.804" data-start-seconds="23">foster that it's hard to make</span> <span data-start="00:23.660" data-end="00:28.804" data-start-seconds="23">the argument to the designers</span> <span data-start="00:28.804" data-end="00:30.720" data-start-seconds="28">that we're working with,</span> <span data-start="00:28.804" data-end="00:30.720" data-start-seconds="28">or the people signing</span> <span data-start="00:30.720" data-end="00:33.260" data-start-seconds="30">the checks for the sites.</span></p>
      <p><span data-start="00:33.260" data-end="00:34.970" data-start-seconds="33">And I know that's</span> <span data-start="00:33.260" data-end="00:34.970" data-start-seconds="33">the wrong attitude.</span></p>
      <p><span data-start="00:34.970" data-end="00:37.350" data-start-seconds="34">But it's a difficulty, right.</span></p>
      <p><span data-start="00:37.350" data-end="00:42.190" data-start-seconds="37">And you mentioned the</span> <span data-start="00:37.350" data-end="00:42.190" data-start-seconds="37">turning off the scaling.</span></p>
      <p><span data-start="00:42.190" data-end="00:43.040" data-start-seconds="42">Yeah.</span></p>
      <p><span data-start="00:43.040" data-end="00:46.810" data-start-seconds="43">I see now a lot is being used</span> <span data-start="00:43.040" data-end="00:46.810" data-start-seconds="43">as a bit of a hack as a way</span> <span data-start="00:46.810" data-end="00:49.440" data-start-seconds="46">to make some of the</span> <span data-start="00:46.810" data-end="00:49.440" data-start-seconds="46">layouts possible that</span> <span data-start="00:49.440" data-end="00:50.670" data-start-seconds="49">are being asked for.</span></p>
      <p><span data-start="00:50.670" data-end="00:52.490" data-start-seconds="50">So before we get into</span> <span data-start="00:50.670" data-end="00:52.490" data-start-seconds="50">anything technical,</span> <span data-start="00:52.490" data-end="00:53.948" data-start-seconds="52">have you got any</span> <span data-start="00:52.490" data-end="00:53.948" data-start-seconds="52">good tips, or have</span> <span data-start="00:53.948" data-end="00:56.680" data-start-seconds="53">any of you guys got any good</span> <span data-start="00:53.948" data-end="00:56.680" data-start-seconds="53">tips on pushing back on that</span> <span data-start="00:56.680" data-end="00:59.170" data-start-seconds="56">and saying, here's</span> <span data-start="00:56.680" data-end="00:59.170" data-start-seconds="56">some data about why</span> <span data-start="00:59.170" data-end="01:04.182" data-start-seconds="59">we should avoid some of</span> <span data-start="00:59.170" data-end="01:04.182" data-start-seconds="59">those kind of design choices</span> <span data-start="01:04.182" data-end="01:06.140" data-start-seconds="64">or things that are going</span> <span data-start="01:04.182" data-end="01:06.140" data-start-seconds="64">to lead us to do that.</span></p>
      <p><span data-start="01:06.140" data-end="01:08.000" data-start-seconds="66">Is there good data</span> <span data-start="01:06.140" data-end="01:08.000" data-start-seconds="66">available for that?</span> <span data-start="01:08.000" data-end="01:10.170" data-start-seconds="68">Or is there other good ways</span> <span data-start="01:08.000" data-end="01:10.170" data-start-seconds="68">of making that argument?</span> <span data-start="01:10.170" data-end="01:12.530" data-start-seconds="70">What was the fine for</span> <span data-start="01:10.170" data-end="01:12.530" data-start-seconds="70">Target for not having</span> <span data-start="01:12.530" data-end="01:14.480" data-start-seconds="72">an accessible website?</span> <span data-start="01:14.480" data-end="01:16.840" data-start-seconds="74">It was a lot of money.</span></p>
      <p><span data-start="01:16.840" data-end="01:20.960" data-start-seconds="76">So Target paid $6 million, plus</span> <span data-start="01:16.840" data-end="01:20.960" data-start-seconds="76">$4 million in attorney's fees.</span></p>
      <p><span data-start="01:20.960" data-end="01:22.780" data-start-seconds="80">That's really good data.</span></p>
      <p><span data-start="01:22.780" data-end="01:23.400" data-start-seconds="82">Right.</span></p>
      <p><span data-start="01:23.400" data-end="01:25.165" data-start-seconds="83">Yeah, money talks, doesn't it?</span> <span data-start="01:25.165" data-end="01:25.960" data-start-seconds="85">Money does talk.</span></p>
      <p><span data-start="01:25.960" data-end="01:28.140" data-start-seconds="85">And sadly, that</span> <span data-start="01:25.960" data-end="01:28.140" data-start-seconds="85">is big motivator.</span></p>
      <p><span data-start="01:28.140" data-end="01:30.080" data-start-seconds="88">But it's really just user pain.</span></p>
      <p><span data-start="01:30.080" data-end="01:32.390" data-start-seconds="90">I mean, if you try and</span> <span data-start="01:30.080" data-end="01:32.390" data-start-seconds="90">pull up any news site</span> <span data-start="01:32.390" data-end="01:35.140" data-start-seconds="92">and you-- &quot;New York Times,&quot;</span> <span data-start="01:32.390" data-end="01:35.140" data-start-seconds="92">for example-- last time</span> <span data-start="01:35.140" data-end="01:38.420" data-start-seconds="95">I checked, they had taken</span> <span data-start="01:35.140" data-end="01:38.420" data-start-seconds="95">their desktop styles,</span> <span data-start="01:38.420" data-end="01:40.140" data-start-seconds="98">made it responsive,</span> <span data-start="01:38.420" data-end="01:40.140" data-start-seconds="98">so things are now</span> <span data-start="01:40.140" data-end="01:41.990" data-start-seconds="100">viewable in one tiny column.</span></p>
      <p><span data-start="01:41.990" data-end="01:44.680" data-start-seconds="101">But the text is so</span> <span data-start="01:41.990" data-end="01:44.680" data-start-seconds="101">small and so faint</span> <span data-start="01:44.680" data-end="01:46.860" data-start-seconds="104">because of the color</span> <span data-start="01:44.680" data-end="01:46.860" data-start-seconds="104">contrast and the size,</span> <span data-start="01:46.860" data-end="01:49.450" data-start-seconds="106">that all of a sudden, if</span> <span data-start="01:46.860" data-end="01:49.450" data-start-seconds="106">you've presented zooming,</span> <span data-start="01:49.450" data-end="01:50.880" data-start-seconds="109">you can't read it very well.</span></p>
      <p><span data-start="01:50.880" data-end="01:52.470" data-start-seconds="110">So some of it is anecdotal.</span></p>
      <p><span data-start="01:52.470" data-end="01:55.060" data-start-seconds="112">Some of it is the legal risk.</span></p>
      <p><span data-start="01:55.060" data-end="01:57.110" data-start-seconds="115">I think all of those</span> <span data-start="01:55.060" data-end="01:57.110" data-start-seconds="115">things together should</span> <span data-start="01:57.110" data-end="01:58.411" data-start-seconds="117">be enough to make people care.</span></p>
      <p><span data-start="01:58.411" data-end="01:58.910" data-start-seconds="118">Yeah.</span></p>
      <p><span data-start="01:58.910" data-end="02:01.020" data-start-seconds="118">And I don't know,</span> <span data-start="01:58.910" data-end="02:01.020" data-start-seconds="118">maybe different people</span> <span data-start="02:01.020" data-end="02:03.340" data-start-seconds="121">have different</span> <span data-start="02:01.020" data-end="02:03.340" data-start-seconds="121">experiences in projects.</span></p>
      <p><span data-start="02:03.340" data-end="02:06.010" data-start-seconds="123">But I often find that</span> <span data-start="02:03.340" data-end="02:06.010" data-start-seconds="123">some of these arguments</span> <span data-start="02:06.010" data-end="02:09.067" data-start-seconds="126">seem to fall to the developer</span> <span data-start="02:06.010" data-end="02:09.067" data-start-seconds="126">on a project to say,</span> <span data-start="02:09.067" data-end="02:09.650" data-start-seconds="129">well, hang on.</span></p>
      <p><span data-start="02:09.650" data-end="02:10.816" data-start-seconds="129">Have you thought about this?</span> <span data-start="02:10.816" data-end="02:14.140" data-start-seconds="130">And I know the UX</span> <span data-start="02:10.816" data-end="02:14.140" data-start-seconds="130">teams are getting--</span> <span data-start="02:14.140" data-end="02:15.620" data-start-seconds="134">that's what they</span> <span data-start="02:14.140" data-end="02:15.620" data-start-seconds="134">focus on as well.</span></p>
      <p><span data-start="02:15.620" data-end="02:17.840" data-start-seconds="135">But often some of the things to</span> <span data-start="02:15.620" data-end="02:17.840" data-start-seconds="135">do with color contrasting you</span> <span data-start="02:17.840" data-end="02:18.520" data-start-seconds="137">just mentioned.</span></p>
      <p><span data-start="02:18.520" data-end="02:22.400" data-start-seconds="138">And to do with, oh well, it</span> <span data-start="02:18.520" data-end="02:22.400" data-start-seconds="138">fits in this nice view port now.</span></p>
      <p><span data-start="02:22.400" data-end="02:24.222" data-start-seconds="142">So that's fine.</span></p>
      <p><span data-start="02:24.222" data-end="02:25.430" data-start-seconds="144">Those seem to tick the boxes.</span></p>
      <p><span data-start="02:25.430" data-end="02:27.610" data-start-seconds="145">And it's developers</span> <span data-start="02:25.430" data-end="02:27.610" data-start-seconds="145">who raise those things.</span></p>
      <p><span data-start="02:27.610" data-end="02:29.310" data-start-seconds="147">So having access to</span> <span data-start="02:27.610" data-end="02:29.310" data-start-seconds="147">that kind of data</span> <span data-start="02:29.310" data-end="02:30.990" data-start-seconds="149">in that argument is</span> <span data-start="02:29.310" data-end="02:30.990" data-start-seconds="149">kind of critical,</span> <span data-start="02:30.990" data-end="02:32.250" data-start-seconds="150">I think, to make that point.</span></p>
      <p><span data-start="02:32.250" data-end="02:35.720" data-start-seconds="152">I mean, I think the best way</span> <span data-start="02:32.250" data-end="02:35.720" data-start-seconds="152">to argue it is the dollars,</span> <span data-start="02:35.720" data-end="02:37.930" data-start-seconds="155">because that is who</span> <span data-start="02:35.720" data-end="02:37.930" data-start-seconds="155">our boss's boss--</span> <span data-start="02:37.930" data-end="02:39.270" data-start-seconds="157">that's what they care about.</span></p>
      <p><span data-start="02:39.270" data-end="02:41.310" data-start-seconds="159">But the reason we're</span> <span data-start="02:39.270" data-end="02:41.310" data-start-seconds="159">talking to the developers</span> <span data-start="02:41.310" data-end="02:43.540" data-start-seconds="161">and not to our</span> <span data-start="02:41.310" data-end="02:43.540" data-start-seconds="161">bosses- boss is when</span> <span data-start="02:43.540" data-end="02:46.457" data-start-seconds="163">you can't get our boss's</span> <span data-start="02:43.540" data-end="02:46.457" data-start-seconds="163">boss into the same.</span></p>
      <p><span data-start="02:46.457" data-end="02:48.790" data-start-seconds="166">If you actually want to talk</span> <span data-start="02:46.457" data-end="02:48.790" data-start-seconds="166">about something meaningful.</span></p>
      <p><span data-start="02:48.790" data-end="02:50.000" data-start-seconds="168">Did I just say that?</span> <span data-start="02:50.000" data-end="02:51.670" data-start-seconds="170">I did.</span></p>
      <p><span data-start="02:51.670" data-end="02:54.670" data-start-seconds="171">But developers actually care.</span></p>
      <p><span data-start="02:54.670" data-end="02:57.756" data-start-seconds="174">So it's converting--</span> <span data-start="02:54.670" data-end="02:57.756" data-start-seconds="174">maybe a developer didn't</span> <span data-start="02:57.756" data-end="02:58.880" data-start-seconds="177">know about it in this room.</span></p>
      <p><span data-start="02:58.880" data-end="03:00.330" data-start-seconds="178">But actually hearing about</span> <span data-start="02:58.880" data-end="03:00.330" data-start-seconds="178">it, they're like, wow.</span></p>
      <p><span data-start="03:00.330" data-end="03:01.330" data-start-seconds="180">I never thought of that.</span></p>
      <p><span data-start="03:01.330" data-end="03:02.910" data-start-seconds="181">But the easiest way</span> <span data-start="03:01.330" data-end="03:02.910" data-start-seconds="181">to make something</span> <span data-start="03:02.910" data-end="03:07.070" data-start-seconds="182">accessible-- like this</span> <span data-start="03:02.910" data-end="03:07.070" data-start-seconds="182">talk I'm developing,</span> <span data-start="03:07.070" data-end="03:09.860" data-start-seconds="187">which I didn't do here because</span> <span data-start="03:07.070" data-end="03:09.860" data-start-seconds="187">Marcie covered everything</span> <span data-start="03:09.860" data-end="03:14.260" data-start-seconds="189">that I was going to do in my</span> <span data-start="03:09.860" data-end="03:14.260" data-start-seconds="189">original talk with that website</span> <span data-start="03:14.260" data-end="03:18.020" data-start-seconds="194">that I refactored in</span> <span data-start="03:14.260" data-end="03:18.020" data-start-seconds="194">1,000 lines of JavaScript.</span></p>
      <p><span data-start="03:18.020" data-end="03:19.520" data-start-seconds="198">The reason I was</span> <span data-start="03:18.020" data-end="03:19.520" data-start-seconds="198">able to refactor it</span> <span data-start="03:19.520" data-end="03:23.370" data-start-seconds="199">into 1,000 lines of JavaScript</span> <span data-start="03:19.520" data-end="03:23.370" data-start-seconds="199">was I used native elements.</span></p>
      <p><span data-start="03:23.370" data-end="03:25.950" data-start-seconds="203">And I no longer had</span> <span data-start="03:23.370" data-end="03:25.950" data-start-seconds="203">to use ARIA support.</span></p>
      <p><span data-start="03:25.950" data-end="03:28.430" data-start-seconds="205">So when you use the</span> <span data-start="03:25.950" data-end="03:28.430" data-start-seconds="205">span for your checkbox,</span> <span data-start="03:28.430" data-end="03:31.180" data-start-seconds="208">I was cringing, because</span> <span data-start="03:28.430" data-end="03:31.180" data-start-seconds="208">I'm kind of like,</span> <span data-start="03:31.180" data-end="03:32.430" data-start-seconds="211">just use the check box.</span></p>
      <p><span data-start="03:32.430" data-end="03:33.180" data-start-seconds="212">Use the checkbox.</span></p>
      <p><span data-start="03:33.180" data-end="03:34.320" data-start-seconds="213">Or use a select.</span></p>
      <p><span data-start="03:34.320" data-end="03:36.740" data-start-seconds="214">And then if you don't</span> <span data-start="03:34.320" data-end="03:36.740" data-start-seconds="214">use a select, what</span> <span data-start="03:36.740" data-end="03:38.610" data-start-seconds="216">is the equivalent of a select?</span> <span data-start="03:38.610" data-end="03:43.050" data-start-seconds="218">Almost is a radio list, because</span> <span data-start="03:38.610" data-end="03:43.050" data-start-seconds="218">you can only select one.</span></p>
      <p><span data-start="03:43.050" data-end="03:45.580" data-start-seconds="223">So just thinking</span> <span data-start="03:43.050" data-end="03:45.580" data-start-seconds="223">outside the box,</span> <span data-start="03:45.580" data-end="03:49.240" data-start-seconds="225">because we have these elements</span> <span data-start="03:45.580" data-end="03:49.240" data-start-seconds="225">and they're accessible.</span></p>
      <p><span data-start="03:49.240" data-end="03:55.110" data-start-seconds="229">And so when I did this-- I did</span> <span data-start="03:49.240" data-end="03:55.110" data-start-seconds="229">a carousel using radio buttons.</span></p>
      <p><span data-start="03:55.110" data-end="03:58.040" data-start-seconds="235">And to make this entire</span> <span data-start="03:55.110" data-end="03:58.040" data-start-seconds="235">carousel accessible</span> <span data-start="03:58.040" data-end="03:59.480" data-start-seconds="238">was four lines of JavaScript.</span></p>
      <p><span data-start="03:59.480" data-end="04:02.360" data-start-seconds="239">Who here has developed</span> <span data-start="03:59.480" data-end="04:02.360" data-start-seconds="239">a carousel at all?</span> <span data-start="04:02.360" data-end="04:05.670" data-start-seconds="242">And then in less than</span> <span data-start="04:02.360" data-end="04:05.670" data-start-seconds="242">5,000 lines of JavaScript?</span> <span data-start="04:05.670" data-end="04:07.110" data-start-seconds="245">And then under 10.</span></p>
      <p><span data-start="04:07.110" data-end="04:09.870" data-start-seconds="247">So if you actually</span> <span data-start="04:07.110" data-end="04:09.870" data-start-seconds="247">use native elements,</span> <span data-start="04:09.870" data-end="04:12.385" data-start-seconds="249">it will do what you want to do.</span></p>
      <p><span data-start="04:12.385" data-end="04:13.760" data-start-seconds="252">You not longer</span> <span data-start="04:12.385" data-end="04:13.760" data-start-seconds="252">have to do key up,</span> <span data-start="04:13.760" data-end="04:15.490" data-start-seconds="253">key down, key right,</span> <span data-start="04:13.760" data-end="04:15.490" data-start-seconds="253">key left, tab.</span></p>
      <p><span data-start="04:15.490" data-end="04:16.350" data-start-seconds="255">cause it's all taken care of.</span></p>
      <p><span data-start="04:16.350" data-end="04:16.560" data-start-seconds="256">Yeah.</span></p>
      <p><span data-start="04:16.560" data-end="04:17.829" data-start-seconds="256">I mean as soon as</span> <span data-start="04:16.560" data-end="04:17.829" data-start-seconds="256">you start reinventing</span> <span data-start="04:17.829" data-end="04:19.630" data-start-seconds="257">what the browser's</span> <span data-start="04:17.829" data-end="04:19.630" data-start-seconds="257">already done, you're</span> <span data-start="04:19.630" data-end="04:21.079" data-start-seconds="259">fighting a losing battle.</span></p>
      <p><span data-start="04:21.079" data-end="04:21.910" data-start-seconds="261">You are.</span></p>
      <p><span data-start="04:21.910" data-end="04:23.880" data-start-seconds="261">To piggyback on what</span> <span data-start="04:21.910" data-end="04:23.880" data-start-seconds="261">Estelle was saying too</span> <span data-start="04:23.880" data-end="04:28.110" data-start-seconds="263">was, I don't know any developers</span> <span data-start="04:23.880" data-end="04:28.110" data-start-seconds="263">who believe in doing a bad job.</span></p>
      <p><span data-start="04:28.110" data-end="04:31.360" data-start-seconds="268">Anybody here like</span> <span data-start="04:28.110" data-end="04:31.360" data-start-seconds="268">doing crappy work?</span> <span data-start="04:31.360" data-end="04:34.630" data-start-seconds="271">So forget about what the</span> <span data-start="04:31.360" data-end="04:34.630" data-start-seconds="271">executive has to say, right?</span> <span data-start="04:34.630" data-end="04:36.627" data-start-seconds="274">And like Estelle</span> <span data-start="04:34.630" data-end="04:36.627" data-start-seconds="274">was just saying,</span> <span data-start="04:36.627" data-end="04:38.210" data-start-seconds="276">yeah, there's probably</span> <span data-start="04:36.627" data-end="04:38.210" data-start-seconds="276">a lot of people</span> <span data-start="04:38.210" data-end="04:41.130" data-start-seconds="278">in the room who don't know</span> <span data-start="04:38.210" data-end="04:41.130" data-start-seconds="278">a lot about accessibility.</span></p>
      <p><span data-start="04:41.130" data-end="04:44.550" data-start-seconds="281">But ultimately our</span> <span data-start="04:41.130" data-end="04:44.550" data-start-seconds="281">decision whether or not</span> <span data-start="04:44.550" data-end="04:47.520" data-start-seconds="284">we want to do a good</span> <span data-start="04:44.550" data-end="04:47.520" data-start-seconds="284">job comes down to us.</span></p>
      <p><span data-start="04:47.520" data-end="04:50.870" data-start-seconds="287">And we could put forth</span> <span data-start="04:47.520" data-end="04:50.870" data-start-seconds="287">some of that extra effort.</span></p>
      <p><span data-start="04:50.870" data-end="04:53.750" data-start-seconds="290">And really it can</span> <span data-start="04:50.870" data-end="04:53.750" data-start-seconds="290">start with basic stuff.</span></p>
      <p><span data-start="04:53.750" data-end="04:56.430" data-start-seconds="293">Form field labels is huge.</span></p>
      <p><span data-start="04:56.430" data-end="04:58.870" data-start-seconds="296">People need to</span> <span data-start="04:56.430" data-end="04:58.870" data-start-seconds="296">know is converting</span> <span data-start="04:58.870" data-end="05:01.980" data-start-seconds="298">a visitor to a customer is</span> <span data-start="04:58.870" data-end="05:01.980" data-start-seconds="298">based upon their successful</span> <span data-start="05:01.980" data-end="05:05.060" data-start-seconds="301">submission of a form, putting</span> <span data-start="05:01.980" data-end="05:05.060" data-start-seconds="301">form field labels on there</span> <span data-start="05:05.060" data-end="05:06.440" data-start-seconds="305">is like a no-brainer.</span></p>
      <p><span data-start="05:06.440" data-end="05:08.190" data-start-seconds="306">And you're doing a good job.</span></p>
      <p><span data-start="05:08.190" data-end="05:11.850" data-start-seconds="308">And so I choose to</span> <span data-start="05:08.190" data-end="05:11.850" data-start-seconds="308">sort of walk around</span> <span data-start="05:11.850" data-end="05:15.130" data-start-seconds="311">the executives who want</span> <span data-start="05:11.850" data-end="05:15.130" data-start-seconds="311">to be naysayers, and just</span> <span data-start="05:15.130" data-end="05:16.470" data-start-seconds="315">do it anyway.</span></p>
      <p><span data-start="05:16.470" data-end="05:18.640" data-start-seconds="316">And I think sometimes</span> <span data-start="05:16.470" data-end="05:18.640" data-start-seconds="316">those are steered</span> <span data-start="05:18.640" data-end="05:22.220" data-start-seconds="318">by an aesthetic direction that</span> <span data-start="05:18.640" data-end="05:22.220" data-start-seconds="318">the visual design team often</span> <span data-start="05:22.220" data-end="05:24.520" data-start-seconds="322">will be going for</span> <span data-start="05:22.220" data-end="05:24.520" data-start-seconds="322">something in particular.</span></p>
      <p><span data-start="05:24.520" data-end="05:27.400" data-start-seconds="324">And that's not to</span> <span data-start="05:24.520" data-end="05:27.400" data-start-seconds="324">slight visual designers.</span></p>
      <p><span data-start="05:27.400" data-end="05:28.900" data-start-seconds="327">Are there any</span> <span data-start="05:27.400" data-end="05:28.900" data-start-seconds="327">designers in the room?</span> <span data-start="05:28.900" data-end="05:30.540" data-start-seconds="328">Visual designers in the room?</span> <span data-start="05:30.540" data-end="05:31.040" data-start-seconds="330">All right.</span></p>
      <p><span data-start="05:31.040" data-end="05:33.290" data-start-seconds="331">They're going to come and</span> <span data-start="05:31.040" data-end="05:33.290" data-start-seconds="331">beat the crap out of me.</span></p>
      <p><span data-start="05:33.290" data-end="05:35.660" data-start-seconds="333">But that is a regular</span> <span data-start="05:33.290" data-end="05:35.660" data-start-seconds="333">tension, right,</span> <span data-start="05:35.660" data-end="05:38.570" data-start-seconds="335">trying to satisfy all</span> <span data-start="05:35.660" data-end="05:38.570" data-start-seconds="335">of those things at once.</span></p>
      <p><span data-start="05:38.570" data-end="05:42.202" data-start-seconds="338">And yes, I think that the</span> <span data-start="05:38.570" data-end="05:42.202" data-start-seconds="338">development team can then bring</span> <span data-start="05:42.202" data-end="05:43.410" data-start-seconds="342">something to the table there.</span></p>
      <p><span data-start="05:43.410" data-end="05:46.520" data-start-seconds="343">It doesn't have to be to just</span> <span data-start="05:43.410" data-end="05:46.520" data-start-seconds="343">like, implement this PSD space.</span></p>
      <p><span data-start="05:46.520" data-end="05:47.050" data-start-seconds="346">Right.</span></p>
      <p><span data-start="05:47.050" data-end="05:47.550" data-start-seconds="347">Yeah.</span></p>
      <p><span data-start="05:47.550" data-end="05:48.290" data-start-seconds="347">For sure.</span></p>
      <p><span data-start="05:48.290" data-end="05:50.640" data-start-seconds="348">You were talking--</span> <span data-start="05:48.290" data-end="05:50.640" data-start-seconds="348">so I love seeing</span> <span data-start="05:50.640" data-end="05:51.870" data-start-seconds="350">examples of screen readers.</span></p>
      <p><span data-start="05:51.870" data-end="05:55.180" data-start-seconds="351">And it's so enlightening</span> <span data-start="05:51.870" data-end="05:55.180" data-start-seconds="351">to see that.</span></p>
      <p><span data-start="05:55.180" data-end="05:57.260" data-start-seconds="355">A few people have been</span> <span data-start="05:55.180" data-end="05:57.260" data-start-seconds="355">asking about how best</span> <span data-start="05:57.260" data-end="05:58.655" data-start-seconds="357">to test with screen readers.</span></p>
      <p><span data-start="05:58.655" data-end="06:01.290" data-start-seconds="358">I know that I think you</span> <span data-start="05:58.655" data-end="06:01.290" data-start-seconds="358">both have used examples</span> <span data-start="06:01.290" data-end="06:06.360" data-start-seconds="361">of the voiceover in OS X. But</span></p>
      <p><span data-start="06:01.290" data-end="06:06.360" data-start-seconds="361">is that good enough for testing?</span> <span data-start="06:06.360" data-end="06:08.460" data-start-seconds="366">Is that a good enough insight?</span> <span data-start="06:08.460" data-end="06:10.500" data-start-seconds="368">Or do you need to go further?</span> <span data-start="06:10.500" data-end="06:12.400" data-start-seconds="370">It's a good start.</span></p>
      <p><span data-start="06:12.400" data-end="06:13.820" data-start-seconds="372">The reason I like</span> <span data-start="06:12.400" data-end="06:13.820" data-start-seconds="372">using voiceover</span> <span data-start="06:13.820" data-end="06:15.600" data-start-seconds="373">is because there's text output.</span></p>
      <p><span data-start="06:15.600" data-end="06:18.710" data-start-seconds="375">And so it gives you a</span> <span data-start="06:15.600" data-end="06:18.710" data-start-seconds="375">good example for teaching.</span></p>
      <p><span data-start="06:18.710" data-end="06:21.430" data-start-seconds="378">But it's not the most</span> <span data-start="06:18.710" data-end="06:21.430" data-start-seconds="378">used screen reader.</span></p>
      <p><span data-start="06:21.430" data-end="06:25.210" data-start-seconds="381">There's a great survey from</span> <span data-start="06:21.430" data-end="06:25.210" data-start-seconds="381">WebAIM on screen reader usage,</span> <span data-start="06:25.210" data-end="06:28.750" data-start-seconds="385">both on mobile platforms</span> <span data-start="06:25.210" data-end="06:28.750" data-start-seconds="385">and desktop, jaws,</span> <span data-start="06:28.750" data-end="06:31.620" data-start-seconds="388">NVDA, NVDA being open source.</span></p>
      <p><span data-start="06:31.620" data-end="06:34.280" data-start-seconds="391">That makes it a bit easier</span> <span data-start="06:31.620" data-end="06:34.280" data-start-seconds="391">to get your hands on it.</span></p>
      <p><span data-start="06:34.280" data-end="06:37.240" data-start-seconds="394">JAWS is a very used</span> <span data-start="06:34.280" data-end="06:37.240" data-start-seconds="394">screen reader on Windows.</span></p>
      <p><span data-start="06:37.240" data-end="06:40.220" data-start-seconds="397">I didn't know until</span> <span data-start="06:37.240" data-end="06:40.220" data-start-seconds="397">maybe a year or two ago,</span> <span data-start="06:40.220" data-end="06:43.650" data-start-seconds="400">that you can use jaws in</span> <span data-start="06:40.220" data-end="06:43.650" data-start-seconds="400">40-minute mode for free.</span></p>
      <p><span data-start="06:43.650" data-end="06:46.820" data-start-seconds="403">It will just quit</span> <span data-start="06:43.650" data-end="06:46.820" data-start-seconds="403">after the 40 minutes.</span></p>
      <p><span data-start="06:46.820" data-end="06:48.652" data-start-seconds="406">So if you're using</span> <span data-start="06:46.820" data-end="06:48.652" data-start-seconds="406">it to test, you</span> <span data-start="06:48.652" data-end="06:50.610" data-start-seconds="408">can still get your hands</span> <span data-start="06:48.652" data-end="06:50.610" data-start-seconds="408">on the software, which</span> <span data-start="06:50.610" data-end="06:53.130" data-start-seconds="410">normally is really expensive.</span></p>
      <p><span data-start="06:53.130" data-end="06:54.850" data-start-seconds="413">So there's tools out there.</span></p>
      <p><span data-start="06:54.850" data-end="06:57.750" data-start-seconds="414">I tweeted a link just to</span> <span data-start="06:54.850" data-end="06:57.750" data-start-seconds="414">answer one of those questions</span> <span data-start="06:57.750" data-end="07:01.050" data-start-seconds="417">that WebAIM has really</span> <span data-start="06:57.750" data-end="07:01.050" data-start-seconds="417">good tutorials on,</span> <span data-start="07:01.050" data-end="07:02.730" data-start-seconds="421">what the key commands are.</span></p>
      <p><span data-start="07:02.730" data-end="07:04.490" data-start-seconds="422">And how you would navigate.</span></p>
      <p><span data-start="07:04.490" data-end="07:06.190" data-start-seconds="424">And so that's a</span> <span data-start="07:04.490" data-end="07:06.190" data-start-seconds="424">really good resource</span> <span data-start="07:06.190" data-end="07:08.801" data-start-seconds="426">if you're wanting to get</span> <span data-start="07:06.190" data-end="07:08.801" data-start-seconds="426">started with screen readers.</span></p>
      <p><span data-start="07:08.801" data-end="07:10.550" data-start-seconds="428">So let me just--</span> <span data-start="07:08.801" data-end="07:10.550" data-start-seconds="428">because I don't actually</span> <span data-start="07:10.550" data-end="07:13.050" data-start-seconds="430">use screen readers.</span></p>
      <p><span data-start="07:13.050" data-end="07:13.630" data-start-seconds="433">And I should.</span></p>
      <p><span data-start="07:13.630" data-end="07:14.380" data-start-seconds="433">But I don't.</span></p>
      <p><span data-start="07:14.380" data-end="07:16.787" data-start-seconds="434">And so I think most</span> <span data-start="07:14.380" data-end="07:16.787" data-start-seconds="434">people here are like me.</span></p>
      <p><span data-start="07:16.787" data-end="07:18.870" data-start-seconds="436">And they're like, what is</span> <span data-start="07:16.787" data-end="07:18.870" data-start-seconds="436">the easiest thing to do?</span> <span data-start="07:18.870" data-end="07:20.110" data-start-seconds="438">So I do something easy.</span></p>
      <p><span data-start="07:20.110" data-end="07:21.530" data-start-seconds="440">And it's not 100% accurate.</span></p>
      <p><span data-start="07:21.530" data-end="07:23.150" data-start-seconds="441">But it gets me 90%</span> <span data-start="07:21.530" data-end="07:23.150" data-start-seconds="441">of the way there</span> <span data-start="07:23.150" data-end="07:26.710" data-start-seconds="443">without annoying</span> <span data-start="07:23.150" data-end="07:26.710" data-start-seconds="443">me, which is-- I</span> <span data-start="07:26.710" data-end="07:28.670" data-start-seconds="446">develop in Chrome,</span> <span data-start="07:26.710" data-end="07:28.670" data-start-seconds="446">because it's easiest</span> <span data-start="07:28.670" data-end="07:29.836" data-start-seconds="448">for me to develop in Chrome.</span></p>
      <p><span data-start="07:29.836" data-end="07:32.600" data-start-seconds="449">I like their developer</span> <span data-start="07:29.836" data-end="07:32.600" data-start-seconds="449">tools the most.</span></p>
      <p><span data-start="07:32.600" data-end="07:34.640" data-start-seconds="452">And Voiceover is</span> <span data-start="07:32.600" data-end="07:34.640" data-start-seconds="452">meant for Safari.</span></p>
      <p><span data-start="07:34.640" data-end="07:35.870" data-start-seconds="454">It's not meant for Chrome.</span></p>
      <p><span data-start="07:35.870" data-end="07:40.110" data-start-seconds="455">However I leave Voiceover on</span> <span data-start="07:35.870" data-end="07:40.110" data-start-seconds="455">with just the text showing.</span></p>
      <p><span data-start="07:40.110" data-end="07:41.510" data-start-seconds="460">So I turn my audio off.</span></p>
      <p><span data-start="07:41.510" data-end="07:43.310" data-start-seconds="461">And I have the text there.</span></p>
      <p><span data-start="07:43.310" data-end="07:47.150" data-start-seconds="463">You saw the tech show up</span> <span data-start="07:43.310" data-end="07:47.150" data-start-seconds="463">in that little black box</span> <span data-start="07:47.150" data-end="07:49.270" data-start-seconds="467">with the white text</span> <span data-start="07:47.150" data-end="07:49.270" data-start-seconds="467">with the whatever.</span></p>
      <p><span data-start="07:49.270" data-end="07:50.950" data-start-seconds="469">I'm jet lag.</span></p>
      <p><span data-start="07:50.950" data-end="07:52.266" data-start-seconds="470">Hello.</span></p>
      <p><span data-start="07:52.266" data-end="07:54.900" data-start-seconds="472">Cognitive overload.</span></p>
      <p><span data-start="07:54.900" data-end="07:57.000" data-start-seconds="474">And so I just have</span> <span data-start="07:54.900" data-end="07:57.000" data-start-seconds="474">it on all the time</span> <span data-start="07:57.000" data-end="07:59.040" data-start-seconds="477">when I'm developing</span> <span data-start="07:57.000" data-end="07:59.040" data-start-seconds="477">actual forms and stuff.</span></p>
      <p><span data-start="07:59.040" data-end="08:00.270" data-start-seconds="479">So it's reading it to me.</span></p>
      <p><span data-start="08:00.270" data-end="08:01.550" data-start-seconds="480">And I can see what I'm doing.</span></p>
      <p><span data-start="08:01.550" data-end="08:03.890" data-start-seconds="481">And I'm like, oh, I forgot that.</span></p>
      <p><span data-start="08:03.890" data-end="08:11.250" data-start-seconds="483">And then I use a few CSS tricks,</span> <span data-start="08:03.890" data-end="08:11.250" data-start-seconds="483">(which is img)not parentheses,</span> <span data-start="08:11.250" data-end="08:16.580" data-start-seconds="491">brackets, Alt. Type that out.</span></p>
      <p><span data-start="08:16.580" data-end="08:17.820" data-start-seconds="496">She got it.</span></p>
      <p><span data-start="08:17.820" data-end="08:19.380" data-start-seconds="497">There's another</span> <span data-start="08:17.820" data-end="08:19.380" data-start-seconds="497">hot key for that.</span></p>
      <p><span data-start="08:19.380" data-end="08:21.367" data-start-seconds="499">And then like border</span> <span data-start="08:19.380" data-end="08:21.367" data-start-seconds="499">red, 20 pixels.</span></p>
      <p><span data-start="08:21.367" data-end="08:23.450" data-start-seconds="501">And then if I have an image</span> <span data-start="08:21.367" data-end="08:23.450" data-start-seconds="501">with an Alt attribute,</span> <span data-start="08:23.450" data-end="08:25.160" data-start-seconds="503">it's 20 pixels, red border.</span></p>
      <p><span data-start="08:25.160" data-end="08:27.180" data-start-seconds="505">It's like, hello.</span></p>
      <p><span data-start="08:27.180" data-end="08:33.190" data-start-seconds="507">And then Alice Boxhall from</span> <span data-start="08:27.180" data-end="08:33.190" data-start-seconds="507">Chrome, or from Google.</span></p>
      <p><span data-start="08:33.190" data-end="08:39.320" data-start-seconds="513">She developed an</span> <span data-start="08:33.190" data-end="08:39.320" data-start-seconds="513">extension for Chrome.</span></p>
      <p><span data-start="08:39.320" data-end="08:41.789" data-start-seconds="519">And I don't know-- it's</span> <span data-start="08:39.320" data-end="08:41.789" data-start-seconds="519">supposed to be becoming</span> <span data-start="08:41.789" data-end="08:43.789" data-start-seconds="521">native in the developer tools.</span></p>
      <p><span data-start="08:43.789" data-end="08:46.530" data-start-seconds="523">If it's not there yet,</span> <span data-start="08:43.789" data-end="08:46.530" data-start-seconds="523">you can just add it on.</span></p>
      <p><span data-start="08:46.530" data-end="08:47.680" data-start-seconds="526">But it's in your tools.</span></p>
      <p><span data-start="08:47.680" data-end="08:53.410" data-start-seconds="527">And it tells you what the text</span> <span data-start="08:47.680" data-end="08:53.410" data-start-seconds="527">that's going to be read is.</span></p>
      <p><span data-start="08:53.410" data-end="08:56.550" data-start-seconds="533">And then the Paciello Group</span> <span data-start="08:53.410" data-end="08:56.550" data-start-seconds="533">and DQ, their websites</span> <span data-start="08:56.550" data-end="08:59.160" data-start-seconds="536">have a lot of information.</span></p>
      <p><span data-start="08:59.160" data-end="08:59.660" data-start-seconds="539">Yeah.</span></p>
      <p><span data-start="08:59.660" data-end="09:02.630" data-start-seconds="539">There's tools that you can use</span> <span data-start="08:59.660" data-end="09:02.630" data-start-seconds="539">to help you find these things.</span></p>
      <p><span data-start="09:02.630" data-end="09:07.090" data-start-seconds="542">Like if you respond well to</span> <span data-start="09:02.630" data-end="09:07.090" data-start-seconds="542">a checklist of things wrong,</span> <span data-start="09:07.090" data-end="09:10.250" data-start-seconds="547">you might benefit from a tool</span> <span data-start="09:07.090" data-end="09:10.250" data-start-seconds="547">like the Chrome Accessibility</span> <span data-start="09:10.250" data-end="09:11.120" data-start-seconds="550">Developer tools.</span></p>
      <p><span data-start="09:11.120" data-end="09:13.030" data-start-seconds="551">Karl works on a tool</span> <span data-start="09:11.120" data-end="09:13.030" data-start-seconds="551">called Tenon.</span></p>
      <p><span data-start="09:13.030" data-end="09:15.130" data-start-seconds="553">I work on another tool</span> <span data-start="09:13.030" data-end="09:15.130" data-start-seconds="553">called Axe.</span></p>
      <p><span data-start="09:15.130" data-end="09:18.285" data-start-seconds="555">You have your choices that</span> <span data-start="09:15.130" data-end="09:18.285" data-start-seconds="555">you can use to test things,</span> <span data-start="09:18.285" data-end="09:20.660" data-start-seconds="558">so that then you have something</span> <span data-start="09:18.285" data-end="09:20.660" data-start-seconds="558">to react to before you're</span> <span data-start="09:20.660" data-end="09:22.120" data-start-seconds="560">sending it out broken.</span></p>
      <p><span data-start="09:22.120" data-end="09:24.940" data-start-seconds="562">As a developer, you can arm</span> <span data-start="09:22.120" data-end="09:24.940" data-start-seconds="562">yourself with this knowledge.</span></p>
      <p><span data-start="09:24.940" data-end="09:26.720" data-start-seconds="564">But using these tools</span> <span data-start="09:24.940" data-end="09:26.720" data-start-seconds="564">that will help you</span> <span data-start="09:26.720" data-end="09:28.620" data-start-seconds="566">from having to pore</span> <span data-start="09:26.720" data-end="09:28.620" data-start-seconds="566">over source code</span> <span data-start="09:28.620" data-end="09:31.300" data-start-seconds="568">and figure out if you've</span> <span data-start="09:28.620" data-end="09:31.300" data-start-seconds="568">got an Aria attribute wrong,</span> <span data-start="09:31.300" data-end="09:33.010" data-start-seconds="571">or if you used it incorrectly.</span></p>
      <p><span data-start="09:33.010" data-end="09:37.380" data-start-seconds="573">Because frankly, we can't hang</span> <span data-start="09:33.010" data-end="09:37.380" data-start-seconds="573">on to all of those details.</span></p>
      <p><span data-start="09:37.380" data-end="09:39.670" data-start-seconds="577">So using a tool to</span> <span data-start="09:37.380" data-end="09:39.670" data-start-seconds="577">help you find problems</span> <span data-start="09:39.670" data-end="09:41.930" data-start-seconds="579">is a good recommendation.</span></p>
      <p><span data-start="09:41.930" data-end="09:45.690" data-start-seconds="581">And so the accessibility</span> <span data-start="09:41.930" data-end="09:45.690" data-start-seconds="581">tree was new to me.</span></p>
      <p><span data-start="09:45.690" data-end="09:48.350" data-start-seconds="585">I have to hold my hands up.</span></p>
      <p><span data-start="09:48.350" data-end="09:51.020" data-start-seconds="588">How much should we as</span> <span data-start="09:48.350" data-end="09:51.020" data-start-seconds="588">developers understand</span> <span data-start="09:51.020" data-end="09:52.670" data-start-seconds="591">the accessibility tree?</span> <span data-start="09:52.670" data-end="09:55.790" data-start-seconds="592">Where is it reasonable for us</span> <span data-start="09:52.670" data-end="09:55.790" data-start-seconds="592">to take our responsibility?</span> <span data-start="09:55.790" data-end="09:58.100" data-start-seconds="595">I mean, should we</span> <span data-start="09:55.790" data-end="09:58.100" data-start-seconds="595">understand that it's there,</span> <span data-start="09:58.100" data-end="09:59.945" data-start-seconds="598">and it's doing a job.</span></p>
      <p><span data-start="09:59.945" data-end="10:01.570" data-start-seconds="599">And there are principles</span> <span data-start="09:59.945" data-end="10:01.570" data-start-seconds="599">that we should</span> <span data-start="10:01.570" data-end="10:02.930" data-start-seconds="601">do that take care of that.</span></p>
      <p><span data-start="10:02.930" data-end="10:05.396" data-start-seconds="602">Or should we understand</span> <span data-start="10:02.930" data-end="10:05.396" data-start-seconds="602">the accessibility tree</span> <span data-start="10:05.396" data-end="10:06.270" data-start-seconds="605">in a bit more detail.</span></p>
      <p><span data-start="10:06.270" data-end="10:07.400" data-start-seconds="606">What's reasonable,</span> <span data-start="10:06.270" data-end="10:07.400" data-start-seconds="606">would you say?</span> <span data-start="10:07.400" data-end="10:08.983" data-start-seconds="607">I think with a</span> <span data-start="10:07.400" data-end="10:08.983" data-start-seconds="607">reasonable thing would</span> <span data-start="10:08.983" data-end="10:10.380" data-start-seconds="608">be to start with</span> <span data-start="10:08.983" data-end="10:10.380" data-start-seconds="608">a screen reader,</span> <span data-start="10:10.380" data-end="10:13.590" data-start-seconds="610">because that's the end goal of</span> <span data-start="10:10.380" data-end="10:13.590" data-start-seconds="610">that structure is to provide</span> <span data-start="10:13.590" data-end="10:15.440" data-start-seconds="613">information to a screen reader.</span></p>
      <p><span data-start="10:15.440" data-end="10:17.424" data-start-seconds="615">I just happen to b e</span> <span data-start="10:15.440" data-end="10:17.424" data-start-seconds="615">really geeky and nerd out</span> <span data-start="10:17.424" data-end="10:18.340" data-start-seconds="617">on that kind of stuff.</span></p>
      <p><span data-start="10:18.340" data-end="10:20.190" data-start-seconds="618">So I thought it was interesting.</span></p>
      <p><span data-start="10:20.190" data-end="10:22.200" data-start-seconds="620">But if you're just</span> <span data-start="10:20.190" data-end="10:22.200" data-start-seconds="620">getting started with it,</span> <span data-start="10:22.200" data-end="10:24.930" data-start-seconds="622">it's important to know</span> <span data-start="10:22.200" data-end="10:24.930" data-start-seconds="622">that that thing exists.</span></p>
      <p><span data-start="10:24.930" data-end="10:27.490" data-start-seconds="624">Obviously, that was</span> <span data-start="10:24.930" data-end="10:27.490" data-start-seconds="624">what my talk was about.</span></p>
      <p><span data-start="10:27.490" data-end="10:29.585" data-start-seconds="627">But I think getting started</span> <span data-start="10:27.490" data-end="10:29.585" data-start-seconds="627">with a screen reader</span> <span data-start="10:29.585" data-end="10:33.050" data-start-seconds="629">so that you know why the</span> <span data-start="10:29.585" data-end="10:33.050" data-start-seconds="629">accessibility tree exists.</span></p>
      <p><span data-start="10:33.050" data-end="10:34.570" data-start-seconds="633">That's a really</span> <span data-start="10:33.050" data-end="10:34.570" data-start-seconds="633">good place to start.</span></p>
      <p><span data-start="10:36.250" data-end="10:39.010" data-start-seconds="636">I think that people should</span> <span data-start="10:36.250" data-end="10:39.010" data-start-seconds="636">understand the Dom more.</span></p>
      <p><span data-start="10:39.010" data-end="10:42.550" data-start-seconds="639">Or the principles of</span> <span data-start="10:39.010" data-end="10:42.550" data-start-seconds="639">object-oriented programming.</span></p>
      <p><span data-start="10:42.550" data-end="10:47.290" data-start-seconds="642">In that a lot of people think</span> <span data-start="10:42.550" data-end="10:47.290" data-start-seconds="642">I've created some HTML and CSS</span> <span data-start="10:47.290" data-end="10:47.960" data-start-seconds="647">and JavaScript.</span></p>
      <p><span data-start="10:47.960" data-end="10:49.760" data-start-seconds="647">And I'm doing all</span> <span data-start="10:47.960" data-end="10:49.760" data-start-seconds="647">this cool stuff,</span> <span data-start="10:49.760" data-end="10:51.680" data-start-seconds="649">when the reality is</span> <span data-start="10:49.760" data-end="10:51.680" data-start-seconds="649">that you're actually</span> <span data-start="10:51.680" data-end="10:54.030" data-start-seconds="651">making a polite</span> <span data-start="10:51.680" data-end="10:54.030" data-start-seconds="651">request to the browser</span> <span data-start="10:54.030" data-end="10:58.000" data-start-seconds="654">to say please implement the</span> <span data-start="10:54.030" data-end="10:58.000" data-start-seconds="654">proper objects on the screen</span> <span data-start="10:58.000" data-end="11:01.110" data-start-seconds="658">based upon this text</span> <span data-start="10:58.000" data-end="11:01.110" data-start-seconds="658">file I've sent you.</span></p>
      <p><span data-start="11:01.110" data-end="11:03.730" data-start-seconds="661">And towards the point that</span> <span data-start="11:01.110" data-end="11:03.730" data-start-seconds="661">Marcy had made in her talk</span> <span data-start="11:03.730" data-end="11:05.140" data-start-seconds="663">was, some of the stuff.</span></p>
      <p><span data-start="11:05.140" data-end="11:06.870" data-start-seconds="665">You get the</span> <span data-start="11:05.140" data-end="11:06.870" data-start-seconds="665">accessibility for free.</span></p>
      <p><span data-start="11:06.870" data-end="11:08.820" data-start-seconds="666">You know, that</span> <span data-start="11:06.870" data-end="11:08.820" data-start-seconds="666">long-winded description</span> <span data-start="11:08.820" data-end="11:10.760" data-start-seconds="668">that I gave of the</span> <span data-start="11:08.820" data-end="11:10.760" data-start-seconds="668">select element,</span> <span data-start="11:10.760" data-end="11:14.510" data-start-seconds="670">all that stuff is based</span> <span data-start="11:10.760" data-end="11:14.510" data-start-seconds="670">upon different browsers'</span> <span data-start="11:14.510" data-end="11:16.440" data-start-seconds="674">implementation of those objects.</span></p>
      <p><span data-start="11:16.440" data-end="11:19.645" data-start-seconds="676">And so there the</span> <span data-start="11:16.440" data-end="11:19.645" data-start-seconds="676">Dom specifications</span> <span data-start="11:19.645" data-end="11:22.830" data-start-seconds="679">is just a series of interfaces</span> <span data-start="11:19.645" data-end="11:22.830" data-start-seconds="679">that the browser vendors then</span> <span data-start="11:22.830" data-end="11:23.510" data-start-seconds="682">implement.</span></p>
      <p><span data-start="11:23.510" data-end="11:24.960" data-start-seconds="683">But it implements</span> <span data-start="11:23.510" data-end="11:24.960" data-start-seconds="683">it in a way that</span> <span data-start="11:24.960" data-end="11:28.429" data-start-seconds="684">exposes all sorts of important</span> <span data-start="11:24.960" data-end="11:28.429" data-start-seconds="684">accessibility information.</span></p>
      <p><span data-start="11:28.429" data-end="11:29.220" data-start-seconds="688">What is this thing?</span> <span data-start="11:29.220" data-end="11:29.980" data-start-seconds="689">And what does it do?</span> <span data-start="11:29.980" data-end="11:30.479" data-start-seconds="689">Right.</span></p>
      <p><span data-start="11:30.479" data-end="11:32.260" data-start-seconds="690">It's the name, the</span> <span data-start="11:30.479" data-end="11:32.260" data-start-seconds="690">state, the role,</span> <span data-start="11:32.260" data-end="11:35.210" data-start-seconds="692">and the value of the object.</span></p>
      <p><span data-start="11:35.210" data-end="11:38.490" data-start-seconds="695">And the accessibility</span> <span data-start="11:35.210" data-end="11:38.490" data-start-seconds="695">tree is the manifestation</span> <span data-start="11:38.490" data-end="11:42.180" data-start-seconds="698">of that, really,</span> <span data-start="11:38.490" data-end="11:42.180" data-start-seconds="698">is the part of how</span> <span data-start="11:42.180" data-end="11:44.320" data-start-seconds="702">it communicates all</span> <span data-start="11:42.180" data-end="11:44.320" data-start-seconds="702">of this information</span> <span data-start="11:44.320" data-end="11:46.000" data-start-seconds="704">to the assistive technology.</span></p>
      <p><span data-start="11:46.000" data-end="11:49.200" data-start-seconds="706">And I think that that</span> <span data-start="11:46.000" data-end="11:49.200" data-start-seconds="706">closeness to the Dom,</span> <span data-start="11:49.200" data-end="11:51.480" data-start-seconds="709">and understanding the</span> <span data-start="11:49.200" data-end="11:51.480" data-start-seconds="709">Dom, is really important.</span></p>
      <p><span data-start="11:51.480" data-end="11:53.280" data-start-seconds="711">I mean, I kind of</span> <span data-start="11:51.480" data-end="11:53.280" data-start-seconds="711">classify myself</span> <span data-start="11:53.280" data-end="11:55.202" data-start-seconds="713">as a bit of a</span> <span data-start="11:53.280" data-end="11:55.202" data-start-seconds="713">traditionalist when it comes</span> <span data-start="11:55.202" data-end="11:56.410" data-start-seconds="715">to building stuff on the web.</span></p>
      <p><span data-start="11:56.410" data-end="11:59.180" data-start-seconds="716">And some people might call</span> <span data-start="11:56.410" data-end="11:59.180" data-start-seconds="716">me a bit of a fuddy duddy.</span></p>
      <p><span data-start="11:59.180" data-end="12:01.079" data-start-seconds="719">That's fine.</span></p>
      <p><span data-start="12:01.079" data-end="12:02.370" data-start-seconds="721">That's actually your nickname.</span></p>
      <p><span data-start="12:02.370" data-end="12:02.710" data-start-seconds="722">Yeah.</span></p>
      <p><span data-start="12:02.710" data-end="12:03.751" data-start-seconds="722">One of my many nicknames.</span></p>
      <p><span data-start="12:06.700" data-end="12:12.990" data-start-seconds="726">So I really like seeing that</span> <span data-start="12:06.700" data-end="12:12.990" data-start-seconds="726">your a contributor to angular,</span> <span data-start="12:12.990" data-end="12:15.120" data-start-seconds="732">but then you've got such</span> <span data-start="12:12.990" data-end="12:15.120" data-start-seconds="732">focus on accessibility.</span></p>
      <p><span data-start="12:15.120" data-end="12:17.470" data-start-seconds="735">And maybe this is just</span> <span data-start="12:15.120" data-end="12:17.470" data-start-seconds="735">a complete misconception</span> <span data-start="12:17.470" data-end="12:18.310" data-start-seconds="737">on my part.</span></p>
      <p><span data-start="12:18.310" data-end="12:21.540" data-start-seconds="738">But I kind of think of angular</span> <span data-start="12:18.310" data-end="12:21.540" data-start-seconds="738">tools like angular as</span> <span data-start="12:21.540" data-end="12:23.100" data-start-seconds="741">an abstraction away</span> <span data-start="12:21.540" data-end="12:23.100" data-start-seconds="741">from the Dom that</span> <span data-start="12:23.100" data-end="12:24.650" data-start-seconds="743">means that people</span> <span data-start="12:23.100" data-end="12:24.650" data-start-seconds="743">often have less</span> <span data-start="12:24.650" data-end="12:26.690" data-start-seconds="744">of an understanding of</span> <span data-start="12:24.650" data-end="12:26.690" data-start-seconds="744">the Dom, to your point.</span></p>
      <p><span data-start="12:26.690" data-end="12:29.941" data-start-seconds="746">And so maybe it's unfair of me</span> <span data-start="12:26.690" data-end="12:29.941" data-start-seconds="746">to think of tools like Angular</span> <span data-start="12:29.941" data-end="12:32.190" data-start-seconds="749">as something that can get</span> <span data-start="12:29.941" data-end="12:32.190" data-start-seconds="749">in the way of accessibility.</span></p>
      <p><span data-start="12:32.190" data-end="12:35.610" data-start-seconds="752">Is that fair to say that</span> <span data-start="12:32.190" data-end="12:35.610" data-start-seconds="752">that's-- is that a fair</span> <span data-start="12:35.610" data-end="12:36.110" data-start-seconds="755">criticism?</span> <span data-start="12:36.110" data-end="12:38.927" data-start-seconds="756">Or have I completely</span> <span data-start="12:36.110" data-end="12:38.927" data-start-seconds="756">mischaracterized</span> <span data-start="12:38.927" data-end="12:39.760" data-start-seconds="758">those kind of tools?</span> <span data-start="12:39.760" data-end="12:44.520" data-start-seconds="759">I think Angular made-- it's a</span> <span data-start="12:39.760" data-end="12:44.520" data-start-seconds="759">tool that people who might not</span> <span data-start="12:44.520" data-end="12:46.650" data-start-seconds="764">be as familiar with the Dom.</span></p>
      <p><span data-start="12:46.650" data-end="12:50.740" data-start-seconds="766">Making it easier to build really</span> <span data-start="12:46.650" data-end="12:50.740" data-start-seconds="766">rich JavaScript apps, where</span> <span data-start="12:50.740" data-end="12:53.670" data-start-seconds="770">sometimes you don't</span> <span data-start="12:50.740" data-end="12:53.670" data-start-seconds="770">have the documentation</span> <span data-start="12:53.670" data-end="12:56.510" data-start-seconds="773">or support that you would need</span> <span data-start="12:53.670" data-end="12:56.510" data-start-seconds="773">to learn what is this thing</span> <span data-start="12:56.510" data-end="12:57.790" data-start-seconds="776">and what does it do.</span></p>
      <p><span data-start="12:57.790" data-end="13:00.420" data-start-seconds="777">And so I think the challenge</span> <span data-start="12:57.790" data-end="13:00.420" data-start-seconds="777">is that we're bringing people</span> <span data-start="13:00.420" data-end="13:02.180" data-start-seconds="780">into web development</span> <span data-start="13:00.420" data-end="13:02.180" data-start-seconds="780">who maybe don't</span> <span data-start="13:02.180" data-end="13:04.250" data-start-seconds="782">know all of those details.</span></p>
      <p><span data-start="13:04.250" data-end="13:07.630" data-start-seconds="784">And so as framework</span> <span data-start="13:04.250" data-end="13:07.630" data-start-seconds="784">authors, we have a burden</span> <span data-start="13:07.630" data-end="13:10.040" data-start-seconds="787">to create documentation</span> <span data-start="13:07.630" data-end="13:10.040" data-start-seconds="787">that teaches people</span> <span data-start="13:10.040" data-end="13:10.860" data-start-seconds="790">how to do it right.</span></p>
      <p><span data-start="13:10.860" data-end="13:14.790" data-start-seconds="790">And I think that is</span> <span data-start="13:10.860" data-end="13:14.790" data-start-seconds="790">an ongoing battle.</span></p>
      <p><span data-start="13:14.790" data-end="13:16.650" data-start-seconds="794">But I think that</span> <span data-start="13:14.790" data-end="13:16.650" data-start-seconds="794">you know, people</span> <span data-start="13:16.650" data-end="13:19.750" data-start-seconds="796">are starting to learn</span> <span data-start="13:16.650" data-end="13:19.750" data-start-seconds="796">from like angular one.</span></p>
      <p><span data-start="13:19.750" data-end="13:22.070" data-start-seconds="799">There was not very good</span> <span data-start="13:19.750" data-end="13:22.070" data-start-seconds="799">documentation for that.</span></p>
      <p><span data-start="13:22.070" data-end="13:23.180" data-start-seconds="802">It came in later.</span></p>
      <p><span data-start="13:23.180" data-end="13:24.940" data-start-seconds="803">But that ship had</span> <span data-start="13:23.180" data-end="13:24.940" data-start-seconds="803">sailed in a way</span> <span data-start="13:24.940" data-end="13:27.330" data-start-seconds="804">that we taught people</span> <span data-start="13:24.940" data-end="13:27.330" data-start-seconds="804">how to do it incorrectly.</span></p>
      <p><span data-start="13:27.330" data-end="13:29.880" data-start-seconds="807">So part of the effort moving</span> <span data-start="13:27.330" data-end="13:29.880" data-start-seconds="807">forward with Angular II</span> <span data-start="13:29.880" data-end="13:33.450" data-start-seconds="809">is to try and make that more</span> <span data-start="13:29.880" data-end="13:33.450" data-start-seconds="809">clear how to do it right.</span></p>
      <p><span data-start="13:33.450" data-end="13:36.060" data-start-seconds="813">And instead of automatically</span> <span data-start="13:33.450" data-end="13:36.060" data-start-seconds="813">fixing it for you</span> <span data-start="13:36.060" data-end="13:39.330" data-start-seconds="816">with things like ngAria,</span> <span data-start="13:36.060" data-end="13:39.330" data-start-seconds="816">putting more effort</span> <span data-start="13:39.330" data-end="13:43.400" data-start-seconds="819">into test tools and things that</span> <span data-start="13:39.330" data-end="13:43.400" data-start-seconds="819">become part of your development</span> <span data-start="13:43.400" data-end="13:45.650" data-start-seconds="823">workflow to tell you</span> <span data-start="13:43.400" data-end="13:45.650" data-start-seconds="823">that you did it wrong.</span></p>
      <p><span data-start="13:45.650" data-end="13:49.320" data-start-seconds="825">Instead of just hoping that</span> <span data-start="13:45.650" data-end="13:49.320" data-start-seconds="825">the module will fix it for you.</span></p>
      <p><span data-start="13:49.320" data-end="13:50.160" data-start-seconds="829">Makes sense.</span></p>
      <p><span data-start="13:50.160" data-end="13:51.120" data-start-seconds="830">We're going to have</span> <span data-start="13:50.160" data-end="13:51.120" data-start-seconds="830">to leave it there,</span> <span data-start="13:51.120" data-end="13:52.330" data-start-seconds="831">because we're out of time.</span></p>
      <p><span data-start="13:52.330" data-end="13:53.420" data-start-seconds="832">So thanks once again.</span></p>
      <p><span data-start="13:53.420" data-end="13:54.128" data-start-seconds="833">Thanks, everyone.</span></p>
      <p><span data-start="13:54.128" data-end="13:57.488" data-start-seconds="834">To Carl, to Marcy, to Estelle.</span></p>
      <p><span data-start="13:57.488" data-end="13:59.392" data-start-seconds="837">[APPLAUSE]</span> <span data-start="13:59.392" data-end="14:00.770" data-start-seconds="839">You can stay there if you like.</span></p>
      <p><span data-start="14:00.770" data-end="14:02.620" data-start-seconds="840">Or you can--</span>     </div>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2016-spring/sessions/interactive-panel-discussion-accessible-performance.md" id="comment">
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
    <div id="conference-menu" lang="en">
     <h2>Fronteers Spring Conference</h2>
     <ul>
      <li><a href="/congres/2016-spring">Home</a></li>
      <li><a href="/congres/2016-spring/news" title="Fronteers Spring Conference News">News</a></li>
      <li><a href="/congres/2016-spring/schedule" title="Fronteers Spring Conference Schedule">Schedule</a></li>
      <li class="current"><a href="/congres/2016-spring/sessions" title="Fronteers Spring Conference Sessions" class="current">Sessions</a></li>
      <li><a href="/congres/2016-spring/speakers" title="Fronteers Spring Conference Speakers">Speakers</a></li>
      <li><a href="/congres/2016-spring/videos" title="Fronteers Spring Conference 2016 Videos">Videos</a></li>
      <li><a href="/congres/2016-spring/venue" title="Fronteers Spring Conference Venue">Venue</a></li>
      <li><a href="/congres/2016-spring/colophon" title="Fronteers Spring Conference Team">Team</a></li>
      <li><a href="/congres/2016-spring/tickets" title="Fronteers Spring Conference Tickets">Tickets</a></li>
      <li><a href="/congres/2016-spring/live-transcription" title="Fronteers Spring Conference Live Transcription">Live Transcription</a></li>
      <li><a href="/congres/2016-spring/code-of-conduct" title="Fronteers Code of Conduct">Code of Conduct</a></li>
      <li><a href="/congres/2016-spring/contact">Contact</a></li>
      <li><a href="/congres/2016-spring/terms-and-conditions" title="Fronteers Spring Conference Terms and Conditions">Terms and Conditions</a></li>
     </ul>
    </div>
    <div lang="en">
     <h2>Elsewhere</h2>
     <ul>
      <li><a href="https://twitter.com/FronteersConf">Twitter</a></li>
      <li><a href="https://vimeo.com/fronteers/videos">Vimeo</a></li>
      <li><a href="https://itunes.apple.com/nl/podcast/fronteers-videos/id1136212068?l=en">Podcast on iTunes</a></li>
      <li><a href="http://webchat.freenode.net/?channels=fronteers">IRC</a></li>
     </ul>
    </div>
    <div lang="en">
     <h2>Fronteers</h2>
     <ul>
      <li><a href="/about">About Fronteers</a></li>
      <li><a href="/">Homepage (NL)</a></li>
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
