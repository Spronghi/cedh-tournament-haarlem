(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=window,V=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),Z=new WeakMap;let ne=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(V&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Z.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Z.set(t,e))}return e}toString(){return this.cssText}};const oe=r=>new ne(typeof r=="string"?r:r+"",void 0,q),K=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new ne(t,r,q)},me=(r,e)=>{V?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=U.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)})},J=V?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return oe(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var M;const N=window,F=N.trustedTypes,ve=F?F.emptyScript:"",G=N.reactiveElementPolyfillSupport,W={toAttribute(r,e){switch(e){case Boolean:r=r?ve:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},le=(r,e)=>e!==r&&(e==e||r==r),D={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:le};let $=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=D){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const n=this[e];this[t]=s,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||D}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(J(s))}else e!==void 0&&t.push(J(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return me(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=D){var s;const n=this.constructor._$Ep(e,i);if(n!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:W).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,n=s._$Ev.get(e);if(n!==void 0&&this._$El!==n){const o=s.getPropertyOptions(n),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:W;this._$El=n,this[n]=d.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||le)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},G==null||G({ReactiveElement:$}),((M=N.reactiveElementVersions)!==null&&M!==void 0?M:N.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;const k=window,y=k.trustedTypes,Q=y?y.createPolicy("lit-html",{createHTML:r=>r}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,he="?"+v,fe=`<${he}>`,A=document,w=(r="")=>A.createComment(r),x=r=>r===null||typeof r!="object"&&typeof r!="function",ae=Array.isArray,$e=r=>ae(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,Y=/>/g,f=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,te=/"/g,de=/^(?:script|style|textarea|title)$/i,ge=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),H=ge(1),b=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ie=new WeakMap,g=A.createTreeWalker(A,129,null,!1),_e=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":"",o=S;for(let l=0;l<t;l++){const h=r[l];let m,a,c=-1,p=0;for(;p<h.length&&(o.lastIndex=p,a=o.exec(h),a!==null);)p=o.lastIndex,o===S?a[1]==="!--"?o=X:a[1]!==void 0?o=Y:a[2]!==void 0?(de.test(a[2])&&(s=RegExp("</"+a[2],"g")),o=f):a[3]!==void 0&&(o=f):o===f?a[0]===">"?(o=s??S,c=-1):a[1]===void 0?c=-2:(c=o.lastIndex-a[2].length,m=a[1],o=a[3]===void 0?f:a[3]==='"'?te:ee):o===te||o===ee?o=f:o===X||o===Y?o=S:(o=f,s=void 0);const P=o===f&&r[l+1].startsWith("/>")?" ":"";n+=o===S?h+fe:c>=0?(i.push(m),h.slice(0,c)+"$lit$"+h.slice(c)+v+P):h+v+(c===-2?(i.push(void 0),l):P)}const d=n+(r[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Q!==void 0?Q.createHTML(d):d,i]};class C{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const d=e.length-1,l=this.parts,[h,m]=_e(e,t);if(this.el=C.createElement(h,i),g.currentNode=this.el.content,t===2){const a=this.el.content,c=a.firstChild;c.remove(),a.append(...c.childNodes)}for(;(s=g.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const a=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(v)){const p=m[o++];if(a.push(c),p!==void 0){const P=s.getAttribute(p.toLowerCase()+"$lit$").split(v),O=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:O[2],strings:P,ctor:O[1]==="."?Ae:O[1]==="?"?Ee:O[1]==="@"?Se:L})}else l.push({type:6,index:n})}for(const c of a)s.removeAttribute(c)}if(de.test(s.tagName)){const a=s.textContent.split(v),c=a.length-1;if(c>0){s.textContent=y?y.emptyScript:"";for(let p=0;p<c;p++)s.append(a[p],w()),g.nextNode(),l.push({type:2,index:++n});s.append(a[c],w())}}}else if(s.nodeType===8)if(s.data===he)l.push({type:2,index:n});else{let a=-1;for(;(a=s.data.indexOf(v,a+1))!==-1;)l.push({type:7,index:n}),a+=v.length-1}n++}}static createElement(e,t){const i=A.createElement("template");return i.innerHTML=e,i}}function E(r,e,t=r,i){var s,n,o,d;if(e===b)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=x(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),h===void 0?l=void 0:(l=new h(r),l._$AT(r,t,i)),i!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=E(r,l._$AS(r,e.values),l,i)),e}class ye{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:A).importNode(i,!0);g.currentNode=n;let o=g.nextNode(),d=0,l=0,h=s[0];for(;h!==void 0;){if(d===h.index){let m;h.type===2?m=new T(o,o.nextSibling,this,e):h.type===1?m=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(m=new we(o,this,e)),this.u.push(m),h=s[++l]}d!==(h==null?void 0:h.index)&&(o=g.nextNode(),d++)}return n}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class T{constructor(e,t,i,s){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),x(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==b&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):$e(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==u&&x(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=C.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.p(i);else{const o=new ye(n,this),d=o.v(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(e){let t=ie.get(e.strings);return t===void 0&&ie.set(e.strings,t=new C(e)),t}k(e){ae(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new T(this.O(w()),this.O(w()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class L{constructor(e,t,i,s,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=E(this,e,t,0),o=!x(e)||e!==this._$AH&&e!==b,o&&(this._$AH=e);else{const d=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=E(this,d[i+l],t,l),h===b&&(h=this._$AH[l]),o||(o=!x(h)||h!==this._$AH[l]),h===u?e=u:e!==u&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ae extends L{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}const be=y?y.emptyScript:"";class Ee extends L{constructor(){super(...arguments),this.type=4}j(e){e&&e!==u?this.element.setAttribute(this.name,be):this.element.removeAttribute(this.name)}}class Se extends L{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=E(this,e,t,0))!==null&&i!==void 0?i:u)===b)return;const s=this._$AH,n=e===u&&s!==u||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==u&&(s===u||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class we{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const se=k.litHtmlPolyfillSupport;se==null||se(C,T),((z=k.litHtmlVersions)!==null&&z!==void 0?z:k.litHtmlVersions=[]).push("2.6.1");const xe=(r,e,t)=>{var i,s;const n=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=n._$litPart$;if(o===void 0){const d=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=o=new T(e.insertBefore(w(),d),d,void 0,t??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I,j;class _ extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return b}}_.finalized=!0,_._$litElement$=!0,(I=globalThis.litElementHydrateSupport)===null||I===void 0||I.call(globalThis,{LitElement:_});const re=globalThis.litElementPolyfillSupport;re==null||re({LitElement:_});((j=globalThis.litElementVersions)!==null&&j!==void 0?j:globalThis.litElementVersions=[]).push("3.2.2");const Ce=r=>K`
  ${oe(r)} {
    font-family: 'Roboto Mono', monospace;
  }

  ::selection {
    background: var(--highlight-color);
  }
`;class ce extends _{constructor(){super(),addEventListener("resize",()=>{this.requestUpdate()})}themeToggle(){return window.innerWidth<=600?H``:H`<theme-toggle></theme-toggle>`}render(){return H`
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
            ${this.themeToggle()}
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
    `}}ce.styles=[Ce("::host"),K`
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

      @media(max-width: 600px){
        header {
          flex-direction: column;
        }

        .title {
          padding-left: 0;
          margin-bottom: 10px
        }
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
    `];window.customElements.define("base-layout",ce);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}};function Pe(r){return(e,t)=>t!==void 0?((i,s,n)=>{s.constructor.createProperty(n,i)})(r,e,t):Te(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(r){return Pe({...r,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B;((B=window.HTMLSlotElement)===null||B===void 0?void 0:B.prototype.assignedElements)!=null;var Oe=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,pe=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ue(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Oe(e,t,s),s};class R extends _{constructor(){super(),this.prefersDarkScheme=window.matchMedia("(prefers-color-scheme: dark)").matches,this.currentTheme=this.getDefaultTheme()}getIconURL(){return`/cedh-tournament-haarlem/assets/${this.isDark()?"light":"dark"}-theme-icon.svg`}getDefaultTheme(){const e=localStorage.getItem("cedh-tournament-theme");return e||(this.prefersDarkScheme?"dark":"light")}isDark(){return this.currentTheme==="dark"}isLight(){return this.currentTheme==="light"}applyTheme(){localStorage.setItem("cedh-tournament-theme",this.currentTheme),this.prefersDarkScheme?(this.isDark()&&document.body.classList.remove("light-theme"),this.isLight()&&document.body.classList.add("light-theme")):(this.isDark()&&document.body.classList.add("dark-theme"),this.isLight()&&document.body.classList.remove("dark-theme"))}toggleTheme(){this.currentTheme=this.isDark()?"light":"dark",this.applyTheme()}render(){return H`<img src="${this.getIconURL()}" @click=${this.toggleTheme} alt="Use ${this.currentTheme} theme" />`}}R.styles=K`
    :host img {
      cursor: pointer;
      width: 18px;
      align-items: center;
      position: relative;
      top: 2px;
    }
  `;pe([ue()],R.prototype,"currentTheme",2);pe([ue()],R.prototype,"prefersDarkScheme",2);window.customElements.define("theme-toggle",R);
