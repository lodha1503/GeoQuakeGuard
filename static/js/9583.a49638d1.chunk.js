"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[9583],{82582:function(e,r,t){t.d(r,{dp:function(){return s},o2:function(){return l},yZ:function(){return o}});var n=t(16889),i=t(68860),a=96;function o(e,r){var t=r||e.extent,n=e.width,o=(0,i.c9)(null===t||void 0===t?void 0:t.spatialReference);return t&&n?t.width/n*o*i.hd*a:0}function s(e,r){return e/((0,i.c9)(r)*i.hd*a)}function l(e,r,t){return function(e,r){return 0===r||(0,n.W8)(e,r)||e<r}(e,r)&&function(e,r){return 0===r||(0,n.W8)(e,r)||e>r}(e,t)}},19583:function(e,r,t){t.r(r),t.d(r,{default:function(){return G}});var n=t(74165),i=t(15861),a=t(1413),o=t(15671),s=t(43144),l=t(60136),u=t(29388),c=t(27366),y=t(76200),p=t(62044),f=t(10064),d=t(93002),h=t(97642),v=t(66978),m=t(49861),b=t(25243),g=(t(63780),t(93169),t(38511)),Z=t(69912),x=t(31201),S=t(25265),_=t(53866),k=t(82582),w=t(92975),I=t(30651),C=t(27961),L=t(6741),O=t(11936),E=t(6693),P=t(46671),T=t(6061),D=t(29598),F=t(71684),N=t(56811),R=t(18870),M=t(99063),j=t(45948),J=t(44041),V=t(83690),q=t(77990),U=t(58132),A=t(26704),H=t(6701),z=function(e){(0,l.Z)(t,e);var r=(0,u.Z)(t);function t(){var e;(0,o.Z)(this,t);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=r.call.apply(r,[this].concat(i))).dateFieldsTimeZone=null,e.datesInUnknownTimezone=!1,e.dpi=96,e.gdbVersion=null,e.imageFormat="png24",e.imageMaxHeight=2048,e.imageMaxWidth=2048,e.imageTransparency=!0,e.isReference=null,e.labelsVisible=!1,e.operationalLayerType="ArcGISMapServiceLayer",e.preferredTimeZone=null,e.sourceJSON=null,e.sublayers=null,e.type="map-image",e.url=null,e}return(0,s.Z)(t,[{key:"normalizeCtorArgs",value:function(e,r){return"string"==typeof e?(0,a.Z)({url:e},r):e}},{key:"load",value:function(e){var r=this,t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(v.r9).then((function(){return r._fetchService(t)}))),Promise.resolve(this)}},{key:"readImageFormat",value:function(e,r){var t=r.supportedImageFormatTypes;return t&&t.includes("PNG32")?"png32":"png24"}},{key:"writeSublayers",value:function(e,r,t,n){var i;if(this.loaded&&e){var o=e.slice().reverse().flatten((function(e){var r=e.sublayers;return r&&r.toArray().reverse()})).toArray(),s=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&null!==(i=this.capabilities.exportMap)&&void 0!==i&&i.supportsDynamicLayers){var l=(0,S.M9)(n.origin);if(l===S.s3.PORTAL_ITEM){var u=this.createSublayersForOrigin("service").sublayers;s=(0,U.QV)(o,u,S.s3.SERVICE)}else if(l>S.s3.PORTAL_ITEM){var c=this.createSublayersForOrigin("portal-item");s=(0,U.QV)(o,c.sublayers,(0,S.M9)(c.origin))}}var y=[],p=(0,a.Z)({writeSublayerStructure:s},n),f=s;o.forEach((function(e){var r=e.write({},p);y.push(r),f=f||"user"===e.originOf("visible")})),y.some((function(e){return Object.keys(e).length>1}))&&(r.layers=y),f&&(r.visibleLayers=o.filter((function(e){return e.visible})).map((function(e){return e.id})))}}},{key:"createExportImageParameters",value:function(e,r,t,n){var i,o=(null===n||void 0===n?void 0:n.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());var s=new J.R({layer:this,floors:null===n||void 0===n?void 0:n.floors,scale:(0,k.yZ)({extent:e,width:r})*o}),l=s.toJSON();s.destroy();var u=null===n||void 0===n||!n.rotation||this.version<10.3?{}:{rotation:-n.rotation},c=null===(i=e)||void 0===i?void 0:i.spatialReference,y=(0,w.B9)(c);l.dpi*=o;var p={};if(null!==n&&void 0!==n&&n.timeExtent){var f=n.timeExtent.toJSON(),d=f.start,h=f.end;p.time=d&&h&&d===h?""+d:"".concat(null!==d&&void 0!==d?d:"null",",").concat(null!==h&&void 0!==h?h:"null")}else this.timeInfo&&!this.timeInfo.hasLiveData&&(p.time="null,null");return(0,a.Z)((0,a.Z)((0,a.Z)({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:r+","+t},l),u),p)}},{key:"fetchImage",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(r,t,i,a){var o,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._fetchImage("image",r,t,i,a);case 2:return o=e.sent,s=o.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e,this)})));return function(r,t,n,i){return e.apply(this,arguments)}}()},{key:"fetchImageBitmap",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(r,t,i,a){var o,s,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._fetchImage("blob",r,t,i,a);case 2:return o=e.sent,s=o.data,l=o.url,e.abrupt("return",(0,V.g)(s,l,null===a||void 0===a?void 0:a.signal));case 6:case"end":return e.stop()}}),e,this)})));return function(r,t,n,i){return e.apply(this,arguments)}}()},{key:"fetchRecomputedExtents",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var r,t,i,o,s,l,u,c,f=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=f.length>0&&void 0!==f[0]?f[0]:{},t=(0,a.Z)((0,a.Z)({},r),{},{query:(0,a.Z)((0,a.Z)({returnUpdates:!0,f:"json"},this.customParameters),{},{token:this.apiKey})}),e.next=4,(0,y.Z)(this.url,t);case 4:return i=e.sent,o=i.data,s=o.extent,l=o.fullExtent,u=o.timeExtent,c=s||l,e.abrupt("return",{fullExtent:c&&_.Z.fromJSON(c),timeExtent:u&&p.Z.fromJSON({start:u[0],end:u[1]})});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadAll",value:function(){var e=this;return(0,d.G)(this,(function(r){r(e.allSublayers)}))}},{key:"serviceSupportsSpatialReference",value:function(e){return(0,A.D)(this,e)}},{key:"_fetchImage",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(r,t,i,o,s){var l,u,c,p,d,h,m;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p={responseType:r,signal:null!==(l=null===s||void 0===s?void 0:s.signal)&&void 0!==l?l:null,query:(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},this.parsedUrl.query),this.createExportImageParameters(t,i,o,s)),{},{f:"image"},this.refreshParameters),this.customParameters),{},{token:this.apiKey})},d=this.parsedUrl.path+"/export",null==(null===(u=p.query)||void 0===u?void 0:u.dynamicLayers)||null!==(c=this.capabilities)&&void 0!==c&&null!==(c=c.exportMap)&&void 0!==c&&c.supportsDynamicLayers){e.next=3;break}throw new f.Z("mapimagelayer:dynamiclayer-not-supported","service ".concat(this.url," doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source."),{query:p.query});case 3:return e.prev=3,e.next=6,(0,y.Z)(d,p);case 6:return h=e.sent,m=h.data,e.abrupt("return",{data:m,url:d});case 11:if(e.prev=11,e.t0=e.catch(3),!(0,v.D_)(e.t0)){e.next=15;break}throw e.t0;case 15:throw new f.Z("mapimagelayer:image-fetch-error","Unable to load image: ".concat(d),{error:e.t0});case 16:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(r,t,n,i,a){return e.apply(this,arguments)}}()},{key:"_fetchService",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(r){var t,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.sourceJSON){e.next=2;break}return e.abrupt("return",void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}));case 2:return e.next=4,(0,y.Z)(this.parsedUrl.path,{query:(0,a.Z)((0,a.Z)((0,a.Z)({f:"json"},this.parsedUrl.query),this.customParameters),{},{token:this.apiKey}),signal:r});case 4:t=e.sent,i=t.data,t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i,this.read(i,{origin:"service",url:this.parsedUrl});case 8:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()}]),t}((0,E.h)((0,M.n)((0,N.M)((0,R.x)((0,L.O)((0,O.Y)((0,T.q)((0,D.I)((0,h.R)((0,F.Q)((0,C.V)((0,P.N)(I.Z)))))))))))));(0,c._)([(0,m.Cb)((0,H.mi)("dateFieldsTimeReference"))],z.prototype,"dateFieldsTimeZone",void 0),(0,c._)([(0,m.Cb)({type:Boolean})],z.prototype,"datesInUnknownTimezone",void 0),(0,c._)([(0,m.Cb)()],z.prototype,"dpi",void 0),(0,c._)([(0,m.Cb)()],z.prototype,"gdbVersion",void 0),(0,c._)([(0,m.Cb)()],z.prototype,"imageFormat",void 0),(0,c._)([(0,g.r)("imageFormat",["supportedImageFormatTypes"])],z.prototype,"readImageFormat",null),(0,c._)([(0,m.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],z.prototype,"imageMaxHeight",void 0),(0,c._)([(0,m.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],z.prototype,"imageMaxWidth",void 0),(0,c._)([(0,m.Cb)()],z.prototype,"imageTransparency",void 0),(0,c._)([(0,m.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],z.prototype,"isReference",void 0),(0,c._)([(0,m.Cb)({json:{read:!1,write:!1}})],z.prototype,"labelsVisible",void 0),(0,c._)([(0,m.Cb)({type:["ArcGISMapServiceLayer"]})],z.prototype,"operationalLayerType",void 0),(0,c._)([(0,m.Cb)({json:{read:!1,write:!1}})],z.prototype,"popupEnabled",void 0),(0,c._)([(0,m.Cb)((0,H.mi)("preferredTimeReference"))],z.prototype,"preferredTimeZone",void 0),(0,c._)([(0,m.Cb)()],z.prototype,"sourceJSON",void 0),(0,c._)([(0,m.Cb)({json:{write:{ignoreOrigin:!0}}})],z.prototype,"sublayers",void 0),(0,c._)([(0,x.c)("sublayers",{layers:{type:[q.Z]},visibleLayers:{type:[b.z8]}})],z.prototype,"writeSublayers",null),(0,c._)([(0,m.Cb)({type:["show","hide","hide-children"]})],z.prototype,"listMode",void 0),(0,c._)([(0,m.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],z.prototype,"type",void 0),(0,c._)([(0,m.Cb)(j.HQ)],z.prototype,"url",void 0);var G=z=(0,c._)([(0,Z.j)("esri.layers.MapImageLayer")],z)},44041:function(e,r,t){t.d(r,{R:function(){return b}});var n=t(1413),i=t(15671),a=t(43144),o=t(60136),s=t(29388),l=t(27366),u=t(7138),c=t(76672),y=t(49861),p=(t(25243),t(63780),t(93169),t(69912)),f=t(82582),d=t(45948),h=t(87072),v=t(58132),m={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"},b=function(e){(0,o.Z)(t,e);var r=(0,s.Z)(t);function t(e){var n;return(0,i.Z)(this,t),(n=r.call(this,e)).floors=null,n.scale=0,n}return(0,a.Z)(t,[{key:"destroy",value:function(){this.layer=null}},{key:"dynamicLayers",get:function(){var e=this;if(!this.hasDynamicLayers)return null;var r=this.visibleSublayers.map((function(r){var t=(0,h.f)(e.floors,r);return r.toExportImageJSON(t)}));return r.length?JSON.stringify(r):null}},{key:"hasDynamicLayers",get:function(){return this.layer&&(0,v.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}},{key:"layer",set:function(e){var r=this;this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(function(){return r.notifyChange("visibleSublayers")})),e.on("sublayer-update",(function(e){return r.notifyChange(m[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){var e=this.visibleSublayers;return e?e.length?"show:"+e.map((function(e){return e.id})).join(","):"show:-1":null}},{key:"layerDefs",get:function(){var e,r=this,t=!(null===(e=this.floors)||void 0===e||!e.length),n=this.visibleSublayers.filter((function(e){return null!=e.definitionExpression||t&&null!=e.floorInfo}));return n.length?JSON.stringify(n.reduce((function(e,t){var n=(0,h.f)(r.floors,t),i=(0,c._)(n,t.definitionExpression);return null!=i&&(e[t.id]=i),e}),{})):null}},{key:"version",get:function(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");var e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=[];if(!this.layer)return e;var r=this.layer.sublayers,t=this.scale;r&&r.forEach((function r(n){n.visible&&(0===t||(0,f.o2)(t,n.minScale,n.maxScale))&&(n.sublayers?n.sublayers.forEach(r):e.unshift(n))}));var n=this._get("visibleSublayers");return!n||n.length!==e.length||n.some((function(r,t){return e[t]!==r}))?e:n}},{key:"toJSON",value:function(){var e=this.layer,r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r=(0,n.Z)((0,n.Z)({},r),{},{layers:this.layers,layerDefs:this.layerDefs}),r}}]),t}(u.Z);(0,l._)([(0,y.Cb)({readOnly:!0})],b.prototype,"dynamicLayers",null),(0,l._)([(0,y.Cb)()],b.prototype,"floors",void 0),(0,l._)([(0,y.Cb)({readOnly:!0})],b.prototype,"hasDynamicLayers",null),(0,l._)([(0,y.Cb)()],b.prototype,"layer",null),(0,l._)([(0,y.Cb)({readOnly:!0})],b.prototype,"layers",null),(0,l._)([(0,y.Cb)({readOnly:!0})],b.prototype,"layerDefs",null),(0,l._)([(0,y.Cb)({type:Number})],b.prototype,"scale",void 0),(0,l._)([(0,y.Cb)(d.qG)],b.prototype,"timeExtent",void 0),(0,l._)([(0,y.Cb)({readOnly:!0})],b.prototype,"version",null),(0,l._)([(0,y.Cb)({readOnly:!0})],b.prototype,"visibleSublayers",null),b=(0,l._)([(0,p.j)("esri.layers.mixins.ExportImageParameters")],b)},87072:function(e,r,t){function n(e){var r,t=e.layer;return"floorInfo"in t&&null!==(r=t.floorInfo)&&void 0!==r&&r.floorField&&"floors"in e.view?a(e.view.floors,t.floorInfo.floorField):null}function i(e,r){var t;return"floorInfo"in r&&null!==(t=r.floorInfo)&&void 0!==t&&t.floorField?a(e,r.floorInfo.floorField):null}function a(e,r){if(null===e||void 0===e||!e.length)return null;var t=e.filter((function(e){return""!==e})).map((function(e){return"'".concat(e,"'")}));return t.push("''"),"".concat(r," IN (").concat(t.join(","),") OR ").concat(r," IS NULL")}t.d(r,{c:function(){return n},f:function(){return i}})}}]);
//# sourceMappingURL=9583.a49638d1.chunk.js.map