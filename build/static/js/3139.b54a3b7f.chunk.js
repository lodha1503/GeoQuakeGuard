"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[3139],{28458:function(e,r,t){t.d(r,{L:function(){return i}});var n=t(74165),a=t(15861),u=t(15671),s=t(43144),c=t(41226),i=function(){function e(){(0,u.Z)(this,e),this._serviceMetadatas=new Map}return(0,s.Z)(e,[{key:"fetchServiceMetadata",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=this._serviceMetadatas.get(r))){e.next=3;break}return e.abrupt("return",a);case 3:return e.next=5,(0,c.T)(r,t);case 5:return u=e.sent,e.abrupt("return",(this._serviceMetadatas.set(r,u),u));case 7:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}()}]),e}()},84076:function(e,r,t){t.d(r,{w:function(){return v}});var n=t(29439),a=t(74165),u=t(1413),s=t(15861),c=t(19545),i=t(76200),l=t(10064),o=t(66978),p=t(25899),f=t(7575),d=t(98995);function v(e,r){return y.apply(this,arguments)}function y(){return y=(0,s.Z)((0,a.Z)().mark((function e(r,t){var n,s,c,i,o,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=(0,p.Qc)(r)){e.next=3;break}throw new l.Z("invalid-url","Invalid scene service url");case 3:if(i=(0,u.Z)((0,u.Z)({},t),{},{sceneServerUrl:c.url.path,layerId:null!==(n=c.sublayer)&&void 0!==n?n:void 0}),null===(s=i.sceneLayerItem)||void 0===s){e.next=8;break}e.next=11;break;case 8:return e.next=10,b(i);case 10:i.sceneLayerItem=e.sent;case 11:if(null!=i.sceneLayerItem){e.next=13;break}return e.abrupt("return",w(i.sceneServerUrl.replace("/SceneServer","/FeatureServer"),i));case 13:return e.next=15,L(i);case 15:if(null!==(o=e.sent)&&void 0!==o&&o.url){e.next=18;break}throw new l.Z("related-service-not-found","Could not find feature service through portal item relationship");case 18:return e.next=20,w(o.url,i);case 20:return f=e.sent,e.abrupt("return",(f.portalItem=o,f));case 22:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function b(e){return h.apply(this,arguments)}function h(){return(h=(0,s.Z)((0,a.Z)().mark((function e(r){var t,n,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(r);case 2:if(t=e.sent.serviceItemId){e.next=5;break}return e.abrupt("return",null);case 5:return n=new d.default({id:t,apiKey:r.apiKey}),e.next=8,k(r);case 8:return null!=(u=e.sent)&&(n.portal=new f.Z({url:u})),e.prev=10,e.abrupt("return",n.load({signal:r.signal}));case 14:return e.prev=14,e.t0=e.catch(10),e.abrupt("return",((0,o.r9)(e.t0),null));case 17:case"end":return e.stop()}}),e,null,[[10,14]])})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,s.Z)((0,a.Z)().mark((function e(r){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.rootDocument){e.next=2;break}return e.abrupt("return",r.rootDocument);case 2:return t={query:{f:"json",token:r.apiKey},responseType:"json",signal:r.signal},e.prev=3,e.next=6,(0,i.Z)(r.sceneServerUrl,t);case 6:n=e.sent,r.rootDocument=n.data,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),r.rootDocument={};case 13:return e.abrupt("return",r.rootDocument);case 14:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function k(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,s.Z)((0,a.Z)().mark((function e(r){var t,n,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=null===c.id||void 0===c.id?void 0:c.id.findServerInfo(r.sceneServerUrl))||void 0===t||!t.owningSystemUrl){e.next=3;break}return e.abrupt("return",t.owningSystemUrl);case 3:return n=r.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info",e.prev=4,e.next=7,(0,i.Z)(n,{query:{f:"json"},responseType:"json",signal:r.signal});case 7:if(!(u=e.sent.data.owningSystemUrl)){e.next=10;break}return e.abrupt("return",u);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),(0,o.r9)(e.t0);case 15:return e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})))).apply(this,arguments)}function w(e,r){return S.apply(this,arguments)}function S(){return S=(0,s.Z)((0,a.Z)().mark((function e(r,t){var u,s,c,o,f,d,v,y,b,h,x,k,Z;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=(0,p.Qc)(r)){e.next=3;break}throw new l.Z("invalid-feature-service-url","Invalid feature service url");case 3:if(s=u.url.path,null!=(c=t.layerId)){e.next=6;break}return e.abrupt("return",{serverUrl:s});case 6:return o=m(t),f=function(e){var r={query:{f:"json"},responseType:"json",authMode:e,signal:t.signal};return(0,i.Z)(s,r)},d=f("anonymous").catch((function(){return f("no-prompt")})),e.next=11,Promise.all([d,o]);case 11:if(v=e.sent,y=(0,n.Z)(v,2),b=y[0],h=y[1],x=null===h||void 0===h?void 0:h.layers,k=b.data&&b.data.layers,Array.isArray(k)){e.next=19;break}throw new Error("expected layers array");case 19:if(!Array.isArray(x)){e.next=29;break}Z=0;case 21:if(!(Z<Math.min(x.length,k.length))){e.next=27;break}if(x[Z].id!==c){e.next=24;break}return e.abrupt("return",{serverUrl:s,layerId:k[Z].id});case 24:Z++,e.next=21;break;case 27:e.next=31;break;case 29:if(!(null!=c&&c<k.length)){e.next=31;break}return e.abrupt("return",{serverUrl:s,layerId:k[c].id});case 31:throw new Error("could not find matching associated sublayer");case 32:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function L(e){return I.apply(this,arguments)}function I(){return(I=(0,s.Z)((0,a.Z)().mark((function e(r){var t,n,u,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.sceneLayerItem,n=r.signal,t){e.next=3;break}return e.abrupt("return",null);case 3:return e.prev=3,e.next=6,t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:n});case 6:if(e.t0=e.sent.find((function(e){return"Feature Service"===e.type})),e.t0){e.next=9;break}e.t0=null;case 9:if(u=e.t0){e.next=12;break}return e.abrupt("return",null);case 12:return s=new d.default({portal:u.portal,id:u.id}),e.next=15,s.load();case 15:return e.abrupt("return",s);case 18:return e.prev=18,e.t1=e.catch(3),e.abrupt("return",((0,o.r9)(e.t1),null));case 21:case"end":return e.stop()}}),e,null,[[3,18]])})))).apply(this,arguments)}},97827:function(e,r,t){t.d(r,{$O:function(){return i},CD:function(){return v},Ok:function(){return o},Q4:function(){return p},XX:function(){return f},_Y:function(){return d},bS:function(){return c}});var n=t(37762),a=t(74165),u=t(15861),s=t(84076);function c(e){var r={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(r.layerType="OrientedImageryLayer"),r}function i(e,r,t){return l.apply(this,arguments)}function l(){return l=(0,u.Z)((0,a.Z)().mark((function e(r,t,n){var u,s,i,l,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(null===(u=r)||void 0===u?void 0:u.layers)&&null!=(null===(s=r)||void 0===s?void 0:s.tables)){e.next=5;break}return e.next=3,n.fetchServiceMetadata(t);case 3:o=e.sent,(r=r||{}).layers=r.layers||(null===o||void 0===o||null===(i=o.layers)||void 0===i?void 0:i.map(c)),r.tables=r.tables||(null===o||void 0===o||null===(l=o.tables)||void 0===l?void 0:l.map(c));case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function o(e){var r=e.layers;if(null!==r&&void 0!==r&&r.length)return r[0].id;var t=e.tables;return null!==t&&void 0!==t&&t.length?t[0].id:null}function p(e){var r,t,n,a;return(null!==(r=null===e||void 0===e||null===(t=e.layers)||void 0===t?void 0:t.length)&&void 0!==r?r:0)+(null!==(n=null===e||void 0===e||null===(a=e.tables)||void 0===a?void 0:a.length)&&void 0!==n?n:0)}function f(e){var r,t=[];return null!==e&&void 0!==e&&null!==(r=e.layers)&&void 0!==r&&r.forEach((function(e){"SubtypeGroupLayer"===e.layerType&&t.push(e.id)})),t}function d(e){var r;return null===e||void 0===e||null===(r=e.layers)||void 0===r?void 0:r.filter((function(e){return"OrientedImageryLayer"===e.layerType})).map((function(e){return e.id}))}function v(e,r,t){return y.apply(this,arguments)}function y(){return y=(0,u.Z)((0,a.Z)().mark((function e(r,t,u){var i,l,o,p,f,d,v,y,b,h,m,x,k;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==r&&void 0!==r&&r.url){e.next=2;break}return e.abrupt("return",null!==(i=t)&&void 0!==i?i:{});case 2:if(null!==(l=t)&&void 0!==l||(t={}),t.layers){e.next=7;break}return e.next=5,u.fetchServiceMetadata(r.url);case 5:p=e.sent,t.layers=null===(o=p.layers)||void 0===o?void 0:o.map(c);case 7:return e.next=9,(0,s.w)(r.url,{sceneLayerItem:r}).catch((function(){return{serverUrl:null,portalItem:null}}));case 9:if(f=e.sent,d=f.serverUrl,v=f.portalItem,null!=d){e.next=14;break}return e.abrupt("return",(t.tables=[],t));case 14:if(t.tables||!v){e.next=26;break}return e.next=17,v.fetchData();case 17:if(null===(y=e.sent)||void 0===y||!y.tables){e.next=22;break}t.tables=y.tables.map(c),e.next=26;break;case 22:return e.next=24,u.fetchServiceMetadata(d);case 24:h=e.sent,t.tables=null===h||void 0===h||null===(b=h.tables)||void 0===b?void 0:b.map(c);case 26:if(t.tables){m=(0,n.Z)(t.tables);try{for(m.s();!(x=m.n()).done;)(k=x.value).url="".concat(d,"/").concat(k.id)}catch(a){m.e(a)}finally{m.f()}}return e.abrupt("return",t);case 28:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}},43139:function(e,r,t){t.r(r),t.d(r,{fromItem:function(){return v},selectLayerClassPath:function(){return m}});var n=t(74165),a=t(1413),u=t(15861),s=t(10064),c=t(84076),i=t(28458),l=t(37933),o=t(19610),p=t(98995),f=t(97827),d=t(73117);function v(e){return y.apply(this,arguments)}function y(){return(y=(0,u.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return!r.portalItem||r.portalItem instanceof p.default||(r=(0,a.Z)((0,a.Z)({},r),{},{portalItem:new p.default(r.portalItem)})),e.next=3,b(r.portalItem);case 3:return t=e.sent,e.abrupt("return",new(0,t.constructor)((0,a.Z)({portalItem:r.portalItem},t.properties)));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return h.apply(this,arguments)}function h(){return(h=(0,u.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:return t=new i.L,e.t0=k,e.next=6,m(r,t);case 6:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,r){return x.apply(this,arguments)}function x(){return(x=(0,u.Z)((0,n.Z)().mark((function e(r,t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.type,e.next="Map Service"===e.t0?3:"Feature Service"===e.t0?4:"Feature Collection"===e.t0?5:"Scene Service"===e.t0?6:"Image Service"===e.t0?7:"Stream Service"===e.t0?8:"Vector Tile Service"===e.t0?9:"GeoJson"===e.t0?10:"CSV"===e.t0?11:"KML"===e.t0?12:"WFS"===e.t0?13:"WMTS"===e.t0?14:"WMS"===e.t0?15:"Feed"===e.t0?16:"Group Layer"===e.t0?17:18;break;case 3:return e.abrupt("return",w(r,t));case 4:return e.abrupt("return",L(r,t));case 5:return e.abrupt("return",M(r));case 6:return e.abrupt("return",g(r,t));case 7:return e.abrupt("return",U(r,t));case 8:case 16:return e.abrupt("return",{className:"StreamLayer"});case 9:return e.abrupt("return",{className:"VectorTileLayer"});case 10:return e.abrupt("return",{className:"GeoJSONLayer"});case 11:return e.abrupt("return",{className:"CSVLayer"});case 12:return e.abrupt("return",{className:"KMLLayer"});case 13:return e.abrupt("return",{className:"WFSLayer"});case 14:return e.abrupt("return",{className:"WMTSLayer"});case 15:return e.abrupt("return",{className:"WMSLayer"});case 17:return e.abrupt("return",{className:"GroupLayer"});case 18:throw new s.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:r.type});case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,u.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.className,a=o.T[t],e.next=3,a();case 3:return e.t0=e.sent,e.t1=r.properties,e.abrupt("return",{constructor:e.t0,properties:e.t1});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,r){return S.apply(this,arguments)}function S(){return(S=(0,u.Z)((0,n.Z)().mark((function e(r,t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(r,t);case 2:if(!e.sent){e.next=6;break}e.t0={className:"TileLayer"},e.next=7;break;case 6:e.t0={className:"MapImageLayer"};case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,r){return I.apply(this,arguments)}function I(){return(I=(0,u.Z)((0,n.Z)().mark((function e(r,t){var a,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(r,t);case 2:if("object"!=typeof(a=e.sent)){e.next=6;break}return u={},e.abrupt("return",(null!=a.id&&(u.layerId=a.id),{className:a.className||"FeatureLayer",properties:u}));case 6:return e.abrupt("return",{className:"GroupLayer"});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,r){return N.apply(this,arguments)}function N(){return(N=(0,u.Z)((0,n.Z)().mark((function e(r,t){var a,s,i,o,p,f,d,v,y;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(r,t,(0,u.Z)((0,n.Z)().mark((function e(){var a,u,s,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r.url){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,(0,c.w)(r.url,{sceneLayerItem:r});case 5:return u=e.sent,s=u.serverUrl,e.next=9,t.fetchServiceMetadata(s);case 9:return i=e.sent,e.abrupt("return",null!==(a=null===i||void 0===i?void 0:i.tables)&&void 0!==a?a:[]);case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))));case 2:if("object"!=typeof(a=e.sent)){e.next=18;break}if(i={},null!=a.id?(i.layerId=a.id,o="".concat(r.url,"/layers/").concat(a.id)):o=r.url,null===(s=r.typeKeywords)||void 0===s||!s.length){e.next=14;break}p=0,f=Object.keys(l.fb);case 7:if(!(p<f.length)){e.next=14;break}if(d=f[p],!r.typeKeywords.includes(d)){e.next=11;break}return e.abrupt("return",{className:l.fb[d]});case 11:p++,e.next=7;break;case 14:return e.next=16,t.fetchServiceMetadata(o);case 16:return v=e.sent,e.abrupt("return",{className:l.fb[null===v||void 0===v?void 0:v.layerType]||"SceneLayer",properties:i});case 18:if(!1!==a){e.next=24;break}return e.next=21,t.fetchServiceMetadata(r.url);case 21:if("Voxel"!==(null===(y=e.sent)||void 0===y?void 0:y.layerType)){e.next=24;break}return e.abrupt("return",{className:"VoxelLayer"});case 24:return e.abrupt("return",{className:"GroupLayer"});case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return T.apply(this,arguments)}function T(){return(T=(0,u.Z)((0,n.Z)().mark((function e(r){var t,a,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(t=(0,d._$)(r,"Map Notes"),a=(0,d._$)(r,"Markup"),!t&&!a){e.next=5;break}return e.abrupt("return",{className:"MapNotesLayer"});case 5:if(!(0,d._$)(r,"Route Layer")){e.next=7;break}return e.abrupt("return",{className:"RouteLayer"});case 7:return e.next=9,r.fetchData();case 9:return u=e.sent,e.abrupt("return",1===(0,f.Q4)(u)?{className:"FeatureLayer"}:{className:"GroupLayer"});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,r){return C.apply(this,arguments)}function C(){return(C=(0,u.Z)((0,n.Z)().mark((function e(r,t){var a,u,s,c,i,l,o,p,f,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(i=null!==(a=null===(u=r.typeKeywords)||void 0===u?void 0:u.map((function(e){return e.toLowerCase()})))&&void 0!==a?a:[],!i.includes("elevation 3d layer")){e.next=5;break}return e.abrupt("return",{className:"ElevationLayer"});case 5:if(!i.includes("tiled imagery")){e.next=7;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 7:return e.next=9,r.fetchData();case 9:if(l=e.sent,"ArcGISTiledImageServiceLayer"!==(o=null===l||void 0===l?void 0:l.layerType)){e.next=13;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 13:if("ArcGISImageServiceLayer"!==o){e.next=15;break}return e.abrupt("return",{className:"ImageryLayer"});case 15:return e.next=17,t.fetchServiceMetadata(r.url);case 17:return p=e.sent,f=null===(s=p.cacheType)||void 0===s?void 0:s.toLowerCase(),d=null===(c=p.capabilities)||void 0===c?void 0:c.toLowerCase().includes("tilesonly"),e.abrupt("return","map"===f||d?{className:"ImageryTileLayer"}:{className:"ImageryLayer"});case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,r){return D.apply(this,arguments)}function D(){return(D=(0,u.Z)((0,n.Z)().mark((function e(r,t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchServiceMetadata(r.url);case 2:return e.abrupt("return",e.sent.tileInfo);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,r,t){return G.apply(this,arguments)}function G(){return(G=(0,u.Z)((0,n.Z)().mark((function e(r,t,a){var u,s,c,i,l,o,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((u=r.url)&&!/\/\d+$/.test(u)){e.next=3;break}return e.abrupt("return",{});case 3:return e.next=5,r.load();case 5:return e.next=7,r.fetchData();case 7:if(s=e.sent,"Feature Service"!==r.type){e.next=15;break}return e.next=11,(0,f.$O)(s,u,t);case 11:return c=e.sent,"object"==typeof(i=j(c))&&(l=(0,f.XX)(c),o=(0,f._Y)(c),i.className=null!=i.id&&l.includes(i.id)?"SubtypeGroupLayer":null!=i.id&&null!==o&&void 0!==o&&o.includes(i.id)?"OrientedImageryLayer":"FeatureLayer"),e.abrupt("return",i);case 15:if(e.t0="Scene Service"===r.type,!e.t0){e.next=20;break}return e.next=19,(0,f.CD)(r,s,t);case 19:s=e.sent;case 20:if(!((0,f.Q4)(s)>0)){e.next=22;break}return e.abrupt("return",j(s));case 22:return e.next=24,t.fetchServiceMetadata(u);case 24:if(p=e.sent,e.t1=a,!e.t1){e.next=30;break}return e.next=29,a();case 29:p.tables=e.sent;case 30:return e.abrupt("return",j(p));case 31:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return 1===(0,f.Q4)(e)&&{id:(0,f.Ok)(e)}}}}]);
//# sourceMappingURL=3139.b54a3b7f.chunk.js.map