"use strict";(self.webpackChunkcommonlands_web=self.webpackChunkcommonlands_web||[]).push([[1378],{51378:function(t,e,_){_.d(e,{x:function(){return N}});var E=_(1413),T=_(15671),r=_(43144),i=(_(93169),_(16889)),R=_(92026),n=_(37825),A=_(49800),o=_(8548),a={target:o.No.TEXTURE_2D,samplingMode:o.cw.LINEAR,wrapMode:o.e8.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1},N=function(){function t(e,_){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(var i in(0,T.Z)(this,t),this._context=e,this.type="texture",this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,e.instanceCounter.increment(o._g.Texture,this),this._descriptor=(0,E.Z)((0,E.Z)({},a),_),a)void 0===this._descriptor[i]&&(this._descriptor[i]=a[i]);if(e.type!==A.zO.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),S(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1");this._descriptor.target===o.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(r):this.setData(r)}return(0,r.Z)(t,[{key:"glName",get:function(){return this._glName}},{key:"descriptor",get:function(){return this._descriptor}},{key:"isDirty",get:function(){return this._samplingModeDirty||this._wrapModeDirty}},{key:"dispose",value:function(){this._context.gl&&this._glName&&(this._context.unbindTexture(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(o._g.Texture,this))}},{key:"release",value:function(){this.dispose()}},{key:"resize",value:function(t,e){var _=this._descriptor;if(_.width!==t||_.height!==e){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!");_.width=t,_.height=e,this._descriptor.target===o.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}},{key:"_setDataCubeMap",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=o.No.TEXTURE_CUBE_MAP_POSITIVE_X;e<=o.No.TEXTURE_CUBE_MAP_NEGATIVE_Z;e++)this._setData(t,e)}},{key:"setData",value:function(t){this._setData(t)}},{key:"_setData",value:function(e,_){var E,T,r=this;if(this._context&&this._context.gl){var i=this._context.gl;this._glName||(this._glName=i.createTexture()),void 0===e&&(e=null);var A=this._descriptor,a=null!==_&&void 0!==_?_:A.target,N=S(a);null===e&&(A.width=A.width||4,A.height=A.height||4,N&&(A.depth=null!==(E=A.depth)&&void 0!==E?E:1));var C=this._context.bindTexture(this,t.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(t.TEXTURE_UNIT_FOR_UPDATES),t._validateTexture(this._context,A),this._configurePixelStorage(),(0,n.zu)(i);var O=A.pixelFormat,l=null!==(T=A.internalFormat)&&void 0!==T?T:this._deriveInternalFormat(O,A.dataType);if(u(e)){var M=e.width,D=e.height;e instanceof HTMLVideoElement&&(M=e.videoWidth,D=e.videoHeight),A.width&&A.height,N&&A.depth,A.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(a,l,A.hasMipmap,M,D,1),this._texImage(a,0,l,M,D,1,e),(0,n.zu)(i),A.hasMipmap&&this.generateMipmap(),void 0===A.width&&(A.width=M),void 0===A.height&&(A.height=D),N&&void 0===A.depth&&(A.depth=1)}else{var c=A.width,L=A.height,h=A.depth;if(null==c||null==L)throw new Error("Width and height must be specified!");if(N&&null==h)throw new Error("Depth must be specified!");if(A.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(a,l,A.hasMipmap,c,L,h),i.DEPTH24_STENCIL8&&l===i.DEPTH_STENCIL&&(l=i.DEPTH24_STENCIL8),I(e)){var P=e.levels,U=s(a,c,L,h),p=Math.min(U-1,P.length-1);(0,R.pC)(this._context.gl2)?i.texParameteri(A.target,this._context.gl2.TEXTURE_MAX_LEVEL,p):A.hasMipmap=A.hasMipmap&&U===P.length;var d=l;if(!function(t){return t in o.q_}(d))throw new Error("Attempting to use compressed data with an umcompressed format!");this._forEachMipmapLevel((function(t,e,_,E){var T=P[Math.min(t,P.length-1)];r._compressedTexImage(a,t,d,e,_,E,T)}),p)}else(0,R.pC)(e)?(this._texImage(a,0,l,c,L,h,e),(0,n.zu)(i),A.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel((function(t,e,_,E){r._texImage(a,t,l,e,_,E,null),(0,n.zu)(i)}))}t._applySamplingMode(i,this._descriptor),t._applyWrapMode(i,this._descriptor),t._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,n.zu)(i),this._context.bindTexture(C,t.TEXTURE_UNIT_FOR_UPDATES)}}},{key:"updateData",value:function(e,_,E,T,r,i){var n,A=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;i||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var o=this._context.gl,a=this._descriptor,N=a.pixelFormat,S=a.dataType,s=a.target,C=a.isImmutable,O=null!==(n=a.internalFormat)&&void 0!==n?n:this._deriveInternalFormat(N,S);if(C&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");var l=this._context.bindTexture(this,t.TEXTURE_UNIT_FOR_UPDATES,!0);if((_<0||E<0||T>a.width||r>a.height||_+T>a.width||E+r>a.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),A){if((0,R.Wi)(this._context.gl2))return void console.error("Webgl2 must be enabled to use dataRowOffset!");o.pixelStorei(this._context.gl2.UNPACK_SKIP_ROWS,A)}if(u(i)?(0,R.pC)(this._context.gl2)?this._context.gl2.texSubImage2D(s,e,_,E,T,r,N,S,i):o.texSubImage2D(s,e,_,E,N,S,i):I(i)?o.compressedTexSubImage2D(s,e,_,E,T,r,O,i.levels[e]):o.texSubImage2D(s,e,_,E,T,r,N,S,i),A){if((0,R.Wi)(this._context.gl2))return void console.error("Webgl2 must be enabled to use dataRowOffset!");o.pixelStorei(this._context.gl2.UNPACK_SKIP_ROWS,0)}this._context.bindTexture(l,t.TEXTURE_UNIT_FOR_UPDATES)}},{key:"updateData3D",value:function(e,_,E,T,r,i,n,A){var o;A||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var a=this._context.gl2;if((0,R.Wi)(a))throw new Error("3D textures are not supported in WebGL1");var N=this._descriptor,u=N.pixelFormat,s=N.dataType,C=N.isImmutable,O=N.target,l=null!==(o=N.internalFormat)&&void 0!==o?o:this._deriveInternalFormat(u,s);if(C&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");S(O)||console.warn("Attempting to set 3D texture data on a non-3D texture");var M=this._context.bindTexture(this,t.TEXTURE_UNIT_FOR_UPDATES);if(this._context.setActiveTexture(t.TEXTURE_UNIT_FOR_UPDATES),(_<0||E<0||T<0||r>N.width||i>N.height||n>N.depth||_+r>N.width||E+i>N.height||T+n>N.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),I(A))A=A.levels[e],a.compressedTexSubImage3D(O,e,_,E,T,r,i,n,l,A);else{var D=A;a.texSubImage3D(O,e,_,E,T,r,i,n,u,s,D)}this._context.bindTexture(M,t.TEXTURE_UNIT_FOR_UPDATES)}},{key:"generateMipmap",value:function(){var e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,t._validateTexture(this._context,e)}e.samplingMode===o.cw.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=o.cw.LINEAR_MIPMAP_NEAREST):e.samplingMode===o.cw.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=o.cw.NEAREST_MIPMAP_NEAREST);var _=this._context.bindTexture(this,t.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(t.TEXTURE_UNIT_FOR_UPDATES),this._context.gl.generateMipmap(e.target),this._context.bindTexture(_,t.TEXTURE_UNIT_FOR_UPDATES)}},{key:"setSamplingMode",value:function(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0)}},{key:"setWrapMode",value:function(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,t._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}},{key:"applyChanges",value:function(){var e=this._context.gl,_=this._descriptor;this._samplingModeDirty&&(t._applySamplingMode(e,_),this._samplingModeDirty=!1),this._wrapModeDirty&&(t._applyWrapMode(e,_),this._wrapModeDirty=!1)}},{key:"_deriveInternalFormat",value:function(t,e){if(this._context.type===A.zO.WEBGL1)return t;switch(e){case o.Br.FLOAT:switch(t){case o.VI.RGBA:return o.lP.RGBA32F;case o.VI.RGB:return o.lP.RGB32F;default:throw new Error("Unable to derive format")}case o.Br.UNSIGNED_BYTE:switch(t){case o.VI.RGBA:return o.lP.RGBA8;case o.VI.RGB:return o.lP.RGB8}default:return t}}},{key:"_configurePixelStorage",value:function(){var t=this._context.gl,e=this._descriptor,_=e.unpackAlignment,E=e.flipped,T=e.preMultiplyAlpha;t.pixelStorei(t.UNPACK_ALIGNMENT,_),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E?1:0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T?1:0)}},{key:"_texStorage",value:function(t,e,_,E,T,r){var i=this._context.gl2;if((0,R.Wi)(i))throw new Error("Immutable textures are not supported in WebGL1");if(!function(t){return t in o.lP}(e))throw new Error("Immutable textures must have a sized internal format");if(this._descriptor.isImmutable){var n=_?s(t,E,T,r):1;if(S(t)){if(null==r)throw new Error("Missing depth dimension for 3D texture upload");i.texStorage3D(t,n,e,E,T,r)}else i.texStorage2D(t,n,e,E,T);this._wasImmutablyAllocated=!0}}},{key:"_texImage",value:function(t,e,_,E,T,r,i){var n=this._context.gl,o=null,a=this._context.type===A.zO.WEBGL2,N=S(t),I=this._descriptor,s=I.isImmutable,C=I.pixelFormat,O=I.dataType;if(a&&(o=n),a||!u(i))if(s){if((0,R.pC)(i)){var l=i;if(N){if(null==r)throw new Error("Missing depth dimension for 3D texture upload");o.texSubImage3D(t,e,0,0,0,E,T,r,C,O,l)}else n.texSubImage2D(t,e,0,0,E,T,C,O,l)}}else{var M=(0,R.Wg)(i);if(N){if(null==r)throw new Error("Missing depth dimension for 3D texture upload");o.texImage3D(t,e,_,E,T,r,0,C,O,M)}else n.texImage2D(t,e,_,E,T,0,C,O,M)}else n.texImage2D(t,0,_,C,O,i)}},{key:"_compressedTexImage",value:function(t,e,_,E,T,r,i){var n=this._context.gl,o=null,a=S(t),N=this._descriptor.isImmutable;if(a){if(this._context.type!==A.zO.WEBGL2)throw new Error("3D textures are not supported in WebGL1");o=n}if(N){if((0,R.pC)(i))if(a){if(null==r)throw new Error("Missing depth dimension for 3D texture upload");o.compressedTexSubImage3D(t,e,0,0,0,E,T,r,_,i)}else n.compressedTexSubImage2D(t,e,0,0,E,T,_,i)}else if(a){if(null==r)throw new Error("Missing depth dimension for 3D texture upload");o.compressedTexImage3D(t,e,_,E,T,r,0,i)}else n.compressedTexImage2D(t,e,_,E,T,0,i)}},{key:"_forEachMipmapLevel",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,_=this._descriptor,E=_.width,T=_.height,r=_.depth,i=_.hasMipmap,R=_.target===o.No.TEXTURE_3D;if(null==E||null==T||R&&null==r)throw new Error("Missing texture dimensions for mipmap calculation");for(var n=0;t(n,E,T,r),i&&(1!==E||1!==T||R&&1!==r)&&!(n>=e);++n)E=Math.max(1,E>>1),T=Math.max(1,T>>1),R&&(r=Math.max(1,r>>1))}}],[{key:"_validateTexture",value:function(t,e){(null!=e.width&&e.width<0||null!=e.height&&e.height<0||null!=e.depth&&e.depth<0)&&console.error("Negative dimension parameters are not allowed!");var _=t.type===A.zO.WEBGL2,E=null!=e.width&&(0,i.wt)(e.width)&&null!=e.height&&(0,i.wt)(e.height);_||!e.isImmutable&&!S(e.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),_||E||("number"==typeof e.wrapMode?e.wrapMode!==o.e8.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):e.wrapMode.s===o.e8.CLAMP_TO_EDGE&&e.wrapMode.t===o.e8.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),e.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}},{key:"_applySamplingMode",value:function(t,e){var _=e.samplingMode,E=e.samplingMode;_===o.cw.LINEAR_MIPMAP_NEAREST||_===o.cw.LINEAR_MIPMAP_LINEAR?(_=o.cw.LINEAR,e.hasMipmap||(E=o.cw.LINEAR)):_!==o.cw.NEAREST_MIPMAP_NEAREST&&_!==o.cw.NEAREST_MIPMAP_LINEAR||(_=o.cw.NEAREST,e.hasMipmap||(E=o.cw.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,_),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,E)}},{key:"_applyWrapMode",value:function(t,e){"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}},{key:"_applyAnisotropicFilteringParameters",value:function(t,e){var _,E=t.capabilities.textureFilterAnisotropic;E&&t.gl.texParameterf(e.target,E.TEXTURE_MAX_ANISOTROPY,null!==(_=e.maxAnisotropy)&&void 0!==_?_:1)}}]),t}();function I(t){return(0,R.pC)(t)&&"type"in t&&"compressed"===t.type}function u(t){return(0,R.pC)(t)&&!I(t)&&!function(t){return(0,R.pC)(t)&&"byteLength"in t}(t)}function S(t){return t===o.No.TEXTURE_3D||t===o.No.TEXTURE_2D_ARRAY}function s(t,e,_){var E=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,T=Math.max(e,_);return t===o.No.TEXTURE_3D&&(T=Math.max(T,E)),Math.round(Math.log(T)/Math.LN2)+1}N.TEXTURE_UNIT_FOR_UPDATES=0},37825:function(t,e,_){_.d(e,{CG:function(){return n},hZ:function(){return R},zu:function(){return A}});var E=_(10064),T=_(93169),r=_(32718).Z.getLogger("esri.views.webgl.checkWebGLError");var i=!!(0,T.Z)("enable-feature:webgl-debug");function R(){return i}function n(){return i}function A(t){if(R()){var e=t.getError();if(e){var _=function(t,e){switch(e){case t.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case t.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case t.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case t.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case t.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case t.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(t,e),T=(new Error).stack;r.error(new E.Z("webgl-error","WebGL error occured",{message:_,stack:T}))}}}},8548:function(t,e,_){var E,T,r,i,R,n,A,o,a,N,I,u,S,s,C,O,l,M,D,c,L,h;_.d(e,{Br:function(){return O},Ho:function(){return D},LR:function(){return n},Ld:function(){return p},Lm:function(){return L},Lu:function(){return x},MX:function(){return T},No:function(){return S},OU:function(){return h},Se:function(){return G},Tg:function(){return l},V7:function(){return F},VI:function(){return s},VY:function(){return U},Wf:function(){return A},Y5:function(){return B},_g:function(){return P},cw:function(){return I},db:function(){return i},e8:function(){return u},g:function(){return o},l1:function(){return M},lP:function(){return C},lk:function(){return E},q_:function(){return d},qi:function(){return c},w0:function(){return R},wb:function(){return a},xS:function(){return N},zi:function(){return r}}),function(t){t[t.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",t[t.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",t[t.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(E||(E={})),function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(T||(T={})),function(t){t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC_COLOR=768]="SRC_COLOR",t[t.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.DST_COLOR=774]="DST_COLOR",t[t.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",t[t.CONSTANT_COLOR=32769]="CONSTANT_COLOR",t[t.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",t[t.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",t[t.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(r||(r={})),function(t){t[t.ADD=32774]="ADD",t[t.SUBTRACT=32778]="SUBTRACT",t[t.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(i||(i={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",t[t.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",t[t.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",t[t.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",t[t.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(R||(R={})),function(t){t[t.FRONT=1028]="FRONT",t[t.BACK=1029]="BACK",t[t.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(n||(n={})),function(t){t[t.CW=2304]="CW",t[t.CCW=2305]="CCW"}(A||(A={})),function(t){t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.INT=5124]="INT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.FLOAT=5126]="FLOAT"}(o||(o={})),function(t){t[t.NEVER=512]="NEVER",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.GEQUAL=518]="GEQUAL",t[t.ALWAYS=519]="ALWAYS"}(a||(a={})),function(t){t[t.ZERO=0]="ZERO",t[t.KEEP=7680]="KEEP",t[t.REPLACE=7681]="REPLACE",t[t.INCR=7682]="INCR",t[t.DECR=7683]="DECR",t[t.INVERT=5386]="INVERT",t[t.INCR_WRAP=34055]="INCR_WRAP",t[t.DECR_WRAP=34056]="DECR_WRAP"}(N||(N={})),function(t){t[t.NEAREST=9728]="NEAREST",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(I||(I={})),function(t){t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(u||(u={})),function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_3D=32879]="TEXTURE_3D",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(S||(S={})),function(t){t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.ALPHA=6406]="ALPHA",t[t.RGB=6407]="RGB",t[t.RGBA=6408]="RGBA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.RED=6403]="RED",t[t.RG=33319]="RG",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER"}(s||(s={})),function(t){t[t.RGBA4=32854]="RGBA4",t[t.R16F=33325]="R16F",t[t.RG16F=33327]="RG16F",t[t.RGB32F=34837]="RGB32F",t[t.RGBA16F=34842]="RGBA16F",t[t.R32F=33326]="R32F",t[t.RG32F=33328]="RG32F",t[t.RGBA32F=34836]="RGBA32F",t[t.R11F_G11F_B10F=35898]="R11F_G11F_B10F",t[t.RGB8=32849]="RGB8",t[t.RGBA8=32856]="RGBA8",t[t.RGB5_A1=32855]="RGB5_A1",t[t.R8=33321]="R8",t[t.RG8=33323]="RG8",t[t.R8I=33329]="R8I",t[t.R8UI=33330]="R8UI",t[t.R16I=33331]="R16I",t[t.R16UI=33332]="R16UI",t[t.R32I=33333]="R32I",t[t.R32UI=33334]="R32UI",t[t.RG8I=33335]="RG8I",t[t.RG8UI=33336]="RG8UI",t[t.RG16I=33337]="RG16I",t[t.RG16UI=33338]="RG16UI",t[t.RG32I=33339]="RG32I",t[t.RG32UI=33340]="RG32UI",t[t.RGB16F=34843]="RGB16F",t[t.RGB9_E5=35901]="RGB9_E5",t[t.SRGB8=35905]="SRGB8",t[t.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",t[t.RGB565=36194]="RGB565",t[t.RGBA32UI=36208]="RGBA32UI",t[t.RGB32UI=36209]="RGB32UI",t[t.RGBA16UI=36214]="RGBA16UI",t[t.RGB16UI=36215]="RGB16UI",t[t.RGBA8UI=36220]="RGBA8UI",t[t.RGB8UI=36221]="RGB8UI",t[t.RGBA32I=36226]="RGBA32I",t[t.RGB32I=36227]="RGB32I",t[t.RGBA16I=36232]="RGBA16I",t[t.RGB16I=36233]="RGB16I",t[t.RGBA8I=36238]="RGBA8I",t[t.RGB8I=36239]="RGB8I",t[t.R8_SNORM=36756]="R8_SNORM",t[t.RG8_SNORM=36757]="RG8_SNORM",t[t.RGB8_SNORM=36758]="RGB8_SNORM",t[t.RGBA8_SNORM=36759]="RGBA8_SNORM",t[t.RGB10_A2=32857]="RGB10_A2",t[t.RGB10_A2UI=36975]="RGB10_A2UI"}(C||(C={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.INT=5124]="INT",t[t.HALF_FLOAT=5131]="HALF_FLOAT",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(O||(O={})),function(t){t[t.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",t[t.STENCIL_INDEX8=36168]="STENCIL_INDEX8",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",t[t.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(l||(l={})),function(t){t[t.STATIC_DRAW=35044]="STATIC_DRAW",t[t.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",t[t.STREAM_DRAW=35040]="STREAM_DRAW",t[t.STATIC_READ=35045]="STATIC_READ",t[t.DYNAMIC_READ=35049]="DYNAMIC_READ",t[t.STREAM_READ=35041]="STREAM_READ",t[t.STATIC_COPY=35046]="STATIC_COPY",t[t.DYNAMIC_COPY=35050]="DYNAMIC_COPY",t[t.STREAM_COPY=35042]="STREAM_COPY"}(M||(M={})),function(t){t[t.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",t[t.VERTEX_SHADER=35633]="VERTEX_SHADER"}(D||(D={})),function(t){t[t.FRAMEBUFFER=36160]="FRAMEBUFFER",t[t.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",t[t.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(c||(c={})),function(t){t[t.TEXTURE=0]="TEXTURE",t[t.RENDER_BUFFER=1]="RENDER_BUFFER",t[t.CUBEMAP=2]="CUBEMAP"}(L||(L={})),function(t){t[t.NONE=0]="NONE",t[t.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",t[t.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",t[t.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",t[t.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(h||(h={}));var P,U,p=33984;!function(t){t[t.Texture=0]="Texture",t[t.BufferObject=1]="BufferObject",t[t.VertexArrayObject=2]="VertexArrayObject",t[t.Shader=3]="Shader",t[t.Program=4]="Program",t[t.FramebufferObject=5]="FramebufferObject",t[t.Renderbuffer=6]="Renderbuffer",t[t.Sync=7]="Sync",t[t.COUNT=8]="COUNT"}(P||(P={})),function(t){t[t.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",t[t.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",t[t.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",t[t.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",t[t.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",t[t.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",t[t.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",t[t.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",t[t.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",t[t.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",t[t.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",t[t.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",t[t.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",t[t.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",t[t.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",t[t.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(U||(U={}));var d,G,m,f,B,F,g,x=33306;!function(t){t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(d||(d={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_VEC2=35664]="FLOAT_VEC2",t[t.FLOAT_VEC3=35665]="FLOAT_VEC3",t[t.FLOAT_VEC4=35666]="FLOAT_VEC4",t[t.INT=5124]="INT",t[t.INT_VEC2=35667]="INT_VEC2",t[t.INT_VEC3=35668]="INT_VEC3",t[t.INT_VEC4=35669]="INT_VEC4",t[t.BOOL=35670]="BOOL",t[t.BOOL_VEC2=35671]="BOOL_VEC2",t[t.BOOL_VEC3=35672]="BOOL_VEC3",t[t.BOOL_VEC4=35673]="BOOL_VEC4",t[t.FLOAT_MAT2=35674]="FLOAT_MAT2",t[t.FLOAT_MAT3=35675]="FLOAT_MAT3",t[t.FLOAT_MAT4=35676]="FLOAT_MAT4",t[t.SAMPLER_2D=35678]="SAMPLER_2D",t[t.SAMPLER_CUBE=35680]="SAMPLER_CUBE",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",t[t.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",t[t.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",t[t.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",t[t.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",t[t.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",t[t.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",t[t.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",t[t.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",t[t.SAMPLER_3D=35679]="SAMPLER_3D",t[t.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",t[t.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",t[t.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",t[t.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",t[t.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",t[t.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",t[t.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",t[t.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",t[t.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",t[t.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",t[t.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",t[t.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(G||(G={})),function(t){t[t.OBJECT_TYPE=37138]="OBJECT_TYPE",t[t.SYNC_CONDITION=37139]="SYNC_CONDITION",t[t.SYNC_STATUS=37140]="SYNC_STATUS",t[t.SYNC_FLAGS=37141]="SYNC_FLAGS"}(m||(m={})),function(t){t[t.UNSIGNALED=37144]="UNSIGNALED",t[t.SIGNALED=37145]="SIGNALED"}(f||(f={})),function(t){t[t.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",t[t.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",t[t.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",t[t.WAIT_FAILED=37149]="WAIT_FAILED"}(B||(B={})),function(t){t[t.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(F||(F={})),function(t){t[t.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(g||(g={}))}}]);
//# sourceMappingURL=1378.443ef77e.chunk.js.map