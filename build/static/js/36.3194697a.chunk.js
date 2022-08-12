(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[36],{2058:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(30),c=n(254),r={OPEN_APP:{event:a.a.CLICK,action:"Open Safe App"},PIN:{event:a.a.CLICK,action:"Pin Safe App"},UNPIN:{event:a.a.CLICK,action:"Unpin Safe App"},SEARCH:{event:a.a.META,action:"Search for Safe App"},ADD_CUSTOM_APP:{event:a.a.META,action:"Add custom Safe App"},TRANSACTION_CONFIRMED:{event:a.a.META,action:"Transaction Confirmed"},TRANSACTION_REJECTED:{event:a.a.META,action:"Transaction Rejected"},LEGACY_API_CALL:{event:a.a.META,action:"Legacy API call"},SHARED_APP_LANDING:{event:a.a.META,action:"Shared App landing page visited"},SHARED_APP_CHAIN_ID:{event:a.a.META,action:"Shared App chainId"},SHARED_APP_OPEN_DEMO:{event:a.a.META,action:"Open demo safe from shared app"},SHARED_APP_OPEN_AFTER_SAFE_CREATION:{event:a.a.META,action:"Open shared app after Safe creation"}},i=Object(c.a)(r,"safe-apps")},2065:function(e,t,n){"use strict";var a,c=n(7),r=n(3),i=n(6),o=n(20),u=n(5),s=n(1);t.a=function(e){var t=e.networkInfo,n=e.onClick,a=e.flexGrow,c=t||Object(o.e)();return Object(s.jsx)(l,Object(r.a)(Object(r.a)({onClick:n,flexGrow:a},c.theme),{},{"data-testid":e["data-testid"],children:c.chainName}))};var l=i.default.span(a||(a=Object(c.a)(["\n  position: relative;\n  bottom: 2px;\n  line-height: normal;\n  display: inline-block;\n  min-width: 70px;\n  font-size: ",";\n  padding: "," ",";\n  background-color: ",";\n  color: ",";\n  cursor: ",";\n  text-align: center;\n  border-radius: 4px;\n  text-transform: capitalize;\n  flex-grow: ",";\n"])),u.extraSmallFontSize,u.xs,u.sm,(function(e){var t=e.backgroundColor;return null!==t&&void 0!==t?t:u.border}),(function(e){var t=e.textColor;return null!==t&&void 0!==t?t:u.fontColor}),(function(e){return e.onClick?"pointer":"inherit"}),(function(e){return e.flexGrow?1:"initial"}))},2091:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(3),c=n(50),r=n(0),i=n(15),o=n(132),u=n(26),s=n(141),l=n(384),d=n(2104),f=n(30),b=n(2058),j=function(){var e=Object(d.a)(),t=e.remoteSafeApps,n=e.status,j=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],d=t[1],f=Object(r.useState)(!1),b=Object(i.a)(f,2),j=b[0],p=b[1],O=Object(r.useCallback)((function(e){d(e),Object(o.f)(l.a,e.map((function(e){return{url:e.url}})))}),[]);return Object(r.useEffect)((function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];d((function(n){var r=Object(c.a)(n),i=r.findIndex((function(t){return t.url===e.url}));return t?r.splice(i,1):r[i]=Object(a.a)(Object(a.a)({},e),{},{fetchStatus:s.a.SUCCESS}),r}))};!function(){var t=(Object(o.b)(l.a)||[]).map((function(e){return Object(a.a)(Object(a.a)(Object(a.a)({},Object(l.f)()),e),{},{url:e.url.trim(),id:e.url.trim(),custom:!0})}));d(t),p(!0),t.forEach((function(t){Object(l.e)(t.url).then((function(t){e(Object(a.a)(Object(a.a)({},t),{},{custom:!0}))})).catch((function(n){e(t,!0),Object(u.c)(u.b._900,"".concat(t.url,", ").concat(n.message))}))}))}()}),[]),{customSafeApps:n,loaded:j,updateCustomSafeApps:O}}(),p=j.customSafeApps,O=j.updateCustomSafeApps,x=function(e,t){var n=Object(r.useState)([]),a=Object(i.a)(n,2),c=a[0],u=a[1],d=Object(r.useState)(!1),f=Object(i.a)(d,2),b=f[0],j=f[1];return Object(r.useEffect)((function(){!function(){var n=Object(o.b)(l.c)||[];if(t===s.a.SUCCESS){var a=n.filter((function(t){return e.some((function(e){return e.id===t}))}));u(a),j(!0)}}()}),[t,e]),Object(r.useEffect)((function(){t===s.a.SUCCESS&&Object(o.f)(l.c,c)}),[c,t]),{pinnedSafeAppIds:c,loaded:b,updatePinnedSafeApps:u}}(t,n),h=x.pinnedSafeAppIds,m=x.updatePinnedSafeApps,v=n===s.a.LOADING,g=Object(r.useMemo)((function(){return[].concat(Object(c.a)(t),Object(c.a)(p)).sort((function(e,t){return e.name.toLowerCase().localeCompare(t.name.toLowerCase())}))}),[t,p]),A=Object(r.useMemo)((function(){return t.sort((function(e,t){return e.name.toLowerCase().localeCompare(t.name.toLowerCase())}))}),[t]),S=Object(r.useMemo)((function(){return p.filter((function(e){return!t.some((function(t){return t.url===e.url}))})).sort((function(e,t){return e.name.toLowerCase().localeCompare(t.name.toLowerCase())}))}),[p,t]),C=Object(r.useMemo)((function(){return A.filter((function(e){return h.includes(e.id)}))}),[h,A]),w=Object(r.useCallback)((function(e){var t=[].concat(Object(c.a)(p),[e]);O(t)}),[O,p]),E=Object(r.useCallback)((function(e){var t=p.filter((function(t){return t.id!==e}));O(t)}),[O,p]),I=Object(r.useCallback)((function(e){var t=e.id,n=e.name,r=Object(c.a)(h);h.includes(t)?(Object(f.d)(Object(a.a)(Object(a.a)({},b.a.UNPIN),{},{label:n})),r.splice(r.indexOf(t),1)):(Object(f.d)(Object(a.a)(Object(a.a)({},b.a.PIN),{},{label:n})),r.push(t)),m(r)}),[m,h]),L=Object(r.useCallback)((function(e){var t=new URL(e),n="".concat(t.hostname,"/").concat(t.pathname);return A.find((function(e){var t=new URL(null===e||void 0===e?void 0:e.url);if(Object(l.j)("".concat(null===t||void 0===t?void 0:t.hostname,"/").concat(null===t||void 0===t?void 0:t.pathname),n))return e}))}),[A]);return{allApps:g,appList:A,customApps:S,pinnedSafeApps:C,removeApp:E,togglePin:I,addCustomApp:w,isLoading:v,getSafeApp:L}}},2104:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(2),c=n.n(a),r=n(3),i=n(8),o=n(15),u=n(0),s=n(16),l=n(26),d=n(86),f=n(153),b=n(141),j=n(27),p=n(20),O=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(j.getSafeApps)(Object(p.b)(),{client_url:window.location.origin}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=null,h=function(){var e=Object(u.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],j=Object(u.useState)(b.a.NOT_ASKED),p=Object(o.a)(j,2),h=p[0],m=p[1],v=Object(s.c)();return Object(u.useEffect)((function(){var e=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(b.a.LOADING),e.prev=1,e.next=4,x||(x=O()),x.finally((function(){return x=null})),x;case 4:if(!(null===(t=e.sent)||void 0===t?void 0:t.length)){e.next=10;break}a(t.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{fetchStatus:b.a.SUCCESS,id:String(e.id)})}))),m(b.a.SUCCESS),e.next=11;break;case 10:throw new Error("Empty apps array \ud83e\udd2c");case 11:e.next=18;break;case 13:e.prev=13,e.t0=e.catch(1),m(b.a.ERROR),Object(l.c)(l.b._902,e.t0.message),v(Object(d.h)(f.a.SAFE_APPS_FETCH_ERROR_MSG));case 18:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]),{remoteSafeApps:n,status:h}}},2143:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var a,c,r=n(7),i=n(6),o=n(9),u=Object(i.default)(o.Title)(a||(a=Object(r.a)(["\n  text-align: ",";\n  margin: 24px 0;\n  color: inherit;\n  font-weight: ",";\n"])),(function(e){return e.centered?"center":"left"}),(function(e){return e.bold?"bold":"normal"})),s=Object(i.default)(o.Text)(c||(c=Object(r.a)(["\n  text-align: center;\n  color: #b2bbc0;\n  margin: 0 80px;\n"])))},2171:function(e,t,n){"use strict";var a,c,r=n(7),i=(n(0),n(6)),o=n(9),u=n(1),s=Object(i.default)(o.Icon)(a||(a=Object(r.a)(["\n  position: relative;\n  top: 4px;\n  padding-right: 4px;\n"]))),l=Object(i.default)(o.Text)(c||(c=Object(r.a)(["\n  display: block;\n  font-size: 12px;\n  font-weight: bold;\n  overflow-wrap: anywhere;\n  background-color: #effaf8;\n  padding: 10px 15px 10px 10px;\n  border-radius: 8px;\n  max-width: 75%;\n  ","\n"])),(function(e){return e.showInOneLine&&"overflow-y: hidden;\n     white-space: nowrap;\n     "}));t.a=function(e){var t=e.url,n=e.showInOneLine;return Object(u.jsxs)(l,{size:"xl",showInOneLine:!!n,children:[Object(u.jsx)(s,{type:"check",color:"primary",size:"sm"})," ",t]})}},2225:function(e,t,n){"use strict";t.a=n.p+"static/media/safe-created.ad262168.svg"},2226:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),c=n(59),r=function(){var e=Object(c.i)().search;return Object(a.useMemo)((function(){return new URLSearchParams(e)}),[e])}},2228:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(50),c=n(15),r=n(0),i=n(263),o=n(132),u=n(2091),s="APPS_SECURITY_FEEDBACK_MODAL",l=function(){var e=Object(r.useRef)(!1),t=Object(u.a)(),n=t.isLoading,l=t.getSafeApp,d=(0,Object(i.a)().getAppUrl)(),f=Object(r.useState)([]),b=Object(c.a)(f,2),j=b[0],p=b[1],O=Object(r.useState)(!1),x=Object(c.a)(O,2),h=x[0],m=x[1],v=Object(r.useState)([]),g=Object(c.a)(v,2),A=g[0],S=g[1],C=Object(r.useState)(!1),w=Object(c.a)(C,2),E=w[0],I=w[1],L=Object(r.useState)(!1),y=Object(c.a)(L,2),k=y[0],P=y[1];Object(r.useEffect)((function(){var e=Object(o.b)(s)||{appsReviewed:[],extendedListReviewed:!1,customAppsReviewed:[],consentAccepted:!1};e&&(p(e.appsReviewed),m(e.extendedListReviewed),S(e.customAppsReviewed),I(e.consentAccepted))}),[]),Object(r.useEffect)((function(){d||P(!1)}),[d]),Object(r.useEffect)((function(){e.current?Object(o.f)(s,{appsReviewed:j,extendedListReviewed:h,customAppsReviewed:A,consentAccepted:E}):e.current=!0}),[j,E,A,h]);var R=Object(r.useMemo)((function(){return!!d&&!!l(d)}),[l,d]),T=Object(r.useMemo)((function(){var e;if(!d)return!0;var t=null===(e=l(d))||void 0===e?void 0:e.id;return t?!(null===j||void 0===j?void 0:j.includes(t)):!(null===A||void 0===A?void 0:A.includes(d))}),[j,A,l,d]),_=Object(r.useMemo)((function(){return!n&&e.current&&(!E||R&&T||!R&&T&&!k)}),[E,k,T,n,R]),U=Object(r.useCallback)((function(e){var t;I(!0);var n=null===(t=l(d))||void 0===t?void 0:t.id;if(n&&!j.includes(n)){var c=[].concat(Object(a.a)(j),[n]);p(c)}else if(e&&!A.includes(d)){var r=[].concat(Object(a.a)(A),[d]);S(r)}h||m(!0),P(!0)}),[j,A,h,l,d]),N=Object(r.useCallback)((function(e){var t=A.filter((function(t){return t!==e}));S(t)}),[A]);return{isModalVisible:_,isSafeAppInDefaultList:R,isFirstTimeAccessingApp:T,isConsentAccepted:E,isExtendedListReviewed:h,onComplete:U,onRemoveCustomApp:N}}},2229:function(e,t,n){"use strict";var a,c,r,i,o,u,s=n(7),l=n(15),d=n(0),f=n(593),b=n(1023),j=n(682),p=n(6),O=n(9),x=n(2143),h=n(2171),m=n(1),v=Object(p.default)(f.a)(a||(a=Object(s.a)(["\n  color: #e8663d;\n"]))),g=Object(p.default)(x.b)(c||(c=Object(s.a)(["\n  font-size: 24px;\n  margin-left: 4px;\n  margin-top: ",";\n"])),(function(e){return e.isColumnLayout?"12px":"24px"})),A=Object(p.default)(O.Text)(r||(r=Object(s.a)(["\n  color: inherit;\n  text-align: ",";\n"])),(function(e){return e.isColumnLayout?"center":"left"})),S=Object(p.default)(O.Text)(i||(i=Object(s.a)(["\n  text-align: ",";\n"])),(function(e){return e.isColumnLayout?"center":"left"})),C=Object(p.default)(O.Icon)(o||(o=Object(s.a)(["\n  svg {\n    width: ",";\n    height: ",";\n  }\n  .icon-color {\n    fill: #e8663d;\n  }\n\n  .icon-stroke {\n    stroke: #e8663d;\n  }\n"])),(function(e){return e.isColumnLayout?"32px":"24px"}),(function(e){return e.isColumnLayout?"32px":"24px"})),w=Object(p.default)(j.a)(u||(u=Object(s.a)(["\n  flex: 1;\n  color: #000;\n  .MuiIconButton-root:not(.Mui-checked) {\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.inputDisabled}));t.a=function(e){var t=e.url,n=e.onHideWarning,a=Object(d.useState)(!1),c=Object(l.a)(a,2),r=c[0],i=c[1],o=!!n;return Object(m.jsxs)(v,{display:o?"flex":"block",flexDirection:"column",height:o?"100%":"auto",alignItems:"center",children:[Object(m.jsxs)(f.a,{display:o?"block":"flex",alignItems:"center",mt:o?6:0,children:[Object(m.jsx)(C,{type:"alert",size:"md",isColumnLayout:o}),Object(m.jsx)(g,{size:"sm",bold:!0,isColumnLayout:o,children:"Warning"})]}),Object(m.jsx)(A,{isColumnLayout:o,size:"xl",children:"The application you are trying to access is not in the default Safe Apps list"}),Object(m.jsx)("br",{}),Object(m.jsx)(S,{isColumnLayout:o,size:"lg",children:"Check the link you are using and ensure that it comes from a source you trust"}),Object(m.jsx)("br",{}),t&&Object(m.jsx)(h.a,{url:t,showInOneLine:!0}),Object(m.jsx)("br",{}),n&&Object(m.jsx)(w,{control:Object(m.jsx)(b.a,{checked:r,onChange:function(){null===n||void 0===n||n(!r),i(!r)},name:"Warning message preference"}),label:"Don't show this warning again"})]})}},2546:function(e,t,n){var a=n(766);e.exports=function(e){return e&&e.length?a(e):[]}},3088:function(e,t,n){"use strict";n.r(t);var a,c,r,i,o,u,s,l,d,f,b,j,p,O,x,h,m,v,g,A,S,C=n(7),w=n(3),E=n(2),I=n.n(E),L=n(8),y=n(15),k=n(0),P=n(59),R=n(6),T=n(9),_=n(20),U=n(25),N=n(2091),M=n(384),D=n(224),z=n(2226),F=n(198),H=n(30),G=n(2058),W=n(2023),B=n(2065),K=n(5),J=n(731),V=n(2228),Y=n(2229),q=n(1),Q=function(e){var t=e.iconUrl,n=e.name,a=e.description,c=e.availableChains,r=(null===c||void 0===c?void 0:c.length)>0,i=Object(V.a)(),o=i.isModalVisible,u=i.isSafeAppInDefaultList;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)(Z,{children:[Object(q.jsx)($,{src:t,onError:X,alt:"".concat(n||"Safe App"," Logo")}),Object(q.jsxs)(te,{children:[Object(q.jsx)(ee,{size:"sm",children:n}),Object(q.jsx)("div",{children:a})]})]}),Object(q.jsx)(ne,{}),r&&Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(ae,{size:"lg",children:"Available networks"}),Object(q.jsx)(ce,{children:c.map((function(e){var t=Object(_.d)(e);return t.chainName&&Object(q.jsx)("div",{children:Object(q.jsx)(B.a,{networkInfo:t})},e)}))}),Object(q.jsx)(ne,{})]}),o&&!u&&Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Y.a,{}),Object(q.jsx)(ne,{})]})]})},X=function(e){e.currentTarget.onerror=null,e.currentTarget.src=J.a},Z=R.default.div(a||(a=Object(C.a)(["\n  display: flex;\n"]))),$=R.default.img(c||(c=Object(C.a)(["\n  width: 90px;\n  height: 90px;\n"]))),ee=Object(R.default)(T.Title)(r||(r=Object(C.a)(["\n  margin-top: 0px;\n  margin-bottom: 12px;\n"]))),te=R.default.div(i||(i=Object(C.a)(["\n  padding-left: 66px;\n  flex-grow: 1;\n"]))),ne=Object(R.default)(W.a)(o||(o=Object(C.a)(["\n  margin: 24px 0;\n"]))),ae=Object(R.default)(T.Text)(u||(u=Object(C.a)(["\n  color: ",";\n"])),K.black300),ce=R.default.div(s||(s=Object(C.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  && > div {\n    margin-top: 12px;\n    margin-right: 8px;\n  }\n"]))),re=n(82),ie=n.p+"static/media/demo.424695b1.svg",oe=n(300),ue=function(e){var t=e.safeAppUrl,n=Object(P.h)(),a="".concat(U.m,"?appUrl=").concat(encodeURI(t||""));return Object(q.jsxs)(se,{children:[Object(q.jsx)(T.Title,{size:"xs",children:"Want to try the app before using it?"}),Object(q.jsx)(oe.a,{}),Object(q.jsx)("img",{alt:"Demo",height:92,src:ie}),t&&Object(q.jsx)(le,{onClick:function(e){e.preventDefault(),Object(H.d)(Object(w.a)(Object(w.a)({},G.a.SHARED_APP_OPEN_DEMO),{},{label:t})),n.push(a)},to:a,color:"primary",component:re.a,size:"lg",variant:"outlined",children:"Try Demo"})]})},se=R.default.div(l||(l=Object(C.a)(["\n  flex: 1 0 50%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),le=Object(R.default)(T.Button)(d||(d=Object(C.a)(["\n  border: 2px solid ",";\n  margin-top: 30px;\n"])),K.secondary),de=n(50),fe=n(16),be=n(2546),je=n.n(be),pe=n(49),Oe=n(991),xe=n(1030),he=n(778),me=n(134),ve=n(170),ge=n(2225),Ae=function(e){var t=e.safeAppUrl,n="".concat(U.e,"?redirect=").concat(encodeURIComponent("".concat(U.i.APPS,"?appUrl=").concat(t)));return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("img",{alt:"Vault",height:92,src:ge.a}),Object(q.jsx)(Se,{size:"lg",color:"primary",variant:"contained",component:re.a,to:n,children:Object(q.jsx)(T.Text,{size:"xl",color:"white",children:"Create new Safe"})})]})},Se=Object(R.default)(T.Button)(f||(f=Object(C.a)(["\n  margin-top: 30px;\n"]))),Ce=n(674),we=n(788),Ee=n(691),Ie=n(226),Le=n.n(Ie),ye=function(e){var t=e.safes,n=e.value,a=e.onChange,c=e.shouldShowShortName,r=void 0===c||c,i=e.dataTestid;return Object(q.jsx)(Ce.a,{children:Object(q.jsx)(ke,{"data-testid":i||"safe-selector",value:n,onChange:a,autoWidth:!0,disableUnderline:!0,IconComponent:Le.a,fullWidth:!0,children:t.map((function(e){return Object(q.jsx)(Pe,{value:e.address,children:Object(q.jsx)(T.EthHashInfo,{shouldShowShortName:r,shortName:Object(_.d)(e.chainId).shortName,hash:e.address,showAvatar:!0,shortenHash:4,name:e.name})},"".concat(e.address,"-").concat(e.chainId))}))})})},ke=Object(R.default)(Ee.a)(b||(b=Object(C.a)(["\n  &.MuiInput-root {\n    margin: 0;\n    padding: 8px 16px;\n    border-radius: 8px;\n    border: 2px solid ",";\n    background-color: ",";\n  }\n\n  & .MuiSelect-select:focus {\n    background-color: inherit;\n  }\n\n  & .MuiSelect-icon {\n    right: 16px;\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.separator}),(function(e){return e.theme.colors.white}),K.black300),Pe=Object(R.default)(we.a)(j||(j=Object(C.a)(["\n  padding: 12px;\n"]))),Re=function(e){var t=e.safes,n=e.safeAppUrl,a=e.defaultSafe,c=Object(k.useState)(a),r=Object(y.a)(c,2),i=r[0],o=r[1];Object(k.useEffect)((function(){o(a)}),[a]);var u=Object(U.p)(U.i.APPS,{shortName:Object(_.d)(i.chainId).shortName,safeAddress:i.address}),s="".concat(u,"?appUrl=").concat(encodeURI(n));return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(_e,{children:Object(q.jsx)(ye,{value:i.address,safes:t,onChange:function(e){var n=t.find((function(t){return t.address===e.target.value}));n&&o(n)}})}),Object(q.jsx)(Te,{size:"lg",color:"primary",variant:"contained",component:re.a,to:s,children:Object(q.jsx)(T.Text,{size:"xl",color:"white",children:"Connect Safe"})})]})},Te=Object(R.default)(T.Button)(p||(p=Object(C.a)(["\n  margin-top: 30px;\n"]))),_e=R.default.div(O||(O=Object(C.a)(["\n  flex-grow: 1;\n  justify-content: center;\n  margin-top: 24px;\n  max-width: 320px;\n  width: 100%;\n"]))),Ue=function(e){var t=e.safeAppUrl,n=e.availableChains,a=e.safeAppChainId,c=Object(fe.d)(pe.g),r=Object(fe.d)(me.c),i=Object(xe.a)(),o=Object(he.a)(),u=Object(fe.d)(ve.c),s=function(e,t,n,a){return n.reduce((function(n,c){var r,i=(null===(r=e[c])||void 0===r?void 0:r.map((function(e){return e.address})))||[],o=t[c]||[],u=je()([].concat(Object(de.a)(o),Object(de.a)(i))).map((function(e){return{address:e,chainId:c,name:ze(a,e,c)}}));return[].concat(Object(de.a)(n),Object(de.a)(u))}),[])}(o,i,n.includes(a)?n:[].concat(Object(de.a)(n),[a]),u),l=Fe(s,r,a),d=!!c,f=s.length>0,b=!d&&!f;return Object(q.jsxs)(Ne,{children:[Object(q.jsx)(T.Title,{size:"xs",children:"Use the dApp with your Safe!"}),b?Object(q.jsx)(Me,{children:Object(q.jsx)(De,{"data-testid":"connect-wallet-btn"})}):l?Object(q.jsx)(Re,{safeAppUrl:t,defaultSafe:l,safes:s}):Object(q.jsx)(Ae,{safeAppUrl:t})]})},Ne=R.default.div(x||(x=Object(C.a)(["\n  flex: 1 0 50%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Me=R.default.div(h||(h=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]))),De=Object(R.default)(Oe.a)(m||(m=Object(C.a)(["\n  height: 52px;\n"]))),ze=function(e,t,n){var a=e.find((function(e){return e.address===t&&e.chainId===n}));return(null===a||void 0===a?void 0:a.name)||""},Fe=function(e,t,n){var a=e.find((function(e){return e.address===t&&e.chainId===n}));if(a)return a;var c=e.find((function(e){return e.chainId===n}));return c||e[0]},He=(t.default=function(){var e=Object(z.a)(),t=e.get("chainId"),n=e.get("appUrl"),a=Object(k.useMemo)((function(){return Object(_.s)(t)}),[t]);Object(k.useEffect)((function(){a&&Object(D.a)(t)}),[t,a]);var c=Object(N.a)(),r=c.appList,i=c.isLoading,o=r.find((function(e){var t=e.url;return n===t})),u=Object(F.a)(Object(L.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return",Object(M.e)(n));case 2:throw new Error("No Safe App URL provided.");case 3:case"end":return e.stop()}}),e)}))),[n]),s=Object(y.a)(u,3),l=s[0],d=s[1],f=s[2],b=o||l,j=i||f,p=!j&&!b&&d,O=(null===b||void 0===b?void 0:b.chainIds)||[],x=j||!b;return Object(k.useEffect)((function(){!j&&b&&(Object(H.d)(Object(w.a)(Object(w.a)({},G.a.SHARED_APP_LANDING),{},{label:null===b||void 0===b?void 0:b.name})),Object(H.d)(Object(w.a)(Object(w.a)({},G.a.SHARED_APP_CHAIN_ID),{},{label:t})))}),[j,b,t]),n&&a&&!p?Object(q.jsx)(He,{children:Object(q.jsx)(Ge,{children:x?Object(q.jsx)(We,{children:Object(q.jsx)(T.Loader,{size:"md"})}):Object(q.jsxs)(q.Fragment,{children:[b&&Object(q.jsx)(Q,{iconUrl:b.iconUrl,name:b.name,description:null===b||void 0===b?void 0:b.description,availableChains:O}),Object(q.jsxs)(Be,{children:[t&&Object(q.jsx)(Ue,{safeAppUrl:n,availableChains:O,safeAppChainId:t}),Object(q.jsx)(ue,{safeAppUrl:n})]})]})})}):Object(q.jsx)(P.a,{to:U.l})},R.default.main(v||(v=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n"])))),Ge=Object(R.default)(T.Card)(g||(g=Object(C.a)(["\n  flex-grow: 1;\n  max-width: 850px;\n  border-radius: 20px;\n  padding: 50px 58px;\n"]))),We=R.default.div(A||(A=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n"]))),Be=R.default.div(S||(S=Object(C.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"])))}}]);
//# sourceMappingURL=36.3194697a.chunk.js.map