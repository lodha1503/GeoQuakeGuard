/*! For license information please see 2382.eb1483e6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[2382],{92382:function(e,a,i){i.r(a),i.d(a,{CalciteLoader:function(){return r},defineCustomElement:function(){return n}});var t=i(91438),r=t.L,n=t.d},14387:function(e,a,i){i.d(a,{g:function(){return t}});var t=function(){return[2,1,1,1,3].map((function(e){for(var a="",i=0;i<e;i++)a+=(65536*(1+Math.random())|0).toString(16).substring(1);return a})).join("-")}},91438:function(e,a,i){i.d(a,{L:function(){return d},d:function(){return m}});var t=i(1413),r=i(15671),n=i(43144),o=i(60136),l=i(29388),s=i(51554),c=i(14387),d=(0,s.GH)(function(e){(0,o.Z)(i,e);var a=(0,l.Z)(i);function i(){var e;return(0,r.Z)(this,i),(e=a.call(this)).__registerHost(),e.__attachShadow(),e.inline=!1,e.label=void 0,e.scale="m",e.type=void 0,e.value=0,e.text="",e}return(0,n.Z)(i,[{key:"render",value:function(){var e=this.el,a=this.inline,i=this.label,r=this.scale,n=this.text,o=this.type,l=this.value,d=e.id||(0,c.g)(),m=a?this.getInlineSize(r):this.getSize(r),f=.45*m,v="0 0 ".concat(m," ").concat(m),u="determinate"===o,h=2*f*Math.PI,g=l/100*h,k=h-g,_=Math.floor(l),z={"aria-valuenow":_,"aria-valuemin":0,"aria-valuemax":100,complete:100===_},p={r:f,cx:m/2,cy:m/2},y={"stroke-dasharray":"".concat(g," ").concat(k)};return(0,s.h)(s.AA,(0,t.Z)({"aria-label":i,id:d,role:"progressbar"},u?z:{}),(0,s.h)("div",{class:"loader__svgs"},(0,s.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--1",viewBox:v},(0,s.h)("circle",(0,t.Z)({},p))),(0,s.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--2",viewBox:v},(0,s.h)("circle",(0,t.Z)({},p))),(0,s.h)("svg",(0,t.Z)({"aria-hidden":"true",class:"loader__svg loader__svg--3",viewBox:v},u?{style:y}:{}),(0,s.h)("circle",(0,t.Z)({},p)))),n&&(0,s.h)("div",{class:"loader__text"},n),u&&(0,s.h)("div",{class:"loader__percentage"},l))}},{key:"getSize",value:function(e){return{s:32,m:56,l:80}[e]}},{key:"getInlineSize",value:function(e){return{s:12,m:16,l:20}[e]}},{key:"el",get:function(){return this}}],[{key:"style",get:function(){return'@charset "UTF-8";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem)}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-ui-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}@supports (display: grid){.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}}:host([type=determinate]){animation:none;stroke:var(--calcite-ui-border-3)}:host([type=determinate]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-ui-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}'}}]),i}(s.mv),[1,"calcite-loader",{inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1]}]);function m(){if("undefined"!==typeof customElements){["calcite-loader"].forEach((function(e){if("calcite-loader"===e)customElements.get(e)||customElements.define(e,d)}))}}m()}}]);
//# sourceMappingURL=2382.eb1483e6.chunk.js.map