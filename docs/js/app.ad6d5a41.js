(function(e){function n(n){for(var r,a,l=n[0],c=n[1],u=n[2],s=0,f=[];s<l.length;s++)a=l[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(n);while(f.length)f.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,a=1;a<t.length;a++){var l=t[a];0!==o[l]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},a={app:0},o={app:0},i=[];function l(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-322b84f4":"e59646a4"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"chunk-322b84f4":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-322b84f4":"f2283ad9"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var u=i[l],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===o))return n()}var f=document.getElementsByTagName("style");for(l=0;l<f.length;l++){u=f[l],s=u.getAttribute("data-href");if(s===r||s===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),t(i)},d.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=l(e);var f=new Error;u=function(n){s.onerror=s.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var f=0;f<u.length;f++)n(u[f]);var d=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("85ec"),a=t.n(r);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:t("cf05")}}),r("HelloWorld"),r("CustomI8")],1)},o=[],i=(t("d3b7"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.$lang.string.welcome_messages("小朋友",5)))]),t("ul",[t("li",[e._v(" 选择语言: "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var n="_value"in e?e._value:e.value;return n}));e.selected=n.target.multiple?t:t[0]}}},[t("option",{domProps:{value:"en"}},[e._v("en")]),t("option",{domProps:{value:"zh"}},[e._v("zh")]),t("option",{domProps:{value:"ja"}},[e._v("ja")])])]),t("li",[e._v("应用名字:"+e._s(e.$lang.string.app_name))]),t("li",[e._v("动作:"),t("span",{domProps:{innerHTML:e._s(e.$lang.string.notif_button_update_all)}})]),t("li",[e._v("城市:"),e._l(e.$lang.array.cities,(function(n,r){return t("span",{key:r},[e._v(" "+e._s(n)+" ")])}))],2),t("li",[e._v("基本复数(时长):"+e._s(e.$localPlurals.cardinal(e.$lang.plurals.cardinal.wastetime,1,1)))]),t("li",[e._v("基本复数(时长):"+e._s(e.$localPlurals.cardinal(e.$lang.plurals.cardinal.wastetime,2,2)))]),t("li",[e._v("序数复数:"+e._s(e.$localPlurals.ordinal(e.$lang.plurals.ordinal.takeRight,1,1)))]),t("li",[e._v("序数复数:"+e._s(e.$localPlurals.ordinal(e.$lang.plurals.ordinal.takeRight,2,2)))]),t("li",[e._v("序数复数:"+e._s(e.$localPlurals.ordinal(e.$lang.plurals.ordinal.takeRight,3,3)))]),t("li",[e._v("序数复数:"+e._s(e.$localPlurals.ordinal(e.$lang.plurals.ordinal.takeRight,4,4)))]),t("li",[e._v("区间复数:"+e._s(e.$localPlurals.range(e.$lang.plurals.range.days,1,2,1,2)))])])])}),l=[],c={name:"HelloWorld",data:function(){return{selected:"zh"}},watch:{selected:function(e){this.$setLocal(e)}}},u=c,s=(t("6716"),t("2877")),f=Object(s["a"])(u,i,l,!1,null,"617f109b",null),d=f.exports,g={name:"app",components:{HelloWorld:d,CustomI8:function(){return new Promise((function(e,n){t.e("chunk-322b84f4").then(t.bind(null,"21c9")).then((function(n){setTimeout((function(){e(n)}),3e3)}))}))}}},h=g,p=(t("034f"),Object(s["a"])(h,a,o,!1,null,null,null)),v=p.exports,m=t("a5a1"),_=t("92e0"),b=(t("99af"),{array:{cities:["北京","上海","济南","青岛"]},plurals:{cardinal:{wastetime:{other:function(){return"".concat(arguments.length<=0?void 0:arguments[0]," 分钟")}}},ordinal:{takeRight:{other:function(){return"选择第 ".concat(arguments.length<=0?void 0:arguments[0]," 个 权利.")}}},range:{days:{other:function(){return"".concat(arguments.length<=0?void 0:arguments[0],"–").concat(arguments.length<=1?void 0:arguments[1]," 天")}}}},string:{welcome_messages:function(){return"你好, ".concat(arguments.length<=0?void 0:arguments[0],"! 你有 ").concat(arguments.length<=1?void 0:arguments[1]," 条消息.")},app_name:"应用商店",pref_title_auto_update_market:'自动更新 "应用商店"',notif_button_update_all:"<font color=#ff6243>升级所有应用</font>",btn_retry:"再试一下",btn_price:function(){return"￥".concat(arguments.length<=0?void 0:arguments[0])},btn_progress:function(){return"".concat(arguments.length<=0?void 0:arguments[0],"%%")},btn_pausable:"暂停",user_agreement_msg:function(){return'好长一段文字呀，啦啦啦阿拉蕾 <a href="'.concat(arguments.length<=0?void 0:arguments[0],'">快快快快快快</a>. 同意吗?')}}}),y=b,w={array:{cities:["beijing","shanghai","jinan","qingdao"]},plurals:{cardinal:{wastetime:{one:function(){return"".concat(arguments.length<=0?void 0:arguments[0]," minute")},other:function(){return"".concat(arguments.length<=0?void 0:arguments[0]," minutes")}}},ordinal:{takeRight:{one:function(){return"Take the twenty ".concat(arguments.length<=0?void 0:arguments[0],"st right.")},two:function(){return"Take the ".concat(arguments.length<=0?void 0:arguments[0],"nd right.")},few:function(){return"Take the ".concat(arguments.length<=0?void 0:arguments[0],"rd right.")},other:function(){return"Take the ".concat(arguments.length<=0?void 0:arguments[0],"th right.")}}},range:{days:{other:function(){return"".concat(arguments.length<=0?void 0:arguments[0],"–").concat(arguments.length<=0?void 0:arguments[0]," days")}}}},string:{welcome_messages:function(){return"Hello, ".concat(arguments.length<=0?void 0:arguments[0],"! You have ").concat(arguments.length<=1?void 0:arguments[1]," new messages.")},app_name:"GetApps",pref_title_auto_update_market:'Update "GetApps" automatically',notif_button_update_all:"<font color=#ff6243>Update all</font>",btn_retry:"TRY AGAIN",btn_price:function(){return"￥".concat(arguments.length<=0?void 0:arguments[0])},btn_progress:function(){return"".concat(arguments.length<=0?void 0:arguments[0],"%%")},btn_pausable:"PAUSE",user_agreement_msg:function(){return'To use the basic features of this service, you must agree that us can collect, process, balabalbalablabalbalbalabal <a href="'.concat(arguments.length<=0?void 0:arguments[0],'">Privacy Policy</a>. Agree?')}}},P=w,k={plurals:{cardinal:{wastetime:{one:function(){return"".concat(arguments.length<=0?void 0:arguments[0]," 分")},other:function(){return"".concat(arguments.length<=0?void 0:arguments[0]," 分")}}}},string:{welcome_messages:function(){return"こんにちは, ".concat(arguments.length<=0?void 0:arguments[0],"! ").concat(arguments.length<=1?void 0:arguments[1]," 件のメッセージがあります.")},app_name:"アプリケーション市場",user_agreement_msg:function(){return'To use the basic features of this service, you must agree that Xiaomi can collect, process, and use your personal data, including the personal data related to individual modules and services of GetApps. For example, Xiaomi will collect network information to optimize updating process, collect your comments and favorites to keep records of their content, collect activation time and paths to the items you view to improve the overall user experience, as well as collect other types of data in accordance with our Privacy Policy. Other types of data we collect and the data processing methods are described in our <a href="'.concat(arguments.length<=0?void 0:arguments[0],'">Privacy Policy</a>. Agree?')}}},j=k;Object(_["b"])({ja:{cardinal:function(e){return 0==e?"zero":"other"},ordinal:function(e){return"other"},range:function(e,n){return"other"}}}),r["a"].config.productionTip=!1,r["a"].use(m["a"],{local:"zh",i18:new _["c"]({en:P,zh:y,ja:j},"zh")}),window.vm=new r["a"]({render:function(e){return e(v)}}).$mount("#app")},6716:function(e,n,t){"use strict";var r=t("ca59"),a=t.n(r);a.a},"85ec":function(e,n,t){},"92e0":function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return d})),t.d(n,"d",(function(){return g})),t.d(n,"e",(function(){return h}));t("4160");var r=t("d4ec"),a=t("bee2"),o=t("ed47"),i=t.n(o),l="en",c=l,u={zh:{cardinal:function(e){return 0==e?"zero":"other"},ordinal:function(e){return"other"},range:function(e,n){return"other"}},en:{cardinal:function(e){return 0==e?"zero":1==e?"one":"other"},ordinal:function(e){return e%10==1&&e%100!=11?"one":e%10==2&&e%100!=12?"two":e%10==3&&e%100!=13?"few":"other"},range:function(e,n){return"other"}}},s=[],f=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;Object(r["a"])(this,e),this.backup=t||l,this.langs={},this.lang={},this.addLangs(n),this.updateLang()}return Object(a["a"])(e,[{key:"updateLang",value:function(){var e=this.langs[c]||{},n={};i()(n,this.langs[this.backup]),i()(n,e),this.lang=n}},{key:"addLangs",value:function(e){Object.assign(this.langs,e)}}]),e}();function d(e){Object.assign(u,e)}var g={};function h(e){c!==e&&(c=e,s.forEach((function(e){e.updateLang(c)})))}function p(e,n){var t=new f(e,n);return s.push(t),t}Object.defineProperties(g,{cardinal:{get:function(){return function(e,n){if(!e)return"";var t=u[c].cardinal(n),r=e[t]||e.other;if("function"===typeof r){for(var a=arguments.length,o=new Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];r=r.apply(void 0,o)}return r||""}}},ordinal:{get:function(){return function(e,n){if(!e)return"";var t=u[c].ordinal(n),r=e[t]||e.other;if("function"===typeof r){for(var a=arguments.length,o=new Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];r=r.apply(void 0,o)}return r||""}}},range:{get:function(){return function(e,n,t){if(!e)return"";var r=u[c].range(n,t),a=e[r]||e.other;if("function"===typeof a){for(var o=arguments.length,i=new Array(o>3?o-3:0),l=3;l<o;l++)i[l-3]=arguments[l];a=a.apply(void 0,i)}return a||""}}}}),n["c"]=p},a5a1:function(e,n,t){"use strict";t.d(n,"b",(function(){return h}));var r,a,o,i,l,c=t("2b0e"),u=t("92e0"),s={};function f(){o?o.lang=a.lang:o=new c["a"]({data:function(){return{lang:a.lang}},computed:{_lang:function(){return this.lang}}})}function d(e){if(i)if(e)i.langModule[e]?i.langModule[e]=s[e].lang:c["a"].set(i.langModule,e,s[e].lang);else for(var n in s)i.langModule[n]?i.langModule[n]=s[n].lang:c["a"].set(i.langModule,n,s[n].lang);else i=new c["a"]({data:function(){var n={};if(e)n[e]=s[e].lang;else for(var t in s)n[t]=s[t].lang;return{langModule:n}},computed:{_langModule:function(){return this.langModule}}})}function g(e){Object(u["e"])(e),l?l.local=e:l=new c["a"]({data:function(){return{local:e}},computed:{_local:function(){return this.local}}})}function h(e,n){s[e]?console.warn(new Error("_i18VmModules['".concat(e,"']模块已经被注册过了"))):(s[e]=n,d(e))}var p={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!r){if(r=e,n.local&&g(n.local),!(n.i18 instanceof u["a"]))throw new Error("需要参数 opt.i18 是 I18nJsClass 的实例化对象");a=n.i18,f(),Object.defineProperties(e.prototype,{$local:{get:function(){return l._local}},$lang:{get:function(){return o._lang}},$langModule:{get:function(){return i._langModule}},$setLocal:{get:function(){return function(e){g(e),f(),d()}}},$localPlurals:{get:function(){return u["d"]}}})}}};n["a"]=p},ca59:function(e,n,t){},cf05:function(e,n,t){e.exports=t.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.ad6d5a41.js.map