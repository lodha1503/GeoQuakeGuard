"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[9200],{89200:function(e,t,r){r.r(t),r.d(t,{default:function(){return L}});var l,n=r(74165),a=r(15861),o=r(37762),i=r(1413),s=r(15671),u=r(43144),p=r(60136),c=r(29388),v=r(27366),y=(r(59486),r(76200)),f=r(10064),h=r(97642),d=r(643),m=r(35995),w=r(49861),b=(r(25243),r(63780),r(93169),r(38511)),Z=r(69912),g=r(31201),T=r(30651),_=r(6693),k=r(6061),C=r(29598),x=r(71684),R=r(56811),j=r(83690),S=r(59068),I=r(22824),P=r(4961),U=r(53866),M=r(78952),W=r(585),D=l=function(e){(0,p.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var l=arguments.length,n=new Array(l),a=0;a<l;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).copyright="",e.fullExtent=new U.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,M.Z.WebMercator),e.legendEnabled=!1,e.isReference=null,e.popupEnabled=!1,e.spatialReference=M.Z.WebMercator,e.subDomains=null,e.tileInfo=new I.Z({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new W.Z({x:-20037508.342787,y:20037508.342787,spatialReference:M.Z.WebMercator}),spatialReference:M.Z.WebMercator,lods:[new S.Z({level:0,scale:591657527.591555,resolution:156543.033928}),new S.Z({level:1,scale:295828763.795777,resolution:78271.5169639999}),new S.Z({level:2,scale:147914381.897889,resolution:39135.7584820001}),new S.Z({level:3,scale:73957190.948944,resolution:19567.8792409999}),new S.Z({level:4,scale:36978595.474472,resolution:9783.93962049996}),new S.Z({level:5,scale:18489297.737236,resolution:4891.96981024998}),new S.Z({level:6,scale:9244648.868618,resolution:2445.98490512499}),new S.Z({level:7,scale:4622324.434309,resolution:1222.99245256249}),new S.Z({level:8,scale:2311162.217155,resolution:611.49622628138}),new S.Z({level:9,scale:1155581.108577,resolution:305.748113140558}),new S.Z({level:10,scale:577790.554289,resolution:152.874056570411}),new S.Z({level:11,scale:288895.277144,resolution:76.4370282850732}),new S.Z({level:12,scale:144447.638572,resolution:38.2185141425366}),new S.Z({level:13,scale:72223.819286,resolution:19.1092570712683}),new S.Z({level:14,scale:36111.909643,resolution:9.55462853563415}),new S.Z({level:15,scale:18055.954822,resolution:4.77731426794937}),new S.Z({level:16,scale:9027.977411,resolution:2.38865713397468}),new S.Z({level:17,scale:4513.988705,resolution:1.19432856685505}),new S.Z({level:18,scale:2256.994353,resolution:.597164283559817}),new S.Z({level:19,scale:1128.497176,resolution:.298582141647617}),new S.Z({level:20,scale:564.248588,resolution:.14929107082380833}),new S.Z({level:21,scale:282.124294,resolution:.07464553541190416}),new S.Z({level:22,scale:141.062147,resolution:.03732276770595208}),new S.Z({level:23,scale:70.5310735,resolution:.01866138385297604})]}),e.type="web-tile",e.urlTemplate=null,e.wmtsInfo=null,e}return(0,u.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,i.Z)({urlTemplate:e},t):e}},{key:"load",value:function(e){var t=this,r=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((function(){var e="";if(t.urlTemplate)if(t.spatialReference.equals(t.tileInfo.spatialReference)){var r,l=new m.R9(t.urlTemplate);!(t.subDomains&&t.subDomains.length>0)&&(null===(r=l.authority)||void 0===r?void 0:r.includes("{subDomain}"))&&(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new f.Z("web-tile-layer:load","WebTileLayer (title: '".concat(t.title,"', id: '").concat(t.id,"') ").concat(e))}));return this.addResolvingPromise(r),Promise.resolve(this)}},{key:"levelValues",get:function(){var e=[];if(!this.tileInfo)return null;var t,r=(0,o.Z)(this.tileInfo.lods);try{for(r.s();!(t=r.n()).done;){var l=t.value;e[l.level]=l.levelValue||l.level}}catch(n){r.e(n)}finally{r.f()}return e}},{key:"readSpatialReference",value:function(e,t){var r;return e||M.Z.fromJSON(null===(r=t.fullExtent)||void 0===r?void 0:r.spatialReference)}},{key:"tileServers",get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,r=this.subDomains,l=new m.R9(t),n=l.scheme?l.scheme+"://":"//",a=n+l.authority+"/",i=l.authority;if(null!==i&&void 0!==i&&i.includes("{subDomain}")){if(r&&r.length>0&&i.split(".").length>1){var s,u=(0,o.Z)(r);try{for(u.s();!(s=u.n()).done;){var p=s.value;e.push(n+i.replaceAll(/\{subDomain\}/gi,p)+"/")}}catch(c){u.e(c)}finally{u.f()}}}else e.push(a);return e.map(m.xs)}},{key:"urlPath",get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new m.R9(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}},{key:"readUrlTemplate",value:function(e,t){return e||t.templateUrl}},{key:"writeUrlTemplate",value:function(e,t){(0,m.oC)(e)&&(e="https:"+e),e&&(e=e.replaceAll(/\{z\}/gi,"{level}").replaceAll(/\{x\}/gi,"{col}").replaceAll(/\{y\}/gi,"{row}"),e=(0,m.Fv)(e)),t.templateUrl=e}},{key:"fetchTile",value:function(e,t,r){var l=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).signal,n=this.getTileUrl(e,t,r),a={responseType:"image",signal:l,query:(0,i.Z)({},this.refreshParameters)};return(0,y.Z)(n,a).then((function(e){return e.data}))}},{key:"fetchImageBitmapTile",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r,a){var o,s,u,p,c,v,f,h=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=(o=h.length>3&&void 0!==h[3]?h[3]:{}).signal,this.fetchTile===l.prototype.fetchTile){e.next=7;break}return e.next=5,this.fetchTile(t,r,a,o);case 5:return u=e.sent,e.abrupt("return",(0,j.V)(u,t,r,a,s));case 7:return p=this.getTileUrl(t,r,a),c={responseType:"blob",signal:s,query:(0,i.Z)({},this.refreshParameters)},e.next=11,(0,y.Z)(p,c);case 11:return v=e.sent,f=v.data,e.abrupt("return",(0,j.V)(f,t,r,a,s));case 14:case"end":return e.stop()}}),e,this)})));return function(t,r,l){return e.apply(this,arguments)}}()},{key:"getTileUrl",value:function(e,t,r){var l=this.levelValues,n=this.tileServers,a=this.urlPath;if(!l||!n||!a)return"";var o=l[e];return n[t%n.length]+(0,d.gx)(a,{level:o,z:o,col:r,x:r,row:t,y:t})}}]),r}((0,_.h)((0,x.Q)((0,R.M)((0,k.q)((0,C.I)((0,h.R)(T.Z)))))));(0,v._)([(0,w.Cb)({type:String,value:"",json:{write:!0}})],D.prototype,"copyright",void 0),(0,v._)([(0,w.Cb)({type:U.Z,json:{write:!0},nonNullable:!0})],D.prototype,"fullExtent",void 0),(0,v._)([(0,w.Cb)({readOnly:!0,json:{read:!1,write:!1}})],D.prototype,"legendEnabled",void 0),(0,v._)([(0,w.Cb)({type:["show","hide"]})],D.prototype,"listMode",void 0),(0,v._)([(0,w.Cb)({json:{read:!0,write:!0}})],D.prototype,"blendMode",void 0),(0,v._)([(0,w.Cb)()],D.prototype,"levelValues",null),(0,v._)([(0,w.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],D.prototype,"isReference",void 0),(0,v._)([(0,w.Cb)({type:["WebTiledLayer"],value:"WebTiledLayer"})],D.prototype,"operationalLayerType",void 0),(0,v._)([(0,w.Cb)({readOnly:!0,json:{read:!1,write:!1}})],D.prototype,"popupEnabled",void 0),(0,v._)([(0,w.Cb)({type:M.Z})],D.prototype,"spatialReference",void 0),(0,v._)([(0,b.r)("spatialReference",["spatialReference","fullExtent.spatialReference"])],D.prototype,"readSpatialReference",null),(0,v._)([(0,w.Cb)({type:[String],json:{write:!0}})],D.prototype,"subDomains",void 0),(0,v._)([(0,w.Cb)({type:I.Z,json:{write:!0}})],D.prototype,"tileInfo",void 0),(0,v._)([(0,w.Cb)({readOnly:!0})],D.prototype,"tileServers",null),(0,v._)([(0,w.Cb)({json:{read:!1}})],D.prototype,"type",void 0),(0,v._)([(0,w.Cb)()],D.prototype,"urlPath",null),(0,v._)([(0,w.Cb)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],D.prototype,"urlTemplate",void 0),(0,v._)([(0,b.r)("urlTemplate",["urlTemplate","templateUrl"])],D.prototype,"readUrlTemplate",null),(0,v._)([(0,g.c)("urlTemplate",{templateUrl:{type:String}})],D.prototype,"writeUrlTemplate",null),(0,v._)([(0,w.Cb)({type:P.B,json:{write:!0}})],D.prototype,"wmtsInfo",void 0);var L=D=l=(0,v._)([(0,Z.j)("esri.layers.WebTileLayer")],D)},4961:function(e,t,r){r.d(t,{B:function(){return y}});var l,n=r(15671),a=r(43144),o=r(60136),i=r(29388),s=r(27366),u=r(46784),p=r(84652),c=r(49861),v=(r(25243),r(69912)),y=l=function(e){(0,o.Z)(r,e);var t=(0,i.Z)(r);function r(e){return(0,n.Z)(this,r),t.call(this,e)}return(0,a.Z)(r,[{key:"clone",value:function(){return new l({customLayerParameters:(0,p.d9)(this.customLayerParameters),customParameters:(0,p.d9)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}}]),r}(u.wq);(0,s._)([(0,c.Cb)({json:{type:Object,write:!0}})],y.prototype,"customLayerParameters",void 0),(0,s._)([(0,c.Cb)({json:{type:Object,write:!0}})],y.prototype,"customParameters",void 0),(0,s._)([(0,c.Cb)({type:String,json:{write:!0}})],y.prototype,"layerIdentifier",void 0),(0,s._)([(0,c.Cb)({type:String,json:{write:!0}})],y.prototype,"tileMatrixSet",void 0),(0,s._)([(0,c.Cb)({type:String,json:{write:!0}})],y.prototype,"url",void 0),y=l=(0,s._)([(0,v.j)("esri.layer.support.WMTSLayerInfo")],y)},83690:function(e,t,r){r.d(t,{V:function(){return u},g:function(){return i}});var l=r(74165),n=r(15861),a=r(10064),o=r(66978);function i(e,t,r){return s.apply(this,arguments)}function s(){return s=(0,n.Z)((0,l.Z)().mark((function e(t,r,n){var i;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,createImageBitmap(t);case 3:i=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new a.Z("request:server","Unable to load ".concat(r),{url:r,error:e.t0});case 9:return e.abrupt("return",((0,o.k_)(n),i));case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),s.apply(this,arguments)}function u(e,t,r,l,n){return p.apply(this,arguments)}function p(){return p=(0,n.Z)((0,l.Z)().mark((function e(t,r,n,i,s){var u;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,createImageBitmap(t);case 3:u=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new a.Z("request:server","Unable to load tile ".concat(r,"/").concat(n,"/").concat(i),{error:e.t0,level:r,row:n,col:i});case 9:return e.abrupt("return",((0,o.k_)(s),u));case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),p.apply(this,arguments)}}}]);
//# sourceMappingURL=9200.9b58c832.chunk.js.map