(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){},140:function(e,t,a){},148:function(e,t,a){e.exports=a.p+"static/media/logo-white.f185e62f.svg"},149:function(e,t,a){e.exports=a.p+"static/media/logo-green.2527af91.svg"},150:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),s=a(7),o=a(8),i=a(10),m=a(9),u=a(11),p=(a(90),a(72)),d=a.n(p),f=a(73),h=a.n(f),E=a(74),b=a.n(E),g=a(75),v=a.n(g),N=function(){return l.a.createElement("section",{className:"projects"},l.a.createElement("h1",{className:"section-header"},"Projects"),l.a.createElement("div",{className:"grid"},l.a.createElement("figure",{className:"effect"},l.a.createElement("div",{className:"project-logo-container"}," "),l.a.createElement("div",{className:"background-container"},l.a.createElement("img",{className:"image-background",src:d.a,alt:"project"})),l.a.createElement("figcaption",null,l.a.createElement("div",{className:"bottom-container"},l.a.createElement("div",{className:"portfolio-links"},l.a.createElement("a",{className:"project-button",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/heaps12345/bookeo"},"Github"),l.a.createElement("a",{className:"project-button",target:"_blank",rel:"noopener noreferrer",href:"https://bookeo.herokuapp.com/"},"Website"))),l.a.createElement("p",{className:"description"},l.a.createElement("span",{className:"projects-title"},"Bookeo")," Built using React, Redux, React Router, Google Maps API, Amazon S3, Node.js, and PostgreSQL."))),l.a.createElement("figure",{className:"effect"},l.a.createElement("div",{className:"project-logo-container"}),l.a.createElement("div",{className:"background-container"},l.a.createElement("img",{className:"image-background",src:b.a,alt:"project"})),l.a.createElement("figcaption",null,l.a.createElement("div",{className:"bottom-container"},l.a.createElement("div",{className:"portfolio-links"},l.a.createElement("a",{className:"project-button",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/heaps12345/faceFinder"},"Github"),l.a.createElement("a",{className:"project-button",target:"_blank",rel:"noopener noreferrer",href:"https://face-finder.netlify.com"},"Website"))),l.a.createElement("p",{className:"description"},l.a.createElement("span",{className:"projects-title"},"Face Finder"),"Built using React, Node.js, PostgreSQL, Clarifai API."))),l.a.createElement("figure",{className:"effect"},l.a.createElement("div",{className:"project-logo-container"}),l.a.createElement("div",{className:"background-container"},l.a.createElement("img",{className:"image-background",src:h.a,alt:"project"})),l.a.createElement("figcaption",null,l.a.createElement("div",{className:"bottom-container"},l.a.createElement("div",{className:"portfolio-links"},l.a.createElement("a",{className:"project-button",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/heaps12345/triviaApp"},"Github"),l.a.createElement("a",{className:"project-button",target:"_blank",rel:"noopener noreferrer",href:"https://trivia-app-1.netlify.com"},"Website"))),l.a.createElement("p",{className:"description"}," ",l.a.createElement("span",{className:"projects-title"},"Trivia App"),"Built using React, Node.js, and Open Trivia API."))),l.a.createElement("figure",{className:"effect"},l.a.createElement("div",{className:"project-logo-container"}),l.a.createElement("div",{className:"background-container"},l.a.createElement("img",{className:"image-background",src:v.a,alt:"project"})),l.a.createElement("figcaption",null,l.a.createElement("div",{className:"bottom-container"},l.a.createElement("div",{className:"portfolio-links"},l.a.createElement("a",{className:"project-button",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/heaps12345/ReactWeatherApp"},"Github"),l.a.createElement("a",{className:"project-button",target:"_blank",rel:"noopener noreferrer",href:"https://heaps12345.github.io/ReactWeatherApp/"},"Website"))),l.a.createElement("p",{className:"description"}," ",l.a.createElement("span",{className:"projects-title"},"Weather App"),"Built using React and Open Weather API.")))))},j=a(28),k=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).updateName=function(t){e.setState({name:t.target.value})},e.updateEmail=function(t){e.setState({email:t.target.value})},e.updateMessage=function(t){e.setState({message:t.target.value})},e.state={name:"",message:"",email:"",messageStatus:!1,buttonDisabled:!1},e.form=l.a.createRef(),e.validate=e.validate.bind(Object(j.a)(Object(j.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"validate",value:function(){this.form.current.reportValidity()}},{key:"render",value:function(){var e=this.state.messageStatus?"active":"inactive";return l.a.createElement("form",{ref:this.form,action:"https://formspree.io/dustinheaps89@gmail.com",method:"POST",className:"contact-form"},l.a.createElement("input",{type:"text",value:this.state.name,onChange:this.updateName,placeholder:"Your name",className:"name",name:"name",required:!0}),l.a.createElement("input",{type:"email",value:this.state.email,onChange:this.updateEmail,className:"email",placeholder:"Your email",name:"email",required:!0}),l.a.createElement("textarea",{value:this.state.message,onChange:this.updateMessage,className:"message",placeholder:"Message",name:"message",required:!0}),l.a.createElement("div",{className:"buttonInline"},l.a.createElement("p",{className:"".concat(e)},"Message Sent!"),l.a.createElement("input",{value:"Send",className:"standard-button",disabled:this.state.buttonDisabled,onClick:this.validate,type:"submit"})))}}]),t}(l.a.Component),y=(a(91),a(84)),O=(a(135),a(80)),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).copyEmail=function(){a.setState({visibleTooltip:!0}),setTimeout(function(){return a.setState({visibleTooltip:!1})},3e3)},a.state={visibleTooltip:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"contact"},l.a.createElement("div",{className:"left-content"},l.a.createElement("h1",{className:"section-header"},"Contact Me"),l.a.createElement("p",null,"I'm currently available for new opportunities. If you have a project that you want to get started, think you need my help with something, or just fancy saying hey \u2014 then get in touch!"," ",l.a.createElement("span",{role:"img",className:"peace-emoji","aria-label":"peace"},"\u270c")," "),l.a.createElement("p",null,"Use the form or email me directly at: "),l.a.createElement(y.a,{placement:"bottom",overlay:"Copied!",id:"tooltip",visible:this.state.visibleTooltip,onVisibleChange:this.copyEmail,trigger:["click"]},l.a.createElement(O.CopyToClipboard,{text:"dustinheaps89@gmail.com"},l.a.createElement("span",{onClick:this.copyEmail,className:"email-text"}," ","dustinheaps89@gmail.com")))),l.a.createElement("div",{className:"contact-content"},l.a.createElement(k,null)))}}]),t}(l.a.Component),C=(a(139),function(){return l.a.createElement("ul",{className:"skills-list"},l.a.createElement("li",{style:{borderRadius:"8px 0 0 0"}},l.a.createElement("i",{className:"fab fa-html5"}),l.a.createElement("p",null,"HTML5")),l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-css3-alt"}),l.a.createElement("p",null,"CSS3")),l.a.createElement("li",{style:{borderRadius:"0 8px 0 0"}},l.a.createElement("i",{className:"fab fa-js-square"}),l.a.createElement("p",null,"ES6")),l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-react"}),l.a.createElement("p",null,"React")),l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-node-js"}),l.a.createElement("p",null,"Node.JS")),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-link"}),l.a.createElement("p",null,"Redux")),l.a.createElement("li",{style:{borderRadius:"0 0  0 8px"}},l.a.createElement("i",{className:"fab fa-sass"}),l.a.createElement("p",null,"Sass")),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-database"}),l.a.createElement("p",null,"PostgreSQL")),l.a.createElement("li",{style:{borderRadius:"0 0 8px 0"}},l.a.createElement("i",{className:"fas fa-database"}),l.a.createElement("p",null,"Express")))}),S=(a(140),a(81)),x=a.n(S),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).showFileUpload=function(){a.fileUpload.current.click()},a.fileUpload=l.a.createRef(),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"skills"},l.a.createElement("div",{className:"left-content"},l.a.createElement("h1",{className:"section-header"},"About me"),l.a.createElement("p",null,'From the moment I produced "Hello World" in the console of my first app, I knew i was hooked into the world of Web Developement. But web development has never been "just a job" for me, it\'s offered an engaging challenge to continually learn and improve my skills. What started with a "Hello World" has become a full-fledged passion that only gets more exciting as the years go by. You can find me on'," ",l.a.createElement("a",{href:"https://www.linkedin.com/in/dustinheaps/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")," ","and"," ",l.a.createElement("a",{href:"https://github.com/heaps12345",target:"_blank",rel:"noopener noreferrer"},"GitHub")),l.a.createElement("input",{type:"button",value:"View Resume",className:"standard-button",onClick:this.showFileUpload}),l.a.createElement("a",{href:x.a,target:"_blank",rel:"noopener noreferrer",ref:this.fileUpload,style:{display:"none"}}," ")),l.a.createElement("div",{className:"skills-content"},l.a.createElement(C,null)))}}]),t}(l.a.Component),T=a(12),A=(a(148),a(149),a(150),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).scrollToTop=function(){T.animateScroll.scrollToTop()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"full-nav"},l.a.createElement("ul",{className:"nav-list"},l.a.createElement("li",{className:"logo",onClick:this.scrollToTop},l.a.createElement("span",{className:"site-logo"},"DH")),l.a.createElement("li",{className:"link"},l.a.createElement(T.Link,{to:"projects",offset:-100,smooth:!0,duration:500},"Projects")),l.a.createElement("li",{className:"link"},l.a.createElement(T.Link,{to:"skills",offset:-100,smooth:!0,duration:500},"About")),l.a.createElement("li",{className:"link"},l.a.createElement(T.Link,{to:"contact",smooth:!0,offset:-100,duration:500},"Contact"))))}}]),t}(l.a.Component)),W=a(82),_=(a(166),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={menuOpen:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"closeMenu",value:function(){this.setState({menuOpen:!this.state.menuOpen},function(){document.body.style.overflow="initial"})}},{key:"handleStateChange",value:function(e){this.setState({menuOpen:e.isOpen}),!1===this.state.menuOpen?document.body.style.overflow="hidden":document.body.style.overflow="initial"}},{key:"render",value:function(){var e=this;return l.a.createElement(W.slide,{width:"75%",isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleStateChange(t)},right:!0,pageWrapId:"page-wrap",outerContainerId:"outer-container"},l.a.createElement("div",{className:"menu"},l.a.createElement(T.Link,{onClick:function(){return e.closeMenu()},to:"projects",spy:!0,offset:-100,smooth:!0,duration:500},"Projects"),l.a.createElement(T.Link,{onClick:function(){return e.closeMenu()},to:"skills",spy:!0,offset:-100,smooth:!0,duration:500},"About"),l.a.createElement(T.Link,{onClick:function(){return e.closeMenu()},to:"contact",spy:!0,offset:-100,smooth:!0,duration:500},"Contact")))}}]),t}(l.a.Component)),I=a(83),L=a.n(I),P=(a(167),{particles:{number:{value:20,density:{enable:!0,value_area:800}},size:{value:2,random:!0},opacity:{value:.2,random:!1},line_linked:{opacity:.1}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"}},resize:!0}}),M=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"outer-container"},l.a.createElement(L.a,{className:"particles-js",params:P}),l.a.createElement(_,null),l.a.createElement("div",{id:"page-wrap"},l.a.createElement("header",null,l.a.createElement("div",{className:"header-content"},l.a.createElement("div",{className:"header-text"},l.a.createElement("h1",{className:"header-name"},"Dustin Heaps"),l.a.createElement("h3",{className:"subheader"},"Web Developer")),l.a.createElement(T.Link,{to:"projects",offset:-100,smooth:!0,duration:500},l.a.createElement("input",{type:"button",className:"standard-button",value:"View Projects"})))),l.a.createElement(N,{name:"projects"}),l.a.createElement(R,{name:"skills"}),l.a.createElement(w,{name:"contact"})),l.a.createElement(A,null))}}]),t}(l.a.Component);a(168);c.a.render(l.a.createElement(M,null),document.getElementById("root"))},72:function(e,t,a){e.exports=a.p+"static/media/jungle.87afc57a.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/triviaAppBg.8cdcd638.png"},74:function(e,t,a){e.exports=a.p+"static/media/faceFinderBg.67b05d8c.png"},75:function(e,t,a){e.exports=a.p+"static/media/weather.853119dd.png"},81:function(e,t,a){e.exports=a.p+"static/media/resume2019.20c6ee62.pdf"},85:function(e,t,a){e.exports=a(169)},90:function(e,t,a){},91:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.66ddc077.chunk.js.map