"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[7066],{48976:function(e,t,r){r.d(t,{a:function(){return h},c:function(){return y},g:function(){return s},j:function(){return z},k:function(){return g},m:function(){return l},s:function(){return f}});var n=r(11873),o=r(98131),i=r(71353),a=r(26277),u=r(11186),c=r(90045);function f(e,t,r){r*=.5;var n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e}function s(e,t){var r=2*Math.acos(t[3]),n=Math.sin(r/2);return n>(0,a.g)()?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=1,e[1]=0,e[2]=0),r}function l(e,t,r){var n=t[0],o=t[1],i=t[2],a=t[3],u=r[0],c=r[1],f=r[2],s=r[3];return e[0]=n*s+a*u+o*f-i*c,e[1]=o*s+a*c+i*u-n*f,e[2]=i*s+a*f+n*c-o*u,e[3]=a*s-n*u-o*c-i*f,e}function d(e,t,r,n){var o,i,u,c,f,s=t[0],l=t[1],d=t[2],h=t[3],v=r[0],g=r[1],y=r[2],w=r[3];return(i=s*v+l*g+d*y+h*w)<0&&(i=-i,v=-v,g=-g,y=-y,w=-w),1-i>(0,a.g)()?(o=Math.acos(i),u=Math.sin(o),c=Math.sin((1-n)*o)/u,f=Math.sin(n*o)/u):(c=1-n,f=n),e[0]=c*s+f*v,e[1]=c*l+f*g,e[2]=c*d+f*y,e[3]=c*h+f*w,e}function h(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function v(e,t){var r,n=t[0]+t[4]+t[8];if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{var o=0;t[4]>t[0]&&(o=1),t[8]>t[3*o+o]&&(o=2);var i=(o+1)%3,a=(o+2)%3;r=Math.sqrt(t[3*o+o]-t[3*i+i]-t[3*a+a]+1),e[o]=.5*r,r=.5/r,e[3]=(t[3*i+a]-t[3*a+i])*r,e[i]=(t[3*i+o]+t[3*o+i])*r,e[a]=(t[3*a+o]+t[3*o+a])*r}return e}function g(e,t,r,n){var o=.5*Math.PI/180;t*=o,r*=o,n*=o;var i=Math.sin(t),a=Math.cos(t),u=Math.sin(r),c=Math.cos(r),f=Math.sin(n),s=Math.cos(n);return e[0]=i*c*s-a*u*f,e[1]=a*u*s+i*c*f,e[2]=a*c*f-i*u*s,e[3]=a*c*s+i*u*f,e}var y=c.c,w=c.s,b=c.a,p=l,m=c.b,M=c.d,C=c.l,U=c.f,Z=U,I=c.g,A=I,O=c.n,z=c.h,L=c.e;var T=(0,i.c)(),F=(0,i.f)(1,0,0),B=(0,i.f)(0,1,0);var P=(0,o.a)(),E=(0,o.a)();var k=(0,n.a)();Object.freeze(Object.defineProperty({__proto__:null,add:b,calculateW:function(e,t){var r=t[0],n=t[1],o=t[2];return e[0]=r,e[1]=n,e[2]=o,e[3]=Math.sqrt(Math.abs(1-r*r-n*n-o*o)),e},conjugate:h,copy:y,dot:M,equals:L,exactEquals:z,fromEuler:g,fromMat3:v,getAxisAngle:s,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},invert:function(e,t){var r=t[0],n=t[1],o=t[2],i=t[3],a=r*r+n*n+o*o+i*i,u=a?1/a:0;return e[0]=-r*u,e[1]=-n*u,e[2]=-o*u,e[3]=i*u,e},len:Z,length:U,lerp:C,mul:p,multiply:l,normalize:O,random:function(e){var t=a.R,r=t(),n=t(),o=t(),i=Math.sqrt(1-r),u=Math.sqrt(r);return e[0]=i*Math.sin(2*Math.PI*n),e[1]=i*Math.cos(2*Math.PI*n),e[2]=u*Math.sin(2*Math.PI*o),e[3]=u*Math.cos(2*Math.PI*o),e},rotateX:function(e,t,r){r*=.5;var n=t[0],o=t[1],i=t[2],a=t[3],u=Math.sin(r),c=Math.cos(r);return e[0]=n*c+a*u,e[1]=o*c+i*u,e[2]=i*c-o*u,e[3]=a*c-n*u,e},rotateY:function(e,t,r){r*=.5;var n=t[0],o=t[1],i=t[2],a=t[3],u=Math.sin(r),c=Math.cos(r);return e[0]=n*c-i*u,e[1]=o*c+a*u,e[2]=i*c+n*u,e[3]=a*c-o*u,e},rotateZ:function(e,t,r){r*=.5;var n=t[0],o=t[1],i=t[2],a=t[3],u=Math.sin(r),c=Math.cos(r);return e[0]=n*c+o*u,e[1]=o*c-n*u,e[2]=i*c+a*u,e[3]=a*c-i*u,e},rotationTo:function(e,t,r){var n=(0,u.j)(t,r);return n<-.999999?((0,u.b)(T,F,t),(0,u.k)(T)<1e-6&&(0,u.b)(T,B,t),(0,u.n)(T,T),f(e,T,Math.PI),e):n>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,u.b)(T,t,r),e[0]=T[0],e[1]=T[1],e[2]=T[2],e[3]=1+n,O(e,e))},scale:m,set:w,setAxes:function(e,t,r,n){var o=k;return o[0]=r[0],o[3]=r[1],o[6]=r[2],o[1]=n[0],o[4]=n[1],o[7]=n[2],o[2]=-t[0],o[5]=-t[1],o[8]=-t[2],O(e,v(e,o))},setAxisAngle:f,slerp:d,sqlerp:function(e,t,r,n,o,i){return d(P,t,o,i),d(E,r,n,i),d(e,P,E,2*i*(1-i)),e},sqrLen:A,squaredLength:I,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}},Symbol.toStringTag,{value:"Module"}))},28278:function(e,t,r){r.d(t,{I_:function(){return v},W7:function(){return w},qM:function(){return p}});var n=r(1413),o=r(37762),i=r(10064),a=r(84652),u=r(32718),c=r(2821),f=r(4760),s=u.Z.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function l(e,t,r){for(var n="",o=0;o<r;){var a=e[t+o];if(a<128)n+=String.fromCharCode(a),o++;else if(a>=192&&a<224){if(o+1>=r)throw new i.Z("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");var u=(31&a)<<6|63&e[t+o+1];n+=String.fromCharCode(u),o+=2}else if(a>=224&&a<240){if(o+2>=r)throw new i.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var c=(15&a)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];n+=String.fromCharCode(c),o+=3}else{if(!(a>=240&&a<248))throw new i.Z("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");if(o+3>=r)throw new i.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var f=(7&a)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(f>=65536){var s=55296+(f-65536>>10),l=56320+(1023&f);n+=String.fromCharCode(s,l)}else n+=String.fromCharCode(f);o+=4}}return n}function d(e,t){for(var r={byteOffset:0,byteCount:0,fields:Object.create(null)},n=0,o=0;o<t.length;o++){var i=t[o],a=i.valueType||i.type,u=M[a];r.fields[i.property]=u(e,n),n+=m[a].BYTES_PER_ELEMENT}return r.byteCount=n,r}function h(e,t,r){var n,o,a=[],u=0;for(o=0;o<e;o+=1){if((n=t[o])>0){if(a.push(l(r,u,n-1)),0!==r[u+n-1])throw new i.Z("string-array-error","Invalid string array: missing null termination.")}else a.push(null);u+=n}return a}function v(e,t){return new(0,m[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function g(e,t,r){for(var n=null!=t.header?d(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},o={header:n,byteOffset:n.byteCount,byteCount:0,entries:Object.create(null)},u=n.byteCount,c=0;c<t.ordering.length;c++){var f,s,l=t.ordering[c],h=(0,a.d9)(t[l]);if(h.count=null!==(f=n.fields.count)&&void 0!==f?f:0,"String"===h.valueType){if(h.byteOffset=u,h.byteCount=n.fields[l+"ByteCount"],"UTF-8"!==h.encoding)throw new i.Z("unsupported-encoding","Unsupported String encoding.",{encoding:h.encoding});if(h.timeEncoding&&"ECMA_ISO8601"!==h.timeEncoding)throw new i.Z("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:h.timeEncoding})}else{if(!C(h.valueType))throw new i.Z("unsupported-value-type","Unsupported binary valueType",{valueType:h.valueType});var v=U(h.valueType);u+=u%v!=0?v-u%v:0,h.byteOffset=u,h.byteCount=v*h.valuesPerElement*h.count}u+=null!==(s=h.byteCount)&&void 0!==s?s:0,o.entries[l]=h}return o.byteCount=u-o.byteOffset,o}function y(e,t,r){if(t!==e&&s.error("Invalid ".concat(r," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new i.Z("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function w(e,t){var r,i=d(e,t&&t.header),a=i.byteCount,u={isDraco:!1,header:i,byteOffset:i.byteCount,byteCount:0,vertexAttributes:{}},c=i.fields,f=null!=c.vertexCount?c.vertexCount:c.count,s=(0,o.Z)(t.ordering);try{for(s.s();!(r=s.n()).done;){var l=r.value;if(t.vertexAttributes[l]){var h=(0,n.Z)((0,n.Z)({},t.vertexAttributes[l]),{},{byteOffset:a,count:f}),v=b[l]||"_"+l;u.vertexAttributes[v]=h,a+=U(h.valueType)*h.valuesPerElement*f}}}catch(z){s.e(z)}finally{s.f()}var g=c.faceCount;if(t.faces&&g){u.faces={};var w,p=(0,o.Z)(t.ordering);try{for(p.s();!(w=p.n()).done;){var m=w.value;if(t.faces[m]){var M=(0,n.Z)((0,n.Z)({},t.faces[m]),{},{byteOffset:a,count:g});u.faces[m]=M,a+=U(M.valueType)*M.valuesPerElement*g}}}catch(z){p.e(z)}finally{p.f()}}var C=c.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&C){u.featureAttributes={};var Z,I=(0,o.Z)(t.featureAttributeOrder);try{for(I.s();!(Z=I.n()).done;){var A=Z.value;if(t.featureAttributes[A]){var O=(0,n.Z)((0,n.Z)({},t.featureAttributes[A]),{},{byteOffset:a,count:C});u.featureAttributes[A]=O,a+=("UInt64"===O.valueType?8:U(O.valueType))*O.valuesPerElement*C}}}catch(z){I.e(z)}finally{I.f()}}return y(a,e.byteLength,"geometry"),u.byteCount=a-u.byteOffset,u}var b={position:f.T.POSITION,normal:f.T.NORMAL,color:f.T.COLOR,uv0:f.T.UV0,region:f.T.UVREGION};function p(e,t,r){if("lepcc-rgb"===e.encoding)return(0,c.IT)(t);if("lepcc-intensity"===e.encoding)return(0,c.ti)(t);if(null!=e.encoding&&""!==e.encoding)throw new i.Z("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(s.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(s.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");var n=g(t,e,r);y(n.byteOffset+n.byteCount,t.byteLength,"attribute");var o=n.entries.attributeValues||n.entries.objectIds;if(o){if("String"===o.valueType){var a=n.entries.attributeByteCounts,u=v(t,a),f=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,o);return o.timeEncoding?function(e,t,r){return h(e,t,r).map((function(e){var t=e?Date.parse(e):null;return t&&!Number.isNaN(t)?t:null}))}(a.count,u,f):h(a.count,u,f)}return v(t,o)}throw new i.Z("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}var m={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},M={Float32:function(e,t){return new DataView(e,0).getFloat32(t,!0)},Float64:function(e,t){return new DataView(e,0).getFloat64(t,!0)},UInt8:function(e,t){return new DataView(e,0).getUint8(t)},Int8:function(e,t){return new DataView(e,0).getInt8(t)},UInt16:function(e,t){return new DataView(e,0).getUint16(t,!0)},Int16:function(e,t){return new DataView(e,0).getInt16(t,!0)},UInt32:function(e,t){return new DataView(e,0).getUint32(t,!0)},Int32:function(e,t){return new DataView(e,0).getInt32(t,!0)}};function C(e){return m.hasOwnProperty(e)}function U(e){return C(e)?m[e].BYTES_PER_ELEMENT:0}},2821:function(e,t,r){r.d(t,{Gi:function(){return f},IT:function(){return v},ti:function(){return w}});var n=r(10064),o=!0,i={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function a(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+i.identifierOffset,i.identifierLength)),version:t.getUint16(r+i.versionOffset,o),checksum:t.getUint32(r+i.checksumOffset,o)}}var u={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function c(e,t){return{sizeLo:e.getUint32(t+u.sizeLo,o),sizeHi:e.getUint32(t+u.sizeHi,o),minX:e.getFloat64(t+u.minX,o),minY:e.getFloat64(t+u.minY,o),minZ:e.getFloat64(t+u.minZ,o),maxX:e.getFloat64(t+u.maxX,o),maxY:e.getFloat64(t+u.maxY,o),maxZ:e.getFloat64(t+u.maxZ,o),errorX:e.getFloat64(t+u.errorX,o),errorY:e.getFloat64(t+u.errorY,o),errorZ:e.getFloat64(t+u.errorZ,o),count:e.getUint32(t+u.count,o),reserved:e.getUint32(t+u.reserved,o)}}function f(e){var t=new DataView(e,0),r=0,o=a(e,t,r),f=o.identifier,l=o.version;if(r+=i.byteCount,"LEPCC     "!==f)throw new n.Z("lepcc-decode-error","Bad identifier");if(l>1)throw new n.Z("lepcc-decode-error","Unknown version");var d=c(t,r);if(r+=u.byteCount,d.sizeHi*Math.pow(2,32)+d.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");var h=new Float64Array(3*d.count),v=[],g=[],y=[],w=[];if(r=s(e,r,v),r=s(e,r,g),r=s(e,r,y),(r=s(e,r,w))!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad length");for(var b=0,p=0,m=0;m<v.length;m++){p+=v[m];for(var M=0,C=0;C<g[m];C++){M+=y[b];var U=w[b];h[3*b]=Math.min(d.maxX,d.minX+2*d.errorX*M),h[3*b+1]=Math.min(d.maxY,d.minY+2*d.errorY*p),h[3*b+2]=Math.min(d.maxZ,d.minZ+2*d.errorZ*U),b++}}return{errorX:d.errorX,errorY:d.errorY,errorZ:d.errorZ,result:h}}function s(e,t,r){var n=[];t=l(e,t,n);for(var o=[],i=0;i<n.length;i++){o.length=0,t=l(e,t,o);for(var a=0;a<o.length;a++)r.push(o[a]+n[i])}return t}function l(e,t,r){var i=new DataView(e,t),a=i.getUint8(0),u=31&a,c=!!(32&a),f=(192&a)>>6,s=0;if(0===f)s=i.getUint32(1,o),t+=5;else if(1===f)s=i.getUint16(1,o),t+=3;else{if(2!==f)throw new n.Z("lepcc-decode-error","Bad count type");s=i.getUint8(1),t+=2}if(c)throw new n.Z("lepcc-decode-error","LUT not implemented");for(var l=Math.ceil(s*u/8),d=new Uint8Array(e,t,l),h=0,v=0,g=0,y=-1>>>32-u,w=0;w<s;w++){for(;v<u;)h|=d[g]<<v,v+=8,g+=1;r[w]=h&y,h>>>=u,(v-=u)+u>32&&(h|=d[g-1]>>8-v)}return t+g}var d={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function h(e,t){return{sizeLo:e.getUint32(t+d.sizeLo,o),sizeHi:e.getUint32(t+d.sizeHi,o),count:e.getUint32(t+d.count,o),colorMapCount:e.getUint16(t+d.colorMapCount,o),lookupMethod:e.getUint8(t+d.lookupMethod),compressionMethod:e.getUint8(t+d.compressionMethod)}}function v(e){var t=new DataView(e,0),r=0,o=a(e,t,r),u=o.identifier,c=o.version;if(r+=i.byteCount,"ClusterRGB"!==u)throw new n.Z("lepcc-decode-error","Bad identifier");if(c>1)throw new n.Z("lepcc-decode-error","Unknown version");var f=h(t,r);if(r+=d.byteCount,f.sizeHi*Math.pow(2,32)+f.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");if((2===f.lookupMethod||1===f.lookupMethod)&&0===f.compressionMethod){if(3*f.colorMapCount+f.count+r!==e.byteLength||f.colorMapCount>256)throw new n.Z("lepcc-decode-error","Bad count");for(var s=new Uint8Array(e,r,3*f.colorMapCount),l=new Uint8Array(e,r+3*f.colorMapCount,f.count),v=new Uint8Array(3*f.count),g=0;g<f.count;g++){var y=l[g];v[3*g]=s[3*y],v[3*g+1]=s[3*y+1],v[3*g+2]=s[3*y+2]}return v}if(0===f.lookupMethod&&0===f.compressionMethod){if(3*f.count+r!==e.byteLength||0!==f.colorMapCount)throw new n.Z("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(f.lookupMethod<=2&&1===f.compressionMethod){if(r+3!==e.byteLength||1!==f.colorMapCount)throw new n.Z("lepcc-decode-error","Bad count");for(var w=t.getUint8(r),b=t.getUint8(r+1),p=t.getUint8(r+2),m=new Uint8Array(3*f.count),M=0;M<f.count;M++)m[3*M]=w,m[3*M+1]=b,m[3*M+2]=p;return m}throw new n.Z("lepcc-decode-error","Bad method "+f.lookupMethod+","+f.compressionMethod)}var g={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function y(e,t){return{sizeLo:e.getUint32(t+g.sizeLo,o),sizeHi:e.getUint32(t+g.sizeHi,o),count:e.getUint32(t+g.count,o),scaleFactor:e.getUint16(t+g.scaleFactor,o),bitsPerPoint:e.getUint8(t+g.bitsPerPoint),reserved:e.getUint8(t+g.reserved)}}function w(e){var t=new DataView(e,0),r=0,o=a(e,t,r),u=o.identifier,c=o.version;if(r+=i.byteCount,"Intensity "!==u)throw new n.Z("lepcc-decode-error","Bad identifier");if(c>1)throw new n.Z("lepcc-decode-error","Unknown version");var f=y(t,r);if(r+=g.byteCount,f.sizeHi*Math.pow(2,32)+f.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");var s=new Uint16Array(f.count);if(8===f.bitsPerPoint){if(f.count+r!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");for(var d=new Uint8Array(e,r,f.count),h=0;h<f.count;h++)s[h]=d[h]*f.scaleFactor}else if(16===f.bitsPerPoint){if(2*f.count+r!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");for(var v=new Uint16Array(e,r,f.count),w=0;w<f.count;w++)s[w]=v[w]*f.scaleFactor}else{var b=[];if(l(e,r,b)!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");for(var p=0;p<f.count;p++)s[p]=b[p]*f.scaleFactor}return s}}}]);
//# sourceMappingURL=7066.5a8c2212.chunk.js.map