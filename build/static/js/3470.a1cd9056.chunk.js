"use strict";(self.webpackChunkcommonlands_web=self.webpackChunkcommonlands_web||[]).push([[3470],{11873:function(t,n,e){function r(){return[1,0,0,0,1,0,0,0,1]}function i(t,n,e,r,i,u,o,c,f){return[t,n,e,r,i,u,o,c,f]}function u(t,n){return new Float64Array(t,n,9)}e.d(n,{a:function(){return u},c:function(){return r},f:function(){return i}});Object.freeze(Object.defineProperty({__proto__:null,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:r,createView:u,fromValues:i},Symbol.toStringTag,{value:"Module"}))},81949:function(t,n,e){function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function u(t,n,e,r,i,u,o,c,f,a,s,h,l,v,g,_){return[t,n,e,r,i,u,o,c,f,a,s,h,l,v,g,_]}function o(t,n){return new Float64Array(t,n,16)}e.d(n,{I:function(){return c},a:function(){return o},b:function(){return i},c:function(){return r},f:function(){return u}});var c=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:c,clone:i,create:r,createView:o,fromValues:u},Symbol.toStringTag,{value:"Module"}))},98131:function(t,n,e){function r(){return[0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3]]}function u(t,n){return new Float64Array(t,n,4)}e.d(n,{I:function(){return o},a:function(){return r},b:function(){return i},c:function(){return u}});var o=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:i,create:r,createView:u,fromValues:function(t,n,e,r){return[t,n,e,r]}},Symbol.toStringTag,{value:"Module"}))},23470:function(t,n,e){e.d(n,{a:function(){return y},c:function(){return _},f:function(){return P},g:function(){return b},h:function(){return m},j:function(){return S},l:function(){return M},m:function(){return Z},w:function(){return d}});e(93169);var r=e(32718),i=e(16889),u=e(92026),o=e(14226),c=e(11186),f=e(71353),a=e(90045),s=e(67077),h=e(14320),l=e(40885),v=e(40927),g=e(11185);function _(){return(0,s.c)()}function m(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_();return(0,a.c)(n,t)}function d(t){return t}function M(t){t[0]=t[1]=t[2]=t[3]=0}function y(t){return t[3]}function b(t){return t}function P(t,n,e,r){return(0,s.f)(t,n,e,r)}function p(t,n,e){if((0,u.Wi)(n))return!1;var r=n.origin,i=n.direction,o=w;o[0]=r[0]-t[0],o[1]=r[1]-t[1],o[2]=r[2]-t[2];var c=i[0]*i[0]+i[1]*i[1]+i[2]*i[2];if(0===c)return!1;var f=2*(i[0]*o[0]+i[1]*o[1]+i[2]*o[2]),a=f*f-4*c*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-t[3]*t[3]);if(a<0)return!1;var s=Math.sqrt(a),h=(-f-s)/(2*c),l=(-f+s)/(2*c);return(h<0||l<h&&l>0)&&(h=l),!(h<0)&&(e&&(e[0]=r[0]+i[0]*h,e[1]=r[1]+i[1]*h,e[2]=r[2]+i[2]*h),!0)}var w=(0,f.c)();function S(t,n){return p(t,n,null)}function k(t,n,e){var r=g.WM.get(),i=g.MP.get();(0,c.f)(r,n.origin,n.direction);var u=y(t);(0,c.f)(e,r,n.origin),(0,c.g)(e,e,1/(0,c.l)(e)*u);var f=V(t,n.origin),a=(0,v.EU)(n.origin,e);return(0,o.d)(i,a+f,r),(0,c.m)(e,e,i),e}function B(t,n,e){var r=(0,c.b)(g.WM.get(),n,t),i=(0,c.g)(g.WM.get(),r,t[3]/(0,c.l)(r));return(0,c.a)(e,i,t)}function V(t,n){var e=(0,c.b)(g.WM.get(),n,t),r=(0,c.l)(e),u=y(t),o=u+Math.abs(u-r);return(0,i.ZF)(u/o)}var W=(0,f.c)();function j(t,n,e,r){var u=(0,c.b)(W,n,t);switch(e){case h.R.X:var o=(0,i.jE)(u,W)[2];return(0,c.s)(r,-Math.sin(o),Math.cos(o),0);case h.R.Y:var f=(0,i.jE)(u,W),a=f[1],s=f[2],l=Math.sin(a);return(0,c.s)(r,-l*Math.cos(s),-l*Math.sin(s),Math.cos(a));case h.R.Z:return(0,c.n)(r,u);default:return}}function R(t,n){var e=(0,c.b)(z,n,t);return(0,c.l)(e)-t[3]}function Z(t,n){var e=(0,c.d)(t,n),r=y(t);return e<=r*r}var z=(0,f.c)(),A=_();Object.freeze(Object.defineProperty({__proto__:null,altitudeAt:R,angleToSilhouette:V,axisAt:j,clear:M,closestPoint:function(t,n,e){return p(t,n,e)?e:((0,l.JI)(n,t,e),B(t,e,e))},closestPointOnSilhouette:k,containsPoint:Z,copy:m,create:_,distanceToSilhouette:function(t,n){var e=(0,c.b)(g.WM.get(),n,t),r=(0,c.p)(e),i=t[3]*t[3];return Math.sqrt(Math.abs(r-i))},elevate:function(t,n,e){return t!==e&&(0,c.c)(e,t),e[3]=t[3]+n,e},fromCenterAndRadius:function(t,n){return(0,s.f)(t[0],t[1],t[2],n)},fromRadius:function(t,n){return t[0]=t[1]=t[2]=0,t[3]=n,t},fromValues:P,getCenter:b,getRadius:y,intersectRay:p,intersectRayClosestSilhouette:function(t,n,e){if(p(t,n,e))return e;var r=k(t,n,g.WM.get());return(0,c.a)(e,n.origin,(0,c.g)(g.WM.get(),n.direction,(0,c.i)(n.origin,r)/(0,c.l)(n.direction))),e},intersectsRay:S,projectPoint:B,setAltitudeAt:function(t,n,e,r){var i=R(t,n),u=j(t,n,h.R.Z,z),o=(0,c.g)(z,u,e-i);return(0,c.a)(r,n,o)},setExtent:function(t,n,e){return r.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t===e?e:m(t,e)},tmpSphere:A,wrap:d},Symbol.toStringTag,{value:"Module"}))},21530:function(t,n,e){e.d(n,{x:function(){return o}});var r=e(15671),i=e(43144),u=e(70758),o=function(){function t(n){(0,r.Z)(this,t),this._allocator=n,this._items=[],this._itemsPtr=0,this._grow()}return(0,i.Z)(t,[{key:"get",value:function(){var t=this;return 0===this._itemsPtr&&(0,u.Y)((function(){return t._reset()})),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}},{key:"_reset",value:function(){var t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*c);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}},{key:"_grow",value:function(){for(var t=0;t<Math.max(8,Math.min(this._items.length,c));t++)this._items.push(this._allocator())}}]),t}(),c=1024},14320:function(t,n,e){var r;e.d(n,{R:function(){return r}}),function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"}(r||(r={}))},40885:function(t,n,e){e.d(n,{JG:function(){return s},JI:function(){return v},Jk:function(){return l},Ue:function(){return c},re:function(){return a},zk:function(){return h}});e(63780);var r=e(21530),i=e(11186),u=e(71353),o=e(11185);function c(t){return t?f((0,u.a)(t.origin),(0,u.a)(t.direction)):f((0,u.c)(),(0,u.c)())}function f(t,n){return{origin:t,direction:n}}function a(t,n){var e=g.get();return e.origin=t,e.direction=n,e}function s(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c();return function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return(0,i.c)(e.origin,t),(0,i.c)(e.direction,n),e}(t.origin,t.direction,n)}function h(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return(0,i.c)(e.origin,t),(0,i.b)(e.direction,n,t),e}function l(t,n){var e=(0,i.f)(o.WM.get(),(0,i.n)(o.WM.get(),t.direction),(0,i.b)(o.WM.get(),n,t.origin));return(0,i.e)(e,e)}function v(t,n,e){var r=(0,i.e)(t.direction,(0,i.b)(e,n,t.origin));return(0,i.a)(e,t.origin,(0,i.g)(e,t.direction,r)),e}var g=new r.x((function(){return c()}))},40927:function(t,n,e){e.d(n,{EU:function(){return f},SR:function(){return c},cp:function(){return a},nF:function(){return o}});var r=e(16889),i=e(11186),u=e(71353);function o(t,n,e){var r=(0,i.e)(t,n)/(0,i.e)(t,t);return(0,i.g)(e,t,r)}function c(t,n){return(0,i.e)(t,n)/(0,i.l)(t)}function f(t,n){var e=(0,i.e)(t,n)/((0,i.l)(t)*(0,i.l)(n));return-(0,r.ZF)(e)}function a(t,n,e){(0,i.n)(s,t),(0,i.n)(h,n);var u=(0,i.e)(s,h),o=(0,r.ZF)(u),c=(0,i.f)(s,s,h);return(0,i.e)(c,e)<0?2*Math.PI-o:o}var s=(0,u.c)(),h=(0,u.c)()},11185:function(t,n,e){e.d(n,{MP:function(){return M},vD:function(){return y},qW:function(){return _},WM:function(){return m},o6:function(){return d}});var r=e(15671),i=e(43144),u=e(59896),o=e(70758),c=e(11873),f=e(81949),a=e(98131),s=e(6394),h=e(71353),l=e(67077),v=function(){function t(n,e,i){(0,r.Z)(this,t),this._itemByteSize=n,this._itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(i/this._itemByteSize)}return(0,i.Z)(t,[{key:"get",value:function(){var t=this;0===this._itemsPtr&&(0,o.Y)((function(){return t._reset()}));for(var n=Math.floor(this._itemsPtr/this._itemsPerBuffer);this._buffers.length<=n;){for(var e=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize),r=0;r<this._itemsPerBuffer;++r)this._items.push(this._itemCreate(e,r*this._itemByteSize));this._buffers.push(e)}return this._items[this._itemsPtr++]}},{key:"_reset",value:function(){for(var t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}},{key:"test",get:function(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}],[{key:"createVec2f64",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return new t(16,s.c,n)}},{key:"createVec3f64",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return new t(24,h.b,n)}},{key:"createVec4f64",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return new t(32,l.a,n)}},{key:"createMat3f64",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return new t(72,c.a,n)}},{key:"createMat4f64",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return new t(128,f.a,n)}},{key:"createQuatf64",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return new t(32,a.c,n)}}]),t}(),g=4*u.Y8.KILOBYTES,_=v.createVec2f64(),m=v.createVec3f64(),d=v.createVec4f64(),M=(v.createMat3f64(),v.createMat4f64()),y=v.createQuatf64()}}]);
//# sourceMappingURL=3470.a1cd9056.chunk.js.map