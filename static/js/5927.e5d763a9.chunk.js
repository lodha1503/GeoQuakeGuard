"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[5927],{63231:function(e,t,n){function r(e){return null!=u(e)||null!=o(e)}function a(e){return s.test(e)}function i(e){var t;return null!==(t=u(e))&&void 0!==t?t:o(e)}function o(e){var t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;var n=!0;if(l&&/\d+\W*$/.test(t)){var r=t.match(/[a-zA-Z]{2,}/);if(r){for(var a=!1,i=0;!a&&i<=r.length;)a=!c.test(r[i]),i++;n=!a}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function u(e){var t,n,r,a,i=s.exec(e);if(null===i||void 0===i||!i.groups)return null;var o=i.groups,u=+o.year,c=+o.month-1,l=+o.day,p=+(null!==(t=o.hours)&&void 0!==t?t:"0"),f=+(null!==(n=o.minutes)&&void 0!==n?n:"0"),d=+(null!==(r=o.seconds)&&void 0!==r?r:"0");if(p>23)return null;if(f>59)return null;if(d>59)return null;var y,v=null!==(a=o.ms)&&void 0!==a?a:"0",m=v?+v.padEnd(3,"0").substring(0,3):0;if(o.isUTC||!o.offsetSign)y=Date.UTC(u,c,l,p,f,d,m);else{var g=+o.offsetHours,h=+o.offsetMinutes;y=6e4*("+"===o.offsetSign?-1:1)*(60*g+h)+Date.UTC(u,c,l,p,f,d,m)}return Number.isNaN(y)?null:y}n.d(t,{mu:function(){return a},of:function(){return r},sG:function(){return i}});var s=(0,n(70804).Z)(/^(?:(\x2D?\d{4,})\x2D(\d{2})\x2D(\d{2}))(?:T(\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?)?(?:(Z)|(?:(\+|\x2D)(\d{2}):(\d{2})))?$/,{year:1,month:2,day:3,hours:4,minutes:5,seconds:6,ms:7,isUTC:8,offsetSign:9,offsetHours:10,offsetMinutes:11});var c=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,l=!Number.isNaN(new Date("technology 10").getTime())},47615:function(e,t,n){n.d(t,{O3:function(){return C},lG:function(){return N},my:function(){return P},q9:function(){return v}});var r=n(29439),a=n(74165),i=n(37762),o=n(63231),u=n(10064),s=n(92975),c=n(3182),l=n(80457),p=n(37270),f=(0,a.Z)().mark(m),d=(0,a.Z)().mark(g),y={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function v(e){return y[e]}function m(e){var t,n,r;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:a.t0=e.type,a.next="Feature"===a.t0?3:"FeatureCollection"===a.t0?6:25;break;case 3:return a.next=5,e;case 5:return a.abrupt("break",25);case 6:t=(0,i.Z)(e.features),a.prev=7,t.s();case 9:if((n=t.n()).done){a.next=17;break}if(r=n.value,a.t1=r,!a.t1){a.next=15;break}return a.next=15,r;case 15:a.next=9;break;case 17:a.next=22;break;case 19:a.prev=19,a.t2=a.catch(7),t.e(a.t2);case 22:return a.prev=22,t.f(),a.finish(22);case 25:case"end":return a.stop()}}),f,null,[[7,19,22,25]])}function g(e){var t,n,r,o,u,s,c,l,p;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e){a.next=57;break}a.t0=e.type,a.next="Point"===a.t0?4:"LineString"===a.t0||"MultiPoint"===a.t0?7:"MultiLineString"===a.t0||"Polygon"===a.t0?9:"MultiPolygon"===a.t0?26:57;break;case 4:return a.next=6,e.coordinates;case 6:return a.abrupt("break",57);case 7:return a.delegateYield(e.coordinates,"t1",8);case 8:return a.abrupt("break",57);case 9:t=(0,i.Z)(e.coordinates),a.prev=10,t.s();case 12:if((n=t.n()).done){a.next=17;break}return r=n.value,a.delegateYield(r,"t2",15);case 15:a.next=12;break;case 17:a.next=22;break;case 19:a.prev=19,a.t3=a.catch(10),t.e(a.t3);case 22:return a.prev=22,t.f(),a.finish(22);case 25:return a.abrupt("break",57);case 26:o=(0,i.Z)(e.coordinates),a.prev=27,o.s();case 29:if((u=o.n()).done){a.next=49;break}s=u.value,c=(0,i.Z)(s),a.prev=32,c.s();case 34:if((l=c.n()).done){a.next=39;break}return p=l.value,a.delegateYield(p,"t4",37);case 37:a.next=34;break;case 39:a.next=44;break;case 41:a.prev=41,a.t5=a.catch(32),c.e(a.t5);case 44:return a.prev=44,c.f(),a.finish(44);case 47:a.next=29;break;case 49:a.next=54;break;case 51:a.prev=51,a.t6=a.catch(27),o.e(a.t6);case 54:return a.prev=54,o.f(),a.finish(54);case 57:case"end":return a.stop()}}),d,null,[[10,19,22,25],[27,51,54,57],[32,41,44,47]])}function h(e){for(var t=0,n=0;n<e.length;n++){var r=e[n],a=e[(n+1)%e.length];t+=r[0]*a[1]-a[0]*r[1]}return t<=0}function b(e){var t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function w(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return k(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){var r,a=(0,i.Z)(t.coordinates);try{for(a.s();!(r=a.n()).done;){k(e,r.value,n)}}catch(o){a.e(o)}finally{a.f()}return e}(e,t,n);case"MultiPolygon":return function(e,t,n){var r,a=(0,i.Z)(t.coordinates);try{for(a.s();!(r=a.n()).done;){var o=r.value;x(e,o[0],n);for(var u=1;u<o.length;u++)Z(e,o[u],n)}}catch(s){a.e(s)}finally{a.f()}return e}(e,t,n);case"Point":return function(e,t,n){return F(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){var r=t.coordinates;x(e,r[0],n);for(var a=1;a<r.length;a++)Z(e,r[a],n);return e}(e,t,n)}}function x(e,t,n){var r=b(t);!function(e){return!h(e)}(r)?k(e,r,n):T(e,r,n)}function Z(e,t,n){var r=b(t);!function(e){return h(e)}(r)?k(e,r,n):T(e,r,n)}function k(e,t,n){var r,a=(0,i.Z)(t);try{for(a.s();!(r=a.n()).done;){F(e,r.value,n)}}catch(o){a.e(o)}finally{a.f()}e.lengths.push(t.length)}function T(e,t,n){for(var r=t.length-1;r>=0;r--)F(e,t[r],n);e.lengths.push(t.length)}function F(e,t,n){var a=(0,r.Z)(t,3),i=a[0],o=a[1],u=a[2];e.coords.push(i,o),n.hasZ&&e.coords.push(u||0)}function S(e){switch(typeof e){case"string":return(0,o.mu)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!e)throw new u.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new u.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});var n=e.crs;if(n){var r="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,a=(0,s.oR)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(".*(".concat(t,")$"),"i");if(!r||!a.test(r))throw new u.Z("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}}function P(e){var t,n,r,a,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=[],s=new Set,c=new Set,l=!1,f=null,d=!1,y=o.geometryType,h=void 0===y?null:y,b=!1,w=(0,i.Z)(m(e));try{var x=function(){var e=a.value,t=e.geometry,n=e.properties,o=e.id;if((!t||(h||(h=v(t.type)),v(t.type)===h))&&(l||(l=function(e){var t,n=(0,i.Z)(e);try{for(n.s();!(t=n.n()).done;)if(t.value.length>2)return!0}catch(r){n.e(r)}finally{n.f()}return!1}(g(t))),d||(d=null!=o)&&(r=typeof o,n&&(f=Object.keys(n).filter((function(e){return n[e]===o})))),n&&f&&d&&null!=o&&(f.length>1?f=f.filter((function(e){return n[e]===o})):1===f.length&&(f=n[f[0]]===o?f:[])),!b&&n)){var y=!0;for(var m in n)if(!s.has(m)){var w=n[m];if(null!=w){var x=S(w);if("unknown"!==x){c.delete(m),s.add(m);var Z=(0,p.q6)(m);Z&&u.push({name:Z,alias:m,type:x})}else c.add(m)}else y=!1,c.add(m)}b=y}};for(w.s();!(a=w.n()).done;)x()}catch(C){w.e(C)}finally{w.f()}var Z=null!==(t=(0,p.q6)(1===(null===(n=f)||void 0===n?void 0:n.length)&&f[0]||null))&&void 0!==t?t:void 0;if(Z){var k,T=(0,i.Z)(u);try{for(T.s();!(k=T.n()).done;){var F=k.value;if(F.name===Z&&(0,p.H7)(F)){F.type="esriFieldTypeOID";break}}}catch(C){T.e(C)}finally{T.f()}}return{fields:u,geometryType:h,hasZ:l,objectIdFieldName:Z,objectIdFieldType:r,unknownFields:Array.from(c)}}function N(e,t){return Array.from(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,a.Z)().mark((function n(){var r,o,u,s,p,f,d,y,m,g,h,b;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.geometryType,o=t.objectIdField,u=(0,i.Z)(e),n.prev=2,u.s();case 4:if((s=u.n()).done){n.next=17;break}if(f=s.value,d=f.geometry,y=f.properties,m=f.id,!d||v(d.type)===r){n.next=9;break}return n.abrupt("continue",15);case 9:return g=y||{},h=void 0,o&&(h=g[o],null==m||h||(g[o]=h=m)),b=new c.u_(d?w(new l.Z,d,t):null,g,null,null!==(p=h)&&void 0!==p?p:void 0),n.next=15,b;case 15:n.next=4;break;case 17:n.next=22;break;case 19:n.prev=19,n.t0=n.catch(2),u.e(n.t0);case 22:return n.prev=22,u.f(),n.finish(22);case 25:case"end":return n.stop()}}),n,null,[[2,19,22,25]])}))()}(m(e),t))}},45927:function(e,t,n){n.d(t,{Bm:function(){return ae},FU:function(){return O},be:function(){return q},eB:function(){return B},fU:function(){return le},ft:function(){return _},u2:function(){return S}});var r=n(74165),a=n(1413),i=n(29439),o=n(37762),u=n(93433),s=n(70804),c=n(15861),l=(n(59486),n(76200)),p=n(10064),f=n(83704),d=n(35995),y=n(45925),v=n(92975),m=n(27823),g=n(47615),h=n(39098),b=n(25899),w=n(83040),x=n(37270),Z=n(78952),k=n(53866),T="xlink:href",F="2.0.0",S="__esri_wfs_id__",C="wfs-layer:getWFSLayerTypeInfo-error",P="wfs-layer:empty-service",N="wfs-layer:feature-type-not-found",R="wfs-layer:geojson-not-supported",E="wfs-layer:kvp-encoding-not-supported",G="wfs-layer:malformed-json",A="wfs-layer:unknown-geometry-type",j="wfs-layer:unknown-field-type",D="wfs-layer:unsupported-spatial-reference",M="wfs-layer:unsupported-wfs-version";function O(e,t){return U.apply(this,arguments)}function U(){return(U=(0,c.Z)((0,r.Z)().mark((function e(t,n){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=L,e.next=3,(0,l.Z)(t,{responseType:"text",query:(0,a.Z)({SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:F},null===n||void 0===n?void 0:n.customParameters),signal:null===n||void 0===n?void 0:n.signal});case 3:return e.t1=e.sent.data,i=(0,e.t0)(e.t1),e.abrupt("return",(V(t,i),i));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){var t=ue(e);(function(e){var t,n=null===(t=e.firstElementChild)||void 0===t?void 0:t.getAttribute("version");if(n&&n!==F)throw new p.Z(M,"Unsupported WFS version ".concat(n,". Supported version: ").concat(F))})(t),ce(t);var n=t.firstElementChild,r=(0,f.Fs)(function(e){return(0,h.H)(e,{FeatureTypeList:{FeatureType:function(e){var t,n={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},r=new Set;return(0,h.h)(e,{Name:function(e){var t=se(e.textContent),r=t.name,a=t.prefix;n.typeName="".concat(a,":").concat(r),n.name=r,n.namespacePrefix=a,n.namespaceUri=e.lookupNamespaceURI(a)},Abstract:function(e){n.description=e.textContent},Title:function(e){n.title=e.textContent},WGS84BoundingBox:function(e){n.extent=function(e){var t,n,r,a,u,s=(0,o.Z)(e.children);try{for(s.s();!(u=s.n()).done;){var c=u.value;switch(c.localName){case"LowerCorner":var l=c.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),p=(0,i.Z)(l,2);t=p[0],n=p[1];break;case"UpperCorner":var f=c.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),d=(0,i.Z)(f,2);r=d[0],a=d[1]}}}catch(y){s.e(y)}finally{s.f()}return{xmin:t,ymin:n,xmax:r,ymax:a,spatialReference:v.Zn}}(e)},DefaultCRS:function(e){var t=Y(e);t&&(n.defaultSpatialReference=t,r.add(t))},OtherCRS:function(e){var t=Y(e);t&&r.add(t)}}),n.title||(n.title=n.name),r.add(4326),(t=n.supportedSpatialReferences).push.apply(t,(0,u.Z)(r)),n}}})}(n));return{operations:H(n),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}var I=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function H(e){var t=!1,n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if((0,h.h)(e,{OperationsMetadata:{Operation:function(e){switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:function(e){n.GetCapabilities.url=e.getAttribute(T)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:function(e){n.DescribeFeatureType.url=e.getAttribute(T)}}}};case"GetFeature":return{DCP:{HTTP:{Get:function(e){n.GetFeature.url=e.getAttribute(T)}}},Parameter:function(e){if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:function(e){var t=e.textContent;t&&I.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t)}}}}}}},Constraint:function(e){switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:function(e){t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:function(e){n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!t)throw new p.Z(E,"WFS service doesn't support key/value pair (KVP) encoding");if(null==n.GetFeature.outputFormat)throw new p.Z(R,"WFS service doesn't support GeoJSON output format");return n}function V(e,t){(0,d.$U)(e)&&((0,d.D6)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,d.hO)(t.operations.DescribeFeatureType.url)),(0,d.D6)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,d.hO)(t.operations.GetFeature.url)))}function Y(e){var t,n,r=parseInt(null!==(t=null===(n=e.textContent)||void 0===n||null===(n=n.match((0,s.Z)(/(\d+$)/i,{wkid:1})))||void 0===n||null===(n=n.groups)||void 0===n?void 0:n.wkid)&&void 0!==t?t:"",10);if(!Number.isNaN(r))return r}function _(e,t,n){return(0,f.sE)(e,(function(e){return n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t}))}function q(e,t,n){return z.apply(this,arguments)}function z(){return z=(0,c.Z)((0,r.Z)().mark((function e(t,n,a){var i,o,u,s,c,l,p,f,d,y,v,m,g,h=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=h.length>3&&void 0!==h[3]?h[3]:{},e.next=3,W(t,n,a,o);case 3:return u=e.sent,s=u.featureType,c=u.extent,l=le(t.operations.GetFeature.url,s,o.spatialReference),p=l.spatialReference,e.next=10,X(t,s,p,o);case 10:return f=e.sent,d=f.fields,y=f.geometryType,v=f.swapXY,m=f.objectIdField,g=f.geometryField,e.abrupt("return",{url:t.operations.GetCapabilities.url,name:s.name,namespaceUri:s.namespaceUri,fields:d,geometryField:g,geometryType:y,objectIdField:m,spatialReference:null!==(i=o.spatialReference)&&void 0!==i?i:new Z.Z({wkid:s.defaultSpatialReference}),extent:c,swapXY:v,wfsCapabilities:t,customParameters:o.customParameters});case 17:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}function W(e,t,n){return $.apply(this,arguments)}function $(){return $=(0,c.Z)((0,r.Z)().mark((function e(t,n,i){var o,u,s,c,l,f,d=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=d.length>3&&void 0!==d[3]?d[3]:{},u=t.readFeatureTypes(),s=n?_(u,n,i):u.next().value,c=o.spatialReference,l=void 0===c?new Z.Z({wkid:null===s||void 0===s?void 0:s.defaultSpatialReference}):c,null!=s){e.next=4;break}throw n?new p.Z(N,"The type '".concat(n,"' could not be found in the service")):new p.Z(P,"The service is empty");case 4:if(f=new k.Z((0,a.Z)((0,a.Z)({},s.extent),{},{spatialReference:Z.Z.WGS84})),(0,v.fS)(f.spatialReference,l)){e.next=15;break}return e.prev=6,e.next=9,(0,y.initializeProjection)(f.spatialReference,l,void 0,o);case 9:f=(0,y.project)(f,l),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(6),new p.Z(D,"Projection not supported");case 15:return e.abrupt("return",{extent:f,spatialReference:l,featureType:s});case 16:case"end":return e.stop()}}),e,null,[[6,12]])}))),$.apply(this,arguments)}function X(e,t,n){return J.apply(this,arguments)}function J(){return J=(0,c.Z)((0,r.Z)().mark((function e(t,n,o){var u,s,c,l,f,d,y,v,m,g,h,b,w,x,Z,k,T,F=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=F.length>3&&void 0!==F[3]?F[3]:{},y=n.typeName,e.next=4,Promise.allSettled([ee(t.operations.DescribeFeatureType.url,y,d),Q(t,y,o,d)]);case 4:if(v=e.sent,m=(0,i.Z)(v,2),g=m[0],h=m[1],b=function(e){return new p.Z(C,"An error occurred while getting info about the feature type '".concat(y,"'"),{error:e})},"rejected"!==g.status){e.next=11;break}throw b(g.reason);case 11:if("rejected"!==h.status){e.next=13;break}throw b(h.reason);case 13:if(w=null!==(u=g.value)&&void 0!==u?u:{},x=w.fields,Z=w.errors,k=(null===(s=g.value)||void 0===s?void 0:s.geometryType)||(null===(c=h.value)||void 0===c?void 0:c.geometryType),T=null!==(l=null===(f=h.value)||void 0===f?void 0:f.swapXY)&&void 0!==l&&l,null!=k){e.next=16;break}throw new p.Z(A,"The geometry type could not be determined for type '".concat(y),{typeName:y,geometryType:k,fields:x,errors:Z});case 16:return e.abrupt("return",(0,a.Z)((0,a.Z)({},B(null!==x&&void 0!==x?x:[])),{},{geometryType:k,swapXY:T}));case 17:case"end":return e.stop()}}),e)}))),J.apply(this,arguments)}function B(e){var t,n=e.find((function(e){return"geometry"===e.type})),r=e.find((function(e){return"oid"===e.type}));return e=e.filter((function(e){return"geometry"!==e.type})),r||(r=new w.Z({name:S,type:"oid",alias:S}),e.unshift(r)),{geometryField:null!==(t=null===n||void 0===n?void 0:n.name)&&void 0!==t?t:null,objectIdField:r.name,fields:e}}function Q(e,t,n){return K.apply(this,arguments)}function K(){return K=(0,c.Z)((0,r.Z)().mark((function e(t,n,o){var u,s,c,p,f,d,y,v,h,b,w,x,Z,k,T=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=T.length>3&&void 0!==T[3]?T[3]:{},p=!1,e.next=4,Promise.all([ae(t.operations.GetFeature.url,n,o,t.operations.GetFeature.outputFormat,(0,a.Z)((0,a.Z)({},s),{},{count:1})),(0,l.Z)(t.operations.GetFeature.url,{responseType:"text",query:oe(n,o,void 0,(0,a.Z)((0,a.Z)({},s),{},{count:1})),signal:null===s||void 0===s?void 0:s.signal})]);case 4:if(f=e.sent,d=(0,i.Z)(f,2),y=d[0],v=d[1],!(h="FeatureCollection"===y.type&&(null===(u=y.features[0])||void 0===u?void 0:u.geometry))){e.next=22;break}e.t0=(c=m.M.fromJSON((0,g.q9)(h.type)),h.type),e.next="Point"===e.t0?13:"LineString"===e.t0||"MultiPoint"===e.t0?15:"MultiLineString"===e.t0||"Polygon"===e.t0?17:"MultiPolygon"===e.t0?19:20;break;case 13:return b=h.coordinates,e.abrupt("break",20);case 15:return b=h.coordinates[0],e.abrupt("break",20);case 17:return b=h.coordinates[0][0],e.abrupt("break",20);case 19:b=h.coordinates[0][0][0];case 20:(w=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(v.data))&&(x=b[0].toFixed(3),Z=b[1].toFixed(3),k=parseFloat(w[1]).toFixed(3),x===parseFloat(w[2]).toFixed(3)&&Z===k&&(p=!0));case 22:return e.abrupt("return",{geometryType:c,swapXY:p});case 23:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function ee(e,t,n){return te.apply(this,arguments)}function te(){return(te=(0,c.Z)((0,r.Z)().mark((function e(t,n,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ne,e.t1=n,e.next=4,(0,l.Z)(t,{responseType:"text",query:(0,a.Z)({SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:F,TYPENAME:n},null===i||void 0===i?void 0:i.customParameters),signal:null===i||void 0===i?void 0:i.signal});case 4:return e.t2=e.sent.data,e.abrupt("return",(0,e.t0)(e.t1,e.t2));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e,t){var n=se(e).name,r=ue(t);ce(r);var a=(0,f.sE)((0,h.H)(r.firstElementChild,{element:function(e){return{name:e.getAttribute("name"),typeName:se(e.getAttribute("type")).name}}}),(function(e){return e.name===n}));if(null!=a){var i=(0,f.sE)((0,h.H)(r.firstElementChild,{complexType:function(e){return e}}),(function(e){return e.getAttribute("name")===a.typeName}));if(null!=i)return function(e){var t,n,r=[],a=[],i=(0,h.H)(e,{complexContent:{extension:{sequence:{element:function(e){return e}}}}}),u=(0,o.Z)(i);try{var s=function(){var i,o,u,s,c=n.value,l=c.getAttribute("name");if(!l)return 0;if(c.hasAttribute("type")?u=se(c.getAttribute("type")).name:(0,h.h)(c,{simpleType:{restriction:function(e){return u=se(e.getAttribute("base")).name,{maxLength:function(e){s=+e.getAttribute("value")}}}}}),!u)return 0;var f="true"===c.getAttribute("nillable"),d=!1;switch(u.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":a.push(new w.Z({name:l,alias:l,type:"integer",nullable:f,length:(0,x.ZR)("integer")}));break;case"float":case"double":case"decimal":a.push(new w.Z({name:l,alias:l,type:"double",nullable:f,length:(0,x.ZR)("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":a.push(new w.Z({name:l,alias:l,type:"string",nullable:f,length:null!==(i=s)&&void 0!==i?i:(0,x.ZR)("string")}));break;case"datetime":case"date":a.push(new w.Z({name:l,alias:l,type:"date",nullable:f,length:null!==(o=s)&&void 0!==o?o:(0,x.ZR)("date")}));break;case"pointpropertytype":t="point",d=!0;break;case"multipointpropertytype":t="multipoint",d=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":t="polyline",d=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":t="polygon",d=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":d=!0,r.push(new p.Z(A,"geometry type '".concat(u,"' is not supported"),{type:(new XMLSerializer).serializeToString(e)}));break;default:r.push(new p.Z(j,"Unknown field type '".concat(u,"'"),{type:(new XMLSerializer).serializeToString(e)}))}d&&a.push(new w.Z({name:l,alias:l,type:"geometry",nullable:f}))};for(u.s();!(n=u.n()).done;)s()}catch(d){u.e(d)}finally{u.f()}for(var c=0,l=a;c<l.length;c++){var f=l[c];if("integer"===f.type&&!f.nullable&&re.has(f.name.toLowerCase())){f.type="oid";break}}return{geometryType:t,fields:a,errors:r}}(i)}throw new p.Z(N,"Type '".concat(e,"' not found in document"),{document:(new XMLSerializer).serializeToString(r)})}var re=new Set(["objectid","fid"]);function ae(e,t,n,r,a){return ie.apply(this,arguments)}function ie(){return(ie=(0,c.Z)((0,r.Z)().mark((function e(t,n,a,i,o){var u,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Z)(t,{responseType:"text",query:oe(n,a,i,o),signal:null===o||void 0===o?void 0:o.signal});case 2:return u=e.sent,s=(s=u.data).replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3'),e.prev=5,e.abrupt("return",JSON.parse(s));case 9:throw e.prev=9,e.t0=e.catch(5),new p.Z(G,"Error while parsing the\xa0response",{response:s,error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[5,9]])})))).apply(this,arguments)}function oe(e,t,n,r){var i="number"==typeof t?t:t.wkid;return(0,a.Z)({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:F,TYPENAMES:e,OUTPUTFORMAT:n,SRSNAME:"EPSG:"+i,STARTINDEX:null===r||void 0===r?void 0:r.startIndex,COUNT:null===r||void 0===r?void 0:r.count},null===r||void 0===r?void 0:r.customParameters)}function ue(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function se(e){var t=e.split(":"),n=(0,i.Z)(t,2),r=n[0],a=n[1];return{prefix:a?r:"",name:null!==a&&void 0!==a?a:r}}function ce(e){var t="",n="";if((0,h.h)(e.firstElementChild,{Exception:function(e){return t=e.getAttribute("exceptionCode"),{ExceptionText:function(e){n=e.textContent}}}}),t)throw new p.Z("wfs-layer:".concat(t),n)}function le(e,t,n){var r={wkid:t.defaultSpatialReference},a=null!=(null===n||void 0===n?void 0:n.wkid)?{wkid:n.wkid}:r;return{spatialReference:a,getFeatureSpatialReference:(0,b.B5)(e)||a.wkid&&t.supportedSpatialReferences.includes(a.wkid)?{wkid:a.wkid}:{wkid:t.defaultSpatialReference}}}},39098:function(e,t,n){n.d(t,{H:function(){return u},h:function(){return o}});var r=n(74165),a=n(37762),i=(0,r.Z)().mark(u);function o(e,t){if(e&&t){var n,r=(0,a.Z)(e.children);try{for(r.s();!(n=r.n()).done;){var i=n.value;if(i.localName in t){var u=t[i.localName];if("function"==typeof u){var s=u(i);s&&o(i,s)}else o(i,u)}}}catch(c){r.e(c)}finally{r.f()}}}function u(e,t){var n,o,s,c;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=(0,a.Z)(e.children),r.prev=1,n.s();case 3:if((o=n.n()).done){r.next=15;break}if(!((s=o.value).localName in t)){r.next=13;break}if("function"!=typeof(c=t[s.localName])){r.next=12;break}return r.next=10,c(s);case 10:r.next=13;break;case 12:return r.delegateYield(u(s,c),"t0",13);case 13:r.next=3;break;case 15:r.next=20;break;case 17:r.prev=17,r.t1=r.catch(1),n.e(r.t1);case 20:return r.prev=20,n.f(),r.finish(20);case 23:case"end":return r.stop()}}),i,null,[[1,17,20,23]])}}}]);
//# sourceMappingURL=5927.e5d763a9.chunk.js.map