(this.webpackJsonpbeepboop=this.webpackJsonpbeepboop||[]).push([[0],{200:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),s=n.n(c),r=n(10),i=n.n(r),o=(n(96),n(4)),d=(n(97),n(3)),l=n(19),u=n(38),j=n.n(u),b=n(12),h=n.n(b),O=n(82),f=n.n(O),p=n(43),m=n(20),x=n(87),v=(n(99),n(39)),y=n.n(v);y.a.setLevel("ERROR");var w=y.a;function g(e){var t=Object(c.useContext)(Y);return Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:Object(a.jsx)("div",{className:"section-header",children:Object(a.jsx)("div",{className:"section-header-title",onClick:function(){window.open("https://habitica.com/")},children:Object(a.jsx)("h2",{children:e.title})})})}),t.dates.map((function(e){return Object(a.jsx)("th",{children:Object(a.jsxs)("div",{className:"date date-heading",children:[Object(a.jsx)("span",{children:e.format("ddd")}),Object(a.jsx)("span",{children:e.format("DD")})]})},e.toString())}))]})})}var N=n(83),S=n(44);function k(e){var t=Object(c.useContext)(Y),n=new Map,s=e.habit,r=s.text,i=s.history;w.debug(r);var o,d=Object(N.a)(i);try{for(d.s();!(o=d.n()).done;){var l=o.value,u=h()(l.date).format(F);w.debug(JSON.stringify(l)),void 0!==l.scoredUp&&void 0!==l.scoredDown&&n.set(u,[l.scoredUp,l.scoredDown])}}catch(b){d.e(b)}finally{d.f()}var j=t.dates.map((function(e){return e.format(F)})).map((function(e){return{day:e,score:n.get(e)}}));return 0!==j.filter((function(e){return void 0!==e.score})).length||e.showNoHistory?Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"task-name-row",children:Object(a.jsx)("span",{className:"task-name",dangerouslySetInnerHTML:{__html:S.render(r)}})}),j.map((function(e){var t=e.day,n=e.score;return n?Object(a.jsx)(E,{up:n[0],down:n[1]},t):t!==h()(new Date).format(F)?Object(a.jsx)("td",{className:"habit-cell",children:Object(a.jsx)("div",{className:"habit-score-container",children:Object(a.jsx)("div",{className:"fail center-wrapper",children:Object(a.jsx)("span",{children:"\u2716"})})})},t):Object(a.jsx)("td",{className:"habit-cell",children:"\xa0"},t)}))]}):null}function E(e){var t=e.up>=1?"success":"fail";return Object(a.jsx)("td",{className:"habit-cell",children:Object(a.jsx)("div",{className:"habit-score-container",children:e.up>0?Object(a.jsx)("div",{className:[t,"center-wrapper"].join(" "),children:Object(a.jsxs)("span",{children:["+",e.up]})}):Object(a.jsx)("div",{className:"fail center-wrapper",children:Object(a.jsx)("span",{children:e.up})})})})}var T=n(44);function C(e){var t=Object(c.useState)(!0),n=Object(o.a)(t,2),s=n[0],r=n[1];return Object(a.jsxs)("section",{className:"dailys",children:[Object(a.jsxs)("table",{children:[Object(a.jsx)(g,{title:"Habits",setShowNoHistory:r,showNoHistory:s}),Object(a.jsx)("tbody",{onClick:e.toggleNumDaysToShow,children:e.data.map((function(e){return"habit"===e.type?Object(a.jsx)(k,{showNoHistory:s,habit:e},e.id):Object(a.jsx)(R,{showNoHistory:s,daily:e},e.id)}))})]}),Object(a.jsx)("div",{className:"link show-no-history",onClick:function(){return r(!s)}})]})}function R(e){var t=Object(c.useContext)(Y),n=new Map,s=e.daily,r=s.text,i=s.history,o=s.streak;w.debug(r);for(var d=1;d<i.length;d++){var l=i[d].value-i[d-1].value,u=h()(i[d].date);if(w.debug(u.format("YYYY-MM-DD HH:mm:ss")+": "+i[d].value),0!==l){if(t.cronIntervals.search(u.unix(),u.unix()).length>0){var j=u.subtract(1,"day");n.has(j.format(F))?n.has(u.format(F))&&w.warn("Too many completions for ".concat(r," on ").concat(u)):u=j}var b=u.format(F);n.set(b,l)}}console.groupEnd();var O=t.dates.map((function(e){return e.format(F)})).map((function(e){return{day:e,delta:n.get(e)}}));return 0!==O.filter((function(e){return void 0!==e.delta})).length||e.showNoHistory?Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"task-name-row",children:Object(a.jsx)("span",{className:"task-name",dangerouslySetInnerHTML:{__html:T.render(r)}})}),O.map((function(e){var t=e.day,n=e.delta;return Object(a.jsx)(P,{day:t,delta:n,streak:o},t)}))]}):null}function P(e){var t,n=["daily-cell"],c=["symbol"];return e.day!==h()(new Date).format(F)?!e.delta||e.delta<=0?(n.push("fail"),t="\u2716"):(n.push("success"),t="\u2713"):e.delta&&0!==e.delta?e.delta>0?(n.push("success"),t="\u2713"):(n.push("fail"),t="\u2716"):(n.push("pass"),c.push("streak"),t=0==e.streak?"0\ud83e\udd76":e.streak+"\ud83d\udd25"),Object(a.jsx)("td",{className:n.join(" "),children:t&&Object(a.jsx)("div",{className:"center-wrapper",children:Object(a.jsx)("span",{className:c.join(" "),children:t})})})}var D=[{name:"lofi",musicSrc:n.p+"static/media/lofi-pomodoro-90min.24a49f67.mp3"}],I="https://habitica.com/api/v3",A="0d9428fd-d6fa-45f3-a4db-f130e3ef10ea-HabiticaTracker",M="/tasks/user";function _(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function H(){return e=2e3,t=5e3,e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e);var e,t}var U=5400;function L(e){var t=~~e%60,n="";return n+=~~(e/60)+":"+(t<10?"0":""),n+=""+t}var Y=s.a.createContext({showTaskIcons:!1,dates:Array(),cronIntervals:new j.a});function B(e){var t=Object(c.useState)(_()),n=Object(o.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(!1),u=Object(o.a)(i,2),b=u[0],O=u[1],v=Object(c.useState)(H()),y=Object(o.a)(v,2),g=y[0],N=y[1],S=Object(c.useState)({currentTime:0,play:function(){}}),k=Object(o.a)(S,2),E=k[0],T=k[1],R=Object(c.useState)(!0),P=Object(o.a)(R,2),B=P[0],W=P[1],F=Object(c.useState)(!0),J=Object(o.a)(F,2),z=J[0],K=J[1],q=Object(c.useState)(!0),G=Object(o.a)(q,2),Q=G[0],V=G[1],$=Object(c.useState)(8),X=Object(o.a)($,2),Z=X[0],ee=X[1],te=Object(c.useState)(!1),ne=Object(o.a)(te,2),ae=ne[0],ce=(ne[1],Object(c.useState)([])),se=Object(o.a)(ce,2),re=se[0],ie=se[1],oe=Object(c.useState)([]),de=Object(o.a)(oe,2),le=de[0],ue=de[1],je=Object(c.useState)([]),be=Object(o.a)(je,2),he=be[0],Oe=be[1],fe=Object(c.useState)([]),pe=Object(o.a)(fe,2),me=(pe[0],pe[1]),xe=Object(c.useState)(!1),ve=Object(o.a)(xe,2),ye=ve[0],we=ve[1],ge=Object(c.useState)(U),Ne=Object(o.a)(ge,2),Se=Ne[0],ke=Ne[1],Ee=Object(c.useRef)(Se);Ee.current=Se;var Te=Object(c.useState)(!1),Ce=Object(o.a)(Te,2),Re=Ce[0],Pe=Ce[1],De=function(){return Pe(!1)},Ie=e.userId,Ae=e.userApiKey;var Me=function(e){return fetch(e,{method:"GET",headers:{"Content-Type":"application/json","x-api-user":Ie,"x-api-key":Ae,"x-client":A}})},_e=function(e){if(!e.success)throw new Error(e.message);return e},He=e.setError,Ue=function(){return Me(I+M).then((function(e){return e.json()})).then(_e).then((function(e){ue(e.data.filter((function(e){return"habit"===e.type}))),Oe(e.data.filter((function(e){return"daily"===e.type}))),K(!1),console.log(I+M,JSON.stringify(e))}),(function(e){He(e)}))},Le=function(e){return fetch(I+"/tasks/"+e+"/score/up",{method:"POST",headers:{"Content-Type":"application/json","x-api-user":Ie,"x-api-key":Ae,"x-client":A}}).then((function(e){return e.json()})).then(_e).then((function(t){O(!0),console.log(I+"/tasks/"+e+"/score/up",JSON.stringify(t))}),(function(e){He(e)})).then(Ue)},Ye={getAudioInstance:function(e){T(e)},audioLists:D,defaultPlayIndex:0,bounds:"body",defaultPosition:{top:260,left:10},remove:!1,autoPlay:!1,toggleMode:!1,showMiniModeCover:!1,showMiniProcessBar:!0,seeked:!1,showProgressLoadBar:!0,showPlay:!1,showReload:!1,showDownload:!1,showPlayMode:!1,showThemeSwitch:!1,extendsContent:null,playModeShowTime:600,loadAudioErrorPlayNext:!1,autoHiddenCover:!0,responsive:!1,onAudioProgress:function(e){var t=U-e.currentTime;ke(t)},onAudioEnded:function(){Be()}};Object(c.useEffect)((function(){"Notification"in window?Notification.requestPermission():console.log("This browser does not support desktop notification")}),[]),Object(c.useEffect)((function(){function e(){r(_())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(c.useEffect)((function(){Me(I+"/user").then((function(e){return e.json()})).then(_e).then((function(e){ie(e.data.history.exp.map((function(e){var t=h()(e.date);return[t.unix()-300,t.unix()+300]}))),W(!1)}),(function(e){He(e)}))}),[]),Object(c.useEffect)((function(){Ue()}),[]),Object(c.useEffect)((function(){Me(I+"/tasks/user?type=completedTodos").then((function(e){return e.json()})).then(_e).then((function(e){me(e.data.filter((function(e){return"todo"===e.type}))),V(!1)}),(function(e){He(e)}))}),[]);var Be=function(){De(),we(!1),ke(U),Le("ec59d7c1-e692-4b17-b2e0-6b6a76aedcc3"),new Notification("pomodoro is finished yo \ud83c\udf89",{icon:"https://vwskwong.github.io/assets/Logo/apple-touch-icon.png",image:"https://c.tenor.com/I4d1QyAghmUAAAAM/hooray-letsgo.gif",requireInteraction:!0})};if(B||z||Q)return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("p",{children:"Loading..."})});var We=new j.a;re.forEach((function(e){w.debug("cron: ".concat(h.a.unix(e[0])," - ").concat(h.a.unix(e[1]))),We.insert(e[0],e[1],!0)}));var Fe,Je={showTaskIcons:ae,dates:(Fe=Z,Array(Fe).fill(0).map((function(e,t){return t})).reverse().map((function(e){return h()().subtract(e,"day").startOf("day")}))),cronIntervals:We};return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(Y.Provider,{value:Je,children:[Object(a.jsx)(C,{toggleNumDaysToShow:function(){ee(8===Z?31:8)},data:[].concat(Object(l.a)(he.slice(0,-1)),Object(l.a)(le),Object(l.a)(he.slice(-1)))}),Object(a.jsx)("div",{className:"buttons-container",children:Object(a.jsx)("div",{className:"button-container",children:Object(a.jsx)(p.a,{variant:"outline-success",onClick:ye?void 0:function(){we(!0),E&&(E.currentTime=0,E.play()),Pe(!0)},children:ye?L(Se):"\ud83e\udde0 start focus you shithead"})})}),Object(a.jsx)(x.a,Object(d.a)(Object(d.a)({},Ye),{},{mode:"mini"})),Object(a.jsx)(f.a,{width:s.width,height:s.height,run:b,onConfettiComplete:function(){N(H()),O(!1)},numberOfPieces:g,recycle:!1,tweenDuration:5e4}),Object(a.jsxs)(m.a,{show:Re,centered:!0,backdropClassName:"dialogWrapper",dialogClassName:"dialog",children:[Object(a.jsx)(m.a.Header,{closeButton:!0,children:Object(a.jsxs)(m.a.Title,{children:["lets goo \ud83d\udea8 ",L(Se)," \ud83d\udea8"]})}),Object(a.jsx)(m.a.Body,{children:Object(a.jsxs)("p",{className:"dialogText",children:["\u270d\ufe0f Draw my line on mediocrity.",Object(a.jsx)("br",{}),"\ud83d\udc41 Visualize: negative + positive",Object(a.jsx)("br",{}),"\ud83d\udcac Affirm: Who do I want to be?",Object(a.jsx)("br",{}),"\ud83c\udfaf What do I want to accomplish right now?",Object(a.jsx)("br",{}),"\ud83e\udde9 Breakdown the task",Object(a.jsx)("br",{}),"\ud83e\udef5 Point n Call"]})}),Object(a.jsx)(m.a.Footer,{children:Object(a.jsx)(p.a,{variant:"secondary",onClick:De,children:"\ud83d\udea8 go brrrr"})})]})]})})}var W,F="YYYYMMDD";!function(e){e[e.PROMPT_FOR_USER_CREDS=0]="PROMPT_FOR_USER_CREDS",e[e.USER_INPUT_ACCEPTED=1]="USER_INPUT_ACCEPTED",e[e.ERROR=2]="ERROR"}(W||(W={}));var J=function(){var e=Object(c.useState)("9ebcbcde-d6a2-40d6-9ec1-99de1e5e7470"),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)("82efbb68-ab5b-426a-bcad-da7fdc3273bb"),i=Object(o.a)(r,2),d=i[0],l=i[1],u=Object(c.useState)(),j=Object(o.a)(u,2),b=j[0],h=j[1],O=Object(c.useState)(W.USER_INPUT_ACCEPTED),f=Object(o.a)(O,2),p=f[0],m=f[1];return p===W.PROMPT_FOR_USER_CREDS||p===W.ERROR?Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Habitica Tracker"}),b&&Object(a.jsxs)("div",{className:"error",children:["Error: ",b.message]}),Object(a.jsx)("p",{children:"This tool displays a history of your Habits, Dailies and Todos in Habitica."}),Object(a.jsxs)("p",{children:["Your User ID and API key can be found on the"," ",Object(a.jsx)("a",{href:"https://habitica.com/user/settings/api",target:"_blank",rel:"noopener noreferrer",children:"Settings > API"})," ","page in Habitica."]}),Object(a.jsxs)("form",{className:"user-api-form",children:[Object(a.jsxs)("div",{className:"label-container",children:[Object(a.jsx)("div",{className:"label",children:"User ID"}),Object(a.jsx)("input",{type:"text",className:"user-id",value:n,onChange:function(e){s(e.target.value)}})]}),Object(a.jsxs)("div",{className:"label-container",children:[Object(a.jsx)("span",{className:"label",children:"API Key"}),Object(a.jsx)("input",{type:"password",className:"api-key",value:d,onChange:function(e){l(e.target.value)},minLength:36})]}),Object(a.jsx)("div",{className:"submit-wrapper",children:Object(a.jsx)("input",{type:"submit",value:"Fetch My Data",onClick:function(e){e.preventDefault(),m(W.USER_INPUT_ACCEPTED)}})})]}),Object(a.jsx)("h2",{children:"Note"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Your user ID and API key will be sent to the Habitica servers and nowhere else."}),Object(a.jsx)("li",{children:"This app does not change your Habitica account data. It only fetches and displays data."})]})]}):Object(a.jsx)(B,{userId:n,userApiKey:d,setError:function(e){h(e),m(W.ERROR)}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(199);i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)("div",{className:"app-wrapper",children:Object(a.jsx)(J,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,t,n){},97:function(e,t,n){}},[[200,1,2]]]);
//# sourceMappingURL=main.e065a40c.chunk.js.map