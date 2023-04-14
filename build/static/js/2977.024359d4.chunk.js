"use strict";(self.webpackChunkcommonlands_web=self.webpackChunkcommonlands_web||[]).push([[2977],{42977:function(e,r,t){t.r(r),t.d(r,{default:function(){return V}});var a=t(74165),n=t(15861),i=t(1413),l=t(15671),o=t(43144),s=t(60136),u=t(29388),c=t(27366),p=t(76200),d=t(10064),v=t(41691),y=t(93002),f=t(92026),h=t(97642),_=t(66978),g=t(35995),m=t(49861),b=t(89125),S=(t(63780),t(38511)),k=t(69912),w=t(31201),T=t(78952),C=t(30651),Z=t(27961),O=t(17775),R=t(6741),U=t(11936),W=t(6693),P=t(46671),j=t(6061),A=t(29598),B=t(71684),L=t(56811),M=t(18870),N=t(25899),D=t(45948),I=t(83690),J=t(77990),q=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"],G=function(e){(0,s.Z)(t,e);var r=(0,u.Z)(t);function t(){var e;(0,l.Z)(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=r.call.apply(r,[this].concat(n))).listMode="show",e.isReference=null,e.operationalLayerType="ArcGISTiledMapServiceLayer",e.resampling=!0,e.sourceJSON=null,e.spatialReference=null,e.path=null,e.sublayers=null,e.type="tile",e.url=null,e}return(0,o.Z)(t,[{key:"normalizeCtorArgs",value:function(e,r){return"string"==typeof e?(0,i.Z)({url:e},r):e}},{key:"load",value:function(e){var r=this,t=(0,f.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(_.r9).then((function(){return r._fetchService(t)}))),Promise.resolve(this)}},{key:"attributionDataUrl",get:function(){var e,r=null===(e=this.parsedUrl)||void 0===e?void 0:e.path.toLowerCase();return r?this._getDefaultAttribution(this._getMapName(r)):null}},{key:"readSpatialReference",value:function(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&T.Z.fromJSON(e)}},{key:"writeSublayers",value:function(e,r,t,a){if(this.loaded&&e){var n=e.slice().reverse().flatten((function(e){var r=e.sublayers;return r&&r.toArray().reverse()})).toArray(),l=[],o=(0,i.Z)({writeSublayerStructure:!1},a);n.forEach((function(e){var r=e.write({},o);l.push(r)})),l.some((function(e){return Object.keys(e).length>1}))&&(r.layers=l)}}},{key:"tileServers",get:function(){var e;return this._getDefaultTileServers(null===(e=this.parsedUrl)||void 0===e?void 0:e.path)}},{key:"castTileServers",value:function(e){return Array.isArray(e)?e.map((function(e){return(0,g.mN)(e).path})):null}},{key:"fetchTile",value:function(e,r,t){var a=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).signal,n=this.getTileUrl(e,r,t),l={responseType:"image",signal:a,query:(0,i.Z)({},this.refreshParameters)};return(0,p.default)(n,l).then((function(e){return e.data}))}},{key:"fetchImageBitmapTile",value:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(r,t,n){var l,o,s,u,c,d=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=(d.length>3&&void 0!==d[3]?d[3]:{}).signal,o=this.getTileUrl(r,t,n),s={responseType:"blob",signal:l,query:(0,i.Z)({},this.refreshParameters)},e.next=6,(0,p.default)(o,s);case 6:return u=e.sent,c=u.data,e.abrupt("return",(0,I.g)(c,o));case 9:case"end":return e.stop()}}),e,this)})));return function(r,t,a){return e.apply(this,arguments)}}()},{key:"getTileUrl",value:function(e,r,t){var a,n,l=!this.tilemapCache&&this.supportsBlankTile,o=(0,g.B7)((0,i.Z)((0,i.Z)((0,i.Z)({},null===(a=this.parsedUrl)||void 0===a?void 0:a.query),{},{blankTile:!l&&null},this.customParameters),{},{token:this.apiKey})),s=this.tileServers;return"".concat(s&&s.length?s[r%s.length]:null===(n=this.parsedUrl)||void 0===n?void 0:n.path,"/tile/").concat(e,"/").concat(r,"/").concat(t).concat(o?"?"+o:"")}},{key:"loadAll",value:function(){var e=this;return(0,y.G)(this,(function(r){r(e.allSublayers)}))}},{key:"_fetchService",value:function(e){var r=this;return new Promise((function(t,a){if(r.sourceJSON){if(null!=r.sourceJSON.bandCount&&null!=r.sourceJSON.pixelSizeX)throw new d.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");t({data:r.sourceJSON})}else{if(!r.parsedUrl)throw new d.Z("tile-layer:undefined-url","layer's url is not defined");var n=(0,N.Qc)(r.parsedUrl.path);if((0,f.pC)(n)&&"ImageServer"===n.serverType)throw new d.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,p.default)(r.parsedUrl.path,{query:(0,i.Z)((0,i.Z)((0,i.Z)({f:"json"},r.parsedUrl.query),r.customParameters),{},{token:r.apiKey}),responseType:"json",signal:e}).then(t,a)}})).then((function(t){var a=r.url;if(t.ssl&&(a=r.url=a.replace(/^http:/i,"https:")),r.sourceJSON=t.data,r.read(t.data,{origin:"service",url:r.parsedUrl}),10.1===r.version&&!(0,N.M8)(a))return r._fetchServerVersion(a,e).then((function(e){r.read({currentVersion:e})})).catch((function(){}))}))}},{key:"_fetchServerVersion",value:function(e,r){if(!(0,N.B5)(e))return Promise.reject();var t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,p.default)(t,{query:(0,i.Z)((0,i.Z)({f:"json"},this.customParameters),{},{token:this.apiKey}),responseType:"json",signal:r}).then((function(e){if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new d.Z("tile-layer:version-not-available")}))}},{key:"_getMapName",value:function(e){var r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r?r[2]:void 0}},{key:"_getDefaultAttribution",value:function(e){if(null==e)return null;var r;e=e.toLowerCase();for(var t=0,a=q.length;t<a;t++)if((r=q[t]).toLowerCase().includes(e))return(0,g.hF)("//static.arcgis.com/attribution/"+r);return null}},{key:"_getDefaultTileServers",value:function(e){if(null==e)return[];var r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}},{key:"hasOverriddenFetchTile",get:function(){return!this.fetchTile.__isDefault__}}]),t}((0,W.h)((0,M.x)((0,L.M)((0,j.q)((0,A.I)((0,O.Z)((0,R.O)((0,U.Y)((0,h.R)((0,v.p)((0,B.Q)((0,Z.V)((0,P.N)(C.Z))))))))))))));(0,c._)([(0,m.Cb)({readOnly:!0})],G.prototype,"attributionDataUrl",null),(0,c._)([(0,m.Cb)({type:["show","hide","hide-children"]})],G.prototype,"listMode",void 0),(0,c._)([(0,m.Cb)({json:{read:!0,write:!0}})],G.prototype,"blendMode",void 0),(0,c._)([(0,m.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],G.prototype,"isReference",void 0),(0,c._)([(0,m.Cb)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],G.prototype,"operationalLayerType",void 0),(0,c._)([(0,m.Cb)({type:Boolean})],G.prototype,"resampling",void 0),(0,c._)([(0,m.Cb)()],G.prototype,"sourceJSON",void 0),(0,c._)([(0,m.Cb)({type:T.Z})],G.prototype,"spatialReference",void 0),(0,c._)([(0,S.r)("spatialReference",["spatialReference","tileInfo"])],G.prototype,"readSpatialReference",null),(0,c._)([(0,m.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],G.prototype,"path",void 0),(0,c._)([(0,m.Cb)({readOnly:!0})],G.prototype,"sublayers",void 0),(0,c._)([(0,w.c)("sublayers",{layers:{type:[J.Z]}})],G.prototype,"writeSublayers",null),(0,c._)([(0,m.Cb)({json:{read:!1,write:!1}})],G.prototype,"popupEnabled",void 0),(0,c._)([(0,m.Cb)()],G.prototype,"tileServers",null),(0,c._)([(0,b.p)("tileServers")],G.prototype,"castTileServers",null),(0,c._)([(0,m.Cb)({readOnly:!0,json:{read:!1}})],G.prototype,"type",void 0),(0,c._)([(0,m.Cb)(D.HQ)],G.prototype,"url",void 0),(G=(0,c._)([(0,k.j)("esri.layers.TileLayer")],G)).prototype.fetchTile.__isDefault__=!0;var V=G}}]);
//# sourceMappingURL=2977.024359d4.chunk.js.map