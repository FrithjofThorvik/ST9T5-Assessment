(this["webpackJsonpget-started"]=this["webpackJsonpget-started"]||[]).push([[0],{100:function(e,t,s){},101:function(e,t,s){},102:function(e,t,s){},103:function(e,t,s){},104:function(e,t,s){"use strict";s.r(t);var o=s(0),i=s(1),n=s.n(i),r=s(27),a=s.n(r),c=(s(65),s(20)),l=s(4),u=s(7),d=Object(i.createContext)(),h=function(e){var t=e.reducer,s=e.initialState,n=e.children;return Object(o.jsx)(d.Provider,{value:Object(i.useReducer)(t,s),children:n})},m=function(){return Object(i.useContext)(d)};s(66);var p=function(){var e=m(),t=Object(u.a)(e,1)[0],s=t.questionNum,i=t.test,n=t.submit;return Object(o.jsxs)("div",{className:"question",children:[n?null:Object(o.jsxs)("div",{className:"question-container",children:[Object(o.jsxs)("div",{className:"question-number",children:["Question ",s]}),Object(o.jsx)("div",{className:"question-text",children:i.questions[s-1]}),Object(o.jsx)("div",{className:"question-subtext",children:i.subtext[s-1]})]}),n?Object(o.jsxs)("div",{className:"question-container",children:[Object(o.jsx)("div",{className:"question-number question-submit",children:"Test Finished"}),Object(o.jsx)("div",{className:"question-text",children:"Would you like to submit your answers?"})]}):null]})},g=s(28),b=s.n(g);s(84);var w=function(){var e=m(),t=Object(u.a)(e,2),s=t[0],n=s.questionNum,r=s.test,a=s.answers,c=s.recommended,d=s.submit,h=s.contactId,p=t[1],g=Object(l.f)();return Object(i.useEffect)((function(){if(null!==c){h?sessionStorage.getItem("sessionContactId")?sessionStorage.getItem("sessionTest")?b.a.post("https://scrapthe9to5.com/scripts/IS/ISVaultAssessment.php?assessment=".concat(sessionStorage.getItem("sessionTest")),{contactId:sessionStorage.getItem("sessionContactId"),recommended:c,answers:a}).then((function(e){console.log(e)})):console.log("Session test was not recorded..."):console.log("Session contactId was not recorded..."):console.log("Session contactId was not stored..."),g.push("/result")}}),[c,a,g,h]),Object(o.jsxs)("div",{className:"answer",children:[d?null:Object(o.jsx)("div",{className:"answer-container",children:r.answers[n-1].options.map((function(e,t){var s;return Object(o.jsx)("div",{onClick:function(){if("single"===r.answers[n-1].select)p({type:"ANSWER",answer:t+1}),p({type:"NEXT_QUESTION"});else if("multi"===r.answers[n-1].select){var e=a[n-1];e||(e=function(){for(var e=[],t=0;t<r.answers[n-1].options.length;t++)e.push(0);return e}()),e=function(e,t){return 0===e[t]?e[t]=1:e[t]=0,e}(e,t),p({type:"ANSWER",answer:e})}},className:"".concat("multi"===r.answers[n-1].select?"answer-optionMulti":"answer-optionSingle","\n              ").concat((null===(s=a[n-1])||void 0===s?void 0:s.length)>1?1===a[n-1][t]?"answer--selected":"":a[n-1]===t+1?"answer--selected":"","\n              "),children:e},t)}))}),d?Object(o.jsx)("div",{className:"answer-submit",children:Object(o.jsx)("div",{onClick:function(){return p({type:"SUBMIT"})},className:"answer-submitButton",children:"Submit Answers"})}):null]})},j=s(53),v=s.n(j),y=s(57),f=s.n(y);s(89);var O=function(){var e=m(),t=Object(u.a)(e,2),s=t[0],i=s.answers,n=s.questionNum,r=t[1];return Object(o.jsxs)("div",{className:"navigator",children:[Object(o.jsx)("div",{onClick:function(){return r({type:"PREVIOUS_QUESTION"})},className:"navigator-previous",children:Object(o.jsx)(v.a,{})}),Object(o.jsx)("div",{className:"navigator-number",children:n}),Object(o.jsx)("div",{onClick:function(){i[n-1]?r({type:"NEXT_QUESTION"}):alert("Please select an answer before advancing...")},className:"navigator-next",children:Object(o.jsx)(f.a,{})})]})},x=s(31),k=s.n(x);s(91);var T=function(e){var t=e.location,s=m(),n=Object(u.a)(s,2),r=n[0],a=r.test,c=r.contactId,d=n[1],h=Object(l.f)();return Object(i.useEffect)((function(){!function(){var e;if(sessionStorage.getItem("sessionContactId"))d({type:"SET_CONTACT_ID"}),console.log("\ud83d\udd10 ContactId Validated: ",sessionStorage.getItem("sessionContactId"));else{var s=new URLSearchParams(t.search);s.has("contactId")?(e=+s.get("contactId"),isNaN(e)?console.log("\ud83d\udd10 contactId is NaN..."):(sessionStorage.setItem("sessionContactId",e),d({type:"SET_CONTACT_ID"}),console.log("\ud83d\udd10 contactId: ",e))):console.log("\ud83d\udd10 contactId param was not found!")}}(),function(){var e;if(sessionStorage.getItem("sessionEmail"))console.log("\ud83d\udd10 Email Validated: ",sessionStorage.getItem("sessionEmail"));else{var s=new URLSearchParams(t.search);s.has("email")?(e=s.get("email"),console.log("\ud83d\udd10 email: ",e),sessionStorage.setItem("sessionEmail",e)):console.log("\ud83d\udd10 Email param was not found!")}}(),function(){if(sessionStorage.getItem("sessionTest"))console.log("\ud83d\udd10 Session Test: ",sessionStorage.getItem("sessionTest")),d({type:"SET_TEST",test:sessionStorage.getItem("sessionTest")});else{var e,s=new URLSearchParams(t.search);s.has("test")?(e=s.get("test"),console.log("\ud83d\udd10 Param Test: ",e),"sfm-assessment"===e||"vault-assessment"===e?sessionStorage.setItem("sessionTest",e):console.log("\ud83d\udd10 Test param value not valid!"),d({type:"SET_TEST",test:sessionStorage.getItem("sessionTest")})):console.log("\ud83d\udd10 Test param was not found!"),s.delete("test"),h.replace({search:s.toString()})}}(),function(){var e=new URLSearchParams(t.search);e.has("email")&&e.delete("email"),e.has("contactId")&&e.delete("contactId"),e.has("test")&&e.delete("test"),h.replace({search:e.toString()})}()}),[d,h,t.search]),Object(o.jsxs)("div",{className:"test",children:[!c&&Object(o.jsx)("div",{className:"test-errorMissingID",children:Object(o.jsxs)("div",{className:"test-errorMissingIDBox",children:[Object(o.jsx)(k.a,{}),Object(o.jsx)("p",{children:"Your data will not be saved..."}),Object(o.jsx)("p",{children:"You can still take the assessment, but your data will not transfer to the vault."})]})}),a?Object(o.jsxs)("div",{className:"test-container",children:[Object(o.jsx)("div",{className:"test-header",children:"Questions"}),Object(o.jsx)(p,{}),Object(o.jsx)(w,{}),Object(o.jsx)(O,{})]}):Object(o.jsx)("div",{className:"test-errorMissingTest",children:Object(o.jsxs)("div",{className:"test-errorMissingTestBox",children:[Object(o.jsx)("h1",{children:"Pick Your Assessment"}),Object(o.jsx)("p",{children:"If you are not a SFM Member, please click take the Vault Assessment..."}),Object(o.jsxs)("div",{className:"test-errorMissingTestButtons",children:[Object(o.jsx)("a",{href:"?test=sfm-assessment",children:Object(o.jsx)("button",{children:"SFM Assessment"})}),Object(o.jsx)("a",{href:"?test=vault-assessment",children:Object(o.jsx)("button",{children:"Vault Assessment"})})]})]})})]})},S=s(58),N=s(121),I=s(119),C=s(120);s(92);var A=function(e){var t=e.id,s=e.title,i=e.intro,n=(e.description,Object(S.a)(e,["id","title","intro","description"])),r=m(),a=Object(u.a)(r,1)[0].activePath;return Object(o.jsx)(N.a,{onClick:n.onClick,className:"sliderCard ".concat((null===a||void 0===a?void 0:a.id)===t&&"sliderCard--active"),children:Object(o.jsxs)(I.a,{children:[Object(o.jsx)(C.a,{className:"sliderCard-header",children:s}),Object(o.jsx)(C.a,{className:"sliderCard-body",children:i}),Object(o.jsx)(C.a,{className:"sliderCard-button",children:"View"})]})})},E=s(18),Y=s(23),q=s.n(Y);s(100);var H=function(e){var t=e.cardType,s=m(),i=Object(u.a)(s,2),n=i[0].recommended,r=i[1];return Object(o.jsxs)("div",{className:"slider",children:[Object(o.jsx)("div",{className:"slider-header",children:"sfm-assessment"===sessionStorage.getItem("sessionTest")?Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Your Recommendations"}),Object(o.jsx)("p",{children:"We recommend making a list of all your recommendations to be most effective in the Vault"})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Important Message"}),Object(o.jsx)("p",{children:"We recommend watching this video explaining what you should do next."}),Object(o.jsxs)("div",{className:"slider-iframeBox",children:[Object(o.jsx)("div",{className:"slider-iframeContainer",children:Object(o.jsx)("iframe",{title:"Video Title",src:"https://www.youtube.com/embed/i3YnkXLFJH0",allow:"autoplay",allowFullScreen:!0})}),Object(o.jsx)("div",{className:"slider-viewMore",children:Object(o.jsx)(q.a,{onClick:function(){E.scroller.scrollTo("slider-recommendedAnchor",{duration:1500,delay:0,smooth:"easeIn"})}})})]}),Object(o.jsxs)("div",{className:"slider-recommendedAnchor",children:[Object(o.jsx)("h1",{children:"Your Recommendations"}),Object(o.jsx)("p",{children:"We recommend watching this video explaining what you should do next."})]})]})}),Object(o.jsx)("div",{className:"slider-headerBorder"}),Object(o.jsx)("div",{className:"slider-body",children:"SliderCard"===t&&(null===n||void 0===n?void 0:n.map((function(e){return Object(o.jsx)(A,{onClick:function(){E.scroller.scrollTo("result-bodyAnchor",{duration:1200,delay:0,smooth:"easeIn"}),r({type:"PATH_SELECTED",path:e})},id:e.id,title:e.title,intro:e.intro,description:e.description},e.id)})))}),Object(o.jsx)("div",{className:"slider-footerBorder"})]})};s(101);var W=function(e){var t=e.title,s=e.description,i=e.img,n=e.link;return Object(o.jsxs)("div",{className:"courseCard",children:[Object(o.jsx)("a",{className:"courseCard-img",href:n,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:i,alt:t})}),Object(o.jsx)("div",{className:"courseCard-title",children:Object(o.jsx)("h4",{children:t})}),Object(o.jsx)("div",{className:"courseCard-description",children:Object(o.jsx)("p",{children:s})}),Object(o.jsx)("a",{className:"courseCard-button",href:n,rel:"noreferrer",target:"_blank",children:"Watch"})]})};s(102);var M=function(){var e,t=m(),s=Object(u.a)(t,1)[0],i=s.recommended,n=s.activePath,r=s.answers,a=Object(l.f)();return Object(o.jsxs)("div",{className:"result",children:[i?null:a.replace("/"),"sfm-assessment"===sessionStorage.getItem("sessionTest")&&1!==r[0]?Object(o.jsxs)("div",{className:"result-warning",children:[Object(o.jsxs)("div",{className:"result-warningBox",children:[Object(o.jsx)(k.a,{}),Object(o.jsxs)("div",{className:"result-warningSubtext",children:[Object(o.jsx)("p",{children:"Before accessing the courses below in the Vault, we recommend that you finish the SFM/Mentors Getting Started modules"}),Object(o.jsx)("p",{children:"Of course you're free to watch anything below, however it's important to stay focused on getting the foundations in place at the start of your journey. The Vault is optimised to pick up where the modules finish and help you on the next stages of your online business journey."})]})]}),Object(o.jsx)("div",{className:"result-warningViewMore",children:Object(o.jsx)(q.a,{onClick:function(){E.scroller.scrollTo("result-top",{duration:1500,delay:0,smooth:"easeIn"})}})})]}):null,Object(o.jsx)("div",{className:"result-top",children:Object(o.jsx)(H,{cardType:"SliderCard"})}),Object(o.jsx)("div",{className:"result-bodyAnchor"}),n?Object(o.jsxs)("div",{className:"result-body",children:[Object(o.jsx)("div",{className:"result-viewMore",children:Object(o.jsx)(q.a,{onClick:function(){E.scroller.scrollTo("result-courseHeader",{duration:1500,delay:0,smooth:"easeIn"})}})}),Object(o.jsx)("div",{className:"result-courseHeader",children:null===n||void 0===n?void 0:n.title}),Object(o.jsxs)("div",{className:"result-bodyContent",children:[Object(o.jsxs)("div",{className:"result-left ".concat("vault-assessment"===sessionStorage.getItem("sessionTest")&&"result-leftMargin"),children:[(null===n||void 0===n?void 0:n.video)&&Object(o.jsx)("div",{className:"result-iframeBox",children:Object(o.jsx)("div",{className:"result-iframeContainer",children:Object(o.jsx)("iframe",{title:null===n||void 0===n?void 0:n.title,src:null===n||void 0===n?void 0:n.video,allow:"autoplay",allowFullScreen:!0})})}),Object(o.jsx)("div",{className:"result-leftCourses",children:null===n||void 0===n||null===(e=n.courses)||void 0===e?void 0:e.map((function(e,t){return Object(o.jsx)(W,{title:e.title,description:e.description,img:e.img,link:e.link},t)}))})]}),Object(o.jsx)("div",{className:"result-right",children:Object(o.jsxs)("div",{className:"result-rightDescription",children:[Object(o.jsx)("h2",{children:null===n||void 0===n?void 0:n.title}),Object(o.jsx)("p",{children:null===n||void 0===n?void 0:n.description})]})})]}),(null===n||void 0===n?void 0:n.link)&&Object(o.jsx)("div",{className:"result-nextStep",children:Object(o.jsx)("div",{onClick:function(){var e;(null===n||void 0===n?void 0:n.activeTag)&&(e=n.activeTag,sessionStorage.getItem("sessionContactId")&&e>0&&b.a.post("https://scrapthe9to5.com/scripts/IS/ISVaultAssessment.php?assessment=applyChosenPath",{contactId:sessionStorage.getItem("sessionContactId"),chosenPath:e}).then((function(e){console.log(e)}))),null!==sessionStorage.getItem("sessionEmail")?window.location.href="".concat(n.link,"?email=").concat(sessionStorage.getItem("sessionEmail")):window.location.href=n.link},className:"result-nextStepButton",children:"Next Step"})})]}):null,Object(o.jsx)("div",{className:"result-footer"})]})};var B=function(){return Object(o.jsx)("div",{className:"app",children:Object(o.jsx)(c.a,{basename:"/get-started",children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/result",component:M}),Object(o.jsx)(l.a,{path:"/",component:T})]})})})},L=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,122)).then((function(t){var s=t.getCLS,o=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),o(e),i(e),n(e),r(e)}))},F=s(5),P={questions:["Have you finished the SFM/Mentors Getting Started Modules?","Are you clear on your message to your Customer Avatar?","Have you finished building your Authority website? ","What are you using to build sales funnels?","Do you know what platform you want to market on?","Do you need help with the more technical aspects of setting yourself up to get started with your marketing?","Are you clear on \u201cthe numbers\u201d for your business?"],subtext:["","","","","","","Your target CPL (Cost per lead), CPA (Cost per Acquisition [All-In Sale]), etc..."],answers:[{id:1,select:"single",options:["Yes","Nearly","No"]},{id:2,select:"single",options:["Yes","No"]},{id:3,select:"single",options:["Yes","No"]},{id:4,select:"single",options:["Convertri","Simple Lead Capture","WordPress","Other"]},{id:5,select:"single",options:["YouTube","Bing","Facebook","Instagram","Don't know","Other"]},{id:6,select:"single",options:["Yes","No"]},{id:7,select:"single",options:["Yes","No"]}]},D={questions:["How technical would you say you are?","Do you consider yourself an artist/creative type?","How good would you say you are with numbers?","If it was \u201cdo or die\u201d, how much time would you say you could realistically find each week to dedicate towards a new venture?","Do you already have existing passions that you\u2019d love to build a business behind?","Do you have your own products / services / offer in mind already?","How much would you say you\u2019ve done in the area of personal development throughout your life?","Imagining that there are NO limitations, which options immediately sound the MOST exciting to you?","Assuming that you can learn any skill and overcome any fear, which options sound TERRIBLE to you?","What skills are you most interested in learning?","What would you like to create as a result of starting a new venture?"],subtext:["1) I can barely reply to an email\n...\n5) I can write code","","1) I struggle with basic addition\n...\n5) I\u2019m a human Supercomputer","If you knew it would ultimately replace your income...","","","","Select ALL that apply","Select ALL that apply","Select ALL that apply","Select ALL that apply"],answers:[{id:1,select:"single",options:["1","2","3","4","5"]},{id:2,select:"single",options:["No","Yes"]},{id:3,select:"single",options:["1","2","3","4","5"]},{id:4,select:"single",options:["Less than 10","10+","20+","30+","40+"]},{id:5,select:"single",options:["No","Yes"]},{id:6,select:"single",options:["No","Yes"]},{id:7,select:"single",options:["Nothing","Very little","Some","Alot"]},{id:8,select:"multi",options:["Running everything that you do through your laptop, meaning that you can travel and work from anywhere that you choose in the world (Coffee shops, coworking offices, a beach villa in Bali\u2026 You choose)","Being out and about in the world (Meeting people, doing deals, looking at potential property investments, that kind of thing)","Working with people one on one (Through Zoom) to help them transform their lives and create huge breakthroughs in an area that you\u2019re passionate about","Growing an audience/community online who love what you share and get a lot of value","Writing in your favourite, cosy place","Setting up systems or investing/trading to grow capital and earn an income, meaning you don\u2019t ever have to deal with people"]},{id:9,select:"multi",options:["Making calculated investments","Being accountable to servicing your clients","Dealing with importing/exporting physical products from other countries","Working one on one with people","Figuring out how to solve problems and provide value to people"]},{id:10,select:"multi",options:["How to create and sell a course","How to win customers on autopilot","How to create your own product","How to connect with an audience","How to sell other businesses\u2019 products and services","Property investing","Trading"]},{id:11,select:"multi",options:["Spend more time with my family/friends/loved ones","Replace my full time income","Travel the world","Develop a passion based side hustle","Secure my financial future","Increase my income","Make a real positive difference to others","Change the world","Connect with new, inspiring people"]}]},R=[{id:1,title:"Vault Info",intro:"Total Courses: 17\nTotal Services: 3",description:"The Vault is designed for memebers who have finished the SFM/Mentors Getting Started Modules, and are ready to begin marketing. The Courses & Services have been put in place to help you you on your journey, and be most efficient with your time. We hope you get value from it!",link:"",video:"",courses:[{title:"The Vault",description:"Our courses are delivered by experts and designed to do one thing; empower you with the knowledge you need to push your business to the next level. We understand that online business education is not \u2018one size fits all\u2019, that\u2019s why we consistently partner with specialists from multiple fields to effectively cover as many business models as possible with our courses.",img:"https://members.scrapthe9to5.com/wp-content/uploads/2020/10/Screenshot-2020-10-15-at-14.13.06-1024x612.png",link:"https://members.scrapthe9to5.com/"},{title:"Services Offered",description:"Starting any business comes with it's challenges. That's why Scrap the 9 to 5 has partnered with experts to remove those obstacles for you. Check out their services below.",img:"https://members.scrapthe9to5.com/wp-content/uploads/2020/10/Services-Offered-1.0.jpg",link:"https://members.scrapthe9to5.com/services-offered"}],tags:[1,2]},{id:2,title:"Customer Avatar",intro:"Total Courses: 3",description:'To get clear on your Customer Avatar, we\'d recommend watching "Defining your Customer Avatar", "How To Create A Kick Ass Ad", and "Caroline\u2019s Empower Hours".',link:"",video:"",courses:[{title:"Defining your Customer Avatar",description:"Identifying your target market is one of the most crucial, and earliest steps of defining your business and product. In this course Dan covers exactly how to do that.",img:"https://members.scrapthe9to5.com/wp-content/uploads/2020/02/Target-market-thumb-400x260.jpg",link:"https://members.scrapthe9to5.com/courses/how-to-identify-and-market-to-your-ideal-customer/"},{title:"How To Create A Kick Ass Ad",description:"Creating an awesome ad to connect with your ideal customer is the most crucial early step, it doesn\u2019t matter how good the rest of your sales funnel is if no one is clicking your ad! In this webinar Caroline goes through exactly how to do just that.",img:"https://members.scrapthe9to5.com/wp-content/uploads/2020/05/Carolines-webinar-thumb-400x260.jpg",link:"https://members.scrapthe9to5.com/courses/how-to-create-a-kick-ass-ad-special-webinar-with-caroline/"},{title:"Caroline\u2019s Empower Hours",description:"In these webinars our resident copywriting expert, Caroline Antonia, covers exactly how to improve the copy in your sales funnel to connect with your audience, build a relationship and ultimately get more conversions through the use of effective language and communication in your copy.",img:"https://members.scrapthe9to5.com/wp-content/uploads/2020/07/Empower-Hour-Expert-Copywriters-400x260.jpg",link:"https://members.scrapthe9to5.com/courses/carolines-webinar-replays/"}],tags:[1,2]},{id:3,title:"Authority Website",intro:"Total Courses: 1\nTotal Services: 1",description:"If you haven't finished up your Authority Website just yet, we'd recommend watching \"Gin\u2019s Website Clinic replays\". We're also offering a website building service within the Vault for you to check out.",link:"",video:"",courses:[{title:"Gin's Website Clinic Replays",description:"This webinar is for anyone who wants to empower their websites and make a real difference with their gifts in this world. Once you finish watching this webinar you\u2019ll know simple steps that can straight away improve your website but also where to start if you feel stuck with your website.",img:"https://members.scrapthe9to5.com/wp-content/uploads/2020/09/Website-clinic-course-thumb-400x260.jpg",link:"https://members.scrapthe9to5.com/courses/website-clinic-replays/"},{title:"Services Offered",description:"Starting any business comes with it's challenges. That's why Scrap the 9 to 5 has partnered with experts to remove those obstacles for you. Check out their services below.",img:"https://members.scrapthe9to5.com/wp-content/uploads/2020/10/Services-Offered-1.0.jpg",link:"https://members.scrapthe9to5.com/services-offered"}],tags:[1,2]},{id:4,title:"Convertri Training",intro:"Total Courses: 1",description:"If you are new to Convertri, or want to discover if there are any tips & tricks left for you to learn, we'd recommend taking a look at our Convertri Training.",link:"",video:"",courses:[{title:"Convertri Training",description:"In this course Kiril Kostov explains everything you need to know about Convertri one of the best page builders out there with lightning fast load speeds and full page customisation. He covers how to use the page builder and create sign up forms to adding specific tracking code and containers.",img:"https://members.scrapthe9to5.com/wp-content/uploads/2020/04/Kiril-Convertri-Thumbnail-400x260.jpg",link:"https://members.scrapthe9to5.com/courses/convertri-training/"}],tags:[1,2]},{id:5,title:"YouTube Training",intro:"Total Courses: 1",description:"To get started, or continue developing your YouTube marketing skills, we'd recommend watching both our YouTube- & Google Tag Manager Course.",link:"",video:"",courses:[{title:"YouTube Training Course",description:"Going from setting up your first YouTube account to getting all your tracking in place and launching your first ad can seem like a daunting task. This step by step training takes you through exactly how to do it, and understand key focus areas.",img:"https://members.scrapthe9to5.com/wp-content/uploads/2020/02/YouTube-Trianing-Thumbnail-400x260.jpg",link:"https://members.scrapthe9to5.com/courses/youtube-training-course/"}],tags:[1,2]},{id:6,title:"Bing Training",intro:"Total Courses: 1",description:"To get started, or continue developing your Bing marketing skills, we'd recommend watching our Bing Training.",link:"",video:"",courses:[{title:"Bing Training",description:"This is a recording of a training session to help you start out on Bing! Upinder Singh joined me on a call and we ran through some strategy on how best to start out, what to focus on, how to set up campaigns, analyse data, and much more. If you\u2019re starting out on Bing, this should give a strong foundation. Hope it helps!",img:"https://members.scrapthe9to5.com/wp-content/uploads/2020/05/Bing-thumb-400x260.jpg",link:"https://members.scrapthe9to5.com/courses/bing-training/"}],tags:[1,2]},{id:7,title:"Instagram Training",intro:"Total Courses: 1",description:"To get started, or continue developing your Instagram marketing skills, we'd recommend watching Jade Sultana's special webinar, and Holly Barras's Organic Instagram Strategies.",link:"",video:"",courses:[{title:"Instagram Training",description:"This webinar will be for you if: You are going to be marketing with a smaller budget. You would like an SFM alternative to paid marketing besides YouTube and Bing. You just wanna find out how on earth Jade managed to generate more than a 1,500% ROI on ad spend \ud83d\udca5\ud83d\ude32",img:"https://members.scrapthe9to5.com/wp-content/uploads/2020/05/Jade-Sultana-Special-Webinar-feature-400x260.jpg",link:"https://members.scrapthe9to5.com/courses/instagram-paid-ads-special-webinar-with-jade-sultana/"},{title:"The 6 Secrets to Organic Instagram",description:"There\u2019s a lot more to Instagram than meets the eye, and getting noticed can prove quite a challenge. In this training The Instagram Queen, Holly Barras, explains the ins and outs of connecting with your audience, gaining followers, and ultimately, more potential leads to your Instagram profile and ads.",img:"https://members.scrapthe9to5.com/wp-content/uploads/2020/04/Holly-Cover-Cropped-400x260.jpg",link:"https://members.scrapthe9to5.com/courses/training-from-the-instagram-queen/"}],tags:[1,2]},{id:8,title:"Weekly Q&A Webinars",intro:"Total Courses: 1",description:"If you're not sure what platform you want to market on yet, we'd recommend joining our Weekly Q&A Webinars with Dan Holloway. If you have any questions, need inspiration, or need clarity in any way, these webinars are highly recommended.",link:"",video:"",courses:[{title:"Weekly Q&A Webinar Replays",description:"Here you can find recordings of all of Dan\u2019s weekly webinars from the Scrap the 9 to 5 private entrepreneurial network. They\u2019re all in date order with topics covered in the description to make it easier to find what you\u2019re looking for.",img:"https://members.scrapthe9to5.com/wp-content/uploads/2020/06/Empower-Hour-Weekly-QA-400x260.jpg",link:"https://members.scrapthe9to5.com/courses/dans-webinar-replays/"}],tags:[1,2]},{id:9,title:"Technical Training",intro:"Total Courses: 1\nTotal Services: 1",description:"If you're having trouble or need more information on the technical aspects of your marketing, we'd recommend watching \"Kiril's Technical Skills Webinar\". Within the Vault, we also offer a technical support service which might of interest if this isn't your strongest suit.",link:"",video:"",courses:[{title:"Kiril's Technical Skills Webinar Replays",description:"Here you can find recordings of all of Kiril\u2019s webinar from the Scrap the 9 to 5 private entrepreneurial network. They\u2019re all in descending date order with the most recent webinar at the top to make it easier to find what you\u2019re looking for.",img:"https://members.scrapthe9to5.com/wp-content/uploads/2020/06/Empower-hour-technical-setup-400x260.jpg",link:"https://members.scrapthe9to5.com/courses/kirils-webinar-replays/"},{title:"Services Offered",description:"Starting any business comes with it's challenges. That's why Scrap the 9 to 5 has partnered with experts to remove those obstacles for you. Check out their services below.",img:"https://members.scrapthe9to5.com/wp-content/uploads/2020/10/Services-Offered-1.0.jpg",link:"https://members.scrapthe9to5.com/services-offered"}],tags:[1,2]},{id:10,title:"Scaling & Numbers",intro:"Total Courses: 1",description:'Knowing your numbers is essential for scaling any campaign, and to succeed within the SFM. We\'d recommend watching "Know Your Numbers" to get a general understanding of what you should know about scaling.',link:"",video:"",courses:[{title:"Know Your Numbers",description:"Knowing your numbers is a crucial part of scaling your business. If you don\u2019t know how much your leads, apps, members etc are costing to acquire, how can you know how much you can spend on ads? I dive into how to do that in this training.",img:"https://members.scrapthe9to5.com/wp-content/uploads/2020/03/Know-your-numbers-thumb-400x260.jpg",link:"https://members.scrapthe9to5.com/courses/know-your-numbers/"}],tags:[1,2]}],V=[{id:1,score:0,title:"Affiliate Marketing",intro:"intro",description:"description",path:"",video:"https://www.youtube.com/embed/i3YnkXLFJH0",link:"https://members.scrapthe9to5.com/login",tags:[2394],activeTag:2390},{id:2,score:0,title:"E-Commerce",intro:"intro",description:"description",path:"",video:"https://www.youtube.com/embed/i3YnkXLFJH0",link:"https://members.scrapthe9to5.com/login",tags:[2396],activeTag:2392},{id:3,score:0,title:"Coaching & Consulting",intro:"intro",description:"description",path:"",video:"https://www.youtube.com/embed/i3YnkXLFJH0",link:"https://members.scrapthe9to5.com/login",tags:[2424],activeTag:2412},{id:4,score:0,title:"Property Investing",intro:"intro",description:"description",path:"",video:"https://www.youtube.com/embed/i3YnkXLFJH0",link:"https://members.scrapthe9to5.com/login",tags:[2426],activeTag:2414},{id:5,score:0,title:"Forex / Crypto Trading",intro:"intro",description:"description",path:"",video:"https://www.youtube.com/embed/i3YnkXLFJH0",link:"https://members.scrapthe9to5.com/login",tags:[2428],activeTag:2416},{id:6,score:0,title:"Freelancing",intro:"intro",description:"description",path:"",video:"https://www.youtube.com/embed/i3YnkXLFJH0",link:"https://members.scrapthe9to5.com/login",tags:[2430],activeTag:2418},{id:7,score:0,title:"YouTube Influencer",intro:"intro",description:"description",path:"",video:"https://www.youtube.com/embed/i3YnkXLFJH0",link:"https://members.scrapthe9to5.com/login",tags:[2432],activeTag:2420},{id:8,score:0,title:"Passion Blog",intro:"intro",description:"description",path:"",video:"https://www.youtube.com/embed/i3YnkXLFJH0",link:"https://members.scrapthe9to5.com/login",tags:[2434],activeTag:2422}],_=["1","2","3"],J=["1","2","3"],U=function(e,t){return e.filter((function(e){return e.id!==t}))},K=function(e,t){switch(t.type){case"ANSWER":return e.answers[e.questionNum-1]=t.answer,Object(F.a)(Object(F.a)({},e),{},{answers:e.answers});case"NEXT_QUESTION":return e.questionNum===e.test.questions.length?Object(F.a)(Object(F.a)({},e),{},{submit:!0,questionNum:e.questionNum+1}):e.questionNum>e.test.questions.length?e:Object(F.a)(Object(F.a)({},e),{},{questionNum:e.questionNum+1});case"PREVIOUS_QUESTION":return 1===e.questionNum?e:e.questionNum>e.test.questions.length?Object(F.a)(Object(F.a)({},e),{},{submit:!1,questionNum:e.questionNum-1}):Object(F.a)(Object(F.a)({},e),{},{questionNum:e.questionNum-1});case"SUBMIT":var s=sessionStorage.getItem("sessionTest"),o="",i="";if("sfm-assessment"===s){var n=function(e){var t=R,s=_;return 1===e[1]&&(t=U(t,2)),1===e[2]&&(t=U(t,3)),1!==e[3]&&(t=U(t,4)),1!==e[4]&&(t=U(t,5)),2!==e[4]&&(t=U(t,6)),4!==e[4]&&(t=U(t,7)),6!==e[4]&&(t=U(t,8)),2===e[5]&&(t=U(t,9)),1===e[6]&&(t=U(t,10)),[t,s]}(e.answers),r=Object(u.a)(n,2);o=r[0],i=r[1]}else if("vault-assessment"===s){var a=function(e){var t=V,s=J;return e[0]>3?(t[4].score+=1,t[1].score+=1,t[0].score+=1):e[0]<3&&(t[0].score-=1,t[1].score-=1),1===e[1]&&(t[5].score+=2,t[6].score+=2,t[7].score+=2,t[2].score+=1),e[2]>3?(t[3].score+=2,t[4].score+=2):e[2]<3&&(t[3].score-=2,t[4].score-=2),1===e[4]?(t[1].score+=1,t[2].score+=2,t[6].score+=2,t[7].score+=2,t[5].score+=2):0===e[4]&&(t[0].score+=3,t[3].score+=1,t[4].score+=1),1===e[5]?(t[1].score+=2,t[2].score+=2,t[5].score+=1):0===e[5]&&(t[0].score+=3),1===e[7][0]&&(t[0].score+=2,t[1].score+=2,t[5].score+=2,t[6].score+=2,t[7].score+=2,t[4].score+=2),1===e[7][1]&&(t[3].score+=2),1===e[7][2]&&(t[2].score+=3),1===e[7][3]&&(t[0].score+=2,t[2].score+=1,t[6].score+=2,t[7].score+=2),1===e[7][4]&&(t[0].score+=1,t[5].score+=2,t[6].score+=2,t[7].score+=2),1===e[7][5]&&(t[0].score+=1,t[1].score+=1,t[4].score+=3,t[6].score+=1,t[7].score+=1),1===e[8][0]&&(t[3].score-=2,t[4].score-=1),1===e[8][1]&&(t[2].score-=2,t[5].score-=3),1===e[8][2]&&(t[1].score-=3),1===e[8][3]&&(t[2].score-=3,t[3].score-=1,t[5].score-=1),1===e[8][4]&&(t[0].score-=1,t[2].score-=1,t[3].score-=1,t[6].score-=1,t[7].score-=1),1===e[9][0]&&(t[2].score+=2,t[6].score+=1,t[7].score+=1),1===e[9][1]&&(t[0].score+=2,t[1].score+=2,t[2].score+=1,t[5].score+=1),1===e[9][2]&&(t[1].score+=3),1===e[9][3]&&(t[0].score+=1,t[2].score+=1,t[5].score+=1,t[6].score+=1,t[7].score+=1),1===e[9][4]&&(t[0].score+=3,t[1].score+=2),1===e[9][5]&&(t[3].score+=1),1===e[9][6]&&(t[4].score+=3),1===e[10][2]&&(t[3].score-=3),1===e[10][3]&&(t[0].score+=1,t[1].score+=1,t[2].score+=1,t[5].score+=1,t[6].score+=1,t[7].score+=1),1===e[10][4]&&(t[2].score-=2,t[5].score-=3),1===e[10][5]&&(t[0].score+=1,t[2].score+=2,t[3].score+=1,t[6].score+=1,t[7].score+=1),1===e[10][6]&&(t[2].score+=1,t[3].score+=1,t[4].score-=1,t[5].score+=1,t[6].score+=1,t[7].score+=1),1===e[9][0]&&(t=U(t,4),t=U(t,5)),1===e[9][1]&&(t=U(t,3),t=U(t,6)),1===e[9][2]&&(t=U(t,2)),1===e[9][3]&&(t=U(t,3),t=U(t,4),t=U(t,6)),t.sort((function(e,t){return t.score-e.score})),[t,s]}(e.answers),c=Object(u.a)(a,2);o=c[0],i=c[1]}return Object(F.a)(Object(F.a)({},e),{},{recommended:o,message:i});case"PATH_SELECTED":return Object(F.a)(Object(F.a)({},e),{},{activePath:t.path});case"SET_CONTACT_ID":return Object(F.a)(Object(F.a)({},e),{},{contactId:!0});case"SET_TEST":var l;return"sfm-assessment"===t.test?l=P:"vault-assessment"===t.test&&(l=D),Object(F.a)(Object(F.a)({},e),{},{test:l});default:return e}};s(103);a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{initialState:{questionNum:1,test:null,answers:[],submit:!1,contactId:!1,recommended:null,message:null,activePath:null},reducer:K,children:Object(o.jsx)(B,{})})}),document.getElementById("root")),L()},65:function(e,t,s){},66:function(e,t,s){},84:function(e,t,s){},89:function(e,t,s){},91:function(e,t,s){},92:function(e,t,s){}},[[104,1,2]]]);
//# sourceMappingURL=main.8447a17c.chunk.js.map