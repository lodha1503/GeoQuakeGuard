"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[7775],{70116:function(e,t,i){var n;i.d(t,{Y:function(){return n}}),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(n||(n={}))},17775:function(e,t,i){i.d(t,{Z:function(){return m}});var n=i(37762),a=i(15671),l=i(43144),r=i(60136),o=i(29388),c=i(27366),s=(i(59486),i(49861)),u=(i(25243),i(63780),i(93169),i(38511)),h=i(69912),f=i(22824),v=i(53184),p=i(34810),d=i(78952),m=function(e){var t=function(e){(0,r.Z)(i,e);var t=(0,o.Z)(i);function i(){var e;return(0,a.Z)(this,i),(e=t.apply(this,arguments)).copyright=null,e.minScale=0,e.maxScale=0,e.spatialReference=null,e.tileInfo=null,e.tilemapCache=null,e}return(0,l.Z)(i,[{key:"destroy",value:function(){var e,t;null===(e=this.tilemapCache)||void 0===e||null===(t=e.destroy)||void 0===t||t.call(e)}},{key:"readMinScale",value:function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}},{key:"readMaxScale",value:function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}},{key:"supportsBlankTile",get:function(){return this.version>=10.2}},{key:"readTilemapCache",value:function(e,t,i){var a,l=null===(a=t.capabilities)||void 0===a?void 0:a.includes("Tilemap"),r=t.minLOD,o=t.maxLOD,c=t.minScale,s=t.maxScale;if(null==r&&null==o&&0!==c&&0!==s){var u=function(e){return Math.round(1e4*e)/1e4};c=u(c||t.tileInfo.lods[0].scale),s=u(s||t.tileInfo.lods[t.tileInfo.lods.length-1].scale);var h,d=(0,n.Z)(t.tileInfo.lods);try{for(d.s();!(h=d.n()).done;){var m=h.value,y=u(m.scale);r=y>=c?m.level:r,o=y>=s?m.level:o}}catch(w){d.e(w)}finally{d.f()}}if(l)return new p.y({layer:this,minLOD:r,maxLOD:o});if(t.tileInfo){var b=new f.Z;return b.read(t.tileInfo,i),new v.Z(b,r,o)}return null}}]),i}(e);return(0,c._)([(0,s.Cb)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,c._)([(0,s.Cb)()],t.prototype,"minScale",void 0),(0,c._)([(0,u.r)("service","minScale")],t.prototype,"readMinScale",null),(0,c._)([(0,s.Cb)()],t.prototype,"maxScale",void 0),(0,c._)([(0,u.r)("service","maxScale")],t.prototype,"readMaxScale",null),(0,c._)([(0,s.Cb)({type:d.Z})],t.prototype,"spatialReference",void 0),(0,c._)([(0,s.Cb)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,c._)([(0,s.Cb)({type:f.Z})],t.prototype,"tileInfo",void 0),(0,c._)([(0,s.Cb)()],t.prototype,"tilemapCache",void 0),(0,c._)([(0,u.r)("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),(0,c._)([(0,s.Cb)()],t.prototype,"version",void 0),t=(0,c._)([(0,h.j)("esri.layers.mixins.ArcGISCachedService")],t)}},53184:function(e,t,i){i.d(t,{Z:function(){return s}});var n=i(74165),a=i(15861),l=i(15671),r=i(43144),o=i(10064),c=i(66978),s=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.lods[t.lods.length-1].level;(0,l.Z)(this,e),this.tileInfo=t,this.minLOD=i,this.maxLOD=n,t.lodAt(i)||(this.minLOD=t.lods[0].level),t.lodAt(n)||(this.maxLOD=t.lods[t.lods.length-1].level)}return(0,r.Z)(e,[{key:"effectiveMinLOD",get:function(){var e;return null!==(e=this.minLOD)&&void 0!==e?e:this.tileInfo.lods[0].level}},{key:"effectiveMaxLOD",get:function(){var e;return null!==(e=this.maxLOD)&&void 0!==e?e:this.tileInfo.lods[this.tileInfo.lods.length-1].level}},{key:"getAvailability",value:function(e,t,i){var n,a=null===(n=this.tileInfo)||void 0===n?void 0:n.lodAt(e);return!a||e<this.minLOD||e>this.maxLOD?"unavailable":a.cols&&a.rows?i>=a.cols[0]&&i<=a.cols[1]&&t>=a.rows[0]&&t<=a.rows[1]?"unknown":"unavailable":"unknown"}},{key:"fetchAvailability",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,i,a,l){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Yn)(l);case 2:if("unavailable"!==(r=this.getAvailability(t,i,a))){e.next=5;break}throw new o.Z("tile-map:tile-unavailable","Tile is not available",{level:t,row:i,col:a});case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));return function(t,i,n,a){return e.apply(this,arguments)}}()},{key:"fetchAvailabilityUpsample",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,i,a,l,r){var o,s=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Yn)(r);case 2:return l.level=t,l.row=i,l.col=a,o=this.tileInfo,e.abrupt("return",(o.updateTileInfo(l),this.fetchAvailability(t,i,a,r).catch((function(e){if((0,c.D_)(e))throw e;if(o.upsampleTile(l))return s.fetchAvailabilityUpsample(l.level,l.row,l.col,l,r);throw e}))));case 7:case"end":return e.stop()}}),e,this)})));return function(t,i,n,a,l){return e.apply(this,arguments)}}()}]),e}()},34810:function(e,t,i){i.d(t,{y:function(){return C}});var n=i(74165),a=i(15861),l=i(1413),r=i(15671),o=i(43144),c=i(60136),s=i(29388),u=i(27366),h=i(76200),f=i(7138),v=i(70116),p=i(10064),d=i(42537),m=i(16054),y=i(27546),b=i(66978),w=i(94172),_=i(99346),g=i(35995),Z=i(49861),k=(i(25243),i(63780)),O=(i(93169),i(69912)),D=i(87960),x=i(84652),T=i(18722);var S,A=function(){function e(t){(0,r.Z)(this,e),this._validateJSON(t);var i=t.location,n=t.data;this.location=Object.freeze((0,x.d9)(i));for(var a=this.location.width,l=this.location.height,o=!0,c=!0,s=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e<=T.c8?t?new Array(e).fill(0):new Array(e):new Uint32Array(e)}(Math.ceil(a*l/32)),u=0,h=0;h<n.length;h++){var f=h%32;n[h]?(c=!1,s[u]|=1<<f):o=!1,31===f&&++u}c?(this._availability="unavailable",this.byteSize=40):o?(this._availability="available",this.byteSize=40):(this._availability=s,this.byteSize=40+(0,T.Xw)(s))}return(0,o.Z)(e,[{key:"getAvailability",value:function(e,t){if("unavailable"===this._availability||"available"===this._availability)return this._availability;var i=(e-this.location.top)*this.location.width+(t-this.location.left),n=i%32,a=i>>5,l=this._availability;return a<0||a>l.length?"unknown":l[a]&1<<n?"available":"unavailable"}},{key:"_validateJSON",value:function(e){if(null===e||void 0===e||!e.location)throw new p.Z("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new p.Z("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new p.Z("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new p.Z("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new p.Z("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}],[{key:"fromDefinition",value:function(t,i){var n=t.service.request||h.Z,a=t.row,r=t.col,o=t.width,c=t.height,s={query:{f:"json"}};return i=i?(0,l.Z)((0,l.Z)({},s),i):s,n(function(e){var t,i;if(null!==(t=e.service.tileServers)&&void 0!==t&&t.length){var n=e.service.tileServers;i="".concat(n&&n.length?n[e.row%n.length]:e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}else i="".concat(e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height);var a=e.service.query;return a&&(i="".concat(i,"?").concat(a)),i}(t),i).then((function(e){return e.data})).catch((function(e){if(e&&e.details&&422===e.details.httpStatus)return{location:{top:a,left:r,width:o,height:c},valid:!0,data:(0,k.a9)(o*c,0)};throw e})).then((function(t){if(t.location&&(t.location.top!==a||t.location.left!==r||t.location.width!==o||t.location.height!==c))throw new p.Z("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:a,left:r,width:o,height:c}});return e.fromJSON(t)}))}},{key:"fromJSON",value:function(t){return Object.freeze(new e(t))}}]),e}();function L(e){return"".concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}var C=S=function(e){(0,c.Z)(i,e);var t=(0,s.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this,e))._pendingTilemapRequests={},n.request=h.Z,n.size=32,n._prefetchingEnabled=!0,n}return(0,o.Z)(i,[{key:"initialize",value:function(){var e=this;this._tilemapCache=new m.z(2*v.Y.MEGABYTES),this.addHandles([(0,w.YP)((function(){var t=e.layer;return[null===t||void 0===t?void 0:t.parsedUrl,null===t||void 0===t?void 0:t.tileServers,null===t||void 0===t?void 0:t.apiKey,null===t||void 0===t?void 0:t.customParameters]}),(function(){return e._initializeTilemapDefinition()}),w.nn)])}},{key:"effectiveMinLOD",get:function(){var e;return null!==(e=this.minLOD)&&void 0!==e?e:this.layer.tileInfo.lods[0].level}},{key:"effectiveMaxLOD",get:function(){var e;return null!==(e=this.maxLOD)&&void 0!==e?e:this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}},{key:"fetchTilemap",value:function(e,t,i,n){var a,r=this;if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new p.Z("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")));var o=this._tmpTilemapDefinition,c=this._tilemapFromCache(e,t,i,o);if(c)return Promise.resolve(c);var s=null===(a=n)||void 0===a?void 0:a.signal;return n=(0,l.Z)((0,l.Z)({},n),{},{signal:null}),new Promise((function(e,t){(0,b.fu)(s,(function(){return t((0,b.zE)())}));var i=L(o),a=r._pendingTilemapRequests[i];if(!a){a=A.fromDefinition(o,n).then((function(e){return r._tilemapCache.put(i,e,e.byteSize),e}));var l=function(){delete r._pendingTilemapRequests[i]};r._pendingTilemapRequests[i]=a,a.then(l,l)}a.then(e,t)}))}},{key:"getAvailability",value:function(e,t,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";var n=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return n?n.getAvailability(t,i):"unknown"}},{key:"fetchAvailability",value:function(e,t,i,n){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new p.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):this.fetchTilemap(e,t,i,n).catch((function(e){return e})).then((function(n){if(n instanceof A){var a=n.getAvailability(t,i);if("unavailable"===a)throw new p.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return a}if((0,b.D_)(n))throw n;return"unknown"}))}},{key:"fetchAvailabilityUpsample",value:function(e,t,i,n,a){var l=this;n.level=e,n.row=t,n.col=i;var r=this.layer.tileInfo;r.updateTileInfo(n);var o=this.fetchAvailability(e,t,i,a).catch((function(e){if((0,b.D_)(e))throw e;if(r.upsampleTile(n))return l.fetchAvailabilityUpsample(n.level,n.row,n.col,n,a);throw e}));return this._fetchAvailabilityUpsamplePrefetch(n.id,e,t,i,a,o),o}},{key:"_fetchAvailabilityUpsamplePrefetch",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,i,a,r,o,c){var s,u,h,f,v,p,m,y,w=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._prefetchingEnabled&&null!=t){e.next=2;break}return e.abrupt("return");case 2:if(s="prefetch-".concat(t),!this.hasHandles(s)){e.next=5;break}return e.abrupt("return");case 5:return u=new AbortController,c.then((function(){return u.abort()}),(function(){return u.abort()})),h=!1,f=(0,d.kB)((function(){h||(h=!0,u.abort())})),this.addHandles(f,s),e.next=12,(0,_.MU)(10,u.signal).catch((function(){}));case 12:if(h||(h=!0,this.removeHandles(s)),!(0,b.Hc)(u)){e.next=15;break}return e.abrupt("return");case 15:v=new D.f(t,i,a,r),p=(0,l.Z)((0,l.Z)({},o),{},{signal:u.signal}),m=this.layer.tileInfo,y=(0,n.Z)().mark((function e(){var t,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=w.fetchAvailability(v.level,v.row,v.col,p),S._prefetches.push(t),i=function(){S._prefetches.removeUnordered(t)},t.then(i,i);case 4:case"end":return e.stop()}}),e)})),0;case 18:if(!(S._prefetches.length<S._maxPrefetch&&m.upsampleTile(v))){e.next=23;break}return e.delegateYield(y(),"t0",20);case 20:e.next=18;break;case 23:case"end":return e.stop()}}),e,this)})));return function(t,i,n,a,l,r){return e.apply(this,arguments)}}()},{key:"_initializeTilemapDefinition",value:function(){var e;if(this.layer.parsedUrl){var t=this.layer,i=t.parsedUrl,n=t.apiKey,a=t.customParameters;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:i.path,query:(0,g.B7)((0,l.Z)((0,l.Z)((0,l.Z)({},i.query),a),{},{token:null!==n&&void 0!==n?n:null===(e=i.query)||void 0===e?void 0:e.token})),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}}},{key:"_tilemapFromCache",value:function(e,t,i,n){n.level=e,n.row=t-t%this.size,n.col=i-i%this.size;var a=L(n);return this._tilemapCache.get(a)}},{key:"test",get:function(){var e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:function(t,i,n){return!!e._tilemapFromCache(t,i,n,e._tmpTilemapDefinition)}}}}]),i}(f.Z);C._maxPrefetch=4,C._prefetches=new y.Z({initialSize:S._maxPrefetch}),(0,u._)([(0,Z.Cb)({constructOnly:!0})],C.prototype,"layer",void 0),(0,u._)([(0,Z.Cb)({constructOnly:!0})],C.prototype,"minLOD",void 0),(0,u._)([(0,Z.Cb)({constructOnly:!0})],C.prototype,"maxLOD",void 0),(0,u._)([(0,Z.Cb)({constructOnly:!0})],C.prototype,"request",void 0),(0,u._)([(0,Z.Cb)({constructOnly:!0})],C.prototype,"size",void 0),C=S=(0,u._)([(0,O.j)("esri.layers.support.TilemapCache")],C)}}]);
//# sourceMappingURL=7775.98f504f2.chunk.js.map