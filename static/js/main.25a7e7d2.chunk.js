(this.webpackJsonpbeepboop=this.webpackJsonpbeepboop||[]).push([[0],{124:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(8),i=n.n(r),o=(n(44),n(3)),j=(n(45),n(12)),l=n(23),d=n.n(l),u=n(10),b=n.n(u),h=n(34),O=n.n(h),f=n(16),p=n(13),x=n(24),m=n.n(x);m.a.setLevel("ERROR");var v=m.a;function y(e){var t=Object(a.useContext)(H);return Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:Object(c.jsx)("div",{className:"section-header",children:Object(c.jsx)("div",{className:"section-header-title",onClick:function(){window.open("https://habitica.com/")},children:Object(c.jsx)("h2",{children:e.title})})})}),t.dates.map((function(e){return Object(c.jsx)("th",{children:Object(c.jsxs)("div",{className:"date date-heading",children:[Object(c.jsx)("span",{children:e.format("ddd")}),Object(c.jsx)("span",{children:e.format("DD")})]})},e.toString())}))]})})}var w=n(35),g=n(25);function N(e){var t=Object(a.useContext)(H),n=new Map,s=e.habit,r=s.text,i=s.history;v.debug(r);var o,j=Object(w.a)(i);try{for(j.s();!(o=j.n()).done;){var l=o.value,d=b()(l.date).format(Y);v.debug(JSON.stringify(l)),void 0!==l.scoredUp&&void 0!==l.scoredDown&&n.set(d,[l.scoredUp,l.scoredDown])}}catch(h){j.e(h)}finally{j.f()}var u=t.dates.map((function(e){return e.format(Y)})).map((function(e){return{day:e,score:n.get(e)}}));return 0!==u.filter((function(e){return void 0!==e.score})).length||e.showNoHistory?Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"task-name-row",children:Object(c.jsx)("span",{className:"task-name",dangerouslySetInnerHTML:{__html:g.render(r)}})}),u.map((function(e){var t=e.day,n=e.score;return n?Object(c.jsx)(S,{up:n[0],down:n[1]},t):t!==b()(new Date).format(Y)?Object(c.jsx)("td",{className:"habit-cell",children:Object(c.jsx)("div",{className:"habit-score-container",children:Object(c.jsx)("div",{className:"fail center-wrapper",children:Object(c.jsx)("span",{children:"\u2716"})})})},t):Object(c.jsx)("td",{className:"habit-cell",children:"\xa0"},t)}))]}):null}function S(e){var t=e.up>=4?"success":"fail";return Object(c.jsx)("td",{className:"habit-cell",children:Object(c.jsx)("div",{className:"habit-score-container",children:e.up>0?Object(c.jsx)("div",{className:[t,"center-wrapper"].join(" "),children:Object(c.jsxs)("span",{children:["+",e.up]})}):Object(c.jsx)("div",{className:"fail center-wrapper",children:Object(c.jsx)("span",{children:e.up})})})})}var E=n(25);function k(e){var t=Object(a.useState)(!0),n=Object(o.a)(t,2),s=n[0],r=n[1];return Object(c.jsxs)("section",{className:"dailys",children:[Object(c.jsxs)("table",{children:[Object(c.jsx)(y,{title:"Habits",setShowNoHistory:r,showNoHistory:s}),Object(c.jsx)("tbody",{children:e.data.map((function(e){return"habit"===e.type?Object(c.jsx)(N,{showNoHistory:s,habit:e},e.id):Object(c.jsx)(R,{showNoHistory:s,daily:e},e.id)}))})]}),Object(c.jsx)("div",{className:"link show-no-history",onClick:function(){return r(!s)}})]})}function R(e){var t=Object(a.useContext)(H),n=new Map,s=e.daily,r=s.text,i=s.history;v.debug(r);for(var o=1;o<i.length;o++){var j=i[o].value-i[o-1].value,l=b()(i[o].date);if(v.debug(l.format("YYYY-MM-DD HH:mm:ss")+": "+i[o].value),0!==j){if(t.cronIntervals.search(l.unix(),l.unix()).length>0){var d=l.subtract(1,"day");n.has(d.format(Y))?n.has(l.format(Y))&&v.warn("Too many completions for ".concat(r," on ").concat(l)):l=d}var u=l.format(Y);n.set(u,j)}}console.groupEnd();var h=t.dates.map((function(e){return e.format(Y)})).map((function(e){return{day:e,delta:n.get(e)}}));return 0!==h.filter((function(e){return void 0!==e.delta})).length||e.showNoHistory?Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"task-name-row",children:Object(c.jsx)("span",{className:"task-name",dangerouslySetInnerHTML:{__html:E.render(r)}})}),h.map((function(e){var t=e.day,n=e.delta;return Object(c.jsx)(C,{delta:n},t)}))]}):null}function C(e){var t,n=["daily-cell"];return e.delta&&0!==e.delta?e.delta>0?(n.push("success"),t="\u2713"):(n.push("fail"),t="\u2716"):(n.push("pass"),t="\xa0"),Object(c.jsx)("td",{className:n.join(" "),children:t&&Object(c.jsx)("div",{className:"center-wrapper",children:Object(c.jsx)("span",{className:"symbol",children:t})})})}var T="https://habitica.com/api/v3",I="0d9428fd-d6fa-45f3-a4db-f130e3ef10ea-HabiticaTracker",D="/tasks/user";function P(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function _(){return e=2e3,t=5e3,e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e);var e,t}function A(e){var t=~~(e/3600),n=~~(e%3600/60),c=~~e%60,a="";return t>0&&(a+=t+":"+(n<10?"0":"")),a+=n+":"+(c<10?"0":""),a+=""+c}var H=s.a.createContext({showTaskIcons:!1,dates:Array(),cronIntervals:new d.a});function M(e){var t=Object(a.useState)(P()),n=Object(o.a)(t,2),s=n[0],r=n[1],i=Object(a.useState)(!1),l=Object(o.a)(i,2),u=l[0],h=l[1],x=Object(a.useState)(_()),m=Object(o.a)(x,2),y=m[0],w=m[1],g=Object(a.useState)(!0),N=Object(o.a)(g,2),S=N[0],E=N[1],R=Object(a.useState)(!0),C=Object(o.a)(R,2),M=C[0],U=C[1],Y=Object(a.useState)(!0),L=Object(o.a)(Y,2),B=L[0],F=L[1],J=Object(a.useState)(7),W=Object(o.a)(J,2),z=W[0],K=(W[1],Object(a.useState)(!1)),q=Object(o.a)(K,2),G=q[0],Q=(q[1],Object(a.useState)([])),V=Object(o.a)(Q,2),$=V[0],X=V[1],Z=Object(a.useState)([]),ee=Object(o.a)(Z,2),te=ee[0],ne=ee[1],ce=Object(a.useState)([]),ae=Object(o.a)(ce,2),se=ae[0],re=ae[1],ie=Object(a.useState)([]),oe=Object(o.a)(ie,2),je=(oe[0],oe[1]),le=Object(a.useState)(!1),de=Object(o.a)(le,2),ue=de[0],be=de[1],he=Object(a.useState)(1500),Oe=Object(o.a)(he,2),fe=Oe[0],pe=Oe[1],xe=Object(a.useRef)(fe);xe.current=fe;var me=Object(a.useState)(!1),ve=Object(o.a)(me,2),ye=ve[0],we=ve[1],ge=function(){return we(!1)},Ne=e.userId,Se=e.userApiKey,Ee=function(e){return fetch(e,{method:"GET",headers:{"Content-Type":"application/json","x-api-user":Ne,"x-api-key":Se,"x-client":I}})},ke=function(e){if(!e.success)throw new Error(e.message);return e},Re=e.setError,Ce=function(){return Ee(T+D).then((function(e){return e.json()})).then(ke).then((function(e){ne(e.data.filter((function(e){return"habit"===e.type}))),re(e.data.filter((function(e){return"daily"===e.type}))),U(!1),console.log(T+D,JSON.stringify(e))}),(function(e){Re(e)}))},Te=function(e){return fetch(T+"/tasks/"+e+"/score/up",{method:"POST",headers:{"Content-Type":"application/json","x-api-user":Ne,"x-api-key":Se,"x-client":I}}).then((function(e){return e.json()})).then(ke).then((function(t){h(!0),console.log(T+"/tasks/"+e+"/score/up",JSON.stringify(t))}),(function(e){Re(e)})).then(Ce)};Object(a.useEffect)((function(){"Notification"in window?Notification.requestPermission():console.log("This browser does not support desktop notification")}),[]),Object(a.useEffect)((function(){function e(){r(P())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(a.useEffect)((function(){Ee(T+"/user").then((function(e){return e.json()})).then(ke).then((function(e){X(e.data.history.exp.map((function(e){var t=b()(e.date);return[t.unix()-300,t.unix()+300]}))),E(!1)}),(function(e){Re(e)}))}),[]),Object(a.useEffect)((function(){Ce()}),[]),Object(a.useEffect)((function(){Ee(T+"/tasks/user?type=completedTodos").then((function(e){return e.json()})).then(ke).then((function(e){je(e.data.filter((function(e){return"todo"===e.type}))),F(!1)}),(function(e){Re(e)}))}),[]);var Ie=function(){var e=xe.current-1;pe(e),0===e?Pe():De()},De=function(){return setTimeout(Ie,1e3)},Pe=function(){be(!1),pe(1500),Te("ec59d7c1-e692-4b17-b2e0-6b6a76aedcc3"),new Notification("pomodoro is finished yo \ud83c\udf89",{icon:"https://vwskwong.github.io/assets/Logo/apple-touch-icon.png",image:"https://c.tenor.com/I4d1QyAghmUAAAAM/hooray-letsgo.gif",requireInteraction:!0})};if(S||M||B)return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("p",{children:"Loading..."})});var _e=new d.a;$.forEach((function(e){v.debug("cron: ".concat(b.a.unix(e[0])," - ").concat(b.a.unix(e[1]))),_e.insert(e[0],e[1],!0)}));var Ae,He={showTaskIcons:G,dates:(Ae=z,Array(Ae).fill(0).map((function(e,t){return t})).reverse().map((function(e){return b()().subtract(e,"day").startOf("day")}))),cronIntervals:_e};return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(H.Provider,{value:He,children:[Object(c.jsx)(k,{data:[].concat(Object(j.a)(se.slice(0,-1)),Object(j.a)(te),Object(j.a)(se.slice(-1)))}),Object(c.jsxs)("div",{className:"buttons-container",children:[Object(c.jsx)("div",{className:"button-container",children:Object(c.jsx)(f.a,{variant:"outline-success",onClick:function(){return Te("b85dc3ec-7836-4827-aa68-e7e605c1489e")},children:"\u2713 Daily Goal"})}),Object(c.jsx)("div",{className:"button-container",children:Object(c.jsx)(f.a,{variant:"outline-success",onClick:ue?void 0:function(){be(!0),De(),we(!0)},children:ue?A(fe):"\u2713 Pomodoro"})})]}),Object(c.jsx)(O.a,{width:s.width,height:s.height,run:u,onConfettiComplete:function(){w(_()),h(!1)},numberOfPieces:y,recycle:!1,tweenDuration:5e4}),Object(c.jsxs)(p.a,{show:ye,onHide:ge,dialogClassName:"dialog",children:[Object(c.jsx)(p.a.Header,{closeButton:!0,children:Object(c.jsx)(p.a.Title,{children:"lets get this bread \ud83c\udf5e"})}),Object(c.jsx)(p.a.Body,{children:Object(c.jsxs)("p",{children:["Draw my line on mediocrity.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Affirm: Who do I want to be?",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Visualize: negative + positive",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"What do I want to accomplish right now?",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Breakdown the task.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Point n Call."]})}),Object(c.jsx)(p.a.Footer,{children:Object(c.jsx)(f.a,{variant:"secondary",onClick:ge,children:"\ud83d\udea8 go brrrr"})})]})]})})}var U,Y="YYYYMMDD";!function(e){e[e.PROMPT_FOR_USER_CREDS=0]="PROMPT_FOR_USER_CREDS",e[e.USER_INPUT_ACCEPTED=1]="USER_INPUT_ACCEPTED",e[e.ERROR=2]="ERROR"}(U||(U={}));var L=function(){var e=Object(a.useState)("9ebcbcde-d6a2-40d6-9ec1-99de1e5e7470"),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)("82efbb68-ab5b-426a-bcad-da7fdc3273bb"),i=Object(o.a)(r,2),j=i[0],l=i[1],d=Object(a.useState)(),u=Object(o.a)(d,2),b=u[0],h=u[1],O=Object(a.useState)(U.USER_INPUT_ACCEPTED),f=Object(o.a)(O,2),p=f[0],x=f[1];return p===U.PROMPT_FOR_USER_CREDS||p===U.ERROR?Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Habitica Tracker"}),b&&Object(c.jsxs)("div",{className:"error",children:["Error: ",b.message]}),Object(c.jsx)("p",{children:"This tool displays a history of your Habits, Dailies and Todos in Habitica."}),Object(c.jsxs)("p",{children:["Your User ID and API key can be found on the"," ",Object(c.jsx)("a",{href:"https://habitica.com/user/settings/api",target:"_blank",rel:"noopener noreferrer",children:"Settings > API"})," ","page in Habitica."]}),Object(c.jsxs)("form",{className:"user-api-form",children:[Object(c.jsxs)("div",{className:"label-container",children:[Object(c.jsx)("div",{className:"label",children:"User ID"}),Object(c.jsx)("input",{type:"text",className:"user-id",value:n,onChange:function(e){s(e.target.value)}})]}),Object(c.jsxs)("div",{className:"label-container",children:[Object(c.jsx)("span",{className:"label",children:"API Key"}),Object(c.jsx)("input",{type:"password",className:"api-key",value:j,onChange:function(e){l(e.target.value)},minLength:36})]}),Object(c.jsx)("div",{className:"submit-wrapper",children:Object(c.jsx)("input",{type:"submit",value:"Fetch My Data",onClick:function(e){e.preventDefault(),x(U.USER_INPUT_ACCEPTED)}})})]}),Object(c.jsx)("h2",{children:"Note"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Your user ID and API key will be sent to the Habitica servers and nowhere else."}),Object(c.jsx)("li",{children:"This app does not change your Habitica account data. It only fetches and displays data."})]})]}):Object(c.jsx)(M,{userId:n,userApiKey:j,setError:function(e){h(e),x(U.ERROR)}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(123);i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)("div",{className:"app-wrapper",children:Object(c.jsx)(L,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t,n){},45:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.25a7e7d2.chunk.js.map