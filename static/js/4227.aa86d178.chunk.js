"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[4227],{82582:function(e,t,r){r.d(t,{dp:function(){return o},o2:function(){return u},yZ:function(){return l}});var n=r(16889),a=r(68860),i=96;function l(e,t){var r=t||e.extent,n=e.width,l=(0,a.c9)(null===r||void 0===r?void 0:r.spatialReference);return r&&n?r.width/n*l*a.hd*i:0}function o(e,t){return e/((0,a.c9)(t)*a.hd*i)}function u(e,t,r){return function(e,t){return 0===t||(0,n.W8)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,n.W8)(e,t)||e>t}(e,r)}},84227:function(e,t,r){r.r(t),r.d(t,{default:function(){return Re}});var n,a=r(74165),i=r(15861),l=r(4942),o=r(1413),u=r(37762),s=r(15671),c=r(43144),p=r(97326),f=r(60136),d=r(29388),y=r(27366),v=r(42265),m=r(52639),h=r(44055),b=r(76200),g=r(40281),x=r(77178),w=r(43404),_=r(84652),Z=r(97642),S=r(66978),C=r(94172),N=r(35995),E=r(49861),I=r(25243),F=r(38511),k=r(69912),O=r(31201),R=r(18987),P=r(53866),A=r(78952),L=r(82582),M=r(92975),U=r(30651),j=r(6693),T=r(6061),q=r(29598),W=r(71684),B=r(56811),V=r(99063),D=r(86685),G=r(25899),H=r(45948),X=r(42388),$=r(83690),J=r(79056),Q=r(89125),Y=r(63780),z=(r(93169),0),K=n=function(e){(0,f.Z)(r,e);var t=(0,d.Z)(r);function r(e){var n;return(0,s.Z)(this,r),(n=t.call(this,e)).description=null,n.dimensions=null,n.fullExtent=null,n.fullExtents=null,n.legendUrl=null,n.legendEnabled=!0,n.layer=null,n.maxScale=0,n.minScale=0,n.name=null,n.parent=null,n.popupEnabled=!1,n.queryable=!1,n.sublayers=null,n.spatialReferences=null,n.title=null,n.addHandles([(0,C.on)((function(){return n.sublayers}),"after-add",(function(e){var t=e.item;t.parent=(0,p.Z)(n),t.layer=n.layer}),C.Z_),(0,C.on)((function(){return n.sublayers}),"after-remove",(function(e){var t=e.item;t.layer=t.parent=null}),C.Z_),(0,C.YP)((function(){return n.sublayers}),(function(e,t){if(t){var r,a=(0,u.Z)(t);try{for(a.s();!(r=a.n()).done;){var i=r.value;i.layer=i.parent=null}}catch(c){a.e(c)}finally{a.f()}}if(e){var l,o=(0,u.Z)(e);try{for(o.s();!(l=o.n()).done;){var s=l.value;s.parent=(0,p.Z)(n),s.layer=n.layer}}catch(c){o.e(c)}finally{o.f()}}}),C.Z_),(0,C.YP)((function(){return n.layer}),(function(e){if(n.sublayers){var t,r=(0,u.Z)(n.sublayers);try{for(r.s();!(t=r.n()).done;){t.value.layer=e}}catch(a){r.e(a)}finally{r.f()}}}),C.Z_)]),n}return(0,c.Z)(r,[{key:"id",get:function(){var e=this._get("id");return null!==e&&void 0!==e?e:z++},set:function(e){this._set("id",e)}},{key:"readLegendUrl",value:function(e,t){var r,n;return null!==(r=null!==(n=t.legendUrl)&&void 0!==n?n:t.legendURL)&&void 0!==r?r:null}},{key:"effectiveScaleRange",get:function(){return{minScale:this.minScale,maxScale:this.maxScale}}},{key:"castSublayers",value:function(e){return(0,I.se)(g.Z.ofType(n),e)}},{key:"visible",set:function(e){this._setAndNotifyLayer("visible",e)}},{key:"clone",value:function(){var e,t,r,a,i=new n;return this.hasOwnProperty("description")&&(i.description=this.description),this.hasOwnProperty("fullExtent")&&(i.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(i.fullExtents=null!==(e=null===(t=this.fullExtents)||void 0===t?void 0:t.map((function(e){return e.clone()})))&&void 0!==e?e:null),this.hasOwnProperty("legendUrl")&&(i.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(i.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(i.layer=this.layer),this.hasOwnProperty("name")&&(i.name=this.name),this.hasOwnProperty("parent")&&(i.parent=this.parent),this.hasOwnProperty("queryable")&&(i.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(i.sublayers=null===(r=this.sublayers)||void 0===r?void 0:r.map((function(e){return e.clone()}))),this.hasOwnProperty("spatialReferences")&&(i.spatialReferences=null===(a=this.spatialReferences)||void 0===a?void 0:a.map((function(e){return e}))),this.hasOwnProperty("visible")&&(i.visible=this.visible),this.hasOwnProperty("title")&&(i.title=this.title),i}},{key:"_setAndNotifyLayer",value:function(e,t){var r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}}]),r}((0,J.IG)(Z.w));(0,y._)([(0,E.Cb)()],K.prototype,"description",void 0),(0,y._)([(0,E.Cb)({readOnly:!0})],K.prototype,"dimensions",void 0),(0,y._)([(0,E.Cb)({type:P.Z,json:{name:"extent"}})],K.prototype,"fullExtent",void 0),(0,y._)([(0,E.Cb)()],K.prototype,"fullExtents",void 0),(0,y._)([(0,E.Cb)({type:Number,json:{write:{enabled:!1,overridePolicy:function(){return{ignoreOrigin:!0,enabled:!0}}}}})],K.prototype,"id",null),(0,y._)([(0,E.Cb)({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],K.prototype,"legendUrl",void 0),(0,y._)([(0,F.r)("legendUrl",["legendUrl","legendURL"])],K.prototype,"readLegendUrl",null),(0,y._)([(0,E.Cb)({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],K.prototype,"legendEnabled",void 0),(0,y._)([(0,E.Cb)()],K.prototype,"layer",void 0),(0,y._)([(0,E.Cb)()],K.prototype,"maxScale",void 0),(0,y._)([(0,E.Cb)()],K.prototype,"minScale",void 0),(0,y._)([(0,E.Cb)({readOnly:!0})],K.prototype,"effectiveScaleRange",null),(0,y._)([(0,E.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],K.prototype,"name",void 0),(0,y._)([(0,E.Cb)()],K.prototype,"parent",void 0),(0,y._)([(0,E.Cb)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],K.prototype,"popupEnabled",void 0),(0,y._)([(0,E.Cb)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],K.prototype,"queryable",void 0),(0,y._)([(0,E.Cb)()],K.prototype,"sublayers",void 0),(0,y._)([(0,Q.p)("sublayers")],K.prototype,"castSublayers",null),(0,y._)([(0,E.Cb)({type:[Number],json:{read:{source:"spatialReferences"}}})],K.prototype,"spatialReferences",void 0),(0,y._)([(0,E.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],K.prototype,"title",void 0),(0,y._)([(0,E.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],K.prototype,"visible",null);var ee=K=n=(0,y._)([(0,k.j)("esri.layers.support.WMSSublayer")],K),te=r(93433),re=r(10064),ne={84:4326,83:4269,27:4267};function ae(e){var t,r,n;if(!e)return null;var a={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));var i=e.documentElement;if("ServiceExceptionReport"===i.nodeName){var l=Array.prototype.slice.call(i.childNodes).map((function(e){return e.textContent})).join("\r\n");throw new re.Z("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",l)}var o=ue("Capability",i),u=ue("Service",i),s=o&&ue("Request",o);if(!o||!u||!s)return null;var c=ue("Layer",o);if(!c)return null;var p="WMS_Capabilities"===i.nodeName||"WMT_MS_Capabilities"===i.nodeName?i.getAttribute("version"):"1.3.0",f=ce("Title",u,"")||ce("Name",u,""),d=ce("AccessConstraints",u,""),y=/^none$/i.test(d)?"":d,v=ce("Abstract",u,""),m=parseInt(ce("MaxWidth",u,"5000"),10),h=parseInt(ce("MaxHeight",u,"5000"),10),b=de(s,"GetMap"),g=fe(s,"GetMap"),x=ve(c,p,a);if(!x)return null;var w,_=0,Z=Array.prototype.slice.call(o.childNodes),S=null!==(t=x.sublayers)&&void 0!==t?t:[],C=function(e){null!=e&&S.push(e)};Z.forEach((function(e){"Layer"===e.nodeName&&(0===_?w=e:1===_?(x.name&&(x.name="",C(ve(w,p,a))),C(ve(e,p,a))):C(ve(e,p,a)),_++)}));var N=x.sublayers,E=x.extent,I=null!==(r=x.fullExtents)&&void 0!==r?r:[];if(N||(N=[]),0===N.length&&N.push(x),!E){var F=new P.Z(N[0].extent);x.extent=F.toJSON(),E=x.extent}var k=x.spatialReferences.length>0?x.spatialReferences:ie(x),O=fe(s,"GetFeatureInfo"),R=O?de(s,"GetFeatureInfo"):null,A=le(N),L=x.minScale||0,M=x.maxScale||0,U=null!==(n=x.dimensions)&&void 0!==n?n:[],j=A.reduce((function(e,t){var r;return e.concat(null!==(r=t.dimensions)&&void 0!==r?r:[])}),[]),T=U.concat(j).filter(be),q=null;if(T.length){var W=T.map((function(e){var t=e.extent;return function(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}(t)?t.map((function(e){return e.getTime()})):null===t||void 0===t?void 0:t.map((function(e){return[e.min.getTime(),e.max.getTime()]}))})).flat(2).filter(Y.pC);q={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min.apply(Math,(0,te.Z)(W)),Math.max.apply(Math,(0,te.Z)(W))]}}return{copyright:y,description:v,dimensions:U,extent:E,fullExtents:I,featureInfoFormats:R,featureInfoUrl:O,mapUrl:g,maxWidth:m,maxHeight:h,maxScale:M,minScale:L,layers:A,spatialReferences:k,supportedImageFormatTypes:b,timeInfo:q,title:f,version:p}}function ie(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers){var t,r=(0,u.Z)(e.sublayers);try{for(r.s();!(t=r.n()).done;){var n=ie(t.value);if(n.length>0)return n}}catch(a){r.e(a)}finally{r.f()}}return[]}function le(e){var t,r=[],n=(0,u.Z)(e);try{for(n.s();!(t=n.n()).done;){var a,i=t.value;r.push(i),(null===(a=i.sublayers)||void 0===a?void 0:a.length)&&(r=r.concat(le(i.sublayers)),delete i.sublayers)}}catch(l){n.e(l)}finally{n.f()}return r}function oe(e,t,r){var n;return null!==(n=t.getAttribute(e))&&void 0!==n?n:r}function ue(e,t){for(var r=0;r<t.childNodes.length;r++){var n=t.childNodes[r];if(me(n)&&n.nodeName===e)return n}return null}function se(e,t){if(null==t)return[];for(var r=[],n=0;n<t.childNodes.length;n++){var a=t.childNodes[n];me(a)&&a.nodeName===e&&r.push(a)}return r}function ce(e,t,r){var n,a;return null!==(n=null===(a=ue(e,t))||void 0===a?void 0:a.textContent)&&void 0!==n?n:r}function pe(e,t,r){if(!e)return null;var n,a,i,l,o=parseFloat(e.getAttribute("minx")),u=parseFloat(e.getAttribute("miny")),s=parseFloat(e.getAttribute("maxx")),c=parseFloat(e.getAttribute("maxy"));r?(n=isNaN(u)?-Number.MAX_VALUE:u,a=isNaN(o)?-Number.MAX_VALUE:o,i=isNaN(c)?Number.MAX_VALUE:c,l=isNaN(s)?Number.MAX_VALUE:s):(n=isNaN(o)?-Number.MAX_VALUE:o,a=isNaN(u)?-Number.MAX_VALUE:u,i=isNaN(s)?Number.MAX_VALUE:s,l=isNaN(c)?Number.MAX_VALUE:c);var p=new A.Z({wkid:t});return new P.Z({xmin:n,ymin:a,xmax:i,ymax:l,spatialReference:p})}function fe(e,t){var r=ue(t,e);if(r){var n=ue("DCPType",r);if(n){var a=ue("HTTP",n);if(a){var i=ue("Get",a);if(i){var l=function(e,t,r,n){var a=ue(e,r);return a?oe(t,a,n):n}("OnlineResource","xlink:href",i,null);if(l)return l.indexOf("&")===l.length-1&&(l=l.substring(0,l.length-1)),function(e,t){var r=[],n=(0,N.mN)(e);for(var a in n.query)n.query.hasOwnProperty(a)&&(t.includes(a.toLowerCase())||r.push(a+"="+n.query[a]));return n.path+(r.length?"?"+r.join("&"):"")}(l,["service","request"])}}}}return null}function de(e,t){var r=se("Operation",e);if(!r.length)return se("Format",ue(t,e)).map((function(e){return e.textContent})).filter(Y.pC);var n,a=[],i=(0,u.Z)(r);try{for(i.s();!(n=i.n()).done;){var l=n.value;if(l.getAttribute("name")===t){var o,s=se("Format",l),c=(0,u.Z)(s);try{for(c.s();!(o=c.n()).done;){var p=o.value.textContent;null!=p&&a.push(p)}}catch(f){c.e(f)}finally{c.f()}}}}catch(f){i.e(f)}finally{i.f()}return a}function ye(e,t,r){var n=ue(t,e);if(!n)return r;var a=n.textContent;if(null==a||""===a)return r;var i=Number(a);return isNaN(i)?r:i}function ve(e,t,r){var n;if(!e)return null;var a={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},i=ue("LatLonBoundingBox",e),l=ue("EX_GeographicBoundingBox",e),o=null;i&&(o=pe(i,4326)),l&&((o=new P.Z(0,0,0,0,new A.Z({wkid:4326}))).xmin=parseFloat(ce("westBoundLongitude",l,"0")),o.ymin=parseFloat(ce("southBoundLatitude",l,"0")),o.xmax=parseFloat(ce("eastBoundLongitude",l,"0")),o.ymax=parseFloat(ce("northBoundLatitude",l,"0"))),i||l||(o=new P.Z(-180,-90,180,90,new A.Z({wkid:4326}))),a.minScale=ye(e,"MaxScaleDenominator",0),a.maxScale=ye(e,"MinScaleDenominator",0);var u=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((function(e){if("Name"===e.nodeName)a.name=e.textContent||"";else if("Title"===e.nodeName)a.title=e.textContent||"";else if("Abstract"===e.nodeName)a.description=e.textContent||"";else if("BoundingBox"===e.nodeName){var n=e.getAttribute(u);if(n&&0===n.indexOf("EPSG:")){var i=parseInt(n.substring(5),10);0===i||isNaN(i)||o||(o="1.3.0"===t?pe(e,i,(0,D.A)(i)):pe(e,i))}var l=n&&n.indexOf(":");if(l&&l>-1){var s,c=parseInt(n.substring(l+1,n.length),10);0===c||isNaN(c)||(c=null!==(s=ne[c])&&void 0!==s?s:c);var p="1.3.0"===t?pe(e,c,(0,D.A)(c)):pe(e,c);p&&a.fullExtents&&a.fullExtents.push(p)}}else if(e.nodeName===u){var f,d;(null!==(f=null===(d=e.textContent)||void 0===d?void 0:d.split(" "))&&void 0!==f?f:[]).forEach((function(e){var t=e.includes(":")?parseInt(e.split(":")[1],10):parseInt(e,10);if(0!==t&&!isNaN(t)){var r,n=null!==(r=ne[t])&&void 0!==r?r:t;a.spatialReferences.includes(n)||a.spatialReferences.push(n)}}))}else if("Style"!==e.nodeName||a.legendUrl){if("Layer"===e.nodeName){var y=ve(e,t,r);y&&(y.parentLayerId=a.id,a.sublayers||(a.sublayers=[]),a.sublayers.push(y))}}else{var v=ue("LegendURL",e);if(v){var m=ue("OnlineResource",v);m&&(a.legendUrl=m.getAttribute("xlink:href"))}}})),a.extent=null===(n=o)||void 0===n?void 0:n.toJSON(),a.dimensions=se("Dimension",e).filter((function(e){return e.getAttribute("name")&&e.getAttribute("units")&&e.textContent})).map((function(e){var t,r,n=e.getAttribute("name"),a=e.getAttribute("units"),i=e.textContent,l=null!==(t=e.getAttribute("unitSymbol"))&&void 0!==t?t:void 0,o=null!==(r=e.getAttribute("default"))&&void 0!==r?r:void 0,u="0"!==oe("default",e,"0"),s="0"!==oe("nearestValue",e,"0"),c="0"!==oe("current",e,"0");return be({name:n,units:a})?{name:"time",units:"ISO8601",extent:we(i),default:we(o),multipleValues:u,nearestValue:s,current:c}:he({name:n,units:a})?{name:"elevation",units:a,extent:ge(i),unitSymbol:l,default:ge(o),multipleValues:u,nearestValue:s}:{name:n,units:a,extent:xe(i),unitSymbol:l,default:xe(o),multipleValues:u,nearestValue:s}})),a}function me(e){return e.nodeType===Node.ELEMENT_NODE}function he(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function be(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function ge(e){if(e){var t=e.includes("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter(Y.pC):r.map((function(e){return parseFloat(e)}))}}function xe(e){if(e){var t=e.includes("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter(Y.pC):r}}function we(e){if(e){var t=e.includes("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?_e(t[2]):void 0}})).filter(Y.pC):r.map((function(e){return new Date(e)}))}}function _e(e){var t=e.match(/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i);return t?{years:Ze(t[1]),months:Ze(t[2]),days:Ze(t[3]),hours:Ze(t[4]),minutes:Ze(t[5]),seconds:Ze(t[6])}:null}function Ze(e){if(!e)return 0;var t=e.match(/(?:\d+(?:\.|,)\d+|\d+)/);if(!t)return 0;var r=t[0].replace(",",".");return Number(r)}function Se(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}var Ce=new Set([102100,3857,102113,900913]),Ne=new Set([3395,54004]);var Ee=new w.X({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function Ie(e){return"text/html"===e}function Fe(e){return"text/plain"===e}var ke=function(e){(0,f.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).allSublayers=new x.Z({getCollections:function(){return[e.sublayers]},getChildrenFunction:function(e){return e.sublayers}}),e.customParameters=null,e.customLayerParameters=null,e.copyright=null,e.description=null,e.dimensions=null,e.fullExtent=null,e.fullExtents=null,e.featureInfoFormats=null,e.featureInfoUrl=null,e.fetchFeatureInfoFunction=null,e.imageFormat=null,e.imageMaxHeight=2048,e.imageMaxWidth=2048,e.imageTransparency=!0,e.legendEnabled=!0,e.mapUrl=null,e.isReference=null,e.operationalLayerType="WMS",e.spatialReference=null,e.spatialReferences=null,e.sublayers=null,e.type="wms",e.version=null,e.addHandles([(0,C.on)((function(){return e.sublayers}),"after-add",(function(t){var r=t.item;r.parent=r.layer=(0,p.Z)(e)}),C.Z_),(0,C.on)((function(){return e.sublayers}),"after-remove",(function(e){var t=e.item;t.layer=t.parent=null}),C.Z_),(0,C.YP)((function(){return e.sublayers}),(function(t,r){if(r){var n,a=(0,u.Z)(r);try{for(a.s();!(n=a.n()).done;){var i=n.value;i.layer=i.parent=null}}catch(c){a.e(c)}finally{a.f()}}if(t){var l,o=(0,u.Z)(t);try{for(o.s();!(l=o.n()).done;){var s=l.value;s.parent=s.layer=(0,p.Z)(e)}}catch(c){o.e(c)}finally{o.f()}}}),C.Z_)]),e}return(0,c.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,o.Z)({url:e},t):e}},{key:"destroy",value:function(){this.allSublayers.destroy()}},{key:"load",value:function(e){var t=this,r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(S.r9).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"readFullExtentFromItemOrMap",value:function(e,t){var r=t.extent;return r?new P.Z({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}},{key:"writeFullExtent",value:function(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}},{key:"featureInfoFormat",get:function(){var e,t;return null==this.featureInfoFormats?null:null!==(e=null!==(t=this.featureInfoFormats.find(Ie))&&void 0!==t?t:this.featureInfoFormats.find(Fe))&&void 0!==e?e:null},set:function(e){null==e?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(Ie(e)||Fe(e))&&this._override("featureInfoFormat",e)}},{key:"readImageFormat",value:function(e,t){var r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}},{key:"readSpatialReferenceFromItemOrDocument",value:function(e,t){return new A.Z(t.spatialReferences[0])}},{key:"writeSpatialReferences",value:function(e,t){var r,n=null===(r=this.spatialReference)||void 0===r?void 0:r.wkid;e&&n?(t.spatialReferences=e.filter((function(e){return e!==n})),t.spatialReferences.unshift(n)):t.spatialReferences=e}},{key:"readSublayersFromItemOrMap",value:function(e,t,r){return Oe(t.layers,r,t.visibleLayers)}},{key:"readSublayers",value:function(e,t,r){return Oe(t.layers,r)}},{key:"writeSublayers",value:function(e,t,r,n){t.layers=[];var a,i=new Map,l=e.flatten((function(e){var t=e.sublayers;return null!==t&&void 0!==t?t:[]})),s=(0,u.Z)(l);try{for(s.s();!(a=s.n()).done;){var c,p=a.value;if("number"==typeof(null===(c=p.parent)||void 0===c?void 0:c.id)){var f=i.get(p.parent.id);null!=f?f.push(p.id):i.set(p.parent.id,[p.id])}}}catch(x){s.e(x)}finally{s.f()}var d,y=(0,u.Z)(l);try{for(y.s();!(d=y.n()).done;){var v,m=d.value,h=(0,o.Z)({sublayer:m},n),b=m.write({parentLayerId:"number"==typeof(null===(v=m.parent)||void 0===v?void 0:v.id)?m.parent.id:-1},h);if(i.has(m.id)&&(b.sublayerIds=i.get(m.id)),!m.sublayers&&m.name){var g=m.write({},h);delete g.id,t.layers.push(g)}}}catch(x){y.e(x)}finally{y.f()}t.visibleLayers=l.filter((function(e){var t=e.visible,r=e.sublayers;return t&&!r})).map((function(e){return e.name})).toArray()}},{key:"url",set:function(e){if(e){var t=(0,N.mN)(e),r=t.path,n=t.query;for(var a in n)/^(request|service)$/i.test(a)&&delete n[a];var i=(0,N.fl)(r,null!==n&&void 0!==n?n:{});this._set("url",i)}else this._set("url",e)}},{key:"createExportImageParameters",value:function(e,t,r,n){var a,i=null!==(a=null===n||void 0===n?void 0:n.pixelRatio)&&void 0!==a?a:1,u=(0,L.yZ)({extent:e,width:t})*i,s=new X.j({layer:this,scale:u}),c=e.xmin,p=e.ymin,f=e.xmax,d=e.ymax,y=function(e,t){var r=e.wkid;return null==t?r:(null!=r&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),null!=r&&Ce.has(r)?t.find((function(e){return Ce.has(e)}))||t.find((function(e){return Ne.has(e)}))||102100:r)}(e.spatialReference,this.spatialReferences),v="1.3.0"===this.version&&(0,D.A)(y)?"".concat(p,",").concat(c,",").concat(d,",").concat(f):"".concat(c,",").concat(p,",").concat(f,",").concat(d),m=s.toJSON();return(0,o.Z)((0,l.Z)({bbox:v},"1.3.0"===this.version?"crs":"srs",null==y||isNaN(y)?void 0:"EPSG:"+y),m)}},{key:"fetchImage",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t,r,n,i){var l,u,s,c,p,f,d,y,v;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=this.mapUrl,(c=this.createExportImageParameters(t,r,n,i)).layers){e.next=4;break}return p=document.createElement("canvas"),e.abrupt("return",(p.width=r,p.height=n,p));case 4:return f=null===i||void 0===i||null===(l=i.timeExtent)||void 0===l?void 0:l.start,d=null===i||void 0===i||null===(u=i.timeExtent)||void 0===u?void 0:u.end,y=null!=f&&null!=d?f.getTime()===d.getTime()?Se(f):"".concat(Se(f),"/").concat(Se(d)):void 0,v={responseType:"image",query:this._mixCustomParameters((0,o.Z)((0,o.Z)({width:r,height:n},c),{},{time:y},this.refreshParameters)),signal:null===i||void 0===i?void 0:i.signal},e.abrupt("return",(0,b.Z)(null!==s&&void 0!==s?s:"",v).then((function(e){return e.data})));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r,n,a){return e.apply(this,arguments)}}()},{key:"fetchImageBitmap",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t,r,n,i){var l,u,s,c,p,f,d,y,v,m,h,g;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=null!==(l=this.mapUrl)&&void 0!==l?l:"",(p=this.createExportImageParameters(t,r,n,i)).layers){e.next=4;break}return f=document.createElement("canvas"),e.abrupt("return",(f.width=r,f.height=n,f));case 4:return d=null===i||void 0===i||null===(u=i.timeExtent)||void 0===u?void 0:u.start,y=null===i||void 0===i||null===(s=i.timeExtent)||void 0===s?void 0:s.end,v=null!=d&&null!=y?d.getTime()===y.getTime()?Se(d):"".concat(Se(d),"/").concat(Se(y)):void 0,m={responseType:"blob",query:this._mixCustomParameters((0,o.Z)((0,o.Z)({width:r,height:n},p),{},{time:v},this.refreshParameters)),signal:null===i||void 0===i?void 0:i.signal},e.next=10,(0,b.Z)(c,m);case 10:return h=e.sent,g=h.data,e.abrupt("return",(0,$.g)(g,c,null===i||void 0===i?void 0:i.signal));case 13:case"end":return e.stop()}}),e,this)})));return function(t,r,n,a){return e.apply(this,arguments)}}()},{key:"fetchFeatureInfo",value:function(e,t,r,n,a){var i=(0,L.yZ)({extent:e,width:t}),l=function(e){var t=e.filter((function(e){return e.popupEnabled&&e.name&&e.queryable}));return t.length?t.map((function(e){return e.name})).join():null}(new X.j({layer:this,scale:i}).visibleSublayers);if(null==this.featureInfoUrl||null==l)return Promise.resolve([]);if(null==this.fetchFeatureInfoFunction&&null==this.featureInfoFormat)return Promise.resolve([]);var u="1.3.0"===this.version?{I:n,J:a}:{x:n,y:a},s=(0,o.Z)({query_layers:l,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r},u),c=(0,o.Z)((0,o.Z)({},this.createExportImageParameters(e,t,r)),s),p=this._mixCustomParameters(c);return null!=this.fetchFeatureInfoFunction?this.fetchFeatureInfoFunction(p):this._defaultFetchFeatureInfoFunction((0,N.fl)(this.featureInfoUrl,p))}},{key:"findSublayerById",value:function(e){return this.allSublayers.find((function(t){return t.id===e}))}},{key:"findSublayerByName",value:function(e){return this.allSublayers.find((function(t){return t.name===e}))}},{key:"serviceSupportsSpatialReference",value:function(e){return(0,G.G)(this.url)||null!=this.spatialReferences&&this.spatialReferences.some((function(t){var r=900913===t?A.Z.WebMercator:new A.Z({wkid:t});return(0,M.fS)(r,e)}))}},{key:"_defaultFetchFeatureInfoFunction",value:function(e){var t=document.createElement("iframe");t.src=(0,N.qg)(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");var r=new h.Z({title:this.title,content:t}),n=new m.Z({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}},{key:"_fetchService",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r,n,i,l,u,s,c,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.resourceInfo||null===(r=this.parsedUrl)||void 0===r||!r.path){e.next=9;break}return n=this.parsedUrl,i=n.path,l=n.query,e.next=6,(0,b.Z)(i,{query:(0,o.Z)((0,o.Z)({SERVICE:"WMS",REQUEST:"GetCapabilities"},l),this.customParameters),responseType:"xml",signal:t});case 6:u=e.sent,s=u.data,this.resourceInfo=ae(s);case 9:this.parsedUrl&&(c=new N.R9(this.parsedUrl.path),p=v.Z.request.httpsDomains,"https"!==c.scheme||c.port&&"443"!==c.port||!c.host||p.includes(c.host)||p.push(c.host)),this.read(this.resourceInfo,{origin:"service"});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_mixCustomParameters",value:function(e){if(!this.customLayerParameters&&!this.customParameters)return e;var t=(0,o.Z)((0,o.Z)({},this.customParameters),this.customLayerParameters);for(var r in t)e[r.toLowerCase()]=t[r];return e}}]),r}((0,j.h)((0,V.n)((0,W.Q)((0,B.M)((0,T.q)((0,q.I)((0,Z.R)(U.Z))))))));function Oe(e,t,r){var n;e=null!==(n=e)&&void 0!==n?n:[];var a=new Map;e.every((function(e){return null==e.id}))&&(e=(0,_.d9)(e)).forEach((function(e,t){return e.id=t}));var i,l=(0,u.Z)(e);try{for(l.s();!(i=l.n()).done;){var o=i.value,s=new ee;s.read(o,t),r&&!r.includes(s.name)&&(s.visible=!1),a.set(s.id,s)}}catch(m){l.e(m)}finally{l.f()}var c,p=[],f=(0,u.Z)(e);try{for(f.s();!(c=f.n()).done;){var d=c.value,y=null!=d.id?a.get(d.id):null;if(y)if(null!=d.parentLayerId&&d.parentLayerId>=0){var v=a.get(d.parentLayerId);if(!v)continue;v.sublayers||(v.sublayers=new g.Z),v.sublayers.push(y)}else p.push(y)}}catch(m){f.e(m)}finally{f.f()}return p}(0,y._)([(0,E.Cb)({readOnly:!0})],ke.prototype,"allSublayers",void 0),(0,y._)([(0,E.Cb)({json:{type:Object,write:!0}})],ke.prototype,"customParameters",void 0),(0,y._)([(0,E.Cb)({json:{type:Object,write:!0}})],ke.prototype,"customLayerParameters",void 0),(0,y._)([(0,E.Cb)({type:String,json:{write:!0}})],ke.prototype,"copyright",void 0),(0,y._)([(0,E.Cb)()],ke.prototype,"description",void 0),(0,y._)([(0,E.Cb)({readOnly:!0})],ke.prototype,"dimensions",void 0),(0,y._)([(0,E.Cb)({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],ke.prototype,"fullExtent",void 0),(0,y._)([(0,F.r)(["web-document","portal-item"],"fullExtent",["extent"])],ke.prototype,"readFullExtentFromItemOrMap",null),(0,y._)([(0,O.c)(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],ke.prototype,"writeFullExtent",null),(0,y._)([(0,E.Cb)()],ke.prototype,"fullExtents",void 0),(0,y._)([(0,E.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],ke.prototype,"featureInfoFormat",null),(0,y._)([(0,E.Cb)({type:[String],readOnly:!0})],ke.prototype,"featureInfoFormats",void 0),(0,y._)([(0,E.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],ke.prototype,"featureInfoUrl",void 0),(0,y._)([(0,E.Cb)()],ke.prototype,"fetchFeatureInfoFunction",void 0),(0,y._)([(0,E.Cb)({type:String,json:{origins:{"web-document":{default:"image/png",type:Ee.jsonValues,read:{reader:Ee.read,source:"format"},write:{writer:Ee.write,target:"format"}}}}})],ke.prototype,"imageFormat",void 0),(0,y._)([(0,F.r)("imageFormat",["supportedImageFormatTypes"])],ke.prototype,"readImageFormat",null),(0,y._)([(0,E.Cb)({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],ke.prototype,"imageMaxHeight",void 0),(0,y._)([(0,E.Cb)({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],ke.prototype,"imageMaxWidth",void 0),(0,y._)([(0,E.Cb)()],ke.prototype,"imageTransparency",void 0),(0,y._)([(0,E.Cb)(H.rn)],ke.prototype,"legendEnabled",void 0),(0,y._)([(0,E.Cb)({type:["show","hide","hide-children"]})],ke.prototype,"listMode",void 0),(0,y._)([(0,E.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],ke.prototype,"mapUrl",void 0),(0,y._)([(0,E.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],ke.prototype,"isReference",void 0),(0,y._)([(0,E.Cb)({type:["WMS"]})],ke.prototype,"operationalLayerType",void 0),(0,y._)([(0,E.Cb)()],ke.prototype,"resourceInfo",void 0),(0,y._)([(0,E.Cb)({type:A.Z,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],ke.prototype,"spatialReference",void 0),(0,y._)([(0,F.r)(["web-document","portal-item"],"spatialReference",["spatialReferences"])],ke.prototype,"readSpatialReferenceFromItemOrDocument",null),(0,y._)([(0,E.Cb)({type:[I.z8],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],ke.prototype,"spatialReferences",void 0),(0,y._)([(0,O.c)(["web-document","portal-item"],"spatialReferences")],ke.prototype,"writeSpatialReferences",null),(0,y._)([(0,E.Cb)({type:g.Z.ofType(ee),json:{write:{target:"layers",overridePolicy:function(e,t,r){if(function(e,t){return e.some((function(e){for(var r in e)if((0,R.d)(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],ke.prototype,"sublayers",void 0),(0,y._)([(0,F.r)(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],ke.prototype,"readSublayersFromItemOrMap",null),(0,y._)([(0,F.r)("service","sublayers",["layers"])],ke.prototype,"readSublayers",null),(0,y._)([(0,O.c)("sublayers",{layers:{type:[ee]},visibleLayers:{type:[String]}})],ke.prototype,"writeSublayers",null),(0,y._)([(0,E.Cb)({json:{read:!1},readOnly:!0,value:"wms"})],ke.prototype,"type",void 0),(0,y._)([(0,E.Cb)(H.HQ)],ke.prototype,"url",null),(0,y._)([(0,E.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],ke.prototype,"version",void 0);var Re=ke=(0,y._)([(0,k.j)("esri.layers.WMSLayer")],ke)},86685:function(e,t,r){r.d(t,{A:function(){return i}});var n=r(29439),a=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function i(e){return null!=e&&a.some((function(t){var r=(0,n.Z)(t,2),a=r[0],i=r[1];return e>=a&&e<=i}))}},42388:function(e,t,r){r.d(t,{j:function(){return f}});var n=r(15671),a=r(43144),i=r(60136),l=r(29388),o=r(27366),u=r(7138),s=r(49861),c=(r(25243),r(63780),r(93169),r(69912)),p={visible:"visibleSublayers"},f=function(e){(0,i.Z)(r,e);var t=(0,l.Z)(r);function r(e){var a;return(0,n.Z)(this,r),(a=t.call(this,e)).scale=0,a}return(0,a.Z)(r,[{key:"layer",set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("wms-sublayer-update",(function(e){return t.notifyChange(p[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){return this.visibleSublayers.filter((function(e){return e.name})).map((function(e){return e.name})).join()}},{key:"version",get:function(){this.commitProperty("layers");var e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this.layer,t=this.scale,r=null===e||void 0===e?void 0:e.sublayers,n=[];return null!==r&&void 0!==r&&r.forEach((function e(r){var a=r.minScale,i=r.maxScale,l=r.sublayers;r.visible&&(0===t||(0===a||t<=a)&&(0===i||t>=i))&&(l?l.forEach(e):n.push(r))})),n}},{key:"toJSON",value:function(){var e=this.layer,t=this.layers;return{format:e.imageFormat,request:"GetMap",service:"WMS",styles:"",transparent:e.imageTransparency?"TRUE":"FALSE",version:e.version,layers:t}}}]),r}(u.Z);(0,o._)([(0,s.Cb)()],f.prototype,"layer",null),(0,o._)([(0,s.Cb)({readOnly:!0})],f.prototype,"layers",null),(0,o._)([(0,s.Cb)({type:Number})],f.prototype,"scale",void 0),(0,o._)([(0,s.Cb)({readOnly:!0})],f.prototype,"version",null),(0,o._)([(0,s.Cb)({readOnly:!0})],f.prototype,"visibleSublayers",null),f=(0,o._)([(0,c.j)("esri.layers.support.ExportWMSImageParameters")],f)},83690:function(e,t,r){r.d(t,{V:function(){return s},g:function(){return o}});var n=r(74165),a=r(15861),i=r(10064),l=r(66978);function o(e,t,r){return u.apply(this,arguments)}function u(){return u=(0,a.Z)((0,n.Z)().mark((function e(t,r,a){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,createImageBitmap(t);case 3:o=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new i.Z("request:server","Unable to load ".concat(r),{url:r,error:e.t0});case 9:return e.abrupt("return",((0,l.k_)(a),o));case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),u.apply(this,arguments)}function s(e,t,r,n,a){return c.apply(this,arguments)}function c(){return c=(0,a.Z)((0,n.Z)().mark((function e(t,r,a,o,u){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,createImageBitmap(t);case 3:s=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new i.Z("request:server","Unable to load tile ".concat(r,"/").concat(a,"/").concat(o),{error:e.t0,level:r,row:a,col:o});case 9:return e.abrupt("return",((0,l.k_)(u),s));case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),c.apply(this,arguments)}}}]);
//# sourceMappingURL=4227.aa86d178.chunk.js.map