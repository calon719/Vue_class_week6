(function(e){function n(n){for(var r,c,a=n[0],d=n[1],i=n[2],f=0,l=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);h&&h(n);while(l.length)l.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==o[a]&&(r=!1)}r&&(u.splice(n--,1),e=d(d.s=t[0]))}return e}var r={},c={app:0},o={app:0},u=[];function a(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-2d212c30":"29d6ca29","chunk-2d21a3d2":"7fa7e56e","chunk-2d238428":"08a9ba6a","chunk-3a60c783":"86319767","chunk-44e3b479":"3f297cc0","chunk-67d50002":"4a0907b9","chunk-7cec2b6f":"5f6cdee2","chunk-7f772b82":"4447eca5"}[e]+".js"}function d(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-44e3b479":1,"chunk-7f772b82":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d212c30":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d238428":"31d6cfe0","chunk-3a60c783":"31d6cfe0","chunk-44e3b479":"fad869f1","chunk-67d50002":"31d6cfe0","chunk-7cec2b6f":"31d6cfe0","chunk-7f772b82":"0e1d62c9"}[e]+".css",o=d.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var i=u[a],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===o))return n()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){i=l[a],f=i.getAttribute("data-href");if(f===r||f===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete c[e],h.parentNode.removeChild(h),t(u)},h.href=o;var s=document.getElementsByTagName("head")[0];s.appendChild(h)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=u);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.src=a(e);var l=new Error;i=function(n){f.onerror=f.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,t[1](l)}o[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(n)},d.m=e,d.c=r,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)d.d(t,r,function(n){return e[n]}.bind(null,r));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/Vue_class_week6/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var h=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),c=(t("7b17"),t("bc3a")),o=t.n(c),u=t("130e"),a=t("7bb1"),d=t("3aa8"),i=t("cbdf"),f=t("9457");function l(e,n){var t=Object(r["D"])("router-view");return Object(r["x"])(),Object(r["d"])(t)}t("ea3d");var h=t("6b0d"),s=t.n(h);const p={},b=s()(p,[["render",l]]);var m=b,v=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),g=[{path:"/",name:"Home",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))},children:[{path:"",name:"Index",component:function(){return t.e("chunk-2d238428").then(t.bind(null,"ff2d"))}},{path:"/products",name:"Products",component:function(){return t.e("chunk-7f772b82").then(t.bind(null,"fd15"))}},{path:"/cart",name:"Cart",component:function(){return t.e("chunk-3a60c783").then(t.bind(null,"cc55"))}},{path:"/order",name:"Order",component:function(){return t.e("chunk-67d50002").then(t.bind(null,"4558"))}},{path:"/login",name:"Login",component:function(){return t.e("chunk-44e3b479").then(t.bind(null,"3bea"))}}]},{path:"/admin",name:"Admin",component:function(){return t.e("chunk-7cec2b6f").then(t.bind(null,"6c12"))},children:[{path:"products",name:"AdminProducts",component:function(){return t.e("chunk-2d212c30").then(t.bind(null,"aa93"))}}]}],k=Object(v["a"])({history:Object(v["b"])(),routes:g}),y=k;Object(a["e"])("required",d["c"]),Object(a["e"])("email",d["a"]),Object(a["e"])("min",d["b"]),Object(a["d"])({generateMessage:Object(i["a"])({zh_TW:f}),validateOnInput:!0}),Object(i["b"])("zh_TW");var O=Object(r["c"])(m);O.component("Form",a["c"]),O.component("Field",a["b"]),O.component("ErrorMessage",a["a"]),O.use(u["a"],o.a),O.use(y),O.mount("#app")},a854:function(e,n,t){},ea3d:function(e,n,t){"use strict";t("a854")}});
//# sourceMappingURL=app.8b279a50.js.map