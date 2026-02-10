/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,e$4=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$5=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$5.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$4=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$4)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$3,defineProperty:e$3,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$4,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$3(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$3(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$3(t),...o$4(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$2=t=>t,s$1=t$1.trustedTypes,e$2=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$3=`lit$${Math.random().toFixed(9).slice(2)}$`,n$1="?"+o$3,r$2=`<${n$1}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P$2=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$2?e$2.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r$2:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$3+x):s+o$3+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P$2.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P$2.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$3),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H$2}),r.removeAttribute(t);}else t.startsWith(o$3)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$3),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P$2.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$3,t+1));)d.push({type:7,index:l}),t+=o$3.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P$2.currentNode=e;let h=P$2.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P$2.nextNode(),o++);}return P$2.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$2(t).nextSibling;i$2(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}let H$2 = class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}};class I extends H$2{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H$2{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H$2{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t$1.litHtmlPolyfillSupport;B?.(S,k),(t$1.litHtmlVersions??=[]).push("3.3.2");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;let i$1 = class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}};i$1._$litElement$=true,i$1["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i$1});const o$2=s.litElementPolyfillSupport;o$2?.({LitElement:i$1});(s.litElementVersions??=[]).push("4.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r$1=(t=o$1,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,true,r);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,true,r);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n({...r,state:true,attribute:false})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={CHILD:2},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i{constructor(i){if(super(i),this.it=A,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===A||null==r)return this._t=void 0,this.it=r;if(r===E)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$1(e);

/**
 * Lo-fi room backgrounds — Roku City inspired warm palette
 *
 * Proportion system (person ≈ 52 viewBox units tall, 170cm):
 *   1 viewBox unit = 3.27cm real
 *   Floor line: y=85 (avatar feet)
 *   Avatar idle position: ~x=145-155 (CSS left: 35%)
 *   ViewBox: 400x100, preserveAspectRatio="xMidYMid slice"
 *   Visible range: ~x=30 to x=370 depending on card width
 *   Gradient IDs prefixed with 'lofi' to avoid collision
 */
const lofiRoomBackgrounds = {
    office: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiOffBg" x1="0" y1="0" x2="0.3" y2="1">
      <stop offset="0%" stop-color="#1E1438"/>
      <stop offset="100%" stop-color="#16102A"/>
    </linearGradient>
    <radialGradient id="lofiOffLamp" cx="0.52" cy="0.52" r="0.2">
      <stop offset="0%" stop-color="#FFD080" stop-opacity="0.35"/>
      <stop offset="50%" stop-color="#FFBA60" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#FFBA60" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiOffMonitor" cx="0.5" cy="0.48" r="0.18">
      <stop offset="0%" stop-color="#4A90D0" stop-opacity="0.25"/>
      <stop offset="60%" stop-color="#3A70A0" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#3A70A0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiOffWindow" cx="0.3" cy="0.22" r="0.2">
      <stop offset="0%" stop-color="#C0D0E0" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#C0D0E0" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- background + light layers -->
  <rect width="400" height="100" fill="url(#lofiOffBg)"/>
  <rect width="400" height="100" fill="url(#lofiOffWindow)"/>
  <rect width="400" height="100" fill="url(#lofiOffLamp)">
    <animate attributeName="opacity" values="0.8;1;0.85;0.95;0.8" dur="5s" repeatCount="indefinite"/>
  </rect>
  <rect width="400" height="100" fill="url(#lofiOffMonitor)">
    <animate attributeName="opacity" values="0.6;1;0.7;0.9;0.6" dur="4s" repeatCount="indefinite"/>
  </rect>

  <!-- wall shadow line -->
  <line x1="0" y1="55" x2="400" y2="55" stroke="#120C20" stroke-width="0.4" opacity="0.15"/>

  <!-- baseboard -->
  <rect x="0" y="82" width="400" height="3" fill="#1A1228" opacity="0.4"/>

  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#120E22" opacity="0.8"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#3A2848" stroke-width="0.5" opacity="0.5"/>
  <line x1="0" y1="89" x2="400" y2="89" stroke="#201838" stroke-width="0.3" opacity="0.2"/>
  <line x1="0" y1="93" x2="400" y2="93" stroke="#201838" stroke-width="0.3" opacity="0.15"/>
  <line x1="0" y1="97" x2="400" y2="97" stroke="#201838" stroke-width="0.3" opacity="0.12"/>
  <line x1="80" y1="85" x2="80" y2="100" stroke="#201838" stroke-width="0.2" opacity="0.08"/>
  <line x1="160" y1="85" x2="160" y2="100" stroke="#201838" stroke-width="0.2" opacity="0.08"/>
  <line x1="240" y1="85" x2="240" y2="100" stroke="#201838" stroke-width="0.2" opacity="0.08"/>
  <line x1="320" y1="85" x2="320" y2="100" stroke="#201838" stroke-width="0.2" opacity="0.08"/>

  <!-- BOOKSHELF — 24W × 50H, x=40 -->
  <rect x="40" y="35" width="24" height="50" rx="1" fill="#3A2820" opacity="0.8"/>
  <rect x="42" y="38" width="20" height="10" fill="#2E2018" opacity="0.6"/>
  <rect x="42" y="51" width="20" height="10" fill="#2E2018" opacity="0.6"/>
  <rect x="42" y="64" width="20" height="10" fill="#2E2018" opacity="0.6"/>
  <rect x="42" y="77" width="20" height="6" fill="#2E2018" opacity="0.6"/>
  <!-- books -->
  <rect x="44" y="39" width="3" height="8" fill="#E85050" opacity="0.6"/>
  <rect x="48" y="40" width="2.5" height="7" fill="#40C060" opacity="0.55"/>
  <rect x="51.5" y="39" width="3.5" height="8" fill="#5090E0" opacity="0.55"/>
  <rect x="56" y="40.5" width="2.5" height="6.5" fill="#E8A830" opacity="0.5"/>
  <rect x="44" y="52" width="3" height="8" fill="#B060C0" opacity="0.5"/>
  <rect x="48" y="53" width="4" height="7" fill="#40B8B0" opacity="0.45"/>
  <rect x="53" y="52" width="2.5" height="8" fill="#D88030" opacity="0.45"/>
  <rect x="44" y="65" width="4" height="8" fill="#5090C0" opacity="0.4"/>
  <rect x="49" y="66" width="3" height="7" fill="#E06060" opacity="0.4"/>
  <rect x="53" y="65" width="3.5" height="8" fill="#40C060" opacity="0.35"/>

  <!-- WALL ART — x=78 -->
  <rect x="76" y="28" width="10" height="14" rx="0.8" fill="#2A1830" opacity="0.5"/>
  <rect x="77" y="29" width="8" height="12" fill="#3A2848" opacity="0.4"/>

  <!-- WALL CLOCK — x=98 -->
  <circle cx="98" cy="26" r="5" fill="#2A1830" opacity="0.6" stroke="#4A3858" stroke-width="0.5"/>
  <line x1="98" y1="26" x2="98" y2="23" stroke="#C0A880" stroke-width="0.4" opacity="0.7">
    <animateTransform attributeName="transform" type="rotate" from="0 98 26" to="360 98 26" dur="60s" repeatCount="indefinite"/>
  </line>
  <line x1="98" y1="26" x2="100" y2="25" stroke="#C0A880" stroke-width="0.3" opacity="0.5">
    <animateTransform attributeName="transform" type="rotate" from="0 98 26" to="360 98 26" dur="3600s" repeatCount="indefinite"/>
  </line>

  <!-- WINDOW — 32W × 32H, x=115 -->
  <rect x="115" y="14" width="32" height="32" rx="1.5" fill="#2A2040" opacity="0.6"/>
  <rect x="117" y="16" width="13" height="28" fill="#1E2A48" opacity="0.6"/>
  <rect x="132" y="16" width="13" height="28" fill="#1E2A48" opacity="0.6"/>
  <rect x="117" y="16" width="28" height="28" fill="#4A6A90" opacity="0.06">
    <animate attributeName="opacity" values="0.04;0.1;0.06;0.08;0.04" dur="6s" repeatCount="indefinite"/>
  </rect>
  <!-- rain -->
  <line x1="123" y1="18" x2="122" y2="24" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.3;0.15;0" dur="1.2s" repeatCount="indefinite"/>
    <animate attributeName="y1" from="16" to="42" dur="1.2s" repeatCount="indefinite"/>
    <animate attributeName="y2" from="22" to="48" dur="1.2s" repeatCount="indefinite"/>
  </line>
  <line x1="137" y1="20" x2="136" y2="25" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.25;0.12;0" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
    <animate attributeName="y1" from="16" to="42" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
    <animate attributeName="y2" from="21" to="47" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
  </line>
  <line x1="129" y1="17" x2="128" y2="22" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.22;0.1;0" dur="1.3s" repeatCount="indefinite" begin="0.7s"/>
    <animate attributeName="y1" from="16" to="42" dur="1.3s" repeatCount="indefinite" begin="0.7s"/>
    <animate attributeName="y2" from="21" to="47" dur="1.3s" repeatCount="indefinite" begin="0.7s"/>
  </line>
  <line x1="141" y1="19" x2="140" y2="24" stroke="#6AAAD0" stroke-width="0.3" opacity="0">
    <animate attributeName="opacity" values="0;0.28;0.14;0" dur="1.6s" repeatCount="indefinite" begin="0.2s"/>
    <animate attributeName="y1" from="16" to="42" dur="1.6s" repeatCount="indefinite" begin="0.2s"/>
    <animate attributeName="y2" from="21" to="47" dur="1.6s" repeatCount="indefinite" begin="0.2s"/>
  </line>
  <!-- sill + small plant -->
  <rect x="113" y="46" width="36" height="2" rx="0.5" fill="#3A2848" opacity="0.5"/>
  <rect x="125" y="42" width="4" height="4" rx="1" fill="#3A5040" opacity="0.55"/>
  <ellipse cx="127" cy="40" rx="4" ry="3" fill="#2A6838" opacity="0.5"/>

  <!-- CHAIR — x=143 (avatar sits here) -->
  <rect x="143" y="54" width="14" height="18" rx="3" fill="#3A2028" opacity="0.7"/>
  <rect x="146" y="72" width="8" height="13" rx="1.5" fill="#2E1820" opacity="0.6"/>

  <!-- DESK — 46W, surface at y=62, x=160 -->
  <rect x="160" y="62" width="46" height="2.5" rx="0.5" fill="#8B6840" opacity="0.85"/>
  <rect x="160" y="62" width="46" height="1" fill="#A07848" opacity="0.6"/>
  <rect x="163" y="64.5" width="2" height="20" fill="#6A5030" opacity="0.7"/>
  <rect x="202" y="64.5" width="2" height="20" fill="#6A5030" opacity="0.7"/>
  <rect x="163" y="76" width="41" height="1.2" rx="0.5" fill="#6A5030" opacity="0.35"/>

  <!-- MONITOR — 17W × 10H -->
  <rect x="174" y="50" width="17" height="10" rx="1" fill="#0E0E1E" opacity="0.95"/>
  <rect x="175.5" y="51.5" width="14" height="7" rx="0.8" fill="#1A3058">
    <animate attributeName="fill" values="#1A3058;#1E3860;#1A3058" dur="6s" repeatCount="indefinite"/>
  </rect>
  <line x1="177" y1="53.5" x2="185" y2="53.5" stroke="#7ABCE0" stroke-width="0.6" opacity="0.65">
    <animate attributeName="opacity" values="0.5;0.75;0.45;0.65;0.5" dur="2s" repeatCount="indefinite"/>
  </line>
  <line x1="177" y1="55.5" x2="187" y2="55.5" stroke="#7ABCE0" stroke-width="0.6" opacity="0.55">
    <animate attributeName="opacity" values="0.4;0.65;0.45;0.6;0.4" dur="2.3s" repeatCount="indefinite" begin="0.3s"/>
  </line>
  <line x1="179" y1="57" x2="184" y2="57" stroke="#A0D070" stroke-width="0.6" opacity="0.5">
    <animate attributeName="opacity" values="0.35;0.6;0.4;0.55;0.35" dur="1.8s" repeatCount="indefinite" begin="0.6s"/>
  </line>
  <rect x="187.5" y="55" width="1" height="2" fill="#FFF" opacity="0">
    <animate attributeName="opacity" values="0;0.8;0.8;0" dur="1s" repeatCount="indefinite"/>
  </rect>
  <!-- monitor stand -->
  <rect x="179" y="60" width="6" height="2" rx="0.5" fill="#0E0E1E" opacity="0.9"/>
  <rect x="177" y="61.5" width="10" height="1" rx="0.5" fill="#1A1A2E" opacity="0.8"/>
  <ellipse cx="182" cy="63.5" rx="14" ry="2.5" fill="#4A90D0" opacity="0.08">
    <animate attributeName="opacity" values="0.05;0.12;0.06;0.1;0.05" dur="4s" repeatCount="indefinite"/>
  </ellipse>

  <!-- KEYBOARD + MUG -->
  <rect x="175" y="63" width="14" height="1.5" rx="0.5" fill="#1A1A2E" opacity="0.7"/>
  <rect x="195" y="59" width="2.5" height="3.5" rx="0.5" fill="#A05830" opacity="0.75"/>
  <rect x="197.5" y="60" width="1.2" height="1.5" rx="0.5" fill="#A05830" opacity="0.55"/>
  <path d="M196,57.5 Q195,54 197,50" fill="none" stroke="#FFF" stroke-width="0.5" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.18;0.12;0.06;0" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="d" values="M196,57.5 Q195,54 197,50;M196,57.5 Q194,52 196.5,47;M196,57.5 Q197,53 195,49;M196,57.5 Q195,54 197,50" dur="3s" repeatCount="indefinite"/>
  </path>

  <!-- DESK LAMP -->
  <line x1="164" y1="62" x2="166" y2="50" stroke="#6A5A4A" stroke-width="1"/>
  <line x1="166" y1="50" x2="171" y2="47" stroke="#6A5A4A" stroke-width="0.8"/>
  <ellipse cx="170" cy="46" rx="3" ry="2" fill="#FFE4A0" opacity="0.35">
    <animate attributeName="opacity" values="0.3;0.42;0.32;0.4;0.3" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="170" cy="46" r="1.2" fill="#FFF5D0" opacity="0.45">
    <animate attributeName="opacity" values="0.4;0.55;0.42;0.5;0.4" dur="5s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="170" cy="62" rx="10" ry="2" fill="#FFE4A0" opacity="0.06">
    <animate attributeName="opacity" values="0.04;0.08;0.05;0.07;0.04" dur="5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- CORKBOARD — x=260, 22W × 16H -->
  <rect x="260" y="26" width="22" height="16" rx="1" fill="#6A4828" opacity="0.5"/>
  <rect x="262" y="28" width="5" height="4" fill="#E8A830" opacity="0.35"/>
  <rect x="269" y="29" width="4" height="5" fill="#5090E0" opacity="0.3"/>
  <rect x="262" y="34" width="6" height="4" fill="#E06060" opacity="0.25"/>
  <rect x="274" y="28" width="5" height="3" fill="#40C060" opacity="0.25"/>

  <!-- FILING CABINET — 16W × 20H, x=262 -->
  <rect x="262" y="65" width="16" height="20" rx="1" fill="#3A2828" opacity="0.7"/>
  <rect x="264" y="67" width="12" height="8" rx="0.5" fill="#2E2020" opacity="0.55"/>
  <rect x="264" y="77" width="12" height="6" rx="0.5" fill="#2E2020" opacity="0.55"/>
  <rect x="268" y="70" width="4" height="0.8" rx="0.3" fill="#8A7860" opacity="0.5"/>
  <rect x="268" y="79" width="4" height="0.8" rx="0.3" fill="#8A7860" opacity="0.5"/>

  <!-- FLOOR LAMP — x=310 -->
  <line x1="310" y1="36" x2="310" y2="83" stroke="#4A3848" stroke-width="1" opacity="0.6"/>
  <ellipse cx="310" cy="34" rx="4.5" ry="3" fill="#FFE0A0" opacity="0.15">
    <animate attributeName="opacity" values="0.12;0.2;0.13;0.18;0.12" dur="6s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="310" cy="34" r="1.8" fill="#FFF5D0" opacity="0.12">
    <animate attributeName="opacity" values="0.1;0.18;0.11;0.16;0.1" dur="6s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="310" cy="84" rx="3.5" ry="1" fill="#4A3848" opacity="0.4"/>

  <!-- POTTED PLANT — x=345 -->
  <rect x="343" y="74" width="7" height="11" rx="2" fill="#3A2820" opacity="0.6"/>
  <ellipse cx="346" cy="71" rx="6" ry="5" fill="#2A6838" opacity="0.55">
    <animateTransform attributeName="transform" type="rotate" values="-1,346,78;1,346,78;-1,346,78" dur="5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- rug under desk area -->
  <rect x="150" y="86" width="52" height="5" rx="2" fill="#4A2840" opacity="0.15"/>

  <!-- dust in lamp light -->
  <circle cx="168" cy="54" r="0.5" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.22;0.12;0.16;0" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="58" to="46" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="175" cy="58" r="0.35" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.16;0.08;0" dur="5s" repeatCount="indefinite" begin="2s"/>
    <animate attributeName="cy" from="62" to="48" dur="5s" repeatCount="indefinite" begin="2s"/>
  </circle>
</svg>`,
    kitchen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiKitBg" x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#2A1810"/>
      <stop offset="100%" stop-color="#201208"/>
    </linearGradient>
    <radialGradient id="lofiKitFlame" cx="0.52" cy="0.55" r="0.2">
      <stop offset="0%" stop-color="#FF8040" stop-opacity="0.28"/>
      <stop offset="40%" stop-color="#E06020" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#E06020" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiKitOverhead" cx="0.5" cy="0.02" r="0.5">
      <stop offset="0%" stop-color="#FFE8C0" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#FFE8C0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiKitWindow" cx="0.14" cy="0.22" r="0.16">
      <stop offset="0%" stop-color="#C0D8E8" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#C0D8E8" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- background + light layers -->
  <rect width="400" height="100" fill="url(#lofiKitBg)"/>
  <rect width="400" height="100" fill="url(#lofiKitOverhead)"/>
  <rect width="400" height="100" fill="url(#lofiKitWindow)"/>
  <rect width="400" height="100" fill="url(#lofiKitFlame)">
    <animate attributeName="opacity" values="0.5;1;0.6;0.9;0.55;0.85;0.5" dur="1.5s" repeatCount="indefinite"/>
  </rect>

  <!-- baseboard -->
  <rect x="0" y="82" width="400" height="3" fill="#2A1C10" opacity="0.35"/>

  <!-- floor — tile pattern -->
  <rect x="0" y="85" width="400" height="15" fill="#1A1208" opacity="0.75"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#4A3420" stroke-width="0.5" opacity="0.5"/>
  <line x1="0" y1="92" x2="400" y2="92" stroke="#2E2010" stroke-width="0.3" opacity="0.18"/>
  <line x1="50" y1="85" x2="50" y2="100" stroke="#2E2010" stroke-width="0.2" opacity="0.1"/>
  <line x1="100" y1="85" x2="100" y2="100" stroke="#2E2010" stroke-width="0.2" opacity="0.1"/>
  <line x1="150" y1="85" x2="150" y2="100" stroke="#2E2010" stroke-width="0.2" opacity="0.1"/>
  <line x1="200" y1="85" x2="200" y2="100" stroke="#2E2010" stroke-width="0.2" opacity="0.1"/>
  <line x1="250" y1="85" x2="250" y2="100" stroke="#2E2010" stroke-width="0.2" opacity="0.1"/>
  <line x1="300" y1="85" x2="300" y2="100" stroke="#2E2010" stroke-width="0.2" opacity="0.1"/>
  <line x1="350" y1="85" x2="350" y2="100" stroke="#2E2010" stroke-width="0.2" opacity="0.1"/>

  <!-- WINDOW above sink — 26W × 26H, x=44 -->
  <rect x="44" y="14" width="26" height="26" rx="1.5" fill="#2A3A4A" opacity="0.55"/>
  <rect x="46" y="16" width="10" height="22" fill="#304858" opacity="0.5"/>
  <rect x="58" y="16" width="10" height="22" fill="#304858" opacity="0.5"/>
  <rect x="46" y="16" width="22" height="22" fill="#C0D8E8" opacity="0.05">
    <animate attributeName="opacity" values="0.04;0.08;0.05;0.06;0.04" dur="8s" repeatCount="indefinite"/>
  </rect>

  <!-- COUNTER RUN 1 — sink area, 68W, x=36, surface at y=57 -->
  <rect x="36" y="57" width="68" height="2.5" rx="0.5" fill="#A8A898" opacity="0.75"/>
  <rect x="36" y="57" width="68" height="1" fill="#B8B0A0" opacity="0.5"/>
  <rect x="36" y="59.5" width="68" height="22" rx="1" fill="#2D5540" opacity="0.65"/>
  <rect x="39" y="61.5" width="14" height="18" rx="0.8" fill="#3A6848" opacity="0.5"/>
  <rect x="56" y="61.5" width="14" height="18" rx="0.8" fill="#3A6848" opacity="0.5"/>
  <rect x="73" y="61.5" width="14" height="18" rx="0.8" fill="#3A6848" opacity="0.5"/>
  <rect x="90" y="61.5" width="11" height="18" rx="0.8" fill="#3A6848" opacity="0.5"/>
  <rect x="44" y="69" width="3" height="1" rx="0.5" fill="#8A9878" opacity="0.55"/>
  <rect x="61" y="69" width="3" height="1" rx="0.5" fill="#8A9878" opacity="0.55"/>
  <rect x="78" y="69" width="3" height="1" rx="0.5" fill="#8A9878" opacity="0.55"/>

  <!-- SINK — 15W -->
  <rect x="54" y="54.5" width="15" height="2.5" rx="1" fill="#788890" opacity="0.6"/>
  <line x1="61" y1="54" x2="61" y2="42" stroke="#909CA0" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
  <line x1="61" y1="42" x2="64" y2="42" stroke="#909CA0" stroke-width="0.8" stroke-linecap="round" opacity="0.45"/>
  <circle cx="64" cy="55" r="0.5" fill="#6AAAD0" opacity="0">
    <animate attributeName="opacity" values="0;0;0.35;0.25;0" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="43" to="55" dur="3s" repeatCount="indefinite"/>
  </circle>

  <!-- UPPER CABINETS (left) -->
  <rect x="36" y="8" width="22" height="12" rx="1" fill="#2D5540" opacity="0.6"/>
  <rect x="82" y="8" width="22" height="12" rx="1" fill="#2D5540" opacity="0.6"/>
  <!-- backsplash -->
  <g stroke="#4A3420" stroke-width="0.2" opacity="0.15">
    <line x1="36" y1="35" x2="104" y2="35"/>
    <line x1="36" y1="45" x2="104" y2="45"/>
  </g>

  <!-- PENDANT LIGHT — above gap between counters -->
  <line x1="135" y1="0" x2="135" y2="14" stroke="#5A5A50" stroke-width="0.5" opacity="0.45"/>
  <ellipse cx="135" cy="15" rx="4" ry="2.5" fill="#FFE8C0" opacity="0.15">
    <animate attributeName="opacity" values="0.12;0.2;0.13;0.18;0.12" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="135" cy="15" r="1.5" fill="#FFF5D0" opacity="0.12">
    <animate attributeName="opacity" values="0.1;0.16;0.11;0.14;0.1" dur="5s" repeatCount="indefinite"/>
  </circle>

  <!-- COUNTER RUN 2 — stove area, 70W, x=132, surface at y=57 -->
  <rect x="132" y="57" width="70" height="2.5" rx="0.5" fill="#A8A898" opacity="0.75"/>
  <rect x="132" y="57" width="70" height="1" fill="#B8B0A0" opacity="0.5"/>
  <rect x="132" y="59.5" width="70" height="22" rx="1" fill="#2D5540" opacity="0.65"/>
  <rect x="135" y="61.5" width="14" height="18" rx="0.8" fill="#3A6848" opacity="0.5"/>
  <rect x="177" y="61.5" width="14" height="18" rx="0.8" fill="#3A6848" opacity="0.5"/>
  <rect x="194" y="61.5" width="5" height="18" rx="0.8" fill="#3A6848" opacity="0.5"/>
  <rect x="140" y="69" width="3" height="1" rx="0.5" fill="#8A9878" opacity="0.55"/>
  <rect x="182" y="69" width="3" height="1" rx="0.5" fill="#8A9878" opacity="0.55"/>

  <!-- STOVE — 22W on counter, x=152 -->
  <rect x="152" y="57" width="22" height="2.5" rx="0.5" fill="#484848" opacity="0.7"/>
  <ellipse cx="159" cy="56" rx="3" ry="1.5" fill="#302828" opacity="0.7"/>
  <ellipse cx="170" cy="56" rx="3" ry="1.5" fill="#302828" opacity="0.7"/>
  <ellipse cx="159" cy="55.5" rx="2.5" ry="1.2" fill="#FF8040">
    <animate attributeName="opacity" values="0.3;0.6;0.35;0.55;0.3" dur="0.5s" repeatCount="indefinite"/>
    <animate attributeName="rx" values="2;3;2.2;2.8;2" dur="0.7s" repeatCount="indefinite"/>
  </ellipse>
  <ellipse cx="170" cy="55.5" rx="2.5" ry="1.2" fill="#FF8040">
    <animate attributeName="opacity" values="0.35;0.55;0.3;0.5;0.35" dur="0.6s" repeatCount="indefinite" begin="0.15s"/>
    <animate attributeName="rx" values="2.2;3;2;2.8;2.2" dur="0.8s" repeatCount="indefinite" begin="0.15s"/>
  </ellipse>
  <rect x="147" y="32" width="30" height="18" fill="#FF8040" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.04;0.02;0.035;0.015" dur="0.8s" repeatCount="indefinite"/>
  </rect>

  <!-- RANGE HOOD -->
  <rect x="150" y="22" width="26" height="8" rx="1" fill="#606868" opacity="0.55"/>
  <rect x="153" y="30" width="20" height="1.5" rx="0.5" fill="#585858" opacity="0.45"/>

  <!-- UPPER CABINETS (right) -->
  <rect x="132" y="8" width="22" height="12" rx="1" fill="#2D5540" opacity="0.6"/>
  <rect x="180" y="8" width="22" height="12" rx="1" fill="#2D5540" opacity="0.6"/>
  <!-- backsplash -->
  <g stroke="#4A3420" stroke-width="0.2" opacity="0.15">
    <line x1="132" y1="35" x2="202" y2="35"/>
    <line x1="132" y1="45" x2="202" y2="45"/>
  </g>

  <!-- POT on burner -->
  <rect x="156" y="48" width="6" height="7" rx="1.5" fill="#687078" opacity="0.75"/>
  <rect x="155" y="47" width="8" height="1.5" rx="0.6" fill="#788890" opacity="0.65"/>
  <rect x="155" y="46" width="8" height="1.2" rx="0.6" fill="#8898A0" opacity="0.55">
    <animate attributeName="y" values="46;45.3;46;45.6;46" dur="0.7s" repeatCount="indefinite"/>
  </rect>
  <!-- steam -->
  <path d="M158,44 Q157,39 159,34" fill="none" stroke="#FFF" stroke-width="0.8" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.22;0.15;0.08;0" dur="2.5s" repeatCount="indefinite"/>
    <animate attributeName="d" values="M158,44 Q157,39 159,34;M158,44 Q155,36 158,28;M158,44 Q160,38 157,32;M158,44 Q157,39 159,34" dur="2.5s" repeatCount="indefinite"/>
  </path>
  <path d="M160,44 Q161,38 159,32" fill="none" stroke="#FFF" stroke-width="0.6" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.18;0.12;0.05;0" dur="3s" repeatCount="indefinite" begin="0.8s"/>
    <animate attributeName="d" values="M160,44 Q161,38 159,32;M160,44 Q162,34 159,26;M160,44 Q159,36 161,30;M160,44 Q161,38 159,32" dur="3s" repeatCount="indefinite" begin="0.8s"/>
  </path>

  <!-- FRIDGE — 20W × 52H, x=258 -->
  <rect x="258" y="33" width="20" height="52" rx="1.5" fill="#607078" opacity="0.6"/>
  <line x1="258" y1="55" x2="278" y2="55" stroke="#505858" stroke-width="0.4" opacity="0.5"/>
  <rect x="274" y="39" width="1.5" height="8" rx="0.5" fill="#808888" opacity="0.5"/>
  <rect x="274" y="62" width="1.5" height="8" rx="0.5" fill="#808888" opacity="0.5"/>

  <!-- SMALL TABLE — 26W, x=300 -->
  <rect x="300" y="72" width="26" height="2" rx="0.5" fill="#8B6840" opacity="0.65"/>
  <rect x="303" y="74" width="2" height="11" rx="0.5" fill="#6A5030" opacity="0.5"/>
  <rect x="323" y="74" width="2" height="11" rx="0.5" fill="#6A5030" opacity="0.5"/>
  <!-- items on table -->
  <rect x="308" y="69" width="2" height="3" rx="0.5" fill="#A05830" opacity="0.55"/>
  <rect x="315" y="70" width="4" height="2.5" rx="0.5" fill="#788890" opacity="0.45"/>

  <!-- WALL SHELF with jars — x=298 -->
  <rect x="298" y="28" width="30" height="1.5" rx="0.5" fill="#6A5030" opacity="0.5"/>
  <rect x="301" y="20" width="4" height="8" rx="1" fill="#788890" opacity="0.35"/>
  <rect x="307" y="22" width="3.5" height="6" rx="0.8" fill="#A07838" opacity="0.35"/>
  <rect x="313" y="21" width="3" height="7" rx="0.8" fill="#689088" opacity="0.3"/>
  <rect x="319" y="23" width="4" height="5" rx="1" fill="#A05830" opacity="0.3"/>

  <!-- HANGING UTENSILS — x=350 -->
  <line x1="350" y1="20" x2="350" y2="34" stroke="#888888" stroke-width="0.5" opacity="0.4">
    <animateTransform attributeName="transform" type="rotate" values="-1,350,20;1,350,20;-1,350,20" dur="4s" repeatCount="indefinite"/>
  </line>
  <line x1="355" y1="20" x2="355" y2="36" stroke="#888888" stroke-width="0.5" opacity="0.4">
    <animateTransform attributeName="transform" type="rotate" values="0.8,355,20;-0.8,355,20;0.8,355,20" dur="3.5s" repeatCount="indefinite"/>
  </line>
  <line x1="360" y1="20" x2="360" y2="32" stroke="#888888" stroke-width="0.5" opacity="0.4">
    <animateTransform attributeName="transform" type="rotate" values="-0.6,360,20;1,360,20;-0.6,360,20" dur="4.5s" repeatCount="indefinite"/>
  </line>
</svg>`,
    living_room: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiLivBg" x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#1C0E35"/>
      <stop offset="100%" stop-color="#140C28"/>
    </linearGradient>
    <radialGradient id="lofiLivTV" cx="0.6" cy="0.45" r="0.3">
      <stop offset="0%" stop-color="#6AA0E0" stop-opacity="0.38"/>
      <stop offset="40%" stop-color="#5A90D0" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#5A90D0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiLivLamp" cx="0.47" cy="0.35" r="0.2">
      <stop offset="0%" stop-color="#FFD080" stop-opacity="0.3"/>
      <stop offset="50%" stop-color="#FFBA60" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#FFBA60" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiLivCandle" cx="0.28" cy="0.78" r="0.1">
      <stop offset="0%" stop-color="#FFD040" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#FFD040" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- background + dueling light sources -->
  <rect width="400" height="100" fill="url(#lofiLivBg)"/>
  <rect width="400" height="100" fill="url(#lofiLivLamp)">
    <animate attributeName="opacity" values="0.8;1;0.85;0.95;0.8" dur="6s" repeatCount="indefinite"/>
  </rect>
  <rect width="400" height="100" fill="url(#lofiLivTV)">
    <animate attributeName="opacity" values="0.5;1;0.6;0.9;0.5" dur="3s" repeatCount="indefinite"/>
  </rect>
  <rect width="400" height="100" fill="url(#lofiLivCandle)">
    <animate attributeName="opacity" values="0.4;0.8;0.3;0.7;0.5;0.9;0.4" dur="1.5s" repeatCount="indefinite"/>
  </rect>

  <!-- baseboard -->
  <rect x="0" y="82" width="400" height="3" fill="#180E28" opacity="0.35"/>

  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#0E0A1E" opacity="0.75"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#3A2848" stroke-width="0.5" opacity="0.45"/>
  <line x1="0" y1="90" x2="400" y2="90" stroke="#201838" stroke-width="0.3" opacity="0.15"/>
  <line x1="0" y1="95" x2="400" y2="95" stroke="#201838" stroke-width="0.3" opacity="0.1"/>
  <line x1="70" y1="85" x2="70" y2="100" stroke="#201838" stroke-width="0.2" opacity="0.08"/>
  <line x1="150" y1="85" x2="150" y2="100" stroke="#201838" stroke-width="0.2" opacity="0.08"/>
  <line x1="230" y1="85" x2="230" y2="100" stroke="#201838" stroke-width="0.2" opacity="0.08"/>
  <line x1="310" y1="85" x2="310" y2="100" stroke="#201838" stroke-width="0.2" opacity="0.08"/>
  <!-- area rug -->
  <rect x="85" y="86" width="70" height="6" rx="2" fill="#8A3838" opacity="0.15"/>

  <!-- TALL BOOKSHELF — x=38, 18W × 46H -->
  <rect x="38" y="39" width="18" height="46" rx="1" fill="#3A2828" opacity="0.7"/>
  <rect x="40" y="42" width="14" height="9" fill="#2E2020" opacity="0.55"/>
  <rect x="40" y="54" width="14" height="9" fill="#2E2020" opacity="0.55"/>
  <rect x="40" y="66" width="14" height="9" fill="#2E2020" opacity="0.55"/>
  <rect x="40" y="78" width="14" height="5" fill="#2E2020" opacity="0.55"/>
  <rect x="42" y="43" width="3" height="7" fill="#E85050" opacity="0.5"/>
  <rect x="46" y="44" width="2.5" height="6" fill="#40C060" opacity="0.4"/>
  <rect x="49.5" y="43" width="3" height="7" fill="#5090E0" opacity="0.4"/>
  <rect x="42" y="55" width="3.5" height="7" fill="#E8A830" opacity="0.4"/>
  <rect x="46.5" y="56" width="2.5" height="6" fill="#B060C0" opacity="0.35"/>
  <rect x="42" y="67" width="4" height="7" fill="#D88030" opacity="0.35"/>
  <rect x="47" y="68" width="3" height="6" fill="#5090C0" opacity="0.3"/>

  <!-- SIDE TABLE + LAMP — x=62 -->
  <rect x="62" y="72" width="10" height="2" rx="0.5" fill="#5A3828" opacity="0.6"/>
  <rect x="64" y="74" width="2" height="11" rx="0.5" fill="#4A2818" opacity="0.45"/>
  <rect x="69" y="74" width="2" height="11" rx="0.5" fill="#4A2818" opacity="0.45"/>
  <rect x="65" y="68" width="4" height="4" rx="1" fill="#4A3050" opacity="0.55"/>
  <ellipse cx="67" cy="67" rx="3" ry="2" fill="#FFE0A0" opacity="0.15">
    <animate attributeName="opacity" values="0.12;0.2;0.13;0.18;0.12" dur="5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- SOFA — 64W, x=80 -->
  <rect x="105" y="59" width="64" height="4" rx="2" fill="#8A4828" opacity="0.7"/>
  <rect x="102" y="63" width="70" height="18" rx="3" fill="#6A3418" opacity="0.7"/>
  <rect x="106" y="64" width="19" height="15" rx="3" fill="#7A4020" opacity="0.55"/>
  <rect x="128" y="64" width="19" height="15" rx="3" fill="#7A4020" opacity="0.55"/>
  <rect x="150" y="64" width="19" height="15" rx="3" fill="#7A4020" opacity="0.55"/>
  <rect x="106" y="81" width="2.5" height="5" rx="0.5" fill="#5A2810" opacity="0.55"/>
  <rect x="166" y="81" width="2.5" height="5" rx="0.5" fill="#5A2810" opacity="0.55"/>
  <rect x="99" y="60" width="7" height="22" rx="3" fill="#6A3418" opacity="0.6"/>
  <rect x="169" y="60" width="7" height="22" rx="3" fill="#6A3418" opacity="0.6"/>
  <rect x="109" y="57" width="9" height="7" rx="3" fill="#E8A830" opacity="0.45"/>
  <rect x="157" y="57" width="8" height="7" rx="3" fill="#5090E0" opacity="0.35"/>

  <!-- COFFEE TABLE — 30W, x=90 -->
  <rect x="115" y="79" width="30" height="2.5" rx="0.8" fill="#6A4828" opacity="0.6"/>
  <rect x="118" y="81.5" width="2" height="5" rx="0.5" fill="#5A3818" opacity="0.45"/>
  <rect x="142" y="81.5" width="2" height="5" rx="0.5" fill="#5A3818" opacity="0.45"/>
  <!-- candle -->
  <rect x="128" y="76.5" width="2" height="3" rx="0.3" fill="#E8D8B0" opacity="0.5"/>
  <ellipse cx="129" cy="75.5" rx="1.2" ry="1.5" fill="#FFD040" opacity="0">
    <animate attributeName="opacity" values="0.2;0.45;0.15;0.4;0.25;0.38;0.2" dur="1.5s" repeatCount="indefinite"/>
    <animate attributeName="ry" values="1.5;2;1.2;1.8;1.5" dur="1.2s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="129" cy="75" r="0.6" fill="#FFF5D0" opacity="0">
    <animate attributeName="opacity" values="0.15;0.4;0.12;0.35;0.18;0.3;0.15" dur="1.5s" repeatCount="indefinite"/>
  </circle>

  <!-- WALL ART — above sofa -->
  <rect x="125" y="24" width="16" height="12" rx="1" fill="#241838" opacity="0.5"/>
  <rect x="126.5" y="25.5" width="13" height="9" fill="#342850" opacity="0.4"/>

  <!-- FLOOR LAMP — x=185 -->
  <line x1="185" y1="35" x2="185" y2="82" stroke="#4A3858" stroke-width="1" opacity="0.6"/>
  <ellipse cx="185" cy="33" rx="5" ry="3.5" fill="#FFE0A0" opacity="0.22">
    <animate attributeName="opacity" values="0.18;0.28;0.2;0.25;0.18" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="185" cy="33" r="2" fill="#FFF5D0" opacity="0.2">
    <animate attributeName="opacity" values="0.16;0.25;0.18;0.22;0.16" dur="5s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="185" cy="84" rx="4" ry="1.5" fill="#4A3858" opacity="0.4"/>
  <ellipse cx="185" cy="88" rx="12" ry="3" fill="#FFE0A0" opacity="0.03">
    <animate attributeName="opacity" values="0.02;0.04;0.025;0.035;0.02" dur="5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- TV — 35W × 20H, x=225, bright screen ON -->
  <rect x="225" y="38" width="35" height="20" rx="1.5" fill="#0E0E1E" opacity="0.95"/>
  <rect x="227" y="40" width="31" height="16" rx="1" fill="#2040708">
    <animate attributeName="fill" values="#204070;#402060;#206050;#604020;#204070" dur="12s" repeatCount="indefinite"/>
  </rect>
  <!-- screen-content: color bars and shifting shapes -->
  <g class="screen-content">
    <rect x="228" y="42" width="8" height="5" rx="0.5" fill="#60B0E0" opacity="0.6">
      <animate attributeName="opacity" values="0.5;0.7;0.4;0.65;0.5" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="x" values="228;235;230;240;228" dur="8s" repeatCount="indefinite"/>
    </rect>
    <rect x="240" y="44" width="10" height="4" rx="0.5" fill="#E08060" opacity="0.5">
      <animate attributeName="opacity" values="0.4;0.6;0.35;0.55;0.4" dur="5s" repeatCount="indefinite"/>
      <animate attributeName="width" values="10;14;8;12;10" dur="6s" repeatCount="indefinite"/>
    </rect>
    <rect x="232" y="49" width="12" height="3" rx="0.5" fill="#80C060" opacity="0.45">
      <animate attributeName="opacity" values="0.35;0.55;0.3;0.5;0.35" dur="3.5s" repeatCount="indefinite"/>
    </rect>
    <rect x="248" y="41" width="6" height="8" rx="0.5" fill="#C080D0" opacity="0.4">
      <animate attributeName="opacity" values="0.3;0.5;0.25;0.45;0.3" dur="4.5s" repeatCount="indefinite"/>
    </rect>
  </g>
  <!-- screen flicker overlay -->
  <rect x="227" y="40" width="31" height="16" rx="1" fill="#FFF" opacity="0">
    <animate attributeName="opacity" values="0.06;0.15;0.07;0.12;0.06" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV glow on wall (stronger) -->
  <rect x="212" y="10" width="60" height="30" rx="4" fill="#5A90D0" opacity="0">
    <animate attributeName="fill" values="#5A90D0;#9060C0;#50C080;#C08040;#5A90D0" dur="12s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.03;0.08;0.04;0.07;0.03" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- TV glow on floor -->
  <rect x="218" y="85" width="55" height="10" fill="#5A90D0" opacity="0">
    <animate attributeName="fill" values="#5A90D0;#9060C0;#50C080;#C08040;#5A90D0" dur="12s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.015;0.04;0.02;0.035;0.015" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- screen light wash on nearby furniture -->
  <ellipse cx="242" cy="65" rx="25" ry="8" fill="#5A90D0" opacity="0">
    <animate attributeName="fill" values="#5A90D0;#9060C0;#50C080;#C08040;#5A90D0" dur="12s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.02;0.05;0.025;0.04;0.02" dur="3s" repeatCount="indefinite"/>
  </ellipse>
  <!-- TV console -->
  <rect x="223" y="58" width="38" height="5" rx="1" fill="#4A3020" opacity="0.65"/>
  <rect x="226" y="63" width="3" height="22" rx="0.8" fill="#3A2010" opacity="0.5"/>
  <rect x="255" y="63" width="3" height="22" rx="0.8" fill="#3A2010" opacity="0.5"/>

  <!-- WINDOW — 26W × 34H, x=275 -->
  <rect x="275" y="10" width="26" height="34" rx="1.5" fill="#2A2048" opacity="0.5"/>
  <rect x="277" y="12" width="10" height="30" fill="#302858" opacity="0.45"/>
  <rect x="289" y="12" width="10" height="30" fill="#302858" opacity="0.45"/>
  <rect x="275" y="10" width="3.5" height="34" fill="#382858" opacity="0.3">
    <animateTransform attributeName="transform" type="rotate" values="0,277,10;0.8,277,10;-0.4,277,10;0,277,10" dur="5s" repeatCount="indefinite"/>
  </rect>
  <rect x="297.5" y="10" width="3.5" height="34" fill="#382858" opacity="0.3">
    <animateTransform attributeName="transform" type="rotate" values="0,299,10;-0.6,299,10;0.5,299,10;0,299,10" dur="5.5s" repeatCount="indefinite"/>
  </rect>

  <!-- READING CHAIR — x=320, 16W -->
  <rect x="320" y="62" width="16" height="4" rx="2" fill="#5A3040" opacity="0.55"/>
  <rect x="318" y="66" width="20" height="16" rx="3" fill="#4A2030" opacity="0.55"/>
  <rect x="320" y="82" width="2" height="4" rx="0.5" fill="#3A1820" opacity="0.45"/>
  <rect x="334" y="82" width="2" height="4" rx="0.5" fill="#3A1820" opacity="0.45"/>
  <rect x="324" y="59" width="7" height="5" rx="2" fill="#6A4870" opacity="0.35"/>

  <!-- PLANT — x=352 -->
  <rect x="350" y="72" width="7" height="13" rx="2" fill="#3A2820" opacity="0.55"/>
  <ellipse cx="353" cy="69" rx="6" ry="5" fill="#2A6838" opacity="0.5">
    <animateTransform attributeName="transform" type="rotate" values="-1.5,353,78;1.5,353,78;-1.5,353,78" dur="4s" repeatCount="indefinite"/>
  </ellipse>

  <!-- dust in lamp light -->
  <circle cx="182" cy="48" r="0.4" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.2;0.1;0.15;0" dur="5s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="52" to="40" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="190" cy="54" r="0.35" fill="#FFE4A0" opacity="0">
    <animate attributeName="opacity" values="0;0.16;0.08;0" dur="6s" repeatCount="indefinite" begin="2.5s"/>
    <animate attributeName="cy" from="58" to="46" dur="6s" repeatCount="indefinite" begin="2.5s"/>
  </circle>
</svg>`,
    bedroom: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiBedBg" x1="0" y1="0" x2="0.5" y2="1">
      <stop offset="0%" stop-color="#141035"/>
      <stop offset="100%" stop-color="#181240"/>
    </linearGradient>
    <radialGradient id="lofiBedMoon" cx="0.14" cy="0.12" r="0.25">
      <stop offset="0%" stop-color="#E0D8C0" stop-opacity="0.22"/>
      <stop offset="40%" stop-color="#C0B8A0" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#C0B8A0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiBedLamp" cx="0.45" cy="0.55" r="0.15">
      <stop offset="0%" stop-color="#F0D080" stop-opacity="0.2"/>
      <stop offset="50%" stop-color="#F0D080" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#F0D080" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- background + moonlight + lamp -->
  <rect width="400" height="100" fill="url(#lofiBedBg)"/>
  <rect width="400" height="100" fill="url(#lofiBedMoon)">
    <animate attributeName="opacity" values="0.8;1;0.85;0.95;0.8" dur="8s" repeatCount="indefinite"/>
  </rect>
  <rect width="400" height="100" fill="url(#lofiBedLamp)">
    <animate attributeName="opacity" values="0.7;0.9;0.75;0.85;0.7" dur="4s" repeatCount="indefinite"/>
  </rect>

  <!-- baseboard -->
  <rect x="0" y="82" width="400" height="3" fill="#1A1235" opacity="0.35"/>

  <!-- floor -->
  <rect x="0" y="85" width="400" height="15" fill="#0E0A22" opacity="0.75"/>
  <line x1="0" y1="85" x2="400" y2="85" stroke="#302850" stroke-width="0.3" opacity="0.4"/>
  <line x1="0" y1="90" x2="400" y2="90" stroke="#201840" stroke-width="0.3" opacity="0.14"/>
  <line x1="0" y1="95" x2="400" y2="95" stroke="#201840" stroke-width="0.3" opacity="0.1"/>
  <line x1="90" y1="85" x2="90" y2="100" stroke="#201840" stroke-width="0.2" opacity="0.08"/>
  <line x1="180" y1="85" x2="180" y2="100" stroke="#201840" stroke-width="0.2" opacity="0.08"/>
  <line x1="270" y1="85" x2="270" y2="100" stroke="#201840" stroke-width="0.2" opacity="0.08"/>
  <line x1="360" y1="85" x2="360" y2="100" stroke="#201840" stroke-width="0.2" opacity="0.08"/>
  <!-- bedside rug -->
  <rect x="175" y="86" width="40" height="5" rx="2" fill="#5A3858" opacity="0.15"/>

  <!-- WINDOW — 28W × 35H, x=38, night sky -->
  <rect x="38" y="10" width="28" height="35" rx="1.5" fill="#1A1448" opacity="0.7"/>
  <rect x="40" y="12" width="11" height="31" fill="#1E1850" opacity="0.7"/>
  <rect x="53" y="12" width="11" height="31" fill="#1E1850" opacity="0.7"/>
  <rect x="38" y="10" width="3.5" height="35" fill="#2E2060" opacity="0.35">
    <animateTransform attributeName="transform" type="rotate" values="0,40,10;0.5,40,10;-0.3,40,10;0,40,10" dur="7s" repeatCount="indefinite"/>
  </rect>
  <rect x="62.5" y="10" width="3.5" height="35" fill="#2E2060" opacity="0.35">
    <animateTransform attributeName="transform" type="rotate" values="0,64,10;-0.4,64,10;0.3,64,10;0,64,10" dur="7.5s" repeatCount="indefinite"/>
  </rect>
  <!-- stars -->
  <circle cx="44" cy="15" r="0.5" fill="#FFF">
    <animate attributeName="opacity" values="0.15;0.7;0.2;0.6;0.15" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle cx="50" cy="22" r="0.4" fill="#FFF">
    <animate attributeName="opacity" values="0.2;0.6;0.15;0.5;0.2" dur="3.5s" repeatCount="indefinite" begin="1s"/>
  </circle>
  <circle cx="57" cy="14" r="0.45" fill="#FFF">
    <animate attributeName="opacity" values="0.15;0.65;0.2;0.55;0.15" dur="4s" repeatCount="indefinite" begin="0.5s"/>
  </circle>
  <circle cx="62" cy="21" r="0.35" fill="#FFF">
    <animate attributeName="opacity" values="0.1;0.5;0.15;0.4;0.1" dur="3.8s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <circle cx="45" cy="28" r="0.3" fill="#FFF">
    <animate attributeName="opacity" values="0.08;0.4;0.12;0.3;0.08" dur="5s" repeatCount="indefinite" begin="2s"/>
  </circle>
  <!-- moon -->
  <circle cx="60" cy="17" r="3" fill="#E8E0C8" opacity="0.5">
    <animate attributeName="opacity" values="0.45;0.6;0.48;0.55;0.45" dur="6s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="55" cy="18" rx="6" ry="2.5" fill="#1E1850" opacity="0">
    <animate attributeName="opacity" values="0;0;0.45;0.55;0.45;0;0" dur="18s" repeatCount="indefinite"/>
    <animate attributeName="cx" from="42" to="68" dur="18s" repeatCount="indefinite"/>
  </ellipse>
  <!-- moonbeam -->
  <polygon points="40,45 66,45 76,100 22,100" fill="#C8C0E0" opacity="0.02">
    <animate attributeName="opacity" values="0.015;0.035;0.02;0.03;0.015" dur="8s" repeatCount="indefinite"/>
  </polygon>

  <!-- NIGHTSTAND 1 — 12W, x=80 -->
  <rect x="95" y="67" width="12" height="18" rx="1" fill="#2E2040" opacity="0.65"/>
  <rect x="97" y="69" width="8" height="6" rx="0.5" fill="#3A2850" opacity="0.5"/>
  <rect x="97" y="77" width="8" height="6" rx="0.5" fill="#3A2850" opacity="0.5"/>

  <!-- BED — headboard 3W, mattress 61W, footboard 3W -->
  <rect x="107" y="48" width="3" height="37" rx="1" fill="#5A3828" opacity="0.8"/>
  <rect x="110" y="67" width="61" height="18" rx="2" fill="#2E2058" opacity="0.7"/>
  <rect x="112" y="64" width="58" height="18" rx="2.5" fill="#3E3070" opacity="0.65"/>
  <line x1="115" y1="70" x2="167" y2="70" stroke="#504888" stroke-width="0.4" opacity="0.3"/>
  <line x1="115" y1="76" x2="167" y2="76" stroke="#504888" stroke-width="0.3" opacity="0.2"/>
  <ellipse cx="120" cy="66" rx="8" ry="4" fill="#E0D8A8" opacity="0.3"/>
  <ellipse cx="120" cy="69" rx="7" ry="3.5" fill="#D8D0A0" opacity="0.25"/>
  <ellipse cx="132" cy="67" rx="7" ry="3.5" fill="#D8D0A0" opacity="0.22"/>
  <rect x="171" y="67" width="3" height="18" rx="1" fill="#5A3828" opacity="0.6"/>
  <rect x="108" y="84" width="2.5" height="4" rx="0.5" fill="#5A3828" opacity="0.55"/>
  <rect x="170" y="84" width="2.5" height="4" rx="0.5" fill="#5A3828" opacity="0.55"/>

  <!-- WALL ART above bed -->
  <rect x="130" y="24" width="16" height="12" rx="0.8" fill="#201840" opacity="0.45"/>
  <rect x="131.5" y="25.5" width="13" height="9" fill="#2A2050" opacity="0.35"/>

  <!-- NIGHTSTAND 2 + LAMP — x=168 -->
  <rect x="183" y="65" width="14" height="20" rx="1.5" fill="#2E2040" opacity="0.65"/>
  <rect x="185" y="67" width="10" height="7" rx="0.8" fill="#3A2850" opacity="0.5"/>
  <rect x="185" y="76" width="10" height="7" rx="0.8" fill="#3A2850" opacity="0.5"/>
  <rect x="187" y="58" width="6" height="7" rx="1.5" fill="#483868" opacity="0.65"/>
  <ellipse cx="190" cy="56" rx="4" ry="2.5" fill="#F0D080" opacity="0.25">
    <animate attributeName="opacity" values="0.2;0.32;0.22;0.28;0.2" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="190" cy="56" r="1.5" fill="#FFF5D0" opacity="0.25">
    <animate attributeName="opacity" values="0.2;0.32;0.22;0.28;0.2" dur="4s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="190" cy="65" rx="8" ry="2.5" fill="#F0D080" opacity="0.03">
    <animate attributeName="opacity" values="0.02;0.04;0.025;0.035;0.02" dur="4s" repeatCount="indefinite"/>
  </ellipse>

  <!-- DRESSER — 30W × 24H, x=235 -->
  <rect x="235" y="61" width="30" height="24" rx="1.5" fill="#2E2040" opacity="0.6"/>
  <rect x="237" y="64" width="26" height="8" rx="0.8" fill="#3A2850" opacity="0.45"/>
  <rect x="237" y="75" width="26" height="8" rx="0.8" fill="#3A2850" opacity="0.45"/>
  <rect x="247" y="67" width="6" height="0.8" rx="0.3" fill="#5A4870" opacity="0.45"/>
  <rect x="247" y="78" width="6" height="0.8" rx="0.3" fill="#5A4870" opacity="0.45"/>

  <!-- MIRROR above dresser -->
  <rect x="242" y="24" width="16" height="22" rx="1" fill="#201840" opacity="0.5"/>
  <rect x="243.5" y="25.5" width="13" height="19" fill="#2A2058" opacity="0.4"/>
  <line x1="246" y1="30" x2="253" y2="30" stroke="#483870" stroke-width="0.3" opacity="0.2"/>

  <!-- WARDROBE — 24W × 52H, x=280 -->
  <rect x="280" y="33" width="24" height="52" rx="1.5" fill="#2E2040" opacity="0.65"/>
  <line x1="292" y1="33" x2="292" y2="85" stroke="#2A1E40" stroke-width="0.4" opacity="0.4"/>
  <rect x="289" y="55" width="1.5" height="5" rx="0.5" fill="#5A4870" opacity="0.45"/>
  <rect x="293.5" y="55" width="1.5" height="5" rx="0.5" fill="#5A4870" opacity="0.45"/>

  <!-- READING CHAIR — x=322, 16W -->
  <rect x="322" y="62" width="16" height="4" rx="2" fill="#402850" opacity="0.55"/>
  <rect x="320" y="66" width="20" height="16" rx="3" fill="#301840" opacity="0.55"/>
  <rect x="322" y="82" width="2" height="4" rx="0.5" fill="#201030" opacity="0.4"/>
  <rect x="336" y="82" width="2" height="4" rx="0.5" fill="#201030" opacity="0.4"/>
  <rect x="324" y="59" width="7" height="5" rx="2" fill="#6A4878" opacity="0.35"/>

  <!-- PLANT — x=355 -->
  <rect x="353" y="72" width="7" height="13" rx="2" fill="#2A3828" opacity="0.5"/>
  <ellipse cx="356" cy="69" rx="6" ry="5" fill="#1E5038" opacity="0.45">
    <animateTransform attributeName="transform" type="rotate" values="-1,356,78;1,356,78;-1,356,78" dur="5s" repeatCount="indefinite"/>
  </ellipse>

  <!-- dust in moonbeam -->
  <circle cx="55" cy="58" r="0.5" fill="#D0C8E0" opacity="0">
    <animate attributeName="opacity" values="0;0.2;0.1;0.15;0" dur="5s" repeatCount="indefinite"/>
    <animate attributeName="cy" from="62" to="48" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="48" cy="68" r="0.4" fill="#D0C8E0" opacity="0">
    <animate attributeName="opacity" values="0;0.16;0.08;0.12;0" dur="6s" repeatCount="indefinite" begin="2s"/>
    <animate attributeName="cy" from="72" to="55" dur="6s" repeatCount="indefinite" begin="2s"/>
  </circle>
</svg>`,
    not_home_dog: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiNhdBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1A2040"/>
      <stop offset="60%" stop-color="#1E2848"/>
      <stop offset="100%" stop-color="#162038"/>
    </linearGradient>
    <radialGradient id="lofiNhdMoon" cx="0.82" cy="0.15" r="0.35">
      <stop offset="0%" stop-color="#F0E8D0" stop-opacity="0.4"/>
      <stop offset="40%" stop-color="#D0C8B0" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#C0B8A0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiNhdWinGlow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#E8C878" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#D0A050" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiNhdInterior" cx="0.41" cy="0.55" r="0.2">
      <stop offset="0%" stop-color="#FFE0A0" stop-opacity="0.18"/>
      <stop offset="50%" stop-color="#FFBA60" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#FFBA60" stop-opacity="0"/>
      <animate attributeName="r" values="0.2;0.22;0.2" dur="5s" repeatCount="indefinite"/>
    </radialGradient>
  </defs>

  <!-- deep navy sky with moon wash -->
  <rect width="400" height="100" fill="url(#lofiNhdBg)"/>
  <rect width="400" height="100" fill="url(#lofiNhdMoon)">
    <animate attributeName="opacity" values="0.8;1;0.85;0.95;0.8" dur="8s" repeatCount="indefinite"/>
  </rect>

  <!-- STARS -->
  <circle class="star" cx="50" cy="12" r="0.9" fill="#FFF">
    <animate attributeName="opacity" values="0.3;0.85;0.4;0.75;0.3" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle class="star" cx="120" cy="8" r="0.7" fill="#FFF">
    <animate attributeName="opacity" values="0.25;0.7;0.3;0.6;0.25" dur="4s" repeatCount="indefinite" begin="1s"/>
  </circle>
  <circle class="star" cx="180" cy="18" r="0.8" fill="#FFF">
    <animate attributeName="opacity" values="0.3;0.8;0.35;0.7;0.3" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>
  </circle>
  <circle class="star" cx="250" cy="6" r="0.6" fill="#FFF">
    <animate attributeName="opacity" values="0.25;0.7;0.35;0.6;0.25" dur="4.5s" repeatCount="indefinite" begin="2s"/>
  </circle>
  <circle class="star" cx="290" cy="22" r="0.8" fill="#FFF">
    <animate attributeName="opacity" values="0.2;0.65;0.3;0.55;0.2" dur="5s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <circle class="star" cx="370" cy="10" r="0.65" fill="#FFF">
    <animate attributeName="opacity" values="0.2;0.6;0.3;0.5;0.2" dur="3.8s" repeatCount="indefinite" begin="0.8s"/>
  </circle>
  <circle class="star" cx="30" cy="24" r="0.5" fill="#FFF">
    <animate attributeName="opacity" values="0.2;0.55;0.25;0.45;0.2" dur="5.5s" repeatCount="indefinite" begin="1.2s"/>
  </circle>
  <circle class="star" cx="155" cy="5" r="0.55" fill="#FFF">
    <animate attributeName="opacity" values="0.25;0.65;0.3;0.55;0.25" dur="4.2s" repeatCount="indefinite" begin="0.3s"/>
  </circle>

  <!-- MOON crescent -->
  <circle cx="330" cy="18" r="9" fill="#F0E8D0" opacity="0.7">
    <animate attributeName="opacity" values="0.6;0.8;0.65;0.75;0.6" dur="6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="334" cy="15" r="7.5" fill="#1A2040" opacity="0.95"/>

  <!-- CLOUDS -->
  <ellipse cx="100" cy="20" rx="22" ry="6" fill="#283050" opacity="0">
    <animate attributeName="opacity" values="0;0.3;0.4;0.3;0" dur="22s" repeatCount="indefinite"/>
    <animate attributeName="cx" from="-30" to="430" dur="22s" repeatCount="indefinite"/>
  </ellipse>
  <ellipse cx="260" cy="14" rx="18" ry="5" fill="#283050" opacity="0">
    <animate attributeName="opacity" values="0;0.25;0.35;0.25;0" dur="28s" repeatCount="indefinite" begin="6s"/>
    <animate attributeName="cx" from="-20" to="420" dur="28s" repeatCount="indefinite" begin="6s"/>
  </ellipse>

  <!-- ground -->
  <rect x="0" y="78" width="400" height="22" fill="#121828"/>
  <rect x="0" y="78" width="400" height="1" fill="#2A3450" opacity="0.5"/>

  <!-- WARM INTERIOR (cutaway left wall, x=130..200, y=38..80) -->
  <rect x="130" y="38" width="70" height="42" fill="#2A1C10"/>
  <rect x="130" y="38" width="70" height="42" fill="url(#lofiNhdInterior)">
    <animate attributeName="opacity" values="0.8;1;0.85;0.95;0.8" dur="5s" repeatCount="indefinite"/>
  </rect>

  <!-- interior floor -->
  <rect x="130" y="72" width="70" height="8" fill="#1E1208" opacity="0.7"/>
  <line x1="130" y1="72" x2="200" y2="72" stroke="#3A2818" stroke-width="0.5" opacity="0.4"/>

  <!-- nightlight at x=145 -->
  <rect x="144" y="65" width="3" height="7" rx="0.5" fill="#4A3828" opacity="0.7"/>
  <ellipse cx="145.5" cy="64" rx="2.5" ry="1.8" fill="#FFE0A0" opacity="0.5">
    <animate attributeName="opacity" values="0.4;0.6;0.42;0.55;0.4" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <circle cx="145.5" cy="64" r="1" fill="#FFF5D0" opacity="0.5">
    <animate attributeName="opacity" values="0.4;0.6;0.42;0.55;0.4" dur="4s" repeatCount="indefinite"/>
  </circle>
  <!-- warm light pool on floor -->
  <ellipse cx="148" cy="74" rx="10" ry="3" fill="#FFE0A0" opacity="0.06">
    <animate attributeName="opacity" values="0.04;0.08;0.05;0.07;0.04" dur="4s" repeatCount="indefinite"/>
  </ellipse>

  <!-- dog bed at cx=165 -->
  <ellipse cx="165" cy="75" rx="12" ry="3.5" fill="#5A3020" opacity="0.8"/>
  <ellipse cx="165" cy="74" rx="10" ry="3" fill="#6A3828" opacity="0.7"/>
  <ellipse cx="165" cy="73.5" rx="8" ry="2.5" fill="#7A4830" opacity="0.6"/>

  <!-- water bowl at cx=186 -->
  <ellipse cx="186" cy="75" rx="3" ry="1.5" fill="#4A4858" opacity="0.6"/>
  <ellipse cx="186" cy="74.5" rx="2.5" ry="1" fill="#6A7888" opacity="0.35">
    <animate attributeName="opacity" values="0.3;0.4;0.32;0.38;0.3" dur="6s" repeatCount="indefinite"/>
  </ellipse>

  <!-- back wall art -->
  <rect x="155" y="44" width="10" height="7" rx="0.5" fill="#3A2818" opacity="0.5"/>
  <rect x="156" y="45" width="8" height="5" fill="#4A3828" opacity="0.35"/>

  <!-- ceiling edge -->
  <line x1="130" y1="38" x2="198" y2="38" stroke="#3A2818" stroke-width="0.5" opacity="0.4"/>
  <!-- left wall interior edge -->
  <line x1="130" y1="38" x2="130" y2="80" stroke="#3A2818" stroke-width="0.5" opacity="0.3"/>

  <!-- CUT EDGE at x=200 (wall cross-section) -->
  <rect x="198" y="38" width="2.5" height="42" fill="#1A1028"/>
  <line x1="198" y1="38" x2="198" y2="80" stroke="#2A1C10" stroke-width="0.3" opacity="0.5"/>
  <line x1="200.5" y1="38" x2="200.5" y2="80" stroke="#0E0818" stroke-width="0.3" opacity="0.6"/>

  <!-- RIGHT WALL (dark silhouette) -->
  <rect x="200" y="38" width="70" height="42" fill="#141830"/>

  <!-- CHIMNEY + smoke -->
  <rect x="240" y="10" width="15" height="28" fill="#141830"/>
  <path d="M247,8 Q245,0 250,-6" fill="none" stroke="#4A506A" stroke-width="1.5" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.35;0.25;0.12;0" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="d" values="M247,8 Q245,0 250,-6;M247,8 Q243,-2 249,-10;M247,8 Q249,-1 245,-8;M247,8 Q245,0 250,-6" dur="4s" repeatCount="indefinite"/>
  </path>
  <path d="M250,8 Q252,1 248,-5" fill="none" stroke="#4A506A" stroke-width="1.2" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.25;0.18;0.08;0" dur="5s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="d" values="M250,8 Q252,1 248,-5;M250,8 Q254,-2 249,-9;M250,8 Q248,0 252,-7;M250,8 Q252,1 248,-5" dur="5s" repeatCount="indefinite" begin="1.5s"/>
  </path>

  <!-- ROOF -->
  <polygon points="118,38 200,6 282,38" fill="#121628" stroke="#2A3450" stroke-width="0.8"/>

  <!-- attic window -->
  <rect x="190" y="22" width="14" height="11" rx="1" fill="#D8A840" opacity="0.1"/>
  <rect x="190" y="22" width="14" height="11" rx="1" fill="none" stroke="#3A4060" stroke-width="0.6"/>

  <!-- right window (dim glow) -->
  <rect x="235" y="48" width="20" height="15" rx="1" fill="#D8A840" opacity="0.15"/>
  <rect x="235" y="48" width="20" height="15" rx="1" fill="none" stroke="#3A4060" stroke-width="0.8"/>
  <line x1="245" y1="48" x2="245" y2="63" stroke="#3A4060" stroke-width="0.5"/>
  <line x1="235" y1="55.5" x2="255" y2="55.5" stroke="#3A4060" stroke-width="0.5"/>

  <!-- door -->
  <rect x="205" y="55" width="18" height="25" rx="1" fill="#1A2038" stroke="#3A4060" stroke-width="0.8"/>
  <circle cx="220" cy="68" r="1.5" fill="#B89840" opacity="0.6"/>
  <rect x="208" y="80" width="12" height="20" fill="#101828" opacity="0.5"/>

  <!-- fence -->
  <g opacity="0.35" stroke="#3A4060" stroke-width="0.8">
    <line x1="78" y1="78" x2="130" y2="78"/>
    <line x1="270" y1="78" x2="340" y2="78"/>
    <line x1="83" y1="72" x2="83" y2="78"/>
    <line x1="98" y1="72" x2="98" y2="78"/>
    <line x1="113" y1="72" x2="113" y2="78"/>
    <line x1="280" y1="72" x2="280" y2="78"/>
    <line x1="300" y1="72" x2="300" y2="78"/>
    <line x1="320" y1="72" x2="320" y2="78"/>
  </g>

  <!-- trees -->
  <ellipse cx="58" cy="54" rx="20" ry="24" fill="#0E1620" opacity="0.8">
    <animateTransform attributeName="transform" type="rotate" values="-1,58,75;1,58,75;-1,58,75" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <rect x="56" y="72" width="4" height="8" fill="#0E1620" opacity="0.7"/>
  <ellipse cx="356" cy="56" rx="16" ry="20" fill="#0E1620" opacity="0.7">
    <animateTransform attributeName="transform" type="rotate" values="0.6,356,74;-0.8,356,74;0.6,356,74" dur="6s" repeatCount="indefinite"/>
  </ellipse>
  <rect x="354" y="72" width="4" height="7" fill="#0E1620" opacity="0.6"/>

  <!-- fireflies -->
  <circle cx="88" cy="72" r="0.9" fill="#C0F060" opacity="0">
    <animate attributeName="opacity" values="0;0;0.4;0.7;0.4;0;0;0;0" dur="3.5s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="88;92;86;90;88" dur="3.5s" repeatCount="indefinite"/>
    <animate attributeName="cy" values="72;69;74;68;72" dur="3.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="312" cy="74" r="0.8" fill="#C0F060" opacity="0">
    <animate attributeName="opacity" values="0;0;0;0.35;0.6;0.3;0;0;0" dur="4.5s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="cx" values="312;315;309;313;312" dur="4.5s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="cy" values="74;71;76;70;74" dur="4.5s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <circle cx="175" cy="76" r="0.7" fill="#C0F060" opacity="0">
    <animate attributeName="opacity" values="0;0;0;0;0.5;0.3;0;0" dur="5.5s" repeatCount="indefinite" begin="3s"/>
    <animate attributeName="cx" values="175;178;172;176;175" dur="5.5s" repeatCount="indefinite" begin="3s"/>
    <animate attributeName="cy" values="76;73;77;72;76" dur="5.5s" repeatCount="indefinite" begin="3s"/>
  </circle>

  <!-- moonlight pool on ground -->
  <ellipse cx="332" cy="80" rx="35" ry="10" fill="#D0C8E0" opacity="0.06">
    <animate attributeName="opacity" values="0.04;0.08;0.05;0.07;0.04" dur="8s" repeatCount="indefinite"/>
  </ellipse>
</svg>`,
    not_home: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="lofiNhBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1A2040"/>
      <stop offset="60%" stop-color="#1E2848"/>
      <stop offset="100%" stop-color="#162038"/>
    </linearGradient>
    <radialGradient id="lofiNhMoon" cx="0.82" cy="0.15" r="0.35">
      <stop offset="0%" stop-color="#F0E8D0" stop-opacity="0.4"/>
      <stop offset="40%" stop-color="#D0C8B0" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#C0B8A0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lofiNhWinGlow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#E8C878" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#D0A050" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- deep navy sky with moon wash -->
  <rect width="400" height="100" fill="url(#lofiNhBg)"/>
  <rect width="400" height="100" fill="url(#lofiNhMoon)">
    <animate attributeName="opacity" values="0.8;1;0.85;0.95;0.8" dur="8s" repeatCount="indefinite"/>
  </rect>

  <!-- STARS — brighter -->
  <circle class="star" cx="50" cy="12" r="0.9" fill="#FFF">
    <animate attributeName="opacity" values="0.3;0.85;0.4;0.75;0.3" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle class="star" cx="120" cy="8" r="0.7" fill="#FFF">
    <animate attributeName="opacity" values="0.25;0.7;0.3;0.6;0.25" dur="4s" repeatCount="indefinite" begin="1s"/>
  </circle>
  <circle class="star" cx="180" cy="18" r="0.8" fill="#FFF">
    <animate attributeName="opacity" values="0.3;0.8;0.35;0.7;0.3" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>
  </circle>
  <circle class="star" cx="250" cy="6" r="0.6" fill="#FFF">
    <animate attributeName="opacity" values="0.25;0.7;0.35;0.6;0.25" dur="4.5s" repeatCount="indefinite" begin="2s"/>
  </circle>
  <circle class="star" cx="290" cy="22" r="0.8" fill="#FFF">
    <animate attributeName="opacity" values="0.2;0.65;0.3;0.55;0.2" dur="5s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <circle class="star" cx="370" cy="10" r="0.65" fill="#FFF">
    <animate attributeName="opacity" values="0.2;0.6;0.3;0.5;0.2" dur="3.8s" repeatCount="indefinite" begin="0.8s"/>
  </circle>
  <circle class="star" cx="30" cy="24" r="0.5" fill="#FFF">
    <animate attributeName="opacity" values="0.2;0.55;0.25;0.45;0.2" dur="5.5s" repeatCount="indefinite" begin="1.2s"/>
  </circle>
  <circle class="star" cx="155" cy="5" r="0.55" fill="#FFF">
    <animate attributeName="opacity" values="0.25;0.65;0.3;0.55;0.25" dur="4.2s" repeatCount="indefinite" begin="0.3s"/>
  </circle>

  <!-- MOON — brighter crescent -->
  <circle cx="330" cy="18" r="9" fill="#F0E8D0" opacity="0.7">
    <animate attributeName="opacity" values="0.6;0.8;0.65;0.75;0.6" dur="6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="334" cy="15" r="7.5" fill="#1A2040" opacity="0.95"/>

  <!-- CLOUDS -->
  <ellipse cx="100" cy="20" rx="22" ry="6" fill="#283050" opacity="0">
    <animate attributeName="opacity" values="0;0.3;0.4;0.3;0" dur="22s" repeatCount="indefinite"/>
    <animate attributeName="cx" from="-30" to="430" dur="22s" repeatCount="indefinite"/>
  </ellipse>
  <ellipse cx="260" cy="14" rx="18" ry="5" fill="#283050" opacity="0">
    <animate attributeName="opacity" values="0;0.25;0.35;0.25;0" dur="28s" repeatCount="indefinite" begin="6s"/>
    <animate attributeName="cx" from="-20" to="420" dur="28s" repeatCount="indefinite" begin="6s"/>
  </ellipse>

  <!-- ground -->
  <rect x="0" y="78" width="400" height="22" fill="#121828"/>
  <rect x="0" y="78" width="400" height="1" fill="#2A3450" opacity="0.5"/>

  <!-- HOUSE silhouette -->
  <rect x="130" y="38" width="140" height="42" fill="#141830"/>
  <polygon points="118,38 200,6 282,38" fill="#121628" stroke="#2A3450" stroke-width="0.8"/>
  <rect x="240" y="10" width="15" height="28" fill="#141830"/>
  <!-- chimney smoke -->
  <path d="M247,8 Q245,0 250,-6" fill="none" stroke="#4A506A" stroke-width="1.5" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.35;0.25;0.12;0" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="d" values="M247,8 Q245,0 250,-6;M247,8 Q243,-2 249,-10;M247,8 Q249,-1 245,-8;M247,8 Q245,0 250,-6" dur="4s" repeatCount="indefinite"/>
  </path>
  <path d="M250,8 Q252,1 248,-5" fill="none" stroke="#4A506A" stroke-width="1.2" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" values="0;0.25;0.18;0.08;0" dur="5s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="d" values="M250,8 Q252,1 248,-5;M250,8 Q254,-2 249,-9;M250,8 Q248,0 252,-7;M250,8 Q252,1 248,-5" dur="5s" repeatCount="indefinite" begin="1.5s"/>
  </path>

  <!-- windows with warm glow -->
  <rect x="148" y="48" width="20" height="15" rx="1" fill="#D8A840" opacity="0.35">
    <animate attributeName="opacity" values="0.3;0.4;0.32;0.38;0.3" dur="5s" repeatCount="indefinite"/>
  </rect>
  <rect x="148" y="48" width="20" height="15" rx="1" fill="none" stroke="#3A4060" stroke-width="0.8"/>
  <line x1="158" y1="48" x2="158" y2="63" stroke="#3A4060" stroke-width="0.5"/>
  <line x1="148" y1="55.5" x2="168" y2="55.5" stroke="#3A4060" stroke-width="0.5"/>

  <rect x="178" y="48" width="20" height="15" rx="1" fill="#D8A840" opacity="0.25">
    <animate attributeName="opacity" values="0.2;0.3;0.22;0.28;0.2" dur="6s" repeatCount="indefinite" begin="1s"/>
  </rect>
  <rect x="178" y="48" width="20" height="15" rx="1" fill="none" stroke="#3A4060" stroke-width="0.8"/>
  <line x1="188" y1="48" x2="188" y2="63" stroke="#3A4060" stroke-width="0.5"/>
  <line x1="178" y1="55.5" x2="198" y2="55.5" stroke="#3A4060" stroke-width="0.5"/>

  <rect x="235" y="48" width="20" height="15" rx="1" fill="#D8A840" opacity="0.15"/>
  <rect x="235" y="48" width="20" height="15" rx="1" fill="none" stroke="#3A4060" stroke-width="0.8"/>
  <line x1="245" y1="48" x2="245" y2="63" stroke="#3A4060" stroke-width="0.5"/>
  <line x1="235" y1="55.5" x2="255" y2="55.5" stroke="#3A4060" stroke-width="0.5"/>

  <!-- window glow halos -->
  <ellipse cx="158" cy="55" rx="16" ry="12" fill="url(#lofiNhWinGlow)" opacity="0.15">
    <animate attributeName="opacity" values="0.12;0.2;0.14;0.18;0.12" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <ellipse cx="188" cy="55" rx="14" ry="10" fill="url(#lofiNhWinGlow)" opacity="0.1">
    <animate attributeName="opacity" values="0.08;0.15;0.1;0.13;0.08" dur="6s" repeatCount="indefinite" begin="1s"/>
  </ellipse>

  <!-- attic window -->
  <rect x="190" y="22" width="14" height="11" rx="1" fill="#D8A840" opacity="0.1"/>
  <rect x="190" y="22" width="14" height="11" rx="1" fill="none" stroke="#3A4060" stroke-width="0.6"/>

  <!-- door -->
  <rect x="205" y="55" width="18" height="25" rx="1" fill="#1A2038" stroke="#3A4060" stroke-width="0.8"/>
  <circle cx="220" cy="68" r="1.5" fill="#B89840" opacity="0.6"/>
  <rect x="208" y="80" width="12" height="20" fill="#101828" opacity="0.5"/>

  <!-- fence -->
  <g opacity="0.35" stroke="#3A4060" stroke-width="0.8">
    <line x1="78" y1="78" x2="130" y2="78"/>
    <line x1="270" y1="78" x2="340" y2="78"/>
    <line x1="83" y1="72" x2="83" y2="78"/>
    <line x1="98" y1="72" x2="98" y2="78"/>
    <line x1="113" y1="72" x2="113" y2="78"/>
    <line x1="280" y1="72" x2="280" y2="78"/>
    <line x1="300" y1="72" x2="300" y2="78"/>
    <line x1="320" y1="72" x2="320" y2="78"/>
  </g>

  <!-- trees -->
  <ellipse cx="58" cy="54" rx="20" ry="24" fill="#0E1620" opacity="0.8">
    <animateTransform attributeName="transform" type="rotate" values="-1,58,75;1,58,75;-1,58,75" dur="5s" repeatCount="indefinite"/>
  </ellipse>
  <rect x="56" y="72" width="4" height="8" fill="#0E1620" opacity="0.7"/>
  <ellipse cx="356" cy="56" rx="16" ry="20" fill="#0E1620" opacity="0.7">
    <animateTransform attributeName="transform" type="rotate" values="0.6,356,74;-0.8,356,74;0.6,356,74" dur="6s" repeatCount="indefinite"/>
  </ellipse>
  <rect x="354" y="72" width="4" height="7" fill="#0E1620" opacity="0.6"/>

  <!-- fireflies — brighter -->
  <circle cx="88" cy="72" r="0.9" fill="#C0F060" opacity="0">
    <animate attributeName="opacity" values="0;0;0.4;0.7;0.4;0;0;0;0" dur="3.5s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="88;92;86;90;88" dur="3.5s" repeatCount="indefinite"/>
    <animate attributeName="cy" values="72;69;74;68;72" dur="3.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="312" cy="74" r="0.8" fill="#C0F060" opacity="0">
    <animate attributeName="opacity" values="0;0;0;0.35;0.6;0.3;0;0;0" dur="4.5s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="cx" values="312;315;309;313;312" dur="4.5s" repeatCount="indefinite" begin="1.5s"/>
    <animate attributeName="cy" values="74;71;76;70;74" dur="4.5s" repeatCount="indefinite" begin="1.5s"/>
  </circle>
  <circle cx="175" cy="76" r="0.7" fill="#C0F060" opacity="0">
    <animate attributeName="opacity" values="0;0;0;0;0.5;0.3;0;0" dur="5.5s" repeatCount="indefinite" begin="3s"/>
    <animate attributeName="cx" values="175;178;172;176;175" dur="5.5s" repeatCount="indefinite" begin="3s"/>
    <animate attributeName="cy" values="76;73;77;72;76" dur="5.5s" repeatCount="indefinite" begin="3s"/>
  </circle>

  <!-- moonlight pool on ground -->
  <ellipse cx="332" cy="80" rx="35" ry="10" fill="#D0C8E0" opacity="0.06">
    <animate attributeName="opacity" values="0.04;0.08;0.05;0.07;0.04" dur="8s" repeatCount="indefinite"/>
  </ellipse>
</svg>`,
};

var PresencePhase;
(function (PresencePhase) {
    PresencePhase["IDLE"] = "IDLE";
    PresencePhase["WALKING_OUT"] = "WALKING_OUT";
    PresencePhase["CROSSFADE"] = "CROSSFADE";
    PresencePhase["WALKING_IN"] = "WALKING_IN";
})(PresencePhase || (PresencePhase = {}));
const ROOM_ANIMATIONS = {
    office: ['studying', 'reading', 'thinking', 'coffee-break', 'whiteboarding', 'phone-call'],
    kitchen: ['cooking', 'eating', 'coffee-making', 'washing-dishes', 'snacking', 'baking'],
    bedroom: ['sleeping', 'reading-bed', 'meditating', 'getting-dressed', 'morning-stretch', 'phone-bed'],
    living_room: ['watching', 'gaming', 'reading-couch', 'relaxing', 'stretching', 'napping'],
};
const WALK_SPEED = 0.025;
const EXIT_EDGE = 110;
const ENTER_EDGE = -10;
const CROSSFADE_DURATION = 800;
const MAX_DELTA = 200;
const DEFAULT_X = 35;
function getRoomAnimation(room) {
    if (!room)
        return 'idle';
    const activities = ROOM_ANIMATIONS[room];
    if (!activities)
        return 'idle';
    return activities[Math.floor(Math.random() * activities.length)];
}
function createInitialState(room) {
    const currentRoom = room ?? null;
    return {
        phase: PresencePhase.IDLE,
        currentRoom,
        targetRoom: null,
        avatarX: DEFAULT_X,
        animation: getRoomAnimation(currentRoom),
        crossfadeProgress: 0,
        outgoingRoom: null,
        visible: true,
    };
}
function changeRoom(state, room) {
    if (room === state.currentRoom) {
        return state;
    }
    if (!state.currentRoom) {
        return {
            ...state,
            targetRoom: room,
            phase: PresencePhase.CROSSFADE,
            crossfadeProgress: 0,
            visible: false,
        };
    }
    if (state.phase === PresencePhase.WALKING_OUT || state.phase === PresencePhase.CROSSFADE) {
        return { ...state, targetRoom: room };
    }
    return {
        ...state,
        targetRoom: room,
        phase: PresencePhase.WALKING_OUT,
        outgoingRoom: state.currentRoom,
        animation: 'walking',
    };
}
function tick(state, deltaMs) {
    const dt = Math.min(deltaMs, MAX_DELTA);
    if (state.phase === PresencePhase.IDLE) {
        return state;
    }
    if (state.phase === PresencePhase.WALKING_OUT) {
        const newX = state.avatarX + WALK_SPEED * dt;
        if (newX >= EXIT_EDGE) {
            return {
                ...state,
                phase: PresencePhase.CROSSFADE,
                avatarX: EXIT_EDGE,
                visible: false,
                crossfadeProgress: 0,
                outgoingRoom: state.currentRoom,
            };
        }
        return { ...state, avatarX: newX };
    }
    if (state.phase === PresencePhase.CROSSFADE) {
        const newCrossfade = state.crossfadeProgress + dt / CROSSFADE_DURATION;
        if (newCrossfade >= 1) {
            return {
                ...state,
                phase: PresencePhase.WALKING_IN,
                currentRoom: state.targetRoom,
                crossfadeProgress: 1,
                avatarX: ENTER_EDGE,
                visible: true,
                animation: 'walking',
            };
        }
        return { ...state, crossfadeProgress: newCrossfade };
    }
    if (state.phase === PresencePhase.WALKING_IN) {
        const newX = state.avatarX + WALK_SPEED * dt;
        if (newX >= DEFAULT_X) {
            const result = {
                ...state,
                phase: PresencePhase.IDLE,
                avatarX: DEFAULT_X,
                targetRoom: null,
                outgoingRoom: null,
                animation: getRoomAnimation(state.currentRoom),
            };
            if (state.targetRoom && state.targetRoom !== state.currentRoom) {
                return changeRoom(result, state.targetRoom);
            }
            return result;
        }
        return { ...state, avatarX: newX };
    }
    return state;
}

class PresenceEngine {
    constructor(onStateChange) {
        this._rafId = null;
        this._lastTimestamp = null;
        this._state = createInitialState();
        this._onStateChange = onStateChange;
    }
    getState() {
        return this._state;
    }
    changeRoom(room) {
        this._state = changeRoom(this._state, room);
        this._onStateChange(this._state);
    }
    start() {
        if (this._rafId !== null)
            return;
        this._lastTimestamp = null;
        this._rafId = requestAnimationFrame((ts) => this._loop(ts));
    }
    stop() {
        if (this._rafId !== null) {
            cancelAnimationFrame(this._rafId);
            this._rafId = null;
        }
        this._lastTimestamp = null;
    }
    _loop(timestamp) {
        if (this._lastTimestamp !== null) {
            const delta = timestamp - this._lastTimestamp;
            const prevState = this._state;
            this._state = tick(this._state, delta);
            if (this._state !== prevState) {
                this._onStateChange(this._state);
            }
        }
        this._lastTimestamp = timestamp;
        this._rafId = requestAnimationFrame((ts) => this._loop(ts));
    }
}

const W$1 = 128;
const H$1 = 176;
const P$1 = 4;
const KNOWN = new Set([
    'idle',
    'walking',
    'studying',
    'reading',
    'thinking',
    'coffee-break',
    'whiteboarding',
    'phone-call',
    'cooking',
    'eating',
    'coffee-making',
    'washing-dishes',
    'snacking',
    'baking',
    'watching',
    'gaming',
    'reading-couch',
    'relaxing',
    'stretching',
    'napping',
    'sleeping',
    'reading-bed',
    'meditating',
    'getting-dressed',
    'morning-stretch',
    'phone-bed',
]);
const PALETTE = {
    B: '#2A3342',
    b: '#3B4860',
    S: '#F2C9A7',
    s: '#D3AC8D',
    C: '#7BC6A4',
    c: '#63A98B',
    E: '#1A2230',
    M: '#C86F6F',
    H: '#5B3829',
    A: '#F4D35E',
};
function px$1(gx, gy, gw, gh, fill) {
    return `<rect x="${gx * P$1}" y="${gy * P$1}" width="${gw * P$1}" height="${gh * P$1}" fill="${fill}"/>`;
}
function bitmap(gx, gy, rows) {
    const rects = [];
    for (let y = 0; y < rows.length; y++) {
        const row = rows[y];
        let x = 0;
        while (x < row.length) {
            const ch = row[x];
            if (ch === '.') {
                x++;
                continue;
            }
            let end = x + 1;
            while (end < row.length && row[end] === ch)
                end++;
            const fill = PALETTE[ch];
            if (fill) {
                rects.push(`<rect x="${(gx + x) * P$1}" y="${(gy + y) * P$1}" width="${(end - x) * P$1}" height="${P$1}" fill="${fill}"/>`);
            }
            x = end;
        }
    }
    return rects.join('');
}
function normalize(activity) {
    if (!KNOWN.has(activity))
        return 'idle';
    if (activity === 'walking')
        return 'walking';
    if (activity === 'sleeping' || activity === 'napping' || activity === 'reading-bed' || activity === 'phone-bed') {
        return 'sleeping';
    }
    if (activity === 'studying' ||
        activity === 'reading' ||
        activity === 'thinking' ||
        activity === 'whiteboarding' ||
        activity === 'phone-call' ||
        activity === 'coffee-break') {
        return 'studying';
    }
    if (activity === 'cooking' ||
        activity === 'coffee-making' ||
        activity === 'washing-dishes' ||
        activity === 'snacking' ||
        activity === 'baking' ||
        activity === 'eating') {
        return 'cooking';
    }
    if (activity === 'watching' ||
        activity === 'gaming' ||
        activity === 'reading-couch' ||
        activity === 'relaxing' ||
        activity === 'stretching' ||
        activity === 'meditating' ||
        activity === 'morning-stretch' ||
        activity === 'getting-dressed') {
        return 'relaxing';
    }
    return 'idle';
}
function baseShadow() {
    return `<ellipse class="friendly-shadow" cx="64" cy="164" rx="28" ry="5" fill="#000" opacity="0.14"/>`;
}
function baseBody() {
    const torso = bitmap(10, 22, [
        '.....bbbbbb.....',
        '...bbCCCCCCbb...',
        '..bCCCCCCCCCCb..',
        '..bCCCCCCCCCCb..',
        '..bCCCCCCCCCCb..',
        '..bbCCCCCCCCbb..',
        '...bbCCCCCCbb...',
    ]);
    const arms = bitmap(7, 24, [
        's..............s',
        'S..............S',
        'S..............S',
    ]);
    const legs = bitmap(11, 29, [
        '....B....B....',
        '...bB....Bb...',
        '..bbA....Abb..',
    ]);
    return `${torso}${arms}${legs}`;
}
function baseHead() {
    return bitmap(9, 10, [
        '....HHHHHH....',
        '...HSSSSSSH...',
        '..HSSSSSSSSH..',
        '..HSSSSSSSSH..',
        '..HSSSSSSSSH..',
        '..HSSSSSSSSH..',
        '..HSSSSSSSSH..',
        '...HSSSSSSH...',
        '....HHHHHH....',
    ]);
}
function baseFace() {
    return [
        px$1(13, 15, 1, 1, PALETTE.E),
        px$1(18, 15, 1, 1, PALETTE.E),
        px$1(15, 17, 2, 1, PALETTE.M),
        px$1(14, 16, 4, 1, PALETTE.s),
    ].join('');
}
function propFor(activity) {
    if (activity === 'studying') {
        return `<g class="friendly-overlay-studying">${px$1(10, 32, 12, 2, '#2A3342')}${px$1(11, 32, 10, 1, '#4E6788')}</g>`;
    }
    if (activity === 'cooking') {
        return `<g class="friendly-overlay-cooking">${px$1(21, 30, 4, 2, '#7A8799')}${px$1(25, 31, 3, 1, '#5F6A7A')}</g>`;
    }
    if (activity === 'walking') {
        return `<g class="friendly-overlay-walking">${px$1(3, 24, 2, 1, '#C9D8EA')}${px$1(27, 27, 2, 1, '#C9D8EA')}</g>`;
    }
    if (activity === 'sleeping') {
        return `<g class="friendly-overlay-sleeping">${px$1(8, 28, 16, 5, '#7A8DB2')}${px$1(9, 28, 14, 1, '#A6B8D5')}<text x="100" y="56" fill="#C9D8EA" font-size="10">z</text></g>`;
    }
    if (activity === 'relaxing') {
        return `<g class="friendly-overlay-relaxing">${px$1(23, 17, 3, 2, '#F2C9A7')}</g>`;
    }
    return '';
}
function renderBaseCharacter() {
    return [
        '<g class="friendly-character">',
        '<g class="friendly-base">',
        '<g class="friendly-body">',
        baseBody(),
        '</g>',
        '<g class="friendly-head">',
        baseHead(),
        '</g>',
        '<g class="friendly-face">',
        baseFace(),
        '</g>',
        '</g>',
        '</g>',
    ].join('');
}
const cache = new Map();
function getFriendlyAvatarSvg(activity) {
    const act = normalize(activity);
    const cached = cache.get(act);
    if (cached)
        return cached;
    const svg = [
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W$1} ${H$1}" shape-rendering="crispEdges" class="friendly-avatar friendly-${act}">`,
        baseShadow(),
        renderBaseCharacter(),
        propFor(act),
        '</svg>',
    ].join('');
    cache.set(act, svg);
    return svg;
}
const friendlyAvatarStyles = `
  .friendly-avatar { width: 100%; height: auto; display: block; image-rendering: pixelated; image-rendering: crisp-edges; }
  .friendly-shadow { transform-origin: 64px 164px; }

  @keyframes friendly-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }
  @keyframes friendly-walk {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }
  @keyframes friendly-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.03); }
  }
  @keyframes friendly-nod {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(2deg); }
  }
  @keyframes friendly-sway {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-2deg); }
  }

  .friendly-idle .friendly-character { animation: friendly-bob 2.8s ease-in-out infinite; }
  .friendly-idle .friendly-body { animation: friendly-breathe 3s ease-in-out infinite; transform-origin: 64px 112px; }

  .friendly-walking .friendly-character { animation: friendly-walk 0.45s cubic-bezier(0.34, 1.2, 0.64, 1) infinite; }
  .friendly-walking .friendly-overlay-walking { animation: friendly-breathe 0.45s ease-in-out infinite; }

  .friendly-studying .friendly-head { animation: friendly-nod 2.8s ease-in-out infinite; transform-origin: 64px 64px; }
  .friendly-cooking .friendly-head { animation: friendly-nod 1.8s ease-in-out infinite; transform-origin: 64px 64px; }
  .friendly-relaxing .friendly-character { animation: friendly-sway 3.2s ease-in-out infinite; transform-origin: 64px 96px; }

  .friendly-sleeping .friendly-character { transform: translateY(8px); }
  .friendly-sleeping .friendly-face { opacity: 0.6; }
`;

const ACTIVITIES = ['idle', 'walking', 'studying', 'cooking', 'sleeping'];
const W = 128;
const H = 80;
const P = 4;
// Black and tan dachshund palette
const COLORS = {
    'K': '#1A1A1A', // black body
    'k': '#2D2D2D', // black highlight
    'T': '#D4943C', // tan (rich reddish-brown)
    't': '#C07830', // tan shadow
    'O': '#E0A848', // tan highlight (bright)
    'N': '#1A1A1A', // nose (black)
    'W': '#FFFFFF', // eye white
    'R': '#D85858', // tongue
};
function renderBitmap(gx, gy, rows) {
    const rects = [];
    for (let r = 0; r < rows.length; r++) {
        const row = rows[r];
        let c = 0;
        while (c < row.length) {
            const ch = row[c];
            if (ch === '.') {
                c++;
                continue;
            }
            let end = c + 1;
            while (end < row.length && row[end] === ch)
                end++;
            const fill = COLORS[ch];
            if (fill) {
                rects.push(`<rect x="${(gx + c) * P}" y="${(gy + r) * P}" width="${(end - c) * P}" height="${P}" fill="${fill}"/>`);
            }
            c = end;
        }
    }
    return rects.join('');
}
function px(gx, gy, gw, gh, fill) {
    return `<rect x="${gx * P}" y="${gy * P}" width="${gw * P}" height="${gh * P}" fill="${fill}"/>`;
}
// ===== STANDING BODY (very long, low) =====
// 20 wide at grid (5, 5) — elongated sausage shape
const BODY_BMP = [
    '.kKKKKKKKKKKKKKKKKk.', // row 5: body top highlights
    'KKKKKKKKKKKKKKKKKKKK', // row 6: full body black
    'KKKKKkKKKKKKKKkKKKKK', // row 7: body with shading
    'KKKKKKKKKKKKKKKKKKkK', // row 8: body black
    'tTOTTTTTTTTTTTTOTTt.', // row 9: tan belly with orange highlights
    '.OTTTTTTTTTTTTTTTOt.', // row 10: tan belly bright edges
];
function bodyShape() {
    return renderBitmap(5, 5, BODY_BMP);
}
// ===== HEAD (side profile, facing left) =====
// 7 wide at grid (0, 3)
const HEAD_BMP = [
    '..kKK..', // row 3: top of head
    '.KKKKKK', // row 4: head wide (connects to body)
    'KKTKKWK', // row 5: tan eyebrow dot + eye white
    'KKKKKKK', // row 6: face
    'NTTKKkK', // row 7: nose + tan muzzle + highlight
    '.TKKk..', // row 8: tan jaw
];
const SNOUT_BMP = [
    'NK', // row 7: nose detail
];
function headShape() {
    return renderBitmap(0, 3, HEAD_BMP) + renderBitmap(0, 8, SNOUT_BMP);
}
// ===== FLOPPY EAR (hangs down from top of head) =====
// 2 wide at grid (5, 1) — long dachshund ear
const EAR_BMP = [
    '.K', // row 1: ear top
    'KK', // row 2: ear upper
    'KK', // row 3: ear mid
    'Kk', // row 4: ear with highlight
    '.k', // row 5: ear tip (hanging down)
];
function earShape() {
    return `<g class="dog-ear">${renderBitmap(5, 1, EAR_BMP)}</g>`;
}
// ===== TAIL (curves up from rear) =====
// 3 wide at grid (24, 3)
const TAIL_BMP = [
    '..K', // row 3: tail tip up
    '.KK', // row 4: tail mid
    'KkK', // row 5: tail base with highlight
];
function tailShape() {
    return `<g class="dog-tail">${renderBitmap(24, 3, TAIL_BMP)}</g>`;
}
function tongueShape() {
    return `<g class="dog-tongue" style="opacity: 0">${px(0, 9, 1, 1, COLORS['R'])}</g>`;
}
// ===== LEGS (very short — dachshund!) =====
// Only 2 rows tall: black upper, tan paws
const FRONT_LEGS_BMP = [
    'KK.KK', // row 11: upper legs black
    'Tt.tT', // row 12: tan paws
];
function frontLegs() {
    return renderBitmap(8, 11, FRONT_LEGS_BMP);
}
const BACK_LEGS_BMP = [
    'KK.KK', // row 11: upper legs black
    'tT.Tt', // row 12: tan paws
];
function backLegs() {
    return renderBitmap(19, 11, BACK_LEGS_BMP);
}
function groundShadow() {
    return `<ellipse class="dog-shadow" cx="64" cy="56" rx="40" ry="4" fill="#000" opacity="0.1"/>`;
}
// Let me redo sleeping more carefully as inline
function sleepingShape() {
    const parts = [];
    // Curled oval body
    parts.push(renderBitmap(6, 4, [
        '...KKKK.....', // row 4: head top
        '.KKKKKKKKKK.', // row 5: head + body
        'KKTKKKKKKKKK', // row 6: tan brow, body
        'KKWKKKKKKKKKK'.slice(0, 12), // row 7: eye, body
        'KKKtOTTOtKKK', // row 8: tan belly
        '.KOTTTTTOkK.', // row 9: orange belly
        '..kKKKKKKK..', // row 10: body bottom
        '...KK.......', // row 11: tail
    ]));
    // Nose
    parts.push(px(6, 7, 1, 1, COLORS['N']));
    return parts.join('');
}
// ===== SITTING (begging pose for cooking) =====
function sittingShape() {
    const parts = [];
    // Head looking up
    parts.push(renderBitmap(8, 2, [
        '..KKK.', // row 2: ear + top
        '.KKKKK', // row 3: head
        'KKTWKK', // row 4: tan brow + eye
        'KKKKKK', // row 5: face
    ]));
    // Nose
    parts.push(px(7, 4, 1, 1, COLORS['N']));
    // Body angled down
    parts.push(renderBitmap(10, 5, [
        'KKKkKK', // row 5: body top
        'KKKKKK', // row 6: body
        'KKkKKK', // row 7: body shading
        'tOTTOt', // row 8: tan belly
        'OTTTOt', // row 9: belly
        'KKKKKK', // row 10: body bottom
    ]));
    // Front legs tucked
    parts.push(renderBitmap(11, 11, [
        'KK.KK', // row 11: tucked legs
        'Tt.tT', // row 12: tan paws
    ]));
    // Tongue
    parts.push(px(7, 5, 1, 2, COLORS['R']));
    return parts.join('');
}
// ===== MAIN EXPORT =====
const svgCache = new Map();
function getDogSvg(activity) {
    const act = (ACTIVITIES.includes(activity) ? activity : 'idle');
    const cached = svgCache.get(act);
    if (cached)
        return cached;
    const parts = [groundShadow(), '<g class="dog-character">'];
    if (act === 'sleeping') {
        parts.push(`<g class="dog-body">${sleepingShape()}</g>`);
    }
    else if (act === 'cooking') {
        parts.push(`<g class="dog-body">${sittingShape()}</g>`);
        parts.push(`<g class="dog-tail">${renderBitmap(16, 3, ['.K', 'Kk', '.K'])}</g>`);
    }
    else {
        parts.push(`<g class="dog-body">${bodyShape()}</g>`);
        parts.push(`<g class="dog-head">${headShape()}</g>`);
        parts.push(earShape());
        parts.push(tailShape());
        parts.push(tongueShape());
        parts.push(`<g class="dog-legs-front">${frontLegs()}</g>`);
        parts.push(`<g class="dog-legs-back">${backLegs()}</g>`);
    }
    parts.push('</g>');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" shape-rendering="crispEdges" class="dog-avatar dog-${act}">${parts.join('')}</svg>`;
    svgCache.set(act, svg);
    return svg;
}
// ===== STYLES =====
const dogStyles = `
  .dog-avatar { width: 100%; height: auto; display: block; image-rendering: pixelated; image-rendering: crisp-edges; }

  @keyframes dog-tail-wag {
    0%, 100% { transform: rotate(-15deg); }
    20% { transform: rotate(20deg); }
    40% { transform: rotate(-12deg); }
    60% { transform: rotate(18deg); }
    80% { transform: rotate(-8deg); }
  }
  @keyframes dog-breathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.03); }
  }
  @keyframes dog-trot {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }
  @keyframes dog-ear-bounce {
    0%, 100% { transform: translateY(0); }
    40% { transform: translateY(-4px); }
  }
  @keyframes dog-leg-trot-front {
    0% { transform: rotate(-12deg); }
    100% { transform: rotate(12deg); }
  }
  @keyframes dog-leg-trot-back {
    0% { transform: rotate(12deg); }
    100% { transform: rotate(-12deg); }
  }
  @keyframes dog-sniff {
    0%, 100% { transform: translateY(0); }
    15% { transform: translateY(-2px); }
    35% { transform: translateY(-1px); }
  }
  @keyframes dog-tongue-pant {
    0%, 40%, 60%, 100% { opacity: 0; }
    45%, 55% { opacity: 1; }
  }
  @keyframes dog-ear-twitch {
    0%, 85%, 100% { transform: translateY(0); }
    88% { transform: translateY(-3px); }
    95% { transform: translateY(-2px); }
  }
  @keyframes dog-dream-twitch {
    0%, 88%, 100% { transform: translateX(0); }
    90% { transform: translateX(2px); }
    93% { transform: translateX(-1px); }
  }
  @keyframes dog-nose-nuzzle {
    0%, 92%, 100% { transform: rotate(0deg); }
    95% { transform: rotate(1deg); }
  }
  @keyframes dog-paw-tap {
    0%, 45%, 55%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }
  @keyframes dog-beg-nod {
    0%, 100% { transform: translateY(0); }
    30% { transform: translateY(-4px); }
    70% { transform: translateY(-3px); }
  }

  /* ===== IDLE ===== */
  .dog-idle .dog-tail {
    animation: dog-tail-wag 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 100px 20px;
  }
  .dog-idle .dog-head {
    animation: dog-sniff 2s ease-in-out infinite;
    transform-origin: 16px 28px;
  }
  .dog-idle .dog-tongue {
    animation: dog-tongue-pant 1.5s ease-in-out infinite;
  }
  .dog-idle .dog-ear {
    animation: dog-ear-twitch 3s ease-in-out infinite;
    transform-origin: 24px 8px;
  }
  .dog-idle .dog-body {
    animation: dog-breathe 3s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 56px 36px;
  }

  /* ===== WALKING ===== */
  .dog-walking .dog-character {
    animation: dog-trot 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) infinite;
  }
  .dog-walking .dog-ear {
    animation: dog-ear-bounce 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 24px 8px;
  }
  .dog-walking .dog-tail {
    animation: dog-tail-wag 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 100px 20px;
  }
  .dog-walking .dog-tongue {
    animation: dog-tongue-pant 0.8s ease-in-out infinite;
  }
  .dog-walking .dog-legs-front {
    animation: dog-leg-trot-front 0.3s ease-in-out infinite alternate;
    transform-origin: 40px 44px;
  }
  .dog-walking .dog-legs-back {
    animation: dog-leg-trot-back 0.3s ease-in-out infinite alternate;
    transform-origin: 84px 44px;
  }

  /* ===== STUDYING ===== */
  .dog-studying .dog-body {
    animation: dog-breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: 56px 36px;
  }
  .dog-studying .dog-tail {
    animation: dog-tail-wag 2s ease-in-out infinite;
    transform-origin: 100px 20px;
  }
  .dog-studying .dog-ear {
    animation: dog-ear-twitch 4s ease-in-out infinite;
    animation-delay: 1s;
    transform-origin: 24px 8px;
  }

  /* ===== COOKING ===== */
  .dog-cooking .dog-tail {
    animation: dog-tail-wag 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    transform-origin: 68px 16px;
  }
  .dog-cooking .dog-body {
    animation: dog-beg-nod 1s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  }

  /* ===== SLEEPING ===== */
  .dog-sleeping .dog-body {
    animation: dog-breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite, dog-dream-twitch 6s ease-in-out infinite, dog-nose-nuzzle 5s ease-in-out infinite;
    transform-origin: 56px 36px;
  }

  .dog-shadow { transform-origin: 64px 56px; }
`;

class MiniMeCard extends i$1 {
    setConfig(config) {
        if (!config.entity) {
            throw new Error("Please define an entity");
        }
        this._config = config;
    }
    set hass(hass) {
        this._hass = hass;
        if (!this._config)
            return;
        // --- Human entity ---
        const entity = hass.states[this._config.entity];
        if (!entity) {
            if (this._error !== `Entity not found: ${this._config.entity}`) {
                this._error = `Entity not found: ${this._config.entity}`;
            }
            if (this._entityState !== undefined) {
                this._entityState = undefined;
            }
            return;
        }
        if (entity.state === "unavailable") {
            if (this._error !== "Entity is unavailable") {
                this._error = "Entity is unavailable";
            }
            if (this._entityState !== undefined) {
                this._entityState = undefined;
            }
            return;
        }
        // --- Dog entity ---
        if (this._config.dog_entity) {
            const dogEntity = hass.states[this._config.dog_entity];
            if (dogEntity && dogEntity.state !== "unavailable" && dogEntity.state !== "not_home") {
                const dogArea = dogEntity.attributes?.area || dogEntity.state;
                const dogRoomKey = dogArea.toLowerCase().replace(/\s+/g, "_");
                if (this._dogEntityState !== dogRoomKey) {
                    this._dogEntityState = dogRoomKey;
                    if (this._dogEngine) {
                        this._dogEngine.changeRoom(dogRoomKey);
                    }
                }
            }
            else {
                if (this._dogEntityState !== undefined) {
                    this._dogEntityState = undefined;
                }
            }
        }
        // Bermuda device_tracker: state is home/not_home, area is in attributes
        if (entity.state === "not_home") {
            if (this._entityState !== "not_home") {
                this._entityState = "not_home";
            }
            if (this._error !== undefined) {
                this._error = undefined;
            }
            return;
        }
        if (this._error !== undefined) {
            this._error = undefined;
        }
        // Read area from attributes (Bermuda BLE) with fallback to entity state
        const areaName = entity.attributes?.area || entity.state;
        const roomKey = areaName.toLowerCase().replace(/\s+/g, "_");
        if (this._entityState !== roomKey) {
            this._entityState = roomKey;
            if (this._engine) {
                this._engine.changeRoom(roomKey);
            }
        }
    }
    getCardSize() {
        return 1;
    }
    static getConfigElement() {
        return document.createElement("minime-card-editor");
    }
    static getStubConfig() {
        return {
            entity: "",
            name: "Presence",
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this._engine = new PresenceEngine((presenceState) => {
            this._presenceState = presenceState;
        });
        this._engine.start();
        // hass is set before connectedCallback, so sync the engine with current room
        if (this._entityState && this._entityState !== "not_home") {
            this._engine.changeRoom(this._entityState);
        }
        // Dog engine
        if (this._config?.dog_entity) {
            this._dogEngine = new PresenceEngine((dogState) => {
                this._dogPresenceState = dogState;
            });
            this._dogEngine.start();
            if (this._dogEntityState) {
                this._dogEngine.changeRoom(this._dogEntityState);
            }
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._engine) {
            this._engine.stop();
        }
        if (this._dogEngine) {
            this._dogEngine.stop();
        }
    }
    render() {
        if (!this._config) {
            return b ``;
        }
        if (this._error) {
            return b `
        <ha-card>
          <div class="header error-header">
            <span class="error-icon">!</span>
            <span class="error-message">${this._error}</span>
          </div>
        </ha-card>
      `;
        }
        // Not-home state: show dark house (with sleeping dog if dog is home)
        const isNotHome = this._entityState === "not_home";
        if (isNotHome) {
            const dogHome = this._config.dog_entity && this._dogEntityState;
            const notHomeSvg = dogHome ? lofiRoomBackgrounds["not_home_dog"] : lofiRoomBackgrounds["not_home"];
            return b `
        <ha-card>
          <div class="header">
            <div class="room-bg-wrap">
              ${b `<div class="room-bg">${o(notHomeSvg)}</div>`
                }
            </div>
            ${dogHome ? b `<div class="dog-avatar-wrap" style="left: 41%">${o(getDogSvg('sleeping'))}</div>` : ""}
          </div>
        </ha-card>
      `;
        }
        const anim = this._presenceState;
        const currentRoom = anim?.currentRoom;
        const outgoingRoom = anim?.outgoingRoom;
        const toKey = (name) => name.toLowerCase().replace(/\s+/g, "_");
        const currentRoomSvg = currentRoom ? lofiRoomBackgrounds[toKey(currentRoom)] : undefined;
        const outgoingRoomSvg = outgoingRoom ? lofiRoomBackgrounds[toKey(outgoingRoom)] : undefined;
        const isCrossfading = anim?.phase === PresencePhase.CROSSFADE;
        const crossfadeOpacity = anim ? 1 - anim.crossfadeProgress : 1;
        const showAvatar = anim?.visible ?? false;
        const avatarX = anim?.avatarX ?? 35;
        const activity = anim?.animation ?? 'idle';
        // Dog positioning
        const dogAnim = this._dogPresenceState;
        const showDog = this._config.dog_entity &&
            this._dogEntityState &&
            dogAnim?.visible &&
            dogAnim?.currentRoom === currentRoom;
        const dogX = showDog ? (dogAnim?.avatarX ?? 35) + 12 : 0;
        const dogActivity = dogAnim?.animation ?? 'idle';
        return b `
      <ha-card>
        <div class="header">
          <div class="room-bg-wrap">
            ${outgoingRoomSvg && isCrossfading
            ? b `<div class="room-bg outgoing" style="opacity: ${crossfadeOpacity}">${o(outgoingRoomSvg)}</div>`
            : ""}
            ${currentRoomSvg
            ? b `<div class="room-bg ${isCrossfading ? "incoming" : ""}">${o(currentRoomSvg)}</div>`
            : b `<div class="room-bg-fallback"></div>`}
          </div>

          ${showAvatar
            ? b `<div class="avatar" style="left: ${avatarX}%">${o(getFriendlyAvatarSvg(activity))}</div>`
            : ""}
          ${showDog
            ? b `<div class="dog-avatar-wrap" style="left: ${dogX}%">${o(getDogSvg(dogActivity))}</div>`
            : ""}
        </div>
      </ha-card>
    `;
    }
}
MiniMeCard.styles = i$4 `
    :host {
      --minime-bg: var(--card-background-color, #1c1c1c);
      --minime-text: var(--primary-text-color, #fff);
      --minime-secondary: var(--secondary-text-color, #aaa);
      --minime-error: var(--error-color, #db4437);
    }

    ha-card {
      overflow: hidden;
      padding: 0;
      border: none;
    }

    .header {
      position: relative;
      height: 120px;
      overflow: hidden;
    }

    .room-bg-wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .room-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .room-bg svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .room-bg.outgoing {
      z-index: 0;
    }

    .room-bg.incoming {
      z-index: 0;
    }

    .room-bg-fallback {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #2a2a3e 0%, #1a1a2e 100%);
    }

    .avatar {
      position: absolute;
      bottom: 10px;
      width: 56px;
      z-index: 2;
      transform: translateX(-50%);
      image-rendering: pixelated;
      image-rendering: crisp-edges;
    }

    .dog-avatar-wrap {
      position: absolute;
      bottom: 12px;
      width: 38px;
      z-index: 2;
      transform: translateX(-50%);
      image-rendering: pixelated;
      image-rendering: crisp-edges;
    }

    .error-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 16px;
      background: var(--minime-bg);
    }

    .error-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--minime-error);
      color: white;
      font-weight: bold;
      font-size: 12px;
      flex-shrink: 0;
    }

    .error-message {
      font-size: 0.85em;
      color: var(--minime-error);
    }

    ${r$4(friendlyAvatarStyles)}
    ${r$4(dogStyles)}
  `;
__decorate([
    r()
], MiniMeCard.prototype, "_entityState", void 0);
__decorate([
    r()
], MiniMeCard.prototype, "_dogEntityState", void 0);
__decorate([
    r()
], MiniMeCard.prototype, "_error", void 0);
__decorate([
    r()
], MiniMeCard.prototype, "_presenceState", void 0);
__decorate([
    r()
], MiniMeCard.prototype, "_dogPresenceState", void 0);

class MiniMeCardEditor extends i$1 {
    setConfig(config) {
        this._config = config;
    }
    _valueChanged(ev) {
        if (!this._config || !this.hass)
            return;
        const target = ev.target;
        const configValue = target.configValue;
        const value = target.value;
        if (!configValue)
            return;
        const newConfig = {
            ...this._config,
            [configValue]: value,
        };
        this._dispatchConfigChanged(newConfig);
    }
    _dispatchConfigChanged(config) {
        const event = new CustomEvent('config-changed', {
            detail: { config },
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }
    render() {
        if (!this._config) {
            return b ``;
        }
        return b `
      <div class="editor">
        <div class="editor-row">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entity || ''}
            .configValue=${'entity'}
            @value-changed=${this._valueChanged}
            label="Entity"
            allow-custom-entity
          ></ha-entity-picker>
        </div>

        <div class="editor-row">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.dog_entity || ''}
            .configValue=${'dog_entity'}
            @value-changed=${this._valueChanged}
            label="Dog Entity (optional)"
            allow-custom-entity
          ></ha-entity-picker>
        </div>

        <div class="editor-row">
          <label>
            Card Name
            <input
              type="text"
              .value=${this._config.name || ''}
              @input=${(ev) => {
            const target = ev.target;
            const newConfig = {
                ...this._config,
                name: target.value,
            };
            this._dispatchConfigChanged(newConfig);
        }}
            />
          </label>
        </div>

      </div>
    `;
    }
}
MiniMeCardEditor.styles = i$4 `
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
  `;
__decorate([
    r()
], MiniMeCardEditor.prototype, "_config", void 0);

// MiniMe Card - Entry Point
const CARD_VERSION = '0.3.0';
console.info(`%c MINIME-CARD %c v${CARD_VERSION} `, 'color: white; background: #555; font-weight: bold;', 'color: white; background: #007acc;');
// Register custom elements
customElements.define('minime-card', MiniMeCard);
customElements.define('minime-card-editor', MiniMeCardEditor);
// Register with Home Assistant card picker
window.customCards = window.customCards || [];
window.customCards.push({
    type: 'minime-card',
    name: 'MiniMe Card',
    description: 'Animated pixel art avatar showing your room presence',
});
//# sourceMappingURL=minime-card.js.map
