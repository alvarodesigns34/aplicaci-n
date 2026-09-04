(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function jv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zm={exports:{}},Kl={},Bm={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=Symbol.for("react.element"),Xv=Symbol.for("react.portal"),$v=Symbol.for("react.fragment"),Yv=Symbol.for("react.strict_mode"),qv=Symbol.for("react.profiler"),Kv=Symbol.for("react.provider"),Zv=Symbol.for("react.context"),Jv=Symbol.for("react.forward_ref"),Qv=Symbol.for("react.suspense"),ex=Symbol.for("react.memo"),tx=Symbol.for("react.lazy"),vh=Symbol.iterator;function nx(t){return t===null||typeof t!="object"?null:(t=vh&&t[vh]||t["@@iterator"],typeof t=="function"?t:null)}var Gm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hm=Object.assign,Vm={};function Xs(t,e,n){this.props=t,this.context=e,this.refs=Vm,this.updater=n||Gm}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wm(){}Wm.prototype=Xs.prototype;function sf(t,e,n){this.props=t,this.context=e,this.refs=Vm,this.updater=n||Gm}var of=sf.prototype=new Wm;of.constructor=sf;Hm(of,Xs.prototype);of.isPureReactComponent=!0;var xh=Array.isArray,jm=Object.prototype.hasOwnProperty,af={current:null},Xm={key:!0,ref:!0,__self:!0,__source:!0};function $m(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jm.call(e,i)&&!Xm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Qo,type:t,key:s,ref:o,props:r,_owner:af.current}}function ix(t,e){return{$$typeof:Qo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qo}function rx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _h=/\/+/g;function Mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rx(""+t.key):e.toString(36)}function Qa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Qo:case Xv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Mc(o,0):i,xh(r)?(n="",t!=null&&(n=t.replace(_h,"$&/")+"/"),Qa(r,e,n,"",function(c){return c})):r!=null&&(lf(r)&&(r=ix(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(_h,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",xh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Mc(s,a);o+=Qa(s,e,n,l,r)}else if(l=nx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Mc(s,a++),o+=Qa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(t,e,n){if(t==null)return t;var i=[],r=0;return Qa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function sx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},el={transition:null},ox={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:el,ReactCurrentOwner:af};function Ym(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:ca,forEach:function(t,e,n){ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ca(t,function(){e++}),e},toArray:function(t){return ca(t,function(e){return e})||[]},only:function(t){if(!lf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Xs;$e.Fragment=$v;$e.Profiler=qv;$e.PureComponent=sf;$e.StrictMode=Yv;$e.Suspense=Qv;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ox;$e.act=Ym;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Hm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=af.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jm.call(e,l)&&!Xm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Qo,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:Zv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Kv,_context:t},t.Consumer=t};$e.createElement=$m;$e.createFactory=function(t){var e=$m.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:Jv,render:t}};$e.isValidElement=lf;$e.lazy=function(t){return{$$typeof:tx,_payload:{_status:-1,_result:t},_init:sx}};$e.memo=function(t,e){return{$$typeof:ex,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=el.transition;el.transition={};try{t()}finally{el.transition=e}};$e.unstable_act=Ym;$e.useCallback=function(t,e){return un.current.useCallback(t,e)};$e.useContext=function(t){return un.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return un.current.useDeferredValue(t)};$e.useEffect=function(t,e){return un.current.useEffect(t,e)};$e.useId=function(){return un.current.useId()};$e.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return un.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};$e.useRef=function(t){return un.current.useRef(t)};$e.useState=function(t){return un.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return un.current.useTransition()};$e.version="18.3.1";Bm.exports=$e;var he=Bm.exports;const ax=jv(he);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx=he,cx=Symbol.for("react.element"),ux=Symbol.for("react.fragment"),dx=Object.prototype.hasOwnProperty,fx=lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hx={key:!0,ref:!0,__self:!0,__source:!0};function qm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)dx.call(e,i)&&!hx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:cx,type:t,key:s,ref:o,props:r,_owner:fx.current}}Kl.Fragment=ux;Kl.jsx=qm;Kl.jsxs=qm;zm.exports=Kl;var T=zm.exports,Cu={},Km={exports:{}},Rn={},Zm={exports:{}},Jm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,q){var Z=I.length;I.push(q);e:for(;0<Z;){var oe=Z-1>>>1,Se=I[oe];if(0<r(Se,q))I[oe]=q,I[Z]=Se,Z=oe;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var q=I[0],Z=I.pop();if(Z!==q){I[0]=Z;e:for(var oe=0,Se=I.length,Re=Se>>>1;oe<Re;){var G=2*(oe+1)-1,Y=I[G],ae=G+1,ue=I[ae];if(0>r(Y,Z))ae<Se&&0>r(ue,Y)?(I[oe]=ue,I[ae]=Z,oe=ae):(I[oe]=Y,I[G]=Z,oe=G);else if(ae<Se&&0>r(ue,Z))I[oe]=ue,I[ae]=Z,oe=ae;else break e}}return q}function r(I,q){var Z=I.sortIndex-q.sortIndex;return Z!==0?Z:I.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,p=!1,x=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=I)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function y(I){if(_=!1,g(I),!x)if(n(l)!==null)x=!0,z(C);else{var q=n(c);q!==null&&$(y,q.startTime-I)}}function C(I,q){x=!1,_&&(_=!1,u(L),L=-1),p=!0;var Z=f;try{for(g(q),h=n(l);h!==null&&(!(h.expirationTime>q)||I&&!R());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,f=h.priorityLevel;var Se=oe(h.expirationTime<=q);q=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&i(l),g(q)}else i(l);h=n(l)}if(h!==null)var Re=!0;else{var G=n(c);G!==null&&$(y,G.startTime-q),Re=!1}return Re}finally{h=null,f=Z,p=!1}}var A=!1,b=null,L=-1,E=5,S=-1;function R(){return!(t.unstable_now()-S<E)}function B(){if(b!==null){var I=t.unstable_now();S=I;var q=!0;try{q=b(!0,I)}finally{q?k():(A=!1,b=null)}}else A=!1}var k;if(typeof v=="function")k=function(){v(B)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,X=j.port2;j.port1.onmessage=B,k=function(){X.postMessage(null)}}else k=function(){m(B,0)};function z(I){b=I,A||(A=!0,k())}function $(I,q){L=m(function(){I(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,z(C))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var Z=f;f=q;try{return I()}finally{f=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Z=f;f=I;try{return q()}finally{f=Z}},t.unstable_scheduleCallback=function(I,q,Z){var oe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,I){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,I={id:d++,callback:q,priorityLevel:I,startTime:Z,expirationTime:Se,sortIndex:-1},Z>oe?(I.sortIndex=Z,e(c,I),n(l)===null&&I===n(c)&&(_?(u(L),L=-1):_=!0,$(y,Z-oe))):(I.sortIndex=Se,e(l,I),x||p||(x=!0,z(C))),I},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(I){var q=f;return function(){var Z=f;f=q;try{return I.apply(this,arguments)}finally{f=Z}}}})(Jm);Zm.exports=Jm;var px=Zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mx=he,Cn=px;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qm=new Set,Do={};function Wr(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(Do[t]=e,t=0;t<e.length;t++)Qm.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ru=Object.prototype.hasOwnProperty,gx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yh={},Sh={};function vx(t){return Ru.call(Sh,t)?!0:Ru.call(yh,t)?!1:gx.test(t)?Sh[t]=!0:(yh[t]=!0,!1)}function xx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _x(t,e,n,i){if(e===null||typeof e>"u"||xx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var cf=/[\-:]([a-z])/g;function uf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cf,uf);$t[e]=new dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cf,uf);$t[e]=new dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cf,uf);$t[e]=new dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new dn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function df(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_x(e,n,r,i)&&(n=null),i||r===null?vx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),fs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),ff=Symbol.for("react.strict_mode"),Pu=Symbol.for("react.profiler"),eg=Symbol.for("react.provider"),tg=Symbol.for("react.context"),hf=Symbol.for("react.forward_ref"),Lu=Symbol.for("react.suspense"),Nu=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),Wi=Symbol.for("react.lazy"),ng=Symbol.for("react.offscreen"),Mh=Symbol.iterator;function Js(t){return t===null||typeof t!="object"?null:(t=Mh&&t[Mh]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,Ec;function mo(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+t}var wc=!1;function Tc(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?mo(t):""}function yx(t){switch(t.tag){case 5:return mo(t.type);case 16:return mo("Lazy");case 13:return mo("Suspense");case 19:return mo("SuspenseList");case 0:case 2:case 15:return t=Tc(t.type,!1),t;case 11:return t=Tc(t.type.render,!1),t;case 1:return t=Tc(t.type,!0),t;default:return""}}function Iu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case fs:return"Portal";case Pu:return"Profiler";case ff:return"StrictMode";case Lu:return"Suspense";case Nu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tg:return(t.displayName||"Context")+".Consumer";case eg:return(t._context.displayName||"Context")+".Provider";case hf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pf:return e=t.displayName||null,e!==null?e:Iu(t.type)||"Memo";case Wi:e=t._payload,t=t._init;try{return Iu(t(e))}catch{}}return null}function Sx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Iu(e);case 8:return e===ff?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ig(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mx(t){var e=ig(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function da(t){t._valueTracker||(t._valueTracker=Mx(t))}function rg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ig(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Du(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Eh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sg(t,e){e=e.checked,e!=null&&df(t,"checked",e,!1)}function Uu(t,e){sg(t,e);var n=ur(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ou(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ou(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ou(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var go=Array.isArray;function Ts(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Fu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Th(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(go(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function og(t,e){var n=ur(e.value),i=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ah(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ag(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ku(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ag(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fa,lg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fa=fa||document.createElement("div"),fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ex=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(t){Ex.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yo[e]=yo[t]})});function cg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yo.hasOwnProperty(t)&&yo[t]?(""+e).trim():e+"px"}function ug(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=cg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var wx=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zu(t,e){if(e){if(wx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gu=null;function mf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hu=null,As=null,bs=null;function bh(t){if(t=na(t)){if(typeof Hu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=tc(e),Hu(t.stateNode,t.type,e))}}function dg(t){As?bs?bs.push(t):bs=[t]:As=t}function fg(){if(As){var t=As,e=bs;if(bs=As=null,bh(t),e)for(t=0;t<e.length;t++)bh(e[t])}}function hg(t,e){return t(e)}function pg(){}var Ac=!1;function mg(t,e,n){if(Ac)return t(e,n);Ac=!0;try{return hg(t,e,n)}finally{Ac=!1,(As!==null||bs!==null)&&(pg(),fg())}}function Oo(t,e){var n=t.stateNode;if(n===null)return null;var i=tc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Vu=!1;if(Ci)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{Vu=!1}function Tx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var So=!1,xl=null,_l=!1,Wu=null,Ax={onError:function(t){So=!0,xl=t}};function bx(t,e,n,i,r,s,o,a,l){So=!1,xl=null,Tx.apply(Ax,arguments)}function Cx(t,e,n,i,r,s,o,a,l){if(bx.apply(this,arguments),So){if(So){var c=xl;So=!1,xl=null}else throw Error(ne(198));_l||(_l=!0,Wu=c)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ch(t){if(jr(t)!==t)throw Error(ne(188))}function Rx(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ch(r),t;if(s===i)return Ch(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function vg(t){return t=Rx(t),t!==null?xg(t):null}function xg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xg(t);if(e!==null)return e;t=t.sibling}return null}var _g=Cn.unstable_scheduleCallback,Rh=Cn.unstable_cancelCallback,Px=Cn.unstable_shouldYield,Lx=Cn.unstable_requestPaint,bt=Cn.unstable_now,Nx=Cn.unstable_getCurrentPriorityLevel,gf=Cn.unstable_ImmediatePriority,yg=Cn.unstable_UserBlockingPriority,yl=Cn.unstable_NormalPriority,Ix=Cn.unstable_LowPriority,Sg=Cn.unstable_IdlePriority,Zl=null,fi=null;function Dx(t){if(fi&&typeof fi.onCommitFiberRoot=="function")try{fi.onCommitFiberRoot(Zl,t,void 0,(t.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:Fx,Ux=Math.log,Ox=Math.LN2;function Fx(t){return t>>>=0,t===0?32:31-(Ux(t)/Ox|0)|0}var ha=64,pa=4194304;function vo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=vo(a):(s&=o,s!==0&&(i=vo(s)))}else o=n&~r,o!==0?i=vo(o):s!==0&&(i=vo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ti(e),r=1<<n,i|=t[n],e&=~r;return i}function kx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ti(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=kx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mg(){var t=ha;return ha<<=1,!(ha&4194240)&&(ha=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ti(e),t[e]=n}function Bx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ti(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function vf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ti(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function Eg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wg,xf,Tg,Ag,bg,Xu=!1,ma=[],Qi=null,er=null,tr=null,Fo=new Map,ko=new Map,Xi=[],Gx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ph(t,e){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(e.pointerId)}}function eo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=na(e),e!==null&&xf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Hx(t,e,n,i,r){switch(e){case"focusin":return Qi=eo(Qi,t,e,n,i,r),!0;case"dragenter":return er=eo(er,t,e,n,i,r),!0;case"mouseover":return tr=eo(tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Fo.set(s,eo(Fo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ko.set(s,eo(ko.get(s)||null,t,e,n,i,r)),!0}return!1}function Cg(t){var e=Pr(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=gg(n),e!==null){t.blockedOn=e,bg(t.priority,function(){Tg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$u(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Gu=i,n.target.dispatchEvent(i),Gu=null}else return e=na(n),e!==null&&xf(e),t.blockedOn=n,!1;e.shift()}return!0}function Lh(t,e,n){tl(t)&&n.delete(e)}function Vx(){Xu=!1,Qi!==null&&tl(Qi)&&(Qi=null),er!==null&&tl(er)&&(er=null),tr!==null&&tl(tr)&&(tr=null),Fo.forEach(Lh),ko.forEach(Lh)}function to(t,e){t.blockedOn===e&&(t.blockedOn=null,Xu||(Xu=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,Vx)))}function zo(t){function e(r){return to(r,t)}if(0<ma.length){to(ma[0],t);for(var n=1;n<ma.length;n++){var i=ma[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Qi!==null&&to(Qi,t),er!==null&&to(er,t),tr!==null&&to(tr,t),Fo.forEach(e),ko.forEach(e),n=0;n<Xi.length;n++)i=Xi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Xi.length&&(n=Xi[0],n.blockedOn===null);)Cg(n),n.blockedOn===null&&Xi.shift()}var Cs=Di.ReactCurrentBatchConfig,Ml=!0;function Wx(t,e,n,i){var r=at,s=Cs.transition;Cs.transition=null;try{at=1,_f(t,e,n,i)}finally{at=r,Cs.transition=s}}function jx(t,e,n,i){var r=at,s=Cs.transition;Cs.transition=null;try{at=4,_f(t,e,n,i)}finally{at=r,Cs.transition=s}}function _f(t,e,n,i){if(Ml){var r=$u(t,e,n,i);if(r===null)Fc(t,e,i,El,n),Ph(t,i);else if(Hx(r,t,e,n,i))i.stopPropagation();else if(Ph(t,i),e&4&&-1<Gx.indexOf(t)){for(;r!==null;){var s=na(r);if(s!==null&&wg(s),s=$u(t,e,n,i),s===null&&Fc(t,e,i,El,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Fc(t,e,i,null,n)}}var El=null;function $u(t,e,n,i){if(El=null,t=mf(i),t=Pr(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return El=t,null}function Rg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nx()){case gf:return 1;case yg:return 4;case yl:case Ix:return 16;case Sg:return 536870912;default:return 16}default:return 16}}var qi=null,yf=null,nl=null;function Pg(){if(nl)return nl;var t,e=yf,n=e.length,i,r="value"in qi?qi.value:qi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return nl=r.slice(t,1<i?1-i:void 0)}function il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ga(){return!0}function Nh(){return!1}function Pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ga:Nh,this.isPropagationStopped=Nh,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sf=Pn($s),ta=Mt({},$s,{view:0,detail:0}),Xx=Pn(ta),Cc,Rc,no,Jl=Mt({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(Cc=t.screenX-no.screenX,Rc=t.screenY-no.screenY):Rc=Cc=0,no=t),Cc)},movementY:function(t){return"movementY"in t?t.movementY:Rc}}),Ih=Pn(Jl),$x=Mt({},Jl,{dataTransfer:0}),Yx=Pn($x),qx=Mt({},ta,{relatedTarget:0}),Pc=Pn(qx),Kx=Mt({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),Zx=Pn(Kx),Jx=Mt({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qx=Pn(Jx),e_=Mt({},$s,{data:0}),Dh=Pn(e_),t_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=i_[t])?!!e[t]:!1}function Mf(){return r_}var s_=Mt({},ta,{key:function(t){if(t.key){var e=t_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?n_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mf,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),o_=Pn(s_),a_=Mt({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uh=Pn(a_),l_=Mt({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mf}),c_=Pn(l_),u_=Mt({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),d_=Pn(u_),f_=Mt({},Jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),h_=Pn(f_),p_=[9,13,27,32],Ef=Ci&&"CompositionEvent"in window,Mo=null;Ci&&"documentMode"in document&&(Mo=document.documentMode);var m_=Ci&&"TextEvent"in window&&!Mo,Lg=Ci&&(!Ef||Mo&&8<Mo&&11>=Mo),Oh=" ",Fh=!1;function Ng(t,e){switch(t){case"keyup":return p_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ig(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function g_(t,e){switch(t){case"compositionend":return Ig(e);case"keypress":return e.which!==32?null:(Fh=!0,Oh);case"textInput":return t=e.data,t===Oh&&Fh?null:t;default:return null}}function v_(t,e){if(ps)return t==="compositionend"||!Ef&&Ng(t,e)?(t=Pg(),nl=yf=qi=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lg&&e.locale!=="ko"?null:e.data;default:return null}}var x_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!x_[t.type]:e==="textarea"}function Dg(t,e,n,i){dg(i),e=wl(e,"onChange"),0<e.length&&(n=new Sf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Eo=null,Bo=null;function __(t){jg(t,0)}function Ql(t){var e=vs(t);if(rg(e))return t}function y_(t,e){if(t==="change")return e}var Ug=!1;if(Ci){var Lc;if(Ci){var Nc="oninput"in document;if(!Nc){var zh=document.createElement("div");zh.setAttribute("oninput","return;"),Nc=typeof zh.oninput=="function"}Lc=Nc}else Lc=!1;Ug=Lc&&(!document.documentMode||9<document.documentMode)}function Bh(){Eo&&(Eo.detachEvent("onpropertychange",Og),Bo=Eo=null)}function Og(t){if(t.propertyName==="value"&&Ql(Bo)){var e=[];Dg(e,Bo,t,mf(t)),mg(__,e)}}function S_(t,e,n){t==="focusin"?(Bh(),Eo=e,Bo=n,Eo.attachEvent("onpropertychange",Og)):t==="focusout"&&Bh()}function M_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ql(Bo)}function E_(t,e){if(t==="click")return Ql(e)}function w_(t,e){if(t==="input"||t==="change")return Ql(e)}function T_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ii=typeof Object.is=="function"?Object.is:T_;function Go(t,e){if(ii(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ru.call(e,r)||!ii(t[r],e[r]))return!1}return!0}function Gh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hh(t,e){var n=Gh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gh(n)}}function Fg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kg(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function wf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function A_(t){var e=kg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fg(n.ownerDocument.documentElement,n)){if(i!==null&&wf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Hh(n,s);var o=Hh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var b_=Ci&&"documentMode"in document&&11>=document.documentMode,ms=null,Yu=null,wo=null,qu=!1;function Vh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qu||ms==null||ms!==vl(i)||(i=ms,"selectionStart"in i&&wf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wo&&Go(wo,i)||(wo=i,i=wl(Yu,"onSelect"),0<i.length&&(e=new Sf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ms)))}function va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},Ic={},zg={};Ci&&(zg=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function ec(t){if(Ic[t])return Ic[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zg)return Ic[t]=e[n];return t}var Bg=ec("animationend"),Gg=ec("animationiteration"),Hg=ec("animationstart"),Vg=ec("transitionend"),Wg=new Map,Wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){Wg.set(t,e),Wr(e,[t])}for(var Dc=0;Dc<Wh.length;Dc++){var Uc=Wh[Dc],C_=Uc.toLowerCase(),R_=Uc[0].toUpperCase()+Uc.slice(1);hr(C_,"on"+R_)}hr(Bg,"onAnimationEnd");hr(Gg,"onAnimationIteration");hr(Hg,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(Vg,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P_=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function jh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Cx(i,e,void 0,t),t.currentTarget=null}function jg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;jh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;jh(r,a,c),s=l}}}if(_l)throw t=Wu,_l=!1,Wu=null,t}function pt(t,e){var n=e[ed];n===void 0&&(n=e[ed]=new Set);var i=t+"__bubble";n.has(i)||(Xg(e,t,2,!1),n.add(i))}function Oc(t,e,n){var i=0;e&&(i|=4),Xg(n,t,i,e)}var xa="_reactListening"+Math.random().toString(36).slice(2);function Ho(t){if(!t[xa]){t[xa]=!0,Qm.forEach(function(n){n!=="selectionchange"&&(P_.has(n)||Oc(n,!1,t),Oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xa]||(e[xa]=!0,Oc("selectionchange",!1,e))}}function Xg(t,e,n,i){switch(Rg(e)){case 1:var r=Wx;break;case 4:r=jx;break;default:r=_f}n=r.bind(null,e,n,t),r=void 0,!Vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Fc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Pr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}mg(function(){var c=s,d=mf(n),h=[];e:{var f=Wg.get(t);if(f!==void 0){var p=Sf,x=t;switch(t){case"keypress":if(il(n)===0)break e;case"keydown":case"keyup":p=o_;break;case"focusin":x="focus",p=Pc;break;case"focusout":x="blur",p=Pc;break;case"beforeblur":case"afterblur":p=Pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=c_;break;case Bg:case Gg:case Hg:p=Zx;break;case Vg:p=d_;break;case"scroll":p=Xx;break;case"wheel":p=h_;break;case"copy":case"cut":case"paste":p=Qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Uh}var _=(e&4)!==0,m=!_&&t==="scroll",u=_?f!==null?f+"Capture":null:f;_=[];for(var v=c,g;v!==null;){g=v;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,u!==null&&(y=Oo(v,u),y!=null&&_.push(Vo(v,y,g)))),m)break;v=v.return}0<_.length&&(f=new p(f,x,null,n,d),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Gu&&(x=n.relatedTarget||n.fromElement)&&(Pr(x)||x[Ri]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Pr(x):null,x!==null&&(m=jr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(_=Ih,y="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Uh,y="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?f:vs(p),g=x==null?f:vs(x),f=new _(y,v+"leave",p,n,d),f.target=m,f.relatedTarget=g,y=null,Pr(d)===c&&(_=new _(u,v+"enter",x,n,d),_.target=g,_.relatedTarget=m,y=_),m=y,p&&x)t:{for(_=p,u=x,v=0,g=_;g;g=Yr(g))v++;for(g=0,y=u;y;y=Yr(y))g++;for(;0<v-g;)_=Yr(_),v--;for(;0<g-v;)u=Yr(u),g--;for(;v--;){if(_===u||u!==null&&_===u.alternate)break t;_=Yr(_),u=Yr(u)}_=null}else _=null;p!==null&&Xh(h,f,p,_,!1),x!==null&&m!==null&&Xh(h,m,x,_,!0)}}e:{if(f=c?vs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=y_;else if(kh(f))if(Ug)C=w_;else{C=M_;var A=S_}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=E_);if(C&&(C=C(t,c))){Dg(h,C,n,d);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Ou(f,"number",f.value)}switch(A=c?vs(c):window,t){case"focusin":(kh(A)||A.contentEditable==="true")&&(ms=A,Yu=c,wo=null);break;case"focusout":wo=Yu=ms=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,Vh(h,n,d);break;case"selectionchange":if(b_)break;case"keydown":case"keyup":Vh(h,n,d)}var b;if(Ef)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ps?Ng(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Lg&&n.locale!=="ko"&&(ps||L!=="onCompositionStart"?L==="onCompositionEnd"&&ps&&(b=Pg()):(qi=d,yf="value"in qi?qi.value:qi.textContent,ps=!0)),A=wl(c,L),0<A.length&&(L=new Dh(L,t,null,n,d),h.push({event:L,listeners:A}),b?L.data=b:(b=Ig(n),b!==null&&(L.data=b)))),(b=m_?g_(t,n):v_(t,n))&&(c=wl(c,"onBeforeInput"),0<c.length&&(d=new Dh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=b))}jg(h,e)})}function Vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Oo(t,n),s!=null&&i.unshift(Vo(t,s,r)),s=Oo(t,e),s!=null&&i.push(Vo(t,s,r))),t=t.return}return i}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Oo(n,s),l!=null&&o.unshift(Vo(n,l,a))):r||(l=Oo(n,s),l!=null&&o.push(Vo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var L_=/\r\n?/g,N_=/\u0000|\uFFFD/g;function $h(t){return(typeof t=="string"?t:""+t).replace(L_,`
`).replace(N_,"")}function _a(t,e,n){if(e=$h(e),$h(t)!==e&&n)throw Error(ne(425))}function Tl(){}var Ku=null,Zu=null;function Ju(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qu=typeof setTimeout=="function"?setTimeout:void 0,I_=typeof clearTimeout=="function"?clearTimeout:void 0,Yh=typeof Promise=="function"?Promise:void 0,D_=typeof queueMicrotask=="function"?queueMicrotask:typeof Yh<"u"?function(t){return Yh.resolve(null).then(t).catch(U_)}:Qu;function U_(t){setTimeout(function(){throw t})}function kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),zo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);zo(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),ci="__reactFiber$"+Ys,Wo="__reactProps$"+Ys,Ri="__reactContainer$"+Ys,ed="__reactEvents$"+Ys,O_="__reactListeners$"+Ys,F_="__reactHandles$"+Ys;function Pr(t){var e=t[ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qh(t);t!==null;){if(n=t[ci])return n;t=qh(t)}return e}t=n,n=t.parentNode}return null}function na(t){return t=t[ci]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function tc(t){return t[Wo]||null}var td=[],xs=-1;function pr(t){return{current:t}}function gt(t){0>xs||(t.current=td[xs],td[xs]=null,xs--)}function ft(t,e){xs++,td[xs]=t.current,t.current=e}var dr={},tn=pr(dr),mn=pr(!1),Or=dr;function Us(t,e){var n=t.type.contextTypes;if(!n)return dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gn(t){return t=t.childContextTypes,t!=null}function Al(){gt(mn),gt(tn)}function Kh(t,e,n){if(tn.current!==dr)throw Error(ne(168));ft(tn,e),ft(mn,n)}function $g(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,Sx(t)||"Unknown",r));return Mt({},n,i)}function bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Or=tn.current,ft(tn,t),ft(mn,mn.current),!0}function Zh(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=$g(t,e,Or),i.__reactInternalMemoizedMergedChildContext=t,gt(mn),gt(tn),ft(tn,t)):gt(mn),ft(mn,n)}var Mi=null,nc=!1,zc=!1;function Yg(t){Mi===null?Mi=[t]:Mi.push(t)}function k_(t){nc=!0,Yg(t)}function mr(){if(!zc&&Mi!==null){zc=!0;var t=0,e=at;try{var n=Mi;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,nc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),_g(gf,mr),r}finally{at=e,zc=!1}}return null}var _s=[],ys=0,Cl=null,Rl=0,Un=[],On=0,Fr=null,Ei=1,wi="";function Er(t,e){_s[ys++]=Rl,_s[ys++]=Cl,Cl=t,Rl=e}function qg(t,e,n){Un[On++]=Ei,Un[On++]=wi,Un[On++]=Fr,Fr=t;var i=Ei;t=wi;var r=32-ti(i)-1;i&=~(1<<r),n+=1;var s=32-ti(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ei=1<<32-ti(e)+r|n<<r|i,wi=s+t}else Ei=1<<s|n<<r|i,wi=t}function Tf(t){t.return!==null&&(Er(t,1),qg(t,1,0))}function Af(t){for(;t===Cl;)Cl=_s[--ys],_s[ys]=null,Rl=_s[--ys],_s[ys]=null;for(;t===Fr;)Fr=Un[--On],Un[On]=null,wi=Un[--On],Un[On]=null,Ei=Un[--On],Un[On]=null}var An=null,Tn=null,xt=!1,Jn=null;function Kg(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,An=t,Tn=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,An=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:Ei,overflow:wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,An=t,Tn=null,!0):!1;default:return!1}}function nd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function id(t){if(xt){var e=Tn;if(e){var n=e;if(!Jh(t,e)){if(nd(t))throw Error(ne(418));e=nr(n.nextSibling);var i=An;e&&Jh(t,e)?Kg(i,n):(t.flags=t.flags&-4097|2,xt=!1,An=t)}}else{if(nd(t))throw Error(ne(418));t.flags=t.flags&-4097|2,xt=!1,An=t}}}function Qh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;An=t}function ya(t){if(t!==An)return!1;if(!xt)return Qh(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ju(t.type,t.memoizedProps)),e&&(e=Tn)){if(nd(t))throw Zg(),Error(ne(418));for(;e;)Kg(t,e),e=nr(e.nextSibling)}if(Qh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=An?nr(t.stateNode.nextSibling):null;return!0}function Zg(){for(var t=Tn;t;)t=nr(t.nextSibling)}function Os(){Tn=An=null,xt=!1}function bf(t){Jn===null?Jn=[t]:Jn.push(t)}var z_=Di.ReactCurrentBatchConfig;function io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ep(t){var e=t._init;return e(t._payload)}function Jg(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=or(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,g,y){return v===null||v.tag!==6?(v=Xc(g,u.mode,y),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,y){var C=g.type;return C===hs?d(u,v,g.props.children,y,g.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Wi&&ep(C)===v.type)?(y=r(v,g.props),y.ref=io(u,v,g),y.return=u,y):(y=ul(g.type,g.key,g.props,null,u.mode,y),y.ref=io(u,v,g),y.return=u,y)}function c(u,v,g,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=$c(g,u.mode,y),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function d(u,v,g,y,C){return v===null||v.tag!==7?(v=Ur(g,u.mode,y,C),v.return=u,v):(v=r(v,g),v.return=u,v)}function h(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Xc(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ua:return g=ul(v.type,v.key,v.props,null,u.mode,g),g.ref=io(u,null,v),g.return=u,g;case fs:return v=$c(v,u.mode,g),v.return=u,v;case Wi:var y=v._init;return h(u,y(v._payload),g)}if(go(v)||Js(v))return v=Ur(v,u.mode,g,null),v.return=u,v;Sa(u,v)}return null}function f(u,v,g,y){var C=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(u,v,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ua:return g.key===C?l(u,v,g,y):null;case fs:return g.key===C?c(u,v,g,y):null;case Wi:return C=g._init,f(u,v,C(g._payload),y)}if(go(g)||Js(g))return C!==null?null:d(u,v,g,y,null);Sa(u,g)}return null}function p(u,v,g,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(g)||null,a(v,u,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ua:return u=u.get(y.key===null?g:y.key)||null,l(v,u,y,C);case fs:return u=u.get(y.key===null?g:y.key)||null,c(v,u,y,C);case Wi:var A=y._init;return p(u,v,g,A(y._payload),C)}if(go(y)||Js(y))return u=u.get(g)||null,d(v,u,y,C,null);Sa(v,y)}return null}function x(u,v,g,y){for(var C=null,A=null,b=v,L=v=0,E=null;b!==null&&L<g.length;L++){b.index>L?(E=b,b=null):E=b.sibling;var S=f(u,b,g[L],y);if(S===null){b===null&&(b=E);break}t&&b&&S.alternate===null&&e(u,b),v=s(S,v,L),A===null?C=S:A.sibling=S,A=S,b=E}if(L===g.length)return n(u,b),xt&&Er(u,L),C;if(b===null){for(;L<g.length;L++)b=h(u,g[L],y),b!==null&&(v=s(b,v,L),A===null?C=b:A.sibling=b,A=b);return xt&&Er(u,L),C}for(b=i(u,b);L<g.length;L++)E=p(b,u,L,g[L],y),E!==null&&(t&&E.alternate!==null&&b.delete(E.key===null?L:E.key),v=s(E,v,L),A===null?C=E:A.sibling=E,A=E);return t&&b.forEach(function(R){return e(u,R)}),xt&&Er(u,L),C}function _(u,v,g,y){var C=Js(g);if(typeof C!="function")throw Error(ne(150));if(g=C.call(g),g==null)throw Error(ne(151));for(var A=C=null,b=v,L=v=0,E=null,S=g.next();b!==null&&!S.done;L++,S=g.next()){b.index>L?(E=b,b=null):E=b.sibling;var R=f(u,b,S.value,y);if(R===null){b===null&&(b=E);break}t&&b&&R.alternate===null&&e(u,b),v=s(R,v,L),A===null?C=R:A.sibling=R,A=R,b=E}if(S.done)return n(u,b),xt&&Er(u,L),C;if(b===null){for(;!S.done;L++,S=g.next())S=h(u,S.value,y),S!==null&&(v=s(S,v,L),A===null?C=S:A.sibling=S,A=S);return xt&&Er(u,L),C}for(b=i(u,b);!S.done;L++,S=g.next())S=p(b,u,L,S.value,y),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?L:S.key),v=s(S,v,L),A===null?C=S:A.sibling=S,A=S);return t&&b.forEach(function(B){return e(u,B)}),xt&&Er(u,L),C}function m(u,v,g,y){if(typeof g=="object"&&g!==null&&g.type===hs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ua:e:{for(var C=g.key,A=v;A!==null;){if(A.key===C){if(C=g.type,C===hs){if(A.tag===7){n(u,A.sibling),v=r(A,g.props.children),v.return=u,u=v;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Wi&&ep(C)===A.type){n(u,A.sibling),v=r(A,g.props),v.ref=io(u,A,g),v.return=u,u=v;break e}n(u,A);break}else e(u,A);A=A.sibling}g.type===hs?(v=Ur(g.props.children,u.mode,y,g.key),v.return=u,u=v):(y=ul(g.type,g.key,g.props,null,u.mode,y),y.ref=io(u,v,g),y.return=u,u=y)}return o(u);case fs:e:{for(A=g.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=$c(g,u.mode,y),v.return=u,u=v}return o(u);case Wi:return A=g._init,m(u,v,A(g._payload),y)}if(go(g))return x(u,v,g,y);if(Js(g))return _(u,v,g,y);Sa(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=Xc(g,u.mode,y),v.return=u,u=v),o(u)):n(u,v)}return m}var Fs=Jg(!0),Qg=Jg(!1),Pl=pr(null),Ll=null,Ss=null,Cf=null;function Rf(){Cf=Ss=Ll=null}function Pf(t){var e=Pl.current;gt(Pl),t._currentValue=e}function rd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Rs(t,e){Ll=t,Cf=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(Cf!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(Ll===null)throw Error(ne(308));Ss=t,Ll.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Lr=null;function Lf(t){Lr===null?Lr=[t]:Lr.push(t)}function e0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Lf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ji=!1;function Nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function t0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Lf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vf(t,n)}}function tp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nl(t,e,n,i){var r=t.updateQueue;ji=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,_=a;switch(f=e,p=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){h=x.call(p,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,f=typeof x=="function"?x.call(p,h,f):x,f==null)break e;h=Mt({},h,f);break e;case 2:ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=o,t.lanes=o,t.memoizedState=h}}function np(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var ia={},hi=pr(ia),jo=pr(ia),Xo=pr(ia);function Nr(t){if(t===ia)throw Error(ne(174));return t}function If(t,e){switch(ft(Xo,e),ft(jo,t),ft(hi,ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ku(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ku(e,t)}gt(hi),ft(hi,e)}function ks(){gt(hi),gt(jo),gt(Xo)}function n0(t){Nr(Xo.current);var e=Nr(hi.current),n=ku(e,t.type);e!==n&&(ft(jo,t),ft(hi,n))}function Df(t){jo.current===t&&(gt(hi),gt(jo))}var yt=pr(0);function Il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bc=[];function Uf(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var sl=Di.ReactCurrentDispatcher,Gc=Di.ReactCurrentBatchConfig,kr=0,St=null,It=null,zt=null,Dl=!1,To=!1,$o=0,B_=0;function Yt(){throw Error(ne(321))}function Of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ii(t[n],e[n]))return!1;return!0}function Ff(t,e,n,i,r,s){if(kr=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sl.current=t===null||t.memoizedState===null?W_:j_,t=n(i,r),To){s=0;do{if(To=!1,$o=0,25<=s)throw Error(ne(301));s+=1,zt=It=null,e.updateQueue=null,sl.current=X_,t=n(i,r)}while(To)}if(sl.current=Ul,e=It!==null&&It.next!==null,kr=0,zt=It=St=null,Dl=!1,e)throw Error(ne(300));return t}function kf(){var t=$o!==0;return $o=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?St.memoizedState=zt=t:zt=zt.next=t,zt}function Hn(){if(It===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=zt===null?St.memoizedState:zt.next;if(e!==null)zt=e,It=t;else{if(t===null)throw Error(ne(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},zt===null?St.memoizedState=zt=t:zt=zt.next=t}return zt}function Yo(t,e){return typeof e=="function"?e(t):e}function Hc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((kr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,St.lanes|=d,zr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ii(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ii(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function i0(){}function r0(t,e){var n=St,i=Hn(),r=e(),s=!ii(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,zf(a0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,qo(9,o0.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(ne(349));kr&30||s0(n,e,r)}return r}function s0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function o0(t,e,n,i){e.value=n,e.getSnapshot=i,l0(e)&&c0(t)}function a0(t,e,n){return n(function(){l0(e)&&c0(t)})}function l0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ii(t,n)}catch{return!0}}function c0(t){var e=Pi(t,1);e!==null&&ni(e,t,1,-1)}function ip(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:t},e.queue=t,t=t.dispatch=V_.bind(null,St,t),[e.memoizedState,t]}function qo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function u0(){return Hn().memoizedState}function ol(t,e,n,i){var r=oi();St.flags|=t,r.memoizedState=qo(1|e,n,void 0,i===void 0?null:i)}function ic(t,e,n,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&Of(i,o.deps)){r.memoizedState=qo(e,n,s,i);return}}St.flags|=t,r.memoizedState=qo(1|e,n,s,i)}function rp(t,e){return ol(8390656,8,t,e)}function zf(t,e){return ic(2048,8,t,e)}function d0(t,e){return ic(4,2,t,e)}function f0(t,e){return ic(4,4,t,e)}function h0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function p0(t,e,n){return n=n!=null?n.concat([t]):null,ic(4,4,h0.bind(null,e,t),n)}function Bf(){}function m0(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function g0(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function v0(t,e,n){return kr&21?(ii(n,e)||(n=Mg(),St.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function G_(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=Gc.transition;Gc.transition={};try{t(!1),e()}finally{at=n,Gc.transition=i}}function x0(){return Hn().memoizedState}function H_(t,e,n){var i=sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},_0(t))y0(e,n);else if(n=e0(t,e,n,i),n!==null){var r=an();ni(n,t,i,r),S0(n,e,i)}}function V_(t,e,n){var i=sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(_0(t))y0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ii(a,o)){var l=e.interleaved;l===null?(r.next=r,Lf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=e0(t,e,r,i),n!==null&&(r=an(),ni(n,t,i,r),S0(n,e,i))}}function _0(t){var e=t.alternate;return t===St||e!==null&&e===St}function y0(t,e){To=Dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function S0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vf(t,n)}}var Ul={readContext:Gn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},W_={readContext:Gn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:rp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,h0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=H_.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:ip,useDebugValue:Bf,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=ip(!1),e=t[0];return t=G_.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=oi();if(xt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Bt===null)throw Error(ne(349));kr&30||s0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,rp(a0.bind(null,i,s,t),[t]),i.flags|=2048,qo(9,o0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=oi(),e=Bt.identifierPrefix;if(xt){var n=wi,i=Ei;n=(i&~(1<<32-ti(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=B_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},j_={readContext:Gn,useCallback:m0,useContext:Gn,useEffect:zf,useImperativeHandle:p0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:g0,useReducer:Hc,useRef:u0,useState:function(){return Hc(Yo)},useDebugValue:Bf,useDeferredValue:function(t){var e=Hn();return v0(e,It.memoizedState,t)},useTransition:function(){var t=Hc(Yo)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:i0,useSyncExternalStore:r0,useId:x0,unstable_isNewReconciler:!1},X_={readContext:Gn,useCallback:m0,useContext:Gn,useEffect:zf,useImperativeHandle:p0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:g0,useReducer:Vc,useRef:u0,useState:function(){return Vc(Yo)},useDebugValue:Bf,useDeferredValue:function(t){var e=Hn();return It===null?e.memoizedState=t:v0(e,It.memoizedState,t)},useTransition:function(){var t=Vc(Yo)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:i0,useSyncExternalStore:r0,useId:x0,unstable_isNewReconciler:!1};function qn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rc={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=sr(t),s=bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(ni(e,t,r,i),rl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=sr(t),s=bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(ni(e,t,r,i),rl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=sr(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ir(t,r,i),e!==null&&(ni(e,t,i,n),rl(e,t,i))}};function sp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Go(n,i)||!Go(r,s):!0}function M0(t,e,n){var i=!1,r=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(r=gn(e)?Or:tn.current,i=e.contextTypes,s=(i=i!=null)?Us(t,r):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function op(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&rc.enqueueReplaceState(e,e.state,null)}function od(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Nf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gn(s):(s=gn(e)?Or:tn.current,r.context=Us(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&rc.enqueueReplaceState(r,r.state,null),Nl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function zs(t,e){try{var n="",i=e;do n+=yx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Wc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ad(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $_=typeof WeakMap=="function"?WeakMap:Map;function E0(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Fl||(Fl=!0,vd=i),ad(t,e)},n}function w0(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ad(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ad(t,e),typeof i!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ap(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new $_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ay.bind(null,t,e,n),e.then(t,t))}function lp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var Y_=Di.ReactCurrentOwner,pn=!1;function on(t,e,n,i){e.child=t===null?Qg(e,null,n,i):Fs(e,t.child,n,i)}function up(t,e,n,i,r){n=n.render;var s=e.ref;return Rs(e,r),i=Ff(t,e,n,i,s,r),n=kf(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(xt&&n&&Tf(e),e.flags|=1,on(t,e,i,r),e.child)}function dp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Yf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,T0(t,e,s,i,r)):(t=ul(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(o,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=or(s,i),t.ref=e.ref,t.return=e,e.child=t}function T0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Go(s,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,Li(t,e,r)}return ld(t,e,n,i,r)}function A0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Es,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Es,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(Es,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(Es,wn),wn|=i;return on(t,e,r,n),e.child}function b0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ld(t,e,n,i,r){var s=gn(n)?Or:tn.current;return s=Us(e,s),Rs(e,r),n=Ff(t,e,n,i,s,r),i=kf(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(xt&&i&&Tf(e),e.flags|=1,on(t,e,n,r),e.child)}function fp(t,e,n,i,r){if(gn(n)){var s=!0;bl(e)}else s=!1;if(Rs(e,r),e.stateNode===null)al(t,e),M0(e,n,i),od(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gn(c):(c=gn(n)?Or:tn.current,c=Us(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&op(e,o,i,c),ji=!1;var f=e.memoizedState;o.state=f,Nl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||mn.current||ji?(typeof d=="function"&&(sd(e,n,d,i),l=e.memoizedState),(a=ji||sp(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,t0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:qn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=gn(n)?Or:tn.current,l=Us(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&op(e,o,i,l),ji=!1,f=e.memoizedState,o.state=f,Nl(e,i,o,r);var x=e.memoizedState;a!==h||f!==x||mn.current||ji?(typeof p=="function"&&(sd(e,n,p,i),x=e.memoizedState),(c=ji||sp(e,n,c,i,f,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return cd(t,e,n,i,s,r)}function cd(t,e,n,i,r,s){b0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Zh(e,n,!1),Li(t,e,s);i=e.stateNode,Y_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Fs(e,t.child,null,s),e.child=Fs(e,null,a,s)):on(t,e,a,s),e.memoizedState=i.state,r&&Zh(e,n,!0),e.child}function C0(t){var e=t.stateNode;e.pendingContext?Kh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kh(t,e.context,!1),If(t,e.containerInfo)}function hp(t,e,n,i,r){return Os(),bf(r),e.flags|=256,on(t,e,n,i),e.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function R0(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(yt,r&1),t===null)return id(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ac(o,i,0,null),t=Ur(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dd(n),e.memoizedState=ud,t):Gf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return q_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=or(a,s):(s=Ur(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?dd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ud,i}return s=t.child,t=s.sibling,i=or(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Gf(t,e){return e=ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ma(t,e,n,i){return i!==null&&bf(i),Fs(e,t.child,null,n),t=Gf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function q_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Wc(Error(ne(422))),Ma(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ac({mode:"visible",children:i.children},r,0,null),s=Ur(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Fs(e,t.child,null,o),e.child.memoizedState=dd(o),e.memoizedState=ud,s);if(!(e.mode&1))return Ma(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Wc(s,i,void 0),Ma(t,e,o,i)}if(a=(o&t.childLanes)!==0,pn||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),ni(i,t,r,-1))}return $f(),i=Wc(Error(ne(421))),Ma(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ly.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Tn=nr(r.nextSibling),An=e,xt=!0,Jn=null,t!==null&&(Un[On++]=Ei,Un[On++]=wi,Un[On++]=Fr,Ei=t.id,wi=t.overflow,Fr=e),e=Gf(e,i.children),e.flags|=4096,e)}function pp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),rd(t.return,e,n)}function jc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function P0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pp(t,n,e);else if(t.tag===19)pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Il(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),jc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Il(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}jc(e,!0,n,null,s);break;case"together":jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function K_(t,e,n){switch(e.tag){case 3:C0(e),Os();break;case 5:n0(e);break;case 1:gn(e.type)&&bl(e);break;case 4:If(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(Pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?R0(t,e,n):(ft(yt,yt.current&1),t=Li(t,e,n),t!==null?t.sibling:null);ft(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return P0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,A0(t,e,n)}return Li(t,e,n)}var L0,fd,N0,I0;L0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fd=function(){};N0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Nr(hi.current);var s=null;switch(n){case"input":r=Du(t,r),i=Du(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=Fu(t,r),i=Fu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Tl)}zu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Do.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Do.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};I0=function(t,e,n,i){n!==i&&(e.flags|=4)};function ro(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Z_(t,e,n){var i=e.pendingProps;switch(Af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return gn(e.type)&&Al(),qt(e),null;case 3:return i=e.stateNode,ks(),gt(mn),gt(tn),Uf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jn!==null&&(yd(Jn),Jn=null))),fd(t,e),qt(e),null;case 5:Df(e);var r=Nr(Xo.current);if(n=e.type,t!==null&&e.stateNode!=null)N0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return qt(e),null}if(t=Nr(hi.current),ya(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ci]=e,i[Wo]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<xo.length;r++)pt(xo[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":Eh(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":Th(i,s),pt("invalid",i)}zu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&_a(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_a(i.textContent,a,t),r=["children",""+a]):Do.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":da(i),wh(i,s,!0);break;case"textarea":da(i),Ah(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Tl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ag(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ci]=e,t[Wo]=i,L0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bu(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<xo.length;r++)pt(xo[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":Eh(t,i),r=Du(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":Th(t,i),r=Fu(t,i),pt("invalid",t);break;default:r=i}zu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ug(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Uo(t,l):typeof l=="number"&&Uo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Do.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&df(t,s,l,o))}switch(n){case"input":da(t),wh(t,i,!1);break;case"textarea":da(t),Ah(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ur(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ts(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ts(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)I0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Nr(Xo.current),Nr(hi.current),ya(e)){if(i=e.stateNode,n=e.memoizedProps,i[ci]=e,(s=i.nodeValue!==n)&&(t=An,t!==null))switch(t.tag){case 3:_a(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_a(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i}return qt(e),null;case 13:if(gt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&Tn!==null&&e.mode&1&&!(e.flags&128))Zg(),Os(),e.flags|=98560,s=!1;else if(s=ya(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[ci]=e}else Os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Jn!==null&&(yd(Jn),Jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Ut===0&&(Ut=3):$f())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return ks(),fd(t,e),t===null&&Ho(e.stateNode.containerInfo),qt(e),null;case 10:return Pf(e.type._context),qt(e),null;case 17:return gn(e.type)&&Al(),qt(e),null;case 19:if(gt(yt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ro(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Il(t),o!==null){for(e.flags|=128,ro(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>Bs&&(e.flags|=128,i=!0,ro(s,!1),e.lanes=4194304)}else{if(!i)if(t=Il(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xt)return qt(e),null}else 2*bt()-s.renderingStartTime>Bs&&n!==1073741824&&(e.flags|=128,i=!0,ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=yt.current,ft(yt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return Xf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function J_(t,e){switch(Af(e),e.tag){case 1:return gn(e.type)&&Al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ks(),gt(mn),gt(tn),Uf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Df(e),null;case 13:if(gt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(yt),null;case 4:return ks(),null;case 10:return Pf(e.type._context),null;case 22:case 23:return Xf(),null;case 24:return null;default:return null}}var Ea=!1,Jt=!1,Q_=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function hd(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var mp=!1;function ey(t,e){if(Ku=Ml,t=kg(),wf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zu={focusedElem:t,selectionRange:n},Ml=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,m=x.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:qn(e.type,_),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){Tt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return x=mp,mp=!1,x}function Ao(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&hd(e,n,s)}r=r.next}while(r!==i)}}function sc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function pd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function D0(t){var e=t.alternate;e!==null&&(t.alternate=null,D0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ci],delete e[Wo],delete e[ed],delete e[O_],delete e[F_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function U0(t){return t.tag===5||t.tag===3||t.tag===4}function gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||U0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tl));else if(i!==4&&(t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}function gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(gd(t,e,n),t=t.sibling;t!==null;)gd(t,e,n),t=t.sibling}var Wt=null,Kn=!1;function Fi(t,e,n){for(n=n.child;n!==null;)O0(t,e,n),n=n.sibling}function O0(t,e,n){if(fi&&typeof fi.onCommitFiberUnmount=="function")try{fi.onCommitFiberUnmount(Zl,n)}catch{}switch(n.tag){case 5:Jt||Ms(n,e);case 6:var i=Wt,r=Kn;Wt=null,Fi(t,e,n),Wt=i,Kn=r,Wt!==null&&(Kn?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&(Kn?(t=Wt,n=n.stateNode,t.nodeType===8?kc(t.parentNode,n):t.nodeType===1&&kc(t,n),zo(t)):kc(Wt,n.stateNode));break;case 4:i=Wt,r=Kn,Wt=n.stateNode.containerInfo,Kn=!0,Fi(t,e,n),Wt=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hd(n,e,o),r=r.next}while(r!==i)}Fi(t,e,n);break;case 1:if(!Jt&&(Ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}Fi(t,e,n);break;case 21:Fi(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,Fi(t,e,n),Jt=i):Fi(t,e,n);break;default:Fi(t,e,n)}}function vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Q_),e.forEach(function(i){var r=cy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Wt=a.stateNode,Kn=!1;break e;case 3:Wt=a.stateNode.containerInfo,Kn=!0;break e;case 4:Wt=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(Wt===null)throw Error(ne(160));O0(s,o,r),Wt=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)F0(e,t),e=e.sibling}function F0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),si(t),i&4){try{Ao(3,t,t.return),sc(3,t)}catch(_){Tt(t,t.return,_)}try{Ao(5,t,t.return)}catch(_){Tt(t,t.return,_)}}break;case 1:Wn(e,t),si(t),i&512&&n!==null&&Ms(n,n.return);break;case 5:if(Wn(e,t),si(t),i&512&&n!==null&&Ms(n,n.return),t.flags&32){var r=t.stateNode;try{Uo(r,"")}catch(_){Tt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sg(r,s),Bu(a,o);var c=Bu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?ug(r,h):d==="dangerouslySetInnerHTML"?lg(r,h):d==="children"?Uo(r,h):df(r,d,h,c)}switch(a){case"input":Uu(r,s);break;case"textarea":og(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ts(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ts(r,!!s.multiple,s.defaultValue,!0):Ts(r,!!s.multiple,s.multiple?[]:"",!1))}r[Wo]=s}catch(_){Tt(t,t.return,_)}}break;case 6:if(Wn(e,t),si(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){Tt(t,t.return,_)}}break;case 3:if(Wn(e,t),si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(_){Tt(t,t.return,_)}break;case 4:Wn(e,t),si(t);break;case 13:Wn(e,t),si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Wf=bt())),i&4&&vp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||d,Wn(e,t),Jt=c):Wn(e,t),si(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(xe=t,d=t.child;d!==null;){for(h=xe=d;xe!==null;){switch(f=xe,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ao(4,f,f.return);break;case 1:Ms(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){Tt(i,n,_)}}break;case 5:Ms(f,f.return);break;case 22:if(f.memoizedState!==null){_p(h);continue}}p!==null?(p.return=f,xe=p):_p(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cg("display",o))}catch(_){Tt(t,t.return,_)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){Tt(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Wn(e,t),si(t),i&4&&vp(t);break;case 21:break;default:Wn(e,t),si(t)}}function si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(U0(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Uo(r,""),i.flags&=-33);var s=gp(t);gd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=gp(t);md(t,a,o);break;default:throw Error(ne(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ty(t,e,n){xe=t,k0(t)}function k0(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ea;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=Ea;var c=Jt;if(Ea=o,(Jt=l)&&!c)for(xe=r;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?yp(r):l!==null?(l.return=o,xe=l):yp(r);for(;s!==null;)xe=s,k0(s),s=s.sibling;xe=r,Ea=a,Jt=c}xp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):xp(t)}}function xp(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||sc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&np(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}np(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&zo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Jt||e.flags&512&&pd(e)}catch(f){Tt(e,e.return,f)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function _p(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function yp(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sc(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{pd(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{pd(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var ny=Math.ceil,Ol=Di.ReactCurrentDispatcher,Hf=Di.ReactCurrentOwner,Bn=Di.ReactCurrentBatchConfig,et=0,Bt=null,Nt=null,Xt=0,wn=0,Es=pr(0),Ut=0,Ko=null,zr=0,oc=0,Vf=0,bo=null,hn=null,Wf=0,Bs=1/0,Si=null,Fl=!1,vd=null,rr=null,wa=!1,Ki=null,kl=0,Co=0,xd=null,ll=-1,cl=0;function an(){return et&6?bt():ll!==-1?ll:ll=bt()}function sr(t){return t.mode&1?et&2&&Xt!==0?Xt&-Xt:z_.transition!==null?(cl===0&&(cl=Mg()),cl):(t=at,t!==0||(t=window.event,t=t===void 0?16:Rg(t.type)),t):1}function ni(t,e,n,i){if(50<Co)throw Co=0,xd=null,Error(ne(185));ea(t,n,i),(!(et&2)||t!==Bt)&&(t===Bt&&(!(et&2)&&(oc|=n),Ut===4&&$i(t,Xt)),vn(t,i),n===1&&et===0&&!(e.mode&1)&&(Bs=bt()+500,nc&&mr()))}function vn(t,e){var n=t.callbackNode;zx(t,e);var i=Sl(t,t===Bt?Xt:0);if(i===0)n!==null&&Rh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Rh(n),e===1)t.tag===0?k_(Sp.bind(null,t)):Yg(Sp.bind(null,t)),D_(function(){!(et&6)&&mr()}),n=null;else{switch(Eg(i)){case 1:n=gf;break;case 4:n=yg;break;case 16:n=yl;break;case 536870912:n=Sg;break;default:n=yl}n=X0(n,z0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function z0(t,e){if(ll=-1,cl=0,et&6)throw Error(ne(327));var n=t.callbackNode;if(Ps()&&t.callbackNode!==n)return null;var i=Sl(t,t===Bt?Xt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=zl(t,i);else{e=i;var r=et;et|=2;var s=G0();(Bt!==t||Xt!==e)&&(Si=null,Bs=bt()+500,Dr(t,e));do try{sy();break}catch(a){B0(t,a)}while(!0);Rf(),Ol.current=s,et=r,Nt!==null?e=0:(Bt=null,Xt=0,e=Ut)}if(e!==0){if(e===2&&(r=ju(t),r!==0&&(i=r,e=_d(t,r))),e===1)throw n=Ko,Dr(t,0),$i(t,i),vn(t,bt()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!iy(r)&&(e=zl(t,i),e===2&&(s=ju(t),s!==0&&(i=s,e=_d(t,s))),e===1))throw n=Ko,Dr(t,0),$i(t,i),vn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:wr(t,hn,Si);break;case 3:if($i(t,i),(i&130023424)===i&&(e=Wf+500-bt(),10<e)){if(Sl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Qu(wr.bind(null,t,hn,Si),e);break}wr(t,hn,Si);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ti(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ny(i/1960))-i,10<i){t.timeoutHandle=Qu(wr.bind(null,t,hn,Si),i);break}wr(t,hn,Si);break;case 5:wr(t,hn,Si);break;default:throw Error(ne(329))}}}return vn(t,bt()),t.callbackNode===n?z0.bind(null,t):null}function _d(t,e){var n=bo;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=zl(t,e),t!==2&&(e=hn,hn=n,e!==null&&yd(e)),t}function yd(t){hn===null?hn=t:hn.push.apply(hn,t)}function iy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ii(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~Vf,e&=~oc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ti(e),i=1<<n;t[n]=-1,e&=~i}}function Sp(t){if(et&6)throw Error(ne(327));Ps();var e=Sl(t,0);if(!(e&1))return vn(t,bt()),null;var n=zl(t,e);if(t.tag!==0&&n===2){var i=ju(t);i!==0&&(e=i,n=_d(t,i))}if(n===1)throw n=Ko,Dr(t,0),$i(t,e),vn(t,bt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,hn,Si),vn(t,bt()),null}function jf(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Bs=bt()+500,nc&&mr())}}function Br(t){Ki!==null&&Ki.tag===0&&!(et&6)&&Ps();var e=et;et|=1;var n=Bn.transition,i=at;try{if(Bn.transition=null,at=1,t)return t()}finally{at=i,Bn.transition=n,et=e,!(et&6)&&mr()}}function Xf(){wn=Es.current,gt(Es)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,I_(n)),Nt!==null)for(n=Nt.return;n!==null;){var i=n;switch(Af(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Al();break;case 3:ks(),gt(mn),gt(tn),Uf();break;case 5:Df(i);break;case 4:ks();break;case 13:gt(yt);break;case 19:gt(yt);break;case 10:Pf(i.type._context);break;case 22:case 23:Xf()}n=n.return}if(Bt=t,Nt=t=or(t.current,null),Xt=wn=e,Ut=0,Ko=null,Vf=oc=zr=0,hn=bo=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Lr=null}return t}function B0(t,e){do{var n=Nt;try{if(Rf(),sl.current=Ul,Dl){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Dl=!1}if(kr=0,zt=It=St=null,To=!1,$o=0,Hf.current=null,n===null||n.return===null){Ut=1,Ko=e,Nt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=lp(o);if(p!==null){p.flags&=-257,cp(p,o,a,s,e),p.mode&1&&ap(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){ap(s,c,e),$f();break e}l=Error(ne(426))}}else if(xt&&a.mode&1){var m=lp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),cp(m,o,a,s,e),bf(zs(l,a));break e}}s=l=zs(l,a),Ut!==4&&(Ut=2),bo===null?bo=[s]:bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=E0(s,l,e);tp(s,u);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(rr===null||!rr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=w0(s,a,e);tp(s,y);break e}}s=s.return}while(s!==null)}V0(n)}catch(C){e=C,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(!0)}function G0(){var t=Ol.current;return Ol.current=Ul,t===null?Ul:t}function $f(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Bt===null||!(zr&268435455)&&!(oc&268435455)||$i(Bt,Xt)}function zl(t,e){var n=et;et|=2;var i=G0();(Bt!==t||Xt!==e)&&(Si=null,Dr(t,e));do try{ry();break}catch(r){B0(t,r)}while(!0);if(Rf(),et=n,Ol.current=i,Nt!==null)throw Error(ne(261));return Bt=null,Xt=0,Ut}function ry(){for(;Nt!==null;)H0(Nt)}function sy(){for(;Nt!==null&&!Px();)H0(Nt)}function H0(t){var e=j0(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?V0(t):Nt=e,Hf.current=null}function V0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=J_(n,e),n!==null){n.flags&=32767,Nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Nt=null;return}}else if(n=Z_(n,e,wn),n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);Ut===0&&(Ut=5)}function wr(t,e,n){var i=at,r=Bn.transition;try{Bn.transition=null,at=1,oy(t,e,n,i)}finally{Bn.transition=r,at=i}return null}function oy(t,e,n,i){do Ps();while(Ki!==null);if(et&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Bx(t,s),t===Bt&&(Nt=Bt=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,X0(yl,function(){return Ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bn.transition,Bn.transition=null;var o=at;at=1;var a=et;et|=4,Hf.current=null,ey(t,n),F0(n,t),A_(Zu),Ml=!!Ku,Zu=Ku=null,t.current=n,ty(n),Lx(),et=a,at=o,Bn.transition=s}else t.current=n;if(wa&&(wa=!1,Ki=t,kl=r),s=t.pendingLanes,s===0&&(rr=null),Dx(n.stateNode),vn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Fl)throw Fl=!1,t=vd,vd=null,t;return kl&1&&t.tag!==0&&Ps(),s=t.pendingLanes,s&1?t===xd?Co++:(Co=0,xd=t):Co=0,mr(),null}function Ps(){if(Ki!==null){var t=Eg(kl),e=Bn.transition,n=at;try{if(Bn.transition=null,at=16>t?16:t,Ki===null)var i=!1;else{if(t=Ki,Ki=null,kl=0,et&6)throw Error(ne(331));var r=et;for(et|=4,xe=t.current;xe!==null;){var s=xe,o=s.child;if(xe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(xe=c;xe!==null;){var d=xe;switch(d.tag){case 0:case 11:case 15:Ao(8,d,s)}var h=d.child;if(h!==null)h.return=d,xe=h;else for(;xe!==null;){d=xe;var f=d.sibling,p=d.return;if(D0(d),d===c){xe=null;break}if(f!==null){f.return=p,xe=f;break}xe=p}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}xe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ao(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,xe=u;break e}xe=s.return}}var v=t.current;for(xe=v;xe!==null;){o=xe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,xe=g;else e:for(o=v;xe!==null;){if(a=xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sc(9,a)}}catch(C){Tt(a,a.return,C)}if(a===o){xe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,xe=y;break e}xe=a.return}}if(et=r,mr(),fi&&typeof fi.onPostCommitFiberRoot=="function")try{fi.onPostCommitFiberRoot(Zl,t)}catch{}i=!0}return i}finally{at=n,Bn.transition=e}}return!1}function Mp(t,e,n){e=zs(n,e),e=E0(t,e,1),t=ir(t,e,1),e=an(),t!==null&&(ea(t,1,e),vn(t,e))}function Tt(t,e,n){if(t.tag===3)Mp(t,t,n);else for(;e!==null;){if(e.tag===3){Mp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rr===null||!rr.has(i))){t=zs(n,t),t=w0(e,t,1),e=ir(e,t,1),t=an(),e!==null&&(ea(e,1,t),vn(e,t));break}}e=e.return}}function ay(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Xt&n)===n&&(Ut===4||Ut===3&&(Xt&130023424)===Xt&&500>bt()-Wf?Dr(t,0):Vf|=n),vn(t,e)}function W0(t,e){e===0&&(t.mode&1?(e=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):e=1);var n=an();t=Pi(t,e),t!==null&&(ea(t,e,n),vn(t,n))}function ly(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),W0(t,n)}function cy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),W0(t,n)}var j0;j0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,K_(t,e,n);pn=!!(t.flags&131072)}else pn=!1,xt&&e.flags&1048576&&qg(e,Rl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;al(t,e),t=e.pendingProps;var r=Us(e,tn.current);Rs(e,n),r=Ff(null,e,i,t,r,n);var s=kf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(s=!0,bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Nf(e),r.updater=rc,e.stateNode=r,r._reactInternals=e,od(e,i,t,n),e=cd(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&Tf(e),on(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(al(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=dy(i),t=qn(i,t),r){case 0:e=ld(null,e,i,t,n);break e;case 1:e=fp(null,e,i,t,n);break e;case 11:e=up(null,e,i,t,n);break e;case 14:e=dp(null,e,i,qn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),ld(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),fp(t,e,i,r,n);case 3:e:{if(C0(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,t0(t,e),Nl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=zs(Error(ne(423)),e),e=hp(t,e,i,n,r);break e}else if(i!==r){r=zs(Error(ne(424)),e),e=hp(t,e,i,n,r);break e}else for(Tn=nr(e.stateNode.containerInfo.firstChild),An=e,xt=!0,Jn=null,n=Qg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),i===r){e=Li(t,e,n);break e}on(t,e,i,n)}e=e.child}return e;case 5:return n0(e),t===null&&id(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ju(i,r)?o=null:s!==null&&Ju(i,s)&&(e.flags|=32),b0(t,e),on(t,e,o,n),e.child;case 6:return t===null&&id(e),null;case 13:return R0(t,e,n);case 4:return If(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Fs(e,null,i,n):on(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),up(t,e,i,r,n);case 7:return on(t,e,e.pendingProps,n),e.child;case 8:return on(t,e,e.pendingProps.children,n),e.child;case 12:return on(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(Pl,i._currentValue),i._currentValue=o,s!==null)if(ii(s.value,o)){if(s.children===r.children&&!mn.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}on(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Rs(e,n),r=Gn(r),i=i(r),e.flags|=1,on(t,e,i,n),e.child;case 14:return i=e.type,r=qn(i,e.pendingProps),r=qn(i.type,r),dp(t,e,i,r,n);case 15:return T0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),al(t,e),e.tag=1,gn(i)?(t=!0,bl(e)):t=!1,Rs(e,n),M0(e,i,r),od(e,i,r,n),cd(null,e,i,!0,t,n);case 19:return P0(t,e,n);case 22:return A0(t,e,n)}throw Error(ne(156,e.tag))};function X0(t,e){return _g(t,e)}function uy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new uy(t,e,n,i)}function Yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dy(t){if(typeof t=="function")return Yf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hf)return 11;if(t===pf)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ul(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Yf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hs:return Ur(n.children,r,s,e);case ff:o=8,r|=8;break;case Pu:return t=kn(12,n,e,r|2),t.elementType=Pu,t.lanes=s,t;case Lu:return t=kn(13,n,e,r),t.elementType=Lu,t.lanes=s,t;case Nu:return t=kn(19,n,e,r),t.elementType=Nu,t.lanes=s,t;case ng:return ac(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case eg:o=10;break e;case tg:o=9;break e;case hf:o=11;break e;case pf:o=14;break e;case Wi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=kn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ur(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function ac(t,e,n,i){return t=kn(22,t,i,e),t.elementType=ng,t.lanes=n,t.stateNode={isHidden:!1},t}function Xc(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function $c(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function qf(t,e,n,i,r,s,o,a,l){return t=new fy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nf(s),t}function hy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function $0(t){if(!t)return dr;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(gn(n))return $g(t,n,e)}return e}function Y0(t,e,n,i,r,s,o,a,l){return t=qf(n,i,!0,t,r,s,o,a,l),t.context=$0(null),n=t.current,i=an(),r=sr(n),s=bi(i,r),s.callback=e??null,ir(n,s,r),t.current.lanes=r,ea(t,r,i),vn(t,i),t}function lc(t,e,n,i){var r=e.current,s=an(),o=sr(r);return n=$0(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ir(r,e,o),t!==null&&(ni(t,r,o,s),rl(t,r,o)),o}function Bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ep(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kf(t,e){Ep(t,e),(t=t.alternate)&&Ep(t,e)}function py(){return null}var q0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zf(t){this._internalRoot=t}cc.prototype.render=Zf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));lc(t,e,null,null)};cc.prototype.unmount=Zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){lc(null,t,null,null)}),e[Ri]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ag();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xi.length&&e!==0&&e<Xi[n].priority;n++);Xi.splice(n,0,t),n===0&&Cg(t)}};function Jf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wp(){}function my(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Bl(o);s.call(c)}}var o=Y0(e,i,t,0,null,!1,!1,"",wp);return t._reactRootContainer=o,t[Ri]=o.current,Ho(t.nodeType===8?t.parentNode:t),Br(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Bl(l);a.call(c)}}var l=qf(t,0,!1,null,null,!1,!1,"",wp);return t._reactRootContainer=l,t[Ri]=l.current,Ho(t.nodeType===8?t.parentNode:t),Br(function(){lc(e,l,n,i)}),l}function dc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Bl(o);a.call(l)}}lc(e,o,t,r)}else o=my(n,e,t,r,i);return Bl(o)}wg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vo(e.pendingLanes);n!==0&&(vf(e,n|1),vn(e,bt()),!(et&6)&&(Bs=bt()+500,mr()))}break;case 13:Br(function(){var i=Pi(t,1);if(i!==null){var r=an();ni(i,t,1,r)}}),Kf(t,1)}};xf=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=an();ni(e,t,134217728,n)}Kf(t,134217728)}};Tg=function(t){if(t.tag===13){var e=sr(t),n=Pi(t,e);if(n!==null){var i=an();ni(n,t,e,i)}Kf(t,e)}};Ag=function(){return at};bg=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};Hu=function(t,e,n){switch(e){case"input":if(Uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=tc(i);if(!r)throw Error(ne(90));rg(i),Uu(i,r)}}}break;case"textarea":og(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};hg=jf;pg=Br;var gy={usingClientEntryPoint:!1,Events:[na,vs,tc,dg,fg,jf]},so={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vy={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vg(t),t===null?null:t.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||py,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{Zl=Ta.inject(vy),fi=Ta}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gy;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(e))throw Error(ne(200));return hy(t,e,null,n)};Rn.createRoot=function(t,e){if(!Jf(t))throw Error(ne(299));var n=!1,i="",r=q0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=qf(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,Ho(t.nodeType===8?t.parentNode:t),new Zf(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=vg(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return Br(t)};Rn.hydrate=function(t,e,n){if(!uc(e))throw Error(ne(200));return dc(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!Jf(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=q0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Y0(e,null,t,1,n??null,r,!1,s,o),t[Ri]=e.current,Ho(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new cc(e)};Rn.render=function(t,e,n){if(!uc(e))throw Error(ne(200));return dc(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!uc(t))throw Error(ne(40));return t._reactRootContainer?(Br(function(){dc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};Rn.unstable_batchedUpdates=jf;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!uc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return dc(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function K0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K0)}catch(t){console.error(t)}}K0(),Km.exports=Rn;var xy=Km.exports,Tp=xy;Cu.createRoot=Tp.createRoot,Cu.hydrateRoot=Tp.hydrateRoot;const Zo=[{id:"baseline",name:"Baseline 2035",badge:"STANDARD RUN",description:"Projected technological convergence with gradual transition to commercial fusion and orbital megaconstellations.",rationale:"Balanced expansion of AI infrastructure, controlled grid strain, and steady satellite mesh deployment.",color:"#00f0ff",multipliers:{aiCompute:1,energyProduction:1,renewablePercent:1,batteryStorage:1,satelliteCount:1,networkBandwidth:1,roboticsCount:1,coolingEfficiency:1}},{id:"ai_acceleration",name:"AI Acceleration",badge:"HYPER-COMPUTE",description:"Exponential breakthrough in frontier models and autonomous reasoning agents. Massive demand on data centers and electric grids.",rationale:"Compute demand triples; hyperscalers face acute thermal cooling bottlenecks and localized grid brownouts.",color:"#a855f7",multipliers:{aiCompute:3.2,energyProduction:1.08,renewablePercent:.94,batteryStorage:1.15,satelliteCount:1.25,networkBandwidth:2.1,roboticsCount:1.85,coolingEfficiency:.75}},{id:"energy_crisis",name:"Energy Crisis",badge:"GRID DEFICIT",description:"Delayed fusion scaling combined with rare-earth bottlenecks for batteries leads to severe electrical deficits.",rationale:"Hyperscale clusters are throttled by 35%, packet latency surges due to node power cycling, and system health degrades.",color:"#ffb000",multipliers:{aiCompute:.62,energyProduction:.78,renewablePercent:.72,batteryStorage:.55,satelliteCount:.9,networkBandwidth:.75,roboticsCount:.7,coolingEfficiency:.6}},{id:"global_connectivity",name:"Global Connectivity",badge:"OPTICAL MESH",description:"Massive rollout of optical inter-satellite laser links (VLEO) and hollow-core subsea fiber eliminating the digital divide.",rationale:"Sub-10ms global latency achieved even across remote continents; quantum entanglement key routing active across all oceans.",color:"#38bdf8",multipliers:{aiCompute:1.25,energyProduction:1.05,renewablePercent:1.1,batteryStorage:1.2,satelliteCount:2.1,networkBandwidth:3.5,roboticsCount:1.3,coolingEfficiency:1.15}},{id:"autonomous_cities",name:"Autonomous Cities",badge:"CYBER-METROPOLIS",description:"Megacities achieve 90%+ automation in transport, logistics, power distribution, and civil maintenance.",rationale:"Humanoid and drone populations surge to 250M+; edge compute clusters handle 75% of local inference in real time.",color:"#00ff9d",multipliers:{aiCompute:1.9,energyProduction:1.18,renewablePercent:1.15,batteryStorage:1.45,satelliteCount:1.4,networkBandwidth:2.4,roboticsCount:3.8,coolingEfficiency:1.1}},{id:"infrastructure_collapse",name:"Infrastructure Collapse",badge:"SYSTEMIC HAZARD",description:"Severe Carrington-class solar geomagnetic storm synchronizes with a multi-region subsea cable cascade failure.",rationale:"40% of orbital satellites knocked into safe mode; global routing falls back to fragmented terrestrial radio meshes.",color:"#ff3366",multipliers:{aiCompute:.38,energyProduction:.68,renewablePercent:.65,batteryStorage:.4,satelliteCount:.35,networkBandwidth:.28,roboticsCount:.45,coolingEfficiency:.4}},{id:"optimistic_future",name:"Optimistic Future",badge:"SYMBIOSIS 2035",description:"Commercial magnetic confinement fusion scales ahead of schedule, paired with room-temperature superconductors.",rationale:"Clean energy abundance brings marginal power costs toward zero; subsea submerged data centers achieve PUE 1.02.",color:"#10b981",multipliers:{aiCompute:2.4,energyProduction:1.45,renewablePercent:1.35,batteryStorage:2.2,satelliteCount:1.8,networkBandwidth:2.9,roboticsCount:2.2,coolingEfficiency:1.6}}],Zi={2030:{aiComputeExaflops:16.4,aiAdoptionRate:38.5,computeEfficiency:14.2,autonomousAgentCount:1.2,dataCenterCapacityGW:72,dataCenterUtilization:76.5,pueAverage:1.28,cloudDemandEBMonth:3800,coolingStressPercent:44,energyProductionTWh:31500,energyConsumptionTWh:29800,renewableEnergyPercent:43.5,fusionOutputTWh:15,batteryStorageGWh:950,gridStressPercent:48,carbonIntensityGCO2:320,activeSatellites:19500,satelliteCoveragePercent:76,opticalLaserBandwidthTbps:140,orbitalHealthPercent:94,spaceWeatherIndex:3.2,globalBandwidthPbps:1.9,networkLatencyMs:27.5,subseaCableIntegrityPercent:96.5,quantumMeshCoveragePercent:12,robotPopulationMillions:18.5,automationEfficiencyPercent:54,robotEnergyDemandGW:14.2,urbanPopulationBillions:4.85,smartCitySaturationPercent:32,edgeComputeLoadPercent:28,globalSystemHealth:88.5,healthStatus:"NOMINAL",resilienceScore:78},2035:{aiComputeExaflops:135,aiAdoptionRate:71,computeEfficiency:52,autonomousAgentCount:8.5,dataCenterCapacityGW:210,dataCenterUtilization:84,pueAverage:1.14,cloudDemandEBMonth:19500,coolingStressPercent:58.5,energyProductionTWh:38200,energyConsumptionTWh:36900,renewableEnergyPercent:66.5,fusionOutputTWh:380,batteryStorageGWh:5200,gridStressPercent:62,carbonIntensityGCO2:175,activeSatellites:56e3,satelliteCoveragePercent:93.5,opticalLaserBandwidthTbps:1650,orbitalHealthPercent:91,spaceWeatherIndex:3.8,globalBandwidthPbps:10.4,networkLatencyMs:10.8,subseaCableIntegrityPercent:94,quantumMeshCoveragePercent:44,robotPopulationMillions:92,automationEfficiencyPercent:76,robotEnergyDemandGW:46,urbanPopulationBillions:5.35,smartCitySaturationPercent:64,edgeComputeLoadPercent:49,globalSystemHealth:91.2,healthStatus:"NOMINAL",resilienceScore:86.5},2040:{aiComputeExaflops:720,aiAdoptionRate:89,computeEfficiency:145,autonomousAgentCount:34,dataCenterCapacityGW:410,dataCenterUtilization:88,pueAverage:1.08,cloudDemandEBMonth:82e3,coolingStressPercent:64,energyProductionTWh:47500,energyConsumptionTWh:45200,renewableEnergyPercent:82.5,fusionOutputTWh:2400,batteryStorageGWh:18500,gridStressPercent:54,carbonIntensityGCO2:82,activeSatellites:118e3,satelliteCoveragePercent:98.2,opticalLaserBandwidthTbps:7200,orbitalHealthPercent:88.5,spaceWeatherIndex:4.1,globalBandwidthPbps:38,networkLatencyMs:5.8,subseaCableIntegrityPercent:91.5,quantumMeshCoveragePercent:78,robotPopulationMillions:340,automationEfficiencyPercent:90,robotEnergyDemandGW:115,urbanPopulationBillions:5.85,smartCitySaturationPercent:85,edgeComputeLoadPercent:68,globalSystemHealth:93.8,healthStatus:"NOMINAL",resilienceScore:92},2050:{aiComputeExaflops:4600,aiAdoptionRate:98.5,computeEfficiency:540,autonomousAgentCount:160,dataCenterCapacityGW:780,dataCenterUtilization:92.5,pueAverage:1.03,cloudDemandEBMonth:48e4,coolingStressPercent:42,energyProductionTWh:68e3,energyConsumptionTWh:63500,renewableEnergyPercent:97,fusionOutputTWh:14500,batteryStorageGWh:72e3,gridStressPercent:36,carbonIntensityGCO2:18,activeSatellites:26e4,satelliteCoveragePercent:99.9,opticalLaserBandwidthTbps:52e3,orbitalHealthPercent:95,spaceWeatherIndex:4,globalBandwidthPbps:240,networkLatencyMs:1.9,subseaCableIntegrityPercent:97,quantumMeshCoveragePercent:96.5,robotPopulationMillions:1550,automationEfficiencyPercent:98,robotEnergyDemandGW:240,urbanPopulationBillions:6.75,smartCitySaturationPercent:98,edgeComputeLoadPercent:84,globalSystemHealth:96.4,healthStatus:"NOMINAL",resilienceScore:97.5}},ar=[{title:"Frontier AI Compute Spike",description:"Autonomous multi-agent synthesis initiates self-improving training runs, spiking global FLOP demand across European and US clusters.",severity:"WARNING",subsystem:"ai",durationSeconds:45,impacts:[{metric:"aiComputeExaflops",deltaPercent:35},{metric:"coolingStressPercent",deltaPercent:40},{metric:"gridStressPercent",deltaPercent:22},{metric:"networkLatencyMs",deltaPercent:15}],mitigationProtocol:"Initiate dynamic load-shedding to subsea cryogenic data centers and throttle non-critical inference batches."},{title:"Orbital Geomagnetic Storm / Satellite Disruption",description:"Coronal Mass Ejection (CME) triggers severe ionospheric scintillation, disrupting 22% of LEO laser cross-links.",severity:"CRITICAL",subsystem:"satellites",durationSeconds:60,impacts:[{metric:"satelliteCoveragePercent",deltaPercent:-28},{metric:"orbitalHealthPercent",deltaPercent:-35},{metric:"opticalLaserBandwidthTbps",deltaPercent:-45},{metric:"networkLatencyMs",deltaPercent:65}],mitigationProtocol:"Orient satellite solar arrays into drag-reduction safe mode and switch transoceanic traffic to subsea fiber routes."},{title:"Regional Energy Shortage & Brownouts",description:"Prolonged atmospheric stalling reduces wind and solar generation by 40% across continental corridors, draining battery reserves.",severity:"CRITICAL",subsystem:"energy",durationSeconds:50,impacts:[{metric:"energyProductionTWh",deltaPercent:-22},{metric:"gridStressPercent",deltaPercent:55},{metric:"batteryStorageGWh",deltaPercent:-40},{metric:"globalSystemHealth",deltaPercent:-18}],mitigationProtocol:"Ramp up secondary commercial fusion reactors and activate industrial demand-response automation."},{title:"Hyperscale Subsea Data Center Online",description:"10GW modular underwater data center cluster deployed in the North Sea, operating with zero freshwater consumption and 1.02 PUE.",severity:"INFO",subsystem:"cloud",durationSeconds:70,impacts:[{metric:"dataCenterCapacityGW",deltaPercent:12},{metric:"coolingStressPercent",deltaPercent:-25},{metric:"computeEfficiency",deltaPercent:18},{metric:"globalSystemHealth",deltaPercent:8}],mitigationProtocol:"Route high-density foundation model fine-tuning to the Nordic marine cluster."},{title:"Room-Temp Superconductor Breakthrough",description:"Commercial deployment of ambient-pressure superconducting transmission lines cuts electrical distribution losses by 92%.",severity:"INFO",subsystem:"energy",durationSeconds:80,impacts:[{metric:"gridStressPercent",deltaPercent:-38},{metric:"computeEfficiency",deltaPercent:32},{metric:"energyConsumptionTWh",deltaPercent:-12},{metric:"globalSystemHealth",deltaPercent:15}],mitigationProtocol:"Accelerate superconductor retrofitting for all tier-4 metro distribution nodes."},{title:"Mass Robot Deployment in Urban Infrastructure",description:"Autonomous humanoid fleet passes 100M active units globally, managing autonomous transit and smart-grid maintenance.",severity:"ADVISORY",subsystem:"robotics",durationSeconds:55,impacts:[{metric:"robotPopulationMillions",deltaPercent:25},{metric:"automationEfficiencyPercent",deltaPercent:18},{metric:"robotEnergyDemandGW",deltaPercent:20},{metric:"edgeComputeLoadPercent",deltaPercent:15}],mitigationProtocol:"Prioritize decentralized edge-computing protocols to prevent cloud uplink saturation."},{title:"Transoceanic Subsea Cable Severance",description:"Dual deepwater tectonic event damages major transatlantic and transpacific fiber trunklines simultaneously.",severity:"CRITICAL",subsystem:"network",durationSeconds:65,impacts:[{metric:"subseaCableIntegrityPercent",deltaPercent:-34},{metric:"globalBandwidthPbps",deltaPercent:-26},{metric:"networkLatencyMs",deltaPercent:85},{metric:"globalSystemHealth",deltaPercent:-22}],mitigationProtocol:"Reroute all critical telemetry packets across LEO optical laser mesh and activate autonomous cable repair submersibles."},{title:"Extreme Global Cloud Demand Surge",description:"Global rollout of real-time neural avatar rendering and autonomous driving consensus networks triggers record cloud traffic.",severity:"WARNING",subsystem:"cloud",durationSeconds:40,impacts:[{metric:"cloudDemandEBMonth",deltaPercent:48},{metric:"dataCenterUtilization",deltaPercent:22},{metric:"globalBandwidthPbps",deltaPercent:20},{metric:"gridStressPercent",deltaPercent:16}],mitigationProtocol:"Enforce dynamic neural compression and enable peer-to-peer neighborhood edge caching."}];function _y(t){return{...ar[Math.floor(Math.random()*ar.length)],id:`event-${Date.now()}-${Math.random().toString(36).substring(2,7)}`,timestamp:Date.now(),yearSnapshot:t,active:!0}}function yy(t,e){const n={...t};for(const r of e)if(r.active)for(const s of r.impacts){const o=n[s.metric];if(typeof o=="number"){const a=1+s.deltaPercent/100;let l=o*a;s.metric.toString().includes("Percent")||s.metric==="globalSystemHealth"||s.metric==="resilienceScore"?l=Math.max(2,Math.min(100,l)):l=Math.max(.1,l),n[s.metric]=l}}const i=n.globalSystemHealth;return i>=85&&n.gridStressPercent<80?n.healthStatus="NOMINAL":i>=65&&n.gridStressPercent<90?n.healthStatus="ELEVATED_STRESS":i>=40?n.healthStatus="CRITICAL_RISK":n.healthStatus="CASCADE_FAILURE",n}const jn=[2030,2035,2040,2050];function Qe(t,e,n,i=!1){return i&&t>0&&e>0?Math.exp(Math.log(t)+n*(Math.log(e)-Math.log(t))):t+(e-t)*n}function Sy(t){if(t<=jn[0])return{...Zi[jn[0]]};if(t>=jn[jn.length-1])return{...Zi[jn[jn.length-1]]};let e=0;for(let l=0;l<jn.length-1;l++)if(t>=jn[l]&&t<=jn[l+1]){e=l;break}const n=jn[e],i=jn[e+1],r=(t-n)/(i-n),s=Zi[n],o=Zi[i];return{aiComputeExaflops:Qe(s.aiComputeExaflops,o.aiComputeExaflops,r,!0),cloudDemandEBMonth:Qe(s.cloudDemandEBMonth,o.cloudDemandEBMonth,r,!0),globalBandwidthPbps:Qe(s.globalBandwidthPbps,o.globalBandwidthPbps,r,!0),robotPopulationMillions:Qe(s.robotPopulationMillions,o.robotPopulationMillions,r,!0),fusionOutputTWh:Qe(s.fusionOutputTWh,o.fusionOutputTWh,r,!0),batteryStorageGWh:Qe(s.batteryStorageGWh,o.batteryStorageGWh,r,!0),activeSatellites:Qe(s.activeSatellites,o.activeSatellites,r,!0),opticalLaserBandwidthTbps:Qe(s.opticalLaserBandwidthTbps,o.opticalLaserBandwidthTbps,r,!0),computeEfficiency:Qe(s.computeEfficiency,o.computeEfficiency,r,!0),autonomousAgentCount:Qe(s.autonomousAgentCount,o.autonomousAgentCount,r,!0),aiAdoptionRate:Qe(s.aiAdoptionRate,o.aiAdoptionRate,r),dataCenterCapacityGW:Qe(s.dataCenterCapacityGW,o.dataCenterCapacityGW,r),dataCenterUtilization:Qe(s.dataCenterUtilization,o.dataCenterUtilization,r),pueAverage:Qe(s.pueAverage,o.pueAverage,r),coolingStressPercent:Qe(s.coolingStressPercent,o.coolingStressPercent,r),energyProductionTWh:Qe(s.energyProductionTWh,o.energyProductionTWh,r),energyConsumptionTWh:Qe(s.energyConsumptionTWh,o.energyConsumptionTWh,r),renewableEnergyPercent:Qe(s.renewableEnergyPercent,o.renewableEnergyPercent,r),gridStressPercent:Qe(s.gridStressPercent,o.gridStressPercent,r),carbonIntensityGCO2:Qe(s.carbonIntensityGCO2,o.carbonIntensityGCO2,r),satelliteCoveragePercent:Qe(s.satelliteCoveragePercent,o.satelliteCoveragePercent,r),orbitalHealthPercent:Qe(s.orbitalHealthPercent,o.orbitalHealthPercent,r),spaceWeatherIndex:Qe(s.spaceWeatherIndex,o.spaceWeatherIndex,r),networkLatencyMs:Qe(s.networkLatencyMs,o.networkLatencyMs,r,!0),subseaCableIntegrityPercent:Qe(s.subseaCableIntegrityPercent,o.subseaCableIntegrityPercent,r),quantumMeshCoveragePercent:Qe(s.quantumMeshCoveragePercent,o.quantumMeshCoveragePercent,r),automationEfficiencyPercent:Qe(s.automationEfficiencyPercent,o.automationEfficiencyPercent,r),robotEnergyDemandGW:Qe(s.robotEnergyDemandGW,o.robotEnergyDemandGW,r),urbanPopulationBillions:Qe(s.urbanPopulationBillions,o.urbanPopulationBillions,r),smartCitySaturationPercent:Qe(s.smartCitySaturationPercent,o.smartCitySaturationPercent,r),edgeComputeLoadPercent:Qe(s.edgeComputeLoadPercent,o.edgeComputeLoadPercent,r),globalSystemHealth:Qe(s.globalSystemHealth,o.globalSystemHealth,r),healthStatus:"NOMINAL",resilienceScore:Qe(s.resilienceScore,o.resilienceScore,r)}}function My(t,e,n,i){const r=Sy(t),s={...r},o=e.multipliers;r.aiComputeExaflops*=o.aiCompute,r.energyProductionTWh*=o.energyProduction,r.renewableEnergyPercent=Math.min(99.5,Math.max(10,r.renewableEnergyPercent*o.renewablePercent)),r.batteryStorageGWh*=o.batteryStorage,r.activeSatellites=Math.round(r.activeSatellites*o.satelliteCount),r.globalBandwidthPbps*=o.networkBandwidth,r.robotPopulationMillions*=o.roboticsCount,r.coolingStressPercent=Math.min(98,Math.max(10,r.coolingStressPercent/o.coolingEfficiency));const a=r.aiComputeExaflops/s.aiComputeExaflops;a!==1&&(r.dataCenterCapacityGW*=1+(a-1)*.45,r.cloudDemandEBMonth*=1+(a-1)*.4,r.coolingStressPercent=Math.min(98,Math.max(10,r.coolingStressPercent+(a-1)*6)),r.aiAdoptionRate=Math.min(99.9,Math.max(5,r.aiAdoptionRate*(a>=1?1+(a-1)*.08:a))));const c=(r.dataCenterCapacityGW-s.dataCenterCapacityGW)*8760*(r.dataCenterUtilization/100)*r.pueAverage/1e3,h=(r.robotPopulationMillions-s.robotPopulationMillions)*r.robotEnergyDemandGW*8760/(Math.max(1,s.robotPopulationMillions)*1e3);r.energyConsumptionTWh=Math.max(1e3,r.energyConsumptionTWh+c+h);const f=(s.energyProductionTWh-s.energyConsumptionTWh)/s.energyProductionTWh,x=(r.energyProductionTWh-r.energyConsumptionTWh)/r.energyProductionTWh-f,_=(r.batteryStorageGWh-s.batteryStorageGWh)/Math.max(1,s.batteryStorageGWh),m=s.gridStressPercent-x*110-_*8;r.gridStressPercent=Math.max(8,Math.min(98,m));const u=r.activeSatellites/Math.max(1,s.activeSatellites);r.satelliteCoveragePercent=Math.min(99.9,Math.max(15,s.satelliteCoveragePercent*(u>=1?1+(u-1)*.04:u))),r.opticalLaserBandwidthTbps=Math.max(10,s.opticalLaserBandwidthTbps*Math.sqrt(u));let v=1/Math.max(.3,Math.sqrt(u));if(r.gridStressPercent>75){const B=(r.gridStressPercent-75)*.02;v+=B,r.subseaCableIntegrityPercent=Math.max(35,s.subseaCableIntegrityPercent-(r.gridStressPercent-75)*.4)}r.networkLatencyMs=Math.max(.8,s.networkLatencyMs*v);const g=r.robotPopulationMillions/Math.max(1,s.robotPopulationMillions);if(r.automationEfficiencyPercent=Math.min(99.5,Math.max(20,s.automationEfficiencyPercent*(g>=1?1+(g-1)*.06:g))),r.edgeComputeLoadPercent=Math.min(98,Math.max(10,s.edgeComputeLoadPercent*(g>=1?1+(g-1)*.05:g))),i>0){const B=(Math.sin(i*.12)+Math.cos(i*.23))*.005;r.aiComputeExaflops*=1+B*.3,r.networkLatencyMs=Math.max(.8,r.networkLatencyMs*(1+B*.5)),r.gridStressPercent=Math.max(5,Math.min(99,r.gridStressPercent+B*2))}const y=r.gridStressPercent-s.gridStressPercent,C=r.networkLatencyMs/Math.max(.1,s.networkLatencyMs),A=r.coolingStressPercent-s.coolingStressPercent,b=s.orbitalHealthPercent-r.orbitalHealthPercent,L=s.subseaCableIntegrityPercent-r.subseaCableIntegrityPercent,E=Math.max(0,y)*.35+Math.max(0,C-1)*18+Math.max(0,A)*.2+Math.max(0,b)*.3+Math.max(0,L)*.3,S=Math.max(0,-y)*.15+Math.max(0,1-C)*8;return r.globalSystemHealth=Math.max(5,Math.min(99.5,s.globalSystemHealth-E+S)),r.resilienceScore=Math.max(10,Math.min(99.5,s.resilienceScore+(r.batteryStorageGWh-s.batteryStorageGWh)/Math.max(1,s.batteryStorageGWh)*12+(r.automationEfficiencyPercent-s.automationEfficiencyPercent)*.25-E*.5)),yy(r,n)}class Ey{ctx=null;enabled=!0;constructor(){}initContext(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}playClick(){if(this.enabled&&(this.initContext(),!!this.ctx))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1400,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(800,this.ctx.currentTime+.04),n.gain.setValueAtTime(.04,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.04),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}catch{}}playBeep(e=980,n=.08,i="sine"){if(this.enabled&&(this.initContext(),!!this.ctx))try{const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type=i,r.frequency.setValueAtTime(e,this.ctx.currentTime),s.gain.setValueAtTime(.05,this.ctx.currentTime),s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+n),r.connect(s),s.connect(this.ctx.destination),r.start(),r.stop(this.ctx.currentTime+n)}catch{}}playAlert(e){if(this.enabled&&(this.initContext(),!!this.ctx))try{const n=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createGain();e==="CRITICAL"?(i.type="sawtooth",i.frequency.setValueAtTime(320,n),i.frequency.setValueAtTime(480,n+.08),i.frequency.setValueAtTime(320,n+.16),i.frequency.setValueAtTime(480,n+.24),r.gain.setValueAtTime(.08,n),r.gain.exponentialRampToValueAtTime(.001,n+.35),i.connect(r),r.connect(this.ctx.destination),i.start(n),i.stop(n+.35)):e==="WARNING"?(i.type="triangle",i.frequency.setValueAtTime(600,n),i.frequency.setValueAtTime(900,n+.1),r.gain.setValueAtTime(.06,n),r.gain.exponentialRampToValueAtTime(.001,n+.22),i.connect(r),r.connect(this.ctx.destination),i.start(n),i.stop(n+.22)):(i.type="sine",i.frequency.setValueAtTime(880,n),i.frequency.exponentialRampToValueAtTime(1320,n+.15),r.gain.setValueAtTime(.05,n),r.gain.exponentialRampToValueAtTime(.001,n+.18),i.connect(r),r.connect(this.ctx.destination),i.start(n),i.stop(n+.18))}catch{}}playYearTransition(){if(this.enabled&&(this.initContext(),!!this.ctx))try{const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(440,e),n.frequency.exponentialRampToValueAtTime(1200,e+.18),i.gain.setValueAtTime(.05,e),i.gain.exponentialRampToValueAtTime(.001,e+.22),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.22)}catch{}}}const Dn=new Ey,Z0=he.createContext(null),wy=({children:t})=>{const[e,n]=he.useState(2035),[i,r]=he.useState(2035),[s,o]=he.useState(!1),[a,l]=he.useState(1),[c,d]=he.useState(Zo[0]),[h,f]=he.useState([]),[p,x]=he.useState(null),[_,m]=he.useState(null),[u,v]=he.useState(!0),[g,y]=he.useState(!1),[C,A]=he.useState(!1),[b,L]=he.useState({satellites:!0,subseaCables:!0,megacities:!0,energyGrid:!0,dataCenters:!0,dataParticles:!0,atmosphereGlow:!0}),[E,S]=he.useState(0),R=he.useMemo(()=>h.filter(G=>G.active),[h]),B=he.useMemo(()=>My(e,c,R,E),[e,c,R,E]);he.useEffect(()=>{const G=R.length>0;if(!s&&!G)return;let Y,ae=performance.now(),ue=0;const we=Pe=>{const ze=Math.min(.1,(Pe-ae)/1e3);ae=Pe,ue+=ze,G&&f(nt=>{let N=!1;const lt=nt.map(Ge=>{if(!Ge.active)return Ge;const qe=Ge.durationSeconds-ze;return qe<=0?(N=!0,{...Ge,durationSeconds:0,active:!1}):{...Ge,durationSeconds:qe}});return N?lt:nt}),s&&(n(nt=>{const N=ze/15*a,lt=nt+N;return lt>=2050?(o(!1),2050):lt}),ue>=.25&&(ue=0,S(nt=>(nt+1)%1e4))),Y=requestAnimationFrame(we)};return Y=requestAnimationFrame(we),()=>cancelAnimationFrame(Y)},[s,a,R.length]);const k=he.useCallback(()=>{v(G=>{const Y=!G;return Dn.setEnabled(Y),Y&&Dn.playClick(),Y})},[]),j=he.useCallback(G=>{const Y=Math.max(2030,Math.min(2050,G));n(Y);const ae=[2030,2035,2040,2050].reduce((ue,we)=>Math.abs(we-Y)<Math.abs(ue-Y)?we:ue);r(ae),Dn.playClick()},[]),X=he.useCallback(G=>{r(G),n(G),Dn.playYearTransition()},[]),z=he.useCallback(()=>{o(G=>(Dn.playClick(),!G))},[]),$=he.useCallback(G=>{const Y=Zo.find(ae=>ae.id===G);Y&&(d(Y),Dn.playClick())},[]),I=he.useCallback(G=>{let Y;G!==void 0&&ar[G]?Y={...ar[G],id:`ev-${Date.now()}-${Math.random().toString(36).substring(2,6)}`,timestamp:Date.now(),yearSnapshot:Math.round(e),active:!0}:Y=_y(Math.round(e)),f(ae=>[Y,...ae.slice(0,19)]),Dn.playAlert(Y.severity)},[e]),q=he.useCallback(G=>{f(Y=>Y.map(ae=>ae.id===G?{...ae,active:!1,durationSeconds:0}:ae)),Dn.playClick()},[]),Z=he.useCallback(G=>{L(Y=>(Dn.playClick(),{...Y,[G]:!Y[G]}))},[]),oe=he.useCallback(()=>{y(G=>!G),Dn.playClick()},[]),Se=he.useCallback(()=>{A(G=>!G),Dn.playClick()},[]),Re=he.useMemo(()=>({year:e,targetYear:i,isPlaying:s,playbackSpeed:a,scenario:c,metrics:B,events:h,activeEvents:R,selectedSubsystem:p,selectedNode:_,visualLayers:b,audioEnabled:u,isConsoleOpen:g,isChartsOpen:C,setYear:j,jumpToMilestone:X,togglePlay:z,setPlaybackSpeed:l,setScenarioById:$,triggerEvent:I,dismissEvent:q,setSelectedSubsystem:x,setSelectedNode:m,toggleLayer:Z,toggleAudio:k,toggleConsole:oe,toggleCharts:Se}),[e,i,s,a,c,B,h,R,p,_,b,u,g,C,j,X,z,l,$,I,q,x,m,Z,k,oe,Se]);return T.jsx(Z0.Provider,{value:Re,children:t})},ri=()=>{const t=he.useContext(Z0);if(!t)throw new Error("useSimulation must be used within a SimulationProvider");return t};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qf="168",Ty=0,Ap=1,Ay=2,J0=1,by=2,yi=3,fr=0,ln=1,ui=2,lr=0,Ls=1,Ro=2,bp=3,Cp=4,Cy=5,br=100,Ry=101,Py=102,Ly=103,Ny=104,Iy=200,Dy=201,Uy=202,Oy=203,Sd=204,Md=205,Fy=206,ky=207,zy=208,By=209,Gy=210,Hy=211,Vy=212,Wy=213,jy=214,Xy=0,$y=1,Yy=2,Gl=3,qy=4,Ky=5,Zy=6,Jy=7,Q0=0,Qy=1,eS=2,cr=0,tS=1,nS=2,iS=3,ev=4,rS=5,sS=6,oS=7,tv=300,Gs=301,Hs=302,Ed=303,wd=304,fc=306,Hl=1e3,Ji=1001,Td=1002,zn=1003,aS=1004,Aa=1005,Qn=1006,Yc=1007,Ir=1008,Ni=1009,nv=1010,iv=1011,Jo=1012,eh=1013,Gr=1014,Ti=1015,ra=1016,th=1017,nh=1018,Vs=1020,rv=35902,sv=1021,ov=1022,ei=1023,av=1024,lv=1025,Ns=1026,Ws=1027,cv=1028,ih=1029,uv=1030,rh=1031,sh=1033,dl=33776,fl=33777,hl=33778,pl=33779,Ad=35840,bd=35841,Cd=35842,Rd=35843,Pd=36196,Ld=37492,Nd=37496,Id=37808,Dd=37809,Ud=37810,Od=37811,Fd=37812,kd=37813,zd=37814,Bd=37815,Gd=37816,Hd=37817,Vd=37818,Wd=37819,jd=37820,Xd=37821,ml=36492,$d=36494,Yd=36495,dv=36283,qd=36284,Kd=36285,Zd=36286,lS=3200,cS=3201,fv=0,uS=1,Yi="",ai="srgb",gr="srgb-linear",oh="display-p3",hc="display-p3-linear",Vl="linear",mt="srgb",Wl="rec709",jl="p3",qr=7680,Rp=519,dS=512,fS=513,hS=514,hv=515,pS=516,mS=517,gS=518,vS=519,Pp=35044,Lp="300 es",Ai=2e3,Xl=2001;class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qc=Math.PI/180,Jd=180/Math.PI;function sa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function xS(t,e){return(t%e+e)%e}function Kc(t,e,n){return(1-n)*t+n*e}function oo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,n=0){be.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],p=i[5],x=i[8],_=r[0],m=r[3],u=r[6],v=r[1],g=r[4],y=r[7],C=r[2],A=r[5],b=r[8];return s[0]=o*_+a*v+l*C,s[3]=o*m+a*g+l*A,s[6]=o*u+a*y+l*b,s[1]=c*_+d*v+h*C,s[4]=c*m+d*g+h*A,s[7]=c*u+d*y+h*b,s[2]=f*_+p*v+x*C,s[5]=f*m+p*g+x*A,s[8]=f*u+p*y+x*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,p=c*s-o*l,x=n*h+i*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=h*_,e[1]=(r*c-d*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(d*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Zc.makeScale(e,n)),this}rotate(e){return this.premultiply(Zc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Zc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zc=new Ve;function pv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function $l(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function _S(){const t=$l("canvas");return t.style.display="block",t}const Np={};function Po(t){t in Np||(Np[t]=!0,console.warn(t))}function yS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Ip=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dp=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ao={[gr]:{transfer:Vl,primaries:Wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ai]:{transfer:mt,primaries:Wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[hc]:{transfer:Vl,primaries:jl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Dp),fromReference:t=>t.applyMatrix3(Ip)},[oh]:{transfer:mt,primaries:jl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Dp),fromReference:t=>t.applyMatrix3(Ip).convertLinearToSRGB()}},SS=new Set([gr,hc]),ot={enabled:!0,_workingColorSpace:gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!SS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ao[e].toReference,r=ao[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ao[t].primaries},getTransfer:function(t){return t===Yi?Vl:ao[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(ao[e].luminanceCoefficients)}};function Is(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Jc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Kr;class MS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=$l("canvas")),Kr.width=e.width,Kr.height=e.height;const i=Kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=$l("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Is(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Is(n[i]/255)*255):n[i]=Is(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ES=0;class mv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=sa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qc(r[o].image)):s.push(Qc(r[o]))}else s=Qc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Qc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?MS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wS=0;class cn extends qs{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Ji,r=Ji,s=Qn,o=Ir,a=ei,l=Ni,c=cn.DEFAULT_ANISOTROPY,d=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=sa(),this.name="",this.source=new mv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hl:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hl:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=tv;cn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],x=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,y=(p+1)/2,C=(u+1)/2,A=(d+f)/4,b=(h+_)/4,L=(x+m)/4;return g>y&&g>C?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=b/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=L/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-x)*(m-x)+(h-_)*(h-_)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(h-_)/v,this.z=(f-d)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TS extends qs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new mv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hr extends TS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class gv extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AS extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=x,e[n+3]=_;return}if(h!==_||l!==f||c!==p||d!==x){let m=1-a;const u=l*f+c*p+d*x+h*_,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const C=Math.sqrt(g),A=Math.atan2(C,u*v);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const y=a*v;if(l=l*m+f*y,c=c*m+p*y,d=d*m+x*y,h=h*m+_*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+d*h+l*p-c*f,e[n+1]=l*x+d*f+c*h-a*p,e[n+2]=c*x+d*p+a*f-l*h,e[n+3]=d*x-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h-f*p*x;break;case"YXZ":this._x=f*d*h+c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h+f*p*x;break;case"ZXY":this._x=f*d*h-c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h-f*p*x;break;case"ZYX":this._x=f*d*h-c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h+f*p*x;break;case"YZX":this._x=f*d*h+c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h-f*p*x;break;case"XZY":this._x=f*d*h-c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Up.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Up.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eu.copy(this).projectOnVector(e),this.sub(eu)}reflect(e){return this.sub(eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eu=new D,Up=new oa;class aa{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(s,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ba.copy(i.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),Ca.subVectors(this.max,lo),Zr.subVectors(e.a,lo),Jr.subVectors(e.b,lo),Qr.subVectors(e.c,lo),ki.subVectors(Jr,Zr),zi.subVectors(Qr,Jr),vr.subVectors(Zr,Qr);let n=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-vr.z,vr.y,ki.z,0,-ki.x,zi.z,0,-zi.x,vr.z,0,-vr.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-vr.y,vr.x,0];return!tu(n,Zr,Jr,Qr,Ca)||(n=[1,0,0,0,1,0,0,0,1],!tu(n,Zr,Jr,Qr,Ca))?!1:(Ra.crossVectors(ki,zi),n=[Ra.x,Ra.y,Ra.z],tu(n,Zr,Jr,Qr,Ca))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new D,new D,new D,new D,new D,new D,new D,new D],Xn=new D,ba=new aa,Zr=new D,Jr=new D,Qr=new D,ki=new D,zi=new D,vr=new D,lo=new D,Ca=new D,Ra=new D,xr=new D;function tu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){xr.fromArray(t,s);const a=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),l=e.dot(xr),c=n.dot(xr),d=i.dot(xr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const bS=new aa,co=new D,nu=new D;class la{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):bS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);const n=co.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(co,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(nu)),this.expandByPoint(co.copy(e.center).sub(nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new D,iu=new D,Pa=new D,Bi=new D,ru=new D,La=new D,su=new D;class pc{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){iu.copy(e).add(n).multiplyScalar(.5),Pa.copy(n).sub(e).normalize(),Bi.copy(this.origin).sub(iu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Pa),a=Bi.dot(this.direction),l=-Bi.dot(Pa),c=Bi.lengthSq(),d=Math.abs(1-o*o);let h,f,p,x;if(d>0)if(h=o*l-a,f=o*a-l,x=s*d,h>=0)if(f>=-x)if(f<=x){const _=1/d;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(iu).addScaledVector(Pa,f),p}intersectSphere(e,n){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,r,s){ru.subVectors(n,e),La.subVectors(i,e),su.crossVectors(ru,La);let o=this.direction.dot(su),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const l=a*this.direction.dot(La.crossVectors(Bi,La));if(l<0)return null;const c=a*this.direction.dot(ru.cross(Bi));if(c<0||l+c>o)return null;const d=-a*Bi.dot(su);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,o,a,l,c,d,h,f,p,x,_,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,p,x,_,m)}set(e,n,i,r,s,o,a,l,c,d,h,f,p,x,_,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=x,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),o=1/es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,p=o*h,x=a*d,_=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+x*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=x+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,x=c*d,_=c*h;n[0]=f+_*a,n[4]=x*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=p*a-x,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,x=c*d,_=c*h;n[0]=f-_*a,n[4]=-o*h,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*d,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,p=o*h,x=a*d,_=a*h;n[0]=l*d,n[4]=x*c-p,n[8]=f*c+_,n[1]=l*h,n[5]=_*c+f,n[9]=p*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,x=a*l,_=a*c;n[0]=l*d,n[4]=_-f*h,n[8]=x*h+p,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*h+x,n[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,p=o*c,x=a*l,_=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+_,n[5]=o*d,n[9]=p*h-x,n[2]=x*h-p,n[6]=a*d,n[10]=_*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CS,e,RS)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Gi.crossVectors(i,Mn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Gi.crossVectors(i,Mn)),Gi.normalize(),Na.crossVectors(Mn,Gi),r[0]=Gi.x,r[4]=Na.x,r[8]=Mn.x,r[1]=Gi.y,r[5]=Na.y,r[9]=Mn.y,r[2]=Gi.z,r[6]=Na.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],p=i[13],x=i[2],_=i[6],m=i[10],u=i[14],v=i[3],g=i[7],y=i[11],C=i[15],A=r[0],b=r[4],L=r[8],E=r[12],S=r[1],R=r[5],B=r[9],k=r[13],j=r[2],X=r[6],z=r[10],$=r[14],I=r[3],q=r[7],Z=r[11],oe=r[15];return s[0]=o*A+a*S+l*j+c*I,s[4]=o*b+a*R+l*X+c*q,s[8]=o*L+a*B+l*z+c*Z,s[12]=o*E+a*k+l*$+c*oe,s[1]=d*A+h*S+f*j+p*I,s[5]=d*b+h*R+f*X+p*q,s[9]=d*L+h*B+f*z+p*Z,s[13]=d*E+h*k+f*$+p*oe,s[2]=x*A+_*S+m*j+u*I,s[6]=x*b+_*R+m*X+u*q,s[10]=x*L+_*B+m*z+u*Z,s[14]=x*E+_*k+m*$+u*oe,s[3]=v*A+g*S+y*j+C*I,s[7]=v*b+g*R+y*X+C*q,s[11]=v*L+g*B+y*z+C*Z,s[15]=v*E+g*k+y*$+C*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],p=e[14],x=e[3],_=e[7],m=e[11],u=e[15];return x*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*d-s*l*d)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],p=e[11],x=e[12],_=e[13],m=e[14],u=e[15],v=h*m*c-_*f*c+_*l*p-a*m*p-h*l*u+a*f*u,g=x*f*c-d*m*c-x*l*p+o*m*p+d*l*u-o*f*u,y=d*_*c-x*h*c+x*a*p-o*_*p-d*a*u+o*h*u,C=x*h*l-d*_*l-x*a*f+o*_*f+d*a*m-o*h*m,A=n*v+i*g+r*y+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=v*b,e[1]=(_*f*s-h*m*s-_*r*p+i*m*p+h*r*u-i*f*u)*b,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*u+i*l*u)*b,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*b,e[4]=g*b,e[5]=(d*m*s-x*f*s+x*r*p-n*m*p-d*r*u+n*f*u)*b,e[6]=(x*l*s-o*m*s-x*r*c+n*m*c+o*r*u-n*l*u)*b,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*p+n*l*p)*b,e[8]=y*b,e[9]=(x*h*s-d*_*s-x*i*p+n*_*p+d*i*u-n*h*u)*b,e[10]=(o*_*s-x*a*s+x*i*c-n*_*c-o*i*u+n*a*u)*b,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*p-n*a*p)*b,e[12]=C*b,e[13]=(d*_*r-x*h*r+x*i*f-n*_*f-d*i*m+n*h*m)*b,e[14]=(x*a*r-o*_*r-x*i*l+n*_*l+o*i*m-n*a*m)*b,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,p=s*d,x=s*h,_=o*d,m=o*h,u=a*h,v=l*c,g=l*d,y=l*h,C=i.x,A=i.y,b=i.z;return r[0]=(1-(_+u))*C,r[1]=(p+y)*C,r[2]=(x-g)*C,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(f+u))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(x+g)*b,r[9]=(m-v)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=es.set(r[0],r[1],r[2]).length();const o=es.set(r[4],r[5],r[6]).length(),a=es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);const c=1/s,d=1/o,h=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=d,$n.elements[5]*=d,$n.elements[6]*=d,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,n.setFromRotationMatrix($n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ai){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,x;if(a===Ai)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Xl)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ai){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,p=(i+r)*d;let x,_;if(a===Ai)x=(o+s)*h,_=-2*h;else if(a===Xl)x=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const es=new D,$n=new vt,CS=new D(0,0,0),RS=new D(1,1,1),Gi=new D,Na=new D,Mn=new D,Op=new vt,Fp=new oa;class pi{constructor(e=0,n=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Op,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";let ah=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},PS=0;const kp=new D,ts=new oa,vi=new vt,Ia=new D,uo=new D,LS=new D,NS=new oa,zp=new D(1,0,0),Bp=new D(0,1,0),Gp=new D(0,0,1),Hp={type:"added"},IS={type:"removed"},ns={type:"childadded",child:null},ou={type:"childremoved",child:null};class Gt extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new D,n=new pi,i=new oa,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ve}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(zp,e)}rotateY(e){return this.rotateOnAxis(Bp,e)}rotateZ(e){return this.rotateOnAxis(Gp,e)}translateOnAxis(e,n){return kp.copy(e).applyQuaternion(this.quaternion),this.position.add(kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zp,e)}translateY(e){return this.translateOnAxis(Bp,e)}translateZ(e){return this.translateOnAxis(Gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ia.copy(e):Ia.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(uo,Ia,this.up):vi.lookAt(Ia,uo,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(vi),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hp),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(IS),ou.child=e,this.dispatchEvent(ou),ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hp),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,LS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,NS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new D(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new D,xi=new D,au=new D,_i=new D,is=new D,rs=new D,Vp=new D,lu=new D,cu=new D,uu=new D;class di{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Yn.subVectors(e,n),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Yn.subVectors(r,n),xi.subVectors(i,n),au.subVectors(e,n);const o=Yn.dot(Yn),a=Yn.dot(xi),l=Yn.dot(au),c=xi.dot(xi),d=xi.dot(au),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*d)*f,x=(o*d-a*l)*f;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static isFrontFacing(e,n,i,r){return Yn.subVectors(i,n),xi.subVectors(e,n),Yn.cross(xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Yn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return di.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return di.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;is.subVectors(r,i),rs.subVectors(s,i),lu.subVectors(e,i);const l=is.dot(lu),c=rs.dot(lu);if(l<=0&&c<=0)return n.copy(i);cu.subVectors(e,r);const d=is.dot(cu),h=rs.dot(cu);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(is,o);uu.subVectors(e,s);const p=is.dot(uu),x=rs.dot(uu);if(x>=0&&p<=x)return n.copy(s);const _=p*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(rs,a);const m=d*x-p*h;if(m<=0&&h-d>=0&&p-x>=0)return Vp.subVectors(s,r),a=(h-d)/(h-d+(p-x)),n.copy(r).addScaledVector(Vp,a);const u=1/(m+_+f);return o=_*u,a=f*u,n.copy(i).addScaledVector(is,o).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Da={h:0,s:0,l:0};function du(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=xS(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=du(o,s,e+1/3),this.g=du(o,s,e),this.b=du(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=ai){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ai){const i=vv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=Jc(e.r),this.g=Jc(e.g),this.b=Jc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return ot.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Qt(Zt.r*255,0,255))*65536+Math.round(Qt(Zt.g*255,0,255))*256+Math.round(Qt(Zt.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=ai){ot.fromWorkingColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==ai?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(Da);const i=Kc(Hi.h,Da.h,n),r=Kc(Hi.s,Da.s,n),s=Kc(Hi.l,Da.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Ke;Ke.NAMES=vv;let DS=0;class Xr extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=sa(),this.name="",this.type="Material",this.blending=Ls,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Md,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sd&&(i.blendSrc=this.blendSrc),this.blendDst!==Md&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cr extends Xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new D,Ua=new be;class bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Pp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Po("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ua.fromBufferAttribute(this,n),Ua.applyMatrix3(e),this.setXY(n,Ua.x,Ua.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=oo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=oo(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=oo(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=oo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=oo(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pp&&(e.usage=this.usage),e}}class xv extends bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class _v extends bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ct extends bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let US=0;const In=new vt,fu=new Gt,ss=new D,En=new aa,fo=new aa,kt=new D;class en extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=sa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pv(e)?_v:xv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return fu.lookAt(e),fu.updateMatrix(),this.applyMatrix4(fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ct(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new la);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(En.min,fo.min),En.expandByPoint(kt),kt.addVectors(En.max,fo.max),En.expandByPoint(kt)):(En.expandByPoint(fo.min),En.expandByPoint(fo.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)kt.fromBufferAttribute(a,c),l&&(ss.fromBufferAttribute(e,c),kt.add(ss)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new D,l[L]=new D;const c=new D,d=new D,h=new D,f=new be,p=new be,x=new be,_=new D,m=new D;function u(L,E,S){c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,L),p.fromBufferAttribute(s,E),x.fromBufferAttribute(s,S),d.sub(c),h.sub(c),p.sub(f),x.sub(f);const R=1/(p.x*x.y-x.x*p.y);isFinite(R)&&(_.copy(d).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(R),a[L].add(_),a[E].add(_),a[S].add(_),l[L].add(m),l[E].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,E=v.length;L<E;++L){const S=v[L],R=S.start,B=S.count;for(let k=R,j=R+B;k<j;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const g=new D,y=new D,C=new D,A=new D;function b(L){C.fromBufferAttribute(r,L),A.copy(C);const E=a[L];g.copy(E),g.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(A,E);const R=y.dot(l[L])<0?-1:1;o.setXYZW(L,g.x,g.y,g.z,R)}for(let L=0,E=v.length;L<E;++L){const S=v[L],R=S.start,B=S.count;for(let k=R,j=R+B;k<j;k+=3)b(e.getX(k+0)),b(e.getX(k+1)),b(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,d=new D,h=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let p=0,x=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*d;for(let u=0;u<d;u++)f[x++]=c[p++]}return new bn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new en,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wp=new vt,_r=new pc,Oa=new la,jp=new D,os=new D,as=new D,ls=new D,hu=new D,Fa=new D,ka=new be,za=new be,Ba=new be,Xp=new D,$p=new D,Yp=new D,Ga=new D,Ha=new D;class jt extends Gt{constructor(e=new en,n=new Cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(hu.fromBufferAttribute(h,e),o?Fa.addScaledVector(hu,d):Fa.addScaledVector(hu.sub(n),d))}n.add(Fa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(Oa.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Oa,jp)===null||_r.origin.distanceToSquared(jp)>(e.far-e.near)**2))&&(Wp.copy(s).invert(),_r.copy(e.ray).applyMatrix4(Wp),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const m=f[x],u=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=g;y<C;y+=3){const A=a.getX(y),b=a.getX(y+1),L=a.getX(y+2);r=Va(this,u,e,i,c,d,h,A,b,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,u=_;m<u;m+=3){const v=a.getX(m),g=a.getX(m+1),y=a.getX(m+2);r=Va(this,o,e,i,c,d,h,v,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const m=f[x],u=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=g;y<C;y+=3){const A=y,b=y+1,L=y+2;r=Va(this,u,e,i,c,d,h,A,b,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=x,u=_;m<u;m+=3){const v=m,g=m+1,y=m+2;r=Va(this,o,e,i,c,d,h,v,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function OS(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===fr,a),l===null)return null;Ha.copy(a),Ha.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ha);return c<n.near||c>n.far?null:{distance:c,point:Ha.clone(),object:t}}function Va(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,os),t.getVertexPosition(l,as),t.getVertexPosition(c,ls);const d=OS(t,e,n,i,os,as,ls,Ga);if(d){r&&(ka.fromBufferAttribute(r,a),za.fromBufferAttribute(r,l),Ba.fromBufferAttribute(r,c),d.uv=di.getInterpolation(Ga,os,as,ls,ka,za,Ba,new be)),s&&(ka.fromBufferAttribute(s,a),za.fromBufferAttribute(s,l),Ba.fromBufferAttribute(s,c),d.uv1=di.getInterpolation(Ga,os,as,ls,ka,za,Ba,new be)),o&&(Xp.fromBufferAttribute(o,a),$p.fromBufferAttribute(o,l),Yp.fromBufferAttribute(o,c),d.normal=di.getInterpolation(Ga,os,as,ls,Xp,$p,Yp,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};di.getNormal(os,as,ls,h.normal),d.face=h}return d}class Vr extends en{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(h,2));function x(_,m,u,v,g,y,C,A,b,L,E){const S=y/b,R=C/L,B=y/2,k=C/2,j=A/2,X=b+1,z=L+1;let $=0,I=0;const q=new D;for(let Z=0;Z<z;Z++){const oe=Z*R-k;for(let Se=0;Se<X;Se++){const Re=Se*S-B;q[_]=Re*v,q[m]=oe*g,q[u]=j,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[u]=A>0?1:-1,d.push(q.x,q.y,q.z),h.push(Se/b),h.push(1-Z/L),$+=1}}for(let Z=0;Z<L;Z++)for(let oe=0;oe<b;oe++){const Se=f+oe+X*Z,Re=f+oe+X*(Z+1),G=f+(oe+1)+X*(Z+1),Y=f+(oe+1)+X*Z;l.push(Se,Re,Y),l.push(Re,G,Y),I+=6}a.addGroup(p,I,E),p+=I,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=js(t[n]);for(const r in i)e[r]=i[r]}return e}function FS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function yv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const kS={clone:js,merge:sn};var zS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zS,this.fragmentShader=BS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=FS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Sv extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new D,qp=new be,Kp=new be;class Fn extends Sv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,n){return this.getViewBounds(e,qp,Kp),n.subVectors(Kp,qp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(qc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const cs=-90,us=1;class GS extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new Fn(cs,us,e,n);s.layers=this.layers,this.add(s);const o=new Fn(cs,us,e,n);o.layers=this.layers,this.add(o);const a=new Fn(cs,us,e,n);a.layers=this.layers,this.add(a);const l=new Fn(cs,us,e,n);l.layers=this.layers,this.add(l);const c=new Fn(cs,us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Mv extends cn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HS extends Hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vr(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:lr});s.uniforms.tEquirect.value=n;const o=new jt(r,s),a=n.minFilter;return n.minFilter===Ir&&(n.minFilter=Qn),new GS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const pu=new D,VS=new D,WS=new Ve;class Tr{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=pu.subVectors(i,n).cross(VS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(pu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||WS.getNormalMatrix(e),r=this.coplanarPoint(pu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new la,Wa=new D;class lh{constructor(e=new Tr,n=new Tr,i=new Tr,r=new Tr,s=new Tr,o=new Tr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],p=r[8],x=r[9],_=r[10],m=r[11],u=r[12],v=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,f-c,m-p,y-u).normalize(),i[1].setComponents(l+s,f+c,m+p,y+u).normalize(),i[2].setComponents(l+o,f+d,m+x,y+v).normalize(),i[3].setComponents(l-o,f-d,m-x,y-v).normalize(),i[4].setComponents(l-a,f-h,m-_,y-g).normalize(),n===Ai)i[5].setComponents(l+a,f+h,m+_,y+g).normalize();else if(n===Xl)i[5].setComponents(a,h,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Wa.x=r.normal.x>0?e.max.x:e.min.x,Wa.y=r.normal.y>0?e.max.y:e.min.y,Wa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ev(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jS(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const d=l.array,h=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,a),h.count===-1&&f.length===0&&t.bufferSubData(c,0,d),f.length!==0){for(let p=0,x=f.length;p<x;p++){const _=f[p];t.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class mc extends en{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,p=[],x=[],_=[],m=[];for(let u=0;u<d;u++){const v=u*f-o;for(let g=0;g<c;g++){const y=g*h-s;x.push(y,-v,0),_.push(0,0,1),m.push(g/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const g=v+c*u,y=v+c*(u+1),C=v+1+c*(u+1),A=v+1+c*u;p.push(g,y,A),p.push(y,C,A)}this.setIndex(p),this.setAttribute("position",new Ct(x,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.width,e.height,e.widthSegments,e.heightSegments)}}var XS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$S=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MM="gl_FragColor = linearToOutputTexel( gl_FragColor );",EM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$M=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,t1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,l1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,u1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,d1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,m1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,S1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,C1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,P1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,L1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,U1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,W1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,J1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Q1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_E=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,EE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:XS,alphahash_pars_fragment:$S,alphamap_fragment:YS,alphamap_pars_fragment:qS,alphatest_fragment:KS,alphatest_pars_fragment:ZS,aomap_fragment:JS,aomap_pars_fragment:QS,batching_pars_vertex:eM,batching_vertex:tM,begin_vertex:nM,beginnormal_vertex:iM,bsdfs:rM,iridescence_fragment:sM,bumpmap_pars_fragment:oM,clipping_planes_fragment:aM,clipping_planes_pars_fragment:lM,clipping_planes_pars_vertex:cM,clipping_planes_vertex:uM,color_fragment:dM,color_pars_fragment:fM,color_pars_vertex:hM,color_vertex:pM,common:mM,cube_uv_reflection_fragment:gM,defaultnormal_vertex:vM,displacementmap_pars_vertex:xM,displacementmap_vertex:_M,emissivemap_fragment:yM,emissivemap_pars_fragment:SM,colorspace_fragment:MM,colorspace_pars_fragment:EM,envmap_fragment:wM,envmap_common_pars_fragment:TM,envmap_pars_fragment:AM,envmap_pars_vertex:bM,envmap_physical_pars_fragment:kM,envmap_vertex:CM,fog_vertex:RM,fog_pars_vertex:PM,fog_fragment:LM,fog_pars_fragment:NM,gradientmap_pars_fragment:IM,lightmap_pars_fragment:DM,lights_lambert_fragment:UM,lights_lambert_pars_fragment:OM,lights_pars_begin:FM,lights_toon_fragment:zM,lights_toon_pars_fragment:BM,lights_phong_fragment:GM,lights_phong_pars_fragment:HM,lights_physical_fragment:VM,lights_physical_pars_fragment:WM,lights_fragment_begin:jM,lights_fragment_maps:XM,lights_fragment_end:$M,logdepthbuf_fragment:YM,logdepthbuf_pars_fragment:qM,logdepthbuf_pars_vertex:KM,logdepthbuf_vertex:ZM,map_fragment:JM,map_pars_fragment:QM,map_particle_fragment:e1,map_particle_pars_fragment:t1,metalnessmap_fragment:n1,metalnessmap_pars_fragment:i1,morphinstance_vertex:r1,morphcolor_vertex:s1,morphnormal_vertex:o1,morphtarget_pars_vertex:a1,morphtarget_vertex:l1,normal_fragment_begin:c1,normal_fragment_maps:u1,normal_pars_fragment:d1,normal_pars_vertex:f1,normal_vertex:h1,normalmap_pars_fragment:p1,clearcoat_normal_fragment_begin:m1,clearcoat_normal_fragment_maps:g1,clearcoat_pars_fragment:v1,iridescence_pars_fragment:x1,opaque_fragment:_1,packing:y1,premultiplied_alpha_fragment:S1,project_vertex:M1,dithering_fragment:E1,dithering_pars_fragment:w1,roughnessmap_fragment:T1,roughnessmap_pars_fragment:A1,shadowmap_pars_fragment:b1,shadowmap_pars_vertex:C1,shadowmap_vertex:R1,shadowmask_pars_fragment:P1,skinbase_vertex:L1,skinning_pars_vertex:N1,skinning_vertex:I1,skinnormal_vertex:D1,specularmap_fragment:U1,specularmap_pars_fragment:O1,tonemapping_fragment:F1,tonemapping_pars_fragment:k1,transmission_fragment:z1,transmission_pars_fragment:B1,uv_pars_fragment:G1,uv_pars_vertex:H1,uv_vertex:V1,worldpos_vertex:W1,background_vert:j1,background_frag:X1,backgroundCube_vert:$1,backgroundCube_frag:Y1,cube_vert:q1,cube_frag:K1,depth_vert:Z1,depth_frag:J1,distanceRGBA_vert:Q1,distanceRGBA_frag:eE,equirect_vert:tE,equirect_frag:nE,linedashed_vert:iE,linedashed_frag:rE,meshbasic_vert:sE,meshbasic_frag:oE,meshlambert_vert:aE,meshlambert_frag:lE,meshmatcap_vert:cE,meshmatcap_frag:uE,meshnormal_vert:dE,meshnormal_frag:fE,meshphong_vert:hE,meshphong_frag:pE,meshphysical_vert:mE,meshphysical_frag:gE,meshtoon_vert:vE,meshtoon_frag:xE,points_vert:_E,points_frag:yE,shadow_vert:SE,shadow_frag:ME,sprite_vert:EE,sprite_frag:wE},de={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},li={basic:{uniforms:sn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:sn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ke(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:sn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:sn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:sn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ke(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:sn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:sn([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:sn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:sn([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:sn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:sn([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:sn([de.common,de.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:sn([de.lights,de.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};li.physical={uniforms:sn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const ja={r:0,b:0,g:0},Sr=new pi,TE=new vt;function AE(t,e,n,i,r,s,o){const a=new Ke(0);let l=s===!0?0:1,c,d,h=null,f=0,p=null;function x(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?n:e).get(g)),g}function _(v){let g=!1;const y=x(v);y===null?u(a,l):y&&y.isColor&&(u(y,1),g=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,g){const y=x(g);y&&(y.isCubeTexture||y.mapping===fc)?(d===void 0&&(d=new jt(new Vr(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:js(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Sr.copy(g.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(TE.makeRotationFromEuler(Sr)),d.material.toneMapped=ot.getTransfer(y.colorSpace)!==mt,(h!==y||f!==y.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,h=y,f=y.version,p=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new jt(new mc(2,2),new Ii({name:"BackgroundMaterial",uniforms:js(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=ot.getTransfer(y.colorSpace)!==mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,g){v.getRGB(ja,yv(t)),i.buffers.color.setClear(ja.r,ja.g,ja.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(v,g=1){a.set(v),l=g,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:_,addToRenderList:m}}function bE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,R,B,k,j){let X=!1;const z=h(k,B,R);s!==z&&(s=z,c(s.object)),X=p(S,k,B,j),X&&x(S,k,B,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(S,R,B,k),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function h(S,R,B){const k=B.wireframe===!0;let j=i[S.id];j===void 0&&(j={},i[S.id]=j);let X=j[R.id];X===void 0&&(X={},j[R.id]=X);let z=X[k];return z===void 0&&(z=f(l()),X[k]=z),z}function f(S){const R=[],B=[],k=[];for(let j=0;j<n;j++)R[j]=0,B[j]=0,k[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,R,B,k){const j=s.attributes,X=R.attributes;let z=0;const $=B.getAttributes();for(const I in $)if($[I].location>=0){const Z=j[I];let oe=X[I];if(oe===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;z++}return s.attributesNum!==z||s.index!==k}function x(S,R,B,k){const j={},X=R.attributes;let z=0;const $=B.getAttributes();for(const I in $)if($[I].location>=0){let Z=X[I];Z===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),j[I]=oe,z++}s.attributes=j,s.attributesNum=z,s.index=k}function _(){const S=s.newAttributes;for(let R=0,B=S.length;R<B;R++)S[R]=0}function m(S){u(S,0)}function u(S,R){const B=s.newAttributes,k=s.enabledAttributes,j=s.attributeDivisors;B[S]=1,k[S]===0&&(t.enableVertexAttribArray(S),k[S]=1),j[S]!==R&&(t.vertexAttribDivisor(S,R),j[S]=R)}function v(){const S=s.newAttributes,R=s.enabledAttributes;for(let B=0,k=R.length;B<k;B++)R[B]!==S[B]&&(t.disableVertexAttribArray(B),R[B]=0)}function g(S,R,B,k,j,X,z){z===!0?t.vertexAttribIPointer(S,R,B,j,X):t.vertexAttribPointer(S,R,B,k,j,X)}function y(S,R,B,k){_();const j=k.attributes,X=B.getAttributes(),z=R.defaultAttributeValues;for(const $ in X){const I=X[$];if(I.location>=0){let q=j[$];if(q===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const Z=q.normalized,oe=q.itemSize,Se=e.get(q);if(Se===void 0)continue;const Re=Se.buffer,G=Se.type,Y=Se.bytesPerElement,ae=G===t.INT||G===t.UNSIGNED_INT||q.gpuType===eh;if(q.isInterleavedBufferAttribute){const ue=q.data,we=ue.stride,Pe=q.offset;if(ue.isInstancedInterleavedBuffer){for(let ze=0;ze<I.locationSize;ze++)u(I.location+ze,ue.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ze=0;ze<I.locationSize;ze++)m(I.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let ze=0;ze<I.locationSize;ze++)g(I.location+ze,oe/I.locationSize,G,Z,we*Y,(Pe+oe/I.locationSize*ze)*Y,ae)}else{if(q.isInstancedBufferAttribute){for(let ue=0;ue<I.locationSize;ue++)u(I.location+ue,q.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ue=0;ue<I.locationSize;ue++)m(I.location+ue);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let ue=0;ue<I.locationSize;ue++)g(I.location+ue,oe/I.locationSize,G,Z,oe*Y,oe/I.locationSize*ue*Y,ae)}}else if(z!==void 0){const Z=z[$];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(I.location,Z);break;case 3:t.vertexAttrib3fv(I.location,Z);break;case 4:t.vertexAttrib4fv(I.location,Z);break;default:t.vertexAttrib1fv(I.location,Z)}}}}v()}function C(){L();for(const S in i){const R=i[S];for(const B in R){const k=R[B];for(const j in k)d(k[j].object),delete k[j];delete R[B]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const B in R){const k=R[B];for(const j in k)d(k[j].object),delete k[j];delete R[B]}delete i[S.id]}function b(S){for(const R in i){const B=i[R];if(B[S.id]===void 0)continue;const k=B[S.id];for(const j in k)d(k[j].object),delete k[j];delete B[S.id]}}function L(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function CE(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=d[x];n.update(p,i,1)}function l(c,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],d[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let x=0;for(let _=0;_<h;_++)x+=d[_];for(let _=0;_<f.length;_++)n.update(x,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function RE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ei&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const b=A===ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ni&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ti&&!b)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:u,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:y,maxSamples:C}}function PE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Tr,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const x=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||x===null||x.length===0||s&&!m)s?d(null):c();else{const v=s?0:i,g=v*4;let y=u.clippingState||null;l.value=y,y=d(x,f,g,p);for(let C=0;C!==g;++C)y[C]=n[C];u.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,x){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,x!==!0||m===null){const u=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,y=p;g!==_;++g,y+=4)o.copy(h[g]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function LE(t){let e=new WeakMap;function n(o,a){return a===Ed?o.mapping=Gs:a===wd&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ed||a===wd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new HS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class wv extends Sv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ws=4,Zp=[.125,.215,.35,.446,.526,.582],Rr=20,mu=new wv,Jp=new Ke;let gu=null,vu=0,xu=0,_u=!1;const Ar=(1+Math.sqrt(5))/2,ds=1/Ar,Qp=[new D(-Ar,ds,0),new D(Ar,ds,0),new D(-ds,0,Ar),new D(ds,0,Ar),new D(0,Ar,-ds),new D(0,Ar,ds),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class em{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){gu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gu,vu,xu),this._renderer.xr.enabled=_u,e.scissorTest=!1,Xa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:ra,format:ei,colorSpace:gr,depthBuffer:!1},r=tm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NE(s)),this._blurMaterial=IE(s,e,n)}return r}_compileMaterial(e){const n=new jt(this._lodPlanes[0],e);this._renderer.compile(n,mu)}_sceneToCubeUV(e,n,i,r){const a=new Fn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Jp),d.toneMapping=cr,d.autoClear=!1;const p=new Cr({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),x=new jt(new Vr,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Jp),_=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;Xa(r,v*g,u>2?g:0,g,g),d.setRenderTarget(r),_&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gs||e.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=im()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,mu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qp[(r-s-1)%Qp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new jt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Rr-1),_=s/x,m=isFinite(s)?1+Math.floor(d*_):Rr;m>Rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rr}`);const u=[];let v=0;for(let b=0;b<Rr;++b){const L=b/_,E=Math.exp(-L*L/2);u.push(E),b===0?v+=E:b<m&&(v+=2*E)}for(let b=0;b<u.length;b++)u[b]=u[b]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=x,f.mipInt.value=g-i;const y=this._sizeLods[r],C=3*y*(r>g-ws?r-g+ws:0),A=4*(this._cubeSize-y);Xa(n,C,A,3*y,2*y),l.setRenderTarget(n),l.render(h,mu)}}function NE(t){const e=[],n=[],i=[];let r=t;const s=t-ws+1+Zp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ws?l=Zp[o-t+ws-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,x=6,_=3,m=2,u=1,v=new Float32Array(_*x*p),g=new Float32Array(m*x*p),y=new Float32Array(u*x*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,L=A>2?0:-1,E=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];v.set(E,_*x*A),g.set(f,m*x*A);const S=[A,A,A,A,A,A];y.set(S,u*x*A)}const C=new en;C.setAttribute("position",new bn(v,_)),C.setAttribute("uv",new bn(g,m)),C.setAttribute("faceIndex",new bn(y,u)),e.push(C),r>ws&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function tm(t,e,n){const i=new Hr(t,e,n);return i.texture.mapping=fc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function IE(t,e,n){const i=new Float32Array(Rr),r=new D(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function nm(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function im(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function ch(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ed||l===wd,d=l===Gs||l===Hs;if(c||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new em(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new em(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function UE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Po("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function OE(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const _=f.morphAttributes[x];for(let m=0,u=_.length;m<u;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const x in p){const _=p[x];for(let m=0,u=_.length;m<u;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,x=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let g=0,y=v.length;g<y;g+=3){const C=v[g+0],A=v[g+1],b=v[g+2];f.push(C,A,A,b,b,C)}}else if(x!==void 0){const v=x.array;_=x.version;for(let g=0,y=v.length/3-1;g<y;g+=3){const C=g+0,A=g+1,b=g+2;f.push(C,A,A,b,b,C)}}else return;const m=new(pv(f)?_v:xv)(f,1);m.version=_;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function FE(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,f*o,x),n.update(p,i,x))}function d(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,x);let m=0;for(let u=0;u<x;u++)m+=p[u];n.update(m,i,1)}function h(f,p,x,_){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,x);let u=0;for(let v=0;v<x;v++)u+=p[v];for(let v=0;v<_.length;v++)n.update(u,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function kE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function zE(t,e,n){const i=new WeakMap,r=new Dt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const x=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let y=0;x===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*A*4*h),L=new gv(b,C,A,h);L.type=Ti,L.needsUpdate=!0;const E=y*4;for(let R=0;R<h;R++){const B=u[R],k=v[R],j=g[R],X=C*A*4*R;for(let z=0;z<B.count;z++){const $=z*E;x===!0&&(r.fromBufferAttribute(B,z),b[X+$+0]=r.x,b[X+$+1]=r.y,b[X+$+2]=r.z,b[X+$+3]=0),_===!0&&(r.fromBufferAttribute(k,z),b[X+$+4]=r.x,b[X+$+5]=r.y,b[X+$+6]=r.z,b[X+$+7]=0),m===!0&&(r.fromBufferAttribute(j,z),b[X+$+8]=r.x,b[X+$+9]=r.y,b[X+$+10]=r.z,b[X+$+11]=j.itemSize===4?r.w:1)}}f={count:h,texture:L,size:new be(C,A)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const _=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function BE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Tv extends cn{constructor(e,n,i,r,s,o,a,l,c,d=Ns){if(d!==Ns&&d!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ns&&(i=Gr),i===void 0&&d===Ws&&(i=Vs),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Av=new cn,rm=new Tv(1,1),bv=new gv,Cv=new AS,Rv=new Mv,sm=[],om=[],am=new Float32Array(16),lm=new Float32Array(9),cm=new Float32Array(4);function Ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=sm[r];if(s===void 0&&(s=new Float32Array(r),sm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function gc(t,e){let n=om[e];n===void 0&&(n=new Int32Array(e),om[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function jE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ot(n,i))return;cm.set(i),t.uniformMatrix2fv(this.addr,!1,cm),Ft(n,i)}}function XE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ot(n,i))return;lm.set(i),t.uniformMatrix3fv(this.addr,!1,lm),Ft(n,i)}}function $E(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ot(n,i))return;am.set(i),t.uniformMatrix4fv(this.addr,!1,am),Ft(n,i)}}function YE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function JE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function QE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(rm.compareFunction=hv,s=rm):s=Av,n.setTexture2D(e||s,r)}function iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Cv,r)}function rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Rv,r)}function sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||bv,r)}function ow(t){switch(t){case 5126:return GE;case 35664:return HE;case 35665:return VE;case 35666:return WE;case 35674:return jE;case 35675:return XE;case 35676:return $E;case 5124:case 35670:return YE;case 35667:case 35671:return qE;case 35668:case 35672:return KE;case 35669:case 35673:return ZE;case 5125:return JE;case 36294:return QE;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return sw}}function aw(t,e){t.uniform1fv(this.addr,e)}function lw(t,e){const n=Ks(e,this.size,2);t.uniform2fv(this.addr,n)}function cw(t,e){const n=Ks(e,this.size,3);t.uniform3fv(this.addr,n)}function uw(t,e){const n=Ks(e,this.size,4);t.uniform4fv(this.addr,n)}function dw(t,e){const n=Ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function fw(t,e){const n=Ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hw(t,e){const n=Ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pw(t,e){t.uniform1iv(this.addr,e)}function mw(t,e){t.uniform2iv(this.addr,e)}function gw(t,e){t.uniform3iv(this.addr,e)}function vw(t,e){t.uniform4iv(this.addr,e)}function xw(t,e){t.uniform1uiv(this.addr,e)}function _w(t,e){t.uniform2uiv(this.addr,e)}function yw(t,e){t.uniform3uiv(this.addr,e)}function Sw(t,e){t.uniform4uiv(this.addr,e)}function Mw(t,e,n){const i=this.cache,r=e.length,s=gc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Av,s[o])}function Ew(t,e,n){const i=this.cache,r=e.length,s=gc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Cv,s[o])}function ww(t,e,n){const i=this.cache,r=e.length,s=gc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Rv,s[o])}function Tw(t,e,n){const i=this.cache,r=e.length,s=gc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||bv,s[o])}function Aw(t){switch(t){case 5126:return aw;case 35664:return lw;case 35665:return cw;case 35666:return uw;case 35674:return dw;case 35675:return fw;case 35676:return hw;case 5124:case 35670:return pw;case 35667:case 35671:return mw;case 35668:case 35672:return gw;case 35669:case 35673:return vw;case 5125:return xw;case 36294:return _w;case 36295:return yw;case 36296:return Sw;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return Tw}}class bw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ow(n.type)}}class Cw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Aw(n.type)}}class Rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const yu=/(\w+)(\])?(\[|\.)?/g;function um(t,e){t.seq.push(e),t.map[e.id]=e}function Pw(t,e,n){const i=t.name,r=i.length;for(yu.lastIndex=0;;){const s=yu.exec(i),o=yu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){um(n,c===void 0?new bw(a,t,e):new Cw(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Rw(a),um(n,h)),n=h}}}class gl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Pw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function dm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Lw=37297;let Nw=0;function Iw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Dw(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===jl&&n===Wl?i="LinearDisplayP3ToLinearSRGB":e===Wl&&n===jl&&(i="LinearSRGBToLinearDisplayP3"),t){case gr:case hc:return[i,"LinearTransferOETF"];case ai:case oh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function fm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Iw(t.getShaderSource(e),o)}else return r}function Uw(t,e){const n=Dw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Ow(t,e){let n;switch(e){case tS:n="Linear";break;case nS:n="Reinhard";break;case iS:n="Cineon";break;case ev:n="ACESFilmic";break;case sS:n="AgX";break;case oS:n="Neutral";break;case rS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $a=new D;function Fw(){ot.getLuminanceCoefficients($a);const t=$a.x.toFixed(4),e=$a.y.toFixed(4),n=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function zw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Bw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function _o(t){return t!==""}function hm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(t){return t.replace(Gw,Vw)}const Hw=new Map;function Vw(t,e){let n=He[e];if(n===void 0){const i=Hw.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qd(n)}const Ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mm(t){return t.replace(Ww,jw)}function jw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===J0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===by?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function $w(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Gs:case Hs:e="ENVMAP_TYPE_CUBE";break;case fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function qw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Q0:e="ENVMAP_BLENDING_MULTIPLY";break;case Qy:e="ENVMAP_BLENDING_MIX";break;case eS:e="ENVMAP_BLENDING_ADD";break}return e}function Kw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Zw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Xw(n),c=$w(n),d=Yw(n),h=qw(n),f=Kw(n),p=kw(n),x=zw(s),_=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(_o).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(_o).join(`
`),u.length>0&&(u+=`
`)):(m=[gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),u=[gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==cr?"#define TONE_MAPPING":"",n.toneMapping!==cr?He.tonemapping_pars_fragment:"",n.toneMapping!==cr?Ow("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Uw("linearToOutputTexel",n.outputColorSpace),Fw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_o).join(`
`)),o=Qd(o),o=hm(o,n),o=pm(o,n),a=Qd(a),a=hm(a,n),a=pm(a,n),o=mm(o),a=mm(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=v+m+o,y=v+u+a,C=dm(r,r.VERTEX_SHADER,g),A=dm(r,r.FRAGMENT_SHADER,y);r.attachShader(_,C),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(R){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(C).trim(),j=r.getShaderInfoLog(A).trim();let X=!0,z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,C,A);else{const $=fm(r,C,"vertex"),I=fm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+$+`
`+I)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||j==="")&&(z=!1);z&&(R.diagnostics={runnable:X,programLog:B,vertexShader:{log:k,prefix:m},fragmentShader:{log:j,prefix:u}})}r.deleteShader(C),r.deleteShader(A),L=new gl(r,_),E=Bw(r,_)}let L;this.getUniforms=function(){return L===void 0&&b(this),L};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,Lw)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Nw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let Jw=0;class Qw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new eT(e),n.set(e,i)),i}}class eT{constructor(e){this.id=Jw++,this.code=e,this.usedTimes=0}}function tT(t,e,n,i,r,s,o){const a=new ah,l=new Qw,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,R,B,k){const j=B.fog,X=k.geometry,z=E.isMeshStandardMaterial?B.environment:null,$=(E.isMeshStandardMaterial?n:e).get(E.envMap||z),I=$&&$.mapping===fc?$.image.height:null,q=x[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Z=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=Z!==void 0?Z.length:0;let Se=0;X.morphAttributes.position!==void 0&&(Se=1),X.morphAttributes.normal!==void 0&&(Se=2),X.morphAttributes.color!==void 0&&(Se=3);let Re,G,Y,ae;if(q){const Ze=li[q];Re=Ze.vertexShader,G=Ze.fragmentShader}else Re=E.vertexShader,G=E.fragmentShader,l.update(E),Y=l.getVertexShaderID(E),ae=l.getFragmentShaderID(E);const ue=t.getRenderTarget(),we=k.isInstancedMesh===!0,Pe=k.isBatchedMesh===!0,ze=!!E.map,nt=!!E.matcap,N=!!$,lt=!!E.aoMap,Ge=!!E.lightMap,qe=!!E.bumpMap,Me=!!E.normalMap,ut=!!E.displacementMap,Le=!!E.emissiveMap,ke=!!E.metalnessMap,P=!!E.roughnessMap,M=E.anisotropy>0,W=E.clearcoat>0,Q=E.dispersion>0,te=E.iridescence>0,ee=E.sheen>0,Te=E.transmission>0,fe=M&&!!E.anisotropyMap,me=W&&!!E.clearcoatMap,Fe=W&&!!E.clearcoatNormalMap,ie=W&&!!E.clearcoatRoughnessMap,ge=te&&!!E.iridescenceMap,Ne=te&&!!E.iridescenceThicknessMap,Ie=ee&&!!E.sheenColorMap,ve=ee&&!!E.sheenRoughnessMap,Ue=!!E.specularMap,Be=!!E.specularColorMap,dt=!!E.specularIntensityMap,U=Te&&!!E.transmissionMap,re=Te&&!!E.thicknessMap,K=!!E.gradientMap,J=!!E.alphaMap,le=E.alphaTest>0,Ce=!!E.alphaHash,je=!!E.extensions;let _t=cr;E.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(_t=t.toneMapping);const Rt={shaderID:q,shaderType:E.type,shaderName:E.name,vertexShader:Re,fragmentShader:G,defines:E.defines,customVertexShaderID:Y,customFragmentShaderID:ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Pe,batchingColor:Pe&&k._colorsTexture!==null,instancing:we,instancingColor:we&&k.instanceColor!==null,instancingMorph:we&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:gr,alphaToCoverage:!!E.alphaToCoverage,map:ze,matcap:nt,envMap:N,envMapMode:N&&$.mapping,envMapCubeUVHeight:I,aoMap:lt,lightMap:Ge,bumpMap:qe,normalMap:Me,displacementMap:f&&ut,emissiveMap:Le,normalMapObjectSpace:Me&&E.normalMapType===uS,normalMapTangentSpace:Me&&E.normalMapType===fv,metalnessMap:ke,roughnessMap:P,anisotropy:M,anisotropyMap:fe,clearcoat:W,clearcoatMap:me,clearcoatNormalMap:Fe,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:te,iridescenceMap:ge,iridescenceThicknessMap:Ne,sheen:ee,sheenColorMap:Ie,sheenRoughnessMap:ve,specularMap:Ue,specularColorMap:Be,specularIntensityMap:dt,transmission:Te,transmissionMap:U,thicknessMap:re,gradientMap:K,opaque:E.transparent===!1&&E.blending===Ls&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:le,alphaHash:Ce,combine:E.combine,mapUv:ze&&_(E.map.channel),aoMapUv:lt&&_(E.aoMap.channel),lightMapUv:Ge&&_(E.lightMap.channel),bumpMapUv:qe&&_(E.bumpMap.channel),normalMapUv:Me&&_(E.normalMap.channel),displacementMapUv:ut&&_(E.displacementMap.channel),emissiveMapUv:Le&&_(E.emissiveMap.channel),metalnessMapUv:ke&&_(E.metalnessMap.channel),roughnessMapUv:P&&_(E.roughnessMap.channel),anisotropyMapUv:fe&&_(E.anisotropyMap.channel),clearcoatMapUv:me&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(E.sheenRoughnessMap.channel),specularMapUv:Ue&&_(E.specularMap.channel),specularColorMapUv:Be&&_(E.specularColorMap.channel),specularIntensityMapUv:dt&&_(E.specularIntensityMap.channel),transmissionMapUv:U&&_(E.transmissionMap.channel),thicknessMapUv:re&&_(E.thicknessMap.channel),alphaMapUv:J&&_(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Me||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(ze||J),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:ze&&E.map.isVideoTexture===!0&&ot.getTransfer(E.map.colorSpace)===mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ui,flipSided:E.side===ln,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&E.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function u(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)S.push(R),S.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(v(S,E),g(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function g(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),E.push(a.mask)}function y(E){const S=x[E.type];let R;if(S){const B=li[S];R=kS.clone(B.uniforms)}else R=E.uniforms;return R}function C(E,S){let R;for(let B=0,k=d.length;B<k;B++){const j=d[B];if(j.cacheKey===S){R=j,++R.usedTimes;break}}return R===void 0&&(R=new Zw(t,S,E,s),d.push(R)),R}function A(E){if(--E.usedTimes===0){const S=d.indexOf(E);d[S]=d[d.length-1],d.pop(),E.destroy()}}function b(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:d,dispose:L}}function nT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function iT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function vm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function xm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,x,_,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:x,renderOrder:h.renderOrder,z:_,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=_,u.group=m),e++,u}function a(h,f,p,x,_,m){const u=o(h,f,p,x,_,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(h,f,p,x,_,m){const u=o(h,f,p,x,_,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||iT),i.length>1&&i.sort(f||vm),r.length>1&&r.sort(f||vm)}function d(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function rT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new xm,t.set(i,[o])):r>=s.length?(o=new xm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function sT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Ke};break;case"SpotLight":n={position:new D,direction:new D,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function oT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let aT=0;function lT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function cT(t){const e=new sT,n=oT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new vt,o=new vt;function a(c){let d=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,x=0,_=0,m=0,u=0,v=0,g=0,y=0,C=0,A=0,b=0;c.sort(lT);for(let E=0,S=c.length;E<S;E++){const R=c[E],B=R.color,k=R.intensity,j=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=B.r*k,h+=B.g*k,f+=B.b*k;else if(R.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(R.sh.coefficients[z],k);b++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,I=n.get(R);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=R.shadow.matrix,v++}i.directional[p]=z,p++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(B).multiplyScalar(k),z.distance=j,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,i.spot[_]=z;const $=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,$.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[_]=$.matrix,R.castShadow){const I=n.get(R);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,i.spotShadow[_]=I,i.spotShadowMap[_]=X,y++}_++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(B).multiplyScalar(k),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=z,m++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const $=R.shadow,I=n.get(R);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,I.shadowCameraNear=$.camera.near,I.shadowCameraFar=$.camera.far,i.pointShadow[x]=I,i.pointShadowMap[x]=X,i.pointShadowMatrix[x]=R.shadow.matrix,g++}i.point[x]=z,x++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(k),z.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[u]=z,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==p||L.pointLength!==x||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==v||L.numPointShadows!==g||L.numSpotShadows!==y||L.numSpotMaps!==C||L.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,L.directionalLength=p,L.pointLength=x,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=v,L.numPointShadows=g,L.numSpotShadows=y,L.numSpotMaps=C,L.numLightProbes=b,i.version=aT++)}function l(c,d){let h=0,f=0,p=0,x=0,_=0;const m=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const g=c[u];if(g.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(g.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(g.width*.5,0,0),y.halfHeight.set(0,g.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(g.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function _m(t){const e=new cT(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function uT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new _m(t),e.set(r,[a])):s>=o.length?(a=new _m(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class dT extends Xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fT extends Xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mT(t,e,n){let i=new lh;const r=new be,s=new be,o=new Dt,a=new dT({depthPacking:cS}),l=new fT,c={},d=n.maxTextureSize,h={[fr]:ln,[ln]:fr,[ui]:ui},f=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:hT,fragmentShader:pT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new en;x.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new jt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J0;let u=this.type;this.render=function(A,b,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),B=t.state;B.setBlending(lr),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=u!==yi&&this.type===yi,j=u===yi&&this.type!==yi;for(let X=0,z=A.length;X<z;X++){const $=A[X],I=$.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const q=I.getFrameExtents();if(r.multiply(q),s.copy(I.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/q.x),r.x=s.x*q.x,I.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/q.y),r.y=s.y*q.y,I.mapSize.y=s.y)),I.map===null||k===!0||j===!0){const oe=this.type!==yi?{minFilter:zn,magFilter:zn}:{};I.map!==null&&I.map.dispose(),I.map=new Hr(r.x,r.y,oe),I.map.texture.name=$.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const Z=I.getViewportCount();for(let oe=0;oe<Z;oe++){const Se=I.getViewport(oe);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),B.viewport(o),I.updateMatrices($,oe),i=I.getFrustum(),y(b,L,I.camera,$,this.type)}I.isPointLightShadow!==!0&&this.type===yi&&v(I,L),I.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(E,S,R)};function v(A,b){const L=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,L,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,L,p,_,null)}function g(A,b,L,E){let S=null;const R=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=L.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const B=S.uuid,k=b.uuid;let j=c[B];j===void 0&&(j={},c[B]=j);let X=j[k];X===void 0&&(X=S.clone(),j[k]=X,b.addEventListener("dispose",C)),S=X}if(S.visible=b.visible,S.wireframe=b.wireframe,E===yi?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:h[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=t.properties.get(S);B.light=L}return S}function y(A,b,L,E,S){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===yi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const k=e.update(A),j=A.material;if(Array.isArray(j)){const X=k.groups;for(let z=0,$=X.length;z<$;z++){const I=X[z],q=j[I.materialIndex];if(q&&q.visible){const Z=g(A,q,E,S);A.onBeforeShadow(t,A,b,L,k,Z,I),t.renderBufferDirect(L,null,k,Z,A,I),A.onAfterShadow(t,A,b,L,k,Z,I)}}}else if(j.visible){const X=g(A,j,E,S);A.onBeforeShadow(t,A,b,L,k,X,null),t.renderBufferDirect(L,null,k,X,A,null),A.onAfterShadow(t,A,b,L,k,X,null)}}const B=A.children;for(let k=0,j=B.length;k<j;k++)y(B[k],b,L,E,S)}function C(A){A.target.removeEventListener("dispose",C);for(const L in c){const E=c[L],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function gT(t){function e(){let U=!1;const re=new Dt;let K=null;const J=new Dt(0,0,0,0);return{setMask:function(le){K!==le&&!U&&(t.colorMask(le,le,le,le),K=le)},setLocked:function(le){U=le},setClear:function(le,Ce,je,_t,Rt){Rt===!0&&(le*=_t,Ce*=_t,je*=_t),re.set(le,Ce,je,_t),J.equals(re)===!1&&(t.clearColor(le,Ce,je,_t),J.copy(re))},reset:function(){U=!1,K=null,J.set(-1,0,0,0)}}}function n(){let U=!1,re=null,K=null,J=null;return{setTest:function(le){le?ae(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(le){re!==le&&!U&&(t.depthMask(le),re=le)},setFunc:function(le){if(K!==le){switch(le){case Xy:t.depthFunc(t.NEVER);break;case $y:t.depthFunc(t.ALWAYS);break;case Yy:t.depthFunc(t.LESS);break;case Gl:t.depthFunc(t.LEQUAL);break;case qy:t.depthFunc(t.EQUAL);break;case Ky:t.depthFunc(t.GEQUAL);break;case Zy:t.depthFunc(t.GREATER);break;case Jy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=le}},setLocked:function(le){U=le},setClear:function(le){J!==le&&(t.clearDepth(le),J=le)},reset:function(){U=!1,re=null,K=null,J=null}}}function i(){let U=!1,re=null,K=null,J=null,le=null,Ce=null,je=null,_t=null,Rt=null;return{setTest:function(Ze){U||(Ze?ae(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(Ze){re!==Ze&&!U&&(t.stencilMask(Ze),re=Ze)},setFunc:function(Ze,xn,Ln){(K!==Ze||J!==xn||le!==Ln)&&(t.stencilFunc(Ze,xn,Ln),K=Ze,J=xn,le=Ln)},setOp:function(Ze,xn,Ln){(Ce!==Ze||je!==xn||_t!==Ln)&&(t.stencilOp(Ze,xn,Ln),Ce=Ze,je=xn,_t=Ln)},setLocked:function(Ze){U=Ze},setClear:function(Ze){Rt!==Ze&&(t.clearStencil(Ze),Rt=Ze)},reset:function(){U=!1,re=null,K=null,J=null,le=null,Ce=null,je=null,_t=null,Rt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},d={},h=new WeakMap,f=[],p=null,x=!1,_=null,m=null,u=null,v=null,g=null,y=null,C=null,A=new Ke(0,0,0),b=0,L=!1,E=null,S=null,R=null,B=null,k=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,z=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec($)[1]),X=z>=1):$.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=z>=2);let I=null,q={};const Z=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),Se=new Dt().fromArray(Z),Re=new Dt().fromArray(oe);function G(U,re,K,J){const le=new Uint8Array(4),Ce=t.createTexture();t.bindTexture(U,Ce),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<K;je++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(re+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return Ce}const Y={};Y[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ae(t.DEPTH_TEST),s.setFunc(Gl),qe(!1),Me(Ap),ae(t.CULL_FACE),lt(lr);function ae(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function ue(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function we(U,re){return d[U]!==re?(t.bindFramebuffer(U,re),d[U]=re,U===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=re),U===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=re),!0):!1}function Pe(U,re){let K=f,J=!1;if(U){K=h.get(re),K===void 0&&(K=[],h.set(re,K));const le=U.textures;if(K.length!==le.length||K[0]!==t.COLOR_ATTACHMENT0){for(let Ce=0,je=le.length;Ce<je;Ce++)K[Ce]=t.COLOR_ATTACHMENT0+Ce;K.length=le.length,J=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,J=!0);J&&t.drawBuffers(K)}function ze(U){return p!==U?(t.useProgram(U),p=U,!0):!1}const nt={[br]:t.FUNC_ADD,[Ry]:t.FUNC_SUBTRACT,[Py]:t.FUNC_REVERSE_SUBTRACT};nt[Ly]=t.MIN,nt[Ny]=t.MAX;const N={[Iy]:t.ZERO,[Dy]:t.ONE,[Uy]:t.SRC_COLOR,[Sd]:t.SRC_ALPHA,[Gy]:t.SRC_ALPHA_SATURATE,[zy]:t.DST_COLOR,[Fy]:t.DST_ALPHA,[Oy]:t.ONE_MINUS_SRC_COLOR,[Md]:t.ONE_MINUS_SRC_ALPHA,[By]:t.ONE_MINUS_DST_COLOR,[ky]:t.ONE_MINUS_DST_ALPHA,[Hy]:t.CONSTANT_COLOR,[Vy]:t.ONE_MINUS_CONSTANT_COLOR,[Wy]:t.CONSTANT_ALPHA,[jy]:t.ONE_MINUS_CONSTANT_ALPHA};function lt(U,re,K,J,le,Ce,je,_t,Rt,Ze){if(U===lr){x===!0&&(ue(t.BLEND),x=!1);return}if(x===!1&&(ae(t.BLEND),x=!0),U!==Cy){if(U!==_||Ze!==L){if((m!==br||g!==br)&&(t.blendEquation(t.FUNC_ADD),m=br,g=br),Ze)switch(U){case Ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ro:t.blendFunc(t.ONE,t.ONE);break;case bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Cp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ro:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Cp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}u=null,v=null,y=null,C=null,A.set(0,0,0),b=0,_=U,L=Ze}return}le=le||re,Ce=Ce||K,je=je||J,(re!==m||le!==g)&&(t.blendEquationSeparate(nt[re],nt[le]),m=re,g=le),(K!==u||J!==v||Ce!==y||je!==C)&&(t.blendFuncSeparate(N[K],N[J],N[Ce],N[je]),u=K,v=J,y=Ce,C=je),(_t.equals(A)===!1||Rt!==b)&&(t.blendColor(_t.r,_t.g,_t.b,Rt),A.copy(_t),b=Rt),_=U,L=!1}function Ge(U,re){U.side===ui?ue(t.CULL_FACE):ae(t.CULL_FACE);let K=U.side===ln;re&&(K=!K),qe(K),U.blending===Ls&&U.transparent===!1?lt(lr):lt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const J=U.stencilWrite;o.setTest(J),J&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Le(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(U){E!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),E=U)}function Me(U){U!==Ty?(ae(t.CULL_FACE),U!==S&&(U===Ap?t.cullFace(t.BACK):U===Ay?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),S=U}function ut(U){U!==R&&(X&&t.lineWidth(U),R=U)}function Le(U,re,K){U?(ae(t.POLYGON_OFFSET_FILL),(B!==re||k!==K)&&(t.polygonOffset(re,K),B=re,k=K)):ue(t.POLYGON_OFFSET_FILL)}function ke(U){U?ae(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function P(U){U===void 0&&(U=t.TEXTURE0+j-1),I!==U&&(t.activeTexture(U),I=U)}function M(U,re,K){K===void 0&&(I===null?K=t.TEXTURE0+j-1:K=I);let J=q[K];J===void 0&&(J={type:void 0,texture:void 0},q[K]=J),(J.type!==U||J.texture!==re)&&(I!==K&&(t.activeTexture(K),I=K),t.bindTexture(U,re||Y[U]),J.type=U,J.texture=re)}function W(){const U=q[I];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(U){Se.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Se.copy(U))}function ve(U){Re.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Re.copy(U))}function Ue(U,re){let K=l.get(re);K===void 0&&(K=new WeakMap,l.set(re,K));let J=K.get(U);J===void 0&&(J=t.getUniformBlockIndex(re,U.name),K.set(U,J))}function Be(U,re){const J=l.get(re).get(U);a.get(re)!==J&&(t.uniformBlockBinding(re,J,U.__bindingPointIndex),a.set(re,J))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,q={},d={},h=new WeakMap,f=[],p=null,x=!1,_=null,m=null,u=null,v=null,g=null,y=null,C=null,A=new Ke(0,0,0),b=0,L=!1,E=null,S=null,R=null,B=null,k=null,Se.set(0,0,t.canvas.width,t.canvas.height),Re.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ae,disable:ue,bindFramebuffer:we,drawBuffers:Pe,useProgram:ze,setBlending:lt,setMaterial:Ge,setFlipSided:qe,setCullFace:Me,setLineWidth:ut,setPolygonOffset:Le,setScissorTest:ke,activeTexture:P,bindTexture:M,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:ge,texImage3D:Ne,updateUBOMapping:Ue,uniformBlockBinding:Be,texStorage2D:Fe,texStorage3D:ie,texSubImage2D:ee,texSubImage3D:Te,compressedTexSubImage2D:fe,compressedTexSubImage3D:me,scissor:Ie,viewport:ve,reset:dt}}function ym(t,e,n,i){const r=vT(i);switch(n){case sv:return t*e;case av:return t*e;case lv:return t*e*2;case cv:return t*e/r.components*r.byteLength;case ih:return t*e/r.components*r.byteLength;case uv:return t*e*2/r.components*r.byteLength;case rh:return t*e*2/r.components*r.byteLength;case ov:return t*e*3/r.components*r.byteLength;case ei:return t*e*4/r.components*r.byteLength;case sh:return t*e*4/r.components*r.byteLength;case dl:case fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case hl:case pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bd:case Rd:return Math.max(t,16)*Math.max(e,8)/4;case Ad:case Cd:return Math.max(t,8)*Math.max(e,8)/2;case Pd:case Ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Od:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case kd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case zd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case jd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ml:case $d:case Yd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case dv:case qd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Kd:case Zd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vT(t){switch(t){case Ni:case nv:return{byteLength:1,components:1};case Jo:case iv:case ra:return{byteLength:2,components:1};case th:case nh:return{byteLength:2,components:4};case Gr:case eh:case Ti:return{byteLength:4,components:1};case rv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function xT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,M){return p?new OffscreenCanvas(P,M):$l("canvas")}function _(P,M,W){let Q=1;const te=ke(P);if((te.width>W||te.height>W)&&(Q=W/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ee=Math.floor(Q*te.width),Te=Math.floor(Q*te.height);h===void 0&&(h=x(ee,Te));const fe=M?x(ee,Te):h;return fe.width=ee,fe.height=Te,fe.getContext("2d").drawImage(P,0,0,ee,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ee+"x"+Te+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==zn&&P.minFilter!==Qn}function u(P){t.generateMipmap(P)}function v(P,M,W,Q,te=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ee=M;if(M===t.RED&&(W===t.FLOAT&&(ee=t.R32F),W===t.HALF_FLOAT&&(ee=t.R16F),W===t.UNSIGNED_BYTE&&(ee=t.R8)),M===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.R8UI),W===t.UNSIGNED_SHORT&&(ee=t.R16UI),W===t.UNSIGNED_INT&&(ee=t.R32UI),W===t.BYTE&&(ee=t.R8I),W===t.SHORT&&(ee=t.R16I),W===t.INT&&(ee=t.R32I)),M===t.RG&&(W===t.FLOAT&&(ee=t.RG32F),W===t.HALF_FLOAT&&(ee=t.RG16F),W===t.UNSIGNED_BYTE&&(ee=t.RG8)),M===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.RG8UI),W===t.UNSIGNED_SHORT&&(ee=t.RG16UI),W===t.UNSIGNED_INT&&(ee=t.RG32UI),W===t.BYTE&&(ee=t.RG8I),W===t.SHORT&&(ee=t.RG16I),W===t.INT&&(ee=t.RG32I)),M===t.RGB&&W===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),M===t.RGBA){const Te=te?Vl:ot.getTransfer(Q);W===t.FLOAT&&(ee=t.RGBA32F),W===t.HALF_FLOAT&&(ee=t.RGBA16F),W===t.UNSIGNED_BYTE&&(ee=Te===mt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function g(P,M){let W;return P?M===null||M===Gr||M===Vs?W=t.DEPTH24_STENCIL8:M===Ti?W=t.DEPTH32F_STENCIL8:M===Jo&&(W=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gr||M===Vs?W=t.DEPTH_COMPONENT24:M===Ti?W=t.DEPTH_COMPONENT32F:M===Jo&&(W=t.DEPTH_COMPONENT16),W}function y(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==zn&&P.minFilter!==Qn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function C(P){const M=P.target;M.removeEventListener("dispose",C),b(M),M.isVideoTexture&&d.delete(M)}function A(P){const M=P.target;M.removeEventListener("dispose",A),E(M)}function b(P){const M=i.get(P);if(M.__webglInit===void 0)return;const W=P.source,Q=f.get(W);if(Q){const te=Q[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&L(P),Object.keys(Q).length===0&&f.delete(W)}i.remove(P)}function L(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const W=P.source,Q=f.get(W);delete Q[M.__cacheKey],o.memory.textures--}function E(P){const M=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let te=0;te<M.__webglFramebuffer[Q].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[Q][te]);else t.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[Q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=P.textures;for(let Q=0,te=W.length;Q<te;Q++){const ee=i.get(W[Q]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(W[Q])}i.remove(P)}let S=0;function R(){S=0}function B(){const P=S;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),S+=1,P}function k(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function j(P,M){const W=i.get(P);if(P.isVideoTexture&&ut(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(W,P,M);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+M)}function X(P,M){const W=i.get(P);if(P.version>0&&W.__version!==P.version){Re(W,P,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+M)}function z(P,M){const W=i.get(P);if(P.version>0&&W.__version!==P.version){Re(W,P,M);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+M)}function $(P,M){const W=i.get(P);if(P.version>0&&W.__version!==P.version){G(W,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+M)}const I={[Hl]:t.REPEAT,[Ji]:t.CLAMP_TO_EDGE,[Td]:t.MIRRORED_REPEAT},q={[zn]:t.NEAREST,[aS]:t.NEAREST_MIPMAP_NEAREST,[Aa]:t.NEAREST_MIPMAP_LINEAR,[Qn]:t.LINEAR,[Yc]:t.LINEAR_MIPMAP_NEAREST,[Ir]:t.LINEAR_MIPMAP_LINEAR},Z={[dS]:t.NEVER,[vS]:t.ALWAYS,[fS]:t.LESS,[hv]:t.LEQUAL,[hS]:t.EQUAL,[gS]:t.GEQUAL,[pS]:t.GREATER,[mS]:t.NOTEQUAL};function oe(P,M){if(M.type===Ti&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Qn||M.magFilter===Yc||M.magFilter===Aa||M.magFilter===Ir||M.minFilter===Qn||M.minFilter===Yc||M.minFilter===Aa||M.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,I[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,I[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,I[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,q[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===zn||M.minFilter!==Aa&&M.minFilter!==Ir||M.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Se(P,M){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",C));const Q=M.source;let te=f.get(Q);te===void 0&&(te={},f.set(Q,te));const ee=k(M);if(ee!==P.__cacheKey){te[ee]===void 0&&(te[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),te[ee].usedTimes++;const Te=te[P.__cacheKey];Te!==void 0&&(te[P.__cacheKey].usedTimes--,Te.usedTimes===0&&L(M)),P.__cacheKey=ee,P.__webglTexture=te[ee].texture}return W}function Re(P,M,W){let Q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=t.TEXTURE_3D);const te=Se(P,M),ee=M.source;n.bindTexture(Q,P.__webglTexture,t.TEXTURE0+W);const Te=i.get(ee);if(ee.version!==Te.__version||te===!0){n.activeTexture(t.TEXTURE0+W);const fe=ot.getPrimaries(ot.workingColorSpace),me=M.colorSpace===Yi?null:ot.getPrimaries(M.colorSpace),Fe=M.colorSpace===Yi||fe===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ie=_(M.image,!1,r.maxTextureSize);ie=Le(M,ie);const ge=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type);let Ie=v(M.internalFormat,ge,Ne,M.colorSpace,M.isVideoTexture);oe(Q,M);let ve;const Ue=M.mipmaps,Be=M.isVideoTexture!==!0,dt=Te.__version===void 0||te===!0,U=ee.dataReady,re=y(M,ie);if(M.isDepthTexture)Ie=g(M.format===Ws,M.type),dt&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Ie,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Ie,ie.width,ie.height,0,ge,Ne,null));else if(M.isDataTexture)if(Ue.length>0){Be&&dt&&n.texStorage2D(t.TEXTURE_2D,re,Ie,Ue[0].width,Ue[0].height);for(let K=0,J=Ue.length;K<J;K++)ve=Ue[K],Be?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ve.width,ve.height,ge,Ne,ve.data):n.texImage2D(t.TEXTURE_2D,K,Ie,ve.width,ve.height,0,ge,Ne,ve.data);M.generateMipmaps=!1}else Be?(dt&&n.texStorage2D(t.TEXTURE_2D,re,Ie,ie.width,ie.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,ge,Ne,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,ie.width,ie.height,0,ge,Ne,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Ie,Ue[0].width,Ue[0].height,ie.depth);for(let K=0,J=Ue.length;K<J;K++)if(ve=Ue[K],M.format!==ei)if(ge!==null)if(Be){if(U)if(M.layerUpdates.size>0){const le=ym(ve.width,ve.height,M.format,M.type);for(const Ce of M.layerUpdates){const je=ve.data.subarray(Ce*le/ve.data.BYTES_PER_ELEMENT,(Ce+1)*le/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,Ce,ve.width,ve.height,1,ge,je,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ve.width,ve.height,ie.depth,ge,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Ie,ve.width,ve.height,ie.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ve.width,ve.height,ie.depth,ge,Ne,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Ie,ve.width,ve.height,ie.depth,0,ge,Ne,ve.data)}else{Be&&dt&&n.texStorage2D(t.TEXTURE_2D,re,Ie,Ue[0].width,Ue[0].height);for(let K=0,J=Ue.length;K<J;K++)ve=Ue[K],M.format!==ei?ge!==null?Be?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ve.width,ve.height,ge,Ne,ve.data):n.texImage2D(t.TEXTURE_2D,K,Ie,ve.width,ve.height,0,ge,Ne,ve.data)}else if(M.isDataArrayTexture)if(Be){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Ie,ie.width,ie.height,ie.depth),U)if(M.layerUpdates.size>0){const K=ym(ie.width,ie.height,M.format,M.type);for(const J of M.layerUpdates){const le=ie.data.subarray(J*K/ie.data.BYTES_PER_ELEMENT,(J+1)*K/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,ge,Ne,le)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Ne,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,ie.width,ie.height,ie.depth,0,ge,Ne,ie.data);else if(M.isData3DTexture)Be?(dt&&n.texStorage3D(t.TEXTURE_3D,re,Ie,ie.width,ie.height,ie.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Ne,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,ie.width,ie.height,ie.depth,0,ge,Ne,ie.data);else if(M.isFramebufferTexture){if(dt)if(Be)n.texStorage2D(t.TEXTURE_2D,re,Ie,ie.width,ie.height);else{let K=ie.width,J=ie.height;for(let le=0;le<re;le++)n.texImage2D(t.TEXTURE_2D,le,Ie,K,J,0,ge,Ne,null),K>>=1,J>>=1}}else if(Ue.length>0){if(Be&&dt){const K=ke(Ue[0]);n.texStorage2D(t.TEXTURE_2D,re,Ie,K.width,K.height)}for(let K=0,J=Ue.length;K<J;K++)ve=Ue[K],Be?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ge,Ne,ve):n.texImage2D(t.TEXTURE_2D,K,Ie,ge,Ne,ve);M.generateMipmaps=!1}else if(Be){if(dt){const K=ke(ie);n.texStorage2D(t.TEXTURE_2D,re,Ie,K.width,K.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ne,ie)}else n.texImage2D(t.TEXTURE_2D,0,Ie,ge,Ne,ie);m(M)&&u(Q),Te.__version=ee.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function G(P,M,W){if(M.image.length!==6)return;const Q=Se(P,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+W);const ee=i.get(te);if(te.version!==ee.__version||Q===!0){n.activeTexture(t.TEXTURE0+W);const Te=ot.getPrimaries(ot.workingColorSpace),fe=M.colorSpace===Yi?null:ot.getPrimaries(M.colorSpace),me=M.colorSpace===Yi||Te===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Fe=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let J=0;J<6;J++)!Fe&&!ie?ge[J]=_(M.image[J],!0,r.maxCubemapSize):ge[J]=ie?M.image[J].image:M.image[J],ge[J]=Le(M,ge[J]);const Ne=ge[0],Ie=s.convert(M.format,M.colorSpace),ve=s.convert(M.type),Ue=v(M.internalFormat,Ie,ve,M.colorSpace),Be=M.isVideoTexture!==!0,dt=ee.__version===void 0||Q===!0,U=te.dataReady;let re=y(M,Ne);oe(t.TEXTURE_CUBE_MAP,M);let K;if(Fe){Be&&dt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,re,Ue,Ne.width,Ne.height);for(let J=0;J<6;J++){K=ge[J].mipmaps;for(let le=0;le<K.length;le++){const Ce=K[le];M.format!==ei?Ie!==null?Be?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,Ce.width,Ce.height,Ie,Ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,Ue,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,Ce.width,Ce.height,Ie,ve,Ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,Ue,Ce.width,Ce.height,0,Ie,ve,Ce.data)}}}else{if(K=M.mipmaps,Be&&dt){K.length>0&&re++;const J=ke(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,re,Ue,J.width,J.height)}for(let J=0;J<6;J++)if(ie){Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ge[J].width,ge[J].height,Ie,ve,ge[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ue,ge[J].width,ge[J].height,0,Ie,ve,ge[J].data);for(let le=0;le<K.length;le++){const je=K[le].image[J].image;Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,je.width,je.height,Ie,ve,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,Ue,je.width,je.height,0,Ie,ve,je.data)}}else{Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,ve,ge[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ue,Ie,ve,ge[J]);for(let le=0;le<K.length;le++){const Ce=K[le];Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Ie,ve,Ce.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,Ue,Ie,ve,Ce.image[J])}}}m(M)&&u(t.TEXTURE_CUBE_MAP),ee.__version=te.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Y(P,M,W,Q,te,ee){const Te=s.convert(W.format,W.colorSpace),fe=s.convert(W.type),me=v(W.internalFormat,Te,fe,W.colorSpace);if(!i.get(M).__hasExternalTextures){const ie=Math.max(1,M.width>>ee),ge=Math.max(1,M.height>>ee);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ee,me,ie,ge,M.depth,0,Te,fe,null):n.texImage2D(te,ee,me,ie,ge,0,Te,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,te,i.get(W).__webglTexture,0,qe(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,te,i.get(W).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(P,M,W){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const Q=M.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,ee=g(M.stencilBuffer,te),Te=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=qe(M);Me(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,ee,M.width,M.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ee,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,P)}else{const Q=M.textures;for(let te=0;te<Q.length;te++){const ee=Q[te],Te=s.convert(ee.format,ee.colorSpace),fe=s.convert(ee.type),me=v(ee.internalFormat,Te,fe,ee.colorSpace),Fe=qe(M);W&&Me(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,me,M.width,M.height):Me(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const Q=i.get(M.depthTexture).__webglTexture,te=qe(M);if(M.depthTexture.format===Ns)Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Ws)Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function we(P){const M=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=Q}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ue(M.__webglFramebuffer,P)}else if(W){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=t.createRenderbuffer(),ae(M.__webglDepthbuffer[Q],P,!1);else{const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ee)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ae(M.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(P,M,W){const Q=i.get(P);M!==void 0&&Y(Q.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&we(P)}function ze(P){const M=P.texture,W=i.get(P),Q=i.get(M);P.addEventListener("dispose",A);const te=P.textures,ee=P.isWebGLCubeRenderTarget===!0,Te=te.length>1;if(Te||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=M.version,o.memory.textures++),ee){W.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[fe]=[];for(let me=0;me<M.mipmaps.length;me++)W.__webglFramebuffer[fe][me]=t.createFramebuffer()}else W.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)W.__webglFramebuffer[fe]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Te)for(let fe=0,me=te.length;fe<me;fe++){const Fe=i.get(te[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&Me(P)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const me=te[fe];W.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[fe]);const Fe=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),ge=v(me.internalFormat,Fe,ie,me.colorSpace,P.isXRRenderTarget===!0),Ne=qe(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,ge,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,W.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(W.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),oe(t.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)Y(W.__webglFramebuffer[fe][me],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else Y(W.__webglFramebuffer[fe],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let fe=0,me=te.length;fe<me;fe++){const Fe=te[fe],ie=i.get(Fe);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),oe(t.TEXTURE_2D,Fe),Y(W.__webglFramebuffer,P,Fe,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(Fe)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,Q.__webglTexture),oe(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)Y(W.__webglFramebuffer[me],P,M,t.COLOR_ATTACHMENT0,fe,me);else Y(W.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,fe,0);m(M)&&u(fe),n.unbindTexture()}P.depthBuffer&&we(P)}function nt(P){const M=P.textures;for(let W=0,Q=M.length;W<Q;W++){const te=M[W];if(m(te)){const ee=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(te).__webglTexture;n.bindTexture(ee,Te),u(ee),n.unbindTexture()}}}const N=[],lt=[];function Ge(P){if(P.samples>0){if(Me(P)===!1){const M=P.textures,W=P.width,Q=P.height;let te=t.COLOR_BUFFER_BIT;const ee=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(P),fe=M.length>1;if(fe)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let me=0;me<M.length;me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);const Fe=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,W,Q,0,0,W,Q,te,t.NEAREST),l===!0&&(N.length=0,lt.length=0,N.push(t.COLOR_ATTACHMENT0+me),P.depthBuffer&&P.resolveDepthBuffer===!1&&(N.push(ee),lt.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,lt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,N))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);const Fe=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function qe(P){return Math.min(r.maxSamples,P.samples)}function Me(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ut(P){const M=o.render.frame;d.get(P)!==M&&(d.set(P,M),P.update())}function Le(P,M){const W=P.colorSpace,Q=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==gr&&W!==Yi&&(ot.getTransfer(W)===mt?(Q!==ei||te!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function ke(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=R,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=Pe,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Me}function _T(t,e){function n(i,r=Yi){let s;const o=ot.getTransfer(r);if(i===Ni)return t.UNSIGNED_BYTE;if(i===th)return t.UNSIGNED_SHORT_4_4_4_4;if(i===nh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===rv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===nv)return t.BYTE;if(i===iv)return t.SHORT;if(i===Jo)return t.UNSIGNED_SHORT;if(i===eh)return t.INT;if(i===Gr)return t.UNSIGNED_INT;if(i===Ti)return t.FLOAT;if(i===ra)return t.HALF_FLOAT;if(i===sv)return t.ALPHA;if(i===ov)return t.RGB;if(i===ei)return t.RGBA;if(i===av)return t.LUMINANCE;if(i===lv)return t.LUMINANCE_ALPHA;if(i===Ns)return t.DEPTH_COMPONENT;if(i===Ws)return t.DEPTH_STENCIL;if(i===cv)return t.RED;if(i===ih)return t.RED_INTEGER;if(i===uv)return t.RG;if(i===rh)return t.RG_INTEGER;if(i===sh)return t.RGBA_INTEGER;if(i===dl||i===fl||i===hl||i===pl)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===dl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===dl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ad||i===bd||i===Cd||i===Rd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ad)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pd||i===Ld||i===Nd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Pd||i===Ld)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Id||i===Dd||i===Ud||i===Od||i===Fd||i===kd||i===zd||i===Bd||i===Gd||i===Hd||i===Vd||i===Wd||i===jd||i===Xd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Id)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ud)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Od)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ml||i===$d||i===Yd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ml)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$d)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dv||i===qd||i===Kd||i===Zd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ml)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class yT extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zn extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ST={type:"move"};class Su{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ST)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Zn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const MT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ET=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new cn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ii({vertexShader:MT,fragmentShader:ET,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jt(new mc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TT extends qs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,x=null;const _=new wT,m=n.getContextAttributes();let u=null,v=null;const g=[],y=[],C=new be;let A=null;const b=new Fn;b.layers.enable(1),b.viewport=new Dt;const L=new Fn;L.layers.enable(2),L.viewport=new Dt;const E=[b,L],S=new yT;S.layers.enable(1),S.layers.enable(2);let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=g[G];return Y===void 0&&(Y=new Su,g[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=g[G];return Y===void 0&&(Y=new Su,g[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=g[G];return Y===void 0&&(Y=new Su,g[G]=Y),Y.getHandSpace()};function k(G){const Y=y.indexOf(G.inputSource);if(Y===-1)return;const ae=g[Y];ae!==void 0&&(ae.update(G.inputSource,G.frame,c||o),ae.dispatchEvent({type:G.type,data:G.inputSource}))}function j(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",X);for(let G=0;G<g.length;G++){const Y=y[G];Y!==null&&(y[G]=null,g[G].disconnect(Y))}R=null,B=null,_.reset(),e.setRenderTarget(u),p=null,f=null,h=null,r=null,v=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",j),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Hr(p.framebufferWidth,p.framebufferHeight,{format:ei,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,ae=null,ue=null;m.depth&&(ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=m.stencil?Ws:Ns,ae=m.stencil?Vs:Gr);const we={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(we),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Hr(f.textureWidth,f.textureHeight,{format:ei,type:Ni,depthTexture:new Tv(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(G){for(let Y=0;Y<G.removed.length;Y++){const ae=G.removed[Y],ue=y.indexOf(ae);ue>=0&&(y[ue]=null,g[ue].disconnect(ae))}for(let Y=0;Y<G.added.length;Y++){const ae=G.added[Y];let ue=y.indexOf(ae);if(ue===-1){for(let Pe=0;Pe<g.length;Pe++)if(Pe>=y.length){y.push(ae),ue=Pe;break}else if(y[Pe]===null){y[Pe]=ae,ue=Pe;break}if(ue===-1)break}const we=g[ue];we&&we.connect(ae)}}const z=new D,$=new D;function I(G,Y,ae){z.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(ae.matrixWorld);const ue=z.distanceTo($),we=Y.projectionMatrix.elements,Pe=ae.projectionMatrix.elements,ze=we[14]/(we[10]-1),nt=we[14]/(we[10]+1),N=(we[9]+1)/we[5],lt=(we[9]-1)/we[5],Ge=(we[8]-1)/we[0],qe=(Pe[8]+1)/Pe[0],Me=ze*Ge,ut=ze*qe,Le=ue/(-Ge+qe),ke=Le*-Ge;if(Y.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ke),G.translateZ(Le),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),we[10]===-1)G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const P=ze+Le,M=nt+Le,W=Me-ke,Q=ut+(ue-ke),te=N*nt/M*P,ee=lt*nt/M*P;G.projectionMatrix.makePerspective(W,Q,te,ee,P,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function q(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let Y=G.near,ae=G.far;_.texture!==null&&(_.depthNear>0&&(Y=_.depthNear),_.depthFar>0&&(ae=_.depthFar)),S.near=L.near=b.near=Y,S.far=L.far=b.far=ae,(R!==S.near||B!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,B=S.far);const ue=G.parent,we=S.cameras;q(S,ue);for(let Pe=0;Pe<we.length;Pe++)q(we[Pe],ue);we.length===2?I(S,b,L):S.projectionMatrix.copy(b.projectionMatrix),Z(G,S,ue)};function Z(G,Y,ae){ae===null?G.matrix.copy(Y.matrixWorld):(G.matrix.copy(ae.matrixWorld),G.matrix.invert(),G.matrix.multiply(Y.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Jd*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let oe=null;function Se(G,Y){if(d=Y.getViewerPose(c||o),x=Y,d!==null){const ae=d.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ue=!1;ae.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let Pe=0;Pe<ae.length;Pe++){const ze=ae[Pe];let nt=null;if(p!==null)nt=p.getViewport(ze);else{const lt=h.getViewSubImage(f,ze);nt=lt.viewport,Pe===0&&(e.setRenderTargetTextures(v,lt.colorTexture,f.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(v))}let N=E[Pe];N===void 0&&(N=new Fn,N.layers.enable(Pe),N.viewport=new Dt,E[Pe]=N),N.matrix.fromArray(ze.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(ze.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(nt.x,nt.y,nt.width,nt.height),Pe===0&&(S.matrix.copy(N.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(N)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const Pe=h.getDepthInformation(ae[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,r.renderState)}}for(let ae=0;ae<g.length;ae++){const ue=y[ae],we=g[ae];ue!==null&&we!==void 0&&we.update(ue,Y,c||o)}oe&&oe(G,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),x=null}const Re=new Ev;Re.setAnimationLoop(Se),this.setAnimationLoop=function(G){oe=G},this.dispose=function(){}}}const Mr=new pi,AT=new vt;function bT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,yv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,g,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),x(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),_(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,v,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===ln&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===ln&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),g=v.envMap,y=v.envMapRotation;g&&(m.envMap.value=g,Mr.copy(y),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),m.envMapRotation.value.setFromMatrix4(AT.makeRotationFromEuler(Mr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=g*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ln&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function CT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const y=g.program;i.uniformBlockBinding(v,y)}function c(v,g){let y=r[v.id];y===void 0&&(x(v),y=d(v),r[v.id]=y,v.addEventListener("dispose",m));const C=g.program;i.updateUBOMapping(v,C);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function d(v){const g=h();v.__bindingPointIndex=g;const y=t.createBuffer(),C=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const g=r[v.id],y=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,b=y.length;A<b;A++){const L=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,S=L.length;E<S;E++){const R=L[E];if(p(R,A,E,C)===!0){const B=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let j=0;for(let X=0;X<k.length;X++){const z=k[X],$=_(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,B+j,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,j),j+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,y,C){const A=v.value,b=g+"_"+y;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const L=C[b];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return C[b]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function x(v){const g=v.uniforms;let y=0;const C=16;for(let b=0,L=g.length;b<L;b++){const E=Array.isArray(g[b])?g[b]:[g[b]];for(let S=0,R=E.length;S<R;S++){const B=E[S],k=Array.isArray(B.value)?B.value:[B.value];for(let j=0,X=k.length;j<X;j++){const z=k[j],$=_(z),I=y%C,q=I%$.boundary,Z=I+q;y+=q,Z!==0&&C-Z<$.storage&&(y+=C-Z),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=$.storage}}}const A=y%C;return A>0&&(y+=C-A),v.__size=y,v.__cache={},this}function _(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class RT{constructor(e={}){const{canvas:n=_S(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),x=new Int32Array(4);let _=null,m=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ai,this.toneMapping=cr,this.toneMappingExposure=1;const g=this;let y=!1,C=0,A=0,b=null,L=-1,E=null;const S=new Dt,R=new Dt;let B=null;const k=new Ke(0);let j=0,X=n.width,z=n.height,$=1,I=null,q=null;const Z=new Dt(0,0,X,z),oe=new Dt(0,0,X,z);let Se=!1;const Re=new lh;let G=!1,Y=!1;const ae=new vt,ue=new D,we=new Dt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function nt(){return b===null?$:1}let N=i;function lt(w,O){return n.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qf}`),n.addEventListener("webglcontextlost",K,!1),n.addEventListener("webglcontextrestored",J,!1),n.addEventListener("webglcontextcreationerror",le,!1),N===null){const O="webgl2";if(N=lt(O,w),N===null)throw lt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ge,qe,Me,ut,Le,ke,P,M,W,Q,te,ee,Te,fe,me,Fe,ie,ge,Ne,Ie,ve,Ue,Be,dt;function U(){Ge=new UE(N),Ge.init(),Ue=new _T(N,Ge),qe=new RE(N,Ge,e,Ue),Me=new gT(N),ut=new kE(N),Le=new nT,ke=new xT(N,Ge,Me,Le,qe,Ue,ut),P=new LE(g),M=new DE(g),W=new jS(N),Be=new bE(N,W),Q=new OE(N,W,ut,Be),te=new BE(N,Q,W,ut),Ne=new zE(N,qe,ke),Fe=new PE(Le),ee=new tT(g,P,M,Ge,qe,Be,Fe),Te=new bT(g,Le),fe=new rT,me=new uT(Ge),ge=new AE(g,P,M,Me,te,f,l),ie=new mT(g,te,qe),dt=new CT(N,ut,qe,Me),Ie=new CE(N,Ge,ut),ve=new FE(N,Ge,ut),ut.programs=ee.programs,g.capabilities=qe,g.extensions=Ge,g.properties=Le,g.renderLists=fe,g.shadowMap=ie,g.state=Me,g.info=ut}U();const re=new TT(g,N);this.xr=re,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=Ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(X,z,!1))},this.getSize=function(w){return w.set(X,z)},this.setSize=function(w,O,H=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,z=O,n.width=Math.floor(w*$),n.height=Math.floor(O*$),H===!0&&(n.style.width=w+"px",n.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(X*$,z*$).floor()},this.setDrawingBufferSize=function(w,O,H){X=w,z=O,$=H,n.width=Math.floor(w*H),n.height=Math.floor(O*H),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,O,H,V){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,O,H,V),Me.viewport(S.copy(Z).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(oe)},this.setScissor=function(w,O,H,V){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,O,H,V),Me.scissor(R.copy(oe).multiplyScalar($).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){Me.setScissorTest(Se=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(w=!0,O=!0,H=!0){let V=0;if(w){let F=!1;if(b!==null){const se=b.texture.format;F=se===sh||se===rh||se===ih}if(F){const se=b.texture.type,pe=se===Ni||se===Gr||se===Jo||se===Vs||se===th||se===nh,_e=ge.getClearColor(),ye=ge.getClearAlpha(),De=_e.r,Oe=_e.g,Ee=_e.b;pe?(p[0]=De,p[1]=Oe,p[2]=Ee,p[3]=ye,N.clearBufferuiv(N.COLOR,0,p)):(x[0]=De,x[1]=Oe,x[2]=Ee,x[3]=ye,N.clearBufferiv(N.COLOR,0,x))}else V|=N.COLOR_BUFFER_BIT}O&&(V|=N.DEPTH_BUFFER_BIT),H&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",K,!1),n.removeEventListener("webglcontextrestored",J,!1),n.removeEventListener("webglcontextcreationerror",le,!1),fe.dispose(),me.dispose(),Le.dispose(),P.dispose(),M.dispose(),te.dispose(),Be.dispose(),dt.dispose(),ee.dispose(),re.dispose(),re.removeEventListener("sessionstart",Ln),re.removeEventListener("sessionend",Zs),ce.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=ut.autoReset,O=ie.enabled,H=ie.autoUpdate,V=ie.needsUpdate,F=ie.type;U(),ut.autoReset=w,ie.enabled=O,ie.autoUpdate=H,ie.needsUpdate=V,ie.type=F}function le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ce(w){const O=w.target;O.removeEventListener("dispose",Ce),je(O)}function je(w){_t(w),Le.remove(w)}function _t(w){const O=Le.get(w).programs;O!==void 0&&(O.forEach(function(H){ee.releaseProgram(H)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,H,V,F,se){O===null&&(O=Pe);const pe=F.isMesh&&F.matrixWorld.determinant()<0,_e=_n(w,O,H,V,F);Me.setMaterial(V,pe);let ye=H.index,De=1;if(V.wireframe===!0){if(ye=Q.getWireframeAttribute(H),ye===void 0)return;De=2}const Oe=H.drawRange,Ee=H.attributes.position;let it=Oe.start*De,Et=(Oe.start+Oe.count)*De;se!==null&&(it=Math.max(it,se.start*De),Et=Math.min(Et,(se.start+se.count)*De)),ye!==null?(it=Math.max(it,0),Et=Math.min(Et,ye.count)):Ee!=null&&(it=Math.max(it,0),Et=Math.min(Et,Ee.count));const wt=Et-it;if(wt<0||wt===1/0)return;Be.setup(F,V,_e,H,ye);let yn,rt=Ie;if(ye!==null&&(yn=W.get(ye),rt=ve,rt.setIndex(yn)),F.isMesh)V.wireframe===!0?(Me.setLineWidth(V.wireframeLinewidth*nt()),rt.setMode(N.LINES)):rt.setMode(N.TRIANGLES);else if(F.isLine){let Ae=V.linewidth;Ae===void 0&&(Ae=1),Me.setLineWidth(Ae*nt()),F.isLineSegments?rt.setMode(N.LINES):F.isLineLoop?rt.setMode(N.LINE_LOOP):rt.setMode(N.LINE_STRIP)}else F.isPoints?rt.setMode(N.POINTS):F.isSprite&&rt.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)rt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))rt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ae=F._multiDrawStarts,Vt=F._multiDrawCounts,st=F._multiDrawCount,Vn=ye?W.get(ye).bytesPerElement:1,$r=Le.get(V).currentProgram.getUniforms();for(let Sn=0;Sn<st;Sn++)$r.setValue(N,"_gl_DrawID",Sn),rt.render(Ae[Sn]/Vn,Vt[Sn])}else if(F.isInstancedMesh)rt.renderInstances(it,wt,F.count);else if(H.isInstancedBufferGeometry){const Ae=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Vt=Math.min(H.instanceCount,Ae);rt.renderInstances(it,wt,Vt)}else rt.render(it,wt)};function Rt(w,O,H){w.transparent===!0&&w.side===ui&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,At(w,O,H),w.side=fr,w.needsUpdate=!0,At(w,O,H),w.side=ui):At(w,O,H)}this.compile=function(w,O,H=null){H===null&&(H=w),m=me.get(H),m.init(O),v.push(m),H.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),w!==H&&w.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const V=new Set;return w.traverse(function(F){const se=F.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const _e=se[pe];Rt(_e,H,F),V.add(_e)}else Rt(se,H,F),V.add(se)}),v.pop(),m=null,V},this.compileAsync=function(w,O,H=null){const V=this.compile(w,O,H);return new Promise(F=>{function se(){if(V.forEach(function(pe){Le.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){F(w);return}setTimeout(se,10)}Ge.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Ze=null;function xn(w){Ze&&Ze(w)}function Ln(){ce.stop()}function Zs(){ce.start()}const ce=new Ev;ce.setAnimationLoop(xn),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(w){Ze=w,re.setAnimationLoop(w),w===null?ce.stop():ce.start()},re.addEventListener("sessionstart",Ln),re.addEventListener("sessionend",Zs),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(O),O=re.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,O,b),m=me.get(w,v.length),m.init(O),v.push(m),ae.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Re.setFromProjectionMatrix(ae),Y=this.localClippingEnabled,G=Fe.init(this.clippingPlanes,Y),_=fe.get(w,u.length),_.init(),u.push(_),re.enabled===!0&&re.isPresenting===!0){const se=g.xr.getDepthSensingMesh();se!==null&&We(se,O,-1/0,g.sortObjects)}We(w,O,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(I,q),ze=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ze&&ge.addToRenderList(_,w),this.info.render.frame++,G===!0&&Fe.beginShadows();const H=m.state.shadowsArray;ie.render(H,w,O),G===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=_.opaque,F=_.transmissive;if(m.setupLights(),O.isArrayCamera){const se=O.cameras;if(F.length>0)for(let pe=0,_e=se.length;pe<_e;pe++){const ye=se[pe];Je(V,F,w,ye)}ze&&ge.render(w);for(let pe=0,_e=se.length;pe<_e;pe++){const ye=se[pe];Ye(_,w,ye,ye.viewport)}}else F.length>0&&Je(V,F,w,O),ze&&ge.render(w),Ye(_,w,O);b!==null&&(ke.updateMultisampleRenderTarget(b),ke.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(g,w,O),Be.resetDefaultState(),L=-1,E=null,v.pop(),v.length>0?(m=v[v.length-1],G===!0&&Fe.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function We(w,O,H,V){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Re.intersectsSprite(w)){V&&we.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae);const pe=te.update(w),_e=w.material;_e.visible&&_.push(w,pe,_e,H,we.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Re.intersectsObject(w))){const pe=te.update(w),_e=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),we.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),we.copy(pe.boundingSphere.center)),we.applyMatrix4(w.matrixWorld).applyMatrix4(ae)),Array.isArray(_e)){const ye=pe.groups;for(let De=0,Oe=ye.length;De<Oe;De++){const Ee=ye[De],it=_e[Ee.materialIndex];it&&it.visible&&_.push(w,pe,it,H,we.z,Ee)}}else _e.visible&&_.push(w,pe,_e,H,we.z,null)}}const se=w.children;for(let pe=0,_e=se.length;pe<_e;pe++)We(se[pe],O,H,V)}function Ye(w,O,H,V){const F=w.opaque,se=w.transmissive,pe=w.transparent;m.setupLightsView(H),G===!0&&Fe.setGlobalState(g.clippingPlanes,H),V&&Me.viewport(S.copy(V)),F.length>0&&ct(F,O,H),se.length>0&&ct(se,O,H),pe.length>0&&ct(pe,O,H),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Je(w,O,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Hr(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?ra:Ni,minFilter:Ir,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const se=m.state.transmissionRenderTarget[V.id],pe=V.viewport||S;se.setSize(pe.z,pe.w);const _e=g.getRenderTarget();g.setRenderTarget(se),g.getClearColor(k),j=g.getClearAlpha(),j<1&&g.setClearColor(16777215,.5),g.clear(),ze&&ge.render(H);const ye=g.toneMapping;g.toneMapping=cr;const De=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),G===!0&&Fe.setGlobalState(g.clippingPlanes,V),ct(w,H,V),ke.updateMultisampleRenderTarget(se),ke.updateRenderTargetMipmap(se),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ee=0,it=O.length;Ee<it;Ee++){const Et=O[Ee],wt=Et.object,yn=Et.geometry,rt=Et.material,Ae=Et.group;if(rt.side===ui&&wt.layers.test(V.layers)){const Vt=rt.side;rt.side=ln,rt.needsUpdate=!0,Xe(wt,H,V,yn,rt,Ae),rt.side=Vt,rt.needsUpdate=!0,Oe=!0}}Oe===!0&&(ke.updateMultisampleRenderTarget(se),ke.updateRenderTargetMipmap(se))}g.setRenderTarget(_e),g.setClearColor(k,j),De!==void 0&&(V.viewport=De),g.toneMapping=ye}function ct(w,O,H){const V=O.isScene===!0?O.overrideMaterial:null;for(let F=0,se=w.length;F<se;F++){const pe=w[F],_e=pe.object,ye=pe.geometry,De=V===null?pe.material:V,Oe=pe.group;_e.layers.test(H.layers)&&Xe(_e,O,H,ye,De,Oe)}}function Xe(w,O,H,V,F,se){w.onBeforeRender(g,O,H,V,F,se),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(g,O,H,V,w,se),F.transparent===!0&&F.side===ui&&F.forceSinglePass===!1?(F.side=ln,F.needsUpdate=!0,g.renderBufferDirect(H,O,V,F,w,se),F.side=fr,F.needsUpdate=!0,g.renderBufferDirect(H,O,V,F,w,se),F.side=ui):g.renderBufferDirect(H,O,V,F,w,se),w.onAfterRender(g,O,H,V,F,se)}function At(w,O,H){O.isScene!==!0&&(O=Pe);const V=Le.get(w),F=m.state.lights,se=m.state.shadowsArray,pe=F.state.version,_e=ee.getParameters(w,F.state,se,O,H),ye=ee.getProgramCacheKey(_e);let De=V.programs;V.environment=w.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(w.isMeshStandardMaterial?M:P).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,De===void 0&&(w.addEventListener("dispose",Ce),De=new Map,V.programs=De);let Oe=De.get(ye);if(Oe!==void 0){if(V.currentProgram===Oe&&V.lightsStateVersion===pe)return ht(w,_e),Oe}else _e.uniforms=ee.getUniforms(w),w.onBeforeCompile(_e,g),Oe=ee.acquireProgram(_e,ye),De.set(ye,Oe),V.uniforms=_e.uniforms;const Ee=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ee.clippingPlanes=Fe.uniform),ht(w,_e),V.needsLights=rn(w),V.lightsStateVersion=pe,V.needsLights&&(Ee.ambientLightColor.value=F.state.ambient,Ee.lightProbe.value=F.state.probe,Ee.directionalLights.value=F.state.directional,Ee.directionalLightShadows.value=F.state.directionalShadow,Ee.spotLights.value=F.state.spot,Ee.spotLightShadows.value=F.state.spotShadow,Ee.rectAreaLights.value=F.state.rectArea,Ee.ltc_1.value=F.state.rectAreaLTC1,Ee.ltc_2.value=F.state.rectAreaLTC2,Ee.pointLights.value=F.state.point,Ee.pointLightShadows.value=F.state.pointShadow,Ee.hemisphereLights.value=F.state.hemi,Ee.directionalShadowMap.value=F.state.directionalShadowMap,Ee.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ee.spotShadowMap.value=F.state.spotShadowMap,Ee.spotLightMatrix.value=F.state.spotLightMatrix,Ee.spotLightMap.value=F.state.spotLightMap,Ee.pointShadowMap.value=F.state.pointShadowMap,Ee.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Oe,V.uniformsList=null,Oe}function nn(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=gl.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function ht(w,O){const H=Le.get(w);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function _n(w,O,H,V,F){O.isScene!==!0&&(O=Pe),ke.resetTextureUnits();const se=O.fog,pe=V.isMeshStandardMaterial?O.environment:null,_e=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:gr,ye=(V.isMeshStandardMaterial?M:P).get(V.envMap||pe),De=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Oe=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!H.morphAttributes.position,it=!!H.morphAttributes.normal,Et=!!H.morphAttributes.color;let wt=cr;V.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(wt=g.toneMapping);const yn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,rt=yn!==void 0?yn.length:0,Ae=Le.get(V),Vt=m.state.lights;if(G===!0&&(Y===!0||w!==E)){const Nn=w===E&&V.id===L;Fe.setState(V,w,Nn)}let st=!1;V.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Vt.state.version||Ae.outputColorSpace!==_e||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==ye||V.fog===!0&&Ae.fog!==se||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Fe.numPlanes||Ae.numIntersection!==Fe.numIntersection)||Ae.vertexAlphas!==De||Ae.vertexTangents!==Oe||Ae.morphTargets!==Ee||Ae.morphNormals!==it||Ae.morphColors!==Et||Ae.toneMapping!==wt||Ae.morphTargetsCount!==rt)&&(st=!0):(st=!0,Ae.__version=V.version);let Vn=Ae.currentProgram;st===!0&&(Vn=At(V,O,F));let $r=!1,Sn=!1,_c=!1;const Pt=Vn.getUniforms(),Oi=Ae.uniforms;if(Me.useProgram(Vn.program)&&($r=!0,Sn=!0,_c=!0),V.id!==L&&(L=V.id,Sn=!0),$r||E!==w){Pt.setValue(N,"projectionMatrix",w.projectionMatrix),Pt.setValue(N,"viewMatrix",w.matrixWorldInverse);const Nn=Pt.map.cameraPosition;Nn!==void 0&&Nn.setValue(N,ue.setFromMatrixPosition(w.matrixWorld)),qe.logarithmicDepthBuffer&&Pt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Pt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,Sn=!0,_c=!0)}if(F.isSkinnedMesh){Pt.setOptional(N,F,"bindMatrix"),Pt.setOptional(N,F,"bindMatrixInverse");const Nn=F.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Pt.setValue(N,"boneTexture",Nn.boneTexture,ke))}F.isBatchedMesh&&(Pt.setOptional(N,F,"batchingTexture"),Pt.setValue(N,"batchingTexture",F._matricesTexture,ke),Pt.setOptional(N,F,"batchingIdTexture"),Pt.setValue(N,"batchingIdTexture",F._indirectTexture,ke),Pt.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&Pt.setValue(N,"batchingColorTexture",F._colorsTexture,ke));const yc=H.morphAttributes;if((yc.position!==void 0||yc.normal!==void 0||yc.color!==void 0)&&Ne.update(F,H,Vn),(Sn||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,Pt.setValue(N,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Oi.envMap.value=ye,Oi.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(Oi.envMapIntensity.value=O.environmentIntensity),Sn&&(Pt.setValue(N,"toneMappingExposure",g.toneMappingExposure),Ae.needsLights&&Ht(Oi,_c),se&&V.fog===!0&&Te.refreshFogUniforms(Oi,se),Te.refreshMaterialUniforms(Oi,V,$,z,m.state.transmissionRenderTarget[w.id]),gl.upload(N,nn(Ae),Oi,ke)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(gl.upload(N,nn(Ae),Oi,ke),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Pt.setValue(N,"center",F.center),Pt.setValue(N,"modelViewMatrix",F.modelViewMatrix),Pt.setValue(N,"normalMatrix",F.normalMatrix),Pt.setValue(N,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Nn=V.uniformsGroups;for(let Sc=0,Wv=Nn.length;Sc<Wv;Sc++){const gh=Nn[Sc];dt.update(gh,Vn),dt.bind(gh,Vn)}}return Vn}function Ht(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function rn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,O,H){Le.get(w.texture).__webglTexture=O,Le.get(w.depthTexture).__webglTexture=H;const V=Le.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const H=Le.get(w);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,H=0){b=w,C=O,A=H;let V=!0,F=null,se=!1,pe=!1;if(w){const ye=Le.get(w);if(ye.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(ye.__webglFramebuffer===void 0)ke.setupRenderTarget(w);else if(ye.__hasExternalTextures)ke.rebindTextures(w,Le.get(w.texture).__webglTexture,Le.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ee=w.depthTexture;if(ye.__boundDepthTexture!==Ee){if(Ee!==null&&Le.has(Ee)&&(w.width!==Ee.image.width||w.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(w)}}const De=w.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(pe=!0);const Oe=Le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?F=Oe[O][H]:F=Oe[O],se=!0):w.samples>0&&ke.useMultisampledRTT(w)===!1?F=Le.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?F=Oe[H]:F=Oe,S.copy(w.viewport),R.copy(w.scissor),B=w.scissorTest}else S.copy(Z).multiplyScalar($).floor(),R.copy(oe).multiplyScalar($).floor(),B=Se;if(Me.bindFramebuffer(N.FRAMEBUFFER,F)&&V&&Me.drawBuffers(w,F),Me.viewport(S),Me.scissor(R),Me.setScissorTest(B),se){const ye=Le.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,ye.__webglTexture,H)}else if(pe){const ye=Le.get(w.texture),De=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.__webglTexture,H||0,De)}L=-1},this.readRenderTargetPixels=function(w,O,H,V,F,se,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){Me.bindFramebuffer(N.FRAMEBUFFER,_e);try{const ye=w.texture,De=ye.format,Oe=ye.type;if(!qe.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-V&&H>=0&&H<=w.height-F&&N.readPixels(O,H,V,F,Ue.convert(De),Ue.convert(Oe),se)}finally{const ye=b!==null?Le.get(b).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(w,O,H,V,F,se,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){Me.bindFramebuffer(N.FRAMEBUFFER,_e);try{const ye=w.texture,De=ye.format,Oe=ye.type;if(!qe.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-V&&H>=0&&H<=w.height-F){const Ee=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.bufferData(N.PIXEL_PACK_BUFFER,se.byteLength,N.STREAM_READ),N.readPixels(O,H,V,F,Ue.convert(De),Ue.convert(Oe),0),N.flush();const it=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await yS(N,it,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,se)}finally{N.deleteBuffer(Ee),N.deleteSync(it)}return se}}finally{const ye=b!==null?Le.get(b).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(w,O=null,H=0){w.isTexture!==!0&&(Po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-H),F=Math.floor(w.image.width*V),se=Math.floor(w.image.height*V),pe=O!==null?O.x:0,_e=O!==null?O.y:0;ke.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,pe,_e,F,se),Me.unbindTexture()},this.copyTextureToTexture=function(w,O,H=null,V=null,F=0){w.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],O=arguments[2],F=arguments[3]||0,H=null);let se,pe,_e,ye,De,Oe;H!==null?(se=H.max.x-H.min.x,pe=H.max.y-H.min.y,_e=H.min.x,ye=H.min.y):(se=w.image.width,pe=w.image.height,_e=0,ye=0),V!==null?(De=V.x,Oe=V.y):(De=0,Oe=0);const Ee=Ue.convert(O.format),it=Ue.convert(O.type);ke.setTexture2D(O,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const Et=N.getParameter(N.UNPACK_ROW_LENGTH),wt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),yn=N.getParameter(N.UNPACK_SKIP_PIXELS),rt=N.getParameter(N.UNPACK_SKIP_ROWS),Ae=N.getParameter(N.UNPACK_SKIP_IMAGES),Vt=w.isCompressedTexture?w.mipmaps[F]:w.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Vt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Vt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_e),N.pixelStorei(N.UNPACK_SKIP_ROWS,ye),w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,De,Oe,se,pe,Ee,it,Vt.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,De,Oe,Vt.width,Vt.height,Ee,Vt.data):N.texSubImage2D(N.TEXTURE_2D,F,De,Oe,se,pe,Ee,it,Vt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Et),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,wt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,yn),N.pixelStorei(N.UNPACK_SKIP_ROWS,rt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ae),F===0&&O.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(w,O,H=null,V=null,F=0){w.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],O=arguments[3],F=arguments[4]||0);let se,pe,_e,ye,De,Oe,Ee,it,Et;const wt=w.isCompressedTexture?w.mipmaps[F]:w.image;H!==null?(se=H.max.x-H.min.x,pe=H.max.y-H.min.y,_e=H.max.z-H.min.z,ye=H.min.x,De=H.min.y,Oe=H.min.z):(se=wt.width,pe=wt.height,_e=wt.depth,ye=0,De=0,Oe=0),V!==null?(Ee=V.x,it=V.y,Et=V.z):(Ee=0,it=0,Et=0);const yn=Ue.convert(O.format),rt=Ue.convert(O.type);let Ae;if(O.isData3DTexture)ke.setTexture3D(O,0),Ae=N.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)ke.setTexture2DArray(O,0),Ae=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const Vt=N.getParameter(N.UNPACK_ROW_LENGTH),st=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Vn=N.getParameter(N.UNPACK_SKIP_PIXELS),$r=N.getParameter(N.UNPACK_SKIP_ROWS),Sn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,wt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,wt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ye),N.pixelStorei(N.UNPACK_SKIP_ROWS,De),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Oe),w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Ae,F,Ee,it,Et,se,pe,_e,yn,rt,wt.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(Ae,F,Ee,it,Et,se,pe,_e,yn,wt.data):N.texSubImage3D(Ae,F,Ee,it,Et,se,pe,_e,yn,rt,wt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Vt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,st),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Vn),N.pixelStorei(N.UNPACK_SKIP_ROWS,$r),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Sn),F===0&&O.generateMipmaps&&N.generateMipmap(Ae),Me.unbindTexture()},this.initRenderTarget=function(w){Le.get(w).__webglFramebuffer===void 0&&ke.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ke.setTextureCube(w,0):w.isData3DTexture?ke.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ke.setTexture2DArray(w,0):ke.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){C=0,A=0,b=null,Me.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===oh?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===hc?"display-p3":"srgb"}}class PT extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Pv extends Xr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yl=new D,ql=new D,Sm=new vt,ho=new pc,Ya=new la,Mu=new D,Mm=new D;class LT extends Gt{constructor(e=new en,n=new Pv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Yl.fromBufferAttribute(n,r-1),ql.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Yl.distanceTo(ql);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(r),Ya.radius+=s,e.ray.intersectsSphere(Ya)===!1)return;Sm.copy(r).invert(),ho.copy(e.ray).applyMatrix4(Sm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=c){const u=d.getX(_),v=d.getX(_+1),g=qa(this,e,ho,l,u,v);g&&n.push(g)}if(this.isLineLoop){const _=d.getX(x-1),m=d.getX(p),u=qa(this,e,ho,l,_,m);u&&n.push(u)}}else{const p=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=c){const u=qa(this,e,ho,l,_,_+1);u&&n.push(u)}if(this.isLineLoop){const _=qa(this,e,ho,l,x-1,p);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function qa(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Yl.fromBufferAttribute(o,r),ql.fromBufferAttribute(o,s),n.distanceSqToSegment(Yl,ql,Mu,Mm)>i)return;Mu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Mu);if(!(l<e.near||l>e.far))return{distance:l,point:Mm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const Em=new D,wm=new D;class NT extends LT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Em.fromBufferAttribute(n,r),wm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Em.distanceTo(wm);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ef extends Xr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tm=new vt,tf=new pc,Ka=new la,Za=new D;class Am extends Gt{constructor(e=new en,n=new ef){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(r),Ka.radius+=s,e.ray.intersectsSphere(Ka)===!1)return;Tm.copy(r).invert(),tf.copy(e.ray).applyMatrix4(Tm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let x=f,_=p;x<_;x++){const m=c.getX(x);Za.fromBufferAttribute(h,m),bm(Za,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,_=p;x<_;x++)Za.fromBufferAttribute(h,x),bm(Za,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function bm(t,e,n,i,r,s,o){const a=tf.distanceSqToPoint(t);if(a<n){const l=new D;tf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class IT extends cn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],f=i[r+1]-d,p=(o-d)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new be:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new D,r=[],s=[],o=[],a=new D,l=new vt;for(let p=0;p<=e;p++){const x=p/e;r[p]=this.getTangentAt(x,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Qt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Qt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],p*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Lv extends Ui{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new be){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*d-p*h+this.aX,c=f*h+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class DT extends Lv{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function uh(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,h){let f=(o-s)/c-(a-s)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+h)+(l-a)/h;f*=d,p*=d,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Ja=new D,Eu=new uh,wu=new uh,Tu=new uh;class Nv extends Ui{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new D){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(Ja.subVectors(r[0],r[1]).add(r[0]),c=Ja);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(Ja.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Ja),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(d),p);_<1e-4&&(_=1),x<1e-4&&(x=_),m<1e-4&&(m=_),Eu.initNonuniformCatmullRom(c.x,h.x,f.x,d.x,x,_,m),wu.initNonuniformCatmullRom(c.y,h.y,f.y,d.y,x,_,m),Tu.initNonuniformCatmullRom(c.z,h.z,f.z,d.z,x,_,m)}else this.curveType==="catmullrom"&&(Eu.initCatmullRom(c.x,h.x,f.x,d.x,this.tension),wu.initCatmullRom(c.y,h.y,f.y,d.y,this.tension),Tu.initCatmullRom(c.z,h.z,f.z,d.z,this.tension));return i.set(Eu.calc(l),wu.calc(l),Tu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function UT(t,e){const n=1-t;return n*n*e}function OT(t,e){return 2*(1-t)*t*e}function FT(t,e){return t*t*e}function Lo(t,e,n,i){return UT(t,e)+OT(t,n)+FT(t,i)}function kT(t,e){const n=1-t;return n*n*n*e}function zT(t,e){const n=1-t;return 3*n*n*t*e}function BT(t,e){return 3*(1-t)*t*t*e}function GT(t,e){return t*t*t*e}function No(t,e,n,i,r){return kT(t,e)+zT(t,n)+BT(t,i)+GT(t,r)}class HT extends Ui{constructor(e=new be,n=new be,i=new be,r=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new be){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(No(e,r.x,s.x,o.x,a.x),No(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class VT extends Ui{constructor(e=new D,n=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(No(e,r.x,s.x,o.x,a.x),No(e,r.y,s.y,o.y,a.y),No(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class WT extends Ui{constructor(e=new be,n=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new be){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new be){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jT extends Ui{constructor(e=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new D){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class XT extends Ui{constructor(e=new be,n=new be,i=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new be){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Lo(e,r.x,s.x,o.x),Lo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iv extends Ui{constructor(e=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Lo(e,r.x,s.x,o.x),Lo(e,r.y,s.y,o.y),Lo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $T extends Ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new be){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Cm(a,l.x,c.x,d.x,h.x),Cm(a,l.y,c.y,d.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new be().fromArray(r))}return this}}var YT=Object.freeze({__proto__:null,ArcCurve:DT,CatmullRomCurve3:Nv,CubicBezierCurve:HT,CubicBezierCurve3:VT,EllipseCurve:Lv,LineCurve:WT,LineCurve3:jT,QuadraticBezierCurve:XT,QuadraticBezierCurve3:Iv,SplineCurve:$T});class dh extends en{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],p=[];let x=0;const _=[],m=i/2;let u=0;v(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(d),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(p,2));function v(){const y=new D,C=new D;let A=0;const b=(n-e)/i;for(let L=0;L<=s;L++){const E=[],S=L/s,R=S*(n-e)+e;for(let B=0;B<=r;B++){const k=B/r,j=k*l+a,X=Math.sin(j),z=Math.cos(j);C.x=R*X,C.y=-S*i+m,C.z=R*z,h.push(C.x,C.y,C.z),y.set(X,b,z).normalize(),f.push(y.x,y.y,y.z),p.push(k,1-S),E.push(x++)}_.push(E)}for(let L=0;L<r;L++)for(let E=0;E<s;E++){const S=_[E][L],R=_[E+1][L],B=_[E+1][L+1],k=_[E][L+1];d.push(S,R,k),d.push(R,B,k),A+=6}c.addGroup(u,A,0),u+=A}function g(y){const C=x,A=new be,b=new D;let L=0;const E=y===!0?e:n,S=y===!0?1:-1;for(let B=1;B<=r;B++)h.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),x++;const R=x;for(let B=0;B<=r;B++){const j=B/r*l+a,X=Math.cos(j),z=Math.sin(j);b.x=E*z,b.y=m*S,b.z=E*X,h.push(b.x,b.y,b.z),f.push(0,S,0),A.x=X*.5+.5,A.y=z*.5*S+.5,p.push(A.x,A.y),x++}for(let B=0;B<r;B++){const k=C+B,j=R+B;y===!0?d.push(j,j+1,k):d.push(j+1,j,k),L+=3}c.addGroup(u,L,y===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fh extends en{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let h=e;const f=(n-e)/r,p=new D,x=new be;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const u=s+m/i*o;p.x=h*Math.cos(u),p.y=h*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/n+1)/2,x.y=(p.y/n+1)/2,d.push(x.x,x.y)}h+=f}for(let _=0;_<r;_++){const m=_*(i+1);for(let u=0;u<i;u++){const v=u+m,g=v,y=v+i+1,C=v+i+2,A=v+1;a.push(g,y,A),a.push(y,C,A)}}this.setIndex(a),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Io extends en{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new D,f=new D,p=[],x=[],_=[],m=[];for(let u=0;u<=i;u++){const v=[],g=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const A=C/n;h.x=-e*Math.cos(r+A*s)*Math.sin(o+g*a),h.y=e*Math.cos(o+g*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+g*a),x.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(A+y,1-g),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const g=d[u][v+1],y=d[u][v],C=d[u+1][v],A=d[u+1][v+1];(u!==0||o>0)&&p.push(g,y,A),(u!==i-1||l<Math.PI)&&p.push(y,C,A)}this.setIndex(p),this.setAttribute("position",new Ct(x,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hh extends en{constructor(e=new Iv(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,l=new D,c=new be;let d=new D;const h=[],f=[],p=[],x=[];_(),this.setIndex(x),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(p,2));function _(){for(let g=0;g<n;g++)m(g);m(s===!1?n:0),v(),u()}function m(g){d=e.getPointAt(g/n,d);const y=o.normals[g],C=o.binormals[g];for(let A=0;A<=r;A++){const b=A/r*Math.PI*2,L=Math.sin(b),E=-Math.cos(b);l.x=E*y.x+L*C.x,l.y=E*y.y+L*C.y,l.z=E*y.z+L*C.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=d.x+i*l.x,a.y=d.y+i*l.y,a.z=d.z+i*l.z,h.push(a.x,a.y,a.z)}}function u(){for(let g=1;g<=n;g++)for(let y=1;y<=r;y++){const C=(r+1)*(g-1)+(y-1),A=(r+1)*g+(y-1),b=(r+1)*g+y,L=(r+1)*(g-1)+y;x.push(C,A,L),x.push(A,b,L)}}function v(){for(let g=0;g<=n;g++)for(let y=0;y<=r;y++)c.x=g/n,c.y=y/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new hh(new YT[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Rm extends Xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fv,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dv extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Au=new vt,Pm=new D,Lm=new D;class qT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lh,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Pm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pm),Lm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lm),n.updateMatrixWorld(),Au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class KT extends qT{constructor(){super(new wv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nm extends Dv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new KT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ZT extends Dv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class JT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Im(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Im();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Im(){return(typeof performance>"u"?Date:performance).now()}const Dm=new vt;class QT{constructor(e,n,i=0,r=1/0){this.ray=new pc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ah,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Dm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dm),this}intersectObject(e,n=!0,i=[]){return nf(e,this,i,n),i.sort(Um),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)nf(e[r],this,i,n);return i.sort(Um),i}}function Um(t,e){return t.distance-e.distance}function nf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)nf(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qf);const eA=[{id:"tokyo",name:"Neo-Tokyo Metroplex",lat:35.6762,lon:139.6503,type:"megacity",country:"Japan",description:"Premier Asian neural hub. 42M population with 88% robotic public transit automation.",metrics:{loadPct:84,powerGW:38.5,latencyMs:3.2,status:"OPTIMAL"}},{id:"san_francisco",name:"Bay Area AI Synthesis Hub",lat:37.7749,lon:-122.4194,type:"datacenter",country:"USA",description:"Frontier AI foundation model research cluster and quantum simulation facilities.",metrics:{loadPct:96,powerGW:44,latencyMs:2.1,status:"OVERLOADED"}},{id:"london",name:"London Orbital FinTech Core",lat:51.5074,lon:-.1278,type:"megacity",country:"UK",description:"High-frequency algorithmic settlement mesh and European subsea terminus.",metrics:{loadPct:78,powerGW:24.2,latencyMs:5.4,status:"OPTIMAL"}},{id:"singapore",name:"Singapore Equatorial Gateway",lat:1.3521,lon:103.8198,type:"datacenter",country:"Singapore",description:"Subsea cable routing center linking Pacific and Indian Ocean digital conduits.",metrics:{loadPct:89,powerGW:22,latencyMs:4.1,status:"OPTIMAL"}},{id:"frankfurt",name:"Frankfurt Central Interchange",lat:50.1109,lon:8.6821,type:"datacenter",country:"Germany",description:"Continental Europe primary peering exchange with 100% renewable power grid pairing.",metrics:{loadPct:82,powerGW:26.5,latencyMs:4.8,status:"OPTIMAL"}},{id:"shenzhen",name:"Shenzhen-Hong Kong Autonomous Corridor",lat:22.5431,lon:114.0579,type:"megacity",country:"China",description:"Global epicenter for physical AI, humanoid robotics manufacturing, and edge chips.",metrics:{loadPct:91,powerGW:36,latencyMs:3.8,status:"OPTIMAL"}},{id:"sao_paulo",name:"São Paulo Southern Node",lat:-23.5505,lon:-46.6333,type:"megacity",country:"Brazil",description:"South American neural spine connected via Atlantic subsea quantum fiber.",metrics:{loadPct:74,powerGW:18,latencyMs:14.2,status:"OPTIMAL"}},{id:"nairobi",name:"Nairobi Silicon Savannah Core",lat:-1.2921,lon:36.8219,type:"megacity",country:"Kenya",description:"Pan-African geothermal-powered cloud cluster and mobile quantum telemetry backbone.",metrics:{loadPct:69,powerGW:12.5,latencyMs:16.5,status:"OPTIMAL"}},{id:"mumbai",name:"Mumbai Digital Metropolis",lat:19.076,lon:72.8777,type:"megacity",country:"India",description:"Fastest-growing urban AI compute cluster with high solar microgrid penetration.",metrics:{loadPct:86,powerGW:28,latencyMs:8.9,status:"OPTIMAL"}},{id:"sydney",name:"Sydney Oceanic Telemetry Hub",lat:-33.8688,lon:151.2093,type:"ground_station",country:"Australia",description:"Southern hemisphere laser satellite downlink and deep-space orbital gateway.",metrics:{loadPct:65,powerGW:11.2,latencyMs:12.4,status:"OPTIMAL"}},{id:"north_sea_dc",name:"North Sea Subsea Cryo-Cluster",lat:56.5,lon:3.2,type:"datacenter",country:"International Waters",description:"Submerged oceanic hyperscale data facility cooled naturally by ocean thermoclines. PUE 1.02.",metrics:{loadPct:72,powerGW:15,latencyMs:6.2,status:"OPTIMAL"}},{id:"iceland_geo",name:"Reykjanes Geothermal Compute Vault",lat:63.85,lon:-22.4,type:"datacenter",country:"Iceland",description:"100% baseload zero-carbon geothermal compute specialized in long-context model inference.",metrics:{loadPct:64,powerGW:9.8,latencyMs:18,status:"OPTIMAL"}},{id:"cadarache_fusion",name:"ITER Commercial Fusion Node Alpha",lat:43.6874,lon:5.7607,type:"energy_fusion",country:"France",description:"Net-positive magnetic confinement fusion power plant supplying 12 GW to European neural grid.",metrics:{loadPct:92,powerGW:12,latencyMs:0,status:"OPTIMAL"}},{id:"atacama_fusion",name:"Atacama Solar-Fusion Grid Array",lat:-23.8634,lon:-69.1328,type:"energy_fusion",country:"Chile",description:"World highest solar irradiance gigawatt facility combined with compact modular fusion batteries.",metrics:{loadPct:94,powerGW:28,latencyMs:0,status:"OPTIMAL"}}],tA=[{id:"transatlantic_alpha",name:"Transatlantic Quantum Trunk 1",points:[[37.7,-122.4],[40.7,-74],[45,-45],[50,-20],[51.5,-.1]],capacityTbps:1800,healthPct:98,status:"ONLINE"},{id:"transpacific_express",name:"Transpacific Hollow-Core Express",points:[[37.7,-122.4],[28,-155],[22,175],[30,150],[35.6,139.6]],capacityTbps:2400,healthPct:95,status:"ONLINE"},{id:"eurasia_southern",name:"SEA-ME-WE 2035 Super-Optic",points:[[51.5,-.1],[36.1,-5.3],[31.2,29.9],[12.8,45],[19,72.8],[1.3,103.8]],capacityTbps:1500,healthPct:92,status:"ONLINE"},{id:"atlantic_south",name:"South Atlantic Quantum Bridge",points:[[40.7,-74],[10,-40],[-10,-35],[-23.5,-46.6]],capacityTbps:850,healthPct:99,status:"ONLINE"},{id:"asia_pacific_mesh",name:"Asia-Pacific High-Speed Mesh",points:[[35.6,139.6],[22.5,114],[1.3,103.8],[-15,125],[-33.8,151.2]],capacityTbps:1900,healthPct:96,status:"ONLINE"}];function nA(t=80){const e=[],i=Math.ceil(t/8);for(let r=0;r<8;r++){const s=r%2===0?53:70;for(let o=0;o<i;o++)e.push({id:`sat-orb-${r}-${o}`,name:`STARLINK-X-${r*i+o+101}`,plane:r,inclinationDeg:s,altitudeKm:550+r%3*40,velocityKmh:27500,status:r===3&&o===4?"MANEUVERING":"OPERATIONAL"})}return e.slice(0,t)}const Om={vertexShader:`
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    varying vec3 vNormal;
    uniform vec3 glowColor;
    uniform float coefficient;
    uniform float power;

    void main() {
      float rim = max(0.0, coefficient - dot(vNormal, vec3(0.0, 0.0, 1.0)));
      float intensity = pow(rim, power);
      gl_FragColor = vec4(glowColor, intensity * 0.75);
    }
  `};function iA(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d");e.fillStyle="#060b18",e.fillRect(0,0,t.width,t.height),e.strokeStyle="rgba(0, 240, 255, 0.08)",e.lineWidth=1;const n=64;for(let o=0;o<=t.width;o+=n)e.beginPath(),e.moveTo(o,0),e.lineTo(o,t.height),e.stroke();for(let o=0;o<=t.height;o+=n)e.beginPath(),e.moveTo(0,o),e.lineTo(t.width,o),e.stroke();e.strokeStyle="rgba(0, 240, 255, 0.2)",e.lineWidth=2,e.beginPath(),e.moveTo(0,t.height/2),e.lineTo(t.width,t.height/2),e.stroke();function i(o,a){const l=(a+180)/360*t.width,c=(90-o)/180*t.height;return[l,c]}e.fillStyle="rgba(18, 38, 68, 0.85)",e.strokeStyle="rgba(0, 240, 255, 0.4)",e.lineWidth=1.5;const r=[[[70,-165],[72,-130],[60,-80],[50,-60],[30,-80],[25,-97],[18,-105],[32,-117],[48,-125],[60,-145],[70,-165]],[[12,-75],[5,-52],[-10,-35],[-25,-45],[-55,-67],[-52,-75],[-15,-75],[0,-80],[12,-75]],[[71,28],[60,30],[55,12],[45,-1],[36,-5],[36,28],[42,30],[45,15],[55,20],[65,25],[71,28]],[[37,10],[32,32],[12,45],[4,50],[-34,20],[-34,18],[5,2],[15,-17],[35,-5],[37,10]],[[75,100],[70,170],[60,160],[40,130],[22,120],[10,105],[8,77],[25,62],[38,55],[55,60],[70,70],[75,100]],[[-12,130],[-15,145],[-28,153],[-38,145],[-35,115],[-20,115],[-12,130]]];for(const o of r){e.beginPath();for(let a=0;a<o.length;a++){const[l,c]=i(o[a][0],o[a][1]);a===0?e.moveTo(l,c):e.lineTo(l,c)}e.closePath(),e.fill(),e.stroke()}e.fillStyle="rgba(0, 255, 157, 0.45)";for(let o=0;o<600;o++){const a=Math.random()*120-50,l=Math.random()*360-180,[c,d]=i(a,l);e.fillRect(c,d,2,2)}const s=new IT(t);return s.wrapS=Hl,s.wrapT=Ji,s}function bu(t,e,n){const i=(90-t)*(Math.PI/180),r=(e+180)*(Math.PI/180),s=-(n*Math.sin(i)*Math.cos(r)),o=n*Math.sin(i)*Math.sin(r),a=n*Math.cos(i);return new D(s,a,o)}const po=100,Fm=48,rA=()=>{const t=he.useRef(null),{visualLayers:e,toggleLayer:n,selectedNode:i,setSelectedNode:r,setSelectedSubsystem:s,metrics:o,year:a,scenario:l,activeEvents:c}=ri(),d=he.useRef(o);d.current=o;const h=he.useRef(a);h.current=a;const f=he.useRef(c);f.current=c;const p=he.useRef(l);p.current=l;const x=he.useRef(null),_=he.useRef(null),m=he.useRef(null),u=he.useRef(null),v=he.useRef(null),g=he.useRef(null),y=he.useRef(null),C=he.useRef(null),A=he.useRef(null),b=he.useRef(null),L=he.useRef(!1),E=he.useRef({x:0,y:0}),S=he.useRef(260),R=he.useRef({x:.2,y:.4}),B=he.useRef({x:.2,y:.4});return he.useEffect(()=>{if(!t.current)return;const k=t.current.clientWidth,j=t.current.clientHeight,X=new PT;x.current=X;const z=new Fn(45,k/j,1,3e3);z.position.set(0,50,S.current),_.current=z;const $=new RT({antialias:!0,alpha:!0,powerPreference:"high-performance"});$.setSize(k,j),$.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),$.toneMapping=ev,$.toneMappingExposure=1.2,m.current=$,t.current.appendChild($.domElement);const I=new en,q=2500,Z=new Float32Array(q*3);for(let ce=0;ce<q*3;ce+=3){const We=800+Math.random()*800,Ye=Math.random()*Math.PI*2,Je=Math.acos(Math.random()*2-1);Z[ce]=We*Math.sin(Je)*Math.cos(Ye),Z[ce+1]=We*Math.sin(Je)*Math.sin(Ye),Z[ce+2]=We*Math.cos(Je)}I.setAttribute("position",new bn(Z,3));const oe=new ef({color:6583435,size:1.6,transparent:!0,opacity:.75,sizeAttenuation:!0}),Se=new Am(I,oe);X.add(Se);const Re=new Zn;X.add(Re),u.current=Re;const G=iA(),Y=new Io(po,64,64),ae=new Rm({map:G,roughness:.65,metalness:.35,emissive:new Ke(134424),emissiveIntensity:.6}),ue=new jt(Y,ae);Re.add(ue);const we=new Io(po*1.14,48,48),Pe=new Ii({vertexShader:Om.vertexShader,fragmentShader:Om.fragmentShader,uniforms:{glowColor:{value:new Ke(61695)},coefficient:{value:.62},power:{value:3.5}},blending:Ro,side:ln,transparent:!0}),ze=new jt(we,Pe);Re.add(ze),b.current=ze;const nt=new ZT(663094,1.8);X.add(nt);const N=new Nm(14480639,2.5);N.position.set(250,150,200),X.add(N);const lt=new Nm(61695,1.2);lt.position.set(-200,-100,-150),X.add(lt);const Ge=new Zn;Re.add(Ge),A.current=Ge,eA.forEach(ce=>{const We=bu(ce.lat,ce.lon,po),Ye=We.clone().normalize(),Je=new Zn;Je.position.copy(We),Je.quaternion.setFromUnitVectors(new D(0,1,0),Ye),Je.userData={nodeData:ce};const ct=new fh(1.2,2.2,24);let Xe=61695;ce.type==="energy_fusion"?Xe=16756736:ce.type==="datacenter"&&(Xe=65437);const At=new Cr({color:Xe,side:ui,transparent:!0,opacity:.8}),nn=new jt(ct,At);nn.rotation.x=Math.PI/2,Je.add(nn);const ht=6+ce.metrics.loadPct/100*14,_n=new dh(.3,.9,ht,12),Ht=new Cr({color:Xe,transparent:!0,opacity:.65}),rn=new jt(_n,Ht);rn.position.y=ht/2,Je.add(rn);const w=new Io(.8,12,12),O=new Cr({color:16777215}),H=new jt(w,O);H.position.y=ht,Je.add(H),Ge.add(Je)});const qe=new Zn;Re.add(qe),y.current=qe;const Me=[];tA.forEach(ce=>{const We=[];ce.points.forEach(([At,nn])=>{We.push(bu(At,nn,po+.6))});const Ye=new Nv(We);Me.push(Ye);const Je=new hh(Ye,64,.4,8,!1),ct=new Cr({color:ce.status==="DAMAGED"?16724838:61695,transparent:!0,opacity:.75}),Xe=new jt(Je,ct);Xe.userData={cableData:ce},qe.add(Xe)});const ut=200,Le=new en,ke=new Float32Array(ut*3),P=new Float32Array(ut),M=new Uint8Array(ut);for(let ce=0;ce<ut;ce++)P[ce]=Math.random(),M[ce]=ce%Me.length;Le.setAttribute("position",new bn(ke,3));const W=new ef({color:65437,size:3.2,transparent:!0,opacity:.9,blending:Ro}),Q=new Am(Le,W);Re.add(Q),C.current=Q;const te=new Zn;Re.add(te),v.current=te;const ee=nA(72),Te=new Zn;ee.forEach((ce,We)=>{const Ye=po+18+We%4*3,Je=new Zn,ct=new Vr(1.2,.6,.8),Xe=new Rm({color:14870768,metalness:.9,roughness:.2}),At=new jt(ct,Xe);Je.add(At);const nn=new Vr(3.6,.08,1),ht=new Cr({color:165063}),_n=new jt(nn,ht);Je.add(_n),Je.userData={altitude:Ye,speed:.003+We%5*6e-4,orbitAngle:We/ee.length*Math.PI*2,inclination:ce.inclinationDeg*Math.PI/180,planeOffset:ce.plane*(Math.PI/4),index:We},Te.add(Je)}),te.add(Te);const fe=new Float32Array(Fm*2*3),me=new en;me.setAttribute("position",new bn(fe,3));const Fe=new Pv({color:61695,transparent:!0,opacity:.45,blending:Ro}),ie=new NT(me,Fe);Re.add(ie),g.current=ie;const ge=()=>{if(!t.current||!$||!z)return;const ce=t.current.clientWidth,We=t.current.clientHeight;z.aspect=ce/We,z.updateProjectionMatrix(),$.setSize(ce,We)};window.addEventListener("resize",ge);const Ne=$.domElement,Ie=ce=>{L.current=!0,E.current={x:ce.clientX,y:ce.clientY}},ve=ce=>{if(!L.current)return;const We=ce.clientX-E.current.x,Ye=ce.clientY-E.current.y;R.current.y+=We*.006,R.current.x=Math.max(-Math.PI/2.2,Math.min(Math.PI/2.2,R.current.x+Ye*.006)),E.current={x:ce.clientX,y:ce.clientY}},Ue=()=>{L.current=!1},Be=ce=>{ce.preventDefault(),S.current=Math.max(140,Math.min(500,S.current+ce.deltaY*.25))},dt=new QT,U=new be,re=(ce,We)=>{const Ye=Ne.getBoundingClientRect();U.x=(ce-Ye.left)/Ye.width*2-1,U.y=-((We-Ye.top)/Ye.height)*2+1,dt.setFromCamera(U,z);const Je=dt.intersectObjects(Ge.children,!0);if(Je.length>0){let ct=Je[0].object;for(;ct&&!ct.userData?.nodeData&&ct.parent;)ct=ct.parent;if(ct&&ct.userData?.nodeData){const Xe=ct.userData.nodeData;r(Xe),Xe.type==="datacenter"?s("cloud"):Xe.type==="energy_fusion"?s("energy"):s("cities")}}},K=ce=>{re(ce.clientX,ce.clientY)};let J=0,le=0,Ce=0,je=!1;const _t=ce=>{ce.touches.length===1?(J=ce.touches[0].clientX,le=ce.touches[0].clientY,E.current={x:J,y:le},L.current=!0,je=!1):ce.touches.length===2&&(L.current=!1,Ce=Math.hypot(ce.touches[0].clientX-ce.touches[1].clientX,ce.touches[0].clientY-ce.touches[1].clientY))},Rt=ce=>{if(ce.touches.length===1&&L.current){const We=ce.touches[0].clientX-E.current.x,Ye=ce.touches[0].clientY-E.current.y;(Math.abs(We)>4||Math.abs(Ye)>4)&&(je=!0),R.current.y+=We*.007,R.current.x=Math.max(-Math.PI/2.2,Math.min(Math.PI/2.2,R.current.x+Ye*.007)),E.current={x:ce.touches[0].clientX,y:ce.touches[0].clientY}}else if(ce.touches.length===2){je=!0;const We=Math.hypot(ce.touches[0].clientX-ce.touches[1].clientX,ce.touches[0].clientY-ce.touches[1].clientY),Ye=Ce-We;S.current=Math.max(140,Math.min(500,S.current+Ye*.5)),Ce=We}},Ze=ce=>{L.current=!1,!je&&ce.changedTouches.length>0&&re(ce.changedTouches[0].clientX,ce.changedTouches[0].clientY)};Ne.addEventListener("mousedown",Ie),window.addEventListener("mousemove",ve),window.addEventListener("mouseup",Ue),Ne.addEventListener("wheel",Be,{passive:!1}),Ne.addEventListener("click",K),Ne.addEventListener("touchstart",_t,{passive:!0}),Ne.addEventListener("touchmove",Rt,{passive:!0}),Ne.addEventListener("touchend",Ze,{passive:!0});let xn;const Ln=new JT,Zs=()=>{const ce=Ln.getElapsedTime(),We=d.current;if(B.current.x+=(R.current.x-B.current.x)*.08,B.current.y+=(R.current.y-B.current.y)*.08,Re&&(L.current||(R.current.y+=8e-4),Re.rotation.x=B.current.x,Re.rotation.y=B.current.y),z&&(z.position.z+=(S.current-z.position.z)*.1,z.lookAt(0,0,0)),Te){const Ye=[],Je=We.orbitalHealthPercent<80,ct=Math.max(20,Math.min(72,Math.round(We.activeSatellites/26e4*52+20)));Te.children.forEach((ht,_n)=>{if(ht.visible=_n<ct,!ht.visible)return;const Ht=ht.userData;Ht.orbitAngle+=Ht.speed*(Je?1.4:1);const rn=Ht.altitude,w=Ht.inclination,O=Ht.planeOffset,H=rn*Math.cos(Ht.orbitAngle),V=rn*Math.sin(Ht.orbitAngle)*Math.sin(w),F=rn*Math.sin(Ht.orbitAngle)*Math.cos(w),se=H*Math.cos(O)-F*Math.sin(O),pe=H*Math.sin(O)+F*Math.cos(O);ht.position.set(se,V,pe),Je&&_n%3===0?(ht.rotation.x+=.04,ht.rotation.z+=.05):ht.lookAt(0,0,0),Ye.length<32&&Ye.push(new D(se,V,pe))});const Xe=me.attributes.position.array;let At=0;const nn=Je?65:95;for(let ht=0;ht<Ye.length-1&&At<Fm;ht+=2){const _n=Ye[ht],Ht=Ye[ht+1];if(_n.distanceTo(Ht)<nn){const rn=At*6;Xe[rn]=_n.x,Xe[rn+1]=_n.y,Xe[rn+2]=_n.z,Xe[rn+3]=Ht.x,Xe[rn+4]=Ht.y,Xe[rn+5]=Ht.z,At++}}me.setDrawRange(0,At*2),me.attributes.position.needsUpdate=!0,Fe.color.set(Je?16724838:61695),Fe.opacity=Math.max(.15,Math.min(.85,We.opticalLaserBandwidthTbps/1500*.45))}if(C.current&&Me.length>0){const Ye=C.current.geometry.attributes.position.array,Je=.002+Math.min(.008,We.globalBandwidthPbps/100*.004);for(let Xe=0;Xe<ut;Xe++){P[Xe]=(P[Xe]+Je)%1;const At=M[Xe],ht=Me[At].getPointAt(P[Xe]);Ye[Xe*3]=ht.x,Ye[Xe*3+1]=ht.y,Ye[Xe*3+2]=ht.z}C.current.geometry.attributes.position.needsUpdate=!0;const ct=C.current.material;We.subseaCableIntegrityPercent<75?ct.color.set(16724838):We.networkLatencyMs>20?ct.color.set(16498468):ct.color.set(65437)}if(A.current){const Ye=We.gridStressPercent>75;A.current.children.forEach((Je,ct)=>{const Xe=Je.children[2];if(Xe){const At=1+Math.sin(ce*4+ct)*.28;Xe.scale.set(At,At,At);const nn=Xe.material;Ye?nn.color.set(Math.sin(ce*8)>0?16724838:16498468):nn.color.set(16777215)}})}$.render(X,z),xn=requestAnimationFrame(Zs)};return xn=requestAnimationFrame(Zs),()=>{cancelAnimationFrame(xn),window.removeEventListener("resize",ge),Ne.removeEventListener("mousedown",Ie),window.removeEventListener("mousemove",ve),window.removeEventListener("mouseup",Ue),Ne.removeEventListener("wheel",Be),Ne.removeEventListener("click",K),Ne.removeEventListener("touchstart",_t),Ne.removeEventListener("touchmove",Rt),Ne.removeEventListener("touchend",Ze),I.dispose(),oe.dispose(),Y.dispose(),ae.dispose(),G.dispose(),we.dispose(),Pe.dispose(),me.dispose(),Fe.dispose(),Le.dispose(),W.dispose(),$.domElement.parentElement&&$.domElement.parentElement.removeChild($.domElement),$.dispose()}},[]),he.useEffect(()=>{v.current&&(v.current.visible=e.satellites),g.current&&(g.current.visible=e.satellites),y.current&&(y.current.visible=e.subseaCables),A.current&&(A.current.visible=e.megacities||e.dataCenters),C.current&&(C.current.visible=e.dataParticles),b.current&&(b.current.visible=e.atmosphereGlow)},[e]),he.useEffect(()=>{if(!b.current)return;const k=b.current.material;o.healthStatus==="NOMINAL"?k.uniforms.glowColor.value.set(61695):o.healthStatus==="ELEVATED_STRESS"?k.uniforms.glowColor.value.set(16498468):k.uniforms.glowColor.value.set(16724838)},[o.healthStatus]),he.useEffect(()=>{if(!i||!_.current)return;const k=bu(i.lat,i.lon,1),j=-Math.atan2(k.x,k.z),X=Math.asin(k.y);R.current.y=j,R.current.x=X,S.current=190},[i]),T.jsxs("div",{className:"relative w-full h-full overflow-hidden select-none touch-none",children:[T.jsx("div",{ref:t,className:"w-full h-full cursor-grab active:cursor-grabbing"}),T.jsxs("div",{className:"absolute top-20 right-6 flex flex-col gap-2 z-20 pointer-events-auto",children:[T.jsx("button",{onClick:()=>{S.current=Math.max(140,S.current-40)},className:"w-9 h-9 rounded bg-[#0b1322]/80 border border-cyber-border hover:border-cyber-cyan text-cyber-cyan flex items-center justify-center font-mono font-bold text-lg backdrop-blur shadow-lg transition-all hover:scale-105",title:"Zoom In",children:"+"}),T.jsx("button",{onClick:()=>{S.current=Math.min(480,S.current+40)},className:"w-9 h-9 rounded bg-[#0b1322]/80 border border-cyber-border hover:border-cyber-cyan text-cyber-cyan flex items-center justify-center font-mono font-bold text-lg backdrop-blur shadow-lg transition-all hover:scale-105",title:"Zoom Out",children:"−"}),T.jsx("button",{onClick:()=>{R.current={x:.2,y:.4},S.current=260},className:"w-9 h-9 rounded bg-[#0b1322]/80 border border-cyber-border hover:border-cyber-cyan text-xs font-mono text-slate-300 flex items-center justify-center backdrop-blur shadow-lg transition-all hover:scale-105",title:"Reset View",children:"RES"})]}),T.jsxs("div",{className:"absolute bottom-28 left-6 flex flex-wrap gap-2 z-20 pointer-events-auto max-w-xl",children:[T.jsx("span",{className:"text-[10px] font-mono tracking-widest text-slate-400 uppercase self-center mr-1",children:"LAYERS:"}),Object.keys(e).map(k=>T.jsx("button",{onClick:()=>n(k),className:`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded border transition-all ${e[k]?"bg-cyan-950/60 border-cyber-cyan text-cyber-cyan shadow-[0_0_10px_rgba(0,240,255,0.2)]":"bg-slate-900/40 border-slate-700/50 text-slate-400 hover:border-slate-500"}`,children:k.replace(/([A-Z])/g," $1")},k))]})]})};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Uv=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=he.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>he.createElement("svg",{ref:l,...oA,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Uv("lucide",r),...a},[...o.map(([c,d])=>he.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(t,e)=>{const n=he.forwardRef(({className:i,...r},s)=>he.createElement(aA,{ref:s,iconNode:e,className:Uv(`lucide-${sA(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=tt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=tt("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=tt("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=tt("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=tt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=tt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=tt("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=tt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=tt("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=tt("CornerDownLeft",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=tt("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=tt("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=tt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=tt("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=tt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=tt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=tt("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=tt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=tt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=tt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=tt("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=tt("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=tt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=tt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=tt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=tt("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=tt("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=tt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=tt("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=tt("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=tt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=tt("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),bA=()=>{const{metrics:t,audioEnabled:e,toggleAudio:n,toggleConsole:i,toggleCharts:r,isConsoleOpen:s,isChartsOpen:o,scenario:a,activeEvents:l}=ri(),c=()=>{switch(t.healthStatus){case"NOMINAL":return"border-emerald-500/60 bg-emerald-950/40 text-emerald-400";case"ELEVATED_STRESS":return"border-amber-500/60 bg-amber-950/40 text-amber-400";case"CRITICAL_RISK":return"border-red-500/60 bg-red-950/40 text-red-400 animate-pulse";case"CASCADE_FAILURE":return"border-rose-600 bg-rose-950 text-rose-300 animate-bounce"}};return T.jsxs("header",{className:"relative z-30 flex items-center justify-between px-6 py-3 border-b border-cyber-border/40 bg-[#04070d]/85 backdrop-blur-md",children:[T.jsxs("div",{className:"flex items-center gap-4",children:[T.jsxs("div",{className:"flex items-center gap-2.5",children:[T.jsxs("div",{className:"relative w-8 h-8 rounded-sm border border-cyber-cyan bg-cyan-950/50 flex items-center justify-center overflow-hidden",children:[T.jsx("div",{className:"absolute inset-0 bg-cyber-cyan/10 animate-ping-slow"}),T.jsx(Ov,{className:"w-5 h-5 text-cyber-cyan"})]}),T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsxs("h1",{className:"text-sm font-bold font-mono tracking-widest text-slate-100 uppercase",children:["INTERNET ",T.jsx("span",{className:"text-cyber-cyan font-extrabold",children:"2035"})]}),T.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyber-cyan font-mono font-medium",children:"V4.2.0-PROD"})]}),T.jsx("p",{className:"text-[10px] font-mono text-slate-400 tracking-wider",children:"GLOBAL INFRASTRUCTURE COMMAND & SIMULATION"})]})]}),T.jsxs("div",{className:"hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-700/60",children:[T.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:"SCENARIO:"}),T.jsx("span",{className:"text-xs font-mono font-semibold",style:{color:a.color},children:a.name})]})]}),T.jsxs("div",{className:"hidden md:flex items-center gap-6 font-mono text-xs",children:[T.jsxs("div",{className:`flex items-center gap-2 px-3 py-1.5 rounded border transition-all ${c()}`,children:[t.healthStatus==="NOMINAL"?T.jsx(SA,{className:"w-4 h-4"}):T.jsx(rf,{className:"w-4 h-4"}),T.jsxs("div",{className:"flex flex-col leading-none",children:[T.jsx("span",{className:"text-[9px] uppercase tracking-wider opacity-75",children:"SYSTEM HEALTH"}),T.jsxs("span",{className:"font-bold text-sm",children:[t.globalSystemHealth.toFixed(1),"% ",T.jsxs("span",{className:"text-[10px] font-normal",children:["[",t.healthStatus,"]"]})]})]})]}),T.jsxs("div",{className:"flex items-center gap-2 text-slate-300",children:[T.jsx(ph,{className:"w-4 h-4 text-purple-400"}),T.jsxs("div",{className:"flex flex-col leading-none",children:[T.jsx("span",{className:"text-[9px] text-slate-400 uppercase tracking-wider",children:"AI COMPUTE"}),T.jsxs("span",{className:"font-bold text-slate-100",children:[t.aiComputeExaflops.toFixed(1)," ",T.jsx("span",{className:"text-[10px] text-slate-400 font-normal",children:"EFLOPs"})]})]})]}),T.jsxs("div",{className:"flex items-center gap-2 text-slate-300",children:[T.jsx(xc,{className:"w-4 h-4 text-amber-400"}),T.jsxs("div",{className:"flex flex-col leading-none",children:[T.jsx("span",{className:"text-[9px] text-slate-400 uppercase tracking-wider",children:"RENEWABLE / FUSION"}),T.jsxs("span",{className:"font-bold text-slate-100",children:[t.renewableEnergyPercent.toFixed(1),"%"]})]})]}),T.jsxs("div",{className:"flex items-center gap-2 text-slate-300",children:[T.jsx(mh,{className:"w-4 h-4 text-cyber-cyan"}),T.jsxs("div",{className:"flex flex-col leading-none",children:[T.jsx("span",{className:"text-[9px] text-slate-400 uppercase tracking-wider",children:"LEO CONSTELLATION"}),T.jsx("span",{className:"font-bold text-slate-100",children:t.activeSatellites.toLocaleString()})]})]}),T.jsx("div",{className:"flex items-center gap-2 text-slate-300",children:T.jsxs("div",{className:"flex flex-col leading-none",children:[T.jsx("span",{className:"text-[9px] text-slate-400 uppercase tracking-wider",children:"GLOBAL LATENCY"}),T.jsxs("span",{className:"font-bold text-cyan-300",children:[t.networkLatencyMs.toFixed(1)," ",T.jsx("span",{className:"text-[10px] text-slate-400 font-normal",children:"ms"})]})]})})]}),T.jsxs("div",{className:"flex items-center gap-2",children:[l.length>0&&T.jsxs("div",{className:"flex items-center gap-1.5 px-2.5 py-1 rounded bg-rose-950/80 border border-rose-500/60 text-rose-400 text-xs font-mono animate-pulse",children:[T.jsx(rf,{className:"w-3.5 h-3.5"}),T.jsxs("span",{children:[l.length," INCIDENT",l.length>1?"S":""]})]}),T.jsxs("button",{onClick:r,className:`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border transition-all ${o?"bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan shadow-[0_0_12px_rgba(0,240,255,0.3)]":"bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-slate-500 hover:text-white"}`,title:"Toggle Simulation Charts",children:[T.jsx(lA,{className:"w-4 h-4"}),T.jsx("span",{className:"hidden sm:inline",children:"ANALYTICS"})]}),T.jsxs("button",{onClick:i,className:`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border transition-all ${s?"bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan shadow-[0_0_12px_rgba(0,240,255,0.3)]":"bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-slate-500 hover:text-white"}`,title:"Toggle Cyber Command Terminal",children:[T.jsx(Hv,{className:"w-4 h-4"}),T.jsx("span",{className:"hidden sm:inline",children:"CONSOLE"})]}),T.jsx("button",{onClick:n,className:"p-1.5 rounded border border-slate-700/60 bg-slate-900/60 text-slate-300 hover:border-slate-500 hover:text-white transition-all",title:e?"Mute Audio Telemetry":"Unmute Audio Telemetry",children:e?T.jsx(TA,{className:"w-4 h-4 text-cyber-cyan"}):T.jsx(AA,{className:"w-4 h-4 text-slate-500"})})]})]})},CA=({type:t,metrics:e,isSelected:n,onSelect:i})=>{const s=(()=>{switch(t){case"ai":return{title:"AI & COMPUTE",icon:ph,color:"text-purple-400",borderColor:"border-purple-500/40",primary:`${e.aiComputeExaflops.toFixed(1)} EFLOPs`,primaryLabel:"GLOBAL INFERENCE",secondary:`${e.aiAdoptionRate.toFixed(1)}% ADOPTION`,health:100-e.coolingStressPercent*.4,status:e.coolingStressPercent>70?"THROTTLED":"NOMINAL"};case"energy":return{title:"ENERGY & FUSION",icon:xc,color:"text-amber-400",borderColor:"border-amber-500/40",primary:`${(e.energyProductionTWh/1e3).toFixed(1)}k TWh`,primaryLabel:"ANNUAL GENERATION",secondary:`${e.renewableEnergyPercent.toFixed(1)}% CLEAN`,health:100-e.gridStressPercent,status:e.gridStressPercent>75?"OVERLOAD":"NOMINAL"};case"cloud":return{title:"DATA CENTERS",icon:Gv,color:"text-emerald-400",borderColor:"border-emerald-500/40",primary:`${e.dataCenterCapacityGW.toFixed(0)} GW`,primaryLabel:"CONNECTED CAPACITY",secondary:`PUE ${e.pueAverage.toFixed(2)}`,health:100-e.coolingStressPercent,status:e.coolingStressPercent>65?"HEAT STRESS":"OPTIMAL"};case"satellites":return{title:"ORBITAL MESH",icon:mh,color:"text-cyan-400",borderColor:"border-cyan-500/40",primary:`${(e.activeSatellites/1e3).toFixed(1)}k SATS`,primaryLabel:"LEO / VLEO FLEET",secondary:`${e.satelliteCoveragePercent.toFixed(1)}% COVERAGE`,health:e.orbitalHealthPercent,status:e.orbitalHealthPercent<80?"DEGRADED":"ACTIVE"};case"network":return{title:"QUANTUM NETWORK",icon:Bv,color:"text-blue-400",borderColor:"border-blue-500/40",primary:`${e.networkLatencyMs.toFixed(1)} ms`,primaryLabel:"AVERAGE LATENCY",secondary:`${e.globalBandwidthPbps.toFixed(1)} Pbps`,health:e.subseaCableIntegrityPercent,status:e.networkLatencyMs>20?"HIGH RTT":"NOMINAL"};case"robotics":return{title:"ROBOTICS & AGENTS",icon:Fv,color:"text-rose-400",borderColor:"border-rose-500/40",primary:`${e.robotPopulationMillions.toFixed(0)}M UNITS`,primaryLabel:"HUMANOID FLEET",secondary:`${e.automationEfficiencyPercent.toFixed(0)}% EFFICIENCY`,health:e.automationEfficiencyPercent,status:"ACTIVE"};case"cities":return{title:"MEGACITIES & EDGE",icon:kv,color:"text-teal-400",borderColor:"border-teal-500/40",primary:`${e.urbanPopulationBillions.toFixed(2)}B POP`,primaryLabel:"CONNECTED CITIZENS",secondary:`${e.smartCitySaturationPercent.toFixed(0)}% AUTONOMIC`,health:e.smartCitySaturationPercent,status:"OPTIMAL"}}})(),o=s.icon;return T.jsxs("div",{onClick:()=>i(t),className:`relative group cursor-pointer p-3 rounded-lg border transition-all duration-200 backdrop-blur-md ${n?`bg-[#0d1627]/95 ${s.borderColor} shadow-[0_0_20px_rgba(0,240,255,0.25)] ring-1 ring-cyber-cyan/50`:"bg-[#080d1a]/80 border-slate-800/80 hover:border-slate-600 hover:bg-[#0b1324]/90"}`,children:[T.jsxs("div",{className:"flex items-start justify-between mb-2",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx("div",{className:`p-1.5 rounded-md bg-slate-900 border border-slate-800 ${s.color}`,children:T.jsx(o,{className:"w-4 h-4"})}),T.jsx("span",{className:"text-[11px] font-mono font-bold tracking-wider text-slate-200 uppercase",children:s.title})]}),T.jsxs("div",{className:"flex items-center gap-1",children:[T.jsx("span",{className:`text-[9px] font-mono px-1.5 py-0.5 rounded border border-slate-700/60 ${s.status==="NOMINAL"||s.status==="OPTIMAL"||s.status==="ACTIVE"?"text-emerald-400 bg-emerald-950/40":"text-amber-400 bg-amber-950/40"}`,children:s.status}),T.jsx(zv,{className:"w-3.5 h-3.5 text-slate-500 group-hover:text-cyber-cyan transition-colors"})]})]}),T.jsxs("div",{className:"flex items-baseline justify-between mt-1",children:[T.jsxs("div",{children:[T.jsx("div",{className:"text-base font-bold font-mono text-white tracking-tight",children:s.primary}),T.jsx("div",{className:"text-[9px] font-mono text-slate-400 uppercase tracking-wider",children:s.primaryLabel})]}),T.jsx("div",{className:"text-right",children:T.jsx("div",{className:"text-xs font-mono font-semibold text-slate-300",children:s.secondary})})]}),T.jsx("div",{className:"w-full h-1 bg-slate-800 rounded-full mt-2.5 overflow-hidden",children:T.jsx("div",{className:`h-full rounded-full transition-all duration-300 ${s.health>80?"bg-emerald-400":s.health>50?"bg-amber-400":"bg-red-400"}`,style:{width:`${Math.max(5,Math.min(100,s.health))}%`}})})]})},RA=()=>{const{scenario:t,setScenarioById:e}=ri();return T.jsxs("div",{className:"flex flex-col gap-2 p-3.5 rounded-lg border border-slate-800/90 bg-[#080d1a]/85 backdrop-blur-md",children:[T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx(gA,{className:"w-4 h-4 text-cyber-cyan"}),T.jsx("span",{className:"text-[11px] font-mono font-bold tracking-widest text-slate-300 uppercase",children:"SIMULATION SCENARIOS"})]}),T.jsx("span",{className:"text-[10px] font-mono text-slate-500",children:"7 BRANCHES AVAILABLE"})]}),T.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5 mt-1",children:Zo.map(n=>{const i=t.id===n.id;return T.jsxs("button",{onClick:()=>e(n.id),className:`text-left p-2.5 rounded border transition-all duration-150 relative overflow-hidden ${i?"bg-slate-900/90 border-cyber-cyan shadow-[0_0_12px_rgba(0,240,255,0.2)]":"bg-slate-950/40 border-slate-800/80 hover:border-slate-600 hover:bg-slate-900/40"}`,children:[i&&T.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1",style:{backgroundColor:n.color}}),T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsxs("div",{className:"flex items-center gap-1.5",children:[T.jsx("span",{className:"text-xs font-mono font-bold",style:{color:i?n.color:"#e2e8f0"},children:n.name}),i&&T.jsx(EA,{className:"w-3 h-3 text-cyber-cyan animate-pulse"})]}),T.jsx("span",{className:"text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400",children:n.badge})]}),T.jsx("p",{className:"text-[10px] text-slate-400 mt-1 line-clamp-2 font-sans",children:n.description})]},n.id)})})]})},PA=()=>{const{activeEvents:t,triggerEvent:e,dismissEvent:n}=ri();return T.jsxs("div",{className:"flex flex-col gap-3 p-3.5 rounded-lg border border-slate-800/90 bg-[#080d1a]/85 backdrop-blur-md",children:[T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx(pA,{className:"w-4 h-4 text-cyber-crimson"}),T.jsx("span",{className:"text-[11px] font-mono font-bold tracking-widest text-slate-200 uppercase",children:"DYNAMIC EVENT SIMULATOR"})]}),T.jsxs("button",{onClick:()=>e(),className:"flex items-center gap-1 px-2 py-1 rounded bg-rose-950/60 border border-rose-500/50 hover:border-rose-400 text-rose-300 text-[10px] font-mono transition-colors",children:[T.jsx(fA,{className:"w-3 h-3"}),T.jsx("span",{children:"INJECT RANDOM"})]})]}),T.jsx("div",{className:"flex flex-wrap gap-1",children:ar.slice(0,4).map((i,r)=>T.jsxs("button",{onClick:()=>e(r),className:"px-2 py-1 text-[9px] font-mono rounded bg-slate-900 border border-slate-700/60 text-slate-300 hover:border-cyber-cyan hover:text-cyber-cyan transition-all",title:i.title,children:["+ ",i.title.split(" ")[0]," ",i.title.split(" ")[1]||""]},r))}),T.jsx("div",{className:"flex flex-col gap-2 max-h-56 overflow-y-auto pr-1",children:t.length===0?T.jsxs("div",{className:"p-3 text-center rounded border border-dashed border-slate-800 text-[11px] font-mono text-slate-500",children:["[ ALL GLOBAL SUBSYSTEMS REPORTING NOMINAL ]",T.jsx("div",{className:"text-[9px] text-slate-600 mt-1",children:"No active systemic anomalies. Inject an event to test infrastructure resilience."})]}):t.map(i=>T.jsxs("div",{className:`p-2.5 rounded border transition-all relative ${i.severity==="CRITICAL"?"bg-rose-950/40 border-rose-500/60 text-rose-200":i.severity==="WARNING"?"bg-amber-950/40 border-amber-500/60 text-amber-200":"bg-cyan-950/40 border-cyan-500/60 text-cyan-200"}`,children:[T.jsxs("div",{className:"flex items-start justify-between gap-2",children:[T.jsxs("div",{className:"flex items-center gap-1.5 font-mono text-xs font-bold",children:[T.jsx(rf,{className:"w-3.5 h-3.5"}),T.jsx("span",{children:i.title})]}),T.jsxs("span",{className:"text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/40 border border-current",children:[Math.ceil(i.durationSeconds),"s REMAINING"]})]}),T.jsx("p",{className:"text-[10px] mt-1 font-sans text-slate-300 leading-snug",children:i.description}),i.mitigationProtocol&&T.jsxs("div",{className:"mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between",children:[T.jsxs("span",{className:"text-[9px] font-mono text-slate-400 italic",children:["AUTO-PROTOCOL: ",i.mitigationProtocol.slice(0,48),"..."]}),T.jsxs("button",{onClick:()=>n(i.id),className:"flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-500 text-emerald-400 text-[9px] font-mono hover:bg-emerald-900 transition-colors",children:[T.jsx(uA,{className:"w-3 h-3"}),T.jsx("span",{children:"MITIGATE"})]})]})]},i.id))})]})},LA=["ai","energy","cloud","satellites","network","robotics","cities"],NA=()=>{const{metrics:t,selectedSubsystem:e,setSelectedSubsystem:n}=ri(),[i,r]=he.useState(!1),[s,o]=he.useState("subsystems");return T.jsxs("div",{className:`fixed top-16 bottom-28 left-4 z-20 flex transition-all duration-300 pointer-events-none ${i?"-translate-x-[calc(100%-2rem)]":"translate-x-0"}`,children:[T.jsxs("div",{className:"w-80 md:w-96 h-full flex flex-col gap-2 pointer-events-auto bg-[#040813]/85 backdrop-blur-xl border border-cyber-border/50 rounded-xl p-3 shadow-2xl overflow-hidden",children:[T.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-800",children:[T.jsxs("div",{className:"flex items-center gap-1",children:[T.jsx("button",{onClick:()=>o("subsystems"),className:`px-2.5 py-1 rounded text-[11px] font-mono font-bold transition-all ${s==="subsystems"?"bg-cyan-950/70 border border-cyber-cyan text-cyber-cyan shadow-[0_0_10px_rgba(0,240,255,0.2)]":"text-slate-400 hover:text-white"}`,children:"MATRIX"}),T.jsx("button",{onClick:()=>o("scenarios"),className:`px-2.5 py-1 rounded text-[11px] font-mono font-bold transition-all ${s==="scenarios"?"bg-cyan-950/70 border border-cyber-cyan text-cyber-cyan shadow-[0_0_10px_rgba(0,240,255,0.2)]":"text-slate-400 hover:text-white"}`,children:"SCENARIOS"}),T.jsx("button",{onClick:()=>o("events"),className:`px-2.5 py-1 rounded text-[11px] font-mono font-bold transition-all ${s==="events"?"bg-cyan-950/70 border border-cyber-cyan text-cyber-cyan shadow-[0_0_10px_rgba(0,240,255,0.2)]":"text-slate-400 hover:text-white"}`,children:"INCIDENTS"})]}),T.jsx("span",{className:"text-[9px] font-mono text-slate-500",children:"AUTO-SYNC 60Hz"})]}),T.jsxs("div",{className:"flex-1 overflow-y-auto pr-1 space-y-2",children:[s==="subsystems"&&T.jsx("div",{className:"flex flex-col gap-2",children:LA.map(a=>T.jsx(CA,{type:a,metrics:t,isSelected:e===a,onSelect:n},a))}),s==="scenarios"&&T.jsx(RA,{}),s==="events"&&T.jsx(PA,{})]})]}),T.jsx("button",{onClick:()=>r(a=>!a),className:"self-center ml-1 w-6 h-12 rounded-r-md bg-[#0b1322] border-y border-r border-cyber-border/70 text-cyber-cyan flex items-center justify-center pointer-events-auto hover:bg-[#121e36] transition-colors shadow-lg",title:i?"Expand Dashboard":"Collapse Dashboard",children:i?T.jsx(zv,{className:"w-4 h-4"}):T.jsx(cA,{className:"w-4 h-4"})})]})},km=[2030,2035,2040,2050],IA=()=>{const{year:t,targetYear:e,isPlaying:n,playbackSpeed:i,setYear:r,jumpToMilestone:s,togglePlay:o,setPlaybackSpeed:a}=ri(),c=(d=>{const h=Math.floor(d),f=d-h,p=Math.min(4,Math.floor(f*4)+1),_=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][Math.min(11,Math.floor(f*12))];return{whole:h,quarter:`Q${p}`,month:_,exact:d.toFixed(1)}})(t);return T.jsxs("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-[95%] max-w-4xl px-6 py-3.5 rounded-lg border border-cyber-border/60 bg-[#060a14]/90 backdrop-blur-xl shadow-2xl flex flex-col gap-3",children:[T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsxs("button",{onClick:o,className:`flex items-center gap-2 px-3.5 py-1.5 rounded font-mono text-xs font-semibold tracking-wider transition-all ${n?"bg-amber-500/20 border border-amber-400 text-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.3)]":"bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan shadow-[0_0_12px_rgba(0,240,255,0.3)] hover:bg-cyber-cyan/30"}`,children:[n?T.jsx(xA,{className:"w-3.5 h-3.5"}):T.jsx(_A,{className:"w-3.5 h-3.5 fill-current"}),T.jsx("span",{children:n?"PAUSE":"SIMULATE"})]}),T.jsx("div",{className:"flex items-center rounded border border-slate-700/60 bg-slate-900/60 p-0.5",children:[1,2,5,10].map(d=>T.jsxs("button",{onClick:()=>a(d),className:`px-2 py-0.5 text-[10px] font-mono rounded transition-colors ${i===d?"bg-cyan-500/30 text-cyber-cyan font-bold":"text-slate-400 hover:text-slate-200"}`,children:[d,"x"]},d))}),T.jsx("button",{onClick:()=>s(2035),className:"p-1.5 text-slate-400 hover:text-cyber-cyan transition-colors",title:"Reset to 2035 baseline",children:T.jsx(yA,{className:"w-3.5 h-3.5"})})]}),T.jsxs("div",{className:"flex items-center gap-2.5 font-mono",children:[T.jsx("span",{className:"text-[10px] uppercase text-slate-400 tracking-widest",children:"TEMPORAL PHASE:"}),T.jsxs("div",{className:"flex items-baseline gap-1.5",children:[T.jsx("span",{className:"text-xl font-bold tracking-tight text-white",children:c.whole}),T.jsxs("span",{className:"text-xs text-cyber-cyan font-bold",children:[".",Math.floor(t%1*10)]}),T.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300",children:[c.quarter," // ",c.month]})]})]}),T.jsx("div",{className:"flex items-center gap-1.5",children:km.map(d=>T.jsx("button",{onClick:()=>s(d),className:`px-2.5 py-1 rounded text-xs font-mono transition-all ${e===d&&Math.abs(t-d)<.3?"bg-cyan-950 border border-cyber-cyan text-cyber-cyan font-bold shadow-[0_0_10px_rgba(0,240,255,0.3)]":"bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-600"}`,children:d},d))})]}),T.jsxs("div",{className:"relative w-full flex items-center",children:[T.jsx("div",{className:"absolute inset-x-0 -top-1.5 flex justify-between pointer-events-none px-1",children:km.map(d=>{const h=(d-2030)/20*100;return T.jsxs("div",{className:"absolute flex flex-col items-center -translate-x-1/2",style:{left:`${h}%`},children:[T.jsx("div",{className:`w-1 h-2 rounded-full ${Math.abs(t-d)<.4?"bg-cyber-cyan":"bg-slate-600"}`}),T.jsx("span",{className:"text-[9px] font-mono text-slate-400 mt-0.5",children:d})]},d)})}),T.jsx("input",{type:"range",min:2030,max:2050,step:.05,value:t,onChange:d=>r(parseFloat(d.target.value)),className:"w-full h-2 mt-4 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"})]})]})},DA=()=>{const{selectedSubsystem:t,setSelectedSubsystem:e,metrics:n,scenario:i,year:r}=ri();if(!t)return null;const o=(()=>{switch(t){case"ai":return{title:"AI & SYNTHETIC INTELLIGENCE ARCHITECTURE",icon:ph,badge:"COGNITIVE LAYER",overview:"Global distributed inference infrastructure orchestrating trillions of multi-modal synthetic agents, autonomous scientific discovery, and automated smart cities.",formula:"Compute Demand = (Agent Population × 4.2 TFLOPs) + (Frontier Synthetic Synthesis × Multiplier)",metricsList:[{label:"Global Compute Capacity",value:`${n.aiComputeExaflops.toFixed(2)} ExaFLOPs`,note:"10^18 operations/sec"},{label:"Workflow Adoption Rate",value:`${n.aiAdoptionRate.toFixed(1)}%`,note:"Global economic workflows"},{label:"Hardware Compute Efficiency",value:`${n.computeEfficiency.toFixed(1)} PFLOPs/MW`,note:"Energy-to-compute ratio"},{label:"Autonomous Agents Active",value:`${n.autonomousAgentCount.toFixed(1)} Billion`,note:"Self-directing digital entities"},{label:"Thermal Cooling Stress",value:`${n.coolingStressPercent.toFixed(1)}%`,note:"Cryogenic & liquid chillers load"}],risks:n.coolingStressPercent>70?"High thermal throttling risk in continental clusters. Subsea expansion recommended.":"Operational temperatures within cryogenic thresholds."};case"energy":return{title:"ENERGY & COMMERCIAL FUSION POWER MATRIX",icon:xc,badge:"POWER GENERATION",overview:"Global electrical generation pairing magnetic confinement fusion reactors, orbital solar concentrators, and ultra-deep geothermal wells with superconductor transmission grids.",formula:"Grid Stress = ((Consumption ÷ Generation) × 100) - (Battery Reserve Buffering × 15%)",metricsList:[{label:"Total Annual Generation",value:`${n.energyProductionTWh.toLocaleString()} TWh`,note:"Aggregate world supply"},{label:"Total Annual Consumption",value:`${n.energyConsumptionTWh.toLocaleString()} TWh`,note:"Civilian + Data + Robotics"},{label:"Clean / Renewable Share",value:`${n.renewableEnergyPercent.toFixed(1)}%`,note:"Solar, Wind, Fusion, Hydro"},{label:"Commercial Fusion Output",value:`${n.fusionOutputTWh.toLocaleString()} TWh`,note:"Net-positive tokamak plants"},{label:"Grid-Scale Battery Reserves",value:`${n.batteryStorageGWh.toLocaleString()} GWh`,note:"Solid-state & gravity storage"},{label:"Carbon Intensity of Grid",value:`${n.carbonIntensityGCO2.toFixed(1)} gCO2/kWh`,note:"Emissions per unit power"}],risks:n.gridStressPercent>75?"Electrical grid operating under elevated strain. Load shedding risk in secondary regions.":"Energy margins optimal. Clean surplus charging secondary battery banks."};case"cloud":return{title:"HYPERSCALE & SUBSEA DATA INFRASTRUCTURE",icon:Gv,badge:"STORAGE & CLOUD",overview:"Distributed computing topology spanning continental mega-vaults, modular subsea marine clusters, and orbital edge processing units.",formula:"Data Center Load = Capacity (GW) × Utilization (%) × PUE (Power Usage Effectiveness)",metricsList:[{label:"Dedicated DC Power Capacity",value:`${n.dataCenterCapacityGW.toFixed(1)} GW`,note:"Global utility allocation"},{label:"Cluster Capacity Utilization",value:`${n.dataCenterUtilization.toFixed(1)}%`,note:"Real-time compute occupancy"},{label:"Average PUE Rating",value:`${n.pueAverage.toFixed(3)}`,note:"1.0 = perfect thermodynamic limit"},{label:"Monthly Cloud Data Ingest",value:`${n.cloudDemandEBMonth.toLocaleString()} Exabytes`,note:"Inference, sync & neural media"},{label:"Cooling Plant Stress",value:`${n.coolingStressPercent.toFixed(1)}%`,note:"Chilled loop heat rejection"}],risks:n.dataCenterUtilization>90?"Hyperscale clusters near theoretical capacity ceiling. Prioritizing quantum compression.":"Cloud infrastructure operating with ample latency headroom."};case"satellites":return{title:"LEO / VLEO ORBITAL SATELLITE CONSTELLATION",icon:mh,badge:"SPACE LAYER",overview:"Massive multi-shell low-earth-orbit megaconstellation operating with optical inter-satellite lasers (ISLs) and phased array phased terrestrial transceivers.",formula:"Laser Bandwidth = Sats Count × Link Capacity × Orbital Health Factor",metricsList:[{label:"Active Satellites in Orbit",value:`${n.activeSatellites.toLocaleString()}`,note:"VLEO, LEO and Polar shells"},{label:"Global Population Coverage",value:`${n.satelliteCoveragePercent.toFixed(1)}%`,note:"Direct-to-device gigabit"},{label:"Optical ISL Mesh Bandwidth",value:`${n.opticalLaserBandwidthTbps.toLocaleString()} Tbps`,note:"In-space vacuum laser throughput"},{label:"Orbital Constellation Health",value:`${n.orbitalHealthPercent.toFixed(1)}%`,note:"Debris & space weather resilience"},{label:"Space Weather Flux Index",value:`${n.spaceWeatherIndex.toFixed(1)} / 10`,note:"Geomagnetic radiation level"}],risks:n.orbitalHealthPercent<80?"Space weather or orbital debris hazard detected. Collision avoidance maneuvers active.":"Orbital shell geometry nominal. Laser interconnects at 99.98% uptime."};case"network":return{title:"GLOBAL QUANTUM & SUBSEA NETWORK",icon:Bv,badge:"PHYSICAL CONDUIT",overview:"Global high-speed nervous system fusing hollow-core subsea glass cables, terrestrial superconducting fiber backbones, and quantum key distribution (QKD) meshes.",formula:"Global Latency = Optical Distance ÷ (Speed of Light in Fiber × Routing Overhead Factor)",metricsList:[{label:"Aggregate Global Bandwidth",value:`${n.globalBandwidthPbps.toFixed(2)} Pbps`,note:"Petabits/sec transoceanic"},{label:"Global Average Latency (RTT)",value:`${n.networkLatencyMs.toFixed(1)} ms`,note:"Cross-continental round trip"},{label:"Subsea Cable Trunk Integrity",value:`${n.subseaCableIntegrityPercent.toFixed(1)}%`,note:"Deep ocean fiber health"},{label:"Quantum Entanglement Mesh",value:`${n.quantumMeshCoveragePercent.toFixed(1)}%`,note:"Tamper-proof quantum routing"}],risks:n.networkLatencyMs>20?"Latency elevated due to cable rerouting or regional choke points.":"Sub-millisecond hollow-core quantum trunks operating at peak efficiency."};case"robotics":return{title:"ROBOTICS & EMBODIED AUTOMATION",icon:Fv,badge:"PHYSICAL AI",overview:"Billions of autonomous humanoid workers, logistics quadruped fleets, and drone swarms maintaining urban fabric, agriculture, and manufacturing.",formula:"Automation Gain = (Active Units ÷ Baseline) × Neural Foundation Efficiency",metricsList:[{label:"Active Humanoid & Drone Fleet",value:`${n.robotPopulationMillions.toFixed(1)} Million`,note:"Global autonomous physical units"},{label:"Infrastructure Automation Gain",value:`${n.automationEfficiencyPercent.toFixed(1)}%`,note:"Efficiency increase across society"},{label:"Total Fleet Power Draw",value:`${n.robotEnergyDemandGW.toFixed(1)} GW`,note:"Inductive charging & battery draw"}],risks:n.robotPopulationMillions>200&&n.gridStressPercent>80?"Fleet charging cycles contributing to peak grid strain. Scheduling off-peak recharging.":"Fleet telemetry synced with zero packet drops."};case"cities":return{title:"MEGACITIES & EDGE COMPUTING FABRIC",icon:kv,badge:"URBAN NODES",overview:"Autonomous smart megacities operating localized edge compute micro-data centers, smart water loops, dynamic transit routing, and localized microgrids.",formula:"Edge Load = Local Inference ÷ (Local Inference + Cloud Roundtrip)",metricsList:[{label:"Global Urban Population",value:`${n.urbanPopulationBillions.toFixed(2)} Billion`,note:"Citizens living in smart cities"},{label:"Smart City Grid Saturation",value:`${n.smartCitySaturationPercent.toFixed(1)}%`,note:"Cities with autonomic AI governance"},{label:"Edge Compute Traffic Share",value:`${n.edgeComputeLoadPercent.toFixed(1)}%`,note:"Processed locally at city edge"}],risks:"Edge compute load balances central cloud demand, maintaining resilient municipal operations."}}})(),a=o.icon;return T.jsxs("div",{className:"fixed inset-y-0 right-0 z-40 w-full max-w-md p-6 bg-[#060a14]/95 border-l border-cyber-border/80 backdrop-blur-2xl shadow-2xl flex flex-col justify-between overflow-y-auto",children:[T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[T.jsxs("div",{className:"flex items-center gap-2.5",children:[T.jsx("div",{className:"p-2 rounded-lg bg-slate-900 border border-cyber-cyan/40 text-cyber-cyan",children:T.jsx(a,{className:"w-5 h-5"})}),T.jsxs("div",{children:[T.jsxs("span",{className:"text-[10px] font-mono tracking-widest text-cyber-cyan uppercase font-semibold",children:[o.badge," // YEAR ",r.toFixed(1)]}),T.jsx("h2",{className:"text-sm font-bold font-mono text-white tracking-wide",children:o.title})]})]}),T.jsx("button",{onClick:()=>e(null),className:"p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",children:T.jsx(vc,{className:"w-5 h-5"})})]}),T.jsx("div",{className:"mt-4 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans",children:o.overview}),T.jsxs("div",{className:"mt-4 p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/30 font-mono text-[11px]",children:[T.jsxs("div",{className:"flex items-center gap-1.5 text-cyber-cyan font-bold uppercase tracking-wider mb-1",children:[T.jsx(Vv,{className:"w-3.5 h-3.5"}),T.jsx("span",{children:"INTERDEPENDENCY MODEL:"})]}),T.jsx("p",{className:"text-slate-300 leading-relaxed",children:o.formula})]}),T.jsxs("div",{className:"mt-6 flex flex-col gap-2",children:[T.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase tracking-widest",children:"LIVE TELEMETRY STREAM:"}),o.metricsList.map((l,c)=>T.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded bg-slate-900/40 border border-slate-800/80 font-mono text-xs hover:border-slate-700 transition-colors",children:[T.jsxs("div",{children:[T.jsx("div",{className:"text-slate-300 font-medium",children:l.label}),T.jsx("div",{className:"text-[9px] text-slate-500",children:l.note})]}),T.jsx("div",{className:"text-sm font-bold text-cyber-cyan text-right",children:l.value})]},c))]}),T.jsxs("div",{className:"mt-6 p-3.5 rounded-lg border border-slate-800 bg-slate-900/70 font-mono text-xs",children:[T.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[o.risks.includes("risk")||o.risks.includes("strain")||o.risks.includes("elevated")?T.jsx(wA,{className:"w-4 h-4 text-amber-400"}):T.jsx(dA,{className:"w-4 h-4 text-emerald-400"}),T.jsx("span",{className:"font-bold text-slate-200 uppercase tracking-wider",children:"DIAGNOSTIC STATUS:"})]}),T.jsx("p",{className:"text-slate-400 text-[11px] leading-relaxed",children:o.risks})]})]}),T.jsxs("div",{className:"pt-4 border-t border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-500",children:[T.jsx("span",{children:"SECURITY ENCLAVE: ISOLATED"}),T.jsxs("span",{children:["SCENARIO: ",i.name]})]})]})},UA=()=>{const{selectedNode:t,setSelectedNode:e,metrics:n,selectedSubsystem:i,year:r}=ri();if(!t)return null;const o=(()=>{const l=t.metrics;let c=l.loadPct,d=l.powerGW,h=l.latencyMs,f=l.status;if(t.type==="datacenter"){const p=n.dataCenterUtilization/84;c=Math.min(99,Math.round(l.loadPct*p)),d=Number((l.powerGW*(n.dataCenterCapacityGW/210)).toFixed(1)),h=Number((l.latencyMs*(n.networkLatencyMs/10.8)).toFixed(1))}else if(t.type==="energy_fusion"){const p=Math.max(.1,n.fusionOutputTWh/380);d=Number((l.powerGW*Math.sqrt(p)).toFixed(1)),c=Math.min(99,Math.round(n.gridStressPercent*1.1))}else c=Math.min(99,Math.round(n.smartCitySaturationPercent*(l.loadPct/64))),h=Number((l.latencyMs*(n.networkLatencyMs/10.8)).toFixed(1)),d=Number((l.powerGW*(n.energyConsumptionTWh/36900)).toFixed(1));return c>92||n.gridStressPercent>85?f="OVERLOADED":c>75||n.gridStressPercent>70?f="DEGRADED":f="OPTIMAL",{load:c,power:d,ping:h,status:f}})(),a=i?"fixed top-20 left-4 md:left-[26rem] z-30":"fixed top-20 right-6 z-30";return T.jsxs("div",{className:`${a} w-80 md:w-88 p-4 rounded-xl border border-cyber-cyan/50 bg-[#060a14]/95 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,240,255,0.25)] font-mono transition-all animate-fadeIn`,children:[T.jsxs("div",{className:"flex items-start justify-between pb-3 border-b border-slate-800",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx("div",{className:"p-1.5 rounded-lg bg-cyan-950/70 border border-cyber-cyan/40 text-cyber-cyan",children:T.jsx(vA,{className:"w-4 h-4"})}),T.jsxs("div",{children:[T.jsxs("span",{className:"text-[9px] uppercase tracking-wider text-cyber-cyan font-bold",children:["NODE INSPECTOR // ",t.country," // ",r.toFixed(1)]}),T.jsx("h3",{className:"text-xs font-bold text-white leading-tight",children:t.name})]})]}),T.jsx("button",{onClick:()=>e(null),className:"p-1 rounded text-slate-400 hover:text-white transition-colors",title:"Close node inspector",children:T.jsx(vc,{className:"w-4 h-4"})})]}),T.jsx("p",{className:"mt-2 text-[10px] text-slate-300 font-sans leading-relaxed",children:t.description}),T.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-3 text-xs",children:[T.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-900/70 border border-slate-800",children:[T.jsxs("div",{className:"flex items-center gap-1 text-[9px] text-slate-400 uppercase",children:[T.jsx(Ov,{className:"w-3 h-3 text-cyber-cyan"}),T.jsx("span",{children:"LOAD FACTOR"})]}),T.jsxs("div",{className:"text-sm font-bold text-white mt-0.5",children:[o.load,"%"]})]}),T.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-900/70 border border-slate-800",children:[T.jsxs("div",{className:"flex items-center gap-1 text-[9px] text-slate-400 uppercase",children:[T.jsx(xc,{className:"w-3 h-3 text-amber-400"}),T.jsx("span",{children:"POWER DRAW"})]}),T.jsxs("div",{className:"text-sm font-bold text-amber-300 mt-0.5",children:[o.power," GW"]})]}),T.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-900/70 border border-slate-800",children:[T.jsxs("div",{className:"flex items-center gap-1 text-[9px] text-slate-400 uppercase",children:[T.jsx(mA,{className:"w-3 h-3 text-emerald-400"}),T.jsx("span",{children:"RTT PING"})]}),T.jsxs("div",{className:"text-sm font-bold text-emerald-300 mt-0.5",children:[o.ping," ms"]})]}),T.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-900/70 border border-slate-800",children:[T.jsxs("div",{className:"flex items-center gap-1 text-[9px] text-slate-400 uppercase",children:[T.jsx(MA,{className:"w-3 h-3 text-blue-400"}),T.jsx("span",{children:"NODE STATUS"})]}),T.jsx("div",{className:`text-xs font-bold mt-1 ${o.status==="OPTIMAL"?"text-emerald-400":o.status==="DEGRADED"?"text-amber-400":"text-rose-400 animate-pulse"}`,children:o.status})]})]}),T.jsxs("div",{className:"mt-3 pt-2 border-t border-slate-800 flex justify-between text-[9px] text-slate-500",children:[T.jsxs("span",{children:["LAT: ",t.lat.toFixed(2),"°"]}),T.jsxs("span",{children:["LON: ",t.lon.toFixed(2),"°"]}),T.jsx("span",{className:"text-cyber-cyan uppercase",children:t.type.replace("_"," ")})]})]})},OA=()=>{const{isChartsOpen:t,toggleCharts:e,year:n,scenario:i,metrics:r}=ri(),s=he.useRef(null);return he.useEffect(()=>{if(!t||!s.current)return;const o=s.current,a=o.getContext("2d");if(!a)return;const l=window.devicePixelRatio||1,c=o.parentElement?.clientWidth||700,d=300;o.width=c*l,o.height=d*l,o.style.width=`${c}px`,o.style.height=`${d}px`,a.scale(l,l),a.fillStyle="#070c18",a.fillRect(0,0,c,d);const h=50,f=30,p=c-h*2,x=d-f*2;a.strokeStyle="rgba(255, 255, 255, 0.07)",a.lineWidth=1;for(let y=0;y<=4;y++){const C=f+x/4*y;a.beginPath(),a.moveTo(h,C),a.lineTo(h+p,C),a.stroke()}const _=[2030,2035,2040,2050];_.forEach((y,C)=>{const A=h+p/(_.length-1)*C;a.beginPath(),a.moveTo(A,f),a.lineTo(A,f+x),a.stroke(),a.fillStyle="#64748b",a.font='10px "JetBrains Mono", monospace',a.textAlign="center",a.fillText(`${y}`,A,d-12)});const m=(y,C)=>{const A=(y-2030)/20,b=h+p*A,L=f+x*(1-Math.max(0,Math.min(1,C)));return[b,L]};[{name:"AI Compute",color:"#c084fc",getVal:y=>Math.log10(Zi[y].aiComputeExaflops*i.multipliers.aiCompute)/3.7},{name:"Clean Energy %",color:"#fbbf24",getVal:y=>Zi[y].renewableEnergyPercent*i.multipliers.renewablePercent/100},{name:"Active Sats",color:"#00f0ff",getVal:y=>Zi[y].activeSatellites*i.multipliers.satelliteCount/3e5},{name:"Robotics Fleet",color:"#f43f5e",getVal:y=>Zi[y].robotPopulationMillions*i.multipliers.roboticsCount/1800}].forEach(y=>{a.strokeStyle=y.color,a.lineWidth=2.2,a.beginPath(),_.forEach((C,A)=>{const b=y.getVal(C),[L,E]=m(C,b);A===0?a.moveTo(L,E):a.lineTo(L,E)}),a.stroke(),_.forEach(C=>{const A=y.getVal(C),[b,L]=m(C,A);a.fillStyle=y.color,a.beginPath(),a.arc(b,L,3.5,0,Math.PI*2),a.fill()})});const v=(n-2030)/20,g=h+p*v;a.strokeStyle="#00f0ff",a.lineWidth=1.5,a.setLineDash([4,4]),a.beginPath(),a.moveTo(g,f),a.lineTo(g,f+x),a.stroke(),a.setLineDash([]),a.fillStyle="#00f0ff",a.beginPath(),a.arc(g,f-4,4,0,Math.PI*2),a.fill(),a.fillStyle="#00f0ff",a.font='bold 9px "JetBrains Mono", monospace',a.textAlign="center",a.fillText(`${n.toFixed(1)}`,g,f-12)},[t,n,i]),t?T.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md",children:T.jsxs("div",{className:"w-full max-w-3xl p-6 rounded-xl border border-cyber-cyan/40 bg-[#060a14]/95 shadow-[0_0_50px_rgba(0,240,255,0.25)] flex flex-col gap-4 font-mono",children:[T.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx(Vv,{className:"w-5 h-5 text-cyber-cyan"}),T.jsx("h2",{className:"text-sm font-bold text-white uppercase tracking-wider",children:"MULTI-PARAMETRIC PROJECTION DYNAMICS (2030 — 2050)"})]}),T.jsx("button",{onClick:e,className:"p-1 rounded text-slate-400 hover:text-white transition-colors",children:T.jsx(vc,{className:"w-5 h-5"})})]}),T.jsxs("div",{className:"flex flex-wrap gap-4 text-xs",children:[T.jsxs("div",{className:"flex items-center gap-1.5",children:[T.jsx("span",{className:"w-3 h-3 rounded-full bg-[#c084fc]"}),T.jsx("span",{className:"text-slate-300",children:"AI Compute (log scale)"})]}),T.jsxs("div",{className:"flex items-center gap-1.5",children:[T.jsx("span",{className:"w-3 h-3 rounded-full bg-[#fbbf24]"}),T.jsx("span",{className:"text-slate-300",children:"Clean Energy %"})]}),T.jsxs("div",{className:"flex items-center gap-1.5",children:[T.jsx("span",{className:"w-3 h-3 rounded-full bg-[#00f0ff]"}),T.jsx("span",{className:"text-slate-300",children:"Satellites Constellation"})]}),T.jsxs("div",{className:"flex items-center gap-1.5",children:[T.jsx("span",{className:"w-3 h-3 rounded-full bg-[#f43f5e]"}),T.jsx("span",{className:"text-slate-300",children:"Robotics Fleet"})]})]}),T.jsx("div",{className:"w-full rounded-lg overflow-hidden border border-slate-800 bg-[#070c18] p-2",children:T.jsx("canvas",{ref:s,className:"w-full block"})}),T.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800",children:[T.jsxs("div",{children:["ACTIVE SCENARIO: ",T.jsx("span",{className:"text-cyber-cyan font-bold",children:i.name})]}),T.jsxs("div",{children:["SYSTEM STATUS: ",T.jsxs("span",{className:"text-emerald-400 font-bold",children:[r.healthStatus," (",r.globalSystemHealth.toFixed(1),"%)"]})]})]})]})}):null},FA=()=>{const{isConsoleOpen:t,toggleConsole:e,metrics:n,year:i,setYear:r,scenario:s,setScenarioById:o,triggerEvent:a,events:l,dismissEvent:c,setPlaybackSpeed:d,isPlaying:h,togglePlay:f}=ri(),[p,x]=he.useState(""),[_,m]=he.useState([{id:"1",type:"output",text:"INTERNET 2035 GLOBAL COMMAND CORE [V4.2.0-PROD]"},{id:"2",type:"output",text:'Type "help" to view the diagnostic command directory.'}]),[u,v]=he.useState([]),[g,y]=he.useState(-1),C=he.useRef(null),A=he.useRef(null);he.useEffect(()=>{t&&C.current?.focus()},[t]),he.useEffect(()=>{A.current?.scrollIntoView({behavior:"smooth"})},[_]);const b=E=>{E.preventDefault();const S=p.trim();if(!S)return;Dn.playClick(),v(X=>[S,...X]),y(-1);const R=[{id:Math.random().toString(),type:"input",text:`> ${S}`}],B=S.split(" "),k=B[0].toLowerCase(),j=B[1];switch(k){case"help":R.push({id:Math.random().toString(),type:"output",text:["AVAILABLE MISSION COMMANDS:","  status                 - Report full systemic telemetry synthesis","  year <2030-2050>       - Shift simulation temporal phase (e.g. year 2042)","  scenario <id>          - Activate branch: baseline, ai_acceleration, energy_crisis, global_connectivity, autonomous_cities, infrastructure_collapse, optimistic_future","  event <random|list|id> - Inject dynamic anomaly or list presets","  mitigate               - Enforce automated recovery protocols on all active alerts","  play / pause           - Toggle real-time simulation progress","  speed <1|2|5|10>       - Set simulation temporal clock acceleration","  clear                  - Purge terminal display buffer","  exit                   - Close command console"].join(`
`)});break;case"status":R.push({id:Math.random().toString(),type:"success",text:[`SYSTEM HEALTH:      ${n.globalSystemHealth.toFixed(1)}% [${n.healthStatus}]`,`TEMPORAL PHASE:     YEAR ${i.toFixed(2)}`,`ACTIVE SCENARIO:    ${s.name}`,`AI COMPUTE:         ${n.aiComputeExaflops.toFixed(1)} EFLOPs (${n.aiAdoptionRate.toFixed(1)}% adoption)`,`ENERGY GENERATION:  ${n.energyProductionTWh.toLocaleString()} TWh (${n.renewableEnergyPercent.toFixed(1)}% clean)`,`GRID STRESS:        ${n.gridStressPercent.toFixed(1)}%`,`ORBITAL SATELLITES: ${n.activeSatellites.toLocaleString()} (${n.satelliteCoveragePercent.toFixed(1)}% coverage)`,`NETWORK LATENCY:    ${n.networkLatencyMs.toFixed(2)} ms`,`ROBOTICS FLEET:     ${n.robotPopulationMillions.toFixed(1)} Million units`].join(`
`)});break;case"year":if(!j||isNaN(parseFloat(j)))R.push({id:Math.random().toString(),type:"error",text:"Usage: year <2030-2050>"});else{const z=parseFloat(j);z<2030||z>2050?R.push({id:Math.random().toString(),type:"error",text:"Year must be between 2030 and 2050."}):(r(z),R.push({id:Math.random().toString(),type:"success",text:`Temporal phase shifted to ${z.toFixed(1)}.`}))}break;case"scenario":if(j){const z=Zo.find($=>$.id.toLowerCase()===j.toLowerCase());z?(o(z.id),R.push({id:Math.random().toString(),type:"success",text:`Simulation switched to scenario: ${z.name}`})):R.push({id:Math.random().toString(),type:"error",text:`Unknown scenario "${j}". Type "scenario" to list options.`})}else{const z=Zo.map($=>$.id).join(", ");R.push({id:Math.random().toString(),type:"output",text:`Available scenarios: ${z}`})}break;case"event":if(j==="list"){const z=ar.map(($,I)=>`[${I}] ${$.title} (${$.severity})`).join(`
`);R.push({id:Math.random().toString(),type:"output",text:z})}else if(j&&!isNaN(parseInt(j))){const z=parseInt(j);ar[z]?(a(z),R.push({id:Math.random().toString(),type:"success",text:`Injected event: ${ar[z].title}`})):R.push({id:Math.random().toString(),type:"error",text:"Invalid event index."})}else a(),R.push({id:Math.random().toString(),type:"success",text:"Random dynamic event injected into simulation."});break;case"mitigate":l.forEach(z=>{z.active&&c(z.id)}),R.push({id:Math.random().toString(),type:"success",text:"Mitigation protocols deployed. All active events resolved."});break;case"play":h||f(),R.push({id:Math.random().toString(),type:"success",text:"Simulation resumed."});break;case"pause":h&&f(),R.push({id:Math.random().toString(),type:"output",text:"Simulation paused."});break;case"speed":const X=parseInt(j);[1,2,5,10].includes(X)?(d(X),R.push({id:Math.random().toString(),type:"success",text:`Playback rate set to ${X}x.`})):R.push({id:Math.random().toString(),type:"error",text:"Valid speeds: 1, 2, 5, 10."});break;case"clear":m([]),x("");return;case"exit":e();return;default:R.push({id:Math.random().toString(),type:"error",text:`Command not recognized: "${k}". Type "help" for a list of commands.`})}m(X=>[...X,...R]),x("")},L=E=>{if(E.key==="ArrowUp"){if(E.preventDefault(),u.length>0&&g<u.length-1){const S=g+1;y(S),x(u[S])}}else if(E.key==="ArrowDown")if(E.preventDefault(),g>0){const S=g-1;y(S),x(u[S])}else g===0&&(y(-1),x(""))};return t?T.jsxs("div",{className:"fixed inset-x-4 top-16 z-50 max-w-4xl mx-auto rounded-lg border border-cyber-cyan/60 bg-[#040812]/95 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,240,255,0.3)] font-mono text-xs overflow-hidden flex flex-col h-96",children:[T.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-slate-950/80 border-b border-cyber-border/40",children:[T.jsxs("div",{className:"flex items-center gap-2 text-cyber-cyan font-bold tracking-wider",children:[T.jsx(Hv,{className:"w-4 h-4"}),T.jsx("span",{children:"CYBER-COMMAND TELEMETRY CONSOLE // SHADOW-4"})]}),T.jsx("button",{onClick:e,className:"text-slate-400 hover:text-white transition-colors",children:T.jsx(vc,{className:"w-4 h-4"})})]}),T.jsxs("div",{className:"flex-1 p-4 overflow-y-auto space-y-1 text-slate-200",children:[_.map(E=>T.jsx("div",{className:`whitespace-pre-wrap leading-relaxed ${E.type==="input"?"text-cyan-400 font-semibold":E.type==="error"?"text-rose-400 font-semibold":E.type==="success"?"text-emerald-400":"text-slate-300"}`,children:E.text},E.id)),T.jsx("div",{ref:A})]}),T.jsxs("form",{onSubmit:b,className:"flex items-center px-4 py-2.5 bg-black/60 border-t border-slate-800",children:[T.jsx("span",{className:"text-cyber-cyan font-bold mr-2",children:"ROOT@2035#"}),T.jsx("input",{ref:C,type:"text",value:p,onChange:E=>x(E.target.value),onKeyDown:L,placeholder:"Type command (e.g. status, scenario optimistic_future, event)...",className:"flex-1 bg-transparent text-white focus:outline-none placeholder-slate-600 font-mono"}),T.jsx("button",{type:"submit",className:"text-slate-500 hover:text-cyber-cyan transition-colors ml-2",children:T.jsx(hA,{className:"w-4 h-4"})})]})]}):null},kA=()=>{const{togglePlay:t,toggleConsole:e,isConsoleOpen:n,jumpToMilestone:i,selectedSubsystem:r,setSelectedSubsystem:s,selectedNode:o,setSelectedNode:a}=ri();return he.useEffect(()=>{const l=c=>{if(["INPUT","TEXTAREA"].includes(c.target.tagName)){c.key==="Escape"&&c.target.blur();return}c.key==="`"||c.key==="~"?(c.preventDefault(),e()):c.key===" "?(c.preventDefault(),t()):c.key==="Escape"?(r&&s(null),o&&a(null),n&&e()):c.key==="1"?i(2030):c.key==="2"?i(2035):c.key==="3"?i(2040):c.key==="4"&&i(2050)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[t,e,n,i,r,s,o,a]),T.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-[#04070d] text-slate-100 flex flex-col cyber-grid",children:[T.jsx(bA,{}),T.jsxs("main",{className:"relative flex-1 w-full h-full overflow-hidden",children:[T.jsx(rA,{}),T.jsx(NA,{}),T.jsx(IA,{}),T.jsx(DA,{}),T.jsx(UA,{}),T.jsx(OA,{}),T.jsx(FA,{}),T.jsx("div",{className:"absolute inset-0 scanline-overlay pointer-events-none opacity-40 z-10"}),T.jsx("div",{className:"absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.85)] z-10"})]})]})},zA=()=>T.jsx(wy,{children:T.jsx(kA,{})});Cu.createRoot(document.getElementById("root")).render(T.jsx(ax.StrictMode,{children:T.jsx(zA,{})}));
