(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=window,W=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),K=new WeakMap;let rt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(W&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=K.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&K.set(e,t))}return t}toString(){return this.cssText}};const nt=r=>new rt(typeof r=="string"?r:r+"",void 0,V),q=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new rt(e,r,V)},vt=(r,t)=>{W?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=U.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},Z=W?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return nt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var R;const H=window,J=H.trustedTypes,mt=J?J.emptyScript:"",F=H.reactiveElementPolyfillSupport,B={toAttribute(r,t){switch(t){case Boolean:r=r?mt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ot=(r,t)=>t!==r&&(t==t||r==r),M={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:ot};let f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=M){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||M}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Z(s))}else t!==void 0&&e.push(Z(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return vt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=M){var s;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:B).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(n!==void 0&&this._$El!==n){const o=s.getPropertyOptions(n),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:B;this._$El=n,this[n]=c.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ot)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},F==null||F({ReactiveElement:f}),((R=H.reactiveElementVersions)!==null&&R!==void 0?R:H.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var D;const N=window,y=N.trustedTypes,G=y?y.createPolicy("lit-html",{createHTML:r=>r}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,lt="?"+m,$t=`<${lt}>`,A=document,w=(r="")=>A.createComment(r),x=r=>r===null||typeof r!="object"&&typeof r!="function",ht=Array.isArray,ft=r=>ht(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,X=/>/g,$=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,tt=/"/g,at=/^(?:script|style|textarea|title)$/i,gt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),ct=gt(1),b=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),et=new WeakMap,g=A.createTreeWalker(A,129,null,!1),_t=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":"",o=S;for(let l=0;l<e;l++){const h=r[l];let v,a,d=-1,p=0;for(;p<h.length&&(o.lastIndex=p,a=o.exec(h),a!==null);)p=o.lastIndex,o===S?a[1]==="!--"?o=Q:a[1]!==void 0?o=X:a[2]!==void 0?(at.test(a[2])&&(s=RegExp("</"+a[2],"g")),o=$):a[3]!==void 0&&(o=$):o===$?a[0]===">"?(o=s??S,d=-1):a[1]===void 0?d=-2:(d=o.lastIndex-a[2].length,v=a[1],o=a[3]===void 0?$:a[3]==='"'?tt:Y):o===tt||o===Y?o=$:o===Q||o===X?o=S:(o=$,s=void 0);const P=o===$&&r[l+1].startsWith("/>")?" ":"";n+=o===S?h+$t:d>=0?(i.push(v),h.slice(0,d)+"$lit$"+h.slice(d)+m+P):h+m+(d===-2?(i.push(void 0),l):P)}const c=n+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[G!==void 0?G.createHTML(c):c,i]};class C{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const c=t.length-1,l=this.parts,[h,v]=_t(t,e);if(this.el=C.createElement(h,i),g.currentNode=this.el.content,e===2){const a=this.el.content,d=a.firstChild;d.remove(),a.append(...d.childNodes)}for(;(s=g.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const a=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(m)){const p=v[o++];if(a.push(d),p!==void 0){const P=s.getAttribute(p.toLowerCase()+"$lit$").split(m),O=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:O[2],strings:P,ctor:O[1]==="."?At:O[1]==="?"?Et:O[1]==="@"?St:k})}else l.push({type:6,index:n})}for(const d of a)s.removeAttribute(d)}if(at.test(s.tagName)){const a=s.textContent.split(m),d=a.length-1;if(d>0){s.textContent=y?y.emptyScript:"";for(let p=0;p<d;p++)s.append(a[p],w()),g.nextNode(),l.push({type:2,index:++n});s.append(a[d],w())}}}else if(s.nodeType===8)if(s.data===lt)l.push({type:2,index:n});else{let a=-1;for(;(a=s.data.indexOf(m,a+1))!==-1;)l.push({type:7,index:n}),a+=m.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function E(r,t,e=r,i){var s,n,o,c;if(t===b)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const h=x(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),h===void 0?l=void 0:(l=new h(r),l._$AT(r,e,i)),i!==void 0?((o=(c=e)._$Co)!==null&&o!==void 0?o:c._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=E(r,l._$AS(r,t.values),l,i)),t}class yt{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:A).importNode(i,!0);g.currentNode=n;let o=g.nextNode(),c=0,l=0,h=s[0];for(;h!==void 0;){if(c===h.index){let v;h.type===2?v=new T(o,o.nextSibling,this,t):h.type===1?v=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(v=new wt(o,this,t)),this.u.push(v),h=s[++l]}c!==(h==null?void 0:h.index)&&(o=g.nextNode(),c++)}return n}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class T{constructor(t,e,i,s){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),x(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==b&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ft(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==u&&x(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=C.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(i);else{const o=new yt(n,this),c=o.v(this.options);o.p(i),this.T(c),this._$AH=o}}_$AC(t){let e=et.get(t.strings);return e===void 0&&et.set(t.strings,e=new C(t)),e}k(t){ht(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new T(this.O(w()),this.O(w()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class k{constructor(t,e,i,s,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(n===void 0)t=E(this,t,e,0),o=!x(t)||t!==this._$AH&&t!==b,o&&(this._$AH=t);else{const c=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=E(this,c[i+l],e,l),h===b&&(h=this._$AH[l]),o||(o=!x(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class At extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const bt=y?y.emptyScript:"";class Et extends k{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,bt):this.element.removeAttribute(this.name)}}class St extends k{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=E(this,t,e,0))!==null&&i!==void 0?i:u)===b)return;const s=this._$AH,n=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==u&&(s===u||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class wt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const it=N.litHtmlPolyfillSupport;it==null||it(C,T),((D=N.litHtmlVersions)!==null&&D!==void 0?D:N.litHtmlVersions=[]).push("2.6.1");const xt=(r,t,e)=>{var i,s;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=n._$litPart$;if(o===void 0){const c=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=o=new T(t.insertBefore(w(),c),c,void 0,e??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z,I;class _ extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return b}}_.finalized=!0,_._$litElement$=!0,(z=globalThis.litElementHydrateSupport)===null||z===void 0||z.call(globalThis,{LitElement:_});const st=globalThis.litElementPolyfillSupport;st==null||st({LitElement:_});((I=globalThis.litElementVersions)!==null&&I!==void 0?I:globalThis.litElementVersions=[]).push("3.2.2");const Ct=r=>q`
  ${nt(r)} {
    font-family: 'Roboto Mono', monospace;
  }

  ::selection {
    background: var(--highlight-color);
  }
`;class dt extends _{constructor(){super(),addEventListener("resize",()=>{this.requestUpdate()})}render(){return ct`
      <div class="container">
        <header class="header">
          
          <section aria-label="title" class="title">
            <img class="logo" src="/cedh-tournament-haarlem/logo.png" />
            cEDH Tournament
          </section>

          <ul class="navbar">
            <li><a href="#rules">Rules</a></li>
            <li><a href="#signup">Signup</a></li>
            <li><a href="#where">Where</a></li>
            <theme-toggle></theme-toggle>
          </ul>
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
    `}}dt.styles=[Ct("::host"),q`
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

      :host ul.navbar li + li {
        border-left: solid var(--secondary-light-color) 1px;
        padding-left: 10px;
        margin-left: 10px;
      }

      :host footer ul.navbar li + li {
        border-left: solid var(--text-color) 1px;
      }

      :host footer {
        width: 100%;
        margin-top: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--primary-color);
        padding: 1em 0;
      }

      .title {
        padding-left: 1em;
      }

      header .navbar {
        padding-right: 1em !important;
      }

      header section {
        display: flex;
        align-items: end;
      }

      header .logo {
        width: 25px;
        height: 25px;
        padding-right: 5px
      }

      .disclaimer {
        font-size: 8px;
        text-align: center;
        margin-top: 10px;
      }

      :host a {
        color: var(--text-color);
        text-decoration: none;
      }

      :host a:hover {
        text-decoration: underline;
      }
    `];window.customElements.define("base-layout",dt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function Pt(r){return(t,e)=>e!==void 0?((i,s,n)=>{s.constructor.createProperty(n,i)})(r,t,e):Tt(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(r){return Pt({...r,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j;((j=window.HTMLSlotElement)===null||j===void 0?void 0:j.prototype.assignedElements)!=null;var Ot=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,pt=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ut(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Ot(t,e,s),s};class L extends _{constructor(){super(),this.prefersDarkScheme=window.matchMedia("(prefers-color-scheme: dark)").matches,this.currentTheme=this.getDefaultTheme()}getIconURL(){return`/cedh-tournament-haarlem/assets/${this.isDark()?"light":"dark"}-theme-icon.svg`}getDefaultTheme(){const t=localStorage.getItem("cedh-tournament-theme");return t||(this.prefersDarkScheme?"dark":"light")}isDark(){return this.currentTheme==="dark"}isLight(){return this.currentTheme==="light"}applyTheme(){localStorage.setItem("cedh-tournament-theme",this.currentTheme),this.prefersDarkScheme?(this.isDark()&&document.body.classList.remove("light-theme"),this.isLight()&&document.body.classList.add("light-theme")):(this.isDark()&&document.body.classList.add("dark-theme"),this.isLight()&&document.body.classList.remove("dark-theme"))}toggleTheme(){this.currentTheme=this.isDark()?"light":"dark",this.applyTheme()}render(){return ct`<img src="${this.getIconURL()}" @click=${this.toggleTheme} alt="Use ${this.currentTheme} theme" />`}}L.styles=q`
    :host img {
      cursor: pointer;
      width: 18px;
      align-items: center;
      position: relative;
      top: 2px;
    }
  `;pt([ut()],L.prototype,"currentTheme",2);pt([ut()],L.prototype,"prefersDarkScheme",2);window.customElements.define("theme-toggle",L);
