"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[150],{60150:function(e,t,r){r.r(t),r.d(t,{default:function(){return je}});var n=r(37762),i=r(1413),a=r(74165),o=r(15861),u=r(15671),s=r(43144),l=r(97326),p=r(88301),d=r(61120),c=r(60136),y=r(29388),f=r(27366),v=r(11582),h=r(40281),b=r(10064),m=r(93002),g=r(97642),w=r(66978),Z=r(94172),k=r(76672),_=r(35995),C=r(49861),x=(r(25243),r(63780),r(93169),r(38511)),S=r(69912),F=r(25265),I=r(30651),O=r(27961),E=r(11936),j=r(6693),T=r(46671),A=r(56601),L=r(7436),P=r(6061),G=r(29598),R=r(71684),V=r(56811),q=r(99063),D=r(25899),N=r(45948),M=r(38558),U=r(25610),Q=r(37270),H=r(44055),J=r(94931),B=(r(78451),r(98689),r(57823),r(32066),r(49018)),Y=r(34999),z=r(28189),K=(r(9014),r(32718)),X=r(79056),W=r(84652),$=r(54472),ee=r(18202),te=r(31201),re=r(47492),ne=r(57594),ie=r(12224),ae=r(77748),oe=r(85116),ue=r(86638),se=r(81085),le=r(61574),pe=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],de={key:"type",base:B.Z,errorContext:"renderer",typeMap:{simple:Y.Z,"unique-value":z.Z,"class-breaks":J.Z}},ce=(0,U.v)(),ye=(0,re.d)({types:de}),fe=0;function ve(e){var t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function he(e){switch(e){case"point":case"multipoint":return le.xA.clone();case"polyline":return le.CJ.clone();case"polygon":case"multipatch":return le.z3.clone();default:return null}}function be(e,t){var r;return null==e?null:null===(r=t.subtypes)||void 0===r?void 0:r.find((function(t){return t.code===e}))}function me(e,t){var r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}var n={},i=be(e,t);if(null!=i){var a=i.defaultValues;for(var o in a)n[o]=a[o]}return n[t.subtypeField]=e,new ie.Z({name:"New Feature",drawingTool:r,prototype:{attributes:n}})}var ge="esri.layers.support.SubtypeSublayer",we=function(e){(0,c.Z)(r,e);var t=(0,y.Z)(r);function r(e){var n;return(0,u.Z)(this,r),(n=t.call(this,e)).charts=null,n.editingEnabled=!0,n.fieldOverrides=null,n.fieldsIndex=null,n.formTemplate=null,n.id="".concat(Date.now().toString(16),"-subtype-sublayer-").concat(fe++),n.type="subtype-sublayer",n.labelsVisible=!0,n.labelingInfo=null,n.layerType="ArcGISFeatureLayer",n.legendEnabled=!0,n.listMode="show",n.minScale=0,n.maxScale=0,n.opacity=1,n.parent=null,n.popupEnabled=!0,n.popupTemplate=null,n.subtypeCode=null,n.templates=null,n.title=null,n.visible=!0,n}return(0,s.Z)(r,[{key:"capabilities",get:function(){var e;return null===(e=this.parent)||void 0===e?void 0:e.capabilities}},{key:"effectiveCapabilities",get:function(){var e;return null===(e=this.parent)||void 0===e?void 0:e.effectiveCapabilities}},{key:"effectiveEditingEnabled",get:function(){var e=this.parent;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}},{key:"elevationInfo",get:function(){var e;return null===(e=this.parent)||void 0===e?void 0:e.elevationInfo}},{key:"writeFieldOverrides",value:function(e,t,r){var n,i,a=this.fields,o=this.parent;if(a){i=[];var u=0;a.forEach((function(e){var t,r=e.name,n=e.alias,a=e.editable;if(e.visible){var s=null===o||void 0===o||null===(t=o.fields)||void 0===t?void 0:t.find((function(e){return e.name===r}));if(s){var l={name:r},p=!1;n!==s.alias&&(l.alias=n,p=!0),a!==s.editable&&(l.editable=a,p=!0),i.push(l),p&&u++}}})),0===u&&i.length===a.length&&(i=null)}else i=(0,W.d9)(e);(null===(n=i)||void 0===n?void 0:n.length)&&(0,ee.RB)(r,i,t)}},{key:"fields",get:function(){var e=this.parent,t=this.fieldOverrides,r=this.subtypeCode,i=null===e||void 0===e?void 0:e.fields;if(!e||null===i||void 0===i||!i.length)return null;var a,o=e.subtypes,u=e.subtypeField,s=null===o||void 0===o?void 0:o.find((function(e){return e.code===r})),l=null===s||void 0===s?void 0:s.defaultValues,p=null===s||void 0===s?void 0:s.domains,d=[],c=(0,n.Z)(i);try{var y=function(){var e,n,i=a.value.clone(),o=i.name,s=null===t||void 0===t?void 0:t.find((function(e){return e.name===o}));if(i.visible=!t||!!s,s){var c=s.alias,y=s.editable;c&&(i.alias=c),!1===y&&(i.editable=!1)}var f=null!==(e=null===l||void 0===l?void 0:l[o])&&void 0!==e?e:null;i.defaultValue=o===u?r:f;var v=null!==(n=null===p||void 0===p?void 0:p[o])&&void 0!==n?n:null;i.domain=o===u?null:v?"inherited"===v.type?i.domain:v.clone():null,d.push(i)};for(c.s();!(a=c.n()).done;)y()}catch(f){c.e(f)}finally{c.f()}return d}},{key:"floorInfo",get:function(){var e;return null===(e=this.parent)||void 0===e?void 0:e.floorInfo}},{key:"geometryType",get:function(){var e;return null===(e=this.parent)||void 0===e?void 0:e.geometryType}},{key:"effectiveScaleRange",get:function(){return{minScale:this.minScale,maxScale:this.maxScale}}},{key:"objectIdField",get:function(){var e;return this.parent||K.Z.getLogger(ge).error(ke("objectIdField")),null===(e=this.parent)||void 0===e?void 0:e.objectIdField}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"renderer",get:function(){if(this._isOverridden("renderer"))return this._get("renderer");var e=this.parent;return e&&!e.isTable&&"mesh"!==e.geometryType?function(e){return new Y.Z({symbol:he(e)})}(e.geometryType):null},set:function(e){(0,Q.YN)(e,this.fieldsIndex),this._override("renderer",e)}},{key:"readRendererFromService",value:function(e,t,r){var n,i;if("Table"===t.type)return null;var a,o=null===(n=t.drawingInfo)||void 0===n?void 0:n.renderer,u=ye(o,t,r),s=this.subtypeCode;if(null!=s&&function(e,t){return!!t&&"unique-value"===(null===e||void 0===e?void 0:e.type)&&"string"==typeof e.field&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}(u,t.subtypeField)){var l,p=null===(l=u.uniqueValueInfos)||void 0===l?void 0:l.find((function(e){var t=e.value;return(t="number"==typeof t?String(t):t)===String(s)}));p&&(a=new Y.Z({symbol:p.symbol}))}else"simple"!==(null===u||void 0===u?void 0:u.type)||(null===(i=u.visualVariables)||void 0===i?void 0:i.length)||(a=u);return a}},{key:"readRenderer",value:function(e,t,r){var n,i,a=null===t||void 0===t||null===(n=t.layerDefinition)||void 0===n||null===(n=n.drawingInfo)||void 0===n?void 0:n.renderer;if(a){var o=null===(i=a.visualVariables)||void 0===i?void 0:i.some((function(e){return"rotationInfo"!==e.type}));return o?void 0:ye(a,t,r)||void 0}}},{key:"spatialReference",get:function(){var e;return null===(e=this.parent)||void 0===e?void 0:e.spatialReference}},{key:"readTemplatesFromService",value:function(e,t){return[me(this.subtypeCode,t)]}},{key:"readTitleFromService",value:function(e,t){var r=be(this.subtypeCode,t);return null!=r?r.name:null}},{key:"url",get:function(){var e;return null===(e=this.parent)||void 0===e?void 0:e.url}},{key:"userHasUpdateItemPrivileges",get:function(){var e;return!(null===(e=this.parent)||void 0===e||!e.userHasUpdateItemPrivileges)}},{key:"addAttachment",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.parent){e.next=3;break}throw ke("addAttachment");case 3:if(t.getAttribute(n.subtypeField)===this.subtypeCode){e.next=5;break}throw new b.Z("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");case 5:return e.abrupt("return",n.addAttachment(t,r));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"updateAttachment",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r,n){var i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this.parent){e.next=3;break}throw ke("updateAttachment");case 3:if(t.getAttribute(i.subtypeField)===this.subtypeCode){e.next=5;break}throw new b.Z("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");case 5:return e.abrupt("return",i.updateAttachment(t,r,n));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"deleteAttachments",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.parent){e.next=3;break}throw ke("deleteAttachments");case 3:if(t.getAttribute(n.subtypeField)===this.subtypeCode){e.next=5;break}throw new b.Z("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");case 5:return e.abrupt("return",n.deleteAttachments(t,r));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.parent){e.next=2;break}throw ke("applyEdits");case 2:return e.abrupt("return",this.parent.applyEdits(t,r));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"createPopupTemplate",value:function(e){var t=this,r=this.parent,n=this.fields,i=this.title;r&&(t={displayField:r.displayField,editFieldsInfo:r.editFieldsInfo,fields:n,objectIdField:r.objectIdField,title:i});return(0,se.eZ)(t,e)}},{key:"createQuery",value:function(){if(!this.parent)throw ke("createQuery");var e=(0,M.rP)(this.parent),t="".concat(this.parent.subtypeField,"=").concat(this.subtypeCode);return e.where=(0,k._)(t,this.parent.definitionExpression),e}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e){return this._getLayerDomain(e)}},{key:"hasUserOverrides",value:function(){var e=this;return pe.some((function(t){return e.originIdOf(t)===F.s3.USER}))}},{key:"queryAttachments",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r){var n,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if((n=e.sent).parent){e.next=5;break}throw ke("queryAttachments");case 5:return i=t.clone(),e.abrupt("return",(i.where=Ze(i.where,n.parent.subtypeField,n.subtypeCode),n.parent.queryAttachments(t,r)));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r){var n,i,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if((i=e.sent).parent){e.next=5;break}throw ke("queryFeatures");case 5:return o=null!==(n=ue.Z.from(t))&&void 0!==n?n:i.createQuery(),e.abrupt("return",(null!=t&&(o.where=Ze(o.where,i.parent.subtypeField,i.subtypeCode)),i.parent.queryFeatures(o,r)));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_getLayerDomain",value:function(e){var t=this.fieldsIndex.get(e);return t?t.domain:null}}]),r}((0,g.R)((0,v.J)((0,X.IG)($.Z))));(0,f._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],we.prototype,"capabilities",null),(0,f._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],we.prototype,"effectiveCapabilities",null),(0,f._)([(0,C.Cb)({json:{write:{ignoreOrigin:!0}}})],we.prototype,"charts",void 0),(0,f._)([(0,C.Cb)({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],we.prototype,"editingEnabled",void 0),(0,f._)([(0,C.Cb)({type:Boolean,readOnly:!0})],we.prototype,"effectiveEditingEnabled",null),(0,f._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],we.prototype,"elevationInfo",null),(0,f._)([(0,C.Cb)({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],we.prototype,"fieldOverrides",void 0),(0,f._)([(0,te.c)("fieldOverrides")],we.prototype,"writeFieldOverrides",null),(0,f._)([(0,C.Cb)((0,i.Z)((0,i.Z)({},ce.fields),{},{readOnly:!0,json:{read:!1}}))],we.prototype,"fields",null),(0,f._)([(0,C.Cb)(ce.fieldsIndex)],we.prototype,"fieldsIndex",void 0),(0,f._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],we.prototype,"floorInfo",null),(0,f._)([(0,C.Cb)({type:ne.Z,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],we.prototype,"formTemplate",void 0),(0,f._)([(0,C.Cb)({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],we.prototype,"id",void 0),(0,f._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],we.prototype,"geometryType",null),(0,f._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],we.prototype,"type",void 0),(0,f._)([(0,C.Cb)(ve((0,W.d9)(N.iR)))],we.prototype,"labelsVisible",void 0),(0,f._)([(0,C.Cb)({type:[ae.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:oe.r},write:{ignoreOrigin:!0}}})],we.prototype,"labelingInfo",void 0),(0,f._)([(0,C.Cb)({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],we.prototype,"layerType",void 0),(0,f._)([(0,C.Cb)(ve((0,W.d9)(N.rn)))],we.prototype,"legendEnabled",void 0),(0,f._)([(0,C.Cb)({type:["show","hide"]})],we.prototype,"listMode",void 0),(0,f._)([(0,C.Cb)(function(){var e=(0,W.d9)(N.rO);return e.json.origins.service.read=!1,ve(e)}())],we.prototype,"minScale",void 0),(0,f._)([(0,C.Cb)(function(){var e=(0,W.d9)(N.u1);return e.json.origins.service.read=!1,ve(e)}())],we.prototype,"maxScale",void 0),(0,f._)([(0,C.Cb)({readOnly:!0})],we.prototype,"effectiveScaleRange",null),(0,f._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],we.prototype,"objectIdField",null),(0,f._)([(0,C.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],we.prototype,"opacity",void 0),(0,f._)([(0,C.Cb)({clonable:!1})],we.prototype,"parent",void 0),(0,f._)([(0,C.Cb)(ve((0,W.d9)(N.C_)))],we.prototype,"popupEnabled",void 0),(0,f._)([(0,C.Cb)({type:H.Z,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],we.prototype,"popupTemplate",void 0),(0,f._)([(0,C.Cb)({readOnly:!0})],we.prototype,"defaultPopupTemplate",null),(0,f._)([(0,C.Cb)({types:de,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],we.prototype,"renderer",null),(0,f._)([(0,x.r)("service","renderer",["drawingInfo.renderer","subtypeField","type"])],we.prototype,"readRendererFromService",null),(0,f._)([(0,x.r)("renderer",["layerDefinition.drawingInfo.renderer"])],we.prototype,"readRenderer",null),(0,f._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],we.prototype,"spatialReference",null),(0,f._)([(0,C.Cb)({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],we.prototype,"subtypeCode",void 0),(0,f._)([(0,C.Cb)({type:[ie.Z],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],we.prototype,"templates",void 0),(0,f._)([(0,x.r)("service","templates",["geometryType","subtypeField","subtypes","type"])],we.prototype,"readTemplatesFromService",null),(0,f._)([(0,C.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],we.prototype,"title",void 0),(0,f._)([(0,x.r)("service","title",["subtypes"])],we.prototype,"readTitleFromService",null),(0,f._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],we.prototype,"url",null),(0,f._)([(0,C.Cb)({readOnly:!0})],we.prototype,"userHasUpdateItemPrivileges",null),(0,f._)([(0,C.Cb)({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],we.prototype,"visible",void 0),we=(0,f._)([(0,S.j)(ge)],we);var Ze=function(e,t,r){var n=new RegExp("".concat(t,"\\s*=\\s*\\d+")),i="".concat(t,"=").concat(r),a=null!==e&&void 0!==e?e:"";return n.test(a)?a.replace(n,i):(0,k._)(i,a)},ke=function(e){return new b.Z("This sublayer must have a parent SubtypeGroupLayer in order to use ".concat(e))},_e=we,Ce=r(57370),xe=r(26704),Se=r(84933),Fe="SubtypeGroupLayer";function Ie(e,t){return new b.Z("layer:unsupported","Layer (".concat(e.title,", ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t),{layer:e})}var Oe=(0,U.v)(),Ee=function(e){(0,c.Z)(f,e);var t=(0,y.Z)(f);function f(){var e;(0,u.Z)(this,f);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i)))._sublayersCollectionChanged=!1,e._sublayerLookup=new Map,e.fields=null,e.fieldsIndex=null,e.outFields=null,e.sublayers=new(h.Z.ofType(_e)),e.timeInfo=null,e.title="Layer",e.type="subtype-group",e._debouncedSaveOperations=(0,w.Ds)(function(){var t=(0,o.Z)((0,a.Z)().mark((function t(n,i,o){var u,s,p;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([r.e(8954),r.e(2224)]).then(r.bind(r,2224));case 2:u=t.sent,s=u.save,p=u.saveAs,t.t0=n,t.next=t.t0===Se.x.SAVE?8:t.t0===Se.x.SAVE_AS?9:10;break;case 8:return t.abrupt("return",s((0,l.Z)(e),i));case 9:return t.abrupt("return",p((0,l.Z)(e),o,i));case 10:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()),e.addHandles((0,Z.YP)((function(){return e.sublayers}),(function(t,r){return e._handleSublayersChange(t,r)}),Z.Z_)),e}return(0,s.Z)(f,[{key:"destroy",value:function(){var e;null===(e=this.source)||void 0===e||e.destroy()}},{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,i.Z)({url:e},t):e}},{key:"load",value:function(e){var t=this,r=null!=e?e.signal:null,n=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(w.r9).then((0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url){e.next=2;break}throw new b.Z("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");case 2:if(null!=t.layerId){e.next=4;break}throw new b.Z("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");case 4:return e.t0=t,e.next=7,t.createGraphicsSource(r);case 7:return e.t1=e.sent,e.abrupt("return",e.t0._initLayerProperties.call(e.t0,e.t1));case 9:case"end":return e.stop()}}),e)})))).then((function(){return(0,M.nU)(t,"load",e)}));return this.addResolvingPromise(n),Promise.resolve(this)}},{key:"createQueryVersion",get:function(){var e;return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(null!==(e=this._get("createQueryVersion"))&&void 0!==e?e:0)+1}},{key:"editingEnabled",get:function(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}},{key:"effectiveEditingEnabled",get:function(){return(0,M.sX)(this)}},{key:"parsedUrl",get:function(){var e=(0,_.mN)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,_.v_)(e.path,this.layerId.toString())),e}},{key:"source",set:function(e){this._get("source")!==e&&this._set("source",e)}},{key:"readTitleFromService",value:function(e,t){var r=t.name;return this.url?(0,D.a7)(this.url,r):r}},{key:"addAttachment",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,M.JD)(this,t,r,Fe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"updateAttachment",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,M.Y5)(this,t,r,n,Fe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,M.Jj)(this,t,r));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"on",value:function(e,t){return(0,p.Z)((0,d.Z)(f.prototype),"on",this).call(this,e,t)}},{key:"createGraphicsSource",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var n,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.Hl)(Promise.all([r.e(3406),r.e(7607),r.e(5226),r.e(9623),r.e(9887),r.e(1323)]).then(r.bind(r,81323)),t);case 2:return n=e.sent,i=n.default,e.abrupt("return",new i({layer:this}).load({signal:t}));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createQuery",value:function(){var e=(0,M.rP)(this),t=this.sublayers.map((function(e){return e.subtypeCode}));return e.where=(0,k._)("".concat(this.subtypeField," IN (").concat(t.join(","),")"),this.definitionExpression),e}},{key:"deleteAttachments",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,M.FV)(this,t,r,Fe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"fetchRecomputedExtents",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,M.Ci)(this,t,Fe));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"findSublayerForFeature",value:function(e){var t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}},{key:"findSublayerForSubtypeCode",value:function(e){return this._sublayerLookup.get(e)}},{key:"getFieldDomain",value:function(e,t){return this._getLayerDomain(e)}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"loadAll",value:function(){var e=this;return(0,m.G)(this,(function(t){t(e.sublayers)}))}},{key:"queryAttachments",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,M.SU)(this,t,r,Fe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r){var i,o,u,s,l,p,d,c,y;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return u=e.sent,s=null!==(i=ue.Z.from(t))&&void 0!==i?i:u.createQuery(),(l=null!==(o=s.outFields)&&void 0!==o?o:[]).includes(this.subtypeField)||(l.push(this.subtypeField),s.outFields=l),e.next=8,u.source.queryFeatures(s,r);case 8:if(null!==(p=e.sent)&&void 0!==p&&p.features){d=(0,n.Z)(p.features);try{for(d.s();!(c=d.n()).done;)(y=c.value).layer=y.sourceLayer=this.findSublayerForFeature(y)}catch(a){d.e(a)}finally{d.f()}}return e.abrupt("return",p);case 11:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,M.tD)(this,t,r,Fe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,M.VG)(this,t,r,Fe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,M.KE)(this,t,r,Fe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryRelatedFeatures",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,M.kp)(this,t,r,Fe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryRelatedFeaturesCount",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,M.C9)(this,t,r,Fe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(Se.x.SAVE,t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"saveAs",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(Se.x.SAVE_AS,r,t));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"write",value:function(e,t){var r,n=t.origin,i=t.layerContainerType,a=t.messages;if(this.isTable){if("web-scene"===n||"web-map"===n&&"tables"!==i)return null!==a&&void 0!==a&&a.push(Ie(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===n&&"tables"===i)return null!==a&&void 0!==a&&a.push(Ie(this,"using a non-table source cannot be written to tables in web maps")),null;return null!==(r=this.sublayers)&&void 0!==r&&r.length?(0,p.Z)((0,d.Z)(f.prototype),"write",this).call(this,e,t):(null!==a&&void 0!==a&&a.push(new b.Z("web-document-write:invalid-property","Layer (".concat(this.title,", ").concat(this.id,") of type '").concat(this.declaredClass,"' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer"),{layer:this})),null)}},{key:"serviceSupportsSpatialReference",value:function(e){return!!this.loaded&&(0,xe.D)(this,e)}},{key:"_getLayerDomain",value:function(e){var t=this.fieldsIndex.get(e);return t?t.domain:null}},{key:"_initLayerProperties",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._set("source",t),(n=t.sourceJSON)&&(this.sourceJSON=n,this.read(n,{origin:"service",url:this.parsedUrl})),!this.isTable){e.next=4;break}throw new b.Z("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");case 4:if(null!==(r=this.subtypes)&&void 0!==r&&r.length){e.next=6;break}throw new b.Z("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");case 6:this._verifyFields(),(0,Q.UF)(this.timeInfo,this.fieldsIndex);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"hasDataChanged",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,M.gG)(this));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_verifyFields",value:function(){var e,t,r,n=null!==(e=null===(t=this.parsedUrl)||void 0===t?void 0:t.path)&&void 0!==e?e:"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+n+")"),this.isTable||-1!==n.search(/\/FeatureServer\//i)||(null===(r=this.fields)||void 0===r?void 0:r.some((function(e){return"geometry"===e.type})))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+n+")")}},{key:"_handleSublayersChange",value:function(e,t){var r=this;t&&(t.forEach((function(e){e.parent=null})),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach((function(e){e.parent=r,r._sublayerLookup.set(e.subtypeCode,e)})),this._sublayersCollectionChanged=!1,this.addHandles([e.on("after-add",(function(e){var t=e.item;t.parent=r,r._sublayerLookup.set(t.subtypeCode,t)})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,r._sublayerLookup.delete(t.subtypeCode)})),e.on("after-changes",(function(){r._sublayersCollectionChanged=!0}))],"sublayers-owner"))}}]),f}((0,L.B)((0,A.o1)((0,j.h)((0,q.n)((0,V.M)((0,R.Q)((0,E.Y)((0,P.q)((0,G.I)((0,g.R)((0,T.N)((0,O.V)((0,v.J)(I.Z))))))))))))));(0,f._)([(0,C.Cb)({readOnly:!0})],Ee.prototype,"createQueryVersion",null),(0,f._)([(0,C.Cb)({readOnly:!0})],Ee.prototype,"editingEnabled",null),(0,f._)([(0,C.Cb)({readOnly:!0})],Ee.prototype,"effectiveEditingEnabled",null),(0,f._)([(0,C.Cb)((0,i.Z)((0,i.Z)({},Oe.fields),{},{readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}))],Ee.prototype,"fields",void 0),(0,f._)([(0,C.Cb)(Oe.fieldsIndex)],Ee.prototype,"fieldsIndex",void 0),(0,f._)([(0,C.Cb)(N.id)],Ee.prototype,"id",void 0),(0,f._)([(0,C.Cb)({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],Ee.prototype,"listMode",void 0),(0,f._)([(0,C.Cb)({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],Ee.prototype,"operationalLayerType",void 0),(0,f._)([(0,C.Cb)(Oe.outFields)],Ee.prototype,"outFields",void 0),(0,f._)([(0,C.Cb)({readOnly:!0})],Ee.prototype,"parsedUrl",null),(0,f._)([(0,C.Cb)({clonable:!1})],Ee.prototype,"source",null),(0,f._)([(0,C.Cb)({type:h.Z.ofType(_e),json:{origins:{service:{read:{source:"subtypes",reader:function(e,t,r){var n=e.map((function(e){var n=e.code,i=new _e({subtypeCode:n});return i.read(t,r),i}));return new(h.Z.ofType(_e))(n)}}}},name:"layers",write:{overridePolicy:function(e,t,r){var n=this.originOf("sublayers"),i=F.s3.PORTAL_ITEM,a=!0;if((0,F.M9)(n)===i&&(0,F.M9)(r.origin)>i){var o=e.some((function(e){return e.hasUserOverrides()}));a=this._sublayersCollectionChanged||o}return{enabled:a,ignoreOrigin:!0}}}}})],Ee.prototype,"sublayers",void 0),(0,f._)([(0,C.Cb)({type:Ce.Z})],Ee.prototype,"timeInfo",void 0),(0,f._)([(0,C.Cb)({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],Ee.prototype,"title",void 0),(0,f._)([(0,x.r)("service","title",["name"])],Ee.prototype,"readTitleFromService",null),(0,f._)([(0,C.Cb)({json:{read:!1}})],Ee.prototype,"type",void 0);var je=Ee=(0,f._)([(0,S.j)("esri.layers.SubtypeGroupLayer")],Ee)}}]);
//# sourceMappingURL=150.33f4724e.chunk.js.map