"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[6777],{98634:function(t,e,n){n.d(e,{H:function(){return s},K:function(){return u}});var i=n(43144),r=n(15671),u=(0,i.Z)((function t(){(0,r.Z)(this,t)}));function s(t){for(var e="",n=0;n<(arguments.length<=1?0:arguments.length-1);n++)e+=t[n]+(n+1<1||arguments.length<=n+1?void 0:arguments[n+1]);return e+=t[t.length-1]}!function(t){t.int=function(t){return Math.round(t).toString()},t.float=function(t){return t.toPrecision(8)}}(s||(s={}))},78041:function(t,e,n){n.d(e,{Bh:function(){return h},IB:function(){return o},j7:function(){return a},je:function(){return _},ve:function(){return c},wu:function(){return s}});var i=n(25920),r=n(8548),u=n(36207),s=(0,u.wK)(r.zi.SRC_ALPHA,r.zi.ONE,r.zi.ONE_MINUS_SRC_ALPHA,r.zi.ONE_MINUS_SRC_ALPHA),l=(0,u.if)(r.zi.ONE,r.zi.ONE),o=(0,u.if)(r.zi.ZERO,r.zi.ONE_MINUS_SRC_ALPHA);function a(t){return t===i.A.FrontFace?null:t===i.A.Alpha?o:l}var c=5e5,f={factor:-1,units:-2};function _(t){return t?f:null}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.wb.LESS;return t===i.A.NONE||t===i.A.FrontFace?e:r.wb.LEQUAL}},25920:function(t,e,n){var i;n.d(e,{A:function(){return i}}),function(t){t[t.Color=0]="Color",t[t.Alpha=1]="Alpha",t[t.FrontFace=2]="FrontFace",t[t.NONE=3]="NONE",t[t.COUNT=4]="COUNT"}(i||(i={}))},68401:function(t,e,n){var i,r,u,s,l,o,a,c,f;n.d(e,{Gv:function(){return r},Iq:function(){return c},JJ:function(){return a},Rw:function(){return s},Ti:function(){return f},V_:function(){return o},Vr:function(){return i},hU:function(){return l}}),function(t){t[t.None=0]="None",t[t.Front=1]="Front",t[t.Back=2]="Back",t[t.COUNT=3]="COUNT"}(i||(i={})),function(t){t[t.Less=0]="Less",t[t.Lequal=1]="Lequal",t[t.COUNT=2]="COUNT"}(r||(r={})),function(t){t[t.BACKGROUND=0]="BACKGROUND",t[t.UPDATE=1]="UPDATE"}(u||(u={})),function(t){t[t.NOT_LOADED=0]="NOT_LOADED",t[t.LOADING=1]="LOADING",t[t.LOADED=2]="LOADED"}(s||(s={})),function(t){t[t.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",t[t.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(l||(l={})),function(t){t[t.Highlight=0]="Highlight",t[t.MaskOccludee=1]="MaskOccludee",t[t.COUNT=2]="COUNT"}(o||(o={})),function(t){t[t.Blend=0]="Blend",t[t.Opaque=1]="Opaque",t[t.Mask=2]="Mask",t[t.MaskBlend=3]="MaskBlend",t[t.COUNT=4]="COUNT"}(a||(a={})),function(t){t[t.OFF=0]="OFF",t[t.ON=1]="ON"}(c||(c={})),function(t){t.DDS_ENCODING="image/vnd-ms.dds",t.KTX2_ENCODING="image/ktx2",t.BASIS_ENCODING="image/x.basis"}(f||(f={}))},81152:function(t,e,n){n.d(e,{G:function(){return s}});var i=n(15671),r=n(43144),u=n(92026),s=function(){function t(){(0,i.Z)(this,t),this._result=!1}return(0,r.Z)(t,[{key:"dispose",value:function(){this._program=(0,u.M2)(this._program)}},{key:"result",get:function(){return null!=this._program&&(this._result=this._test(this._program),this.dispose()),this._result}}]),t}()},40235:function(t,e,n){n.d(e,{mO:function(){return o}});var i=n(43144),r=n(15671),u=n(30308),s=(0,i.Z)((function t(e,n,i,u,s,l,o,a,c){(0,r.Z)(this,t),this.createQuery=e,this.deleteQuery=n,this.resultAvailable=i,this.getResult=u,this.disjoint=s,this.beginTimeElapsed=l,this.endTimeElapsed=o,this.createTimestamp=a,this.timestampBits=c})),l=!1;function o(t,e){if(e.disjointTimerQuery)return null;var n=t.getExtension("EXT_disjoint_timer_query_webgl2");return n&&(0,u.Z)(t)?new s((function(){return t.createQuery()}),(function(e){t.deleteQuery(e),l=!1}),(function(e){return t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE)}),(function(e){return t.getQueryParameter(e,t.QUERY_RESULT)}),(function(){return t.getParameter(n.GPU_DISJOINT_EXT)}),(function(e){l||(l=!0,t.beginQuery(n.TIME_ELAPSED_EXT,e))}),(function(){t.endQuery(n.TIME_ELAPSED_EXT),l=!1}),(function(t){return n.queryCounterEXT(t,n.TIMESTAMP_EXT)}),(function(){return t.getQuery(n.TIMESTAMP_EXT,n.QUERY_COUNTER_BITS_EXT)})):(n=t.getExtension("EXT_disjoint_timer_query"))?new s((function(){return n.createQueryEXT()}),(function(t){n.deleteQueryEXT(t),l=!1}),(function(t){return n.getQueryObjectEXT(t,n.QUERY_RESULT_AVAILABLE_EXT)}),(function(t){return n.getQueryObjectEXT(t,n.QUERY_RESULT_EXT)}),(function(){return t.getParameter(n.GPU_DISJOINT_EXT)}),(function(t){l||(l=!0,n.beginQueryEXT(n.TIME_ELAPSED_EXT,t))}),(function(){n.endQueryEXT(n.TIME_ELAPSED_EXT),l=!1}),(function(t){return n.queryCounterEXT(t,n.TIMESTAMP_EXT)}),(function(){return n.getQueryEXT(n.TIMESTAMP_EXT,n.QUERY_COUNTER_BITS_EXT)})):null}},36207:function(t,e,n){n.d(e,{BK:function(){return d},LZ:function(){return h},if:function(){return o},jp:function(){return V},sm:function(){return A},wK:function(){return a},zp:function(){return _}});var i=n(1413),r=n(15671),u=n(43144),s=n(68401),l=n(8548);function o(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.db.ADD,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0,0];return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:n,opAlpha:n,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:l.db.ADD,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:l.db.ADD,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[0,0,0,0];return{srcRgb:t,srcAlpha:e,dstRgb:n,dstAlpha:i,opRgb:r,opAlpha:u,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}var c={face:l.LR.BACK,mode:l.Wf.CCW},f={face:l.LR.FRONT,mode:l.Wf.CCW},_=function(t){return t===s.Vr.Back?c:t===s.Vr.Front?f:null},h={zNear:0,zFar:1},d={r:!0,g:!0,b:!0,a:!0};function v(t){return m.intern(t)}function p(t){return D.intern(t)}function g(t){return k.intern(t)}function T(t){return B.intern(t)}function E(t){return U.intern(t)}function I(t){return L.intern(t)}function S(t){return X.intern(t)}function y(t){return Z.intern(t)}function O(t){return x.intern(t)}function A(t){return z.intern(t)}var w=function(){function t(e,n){(0,r.Z)(this,t),this._makeKey=e,this._makeRef=n,this._interns=new Map}return(0,u.Z)(t,[{key:"intern",value:function(t){var e;if(!t)return null;var n=this._makeKey(t),i=this._interns;return i.has(n)||i.set(n,this._makeRef(t)),null!==(e=i.get(n))&&void 0!==e?e:null}}]),t}();function b(t){return"["+t.join(",")+"]"}var m=new w(C,(function(t){return(0,i.Z)({__tag:"Blending"},t)}));function C(t){return t?b([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}var D=new w(N,(function(t){return(0,i.Z)({__tag:"Culling"},t)}));function N(t){return t?b([t.face,t.mode]):null}var k=new w(W,(function(t){return(0,i.Z)({__tag:"PolygonOffset"},t)}));function W(t){return t?b([t.factor,t.units]):null}var B=new w(R,(function(t){return(0,i.Z)({__tag:"DepthTest"},t)}));function R(t){return t?b([t.func]):null}var U=new w(M,(function(t){return(0,i.Z)({__tag:"StencilTest"},t)}));function M(t){return t?b([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}var L=new w(P,(function(t){return(0,i.Z)({__tag:"DepthWrite"},t)}));function P(t){return t?b([t.zNear,t.zFar]):null}var X=new w(F,(function(t){return(0,i.Z)({__tag:"ColorWrite"},t)}));function F(t){return t?b([t.r,t.g,t.b,t.a]):null}var Z=new w(Q,(function(t){return(0,i.Z)({__tag:"StencilWrite"},t)}));function Q(t){return t?b([t.mask]):null}var x=new w(G,(function(t){return(0,i.Z)({__tag:"DrawBuffers"},t)}));function G(t){return t?b(t.buffers):null}var z=new w((function(t){return t?b([C(t.blending),N(t.culling),W(t.polygonOffset),R(t.depthTest),M(t.stencilTest),P(t.depthWrite),F(t.colorWrite),Q(t.stencilWrite),G(t.drawBuffers)]):null}),(function(t){return{blending:v(t.blending),culling:p(t.culling),polygonOffset:g(t.polygonOffset),depthTest:T(t.depthTest),stencilTest:E(t.stencilTest),depthWrite:I(t.depthWrite),colorWrite:S(t.colorWrite),stencilWrite:y(t.stencilWrite),drawBuffers:O(t.drawBuffers)}}));var V=function(){function t(e){(0,r.Z)(this,t),this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=e}return(0,u.Z)(t,[{key:"setPipeline",value:function(t){(this._pipelineInvalid||t!==this._pipeline)&&(this._setBlending(t.blending),this._setCulling(t.culling),this._setPolygonOffset(t.polygonOffset),this._setDepthTest(t.depthTest),this._setStencilTest(t.stencilTest),this._setDepthWrite(t.depthWrite),this._setColorWrite(t.colorWrite),this._setStencilWrite(t.stencilWrite),this._setDrawBuffers(t.drawBuffers),this._pipeline=t),this._pipelineInvalid=!1}},{key:"invalidateBlending",value:function(){this._blendingInvalid=!0,this._pipelineInvalid=!0}},{key:"invalidateCulling",value:function(){this._cullingInvalid=!0,this._pipelineInvalid=!0}},{key:"invalidatePolygonOffset",value:function(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}},{key:"invalidateDepthTest",value:function(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}},{key:"invalidateStencilTest",value:function(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}},{key:"invalidateDepthWrite",value:function(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}},{key:"invalidateColorWrite",value:function(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}},{key:"invalidateStencilWrite",value:function(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}},{key:"invalidateDrawBuffers",value:function(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}},{key:"_setBlending",value:function(t){this._blending=this._setSubState(t,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}},{key:"_setCulling",value:function(t){this._culling=this._setSubState(t,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}},{key:"_setPolygonOffset",value:function(t){this._polygonOffset=this._setSubState(t,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}},{key:"_setDepthTest",value:function(t){this._depthTest=this._setSubState(t,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}},{key:"_setStencilTest",value:function(t){this._stencilTest=this._setSubState(t,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}},{key:"_setDepthWrite",value:function(t){this._depthWrite=this._setSubState(t,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}},{key:"_setColorWrite",value:function(t){this._colorWrite=this._setSubState(t,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}},{key:"_setStencilWrite",value:function(t){this._stencilWrite=this._setSubState(t,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}},{key:"_setDrawBuffers",value:function(t){this._drawBuffers=this._setSubState(t,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}},{key:"_setSubState",value:function(t,e,n,i){return(n||t!==e)&&(i(t),this._pipelineInvalid=!0),t}}]),t}()},39416:function(t,e,n){n.d(e,{d:function(){return p}});var i=n(15671),r=n(43144),u=n(88301),s=n(61120),l=n(60136),o=n(29388),a=n(61441),c=n(44070),f=n(8548),_=n(53634),h=n(57808),d=n(52311),v=n(45412),p=function(t){(0,l.Z)(n,t);var e=(0,o.Z)(n);function n(t){var r;(0,i.Z)(this,n),(r=e.call(this))._rctx=t;return r._program=t.programCache.acquire("\n    precision highp float;\n\n    attribute vec2 a_pos;\n    varying vec2 v_uv;\n\n    void main() {\n      v_uv = a_pos;\n      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ","\n    precision highp float;\n\n    varying vec2 v_uv;\n\n    uniform sampler2D u_texture;\n\n    void main() {\n      gl_FragColor = texture2D(u_texture, v_uv);\n    }\n    ",new Map([["a_pos",0]])),r}return(0,r.Z)(n,[{key:"dispose",value:function(){(0,u.Z)((0,s.Z)(n.prototype),"dispose",this).call(this)}},{key:"_test",value:function(t){var e=this._rctx;if(!e.gl)return t.dispose(),!0;var n=new d.X(1);n.wrapMode=f.e8.CLAMP_TO_EDGE,n.samplingMode=f.cw.NEAREST;var i=new _.X(e,n),r=c.f.createVertex(e,f.l1.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),u=new v.U(e,new Map([["a_pos",0]]),a.cD,{geometry:r}),s=new d.X;s.samplingMode=f.cw.LINEAR,s.wrapMode=f.e8.CLAMP_TO_EDGE;var l=new h.x(e,s,g);e.useProgram(t),e.bindTexture(l,0),t.setUniform1i("u_texture",0);var o=e.getBoundFramebufferObject(),p=e.getViewport(),T=p.x,E=p.y,I=p.width,S=p.height;e.bindFramebuffer(i),e.setViewport(0,0,1,1),e.setClearColor(0,0,0,0),e.setBlendingEnabled(!1),e.clearSafe(f.lk.COLOR_BUFFER_BIT),e.bindVAO(u),e.drawArrays(f.MX.TRIANGLE_STRIP,0,4);var y=new Uint8Array(4);return i.readPixels(0,0,1,1,f.VI.RGBA,f.Br.UNSIGNED_BYTE,y),u.dispose(),i.dispose(),l.dispose(),e.setViewport(T,E,I,S),e.bindFramebuffer(o),255!==y[0]}}]),n}(n(81152).G),g=new Image;g.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",g.width=5,g.height=5,g.decode()}}]);
//# sourceMappingURL=6777.08f234f1.chunk.js.map