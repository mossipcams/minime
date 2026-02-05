function t(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const r=t=>new o("string"==typeof t?t:t+"",void 0,s),a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,s)},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return r(e)})(t):t,{is:h,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:f,getPrototypeOf:u}=Object,g=globalThis,m=g.trustedTypes,y=m?m.emptyScript:"",_=g.reactiveElementPolyfillSupport,$=(t,e)=>t,x={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!h(t,e),A={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);n?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...p(t),...f(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:x).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:x;this._$Em=s;const o=n.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const o=this.constructor;if(!1===s&&(n=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??v)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[$("elementProperties")]=new Map,w[$("finalized")]=new Map,_?.({ReactiveElement:w}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const b=globalThis,E=t=>t,C=b.trustedTypes,S=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,B="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,R="?"+k,P=`<${R}>`,O=document,z=()=>O.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,D="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,F=/>/g,G=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,L=/"/g,H=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Y=new WeakMap,X=O.createTreeWalker(O,129);function q(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const V=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=T;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===T?"!--"===l[1]?r=M:void 0!==l[1]?r=F:void 0!==l[2]?(H.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=G):void 0!==l[3]&&(r=G):r===G?">"===l[0]?(r=n??T,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?G:'"'===l[3]?L:I):r===L||r===I?r=G:r===M||r===F?r=T:(r=G,n=void 0);const d=r===G&&t[e+1].startsWith("/>")?" ":"";o+=r===T?i+P:h>=0?(s.push(a),i.slice(0,h)+B+i.slice(h)+k+d):i+k+(-2===h?e:d)}return[q(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,h]=V(t,e);if(this.el=Z.createElement(l,i),X.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=X.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(B)){const e=h[o++],i=s.getAttribute(t).split(k),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?it:"?"===r[1]?st:"@"===r[1]?nt:et}),s.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(H.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],z()),X.nextNode(),a.push({type:2,index:++n});s.append(t[e],z())}}}else if(8===s.nodeType)if(s.data===R)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)a.push({type:7,index:n}),t+=k.length-1}n++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){if(e===W)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=N(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=J(t,n._$AS(t,e.values),n,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);X.currentNode=s;let n=X.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new tt(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new ot(n,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(n=X.nextNode(),o++)}return X.currentNode=O,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),N(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new Z(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new tt(this.O(z()),this.O(z()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=E(t).nextSibling;E(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}let et=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=J(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=J(this,s[i+r],e,r),a===W&&(a=this._$AH[r]),o||=!N(a)||a!==this._$AH[r],a===K?t=K:t!==K&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class it extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class st extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class nt extends et{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??K)===W)return;const i=this._$AH,s=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==K&&(i===K||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const rt=b.litHtmlPolyfillSupport;rt?.(Z,tt),(b.litHtmlVersions??=[]).push("3.3.2");const at=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lt=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new tt(e.insertBefore(z(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};lt._$litElement$=!0,lt.finalized=!0,at.litElementHydrateSupport?.({LitElement:lt});const ht=at.litElementPolyfillSupport;ht?.({LitElement:lt}),(at.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:v},dt=(t=ct,e,i)=>{const{kind:s,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function pt(t){return function(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=2;class ut{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class gt extends ut{constructor(t){if(super(t),this.it=K,t.type!==ft)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===K||null==t)return this._t=void 0,this.it=t;if(t===W)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}gt.directiveName="unsafeHTML",gt.resultType=1;const mt=(t=>(...e)=>({_$litDirective$:t,values:e}))(gt),yt={office:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">\n  <defs>\n    <linearGradient id="lofiOffW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C8B6A6"/><stop offset="100%" stop-color="#B8A696"/></linearGradient>\n    <linearGradient id="lofiOffF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#A89078"/><stop offset="100%" stop-color="#987860"/></linearGradient>\n    <radialGradient id="lofiOffG" cx="0.7" cy="0.3" r="0.4"><stop offset="0%" stop-color="#FFF5E0" stop-opacity="0.3"/><stop offset="100%" stop-color="#FFF5E0" stop-opacity="0"/></radialGradient>\n  </defs>\n  <rect width="320" height="100" fill="url(#lofiOffW)"/>\n  <rect y="100" width="320" height="100" fill="url(#lofiOffF)"/>\n  <rect width="320" height="200" fill="url(#lofiOffG)"/>\n  <rect x="220" y="20" width="60" height="45" rx="8" fill="#D4C4B0"/>\n  <rect x="225" y="25" width="50" height="35" rx="6" fill="#B8D4E3" opacity="0.6"/>\n  <rect x="100" y="105" width="90" height="8" rx="4" fill="#8B7355"/>\n  <rect x="105" y="113" width="8" height="40" rx="4" fill="#7A6245"/>\n  <rect x="180" y="113" width="8" height="40" rx="4" fill="#7A6245"/>\n  <rect x="130" y="80" width="35" height="20" rx="8" fill="#4A4A5E" opacity="0.7"/>\n  <rect x="141" y="100" width="12" height="8" rx="4" fill="#4A4A5E" opacity="0.5"/>\n  <rect x="20" y="90" width="45" height="68" rx="10" fill="#8B7355" opacity="0.6"/>\n  <rect x="25" y="96" width="35" height="18" rx="6" fill="#7A6245" opacity="0.5"/>\n  <rect x="25" y="120" width="35" height="18" rx="6" fill="#7A6245" opacity="0.5"/>\n</svg>',kitchen:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">\n  <defs>\n    <linearGradient id="lofiKitW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#D4C8B0"/><stop offset="100%" stop-color="#C4B8A0"/></linearGradient>\n    <linearGradient id="lofiKitF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C8B898"/><stop offset="100%" stop-color="#B8A880"/></linearGradient>\n    <radialGradient id="lofiKitG" cx="0.5" cy="0.4" r="0.35"><stop offset="0%" stop-color="#FFF8E8" stop-opacity="0.25"/><stop offset="100%" stop-color="#FFF8E8" stop-opacity="0"/></radialGradient>\n  </defs>\n  <rect width="320" height="100" fill="url(#lofiKitW)"/>\n  <rect y="100" width="320" height="100" fill="url(#lofiKitF)"/>\n  <rect width="320" height="200" fill="url(#lofiKitG)"/>\n  <rect x="15" y="20" width="140" height="40" rx="10" fill="#8BA88B" opacity="0.6"/>\n  <rect x="20" y="25" width="30" height="30" rx="8" fill="#9BB89B" opacity="0.5"/>\n  <rect x="55" y="25" width="30" height="30" rx="8" fill="#9BB89B" opacity="0.5"/>\n  <rect x="90" y="25" width="30" height="30" rx="8" fill="#9BB89B" opacity="0.5"/>\n  <rect x="15" y="95" width="160" height="8" rx="4" fill="#B0B0B0" opacity="0.6"/>\n  <rect x="15" y="103" width="160" height="55" rx="10" fill="#8BA88B" opacity="0.5"/>\n  <ellipse cx="45" cy="88" rx="10" ry="6" fill="#C87070" opacity="0.4"/>\n  <ellipse cx="75" cy="88" rx="10" ry="6" fill="#C87070" opacity="0.4"/>\n  <rect x="230" y="90" width="60" height="68" rx="10" fill="#C8C8C8" opacity="0.5"/>\n  <rect x="220" y="20" width="60" height="45" rx="8" fill="#D4C4B0"/>\n  <rect x="225" y="25" width="50" height="35" rx="6" fill="#A8D8EA" opacity="0.5"/>\n</svg>',living_room:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">\n  <defs>\n    <linearGradient id="lofiLivW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#D8C8A8"/><stop offset="100%" stop-color="#C8B898"/></linearGradient>\n    <linearGradient id="lofiLivF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#B09068"/><stop offset="100%" stop-color="#A08058"/></linearGradient>\n    <radialGradient id="lofiLivG" cx="0.6" cy="0.5" r="0.4"><stop offset="0%" stop-color="#FFE8C0" stop-opacity="0.3"/><stop offset="100%" stop-color="#FFE8C0" stop-opacity="0"/></radialGradient>\n  </defs>\n  <rect width="320" height="100" fill="url(#lofiLivW)"/>\n  <rect y="100" width="320" height="100" fill="url(#lofiLivF)"/>\n  <rect width="320" height="200" fill="url(#lofiLivG)"/>\n  <rect x="15" y="100" width="120" height="14" rx="8" fill="#8B4040" opacity="0.5"/>\n  <rect x="15" y="114" width="120" height="30" rx="10" fill="#B06060" opacity="0.5"/>\n  <rect x="200" y="90" width="85" height="50" rx="10" fill="#5A4030" opacity="0.5"/>\n  <rect x="205" y="95" width="75" height="22" rx="8" fill="#2A2A4E" opacity="0.5"/>\n  <rect x="160" y="118" width="70" height="8" rx="4" fill="#8B7355" opacity="0.5"/>\n  <rect x="240" y="20" width="55" height="55" rx="8" fill="#D4C4B0"/>\n  <rect x="245" y="25" width="45" height="45" rx="6" fill="#A8D8EA" opacity="0.4"/>\n  <rect x="240" y="25" width="14" height="45" rx="4" fill="#8B4040" opacity="0.3"/>\n  <rect x="281" y="25" width="14" height="45" rx="4" fill="#8B4040" opacity="0.3"/>\n</svg>',bedroom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">\n  <defs>\n    <linearGradient id="lofiBedW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C8C0D8"/><stop offset="100%" stop-color="#B8B0C8"/></linearGradient>\n    <linearGradient id="lofiBedF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9080B0"/><stop offset="100%" stop-color="#8070A0"/></linearGradient>\n    <radialGradient id="lofiBedG" cx="0.5" cy="0.5" r="0.45"><stop offset="0%" stop-color="#E8D8F0" stop-opacity="0.3"/><stop offset="100%" stop-color="#E8D8F0" stop-opacity="0"/></radialGradient>\n  </defs>\n  <rect width="320" height="100" fill="url(#lofiBedW)"/>\n  <rect y="100" width="320" height="100" fill="url(#lofiBedF)"/>\n  <rect width="320" height="200" fill="url(#lofiBedG)"/>\n  <rect x="15" y="100" width="120" height="14" rx="8" fill="#4B2080" opacity="0.4"/>\n  <rect x="15" y="114" width="120" height="35" rx="10" fill="#7B6AAE" opacity="0.4"/>\n  <ellipse cx="40" cy="98" rx="12" ry="5" fill="#E8D8A0" opacity="0.4"/>\n  <ellipse cx="70" cy="98" rx="12" ry="5" fill="#E8D8A0" opacity="0.4"/>\n  <ellipse cx="100" cy="98" rx="12" ry="5" fill="#E8D8A0" opacity="0.4"/>\n  <rect x="150" y="110" width="32" height="38" rx="8" fill="#7A5C3E" opacity="0.5"/>\n  <ellipse cx="159" cy="98" rx="10" ry="4" fill="#F0C040" opacity="0.3"/>\n  <rect x="210" y="95" width="75" height="55" rx="10" fill="#6A4C30" opacity="0.5"/>\n  <rect x="240" y="20" width="55" height="55" rx="8" fill="#D4C4B0"/>\n  <rect x="245" y="25" width="45" height="45" rx="6" fill="#B0B8D0" opacity="0.4"/>\n</svg>'};var _t;!function(t){t.IDLE="IDLE",t.WALKING_OUT="WALKING_OUT",t.CROSSFADE="CROSSFADE",t.WALKING_IN="WALKING_IN"}(_t||(_t={}));const $t={office:"studying",kitchen:"cooking",bedroom:"sleeping",living_room:"idle"};function xt(t){return t?$t[t]??"idle":"idle"}function vt(t,e){return e===t.currentRoom?t:t.currentRoom?t.phase===_t.WALKING_OUT||t.phase===_t.CROSSFADE?{...t,targetRoom:e}:{...t,targetRoom:e,phase:_t.WALKING_OUT,outgoingRoom:t.currentRoom,animation:"walking"}:{...t,targetRoom:e,phase:_t.CROSSFADE,crossfadeProgress:0,visible:!1}}class At{constructor(t){this._rafId=null,this._lastTimestamp=null,this._state=function(t){const e=t??null;return{phase:_t.IDLE,currentRoom:e,targetRoom:null,avatarX:50,animation:xt(e),crossfadeProgress:0,outgoingRoom:null,visible:!0}}(),this._onStateChange=t}getState(){return this._state}changeRoom(t){this._state=vt(this._state,t),this._onStateChange(this._state)}start(){null===this._rafId&&(this._lastTimestamp=null,this._rafId=requestAnimationFrame(t=>this._loop(t)))}stop(){null!==this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._lastTimestamp=null}_loop(t){if(null!==this._lastTimestamp){const e=t-this._lastTimestamp,i=this._state;this._state=function(t,e){const i=Math.min(e,200);if(t.phase===_t.IDLE)return t;if(t.phase===_t.WALKING_OUT){const e=t.avatarX+.06*i;return e>=110?{...t,phase:_t.CROSSFADE,avatarX:110,visible:!1,crossfadeProgress:0,outgoingRoom:t.currentRoom}:{...t,avatarX:e}}if(t.phase===_t.CROSSFADE){const e=t.crossfadeProgress+i/400;return e>=1?{...t,phase:_t.WALKING_IN,currentRoom:t.targetRoom,crossfadeProgress:1,avatarX:-10,visible:!0,animation:"walking"}:{...t,crossfadeProgress:e}}if(t.phase===_t.WALKING_IN){const e=t.avatarX+.06*i;if(e>=50){const e={...t,phase:_t.IDLE,avatarX:50,targetRoom:null,outgoingRoom:null,animation:xt(t.currentRoom)};return t.targetRoom&&t.targetRoom!==t.currentRoom?vt(e,t.targetRoom):e}return{...t,avatarX:e}}return t}(this._state,e),this._state!==i&&this._onStateChange(this._state)}this._lastTimestamp=t,this._rafId=requestAnimationFrame(t=>this._loop(t))}}const wt=["idle","walking","studying","cooking","sleeping"],bt="#E8B84B",Et="#A67C2E",Ct="#4CAF50",St="#2D2D2D",Bt="#F5F5F0";function kt(t,e,i){return`<rect x="${3*t}" y="${3*e}" width="3" height="3" fill="${i}"/>`}function Rt(){const t=[];for(let e=4;e<=11;e++)t.push(kt(e,0,Et));for(let e=1;e<=6;e++){t.push(kt(3,e,Et)),t.push(kt(12,e,Et));for(let i=4;i<=11;i++)t.push(kt(i,e,bt))}for(let e=4;e<=11;e++)t.push(kt(e,7,Et));return t.push(kt(5,3,St),kt(6,3,St),kt(9,3,St),kt(10,3,St)),t.push(kt(7,4,Et),kt(8,4,Et)),t.push(kt(6,5,Et),kt(9,5,Et)),t.push(kt(7,1,Ct),kt(8,1,Ct)),t.join("")}function Pt(){const t=[];for(let e=8;e<=15;e++){t.push(kt(5,e,Et)),t.push(kt(10,e,Et));for(let i=6;i<=9;i++)t.push(kt(i,e,bt))}return t.push(kt(7,9,Ct),kt(8,9,Ct)),t.push(kt(7,10,Ct),kt(8,10,Ct)),t.join("")}function Ot(){const t=[];for(let e=8;e<=11;e++)t.push(kt(3,e,Et)),t.push(kt(4,e,bt));return t.join("")}function zt(){const t=[];for(let e=8;e<=11;e++)t.push(kt(11,e,bt)),t.push(kt(12,e,Et));return t.join("")}function Nt(){const t=[];for(let e=16;e<=19;e++)t.push(kt(6,e,Et)),t.push(kt(7,e,bt));return t.join("")}function Ut(){const t=[];for(let e=16;e<=19;e++)t.push(kt(8,e,bt)),t.push(kt(9,e,Et));return t.join("")}function Dt(t){const e=wt.includes(t)?t:"idle",i=[`<g class="totem-head">${Rt()}</g>`,`<g class="totem-body">${Pt()}</g>`,`<g class="totem-left-arm">${Ot()}</g>`,`<g class="totem-right-arm">${zt()}</g>`,`<g class="totem-left-leg">${Nt()}</g>`,`<g class="totem-right-leg">${Ut()}</g>`];return"sleeping"===e&&i.push(`<g class="totem-zzz">\n    <text x="39" y="6" fill="${Bt}" font-size="7.5px" font-family="monospace" opacity="0">Z</text>\n    <text x="42" y="15" fill="${Bt}" font-size="6px" font-family="monospace" opacity="0">z</text>\n    <text x="39" y="21" fill="${Bt}" font-size="4.5px" font-family="monospace" opacity="0">z</text>\n  </g>`),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 72" class="totem-avatar totem-${e}" shape-rendering="crispEdges">\n  ${i.join("")}\n</svg>`}class Tt extends lt{setConfig(t){if(!t.entity)throw new Error("Please define an entity");this._config=t}set hass(t){if(this._hass=t,!this._config)return;const e=t.states[this._config.entity];if(!e)return this._error!==`Entity not found: ${this._config.entity}`&&(this._error=`Entity not found: ${this._config.entity}`),void(void 0!==this._entityState&&(this._entityState=void 0));if("unavailable"===e.state)return"Entity is unavailable"!==this._error&&(this._error="Entity is unavailable"),void(void 0!==this._entityState&&(this._entityState=void 0));if("not_home"===e.state)return"Not detected"!==this._entityState&&(this._entityState="Not detected"),void(void 0!==this._error&&(this._error=void 0));void 0!==this._error&&(this._error=void 0);const i=(e.attributes?.area||e.state).toLowerCase().replace(/\s+/g,"_");this._entityState!==i&&(this._entityState=i,this._engine&&this._engine.changeRoom(i))}getCardSize(){return 3}static getConfigElement(){return document.createElement("minime-card-editor")}static getStubConfig(){return{entity:"",name:"Presence"}}connectedCallback(){super.connectedCallback(),this._engine=new At(t=>{this._presenceState=t}),this._engine.start(),this._entityState&&"Not detected"!==this._entityState&&this._engine.changeRoom(this._entityState)}disconnectedCallback(){super.disconnectedCallback(),this._engine&&this._engine.stop()}render(){if(!this._config)return j``;if(this._error)return j`
        <ha-card>
          <div class="card-content error-content">
            <div class="error">
              <span class="error-icon">!</span>
              <span class="error-message">${this._error}</span>
            </div>
          </div>
        </ha-card>
      `;const t=this._presenceState,e=t?.currentRoom,i=t?.outgoingRoom,s=t=>t.toLowerCase().replace(/\s+/g,"_"),n=e?yt[s(e)]:void 0,o=i?yt[s(i)]:void 0,r=t?.phase===_t.CROSSFADE,a=t?1-t.crossfadeProgress:1,l=t?.visible??!1,h=t?.avatarX??50,c=t?.animation??"idle",d=this._config.name||this._entityState?.replace(/_/g," ")||"Unknown";return j`
      <ha-card>
        <div class="scene-container">
          ${o&&r?j`
                <div class="room-background outgoing" style="opacity: ${a}">
                  ${mt(o)}
                </div>
              `:""}

          ${n?j`
                <div class="room-background ${r?"incoming":""}">
                  ${mt(n)}
                </div>
              `:j`
                <div class="no-room-background">
                  <div class="placeholder-text">No room background</div>
                </div>
              `}

          ${l?j`
                <div class="avatar" style="left: ${h}%">
                  ${mt(Dt(c))}
                </div>
              `:""}

          <div class="room-label">${d}</div>
        </div>
      </ha-card>
    `}}Tt.styles=a`
    :host {
      --minime-bg: var(--card-background-color, #fff);
      --minime-text: var(--primary-text-color, #333);
      --minime-secondary: var(--secondary-text-color, #666);
      --minime-error: var(--error-color, #db4437);
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

    .room-background.outgoing {
      z-index: 1;
    }

    .room-background.incoming {
      z-index: 0;
    }

    .no-room-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #8B7355 0%, #6B5335 100%);
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
      transform: translateX(-50%);
      width: 15%;
      z-index: 2;
    }

    .room-label {
      position: absolute;
      bottom: 4px;
      right: 8px;
      font-size: 0.75em;
      text-transform: capitalize;
      background: rgba(0, 0, 0, 0.3);
      padding: 2px 6px;
      border-radius: 3px;
      color: white;
      z-index: 3;
    }

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

    ${r("\n  .totem-avatar {\n    width: 100%;\n    height: auto;\n    display: block;\n    image-rendering: pixelated;\n  }\n\n  .totem-idle {\n    animation: totem-bob 1.5s ease-in-out infinite;\n  }\n  @keyframes totem-bob {\n    0%, 100% { transform: translateY(0); }\n    50% { transform: translateY(-2px); }\n  }\n\n  .totem-walking .totem-left-arm {\n    animation: totem-arm-swing-l 0.4s ease-in-out infinite alternate;\n    transform-origin: 12px 24px;\n  }\n  .totem-walking .totem-right-arm {\n    animation: totem-arm-swing-r 0.4s ease-in-out infinite alternate;\n    transform-origin: 33px 24px;\n  }\n  .totem-walking .totem-left-leg {\n    animation: totem-leg-l 0.4s ease-in-out infinite alternate;\n  }\n  .totem-walking .totem-right-leg {\n    animation: totem-leg-r 0.4s ease-in-out infinite alternate;\n  }\n  @keyframes totem-arm-swing-l {\n    0% { transform: rotate(-15deg); }\n    100% { transform: rotate(15deg); }\n  }\n  @keyframes totem-arm-swing-r {\n    0% { transform: rotate(15deg); }\n    100% { transform: rotate(-15deg); }\n  }\n  @keyframes totem-leg-l {\n    0% { transform: translateY(-2px); }\n    100% { transform: translateY(2px); }\n  }\n  @keyframes totem-leg-r {\n    0% { transform: translateY(2px); }\n    100% { transform: translateY(-2px); }\n  }\n\n  .totem-studying .totem-left-leg,\n  .totem-studying .totem-right-leg {\n    transform: rotate(90deg) translateX(6px);\n    transform-origin: 21px 48px;\n  }\n  .totem-studying .totem-left-arm {\n    animation: totem-type-l 0.6s ease-in-out infinite alternate;\n  }\n  .totem-studying .totem-right-arm {\n    animation: totem-type-r 0.6s ease-in-out infinite alternate;\n    animation-delay: 0.15s;\n  }\n  @keyframes totem-type-l {\n    0%, 100% { transform: translateY(0); }\n    50% { transform: translateY(-3px); }\n  }\n  @keyframes totem-type-r {\n    0%, 100% { transform: translateY(0); }\n    50% { transform: translateY(-3px); }\n  }\n\n  .totem-cooking .totem-right-arm {\n    animation: totem-stir 0.8s ease-in-out infinite;\n    transform-origin: 33px 24px;\n  }\n  @keyframes totem-stir {\n    0%, 100% { transform: rotate(0deg) translateY(-3px); }\n    25% { transform: rotate(10deg) translateY(-6px); }\n    50% { transform: rotate(0deg) translateY(-3px); }\n    75% { transform: rotate(-10deg) translateY(-6px); }\n  }\n  .totem-cooking {\n    animation: totem-bob 1.5s ease-in-out infinite;\n  }\n\n  .totem-sleeping {\n    transform: rotate(90deg) scale(0.8);\n    transform-origin: center center;\n  }\n  .totem-sleeping .totem-zzz text:nth-child(1) {\n    animation: totem-zzz 2s ease-in-out infinite;\n  }\n  .totem-sleeping .totem-zzz text:nth-child(2) {\n    animation: totem-zzz 2s ease-in-out infinite;\n    animation-delay: 0.5s;\n  }\n  .totem-sleeping .totem-zzz text:nth-child(3) {\n    animation: totem-zzz 2s ease-in-out infinite;\n    animation-delay: 1s;\n  }\n  @keyframes totem-zzz {\n    0% { opacity: 0; transform: translateY(0); }\n    20% { opacity: 1; }\n    80% { opacity: 1; }\n    100% { opacity: 0; transform: translateY(-9px); }\n  }\n")}

    @media (min-width: 600px) {
      .scene-container {
        max-height: 300px;
        padding-bottom: 0;
        height: 250px;
      }
    }
  `,t([pt()],Tt.prototype,"_entityState",void 0),t([pt()],Tt.prototype,"_error",void 0),t([pt()],Tt.prototype,"_presenceState",void 0);class Mt extends lt{setConfig(t){this._config=t}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,i=e.configValue,s=e.value;if(!i)return;const n={...this._config,[i]:s};this._dispatchConfigChanged(n)}_dispatchConfigChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return this._config?j`
      <div class="editor">
        <div class="editor-row">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entity||""}
            .configValue=${"entity"}
            @value-changed=${this._valueChanged}
            label="Entity"
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

      </div>
    `:j``}}Mt.styles=a`
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
  `,t([pt()],Mt.prototype,"_config",void 0);console.info("%c MINIME-CARD %c v0.2.0 ","color: white; background: #555; font-weight: bold;","color: white; background: #007acc;"),customElements.define("minime-card",Tt),customElements.define("minime-card-editor",Mt),window.customCards=window.customCards||[],window.customCards.push({type:"minime-card",name:"MiniMe Card",description:"Animated pixel art avatar showing your room presence"});
