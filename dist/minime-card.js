function t(t,e,i,n){var r,s=arguments.length,h=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(h=(s<3?r(h):s>3?r(e,i,h):r(e,i))||h);return s>3&&h&&Object.defineProperty(e,i,h),h}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const h=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new s(i,t,n)},o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:a,getOwnPropertyNames:d,getOwnPropertySymbols:g,getPrototypeOf:f}=Object,p=globalThis,y=p.trustedTypes,u=y?y.emptyScript:"",x=p.reactiveElementPolyfillSupport,w=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},m=(t,e)=>!l(t,e),$={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:m};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&c(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:r}=a(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const s=n?.call(this);r?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const t=this.properties,e=[...d(t),...g(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(i)t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of n){const n=document.createElement("style"),r=e.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=i.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=n;const s=r.fromAttribute(e,t.type);this[n]=s??this._$Ej?.get(n)??s,this._$Em=null}}requestUpdate(t,e,i,n=!1,r){if(void 0!==t){const s=this.constructor;if(!1===n&&(r=this[t]),i??=s.getPropertyOptions(t),!((i.hasChanged??m)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:r},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==r||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[w("elementProperties")]=new Map,v[w("finalized")]=new Map,x?.({ReactiveElement:v}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,b=t=>t,E=A.trustedTypes,C=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,B="?"+F,D=`<${B}>`,k=document,P=()=>k.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,N="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,T=/>/g,H=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,z=/"/g,L=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,K=k.createTreeWalker(k,129);function J(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,n=[];let r,s=2===e?"<svg>":3===e?"<math>":"",h=O;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,a=0;for(;a<i.length&&(h.lastIndex=a,l=h.exec(i),null!==l);)a=h.lastIndex,h===O?"!--"===l[1]?h=R:void 0!==l[1]?h=T:void 0!==l[2]?(L.test(l[2])&&(r=RegExp("</"+l[2],"g")),h=H):void 0!==l[3]&&(h=H):h===H?">"===l[0]?(h=r??O,c=-1):void 0===l[1]?c=-2:(c=h.lastIndex-l[2].length,o=l[1],h=void 0===l[3]?H:'"'===l[3]?z:j):h===z||h===j?h=H:h===R||h===T?h=O:(h=H,r=void 0);const d=h===H&&t[e+1].startsWith("/>")?" ":"";s+=h===O?i+D:c>=0?(n.push(o),i.slice(0,c)+S+i.slice(c)+F+d):i+F+(-2===c?e:d)}return[J(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class X{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,s=0;const h=t.length-1,o=this.parts,[l,c]=Z(t,e);if(this.el=X.createElement(l,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=K.nextNode())&&o.length<h;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(S)){const e=c[s++],i=n.getAttribute(t).split(F),h=/([.?@])?(.*)/.exec(e);o.push({type:1,index:r,name:h[2],strings:i,ctor:"."===h[1]?et:"?"===h[1]?it:"@"===h[1]?nt:tt}),n.removeAttribute(t)}else t.startsWith(F)&&(o.push({type:6,index:r}),n.removeAttribute(t));if(L.test(n.tagName)){const t=n.textContent.split(F),e=t.length-1;if(e>0){n.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],P()),K.nextNode(),o.push({type:2,index:++r});n.append(t[e],P())}}}else if(8===n.nodeType)if(n.data===B)o.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf(F,t+1));)o.push({type:7,index:r}),t+=F.length-1}r++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,n){if(e===W)return e;let r=void 0!==n?i._$Co?.[n]:i._$Cl;const s=U(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(t),r._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=r:i._$Cl=r),void 0!==r&&(e=G(t,r._$AS(t,e.values),r,n)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??k).importNode(e,!0);K.currentNode=n;let r=K.nextNode(),s=0,h=0,o=i[0];for(;void 0!==o;){if(s===o.index){let e;2===o.type?e=new Y(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new rt(r,this,t)),this._$AV.push(e),o=i[++h]}s!==o?.index&&(r=K.nextNode(),s++)}return K.currentNode=k,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),U(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new Q(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new X(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new Y(this.O(P()),this.O(P()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=b(t).nextSibling;b(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,n){const r=this.strings;let s=!1;if(void 0===r)t=G(this,t,e,0),s=!U(t)||t!==this._$AH&&t!==W,s&&(this._$AH=t);else{const n=t;let h,o;for(t=r[0],h=0;h<r.length-1;h++)o=G(this,n[i+h],e,h),o===W&&(o=this._$AH[h]),s||=!U(o)||o!==this._$AH[h],o===V?t=V:t!==V&&(t+=(o??"")+r[h+1]),this._$AH[h]=o}s&&!n&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class nt extends tt{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??V)===W)return;const i=this._$AH,n=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==V&&(i===V||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const st=A.litHtmlPolyfillSupport;st?.(X,Y),(A.litHtmlVersions??=[]).push("3.3.2");const ht=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ot=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let r=n._$litPart$;if(void 0===r){const t=i?.renderBefore??null;n._$litPart$=r=new Y(e.insertBefore(P(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};ot._$litElement$=!0,ot.finalized=!0,ht.litElementHydrateSupport?.({LitElement:ot});const lt=ht.litElementPolyfillSupport;lt?.({LitElement:ot}),(ht.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:m},at=(t=ct,e,i)=>{const{kind:n,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,r,t,!0,i)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const r=this[n];e.call(this,i),this.requestUpdate(n,r,t,!0,i)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function dt(t){return function(t){return(e,i)=>"object"==typeof i?at(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=2;class ft{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pt extends ft{constructor(t){if(super(t),this.it=V,t.type!==gt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===V||null==t)return this._t=void 0,this.it=t;if(t===W)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}pt.directiveName="unsafeHTML",pt.resultType=1;const yt=(t=>(...e)=>({_$litDirective$:t,values:e}))(pt),ut={office:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" shape-rendering="crispEdges">\n  \x3c!-- Floor and walls --\x3e\n  <rect x="0" y="0" width="320" height="80" fill="#87CEEB"/>\n  <rect x="0" y="80" width="320" height="120" fill="#8B7355"/>\n\n  \x3c!-- Window with light --\x3e\n  <rect x="240" y="16" width="64" height="48" fill="#FFF8DC"/>\n  <rect x="244" y="20" width="28" height="40" fill="#B0E0E6"/>\n  <rect x="276" y="20" width="28" height="40" fill="#B0E0E6"/>\n  <rect x="270" y="16" width="4" height="48" fill="#654321"/>\n  <rect x="240" y="38" width="64" height="4" fill="#654321"/>\n\n  \x3c!-- Bookshelf --\x3e\n  <rect x="16" y="88" width="48" height="80" fill="#654321"/>\n  <rect x="20" y="92" width="40" height="20" fill="#8B4513"/>\n  <rect x="24" y="96" width="8" height="12" fill="#DC143C"/>\n  <rect x="36" y="96" width="8" height="12" fill="#4169E1"/>\n  <rect x="48" y="96" width="8" height="12" fill="#228B22"/>\n  <rect x="20" y="116" width="40" height="20" fill="#8B4513"/>\n  <rect x="24" y="120" width="8" height="12" fill="#FFD700"/>\n  <rect x="36" y="120" width="8" height="12" fill="#8B4513"/>\n  <rect x="48" y="120" width="8" height="12" fill="#4169E1"/>\n  <rect x="20" y="140" width="40" height="24" fill="#8B4513"/>\n  <rect x="24" y="144" width="8" height="16" fill="#228B22"/>\n  <rect x="36" y="144" width="8" height="16" fill="#DC143C"/>\n  <rect x="48" y="144" width="8" height="16" fill="#4169E1"/>\n\n  \x3c!-- Desk --\x3e\n  <rect x="112" y="112" width="96" height="8" fill="#8B4513"/>\n  <rect x="112" y="120" width="8" height="48" fill="#654321"/>\n  <rect x="200" y="120" width="8" height="48" fill="#654321"/>\n\n  \x3c!-- Monitor on desk --\x3e\n  <rect x="140" y="88" width="48" height="4" fill="#2F4F4F"/>\n  <rect x="144" y="68" width="40" height="20" fill="#000080"/>\n  <rect x="148" y="72" width="32" height="12" fill="#4169E1"/>\n  <rect x="160" y="92" width="8" height="20" fill="#2F4F4F"/>\n\n  \x3c!-- Office chair --\x3e\n  <rect x="224" y="120" width="32" height="8" fill="#4169E1"/>\n  <rect x="232" y="108" width="16" height="12" fill="#4169E1"/>\n  <rect x="236" y="128" width="8" height="24" fill="#696969"/>\n  <rect x="228" y="152" width="8" height="16" fill="#696969"/>\n  <rect x="244" y="152" width="8" height="16" fill="#696969"/>\n</svg>',kitchen:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" shape-rendering="crispEdges">\n  \x3c!-- Floor and walls --\x3e\n  <rect x="0" y="0" width="320" height="80" fill="#F5DEB3"/>\n  <rect x="0" y="80" width="320" height="120" fill="#E8D5B7"/>\n\n  \x3c!-- Window --\x3e\n  <rect x="240" y="16" width="64" height="48" fill="#FFF8DC"/>\n  <rect x="244" y="20" width="28" height="40" fill="#87CEEB"/>\n  <rect x="276" y="20" width="28" height="40" fill="#87CEEB"/>\n  <rect x="270" y="16" width="4" height="48" fill="#8B7355"/>\n  <rect x="240" y="38" width="64" height="4" fill="#8B7355"/>\n\n  \x3c!-- Upper cabinets --\x3e\n  <rect x="16" y="16" width="160" height="48" fill="#90EE90"/>\n  <rect x="20" y="20" width="36" height="40" fill="#98FB98"/>\n  <rect x="24" y="36" width="4" height="8" fill="#DAA520"/>\n  <rect x="60" y="20" width="36" height="40" fill="#98FB98"/>\n  <rect x="64" y="36" width="4" height="8" fill="#DAA520"/>\n  <rect x="100" y="20" width="36" height="40" fill="#98FB98"/>\n  <rect x="104" y="36" width="4" height="8" fill="#DAA520"/>\n  <rect x="140" y="20" width="32" height="40" fill="#98FB98"/>\n  <rect x="144" y="36" width="4" height="8" fill="#DAA520"/>\n\n  \x3c!-- Counter --\x3e\n  <rect x="16" y="96" width="176" height="8" fill="#D3D3D3"/>\n  <rect x="16" y="104" width="176" height="64" fill="#90EE90"/>\n  <rect x="20" y="108" width="40" height="52" fill="#98FB98"/>\n  <rect x="24" y="128" width="4" height="8" fill="#DAA520"/>\n  <rect x="64" y="108" width="40" height="52" fill="#98FB98"/>\n  <rect x="68" y="128" width="4" height="8" fill="#DAA520"/>\n  <rect x="108" y="108" width="40" height="52" fill="#98FB98"/>\n  <rect x="112" y="128" width="4" height="8" fill="#DAA520"/>\n  <rect x="152" y="108" width="36" height="52" fill="#98FB98"/>\n  <rect x="156" y="128" width="4" height="8" fill="#DAA520"/>\n\n  \x3c!-- Stove burners on counter --\x3e\n  <rect x="28" y="88" width="12" height="8" fill="#696969"/>\n  <rect x="48" y="88" width="12" height="8" fill="#696969"/>\n  <rect x="28" y="72" width="12" height="12" fill="#DC143C"/>\n  <rect x="48" y="72" width="12" height="12" fill="#DC143C"/>\n\n  \x3c!-- Sink --\x3e\n  <rect x="120" y="88" width="32" height="8" fill="#C0C0C0"/>\n  <rect x="124" y="84" width="8" height="4" fill="#C0C0C0"/>\n\n  \x3c!-- Fridge --\x3e\n  <rect x="224" y="88" width="64" height="80" fill="#DCDCDC"/>\n  <rect x="228" y="92" width="56" height="36" fill="#F0F0F0"/>\n  <rect x="248" y="108" width="4" height="8" fill="#696969"/>\n  <rect x="228" y="132" width="56" height="32" fill="#F0F0F0"/>\n  <rect x="248" y="144" width="4" height="8" fill="#696969"/>\n</svg>',living_room:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" shape-rendering="crispEdges">\n  \x3c!-- Floor and walls --\x3e\n  <rect x="0" y="0" width="320" height="80" fill="#FFE4B5"/>\n  <rect x="0" y="80" width="320" height="120" fill="#CD853F"/>\n\n  \x3c!-- Window with curtains --\x3e\n  <rect x="240" y="16" width="64" height="64" fill="#FFF8DC"/>\n  <rect x="240" y="20" width="16" height="56" fill="#8B4513"/>\n  <rect x="260" y="20" width="24" height="56" fill="#87CEEB"/>\n  <rect x="288" y="20" width="16" height="56" fill="#8B4513"/>\n\n  \x3c!-- Entertainment center --\x3e\n  <rect x="200" y="88" width="96" height="56" fill="#654321"/>\n  <rect x="204" y="92" width="88" height="24" fill="#000000"/>\n  <rect x="208" y="96" width="80" height="16" fill="#4169E1"/>\n  <rect x="204" y="120" width="28" height="20" fill="#8B4513"/>\n  <rect x="236" y="120" width="28" height="20" fill="#8B4513"/>\n  <rect x="268" y="120" width="24" height="20" fill="#8B4513"/>\n\n  \x3c!-- Coffee table --\x3e\n  <rect x="88" y="120" width="80" height="8" fill="#8B4513"/>\n  <rect x="92" y="128" width="8" height="24" fill="#654321"/>\n  <rect x="156" y="128" width="8" height="24" fill="#654321"/>\n  <rect x="100" y="124" width="56" height="4" fill="#DAA520"/>\n\n  \x3c!-- Couch --\x3e\n  <rect x="16" y="104" width="128" height="16" fill="#8B0000"/>\n  <rect x="16" y="120" width="128" height="32" fill="#DC143C"/>\n  <rect x="16" y="152" width="16" height="16" fill="#8B0000"/>\n  <rect x="128" y="152" width="16" height="16" fill="#8B0000"/>\n  <rect x="20" y="96" width="16" height="8" fill="#DC143C"/>\n  <rect x="44" y="96" width="16" height="8" fill="#DC143C"/>\n  <rect x="68" y="96" width="16" height="8" fill="#DC143C"/>\n  <rect x="92" y="96" width="16" height="8" fill="#DC143C"/>\n  <rect x="116" y="96" width="16" height="8" fill="#DC143C"/>\n\n  \x3c!-- Floor lamp --\x3e\n  <rect x="176" y="88" width="8" height="64" fill="#DAA520"/>\n  <rect x="172" y="84" width="16" height="4" fill="#FFD700"/>\n  <rect x="168" y="76" width="24" height="8" fill="#FFA500"/>\n  <rect x="172" y="152" width="8" height="16" fill="#654321"/>\n</svg>',bedroom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" shape-rendering="crispEdges">\n  \x3c!-- Floor and walls --\x3e\n  <rect x="0" y="0" width="320" height="80" fill="#E6E6FA"/>\n  <rect x="0" y="80" width="320" height="120" fill="#9370DB"/>\n\n  \x3c!-- Window with curtains --\x3e\n  <rect x="240" y="16" width="64" height="64" fill="#FFF8DC"/>\n  <rect x="240" y="20" width="16" height="56" fill="#4B0082"/>\n  <rect x="260" y="20" width="24" height="56" fill="#B0C4DE"/>\n  <rect x="288" y="20" width="16" height="56" fill="#4B0082"/>\n\n  \x3c!-- Bed --\x3e\n  <rect x="16" y="104" width="128" height="16" fill="#4B0082"/>\n  <rect x="16" y="120" width="128" height="40" fill="#6A5ACD"/>\n  <rect x="24" y="92" width="16" height="12" fill="#F0E68C"/>\n  <rect x="48" y="92" width="16" height="12" fill="#F0E68C"/>\n  <rect x="72" y="92" width="16" height="12" fill="#F0E68C"/>\n  <rect x="96" y="92" width="16" height="12" fill="#F0E68C"/>\n  <rect x="120" y="92" width="16" height="12" fill="#F0E68C"/>\n  <rect x="16" y="160" width="16" height="8" fill="#4B0082"/>\n  <rect x="128" y="160" width="16" height="8" fill="#4B0082"/>\n\n  \x3c!-- Nightstand with lamp --\x3e\n  <rect x="160" y="120" width="32" height="40" fill="#654321"/>\n  <rect x="164" y="124" width="24" height="12" fill="#8B4513"/>\n  <rect x="172" y="128" width="2" height="4" fill="#DAA520"/>\n  <rect x="164" y="140" width="24" height="16" fill="#8B4513"/>\n  <rect x="172" y="148" width="2" height="4" fill="#DAA520"/>\n  <rect x="172" y="108" width="8" height="12" fill="#DAA520"/>\n  <rect x="168" y="104" width="16" height="4" fill="#FFD700"/>\n  <rect x="164" y="96" width="24" height="8" fill="#FFA500"/>\n\n  \x3c!-- Dresser --\x3e\n  <rect x="208" y="96" width="80" height="64" fill="#654321"/>\n  <rect x="212" y="100" width="72" height="20" fill="#8B4513"/>\n  <rect x="240" y="108" width="4" height="4" fill="#DAA520"/>\n  <rect x="256" y="108" width="4" height="4" fill="#DAA520"/>\n  <rect x="212" y="124" width="72" height="20" fill="#8B4513"/>\n  <rect x="240" y="132" width="4" height="4" fill="#DAA520"/>\n  <rect x="256" y="132" width="4" height="4" fill="#DAA520"/>\n  <rect x="212" y="148" width="72" height="8" fill="#8B4513"/>\n</svg>'},xt={idle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 48" shape-rendering="crispEdges">\n  \x3c!-- Shadow/ground indicator --\x3e\n  <ellipse cx="16" cy="46" rx="10" ry="2" fill="#00000033"/>\n\n  \x3c!-- Legs --\x3e\n  <rect x="10" y="32" width="5" height="12" fill="#4169E1"/>\n  <rect x="17" y="32" width="5" height="12" fill="#4169E1"/>\n  <rect x="10" y="44" width="5" height="2" fill="#2F4F4F"/>\n  <rect x="17" y="44" width="5" height="2" fill="#2F4F4F"/>\n\n  \x3c!-- Body/torso --\x3e\n  <rect x="9" y="18" width="14" height="14" fill="#DC143C"/>\n  \n  \x3c!-- Arms --\x3e\n  <rect x="6" y="20" width="3" height="10" fill="#FFD700"/>\n  <rect x="23" y="20" width="3" height="10" fill="#FFD700"/>\n  <rect x="6" y="30" width="3" height="2" fill="#FFA07A"/>\n  <rect x="23" y="30" width="3" height="2" fill="#FFA07A"/>\n\n  \x3c!-- Neck --\x3e\n  <rect x="13" y="14" width="6" height="4" fill="#FFA07A"/>\n\n  \x3c!-- Head --\x3e\n  <rect x="11" y="6" width="10" height="8" fill="#FFA07A"/>\n  \n  \x3c!-- Hair --\x3e\n  <rect x="11" y="4" width="10" height="2" fill="#654321"/>\n  <rect x="10" y="6" width="1" height="4" fill="#654321"/>\n  <rect x="21" y="6" width="1" height="4" fill="#654321"/>\n\n  \x3c!-- Eyes --\x3e\n  <rect x="13" y="9" width="2" height="2" fill="#000000"/>\n  <rect x="17" y="9" width="2" height="2" fill="#000000"/>\n\n  \x3c!-- Smile --\x3e\n  <rect x="14" y="12" width="1" height="1" fill="#000000"/>\n  <rect x="15" y="13" width="2" height="1" fill="#000000"/>\n  <rect x="17" y="12" width="1" height="1" fill="#000000"/>\n</svg>'};class wt extends ot{setConfig(t){if(!t.entity)throw new Error("Please define an entity");if(!t.entity.startsWith("device_tracker."))throw new Error("Entity must be a device_tracker entity (e.g., device_tracker.bermuda_xxx)");this._config=t}set hass(t){if(this._hass=t,!this._config)return;const e=t.states[this._config.entity];return e?"unavailable"===e.state?("Bermuda integration is unavailable. Check that the Bermuda BLE integration is enabled."!==this._error&&(this._error="Bermuda integration is unavailable. Check that the Bermuda BLE integration is enabled."),void(void 0!==this._entityState&&(this._entityState=void 0))):"not_home"===e.state?(this._entityState&&"Not detected"!==this._entityState&&(this._lastRoom=this._entityState),void 0!==this._error&&(this._error=void 0),void("Not detected"!==this._entityState&&(this._entityState="Not detected"))):(e.attributes?.area&&(this._lastRoom=e.attributes?.area),void 0!==this._error&&(this._error=void 0),void(this._entityState!==e.attributes?.area&&(this._entityState=e.attributes?.area))):(this._error!==`Entity not found: ${this._config.entity}`&&(this._error=`Entity not found: ${this._config.entity}`),void(void 0!==this._entityState&&(this._entityState=void 0)))}getCardSize(){return 3}static getConfigElement(){return document.createElement("minime-card-editor")}static getStubConfig(){return{entity:"",name:"MiniMe",areas:["office","kitchen","living_room","bedroom"]}}render(){if(!this._config)return I``;if(this._error)return I`
        <ha-card>
          <div class="card-content error-content">
            <div class="error">
              <span class="error-icon">!</span>
              <span class="error-message">${this._error}</span>
            </div>
          </div>
        </ha-card>
      `;const t=this._entityState,e=t=>t.toLowerCase().replace(/\s+/g,"_"),i="Not detected"===t;let n,r,s=!1;if(i){const t=this._lastRoom?e(this._lastRoom):void 0;t&&ut[t]?(n=ut[t],r=this._lastRoom,s=!0):r="Not detected"}else t&&ut[e(t)]?(n=ut[e(t)],r=t):r=t||"Unknown";return I`
      <ha-card>
        <div class="scene-container">
          ${n?I`
                <div class="room-background ${s?"faded":""}">
                  ${yt(n)}
                </div>
              `:I`
                <div class="no-room-background">
                  <div class="placeholder-text">No room background</div>
                </div>
              `}
          
          ${!i&&n?I`
                <div class="avatar">
                  ${yt(xt.idle)}
                </div>
              `:""}
          
          ${i&&!n?I`
                <div class="not-detected">
                  <div>Not detected</div>
                </div>
              `:""}
          
          <div class="room-label">${r.replace(/_/g," ")}</div>
        </div>
      </ha-card>
    `}disconnectedCallback(){super.disconnectedCallback()}}wt.styles=h`
    :host {
      --minime-bg: var(--card-background-color, #fff);
      --minime-text: var(--primary-text-color, #333);
      --minime-secondary: var(--secondary-text-color, #666);
      --minime-error: var(--error-color, #db4437);
      --minime-accent: var(--accent-color, #03a9f4);
    }

    ha-card {
      background: var(--minime-bg);
      color: var(--minime-text);
      overflow: hidden;
      padding: 0;
    }

    .scene-container {
      position: relative;
      width: 100%;
      /* 16:10 aspect ratio for pixel art scene */
      padding-bottom: 62.5%;
      overflow: hidden;
    }

    .room-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .room-background svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .room-background.faded {
      opacity: 0.3;
      filter: grayscale(0.5);
    }

    .no-room-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .placeholder-text {
      color: white;
      font-size: 1.2em;
      opacity: 0.7;
    }

    .avatar {
      position: absolute;
      bottom: 15%;
      left: 50%;
      transform: translateX(-50%);
      width: 15%;
      /* Avatar scales proportionally */
    }

    .avatar svg {
      width: 100%;
      height: auto;
      display: block;
      image-rendering: pixelated;
    }

    .room-label {
      position: absolute;
      bottom: 4px;
      right: 8px;
      font-size: 0.75em;
      color: var(--minime-secondary);
      text-transform: capitalize;
      background: rgba(0, 0, 0, 0.3);
      padding: 2px 6px;
      border-radius: 3px;
      color: white;
    }

    .not-detected {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.9em;
      color: var(--minime-secondary);
      text-align: center;
    }

    /* Error styles */
    .card-content.error-content {
      padding: 16px;
      min-height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .error {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--minime-error);
      padding: 8px;
    }

    .error-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--minime-error);
      color: white;
      font-weight: bold;
      font-size: 14px;
      flex-shrink: 0;
    }

    .error-message {
      font-size: 0.9em;
      line-height: 1.3;
    }

    /* Responsive: ensure scene doesn't get too tall on wide screens */
    @media (min-width: 600px) {
      .scene-container {
        max-height: 300px;
        padding-bottom: 0;
        height: 250px;
      }
    }
  `,t([dt()],wt.prototype,"_entityState",void 0),t([dt()],wt.prototype,"_error",void 0);class _t extends ot{setConfig(t){this._config=t}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,i=e.configValue,n=e.value;if(!i)return;const r={...this._config,[i]:n};this._dispatchConfigChanged(r)}_areaChanged(t){if(!this._config)return;const e=t.target,i=e.value,n=e.checked,r=this._config.areas||[];let s;s=n?r.includes(i)?r:[...r,i]:r.filter(t=>t!==i);const h={...this._config,areas:s};this._dispatchConfigChanged(h)}_dispatchConfigChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){if(!this._config)return I``;const t=this._config.areas||[];return I`
      <div class="editor">
        <div class="editor-row">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entity||""}
            .configValue=${"entity"}
            .includeDomains=${["device_tracker"]}
            @value-changed=${this._valueChanged}
            label="Bermuda Device Tracker"
            allow-custom-entity
          ></ha-entity-picker>
        </div>

        <div class="editor-row">
          <label>
            Card Name
            <input
              type="text"
              .value=${this._config.name||""}
              @input=${t=>{const e=t.target,i={...this._config,name:e.value};this._dispatchConfigChanged(i)}}
            />
          </label>
        </div>

        <div class="editor-row">
          <div class="area-selector">
            <label class="section-label">Rooms to Track</label>
            ${[{id:"office",label:"Office"},{id:"kitchen",label:"Kitchen"},{id:"living_room",label:"Living Room"},{id:"bedroom",label:"Bedroom"}].map(e=>I`
                <label class="checkbox-label">
                  <input
                    type="checkbox"
                    .value=${e.id}
                    .checked=${t.includes(e.id)}
                    @change=${this._areaChanged}
                  />
                  ${e.label}
                </label>
              `)}
          </div>
        </div>
      </div>
    `}}_t.styles=h`
    .editor {
      padding: 16px;
    }

    .editor-row {
      padding: 8px 0;
    }

    label {
      display: block;
      margin-bottom: 4px;
      font-weight: 500;
    }

    input[type='text'] {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    }

    .section-label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
    }

    .area-selector {
      padding: 8px 0;
    }

    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 0;
      font-weight: normal;
      cursor: pointer;
    }

    .checkbox-label input[type='checkbox'] {
      cursor: pointer;
    }
  `,t([dt()],_t.prototype,"_config",void 0);console.info("%c MINIME-CARD %c v0.1.0 ","color: white; background: #555; font-weight: bold;","color: white; background: #007acc;"),customElements.define("minime-card",wt),customElements.define("minime-card-editor",_t),window.customCards=window.customCards||[],window.customCards.push({type:"minime-card",name:"MiniMe Card",description:"Animated pixel art avatar showing your room presence"});
