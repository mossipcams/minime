function t(t,e,i,r){var n,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(s=(o<3?n(s):o>3?n(e,i,s):n(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new o(i,t,r)},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:h,defineProperty:a,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:f,getPrototypeOf:p}=Object,x=globalThis,g=x.trustedTypes,y=g?g.emptyScript:"",u=x.reactiveElementPolyfillSupport,m=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>!h(t,e),v={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),x.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&a(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:n}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const o=r?.call(this);n?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...d(t),...f(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{if(i)t.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of r){const r=document.createElement("style"),n=e.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=i.cssText,t.appendChild(r)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=r;const o=n.fromAttribute(e,t.type);this[r]=o??this._$Ej?.get(r)??o,this._$Em=null}}requestUpdate(t,e,i,r=!1,n){if(void 0!==t){const o=this.constructor;if(!1===r&&(n=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??_)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[m("elementProperties")]=new Map,A[m("finalized")]=new Map,u?.({ReactiveElement:A}),(x.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const b=globalThis,C=t=>t,$=b.trustedTypes,E=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,F="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+D,B=`<${S}>`,R=document,k=()=>R.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,P="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,O=/>/g,M=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,U=/"/g,W=/^(?:script|style|textarea|title)$/i,z=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),j=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),K=new WeakMap,X=R.createTreeWalker(R,129);function Q(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const q=(t,e)=>{const i=t.length-1,r=[];let n,o=2===e?"<svg>":3===e?"<math>":"",s=N;for(let e=0;e<i;e++){const i=t[e];let l,h,a=-1,c=0;for(;c<i.length&&(s.lastIndex=c,h=s.exec(i),null!==h);)c=s.lastIndex,s===N?"!--"===h[1]?s=L:void 0!==h[1]?s=O:void 0!==h[2]?(W.test(h[2])&&(n=RegExp("</"+h[2],"g")),s=M):void 0!==h[3]&&(s=M):s===M?">"===h[0]?(s=n??N,a=-1):void 0===h[1]?a=-2:(a=s.lastIndex-h[2].length,l=h[1],s=void 0===h[3]?M:'"'===h[3]?U:G):s===U||s===G?s=M:s===L||s===O?s=N:(s=M,n=void 0);const d=s===M&&t[e+1].startsWith("/>")?" ":"";o+=s===N?i+B:a>=0?(r.push(l),i.slice(0,a)+F+i.slice(a)+D+d):i+D+(-2===a?e:d)}return[Q(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class Z{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,o=0;const s=t.length-1,l=this.parts,[h,a]=q(t,e);if(this.el=Z.createElement(h,i),X.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=X.nextNode())&&l.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(F)){const e=a[o++],i=r.getAttribute(t).split(D),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?et:"?"===s[1]?it:"@"===s[1]?rt:tt}),r.removeAttribute(t)}else t.startsWith(D)&&(l.push({type:6,index:n}),r.removeAttribute(t));if(W.test(r.tagName)){const t=r.textContent.split(D),e=t.length-1;if(e>0){r.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],k()),X.nextNode(),l.push({type:2,index:++n});r.append(t[e],k())}}}else if(8===r.nodeType)if(r.data===S)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(D,t+1));)l.push({type:7,index:n}),t+=D.length-1}n++}}static createElement(t,e){const i=R.createElement("template");return i.innerHTML=t,i}}function V(t,e,i=t,r){if(e===j)return e;let n=void 0!==r?i._$Co?.[r]:i._$Cl;const o=I(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=n:i._$Cl=n),void 0!==n&&(e=V(t,n._$AS(t,e.values),n,r)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??R).importNode(e,!0);X.currentNode=r;let n=X.nextNode(),o=0,s=0,l=i[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new Y(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new nt(n,this,t)),this._$AV.push(e),l=i[++s]}o!==l?.index&&(n=X.nextNode(),o++)}return X.currentNode=R,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),I(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==H&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(Q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new J(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new Z(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new Y(this.O(k()),this.O(k()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=C(t).nextSibling;C(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,n){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}_$AI(t,e=this,i,r){const n=this.strings;let o=!1;if(void 0===n)t=V(this,t,e,0),o=!I(t)||t!==this._$AH&&t!==j,o&&(this._$AH=t);else{const r=t;let s,l;for(t=n[0],s=0;s<n.length-1;s++)l=V(this,r[i+s],e,s),l===j&&(l=this._$AH[s]),o||=!I(l)||l!==this._$AH[s],l===H?t=H:t!==H&&(t+=(l??"")+n[s+1]),this._$AH[s]=l}o&&!r&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==H)}}class rt extends tt{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){if((t=V(this,t,e,0)??H)===j)return;const i=this._$AH,r=t===H&&i!==H||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==H&&(i===H||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const ot=b.litHtmlPolyfillSupport;ot?.(Z,Y),(b.litHtmlVersions??=[]).push("3.3.2");const st=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lt=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let n=r._$litPart$;if(void 0===n){const t=i?.renderBefore??null;r._$litPart$=n=new Y(e.insertBefore(k(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}};lt._$litElement$=!0,lt.finalized=!0,st.litElementHydrateSupport?.({LitElement:lt});const ht=st.litElementPolyfillSupport;ht?.({LitElement:lt}),(st.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:_},ct=(t=at,e,i)=>{const{kind:r,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,n,t,!0,i)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const n=this[r];e.call(this,i),this.requestUpdate(r,n,t,!0,i)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function dt(t){return function(t){return(e,i)=>"object"==typeof i?ct(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=2;class pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class xt extends pt{constructor(t){if(super(t),this.it=H,t.type!==ft)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===H||null==t)return this._t=void 0,this.it=t;if(t===j)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}xt.directiveName="unsafeHTML",xt.resultType=1;const gt=(t=>(...e)=>({_$litDirective$:t,values:e}))(xt),yt={office:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">\n  <defs>\n    <linearGradient id="offWall" x1="0" y1="0" x2="0" y2="1">\n      <stop offset="0%" stop-color="#A8D8EA"/>\n      <stop offset="100%" stop-color="#8BBDD4"/>\n    </linearGradient>\n    <linearGradient id="offFloor" x1="0" y1="0" x2="0" y2="1">\n      <stop offset="0%" stop-color="#C4A882"/>\n      <stop offset="100%" stop-color="#A8906E"/>\n    </linearGradient>\n  </defs>\n  \x3c!-- Floor and walls --\x3e\n  <rect x="0" y="0" width="320" height="80" fill="url(#offWall)"/>\n  <rect x="0" y="80" width="320" height="120" fill="url(#offFloor)"/>\n\n  \x3c!-- Window --\x3e\n  <rect x="238" y="14" width="68" height="52" rx="4" fill="#F5ECD7"/>\n  <rect x="243" y="19" width="28" height="42" rx="3" fill="#B8D4E3"/>\n  <rect x="275" y="19" width="28" height="42" rx="3" fill="#B8D4E3"/>\n  <rect x="269" y="14" width="5" height="52" rx="2" fill="#7A5C3E"/>\n  <rect x="238" y="37" width="68" height="5" rx="2" fill="#7A5C3E"/>\n\n  \x3c!-- Bookshelf --\x3e\n  <rect x="14" y="86" width="52" height="82" rx="4" fill="#7A5C3E"/>\n  <rect x="18" y="90" width="44" height="22" rx="3" fill="#A0764A"/>\n  <rect x="22" y="94" width="10" height="14" rx="2" fill="#E85D5D"/>\n  <rect x="36" y="94" width="10" height="14" rx="2" fill="#5B8DEF"/>\n  <rect x="48" y="94" width="10" height="14" rx="2" fill="#4CAF7D"/>\n  <rect x="18" y="116" width="44" height="22" rx="3" fill="#A0764A"/>\n  <rect x="22" y="120" width="10" height="14" rx="2" fill="#F0C040"/>\n  <rect x="36" y="120" width="10" height="14" rx="2" fill="#A0764A"/>\n  <rect x="48" y="120" width="10" height="14" rx="2" fill="#5B8DEF"/>\n  <rect x="18" y="142" width="44" height="22" rx="3" fill="#A0764A"/>\n  <rect x="22" y="146" width="10" height="14" rx="2" fill="#4CAF7D"/>\n  <rect x="36" y="146" width="10" height="14" rx="2" fill="#E85D5D"/>\n  <rect x="48" y="146" width="10" height="14" rx="2" fill="#5B8DEF"/>\n\n  \x3c!-- Desk --\x3e\n  <rect x="110" y="110" width="100" height="10" rx="4" fill="#A0764A"/>\n  <rect x="112" y="120" width="10" height="48" rx="3" fill="#7A5C3E"/>\n  <rect x="198" y="120" width="10" height="48" rx="3" fill="#7A5C3E"/>\n\n  \x3c!-- Monitor --\x3e\n  <rect x="138" y="86" width="52" height="6" rx="3" fill="#4A4A4A"/>\n  <rect x="142" y="66" width="44" height="22" rx="4" fill="#2D2D5E"/>\n  <rect x="146" y="70" width="36" height="14" rx="2" fill="#5B8DEF"/>\n  <rect x="160" y="92" width="8" height="18" rx="3" fill="#4A4A4A"/>\n\n  \x3c!-- Office chair --\x3e\n  <rect x="222" y="118" width="36" height="10" rx="5" fill="#5B8DEF"/>\n  <rect x="230" y="106" width="20" height="14" rx="4" fill="#5B8DEF"/>\n  <rect x="236" y="128" width="8" height="24" rx="3" fill="#808080"/>\n  <circle cx="232" cy="158" r="5" fill="#808080"/>\n  <circle cx="248" cy="158" r="5" fill="#808080"/>\n</svg>',kitchen:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">\n  <defs>\n    <linearGradient id="kitWall" x1="0" y1="0" x2="0" y2="1">\n      <stop offset="0%" stop-color="#FFF3E0"/>\n      <stop offset="100%" stop-color="#F0DCC0"/>\n    </linearGradient>\n    <linearGradient id="kitFloor" x1="0" y1="0" x2="0" y2="1">\n      <stop offset="0%" stop-color="#F5E6D0"/>\n      <stop offset="100%" stop-color="#E0CCAE"/>\n    </linearGradient>\n  </defs>\n  \x3c!-- Floor and walls --\x3e\n  <rect x="0" y="0" width="320" height="80" fill="url(#kitWall)"/>\n  <rect x="0" y="80" width="320" height="120" fill="url(#kitFloor)"/>\n\n  \x3c!-- Window --\x3e\n  <rect x="238" y="14" width="68" height="52" rx="4" fill="#F5ECD7"/>\n  <rect x="243" y="19" width="28" height="42" rx="3" fill="#A8D8EA"/>\n  <rect x="275" y="19" width="28" height="42" rx="3" fill="#A8D8EA"/>\n  <rect x="269" y="14" width="5" height="52" rx="2" fill="#A0886E"/>\n  <rect x="238" y="37" width="68" height="5" rx="2" fill="#A0886E"/>\n\n  \x3c!-- Upper cabinets --\x3e\n  <rect x="14" y="14" width="164" height="50" rx="6" fill="#81C784"/>\n  <rect x="18" y="18" width="38" height="42" rx="4" fill="#A5D6A7"/>\n  <rect x="26" y="34" width="6" height="10" rx="3" fill="#D4A844"/>\n  <rect x="60" y="18" width="38" height="42" rx="4" fill="#A5D6A7"/>\n  <rect x="68" y="34" width="6" height="10" rx="3" fill="#D4A844"/>\n  <rect x="102" y="18" width="38" height="42" rx="4" fill="#A5D6A7"/>\n  <rect x="110" y="34" width="6" height="10" rx="3" fill="#D4A844"/>\n  <rect x="144" y="18" width="30" height="42" rx="4" fill="#A5D6A7"/>\n  <rect x="152" y="34" width="6" height="10" rx="3" fill="#D4A844"/>\n\n  \x3c!-- Counter --\x3e\n  <rect x="14" y="94" width="180" height="10" rx="4" fill="#E0E0E0"/>\n  <rect x="14" y="104" width="180" height="64" rx="6" fill="#81C784"/>\n  <rect x="18" y="108" width="42" height="56" rx="4" fill="#A5D6A7"/>\n  <rect x="26" y="130" width="6" height="10" rx="3" fill="#D4A844"/>\n  <rect x="64" y="108" width="42" height="56" rx="4" fill="#A5D6A7"/>\n  <rect x="72" y="130" width="6" height="10" rx="3" fill="#D4A844"/>\n  <rect x="110" y="108" width="42" height="56" rx="4" fill="#A5D6A7"/>\n  <rect x="118" y="130" width="6" height="10" rx="3" fill="#D4A844"/>\n  <rect x="156" y="108" width="34" height="56" rx="4" fill="#A5D6A7"/>\n  <rect x="164" y="130" width="6" height="10" rx="3" fill="#D4A844"/>\n\n  \x3c!-- Stove burners --\x3e\n  <rect x="26" y="86" width="16" height="10" rx="4" fill="#808080"/>\n  <rect x="48" y="86" width="16" height="10" rx="4" fill="#808080"/>\n  <ellipse cx="34" cy="78" rx="8" ry="6" fill="#E85D5D"/>\n  <ellipse cx="56" cy="78" rx="8" ry="6" fill="#E85D5D"/>\n\n  \x3c!-- Sink --\x3e\n  <rect x="118" y="86" width="36" height="10" rx="5" fill="#D0D0D0"/>\n  <rect x="126" y="80" width="8" height="8" rx="3" fill="#D0D0D0"/>\n\n  \x3c!-- Fridge --\x3e\n  <rect x="222" y="86" width="68" height="82" rx="6" fill="#E8E8E8"/>\n  <rect x="226" y="90" width="60" height="36" rx="4" fill="#F5F5F5"/>\n  <rect x="250" y="106" width="6" height="10" rx="3" fill="#808080"/>\n  <rect x="226" y="130" width="60" height="34" rx="4" fill="#F5F5F5"/>\n  <rect x="250" y="144" width="6" height="10" rx="3" fill="#808080"/>\n</svg>',living_room:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">\n  <defs>\n    <linearGradient id="livWall" x1="0" y1="0" x2="0" y2="1">\n      <stop offset="0%" stop-color="#FFE8C8"/>\n      <stop offset="100%" stop-color="#F0D4A8"/>\n    </linearGradient>\n    <linearGradient id="livFloor" x1="0" y1="0" x2="0" y2="1">\n      <stop offset="0%" stop-color="#D4A06A"/>\n      <stop offset="100%" stop-color="#BF8C56"/>\n    </linearGradient>\n  </defs>\n  \x3c!-- Floor and walls --\x3e\n  <rect x="0" y="0" width="320" height="80" fill="url(#livWall)"/>\n  <rect x="0" y="80" width="320" height="120" fill="url(#livFloor)"/>\n\n  \x3c!-- Window with curtains --\x3e\n  <rect x="238" y="14" width="68" height="66" rx="4" fill="#F5ECD7"/>\n  <rect x="238" y="18" width="18" height="58" rx="3" fill="#A0764A"/>\n  <rect x="258" y="18" width="28" height="58" rx="3" fill="#A8D8EA"/>\n  <rect x="288" y="18" width="18" height="58" rx="3" fill="#A0764A"/>\n\n  \x3c!-- Entertainment center --\x3e\n  <rect x="198" y="86" width="100" height="58" rx="6" fill="#7A5C3E"/>\n  <rect x="202" y="90" width="92" height="26" rx="4" fill="#1A1A2E"/>\n  <rect x="206" y="94" width="84" height="18" rx="3" fill="#5B8DEF"/>\n  <rect x="202" y="120" width="30" height="20" rx="3" fill="#A0764A"/>\n  <rect x="236" y="120" width="30" height="20" rx="3" fill="#A0764A"/>\n  <rect x="270" y="120" width="24" height="20" rx="3" fill="#A0764A"/>\n\n  \x3c!-- Coffee table --\x3e\n  <rect x="86" y="118" width="84" height="10" rx="5" fill="#A0764A"/>\n  <rect x="90" y="128" width="10" height="24" rx="4" fill="#7A5C3E"/>\n  <rect x="154" y="128" width="10" height="24" rx="4" fill="#7A5C3E"/>\n\n  \x3c!-- Couch --\x3e\n  <rect x="14" y="102" width="132" height="18" rx="8" fill="#A01A1A"/>\n  <rect x="14" y="120" width="132" height="34" rx="6" fill="#D94444"/>\n  <rect x="14" y="154" width="18" height="14" rx="4" fill="#A01A1A"/>\n  <rect x="128" y="154" width="18" height="14" rx="4" fill="#A01A1A"/>\n  <ellipse cx="30" cy="98" rx="10" ry="5" fill="#D94444"/>\n  <ellipse cx="54" cy="98" rx="10" ry="5" fill="#D94444"/>\n  <ellipse cx="78" cy="98" rx="10" ry="5" fill="#D94444"/>\n  <ellipse cx="102" cy="98" rx="10" ry="5" fill="#D94444"/>\n  <ellipse cx="126" cy="98" rx="10" ry="5" fill="#D94444"/>\n\n  \x3c!-- Floor lamp --\x3e\n  <rect x="176" y="88" width="6" height="64" rx="3" fill="#D4A844"/>\n  <ellipse cx="179" cy="84" rx="10" ry="4" fill="#F0C040"/>\n  <ellipse cx="179" cy="78" rx="14" ry="6" fill="#FFA940"/>\n  <rect x="174" y="152" width="10" height="16" rx="3" fill="#7A5C3E"/>\n</svg>',bedroom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">\n  <defs>\n    <linearGradient id="bedWall" x1="0" y1="0" x2="0" y2="1">\n      <stop offset="0%" stop-color="#E8E0F0"/>\n      <stop offset="100%" stop-color="#D6CCE4"/>\n    </linearGradient>\n    <linearGradient id="bedFloor" x1="0" y1="0" x2="0" y2="1">\n      <stop offset="0%" stop-color="#A07CD8"/>\n      <stop offset="100%" stop-color="#8A68C0"/>\n    </linearGradient>\n  </defs>\n  \x3c!-- Floor and walls --\x3e\n  <rect x="0" y="0" width="320" height="80" fill="url(#bedWall)"/>\n  <rect x="0" y="80" width="320" height="120" fill="url(#bedFloor)"/>\n\n  \x3c!-- Window with curtains --\x3e\n  <rect x="238" y="14" width="68" height="66" rx="4" fill="#F5ECD7"/>\n  <rect x="238" y="18" width="18" height="58" rx="3" fill="#4B2080"/>\n  <rect x="258" y="18" width="28" height="58" rx="3" fill="#C0CCE0"/>\n  <rect x="288" y="18" width="18" height="58" rx="3" fill="#4B2080"/>\n\n  \x3c!-- Bed --\x3e\n  <rect x="14" y="102" width="132" height="18" rx="8" fill="#4B2080"/>\n  <rect x="14" y="120" width="132" height="42" rx="6" fill="#7B6AAE"/>\n  <ellipse cx="32" cy="97" rx="10" ry="6" fill="#F0E4A0"/>\n  <ellipse cx="56" cy="97" rx="10" ry="6" fill="#F0E4A0"/>\n  <ellipse cx="80" cy="97" rx="10" ry="6" fill="#F0E4A0"/>\n  <ellipse cx="104" cy="97" rx="10" ry="6" fill="#F0E4A0"/>\n  <ellipse cx="128" cy="97" rx="10" ry="6" fill="#F0E4A0"/>\n  <rect x="14" y="160" width="18" height="8" rx="4" fill="#4B2080"/>\n  <rect x="128" y="160" width="18" height="8" rx="4" fill="#4B2080"/>\n\n  \x3c!-- Nightstand with lamp --\x3e\n  <rect x="158" y="118" width="36" height="42" rx="5" fill="#7A5C3E"/>\n  <rect x="162" y="122" width="28" height="14" rx="3" fill="#A0764A"/>\n  <rect x="173" y="128" width="4" height="4" rx="2" fill="#D4A844"/>\n  <rect x="162" y="140" width="28" height="16" rx="3" fill="#A0764A"/>\n  <rect x="173" y="148" width="4" height="4" rx="2" fill="#D4A844"/>\n  <rect x="172" y="106" width="8" height="12" rx="3" fill="#D4A844"/>\n  <ellipse cx="176" cy="104" rx="10" ry="4" fill="#F0C040"/>\n  <ellipse cx="176" cy="98" rx="14" ry="6" fill="#FFA940"/>\n\n  \x3c!-- Dresser --\x3e\n  <rect x="206" y="94" width="84" height="66" rx="6" fill="#7A5C3E"/>\n  <rect x="210" y="98" width="76" height="22" rx="4" fill="#A0764A"/>\n  <rect x="242" y="106" width="6" height="6" rx="3" fill="#D4A844"/>\n  <rect x="258" y="106" width="6" height="6" rx="3" fill="#D4A844"/>\n  <rect x="210" y="124" width="76" height="22" rx="4" fill="#A0764A"/>\n  <rect x="242" y="132" width="6" height="6" rx="3" fill="#D4A844"/>\n  <rect x="258" y="132" width="6" height="6" rx="3" fill="#D4A844"/>\n  <rect x="210" y="150" width="76" height="8" rx="3" fill="#A0764A"/>\n</svg>'},ut='<ellipse cx="32" cy="92" rx="18" ry="4" fill="#00000033"/>',mt='\n  <ellipse cx="32" cy="20" rx="12" ry="13" fill="#FFCC99"/>\n  <path d="M20 17 Q20 6 32 6 Q44 6 44 17 L44 14 Q44 4 32 4 Q20 4 20 14 Z" fill="#5C4033"/>\n  <path d="M18 17 Q18 12 20 14 L20 20 Q18 20 18 17Z" fill="#5C4033"/>\n  <path d="M46 17 Q46 12 44 14 L44 20 Q46 20 46 17Z" fill="#5C4033"/>\n  <circle cx="27" cy="20" r="2" fill="#333333"/>\n  <circle cx="37" cy="20" r="2" fill="#333333"/>\n  <path d="M29 26 Q32 29 35 26" stroke="#333333" stroke-width="1.5" fill="none" stroke-linecap="round"/>\n  <rect x="22" y="30" width="20" height="8" rx="4" fill="#FFCC99"/>',wt='<rect x="18" y="36" width="28" height="24" rx="6" fill="#FF6B6B"/>',_t='\n  <rect x="8" y="38" width="10" height="20" rx="5" fill="#FFB84D"/>\n  <rect x="46" y="38" width="10" height="20" rx="5" fill="#FFB84D"/>\n  <circle cx="13" cy="60" r="4" fill="#FFCC99"/>\n  <circle cx="51" cy="60" r="4" fill="#FFCC99"/>',vt='\n  <rect x="20" y="60" width="10" height="24" rx="4" fill="#5B8DEF"/>\n  <rect x="34" y="60" width="10" height="24" rx="4" fill="#5B8DEF"/>\n  <rect x="18" y="82" width="14" height="6" rx="3" fill="#3D3D3D"/>\n  <rect x="32" y="82" width="14" height="6" rx="3" fill="#3D3D3D"/>';function At(...t){return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 96">'+t.join("")+"</svg>"}const bt='\n  <ellipse cx="32" cy="18" rx="12" ry="13" fill="#FFCC99"/>\n  <path d="M20 15 Q20 4 32 4 Q44 4 44 15 L44 12 Q44 2 32 2 Q20 2 20 12 Z" fill="#5C4033"/>\n  <path d="M18 15 Q18 10 20 12 L20 18 Q18 18 18 15Z" fill="#5C4033"/>\n  <path d="M46 15 Q46 10 44 12 L44 18 Q46 18 46 15Z" fill="#5C4033"/>\n  <circle cx="27" cy="18" r="2" fill="#333333"/>\n  <circle cx="37" cy="18" r="2" fill="#333333"/>\n  <path d="M29 24 Q32 27 35 24" stroke="#333333" stroke-width="1.5" fill="none" stroke-linecap="round"/>\n  <rect x="22" y="28" width="20" height="8" rx="4" fill="#FFCC99"/>',Ct='\n  <ellipse cx="32" cy="20" rx="12" ry="13" fill="#FFCC99"/>\n  <path d="M20 17 Q20 6 32 6 Q44 6 44 17 L44 14 Q44 4 32 4 Q20 4 20 14 Z" fill="#5C4033"/>\n  <path d="M18 17 Q18 12 20 14 L20 20 Q18 20 18 17Z" fill="#5C4033"/>\n  <path d="M46 17 Q46 12 44 14 L44 20 Q46 20 46 17Z" fill="#5C4033"/>\n  <line x1="25" y1="20" x2="29" y2="20" stroke="#333333" stroke-width="2" stroke-linecap="round"/>\n  <line x1="35" y1="20" x2="39" y2="20" stroke="#333333" stroke-width="2" stroke-linecap="round"/>\n  <rect x="22" y="30" width="20" height="8" rx="4" fill="#FFCC99"/>',$t=At(ut,vt,wt,_t,mt),Et=At(ut,vt,wt,_t,bt),Ft=At(ut,'<rect x="20" y="60" width="10" height="24" rx="4" fill="#5B8DEF"/>\n  <rect x="38" y="64" width="10" height="20" rx="4" fill="#5B8DEF"/>\n  <rect x="18" y="82" width="14" height="6" rx="3" fill="#3D3D3D"/>\n  <rect x="36" y="82" width="14" height="6" rx="3" fill="#3D3D3D"/>',wt,'<rect x="8" y="36" width="10" height="20" rx="5" fill="#FFB84D"/>\n  <rect x="46" y="40" width="10" height="20" rx="5" fill="#FFB84D"/>\n  <circle cx="13" cy="58" r="4" fill="#FFCC99"/>\n  <circle cx="51" cy="62" r="4" fill="#FFCC99"/>',mt),Dt=At(ut,'<rect x="24" y="60" width="10" height="24" rx="4" fill="#5B8DEF"/>\n  <rect x="30" y="60" width="10" height="24" rx="4" fill="#5B8DEF"/>\n  <rect x="22" y="82" width="14" height="6" rx="3" fill="#3D3D3D"/>\n  <rect x="28" y="82" width="14" height="6" rx="3" fill="#3D3D3D"/>',wt,_t,bt),St=At(ut,'<rect x="16" y="64" width="10" height="20" rx="4" fill="#5B8DEF"/>\n  <rect x="34" y="60" width="10" height="24" rx="4" fill="#5B8DEF"/>\n  <rect x="14" y="82" width="14" height="6" rx="3" fill="#3D3D3D"/>\n  <rect x="32" y="82" width="14" height="6" rx="3" fill="#3D3D3D"/>',wt,'<rect x="8" y="40" width="10" height="20" rx="5" fill="#FFB84D"/>\n  <rect x="46" y="36" width="10" height="20" rx="5" fill="#FFB84D"/>\n  <circle cx="13" cy="62" r="4" fill="#FFCC99"/>\n  <circle cx="51" cy="58" r="4" fill="#FFCC99"/>',mt),Bt=Dt;function Rt(t){return t.replace('viewBox="0 0 64 96"','viewBox="0 0 64 96" style="transform: scaleX(-1)"')}const kt='\n  <rect x="20" y="60" width="10" height="16" rx="4" fill="#5B8DEF"/>\n  <rect x="34" y="60" width="10" height="16" rx="4" fill="#5B8DEF"/>\n  <rect x="16" y="76" width="14" height="8" rx="4" fill="#5B8DEF"/>\n  <rect x="34" y="76" width="14" height="8" rx="4" fill="#5B8DEF"/>\n  <rect x="14" y="82" width="16" height="6" rx="3" fill="#3D3D3D"/>\n  <rect x="34" y="82" width="16" height="6" rx="3" fill="#3D3D3D"/>',It={idle:[$t,Et],walkRight:[Ft,Dt,St,Bt],walkLeft:[Rt(Ft),Rt(Dt),Rt(St),Rt(Bt)],officeIdle:[At(ut,vt,wt,'<rect x="8" y="38" width="10" height="16" rx="5" fill="#FFB84D"/>\n  <rect x="46" y="38" width="10" height="16" rx="5" fill="#FFB84D"/>\n  <circle cx="13" cy="56" r="4" fill="#FFCC99"/>\n  <circle cx="51" cy="56" r="4" fill="#FFCC99"/>',mt),At(ut,vt,wt,'<rect x="6" y="36" width="10" height="16" rx="5" fill="#FFB84D"/>\n  <rect x="46" y="38" width="10" height="16" rx="5" fill="#FFB84D"/>\n  <circle cx="11" cy="54" r="4" fill="#FFCC99"/>\n  <circle cx="51" cy="56" r="4" fill="#FFCC99"/>',mt),At(ut,vt,wt,'<rect x="8" y="38" width="10" height="16" rx="5" fill="#FFB84D"/>\n  <rect x="48" y="36" width="10" height="16" rx="5" fill="#FFB84D"/>\n  <circle cx="13" cy="56" r="4" fill="#FFCC99"/>\n  <circle cx="53" cy="54" r="4" fill="#FFCC99"/>',mt)],kitchenIdle:[At(ut,vt,wt,'<rect x="8" y="38" width="10" height="20" rx="5" fill="#FFB84D"/>\n  <circle cx="13" cy="60" r="4" fill="#FFCC99"/>\n  <rect x="46" y="34" width="10" height="16" rx="5" fill="#FFB84D"/>\n  <circle cx="51" cy="52" r="4" fill="#FFCC99"/>\n  <rect x="53" y="48" width="3" height="14" rx="1.5" fill="#808080"/>',mt),At(ut,vt,wt,'<rect x="8" y="38" width="10" height="20" rx="5" fill="#FFB84D"/>\n  <circle cx="13" cy="60" r="4" fill="#FFCC99"/>\n  <rect x="46" y="36" width="10" height="16" rx="5" fill="#FFB84D"/>\n  <circle cx="51" cy="54" r="4" fill="#FFCC99"/>\n  <rect x="55" y="50" width="3" height="14" rx="1.5" fill="#808080"/>',mt),At(ut,vt,wt,'<rect x="8" y="38" width="10" height="20" rx="5" fill="#FFB84D"/>\n  <circle cx="13" cy="60" r="4" fill="#FFCC99"/>\n  <rect x="46" y="34" width="10" height="16" rx="5" fill="#FFB84D"/>\n  <circle cx="51" cy="52" r="4" fill="#FFCC99"/>\n  <rect x="51" y="46" width="3" height="14" rx="1.5" fill="#808080"/>',mt)],livingRoomIdle:[At(ut,kt,wt,'<rect x="6" y="38" width="12" height="16" rx="5" fill="#FFB84D"/>\n  <rect x="46" y="38" width="12" height="16" rx="5" fill="#FFB84D"/>\n  <circle cx="12" cy="56" r="4" fill="#FFCC99"/>\n  <circle cx="52" cy="56" r="4" fill="#FFCC99"/>',mt),At(ut,kt,wt,'<rect x="4" y="40" width="12" height="16" rx="5" fill="#FFB84D"/>\n  <rect x="48" y="40" width="12" height="16" rx="5" fill="#FFB84D"/>\n  <circle cx="10" cy="58" r="4" fill="#FFCC99"/>\n  <circle cx="54" cy="58" r="4" fill="#FFCC99"/>',bt)],bedroomIdle:[At(ut,vt,wt,_t,Ct,'<text x="48" y="12" font-size="10" fill="#5B8DEF" font-family="sans-serif" font-weight="bold">Z</text>'),At(ut,vt,wt,_t,Ct,'<text x="50" y="8" font-size="8" fill="#5B8DEF" font-family="sans-serif" font-weight="bold">z</text>\n  <text x="44" y="16" font-size="10" fill="#5B8DEF" font-family="sans-serif" font-weight="bold">Z</text>')]};var Tt;!function(t){t.IDLE="IDLE",t.EXIT_WALK="EXIT_WALK",t.TRANSITION="TRANSITION",t.ENTER_WALK="ENTER_WALK"}(Tt||(Tt={}));const Pt={office:55,kitchen:40,living_room:25,bedroom:28},Nt=125,Lt={office:3,kitchen:3,living_room:2,bedroom:2};function Ot(t){return t?Pt[t]??50:50}function Mt(t,e){return e===t.currentRoom?t:t.currentRoom?t.phase===Tt.EXIT_WALK||t.phase===Tt.TRANSITION?{...t,targetRoom:e}:{...t,targetRoom:e,phase:Tt.EXIT_WALK,progress:0,frameIndex:0,outgoingRoom:t.currentRoom,facingRight:!0}:{...t,targetRoom:e,phase:Tt.TRANSITION,progress:0,crossfadeProgress:0,visible:!1}}function Gt(t,e){const i=Math.min(e,200);if(t.phase===Tt.IDLE){const e=(r=t.currentRoom)?Lt[r]??2:2,n=t.progress+i;return n>=Nt?{...t,frameIndex:(t.frameIndex+1)%e,progress:n-Nt}:{...t,progress:n}}var r;if(t.phase===Tt.EXIT_WALK){const e=t.avatarX+.06*i,r=t.progress+i,n=r>=Nt?(t.frameIndex+1)%4:t.frameIndex,o=r>=Nt?r-Nt:r;return e>=110?{...t,phase:Tt.TRANSITION,avatarX:110,visible:!1,progress:0,crossfadeProgress:0,frameIndex:0,outgoingRoom:t.currentRoom}:{...t,avatarX:e,frameIndex:n,progress:o,facingRight:!0}}if(t.phase===Tt.TRANSITION){const e=t.crossfadeProgress+i/400;return e>=1?{...t,phase:Tt.ENTER_WALK,currentRoom:t.targetRoom,crossfadeProgress:1,avatarX:-10,visible:!0,progress:0,frameIndex:0,facingRight:!0}:{...t,crossfadeProgress:e}}if(t.phase===Tt.ENTER_WALK){const e=Ot(t.currentRoom),r=t.avatarX+.06*i,n=t.progress+i,o=n>=Nt?(t.frameIndex+1)%4:t.frameIndex,s=n>=Nt?n-Nt:n;if(r>=e){const i={...t,phase:Tt.IDLE,avatarX:e,progress:0,frameIndex:0,targetRoom:null,outgoingRoom:null};return t.targetRoom&&t.targetRoom!==t.currentRoom?Mt(i,t.targetRoom):i}return{...t,avatarX:r,frameIndex:o,progress:s,facingRight:!0}}return t}class Ut{constructor(t){var e;this._rafId=null,this._lastTimestamp=null,this._state={phase:Tt.IDLE,currentRoom:e??null,targetRoom:null,avatarX:Ot(null),progress:0,frameIndex:0,facingRight:!0,visible:!0,outgoingRoom:null,crossfadeProgress:0},this._onStateChange=t}getState(){return this._state}changeRoom(t){this._state=Mt(this._state,t),this._onStateChange(this._state)}start(){null===this._rafId&&(this._lastTimestamp=null,this._rafId=requestAnimationFrame(t=>this._loop(t)))}stop(){null!==this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._lastTimestamp=null}_loop(t){if(null!==this._lastTimestamp){const e=t-this._lastTimestamp,i=this._state;this._state=Gt(this._state,e),this._state!==i&&this._onStateChange(this._state)}this._lastTimestamp=t,this._rafId=requestAnimationFrame(t=>this._loop(t))}}const Wt={office:"officeIdle",kitchen:"kitchenIdle",living_room:"livingRoomIdle",bedroom:"bedroomIdle"};class zt extends lt{setConfig(t){if(!t.entity)throw new Error("Please define an entity");if(!t.entity.startsWith("device_tracker."))throw new Error("Entity must be a device_tracker entity (e.g., device_tracker.bermuda_xxx)");this._config=t}set hass(t){if(this._hass=t,!this._config)return;const e=t.states[this._config.entity];if(!e)return this._error!==`Entity not found: ${this._config.entity}`&&(this._error=`Entity not found: ${this._config.entity}`),void(void 0!==this._entityState&&(this._entityState=void 0));if("unavailable"===e.state)return"Bermuda integration is unavailable. Check that the Bermuda BLE integration is enabled."!==this._error&&(this._error="Bermuda integration is unavailable. Check that the Bermuda BLE integration is enabled."),void(void 0!==this._entityState&&(this._entityState=void 0));if("not_home"===e.state)return this._entityState&&"Not detected"!==this._entityState&&(this._lastRoom=this._entityState),void 0!==this._error&&(this._error=void 0),void("Not detected"!==this._entityState&&(this._entityState="Not detected"));if(e.attributes?.area&&(this._lastRoom=e.attributes?.area),void 0!==this._error&&(this._error=void 0),this._entityState!==e.attributes?.area){if(e.attributes?.area&&this._engine){const t=e.attributes.area.toLowerCase().replace(/\s+/g,"_");this._engine.changeRoom(t)}this._entityState=e.attributes?.area}}getCardSize(){return 3}static getConfigElement(){return document.createElement("minime-card-editor")}static getStubConfig(){return{entity:"",name:"MiniMe",areas:["office","kitchen","living_room","bedroom"]}}_getCurrentFrame(){const t=this._animState;if(!t)return It.idle[0];const e=t.currentRoom;if(t.phase===Tt.EXIT_WALK||t.phase===Tt.ENTER_WALK)return It.walkRight[t.frameIndex%It.walkRight.length];if(e){const i=Wt[e];if(i&&It[i]){const e=It[i];return e[t.frameIndex%e.length]}}return It.idle[t.frameIndex%It.idle.length]}render(){if(!this._config)return z``;if(this._error)return z`
        <ha-card>
          <div class="card-content error-content">
            <div class="error">
              <span class="error-icon">!</span>
              <span class="error-message">${this._error}</span>
            </div>
          </div>
        </ha-card>
      `;const t=this._entityState,e=t=>t.toLowerCase().replace(/\s+/g,"_"),i="Not detected"===t;let r,n,o=!1;if(i){const t=this._lastRoom?e(this._lastRoom):void 0;t&&yt[t]?(r=yt[t],n=this._lastRoom,o=!0):n="Not detected"}else t&&yt[e(t)]?(r=yt[e(t)],n=t):n=t||"Unknown";return z`
      <ha-card>
        <div class="scene-container">
          ${r?z`
                <div class="room-background ${o?"faded":""}">
                  ${gt(r)}
                </div>
              `:z`
                <div class="no-room-background">
                  <div class="placeholder-text">No room background</div>
                </div>
              `}
          
          ${!i&&r?z`
                <div class="avatar" style="left: ${this._animState?this._animState.avatarX:50}%">
                  ${gt(this._getCurrentFrame())}
                </div>
              `:""}
          
          ${i&&!r?z`
                <div class="not-detected">
                  <div>Not detected</div>
                </div>
              `:""}
          
          <div class="room-label">${n.replace(/_/g," ")}</div>
        </div>
      </ha-card>
    `}connectedCallback(){super.connectedCallback(),this._engine=new Ut(t=>{this._animState=t}),this._engine.start()}disconnectedCallback(){super.disconnectedCallback(),this._engine&&this._engine.stop()}}zt.styles=s`
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
      /* 16:10 aspect ratio for scene */
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
      transform: translateX(-50%);
      width: 15%;
    }

    .avatar svg {
      width: 100%;
      height: auto;
      display: block;
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
  `,t([dt()],zt.prototype,"_entityState",void 0),t([dt()],zt.prototype,"_error",void 0),t([dt()],zt.prototype,"_animState",void 0);class jt extends lt{setConfig(t){this._config=t}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,i=e.configValue,r=e.value;if(!i)return;const n={...this._config,[i]:r};this._dispatchConfigChanged(n)}_areaChanged(t){if(!this._config)return;const e=t.target,i=e.value,r=e.checked,n=this._config.areas||[];let o;o=r?n.includes(i)?n:[...n,i]:n.filter(t=>t!==i);const s={...this._config,areas:o};this._dispatchConfigChanged(s)}_dispatchConfigChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){if(!this._config)return z``;const t=this._config.areas||[];return z`
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
            ${[{id:"office",label:"Office"},{id:"kitchen",label:"Kitchen"},{id:"living_room",label:"Living Room"},{id:"bedroom",label:"Bedroom"}].map(e=>z`
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
    `}}jt.styles=s`
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
  `,t([dt()],jt.prototype,"_config",void 0);const Ht={office:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">\n  <defs>\n    <linearGradient id="lofiOffW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C8B6A6"/><stop offset="100%" stop-color="#B8A696"/></linearGradient>\n    <linearGradient id="lofiOffF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#A89078"/><stop offset="100%" stop-color="#987860"/></linearGradient>\n    <radialGradient id="lofiOffG" cx="0.7" cy="0.3" r="0.4"><stop offset="0%" stop-color="#FFF5E0" stop-opacity="0.3"/><stop offset="100%" stop-color="#FFF5E0" stop-opacity="0"/></radialGradient>\n  </defs>\n  <rect width="320" height="100" fill="url(#lofiOffW)"/>\n  <rect y="100" width="320" height="100" fill="url(#lofiOffF)"/>\n  <rect width="320" height="200" fill="url(#lofiOffG)"/>\n  <rect x="220" y="20" width="60" height="45" rx="8" fill="#D4C4B0"/>\n  <rect x="225" y="25" width="50" height="35" rx="6" fill="#B8D4E3" opacity="0.6"/>\n  <rect x="100" y="105" width="90" height="8" rx="4" fill="#8B7355"/>\n  <rect x="105" y="113" width="8" height="40" rx="4" fill="#7A6245"/>\n  <rect x="180" y="113" width="8" height="40" rx="4" fill="#7A6245"/>\n  <rect x="130" y="80" width="35" height="20" rx="8" fill="#4A4A5E" opacity="0.7"/>\n  <rect x="141" y="100" width="12" height="8" rx="4" fill="#4A4A5E" opacity="0.5"/>\n  <rect x="20" y="90" width="45" height="68" rx="10" fill="#8B7355" opacity="0.6"/>\n  <rect x="25" y="96" width="35" height="18" rx="6" fill="#7A6245" opacity="0.5"/>\n  <rect x="25" y="120" width="35" height="18" rx="6" fill="#7A6245" opacity="0.5"/>\n</svg>',kitchen:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">\n  <defs>\n    <linearGradient id="lofiKitW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#D4C8B0"/><stop offset="100%" stop-color="#C4B8A0"/></linearGradient>\n    <linearGradient id="lofiKitF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C8B898"/><stop offset="100%" stop-color="#B8A880"/></linearGradient>\n    <radialGradient id="lofiKitG" cx="0.5" cy="0.4" r="0.35"><stop offset="0%" stop-color="#FFF8E8" stop-opacity="0.25"/><stop offset="100%" stop-color="#FFF8E8" stop-opacity="0"/></radialGradient>\n  </defs>\n  <rect width="320" height="100" fill="url(#lofiKitW)"/>\n  <rect y="100" width="320" height="100" fill="url(#lofiKitF)"/>\n  <rect width="320" height="200" fill="url(#lofiKitG)"/>\n  <rect x="15" y="20" width="140" height="40" rx="10" fill="#8BA88B" opacity="0.6"/>\n  <rect x="20" y="25" width="30" height="30" rx="8" fill="#9BB89B" opacity="0.5"/>\n  <rect x="55" y="25" width="30" height="30" rx="8" fill="#9BB89B" opacity="0.5"/>\n  <rect x="90" y="25" width="30" height="30" rx="8" fill="#9BB89B" opacity="0.5"/>\n  <rect x="15" y="95" width="160" height="8" rx="4" fill="#B0B0B0" opacity="0.6"/>\n  <rect x="15" y="103" width="160" height="55" rx="10" fill="#8BA88B" opacity="0.5"/>\n  <ellipse cx="45" cy="88" rx="10" ry="6" fill="#C87070" opacity="0.4"/>\n  <ellipse cx="75" cy="88" rx="10" ry="6" fill="#C87070" opacity="0.4"/>\n  <rect x="230" y="90" width="60" height="68" rx="10" fill="#C8C8C8" opacity="0.5"/>\n  <rect x="220" y="20" width="60" height="45" rx="8" fill="#D4C4B0"/>\n  <rect x="225" y="25" width="50" height="35" rx="6" fill="#A8D8EA" opacity="0.5"/>\n</svg>',living_room:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">\n  <defs>\n    <linearGradient id="lofiLivW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#D8C8A8"/><stop offset="100%" stop-color="#C8B898"/></linearGradient>\n    <linearGradient id="lofiLivF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#B09068"/><stop offset="100%" stop-color="#A08058"/></linearGradient>\n    <radialGradient id="lofiLivG" cx="0.6" cy="0.5" r="0.4"><stop offset="0%" stop-color="#FFE8C0" stop-opacity="0.3"/><stop offset="100%" stop-color="#FFE8C0" stop-opacity="0"/></radialGradient>\n  </defs>\n  <rect width="320" height="100" fill="url(#lofiLivW)"/>\n  <rect y="100" width="320" height="100" fill="url(#lofiLivF)"/>\n  <rect width="320" height="200" fill="url(#lofiLivG)"/>\n  <rect x="15" y="100" width="120" height="14" rx="8" fill="#8B4040" opacity="0.5"/>\n  <rect x="15" y="114" width="120" height="30" rx="10" fill="#B06060" opacity="0.5"/>\n  <rect x="200" y="90" width="85" height="50" rx="10" fill="#5A4030" opacity="0.5"/>\n  <rect x="205" y="95" width="75" height="22" rx="8" fill="#2A2A4E" opacity="0.5"/>\n  <rect x="160" y="118" width="70" height="8" rx="4" fill="#8B7355" opacity="0.5"/>\n  <rect x="240" y="20" width="55" height="55" rx="8" fill="#D4C4B0"/>\n  <rect x="245" y="25" width="45" height="45" rx="6" fill="#A8D8EA" opacity="0.4"/>\n  <rect x="240" y="25" width="14" height="45" rx="4" fill="#8B4040" opacity="0.3"/>\n  <rect x="281" y="25" width="14" height="45" rx="4" fill="#8B4040" opacity="0.3"/>\n</svg>',bedroom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">\n  <defs>\n    <linearGradient id="lofiBedW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C8C0D8"/><stop offset="100%" stop-color="#B8B0C8"/></linearGradient>\n    <linearGradient id="lofiBedF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9080B0"/><stop offset="100%" stop-color="#8070A0"/></linearGradient>\n    <radialGradient id="lofiBedG" cx="0.5" cy="0.5" r="0.45"><stop offset="0%" stop-color="#E8D8F0" stop-opacity="0.3"/><stop offset="100%" stop-color="#E8D8F0" stop-opacity="0"/></radialGradient>\n  </defs>\n  <rect width="320" height="100" fill="url(#lofiBedW)"/>\n  <rect y="100" width="320" height="100" fill="url(#lofiBedF)"/>\n  <rect width="320" height="200" fill="url(#lofiBedG)"/>\n  <rect x="15" y="100" width="120" height="14" rx="8" fill="#4B2080" opacity="0.4"/>\n  <rect x="15" y="114" width="120" height="35" rx="10" fill="#7B6AAE" opacity="0.4"/>\n  <ellipse cx="40" cy="98" rx="12" ry="5" fill="#E8D8A0" opacity="0.4"/>\n  <ellipse cx="70" cy="98" rx="12" ry="5" fill="#E8D8A0" opacity="0.4"/>\n  <ellipse cx="100" cy="98" rx="12" ry="5" fill="#E8D8A0" opacity="0.4"/>\n  <rect x="150" y="110" width="32" height="38" rx="8" fill="#7A5C3E" opacity="0.5"/>\n  <ellipse cx="159" cy="98" rx="10" ry="4" fill="#F0C040" opacity="0.3"/>\n  <rect x="210" y="95" width="75" height="55" rx="10" fill="#6A4C30" opacity="0.5"/>\n  <rect x="240" y="20" width="55" height="55" rx="8" fill="#D4C4B0"/>\n  <rect x="245" y="25" width="45" height="45" rx="6" fill="#B0B8D0" opacity="0.4"/>\n</svg>'};var Kt;!function(t){t.IDLE="IDLE",t.WALKING_OUT="WALKING_OUT",t.CROSSFADE="CROSSFADE",t.WALKING_IN="WALKING_IN"}(Kt||(Kt={}));const Xt={office:"studying.json",kitchen:"cooking.json",bedroom:"sleeping.json",living_room:"idle.json"};function Qt(t){return t?Xt[t]??"idle.json":"idle.json"}function qt(t,e){return e===t.currentRoom?t:t.currentRoom?t.phase===Kt.WALKING_OUT||t.phase===Kt.CROSSFADE?{...t,targetRoom:e}:{...t,targetRoom:e,phase:Kt.WALKING_OUT,outgoingRoom:t.currentRoom,lottieAnimation:"walking.json"}:{...t,targetRoom:e,phase:Kt.CROSSFADE,crossfadeProgress:0,visible:!1}}class Zt{constructor(t){this._rafId=null,this._lastTimestamp=null,this._state=function(t){const e=t??null;return{phase:Kt.IDLE,currentRoom:e,targetRoom:null,avatarX:50,lottieAnimation:Qt(e),crossfadeProgress:0,outgoingRoom:null,visible:!0}}(),this._onStateChange=t}getState(){return this._state}changeRoom(t){this._state=qt(this._state,t),this._onStateChange(this._state)}start(){null===this._rafId&&(this._lastTimestamp=null,this._rafId=requestAnimationFrame(t=>this._loop(t)))}stop(){null!==this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._lastTimestamp=null}_loop(t){if(null!==this._lastTimestamp){const e=t-this._lastTimestamp,i=this._state;this._state=function(t,e){const i=Math.min(e,200);if(t.phase===Kt.IDLE)return t;if(t.phase===Kt.WALKING_OUT){const e=t.avatarX+.06*i;return e>=110?{...t,phase:Kt.CROSSFADE,avatarX:110,visible:!1,crossfadeProgress:0,outgoingRoom:t.currentRoom}:{...t,avatarX:e}}if(t.phase===Kt.CROSSFADE){const e=t.crossfadeProgress+i/400;return e>=1?{...t,phase:Kt.WALKING_IN,currentRoom:t.targetRoom,crossfadeProgress:1,avatarX:-10,visible:!0,lottieAnimation:"walking.json"}:{...t,crossfadeProgress:e}}if(t.phase===Kt.WALKING_IN){const e=t.avatarX+.06*i;if(e>=50){const e={...t,phase:Kt.IDLE,avatarX:50,targetRoom:null,outgoingRoom:null,lottieAnimation:Qt(t.currentRoom)};return t.targetRoom&&t.targetRoom!==t.currentRoom?qt(e,t.targetRoom):e}return{...t,avatarX:e}}return t}(this._state,e),this._state!==i&&this._onStateChange(this._state)}this._lastTimestamp=t,this._rafId=requestAnimationFrame(t=>this._loop(t))}}let Vt=null;class Jt extends lt{constructor(){super(...arguments),this._lottieReady=!1}setConfig(t){if(!t.entity)throw new Error("Please define an entity");this._config=t}set hass(t){if(this._hass=t,!this._config)return;const e=t.states[this._config.entity];if(!e)return this._error!==`Entity not found: ${this._config.entity}`&&(this._error=`Entity not found: ${this._config.entity}`),void(void 0!==this._entityState&&(this._entityState=void 0));if("unavailable"===e.state)return"Entity is unavailable"!==this._error&&(this._error="Entity is unavailable"),void(void 0!==this._entityState&&(this._entityState=void 0));void 0!==this._error&&(this._error=void 0);const i=e.state.toLowerCase().replace(/\s+/g,"_");this._entityState!==i&&(this._entityState=i,this._engine&&this._engine.changeRoom(i))}getCardSize(){return 3}static getConfigElement(){return document.createElement("animated-presence-card-editor")}static getStubConfig(){return{entity:"",name:"Presence",animation_path:"/local/animations/"}}connectedCallback(){super.connectedCallback(),this._engine=new Zt(t=>{this._presenceState=t,this._syncLottieAnimation(t)}),this._engine.start(),this._initLottie()}disconnectedCallback(){super.disconnectedCallback(),this._engine&&this._engine.stop(),this._lottieAnim&&(this._lottieAnim.destroy(),this._lottieAnim=void 0)}async _initLottie(){try{this._lottiePlayer=await(window.lottie?Promise.resolve(window.lottie):Vt||(Vt=new Promise((t,e)=>{const i=document.createElement("script");i.src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js",i.onload=()=>{window.lottie?t(window.lottie):(Vt=null,e(new Error("lottie-web loaded but window.lottie not found")))},i.onerror=()=>{Vt=null,e(new Error("Failed to load lottie-web from CDN"))},document.head.appendChild(i)}),Vt)),this._lottieReady=!0}catch{this._lottieReady=!1}}_syncLottieAnimation(t){if(!this._lottiePlayer||!this._lottieReady)return;const e=t.lottieAnimation;if(e===this._currentLottieFile)return;this._lottieAnim&&(this._lottieAnim.destroy(),this._lottieAnim=void 0),this._currentLottieFile=e;const i=this.shadowRoot?.querySelector(".lottie-container");if(!i)return;const r=`${this._config?.animation_path??"/local/animations/"}${e}`;try{this._lottieAnim=this._lottiePlayer.loadAnimation({container:i,renderer:"svg",loop:!0,autoplay:!0,path:r})}catch{this._currentLottieFile=void 0}}render(){if(!this._config)return z``;if(this._error)return z`
        <ha-card>
          <div class="card-content error-content">
            <div class="error">
              <span class="error-icon">!</span>
              <span class="error-message">${this._error}</span>
            </div>
          </div>
        </ha-card>
      `;const t=this._presenceState,e=t?.currentRoom,i=t?.outgoingRoom,r=t=>t.toLowerCase().replace(/\s+/g,"_"),n=e?Ht[r(e)]:void 0,o=i?Ht[r(i)]:void 0,s=t?.phase===Kt.CROSSFADE,l=t?1-t.crossfadeProgress:1,h=t?.visible??!1,a=t?.avatarX??50,c=this._config.name||this._entityState?.replace(/_/g," ")||"Unknown";return z`
      <ha-card>
        <div class="scene-container">
          ${o&&s?z`
                <div class="room-background outgoing" style="opacity: ${l}">
                  ${gt(o)}
                </div>
              `:""}

          ${n?z`
                <div class="room-background ${s?"incoming":""}">
                  ${gt(n)}
                </div>
              `:z`
                <div class="no-room-background">
                  <div class="placeholder-text">No room background</div>
                </div>
              `}

          ${h?z`
                <div class="avatar" style="left: ${a}%">
                  <div class="lottie-container"></div>
                </div>
              `:""}

          <div class="room-label">${c}</div>
        </div>
      </ha-card>
    `}}Jt.styles=s`
    :host {
      --ap-bg: var(--card-background-color, #fff);
      --ap-text: var(--primary-text-color, #333);
      --ap-secondary: var(--secondary-text-color, #666);
      --ap-error: var(--error-color, #db4437);
    }

    ha-card {
      background: var(--ap-bg);
      color: var(--ap-text);
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

    .lottie-container {
      width: 100%;
      height: auto;
    }

    .lottie-container svg {
      width: 100%;
      height: auto;
      display: block;
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
      color: var(--ap-error);
      padding: 8px;
    }

    .error-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--ap-error);
      color: white;
      font-weight: bold;
      font-size: 14px;
      flex-shrink: 0;
    }

    .error-message {
      font-size: 0.9em;
      line-height: 1.3;
    }

    @media (min-width: 600px) {
      .scene-container {
        max-height: 300px;
        padding-bottom: 0;
        height: 250px;
      }
    }
  `,t([dt()],Jt.prototype,"_entityState",void 0),t([dt()],Jt.prototype,"_error",void 0),t([dt()],Jt.prototype,"_presenceState",void 0),t([dt()],Jt.prototype,"_lottieReady",void 0);class Yt extends lt{setConfig(t){this._config=t}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,i=e.configValue,r=e.value;if(!i)return;const n={...this._config,[i]:r};this._dispatchConfigChanged(n)}_dispatchConfigChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return this._config?z`
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

        <div class="editor-row">
          <label>
            Animation Path
            <input
              type="text"
              .value=${this._config.animation_path||"/local/animations/"}
              @input=${t=>{const e=t.target,i={...this._config,animation_path:e.value};this._dispatchConfigChanged(i)}}
            />
          </label>
        </div>
      </div>
    `:z``}}Yt.styles=s`
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
  `,t([dt()],Yt.prototype,"_config",void 0);console.info("%c MINIME-CARD %c v0.2.0 ","color: white; background: #555; font-weight: bold;","color: white; background: #007acc;"),customElements.define("minime-card",zt),customElements.define("minime-card-editor",jt),customElements.define("animated-presence-card",Jt),customElements.define("animated-presence-card-editor",Yt),window.customCards=window.customCards||[],window.customCards.push({type:"minime-card",name:"MiniMe Card",description:"Animated avatar showing your room presence"}),window.customCards.push({type:"animated-presence-card",name:"Animated Presence Card",description:"Lottie-animated presence card with lofi room backgrounds"});
