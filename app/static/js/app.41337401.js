(function(e){function n(n){for(var r,i,u=n[0],c=n[1],s=n[2],l=0,f=[];l<u.length;l++)i=u[l],o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(n);while(f.length)f.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a=[];function i(e){return u.p+"static/js/"+({}[e]||e)+"."+{"chunk-a748a0da":"adc9d6eb","chunk-2d0d63f1":"d2f53c61","chunk-2d207f44":"c424ee0e"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=o[e]=[n,r]});n.push(t[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e),a=function(n){c.onerror=c.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,t[1](i)}o[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var d=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"1a5d":function(e,n,t){var r={"./Dashboard.vue":["7277","chunk-a748a0da","chunk-2d0d63f1"],"./Monitor.vue":["a373","chunk-a748a0da","chunk-2d207f44"]};function o(e){var n=r[e];return n?Promise.all(n.slice(1).map(t.e)).then(function(){var e=n[0];return t(e)}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}o.keys=function(){return Object.keys(r)},o.id="1a5d",e.exports=o},"56d7":function(e,n,t){"use strict";t.r(n);var r=t("2b0e"),o=t("5f5b"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("nav-menu"),t("router-view")],1)},i=[],u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"navbar navbar-expand-sm navbar-dark bg-dark",attrs:{id:"nav-menu"}},[t("b-nav",{staticClass:"navbar-nav mr-auto nav-pills"},[t("brand"),t("b-nav-item",[t("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v("Player")])],1),t("b-nav-item",[t("router-link",{staticClass:"nav-link",attrs:{to:"/_"}},[e._v("Dashboard")])],1)],1)],1)},c=[],s=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"brand"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[r("img",{attrs:{src:t("f893"),width:"50",height:"50",alt:""}}),e._v("\n        誰でも大好き\n    ")])])}],d={name:"Brand"},f=d,p=t("2877"),v=Object(p["a"])(f,s,l,!1,null,"fcdb2ef0",null),h=v.exports,b={name:"NavMenu",components:{Brand:h}},m=b,g=(t("6f8d"),Object(p["a"])(m,u,c,!1,null,null,null)),w=g.exports,k={components:{NavMenu:w},methods:{}},y=k,_=Object(p["a"])(y,a,i,!1,null,null,null),j=_.exports,O=t("8c4f");const x=[{path:"/",component:"Monitor"},{path:"/_",component:"Dashboard"}],P=x.map(e=>{return{...e,component:()=>t("1a5d")(`./${e.component}.vue`)}});r["default"].use(O["a"]);var C=new O["a"]({routes:P}),E=t("9483");Object(E["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});t("f9e3"),t("2dd8");r["default"].config.productionTip=!1,r["default"].use(o["a"]),new r["default"]({router:C,render:function(e){return e(j)}}).$mount("#app")},"6f8d":function(e,n,t){"use strict";var r=t("d10d"),o=t.n(r);o.a},d10d:function(e,n,t){},f893:function(e,n,t){e.exports=t.p+"static/img/brand.523c5916.jpg"}});