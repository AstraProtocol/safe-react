(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[9],{2249:function(e,r,i){"use strict";i.r(r),i.d(r,"generateAddresses",(function(){return d})),i.d(r,"isValidPath",(function(){return f}));var n=i(140),t=i(2156),u=i.n(t),a=i(22),s=n.publicToAddress,c=n.toChecksumAddress;function d(e,r){var i=e.publicKey,n=e.chainCode,t=e.path,d=new u.a;d.publicKey=new a.Buffer(i,"hex"),d.chainCode=new a.Buffer(n,"hex");for(var f=[],o=r;o<5+r;o++){var h=d.deriveChild(o),p=s(h.publicKey,!0).toString("hex");f.push({dPath:"".concat(t,"/").concat(o),address:c("0x".concat(p))})}return f}function f(e){var r=e.split("/");if("m"!==r[0])return!1;if("44'"!==r[1])return!1;if(!["60'","1'","73799'","246'"].includes(r[2]))return!1;if(void 0===r[3]||"0'"===r[3])return!0;var i=Number(r[3].slice(0,-1));if(isNaN(i)||i<0||"'"!==r[3].slice(-1))return!1;if(void 0===r[4])return!0;var n=Number(r[4]);if(isNaN(n)||n<0)return!1;if(void 0===r[5])return!0;var t=Number(r[5]);return!(isNaN(t)||t<0)}}}]);
//# sourceMappingURL=9.e0bf35f7.chunk.js.map