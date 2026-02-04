function t(t,e,i,h){var r,n=arguments.length,s=n<3?e:null===h?h=Object.getOwnPropertyDescriptor(e,i):h;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,h);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,h=Symbol(),r=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==h)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,h)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[h+1],t[0]);return new n(i,t,h)},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,h))(e)})(t):t,{is:o,defineProperty:c,getOwnPropertyDescriptor:a,getOwnPropertyNames:d,getOwnPropertySymbols:g,getPrototypeOf:f}=Object,y=globalThis,p=y.trustedTypes,x=p?p.emptyScript:"",u=y.reactiveElementPolyfillSupport,w=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?x:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>!o(t,e),A={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,e);void 0!==h&&c(this.prototype,t,h)}}static getPropertyDescriptor(t,e,i){const{get:h,set:r}=a(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:h,set(e){const n=h?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const t=this.properties,e=[...d(t),...g(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,h)=>{if(i)t.adoptedStyleSheets=h.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of h){const h=document.createElement("style"),r=e.litNonce;void 0!==r&&h.setAttribute("nonce",r),h.textContent=i.cssText,t.appendChild(h)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),h=this.constructor._$Eu(t,i);if(void 0!==h&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:m).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(h):this.setAttribute(h,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,h=i._$Eh.get(t);if(void 0!==h&&this._$Em!==h){const t=i.getPropertyOptions(h),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=h;const n=r.fromAttribute(e,t.type);this[h]=n??this._$Ej?.get(h)??n,this._$Em=null}}requestUpdate(t,e,i,h=!1,r){if(void 0!==t){const n=this.constructor;if(!1===h&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??_)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:h,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===h&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,h=this[e];!0!==t||this._$AL.has(e)||void 0===h||this.C(e,void 0,i,h)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[w("elementProperties")]=new Map,v[w("finalized")]=new Map,u?.({ReactiveElement:v}),(y.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,F=t=>t,b=$.trustedTypes,E=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+S,R=`<${D}>`,k=document,B=()=>k.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,I=Array.isArray,P="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,U=/>/g,M=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,H=/"/g,z=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),K=new WeakMap,q=k.createTreeWalker(k,129);function V(t,e){if(!I(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,h=[];let r,n=2===e?"<svg>":3===e?"<math>":"",s=N;for(let e=0;e<i;e++){const i=t[e];let l,o,c=-1,a=0;for(;a<i.length&&(s.lastIndex=a,o=s.exec(i),null!==o);)a=s.lastIndex,s===N?"!--"===o[1]?s=O:void 0!==o[1]?s=U:void 0!==o[2]?(z.test(o[2])&&(r=RegExp("</"+o[2],"g")),s=M):void 0!==o[3]&&(s=M):s===M?">"===o[0]?(s=r??N,c=-1):void 0===o[1]?c=-2:(c=s.lastIndex-o[2].length,l=o[1],s=void 0===o[3]?M:'"'===o[3]?H:L):s===H||s===L?s=M:s===O||s===U?s=N:(s=M,r=void 0);const d=s===M&&t[e+1].startsWith("/>")?" ":"";n+=s===N?i+R:c>=0?(h.push(l),i.slice(0,c)+C+i.slice(c)+S+d):i+S+(-2===c?e:d)}return[V(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),h]};class J{constructor({strings:t,_$litType$:e},i){let h;this.parts=[];let r=0,n=0;const s=t.length-1,l=this.parts,[o,c]=Z(t,e);if(this.el=J.createElement(o,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(h=q.nextNode())&&l.length<s;){if(1===h.nodeType){if(h.hasAttributes())for(const t of h.getAttributeNames())if(t.endsWith(C)){const e=c[n++],i=h.getAttribute(t).split(S),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?et:"?"===s[1]?it:"@"===s[1]?ht:tt}),h.removeAttribute(t)}else t.startsWith(S)&&(l.push({type:6,index:r}),h.removeAttribute(t));if(z.test(h.tagName)){const t=h.textContent.split(S),e=t.length-1;if(e>0){h.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)h.append(t[i],B()),q.nextNode(),l.push({type:2,index:++r});h.append(t[e],B())}}}else if(8===h.nodeType)if(h.data===D)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=h.data.indexOf(S,t+1));)l.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,h){if(e===W)return e;let r=void 0!==h?i._$Co?.[h]:i._$Cl;const n=T(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,h)),void 0!==h?(i._$Co??=[])[h]=r:i._$Cl=r),void 0!==r&&(e=G(t,r._$AS(t,e.values),r,h)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,h=(t?.creationScope??k).importNode(e,!0);q.currentNode=h;let r=q.nextNode(),n=0,s=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new Y(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new rt(r,this,t)),this._$AV.push(e),l=i[++s]}n!==l?.index&&(r=q.nextNode(),n++)}return q.currentNode=k,h}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,h){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=h,this._$Cv=h?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),T(t)?t===X||null==t||""===t?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>I(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==X&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,h="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(V(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===h)this._$AH.p(e);else{const t=new Q(h,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new J(t)),e}k(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,h=0;for(const r of t)h===e.length?e.push(i=new Y(this.O(B()),this.O(B()),this,this.options)):i=e[h],i._$AI(r),h++;h<e.length&&(this._$AR(i&&i._$AB.nextSibling,h),e.length=h)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=F(t).nextSibling;F(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,h,r){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=e,this._$AM=h,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=X}_$AI(t,e=this,i,h){const r=this.strings;let n=!1;if(void 0===r)t=G(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const h=t;let s,l;for(t=r[0],s=0;s<r.length-1;s++)l=G(this,h[i+s],e,s),l===W&&(l=this._$AH[s]),n||=!T(l)||l!==this._$AH[s],l===X?t=X:t!==X&&(t+=(l??"")+r[s+1]),this._$AH[s]=l}n&&!h&&this.j(t)}j(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===X?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==X)}}class ht extends tt{constructor(t,e,i,h,r){super(t,e,i,h,r),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??X)===W)return;const i=this._$AH,h=t===X&&i!==X||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==X&&(i===X||h);h&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const nt=$.litHtmlPolyfillSupport;nt?.(J,Y),($.litHtmlVersions??=[]).push("3.3.2");const st=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lt=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const h=i?.renderBefore??e;let r=h._$litPart$;if(void 0===r){const t=i?.renderBefore??null;h._$litPart$=r=new Y(e.insertBefore(B(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};lt._$litElement$=!0,lt.finalized=!0,st.litElementHydrateSupport?.({LitElement:lt});const ot=st.litElementPolyfillSupport;ot?.({LitElement:lt}),(st.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:_},at=(t=ct,e,i)=>{const{kind:h,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===h&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===h){const{name:h}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(h,r,t,!0,i)},init(e){return void 0!==e&&this.C(h,void 0,t,e),e}}}if("setter"===h){const{name:h}=i;return function(i){const r=this[h];e.call(this,i),this.requestUpdate(h,r,t,!0,i)}}throw Error("Unsupported decorator location: "+h)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function dt(t){return function(t){return(e,i)=>"object"==typeof i?at(t,e,i):((t,e,i)=>{const h=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),h?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=2;class ft{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class yt extends ft{constructor(t){if(super(t),this.it=X,t.type!==gt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===X||null==t)return this._t=void 0,this.it=t;if(t===W)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}yt.directiveName="unsafeHTML",yt.resultType=1;const pt=(t=>(...e)=>({_$litDirective$:t,values:e}))(yt),xt={office:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" shape-rendering="crispEdges">\n  \x3c!-- Floor and walls --\x3e\n  <rect x="0" y="0" width="320" height="80" fill="#87CEEB"/>\n  <rect x="0" y="80" width="320" height="120" fill="#8B7355"/>\n\n  \x3c!-- Window with light --\x3e\n  <rect x="240" y="16" width="64" height="48" fill="#FFF8DC"/>\n  <rect x="244" y="20" width="28" height="40" fill="#B0E0E6"/>\n  <rect x="276" y="20" width="28" height="40" fill="#B0E0E6"/>\n  <rect x="270" y="16" width="4" height="48" fill="#654321"/>\n  <rect x="240" y="38" width="64" height="4" fill="#654321"/>\n\n  \x3c!-- Bookshelf --\x3e\n  <rect x="16" y="88" width="48" height="80" fill="#654321"/>\n  <rect x="20" y="92" width="40" height="20" fill="#8B4513"/>\n  <rect x="24" y="96" width="8" height="12" fill="#DC143C"/>\n  <rect x="36" y="96" width="8" height="12" fill="#4169E1"/>\n  <rect x="48" y="96" width="8" height="12" fill="#228B22"/>\n  <rect x="20" y="116" width="40" height="20" fill="#8B4513"/>\n  <rect x="24" y="120" width="8" height="12" fill="#FFD700"/>\n  <rect x="36" y="120" width="8" height="12" fill="#8B4513"/>\n  <rect x="48" y="120" width="8" height="12" fill="#4169E1"/>\n  <rect x="20" y="140" width="40" height="24" fill="#8B4513"/>\n  <rect x="24" y="144" width="8" height="16" fill="#228B22"/>\n  <rect x="36" y="144" width="8" height="16" fill="#DC143C"/>\n  <rect x="48" y="144" width="8" height="16" fill="#4169E1"/>\n\n  \x3c!-- Desk --\x3e\n  <rect x="112" y="112" width="96" height="8" fill="#8B4513"/>\n  <rect x="112" y="120" width="8" height="48" fill="#654321"/>\n  <rect x="200" y="120" width="8" height="48" fill="#654321"/>\n\n  \x3c!-- Monitor on desk --\x3e\n  <rect x="140" y="88" width="48" height="4" fill="#2F4F4F"/>\n  <rect x="144" y="68" width="40" height="20" fill="#000080"/>\n  <rect x="148" y="72" width="32" height="12" fill="#4169E1"/>\n  <rect x="160" y="92" width="8" height="20" fill="#2F4F4F"/>\n\n  \x3c!-- Office chair --\x3e\n  <rect x="224" y="120" width="32" height="8" fill="#4169E1"/>\n  <rect x="232" y="108" width="16" height="12" fill="#4169E1"/>\n  <rect x="236" y="128" width="8" height="24" fill="#696969"/>\n  <rect x="228" y="152" width="8" height="16" fill="#696969"/>\n  <rect x="244" y="152" width="8" height="16" fill="#696969"/>\n</svg>',kitchen:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" shape-rendering="crispEdges">\n  \x3c!-- Floor and walls --\x3e\n  <rect x="0" y="0" width="320" height="80" fill="#F5DEB3"/>\n  <rect x="0" y="80" width="320" height="120" fill="#E8D5B7"/>\n\n  \x3c!-- Window --\x3e\n  <rect x="240" y="16" width="64" height="48" fill="#FFF8DC"/>\n  <rect x="244" y="20" width="28" height="40" fill="#87CEEB"/>\n  <rect x="276" y="20" width="28" height="40" fill="#87CEEB"/>\n  <rect x="270" y="16" width="4" height="48" fill="#8B7355"/>\n  <rect x="240" y="38" width="64" height="4" fill="#8B7355"/>\n\n  \x3c!-- Upper cabinets --\x3e\n  <rect x="16" y="16" width="160" height="48" fill="#90EE90"/>\n  <rect x="20" y="20" width="36" height="40" fill="#98FB98"/>\n  <rect x="24" y="36" width="4" height="8" fill="#DAA520"/>\n  <rect x="60" y="20" width="36" height="40" fill="#98FB98"/>\n  <rect x="64" y="36" width="4" height="8" fill="#DAA520"/>\n  <rect x="100" y="20" width="36" height="40" fill="#98FB98"/>\n  <rect x="104" y="36" width="4" height="8" fill="#DAA520"/>\n  <rect x="140" y="20" width="32" height="40" fill="#98FB98"/>\n  <rect x="144" y="36" width="4" height="8" fill="#DAA520"/>\n\n  \x3c!-- Counter --\x3e\n  <rect x="16" y="96" width="176" height="8" fill="#D3D3D3"/>\n  <rect x="16" y="104" width="176" height="64" fill="#90EE90"/>\n  <rect x="20" y="108" width="40" height="52" fill="#98FB98"/>\n  <rect x="24" y="128" width="4" height="8" fill="#DAA520"/>\n  <rect x="64" y="108" width="40" height="52" fill="#98FB98"/>\n  <rect x="68" y="128" width="4" height="8" fill="#DAA520"/>\n  <rect x="108" y="108" width="40" height="52" fill="#98FB98"/>\n  <rect x="112" y="128" width="4" height="8" fill="#DAA520"/>\n  <rect x="152" y="108" width="36" height="52" fill="#98FB98"/>\n  <rect x="156" y="128" width="4" height="8" fill="#DAA520"/>\n\n  \x3c!-- Stove burners on counter --\x3e\n  <rect x="28" y="88" width="12" height="8" fill="#696969"/>\n  <rect x="48" y="88" width="12" height="8" fill="#696969"/>\n  <rect x="28" y="72" width="12" height="12" fill="#DC143C"/>\n  <rect x="48" y="72" width="12" height="12" fill="#DC143C"/>\n\n  \x3c!-- Sink --\x3e\n  <rect x="120" y="88" width="32" height="8" fill="#C0C0C0"/>\n  <rect x="124" y="84" width="8" height="4" fill="#C0C0C0"/>\n\n  \x3c!-- Fridge --\x3e\n  <rect x="224" y="88" width="64" height="80" fill="#DCDCDC"/>\n  <rect x="228" y="92" width="56" height="36" fill="#F0F0F0"/>\n  <rect x="248" y="108" width="4" height="8" fill="#696969"/>\n  <rect x="228" y="132" width="56" height="32" fill="#F0F0F0"/>\n  <rect x="248" y="144" width="4" height="8" fill="#696969"/>\n</svg>',living_room:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" shape-rendering="crispEdges">\n  \x3c!-- Floor and walls --\x3e\n  <rect x="0" y="0" width="320" height="80" fill="#FFE4B5"/>\n  <rect x="0" y="80" width="320" height="120" fill="#CD853F"/>\n\n  \x3c!-- Window with curtains --\x3e\n  <rect x="240" y="16" width="64" height="64" fill="#FFF8DC"/>\n  <rect x="240" y="20" width="16" height="56" fill="#8B4513"/>\n  <rect x="260" y="20" width="24" height="56" fill="#87CEEB"/>\n  <rect x="288" y="20" width="16" height="56" fill="#8B4513"/>\n\n  \x3c!-- Entertainment center --\x3e\n  <rect x="200" y="88" width="96" height="56" fill="#654321"/>\n  <rect x="204" y="92" width="88" height="24" fill="#000000"/>\n  <rect x="208" y="96" width="80" height="16" fill="#4169E1"/>\n  <rect x="204" y="120" width="28" height="20" fill="#8B4513"/>\n  <rect x="236" y="120" width="28" height="20" fill="#8B4513"/>\n  <rect x="268" y="120" width="24" height="20" fill="#8B4513"/>\n\n  \x3c!-- Coffee table --\x3e\n  <rect x="88" y="120" width="80" height="8" fill="#8B4513"/>\n  <rect x="92" y="128" width="8" height="24" fill="#654321"/>\n  <rect x="156" y="128" width="8" height="24" fill="#654321"/>\n  <rect x="100" y="124" width="56" height="4" fill="#DAA520"/>\n\n  \x3c!-- Couch --\x3e\n  <rect x="16" y="104" width="128" height="16" fill="#8B0000"/>\n  <rect x="16" y="120" width="128" height="32" fill="#DC143C"/>\n  <rect x="16" y="152" width="16" height="16" fill="#8B0000"/>\n  <rect x="128" y="152" width="16" height="16" fill="#8B0000"/>\n  <rect x="20" y="96" width="16" height="8" fill="#DC143C"/>\n  <rect x="44" y="96" width="16" height="8" fill="#DC143C"/>\n  <rect x="68" y="96" width="16" height="8" fill="#DC143C"/>\n  <rect x="92" y="96" width="16" height="8" fill="#DC143C"/>\n  <rect x="116" y="96" width="16" height="8" fill="#DC143C"/>\n\n  \x3c!-- Floor lamp --\x3e\n  <rect x="176" y="88" width="8" height="64" fill="#DAA520"/>\n  <rect x="172" y="84" width="16" height="4" fill="#FFD700"/>\n  <rect x="168" y="76" width="24" height="8" fill="#FFA500"/>\n  <rect x="172" y="152" width="8" height="16" fill="#654321"/>\n</svg>',bedroom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" shape-rendering="crispEdges">\n  \x3c!-- Floor and walls --\x3e\n  <rect x="0" y="0" width="320" height="80" fill="#E6E6FA"/>\n  <rect x="0" y="80" width="320" height="120" fill="#9370DB"/>\n\n  \x3c!-- Window with curtains --\x3e\n  <rect x="240" y="16" width="64" height="64" fill="#FFF8DC"/>\n  <rect x="240" y="20" width="16" height="56" fill="#4B0082"/>\n  <rect x="260" y="20" width="24" height="56" fill="#B0C4DE"/>\n  <rect x="288" y="20" width="16" height="56" fill="#4B0082"/>\n\n  \x3c!-- Bed --\x3e\n  <rect x="16" y="104" width="128" height="16" fill="#4B0082"/>\n  <rect x="16" y="120" width="128" height="40" fill="#6A5ACD"/>\n  <rect x="24" y="92" width="16" height="12" fill="#F0E68C"/>\n  <rect x="48" y="92" width="16" height="12" fill="#F0E68C"/>\n  <rect x="72" y="92" width="16" height="12" fill="#F0E68C"/>\n  <rect x="96" y="92" width="16" height="12" fill="#F0E68C"/>\n  <rect x="120" y="92" width="16" height="12" fill="#F0E68C"/>\n  <rect x="16" y="160" width="16" height="8" fill="#4B0082"/>\n  <rect x="128" y="160" width="16" height="8" fill="#4B0082"/>\n\n  \x3c!-- Nightstand with lamp --\x3e\n  <rect x="160" y="120" width="32" height="40" fill="#654321"/>\n  <rect x="164" y="124" width="24" height="12" fill="#8B4513"/>\n  <rect x="172" y="128" width="2" height="4" fill="#DAA520"/>\n  <rect x="164" y="140" width="24" height="16" fill="#8B4513"/>\n  <rect x="172" y="148" width="2" height="4" fill="#DAA520"/>\n  <rect x="172" y="108" width="8" height="12" fill="#DAA520"/>\n  <rect x="168" y="104" width="16" height="4" fill="#FFD700"/>\n  <rect x="164" y="96" width="24" height="8" fill="#FFA500"/>\n\n  \x3c!-- Dresser --\x3e\n  <rect x="208" y="96" width="80" height="64" fill="#654321"/>\n  <rect x="212" y="100" width="72" height="20" fill="#8B4513"/>\n  <rect x="240" y="108" width="4" height="4" fill="#DAA520"/>\n  <rect x="256" y="108" width="4" height="4" fill="#DAA520"/>\n  <rect x="212" y="124" width="72" height="20" fill="#8B4513"/>\n  <rect x="240" y="132" width="4" height="4" fill="#DAA520"/>\n  <rect x="256" y="132" width="4" height="4" fill="#DAA520"/>\n  <rect x="212" y="148" width="72" height="8" fill="#8B4513"/>\n</svg>'},ut='<ellipse cx="16" cy="46" rx="10" ry="2" fill="#00000033"/>',wt='\n  <rect x="13" y="14" width="6" height="4" fill="#FFA07A"/>\n  <rect x="11" y="6" width="10" height="8" fill="#FFA07A"/>\n  <rect x="11" y="4" width="10" height="2" fill="#654321"/>\n  <rect x="10" y="6" width="1" height="4" fill="#654321"/>\n  <rect x="21" y="6" width="1" height="4" fill="#654321"/>\n  <rect x="13" y="9" width="2" height="2" fill="#000000"/>\n  <rect x="17" y="9" width="2" height="2" fill="#000000"/>\n  <rect x="14" y="12" width="1" height="1" fill="#000000"/>\n  <rect x="15" y="13" width="2" height="1" fill="#000000"/>\n  <rect x="17" y="12" width="1" height="1" fill="#000000"/>',mt='<rect x="9" y="18" width="14" height="14" fill="#DC143C"/>',_t='\n  <rect x="6" y="20" width="3" height="10" fill="#FFD700"/>\n  <rect x="23" y="20" width="3" height="10" fill="#FFD700"/>\n  <rect x="6" y="30" width="3" height="2" fill="#FFA07A"/>\n  <rect x="23" y="30" width="3" height="2" fill="#FFA07A"/>',At='\n  <rect x="10" y="32" width="5" height="12" fill="#4169E1"/>\n  <rect x="17" y="32" width="5" height="12" fill="#4169E1"/>\n  <rect x="10" y="44" width="5" height="2" fill="#2F4F4F"/>\n  <rect x="17" y="44" width="5" height="2" fill="#2F4F4F"/>';function vt(...t){return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 48" shape-rendering="crispEdges">'+t.join("")+"</svg>"}const $t=vt(ut,At,mt,_t,wt),Ft=vt(ut,At,mt,_t,'<rect x="13" y="13" width="6" height="4" fill="#FFA07A"/>\n  <rect x="11" y="5" width="10" height="8" fill="#FFA07A"/>\n  <rect x="11" y="3" width="10" height="2" fill="#654321"/>\n  <rect x="10" y="5" width="1" height="4" fill="#654321"/>\n  <rect x="21" y="5" width="1" height="4" fill="#654321"/>\n  <rect x="13" y="8" width="2" height="2" fill="#000000"/>\n  <rect x="17" y="8" width="2" height="2" fill="#000000"/>\n  <rect x="14" y="11" width="1" height="1" fill="#000000"/>\n  <rect x="15" y="12" width="2" height="1" fill="#000000"/>\n  <rect x="17" y="11" width="1" height="1" fill="#000000"/>'),bt=vt(ut,'<rect x="10" y="32" width="5" height="12" fill="#4169E1"/>\n  <rect x="19" y="34" width="5" height="10" fill="#4169E1"/>\n  <rect x="10" y="44" width="5" height="2" fill="#2F4F4F"/>\n  <rect x="19" y="44" width="5" height="2" fill="#2F4F4F"/>',mt,'<rect x="6" y="19" width="3" height="10" fill="#FFD700"/>\n  <rect x="23" y="21" width="3" height="10" fill="#FFD700"/>\n  <rect x="6" y="29" width="3" height="2" fill="#FFA07A"/>\n  <rect x="23" y="31" width="3" height="2" fill="#FFA07A"/>',wt),Et=vt(ut,'<rect x="12" y="32" width="5" height="12" fill="#4169E1"/>\n  <rect x="15" y="32" width="5" height="12" fill="#4169E1"/>\n  <rect x="12" y="44" width="5" height="2" fill="#2F4F4F"/>\n  <rect x="15" y="44" width="5" height="2" fill="#2F4F4F"/>',mt,_t,'<rect x="13" y="13" width="6" height="4" fill="#FFA07A"/>\n  <rect x="11" y="5" width="10" height="8" fill="#FFA07A"/>\n  <rect x="11" y="3" width="10" height="2" fill="#654321"/>\n  <rect x="10" y="5" width="1" height="4" fill="#654321"/>\n  <rect x="21" y="5" width="1" height="4" fill="#654321"/>\n  <rect x="13" y="8" width="2" height="2" fill="#000000"/>\n  <rect x="17" y="8" width="2" height="2" fill="#000000"/>\n  <rect x="14" y="11" width="1" height="1" fill="#000000"/>\n  <rect x="15" y="12" width="2" height="1" fill="#000000"/>\n  <rect x="17" y="11" width="1" height="1" fill="#000000"/>'),Ct=vt(ut,'<rect x="8" y="34" width="5" height="10" fill="#4169E1"/>\n  <rect x="17" y="32" width="5" height="12" fill="#4169E1"/>\n  <rect x="8" y="44" width="5" height="2" fill="#2F4F4F"/>\n  <rect x="17" y="44" width="5" height="2" fill="#2F4F4F"/>',mt,'<rect x="6" y="21" width="3" height="10" fill="#FFD700"/>\n  <rect x="23" y="19" width="3" height="10" fill="#FFD700"/>\n  <rect x="6" y="31" width="3" height="2" fill="#FFA07A"/>\n  <rect x="23" y="29" width="3" height="2" fill="#FFA07A"/>',wt),St=Et;function Dt(t){return t.replace('viewBox="0 0 32 48"','viewBox="0 0 32 48" style="transform: scaleX(-1)"')}const Rt='\n  <rect x="10" y="32" width="5" height="8" fill="#4169E1"/>\n  <rect x="17" y="32" width="5" height="8" fill="#4169E1"/>\n  <rect x="8" y="40" width="7" height="4" fill="#4169E1"/>\n  <rect x="17" y="40" width="7" height="4" fill="#4169E1"/>\n  <rect x="8" y="44" width="7" height="2" fill="#2F4F4F"/>\n  <rect x="17" y="44" width="7" height="2" fill="#2F4F4F"/>',kt='\n  <rect x="13" y="14" width="6" height="4" fill="#FFA07A"/>\n  <rect x="11" y="6" width="10" height="8" fill="#FFA07A"/>\n  <rect x="11" y="4" width="10" height="2" fill="#654321"/>\n  <rect x="10" y="6" width="1" height="4" fill="#654321"/>\n  <rect x="21" y="6" width="1" height="4" fill="#654321"/>\n  <rect x="13" y="9" width="2" height="1" fill="#000000"/>\n  <rect x="17" y="9" width="2" height="1" fill="#000000"/>',Bt={idle:[$t,Ft],walkRight:[bt,Et,Ct,St],walkLeft:[Dt(bt),Dt(Et),Dt(Ct),Dt(St)],officeIdle:[vt(ut,At,mt,'<rect x="6" y="20" width="3" height="8" fill="#FFD700"/>\n  <rect x="23" y="20" width="3" height="8" fill="#FFD700"/>\n  <rect x="6" y="28" width="3" height="2" fill="#FFA07A"/>\n  <rect x="23" y="28" width="3" height="2" fill="#FFA07A"/>',wt),vt(ut,At,mt,'<rect x="5" y="19" width="3" height="8" fill="#FFD700"/>\n  <rect x="23" y="20" width="3" height="8" fill="#FFD700"/>\n  <rect x="5" y="27" width="3" height="2" fill="#FFA07A"/>\n  <rect x="23" y="28" width="3" height="2" fill="#FFA07A"/>',wt),vt(ut,At,mt,'<rect x="6" y="20" width="3" height="8" fill="#FFD700"/>\n  <rect x="24" y="19" width="3" height="8" fill="#FFD700"/>\n  <rect x="6" y="28" width="3" height="2" fill="#FFA07A"/>\n  <rect x="24" y="27" width="3" height="2" fill="#FFA07A"/>',wt)],kitchenIdle:[vt(ut,At,mt,'<rect x="6" y="20" width="3" height="10" fill="#FFD700"/>\n  <rect x="6" y="30" width="3" height="2" fill="#FFA07A"/>\n  <rect x="23" y="18" width="3" height="8" fill="#FFD700"/>\n  <rect x="23" y="26" width="3" height="2" fill="#FFA07A"/>\n  <rect x="26" y="24" width="2" height="6" fill="#808080"/>',wt),vt(ut,At,mt,'<rect x="6" y="20" width="3" height="10" fill="#FFD700"/>\n  <rect x="6" y="30" width="3" height="2" fill="#FFA07A"/>\n  <rect x="23" y="19" width="3" height="8" fill="#FFD700"/>\n  <rect x="23" y="27" width="3" height="2" fill="#FFA07A"/>\n  <rect x="27" y="25" width="2" height="6" fill="#808080"/>',wt),vt(ut,At,mt,'<rect x="6" y="20" width="3" height="10" fill="#FFD700"/>\n  <rect x="6" y="30" width="3" height="2" fill="#FFA07A"/>\n  <rect x="23" y="18" width="3" height="8" fill="#FFD700"/>\n  <rect x="23" y="26" width="3" height="2" fill="#FFA07A"/>\n  <rect x="25" y="23" width="2" height="6" fill="#808080"/>',wt)],livingRoomIdle:[vt(ut,Rt,mt,'<rect x="5" y="20" width="4" height="8" fill="#FFD700"/>\n  <rect x="23" y="20" width="4" height="8" fill="#FFD700"/>\n  <rect x="5" y="28" width="4" height="2" fill="#FFA07A"/>\n  <rect x="23" y="28" width="4" height="2" fill="#FFA07A"/>',wt),vt(ut,Rt,mt,'<rect x="4" y="21" width="4" height="8" fill="#FFD700"/>\n  <rect x="24" y="21" width="4" height="8" fill="#FFD700"/>\n  <rect x="4" y="29" width="4" height="2" fill="#FFA07A"/>\n  <rect x="24" y="29" width="4" height="2" fill="#FFA07A"/>','<rect x="13" y="13" width="6" height="4" fill="#FFA07A"/>\n  <rect x="11" y="5" width="10" height="8" fill="#FFA07A"/>\n  <rect x="11" y="3" width="10" height="2" fill="#654321"/>\n  <rect x="10" y="5" width="1" height="4" fill="#654321"/>\n  <rect x="21" y="5" width="1" height="4" fill="#654321"/>\n  <rect x="13" y="8" width="2" height="2" fill="#000000"/>\n  <rect x="17" y="8" width="2" height="2" fill="#000000"/>\n  <rect x="14" y="11" width="1" height="1" fill="#000000"/>\n  <rect x="15" y="12" width="2" height="1" fill="#000000"/>\n  <rect x="17" y="11" width="1" height="1" fill="#000000"/>')],bedroomIdle:[vt(ut,At,mt,_t,kt,'<text x="24" y="6" font-size="5" fill="#4169E1" font-family="monospace">Z</text>'),vt(ut,At,mt,_t,kt,'<text x="25" y="4" font-size="4" fill="#4169E1" font-family="monospace">z</text>\n  <text x="22" y="8" font-size="5" fill="#4169E1" font-family="monospace">Z</text>')]};var Tt;!function(t){t.IDLE="IDLE",t.EXIT_WALK="EXIT_WALK",t.TRANSITION="TRANSITION",t.ENTER_WALK="ENTER_WALK"}(Tt||(Tt={}));const It={office:55,kitchen:40,living_room:25,bedroom:28},Pt=125,Nt={office:3,kitchen:3,living_room:2,bedroom:2};function Ot(t){return t?It[t]??50:50}function Ut(t,e){return e===t.currentRoom?t:t.currentRoom?t.phase===Tt.EXIT_WALK||t.phase===Tt.TRANSITION?{...t,targetRoom:e}:{...t,targetRoom:e,phase:Tt.EXIT_WALK,progress:0,frameIndex:0,outgoingRoom:t.currentRoom,facingRight:!0}:{...t,targetRoom:e,phase:Tt.TRANSITION,progress:0,crossfadeProgress:0,visible:!1}}function Mt(t,e){const i=Math.min(e,200);if(t.phase===Tt.IDLE){const e=(h=t.currentRoom)?Nt[h]??2:2,r=t.progress+i;return r>=Pt?{...t,frameIndex:(t.frameIndex+1)%e,progress:r-Pt}:{...t,progress:r}}var h;if(t.phase===Tt.EXIT_WALK){const e=t.avatarX+.06*i,h=t.progress+i,r=h>=Pt?(t.frameIndex+1)%4:t.frameIndex,n=h>=Pt?h-Pt:h;return e>=110?{...t,phase:Tt.TRANSITION,avatarX:110,visible:!1,progress:0,crossfadeProgress:0,frameIndex:0,outgoingRoom:t.currentRoom}:{...t,avatarX:e,frameIndex:r,progress:n,facingRight:!0}}if(t.phase===Tt.TRANSITION){const e=t.crossfadeProgress+i/400;return e>=1?{...t,phase:Tt.ENTER_WALK,currentRoom:t.targetRoom,crossfadeProgress:1,avatarX:-10,visible:!0,progress:0,frameIndex:0,facingRight:!0}:{...t,crossfadeProgress:e}}if(t.phase===Tt.ENTER_WALK){const e=Ot(t.currentRoom),h=t.avatarX+.06*i,r=t.progress+i,n=r>=Pt?(t.frameIndex+1)%4:t.frameIndex,s=r>=Pt?r-Pt:r;if(h>=e){const i={...t,phase:Tt.IDLE,avatarX:e,progress:0,frameIndex:0,targetRoom:null,outgoingRoom:null};return t.targetRoom&&t.targetRoom!==t.currentRoom?Ut(i,t.targetRoom):i}return{...t,avatarX:h,frameIndex:n,progress:s,facingRight:!0}}return t}class Lt{constructor(t){var e;this._rafId=null,this._lastTimestamp=null,this._state={phase:Tt.IDLE,currentRoom:e??null,targetRoom:null,avatarX:Ot(null),progress:0,frameIndex:0,facingRight:!0,visible:!0,outgoingRoom:null,crossfadeProgress:0},this._onStateChange=t}getState(){return this._state}changeRoom(t){this._state=Ut(this._state,t),this._onStateChange(this._state)}start(){null===this._rafId&&(this._lastTimestamp=null,this._rafId=requestAnimationFrame(t=>this._loop(t)))}stop(){null!==this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._lastTimestamp=null}_loop(t){if(null!==this._lastTimestamp){const e=t-this._lastTimestamp,i=this._state;this._state=Mt(this._state,e),this._state!==i&&this._onStateChange(this._state)}this._lastTimestamp=t,this._rafId=requestAnimationFrame(t=>this._loop(t))}}const Ht={office:"officeIdle",kitchen:"kitchenIdle",living_room:"livingRoomIdle",bedroom:"bedroomIdle"};class zt extends lt{setConfig(t){if(!t.entity)throw new Error("Please define an entity");if(!t.entity.startsWith("device_tracker."))throw new Error("Entity must be a device_tracker entity (e.g., device_tracker.bermuda_xxx)");this._config=t}set hass(t){if(this._hass=t,!this._config)return;const e=t.states[this._config.entity];if(!e)return this._error!==`Entity not found: ${this._config.entity}`&&(this._error=`Entity not found: ${this._config.entity}`),void(void 0!==this._entityState&&(this._entityState=void 0));if("unavailable"===e.state)return"Bermuda integration is unavailable. Check that the Bermuda BLE integration is enabled."!==this._error&&(this._error="Bermuda integration is unavailable. Check that the Bermuda BLE integration is enabled."),void(void 0!==this._entityState&&(this._entityState=void 0));if("not_home"===e.state)return this._entityState&&"Not detected"!==this._entityState&&(this._lastRoom=this._entityState),void 0!==this._error&&(this._error=void 0),void("Not detected"!==this._entityState&&(this._entityState="Not detected"));if(e.attributes?.area&&(this._lastRoom=e.attributes?.area),void 0!==this._error&&(this._error=void 0),this._entityState!==e.attributes?.area){if(e.attributes?.area&&this._engine){const t=e.attributes.area.toLowerCase().replace(/\s+/g,"_");this._engine.changeRoom(t)}this._entityState=e.attributes?.area}}getCardSize(){return 3}static getConfigElement(){return document.createElement("minime-card-editor")}static getStubConfig(){return{entity:"",name:"MiniMe",areas:["office","kitchen","living_room","bedroom"]}}_getCurrentFrame(){const t=this._animState;if(!t)return Bt.idle[0];const e=t.currentRoom;if(t.phase===Tt.EXIT_WALK||t.phase===Tt.ENTER_WALK)return Bt.walkRight[t.frameIndex%Bt.walkRight.length];if(e){const i=Ht[e];if(i&&Bt[i]){const e=Bt[i];return e[t.frameIndex%e.length]}}return Bt.idle[t.frameIndex%Bt.idle.length]}render(){if(!this._config)return j``;if(this._error)return j`
        <ha-card>
          <div class="card-content error-content">
            <div class="error">
              <span class="error-icon">!</span>
              <span class="error-message">${this._error}</span>
            </div>
          </div>
        </ha-card>
      `;const t=this._entityState,e=t=>t.toLowerCase().replace(/\s+/g,"_"),i="Not detected"===t;let h,r,n=!1;if(i){const t=this._lastRoom?e(this._lastRoom):void 0;t&&xt[t]?(h=xt[t],r=this._lastRoom,n=!0):r="Not detected"}else t&&xt[e(t)]?(h=xt[e(t)],r=t):r=t||"Unknown";return j`
      <ha-card>
        <div class="scene-container">
          ${h?j`
                <div class="room-background ${n?"faded":""}">
                  ${pt(h)}
                </div>
              `:j`
                <div class="no-room-background">
                  <div class="placeholder-text">No room background</div>
                </div>
              `}
          
          ${!i&&h?j`
                <div class="avatar" style="left: ${this._animState?this._animState.avatarX:50}%">
                  ${pt(this._getCurrentFrame())}
                </div>
              `:""}
          
          ${i&&!h?j`
                <div class="not-detected">
                  <div>Not detected</div>
                </div>
              `:""}
          
          <div class="room-label">${r.replace(/_/g," ")}</div>
        </div>
      </ha-card>
    `}connectedCallback(){super.connectedCallback(),this._engine=new Lt(t=>{this._animState=t}),this._engine.start()}disconnectedCallback(){super.disconnectedCallback(),this._engine&&this._engine.stop()}}zt.styles=s`
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
      transform: translateX(-50%);
      width: 15%;
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
  `,t([dt()],zt.prototype,"_entityState",void 0),t([dt()],zt.prototype,"_error",void 0),t([dt()],zt.prototype,"_animState",void 0);class jt extends lt{setConfig(t){this._config=t}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,i=e.configValue,h=e.value;if(!i)return;const r={...this._config,[i]:h};this._dispatchConfigChanged(r)}_areaChanged(t){if(!this._config)return;const e=t.target,i=e.value,h=e.checked,r=this._config.areas||[];let n;n=h?r.includes(i)?r:[...r,i]:r.filter(t=>t!==i);const s={...this._config,areas:n};this._dispatchConfigChanged(s)}_dispatchConfigChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){if(!this._config)return j``;const t=this._config.areas||[];return j`
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
            ${[{id:"office",label:"Office"},{id:"kitchen",label:"Kitchen"},{id:"living_room",label:"Living Room"},{id:"bedroom",label:"Bedroom"}].map(e=>j`
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
  `,t([dt()],jt.prototype,"_config",void 0);console.info("%c MINIME-CARD %c v0.1.0 ","color: white; background: #555; font-weight: bold;","color: white; background: #007acc;"),customElements.define("minime-card",zt),customElements.define("minime-card-editor",jt),window.customCards=window.customCards||[],window.customCards.push({type:"minime-card",name:"MiniMe Card",description:"Animated pixel art avatar showing your room presence"});
