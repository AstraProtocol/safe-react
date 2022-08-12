(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[61],{2076:function(e,a,t){"use strict";var n=t(3),r=t(37),c=t(174),s=t.n(c),i=t(0),o=t(2094),d=t.n(o),l=t(98),j=["align","children","className","color","margin","tag","testId","truncate"],u=s.a.bind(d.a);a.a=function(e){var a=e.align,t=e.children,c=e.className,s=void 0===c?"":c,o=e.color,d=e.margin,b=e.tag,h=e.testId,f=e.truncate,g=Object(r.a)(e,j),m=u(s,"heading",a,b,d?Object(l.a)(d,"margin"):void 0,o,{truncate:f});return i.createElement(b,Object(n.a)(Object(n.a)({},g),{},{className:m,"data-testid":h||""}),t)}},2094:function(e,a,t){e.exports={heading:"Heading_heading__3Wz9P",h1:"Heading_h1__MXfCA",h2:"Heading_h2__3X6Ts",h3:"Heading_h3__1k2fD",h4:"Heading_h4__1YCmR",center:"Heading_center__28MHY",right:"Heading_right__1fQM1",truncate:"Heading_truncate__2Lq93",marginSm:"Heading_marginSm__13YwX",marginMd:"Heading_marginMd__2AnZN",marginLg:"Heading_marginLg__2ZfEq",marginXl:"Heading_marginXl__3RHt7",soft:"Heading_soft__2Zu43",medium:"Heading_medium__2X8Z-",dark:"Heading_dark__Ds2QB",fancy:"Heading_fancy__1Wx6l",warning:"Heading_warning__2lrZC",primary:"Heading_primary__2hOk2",secondary:"Heading_secondary__37lKs",disabled:"Heading_disabled__30DjG",error:"Heading_error__t5ujr",white:"Heading_white__2gkIK"}},3092:function(e,a,t){"use strict";t.r(a),t.d(a,"SAFE_NAME_INPUT_TEST_ID",(function(){return se})),t.d(a,"SAFE_NAME_SUBMIT_BTN_TEST_ID",(function(){return ie})),t.d(a,"SAFE_NAME_UPDATE_SAFE_BTN_TEST_ID",(function(){return oe}));var n,r=t(2),c=t.n(r),s=t(8),i=t(15),o=t(7),d=t(9),l=t(250),j=t(0),u=t(16),b=t(6),h=t(249),f=t(5),g=Object(h.a)({formContainer:{padding:f.lg},root:{display:"flex",maxWidth:"480px"},saveBtn:{fontWeight:f.boldFont,marginRight:f.sm},controlsRow:{borderTop:"2px solid ".concat(f.border),padding:f.lg,marginTop:f.sm}}),m=t(81),O=t(236),p=t(714),_=t(237),x=t(147),v=t(145),S=t(172),y=t(146),C=t(2076),N=t(56),T=t(75),w=t(219),E=t(223),I=t(41),H=t(27),A=t(31),k=t(154),M=t(161),D=t.n(M),U=t(109),L=t(422),B=t(65),G=function(e,a){var t=Object(U.j)(),n=Object(U.d)(e,a).methods.changeMasterCopy(t).encodeABI(),r=function(e){var a=D()(A.p,">=1.1.0"),t=Object(U.c)(),n=Object(U.d)(e,A.p);return a?n.methods.setFallbackHandler(t).encodeABI():B.c}(e),c=[{to:e,value:"0",data:n},{to:e,value:"0",data:r}];return Object(L.a)(c)},R=t(448),F=t(252),X=t(449),V=t(84),W=Object(l.a)(Object(h.a)({modalContent:{padding:"".concat(f.md," ").concat(f.lg)}})),z=t(1),P=function(e){var a=e.onClose,t=e.safeAddress,n=e.safeCurrentVersion,r=W(),c=Object(u.c)(),s=Object(j.useState)(B.c),o=Object(i.a)(s,2),d=o[0],l=o[1];Object(j.useEffect)((function(){var e=G(t,n);l(e)}),[t,n]);return Object(z.jsxs)(X.a,{txData:d,txTo:Object(U.g)(),operation:H.Operation.DELEGATE,onSubmit:function(e,n){c(Object(R.b)({safeAddress:t,to:Object(U.g)(),valueInWei:"0",txData:d,txNonce:e.safeNonce,safeTxGas:e.safeTxGas,ethParameters:e,notifiedTransaction:V.a.STANDARD_TX,operation:H.Operation.DELEGATE,delayExecution:n})),a()},onClose:a,submitText:"Update Safe",children:[Object(z.jsx)(F.a,{onClose:a,title:"Update safe version"}),Object(z.jsx)(v.a,{className:r.modalContent,children:Object(z.jsxs)(T.a,{children:[Object(z.jsx)(N.a,{noMargin:!0,children:"Update now to take advantage of new features and the highest security standards available."}),Object(z.jsxs)(N.a,{children:["To check details about updates added by this smart contract version please visit"," ",Object(z.jsx)(k.a,{target:"_blank",to:"https://github.com/gnosis/safe-contracts/releases/tag/v".concat(A.p),children:"latest Astra Safe contracts changelog"})]}),Object(z.jsx)(N.a,{noMargin:!0,children:"You will need to confirm this update just like any other transaction. This means other owners will have to confirm the update in case more than one confirmation is required for this Safe."}),Object(z.jsxs)(N.a,{children:[Object(z.jsx)("b",{children:"Warning"}),": this upgrade will invalidate all unexecuted transactions. This means you will be unable to access or execute them after the upgrade. Please make sure to execute any remaining transactions before upgrading."]})]})})]})},Y=t(100),Z=t(455),q=t(48),J=t(20);!function(e){e.GNOSIS="Gnosis",e.CIRCLES="Circles"}(n||(n={}));var K,Q,$,ee=function(e){var a=e.version.toLowerCase().includes(n.CIRCLES.toLowerCase()),t=e.version.indexOf("-");return{address:e.address,version:a?e.version.substring(0,t):e.version,deployer:a?n.CIRCLES:n.GNOSIS,deployerRepoUrl:a?"https://github.com/CirclesUBI/safe-contracts/releases":"https://github.com/gnosis/safe-contracts/releases"}},ae=function(){var e=Object(s.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(H.getMasterCopies)(Object(J.b)());case 3:return a=e.sent,e.abrupt("return",a.map(ee));case 7:e.prev=7,e.t0=e.catch(0),console.error("Fetching data from master-copies errored",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),te=t(358),ne=t(70),re=t(30),ce=t(2072),se="safe-name-input",ie="change-safe-name-btn",oe="update-safe-name-btn",de=Object(l.a)(g),le=Object(b.default)(d.Link)(K||(K=Object(o.a)(["\n  margin: 12px 0 0 0;\n"]))),je=Object(b.default)(d.Icon)(Q||(Q=Object(o.a)(["\n  position: relative;\n  top: 3px;\n  left: 6px;\n"]))),ue=Object(b.default)(N.a)($||($=Object(o.a)(["\n  margin-bottom: 0;\n"])));a.default=function(){var e,a=de(),t=Object(u.d)(Y.b),r=Object(u.d)(q.j),o=Object(u.d)(ne.a),l=Object(u.d)(q.a),b=l.address,h=l.needsUpdate,f=l.currentVersion,g=l.chainId,H=void 0===g?o:g,A=null===(e=Object(u.d)(q.n)[b])||void 0===e?void 0:e.name,k=Object(u.c)(),M=Object(j.useState)(!1),D=Object(i.a)(M,2),L=D[0],B=D[1],G=Object(j.useState)(),R=Object(i.a)(G,2),F=R[0],X=R[1],V=function(){B((function(e){return!e}))},W=function(){B(!0)};return Object(j.useEffect)((function(){var e=function(){var e=Object(s.a)(c.a.mark((function e(){var a,t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:return a=e.sent,e.next=5,Object(U.e)(b);case 5:t=e.sent,n=null===a||void 0===a?void 0:a.find((function(e){return Object(I.f)(e.address,t)})),X(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();b&&e()}),[b]),Object(z.jsx)(p.a,{onSubmit:function(e){Object(re.d)(ce.a.DETAILS.SAFE_NAME),k(Object(E.b)(Object(w.b)({address:b,name:e.safeName,chainId:o}))),k(Object(Z.b)({address:b,loadedViaUrl:!1}))},children:function(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(v.a,{className:a.formContainer,children:[Object(z.jsx)(C.a,{tag:"h2",children:"Contract Version"}),Object(z.jsx)(T.a,{align:"end",grow:!0,children:Object(z.jsxs)(le,{rel:"noreferrer noopener",target:"_blank",href:null===F||void 0===F?void 0:F.deployerRepoUrl,children:[Object(z.jsxs)(d.Text,{size:"xl",as:"span",color:"primary",children:[F?F.deployer===n.GNOSIS?f:"".concat(f,"-").concat(F.deployer):"",F&&F.deployer===n.GNOSIS&&h?" (there's a newer version: ".concat(r,")"):""]}),Object(z.jsx)(je,{size:"sm",type:"externalLink",color:"primary"})]})}),h&&t?Object(z.jsx)(T.a,{align:"end",grow:!0,children:Object(z.jsx)(N.a,{children:Object(z.jsx)(S.a,{className:a.saveBtn,color:"primary",onClick:W,size:"small",testId:oe,variant:"contained",children:"Update Safe"})})}):null]}),Object(z.jsxs)(v.a,{className:a.formContainer,children:[Object(z.jsx)(C.a,{tag:"h2",children:"Blockchain Network"}),Object(z.jsx)(ue,{children:Object(z.jsx)(te.a,{chainId:H})})]}),null!=A&&Object(z.jsxs)(v.a,{className:a.formContainer,children:[Object(z.jsx)(C.a,{tag:"h2",children:"Modify Safe Name"}),Object(z.jsx)(N.a,{children:"You can change the name of this Safe. This name is only stored locally and never shared with Gnosis or any third parties."}),Object(z.jsx)(v.a,{className:a.root,children:Object(z.jsx)(O.a,{component:_.a,defaultValue:A,name:"safeName",placeholder:"Safe name*",testId:se,label:"Safe name*",type:"text",validate:Object(x.d)(x.p,x.r)})})]}),Object(z.jsx)(T.a,{align:"end",className:a.controlsRow,grow:!0,children:Object(z.jsx)(y.a,{end:"xs",children:Object(z.jsx)(S.a,{className:a.saveBtn,color:"primary",size:"small",testId:ie,type:"submit",variant:"contained",children:"Save"})})}),Object(z.jsx)(m.c,{description:"Update Safe",handleClose:V,open:L,title:"Update Safe",children:Object(z.jsx)(P,{onClose:V,safeAddress:b,safeCurrentVersion:f})})]})}})}}}]);
//# sourceMappingURL=61.30e4e4c3.chunk.js.map