(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"74e7":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("ac18"),r=e("2f62");function i(n){return l(n)||u(n)||c(n)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(n,t){if(n){if("string"===typeof n)return s(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(n,t):void 0}}function u(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function l(n){if(Array.isArray(n))return s(n)}function s(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function d(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function f(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?d(Object(e),!0).forEach((function(t){h(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function h(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var p=function(){e.e("pages/index/components/search").then(function(){return resolve(e("d997"))}.bind(null,e)).catch(e.oe)},b=function(){e.e("pages/index/components/ticket").then(function(){return resolve(e("63ea"))}.bind(null,e)).catch(e.oe)},m=function(){e.e("pages/index/components/classify").then(function(){return resolve(e("1dec"))}.bind(null,e)).catch(e.oe)},g=function(){e.e("pages/index/components/scroll-content").then(function(){return resolve(e("7825"))}.bind(null,e)).catch(e.oe)},v=function(){e.e("pages/index/components/article").then(function(){return resolve(e("5f4c"))}.bind(null,e)).catch(e.oe)},y=function(){e.e("components/uni-load-more/uni-load-more").then(function(){return resolve(e("bdd4"))}.bind(null,e)).catch(e.oe)},O={components:{Search:p,Ticket:b,Classfiy:m,ScrollContent:g,Article:v,uniLoadMore:y},data:function(){return{title:"Hello",isFixed:!1,rect:0,menutop:0,banner:[],tab:[],article:[],loadingShow:!1,navLoading:!1,nav:"recommend",pageId:0,uniload:"loading",loadmore:!1,noneShow:!1,homeLoadShow:!0}},created:function(){this.getDB()},computed:f({},(0,r.mapState)(["list","loading","navObj","nonedata"]),{count:function(){this.article=this.list.listing},countLoad:function(){this.loadingShow=this.loading},navCheck:function(){this.navLoading=this.navObj.loading,this.nav=this.navObj.nav,this.pageId=this.navObj.pageId,this.loadmore=this.navObj.uniload},noneState:function(){this.noneShow=this.nonedata},namepage:function(){this.rect>this.menutop?this.isFixed=!0:this.isFixed=!1}}),methods:{getDB:function(){var n=this,t="banner",e="tab",r="recommend";Promise.all([(0,o.home)(t),(0,o.home)(e),(0,o.homeList)(r,this.pageId)]).then((function(t){n.banner=t[0].data,n.tab=t[1].data,n.article=t[2].data,n.homeLoadShow=!1}))},pullonPage:function(){var n=this;console.log(this.nav,"9999"),(0,o.homeList)(this.nav,this.pageId).then((function(t){t.data.length?n.article=[].concat(i(n.article),i(t.data)):n.uniload="noMore"}))}},onLoad:function(){var n=wx.createSelectorQuery();n.select("#content").boundingClientRect(),n.selectViewport().scrollOffset(),n.exec((function(n){this.menutop=n[0].top}))},onPageScroll:function(n){this.rect=n.scrollTop},onReachBottom:function(){this.loadmore=!0,this.uniload="loading",this.pageId++,this.pullonPage()}};t.default=O},"7c95":function(n,t,e){"use strict";var o={uniLoadMore:function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"bdd4"))}},r=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return o}))},a389:function(n,t,e){"use strict";(function(n){e("93d8");o(e("66fd"));var t=o(e("cdfb"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},cdfb:function(n,t,e){"use strict";e.r(t);var o=e("7c95"),r=e("cf2d");for(var i in r)"default"!==i&&function(n){e.d(t,n,(function(){return r[n]}))}(i);e("d679");var a,c=e("f0c5"),u=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"295c0dde",null,!1,o["a"],a);t["default"]=u.exports},cf2d:function(n,t,e){"use strict";e.r(t);var o=e("74e7"),r=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t["default"]=r.a},d679:function(n,t,e){"use strict";var o=e("f2af"),r=e.n(o);r.a},f2af:function(n,t,e){}},[["a389","common/runtime","common/vendor"]]]);