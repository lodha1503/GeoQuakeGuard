"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[6816],{46816:function(e,t,r){r.r(t),r.d(t,{default:function(){return P}});var i=r(74165),n=r(15861),a=r(1413),o=r(15671),s=r(43144),l=r(60136),u=r(29388),c=r(27366),h=r(76200),d=r(10064),p=r(92026),v=r(97642),f=r(66978),y=r(35995),_=r(49861),m=(r(25243),r(63780)),k=(r(93169),r(38511)),b=r(69912),g=r(90724),w=r(30651),Z=r(17775),V=r(11936),T=r(6061),C=r(29598),S=r(45948),D=r(37762),x=function(){function e(t,r,i,n){(0,o.Z)(this,e),this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in t?(this.values=t.pixelData,this.width=t.width,this.height=t.height,this.noDataValue=t.noDataValue):(this.values=t,this.width=r,this.height=i,this.noDataValue=n)}return(0,s.Z)(e,[{key:"hasNoDataValues",get:function(){if(null==this._hasNoDataValues){var e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}},{key:"minValue",get:function(){return this._ensureBounds(),this._minValue}},{key:"maxValue",get:function(){return this._ensureBounds(),this._maxValue}},{key:"_ensureBounds",value:function(){if(null==this._minValue){var e,t=this.noDataValue,r=this.values,i=1/0,n=-1/0,a=!0,o=(0,D.Z)(r);try{for(o.s();!(e=o.n()).done;){var s=e.value;s===t?this._hasNoDataValues=!0:(i=s<i?s:i,n=s>n?s:n,a=!1)}}catch(l){o.e(l)}finally{o.f()}a?(this._minValue=0,this._maxValue=0):(this._minValue=i,this._maxValue=n>-3e38?n:0)}}}]),e}(),L=r(42537),I=r(32718),M=r(70431),N=function(){function e(t,r,i,n){var s=this,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};(0,o.Z)(this,e),this._mainMethod=r,this._transferLists=i,this._listeners=[],this._promise=(0,M.bA)(t,(0,a.Z)((0,a.Z)({},l),{},{schedule:n})).then((function(e){if(void 0===s._thread){s._thread=e,s._promise=null,l.hasInitialize&&s.broadcast({},"initialize");var t,r=(0,D.Z)(s._listeners);try{for(r.s();!(t=r.n()).done;){var i=t.value;s._connectListener(i)}}catch(n){r.e(n)}finally{r.f()}}else e.close()})),this._promise.catch((function(e){return I.Z.getLogger("esri.core.workers.WorkerHandle").error("Failed to initialize ".concat(t," worker: ").concat(e))}))}return(0,s.Z)(e,[{key:"on",value:function(e,t){var r=this,i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,L.kB)((function(){i.removed=!0,(0,m.Od)(r._listeners,i),r._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}},{key:"destroy",value:function(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}},{key:"invoke",value:function(e,t){return this.invokeMethod(this._mainMethod,e,t)}},{key:"invokeMethod",value:function(e,t,r){var i=this;if(this._thread){var n=this._transferLists[e],a=n?n(t):[];return this._thread.invoke(e,t,{transferList:a,signal:r})}return this._promise?this._promise.then((function(){return(0,f.k_)(r),i.invokeMethod(e,t,r)})):Promise.reject(null)}},{key:"broadcast",value:function(e,t){var r=this;return this._thread?Promise.all(this._thread.broadcast(t,e)).then((function(){})):this._promise?this._promise.then((function(){return r.broadcast(e,t)})):Promise.reject()}},{key:"promise",get:function(){return this._promise}},{key:"_connectListener",value:function(e){this._thread&&this._thread.on(e.eventName,e.callback).then((function(t){e.removed||(e.threadHandle=t)}))}}]),e}(),O=function(e){(0,l.Z)(r,e);var t=(0,u.Z)(r);function r(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return(0,o.Z)(this,r),(e=t.call(this,"LercWorker","_decode",{_decode:function(e){return[e.buffer]}},i,{strategy:"dedicated"})).schedule=i,e.ref=0,e}return(0,s.Z)(r,[{key:"decode",value:function(e,t,r){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},r):Promise.resolve(null)}},{key:"release",value:function(){var e=this;--this.ref<=0&&(j.forEach((function(t,r){t===e&&j.delete(r)})),this.destroy())}}]),r}(N),j=new Map;var A=function(e){(0,l.Z)(c,e);var t=(0,u.Z)(c);function c(){var e;(0,o.Z)(this,c);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).capabilities={operations:{supportsTileMap:!1}},e.copyright=null,e.heightModelInfo=null,e.path=null,e.minScale=void 0,e.maxScale=void 0,e.opacity=1,e.operationalLayerType="ArcGISTiledElevationServiceLayer",e.sourceJSON=null,e.type="elevation",e.url=null,e.version=null,e._lercDecoder=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=j.get(e);return t||(null!=e?(t=new O((function(t){return e.immediate.schedule(t)})),j.set(e,t)):(t=new O,j.set(null,t))),++t.ref,t}(),e}return(0,s.Z)(c,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,a.Z)({url:e},t):e}},{key:"destroy",value:function(){this._lercDecoder=(0,p.RY)(this._lercDecoder)}},{key:"readCapabilities",value:function(e,t){var r=t.capabilities&&t.capabilities.split(",").map((function(e){return e.toLowerCase().trim()}));return r?{operations:{supportsTileMap:r.includes("tilemap")}}:{operations:{supportsTileMap:!1}}}},{key:"readVersion",value:function(e,t){var r=t.currentVersion;return r||(r=9.3),r}},{key:"load",value:function(e){var t=this,r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new d.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(f.r9).then((function(){return t._fetchImageService(r)}))),Promise.resolve(this)}},{key:"fetchTile",value:function(e,t,r,i){var n=this,a=null!=(i=i||{signal:null}).signal?i.signal:i.signal=(new AbortController).signal,o={responseType:"array-buffer",signal:a},s={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((function(){return n._fetchTileAvailability(e,t,r,i)})).then((function(){return(0,h.Z)(n.getTileUrl(e,t,r),o)})).then((function(e){return n._lercDecoder.decode(e.data,s,a)})).then((function(e){return new x(e)}))}},{key:"getTileUrl",value:function(e,t,r){var i=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,n=(0,y.B7)((0,a.Z)((0,a.Z)({},this.parsedUrl.query),{},{blankTile:!i&&null}));return"".concat(this.parsedUrl.path,"/tile/").concat(e,"/").concat(t,"/").concat(r).concat(n?"?"+n:"")}},{key:"queryElevation",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(t,n){var a,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(5887).then(r.bind(r,35887));case 2:return a=e.sent,o=a.ElevationQuery,(0,f.k_)(n),e.abrupt("return",(new o).query(this,t,n));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"createElevationSampler",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(t,n){var a,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(5887).then(r.bind(r,35887));case 2:return a=e.sent,o=a.ElevationQuery,(0,f.k_)(n),e.abrupt("return",(new o).createSampler(this,t,n));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_fetchTileAvailability",value:function(e,t,r,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,r,i):Promise.resolve("unknown")}},{key:"_fetchImageService",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(t){var r,n,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.sourceJSON){e.next=2;break}return e.abrupt("return",this.sourceJSON);case 2:return n={query:(0,a.Z)({f:"json"},this.parsedUrl.query),responseType:"json",signal:t},e.next=5,(0,h.Z)(this.parsedUrl.path,n);case 5:(o=e.sent).ssl&&(this.url=null===(r=this.url)||void 0===r?void 0:r.replace(/^http:/i,"https:")),this.sourceJSON=o.data,this.read(o.data,{origin:"service",url:this.parsedUrl});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"hasOverriddenFetchTile",get:function(){return!this.fetchTile[E]}}]),c}((0,Z.Z)((0,V.Y)((0,T.q)((0,C.I)((0,v.R)(w.Z))))));(0,c._)([(0,_.Cb)({readOnly:!0})],A.prototype,"capabilities",void 0),(0,c._)([(0,k.r)("service","capabilities",["capabilities"])],A.prototype,"readCapabilities",null),(0,c._)([(0,_.Cb)({json:{read:{source:"copyrightText"}}})],A.prototype,"copyright",void 0),(0,c._)([(0,_.Cb)({readOnly:!0,type:g.Z})],A.prototype,"heightModelInfo",void 0),(0,c._)([(0,_.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],A.prototype,"path",void 0),(0,c._)([(0,_.Cb)({type:["show","hide"]})],A.prototype,"listMode",void 0),(0,c._)([(0,_.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],A.prototype,"minScale",void 0),(0,c._)([(0,_.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],A.prototype,"maxScale",void 0),(0,c._)([(0,_.Cb)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],A.prototype,"opacity",void 0),(0,c._)([(0,_.Cb)({type:["ArcGISTiledElevationServiceLayer"]})],A.prototype,"operationalLayerType",void 0),(0,c._)([(0,_.Cb)()],A.prototype,"sourceJSON",void 0),(0,c._)([(0,_.Cb)({json:{read:!1},value:"elevation",readOnly:!0})],A.prototype,"type",void 0),(0,c._)([(0,_.Cb)(S.HQ)],A.prototype,"url",void 0),(0,c._)([(0,_.Cb)()],A.prototype,"version",void 0),(0,c._)([(0,k.r)("version",["currentVersion"])],A.prototype,"readVersion",null),A=(0,c._)([(0,b.j)("esri.layers.ElevationLayer")],A);var E=Symbol("default-fetch-tile");A.prototype.fetchTile[E]=!0;var P=A}}]);
//# sourceMappingURL=6816.39ae037a.chunk.js.map