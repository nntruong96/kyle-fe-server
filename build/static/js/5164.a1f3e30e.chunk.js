"use strict";(self.webpackChunkcommonlands_web=self.webpackChunkcommonlands_web||[]).push([[5164],{85164:function(e,a,r){r.r(a),r.d(a,{createSymbolSchema:function(){return i}});var t=r(1413),n=r(80613),l=r(54815);function s(e){var a;return"line-marker"===e.type?{type:"line-marker",color:null===(a=e.color)||void 0===a?void 0:a.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function o(e){return(0,l.hF)(e)}function i(e,a){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return function(e,a,r){var i=(0,l.jj)(n.LW.FILL,a),c=r?o(i):i,u=e.clone(),h=u.outline,m=(0,l.jy)(a.symbologyType);m||(u.outline=null);var y=(0,t.Z)({materialKey:c,hash:u.hash()},s(u));if(m)return y;var p=[];if(p.push(y),h){var f=(0,l.jj)(n.LW.LINE,(0,t.Z)((0,t.Z)({},a),{},{isOutline:!0})),v=(0,t.Z)({materialKey:r?o(f):f,hash:h.hash()},s(h));p.push(v)}return{type:"composite-symbol",layers:p,hash:p.reduce((function(e,a){return a.hash+e}),"")}}(e,a,r);case"simple-marker":case"picture-marker":return function(e,a,r){var i=(0,l.jj)(n.LW.MARKER,a),c=r?o(i):i,u=s(e);return(0,t.Z)((0,t.Z)({materialKey:c,hash:e.hash()},u),{},{angle:e.angle,maxVVSize:a.maxVVSize})}(e,a,r);case"simple-line":return function(e,a,r){var i=(0,l.jy)(a.symbologyType)?n.mD.DEFAULT:a.symbologyType,c=(0,l.jj)(n.LW.LINE,(0,t.Z)((0,t.Z)({},a),{},{symbologyType:i})),u=r?o(c):c,h=e.clone(),m=h.marker;h.marker=null;var y=[];if(y.push((0,t.Z)({materialKey:u,hash:h.hash()},s(h))),m){var p,f=(0,l.jj)(n.LW.MARKER,a),v=r?o(f):f;m.color=null!==(p=m.color)&&void 0!==p?p:h.color,y.push((0,t.Z)({materialKey:v,hash:m.hash(),lineWidth:h.width},s(m)))}return{type:"composite-symbol",layers:y,hash:y.reduce((function(e,a){return a.hash+e}),"")}}(e,a,r);case"text":return function(e,a,r){var i=(0,l.jj)(n.LW.TEXT,a),c=r?o(i):i,u=s(e);return(0,t.Z)((0,t.Z)({materialKey:c,hash:e.hash()},u),{},{angle:e.angle,maxVVSize:a.maxVVSize})}(e,a,r);case"label":return function(e,a,r){var s=e.toJSON(),i=(0,l.jj)(n.LW.LABEL,(0,t.Z)((0,t.Z)({},a),{},{placement:s.labelPlacement}));return(0,t.Z)((0,t.Z)({materialKey:r?o(i):i,hash:e.hash()},s),{},{labelPlacement:s.labelPlacement})}(e,a,r);case"cim":return{type:"cim",rendererKey:a.vvFlags,data:e.data,maxVVSize:a.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:a.vvFlags,data:e,maxVVSize:a.maxVVSize};case"web-style":return(0,t.Z)((0,t.Z)({},s(e)),{},{type:"web-style",hash:e.hash(),rendererKey:a.vvFlags,maxVVSize:a.maxVVSize});default:throw new Error("symbol not supported ".concat(e.type))}}}}]);
//# sourceMappingURL=5164.a1f3e30e.chunk.js.map