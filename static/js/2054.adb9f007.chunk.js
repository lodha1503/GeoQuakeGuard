/*! For license information please see 2054.adb9f007.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkamit_kumar_rathi=self.webpackChunkamit_kumar_rathi||[]).push([[2054],{85955:function(e,t,n){n.d(t,{H:function(){return b},c:function(){return u},d:function(){return m},f:function(){return f},r:function(){return d},s:function(){return s}});var a=n(92358),i=n(51554);!function(e){function t(e,t,n){throw new e("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+t+".",n)}"function"!=typeof e.requestSubmit&&(e.requestSubmit=function(e){e?(!function(e,n){e instanceof HTMLElement||t(TypeError,"parameter 1 is not of type 'HTMLElement'"),"submit"==e.type||t(TypeError,"The specified element is not a submit button"),e.form==n||t(DOMException,"The specified element is not owned by this form element","NotFoundError")}(e,this),e.click()):((e=document.createElement("input")).type="submit",e.hidden=!0,this.appendChild(e),e.click(),this.removeChild(e))})}(HTMLFormElement.prototype);var r="hidden-form-input";function o(e){return"checked"in e}var l=new WeakMap,c=new WeakSet;function s(e){var t=e.formEl;return!!t&&(t.requestSubmit(),!0)}function d(e){var t;null===(t=e.formEl)||void 0===t||t.reset()}function u(e){var t=e.el,n=e.value,i=f(e);if(i&&!function(e,t){if((0,a.c)(t.parentElement,"[form]"))return!0;var n="calciteInternalFormComponentRegister",i=!1;return e.addEventListener(n,(function(e){i=e.composedPath().some((function(e){return c.has(e)})),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),i}(i,t)){e.formEl=i,e.defaultValue=n,o(e)&&(e.defaultChecked=e.checked);var r=(e.onFormReset||v).bind(e);i.addEventListener("reset",r),l.set(e.el,r),c.add(t)}}function f(e){var t=e.el,n=e.form;return n?(0,a.q)(t,{id:n}):(0,a.c)(t,"form")}function v(){o(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function m(e){var t=e.el,n=e.formEl;if(n){var a=l.get(t);n.removeEventListener("reset",a),l.delete(t),e.formEl=null,c.delete(t)}}var h=function(e){e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},p=function(e){return e.removeEventListener("change",h)};function g(e,t,n){var a,i=e.defaultValue,r=e.disabled,l=e.form,c=e.name,s=e.required;t.defaultValue=i,t.disabled=r,t.name=c,t.required=s,t.tabIndex=-1,l?t.setAttribute("form",l):t.removeAttribute("form"),o(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?n||"on":""):t.value=n||"",null===(a=e.syncHiddenFormInput)||void 0===a||a.call(e,t)}var b=function(e){return function(e){var t=e.el,n=e.formEl,a=e.name,i=e.value,o=t.ownerDocument,l=t.querySelectorAll('input[slot="'.concat(r,'"]'));if(n&&a){var c,s=Array.isArray(i)?i:[i],d=[],u=new Set;l.forEach((function(t){var n=s.find((function(e){return e==t.value}));null!=n?(u.add(n),g(e,t,n)):d.push(t)})),s.forEach((function(t){if(!u.has(t)){var n=d.pop();n||((n=o.createElement("input")).slot=r),c||(c=o.createDocumentFragment()),c.append(n),n.addEventListener("change",h),g(e,n,t)}})),c&&t.append(c),d.forEach((function(e){p(e),e.remove()}))}else l.forEach((function(e){p(e),e.remove()}))}(e.component),(0,i.h)("slot",{name:r})}},14387:function(e,t,n){n.d(t,{g:function(){return a}});var a=function(){return[2,1,1,1,3].map((function(e){for(var t="",n=0;n<e;n++)t+=(65536*(1+Math.random())|0).toString(16).substring(1);return t})).join("-")}},13160:function(e,t,n){n.d(t,{c:function(){return h},d:function(){return p},u:function(){return u}});var a=n(51554);var i=/firefox/i.test(function(){if(!a.Z5.isBrowser)return"";var e=navigator.userAgentData;return null!==e&&void 0!==e&&e.brands?e.brands.map((function(e){var t=e.brand,n=e.version;return"".concat(t,"/").concat(n)})).join(" "):navigator.userAgent}()),r=i?new WeakMap:null;function o(){this.disabled||HTMLElement.prototype.click.call(this)}function l(e){var t=e.target;i&&!r.get(t)||t.disabled&&e.preventDefault()}var c=["mousedown","mouseup","click"];function s(e){i&&!r.get(e.target)||e.target.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}var d={capture:!0};function u(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void f(e);m(e),"function"===typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function f(e){e.el.click=o,function(e){if(!e)return;e.addEventListener("pointerdown",l,d),c.forEach((function(t){return e.addEventListener(t,s,d)}))}(i?v(e):e.el)}function v(e){return r.get(e.el)}function m(e){delete e.el.click,function(e){if(!e)return;e.removeEventListener("pointerdown",l,d),c.forEach((function(t){return e.removeEventListener(t,s,d)}))}(i?v(e):e.el)}function h(e){if(e.disabled&&i){var t=e.el.parentElement||e.el;r.set(e.el,t),f(e)}}function p(e){i&&(r.delete(e.el),m(e))}},74310:function(e,t,n){n.d(t,{c:function(){return m},d:function(){return h},g:function(){return g}});var a=n(92358),i="calciteInternalLabelClick",r="calciteInternalLabelConnected",o="calciteInternalLabelDisconnected",l="calcite-label",c=new WeakMap,s=new WeakMap,d=new WeakMap,u=new WeakMap,f=new WeakSet,v=function(e){var t=e.id,n=t&&(0,a.q)(e,{selector:"".concat(l,'[for="').concat(t,'"]')});if(n)return n;var i=(0,a.c)(e,l);return!i||function(e,t){var n,a="custom-element-ancestor-check",i=function(a){a.stopImmediatePropagation();var i=a.composedPath();n=i.slice(i.indexOf(t),i.indexOf(e))};e.addEventListener(a,i,{once:!0}),t.dispatchEvent(new CustomEvent(a,{composed:!0,bubbles:!0})),e.removeEventListener(a,i);var r=n.filter((function(n){return n!==t&&n!==e})).filter((function(e){var t;return null===(t=e.tagName)||void 0===t?void 0:t.includes("-")}));return r.length>0}(i,e)?null:i};function m(e){var t=v(e.el);if(!(s.has(t)&&t===e.labelEl||!t&&f.has(e))){var n=E.bind(e);if(t){e.labelEl=t;var a=c.get(t)||[];a.push(e),c.set(t,a.sort(p)),s.has(e.labelEl)||(s.set(e.labelEl,b),e.labelEl.addEventListener(i,b)),f.delete(e),document.removeEventListener(r,d.get(e)),u.set(e,n),document.addEventListener(o,n)}else f.has(e)||(n(),document.removeEventListener(o,u.get(e)))}}function h(e){if(f.delete(e),document.removeEventListener(r,d.get(e)),document.removeEventListener(o,u.get(e)),d.delete(e),u.delete(e),e.labelEl){var t=c.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(i,s.get(e.labelEl)),s.delete(e.labelEl)),c.set(e.labelEl,t.filter((function(t){return t!==e})).sort(p)),e.labelEl=null}}function p(e,t){return(0,a.w)(e.el,t.el)?-1:1}function g(e){var t;return e.label||(null===(t=e.labelEl)||void 0===t||null===(t=t.textContent)||void 0===t?void 0:t.trim())||""}function b(e){var t=e.detail.sourceEvent.target,n=c.get(this),a=n.find((function(e){return e.el===t}));if(!n.includes(a)){var i=n[0];i.disabled||i.onLabelClick(e)}}function k(){f.has(this)&&m(this)}function E(){f.add(this);var e=d.get(this)||k.bind(this);d.set(this,e),document.addEventListener(r,e)}},91438:function(e,t,n){n.d(t,{L:function(){return d},d:function(){return u}});var a=n(1413),i=n(15671),r=n(43144),o=n(60136),l=n(29388),c=n(51554),s=n(14387),d=(0,c.GH)(function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,i.Z)(this,n),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.inline=!1,e.label=void 0,e.scale="m",e.type=void 0,e.value=0,e.text="",e}return(0,r.Z)(n,[{key:"render",value:function(){var e=this.el,t=this.inline,n=this.label,i=this.scale,r=this.text,o=this.type,l=this.value,d=e.id||(0,s.g)(),u=t?this.getInlineSize(i):this.getSize(i),f=.45*u,v="0 0 ".concat(u," ").concat(u),m="determinate"===o,h=2*f*Math.PI,p=l/100*h,g=h-p,b=Math.floor(l),k={"aria-valuenow":b,"aria-valuemin":0,"aria-valuemax":100,complete:100===b},E={r:f,cx:u/2,cy:u/2},y={"stroke-dasharray":"".concat(p," ").concat(g)};return(0,c.h)(c.AA,(0,a.Z)({"aria-label":n,id:d,role:"progressbar"},m?k:{}),(0,c.h)("div",{class:"loader__svgs"},(0,c.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--1",viewBox:v},(0,c.h)("circle",(0,a.Z)({},E))),(0,c.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--2",viewBox:v},(0,c.h)("circle",(0,a.Z)({},E))),(0,c.h)("svg",(0,a.Z)({"aria-hidden":"true",class:"loader__svg loader__svg--3",viewBox:v},m?{style:y}:{}),(0,c.h)("circle",(0,a.Z)({},E)))),r&&(0,c.h)("div",{class:"loader__text"},r),m&&(0,c.h)("div",{class:"loader__percentage"},l))}},{key:"getSize",value:function(e){return{s:32,m:56,l:80}[e]}},{key:"getInlineSize",value:function(e){return{s:12,m:16,l:20}[e]}},{key:"el",get:function(){return this}}],[{key:"style",get:function(){return'@charset "UTF-8";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem)}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-ui-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}@supports (display: grid){.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}}:host([type=determinate]){animation:none;stroke:var(--calcite-ui-border-3)}:host([type=determinate]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-ui-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}'}}]),n}(c.mv),[1,"calcite-loader",{inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1]}]);function u(){if("undefined"!==typeof customElements){["calcite-loader"].forEach((function(e){if("calcite-loader"===e)customElements.get(e)||customElements.define(e,d)}))}}u()}}]);
//# sourceMappingURL=2054.adb9f007.chunk.js.map