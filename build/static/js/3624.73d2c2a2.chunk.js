"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[3624],{41978:function(t,e,i){i.d(e,{AM:function(){return y}});var n=i(93433),r=i(15671),o=i(43144),s=i(60136),l=i(29388),u=i(27366),h=i(7138),a=i(93169),c=i(84652),f=i(32718),d=i(49861),v=(i(25243),i(69912)),_=i(85411),p=i(32551),g=-1,y=function(t){(0,s.Z)(i,t);var e=(0,l.Z)(i);function i(t){var n;return(0,r.Z)(this,i),(n=e.call(this,t))._from=null,n._to=null,n._final=null,n._current=[],n._time=0,n.duration=(0,a.Z)("mapview-transitions-duration"),n.effects=[],n}return(0,o.Z)(i,[{key:"effect",set:function(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(m(t))}catch(e){this._transitionTo([]),f.Z.getLogger(this).warn("Invalid Effect",{effect:t,error:e})}}}},{key:"hasEffects",get:function(){return this.transitioning||!!this.effects.length}},{key:"scale",set:function(t){this._updateForScale(t)}},{key:"transitioning",get:function(){return null!==this._to}},{key:"canTransitionTo",value:function(t){try{return this.scale>0&&k(this._current,m(t),this.scale)}catch(e){return!1}}},{key:"transitionStep",value:function(t,e){this._applyTimeTransition(t),this._updateForScale(e)}},{key:"endTransitions",value:function(){this._applyTimeTransition(this.duration)}},{key:"_transitionTo",value:function(t){this.scale>0&&k(this._current,t,this.scale)?(this._final=t,this._to=(0,c.d9)(t),function(t,e,i){for(var r,o,s=t.length>e.length?t:e,l=t.length>e.length?e:t,u=l[l.length-1],h=null!==(r=null===u||void 0===u?void 0:u.scale)&&void 0!==r?r:i,a=null!==(o=null===u||void 0===u?void 0:u.effects)&&void 0!==o?o:[],c=l.length;c<s.length;c++)l.push({scale:h,effects:(0,n.Z)(a)});for(var f=0;f<s.length;f++)l[f].scale=l[f].scale===g?i:l[f].scale,s[f].scale=s[f].scale===g?i:s[f].scale,(0,p.uF)(l[f].effects,s[f].effects)}(this._current,this._to,this.scale),this._from=(0,c.d9)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?(0,c.d9)(this._current[0].effects):[])}},{key:"_applyTimeTransition",value:function(t){if(this._to&&this._from&&this._current&&this._final){this._time+=t;for(var e=Math.min(1,this._time/this.duration),i=0;i<this._current.length;i++){var n=this._current[i],r=this._from[i],o=this._to[i];n.scale=R(r.scale,o.scale,e);for(var s=0;s<n.effects.length;s++){var l=n.effects[s],u=r.effects[s],h=o.effects[s];l.interpolate(u,h,e)}}1===e&&(this._current=this._final,this._set("effects",this._current[0]?(0,c.d9)(this._current[0].effects):[]),this._from=this._to=this._final=null)}}},{key:"_updateForScale",value:function(t){if(this._set("scale",t),0!==this._current.length){var e,i,n=this._current,r=this._current.length-1,o=1;if(1===n.length||t>=n[0].scale)i=e=n[0].effects;else if(t<=n[r].scale)i=e=n[r].effects;else for(var s=0;s<r;s++){var l=n[s],u=n[s+1];if(l.scale>=t&&u.scale<=t){o=(t-l.scale)/(u.scale-l.scale),e=l.effects,i=u.effects;break}}for(var h=0;h<this.effects.length;h++)this.effects[h].interpolate(e[h],i[h],o)}}}]),i}(h.Z);function m(t){var e=(0,_.Q)(t)||[];return function(t){var e=t[0];return!!e&&"type"in e}(e)?[{scale:g,effects:e}]:e}function k(t,e,i){var n,r,o,s;return null===(n=t[0])||void 0===n||!n.effects||null===(r=e[0])||void 0===r||!r.effects||!(((null===(o=t[0])||void 0===o?void 0:o.scale)===g||(null===(s=e[0])||void 0===s?void 0:s.scale)===g)&&(t.length>1||e.length>1)&&i<=0)&&(0,p.AS)(t[0].effects,e[0].effects)}function R(t,e,i){return t+(e-t)*i}(0,u._)([(0,d.Cb)()],y.prototype,"_to",void 0),(0,u._)([(0,d.Cb)()],y.prototype,"duration",void 0),(0,u._)([(0,d.Cb)({value:""})],y.prototype,"effect",null),(0,u._)([(0,d.Cb)({readOnly:!0})],y.prototype,"effects",void 0),(0,u._)([(0,d.Cb)({readOnly:!0})],y.prototype,"hasEffects",null),(0,u._)([(0,d.Cb)({value:0})],y.prototype,"scale",null),(0,u._)([(0,d.Cb)({readOnly:!0})],y.prototype,"transitioning",null),y=(0,u._)([(0,v.j)("esri.layers.effects.EffectView")],y)},33624:function(t,e,i){i.d(e,{W:function(){return _}});var n=i(1413),r=i(37762),o=i(15671),s=i(43144),l=i(88301),u=i(61120),h=i(60136),a=i(29388),c=i(23588),f=i(41978),d=i(87422),v=i(3453),_=function(t){(0,h.Z)(i,t);var e=(0,a.Z)(i);function i(){var t;return(0,o.Z)(this,i),(t=e.apply(this,arguments))._childrenSet=new Set,t._needsSort=!1,t.children=[],t._effectView=null,t._highlightOptions=null,t._highlightGradient=null,t}return(0,s.Z)(i,[{key:"blendMode",get:function(){return this._blendMode},set:function(t){this._blendMode=t,this.requestRender()}},{key:"clips",get:function(){return this._clips},set:function(t){this._clips=t,this.children.forEach((function(e){return e.clips=t}))}},{key:"computedEffects",get:function(){var t,e;return null!==(t=null===(e=this._effectView)||void 0===e?void 0:e.effects)&&void 0!==t?t:null}},{key:"effect",get:function(){var t,e;return null!==(t=null===(e=this._effectView)||void 0===e?void 0:e.effect)&&void 0!==t?t:""},set:function(t){(this._effectView||t)&&(this._effectView||(this._effectView=new f.AM),this._effectView.effect=t,this.requestRender())}},{key:"highlightOptions",get:function(){return this._highlightOptions},set:function(t){if(!t)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions&&this._highlightOptions.equals(t)||(this._highlightOptions=t,this._highlightGradient||(this._highlightGradient=new v.Z),this._highlightGradient.setHighlightOptions(t),this.requestRender())}},{key:"hasBlending",get:function(){return!!this.blendMode}},{key:"hasHighlight",get:function(){return this.children.some((function(t){return t.hasHighlight}))}},{key:"hasLabels",get:function(){return this.children.some((function(t){return t.hasLabels}))}},{key:"requiresDedicatedFBO",get:function(){return this.children.some((function(t){return"blendMode"in t&&t.blendMode&&"normal"!==t.blendMode}))}},{key:"updateTransitionProperties",value:function(t,e){(0,l.Z)((0,u.Z)(i.prototype),"updateTransitionProperties",this).call(this,t,e),this._effectView&&(this._effectView.transitionStep(t,e),this._effectView.transitioning&&this.requestRender())}},{key:"doRender",value:function(t){var e,i=this.createRenderParams(t),n=i.painter;n.beforeRenderLayer(i,null!==(e=this._clips)&&void 0!==e&&e.length?255:0,this.computedOpacity),this.renderChildren(i),n.afterRenderLayer(i,this.computedOpacity)}},{key:"addChild",value:function(t){return this.addChildAt(t,this.children.length)}},{key:"addChildAt",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.children.length;if(!t)return t;if(this.contains(t))return t;this._needsSort=!0;var i=t.parent;return i&&i!==this&&i.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}},{key:"contains",value:function(t){return this._childrenSet.has(t)}},{key:"endTransitions",value:function(){(0,l.Z)((0,u.Z)(i.prototype),"endTransitions",this).call(this),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}},{key:"removeAllChildren",value:function(){this._childrenSet.clear(),this._needsSort=!0;var t,e=(0,r.Z)(this.children);try{for(e.s();!(t=e.n()).done;){var i=t.value;this!==this.stage&&(i.clips=null),i.stage=null,i.parent=null}}catch(n){e.e(n)}finally{e.f()}this.children.length=0}},{key:"removeChild",value:function(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}},{key:"removeChildAt",value:function(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;var e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}},{key:"sortChildren",value:function(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}},{key:"beforeRender",value:function(t){(0,l.Z)((0,u.Z)(i.prototype),"beforeRender",this).call(this,t);var e,n=(0,r.Z)(this.children);try{for(n.s();!(e=n.n()).done;){e.value.beforeRender(t)}}catch(o){n.e(o)}finally{n.f()}}},{key:"afterRender",value:function(t){(0,l.Z)((0,u.Z)(i.prototype),"afterRender",this).call(this,t);var e,n=(0,r.Z)(this.children);try{for(n.s();!(e=n.n()).done;){e.value.afterRender(t)}}catch(o){n.e(o)}finally{n.f()}}},{key:"_createTransforms",value:function(){return{dvs:(0,c.c)()}}},{key:"onAttach",value:function(){(0,l.Z)((0,u.Z)(i.prototype),"onAttach",this).call(this);var t,e=this.stage,n=(0,r.Z)(this.children);try{for(n.s();!(t=n.n()).done;){t.value.stage=e}}catch(o){n.e(o)}finally{n.f()}}},{key:"onDetach",value:function(){(0,l.Z)((0,u.Z)(i.prototype),"onDetach",this).call(this);var t,e=(0,r.Z)(this.children);try{for(e.s();!(t=e.n()).done;){t.value.stage=null}}catch(n){e.e(n)}finally{e.f()}}},{key:"renderChildren",value:function(t){var e,i=(0,r.Z)(this.children);try{for(i.s();!(e=i.n()).done;){e.value.processRender(t)}}catch(n){i.e(n)}finally{i.f()}}},{key:"createRenderParams",value:function(t){return(0,n.Z)((0,n.Z)({},t),{},{requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient})}}]),i}(d.s)},87422:function(t,e,i){i.d(e,{s:function(){return c}});var n=i(15671),r=i(43144),o=i(60136),s=i(29388),l=i(91505),u=i(93169),h=i(66978),a=1/(0,u.Z)("mapview-transitions-duration"),c=function(t){(0,o.Z)(i,t);var e=(0,s.Z)(i);function i(){var t;return(0,n.Z)(this,i),(t=e.apply(this,arguments))._fadeOutResolver=null,t._fadeInResolver=null,t._clips=null,t.computedVisible=!0,t.computedOpacity=1,t.fadeTransitionEnabled=!1,t.inFadeTransition=!1,t._isReady=!1,t._opacity=1,t.parent=null,t._stage=null,t._visible=!0,t}return(0,r.Z)(i,[{key:"clips",get:function(){return this._clips},set:function(t){this._clips=t,this.requestRender()}},{key:"isReady",get:function(){return this._isReady}},{key:"opacity",get:function(){return this._opacity},set:function(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}},{key:"stage",get:function(){return this._stage},set:function(t){var e;if(this._stage!==t){var i=this._stage;this._stage=t,t?(null===(e=this._stage)||void 0===e?void 0:e.untrashDisplayObject(this))||(this.onAttach(),this.emit("attach")):null===i||void 0===i||i.trashDisplayObject(this)}}},{key:"transforms",get:function(){return this._getTransforms()}},{key:"_getTransforms",value:function(){return null==this._transforms&&(this._transforms=this._createTransforms()),this._transforms}},{key:"visible",get:function(){return this._visible},set:function(t){this._visible!==t&&(this._visible=t,this.requestRender())}},{key:"hasLabels",get:function(){return!1}},{key:"hasHighlight",get:function(){return!1}},{key:"hasBlending",get:function(){return!1}},{key:"fadeIn",value:function(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=(0,h.hh)(),this.requestRender()),this._fadeInResolver.promise}},{key:"fadeOut",value:function(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=(0,h.hh)(),this.requestRender()),this._fadeOutResolver.promise}},{key:"endTransitions",value:function(){var t,e;null!==(t=this._fadeInResolver)&&void 0!==t&&t.call(this),this._fadeInResolver=null,null!==(e=this._fadeOutResolver)&&void 0!==e&&e.call(this),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}},{key:"beforeRender",value:function(t){this.updateTransitionProperties(t.deltaTime,t.state.scale),this.setTransform(t.state)}},{key:"afterRender",value:function(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}},{key:"remove",value:function(){var t;null===(t=this.parent)||void 0===t||t.removeChild(this)}},{key:"setTransform",value:function(t){}},{key:"processRender",value:function(t){this.stage&&this.computedVisible&&this.doRender(t)}},{key:"requestRender",value:function(){this.stage&&this.stage.requestRender()}},{key:"processDetach",value:function(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}},{key:"updateTransitionProperties",value:function(t,e){if(this.fadeTransitionEnabled){var i=this._fadeOutResolver||!this.visible?0:this.opacity,n=this.computedOpacity;if(n===i)this.computedVisible=this.visible;else{var r=t*a;this.computedOpacity=n>i?Math.max(i,n-r):Math.min(i,n+r),this.computedVisible=this.computedOpacity>0;var o=i===this.computedOpacity;this.inFadeTransition=!o,o||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}},{key:"onAttach",value:function(){}},{key:"onDetach",value:function(){}},{key:"doRender",value:function(t){}},{key:"ready",value:function(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}]),i}(l.Z)},94109:function(t,e,i){i.d(e,{$6:function(){return $},$y:function(){return C},BB:function(){return I},Cj:function(){return X},FM:function(){return at},Fn:function(){return F},GS:function(){return et},Ib:function(){return y},Im:function(){return b},JS:function(){return z},KA:function(){return J},Kg:function(){return l},Kt:function(){return p},NG:function(){return ht},NS:function(){return H},Of:function(){return M},Pp:function(){return a},S:function(){return S},SQ:function(){return N},Sf:function(){return w},T3:function(){return K},U8:function(){return W},Ux:function(){return rt},Uz:function(){return ut},Vo:function(){return B},WD:function(){return nt},Wq:function(){return it},XO:function(){return m},XT:function(){return v},Zt:function(){return Z},_E:function(){return L},ad:function(){return h},av:function(){return ot},b7:function(){return _},dD:function(){return G},do:function(){return A},g3:function(){return V},gV:function(){return st},gr:function(){return o},i9:function(){return s},iD:function(){return d},j9:function(){return x},jS:function(){return k},k9:function(){return r},kU:function(){return P},mb:function(){return D},nY:function(){return E},o2:function(){return O},oh:function(){return u},pZ:function(){return Y},pb:function(){return T},qu:function(){return U},rL:function(){return tt},s4:function(){return j},tg:function(){return R},uk:function(){return f},vk:function(){return q},wJ:function(){return g},x_:function(){return c},yc:function(){return Q},zE:function(){return lt}});var n=i(93169),r=1e-30,o=4294967295,s=512,l=128,u=511,h=16777216,a=8,c=10,f=29,d=24,v=8,_={metrics:{width:15,height:17,left:0,top:-7,advance:14}},p=0,g=0,y=0,m=1,k=2,R=3,C=4,b=5,O=6,T=12,Z=5,w=6,M=5,q=6,x=0,S=1,W=2,D=3,F=4,H=2,I=1,V=2,P=4,A=1.05,E=(0,n.Z)("featurelayer-force-marker-text-draw-order")?.5:3,G=5,L=6,B=1.15,j=2,U=128-2*j,K=8,X=500,z=10,J=1024,N=2,Q=0,$=1,Y=4,tt=8,et=16,it=4,nt=1,rt=4,ot=8,st=32,lt=64,ut=128,ht=4,at=2},3453:function(t,e,i){i.d(e,{Z:function(){return v}});var n=i(29439),r=i(15671),o=i(43144),s=i(32718),l=i(94109),u=i(17615),h=i(8548),a=i(57808),c=i(52311),f=s.Z.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");var d=[0,0,0,0],v=function(){function t(){(0,r.Z)(this,t),this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:u.Fo.outlinePosition,outlineWidth:u.Fo.outlineWidth,innerHaloWidth:u.Fo.innerHaloWidth,outerHaloWidth:u.Fo.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*u.iq),this._minMaxDistance=[0,0]}return(0,o.Z)(t,[{key:"setHighlightOptions",value:function(t){var e=this._convertedHighlightOptions;!function(t,e){e.fillColor[0]=t.color.r/255,e.fillColor[1]=t.color.g/255,e.fillColor[2]=t.color.b/255,e.fillColor[3]=t.color.a,t.haloColor?(e.outlineColor[0]=t.haloColor.r/255,e.outlineColor[1]=t.haloColor.g/255,e.outlineColor[2]=t.haloColor.b/255,e.outlineColor[3]=t.haloColor.a):(e.outlineColor[0]=e.fillColor[0],e.outlineColor[1]=e.fillColor[1],e.outlineColor[2]=e.fillColor[2],e.outlineColor[3]=e.fillColor[3]),e.fillColor[3]*=t.fillOpacity,e.outlineColor[3]*=t.haloOpacity,e.fillColor[0]*=e.fillColor[3],e.fillColor[1]*=e.fillColor[3],e.fillColor[2]*=e.fillColor[3],e.outlineColor[0]*=e.outlineColor[3],e.outlineColor[1]*=e.outlineColor[3],e.outlineColor[2]*=e.outlineColor[3],e.outlineWidth=u.Fo.outlineWidth,e.outerHaloWidth=u.Fo.outerHaloWidth,e.innerHaloWidth=u.Fo.innerHaloWidth,e.outlinePosition=u.Fo.outlinePosition}(t,e);var i,r=e.outlinePosition-e.outlineWidth/2-e.outerHaloWidth,o=e.outlinePosition-e.outlineWidth/2,s=e.outlinePosition+e.outlineWidth/2,l=e.outlinePosition+e.outlineWidth/2+e.innerHaloWidth,h=Math.sqrt(Math.PI/2)*u.pW,a=Math.abs(r)>h?Math.round(10*(Math.abs(r)-h))/10:0,c=Math.abs(l)>h?Math.round(10*(Math.abs(l)-h))/10:0;a&&!c?f.error("The outer rim of the highlight is "+a+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!a&&c?f.error("The inner rim of the highlight is "+c+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):a&&c&&f.error("The highlight is "+Math.max(a,c)+"px away from the edge of the feature; consider reducing some width values.");var v=[void 0,void 0,void 0,void 0];function _(t,e,i){v[0]=(1-i)*t[0]+i*e[0],v[1]=(1-i)*t[1]+i*e[1],v[2]=(1-i)*t[2]+i*e[2],v[3]=(1-i)*t[3]+i*e[3]}for(var p=this._texelData,g=0;g<u.iq;++g){var y,m,k,R;(i=r+g/(u.iq-1)*(l-r))<r?(v[0]=0,v[1]=0,v[2]=0,v[3]=0):i<o?_(d,e.outlineColor,(i-r)/(o-r)):i<s?(y=e.outlineColor,m=(0,n.Z)(y,4),v[0]=m[0],v[1]=m[1],v[2]=m[2],v[3]=m[3]):i<l?_(e.outlineColor,e.fillColor,(i-s)/(l-s)):(k=e.fillColor,R=(0,n.Z)(k,4),v[0]=R[0],v[1]=R[1],v[2]=R[2],v[3]=R[3]),p[4*g]=255*v[0],p[4*g+1]=255*v[1],p[4*g+2]=255*v[2],p[4*g+3]=255*v[3]}this._minMaxDistance[0]=r,this._minMaxDistance[1]=l,this._shadeTexChanged=!0}},{key:"applyHighlightOptions",value:function(t,e){if(!this._shadeTex){var i=new c.X;i.wrapMode=h.e8.CLAMP_TO_EDGE,i.width=u.iq,i.height=1,this._shadeTex=new a.x(t,i)}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,u.iq,1,this._texelData),this._shadeTexChanged=!1),t.bindTexture(this._shadeTex,l.Sf),e.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}},{key:"destroy",value:function(){var t;null!==(t=this._shadeTex)&&void 0!==t&&t.dispose(),this._shadeTex=null}}]),t}()},17615:function(t,e,i){i.d(e,{Fo:function(){return l},bM:function(){return r},dl:function(){return o},iq:function(){return s},pW:function(){return n}});var n=1,r=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],s=256,l={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0}}}]);
//# sourceMappingURL=3624.73d2c2a2.chunk.js.map