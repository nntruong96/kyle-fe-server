"use strict";(self.webpackChunkcommonlands_web=self.webpackChunkcommonlands_web||[]).push([[8441],{59877:function(e,t,n){n.d(t,{p:function(){return p}});var a=n(29439),r=n(37762),i=n(74165),c=n(15861),u=n(15671),o=n(43144),s=(n(93169),n(16054)),f=n(77427),l=n(92026),h=n(66978),d=n(68860),v=n(88152);function p(){var e=arguments.length>1?arguments[1]:void 0;if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]){var t=e.elevationInfo,n=e.alignPointsInFeatures,a=e.spatialReference;return new g(t,n,a)}return new y}var y=function(){function e(){(0,u.Z)(this,e)}return(0,o.Z)(e,[{key:"alignCandidates",value:function(){var e=(0,c.Z)((0,i.Z)().mark((function e(t,n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"notifyElevationSourceChange",value:function(){}}]),e}(),g=function(){function e(t,n,a){(0,u.Z)(this,e),this._elevationInfo=t,this._alignPointsInFeatures=n,this.spatialReference=a,this._alignmentsCache=new s.Z(1024),this._cacheVersion=0,this._metersPerVerticalUnit=(0,d._R)(a)}return(0,o.Z)(e,[{key:"alignCandidates",value:function(){var e=(0,c.Z)((0,i.Z)().mark((function e(t,n){var a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this._elevationInfo,e.abrupt("return",(0,l.pC)(a)&&"absolute-height"===a.mode&&!a.featureExpressionInfo?(this._alignAbsoluteElevationCandidates(t,a),t):this._alignComputedElevationCandidates(t,n));case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"notifyElevationSourceChange",value:function(){this._alignmentsCache.clear(),this._cacheVersion++}},{key:"_alignAbsoluteElevationCandidates",value:function(e,t){var n=t.offset,a=t.unit;if(!(0,l.Wi)(n)){var i,c=n*((0,v.Z7)(null!==a&&void 0!==a?a:"meters")/this._metersPerVerticalUnit),u=(0,r.Z)(e);try{for(u.s();!(i=u.n()).done;){var o=i.value;switch(o.type){case"edge":o.start.z+=c,o.end.z+=c;continue;case"vertex":o.target.z+=c;continue}}}catch(s){u.e(s)}finally{u.f()}}}},{key:"_alignComputedElevationCandidates",value:function(){var e=(0,c.Z)((0,i.Z)().mark((function e(t,n){var c,u,o,s,l,d,v,p,y,g,Z,_,b,k,x,m,w;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=new Map,u=(0,r.Z)(t);try{for(u.s();!(o=u.n()).done;)s=o.value,(0,f.s1)(c,s.objectId,C).push(s)}catch(i){u.e(i)}finally{u.f()}return l=this._prepareQuery(c),d=(0,a.Z)(l,3),v=d[0],p=d[1],y=d[2],e.next=10,this._alignPointsInFeatures(v,n);case 10:if(g=e.sent,(0,h.k_)(n),y===this._cacheVersion){e.next=14;break}return e.abrupt("return",this._alignComputedElevationCandidates(t,n));case 14:this._applyCacheAndResponse(v,g,p),Z=g.drapedObjectIds,_=g.failedObjectIds,b=[],k=(0,r.Z)(t);try{for(k.s();!(x=k.n()).done;)m=x.value,w=m.objectId,Z.has(w)&&"edge"===m.type&&(m.draped=!0),_.has(w)||b.push(m)}catch(i){k.e(i)}finally{k.f()}return e.abrupt("return",b);case 19:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_prepareQuery",value:function(e){var t,n=[],i=[],c=(0,r.Z)(e);try{for(c.s();!(t=c.n()).done;){var u,o=(0,a.Z)(t.value,2),s=o[0],f=o[1],l=[],h=(0,r.Z)(f);try{for(h.s();!(u=h.n()).done;){var d=u.value;this._addToQueriesOrCachedResult(s,d.target,l,i),"edge"===d.type&&(this._addToQueriesOrCachedResult(s,d.start,l,i),this._addToQueriesOrCachedResult(s,d.end,l,i))}}catch(v){h.e(v)}finally{h.f()}0!==l.length&&n.push({objectId:s,points:l})}}catch(v){c.e(v)}finally{c.f()}return[n,i,this._cacheVersion]}},{key:"_addToQueriesOrCachedResult",value:function(e,t,n,a){var r=_(e,t),i=this._alignmentsCache.get(r);(0,l.pC)(i)?a.push(new Z(t,i)):n.push(t)}},{key:"_applyCacheAndResponse",value:function(e,t,n){var a,i=t.elevations,c=t.drapedObjectIds,u=t.failedObjectIds,o=(0,r.Z)(n);try{for(o.s();!(a=o.n()).done;){a.value.apply()}}catch(x){o.e(x)}finally{o.f()}var s,f=0,l=this._alignmentsCache,h=(0,r.Z)(e);try{for(h.s();!(s=h.n()).done;){var d=s.value,v=d.objectId,p=d.points;if(u.has(v))f+=p.length;else{var y,g=!c.has(v),Z=(0,r.Z)(p);try{for(Z.s();!(y=Z.n()).done;){var C=y.value,b=_(v,C),k=i[f++];C.z=k,g&&l.put(b,k,1)}}catch(x){Z.e(x)}finally{Z.f()}}}}catch(x){h.e(x)}finally{h.f()}}}]),e}(),Z=function(){function e(t,n){(0,u.Z)(this,e),this.point=t,this.z=n}return(0,o.Z)(e,[{key:"apply",value:function(){this.point.z=this.z}}]),e}();function _(e,t){var n=t.x,a=t.y,r=t.z;return"".concat(e,"-").concat(n,"-").concat(a,"-").concat(null!==r&&void 0!==r?r:0,"}")}function C(){return[]}},53580:function(e,t,n){n.d(t,{c:function(){return s}});var a=n(37762),r=n(15671),i=n(43144),c=(n(93169),function(){function e(){(0,r.Z)(this,e)}return(0,i.Z)(e,[{key:"filter",value:function(e,t){return t}},{key:"notifyElevationSourceChange",value:function(){}}]),e}()),u=function(){function e(){(0,r.Z)(this,e)}return(0,i.Z)(e,[{key:"filter",value:function(e,t){var n=e.point,a=e.distance;if(null==n.z)return t;if(0===t.length)return t;var r=function(e){return"number"==typeof e?{x:e,y:e,z:e}:e}(a),i=this._updateCandidatesTo3D(t,n,r).filter(o);return i.sort(h),i}},{key:"_updateCandidatesTo3D",value:function(e,t,n){var r,i=(0,a.Z)(e);try{for(i.s();!(r=i.n()).done;){var c=r.value;switch(c.type){case"edge":f(c,t,n);continue;case"vertex":l(c,t,n);continue}}}catch(u){i.e(u)}finally{i.f()}return e}}]),e}();function o(e){return e.distance<=1}function s(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?new u:new c}function f(e,t,n){var a=n.x,r=n.y,i=n.z,c=e.start,u=e.end,o=e.target;e.draped||function(e,t,n,a){var r=a.x-n.x,i=a.y-n.y,c=a.z-n.z,u=r*r+i*i+c*c,o=(t.x-n.x)*r+(t.y-n.y)*i+c*(t.z-n.z),s=Math.min(1,Math.max(0,o/u)),f=n.x+r*s,l=n.y+i*s,h=n.z+c*s;e.x=f,e.y=l,e.z=h}(o,t,c,u);var s=(t.x-o.x)/a,f=(t.y-o.y)/r,l=(t.z-o.z)/i;e.distance=Math.sqrt(s*s+f*f+l*l)}function l(e,t,n){var a=n.x,r=n.y,i=n.z,c=e.target,u=(t.x-c.x)/a,o=(t.y-c.y)/r,s=(t.z-c.z)/i,f=Math.sqrt(u*u+o*o+s*s);e.distance=f}function h(e,t){return e.distance-t.distance}},48817:function(e,t,n){n.d(t,{k:function(){return h}});var a=n(37762),r=n(74165),i=n(15861),c=n(15671),u=n(43144),o=(n(93169),n(84652)),s=n(16054),f=n(66978),l=n(643);function h(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?new v(arguments.length>1?arguments[1]:void 0):new d}var d=function(){function e(){(0,c.Z)(this,e)}return(0,u.Z)(e,[{key:"fetch",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"notifySymbologyChange",value:function(){}}]),e}(),v=function(){function e(t){(0,c.Z)(this,e),this._getSymbologyCandidates=t,this._candidatesCache=new s.Z(1024),this._cacheVersion=0}return(0,u.Z)(e,[{key:"fetch",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){var i,c,u,s,l,h,d,v,y,g,Z,_,C,b,k,x,m,w,z,I,j;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return",[]);case 2:i=[],c=[],u=this._candidatesCache,s=(0,a.Z)(t);try{for(s.s();!(l=s.n()).done;)if(h=l.value,d=p(h),v=u.get(d)){y=(0,a.Z)(v);try{for(y.s();!(g=y.n()).done;)Z=g.value,c.push((0,o.d9)(Z))}catch(r){y.e(r)}finally{y.f()}}else i.push(h),u.put(d,[],1)}catch(r){s.e(r)}finally{s.f()}if(0!==i.length){e.next=7;break}return e.abrupt("return",c);case 7:return _=this._cacheVersion,e.next=10,this._getSymbologyCandidates(i,n);case 10:if(C=e.sent,b=C.candidates,k=C.sourceCandidateIndices,(0,f.k_)(n),_===this._cacheVersion){e.next=16;break}return e.abrupt("return",this.fetch(t,n));case 16:for(x=[],m=b.length,w=0;w<m;++w)z=b[w],I=p(i[k[w]]),(j=u.get(I)).push(z),u.put(I,j,j.length),x.push((0,o.d9)(z));return e.abrupt("return",c.concat(x));case 19:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"notifySymbologyChange",value:function(){this._candidatesCache.clear(),this._cacheVersion++}}]),e}();function p(e){switch(e.type){case"vertex":var t,n=e.objectId,a=e.target,r="".concat(n,"-vertex-").concat(a.x,"-").concat(a.y,"-").concat(null!==(t=a.z)&&void 0!==t?t:0);return(0,l.hP)(r).toString();case"edge":var i,c,u=e.objectId,o=e.start,s=e.end,f="".concat(u,"-edge-").concat(o.x,"-").concat(o.y,"-").concat(null!==(i=o.z)&&void 0!==i?i:0,"-to-").concat(s.x,"-").concat(s.y,"-").concat(null!==(c=s.z)&&void 0!==c?c:0);return(0,l.hP)(f).toString();default:return""}}}}]);
//# sourceMappingURL=8441.d0554738.chunk.js.map