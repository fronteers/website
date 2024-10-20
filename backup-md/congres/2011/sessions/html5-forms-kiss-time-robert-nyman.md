<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>HTML5 Forms - KISS time by Robert Nyman · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p540">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>HTML5 Forms - KISS time by Robert Nyman</h2>
     <h3>Video</h3>
     <video width="640" height="360" src="/_downloads/2011/robert-nyman-html5-forms-kiss-time.webm" controls>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2011/robert-nyman-html5-forms-kiss-time.webm">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="http://vimeo.com/33712504">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2011/robert-nyman-html5-forms-kiss-time.webm">Download video</a> (WebM, 74MB)</li>
     </ul>
     <h3>Slides</h3>
     <iframe src="https://www.slideshare.net/slideshow/embed_code/9583687" width="550" height="460"></iframe>
     <ul>
      <li><a href="http://www.slideshare.net/robnyman/html5-forms-kiss-time-fronteers">See slides on SlideShare</a></li>
      <li><a href="http://speakerdeck.com/u/robnyman/p/html5-forms-kiss-time-fronteers">See slides on Speaker Deck</a></li>
     </ul>
     <h3>Transcript</h3>
     <p>Robert Nyman: [0:07] Wow. It's good to be back here. [0:10] I gave a talk last year, but apparently it was so much shit, so they gave me another chance to come back this year to make up for it. So this is make it or break it for me.</p>
     <p>[0:22] What I did during last night, or last talk, yesterday, was the shouting. I was considering, should we try and do that again or not? And you know what? I'm going to do it. So, are you awake?</p>
     <p>Audience: [0:35] Yes.</p>
     <p>Robert: [0:37] OK, just like yesterday. Are you awake?</p>
     <p>Audience: [0:39] Yes.</p>
     <p>Robert: [0:40] Good. Fantastic. [0:43] So in the last year, I've mostly been traveling and going around and working extra as a model. That's... You reach a certain level with blogging, and there's more about being a poster than actually delivering something.</p>
     <p>[0:58] I've been tweeting a lot, usually about HTML5 news and other things and Web development or weird personal things. So that might be interesting for you.</p>
     <p>[1:09] I have also joined Mozilla. With Mozilla, I think as opposed to some other companies, is that our part is not having the biggest market share or owning the Web or something like that.</p>
     <p>[1:25] It's just more about bringing some balance...It's bringing some perspective and just some other thoughts and just, keeping everything aligned. We don't want one company to own anything, no matter what company it is. We want it to be as democratic as possible.</p>
     <p>[1:40] And, as was mentioned, my role, my title, is an evangelist. I usually get on stage and the big Web god channels through me and I share it with you, Tim Berners-Lee or something.</p>
     <p>[1:53] And, you know, I might look weird, but at the same time, we seem to hire everyone these days. And he's my boss. Before I start talking about HTML5 forms, I want to talk about John Resig.</p>
     <p>[2:12] I joined Mozilla. John quit. I had a talk in Chile, John bailed out. So I think there's something personal going on here.</p>
     <p>[2:23] So I was really happy yesterday to see that John was actually here and he's actually alive because I sort of felt he was a myth, a name for a dude that was actually five guys in a room somewhere.</p>
     <p>[2:36] So, I'm here John. Come and get it.</p>
     <p>[2:43] Talking about HTML5 forms, it's...a lot of things going on with the Web and with development right now. We're going to use the KISS Scrolls to have the truth behind the forms and give you all kinds of information.</p>
     <p>[2:59] So what's the thing with the naming KISS? It's...One, I have a twisted mind. And the second part is that, with talks, you usually have to make something up a long time in advance. You just say anything to be left alone.</p>
     <p>[3:12] I was trying to make up some good reason for it afterwards, so I'm thinking that KISS would be &quot;Keep It Simple, Stupid,&quot; to make it easier to develop Web and the forms. So, let's say it stands for that.</p>
     <p>[3:24] And it's been fun. It's great fun researching forms. It's really enjoyable. I can't really understand why PPK is still alive. I would have slit my wrists a long time ago.</p>
     <p>[3:38] The thing is, I've been preaching about HTML5 forms, but I haven't really tried them out. Like you've been giving presentations about it and saying, &quot;Well, try this. This is really good.&quot;</p>
     <p>And now, I really, really had to work with them to know what they're like. And it's quite painful. It's experimenting and it hurts a lot. And I'm not sure if Kiss [indecipherable 03: [3:46] 58] is going to work, either, because apparently Gene Simmons didn't have a computer when he was a kid.</p>
     <p>[4:05] But if you buy the Banana Junior for your kid it's going to be whiz.</p>
     <p>[4:11] So, if you learn form style, you're going to gain respect because that's how you get it in this business. If you survive working with forms and you still keep on going with it, you gain lots of respect.</p>
     <p>[4:25] That's the way to be someone in this business. You've made it through and people look up to you, or at least look up to your stamina of making it through.</p>
     <p>[4:39] With HTML5 forms, there are many different things going on here. One is that we have a number of new input types, tons of them, actually.</p>
     <p>[4:48] And it's just more about trying to divide all the scripting we've been doing before for date pickers and all kinds of stuff like that. So now we're having actual date pickers, native in the Web browser. You don't have to worry about week count or similar things.</p>
     <p>[5:04] We have color pickers. We have emails, numbers. We have a range type, which is basically a slider. Search field and telephone field, et cetera. We have all these new types.</p>
     <p>[5:16] We're also talking about mobile. Mobile's become stronger and stronger. My most common mobile question now is this. That's all I think about. Slightly disappointed.</p>
     <p>[5:27] But the upside with mobile here is that when used with new fields, some of them supported, some of them aren't yet. But the nice thing is that input on mobile is terrible. It's always you trying to type things in. I don't really have those big hands, so I don't know what it says about me.</p>
     <p>[5:43] But the thing is, when you're trying to put something in in the mobile, it's hard. And we're having all these new types. You can attribute different keyword layouts on your mobile phone, which makes it easier.</p>
     <p>[5:52] So if you have a number field, you're just going to get the number pad, et cetera, which is way, way better.</p>
     <p>[5:58] So looking here...It looks like it's small for you. It's small for me. But you have for URLs and you have for email or other things. Just those characters you need for that certain purpose, which is really good. The user experience is much better, and it's not much work for you at all.</p>
     <p>[6:17] With upcoming iOS five there's also a new number of input types being supported. We're going to get date pickers and time pickers, et cetera. Vertical sliders and stuff like that which makes things better and better.</p>
     <p>[6:32] So things keep on improving, and we are having so many releases now in so many different versions and browsers that if it's not there today, it's probably going to be there tomorrow.</p>
     <p>[6:43] We also have a number of new attributes. Some of them are quite easy. We're going to have autocomplete or not, autofocus might be slightly overused over time. I don't know.</p>
     <p>[6:54] The interesting thing about autofocus is that it behaves slightly differently in Web browsers. So in WebKit browsers and in Opera, it selects the text as well in that field. In Firefox and in IE 10 it doesn't. So you know very simple examples.</p>
     <p>[7:13] It's hard to tell who's right, but it's just that it's different and these small inconsistencies just sort of get to you as a developer. It's not like your end user is going to pull up five browsers to compare them and say, &quot;Eh, eh.&quot; But for us it feels slightly different.</p>
     <p>[7:28] Some of the things I like here too is different form controls. I guess all of us have been building forms. And if you push on one button, you're going to submit a certain URL or a certain action. You push another one and something else is going to happen.</p>
     <p>[7:41] And now we have a &quot;Form action,&quot; attribute where you can just point to different URLs. Just put that on your button and it's all just going to work. And you can change the encoding type, and you can post to new windows.</p>
     <p>[7:52] And maybe now...We should push a certain button, when you want to validate the form.</p>
     <p>[7:58] We also have things like Datalist and I'll get to that in a second. We have with the range element or range type, you have the sliders, you have the minimum and maximum value. That applies to number fields as well, Readonly.</p>
     <p>[8:13] We also have, of course, because only the real developers write more regex than anyone wanted. So, we have the pattern attributes for your own sole needs for writing weird code with the weird characters. We have Spellchecking and steps and stuff like that.</p>
     <p>[8:33] And an interesting thing here is also how do you make things easier and more evolved? We have something with Firefox mobile which is the Mozactionhint, which is basically about just telling the keyword on mobile what you want to be on the button down in the right corner.</p>
     <p>[8:50] So if you're going to have something like here, you have the Mozactionhint, &quot;Next,&quot; and you can just say, &quot;This is actually the text I want on that one.&quot; So you can help the user. You can just make the native behavior slightly stronger with some kind of description or some kind of hint what's going to happen.</p>
     <p>[9:08] And you know, the last of the new form fields we have elements. And one of them which I think is quite nice is having the Datalist element. It's pretty much like a select element. You have a number of options. But then you connect it to, &quot;Input type text.&quot;</p>
     <p>[9:22] And when the user starts typing something in that text box, you have that connection through Datalist, so if the user types the letter &quot;H&quot; or something like that, you're going to get all the suggestions. It's sort of an autocomplete thing, with the things matching what the user wrote.</p>
     <p>[9:37] Really easy and you know, really easy to implement as well.</p>
     <p>[9:43] We have the Keygen element, and Keygen is...It's there for generating private and public keys. I don't know about your assignments, I haven't had that much use for it so far in my career, ever.</p>
     <p>[9:56] The hard part there though is that Microsoft has specifically stated that we're not going to do this. They have some good reasoning and arguments for that. The problem is, though, that Keygen is in the specification.</p>
     <p>[10:08] And the specification is not there for...To pick and choose what you like. It's supposed to be consistent all across the board. So we'll see where that's going to go, if it's going to get out of specification. You know, that happens, or if Microsoft's going to change their mind. That actually happens too.</p>
     <p>[10:24] We have meter elements, which could be for a poll or something like that. And we also have input and output elements. And output especially we have a more semantic way of presenting the results of some action in the form.</p>
     <p>[10:41] And if you have the output element we have a range type here. The way you do it now I hope is going to be implemented just through attributes or something in the long run.</p>
     <p>[10:50] But the way you do it now, it's just you need to hook up to the input value on that field, and when something happens you change the value on the output elements just to look for some results, accordingly.</p>
     <p>[11:05] Next step, validation. I always think it's fun with validation because it's like breaking into Fort Knox. It's this enormous challenge of just submitting some data for someone to misuse.</p>
     <p>[11:22] And it starts quite easy. You can have a text field. You apply the required attributes, which basically means that, &quot;Please dear user fill something in.&quot; And then the Web browser is going to validate for you.</p>
     <p>[11:33] So I've been doing lots of tests...Not PPK...wouldn't be proud of me but you might but you might at least appreciate it. And I've been testing in the latest Chrome and Firefox, IE 10. I needed to install Windows 8, of course, to test IE 10, and in Opera.</p>
     <p>[11:50] And the required works this way. So if you try to submit this element, you're going to get a default message in there. And the text is almost identical in all boxes. It might differ on a word or two. But it's just about telling them that you have to fill something out there and highlight that field.</p>
     <p>However, if you just input spaces in a text field, it's going to go straight through. So that's, you know, that's required but not really, right? Because spaces is not something, and there's no way to really trim [indecipherable 12: [12:13] 23] something like that.</p>
     <p>[12:30] So it works, it lets the user know how it works and then just submit it anyway.</p>
     <p>[12:31] I also...I don't even know why I got into this...I once experimented what happens when if you have a required field and it's hidden. I don't know why you would do it to yourself, but let's say that you have a required field in your page.</p>
     <p>[12:42] You might include some kind of malicious script that, you know, hides it and doesn't submit to get some data or something like that. And just see how it was working in different Web browsers.</p>
     <p>[12:56] And in Chrome, you're not getting a dialog saying that you didn't fill out the field, but it doesn't submit the form either. It just stops working.</p>
     <p>[13:02] Firefox puts the dialog where the element is hidden in the document.</p>
     <p>[13:08] IE works the same way as Chrome, and Opera has this interesting thing. We tried it out a couple times. It puts the dialog at the top left on your screen, not of the Opera window or something like that but top left, all the way. Well, yes. You always take it one extra step.</p>
     <p>[13:31] We also have email fields. And it's just about instead of writing all these long, usually incorrect regex to validate an email you have it built into the Web browser now.</p>
     <p>[13:44] And the same way there, like with the required field, you're going to get another message telling you that it has to be in the correct email format. Quite easy.</p>
     <p>[13:52] The problem there, though, is that it only supports certain English characters because English is the language of the world, which means the first of limitations.</p>
     <p>So if you try, you know, I know in France it's [indecipherable 14: [14:02] 05] . That sounds disgusting in Swedish. Anyway, never mind. I don't know why I have these examples. But the thing is if you have a character like that it's not going to make it through.</p>
     <p>[14:18] You're just stuck. It's going to say it's an invalid email address. It just works for websites in English right now. As I learned from someone last night, if you have number fields in some languages a comma is going to be the separator for decimals and in some others you're going to have a dot.</p>
     <p>[14:38] That only works with the English approach. Otherwise, depending on the browser, it just automatically corrects it for you or removes the comma and you get a...make a higher number. Be very, very wary when you use this. If you can utilize this, fantastic.</p>
     <p>[14:57] The browser is like creating a table in Microsoft Word. You start out, it's going to be all good, and then it's like, &quot;What the hell happened?&quot; Be careful.</p>
     <p>[15:08] Then we have the pattern attribute and we write in the different regular expressions for a certain kind of validation. Quite easy here you're looking for two numbers and a hyphen and then file numbers.</p>
     <p>If you don't have that format the Web browser is going to tell you. You have to use a certain requested format. It doesn't give you any information what the format would look like, what it wants, it just says that you're wrong, which [indecipherable 15: [15:18] 33] appreciate being wrong.</p>
     <p>[15:35] However, with the pattern attribute, same as with hide or actually even worse, if you leave it empty it's valid too. I don't know why. Go figure.</p>
     <p>[15:50] I also read to make it easier, at least to give the user some kind of description like, &quot;What kind of format do you actually expect here? What kind of input do I want from you?&quot; You can use the title attribute to give some kind of description.</p>
     <p>[16:03] That only works in Google Chrome right now. It still has the, &quot;Please fill out this field,&quot; element but it also has this title text giving some kind of implication of what you actually want from them.</p>
     <p>[16:22] But in Firefox we have the beautifully named, &quot;x-moz-errormessage.&quot; I do think it is a good idea, though, is just having a custom message for that element so you can just tell them that it's just supposed to be this format or you have to do this or that or that or something like that, just to give them some kind of a hint.</p>
     <p>[16:42] As far as I understand it, no one else is that interested in implementing it right now. I've seen Chris Mills from Opera saying some things that some different attributes might be a good idea but haven't seen any more things actually happening or being tested out. It might happen. I do think it's a good thing.</p>
     <p>[17:05] What do you do if you want to have a custom message for a certain element to describe the format? Then you can get a reference to that element through JavaScript and use the &quot;setCustomValidity&quot; method and you just tell them, &quot;No, that's wrong. That's not really helpful.&quot; You get my point.</p>
     <p>[17:20] If you do that...And that works across the board in all Web browsers but you have to do it through JavaScript.</p>
     <p>[17:28] If you want to remove that validation message or just change it or make sure that it's valid you have to set it to an empty string. You can't really have, &quot;Remove custom validity.&quot;</p>
     <p>[17:40] You just reset it to nothing and that means it's not going to happen which is not that logical so I'm hoping for something better named.</p>
     <p>[17:49] Also, something I found out here is that with elements there is a method built in which is &quot;checkValidity.&quot; So for a field you can check through JavaScript if it's valid at this point in time. That works really good.</p>
     <p>[18:03] However, if you apply the setCustomValidity method just to have your pimped-own error message checkValidity stops working. It's sort of like static from the page flow and then it's gone. It's just going to be, for instance, true forever, whatever the input into that field.</p>
     <p>[18:21] Then you go and read the specifications. D.V. and everyone else is saying, &quot;Learn to love the specs.&quot; Then you go and read the specification and you read it over and over again. It's like, &quot;But it's supposed to work. What's happening?&quot;</p>
     <p>[18:33] Reading specs is great. I do have the biggest appreciation for people writing specifications. I do. I'm just saying that it's not always readable for everyone.</p>
     <p>[18:55] Sometimes you just form certain sentences...I'll move on now, and it's not for everyone. You need to have a lightweight version. I don't know if it's going to be in a specification or if it's going to be elsewhere.</p>
     <p>[19:07] The thing you can solve this problem with setCustomValidity here and checkValidity is that you have two different events.</p>
     <p>[19:14] You have the input event, which basically applies to any form element right now, and you also have the invalid event.</p>
     <p>[19:21] Now, on every input on that text field, for instance, you set that validity to nothing which basically means do it the native way, the way the Web browser would do it. However, if there is a problem, if something is wrong, if it's invalid then you set the custom validity to your own message.</p>
     <p>[19:41] It's sort of like with Ajax and polling I guess. You keep on checking and checking and checking if something is wrong, if something is right. We just keep on top of it.</p>
     <p>[19:50] I don't think it's supposed to be like that and from everything I'm reading it's not but it seems to work this way consistently in all Web browsers.</p>
     <p>[20:00] Then we want to style forms. This is Gene Simmons' beauty operation, staying in line with the theme. We have, &quot;Required.&quot; We have a number of pseudo classes.</p>
     <p>[20:14] And Required is basically just for this input element. You want to style it a certain way but you have to fill something out or you want to have a blue border around it. Fantastic. Works in all Web browsers. Really good and it could help the user.</p>
     <p>[20:30] We also have Valid and Invalid pseudo classes or Out-of-range. Out-of-range is basically for number fields and sliders. That's all good, too.</p>
     <p>[20:42] The problem with this, though, is that it gives you an indication if something is valid or not but it does it at page load. If you load something and you have it Invalid if it's not filled out yet the Web browser already thinks it's invalid before you even get to try. That's not really the way you want it to be.</p>
     <p>[21:04] That's the most annoying thing. &quot;Give me a chance. I haven't even gotten focused in the field yet. Let me try something.&quot; One thing I saw from our Opera friends was this little idea of combining pseudo classes.</p>
     <p>[21:18] You have the Input element and you have Focus and then you have Invalid. It almost goes all the way. It means that when you load the page it doesn't show anything.</p>
     <p>[21:25] When you set Focus to that field it does show that it's invalid before you have a chance. But at least it's not 20 red fields in the page, or something like that.</p>
     <p>[21:37] Something we're trying with Firefox is the &quot;Moz-ui-valid,&quot; another catchy name. The thing here is just to make it slightly easy for the user. So if you use these pseudo classes instead to complement the Valid or Invalid. They're not going to show an error when you load the page.</p>
     <p>[21:57] They're not going to show an error when you start typing in the field. It just shows an error when you actually fill something out, more like the Onchange Event for a field, which is a much better user experience.</p>
     <p>I'm not sure if this is [indecipherable 22: [22:09] 10] the same for Valid, Invalid to act this way or if it's going to be some way to complement it. But you don't want to annoy your end users. You just want to tell them they're wrong when they're wrong. Right? At least most of the time.</p>
     <p>[22:24] And then you can also style Placeholder. And a Placeholder attribute is basically just a text describing what kind of content you expect in a text field in that form.</p>
     <p>[22:35] You have two ways to style it right now. You have the &quot;Moz-placeholder&quot; to style it in Firefox, and you have the &quot;WebKit- input-placeholder&quot; for Safari and Google Chrome. It works pretty good. You can set the background color. You can set the foreground color.</p>
     <p>[22:52] However, all kinds of styling and different error messages before it. Safari is not really playing all the way. It's sort of doing some things it feels like, and some things it just doesn't. So with the placeholder thing, for instance, you can set the foreground color but not the background color.</p>
     <p>[23:08] I don't know. It just hurts.</p>
     <p>[23:12] And what everyone's asking about, of course, is that sure, those error messages look awesome in Firefox, but there are other Web browsers out there, too. Sorry. So how can I style them? How can I control the look of them?</p>
     <p>[23:27] I do think that it's really good that with the WebKit work that they have new ways of approaching that. They're having the validation &quot;Bubble-message&quot; and the &quot;Bubble-arrow&quot; and a couple of more. You have to describe actually how you want the error to look like.</p>
     <p>[23:38] I mean, you do have a certain kind of branding in your website. You do want it to look a certain way. We can all argue that for consistency that every input field in the world should look the same. Every button should look the same. It should all be the native look so the users don't get confused.</p>
     <p>[23:54] But it is about looks, too. You can't deny that.</p>
     <p>[23:57] So I do like the WebKit where here, it's just trying something out, seeing how you can style it. I'm not saying, &quot;It's better, but it's different.&quot; So what you can do here is just customize the look a bit more to your liking.</p>
     <p>[24:12] As far as I know, not a lot of Web browsers have tried this out yet. But I do hope it's going to happen. And it goes for everything with form fields. We do need more powerful ways of styling it.</p>
     <p>[24:22] I think it was touched on yesterday in Russ' talk with buttons and the test runs comment that we need more ways of styling. We still want to use the correct element. We just need slightly more control. We don't do...making crazy, but just slightly more.</p>
     <p>[24:38] And of course, with styling, you can always go too far. So I do encourage you to try this out but be gentle because once you've gotten too far, you can't really back down.</p>
     <p>[24:51] This is not the last picture. I don't even want to show you that. I've seen some bad shit.</p>
     <p>[24:58] So, who are you going to trust with this? If you want to see where forms work and how they work. Naturally...I'm not sucking up, now. I'm actually being honest. PPK's work is really, really good because you have all the compatibility tables.</p>
     <p>[25:12] You can see how things are working. How they're supposed to work. What kind of support you're going to have.</p>
     <p>[25:17] Also, the people behind Wufoo, who's working with selling customized forms for companies and originally got bought as well, have done lots of good work with Chris Coyier and other people.</p>
     <p>[25:29] And just having big-tables of compatibility, but also a number of working examples. You can see how it's supposed to work, what kind of feedback you're going to back. So I really do recommend looking into those.</p>
     <p>[25:41] The normal question, of course, is &quot;Can I actually use this?&quot; I think this is a valid question. I would say, &quot;Yes,&quot; but who knows. For me, everything with HTML5 now is sort of like the underpants gnomes in &quot;South Park.&quot; Step one is collect all underpants. Step two is no idea, and step three is profit.</p>
     <p>[26:12] Everyone seems to approach HTML5 now. &quot;We're going to do HTML5. We don't know why, but we're going to make tons of money.&quot; That's great. It's great that people try things out. I do want you to try things out, but I just want some caution, as well. Don't do it just for the sake of it.</p>
     <p>[26:31] In some cases, some technologies are going to be better right now. I hope HTML5 is going to keep on improving all the time, but don't use it just because you can.</p>
     <p>[26:40] You can use a number of things I've been showing today. This is more distilling the things into things that actually work with small hands, so what works slightly differently.</p>
     <p>[26:49] But everyone is implementing right now. And IE 10 is having good form support, as well. It's probably going to be out in six months or something, I guess.</p>
     <p>[26:59] So everyone's on board with this. It's happening all the time. And especially with mobile, as well as you see in iOS 5. It will be interesting to see whether the next version of Android. We'll get more and more form support there as well.</p>
     <p>[27:11] You don't want to hand roll your own forms for mobile. You just want something that works, that hooks into the mobile behavior.</p>
     <p>[27:18] As was mentioned, Polyfills. Of course, Polyfills are great. There are some cases that the performance is not that good but you're looking for forms, you can use it. You can use it to make your forms a little bit more powerful than they were before.</p>
     <p>[27:34] CanIUse.com, of course, is also a great resource. You just look for a certain feature you want. You get a Web browser support. You get a couple versions back. See how long it's actually been supported, if it's just the latest one.</p>
     <p>[27:47] Then, of course, people are going to come up with all these clever comments. Like, &quot;Don't do this.&quot; They're going to mock you and all that. That's the spirit of the Web. But, I want you to be brave. I do want you to try forms out.</p>
     <p>[28:03] And they're not going to work all the time, but I do want you to find what doesn't work just to...Going through the same pain I went through. Not because I want to give you pain, but because every Web browser vendor and specification writers need this kind of feedback.</p>
     <p>[28:23] We need to play around with things to see what goes wrong to be able to improve it. We can labor on some really, really cool shit. Behind closed doors you can do some things.</p>
     <p>[28:29] Some things aren't really ready for the limelight to deploy for every major website, but try to, in your own projects for smaller websites or something like that because in the future we're going to have the beauty of HTML5 forms.</p>
     <p>[28:43] It's going to be fantastic and the forms are going to be God's gift to developers. Slight exaggeration.</p>
     <p>[28:50] We do need your help. We do need you to hold our hand, to give us feedback, to help us get through this, and to make the forms better. Thank you.</p>
     <p>[applause]</p>
     <p>Robert: [29:13] I want to keep this short and we're going to have an open discussion. It could be questions. It could also be opinions on this. Where do you see this going and what kind of feedback do you have? Bright lights.</p>
     <p>Woman 1: [29:38] You actually mentioned that you found the fact that you could have an input type of pattern empty was a problem. But isn't that the only way to have an optional input-type-pattern field otherwise it's implicitly required?</p>
     <p>Robert: [29:56] It would be. It's a good point. I think it's more about you could use required attribute as well. I think it's more depending what the developer expects. If you say, &quot;I want this format,&quot; you expect something in but, yeah, I do agree. [30:11] Maybe required is the right way of doing it. It's more raising the question when you see the code, when you see the attributes, &quot;What kind of behavior do you expect? What's the natural way?&quot; You're clearly thinking more than I am.</p>
     <p>Man 1: [30:37] Hey. Datalists. Are they the right choice for autocompletes?</p>
     <p>Robert: [30:43] Sure. [laughter]</p>
     <p>Robert: [30:48] You lost the mic now. Would you like something else than Datalists? I think it's a nice way of giving the user some kind of hint what kind of input you expect. It could be the format or it could just be, &quot;These are the choices you have available for searching this database,&quot; or something like that.</p>
     <p>Man 2: [31:23] Following the Datalists thing, I think they are crap until you cannot match from the start. That's what bothers me most, that it matches anywhere and I would like to have it match from the start of the word. This makes them unusable for me.</p>
     <p>Robert: [31:47] Right. It's interesting because in some cases I would be happy just to find a certain letter anywhere in the word but in some cases you are just wanting to search in a certain way. [31:56] I'm guessing there might be an approach to complement that with. Maybe some attribute on the Datalist element saying, &quot;This is going to be the initial character,&quot; or something like that. I do agree, different expected behavior.</p>
     <p>Man 3: [32:33] This is a simple one. There was an input type named, &quot;Search.&quot; Isn't that a weird thing because all the other things are like entities in the type? A search is not like an entity, it's like a user action so how can it be part of a form?</p>
     <p>Robert: [32:39] Yeah. I'm trying to think of another example as well. Especially with some of the newer elements in HTML5 it's just bringing semantics, it's not necessarily behavior. If you have the search field now the only thing that happens is you get a different look so like a macro effect. [32:59] You're going to get rounded corners instead of square corners. You might get a little looking glass as well. I think in some cases it's more about describing the value, it's not actually entities like the other ones.</p>
     <p>[33:14] I think we're going to get more form options as well. Some are just going to be describing what kind of...either form that you expect or behavior you expect and some other ones are going to be full-on things like data pickers.</p>
     <p>[33:37] Yeah, that definitely is an interesting discussion with the area and HTML5. Where should it be? A number of cases are overlapping as well. It's getting better. I think it's going to be a bit tighter to just agree on which is the best way to describe something.</p>
     <p>[33:55] But if it were to be an area and only an area...maybe not in the search case, but in general it might help people to start using area as well if you just got introduced to it.</p>
     <p>Man 4: [34:09] I figure with &quot;Input type equals search,&quot; it's a mechanism for hanging UI from same as, &quot;Input type equals tel.&quot; It doesn't validate a telephone number because people often put brackets or a plus sign or hyphens but it gives the browser a chance to hang some user interface off. [34:35] On the iPhone, for example, it pulls up the telephone keyboard and with the search box it could autocomplete with previous searches, give you a looking glass. It's not a semantic but it's a UI hook if that makes sense.</p>
     <p>Robert: [34:45] To follow up on that, you do have in WebKit's previous results like, &quot;Saved results,&quot; as a couple of attributes way back in my slides. Let's see. [35:03] Sort of like the Datalist thing here. If you have been searching with this field before the number of results you want to show from before and also autosave is a weird thing, but should you save the searches for this field.</p>
     <p>[35:18] That's hooking into the UI, the Web browser, and giving more options. As far as I know only WebKit is doing it right now.</p>
     <p>[35:36] OK. All good. Now you should thank me because you get lunch early and a long lunch.</p>
     <p>[applause]</p>
     <p>[35:40]</p>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2011/sessions/html5-forms-kiss-time-robert-nyman.md" id="comment">
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
