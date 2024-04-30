/*! For license information please see 377.8d7226ab.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[377],{10377:function(e,t,n){n.r(t),n.d(t,{CalciteFlowItem:function(){return ue},defineCustomElement:function(){return fe}});var a=n(74165),i=n(15861),o=n(15671),c=n(43144),l=n(97326),s=n(60136),r=n(29388),d=n(51554),h=n(92358),u=n(13160),f=n(47242),p=n(46895),g=n(52655),v=n(4942),m=n(72021),b=n(31944),k=n(8703),y=n(65138),x=n(57601),C=n(91438),w=n(89731),S=n(69874),E="action-bar-container",z="container",H="header",Z="header-container",F="header-container--border-end",A="heading",L="description",B="header-content",M="header-actions",P="header-actions--end",O="header-actions--start",I="content-wrapper",D="fab-container",_="footer",T="x",R="ellipsis",N="chevron-down",W="chevron-up",j="action-bar",G="header-actions-start",K="header-actions-end",Y="header-menu-actions",q="header-content",J="fab",Q="footer",U="footer-actions",V=(0,d.GH)(function(e){(0,s.Z)(n,e);var t=(0,r.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.calcitePanelClose=(0,d.yM)((0,l.Z)(e),"calcitePanelClose",6),e.calcitePanelToggle=(0,d.yM)((0,l.Z)(e),"calcitePanelToggle",6),e.calcitePanelScroll=(0,d.yM)((0,l.Z)(e),"calcitePanelScroll",6),e.resizeObserver=(0,m.c)("resize",(function(){return e.resizeHandler()})),e.resizeHandler=function(){var t=(0,l.Z)(e).panelScrollEl;t&&"number"===typeof t.scrollHeight&&"number"===typeof t.offsetHeight&&(t.tabIndex=t.scrollHeight>t.offsetHeight?0:-1)},e.setContainerRef=function(t){e.containerEl=t},e.panelKeyDownHandler=function(t){e.closable&&"Escape"===t.key&&!t.defaultPrevented&&(e.close(),t.preventDefault())},e.close=function(){e.closed=!0,e.calcitePanelClose.emit()},e.collapse=function(){e.collapsed=!e.collapsed,e.calcitePanelToggle.emit()},e.panelScrollHandler=function(){e.calcitePanelScroll.emit()},e.handleHeaderActionsStartSlotChange=function(t){e.hasStartActions=(0,h.e)(t)},e.handleHeaderActionsEndSlotChange=function(t){e.hasEndActions=(0,h.e)(t)},e.handleHeaderMenuActionsSlotChange=function(t){e.hasMenuItems=(0,h.e)(t)},e.handleActionBarSlotChange=function(t){var n=(0,h.s)(t).filter((function(e){return null===e||void 0===e?void 0:e.matches("calcite-action-bar")}));n.forEach((function(e){return e.layout="horizontal"})),e.hasActionBar=!!n.length},e.handleHeaderContentSlotChange=function(t){e.hasHeaderContent=(0,h.e)(t)},e.handleFooterSlotChange=function(t){e.hasFooterContent=(0,h.e)(t)},e.handleFooterActionsSlotChange=function(t){e.hasFooterActions=(0,h.e)(t)},e.handleFabSlotChange=function(t){e.hasFab=(0,h.e)(t)},e.setPanelScrollEl=function(t){var n,a;(e.panelScrollEl=t,null===(n=e.resizeObserver)||void 0===n||n.disconnect(),t)&&(null===(a=e.resizeObserver)||void 0===a||a.observe(t),e.resizeHandler())},e.closed=!1,e.disabled=!1,e.closable=!1,e.collapsed=!1,e.collapseDirection="down",e.collapsible=!1,e.headingLevel=void 0,e.loading=!1,e.heading=void 0,e.description=void 0,e.menuOpen=!1,e.messageOverrides=void 0,e.messages=void 0,e.hasStartActions=!1,e.hasEndActions=!1,e.hasMenuItems=!1,e.hasHeaderContent=!1,e.hasActionBar=!1,e.hasFooterContent=!1,e.hasFooterActions=!1,e.hasFab=!1,e.defaultMessages=void 0,e.effectiveLocale="",e.showHeaderContent=!1,e}return(0,c.Z)(n,[{key:"onMessagesChange",value:function(){}},{key:"connectedCallback",value:function(){(0,u.c)(this),(0,p.c)(this),(0,g.c)(this)}},{key:"componentWillLoad",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,f.a)(this),e.next=3,(0,g.s)(this);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidLoad",value:function(){(0,f.s)(this)}},{key:"componentDidRender",value:function(){(0,u.u)(this)}},{key:"disconnectedCallback",value:function(){var e;(0,u.d)(this),(0,p.d)(this),(0,g.d)(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}},{key:"effectiveLocaleChange",value:function(){(0,g.u)(this,this.effectiveLocale)}},{key:"setFocus",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.c)(this);case 2:(0,h.f)(this.containerEl);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"scrollContentTo",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(n=this.panelScrollEl)||void 0===n||n.scrollTo(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderHeaderContent",value:function(){var e=this.heading,t=this.headingLevel,n=this.description,a=this.hasHeaderContent,i=e?(0,d.h)(k.H,{class:A,level:t},e):null,o=n?(0,d.h)("span",{class:L},n):null;return a||!i&&!o?null:(0,d.h)("div",{class:B,key:"header-content"},i,o)}},{key:"renderActionBar",value:function(){return(0,d.h)("div",{class:E,hidden:!this.hasActionBar},(0,d.h)("slot",{name:j,onSlotchange:this.handleActionBarSlotChange}))}},{key:"renderHeaderSlottedContent",value:function(){return(0,d.h)("div",{class:B,hidden:!this.hasHeaderContent,key:"slotted-header-content"},(0,d.h)("slot",{name:q,onSlotchange:this.handleHeaderContentSlotChange}))}},{key:"renderHeaderStartActions",value:function(){var e,t=this.hasStartActions;return(0,d.h)("div",{class:(e={},(0,v.Z)(e,O,!0),(0,v.Z)(e,M,!0),e),hidden:!t,key:"header-actions-start"},(0,d.h)("slot",{name:G,onSlotchange:this.handleHeaderActionsStartSlotChange}))}},{key:"renderHeaderActionsEnd",value:function(){var e,t=this.hasEndActions,n=this.messages,a=this.closable,i=this.collapsed,o=this.collapseDirection,c=this.collapsible,l=this.hasMenuItems,s=n.collapse,r=n.expand,u=n.close,f=[N,W];"up"===o&&f.reverse();var p=c?(0,d.h)("calcite-action",{"aria-expanded":(0,h.t)(!i),"aria-label":s,"data-test":"collapse",icon:i?f[0]:f[1],onClick:this.collapse,text:s,title:i?r:s}):null,g=a?(0,d.h)("calcite-action",{"aria-label":u,"data-test":"close",icon:T,onClick:this.close,text:u,title:u}):null,m=(0,d.h)("slot",{name:K,onSlotchange:this.handleHeaderActionsEndSlotChange}),b=t||p||g||l;return(0,d.h)("div",{class:(e={},(0,v.Z)(e,P,!0),(0,v.Z)(e,M,!0),e),hidden:!b,key:"header-actions-end"},m,this.renderMenu(),p,g)}},{key:"renderMenu",value:function(){var e=this.hasMenuItems,t=this.messages,n=this.menuOpen;return(0,d.h)("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:t.options,open:n,placement:"bottom-end"},(0,d.h)("calcite-action",{icon:R,slot:b.S.trigger,text:t.options}),(0,d.h)("slot",{name:Y,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}},{key:"renderHeaderNode",value:function(){var e,t=this.hasHeaderContent,n=this.hasStartActions,a=this.hasEndActions,i=this.closable,o=this.collapsible,c=this.hasMenuItems,l=this.hasActionBar,s=this.renderHeaderContent(),r=t||!!s||n||a||o||i||c;return this.showHeaderContent=r,(0,d.h)("header",{class:H,hidden:!(r||l)},(0,d.h)("div",{class:(e={},(0,v.Z)(e,Z,!0),(0,v.Z)(e,F,l),e),hidden:!r},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),s,this.renderHeaderActionsEnd()),this.renderActionBar())}},{key:"renderFooterNode",value:function(){var e=this.hasFooterContent,t=this.hasFooterActions,n=e||t;return(0,d.h)("footer",{class:_,hidden:!n},(0,d.h)("slot",{key:"footer-slot",name:Q,onSlotchange:this.handleFooterSlotChange}),(0,d.h)("slot",{key:"footer-actions-slot",name:U,onSlotchange:this.handleFooterActionsSlotChange}))}},{key:"renderContent",value:function(){return(0,d.h)("div",{class:I,hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},(0,d.h)("slot",null),this.renderFab())}},{key:"renderFab",value:function(){return(0,d.h)("div",{class:D,hidden:!this.hasFab},(0,d.h)("slot",{name:J,onSlotchange:this.handleFabSlotChange}))}},{key:"render",value:function(){var e=this.loading,t=this.panelKeyDownHandler,n=this.closed,a=this.closable,i=(0,d.h)("article",{"aria-busy":(0,h.t)(e),class:z,hidden:n,onKeyDown:t,tabIndex:a?0:-1,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return(0,d.h)(d.HY,null,e?(0,d.h)("calcite-scrim",{loading:e}):null,i)}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}},{key:"style",get:function(){return":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-app-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-ui-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-ui-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-ui-background)}.footer{display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding:var(--calcite-panel-footer-padding, 0.5rem);border-block-start:1px solid var(--calcite-ui-border-3)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-app-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}"}}]),n}(d.mv),[1,"calcite-panel",{closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasFooterContent:[32],hasFooterActions:[32],hasFab:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]}]);function X(){if("undefined"!==typeof customElements){["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach((function(e){switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,V);break;case"calcite-action":customElements.get(e)||(0,y.d)();break;case"calcite-action-menu":customElements.get(e)||(0,b.d)();break;case"calcite-icon":customElements.get(e)||(0,x.d)();break;case"calcite-loader":customElements.get(e)||(0,C.d)();break;case"calcite-popover":customElements.get(e)||(0,w.d)();break;case"calcite-scrim":customElements.get(e)||(0,S.d)()}}))}}X();var $="back-button",ee="chevron-left",te="chevron-right",ne="action-bar",ae="header-actions-start",ie="header-actions-end",oe="header-menu-actions",ce="header-content",le="fab",se="footer",re="footer-actions",de=(0,d.GH)(function(e){(0,s.Z)(n,e);var t=(0,r.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.calciteFlowItemBack=(0,d.yM)((0,l.Z)(e),"calciteFlowItemBack",7),e.calciteFlowItemScroll=(0,d.yM)((0,l.Z)(e),"calciteFlowItemScroll",6),e.calciteFlowItemClose=(0,d.yM)((0,l.Z)(e),"calciteFlowItemClose",6),e.calciteFlowItemToggle=(0,d.yM)((0,l.Z)(e),"calciteFlowItemToggle",6),e.handlePanelScroll=function(t){t.stopPropagation(),e.calciteFlowItemScroll.emit()},e.handlePanelClose=function(t){t.stopPropagation(),e.calciteFlowItemClose.emit()},e.handlePanelToggle=function(t){t.stopPropagation(),e.collapsed=t.target.collapsed,e.calciteFlowItemToggle.emit()},e.backButtonClick=function(){e.calciteFlowItemBack.emit()},e.setBackRef=function(t){e.backButtonEl=t},e.setContainerRef=function(t){e.containerEl=t},e.closable=!1,e.closed=!1,e.collapsed=!1,e.collapseDirection="down",e.collapsible=!1,e.beforeBack=void 0,e.description=void 0,e.disabled=!1,e.heading=void 0,e.headingLevel=void 0,e.loading=!1,e.menuOpen=!1,e.messageOverrides=void 0,e.messages=void 0,e.showBackButton=!1,e.defaultMessages=void 0,e.effectiveLocale="",e}return(0,c.Z)(n,[{key:"onMessagesChange",value:function(){}},{key:"connectedCallback",value:function(){(0,u.c)(this),(0,p.c)(this),(0,g.c)(this)}},{key:"componentWillLoad",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.s)(this);case 2:(0,f.a)(this);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidRender",value:function(){(0,u.u)(this)}},{key:"disconnectedCallback",value:function(){(0,u.d)(this),(0,p.d)(this),(0,g.d)(this)}},{key:"componentDidLoad",value:function(){(0,f.s)(this)}},{key:"effectiveLocaleChange",value:function(){(0,g.u)(this,this.effectiveLocale)}},{key:"setFocus",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.c)(this);case 2:if(t=this.backButtonEl,n=this.containerEl,!t){e.next=7;break}return e.abrupt("return",t.setFocus());case 7:if(!n){e.next=9;break}return e.abrupt("return",n.setFocus());case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"scrollContentTo",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=this.containerEl)||void 0===n?void 0:n.scrollContentTo(t);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderBackButton",value:function(){var e=this.el,t="rtl"===(0,h.b)(e),n=this.showBackButton,a=this.backButtonClick,i=this.messages.back,o=t?te:ee;return n?(0,d.h)("calcite-action",{"aria-label":i,class:$,icon:o,key:"flow-back-button",onClick:a,scale:"s",slot:"header-actions-start",text:i,title:i,ref:this.setBackRef}):null}},{key:"render",value:function(){var e=this.collapsed,t=this.collapseDirection,n=this.collapsible,a=this.closable,i=this.closed,o=this.description,c=this.disabled,l=this.heading,s=this.headingLevel,r=this.loading,h=this.menuOpen,u=this.messages;return(0,d.h)(d.AA,null,(0,d.h)("calcite-panel",{closable:a,closed:i,collapseDirection:t,collapsed:e,collapsible:n,description:o,disabled:c,heading:l,headingLevel:s,loading:r,menuOpen:h,messageOverrides:u,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,onCalcitePanelToggle:this.handlePanelToggle,ref:this.setContainerRef},this.renderBackButton(),(0,d.h)("slot",{name:ne,slot:j}),(0,d.h)("slot",{name:ae,slot:G}),(0,d.h)("slot",{name:ie,slot:K}),(0,d.h)("slot",{name:ce,slot:q}),(0,d.h)("slot",{name:oe,slot:Y}),(0,d.h)("slot",{name:le,slot:J}),(0,d.h)("slot",{name:re,slot:U}),(0,d.h)("slot",{name:se,slot:Q}),(0,d.h)("slot",null)))}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}},{key:"style",get:function(){return":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}"}}]),n}(d.mv),[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]}]);function he(){if("undefined"!==typeof customElements){["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach((function(e){switch(e){case"calcite-flow-item":customElements.get(e)||customElements.define(e,de);break;case"calcite-action":customElements.get(e)||(0,y.d)();break;case"calcite-action-menu":customElements.get(e)||(0,b.d)();break;case"calcite-icon":customElements.get(e)||(0,x.d)();break;case"calcite-loader":customElements.get(e)||(0,C.d)();break;case"calcite-panel":customElements.get(e)||X();break;case"calcite-popover":customElements.get(e)||(0,w.d)();break;case"calcite-scrim":customElements.get(e)||(0,S.d)()}}))}}he();var ue=de,fe=he},69874:function(e,t,n){n.d(t,{d:function(){return y}});var a=n(74165),i=n(15861),o=n(15671),c=n(43144),l=n(60136),s=n(29388),r=n(51554),d=n(46895),h=n(52655),u=n(72021),f=n(92358),p=n(91438),g="scrim",v="content",m=72,b=480,k=(0,r.GH)(function(e){(0,l.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.resizeObserver=(0,u.c)("resize",(function(){return e.handleResize()})),e.handleDefaultSlotChange=function(t){e.hasContent=(0,f.u)(t)},e.storeLoaderEl=function(t){e.loaderEl=t,e.handleResize()},e.loading=!1,e.messages=void 0,e.messageOverrides=void 0,e.loaderScale=void 0,e.defaultMessages=void 0,e.effectiveLocale="",e.hasContent=!1,e}return(0,c.Z)(n,[{key:"onMessagesChange",value:function(){}},{key:"effectiveLocaleChange",value:function(){(0,h.u)(this,this.effectiveLocale)}},{key:"connectedCallback",value:function(){var e;(0,d.c)(this),(0,h.c)(this),null===(e=this.resizeObserver)||void 0===e||e.observe(this.el)}},{key:"componentWillLoad",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.s)(this);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"disconnectedCallback",value:function(){var e;(0,d.d)(this),(0,h.d)(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}},{key:"render",value:function(){var e=this.hasContent,t=this.loading,n=this.messages;return(0,r.h)("div",{class:g},t?(0,r.h)("calcite-loader",{label:n.loading,scale:this.loaderScale,ref:this.storeLoaderEl}):null,(0,r.h)("div",{class:v,hidden:!e},(0,r.h)("slot",{onSlotchange:this.handleDefaultSlotChange})))}},{key:"getScale",value:function(e){return e<m?"s":e>=b?"l":"m"}},{key:"handleResize",value:function(){var e,t=this.loaderEl,n=this.el;t&&(this.loaderScale=this.getScale(null!==(e=Math.min(n.clientHeight,n.clientWidth))&&void 0!==e?e:0))}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}},{key:"style",get:function(){return":host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-scrim-background-internal))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}"}}]),n}(r.mv),[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],loaderScale:[32],defaultMessages:[32],effectiveLocale:[32],hasContent:[32]}]);function y(){if("undefined"!==typeof customElements){["calcite-scrim","calcite-loader"].forEach((function(e){switch(e){case"calcite-scrim":customElements.get(e)||customElements.define(e,k);break;case"calcite-loader":customElements.get(e)||(0,p.d)()}}))}}y()}}]);
//# sourceMappingURL=377.8d7226ab.chunk.js.map