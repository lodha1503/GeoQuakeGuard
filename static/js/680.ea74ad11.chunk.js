"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[680],{6741:function(e,r,t){t.d(r,{O:function(){return E}});var i=t(37762),n=t(1413),a=t(74165),l=t(15861),o=t(15671),s=t(43144),u=t(60136),c=t(29388),y=t(27366),d=t(76200),p=t(77427),f=t(66978),v=t(35995),b=t(49901),h=t(49861),m=(t(25243),t(63780),t(93169),t(38511)),g=t(69912),S=t(25265),I=t(53866),w=t(78952),_=t(25899),x=t(45948),k=t(73117),E=function(e){var r=function(e){(0,u.Z)(t,e);var r=(0,c.Z)(t);function t(){var e;return(0,o.Z)(this,t),(e=r.apply(this,arguments)).capabilities=void 0,e.copyright=null,e.fullExtent=null,e.legendEnabled=!0,e.spatialReference=null,e.version=void 0,e._allLayersAndTablesMap=null,e}return(0,s.Z)(t,[{key:"readCapabilities",value:function(e,r){var t,i,n=r.capabilities&&r.capabilities.split(",").map((function(e){return e.toLowerCase().trim()}));if(!n)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};var a=this.type,l="tile"!==a&&!!r.supportsDynamicLayers,o=n.includes("query"),s=n.includes("map"),u=!!r.exportTilesAllowed,c=n.includes("tilemap"),y=n.includes("data"),d="tile"!==a&&(!r.tileInfo||l),p="tile"!==a&&(!r.tileInfo||l),f="tile"!==a,v=r.cimVersion&&b.G.parse(r.cimVersion),h=null!==(t=null===v||void 0===v?void 0:v.since(1,4))&&void 0!==t&&t,m=null!==(i=null===v||void 0===v?void 0:v.since(2,0))&&void 0!==i&&i;return{operations:{supportsExportMap:s,supportsExportTiles:u,supportsIdentify:o,supportsQuery:y,supportsTileMap:c},exportMap:s?{supportsArcadeExpressionForLabeling:h,supportsSublayersChanges:f,supportsDynamicLayers:l,supportsSublayerVisibility:d,supportsSublayerDefinitionExpression:p,supportsCIMSymbols:m}:null,exportTiles:u?{maxExportTilesCount:+r.maxExportTilesCount}:null}}},{key:"readVersion",value:function(e,r){var t=r.currentVersion;return t||(t=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),t}},{key:"fetchRelatedService",value:function(){var e=(0,l.Z)((0,a.Z)().mark((function e(r){var t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=this.portalItem)&&(0,k.Fj)(t)){e.next=3;break}return e.abrupt("return",null);case 3:return this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},r).then((function(e){var r;return null!==(r=e.find((function(e){return"Feature Service"===e.type})))&&void 0!==r?r:null}),(function(){return null}))),e.next=6,this._relatedFeatureServicePromise;case 6:return i=e.sent,e.abrupt("return",((0,f.k_)(r),i?{itemId:i.id,url:i.url}:null));case 8:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()},{key:"fetchSublayerInfo",value:function(){var e=(0,l.Z)((0,a.Z)().mark((function e(r,t){var i,l,o,s,u,c,y,p,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.source,!(null!==this&&void 0!==this&&this.portalItem&&"tile"===this.type&&"map-layer"===(null===i||void 0===i?void 0:i.type)&&(0,k.Fj)(this.portalItem)&&r.originIdOf("url")<S.s3.SERVICE)){e.next=6;break}return e.next=4,this.fetchRelatedService(t);case 4:(l=e.sent)&&(r.url=(0,v.v_)(l.url,i.mapLayerId.toString()),r.layerItemId=l.itemId);case 6:if(o=r.url,"data-layer"!==i.type){e.next=13;break}return e.next=10,(0,d.Z)(o,(0,n.Z)({responseType:"json",query:(0,n.Z)((0,n.Z)({f:"json"},this.customParameters),{},{token:this.apiKey})},t));case 10:s=e.sent.data,e.next=36;break;case 13:if(!(o&&r.originIdOf("url")>S.s3.SERVICE)){e.next=26;break}return e.prev=14,e.next=17,this._fetchAllLayersAndTablesFromService(o);case 17:y=e.sent,p=null!==(u=null===(c=(0,_.Qc)(o))||void 0===c?void 0:c.sublayer)&&void 0!==u?u:i.mapLayerId,s=y.get(p),e.next=24;break;case 22:e.prev=22,e.t0=e.catch(14);case 24:e.next=36;break;case 26:return f=r.id,"map-layer"===(null===i||void 0===i?void 0:i.type)&&(f=i.mapLayerId),e.prev=28,e.next=31,this.fetchAllLayersAndTables(t);case 31:s=e.sent.get(f),e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:return e.abrupt("return",s);case 37:case"end":return e.stop()}}),e,this,[[14,22],[28,34]])})));return function(r,t){return e.apply(this,arguments)}}()},{key:"fetchAllLayersAndTables",value:function(){var e=(0,l.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._fetchAllLayersAndTablesFromService(null===(t=this.parsedUrl)||void 0===t?void 0:t.path,r));case 1:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()},{key:"_fetchAllLayersAndTablesFromService",value:function(){var e=(0,l.Z)((0,a.Z)().mark((function e(r,t){var l,o,s,u=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load(t);case 2:return this._allLayersAndTablesMap||(this._allLayersAndTablesMap=new Map),l=(0,_.Qc)(r),o=(0,p.s1)(this._allLayersAndTablesMap,null===l||void 0===l?void 0:l.url.path,(function(){return(0,d.Z)((0,v.v_)(null===l||void 0===l?void 0:l.url.path,"/layers"),{responseType:"json",query:(0,n.Z)((0,n.Z)({f:"json"},u.customParameters),{},{token:u.apiKey})}).then((function(e){var r,t=new Map,n=(0,i.Z)(e.data.layers);try{for(n.s();!(r=n.n()).done;){var a=r.value;t.set(a.id,a)}}catch(l){n.e(l)}finally{n.f()}return{result:t}}),(function(e){return{error:e}}))})),e.next=7,o;case 7:if(s=e.sent,(0,f.k_)(t),!("result"in s)){e.next=10;break}return e.abrupt("return",s.result);case 10:throw s.error;case 11:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}()}]),t}(e);return(0,y._)([(0,h.Cb)({readOnly:!0})],r.prototype,"capabilities",void 0),(0,y._)([(0,m.r)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),(0,y._)([(0,h.Cb)({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),(0,y._)([(0,h.Cb)({type:I.Z})],r.prototype,"fullExtent",void 0),(0,y._)([(0,h.Cb)(x.id)],r.prototype,"id",void 0),(0,y._)([(0,h.Cb)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),(0,y._)([(0,h.Cb)(x.C_)],r.prototype,"popupEnabled",void 0),(0,y._)([(0,h.Cb)({type:w.Z})],r.prototype,"spatialReference",void 0),(0,y._)([(0,h.Cb)({readOnly:!0})],r.prototype,"version",void 0),(0,y._)([(0,m.r)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=(0,y._)([(0,g.j)("esri.layers.mixins.ArcGISMapService")],r)}},18870:function(e,r,t){t.d(r,{x:function(){return E}});var i=t(37762),n=t(4942),a=t(15671),l=t(43144),o=t(88301),s=t(61120),u=t(60136),c=t(29388),y=t(27366),d=t(40281),p=t(77178),f=t(10064),v=t(32718),b=t(94172),h=t(49861),m=(t(25243),t(63780),t(93169),t(23879)),g=t(69912),S=t(25265),I=t(77990),w=t(58132),_=v.Z.getLogger("esri.layers.TileLayer");var x=d.Z.ofType(I.Z);function k(e,r){e&&e.forEach((function(e){r(e),e.sublayers&&e.sublayers.length&&k(e.sublayers,r)}))}var E=function(e){var r=function(e){(0,u.Z)(t,e);var r=(0,c.Z)(t);function t(){var e,i;(0,a.Z)(this,t);for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];return(i=r.call.apply(r,[this].concat(o))).allSublayers=new p.Z({getCollections:function(){return[i.sublayers]},getChildrenFunction:function(e){return e.sublayers}}),i.sublayersSourceJSON=(e={},(0,n.Z)(e,S.s3.SERVICE,{}),(0,n.Z)(e,S.s3.PORTAL_ITEM,{}),(0,n.Z)(e,S.s3.WEB_SCENE,{}),(0,n.Z)(e,S.s3.WEB_MAP,{}),e),i.addHandles((0,b.YP)((function(){return i.sublayers}),(function(e,r){return i._handleSublayersChange(e,r)}),b.Z_)),i}return(0,l.Z)(t,[{key:"destroy",value:function(){this.allSublayers.destroy()}},{key:"readSublayers",value:function(e,r){if(r&&e){var t=this.sublayersSourceJSON,i=(0,S.M9)(r.origin);if(!(i<S.s3.SERVICE)&&(t[i]={context:r,visibleLayers:e.visibleLayers||t[i].visibleLayers,layers:e.layers||t[i].layers},!(i>S.s3.SERVICE))){this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);var n=this.createSublayersForOrigin("web-document"),a=n.sublayers,l=n.origin,o=(0,m.vw)(this);o.setDefaultOrigin(l),this._set("sublayers",new x(a)),o.setDefaultOrigin("user")}}}},{key:"findSublayerById",value:function(e){return this.allSublayers.find((function(r){return r.id===e}))}},{key:"createServiceSublayers",value:function(){return this.createSublayersForOrigin("service").sublayers}},{key:"createSublayersForOrigin",value:function(e){var r,t,n=(0,S.M9)("web-document"===e?"web-map":e),a=S.s3.SERVICE,l=this.sublayersSourceJSON[S.s3.SERVICE].layers,o=this.sublayersSourceJSON[S.s3.SERVICE].context,s=null,u=[S.s3.PORTAL_ITEM,S.s3.WEB_SCENE,S.s3.WEB_MAP].filter((function(e){return e<=n})),c=(0,i.Z)(u);try{for(c.s();!(t=c.n()).done;){var y=t.value,d=this.sublayersSourceJSON[y];(0,w.ac)(d.layers)&&(a=y,l=d.layers,o=d.context,d.visibleLayers&&(s={visibleLayers:d.visibleLayers,context:d.context}))}}catch(M){c.e(M)}finally{c.f()}var p,f=[S.s3.PORTAL_ITEM,S.s3.WEB_SCENE,S.s3.WEB_MAP].filter((function(e){return e>a&&e<=n})),v=null,b=(0,i.Z)(f);try{for(b.s();!(p=b.n()).done;){var h=p.value,m=this.sublayersSourceJSON[h],g=m.layers,_=m.visibleLayers,E=m.context;g&&(v={layers:g,context:E}),_&&(s={visibleLayers:_,context:E})}}catch(M){b.e(M)}finally{b.f()}var Z=function(e,r){var t=[],i={};return e?(e.forEach((function(e){var n=new I.Z;if(n.read(e,r),i[n.id]=n,null!=e.parentLayerId&&-1!==e.parentLayerId){var a=i[e.parentLayerId];a.sublayers||(a.sublayers=[]),a.sublayers.unshift(n)}else t.unshift(n)})),t):t}(l,o),L=new Map,C=new Set;if(v){var O,T=(0,i.Z)(v.layers);try{for(T.s();!(O=T.n()).done;){var D=O.value;L.set(D.id,D)}}catch(M){T.e(M)}finally{T.f()}}if(null!==(r=s)&&void 0!==r&&r.visibleLayers){var F,P=(0,i.Z)(s.visibleLayers);try{for(P.s();!(F=P.n()).done;){var A=F.value;C.add(A)}}catch(M){P.e(M)}finally{P.f()}}return k(Z,(function(e){v&&e.read(L.get(e.id),v.context),s&&e.read({defaultVisibility:C.has(e.id)},s.context)})),{origin:(0,S.x3)(a),sublayers:new x({items:Z})}}},{key:"read",value:function(e,r){(0,o.Z)((0,s.Z)(t.prototype),"read",this).call(this,e,r),this.readSublayers(e,r)}},{key:"_handleSublayersChange",value:function(e,r){var t=this;r&&(r.forEach((function(e){e.parent=null,e.layer=null})),this.removeHandles("sublayers-owner")),e&&(e.forEach((function(e){e.parent=t,e.layer=t})),this.addHandles([e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t})),e.on("after-remove",(function(e){var r=e.item;r.parent=null,r.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.addHandles(e.on("before-changes",(function(e){_.error(new f.Z("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:t})),e.preventDefault()})),"sublayers-owner"))}}]),t}(e);return(0,y._)([(0,h.Cb)({readOnly:!0})],r.prototype,"allSublayers",void 0),(0,y._)([(0,h.Cb)({readOnly:!0,type:d.Z.ofType(I.Z)})],r.prototype,"serviceSublayers",void 0),(0,y._)([(0,h.Cb)({value:null,type:x,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),(0,y._)([(0,h.Cb)({readOnly:!0})],r.prototype,"sublayersSourceJSON",void 0),r=(0,y._)([(0,g.j)("esri.layers.mixins.SublayersOwner")],r),r}},77990:function(e,r,t){t.d(r,{Z:function(){return ne}});var i,n=t(37762),a=t(74165),l=t(1413),o=t(15861),s=t(15671),u=t(43144),c=t(60136),y=t(29388),d=t(27366),p=(t(59486),t(44055)),f=(t(94931),t(78451),t(98689),t(57823),t(32066),t(49018),t(34999),t(28189),t(9014),t(40464)),v=t(76200),b=t(51508),h=t(40281),m=t(10064),g=t(93169),S=t(79056),I=t(84652),w=t(54472),_=t(32718),x=t(97642),k=t(76672),E=t(35995),Z=t(49861),L=t(89125),C=t(38511),O=t(69912),T=t(31201),D=t(25243),F=t(25265),P=t(23879),A=t(89623),M=t(87165),V=t(83040),j=t(52410),N=t(77748),R=t(85116),q=t(71065),U=t(49630),B=t(64020),J=t(23505),Q=t(99837),G=t(86638),W=t(81085),H=t(53866),z=t(27823);function K(e){return null!=e&&"esriSMS"===e.type}function X(e,r,t){var i,n=this.originIdOf(r)>=(0,F.M9)(t.origin);return{ignoreOrigin:!0,allowNull:n,enabled:!!t&&"map-image"===(null===(i=t.layer)||void 0===i?void 0:i.type)&&(t.writeSublayerStructure||n)}}function Y(e,r,t){var i;return{enabled:!!t&&"tile"===(null===(i=t.layer)||void 0===i?void 0:i.type)&&(t.origin&&this.originIdOf(r)>=(0,F.M9)(t.origin)||this._isOverridden(r))}}function $(e,r,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function ee(e,r,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(r)>=(0,F.M9)(t.origin))}}var re=0,te=new Set;te.add("layer"),te.add("parent"),te.add("loaded"),te.add("loadStatus"),te.add("loadError"),te.add("loadWarnings");var ie=i=function(e){(0,c.Z)(d,e);var r=(0,y.Z)(d);function d(e){var t;return(0,s.Z)(this,d),(t=r.call(this,e)).capabilities=void 0,t.maxScaleRange={minScale:0,maxScale:0},t.fields=null,t.fullExtent=null,t.geometryType=null,t.globalIdField=null,t.legendEnabled=!0,t.objectIdField=null,t.parent=null,t.popupEnabled=!0,t.popupTemplate=null,t.sourceJSON=null,t.title=null,t.typeIdField=null,t.type="sublayer",t.types=null,t._lastParsedUrl=null,t}return(0,u.Z)(d,[{key:"load",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r){var t=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(this.addResolvingPromise((0,o.Z)((0,a.Z)().mark((function e(){var i,n,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.layer,n=t.url,i||n){e.next=3;break}throw new m.Z("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:t});case 3:if(!i){e.next=9;break}return e.next=6,i.fetchSublayerInfo(t,r);case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,(0,v.Z)(n,(0,l.Z)({responseType:"json",query:{f:"json"}},r));case 11:e.t0=e.sent.data;case 12:(o=e.t0)&&(t.sourceJSON=o,t.read({layerDefinition:o},{origin:"service"}));case 14:case"end":return e.stop()}}),e)})))()),this));case 1:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()},{key:"readCapabilities",value:function(e,r){r=r.layerDefinition||r;var t=(0,U.h)(r,this.url),i=t.operations,n=i.supportsQuery,a=i.supportsQueryAttachments,l=t.query.supportsFormatPBF,o=t.data.supportsAttachment;return{exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:n,supportsQueryAttachments:a},data:{supportsAttachment:o},query:{supportsFormatPBF:l}}}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"definitionExpression",set:function(e){this._setAndNotifyLayer("definitionExpression",e)}},{key:"effectiveScaleRange",get:function(){return{minScale:this.minScale,maxScale:this.maxScale}}},{key:"readMaxScaleRange",value:function(e,r){var t,i;return{minScale:null!==(t=(r=r.layerDefinition||r).minScale)&&void 0!==t?t:0,maxScale:null!==(i=r.maxScale)&&void 0!==i?i:0}}},{key:"fieldsIndex",get:function(){return new j.Z(this.fields||[])}},{key:"floorInfo",set:function(e){this._setAndNotifyLayer("floorInfo",e)}},{key:"readGlobalIdFieldFromService",value:function(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields){var t,i=(0,n.Z)(r.fields);try{for(i.s();!(t=i.n()).done;){var a=t.value;if("esriFieldTypeGlobalID"===a.type)return a.name}}catch(l){i.e(l)}finally{i.f()}}}},{key:"id",get:function(){var e=this._get("id");return null!==e&&void 0!==e?e:re++},set:function(e){var r;this._get("id")!==e&&(!1!==(null===(r=this.layer)||void 0===r||null===(r=r.capabilities)||void 0===r||null===(r=r.exportMap)||void 0===r?void 0:r.supportsDynamicLayers)?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}},{key:"labelingInfo",set:function(e){this._setAndNotifyLayer("labelingInfo",e)}},{key:"writeLabelingInfo",value:function(e,r,t,i){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map((function(e){return e.write({},i)}))}})}},{key:"labelsVisible",set:function(e){this._setAndNotifyLayer("labelsVisible",e)}},{key:"layer",set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(r){return r.layer=e}))}},{key:"listMode",set:function(e){this._set("listMode",e)}},{key:"minScale",set:function(e){this._setAndNotifyLayer("minScale",e)}},{key:"readMinScale",value:function(e,r){var t;return r.minScale||(null===(t=r.layerDefinition)||void 0===t?void 0:t.minScale)||0}},{key:"maxScale",set:function(e){this._setAndNotifyLayer("maxScale",e)}},{key:"readMaxScale",value:function(e,r){var t;return r.maxScale||(null===(t=r.layerDefinition)||void 0===t?void 0:t.maxScale)||0}},{key:"readObjectIdFieldFromService",value:function(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields){var t,i=(0,n.Z)(r.fields);try{for(i.s();!(t=i.n()).done;){var a=t.value;if("esriFieldTypeOID"===a.type)return a.name}}catch(l){i.e(l)}finally{i.f()}}}},{key:"opacity",set:function(e){this._setAndNotifyLayer("opacity",e)}},{key:"readOpacity",value:function(e,r){var t,i,n=r.layerDefinition;return 1-.01*(null!==(t=null!=(null===n||void 0===n?void 0:n.transparency)?n.transparency:null===n||void 0===n||null===(i=n.drawingInfo)||void 0===i?void 0:i.transparency)&&void 0!==t?t:0)}},{key:"writeOpacity",value:function(e,r,t,i){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}},{key:"writeParent",value:function(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=(0,D.vU)(this.parent.id):r.parentLayerId=-1}},{key:"queryTask",get:function(){var e,r;if(!this.layer)return null;var t=this.layer.spatialReference,i="gdbVersion"in this.layer?this.layer.gdbVersion:void 0,n=this.capabilities,a=this.fieldsIndex,l=(0,g.Z)("featurelayer-pbf")&&(null===n||void 0===n?void 0:n.query.supportsFormatPBF),o=null!==(e=null===n||void 0===n||null===(r=n.operations)||void 0===r?void 0:r.supportsQueryAttachments)&&void 0!==e&&e;return new A.Z({url:this.url,pbfSupported:l,fieldsIndex:a,gdbVersion:i,sourceSpatialReference:t,queryAttachmentsSupported:o})}},{key:"renderer",set:function(e){if(e){var r,t=(0,n.Z)(e.getSymbols());try{for(t.s();!(r=t.n()).done;){var i=r.value;if((0,b.dU)(i)){_.Z.getLogger(this).warn("Sublayer renderer should use 2D symbols");break}}}catch(a){t.e(a)}finally{t.f()}}this._setAndNotifyLayer("renderer",e)}},{key:"source",get:function(){return this._get("source")||new J.R({mapLayerId:this.id})},set:function(e){this._setAndNotifyLayer("source",e)}},{key:"sublayers",set:function(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}},{key:"castSublayers",value:function(e){return(0,D.se)(h.Z.ofType(i),e)}},{key:"writeSublayers",value:function(e,r,t){var i;(null===(i=this.sublayers)||void 0===i?void 0:i.length)&&(r[t]=this.sublayers.map((function(e){return e.id})).toArray().reverse())}},{key:"readTitle",value:function(e,r){var t,i;return null!==(t=null===(i=r.layerDefinition)||void 0===i?void 0:i.name)&&void 0!==t?t:r.name}},{key:"readTypeIdField",value:function(e,r){var t=(r=r.layerDefinition||r).typeIdField;if(t&&r.fields){t=t.toLowerCase();var i=r.fields.find((function(e){return e.name.toLowerCase()===t}));i&&(t=i.name)}return t}},{key:"url",get:function(){var e,r,t=null!==(e=null===(r=this.layer)||void 0===r?void 0:r.parsedUrl)&&void 0!==e?e:this._lastParsedUrl,i=this.source;if(!t)return null;if(this._lastParsedUrl=t,"map-layer"===(null===i||void 0===i?void 0:i.type))return"".concat(t.path,"/").concat(i.mapLayerId);var n={layer:JSON.stringify({source:this.source})};return"".concat(t.path,"/dynamicLayer?").concat((0,E.B7)(n))},set:function(e){this._overrideIfSome("url",e)}},{key:"visible",set:function(e){this._setAndNotifyLayer("visible",e)}},{key:"writeVisible",value:function(e,r,t,i){r[t]=this.getAtOrigin("defaultVisibility","service")||e}},{key:"clone",value:function(){var e=(0,P.vw)(this).store,r=new i;return(0,P.vw)(r).store=e.clone(te),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}},{key:"createPopupTemplate",value:function(e){return(0,W.eZ)(this,e)}},{key:"createQuery",value:function(){return new G.Z({returnGeometry:!0,where:this.definitionExpression||"1=1"})}},{key:"createFeatureLayer",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var r,i,n,l,o,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.hasOwnProperty("sublayers")){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,Promise.resolve().then(t.bind(t,64326));case 4:if(i=e.sent.default,n=this.layer,!((l=this.url)&&this.originIdOf("url")>F.s3.SERVICE)){e.next=11;break}o=new i({url:l}),e.next=15;break;case 11:if(null!==n&&void 0!==n&&n.parsedUrl){e.next=13;break}throw new m.Z("createFeatureLayer:missing-information","Cannot create a FeatureLayer without a url or a parent layer");case 13:s=n.parsedUrl,o=new i({url:s.path}),s&&this.source&&("map-layer"===this.source.type?o.layerId=this.source.mapLayerId:o.dynamicDataSource=this.source);case 15:return e.abrupt("return",(null!=(null===n||void 0===n?void 0:n.refreshInterval)&&(o.refreshInterval=n.refreshInterval),this.definitionExpression&&(o.definitionExpression=this.definitionExpression),this.floorInfo&&(o.floorInfo=(0,I.d9)(this.floorInfo)),this.originIdOf("labelingInfo")>F.s3.SERVICE&&(o.labelingInfo=(0,I.d9)(this.labelingInfo)),this.originIdOf("labelsVisible")>F.s3.DEFAULTS&&(o.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>F.s3.DEFAULTS&&(o.legendEnabled=this.legendEnabled),this.originIdOf("visible")>F.s3.DEFAULTS&&(o.visible=this.visible),this.originIdOf("minScale")>F.s3.DEFAULTS&&(o.minScale=this.minScale),this.originIdOf("maxScale")>F.s3.DEFAULTS&&(o.maxScale=this.maxScale),this.originIdOf("opacity")>F.s3.DEFAULTS&&(o.opacity=this.opacity),this.originIdOf("popupTemplate")>F.s3.DEFAULTS&&(o.popupTemplate=(0,I.d9)(this.popupTemplate)),this.originIdOf("renderer")>F.s3.SERVICE&&(o.renderer=(0,I.d9)(this.renderer)),"data-layer"===(null===(r=this.source)||void 0===r?void 0:r.type)&&(o.dynamicDataSource=this.source.clone()),this.originIdOf("title")>F.s3.DEFAULTS&&(o.title=this.title),"map-image"===(null===n||void 0===n?void 0:n.type)&&n.originIdOf("customParameters")>F.s3.DEFAULTS&&(o.customParameters=n.customParameters),"tile"===(null===n||void 0===n?void 0:n.type)&&n.originIdOf("customParameters")>F.s3.DEFAULTS&&(o.customParameters=n.customParameters),o));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFeatureType",value:function(e){var r=this.typeIdField,t=this.types;if(!r||!e)return null;var i=e.attributes?e.attributes[r]:void 0;if(null==i)return null;var n=null;return null!==t&&void 0!==t&&t.some((function(e){var r=e.id;return null!=r&&(r.toString()===i.toString()&&(n=e),!!n)})),n}},{key:"getFieldDomain",value:function(e,r){var t=null===r||void 0===r?void 0:r.feature,i=this.getFeatureType(t);if(i){var n=i.domains&&i.domains[e];if(n&&"inherited"!==n.type)return n}return this._getLayerDomain(e)}},{key:"queryAttachments",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r,t){var i,n,l,o,s,u,c,y,d,p,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(r=Q.Z.from(r),null!==(l=this.capabilities)&&void 0!==l&&null!==(i=l.data)&&void 0!==i&&i.supportsAttachment){e.next=6;break}throw new m.Z("queryAttachments:not-supported","this layer doesn't support attachments");case 6:if(s=(o=r).attachmentTypes,u=o.objectIds,c=o.globalIds,y=o.num,d=o.size,p=o.start,f=o.where,null!==l&&void 0!==l&&null!==(n=l.operations)&&void 0!==n&&n.supportsQueryAttachments){e.next=10;break}if(!((null===s||void 0===s?void 0:s.length)>0||(null===c||void 0===c?void 0:c.length)>0||(null===d||void 0===d?void 0:d.length)>0||y||p||f)){e.next=10;break}throw new m.Z("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",r);case 10:if(null!==u&&void 0!==u&&u.length||null!==c&&void 0!==c&&c.length||f){e.next=12;break}throw new m.Z("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",r);case 12:return e.abrupt("return",this.queryTask.executeAttachmentQuery(r,t));case 13:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var r,t,i,o,s,u,c,y=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=y.length>0&&void 0!==y[0]?y[0]:this.createQuery(),o=y.length>1?y[1]:void 0,e.next=4,this.load();case 4:if(this.capabilities.operations.supportsQuery){e.next=6;break}throw new m.Z("queryFeatures:not-supported","this layer doesn't support queries.");case 6:if(this.url){e.next=8;break}throw new m.Z("queryFeatures:not-supported","this layer has no url.");case 8:return e.next=10,this.queryTask.execute(i,(0,l.Z)((0,l.Z)({},o),{},{query:(0,l.Z)((0,l.Z)({},null===(r=this.layer)||void 0===r?void 0:r.customParameters),{},{token:null===(t=this.layer)||void 0===t?void 0:t.apiKey})}));case 10:if(null!==(s=e.sent)&&void 0!==s&&s.features){u=(0,n.Z)(s.features);try{for(u.s();!(c=u.n()).done;)c.value.sourceLayer=this}catch(a){u.e(a)}finally{u.f()}}return e.abrupt("return",s);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"toExportImageJSON",value:function(e){var r,t=this,i={id:this.id,source:(null===(r=this.source)||void 0===r?void 0:r.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},n=(0,k._)(e,this.definitionExpression);null!=n&&(i.definitionExpression=n);var a=["renderer","labelingInfo","opacity","labelsVisible"].reduce((function(e,r){return e[r]=t.originIdOf(r),e}),{}),l=Object.keys(a).some((function(e){return a[e]>F.s3.SERVICE}));if(l){var o=i.drawingInfo={};if(a.renderer>F.s3.SERVICE&&(o.renderer=this.renderer?this.renderer.toJSON():null),a.labelsVisible>F.s3.SERVICE&&(o.showLabels=this.labelsVisible),this.labelsVisible&&a.labelingInfo>F.s3.SERVICE)if(this.labelingInfo){var s;!this.loaded&&(null===(s=this.labelingInfo)||void 0===s?void 0:s.some((function(e){return!e.labelPlacement})))&&_.Z.getLogger(this).warnOnce("A Sublayer (title: ".concat(this.title,", id: ").concat(this.id,") has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type."),{sublayer:this});var u=this.labelingInfo;null!=this.geometryType&&(u=(0,R.a)(this.labelingInfo,z.M.toJSON(this.geometryType))),o.showLabels=!0,o.labelingInfo=u.filter((function(e){return e.labelPlacement})).map((function(e){return e.toJSON({origin:"service",layer:t.layer})}))}else o.showLabels=!1;a.opacity>F.s3.SERVICE&&(o.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(o.renderer)}return i}},{key:"_assignDefaultSymbolColors",value:function(e){this._forEachSimpleMarkerSymbols(e,(function(e){var r;e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(null!==(r=e.outline)&&void 0!==r&&r.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}},{key:"_forEachSimpleMarkerSymbols",value:function(e,r){if(e){var t,i,a=null!==(t="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:null)&&void 0!==t?t:[],l=(0,n.Z)(a);try{for(l.s();!(i=l.n()).done;){var o=i.value;K(o.symbol)&&r(o.symbol)}}catch(s){l.e(s)}finally{l.f()}"symbol"in e&&K(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&K(e.defaultSymbol)&&r(e.defaultSymbol)}}},{key:"_setAndNotifyLayer",value:function(e,r){var t,i,n=this.layer,a=this._get(e);switch(e){case"definitionExpression":case"floorInfo":t="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":t="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":t="supportsDynamicLayers",i="supportsModification"}var l=(0,P.vw)(this).getDefaultOrigin();if("service"!==l){var o,s;if(t&&!1===(null===(o=this.layer)||void 0===o||null===(o=o.capabilities)||void 0===o||null===(o=o.exportMap)||void 0===o?void 0:o[t]))return void this._logLockedError(e,"capability not available 'layer.capabilities.exportMap.".concat(t,"'"));if(i&&!1===(null===(s=this.capabilities)||void 0===s?void 0:s.exportMap[i]))return void this._logLockedError(e,"capability not available 'capabilities.exportMap.".concat(i,"'"))}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==l&&a!==r&&n&&n.emit&&n.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}},{key:"_handleSublayersChange",value:function(e,r){var t=this;r&&(r.forEach((function(e){e.parent=null,e.layer=null})),this.removeAllHandles()),e&&(e.forEach((function(e){e.parent=t,e.layer=t.layer})),this.addHandles([e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t.layer})),e.on("after-remove",(function(e){var r=e.item;r.parent=null,r.layer=null})),e.on("before-changes",(function(e){var r,i=null===(r=t.layer)||void 0===r||null===(r=r.capabilities)||void 0===r||null===(r=r.exportMap)||void 0===r?void 0:r.supportsSublayersChanges;null==i||i||(_.Z.getLogger(t).error(new m.Z("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:t,layer:t.layer})),e.preventDefault())}))]))}},{key:"_logLockedError",value:function(e,r){var t=this.layer,i=this.declaredClass;_.Z.getLogger(i).error(new m.Z("sublayer:locked","Property '".concat(String(e),"' can't be changed on Sublayer from the layer '").concat(null===t||void 0===t?void 0:t.id,"'"),{reason:r,sublayer:this,layer:t}))}},{key:"_getLayerDomain",value:function(e){var r=this.fieldsIndex.get(e);return r?r.domain:null}}]),d}((0,x.R)((0,S.IG)(w.Z)));ie.test={isMapImageLayerOverridePolicy:function(e){return e===$||e===X},isTileImageLayerOverridePolicy:function(e){return e===Y}},(0,d._)([(0,Z.Cb)({readOnly:!0})],ie.prototype,"capabilities",void 0),(0,d._)([(0,C.r)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],ie.prototype,"readCapabilities",null),(0,d._)([(0,Z.Cb)()],ie.prototype,"defaultPopupTemplate",null),(0,d._)([(0,Z.Cb)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:X}}})],ie.prototype,"definitionExpression",null),(0,d._)([(0,Z.Cb)({readOnly:!0})],ie.prototype,"effectiveScaleRange",null),(0,d._)([(0,C.r)("service","maxScaleRange",["minScale","maxScale"])],ie.prototype,"readMaxScaleRange",null),(0,d._)([(0,Z.Cb)({type:[V.Z],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],ie.prototype,"fields",void 0),(0,d._)([(0,Z.Cb)({readOnly:!0})],ie.prototype,"fieldsIndex",null),(0,d._)([(0,Z.Cb)({type:q.Z,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:X},origins:{"web-scene":{read:!1,write:!1}}}})],ie.prototype,"floorInfo",null),(0,d._)([(0,Z.Cb)({type:H.Z,json:{read:{source:"layerDefinition.extent"}}})],ie.prototype,"fullExtent",void 0),(0,d._)([(0,Z.Cb)({type:z.M.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:z.M.read}}}}})],ie.prototype,"geometryType",void 0),(0,d._)([(0,Z.Cb)({type:String})],ie.prototype,"globalIdField",void 0),(0,d._)([(0,C.r)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],ie.prototype,"readGlobalIdFieldFromService",null),(0,d._)([(0,Z.Cb)({type:D.z8,json:{write:{ignoreOrigin:!0}}})],ie.prototype,"id",null),(0,d._)([(0,Z.Cb)({value:null,type:[N.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:$}}})],ie.prototype,"labelingInfo",null),(0,d._)([(0,T.c)("labelingInfo")],ie.prototype,"writeLabelingInfo",null),(0,d._)([(0,Z.Cb)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:$}}})],ie.prototype,"labelsVisible",null),(0,d._)([(0,Z.Cb)({value:null})],ie.prototype,"layer",null),(0,d._)([(0,Z.Cb)({type:String,json:{write:{overridePolicy:Y}}})],ie.prototype,"layerItemId",void 0),(0,d._)([(0,Z.Cb)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:ee}}})],ie.prototype,"legendEnabled",void 0),(0,d._)([(0,Z.Cb)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],ie.prototype,"listMode",null),(0,d._)([(0,Z.Cb)({type:Number,value:0,json:{write:{overridePolicy:$}}})],ie.prototype,"minScale",null),(0,d._)([(0,C.r)("minScale",["minScale","layerDefinition.minScale"])],ie.prototype,"readMinScale",null),(0,d._)([(0,Z.Cb)({type:Number,value:0,json:{write:{overridePolicy:$}}})],ie.prototype,"maxScale",null),(0,d._)([(0,C.r)("maxScale",["maxScale","layerDefinition.maxScale"])],ie.prototype,"readMaxScale",null),(0,d._)([(0,Z.Cb)({type:String})],ie.prototype,"objectIdField",void 0),(0,d._)([(0,C.r)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],ie.prototype,"readObjectIdFieldFromService",null),(0,d._)([(0,Z.Cb)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:$}}})],ie.prototype,"opacity",null),(0,d._)([(0,C.r)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],ie.prototype,"readOpacity",null),(0,d._)([(0,T.c)("opacity")],ie.prototype,"writeOpacity",null),(0,d._)([(0,Z.Cb)({json:{type:D.z8,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:$}}})],ie.prototype,"parent",void 0),(0,d._)([(0,T.c)("parent")],ie.prototype,"writeParent",null),(0,d._)([(0,Z.Cb)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,r){return!r.disablePopup}},write:{target:"disablePopup",overridePolicy:ee,writer:function(e,r,t){r[t]=!e}}}})],ie.prototype,"popupEnabled",void 0),(0,d._)([(0,Z.Cb)({type:p.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:ee}}})],ie.prototype,"popupTemplate",void 0),(0,d._)([(0,Z.Cb)({readOnly:!0})],ie.prototype,"queryTask",null),(0,d._)([(0,Z.Cb)({types:f.A,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:$},origins:{"web-scene":{types:f.o,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:$}}}}})],ie.prototype,"renderer",null),(0,d._)([(0,Z.Cb)({types:{key:"type",base:null,typeMap:{"data-layer":B.n,"map-layer":J.R}},cast:function(e){if(e){if("mapLayerId"in e)return(0,D.TJ)(J.R,e);if("dataSource"in e)return(0,D.TJ)(B.n,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:$}}})],ie.prototype,"source",null),(0,d._)([(0,Z.Cb)()],ie.prototype,"sourceJSON",void 0),(0,d._)([(0,Z.Cb)({value:null,json:{type:[D.z8],write:{target:"subLayerIds",allowNull:!0,overridePolicy:$}}})],ie.prototype,"sublayers",null),(0,d._)([(0,L.p)("sublayers")],ie.prototype,"castSublayers",null),(0,d._)([(0,T.c)("sublayers")],ie.prototype,"writeSublayers",null),(0,d._)([(0,Z.Cb)({type:String,json:{name:"name",write:{overridePolicy:ee}}})],ie.prototype,"title",void 0),(0,d._)([(0,C.r)("service","title",["name","layerDefinition.name"])],ie.prototype,"readTitle",null),(0,d._)([(0,Z.Cb)({type:String})],ie.prototype,"typeIdField",void 0),(0,d._)([(0,Z.Cb)({json:{read:!1},readOnly:!0,value:"sublayer"})],ie.prototype,"type",void 0),(0,d._)([(0,C.r)("typeIdField",["layerDefinition.typeIdField"])],ie.prototype,"readTypeIdField",null),(0,d._)([(0,Z.Cb)({type:[M.Z],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],ie.prototype,"types",void 0),(0,d._)([(0,Z.Cb)({type:String,json:{name:"layerUrl",write:{overridePolicy:Y}}})],ie.prototype,"url",null),(0,d._)([(0,Z.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:$}}})],ie.prototype,"visible",null),(0,d._)([(0,T.c)("visible")],ie.prototype,"writeVisible",null);var ne=ie=i=(0,d._)([(0,O.j)("esri.layers.support.Sublayer")],ie)},83690:function(e,r,t){t.d(r,{V:function(){return u},g:function(){return o}});var i=t(74165),n=t(15861),a=t(10064),l=t(66978);function o(e,r,t){return s.apply(this,arguments)}function s(){return s=(0,n.Z)((0,i.Z)().mark((function e(r,t,n){var o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,createImageBitmap(r);case 3:o=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new a.Z("request:server","Unable to load ".concat(t),{url:t,error:e.t0});case 9:return e.abrupt("return",((0,l.k_)(n),o));case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),s.apply(this,arguments)}function u(e,r,t,i,n){return c.apply(this,arguments)}function c(){return c=(0,n.Z)((0,i.Z)().mark((function e(r,t,n,o,s){var u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,createImageBitmap(r);case 3:u=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new a.Z("request:server","Unable to load tile ".concat(t,"/").concat(n,"/").concat(o),{error:e.t0,level:t,row:n,col:o});case 9:return e.abrupt("return",((0,l.k_)(s),u));case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),c.apply(this,arguments)}},58132:function(e,r,t){t.d(r,{FN:function(){return l},QV:function(){return a},ac:function(){return s}});var i=t(37762),n=t(25265);function a(e,r,t){return r.flatten((function(e){return e.sublayers})).length!==e.length||(!!e.some((function(e){return e.originIdOf("minScale")>t||e.originIdOf("maxScale")>t||e.originIdOf("renderer")>t||e.originIdOf("labelingInfo")>t||e.originIdOf("opacity")>t||e.originIdOf("labelsVisible")>t||e.originIdOf("source")>t}))||!o(e,r))}function l(e,r,t){return!!e.some((function(e){var r=e.source;return!(!r||"map-layer"===r.type&&r.mapLayerId===e.id&&(null==r.gdbVersion||r.gdbVersion===t))||e.originIdOf("renderer")>n.s3.SERVICE||e.originIdOf("labelingInfo")>n.s3.SERVICE||e.originIdOf("opacity")>n.s3.SERVICE||e.originIdOf("labelsVisible")>n.s3.SERVICE}))||!o(e,r)}function o(e,r){if(null===e||void 0===e||!e.length||null==r)return!0;var t=r.slice().reverse().flatten((function(e){var r=e.sublayers;return r&&r.toArray().reverse()})).map((function(e){return e.id})).toArray();if(e.length>t.length)return!1;var n,a=0,l=t.length,o=(0,i.Z)(e);try{for(o.s();!(n=o.n()).done;){for(var s=n.value.id;a<l&&t[a]!==s;)a++;if(a>=l)return!1}}catch(u){o.e(u)}finally{o.f()}return!0}function s(e){return!!e&&e.some((function(e){var r;return null!=e.minScale||null!=(null===(r=e.layerDefinition)||void 0===r?void 0:r.minScale)}))}}}]);
//# sourceMappingURL=680.ea74ad11.chunk.js.map