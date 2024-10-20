<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>Towards Faster, Safer Websites by Yan Zhu · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p1706">
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
     <h2>Towards Faster, Safer Websites by Yan Zhu</h2>
     <video width="640" height="360" src="/_downloads/2016/spring-conference/yan-zhu-towards-faster-safer-websites.mp4" controls>
      <track src="/congres/2016-spring/sessions/towards-faster-safer-websites-by-yan-zhu.vtt" default>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2016/spring-conference/yan-zhu-towards-faster-safer-websites.mp4">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <p class="note">This is the first talk in <a href="/congres/2016-spring/videos/technical-performance">a set of three talks on Technical Performance</a> delivered on April 1, 2016 at Fronteers Spring Conference in Amsterdam</p>
     <ul>
      <li><a href="https://vimeo.com/163232536">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2016/spring-conference/audio/yan-zhu-towards-faster-safer-websites.mp3">Download audio</a> (MP3, 20MB)</li>
     </ul>
     <p>Everyone in 2016 knows that websites should use HTTPS. However, there is a common misconception that TLS and other security measures slow down both web developers and page load times. This talk will show you some easy tricks to make your site more secure without sacrificing performance.</p>
     <h3>Transcript</h3>
     <div class="transcript">
      <p><span data-start="00:00.700" data-end="00:04.710" data-start-seconds="0">And our first speaker,</span> <span data-start="00:00.700" data-end="00:04.710" data-start-seconds="0">over from the states,</span> <span data-start="00:04.710" data-end="00:07.660" data-start-seconds="4">is Yan Zhu, who</span> <span data-start="00:04.710" data-end="00:07.660" data-start-seconds="4">works at Brave, which</span> <span data-start="00:07.660" data-end="00:09.730" data-start-seconds="7">is a company that</span> <span data-start="00:07.660" data-end="00:09.730" data-start-seconds="7">builds a browser which</span> <span data-start="00:09.730" data-end="00:13.780" data-start-seconds="9">is very much optimized for</span> <span data-start="00:09.730" data-end="00:13.780" data-start-seconds="9">performance and for security.</span></p>
      <p><span data-start="00:13.780" data-end="00:16.350" data-start-seconds="13">And Yan is really prolific.</span></p>
      <p><span data-start="00:16.350" data-end="00:20.210" data-start-seconds="16">A member of the Electronic</span> <span data-start="00:16.350" data-end="00:20.210" data-start-seconds="16">Freedom Foundation,</span> <span data-start="00:20.210" data-end="00:22.320" data-start-seconds="20">worked on SecureDrop,</span> <span data-start="00:20.210" data-end="00:22.320" data-start-seconds="20">Let's Encrypt,</span> <span data-start="00:22.320" data-end="00:28.030" data-start-seconds="22">bringing digital certificate</span> <span data-start="00:22.320" data-end="00:28.030" data-start-seconds="22">to the masses, former member</span> <span data-start="00:28.030" data-end="00:32.210" data-start-seconds="28">of the W3C tag, just someone</span> <span data-start="00:28.030" data-end="00:32.210" data-start-seconds="28">who's very, very busy</span> <span data-start="00:32.210" data-end="00:33.420" data-start-seconds="32">and prolific.</span></p>
      <p><span data-start="00:33.420" data-end="00:37.210" data-start-seconds="33">So here today to talk</span> <span data-start="00:33.420" data-end="00:37.210" data-start-seconds="33">about tools faster, safer</span> <span data-start="00:37.210" data-end="00:40.070" data-start-seconds="37">websites, please welcome</span> <span data-start="00:37.210" data-end="00:40.070" data-start-seconds="37">Yan Zhu everyone.</span></p>
      <p><span data-start="00:40.070" data-end="00:40.620" data-start-seconds="40">Thank you.</span></p>
      <p><span data-start="00:45.230" data-end="00:48.530" data-start-seconds="45">So I have to unlock like</span> <span data-start="00:45.230" data-end="00:48.530" data-start-seconds="45">four different things</span> <span data-start="00:48.530" data-end="00:49.890" data-start-seconds="48">before my presentation starts.</span></p>
      <p><span data-start="00:49.890" data-end="00:52.650" data-start-seconds="49">So hopefully less than</span> <span data-start="00:49.890" data-end="00:52.650" data-start-seconds="49">half of this presentation</span> <span data-start="00:52.650" data-end="00:55.523" data-start-seconds="52">will be me typing in</span> <span data-start="00:52.650" data-end="00:55.523" data-start-seconds="52">various passwords.</span></p>
      <p><span data-start="00:55.523" data-end="00:56.942" data-start-seconds="55">Sorry about that.</span></p>
      <p><span data-start="01:01.680" data-end="01:02.960" data-start-seconds="61">I have to type in-- OK, great.</span></p>
      <p><span data-start="01:02.960" data-end="01:07.160" data-start-seconds="62">Now we can finally</span> <span data-start="01:02.960" data-end="01:07.160" data-start-seconds="62">start, hopefully.</span></p>
      <p><span data-start="01:07.160" data-end="01:11.130" data-start-seconds="67">So my presentation is called</span> <span data-start="01:07.160" data-end="01:11.130" data-start-seconds="67">How to Make Websites Slow</span> <span data-start="01:11.130" data-end="01:12.540" data-start-seconds="71">and Unsafe.</span></p>
      <p><span data-start="01:12.540" data-end="01:13.551" data-start-seconds="72">Not really.</span></p>
      <p><span data-start="01:13.551" data-end="01:14.300" data-start-seconds="73">It's April Fools'.</span></p>
      <p><span data-start="01:14.300" data-end="01:16.304" data-start-seconds="74">Happy April Fools', everyone.</span></p>
      <p><span data-start="01:16.304" data-end="01:18.960" data-start-seconds="76">Yeah, Do they have that</span> <span data-start="01:16.304" data-end="01:18.960" data-start-seconds="76">in the Netherlands?</span> <span data-start="01:18.960" data-end="01:21.510" data-start-seconds="78">Probably had it before</span> <span data-start="01:18.960" data-end="01:21.510" data-start-seconds="78">the US, actually.</span></p>
      <p><span data-start="01:21.510" data-end="01:24.110" data-start-seconds="81">So is the web fast, yet?</span> <span data-start="01:24.110" data-end="01:27.420" data-start-seconds="84">Who thinks it's fast?</span> <span data-start="01:27.420" data-end="01:28.947" data-start-seconds="87">Who doesn't?</span> <span data-start="01:28.947" data-end="01:30.530" data-start-seconds="88">Well, that's kind</span> <span data-start="01:28.947" data-end="01:30.530" data-start-seconds="88">of an open question.</span></p>
      <p><span data-start="01:30.530" data-end="01:33.790" data-start-seconds="90">And that's not actually one I'm</span> <span data-start="01:30.530" data-end="01:33.790" data-start-seconds="90">going to address in this talk.</span></p>
      <p><span data-start="01:33.790" data-end="01:35.810" data-start-seconds="93">But let's actually</span> <span data-start="01:33.790" data-end="01:35.810" data-start-seconds="93">just look at some data</span> <span data-start="01:35.810" data-end="01:38.090" data-start-seconds="95">about how fast the web is.</span></p>
      <p><span data-start="01:38.090" data-end="01:40.800" data-start-seconds="98">This again, is from</span> <span data-start="01:38.090" data-end="01:40.800" data-start-seconds="98">its HTTP Archive, which</span> <span data-start="01:40.800" data-end="01:44.540" data-start-seconds="100">Estelle pointed out earlier.</span></p>
      <p><span data-start="01:44.540" data-end="01:49.820" data-start-seconds="104">So from 2014 to 2016, you</span> <span data-start="01:44.540" data-end="01:49.820" data-start-seconds="104">see that the size of requests</span> <span data-start="01:49.820" data-end="01:53.860" data-start-seconds="109">has gone up pretty</span> <span data-start="01:49.820" data-end="01:53.860" data-start-seconds="109">steadily, especially CSS.</span></p>
      <p><span data-start="01:53.860" data-end="01:57.830" data-start-seconds="113">Like people are using</span> <span data-start="01:53.860" data-end="01:57.830" data-start-seconds="113">bigger and bigger CSS files.</span></p>
      <p><span data-start="01:57.830" data-end="01:59.890" data-start-seconds="117">The number of TCP</span> <span data-start="01:57.830" data-end="01:59.890" data-start-seconds="117">connections per site</span> <span data-start="01:59.890" data-end="02:02.510" data-start-seconds="119">has actually remained</span> <span data-start="01:59.890" data-end="02:02.510" data-start-seconds="119">around the same.</span></p>
      <p><span data-start="02:02.510" data-end="02:05.930" data-start-seconds="122">Sites with Flash have gone down,</span> <span data-start="02:02.510" data-end="02:05.930" data-start-seconds="122">which is great from a security</span> <span data-start="02:05.930" data-end="02:07.630" data-start-seconds="125">perspective.</span></p>
      <p><span data-start="02:07.630" data-end="02:13.220" data-start-seconds="127">And sites with HTTPS has</span> <span data-start="02:07.630" data-end="02:13.220" data-start-seconds="127">gone up from 9% to 27%.</span></p>
      <p><span data-start="02:13.220" data-end="02:15.190" data-start-seconds="133">That's a factor of three.</span></p>
      <p><span data-start="02:15.190" data-end="02:17.940" data-start-seconds="135">So we should be very</span> <span data-start="02:15.190" data-end="02:17.940" data-start-seconds="135">happy about that.</span></p>
      <p><span data-start="02:17.940" data-end="02:20.360" data-start-seconds="137">So is TLS fast yet?</span> <span data-start="02:20.360" data-end="02:23.760" data-start-seconds="140">That's a really great question</span> <span data-start="02:20.360" data-end="02:23.760" data-start-seconds="140">because even three years ago,</span> <span data-start="02:23.760" data-end="02:25.720" data-start-seconds="143">or even one year</span> <span data-start="02:23.760" data-end="02:25.720" data-start-seconds="143">ago, a lot of people</span> <span data-start="02:25.720" data-end="02:27.830" data-start-seconds="145">said, well, we</span> <span data-start="02:25.720" data-end="02:27.830" data-start-seconds="145">can't deploy HTTPS.</span></p>
      <p><span data-start="02:27.830" data-end="02:28.850" data-start-seconds="147">Its just too slow.</span></p>
      <p><span data-start="02:28.850" data-end="02:29.910" data-start-seconds="148">We can't do it.</span></p>
      <p><span data-start="02:29.910" data-end="02:32.580" data-start-seconds="149">The performance</span> <span data-start="02:29.910" data-end="02:32.580" data-start-seconds="149">isn't good enough.</span></p>
      <p><span data-start="02:32.580" data-end="02:35.520" data-start-seconds="152">But I think they're</span> <span data-start="02:32.580" data-end="02:35.520" data-start-seconds="152">wrong by now.</span></p>
      <p><span data-start="02:35.520" data-end="02:39.840" data-start-seconds="155">As an example, even Netflix</span> <span data-start="02:35.520" data-end="02:39.840" data-start-seconds="155">now is moving to HTTPS.</span></p>
      <p><span data-start="02:39.840" data-end="02:42.960" data-start-seconds="159">They just announced</span> <span data-start="02:39.840" data-end="02:42.960" data-start-seconds="159">this about a year ago.</span></p>
      <p><span data-start="02:42.960" data-end="02:46.240" data-start-seconds="162">Netflix, I don't know if it's</span> <span data-start="02:42.960" data-end="02:46.240" data-start-seconds="162">that big in the Netherlands,</span> <span data-start="02:46.240" data-end="02:49.700" data-start-seconds="166">but in the US, it</span> <span data-start="02:46.240" data-end="02:49.700" data-start-seconds="166">accounts for the plurality</span> <span data-start="02:49.700" data-end="02:52.020" data-start-seconds="169">of internet traffic.</span></p>
      <p><span data-start="02:52.020" data-end="02:56.230" data-start-seconds="172">So in 2015, you could say</span> <span data-start="02:52.020" data-end="02:56.230" data-start-seconds="172">you would Netflix and chill.</span></p>
      <p><span data-start="02:56.230" data-end="03:00.690" data-start-seconds="176">In 2016, you can Netflix</span> <span data-start="02:56.230" data-end="03:00.690" data-start-seconds="176">over HTTPS and chill.</span></p>
      <p><span data-start="03:00.690" data-end="03:02.090" data-start-seconds="180">Yeah.</span></p>
      <p><span data-start="03:02.090" data-end="03:03.710" data-start-seconds="182">Just to illustrate</span> <span data-start="03:02.090" data-end="03:03.710" data-start-seconds="182">how dramatic this</span> <span data-start="03:03.710" data-end="03:09.990" data-start-seconds="183">will be, on the before side, 65%</span> <span data-start="03:03.710" data-end="03:09.990" data-start-seconds="183">of web traffic in North America</span> <span data-start="03:09.990" data-end="03:12.170" data-start-seconds="189">at peak hours was unencrypted.</span></p>
      <p><span data-start="03:12.170" data-end="03:15.880" data-start-seconds="192">This is data from an</span> <span data-start="03:12.170" data-end="03:15.880" data-start-seconds="192">ISP called Sandvine.</span></p>
      <p><span data-start="03:15.880" data-end="03:20.410" data-start-seconds="195">And in 2016, the red and</span> <span data-start="03:15.880" data-end="03:20.410" data-start-seconds="195">green parts have switched,</span> <span data-start="03:20.410" data-end="03:24.620" data-start-seconds="200">so instead of 65%</span> <span data-start="03:20.410" data-end="03:24.620" data-start-seconds="200">unencrypted, it's about 65%</span> <span data-start="03:24.620" data-end="03:25.580" data-start-seconds="204">encrypted traffic.</span></p>
      <p><span data-start="03:25.580" data-end="03:28.830" data-start-seconds="205">And that's solely</span> <span data-start="03:25.580" data-end="03:28.830" data-start-seconds="205">due to Netflix.</span></p>
      <p><span data-start="03:28.830" data-end="03:29.500" data-start-seconds="208">One website.</span></p>
      <p><span data-start="03:32.180" data-end="03:35.180" data-start-seconds="212">If you need more convincing</span> <span data-start="03:32.180" data-end="03:35.180" data-start-seconds="212">that TLS is fast now,</span> <span data-start="03:35.180" data-end="03:38.460" data-start-seconds="215">there is a great site by</span> <span data-start="03:35.180" data-end="03:38.460" data-start-seconds="215">Ilya Grigorik from Google</span> <span data-start="03:38.460" data-end="03:41.950" data-start-seconds="218">called IsTLSfastyet.com.</span></p>
      <p><span data-start="03:41.950" data-end="03:44.000" data-start-seconds="221">And basically he makes</span> <span data-start="03:41.950" data-end="03:44.000" data-start-seconds="221">the point that, yes,</span> <span data-start="03:44.000" data-end="03:46.590" data-start-seconds="224">TLS is fast because</span> <span data-start="03:44.000" data-end="03:46.590" data-start-seconds="224">we have good CPUs,</span> <span data-start="03:46.590" data-end="03:50.820" data-start-seconds="226">better than we did in</span> <span data-start="03:46.590" data-end="03:50.820" data-start-seconds="226">the early '90s, at least.</span></p>
      <p><span data-start="03:50.820" data-end="03:53.140" data-start-seconds="230">And we have all</span> <span data-start="03:50.820" data-end="03:53.140" data-start-seconds="230">these features that</span> <span data-start="03:53.140" data-end="03:55.450" data-start-seconds="233">can speed up HTTPS deployments.</span></p>
      <p><span data-start="03:55.450" data-end="03:59.770" data-start-seconds="235">I'll go into two of those that</span> <span data-start="03:55.450" data-end="03:59.770" data-start-seconds="235">I think are really interesting.</span></p>
      <p><span data-start="03:59.770" data-end="04:02.880" data-start-seconds="239">So how many people here</span> <span data-start="03:59.770" data-end="04:02.880" data-start-seconds="239">are familiar with the TLS</span> <span data-start="04:02.880" data-end="04:04.417" data-start-seconds="242">handshake?</span> <span data-start="04:04.417" data-end="04:05.500" data-start-seconds="244">Cool, about half the room.</span></p>
      <p><span data-start="04:05.500" data-end="04:08.300" data-start-seconds="245">So just to reiterate--</span> <span data-start="04:05.500" data-end="04:08.300" data-start-seconds="245">your client</span> <span data-start="04:08.300" data-end="04:10.120" data-start-seconds="248">does a SYN-ACK with the server.</span></p>
      <p><span data-start="04:10.120" data-end="04:12.930" data-start-seconds="250">And then it says, hello,</span> <span data-start="04:10.120" data-end="04:12.930" data-start-seconds="250">I would like to start TLS.</span></p>
      <p><span data-start="04:12.930" data-end="04:14.710" data-start-seconds="252">Server says, OK, I support TLS.</span></p>
      <p><span data-start="04:14.710" data-end="04:16.180" data-start-seconds="254">Here's my cert.</span></p>
      <p><span data-start="04:16.180" data-end="04:19.365" data-start-seconds="256">Client says, OK, here's</span> <span data-start="04:16.180" data-end="04:19.365" data-start-seconds="256">the key we're going to use.</span></p>
      <p><span data-start="04:19.365" data-end="04:21.839" data-start-seconds="259">It's a little more complicated</span> <span data-start="04:19.365" data-end="04:21.839" data-start-seconds="259">if you use forward secrecy,</span> <span data-start="04:21.839" data-end="04:24.676" data-start-seconds="261">but the point is,</span> <span data-start="04:21.839" data-end="04:24.676" data-start-seconds="261">there's three round trips</span> <span data-start="04:24.676" data-end="04:26.050" data-start-seconds="264">that you need</span> <span data-start="04:24.676" data-end="04:26.050" data-start-seconds="264">before you can even</span> <span data-start="04:26.050" data-end="04:27.959" data-start-seconds="266">start sending encrypted data.</span></p>
      <p><span data-start="04:27.959" data-end="04:30.000" data-start-seconds="267">And that three round trips</span> <span data-start="04:27.959" data-end="04:30.000" data-start-seconds="267">is what people usually</span> <span data-start="04:30.000" data-end="04:35.340" data-start-seconds="270">think of when they say, TLS</span> <span data-start="04:30.000" data-end="04:35.340" data-start-seconds="270">is expensive or CPU intensive.</span></p>
      <p><span data-start="04:35.340" data-end="04:39.950" data-start-seconds="275">But note that if you use</span> <span data-start="04:35.340" data-end="04:39.950" data-start-seconds="275">session resumption, which</span> <span data-start="04:39.950" data-end="04:43.120" data-start-seconds="279">is a feature where</span> <span data-start="04:39.950" data-end="04:43.120" data-start-seconds="279">the server stores data</span> <span data-start="04:43.120" data-end="04:45.090" data-start-seconds="283">from the last</span> <span data-start="04:43.120" data-end="04:45.090" data-start-seconds="283">connection the client</span> <span data-start="04:45.090" data-end="04:50.280" data-start-seconds="285">made so it can resume using</span> <span data-start="04:45.090" data-end="04:50.280" data-start-seconds="285">the keys from the last session,</span> <span data-start="04:50.280" data-end="04:53.220" data-start-seconds="290">then you can actually get</span> <span data-start="04:50.280" data-end="04:53.220" data-start-seconds="290">this down to two round trips.</span></p>
      <p><span data-start="04:53.220" data-end="04:55.410" data-start-seconds="293">So if you want to</span> <span data-start="04:53.220" data-end="04:55.410" data-start-seconds="293">learn more about this,</span> <span data-start="04:55.410" data-end="04:57.030" data-start-seconds="295">just google session resumption.</span></p>
      <p><span data-start="04:57.030" data-end="04:58.890" data-start-seconds="297">But most servers will</span> <span data-start="04:57.030" data-end="04:58.890" data-start-seconds="297">do this by default.</span></p>
      <p><span data-start="04:58.890" data-end="05:02.279" data-start-seconds="298">And you can say, like, rotate</span> <span data-start="04:58.890" data-end="05:02.279" data-start-seconds="298">session tickets every 5 minutes</span> <span data-start="05:02.279" data-end="05:02.820" data-start-seconds="302">or something.</span></p>
      <p><span data-start="05:02.820" data-end="05:06.640" data-start-seconds="302">And so that actually makes</span> <span data-start="05:02.820" data-end="05:06.640" data-start-seconds="302">these handshakes less expensive.</span></p>
      <p><span data-start="05:06.640" data-end="05:09.050" data-start-seconds="306">In TLS 1.3, there</span></p>
      <p><span data-start="05:06.640" data-end="05:09.050" data-start-seconds="306">is actually going</span> <span data-start="05:09.050" data-end="05:14.010" data-start-seconds="309">to be another optimization to</span> <span data-start="05:09.050" data-end="05:14.010" data-start-seconds="309">get down to zero round trips,</span> <span data-start="05:14.010" data-end="05:16.150" data-start-seconds="314">although I think SYN-ACK</span> <span data-start="05:14.010" data-end="05:16.150" data-start-seconds="314">might still be there.</span></p>
      <p><span data-start="05:16.150" data-end="05:21.470" data-start-seconds="316">But anyway, there's ways you can</span> <span data-start="05:16.150" data-end="05:21.470" data-start-seconds="316">make there be less round trips.</span></p>
      <p><span data-start="05:21.470" data-end="05:25.960" data-start-seconds="321">Another TLS</span> <span data-start="05:21.470" data-end="05:25.960" data-start-seconds="321">optimization is HTTP/2.</span></p>
      <p><span data-start="05:25.960" data-end="05:28.480" data-start-seconds="325">So you might say,</span> <span data-start="05:25.960" data-end="05:28.480" data-start-seconds="325">wait, how is that TLS.</span></p>
      <p><span data-start="05:28.480" data-end="05:30.060" data-start-seconds="328">This is HTTP/2.</span></p>
      <p><span data-start="05:30.060" data-end="05:35.820" data-start-seconds="330">It's just like HTTP/1, the</span> <span data-start="05:30.060" data-end="05:35.820" data-start-seconds="330">next version of it-- 2.</span></p>
      <p><span data-start="05:35.820" data-end="05:37.690" data-start-seconds="335">And what is HTTP/2, anyway?</span> <span data-start="05:37.690" data-end="05:43.110" data-start-seconds="337">Well, so HTTP/1 was</span> <span data-start="05:37.690" data-end="05:43.110" data-start-seconds="337">created around 1995, back</span> <span data-start="05:43.110" data-end="05:45.300" data-start-seconds="343">when sites looked like this.</span></p>
      <p><span data-start="05:45.300" data-end="05:48.131" data-start-seconds="345">You would have this header</span> <span data-start="05:45.300" data-end="05:48.131" data-start-seconds="345">and you would have content.</span></p>
      <p><span data-start="05:48.131" data-end="05:49.130" data-start-seconds="348">And that would be great.</span></p>
      <p><span data-start="05:49.130" data-end="05:50.870" data-start-seconds="349">You could be accessible.</span></p>
      <p><span data-start="05:50.870" data-end="05:52.670" data-start-seconds="350">It was nice, it was fast.</span></p>
      <p><span data-start="05:52.670" data-end="05:54.860" data-start-seconds="352">And now sites look</span> <span data-start="05:52.670" data-end="05:54.860" data-start-seconds="352">more like this.</span></p>
      <p><span data-start="05:54.860" data-end="05:59.430" data-start-seconds="354">You have an ad, another</span> <span data-start="05:54.860" data-end="05:59.430" data-start-seconds="354">ad, a content somewhere</span> <span data-start="05:59.430" data-end="06:02.450" data-start-seconds="359">like a Buzzfeed or iframe,</span> <span data-start="05:59.430" data-end="06:02.450" data-start-seconds="359">another ad, some tracking</span> <span data-start="06:02.450" data-end="06:05.630" data-start-seconds="362">pixels, some Flash</span> <span data-start="06:02.450" data-end="06:05.630" data-start-seconds="362">ads, et cetera.</span></p>
      <p><span data-start="06:05.630" data-end="06:07.880" data-start-seconds="365">So sites are not this anymore.</span></p>
      <p><span data-start="06:07.880" data-end="06:11.300" data-start-seconds="367">They're slow and they</span> <span data-start="06:07.880" data-end="06:11.300" data-start-seconds="367">make a lot of requests.</span></p>
      <p><span data-start="06:11.300" data-end="06:15.202" data-start-seconds="371">So why would we even</span> <span data-start="06:11.300" data-end="06:15.202" data-start-seconds="371">use the same protocol.</span></p>
      <p><span data-start="06:15.202" data-end="06:16.660" data-start-seconds="375">It's actually kind</span> <span data-start="06:15.202" data-end="06:16.660" data-start-seconds="375">of amazing we're</span> <span data-start="06:16.660" data-end="06:18.710" data-start-seconds="376">still using HTTP/1</span> <span data-start="06:16.660" data-end="06:18.710" data-start-seconds="376">in a world where</span> <span data-start="06:18.710" data-end="06:20.280" data-start-seconds="378">websites are so different.</span></p>
      <p><span data-start="06:20.280" data-end="06:24.430" data-start-seconds="380">And so that's part</span> <span data-start="06:20.280" data-end="06:24.430" data-start-seconds="380">of why HTTP/2 exists.</span></p>
      <p><span data-start="06:24.430" data-end="06:27.090" data-start-seconds="384">I think of it as</span> <span data-start="06:24.430" data-end="06:27.090" data-start-seconds="384">HTTP/1 on Adderall.</span></p>
      <p><span data-start="06:27.090" data-end="06:31.300" data-start-seconds="387">So it uses binary encoding</span> <span data-start="06:27.090" data-end="06:31.300" data-start-seconds="387">instead of text and header</span> <span data-start="06:31.300" data-end="06:32.545" data-start-seconds="391">and compression.</span></p>
      <p><span data-start="06:32.545" data-end="06:34.724" data-start-seconds="392">It has multiple</span> <span data-start="06:32.545" data-end="06:34.724" data-start-seconds="392">performance improvements.</span></p>
      <p><span data-start="06:34.724" data-end="06:36.140" data-start-seconds="394">But the one I want</span> <span data-start="06:34.724" data-end="06:36.140" data-start-seconds="394">to point out is</span> <span data-start="06:36.140" data-end="06:40.090" data-start-seconds="396">that it makes multiple</span> <span data-start="06:36.140" data-end="06:40.090" data-start-seconds="396">requests per TCP connection.</span></p>
      <p><span data-start="06:40.090" data-end="06:42.480" data-start-seconds="400">The next speaker will</span> <span data-start="06:40.090" data-end="06:42.480" data-start-seconds="400">get more into this.</span></p>
      <p><span data-start="06:42.480" data-end="06:45.190" data-start-seconds="402">But essentially instead</span> <span data-start="06:42.480" data-end="06:45.190" data-start-seconds="402">of making a request</span> <span data-start="06:45.190" data-end="06:48.050" data-start-seconds="405">and waiting for a response and</span> <span data-start="06:45.190" data-end="06:48.050" data-start-seconds="405">then making another request,</span> <span data-start="06:48.050" data-end="06:49.640" data-start-seconds="408">the browser can</span> <span data-start="06:48.050" data-end="06:49.640" data-start-seconds="408">just make a request</span> <span data-start="06:49.640" data-end="06:52.610" data-start-seconds="409">and then use that</span> <span data-start="06:49.640" data-end="06:52.610" data-start-seconds="409">same TCB connection</span> <span data-start="06:52.610" data-end="06:57.280" data-start-seconds="412">and then get the responses back</span> <span data-start="06:52.610" data-end="06:57.280" data-start-seconds="412">in this multiplex way, which</span> <span data-start="06:57.280" data-end="06:58.570" data-start-seconds="417">is quite nice.</span></p>
      <p><span data-start="06:58.570" data-end="07:02.750" data-start-seconds="418">And so this largely</span> <span data-start="06:58.570" data-end="07:02.750" data-start-seconds="418">gets rid of weird hacks</span> <span data-start="07:02.750" data-end="07:05.960" data-start-seconds="422">that people have to do</span> <span data-start="07:02.750" data-end="07:05.960" data-start-seconds="422">like inlining and spreading</span> <span data-start="07:05.960" data-end="07:09.340" data-start-seconds="425">and concatenating various</span> <span data-start="07:05.960" data-end="07:09.340" data-start-seconds="425">files so that you can minimize</span> <span data-start="07:09.340" data-end="07:14.230" data-start-seconds="429">the number of TCP connections.</span></p>
      <p><span data-start="07:14.230" data-end="07:16.670" data-start-seconds="434">Does HTTP/2 require encryption.</span></p>
      <p><span data-start="07:16.670" data-end="07:18.520" data-start-seconds="436">So in the</span> <span data-start="07:16.670" data-end="07:18.520" data-start-seconds="436">standardization process,</span> <span data-start="07:18.520" data-end="07:20.390" data-start-seconds="438">this was a huge question.</span></p>
      <p><span data-start="07:20.390" data-end="07:24.870" data-start-seconds="440">Should HTTP/2 be</span> <span data-start="07:20.390" data-end="07:24.870" data-start-seconds="440">available only over HTTPS?</span> <span data-start="07:24.870" data-end="07:27.850" data-start-seconds="444">And the answer is no</span> <span data-start="07:24.870" data-end="07:27.850" data-start-seconds="444">according to the spec.</span></p>
      <p><span data-start="07:27.850" data-end="07:31.980" data-start-seconds="447">But in practice, actually,</span> <span data-start="07:27.850" data-end="07:31.980" data-start-seconds="447">yes, because there's two ways</span> <span data-start="07:31.980" data-end="07:34.180" data-start-seconds="451">you can upgrade to HTTP/2.</span></p>
      <p><span data-start="07:34.180" data-end="07:37.430" data-start-seconds="454">Method 1 is the client just</span> <span data-start="07:34.180" data-end="07:37.430" data-start-seconds="454">sends an upgrade header</span> <span data-start="07:37.430" data-end="07:40.630" data-start-seconds="457">and the servers says, OK,</span> <span data-start="07:37.430" data-end="07:40.630" data-start-seconds="457">that's cool, let's do HTTP/2.</span></p>
      <p><span data-start="07:40.630" data-end="07:45.285" data-start-seconds="460">Method is that the client in</span> <span data-start="07:40.630" data-end="07:45.285" data-start-seconds="460">the TLS hello from the TLS</span> <span data-start="07:45.285" data-end="07:48.080" data-start-seconds="465">handshake says,</span> <span data-start="07:45.285" data-end="07:48.080" data-start-seconds="465">I support HTTP/2.</span></p>
      <p><span data-start="07:48.080" data-end="07:49.980" data-start-seconds="468">And then the server upgrades.</span></p>
      <p><span data-start="07:49.980" data-end="07:54.070" data-start-seconds="469">So method 1 is great if you want</span> <span data-start="07:49.980" data-end="07:54.070" data-start-seconds="469">to support clients like cURL.</span></p>
      <p><span data-start="07:54.070" data-end="07:56.660" data-start-seconds="474">But the major browsers</span> <span data-start="07:54.070" data-end="07:56.660" data-start-seconds="474">like Chrome and Firefox</span> <span data-start="07:56.660" data-end="08:00.100" data-start-seconds="476">and I think now Edge has</span> <span data-start="07:56.660" data-end="08:00.100" data-start-seconds="476">announced that they'll only</span> <span data-start="08:00.100" data-end="08:02.750" data-start-seconds="480">support method 2 over HTTP/2.</span></p>
      <p><span data-start="08:02.750" data-end="08:05.940" data-start-seconds="482">So if you want this</span> <span data-start="08:02.750" data-end="08:05.940" data-start-seconds="482">nice multiplexing</span> <span data-start="08:05.940" data-end="08:08.050" data-start-seconds="485">and these nice</span> <span data-start="08:05.940" data-end="08:08.050" data-start-seconds="485">performance improvements,</span> <span data-start="08:08.050" data-end="08:11.760" data-start-seconds="488">you have to deploy</span> <span data-start="08:08.050" data-end="08:11.760" data-start-seconds="488">HTTPS, unless you only</span> <span data-start="08:11.760" data-end="08:14.730" data-start-seconds="491">want to talk to people</span> <span data-start="08:11.760" data-end="08:14.730" data-start-seconds="491">using cURL, which you might.</span></p>
      <p><span data-start="08:14.730" data-end="08:18.300" data-start-seconds="494">And so that's what it looks</span> <span data-start="08:14.730" data-end="08:18.300" data-start-seconds="494">like in a Wireshark dump.</span></p>
      <p><span data-start="08:18.300" data-end="08:21.060" data-start-seconds="498">My browser, Brave,</span> <span data-start="08:18.300" data-end="08:21.060" data-start-seconds="498">connected to Akamai.</span></p>
      <p><span data-start="08:21.060" data-end="08:25.960" data-start-seconds="501">And if you look at</span> <span data-start="08:21.060" data-end="08:25.960" data-start-seconds="501">the client hello, you</span> <span data-start="08:25.960" data-end="08:31.590" data-start-seconds="505">see this ALPN Next protocol</span> <span data-start="08:25.960" data-end="08:31.590" data-start-seconds="505">field, and that says H2.</span></p>
      <p><span data-start="08:31.590" data-end="08:37.230" data-start-seconds="511">And that's me saying I support</span> <span data-start="08:31.590" data-end="08:37.230" data-start-seconds="511">HTTP/2, please upgrade me.</span></p>
      <p><span data-start="08:37.230" data-end="08:39.620" data-start-seconds="517">But you might say,</span> <span data-start="08:37.230" data-end="08:39.620" data-start-seconds="517">well, that's great,</span> <span data-start="08:39.620" data-end="08:44.370" data-start-seconds="519">but HTTPS is really annoying</span> <span data-start="08:39.620" data-end="08:44.370" data-start-seconds="519">to set up and maintain.</span></p>
      <p><span data-start="08:44.370" data-end="08:47.750" data-start-seconds="524">And you would be pretty</span> <span data-start="08:44.370" data-end="08:47.750" data-start-seconds="524">correct, at least in 2015,</span> <span data-start="08:47.750" data-end="08:48.680" data-start-seconds="527">you would have.</span></p>
      <p><span data-start="08:48.680" data-end="08:50.460" data-start-seconds="528">Because to get a</span> <span data-start="08:48.680" data-end="08:50.460" data-start-seconds="528">certificate, you</span> <span data-start="08:50.460" data-end="08:53.940" data-start-seconds="530">have to do this tedious--</span> <span data-start="08:50.460" data-end="08:53.940" data-start-seconds="530">so this is from Dream Host,</span> <span data-start="08:53.940" data-end="08:56.610" data-start-seconds="533">and it's this long</span> <span data-start="08:53.940" data-end="08:56.610" data-start-seconds="533">12-step process.</span></p>
      <p><span data-start="08:56.610" data-end="08:58.420" data-start-seconds="536">And at the end, there</span> <span data-start="08:56.610" data-end="08:58.420" data-start-seconds="536">is a red warning bar</span> <span data-start="08:58.420" data-end="09:01.750" data-start-seconds="538">that says, don't accidentally</span> <span data-start="08:58.420" data-end="09:01.750" data-start-seconds="538">copy and paste your private key</span> <span data-start="09:01.750" data-end="09:04.870" data-start-seconds="541">into our website, et cetera.</span></p>
      <p><span data-start="09:04.870" data-end="09:06.920" data-start-seconds="544">And let's say you</span> <span data-start="09:04.870" data-end="09:06.920" data-start-seconds="544">got through this.</span></p>
      <p><span data-start="09:06.920" data-end="09:08.450" data-start-seconds="546">Usually this takes</span> <span data-start="09:06.920" data-end="09:08.450" data-start-seconds="546">people an hour</span> <span data-start="09:08.450" data-end="09:10.535" data-start-seconds="548">or two when they do</span> <span data-start="09:08.450" data-end="09:10.535" data-start-seconds="548">it for the first time.</span></p>
      <p><span data-start="09:10.535" data-end="09:13.222" data-start-seconds="550">But say you get through that</span> <span data-start="09:10.535" data-end="09:13.222" data-start-seconds="550">and you have a certificate.</span></p>
      <p><span data-start="09:13.222" data-end="09:14.430" data-start-seconds="553">Now you want to set up HTTPS.</span></p>
      <p><span data-start="09:17.140" data-end="09:19.500" data-start-seconds="557">Then you might</span> <span data-start="09:17.140" data-end="09:19.500" data-start-seconds="557">find that you don't</span> <span data-start="09:19.500" data-end="09:23.370" data-start-seconds="559">know how to pick the correct</span> <span data-start="09:19.500" data-end="09:23.370" data-start-seconds="559">encryption algorithms.</span></p>
      <p><span data-start="09:23.370" data-end="09:29.100" data-start-seconds="563">So our RC4 was a popular cipher</span> <span data-start="09:23.370" data-end="09:29.100" data-start-seconds="563">that people used up until 2014.</span></p>
      <p><span data-start="09:29.100" data-end="09:33.480" data-start-seconds="569">But then as cryptanalytic</span> <span data-start="09:29.100" data-end="09:33.480" data-start-seconds="569">attacks against it</span> <span data-start="09:33.480" data-end="09:37.670" data-start-seconds="573">got better and better, experts</span> <span data-start="09:33.480" data-end="09:37.670" data-start-seconds="573">started saying, actually</span> <span data-start="09:37.670" data-end="09:39.310" data-start-seconds="577">don't use RC4 anymore.</span></p>
      <p><span data-start="09:39.310" data-end="09:43.040" data-start-seconds="579">So unless you're keeping up</span> <span data-start="09:39.310" data-end="09:43.040" data-start-seconds="579">to date with these latest</span> <span data-start="09:43.040" data-end="09:45.650" data-start-seconds="583">encryption attacks,</span> <span data-start="09:43.040" data-end="09:45.650" data-start-seconds="583">then you might not</span> <span data-start="09:45.650" data-end="09:50.060" data-start-seconds="585">realize that this is now</span> <span data-start="09:45.650" data-end="09:50.060" data-start-seconds="585">a vulnerable algorithm.</span></p>
      <p><span data-start="09:50.060" data-end="09:53.680" data-start-seconds="590">So let's say you get past that</span> <span data-start="09:50.060" data-end="09:53.680" data-start-seconds="590">and now your TLS is correctly</span> <span data-start="09:53.680" data-end="09:54.780" data-start-seconds="593">configured.</span></p>
      <p><span data-start="09:54.780" data-end="09:57.870" data-start-seconds="594">You go to your site and you</span> <span data-start="09:54.780" data-end="09:57.870" data-start-seconds="594">(say, https)//Lenova.com.</span></p>
      <p><span data-start="09:57.870" data-end="10:01.090" data-start-seconds="597">But then your site is</span> <span data-start="09:57.870" data-end="10:01.090" data-start-seconds="597">broken because of something</span> <span data-start="10:01.090" data-end="10:03.050" data-start-seconds="601">called mixed content blocking.</span></p>
      <p><span data-start="10:03.050" data-end="10:05.540" data-start-seconds="603">Essentially, if you</span> <span data-start="10:03.050" data-end="10:05.540" data-start-seconds="603">switched your top level site</span> <span data-start="10:05.540" data-end="10:11.360" data-start-seconds="605">to HTTPS but you're including</span> <span data-start="10:05.540" data-end="10:11.360" data-start-seconds="605">resources from HTTP origins,</span> <span data-start="10:11.360" data-end="10:13.840" data-start-seconds="611">the browser says, no, we don't</span> <span data-start="10:11.360" data-end="10:13.840" data-start-seconds="611">want that because that's not</span> <span data-start="10:13.840" data-end="10:16.280" data-start-seconds="613">secure, we're just going</span> <span data-start="10:13.840" data-end="10:16.280" data-start-seconds="613">to block it, actually.</span></p>
      <p><span data-start="10:16.280" data-end="10:17.870" data-start-seconds="616">So now your</span> <span data-start="10:16.280" data-end="10:17.870" data-start-seconds="616">JavaScript is broken,</span> <span data-start="10:17.870" data-end="10:19.050" data-start-seconds="617">your images aren't loading.</span></p>
      <p><span data-start="10:19.050" data-end="10:21.120" data-start-seconds="619">And it's a huge mess.</span></p>
      <p><span data-start="10:21.120" data-end="10:24.580" data-start-seconds="621">So I have good news, which is</span> <span data-start="10:21.120" data-end="10:24.580" data-start-seconds="621">that when I was at the W3C,</span> <span data-start="10:24.580" data-end="10:28.010" data-start-seconds="624">we actually wrote a spec to</span> <span data-start="10:24.580" data-end="10:28.010" data-start-seconds="624">solve this exact problem.</span></p>
      <p><span data-start="10:28.010" data-end="10:31.470" data-start-seconds="628">It's called Upgrade</span> <span data-start="10:28.010" data-end="10:31.470" data-start-seconds="628">and Secure Requests.</span></p>
      <p><span data-start="10:31.470" data-end="10:33.330" data-start-seconds="631">So essentially, if</span> <span data-start="10:31.470" data-end="10:33.330" data-start-seconds="631">you find yourself</span> <span data-start="10:33.330" data-end="10:35.650" data-start-seconds="633">in this situation,</span> <span data-start="10:33.330" data-end="10:35.650" data-start-seconds="633">which many of you might,</span> <span data-start="10:35.650" data-end="10:38.770" data-start-seconds="635">you can just send us</span> <span data-start="10:35.650" data-end="10:38.770" data-start-seconds="635">HTTP header that says,</span> <span data-start="10:38.770" data-end="10:43.390" data-start-seconds="638">Upgrade and Secure Requests</span> <span data-start="10:38.770" data-end="10:43.390" data-start-seconds="638">and modern browsers</span> <span data-start="10:43.390" data-end="10:47.650" data-start-seconds="643">will treat the page as if</span> <span data-start="10:43.390" data-end="10:47.650" data-start-seconds="643">the subresources are HTTPS.</span></p>
      <p><span data-start="10:47.650" data-end="10:50.950" data-start-seconds="647">I actually had to use this a</span> <span data-start="10:47.650" data-end="10:50.950" data-start-seconds="647">few weeks ago on my WordPress</span> <span data-start="10:50.950" data-end="10:54.640" data-start-seconds="650">blog because I updated WordPress</span> <span data-start="10:50.950" data-end="10:54.640" data-start-seconds="650">and somehow it downgraded</span> <span data-start="10:54.640" data-end="10:57.790" data-start-seconds="654">all my HTTPS pictures to HTTP.</span></p>
      <p><span data-start="10:57.790" data-end="11:00.500" data-start-seconds="657">So I was lazy and instead</span> <span data-start="10:57.790" data-end="11:00.500" data-start-seconds="657">of manually fixing</span> <span data-start="11:00.500" data-end="11:04.660" data-start-seconds="660">all the HTTP links, I just said</span> <span data-start="11:00.500" data-end="11:04.660" data-start-seconds="660">Upgrade and Secure Requests,</span> <span data-start="11:04.660" data-end="11:09.250" data-start-seconds="664">and then voila, Chrome upgraded</span> <span data-start="11:04.660" data-end="11:09.250" data-start-seconds="664">everything and my blog works</span> <span data-start="11:09.250" data-end="11:11.880" data-start-seconds="669">again, which is great.</span></p>
      <p><span data-start="11:11.880" data-end="11:15.770" data-start-seconds="671">But TLS, and arguable, is</span> <span data-start="11:11.880" data-end="11:15.770" data-start-seconds="671">still kind of difficult.</span></p>
      <p><span data-start="11:15.770" data-end="11:20.090" data-start-seconds="675">So at EFF, the Electronic</span> <span data-start="11:15.770" data-end="11:20.090" data-start-seconds="675">Frontier Foundation,</span> <span data-start="11:20.090" data-end="11:25.180" data-start-seconds="680">we said what if we started</span> <span data-start="11:20.090" data-end="11:25.180" data-start-seconds="680">a certificate authority.</span></p>
      <p><span data-start="11:25.180" data-end="11:26.620" data-start-seconds="685">Sounds like a good idea, right.</span></p>
      <p><span data-start="11:26.620" data-end="11:29.950" data-start-seconds="686">Sounds kind of hard.</span></p>
      <p><span data-start="11:29.950" data-end="11:32.030" data-start-seconds="689">And what if we used our</span> <span data-start="11:29.950" data-end="11:32.030" data-start-seconds="689">certificate authority</span> <span data-start="11:32.030" data-end="11:35.070" data-start-seconds="692">to give everyone free</span> <span data-start="11:32.030" data-end="11:35.070" data-start-seconds="692">certificates in five seconds</span> <span data-start="11:35.070" data-end="11:36.920" data-start-seconds="695">or less.</span></p>
      <p><span data-start="11:36.920" data-end="11:38.840" data-start-seconds="696">And what if we also</span> <span data-start="11:36.920" data-end="11:38.840" data-start-seconds="696">gave people packages</span> <span data-start="11:38.840" data-end="11:43.420" data-start-seconds="698">so that they could automatically</span> <span data-start="11:38.840" data-end="11:43.420" data-start-seconds="698">deploy TLS in an easier way.</span></p>
      <p><span data-start="11:43.420" data-end="11:45.900" data-start-seconds="703">And so that's what</span> <span data-start="11:43.420" data-end="11:45.900" data-start-seconds="703">Let's Encrypt is.</span></p>
      <p><span data-start="11:45.900" data-end="11:47.640" data-start-seconds="705">How many people here</span> <span data-start="11:45.900" data-end="11:47.640" data-start-seconds="705">have heard of it?</span> <span data-start="11:47.640" data-end="11:51.230" data-start-seconds="707">Yeah, well, that's</span> <span data-start="11:47.640" data-end="11:51.230" data-start-seconds="707">almost everyone, so good.</span></p>
      <p><span data-start="11:51.230" data-end="11:53.465" data-start-seconds="711">Let's Encrypt is a new CA.</span></p>
      <p><span data-start="11:53.465" data-end="11:57.370" data-start-seconds="713">It was created by EFF, Mozilla,</span> <span data-start="11:53.465" data-end="11:57.370" data-start-seconds="713">University of Michigan.</span></p>
      <p><span data-start="11:57.370" data-end="11:59.400" data-start-seconds="717">Thank you very much</span> <span data-start="11:57.370" data-end="11:59.400" data-start-seconds="717">to Cisco and Akamai</span> <span data-start="11:59.400" data-end="12:01.820" data-start-seconds="719">for being top level sponsors.</span></p>
      <p><span data-start="12:01.820" data-end="12:04.850" data-start-seconds="721">We actually did not</span> <span data-start="12:01.820" data-end="12:04.850" data-start-seconds="721">create a new root CA.</span></p>
      <p><span data-start="12:04.850" data-end="12:06.350" data-start-seconds="724">We're currently</span> <span data-start="12:04.850" data-end="12:06.350" data-start-seconds="724">an intermediate CA</span> <span data-start="12:06.350" data-end="12:10.270" data-start-seconds="726">that's been signed by</span> <span data-start="12:06.350" data-end="12:10.270" data-start-seconds="726">a CA named IdenTrust.</span></p>
      <p><span data-start="12:10.270" data-end="12:12.470" data-start-seconds="730">So thanks to them for</span> <span data-start="12:10.270" data-end="12:12.470" data-start-seconds="730">the cross signature.</span></p>
      <p><span data-start="12:12.470" data-end="12:17.450" data-start-seconds="732">That means essentially browsers</span> <span data-start="12:12.470" data-end="12:17.450" data-start-seconds="732">already trust Let's Encrypt.</span></p>
      <p><span data-start="12:17.450" data-end="12:20.020" data-start-seconds="737">We are going to get into</span> <span data-start="12:17.450" data-end="12:20.020" data-start-seconds="737">the root certificate</span> <span data-start="12:20.020" data-end="12:24.480" data-start-seconds="740">programs for Mozilla,</span> <span data-start="12:20.020" data-end="12:24.480" data-start-seconds="740">Firefox, and Chrome, and IE.</span></p>
      <p><span data-start="12:24.480" data-end="12:25.770" data-start-seconds="744">But that takes about a year.</span></p>
      <p><span data-start="12:25.770" data-end="12:28.940" data-start-seconds="745">So in the mean time,</span> <span data-start="12:25.770" data-end="12:28.940" data-start-seconds="745">we're an intermediate CA.</span></p>
      <p><span data-start="12:28.940" data-end="12:31.610" data-start-seconds="748">And a new nonprofit</span> <span data-start="12:28.940" data-end="12:31.610" data-start-seconds="748">called the ISRG</span> <span data-start="12:31.610" data-end="12:35.450" data-start-seconds="751">is managing all of this work.</span></p>
      <p><span data-start="12:35.450" data-end="12:37.790" data-start-seconds="755">Thank you, again,</span> <span data-start="12:35.450" data-end="12:37.790" data-start-seconds="755">to our sponsors.</span></p>
      <p><span data-start="12:37.790" data-end="12:41.810" data-start-seconds="757">So our current status</span> <span data-start="12:37.790" data-end="12:41.810" data-start-seconds="757">is as of last fall,</span> <span data-start="12:41.810" data-end="12:43.520" data-start-seconds="761">we entered private</span> <span data-start="12:41.810" data-end="12:43.520" data-start-seconds="761">beta last fall.</span></p>
      <p><span data-start="12:43.520" data-end="12:45.680" data-start-seconds="763">We are now in public beta.</span></p>
      <p><span data-start="12:45.680" data-end="12:47.490" data-start-seconds="765">In our first eight</span> <span data-start="12:45.680" data-end="12:47.490" data-start-seconds="765">hours, we issued</span> <span data-start="12:47.490" data-end="12:49.620" data-start-seconds="767">about 10,000 certificates.</span></p>
      <p><span data-start="12:49.620" data-end="12:52.430" data-start-seconds="769">That's one certificate</span> <span data-start="12:49.620" data-end="12:52.430" data-start-seconds="769">every three seconds.</span></p>
      <p><span data-start="12:52.430" data-end="12:57.760" data-start-seconds="772">As of yesterday, we had issued</span> <span data-start="12:52.430" data-end="12:57.760" data-start-seconds="772">about 1.4 million certificates,</span></p>
      <p><span data-start="12:57.760" data-end="13:02.550" data-start-seconds="777">which makes us by volume one</span> <span data-start="12:57.760" data-end="13:02.550" data-start-seconds="777">of the largest CAs, already.</span></p>
      <p><span data-start="13:02.550" data-end="13:05.310" data-start-seconds="782">And that's our activity graph.</span></p>
      <p><span data-start="13:05.310" data-end="13:11.030" data-start-seconds="785">The top line is the number</span> <span data-start="13:05.310" data-end="13:11.030" data-start-seconds="785">of total issued certificates</span> <span data-start="13:11.030" data-end="13:13.560" data-start-seconds="791">over time.</span></p>
      <p><span data-start="13:13.560" data-end="13:15.250" data-start-seconds="793">So here's some cool data.</span></p>
      <p><span data-start="13:15.250" data-end="13:17.250" data-start-seconds="795">What's the most</span> <span data-start="13:15.250" data-end="13:17.250" data-start-seconds="795">popular TLD that's</span> <span data-start="13:17.250" data-end="13:18.410" data-start-seconds="797">been using Let's Encrypt?</span> <span data-start="13:18.410" data-end="13:21.120" data-start-seconds="798">Well, it's actually</span> <span data-start="13:18.410" data-end="13:21.120" data-start-seconds="798">dot-com and other,</span> <span data-start="13:21.120" data-end="13:23.700" data-start-seconds="801">but the biggest</span> <span data-start="13:21.120" data-end="13:23.700" data-start-seconds="801">country TLD is France.</span></p>
      <p><span data-start="13:23.700" data-end="13:29.140" data-start-seconds="803">So thank you, France,</span> <span data-start="13:23.700" data-end="13:29.140" data-start-seconds="803">followed by Germany.</span></p>
      <p><span data-start="13:29.140" data-end="13:32.480" data-start-seconds="809">And like I said earlier, we</span> <span data-start="13:29.140" data-end="13:32.480" data-start-seconds="809">have these different clients</span> <span data-start="13:32.480" data-end="13:34.440" data-start-seconds="812">that are using Let's Encrypt.</span></p>
      <p><span data-start="13:34.440" data-end="13:37.600" data-start-seconds="814">So who are these clients?</span> <span data-start="13:37.600" data-end="13:42.360" data-start-seconds="817">Well, there's various</span> <span data-start="13:37.600" data-end="13:42.360" data-start-seconds="817">types of servers</span> <span data-start="13:42.360" data-end="13:44.270" data-start-seconds="822">that could be using HTTPS.</span></p>
      <p><span data-start="13:44.270" data-end="13:47.710" data-start-seconds="824">So I call this the</span> <span data-start="13:44.270" data-end="13:47.710" data-start-seconds="824">client layer cake.</span></p>
      <p><span data-start="13:47.710" data-end="13:49.580" data-start-seconds="827">I last showed this</span> <span data-start="13:47.710" data-end="13:49.580" data-start-seconds="827">slide around Halloween,</span> <span data-start="13:49.580" data-end="13:51.560" data-start-seconds="829">so it's Halloween themed.</span></p>
      <p><span data-start="13:51.560" data-end="13:56.130" data-start-seconds="831">But we can pretend</span> <span data-start="13:51.560" data-end="13:56.130" data-start-seconds="831">it's Easter themed now.</span></p>
      <p><span data-start="13:56.130" data-end="13:56.950" data-start-seconds="836">Maybe not.</span></p>
      <p><span data-start="13:56.950" data-end="14:00.390" data-start-seconds="836">So at the top is people like</span> <span data-start="13:56.950" data-end="14:00.390" data-start-seconds="836">Yahoo and Google and Facebook.</span></p>
      <p><span data-start="14:00.390" data-end="14:05.520" data-start-seconds="840">They basically have their</span> <span data-start="14:00.390" data-end="14:05.520" data-start-seconds="840">own fancy TLS infrastructure.</span></p>
      <p><span data-start="14:05.520" data-end="14:08.010" data-start-seconds="845">Some of them have their</span> <span data-start="14:05.520" data-end="14:08.010" data-start-seconds="845">own server software</span> <span data-start="14:08.010" data-end="14:11.220" data-start-seconds="848">that no one else uses in</span> <span data-start="14:08.010" data-end="14:11.220" data-start-seconds="848">the open source world.</span></p>
      <p><span data-start="14:11.220" data-end="14:15.090" data-start-seconds="851">Right below that is sites</span> <span data-start="14:11.220" data-end="14:15.090" data-start-seconds="851">that run multiple servers that</span> <span data-start="14:15.090" data-end="14:16.400" data-start-seconds="855">are load balanced.</span></p>
      <p><span data-start="14:16.400" data-end="14:19.440" data-start-seconds="856">A lot of startups do that and</span> <span data-start="14:16.400" data-end="14:19.440" data-start-seconds="856">a lot of smaller companies.</span></p>
      <p><span data-start="14:19.440" data-end="14:23.720" data-start-seconds="859">And then there's people like me</span> <span data-start="14:19.440" data-end="14:23.720" data-start-seconds="859">who use Digital Ocean and AWS.</span></p>
      <p><span data-start="14:23.720" data-end="14:26.890" data-start-seconds="863">But basically we have</span> <span data-start="14:23.720" data-end="14:26.890" data-start-seconds="863">a single server that's</span> <span data-start="14:26.890" data-end="14:29.010" data-start-seconds="866">self-hosted or managed-hosted.</span></p>
      <p><span data-start="14:29.010" data-end="14:30.530" data-start-seconds="869">And then at the</span> <span data-start="14:29.010" data-end="14:30.530" data-start-seconds="869">bottom layer, there</span> <span data-start="14:30.530" data-end="14:32.321" data-start-seconds="870">is this large number</span> <span data-start="14:30.530" data-end="14:32.321" data-start-seconds="870">of people who are just</span> <span data-start="14:32.321" data-end="14:34.330" data-start-seconds="872">using DreamHost</span> <span data-start="14:32.321" data-end="14:34.330" data-start-seconds="872">or WordPress where</span> <span data-start="14:34.330" data-end="14:35.740" data-start-seconds="874">they don't have a terminal.</span></p>
      <p><span data-start="14:35.740" data-end="14:38.830" data-start-seconds="875">They just have a web interface</span> <span data-start="14:35.740" data-end="14:38.830" data-start-seconds="875">that they go on and then do</span> <span data-start="14:38.830" data-end="14:39.740" data-start-seconds="878">stuff.</span></p>
      <p><span data-start="14:39.740" data-end="14:44.260" data-start-seconds="879">So we want to eventually cover</span> <span data-start="14:39.740" data-end="14:44.260" data-start-seconds="879">at least the bottom three</span> <span data-start="14:44.260" data-end="14:44.770" data-start-seconds="884">layers.</span></p>
      <p><span data-start="14:44.770" data-end="14:48.660" data-start-seconds="884">But right now, Let's Encrypt is</span> <span data-start="14:44.770" data-end="14:48.660" data-start-seconds="884">mostly good for the middle two.</span></p>
      <p><span data-start="14:48.660" data-end="14:51.470" data-start-seconds="888">The bottom one will require</span> <span data-start="14:48.660" data-end="14:51.470" data-start-seconds="888">partnering with DreamHost</span> <span data-start="14:51.470" data-end="14:55.050" data-start-seconds="891">and WordPress, et cetera.</span></p>
      <p><span data-start="14:55.050" data-end="14:59.620" data-start-seconds="895">So here is a nice pie chart</span> <span data-start="14:55.050" data-end="14:59.620" data-start-seconds="895">of some of our clients.</span></p>
      <p><span data-start="14:59.620" data-end="15:02.440" data-start-seconds="899">I won't get into it very</span> <span data-start="14:59.620" data-end="15:02.440" data-start-seconds="899">much, except to note</span> <span data-start="15:02.440" data-end="15:06.500" data-start-seconds="902">that the majority is using our</span> <span data-start="15:02.440" data-end="15:06.500" data-start-seconds="902">default client, which we ship</span> <span data-start="15:06.500" data-end="15:08.450" data-start-seconds="906">as a Let's Encrypt package.</span></p>
      <p><span data-start="15:08.450" data-end="15:11.640" data-start-seconds="908">And it's written in Python.</span></p>
      <p><span data-start="15:11.640" data-end="15:13.310" data-start-seconds="911">This one is kind</span> <span data-start="15:11.640" data-end="15:13.310" data-start-seconds="911">of harder to read,</span> <span data-start="15:13.310" data-end="15:17.410" data-start-seconds="913">but it's the client</span> <span data-start="15:13.310" data-end="15:17.410" data-start-seconds="913">operating systems.</span></p>
      <p><span data-start="15:17.410" data-end="15:19.650" data-start-seconds="917">One thing to note is that</span> <span data-start="15:17.410" data-end="15:19.650" data-start-seconds="917">while a lot of people</span> <span data-start="15:19.650" data-end="15:22.560" data-start-seconds="919">are using the latest</span> <span data-start="15:19.650" data-end="15:22.560" data-start-seconds="919">Debian of Ubuntu,</span> <span data-start="15:22.560" data-end="15:26.250" data-start-seconds="922">there's people using Debian</span> <span data-start="15:22.560" data-end="15:26.250" data-start-seconds="922">7 and Ubuntu 12 and stuff.</span></p>
      <p><span data-start="15:26.250" data-end="15:30.640" data-start-seconds="926">And there's a long tail of old</span> <span data-start="15:26.250" data-end="15:30.640" data-start-seconds="926">operating systems and people</span> <span data-start="15:30.640" data-end="15:32.840" data-start-seconds="930">who will never update.</span></p>
      <p><span data-start="15:32.840" data-end="15:35.530" data-start-seconds="932">So it's an open</span> <span data-start="15:32.840" data-end="15:35.530" data-start-seconds="932">question of how to keep</span> <span data-start="15:35.530" data-end="15:37.610" data-start-seconds="935">those people secure</span> <span data-start="15:35.530" data-end="15:37.610" data-start-seconds="935">without holding back</span> <span data-start="15:37.610" data-end="15:40.620" data-start-seconds="937">the entire internet.</span></p>
      <p><span data-start="15:40.620" data-end="15:42.950" data-start-seconds="940">So if anyone is interested</span> <span data-start="15:40.620" data-end="15:42.950" data-start-seconds="940">in building their own Let's</span> <span data-start="15:42.950" data-end="15:47.170" data-start-seconds="942">Encrypt client, this is just a</span> <span data-start="15:42.950" data-end="15:47.170" data-start-seconds="942">quick picture of how it works.</span></p>
      <p><span data-start="15:47.170" data-end="15:51.080" data-start-seconds="947">So basically, the client has</span> <span data-start="15:47.170" data-end="15:51.080" data-start-seconds="947">to contact the Let's Encrypt CA</span> <span data-start="15:51.080" data-end="15:56.490" data-start-seconds="951">and say, I want to prove to you</span> <span data-start="15:51.080" data-end="15:56.490" data-start-seconds="951">that this domain is authentic</span> <span data-start="15:56.490" data-end="15:59.390" data-start-seconds="956">so you can issue a</span> <span data-start="15:56.490" data-end="15:59.390" data-start-seconds="956">certificate to it.</span></p>
      <p><span data-start="15:59.390" data-end="16:01.730" data-start-seconds="959">So there's various</span> <span data-start="15:59.390" data-end="16:01.730" data-start-seconds="959">types of challenges</span> <span data-start="16:01.730" data-end="16:04.980" data-start-seconds="961">that the client can do to</span> <span data-start="16:01.730" data-end="16:04.980" data-start-seconds="961">prove ownership of the domain.</span></p>
      <p><span data-start="16:04.980" data-end="16:07.700" data-start-seconds="964">So get challenges, perform</span> <span data-start="16:04.980" data-end="16:07.700" data-start-seconds="964">challenges, and then</span> <span data-start="16:07.700" data-end="16:08.720" data-start-seconds="967">cleanup challenges.</span></p>
      <p><span data-start="16:08.720" data-end="16:11.700" data-start-seconds="968">That's authentication.</span></p>
      <p><span data-start="16:11.700" data-end="16:12.895" data-start-seconds="971">Man, this is hard to read.</span></p>
      <p><span data-start="16:12.895" data-end="16:17.480" data-start-seconds="972">Not going to go into detail,</span> <span data-start="16:12.895" data-end="16:17.480" data-start-seconds="972">but once the client proves</span> <span data-start="16:17.480" data-end="16:20.170" data-start-seconds="977">ownership of the domain</span> <span data-start="16:17.480" data-end="16:20.170" data-start-seconds="977">and gets a certificate,</span> <span data-start="16:20.170" data-end="16:22.690" data-start-seconds="980">it has to do a lot of work</span> <span data-start="16:20.170" data-end="16:22.690" data-start-seconds="980">to deploy the certificate</span> <span data-start="16:22.690" data-end="16:26.570" data-start-seconds="982">and automatically configure</span> <span data-start="16:22.690" data-end="16:26.570" data-start-seconds="982">the server to use HTTPS.</span></p>
      <p><span data-start="16:26.570" data-end="16:31.000" data-start-seconds="986">So this is the interface</span> <span data-start="16:26.570" data-end="16:31.000" data-start-seconds="986">where it gets the cert,</span> <span data-start="16:31.000" data-end="16:34.270" data-start-seconds="991">installs it, and does things.</span></p>
      <p><span data-start="16:34.270" data-end="16:38.510" data-start-seconds="994">It has features where if this</span> <span data-start="16:34.270" data-end="16:38.510" data-start-seconds="994">somehow messes up your server</span> <span data-start="16:38.510" data-end="16:41.210" data-start-seconds="998">configurations so your</span> <span data-start="16:38.510" data-end="16:41.210" data-start-seconds="998">site no longer works,</span> <span data-start="16:41.210" data-end="16:45.190" data-start-seconds="1001">you can say revert and</span> <span data-start="16:41.210" data-end="16:45.190" data-start-seconds="1001">roll back, et cetera.</span></p>
      <p><span data-start="16:45.190" data-end="16:47.300" data-start-seconds="1005">But anyway, so the</span> <span data-start="16:45.190" data-end="16:47.300" data-start-seconds="1005">result of all this</span> <span data-start="16:47.300" data-end="16:49.930" data-start-seconds="1007">is that to set up as a</span> <span data-start="16:47.300" data-end="16:49.930" data-start-seconds="1007">cell with Let's Encrypt,</span> <span data-start="16:49.930" data-end="16:51.630" data-start-seconds="1009">you just git clone</span> <span data-start="16:49.930" data-end="16:51.630" data-start-seconds="1009">Let's Encrypt,</span> <span data-start="16:51.630" data-end="16:55.600" data-start-seconds="1011">or download it from your package</span> <span data-start="16:51.630" data-end="16:55.600" data-start-seconds="1011">manager, if it supports it.</span></p>
      <p><span data-start="16:55.600" data-end="16:58.720" data-start-seconds="1015">And then you run Let's</span> <span data-start="16:55.600" data-end="16:58.720" data-start-seconds="1015">Encrypt auto to install.</span></p>
      <p><span data-start="16:58.720" data-end="17:01.440" data-start-seconds="1018">And to install TLS on</span> <span data-start="16:58.720" data-end="17:01.440" data-start-seconds="1018">Apache, all you have to do</span> <span data-start="17:01.440" data-end="17:03.470" data-start-seconds="1021">is say, Let's Encrypt Apache.</span></p>
      <p><span data-start="17:03.470" data-end="17:06.060" data-start-seconds="1023">And it'll show you</span> <span data-start="17:03.470" data-end="17:06.060" data-start-seconds="1023">like a curses interface</span> <span data-start="17:06.060" data-end="17:07.910" data-start-seconds="1026">where you can pick</span> <span data-start="17:06.060" data-end="17:07.910" data-start-seconds="1026">the domains you want.</span></p>
      <p><span data-start="17:07.910" data-end="17:09.790" data-start-seconds="1027">You can also specify</span> <span data-start="17:07.910" data-end="17:09.790" data-start-seconds="1027">a command line flags</span> <span data-start="17:09.790" data-end="17:12.118" data-start-seconds="1029">to say, set up SSL</span> <span data-start="17:09.790" data-end="17:12.118" data-start-seconds="1029">for these domains</span> <span data-start="17:12.118" data-end="17:16.290" data-start-seconds="1032">if you know which</span> <span data-start="17:12.118" data-end="17:16.290" data-start-seconds="1032">domains you want SSL for.</span></p>
      <p><span data-start="17:16.290" data-end="17:19.071" data-start-seconds="1036">And renew or revoke</span> <span data-start="17:16.290" data-end="17:19.071" data-start-seconds="1036">will be just as easy.</span></p>
      <p><span data-start="17:19.071" data-end="17:19.780" data-start-seconds="1039">You can just say.</span></p>
      <p><span data-start="17:19.780" data-end="17:22.260" data-start-seconds="1039">Let's Encrypt renew,</span> <span data-start="17:19.780" data-end="17:22.260" data-start-seconds="1039">Let's Encrypt revoke.</span></p>
      <p><span data-start="17:22.260" data-end="17:24.920" data-start-seconds="1042">The Python client</span> <span data-start="17:22.260" data-end="17:24.920" data-start-seconds="1042">does all of that work.</span></p>
      <p><span data-start="17:24.920" data-end="17:26.670" data-start-seconds="1044">So that's it.</span></p>
      <p><span data-start="17:26.670" data-end="17:29.060" data-start-seconds="1046">Make the internet great, again.</span></p>
      <p><span data-start="17:29.060" data-end="17:32.930" data-start-seconds="1049">You can help out on</span> <span data-start="17:29.060" data-end="17:32.930" data-start-seconds="1049">GitHub, Let's Encrypt.</span></p>
      <p><span data-start="17:32.930" data-end="17:35.250" data-start-seconds="1052">Let'sEncrypt.org is the site.</span></p>
      <p><span data-start="17:35.250" data-end="17:37.754" data-start-seconds="1055">Hopefully, that was</span> <span data-start="17:35.250" data-end="17:37.754" data-start-seconds="1055">under 20 minutes.</span></p>
      <p><span data-start="17:37.754" data-end="17:38.750" data-start-seconds="1057">Cool.</span></p>
      <p><span data-start="17:38.750" data-end="17:42.735" data-start-seconds="1058">[APPLAUSE]</span>     </div>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2016-spring/sessions/towards-faster-safer-websites-by-yan-zhu.md" id="comment">
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
