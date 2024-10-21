<!DOCTYPE html>
<!-- Handcrafted with ❤️, by Krijn -->
<html lang="nl">
 <head>
  <meta charset="utf-8">
  <title>JavaScript - Like a box of chocolates by Robert Nyman · Fronteers</title>
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
  <link rel="shortlink" href="http://frnt.rs/p340">
 </head>
 <body id="fronteers-nl">

  <div id="container">
   <div id="main">
    <h1><a href="/"><img src="/_img/badges/fronteers-logo-300dpi.png" width="300" height="80" alt="Fronteers — vakvereniging voor front-end developers"></a></h1>
    <div class="section" lang="en">
     <h2>JavaScript - Like a box of chocolates by Robert Nyman</h2>
     <h3>Videos</h3>
     <video width="480" height="270" src="/_downloads/2010/robert-nyman-javascript-like-a-box-of-chocolates.webm" controls>
      <p>The <code>&lt;video></code> element is not (yet) supported in your browser; you can <a href="/_downloads/2010/robert-nyman-javascript-like-a-box-of-chocolates.webm">download the video</a> and watch it with <a href="http://www.videolan.org/vlc/">VLC</a>, for example.</p>
     </video>
     <ul>
      <li><a href="http://vimeo.com/15758849">Watch high quality video on Vimeo</a></li>
      <li><a href="/_downloads/2010/robert-nyman-javascript-like-a-box-of-chocolates.webm">Download video</a> (WebM, 146MB)</li>
      <li><a href="/_downloads/2010/robert-nyman-javascript-like-a-box-of-chocolates.ogv">Download video</a> (OGV, 72MB)</li>
     </ul>
     <h3>Slides</h3>
     <iframe src="https://www.slideshare.net/slideshow/embed_code/5383791" width="427" height="356" allowfullscreen></iframe>
     <ul>
      <li><a href="http://www.slideshare.net/robnyman/javascript-like-a-box-of-chocolates">See slides on SlideShare</a></li>
      <li><a href="/_downloads/2010/robert-nyman-javascript-like-a-box-of-chocolates.pdf">Download slides</a> (PDF, 22MB)</li>
     </ul>
     <h3>Transcript</h3>
     <p>Robert: [0:05] Well, good morning Amsterdam. I hope you're having a better morning than I have, it's probably because my room is so freaking big that I got lost this morning, and I tripped on the stairs from the main room going through the corridor to the bathroom. Otherwise I'm good, so... when I got invited to talk here at Fronteers, they asked me &quot;Who do you want as a support act? Who do you want to warm up the crowd for you?&quot;</p>
     <p>[0:33] I said &quot;Yeah, what about Jeremy Keith?&quot; You want to help the new guys, the up-and-coming guys, and you know get some exposure for them. I'm happy for Jeremy. Let's take it from the top. I'm Robert, apparently, and I think I'm going to give a talk and tell you about how things work and how you should do things and such. We need to establish a good relationship. You need to know who I am, and what I stand for. So let's start with the obvious things. Yes, I know I'm balding. I do feel like a ninja turtle, and I do have the goatee to cover up for it. Where it still grows, let it grow.</p>
     <p>[1:20] I'm from elsewhere. [laughter] There are some similarities. I'm not saying anything, people have pointed that out. I'm from Sweden, and yes, everything you have heard is true. It is the promised land. We love our flags. The problem, though, is when you travel around Europe and give talks, people always remind you of the first depiction of the Euro coin, [laughter] and I don't know what happened.</p>
     <p>[1:53] But to come here and to be known as the genitals of Europe, it's not a good start. At least we're not Finland or Russia, but still. So, the reason I'm actually here is to talk about JavaScript. I will not be talking about any JavaScript libraries, no fancy HTML5 APIs. I actually wanted to, I wasn't allowed to. So we'll talk about the core base of the things we're doing for interaction, and all kinds of amazing things on the web. I do think it's vital to understand JavaScript, and how it works before we start playing around with massive libraries, including 500 scripts and things moving on the screen.</p>
     <p>[2:47] We're sort of back to 1999 again, and at least we can try and do better this time around. So, JavaScript. In the beginning, there was nothing. We just had an empty vast universe, and then one man came along, one man by the name of Brendan Eich. Brendan Eich had a vision, or as we call in real life, a deadline. [laughter]</p>
     <p>[3:17] And I spoke to him, actually the last time I met him was about two weeks ago. You hear things about how fast JavaScript was invented, and how it went on. So, I had to ask him first person, what really happened? So, back in 1995, in Spring, I think it was May, in 10 days he created JavaScript. This is not fair, but it's like creating the world and resting on the seventh day. Given 10 days, he did pretty good. Some things aren't awesome, but it's a great start, I mean we're building upon that now to make things better.</p>
     <p>[3:57] So, the first version of JavaScript was in a beta of Netscape 2, then came the days of the Netscape code and other things. Reminiscing. Then, of course, the way it works in the programming world, Microsoft took a look at JavaScript, reverse engineered it, and then gave it its own name, JScript, which is more or less the same thing. I'm not going to work out the finer details here. And also, given all the impact that Brendan had on JavaScript, there's also one other man, Douglas Crockford, who was sort of our shepherd leading us through all of this, and going through how to work with JavaScript, which are the good parts versus the bad parts.</p>
     <p>[4:47] How can we use this for good and not evil? All the other clichés. And in short, that's the history. But where are we now? Why are we talking about JavaScript still? Did it die five years ago? Well, I think the attitude, something like this, this is... Well, I've corrected the spelling mistakes, but this is an actual comment by a developer. It's more like &quot;I'm not going to learn JavaScript. I don't want to learn anything new.&quot; Which is a great attitude for a developer, to begin with. It's more like &quot;I know this, and therefore I'm going to keep doing the same thing from now until I retire.&quot;</p>
     <p>[5:31] So he was, you could call it whining. That's like &quot;Oh, do I have to learn JavaScript?&quot; And that's how it goes on, but he kind of gets the dispair of it. &quot;I put so much effort into not doing this. Really? Do I have to?&quot; He takes it even further. If he has to learn JavaScript, he might as well amputate one of his legs. Where we are today, that might be necessary, because if you don't learn JavaScript, and you work on the web today, with interfaces, you need to learn JavaScript.</p>
     <p>[6:08] You learn HTML, you learn CSS, and you learn JavaScript. These three go hand in hand. And also, where JavaScript is today, we can always define the world, the word &quot;popular&quot;. But it is the world's most popular language. It's on every machine and web browsers and interpreters and things to run JavaScript, and so many people and organisations have invested so much money and so much time into JavaScript. If there would be any technology to bet on today, it would be JavaScript. It's going to be around for a long, long time, and it's shaping our future.</p>
     <p>[6:49] And you know, if you do learn it, it's going to be fun. It hurts at first, like most things, like some things that happened last night, but eventually, you come to enjoy it. And, whereas you were about 10 years ago when it was just slow and sluggish and killing websites, it's become really, really fast today. Web browsers put so much effort into interpreters and compilers and such to make it run as fast as possible, to get a smooth experience. It's always mandatory to have a diagram, right?</p>
     <p>[7:22] And you can't really see what it says, but just to say, on the left hand side here, we have IE8. And IE8 wasn't really, to be honest, God's gift to JavaScript performance. But just look on the right hand of this diagram. All the web browsers today are so fast, that it's just tiny, tiny marginals if you compare them. They're all extremely good at running JavaScript, and they're becoming better by each day. The issue when I give talks, it's probably more for me than for you. You know, it's not you, it's me.</p>
     <p>[7:58] I want to have some sort of theme for my code examples, because otherwise you make up some weird shit about dolphins and crap, and people wonder what they paid for. So, I'll try and have a red line through my talk and having code examples with Forrest Gump, hence the title of the talk. So, actual code. If you start from the beginning, you just declare a variable. We have the var key word. We give a name to it, that's Forrest. We have functions. We give it a name and it returns a certain value. That's pretty basic.</p>
     <p>[8:34] Then of course, we have &quot;if&quot; statements and &quot;switch&quot; statements. This is just a little check. If that is &quot;True&quot;, do this. With switch of course, you have different cases. If you have a certain value you do that, otherwise you do that. All good.</p>
     <p>[8:53] Then we're going through a few characters of code that do lots of things when we start to create objects and arrays. So, the topic up here is an object literal. This is just how to create an object, it has a property, a first name, a value of Forrest.</p>
     <p>[9:10] The second one is how to create an array. Just use the angled brackets and have my value printed within there. Now, I have an array to work with.</p>
     <p>[9:23] We also have something labeled shorthand assignment. Which is basically in this function, if you send in a value in &quot;boxOfChocolates&quot;, it will equal to &quot;True&quot; and it will assign that value to the variable &quot;life&quot;. If it's &quot;False&quot; or doesn't have a value, you just have the two piped characters here so it just defaults to &quot;Snickers bar&quot; instead.</p>
     <p>[9:45] You also have Ternary Operators which is basically just an &quot;if else&quot; saying as a one liner. Within the parentheses, we have the looking value. If it's &quot;True&quot;, it's going to be a &quot;I gotta find Bubba!&quot; value. Otherwise, it will default to &quot;It's ok.&quot;</p>
     <p>[10:03] We also have something called Short-circuit logic. The reason I bring this up and I hope it makes sense but in a lot of code I see and through audits and such, people just keep on nesting &quot;if&quot; clauses. It's like a tree of &quot;ifs&quot; and then some code that actually does something.</p>
     <p>[10:21] The easy thing here is you can just do the one &quot;if&quot; clause. You check if object, or 'obj' here, actually exists and if it does, they can start checking values on it without having a variable.</p>
     <p>So in JavaScript, I need to do something geeky. In JavaScript, we have different data types. The data types in JavaScript are fairly simple. We have strings, numbers, booleans. We also have &quot;Null&quot; and &quot;Undefined&quot;, which are, well, different.</p>
     <p>[10:58] The rest of it are objects. They all stem from big mother objects. A part of objects is having arrays and dates, functions themselves are also coming from the object. We also have regular expressions.</p>
     <p>[11:17] If we have all of these data types, usually when you code you want to check what kind of data type a certain variable has. If we have the variable's &quot;firstName&quot; here, we'll just have the data type &quot;string&quot;. The function will determine as a function and then you can make different code branching depending on that and how you want to work with it.</p>
     <p>[11:36] We also have and you saw before with having the objects and arrays, the problem here is if you use &quot;typeof&quot; of an object, it's an object. If you use it on an array, it's also &quot;object&quot;. It just comes from the object data type.</p>
     <p>[11:51] That doesn't really help us. It's sort of like the scripting errors in Internet Explorer here. &quot;Null = Null&quot;. Yeah, of course. But why? What happened?</p>
     <p>[12:02] The same thing here with &quot;typeof&quot;. What you do instead to compliment and use instead of &quot;typeof&quot; if you're going to have a case between an object and an array, you can use something called &quot;instanceof&quot;. You can check the variable and you check &quot;instanceof&quot;. If it's an actual instance of the array object, then you can see if it's an object or array.</p>
     <p>[12:24] Also in JavaScript, things aren't really what they seem. So, you need experience. That's why I get to talk. I'm not very good but I'm old so I've been around with code, nothing else. [coughs]</p>
     <p>[12:42] It's disgusting when you hear your own body noises amplified a lot. I would not want that at home. [laughter]</p>
     <p>[12:54] So, looking at different values, they are not actually what they seem. Like I said before, we have &quot;Null&quot;, we have &quot;Undefined&quot;, and also here we have the number &quot;Zero&quot;, or &quot;False&quot;, or empty string. If you try to check all of these values with an If, they will all default to &quot;False&quot;.</p>
     <p>[13:12] It's not like the string could have been defined and all of that. If it's empty, it's &quot;False&quot; in the world of JavaScript. It's like trying to write a document with Word and it's Paperclip and all of that. It's trying to guess what you're going to write instead of actually looking at what you write.</p>
     <p>[13:30] The same thing with different values in JavaScript. That's why you need &quot;typeof&quot; and &quot;instanceof&quot;, to check actually values and see if they're defined as well.</p>
     <p>[13:40] I do like this picture. The thing is, in the military and especially in the American military, is that if you are forced into doing something you don't want to and it's put on tape or something, you cross your fingers to show that you are forced into doing that. That you didn't really want to do that.</p>
     <p>So, I like that. That this military was apparently forced to shake hands with Hillary Clinton for the press or something but he wanted to send a message to the &quot;buds&quot; showing that he doesn't really like Hillary.</p>
     <p>[14:13] Looking at coercion, what it actually means, I'm blaming my cold that I can't pronounce coercion correctly and I also have the mandatory quote from Wikipedia, it's basically forcing something to behave in a manner that it doesn't really want to.</p>
     <p>[14:32] What it means in the world of JavaScript, is that one can have a different variable assigned to that one (???) but then in an &quot;if&quot; clause, if I compare the number seven with the string seven, it's going to equal &quot;True&quot;. What JavaScript does, it just looks at the values and sees like, &quot;What if I for you, make these into the same type and then compare them? That might be true.&quot;</p>
     <p>[15:01] This of course, will throw you off. It will mess up your code. What will happen in JavaScript is that we have three equal signs, which is an identity check. What the identity check does is, the first check is, is it the same data type? Are the values both numbers or both strings? Or, whatever you are checking.</p>
     <p>[15:23] If it is yes, then you can actually check the values. It's a really good way to make sure that nothing goes in there when you don't expect it to. Yeah, as I said.</p>
     <p>[15:39] It also happens when you are trying to concatenate a string. Like you have a string &quot;5&quot; and you add on the number 6 or 7. This could be a really common case like Jeremy was talking about before, having a number field. If you take the value from a form field, it's a string.</p>
     <p>[15:59] They might try to add that up. If you add a string with numbers, it just defaults into a string and it's not really what you expected.</p>
     <p>[16:06] To make sure that doesn't happen, you can use something like &quot;parseInt&quot;. What &quot;parseInt&quot; does that it takes the value and turns it into an integer, actually a number, and then you can add it up. That is going to work.</p>
     <p>[16:25] This is not a pause. I just need a drink. [laughter]</p>
     <p>[16:32] The nice thing with JavaScript is that you can get this to sort of run itself. What I mean with that is, we have something in JavaScript called self invoking functions. As you can see here, there is a couple of parentheses, but also at the end of the code here, just before the semicolon, it's a couple of parentheses which actually runs the function right away. The compiler re(… ???) the function and then it runs it. And it doesn't really make much sense here, but remember this, and I'll get back to it later.</p>
     <p>[17:10] Also, if you come from another language, there's no overloading in JavaScript, which basically means that you can't have various depictions of a method and accept any number of parameters for them and just find which one (???). So, what you have, instead of overloading JavaScript, is something called arguments. So if you have a normal function here, we have the difference function, and we just want to add up &quot;friend1&quot; and &quot;friend2&quot;. Of course, the first call's going to work out because it expects two parameters, you send in two parameters, fine.</p>
     <p>[17:45] But if you're only sending one, you're going to get back an &quot;Undefined&quot; value, because you had no value for that parameter. This is where arguments steps into JavaScript, that in every function, by default, you have something called the arguments collection, which means that even if it's not specified at the top, that any number of parameters that you send in will be a part of the arguments collection. They can just iterate over all of the arguments, read out the values. It could be one argument, five, or 713, and it's going to work.</p>
     <p>[18:20] So, it's just a good way to not have overloading, but have more flexible functions and have different numbers of parameter being sent in. Now we're also going to talk about objects, and objects are important in JavaScript. I'm sorry for being a man, but Christobelle Holy Firefox. [laughter] So if you come from something like Java, if we create a structure or an object in JavaScript, you have the &quot;Forrest&quot; object here, and it has two properties. It has &quot;firstName&quot; and &quot;lastName&quot;, and then just create an instance of that object. So, &quot;var forrest = new Forrest&quot;.</p>
     <p>[19:04] And it's not mandatory, but it's just a good way to write it. If you have an object constructor, it should be uppercased the first letter, like a big F for Forrest. As you saw before, you can also use the &quot;object literal&quot; approach. You can just assign the variable directly, and use the curly braces here, and then you have the different values. And the difference here is that you don't use the &quot;this&quot; keyword. You don't have &quot;this.firstname&quot;, &quot;this.lastname&quot; instead you just have first name, last name.</p>
     <p>[19:36] That's what you saw in the previous file, you had the equal signs and semicolons. But in object literals, instead we just have colons in the middle, and then we have regular commas separating the different values. You also need to make sure that after the last value, you don't have a comma, because that would throw some web browsers off. You can also iterate over all of the properties in an object that you have created. You just use a regular for-loop and just log out the different values.</p>
     <p>[20:09] OK, what's the value of item, and if I check... Oh sorry, that's the name on the property, which is &quot;item&quot; here. And then actual value assigned to that property, which is Forrest[item]. And also, as we saw before, having empty strings and such, defaulting &quot;Fals&quot;, what you can do in JavaScript, is that you can do a check like &quot;if ('firstName' in forrest)&quot;, and then firstname actually could be empty, but it will still return &quot;True&quot;. So it's more of a safe way to make sure, OK, does it have the property? I don't care about the value. I just want to see, does the property exists at all?</p>
     <p>[20:47] And if yes, do something with it. And as opposed to most other languages, if you talk about inheritance in JavaScript, it's something called &quot;prototype inheritance&quot;. The thing with prototype inheritance, basically, as we saw before, you create an object like ForrestAsChild object here, and then you want to have a method on that object. So on ForrestAsChild, you use the prototype approach and just apply a fast method. And let me keep on going. If you create another object to complement that, ForrestAsGrownup, it has just a property that he joins the Army.</p>
     <p>[21:32] But also, the prototype of the entire ForrestAsGrownup object is the ForrestAsChild object, which means that the ForrestAsGrownup object will have have everything from ForrestAsChild, plus the new things you add to it. And then it has this method of its own, which is a little accident with the bathrobe. So, if you first create an instance of this object, you have the grown-up object, OK? var forrest = new ForrestAsGrownup();. And then when it runs the ruinsBathrobe-method, and returns the value that you had on the grown-up object.</p>
     <p>[22:12] Then if we run the runs fast method, it checks the Forrest has grown object, and it sees &quot;OK, it's not here&quot;, but we've got the runs fast method from the forrest as child object. The last one here, which is a method that, luckily, Forrest doesn't code JavaScript. He'd probably be better than I do, but still it fails. It returns undefined. So, what you need to understand when you work with JavaScript and inheritance is that there's an inheritance chain or scope chain.</p>
     <p>[22:48] If you try to run the method, or check the property of an object, it first starts with checking that instance. OK, &quot;forrest&quot;. Did it have any method name list? OK, and if it doesn't have that, it goes on to the grown-up constructor. Did this have any method for all of these? No. And it keeps on going until the ForrestAsChild. If it doesn't have anything on the ForrestAsChild object either, it just goes up into the mother object in JavaScript. So it just keeps on going up all the way, which is also a good thing to think about, because if you start extending JavaScript and if you're extending the core object in JavaScript, it's going to affect all of your code for everything you create, basically.</p>
     <p>[23:32] And that's a bad thing. Also, JavaScript is very extensible, like if you have a JavaScript implementation in a web browser, you can sort of fix it or extend it in any way you want to. Since we saw before, using prototypes, what I can do here is that, for instance, earlier versions of Internet Explorer didn't support the push method on array objects, so what I can do here is that I can check using &quot;typeof&quot;, as we saw before, on the prototype of the array object: does it have a push method.</p>
     <p>[24:14] If that is undefined, I can just define my own push method and fix the web browser for that. And good thing about this, of course, is you don't write your own push method for everyone. If it's implemented, fine, and you can attach anything, but if it doesn't, I can help you on the way. And I can just run the code here and use the push method on the array, and it would work in virtually any web browser. I'm not really sure what I used, what kind of drug I used when I choose my pictures, but this is about scope when things are accessible and when they aren't.</p>
     <p>[24:54] And looking at scope in JavaScript, it's pretty easy. We have a global scope or a local scope. In a JavaScript file, if you define a variable, like the var quote here about running, it's global. And if you use the var keyword within a function to declare a variable, it's local to that function. All good and well. One of the most common mistakes is that people omit or forget the var keyword. If you do that within a function, that variable becomes global by default, which is very scary and the root of many, many problems.</p>
     <p>[25:33] So, if you're going to have a local variable, always remember to specify the var keyword. And also, you can start nesting functions. This, I've pretty much worked out before the presentation. I had to run down and do my thing, but if you have a function, &quot;meetingJFK&quot; here, it's just a global function. You can access it from anywhere, but within that function, you have the forrestReply-function. And the forrestReply-function, it's just local to its outer function. So, you can only access forrestReply from within that function. Outside of it, it doesn't really exist as the rest of the world sees it.</p>
     <p>[26:17] And also, you can control the scope within JavaScript, like if you want to use the &quot;this&quot; keyword in a function or in the method, you can use two different methods on a function, and the methods are called call and apply. With call and apply, the first parameter of those methods is the scope. If I called the function &quot;WhoAmI&quot; with call here, I just set that the first parameter is &quot;document&quot;. That means that &quot;this&quot;, within the &quot;WhoAmI&quot; function, is going to be &quot;document&quot; and not &quot;window&quot;, which is the default in web browsers.</p>
     <p>[26:55] And if I call on a &quot;document.body&quot;, it's going to be &quot;body&quot;, of course. So that first parameter is actually not being sent in. It's just setting the scope of the receiving function, like what's the context I'm working in. The only difference between the call and the apply methods is that call, you can sent in comma separated values as parameters to your receiving function. With apply, you send in a collection instead, or send in an array, which is pretty useful because you can begin to pipe things all the way over.</p>
     <p>[27:31] You can use the apply method, and just send in arguments, as we saw, for the function. You don't need to specify any value in the array, you can just keep on passing an argument to another function, then the new function will have arguments from the previous function. And the good thing to know about scope, is of course, as you saw before, with the global scope, when you omit some things or forget some things, you pollute the global scope. Polluting the global scope is bad, when it comes to coding and when it comes to factories.</p>
     <p>[28:05] So what you want to do is make sure that you have as few values accessible in the global scope as possible. Try to make your code as self-contained as you can, especially when you start including code from other websites and someone like Chris Heilmann, every other day he creates a new JavaScript, then you include that. He writes good code, but still you don't want to have your code interfere with his code, or the other way around. How many of you watch &quot;Friends&quot;? That's not the feedback that I wanted. [laughter]</p>
     <p>[28:41] OK. We're sort of missing the point. Ross and Rachel, they had a relationship, OK? Clearly, clearly they were on the break when he was having some fun. But the problem is, why they got into an argument, is that they didn't have closure. We need closure in JavaScript as well. Nice? Yeah? [laughter and applause]</p>
     <p>[29:12] The thing with closure in JavaScript, closure in JavaScript extremely important. It's sort of the basis for any proper advanced JavaScript coding the thing with closures, if you look at this function, and I'll try and be gentle, it's that we have a function. We have the &quot;happens&quot; function. The &quot;happens&quot; function returns a new function, and within the function, it returns the value of the parameter &quot;what&quot;, plus the value of what's being sent in. So if we have a variable for action, and action just gets the value of the happens function the first time it's being run.</p>
     <p>[29:59] And then it remembers that value for eternity. Then if you call action, because action has suddenly become a function which was returned from the first function, it will just remember the value of &quot;what&quot;. Then the key thing to look at in the code here is, if you look at the inner function being returned here is that inner functions will always have access to its outer function's variables. So the inner function here can always assess the value of &quot;what&quot;, even after the happens function has been run through.</p>
     <p>[30:34] Usually, you talk about this and it's just freaking scary and weird and you don't want to know what triggers behavior like that. But if you just try and break it down here, it's that the inner function with the &quot;what&quot; value here, the &quot;what&quot; value will always be remembered. The the last part isn't technically 100% accurate, but just to make it easier to understand. The new action variable is as if the value of shit, which is the value of the &quot;what&quot; parameter, have been hard-coded in. So it will always remember that &quot;what&quot; was shit. I'm sorry. [laughter]</p>
     <p>[31:21] So, just emphasizing, inner function must always remember the values of its outer function's parameters and variables. The best way, though, I mean, my slides are going to be available online if I ever access the WiFi, the best thing to learn here, whatever you're doing with coding, is take some code that someone like me claims actually works, and break it. You know, remove things, test stuff, see how it behaves, because that's the only way to properly learn. You can read books forever, but you need to test and practice how it works and how different environments actually behave in real life.</p>
     <p>[32:03] So, to begin a more proper example, and this is the thing that most people have gone through, is that you can just... I'm going to create three links in my documents, and I'm going to give them value, which is link zero, a link one, etc., and then I assign an onclick function. When you click the link, you sort of expect the value of &quot;i&quot; for that link. So if you click the first link, you want it to be zero, if you click the next link, you want it to be one, et cetera.</p>
     <p>[32:34] The weird shit here is, if you click the middle link and expect one, it says three. Why does it do that? The reason it happens is that I was talking about it, inner functions always remember the value of outer variables so you see, if I click here, it just assigns a function and we'll just remember the value of &quot;i&quot;. As you can see, in the loop, &quot;i&quot; has been counted up to three, so it won't care what value it had when onclick was actually assigned. It will just remember that oh, the loop went on and ended up as three.</p>
     <p>[33:10] So no matter which link you click, it's going to say three. Talking about closure, the way you can get around this is, when you assign onclick, you can assign a function that's being run right away. Talking about playing with yourself, self invoking functions. So what happens is that, at that moment in time, just that specific iteration in the loop, you send in the value of &quot;i&quot;. That value is assigned to the index parameter, and as you remember, inner functions remember the value of outer parameters. The inner functions being returned, the function actually being run when you click on the link, will remember the value of index when it was being sent in. Which means that it was zero for the first link, one for the next link, two for the last link and such. Magic.</p>
     <p>Also talking about Douglas Crockford, when he's not wearing his Gandalf suit, is that Yahoo in general, I'm not sure if I credit Crockford or Yahoo and the good developers there. But they came up with something; the nick name was the Yahoo JavaScript Module Pattern. And the thing with that, is that talking about closures and creating scope, that what you can do is if you have an object that you want to create, you just assign it to a function that's self invoking. Which means that it runs itself right away. And within that function you have a return statement. This basically means that anything in the return statement will be publicly available. Like as a method on that object.</p>
     <p>[34:59] So forest.getFirstName(); will get the first name. But the first name variable at the top here is not accessible, because it's just within the function. And again, inner functions have access to outer variables and parameters. You could also, and it's just a matter of taste, Christian was the first one who showed this to me, in the return statement if you don't want a lot of code there, you can just you know, the value on the left is the API way of exposing the name of method, and the value on the right, which is the same here, is just the name of the function, the firstName function here, to run. And the value on the right can be anything, just to make it easier. And it's just a matter of taste if you want to do the thing on the previous slide or on this slide.</p>
     <p>[35:59] When I try to find pictures for slides, you always think I want something good that you can sort of connect. There was really no good picture for namespacing, so this is the best I could come up with. [laughing] You do the best on what you have.</p>
     <p>[36:17] And namespacing can mean a lot of things. But in JavaScript it's basically about creating a container object. Like you have a Movie object here, which itself is the namespace for all the objects I will be creating. And the Movie object then gets another object, a Movie.forrest using the Module Pattern, it's a new object. And that object has two public methods, like firstName and getFirstName. Then we can use that, and I hope it's readable.</p>
     <p>[36:50] At the top we have the forrest object as before. And at the bottom we have Lieutenant Dan, the poor guy in the wheelchair. And the getFullName method on Lieutenant Dan, what it could do, and we talked about inheritance before and prototyping, sometimes you can use namespacing instead and so have things side by side and not necessarily children of each other. So what you can do here to getFullName method on Lieutenant Dan, it that you can call the method of the Forrest object but you use the .call method and set the scope.</p>
     <p>[37:27] This basically means that the line at the bottom here, this and the receiving one, is actually the Lieutenant Dan object. And this is also a good way to protect your code. The only really global thing we have is the movie object. The rest of the things are just properties on the movie object not a number of different global object names. Yeah, what I said.</p>
     <p>[37:55] And like I said about messing around with code, what you need to do is try things. And things are bound to break. And luckily, or hopefully, none of us program airplanes or something, it's just web pages. So just, you know try it out and then you see how it works, and then you learn from that.</p>
     <p>[38:15] And some of the most common tips and tricks with JavaScript is that the DOM is not really that nice to play with. If you want to update values it could be slow, so you want to minimize DOM access as much as you want to. As you can see here, I just checked the container element over and over. And then I keep on adding strings to existing values. Which means that it has to check its existing value every time. Which makes it slower, and there's not really any need to be that mean to it. So what you could do instead is use a variable, access that object in the DOM once, and then you use that variable instead.</p>
     <p>[39:00] And you also use another variable for all the strings that you want to concatenate. Assign it to &quot;content&quot; and instead of just adding onto a string, instead I'm working against a dot in their HTML property (???) over and over and over. And if you do it like this, things might work out well. [laughter]</p>
     <p>[39:21] Another way, and it's probably more a personal taste thing, if you have lots of variables in a function you can use the var keyword over and over and over. But you can also just comma separate it. So if you have the var keyword here and you have different variables. You have the rich variable, and then you just have comma, and then you have the next variable, and the next, and the next. So it's just one time to extensiate when you create the variables.</p>
     <p>[39:50] And you know peoples favorite things, I'll try to be careful of what I say here, people always discuss, what's the ultimate loop? How to I conquer the world with the one true way of doing it? And you know there can be only one and all that. Which is not really true, but I'm not going to put any more value into that.</p>
     <p>[40:09] But if you have a loop like this that gets all the paragraphs in the document, it iterates over them. And [coughs] sorry, I'm dying here. And it iterates over them, and also what it does with the allParagraphs array here, is that it does constant look-ups into that array. So the first problem is here, that when you have a for loop, you have three parts when you define the for loop. The first part is the variables, what happens at the first time you just start the for loop. The one in the middle and the one on the right, that happens for every iteration in the loop. And if you're going to go through or over a lot of different values that's an unnecessary performance hit.</p>
     <p>[40:59] So what it means here that you have the allParagraphs.length, you need to check length for every time it goes around the loop. And that's not a good thing. Another thing that you don't want to do is that for each time that you go around the loop. Go around I don't want to keep everybody waiting. For each time you go around the loop you don't have to create variables within the loop. You have to create them outside the loop instead, because it's just an unnecessary performance hit. And also talking about doing lookups on the allParagraphs array here, it's that to look up an array could cost you, especially if it's huge array.</p>
     <p>[41:38] So instead of that, if you try and make the code simpler here, is that at the beginning of the for loop, we declare all of the variables that we're going to use. And then we have them ready. What this also means is that... I have an error in my code. I'm sorry. Of course, the &quot;l&quot; variable after the zero should equal the allParagraphs.length. So you check the length of allParagraphs once, so now you don't need to check it. Then &quot;i&quot; can only compare to &quot;l&quot;, which is a fixed value and not a lookup on allParagraphs.</p>
     <p>I also define the link variable at the beginning of the loop, so I don't have to define it in the loop for each iteration. And at the end, I have a new variable, called &quot;paragraph&quot;, which does, for each iteration loop, it does one lookup in the array and then uses the variable instead to do things to that value, like checking the ClassName or appending a new childnode to it or something like that.</p>
     <p>[42:48] And my favorite thing, and usually I can't use this because Douglas Crockford is giving a talk at the same conference later on his thing, but he's not here. And Jeremy mentioned before about semicolon insertion, stealing my material.</p>
     <p>[43:05] And the thing about semicolon insertion is that in JavaScript, semicolons are optional. You don't have to write them there and the interpreter will just put them in there for you, which is not always a good thing. And the thing with coding style and all that, you know, am I going to have the curly braces on the same line or am I going to have it on the next line? It's obviously a war between Java people and C-Sharp people and such.</p>
     <p>[43:33] But in JavaScript, especially a Return statement like this, it becomes a problem because this code will be messed up. What happens is that JavaScript inserts a semicolon after Return which basically means that the Return statement here becomes useless. It doesn't return anything; it returns undefined.</p>
     <p>[43:55] The curly braces are just considered an empty block. An object that you put there, but you can't access it anyway. Fine, I'll let it be there.</p>
     <p>[44:08] And you can't really see any more than that. And the last semi-colon there is just a dummy line. It just pushes down one line doesn't see it. So all the code that comes out here is just return, semicolon. So semicolon insertion is pretty scary. Again, Jeremy, thank you. With JavaScript, we have something called JSLint. Which is a good way to check your syntax. Like, have I used semicolons? Have I over-declared variables? Et cetera, et cetera. It's basically a lot of good practices to makes sure you don't run into the common problems that every developer does. And I think it's a developer thing to think that no one better ever have your code (???).</p>
     <p>It's one thing for you, but there's also... You're to hand over the code to some poor guy in the end. So you need something that works and you need to agree on good standards. Overall, JSLint is a very good way to approach that. To conclude, I know that some of the things about scope and closures, it could be a bit scary. And some people think that, &quot;OK. I will never grasp this. I cannot learn this.&quot; But I want you to go away with knowing that, if that guy can get that girl anything is possible in this world. If you have a dream... No, I'm not going to go down that road. Do you know about this, by the way? It's Macaulay Culkin, this one little Home Alone kid did a movie when he was about 10.</p>
     <p>[45:47] Then he went on drugs for 15 years and then he started dating her. I don't know where I went wrong in my life. Another thing to say is that, usually when I give talks, and you know about Twitter... If you have seen me giving a talk, it's mandatory to follow me on Twitter. You don't have to read it or like it or anything. But the thing is that the other speakers, they're mean. And they have so many followers. They look at my follower count. It's like, &quot;Why are you going to give a talk? You're no one.&quot; So please follow me. You can spam me with porn, that's fine. But please. OK? [laughter]</p>
     <p>[46:28] Thank you for listening and take care. [applause]</p>
     <p>Robert: [46:44] Yes, do we have any questions? I feel like a deer in the headlights of a car.</p>
     <p>Man 1: [46:54] Hi, I was just wondering...</p>
     <p>Robert: [46:55] I'm sorry, hold up over here, oh. [laughter]</p>
     <p>Man 1: [47:02] Hi. Should you really ever use a double equals instead of a triple? Or is there any reason that you should use a double instead of using a triple?</p>
     <p>Robert: [47:14] So the question is if you have equals signs in talking about type coercion that if you use two equal signs or three equal signs, could you use both? I would say use three equal signs all the time. Just to make sure that you don't run into anything weird.</p>
     <p>Man 1: [47:31] Yeah, I know that's what I was thinking but I saw you had double ones up there so I thought to ask.</p>
     <p>Robert: [47:37] I'm going to fake and say that it was just an example, not how to do it, if that's OK. [laughter]</p>
     <p>Robert: [47:46] Yes. There's someone.</p>
     <p>Man 2: [47:50] What's your opinion about for and then var i? Years ago I read that declaring the var i in the for loop is also bad performance. But still I always see for and then var i. Should you do it outside so first var i and then for i is lower than number, or doesn't this make a difference?</p>
     <p>Robert: [48:14] Right. So the question is when you start the loop like you declare the variable i, like var i=0, should you do that in the loop or is it a performance hit; should it do it before the loop?</p>
     <p>From what I've seen and it hasn't really been that much of a performance hit. I mean it could be, you can talk to someone like Andrea Giammarchi who's  from Micro-performance Optimization, and but, I haven't seen any real difference in practice if you define it, you know, before the for loop or at the beginning of the for loop. And sure, it is good to think about that, I am preaching about that. But, at the end of the day that could help but it's way more important to look at what we have inside the loop, you know what happens for each situation. And if it's many iterations, that's the big performance hit.</p>
     <p>[49:15] I see people.</p>
     <p>Man 3: [49:20] With the object literal and the instantiation of object, if you know that your object's only going to be one instance of it is there really a difference between, I mean is there an advantage for having an object which you instantiate which is the object literal?</p>
     <p>Robert: [49:38] So the question is, is there a difference between the object literal or and so, a constructor to create an instance of it.</p>
     <p>Man 3: [49:44] Yeah.</p>
     <p>Robert: [49:45] Right? To me I haven't seen any real performance difference, but I think it comes down more to style than how you work with it. Firstly, I'm a fan of the object literal, I think it's, you know, the syntax is more terse and easier to work with. But you know if you work with other people, and especially some of the Google work is you know doing it the other way around, I mean sort of the object constructor approach and showing it that way. But if it's just one instance, you know go with whatever works for you.</p>
     <p>Man 3: [50:20] Thanks.</p>
     <p>Robert: [50:28] No further enquiry? No? OK, thank you. [applause]</p>
     <ul class="post options">
      <li><a href="#comments" id="goto-comments"><strong>0</strong> comments</a></li>
      <li><a href="#comment" id="goto-comment">Comment</a></li>
     </ul>
     <form method="post" action="/congres/2010/sessions/javascript-like-a-box-of-chocolates-robert-nyman.md" id="comment">
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
      <li class="current"><a href="/congres/2010/sessions/javascript-like-a-box-of-chocolates-robert-nyman" class="current">JavaScript - Like a box of chocolates by Robert Nyman</a></li>
      <li><a href="/congres/2010/sessions/progressive-downloads-and-rendering-stoyan-stefanov">Progressive Downloads and Rendering by Stoyan Stefanov</a></li>
      <li><a href="/congres/2010/sessions/real-world-responsive-design-stephen-hay">Real-world Responsive Design by Stephen Hay</a></li>
      <li><a href="/congres/2010/sessions/reasons-to-be-cheerful-chris-heilmann">Reasons to be cheerful by Chris Heilmann</a></li>
      <li><a href="/congres/2010/sessions/reusable-code-for-good-or-for-awesome-jake-archibald">Reusable Code, for good or for awesome! by Jake Archibald</a></li>
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
