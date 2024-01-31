(()=>{"use strict";var n={917:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(81),a=t.n(o),r=t(645),d=t.n(r)()(a());d.push([n.id,'html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n',""]);const i=d},426:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(81),a=t.n(o),r=t(645),d=t.n(r),i=t(667),c=t.n(i),p=new URL(t(810),t.b),l=d()(a()),s=c()(p);l.push([n.id,`*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n@font-face {\n  font-family: "MyFont";\n  src: url(${s});\n}\nbody {\n  background-color: #ffe8d2;\n  font-family: Arial, Helvetica, sans-serif;\n}\nheader {\n  background-color: #a54200;\n  height: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nheader > nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n}\nnav > * {\n  width: 100px;\n  height: 50px;\n  border-radius: 10px;\n  border: 2px groove black;\n  font-size: 1.2rem;\n  background-color: #747700;\n  cursor: pointer;\n  user-select: none;\n}\nnav > *:hover {\n  background-color: #aeb40a;\n}\nnav > *:active {\n  background-color: #7377009d;\n}\n#content {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  align-items: center;\n}\n#content > h1 {\n  font-family: "MyFont";\n  font-size: 2rem;\n  padding: 10px;\n  margin-bottom: 20px;\n  margin-top: 15px;\n  border: 2px solid #906000;\n  border-radius: 10px;\n}\n#content > h2 {\n  margin-bottom: 30px;\n  font-family: "MyFont";\n  font-size: 1.5rem;\n  padding: 10px;\n  border: 2px solid #906000;\n  border-radius: 10%;\n}\n.paragraph,\n.paragraph-menu {\n  padding: 20px;\n  border: 2px solid #906000;\n  border-radius: 10px 20px 5px 15px;\n}\nh1.menu {\n  font-size: 3rem !important ;\n}\nh2.menu {\n  font-size: 2rem !important ;\n}\nh2.side {\n  font-size: 2rem !important;\n}\n.paragraph-menu {\n  width: 600px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 20px;\n  margin-bottom: 60px;\n}\n.paragraph-menu > h2 {\n  grid-column: 1 / 2;\n  font-size: 1.7rem;\n  font-weight: bold;\n  align-self: center;\n  font-family: "MyFont";\n}\n.paragraph-menu > p {\n  grid-column: 1 / 2;\n  font-size: 1.4rem;\n  font-family: "MyFont";\n}\n.paragraph-menu > span {\n  grid-column: 1 / 2;\n  height: 20px;\n  justify-self: center;\n  font-size: 2.8rem;\n}\n.paragraph-menu > img {\n  grid-column: 2 / 3;\n  grid-row: 1 / 4;\n  border-radius: 20px;\n}\n.about {\n  font-size: 3rem !important;\n}\n.p-about {\n  padding: 10px;\n  border: 2px solid #906000;\n  border-radius: 8%;\n  font-size: 1.4rem;\n  margin-bottom: 30px;\n  font-weight: bold;\n}\n.p-about + h2 {\n  font-size: 1.8rem !important;\n}\n.content-about {\n  border-radius: 10px 20px 5px 15px;\n  padding: 20px;\n  border: 2px solid #906000;\n  font-size: 1.6rem;\n  display: flex;\n  flex-wrap: wrap;\n  height: 300px;\n  width: 600px;\n  justify-content: center;\n  align-items: start;\n  gap: 30px;\n  margin-bottom: 20px;\n}\n.content-about > span:nth-of-type(1) {\n  font-weight: bold;\n}\n.content-about > span:nth-of-type(2) {\n  font-weight: bold;\n}\n.content-about > span:nth-of-type(3) {\n  font-weight: bold;\n}\n.content-about > p:nth-of-type(1) {\n  flex: auto;\n  text-align: center;\n}\n.content-about > p:nth-of-type(2) {\n  text-align: center;\n  flex: 1 1 400px;\n}\n.content-about > a {\n  font-size: 1.4rem;\n  flex: 1 0 0;\n  text-align: start;\n  text-decoration: none;\n}\n.content-about > a:visited {\n  color: #214c02;\n}\n.paragraph:nth-of-type(1) {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  line-height: 25px;\n  font-size: 1.1rem;\n  margin-bottom: 25px;\n}\n.paragraph:nth-of-type(1) > h3 {\n  font-weight: bold;\n}\n.paragraph:nth-of-type(2) {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-size: 1.1rem;\n  margin-bottom: 20px;\n}\n.paragraph:nth-of-type(2) > h3 {\n  font-weight: bold;\n}\nimg {\n  width: 300px;\n  height: 300px;\n}\n`,""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var d={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(d[c]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);o&&d[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},d=[],i=0;i<n.length;i++){var c=n[i],p=o.base?c[0]+o.base:c[0],l=r[p]||0,s="".concat(p," ").concat(l);r[p]=l+1;var u=t(s),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=a(m,o);o.byIndex=i,e.splice(i,0,{identifier:s,updater:h,references:1})}d.push(s)}return d}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var d=0;d<r.length;d++){var i=t(r[d]);e[i].references--}for(var c=o(n,a),p=0;p<r.length;p++){var l=t(r[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},810:(n,e,t)=>{n.exports=t.p+"527ccc1c7e0e30cc0d53.TTF"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!n;)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function n(){const n=document.getElementById("content"),e=document.createElement("h1");e.textContent="Welcome to our official PuyTato site!";const t=document.createElement("h2");t.textContent="Where You will find and order the best potatoes in the world of potatoes!!!";const o=document.createElement("div");o.classList.add("paragraph");const a=document.createElement("p"),r=o.cloneNode(!1),d=document.createElement("h3");d.textContent="Working Hours";const i=document.createElement("ul"),c=document.createElement("li"),p=c.cloneNode(!1),l=c.cloneNode(!1),s=c.cloneNode(!1),u=c.cloneNode(!1),m=c.cloneNode(!1),h=c.cloneNode(!1);c.textContent="Sunday: 1pm - 12pm",p.textContent="Monday: 9am - 12pm",l.textContent="Tuesday: 9am - 12pm",s.textContent="Wednesday: 9am - 12pm",u.textContent="Thursday: 9am - 12pm",m.textContent="Friday: 11am - 12pm",h.textContent="Saturday: 11am - 12pm";const f=d.cloneNode(!1);f.textContent="Working Hours In Ramadan";const g=i.cloneNode(!1),x=c.cloneNode(!1),b=c.cloneNode(!1),C=c.cloneNode(!1),y=c.cloneNode(!1),v=c.cloneNode(!1),N=c.cloneNode(!1),w=c.cloneNode(!1);x.textContent="Sunday: 1pm - 3am",b.textContent="Monday: 1pm - 3am",C.textContent="Tuesday: 1pm - 3am",y.textContent="Wednesday: 1pm - 3am",v.textContent="Thursday: 1pm - 3am",N.textContent="Friday: 1pm - 3am",w.textContent="Saturday: 1pm - 3am";const E=o.cloneNode(!1),T=d.cloneNode(!1);T.textContent="Location";const L=a.cloneNode(!1);L.textContent="123 Bake Street, Building 2P, Ovenville, Los Kitchen, 12345",n.appendChild(e),n.appendChild(t),n.appendChild(r),r.appendChild(d),r.appendChild(i),i.appendChild(c),i.appendChild(p),i.appendChild(l),i.appendChild(s),i.appendChild(u),i.appendChild(m),i.appendChild(h),r.appendChild(f),r.appendChild(g),g.appendChild(x),g.appendChild(b),g.appendChild(C),g.appendChild(y),g.appendChild(v),g.appendChild(N),g.appendChild(w),n.appendChild(E),E.appendChild(T),E.appendChild(L)}const e=t.p+"3e3a0784743a7a724c96.jpeg",o=t.p+"8f47dd05ba9c84b3f6a0.jpg",a=t.p+"8c801ae73ec08a8fc61a.jpg",r=t.p+"4a87d489143f3d385c4a.jpg",d=t.p+"697cd29e3f71647d29e8.jpg";var i=t(379),c=t.n(i),p=t(795),l=t.n(p),s=t(569),u=t.n(s),m=t(565),h=t.n(m),f=t(216),g=t.n(f),x=t(589),b=t.n(x),C=t(917),y={};y.styleTagTransform=b(),y.setAttributes=h(),y.insert=u().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=g(),c()(C.Z,y),C.Z&&C.Z.locals&&C.Z.locals;var v=t(426),N={};N.styleTagTransform=b(),N.setAttributes=h(),N.insert=u().bind(null,"head"),N.domAPI=l(),N.insertStyleElement=g(),c()(v.Z,N),v.Z&&v.Z.locals&&v.Z.locals;const w=document.querySelector("button:nth-of-type(1)"),E=document.querySelector("button:nth-of-type(2)"),T=document.querySelector("button:nth-of-type(3)");document.addEventListener("DOMContentLoaded",n),w.addEventListener("click",(function(){document.getElementById("content").innerHTML="",n()})),E.addEventListener("click",(function(){document.getElementById("content").innerHTML="",function(){const n=document.getElementById("content"),t=document.createElement("h1");t.textContent="Menu",n.appendChild(t);const i=document.createElement("div"),c=document.createElement("h2");c.textContent="Main Dishes",n.appendChild(c);const p=i.cloneNode(!1),l=c.cloneNode(!1);l.textContent="PuyTato Mashed Pancakes";const s=document.createElement("p");s.textContent="Crispy, fried, and great for dipping in sour cream Mashed Potato Pancakes";const u=document.createElement("span");u.textContent="8$";const m=new Image;m.src=e,p.appendChild(l),p.appendChild(s),p.appendChild(u),p.appendChild(m),n.appendChild(p);const h=i.cloneNode(!1),f=c.cloneNode(!1);f.textContent="Potato Enchiladas";const g=s.cloneNode(!1);g.textContent="Potatoes and poblano peppers come together to make these delicious Enchiladas";const x=u.cloneNode(!1);x.textContent="4$";const b=new Image;b.src=o,h.appendChild(f),h.appendChild(g),h.appendChild(x),h.appendChild(b),n.appendChild(h);const C=i.cloneNode(!1),y=c.cloneNode(!1);y.textContent="TURKEY CHILI PuyTato";const v=s.cloneNode(!1);v.textContent="Tender baked sweet potatoes smothered with turkey and bean chili";const N=u.cloneNode(!1);N.textContent="10$";const w=new Image;w.src=a,C.appendChild(y),C.appendChild(v),C.appendChild(N),C.appendChild(w),n.appendChild(C);const E=c.cloneNode(!1);E.textContent="Side Dishes",n.appendChild(E);const T=i.cloneNode(!1),L=c.cloneNode(!1);L.textContent="PuyTato MAPLE";const k=s.cloneNode(!1);k.textContent="Classic side dish that everyone will love";const M=u.cloneNode(!1);M.textContent="2$";const I=new Image;I.src=r,T.appendChild(L),T.appendChild(k),T.appendChild(M),T.appendChild(I),n.appendChild(T);const S=i.cloneNode(!1),z=c.cloneNode(!1);z.textContent="Cheesy Cauliflower";const P=s.cloneNode(!1);P.textContent="simple sweet potato and black bean hash, and topped with a tangy lime crema";const j=u.cloneNode(!1);j.textContent="2$";const A=new Image;A.src=d,i.classList.add("paragraph-menu"),p.classList.add("paragraph-menu"),h.classList.add("paragraph-menu"),C.classList.add("paragraph-menu"),T.classList.add("paragraph-menu"),S.classList.add("paragraph-menu"),c.classList.add("menu"),t.classList.add("menu"),E.classList.add("side"),S.appendChild(z),S.appendChild(P),S.appendChild(j),S.appendChild(A),n.appendChild(S)}()})),T.addEventListener("click",(function(){document.getElementById("content").innerHTML="",function(){const n=document.getElementById("content"),e=document.createElement("h1");e.textContent="About";const t=document.createElement("p");t.textContent="PuyTato was invented in 1988, it got it's popularity from the taste of it's unique and delicious potatoes";const o=document.createElement("h2");o.textContent="Contact Us";const a=document.createElement("div"),r=document.createElement("span");r.textContent="Email:";const d=t.cloneNode(!1);d.textContent="totallyrealemail@notfake.com";const i=r.cloneNode(!1);i.textContent="Number:";const c=t.cloneNode(!1);c.textContent="555-555-5555";const p=r.cloneNode(!1);p.textContent="Find Us At:";const l=document.createElement("a");l.textContent='"https://github.com/BodiAli/restaurant-page"',l.setAttribute("href","https://github.com/BodiAli/restaurant-page"),l.setAttribute("target","_blank"),e.classList.add("about"),t.classList.add("p-about"),a.classList.add("content-about"),n.appendChild(e),n.appendChild(t),n.appendChild(o),a.appendChild(r),a.appendChild(d),a.appendChild(i),a.appendChild(c),a.appendChild(p),a.appendChild(l),n.appendChild(a)}()}))})()})();