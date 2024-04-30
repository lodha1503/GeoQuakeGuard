"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[3634],{44070:function(e,t,i){i.d(t,{f:function(){return d}});var r=i(74165),n=i(15861),s=i(15671),h=i(43144),a=i(63780),u=i(32718),o=i(18722),l=i(37825),c=i(83826),f=i(8548),_=u.Z.getLogger("esri.views.webgl.BufferObject"),d=function(){function e(t,i,r,n){(0,s.Z)(this,e),this._context=t,this.bufferType=i,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(f._g.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,l.zu)(this._context.gl),n&&this.setData(n)}return(0,h.Z)(e,[{key:"glName",get:function(){return this._glName}},{key:"size",get:function(){return this._size}},{key:"indexType",get:function(){return this._indexType}},{key:"byteLength",get:function(){return this.bufferType===f.w0.ELEMENT_ARRAY_BUFFER?this._indexType===f.g.UNSIGNED_INT?4*this._size:2*this._size:this._size}},{key:"_isVAOAware",get:function(){return this.bufferType===f.w0.ELEMENT_ARRAY_BUFFER||this.bufferType===f.w0.ARRAY_BUFFER}},{key:"dispose",value:function(){var e;null!==(e=this._context)&&void 0!==e&&e.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(f._g.BufferObject,this),this._context=null):this._glName&&_.warn("Leaked WebGL buffer object")}},{key:"setSize",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e<=0&&_.error("Buffer size needs to be positive!"),this.bufferType===f.w0.ELEMENT_ARRAY_BUFFER&&null!=t)switch(this._indexType=t,t){case f.g.UNSIGNED_SHORT:e*=2;break;case f.g.UNSIGNED_INT:e*=4}this._setBufferData(e)}},{key:"setData",value:function(e){if(e){var t=e.byteLength;this.bufferType===f.w0.ELEMENT_ARRAY_BUFFER&&((0,o.Uc)(e)&&(t/=2,this._indexType=f.g.UNSIGNED_SHORT),(0,o.ZY)(e)&&(t/=4,this._indexType=f.g.UNSIGNED_INT)),this._setBufferData(t,e)}}},{key:"_setBufferData",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._size=e;var i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);var r=this._context.gl;null!=t?r.bufferData(this.bufferType,t,this.usage):r.bufferData(this.bufferType,e,this.usage),(0,l.zu)(r),this._isVAOAware&&this._context.bindVAO(i)}},{key:"setSubData",value:function(e,t,i,r){if(e){(t<0||t*e.BYTES_PER_ELEMENT>=this.byteLength)&&_.error("offset is out of range!"),i>=r&&_.error("end must be bigger than start!"),(t+(r-i))*e.BYTES_PER_ELEMENT>this.byteLength&&_.error("An attempt to write beyond the end of the buffer!");var n=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);var s=this._context.gl;if(this._context.type===c.zO.WEBGL2)s.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,i,r-i);else{var h=0===i&&r===e.length?e:e.subarray(i,r);s.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,h)}(0,l.zu)(s),this._isVAOAware&&this._context.bindVAO(n)}}},{key:"getSubData",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;if(this._context.type===c.zO.WEBGL2)if(i<0||r<0)_.error("Problem getting subdata: offset and length were less than zero!");else{var n=function(e){return(0,a.zG)(e)}(e)?e.BYTES_PER_ELEMENT:1;if(n*((null!==i&&void 0!==i?i:0)+(null!==r&&void 0!==r?r:0))>e.byteLength)_.error("Problem getting subdata: offset and length exceeded destination size!");else{t+n*(null!==r&&void 0!==r?r:0)>this.byteLength&&_.warn("Potential problem getting subdata: requested data exceeds buffer size!");var s=this._context.gl;this._context.bindBuffer(this,f.w0.COPY_READ_BUFFER),s.getBufferSubData(f.w0.COPY_READ_BUFFER,t,e,i,r),this._context.unbindBuffer(f.w0.COPY_READ_BUFFER)}}else _.error("Get buffer subdata is supported in WebGL2 only!")}},{key:"getSubDataAsync",value:function(){var e=(0,n.Z)((0,r.Z)().mark((function e(t){var i,n,s,h=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=h.length>1&&void 0!==h[1]?h[1]:0,n=h.length>2?h[2]:void 0,s=h.length>3?h[3]:void 0,this._context.type!==c.zO.WEBGL2){e.next=9;break}return e.next=6,this._context.clientWaitAsync();case 6:this.getSubData(t,i,n,s),e.next=10;break;case 9:_.error("Get buffer subdata is supported in WebGL2 only!");case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}],[{key:"createIndex",value:function(t,i,r){return new e(t,f.w0.ELEMENT_ARRAY_BUFFER,i,r)}},{key:"createVertex",value:function(t,i,r){return new e(t,f.w0.ARRAY_BUFFER,i,r)}},{key:"createUniform",value:function(t,i,r){if(t.type!==c.zO.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new e(t,f.w0.UNIFORM_BUFFER,i,r)}},{key:"createPixelPack",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.l1.STREAM_READ,r=arguments.length>2?arguments[2]:void 0;if(t.type!==c.zO.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");var n=new e(t,f.w0.PIXEL_PACK_BUFFER,i);return r&&n.setSize(r),n}},{key:"createPixelUnpack",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.l1.STREAM_DRAW,r=arguments.length>2?arguments[2]:void 0;if(t.type!==c.zO.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new e(t,f.w0.PIXEL_UNPACK_BUFFER,i,r)}}]),e}()},53634:function(e,t,i){i.d(t,{X:function(){return x}});var r=i(74165),n=i(15861),s=i(29439),h=i(93433),a=i(15671),u=i(43144),o=(i(93169),i(32718)),l=i(92026),c=i(44070),f=i(37825),_=i(83826),d=i(8548),T=i(46888),g=i(15880),E=i(57808),p=o.Z.getLogger("esri.views.webgl.FramebufferObject"),x=function(){function e(t,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(0,a.Z)(this,e),this._context=t,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,t.instanceCounter.increment(d._g.FramebufferObject,this);var n=m(i)?i:new E.x(this._context,i);if(this._colorAttachments.set(d.VY.COLOR_ATTACHMENT0,n),this._validateTextureDescriptor(n.descriptor),this._validateColorAttachmentPoint(d.VY.COLOR_ATTACHMENT0),null!=r)if(function(e){return m(e)||null!=e&&"pixelFormat"in e}(r))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),this._depthStencilTexture=m(r)?r:new E.x(this._context,r),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{var s=function(e){return null!=e&&"type"in e&&e.type===T.B.RenderBuffer}(r)?r:new g.r(this._context,r);this._depthStencilBuffer=s,this._validateRenderBufferDescriptor(s.descriptor)}}return(0,u.Z)(e,[{key:"dispose",value:function(){var e,t,i=this;if(0!==this._colorAttachments.size||this._glName){var r=this._context.getBoundFramebufferObject();this._colorAttachments.forEach((function(e,t){var r;return null===(r=i.detachColorTexture(t))||void 0===r?void 0:r.dispose()})),null!==(e=this.detachDepthStencilBuffer())&&void 0!==e&&e.dispose(),null!==(t=this.detachDepthStencilTexture())&&void 0!==t&&t.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(r),this._context.instanceCounter.decrement(d._g.FramebufferObject,this)}}},{key:"glName",get:function(){return this._glName}},{key:"colorTexture",get:function(){return this._colorAttachments.get(d.VY.COLOR_ATTACHMENT0)}},{key:"depthStencil",get:function(){return this._depthStencilTexture||this._depthStencilBuffer}},{key:"depthStencilTexture",get:function(){return this._depthStencilTexture}},{key:"width",get:function(){var e,t,i=this._colorAttachments.get(d.VY.COLOR_ATTACHMENT0);return null!==(e=null===i||void 0===i||null===(t=i.descriptor)||void 0===t?void 0:t.width)&&void 0!==e?e:0}},{key:"height",get:function(){var e,t,i=this._colorAttachments.get(d.VY.COLOR_ATTACHMENT0);return null!==(e=null===i||void 0===i||null===(t=i.descriptor)||void 0===t?void 0:t.height)&&void 0!==e?e:0}},{key:"gpuMemoryUsage",get:function(){var e,t;return(0,h.Z)(this._colorAttachments).reduce((function(e,t){var i=(0,s.Z)(t,2);i[0];return e+i[1].gpuMemoryUsage}),null!==(e=null===(t=this.depthStencil)||void 0===t?void 0:t.gpuMemoryUsage)&&void 0!==e?e:0)}},{key:"getColorTexture",value:function(e){var t=this._colorAttachments.get(e);return t&&m(t)?t:null}},{key:"colorAttachments",get:function(){return(0,h.Z)(this._colorAttachments.keys())}},{key:"attachColorTexture",value:function(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.VY.COLOR_ATTACHMENT0;if(e){this._validateColorAttachmentPoint(i);var r=e.descriptor;this._validateTextureDescriptor(r),null!==(t=this.detachColorTexture(i))&&void 0!==t&&t.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,i)),this._colorAttachments.set(i,e)}}},{key:"detachColorTexture",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.VY.COLOR_ATTACHMENT0,t=this._colorAttachments.get(e);if(t){if(this._initialized){var i=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e),this._context.bindFramebuffer(i)}return this._colorAttachments.delete(e),t}}},{key:"setColorTextureTarget",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.VY.COLOR_ATTACHMENT0,i=this._colorAttachments.get(t);i&&this._framebufferTexture2D(i.glName,t,e)}},{key:"attachDepthStencil",value:function(e){if(e)switch(e.type){case T.B.Texture:return this._attachDepthStencilTexture(e);case T.B.RenderBuffer:return this._attachDepthStencilBuffer(e)}}},{key:"_attachDepthStencilTexture",value:function(e){var t;if(null!=e){var i=e.descriptor;i.pixelFormat!==d.VI.DEPTH_STENCIL&&i.pixelFormat!==d.VI.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),i.dataType!==d.Br.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDescriptor(i),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,d.Lu)),null!==(t=this._depthStencilTexture)&&void 0!==t&&t.dispose(),this._depthStencilTexture=e}}},{key:"detachDepthStencilTexture",value:function(){var e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,d.Lu)),this._depthStencilTexture=null,e}},{key:"_attachDepthStencilBuffer",value:function(e){if(null!=e){var t=e.descriptor;if(this._validateRenderBufferDescriptor(t),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);var i=this._context.gl,r=this._getGLAttachmentPoint(t);i.framebufferRenderbuffer(d.qi.FRAMEBUFFER,r,i.RENDERBUFFER,e.glName)}this._depthStencilBuffer=e}}},{key:"detachDepthStencilBuffer",value:function(){var e=this._depthStencilBuffer;if(e&&this._initialized){this._context.bindFramebuffer(this);var t=this._context.gl,i=this._getGLAttachmentPoint(e.descriptor);t.framebufferRenderbuffer(d.qi.FRAMEBUFFER,i,t.RENDERBUFFER,null)}return this._depthStencilBuffer=null,e}},{key:"copyToTexture",value:function(e,t,i,r,n,s,h){(e<0||t<0||n<0||s<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");var a=h.descriptor;h.descriptor.target!==d.No.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==(null===a||void 0===a?void 0:a.width)||null==(null===a||void 0===a?void 0:a.height)||e+i>this.width||t+r>this.height||n+i>a.width||s+r>a.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");var u=this._context,o=u.bindTexture(h,E.x.TEXTURE_UNIT_FOR_UPDATES);u.setActiveTexture(E.x.TEXTURE_UNIT_FOR_UPDATES),u.bindFramebuffer(this),u.gl.copyTexSubImage2D(d.No.TEXTURE_2D,0,n,s,e,t,i,r),u.bindTexture(o,E.x.TEXTURE_UNIT_FOR_UPDATES)}},{key:"readPixels",value:function(e,t,i,r,n,s,h){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),h||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,t,i,r,n,s,h)}},{key:"readPixelsAsync",value:function(){var e=(0,n.Z)((0,r.Z)().mark((function e(t,i,n,s,h,a,u){var o,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._context.type===_.zO.WEBGL2){e.next=2;break}return e.abrupt("return",((0,f.hZ)()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(t,i,n,s,h,a,u)));case 2:return o=this._context.gl,l=c.f.createPixelPack(this._context,d.l1.STREAM_READ,u.byteLength),this._context.bindBuffer(l),this._context.bindFramebuffer(this),o.readPixels(t,i,n,s,h,a,0),this._context.unbindBuffer(d.w0.PIXEL_PACK_BUFFER),e.next=9,l.getSubDataAsync(u);case 9:l.dispose();case 10:case"end":return e.stop()}}),e,this)})));return function(t,i,r,n,s,h,a){return e.apply(this,arguments)}}()},{key:"resize",value:function(e,t){var i,r;if(this.width!==e||this.height!==t){var n={width:e,height:t};b(n,this._context.parameters.maxTextureSize),this._colorAttachments.forEach((function(e){return e.resize(n.width,n.height)})),null!==(i=this._depthStencilTexture)&&void 0!==i&&i.resize(n.width,n.height),this._initialized&&(b(n,this._context.parameters.maxRenderbufferSize),null!==(r=this._depthStencilBuffer)&&void 0!==r&&r.resize(n.width,n.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}}},{key:"initializeAndBind",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.qi.FRAMEBUFFER,i=this._context.gl;if(this._initialized)i.bindFramebuffer(t,this.glName);else{this._glName&&i.deleteFramebuffer(this._glName);var r=i.createFramebuffer();if(i.bindFramebuffer(t,r),this._colorAttachments.forEach((function(i,r){return e._framebufferTexture2D(i.glName,r,v(i),t)})),this._depthStencilBuffer){var n=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);i.framebufferRenderbuffer(t,n,i.RENDERBUFFER,this._depthStencilBuffer.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,i.DEPTH_STENCIL_ATTACHMENT,v(this._depthStencilTexture),t);(0,f.hZ)()&&i.checkFramebufferStatus(t)!==i.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=r,this._initialized=!0}}},{key:"_framebufferTexture2D",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.VY.COLOR_ATTACHMENT0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d.No.TEXTURE_2D,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d.qi.FRAMEBUFFER,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this._context.gl.framebufferTexture2D(r,t,i,e,n)}},{key:"_disposeDepthStencilAttachments",value:function(){var e=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);var t=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);e.framebufferRenderbuffer(d.qi.FRAMEBUFFER,t,e.RENDERBUFFER,null)}this._depthStencilBuffer=(0,l.M2)(this._depthStencilBuffer)}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=(0,l.M2)(this._depthStencilTexture))}},{key:"_validateTextureDescriptor",value:function(e){e.target!==d.No.TEXTURE_2D&&e.target!==d.No.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),b(e,this._context.parameters.maxTextureSize),this._validateBufferDimensions(e)}},{key:"_validateRenderBufferDescriptor",value:function(e){b(e,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(e)}},{key:"_validateBufferDimensions",value:function(e){e.width<=0&&(e.width=this.width),e.height<=0&&(e.height=this.height),this.width>0&&this.height>0&&(this.width===e.width&&this.height===e.height||console.error("Attachment size must match framebuffer size!"))}},{key:"_getGLAttachmentPoint",value:function(e){switch(e.internalFormat){case d.Tg.DEPTH_COMPONENT16:case d.Tg.DEPTH_COMPONENT24:case d.Tg.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case d.Tg.DEPTH24_STENCIL8:case d.Tg.DEPTH32F_STENCIL8:case d.Tg.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case d.Tg.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}},{key:"_validateColorAttachmentPoint",value:function(t){if(-1===e._MAX_COLOR_ATTACHMENTS){var i=this._context.capabilities.drawBuffers;if(i){var r=this._context.gl;e._MAX_COLOR_ATTACHMENTS=r.getParameter(i.MAX_COLOR_ATTACHMENTS)}else e._MAX_COLOR_ATTACHMENTS=1}var n=t-d.VY.COLOR_ATTACHMENT0;n+1>e._MAX_COLOR_ATTACHMENTS&&o.Z.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject","illegal attachment point for color attachment: ".concat(n+1,". Implementation supports up to ").concat(e._MAX_COLOR_ATTACHMENTS," color attachments"))}}]),e}();function m(e){return null!=e&&"type"in e&&e.type===T.B.Texture}function b(e,t){var i=Math.max(e.width,e.height);if(i>t){p.warn("Resizing FBO attachment size ".concat(e.width,"x").concat(e.height," to device limit ").concat(t));var r=t/i;return e.width=Math.round(e.width*r),e.height=Math.round(e.height*r),!1}return!0}function v(e){return e.descriptor.target===d.No.TEXTURE_CUBE_MAP?d.No.TEXTURE_CUBE_MAP_POSITIVE_X:d.No.TEXTURE_2D}x._MAX_COLOR_ATTACHMENTS=-1},15880:function(e,t,i){i.d(t,{r:function(){return o}});var r=i(15671),n=i(43144),s=i(83826),h=i(8548),a=i(46888),u=i(3479),o=function(){function e(t,i){(0,r.Z)(this,e),this._context=t,this._descriptor=i,this.type=a.B.RenderBuffer,this._context.instanceCounter.increment(h._g.Renderbuffer,this);var n=this._context.gl;this.glName=n.createRenderbuffer(),this._context.bindRenderbuffer(this);var u=i.width,o=i.height,l=i.internalFormat;if(i.multisampled){if(this._context.type!==s.zO.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");n.renderbufferStorageMultisample(n.RENDERBUFFER,this.samples,l,u,o)}else n.renderbufferStorage(n.RENDERBUFFER,l,u,o)}return(0,n.Z)(e,[{key:"descriptor",get:function(){return this._descriptor}},{key:"samples",get:function(){var e=this._descriptor.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}},{key:"gpuMemoryUsage",get:function(){return(0,u.G)(this._descriptor)}},{key:"resize",value:function(e,t){var i=this._descriptor;if(i.width!==e||i.height!==t){i.width=e,i.height=t;var r=this._context.gl;this._context.bindRenderbuffer(this),i.multisampled?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,i.internalFormat,i.width,i.height):r.renderbufferStorage(r.RENDERBUFFER,i.internalFormat,i.width,i.height)}}},{key:"dispose",value:function(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(h._g.Renderbuffer,this),this._context=null)}}]),e}()},3479:function(e,t,i){i.d(t,{G:function(){return a},Y:function(){return h}});var r=i(43144),n=i(15671),s=i(3384),h=(0,r.Z)((function e(t,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;(0,n.Z)(this,e),this.internalFormat=t,this.width=i,this.height=r,this.multisampled=!1,this.samples=1}));function a(e){return e.width<=0||e.height<=0||null==e.internalFormat?0:e.width*e.height*(0,s.RG)(e.internalFormat)}}}]);
//# sourceMappingURL=3634.ef86fdd6.chunk.js.map