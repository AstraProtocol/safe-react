(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[108],{1995:function(n,e,t){"use strict";t.r(e);var a=t(2),r=t.n(a),c=(t(564),t(718));t(108),t(566),t(567);function i(n,e,t,a,r,c,i){try{var u=n[c](i),o=u.value}catch(s){return void t(s)}u.done?e(o):Promise.resolve(o).then(a,r)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(a,r){var c=n.apply(e,t);function u(n){i(c,a,r,u,o,"next",n)}function o(n){i(c,a,r,u,o,"throw",n)}u(void 0)}))}}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{minimumBalance:"0"},e=n.minimumBalance,t=n.heading,a=n.description,i=n.icon,o=n.html,s=n.button;return function(){var n=u(r.a.mark((function n(u){var l,f,h,p;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(l=u.balance,f=u.BigNumber,h=u.stateSyncStatus,p=u.stateStore,null!==l){n.next=10;break}if(!h.balance){n.next=10;break}return n.prev=3,n.next=6,h.balance;case 6:n.next=10;break;case 8:n.prev=8,n.t0=n.catch(3);case 10:if(!f(p.balance.get()).lt(f(e))){n.next=12;break}return n.abrupt("return",{heading:t||"Get Some ETH",description:a||"Your current account has less than the necessary minimum balance of ".concat(f(e).div(f("1000000000000000000")).toString(10)," ETH."),eventCode:"nsfFail",icon:i||c.l,html:o,button:s});case 12:case"end":return n.stop()}}),n,null,[[3,8]])})));return function(e){return n.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=108.1cef631d.chunk.js.map