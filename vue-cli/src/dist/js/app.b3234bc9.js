(function(t){function e(e){for(var a,i,o=e[0],c=e[1],u=e[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("1d50")},"0bbf":function(t,e,n){"use strict";var a=n("300b"),r=n.n(a);r.a},"190d":function(t,e,n){},"1d50":function(t,e,n){"use strict";n.r(e);n("5111"),n("86d6"),n("9bfc"),n("5c88");var a=n("2b0e"),r=n("8c4f"),s=n("58ca"),i=(n("fc8e"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"nav"},[n("Hamburger"),n("ul",{staticClass:"nav__list"},[n("li",{staticClass:"nav__item"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("li",{staticClass:"nav__item"},[n("router-link",{attrs:{to:"/weather"}},[t._v("Weather app")])],1),n("li",{staticClass:"nav__item"},[n("router-link",{attrs:{to:"/page"}},[t._v("Next app")])],1)]),n("a",{staticClass:"my-logo",attrs:{href:"http://andrewbasiuk.000webhostapp.com/"}},[n("svg",{staticClass:"header__logo",staticStyle:{"enable-background":"new 0 0 159.551 79.775"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 159.551 79.775","xml:space":"preserve"}},[n("g",[n("path",{attrs:{d:"M33.956,37.363l2.332-5.76v-6.583h2.812L47.67,4.174h5.76l8.229,20.846h2.605v6.583l2.4,6.103l-6.446,2.537l-3.292-8.229\n            H43.762l-3.497,8.366L33.956,37.363z M50.414,15.694l-3.84,9.326h7.543L50.414,15.694z"}})]),n("g",[n("path",{attrs:{d:"M83.394,30.455l1.988-0.068c3.84-0.137,7.886-0.137,11.864-0.137c5.211,0,8.64,0,9.531,0.068h0.479\n            c2.743,0.48,5.006,1.852,6.378,3.909c1.097,1.714,1.646,3.771,1.646,6.309c0,1.303,0,3.154-0.686,5.143\n            c-0.138,0.48-0.343,1.029-0.617,1.44c0.411,0.274,0.754,0.548,1.028,0.96c0.823,0.891,1.44,1.988,1.92,3.292\n            c0.549,1.988,0.549,3.909,0.549,5.486c0,2.605-0.549,4.731-1.646,6.583c-1.44,2.194-3.703,3.634-6.651,4.114h-0.48\n            c-1.783,0.068-5.28,0.068-9.737,0.068c-3.84,0-8.572,0-13.578-0.068l-1.92-0.069l0.274-7.611h1.852h0.548v-7.68h-1.783v-7.68h1.783\n            v-6.446h-0.48l-1.92,0.068L83.394,30.455z M107.326,40.536c0-2.194-0.617-2.469-1.166-2.538c-1.92-0.068-5.28-0.137-9.395-0.137\n            h-3.223v6.652h2.537h0.206c8.365-0.206,10.08-0.549,10.354-0.617C106.914,43.69,107.326,43.484,107.326,40.536z M93.543,59.667\n            c1.988,0,3.908,0.137,5.76,0.137c4.731,0,7.681-0.137,8.641-0.137c0.617-0.206,1.028-0.412,1.165-0.617\n            c0.138-0.343,0.48-1.097,0.48-2.469c0-1.097,0-2.263-0.343-3.154c-0.138-0.617-0.343-0.686-0.686-0.823\n            c-0.206,0-2.264-0.548-12.274-0.754H95.12c-0.48,0.137-1.029,0.137-1.577,0.137V59.667z"}})]),n("line",{staticClass:"st0",attrs:{x1:"87.514",y1:"6.247",x2:"61.925",y2:"74.652"}}),n("g",[n("path",{staticClass:"st1",attrs:{d:"M124.459,71.542c-0.428,0.438-0.962,0.657-1.55,0.657s-1.123-0.219-1.55-0.657\n            c-0.855-0.876-0.855-2.299,0-3.175l27.267-27.918l-27.267-27.918c-0.855-0.876-0.855-2.299,0-3.175\n            c0.855-0.876,2.246-0.876,3.101,0l28.817,29.505c0.855,0.876,0.855,2.299,0,3.175L124.459,71.542z"}})]),n("g",[n("path",{staticClass:"st1",attrs:{d:"M34.515,9.356c0.428-0.438,0.962-0.657,1.55-0.657c0.588,0,1.123,0.219,1.55,0.657\n            c0.855,0.876,0.855,2.299,0,3.175L10.348,40.449l27.267,27.918c0.855,0.876,0.855,2.299,0,3.175c-0.855,0.876-2.246,0.876-3.101,0\n            L5.697,42.037c-0.855-0.876-0.855-2.299,0-3.175L34.515,9.356z"}})])])])],1),n("router-view")],1)}),o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"burger",on:{click:t.menuToogle}},[n("transition",{attrs:{name:"menu-show"}},[t.menuShow?n("svg",{staticClass:"burger__show-icon",staticStyle:{"enable-background":"new 0 0 459 459"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 459 459",width:"50px",height:"50px","xml:space":"preserve"}},[n("g",[n("g",{attrs:{id:"menu"}},[n("path",{attrs:{d:"M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z"}})])])]):t._e()]),n("transition",{attrs:{name:"menu-hide"}},[t.menuHide?n("svg",{staticStyle:{"enable-background":"new 0 0 47.971 47.971"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 47.971 47.971","xml:space":"preserve"}},[n("g",[n("path",{attrs:{d:"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\n                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\n                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\n                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"}})])]):t._e()])],1)},u=[],l={name:"Hamburger",data:function(){return{menuShow:!0,menuHide:!1}},methods:{menuToogle:function(){var t=document.querySelectorAll(".nav__list")[0];t.classList.toggle("nav__list_mob"),this.menuShow=!this.menuShow,this.menuHide=!this.menuHide}}},p=l,d=(n("d7fc"),n("a6c2")),h=Object(d["a"])(p,c,u,!1,null,"03d25c88",null),m=h.exports,f={components:{Hamburger:m},metaInfo:{title:"My Vue App",meta:[{name:"viewport",content:"width=device-width, initial-scale=1"}]},name:"app",data:function(){return{weather:!0,menu:!0}}},v=f,g=(n("e5cd"),Object(d["a"])(v,i,o,!1,null,null,null)),w=g.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{staticClass:"home__logo",attrs:{src:n("7bdf"),alt:"logo"}}),a("h1",{staticClass:"home__heading"},[t._v("\n        Several projects made using "),a("span",[t._v("vue.js")])]),a("a",{staticClass:"home__link",attrs:{href:"http://andrewbasiuk.000webhostapp.com/"}},[t._v("back to my portfolio page")])])}],y={name:"Home",data:function(){return{city:""}}},x=y,k=(n("8cb0"),Object(d["a"])(x,_,b,!1,null,"5402243e",null)),C=k.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weather-app"},[n("div",{staticClass:"bg-image",class:[t.activeBackground]}),n("div",{staticClass:"weather-wrap"},[n("div",{staticClass:"app-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter youre city"},domProps:{value:t.city},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)},input:function(e){e.target.composing||(t.city=e.target.value)}}}),n("transition",{attrs:{name:"fade"}},[t.showList?n("DayList",{attrs:{dataArr:t.sortDays}}):t._e()],1),n("transition",{attrs:{name:"error"}},[t.errorFlag?n("div",{staticClass:"error-popup"},[n("p",{staticClass:"error-popup__text"},[t._v("you entered the wrong city name. "),n("br"),t._v(" Please try again")])]):t._e()])],1)])])},O=[],M=(n("4904"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"day-list"},t._l(t.dataArr,(function(e,a){return n("li",{key:a,staticClass:"day-list__item"},[n("div",{staticClass:"day-list__day"},[t._v(t._s(t.dates[a]["day"])+" "),n("br"),t._v(" "+t._s(t.dates[a]["month"]))]),n("img",{attrs:{src:"http://openweathermap.org/img/wn/"+t.weatherIcon[a]+".png",alt:"icon"}}),n("div",{staticClass:"day-list__temp"},[t._v(t._s(t.temperatures[a]["temp"])+" ºC")])])})),0)}),j=[],S=(n("fc1c"),n("58a3"),{name:"DayList",props:{dataArr:Array},data:function(){return{dates:[],temperatures:{},weatherIcon:[],months:[{id:"01",name:"January"},{id:"02",name:"February"},{id:"03",name:"March"},{id:"04",name:"April"},{id:"05",name:"May"},{id:"06",name:"June"},{id:"07",name:"July"},{id:"08",name:"August"},{id:"09",name:"September"},{id:"10",name:"October"},{id:"11",name:"November"},{id:"12",name:"December"}]}},computed:{getDate:function(){var t=[],e=this;function n(t){var n="";return e.months.forEach((function(e){t==e.id&&(n=e.name)})),n}return this.dataArr.forEach((function(e){var a=e.dt_txt.split(" ")[0],r=a.split("-"),s=n(r[1]);t.push({day:r[2],month:s,year:r[0]})})),t},getTemp:function(){var t=[];return this.dataArr.forEach((function(e){t.push({temp:e.main.temp,tempMin:e.main.temp_min,tempMax:e.main.temp_max})})),t},getWeatherIcon:function(){var t=[];return this.dataArr.forEach((function(e){t.push(e.weather[0].icon)})),t}},created:function(){this.dates=this.getDate,this.temperatures=this.getTemp,this.weatherIcon=this.getWeatherIcon}}),E=S,H=(n("cf63"),Object(d["a"])(E,M,j,!1,null,null,null)),A=H.exports,z={name:"WeatherApp",components:{DayList:A},props:{},data:function(){return{city:"",activeBackground:"background_2",showList:!1,info:{},errorFlag:!1,sortDays:[],axios:n("bc3a")}},methods:{submit:function(){var t=this;this.showList=!1;var e="https://api.openweathermap.org/data/2.5/forecast?q="+this.city+"&appid=fc3da5f655d9b4c55ce7786120594255&units=metric";this.axios.get(e).catch((function(e){t.showList=!1,t.errorFlag=!0,setTimeout((function(){t.errorFlag=!1}),1e3)})).then((function(e){t.info=e.data,t.city&&(t.showList=!0,t.sortDays=t.sortObj)}))}},computed:{sortObj:function(){var t=this.info.list,e="15:00:00",n=[];return t.forEach((function(t){-1!=t.dt_txt.indexOf(e)&&n.push(t)})),n},setBackgroundImage:function(){var t=(new Date).getMonth();return 11==t||0==t||1==t?this.activeBackground="background_0":t>=2&&t<=4?this.activeBackground="background_1":t>=5&&t<=7?this.activeBackground="background_2":t>=8&&t<=10&&(this.activeBackground="background_3"),!1}},mounted:function(){this.setBackgroundImage}},B=z,D=(n("0bbf"),Object(d["a"])(B,L,O,!1,null,"3fb8b9fc",null)),P=D.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],attrs:{type:"text"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),n("p",[t._v(t._s(t.city))])])},T=[],$={name:"newComponent",props:{},data:function(){return{city:""}},methods:{},computed:{},mounted:function(){}},F=$,J=Object(d["a"])(F,I,T,!1,null,"65e4b530",null),N=J.exports,V=[{path:"/",component:C},{path:"/weather",component:P},{path:"/page",component:N}],W=V;a["a"].use(s["a"]),a["a"].config.productionTip=!1,a["a"].use(r["a"]);var q=new r["a"]({routes:W});new a["a"]({router:q,render:function(t){return t(w)}}).$mount("#app")},"300b":function(t,e,n){},"7bdf":function(t,e,n){t.exports=n.p+"img/logo-vue.9a45fc76.svg"},8559:function(t,e,n){},"8cb0":function(t,e,n){"use strict";var a=n("db76"),r=n.n(a);r.a},af54:function(t,e,n){},cf63:function(t,e,n){"use strict";var a=n("190d"),r=n.n(a);r.a},d7fc:function(t,e,n){"use strict";var a=n("8559"),r=n.n(a);r.a},db76:function(t,e,n){},e5cd:function(t,e,n){"use strict";var a=n("af54"),r=n.n(a);r.a}});
//# sourceMappingURL=app.b3234bc9.js.map