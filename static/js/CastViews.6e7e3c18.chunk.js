"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[664],{1066:function(t,e,r){r.d(e,{HI:function(){return m},Hg:function(){return i},TP:function(){return p},tx:function(){return h},zv:function(){return f}});var n=r(5861),a=r(7757),c=r.n(a),u=r(4569).default;u.defaults.baseURL="https://api.themoviedb.org/";var s="70c5c640dcd47438a9460ce1b8e1a5b1";function i(t){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("/3/trending/movie/week?api_key=".concat(s));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("/3/movie/".concat(e,"?api_key=").concat(s));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("/3/movie/".concat(e,"/credits?api_key=").concat(s));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("/3/movie/".concat(e,"/reviews?api_key=").concat(s));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("/3/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 3:if(!(!(r=t.sent).data.results.length>0)){t.next=7;break}return alert("\u0424\u0438\u043b\u044c\u043c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d "),t.abrupt("return");case 7:return t.abrupt("return",r.data.results);case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}},292:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(885),a=r(6871),c=r(1066),u=r(2791),s="Cast_list__GlWio",i="Cast_wrapp__qfd2V",o="Cast_item__a0CDL",p=r(184);var l=function(t){var e=t.actors;return(0,p.jsx)("div",{className:i,children:(0,p.jsx)("ul",{className:s,children:e.map((function(t){var e=t.profile_path,r=t.name,n=t.character,a=t.id,c=e?"https://image.tmdb.org/t/p/w500".concat(e):"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";return(0,p.jsxs)("div",{className:o,children:[(0,p.jsx)("img",{src:c,alt:r}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("p",{children:["Name Actor : ",r]}),(0,p.jsxs)("p",{children:["Character : ",n]})]})]},a)}))})})};var f=function(){var t=(0,a.UO)(null).movieId,e=(0,u.useState)(),r=(0,n.Z)(e,2),s=r[0],i=r[1];return(0,u.useEffect)((function(){(0,c.zv)(t).then(i)}),[t]),s&&(0,p.jsx)(l,{actors:s})}}}]);
//# sourceMappingURL=CastViews.6e7e3c18.chunk.js.map