"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[530],{80530:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(74165),i=n(15861),s=n(1413),a=n(15671),o=n(43144),u=n(88301),l=n(61120),c=n(60136),p=n(29388),d=n(27366),y=n(10064),h=n(42537),f=n(94172),v=n(49861),m=(n(25243),n(63780),n(93169),n(69912)),_=n(49818),S=n(20089),k=n(31666),g=n(18661);function Z(e,t){if(null==e&&null==t)return null;var n={};return null!=t&&(n.geometry=t.toJSON()),null!=e&&(n.where=e),n}var b=function(e){(0,c.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;return(0,a.Z)(this,n),(e=t.apply(this,arguments)).pipelineConnectionStatus="disconnected",e.pipelineErrorString=null,e._enabledEventTypes=new Set,e}return(0,o.Z)(n,[{key:"initialize",value:function(){var e=this;this.addHandles([(0,f.YP)((function(){return e.layer.customParameters}),(function(t){return e._proxy.updateCustomParameters(t)})),this.layer.on("send-message-to-socket",(function(t){return e._proxy.sendMessageToSocket(t)})),this.layer.on("send-message-to-client",(function(t){return e._proxy.sendMessageToClient(t)})),(0,f.YP)((function(){return e.layer.purgeOptions}),(function(){return e._update()})),(0,f.YP)((function(){return e.suspended}),this._onSuspendedChange.bind(this))],"constructor")}},{key:"connectionError",get:function(){return this.pipelineErrorString?new y.Z("stream-controller",this.pipelineErrorString):null}},{key:"on",value:function(e,t){var r=this;if(Array.isArray(e))return(0,h.AL)(e.map((function(e){return r.on(e,t)})));var i=["data-received","message-received"].includes(e);i&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));var s=(0,u.Z)((0,l.Z)(n.prototype),"on",this).call(this,e,t),a=this;return(0,h.kB)((function(){s.remove(),i&&(a._proxy.closed||a.hasEventListener(e)||a._proxy.enableEvent(e,!1))}))}},{key:"queryLatestObservations",value:function(e,t){var n,r,i,s=this;if(!(null!==(n=this.layer.timeInfo)&&void 0!==n&&n.endField||null!==(r=this.layer.timeInfo)&&void 0!==r&&r.startField||null!==(i=this.layer.timeInfo)&&void 0!==i&&i.trackIdField))throw new y.Z("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((function(e){var t=_.Z.fromJSON(e);return t.features.forEach((function(e){e.layer=s.layer,e.sourceLayer=s.layer})),t}))}},{key:"detach",value:function(){(0,u.Z)((0,l.Z)(n.prototype),"detach",this).call(this),this.pipelineConnectionStatus="disconnected"}},{key:"_streamConnectionStatus",get:function(){return this.pipelineConnectionStatus}},{key:"_doPause",value:function(){var e;null===(e=this._proxy)||void 0===e||e.pauseStream()}},{key:"_doResume",value:function(){var e;null===(e=this._proxy)||void 0===e||e.resumeStream()}},{key:"_createClientOptions",value:function(){var e=this;return(0,s.Z)((0,s.Z)({},(0,u.Z)((0,l.Z)(n.prototype),"_createClientOptions",this).call(this)),{},{setProperty:function(t){e.set(t.propertyName,t.value)}})}},{key:"_createTileRendererHash",value:function(e){var t="".concat(JSON.stringify(this.layer.purgeOptions),".").concat(JSON.stringify(Z(this.layer.definitionExpression,this.layer.geometryDefinition)),")");return(0,u.Z)((0,l.Z)(n.prototype),"_createTileRendererHash",this).call(this,e)+t}},{key:"_createServiceOptions",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n,i,s,a,o,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.layer,i=n.objectIdField,s=n.fields.map((function(e){return e.toJSON()})),a=(0,k.oq)(n.geometryType),o=(null===(t=n.timeInfo)||void 0===t?void 0:t.toJSON())||null,u=n.spatialReference?n.spatialReference.toJSON():null,e.abrupt("return",{type:"stream",isPaused:this._isUserPaused,fields:s,fieldsIndex:this.layer.fieldsIndex.toJSON(),geometryType:a,objectIdField:i,timeInfo:o,source:this.layer.parsedUrl,serviceFilter:Z(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:u,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:n.customParameters});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(function(e){var t=function(e){(0,c.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i)))._isUserPaused=!1,e.filter=null,e}return(0,o.Z)(n,[{key:"resume",value:function(){this._isUserPaused=!1,this.suspended||this._doResume()}},{key:"pause",value:function(){this._isUserPaused=!0,this.suspended||this._doPause()}},{key:"connectionStatus",get:function(){return this._isUserPaused?"paused":this._streamConnectionStatus}},{key:"_onSuspendedChange",value:function(e){e?this._doPause():this._isUserPaused||this._doResume()}}]),n}(e);return(0,d._)([(0,v.Cb)()],t.prototype,"_isUserPaused",void 0),(0,d._)([(0,v.Cb)({readOnly:!0})],t.prototype,"connectionStatus",null),(0,d._)([(0,v.Cb)({type:g.Z})],t.prototype,"filter",void 0),t=(0,d._)([(0,m.j)("esri.layers.mixins.StreamLayerView")],t)}(S.default));(0,d._)([(0,v.Cb)()],b.prototype,"pipelineConnectionStatus",void 0),(0,d._)([(0,v.Cb)()],b.prototype,"pipelineErrorString",void 0),(0,d._)([(0,v.Cb)({readOnly:!0})],b.prototype,"connectionError",null),(0,d._)([(0,v.Cb)({readOnly:!0})],b.prototype,"_streamConnectionStatus",null);var C=b=(0,d._)([(0,m.j)("esri.views.2d.layers.StreamLayerView2D")],b)}}]);
//# sourceMappingURL=530.537282d9.chunk.js.map