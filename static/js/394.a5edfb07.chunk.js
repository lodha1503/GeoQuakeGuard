"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[394],{80394:function(e,n,r){r.d(n,{Fi:function(){return $},Hq:function(){return X},Mk:function(){return y},P_:function(){return H},Qp:function(){return Q},VO:function(){return C},Wt:function(){return Y},_D:function(){return T},kr:function(){return ee},lK:function(){return ne},nF:function(){return z},tB:function(){return B},ut:function(){return J},vF:function(){return re},zD:function(){return Z}});var i,t,a=r(74165),o=r(1413),l=r(29439),u=r(15861),s=(r(59486),r(63780)),f=r(10064),c=r(68860),h=r(15075),x=r(45925),m=r(92975),v=r(53866),p=r(585),g=r(80885),d=r(78952);function y(e,n,r){return!(0,x.canProjectWithoutEngine)(e,n,r)}function w(e,n,r){var i=y(e,n,r);if(i&&!(0,x.isLoaded)())throw new f.Z("rasterprojectionhelper-project","projection engine is not loaded");return i}(t=i||(i={}))[t.None=0]="None",t[t.North=1]="North",t[t.South=2]="South",t[t.Both=3]="Both";var M=function(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(1===r[0])return[0,0];for(var t=1,a=-1,o=1,l=-1,u=0;u<e.length;u+=2)isNaN(e[u])||(t=t>e[u]?e[u]:t,a=a>e[u]?a:e[u],o=o>e[u+1]?e[u+1]:o,l=l>e[u+1]?l:e[u+1]);for(var s=n.cols,f=n.rows,c=(a-t)/s/r[0],h=(l-o)/f/r[1],x=2*i,m=0,v=!1,p=[0,0],g=0;g<s-3;g++){for(var d=0;d<f-3;d++){var y=g*f*2+2*d,w=(e[y]+e[y+4]+e[y+4*f]+e[y+4*f+4])/4,M=(e[y+1]+e[y+5]+e[y+4*f+1]+e[y+4*f+5])/4,R=Math.abs((w-e[y+2*f+2])/c),P=Math.abs((M-e[y+2*f+3])/h);if(R+P>m&&(m=R+P,p=[R,P]),x&&m>x){v=!0;break}}if(v)break}return p},R={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},P=32,S=4,b=S,k=new Map,G=new Map,N=500;function Z(){return E.apply(this,arguments)}function E(){return(E=(0,u.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=(0,x.isLoaded)(),e.t0){e.next=4;break}return e.next=4,(0,x.load)();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,n,r){return w(e.spatialReference,n),r?(0,x.getTransformation)(n,e.spatialReference,e):(0,x.getTransformation)(e.spatialReference,n,e)}function C(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,t=e.spatialReference;if(t.equals(n))return e;w(t,n,i);var a,o=r.center,l=new v.Z({xmin:o.x-e.x/2,xmax:o.x+e.x/2,ymin:o.y-e.y/2,ymax:o.y+e.y/2,spatialReference:t}),u=(0,x.project)(l,n,i),s=J(n);if(null==u||null!=s&&u.width>=s){var f=(0,c.c9)(t)/(0,c.c9)(n);a={x:e.x*f,y:e.y*f}}else a={x:u.width,y:u.height};return a}function _(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01;return(0,c.c9)(e)?n/(0,c.c9)(e):0}function z(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],t=e.spatialReference;if(t.equals(n))return e;w(t,n,r);var a=(0,x.project)(e,n,r);return i&&a?(L([e],[a],t,n),a):a}function L(e,n,r,i){var t=D(r,!0),a=D(i,!0),o=_(r,N),l=_(i,N);if(o&&null!=t&&null!=a)for(var u=0;u<e.length;u++){var s=n[u];if(s){var f=e[u].x,c=s.x;c>=a[1]-l&&Math.abs(f-t[0])<o?s.x-=a[1]-a[0]:c<=a[0]+l&&Math.abs(f-t[1])<o&&(s.x+=a[1]-a[0])}}}function j(e){var n=e.inSR,r=e.outSR,i=e.datumTransformation,t=e.preferPE;if(n.equals(r))return F(e,null).points;if(n.isWebMercator&&r.isWGS84||n.isWGS84&&r.isWebMercator)return function(e){var n=e.cols,r=e.rows,i=e.xres,t=e.yres,a=e.usePixelCenter,o=e.inSR,l=e.outSR,u=e.xmin,s=e.ymax;a&&(u+=i/2,s-=t/2);for(var f=[],c=[],h=Math.max(n,r),m=0;m<h;m++){var v=u+i*Math.min(n,m),g=s-t*Math.min(r,m),d=(0,x.project)(new p.Z({x:v,y:g,spatialReference:o}),l);m<=n&&f.push(d.x),m<=r&&c.push(d.y)}for(var y=[],w=0;w<n;w++)for(var M=0;M<r;M++)y.push([f[w],c[M]]);return y}(e);if(w(n,r,i)&&t){if(n.isGeographic)return W(e);if(null!=I(n))return W(e)}return function(e){var n=F(e,null),r=n.points,i=e.inSR,t=e.outSR,a=e.datumTransformation,o=r.map((function(e){return new p.Z(e[0],e[1],i)})),l=(0,x.project)(o,t,a);return a&&L(o,l,i,t),l.map((function(e){return e?[e.x,e.y]:[NaN,NaN]}))}(e)}function W(e){var n=e.inSR,r=e.outSR,i=e.datumTransformation,t=F(e,I(n)),a=t.points,o=t.mask;if(!n.isGeographic){var u=n.wkid?h.P.coordsys(n.wkid):h.P.fromString(n.isGeographic?h.a.PE_TYPE_GEOGCS:h.a.PE_TYPE_PROJCS,n.wkt2||n.wkt);h.g.projToGeog(u,a.length,a)}if(null!=i&&i.steps.length){var s,f=179.9955;if(r.isGeographic&&(s=a.map((function(e){var n=(0,l.Z)(e,1)[0];return n>f?1:n<-f?-1:0}))),i.steps.forEach((function(e){var n=e.wkid?h.P.geogtran(e.wkid):h.P.fromString(h.a.PE_TYPE_GEOGTRAN,e.wkt);h.h.geogToGeog(n,a.length,a,null,e.isInverse?h.a.PE_TRANSFORM_2_TO_1:h.a.PE_TRANSFORM_1_TO_2)})),s)for(var c=0;c<a.length;c++){var x=s[c],m=a[c][0],v=m>f?1:m<-f?-1:0;x&&v&&x!==v&&(a[c][0]=x>0?m+360:m-360)}}if(!r.isGeographic){var p=I(r,!0),g=null!=p&&p.isEnvelope?[p.bbox[1],p.bbox[3]]:[-90,90];!function(e,n){for(var r=(0,l.Z)(n,2),i=r[0],t=r[1],a=0;a<e.length;a++){var o=e[a][1];(o<i||o>t)&&(e[a]=[NaN,NaN])}}(a,g);var d=r.wkid?h.P.coordsys(r.wkid):h.P.fromString(r.isGeographic?h.a.PE_TYPE_GEOGCS:h.a.PE_TYPE_PROJCS,r.wkt2||r.wkt);h.g.geogToProj(d,a.length,a)}var y=a;if(o&&a.length!==o.length){y=[];for(var w=0,M=0;w<o.length;w++)o[w]?y.push(a[M++]):y.push([NaN,NaN])}return y}function I(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e.wkid||e.wkt2||e.wkt;if(!r||e.isGeographic)return null;if(r=String(r),k.has(r)){var i=k.get(r);return n?null===i||void 0===i?void 0:i.gcs:null===i||void 0===i?void 0:i.pcs}var t=e.wkid?h.P.coordsys(e.wkid):h.P.fromString(e.isGeographic?h.a.PE_TYPE_GEOGCS:h.a.PE_TYPE_PROJCS,e.wkt2||e.wkt),a=O(t,_(e,1e-4)),o=O(t,0,!0);return k.set(r,{pcs:a,gcs:o}),n?o:a}function O(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=h.j.generate(e),t=r?e.horizonGcsGenerate():e.horizonPcsGenerate();if(!i||null===t||void 0===t||!t.length)return null;var a=!1,o=t.find((function(e){return 1===e.getInclusive()&&1===e.getKind()}));if(!o){if(o=t.find((function(e){return 1===e.getInclusive()&&0===e.getKind()})),!o)return null;a=!0}var u=r?0:(2===i.getNorthPoleLocation()?1:0)|(2===i.getSouthPoleLocation()?2:0),s=i.isPannableRectangle(),f=o.getCoord();if(a)return{isEnvelope:a,isPannable:s,vertices:f,coef:null,bbox:[f[0][0]-n,f[0][1]-n,f[1][0]+n,f[1][1]+n],poleLocation:u};for(var c=0,x=[],m=(0,l.Z)(f[0],2),v=m[0],p=m[1],g=(0,l.Z)(f[0],2),d=g[0],y=g[1],w=0,M=f.length;w<M;w++){++c===M&&(c=0);var R=(0,l.Z)(f[w],2),P=R[0],S=R[1],b=(0,l.Z)(f[c],2),k=b[0],G=b[1];if(G===S)x.push([P,k,S,G,2]);else{var N=(k-P)/(G-S||1e-4),Z=P-N*S;S<G?x.push([N,Z,S,G,0]):x.push([N,Z,G,S,1])}v=v<P?v:P,p=p<S?p:S,d=d>P?d:P,y=y>S?y:S}return{isEnvelope:!1,isPannable:s,vertices:f,coef:x,bbox:[v,p,d,y],poleLocation:u}}function F(e,n){var r=[],i=e.cols,t=e.rows,a=e.xres,o=e.yres,u=e.usePixelCenter,s=e.xmin,f=e.ymax;if(u&&(s+=a/2,f-=o/2),null==n){for(var c=0;c<i;c++)for(var h=0;h<t;h++)r.push([s+a*c,f-o*h]);return{points:r}}var x=new Uint8Array(i*t);if(n.isEnvelope){for(var m=(0,l.Z)(n.bbox,4),v=m[0],p=m[1],g=m[2],d=m[3],y=0,w=0;y<i;y++)for(var M=s+a*y,R=n.isPannable||M>=v&&M<=g,P=0;P<t;P++,w++){var S=f-o*P;R&&S>=p&&S<=d&&(r.push([M,S]),x[w]=1)}return{points:r,mask:x}}for(var b=n.coef,k=[],G=0;G<t;G++){for(var N=f-o*G,Z=[],E=[],T=0;T<b.length;T++){var C=(0,l.Z)(b[T],5),_=C[0],z=C[1],L=C[2],j=C[3],W=C[4];if(N===L&&L===j)Z.push(_),Z.push(z),E.push(2),E.push(2);else if(N>=L&&N<=j){var I=_*N+z;Z.push(I),E.push(W)}}var O=Z;if(Z.length>2){var F=2===E[0]?0:E[0],A=Z[0];O=[];for(var B=1;B<E.length;B++)2===E[B]&&B!==E.length-1||(E[B]!==F&&(O.push(0===F?Math.min(A,Z[B-1]):Math.max(A,Z[B-1])),F=E[B],A=Z[B]),B===E.length-1&&O.push(0===E[B]?Math.min(A,Z[B]):Math.max(A,Z[B])));O.sort((function(e,n){return e-n}))}else Z[0]>Z[1]&&(O=[Z[1],Z[0]]);k.push(O)}for(var Y=0,q=0;Y<i;Y++)for(var J=s+a*Y,D=0;D<t;D++,q++){var K=f-o*D,X=k[D];if(2===X.length)J>=X[0]&&J<=X[1]&&(r.push([J,K]),x[q]=1);else if(X.length>2){for(var H=!1,Q=0;Q<X.length;Q+=2)if(J>=X[Q]&&J<=X[Q+1]){H=!0;break}H&&(r.push([J,K]),x[q]=1)}}return{points:r,mask:x}}function A(e,n){var r,i=J(e[0].spatialReference);if(e.length<2||null==i)return e[0];if(n=null!==(r=n)&&void 0!==r?r:_(e[0].spatialReference),1===(e=e.filter((function(e){return e.width>n}))).length)return e[0];for(var t=e[0],a=t.xmin,o=t.xmax,l=t.ymin,u=t.ymax,s=1;s<e.length;s++){var f=e[s];o=f.xmax+i*s,l=Math.min(l,f.ymin),u=Math.max(u,f.ymax)}return new v.Z({xmin:a,xmax:o,ymin:l,ymax:u,spatialReference:e[0].spatialReference})}function B(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=e.spatialReference;if(a.equals(n))return e;var o=X(e),l=J(a,!0),u=J(n);if(0===o||null==l||null==u){var f=q(e,n,r,t);if(null==l&&null!=u&&Math.abs(f.width-u)<_(n)&&(0,x.isLoaded)()){var c=I(a);if(null!=c&&c.poleLocation===i.None&&e.width<(c.bbox[2]-c.bbox[0])/2)return function(e,n){var r=J(n);if(null==r)return null;var i=e.xmin,t=e.ymin,a=e.xmax,o=e.ymax,l=e.spatialReference,u=new g.Z({spatialReference:l,rings:[[[i,t],[a,t],[a,o],[i,o],[i,t]]]}),s=(0,x.project)(u,n);if(2!==s.rings.length||!s.rings[0].length||!s.rings[1].length)return null;for(var f=s.rings,c=_(l),h=new v.Z({spatialReference:n}),m=0;m<2;m++){i=a=f[m][0][0],t=o=f[m][0][1];for(var p=0;p<f[m].length;p++)i=i>f[m][p][0]?f[m][p][0]:i,a=a<f[m][p][0]?f[m][p][0]:a,t=t>f[m][p][1]?f[m][p][1]:t,o=o<f[m][p][1]?f[m][p][1]:o;if(0===m)h.ymin=t,h.ymax=o,h.xmin=i,h.xmax=a;else if(h.ymin=Math.min(h.ymin,t),h.ymax=Math.max(h.ymax,o),Math.abs(a-r/2)<c)h.xmin=i,h.xmax=h.xmax+r;else{if(!(Math.abs(i+r/2)<c))return null;h.xmax=a+r}}return h}(e,n)||f}return f}var h=e.clone().normalize();if(1===h.length&&e.xmax<l&&e.xmax-l/2>_(a))for(var m=e.xmin,p=e.xmax,d=0;d<=o;d++){var y=0===d?m:-l/2,w=d===o?p-l*d:l/2;h[d]=new v.Z({xmin:y,xmax:w,ymin:e.ymin,ymax:e.ymax,spatialReference:a})}return A(h.map((function(e){return q(e,n,r,t)})).filter(s.pC))}function Y(e,n,r){if("extent"===e.type){var i=e,t=i.xmin,a=i.ymin,o=i.xmax,l=i.ymax,u=i.spatialReference;e=new g.Z({rings:[[[t,l],[o,l],[o,a],[t,a],[t,l]]],spatialReference:u})}return e.spatialReference.equals(n)?e:(w(e.spatialReference,n,r),(0,x.project)(e,n,r))}function q(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],t=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=e.spatialReference;if(a.equals(n)||!n)return e;w(a,n,r);var o=(0,x.project)(e,n,r);if(t&&n.isWebMercator&&o&&(o.ymax=Math.min(20037508.342787,o.ymax),o.ymin=Math.max(-20037508.342787,o.ymin),o.ymin>=o.ymax))return null;if(!i||!o)return o;var l=D(a,!0),u=D(n,!0);if(null==l||null==u)return o;var s=_(a,.001),f=_(a,N),c=_(n,.001);if(Math.abs(o.xmin-u[0])<c&&Math.abs(o.xmax-u[1])<c){var h=Math.abs(e.xmin-l[0]),m=Math.abs(l[1]-e.xmax);if(h<s&&m>f){o.xmin=u[0];var v=[];v.push(new p.Z(e.xmax,e.ymin,a)),v.push(new p.Z(e.xmax,(e.ymin+e.ymax)/2,a)),v.push(new p.Z(e.xmax,e.ymax,a));var g=v.map((function(e){return z(e,n,r)})).filter((function(e){return!isNaN(null===e||void 0===e?void 0:e.x)})).map((function(e){return e.x}));o.xmax=Math.max.apply(null,g)}if(m<s&&h>f){o.xmax=u[1];var d=[];d.push(new p.Z(e.xmin,e.ymin,a)),d.push(new p.Z(e.xmin,(e.ymin+e.ymax)/2,a)),d.push(new p.Z(e.xmin,e.ymax,a));var y=d.map((function(e){return z(e,n,r)})).filter((function(e){return!isNaN(null===e||void 0===e?void 0:e.x)})).map((function(e){return e.x}));o.xmin=Math.min.apply(null,y)}}else{var M=_(n,.001);Math.abs(o.xmin-u[0])<M&&(o.xmin=u[0]),Math.abs(o.xmax-u[1])<M&&(o.xmax=u[1])}return o}function J(e){if(!e)return null;var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?20037508.342787:20037508.342788905;return e.isWebMercator?2*n:e.wkid&&e.isGeographic?360:2*R[e.wkid]||null}function D(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.isGeographic)return[-180,180];var r=J(e,n);return null!=r?[-r/2,r/2]:null}function K(e,n,r,i){var t=(e-n)/r;return t-Math.floor(t)!=0?t=Math.floor(t):i&&(t-=1),t}function X(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=J(e.spatialReference);if(null==r)return 0;var i=n?0:-r/2,t=_(e.spatialReference),a=!n&&Math.abs(e.xmax-r/2)<t?r/2:e.xmax,o=!n&&Math.abs(e.xmin+r/2)<t?-r/2:e.xmin;return K(a,i,r,!0)-K(o,i,r,!1)}function H(e){var n=e.storageInfo.origin.x,r=J(e.spatialReference,!0);if(null==r)return{originX:n,halfWorldWidth:null,pyramidsInfo:null};for(var i=r/2,t=e.nativePixelSize,a=e.storageInfo,o=e.extent,l=a.maximumPyramidLevel,u=a.blockWidth,s=a.pyramidScalingFactor,f=t.x,c=[],h=null!=e.transform&&"gcs-shift"===e.transform.type,x=n+(h?0:i),m=h?r-n:i-n,v=0;v<=l;v++){var p=(o.xmax-n)/f/u,g=p-Math.floor(p)==0?p:Math.ceil(p),d=m/f/u,y=d-Math.floor(d)==0?d:Math.ceil(d),w=Math.floor(x/f/u),M=Math.round(x/f)%u,R=(u-Math.round(m/f)%u)%u;c.push({resolutionX:f,blockWidth:u,datsetColumnCount:g,worldColumnCountFromOrigin:y,leftMargin:M,rightPadding:R,originColumnOffset:w}),f*=s}return{originX:n,halfWorldWidth:i,pyramidsInfo:c,hasGCSSShiftTransform:h}}function Q(e){var n=e.isAdaptive&&null==e.spacing,r=e.spacing||[P,P],i=U(e),t={cols:i.size[0]+1,rows:i.size[1]+1},a=i.outofBoundPointCount>0&&i.outofBoundPointCount<i.offsets.length/2,l=i.outofBoundPointCount===i.offsets.length/2||n&&a?[0,0]:M(i.offsets,t,r,b),u=(l[0]+l[1])/2,s=e.projectedExtent.spatialReference,f=e.srcBufferExtent.spatialReference;if(n&&(a||u>b)&&(y(s,f,e.datumTransformation)&&(s.isGeographic||I(s)),r=[S,S],t={cols:(i=U((0,o.Z)((0,o.Z)({},e),{},{spacing:r}))).size[0]+1,rows:i.size[1]+1},l=M(i.offsets,t,r,b)),i.error=l,r[0]>1&&(i.coefficients=V(i.offsets,t,a)),e.includeGCSGrid&&!s.isGeographic&&!s.isWebMercator)if(f.isGeographic)i.gcsGrid={offsets:i.offsets,coefficients:i.coefficients,spacing:r};else{var c=I(s);if(null!=c&&!c.isEnvelope){var x=function(e){if(!e||e.isGeographic)return e;var n,r=String(e.wkid||e.wkt2||e.wkt);return G.has(r)?n=G.get(r):(n=(e.wkid?h.P.coordsys(e.wkid):h.P.fromString(h.a.PE_TYPE_PROJCS,e.wkt2||e.wkt)).getGeogcs().getCode(),G.set(r,n)),new d.Z({wkid:n})}(s),m=B(e.projectedExtent,x),v=U((0,o.Z)((0,o.Z)({},e),{},{srcBufferExtent:m,spacing:r})).offsets,p=V(v,t,a);i.gcsGrid={offsets:v,coefficients:p,spacing:r}}}return i}function U(e){var n,r=e.projectedExtent,i=e.srcBufferExtent,t=e.pixelSize,a=e.datumTransformation,o=e.rasterTransform,l=r.spatialReference,u=i.spatialReference,s=w(l,u),f=r.xmin,c=r.ymin,h=r.xmax,x=r.ymax,m=J(u),v=null!=m&&(e.hasWrapAround||"gcs-shift"===(null===o||void 0===o?void 0:o.type)),g=e.spacing||[P,P],d=g[0]*t.x,y=g[1]*t.y,M=1===g[0],R=Math.ceil((h-f)/d-.1/g[0])+(M?0:1),b=Math.ceil((x-c)/y-.1/g[1])+(M?0:1),k=j({cols:R,rows:b,xmin:f,ymax:x,xres:d,yres:y,inSR:l,outSR:u,datumTransformation:a,preferPE:g[0]<=S,usePixelCenter:M}),G=[],Z=0,E=M?-1:NaN,T=i.xmin,C=i.xmax,z=i.ymax,L=i.width,W=i.height,O=_(u,N),F=null!=m&&T>0&&C>m/2,A=!1;if(s){var B=I(l);A=null!=B&&B.poleLocation>0}for(var Y=0;Y<R;Y++){for(var q=[],D=0;D<b;D++){var K=k[Y*b+D];if(v&&K[0]>C&&K[0]>m/2-O?K[0]-=m:v&&0===Y&&K[0]<0&&F&&!o&&(K[0]+=m),!K||isNaN(K[0])||isNaN(K[1]))G.push(E),G.push(E),q.push(null),Z++;else{if(o){var X=o.inverseTransform(new p.Z({x:K[0],y:K[1],spatialReference:u}));K=[X.x,X.y]}q.push(K),Y>0&&v&&n[D]&&K[0]<n[D][0]&&(K[0]+=m,A&&K[0]>C&&K[0]>m&&(K[0]-=m)),G.push((K[0]-T)/L),G.push((z-K[1])/W)}}n=q}return{offsets:G,error:null,coefficients:null,outofBoundPointCount:Z,spacing:g,size:M?[R,b]:[R-1,b-1]}}function V(e,n,r){for(var i=n.cols,t=n.rows,a=new Float32Array((i-1)*(t-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),l=new Float32Array([-1,1,0,0,-1,1,1,0,0]),u=0;u<i-1;u++){for(var s=0;s<t-1;s++){for(var f=u*t*2+2*s,c=e[f],h=e[f+1],x=e[f+2],m=e[f+3],v=e[f+=2*t],p=e[f+1],g=e[f+2],d=e[f+3],y=0,w=12*(s*(i-1)+u),M=0;M<3;M++)a[w++]=o[y++]*c+o[y++]*x+o[y++]*g;y=0;for(var R=0;R<3;R++)a[w++]=o[y++]*h+o[y++]*m+o[y++]*d;y=0;for(var P=0;P<3;P++)a[w++]=l[y++]*c+l[y++]*v+l[y++]*g;y=0;for(var S=0;S<3;S++)a[w++]=l[y++]*h+l[y++]*p+l[y++]*d}if(r)for(var b=0;b<a.length;b++)isNaN(a[b])&&(a[b]=-1)}return a}function $(e){var n=e.spatialReference,r=(0,m.C5)(n);if(!r)return e;var i=(0,l.Z)(r.valid,2),t=i[0],a=i[1],o=a-t,u=0;if(e.xmin<t){var s=t-e.xmin;u=Math.ceil(s/o)}else if(e.xmin>a){var f=e.xmin-a;u=-Math.ceil(f/o)}return new v.Z({spatialReference:e.spatialReference,xmin:e.xmin+u*o,ymin:e.ymin,xmax:e.xmax+u*o,ymax:e.ymax})}function ee(e,n,r){var i,t=n.storageInfo,a=n.pixelSize,o=0,l=!1,u=t.pyramidResolutions,s="mixed"===(null===(i=t.tileInfo.format)||void 0===i?void 0:i.toLowerCase())?Math.max(1,Math.min(3,t.tileInfo.dpi/96)):1,f=(e.x+e.y)/2/s;if(null!=u&&u.length){var h=u[u.length-1],x=(h.x+h.y)/2,m=(a.x+a.y)/2;if(f<=m)o=0;else if(f>=x)o=u.length,l=f/x>8;else for(var v,g=m,d=1;d<=u.length;d++){if(f<=(v=(u[d-1].x+u[d-1].y)/2)){f===v?o=d:"down"===r?(o=d-1,l=f/g>8):o="up"===r||f-g>v-f||f/g>2?d:d-1;break}g=v}var y=0===o?a:u[o-1];return l&&Math.min(y.x,y.y)*(0,c.c9)(n.spatialReference)>19567&&(l=!1),{pyramidLevel:o,pyramidResolution:new p.Z({x:y.x,y:y.y,spatialReference:n.spatialReference}),excessiveReading:l}}var w=Math.log(e.x/a.x)/Math.LN2,M=Math.log(e.y/a.y)/Math.LN2,R=n.storageInfo.maximumPyramidLevel||0;(o="down"===r?Math.floor(Math.min(w,M)):"up"===r?Math.ceil(Math.max(w,M)):Math.round((w+M)/2))<0?o=0:o>R&&(l=o>R+3,o=R);var P=Math.pow(2,o);return{pyramidLevel:o,pyramidResolution:new p.Z({x:P*n.nativePixelSize.x,y:P*n.nativePixelSize.y,spatialReference:n.spatialReference}),excessiveReading:l}}function ne(e,n){var r=e.pixelSize,i=e.extent,t=T(i,n,!1);return B(function(e,n){var r=e.clone().normalize();return 1===r.length?r[0]:A(r,n)}(i,(r.x+r.y)/16),n,t)}function re(e,n,r){var i,t,a,o=null!==(i=null===r||void 0===r?void 0:r.tileSize)&&void 0!==i?i:512,l=null===(t=null===r||void 0===r?void 0:r.alignGlobalDatasetWithAGOL)||void 0===t||t,u=!(null===r||void 0===r||!r.limitToSrcResolution),s=e.extent,f=e.spatialReference,h=e.pixelSize,x=C(new p.Z({x:h.x,y:h.y,spatialReference:f}),n,s);if(null==x)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};var m=(x.x+x.y)/2,v=(0,c.c9)(n),g=m*v*96*39.37,d=n.isGeographic?256/o*295828763.7958547:256/o*591657527.591555,y="vector-magdir"===e.dataType||"vector-uv"===e.dataType,w=ne(e,n),M=Math.min(Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2),Math.ceil(Math.log(d/2/g)/Math.LN2));if(!y&&l&&(n.isGeographic||n.isWebMercator)){var R=J(n);if(!(y=X(w)>0||null!=R&&w.width>R/4)&&null!=R){var P=-1;if(M<3)P=Math.pow(2,M)*m*o;else if(e.storageInfo){var S=e.storageInfo,b=S.maximumPyramidLevel,k=void 0===b?0:b,G=S.pyramidScalingFactor,N=void 0===G?2:G;P=Math.pow(N,k)*m*o}var Z=Math.ceil(R/P);y=1===Z||2===Z&&R/2-w.xmax<P}}var E,T=g,_=1.001,z=Math.min(2,Math.max(1.414,(null===(a=e.storageInfo)||void 0===a?void 0:a.pyramidScalingFactor)||2));if(y){T=d;var L=n.isGeographic?1341104507446289e-21:.29858214164761665,j=L*(96*v*39.37),W=n.isGeographic?4326:3857;(E=C(new p.Z({x:L,y:L,spatialReference:{wkid:W}}),f,w)).x*=T/j,E.y*=T/j}else{E={x:h.x,y:h.y};for(var I=0;T<d*(_/2)&&I<M;)I++,T*=z,E.x*=z,E.y*=z;Math.max(T,d)/Math.min(T,d)<=_&&(T=d)}for(var O=[T],F=[{x:E.x,y:E.y}],A=Math.min(70.5310735,g)/_;T>=A;)T/=z,E.x/=z,E.y/=z,O.push(T),F.push({x:E.x,y:E.y});if(u){var B=.001*h.x,Y=F.findIndex((function(e){return e.x>=h.x-B&&e.x<=h.x+B}));Y>-1?(F.length=Y+1,O.length=Y+1):(Y=F.findIndex((function(e){return e.x<=h.x+B})),Y>0&&(F.length=Y,O.length=Y))}return{projectedPixelSize:x,scales:O,srcResolutions:F,isCustomTilingScheme:!y}}}}]);
//# sourceMappingURL=394.a5edfb07.chunk.js.map