(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(16),o=a.n(c),r=(a(25),a(26),a(18)),i=a(17),s=a.n(i),u=a(49),m=a(50),p=a(51),d=a(52),f=a(53),E=a(54),g=function(e){return console.log(e),l.a.createElement("div",{className:"nasaPicture"},l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement(p.a,{className:"subtitle"},e.date),l.a.createElement(d.a,{className:"title"},e.title),l.a.createElement(f.a,{className:"img",top:!0,width:"100%",src:e.Img,alt:"nasa photo of the day"}),l.a.createElement(E.a,{className:"text"},e.explanation),l.a.createElement(p.a,null," By:",e.copyright))))},h=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){s.a.get("https://api.nasa.gov/planetary/apod?api_key=rScrdxNaKXfzCfhWFbTP1EGwZM594lzpZG2Z9Npn").then(function(e){console.log(e.data),c(e.data)}).catch(function(e){console.log("data was not return",e)})},[]),l.a.createElement("div",null,l.a.createElement(g,{title:a.title,Img:a.url,date:a.date,copyright:a.copyright,explanation:a.explanation}))};a(46);var w=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("p",null,"This app will show you an exciting new image every day directly from NASA! Have fun \ud83d\ude80!"),l.a.createElement(h,null))};o.a.render(l.a.createElement(w,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.fe9806fe.chunk.js.map