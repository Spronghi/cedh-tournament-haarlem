(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=window,Z=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),Y=new WeakMap;let ct=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Z&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Y.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Y.set(e,t))}return t}toString(){return this.cssText}};const dt=r=>new ct(typeof r=="string"?r:r+"",void 0,G),J=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new ct(e,r,G)},$t=(r,t)=>{Z?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=N.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},Q=Z?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return dt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var R;const H=window,tt=H.trustedTypes,mt=tt?tt.emptyScript:"",et=H.reactiveElementPolyfillSupport,V={toAttribute(r,t){switch(t){case Boolean:r=r?mt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ut=(r,t)=>t!==r&&(t==t||r==r),I={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:ut};let _=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=I){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||I}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Q(s))}else t!==void 0&&e.push(Q(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return $t(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=I){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:V).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const n=s.getPropertyOptions(o),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:V;this._$El=o,this[o]=c.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ut)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},et==null||et({ReactiveElement:_}),((R=H.reactiveElementVersions)!==null&&R!==void 0?R:H.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;const D=window,b=D.trustedTypes,it=b?b.createPolicy("lit-html",{createHTML:r=>r}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,pt="?"+v,_t=`<${pt}>`,E=document,S=(r="")=>E.createComment(r),C=r=>r===null||typeof r!="object"&&typeof r!="function",gt=Array.isArray,yt=r=>gt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,rt=/>/g,f=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,nt=/"/g,vt=/^(?:script|style|textarea|title)$/i,At=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),$=At(1),m=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),lt=new WeakMap,y=E.createTreeWalker(E,129,null,!1),bt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=x;for(let l=0;l<e;l++){const h=r[l];let g,a,d=-1,p=0;for(;p<h.length&&(n.lastIndex=p,a=n.exec(h),a!==null);)p=n.lastIndex,n===x?a[1]==="!--"?n=st:a[1]!==void 0?n=rt:a[2]!==void 0?(vt.test(a[2])&&(s=RegExp("</"+a[2],"g")),n=f):a[3]!==void 0&&(n=f):n===f?a[0]===">"?(n=s??x,d=-1):a[1]===void 0?d=-2:(d=n.lastIndex-a[2].length,g=a[1],n=a[3]===void 0?f:a[3]==='"'?nt:ot):n===nt||n===ot?n=f:n===st||n===rt?n=x:(n=f,s=void 0);const O=n===f&&r[l+1].startsWith("/>")?" ":"";o+=n===x?h+_t:d>=0?(i.push(g),h.slice(0,d)+"$lit$"+h.slice(d)+v+O):h+v+(d===-2?(i.push(void 0),l):O)}const c=o+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[it!==void 0?it.createHTML(c):c,i]};class T{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const c=t.length-1,l=this.parts,[h,g]=bt(t,e);if(this.el=T.createElement(h,i),y.currentNode=this.el.content,e===2){const a=this.el.content,d=a.firstChild;d.remove(),a.append(...d.childNodes)}for(;(s=y.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const a=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(v)){const p=g[n++];if(a.push(d),p!==void 0){const O=s.getAttribute(p.toLowerCase()+"$lit$").split(v),U=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:U[2],strings:O,ctor:U[1]==="."?wt:U[1]==="?"?St:U[1]==="@"?Ct:L})}else l.push({type:6,index:o})}for(const d of a)s.removeAttribute(d)}if(vt.test(s.tagName)){const a=s.textContent.split(v),d=a.length-1;if(d>0){s.textContent=b?b.emptyScript:"";for(let p=0;p<d;p++)s.append(a[p],S()),y.nextNode(),l.push({type:2,index:++o});s.append(a[d],S())}}}else if(s.nodeType===8)if(s.data===pt)l.push({type:2,index:o});else{let a=-1;for(;(a=s.data.indexOf(v,a+1))!==-1;)l.push({type:7,index:o}),a+=v.length-1}o++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function w(r,t,e=r,i){var s,o,n,c;if(t===m)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const h=C(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),h===void 0?l=void 0:(l=new h(r),l._$AT(r,e,i)),i!==void 0?((n=(c=e)._$Co)!==null&&n!==void 0?n:c._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=w(r,l._$AS(r,t.values),l,i)),t}class Et{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:E).importNode(i,!0);y.currentNode=o;let n=y.nextNode(),c=0,l=0,h=s[0];for(;h!==void 0;){if(c===h.index){let g;h.type===2?g=new P(n,n.nextSibling,this,t):h.type===1?g=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(g=new Tt(n,this,t)),this.u.push(g),h=s[++l]}c!==(h==null?void 0:h.index)&&(n=y.nextNode(),c++)}return o}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class P{constructor(t,e,i,s){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),C(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==m&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):yt(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==u&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=T.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.p(i);else{const n=new Et(o,this),c=n.v(this.options);n.p(i),this.T(c),this._$AH=n}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new T(t)),e}k(t){gt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new P(this.O(S()),this.O(S()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class L{constructor(t,e,i,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=w(this,t,e,0),n=!C(t)||t!==this._$AH&&t!==m,n&&(this._$AH=t);else{const c=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=w(this,c[i+l],e,l),h===m&&(h=this._$AH[l]),n||(n=!C(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+o[l+1]),this._$AH[l]=h}n&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class wt extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const xt=b?b.emptyScript:"";class St extends L{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,xt):this.element.removeAttribute(this.name)}}class Ct extends L{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=w(this,t,e,0))!==null&&i!==void 0?i:u)===m)return;const s=this._$AH,o=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==u&&(s===u||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const ht=D.litHtmlPolyfillSupport;ht==null||ht(T,P),((z=D.litHtmlVersions)!==null&&z!==void 0?z:D.litHtmlVersions=[]).push("2.6.1");const Pt=(r,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=o._$litPart$;if(n===void 0){const c=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=n=new P(t.insertBefore(S(),c),c,void 0,e??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B,j;class A extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return m}}A.finalized=!0,A._$litElement$=!0,(B=globalThis.litElementHydrateSupport)===null||B===void 0||B.call(globalThis,{LitElement:A});const at=globalThis.litElementPolyfillSupport;at==null||at({LitElement:A});((j=globalThis.litElementVersions)!==null&&j!==void 0?j:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function Ut(r){return(t,e)=>e!==void 0?((i,s,o)=>{s.constructor.createProperty(o,i)})(r,t,e):Ot(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(r){return Ut({...r,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W;((W=window.HTMLSlotElement)===null||W===void 0?void 0:W.prototype.assignedElements)!=null;const kt=J`
  :host theme-toggle {
    margin-left: 1em
  }

  :host .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-width: fit-content;
    margin: 1em 0;
  }

  :host ul.navbar {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  :host ul.navbar li {
    min-width: max-content;
  }

  :host footer a {
    color: white;
  }

  :host ul.navbar li + li {
    border-left: solid var(--text-color) 1px;
    padding-left: 10px;
    margin-left: 10px;
  }

  :host footer ul.navbar li + li {
    border-left: solid var(white) 1px;
  }

  :host footer {
    width: 100%;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background-color: var(--primary-color);
    padding: 1em 0;
  }

  :host .title {
    padding-left: 1em;
  }

  :host header .navbar {
    padding-right: 1em !important;
  }

  :host header section {
    display: flex;
    align-items: end;
  }

  :host header .logo {
    width: 25px;
    height: 25px;
    padding-right: 5px
  }

  :host .vertical-navbar {
    position: fixed;
    color: white;
    background-color: var(--primary-color);
    right: 0px;
    padding: 2em 5em;
    margin: 0px;
    top: 0px;
    list-style: none;
    height: 100%;
  }
 
  :host .vertical-navbar theme-toggle {
    position: fixed;
    bottom: 1em;
  }

  :host .vertical-navbar li {
    padding: 1em 0;
  }

  :host .vertical-navbar a {
    color: white;
    font-size: 18px;
  }

  :host .burger-icon {
    position: fixed;
    top: 20px;
    right: 5px;
    padding-right: 1em;
    cursor: pointer;
    z-index: 2;
  }

  :host .x-icon {
    font-size: 25px;
    font-weight: bold;
    position: relative;
    right: 8px;
    bottom: 5px;
    z-index: 3;
  }

  :host .x-icon {
    color: white;
  }

  :host .burger-icon rect {
    stroke: var(--text-color);
  }

  :host .disclaimer {
    font-size: 8px;
    text-align: center;
    margin-top: 10px;
    padding: 0 3em;
  }

  :host a {
    color: var(--text-color);
    text-decoration: none;
  }

  :host a:hover {
    text-decoration: underline;
}
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ht=r=>(...t)=>({_$litDirective$:r,values:t});class Dt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class q extends Dt{constructor(t){if(super(t),this.it=u,t.type!==Nt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this._t=void 0,this.it=t;if(t===m)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}q.directiveName="unsafeHTML",q.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class K extends q{}K.directiveName="unsafeSVG",K.resultType=2;const Lt=Ht(K),k=Lt(`
<svg width="30px" height="30px" fill="#000000" stroke="#000000" viewBox="0 0 12.020 12.00" enable-background="new 0 0 12 12" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g stroke-width="0"></g>
  <g stroke-linecap="round" stroke-linejoin="round"></g>
  <g >
    <g>
      <rect fill="#1D1D1B" height="0.1" width="13" x="0.5" y="5.5"></rect>
      <rect fill="#1D1D1B" height="0.1" width="13" x="0.5" y="2.5"></rect>
      <rect fill="#1D1D1B" height="0.1" width="13" x="0.5" y="8.5"></rect>
    </g>
  </g>
</svg>
`),Mt=r=>J`
  ${dt(r)} {
    font-family: 'Roboto Mono', monospace;
  }

  ::selection {
    background: var(--highlight-color);
  }
`;var Rt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,zt=(r,t,e,i)=>{for(var s=i>1?void 0:i?It(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Rt(t,e,s),s};class X extends A{constructor(){super(),this.burgerIcon=k,addEventListener("resize",()=>{this.requestUpdate()})}burgerIconClick(){const t=this.burgerIcon===k;this.burgerIcon=t?$`<span class="x-icon">X</span>`:k}rightMenu(){return this.burgerIcon===k?$``:$`
      <ul class="vertical-navbar" @click="${this.burgerIconClick}">
        <li><a href="#">Home</a></li>
        <li><a href="#rules">Rules</a></li>
        <li><a href="#signup">Signup</a></li>
        <li><a href="#where">Where</a></li>
        <theme-toggle></theme-toggle>
      </ul>
    `}linkSection(){const t=$`
      <ul class="navbar">
        <li><a href="#">Home</a></li>
        <li><a href="#rules">Rules</a></li>
        <li><a href="#signup">Signup</a></li>
        <li><a href="#where">Where</a></li>
        <theme-toggle></theme-toggle>
      </ul>
    `;return window.innerWidth>768?t:$`<div class="burger-icon" @click=${this.burgerIconClick}>${this.burgerIcon}</div>`}render(){return $`
      <div class="container">
        <header class="header">
          
          <section aria-label="title" class="title">
            <img class="logo" src="/cedh-tournament-haarlem/logo.png" />
            cEDH Tournament
          </section>

          ${this.linkSection()}
          ${this.rightMenu()}
        </header>

        <main>
          <slot></slot>
        </main>
        
        <footer>
          <ul class="navbar">
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#something">Something</a></li>
            <li><a href="#something-else">Something Else</a></li>
          </ul>

          <section section="disclaimer" class="disclaimer">
            The information presented on this site about Magic: The Gathering, both literal and graphical, is copyrighted by Wizards of the Coast. This website is not produced, endorsed, supported, or affiliated with Wizards of the Coast..
          </section>
        </footer>
      </div>
    `}}X.styles=[Mt("::host"),kt];zt([F()],X.prototype,"burgerIcon",2);window.customElements.define("base-layout",X);var Bt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,ft=(r,t,e,i)=>{for(var s=i>1?void 0:i?jt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Bt(t,e,s),s};class M extends A{constructor(){super(),this.prefersDarkScheme=window.matchMedia("(prefers-color-scheme: dark)").matches,this.currentTheme=this.getDefaultTheme()}getIconURL(){return`/cedh-tournament-haarlem/assets/${this.isDark()?"light":"dark"}-theme-icon.svg`}getDefaultTheme(){const t=localStorage.getItem("cedh-tournament-theme");return t||(this.prefersDarkScheme?"dark":"light")}isDark(){return this.currentTheme==="dark"}isLight(){return this.currentTheme==="light"}applyTheme(){localStorage.setItem("cedh-tournament-theme",this.currentTheme),this.prefersDarkScheme?(this.isDark()&&document.body.classList.remove("light-theme"),this.isLight()&&document.body.classList.add("light-theme")):(this.isDark()&&document.body.classList.add("dark-theme"),this.isLight()&&document.body.classList.remove("dark-theme"))}toggleTheme(){this.currentTheme=this.isDark()?"light":"dark",this.applyTheme()}render(){return $`<img src="${this.getIconURL()}" @click=${this.toggleTheme} alt="Use ${this.currentTheme} theme" />`}}M.styles=J`
    :host img {
      cursor: pointer;
      width: 18px;
      align-items: center;
      position: relative;
      top: 2px;
    }
  `;ft([F()],M.prototype,"currentTheme",2);ft([F()],M.prototype,"prefersDarkScheme",2);window.customElements.define("theme-toggle",M);
