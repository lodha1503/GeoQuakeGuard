"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[3198],{23198:function(e,t,r){r.r(t),r.d(t,{uploadAssets:function(){return ee}});var n=r(74165),s=r(1413),a=r(37762),o=r(15861),u=r(76200),i=r(93169),c=r(32718),p=r(66978),l=r(38499),f=r(35995),d=r(71907),h=r(17493),v=r(43144),m=r(15671),Z=r(60136),g=r(29388),w=r(10064),y="upload-assets",b=function(){return new Error},x=function(e){(0,Z.Z)(r,e);var t=(0,g.Z)(r);function r(){return(0,m.Z)(this,r),t.call(this,"".concat(y,":unsupported"),"Layer does not support asset uploads.",b())}return(0,v.Z)(r)}(w.Z),k=function(e){(0,Z.Z)(r,e);var t=(0,g.Z)(r);function r(){return(0,m.Z)(this,r),t.call(this,"".concat(y,":no-glb-support"),"Layer does not support glb.",b())}return(0,v.Z)(r)}(w.Z),_=function(e){(0,Z.Z)(r,e);var t=(0,g.Z)(r);function r(){return(0,m.Z)(this,r),t.call(this,"".concat(y,":no-supported-source"),"No supported external source found",b())}return(0,v.Z)(r)}(w.Z),P=function(e){(0,Z.Z)(r,e);var t=(0,g.Z)(r);function r(){return(0,m.Z)(this,r),t.call(this,"".concat(y,":not-base-64"),"Expected gltf data in base64 format after conversion.",b())}return(0,v.Z)(r)}(w.Z),T=function(e){(0,Z.Z)(r,e);var t=(0,g.Z)(r);function r(){return(0,m.Z)(this,r),t.call(this,"".concat(y,":unable-to-prepare-options"),"Unable to prepare uploadAsset request options.",b())}return(0,v.Z)(r)}(w.Z),A=function(e){(0,Z.Z)(r,e);var t=(0,g.Z)(r);function r(e,n){return(0,m.Z)(this,r),t.call(this,"".concat(y,":bad-response"),"Bad response. Uploaded ".concat(e," items and received ").concat(n," results."),b())}return(0,v.Z)(r)}(w.Z),F=function(e){(0,Z.Z)(r,e);var t=(0,g.Z)(r);function r(e,n){var s,a;return(0,m.Z)(this,r),t.call(this,"".concat(y,"-layer:upload-failed"),"Failed to upload mesh file ".concat(e,". Error code: ").concat(null!==(s=null===n||void 0===n?void 0:n.code)&&void 0!==s?s:"-1",". Error message: ").concat(null!==(a=null===n||void 0===n?void 0:n.messages)&&void 0!==a?a:"unknown"),b())}return(0,v.Z)(r)}(w.Z),E=function(e){(0,Z.Z)(r,e);var t=(0,g.Z)(r);function r(e){return(0,m.Z)(this,r),t.call(this,"".concat(y,"-layer:unsupported-format"),"The service allowed us to upload an asset of FormatID ".concat(e,", but it does not list it in its supported formats."),b())}return(0,v.Z)(r)}(w.Z),M=function(e){(0,Z.Z)(r,e);var t=(0,g.Z)(r);function r(){return(0,m.Z)(this,r),t.call(this,"".concat(y,":convert3D-failed"),"convert3D failed.")}return(0,v.Z)(r)}(w.Z),j={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}},S=r(25899),I=r(29439),N=r(42537),D=r(77427);function U(e){return new B(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){},arguments.length>2?arguments[2]:void 0)}var B=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){},n=arguments.length>2?arguments[2]:void 0;if((0,m.Z)(this,e),this.onProgress=r,this.taskName=n,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof t){this._weights={};for(var s=0;s<t;s++){var a=s,o=1/t;this._weights[a]=o,this._progressMap.set(a,0)}}else this._weights=t;this.emitProgress()}return(0,v.Z)(e,[{key:"emitProgress",value:function(){var e,t=0,r=(0,a.Z)(this._progressMap.entries());try{for(r.s();!(e=r.n()).done;){var n=(0,I.Z)(e.value,2),s=n[0];t+=n[1]*this._weights[s]}}catch(Z){r.e(Z)}finally{r.f()}if(1===t&&(0,i.Z)("enable-feature:esri-3dofl-upload-timings")){var o,u=Math.round(performance.now()-(null!==(o=this._startTime)&&void 0!==o?o:0))/1e3;console.log("".concat(this.taskName," done in ").concat(u," sec"));var c,p=(0,a.Z)(this._timingsMap);try{for(p.s();!(c=p.n()).done;){var l,f=(0,I.Z)(c.value,2),d=f[0],h=f[1],v=Math.round(h.end-h.start)/1e3,m=Math.round(v/u*100);console.log(null!==(l=this.taskName)&&void 0!==l?l:"Task",{stepKey:d,stepTime:v,relativeTime:m})}}catch(Z){p.e(Z)}finally{p.f()}}this.onProgress(t)}},{key:"setProgress",value:function(e,t){if(this._progressMap.set(e,t),(0,i.Z)("enable-feature:esri-3dofl-upload-timings")){var r,n=performance.now();null!==(r=this._startTime)&&void 0!==r||(this._startTime=n);var s=(0,D.s1)(this._timingsMap,e,(function(){return{start:n,end:0}}));1===t&&(s.end=n)}this.emitProgress()}},{key:"simulate",value:function(e,t){var r=this;return C((function(t){return r.setProgress(e,t)}),t)}},{key:"makeOnProgress",value:function(e){var t=this;return function(r){return t.setProgress(e,r)}}}]),e}();function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G,r=performance.now();e(0);var n=setInterval((function(){var n=performance.now()-r,s=1-Math.exp(-n/t);e(s)}),z);return(0,N.kB)((function(){clearInterval(n),e(1)}))}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R;return(0,l.up)((0,l._H)(e*H/t))}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:q;return(0,l.up)((0,l._H)(e*H/t))}var R=10,q=10,H=8e-6,z=(0,l.HA)(50),G=(0,l.HA)(1e3),J=1e6,K=20*J,W=2e9,Q=3;function V(e,t,r){return X.apply(this,arguments)}function X(){return X=(0,o.Z)((0,n.Z)().mark((function e(t,r,s){var a,i,c,l,d,h,v,m,Z,g,w,y,b,x,k,_,P,T,A,F,E,M,j,I,N,D,B,C,O;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.data,i=t.name,c=t.description,l=null,e.prev=2,d=(0,f.v_)(r,"uploads"),h=(0,f.v_)(d,"info"),e.next=7,(0,u.Z)(h,{query:{f:"json"},responseType:"json"});case 7:if(v=e.sent,m=v.data,(0,p.k_)(s),Z=(0,S.M8)(r),g=m.maxUploadFileSize*J,w=Z?W:g,y=Z?Math.min(K,g):K,!(a.size>w)){e.next=13;break}throw new Error("Data too large");case 13:return b=(0,f.v_)(d,"register"),e.next=16,(0,u.Z)(b,{query:{f:"json",itemName:Y(i),description:c},responseType:"json",method:"post"});case 16:if(x=e.sent,k=x.data,(0,p.k_)(s),k.success){e.next=20;break}throw new Error("Registration failed");case 20:for(_=k.item.itemID,l=(0,f.v_)(d,_),P=(0,f.v_)(l,"uploadPart"),T=Math.ceil(a.size/y),A=new Array,F=0;F<T;++F)A.push(a.slice(F*y,Math.min((F+1)*y,a.size)));for(E=A.slice().reverse(),M=new Array,j=U(T,null===s||void 0===s?void 0:s.onProgress,"uploadItem"),I=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var t,r,a,o,i,c,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===E.length){e.next=16;break}return t=A.length-E.length,r=E.pop(),a=new FormData,o=j.simulate(t,L(r.size)),e.prev=2,i=r,a.append("f","json"),a.append("file",i),a.append("partId","".concat(t)),e.next=7,(0,u.Z)(P,{timeout:0,body:a,responseType:"json",method:"post"});case 7:if(c=e.sent,l=c.data,(0,p.k_)(s),l.success){e.next=11;break}throw new Error("Part upload failed");case 11:return e.prev=11,o.remove(),e.finish(11);case 14:e.next=0;break;case 16:case"end":return e.stop()}}),e,null,[[2,,11,14]])})));return function(){return e.apply(this,arguments)}}(),N=0;N<Q&&0!==E.length;++N)M.push(I());return e.next=28,Promise.all(M);case 28:return D=(0,f.v_)(l,"commit"),e.next=31,(0,u.Z)(D,{query:{f:"json",parts:A.map((function(e,t){return t})).join(",")},responseType:"json",method:"post"});case 31:if(B=e.sent,C=B.data,(0,p.k_)(s),C.success){e.next=35;break}throw new Error("Commit failed");case 35:return e.abrupt("return",C.item);case 38:if(e.prev=38,e.t0=e.catch(2),null==l){e.next=44;break}return O=(0,f.v_)(l,"delete"),e.next=44,(0,u.Z)(O,{query:{f:"json"},responseType:"json",method:"post"});case 44:throw e.t0;case 45:case"end":return e.stop()}}),e,null,[[2,38]])}))),X.apply(this,arguments)}function Y(e){return e.replaceAll("/","_").replaceAll("\\","_")}var $=r(18277);function ee(e,t,r){return te.apply(this,arguments)}function te(){return te=(0,o.Z)((0,n.Z)().mark((function e(t,r,a){var o,u,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=t.length){e.next=3;break}return e.abrupt("return",(null!==a&&void 0!==a&&null!==(o=a.onProgress)&&void 0!==o&&o.call(a,1),[]));case 3:return i=U(u,null===a||void 0===a?void 0:a.onProgress,"uploadAssets"),e.abrupt("return",Promise.all(t.map((function(e,t){return re(e,r,(0,s.Z)((0,s.Z)({},a),{},{onProgress:i.makeOnProgress(t)}))}))));case 5:case"end":return e.stop()}}),e)}))),te.apply(this,arguments)}function re(e,t,r){return ne.apply(this,arguments)}function ne(){return ne=(0,o.Z)((0,n.Z)().mark((function e(t,r,s){var a,o,u,i,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.layer,u=r.ongoingUploads,!(i=u.get(t))){e.next=4;break}return e.abrupt("return",i);case 4:if(De(o)){e.next=6;break}throw new x;case 6:if(!se(t,o)){e.next=8;break}return e.abrupt("return",(null!==s&&void 0!==s&&null!==(a=s.onProgress)&&void 0!==a&&a.call(s,1),t));case 8:return c=ae(t,o,s),u.set(t,c),e.prev=10,e.next=13,c;case 13:return e.prev=13,u.delete(t),e.finish(13);case 16:return e.abrupt("return",t);case 17:case"end":return e.stop()}}),e,null,[[10,,13,16]])}))),ne.apply(this,arguments)}function se(e,t){var r=t.parsedUrl;return null!=r&&e.metadata.externalSources.some((function(e){return(0,h.JG)(e,r)}))}function ae(e,t,r){return oe.apply(this,arguments)}function oe(){return oe=(0,o.Z)((0,n.Z)().mark((function e(t,r,s){var a,o,u,i,c,l,f;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.metadata,o=a.displaySource,u=me(null===o||void 0===o?void 0:o.source,r),i=!!u,c=a.externalSources.length>0,l=i?ue(u,r,s):c?ce(t,r,s):le(t,r,s),e.next=8,l;case 8:return f=e.sent,e.abrupt("return",((0,p.k_)(s),t.addExternalSources([f]),t));case 10:case"end":return e.stop()}}),e)}))),oe.apply(this,arguments)}function ue(e,t,r){return ie.apply(this,arguments)}function ie(){return ie=(0,o.Z)((0,n.Z)().mark((function e(t,r,s){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge(t,r,s);case 2:return e.t0=e.sent,e.t1=!0,e.abrupt("return",{source:e.t0,original:e.t1});case 5:case"end":return e.stop()}}),e)}))),ie.apply(this,arguments)}function ce(e,t,r){return pe.apply(this,arguments)}function pe(){return pe=(0,o.Z)((0,n.Z)().mark((function e(t,r,s){var a,o,u,i,c,p,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Ue(r),o=t.metadata.externalSources,u=ve(o,r)){e.next=3;break}throw new _;case 3:return i=U(j.uploadConvertibleSource,null===s||void 0===s?void 0:s.onProgress,"uploadConvertibleSource"),e.next=6,ge(u,r,{onProgress:i.makeOnProgress("uploadEditSource")});case 6:return c=e.sent,t.addExternalSources([{source:c,original:!0}]),p=u.reduce((function(e,t){var r=t.asset;return r instanceof File?e+r.size:e}),0),l=i.simulate("serviceAssetsToGlb",O(p)),e.prev=9,e.next=12,Me(c,r,a);case 12:return e.t0=e.sent,e.abrupt("return",{source:e.t0});case 14:return e.prev=14,l.remove(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[9,,14,17]])}))),pe.apply(this,arguments)}function le(e,t,r){return fe.apply(this,arguments)}function fe(){return fe=(0,o.Z)((0,n.Z)().mark((function e(t,r,a){var o,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=U(j.uploadLocalMesh,null===a||void 0===a?void 0:a.onProgress,"uploadLocalMesh"),u=de(t,r,(0,s.Z)((0,s.Z)({},a),{},{onProgress:o.makeOnProgress("meshToAssetBlob")})),e.next=3,ye([u],r,(0,s.Z)((0,s.Z)({},a),{},{onProgress:o.makeOnProgress("uploadAssetBlobs")}));case 3:return e.t0=e.sent,e.t1=t.extent.clone(),e.t2=!0,e.abrupt("return",{source:e.t0,extent:e.t1,original:e.t2});case 7:case"end":return e.stop()}}),e)}))),fe.apply(this,arguments)}function de(e,t,r){return he.apply(this,arguments)}function he(){return he=(0,o.Z)((0,n.Z)().mark((function e(t,r,s){var a,o,u,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Ue(r),e.next=3,t.load(s);case 3:return o=e.sent,e.next=6,o.toBinaryGLTF({ignoreLocalTransform:!0});case 6:return u=e.sent,(0,p.k_)(s),e.next=10,u.buffer();case 10:return i=e.sent,e.abrupt("return",((0,p.k_)(s),{blob:new Blob([i.data],{type:i.type}),assetName:"".concat((0,d.zS)(),".glb"),assetType:a}));case 12:case"end":return e.stop()}}),e)}))),he.apply(this,arguments)}function ve(e,t){var r,n=(0,a.Z)(e);try{for(n.s();!(r=n.n()).done;){var s=me(r.value.source,t);if(s)return s}}catch(o){n.e(o)}finally{n.f()}return null}function me(e,t){if(!e)return null;for(var r=t.infoFor3D,n=r.supportedFormats,s=r.editFormats,a=(0,h.zE)(e),o=new Array,u=!1,i=0;i<a.length;++i){var c=Ze(a[i],n);if(!c)return null;s.includes(c.assetType)&&(u=!0),o.push(c)}return u?o:null}function Ze(e,t){var r=(0,h.vj)(e,t);return r?{asset:e,assetType:r}:null}function ge(e,t,r){return we.apply(this,arguments)}function we(){return we=(0,o.Z)((0,n.Z)().mark((function e(t,r,s){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ye(t.map((function(e){return xe(e,s)})),r,s));case 1:case"end":return e.stop()}}),e)}))),we.apply(this,arguments)}function ye(e,t,r){return be.apply(this,arguments)}function be(){return be=(0,o.Z)((0,n.Z)().mark((function e(t,r,a){var o,u,i,c,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=U(j.uploadAssetBlobs,null===a||void 0===a?void 0:a.onProgress,"uploadAssetBlobs"),e.next=3,Te(t,r,(0,s.Z)((0,s.Z)({},a),{},{onProgress:o.makeOnProgress("prepareAssetItems")}));case 3:return u=e.sent,(0,p.k_)(a),i=u.map((function(e){return e.item})),e.next=8,Ae(i,r,(0,s.Z)((0,s.Z)({},a),{},{onProgress:o.makeOnProgress("uploadAssetItems")}));case 8:return c=e.sent,l=c.uploadResults,e.abrupt("return",((0,p.k_)(a),t.map((function(e,t){return Ee(u[t],l[t],r)}))));case 11:case"end":return e.stop()}}),e)}))),be.apply(this,arguments)}function xe(e,t){return ke.apply(this,arguments)}function ke(){return ke=(0,o.Z)((0,n.Z)().mark((function e(t,r){var s,a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.asset,a=t.assetType,!(s instanceof File)){e.next=3;break}return e.abrupt("return",{blob:s,assetName:s.name,assetType:a});case 3:return e.next=5,s.toBlob(r);case 5:return o=e.sent,e.abrupt("return",((0,p.k_)(r),{blob:o,assetName:s.assetName,assetType:a}));case 7:case"end":return e.stop()}}),e)}))),ke.apply(this,arguments)}function _e(e,t,r){return Pe.apply(this,arguments)}function Pe(){return Pe=(0,o.Z)((0,n.Z)().mark((function e(t,r,s){var a,o,u,i,l,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.blob,o=t.assetType,u=t.assetName,i=null,e.prev=2,e.next=5,V({data:a,name:u},r.url,s);case 5:l=e.sent,(0,p.k_)(s),i={assetType:o,assetUploadId:l.itemID},e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),(0,p.r9)(e.t0),c.Z.getLogger("esri.layers.graphics.sources.support.uploadAssets").warnOnce("Service ".concat(r.url," does not support the REST Uploads API."));case 12:if(i){e.next=19;break}return e.next=15,(0,f.IR)(a);case 15:if(d=e.sent,(0,p.k_)(s),d.isBase64){e.next=18;break}throw new P;case 18:i={assetType:o,assetData:d.data};case 19:if(i){e.next=21;break}throw new T;case 21:return e.abrupt("return",{item:i,assetName:u});case 22:case"end":return e.stop()}}),e,null,[[2,9]])}))),Pe.apply(this,arguments)}function Te(e,t,r){var a=U(e.length,null===r||void 0===r?void 0:r.onProgress,"prepareAssetItems");return Promise.all(e.map(function(){var e=(0,o.Z)((0,n.Z)().mark((function e(o,u){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=_e,e.next=3,o;case 3:return e.t1=e.sent,e.t2=t,e.t3=(0,s.Z)((0,s.Z)({},r),{},{onProgress:a.makeOnProgress(u)}),i=(0,e.t0)(e.t1,e.t2,e.t3),e.abrupt("return",((0,p.k_)(r),i));case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()))}function Ae(e,t,r){return Fe.apply(this,arguments)}function Fe(){return Fe=(0,o.Z)((0,n.Z)().mark((function e(t,r,s){var a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=C(null===s||void 0===s?void 0:s.onProgress),e.prev=1,e.next=4,(0,u.Z)((0,f.v_)(r.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(t)},method:"post",responseType:"json"});case 4:if(o=e.sent,(0,p.k_)(s),o.data.uploadResults.length===t.length){e.next=7;break}throw new A(t.length,o.data.uploadResults.length);case 7:return e.abrupt("return",o.data);case 8:return e.prev=8,a.remove(),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,,8,11]])}))),Fe.apply(this,arguments)}function Ee(e,t,r){if(!t.success){var n=t.error;throw new F(e.assetName,n)}var s=t.assetHash,a=e.assetName,o=e.item.assetType,u=r.infoFor3D.supportedFormats,i=(0,$.d1)(o,u);if(!i)throw new E(o);return new h.CP(a,i,[new h.LL("".concat(r.parsedUrl.path,"/assets/").concat(s),s)])}function Me(e,t,r){return je.apply(this,arguments)}function je(){return je=(0,o.Z)((0,n.Z)().mark((function e(t,r,s){var a,o,u,i,c,p,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.map((function(e){return{assetName:e.assetName,assetHash:e.parts[0].partHash}})),u=null===(a=r.capabilities)||void 0===a?void 0:a.operations.supportsAsyncConvert3D,i={f:"json",assets:JSON.stringify(o),transportType:"esriTransportTypeUrl",targetFormat:s,async:u},c=(0,f.v_)(r.parsedUrl.path,"convert3D"),e.prev=1,e.next=4,(u?Ie:Se)(c,{query:i,responseType:"json",timeout:0});case 4:p=e.sent.data,e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(1),new M;case 10:return l=r.infoFor3D.supportedFormats,e.abrupt("return",p.assets.map((function(e){var t=(0,$.S0)(e.contentType,l);if(!t)throw new E(t);return new h.CP(e.assetName,e.contentType,[new h.LL(e.assetURL,e.assetHash)])})));case 12:case"end":return e.stop()}}),e,null,[[1,7]])}))),je.apply(this,arguments)}function Se(e,t){return(0,u.Z)(e,t)}function Ie(e,t){return Ne.apply(this,arguments)}function Ne(){return Ne=(0,o.Z)((0,n.Z)().mark((function e(t,r){var s,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)(t,r);case 2:s=e.sent.data.statusUrl;case 3:return e.next=5,(0,u.Z)(s,{query:{f:"json"},responseType:"json"});case 5:a=e.sent.data,e.t0=a.status,e.next="Completed"===e.t0?9:"CompletedWithErrors"===e.t0?10:"Failed ImportChanges"===e.t0||"InProgress"===e.t0||"Pending"===e.t0||"ExportAttachments"===e.t0||"ExportChanges"===e.t0||"ExportingData"===e.t0||"ExportingSnapshot"===e.t0||"ImportAttachments"===e.t0||"ProvisioningReplica"===e.t0||"UnRegisteringReplica"===e.t0?11:12;break;case 9:return e.abrupt("return",(0,u.Z)(a.resultUrl,{query:{f:"json"},responseType:"json"}));case 10:throw new Error(a.status);case 11:return e.abrupt("break",13);case 12:throw new Error;case 13:return e.next=15,(0,p.e4)(Be);case 15:e.next=3;break;case 17:case"end":return e.stop()}}),e)}))),Ne.apply(this,arguments)}function De(e){return!!e.infoFor3D&&!!e.url}function Ue(e){var t,r=e.infoFor3D,n=null!==(t=(0,$.S0)("model/gltf-binary",r.supportedFormats))&&void 0!==t?t:(0,$.Ow)("glb",r.supportedFormats);if(!n)throw new k;return n}var Be=(0,l.HA)(1e3)}}]);
//# sourceMappingURL=3198.96ad55a9.chunk.js.map