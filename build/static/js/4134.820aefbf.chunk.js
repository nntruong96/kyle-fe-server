"use strict";(self.webpackChunkcommonlands_web=self.webpackChunkcommonlands_web||[]).push([[4134],{82218:function(e,t,n){n.d(t,{a:function(){return m},c:function(){return k},g:function(){return C},h:function(){return x},u:function(){return I}});var r=n(37762),i=n(43144),a=n(15671),o=(n(93169),n(32718)),s=n(16889),u=n(21530),l=n(14226),c=n(81949),d=n(11186),f=n(71353),v=n(14320),p=n(85981),h=n(55652),g=n(40885),y=n(40927),b=n(11185),_=o.Z.getLogger("esri.views.3d.support.geometryUtils.boundedPlane"),w=(0,i.Z)((function e(){(0,a.Z)(this,e),this.plane=(0,h.Ue)(),this.origin=(0,f.c)(),this.basis1=(0,f.c)(),this.basis2=(0,f.c)()}));function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;return{plane:(0,h.Ue)(e.plane),origin:(0,f.a)(e.origin),basis1:(0,f.a)(e.basis1),basis2:(0,f.a)(e.basis2)}}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m();return Z(e.origin,e.basis1,e.basis2,t)}function Z(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:m();return(0,d.c)(r.origin,e),(0,d.c)(r.basis1,t),(0,d.c)(r.basis2,n),I(r),function(e,t){Math.abs((0,d.e)(e.basis1,e.basis2)/((0,d.l)(e.basis1)*(0,d.l)(e.basis2)))>1e-6&&_.warn(t,"Provided basis vectors are not perpendicular"),Math.abs((0,d.e)(e.basis1,N(e)))>1e-6&&_.warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,d.e)(N(e),e.origin)-e.plane[3])>1e-6&&_.warn(t,"Plane offset is not consistent with plane origin")}(r,"fromValues()"),r}function I(e){(0,h.my)(e.basis2,e.basis1,e.origin,e.plane)}function S(e,t,n){e!==n&&k(e,n);var r=(0,d.g)(b.WM.get(),N(e),t);return(0,d.a)(n.origin,n.origin,r),n.plane[3]-=t,n}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m(),n=(e[2]-e[0])/2,r=(e[3]-e[1])/2;return(0,d.s)(t.origin,e[0]+n,e[1]+r,0),(0,d.s)(t.basis1,n,0,0),(0,d.s)(t.basis2,0,r,0),(0,h.al)(0,0,1,0,t.plane),t}function O(e,t,n){return!!(0,h.BR)(e.plane,t,n)&&W(e,n)}function M(e,t,n){var i=L.get();z(e,t,i,L.get());var a,o=Number.POSITIVE_INFINITY,u=(0,r.Z)(B);try{for(u.s();!(a=u.n()).done;){var l=A(e,a.value,U.get()),c=b.WM.get();if((0,h.rx)(i,l,c)){var f=(0,d.r)(b.WM.get(),t.origin,c),v=Math.abs((0,s.ZF)((0,d.e)(t.direction,f)));v<o&&(o=v,(0,d.c)(n,c))}}}catch(p){u.e(p)}finally{u.f()}return o===Number.POSITIVE_INFINITY?P(e,t,n):n}function P(e,t,n){if(O(e,t,n))return n;var i=L.get(),a=L.get();z(e,t,i,a);var o,s=Number.POSITIVE_INFINITY,u=(0,r.Z)(B);try{for(u.s();!(o=u.n()).done;){var l=A(e,o.value,U.get()),c=b.WM.get();if((0,h.dZ)(i,l,c)){var f=(0,g.Jk)(t,c);if(!(0,h.Ac)(a,c))continue;f<s&&(s=f,(0,d.c)(n,c))}}}catch(v){u.e(v)}finally{u.f()}return T(e,t.origin)<s&&H(e,t.origin,n),n}function H(e,t,n){var r=(0,h.nF)(e.plane,t,b.WM.get()),i=(0,p.ct)(F(e,e.basis1),r,-1,1,b.WM.get()),a=(0,p.ct)(F(e,e.basis2),r,-1,1,b.WM.get());return(0,d.b)(n,(0,d.a)(b.WM.get(),i,a),e.origin),n}function E(e,t,n){var r=e.origin,i=e.basis1,a=e.basis2,o=(0,d.b)(b.WM.get(),t,r),s=(0,y.SR)(i,o),u=(0,y.SR)(a,o),l=(0,y.SR)(N(e),o);return(0,d.s)(n,s,u,l)}function T(e,t){var n=E(e,t,b.WM.get()),r=e.basis1,i=e.basis2,a=(0,d.l)(r),o=(0,d.l)(i),s=Math.max(Math.abs(n[0])-a,0),u=Math.max(Math.abs(n[1])-o,0),l=n[2];return s*s+u*u+l*l}function x(e,t){return Math.sqrt(T(e,t))}function R(e,t){var n=-e.plane[3];return(0,y.SR)(N(e),t)-n}function N(e){return(0,h.mJ)(e.plane)}function W(e,t){var n=(0,d.b)(b.WM.get(),t,e.origin),r=(0,d.p)(e.basis1),i=(0,d.p)(e.basis2),a=(0,d.e)(e.basis1,n),o=(0,d.e)(e.basis2,n);return-a-r<0&&a-r<0&&-o-i<0&&o-i<0}function F(e,t){var n=U.get();return(0,d.c)(n.origin,e.origin),(0,d.c)(n.vector,t),n}function A(e,t,n){var r=e.basis1,i=e.basis2,a=e.origin,o=(0,d.g)(b.WM.get(),r,t.origin[0]),s=(0,d.g)(b.WM.get(),i,t.origin[1]);(0,d.a)(n.origin,o,s),(0,d.a)(n.origin,n.origin,a);var u=(0,d.g)(b.WM.get(),r,t.direction[0]),l=(0,d.g)(b.WM.get(),i,t.direction[1]);return(0,d.g)(n.vector,(0,d.a)(u,u,l),2),n}function z(e,t,n,r){var i=N(e);(0,h.my)(i,t.direction,t.origin,n),(0,h.my)((0,h.mJ)(n),i,t.origin,r)}var j={plane:(0,h.Ue)(),origin:(0,f.f)(0,0,0),basis1:(0,f.f)(1,0,0),basis2:(0,f.f)(0,1,0)},L=new u.x(h.Ue),U=new u.x(p.Ue),V=(0,f.c)(),J=new u.x((function(){return m()})),B=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],D=(0,c.c)(),Y=(0,c.c)();Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:w,UP:j,altitudeAt:R,axisAt:function(e,t,n,r){return function(e,t,n){switch(t){case v.R.X:(0,d.c)(n,e.basis1),(0,d.n)(n,n);break;case v.R.Y:(0,d.c)(n,e.basis2),(0,d.n)(n,n);break;case v.R.Z:(0,d.c)(n,N(e))}return n}(e,n,r)},closestPoint:P,closestPointOnSilhouette:M,copy:k,copyWithoutVerify:function(e,t){(0,d.c)(t.origin,e.origin),(0,d.c)(t.basis1,e.basis1),(0,d.c)(t.basis2,e.basis2),(0,h.JG)(t.plane,e.plane)},create:m,distance:x,distance2:T,distanceToSilhouette:function(e,t){var n,i=Number.NEGATIVE_INFINITY,a=(0,r.Z)(B);try{for(a.s();!(n=a.n()).done;){var o=A(e,n.value,U.get()),s=(0,p.Jk)(o,t);s>i&&(i=s)}}catch(u){a.e(u)}finally{a.f()}return Math.sqrt(i)},elevate:S,equals:function(e,t){return(0,d.k)(e.basis1,t.basis1)&&(0,d.k)(e.basis2,t.basis2)&&(0,d.k)(e.origin,t.origin)},extrusionContainsPoint:function(e,t){return(0,h.Ac)(e.plane,t)&&W(e,t)},fromAABoundingRect:C,fromValues:Z,intersectRay:O,intersectRayClosestSilhouette:function(e,t,n){if(O(e,t,n))return n;var r=M(e,t,b.WM.get());return(0,d.a)(n,t.origin,(0,d.g)(b.WM.get(),t.direction,(0,d.i)(t.origin,r)/(0,d.l)(t.direction))),n},normal:N,projectPoint:H,projectPointLocal:E,rotate:function(e,t,n,r){return e!==r&&k(e,r),(0,l.d)(Y,t,n),(0,d.m)(r.basis1,e.basis1,Y),(0,d.m)(r.basis2,e.basis2,Y),I(r),r},setAltitudeAt:function(e,t,n,r){var i=R(e,t),a=(0,d.g)(V,N(e),n-i);return(0,d.a)(r,t,a),r},setExtent:function(e,t,n){return C(t,n),S(n,R(e,e.origin),n),n},transform:function(e,t,n){return e!==n&&k(e,n),(0,l.a)(D,t),(0,l.t)(D,D),(0,d.m)(n.basis1,e.basis1,D),(0,d.m)(n.basis2,e.basis2,D),(0,d.m)((0,h.mJ)(n.plane),(0,h.mJ)(e.plane),D),(0,d.m)(n.origin,e.origin,t),(0,h.T5)(n.plane,n.plane,n.origin),n},updateUnboundedPlane:I,wrap:function(e,t,n){var r=J.get();return r.origin=e,r.basis1=t,r.basis2=n,r.plane=(0,h.re)(0,0,0,0),I(r),r}},Symbol.toStringTag,{value:"Module"}))},46798:function(e,t,n){n.d(t,{q:function(){return v}});var r=n(37762),i=n(1413),a=n(15671),o=n(43144),s=n(63780),u=n(42537),l=n(32718),c=n(92026),d=n(66978),f=n(31009),v=function(){function e(t,n,o,s){var u=this,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};(0,a.Z)(this,e),this._mainMethod=n,this._transferLists=o,this._listeners=[],this._promise=(0,f.bA)(t,(0,i.Z)((0,i.Z)({},c),{},{schedule:s})).then((function(e){if(void 0===u._thread){u._thread=e,u._promise=null,c.hasInitialize&&u.broadcast({},"initialize");var t,n=(0,r.Z)(u._listeners);try{for(n.s();!(t=n.n()).done;){var i=t.value;u._connectListener(i)}}catch(a){n.e(a)}finally{n.f()}}else e.close()})),this._promise.catch((function(e){return l.Z.getLogger("esri.core.workers.WorkerHandle").error("Failed to initialize ".concat(t," worker: ").concat(e))}))}return(0,o.Z)(e,[{key:"on",value:function(e,t){var n=this,r={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(r),this._connectListener(r),(0,u.kB)((function(){r.removed=!0,(0,s.Od)(n._listeners,r),n._thread&&(0,c.pC)(r.threadHandle)&&r.threadHandle.remove()}))}},{key:"destroy",value:function(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}},{key:"invoke",value:function(e,t){return this.invokeMethod(this._mainMethod,e,t)}},{key:"invokeMethod",value:function(e,t,n){var r=this;if(this._thread){var i=this._transferLists[e],a=i?i(t):[];return this._thread.invoke(e,t,{transferList:a,signal:n})}return this._promise?this._promise.then((function(){return(0,d.k_)(n),r.invokeMethod(e,t,n)})):Promise.reject(null)}},{key:"broadcast",value:function(e,t){var n=this;return this._thread?Promise.all(this._thread.broadcast(t,e)).then((function(){})):this._promise?this._promise.then((function(){return n.broadcast(e,t)})):Promise.reject()}},{key:"promise",get:function(){return this._promise}},{key:"_connectListener",value:function(e){this._thread&&this._thread.on(e.eventName,e.callback).then((function(t){e.removed||(e.threadHandle=t)}))}}]),e}()},85981:function(e,t,n){n.d(t,{AR:function(){return y},Gr:function(){return g},JG:function(){return l},Jk:function(){return f},KU:function(){return p},Ue:function(){return u},al:function(){return c},ct:function(){return h},nF:function(){return v},zk:function(){return d}});var r=n(16889),i=n(21530),a=n(11186),o=n(71353),s=n(11185);function u(e){return e?{origin:(0,o.a)(e.origin),vector:(0,o.a)(e.vector)}:{origin:(0,o.c)(),vector:(0,o.c)()}}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u();return c(e.origin,e.vector,t)}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u();return(0,a.c)(n.origin,e),(0,a.c)(n.vector,t),n}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u();return(0,a.c)(n.origin,e),(0,a.b)(n.vector,t,e),n}function f(e,t){var n=(0,a.b)(s.WM.get(),t,e.origin),i=(0,a.e)(e.vector,n),o=(0,a.e)(e.vector,e.vector),u=(0,r.uZ)(i/o,0,1),l=(0,a.b)(s.WM.get(),(0,a.g)(s.WM.get(),e.vector,u),n);return(0,a.e)(l,l)}function v(e,t,n){return h(e,t,0,1,n)}function p(e,t,n){return(0,a.a)(n,e.origin,(0,a.g)(n,e.vector,t))}function h(e,t,n,i,o){var u=e.vector,l=e.origin,c=(0,a.b)(s.WM.get(),t,l),d=(0,a.e)(u,c)/(0,a.p)(u);return(0,a.g)(o,u,(0,r.uZ)(d,n,i)),(0,a.a)(o,o,e.origin)}function g(e,t){if(b(e,function(e,t){var n=w.get();return n.origin=e,n.vector=t,n}(t.origin,t.direction),!1,_)){var n=_.tA,r=_.pB,i=_.distance2;if(n>=0&&n<=1)return i;if(n<0)return(0,a.d)(e.origin,r);if(n>1)return(0,a.d)((0,a.a)(s.WM.get(),e.origin,e.vector),r)}return null}function y(e,t,n){return!!b(e,t,!0,_)&&((0,a.c)(n,_.pA),!0)}function b(e,t,n,i){var o=1e-6,u=e.origin,l=(0,a.a)(s.WM.get(),u,e.vector),c=t.origin,d=(0,a.a)(s.WM.get(),c,t.vector),f=s.WM.get(),v=s.WM.get();if(f[0]=u[0]-c[0],f[1]=u[1]-c[1],f[2]=u[2]-c[2],v[0]=d[0]-c[0],v[1]=d[1]-c[1],v[2]=d[2]-c[2],Math.abs(v[0])<o&&Math.abs(v[1])<o&&Math.abs(v[2])<o)return!1;var p=s.WM.get();if(p[0]=l[0]-u[0],p[1]=l[1]-u[1],p[2]=l[2]-u[2],Math.abs(p[0])<o&&Math.abs(p[1])<o&&Math.abs(p[2])<o)return!1;var h=f[0]*v[0]+f[1]*v[1]+f[2]*v[2],g=v[0]*p[0]+v[1]*p[1]+v[2]*p[2],y=f[0]*p[0]+f[1]*p[1]+f[2]*p[2],b=v[0]*v[0]+v[1]*v[1]+v[2]*v[2],_=(p[0]*p[0]+p[1]*p[1]+p[2]*p[2])*b-g*g;if(Math.abs(_)<o)return!1;var w=(h*g-y*b)/_,m=(h+g*w)/b;n&&(w=(0,r.uZ)(w,0,1),m=(0,r.uZ)(m,0,1));var k=s.WM.get(),Z=s.WM.get();return k[0]=u[0]+w*p[0],k[1]=u[1]+w*p[1],k[2]=u[2]+w*p[2],Z[0]=c[0]+m*v[0],Z[1]=c[1]+m*v[1],Z[2]=c[2]+m*v[2],i.tA=w,i.tB=m,i.pA=k,i.pB=Z,i.distance2=(0,a.d)(k,Z),!0}var _={tA:0,tB:0,pA:(0,o.c)(),pB:(0,o.c)(),distance2:0},w=new i.x((function(){return u()}))},36700:function(e,t,n){n.d(t,{x:function(){return d}});var r=n(1413),i=n(15671),a=n(43144),o=n(60136),s=n(29388),u=n(95122),l=n(75691),c=n(61309),d=function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(e){return(0,i.Z)(this,n),t.call(this,(0,r.Z)((0,r.Z)({},e),{},{constraint:new u.Hk(e.targetPoint)}))}return(0,a.Z)(n,[{key:"hints",get:function(){return[new c.n(this.targetPoint,this.isDraped,this.domain)]}}]),n}(l.a)},84134:function(e,t,n){n.r(t),n.d(t,{FeatureServiceSnappingSource:function(){return se}});var r=n(1413),i=n(74165),a=n(15861),o=n(15671),s=n(43144),u=n(60136),l=n(29388),c=n(27366),d=n(85015),f=n(41691),v=n(42537),p=n(92026),h=n(66978),g=n(94172),y=n(49861),b=(n(25243),n(63780),n(69912)),_=n(93963),w=n(74509),m=n(37762),k=n(87960),Z=n(11186),I=n(67077),S=n(82218);function C(e,t){return(0,S.g)(t.extent,O),(0,S.h)(O,(0,Z.s)(M,e.x,e.y,0))}var O=(0,S.a)(),M=(0,I.c)(),P=n(69787),H=function(e){(0,u.Z)(n,e);var t=(0,l.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).pointOfInterest=null,r}return(0,s.Z)(n,[{key:"tiles",get:function(){var e=this.tilesCoveringView,t=(0,p.pC)(this.pointOfInterest)?this.pointOfInterest:this.view.center;return e.sort((function(e,n){return C(t,e)-C(t,n)})),e}},{key:"_scaleEnabled",value:function(){return(0,P.rs)(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}},{key:"tilesCoveringView",get:function(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||(0,p.Wi)(this.tileInfo))return[];if(!this._scaleEnabled)return[];var e,t=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),n=t.spans,r=t.lodInfo,i=r.level,a=[],o=(0,m.Z)(n);try{for(o.s();!(e=o.n()).done;)for(var s=e.value,u=s.row,l=s.colFrom,c=s.colTo,d=l;d<=c;d++){var f=r.normalizeCol(d),v=new k.f(null,i,u,f);this.tileInfo.updateTileInfo(v),a.push(v)}}catch(h){o.e(h)}finally{o.f()}return a}},{key:"tileInfo",get:function(){var e,t;return null!==(e=null===(t=this.view.featuresTilingScheme)||void 0===t?void 0:t.tileInfo)&&void 0!==e?e:null}},{key:"tileSize",get:function(){return(0,p.pC)(this.tileInfo)?this.tileInfo.size[0]:256}},{key:"initialize",value:function(){var e=this;this.addHandles((0,g.YP)((function(){var t,n;return null===(t=e.view)||void 0===t||null===(n=t.state)||void 0===n?void 0:n.viewpoint}),(function(){return e.notifyChange("tilesCoveringView")}),g.Z_))}}]),n}(d.Z);(0,c._)([(0,y.Cb)({readOnly:!0})],H.prototype,"tiles",null),(0,c._)([(0,y.Cb)({readOnly:!0})],H.prototype,"_scaleEnabled",null),(0,c._)([(0,y.Cb)({readOnly:!0})],H.prototype,"tilesCoveringView",null),(0,c._)([(0,y.Cb)({readOnly:!0})],H.prototype,"tileInfo",null),(0,c._)([(0,y.Cb)({readOnly:!0})],H.prototype,"tileSize",null),(0,c._)([(0,y.Cb)({constructOnly:!0})],H.prototype,"view",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],H.prototype,"layer",void 0),(0,c._)([(0,y.Cb)()],H.prototype,"pointOfInterest",void 0),H=(0,c._)([(0,b.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],H);var E,T=n(29439),x=n(65156);!function(e){e[e.INVISIBLE=0]="INVISIBLE",e[e.VISIBLE_WHEN_EXTENDED=1]="VISIBLE_WHEN_EXTENDED",e[e.VISIBLE_ON_SURFACE=2]="VISIBLE_ON_SURFACE"}(E||(E={}));var R=function(e){(0,u.Z)(n,e);var t=(0,l.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).pointOfInterest=null,r}return(0,s.Z)(n,[{key:"tiles",get:function(){var e=this.tilesCoveringView,t=this._effectivePointOfInterest;if((0,p.pC)(t))for(var n=e.map((function(e){return C(t,e)})),r=1;r<n.length;r++)if(n[r-1]>n[r])return e.sort((function(e,n){return C(t,e)-C(t,n)})),e.slice();return e}},{key:"tilesCoveringView",get:function(){var e,t;return this._filterTiles(null===(e=this.view.featureTiles)||void 0===e||null===(t=e.tiles)||void 0===t?void 0:t.toArray()).map(N)}},{key:"tileInfo",get:function(){var e,t;return null!==(e=null===(t=this.view.featureTiles)||void 0===t?void 0:t.tilingScheme.toTileInfo())&&void 0!==e?e:null}},{key:"tileSize",get:function(){var e,t;return null!==(e=null===(t=this.view.featureTiles)||void 0===t?void 0:t.tileSize)&&void 0!==e?e:256}},{key:"_effectivePointOfInterest",get:function(){var e,t=this.pointOfInterest;return(0,p.pC)(t)?t:null===(e=this.view.pointsOfInterest)||void 0===e?void 0:e.focus.location}},{key:"initialize",value:function(){var e=this;this.handles.add((0,g.YP)((function(){return e.view.featureTiles}),(function(t){e.handles.remove(F),t&&e.handles.add(t.addClient(),F)}),g.nn))}},{key:"_filterTiles",value:function(e){return(0,p.Wi)(e)?[]:e.filter((function(e){return Math.abs(e.measures.screenRect[3]-e.measures.screenRect[1])>W&&e.measures.visibility===E.VISIBLE_ON_SURFACE}))}}]),n}(f.r);function N(e){var t=(0,T.Z)(e.lij,3),n=t[0],r=t[1],i=t[2],a=e.extent;return new k.f("".concat(n,"/").concat(r,"/").concat(i),n,r,i,a)}(0,c._)([(0,y.Cb)({readOnly:!0})],R.prototype,"tiles",null),(0,c._)([(0,y.Cb)({readOnly:!0})],R.prototype,"tilesCoveringView",null),(0,c._)([(0,y.Cb)({readOnly:!0})],R.prototype,"tileInfo",null),(0,c._)([(0,y.Cb)({readOnly:!0})],R.prototype,"tileSize",null),(0,c._)([(0,y.Cb)({constructOnly:!0})],R.prototype,"view",void 0),(0,c._)([(0,y.Cb)()],R.prototype,"pointOfInterest",void 0),(0,c._)([(0,y.Cb)()],R.prototype,"_effectivePointOfInterest",null),R=(0,c._)([(0,b.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],R);var W=50,F="feature-tiles",A=n(52824),z=n(100),j=n(80885),L=n(51995),U=n(52639),V=n(16889),J=n(62554),B=n(61459),D=n(58009),Y=n(87037),q=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]],G=function(e){(0,u.Z)(n,e);var t=(0,l.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).updating=!1,r.enablePolygons=!0,r.enableLabels=!0,r._polygons=new Map,r._labels=new Map,r._enabled=!0,r}return(0,s.Z)(n,[{key:"initialize",value:function(){this._symbols=q.map((function(e){return new B.Z({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}})})),this.update()}},{key:"destroy",value:function(){this._enabled=!1,this.clear()}},{key:"enabled",get:function(){return this._enabled},set:function(e){this._enabled!==e&&(this._enabled=e,this.update())}},{key:"update",value:function(){var e=this;if(this._enabled){var t=this.getTiles(),n=new Array,r=new Set((this._labels.size,this._labels.keys()));t.forEach((function(i,a){var o=i.lij.toString();r.delete(o);var s=i.lij[0],u=i.geometry;if(e.enablePolygons&&!e._polygons.has(o)){var l=new U.Z({geometry:u,symbol:e._symbols[s%e._symbols.length]});e._polygons.set(o,l),n.push(l)}if(e.enableLabels){var c=function(e){if((0,p.pC)(e.label))return e.label;var t=e.lij.toString();return(0,p.pC)(e.loadPriority)&&(t+=" (".concat(e.loadPriority,")")),t}(i),d=a/(t.length-1),f=(0,V.t7)(0,200,d),v=(0,V.t7)(20,6,d)/.75,h=(0,p.pC)(i.loadPriority)&&i.loadPriority>=t.length,g=new L.Z([f,h?0:f,h?0:f]),y="3d"===e.view.type?function(){return new J.Z({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new Y.Z({text:c,halo:{color:"white",size:1/.75},material:{color:g},size:v})]})}:function(){return new D.Z({text:c,haloColor:"white",haloSize:1/.75,color:g,size:v})},b=e._labels.get(o);if(b){var _=y();((0,p.Wi)(b.symbol)||JSON.stringify(_)!==JSON.stringify(b.symbol))&&(b.symbol=_)}else{var w=new U.Z({geometry:u.extent.center,symbol:y()});e._labels.set(o,w),n.push(w)}}}));var i=new Array;r.forEach((function(t){var n=e._polygons.get(t);null!=n&&(i.push(n),e._polygons.delete(t));var r=e._labels.get(t);null!=r&&(i.push(r),e._labels.delete(t))})),this.view.graphics.removeMany(i),this.view.graphics.addMany(n)}else this.clear()}},{key:"clear",value:function(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}}]),n}(d.Z);(0,c._)([(0,y.Cb)({constructOnly:!0})],G.prototype,"view",void 0),(0,c._)([(0,y.Cb)({readOnly:!0})],G.prototype,"updating",void 0),(0,c._)([(0,y.Cb)()],G.prototype,"enabled",null);var X=function(e){(0,u.Z)(n,e);var t=(0,l.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e))._handles=new z.Z,r}return(0,s.Z)(n,[{key:"initialize",value:function(){var e=this,t=setInterval((function(){return e._fetchDebugInfo()}),2e3);this._handles.add((0,v.kB)((function(){return clearInterval(t)})))}},{key:"destroy",value:function(){this._handles.destroy()}},{key:"getTiles",value:function(){var e=this;if(!this._debugInfo)return[];var t=new Map,n=new Map;this._debugInfo.storedTiles.forEach((function(e){t.set(e.data.id,e.featureCount)})),this._debugInfo.pendingTiles.forEach((function(e){t.set(e.data.id,e.featureCount),n.set(e.data.id,e.state)}));var r=function(e){var r,i=n.get(e),a=null!==(r=t.get(e))&&void 0!==r?r:"?";return i?"".concat(i,":").concat(a,"\n").concat(e):"store:".concat(a,"\n").concat(e)},i=new Map;return this._debugInfo.storedTiles.forEach((function(e){i.set(e.data.id,e.data)})),this._debugInfo.pendingTiles.forEach((function(e){i.set(e.data.id,e.data)})),Array.from(i.values()).map((function(t){return{lij:[t.level,t.row,t.col],geometry:j.Z.fromExtent((0,x.HH)(t.extent,e.view.spatialReference)),label:r(t.id)}}))}},{key:"_fetchDebugInfo",value:function(){var e=this;this.handle.getDebugInfo(null).then((function(t){e._debugInfo=t,e.update()}))}}]),n}(G=(0,c._)([(0,b.j)("esri.views.support.TileTreeDebugger")],G));(0,c._)([(0,y.Cb)({constructOnly:!0})],X.prototype,"handle",void 0),X=(0,c._)([(0,b.j)("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],X);var K=n(46798),Q=n(27823),$=n(65618),ee=function(e){(0,u.Z)(n,e);var t=(0,l.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).schedule=null,r.hasZ=!1,r.elevationAlignPointsInFeatures=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var n,r,a,o,s,u,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=(0,m.Z)(t);try{for(r.s();!(a=r.n()).done;){o=a.value.points,s=(0,m.Z)(o);try{for(s.s();!(u=s.n()).done;)l=u.value.z,n.push(l)}catch(i){s.e(i)}finally{s.f()}}}catch(i){r.e(i)}finally{r.f()}return e.abrupt("return",{elevations:n,drapedObjectIds:new Set,failedObjectIds:new Set});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.queryForSymbologySnapping=(0,a.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{candidates:[],sourceCandidateIndices:[]});case 1:case"end":return e.stop()}}),e)}))),r.availability=0,r._workerHandleUpdating=!0,r._editId=0,r}return(0,s.Z)(n,[{key:"updating",get:function(){return this.updatingHandles.updating||this._workerHandleUpdating}},{key:"destroy",value:function(){this._workerHandle.destroy()}},{key:"initialize",value:function(){var e=this;this._workerHandle=new te(this.schedule,{alignElevation:function(){var t=(0,a.Z)((0,i.Z)().mark((function t(n,r){var a;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.signal,t.next=3,e.elevationAlignPointsInFeatures(n.points,a);case 3:return t.t0=t.sent,t.abrupt("return",{result:t.t0});case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),getSymbologyCandidates:function(){var t=(0,a.Z)((0,i.Z)().mark((function t(n,r){var a;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.signal,t.next=3,e.queryForSymbologySnapping(n,a);case 3:return t.t0=t.sent,t.abrupt("return",{result:t.t0});case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}),this.handles.add([this._workerHandle.on("notify-updating",(function(t){var n=t.updating;return e._workerHandleUpdating=n})),this._workerHandle.on("notify-availability",(function(t){var n=t.availability;return e._set("availability",n)}))])}},{key:"setup",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,n){var r,a,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this._serviceInfoFromLayer(t.layer),!(0,p.Wi)(a)){e.next=3;break}return e.abrupt("return");case 3:return o={configuration:this._convertConfiguration(t.configuration),serviceInfo:a,spatialReference:t.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:null===(r=t.layer.elevationInfo)||void 0===r?void 0:r.toJSON()},e.next=6,this.updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",o,n));case 6:this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},n));case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"configure",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,n){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this._convertConfiguration(t),e.next=3,this.updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",r,n));case 3:this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},n));case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},t));case 2:this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchCandidates",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,n){var r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.point,a={distance:t.distance,mode:t.mode,point:(0,$.Tx)(r[0],r[1],r[2],t.coordinateHelper.spatialReference.toJSON()),types:t.types,filter:(0,p.pC)(t.filter)?t.filter.toJSON():null},e.abrupt("return",this._workerHandle.invoke(a,n));case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateTiles",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,n){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={tiles:t.tiles,tileInfo:(0,p.pC)(t.tileInfo)?t.tileInfo.toJSON():null,tileSize:t.tileSize},e.next=3,this.updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",r,n));case 3:this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},n));case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,n){var r,a,o,s,u,l,c,d,f,v;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=this._editId++,d={id:c},e.next=3,this.updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits",d,n));case 3:return e.next=5,this.updatingHandles.addPromise((0,h.Hl)(t.result,n));case 5:return f=e.sent,v={id:c,edits:{addedFeatures:null!==(r=null===(a=f.addedFeatures)||void 0===a?void 0:a.map((function(e){return e.objectId})).filter(p.pC))&&void 0!==r?r:[],deletedFeatures:null!==(o=null===(s=f.deletedFeatures)||void 0===s?void 0:s.map((function(e){return{objectId:e.objectId,globalId:e.globalId}})))&&void 0!==o?o:[],updatedFeatures:null!==(u=null===(l=f.updatedFeatures)||void 0===l?void 0:l.map((function(e){return e.objectId})).filter(p.pC))&&void 0!==u?u:[]}},e.next=9,this.updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits",v,n));case 9:this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},n));case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getDebugInfo",value:function(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}},{key:"notifyElevationSourceChange",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._workerHandle.invokeMethod("notifyElevationSourceChange",{});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"notifySymbologyChange",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._workerHandle.invokeMethod("notifySymbologyChange",{});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setSymbologySnappingSupported",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._workerHandle.invokeMethod("setSymbologySnappingSupported",t);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_convertConfiguration",value:function(e){return{filter:(0,p.pC)(e.filter)?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}},{key:"_serviceInfoFromLayer",value:function(e){var t,n,r;return"multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:null!==(t=null===(n=e.parsedUrl)||void 0===n?void 0:n.path)&&void 0!==t?t:"",fields:e.fields.map((function(e){return e.toJSON()})),geometryType:Q.M.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:null===(r=e.timeInfo)||void 0===r?void 0:r.toJSON()}}}]),n}(f.r);(0,c._)([(0,y.Cb)({constructOnly:!0})],ee.prototype,"schedule",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],ee.prototype,"hasZ",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],ee.prototype,"elevationAlignPointsInFeatures",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],ee.prototype,"queryForSymbologySnapping",void 0),(0,c._)([(0,y.Cb)({readOnly:!0})],ee.prototype,"updating",null),(0,c._)([(0,y.Cb)({readOnly:!0})],ee.prototype,"availability",void 0),(0,c._)([(0,y.Cb)()],ee.prototype,"_workerHandleUpdating",void 0),ee=(0,c._)([(0,b.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],ee);var te=function(e){(0,u.Z)(n,e);var t=(0,l.Z)(n);function n(e,r){return(0,o.Z)(this,n),t.call(this,"FeatureServiceSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:r})}return(0,s.Z)(n)}(K.q),ne=n(585),re=n(59068),ie=n(22824),ae=function(e){(0,u.Z)(n,e);var t=(0,l.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).pointOfInterest=null,r}return(0,s.Z)(n,[{key:"tiles",get:function(){return[new k.f("0/0/0",0,0,0,(0,x.al)(-1e8,-1e8,1e8,1e8))]}},{key:"tileInfo",get:function(){return new ie.Z({origin:new ne.Z({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new re.Z({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}},{key:"tileSize",get:function(){return this.tileInfo.size[0]}}]),n}(d.Z);(0,c._)([(0,y.Cb)({readOnly:!0})],ae.prototype,"tiles",null),(0,c._)([(0,y.Cb)({readOnly:!0})],ae.prototype,"tileInfo",null),(0,c._)([(0,y.Cb)({readOnly:!0})],ae.prototype,"tileSize",null),(0,c._)([(0,y.Cb)({constructOnly:!0})],ae.prototype,"layer",void 0),(0,c._)([(0,y.Cb)()],ae.prototype,"pointOfInterest",void 0),ae=(0,c._)([(0,b.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],ae);var oe=n(32609),se=function(e){(0,u.Z)(n,e);var t=(0,l.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e))._workerHandle=null,r._debug=null,r}return(0,s.Z)(n,[{key:"_updateTilesParameters",get:function(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}},{key:"updating",get:function(){var e;return(null===(e=this._workerHandle)||void 0===e?void 0:e.updating)||this.updatingHandles.updating}},{key:"configuration",get:function(){var e=this.view,t=(0,p.pC)(e)?e.type:"2d";return{filter:this._layer.createQuery(),customParameters:this._layer.customParameters,viewType:t}}},{key:"availability",get:function(){var e,t;return null!==(e=null===(t=this._workerHandle)||void 0===t?void 0:t.availability)&&void 0!==e?e:0}},{key:"_layer",get:function(){return this.layerSource.layer}},{key:"initialize",value:function(){var e,t=this,n=this.view;if((0,p.pC)(n))switch(n.type){case"2d":this._tilesOfInterest=new H({view:n,layer:this._layer}),e=this._workerHandle=new ee;break;case"3d":var r,o=n.resourceController,s=this._layer,u=n.whenLayerView(s);this._tilesOfInterest=new R({view:n}),e=this._workerHandle=new ee({schedule:function(e){return o.immediate.schedule(e)},hasZ:this._layer.hasZ&&(null===(r=this._layer.returnZ)||void 0===r||r),elevationAlignPointsInFeatures:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,n){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u;case 2:return r=e.sent,e.abrupt("return",((0,h.k_)(n),r.elevationAlignPointsInFeatures(t,n)));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),queryForSymbologySnapping:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,n){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u;case 2:return r=e.sent,e.abrupt("return",((0,h.k_)(n),r.queryForSymbologySnapping(t,n)));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()});var l=new _.f(null);u.then((function(e){return l.set(e)})),this.addHandles([n.elevationProvider.on("elevation-change",(function(t){var n=t.context,r=s.elevationInfo;(0,w.W_)(n,r)&&(0,h.R8)(e.notifyElevationSourceChange())})),(0,g.YP)((function(){return s.elevationInfo}),(function(){return(0,h.R8)(e.notifyElevationSourceChange())}),g.nn),(0,g.YP)((function(){return(0,p.yw)(l.get(),(function(e){var t=e.processor;return null===t||void 0===t?void 0:t.renderer}))}),(function(){return(0,h.R8)(e.notifySymbologyChange())}),g.nn),(0,g.YP)((function(){return(0,p.R2)(l.get(),!1,(function(e){return e.symbologySnappingSupported}))}),(function(t){return(0,h.R8)(e.setSymbologySnappingSupported(t))}),g.nn),(0,g.on)((function(){var e;return null===(e=(0,p.WG)(l.get()))||void 0===e?void 0:e.layer}),["edits","apply-edits","graphic-update"],(function(){return e.notifySymbologyChange()}))])}else this._tilesOfInterest=new ae({layer:this._layer}),e=this._workerHandle=new ee;this.handles.add([(0,v.ed)(e)]),(0,h.R8)(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this.updatingHandles.add((function(){return t._updateTilesParameters}),(function(){return(0,h.R8)(e.updateTiles(t._updateTilesParameters,null))}),g.nn),this.handles.add([(0,g.YP)((function(){return t.configuration}),(function(t){return(0,h.R8)(e.configure(t,null))}),g.Z_)]),(0,p.pC)(n)&&this.handles.add((0,g.YP)((function(){return oe.Z.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES}),(function(r){r&&!t._debug?(t._debug=new X({view:n,handle:e}),t.handles.add((0,v.ed)(t._debug),"debug")):!r&&t._debug&&t.handles.remove("debug")}),g.nn)),this.handles.add(this.layerSource.layer.on("apply-edits",(function(t){(0,h.R8)(e.applyEdits(t,null))})))}},{key:"refresh",value:function(){var e;null===(e=this._workerHandle)||void 0===e||e.refresh(null)}},{key:"fetchCandidates",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,n){var a,o,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.coordinateHelper,o=t.point,this._tilesOfInterest.pointOfInterest=a.arrayToPoint(o),s=this._getGroundElevation,e.next=5,this._workerHandle.fetchCandidates((0,r.Z)({},t),n);case 5:return e.abrupt("return",e.sent.candidates.map((function(e){return(0,A.X)(e,s)})));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getDebugInfo",value:function(e){return this._workerHandle.getDebugInfo(e)}},{key:"_getGroundElevation",get:function(){return(0,A.g)(this.view)}}]),n}((0,f.p)(d.Z));(0,c._)([(0,y.Cb)({constructOnly:!0})],se.prototype,"spatialReference",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],se.prototype,"layerSource",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],se.prototype,"view",void 0),(0,c._)([(0,y.Cb)()],se.prototype,"_tilesOfInterest",void 0),(0,c._)([(0,y.Cb)({readOnly:!0})],se.prototype,"_updateTilesParameters",null),(0,c._)([(0,y.Cb)({readOnly:!0})],se.prototype,"updating",null),(0,c._)([(0,y.Cb)({readOnly:!0})],se.prototype,"configuration",null),(0,c._)([(0,y.Cb)({readOnly:!0})],se.prototype,"availability",null),(0,c._)([(0,y.Cb)()],se.prototype,"_getGroundElevation",null),se=(0,c._)([(0,b.j)("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],se)},52824:function(e,t,n){n.d(t,{X:function(){return c},g:function(){return d}});var r=n(92026),i=n(71353),a=n(1700),o=n(97760),s=n(95905),u=n(36700);function l(e){var t=e.x,n=e.y,r=e.z;return(0,a.uc)((0,i.f)(t,n,null!==r&&void 0!==r?r:0))}function c(e,t){switch(e.type){case"edge":return e.draped?new o.k({edgeStart:l(e.start),edgeEnd:l(e.end),targetPoint:l(e.target),objectId:e.objectId,getGroundElevation:t}):new s.L({edgeStart:l(e.start),edgeEnd:l(e.end),targetPoint:l(e.target),objectId:e.objectId,isDraped:!1});case"vertex":return new u.x({targetPoint:l(e.target),objectId:e.objectId,isDraped:!1})}}function d(e){return(0,r.pC)(e)&&"3d"===e.type?function(t,n,r){return e.elevationProvider.getElevation(t,n,null!==r&&void 0!==r?r:0,e.spatialReference,"ground")}:function(){return null}}},61309:function(e,t,n){n.d(t,{n:function(){return u}});var r=n(15671),i=n(43144),a=n(60136),o=n(29388),s=n(11186),u=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(e,i,a){var o;return(0,r.Z)(this,n),(o=t.call(this,i,a)).point=e,o}return(0,i.Z)(n,[{key:"equals",value:function(e){return e instanceof n&&(0,s.k)(this.point,e.point)}}]),n}(n(55054).r)}}]);
//# sourceMappingURL=4134.820aefbf.chunk.js.map