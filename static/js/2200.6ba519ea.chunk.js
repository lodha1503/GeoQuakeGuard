"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[2200],{82200:function(t,e,r){r.r(e),r.d(e,{executeTopFeaturesQuery:function(){return c}});var n=r(74165),u=r(1413),o=r(15861),i=r(23084),l=r(88031),s=r(49818),a=r(54307);function c(t,e,r,n){return p.apply(this,arguments)}function p(){return p=(0,o.Z)((0,n.Z)().mark((function t(e,r,o,c){var p,d,y,f;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p=(0,i.en)(e),d=(0,u.Z)({},c),t.next=4,(0,l.IJ)(p,a.Z.from(r),o,d);case 4:return y=t.sent,f=y.data,t.abrupt("return",s.Z.fromJSON(f));case 7:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}},88031:function(t,e,r){r.d(e,{IJ:function(){return f},m5:function(){return F},vB:function(){return x},w7:function(){return v}});var n=r(74165),u=r(1413),o=r(15861),i=r(76200),l=r(35995),s=r(77981),a=r(91340),c=r(92975),p=r(22585),d=r(68620),y="Layer does not support extent calculation.";function f(t,e,r,n){return m.apply(this,arguments)}function m(){return(m=(0,o.Z)((0,n.Z)().mark((function t(e,r,u,o){var i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e,r,"json",o);case 2:return i=t.sent,t.abrupt("return",((0,d.p)(r,u,i.data),i));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,e,r){return h.apply(this,arguments)}function h(){return(h=(0,o.Z)((0,n.Z)().mark((function t(e,r,u){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",null!=r.timeExtent&&r.timeExtent.isEmpty?{data:{objectIds:[]}}:w(e,r,"json",u,{returnIdsOnly:!0}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(t,e,r){return Z.apply(this,arguments)}function Z(){return(Z=(0,o.Z)((0,n.Z)().mark((function t(e,r,u){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",null!=r.timeExtent&&r.timeExtent.isEmpty?{data:{count:0,extent:null}}:w(e,r,"json",u,{returnExtentOnly:!0,returnCountOnly:!0}).then((function(t){var e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(y);if(e.hasOwnProperty("count"))throw new Error(y);return t})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):w(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function w(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},d="string"==typeof t?(0,l.mN)(t):t,y=e.geometry?[e.geometry]:[];return n.responseType="pbf"===r?"array-buffer":"json",(0,a.aX)(y,null,n).then((function(t){var a=null===t||void 0===t?void 0:t[0];null!=a&&((e=e.clone()).geometry=a);var y=(0,p.A)((0,u.Z)((0,u.Z)((0,u.Z)({},d.query),{},{f:r},o),function(t,e){var r,n,u=t.geometry,o=t.toJSON(),i=o;if(null!=u&&(i.geometry=JSON.stringify(u),i.geometryType=(0,s.Ji)(u),i.inSR=(0,c.B9)(u.spatialReference)),null!==(r=o.topFilter)&&void 0!==r&&r.groupByFields&&(i.topFilter.groupByFields=o.topFilter.groupByFields.join(",")),null!==(n=o.topFilter)&&void 0!==n&&n.orderByFields&&(i.topFilter.orderByFields=o.topFilter.orderByFields.join(",")),o.topFilter&&(i.topFilter=JSON.stringify(i.topFilter)),o.objectIds&&(i.objectIds=o.objectIds.join(",")),o.orderByFields&&(i.orderByFields=o.orderByFields.join(",")),o.outFields&&!(null!==e&&void 0!==e&&e.returnCountOnly||null!==e&&void 0!==e&&e.returnExtentOnly||null!==e&&void 0!==e&&e.returnIdsOnly)?o.outFields.includes("*")?i.outFields="*":i.outFields=o.outFields.join(","):delete i.outFields,o.outSR?i.outSR=(0,c.B9)(o.outSR):u&&o.returnGeometry&&(i.outSR=i.inSR),o.returnGeometry&&delete o.returnGeometry,o.timeExtent){var l=o.timeExtent,a=l.start,p=l.end;null==a&&null==p||(i.time=a===p?a:"".concat(null!==a&&void 0!==a?a:"null",",").concat(null!==p&&void 0!==p?p:"null")),delete o.timeExtent}return i}(e,o)));return(0,i.Z)((0,l.v_)(d.path,"queryTopFeatures"),(0,u.Z)((0,u.Z)({},n),{},{query:(0,u.Z)((0,u.Z)({},y),n.query)}))}))}}}]);
//# sourceMappingURL=2200.6ba519ea.chunk.js.map