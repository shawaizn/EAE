(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();var Jc={exports:{}},As={},Zc={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ni=Symbol.for("react.element"),_m=Symbol.for("react.portal"),Gm=Symbol.for("react.fragment"),Hm=Symbol.for("react.strict_mode"),Ym=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),Km=Symbol.for("react.context"),Vm=Symbol.for("react.forward_ref"),Jm=Symbol.for("react.suspense"),Zm=Symbol.for("react.memo"),Xm=Symbol.for("react.lazy"),Al=Symbol.iterator;function ep(e){return e===null||typeof e!="object"?null:(e=Al&&e[Al]||e["@@iterator"],typeof e=="function"?e:null)}var Xc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eu=Object.assign,tu={};function eo(e,t,n){this.props=e,this.context=t,this.refs=tu,this.updater=n||Xc}eo.prototype.isReactComponent={};eo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};eo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nu(){}nu.prototype=eo.prototype;function ba(e,t,n){this.props=e,this.context=t,this.refs=tu,this.updater=n||Xc}var xa=ba.prototype=new nu;xa.constructor=ba;eu(xa,eo.prototype);xa.isPureReactComponent=!0;var Il=Array.isArray,ou=Object.prototype.hasOwnProperty,ka={current:null},iu={key:!0,ref:!0,__self:!0,__source:!0};function su(e,t,n){var o,s={},r=null,a=null;if(t!=null)for(o in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(r=""+t.key),t)ou.call(t,o)&&!iu.hasOwnProperty(o)&&(s[o]=t[o]);var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){for(var u=Array(c),d=0;d<c;d++)u[d]=arguments[d+2];s.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps,c)s[o]===void 0&&(s[o]=c[o]);return{$$typeof:ni,type:e,key:r,ref:a,props:s,_owner:ka.current}}function tp(e,t){return{$$typeof:ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Aa(e){return typeof e=="object"&&e!==null&&e.$$typeof===ni}function np(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jl=/\/+/g;function Os(e,t){return typeof e=="object"&&e!==null&&e.key!=null?np(""+e.key):t.toString(36)}function qi(e,t,n,o,s){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ni:case _m:a=!0}}if(a)return a=e,s=s(a),e=o===""?"."+Os(a,0):o,Il(s)?(n="",e!=null&&(n=e.replace(jl,"$&/")+"/"),qi(s,t,n,"",function(d){return d})):s!=null&&(Aa(s)&&(s=tp(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(jl,"$&/")+"/")+e)),t.push(s)),1;if(a=0,o=o===""?".":o+":",Il(e))for(var c=0;c<e.length;c++){r=e[c];var u=o+Os(r,c);a+=qi(r,t,n,u,s)}else if(u=ep(e),typeof u=="function")for(e=u.call(e),c=0;!(r=e.next()).done;)r=r.value,u=o+Os(r,c++),a+=qi(r,t,n,u,s);else if(r==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function pi(e,t,n){if(e==null)return e;var o=[],s=0;return qi(e,o,"","",function(r){return t.call(n,r,s++)}),o}function op(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},Bi={transition:null},ip={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Bi,ReactCurrentOwner:ka};function ru(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:pi,forEach:function(e,t,n){pi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pi(e,function(){t++}),t},toArray:function(e){return pi(e,function(t){return t})||[]},only:function(e){if(!Aa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=eo;F.Fragment=Gm;F.Profiler=Ym;F.PureComponent=ba;F.StrictMode=Hm;F.Suspense=Jm;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ip;F.act=ru;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=eu({},e.props),s=e.key,r=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(r=t.ref,a=ka.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)ou.call(t,u)&&!iu.hasOwnProperty(u)&&(o[u]=t[u]===void 0&&c!==void 0?c[u]:t[u])}var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){c=Array(u);for(var d=0;d<u;d++)c[d]=arguments[d+2];o.children=c}return{$$typeof:ni,type:e.type,key:s,ref:r,props:o,_owner:a}};F.createContext=function(e){return e={$$typeof:Km,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qm,_context:e},e.Consumer=e};F.createElement=su;F.createFactory=function(e){var t=su.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Vm,render:e}};F.isValidElement=Aa;F.lazy=function(e){return{$$typeof:Xm,_payload:{_status:-1,_result:e},_init:op}};F.memo=function(e,t){return{$$typeof:Zm,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Bi.transition;Bi.transition={};try{e()}finally{Bi.transition=t}};F.unstable_act=ru;F.useCallback=function(e,t){return Ce.current.useCallback(e,t)};F.useContext=function(e){return Ce.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};F.useEffect=function(e,t){return Ce.current.useEffect(e,t)};F.useId=function(){return Ce.current.useId()};F.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Ce.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};F.useRef=function(e){return Ce.current.useRef(e)};F.useState=function(e){return Ce.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Ce.current.useTransition()};F.version="18.3.1";Zc.exports=F;var b=Zc.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp=b,rp=Symbol.for("react.element"),ap=Symbol.for("react.fragment"),lp=Object.prototype.hasOwnProperty,cp=sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,up={key:!0,ref:!0,__self:!0,__source:!0};function au(e,t,n){var o,s={},r=null,a=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(a=t.ref);for(o in t)lp.call(t,o)&&!up.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)s[o]===void 0&&(s[o]=t[o]);return{$$typeof:rp,type:e,key:r,ref:a,props:s,_owner:cp.current}}As.Fragment=ap;As.jsx=au;As.jsxs=au;Jc.exports=As;var i=Jc.exports,lu={exports:{}},De={},cu={exports:{}},uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,E){var B=z.length;z.push(E);e:for(;0<B;){var U=B-1>>>1,ae=z[U];if(0<s(ae,E))z[U]=E,z[B]=ae,B=U;else break e}}function n(z){return z.length===0?null:z[0]}function o(z){if(z.length===0)return null;var E=z[0],B=z.pop();if(B!==E){z[0]=B;e:for(var U=0,ae=z.length,Ae=ae>>>1;U<Ae;){var le=2*(U+1)-1,co=z[le],Zt=le+1,mi=z[Zt];if(0>s(co,B))Zt<ae&&0>s(mi,co)?(z[U]=mi,z[Zt]=B,U=Zt):(z[U]=co,z[le]=B,U=le);else if(Zt<ae&&0>s(mi,B))z[U]=mi,z[Zt]=B,U=Zt;else break e}}return E}function s(z,E){var B=z.sortIndex-E.sortIndex;return B!==0?B:z.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var u=[],d=[],m=1,h=null,g=3,p=!1,v=!1,x=!1,A=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(z){for(var E=n(d);E!==null;){if(E.callback===null)o(d);else if(E.startTime<=z)o(d),E.sortIndex=E.expirationTime,t(u,E);else break;E=n(d)}}function k(z){if(x=!1,w(z),!v)if(n(u)!==null)v=!0,lo(S);else{var E=n(d);E!==null&&pe(k,E.startTime-z)}}function S(z,E){v=!1,x&&(x=!1,y(R),R=-1),p=!0;var B=g;try{for(w(E),h=n(u);h!==null&&(!(h.expirationTime>E)||z&&!M());){var U=h.callback;if(typeof U=="function"){h.callback=null,g=h.priorityLevel;var ae=U(h.expirationTime<=E);E=e.unstable_now(),typeof ae=="function"?h.callback=ae:h===n(u)&&o(u),w(E)}else o(u);h=n(u)}if(h!==null)var Ae=!0;else{var le=n(d);le!==null&&pe(k,le.startTime-E),Ae=!1}return Ae}finally{h=null,g=B,p=!1}}var T=!1,N=null,R=-1,C=5,I=-1;function M(){return!(e.unstable_now()-I<C)}function _(){if(N!==null){var z=e.unstable_now();I=z;var E=!0;try{E=N(!0,z)}finally{E?Y():(T=!1,N=null)}}else T=!1}var Y;if(typeof f=="function")Y=function(){f(_)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Te=ke.port2;ke.port1.onmessage=_,Y=function(){Te.postMessage(null)}}else Y=function(){A(_,0)};function lo(z){N=z,T||(T=!0,Y())}function pe(z,E){R=A(function(){z(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){v||p||(v=!0,lo(S))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var E=3;break;default:E=g}var B=g;g=E;try{return z()}finally{g=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,E){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var B=g;g=z;try{return E()}finally{g=B}},e.unstable_scheduleCallback=function(z,E,B){var U=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?U+B:U):B=U,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=B+ae,z={id:m++,callback:E,priorityLevel:z,startTime:B,expirationTime:ae,sortIndex:-1},B>U?(z.sortIndex=B,t(d,z),n(u)===null&&z===n(d)&&(x?(y(R),R=-1):x=!0,pe(k,B-U))):(z.sortIndex=ae,t(u,z),v||p||(v=!0,lo(S))),z},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(z){var E=g;return function(){var B=g;g=E;try{return z.apply(this,arguments)}finally{g=B}}}})(uu);cu.exports=uu;var dp=cu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp=b,Be=dp;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var du=new Set,Lo={};function vn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Lo[e]=t,e=0;e<t.length;e++)du.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kr=Object.prototype.hasOwnProperty,pp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sl={},Cl={};function hp(e){return kr.call(Cl,e)?!0:kr.call(Sl,e)?!1:pp.test(e)?Cl[e]=!0:(Sl[e]=!0,!1)}function gp(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fp(e,t,n,o){if(t===null||typeof t>"u"||gp(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,o,s,r,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=r,this.removeEmptyString=a}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ia=/[\-:]([a-z])/g;function ja(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ia,ja);fe[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ia,ja);fe[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ia,ja);fe[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function Sa(e,t,n,o){var s=fe.hasOwnProperty(t)?fe[t]:null;(s!==null?s.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fp(t,n,s,o)&&(n=null),o||s===null?hp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,o=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Ct=mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hi=Symbol.for("react.element"),Sn=Symbol.for("react.portal"),Cn=Symbol.for("react.fragment"),Ca=Symbol.for("react.strict_mode"),Ar=Symbol.for("react.profiler"),mu=Symbol.for("react.provider"),pu=Symbol.for("react.context"),Na=Symbol.for("react.forward_ref"),Ir=Symbol.for("react.suspense"),jr=Symbol.for("react.suspense_list"),Ta=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),hu=Symbol.for("react.offscreen"),Nl=Symbol.iterator;function uo(e){return e===null||typeof e!="object"?null:(e=Nl&&e[Nl]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,Us;function xo(e){if(Us===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Us=t&&t[1]||""}return`
`+Us+e}var $s=!1;function _s(e,t){if(!e||$s)return"";$s=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var o=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){o=d}e.call(t.prototype)}else{try{throw Error()}catch(d){o=d}e()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),r=o.stack.split(`
`),a=s.length-1,c=r.length-1;1<=a&&0<=c&&s[a]!==r[c];)c--;for(;1<=a&&0<=c;a--,c--)if(s[a]!==r[c]){if(a!==1||c!==1)do if(a--,c--,0>c||s[a]!==r[c]){var u=`
`+s[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=c);break}}}finally{$s=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xo(e):""}function yp(e){switch(e.tag){case 5:return xo(e.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return e=_s(e.type,!1),e;case 11:return e=_s(e.type.render,!1),e;case 1:return e=_s(e.type,!0),e;default:return""}}function Sr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cn:return"Fragment";case Sn:return"Portal";case Ar:return"Profiler";case Ca:return"StrictMode";case Ir:return"Suspense";case jr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pu:return(e.displayName||"Context")+".Consumer";case mu:return(e._context.displayName||"Context")+".Provider";case Na:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ta:return t=e.displayName||null,t!==null?t:Sr(e.type)||"Memo";case zt:t=e._payload,e=e._init;try{return Sr(e(t))}catch{}}return null}function wp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sr(t);case 8:return t===Ca?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vp(e){var t=gu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){o=""+a,r.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(a){o=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gi(e){e._valueTracker||(e._valueTracker=vp(e))}function fu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=gu(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cr(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tl(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yu(e,t){t=t.checked,t!=null&&Sa(e,"checked",t,!1)}function Nr(e,t){yu(e,t);var n=Ht(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tr(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tr(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function El(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Tr(e,t,n){(t!=="number"||Ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ko=Array.isArray;function Bn(e,t,n,o){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Er(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(ko(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ht(n)}}function wu(e,t){var n=Ht(t.value),o=Ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Pl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fi,bu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fi=fi||document.createElement("div"),fi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bp=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(e){bp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),So[t]=So[e]})});function xu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||So.hasOwnProperty(e)&&So[e]?(""+t).trim():t+"px"}function ku(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,s=xu(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,s):e[n]=s}}var xp=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pr(e,t){if(t){if(xp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Rr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mr=null;function Ea(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lr=null,Dn=null,Fn=null;function Rl(e){if(e=si(e)){if(typeof Lr!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Ns(t),Lr(e.stateNode,e.type,t))}}function Au(e){Dn?Fn?Fn.push(e):Fn=[e]:Dn=e}function Iu(){if(Dn){var e=Dn,t=Fn;if(Fn=Dn=null,Rl(e),t)for(e=0;e<t.length;e++)Rl(t[e])}}function ju(e,t){return e(t)}function Su(){}var Gs=!1;function Cu(e,t,n){if(Gs)return e(t,n);Gs=!0;try{return ju(e,t,n)}finally{Gs=!1,(Dn!==null||Fn!==null)&&(Su(),Iu())}}function qo(e,t){var n=e.stateNode;if(n===null)return null;var o=Ns(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Wr=!1;if(kt)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Wr=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Wr=!1}function kp(e,t,n,o,s,r,a,c,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var Co=!1,Zi=null,Xi=!1,qr=null,Ap={onError:function(e){Co=!0,Zi=e}};function Ip(e,t,n,o,s,r,a,c,u){Co=!1,Zi=null,kp.apply(Ap,arguments)}function jp(e,t,n,o,s,r,a,c,u){if(Ip.apply(this,arguments),Co){if(Co){var d=Zi;Co=!1,Zi=null}else throw Error(j(198));Xi||(Xi=!0,qr=d)}}function bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Nu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ml(e){if(bn(e)!==e)throw Error(j(188))}function Sp(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,o=t;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(o=s.return,o!==null){n=o;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return Ml(s),e;if(r===o)return Ml(s),t;r=r.sibling}throw Error(j(188))}if(n.return!==o.return)n=s,o=r;else{for(var a=!1,c=s.child;c;){if(c===n){a=!0,n=s,o=r;break}if(c===o){a=!0,o=s,n=r;break}c=c.sibling}if(!a){for(c=r.child;c;){if(c===n){a=!0,n=r,o=s;break}if(c===o){a=!0,o=r,n=s;break}c=c.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==o)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Tu(e){return e=Sp(e),e!==null?Eu(e):null}function Eu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Eu(e);if(t!==null)return t;e=e.sibling}return null}var zu=Be.unstable_scheduleCallback,Ll=Be.unstable_cancelCallback,Cp=Be.unstable_shouldYield,Np=Be.unstable_requestPaint,se=Be.unstable_now,Tp=Be.unstable_getCurrentPriorityLevel,za=Be.unstable_ImmediatePriority,Pu=Be.unstable_UserBlockingPriority,es=Be.unstable_NormalPriority,Ep=Be.unstable_LowPriority,Ru=Be.unstable_IdlePriority,Is=null,ut=null;function zp(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Is,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:Mp,Pp=Math.log,Rp=Math.LN2;function Mp(e){return e>>>=0,e===0?32:31-(Pp(e)/Rp|0)|0}var yi=64,wi=4194304;function Ao(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ts(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,s=e.suspendedLanes,r=e.pingedLanes,a=n&268435455;if(a!==0){var c=a&~s;c!==0?o=Ao(c):(r&=a,r!==0&&(o=Ao(r)))}else a=n&~s,a!==0?o=Ao(a):r!==0&&(o=Ao(r));if(o===0)return 0;if(t!==0&&t!==o&&!(t&s)&&(s=o&-o,r=t&-t,s>=r||s===16&&(r&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-nt(t),s=1<<n,o|=e[n],t&=~s;return o}function Lp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wp(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes;0<r;){var a=31-nt(r),c=1<<a,u=s[a];u===-1?(!(c&n)||c&o)&&(s[a]=Lp(c,t)):u<=t&&(e.expiredLanes|=c),r&=~c}}function Br(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mu(){var e=yi;return yi<<=1,!(yi&4194240)&&(yi=64),e}function Hs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function qp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-nt(n),r=1<<s;t[s]=0,o[s]=-1,e[s]=-1,n&=~r}}function Pa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-nt(n),s=1<<o;s&t|e[o]&t&&(e[o]|=t),n&=~s}}var H=0;function Lu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wu,Ra,qu,Bu,Du,Dr=!1,vi=[],qt=null,Bt=null,Dt=null,Bo=new Map,Do=new Map,Rt=[],Bp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wl(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Bo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(t.pointerId)}}function po(e,t,n,o,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:r,targetContainers:[s]},t!==null&&(t=si(t),t!==null&&Ra(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Dp(e,t,n,o,s){switch(t){case"focusin":return qt=po(qt,e,t,n,o,s),!0;case"dragenter":return Bt=po(Bt,e,t,n,o,s),!0;case"mouseover":return Dt=po(Dt,e,t,n,o,s),!0;case"pointerover":var r=s.pointerId;return Bo.set(r,po(Bo.get(r)||null,e,t,n,o,s)),!0;case"gotpointercapture":return r=s.pointerId,Do.set(r,po(Do.get(r)||null,e,t,n,o,s)),!0}return!1}function Fu(e){var t=on(e.target);if(t!==null){var n=bn(t);if(n!==null){if(t=n.tag,t===13){if(t=Nu(n),t!==null){e.blockedOn=t,Du(e.priority,function(){qu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Di(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fr(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Mr=o,n.target.dispatchEvent(o),Mr=null}else return t=si(n),t!==null&&Ra(t),e.blockedOn=n,!1;t.shift()}return!0}function ql(e,t,n){Di(e)&&n.delete(t)}function Fp(){Dr=!1,qt!==null&&Di(qt)&&(qt=null),Bt!==null&&Di(Bt)&&(Bt=null),Dt!==null&&Di(Dt)&&(Dt=null),Bo.forEach(ql),Do.forEach(ql)}function ho(e,t){e.blockedOn===t&&(e.blockedOn=null,Dr||(Dr=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,Fp)))}function Fo(e){function t(s){return ho(s,e)}if(0<vi.length){ho(vi[0],e);for(var n=1;n<vi.length;n++){var o=vi[n];o.blockedOn===e&&(o.blockedOn=null)}}for(qt!==null&&ho(qt,e),Bt!==null&&ho(Bt,e),Dt!==null&&ho(Dt,e),Bo.forEach(t),Do.forEach(t),n=0;n<Rt.length;n++)o=Rt[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)Fu(n),n.blockedOn===null&&Rt.shift()}var On=Ct.ReactCurrentBatchConfig,ns=!0;function Op(e,t,n,o){var s=H,r=On.transition;On.transition=null;try{H=1,Ma(e,t,n,o)}finally{H=s,On.transition=r}}function Up(e,t,n,o){var s=H,r=On.transition;On.transition=null;try{H=4,Ma(e,t,n,o)}finally{H=s,On.transition=r}}function Ma(e,t,n,o){if(ns){var s=Fr(e,t,n,o);if(s===null)nr(e,t,o,os,n),Wl(e,o);else if(Dp(s,e,t,n,o))o.stopPropagation();else if(Wl(e,o),t&4&&-1<Bp.indexOf(e)){for(;s!==null;){var r=si(s);if(r!==null&&Wu(r),r=Fr(e,t,n,o),r===null&&nr(e,t,o,os,n),r===s)break;s=r}s!==null&&o.stopPropagation()}else nr(e,t,o,null,n)}}var os=null;function Fr(e,t,n,o){if(os=null,e=Ea(o),e=on(e),e!==null)if(t=bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Nu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return os=e,null}function Ou(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tp()){case za:return 1;case Pu:return 4;case es:case Ep:return 16;case Ru:return 536870912;default:return 16}default:return 16}}var Lt=null,La=null,Fi=null;function Uu(){if(Fi)return Fi;var e,t=La,n=t.length,o,s="value"in Lt?Lt.value:Lt.textContent,r=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(o=1;o<=a&&t[n-o]===s[r-o];o++);return Fi=s.slice(e,1<o?1-o:void 0)}function Oi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bi(){return!0}function Bl(){return!1}function Fe(e){function t(n,o,s,r,a){this._reactName=n,this._targetInst=s,this.type=o,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(r):r[c]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?bi:Bl,this.isPropagationStopped=Bl,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bi)},persist:function(){},isPersistent:bi}),t}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=Fe(to),ii=ne({},to,{view:0,detail:0}),$p=Fe(ii),Ys,Qs,go,js=ne({},ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==go&&(go&&e.type==="mousemove"?(Ys=e.screenX-go.screenX,Qs=e.screenY-go.screenY):Qs=Ys=0,go=e),Ys)},movementY:function(e){return"movementY"in e?e.movementY:Qs}}),Dl=Fe(js),_p=ne({},js,{dataTransfer:0}),Gp=Fe(_p),Hp=ne({},ii,{relatedTarget:0}),Ks=Fe(Hp),Yp=ne({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),Qp=Fe(Yp),Kp=ne({},to,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vp=Fe(Kp),Jp=ne({},to,{data:0}),Fl=Fe(Jp),Zp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function th(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=eh[e])?!!t[e]:!1}function qa(){return th}var nh=ne({},ii,{key:function(e){if(e.key){var t=Zp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qa,charCode:function(e){return e.type==="keypress"?Oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oh=Fe(nh),ih=ne({},js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ol=Fe(ih),sh=ne({},ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qa}),rh=Fe(sh),ah=ne({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),lh=Fe(ah),ch=ne({},js,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uh=Fe(ch),dh=[9,13,27,32],Ba=kt&&"CompositionEvent"in window,No=null;kt&&"documentMode"in document&&(No=document.documentMode);var mh=kt&&"TextEvent"in window&&!No,$u=kt&&(!Ba||No&&8<No&&11>=No),Ul=" ",$l=!1;function _u(e,t){switch(e){case"keyup":return dh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function ph(e,t){switch(e){case"compositionend":return Gu(t);case"keypress":return t.which!==32?null:($l=!0,Ul);case"textInput":return e=t.data,e===Ul&&$l?null:e;default:return null}}function hh(e,t){if(Nn)return e==="compositionend"||!Ba&&_u(e,t)?(e=Uu(),Fi=La=Lt=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $u&&t.locale!=="ko"?null:t.data;default:return null}}var gh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _l(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gh[e.type]:t==="textarea"}function Hu(e,t,n,o){Au(o),t=is(t,"onChange"),0<t.length&&(n=new Wa("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var To=null,Oo=null;function fh(e){od(e,0)}function Ss(e){var t=zn(e);if(fu(t))return e}function yh(e,t){if(e==="change")return t}var Yu=!1;if(kt){var Vs;if(kt){var Js="oninput"in document;if(!Js){var Gl=document.createElement("div");Gl.setAttribute("oninput","return;"),Js=typeof Gl.oninput=="function"}Vs=Js}else Vs=!1;Yu=Vs&&(!document.documentMode||9<document.documentMode)}function Hl(){To&&(To.detachEvent("onpropertychange",Qu),Oo=To=null)}function Qu(e){if(e.propertyName==="value"&&Ss(Oo)){var t=[];Hu(t,Oo,e,Ea(e)),Cu(fh,t)}}function wh(e,t,n){e==="focusin"?(Hl(),To=t,Oo=n,To.attachEvent("onpropertychange",Qu)):e==="focusout"&&Hl()}function vh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ss(Oo)}function bh(e,t){if(e==="click")return Ss(t)}function xh(e,t){if(e==="input"||e==="change")return Ss(t)}function kh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:kh;function Uo(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var s=n[o];if(!kr.call(t,s)||!it(e[s],t[s]))return!1}return!0}function Yl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ql(e,t){var n=Yl(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yl(n)}}function Ku(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ku(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vu(){for(var e=window,t=Ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ji(e.document)}return t}function Da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ah(e){var t=Vu(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ku(n.ownerDocument.documentElement,n)){if(o!==null&&Da(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,r=Math.min(o.start,s);o=o.end===void 0?r:Math.min(o.end,s),!e.extend&&r>o&&(s=o,o=r,r=s),s=Ql(n,r);var a=Ql(n,o);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),r>o?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ih=kt&&"documentMode"in document&&11>=document.documentMode,Tn=null,Or=null,Eo=null,Ur=!1;function Kl(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ur||Tn==null||Tn!==Ji(o)||(o=Tn,"selectionStart"in o&&Da(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Eo&&Uo(Eo,o)||(Eo=o,o=is(Or,"onSelect"),0<o.length&&(t=new Wa("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Tn)))}function xi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:xi("Animation","AnimationEnd"),animationiteration:xi("Animation","AnimationIteration"),animationstart:xi("Animation","AnimationStart"),transitionend:xi("Transition","TransitionEnd")},Zs={},Ju={};kt&&(Ju=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function Cs(e){if(Zs[e])return Zs[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ju)return Zs[e]=t[n];return e}var Zu=Cs("animationend"),Xu=Cs("animationiteration"),ed=Cs("animationstart"),td=Cs("transitionend"),nd=new Map,Vl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){nd.set(e,t),vn(t,[e])}for(var Xs=0;Xs<Vl.length;Xs++){var er=Vl[Xs],jh=er.toLowerCase(),Sh=er[0].toUpperCase()+er.slice(1);Qt(jh,"on"+Sh)}Qt(Zu,"onAnimationEnd");Qt(Xu,"onAnimationIteration");Qt(ed,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(td,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ch=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function Jl(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,jp(o,t,void 0,e),e.currentTarget=null}function od(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],s=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var a=o.length-1;0<=a;a--){var c=o[a],u=c.instance,d=c.currentTarget;if(c=c.listener,u!==r&&s.isPropagationStopped())break e;Jl(s,c,d),r=u}else for(a=0;a<o.length;a++){if(c=o[a],u=c.instance,d=c.currentTarget,c=c.listener,u!==r&&s.isPropagationStopped())break e;Jl(s,c,d),r=u}}}if(Xi)throw e=qr,Xi=!1,qr=null,e}function V(e,t){var n=t[Yr];n===void 0&&(n=t[Yr]=new Set);var o=e+"__bubble";n.has(o)||(id(t,e,2,!1),n.add(o))}function tr(e,t,n){var o=0;t&&(o|=4),id(n,e,o,t)}var ki="_reactListening"+Math.random().toString(36).slice(2);function $o(e){if(!e[ki]){e[ki]=!0,du.forEach(function(n){n!=="selectionchange"&&(Ch.has(n)||tr(n,!1,e),tr(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ki]||(t[ki]=!0,tr("selectionchange",!1,t))}}function id(e,t,n,o){switch(Ou(t)){case 1:var s=Op;break;case 4:s=Up;break;default:s=Ma}n=s.bind(null,t,n,e),s=void 0,!Wr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function nr(e,t,n,o,s){var r=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var a=o.tag;if(a===3||a===4){var c=o.stateNode.containerInfo;if(c===s||c.nodeType===8&&c.parentNode===s)break;if(a===4)for(a=o.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;a=a.return}for(;c!==null;){if(a=on(c),a===null)return;if(u=a.tag,u===5||u===6){o=r=a;continue e}c=c.parentNode}}o=o.return}Cu(function(){var d=r,m=Ea(n),h=[];e:{var g=nd.get(e);if(g!==void 0){var p=Wa,v=e;switch(e){case"keypress":if(Oi(n)===0)break e;case"keydown":case"keyup":p=oh;break;case"focusin":v="focus",p=Ks;break;case"focusout":v="blur",p=Ks;break;case"beforeblur":case"afterblur":p=Ks;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Dl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=rh;break;case Zu:case Xu:case ed:p=Qp;break;case td:p=lh;break;case"scroll":p=$p;break;case"wheel":p=uh;break;case"copy":case"cut":case"paste":p=Vp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ol}var x=(t&4)!==0,A=!x&&e==="scroll",y=x?g!==null?g+"Capture":null:g;x=[];for(var f=d,w;f!==null;){w=f;var k=w.stateNode;if(w.tag===5&&k!==null&&(w=k,y!==null&&(k=qo(f,y),k!=null&&x.push(_o(f,k,w)))),A)break;f=f.return}0<x.length&&(g=new p(g,v,null,n,m),h.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",g&&n!==Mr&&(v=n.relatedTarget||n.fromElement)&&(on(v)||v[At]))break e;if((p||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=d,v=v?on(v):null,v!==null&&(A=bn(v),v!==A||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=d),p!==v)){if(x=Dl,k="onMouseLeave",y="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ol,k="onPointerLeave",y="onPointerEnter",f="pointer"),A=p==null?g:zn(p),w=v==null?g:zn(v),g=new x(k,f+"leave",p,n,m),g.target=A,g.relatedTarget=w,k=null,on(m)===d&&(x=new x(y,f+"enter",v,n,m),x.target=w,x.relatedTarget=A,k=x),A=k,p&&v)t:{for(x=p,y=v,f=0,w=x;w;w=kn(w))f++;for(w=0,k=y;k;k=kn(k))w++;for(;0<f-w;)x=kn(x),f--;for(;0<w-f;)y=kn(y),w--;for(;f--;){if(x===y||y!==null&&x===y.alternate)break t;x=kn(x),y=kn(y)}x=null}else x=null;p!==null&&Zl(h,g,p,x,!1),v!==null&&A!==null&&Zl(h,A,v,x,!0)}}e:{if(g=d?zn(d):window,p=g.nodeName&&g.nodeName.toLowerCase(),p==="select"||p==="input"&&g.type==="file")var S=yh;else if(_l(g))if(Yu)S=xh;else{S=vh;var T=wh}else(p=g.nodeName)&&p.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=bh);if(S&&(S=S(e,d))){Hu(h,S,n,m);break e}T&&T(e,g,d),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&Tr(g,"number",g.value)}switch(T=d?zn(d):window,e){case"focusin":(_l(T)||T.contentEditable==="true")&&(Tn=T,Or=d,Eo=null);break;case"focusout":Eo=Or=Tn=null;break;case"mousedown":Ur=!0;break;case"contextmenu":case"mouseup":case"dragend":Ur=!1,Kl(h,n,m);break;case"selectionchange":if(Ih)break;case"keydown":case"keyup":Kl(h,n,m)}var N;if(Ba)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Nn?_u(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&($u&&n.locale!=="ko"&&(Nn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Nn&&(N=Uu()):(Lt=m,La="value"in Lt?Lt.value:Lt.textContent,Nn=!0)),T=is(d,R),0<T.length&&(R=new Fl(R,e,null,n,m),h.push({event:R,listeners:T}),N?R.data=N:(N=Gu(n),N!==null&&(R.data=N)))),(N=mh?ph(e,n):hh(e,n))&&(d=is(d,"onBeforeInput"),0<d.length&&(m=new Fl("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:d}),m.data=N))}od(h,t)})}function _o(e,t,n){return{instance:e,listener:t,currentTarget:n}}function is(e,t){for(var n=t+"Capture",o=[];e!==null;){var s=e,r=s.stateNode;s.tag===5&&r!==null&&(s=r,r=qo(e,n),r!=null&&o.unshift(_o(e,r,s)),r=qo(e,t),r!=null&&o.push(_o(e,r,s))),e=e.return}return o}function kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zl(e,t,n,o,s){for(var r=t._reactName,a=[];n!==null&&n!==o;){var c=n,u=c.alternate,d=c.stateNode;if(u!==null&&u===o)break;c.tag===5&&d!==null&&(c=d,s?(u=qo(n,r),u!=null&&a.unshift(_o(n,u,c))):s||(u=qo(n,r),u!=null&&a.push(_o(n,u,c)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Nh=/\r\n?/g,Th=/\u0000|\uFFFD/g;function Xl(e){return(typeof e=="string"?e:""+e).replace(Nh,`
`).replace(Th,"")}function Ai(e,t,n){if(t=Xl(t),Xl(e)!==t&&n)throw Error(j(425))}function ss(){}var $r=null,_r=null;function Gr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hr=typeof setTimeout=="function"?setTimeout:void 0,Eh=typeof clearTimeout=="function"?clearTimeout:void 0,ec=typeof Promise=="function"?Promise:void 0,zh=typeof queueMicrotask=="function"?queueMicrotask:typeof ec<"u"?function(e){return ec.resolve(null).then(e).catch(Ph)}:Hr;function Ph(e){setTimeout(function(){throw e})}function or(e,t){var n=t,o=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(o===0){e.removeChild(s),Fo(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=s}while(n);Fo(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var no=Math.random().toString(36).slice(2),ct="__reactFiber$"+no,Go="__reactProps$"+no,At="__reactContainer$"+no,Yr="__reactEvents$"+no,Rh="__reactListeners$"+no,Mh="__reactHandles$"+no;function on(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=tc(e);e!==null;){if(n=e[ct])return n;e=tc(e)}return t}e=n,n=e.parentNode}return null}function si(e){return e=e[ct]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Ns(e){return e[Go]||null}var Qr=[],Pn=-1;function Kt(e){return{current:e}}function J(e){0>Pn||(e.current=Qr[Pn],Qr[Pn]=null,Pn--)}function K(e,t){Pn++,Qr[Pn]=e.current,e.current=t}var Yt={},xe=Kt(Yt),Pe=Kt(!1),mn=Yt;function Yn(e,t){var n=e.type.contextTypes;if(!n)return Yt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},r;for(r in n)s[r]=t[r];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Re(e){return e=e.childContextTypes,e!=null}function rs(){J(Pe),J(xe)}function nc(e,t,n){if(xe.current!==Yt)throw Error(j(168));K(xe,t),K(Pe,n)}function sd(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var s in o)if(!(s in t))throw Error(j(108,wp(e)||"Unknown",s));return ne({},n,o)}function as(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yt,mn=xe.current,K(xe,e),K(Pe,Pe.current),!0}function oc(e,t,n){var o=e.stateNode;if(!o)throw Error(j(169));n?(e=sd(e,t,mn),o.__reactInternalMemoizedMergedChildContext=e,J(Pe),J(xe),K(xe,e)):J(Pe),K(Pe,n)}var yt=null,Ts=!1,ir=!1;function rd(e){yt===null?yt=[e]:yt.push(e)}function Lh(e){Ts=!0,rd(e)}function Vt(){if(!ir&&yt!==null){ir=!0;var e=0,t=H;try{var n=yt;for(H=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}yt=null,Ts=!1}catch(s){throw yt!==null&&(yt=yt.slice(e+1)),zu(za,Vt),s}finally{H=t,ir=!1}}return null}var Rn=[],Mn=0,ls=null,cs=0,Ue=[],$e=0,pn=null,wt=1,vt="";function en(e,t){Rn[Mn++]=cs,Rn[Mn++]=ls,ls=e,cs=t}function ad(e,t,n){Ue[$e++]=wt,Ue[$e++]=vt,Ue[$e++]=pn,pn=e;var o=wt;e=vt;var s=32-nt(o)-1;o&=~(1<<s),n+=1;var r=32-nt(t)+s;if(30<r){var a=s-s%5;r=(o&(1<<a)-1).toString(32),o>>=a,s-=a,wt=1<<32-nt(t)+s|n<<s|o,vt=r+e}else wt=1<<r|n<<s|o,vt=e}function Fa(e){e.return!==null&&(en(e,1),ad(e,1,0))}function Oa(e){for(;e===ls;)ls=Rn[--Mn],Rn[Mn]=null,cs=Rn[--Mn],Rn[Mn]=null;for(;e===pn;)pn=Ue[--$e],Ue[$e]=null,vt=Ue[--$e],Ue[$e]=null,wt=Ue[--$e],Ue[$e]=null}var qe=null,We=null,Z=!1,tt=null;function ld(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ic(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,We=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pn!==null?{id:wt,overflow:vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,We=null,!0):!1;default:return!1}}function Kr(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vr(e){if(Z){var t=We;if(t){var n=t;if(!ic(e,t)){if(Kr(e))throw Error(j(418));t=Ft(n.nextSibling);var o=qe;t&&ic(e,t)?ld(o,n):(e.flags=e.flags&-4097|2,Z=!1,qe=e)}}else{if(Kr(e))throw Error(j(418));e.flags=e.flags&-4097|2,Z=!1,qe=e}}}function sc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Ii(e){if(e!==qe)return!1;if(!Z)return sc(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gr(e.type,e.memoizedProps)),t&&(t=We)){if(Kr(e))throw cd(),Error(j(418));for(;t;)ld(e,t),t=Ft(t.nextSibling)}if(sc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=qe?Ft(e.stateNode.nextSibling):null;return!0}function cd(){for(var e=We;e;)e=Ft(e.nextSibling)}function Qn(){We=qe=null,Z=!1}function Ua(e){tt===null?tt=[e]:tt.push(e)}var Wh=Ct.ReactCurrentBatchConfig;function fo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var o=n.stateNode}if(!o)throw Error(j(147,e));var s=o,r=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===r?t.ref:(t=function(a){var c=s.refs;a===null?delete c[r]:c[r]=a},t._stringRef=r,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function ji(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rc(e){var t=e._init;return t(e._payload)}function ud(e){function t(y,f){if(e){var w=y.deletions;w===null?(y.deletions=[f],y.flags|=16):w.push(f)}}function n(y,f){if(!e)return null;for(;f!==null;)t(y,f),f=f.sibling;return null}function o(y,f){for(y=new Map;f!==null;)f.key!==null?y.set(f.key,f):y.set(f.index,f),f=f.sibling;return y}function s(y,f){return y=_t(y,f),y.index=0,y.sibling=null,y}function r(y,f,w){return y.index=w,e?(w=y.alternate,w!==null?(w=w.index,w<f?(y.flags|=2,f):w):(y.flags|=2,f)):(y.flags|=1048576,f)}function a(y){return e&&y.alternate===null&&(y.flags|=2),y}function c(y,f,w,k){return f===null||f.tag!==6?(f=dr(w,y.mode,k),f.return=y,f):(f=s(f,w),f.return=y,f)}function u(y,f,w,k){var S=w.type;return S===Cn?m(y,f,w.props.children,k,w.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zt&&rc(S)===f.type)?(k=s(f,w.props),k.ref=fo(y,f,w),k.return=y,k):(k=Qi(w.type,w.key,w.props,null,y.mode,k),k.ref=fo(y,f,w),k.return=y,k)}function d(y,f,w,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==w.containerInfo||f.stateNode.implementation!==w.implementation?(f=mr(w,y.mode,k),f.return=y,f):(f=s(f,w.children||[]),f.return=y,f)}function m(y,f,w,k,S){return f===null||f.tag!==7?(f=cn(w,y.mode,k,S),f.return=y,f):(f=s(f,w),f.return=y,f)}function h(y,f,w){if(typeof f=="string"&&f!==""||typeof f=="number")return f=dr(""+f,y.mode,w),f.return=y,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case hi:return w=Qi(f.type,f.key,f.props,null,y.mode,w),w.ref=fo(y,null,f),w.return=y,w;case Sn:return f=mr(f,y.mode,w),f.return=y,f;case zt:var k=f._init;return h(y,k(f._payload),w)}if(ko(f)||uo(f))return f=cn(f,y.mode,w,null),f.return=y,f;ji(y,f)}return null}function g(y,f,w,k){var S=f!==null?f.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return S!==null?null:c(y,f,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case hi:return w.key===S?u(y,f,w,k):null;case Sn:return w.key===S?d(y,f,w,k):null;case zt:return S=w._init,g(y,f,S(w._payload),k)}if(ko(w)||uo(w))return S!==null?null:m(y,f,w,k,null);ji(y,w)}return null}function p(y,f,w,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return y=y.get(w)||null,c(f,y,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case hi:return y=y.get(k.key===null?w:k.key)||null,u(f,y,k,S);case Sn:return y=y.get(k.key===null?w:k.key)||null,d(f,y,k,S);case zt:var T=k._init;return p(y,f,w,T(k._payload),S)}if(ko(k)||uo(k))return y=y.get(w)||null,m(f,y,k,S,null);ji(f,k)}return null}function v(y,f,w,k){for(var S=null,T=null,N=f,R=f=0,C=null;N!==null&&R<w.length;R++){N.index>R?(C=N,N=null):C=N.sibling;var I=g(y,N,w[R],k);if(I===null){N===null&&(N=C);break}e&&N&&I.alternate===null&&t(y,N),f=r(I,f,R),T===null?S=I:T.sibling=I,T=I,N=C}if(R===w.length)return n(y,N),Z&&en(y,R),S;if(N===null){for(;R<w.length;R++)N=h(y,w[R],k),N!==null&&(f=r(N,f,R),T===null?S=N:T.sibling=N,T=N);return Z&&en(y,R),S}for(N=o(y,N);R<w.length;R++)C=p(N,y,R,w[R],k),C!==null&&(e&&C.alternate!==null&&N.delete(C.key===null?R:C.key),f=r(C,f,R),T===null?S=C:T.sibling=C,T=C);return e&&N.forEach(function(M){return t(y,M)}),Z&&en(y,R),S}function x(y,f,w,k){var S=uo(w);if(typeof S!="function")throw Error(j(150));if(w=S.call(w),w==null)throw Error(j(151));for(var T=S=null,N=f,R=f=0,C=null,I=w.next();N!==null&&!I.done;R++,I=w.next()){N.index>R?(C=N,N=null):C=N.sibling;var M=g(y,N,I.value,k);if(M===null){N===null&&(N=C);break}e&&N&&M.alternate===null&&t(y,N),f=r(M,f,R),T===null?S=M:T.sibling=M,T=M,N=C}if(I.done)return n(y,N),Z&&en(y,R),S;if(N===null){for(;!I.done;R++,I=w.next())I=h(y,I.value,k),I!==null&&(f=r(I,f,R),T===null?S=I:T.sibling=I,T=I);return Z&&en(y,R),S}for(N=o(y,N);!I.done;R++,I=w.next())I=p(N,y,R,I.value,k),I!==null&&(e&&I.alternate!==null&&N.delete(I.key===null?R:I.key),f=r(I,f,R),T===null?S=I:T.sibling=I,T=I);return e&&N.forEach(function(_){return t(y,_)}),Z&&en(y,R),S}function A(y,f,w,k){if(typeof w=="object"&&w!==null&&w.type===Cn&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case hi:e:{for(var S=w.key,T=f;T!==null;){if(T.key===S){if(S=w.type,S===Cn){if(T.tag===7){n(y,T.sibling),f=s(T,w.props.children),f.return=y,y=f;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zt&&rc(S)===T.type){n(y,T.sibling),f=s(T,w.props),f.ref=fo(y,T,w),f.return=y,y=f;break e}n(y,T);break}else t(y,T);T=T.sibling}w.type===Cn?(f=cn(w.props.children,y.mode,k,w.key),f.return=y,y=f):(k=Qi(w.type,w.key,w.props,null,y.mode,k),k.ref=fo(y,f,w),k.return=y,y=k)}return a(y);case Sn:e:{for(T=w.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===w.containerInfo&&f.stateNode.implementation===w.implementation){n(y,f.sibling),f=s(f,w.children||[]),f.return=y,y=f;break e}else{n(y,f);break}else t(y,f);f=f.sibling}f=mr(w,y.mode,k),f.return=y,y=f}return a(y);case zt:return T=w._init,A(y,f,T(w._payload),k)}if(ko(w))return v(y,f,w,k);if(uo(w))return x(y,f,w,k);ji(y,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,f!==null&&f.tag===6?(n(y,f.sibling),f=s(f,w),f.return=y,y=f):(n(y,f),f=dr(w,y.mode,k),f.return=y,y=f),a(y)):n(y,f)}return A}var Kn=ud(!0),dd=ud(!1),us=Kt(null),ds=null,Ln=null,$a=null;function _a(){$a=Ln=ds=null}function Ga(e){var t=us.current;J(us),e._currentValue=t}function Jr(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){ds=e,$a=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if($a!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(ds===null)throw Error(j(308));Ln=e,ds.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var sn=null;function Ha(e){sn===null?sn=[e]:sn.push(e)}function md(e,t,n,o){var s=t.interleaved;return s===null?(n.next=n,Ha(t)):(n.next=s.next,s.next=n),t.interleaved=n,It(e,o)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function Ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,$&2){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,It(e,n)}return s=o.interleaved,s===null?(t.next=t,Ha(o)):(t.next=s.next,s.next=t),o.interleaved=t,It(e,n)}function Ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Pa(e,n)}}function ac(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?s=r=a:r=r.next=a,n=n.next}while(n!==null);r===null?s=r=t:r=r.next=t}else s=r=t;n={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ms(e,t,n,o){var s=e.updateQueue;Pt=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var u=c,d=u.next;u.next=null,a===null?r=d:a.next=d,a=u;var m=e.alternate;m!==null&&(m=m.updateQueue,c=m.lastBaseUpdate,c!==a&&(c===null?m.firstBaseUpdate=d:c.next=d,m.lastBaseUpdate=u))}if(r!==null){var h=s.baseState;a=0,m=d=u=null,c=r;do{var g=c.lane,p=c.eventTime;if((o&g)===g){m!==null&&(m=m.next={eventTime:p,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var v=e,x=c;switch(g=t,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(p,h,g);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,g=typeof v=="function"?v.call(p,h,g):v,g==null)break e;h=ne({},h,g);break e;case 2:Pt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[c]:g.push(c))}else p={eventTime:p,lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},m===null?(d=m=p,u=h):m=m.next=p,a|=g;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;g=c,c=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(m===null&&(u=h),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=m,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else r===null&&(s.shared.lanes=0);gn|=a,e.lanes=a,e.memoizedState=h}}function lc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=n,typeof s!="function")throw Error(j(191,s));s.call(o)}}}var ri={},dt=Kt(ri),Ho=Kt(ri),Yo=Kt(ri);function rn(e){if(e===ri)throw Error(j(174));return e}function Qa(e,t){switch(K(Yo,t),K(Ho,e),K(dt,ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zr(t,e)}J(dt),K(dt,t)}function Vn(){J(dt),J(Ho),J(Yo)}function hd(e){rn(Yo.current);var t=rn(dt.current),n=zr(t,e.type);t!==n&&(K(Ho,e),K(dt,n))}function Ka(e){Ho.current===e&&(J(dt),J(Ho))}var ee=Kt(0);function ps(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sr=[];function Va(){for(var e=0;e<sr.length;e++)sr[e]._workInProgressVersionPrimary=null;sr.length=0}var $i=Ct.ReactCurrentDispatcher,rr=Ct.ReactCurrentBatchConfig,hn=0,te=null,ce=null,de=null,hs=!1,zo=!1,Qo=0,qh=0;function ye(){throw Error(j(321))}function Ja(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function Za(e,t,n,o,s,r){if(hn=r,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$i.current=e===null||e.memoizedState===null?Oh:Uh,e=n(o,s),zo){r=0;do{if(zo=!1,Qo=0,25<=r)throw Error(j(301));r+=1,de=ce=null,t.updateQueue=null,$i.current=$h,e=n(o,s)}while(zo)}if($i.current=gs,t=ce!==null&&ce.next!==null,hn=0,de=ce=te=null,hs=!1,t)throw Error(j(300));return e}function Xa(){var e=Qo!==0;return Qo=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?te.memoizedState=de=e:de=de.next=e,de}function Ye(){if(ce===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=de===null?te.memoizedState:de.next;if(t!==null)de=t,ce=e;else{if(e===null)throw Error(j(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},de===null?te.memoizedState=de=e:de=de.next=e}return de}function Ko(e,t){return typeof t=="function"?t(e):t}function ar(e){var t=Ye(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var o=ce,s=o.baseQueue,r=n.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}o.baseQueue=s=r,n.pending=null}if(s!==null){r=s.next,o=o.baseState;var c=a=null,u=null,d=r;do{var m=d.lane;if((hn&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var h={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(c=u=h,a=o):u=u.next=h,te.lanes|=m,gn|=m}d=d.next}while(d!==null&&d!==r);u===null?a=o:u.next=c,it(o,t.memoizedState)||(ze=!0),t.memoizedState=o,t.baseState=a,t.baseQueue=u,n.lastRenderedState=o}if(e=n.interleaved,e!==null){s=e;do r=s.lane,te.lanes|=r,gn|=r,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function lr(e){var t=Ye(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var o=n.dispatch,s=n.pending,r=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do r=e(r,a.action),a=a.next;while(a!==s);it(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,o]}function gd(){}function fd(e,t){var n=te,o=Ye(),s=t(),r=!it(o.memoizedState,s);if(r&&(o.memoizedState=s,ze=!0),o=o.queue,el(vd.bind(null,n,o,e),[e]),o.getSnapshot!==t||r||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Vo(9,wd.bind(null,n,o,s,t),void 0,null),me===null)throw Error(j(349));hn&30||yd(n,t,s)}return s}function yd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wd(e,t,n,o){t.value=n,t.getSnapshot=o,bd(t)&&xd(e)}function vd(e,t,n){return n(function(){bd(t)&&xd(e)})}function bd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function xd(e){var t=It(e,1);t!==null&&ot(t,e,1,-1)}function cc(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:e},t.queue=e,e=e.dispatch=Fh.bind(null,te,e),[t.memoizedState,e]}function Vo(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function kd(){return Ye().memoizedState}function _i(e,t,n,o){var s=lt();te.flags|=e,s.memoizedState=Vo(1|t,n,void 0,o===void 0?null:o)}function Es(e,t,n,o){var s=Ye();o=o===void 0?null:o;var r=void 0;if(ce!==null){var a=ce.memoizedState;if(r=a.destroy,o!==null&&Ja(o,a.deps)){s.memoizedState=Vo(t,n,r,o);return}}te.flags|=e,s.memoizedState=Vo(1|t,n,r,o)}function uc(e,t){return _i(8390656,8,e,t)}function el(e,t){return Es(2048,8,e,t)}function Ad(e,t){return Es(4,2,e,t)}function Id(e,t){return Es(4,4,e,t)}function jd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sd(e,t,n){return n=n!=null?n.concat([e]):null,Es(4,4,jd.bind(null,t,e),n)}function tl(){}function Cd(e,t){var n=Ye();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Ja(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Nd(e,t){var n=Ye();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Ja(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Td(e,t,n){return hn&21?(it(n,t)||(n=Mu(),te.lanes|=n,gn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function Bh(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var o=rr.transition;rr.transition={};try{e(!1),t()}finally{H=n,rr.transition=o}}function Ed(){return Ye().memoizedState}function Dh(e,t,n){var o=$t(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},zd(e))Pd(t,n);else if(n=md(e,t,n,o),n!==null){var s=je();ot(n,e,o,s),Rd(n,t,o)}}function Fh(e,t,n){var o=$t(e),s={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(zd(e))Pd(t,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var a=t.lastRenderedState,c=r(a,n);if(s.hasEagerState=!0,s.eagerState=c,it(c,a)){var u=t.interleaved;u===null?(s.next=s,Ha(t)):(s.next=u.next,u.next=s),t.interleaved=s;return}}catch{}finally{}n=md(e,t,s,o),n!==null&&(s=je(),ot(n,e,o,s),Rd(n,t,o))}}function zd(e){var t=e.alternate;return e===te||t!==null&&t===te}function Pd(e,t){zo=hs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rd(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Pa(e,n)}}var gs={readContext:He,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},Oh={readContext:He,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:uc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_i(4194308,4,jd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){return _i(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=lt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Dh.bind(null,te,e),[o.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:cc,useDebugValue:tl,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=cc(!1),t=e[0];return e=Bh.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=te,s=lt();if(Z){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),me===null)throw Error(j(349));hn&30||yd(o,t,n)}s.memoizedState=n;var r={value:n,getSnapshot:t};return s.queue=r,uc(vd.bind(null,o,r,e),[e]),o.flags|=2048,Vo(9,wd.bind(null,o,r,n,t),void 0,null),n},useId:function(){var e=lt(),t=me.identifierPrefix;if(Z){var n=vt,o=wt;n=(o&~(1<<32-nt(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Uh={readContext:He,useCallback:Cd,useContext:He,useEffect:el,useImperativeHandle:Sd,useInsertionEffect:Ad,useLayoutEffect:Id,useMemo:Nd,useReducer:ar,useRef:kd,useState:function(){return ar(Ko)},useDebugValue:tl,useDeferredValue:function(e){var t=Ye();return Td(t,ce.memoizedState,e)},useTransition:function(){var e=ar(Ko)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:gd,useSyncExternalStore:fd,useId:Ed,unstable_isNewReconciler:!1},$h={readContext:He,useCallback:Cd,useContext:He,useEffect:el,useImperativeHandle:Sd,useInsertionEffect:Ad,useLayoutEffect:Id,useMemo:Nd,useReducer:lr,useRef:kd,useState:function(){return lr(Ko)},useDebugValue:tl,useDeferredValue:function(e){var t=Ye();return ce===null?t.memoizedState=e:Td(t,ce.memoizedState,e)},useTransition:function(){var e=lr(Ko)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:gd,useSyncExternalStore:fd,useId:Ed,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Zr(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zs={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=je(),s=$t(e),r=bt(o,s);r.payload=t,n!=null&&(r.callback=n),t=Ot(e,r,s),t!==null&&(ot(t,e,s,o),Ui(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=je(),s=$t(e),r=bt(o,s);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Ot(e,r,s),t!==null&&(ot(t,e,s,o),Ui(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),o=$t(e),s=bt(n,o);s.tag=2,t!=null&&(s.callback=t),t=Ot(e,s,o),t!==null&&(ot(t,e,o,n),Ui(t,e,o))}};function dc(e,t,n,o,s,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,a):t.prototype&&t.prototype.isPureReactComponent?!Uo(n,o)||!Uo(s,r):!0}function Md(e,t,n){var o=!1,s=Yt,r=t.contextType;return typeof r=="object"&&r!==null?r=He(r):(s=Re(t)?mn:xe.current,o=t.contextTypes,r=(o=o!=null)?Yn(e,s):Yt),t=new t(n,r),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zs,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=r),t}function mc(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&zs.enqueueReplaceState(t,t.state,null)}function Xr(e,t,n,o){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Ya(e);var r=t.contextType;typeof r=="object"&&r!==null?s.context=He(r):(r=Re(t)?mn:xe.current,s.context=Yn(e,r)),s.state=e.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(Zr(e,t,r,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&zs.enqueueReplaceState(s,s.state,null),ms(e,n,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Jn(e,t){try{var n="",o=t;do n+=yp(o),o=o.return;while(o);var s=n}catch(r){s=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:t,stack:s,digest:null}}function cr(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ea(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _h=typeof WeakMap=="function"?WeakMap:Map;function Ld(e,t,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){ys||(ys=!0,ua=o),ea(e,t)},n}function Wd(e,t,n){n=bt(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;n.payload=function(){return o(s)},n.callback=function(){ea(e,t)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){ea(e,t),typeof o!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function pc(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new _h;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(n)||(s.add(n),e=ig.bind(null,e,t,n),t.then(e,e))}function hc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gc(e,t,n,o,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bt(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e)}var Gh=Ct.ReactCurrentOwner,ze=!1;function Ie(e,t,n,o){t.child=e===null?dd(t,null,n,o):Kn(t,e.child,n,o)}function fc(e,t,n,o,s){n=n.render;var r=t.ref;return Un(t,s),o=Za(e,t,n,o,r,s),n=Xa(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,jt(e,t,s)):(Z&&n&&Fa(t),t.flags|=1,Ie(e,t,o,s),t.child)}function yc(e,t,n,o,s){if(e===null){var r=n.type;return typeof r=="function"&&!cl(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=r,qd(e,t,r,o,s)):(e=Qi(n.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!(e.lanes&s)){var a=r.memoizedProps;if(n=n.compare,n=n!==null?n:Uo,n(a,o)&&e.ref===t.ref)return jt(e,t,s)}return t.flags|=1,e=_t(r,o),e.ref=t.ref,e.return=t,t.child=e}function qd(e,t,n,o,s){if(e!==null){var r=e.memoizedProps;if(Uo(r,o)&&e.ref===t.ref)if(ze=!1,t.pendingProps=o=r,(e.lanes&s)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,jt(e,t,s)}return ta(e,t,n,o,s)}function Bd(e,t,n){var o=t.pendingProps,s=o.children,r=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(qn,Le),Le|=n;else{if(!(n&1073741824))return e=r!==null?r.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(qn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=r!==null?r.baseLanes:n,K(qn,Le),Le|=o}else r!==null?(o=r.baseLanes|n,t.memoizedState=null):o=n,K(qn,Le),Le|=o;return Ie(e,t,s,n),t.child}function Dd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ta(e,t,n,o,s){var r=Re(n)?mn:xe.current;return r=Yn(t,r),Un(t,s),n=Za(e,t,n,o,r,s),o=Xa(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,jt(e,t,s)):(Z&&o&&Fa(t),t.flags|=1,Ie(e,t,n,s),t.child)}function wc(e,t,n,o,s){if(Re(n)){var r=!0;as(t)}else r=!1;if(Un(t,s),t.stateNode===null)Gi(e,t),Md(t,n,o),Xr(t,n,o,s),o=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=He(d):(d=Re(n)?mn:xe.current,d=Yn(t,d));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==o||u!==d)&&mc(t,a,o,d),Pt=!1;var g=t.memoizedState;a.state=g,ms(t,o,a,s),u=t.memoizedState,c!==o||g!==u||Pe.current||Pt?(typeof m=="function"&&(Zr(t,n,m,o),u=t.memoizedState),(c=Pt||dc(t,n,c,o,g,u,d))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=u),a.props=o,a.state=u,a.context=d,o=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{a=t.stateNode,pd(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:Xe(t.type,c),a.props=d,h=t.pendingProps,g=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=He(u):(u=Re(n)?mn:xe.current,u=Yn(t,u));var p=n.getDerivedStateFromProps;(m=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==h||g!==u)&&mc(t,a,o,u),Pt=!1,g=t.memoizedState,a.state=g,ms(t,o,a,s);var v=t.memoizedState;c!==h||g!==v||Pe.current||Pt?(typeof p=="function"&&(Zr(t,n,p,o),v=t.memoizedState),(d=Pt||dc(t,n,d,o,g,v,u)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(o,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(o,v,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=v),a.props=o,a.state=v,a.context=u,o=d):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),o=!1)}return na(e,t,n,o,r,s)}function na(e,t,n,o,s,r){Dd(e,t);var a=(t.flags&128)!==0;if(!o&&!a)return s&&oc(t,n,!1),jt(e,t,r);o=t.stateNode,Gh.current=t;var c=a&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&a?(t.child=Kn(t,e.child,null,r),t.child=Kn(t,null,c,r)):Ie(e,t,c,r),t.memoizedState=o.state,s&&oc(t,n,!0),t.child}function Fd(e){var t=e.stateNode;t.pendingContext?nc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nc(e,t.context,!1),Qa(e,t.containerInfo)}function vc(e,t,n,o,s){return Qn(),Ua(s),t.flags|=256,Ie(e,t,n,o),t.child}var oa={dehydrated:null,treeContext:null,retryLane:0};function ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function Od(e,t,n){var o=t.pendingProps,s=ee.current,r=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(s&2)!==0),c?(r=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),K(ee,s&1),e===null)return Vr(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=o.children,e=o.fallback,r?(o=t.mode,r=t.child,a={mode:"hidden",children:a},!(o&1)&&r!==null?(r.childLanes=0,r.pendingProps=a):r=Ms(a,o,0,null),e=cn(e,o,n,null),r.return=t,e.return=t,r.sibling=e,t.child=r,t.child.memoizedState=ia(n),t.memoizedState=oa,e):nl(t,a));if(s=e.memoizedState,s!==null&&(c=s.dehydrated,c!==null))return Hh(e,t,a,o,c,s,n);if(r){r=o.fallback,a=t.mode,s=e.child,c=s.sibling;var u={mode:"hidden",children:o.children};return!(a&1)&&t.child!==s?(o=t.child,o.childLanes=0,o.pendingProps=u,t.deletions=null):(o=_t(s,u),o.subtreeFlags=s.subtreeFlags&14680064),c!==null?r=_t(c,r):(r=cn(r,a,n,null),r.flags|=2),r.return=t,o.return=t,o.sibling=r,t.child=o,o=r,r=t.child,a=e.child.memoizedState,a=a===null?ia(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},r.memoizedState=a,r.childLanes=e.childLanes&~n,t.memoizedState=oa,o}return r=e.child,e=r.sibling,o=_t(r,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function nl(e,t){return t=Ms({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Si(e,t,n,o){return o!==null&&Ua(o),Kn(t,e.child,null,n),e=nl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hh(e,t,n,o,s,r,a){if(n)return t.flags&256?(t.flags&=-257,o=cr(Error(j(422))),Si(e,t,a,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(r=o.fallback,s=t.mode,o=Ms({mode:"visible",children:o.children},s,0,null),r=cn(r,s,a,null),r.flags|=2,o.return=t,r.return=t,o.sibling=r,t.child=o,t.mode&1&&Kn(t,e.child,null,a),t.child.memoizedState=ia(a),t.memoizedState=oa,r);if(!(t.mode&1))return Si(e,t,a,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var c=o.dgst;return o=c,r=Error(j(419)),o=cr(r,o,void 0),Si(e,t,a,o)}if(c=(a&e.childLanes)!==0,ze||c){if(o=me,o!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|a)?0:s,s!==0&&s!==r.retryLane&&(r.retryLane=s,It(e,s),ot(o,e,s,-1))}return ll(),o=cr(Error(j(421))),Si(e,t,a,o)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=sg.bind(null,e),s._reactRetry=t,null):(e=r.treeContext,We=Ft(s.nextSibling),qe=t,Z=!0,tt=null,e!==null&&(Ue[$e++]=wt,Ue[$e++]=vt,Ue[$e++]=pn,wt=e.id,vt=e.overflow,pn=t),t=nl(t,o.children),t.flags|=4096,t)}function bc(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Jr(e.return,t,n)}function ur(e,t,n,o,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=o,r.tail=n,r.tailMode=s)}function Ud(e,t,n){var o=t.pendingProps,s=o.revealOrder,r=o.tail;if(Ie(e,t,o.children,n),o=ee.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,n,t);else if(e.tag===19)bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(K(ee,o),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ps(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),ur(t,!1,s,n,r);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ps(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}ur(t,!0,n,null,r);break;case"together":ur(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=_t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yh(e,t,n){switch(t.tag){case 3:Fd(t),Qn();break;case 5:hd(t);break;case 1:Re(t.type)&&as(t);break;case 4:Qa(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,s=t.memoizedProps.value;K(us,o._currentValue),o._currentValue=s;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(K(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?Od(e,t,n):(K(ee,ee.current&1),e=jt(e,t,n),e!==null?e.sibling:null);K(ee,ee.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return Ud(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),K(ee,ee.current),o)break;return null;case 22:case 23:return t.lanes=0,Bd(e,t,n)}return jt(e,t,n)}var $d,sa,_d,Gd;$d=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sa=function(){};_d=function(e,t,n,o){var s=e.memoizedProps;if(s!==o){e=t.stateNode,rn(dt.current);var r=null;switch(n){case"input":s=Cr(e,s),o=Cr(e,o),r=[];break;case"select":s=ne({},s,{value:void 0}),o=ne({},o,{value:void 0}),r=[];break;case"textarea":s=Er(e,s),o=Er(e,o),r=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=ss)}Pr(n,o);var a;n=null;for(d in s)if(!o.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var c=s[d];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Lo.hasOwnProperty(d)?r||(r=[]):(r=r||[]).push(d,null));for(d in o){var u=o[d];if(c=s!=null?s[d]:void 0,o.hasOwnProperty(d)&&u!==c&&(u!=null||c!=null))if(d==="style")if(c){for(a in c)!c.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&c[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(r||(r=[]),r.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(r=r||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(r=r||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Lo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&V("scroll",e),r||c===u||(r=[])):(r=r||[]).push(d,u))}n&&(r=r||[]).push("style",n);var d=r;(t.updateQueue=d)&&(t.flags|=4)}};Gd=function(e,t,n,o){n!==o&&(t.flags|=4)};function yo(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Qh(e,t,n){var o=t.pendingProps;switch(Oa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Re(t.type)&&rs(),we(t),null;case 3:return o=t.stateNode,Vn(),J(Pe),J(xe),Va(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ii(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tt!==null&&(pa(tt),tt=null))),sa(e,t),we(t),null;case 5:Ka(t);var s=rn(Yo.current);if(n=t.type,e!==null&&t.stateNode!=null)_d(e,t,n,o,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(j(166));return we(t),null}if(e=rn(dt.current),Ii(t)){o=t.stateNode,n=t.type;var r=t.memoizedProps;switch(o[ct]=t,o[Go]=r,e=(t.mode&1)!==0,n){case"dialog":V("cancel",o),V("close",o);break;case"iframe":case"object":case"embed":V("load",o);break;case"video":case"audio":for(s=0;s<Io.length;s++)V(Io[s],o);break;case"source":V("error",o);break;case"img":case"image":case"link":V("error",o),V("load",o);break;case"details":V("toggle",o);break;case"input":Tl(o,r),V("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!r.multiple},V("invalid",o);break;case"textarea":zl(o,r),V("invalid",o)}Pr(n,r),s=null;for(var a in r)if(r.hasOwnProperty(a)){var c=r[a];a==="children"?typeof c=="string"?o.textContent!==c&&(r.suppressHydrationWarning!==!0&&Ai(o.textContent,c,e),s=["children",c]):typeof c=="number"&&o.textContent!==""+c&&(r.suppressHydrationWarning!==!0&&Ai(o.textContent,c,e),s=["children",""+c]):Lo.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&V("scroll",o)}switch(n){case"input":gi(o),El(o,r,!0);break;case"textarea":gi(o),Pl(o);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(o.onclick=ss)}o=s,t.updateQueue=o,o!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=a.createElement(n,{is:o.is}):(e=a.createElement(n),n==="select"&&(a=e,o.multiple?a.multiple=!0:o.size&&(a.size=o.size))):e=a.createElementNS(e,n),e[ct]=t,e[Go]=o,$d(e,t,!1,!1),t.stateNode=e;e:{switch(a=Rr(n,o),n){case"dialog":V("cancel",e),V("close",e),s=o;break;case"iframe":case"object":case"embed":V("load",e),s=o;break;case"video":case"audio":for(s=0;s<Io.length;s++)V(Io[s],e);s=o;break;case"source":V("error",e),s=o;break;case"img":case"image":case"link":V("error",e),V("load",e),s=o;break;case"details":V("toggle",e),s=o;break;case"input":Tl(e,o),s=Cr(e,o),V("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=ne({},o,{value:void 0}),V("invalid",e);break;case"textarea":zl(e,o),s=Er(e,o),V("invalid",e);break;default:s=o}Pr(n,s),c=s;for(r in c)if(c.hasOwnProperty(r)){var u=c[r];r==="style"?ku(e,u):r==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&bu(e,u)):r==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Wo(e,u):typeof u=="number"&&Wo(e,""+u):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Lo.hasOwnProperty(r)?u!=null&&r==="onScroll"&&V("scroll",e):u!=null&&Sa(e,r,u,a))}switch(n){case"input":gi(e),El(e,o,!1);break;case"textarea":gi(e),Pl(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Ht(o.value));break;case"select":e.multiple=!!o.multiple,r=o.value,r!=null?Bn(e,!!o.multiple,r,!1):o.defaultValue!=null&&Bn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ss)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)Gd(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(j(166));if(n=rn(Yo.current),rn(dt.current),Ii(t)){if(o=t.stateNode,n=t.memoizedProps,o[ct]=t,(r=o.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:Ai(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ai(o.nodeValue,n,(e.mode&1)!==0)}r&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[ct]=t,t.stateNode=o}return we(t),null;case 13:if(J(ee),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&We!==null&&t.mode&1&&!(t.flags&128))cd(),Qn(),t.flags|=98560,r=!1;else if(r=Ii(t),o!==null&&o.dehydrated!==null){if(e===null){if(!r)throw Error(j(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(j(317));r[ct]=t}else Qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),r=!1}else tt!==null&&(pa(tt),tt=null),r=!0;if(!r)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ue===0&&(ue=3):ll())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return Vn(),sa(e,t),e===null&&$o(t.stateNode.containerInfo),we(t),null;case 10:return Ga(t.type._context),we(t),null;case 17:return Re(t.type)&&rs(),we(t),null;case 19:if(J(ee),r=t.memoizedState,r===null)return we(t),null;if(o=(t.flags&128)!==0,a=r.rendering,a===null)if(o)yo(r,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ps(e),a!==null){for(t.flags|=128,yo(r,!1),o=a.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)r=n,e=o,r.flags&=14680066,a=r.alternate,a===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,e=a.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(ee,ee.current&1|2),t.child}e=e.sibling}r.tail!==null&&se()>Zn&&(t.flags|=128,o=!0,yo(r,!1),t.lanes=4194304)}else{if(!o)if(e=ps(a),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!Z)return we(t),null}else 2*se()-r.renderingStartTime>Zn&&n!==1073741824&&(t.flags|=128,o=!0,yo(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(n=r.last,n!==null?n.sibling=a:t.child=a,r.last=a)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=se(),t.sibling=null,n=ee.current,K(ee,o?n&1|2:n&1),t):(we(t),null);case 22:case 23:return al(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Le&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Kh(e,t){switch(Oa(t),t.tag){case 1:return Re(t.type)&&rs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),J(Pe),J(xe),Va(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ka(t),null;case 13:if(J(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(ee),null;case 4:return Vn(),null;case 10:return Ga(t.type._context),null;case 22:case 23:return al(),null;case 24:return null;default:return null}}var Ci=!1,be=!1,Vh=typeof WeakSet=="function"?WeakSet:Set,P=null;function Wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){ie(e,t,o)}else n.current=null}function ra(e,t,n){try{n()}catch(o){ie(e,t,o)}}var xc=!1;function Jh(e,t){if($r=ns,e=Vu(),Da(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var s=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var a=0,c=-1,u=-1,d=0,m=0,h=e,g=null;t:for(;;){for(var p;h!==n||s!==0&&h.nodeType!==3||(c=a+s),h!==r||o!==0&&h.nodeType!==3||(u=a+o),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)g=h,h=p;for(;;){if(h===e)break t;if(g===n&&++d===s&&(c=a),g===r&&++m===o&&(u=a),(p=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=p}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_r={focusedElem:e,selectionRange:n},ns=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,A=v.memoizedState,y=t.stateNode,f=y.getSnapshotBeforeUpdate(t.elementType===t.type?x:Xe(t.type,x),A);y.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(k){ie(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return v=xc,xc=!1,v}function Po(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var r=s.destroy;s.destroy=void 0,r!==void 0&&ra(t,n,r)}s=s.next}while(s!==o)}}function Ps(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function aa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hd(e){var t=e.alternate;t!==null&&(e.alternate=null,Hd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ct],delete t[Go],delete t[Yr],delete t[Rh],delete t[Mh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yd(e){return e.tag===5||e.tag===3||e.tag===4}function kc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function la(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ss));else if(o!==4&&(e=e.child,e!==null))for(la(e,t,n),e=e.sibling;e!==null;)la(e,t,n),e=e.sibling}function ca(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(ca(e,t,n),e=e.sibling;e!==null;)ca(e,t,n),e=e.sibling}var he=null,et=!1;function Tt(e,t,n){for(n=n.child;n!==null;)Qd(e,t,n),n=n.sibling}function Qd(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Is,n)}catch{}switch(n.tag){case 5:be||Wn(n,t);case 6:var o=he,s=et;he=null,Tt(e,t,n),he=o,et=s,he!==null&&(et?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(et?(e=he,n=n.stateNode,e.nodeType===8?or(e.parentNode,n):e.nodeType===1&&or(e,n),Fo(e)):or(he,n.stateNode));break;case 4:o=he,s=et,he=n.stateNode.containerInfo,et=!0,Tt(e,t,n),he=o,et=s;break;case 0:case 11:case 14:case 15:if(!be&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var r=s,a=r.destroy;r=r.tag,a!==void 0&&(r&2||r&4)&&ra(n,t,a),s=s.next}while(s!==o)}Tt(e,t,n);break;case 1:if(!be&&(Wn(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(c){ie(n,t,c)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(be=(o=be)||n.memoizedState!==null,Tt(e,t,n),be=o):Tt(e,t,n);break;default:Tt(e,t,n)}}function Ac(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vh),t.forEach(function(o){var s=rg.bind(null,e,o);n.has(o)||(n.add(o),o.then(s,s))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var s=n[o];try{var r=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:he=c.stateNode,et=!1;break e;case 3:he=c.stateNode.containerInfo,et=!0;break e;case 4:he=c.stateNode.containerInfo,et=!0;break e}c=c.return}if(he===null)throw Error(j(160));Qd(r,a,s),he=null,et=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){ie(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kd(t,e),t=t.sibling}function Kd(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),rt(e),o&4){try{Po(3,e,e.return),Ps(3,e)}catch(x){ie(e,e.return,x)}try{Po(5,e,e.return)}catch(x){ie(e,e.return,x)}}break;case 1:Ze(t,e),rt(e),o&512&&n!==null&&Wn(n,n.return);break;case 5:if(Ze(t,e),rt(e),o&512&&n!==null&&Wn(n,n.return),e.flags&32){var s=e.stateNode;try{Wo(s,"")}catch(x){ie(e,e.return,x)}}if(o&4&&(s=e.stateNode,s!=null)){var r=e.memoizedProps,a=n!==null?n.memoizedProps:r,c=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{c==="input"&&r.type==="radio"&&r.name!=null&&yu(s,r),Rr(c,a);var d=Rr(c,r);for(a=0;a<u.length;a+=2){var m=u[a],h=u[a+1];m==="style"?ku(s,h):m==="dangerouslySetInnerHTML"?bu(s,h):m==="children"?Wo(s,h):Sa(s,m,h,d)}switch(c){case"input":Nr(s,r);break;case"textarea":wu(s,r);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!r.multiple;var p=r.value;p!=null?Bn(s,!!r.multiple,p,!1):g!==!!r.multiple&&(r.defaultValue!=null?Bn(s,!!r.multiple,r.defaultValue,!0):Bn(s,!!r.multiple,r.multiple?[]:"",!1))}s[Go]=r}catch(x){ie(e,e.return,x)}}break;case 6:if(Ze(t,e),rt(e),o&4){if(e.stateNode===null)throw Error(j(162));s=e.stateNode,r=e.memoizedProps;try{s.nodeValue=r}catch(x){ie(e,e.return,x)}}break;case 3:if(Ze(t,e),rt(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Fo(t.containerInfo)}catch(x){ie(e,e.return,x)}break;case 4:Ze(t,e),rt(e);break;case 13:Ze(t,e),rt(e),s=e.child,s.flags&8192&&(r=s.memoizedState!==null,s.stateNode.isHidden=r,!r||s.alternate!==null&&s.alternate.memoizedState!==null||(sl=se())),o&4&&Ac(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(be=(d=be)||m,Ze(t,e),be=d):Ze(t,e),rt(e),o&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(h=P=m;P!==null;){switch(g=P,p=g.child,g.tag){case 0:case 11:case 14:case 15:Po(4,g,g.return);break;case 1:Wn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){o=g,n=g.return;try{t=o,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){ie(o,n,x)}}break;case 5:Wn(g,g.return);break;case 22:if(g.memoizedState!==null){jc(h);continue}}p!==null?(p.return=g,P=p):jc(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{s=h.stateNode,d?(r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(c=h.stateNode,u=h.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=xu("display",a))}catch(x){ie(e,e.return,x)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(x){ie(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ze(t,e),rt(e),o&4&&Ac(e);break;case 21:break;default:Ze(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yd(n)){var o=n;break e}n=n.return}throw Error(j(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Wo(s,""),o.flags&=-33);var r=kc(e);ca(e,r,s);break;case 3:case 4:var a=o.stateNode.containerInfo,c=kc(e);la(e,c,a);break;default:throw Error(j(161))}}catch(u){ie(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zh(e,t,n){P=e,Vd(e)}function Vd(e,t,n){for(var o=(e.mode&1)!==0;P!==null;){var s=P,r=s.child;if(s.tag===22&&o){var a=s.memoizedState!==null||Ci;if(!a){var c=s.alternate,u=c!==null&&c.memoizedState!==null||be;c=Ci;var d=be;if(Ci=a,(be=u)&&!d)for(P=s;P!==null;)a=P,u=a.child,a.tag===22&&a.memoizedState!==null?Sc(s):u!==null?(u.return=a,P=u):Sc(s);for(;r!==null;)P=r,Vd(r),r=r.sibling;P=s,Ci=c,be=d}Ic(e)}else s.subtreeFlags&8772&&r!==null?(r.return=s,P=r):Ic(e)}}function Ic(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:be||Ps(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!be)if(n===null)o.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);o.componentDidUpdate(s,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var r=t.updateQueue;r!==null&&lc(t,r,o);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lc(t,a,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Fo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}be||t.flags&512&&aa(t)}catch(g){ie(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function jc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Sc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ps(4,t)}catch(u){ie(t,n,u)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var s=t.return;try{o.componentDidMount()}catch(u){ie(t,s,u)}}var r=t.return;try{aa(t)}catch(u){ie(t,r,u)}break;case 5:var a=t.return;try{aa(t)}catch(u){ie(t,a,u)}}}catch(u){ie(t,t.return,u)}if(t===e){P=null;break}var c=t.sibling;if(c!==null){c.return=t.return,P=c;break}P=t.return}}var Xh=Math.ceil,fs=Ct.ReactCurrentDispatcher,ol=Ct.ReactCurrentOwner,Ge=Ct.ReactCurrentBatchConfig,$=0,me=null,re=null,ge=0,Le=0,qn=Kt(0),ue=0,Jo=null,gn=0,Rs=0,il=0,Ro=null,Ee=null,sl=0,Zn=1/0,ft=null,ys=!1,ua=null,Ut=null,Ni=!1,Wt=null,ws=0,Mo=0,da=null,Hi=-1,Yi=0;function je(){return $&6?se():Hi!==-1?Hi:Hi=se()}function $t(e){return e.mode&1?$&2&&ge!==0?ge&-ge:Wh.transition!==null?(Yi===0&&(Yi=Mu()),Yi):(e=H,e!==0||(e=window.event,e=e===void 0?16:Ou(e.type)),e):1}function ot(e,t,n,o){if(50<Mo)throw Mo=0,da=null,Error(j(185));oi(e,n,o),(!($&2)||e!==me)&&(e===me&&(!($&2)&&(Rs|=n),ue===4&&Mt(e,ge)),Me(e,o),n===1&&$===0&&!(t.mode&1)&&(Zn=se()+500,Ts&&Vt()))}function Me(e,t){var n=e.callbackNode;Wp(e,t);var o=ts(e,e===me?ge:0);if(o===0)n!==null&&Ll(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Ll(n),t===1)e.tag===0?Lh(Cc.bind(null,e)):rd(Cc.bind(null,e)),zh(function(){!($&6)&&Vt()}),n=null;else{switch(Lu(o)){case 1:n=za;break;case 4:n=Pu;break;case 16:n=es;break;case 536870912:n=Ru;break;default:n=es}n=im(n,Jd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jd(e,t){if(Hi=-1,Yi=0,$&6)throw Error(j(327));var n=e.callbackNode;if($n()&&e.callbackNode!==n)return null;var o=ts(e,e===me?ge:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=vs(e,o);else{t=o;var s=$;$|=2;var r=Xd();(me!==e||ge!==t)&&(ft=null,Zn=se()+500,ln(e,t));do try{ng();break}catch(c){Zd(e,c)}while(!0);_a(),fs.current=r,$=s,re!==null?t=0:(me=null,ge=0,t=ue)}if(t!==0){if(t===2&&(s=Br(e),s!==0&&(o=s,t=ma(e,s))),t===1)throw n=Jo,ln(e,0),Mt(e,o),Me(e,se()),n;if(t===6)Mt(e,o);else{if(s=e.current.alternate,!(o&30)&&!eg(s)&&(t=vs(e,o),t===2&&(r=Br(e),r!==0&&(o=r,t=ma(e,r))),t===1))throw n=Jo,ln(e,0),Mt(e,o),Me(e,se()),n;switch(e.finishedWork=s,e.finishedLanes=o,t){case 0:case 1:throw Error(j(345));case 2:tn(e,Ee,ft);break;case 3:if(Mt(e,o),(o&130023424)===o&&(t=sl+500-se(),10<t)){if(ts(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){je(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Hr(tn.bind(null,e,Ee,ft),t);break}tn(e,Ee,ft);break;case 4:if(Mt(e,o),(o&4194240)===o)break;for(t=e.eventTimes,s=-1;0<o;){var a=31-nt(o);r=1<<a,a=t[a],a>s&&(s=a),o&=~r}if(o=s,o=se()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Xh(o/1960))-o,10<o){e.timeoutHandle=Hr(tn.bind(null,e,Ee,ft),o);break}tn(e,Ee,ft);break;case 5:tn(e,Ee,ft);break;default:throw Error(j(329))}}}return Me(e,se()),e.callbackNode===n?Jd.bind(null,e):null}function ma(e,t){var n=Ro;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=vs(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&pa(t)),e}function pa(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function eg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var s=n[o],r=s.getSnapshot;s=s.value;try{if(!it(r(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~il,t&=~Rs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),o=1<<n;e[n]=-1,t&=~o}}function Cc(e){if($&6)throw Error(j(327));$n();var t=ts(e,0);if(!(t&1))return Me(e,se()),null;var n=vs(e,t);if(e.tag!==0&&n===2){var o=Br(e);o!==0&&(t=o,n=ma(e,o))}if(n===1)throw n=Jo,ln(e,0),Mt(e,t),Me(e,se()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,Ee,ft),Me(e,se()),null}function rl(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Zn=se()+500,Ts&&Vt())}}function fn(e){Wt!==null&&Wt.tag===0&&!($&6)&&$n();var t=$;$|=1;var n=Ge.transition,o=H;try{if(Ge.transition=null,H=1,e)return e()}finally{H=o,Ge.transition=n,$=t,!($&6)&&Vt()}}function al(){Le=qn.current,J(qn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Eh(n)),re!==null)for(n=re.return;n!==null;){var o=n;switch(Oa(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&rs();break;case 3:Vn(),J(Pe),J(xe),Va();break;case 5:Ka(o);break;case 4:Vn();break;case 13:J(ee);break;case 19:J(ee);break;case 10:Ga(o.type._context);break;case 22:case 23:al()}n=n.return}if(me=e,re=e=_t(e.current,null),ge=Le=t,ue=0,Jo=null,il=Rs=gn=0,Ee=Ro=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],o=n.interleaved,o!==null){n.interleaved=null;var s=o.next,r=n.pending;if(r!==null){var a=r.next;r.next=s,o.next=a}n.pending=o}sn=null}return e}function Zd(e,t){do{var n=re;try{if(_a(),$i.current=gs,hs){for(var o=te.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}hs=!1}if(hn=0,de=ce=te=null,zo=!1,Qo=0,ol.current=null,n===null||n.return===null){ue=1,Jo=t,re=null;break}e:{var r=e,a=n.return,c=n,u=t;if(t=ge,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=c,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var p=hc(a);if(p!==null){p.flags&=-257,gc(p,a,c,r,t),p.mode&1&&pc(r,d,t),t=p,u=d;var v=t.updateQueue;if(v===null){var x=new Set;x.add(u),t.updateQueue=x}else v.add(u);break e}else{if(!(t&1)){pc(r,d,t),ll();break e}u=Error(j(426))}}else if(Z&&c.mode&1){var A=hc(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),gc(A,a,c,r,t),Ua(Jn(u,c));break e}}r=u=Jn(u,c),ue!==4&&(ue=2),Ro===null?Ro=[r]:Ro.push(r),r=a;do{switch(r.tag){case 3:r.flags|=65536,t&=-t,r.lanes|=t;var y=Ld(r,u,t);ac(r,y);break e;case 1:c=u;var f=r.type,w=r.stateNode;if(!(r.flags&128)&&(typeof f.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Ut===null||!Ut.has(w)))){r.flags|=65536,t&=-t,r.lanes|=t;var k=Wd(r,c,t);ac(r,k);break e}}r=r.return}while(r!==null)}tm(n)}catch(S){t=S,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Xd(){var e=fs.current;return fs.current=gs,e===null?gs:e}function ll(){(ue===0||ue===3||ue===2)&&(ue=4),me===null||!(gn&268435455)&&!(Rs&268435455)||Mt(me,ge)}function vs(e,t){var n=$;$|=2;var o=Xd();(me!==e||ge!==t)&&(ft=null,ln(e,t));do try{tg();break}catch(s){Zd(e,s)}while(!0);if(_a(),$=n,fs.current=o,re!==null)throw Error(j(261));return me=null,ge=0,ue}function tg(){for(;re!==null;)em(re)}function ng(){for(;re!==null&&!Cp();)em(re)}function em(e){var t=om(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?tm(e):re=t,ol.current=null}function tm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Kh(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,re=null;return}}else if(n=Qh(n,t,Le),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ue===0&&(ue=5)}function tn(e,t,n){var o=H,s=Ge.transition;try{Ge.transition=null,H=1,og(e,t,n,o)}finally{Ge.transition=s,H=o}return null}function og(e,t,n,o){do $n();while(Wt!==null);if($&6)throw Error(j(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var r=n.lanes|n.childLanes;if(qp(e,r),e===me&&(re=me=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ni||(Ni=!0,im(es,function(){return $n(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=Ge.transition,Ge.transition=null;var a=H;H=1;var c=$;$|=4,ol.current=null,Jh(e,n),Kd(n,e),Ah(_r),ns=!!$r,_r=$r=null,e.current=n,Zh(n),Np(),$=c,H=a,Ge.transition=r}else e.current=n;if(Ni&&(Ni=!1,Wt=e,ws=s),r=e.pendingLanes,r===0&&(Ut=null),zp(n.stateNode),Me(e,se()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],o(s.value,{componentStack:s.stack,digest:s.digest});if(ys)throw ys=!1,e=ua,ua=null,e;return ws&1&&e.tag!==0&&$n(),r=e.pendingLanes,r&1?e===da?Mo++:(Mo=0,da=e):Mo=0,Vt(),null}function $n(){if(Wt!==null){var e=Lu(ws),t=Ge.transition,n=H;try{if(Ge.transition=null,H=16>e?16:e,Wt===null)var o=!1;else{if(e=Wt,Wt=null,ws=0,$&6)throw Error(j(331));var s=$;for($|=4,P=e.current;P!==null;){var r=P,a=r.child;if(P.flags&16){var c=r.deletions;if(c!==null){for(var u=0;u<c.length;u++){var d=c[u];for(P=d;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:Po(8,m,r)}var h=m.child;if(h!==null)h.return=m,P=h;else for(;P!==null;){m=P;var g=m.sibling,p=m.return;if(Hd(m),m===d){P=null;break}if(g!==null){g.return=p,P=g;break}P=p}}}var v=r.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var A=x.sibling;x.sibling=null,x=A}while(x!==null)}}P=r}}if(r.subtreeFlags&2064&&a!==null)a.return=r,P=a;else e:for(;P!==null;){if(r=P,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Po(9,r,r.return)}var y=r.sibling;if(y!==null){y.return=r.return,P=y;break e}P=r.return}}var f=e.current;for(P=f;P!==null;){a=P;var w=a.child;if(a.subtreeFlags&2064&&w!==null)w.return=a,P=w;else e:for(a=f;P!==null;){if(c=P,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Ps(9,c)}}catch(S){ie(c,c.return,S)}if(c===a){P=null;break e}var k=c.sibling;if(k!==null){k.return=c.return,P=k;break e}P=c.return}}if($=s,Vt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Is,e)}catch{}o=!0}return o}finally{H=n,Ge.transition=t}}return!1}function Nc(e,t,n){t=Jn(n,t),t=Ld(e,t,1),e=Ot(e,t,1),t=je(),e!==null&&(oi(e,1,t),Me(e,t))}function ie(e,t,n){if(e.tag===3)Nc(e,e,n);else for(;t!==null;){if(t.tag===3){Nc(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ut===null||!Ut.has(o))){e=Jn(n,e),e=Wd(t,e,1),t=Ot(t,e,1),e=je(),t!==null&&(oi(t,1,e),Me(t,e));break}}t=t.return}}function ig(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ge&n)===n&&(ue===4||ue===3&&(ge&130023424)===ge&&500>se()-sl?ln(e,0):il|=n),Me(e,t)}function nm(e,t){t===0&&(e.mode&1?(t=wi,wi<<=1,!(wi&130023424)&&(wi=4194304)):t=1);var n=je();e=It(e,t),e!==null&&(oi(e,t,n),Me(e,n))}function sg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nm(e,n)}function rg(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(j(314))}o!==null&&o.delete(t),nm(e,n)}var om;om=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,Yh(e,t,n);ze=!!(e.flags&131072)}else ze=!1,Z&&t.flags&1048576&&ad(t,cs,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Gi(e,t),e=t.pendingProps;var s=Yn(t,xe.current);Un(t,n),s=Za(null,t,o,e,s,n);var r=Xa();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(o)?(r=!0,as(t)):r=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ya(t),s.updater=zs,t.stateNode=s,s._reactInternals=t,Xr(t,o,e,n),t=na(null,t,o,!0,r,n)):(t.tag=0,Z&&r&&Fa(t),Ie(null,t,s,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Gi(e,t),e=t.pendingProps,s=o._init,o=s(o._payload),t.type=o,s=t.tag=lg(o),e=Xe(o,e),s){case 0:t=ta(null,t,o,e,n);break e;case 1:t=wc(null,t,o,e,n);break e;case 11:t=fc(null,t,o,e,n);break e;case 14:t=yc(null,t,o,Xe(o.type,e),n);break e}throw Error(j(306,o,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Xe(o,s),ta(e,t,o,s,n);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Xe(o,s),wc(e,t,o,s,n);case 3:e:{if(Fd(t),e===null)throw Error(j(387));o=t.pendingProps,r=t.memoizedState,s=r.element,pd(e,t),ms(t,o,null,n);var a=t.memoizedState;if(o=a.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){s=Jn(Error(j(423)),t),t=vc(e,t,o,n,s);break e}else if(o!==s){s=Jn(Error(j(424)),t),t=vc(e,t,o,n,s);break e}else for(We=Ft(t.stateNode.containerInfo.firstChild),qe=t,Z=!0,tt=null,n=dd(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qn(),o===s){t=jt(e,t,n);break e}Ie(e,t,o,n)}t=t.child}return t;case 5:return hd(t),e===null&&Vr(t),o=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,a=s.children,Gr(o,s)?a=null:r!==null&&Gr(o,r)&&(t.flags|=32),Dd(e,t),Ie(e,t,a,n),t.child;case 6:return e===null&&Vr(t),null;case 13:return Od(e,t,n);case 4:return Qa(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Kn(t,null,o,n):Ie(e,t,o,n),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Xe(o,s),fc(e,t,o,s,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,s=t.pendingProps,r=t.memoizedProps,a=s.value,K(us,o._currentValue),o._currentValue=a,r!==null)if(it(r.value,a)){if(r.children===s.children&&!Pe.current){t=jt(e,t,n);break e}}else for(r=t.child,r!==null&&(r.return=t);r!==null;){var c=r.dependencies;if(c!==null){a=r.child;for(var u=c.firstContext;u!==null;){if(u.context===o){if(r.tag===1){u=bt(-1,n&-n),u.tag=2;var d=r.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}r.lanes|=n,u=r.alternate,u!==null&&(u.lanes|=n),Jr(r.return,n,t),c.lanes|=n;break}u=u.next}}else if(r.tag===10)a=r.type===t.type?null:r.child;else if(r.tag===18){if(a=r.return,a===null)throw Error(j(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Jr(a,n,t),a=r.sibling}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===t){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}Ie(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,o=t.pendingProps.children,Un(t,n),s=He(s),o=o(s),t.flags|=1,Ie(e,t,o,n),t.child;case 14:return o=t.type,s=Xe(o,t.pendingProps),s=Xe(o.type,s),yc(e,t,o,s,n);case 15:return qd(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Xe(o,s),Gi(e,t),t.tag=1,Re(o)?(e=!0,as(t)):e=!1,Un(t,n),Md(t,o,s),Xr(t,o,s,n),na(null,t,o,!0,e,n);case 19:return Ud(e,t,n);case 22:return Bd(e,t,n)}throw Error(j(156,t.tag))};function im(e,t){return zu(e,t)}function ag(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,o){return new ag(e,t,n,o)}function cl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lg(e){if(typeof e=="function")return cl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Na)return 11;if(e===Ta)return 14}return 2}function _t(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qi(e,t,n,o,s,r){var a=2;if(o=e,typeof e=="function")cl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Cn:return cn(n.children,s,r,t);case Ca:a=8,s|=8;break;case Ar:return e=_e(12,n,t,s|2),e.elementType=Ar,e.lanes=r,e;case Ir:return e=_e(13,n,t,s),e.elementType=Ir,e.lanes=r,e;case jr:return e=_e(19,n,t,s),e.elementType=jr,e.lanes=r,e;case hu:return Ms(n,s,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mu:a=10;break e;case pu:a=9;break e;case Na:a=11;break e;case Ta:a=14;break e;case zt:a=16,o=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=_e(a,n,t,s),t.elementType=e,t.type=o,t.lanes=r,t}function cn(e,t,n,o){return e=_e(7,e,o,t),e.lanes=n,e}function Ms(e,t,n,o){return e=_e(22,e,o,t),e.elementType=hu,e.lanes=n,e.stateNode={isHidden:!1},e}function dr(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function mr(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cg(e,t,n,o,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hs(0),this.expirationTimes=Hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hs(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ul(e,t,n,o,s,r,a,c,u){return e=new cg(e,t,n,c,u),t===1?(t=1,r===!0&&(t|=8)):t=0,r=_e(3,null,null,t),e.current=r,r.stateNode=e,r.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ya(r),e}function ug(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sn,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function sm(e){if(!e)return Yt;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Re(n))return sd(e,n,t)}return t}function rm(e,t,n,o,s,r,a,c,u){return e=ul(n,o,!0,e,s,r,a,c,u),e.context=sm(null),n=e.current,o=je(),s=$t(n),r=bt(o,s),r.callback=t??null,Ot(n,r,s),e.current.lanes=s,oi(e,s,o),Me(e,o),e}function Ls(e,t,n,o){var s=t.current,r=je(),a=$t(s);return n=sm(n),t.context===null?t.context=n:t.pendingContext=n,t=bt(r,a),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Ot(s,t,a),e!==null&&(ot(e,s,a,r),Ui(e,s,a)),a}function bs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function dl(e,t){Tc(e,t),(e=e.alternate)&&Tc(e,t)}function dg(){return null}var am=typeof reportError=="function"?reportError:function(e){console.error(e)};function ml(e){this._internalRoot=e}Ws.prototype.render=ml.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Ls(e,t,null,null)};Ws.prototype.unmount=ml.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){Ls(null,e,null,null)}),t[At]=null}};function Ws(e){this._internalRoot=e}Ws.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&Fu(e)}};function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ec(){}function mg(e,t,n,o,s){if(s){if(typeof o=="function"){var r=o;o=function(){var d=bs(a);r.call(d)}}var a=rm(t,o,e,0,null,!1,!1,"",Ec);return e._reactRootContainer=a,e[At]=a.current,$o(e.nodeType===8?e.parentNode:e),fn(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var c=o;o=function(){var d=bs(u);c.call(d)}}var u=ul(e,0,!1,null,null,!1,!1,"",Ec);return e._reactRootContainer=u,e[At]=u.current,$o(e.nodeType===8?e.parentNode:e),fn(function(){Ls(t,u,n,o)}),u}function Bs(e,t,n,o,s){var r=n._reactRootContainer;if(r){var a=r;if(typeof s=="function"){var c=s;s=function(){var u=bs(a);c.call(u)}}Ls(t,a,e,s)}else a=mg(n,t,e,s,o);return bs(a)}Wu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ao(t.pendingLanes);n!==0&&(Pa(t,n|1),Me(t,se()),!($&6)&&(Zn=se()+500,Vt()))}break;case 13:fn(function(){var o=It(e,1);if(o!==null){var s=je();ot(o,e,1,s)}}),dl(e,1)}};Ra=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=je();ot(t,e,134217728,n)}dl(e,134217728)}};qu=function(e){if(e.tag===13){var t=$t(e),n=It(e,t);if(n!==null){var o=je();ot(n,e,t,o)}dl(e,t)}};Bu=function(){return H};Du=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Lr=function(e,t,n){switch(t){case"input":if(Nr(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var s=Ns(o);if(!s)throw Error(j(90));fu(o),Nr(o,s)}}}break;case"textarea":wu(e,n);break;case"select":t=n.value,t!=null&&Bn(e,!!n.multiple,t,!1)}};ju=rl;Su=fn;var pg={usingClientEntryPoint:!1,Events:[si,zn,Ns,Au,Iu,rl]},wo={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hg={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tu(e),e===null?null:e.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||dg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ti.isDisabled&&Ti.supportsFiber)try{Is=Ti.inject(hg),ut=Ti}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pg;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pl(t))throw Error(j(200));return ug(e,t,null,n)};De.createRoot=function(e,t){if(!pl(e))throw Error(j(299));var n=!1,o="",s=am;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ul(e,1,!1,null,null,n,!1,o,s),e[At]=t.current,$o(e.nodeType===8?e.parentNode:e),new ml(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Tu(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return fn(e)};De.hydrate=function(e,t,n){if(!qs(t))throw Error(j(200));return Bs(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!pl(e))throw Error(j(405));var o=n!=null&&n.hydratedSources||null,s=!1,r="",a=am;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=rm(t,null,e,1,n??null,s,!1,r,a),e[At]=t.current,$o(e),o)for(e=0;e<o.length;e++)n=o[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Ws(t)};De.render=function(e,t,n){if(!qs(t))throw Error(j(200));return Bs(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!qs(e))throw Error(j(40));return e._reactRootContainer?(fn(function(){Bs(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1};De.unstable_batchedUpdates=rl;De.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!qs(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Bs(e,t,n,!1,o)};De.version="18.3.1-next-f1338f8080-20240426";function lm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lm)}catch(e){console.error(e)}}lm(),lu.exports=De;var gg=lu.exports,cm,zc=gg;cm=zc.createRoot,zc.hydrateRoot;/**
 * react-router v7.10.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Pc="popstate";function fg(e={}){function t(o,s){let{pathname:r,search:a,hash:c}=o.location;return ha("",{pathname:r,search:a,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(o,s){return typeof s=="string"?s:Zo(s)}return wg(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qe(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function yg(){return Math.random().toString(36).substring(2,10)}function Rc(e,t){return{usr:e.state,key:e.key,idx:t}}function ha(e,t,n=null,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?oo(t):t,state:n,key:t&&t.key||o||yg()}}function Zo({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function oo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substring(o),e=e.substring(0,o)),e&&(t.pathname=e)}return t}function wg(e,t,n,o={}){let{window:s=document.defaultView,v5Compat:r=!1}=o,a=s.history,c="POP",u=null,d=m();d==null&&(d=0,a.replaceState({...a.state,idx:d},""));function m(){return(a.state||{idx:null}).idx}function h(){c="POP";let A=m(),y=A==null?null:A-d;d=A,u&&u({action:c,location:x.location,delta:y})}function g(A,y){c="PUSH";let f=ha(x.location,A,y);d=m()+1;let w=Rc(f,d),k=x.createHref(f);try{a.pushState(w,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(k)}r&&u&&u({action:c,location:x.location,delta:1})}function p(A,y){c="REPLACE";let f=ha(x.location,A,y);d=m();let w=Rc(f,d),k=x.createHref(f);a.replaceState(w,"",k),r&&u&&u({action:c,location:x.location,delta:0})}function v(A){return vg(A)}let x={get action(){return c},get location(){return e(s,a)},listen(A){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Pc,h),u=A,()=>{s.removeEventListener(Pc,h),u=null}},createHref(A){return t(s,A)},createURL:v,encodeLocation(A){let y=v(A);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:p,go(A){return a.go(A)}};return x}function vg(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),X(n,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:Zo(e);return o=o.replace(/ $/,"%20"),!t&&o.startsWith("//")&&(o=n+o),new URL(o,n)}function um(e,t,n="/"){return bg(e,t,n,!1)}function bg(e,t,n,o){let s=typeof t=="string"?oo(t):t,r=St(s.pathname||"/",n);if(r==null)return null;let a=dm(e);xg(a);let c=null;for(let u=0;c==null&&u<a.length;++u){let d=Pg(r);c=Eg(a[u],d,o)}return c}function dm(e,t=[],n=[],o="",s=!1){let r=(a,c,u=s,d)=>{let m={relativePath:d===void 0?a.path||"":d,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(o)&&u)return;X(m.relativePath.startsWith(o),`Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(o.length)}let h=xt([o,m.relativePath]),g=n.concat(m);a.children&&a.children.length>0&&(X(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),dm(a.children,t,g,h,u)),!(a.path==null&&!a.index)&&t.push({path:h,score:Ng(h,a.index),routesMeta:g})};return e.forEach((a,c)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))r(a,c);else for(let d of mm(a.path))r(a,c,!0,d)}),t}function mm(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,s=n.endsWith("?"),r=n.replace(/\?$/,"");if(o.length===0)return s?[r,""]:[r];let a=mm(o.join("/")),c=[];return c.push(...a.map(u=>u===""?r:[r,u].join("/"))),s&&c.push(...a),c.map(u=>e.startsWith("/")&&u===""?"/":u)}function xg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Tg(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}var kg=/^:[\w-]+$/,Ag=3,Ig=2,jg=1,Sg=10,Cg=-2,Mc=e=>e==="*";function Ng(e,t){let n=e.split("/"),o=n.length;return n.some(Mc)&&(o+=Cg),t&&(o+=Ig),n.filter(s=>!Mc(s)).reduce((s,r)=>s+(kg.test(r)?Ag:r===""?jg:Sg),o)}function Tg(e,t){return e.length===t.length&&e.slice(0,-1).every((o,s)=>o===t[s])?e[e.length-1]-t[t.length-1]:0}function Eg(e,t,n=!1){let{routesMeta:o}=e,s={},r="/",a=[];for(let c=0;c<o.length;++c){let u=o[c],d=c===o.length-1,m=r==="/"?t:t.slice(r.length)||"/",h=xs({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},m),g=u.route;if(!h&&d&&n&&!o[o.length-1].route.index&&(h=xs({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},m)),!h)return null;Object.assign(s,h.params),a.push({params:s,pathname:xt([r,h.pathname]),pathnameBase:qg(xt([r,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(r=xt([r,h.pathnameBase]))}return a}function xs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=zg(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let r=s[0],a=r.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:o.reduce((d,{paramName:m,isOptional:h},g)=>{if(m==="*"){let v=c[g]||"";a=r.slice(0,r.length-v.length).replace(/(.)\/+$/,"$1")}const p=c[g];return h&&!p?d[m]=void 0:d[m]=(p||"").replace(/%2F/g,"/"),d},{}),pathname:r,pathnameBase:a,pattern:e}}function zg(e,t=!1,n=!0){Qe(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,c,u)=>(o.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(o.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),o]}function Pg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Qe(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function St(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}var Rg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mg=e=>Rg.test(e);function Lg(e,t="/"){let{pathname:n,search:o="",hash:s=""}=typeof e=="string"?oo(e):e,r;if(n)if(Mg(n))r=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Qe(!1,`Pathnames cannot have embedded double slashes - normalizing ${a} -> ${n}`)}n.startsWith("/")?r=Lc(n.substring(1),"/"):r=Lc(n,t)}else r=t;return{pathname:r,search:Bg(o),hash:Dg(s)}}function Lc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function pr(e,t,n,o){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Wg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function hl(e){let t=Wg(e);return t.map((n,o)=>o===t.length-1?n.pathname:n.pathnameBase)}function gl(e,t,n,o=!1){let s;typeof e=="string"?s=oo(e):(s={...e},X(!s.pathname||!s.pathname.includes("?"),pr("?","pathname","search",s)),X(!s.pathname||!s.pathname.includes("#"),pr("#","pathname","hash",s)),X(!s.search||!s.search.includes("#"),pr("#","search","hash",s)));let r=e===""||s.pathname==="",a=r?"/":s.pathname,c;if(a==null)c=n;else{let h=t.length-1;if(!o&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),h-=1;s.pathname=g.join("/")}c=h>=0?t[h]:"/"}let u=Lg(s,c),d=a&&a!=="/"&&a.endsWith("/"),m=(r||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||m)&&(u.pathname+="/"),u}var xt=e=>e.join("/").replace(/\/\/+/g,"/"),qg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Bg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Dg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Fg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Og(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var pm=["POST","PUT","PATCH","DELETE"];new Set(pm);var Ug=["GET",...pm];new Set(Ug);var io=b.createContext(null);io.displayName="DataRouter";var Ds=b.createContext(null);Ds.displayName="DataRouterState";b.createContext(!1);var hm=b.createContext({isTransitioning:!1});hm.displayName="ViewTransition";var $g=b.createContext(new Map);$g.displayName="Fetchers";var _g=b.createContext(null);_g.displayName="Await";var Ke=b.createContext(null);Ke.displayName="Navigation";var ai=b.createContext(null);ai.displayName="Location";var st=b.createContext({outlet:null,matches:[],isDataRoute:!1});st.displayName="Route";var fl=b.createContext(null);fl.displayName="RouteError";function Gg(e,{relative:t}={}){X(so(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:o}=b.useContext(Ke),{hash:s,pathname:r,search:a}=ci(e,{relative:t}),c=r;return n!=="/"&&(c=r==="/"?n:xt([n,r])),o.createHref({pathname:c,search:a,hash:s})}function so(){return b.useContext(ai)!=null}function Ve(){return X(so(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(ai).location}var gm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function fm(e){b.useContext(Ke).static||b.useLayoutEffect(e)}function Nt(){let{isDataRoute:e}=b.useContext(st);return e?sf():Hg()}function Hg(){X(so(),"useNavigate() may be used only in the context of a <Router> component.");let e=b.useContext(io),{basename:t,navigator:n}=b.useContext(Ke),{matches:o}=b.useContext(st),{pathname:s}=Ve(),r=JSON.stringify(hl(o)),a=b.useRef(!1);return fm(()=>{a.current=!0}),b.useCallback((u,d={})=>{if(Qe(a.current,gm),!a.current)return;if(typeof u=="number"){n.go(u);return}let m=gl(u,JSON.parse(r),s,d.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:xt([t,m.pathname])),(d.replace?n.replace:n.push)(m,d.state,d)},[t,n,r,s,e])}b.createContext(null);function li(){let{matches:e}=b.useContext(st),t=e[e.length-1];return t?t.params:{}}function ci(e,{relative:t}={}){let{matches:n}=b.useContext(st),{pathname:o}=Ve(),s=JSON.stringify(hl(n));return b.useMemo(()=>gl(e,JSON.parse(s),o,t==="path"),[e,s,o,t])}function Yg(e,t){return ym(e,t)}function ym(e,t,n,o,s){var f;X(so(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=b.useContext(Ke),{matches:a}=b.useContext(st),c=a[a.length-1],u=c?c.params:{},d=c?c.pathname:"/",m=c?c.pathnameBase:"/",h=c&&c.route;{let w=h&&h.path||"";wm(d,!h||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let g=Ve(),p;if(t){let w=typeof t=="string"?oo(t):t;X(m==="/"||((f=w.pathname)==null?void 0:f.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${w.pathname}" was given in the \`location\` prop.`),p=w}else p=g;let v=p.pathname||"/",x=v;if(m!=="/"){let w=m.replace(/^\//,"").split("/");x="/"+v.replace(/^\//,"").split("/").slice(w.length).join("/")}let A=um(e,{pathname:x});Qe(h||A!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),Qe(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=Zg(A&&A.map(w=>Object.assign({},w,{params:Object.assign({},u,w.params),pathname:xt([m,r.encodeLocation?r.encodeLocation(w.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?m:xt([m,r.encodeLocation?r.encodeLocation(w.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),a,n,o,s);return t&&y?b.createElement(ai.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},y):y}function Qg(){let e=of(),t=Fg(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},r={padding:"2px 4px",backgroundColor:o},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:r},"ErrorBoundary")," or"," ",b.createElement("code",{style:r},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:s},n):null,a)}var Kg=b.createElement(Qg,null),Vg=class extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?b.createElement(st.Provider,{value:this.props.routeContext},b.createElement(fl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Jg({routeContext:e,match:t,children:n}){let o=b.useContext(io);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(st.Provider,{value:e},n)}function Zg(e,t=[],n=null,o=null,s=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let r=e,a=n==null?void 0:n.errors;if(a!=null){let m=r.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);X(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),r=r.slice(0,Math.min(r.length,m+1))}let c=!1,u=-1;if(n)for(let m=0;m<r.length;m++){let h=r[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=m),h.route.id){let{loaderData:g,errors:p}=n,v=h.route.loader&&!g.hasOwnProperty(h.route.id)&&(!p||p[h.route.id]===void 0);if(h.route.lazy||v){c=!0,u>=0?r=r.slice(0,u+1):r=[r[0]];break}}}let d=n&&o?(m,h)=>{var g,p;o(m,{location:n.location,params:((p=(g=n.matches)==null?void 0:g[0])==null?void 0:p.params)??{},unstable_pattern:Og(n.matches),errorInfo:h})}:void 0;return r.reduceRight((m,h,g)=>{let p,v=!1,x=null,A=null;n&&(p=a&&h.route.id?a[h.route.id]:void 0,x=h.route.errorElement||Kg,c&&(u<0&&g===0?(wm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,A=null):u===g&&(v=!0,A=h.route.hydrateFallbackElement||null)));let y=t.concat(r.slice(0,g+1)),f=()=>{let w;return p?w=x:v?w=A:h.route.Component?w=b.createElement(h.route.Component,null):h.route.element?w=h.route.element:w=m,b.createElement(Jg,{match:h,routeContext:{outlet:m,matches:y,isDataRoute:n!=null},children:w})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?b.createElement(Vg,{location:n.location,revalidation:n.revalidation,component:x,error:p,children:f(),routeContext:{outlet:null,matches:y,isDataRoute:!0},onError:d}):f()},null)}function yl(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xg(e){let t=b.useContext(io);return X(t,yl(e)),t}function ef(e){let t=b.useContext(Ds);return X(t,yl(e)),t}function tf(e){let t=b.useContext(st);return X(t,yl(e)),t}function wl(e){let t=tf(e),n=t.matches[t.matches.length-1];return X(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function nf(){return wl("useRouteId")}function of(){var o;let e=b.useContext(fl),t=ef("useRouteError"),n=wl("useRouteError");return e!==void 0?e:(o=t.errors)==null?void 0:o[n]}function sf(){let{router:e}=Xg("useNavigate"),t=wl("useNavigate"),n=b.useRef(!1);return fm(()=>{n.current=!0}),b.useCallback(async(s,r={})=>{Qe(n.current,gm),n.current&&(typeof s=="number"?await e.navigate(s):await e.navigate(s,{fromRouteId:t,...r}))},[e,t])}var Wc={};function wm(e,t,n){!t&&!Wc[e]&&(Wc[e]=!0,Qe(!1,n))}b.memo(rf);function rf({routes:e,future:t,state:n,unstable_onError:o}){return ym(e,void 0,n,o,t)}function nn({to:e,replace:t,state:n,relative:o}){X(so(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=b.useContext(Ke);Qe(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:r}=b.useContext(st),{pathname:a}=Ve(),c=Nt(),u=gl(e,hl(r),a,o==="path"),d=JSON.stringify(u);return b.useEffect(()=>{c(JSON.parse(d),{replace:t,state:n,relative:o})},[c,d,o,t,n]),null}function oe(e){X(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function af({basename:e="/",children:t=null,location:n,navigationType:o="POP",navigator:s,static:r=!1,unstable_useTransitions:a}){X(!so(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:c,navigator:s,static:r,unstable_useTransitions:a,future:{}}),[c,s,r,a]);typeof n=="string"&&(n=oo(n));let{pathname:d="/",search:m="",hash:h="",state:g=null,key:p="default"}=n,v=b.useMemo(()=>{let x=St(d,c);return x==null?null:{location:{pathname:x,search:m,hash:h,state:g,key:p},navigationType:o}},[c,d,m,h,g,p,o]);return Qe(v!=null,`<Router basename="${c}"> is not able to match the URL "${d}${m}${h}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:b.createElement(Ke.Provider,{value:u},b.createElement(ai.Provider,{children:t,value:v}))}function lf({children:e,location:t}){return Yg(ga(e),t)}function ga(e,t=[]){let n=[];return b.Children.forEach(e,(o,s)=>{if(!b.isValidElement(o))return;let r=[...t,s];if(o.type===b.Fragment){n.push.apply(n,ga(o.props.children,r));return}X(o.type===oe,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),X(!o.props.index||!o.props.children,"An index route cannot have child routes.");let a={id:o.props.id||r.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(a.children=ga(o.props.children,r)),n.push(a)}),n}var Ki="get",Vi="application/x-www-form-urlencoded";function Fs(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function cf(e){return Fs(e)&&e.tagName.toLowerCase()==="button"}function uf(e){return Fs(e)&&e.tagName.toLowerCase()==="form"}function df(e){return Fs(e)&&e.tagName.toLowerCase()==="input"}function mf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function pf(e,t){return e.button===0&&(!t||t==="_self")&&!mf(e)}var Ei=null;function hf(){if(Ei===null)try{new FormData(document.createElement("form"),0),Ei=!1}catch{Ei=!0}return Ei}var gf=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hr(e){return e!=null&&!gf.has(e)?(Qe(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vi}"`),null):e}function ff(e,t){let n,o,s,r,a;if(uf(e)){let c=e.getAttribute("action");o=c?St(c,t):null,n=e.getAttribute("method")||Ki,s=hr(e.getAttribute("enctype"))||Vi,r=new FormData(e)}else if(cf(e)||df(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||c.getAttribute("action");if(o=u?St(u,t):null,n=e.getAttribute("formmethod")||c.getAttribute("method")||Ki,s=hr(e.getAttribute("formenctype"))||hr(c.getAttribute("enctype"))||Vi,r=new FormData(c,e),!hf()){let{name:d,type:m,value:h}=e;if(m==="image"){let g=d?`${d}.`:"";r.append(`${g}x`,"0"),r.append(`${g}y`,"0")}else d&&r.append(d,h)}}else{if(Fs(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ki,o=null,s=Vi,a=e}return r&&s==="text/plain"&&(a=r,r=void 0),{action:o,method:n.toLowerCase(),encType:s,formData:r,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vl(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function yf(e,t,n){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return o.pathname==="/"?o.pathname=`_root.${n}`:t&&St(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${n}`,o}async function wf(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function vf(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function bf(e,t,n){let o=await Promise.all(e.map(async s=>{let r=t.routes[s.route.id];if(r){let a=await wf(r,n);return a.links?a.links():[]}return[]}));return If(o.flat(1).filter(vf).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function qc(e,t,n,o,s,r){let a=(u,d)=>n[d]?u.route.id!==n[d].route.id:!0,c=(u,d)=>{var m;return n[d].pathname!==u.pathname||((m=n[d].route.path)==null?void 0:m.endsWith("*"))&&n[d].params["*"]!==u.params["*"]};return r==="assets"?t.filter((u,d)=>a(u,d)||c(u,d)):r==="data"?t.filter((u,d)=>{var h;let m=o.routes[u.route.id];if(!m||!m.hasLoader)return!1;if(a(u,d)||c(u,d))return!0;if(u.route.shouldRevalidate){let g=u.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((h=n[0])==null?void 0:h.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function xf(e,t,{includeHydrateFallback:n}={}){return kf(e.map(o=>{let s=t.routes[o.route.id];if(!s)return[];let r=[s.module];return s.clientActionModule&&(r=r.concat(s.clientActionModule)),s.clientLoaderModule&&(r=r.concat(s.clientLoaderModule)),n&&s.hydrateFallbackModule&&(r=r.concat(s.hydrateFallbackModule)),s.imports&&(r=r.concat(s.imports)),r}).flat(1))}function kf(e){return[...new Set(e)]}function Af(e){let t={},n=Object.keys(e).sort();for(let o of n)t[o]=e[o];return t}function If(e,t){let n=new Set;return new Set(t),e.reduce((o,s)=>{let r=JSON.stringify(Af(s));return n.has(r)||(n.add(r),o.push({key:r,link:s})),o},[])}function vm(){let e=b.useContext(io);return vl(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function jf(){let e=b.useContext(Ds);return vl(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var bl=b.createContext(void 0);bl.displayName="FrameworkContext";function bm(){let e=b.useContext(bl);return vl(e,"You must render this element inside a <HydratedRouter> element"),e}function Sf(e,t){let n=b.useContext(bl),[o,s]=b.useState(!1),[r,a]=b.useState(!1),{onFocus:c,onBlur:u,onMouseEnter:d,onMouseLeave:m,onTouchStart:h}=t,g=b.useRef(null);b.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let x=y=>{y.forEach(f=>{a(f.isIntersecting)})},A=new IntersectionObserver(x,{threshold:.5});return g.current&&A.observe(g.current),()=>{A.disconnect()}}},[e]),b.useEffect(()=>{if(o){let x=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(x)}}},[o]);let p=()=>{s(!0)},v=()=>{s(!1),a(!1)};return n?e!=="intent"?[r,g,{}]:[r,g,{onFocus:vo(c,p),onBlur:vo(u,v),onMouseEnter:vo(d,p),onMouseLeave:vo(m,v),onTouchStart:vo(h,p)}]:[!1,g,{}]}function vo(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Cf({page:e,...t}){let{router:n}=vm(),o=b.useMemo(()=>um(n.routes,e,n.basename),[n.routes,e,n.basename]);return o?b.createElement(Tf,{page:e,matches:o,...t}):null}function Nf(e){let{manifest:t,routeModules:n}=bm(),[o,s]=b.useState([]);return b.useEffect(()=>{let r=!1;return bf(e,t,n).then(a=>{r||s(a)}),()=>{r=!0}},[e,t,n]),o}function Tf({page:e,matches:t,...n}){let o=Ve(),{manifest:s,routeModules:r}=bm(),{basename:a}=vm(),{loaderData:c,matches:u}=jf(),d=b.useMemo(()=>qc(e,t,u,s,o,"data"),[e,t,u,s,o]),m=b.useMemo(()=>qc(e,t,u,s,o,"assets"),[e,t,u,s,o]),h=b.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let v=new Set,x=!1;if(t.forEach(y=>{var w;let f=s.routes[y.route.id];!f||!f.hasLoader||(!d.some(k=>k.route.id===y.route.id)&&y.route.id in c&&((w=r[y.route.id])!=null&&w.shouldRevalidate)||f.hasClientLoader?x=!0:v.add(y.route.id))}),v.size===0)return[];let A=yf(e,a,"data");return x&&v.size>0&&A.searchParams.set("_routes",t.filter(y=>v.has(y.route.id)).map(y=>y.route.id).join(",")),[A.pathname+A.search]},[a,c,o,s,d,t,e,r]),g=b.useMemo(()=>xf(m,s),[m,s]),p=Nf(m);return b.createElement(b.Fragment,null,h.map(v=>b.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),g.map(v=>b.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),p.map(({key:v,link:x})=>b.createElement("link",{key:v,nonce:n.nonce,...x})))}function Ef(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var xm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xm&&(window.__reactRouterVersion="7.10.1")}catch{}function zf({basename:e,children:t,unstable_useTransitions:n,window:o}){let s=b.useRef();s.current==null&&(s.current=fg({window:o,v5Compat:!0}));let r=s.current,[a,c]=b.useState({action:r.action,location:r.location}),u=b.useCallback(d=>{n===!1?c(d):b.startTransition(()=>c(d))},[n]);return b.useLayoutEffect(()=>r.listen(u),[r,u]),b.createElement(af,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:r,unstable_useTransitions:n===!0})}var km=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,G=b.forwardRef(function({onClick:t,discover:n="render",prefetch:o="none",relative:s,reloadDocument:r,replace:a,state:c,target:u,to:d,preventScrollReset:m,viewTransition:h,...g},p){let{basename:v,unstable_useTransitions:x}=b.useContext(Ke),A=typeof d=="string"&&km.test(d),y,f=!1;if(typeof d=="string"&&A&&(y=d,xm))try{let I=new URL(window.location.href),M=d.startsWith("//")?new URL(I.protocol+d):new URL(d),_=St(M.pathname,v);M.origin===I.origin&&_!=null?d=_+M.search+M.hash:f=!0}catch{Qe(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let w=Gg(d,{relative:s}),[k,S,T]=Sf(o,g),N=Lf(d,{replace:a,state:c,target:u,preventScrollReset:m,relative:s,viewTransition:h,unstable_useTransitions:x});function R(I){t&&t(I),I.defaultPrevented||N(I)}let C=b.createElement("a",{...g,...T,href:y||w,onClick:f||r?t:R,ref:Ef(p,S),target:u,"data-discover":!A&&n==="render"?"true":void 0});return k&&!A?b.createElement(b.Fragment,null,C,b.createElement(Cf,{page:w})):C});G.displayName="Link";var Pf=b.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:o="",end:s=!1,style:r,to:a,viewTransition:c,children:u,...d},m){let h=ci(a,{relative:d.relative}),g=Ve(),p=b.useContext(Ds),{navigator:v,basename:x}=b.useContext(Ke),A=p!=null&&Ff(h)&&c===!0,y=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,f=g.pathname,w=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(f=f.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&x&&(w=St(w,x)||w);const k=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let S=f===y||!s&&f.startsWith(y)&&f.charAt(k)==="/",T=w!=null&&(w===y||!s&&w.startsWith(y)&&w.charAt(y.length)==="/"),N={isActive:S,isPending:T,isTransitioning:A},R=S?t:void 0,C;typeof o=="function"?C=o(N):C=[o,S?"active":null,T?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let I=typeof r=="function"?r(N):r;return b.createElement(G,{...d,"aria-current":R,className:C,ref:m,style:I,to:a,viewTransition:c},typeof u=="function"?u(N):u)});Pf.displayName="NavLink";var Rf=b.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:o,replace:s,state:r,method:a=Ki,action:c,onSubmit:u,relative:d,preventScrollReset:m,viewTransition:h,...g},p)=>{let{unstable_useTransitions:v}=b.useContext(Ke),x=Bf(),A=Df(c,{relative:d}),y=a.toLowerCase()==="get"?"get":"post",f=typeof c=="string"&&km.test(c),w=k=>{if(u&&u(k),k.defaultPrevented)return;k.preventDefault();let S=k.nativeEvent.submitter,T=(S==null?void 0:S.getAttribute("formmethod"))||a,N=()=>x(S||k.currentTarget,{fetcherKey:t,method:T,navigate:n,replace:s,state:r,relative:d,preventScrollReset:m,viewTransition:h});v&&n!==!1?b.startTransition(()=>N()):N()};return b.createElement("form",{ref:p,method:y,action:A,onSubmit:o?u:w,...g,"data-discover":!f&&e==="render"?"true":void 0})});Rf.displayName="Form";function Mf(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Am(e){let t=b.useContext(io);return X(t,Mf(e)),t}function Lf(e,{target:t,replace:n,state:o,preventScrollReset:s,relative:r,viewTransition:a,unstable_useTransitions:c}={}){let u=Nt(),d=Ve(),m=ci(e,{relative:r});return b.useCallback(h=>{if(pf(h,t)){h.preventDefault();let g=n!==void 0?n:Zo(d)===Zo(m),p=()=>u(e,{replace:g,state:o,preventScrollReset:s,relative:r,viewTransition:a});c?b.startTransition(()=>p()):p()}},[d,u,m,n,o,t,e,s,r,a,c])}var Wf=0,qf=()=>`__${String(++Wf)}__`;function Bf(){let{router:e}=Am("useSubmit"),{basename:t}=b.useContext(Ke),n=nf(),o=e.fetch,s=e.navigate;return b.useCallback(async(r,a={})=>{let{action:c,method:u,encType:d,formData:m,body:h}=ff(r,t);if(a.navigate===!1){let g=a.fetcherKey||qf();await o(g,n,a.action||c,{preventScrollReset:a.preventScrollReset,formData:m,body:h,formMethod:a.method||u,formEncType:a.encType||d,flushSync:a.flushSync})}else await s(a.action||c,{preventScrollReset:a.preventScrollReset,formData:m,body:h,formMethod:a.method||u,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[o,s,t,n])}function Df(e,{relative:t}={}){let{basename:n}=b.useContext(Ke),o=b.useContext(st);X(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),r={...ci(e||".",{relative:t})},a=Ve();if(e==null){r.search=a.search;let c=new URLSearchParams(r.search),u=c.getAll("index");if(u.some(m=>m==="")){c.delete("index"),u.filter(h=>h).forEach(h=>c.append("index",h));let m=c.toString();r.search=m?`?${m}`:""}}return(!e||e===".")&&s.route.index&&(r.search=r.search?r.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(r.pathname=r.pathname==="/"?n:xt([n,r.pathname])),Zo(r)}function Ff(e,{relative:t}={}){let n=b.useContext(hm);X(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Am("useViewTransitionState"),s=ci(e,{relative:t});if(!n.isTransitioning)return!1;let r=St(n.currentLocation.pathname,o)||n.currentLocation.pathname,a=St(n.nextLocation.pathname,o)||n.nextLocation.pathname;return xs(s.pathname,a)!=null||xs(s.pathname,r)!=null}const Of=[{username:"shawaiz",password:"naeem"}],gr="eae_session";function Je(){const[e,t]=b.useState(null),[n,o]=b.useState(!0);return b.useEffect(()=>{const a=localStorage.getItem(gr);a&&t(JSON.parse(a)),o(!1)},[]),{user:e,loading:n,signIn:async(a,c)=>{const u=Of.find(m=>m.username===a.trim()&&m.password===c.trim());if(!u)throw new Error("Invalid credentials.");const d={id:u.username,username:u.username};return localStorage.setItem(gr,JSON.stringify(d)),t(d),{user:d}},signOut:async()=>{localStorage.removeItem(gr),t(null)}}}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Uf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),W=(e,t)=>{const n=b.forwardRef(({color:o="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:c="",children:u,...d},m)=>b.createElement("svg",{ref:m,...Uf,width:s,height:s,stroke:o,strokeWidth:a?Number(r)*24/Number(s):r,className:["lucide",`lucide-${$f(e)}`,c].join(" "),...d},[...t.map(([h,g])=>b.createElement(h,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=W("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=W("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=W("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=W("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=W("BookMarked",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2",key:"13o6vz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=W("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=W("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=W("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=W("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=W("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=W("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=W("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=W("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=W("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=W("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=W("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=W("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=W("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=W("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=W("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=W("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=W("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=W("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=W("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=W("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=W("Diamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=W("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=W("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=W("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=W("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=W("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=W("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=W("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=W("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=W("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=W("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=W("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=W("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=W("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=W("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=W("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=W("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=W("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=W("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=W("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=W("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=W("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=W("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=W("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=W("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=W("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=W("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=W("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=W("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=W("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=W("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=W("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=W("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=W("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=W("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=W("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Bm=b.createContext();function my({children:e}){const[t,n]=b.useState(!1);return i.jsx(Bm.Provider,{value:{sidebarOpen:t,setSidebarOpen:n},children:e})}function kl(){const e=b.useContext(Bm);if(!e)throw new Error("useSidebar must be used within SidebarProvider");return e}const zi="/app".replace(/\/app$/,"")+"/";function py({user:e}){const{sidebarOpen:t,setSidebarOpen:n}=kl();return i.jsx("nav",{style:{background:"rgba(250,248,245,0.92)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",borderBottom:"1px solid rgba(193,127,58,0.15)",position:"sticky",top:0,zIndex:20},children:i.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 1.5rem"},children:i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"64px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e&&i.jsx("button",{onClick:()=>n(!t),"aria-label":t?"Collapse sidebar":"Expand sidebar",style:{background:"none",border:"none",cursor:"pointer",color:"#6b5c4e",padding:"6px",borderRadius:"6px",display:"flex",alignItems:"center",transition:"color 0.2s"},onMouseEnter:o=>o.currentTarget.style.color="#c17f3a",onMouseLeave:o=>o.currentTarget.style.color="#6b5c4e",children:t?i.jsx(pt,{size:20}):i.jsx(iy,{size:20})}),i.jsx(G,{to:e?"/progress":"/",style:{textDecoration:"none"},children:i.jsxs("span",{style:{fontFamily:"'Playfair Display', Georgia, serif",fontSize:"1.35rem",fontWeight:700,color:"#1a1612",letterSpacing:"-0.01em"},children:["Energise ",i.jsx("span",{style:{color:"#c17f3a"},children:"AI"})]})})]}),i.jsxs("div",{className:"hidden md:flex",style:{alignItems:"center",gap:"24px"},children:[i.jsx("a",{href:`${zi}#services`,style:{fontSize:"0.9rem",color:"#4a3f35",textDecoration:"none",fontWeight:500},onMouseEnter:o=>o.currentTarget.style.color="#c17f3a",onMouseLeave:o=>o.currentTarget.style.color="#4a3f35",children:"Services"}),i.jsx("a",{href:`${zi}#why-us`,style:{fontSize:"0.9rem",color:"#4a3f35",textDecoration:"none",fontWeight:500},onMouseEnter:o=>o.currentTarget.style.color="#c17f3a",onMouseLeave:o=>o.currentTarget.style.color="#4a3f35",children:"Why Us"}),i.jsx("a",{href:`${zi}#pricing`,style:{fontSize:"0.9rem",color:"#4a3f35",textDecoration:"none",fontWeight:500},onMouseEnter:o=>o.currentTarget.style.color="#c17f3a",onMouseLeave:o=>o.currentTarget.style.color="#4a3f35",children:"Pricing"}),i.jsx("a",{href:`${zi}#contact`,style:{fontSize:"0.88rem",fontWeight:700,color:"#faf8f5",background:"#c17f3a",border:"2px solid #c17f3a",borderRadius:"6px",padding:"7px 18px",textDecoration:"none",transition:"background 0.2s, color 0.2s"},onMouseEnter:o=>{o.currentTarget.style.background="#a66830",o.currentTarget.style.borderColor="#a66830"},onMouseLeave:o=>{o.currentTarget.style.background="#c17f3a",o.currentTarget.style.borderColor="#c17f3a"},children:"Contact"})]})]})})})}const Se=[{id:1,title:"What is AI?",lessons:[{id:1,title:"AI Definition & Core Concepts"},{id:2,title:"Technology & Change"},{id:3,title:"Early AI - Rules & Limits"},{id:4,title:"Machine Learning"}]},{id:2,title:"Modern AI Systems",lessons:[{id:1,title:"How ChatGPT Generates Answers"},{id:2,title:"Training, Fine-Tuning and RLHF"},{id:3,title:"Autonomy Ladder - LLMs, Workflows, Agents"},{id:4,title:"Inside an AI Agent"},{id:5,title:"Evaluating AI Systems"},{id:6,title:"Discovering AI Tools"}]},{id:3,title:"The AI Market",lessons:[{id:1,title:"From Model to Product"},{id:2,title:"The AI Pyramid - Who Does What?"},{id:3,title:"Four Types of AI Products"},{id:4,title:"Who Controls What?"},{id:5,title:"Costs, Business Models and Access"}]},{id:4,title:"When to Use AI",lessons:[{id:1,title:"AI as Superpower or Downfall"},{id:2,title:"Patterns, Head Work and AI"},{id:3,title:"Heart Work - Protect It"},{id:4,title:"Finding the Real Goal"},{id:5,title:"Common AI Traps and How to Avoid Them"},{id:6,title:"Safeguarding Against AI Misuse"}]},{id:5,title:"Prompting Mastery",lessons:[{id:1,title:"Why Communication Matters"},{id:2,title:"Core Prompting Principles"},{id:3,title:"The CO-STAR Framework"},{id:4,title:"Improving and Refining Prompts"},{id:5,title:"Advanced Prompting Tactics"},{id:6,title:"Mastering Communication with AI"}]},{id:6,title:"Elite AI Usage",lessons:[{id:1,title:"Three Levels of AI Users"},{id:2,title:"Strategic Filtering and Staying Current"},{id:3,title:"Systems That Flow, Not Tool Chaos"},{id:4,title:"Evaluating AI Outputs and Task Stakes"},{id:5,title:"Playbooks and Compounding Success"},{id:6,title:"Quality Control for AI Outputs"},{id:7,title:"Building AI Playbooks and Systems"}]},{id:7,title:"Your AI Strategy",lessons:[{id:1,title:"Understanding the AI Landscape"},{id:2,title:"Skills for Tomorrow"},{id:3,title:"Building Your Personal Strategy"},{id:4,title:"Staying Ahead of Change"}]},{id:8,title:"AI Best Practices",lessons:[{id:1,title:"Getting Started with AI Tools"},{id:2,title:"Building AI Workflows"},{id:3,title:"Team Collaboration with AI"},{id:4,title:"Measuring AI Impact"},{id:5,title:"Continuous Improvement"},{id:6,title:"Implementation and Continuous Improvement"}]}],hy={colors:{primary:{deep:"#1a1612",electric:"#c17f3a",light:"#f4efe8"},accent:{cyan:"#c17f3a",coral:"#a66830"},background:{base:"#faf8f5",card:"#ffffff",subtle:"#f4efe8",overlay:"rgba(250, 248, 245, 0.97)"},text:{primary:"#1a1612",secondary:"#4a3f35",muted:"#9a8a7a",inverse:"#ffffff"},border:{subtle:"#e8dfd4",default:"#d4c4b0",strong:"#c17f3a"},status:{success:"#059669",warning:"#d97706",error:"#dc2626",info:"#c17f3a"}},shadows:{subtle:"0 1px 2px 0 rgba(0, 0, 0, 0.03)",default:"0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.06)",medium:"0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.04)",large:"0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.12)","3xl":"0 35px 60px -15px rgba(0, 0, 0, 0.15)",glow:{cyan:"0 1px 3px rgba(0, 0, 0, 0.08)",coral:"0 1px 3px rgba(0, 0, 0, 0.08)",blue:"0 1px 3px rgba(0, 0, 0, 0.08)"}},radius:{none:"0",sm:"0.375rem",default:"0.5rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"},spacing:{xs:"0.5rem",sm:"1rem",md:"1.5rem",lg:"2rem",xl:"3rem","2xl":"4rem"},transitions:{fast:"150ms ease",default:"200ms ease",slow:"350ms ease",smooth:"300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"},typography:{family:{primary:"Inter, system-ui, -apple-system, sans-serif",mono:"ui-monospace, monospace"},heading:{weight:700,tracking:"-0.02em"},body:{weight:400,tracking:"0"},label:{weight:600,tracking:"0.025em"}},behavior:{hoverScale:!1,hoverGlow:!1,animatedBackground:!1,bouncyEasing:!1,cornerBrackets:!1,iconRotateOnHover:!1,showAchievementBadges:!1,showStreakIndicator:!1,gamificationLanguage:!1,progressBarGlow:!1},language:{progressTitle:"Your Training Progress",progressSubtitle:"Track your learning across 44 lessons in 8 strategic modules",levelLabels:{0:"Not Started",10:"In Progress",25:"Building Knowledge",50:"Proficient",75:"Advanced"},tierLabels:{beginner:"Foundation",intermediate:"Application",advanced:"Strategy"},achievementTitles:{10:"10% Complete",25:"25% Complete",50:"50% Complete",75:"75% Complete",100:"Complete"},audienceLabels:{learners:"Individual Learners",employees:"Employees",selfEmployed:"Self-Employed",businesses:"Business Teams"}}},l=hy,gy=e=>l.shadows[e],ei=l.behavior,jo=l.language,Oc=[{id:"beginner",modules:[1,2],locked:!1,color:{bg:"bg-cyan-50",activeBg:"bg-cyan-100",text:"text-cyan-700",hover:"hover:bg-cyan-100",border:"border-l-cyan-600"}},{id:"intermediate",modules:[3,4,5],locked:!0,color:{bg:"bg-slate-100",activeBg:"bg-slate-200",text:"text-slate-900",hover:"hover:bg-slate-200",border:"border-l-slate-900"}},{id:"advanced",modules:[6,7,8],locked:!0,color:{bg:"bg-slate-50",activeBg:"bg-slate-100",text:"text-slate-700",hover:"hover:bg-slate-100",border:"border-l-slate-400"}}];function fy({user:e,onNavigate:t}){const[n,o]=b.useState(null),s=Ve();b.useEffect(()=>{const d=s.pathname.match(/\/modules\/(\d+)/);if(d){const m=parseInt(d[1]),h=Oc.find(g=>g.modules.includes(m));h&&n!==h.id&&o(h.id)}},[s.pathname]);const r=d=>{o(m=>m===d?null:d)},a=d=>s.pathname===d||s.pathname.startsWith(d+"/"),c=(d,m=30)=>d.length<=m?d:d.substring(0,m-3)+"...",u=()=>{t&&t()};return i.jsx("div",{className:"flex flex-col h-full",children:i.jsxs("nav",{className:"p-4 space-y-1 flex-1 overflow-y-auto",children:[i.jsx(G,{to:"/progress",onClick:u,className:`block px-4 py-3 rounded-lg transition-colors font-semibold text-sm ${a("/progress")?"bg-energise-400 text-white":"text-slate-700 hover:bg-energise-100"}`,children:"Progress"}),i.jsxs("div",{className:"pt-4 pb-1 flex items-center gap-3 px-4",children:[i.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap",children:"Curriculum"}),i.jsx("div",{className:"flex-1 h-px bg-energise-200"})]}),Oc.map(d=>{const m=jo.tierLabels[d.id]||d.id,h=n===d.id,g=d.modules.some(p=>a(`/modules/${p}`));return i.jsxs("div",{className:"space-y-1",children:[i.jsxs("button",{onClick:()=>r(d.id),className:`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors font-semibold text-sm ${g?`${d.color.activeBg} ${d.color.text} border-l-4 ${d.color.border}`:d.locked?"text-slate-400 hover:bg-slate-50":"text-slate-700 hover:bg-slate-100"}`,children:[i.jsxs("span",{className:"flex items-center gap-2",children:[d.locked&&i.jsx(wn,{size:13,className:"flex-shrink-0"}),m]}),h?i.jsx(un,{size:16}):i.jsx(Xn,{size:16})]}),h&&i.jsx("div",{className:"ml-2 space-y-1",children:d.modules.map(p=>{const v=Se.find(A=>A.id===p);if(!v)return null;const x=a(`/modules/${p}`);return i.jsx(G,{to:`/modules/${p}`,onClick:u,className:`block px-4 py-2.5 rounded-lg transition-colors text-sm border-l-2 font-medium ${x?`${d.color.activeBg} ${d.color.text} ${d.color.border}`:`${d.color.bg} text-slate-600 ${d.color.hover} ${d.color.border}`}`,children:c(v.title)},p)})})]},d.id)}),i.jsxs("div",{className:"pt-4 pb-1 flex items-center gap-3 px-4",children:[i.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap",children:"Resources"}),i.jsx("div",{className:"flex-1 h-px bg-energise-200"})]}),i.jsx(G,{to:"/notes",onClick:u,className:`block px-4 py-3 rounded-lg transition-colors font-semibold text-sm ${a("/notes")?"bg-slate-900 text-white":"text-slate-700 hover:bg-slate-100"}`,children:"Notes"}),i.jsx(G,{to:"/prompts",onClick:u,className:`block px-4 py-3 rounded-lg transition-colors font-semibold text-sm ${a("/prompts")?"bg-slate-900 text-white":"text-slate-700 hover:bg-slate-100"}`,children:"Prompt Vault"}),i.jsx(G,{to:"/resources",onClick:u,className:`block px-4 py-3 rounded-lg transition-colors font-semibold text-sm ${a("/resources")?"bg-slate-900 text-white":"text-slate-700 hover:bg-slate-100"}`,children:"Resources"}),i.jsx(G,{to:"/certificate",onClick:u,className:`block px-4 py-3 rounded-lg transition-colors font-semibold text-sm ${a("/certificate")?"bg-slate-900 text-white":"text-slate-700 hover:bg-slate-100"}`,children:"Certificate"})]})})}function ht({children:e,user:t,onSignOut:n}){const{sidebarOpen:o,setSidebarOpen:s}=kl(),r=Ve();return b.useEffect(()=>{r.pathname==="/progress"&&window.innerWidth>=768&&s(!0)},[r.pathname,s]),i.jsxs("div",{className:"min-h-screen relative",style:{background:"#faf8f5"},children:[i.jsx(py,{user:t}),i.jsxs("div",{className:"flex",style:{minHeight:"calc(100dvh - 4rem)"},children:[o&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"fixed inset-0 bg-black/30 z-30 md:hidden",onClick:()=>s(!1)}),i.jsx("aside",{className:"bg-white border-r overflow-y-auto flex-shrink-0 fixed left-0 top-0 z-40 pt-16",style:{borderColor:"#e8dfd4",width:"16rem",height:"100dvh"},children:i.jsx(fy,{user:t,onSignOut:n,onNavigate:()=>{window.innerWidth<768&&s(!1)}})})]}),o&&i.jsx("div",{className:"hidden md:block flex-shrink-0",style:{width:"16rem"}}),i.jsx("main",{className:"flex-1 min-w-0 relative",children:e})]})]})}function ao({size:e="md",whiteMode:t=!1}){const n={sm:{svg:48,text:"text-lg"},md:{svg:64,text:"text-xl"},lg:{svg:80,text:"text-2xl"}},{svg:o,text:s}=n[e],r="#0891b2",a=t?"#ffffff":"#1a2332",c="#0891b2",u="#0891b2",d=t?"#ffffff":"#1a2332",m=t?"#ffffff":"#1a2332";return i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsxs("svg",{width:o,height:o,viewBox:"0 0 64 64",className:"flex-shrink-0",children:[i.jsx("path",{d:"M 16 32 A 16 16 0 0 1 48 32",stroke:r,strokeWidth:"2.5",fill:"none",strokeLinecap:"round"}),i.jsx("path",{d:"M 48 32 A 16 16 0 0 1 16 32",stroke:a,strokeWidth:"2.5",fill:"none",strokeLinecap:"round"}),i.jsx("circle",{cx:"48",cy:"18",r:"2",fill:c}),i.jsx("line",{x1:"48",y1:"14",x2:"48",y2:"6",stroke:u,strokeWidth:"1.5",strokeLinecap:"round"}),i.jsx("line",{x1:"52",y1:"18",x2:"60",y2:"18",stroke:u,strokeWidth:"1.5",strokeLinecap:"round"}),i.jsx("line",{x1:"51",y1:"15",x2:"57",y2:"9",stroke:u,strokeWidth:"1.5",strokeLinecap:"round"}),i.jsx("rect",{x:"24",y:"24",width:"3.5",height:"16",fill:m,rx:"0.5"}),i.jsx("rect",{x:"24",y:"24",width:"13",height:"3",fill:m,rx:"0.5"}),i.jsx("rect",{x:"24",y:"30.5",width:"11",height:"2.5",fill:m,rx:"0.5"}),i.jsx("rect",{x:"24",y:"37",width:"13",height:"3",fill:m,rx:"0.5"})]}),i.jsxs("div",{children:[i.jsx("p",{className:`${s} font-black`,style:{color:d,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',letterSpacing:"-0.02em"},children:"Energise"}),i.jsx("p",{className:"text-xs font-semibold",style:{color:"#0891b2",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',letterSpacing:"0.05em"},children:"AI EDUCATION"})]})]})}function yy(){b.useEffect(()=>{const n=document.createElement("script");return n.src="https://js.stripe.com/v3/buy-button.js",n.async=!0,document.body.appendChild(n),()=>{document.body.removeChild(n)}},[]);const e=[{week:1,title:"What is AI",description:"Foundations of Artificial Intelligence"},{week:2,title:"AI Products",description:"Practical AI tools and applications"},{week:3,title:"Safe AI Use",description:"Responsible and ethical AI practices"},{week:4,title:"Prompting",description:"Mastering AI interaction techniques"},{week:5,title:"Website Build",description:"Building with AI technology"}],t=[{icon:an,text:"Increased employability",color:"#0fa3b1"},{icon:fa,text:"Higher salaries (£1000+)",color:"#0fa3b1"},{icon:xn,text:"Faster & smarter learning",color:"#0fa3b1"},{icon:Gn,text:"Confidence with technology",color:"#0fa3b1"}];return i.jsxs("div",{className:"w-full min-h-screen bg-white",children:[i.jsx("header",{className:"sticky top-0 z-20 bg-white border-b",style:{borderColor:l.colors.border.subtle},children:i.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"flex justify-between items-center h-16",children:[i.jsx(ao,{size:"sm"}),i.jsxs("nav",{className:"hidden sm:flex gap-8",children:[i.jsx("a",{href:"#why",className:"text-sm font-medium hover:text-cyan-600 transition-colors",children:"Why"}),i.jsx("a",{href:"#about",className:"text-sm font-medium hover:text-cyan-600 transition-colors",children:"About"}),i.jsx("a",{href:"#curriculum",className:"text-sm font-medium hover:text-cyan-600 transition-colors",children:"Curriculum"})]})]})})}),i.jsx("section",{className:"py-16 sm:py-24 px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[i.jsxs("div",{className:"mb-6",children:[i.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold mb-6",style:{color:l.colors.text.primary},children:"AI Education Program"}),i.jsx("p",{className:"text-lg sm:text-xl",style:{color:l.colors.text.secondary},children:"Give your teenager the AI advantage for their future careers"})]}),i.jsx("div",{className:"inline-block px-4 py-2 rounded-full border",style:{borderColor:l.colors.accent.cyan,backgroundColor:`${l.colors.accent.cyan}08`},children:i.jsx("span",{className:"text-sm font-semibold",style:{color:l.colors.accent.cyan},children:"Only 29 spots available • First 15 students get £20 discount"})})]})}),i.jsx("section",{id:"why",className:"py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b",style:{background:`linear-gradient(135deg, ${l.colors.accent.cyan}05 0%, transparent 100%)`},children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-8 text-center",style:{color:l.colors.text.primary},children:"Why We Created This"}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-12",children:[i.jsxs("div",{className:"p-6 rounded-lg border",style:{borderColor:l.colors.border.subtle},children:[i.jsx("p",{className:"text-base leading-relaxed mb-4 italic",style:{color:l.colors.text.secondary},children:"In a world changing this fast, traditional education alone may not be enough."}),i.jsx("p",{className:"text-base leading-relaxed",style:{color:l.colors.text.secondary},children:"AI is drastically changing the future of work, and AI skills are becoming essential for success."})]}),i.jsxs("div",{className:"p-6 rounded-lg",style:{background:`linear-gradient(135deg, ${l.colors.primary.electric} 0%, ${l.colors.accent.cyan} 100%)`},children:[i.jsx("p",{className:"text-xl font-bold text-white mb-2",children:'"UK employers pay around 14% more for AI-skilled roles"'}),i.jsx("p",{className:"text-white/90 text-sm",children:"— PwC"})]})]}),i.jsxs("div",{className:"p-8 rounded-lg border text-center",style:{borderColor:l.colors.border.subtle,backgroundColor:l.colors.background.card},children:[i.jsx(ui,{size:40,className:"mx-auto mb-4",style:{color:l.colors.accent.cyan}}),i.jsx("h3",{className:"text-2xl font-bold mb-4",style:{color:l.colors.text.primary},children:"Give your teenager the AI advantage for their future careers"})]})]})}),i.jsx("section",{id:"about",className:"py-16 sm:py-24 px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-8 text-center",style:{color:l.colors.text.primary},children:"About Energise AI Education"}),i.jsx("div",{className:"p-8 rounded-lg border",style:{borderColor:l.colors.border.subtle,backgroundColor:l.colors.background.card},children:i.jsx("p",{className:"text-lg leading-relaxed",style:{color:l.colors.text.secondary},children:"Energise AI Education is dedicated to equipping young people with essential AI skills and knowledge. We provide practical, hands-on training that goes beyond tools to build real understanding of AI's impact on careers, society, and the future of work."})})]})}),i.jsx("section",{id:"curriculum",className:"py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b",style:{background:`linear-gradient(135deg, ${l.colors.accent.cyan}05 0%, transparent 100%)`},children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-8 text-center",style:{color:l.colors.text.primary},children:"Our Curriculum"}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12",children:e.map(n=>i.jsxs("div",{className:"p-4 rounded-lg border text-center hover:shadow-md transition-all",style:{borderColor:l.colors.accent.cyan,backgroundColor:`${l.colors.accent.cyan}08`},children:[i.jsxs("div",{className:"text-2xl font-bold mb-2",style:{color:l.colors.accent.cyan},children:["Week ",n.week]}),i.jsx("h3",{className:"font-semibold mb-1",style:{color:l.colors.text.primary},children:n.title}),i.jsx("p",{className:"text-sm",style:{color:l.colors.text.secondary},children:n.description})]},n.week))}),i.jsx("div",{className:"text-center mb-12",children:i.jsxs(G,{to:"/program-curriculum",className:"inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105",style:{background:`linear-gradient(135deg, ${l.colors.primary.electric} 0%, ${l.colors.accent.cyan} 100%)`,color:"white"},children:["Learn More About Our Program ",i.jsx(mt,{size:20})]})}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[i.jsxs("div",{className:"p-6 rounded-lg border text-center",style:{borderColor:l.colors.border.subtle,backgroundColor:l.colors.background.card},children:[i.jsx("h3",{className:"font-semibold mb-2",style:{color:l.colors.text.primary},children:"Start Date"}),i.jsxs("p",{className:"text-2xl font-bold",style:{color:l.colors.accent.cyan},children:["18",i.jsx("sup",{children:"th"})," May"]})]}),i.jsxs("div",{className:"p-6 rounded-lg border text-center",style:{borderColor:l.colors.border.subtle,backgroundColor:l.colors.background.card},children:[i.jsx("h3",{className:"font-semibold mb-2",style:{color:l.colors.text.primary},children:"Format"}),i.jsx("p",{className:"text-lg",style:{color:l.colors.text.secondary},children:"1 hour online lessons"}),i.jsx("p",{className:"text-sm",style:{color:l.colors.text.secondary},children:"10 lessons total"})]}),i.jsxs("div",{className:"p-6 rounded-lg border text-center",style:{borderColor:l.colors.border.subtle,backgroundColor:l.colors.background.card},children:[i.jsx("h3",{className:"font-semibold mb-2",style:{color:l.colors.text.primary},children:"Price"}),i.jsx("p",{className:"text-2xl font-bold",style:{color:l.colors.accent.cyan},children:"£11"}),i.jsx("p",{className:"text-sm",style:{color:l.colors.text.secondary},children:"per lesson"})]})]})]})}),i.jsx("section",{className:"py-16 sm:py-24 px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-8 text-center",style:{color:l.colors.text.primary},children:"AI Skills Give"}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-12",children:t.map((n,o)=>{const s=n.icon;return i.jsxs("div",{className:"flex items-start gap-4 p-6 rounded-lg border",style:{borderColor:l.colors.border.subtle,backgroundColor:l.colors.background.card},children:[i.jsx("div",{className:"flex-shrink-0 mt-1",children:i.jsx(s,{size:24,style:{color:n.color}})}),i.jsx("p",{className:"text-lg font-semibold",style:{color:l.colors.text.primary},children:n.text})]},o)})}),i.jsxs("div",{className:"p-8 rounded-lg border text-center bg-gradient-to-br",style:{borderColor:l.colors.border.subtle,background:`linear-gradient(135deg, ${l.colors.accent.cyan}08 0%, ${l.colors.background.card} 100%)`},children:[i.jsx(fa,{size:40,className:"mx-auto mb-4",style:{color:l.colors.accent.cyan}}),i.jsx("h3",{className:"text-2xl font-bold mb-2",style:{color:l.colors.text.primary},children:"Receive a certificate upon completion"}),i.jsx("p",{style:{color:l.colors.text.secondary},children:"Students who complete the program receive an official certificate"})]})]})}),i.jsx("section",{className:"py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b",style:{background:`linear-gradient(135deg, ${l.colors.accent.cyan}08 0%, ${l.colors.primary.deep}08 100%)`},children:i.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[i.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-8",style:{color:l.colors.text.primary},children:"Ready to Start Your AI Journey?"}),i.jsx("div",{className:"p-8 rounded-lg border",style:{borderColor:l.colors.border.subtle,backgroundColor:"white"},children:i.jsx("stripe-buy-button",{"buy-button-id":"buy_btn_1TQ3drJaju4Y4wsr7v4itBjq","publishable-key":"pk_live_51RkVzzJaju4Y4wsrQsnGXWnUAr9vwAYU7OFPGgLtIcGxfNaW9AsBejXDTFtrCMGikdLzIL3pqvt6ryM0vKwltScV00KH4zcc30"})})]})}),i.jsx("footer",{className:"border-t py-8 px-4 sm:px-6 lg:px-8",style:{borderColor:l.colors.border.subtle},children:i.jsx("div",{className:"max-w-6xl mx-auto text-center",children:i.jsx("p",{style:{color:l.colors.text.secondary},children:"© 2026 Energise AI Education. All rights reserved."})})})]})}const Uc=[{icon:uy,name:"Video Lessons",benefit:"Concise explanations designed for action. Every video includes copy-paste summaries you can feed directly into an LLM and convert for your specific needs -- extracting maximum value from every lesson."},{icon:ks,name:"Hands-On Activities",benefit:"Don't just learn about AI -- apply it. Build valuable, career-relevant skills through practical application, not passive consumption."},{icon:jm,name:"Quick-Reference Guides",benefit:"Short on time or already familiar with the basics? Jump straight to what matters or use these for rapid revision."},{icon:_n,name:"Module Notes",benefit:"Accelerate learning with distilled insights from each module -- no fluff, just what you need to know."},{icon:Gf,name:"Knowledge Checks",benefit:"Test your understanding and cement new concepts through targeted quizzes after each module."},{icon:ny,name:"Progress Tracking",benefit:"Resume exactly where you left off -- never lose momentum or waste time searching for your place."},{icon:xl,name:"Application Tips",benefit:`Never wonder "How do I actually use this?" Specific, practical guidance ensures you can immediately apply what you've learned.`},{icon:zm,name:"Lasting Frameworks",benefit:"Build durable understanding through timeless mental models -- not information that becomes outdated as tools evolve."},{icon:Zf,name:"Proprietary Mental Models",benefit:"Strategic thinking frameworks built from real-world experience, not generic theory you'll find in every other course."},{icon:dy,name:"AI Adoption Process",benefit:"Our streamlined methodology for integrating AI into your workflow -- turning knowledge into consistent productivity gains."},{icon:Em,name:"Maximum Learning, Zero Waste",benefit:"Every component is designed for efficiency -- dense with value, stripped of filler."},{icon:qm,name:"Final Project",benefit:"Tangible proof of capability, not just a certificate. Build something real that demonstrates mastery and creates immediate value."}];function Dm(){return i.jsxs("section",{className:"mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up",style:{animationDelay:"0.45s"},children:[i.jsxs("div",{className:"mb-10",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4",style:{backgroundColor:`${l.colors.accent.coral}10`},children:[i.jsx(Em,{size:14,style:{color:l.colors.accent.coral}}),i.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider",style:{color:l.colors.accent.coral},children:"Platform Features"})]}),i.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-2",style:{letterSpacing:"-0.03em",color:l.colors.text.primary},children:"What's Inside"}),i.jsx("p",{style:{color:l.colors.text.secondary},children:"A few of the components built into the platform"})]}),i.jsx("div",{className:"hidden md:block rounded-xl border-2 overflow-hidden",style:{borderColor:l.colors.border.subtle,boxShadow:l.shadows.medium},children:i.jsxs("table",{className:"w-full",children:[i.jsx("thead",{children:i.jsxs("tr",{style:{background:`linear-gradient(135deg, ${l.colors.primary.deep} 0%, ${l.colors.primary.electric} 100%)`},children:[i.jsx("th",{className:"text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/90 w-[260px]",children:"Feature"}),i.jsx("th",{className:"text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/90",children:"What You Get"})]})}),i.jsx("tbody",{children:Uc.map((e,t)=>{const n=e.icon,o=t%2===0;return i.jsxs("tr",{className:"group transition-colors duration-150",style:{backgroundColor:o?l.colors.background.card:l.colors.background.subtle},onMouseEnter:s=>{s.currentTarget.style.backgroundColor=`${l.colors.accent.cyan}08`},onMouseLeave:s=>{s.currentTarget.style.backgroundColor=o?l.colors.background.card:l.colors.background.subtle},children:[i.jsx("td",{className:"px-6 py-5 align-top",style:{borderBottom:`1px solid ${l.colors.border.subtle}`},children:i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform ",style:{backgroundColor:`${l.colors.accent.cyan}12`,transitionDuration:"200ms"},children:i.jsx(n,{size:18,style:{color:l.colors.accent.cyan}})}),i.jsx("span",{className:"font-semibold text-sm",style:{color:l.colors.text.primary},children:e.name})]})}),i.jsx("td",{className:"px-6 py-5 align-top",style:{borderBottom:`1px solid ${l.colors.border.subtle}`},children:i.jsx("p",{className:"text-sm leading-relaxed",style:{color:l.colors.text.secondary},children:e.benefit})})]},e.name)})})]})}),i.jsx("div",{className:"md:hidden space-y-3",children:Uc.map(e=>{const t=e.icon;return i.jsxs("div",{className:"p-5 rounded-xl border transition-all",style:{borderColor:l.colors.border.subtle,backgroundColor:l.colors.background.card,boxShadow:l.shadows.subtle},children:[i.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[i.jsx("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0",style:{backgroundColor:`${l.colors.accent.cyan}12`},children:i.jsx(t,{size:18,style:{color:l.colors.accent.cyan}})}),i.jsx("span",{className:"font-semibold text-sm",style:{color:l.colors.text.primary},children:e.name})]}),i.jsx("p",{className:"text-sm leading-relaxed",style:{color:l.colors.text.secondary},children:e.benefit})]},e.name)})})]})}const ti={"1-1":{skill:"Routine Task Delegation",connection:"AI handles specific mental tasks better than humans. Delegate these tasks and focus on what humans do best.",activity:`1. Pick one task you need to do today
2. Paste it into ChatGPT or Claude
3. Use the output for your work`,whyMatters:"AI handles repetitive mental work faster and more consistently than humans, freeing your brain for strategic thinking, creative problem-solving, and relationship building that AI can't replicate.",learners:`**Apply this to:**
Summarizing materials, creating practice questions, data calculations, routine communications.

**Why this matters:**
- **Study more effectively** by using AI for mechanical tasks (summarizing readings, generating practice questions) while focusing your brain on understanding concepts and developing critical thinking
- **Build responsible AI habits** early by understanding the difference between AI assistance (summarizing sources, organizing information) and replacement (having AI think for you)
- **Prepare for AI-integrated careers** by developing judgment about when to delegate versus when to think independently`,employees:`**Apply this to:**
Routine emails, document summaries, data processing, basic drafting.

**Why this matters:**
- **Increase your value** by spending time on decisions, relationships, and problem-solving rather than mechanical tasks that don't differentiate you
- **Work like you have an assistant** without the cost, handling routine work faster while maintaining quality on strategic contributions
- **Position for advancement** by demonstrating ability to leverage tools effectively while protecting high-value work`,selfEmployed:`**Apply this to:**
Client communications, proposals, business administration, marketing content.

**Why this matters:**
- **Scale your capacity** by handling routine business tasks faster, creating time for billable client work and business development
- **Maintain professional quality** on all outputs while reducing time spent on non-revenue-generating administrative work
- **Compete with larger operations** by matching their output quality and speed without matching their overhead`,businesses:`**Apply this to:**
Employee communications, client materials, data work, documentation.

**Why this matters:**
- **Scale output without scaling headcount** by enabling employees to handle routine work efficiently while focusing human effort on strategic value
- **Improve consistency** across routine communications and documentation while freeing skilled employees for high-value contributions
- **Build competitive advantage** through faster operations and better resource allocation than competitors still doing routine work manually`},"1-2":{skill:"Visual Material Creation",connection:"Understanding how AI learns from data means you can use it as a tool that improves over time. Practice building knowledge that grows.",activity:`1. Go to ChatGPT or Claude
2. Use this prompt:

**"Create a visual timeline showing the evolution of AI with these key events:
- 1950: Turing Test proposed
- 1956: 'Artificial Intelligence' term coined
- 1957: Perceptron invented
- 1966: ELIZA chatbot created
- 1970s: AI Winter begins
- 1986: Backpropagation algorithm developed

Format as a clear, visual timeline I can save and build on later."**

3. Save it - you'll add to this in next lessons`,whyMatters:"Visual materials make complex information immediately understandable, improve communication quality across all contexts, and are now instant to create without design skills or specialized software.",learners:`**Apply this to:**
Course content organization, complex topic understanding, study materials, assignment planning.

**Why this matters:**
- **Understand faster** by converting overwhelming text-heavy information into visual formats that reveal patterns and relationships
- **Communicate better** in presentations and projects by creating professional visuals that clarify complex ideas
- **Build reusable study assets** like timelines, concept maps, and process diagrams without needing design software or artistic skills`,employees:`**Apply this to:**
Project tracking, process documentation, presentations, strategic planning.

**Why this matters:**
- **Remove confusion** from complex topics by creating visuals that make relationships and processes immediately clear to stakeholders
- **Increase your value** by bringing clarity to complicated situations through visual communication that others struggle to create
- **Work independently** on visual materials without waiting for design resources or specialized departments`,selfEmployed:`**Apply this to:**
Client-facing materials, service descriptions, case studies, proposals.

**Why this matters:**
- **Signal professionalism** through polished visual materials that build client confidence in your expertise and attention to quality
- **Compete on presentation** with larger companies by matching their visual quality while maintaining solo business efficiency
- **Communicate value clearly** through visuals that make your expertise and approach immediately understandable to prospects`,businesses:`**Apply this to:**
Project tracking, process documentation, client deliverables, strategic planning.

**Why this matters:**
- **Improve organizational communication** by enabling everyone to create clear visuals rather than relying on specialized resources
- **Preserve and share knowledge** effectively through visual documentation that makes complex processes accessible to all employees
- **Maintain current documentation** by removing the friction of visual creation that previously kept materials outdated`},"1-3":{skill:"Iterative Material Updating",connection:"AI maintains context across conversations. Build on previous work instead of recreating each time.",activity:`1. Open your timeline from Lesson 2
2. Use this prompt:

**"Add these new events to my existing timeline:
- 2010: Deep Learning revolution (AI using multiple layers for complex patterns)
- 2017: Transformers architecture (solved the memory problem in AI)
- 2020s: ChatGPT era (AI that understands full conversation context)

Keep the same visual format and integrate these seamlessly with the previous events."**

3. Save the updated version - you'll add Lesson 4 events next`,whyMatters:"Iterative improvement replaces recreation, materials evolve with understanding, and removing update friction means work stays current instead of becoming outdated.",learners:`**Apply this to:**
Study materials that evolve, collaborative projects, iterative assignments, portfolio development.

**Why this matters:**
- **Match how learning actually works** by evolving materials as understanding deepens rather than treating knowledge as fixed
- **Save massive time** by updating existing work instead of recreating from scratch when information changes or understanding improves
- **Build lasting study assets** that grow in value over time rather than becoming obsolete each term`,employees:`**Apply this to:**
Recurring reports, presentation materials, project documentation, living documents.

**Why this matters:**
- **Build reusable assets** that improve with each iteration rather than starting fresh for similar work
- **Respond faster to change** by updating existing materials rather than recreating when requirements or information shifts
- **Create institutional knowledge** through materials that evolve and improve rather than being recreated by each new person`,selfEmployed:`**Apply this to:**
Client proposals, service offerings, portfolio materials, marketing content.

**Why this matters:**
- **Grow business assets** that increase in value through refinement rather than recreating for each client or project
- **Adapt quickly to market changes** by evolving offerings and materials rather than rebuilding from scratch
- **Maintain professional quality** while operating efficiently by refining proven materials rather than reinventing constantly`,businesses:`**Apply this to:**
Company policies, sales materials, product documentation, training content.

**Why this matters:**
- **Keep documentation current** by making updates easy rather than letting materials become outdated due to update friction
- **Build organizational memory** through materials that evolve with the business rather than becoming obsolete
- **Enable continuous improvement** across all documentation and materials rather than treating them as static deliverables`},"1-4":{skill:"Visual-to-Text Extraction",connection:"AI generates new content from learned patterns and can extract and create from any format, including images.",activity:`1. Use this prompt to complete your timeline:

**"Add these final events to my timeline:
- 2022-2024: LLMs & Generative AI (AI predicts patterns through compression and generalization)
- 2023: Multi-modal AI (one AI model handles text, images, and more)
- 2024: AI Explosion (massive data + computational power + investment + breakthroughs)

Keep the visual timeline format consistent with all previous events."**

2. Save the complete timeline as an image
3. Upload the image and use this prompt:

**"Convert this AI evolution timeline into a clear written summary for someone with no technical background. Explain what each major phase meant and why it mattered."**

4. Use this summary for your work`,whyMatters:"Visual and written work no longer have to be separate steps, visual thinking becomes immediately actionable, and information becomes searchable and shareable regardless of original format.",learners:`**Apply this to:**
Lecture slides, handwritten notes, diagrams, whiteboard content, printed materials.

**Why this matters:**
- **Study how you think best** by working visually when useful then extracting to written format for submissions without manual rewriting
- **Capture information faster** by photographing whiteboards, slides, or handwritten notes then instantly converting to searchable text
- **Bridge visual and written learning** by thinking in whatever format suits the task then converting seamlessly to required output format`,employees:`**Apply this to:**
Meeting visuals, hand-drawn processes, printed documents, charts and data visualizations.

**Why this matters:**
- **Document meetings instantly** by capturing whiteboard sessions or visual collaboration then converting to written summaries and action items
- **Digitize efficiently** by extracting from any visual format rather than manual retyping or reformatting
- **Integrate visual and written workflows** so collaborative visual work produces written deliverables without manual conversion steps`,selfEmployed:`**Apply this to:**
Client meeting notes, site documentation, sketches and planning visuals, field work capture.

**Why this matters:**
- **Maintain professional documentation standards** without sacrificing the efficiency of visual note-taking and field capture
- **Work in whatever format suits the situation** knowing you can instantly convert to polished deliverables for clients
- **Scale documentation quality** across all client interactions without the time cost that previously limited thoroughness`,businesses:`**Apply this to:**
Meeting documentation, workshop outputs, client collaboration sessions, strategy visuals.

**Why this matters:**
- **Capture organizational knowledge** that previously evaporated between visual collaboration and written documentation
- **Enable everyone to document** effectively regardless of their preference for visual or written communication
- **Bridge collaboration and record-keeping** so the value created in visual sessions gets preserved in searchable, shareable formats`},"2-1":{skill:"Structured First Draft Generation",connection:"AI processes language through pattern prediction, making it excellent at creating organized first drafts with structure and content together.",activity:`1. Pick any project you need to start (document, plan, analysis, proposal)
2. Use this prompt:

**"Create a structured first draft for [YOUR PROJECT TYPE - e.g., project proposal, essay, business plan, report].

Include:
- [KEY REQUIREMENT 1]
- [KEY REQUIREMENT 2]
- [KEY REQUIREMENT 3]

Provide a complete framework with baseline content I can refine."**

3. Use the structured draft as your starting point
4. Refine with your expertise, judgment, and specific details`,whyMatters:"Starting from organized structure with baseline content eliminates blank page paralysis, reduces project initiation time from hours to minutes, and lets you focus on strategic refinement instead of mechanical creation.",learners:`**Apply this to:**
Essays, project reports, study plans, presentations, research outlines.

**Why this matters:**
- **Start assignments faster** by getting organized structure and baseline content immediately rather than staring at blank pages
- **Focus on learning value** by spending time analyzing, evaluating, and adding original thinking rather than formatting and organizing
- **Improve quality** by refining a complete draft rather than building from scratch under time pressure`,employees:`**Apply this to:**
Reports, proposals, project plans, presentations, documentation.

**Why this matters:**
- **Accelerate project starts** by getting structured drafts in minutes rather than spending hours on initial creation
- **Deliver higher quality** by focusing time on strategic refinement and accuracy rather than mechanical framework building
- **Handle more projects** by reducing initiation time while maintaining or improving output standards`,selfEmployed:`**Apply this to:**
Client proposals, project plans, deliverables, marketing materials.

**Why this matters:**
- **Respond to opportunities faster** by creating professional proposals and plans quickly while competitors are still drafting
- **Increase billable capacity** by spending less time on framework creation and more on revenue-generating client work
- **Maintain consistent quality** across all deliverables through structured approaches rather than reinventing each time`,businesses:`**Apply this to:**
Project documentation, client deliverables, internal reports, planning materials.

**Why this matters:**
- **Reduce project initiation delays** organization-wide by enabling faster starts with consistent structure
- **Improve output consistency** through standardized frameworks while allowing customization for specific needs
- **Scale knowledge work** by making structured creation accessible to all employees regardless of experience level`},"2-2":{skill:"Context Integration",connection:"AI training happened once. It knows patterns from training data but doesn't learn from you. Add what it doesn't know by including it in your requests.",activity:`1. Pick a project needing both general knowledge and your specific context
2. Use this prompt structure:

**"Create [WHAT YOU NEED] using this specific information:

**Context:**
- [RELEVANT DETAIL 1]
- [RELEVANT DETAIL 2]
- [RELEVANT DETAIL 3]

**Requirements:**
- [SPECIFIC REQUIREMENT 1]
- [SPECIFIC REQUIREMENT 2]

Combine your general knowledge with my specific context."**

3. Use the output that integrates both general patterns and your specific information`,whyMatters:"AI's general knowledge becomes useful when combined with your specific context, generic outputs become personalized through context integration, and results match your actual situation instead of broad assumptions.",learners:`**Apply this to:**
Assignments, essays, project work requiring course-specific content.

**Why this matters:**
- **Get course-relevant outputs** by including lecture notes, readings, or assignment guidelines rather than generic educational content
- **Improve accuracy** by giving AI your specific learning context instead of relying on its general knowledge
- **Save revision time** by getting outputs aligned with your actual course requirements from the start`,employees:`**Apply this to:**
Reports, proposals, documentation requiring company-specific information.

**Why this matters:**
- **Create immediately usable outputs** by including company data, project specifics, or organizational context rather than generic business content
- **Reduce revision cycles** by providing specific information upfront instead of refining generic drafts repeatedly
- **Demonstrate understanding** by integrating organizational knowledge that shows familiarity with actual business needs`,selfEmployed:`**Apply this to:**
Client deliverables, proposals, project documentation requiring relationship context.

**Why this matters:**
- **Deliver personalized work** by including client background, preferences, and project history rather than template-based outputs
- **Build client relationships** through outputs that demonstrate understanding of their specific situation and needs
- **Differentiate your service** by providing customized deliverables while maintaining efficiency through AI assistance`,businesses:`**Apply this to:**
Internal documentation, client materials, project work requiring organizational context.

**Why this matters:**
- **Align outputs with business standards** by including company policies, brand guidelines, and organizational context
- **Improve work quality** across teams by making specific business knowledge integration a standard practice
- **Scale organizational knowledge** by making company-specific information readily applicable through AI tools`},"2-3":{skill:"Role Optimization",connection:'Fine-tuning gave ChatGPT the role of "helpful assistant." You can choose and optimize specific roles to get exactly what you need.',activity:`1. Pick a task you need help with
2. Start with: "You are a [EXPERT TYPE]"
3. Get the output - if not quite right, refine the role
4. Test variations:
   - Make role more specific
   - Add context about audience
   - Specify expertise area
5. Use the best version

**Example progression:**
- Try 1: "You are a writer" → too generic
- Try 2: "You are a technical writer" → better
- Try 3: "You are a technical writer explaining complex topics to beginners" → exactly what you need`,whyMatters:"Generic roles produce generic outputs, optimized roles match your exact needs, and iterative refinement ensures quality without starting from scratch repeatedly.",learners:`**Apply this to:**
Any task where output quality, tone, or approach matters.

**Why this matters:**
- **Get outputs that match your learning style** by refining roles to suit how you understand information best
- **Improve explanation quality** by specifying expertise level and teaching approach rather than accepting generic responses
- **Develop optimization skills** that transfer to any AI tool or situation requiring precision`,employees:`**Apply this to:**
Work outputs requiring specific quality, tone, or professional standards.

**Why this matters:**
- **Match organizational communication standards** by refining roles to fit your company's tone and professional requirements
- **Reduce revision time** by getting closer to target quality on first output through role optimization
- **Build reusable role definitions** for recurring work types, creating efficiency across similar projects`,selfEmployed:`**Apply this to:**
Client work requiring precision, professionalism, and consistent quality.

**Why this matters:**
- **Meet client expectations** by optimizing roles to match their industry, preferences, and quality standards
- **Maintain professional standards** across all deliverables through refined role definitions rather than inconsistent outputs
- **Work more efficiently** by documenting which role optimizations work best for different client types and project needs`,businesses:`**Apply this to:**
Organizational outputs requiring consistency, quality, and brand alignment.

**Why this matters:**
- **Create quality standards** by documenting optimized role definitions for common business outputs
- **Enable consistent quality** across teams by sharing proven role optimizations rather than each employee experimenting independently
- **Build institutional knowledge** through collected role definitions that become organizational assets`},"2-4":{skill:"Task Decomposition & Leverage Mapping",connection:"Understanding AI's capability levels helps you see work more clearly. Breaking tasks into steps lets you apply the right leverage to each part.",activity:`1. Pick a complex task you need to do
2. Use this framework:

**"Break down this task into clear steps: [YOUR COMPLEX TASK]

For each step, help me identify:
1. What exactly needs to happen
2. Whether it's mechanical or requires judgment
3. What leverage could apply (AI, template, delegation, automation, or personal execution)

Provide 5-10 numbered steps."**

3. Review the breakdown
4. Mark each step: AI / Template / Delegate / Automate / Do yourself
5. Execute following your leverage map`,whyMatters:"Complex tasks become manageable through decomposition, each step gets appropriate leverage instead of blanket approaches, and you build systematic workflows you can reuse and refine.",learners:`**Apply this to:**
Essays, projects, study plans, complex assignments.

**Why this matters:**
- **Reduce overwhelm** by seeing complex work as manageable steps rather than monolithic tasks
- **Plan time accurately** by understanding each step's requirements and appropriate tools
- **Build reusable systems** for recurring work types like essays or project reports`,employees:`**Apply this to:**
Reports, projects, presentations, complex analysis.

**Why this matters:**
- **Estimate timelines realistically** by breaking work into visible steps with clear effort requirements
- **Identify bottlenecks early** by seeing which steps lack appropriate leverage or resources
- **Create repeatable processes** for common work types, building efficiency across similar projects`,selfEmployed:`**Apply this to:**
Client deliverables, service delivery, business operations.

**Why this matters:**
- **Price services accurately** by understanding actual effort and leverage opportunities in your delivery process
- **Streamline delivery** by documenting proven workflows for common client work
- **Scale capacity** by systematically identifying which steps can be leveraged without sacrificing quality`,businesses:`**Apply this to:**
Processes, workflows, recurring deliverables, project planning.

**Why this matters:**
- **Standardize project execution** by documenting decomposition and leverage approaches for common work types
- **Improve estimation accuracy** across teams through systematic task breakdown
- **Identify automation opportunities** by making workflow steps visible and analyzable`},"2-5":{skill:"Knowledge Articulation & Documentation",connection:"Agents need knowledge to work effectively. Your specific expertise becomes powerful when documented and integrated.",activity:`1. Pick something you do regularly where you have specific knowledge others don't
2. Document what only you know:

**"For this task: [YOUR TASK]

Help me articulate my specific knowledge by asking about:
- My preferences and quality standards
- Specific requirements for my situation
- My methods or approaches that work
- Things I've learned from experience
- Common mistakes I avoid

Ask me questions to extract this knowledge."**

3. Answer AI's questions
4. Use the documented knowledge with AI for your task
5. Save the knowledge for reuse`,whyMatters:"Tacit knowledge becomes explicit and reusable, personal expertise scales beyond your direct involvement, and quality becomes systematic instead of dependent on remembering everything.",learners:`**Apply this to:**
Your study methods, teacher preferences, course-specific requirements.

**Why this matters:**
- **Make learning approaches reusable** by documenting what works for you across different subjects and contexts
- **Improve output quality** by explicitly capturing teacher preferences and course requirements
- **Build learning systems** that transfer across terms rather than restarting each time`,employees:`**Apply this to:**
Manager preferences, team standards, project-specific requirements.

**Why this matters:**
- **Meet expectations consistently** by documenting unwritten rules and specific requirements of your role
- **Onboard faster into new projects** by having systematic way to capture context and requirements
- **Create knowledge assets** that make your expertise accessible without your direct involvement in every decision`,selfEmployed:`**Apply this to:**
Client preferences, your proven methods, relationship context, quality standards.

**Why this matters:**
- **Deliver consistent quality** by documenting successful approaches rather than reinventing for each project
- **Scale your expertise** by making your knowledge accessible to AI assistance without compromising personalization
- **Build business value** through documented methods that become sellable assets or training materials`,businesses:`**Apply this to:**
Internal processes, brand standards, organizational culture, proven methods.

**Why this matters:**
- **Preserve institutional knowledge** by capturing expertise before people leave or move roles
- **Standardize quality** by making implicit expertise explicit and accessible to all employees
- **Scale organizational capabilities** by documenting proven approaches that new hires can access immediately`},"2-6":{skill:"AI Tool Discovery & Ecosystem Navigation",connection:"Millions of AI tools exist beyond ChatGPT. Knowing where to look opens up the entire ecosystem.",activity:`1. Pick a specific task you need AI for
2. Search systematically:

**Search in these locations:**
- **AI Directories:** Product Hunt, There's An AI For That, Futurepedia, AI Tool Guru
- **Communities:** Reddit (r/ArtificialIntelligence, r/ChatGPT, task-specific subreddits)
- **Social:** Twitter/X (#AITools, #AI + your task), LinkedIn AI communities
- **Reviews:** YouTube "[your task] AI tools 2025"

3. Document what you find:
   - Tool names
   - Key features
   - Pricing/access
   - User feedback
4. Keep this research for when you need a solution`,whyMatters:"Specialized tools outperform general ones for specific tasks, awareness of the full ecosystem prevents limiting yourself to famous brands, and systematic discovery becomes a repeatable skill.",learners:`**Apply this to:**
Any academic or study task where AI might help.

**Why this matters:**
- **Access specialized tools** designed specifically for learning and education rather than general-purpose AI
- **Stay aware of emerging capabilities** that could give you academic advantages
- **Develop resourcefulness** by knowing how to find tools for any learning challenge`,employees:`**Apply this to:**
Any work task or professional challenge.

**Why this matters:**
- **Find best-fit solutions** for specific work problems rather than forcing general tools into every situation
- **Bring value through discovery** by introducing effective tools to your team
- **Stay competitive** by accessing specialized capabilities as they emerge`,selfEmployed:`**Apply this to:**
Any business need or client requirement.

**Why this matters:**
- **Solve client problems effectively** by knowing how to discover tools for any challenge that emerges
- **Maintain competitive edge** by accessing best-in-class tools rather than just well-known brands
- **Adapt to market changes** by systematically discovering new capabilities rather than relying on existing knowledge`,businesses:`**Apply this to:**
Any organizational need or operational challenge.

**Why this matters:**
- **Enable teams to self-serve solutions** by teaching systematic discovery rather than centralizing tool selection
- **Access full market capabilities** rather than limiting to well-known vendors or existing relationships
- **Accelerate innovation** by making teams aware of emerging tools and capabilities across the ecosystem`},"3-1":{skill:"Systematic Decision Analysis",connection:"You make dozens of decisions weekly. Most people decide based on gut feel or limited perspective. AI can show you blind spots, trade-offs, and second-order effects before you commit.",activity:`Pick one real decision you're facing this week (work, school, business, life - anything with real consequences). Use AI to think it through systematically.

**Use this decision clarity prompt:**

**"I'm facing a decision and need help thinking through it clearly.

**The decision I'm making:**
[Describe specifically what you're choosing between - be concrete]

**What I'm trying to achieve:**
[Your goal - what does success look like?]

**My constraints:**
[Time, money, resources, skills, other limitations]

**What worries me:**
[Risks, uncertainties, things that could go wrong]

**Information I have:**
[What you know - data, past experience, context]

**Information I'm missing:**
[What you wish you knew but don't]

Help me make this decision by:

1. **Clarifying the real question** - Restate my decision more clearly if I'm framing it wrong

2. **Generating options** - Give me 5 different ways I could approach this, including options I haven't considered

3. **Analyzing trade-offs** - For each option, show:
   - What I gain
   - What I give up
   - Hidden costs or risks
   - Second-order effects (what happens after the immediate result)

4. **Stress-testing my thinking** - Where am I:
   - Making assumptions that might be wrong?
   - Overlooking important factors?
   - Being influenced by bias (recency, confirmation, sunk cost)?
   - Optimizing for the wrong thing?

5. **Identifying decision criteria** - What factors should actually drive this choice? Rank them by importance.

6. **Red-teaming** - Argue against my current leading option. What's the strongest case for NOT doing what I'm leaning toward?

7. **Recommending next steps** - Don't tell me what to decide. Tell me:
   - What information would most change this decision?
   - What small test could I run to learn more?
   - What questions should I ask myself or others?
   - When should I actually make this decision (now vs later)?

Present this as a structured analysis, not a conversation. I need clarity, not endless back-and-forth."**`,whyMatters:"You make better decisions by seeing what you're missing, avoid costly mistakes by stress-testing before committing, and build systematic thinking that improves every future decision.",learners:`**Apply this to:**
Academic and career decisions (course selection, university choices, part-time work, internships, post-graduation plans).

**Extract full value:**
Use for decisions that affect your future - AI helps you see long-term consequences you'd miss at 16-18.

**Why this matters:**
- **Make better life choices** by seeing long-term consequences, hidden costs, and blind spots in education and career decisions that affect your future
- **Develop systematic thinking** that improves judgment across all decisions rather than relying on gut feel or impulse
- **Reduce decision anxiety** through structured analysis that gives confidence in choices and shows when you need more information`,employees:`**Apply this to:**
Career decisions (job offers, projects to take on, skill development, requesting raises, team conflicts).

**Extract full value:**
Use before accepting new responsibilities, changing roles, or making career moves with consequences.

**Why this matters:**
- **Advance your career** by making strategic moves that align with goals, avoiding risks disguised as opportunities, and building reputation as thoughtful decision-maker
- **Protect your position** by spotting costly mistakes before they damage credibility or create setbacks
- **Negotiate effectively** by understanding your leverage, constraints, and true value in any situation`,selfEmployed:`**Apply this to:**
Business decisions (pricing changes, new services, client acceptance, hiring, partnerships, investments).

**Extract full value:**
Use for decisions that affect revenue, capacity, or business direction - mistakes directly cost you money.

**Why this matters:**
- **Grow sustainably** by making business decisions based on long-term value rather than short-term revenue appeal
- **Protect resources** by spotting bad clients, partnerships, or opportunities before they drain time, energy, and cash flow
- **Build business judgment faster** by systematically analyzing decisions and learning from AI's structured analysis`,businesses:`**Apply this to:**
Strategic decisions (market expansion, product pivots, organizational changes, vendor selection, hiring strategy).

**Extract full value:**
Use AI decision framework as template for leadership team decision-making processes.

**Why this matters:**
- **Improve organizational decisions** through structured analysis that builds decision-making capability across leadership
- **Reduce expensive mistakes** by stress-testing strategic choices before commitment creates costly consequences
- **Create decision memory** by documenting rationale and assumptions that inform future choices and enable faster decisions in ambiguous situations`},"3-2":{skill:"Document-Based AI Integration",connection:"Regular AI knows everything about the internet, nothing about YOUR work. RAG (Retrieval-Augmented Generation) makes AI reason over your specific documents, notes, and data - the real moat.",activity:`Upload your actual work documents to an AI tool, then ask it questions only YOUR knowledge can answer. Experience the difference.

**Step-by-step:**

1. **Pick 3-5 documents from your real work/studies:**
   - Reports, notes, policies, research, meeting notes, project docs
   - PDFs, Word docs, text files, slides - anything with information you reference regularly

2. **Choose your RAG tool** (pick what's easiest):
   - **Claude Projects** (best) - Create new project, upload files
   - **ChatGPT** - Upload files in conversation
   - **NotebookLM** (free, Google) - Upload and organize sources
   - **Perplexity Spaces** - Upload to create searchable knowledge base

3. **Upload your documents** to the tool (5 minutes max)

4. **Use this comprehensive RAG testing prompt:**

**"I've uploaded documents containing my specific knowledge/work. I want to test how well you can work with MY information versus generic knowledge.

**My uploaded documents contain:**
[Brief description - e.g. "Q3 project meeting notes", "Course lecture materials for Biology", "Client contract templates and past proposals"]

**What I want to extract from these documents:**
[Your goal - e.g. "Find all action items", "Understand key concepts for exam", "Reference successful proposal language"]

Test your retrieval and reasoning over MY documents by:

**1. Document Summary:**
- List all documents you can access
- Briefly describe what each contains
- Identify the most important/relevant ones for my goal

**2. Specific Extraction:**
- [Insert your specific question - examples below]
- Cite exactly where you found each piece of information (document name, section, page if available)
- If information conflicts across documents, show me both versions

**3. Cross-Document Analysis:**
- What patterns or themes appear across multiple documents?
- Are there any contradictions or inconsistencies I should know about?
- What's missing that I'd expect to find?

**4. Actionable Synthesis:**
- Based ONLY on these documents, what are the key takeaways for [my specific need]?
- What questions do these documents NOT answer that I might need to address separately?

**Example specific questions to insert in step 2:**
- "Summarize all decisions made in [specific meeting/document]"
- "Extract all action items assigned to [person/team]"
- "What's our established position on [topic] based on these materials?"
- "Compare the approach in [document A] versus [document B]"
- "Find all mentions of [concept/term] and explain how it's used"
- "What were the main concerns or risks identified about [topic]?"
- "Pull all relevant examples or case studies related to [subject]"

Always cite your sources. I need to verify everything against the original documents."**

5. **Compare results:**
   - Ask same question to regular AI (without documents)
   - Notice: Regular AI gives generic answer or says "I don't have access..."
   - Your RAG tool gives specific answer with citations from YOUR documents
   - Experience the difference

**Example:**
Regular AI: "I don't have access to your specific meeting notes..."

RAG AI: "Based on the Q3 Planning Meeting notes from July 15, the team decided to: 1) Delay feature X until Q4 due to resource constraints mentioned on page 3, 2) Prioritize bug fixes as noted in Sarah's comment about user feedback, 3) Allocate £15K additional budget as shown in the budget revision table..."`,whyMatters:"You stop searching through folders and files manually, get AI that actually knows YOUR context and YOUR information, and unlock the real competitive advantage - AI working with your specific knowledge, not everyone's generic knowledge.",learners:`**Apply this to:**
Course materials (lecture notes, textbooks, study guides, past papers, research sources).

**Extract full value:**
Upload all materials for one subject, use AI to quiz you, explain connections, find relevant examples from YOUR course content.

**Why this matters:**
- Study from your actual course materials, not generic explanations
- Find answers in textbooks/notes without re-reading everything
- Connect concepts across different lectures and readings
- Prepare for exams using your specific curriculum content
- Build study advantage classmates don't have`,employees:`**Apply this to:**
Work documents (project files, policies, meeting notes, reports, internal wikis, training materials).

**Extract full value:**
Upload everything relevant to your role, ask AI questions instead of hunting through SharePoint or email.

**Why this matters:**
- Find information in seconds that used to take 20 minutes of searching
- Onboard faster by querying company knowledge instead of bothering colleagues
- Make decisions based on actual company context, not generic advice
- Build reputation as person who "knows everything" about the business
- Reclaim hours per week lost to document hunting`,selfEmployed:`**Apply this to:**
Business documents (client contracts, proposals, SOPs, past project notes, research, meeting transcripts).

**Extract full value:**
Upload client-specific materials, use AI to reference past work, pull contract details, and maintain consistency.

**Why this matters:**
- Scale knowledge of your business without forgetting past work
- Reference client history and preferences instantly
- Reuse and adapt past successful work without manual searching
- Maintain consistency across clients using your documented approaches
- Operate like you have a research assistant who knows your entire business`,businesses:`**Apply this to:**
Organizational knowledge bases (policies, procedures, training materials, compliance docs, project histories).

**Extract full value:**
Build searchable knowledge bases per department, enable teams to query instead of asking each other repeatedly.

**Why this matters:**
- Reduce time spent answering same questions repeatedly
- Preserve institutional knowledge when people leave
- Enable faster onboarding with AI that knows company context
- Improve compliance by making policies searchable and accessible
- Scale expertise across organization without scaling headcount`},"3-3":{skill:"AI Governance Framework Creation",connection:"Organizations adopting AI without governance create disasters that make leadership pull the plug. Basic foundations prevent catastrophic mistakes while enabling productive use.",activity:`Create a simple AI governance framework for yourself or your team - the foundation you'll expand as you scale usage.

**Use this governance foundation prompt:**

**"I need to create basic AI governance guidelines for [myself/my team/my organization].

**Context:**
- **Who will use AI:** [Role/department/team description]
- **What they'll use it for:** [Specific tasks and workflows]
- **Sensitive areas:** [What data, decisions, or content involve risk]
- **Current AI tools:** [What's already being used, if any]
- **Biggest concerns:** [Privacy, accuracy, bias, job security, other worries]

Create a practical AI governance framework with these components:

**1. Usage Guidelines - When TO Use AI:**
- Create a simple checklist of tasks/situations where AI use is:
  - ✅ Encouraged (high value, low risk)
  - ⚠️ Allowed with caution (useful but requires verification)
  - ❌ Prohibited (too risky, regulated, or sensitive)

**2. Usage Guidelines - When NOT to Use AI:**
- List specific situations where AI should NOT be used
- Explain WHY for each (helps people understand, not just follow rules)
- Include consequences of violation

**3. Quality Checks:**
- For each AI use case, define:
  - What "good output" looks like (specific criteria)
  - Required verification steps before using AI output
  - Who reviews or approves (if needed)
  - How to handle mistakes or hallucinations

**4. Data Protection:**
- What information can/cannot be input into AI tools?
- How to handle:
  - Customer data
  - Employee information
  - Financial data
  - Confidential/proprietary information
  - Regulated content (GDPR, HIPAA, etc. if applicable)

**5. Accountability:**
- Who is responsible when AI makes mistakes?
- How to report AI errors or concerns
- Process for reviewing AI decisions
- Who has final say when AI disagrees with humans?

**6. Training Requirements:**
- What must people know before using AI for work?
- How will they learn safe, effective usage?
- Who can answer questions about AI use?

**7. Evaluation Metrics:**
- How will we measure if AI is helping or hurting?
  - Time saved
  - Quality maintained/improved
  - Errors caught
  - User satisfaction
  - Specific KPIs for our use cases

**8. Review Schedule:**
- How often do we review and update these guidelines?
- Who leads the review?
- What triggers an emergency review (incidents, new tools, policy changes)?

Make this:
- Practical (people will actually follow it)
- Specific (clear yes/no decisions, not vague principles)
- Expandable (foundation we build on as we learn)
- Enforcement-ready (clear consequences and accountability)

Format as a simple document with sections, checklists, and decision trees where helpful."**`,whyMatters:"You avoid disasters that kill AI adoption, enable productive use with guard rails, build credibility with leadership/clients, and create foundation that scales as you expand AI usage.",learners:`**Apply this to:**
Personal AI usage for schoolwork - guidelines for yourself on when/how to use AI responsibly.

**Extract full value:**
Create your own rules about AI use for homework, essays, exam prep that keep you learning while using AI smartly.

**Why this matters:**
- Stay within academic integrity rules while benefiting from AI
- Develop judgment about when AI helps vs hurts learning
- Build responsible AI habits before entering workplace
- Avoid academic penalties by having clear personal guidelines
- Differentiate yourself as strategic AI user, not cheater`,employees:`**Apply this to:**
Personal governance for your AI usage at work before company policy exists.

**Extract full value:**
Define your own rules for when to use AI, what to verify, what to avoid - protect yourself and add value responsibly.

**Why this matters:**
- Protect career by using AI responsibly before incidents happen
- Build trust with management through transparent, careful usage
- Position for leadership of company AI adoption
- Avoid being the cautionary tale that kills team AI access
- Demonstrate mature judgment that signals promotion readiness`,selfEmployed:`**Apply this to:**
Business AI governance - protecting clients, quality, and reputation while scaling with AI.

**Extract full value:**
Create service delivery standards that incorporate AI safely, maintaining quality and client trust.

**Why this matters:**
- Protect business reputation by preventing AI mistakes reaching clients
- Scale confidently knowing quality controls prevent disasters
- Build client trust by demonstrating responsible AI usage
- Differentiate through proven governance while competitors wing it
- Create sellable business asset (documented processes with quality control)`,businesses:`**Apply this to:**
Organizational AI governance framework for safe, effective team adoption.

**Extract full value:**
Implement basic governance before scaling AI usage, preventing expensive incidents while enabling productivity gains.

**Why this matters:**
- Prevent catastrophic mistakes that force leadership to ban AI entirely
- Enable productive use across organization with appropriate guardrails
- Build competitive advantage through faster, safer AI adoption than competitors
- Create audit trail and accountability for regulated industries
- Attract and retain talent who want to work with cutting-edge tools responsibly`},"4-1":{skill:"AI Ecosystem Exploration",connection:"AI constantly evolves with specialized tools. Exploring helps you understand what's possible beyond general-purpose chat.",activity:`1. Go to ChatGPT and open the GPT store
2. Find and talk to the "Monday" custom GPT (or similar planning GPT)
3. Browse the GPT store for 5 minutes
4. Find one GPT that could help with something you actually do`,whyMatters:"Specialized tools outperform general ones for specific tasks, awareness prevents limiting yourself to basic ChatGPT, and discovering capabilities becomes a repeatable skill.",learners:`**Apply this to:**
Discovering AI tools for study tasks, assignment help, exam prep, project work.

**Why this matters:**
- **Access specialized learning tools** designed for specific academic tasks rather than forcing general AI into everything
- **Discover capabilities** that give academic advantages while maintaining integrity
- **Build resourcefulness** by knowing specialized tools exist for different challenges`,employees:`**Apply this to:**
Finding AI tools for specific work functions, industry needs, role requirements.

**Why this matters:**
- **Use best-fit solutions** for your specific work rather than generic tools for everything
- **Bring value to your team** by discovering effective specialized tools
- **Stay competitive** by accessing emerging capabilities in your field`,selfEmployed:`**Apply this to:**
Discovering tools for client work, business operations, industry-specific needs.

**Why this matters:**
- **Solve client problems effectively** with specialized tools rather than forcing general AI into every situation
- **Differentiate your service** through access to best-in-class specialized capabilities
- **Adapt quickly** by knowing how to discover tools as market needs change`,businesses:`**Apply this to:**
Finding specialized tools for departments, functions, industry requirements.

**Why this matters:**
- **Enable teams to discover solutions** rather than centralizing all tool decisions
- **Access specialized capabilities** across full market rather than limiting to known vendors
- **Accelerate innovation** by making teams aware of emerging specialized tools`},"4-2":{skill:"Head Work Identification",connection:"You can't optimize what you can't see. This reveals every mechanical task AI could handle in your actual day.",activity:`1. List everything you do in a typical day (work tasks, not personal)
2. Use this prompt:

**"I want to identify quick AI wins in my daily work using free AI tools (ChatGPT, Claude, Google Gemini). 

Here's what I do in a typical day:
[PASTE YOUR TASK LIST]

For each task, tell me:
1. Is this head work (mechanical/pattern-based) or heart work (judgment/creativity)?
2. If it's head work, show me EXACTLY how to use FREE AI for it:
   - Specific prompt to use
   - Whether to upload images/documents
   - Which free AI features apply
3. Estimate time savings per use

Focus on things I could start doing TODAY with zero cost and zero setup."**

3. Review all the AI solutions
4. Use one of them for real work today`,whyMatters:"Mechanical work becomes visible and solvable, time savings compound across repeated tasks, and you discover AI capabilities beyond basic prompting.",learners:`**Apply this to:**
Daily study tasks, assignment work, project activities.

**Why this matters:**
- **Discover AI capabilities** for actual coursework (text extraction, summarization, organization) beyond just asking questions
- **Save time on mechanical tasks** while protecting learning opportunities that build skills
- **See creative applications** like image-to-text extraction and document processing`,employees:`**Apply this to:**
Daily work tasks, project activities, meeting prep, recurring deliverables.

**Why this matters:**
- **Build personal AI toolkit** customized for your specific role and responsibilities
- **Discover automation opportunities** in tasks you assumed required manual work
- **Save time systematically** across all mechanical work rather than occasional use`,selfEmployed:`**Apply this to:**
Daily business operations, client work, administrative tasks.

**Why this matters:**
- **Find unexpected automation** in business tasks using creative AI applications
- **Scale capacity** by handling mechanical work faster without hiring
- **Identify time savings** across entire operation that compound into significant capacity gains`,businesses:`**Apply this to:**
Team workflows, department processes, recurring operations.

**Why this matters:**
- **Collect innovative applications** teams can adopt immediately for efficiency gains
- **Discover department-specific opportunities** rather than generic automation advice
- **Build organizational knowledge** about AI capabilities that compounds across teams`},"4-3":{skill:"Goal Clarity Development",connection:"The goal determines the tool. Surface goals waste time on wrong approaches. Real goals reveal the right path.",activity:`1. Pick a task you need to do this week
2. Write down: What's the surface goal? (what it seems you need to do)
3. Ask yourself: Who benefits if I do this well? What am I supposed to learn or build?
4. Write down: What's the real goal?
5. Do the task focused on the real goal`,whyMatters:"Real goals reveal appropriate approaches, surface goals lead to shallow work, and clarity prevents wasting effort on wrong objectives.",learners:`**Apply this to:**
Assignments, projects, coursework with unclear purpose.

**Why this matters:**
- **Optimize for learning** rather than just completion by understanding what skills each assignment builds
- **Focus effort strategically** on what develops capabilities rather than meeting minimum requirements
- **Extract maximum value** from every assignment by aligning work with actual learning goals`,employees:`**Apply this to:**
Work projects, tasks, deliverables with unclear purpose.

**Why this matters:**
- **Deliver strategic value** by understanding what managers actually care about beyond stated requirements
- **Focus time on high-impact work** rather than mechanical completion
- **Build reputation** for understanding business needs rather than just following instructions`,selfEmployed:`**Apply this to:**
Client projects, business tasks, service delivery.

**Why this matters:**
- **Solve real problems** rather than surface requests by understanding client needs
- **Deliver higher value** than competitors who focus on stated requirements only
- **Build relationships** through demonstrated understanding of what clients actually need`,businesses:`**Apply this to:**
Projects, initiatives, organizational work.

**Why this matters:**
- **Align work with objectives** by helping teams understand strategic goals behind tactical requests
- **Focus resources effectively** on what drives results rather than stated tasks
- **Deliver strategic value** across organization through goal-aligned work`},"4-4":{skill:"Heart Work Identification",connection:"AI traps happen when you don't know your boundaries. These questions reveal what to protect from AI and what to delegate.",activity:`Answer these 7 questions about your work. Be honest - there are no right answers.

**Question 1: What makes time disappear?**
Think of 3 activities where you're so absorbed that hours pass without noticing. After you finish, do you feel energized or drained?

**Question 2: What makes you actually proud?**
Think of something you accomplished recently that made you genuinely proud - not because others praised you, but because it mattered to YOU. What did you do? Why did it feel important?

**Question 3: Your best day - what are you doing?**
Imagine your ideal day at work or in your studies. What are you doing? What part makes you feel most like yourself? Most confident?

**Question 4: What do you care about that others don't?**
What's something you care deeply about even if nobody else seems to notice or value it as much as you do? Why does it matter to you?

**Question 5: What drains you?**
What task or activity always drains your energy? Even if you're good at it or get praised for it, it just empties you. What feels different about that compared to things that excite you?

**Question 6: "Should" vs "Actually Care"**
Think of something you did mainly because you felt you "should" but it didn't feel meaningful to you. How did that feel compared to doing something you actually cared about?

**Question 7: What would you keep for yourself?**
If AI could do one of your regular tasks perfectly, which task would you gladly give away? And which would you want to keep for yourself - because it feels important, fun, or part of who you are?

**After answering:** Questions 1-4 = Your heart work (protect from AI). Questions 5-6 = Head work candidates (delegate to AI). Question 7 = Your boundary line.`,whyMatters:"Heart work creates meaning and builds expertise, protecting it from AI prevents hollow efficiency, and knowing boundaries enables strategic delegation.",learners:`**Apply this to:**
Understanding which study activities build you versus which drain you.

**Why this matters:**
- **Protect learning opportunities** by identifying which work develops capabilities you want to build
- **Delegate strategically** mechanical tasks while keeping growth-building work for yourself
- **Build fulfilling career** by understanding what energizes versus depletes you early`,employees:`**Apply this to:**
Mapping your work satisfaction and energy sources.

**Why this matters:**
- **Protect career-building work** that develops expertise and fulfillment
- **Delegate appropriately** without losing what makes you valuable
- **Design sustainable career** around work that energizes rather than drains you`,selfEmployed:`**Apply this to:**
Understanding what makes your business meaningful versus just necessary.

**Why this matters:**
- **Preserve service differentiation** by protecting work that makes your offering unique
- **Automate strategically** what drains you while keeping what energizes you
- **Build sustainable business** around work you actually want to do`,businesses:`**Apply this to:**
Understanding team energy and fulfillment patterns.

**Why this matters:**
- **Preserve organizational culture** by protecting work that creates meaning
- **Delegate without losing soul** by understanding what matters to teams
- **Build engagement** through understanding what work energizes versus depletes people`},"4-5":{skill:"Behavioral Pattern Recognition",connection:"AI can't tell you how to be a better human. But it can show you patterns in your behavior you might miss.",activity:`1. Use this prompt:

**"I want you to act as a mirror for my behavior patterns. 

I'll describe situations or decisions. Your job is to:
1. Point out patterns you notice in what I'm sharing
2. Ask questions that make me think deeper
3. Reflect back what my actions might reveal about my priorities

You're not here to give advice or tell me what to do. Just show me what you see and ask questions that make me think.

Ready when you are."**

2. Share 3 recent situations from your week
3. Read what AI reflects back
4. Pick one pattern to think about`,whyMatters:"Patterns become visible through external reflection, blind spots reveal true priorities versus stated values, and awareness enables intentional change.",learners:`**Apply this to:**
Understanding your study habits, time allocation, actual priorities.

**Why this matters:**
- **See gap between intentions and actions** in how you approach learning and time management
- **Identify self-sabotage patterns** that undermine academic success
- **Build self-awareness** that improves decision-making across all areas`,employees:`**Apply this to:**
Understanding your work patterns, career priorities, professional behaviors.

**Why this matters:**
- **Align actions with career goals** by seeing where behavior contradicts stated priorities
- **Identify productivity barriers** through patterns you don't notice in daily work
- **Build professional self-awareness** that improves effectiveness and advancement`,selfEmployed:`**Apply this to:**
Understanding business behaviors, client patterns, work-life integration.

**Why this matters:**
- **See business reality** versus what you tell yourself about priorities and practices
- **Identify sustainability issues** before burnout or business problems emerge
- **Make intentional choices** about how to build business that serves your life`,businesses:`**Apply this to:**
Understanding team behaviors, organizational patterns, cultural realities.

**Why this matters:**
- **See gaps** between stated values and actual organizational behavior
- **Identify systemic issues** through patterns visible across teams
- **Enable culture change** through awareness of what's actually happening versus stated ideals`},"5-1":{skill:"Prompt Specification",connection:"AI has everything in the warehouse. Vague requests get generic outputs. Specific requests get exactly what you want - garbage in, garbage out applies to all communication.",activity:`1. Pick something you want AI to do
2. Write your first instinct prompt
3. Now add: length, audience/purpose, tone, and one specific requirement
4. Compare both outputs`,whyMatters:"Specific prompts produce targeted outputs on first try, eliminating revision cycles from vague requests, making AI genuinely useful instead of sort of helpful.",learners:`**Apply this to:**
Getting explanations, creating study materials, generating practice questions.

**Why this matters:**
- **Save time on revisions** by getting usable outputs immediately rather than iterating through vague requests
- **Learn specification skills** that improve all communication, not just with AI
- **Get outputs that match your learning style** by specifying exactly what helps you understand`,employees:`**Apply this to:**
Work requests, documentation, communications, deliverables.

**Why this matters:**
- **Eliminate back-and-forth** by providing complete specifications upfront
- **Build reputation for clarity** by demonstrating precise communication skills
- **Save time organization-wide** by reducing revision cycles from unclear requests`,selfEmployed:`**Apply this to:**
Client communications, service deliverables, business documentation.

**Why this matters:**
- **Meet client expectations** by specifying exactly what you need from AI assistance
- **Reduce revision cycles** that eat into billable time and delay projects
- **Maintain quality standards** by getting outputs that match your professional requirements`,businesses:`**Apply this to:**
Team communications, project requests, organizational documentation.

**Why this matters:**
- **Improve communication culture** by modeling specific request patterns
- **Reduce organizational friction** from vague requests causing misaligned outputs
- **Scale quality** by teaching specification skills across teams`},"5-2":{skill:"Structured Prompt Design",connection:"Rambling confuses AI. COSTAR gives you a structure to include everything that matters.",activity:`1. Pick something you need AI to create today
2. Fill in each COSTAR element:

**"Create [YOUR REQUEST]

**Context:** [Your situation and background]
**Objective:** [What you want and why]
**Style:** [How it should be written]
**Tone:** [The mood or feeling]
**Audience:** [Who it's for]
**Response format:** [Structure and length you need]"**

3. Use the complete prompt
4. Get your result`,whyMatters:"COSTAR prevents forgetting critical details, creates repeatable structure for any request, and produces first-try outputs that match needs.",learners:`**Apply this to:**
Assignment requests, study materials, explanations, project content.

**Why this matters:**
- **Get learning-appropriate outputs** by specifying your level, learning style, and format needs
- **Build systematic approach** to requesting help that works with teachers and AI
- **Save time** by including all context upfront rather than clarifying repeatedly`,employees:`**Apply this to:**
Work deliverables, communications, documentation, project requests.

**Why this matters:**
- **Demonstrate professional communication** through complete, structured requests
- **Get stakeholder-appropriate outputs** by specifying audience and context
- **Build reusable templates** for recurring request types`,selfEmployed:`**Apply this to:**
Client deliverables, business communications, service documentation.

**Why this matters:**
- **Meet professional standards** by specifying exactly what clients need
- **Create consistent quality** across all client-facing outputs
- **Build deliverable templates** that ensure nothing gets missed`,businesses:`**Apply this to:**
Organizational communications, team requests, standardized deliverables.

**Why this matters:**
- **Standardize request quality** by teaching COSTAR framework organization-wide
- **Reduce miscommunication** through complete context and specification
- **Enable scaling** through repeatable structured approaches`},"5-3":{skill:"Prompt Library Curation",connection:"Thousands of people have spent hours perfecting prompts for common tasks. Use what works instead of starting from scratch.",activity:`1. Go to one of these prompt libraries:
   - FlowGPT
   - PromptBase (free section)
   - Reddit r/ChatGPTPromptGenius
   - Awesome ChatGPT Prompts (GitHub)
2. Search for a task you do regularly
3. Find 2-3 prompts that look useful
4. Try one on your actual work
5. Save the ones that work`,whyMatters:"Proven prompts skip trial-and-error, provide professional-quality results immediately, and build reusable library instead of reinventing constantly.",learners:`**Apply this to:**
Study tasks, assignment types, exam prep, project work.

**Why this matters:**
- **Access expert prompts** for common academic tasks without experimenting
- **Save time** by using proven approaches rather than guessing what works
- **Build study toolkit** of reliable prompts for different subjects and tasks`,employees:`**Apply this to:**
Common work tasks, recurring deliverables, communication types.

**Why this matters:**
- **Work at expert level** immediately by using proven professional prompts
- **Build efficiency** through library of reliable prompts for regular work
- **Share knowledge** by collecting proven prompts team can use`,selfEmployed:`**Apply this to:**
Client deliverables, business operations, service documentation.

**Why this matters:**
- **Maintain professional quality** by using proven prompts rather than experimenting on client work
- **Scale capacity** through library of reliable prompts for common tasks
- **Reduce risk** by using tested approaches rather than trial-and-error`,businesses:`**Apply this to:**
Organizational processes, team workflows, standardized outputs.

**Why this matters:**
- **Standardize quality** by sharing proven prompts across teams
- **Accelerate onboarding** by providing new hires with tested prompt library
- **Build institutional knowledge** through curated collection of effective prompts`},"5-4":{skill:"Prompt Self-Improvement",connection:"AI knows what makes prompts work because it's designed to respond to them. Let it teach you while solving your problem.",activity:`1. Write a prompt for something you actually need
2. Use this meta-prompt:

**"I'm trying to get you to help me with: [DESCRIBE WHAT YOU WANT]

Here's my current prompt:
[PASTE YOUR PROMPT]

The output isn't quite right. Analyze my prompt and tell me:
1. What's missing or unclear
2. What I should add for better results
3. Give me an improved version I can use right now

Make your improved prompt specific and complete."**

3. Use AI's improved prompt
4. Get better results`,whyMatters:"AI teaches prompt engineering while solving problems, eliminates guessing about prompt weaknesses, and accelerates learning through immediate feedback.",learners:`**Apply this to:**
Any prompt that doesn't produce what you need for assignments or study.

**Why this matters:**
- **Learn prompt engineering** through practical application on your actual work
- **Improve faster** by getting specific feedback on what your prompts lack
- **Build skill** that transfers to all AI tools and communication`,employees:`**Apply this to:**
Work prompts that produce suboptimal outputs.

**Why this matters:**
- **Develop prompt expertise** through targeted feedback on professional work
- **Save time** by fixing prompts immediately rather than multiple trial-and-error iterations
- **Build professional capability** in AI communication that increases value`,selfEmployed:`**Apply this to:**
Business and client work prompts needing refinement.

**Why this matters:**
- **Improve deliverable quality** by refining prompts until outputs meet professional standards
- **Learn efficiently** by getting feedback on prompts for actual business needs
- **Build expertise** that differentiates your service through better AI collaboration`,businesses:`**Apply this to:**
Organizational prompts and team workflows.

**Why this matters:**
- **Develop team capability** by teaching prompt improvement through meta-prompting
- **Improve output quality** across organization through systematic prompt refinement
- **Build learning culture** where teams continuously improve AI communication`},"5-5":{skill:"Technique-Problem Matching",connection:"Different problems need different techniques: Role prompting for expertise, few-shot for consistency, chain of thought for reasoning, constraints for creativity.",activity:`Pick a problem and match it to the right technique:

**Need expertise?**
**"You are a [SPECIFIC ROLE] with [X YEARS EXPERIENCE] in [SPECIALIZATION]. [YOUR REQUEST]"**

**Need consistency?**
**"Here are 2 examples of what I want:
Example 1: [EXAMPLE]
Example 2: [EXAMPLE]

Now create one for [YOUR TOPIC] in the same style."**

**Need reasoning?**
**"Before answering, think through this step-by-step:
- First consider [FACTOR 1]
- Then [FACTOR 2]
- Then weigh them
Show your thinking, then give your conclusion."**

**Need options?**
**"Provide 3 completely different approaches to [PROBLEM].
For each: explain the approach, list pros and cons, estimate difficulty.
Then recommend which is best for [YOUR SITUATION]."**

**Need creativity within bounds?**
**"Create [WHAT YOU WANT].
Requirements:
- Exactly [LENGTH]
- Must include [REQUIREMENT 1], [REQUIREMENT 2]
- Tone: [SPECIFIC]
- Format: [SPECIFIC]"**

Apply the matching technique to your actual problem.`,whyMatters:"Matching techniques to problems produces dramatically better outputs, eliminates one-size-fits-all approaches, and builds sophisticated AI collaboration skills.",learners:`**Apply this to:**
Different academic challenges requiring different approaches.

**Why this matters:**
- **Get appropriate help** by matching technique to whether you need understanding, examples, reasoning, or options
- **Develop problem analysis** by categorizing what type of help you actually need
- **Improve outcomes** by using right approach for each academic challenge`,employees:`**Apply this to:**
Work challenges requiring different types of support.

**Why this matters:**
- **Produce better work** by matching AI technique to specific professional challenge
- **Build sophisticated skills** in AI collaboration that differentiates you
- **Solve problems effectively** by choosing right approach for each situation`,selfEmployed:`**Apply this to:**
Business and client challenges requiring different approaches.

**Why this matters:**
- **Deliver higher quality** by using appropriate technique for each client need
- **Work more effectively** by matching approach to whether you need expertise, options, or reasoning
- **Build professional capability** in advanced AI collaboration`,businesses:`**Apply this to:**
Organizational challenges requiring different problem-solving approaches.

**Why this matters:**
- **Improve organizational problem-solving** by teaching technique matching across teams
- **Build sophisticated AI capability** organization-wide through advanced techniques
- **Enable better decisions** by using appropriate approach for each business challenge`},"5-6":{skill:"AI-Powered Communication Coaching",connection:"AI doesn't forgive vague communication. It exposes exactly where you're unclear, assumptive, or incomplete - weaknesses that hurt you with everyone.",activity:`1. Use this communication coaching prompt:

**"You are an executive communication coach with 15 years of experience helping professionals improve clarity, precision, and impact in their written communications. You've worked with leaders across business, education, and consulting to eliminate vague requests and build communication that gets results.

I want you to coach me on my actual messages. I'll share requests, questions, or messages I've sent to people (boss, teacher, client, team) where the response wasn't what I wanted.

For each one, analyze my communication and tell me:

**What's Missing:**
- What information did I assume they knew but didn't state?
- What context did I leave out?
- What specific details were unclear?

**What's Weak:**
- Where am I being vague or general instead of specific?
- What questions would someone need to ask me for clarity?
- What could be misinterpreted?

**How to Fix It:**
- Rewrite my message with the missing information included
- Show me exactly what to add and why it matters
- Explain the communication principle I should remember

**Start with this message I sent:**
[PASTE YOUR ACTUAL MESSAGE]

Be direct and specific like you would with an executive client. I want to improve, not feel good."**

2. Review AI's analysis
3. Note the specific weakness pattern
4. Rewrite using AI's guidance
5. Apply this insight to future communications`,whyMatters:"AI reveals specific communication blind spots immediately, coaching improves clarity with everyone not just AI, and systematic feedback builds professional communication skills that compound.",learners:`**Apply this to:**
Questions to teachers, assignment clarifications, group project communications.

**Why this matters:**
- **Develop professional communication** by getting specific feedback on actual messages before entering workplace
- **Get better help** from teachers and peers through clearer, more complete requests
- **Build self-awareness** about communication patterns that will affect entire career`,employees:`**Apply this to:**
Requests to managers, team communications, stakeholder messages.

**Why this matters:**
- **Build reputation for clarity** by systematically improving communication quality through coaching feedback
- **Reduce workplace friction** from unclear requests that create confusion and delays
- **Advance career** through communication skills that leadership notices and values`,selfEmployed:`**Apply this to:**
Client communications, vendor requests, partnership discussions.

**Why this matters:**
- **Strengthen client relationships** through professional communication that reflects attention to quality
- **Reduce misunderstandings** that waste billable time and damage reputation
- **Build trust** through consistent communication clarity that differentiates your service`,businesses:`**Apply this to:**
Team communications, stakeholder messages, organizational requests.

**Why this matters:**
- **Improve communication culture** by enabling teams to get coaching on actual messages
- **Reduce organizational inefficiency** from unclear communications creating confusion and rework
- **Build professional standards** through systematic communication improvement across organization`},"5-7":{skill:"Expert Prompt Generation",connection:"You've learned manual prompting. Now use tools built specifically for prompt engineering to work at expert level immediately.",activity:`1. Go to this custom GPT: https://chatgpt.com/g/g-69355501cbd081918c983f83cbb7801d-prompt-writer-energise-ai
2. Tell it what you're trying to get AI to do
3. It creates an expert-level prompt for you
4. Use that prompt for your actual work
5. Save the good ones for reuse`,whyMatters:"Specialized tools skip from beginner to expert-level immediately, provide professionally structured prompts without technical details, and build reusable library of proven prompts.",learners:`**Apply this to:**
Complex academic tasks requiring sophisticated prompts.

**Why this matters:**
- **Access expert-level prompts** for challenging academic work without learning all technical details
- **Build study toolkit** of professional-quality prompts for different subjects
- **Save time** by getting optimized prompts rather than experimenting`,employees:`**Apply this to:**
Professional work requiring high-quality outputs.

**Why this matters:**
- **Work at expert level** immediately without prompt engineering expertise
- **Build professional library** of proven prompts for recurring work
- **Deliver higher quality** through optimized prompts rather than basic approaches`,selfEmployed:`**Apply this to:**
Client work and business operations requiring professional quality.

**Why this matters:**
- **Maintain professional standards** by using expert-optimized prompts
- **Scale expertise** by accessing professional-quality prompts for all business needs
- **Build business assets** through library of proven prompts for service delivery`,businesses:`**Apply this to:**
Organizational work requiring consistent professional quality.

**Why this matters:**
- **Standardize quality** by providing teams with expert-level prompt generation
- **Accelerate capability building** by skipping manual prompt engineering learning curve
- **Enable scaling** through professionally optimized prompts across organization`},"6-1":{skill:"Workflow Template Design",connection:"Tools change weekly. Workflows based on outcomes don't. Create one template, use it for every repeated task forever.",activity:`1. Think of your most repeated task (reports, content, analysis, anything weekly/monthly)
2. Paste this into ChatGPT/Claude:

**"I repeatedly [describe task]. Create a 5-step workflow that:
- Focuses on WHAT outcomes I need (not tools)
- Works with any AI or no AI
- Shows: Step → What I decide → What AI executes
Format as a simple reusable checklist."**

3. Copy the workflow into a note titled "My [Task] Workflow"

**Example:**
Task: "I repeatedly create monthly sales reports"
AI creates: 
1. Gather data → I decide which metrics → AI compiles
2. Find patterns → I choose what matters → AI highlights trends
3. Compare targets → I set context → AI calculates gaps
4. Write insights → I provide judgment → AI formats clearly
5. Prepare presentation → I approve final → AI structures slides

Save as "My Sales Report Workflow" - reuse forever.`,whyMatters:"You build a reusable system that makes every repeated task faster, create a template you can use for other tasks, and never start from scratch again.",learners:`**Apply this to:**
Repeated study tasks (essay writing, exam prep, research projects, lab reports).

**Extract full value:**
Create workflows for each subject's recurring assignments so you have a system for every essay type, every lab format, every exam preparation routine.

**Why this matters:**
You build study systems that work regardless of which AI tools your school allows, stop reinventing your approach for every assignment, and develop processes that carry into university and career.`,employees:`**Apply this to:**
Weekly reports, client communications, project documentation, meeting prep.

**Extract full value:**
Build workflows for your most frequent deliverables so you have reliable systems that produce consistent quality regardless of company tool changes.

**Why this matters:**
You become known for consistent delivery, survive company platform migrations without productivity loss, and build career-portable skills that work anywhere.`,selfEmployed:`**Apply this to:**
Client onboarding, proposal creation, service delivery, content production.

**Extract full value:**
Create workflows for every repeating business process so you can scale operations without reinventing systems for each client.

**Why this matters:**
You build business systems that survive tool changes, scale your capacity without scaling complexity, and create processes you can delegate or sell.`,businesses:`**Apply this to:**
Standard operating procedures, client deliverables, internal processes, team workflows.

**Extract full value:**
Document core business processes as tool-independent workflows that teams can follow regardless of platform changes.

**Why this matters:**
Organization builds resilient operations that survive technology shifts, reduces dependency on specific vendors, and creates transferable systems across departments.`},"6-2":{skill:"Bottleneck-Solution Mapping",connection:"Most people collect tools looking for problems. Smart approach: identify your real bottlenecks, then find AI that solves them.",activity:`1. Answer these 3 questions in a note:
   - What task takes me the most time each week?
   - What work do I procrastinate on because it's tedious?
   - What bottleneck slows down my best work?

2. Pick ONE answer

3. Use your AI tool finding skills from Module 2 Lesson 6 (search FlowGPT, Product Hunt, There's An AI For That, etc.) to find a tool for that specific problem

4. Bookmark one tool to try this week

**Example:**
Questions: 
- Most time: Meeting notes (3 hours/week)
- Procrastinate: Formatting documents
- Bottleneck: Research takes forever

Pick: Meeting notes (biggest time sink)
Search on Product Hunt: "meeting notes AI"
Find: Otter.ai, Fireflies, Fathom
Bookmark: Otter.ai to test next meeting`,whyMatters:"You find AI solutions for real problems not imaginary ones, focus on tools that save actual time, and stop collecting tools you never use.",learners:`**Apply this to:**
Study bottlenecks (note-taking speed, essay research, concept understanding, exam revision).

**Extract full value:**
Identify your actual study pain points before exploring tools, so you solve real problems instead of collecting apps you never use.

**Why this matters:**
You stop wasting time on trendy study tools that don't fit your needs, focus energy on solutions that fix actual struggles, and reduce the stress of choosing between dozens of similar apps. You'll feel more in control of your learning instead of overwhelmed by options.`,employees:`**Apply this to:**
Work bottlenecks (meeting overload, report writing, email management, data analysis).

**Extract full value:**
Map where you actually lose time before searching for tools, ensuring AI solves your real workflow problems.

**Why this matters:**
You eliminate time sinks that cause late nights and weekend work, find solutions for tasks you've been procrastinating, and build confidence that you're choosing tools strategically. You'll feel less scattered and more focused on work that matters.`,selfEmployed:`**Apply this to:**
Business bottlenecks (client acquisition, service delivery, admin tasks, content creation).

**Extract full value:**
Identify what's actually slowing your business growth before adding tools, so you invest in solutions that directly impact revenue or time.

**Why this matters:**
You stop bleeding time on low-value tasks that drain your energy, focus on bottlenecks that truly limit your income, and reduce the mental load of managing too many tools. You'll feel more like a business owner and less like you're drowning in operations.`,businesses:`**Apply this to:**
Organizational bottlenecks (onboarding delays, quality inconsistencies, communication gaps, approval processes).

**Extract full value:**
Teams identify real operational constraints before tool selection, ensuring technology investments solve actual problems.

**Why this matters:**
Organization reduces wasted budget on unused tools, solves problems that actually frustrate teams, and builds trust that leadership understands real operational challenges. Teams feel heard and supported rather than given solutions to problems they don't have.`},"6-3":{skill:"Strategic Information Filtering",connection:"AI news never stops. Without boundaries, you spend hours daily and accomplish nothing. 15-30 min/week keeps you aware without overwhelm.",activity:`1. Pick 1-2 AI news sources (examples: TLDR AI newsletter, Ben's Bites, The Rundown AI)
2. Schedule 20 minutes once per week to check them
3. This week: Read your sources, note 1-3 things worth trying
4. Ignore everything else

**Example:**
Sources: TLDR AI (newsletter), one AI YouTube channel
Schedule: Every Monday 9am, 20 minutes
This week's picks: New Claude feature for documents, ignore the other 47 updates`,whyMatters:"You stay informed without burning out, make deliberate decisions instead of chasing every shiny tool, and actually have time to use AI instead of just reading about it.",learners:`**Apply this to:**
Staying current with AI tools for school without getting distracted from actual studying.

**Extract full value:**
Pick education-focused AI sources (like AI for education newsletters) and check once weekly to discover tools that help with coursework. Focus on sources that show AI applications for better grades and easier assignments.

**Why this matters:**
You stay aware of tools that could help your studies without falling into the rabbit hole of AI news, maintain focus on actual schoolwork instead of endless tool research, and avoid the anxiety of feeling like you're missing out. You discover AI that improves your academic performance while staying focused on learning goals. You'll also understand which career paths are AI-resistant versus AI-transformed, helping you make smarter decisions about your future while you're still in school. You'll feel informed and in control rather than overwhelmed and behind.`,employees:`**Apply this to:**
Keeping up with workplace AI developments without sacrificing productive work time.

**Extract full value:**
Choose industry-specific AI sources and schedule your weekly check during low-energy times (like Friday afternoons) when deep work is harder anyway. Focus on tools that could make you more valuable or promotable.

**Why this matters:**
You stay relevant in conversations about AI adoption without losing hours to news consumption, discover tools that could improve your work without the stress of constant updates, and maintain credibility as someone who's informed but not obsessed. You advance your career by finding AI that boosts your performance, not just your knowledge. You'll feel current and confident rather than anxious about falling behind.`,selfEmployed:`**Apply this to:**
Tracking AI developments that could impact your business without getting pulled away from revenue-generating work.

**Extract full value:**
Select sources focused on your industry applications and protect your news time so you're learning about opportunities, not just reading. Prioritize sources that highlight revenue growth or time-saving automation.

**Why this matters:**
You spot business opportunities and competitive threats without sacrificing billable hours, stay ahead of industry shifts without the burnout of constant monitoring, and reduce the fear that you're missing the next big thing. You grow your income and free your time by finding AI that directly impacts your business goals. You'll feel strategically aware rather than frantically trying to keep up.`,businesses:`**Apply this to:**
Keeping leadership and teams informed about AI capabilities without creating information overload.

**Extract full value:**
Assign one person to curate weekly AI updates relevant to company operations and share condensed insights with stakeholders. Filter for developments that impact strategic objectives and competitive position.

**Why this matters:**
Organization maintains strategic awareness without productivity loss across teams, spots opportunities and risks systematically rather than reactively, and builds informed decision-making culture without meeting overload. Leadership achieves better strategic outcomes by staying informed about AI that drives business goals. Teams feel strategically positioned rather than anxiously chasing every trend.`},"6-4":{skill:"Structured Tool Evaluation",connection:"Playing with tools wastes time. Proper 30-60 minute trials on actual work reveal real value fast.",activity:`1. Pick one AI tool that passed your filter
2. Define your goal: "Can this save me 30%+ time on [specific task] while keeping quality?"
3. Use it on 2-3 real examples of that task (not demo/test data)
4. Decide: Adopt (integrate it), Park (revisit in 3 months), or Reject (doesn't deliver)

**Example:**
Tool: Otter.ai for meeting notes
Goal: Save 30% time on meeting summaries without missing key points
Test: Use on next 3 meetings
Result: Saves 40% time, catches everything → Adopt and integrate`,whyMatters:"You only invest time in tools that actually work, avoid wasting weeks on overhyped products, and build a toolkit of proven solutions instead of experiments.",learners:`**Apply this to:**
Testing AI tools for study tasks (note-taking apps, research assistants, writing tools, exam prep).

**Extract full value:**
Test tools on actual assignments due this week, not hypothetical scenarios. Measure impact on grades and study time before committing.

**Why this matters:**
- Avoid wasting weeks on tools that don't help actual coursework
- Build tested toolkit that genuinely improves academic performance
- Develop evaluation skills that transfer to future career tool choices
- Understand AI capabilities early, informing smarter career path decisions
- Feel confident in choices rather than second-guessing every tool`,employees:`**Apply this to:**
Testing workplace productivity tools (meeting assistants, writing aids, data analysis, project management AI).

**Extract full value:**
Run trials on this week's actual deliverables. Measure time saved and quality maintained to prove value before requesting budget.

**Why this matters:**
- Demonstrate ROI to managers with concrete evidence
- Build reputation as strategic evaluator, not trend chaser (promotable skill)
- Avoid investing learning time in tools that don't advance career
- Position yourself as technology evaluator as AI proliferates
- Advance faster by choosing tools that boost performance, not just collection`,selfEmployed:`**Apply this to:**
Testing business tools (client communication, proposal generation, service delivery, marketing automation).

**Extract full value:**
Trial tools on paying client work this week. Calculate actual time saved versus subscription cost for ROI clarity.

**Why this matters:**
- Stop bleeding money on subscriptions that don't deliver revenue impact
- Build lean tool stack that maximizes profit margins
- Develop judgment about technology ROI that protects business from costly mistakes
- Quick evaluation and adoption of valuable tools = competitive advantage
- Grow revenue and reclaim time by investing only in proven tools`,businesses:`**Apply this to:**
Evaluating enterprise AI tools (workflow automation, customer service, analytics, documentation).

**Extract full value:**
Run structured pilots on actual processes with clear success metrics. Gather team feedback and performance data before rollout.

**Why this matters:**
- Avoid expensive failed implementations by validating on real operations first
- Build internal technology evaluation capability, reducing vendor dependency
- Create evidence-based adoption that earns team buy-in
- Systematic evaluation becomes competitive advantage as AI tools multiply
- Build trust by proving tools solve real problems before mandating changes`},"6-5":{skill:"Feature Discovery & Optimization",connection:"ChatGPT and Claude have features most people never explore. Spending 5 minutes in settings can unlock major improvements.",activity:`1. Open the AI tool you use most (ChatGPT, Claude, Gemini, etc.)
2. Go to Settings
3. Spend 5 minutes exploring what features exist
4. Turn on or try ONE thing that looks useful

**Example:**
Explored ChatGPT settings
Found: Memory, Custom Instructions, Voice mode, GPT store access
Turned on: Custom Instructions (set my writing style once)
Result: Every response now matches my preferences automatically`,whyMatters:"You discover features that save time on every future conversation, unlock capabilities you're already paying for, and upgrade your AI without learning new tools.",learners:`**Apply this to:**
Discovering features in AI tools you already use for schoolwork (ChatGPT, Claude, Grammarly, Notion).

**Extract full value:**
Spend 5 minutes exploring settings in your main study AI tool. Turn on features that remember your preferences, subjects, or writing style.

**Why this matters:**
- Unlock capabilities that make homework faster without learning new tools
- AI remembers your academic level and gives appropriate explanations
- Stop repeating the same context in every chat (subjects, grade level, learning style)
- Discover features classmates don't know about, gaining academic edge
- Learn to maximize tools before buying new ones (skill that saves money in career)
- Feel more capable and less overwhelmed by getting more from what you have`,employees:`**Apply this to:**
Exploring settings in workplace AI tools you already have access to (company ChatGPT, Microsoft Copilot, Google Workspace AI).

**Extract full value:**
Check settings in your primary work AI tool. Activate features that integrate with company systems or remember your role/preferences.

**Why this matters:**
- Unlock productivity without IT approval or budget requests
- Demonstrate initiative by maximizing existing company investments
- Discover automation that eliminates repetitive work causing late nights
- Position yourself as power user, building reputation for tool mastery
- Learn feature discovery skill that transfers across all workplace technology
- Reduce work stress by making tools work harder for you`,selfEmployed:`**Apply this to:**
Maximizing AI tools you're already paying for (ChatGPT Plus, Claude Pro, business software with AI features).

**Extract full value:**
Explore settings in tools you subscribe to. Activate features that automate client work, remember business context, or integrate with your workflows.

**Why this matters:**
- Get full value from existing subscriptions before adding more tools
- Discover automation that increases capacity without hiring
- Reduce subscription costs by using one tool fully instead of three partially
- Find features that create competitive service advantages
- Build skill of tool optimization that improves profit margins
- Reclaim time and reduce overwhelm by making current tools work smarter`,businesses:`**Apply this to:**
Auditing AI features in enterprise tools organization already licenses (Microsoft 365, Google Workspace, Salesforce, Slack).

**Extract full value:**
Have teams explore settings in existing platforms. Document discovered features that could improve departmental workflows.

**Why this matters:**
- Maximize ROI on current technology investments before new purchases
- Discover unused capabilities that solve problems teams currently face
- Reduce software sprawl by using existing tools more effectively
- Build culture of tool mastery rather than tool accumulation
- Identify training opportunities that unlock value already paid for
- Improve team satisfaction by making current tools less frustrating`},"6-6":{skill:"High-Stakes Output Verification",connection:"Most people only use AI for throwaway stuff. But AI can handle important work - you just verify before using.",activity:`Next 3 times you use AI for something important (email to boss, client work, anything with consequences):

Before using the output, do a 30-second check:
1. Read first and last sentence
2. Scan for any numbers/facts
3. Ask yourself: "Would I look stupid if this was wrong?"

If yes → read the whole thing
If no → use it

**Example:**
AI writes email to client about project delay
Quick check: Opening sounds professional, closing has next steps, deadline date is correct
"Would I look stupid?" → No, it's accurate
Send. Total time: 30 seconds.`,whyMatters:"You catch critical mistakes without wasting time re-reading everything, build confidence using AI for important work, and develop instinct for when to verify vs when to trust.",learners:`**Apply this to:**
Using AI for assignments that affect your grades (essays, lab reports, presentations, important emails to professors).

**Extract full value:**
Use AI for actual graded work, then do 30-second verification: read first/last sentences, check facts, ask "would this hurt my grade if wrong?"

**Why this matters:**
- Discover AI can handle important schoolwork when you verify smart
- Save hours on high-stakes assignments while maintaining quality
- Build judgment about when to trust AI vs when to check carefully (career skill)
- Avoid academic integrity issues by catching AI mistakes before submission
- Develop risk assessment skill that transfers to workplace decisions
- Feel confident using AI for work that matters, not just throwaway tasks`,employees:`**Apply this to:**
Using AI for work with real consequences (client emails, reports to leadership, presentations, project documentation).

**Extract full value:**
Use AI for important deliverables this week. Quick verify before sending: scan for errors, check tone, ask "would this damage my reputation if wrong?"

**Why this matters:**
- Unlock AI for high-stakes work that actually advances your career
- Save hours on important tasks without risking professional reputation
- Build strategic judgment about verification levels (low vs high stakes)
- Demonstrate reliability by catching mistakes before they reach stakeholders
- Develop risk management skill that makes you promotable
- Reduce stress by having systematic approach to important AI-assisted work`,selfEmployed:`**Apply this to:**
Using AI for client-facing work (proposals, deliverables, contracts, important communications).

**Extract full value:**
Use AI for actual client work. Verify before sending: check accuracy, ensure client specifics included, ask "would this cost me the client if wrong?"

**Why this matters:**
- Reclaim hours on high-value client work while protecting relationships
- Scale service delivery without sacrificing quality or trust
- Build judgment about where AI can run vs where you must verify (business skill)
- Protect revenue by catching mistakes before they reach paying clients
- Develop systematic quality control that enables business growth
- Grow confidently knowing you have safety nets for AI-assisted work`,businesses:`**Apply this to:**
Deploying AI for customer-facing or compliance-critical operations (support, documentation, communications, reports).

**Extract full value:**
Implement verification protocols matched to stakes: automated checks for low-risk, human review for high-risk. Document standards for consistent quality.

**Why this matters:**
- Scale operations with AI while protecting brand reputation and compliance
- Build systematic quality control that enables AI adoption without increased risk
- Develop organizational capability in risk-based AI governance
- Create confidence in AI usage across teams through clear safety processes
- Reduce liability exposure by having documented verification standards
- Enable growth through AI while maintaining stakeholder trust`},"6-7":{skill:"Reusable Playbook Creation",connection:"You do some tasks repeatedly. Create the playbook once, hand it to AI every time, get consistent results forever.",activity:`1. Pick one task you do repeatedly (reports, emails, content, proposals, anything weekly/monthly)
2. Paste this into ChatGPT/Claude:

**"Create a playbook for [your task]. Format it as step-by-step instructions I can paste back to you next time, so you know exactly how to help me. Include:
- What the end result should be
- Key steps to follow
- What information you need from me
- Quality standards to meet"**

3. Save the playbook AI creates
4. Next time you do that task: Paste the playbook + your specific details → AI executes

**Example:**
Task: Weekly team update emails
AI creates playbook: "When I receive this playbook + your weekly updates, I will: 1) Structure as 3 sections: Wins, Blockers, Next Week 2) Keep tone professional but friendly 3) Highlight urgent items 4) Format for easy scanning 5) Keep under 200 words"

Next week: Paste playbook + "Wins: shipped feature X, Blockers: waiting on design, Next: user testing" → AI writes perfect email`,whyMatters:"You create reusable instructions that make AI work like a trained assistant, get consistent quality on repeated tasks, and turn hours of work into 2-minute operations.",learners:`**Apply this to:**
Repeated academic tasks (essay writing, lab reports, exam prep routines, research papers, study guides).

**Extract full value:**
Create playbooks for each assignment type you do regularly. Paste playbook + specific details each time for consistent quality.

**Why this matters:**
- Turn repeated assignments into 2-minute operations instead of starting from scratch
- Build consistent quality across all work in that format (better grades)
- Develop process documentation skill valuable in any career
- Create study systems you can share with classmates or reuse in university
- Reduce assignment anxiety by having proven processes for each type
- Learn systematic work approach that separates you from peers`,employees:`**Apply this to:**
Recurring work deliverables (weekly reports, client updates, meeting prep, project documentation, email templates).

**Extract full value:**
Build playbooks for your most frequent tasks. Each playbook becomes reusable instruction set that maintains quality while saving hours.

**Why this matters:**
- Transform weekly 2-hour tasks into 10-minute operations
- Demonstrate process thinking that signals leadership potential
- Create systems you can delegate when you get promoted
- Build portfolio of documented processes (valuable in performance reviews)
- Reduce work stress by having reliable systems for recurring deliverables
- Position yourself as systems thinker, not just task executor`,selfEmployed:`**Apply this to:**
Client-facing processes (proposals, onboarding, service delivery, reporting, content creation).

**Extract full value:**
Create playbooks for every repeating business process. Build library that lets you scale operations without scaling time investment.

**Why this matters:**
- Scale client capacity without proportional time increase (direct revenue impact)
- Create consistent quality that builds professional reputation
- Build business assets you can delegate to contractors or sell with business
- Reduce delivery time, increasing profit margins on each engagement
- Systematize operations, making business less dependent on you personally
- Free time for business development by automating delivery`,businesses:`**Apply this to:**
Standard operations (client onboarding, service delivery, reporting, documentation, quality control).

**Extract full value:**
Document core processes as AI playbooks teams can execute consistently. Build library of organizational knowledge that survives employee turnover.

**Why this matters:**
- Maintain quality consistency as organization scales
- Reduce onboarding time by giving new hires proven process playbooks
- Create institutional knowledge independent of individual employees
- Enable process improvement through documented, iterable systems
- Scale operations without proportional headcount increase
- Build transferable business assets that increase company valuation`},"7-1":{skill:"Value Shift Analysis",connection:"AI makes pattern work cheap. Human-only skills become scarce and valuable. Knowing the difference helps you invest time in skills that matter.",activity:`1. Make two lists in a note:

**Declining Value (AI does it better):**
- Skills AI handles well now

**Rising Value (Human advantage):**
- Skills only humans can do well

2. Look at your current role/studies - which list does most of your time go to?
3. Identify ONE rising-value skill to develop this month

**Example:**
Declining: Data entry, basic research, formatting, routine analysis
Rising: Creative problem-solving, relationship building, strategic decisions, original insights

Current time: 70% declining value work
Action: Develop strategic decision-making by leading one project decision this month`,whyMatters:"You invest time in skills that increase in value rather than skills AI makes obsolete, position yourself for opportunities others miss, and build career resilience against automation.",learners:`**Apply this to:**
Course selection, major decisions, skill development choices.

**Why this matters:**
- **Choosing between Computer Science majors:** AI coding vs AI-human collaboration design? One gets commoditized, one becomes premium
- **Deciding on extracurriculars:** Debate team (persuasion, reading people) vs math competitions (pattern work AI excels at)? Pick what AI can't do
- **First job offers:** Data entry role vs client-facing problem solving? One trains declining skills, one builds rising value`,employees:`**Apply this to:**
Daily work analysis and development planning.

**Why this matters:**
- **Your 40 hours:** 30 hours formatting reports AI can do, 10 hours client strategy AI can't? Flip that ratio
- **Next promotion decision:** Peer who automates gets promoted over you who works harder manually? They shifted to rising-value work
- **Annual review:** "What makes you valuable?" Better answer: "Client relationships and judgment calls" not "I process data accurately"`,selfEmployed:`**Apply this to:**
Service pricing and offering restructure.

**Why this matters:**
- **Current pricing:** £50/hr for work AI does in 5 minutes vs £200/hr for strategic advice AI can't give? Shift your hours
- **Client asks "why so expensive?"** "Because AI can't understand your unique situation and make judgment calls for your business"
- **Competitor undercuts you:** They're competing on declining-value work. You're selling what can't be commoditized`,businesses:`**Apply this to:**
Workforce planning and role redesign.

**Why this matters:**
- **Job descriptions:** "Must be proficient in Excel" becomes obsolete. "Must build client trust in complex sales" stays valuable
- **Training budget:** Spending on software training (declining) vs negotiation skills (rising)? One gets automated, one becomes premium
- **Retention:** Top talent leaves because they're doing AI-replaceable work. Keep them by developing their irreplaceable capabilities
- Lead industry in understanding where human value concentrates`},"7-2":{skill:"",connection:"AI has pattern recognition. Humans have experience, purpose, judgment, empathy. These aren't just nice-to-haves—they're your competitive edge.",activity:`1. Pick ONE competitive advantage to develop this week:
   - Experience (try something new, face a challenge)
   - Purpose-driven creativity (create something with intention)
   - Judgment under pressure (make a hard call)
   - Empathy in action (truly help someone)

2. Do it
3. Reflect: What did I learn that AI never could?

**Example:**
Choose: Judgment under pressure
Do: Make difficult decision about project priority with incomplete information
Learn: How it feels to weigh consequences, trust gut, own the outcome
AI can't learn: The weight of real responsibility and human stakes`,whyMatters:"You strengthen capabilities that become more valuable as AI advances, build competitive advantages that compound over time, and develop skills that make you irreplaceable.",learners:`**Apply this to:**
School challenges that build character and judgment, not just grades.

**Extract full value:**
Seek experiences that develop wisdom and empathy—leadership roles, difficult projects, helping others—not just resume lines.

**Why this matters:**
- Build advantages that matter more than GPA in AI-driven workplace
- Develop judgment through real consequences while stakes are still low
- Create experiences that teach what books and AI cannot
- Position for leadership roles that require human qualities
- Enter workforce with advantages peers lack`,employees:`**Apply this to:**
Work situations requiring judgment, empathy, or courage.

**Extract full value:**
Volunteer for challenges that develop human advantages—difficult conversations, ambiguous projects, relationship-building opportunities.

**Why this matters:**
- Strengthen skills that make you promotable beyond technical competence
- Build reputation for handling what AI cannot
- Develop judgment that comes only from lived consequences
- Create career resilience through irreplaceable capabilities
- Stand out as AI handles technical work`,selfEmployed:`**Apply this to:**
Client interactions and business challenges.

**Extract full value:**
Lead with human advantages in service delivery—bring empathy to client challenges, exercise judgment in ambiguous situations, show up with courage.

**Why this matters:**
- Command premium rates through irreplaceable human qualities
- Build client loyalty AI service providers cannot match
- Differentiate in marketplace where technical work commoditizes
- Create sustainable business model around human advantages
- Scale impact while maintaining personal touch`,businesses:`**Apply this to:**
Organizational culture and talent development.

**Extract full value:**
Create opportunities for teams to develop human advantages—challenging projects, decision-making authority, relationship-building roles.

**Why this matters:**
- Build workforce with capabilities automation cannot replace
- Attract and retain talent who value development beyond technical skills
- Create competitive advantages in areas AI cannot match
- Prepare organization for future where human qualities drive differentiation
- Lead industry in understanding value of developed human capabilities`},"7-3":{skill:"",connection:"The 3 mistakes (AI dependency, information vs knowledge, identity trap) all come from using AI as a replacement. Smart move: use AI to do things you COULDN'T do before.",activity:`This week, use AI to unlock one capability you don't currently have. Not to do something faster - to do something you literally can't do right now.

**Use this prompt:**

**"I want to use AI to unlock a capability I don't currently have.

Here's my situation:
- What I'm currently good at: [list your existing skills]
- What I wish I could do but can't: [specific capability you lack - be concrete]
- Why I can't do it now: [what's blocking you - knowledge gap, technical skill, time, resources]
- What unlocking this would let me create: [specific output or result you'd produce]
- My available time this week: [realistic amount]

Help me use AI to unlock this capability by:

1. **Breaking down the capability** - What do I actually need to learn/understand to do this? Give me the essential components, not everything.

2. **AI as unlock tool** - Give me a step-by-step process to use AI to help me gain this capability. Show me how AI enhances MY ability, not replaces it.

3. **Verification method** - How do I know I actually gained the capability vs AI just doing it for me? What's the test?

4. **This week's proof** - Give me ONE specific thing to create this week that proves I unlocked this capability. Make it small but real.

5. **Common traps** - What mistakes do people make when trying to unlock this capability with AI? How do I avoid them?

6. **Next level** - Once I prove I can do this, what's the next capability to unlock?

Make this practical for someone with [available time] this week. I want to actually DO something I couldn't do before and have proof I can do it, not just learn about it.

Focus on unlocking MY capability, not having AI do it for me."**

**Then:**
1. Follow the plan AI gives you
2. Create the proof (make the thing you couldn't make before)
3. You've now expanded your capabilities, not replaced them

**Example:**
Can't do: Create data visualizations
AI unlock: Learn to use visualization tools through AI guidance
Proof: Make one chart analyzing real data from my work
Result: New capability unlocked - can now visualize data independently`,whyMatters:"You use AI to grow your capabilities instead of shrink them, avoid dependency by expanding what you can do, and build proof of genuine skill development.",learners:`**Apply this to:**
Academic skills you wish you had but don't (advanced math, coding, design, research methods, languages).

**Extract full value:**
Use AI to unlock capabilities that expand your academic toolkit - learn methods you couldn't before, create projects beyond your current skill level.

**Why this matters:**
- Build capabilities that make you stand out in applications and interviews
- Expand what you can create for assignments and projects
- Develop skills outside your major without formal courses
- Create portfolio pieces that prove expanded capability
- Enter workforce with broader skillset than degree alone provides`,employees:`**Apply this to:**
Work capabilities you need but don't have (data analysis, presentation design, technical writing, project management tools).

**Extract full value:**
Use AI to unlock professional capabilities that make you more valuable - learn skills outside your job description, create outputs beyond your current level.

**Why this matters:**
- Expand your professional value without waiting for training budget
- Take on projects outside your current skill level
- Build capabilities that make you promotable
- Create proof of expanded skillset for performance reviews
- Position for lateral moves or new opportunities`,selfEmployed:`**Apply this to:**
Business capabilities you need but lack (marketing, sales systems, client management, financial modeling).

**Extract full value:**
Use AI to unlock capabilities that grow your business - build systems you couldn't before, offer services beyond current expertise.

**Why this matters:**
- Expand service offerings without hiring specialists
- Build business infrastructure beyond your technical skills
- Create professional outputs that command higher rates
- Unlock revenue opportunities currently blocked by skill gaps
- Scale business capabilities faster than traditional learning`,businesses:`**Apply this to:**
Organizational capabilities needed but lacking in-house (advanced analytics, process automation, strategic planning tools).

**Extract full value:**
Use AI to unlock team capabilities beyond current expertise - enable teams to create outputs beyond their formal training.

**Why this matters:**
- Expand organizational capabilities without new hires
- Enable teams to tackle projects beyond current skill levels
- Build competitive advantages through unlocked capabilities
- Reduce dependency on external consultants
- Create learning culture focused on capability expansion`},"7-4":{skill:"",connection:"Nobody knows exactly how AI will develop. But these four assets (AI skills, human skills, experience, flexibility) win in any scenario.",activity:`Score yourself 1-5 on each asset, pick your lowest, improve it this month:

**Asset 1 - AI Skills:** Can you use AI strategically? (1=no, 5=expert)
**Asset 2 - Human Skills:** Are you developing empathy, judgment, courage? (1=weak, 5=strong)
**Asset 3 - Experience:** Are you building things, not just consuming? (1=no, 5=constantly)
**Asset 4 - Flexibility:** Can you learn new things quickly? (1=rigid, 5=adaptable)

Pick lowest score → Create plan to improve it this month

**Example:**
Scores: AI Skills=4, Human Skills=3, Experience=2, Flexibility=4
Lowest: Experience (I consume more than I create)
Plan: Build one small project this month (blog, tool, service, anything real)`,whyMatters:"You build complete resilience against uncertain AI future, develop assets that compound and stack together, and position to win regardless of how technology evolves.",learners:`**Apply this to:**
Balanced skill development across technical and human capabilities.

**Extract full value:**
Don't just learn AI tools—build things with them. Don't just study—develop judgment through real challenges. Learn how you learn best.

**Why this matters:**
- Enter workforce with complete asset stack, not just credentials
- Build career foundation that works in any AI scenario
- Develop faster than peers who focus on single asset
- Create proof of capabilities through built experience
- Prepare for future career pivots and opportunities`,employees:`**Apply this to:**
Professional development and career resilience.

**Extract full value:**
Balance AI proficiency with human skill development, seek building opportunities at work, develop learning agility for rapid role evolution.

**Why this matters:**
- Become promotion-ready through complete capability stack
- Build career resilience against industry disruption
- Develop faster than colleagues focused on narrow skills
- Create optionality for career transitions
- Stand out through balanced development`,selfEmployed:`**Apply this to:**
Business capability development and market positioning.

**Extract full value:**
Master AI for efficiency, develop human skills for differentiation, build proof through completed projects, stay adaptable as markets shift.

**Why this matters:**
- Build business that scales through AI while differentiating through human skills
- Create competitive advantages across all four assets
- Adapt quickly to market changes and opportunities
- Attract ideal clients through demonstrated complete capability
- Scale income and impact simultaneously`,businesses:`**Apply this to:**
Workforce development and organizational resilience.

**Extract full value:**
Develop all four assets across organization—AI capabilities, human skills culture, building mindset, learning agility systems.

**Why this matters:**
- Build organization that thrives in any AI scenario
- Attract and retain top talent through complete development
- Create sustainable competitive advantages
- Lead industry in balanced capability development
- Prepare for multiple possible futures`}},wy=["Accelerated foundations -- what AI is, how it fits in technology history, and the evolution to machine learning. Understanding is a necessity, not a destination.","Evaluation frameworks -- how ChatGPT works, the autonomy ladder, and frameworks to evaluate ANY AI tool that emerges. Tools change constantly. Evaluation frameworks don't.","Market structure -- how AI goes from research labs to products, who controls what, the four types of AI products, and business models that determine access.","Strategic restraint -- when to use AI, when NOT to, which work to protect, and the five AI traps that create dependency.","Contextual prompting -- frameworks, meta-prompting, and building custom prompt libraries for YOUR workflow.","Systems thinking -- building workflows around outcomes, creating playbooks that survive tool changes, and strategic filtering.","Competitive positioning -- what skills increase in value, which advantages AI can't replicate, and building strategic assets.","Systematic implementation -- building workflows that last, team collaboration, measuring real impact, and continuous improvement."];function vy(){const[e,t]=b.useState(null);b.useEffect(()=>{const o=document.createElement("script");return o.src="https://js.stripe.com/v3/buy-button.js",o.async=!0,document.body.appendChild(o),()=>{document.body.removeChild(o)}},[]);const n=o=>{t(s=>s===o?null:o)};return i.jsxs("div",{className:"w-full min-h-screen bg-white",children:[i.jsx("header",{className:"sticky top-0 z-20 bg-white border-b",style:{borderColor:l.colors.border.subtle},children:i.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"flex justify-between items-center h-16",children:[i.jsxs(G,{to:"/",className:"flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors hover:opacity-70",style:{color:l.colors.text.secondary},children:[i.jsx(Jt,{size:18}),i.jsx("span",{className:"text-sm font-medium",children:"Back"})]}),i.jsx(ao,{size:"sm"})]})})}),i.jsx("section",{className:"py-16 sm:py-24 px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[i.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold mb-4",style:{color:l.colors.text.primary},children:"AI Skills Curriculum"}),i.jsx("p",{className:"text-lg sm:text-xl",style:{color:l.colors.text.secondary},children:"What your child will learn and how we will teach them"})]})}),i.jsx("section",{className:"px-4 sm:px-6 lg:px-8 mb-20 sm:mb-32",children:i.jsx("div",{className:"max-w-6xl mx-auto",children:i.jsx(Dm,{})})}),i.jsx("section",{className:"px-4 sm:px-6 lg:px-8 mb-20 sm:mb-32",children:i.jsxs("div",{className:"max-w-6xl mx-auto",children:[i.jsxs("div",{className:"mb-12",children:[i.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-2",style:{letterSpacing:"-0.03em",color:l.colors.text.primary},children:"The Learning Journey"}),i.jsx("p",{style:{color:l.colors.text.secondary},children:"8 strategic modules designed to build AI skills"})]}),i.jsx("div",{className:"space-y-4",children:Se.map((o,s)=>{const r=e===o.id,a=Math.floor(s/2)+1;return i.jsxs("div",{className:"border-2 rounded-xl transition-all",style:{backgroundColor:l.colors.background.card,borderColor:r?l.colors.accent.cyan:l.colors.border.subtle,boxShadow:r?l.shadows.medium:l.shadows.subtle},children:[i.jsxs("button",{type:"button",onClick:()=>n(o.id),className:"w-full text-left p-6 sm:p-8 cursor-pointer group",children:[i.jsxs("div",{className:"flex items-start justify-between gap-4 mb-3",children:[i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"flex items-baseline gap-3 mb-2",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 px-2 py-1 rounded-md text-xs font-bold whitespace-nowrap flex-shrink-0",style:{backgroundColor:`${l.colors.accent.cyan}15`,color:l.colors.accent.cyan},children:["Week ",a]}),i.jsxs("h3",{className:"text-lg sm:text-xl font-bold",style:{color:l.colors.text.primary},children:["Module ",o.id,": ",o.title]})]}),i.jsx("p",{className:"text-sm line-clamp-2",style:{color:l.colors.text.secondary},children:wy[s]})]}),i.jsxs("div",{className:"inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap flex-shrink-0",style:{backgroundColor:`${l.colors.primary.electric}10`,color:l.colors.primary.electric},children:[o.lessons.length," lessons"]})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-2 rounded-lg",style:{backgroundColor:`${l.colors.accent.coral}15`,color:l.colors.accent.coral},children:i.jsxs("span",{className:"text-sm font-bold tracking-wide",children:["~",Math.ceil(o.lessons.length*.5)," hours"]})}),i.jsx(un,{size:16,style:{color:r?l.colors.accent.cyan:l.colors.text.muted,transform:r?"rotate(180deg)":"rotate(0deg)",transition:"transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), color 200ms ease"}})]})]}),i.jsx("div",{style:{maxHeight:r?`${o.lessons.length*64+60}px`:"0px",opacity:r?1:0,overflow:"hidden",transition:"max-height 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 250ms ease"},children:i.jsx("div",{className:"px-6 sm:px-8 pb-6 sm:pb-8",children:i.jsxs("div",{className:"border-t pt-4",style:{borderColor:l.colors.border.subtle},children:[i.jsxs("div",{className:"flex items-center gap-4 mb-2 px-0",children:[i.jsx("span",{className:"text-[10px] font-semibold uppercase tracking-widest w-6 flex-shrink-0",style:{color:l.colors.text.muted}}),i.jsx("span",{className:"text-[10px] font-semibold uppercase tracking-widest",style:{color:l.colors.text.muted},children:"Lessons"}),i.jsx("span",{className:"ml-auto text-[10px] font-semibold uppercase tracking-widest flex-shrink-0",style:{color:l.colors.text.muted},children:"Skill"})]}),o.lessons.map((c,u)=>{var d;return i.jsxs("div",{className:"flex items-center gap-4 py-3",style:{borderBottom:u<o.lessons.length-1?`1px solid ${l.colors.border.subtle}20`:"none"},children:[i.jsx("span",{className:"text-xs font-bold w-6 text-right flex-shrink-0 tabular-nums",style:{color:l.colors.text.muted},children:String(c.id).padStart(2,"0")}),i.jsx("span",{className:"text-sm font-medium",style:{color:l.colors.text.primary},children:c.title}),((d=ti[`${o.id}-${c.id}`])==null?void 0:d.skill)&&i.jsx("span",{className:"ml-auto text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0",style:{backgroundColor:`${l.colors.accent.cyan}12`,color:l.colors.accent.cyan},children:ti[`${o.id}-${c.id}`].skill})]},c.id)})]})})})]},o.id)})})]})}),i.jsx("section",{className:"px-4 sm:px-6 lg:px-8 pb-20",children:i.jsx("div",{className:"max-w-4xl mx-auto",children:i.jsx("div",{className:"p-8 rounded-lg border",style:{borderColor:l.colors.border.subtle,backgroundColor:"white"},children:i.jsx("stripe-buy-button",{"buy-button-id":"buy_btn_1TQ3drJaju4Y4wsr7v4itBjq","publishable-key":"pk_live_51RkVzzJaju4Y4wsrQsnGXWnUAr9vwAYU7OFPGgLtIcGxfNaW9AsBejXDTFtrCMGikdLzIL3pqvt6ryM0vKwltScV00KH4zcc30"})})})}),i.jsx("style",{children:`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-down,
          .animate-fade-in,
          .animate-fade-in-up {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `})]})}function by({tier:e}){return i.jsxs("div",{className:"h-full flex flex-col rounded-xl border-2 p-8 transition-all",style:{backgroundColor:l.colors.background.card,borderColor:l.colors.border.default,boxShadow:l.shadows.medium},children:[i.jsxs("div",{className:"mb-6",children:[i.jsx("h3",{className:"text-xl font-bold mb-2",style:{color:l.colors.text.primary},children:e.name}),i.jsx("p",{className:"text-sm leading-relaxed",style:{color:l.colors.text.secondary},children:e.description})]}),i.jsx("div",{className:"flex-1 mb-8",children:i.jsx("div",{className:"space-y-4",children:e.features.map((t,n)=>i.jsxs("div",{className:"flex items-start gap-3",children:[i.jsx("div",{className:"flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",style:{backgroundColor:`${l.colors.accent.cyan}20`},children:i.jsx("div",{className:"w-2 h-2 rounded-full",style:{backgroundColor:l.colors.accent.cyan}})}),i.jsx("span",{className:"text-sm leading-relaxed",style:{color:l.colors.text.secondary},children:t})]},n))})}),i.jsx("button",{className:"w-full px-6 py-3 rounded-lg font-semibold transition-all",style:{backgroundColor:l.colors.primary.electric,color:"white",border:`2px solid ${l.colors.primary.electric}`,boxShadow:l.shadows.subtle},onMouseEnter:t=>{t.currentTarget.style.boxShadow=l.shadows.medium},onMouseLeave:t=>{t.currentTarget.style.boxShadow=l.shadows.subtle},children:"Get Started"})]})}const xy=[{name:"Basic",description:"Essential AI concepts and foundational frameworks to get you started",features:["Core AI principles and evaluation frameworks","Understanding how AI tools work","Access to module 1-3 lessons","Progress tracking dashboard"]},{name:"Pro",description:"Complete curriculum with practical implementation strategies and real-world applications",features:["All modules 1-8 with full curriculum access","Practical implementation frameworks","Strategic decision-making guides","Progress tracking and completion certificates"]},{name:"Advanced",description:"Premium support with personalized guidance and advanced strategic insights",features:["Everything in Pro tier","Direct mentorship and guidance","Personalized implementation roadmap","Priority email support and resources"]}];function ky(){return i.jsxs("section",{className:"mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up",children:[i.jsxs("div",{className:"mb-12",children:[i.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-2",style:{letterSpacing:"-0.03em",color:l.colors.text.primary},children:"Explore Our Pricing Tiers"}),i.jsx("p",{style:{color:l.colors.text.secondary},children:"Choose the plan that works best for your learning journey"})]}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:xy.map((e,t)=>i.jsx(by,{tier:e},t))})]})}const Ay=["Accelerated foundations -- what AI is, how it fits in technology history, and the evolution to machine learning. Understanding is a necessity, not a destination.","Evaluation frameworks -- how ChatGPT works, the autonomy ladder, and frameworks to evaluate ANY AI tool that emerges. Tools change constantly. Evaluation frameworks don't.","Market structure -- how AI goes from research labs to products, who controls what, the four types of AI products, and business models that determine access.","Strategic restraint -- when to use AI, when NOT to, which work to protect, and the five AI traps that create dependency.","Contextual prompting -- frameworks, meta-prompting, and building custom prompt libraries for YOUR workflow.","Systems thinking -- building workflows around outcomes, creating playbooks that survive tool changes, and strategic filtering.","Competitive positioning -- what skills increase in value, which advantages AI can't replicate, and building strategic assets.","Systematic implementation -- building workflows that last, team collaboration, measuring real impact, and continuous improvement."];Se.reduce((e,t)=>e+t.lessons.length,0);function Iy(){const[e,t]=b.useState(null),n=s=>{t(r=>r===s?null:s)},o="hover:shadow-md";return i.jsxs("div",{className:"w-full min-h-screen overflow-y-auto relative",children:[ei.animatedBackground,i.jsxs("div",{className:"relative z-10",children:[i.jsxs("nav",{className:"sticky top-0 z-20 bg-white/98 backdrop-blur-md border-b",style:{borderColor:l.colors.border.subtle,boxShadow:l.shadows.medium},children:[i.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-px",style:{background:`linear-gradient(90deg, transparent, ${l.colors.border.default}80, transparent)`}}),i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"flex justify-between items-center h-16 sm:h-18",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsxs(G,{to:"/",className:"flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors hover:opacity-70",style:{color:l.colors.text.secondary},children:[i.jsx(Jt,{size:18}),i.jsx("span",{className:"text-sm font-medium hidden sm:inline",children:"Back to Landing"})]}),i.jsx("div",{className:"hidden sm:block w-px h-6",style:{backgroundColor:l.colors.border.subtle}}),i.jsx("span",{className:"text-sm font-semibold",style:{color:l.colors.text.secondary},children:"AI Education"})]}),i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx(ao,{size:"sm"}),i.jsxs(G,{to:"/login",className:"px-5 py-2 rounded-md font-bold text-sm relative group overflow-hidden border min-h-10 flex items-center",style:{backgroundColor:l.colors.accent.cyan,color:"white",borderColor:l.colors.accent.cyan,boxShadow:"0 0 0 rgba(6, 182, 212, 0.3)",transition:l.transitions.fast},onMouseEnter:s=>{},onMouseLeave:s=>{s.currentTarget.style.boxShadow="0 0 0 rgba(6, 182, 212, 0.3)",s.currentTarget.style.transform="translateY(0)"},children:[i.jsx("span",{className:"relative z-10",children:"Sign In"}),ei.hoverGlow]})]})]})})]}),i.jsx("section",{className:"min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-0",children:i.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 animate-fade-in-down",style:{borderColor:l.colors.accent.cyan,backgroundColor:`${l.colors.accent.cyan}08`},children:[i.jsx(xn,{size:16,style:{color:l.colors.accent.cyan}}),i.jsx("span",{className:"text-sm font-semibold tracking-wide",style:{color:l.colors.accent.cyan},children:"Strategic AI Implementation"})]}),i.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight animate-fade-in",style:{letterSpacing:"-0.03em",background:void 0,WebkitBackgroundClip:void 0,WebkitTextFillColor:void 0,backgroundClip:void 0,color:l.colors.text.primary},children:"Learn about AI."}),i.jsxs("div",{className:"max-w-2xl mx-auto mb-8 animate-fade-in-up",style:{animationDelay:"0.1s"},children:[i.jsx("p",{className:"text-xl sm:text-2xl font-semibold leading-relaxed tracking-wide mb-4",style:{color:l.colors.accent.cyan},children:"So when AI changes, you can adapt with it."}),i.jsx("p",{className:"text-lg sm:text-xl leading-relaxed tracking-wide",style:{color:l.colors.text.secondary},children:"Think independently, decide strategically."})]}),i.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-16 sm:mb-20 animate-fade-in-up",style:{animationDelay:"0.2s"},children:i.jsxs("a",{href:"https://calendly.com/shawaiznaeem-104/intro-call",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg group",style:{background:`linear-gradient(135deg, ${l.colors.primary.electric} 0%, ${l.colors.accent.cyan} 100%)`,color:"white",boxShadow:l.shadows.medium},children:["Book a Call ",i.jsx(Gt,{size:20,className:"group-hover:scale-110 transition-transform"})]})})]})}),i.jsx("section",{className:"mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up",style:{animationDelay:"0.4s"},children:i.jsxs("div",{className:"p-8 sm:p-12 lg:p-16 rounded-2xl border-2 backdrop-blur-sm",style:{borderColor:`${l.colors.primary.electric}40`,background:`linear-gradient(135deg, ${l.colors.primary.light}30 0%, ${l.colors.background.card} 100%)`,boxShadow:l.shadows.large},children:[i.jsxs("div",{className:"mb-10",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4",style:{backgroundColor:`${l.colors.accent.cyan}10`},children:[i.jsx(ui,{size:14,style:{color:l.colors.accent.cyan}}),i.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider",style:{color:l.colors.accent.cyan},children:"What Makes This Different"})]}),i.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-8",style:{letterSpacing:"-0.03em",color:l.colors.text.primary},children:"Transform From Literacy to Leadership"})]}),i.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10",children:[i.jsxs("div",{className:`p-6 rounded-xl border backdrop-blur-sm transition-all ${o}`,style:{borderColor:l.colors.accent.cyan,backgroundColor:`${l.colors.accent.cyan}05`,boxShadow:l.shadows.subtle},children:[i.jsx("p",{className:"text-2xl sm:text-3xl font-bold mb-2",style:{color:l.colors.accent.cyan},children:"£391B → £3.5T"}),i.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider leading-tight",style:{color:l.colors.text.secondary},children:"Global AI market growth by 2033"})]}),i.jsxs("div",{className:`p-6 rounded-xl border backdrop-blur-sm transition-all ${o}`,style:{borderColor:l.colors.primary.electric,backgroundColor:`${l.colors.primary.electric}05`,boxShadow:l.shadows.subtle},children:[i.jsx("p",{className:"text-2xl sm:text-3xl font-bold mb-2",style:{color:l.colors.primary.electric},children:"10 Million Workers"}),i.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider leading-tight",style:{color:l.colors.text.secondary},children:"UK government training by 2030"})]}),i.jsxs("div",{className:`p-6 rounded-xl border backdrop-blur-sm transition-all ${o}`,style:{borderColor:l.colors.accent.coral,backgroundColor:`${l.colors.accent.coral}05`,boxShadow:l.shadows.subtle},children:[i.jsx("p",{className:"text-2xl sm:text-3xl font-bold mb-2",style:{color:l.colors.accent.coral},children:"78% of Organizations"}),i.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider leading-tight",style:{color:l.colors.text.secondary},children:"Now using AI in business functions"})]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8",children:[i.jsxs("div",{className:"p-8 rounded-lg",style:{backgroundColor:`${l.colors.accent.coral}10`,borderLeft:`4px solid ${l.colors.accent.coral}`},children:[i.jsx("p",{className:"text-lg font-semibold mb-4",style:{color:l.colors.accent.coral},children:"The Problem"}),i.jsxs("div",{className:"space-y-3",style:{color:l.colors.text.secondary},children:[i.jsx("p",{className:"text-sm leading-relaxed",children:"AI is moving fast - and it's not slowing down. New tools launch every week, and by the time you've learned one, three more have taken its place. If you're trying to keep up, it can feel like you're always one step behind."}),i.jsx("p",{className:"text-sm leading-relaxed font-medium",children:"You shouldn't have to feel that way."})]})]}),i.jsxs("div",{className:"p-8 rounded-lg",style:{backgroundColor:`${l.colors.accent.cyan}10`,borderLeft:`4px solid ${l.colors.accent.cyan}`},children:[i.jsx("p",{className:"text-lg font-semibold mb-4",style:{color:l.colors.accent.cyan},children:"The Solution"}),i.jsxs("div",{className:"space-y-3",style:{color:l.colors.text.secondary},children:[i.jsx("p",{className:"text-sm leading-relaxed",children:"The businesses that thrive with AI aren't the ones chasing every new tool. They're the ones who took the time to understand it properly."}),i.jsx("p",{className:"text-sm leading-relaxed",children:"When you have a genuine understanding of AI - the frameworks, the principles, the bigger picture - the noise starts to fade. You stop feeling overwhelmed and start making clear, confident decisions about what's actually worth your time and what isn't."}),i.jsx("p",{className:"text-sm leading-relaxed",children:"That's what we help you build. Not just knowledge, but the kind of understanding that stays with you - whatever AI throws at your industry next."})]})]})]}),i.jsx("div",{className:"p-6 rounded-lg",style:{backgroundColor:`${l.colors.primary.deep}08`,borderTop:`2px solid ${l.colors.primary.electric}`},children:i.jsx("p",{className:"text-center text-sm leading-relaxed",style:{color:l.colors.text.secondary},children:i.jsx("span",{style:{color:l.colors.primary.deep,fontWeight:"600"},children:"Your independence is our success."})})})]})}),i.jsx(Dm,{}),i.jsxs("section",{className:"mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up",style:{animationDelay:"0.5s"},children:[i.jsxs("div",{className:"mb-12",children:[i.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-2",style:{letterSpacing:"-0.03em",color:l.colors.text.primary},children:"The Learning Journey"}),i.jsx("p",{style:{color:l.colors.text.secondary},children:"8 strategic modules designed to build competitive advantage"})]}),i.jsx("div",{className:"space-y-4",children:Se.map((s,r)=>{const a=e===s.id,c=Math.floor(r/2)+1;return i.jsxs("div",{className:"border-2 rounded-xl transition-all",style:{backgroundColor:l.colors.background.card,borderColor:a?l.colors.accent.cyan:l.colors.border.subtle,boxShadow:a?l.shadows.medium:l.shadows.subtle},children:[i.jsxs("button",{type:"button",onClick:()=>n(s.id),className:"w-full text-left p-6 sm:p-8 cursor-pointer group",children:[i.jsxs("div",{className:"flex items-start justify-between gap-4 mb-3",children:[i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"flex items-baseline gap-3 mb-2",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 px-2 py-1 rounded-md text-xs font-bold whitespace-nowrap flex-shrink-0",style:{backgroundColor:`${l.colors.accent.cyan}15`,color:l.colors.accent.cyan},children:["Week ",c]}),i.jsxs("h3",{className:"text-lg sm:text-xl font-bold",style:{color:l.colors.text.primary},children:["Module ",s.id,": ",s.title]})]}),i.jsx("p",{className:"text-sm line-clamp-2",style:{color:l.colors.text.secondary},children:Ay[r]})]}),i.jsxs("div",{className:"inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap flex-shrink-0",style:{backgroundColor:`${l.colors.primary.electric}10`,color:l.colors.primary.electric},children:[s.lessons.length," lessons"]})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-2 rounded-lg",style:{backgroundColor:`${l.colors.accent.coral}15`,color:l.colors.accent.coral},children:i.jsxs("span",{className:"text-sm font-bold tracking-wide",children:["~",Math.ceil(s.lessons.length*.5)," hours"]})}),i.jsx(un,{size:16,style:{color:a?l.colors.accent.cyan:l.colors.text.muted,transform:a?"rotate(180deg)":"rotate(0deg)",transition:"transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), color 200ms ease"}})]})]}),i.jsx("div",{style:{maxHeight:a?`${s.lessons.length*64+60}px`:"0px",opacity:a?1:0,overflow:"hidden",transition:"max-height 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 250ms ease"},children:i.jsx("div",{className:"px-6 sm:px-8 pb-6 sm:pb-8",children:i.jsxs("div",{className:"border-t pt-4",style:{borderColor:l.colors.border.subtle},children:[i.jsxs("div",{className:"flex items-center gap-4 mb-2 px-0",children:[i.jsx("span",{className:"text-[10px] font-semibold uppercase tracking-widest w-6 flex-shrink-0",style:{color:l.colors.text.muted}}),i.jsx("span",{className:"text-[10px] font-semibold uppercase tracking-widest",style:{color:l.colors.text.muted},children:"Lessons"}),i.jsx("span",{className:"ml-auto text-[10px] font-semibold uppercase tracking-widest flex-shrink-0",style:{color:l.colors.text.muted},children:"Skill"})]}),s.lessons.map((u,d)=>{var m;return i.jsxs("div",{className:"flex items-center gap-4 py-3",style:{borderBottom:d<s.lessons.length-1?`1px solid ${l.colors.border.subtle}20`:"none"},children:[i.jsx("span",{className:"text-xs font-bold w-6 text-right flex-shrink-0 tabular-nums",style:{color:l.colors.text.muted},children:String(u.id).padStart(2,"0")}),i.jsx("span",{className:"text-sm font-medium",style:{color:l.colors.text.primary},children:u.title}),((m=ti[`${s.id}-${u.id}`])==null?void 0:m.skill)&&i.jsx("span",{className:"ml-auto text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0",style:{backgroundColor:`${l.colors.accent.cyan}12`,color:l.colors.accent.cyan},children:ti[`${s.id}-${u.id}`].skill})]},u.id)})]})})})]},s.id)})})]}),i.jsx(ky,{}),i.jsx("section",{className:"mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up",style:{animationDelay:"0.7s"},children:i.jsxs("div",{className:"p-8 sm:p-12 lg:p-16 rounded-2xl border-2 text-center",style:{borderColor:l.colors.accent.coral,background:`linear-gradient(135deg, ${l.colors.accent.coral}08 0%, ${l.colors.background.card} 100%)`,boxShadow:l.shadows.large},children:[i.jsx("h2",{className:"text-2xl sm:text-3xl lg:text-4xl font-bold mb-4",style:{letterSpacing:"-0.03em",color:l.colors.text.primary},children:"Ready to Build True AI Understanding?"}),i.jsx("p",{className:"text-lg max-w-2xl mx-auto mb-8 leading-relaxed",style:{color:l.colors.text.secondary},children:"Schedule a call to discuss how this program can help you and your team develop lasting strategic advantage."}),i.jsxs("a",{href:"https://calendly.com/shawaiznaeem-104/intro-call",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg group",style:{background:`linear-gradient(135deg, ${l.colors.accent.coral} 0%, ${l.colors.primary.electric} 100%)`,color:"white",boxShadow:l.shadows.medium},children:["Book a Call ",i.jsx(Gt,{size:20,className:"group-hover:scale-110 transition-transform"})]})]})}),i.jsx("footer",{className:"mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pb-12",children:i.jsx("div",{className:"border-t pt-8",style:{borderColor:l.colors.border.subtle},children:i.jsx("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-6",children:i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(ty,{size:20,style:{color:l.colors.accent.cyan}}),i.jsx("a",{href:"mailto:shawaizn@energiseai.co.uk",className:"text-base font-medium hover:underline transition-colors",style:{color:l.colors.text.secondary},onMouseEnter:s=>s.currentTarget.style.color=l.colors.accent.cyan,onMouseLeave:s=>s.currentTarget.style.color=l.colors.text.secondary,children:"shawaizn@energiseai.co.uk"})]})})})})]}),i.jsx("style",{children:`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-down,
          .animate-fade-in,
          .animate-fade-in-up {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `})]})}const jy="https://calendly.com/shawaiznaeem-104/intro-call",ve="#c17f3a",Et="rgba(193,127,58,0.1)",gt="rgba(193,127,58,0.25)",Sy=[{icon:xl,title:"AI Opportunity Audit",description:"We map every part of your business against AI capabilities to surface real opportunities — not just hype."},{icon:oy,title:"Prioritised Roadmap",description:"A clear, sequenced plan showing which processes to automate first, based on impact and effort."},{icon:an,title:"Competitive Positioning",description:"Understand how AI can widen your advantage over competitors in your specific market."},{icon:Gn,title:"Team Readiness Review",description:"Identify skill gaps and adoption risks so your strategy lands — not just exists on paper."}];function Cy(){const e=Nt(),[t,n]=b.useState(!1);return i.jsxs("div",{style:{minHeight:"100vh",background:"#faf8f5"},children:[i.jsx("nav",{style:{background:"rgba(250,248,245,0.92)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",borderBottom:"1px solid rgba(193,127,58,0.15)",position:"sticky",top:0,zIndex:20},children:i.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto",padding:"0 1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",height:"64px"},children:[i.jsxs("button",{onClick:()=>e(-1),style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.875rem",fontWeight:600,color:"#6b5c4e",background:"none",border:"none",cursor:"pointer"},onMouseEnter:o=>o.currentTarget.style.color=ve,onMouseLeave:o=>o.currentTarget.style.color="#6b5c4e",children:[i.jsx(Jt,{size:16})," Back"]}),i.jsxs("span",{style:{fontFamily:"'Playfair Display', Georgia, serif",fontSize:"1.35rem",fontWeight:700,color:"#1a1612",letterSpacing:"-0.01em"},children:["Energise ",i.jsx("span",{style:{color:ve},children:"AI"})]}),i.jsx("div",{style:{width:60}})]})}),i.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto",padding:"3rem 1.5rem 5rem"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"3.5rem"},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"4px 14px",borderRadius:"20px",marginBottom:"1.25rem",background:Et,border:`1px solid ${gt}`,fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:ve},children:[i.jsx(ui,{size:12})," AI Consulting"]}),i.jsxs("h1",{style:{fontFamily:"'Playfair Display', Georgia, serif",fontSize:"clamp(2rem, 5vw, 3rem)",fontWeight:700,color:"#1a1612",letterSpacing:"-0.02em",lineHeight:1.15,marginBottom:"1rem"},children:["Find out exactly where",i.jsx("br",{}),"AI creates value for you"]}),i.jsx("p",{style:{fontSize:"1.05rem",color:"#6b5c4e",maxWidth:"480px",margin:"0 auto",lineHeight:1.65},children:"A focused two-step process. An AI interview to understand your business, then a one-on-one call to build your roadmap."})]}),i.jsxs("div",{style:{borderRadius:"12px",padding:"1.75rem 2rem",marginBottom:"2.5rem",background:"#ffffff",border:"1px solid #e8dfd4"},children:[i.jsx("p",{style:{fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#9a8a7a",marginBottom:"1.5rem"},children:"How this works"}),i.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:0},className:"flex-col sm:flex-row",children:[i.jsx($c,{number:1,icon:sy,label:"AI Interview",description:"Answer questions about your business so we arrive at the call prepared.",active:!t,done:t}),i.jsxs("div",{style:{flex:1,display:"flex",alignItems:"center",padding:"0 1rem"},children:[i.jsx("div",{style:{height:"1px",flex:1,background:t?`linear-gradient(90deg, ${ve}, rgba(193,127,58,0.2))`:"#e8dfd4",transition:"background 0.6s ease"}}),i.jsx(Xn,{size:16,style:{color:t?ve:"#d4c4b0",flexShrink:0}})]}),i.jsx($c,{number:2,icon:Gt,label:"Book a Call",description:"Pick a time. We review the interview together and build your strategy.",active:t,done:!1,locked:!t})]})]}),i.jsxs("div",{style:{marginBottom:"2.5rem"},children:[i.jsx("p",{style:{fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#9a8a7a",marginBottom:"1.25rem"},children:"What the strategy includes"}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"1rem"},children:Sy.map(o=>{const s=o.icon;return i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"1rem",padding:"1.25rem",borderRadius:"10px",background:"#ffffff",border:"1px solid #e8dfd4"},children:[i.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"8px",flexShrink:0,background:Et,border:`1px solid ${gt}`,display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(s,{size:16,style:{color:ve}})}),i.jsxs("div",{children:[i.jsx("p",{style:{fontSize:"0.875rem",fontWeight:700,color:"#1a1612",marginBottom:"0.25rem"},children:o.title}),i.jsx("p",{style:{fontSize:"0.825rem",color:"#6b5c4e",lineHeight:1.6},children:o.description})]})]},o.title)})})]}),i.jsxs("div",{style:{borderRadius:"12px",overflow:"hidden",marginBottom:"1.25rem",border:`1px solid ${gt}`},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.875rem 1.5rem",background:Et,borderBottom:`1px solid ${gt}`},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[i.jsx("div",{style:{width:"28px",height:"28px",borderRadius:"50%",background:ve,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:800,color:"white"},children:"1"}),i.jsx("span",{style:{fontSize:"0.875rem",fontWeight:700,color:"#1a1612"},children:"AI Interview"})]}),t?i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",fontSize:"0.75rem",fontWeight:700,color:"#059669"},children:[i.jsx(yn,{size:14})," Complete"]}):i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",padding:"3px 10px",borderRadius:"20px",fontSize:"0.7rem",fontWeight:700,background:Et,color:ve,border:`1px solid ${gt}`},children:[i.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:ve,animation:"pulse 2s infinite"}}),"Start here"]})]}),i.jsx("div",{style:{height:"560px",background:"#f4efe8"},children:i.jsx("iframe",{src:"https://app.relevanceai.com/agents/d7b62b/6ef140e56d41-4e20-bc3e-a953387246ab/96d09d11-a232-4c57-b6fd-11f8ba878c01/share?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23c17f3a&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false",width:"100%",height:"100%",frameBorder:"0",allow:"microphone",title:"AI Strategy Interview",style:{display:"block"}})}),!t&&i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.875rem 1.5rem",background:"#faf8f5",borderTop:"1px solid #e8dfd4"},children:[i.jsx("p",{style:{fontSize:"0.8rem",color:"#9a8a7a"},children:"Complete the interview above, then mark it done to unlock your booking."}),i.jsxs("button",{onClick:()=>n(!0),style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 16px",borderRadius:"8px",fontSize:"0.8rem",fontWeight:700,cursor:"pointer",background:Et,color:ve,border:`1px solid ${gt}`,transition:"background 0.2s"},onMouseEnter:o=>o.currentTarget.style.background="rgba(193,127,58,0.18)",onMouseLeave:o=>o.currentTarget.style.background=Et,children:[i.jsx(yn,{size:14})," Interview complete"]})]})]}),i.jsxs("div",{style:{borderRadius:"12px",overflow:"hidden",border:t?`1px solid ${gt}`:"1px solid #e8dfd4",opacity:t?1:.5,transition:"opacity 0.4s ease, border-color 0.4s ease"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.875rem 1.5rem",background:t?Et:"#f4efe8",borderBottom:`1px solid ${t?gt:"#e8dfd4"}`,transition:"background 0.4s ease"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[i.jsx("div",{style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:t?ve:"#e8dfd4",fontSize:"0.75rem",fontWeight:800,color:t?"white":"#b0a090",transition:"background 0.4s ease"},children:t?"2":i.jsx(wn,{size:12})}),i.jsx("span",{style:{fontSize:"0.875rem",fontWeight:700,color:t?"#1a1612":"#9a8a7a"},children:"Book a Call"})]}),!t&&i.jsx("span",{style:{fontSize:"0.75rem",color:"#b0a090"},children:"Unlocks after interview"})]}),i.jsx("div",{style:{padding:"2.5rem",textAlign:"center",background:t?"rgba(193,127,58,0.03)":"#f4efe8",transition:"background 0.4s ease"},children:t?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"12px",margin:"0 auto 1.25rem",background:Et,border:`1px solid ${gt}`,display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(Gt,{size:24,style:{color:ve}})}),i.jsx("h3",{style:{fontFamily:"'Playfair Display', Georgia, serif",fontSize:"1.4rem",fontWeight:700,color:"#1a1612",marginBottom:"0.5rem"},children:"You're ready to book"}),i.jsx("p",{style:{fontSize:"0.875rem",color:"#6b5c4e",maxWidth:"380px",margin:"0 auto 2rem",lineHeight:1.65},children:"Pick a time that works for you. We'll review what the interview captured and build your personalised AI strategy together."}),i.jsxs("a",{href:jy,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"0.875rem 2rem",borderRadius:"8px",fontWeight:700,fontSize:"0.9rem",textDecoration:"none",background:ve,color:"white",transition:"background 0.2s, transform 0.2s"},onMouseEnter:o=>{o.currentTarget.style.background="#a66830",o.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:o=>{o.currentTarget.style.background=ve,o.currentTarget.style.transform="translateY(0)"},children:[i.jsx(Gt,{size:17})," Book Your Strategy Call ",i.jsx(Xn,{size:16})]})]}):i.jsxs("div",{style:{padding:"1rem 0"},children:[i.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"12px",margin:"0 auto 1rem",background:"#e8dfd4",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(wn,{size:22,style:{color:"#b0a090"}})}),i.jsx("p",{style:{fontSize:"0.875rem",fontWeight:600,color:"#b0a090"},children:"Complete the AI interview above to unlock booking"})]})})]})]})]})}function $c({number:e,icon:t,label:n,description:o,active:s,done:r,locked:a}){return i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",flex:1},children:[i.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:r?"#059669":s?ve:"#e8dfd4",border:`2px solid ${r?"#059669":s?ve:"#e8dfd4"}`,transition:"all 0.4s ease"},children:r?i.jsx(yn,{size:16,style:{color:"white"}}):a?i.jsx(wn,{size:13,style:{color:"#b0a090"}}):i.jsx(t,{size:15,style:{color:s?"white":"#b0a090"}})}),i.jsxs("div",{children:[i.jsxs("p",{style:{fontSize:"0.875rem",fontWeight:700,marginBottom:"2px",color:s||r?"#1a1612":"#9a8a7a"},children:["Step ",e," — ",n]}),i.jsx("p",{style:{fontSize:"0.8rem",color:"#9a8a7a",lineHeight:1.55},children:o})]})]})}const An=[{title:"Website Chatbots",description:"AI-powered customer support and engagement, live on your website.",icon:_f},{title:"Proposal Automation",description:"Generate proposals in seconds. Custom templates, smart data insertion.",icon:_n},{title:"Social Media Tools",description:"Content creation, scheduling, and performance optimization automated.",icon:Mm},{title:"Custom GPTs",description:"Specialized AI models trained on your data and processes.",icon:Nm},{title:"Document Makers",description:"Automatically generate reports, presentations, and documents.",icon:Jf},{title:"AI Agents",description:"Autonomous systems that handle complex multi-step workflows.",icon:xn}];function Ny(){b.useState(null);const[e,t]=b.useState(0),n=()=>{t(r=>(r+1)%An.length)},o=()=>{t(r=>(r-1+An.length)%An.length)},s="hover:shadow-md";return i.jsxs("div",{className:"w-full min-h-screen overflow-y-auto relative",children:[ei.animatedBackground,i.jsxs("div",{className:"relative z-10",children:[i.jsxs("nav",{className:"sticky top-0 z-20 bg-white/98 backdrop-blur-md border-b",style:{borderColor:l.colors.border.subtle,boxShadow:l.shadows.medium},children:[i.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-px",style:{background:`linear-gradient(90deg, transparent, ${l.colors.border.default}80, transparent)`}}),i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"flex justify-between items-center h-16 sm:h-18",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsxs(G,{to:"/",className:"flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors hover:opacity-70",style:{color:l.colors.text.secondary},children:[i.jsx(Jt,{size:18}),i.jsx("span",{className:"text-sm font-medium hidden sm:inline",children:"Back to Landing"})]}),i.jsx("div",{className:"hidden sm:block w-px h-6",style:{backgroundColor:l.colors.border.subtle}}),i.jsx("span",{className:"text-sm font-semibold",style:{color:l.colors.text.secondary},children:"AI Implementation"})]}),i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx(ao,{size:"sm"}),i.jsxs(G,{to:"/login",className:"px-5 py-2 rounded-md font-bold text-sm relative group overflow-hidden border min-h-10 flex items-center",style:{backgroundColor:l.colors.accent.cyan,color:"white",borderColor:l.colors.accent.cyan,boxShadow:"0 0 0 rgba(6, 182, 212, 0.3)",transition:l.transitions.fast},onMouseEnter:r=>{},onMouseLeave:r=>{r.currentTarget.style.boxShadow="0 0 0 rgba(6, 182, 212, 0.3)",r.currentTarget.style.transform="translateY(0)"},children:[i.jsx("span",{className:"relative z-10",children:"Sign In"}),ei.hoverGlow]})]})]})})]}),i.jsx("section",{className:"min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-0",children:i.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 animate-fade-in-down",style:{borderColor:l.colors.accent.cyan,backgroundColor:`${l.colors.accent.cyan}08`},children:[i.jsx(ks,{size:16,style:{color:l.colors.accent.cyan}}),i.jsx("span",{className:"text-sm font-semibold tracking-wide",style:{color:l.colors.accent.cyan},children:"From Strategy to Live"})]}),i.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight animate-fade-in",style:{letterSpacing:"-0.03em",background:void 0,WebkitBackgroundClip:void 0,WebkitTextFillColor:void 0,backgroundClip:void 0,color:l.colors.text.primary},children:"AI tools that actually work."}),i.jsxs("div",{className:"max-w-2xl mx-auto mb-8 animate-fade-in-up",style:{animationDelay:"0.1s"},children:[i.jsx("p",{className:"text-xl sm:text-2xl font-semibold leading-relaxed tracking-wide mb-4",style:{color:l.colors.accent.cyan},children:"We build or set up the AI tools your team needs."}),i.jsx("p",{className:"text-lg sm:text-xl leading-relaxed tracking-wide",style:{color:l.colors.text.secondary},children:"Move from plan to practise. Deploy tools that give you measurable benefits."})]}),i.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-16 sm:mb-20 animate-fade-in-up",style:{animationDelay:"0.2s"},children:i.jsxs(G,{to:"/login",className:"inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg group",style:{background:`linear-gradient(135deg, ${l.colors.primary.electric} 0%, ${l.colors.accent.cyan} 100%)`,color:"white",boxShadow:l.shadows.medium},children:["Get Started ",i.jsx(mt,{size:20,className:"group-hover:translate-x-1 transition-transform"})]})})]})}),i.jsx("section",{className:"mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up",style:{animationDelay:"0.4s"},children:i.jsxs("div",{className:"p-8 sm:p-12 lg:p-16 rounded-2xl border-2 backdrop-blur-sm",style:{borderColor:`${l.colors.primary.electric}40`,background:`linear-gradient(135deg, ${l.colors.primary.light}30 0%, ${l.colors.background.card} 100%)`,boxShadow:l.shadows.large},children:[i.jsxs("div",{className:"mb-10",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4",style:{backgroundColor:`${l.colors.accent.cyan}10`},children:[i.jsx(ks,{size:14,style:{color:l.colors.accent.cyan}}),i.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider",style:{color:l.colors.accent.cyan},children:"The Implementation Gap"})]}),i.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-8",style:{letterSpacing:"-0.03em",color:l.colors.text.primary},children:"Great Plans Don't Implement Themselves"})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8",children:[i.jsxs("div",{className:"p-8 rounded-lg",style:{backgroundColor:`${l.colors.accent.coral}10`,borderLeft:`4px solid ${l.colors.accent.coral}`},children:[i.jsx("p",{className:"text-lg font-semibold mb-4",style:{color:l.colors.accent.coral},children:"The Problem"}),i.jsxs("div",{className:"space-y-3",style:{color:l.colors.text.secondary},children:[i.jsx("p",{className:"text-sm leading-relaxed",children:"You know which AI tools would help. But actually setting them up? That's a different story. Integration is complex. Customization requires technical expertise. And even when you get it working, your team needs training."}),i.jsx("p",{className:"text-sm leading-relaxed",children:"Most businesses either skip implementation entirely or waste months trying to figure it out on their own."})]})]}),i.jsxs("div",{className:"p-8 rounded-lg",style:{backgroundColor:`${l.colors.accent.cyan}10`,borderLeft:`4px solid ${l.colors.accent.cyan}`},children:[i.jsx("p",{className:"text-lg font-semibold mb-4",style:{color:l.colors.accent.cyan},children:"The Solution"}),i.jsxs("div",{className:"space-y-3",style:{color:l.colors.text.secondary},children:[i.jsx("p",{className:"text-sm leading-relaxed",children:"We handle the entire implementation. Whether you need us to set up existing tools or build custom solutions from scratch, we deliver working systems on day one."}),i.jsx("p",{className:"text-sm leading-relaxed",children:"Your team gets training, integration with your existing systems, and ongoing support. No guesswork. Just tools that work."})]})]})]}),i.jsx("div",{className:"p-6 rounded-lg",style:{backgroundColor:`${l.colors.primary.deep}08`,borderTop:`2px solid ${l.colors.primary.electric}`},children:i.jsx("p",{className:"text-center text-sm leading-relaxed",style:{color:l.colors.text.secondary},children:i.jsx("span",{style:{color:l.colors.primary.deep,fontWeight:"600"},children:"Strategy + Execution = Results."})})})]})}),i.jsxs("section",{className:"mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up",style:{animationDelay:"0.5s"},children:[i.jsxs("div",{className:"mb-12",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4",style:{backgroundColor:`${l.colors.accent.cyan}10`},children:[i.jsx(xn,{size:14,style:{color:l.colors.accent.cyan}}),i.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider",style:{color:l.colors.accent.cyan},children:"Implementation Examples (Just a few of many possibilities)"})]}),i.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-2",style:{letterSpacing:"-0.03em",color:l.colors.text.primary},children:"AI Tools We Build or Set Up"}),i.jsx("p",{style:{color:l.colors.text.secondary},children:"Custom solutions tailored to your exact business needs. Explore these examples by using the navigation arrows."})]}),i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e,e+1].map(r=>{if(r>=An.length)return null;const a=An[r],c=a.icon;return i.jsxs("div",{className:`p-8 rounded-xl border backdrop-blur-sm transition-all ${s}`,style:{borderColor:l.colors.accent.cyan,backgroundColor:`${l.colors.accent.cyan}05`,boxShadow:l.shadows.subtle},children:[i.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center mb-4",style:{background:`linear-gradient(135deg, ${l.colors.primary.deep} 0%, ${l.colors.primary.electric} 100%)`},children:i.jsx(c,{size:24,style:{color:"white"}})}),i.jsx("h3",{className:"text-lg font-bold mb-3",style:{color:l.colors.text.primary},children:a.title}),i.jsx("p",{className:"text-sm leading-relaxed",style:{color:l.colors.text.secondary},children:a.description})]},r)})}),i.jsxs("div",{className:"flex items-center justify-between mt-8",children:[i.jsx("button",{onClick:o,className:"p-2 rounded-full transition-all",style:{color:l.colors.accent.cyan,backgroundColor:`${l.colors.accent.cyan}10`},"aria-label":"Previous examples",children:i.jsx(Qf,{size:24})}),i.jsx("div",{className:"flex gap-2",children:Array.from({length:Math.ceil(An.length/2)}).map((r,a)=>i.jsx("button",{onClick:()=>t(a*2),className:"w-2 h-2 rounded-full transition-all",style:{backgroundColor:e===a*2?l.colors.accent.cyan:`${l.colors.accent.cyan}40`},"aria-label":`Go to slide ${a+1}`},a))}),i.jsx("button",{onClick:n,className:"p-2 rounded-full transition-all",style:{color:l.colors.accent.cyan,backgroundColor:`${l.colors.accent.cyan}10`},"aria-label":"Next examples",children:i.jsx(Xn,{size:24})})]})]})]}),i.jsx("section",{className:"mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up",style:{animationDelay:"0.6s"},children:i.jsxs("div",{className:"p-8 sm:p-12 lg:p-16 rounded-2xl border-2 backdrop-blur-sm",style:{borderColor:`${l.colors.primary.electric}40`,background:`linear-gradient(135deg, ${l.colors.accent.cyan}08 0%, ${l.colors.background.card} 100%)`,boxShadow:l.shadows.large},children:[i.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-12",style:{letterSpacing:"-0.03em",color:l.colors.text.primary},children:"How We Work"}),i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"flex gap-6",children:[i.jsx("div",{className:"flex-shrink-0",children:i.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-white font-bold",style:{background:`linear-gradient(135deg, ${l.colors.primary.deep} 0%, ${l.colors.primary.electric} 100%)`},children:"1"})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-lg font-bold mb-2",style:{color:l.colors.text.primary},children:"Understand Your Needs"}),i.jsx("p",{style:{color:l.colors.text.secondary},children:"We dive deep into your workflows, systems, and goals. What tools will create the most impact? How should they integrate?"})]})]}),i.jsxs("div",{className:"flex gap-6",children:[i.jsx("div",{className:"flex-shrink-0",children:i.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-white font-bold",style:{background:`linear-gradient(135deg, ${l.colors.primary.deep} 0%, ${l.colors.primary.electric} 100%)`},children:"2"})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-lg font-bold mb-2",style:{color:l.colors.text.primary},children:"Build or Configure"}),i.jsx("p",{style:{color:l.colors.text.secondary},children:"We either set up existing tools or build custom solutions from scratch. Everything is tailored to your business, not the other way around."})]})]}),i.jsxs("div",{className:"flex gap-6",children:[i.jsx("div",{className:"flex-shrink-0",children:i.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-white font-bold",style:{background:`linear-gradient(135deg, ${l.colors.primary.deep} 0%, ${l.colors.primary.electric} 100%)`},children:"3"})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-lg font-bold mb-2",style:{color:l.colors.text.primary},children:"Train and Deploy"}),i.jsx("p",{style:{color:l.colors.text.secondary},children:"Your team gets trained. Systems are fully integrated. Everything goes live with your team ready to use it."})]})]}),i.jsxs("div",{className:"flex gap-6",children:[i.jsx("div",{className:"flex-shrink-0",children:i.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-white font-bold",style:{background:`linear-gradient(135deg, ${l.colors.primary.deep} 0%, ${l.colors.primary.electric} 100%)`},children:"4"})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-lg font-bold mb-2",style:{color:l.colors.text.primary},children:"Optimize and Support"}),i.jsx("p",{style:{color:l.colors.text.secondary},children:"We monitor performance, gather feedback, and continuously improve. Your tools get better over time."})]})]})]})]})}),i.jsx("section",{className:"mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up",style:{animationDelay:"0.7s"},children:i.jsxs("div",{className:"p-8 sm:p-12 lg:p-16 rounded-2xl border-2 text-center",style:{borderColor:l.colors.accent.coral,background:`linear-gradient(135deg, ${l.colors.accent.coral}08 0%, ${l.colors.background.card} 100%)`,boxShadow:l.shadows.large},children:[i.jsx("h2",{className:"text-2xl sm:text-3xl lg:text-4xl font-bold mb-4",style:{letterSpacing:"-0.03em",color:l.colors.text.primary},children:"Ready to deploy AI that actually works?"}),i.jsx("p",{className:"text-lg max-w-2xl mx-auto mb-8 leading-relaxed",style:{color:l.colors.text.secondary},children:"Tell us what you need. We'll build or set up the tools. Your team will be using them within weeks."}),i.jsxs(G,{to:"/login",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg",style:{background:`linear-gradient(135deg, ${l.colors.accent.coral} 0%, ${l.colors.primary.electric} 100%)`,color:"white",boxShadow:l.shadows.medium},children:["Start Your Implementation ",i.jsx(mt,{size:20})]})]})})]}),i.jsx("style",{children:`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-down,
          .animate-fade-in,
          .animate-fade-in-up {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `})]})}const Pi=[{id:1,title:"Answering the Same Customer Questions Over and Over",problem:`Your team spends hours every day answering "Where's my order?", "What are your hours?", "How do I reset my password?" via email and chat`,solution:"A chatbot answers common questions 24/7 so your team only handles the complicated stuff",tools:["Intercom Fin","Zendesk Answer Bot","HubSpot AI Chatbot","Tidio AI"],howItWorks:"Connect the bot to your website chat, give it your FAQs, turn it on. When someone asks a common question, the bot answers instantly",costRange:"£30–£150/month",timeToSetup:"1–3 hours",whatYouNeed:"Website with chat widget, list of your most common questions and answers",difficulty:"Medium",businessSize:"2-50 employees",department:"Customer Service",source:"Pre-made service"},{id:2,title:"Manually Typing Emails and Notes into Your CRM",problem:"Your sales team wastes hours copying emails, call notes, and meeting details into the CRM by hand",solution:"Your CRM automatically saves emails, logs calls, and fills in contact details without anyone typing",tools:["HubSpot with AI","Pipedrive AI Sales Assistant","Zoho CRM with Zia"],howItWorks:"Connect your email and calendar to your CRM, turn on the AI features. It watches your emails and automatically updates customer records",costRange:"£40–£200/month",timeToSetup:"1–2 hours",whatYouNeed:"A CRM account, company email accounts",difficulty:"Easy",businessSize:"2-50 employees",department:"Sales",source:"Pre-made service"},{id:3,title:"Leads Waiting Hours or Days for a Response",problem:"When someone fills out your contact form or sends an inquiry, they wait too long for a reply and lose interest",solution:"AI instantly replies to new leads, asks qualifying questions, and routes hot leads to your sales team immediately",tools:["Drift","Intercom","HubSpot AI chat","ManyChat"],howItWorks:"Connect to your website forms, set up qualification questions (budget, timeline, location), AI chats with leads and tells you which ones are ready to buy",costRange:"£30–£200/month",timeToSetup:"2–3 hours",whatYouNeed:"Website, contact forms, list of questions to qualify good leads (like budget range, location, company size)",difficulty:"Medium",businessSize:"2-50 employees",department:"Sales / Marketing",source:"Pre-made service"},{id:4,title:"Endless Back-and-Forth to Schedule Meetings",problem:"Your team emails or calls people multiple times just to find a time that works for a meeting",solution:"Customers book themselves into your available time slots, no back-and-forth needed",tools:["Calendly","Cal.com","Microsoft 365 scheduling","Motion"],howItWorks:"Connect your calendar, set your available hours, send people a booking link. They pick a time that works, it goes straight into your calendar",costRange:"£10–£40/month per person",timeToSetup:"30–90 minutes",whatYouNeed:'Google or Microsoft calendar, list of meeting types you offer (like "30-min consultation", "sales demo")',difficulty:"Easy",businessSize:"Solo - 50 employees",department:"Sales / Admin",source:"Pre-made service"},{id:5,title:"Forgetting to Follow Up with Customers",problem:"Leads and customers slip through the cracks because nobody follows up consistently",solution:"Automated email sequences that send the right message at the right time based on what customers do",tools:["HubSpot AI campaigns","Mailchimp","ActiveCampaign","Klaviyo AI"],howItWorks:'Create email templates, set up triggers (like "3 days after they download our guide, send this email"), AI sends them automatically',costRange:"£30–£250/month",timeToSetup:"2–3 hours",whatYouNeed:"Email list, customer journey map (what happens from first contact to sale), email templates",difficulty:"Medium",businessSize:"2-50 employees",department:"Sales / Marketing",source:"Pre-made service"},{id:6,title:"Writing Proposals and Emails Takes Forever",problem:"Your team spends too long writing proposals, quotes, emails, and reports from scratch every time",solution:"AI writes the first draft for you in seconds, you just edit and send",tools:["ChatGPT","Claude","Microsoft Copilot","Notion AI","Grammarly Business"],howItWorks:'Tell the AI what you need ("write a proposal for a new client in the construction industry"), it creates a draft, you polish it',costRange:"£0–£40/month",timeToSetup:"30 minutes to learn, then instant",whatYouNeed:"Examples of past documents you've written, your company's tone of voice",difficulty:"Easy",businessSize:"Solo - 50 employees",department:"All",source:"Prompt-based"},{id:7,title:"No One Remembers What Was Decided in Meetings",problem:"Meetings end without clear notes or action items, so decisions and tasks get forgotten",solution:"AI joins your meetings, records everything, creates a summary with action items automatically",tools:["Otter.ai","Fathom","Fireflies.ai","Zoom AI Companion","Microsoft Teams with Copilot"],howItWorks:"Connect the tool to your calendar, it auto-joins your Zoom/Teams meetings, records and transcribes, emails you a summary with action items after",costRange:"£10–£40/month per person",timeToSetup:"30–60 minutes",whatYouNeed:"Zoom/Teams/Google Meet account, permission to record meetings",difficulty:"Easy",businessSize:"2-50 employees",department:"All",source:"Pre-made service"},{id:8,title:"Can't Find Documents When You Need Them",problem:"Your team wastes time searching for policies, procedures, and past documents buried in folders",solution:"AI search that lets you ask questions and finds the answer in your documents instantly",tools:["Notion AI","Confluence with AI","Guru","Microsoft Copilot over SharePoint"],howItWorks:`Connect your Google Drive/SharePoint/Notion, the AI reads all your documents, your team asks questions like "What's our refund policy?" and gets instant answers`,costRange:"£20–£40/month per person",timeToSetup:"1–3 hours",whatYouNeed:"All your documents stored in one place (Google Drive, SharePoint, Notion), basic folder organization",difficulty:"Medium",businessSize:"2-50 employees",department:"All",source:"Knowledge base + LLM"},{id:9,title:"Keeping Up with Social Media Posts",problem:"Your marketing team struggles to create and post content regularly across Instagram, Facebook, LinkedIn",solution:"AI generates captions and schedules posts across all platforms automatically",tools:["Buffer with AI","Hootsuite OwlyWriter","Canva Magic Media","Later AI"],howItWorks:"Connect your social accounts, give the tool your brand voice and a content calendar, it drafts posts and schedules them automatically",costRange:"£15–£100/month",timeToSetup:"1–2 hours",whatYouNeed:"Brand guidelines, existing content you can repurpose (blog posts, photos)",difficulty:"Easy",businessSize:"Solo - 50 employees",department:"Marketing",source:"Pre-made service"},{id:10,title:"Typing Invoice Details into Your Accounting System",problem:"Someone manually types information from invoices and receipts into your accounting software",solution:"AI reads invoices automatically and enters the data into your system",tools:["Microsoft Power Automate with AI Builder","Rossum","Dext"],howItWorks:"Email or upload invoices to a watched folder, AI extracts vendor name, amount, date, and pushes it into your accounting software",costRange:"£40–£250/month",timeToSetup:"2–3 hours",whatYouNeed:"Sample invoices, access to your accounting software (QuickBooks, Xero, etc.), invoices that are reasonably consistent in format",difficulty:"Medium",businessSize:"2-50 employees",department:"Finance / Admin",source:"Pre-made service"},{id:11,title:"Copy-Pasting Data Between Different Apps",problem:"Your team copies information from one app and pastes it into another over and over (like new leads from forms into your CRM)",solution:"Automated workflows that move data between apps automatically",tools:["Zapier","Make","Bardeen AI","Microsoft Power Automate"],howItWorks:'Pick a trigger ("new form submission"), pick an action ("create contact in CRM"), the tool does it automatically every time',costRange:"£20–£150/month",timeToSetup:"1–3 hours",whatYouNeed:"Access to the apps you want to connect, clear description of what you're copying and where",difficulty:"Medium",businessSize:"2-50 employees",department:"All",source:"DIY automation"},{id:12,title:"Different Answers on Email, Chat, and Phone",problem:"Customers get conflicting information depending on whether they email, chat, or call you",solution:"One system that handles all channels and uses AI to keep answers consistent",tools:["Intercom","Zendesk Suite","Freshdesk with Freddy AI","Glassix"],howItWorks:"Connect email, chat, phone, and social media into one inbox, create a shared FAQ database, AI suggests consistent answers across all channels",costRange:"£40–£200/month",timeToSetup:"2–3 hours",whatYouNeed:"Access to all your communication channels, your FAQs and policies in one place",difficulty:"Medium",businessSize:"2-50 employees",department:"Customer Service",source:"Pre-made service"},{id:13,title:"Wasting Time on Bad Leads",problem:"Your sales team treats every lead the same and wastes time calling people who will never buy",solution:"AI scores each lead and tells you which ones are most likely to buy",tools:["HubSpot Predictive Lead Scoring","Salesforce Einstein","Zoho Zia"],howItWorks:'Turn on lead scoring in your CRM, tell it what a "good" lead looks like (company size, industry, behavior), it automatically ranks new leads 1-10',costRange:"£70–£250/month",timeToSetup:"1–2 hours",whatYouNeed:"CRM with past lead data, clear idea of what makes someone a good customer",difficulty:"Medium",businessSize:"10-50 employees",department:"Sales",source:"Pre-made service"},{id:14,title:"Drowning in Job Applications",problem:"Hiring managers spend hours reading CVs trying to find the best candidates",solution:"AI reads CVs and ranks applicants based on your requirements",tools:["Workable with AI","Greenhouse","Breezy HR","LinkedIn Talent Insights"],howItWorks:"Post your job, define must-have skills, AI reads all the CVs and shows you the top matches first",costRange:"£100–£400/month",timeToSetup:"2–3 hours",whatYouNeed:"Job description, list of required vs nice-to-have skills",difficulty:"Medium",businessSize:"10-50 employees",department:"HR",source:"Pre-made service"},{id:15,title:"Running Out of Stock or Having Too Much",problem:"You either run out of popular items or you're stuck with too much inventory that doesn't sell",solution:"AI predicts what you'll need and when to reorder",tools:["QuickBooks Commerce","Katana MRP","Netstock","Unleashed"],howItWorks:"Connect your sales data, the AI spots patterns and suggests when and how much to reorder",costRange:"£100–£400/month",timeToSetup:"2–3 hours",whatYouNeed:"Past sales data, inventory records, supplier lead times",difficulty:"Medium",businessSize:"10-50 employees",department:"Operations",source:"Pre-made service"},{id:16,title:"Inbox Overwhelm from Routine Emails",problem:"Staff spend 1–3 hours daily triaging and replying to routine emails (FAQs, simple updates, scheduling), constantly context-switching and missing important messages",solution:"An AI email assistant drafts replies, categorizes incoming mail, and flags important messages so staff only review and send",tools:["Microsoft 365 Copilot (Outlook)","Google Gemini for Gmail"],howItWorks:'Enable "draft reply" and "summarize thread" features in your existing email, create a few saved prompts, spend 30 minutes training it by editing drafts instead of writing from scratch',costRange:"£10–£30/user/month",timeToSetup:"30–60 minutes",whatYouNeed:"Microsoft 365 or Google Workspace business account, basic email templates or examples of good replies",difficulty:"Easy",businessSize:"2-50 employees",department:"All",source:"Pre-made service"},{id:17,title:"Constant Searching for Internal Information",problem:"Staff repeatedly hunt for procedures, prices, templates, and policies across folders, chats, and emails",solution:"An AI knowledge assistant lets staff ask questions in plain English and instantly pulls answers from central docs",tools:["Claude Projects","Custom GPT","Notion AI"],howItWorks:"Gather your key SOPs, policies, and templates into one folder, upload to Claude Projects or Custom GPT, share access with team. Staff ask questions instead of searching files",costRange:"£20/month",timeToSetup:"1–2 hours",whatYouNeed:"Digital versions of your SOPs/policies, basic organization by topic",difficulty:"Medium",businessSize:"2-50 employees",department:"All",source:"Knowledge base + LLM"},{id:18,title:"Weekly Reporting Takes Hours",problem:"Managers pull numbers from several tools and rebuild the same spreadsheets and slide decks each week",solution:"Auto-refresh dashboards plus AI to summarize and explain the numbers",tools:["Google Looker Studio","Microsoft Power BI with built-in AI summaries"],howItWorks:'Connect your main data sources (sheets, CRM, project tool), build one basic dashboard using templates, turn on AI "insights" to generate weekly summary',costRange:"£0–£30/month",timeToSetup:"2–3 hours",whatYouNeed:"Data in spreadsheets or cloud tools, clear list of key metrics",difficulty:"Medium",businessSize:"10-50 employees",department:"Management",source:"Pre-made service"},{id:19,title:"Manual Invoice Creation and Reminders",problem:"Admin or owners build invoices by hand and chase late payers manually, creating delays and errors",solution:"Accounting software with AI-assisted invoicing, automatic reminders, and simple data extraction",tools:["Xero","QuickBooks","Sage with AI features"],howItWorks:"Import your client list, set up standard invoice templates, enable auto-reminders for overdue invoices. AI helps extract line items from quotes",costRange:"£15–£50/month",timeToSetup:"2–3 hours",whatYouNeed:"Client data, list of products/services, bank details for payment",difficulty:"Medium",businessSize:"Solo - 50 employees",department:"Finance / Admin",source:"Pre-made service"},{id:20,title:"Expense Receipt Chaos",problem:"Receipts are emailed, photographed, or stuffed in drawers, and someone spends hours at month-end sorting and entering them",solution:"AI receipt scanner categorizes and exports expenses automatically",tools:["Dext","Expensify","Pleo with AI classification"],howItWorks:"Staff snap receipts with mobile app or forward emails, AI reads vendor/date/amount and categorizes them. Export to accounting system with one click",costRange:"£10–£25/user/month",timeToSetup:"1–2 hours",whatYouNeed:"Accounting system and basic expense categories",difficulty:"Easy",businessSize:"2-50 employees",department:"Finance / Admin",source:"Pre-made service"},{id:21,title:"Onboarding New Hires is Slow and Repetitive",problem:"Managers repeatedly explain the same things to every new hire and answer the same questions for weeks",solution:"AI-assisted onboarding hub that answers questions and walks new staff through key steps",tools:["Custom GPT","Claude Project trained on your onboarding docs","Notion AI"],howItWorks:"Gather onboarding materials (policies, how-to guides), upload to AI tool, share access with new hires. They ask questions to the AI before asking managers",costRange:"£20/month",timeToSetup:"2–3 hours",whatYouNeed:"Existing onboarding documents or emails",difficulty:"Medium",businessSize:"10-50 employees",department:"HR",source:"Knowledge base + LLM"},{id:22,title:"Complaints and Issues Buried in Email Threads",problem:"Support requests are scattered across inboxes without structure, leading to missed or delayed resolutions",solution:"AI-assisted ticketing that automatically categorizes and prioritizes incoming messages",tools:["Freshdesk","Zendesk","HubSpot Service Hub with AI routing"],howItWorks:"Forward support emails into the helpdesk, AI tags and prioritizes by topic and urgency, sets basic routing rules. Agents work from shared queue instead of individual inboxes",costRange:"£15–£70/agent/month",timeToSetup:"2–3 hours",whatYouNeed:"Shared support email address, agreement on categories and response times",difficulty:"Medium",businessSize:"2-50 employees",department:"Customer Service",source:"Pre-made service"},{id:23,title:"Ad-hoc Collection of Customer Feedback",problem:"Feedback is captured in random emails and conversations, and no one sees the patterns",solution:"Automated AI survey analysis that summarizes themes and sentiment",tools:["Typeform","SurveyMonkey with AI insights","ChatGPT/Claude for analysis"],howItWorks:'Send simple NPS/CSAT survey after purchase, export responses to spreadsheet. Paste into AI with prompt: "Summarize main complaints and suggestions from this data"',costRange:"£20–£70/month",timeToSetup:"1–2 hours",whatYouNeed:"Customer contact list, 3–5 clear survey questions",difficulty:"Easy",businessSize:"2-50 employees",department:"Customer Service / Product",source:"Pre-made service + Prompt"},{id:24,title:"Last-Minute Manual Social Media Posting",problem:"Owners or staff spend evenings writing and posting content manually without a plan",solution:"AI content generator plus scheduler to create and queue posts in batches",tools:["Buffer","Hootsuite","Metricool with AI","ChatGPT/Claude + native schedulers"],howItWorks:'Weekly, use prompt "Create 10 LinkedIn posts for [audience] about [topic] in our tone," edit best ones, upload to scheduler. Set times to auto-post',costRange:"£10–£50/month",timeToSetup:"1–2 hours",whatYouNeed:"Brand guidelines or examples, access to social accounts",difficulty:"Easy",businessSize:"Solo - 50 employees",department:"Marketing",source:"Prompt + Pre-made service"},{id:25,title:"Out-of-Date Website Content and Listings",problem:"Opening hours, prices, and service descriptions are obsolete because updating content is a chore",solution:"AI website copy assistant and central listing manager",tools:["Wix/Shopify with built-in AI editor","ChatGPT/Claude for copy generation"],howItWorks:"Copy current text into AI, ask it to rewrite with updated info, paste into website editor. Schedule quarterly 1-hour session to update everything",costRange:"£0–£20/month",timeToSetup:"1–3 hours",whatYouNeed:"CMS login, list of updated facts (prices, hours, services)",difficulty:"Easy",businessSize:"Solo - 50 employees",department:"Marketing",source:"Prompt-based"},{id:26,title:"Leads Scattered Across Channels",problem:"Prospects come in via forms, emails, social DMs, and calls, but there's no single view, leading to missed follow-ups",solution:"Simple CRM with AI-assisted capture and de-duplication",tools:["HubSpot Free CRM with AI features","Pipedrive with basic automations"],howItWorks:"Connect forms and emails to CRM, use browser extension to capture contacts from LinkedIn/inbox, enable AI de-dupe and enrichment. Train team to log all leads in one place",costRange:"£0–£60/month",timeToSetup:"2–3 hours",whatYouNeed:"Existing contact lists, access to forms and shared inboxes",difficulty:"Medium",businessSize:"2-50 employees",department:"Sales",source:"Pre-made service"},{id:27,title:"Fragmented Project/Job Information",problem:"Key details for jobs/projects live across email and chat so people miss context and re-ask questions",solution:"AI project hub that pulls threads into one place and summarizes them",tools:["ClickUp with AI","Asana with AI","Notion AI as a project wiki"],howItWorks:"For each project, create one central page, paste key email threads into it, use AI to summarize latest state and decisions. Team adds updates there, run weekly AI summaries",costRange:"£10–£25/user/month",timeToSetup:"1–2 hours",whatYouNeed:"Project list, access to email threads and key docs",difficulty:"Medium",businessSize:"10-50 employees",department:"Operations / Project Management",source:"Knowledge base + LLM"},{id:28,title:"Unclear Task Priorities and Status",problem:"Managers assign work via chats and conversations, so people are unsure what's most important or what's done",solution:"AI-assisted task management that turns messages into clear tasks and summaries",tools:["ClickUp AI","Motion","Microsoft Planner with Copilot"],howItWorks:'Use AI to convert meeting notes or message threads into task lists with due dates. Run AI "summarize this workspace" for quick status overview at check-ins',costRange:"£10–£25/user/month",timeToSetup:"1–2 hours",whatYouNeed:"Basic task list, recurring meetings where work is discussed",difficulty:"Medium",businessSize:"10-50 employees",department:"All",source:"Pre-made service"},{id:29,title:"Manual Data Entry from PDFs and Paper",problem:"Staff retype data from forms, invoices, or PDFs into systems, wasting hours",solution:"AI document extractor that turns scans into structured data",tools:["Microsoft 365 OCR + Copilot","Google Drive OCR + Gemini","Docuf.AI"],howItWorks:"Upload documents to watched folder, AI extracts key fields (names, amounts, dates), export to CSV or directly into connected app. Spot-check a few records and tweak field mapping",costRange:"£20–£100/month",timeToSetup:"1–2 hours",whatYouNeed:"Sample documents, clarity on which fields you need",difficulty:"Medium",businessSize:"2-50 employees",department:"Admin / Finance",source:"Pre-made service"},{id:30,title:"No Up-to-Date Management Dashboards",problem:"Owners lack a simple, current view of key numbers and waste time pulling ad-hoc reports",solution:'AI-aided "management cockpit" built once and auto-updated',tools:["Google Sheets + Gemini","Excel + Copilot"],howItWorks:'Create single spreadsheet with core metrics, use AI to build charts and generate summary text like "This week vs last week" automatically. Reuse same workbook, just refresh data',costRange:"£0 (included in existing subscriptions)",timeToSetup:"1–2 hours",whatYouNeed:"Access to data sources, list of must-have KPIs",difficulty:"Medium",businessSize:"Solo - 50 employees",department:"Management",source:"Prompt-based"},{id:31,title:"Outdated Training Materials and SOPs",problem:"Processes change but SOPs stay in old PDFs, so staff rely on memory and mistakes repeat",solution:"AI helps rewrite and update SOPs quickly when processes change",tools:["ChatGPT","Claude","Notion AI"],howItWorks:'Paste existing SOP into AI with instructions like "Update this to match the new 3-step process," edit the output. Replace old PDFs with live docs in central workspace',costRange:"£0–£20/month",timeToSetup:"30–60 minutes per process",whatYouNeed:"Existing SOPs and clarity on new process steps",difficulty:"Easy",businessSize:"2-50 employees",department:"Operations / HR",source:"Prompt-based"},{id:32,title:"Multi-Channel Internal Communication Chaos",problem:"Important messages are scattered across email, WhatsApp, and various apps, and people miss key updates",solution:"Central chat platform with AI summarization of channels and threads",tools:["Microsoft Teams with Copilot","Slack with AI"],howItWorks:"Move team comms into one platform, organize channels by team/project, use AI to summarize missed messages at start of each day",costRange:"£6–£20/user/month",timeToSetup:"2–3 hours",whatYouNeed:"Existing Microsoft or Slack accounts, basic channel structure",difficulty:"Medium",businessSize:"10-50 employees",department:"All",source:"Pre-made service"},{id:33,title:"Owner Constantly Interrupted with Small Questions",problem:'The owner serves as the "walking wiki," answering the same basic questions all day',solution:'AI "company FAQ" assistant that staff consult first',tools:["Custom GPT","Claude Project trained on internal docs","Notion AI Q&A"],howItWorks:'Upload FAQs, SOPs, and policies, configure access for staff, remind people to "Ask the assistant before asking me." Review AI logs monthly to fill gaps',costRange:"£20/month",timeToSetup:"2–3 hours",whatYouNeed:"Written answers to common questions, basic structure of categories",difficulty:"Medium",businessSize:"2-50 employees",department:"All",source:"Knowledge base + LLM"},{id:34,title:"Simple IT and Access Requests",problem:"Staff ping managers for routine issues like password resets, basic how-tos, and standard access requests",solution:"AI helpdesk assistant that answers common IT questions and routes true issues",tools:["Custom GPT/Claude Project with IT FAQs","Microsoft Copilot","Google Gemini"],howItWorks:"Document answers to recurring IT questions, feed into AI workspace, direct staff to ask there first. For unresolved issues, have assistant create ticket or prompt staff to email IT",costRange:"£0–£20/month",timeToSetup:"2 hours",whatYouNeed:"List of top 20–30 IT questions and answers",difficulty:"Easy",businessSize:"10-50 employees",department:"IT / Admin",source:"Knowledge base + LLM"},{id:35,title:"Manual Contract and Proposal Drafting",problem:"Staff copy old contracts or proposals and edit them by hand, risking errors and inconsistencies",solution:"AI-assisted templates that generate first-draft contracts and proposals from key inputs",tools:["PandaDoc with AI","ChatGPT/Claude with your standard templates"],howItWorks:"Store your preferred template, define variables (client name, fees, scope). When needed, provide key details to AI and let it generate draft. Review and adjust before sending",costRange:"£20–£80/month",timeToSetup:"2–3 hours",whatYouNeed:"Lawyer-approved base contract and standard proposal structure",difficulty:"Medium",businessSize:"2-50 employees",department:"Sales / Legal",source:"Pre-made service"},{id:36,title:"Marketing Performance Scattered and Unclear",problem:"Ad platforms, email tools, and web analytics all show different numbers and marketers spend hours reconciling them",solution:"AI summarizes and compares channel performance from simple combined table",tools:["Google Sheets + Gemini","Excel + Copilot"],howItWorks:"Export core stats from each platform (spend, clicks, leads, sales), paste into common table. Ask AI to highlight best/worst channels and trends, plus suggest budget shifts. Reuse same file monthly",costRange:"£0 (included in AI productivity tools)",timeToSetup:"1–2 hours",whatYouNeed:"Ability to export metrics, defined KPIs",difficulty:"Easy",businessSize:"2-50 employees",department:"Marketing",source:"Prompt-based"},{id:37,title:"Slow Quote and Proposal Creation by Sales",problem:"Sales reps rebuild quotes and proposals from scratch, leading to delays and inconsistent pricing",solution:"Guided AI quote/proposal builder using standard structures and pricing rules",tools:["HubSpot Quotes with AI","PandaDoc","ChatGPT/Claude with master template"],howItWorks:"Define standard sections (scope, deliverables, pricing options), feed into tool. AI generates draft based on 5-10 inputs from rep (industry, package, timeline). Reps edit and send",costRange:"£20–£80/month",timeToSetup:"2–3 hours",whatYouNeed:"Clear list of services, standard price ranges, approved language",difficulty:"Medium",businessSize:"2-50 employees",department:"Sales",source:"Pre-made service"},{id:38,title:"No Structured Re-Engagement for Lapsed Customers",problem:"Staff occasionally remember to email old customers, but there's no system, so repeat revenue is missed",solution:"AI-drafted re-engagement campaigns triggered from simple lists",tools:["MailerLite","Mailchimp","HubSpot Marketing with AI email generator"],howItWorks:"Pull list of customers who haven't bought in 6-12 months, ask AI to draft 3-email reactivation sequence, schedule in email platform. Test small, then repeat quarterly",costRange:"£10–£50/month",timeToSetup:"2 hours",whatYouNeed:"Customer email list with last purchase date, clear offer or reason to return",difficulty:"Easy",businessSize:"2-50 employees",department:"Marketing / Sales",source:"Prompt + Pre-made service"},{id:39,title:"Seasonal Workload Spikes Cause Chaos",problem:"Busy periods lead to rushed planning and scrambled communications",solution:"AI helps create repeatable seasonal playbooks and timelines",tools:["ChatGPT/Claude for planning","ClickUp AI"],howItWorks:`Prompt AI: "Create detailed 6-week plan for our [season] campaign based on last year's tasks," port tasks into project tool. Save as template and reuse next season`,costRange:"£0–£30/month",timeToSetup:"2–3 hours",whatYouNeed:"Rough notes of what you did last year, list of typical tasks",difficulty:"Easy",businessSize:"2-50 employees",department:"Operations / Marketing",source:"Prompt-based"},{id:40,title:"Physical Mail and Paper Documents Consume Time",problem:"Staff manually handle and file incoming mail and paper contracts",solution:"Scan-to-cloud with AI tagging and search",tools:["Adobe Scan","Microsoft Lens","Google Drive/OneDrive with AI search"],howItWorks:"Scan all incoming mail into shared folder, OCR extracts text automatically. Use AI search to find documents instead of physical filing",costRange:"£0–£20/month",timeToSetup:"1–2 hours",whatYouNeed:"Smartphone or scanner, standard folder structure",difficulty:"Easy",businessSize:"2-50 employees",department:"Admin",source:"Pre-made service"},{id:41,title:"No Central Log of Recurring Operational Issues",problem:"Teams keep solving the same problems without capturing root causes and fixes",solution:'AI-summarized "issue log" that clusters problems and suggests improvements',tools:["Shared spreadsheet + ChatGPT/Claude/Gemini"],howItWorks:"Staff log issues in simple form (date, description, impact). Monthly, paste entries into AI to group issues by theme and summarize root causes. Use output to decide 1-2 process fixes",costRange:"£0–£20/month",timeToSetup:"1–2 hours",whatYouNeed:"Agreement that staff will log issues, one owner to run monthly AI summary",difficulty:"Easy",businessSize:"10-50 employees",department:"Operations",source:"Prompt-based"},{id:42,title:"Scope Creep and Untracked Free Work in Projects",problem:"Extra tasks and client requests are agreed in email but not tracked, eroding profit",solution:"AI monitors project communication for new requests and flags potential scope changes",tools:["Gmail/Outlook + Copilot/Gemini","ClickUp AI"],howItWorks:'Periodically paste recent client emails into AI prompt: "List all new requests beyond original scope." Add them as tasks tagged "scope change" in project tool. Review weekly',costRange:"£0–£30/month",timeToSetup:"1–2 hours",whatYouNeed:"Access to client comms, baseline scope statements",difficulty:"Medium",businessSize:"2-50 employees",department:"Project Management / Operations",source:"Prompt-based"},{id:43,title:"Staff Don't Know How to Best Use Existing Tools",problem:"Teams under-use CRM, project tools, or spreadsheets because they forget features or workflows",solution:'AI "tool coach" that explains features and builds step-by-step instructions on demand',tools:["ChatGPT","Claude"],howItWorks:"Encourage staff to ask AI how-to questions about your tools before raising tickets. Save best answers into shared playbook",costRange:"£0–£20/month",timeToSetup:"1 hour to introduce",whatYouNeed:"List of core tools and basic admin access",difficulty:"Easy",businessSize:"2-50 employees",department:"All",source:"Prompt-based"},{id:44,title:"Writing Professional Emails from Scratch",problem:"Staff spend too long writing and rewriting emails to get the tone right",solution:"Copy-paste prompt that rewrites any email in the perfect tone",tools:["ChatGPT","Claude (free versions work)"],howItWorks:'Use prompt: "Rewrite this email to be [professional/friendly/direct]. Keep key points but improve clarity and tone: [paste draft]." Copy result, make minor edits, send',costRange:"£0 (free AI works)",timeToSetup:"30 seconds per email",whatYouNeed:"Nothing — just free AI access",difficulty:"Easy",businessSize:"Solo - 50 employees",department:"All",source:"Prompt-based"},{id:45,title:"Analyzing Data in Spreadsheets Takes Hours",problem:"Managers manually scan spreadsheets trying to spot trends, errors, or outliers",solution:"Paste spreadsheet into AI and ask it to analyze",tools:["ChatGPT","Claude (free versions work)"],howItWorks:'Export data to CSV or copy from spreadsheet, paste into AI with prompt: "Analyze this data and tell me: top trends, any anomalies, what I should focus on." Get instant insights',costRange:"£0 (free AI works)",timeToSetup:"2 minutes per analysis",whatYouNeed:"Basic spreadsheet data",difficulty:"Easy",businessSize:"Solo - 50 employees",department:"All",source:"Prompt-based"},{id:46,title:"Creating Job Descriptions from Scratch",problem:"HR or managers spend hours writing job descriptions for every new role",solution:"AI generates complete job description from basic inputs",tools:["ChatGPT","Claude (free versions work)"],howItWorks:'Use prompt: "Create a job description for [role title] at a [company type]. Requirements: [list 3-5 key requirements]. Include responsibilities, qualifications, and benefits section." Edit and post',costRange:"£0 (free AI works)",timeToSetup:"5 minutes per job description",whatYouNeed:"Basic idea of role requirements",difficulty:"Easy",businessSize:"Solo - 50 employees",department:"HR",source:"Prompt-based"},{id:47,title:"Meeting Agendas Are Rushed or Missing",problem:"Meetings start without clear agenda, wasting time and missing key topics",solution:"AI generates meeting agenda from rough notes or previous meeting",tools:["ChatGPT","Claude (free versions work)"],howItWorks:'Use prompt: "Create a meeting agenda for [meeting purpose]. Topics to cover: [list 3-5 topics]. Include time allocations and desired outcomes." Send to attendees before meeting',costRange:"£0 (free AI works)",timeToSetup:"2 minutes per agenda",whatYouNeed:"Basic list of topics to discuss",difficulty:"Easy",businessSize:"2-50 employees",department:"All",source:"Prompt-based"},{id:48,title:"Long Documents Need Summarizing",problem:"Staff receive long reports, contracts, or articles but don't have time to read everything",solution:"AI creates concise summaries of any long document",tools:["ChatGPT","Claude (free versions work)"],howItWorks:'Upload PDF or paste text into AI with prompt: "Summarize this document in 5 bullet points highlighting the most important information." Review summary instead of full document',costRange:"£0 (free AI works)",timeToSetup:"1 minute per document",whatYouNeed:"Document in text or PDF format",difficulty:"Easy",businessSize:"Solo - 50 employees",department:"All",source:"Prompt-based"},{id:49,title:"Creating Social Captions from Blog Content",problem:"Marketing has blog posts but struggles to repurpose them into social media content",solution:"AI extracts key points and creates social captions from blog posts",tools:["ChatGPT","Claude (free versions work)"],howItWorks:'Paste blog post into AI with prompt: "Create 5 LinkedIn posts and 5 Twitter posts from this blog article. Make them engaging and include relevant hashtags." Edit and schedule',costRange:"£0 (free AI works)",timeToSetup:"3 minutes per blog post",whatYouNeed:"Existing blog content",difficulty:"Easy",businessSize:"Solo - 50 employees",department:"Marketing",source:"Prompt-based"},{id:50,title:"Policy and Procedure Questions Interrupt Work",problem:`Staff constantly ask "What's our policy on X?" interrupting managers and slowing work`,solution:"Upload all policies to AI once, staff query it directly",tools:["Claude Projects","Custom GPT"],howItWorks:"Upload all company policies, procedures, and handbooks to Claude Project or Custom GPT. Share access with team. Staff ask questions and get instant, accurate answers from company docs",costRange:"£20/month",timeToSetup:"2 hours",whatYouNeed:"Company policies and procedures in digital format",difficulty:"Medium",businessSize:"10-50 employees",department:"All",source:"Knowledge base + LLM"},{id:51,title:"Need a Custom Internal Tool But Can't Afford Developer",problem:"You need a simple internal tool (inventory tracker, time logger, resource booking) but hiring a developer costs £5,000–£20,000",solution:"AI builds the entire web app for you in minutes, hosts it live, and you can modify it anytime by just asking",tools:["Bolt.new","Lovable","Replit","v0.dev"],howItWorks:'Describe what you need: "Build me a simple inventory tracker where staff can add/remove items, see current stock, and get alerts when low." AI builds it and gives you a live URL',costRange:"£0–£20/month",timeToSetup:"30 minutes to 2 hours",whatYouNeed:"Clear description of what the tool should do, list of features",difficulty:"Medium",businessSize:"2-50 employees",department:"All",source:"AI-built application"},{id:52,title:"Paying for Expensive SaaS Tools That Almost Fit",problem:"You're paying £100–£300/month for tools that do 80% of what you need but you constantly work around limitations",solution:"Build a custom tool that does exactly what you need, nothing more, nothing less",tools:["Lovable","Bolt.new","Replit"],howItWorks:'List what you actually need. Tell AI: "Build a CRM for tradespeople — just contacts, job history, quotes, and invoices." AI builds it custom',costRange:"£0–£20/month",timeToSetup:"1–3 hours",whatYouNeed:"List of must-have features, examples of current workarounds",difficulty:"Medium",businessSize:"2-50 employees",department:"All",source:"AI-built application"},{id:53,title:"Manual Spreadsheet Processes Cause Errors",problem:"You have complex spreadsheet workflows but staff find them confusing, make errors entering data, or accidentally break formulas",solution:"AI builds a simple web form interface that feeds validated data into your spreadsheet automatically",tools:["Bolt.new","Lovable","Replit"],howItWorks:'Show AI your spreadsheet. Ask: "Build a form interface for staff to enter this data with dropdown menus and validation." AI creates clean web app, staff use the form, data goes to your spreadsheet automatically',costRange:"£0–£20/month",timeToSetup:"1–2 hours",whatYouNeed:"Your existing spreadsheet, field requirements and validation rules",difficulty:"Medium",businessSize:"2-50 employees",department:"Operations / Admin",source:"AI-built application"},{id:54,title:"Need Custom Dashboard But BI Tools Are Too Expensive",problem:"Power BI (£100+/month) and Tableau (£500+/month) are overkill, but you need a simple dashboard showing key metrics",solution:"AI builds a custom dashboard that pulls your data and displays exactly what you need",tools:["Bolt.new","Lovable","Replit"],howItWorks:'Tell AI where your data lives. Describe what to show: "Daily sales chart, top 5 products table, customer count, revenue vs target gauge." AI builds it, you get a URL to check anytime',costRange:"£0–£20/month",timeToSetup:"1–2 hours",whatYouNeed:"Access to data sources, list of metrics to track",difficulty:"Medium",businessSize:"10-50 employees",department:"Management",source:"AI-built application"},{id:55,title:"Customers Keep Calling About Order Status",problem:`Customer service spends hours daily answering "where's my order?" calls and emails because customers have no self-service way to check`,solution:"AI builds a simple customer portal where people log in and see their order status, tracking, invoices",tools:["Bolt.new","Lovable","Replit"],howItWorks:'Describe the customer experience: "Customer enters email and order number, sees order status, estimated delivery, tracking link, and past orders." AI builds the portal',costRange:"£0–£20/month",timeToSetup:"2–3 hours",whatYouNeed:"Access to your order data, basic customer authentication plan",difficulty:"Medium",businessSize:"2-50 employees",department:"Customer Service / Operations",source:"AI-built application"},{id:56,title:"Quote/Price Calculators Are Manual and Slow",problem:"Customers request quotes and wait days while you manually calculate pricing based on their requirements",solution:"AI builds a quote calculator customers use themselves to get instant pricing",tools:["Bolt.new","Lovable","v0.dev"],howItWorks:'Explain your pricing logic: "Room dimensions × material choice × complexity factor = price." AI builds calculator with sliders/inputs, customers get instant quote. Embed on website or send link',costRange:"£0–£20/month",timeToSetup:"1–2 hours",whatYouNeed:"Clear pricing rules and variables, examples of past quotes",difficulty:"Medium",businessSize:"Solo - 50 employees",department:"Sales",source:"AI-built application"},{id:57,title:"Booking/Scheduling Requires Too Much Back-and-Forth",problem:"Customers book appointments via phone/email requiring multiple exchanges to find available times",solution:"AI builds a custom booking system that shows your actual availability and lets customers book instantly",tools:["Bolt.new","Lovable","Replit"],howItWorks:'Describe your booking rules: "Customers pick service type, see available slots for next 2 weeks, book and get confirmation. Block out lunch 12-1pm." AI builds it with your specific rules',costRange:"£0–£20/month",timeToSetup:"2–3 hours",whatYouNeed:"Your availability rules, service types and durations, calendar to sync with",difficulty:"Medium",businessSize:"Solo - 50 employees",department:"Sales / Operations",source:"AI-built application"},{id:58,title:"Workflow Approvals Managed via Messy Email Chains",problem:"You have a multi-step process (like expense approvals, content review, or job assignments) managed via messy email chains and spreadsheets",solution:"AI builds a simple workflow app where items move through stages with proper tracking",tools:["Bolt.new","Lovable","Replit"],howItWorks:'Map out your workflow: "Staff submit expense → Manager approves/rejects → Finance processes → Done. Email notifications at each stage." AI builds web app with status tracking',costRange:"£0–£20/month",timeToSetup:"2–4 hours",whatYouNeed:"Clear workflow stages and rules, list of who does what at each stage",difficulty:"Medium",businessSize:"10-50 employees",department:"Operations / Finance / HR",source:"AI-built application"},{id:59,title:"Data Collection Forms That Don't Integrate Properly",problem:"You use Google Forms or generic form builders but they don't integrate with your specific systems or have the exact logic you need",solution:"AI builds custom forms with your exact validation rules that feed directly into your database or spreadsheet",tools:["Bolt.new","Lovable","Replit"],howItWorks:'Describe your form needs: "Collect customer feedback with rating 1-5, conditional questions (if rating <3, ask why), send data to our Google Sheet, email me when someone rates us 1-2." AI builds it',costRange:"£0–£20/month",timeToSetup:"1–2 hours",whatYouNeed:"List of questions and validation rules, destination for data",difficulty:"Easy",businessSize:"2-50 employees",department:"All",source:"AI-built application"},{id:60,title:"Clients Keep Asking for Project Status Updates",problem:`Clients constantly email asking "what's the status of my project?" and you manually update them or give them access to complex project tools they don't understand`,solution:"AI builds a simple, client-facing dashboard showing just their project status without exposing your internal tools",tools:["Bolt.new","Lovable","Replit"],howItWorks:'Describe what clients should see: "Client logs in with email, sees their project name, current stage, timeline, latest update, and can upload files or leave comments." AI builds clean interface',costRange:"£0–£20/month",timeToSetup:"2–3 hours",whatYouNeed:"List of project stages, what info clients should/shouldn't see",difficulty:"Medium",businessSize:"2-50 employees",department:"Project Management / Client Services",source:"AI-built application"}],_c=["All","Customer Service","Sales","Marketing","Finance / Admin","Operations","HR","Management","IT / Admin"];function Ty({entry:e,onClose:t,getDeptConfig:n,DIFFICULTY_CONFIG:o}){const s=b.useRef(null),r=!!e;if(b.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[r]),!e&&!r)return null;const a=e?o[e.difficulty]||o.Medium:null,c=e?n(e.department):null,u={Easy:1,Medium:2,Hard:3};return i.jsxs(i.Fragment,{children:[i.jsx("div",{ref:s,onClick:t,className:"fixed inset-0 z-40 transition-opacity duration-300",style:{background:"rgba(0,0,0,0.65)",opacity:r?1:0,pointerEvents:r?"auto":"none",backdropFilter:"blur(4px)"}}),i.jsx("div",{className:"fixed inset-y-0 right-0 z-50 flex flex-col overflow-hidden",style:{width:"100%",maxWidth:"560px",background:"#0D1424",borderLeft:"1px solid rgba(255,255,255,0.1)",transform:r?"translateX(0)":"translateX(100%)",transition:"transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",boxShadow:r?"-20px 0 60px rgba(0,0,0,0.5)":"none"},children:e&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"flex-shrink-0 px-6 py-4 flex items-center justify-between",style:{borderBottom:"1px solid rgba(255,255,255,0.07)"},children:[i.jsxs("div",{className:"flex items-center gap-2.5",children:[i.jsx("span",{className:"px-2.5 py-1 rounded-lg text-xs font-bold",style:{background:c.bg,color:c.accent,border:`1px solid ${c.border}`},children:e.department}),i.jsxs("span",{className:"flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold",style:{background:a.bg,color:a.color,border:`1px solid ${a.border}`},children:[i.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{background:a.dot}}),e.difficulty]})]}),i.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg flex items-center justify-center transition-colors",style:{background:"rgba(255,255,255,0.05)",color:"#475569"},onMouseEnter:d=>{d.currentTarget.style.background="rgba(255,255,255,0.09)",d.currentTarget.style.color="#CBD5E1"},onMouseLeave:d=>{d.currentTarget.style.background="rgba(255,255,255,0.05)",d.currentTarget.style.color="#475569"},children:i.jsx(pt,{size:15})})]}),i.jsx("div",{className:"flex-1 overflow-y-auto",children:i.jsxs("div",{className:"px-6 py-6",children:[i.jsx("h2",{className:"text-xl font-black text-white leading-tight mb-5",style:{letterSpacing:"-0.02em"},children:e.title}),i.jsx("div",{className:"grid grid-cols-3 gap-3 mb-6",children:[{icon:Cm,label:"Setup time",value:e.timeToSetup},{icon:wa,label:"Cost",value:e.costRange},{icon:Gn,label:"Business size",value:e.businessSize}].map(({icon:d,label:m,value:h})=>i.jsxs("div",{className:"rounded-xl p-3 flex flex-col gap-1",style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)"},children:[i.jsx(d,{size:13,style:{color:"#334155"}}),i.jsx("p",{className:"text-xs",style:{color:"#475569"},children:m}),i.jsx("p",{className:"text-xs font-bold text-white leading-tight",children:h})]},m))}),i.jsxs("div",{className:"mb-6",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx("p",{className:"text-xs font-bold uppercase tracking-widest",style:{color:"#334155"},children:"Setup difficulty"}),i.jsx("span",{className:"text-xs font-semibold",style:{color:a.color},children:e.difficulty})]}),i.jsx("div",{className:"flex gap-1.5",children:[1,2,3].map(d=>{const m=d<=(u[e.difficulty]||1);return i.jsx("div",{className:"flex-1 h-1.5 rounded-full transition-all",style:{background:m?a.color:"rgba(255,255,255,0.07)"}},d)})})]}),i.jsxs("div",{className:"rounded-xl p-4 mb-4",style:{background:"rgba(248,113,113,0.06)",border:"1px solid rgba(248,113,113,0.14)"},children:[i.jsx("p",{className:"text-xs font-bold uppercase tracking-widest mb-2",style:{color:"#F87171"},children:"The Problem"}),i.jsx("p",{className:"text-sm leading-relaxed",style:{color:"#94A3B8"},children:e.problem})]}),i.jsxs("div",{className:"rounded-xl p-4 mb-4",style:{background:"rgba(74,222,128,0.05)",border:"1px solid rgba(74,222,128,0.14)"},children:[i.jsxs("div",{className:"flex items-center gap-1.5 mb-2",children:[i.jsx(xn,{size:12,style:{color:"#4ADE80"}}),i.jsx("p",{className:"text-xs font-bold uppercase tracking-widest",style:{color:"#4ADE80"},children:"The AI Fix"})]}),i.jsx("p",{className:"text-sm leading-relaxed",style:{color:"#CBD5E1"},children:e.solution})]}),i.jsxs("div",{className:"mb-4",children:[i.jsx("p",{className:"text-xs font-bold uppercase tracking-widest mb-2",style:{color:"#334155"},children:"How it works"}),i.jsx("p",{className:"text-sm leading-relaxed",style:{color:"#64748B"},children:e.howItWorks})]}),i.jsxs("div",{className:"rounded-xl p-4 mb-5",style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)"},children:[i.jsxs("div",{className:"flex items-center gap-1.5 mb-2",children:[i.jsx(Yf,{size:12,style:{color:"#38BDF8"}}),i.jsx("p",{className:"text-xs font-bold uppercase tracking-widest",style:{color:"#38BDF8"},children:"What you need first"})]}),i.jsx("p",{className:"text-sm leading-relaxed",style:{color:"#64748B"},children:e.whatYouNeed})]}),i.jsxs("div",{className:"pt-4",style:{borderTop:"1px solid rgba(255,255,255,0.06)"},children:[i.jsxs("div",{className:"flex items-center gap-1.5 mb-3",children:[i.jsx(ks,{size:12,style:{color:"#334155"}}),i.jsx("p",{className:"text-xs font-bold uppercase tracking-widest",style:{color:"#334155"},children:"Recommended tools"})]}),i.jsx("div",{className:"flex flex-wrap gap-2",children:e.tools.map(d=>i.jsx("span",{className:"px-3 py-1.5 rounded-lg text-xs font-medium",style:{background:"rgba(255,255,255,0.05)",color:"#94A3B8",border:"1px solid rgba(255,255,255,0.09)"},children:d},d))})]})]})}),i.jsxs("div",{className:"flex-shrink-0 px-6 py-5",style:{borderTop:"1px solid rgba(255,255,255,0.08)",background:"rgba(8,12,20,0.8)"},children:[i.jsx("p",{className:"text-sm font-semibold text-white mb-1",children:"Ready to implement this?"}),i.jsx("p",{className:"text-xs mb-4",style:{color:"#475569"},children:"Book a free call and we'll handle the setup for your business — no technical knowledge needed."}),i.jsxs("a",{href:"https://calendly.com/shawaiznaeem-104/intro-call",target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all",style:{background:"linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",color:"white",boxShadow:"0 4px 20px rgba(14,165,233,0.3)"},onMouseEnter:d=>{d.currentTarget.style.boxShadow="0 6px 28px rgba(14,165,233,0.45)",d.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:d=>{d.currentTarget.style.boxShadow="0 4px 20px rgba(14,165,233,0.3)",d.currentTarget.style.transform="none"},children:[i.jsx(Gt,{size:15}),"Book a free call",i.jsx(mt,{size:14})]})]})]})})]})}const bo="All",In="All",va={Easy:{color:"#4ADE80",bg:"rgba(74,222,128,0.1)",border:"rgba(74,222,128,0.25)",dot:"#4ADE80",label:"Easy"},Medium:{color:"#FCD34D",bg:"rgba(252,211,77,0.1)",border:"rgba(252,211,77,0.25)",dot:"#FCD34D",label:"Medium"},Hard:{color:"#F87171",bg:"rgba(248,113,113,0.1)",border:"rgba(248,113,113,0.25)",dot:"#F87171",label:"Hard"}},Ey={"Customer Service":{accent:"#0EA5E9",bg:"rgba(14,165,233,0.08)",border:"rgba(14,165,233,0.18)",glow:"rgba(14,165,233,0.06)",icon:Gn},Sales:{accent:"#10B981",bg:"rgba(16,185,129,0.08)",border:"rgba(16,185,129,0.18)",glow:"rgba(16,185,129,0.06)",icon:an},"Sales / Marketing":{accent:"#10B981",bg:"rgba(16,185,129,0.08)",border:"rgba(16,185,129,0.18)",glow:"rgba(16,185,129,0.06)",icon:an},"Sales / Admin":{accent:"#10B981",bg:"rgba(16,185,129,0.08)",border:"rgba(16,185,129,0.18)",glow:"rgba(16,185,129,0.06)",icon:an},Marketing:{accent:"#F59E0B",bg:"rgba(245,158,11,0.08)",border:"rgba(245,158,11,0.18)",glow:"rgba(245,158,11,0.06)",icon:Dc},"Marketing / Sales":{accent:"#F59E0B",bg:"rgba(245,158,11,0.08)",border:"rgba(245,158,11,0.18)",glow:"rgba(245,158,11,0.06)",icon:Dc},Operations:{accent:"#8B5CF6",bg:"rgba(139,92,246,0.08)",border:"rgba(139,92,246,0.18)",glow:"rgba(139,92,246,0.06)",icon:Xt},"Operations / Project Management":{accent:"#8B5CF6",bg:"rgba(139,92,246,0.08)",border:"rgba(139,92,246,0.18)",glow:"rgba(139,92,246,0.06)",icon:Xt},"Operations / HR":{accent:"#8B5CF6",bg:"rgba(139,92,246,0.08)",border:"rgba(139,92,246,0.18)",glow:"rgba(139,92,246,0.06)",icon:Xt},"Operations / Marketing":{accent:"#8B5CF6",bg:"rgba(139,92,246,0.08)",border:"rgba(139,92,246,0.18)",glow:"rgba(139,92,246,0.06)",icon:Xt},"Operations / Finance":{accent:"#8B5CF6",bg:"rgba(139,92,246,0.08)",border:"rgba(139,92,246,0.18)",glow:"rgba(139,92,246,0.06)",icon:Xt},"Operations / Admin":{accent:"#8B5CF6",bg:"rgba(139,92,246,0.08)",border:"rgba(139,92,246,0.18)",glow:"rgba(139,92,246,0.06)",icon:Xt},"Finance / Admin":{accent:"#EC4899",bg:"rgba(236,72,153,0.08)",border:"rgba(236,72,153,0.18)",glow:"rgba(236,72,153,0.06)",icon:wa},"Admin / Finance":{accent:"#EC4899",bg:"rgba(236,72,153,0.08)",border:"rgba(236,72,153,0.18)",glow:"rgba(236,72,153,0.06)",icon:wa},Admin:{accent:"#EC4899",bg:"rgba(236,72,153,0.08)",border:"rgba(236,72,153,0.18)",glow:"rgba(236,72,153,0.06)",icon:Bc},HR:{accent:"#06B6D4",bg:"rgba(6,182,212,0.08)",border:"rgba(6,182,212,0.18)",glow:"rgba(6,182,212,0.06)",icon:cy},Management:{accent:"#F97316",bg:"rgba(249,115,22,0.08)",border:"rgba(249,115,22,0.18)",glow:"rgba(249,115,22,0.06)",icon:Im},"IT / Admin":{accent:"#64748B",bg:"rgba(100,116,139,0.08)",border:"rgba(100,116,139,0.18)",glow:"rgba(100,116,139,0.06)",icon:ry},"Project Management / Operations":{accent:"#8B5CF6",bg:"rgba(139,92,246,0.08)",border:"rgba(139,92,246,0.18)",glow:"rgba(139,92,246,0.06)",icon:Xt},"Project Management / Client Services":{accent:"#0EA5E9",bg:"rgba(14,165,233,0.08)",border:"rgba(14,165,233,0.18)",glow:"rgba(14,165,233,0.06)",icon:Bc},"Customer Service / Operations":{accent:"#0EA5E9",bg:"rgba(14,165,233,0.08)",border:"rgba(14,165,233,0.18)",glow:"rgba(14,165,233,0.06)",icon:Gn},"Customer Service / Product":{accent:"#0EA5E9",bg:"rgba(14,165,233,0.08)",border:"rgba(14,165,233,0.18)",glow:"rgba(14,165,233,0.06)",icon:Gn},"Sales / Legal":{accent:"#10B981",bg:"rgba(16,185,129,0.08)",border:"rgba(16,185,129,0.18)",glow:"rgba(16,185,129,0.06)",icon:Lm},"Sales / Operations":{accent:"#10B981",bg:"rgba(16,185,129,0.08)",border:"rgba(16,185,129,0.18)",glow:"rgba(16,185,129,0.06)",icon:an}};function Fm(e){return Ey[e]||{accent:"#64748B",bg:"rgba(100,116,139,0.08)",border:"rgba(100,116,139,0.18)",glow:"rgba(100,116,139,0.06)",icon:Hf}}function zy({entry:e,onClick:t}){const[n,o]=b.useState(!1),s=va[e.difficulty]||va.Medium,r=Fm(e.department),a=r.icon;return i.jsxs("button",{onClick:()=>t(e),onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),className:"w-full text-left rounded-2xl transition-all duration-300 flex flex-col",style:{background:n?`linear-gradient(160deg, ${r.glow} 0%, rgba(255,255,255,0.04) 100%)`:"rgba(255,255,255,0.03)",border:`1px solid ${n?r.border:"rgba(255,255,255,0.07)"}`,boxShadow:n?`0 8px 32px rgba(0,0,0,0.25), 0 0 0 1px ${r.border}`:"none",transform:n?"translateY(-2px)":"none",minHeight:"220px"},children:[i.jsx("div",{className:"h-1 w-full rounded-t-2xl",style:{background:n?r.accent:"transparent",transition:"background 0.3s"}}),i.jsxs("div",{className:"flex flex-col flex-1 p-6 gap-4",children:[i.jsxs("div",{className:"flex items-start justify-between gap-3",children:[i.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",style:{background:r.bg,border:`1px solid ${r.border}`},children:i.jsx(a,{size:18,style:{color:r.accent}})}),i.jsxs("div",{className:"flex items-center gap-1.5 flex-shrink-0 mt-0.5",children:[i.jsx("span",{className:"w-1.5 h-1.5 rounded-full flex-shrink-0",style:{background:s.dot}}),i.jsx("span",{className:"text-xs font-medium",style:{color:s.color},children:e.difficulty})]})]}),i.jsxs("div",{className:"flex-1",children:[i.jsx("p",{className:"text-xs font-semibold mb-2 uppercase tracking-wider",style:{color:r.accent},children:e.department}),i.jsx("h3",{className:"font-bold text-white leading-snug mb-3",style:{fontSize:"0.95rem",letterSpacing:"-0.01em"},children:e.title}),i.jsx("p",{className:"text-sm leading-relaxed",style:{color:"#4B5563"},children:e.solution})]}),i.jsx("div",{className:"flex items-center justify-end pt-3",style:{borderTop:"1px solid rgba(255,255,255,0.06)"},children:i.jsx(Xn,{size:15,className:"flex-shrink-0 transition-all duration-200",style:{color:n?r.accent:"#1E293B",transform:n?"translateX(2px)":"none"}})})]})]})}function yr({label:e,count:t,active:n,accent:o,onClick:s}){return i.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap flex-shrink-0",style:{background:n?"rgba(14,165,233,0.12)":"rgba(255,255,255,0.04)",color:n?"#38BDF8":"#475569",border:n?"1px solid rgba(14,165,233,0.25)":"1px solid rgba(255,255,255,0.06)"},children:[e,t!==void 0&&i.jsx("span",{className:"px-1.5 py-0.5 rounded-md text-xs font-bold",style:{background:n?"rgba(14,165,233,0.2)":"rgba(255,255,255,0.06)",color:n?"#38BDF8":"#334155"},children:t})]})}function Py(){const e=Nt(),[t,n]=b.useState(""),[o,s]=b.useState(bo),[r,a]=b.useState(In),[c,u]=b.useState(null),d=b.useMemo(()=>{const p={};return Pi.forEach(v=>{const x=_c.find(A=>A!=="All"&&v.department.toLowerCase().includes(A.toLowerCase()));x&&(p[x]=(p[x]||0)+1)}),p},[]),m=b.useMemo(()=>Pi.filter(p=>{const v=o===bo||p.department.toLowerCase().includes(o.toLowerCase()),x=r===In||p.difficulty===r,A=t.toLowerCase().trim(),y=!A||p.title.toLowerCase().includes(A)||p.problem.toLowerCase().includes(A)||p.solution.toLowerCase().includes(A)||p.department.toLowerCase().includes(A)||p.tools.some(f=>f.toLowerCase().includes(A));return v&&x&&y}),[t,o,r]),h=o!==bo||r!==In||t,g=b.useCallback(()=>{s(bo),a(In),n("")},[]);return b.useEffect(()=>{const p=v=>{v.key==="Escape"&&u(null)};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[]),i.jsxs("div",{className:"min-h-screen w-full pb-32",style:{background:"#080C14"},children:[i.jsx("div",{className:"fixed inset-0 pointer-events-none",style:{backgroundImage:`
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(14,165,233,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 0% 100%, rgba(16,185,129,0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 100% 100%, rgba(245,158,11,0.04) 0%, transparent 50%)
          `}}),i.jsxs("nav",{className:"relative z-20 flex items-center justify-between px-6 sm:px-10 h-16 border-b",style:{borderColor:"rgba(255,255,255,0.06)",background:"rgba(8,12,20,0.9)",backdropFilter:"blur(12px)"},children:[i.jsxs("button",{onClick:()=>e("/hub"),className:"flex items-center gap-2 text-sm font-medium transition-colors",style:{color:"#475569"},onMouseEnter:p=>p.currentTarget.style.color="#CBD5E1",onMouseLeave:p=>p.currentTarget.style.color="#475569",children:[i.jsx(Jt,{size:16}),"Back"]}),i.jsx(ao,{size:"sm",whiteMode:!0}),i.jsx("div",{style:{width:60}})]}),i.jsxs("div",{className:"relative z-10 px-4 sm:px-6 pt-20 pb-16 text-center",children:[i.jsx("p",{className:"text-xs font-bold uppercase tracking-widest mb-6",style:{color:"#0EA5E9",letterSpacing:"0.2em"},children:"AI Toolkit for SMEs"}),i.jsx("h1",{className:"text-4xl sm:text-6xl font-black text-white mb-6 mx-auto",style:{letterSpacing:"-0.04em",lineHeight:1.05,maxWidth:"640px"},children:"Pick your fix."}),i.jsx("p",{className:"text-base sm:text-lg mb-12 mx-auto",style:{color:"#4B5563",maxWidth:"480px",lineHeight:1.6},children:"60 common business problems, each mapped to a proven AI solution you can start using this week."}),i.jsxs("div",{className:"relative mx-auto",style:{maxWidth:"540px"},children:[i.jsx(Fc,{size:17,className:"absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none",style:{color:"#334155"}}),i.jsx("input",{type:"text",placeholder:"Search by problem, tool, or department...",value:t,onChange:p=>n(p.target.value),className:"w-full pl-12 pr-10 py-4 rounded-2xl text-sm outline-none text-white placeholder-slate-600",style:{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",fontSize:"0.9rem"}}),t&&i.jsx("button",{onClick:()=>n(""),className:"absolute right-4 top-1/2 -translate-y-1/2 transition-colors",style:{color:"#475569"},onMouseEnter:p=>p.currentTarget.style.color="#94A3B8",onMouseLeave:p=>p.currentTarget.style.color="#475569",children:i.jsx(pt,{size:15})})]})]}),i.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-8",children:[i.jsx("div",{className:"sticky top-0 z-10 py-4",style:{background:"linear-gradient(to bottom, #080C14 70%, transparent)"},children:i.jsxs("div",{className:"flex gap-2 overflow-x-auto pb-1",style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:[i.jsx(yr,{label:"Any difficulty",active:r===In,onClick:()=>a(In)}),["Easy","Medium"].map(p=>i.jsx(yr,{label:p,active:r===p,onClick:()=>a(p)},p)),i.jsx("div",{className:"w-px flex-shrink-0 self-stretch my-1 mx-1",style:{background:"rgba(255,255,255,0.07)"}}),_c.map(p=>i.jsx(yr,{label:p,count:p==="All"?Pi.length:d[p],active:o===p,onClick:()=>s(p)},p))]})}),i.jsxs("div",{className:"flex items-center justify-between mb-8 mt-2",children:[i.jsxs("p",{className:"text-sm",style:{color:"#334155"},children:[i.jsx("span",{className:"font-bold text-white",children:m.length}),i.jsxs("span",{children:[" of ",Pi.length," solutions"]}),o!==bo&&i.jsxs("span",{style:{color:"#38BDF8"},children:[" — ",o]})]}),h&&i.jsxs("button",{onClick:g,className:"text-xs font-semibold flex items-center gap-1.5 transition-colors",style:{color:"#475569"},onMouseEnter:p=>p.currentTarget.style.color="#94A3B8",onMouseLeave:p=>p.currentTarget.style.color="#475569",children:[i.jsx(pt,{size:12}),"Clear"]})]}),m.length===0?i.jsxs("div",{className:"text-center py-24",children:[i.jsx("div",{className:"w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5",style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)"},children:i.jsx(Fc,{size:22,style:{color:"#334155"}})}),i.jsx("p",{className:"font-bold text-white mb-2",children:"No solutions found"}),i.jsx("p",{className:"text-sm mb-6",style:{color:"#475569"},children:"Try a different term or clear your filters"}),i.jsx("button",{onClick:g,className:"text-sm font-semibold transition-colors",style:{color:"#38BDF8"},children:"Clear all filters"})]}):i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:m.map(p=>i.jsx(zy,{entry:p,onClick:u},p.id))}),i.jsx("div",{className:"mt-24 rounded-3xl overflow-hidden",style:{border:"1px solid rgba(255,255,255,0.08)"},children:i.jsxs("div",{className:"px-8 sm:px-16 py-16 text-center",style:{background:"linear-gradient(160deg, rgba(14,165,233,0.06) 0%, rgba(8,12,20,1) 60%)"},children:[i.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-white mb-4",style:{letterSpacing:"-0.03em"},children:"Get it built for you."}),i.jsx("p",{className:"text-base mb-10 mx-auto",style:{color:"#4B5563",maxWidth:"400px",lineHeight:1.6},children:"Found a problem that fits? Book a free call and we'll map out exactly how to implement it."}),i.jsxs("a",{href:"https://calendly.com/shawaiznaeem-104/intro-call",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm transition-all",style:{background:"linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",color:"white",boxShadow:"0 4px 24px rgba(14,165,233,0.3)"},onMouseEnter:p=>{p.currentTarget.style.boxShadow="0 8px 36px rgba(14,165,233,0.5)",p.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:p=>{p.currentTarget.style.boxShadow="0 4px 24px rgba(14,165,233,0.3)",p.currentTarget.style.transform="none"},children:[i.jsx(Gt,{size:16}),"Book a free call",i.jsx(mt,{size:14})]})]})})]}),i.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-30 flex justify-center px-4 py-4",style:{background:"linear-gradient(to top, rgba(8,12,20,1) 50%, transparent)"},children:i.jsxs("a",{href:"https://calendly.com/shawaiznaeem-104/intro-call",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all",style:{background:"linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",color:"white",boxShadow:"0 4px 24px rgba(14,165,233,0.35)",backdropFilter:"blur(8px)"},onMouseEnter:p=>{p.currentTarget.style.boxShadow="0 8px 36px rgba(14,165,233,0.5)",p.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:p=>{p.currentTarget.style.boxShadow="0 4px 24px rgba(14,165,233,0.35)",p.currentTarget.style.transform="none"},children:[i.jsx(Gt,{size:15}),"Book a free call"]})}),i.jsx(Ty,{entry:c,onClose:()=>u(null),getDeptConfig:Fm,DIFFICULTY_CONFIG:va})]})}function Ry(){const e=Nt();return i.jsxs("div",{className:"min-h-screen w-full pb-32",style:{background:"#080C14"},children:[i.jsx("div",{className:"fixed inset-0 pointer-events-none",style:{backgroundImage:`
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 0% 100%, rgba(34,197,94,0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 100% 100%, rgba(168,85,247,0.04) 0%, transparent 50%)
          `}}),i.jsxs("nav",{className:"relative z-20 flex items-center justify-between px-6 sm:px-10 h-16 border-b",style:{borderColor:"rgba(255,255,255,0.06)",background:"rgba(8,12,20,0.9)",backdropFilter:"blur(12px)"},children:[i.jsxs("button",{onClick:()=>e("/hub"),className:"flex items-center gap-2 text-sm font-medium transition-colors",style:{color:"#475569"},onMouseEnter:t=>t.currentTarget.style.color="#CBD5E1",onMouseLeave:t=>t.currentTarget.style.color="#475569",children:[i.jsx(Jt,{size:16}),"Back"]}),i.jsx(ao,{size:"sm",whiteMode:!0}),i.jsx("div",{style:{width:60}})]}),i.jsxs("div",{className:"relative z-10 px-4 sm:px-6 pt-20 pb-16 text-center",children:[i.jsx("p",{className:"text-xs font-bold uppercase tracking-widest mb-6",style:{color:"#3B82F6",letterSpacing:"0.2em"},children:"Coming Soon"}),i.jsx("h1",{className:"text-4xl sm:text-6xl font-black text-white mb-6 mx-auto",style:{letterSpacing:"-0.04em",lineHeight:1.05,maxWidth:"640px"},children:"AI Security."}),i.jsx("p",{className:"text-base sm:text-lg mb-12 mx-auto",style:{color:"#4B5563",maxWidth:"480px",lineHeight:1.6},children:"Comprehensive security practices for AI systems. Learn how to protect your data, validate AI outputs, and build trustworthy AI implementations."}),i.jsxs("div",{className:"inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl",style:{background:"rgba(59,130,246,0.08)",border:"1px solid rgba(59,130,246,0.2)"},children:[i.jsx("div",{className:"w-2.5 h-2.5 rounded-full",style:{background:"#3B82F6",animation:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"}}),i.jsx("p",{className:"text-sm font-semibold",style:{color:"#60A5FA"},children:"This section is in development. We're building comprehensive security training content."})]})]}),i.jsx("div",{className:"relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-20",children:i.jsxs("div",{className:"rounded-2xl p-8 sm:p-12",style:{background:"linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(34,197,94,0.03) 100%)",border:"1px solid rgba(59,130,246,0.15)"},children:[i.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white mb-8",style:{letterSpacing:"-0.02em"},children:"Topics Coming Soon"}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[{title:"Prompt Injection & Attack Vectors",description:"Understand common attack methods and how to build resilient AI systems."},{title:"Data Privacy & Model Security",description:"Protect sensitive data in AI pipelines and secure your models."},{title:"AI Output Validation",description:"Verify AI responses for accuracy, bias, and safety before deployment."},{title:"Access Control & Authentication",description:"Implement proper security controls for AI systems and user access."},{title:"Model Governance & Auditing",description:"Track, audit, and maintain transparency in AI decision-making."},{title:"Compliance & Risk Management",description:"Navigate regulatory requirements and AI-specific compliance needs."}].map((t,n)=>i.jsxs("div",{className:"p-4 rounded-xl",style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)"},children:[i.jsx("h3",{className:"font-semibold text-white mb-2",children:t.title}),i.jsx("p",{className:"text-sm",style:{color:"#4B5563"},children:t.description})]},n))})]})}),i.jsxs("div",{className:"relative z-10 max-w-2xl mx-auto px-4 sm:px-8 py-16 text-center",children:[i.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Interested in AI Security Training?"}),i.jsx("p",{className:"text-sm mb-6",style:{color:"#4B5563"},children:"Get early access notifications when this section launches."}),i.jsx("a",{href:"https://calendly.com/shawaiznaeem-104/intro-call",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all",style:{background:"linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)",color:"white",boxShadow:"0 4px 16px rgba(59,130,246,0.3)"},onMouseEnter:t=>{t.currentTarget.style.boxShadow="0 8px 24px rgba(59,130,246,0.5)",t.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:t=>{t.currentTarget.style.boxShadow="0 4px 16px rgba(59,130,246,0.3)",t.currentTarget.style.transform="none"},children:"Get Notified"})]})]})}const wr="#c17f3a",My="#a66830";function Om({children:e,variant:t="primary",onClick:n,disabled:o,type:s="button",className:r="",style:a={}}){const u="px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold transition-all duration-200 min-h-10 sm:min-h-11 focus:outline-none focus:ring-2 focus:ring-offset-2 ",d={primary:{className:"text-white focus:ring-energise-400 disabled:opacity-60 disabled:cursor-not-allowed",style:{backgroundColor:wr},hoverStyle:{backgroundColor:My}},secondary:{className:"bg-slate-200 text-slate-900 hover:bg-slate-300 hover:shadow-md focus:ring-energise-400 disabled:opacity-50 disabled:cursor-not-allowed",style:{}},success:{className:"bg-green-600 text-white hover:bg-green-700 hover:shadow-md focus:ring-green-500 disabled:opacity-60 disabled:cursor-not-allowed",style:{}},outline:{className:"text-energise-400 bg-white hover:bg-energise-50 focus:ring-energise-400 disabled:opacity-50 disabled:cursor-not-allowed",style:{border:`2px solid ${wr}`,color:wr}}},m=d[t]||d.primary;return i.jsx("button",{type:s,onClick:n,disabled:o,className:`${u} ${m.className} ${r}`,style:{...m.style,...a},onMouseEnter:h=>{!o&&m.hoverStyle&&Object.assign(h.currentTarget.style,m.hoverStyle)},onMouseLeave:h=>{!o&&m.style&&Object.assign(h.currentTarget.style,m.style)},children:e})}function Ly({children:e,className:t="",interactive:n=!1,accent:o="cyan",onClick:s}){const r="bg-white/98 backdrop-blur-md rounded-md border border-slate-100 p-8 transition-all duration-200",a=n?"hover:shadow-lg cursor-pointer":"",c={cyan:l.colors.accent.cyan,coral:l.colors.accent.coral,blue:l.colors.primary.deep},u=c[o]||c.cyan;return i.jsxs("div",{className:`${r} ${a} ${t} relative group`,onClick:s,style:{boxShadow:n?l.shadows.large:l.shadows.medium,transition:l.transitions.default},children:[n&&ei.cornerBrackets&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-all",style:{borderColor:u,boxShadow:l.shadows.glow.cyan,transition:l.transitions.default}}),i.jsx("div",{className:"absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-all",style:{borderColor:u,boxShadow:l.shadows.glow.cyan,transition:l.transitions.default}})]}),e]})}function Wy(){const[e,t]=b.useState(""),[n,o]=b.useState(""),[s,r]=b.useState(""),[a,c]=b.useState(!1),{signIn:u}=Je(),{setSidebarOpen:d}=kl(),m=Nt(),h=async g=>{g.preventDefault(),r(""),c(!0);try{await u(e,n),d(!1),m("/hub")}catch(p){r(p.message||"Failed to sign in. Please check your credentials.")}finally{c(!1)}};return i.jsx("div",{className:"min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-6 sm:py-8",style:{backgroundColor:"#faf8f5"},children:i.jsxs(Ly,{className:"w-full max-w-md bg-white border-2 shadow-md p-4 sm:p-6",style:{borderColor:"#e8dfd4"},children:[i.jsxs("button",{onClick:()=>m("/"),className:"mb-4 flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium",children:[i.jsx(Jt,{size:16}),"Back to Home"]}),i.jsx("h2",{className:"text-2xl sm:text-3xl font-black text-slate-900 mb-6 sm:mb-8 text-center",style:{letterSpacing:"-0.02em"},children:"Login to Your Account"}),i.jsxs("form",{onSubmit:h,className:"space-y-4 sm:space-y-6",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"username",className:"block text-xs sm:text-sm font-semibold text-slate-900 mb-1 sm:mb-2",children:"Username"}),i.jsx("input",{id:"username",type:"text",value:e,onChange:g=>t(g.target.value),required:!0,className:"w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-energise-400 focus:border-energise-400 transition text-sm",placeholder:"shawaiz"})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"password",className:"block text-xs sm:text-sm font-semibold text-slate-900 mb-1 sm:mb-2",children:"Password"}),i.jsx("input",{id:"password",type:"password",value:n,onChange:g=>o(g.target.value),required:!0,className:"w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-energise-400 focus:border-energise-400 transition text-sm",placeholder:"••••••••"})]}),s&&i.jsx("div",{className:"p-3 sm:p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 text-xs sm:text-sm font-medium",children:s}),i.jsx(Om,{type:"submit",variant:"primary",disabled:a,className:"w-full py-3 sm:py-4 font-semibold text-sm sm:text-base",children:a?"Signing in...":"Login"})]})]})})}Se.map(e=>e.title);function qy(e,t=null){if(t===null&&(t=Se.reduce((o,s)=>o+s.lessons.length,0)),t===0)return 0;const n=new Set(e.filter(o=>o.completed&&o.category==="lesson").map(o=>o.lesson_number));return Math.round(n.size/t*100)}function Um(e,t=44){const o=new Set(e.filter(r=>r.completed&&r.category==="lesson").map(r=>r.lesson_number)).size,s=Math.round(o/t*100);return{lessonsCompleted:o,percentComplete:s,totalLessons:t,lessonCompletion:Object.fromEntries(e.filter(r=>r.completed&&r.category==="lesson").map(r=>[r.lesson_number,!0]))}}function dn(e,t){let n=0;for(let o=0;o<e-1;o++)n+=Se[o].lessons.length;return n+t}function Gc(e){let t=0;for(const n of Se){if(t+n.lessons.length>=e)return{moduleId:n.id,lessonId:e-t};t+=n.lessons.length}return{moduleId:1,lessonId:1}}function Ri(e){if(!e)return"";let t=e.split(`
`),n="",o=!1;return t.forEach((s,r)=>{if(s=s.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),s.trim().startsWith("-")){o||(n+='<ul class="space-y-2 my-4">',o=!0);const a=s.trim().substring(1).trim();n+=`<li class="ml-6">${a}</li>`}else o&&(n+="</ul>",o=!1),s.trim()&&(n+=`<p class="mb-4">${s}</p>`)}),o&&(n+="</ul>"),n}const Hc="eae_completions";function di(e,t){const[n,o]=b.useState([]),[s,r]=b.useState(!0);b.useEffect(()=>{if(!e){r(!1);return}const p=localStorage.getItem(`${Hc}_${e}`);o(p?JSON.parse(p):[]),r(!1)},[e]);const a=p=>{o(p),localStorage.setItem(`${Hc}_${e}`,JSON.stringify(p))},c=async(p,v)=>{n.some(A=>A.lesson_number===p&&A.category===v)||a([...n,{id:`${p}-${v}`,user_id:e,lesson_number:p,category:v,completed:!0,completed_at:new Date().toISOString()}])},u=async(p,v)=>{const x=n.some(A=>A.lesson_number===p&&A.category===v&&A.completed);a(x?n.filter(A=>!(A.lesson_number===p&&A.category===v)):[...n,{id:`${p}-${v}`,user_id:e,lesson_number:p,category:v,completed:!0,completed_at:new Date().toISOString()}])},d=(p,v)=>n.some(x=>x.lesson_number===p&&x.category===v&&x.completed),m=p=>n.filter(v=>v.lesson_number===p&&v.completed).length,h=t.filter(p=>p.unlocked),g=qy(n,h);return{completions:n,overallProgress:g,getLessonProgress:m,isComplete:d,markComplete:c,toggleComplete:u,loading:s}}function By({stats:e,currentModuleInfo:t}){const n=Math.round(e.percentComplete),o=2*Math.PI*44,s=o-n/100*o;return i.jsx("div",{className:"relative overflow-hidden rounded-xl border",style:{backgroundColor:l.colors.background.card,borderColor:l.colors.border.subtle},children:i.jsxs("div",{className:"flex items-center gap-6 px-6 py-5",children:[i.jsxs("div",{className:"relative flex-shrink-0",children:[i.jsxs("svg",{width:"100",height:"100",className:"transform -rotate-90",children:[i.jsx("circle",{cx:"50",cy:"50",r:"44",fill:"none",stroke:l.colors.background.subtle,strokeWidth:"8"}),i.jsx("circle",{cx:"50",cy:"50",r:"44",fill:"none",stroke:l.colors.primary.electric,strokeWidth:"8",strokeDasharray:o,strokeDashoffset:s,strokeLinecap:"round",style:{transition:"stroke-dashoffset 1s ease"}})]}),i.jsx("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:i.jsxs("span",{className:"text-2xl font-bold",style:{color:l.colors.primary.electric},children:[n,"%"]})})]}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsx("h1",{className:"text-xl font-bold mb-1",style:{letterSpacing:"-0.02em",color:l.colors.text.primary},children:"Your Learning Progress"}),i.jsx("p",{className:"text-sm mb-3",style:{color:l.colors.text.secondary},children:"44 lessons across 8 modules"}),i.jsxs("div",{className:"flex flex-wrap gap-6",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(ro,{size:14,style:{color:l.colors.accent.cyan}}),i.jsxs("span",{className:"text-sm font-semibold",style:{color:l.colors.text.primary},children:[e.lessonsCompleted,i.jsx("span",{className:"font-normal",style:{color:l.colors.text.muted},children:" / 44 lessons"})]})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(an,{size:14,style:{color:l.colors.accent.cyan}}),i.jsxs("span",{className:"text-sm font-semibold",style:{color:l.colors.text.primary},children:["Module ",(t==null?void 0:t.moduleId)||"—",i.jsx("span",{className:"font-normal",style:{color:l.colors.text.muted},children:" of 8"})]})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(qm,{size:14,style:{color:l.colors.accent.cyan}}),i.jsxs("span",{className:"text-sm font-semibold",style:{color:l.colors.text.primary},children:[e.modulesCompleted,i.jsx("span",{className:"font-normal",style:{color:l.colors.text.muted},children:" modules complete"})]})]})]})]})]})})}function Dy({module:e,lessons:t,isComplete:n,getModuleAndLesson:o,defaultOpen:s}){const[r,a]=b.useState(s??!1),c=Se.find(v=>v.id===e.moduleId),u={1:{accent:l.colors.primary.electric},2:{accent:l.colors.accent.cyan},3:{accent:l.colors.primary.deep}},m=(v=>v<=2?1:v<=5?2:3)(e.moduleId),h=u[m].accent,g=e.progress===100,p=g?l.colors.status.success:h;return i.jsxs("div",{className:"rounded-xl border overflow-hidden",style:{backgroundColor:l.colors.background.card,borderColor:g?l.colors.status.success:l.colors.border.subtle},children:[i.jsxs("button",{onClick:()=>a(v=>!v),className:"w-full text-left flex items-center gap-4 px-5 py-4 transition-colors hover:bg-energise-50",children:[i.jsxs("div",{className:"flex-1 min-w-0 flex items-center gap-4",children:[i.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",style:{backgroundColor:g?l.colors.status.success:`${h}15`,color:g?"white":h},children:g?i.jsx(yn,{size:16,color:"white"}):e.moduleId}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsx("div",{className:"flex items-center gap-2 mb-1",children:i.jsxs("span",{className:"text-xs font-semibold uppercase tracking-wider",style:{color:h},children:["Module ",e.moduleId]})}),i.jsx("p",{className:"text-sm font-semibold truncate",style:{color:l.colors.text.primary},children:e.title})]})]}),i.jsxs("div",{className:"flex-shrink-0 flex items-center gap-4",children:[i.jsxs("div",{className:"hidden sm:flex items-center gap-3",children:[i.jsx("div",{className:"w-24 h-1.5 rounded-full overflow-hidden",style:{backgroundColor:`${h}15`},children:i.jsx("div",{className:"h-full rounded-full transition-all duration-500",style:{width:`${e.progress}%`,backgroundColor:p}})}),i.jsxs("span",{className:"text-sm font-semibold w-10 text-right",style:{color:p},children:[Math.round(e.progress),"%"]})]}),i.jsxs("span",{className:"text-xs font-medium hidden sm:block",style:{color:l.colors.text.muted},children:[e.completedLessons,"/",e.totalLessons]}),r?i.jsx(un,{size:16,style:{color:l.colors.text.muted}}):i.jsx(Xn,{size:16,style:{color:l.colors.text.muted}})]})]}),r&&i.jsx("div",{className:"border-t px-5 py-4",style:{borderColor:l.colors.border.subtle},children:i.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-2",children:t.map(v=>{const{moduleId:x,lessonId:A}=o(v),y=n(v,"lesson"),f=c==null?void 0:c.lessons.find(k=>k.id===A),w=(f==null?void 0:f.title)||`Lesson ${A}`;return i.jsxs(G,{to:`/modules/${x}/lessons/${A}`,className:"group flex items-center gap-3 p-3 rounded-lg border transition-all hover:shadow-sm",style:{backgroundColor:y?`${l.colors.status.success}08`:l.colors.background.subtle,borderColor:y?`${l.colors.status.success}40`:l.colors.border.subtle},children:[i.jsx("div",{className:"flex-shrink-0",children:y?i.jsx("div",{className:"w-6 h-6 rounded-full flex items-center justify-center",style:{backgroundColor:l.colors.status.success},children:i.jsx(yn,{size:13,style:{color:"white"}})}):i.jsx("div",{className:"w-6 h-6 rounded-full flex items-center justify-center border",style:{borderColor:l.colors.border.default,color:l.colors.text.muted},children:i.jsx("span",{className:"text-xs font-bold",children:A})})}),i.jsx("span",{className:"text-sm font-medium flex-1 min-w-0 truncate",style:{color:y?l.colors.status.success:l.colors.text.primary},children:w})]},v)})})})]})}function Fy({nextModule:e,nextLesson:t}){return!e||!t?null:i.jsxs(G,{to:`/modules/${e.moduleId}/lessons/${t.id}`,className:"group block relative overflow-hidden rounded-2xl border-2",style:{backgroundColor:l.colors.background.card,borderColor:l.colors.primary.electric},children:[i.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:`linear-gradient(135deg, ${l.colors.primary.electric} 0%, ${l.colors.accent.cyan} 100%)`}}),i.jsxs("div",{className:"relative p-6 lg:p-8",children:[i.jsxs("div",{className:"flex items-start justify-between gap-4 mb-4",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3",style:{backgroundColor:`${l.colors.primary.electric}15`,border:`1px solid ${l.colors.primary.electric}30`},children:[i.jsx(ro,{size:14,style:{color:l.colors.primary.electric}}),i.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",style:{color:l.colors.primary.electric},children:"Continue Learning"})]}),i.jsxs("p",{className:"text-xs font-semibold uppercase tracking-wider mb-2",style:{color:l.colors.text.muted},children:["Module ",e.moduleId," • Lesson ",t.id]}),i.jsx("h2",{className:"text-2xl lg:text-3xl font-bold mb-2",style:{color:l.colors.text.primary,letterSpacing:"-0.02em"},children:t.title}),i.jsx("p",{className:"text-base leading-relaxed max-w-2xl",style:{color:l.colors.text.secondary},children:e.narrative})]}),i.jsx("div",{className:"flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:scale-110",style:{backgroundColor:l.colors.primary.electric},children:i.jsx(mt,{size:20,style:{color:"white"}})})]}),i.jsxs("div",{className:"flex items-center gap-4 pt-4 border-t",style:{borderColor:l.colors.border.subtle},children:[i.jsx("div",{className:"flex-1",children:i.jsx("div",{className:"h-2 rounded-full overflow-hidden",style:{backgroundColor:`${l.colors.primary.electric}15`},children:i.jsx("div",{className:"h-full transition-all",style:{width:`${e.progress}%`,backgroundColor:l.colors.primary.electric}})})}),i.jsxs("p",{className:"text-sm font-semibold",style:{color:l.colors.text.muted},children:[e.completedLessons," / ",e.totalLessons," complete"]})]})]})]})}const Yc="eae_bookmarks";function $m(e){const[t,n]=b.useState([]),[o,s]=b.useState(!0);b.useEffect(()=>{if(!e){s(!1);return}const u=localStorage.getItem(`${Yc}_${e}`);n(u?JSON.parse(u):[]),s(!1)},[e]);const r=u=>{n(u),localStorage.setItem(`${Yc}_${e}`,JSON.stringify(u))};return{bookmarks:t,loading:o,toggleBookmark:async u=>{const d=t.find(m=>m.lesson_number===u);r(d?t.filter(m=>m.lesson_number!==u):[{id:`${e}-${u}`,user_id:e,lesson_number:u,created_at:new Date().toISOString()},...t])},isBookmarked:u=>t.some(d=>d.lesson_number===u)}}const Oy=["Learn what AI is, how it fits in technology history, and the evolution from programming to machine learning.","Understand how ChatGPT works, the autonomy ladder, and frameworks to evaluate any AI tool in your workflow.","Explore how AI moves from research labs to products, who controls what, and the business models driving development.","Discover when to use AI and when not to, which work to protect, and how to avoid the five most common AI traps.","Master contextual prompting frameworks, meta-prompting techniques, and build custom prompt libraries for your needs.","Learn systems thinking for building workflows around outcomes and creating playbooks that survive tool changes.","Identify which skills increase in value with AI and understand the competitive advantages AI cannot replicate.","Build systematic implementation strategies, enable team collaboration, and learn to measure real business impact."];function Uy(){var g;const{user:e}=Je(),{completions:t,isComplete:n,loading:o}=di(e==null?void 0:e.id,[]),{bookmarks:s,toggleBookmark:r}=$m(e==null?void 0:e.id),a=Um(t),c=Se.map((p,v)=>{const x=p.lessons.filter(y=>n(dn(p.id,y.id),"lesson")).length,A=x/p.lessons.length*100;return{moduleId:p.id,title:p.title,progress:A,completedLessons:x,totalLessons:p.lessons.length,narrative:Oy[v],lessons:p.lessons}}),u=c.find(p=>p.progress>0&&p.progress<100)||c[0],d=c.find(p=>p.progress<100),m=(g=d==null?void 0:d.lessons)==null?void 0:g.find(p=>!n(dn(d.moduleId,p.id),"lesson")),h=c.filter(p=>p.progress===100).length;return i.jsx("div",{className:"w-full min-h-screen overflow-y-auto",style:{backgroundColor:l.colors.background.base},children:i.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:i.jsxs("div",{className:"space-y-6",children:[i.jsx(By,{stats:{...a,modulesCompleted:h},currentModuleInfo:u}),d&&m&&i.jsx(Fy,{nextModule:d,nextLesson:m}),s.length>0&&i.jsxs("div",{className:"rounded-xl border p-5",style:{backgroundColor:l.colors.background.card,borderColor:l.colors.border.subtle},children:[i.jsxs("h3",{className:"text-sm font-bold mb-3 flex items-center gap-2",style:{color:l.colors.text.primary},children:[i.jsx(Sm,{size:14,style:{color:l.colors.accent.cyan}}),"Bookmarks"]}),i.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(p=>{const{moduleId:v,lessonId:x}=Gc(p.lesson_number),A=Se.find(f=>f.id===v),y=A==null?void 0:A.lessons.find(f=>f.id===x);return!A||!y?null:i.jsxs("div",{className:"group relative inline-flex items-center gap-2 px-3 py-2 rounded-lg border transition-all",style:{backgroundColor:l.colors.background.subtle,borderColor:l.colors.border.subtle},children:[i.jsxs(G,{to:`/modules/${v}/lessons/${x}`,className:"flex items-center gap-2",children:[i.jsxs("span",{className:"text-xs font-semibold",style:{color:l.colors.accent.cyan},children:["M",v,"L",x]}),i.jsx("span",{className:"text-xs font-medium",style:{color:l.colors.text.primary},children:y.title})]}),i.jsx("button",{onClick:()=>r(p.lesson_number),className:"ml-1 opacity-0 group-hover:opacity-100 transition-opacity",style:{color:l.colors.text.muted},title:"Remove bookmark",children:i.jsx(pt,{size:12})})]},p.id)})})]}),i.jsxs("div",{children:[i.jsx("h2",{className:"text-lg font-bold mb-4",style:{color:l.colors.text.primary,letterSpacing:"-0.02em"},children:"Modules & Lessons"}),i.jsx("div",{className:"space-y-2",children:c.map(p=>{const v=Array.from({length:p.totalLessons},(A,y)=>dn(p.moduleId,y+1)),x=(u==null?void 0:u.moduleId)===p.moduleId;return i.jsx(Dy,{module:p,lessons:v,isComplete:n,getModuleAndLesson:Gc,defaultOpen:x},p.moduleId)})})]})]})})})}const $y="/app".replace(/\/app$/,"")+"/",_y=[{id:"education",title:"AI Education",desc:"Your structured learning path. 44 lessons across 8 modules of hands-on AI strategy.",icon:ro,available:!0,route:"/progress"},{id:"strategy",title:"AI Strategy",desc:"Identify exactly where AI creates the most value in your business — before you spend a penny on implementation.",icon:ui,available:!1},{id:"solutions",title:"AI Solutions",desc:"Custom implementation support and AI tooling built around your team's actual workflows.",icon:Nm,available:!1},{id:"security",title:"AI Security",desc:"Risk frameworks and compliance guidance for responsible AI deployment.",icon:Lm,available:!1},{id:"skills",title:"Irreplaceable Skills",desc:"The human capabilities that grow more valuable as AI advances.",icon:xn,available:!1}];function Gy(){const{signOut:e,user:t}=Je(),n=Nt(),o=t!=null&&t.username?t.username.charAt(0).toUpperCase()+t.username.slice(1):"";return i.jsxs("div",{style:{minHeight:"100vh",background:"#faf8f5"},children:[i.jsx("nav",{style:{background:"rgba(250,248,245,0.92)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",borderBottom:"1px solid rgba(193,127,58,0.15)",position:"sticky",top:0,zIndex:20},children:i.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto",padding:"0 1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",height:"64px"},children:[i.jsxs("span",{style:{fontFamily:"'Playfair Display', Georgia, serif",fontSize:"1.35rem",fontWeight:700,color:"#1a1612",letterSpacing:"-0.01em"},children:["Energise ",i.jsx("span",{style:{color:"#c17f3a"},children:"AI"})]}),(t==null?void 0:t.email)&&i.jsx("span",{className:"hidden sm:block",style:{fontSize:"0.8rem",color:"#9a8a7a"},children:t.email})]})}),i.jsxs("main",{style:{maxWidth:"1100px",margin:"0 auto",padding:"3rem 1.5rem 5rem"},children:[i.jsxs("a",{href:$y,style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.85rem",color:"#6b5c4e",textDecoration:"none",fontWeight:500,marginBottom:"2rem"},onMouseEnter:s=>s.currentTarget.style.color="#c17f3a",onMouseLeave:s=>s.currentTarget.style.color="#6b5c4e",children:[i.jsx(Jt,{size:15})," Back to site"]}),i.jsxs("div",{style:{marginBottom:"2.5rem"},children:[i.jsx("h1",{style:{fontFamily:"'Playfair Display', Georgia, serif",fontSize:"clamp(1.75rem, 4vw, 2.5rem)",fontWeight:700,color:"#1a1612",letterSpacing:"-0.02em",marginBottom:"0.4rem"},children:o?`Welcome back, ${o}.`:"Welcome back."}),i.jsx("p",{style:{color:"#6b5c4e",fontSize:"1rem"},children:"Choose where to continue."})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(280px, 100%), 1fr))",gap:"1.25rem"},children:_y.map(s=>{const r=s.icon;return s.available?i.jsxs("button",{onClick:()=>n(s.route),style:{textAlign:"left",background:"#ffffff",border:"2px solid #c17f3a",borderRadius:"12px",padding:"1.75rem",cursor:"pointer",transition:"box-shadow 0.2s, transform 0.2s",boxShadow:"none"},onMouseEnter:a=>{a.currentTarget.style.boxShadow="0 8px 24px rgba(193,127,58,0.15)",a.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:a=>{a.currentTarget.style.boxShadow="none",a.currentTarget.style.transform="translateY(0)"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"},children:[i.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"10px",background:"rgba(193,127,58,0.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(r,{size:22,style:{color:"#c17f3a"}})}),i.jsx("span",{style:{fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#c17f3a",background:"rgba(193,127,58,0.1)",padding:"3px 10px",borderRadius:"20px"},children:"Available"})]}),i.jsx("h2",{style:{fontFamily:"'Playfair Display', Georgia, serif",fontSize:"1.3rem",fontWeight:700,color:"#1a1612",marginBottom:"0.5rem",letterSpacing:"-0.01em"},children:s.title}),i.jsx("p",{style:{fontSize:"0.875rem",color:"#6b5c4e",lineHeight:1.65,marginBottom:"1.25rem"},children:s.desc}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#c17f3a",fontSize:"0.875rem",fontWeight:600},children:["Enter ",i.jsx(mt,{size:15})]})]},s.id):i.jsxs("div",{style:{textAlign:"left",background:"#f4efe8",border:"2px solid #e8dfd4",borderRadius:"12px",padding:"1.75rem"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"},children:[i.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"10px",background:"#e8dfd4",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(r,{size:22,style:{color:"#b0a090"}})}),i.jsx("span",{style:{fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#b0a090",background:"#e8dfd4",padding:"3px 10px",borderRadius:"20px"},children:"Coming Soon"})]}),i.jsx("h2",{style:{fontFamily:"'Playfair Display', Georgia, serif",fontSize:"1.3rem",fontWeight:700,color:"#b0a090",marginBottom:"0.5rem",letterSpacing:"-0.01em"},children:s.title}),i.jsx("p",{style:{fontSize:"0.875rem",color:"#b0a090",lineHeight:1.65},children:s.desc})]},s.id)})})]})]})}function Mi({isOpen:e,onClose:t,title:n,children:o}){return e?i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-200",onClick:t,children:i.jsxs("div",{className:"rounded-lg shadow-2xl max-w-2xl w-full max-h-[80dvh] overflow-hidden border transition-all duration-200 transform",onClick:s=>s.stopPropagation(),style:{backgroundColor:l.colors.background.card,borderColor:l.colors.border.subtle,boxShadow:l.shadows.large},children:[i.jsxs("div",{className:"flex items-center justify-between px-4 py-4 sm:px-8 sm:py-6 border-b",style:{borderColor:l.colors.border.subtle,backgroundColor:l.colors.background.subtle},children:[i.jsx("h2",{className:"text-xl sm:text-2xl font-bold",style:{letterSpacing:"-0.02em",color:l.colors.text.primary},children:n}),i.jsx("button",{onClick:t,className:"p-2 rounded-md transition-all duration-200 hover:shadow-sm focus:outline-none focus:ring-2",style:{backgroundColor:"transparent",color:l.colors.text.muted},"aria-label":"Close modal",children:i.jsx(pt,{size:24,style:{color:l.colors.text.secondary}})})]}),i.jsx("div",{className:"p-4 sm:p-8 overflow-y-auto",style:{maxHeight:"calc(80dvh - 80px)"},children:i.jsx("div",{className:"prose prose-sm max-w-none leading-relaxed",style:{color:l.colors.text.secondary},children:o})})]})}):null}const Hy={"1-1":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/9fOCZEhpxVxfgJbH1hBP?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/pKasCe6O92v64AUoqQ2y?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h2 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: #1f2937;">Introduction to Artificial Intelligence and Its Impact</h2>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Video Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz introduces artificial intelligence (AI), explaining its definition, capabilities, and how it differs from human intelligence and historical technologies. The lesson sets the foundation for understanding AI's broad effects.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Insights</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>AI excels at pattern recognition, memory, calculations, and handling large data—but lacks general intelligence and human-level understanding.</li>
    <li>Humans still surpass AI in context, emotional intelligence, and moral judgment.</li>
    <li>Historically, new technologies (like calculators or tractors) replace old methods, making adaptation essential for everyone.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Recommendations</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Embrace and learn about AI to avoid being left behind.</li>
    <li>Focus on tasks where human strengths (creativity, context, values) shine.</li>
    <li>Complete the assigned practice task to reinforce these concepts.</li>
    <li>Stay mindful that technology adoption drives ongoing change.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">This video lesson provides an introduction to artificial intelligence (AI), explaining what AI is, its capabilities compared to humans, and the historical pattern of technology replacing old methods. It highlights AI's strengths in pattern recognition, memory, calculations, and language processing, while noting human superiority in understanding context, emotions, and moral judgments. The lesson emphasizes the importance of adapting to AI as a transformative technology that affects everyone and encourages learners to engage with the course to stay relevant.</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Action Items</h3>
  <ul style="margin-left: 1.5rem; list-style-type: disc;">
    <li>Understand the fundamental differences between AI and human intelligence.</li>
    <li>Recognize the historical trend of new technology replacing old methods and how AI fits this pattern.</li>
    <li>Engage with the course to learn how to effectively use AI and avoid being left behind</li>
  </ul>
</div>`,activity:`<ol>
<li>Pick one task you need to do today</li>
<li>Paste it into ChatGPT or Claude</li>
<li>Use the output for your work</li>
</ol>`},"1-2":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/GJhn0kf4nXwLwwbUEW1a?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/jBIIrLjgijfZ161XGTjM?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h2 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: #1f2937;">The Evolution of Artificial Intelligence Explained</h2>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview of AI Development</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz introduces the lesson by framing AI as a technology developed to replicate human intelligence.</li>
    <li>The historical journey starts from the fundamental question, "Can machines think?" posed by Alan Turing in 1950.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Advances and Core Concepts</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Rule-based AI was the first approach, eventually coined "artificial intelligence" by John McCarthy in 1956.</li>
    <li>The perceptron—a model of an artificial neuron—was invented in 1957, followed by early chatbots like Eliza (1966), which exposed the limits of rule-based systems.</li>
    <li>Machine learning emerged to enable AI to learn from data, with supervised, unsupervised, and reinforcement learning paradigms.</li>
    <li>The 1986 breakthrough of the backpropagation algorithm allowed neural networks to learn from mistakes, moving AI beyond explicit programming.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Takeaways and Recommendations</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>View AI as a tangible technology to better grasp its potential.</li>
    <li>Remember that initial rule-based approaches failed due to complexity and lack of adaptability.</li>
    <li>Embrace machine learning and neural networks for ongoing progress in artificial intelligence.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">This lesson provides an overview of the development of artificial intelligence (AI) from its inception. It covers key milestones including the Turing Test, rule-based AI, the invention of the perceptron, early chatbots like Eliza, the limitations of rule-based systems leading to the AI winter, and the emergence of machine learning with supervised, unsupervised, and reinforcement learning. The breakthrough of the backpropagation algorithm in 1986, which enabled neural networks to learn from mistakes, is highlighted as a pivotal advancement in AI technology.</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Understand the historical milestones in AI development including the Turing Test and rule-based AI.</li>
    <li>Learn the three types of machine learning: supervised, unsupervised, and reinforcement learning.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Recognize the significance of the backpropagation algorithm in enabling neural networks to learn from mistakes</p>
</div>`,activity:`<ol>
<li>Go to ChatGPT or Claude</li>
<li>Use this prompt:</li>
</ol>

<strong>"Create a visual timeline showing the evolution of AI with these key events:
<ul>
<li>1950: Turing Test proposed</li>
<li>1956: 'Artificial Intelligence' term coined</li>
<li>1957: Perceptron invented</li>
<li>1966: ELIZA chatbot created</li>
<li>1970s: AI Winter begins</li>
<li>1986: Backpropagation algorithm developed</li>
</ul>

<p>Format as a clear, visual timeline I can save and build on later."</strong></p>
<ol>
<li>Save it - you'll add to this in next lessons</li>
</ol>`},"1-3":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/ARCT3uDknz5BokMRoJJN?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/QhcKxv9iuR3iWEk75fBa?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h2 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: #1f2937;">The Evolution of AI: From Deep Learning to Transformers</h2>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview of AI Progression</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz traces AI history from the Turing Test and rule-based systems to modern breakthroughs.</li>
    <li>Early limits: Rule-based AI was too rigid; basic machine learning had modest pattern recognition but hit a ceiling.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Breakthroughs in Deep Learning and Transformers</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Deep learning gave AI ‘bigger brains’ using stacked neural networks for complex pattern recognition (e.g., face and voice recognition, translation).</li>
    <li>The 2017 Transformer model let AI remember context like a human, enabling systems like ChatGPT to learn and understand language at scale.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Recommendations and Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Focus on patterns: AI learns from clear patterns; more data and depth improves results.</li>
    <li>Transformers solved AI’s ‘memory problem,’ revolutionizing understanding and conversation capacity.</li>
    <li>Practice and apply: Continue with assigned tasks to reinforce understanding.</li>
    <li>This video explains the evolution of AI technology, focusing on deep learning and the breakthrough of Transformers in 2017. It describes how deep learning uses multiple neural network layers to recognize complex patterns, and how Transformers solved the AI memory problem, enabling AI to understand context and language more effectively, as seen in models like ChatGPT.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Edit</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Understand the concept of deep learning and its use of multiple neural network layers.</li>
    <li>Recognize the importance of the Transformer architecture in solving AI's memory problem.</li>
    <li>Appreciate how AI models like ChatGPT leverage these advancements to understand and generate human language effectively.</li>
  </ul>
</div>`,activity:`<ol>
<li>Open your timeline from Lesson 2</li>
<li>Use this prompt:</li>
</ol>

<strong>"Add these new events to my existing timeline:
<ul>
<li>2010: Deep Learning revolution (AI using multiple layers for complex patterns)</li>
<li>2017: Transformers architecture (solved the memory problem in AI)</li>
<li>2020s: ChatGPT era (AI that understands full conversation context)</li>
</ul>

<p>Keep the same visual format and integrate these seamlessly with the previous events."</strong></p>
<ol>
<li>Save the updated version - you'll add Lesson 4 events next</li>
</ol>`},"1-4":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/jDyUnrTKVe9bZtenrvWT?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/j8k1YlqqouTJqVP0z2U6?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Understanding Generative AI: How Content Is Created</h3>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview of AI Progression</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains how AI has evolved from rule-based approaches to generative models capable of creating human-like text, images, videos, and code.</li>
    <li>Different AI models are trained for specialized tasks, similar to teaching children various skills.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">How Generative AI Works</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Generative AI relies on compression and generalization to create new content; it predicts and generates patterns, not limited to mimicking but also producing original combinations.</li>
    <li>Advances in datification, computational power, research investment, and breakthroughs like deep learning have fueled recent rapid growth in AI capabilities.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>AI operates through pattern prediction, not emotion or true understanding.</li>
    <li>Recent AI progress is due to abundant data, efficient computation, increased funding, and key tech breakthroughs.</li>
    <li>Main goal: Build intelligent machines to act human-like, regardless of the specific AI branch.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">This video lesson explains how AI generates new content through pattern recognition and prediction, focusing on the evolution from rule-based AI to generative AI. It uses the metaphor of teaching babies different skills to illustrate how AI models are trained for specialized tasks and discusses the recent explosion of AI due to data availability, computational power, funding, and technological breakthroughs. The video also covers the concepts of compression, generalization, and generation in AI content creation, and highlights the distinction between AI's pattern prediction and human understanding or emotions.</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Understand that generative AI works by compressing data, generalizing patterns, and generating new content based on predictions.</li>
    <li>Recognize the factors contributing to the recent rapid advancement of AI: data availability, computational power, funding, and technological breakthroughs.</li>
    <li>Remember that AI is fundamentally pattern recognition and prediction, without true understanding or emotions, and can make mistakes.</li>
  </ul>
</div>`,activity:`<ol>
<li>Use this prompt to complete your timeline:</li>
</ol>

<strong>"Add these final events to my timeline:
<ul>
<li>2022-2024: LLMs & Generative AI (AI predicts patterns through compression and generalization)</li>
<li>2023: Multi-modal AI (one AI model handles text, images, and more)</li>
<li>2024: AI Explosion (massive data + computational power + investment + breakthroughs)</li>
</ul>

<p>Keep the visual timeline format consistent with all previous events."</strong></p>
<ol>
<li>Save the complete timeline as an image</li>
<li>Upload the image and use this prompt:</li>
</ol>

<strong>"Convert this AI evolution timeline into a clear written summary for someone with no technical background. Explain what each major phase meant and why it mattered."</strong>
<ol>
<li>Use this summary for your work</li>
</ol>`},"2-1":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/KbIKpTs5iKutZja0V8CY?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/6GkqwFp3EqN5358qMWJ7?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">How ChatGPT Processes Language and Responds</h3>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview of AI Advancement</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz describes AI’s rapid progress from voice command tools to generative models that create original content and now act as personal assistants.</li>
    <li>By 2023, AI shifted from simple predictions to helping users accomplish full tasks, resembling a highly capable assistant.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">How ChatGPT Understands and Replies</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>When users type messages, ChatGPT breaks input into “tokens” (parts of words), converting these into numbers it can process—AI never understands language directly.</li>
    <li>ChatGPT uses a “context window” (short-term memory) to include recent conversation history, like a human recalling previous remarks.</li>
    <li>It predicts responses token by token, choosing the most probable next part, and learns when to stop based on training data.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Essential Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>AI processes words as tokens and numbers, finding patterns—there is no real understanding or emotion.</li>
    <li>ChatGPT keeps context short-term; longer chats may cause earlier details to be lost.</li>
    <li>The system operates by predicting, not truly comprehending, making responses mathematical rather than thoughtful.</li>
    <li>This video explains the evolution of AI from simple analysis and categorization to advanced generative AI capable of creating content and acting as a personal assistant. It details how AI like ChatGPT processes language by converting words into tokens, using a context window as short-term memory, and predicting the next token to generate coherent responses. The video emphasizes that AI operates purely on pattern recognition and probability without true understanding or feelings.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Understand that AI converts language into tokens and processes numbers, not words.</li>
    <li>Recognize the role of the context window as AI's short-term memory in maintaining conversation coherence.</li>
    <li>Know that AI generates responses by predicting the next most likely token based on patterns learned from training data.</li>
  </ul>
</div>`,activity:`<ol>
<li>Pick any project you need to start (document, plan, analysis, proposal)</li>
<li>Use this prompt:</li>
</ol>

<strong>"Create a structured first draft for [YOUR PROJECT TYPE - e.g., project proposal, essay, business plan, report].
<p>Include:</p>
<ul>
<li>[KEY REQUIREMENT 1]</li>
<li>[KEY REQUIREMENT 2]</li>
<li>[KEY REQUIREMENT 3]</li>
</ul>

<p>Provide a complete framework with baseline content I can refine."</strong></p>
<ol>
<li>Use the structured draft as your starting point</li>
<li>Refine with your expertise, judgment, and specific details</li>
</ol>`},"2-2":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/cnSJUrJIAv3PjkTqUuej?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/WsWQyzCKSw08aNCrOT8d?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h2 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: #1f2937;">Understanding AI Training vs. Usage</h2>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz clarifies one of the most misunderstood concepts about AI: the difference between training and using AI models.</li>
    <li>Explains that training is a one-time, resource-intensive process, while usage is quick and ongoing.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Main Concepts</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Training AI is like learning to ride a bike: difficult, slow, costly, and happens only once.</li>
    <li>Using AI is like riding a bike after learning: easy, automatic, utilizing what has been trained.</li>
    <li>ChatGPT does not learn from your conversations; it uses short-term memory for a session but forgets after each chat.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>AI learns during initial training, not while chatting with users.</li>
    <li>Conversations are temporary and do not update the AI’s core knowledge.</li>
    <li>Misconception: AI remembers everything you say—Shawaiz explains this is false.</li>
    <li>The video explains the distinction between AI training and AI usage. Training is a costly, time-consuming process where the AI learns from vast amounts of data, while usage refers to interacting with the AI, which does not learn or update its knowledge during conversations. The video uses analogies like learning to ride a bike or drive a car to clarify that AI does not learn from individual chats but operates based on its pre-trained knowledge.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Recognize that AI training is a one-time, resource-intensive process.</li>
    <li>Understand that AI does not learn or remember individual conversations during usage.</li>
    <li>Use AI interactions knowing they rely on pre-trained knowledge, not ongoing learning.</li>
  </ul>
</div>`,activity:`<ol>
<li>Pick a project needing both general knowledge and your specific context</li>
<li>Use this prompt structure:</li>
</ol>

<strong>"Create [WHAT YOU NEED] using this specific information:
</strong>Context:<strong>
<ul>
<li>[RELEVANT DETAIL 1]</li>
<li>[RELEVANT DETAIL 2]</li>
<li>[RELEVANT DETAIL 3]</li>
</ul>

</strong>Requirements:<strong>
<ul>
<li>[SPECIFIC REQUIREMENT 1]</li>
<li>[SPECIFIC REQUIREMENT 2]</li>
</ul>

<p>Combine your general knowledge with my specific context."</strong></p>
<ol>
<li>Use the output that integrates both general patterns and your specific information</li>
</ol>`},"2-3":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/72Dvpp8Ri58d4HabtatD?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/oArCup55uTp4xQMreqQ8?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h2 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: #1f2937;">Understanding Base and Fine-Tuned AI Models</h2>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Concepts Explained</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains the distinction between base models (like GPT) and fine-tuned assistant models (like ChatGPT), using practical analogies in cooking and jobs.</li>
    <li>The base model learns language patterns during large-scale pre-training but lacks context for helpfulness; fine-tuning turns it into a practical assistant.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Main Insights from Shawaiz</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Fine-tuned models, such as ChatGPT, are akin to a finished cake—created by adjusting the base model through human feedback until responses are helpful.</li>
    <li>Reinforcement learning from human feedback is the central process for fine-tuning, with humans ranking answers and guiding improvement.</li>
    <li>Only researchers need the base model (the "ingredients"); users want the helpful assistant (the "cake").</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Practical Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Remember: GPT = base model; ChatGPT = fine-tuned assistant.</li>
    <li>Fine-tuning is what enables AI to provide safe and useful answers.</li>
    <li>Reinforcement learning and feedback are critical steps for creating effective assistants.</li>
    <li>As of 2023, models like ChatGPT are typical assistants, but future lessons will cover upcoming capabilities.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">This video explains the difference between base AI models and fine-tuned models, using the analogy of baking a cake. It describes how base models are like having all the raw ingredients and knowledge but not being job-ready, while fine-tuned models are like a finished cake, trained to be helpful and practical through reinforcement learning from human feedback. The video also clarifies that ChatGPT is a fine-tuned assistant model built on top of the base GPT model, designed to provide useful and safe responses.</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Understand the distinction between base AI models and fine-tuned models.</li>
    <li>Recognize the importance of reinforcement learning from human feedback in fine-tuning AI.</li>
    <li>Know that ChatGPT is a fine-tuned assistant model built on the base GPT model.</li>
  </ul>
</div>`,activity:`<ol>
<li>Pick a task you need help with</li>
<li>Start with: "You are a [EXPERT TYPE]"</li>
<li>Get the output - if not quite right, refine the role</li>
<li>Test variations:</li>
</ol>
<ul>
<li>Make role more specific</li>
<li>Add context about audience</li>
<li>Specify expertise area</li>
</ul>
<ol>
<li>Use the best version</li>
</ol>

<strong>Example progression:</strong>
<ul>
<li>Try 1: "You are a writer" → too generic</li>
<li>Try 2: "You are a technical writer" → better</li>
<li>Try 3: "You are a technical writer explaining complex topics to beginners" → exactly what you need</li>
</ul>`},"2-4":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/PXuIZ086QyStILVLrnTN?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/yNav0UIRZYpXr14AjTGv?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Understanding AI’s Three Autonomy Levels</h3>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview of AI Development</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz traces AI's evolution from the Turing test to modern assistant and agent models.</li>
    <li>Compares AI's growth to human development, describing increasing responsibility and independence.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">The Three Levels of AI Autonomy</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Level 1: LLMs (e.g. ChatGPT) – Like a child; learns patterns and responds but needs instruction for all tasks, with no memory between uses.</li>
    <li>Level 2: Workflows – Like a teenager; can take sequential actions when set up, follows explicit instructions, has limited decision-making.</li>
    <li>Level 3: Agents – Like an adult; recognizes patterns, decides and acts to complete complex tasks, needs less guidance but supervision is still important.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Recommendations and Tips</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Evaluate AI by: What patterns did it learn? Can it take action? What does it remember, and for how long?</li>
    <li>Use the autonomy ladder to assess current AI capability.</li>
    <li>Recognize that Level 3 agents can act but require oversight.</li>
    <li>Continue using simpler tools when appropriate.</li>
    <li>Next, explore how agents work in detail.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">This video explains the three levels of AI autonomy, comparing AI development to human growth from a child to an adult. It describes level one as language models like ChatGPT that generate responses but require human action, level two as workflows that can perform multiple steps but need human setup, and level three as agents that can independently make decisions and take actions. The video also introduces three evaluation questions to assess AI's capabilities: the patterns it learned from, whether it can take action, and its memory duration.</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Identify which level of autonomy an AI system operates at using the three evaluation questions.</li>
    <li>Recognize the progression of AI capabilities from language models to autonomous agents.</li>
    <li>Apply the autonomy ladder concept to better understand AI's current and future potential.</li>
  </ul>
</div>`,activity:`<ol>
<li>Pick a complex task you need to do</li>
<li>Use this framework:</li>
</ol>

<strong>"Break down this task into clear steps: [YOUR COMPLEX TASK]
<p>For each step, help me identify:</p>
<ol>
<li>What exactly needs to happen</li>
<li>Whether it's mechanical or requires judgment</li>
<li>What leverage could apply (AI, template, delegation, automation, or personal execution)</li>
</ol>

<p>Provide 5-10 numbered steps."</strong></p>
<ol>
<li>Review the breakdown</li>
<li>Mark each step: AI / Template / Delegate / Automate / Do yourself</li>
<li>Execute following your leverage map</li>
</ol>`},"2-5":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/bdifkbnMC4h3WEKEF9qq?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/Z1vKIqB2mUGibJ6mjoJX?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h2 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: #1f2937;">Understanding AI Agent Autonomy and Architecture</h2>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains the five core components required for AI agents to function: brain, memory, tools, prompt, and knowledge. He highlights how these distinguish agents from standard AI models.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Insights</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>The "brain" enables pattern recognition and decision-making; memory stores information long-term and across tasks.</li>
    <li>Tools let agents interact with systems (e.g., email, calendars), while prompts define their roles and knowledge provides essential context or data.</li>
    <li>A practical example shows how an agent adapts plans and updates tasks, showcasing true autonomy compared to LLMs and workflows.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Ensure AI agents are provided with all five components for independent operation.</li>
    <li>Always supervise agents due to privacy and security concerns.</li>
    <li>Use the five evaluation questions to assess any AI system’s autonomy.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">This video explains the architecture of AI agents, detailing the five essential components they need to function: a brain (pattern recognition and AI core), memory (short-term and long-term), tools (capabilities to perform tasks), a prompt (job description), and knowledge (specific information beyond training data). It illustrates how agents operate through a homework management example, emphasizing their ability to adapt to changes and the importance of privacy and supervision. The video also discusses the autonomy levels of AI systems, distinguishing between LLMs, workflows, and agents based on decision-making capabilities.</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Ensure AI agents have the five core components: brain, memory, tools, prompt, and knowledge.</li>
    <li>Supervise AI agents to maintain privacy and prevent misuse of sensitive information.</li>
    <li>Use the five evaluation questions to determine the autonomy level of any AI system.</li>
  </ul>
</div>`,activity:`<ol>
<li>Pick something you do regularly where you have specific knowledge others don't</li>
<li>Document what only you know:</li>
</ol>

<strong>"For this task: [YOUR TASK]
<p>Help me articulate my specific knowledge by asking about:</p>
<ul>
<li>My preferences and quality standards</li>
<li>Specific requirements for my situation</li>
<li>My methods or approaches that work</li>
<li>Things I've learned from experience</li>
<li>Common mistakes I avoid</li>
</ul>

<p>Ask me questions to extract this knowledge."</strong></p>
<ol>
<li>Answer AI's questions</li>
<li>Use the documented knowledge with AI for your task</li>
<li>Save the knowledge for reuse</li>
</ol>`},"2-6":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/kwDsCgZNYbM0uLJnYhHo?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/OmAsKZtZRrGKyZHskGrZ?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">5 Key Questions to Evaluate Any AI Tool</h3>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview of the Framework</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz shares five essential questions to assess any AI system’s capabilities, use cases, and trustworthiness.</li>
    <li>Understanding these questions provides clarity on strengths, weaknesses, and best usage practices.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">The Five Evaluation Questions</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>What patterns did the AI learn from?</li>
    <li>Is it generating content or taking actions?</li>
    <li>What does it remember, and for how long?</li>
    <li>What tools does it have access to?</li>
    <li>Who makes the decisions—you or the AI?</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Check an AI’s learning sources and memory to gauge strength and limitations.</li>
    <li>Match supervision to the AI’s autonomy—higher autonomy needs more oversight.</li>
    <li>Review tool access and always verify outputs before acting on important decisions.</li>
    <li>This video presents a framework of five essential questions to evaluate any AI tool, covering its learning patterns, action capabilities, memory, tool access, and decision-making authority. Understanding these questions helps users grasp AI strengths, limitations, interaction methods, and trust levels. The video also reviews foundational AI concepts such as tokens, training, fine-tuning, and levels of AI autonomy, preparing viewers to effectively assess and utilize AI systems.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Use the five-question framework to assess AI tools' capabilities and limitations.</li>
    <li>Determine the AI's level of autonomy to understand interaction and supervision needs.</li>
    <li>Evaluate the AI's decision-making authority to establish appropriate trust and responsibility levels.</li>
  </ul>
</div>`,activity:`<ol>
<li>Pick a specific task you need AI for</li>
<li>Search systematically:</li>
</ol>

<strong>Search in these locations:</strong>
<ul>
<li><strong>AI Directories:</strong> Product Hunt, There's An AI For That, Futurepedia, AI Tool Guru</li>
<li><strong>Communities:</strong> Reddit (r/ArtificialIntelligence, r/ChatGPT, task-specific subreddits)</li>
<li><strong>Social:</strong> Twitter/X (#AITools, #AI + your task), LinkedIn AI communities</li>
<li><strong>Reviews:</strong> YouTube "[your task] AI tools 2025"</li>
</ul>

<ol>
<li>Document what you find:</li>
</ol>
<ul>
<li>Tool names</li>
<li>Key features</li>
<li>Pricing/access</li>
<li>User feedback</li>
</ul>
<ol>
<li>Keep this research for when you need a solution</li>
</ol>`},"3-1":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/CIX2fzsnZqJhabo1CEfQ?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/Jby6fi7UDJMDwcVJfPmK?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">From AI Theory to Everyday Products</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Shawaiz Explains the AI to Product Pipeline</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Shawaiz outlines how AI theory becomes practical tools via a clear, four-step process.</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">The process uses a restaurant analogy: models are the kitchen, APIs are waiters, and end-users are customers.</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">The AI Pyramid Structure</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Few companies develop core AI models (the "chefs") like OpenAI, Google, Meta.</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Hundreds of companies use these models (via APIs) to build diverse products (ChatGPT, Grammarly, Notion).</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Millions of users ultimately interact with these finished products, not the underlying models.</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Takeaways and Actions</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Remember the pyramid: a small number of model makers, many product builders, millions of users.</li>
    <li>APIs make powerful AI accessible and user-friendly for non-technical people.</li>
    <li>The wide range of AI products results from many builders adapting a few core models to different needs.</li>
    <li>This video explains the journey of AI from theoretical models to practical products accessible to users. It describes the process of building AI models by companies, making them accessible through APIs, and how various products use these APIs to create diverse AI applications. The video uses a restaurant analogy to illustrate the AI pyramid, where a few model makers power many product builders, who in turn serve millions of users.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Understand the four-step process from AI theory to product usage: model building, API access, product development, and user interaction.</li>
    <li>Recognize the role of APIs as intermediaries that make complex AI models accessible to various products.</li>
    <li>Use the AI pyramid metaphor to comprehend why many AI products exist, powered by a few underlying AI models.</li>
  </ul>
</div>`,activity:`<p>Pick one real decision you're facing this week (work, school, business, life - anything with real consequences). Use AI to think it through systematically.</p>
<strong>Use this decision clarity prompt:</strong>
<strong>"I'm facing a decision and need help thinking through it clearly.
</strong>The decision I'm making:<strong>
<p>[Describe specifically what you're choosing between - be concrete]</p>
</strong>What I'm trying to achieve:<strong>
<p>[Your goal - what does success look like?]</p>
</strong>My constraints:<strong>
<p>[Time, money, resources, skills, other limitations]</p>
</strong>What worries me:<strong>
<p>[Risks, uncertainties, things that could go wrong]</p>
</strong>Information I have:<strong>
<p>[What you know - data, past experience, context]</p>
</strong>Information I'm missing:<strong>
<p>[What you wish you knew but don't]</p>
<p>Help me make this decision by:</p>
<ol>
<li></strong>Clarifying the real question<strong> - Restate my decision more clearly if I'm framing it wrong</li>
</ol>

<ol>
<li></strong>Generating options<strong> - Give me 5 different ways I could approach this, including options I haven't considered</li>
</ol>

<ol>
<li></strong>Analyzing trade-offs<strong> - For each option, show:</li>
</ol>
<ul>
<li>What I gain</li>
<li>What I give up</li>
<li>Hidden costs or risks</li>
<li>Second-order effects (what happens after the immediate result)</li>
</ul>

<ol>
<li></strong>Stress-testing my thinking<strong> - Where am I:</li>
</ol>
<ul>
<li>Making assumptions that might be wrong?</li>
<li>Overlooking important factors?</li>
<li>Being influenced by bias (recency, confirmation, sunk cost)?</li>
<li>Optimizing for the wrong thing?</li>
</ul>

<ol>
<li></strong>Identifying decision criteria<strong> - What factors should actually drive this choice? Rank them by importance.</li>
</ol>

<ol>
<li></strong>Red-teaming<strong> - Argue against my current leading option. What's the strongest case for NOT doing what I'm leaning toward?</li>
</ol>

<ol>
<li></strong>Recommending next steps<strong> - Don't tell me what to decide. Tell me:</li>
</ol>
<ul>
<li>What information would most change this decision?</li>
<li>What small test could I run to learn more?</li>
<li>What questions should I ask myself or others?</li>
<li>When should I actually make this decision (now vs later)?</li>
</ul>

<p>Present this as a structured analysis, not a conversation. I need clarity, not endless back-and-forth."</strong></p>`},"3-2":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/mA55FXqIiAbBErJ2uq1B?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/QOLcno6dh3wBeFrgZkSa?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">AI Product Framework Explained: Four Key Types</h3>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview: Understanding AI Tools</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz introduces a simple framework to classify AI products by two questions: What can it do (generalist vs. specialist)? Where does it live (stand-alone vs. integrated)?</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Main Product Categories</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Generalist stand-alone: Versatile tools (e.g., ChatGPT) for varied needs.</li>
    <li>Specialist stand-alone: Focused tools excelling at one task (e.g., Midjourney for images).</li>
    <li>Generalist integrated: Broad AI built into existing apps (e.g., Microsoft Co-Pilot).</li>
    <li>Specialist integrated: Specific AI features within tools (e.g., Grammarly in writing platforms).</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>When evaluating an AI tool, ask: Is it generalist or specialist? Is it stand-alone or integrated?</li>
    <li>Use this framework to quickly understand any AI product's purpose.</li>
    <li>Categorize tools to choose the right AI for your specific needs.</li>
    <li>This video explains a product framework for understanding AI tools and products by categorizing them based on two key questions: how broad their capabilities are (generalist vs specialist) and where they live (stand-alone vs integrated). It introduces four categories of AI products with car analogies to illustrate their use cases and effectiveness. The video concludes by mentioning an upcoming lesson on the level of control users have over AI tools.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Use the two-question framework to categorize AI tools by capability breadth and integration.</li>
    <li>Identify whether an AI product is generalist or specialist to determine its best use case.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Determine if an AI tool is stand-alone or integrated to understand how it fits into existing workflows</p>
</div>`,activity:`<p>Upload your actual work documents to an AI tool, then ask it questions only YOUR knowledge can answer. Experience the difference.</p>
<strong>Step-by-step:</strong>
<ol>
<li><strong>Pick 3-5 documents from your real work/studies:</strong></li>
</ol>
<ul>
<li>Reports, notes, policies, research, meeting notes, project docs</li>
<li>PDFs, Word docs, text files, slides - anything with information you reference regularly</li>
</ul>

<ol>
<li><strong>Choose your RAG tool</strong> (pick what's easiest):</li>
</ol>
<ul>
<li><strong>Claude Projects</strong> (best) - Create new project, upload files</li>
<li><strong>ChatGPT</strong> - Upload files in conversation</li>
<li><strong>NotebookLM</strong> (free, Google) - Upload and organize sources</li>
<li><strong>Perplexity Spaces</strong> - Upload to create searchable knowledge base</li>
</ul>

<ol>
<li><strong>Upload your documents</strong> to the tool (5 minutes max)</li>
</ol>

<ol>
<li><strong>Use this comprehensive RAG testing prompt:</strong></li>
</ol>

<strong>"I've uploaded documents containing my specific knowledge/work. I want to test how well you can work with MY information versus generic knowledge.
</strong>My uploaded documents contain:<strong>
<p>[Brief description - e.g. "Q3 project meeting notes", "Course lecture materials for Biology", "Client contract templates and past proposals"]</p>
</strong>What I want to extract from these documents:<strong>
<p>[Your goal - e.g. "Find all action items", "Understand key concepts for exam", "Reference successful proposal language"]</p>
<p>Test your retrieval and reasoning over MY documents by:</p>
</strong>1. Document Summary:<strong>
<ul>
<li>List all documents you can access</li>
<li>Briefly describe what each contains</li>
<li>Identify the most important/relevant ones for my goal</li>
</ul>

</strong>2. Specific Extraction:<strong>
<ul>
<li>[Insert your specific question - examples below]</li>
<li>Cite exactly where you found each piece of information (document name, section, page if available)</li>
<li>If information conflicts across documents, show me both versions</li>
</ul>

</strong>3. Cross-Document Analysis:<strong>
<ul>
<li>What patterns or themes appear across multiple documents?</li>
<li>Are there any contradictions or inconsistencies I should know about?</li>
<li>What's missing that I'd expect to find?</li>
</ul>

</strong>4. Actionable Synthesis:<strong>
<ul>
<li>Based ONLY on these documents, what are the key takeaways for [my specific need]?</li>
<li>What questions do these documents NOT answer that I might need to address separately?</li>
</ul>

</strong>Example specific questions to insert in step 2:<strong>
<ul>
<li>"Summarize all decisions made in [specific meeting/document]"</li>
<li>"Extract all action items assigned to [person/team]"</li>
<li>"What's our established position on [topic] based on these materials?"</li>
<li>"Compare the approach in [document A] versus [document B]"</li>
<li>"Find all mentions of [concept/term] and explain how it's used"</li>
<li>"What were the main concerns or risks identified about [topic]?"</li>
<li>"Pull all relevant examples or case studies related to [subject]"</li>
</ul>

<p>Always cite your sources. I need to verify everything against the original documents."</strong></p>
<ol>
<li><strong>Compare results:</strong></li>
</ol>
<ul>
<li>Ask same question to regular AI (without documents)</li>
<li>Notice: Regular AI gives generic answer or says "I don't have access..."</li>
<li>Your RAG tool gives specific answer with citations from YOUR documents</li>
<li>Experience the difference</li>
</ul>`},"3-3":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/aUirEIIY1IV60OAAf4j7?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/WWQIw7ziSFrVsvqwUhz9?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Understanding Control Levels in AI Tools</h3>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview of the Control Spectrum</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz introduces four levels of user control in AI tools, from full provider control to full user control.</li>
    <li>Each level is illustrated with a car analogy for clarity.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Breakdown of the Four Levels</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Level 1: Provider controls everything (like taking a taxi); easiest to use, minimal customization.</li>
    <li>Level 2: User can adjust settings (like renting a car); some personalization, but main controls stay with the provider.</li>
    <li>Level 3: User builds on provider's platform (like assembling a car kit); high customization, requires technical skill.</li>
    <li>Level 4: User controls everything (like owning a car); full privacy and customization, but demands advanced knowledge and maintenance.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Takeaways & Recommendations</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Start with simple AI products, then increase control as your needs and skills grow.</li>
    <li>Assess your technical abilities before advancing to higher control levels.</li>
    <li>Choose the control level that best fits your privacy needs, skills, and goals.</li>
    <li>The video explains the different levels of control users have over AI tools and products, ranging from the AI controlling everything to the user having full control. It uses car analogies to illustrate each level, highlighting the advantages and disadvantages of each control level. The video also discusses the progression users can make from simple AI tools to fully customized AI solutions, emphasizing the balance between ease of use and technical knowledge required.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Recognize the four levels of control in AI products from full AI control to full user control.</li>
    <li>Evaluate which level of AI control suits your needs based on your technical knowledge and customization requirements.</li>
    <li>Consider progressing through levels as your familiarity and needs with AI tools evolve.</li>
  </ul>
</div>`,activity:`<p>Create a simple AI governance framework for yourself or your team - the foundation you'll expand as you scale usage.</p>
<strong>Use this governance foundation prompt:</strong>
<strong>"I need to create basic AI governance guidelines for [myself/my team/my organization].
</strong>Context:<strong>
<ul>
<li></strong>Who will use AI:<strong> [Role/department/team description]</li>
<li></strong>What they'll use it for:<strong> [Specific tasks and workflows]</li>
<li></strong>Sensitive areas:<strong> [What data, decisions, or content involve risk]</li>
<li></strong>Current AI tools:<strong> [What's already being used, if any]</li>
<li></strong>Biggest concerns:<strong> [Privacy, accuracy, bias, job security, other worries]</li>
</ul>

<p>Create a practical AI governance framework with these components:</p>
</strong>1. Usage Guidelines - When TO Use AI:<strong>
<ul>
<li>Create a simple checklist of tasks/situations where AI use is:</li>
<li>✅ Encouraged (high value, low risk)</li>
<li>⚠️ Allowed with caution (useful but requires verification)</li>
<li>❌ Prohibited (too risky, regulated, or sensitive)</li>
</ul>

</strong>2. Usage Guidelines - When NOT to Use AI:<strong>
<ul>
<li>List specific situations where AI should NOT be used</li>
<li>Explain WHY for each (helps people understand, not just follow rules)</li>
<li>Include consequences of violation</li>
</ul>

</strong>3. Quality Checks:<strong>
<ul>
<li>For each AI use case, define:</li>
<li>What "good output" looks like (specific criteria)</li>
<li>Required verification steps before using AI output</li>
<li>Who reviews or approves (if needed)</li>
<li>How to handle mistakes or hallucinations</li>
</ul>

</strong>4. Data Protection:<strong>
<ul>
<li>What information can/cannot be input into AI tools?</li>
<li>How to handle:</li>
<li>Customer data</li>
<li>Employee information</li>
<li>Financial data</li>
<li>Confidential/proprietary information</li>
<li>Regulated content (GDPR, HIPAA, etc. if applicable)</li>
</ul>

</strong>5. Accountability:<strong>
<ul>
<li>Who is responsible when AI makes mistakes?</li>
<li>How to report AI errors or concerns</li>
<li>Process for reviewing AI decisions</li>
<li>Who has final say when AI disagrees with humans?</li>
</ul>

</strong>6. Training Requirements:<strong>
<ul>
<li>What must people know before using AI for work?</li>
<li>How will they learn safe, effective usage?</li>
<li>Who can answer questions about AI use?</li>
</ul>

</strong>7. Evaluation Metrics:<strong>
<ul>
<li>How will we measure if AI is helping or hurting?</li>
<li>Time saved</li>
<li>Quality maintained/improved</li>
<li>Errors caught</li>
<li>User satisfaction</li>
<li>Specific KPIs for our use cases</li>
</ul>

</strong>8. Review Schedule:<strong>
<ul>
<li>How often do we review and update these guidelines?</li>
<li>Who leads the review?</li>
<li>What triggers an emergency review (incidents, new tools, policy changes)?</li>
</ul>

<p>Make this:</p>
<ul>
<li>Practical (people will actually follow it)</li>
<li>Specific (clear yes/no decisions, not vague principles)</li>
<li>Expandable (foundation we build on as we learn)</li>
<li>Enforcement-ready (clear consequences and accountability)</li>
</ul>

<p>Format as a simple document with sections, checklists, and decision trees where helpful."</strong></p>`},"3-4":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/RNxXbL03CkgAdrxNTOvJ?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/Q2Dqszbr9MQSAn57WmVb?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h2 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: #1f2937;">Understanding Market Dynamics of AI Products</h2>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains the key market forces shaping the development and adoption of AI products.</li>
    <li>The lesson is designed to help viewers understand industry trends using practical frameworks.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Main Insights</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Five market forces: competition, cost, business models, access/inequality, and the pace of innovation.</li>
    <li>Intense competition drives rapid product releases, similar to battles between major tech brands.</li>
    <li>High development costs, free vs. paid tool strategies, and access inequalities affect adoption; frameworks help make sense of fast changes.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Focus on your needs and select tools that best match them.</li>
    <li>Stay flexible and avoid getting attached to specific products.</li>
    <li>Invest in understanding frameworks—not just individual tools—to keep pace with industry shifts.</li>
    <li>Be aware of access gaps; spending on the right tools can create advantages.</li>
    <li>Expect constant change and evaluate new offerings carefully.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">This video explains the market dynamics shaping AI products, focusing on five key forces: competition, cost, business models, access and inequality, and the pace of innovation. It emphasizes the importance of staying flexible with AI tools, understanding frameworks over specific products, and recognizing the economic and competitive factors influencing AI development and accessibility</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Stay flexible and avoid over-commitment to any single AI product due to rapid innovation.</li>
    <li>Focus on learning frameworks to understand AI products rather than memorizing specific tools.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Be aware of cost, competition, and access inequalities when choosing AI solutions to maintain advantage</p>
</div>`,activity:"<p>Replace with actual activity content</p>"},"3-5":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/PN8QqQV6WQZ2vtw6pFKr?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/riiwY250r8FIdxDua950?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Adapting Skills for the Age of AI</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Context and Key Questions</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains that predicting the future of AI is uncertain; principles and lessons from history matter most.</li>
    <li>AI is mainly developed by companies, not governments, influencing its rollout and priorities.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Core Insights on Jobs and AI</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Past technological shifts (cars replacing horses) eliminated some jobs but created others; adaptability was key.</li>
    <li>The most important skill for today is adapting existing expertise to new contexts, especially as AI takes on more mental work.</li>
    <li>Those who use AI tools efficiently will outcompete others; using AI is more valuable than resisting it.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Focus on adapting your skills to remain relevant.</li>
    <li>Actively learn how AI works and can be applied to your field.</li>
    <li>Use AI as a tool to enhance productivity, not as a threat.</li>
    <li>Approach AI with an open mind—neither too fearful nor overly optimistic.</li>
    <li>Prepare for ongoing changes and keep updating your knowledge.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">This video discusses the impact of AI on jobs and the importance of adapting skills in the face of technological change. It highlights the difference between government and company roles in AI development, the historical lessons from technological shifts like the advent of cars, and emphasizes the necessity of understanding and using AI effectively to stay competitive. The video also outlines the course modules that bridge AI theory to practical application and prepares viewers for responsible AI usage</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Understand the difference between government and company roles in AI development.</li>
    <li>Adapt your skills to complement AI rather than compete against it.</li>
    <li>Learn to use AI effectively to enhance your productivity and remain competitive.</li>
  </ul>
</div>`,activity:"<p>Replace with actual activity content</p>"},"4-1":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/K9nwLMTHenPIvUs43kLR?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/Zc30xpWEEI4V9ztEkceF?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h2 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: #1f2937;">Understanding AI's Double-Edged Sword</h2>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Shawaiz explains responsible AI usage</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">AI is powerful but must be used correctly, similar to tools like calculators or healthy foods.</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Misusing AI for every task can weaken your critical thinking, just like eating only one type of food harms your health.</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key points on AI’s strengths and limits</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>AI excels at tasks with clear, repeatable patterns (e.g., data analysis, basic computations).</li>
    <li>It struggles with original thinking, emotional intelligence, and judgment, which have no clear patterns.</li>
    <li>Knowing the boundaries helps avoid over-reliance and poor learning habits.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Recommendations from Shawaiz</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Use AI for pattern-based, structured tasks.</li>
    <li>Avoid using AI for decisions requiring creativity or personal judgment.</li>
    <li>Balance AI usage with self-learning and problem-solving.</li>
    <li>Recognize the temptation to overuse AI, and practice mindful application.</li>
    <li>Remember: AI is a tool, not a replacement for human growth.</li>
    <li>This video explains the dual nature of AI, emphasizing that while AI is a powerful pattern recognition tool useful for tasks with clear patterns, it should be used responsibly and not relied upon for tasks requiring original thinking or judgment. The speaker uses analogies like calculators and bananas to illustrate the importance of using AI correctly and not overusing it, as overdependence can lead to a decline in mental capabilities.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Use AI tools only after mastering the underlying skills to avoid dependency.</li>
    <li>Recognize that AI excels at tasks with clear patterns but is not suitable for original thinking or judgment.</li>
    <li>Use AI responsibly and selectively, focusing on tasks it is designed for to maintain mental sharpness.</li>
  </ul>
</div>`,activity:`<ol>
<li>Go to ChatGPT and open the GPT store</li>
<li>Find and talk to the "Monday" custom GPT (or similar planning GPT)</li>
<li>Browse the GPT store for 5 minutes</li>
<li>Find one GPT that could help with something you actually do</li>
</ol>`},"4-2":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/ynk6S3RFVy9QPiZmSyfD?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/T1UJMPCEo3DALYFHyF63?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">When to Use AI: Head vs Heart Work</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Core Concept Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz introduces the "head vs heart" work framework to guide effective AI usage.</li>
    <li>Head work follows patterns and rules; heart work requires judgment, creativity, and personal growth.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Head Work vs Heart Work</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Use AI for head work: calculations, grammar, research, organization, formatting, and fact-checking—these are mechanical and pattern-based.</li>
    <li>Heart work includes forming arguments, creative thinking, personal learning, and decisions—areas where AI consistently falls short.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Recommendations</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Delegate routine, patterned tasks to AI – maximize efficiency for mechanical work.</li>
    <li>Own your creative and learning activities – protect these from AI to support growth.</li>
    <li>Distinguish the two types of work – assess each task and decide accordingly.</li>
    <li>Use head/heart awareness to develop key skills – critical for thriving in the AI era.</li>
    <li>Practice identifying the difference – skillful separation ensures best personal development and performance.</li>
    <li>This video explains the 'head versus heart' framework to distinguish between tasks suited for AI and those requiring human creativity and judgment. Head work involves mechanical, pattern-based tasks where AI excels, such as grammar checking and calculations. Heart work involves unique, personal, and creative tasks that AI cannot perform well, such as original problem solving and moral decisions.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Use AI for mechanical, pattern-based tasks (head work) to improve efficiency.</li>
    <li>Reserve creative, judgment-based tasks (heart work) for yourself to foster growth and originality.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Develop the skill to balance head and heart work in the AI age for optimal productivity</p>
</div>`,activity:`<ol>
<li>List everything you do in a typical day (work tasks, not personal)</li>
<li>Use this prompt:</li>
</ol>

<strong>"I want to identify quick AI wins in my daily work using free AI tools (ChatGPT, Claude, Google Gemini). 
<p>Here's what I do in a typical day:</p>
<p>[PASTE YOUR TASK LIST]</p>
<p>For each task, tell me:</p>
<ol>
<li>Is this head work (mechanical/pattern-based) or heart work (judgment/creativity)?</li>
<li>If it's head work, show me EXACTLY how to use FREE AI for it:</li>
</ol>
<ul>
<li>Specific prompt to use</li>
<li>Whether to upload images/documents</li>
<li>Which free AI features apply</li>
</ul>
<ol>
<li>Estimate time savings per use</li>
</ol>

<p>Focus on things I could start doing TODAY with zero cost and zero setup."</strong></p>
<ol>
<li>Review all the AI solutions</li>
<li>Use one of them for real work today</li>
</ol>`},"4-3":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/sa2qUyrj4ZBPlEkY8jTG?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/dfiflHXOoNymziLrypCe?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Identifying Real Goals in the AI Era</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains that understanding the "real goal" behind any task is a critical life and AI-era skill.</li>
    <li>Most people focus on surface objectives or the tools rather than the true outcomes they need.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Main Insights</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>The tool you choose should be dictated by your real goal, not routine or habit (illustrated by a personal example with tools).</li>
    <li>Common mistake: confusing the means (how) with the purpose (what). For example, doing assignments mechanically versus focusing on learning skills.</li>
    <li>In rapidly changing times, especially with AI, those who identify with "how" risk becoming obsolete; those who identify with "what" stay relevant.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Recommendations</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Regularly ask: Who benefits if I do this well? What is the true outcome I need?</li>
    <li>Distinguish between the surface and real goal before starting any task.</li>
    <li>Focus on core value and personal growth, not just efficiency or quick completion.</li>
    <li>Allow "how" to change with tools and technology—never lose sight of "what" you are achieving.</li>
    <li>Remember: Success comes from clarity of purpose, not attachment to process or method.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">This video emphasizes the critical skill of identifying the real goal behind tasks rather than just focusing on surface-level objectives. It illustrates how understanding the true purpose helps in choosing the right tools and approaches, especially in the AI era where the process ('how') may change but the fundamental objectives ('what') remain constant. The speaker uses practical examples to highlight the importance of focusing on learning and growth rather than just completing tasks mechanically with AI assistance</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Learn to distinguish between surface goals and real goals in any task.</li>
    <li>Focus on the 'what' (the objective) rather than the 'how' (the method), especially with AI changes.</li>
    <li>Use AI as a tool to handle mechanical tasks while focusing on personal growth and learning.</li>
  </ul>
</div>`,activity:`<ol>
<li>Pick a task you need to do this week</li>
<li>Write down: What's the surface goal? (what it seems you need to do)</li>
<li>Ask yourself: Who benefits if I do this well? What am I supposed to learn or build?</li>
<li>Write down: What's the real goal?</li>
<li>Do the task focused on the real goal</li>
</ol>`},"4-4":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/jIsyz7O688CPRs8pLa9a?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/KS13Bap3QGe6hvsTzjTN?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Strategic AI Use for Smarter Task Management</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains how breaking tasks into components enables efficient collaboration between personal effort and AI, using essay writing as a practical example.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Main Insights</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Some parts of a task add personal value—like developing arguments and making judgments—that should be done by you.</li>
    <li>AI is most useful for mechanical work: gathering quotes, checking grammar, formatting, and suggesting improvements.</li>
    <li>Certain steps, such as outlining or polishing drafts, can be handled by either you or AI, depending on your learning goals and time constraints.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Break every task into clear components before deciding where to apply AI.</li>
    <li>Use AI strategically for repetitive or technical steps, not for creative or critical thinking parts.</li>
    <li>Aim for a balanced approach—neither full automation nor complete manual effort—to maximize learning, quality, and time savings.</li>
  </ul>
</div>`,activity:`<p>Answer these 7 questions about your work. Be honest - there are no right answers.</p>
<strong>Question 1: What makes time disappear?</strong>
<p>Think of 3 activities where you're so absorbed that hours pass without noticing. After you finish, do you feel energized or drained?</p>
<strong>Question 2: What makes you actually proud?</strong>
<p>Think of something you accomplished recently that made you genuinely proud - not because others praised you, but because it mattered to YOU. What did you do? Why did it feel important?</p>
<strong>Question 3: Your best day - what are you doing?</strong>
<p>Imagine your ideal day at work or in your studies. What are you doing? What part makes you feel most like yourself? Most confident?</p>
<strong>Question 4: What do you care about that others don't?</strong>
<p>What's something you care deeply about even if nobody else seems to notice or value it as much as you do? Why does it matter to you?</p>
<strong>Question 5: What drains you?</strong>
<p>What task or activity always drains your energy? Even if you're good at it or get praised for it, it just empties you. What feels different about that compared to things that excite you?</p>
<strong>Question 6: "Should" vs "Actually Care"</strong>
<p>Think of something you did mainly because you felt you "should" but it didn't feel meaningful to you. How did that feel compared to doing something you actually cared about?</p>
<strong>Question 7: What would you keep for yourself?</strong>
<p>If AI could do one of your regular tasks perfectly, which task would you gladly give away? And which would you want to keep for yourself - because it feels important, fun, or part of who you are?</p>
<strong>After answering:</strong> Questions 1-4 = Your heart work (protect from AI). Questions 5-6 = Head work candidates (delegate to AI). Question 7 = Your boundary line.`},"4-5":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/GSdH7cDakAvi7T2cLTWE?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/aLyWY4mabqRFvTCOetLA?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Five Common AI Traps and Success Strategies</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz exposes five key traps people fall into when using AI and shares ways to avoid them.</li>
    <li>The focus is on practical skills and developing a strong, winning mentality with AI.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Main Insights</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>The five traps are: hallucination (trusting made-up info), trigger-happy reliance, automating tasks you enjoy, invisible skill decay, and giving AI poor context.</li>
    <li>Winners use AI to multiply effort, not replace it; losers rely on shortcuts and risk losing capability.</li>
    <li>Use AI as a tool that pushes you further, not as a crutch that makes you dependent.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Validate outputs – Always fact-check AI information to avoid hallucinations.</li>
    <li>Think before automating – Use discipline, don’t reflexively hand tasks to AI.</li>
    <li>Protect your passions – Avoid automating activities that energize or define you.</li>
    <li>Train your skills – Use AI to boost, not replace, your core strengths.</li>
    <li>Provide clear context – Give AI enough information for valuable, customized results.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">This video discusses five common traps when using AI: hallucination (AI generating false information), trigger happy (over-reliance on AI leading to loss of independent thinking), automation of joy (losing passion by automating enjoyable tasks), invisible decay (skills deteriorating due to dependence on AI), and context-free use (getting generic outputs without proper input). It emphasizes the importance of using AI as a tool to enhance capabilities rather than replace skills, and maintaining discipline and awareness to avoid these pitfalls</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Validate AI-generated information to avoid hallucination errors.</li>
    <li>Use AI as a tool to enhance, not replace, your skills and independent thinking.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Provide sufficient context when using AI to get valuable and specific outputs</p>
</div>`,activity:`<ol>
<li>Use this prompt:</li>
</ol>

<strong>"I want you to act as a mirror for my behavior patterns. 
<p>I'll describe situations or decisions. Your job is to:</p>
<ol>
<li>Point out patterns you notice in what I'm sharing</li>
<li>Ask questions that make me think deeper</li>
<li>Reflect back what my actions might reveal about my priorities</li>
</ol>

<p>You're not here to give advice or tell me what to do. Just show me what you see and ask questions that make me think.</p>
<p>Ready when you are."</strong></p>
<ol>
<li>Share 3 recent situations from your week</li>
<li>Read what AI reflects back</li>
<li>Pick one pattern to think about</li>
</ol>`},"4-6":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/3s9kExpe8YYP00jdfqHk?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/rUsJjBk8R7KU71u4L3Vd?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Mastering AI: Tactics for Mindful Use</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains that while AI can be a powerful tool, mindful and intentional use is essential to maintaining human value and skills in a rapidly evolving landscape.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Core Strategies and Insights</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Five prevention tactics: deliberate delay, AI-free periods, weekly self-testing, cross-checking AI outputs, and creating personal rules for AI use.</li>
    <li>Overreliance on AI can lead to skill decline; adaptability and good judgment become critical as “head work” becomes widely automated.</li>
    <li>Emotional intelligence, kindness, and human judgment cannot be replicated by AI, increasing their value.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Pause and reflect before using AI—make usage a conscious choice.</li>
    <li>Schedule regular periods or tasks where no AI assistance is used.</li>
    <li>Routinely challenge and verify AI responses to avoid blind trust.</li>
    <li>Establish personal rules to guide when and how you use AI.</li>
    <li>Focus on developing uniquely human qualities and adaptability—these will drive future value.</li>
    <li>The video discusses five key tactics to prevent misuse of AI, emphasizing deliberate and reflective use rather than reflexive reliance. It highlights the importance of maintaining human skills through AI-free periods and self-testing, challenging AI outputs critically, and setting personal rules for AI use. The video also explores the future impact of AI on work, stressing that human qualities like emotion, judgment, and kindness will become increasingly valuable as AI automates routine tasks.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Implement deliberate delay before using AI to ensure reflective decision-making.</li>
    <li>Establish AI-free periods and conduct weekly self-tests to maintain and sharpen human skills.</li>
    <li>Create and follow personal rules for AI use to prevent over-reliance and promote adaptability.</li>
  </ul>
</div>`,activity:"<p>Replace with actual activity content</p>"},"5-1":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/LlLoVMu8IMG0Y8EzCRol?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/LlLoVMu8IMG0Y8EzCRol?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Mastering AI: How Prompt Quality Drives Results</h3>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Why Most People Get Different AI Results</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains that everyone has access to the same AI; results differ due to how people interact with it.</li>
    <li>The real difference is the quality and clarity of communication, not the AI’s power itself.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">How to Get Better Results from AI</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>AI is compared to a massive warehouse: your request (prompt) determines what you receive.</li>
    <li>Vague prompts yield vague results; specific prompts (specifying length, topic, audience, tone, etc.) enable superior outputs.</li>
    <li>Shawaiz emphasizes: "Garbage in, garbage out; gold in, gold out"—input quality determines output quality.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Recommendations for Effective AI Communication</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Focus on creating clear, precise prompts for best results.</li>
    <li>Always include context: specify your goals, constraints, and desired outcome.</li>
    <li>Remember: the way you communicate with AI saves time, boosts productivity, and distinguishes you from others.</li>
    <li>This video explains the importance of effective communication with AI to achieve better results. It emphasizes that everyone has access to the same AI tools, but the quality of the output depends on the quality of the input prompts. Good prompts are specific, detailed, and context-aware, which leads to more productive and efficient AI interactions.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Use specific and detailed prompts when interacting with AI.</li>
    <li>Understand your real goal before prompting AI to improve output quality.</li>
    <li>Focus on communication quality to save time and get better AI results.</li>
  </ul>
</div>`,activity:`<ol>
<li>Pick something you want AI to do</li>
<li>Write your first instinct prompt</li>
<li>Now add: length, audience/purpose, tone, and one specific requirement</li>
<li>Compare both outputs</li>
</ol>`},"5-2":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/7YymJNqbWzdbai38jBPD?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/GIZa0EEYQxG8K7atsQ0f?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Mastering AI Prompts with the COLD STAR Framework</h3>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz introduces the COLD STAR framework to help users structure AI prompts for superior results, emphasizing that clarity and specificity drive quality AI outputs.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Framework Insights</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>COLD STAR stands for Context, Objective, Style, Tone, Audience, Response.</li>
    <li>Providing thorough background, clear goals, desired writing style, precise tone, specific audience, and response format ensures tailored and effective AI answers.</li>
    <li>Vague prompts lead to generic results; the more specific your prompt, the better the AI performance and less post-editing is needed.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Break down every prompt using all six COLD STAR elements.</li>
    <li>Always specify context and objectives for relevance.</li>
    <li>Match style and tone to fit your audience.</li>
    <li>Define your target audience and response format.</li>
    <li>Review prompts for completeness to optimize productivity.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Guide Steps</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Identify and specify the context for your prompt, including situation, goal, constraints, and background.</li>
    <li>Define the objective of your prompt by stating what you want to achieve and who it is for.</li>
    <li>Specify the response style (e.g., conversational, direct, professional, or casual).</li>
    <li>Choose a tone (e.g., formal, casual, urgent, playful, empowering).</li>
    <li>Determine your audience by considering their age, expertise, and interests.</li>
    <li>Specify the preferred response format (essay, bullet points, outline, guide, or conversation).</li>
    <li>Review your prompt to ensure it covers all COLD STAR elements.</li>
    <li>This video introduces the Cold Star framework, a structured approach to crafting effective AI prompts by providing context, objective, style, tone, audience, and response format. It emphasizes the importance of specificity in prompts to achieve tailored and high-quality AI outputs, enhancing productivity and reducing wasted time. The video also highlights how giving AI detailed context transforms it from a stranger to a helpful assistant, ensuring better alignment with user goals.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Use the Cold Star framework to structure AI prompts effectively.</li>
    <li>Be specific with your objectives to get tailored AI responses.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Provide detailed context to help AI understand your needs better</p>
</div>`,activity:`<ol>
<li>Pick something you need AI to create today</li>
<li>Fill in each COSTAR element:</li>
</ol>

<strong>"Create [YOUR REQUEST]
</strong>Context:<strong> [Your situation and background]
</strong>Objective:<strong> [What you want and why]
</strong>Style:<strong> [How it should be written]
</strong>Tone:<strong> [The mood or feeling]
</strong>Audience:<strong> [Who it's for]
</strong>Response format:<strong> [Structure and length you need]"</strong>
<ol>
<li>Use the complete prompt</li>
<li>Get your result</li>
</ol>`},"5-3":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/smM2B5ghmo6PQ37MjVlh?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/zrYcpz0yf5r562MdRGb8?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Mastering Effective AI Prompting Techniques</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview of Iterative Prompting</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz stresses treating AI prompting as a process, not a one-shot task.</li>
    <li>Users should refine prompts based on specific feedback, targeting issues rather than rewriting from scratch.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Strategies and Examples</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Analyze outputs, identify particular shortcomings, then adjust prompts gradually for better results.</li>
    <li>Meta-prompting: Ask AI directly how to improve a prompt for more precise suggestions.</li>
    <li>Output control: Specify format, length, tone, style, key elements, and constraints to guide AI responses accurately.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Break down prompt refinement into focused, targeted adjustments.</li>
    <li>Use meta-prompting to have AI critique and enhance your instructions.</li>
    <li>Clearly state output requirements to minimize needed iterations.</li>
    <li>Apply process thinking for efficiency and higher-quality results.</li>
    <li>Avoid complete rewrites — fix only what’s necessary for improvement.</li>
    <li>The video explains the iterative process of refining AI prompts to achieve better outputs. It emphasizes analyzing the output, making targeted adjustments, and using meta-prompting to ask AI for improvement suggestions. Additionally, it highlights controlling output aspects like format, length, tone, and style to get the desired result efficiently.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Treat prompting as an iterative process by analyzing and refining outputs.</li>
    <li>Use meta-prompting to ask AI how to improve your prompts.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Control output by specifying format, length, tone, style, elements, and constraints</p>
</div>`,activity:`<ol>
<li>Go to one of these prompt libraries:</li>
</ol>
<ul>
<li>FlowGPT</li>
<li>PromptBase (free section)</li>
<li>Reddit r/ChatGPTPromptGenius</li>
<li>Awesome ChatGPT Prompts (GitHub)</li>
</ul>
<ol>
<li>Search for a task you do regularly</li>
<li>Find 2-3 prompts that look useful</li>
<li>Try one on your actual work</li>
<li>Save the ones that work</li>
</ol>`},"5-4":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/smM2B5ghmo6PQ37MjVlh?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/zrYcpz0yf5r562MdRGb8?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Mastering Meta Prompting for AI Efficiency</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains how meta prompting lets AI generate prompts for you, enhancing quality and automation in prompt engineering.</li>
    <li>Manual prompting is still necessary as a foundation for understanding and evaluating AI-generated prompts.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">How Meta Prompting Works</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Meta prompting is compared to having two workers: one gathers context and expertise, the other generates the actionable prompt.</li>
    <li>AI creates structured prompts from your inputs, which are then reused for superior outputs.</li>
    <li>Learning manual prompting helps detect deficiencies and ensures the right audience, goals, and roles are captured in prompts.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Learn manual prompting first to build deep understanding and control.</li>
    <li>Use meta prompting to accelerate and scale prompt creation once experienced.</li>
    <li>Combine both techniques for optimal results in AI-driven workflows.</li>
    <li>This video explains the concept of meta prompting, where AI is used to write prompts for AI, enhancing prompt quality and efficiency. It emphasizes the importance of first mastering manual prompting to understand and evaluate AI-generated prompts effectively. The video also illustrates the process of meta prompting using an analogy of two workers communicating tasks to achieve high-quality outputs.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Learn manual prompting first to build a deep understanding and evaluate AI-generated prompts.</li>
    <li>Use meta prompting to automate and speed up prompt creation once you have experience.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Combine expert knowledge and context to create effective meta prompts for high-quality AI outputs</p>
</div>`,activity:`<ol>
<li>Write a prompt for something you actually need</li>
<li>Use this meta-prompt:</li>
</ol>

<strong>"I'm trying to get you to help me with: [DESCRIBE WHAT YOU WANT]
<p>Here's my current prompt:</p>
<p>[PASTE YOUR PROMPT]</p>
<p>The output isn't quite right. Analyze my prompt and tell me:</p>
<ol>
<li>What's missing or unclear</li>
<li>What I should add for better results</li>
<li>Give me an improved version I can use right now</li>
</ol>

<p>Make your improved prompt specific and complete."</strong></p>
<ol>
<li>Use AI's improved prompt</li>
<li>Get better results</li>
</ol>`},"5-5":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/Np5K3UE8I83IoEZpD5DK?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/zeZaLTrEJcCEirktz5K3?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Mastering Meta Prompting for AI Efficiency</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains how meta prompting lets AI generate prompts for you, enhancing quality and automation in prompt engineering.</li>
    <li>Manual prompting is still necessary as a foundation for understanding and evaluating AI-generated prompts.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">How Meta Prompting Works</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Meta prompting is compared to having two workers: one gathers context and expertise, the other generates the actionable prompt.</li>
    <li>AI creates structured prompts from your inputs, which are then reused for superior outputs.</li>
    <li>Learning manual prompting helps detect deficiencies and ensures the right audience, goals, and roles are captured in prompts.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Learn manual prompting first to build deep understanding and control.</li>
    <li>Use meta prompting to accelerate and scale prompt creation once experienced.</li>
    <li>Combine both techniques for optimal results in AI-driven workflows.</li>
    <li>This video explains the concept of meta prompting, where AI is used to write prompts for AI, enhancing prompt quality and efficiency. It emphasizes the importance of first mastering manual prompting to understand and evaluate AI-generated prompts effectively. The video also illustrates the process of meta prompting using an analogy of two workers communicating tasks to achieve high-quality outputs.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Learn manual prompting first to build a deep understanding and evaluate AI-generated prompts.</li>
    <li>Use meta prompting to automate and speed up prompt creation once you have experience.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Combine expert knowledge and context to create effective meta prompts for high-quality AI outputs</p>
</div>`,activity:`<p>Pick a problem and match it to the right technique:</p>
<strong>Need expertise?</strong>
<strong>"You are a [SPECIFIC ROLE] with [X YEARS EXPERIENCE] in [SPECIALIZATION]. [YOUR REQUEST]"</strong>
<strong>Need consistency?</strong>
<strong>"Here are 2 examples of what I want:
<p>Example 1: [EXAMPLE]</p>
<p>Example 2: [EXAMPLE]</p>
<p>Now create one for [YOUR TOPIC] in the same style."</strong></p>
<strong>Need reasoning?</strong>
<strong>"Before answering, think through this step-by-step:
<ul>
<li>First consider [FACTOR 1]</li>
<li>Then [FACTOR 2]</li>
<li>Then weigh them</li>
</ul>
<p>Show your thinking, then give your conclusion."</strong></p>
<strong>Need options?</strong>
<strong>"Provide 3 completely different approaches to [PROBLEM].
<p>For each: explain the approach, list pros and cons, estimate difficulty.</p>
<p>Then recommend which is best for [YOUR SITUATION]."</strong></p>
<strong>Need creativity within bounds?</strong>
<strong>"Create [WHAT YOU WANT].
<p>Requirements:</p>
<ul>
<li>Exactly [LENGTH]</li>
<li>Must include [REQUIREMENT 1], [REQUIREMENT 2]</li>
<li>Tone: [SPECIFIC]</li>
<li>Format: [SPECIFIC]"</strong></li>
</ul>

<p>Apply the matching technique to your actual problem.</p>`},"5-6":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/PnDpJbUTaQFidGMYYJwX?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/Ru8lwYgsmvMGZunwV8AC?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Mastering Effective AI Communication and Prompting</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Core Context</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains common mistakes in prompt engineering and emphasizes refining questions rather than switching topics.</li>
    <li>Using iteration and patience is key to better AI results, rather than expecting immediate, perfect answers.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Main Insights on Prompting</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Do not assume AI can "read your mind"; always provide clear, explicit inputs.</li>
    <li>Clearly state your constraints (deadlines, requirements) upfront to avoid frustration with outputs.</li>
    <li>Use AI for repetitive or tedious work so you can focus on creative, "genius" tasks unique to you.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Iterate your prompts – Refine instead of restarting each time.</li>
    <li>Communicate with clarity – Specify needs and constraints directly.</li>
    <li>Leverage AI wisely – Let AI handle routine work, preserving your unique strengths.</li>
    <li>Embrace mistakes as learning – Allow errors to naturally improve your prompting skills.</li>
    <li>Develop communication overall – Practicing prompt engineering also sharpens real-world communication skills.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">This video provides a comprehensive guide on effective prompt engineering for AI, emphasizing the importance of refining questions iteratively, setting clear constraints, and using AI to handle hard work so humans can focus on their unique strengths. It highlights common mistakes such as assuming AI understands unstated needs and the necessity of clear communication, which also improves overall communication skills. The video also outlines a structured learning path through multiple modules covering AI fundamentals, practical usage, and advanced prompting techniques.</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Refine prompts iteratively instead of switching between different questions.</li>
    <li>Always provide clear constraints to AI before generating outputs.</li>
    <li>Use AI to handle hard work and amplify your unique skills, not to replace your genius.</li>
  </ul>
</div>`,activity:`<ol>
<li>Use this communication coaching prompt:</li>
</ol>

<strong>"You are an executive communication coach with 15 years of experience helping professionals improve clarity, precision, and impact in their written communications. You've worked with leaders across business, education, and consulting to eliminate vague requests and build communication that gets results.
<p>I want you to coach me on my actual messages. I'll share requests, questions, or messages I've sent to people (boss, teacher, client, team) where the response wasn't what I wanted.</p>
<p>For each one, analyze my communication and tell me:</p>
</strong>What's Missing:<strong>
<ul>
<li>What information did I assume they knew but didn't state?</li>
<li>What context did I leave out?</li>
<li>What specific details were unclear?</li>
</ul>

</strong>What's Weak:<strong>
<ul>
<li>Where am I being vague or general instead of specific?</li>
<li>What questions would someone need to ask me for clarity?</li>
<li>What could be misinterpreted?</li>
</ul>

</strong>How to Fix It:<strong>
<ul>
<li>Rewrite my message with the missing information included</li>
<li>Show me exactly what to add and why it matters</li>
<li>Explain the communication principle I should remember</li>
</ul>

</strong>Start with this message I sent:<strong>
<p>[PASTE YOUR ACTUAL MESSAGE]</p>
<p>Be direct and specific like you would with an executive client. I want to improve, not feel good."</strong></p>
<ol>
<li>Review AI's analysis</li>
<li>Note the specific weakness pattern</li>
<li>Rewrite using AI's guidance</li>
<li>Apply this insight to future communications</li>
</ol>`},"6-1":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/uOE6a3m25cFAT0hmnF0B?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/1LWWh3M9HkMH3jyKaG0J?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">How to Become a Resilient AI User</h3>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview: Shawaiz’s Core Message</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains the difference between “how” and “what” thinking in the AI age.</li>
    <li>The focus is on thriving amid rapid changes in AI tools.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">The Three Levels of AI Users</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Level 1: “How-obsessed” dabblers frequently chase new tools, but make little long-term progress.</li>
    <li>Level 2: Skilled at current tools and prompts, reactive not proactive, struggle as tools change.</li>
    <li>Level 3: Elite “what-focused” users build adaptable systems, prioritizing outcomes and resilient workflows over specific tools.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shift focus from mastering specific tools to building outcome-driven systems.</li>
    <li>Regularly evaluate and update your processes, not just your toolset.</li>
    <li>Build workflows around core needs (e.g., research, organization, refinement) so they survive tool changes.</li>
    <li>Aim to be a “what person”—future-proof your AI skills by thinking strategically.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Remember: Lasting value comes from systems, not from chasing every new “how.”</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>This video lesson discusses the three levels of AI users: dabblers, skilled users, and elite users. It emphasizes the importance of focusing on the 'what' (outcomes and systems) rather than the 'how' (specific tools), as AI tools rapidly change. The goal is to become a level three AI user who builds resilient systems that adapt to evolving AI technologies.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Focus on the 'what' (outcomes and systems) rather than the 'how' (specific AI tools) to adapt to rapid AI changes.</li>
    <li>Aim to become a level three AI user by building systems that deliver consistent results despite evolving tools.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Avoid getting stuck on mastering individual AI tools; instead, develop a strategic approach to using AI effectively</p>
</div>`,activity:`<ol>
<li>Think of your most repeated task (reports, content, analysis, anything weekly/monthly)</li>
<li>Paste this into ChatGPT/Claude:</li>
</ol>

<strong>"I repeatedly [describe task]. Create a 5-step workflow that:
<ul>
<li>Focuses on WHAT outcomes I need (not tools)</li>
<li>Works with any AI or no AI</li>
<li>Shows: Step → What I decide → What AI executes</li>
</ul>
<p>Format as a simple reusable checklist."</strong></p>
<ol>
<li>Copy the workflow into a note titled "My [Task] Workflow"</li>
</ol>`},"6-2":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/3VCsV8qBtju09dWIDRSO?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/6IVzDq4i6UqNqHNAoc5N?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Strategic Filtering for Outcome-Focused AI</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains how high-level AI users (“Tier 3”) achieve better results by shifting focus from tool features to desired outcomes.</li>
    <li>Rather than chasing trends, effective users ask if an AI tool delivers the specific results they need.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Core Insights</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Prioritize evidence and fit—use AI tools based on real outcomes, not hype or novelty.</li>
    <li>Say “no” to most tools, going deep only on what aligns tightly with daily and important tasks.</li>
    <li>Integrate new tools into existing systems for sustained, repeatable gains.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Filter for outcomes, not features—clarify goals before assessing tools.</li>
    <li>Rely on evidence, avoid hype—let proven results guide decisions.</li>
    <li>Ensure tool compatibility—only add AI that fits current workflows.</li>
    <li>The video discusses the concept of strategic filtering in AI usage, emphasizing the importance of focusing on outcomes rather than the tools themselves. It highlights how tier 3 AI users base their AI adoption on evidence and fit within their existing systems, using AI selectively and with discipline to achieve reliable and repeatable gains. The analogy of choosing clothes from a wardrobe is used to illustrate the approach of deciding on outcomes first before selecting the appropriate AI tools.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Focus on desired outcomes rather than the AI tools themselves.</li>
    <li>Base AI adoption on evidence and real results, avoiding hype.</li>
    <li>Integrate AI tools selectively into existing systems for optimal effectiveness.</li>
  </ul>
</div>`,activity:`<ol>
<li>Answer these 3 questions in a note:</li>
</ol>
<ul>
<li>What task takes me the most time each week?</li>
<li>What work do I procrastinate on because it's tedious?</li>
<li>What bottleneck slows down my best work?</li>
</ul>

<ol>
<li>Pick ONE answer</li>
</ol>

<ol>
<li>Use your AI tool finding skills from Module 2 Lesson 6 (search FlowGPT, Product Hunt, There's An AI For That, etc.) to find a tool for that specific problem</li>
</ol>

<ol>
<li>Bookmark one tool to try this week</li>
</ol>`},"6-3":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/Daf6Qomlg1NhZAchX8Zz?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/5ZAREbB5Q7XzlKlIbxqO?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Staying Informed on AI Without Overwhelm</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Context: Why Limit AI News?</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Shawaiz explains that constant updates in AI—new tools, features, and industry drama—can consume hours daily and lead to information overload.</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Most people either spend too much time on news or risk falling behind altogether.</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">The News Budget Strategy</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Set a strict limit: 15–30 minutes per week to check AI news—no daily monitoring.</li>
    <li>Choose one or two curated sources focused on meaningful outcomes, not just the latest tools.</li>
    <li>Each week, scan for 1-3 key developments and ignore the rest.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Set limits – Allocate a maximum of 30 minutes weekly for AI news.</li>
    <li>Curate sources – Pick 1-2 trusted, high-value news channels.</li>
    <li>Focus decisions – Try only 1-3 new ideas or actions each week.</li>
    <li>Prioritize lightly – Stay informed but avoid obsessive tracking.</li>
    <li>Balance – Remain up-to-date without feeling overwhelmed.</li>
    <li>This video lesson discusses how to manage AI news consumption effectively by setting a limited 'news budget' of 15 to 30 minutes once per week. It emphasizes selecting one to two curated sources that focus on relevant AI developments and making informed decisions based on a few key updates to stay current without becoming overwhelmed.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Set a weekly AI news budget of 15 to 30 minutes.</li>
    <li>Select one to two curated AI news sources relevant to your interests.</li>
    <li>Focus on one to three key updates weekly and make informed decisions based on them.</li>
  </ul>
</div>`,activity:`<ol>
<li>Pick 1-2 AI news sources (examples: TLDR AI newsletter, Ben's Bites, The Rundown AI)</li>
<li>Schedule 20 minutes once per week to check them</li>
<li>This week: Read your sources, note 1-3 things worth trying</li>
<li>Ignore everything else</li>
</ol>`},"6-4":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/JRyEvcKxnmTVpMvFyQuZ?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/zFGPAv03xI3i6FAU47i6?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">How to Effectively Test New Tools</h3>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains a structured approach for evaluating new tools with a focused 30-60 minute trial.</li>
    <li>The method ensures tools are tested against your real needs, not just their intended functions.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Evaluation Process</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Define a specific goal for the trial, aiming for clear outcomes and time savings (30-50%) without sacrificing quality.</li>
    <li>Test the tool using 1-3 real examples from your own workflow, not hypotheticals or marketing claims.</li>
    <li>Make an informed decision: adopt if effective, park for later review, or reject if it fails core criteria.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Only test tools that show strong design, documentation, and positive user results.</li>
    <li>Skip trials if outputs need heavy fixing or documentation is weak.</li>
    <li>Integrate and master tools that consistently deliver value—otherwise, revisit or reject them.</li>
    <li>This video lesson explains the process of conducting a 30 to 60 minute trial to evaluate new tools or solutions after they pass an initial filter. It emphasizes setting clear goals, testing with real work examples, and making informed decisions to adopt, park, or reject the tool based on consistent performance and evidence of time savings and quality.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Define clear goals for what the tool should deliver before testing.</li>
    <li>Use one to three real work examples during the trial to assess true value.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Decide to adopt, park, or reject the tool based on consistent time savings and quality outcomes</p>
</div>`,activity:`<ol>
<li>Pick one AI tool that passed your filter</li>
<li>Define your goal: "Can this save me 30%+ time on [specific task] while keeping quality?"</li>
<li>Use it on 2-3 real examples of that task (not demo/test data)</li>
<li>Decide: Adopt (integrate it), Park (revisit in 3 months), or Reject (doesn't deliver)</li>
</ol>`},"6-5":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/ZVWFxtiEU69cc1Mvp1Dm?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/rPYQlkZBwaNDtZShkqoX?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Building Flowing Systems with Integrated AI</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz describes how systems that flow differ from disconnected tool use, emphasizing the importance of designing around your core goal.</li>
    <li>Fragmented tools lead to lost context and inefficiency; integrated systems support continuous, focused work.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Main Insights</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>True productivity comes from systems where AI is seamlessly woven in—such as Google Docs with built-in AI—rather than juggling separate tools.</li>
    <li>Most struggle with AI because they focus on "how" to use tools, and not "what" they want to achieve.</li>
    <li>Mature integrated systems grow stronger over time, yielding compounding returns without restarting from scratch.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Recommendations</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Focus on building systems, not collecting tools.</li>
    <li>Integrate AI into existing workflows rather than using it as an add-on.</li>
    <li>Define desired outcomes and processes before selecting tools.</li>
    <li>Prioritize stable, flowing systems for long-term improvements.</li>
    <li>Ignore marketing hype; optimize for real productivity gains.</li>
    <li>The video explains the concept of system flow versus fragmented tools, emphasizing the importance of integrating AI seamlessly into workflows to enhance productivity. It contrasts tier 1 and tier 2 users who use disconnected tools with tier 3 users who have mature systems that flow smoothly and improve over time. The key takeaway is to focus on outcomes and building systems that compound returns rather than merely adding AI tools.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Focus on building systems that flow rather than using fragmented tools.</li>
    <li>Integrate AI seamlessly into existing workflows to maintain context and improve efficiency.</li>
    <li>Prioritize desired outcomes and processes over the implementation of individual AI tools.</li>
  </ul>
</div>`,activity:`<ol>
<li>Open the AI tool you use most (ChatGPT, Claude, Gemini, etc.)</li>
<li>Go to Settings</li>
<li>Spend 5 minutes exploring what features exist</li>
<li>Turn on or try ONE thing that looks useful</li>
</ol>`},"6-6":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/kr3VQEnGIHBof8WaozId?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/jJVe4eRZByDD9XqoS2z8?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">How to Evaluate AI Outputs Based on Task Importance</h3>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Context and Approach</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains that mature AI users apply clear evaluation criteria rather than trusting or rejecting AI blindly.</li>
    <li>Task importance determines standards: low-stakes tasks prioritize speed, while high-stakes tasks require thorough verification.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Main Evaluation Criteria</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Five key checks for AI outputs: relevance, factual accuracy, completeness, clarity, and absence of bias.</li>
    <li>For low-stakes tasks (e.g., drafts, summaries), fast iteration is fine; for medium-stakes, use human review; for high-stakes, human leads and AI only assists.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Assess AI outputs using relevance, accuracy, completeness, clarity, and bias checks.</li>
    <li>Vary your trust in AI depending on the risk of the task.</li>
    <li>Always refine and verify AI outputs for high-stakes work.</li>
    <li>Involve human review as task importance increases.</li>
    <li>Adapt AI usage standards rather than applying a one-size-fits-all approach.</li>
    <li>The video discusses the evaluation criteria for AI outputs, emphasizing the importance of high standards for different stakes of tasks. It outlines five key criteria: relevance, factual accuracy, completeness, clarity, and bias check, and explains how users should adapt their trust and verification processes based on the risk level of the task, ranging from low to high stakes.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Apply the five evaluation criteria to assess AI outputs: relevance, accuracy, completeness, clarity, and bias.</li>
    <li>Classify AI tasks by stakes (low, medium, high) and adjust trust and verification accordingly.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Use human review for medium and high stakes tasks to ensure quality and accountability</p>
</div>`,activity:`<p>Next 3 times you use AI for something important (email to boss, client work, anything with consequences):</p>
<p>Before using the output, do a 30-second check:</p>
<ol>
<li>Read first and last sentence</li>
<li>Scan for any numbers/facts</li>
<li>Ask yourself: "Would I look stupid if this was wrong?"</li>
</ol>

<p>If yes → read the whole thing</p>
<p>If no → use it</p>`},"6-7":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/vuLjQwOVhQJ074tCnw2X?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/JTWAJzeaS1Ntk8QHugt3?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Building Effective AI Playbooks for Lasting Results</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains how advanced AI playbooks give users a powerful, long-term edge over those who rely on scattered tools or chase quick wins.</li>
    <li>Tier 3 users focus on documented, repeatable processes that combine human strategy with AI capabilities for compounding results.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Concepts and Methodology</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>A playbook is a step-by-step, documented process marking where AI and human roles intersect, adaptable as tools or goals change.</li>
    <li>Ideal playbook uses include research, writing, studying, project planning, content creation, and any routine involving clear steps.</li>
    <li>The five core steps for high-quality outputs: identify research angles, extract relevant arguments, structure logic, express clearly, and ensure flow/strength—these remain, even as AI handles execution.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Focus on systems, not just tools, to build a lasting advantage.</li>
    <li>Document and regularly update your processes to improve efficiency and save time.</li>
    <li>Use AI strategically: test new tech briefly, then go deep on the best fits.</li>
    <li>Stay adaptable—let AI handle more, but always maintain clarity on what you do versus what AI does.</li>
    <li>Start building your first "what" system documented as a playbook for greatest impact.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">This video lesson focuses on the concept of AI playbooks as a strategic tool for tier 3 users to build efficient, repeatable processes that integrate AI for tasks such as research, writing, and project planning. It emphasizes the importance of mastering systems over tools, strategic filtering, and long-term thinking to gain a compound advantage in AI usage. The lesson also outlines a detailed example of creating a playbook for producing a well-researched essay, highlighting the consistent process steps and the evolving role of AI in executing them</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Develop and document repeatable processes as AI playbooks integrating AI at each step.</li>
    <li>Focus on mastering systems and strategic filtering rather than dabbling in many tools.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Continuously refine and adapt playbooks over time to maintain a competitive advantage</p>
</div>`,activity:"<p>Activity content coming soon</p>"},"7-1":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/xVF6mdhPiHGNei0TGKau?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/NAuQ4RFSYDNeEow6qZLQ?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Adapting for the AI-Driven Future</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains how the value of skills is rapidly shifting due to widespread adoption of AI.</li>
    <li>The lesson focuses on how to position oneself to succeed as technology reshapes job roles.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Insights</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Pattern-based tasks (routine analysis, information retrieval) are less valuable, as AI now handles these better and faster.</li>
    <li>Human-only skills—creativity, judgment, ethical reasoning, and relationship-building—are becoming scarcer and more prized.</li>
    <li>The shelf life of technical skills is shrinking; roles now change 25% faster than five years ago.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Continuously develop uniquely human skills to remain valuable.</li>
    <li>Use AI strategically to maximize your advantage, not as a crutch.</li>
    <li>Foster a mindset of lifelong learning and adaptability for career resilience.</li>
    <li>Recognize that skills must be updated regularly, not just learned once.</li>
    <li>Anticipate accelerated change as AI capabilities double every five years.</li>
    <li>This video discusses the shifting value of skills in the age of AI, emphasizing that pattern recognition and routine tasks are becoming less valuable as AI performs them better and faster. Conversely, uniquely human skills such as creativity, judgment, and ethical reasoning are becoming scarcer and more valuable. Continuous learning and strategic use of AI are essential to stay relevant as roles and required skills evolve rapidly.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Focus on developing uniquely human skills like creativity and ethical reasoning.</li>
    <li>Commit to continuous learning to keep up with rapidly changing roles and technologies.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Learn to use AI strategically to enhance market value and career longevity</p>
</div>`,activity:`<ol>
<li>Make two lists in a note:</li>
</ol>

<strong>Declining Value (AI does it better):</strong>
<ul>
<li>Skills AI handles well now</li>
</ul>

<strong>Rising Value (Human advantage):</strong>
<ul>
<li>Skills only humans can do well</li>
</ul>

<ol>
<li>Look at your current role/studies - which list does most of your time go to?</li>
<li>Identify ONE rising-value skill to develop this month</li>
</ol>`},"7-2":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/4Cj2tfRW9wZW3r89fLIB?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/LMtdROBVw1uatwQyyROZ?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Human Skills That Outshine AI</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains the unique strengths that set humans apart from artificial intelligence, focusing on traits AI cannot replicate.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Core Human Advantages</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Lived experiences create intuition, empathy, wisdom, and judgment.</li>
    <li>Humans break patterns with purpose, driven by original insights and creativity.</li>
    <li>Compassion, courage, humor, and real relationships form deep trust—skills beyond AI’s reach.</li>
    <li>Story: Even if AI surpasses experts in tasks (like diagnosis), it cannot provide authentic bedside manner or emotional support.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Recommendations to Stand Out from AI</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Develop compassion and authentic empathy for real relationship-building.</li>
    <li>Take bold action and make courageous decisions, even if outcomes are uncertain.</li>
    <li>Use humor and social intelligence to connect meaningfully.</li>
    <li>Grow wisdom through lived experience, not just knowledge.</li>
    <li>Build these qualities intentionally—they are rare and must be practiced, not just assumed.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Guide Steps</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Demonstrate courage by taking bold actions even when you feel fear.</li>
    <li>Rely on your lived experiences to build wisdom and superior judgment.</li>
    <li>Use humor and social intelligence to connect with others.</li>
    <li>Show kindness and empathy to build trust and loyalty.</li>
    <li>Develop these qualities intentionally to stand out from AI.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">This lesson explores the competitive advantages humans have over AI, emphasizing qualities such as human experience, purposeful creativity, responsibility, courage, wisdom, humor, kindness, and empathy. It highlights how AI lacks emotional depth, lived experience, and genuine empathy, making human qualities crucial in differentiating and excelling alongside AI. The 'bedside manner' principle is introduced, illustrating how AI handles technical tasks while humans manage relationships and emotional connections.</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Develop and leverage lived human experiences to gain intuition and wisdom.</li>
    <li>Use purposeful creativity to break patterns and innovate beyond AI's capabilities.</li>
    <li>Cultivate emotional qualities such as courage, empathy, humor, and responsibility to differentiate yourself from AI.</li>
  </ul>
</div>`,activity:`<ol>
<li>Pick ONE competitive advantage to develop this week:</li>
</ol>
<ul>
<li>Experience (try something new, face a challenge)</li>
<li>Purpose-driven creativity (create something with intention)</li>
<li>Judgment under pressure (make a hard call)</li>
<li>Empathy in action (truly help someone)</li>
</ul>

<ol>
<li>Do it</li>
<li>Reflect: What did I learn that AI never could?</li>
</ol>`},"7-3":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/5tg88YzCvPtjWe18dNYk?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/hkhjRmerZF9klMXmHDOK?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">3 Strategic Mistakes to Avoid in an AI Future</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz highlights key pitfalls to avoid as AI rapidly evolves. Knowing what not to do is as crucial as knowing what to do.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Main Insights</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Becoming dependent on AI can erode essential skills; use AI as a multiplier, not a replacement.</li>
    <li>Access to information is not the same as building true knowledge; real understanding requires active engagement.</li>
    <li>Anchoring your identity to specific tools or methods is risky—focus instead on the unique value and outcomes you provide.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Use AI to enhance, not replace, your core abilities.</li>
    <li>Prioritize learning and deep understanding over mere access to data.</li>
    <li>Build your identity around problem-solving and delivering value, not the tools you use.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">This video lesson discusses three strategic mistakes to avoid in an AI-driven future: becoming overly dependent on AI as a replacement rather than a multiplier, confusing information with knowledge, and anchoring one's identity to tools or methods instead of the value and outcomes created. It emphasizes the importance of using AI to amplify human genius, building true knowledge through understanding and application, and focusing on the destination rather than the vehicle or tool used. The lesson encourages viewers to maintain solid identities based on problem-solving and value creation to thrive alongside AI advancements.</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Use AI as a multiplier to amplify your skills, not as a replacement.</li>
    <li>Distinguish between information and knowledge by actively building understanding and application.</li>
    <li>Anchor your professional identity on the value and outcomes you create, not on the tools or methods you use.</li>
  </ul>
</div>`,activity:`<p>This week, use AI to unlock one capability you don't currently have. Not to do something faster - to do something you literally can't do right now.</p>
<strong>Use this prompt:</strong>
<strong>"I want to use AI to unlock a capability I don't currently have.
<p>Here's my situation:</p>
<ul>
<li>What I'm currently good at: [list your existing skills]</li>
<li>What I wish I could do but can't: [specific capability you lack - be concrete]</li>
<li>Why I can't do it now: [what's blocking you - knowledge gap, technical skill, time, resources]</li>
<li>What unlocking this would let me create: [specific output or result you'd produce]</li>
<li>My available time this week: [realistic amount]</li>
</ul>

<p>Help me use AI to unlock this capability by:</p>
<ol>
<li></strong>Breaking down the capability<strong> - What do I actually need to learn/understand to do this? Give me the essential components, not everything.</li>
</ol>

<ol>
<li></strong>AI as unlock tool<strong> - Give me a step-by-step process to use AI to help me gain this capability. Show me how AI enhances MY ability, not replaces it.</li>
</ol>

<ol>
<li></strong>Verification method<strong> - How do I know I actually gained the capability vs AI just doing it for me? What's the test?</li>
</ol>

<ol>
<li></strong>This week's proof<strong> - Give me ONE specific thing to create this week that proves I unlocked this capability. Make it small but real.</li>
</ol>

<ol>
<li></strong>Common traps<strong> - What mistakes do people make when trying to unlock this capability with AI? How do I avoid them?</li>
</ol>

<ol>
<li></strong>Next level<strong> - Once I prove I can do this, what's the next capability to unlock?</li>
</ol>

<p>Make this practical for someone with [available time] this week. I want to actually DO something I couldn't do before and have proof I can do it, not just learn about it.</p>
<p>Focus on unlocking MY capability, not having AI do it for me."</strong></p>`},"7-4":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/wALkx0MYC0vFsv69rZhw?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/PfVaGhKn6A9ov3yMOL1J?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Four Strategic Assets for the AI Era</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Context for Thriving with AI</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Shawaiz explains that as AI automates tasks, human value shifts from repetitive work to qualities and skills AI cannot replicate.</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">The Four Key Assets</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>AI skills – Understand how to work with, oversee, and develop AI for any purpose.</li>
    <li>Human skills – Moral character, empathy, and collaboration become differentiators in an AI-driven world.</li>
    <li>Experience – Creating and building things leads to better judgment and resilience than just consuming information.</li>
    <li>Flexibility – Ability to learn rapidly and adapt smoothly to changing tools, roles, and uncertainties is essential.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Actionable Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Embrace AI as a tool and strategic multiplier.</li>
    <li>Cultivate core human values for enduring relevance.</li>
    <li>Prioritize building and real-world experience over passive learning.</li>
    <li>Develop learning systems and welcome change for long-term adaptability.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Summary</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>This video lesson discusses the four strategic assets essential for thriving in an AI-driven future: AI skills, human skills, experience, and flexibility. It emphasizes the importance of combining technical AI knowledge with moral competence, practical experience, and adaptability to change. The content highlights how AI expands human capabilities and the need to build these assets to remain valuable and competitive in the evolving job market.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Develop strong AI skills to understand, work with, and oversee AI technologies.</li>
    <li>Cultivate human skills such as moral competence, empathy, and adaptability that AI cannot replicate.</li>
    <li>Gain practical experience by building and creating, and learn how to learn to stay flexible and adaptable to change.</li>
  </ul>
</div>`,activity:`<p>Score yourself 1-5 on each asset, pick your lowest, improve it this month:</p>
<strong>Asset 1 - AI Skills:</strong> Can you use AI strategically? (1=no, 5=expert)
<strong>Asset 2 - Human Skills:</strong> Are you developing empathy, judgment, courage? (1=weak, 5=strong)
<strong>Asset 3 - Experience:</strong> Are you building things, not just consuming? (1=no, 5=constantly)
<strong>Asset 4 - Flexibility:</strong> Can you learn new things quickly? (1=rigid, 5=adaptable)
<p>Pick lowest score → Create plan to improve it this month</p>`},"8-1":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/HO0ycmOji31WZZr8AtdG?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/aOs1hJDBeqYIlsquPdj7?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Building an AI Productivity Solution: App Capstone Project</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz introduces a module focused on applying a five-phase AI Productivity Process as a capstone, combining lessons from previous modules.</li>
    <li>By the end, viewers will have personally built a working AI productivity tool.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Concepts and Approach</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>The five phases: Identification (find time wasters), Architect (design AI usage), Evaluate (build or adopt a tool), Build (construct solution), Implement (apply AI routinely).</li>
    <li>The chosen example is an AI tool that rewrites project updates for different stakeholders, automating a repetitive communication task.</li>
    <li>Emphasis is placed on hands-on experience, flexibility, and building practical AI and human skills, not just learning theory.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Recommendations and Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Identify routine tasks or bottlenecks suitable for AI improvement.</li>
    <li>Decide early whether to develop a custom AI tool or adopt an existing one.</li>
    <li>Apply the described process iteratively to continuously drive productivity with AI.</li>
    <li>Use project experience to strengthen future positioning and adaptability.</li>
    <li>Focus on creating actionable output with every AI implementation.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">This video introduces the AI Productivity Process, a capstone project that integrates knowledge from previous modules to build a functional AI solution. It outlines five phases: identification of time-wasting tasks, designing AI applications, evaluating build or buy options, building the AI solution, and implementation. The example project demonstrates creating a multi-stakeholder communication transformer that customizes raw notes for different audiences, saving time and building valuable AI experience.</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Identify time-wasting tasks suitable for AI automation.</li>
    <li>Decide whether to build a custom AI solution or use existing tools.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Develop practical AI experience by building and implementing the AI solution</p>
</div>`,activity:"<p>Replace with actual activity content</p>"},"8-2":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/4KqGIHLusaXsKDiRPvu6?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/VCNjBnl3tyinPyxdHcHl?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Meeting Purpose</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>To present and demonstrate a framework for identifying AI automation opportunities in daily work tasks.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Track and classify your weekly tasks to spot areas suitable for AI automation.</li>
    <li>Choose tasks that are high-impact, realistic, and frequently performed for automation.</li>
    <li>Architecting an automation solution begins by understanding task patterns and common automation targets.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Next Steps & Action Items</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Complete Work Audit – Track your weekly tasks and classify them by category.</li>
    <li>Calculate Automation Potential – Assess time saved for each head-type task.</li>
    <li>Select and Architect Solution – Pick the most impactful task and design an AI-powered automation.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Topics & Discussions</h3>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Work Audit and Task Identification</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Importance of tracking daily and weekly tasks with specifics for better automation ideas.</li>
    <li>Classifying tasks as "head" or "heart" to isolate those suitable for automation.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Automation Candidate Selection</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Focus on tasks with high leverage and clear input/output for easy automation.</li>
    <li>Examples given: email responses, report writing, data formatting, meeting summaries.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Solution Architecture</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Solving common patterns (like repetitive stakeholder updates) can address multiple workload pain points.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Decisions Made</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Prioritize High-Leverage Tasks for Automation – Selected due to clear structure, frequency, and potential time savings.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Questions Raised</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>What is the first step before automating tasks? – Track and detail all weekly work tasks.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Open Questions</h3>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">How to measure long-term impact after task automation is implemented?</h3>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">The video explains a step-by-step framework for identifying tasks suitable for AI automation within a workweek. It emphasizes tracking and classifying tasks, calculating potential time savings, and selecting high-impact tasks to automate, using a personal example of automating project updates for stakeholders. The process aims to optimize work efficiency by focusing on repetitive tasks that can be streamlined with AI solutions</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Track and document all work tasks over a typical week with frequency and duration.</li>
    <li>Classify tasks to determine which are suitable for automation based on impact and feasibility.</li>
    <li>Select a high-leverage task to architect an AI-based automation solution and implement it.</li>
  </ul>
</div>`,activity:"<p>Replace with actual activity content</p>"},"8-3":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/4yOZoRCdNKgdq6Rz5Rc1?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/oB5f00FjnQ67sDhihq4j?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Meeting Purpose</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Discuss frameworks and best practices for architecting AI solutions, focusing on defining clear inputs, outputs, knowledge requirements, and responsibilities.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Be precise about AI input and output definition for better results and usability.</li>
    <li>Clear quality standards and detailed examples enhance AI performance and alignment.</li>
    <li>Human oversight is essential; AI amplifies work but final review remains a human responsibility.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Next Steps & Action Items</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Add stakeholder examples – Incorporate past messages and outputs as AI input references.</li>
    <li>Summarize company style guide – Provide context and preferred terminology for AI integration.</li>
    <li>Outline final review process – Define human review checkpoints before outputs are sent.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Decisions Made</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>AI handles transformation, humans review and send – Ensures accountability and quality before external delivery.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Topics & Discussions</h3>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Defining Good and Bad Outputs</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Specific standards and guidelines define what constitutes useful or poor AI outputs.</li>
    <li>Lists and examples clarify expectations for consistent performance.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Knowledge Requirements for AI</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Style guides, templates, and stakeholder messages enrich the AI’s contextual understanding.</li>
    <li>Supplying multiple examples optimizes AI responsiveness.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Roles and Responsibilities</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Split clearly: AI generates, humans evaluate.</li>
    <li>Final judgment and external communication remain human tasks.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Questions Raised</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>What if custom AI integration tools are unavailable? – Use direct examples in the prompt instead.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Open Questions</h3>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">How often should feedback cycles for continuous AI improvement be scheduled?</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>The video explains the second phase of app development, focusing on architecting the AI solution by defining inputs, outputs, quality standards, necessary knowledge, boundaries, and success criteria. It emphasizes the importance of clear guidelines for AI, including examples and style preferences, and outlines responsibilities between AI and human oversight. The video concludes by introducing the next phase, evaluation.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Define specific inputs and outputs for the AI solution.</li>
    <li>Establish clear quality standards and provide AI with necessary knowledge and examples.</li>
    <li>Assign responsibilities ensuring AI transforms content and humans review and finalize.</li>
  </ul>
</div>`,activity:"<p>Replace with actual activity content</p>"},"8-4":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/TJumoFmYDUiogsB8u4xY?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/vQfGce410sjuZPajJXn8?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Meeting Purpose</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>To evaluate whether to buy or build a solution in project phase three, using a structured decision-making process.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Evaluation focuses on choosing between buying or building a tool based on fit, ROI, and workflow integration.</li>
    <li>Five criteria and a scoring system help guide the buy-or-build decision for new solutions.</li>
    <li>Specific case study revealed a custom build is preferable when existing tools lack necessary features.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Next Steps & Action Items</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Integrate chosen tool or develop custom solution – Proceed with either setup and trial of external tool, or start building and refining an internal tool.</li>
    <li>Test new solution – Run integrated or custom tool for two weeks to measure effectiveness.</li>
    <li>Implement into workflow – After evaluation, implement the chosen solution into operational processes.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Decisions Made</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Custom tool build chosen over Grammarly – Decided to build a custom solution due to Grammarly’s lack of specific transformation capabilities required for the task.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Topics & Discussions</h3>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Evaluation Process</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Review of phase one and two: identifying task and designing a solution.</li>
    <li>Discussion of how to search for candidate tools and record their details.</li>
    <li>Explanation of five evaluation criteria: problem fit, workflow compatibility, ROI, setup ease, and reliability.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Tool Evaluation Example</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Grammarly tone detector tested but failed specificity and transformation criteria.</li>
    <li>Scoring system applied to assess strengths and weaknesses before final decision.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Questions Raised</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Does the tool solve the exact problem? – Not always; specificity was inadequate in the Grammarly example.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Open Questions</h3>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">How will success be measured after implementation and testing?</h3>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">The video explains phase three of a project workflow, focusing on evaluating whether to buy or build a solution. It details criteria for assessing existing tools, including problem fit, workflow integration, ROI, ease of use, and reliability. An example evaluation of Grammarly's tone detector illustrates the decision-making process, leading to a choice to build a custom tool due to specific unmet need</p>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Search and document existing tools relevant to the problem.</li>
    <li>Score tools against five criteria: problem fit, workflow integration, ROI, ease of use, and reliability.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Decide to buy or build based on tool scores and specific project needs</p>
</div>`,activity:"<p>Replace with actual activity content</p>"},"8-5":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/DOHkX4bDzOVrOnfF1B36?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/E7Cv71ibRNd3f5lfpsyW?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Building a Custom GPT for Automated Communication</p>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Overview</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Shawaiz explains how to build a custom GPT to automate multi-stakeholder communication, guiding viewers from problem identification to full implementation.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Steps & Insights</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Start by identifying tasks that can be automated, then architect and evaluate possible AI solutions.</li>
    <li>If no suitable solution exists, proceed to build a custom GPT, including naming, describing, and adding instructions or knowledge files.</li>
    <li>Use AI to help craft instructions and knowledge base content; voice input streamlines communication updates.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Recommendations & Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Identify tasks that are repetitive or manual for AI automation.</li>
    <li>Use detailed, specific inputs to improve output quality.</li>
    <li>Continuously track usage and gather feedback to refine your custom GPT.</li>
    <li>Utilize built-in tools in ChatGPT or manual methods if on a free tier.</li>
    <li>Leverage conversational iterations and examples to maximize effectiveness.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Guide Steps</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Go to the Explore GPTs section in ChatGPT.</li>
    <li>Click on Create to start a new GPT.</li>
    <li>Enter a name and add a description for your custom GPT.</li>
    <li>Provide instructions, optionally add conversation starters and knowledge files.</li>
    <li>Save your custom GPT and use voice to interact.</li>
    <li>Refine prompts or examples through conversation with AI.</li>
    <li>Create and vary examples for best results.</li>
    <li>Use AI assistance to draft instructions and knowledge base content.</li>
    <li>This video lesson guides viewers through building a custom AI solution using ChatGPT Plus, focusing on automating communication tasks by creating tailored GPTs. It covers the process from identifying tasks suitable for AI, architecting the solution, evaluating existing options, to implementing and applying the custom GPT for efficient multi-stakeholder communication. The tutorial emphasizes using AI to generate prompts, instructions, and knowledge bases to save time and improve productivity.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Identify tasks that can be automated using AI in your workflow.</li>
    <li>Architect and evaluate whether to buy or build a custom AI solution.</li>
    <li>Implement and apply the custom GPT, using AI to generate prompts and knowledge bases for efficiency.</li>
  </ul>
</div>`,activity:"<p>Replace with actual activity content</p>"},"8-6":{video:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: min(62.5%, 95vh);"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/recordings/I4u365nXqYcCO6Q9MVS9?onlyRecording=1" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',guide:'<div style="position: relative; width: 100%; height: 0px; overflow: hidden; padding-bottom: 66.67%;"><iframe allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" playsinline="" allow="autoplay; fullscreen; picture-in-picture" src="https://kommodo.ai/embed/guides/szIKdd0dW0jEjZq1Qo49?view=interactive" width="100%" height="100%" style="border: 0px; position: absolute; inset: 0px;"></iframe></div>',summary:`<div>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Meeting Purpose</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Discuss phase five of the AI productivity process: implementing and improving AI solutions.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Takeaways</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Final implementation phase involves monitoring AI outputs and gathering stakeholder feedback for improvements.</li>
    <li>Consistent edits or repeated feedback signal areas needing prompt or workflow refinement.</li>
    <li>Completing this process demonstrates practical experience and builds a portfolio of effective AI solutions.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Next Steps & Action Items</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Monitor AI Outputs – Continuously assess effectiveness, looking for confusion, complaints, or recurring edits.</li>
    <li>Set Up Tracking – Measure before-and-after results to quantify improvements.</li>
    <li>Refine Prompts – Edit instructions based on user and stakeholder feedback for ongoing improvement.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Decisions Made</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Implement continuous monitoring and iteration – To ensure AI solutions stay effective and relevant through feedback-informed refinement.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Key Topics & Discussions</h3>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Implementation and Evaluation</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Move from architecture and build phases to hands-on monitoring and feedback collection.</li>
    <li>Use stakeholder responses and consistent edits as signals for refinement.</li>
    <li>Establish a tracking system to measure the impact and refine over time.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Practical Experience and Portfolio Building</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Completing the process shows both theoretical understanding and real-world capability.</li>
    <li>Experience gained is valuable for resumes and portfolios.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Guide Steps</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Edit your instructions or prompt based on feedback.</li>
    <li>Edit the prompt directly to refine the AI's behavior.</li>
    <li>Copy and paste the prompt into a new chat and describe your problem.</li>
    <li>Ask the AI to edit the prompt.</li>
    <li>Copy and paste the new prompt generated by the AI back into your workflow.</li>
    <li>Monitor where you can make improvements to your AI product.</li>
    <li>Get feedback and improve your AI solution.</li>
    <li>Set up a tracking system to measure before and after results.</li>
    <li>Identify refinement triggers, such as consistently edited outputs.</li>
    <li>Continuously improve your AI productivity process.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Questions Raised</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>How do you know when further refinement is necessary? – Consistent manual editing or repeated stakeholder feedback indicate the need for changes.</li>
  </ul>
  <h3 style="font-size: 1.1rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #374151;">Open Questions</h3>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Are there additional modules or resources for advanced workflow automations or integration scenarios?</li>
    <li>The video discusses phase five of the AI productivity process, focusing on the implementation and continuous improvement of AI solutions, including custom GPTs. It emphasizes monitoring outputs, gathering feedback, refining prompts, and tracking efficiency gains to ensure effective AI integration in workflows. The video concludes by highlighting the importance of experience gained through building or using AI tools as valuable proof of capability.</li>
  </ul>
  <p style="margin-top: 1.25rem; margin-bottom: 1rem; line-height: 1.625;">Action items</p>
  <ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
    <li>Monitor AI outputs and gather stakeholder feedback regularly to identify areas for improvement.</li>
    <li>Continuously refine AI prompts and workflows based on consistent edits and feedback triggers.</li>
    <li>Track time savings and efficiency gains to measure the impact of AI integration in work processes.</li>
  </ul>
</div>`,activity:"<p>Activity content coming soon</p>"},getLesson(e,t){const n=`${e}-${t}`;return this[n]}},L={bg:l.colors.background.light||l.colors.background.base,cardBg:l.colors.background.card,textPrimary:l.colors.text.primary,textSecondary:l.colors.text.secondary,textMuted:l.colors.text.muted,accent:l.colors.accent.cyan,accentLight:`${l.colors.accent.cyan}15`,primary:l.colors.primary.deep,border:l.colors.border.subtle,success:l.colors.status.success};function Yy(){const{user:e,signOut:t}=Je();Nt();const{moduleId:n,lessonId:o}=li(),[s,r]=b.useState(!0),[a,c]=b.useState(!1),[u,d]=b.useState(!1),[m,h]=b.useState(!1),[g,p]=b.useState(!1),[v,x]=b.useState(null),{isComplete:A,toggleComplete:y,loading:f}=di(e==null?void 0:e.id,[]),{isBookmarked:w,toggleBookmark:k}=$m(e==null?void 0:e.id),S=parseInt(n),T=parseInt(o),N=Se.find(pe=>pe.id===S),R=N==null?void 0:N.lessons.find(pe=>pe.id===T);if(!N||!R)return i.jsx("div",{className:"flex-1 p-8",children:i.jsx("p",{children:"Lesson not found"})});if(f)return i.jsx("div",{className:"flex-1 flex items-center justify-center",children:i.jsx("div",{className:"text-gray-600",children:"Loading..."})});const C=Hy.getLesson(S,T),I=`${S}-${T}`,M=ti[I],_=dn(S,T),Y=A(_,"lesson");if(!C)return i.jsx("div",{className:"flex-1 p-8",children:i.jsx("p",{children:"Lesson content not available"})});const ke=pe=>{const z=document.createElement("div");z.innerHTML=pe;let E="";const B=(U,ae="")=>{if(U.nodeType===Node.TEXT_NODE){const Ae=U.textContent.trim();Ae&&(E+=Ae+" ")}else if(U.nodeType===Node.ELEMENT_NODE){const Ae=U.tagName.toLowerCase();Ae==="h3"||Ae==="h2"?(E.trim()&&(E=E.trim()+`

`),E+=U.textContent.trim().toUpperCase()+`

`):Ae==="ul"?(E.trim()&&(E=E.trim()+`
`),Array.from(U.children).forEach(le=>{le.tagName.toLowerCase()==="li"&&(E+="• "+le.textContent.trim()+`
`)}),E+=`
`):Ae==="ol"?(E.trim()&&(E=E.trim()+`
`),Array.from(U.children).forEach((le,co)=>{le.tagName.toLowerCase()==="li"&&(E+=`${co+1}. ${le.textContent.trim()}
`)}),E+=`
`):Ae==="p"?(E.trim()&&(E=E.trim()+`

`),Array.from(U.childNodes).forEach(le=>B(le)),E=E.trim()+`
`):Ae==="br"?E+=`
`:Ae==="div"?Array.from(U.childNodes).forEach(le=>B(le)):Array.from(U.childNodes).forEach(le=>B(le))}};return Array.from(z.childNodes).forEach(U=>B(U)),E=E.replace(/[ \t]+/g," "),E=E.replace(/\n\s+/g,`
`),E=E.replace(/\n{3,}/g,`

`),E.trim()},Te=()=>{const pe=ke(C.summary);navigator.clipboard.writeText(pe),h(!0),setTimeout(()=>h(!1),2e3)},lo=async()=>{p(!0);try{await y(_,"lesson")}catch(pe){console.error("Error toggling complete:",pe)}finally{p(!1)}};return i.jsx("div",{className:"flex-1 overflow-y-auto",style:{backgroundColor:L.bg},children:i.jsxs("div",{className:"max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8",children:[i.jsxs("div",{className:"flex items-start justify-between gap-4 mb-12 sm:mb-24",children:[i.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl font-black",style:{letterSpacing:"-0.02em",color:L.textPrimary},children:R.title}),i.jsx("button",{onClick:()=>k(_),className:"flex-shrink-0 mt-1 p-2.5 rounded-lg border-2 transition-all duration-200",style:{backgroundColor:w(_)?`${L.accent}15`:L.cardBg,borderColor:w(_)?L.accent:L.border,color:w(_)?L.accent:L.textMuted},title:w(_)?"Remove bookmark":"Bookmark this lesson",children:i.jsx(Sm,{size:20,fill:w(_)?"currentColor":"none"})})]}),i.jsx("div",{className:"lesson-video-wrapper mb-8 sm:mb-16 bg-black rounded-lg overflow-hidden shadow-lg",children:i.jsx("div",{dangerouslySetInnerHTML:{__html:C.video}})}),i.jsxs("div",{className:"mb-12 sm:mb-24 rounded-lg shadow-sm",style:{backgroundColor:L.cardBg,borderWidth:"2px",borderColor:L.border},children:[i.jsxs("button",{onClick:()=>r(!s),className:"w-full flex items-center justify-between p-4 sm:p-6 transition",style:{backgroundColor:`${L.textPrimary}08`},children:[i.jsx("h2",{className:"text-lg sm:text-2xl font-black",style:{letterSpacing:"-0.02em",color:L.textPrimary},children:"Lesson Summary"}),i.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 flex-shrink-0",children:[!s&&i.jsx("button",{onClick:pe=>{pe.stopPropagation(),Te()},className:"p-2 rounded transition",style:{color:m?L.accent:L.textSecondary},title:"Copy summary",children:i.jsx(ya,{size:18,className:"sm:w-5 sm:h-5"})}),s?i.jsx(fr,{size:20,className:"sm:w-6 sm:h-6",style:{color:L.textSecondary}}):i.jsx(un,{size:20,className:"sm:w-6 sm:h-6",style:{color:L.textSecondary}})]})]}),s&&i.jsxs("div",{className:"p-4 sm:p-6",style:{borderTopWidth:"2px",borderTopColor:L.border},children:[i.jsx("div",{className:"prose prose-sm max-w-none mb-4 sm:mb-6",style:{color:L.textSecondary},dangerouslySetInnerHTML:{__html:C.summary}}),i.jsxs("button",{onClick:Te,className:"flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition font-medium text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start",style:{backgroundColor:`${L.textPrimary}10`,color:L.textPrimary},children:[i.jsx(ya,{size:16}),m?"Copied!":"Copy Summary"]})]})]}),M&&i.jsxs("div",{className:"mb-12 sm:mb-24 rounded-lg shadow-sm",style:{backgroundColor:L.cardBg,borderWidth:"2px",borderColor:L.border},children:[i.jsxs("button",{onClick:()=>c(!a),className:"w-full flex items-center justify-between p-4 sm:p-6 transition",style:{backgroundColor:`${L.textPrimary}08`},children:[i.jsxs("h2",{className:"text-lg sm:text-2xl font-black break-words",style:{letterSpacing:"-0.02em",color:L.textPrimary},children:["Skill",M.skill&&`: ${M.skill}`]}),a?i.jsx(fr,{size:20,className:"flex-shrink-0 sm:w-6 sm:h-6",style:{color:L.textSecondary}}):i.jsx(un,{size:20,className:"flex-shrink-0 sm:w-6 sm:h-6",style:{color:L.textSecondary}})]}),a&&i.jsxs("div",{className:"p-4 sm:p-8 lg:p-12 space-y-6 sm:space-y-8",style:{borderTopWidth:"2px",borderTopColor:L.border,color:L.textSecondary},children:[i.jsxs("div",{children:[i.jsx("h3",{className:"text-base sm:text-lg font-black mb-2 sm:mb-3",style:{letterSpacing:"-0.02em",color:L.textPrimary},children:"Skills You're Building:"}),i.jsx("p",{className:"text-base sm:text-lg font-semibold",style:{color:L.accent},children:M.skill})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-base sm:text-lg font-black mb-2 sm:mb-3",style:{letterSpacing:"-0.02em",color:L.textPrimary},children:"Connection:"}),i.jsx("p",{className:"text-sm sm:text-base leading-relaxed",style:{color:L.textSecondary},children:M.connection})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-base sm:text-lg font-black mb-2 sm:mb-3",style:{letterSpacing:"-0.02em",color:L.textPrimary},children:"Activity:"}),i.jsx("div",{className:"text-sm sm:text-base whitespace-pre-line leading-relaxed",style:{color:L.textSecondary},children:M.activity})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-base sm:text-lg font-black mb-2 sm:mb-3",style:{letterSpacing:"-0.02em",color:L.textPrimary},children:"Why this matters:"}),i.jsx("p",{className:"text-sm sm:text-base leading-relaxed",style:{color:L.textSecondary},children:M.whyMatters})]}),i.jsxs("div",{className:"pt-4 sm:pt-6",style:{borderTopWidth:"2px",borderTopColor:L.border},children:[i.jsx("h3",{className:"text-base sm:text-lg font-black mb-4 sm:mb-6",style:{letterSpacing:"-0.02em",color:L.textPrimary},children:"Apply this as:"}),i.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:gap-4",children:[i.jsx("button",{onClick:()=>x("learners"),className:"px-3 sm:px-6 py-2 sm:py-4 rounded-lg transition font-semibold border-2 text-xs sm:text-sm",style:{backgroundColor:`${L.textPrimary}10`,color:L.textPrimary,borderColor:L.border},children:jo.audienceLabels.learners}),i.jsx("button",{onClick:()=>x("employees"),className:"px-3 sm:px-6 py-2 sm:py-4 rounded-lg transition font-semibold border-2 text-xs sm:text-sm",style:{backgroundColor:`${L.textPrimary}10`,color:L.textPrimary,borderColor:L.border},children:jo.audienceLabels.employees}),i.jsx("button",{onClick:()=>x("selfEmployed"),className:"px-3 sm:px-6 py-2 sm:py-4 rounded-lg transition font-semibold border-2 text-xs sm:text-sm",style:{backgroundColor:`${L.textPrimary}10`,color:L.textPrimary,borderColor:L.border},children:jo.audienceLabels.selfEmployed}),i.jsx("button",{onClick:()=>x("businesses"),className:"px-3 sm:px-6 py-2 sm:py-4 rounded-lg transition font-semibold border-2 text-xs sm:text-sm",style:{backgroundColor:`${L.textPrimary}10`,color:L.textPrimary,borderColor:L.border},children:jo.audienceLabels.businesses})]})]})]})]}),i.jsxs("div",{className:"mb-12 sm:mb-24 rounded-lg shadow-sm",style:{backgroundColor:L.cardBg,borderWidth:"2px",borderColor:L.border},children:[i.jsxs("button",{onClick:()=>d(!u),className:"w-full flex items-center justify-between p-4 sm:p-6 transition",style:{backgroundColor:`${L.textPrimary}08`},children:[i.jsx("h2",{className:"text-lg sm:text-2xl font-black",style:{letterSpacing:"-0.02em",color:L.textPrimary},children:"Guide"}),u?i.jsx(fr,{size:20,className:"flex-shrink-0 sm:w-6 sm:h-6",style:{color:L.textSecondary}}):i.jsx(un,{size:20,className:"flex-shrink-0 sm:w-6 sm:h-6",style:{color:L.textSecondary}})]}),u&&i.jsx("div",{className:"p-4 sm:p-8 lg:p-12 prose prose-sm max-w-none",style:{borderTopWidth:"2px",borderTopColor:L.border,color:L.textSecondary,fontSize:"0.875rem"},children:i.jsx("div",{dangerouslySetInnerHTML:{__html:C.guide}})})]}),i.jsx(Mi,{isOpen:v==="learners",onClose:()=>x(null),title:"For Individual Learners",children:i.jsx("div",{className:"prose prose-sm max-w-none text-slate-700",dangerouslySetInnerHTML:{__html:Ri(M==null?void 0:M.learners)}})}),i.jsx(Mi,{isOpen:v==="employees",onClose:()=>x(null),title:"For Employees",children:i.jsx("div",{className:"prose prose-sm max-w-none text-slate-700",dangerouslySetInnerHTML:{__html:Ri(M==null?void 0:M.employees)}})}),i.jsx(Mi,{isOpen:v==="selfEmployed",onClose:()=>x(null),title:"For Self-Employed",children:i.jsx("div",{className:"prose prose-sm max-w-none text-slate-700",dangerouslySetInnerHTML:{__html:Ri(M==null?void 0:M.selfEmployed)}})}),i.jsx(Mi,{isOpen:v==="businesses",onClose:()=>x(null),title:"For Business Teams",children:i.jsx("div",{className:"prose prose-sm max-w-none text-slate-700",dangerouslySetInnerHTML:{__html:Ri(M==null?void 0:M.businesses)}})}),i.jsx("div",{className:"pt-6 sm:pt-12",style:{borderTopWidth:"2px",borderTopColor:L.border},children:i.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4",children:[i.jsx(Om,{variant:Y?"success":"primary",onClick:lo,disabled:g,className:"flex items-center justify-center gap-2 px-4 sm:px-6 py-3 text-sm sm:text-base flex-1 sm:flex-none",children:Y?i.jsxs(i.Fragment,{children:[i.jsx(Xo,{size:18})," Completed"]}):"Mark as Complete"}),Y&&(()=>{const pe=N.lessons.findIndex(E=>E.id===T),z=N.lessons[pe+1];return z?i.jsx(G,{to:`/modules/${S}/lessons/${z.id}`,className:"px-4 sm:px-6 py-3 text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base text-center flex-1 sm:flex-none",style:{backgroundColor:L.primary},children:"Next Lesson →"}):i.jsx(G,{to:`/modules/${S}/recap`,className:"px-4 sm:px-6 py-3 text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base text-center flex-1 sm:flex-none",style:{backgroundColor:L.primary},children:"View Module Recap →"})})()]})})]})})}const Li={1:{activation:"You already know how technology changes everything. Your grandparents read paper maps. Your parents used GPS. You just use your phone. Before cameras existed, artists had to paint portraits. Before calculators, people did math by hand. Tools replace old ways. People either adapt or fall behind.",zoom:"This module shows you how AI fits into that same pattern. It's not magic. It's just the next tool in a long line of tools that change how humans work.",stakes:"Understanding AI tells you what's coming. Right now, companies are already using AI to make decisions, teach students, and hire people. Knowing how it works—where it came from, what it actually does—means you're ready instead of confused."},2:{activation:"You already understand how things work in layers. When you learn to cook, you start by understanding ingredients. Then you learn techniques. Then you combine them into recipes. When you play a sport, you learn the basic rules first, then tactics, then how to execute under pressure. Complex systems always build from simple foundations.",zoom:"This module shows you exactly how AI works—from the moment you type something to the moment it responds, all the way up to AI systems that can make decisions and take actions by themselves.",stakes:"Understanding these layers is how you know what AI can actually do and what it can't. Right now, companies are building AI systems to manage schedules, write code, answer questions, and make decisions. Knowing how they work—what's happening inside—tells you when to trust them and when to verify their choices."},3:{activation:"You already understand how things get from creation to your hands. A phone starts as an engineering breakthrough in a lab. Then it gets turned into a product that's easy to use. Then thousands of companies build apps for that phone. Then you download them. The journey from invention to everyday tool involves many steps and many people specializing at each stage.",zoom:"This module shows you that same journey for AI—how it goes from research labs into the thousands of products you see on your phone, and how to make sense of all of them.",stakes:"Right now, new AI products are launching every day. Most people feel overwhelmed trying to keep up. But if you understand the frameworks—how products are categorized, how they make money, what shapes them—you can evaluate any AI tool that comes out, not just the ones you know today. This is how you stay ahead instead of falling behind."},4:{activation:"You already know the difference between using a tool correctly and using it wrong. A knife can help you cook or hurt you. A car can get you places or crash if you're reckless. A calculator can save you time or make you forget how to think. The tool itself is neutral—what matters is how you use it and when.",zoom:"This module shows you exactly how to use AI correctly so it becomes your superpower instead of your downfall. You already understand what AI is and how it works. Now you'll learn when to use it, when not to, and how to protect yourself from the traps that make most people worse off, not better.",stakes:"Right now, most people are using AI in ways that weaken them—letting it think for them, replacing skills they need to keep sharp, trusting it blindly. In 2 years, they'll be dependent on AI and unable to function without it. But the people who understand how to use it strategically will be 10x more capable than everyone else. This lesson determines which group you're in."},5:{activation:`You already know the difference between asking for help poorly and asking for help well. If you ask your friend "help me with math" vaguely, they don't know where to start. But if you say "I don't understand why the slope formula works—can you explain it like I'm solving a real problem?" they give you exactly what you need. The quality of your request determines the quality of the help you get.`,zoom:"This module shows you how to communicate with AI so it becomes your personal expert assistant instead of a generic tool. Everyone has access to the same AI. What separates the people getting 10x better results is how they ask questions and give instructions.",stakes:"Right now, most people give AI vague, lazy prompts and get vague, lazy responses back. They think the AI isn't capable enough. But the problem is their input, not the AI's output. Learning to communicate properly with AI is the skill that multiplies everything else you've learned. This is where you actually separate from everyone else using the same tools."},6:{activation:"You already know the difference between having lots of things and actually being good at something. Someone might buy 20 different tools but never get good at any of them. Another person focuses on one tool, learns it deeply, and builds a system around it that works perfectly. The first person stays busy. The second person gets results.",zoom:"This module shows you how to stop collecting AI tools and start building systems that work for you. You already know what AI is, when to use it, and how to communicate with it. Now you'll learn how the best AI users actually operate—how they decide what to focus on, how they make AI part of their daily work, and how they build repeatable processes that get better every time they use them.",stakes:"Right now, most people either try every new AI tool that comes out, or they use AI randomly whenever they need help. Neither approach works well over time. But the people who build systems—who make AI part of their regular workflow and document how they do it—get better results every single day. By the time other people catch up, they're already way ahead. This lesson teaches you how to be that person."},7:{activation:"You already know the difference between being prepared and being caught off guard. A student who understands how a test works can prepare strategically. A student who doesn't understand it studies randomly and hopes for the best. The one who understands wins. Understanding the game changes everything.",zoom:"This module shows you the game that's changing right now—the AI era. You've learned what AI is, how to use it, and how to build systems with it. Now you'll learn how to position yourself to WIN in this changing world. What's becoming valuable, what's becoming worthless, where your real advantages are, and what skills to build that will stay useful no matter what happens.",stakes:"Most people are afraid of AI or chasing it blindly. But if you understand the landscape—if you know what's shifting, what skills matter, and what mistakes to avoid—you can position yourself to thrive no matter how fast things change. The difference between people who panic and people who prosper in the next 5-10 years is strategy. This lesson is your strategy."}},Qy=[3,4,5,6,7,8];function Ky(){const{user:e}=Je(),{moduleId:t}=li(),{isComplete:n,loading:o}=di(e==null?void 0:e.id,[]),s=parseInt(t),r=Qy.includes(s),a=Se.find(m=>m.id===s);if(!a)return i.jsx("div",{className:"flex-1 p-8",children:i.jsx("p",{children:"Module not found"})});if(o)return i.jsx("div",{className:"flex-1 flex items-center justify-center",children:i.jsx("div",{className:"text-gray-600",children:"Loading..."})});const c=a.lessons.filter(m=>n(dn(s,m.id),"lesson")).length,u=c/a.lessons.length*100,d=a.lessons.find(m=>!n(dn(s,m.id),"lesson"));return i.jsx("div",{className:"flex-1 overflow-y-auto",style:{backgroundColor:l.colors.background.base},children:i.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12",children:i.jsxs("div",{className:"space-y-8",children:[i.jsx("div",{className:"rounded-2xl border-2 overflow-hidden",style:{backgroundColor:l.colors.background.card,borderColor:l.colors.primary.electric},children:i.jsxs("div",{className:"relative p-8 lg:p-12",children:[i.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:`linear-gradient(135deg, ${l.colors.primary.electric} 0%, ${l.colors.accent.cyan} 100%)`}}),i.jsxs("div",{className:"relative",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4",style:{backgroundColor:`${l.colors.primary.electric}15`,border:`1px solid ${l.colors.primary.electric}30`},children:[i.jsx(ro,{size:14,style:{color:l.colors.primary.electric}}),i.jsxs("span",{className:"text-xs font-bold uppercase tracking-wider",style:{color:l.colors.primary.electric},children:["Module ",s," of ",Se.length]})]}),i.jsx("h1",{className:"text-3xl lg:text-5xl font-bold mb-6",style:{color:l.colors.text.primary,letterSpacing:"-0.02em"},children:a.title}),i.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-6",children:[i.jsxs("div",{className:"p-4 rounded-xl",style:{backgroundColor:`${l.colors.primary.electric}08`,border:`1px solid ${l.colors.primary.electric}20`},children:[i.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider mb-1",style:{color:l.colors.text.muted},children:"Progress"}),i.jsxs("p",{className:"text-2xl font-bold",style:{color:l.colors.primary.electric},children:[Math.round(u),"%"]})]}),i.jsxs("div",{className:"p-4 rounded-xl",style:{backgroundColor:`${l.colors.accent.cyan}08`,border:`1px solid ${l.colors.accent.cyan}20`},children:[i.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider mb-1",style:{color:l.colors.text.muted},children:"Completed"}),i.jsxs("p",{className:"text-2xl font-bold",style:{color:l.colors.accent.cyan},children:[c," / ",a.lessons.length]})]}),i.jsxs("div",{className:"p-4 rounded-xl",style:{backgroundColor:`${l.colors.accent.coral}08`,border:`1px solid ${l.colors.accent.coral}20`},children:[i.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider mb-1",style:{color:l.colors.text.muted},children:"Est. Time"}),i.jsxs("p",{className:"text-2xl font-bold",style:{color:l.colors.accent.coral},children:["~",Math.ceil(a.lessons.length*.5),"h"]})]})]}),i.jsx("div",{className:"flex-1",children:i.jsx("div",{className:"h-3 rounded-full overflow-hidden",style:{backgroundColor:`${l.colors.primary.electric}15`},children:i.jsx("div",{className:"h-full transition-all duration-500",style:{width:`${u}%`,background:`linear-gradient(90deg, ${l.colors.primary.electric} 0%, ${l.colors.accent.cyan} 100%)`}})})})]})]})}),r&&i.jsxs("div",{className:"flex items-start gap-4 p-5 rounded-xl border-2",style:{backgroundColor:"#fdf8f3",borderColor:"#c17f3a"},children:[i.jsx(wn,{size:20,style:{color:"#c17f3a",flexShrink:0,marginTop:2}}),i.jsxs("div",{children:[i.jsx("p",{className:"font-semibold text-sm",style:{color:"#c17f3a"},children:"Module locked"}),i.jsx("p",{className:"text-sm mt-1",style:{color:"#6b5c4e"},children:"Complete Foundation (modules 1 & 2) to unlock this module's lessons. You can browse the overview below to see what's covered."})]})]}),!r&&d&&i.jsx(G,{to:`/modules/${s}/lessons/${d.id}`,className:"group block p-6 rounded-xl border-2 transition-all hover:shadow-lg",style:{backgroundColor:l.colors.background.card,borderColor:l.colors.accent.cyan},children:i.jsxs("div",{className:"flex items-center justify-between gap-4",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider mb-2",style:{color:l.colors.accent.cyan},children:"Continue Learning"}),i.jsxs("h3",{className:"text-xl font-bold",style:{color:l.colors.text.primary},children:["Lesson ",d.id,": ",d.title]})]}),i.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:scale-110",style:{backgroundColor:l.colors.accent.cyan},children:i.jsx(mt,{size:18,style:{color:"white"}})})]})}),Li[s]&&i.jsxs("div",{className:"grid lg:grid-cols-3 gap-6",children:[i.jsxs("div",{className:"p-6 rounded-xl border",style:{backgroundColor:l.colors.background.card,borderColor:l.colors.border.subtle},children:[i.jsx("h3",{className:"text-lg font-bold mb-3",style:{color:l.colors.text.primary},children:"What You Already Know"}),i.jsx("p",{className:"text-sm leading-relaxed",style:{color:l.colors.text.secondary},children:Li[s].activation})]}),i.jsxs("div",{className:"p-6 rounded-xl border",style:{backgroundColor:l.colors.background.card,borderColor:l.colors.border.subtle},children:[i.jsx("h3",{className:"text-lg font-bold mb-3",style:{color:l.colors.text.primary},children:"In This Module"}),i.jsx("p",{className:"text-sm leading-relaxed",style:{color:l.colors.text.secondary},children:Li[s].zoom})]}),i.jsxs("div",{className:"p-6 rounded-xl border",style:{backgroundColor:l.colors.background.card,borderColor:l.colors.border.subtle},children:[i.jsx("h3",{className:"text-lg font-bold mb-3",style:{color:l.colors.text.primary},children:"Why This Matters"}),i.jsx("p",{className:"text-sm leading-relaxed",style:{color:l.colors.text.secondary},children:Li[s].stakes})]})]}),i.jsxs("div",{children:[i.jsx("h2",{className:"text-2xl font-bold mb-4",style:{color:l.colors.text.primary,letterSpacing:"-0.02em"},children:"Lessons"}),i.jsx("div",{className:"grid gap-3",children:a.lessons.map(m=>{const h=n(dn(s,m.id),"lesson");return r?i.jsxs("div",{className:"flex items-center gap-4 p-5 rounded-xl border-2",style:{backgroundColor:"#f7f5f2",borderColor:"#e5e0d8",opacity:.75,cursor:"not-allowed"},children:[i.jsx(wn,{size:20,style:{color:"#b0a090",flexShrink:0}}),i.jsx("div",{className:"flex-1 min-w-0",children:i.jsxs("h3",{className:"text-base font-semibold",style:{color:"#9a8a7a"},children:["Lesson ",m.id,": ",m.title]})}),i.jsx("span",{className:"text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0",style:{background:"#ede8e0",color:"#9a8a7a"},children:"Locked"})]},m.id):i.jsxs(G,{to:`/modules/${s}/lessons/${m.id}`,className:"group flex items-center gap-4 p-5 rounded-xl border-2 transition-all hover:shadow-md",style:{backgroundColor:h?`${l.colors.status.success}05`:l.colors.background.card,borderColor:h?l.colors.status.success:l.colors.border.subtle},children:[i.jsx("div",{className:"flex-shrink-0",children:h?i.jsx(yn,{size:24,style:{color:l.colors.status.success}}):i.jsx(Kf,{size:24,style:{color:l.colors.border.subtle}})}),i.jsx("div",{className:"flex-1 min-w-0",children:i.jsxs("h3",{className:"text-base font-semibold",style:{color:l.colors.text.primary},children:["Lesson ",m.id,": ",m.title]})}),i.jsx(mt,{size:20,className:"flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity",style:{color:l.colors.text.muted}})]},m.id)})})]}),i.jsx("div",{className:"flex justify-center pt-4",children:i.jsxs(G,{to:`/modules/${s}/recap`,className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 text-white",style:{background:`linear-gradient(135deg, ${l.colors.primary.electric} 0%, ${l.colors.accent.cyan} 100%)`},children:["View Module Recap ",i.jsx(mt,{size:20})]})})]})})})}async function Vy(){return null}const Q={bg:l.colors.background.light||l.colors.background.base,cardBg:l.colors.background.card,textPrimary:l.colors.text.primary,textSecondary:l.colors.text.secondary,accent:l.colors.accent.cyan,primary:l.colors.primary.deep,border:l.colors.border.subtle};function Jy(){const{user:e,signOut:t}=Je(),{moduleId:n}=li(),{isComplete:o,loading:s}=di(e==null?void 0:e.id,[]),[r,a]=b.useState(null),[c,u]=b.useState(!0),d=parseInt(n),m=Se.find(h=>h.id===d);return b.useEffect(()=>{d&&(async()=>{u(!0);const g=await Vy();a(g),u(!1)})()},[d]),m?s?i.jsx("div",{className:"flex-1 flex items-center justify-center",children:i.jsx("div",{className:"text-gray-600",children:"Loading..."})}):i.jsx("div",{className:"flex-1 overflow-y-auto",style:{backgroundColor:Q.bg},children:i.jsxs("div",{className:"max-w-screen-xl mx-auto px-8 py-8",children:[i.jsxs("div",{className:"mb-24",children:[i.jsx("h1",{className:"text-5xl font-black mb-3",style:{letterSpacing:"-0.02em",color:Q.textPrimary},children:"Module Recap"}),i.jsx("p",{className:"text-lg font-medium",style:{color:Q.textSecondary},children:m.title})]}),i.jsxs("div",{className:"mb-24 rounded-lg shadow-sm",style:{backgroundColor:Q.cardBg,borderWidth:"2px",borderColor:Q.border},children:[i.jsxs("div",{className:"p-6 flex items-center gap-3",style:{backgroundColor:`${Q.textPrimary}08`,borderBottomWidth:"2px",borderBottomColor:Q.border},children:[i.jsx(_n,{size:24,style:{color:Q.accent}}),i.jsx("h2",{className:"text-2xl font-black",style:{letterSpacing:"-0.02em",color:Q.textPrimary},children:"Module Notes"})]}),i.jsx("div",{className:"p-12",children:c?i.jsx("p",{style:{color:Q.textSecondary,fontStyle:"italic"},children:"Loading notes..."}):r&&r.sections?i.jsx("div",{className:"space-y-8",children:r.sections.map((h,g)=>i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-bold mb-4",style:{color:Q.textPrimary},children:h.name}),h.subsections&&Array.isArray(h.subsections)?i.jsx("div",{className:"space-y-4 pl-4",children:h.subsections.map((p,v)=>i.jsxs("div",{className:"pl-4",style:{borderLeftWidth:"2px",borderLeftColor:Q.accent},children:[i.jsx("h4",{className:"font-semibold mb-2",style:{color:Q.textPrimary},children:p.title}),i.jsx("p",{className:"leading-relaxed text-sm",style:{color:Q.textSecondary},children:p.content})]},v))}):i.jsx("p",{className:"leading-relaxed",style:{color:Q.textSecondary},children:h.content})]},g))}):i.jsxs("p",{style:{color:Q.textSecondary},children:["Comprehensive notes summarizing all ",m.lessons.length," lessons in this module."]})})]}),i.jsx("div",{className:"mb-24 rounded-lg shadow-sm",style:{backgroundColor:`${Q.accent}15`,borderWidth:"2px",borderColor:Q.accent},children:i.jsxs("div",{className:"p-12",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[i.jsx(ro,{size:28,style:{color:Q.accent}}),i.jsx("h2",{className:"text-2xl font-black",style:{letterSpacing:"-0.02em",color:Q.textPrimary},children:"Practice Quiz"})]}),i.jsxs("p",{className:"mb-8 leading-relaxed text-lg",style:{color:Q.textSecondary},children:["Test your knowledge with ",m.lessons.length," lessons worth of questions."]}),i.jsx(G,{to:`/quiz/lesson/${d}`,className:"inline-block px-8 py-4 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold",style:{backgroundColor:Q.accent},children:"Start Module Quiz"})]})}),i.jsxs("div",{className:"pt-12 flex justify-between items-center",style:{borderTopWidth:"2px",borderTopColor:Q.border},children:[d>1?i.jsx(G,{to:`/modules/${d-1}`,className:"px-6 py-3 rounded-lg transition font-semibold border-2",style:{color:Q.textPrimary,borderColor:Q.border},children:"← Previous Module"}):i.jsx("div",{}),d<8&&i.jsx(G,{to:`/modules/${d+1}`,className:"px-8 py-4 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold",style:{backgroundColor:Q.primary},children:"Next Module →"})]})]})}):i.jsx("div",{className:"flex-1 p-8",children:i.jsx("p",{children:"Module not found"})})}const Qc="eae_notes";function Zy(e){const[t,n]=b.useState([]),[o,s]=b.useState(!0);b.useEffect(()=>{if(!e){s(!1);return}const m=localStorage.getItem(`${Qc}_${e}`);n(m?JSON.parse(m):[]),s(!1)},[e]);const r=m=>{n(m),localStorage.setItem(`${Qc}_${e}`,JSON.stringify(m))};return{notes:t,loading:o,addNote:async(m,h)=>{const g={id:Date.now().toString(),user_id:e,category:m,content:h,created_at:new Date().toISOString()};return r([g,...t]),g},updateNote:async(m,h)=>{const g=t.map(p=>p.id===m?{...p,content:h,updated_at:new Date().toISOString()}:p);return r(g),g.find(p=>p.id===m)},deleteNote:async m=>{r(t.filter(h=>h.id!==m))},getNotesByCategory:m=>t.filter(h=>h.category===m)}}function Xy({note:e,accent:t,onUpdate:n,onDelete:o}){const[s,r]=b.useState(!1),[a,c]=b.useState(e.content),[u,d]=b.useState(!1),[m,h]=b.useState(!1),g=async()=>{if(a.trim()){d(!0);try{await n(e.id,a.trim()),r(!1)}catch(x){console.error("Error updating note:",x)}finally{d(!1)}}},p=async()=>{try{await o(e.id)}catch(x){console.error("Error deleting note:",x)}},v=()=>{c(e.content),r(!1)};return s?i.jsxs("div",{className:`p-3 rounded-lg border-2 ${t.border} ${t.bg}`,children:[i.jsx("textarea",{autoFocus:!0,value:a,onChange:x=>c(x.target.value),className:`w-full p-2 border ${t.border} rounded resize-none focus:outline-none text-sm text-slate-800 min-h-[60px]`,onKeyDown:x=>{x.key==="Enter"&&(x.metaKey||x.ctrlKey)&&g(),x.key==="Escape"&&v()}}),i.jsxs("div",{className:"flex gap-2 justify-end mt-2",children:[i.jsx("button",{onClick:v,className:"p-1.5 text-slate-500 hover:text-slate-700 transition-colors",children:i.jsx(pt,{size:16})}),i.jsx("button",{onClick:g,disabled:!a.trim()||u,className:`p-1.5 ${t.text} hover:opacity-80 transition-colors disabled:opacity-50`,children:i.jsx(Xo,{size:16})})]})]}):i.jsxs("div",{className:"group p-3 rounded-lg border border-slate-200 hover:border-slate-300 bg-white transition-all duration-200",children:[i.jsx("p",{className:"text-sm text-slate-700 whitespace-pre-wrap leading-relaxed",children:e.content}),i.jsxs("div",{className:"flex items-center justify-between mt-2 pt-2 border-t border-slate-100",children:[i.jsx("span",{className:"text-xs text-slate-400",children:new Date(e.updated_at).toLocaleDateString(void 0,{month:"short",day:"numeric"})}),i.jsx("div",{className:"flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity",children:m?i.jsxs("div",{className:"flex items-center gap-1 text-xs",children:[i.jsx("span",{className:"text-red-500 font-medium",children:"Delete?"}),i.jsx("button",{onClick:p,className:"p-1 text-red-500 hover:text-red-700 transition-colors",children:i.jsx(Xo,{size:14})}),i.jsx("button",{onClick:()=>h(!1),className:"p-1 text-slate-400 hover:text-slate-600 transition-colors",children:i.jsx(pt,{size:14})})]}):i.jsxs(i.Fragment,{children:[i.jsx("button",{onClick:()=>{c(e.content),r(!0)},className:"p-1 text-slate-400 hover:text-slate-600 transition-colors",children:i.jsx(Pm,{size:14})}),i.jsx("button",{onClick:()=>h(!0),className:"p-1 text-slate-400 hover:text-red-500 transition-colors",children:i.jsx(Wm,{size:14})})]})})]})]})}function ew({category:e,notes:t,onAdd:n,onUpdate:o,onDelete:s}){const[r,a]=b.useState(!1),[c,u]=b.useState(""),[d,m]=b.useState(!1),h=async()=>{if(c.trim()){m(!0);try{await n(c.trim()),u(""),a(!1)}catch(p){console.error("Error adding note:",p)}finally{m(!1)}}},g=()=>{u(""),a(!1)};return i.jsxs("div",{className:`border-2 ${e.accent.border} rounded-lg bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl`,children:[i.jsxs("div",{className:`p-5 ${e.accent.bg} border-b-2 ${e.accent.border} flex items-center justify-between`,children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:`w-3 h-3 rounded-full ${e.accent.dot}`}),i.jsx("h2",{className:`text-lg font-bold ${e.accent.text}`,children:e.title})]}),i.jsxs("span",{className:`text-sm font-semibold ${e.accent.text} opacity-70`,children:[t.length," ",t.length===1?"note":"notes"]})]}),i.jsxs("div",{className:"p-5 space-y-3",children:[t.length===0&&!r&&i.jsx("p",{className:"text-slate-400 text-sm italic py-4 text-center",children:e.empty}),t.map(p=>i.jsx(Xy,{note:p,accent:e.accent,onUpdate:o,onDelete:s},p.id)),r?i.jsxs("div",{className:"space-y-3",children:[i.jsx("textarea",{autoFocus:!0,value:c,onChange:p=>u(p.target.value),placeholder:"Write your note...",className:`w-full p-3 border-2 ${e.accent.border} rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-offset-1 text-sm text-slate-800 placeholder-slate-400 min-h-[80px]`,onKeyDown:p=>{p.key==="Enter"&&(p.metaKey||p.ctrlKey)&&h(),p.key==="Escape"&&g()}}),i.jsxs("div",{className:"flex gap-2 justify-end",children:[i.jsx("button",{onClick:g,className:"px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors font-medium",children:"Cancel"}),i.jsx("button",{onClick:h,disabled:!c.trim()||d,className:`px-4 py-1.5 text-sm text-white rounded-lg transition-colors font-medium ${e.accent.button} disabled:opacity-50`,children:d?"Saving...":"Save"})]})]}):i.jsxs("button",{onClick:()=>a(!0),className:`w-full flex items-center justify-center gap-2 py-2.5 border-2 border-dashed ${e.accent.border} rounded-lg ${e.accent.text} hover:${e.accent.bg} transition-colors text-sm font-semibold opacity-70 hover:opacity-100`,children:[i.jsx(Rm,{size:16}),"Add Note"]})]})]})}const vr=[{key:"save_time",label:"Save Time",icon:Cm,title:"How can I save time with AI?",accent:{border:"border-teal-400",bg:"bg-teal-50",text:"text-teal-700",button:"bg-teal-600 hover:bg-teal-700",light:"bg-teal-100",dot:"bg-teal-500",ring:"ring-teal-400",tabActive:"bg-teal-600 text-white",tabHover:"hover:bg-teal-50 hover:text-teal-700"},empty:"Jot down ways AI helps you work faster."},{key:"higher_quality",label:"Higher Quality",icon:ly,title:"How can I produce higher quality with AI?",accent:{border:"border-blue-400",bg:"bg-blue-50",text:"text-blue-700",button:"bg-blue-600 hover:bg-blue-700",light:"bg-blue-100",dot:"bg-blue-500",ring:"ring-blue-400",tabActive:"bg-blue-600 text-white",tabHover:"hover:bg-blue-50 hover:text-blue-700"},empty:"Note ideas for using AI to raise the bar on your work."},{key:"human_skills",label:"Human Skills",icon:Xf,title:"How can I develop human skills?",accent:{border:"border-orange-400",bg:"bg-orange-50",text:"text-orange-700",button:"bg-orange-600 hover:bg-orange-700",light:"bg-orange-100",dot:"bg-orange-500",ring:"ring-orange-400",tabActive:"bg-orange-600 text-white",tabHover:"hover:bg-orange-50 hover:text-orange-700"},empty:"Capture thoughts on the human skills AI can't replace."},{key:"goals",label:"Goals",icon:ui,title:"What are my goals?",accent:{border:"border-emerald-400",bg:"bg-emerald-50",text:"text-emerald-700",button:"bg-emerald-600 hover:bg-emerald-700",light:"bg-emerald-100",dot:"bg-emerald-500",ring:"ring-emerald-400",tabActive:"bg-emerald-600 text-white",tabHover:"hover:bg-emerald-50 hover:text-emerald-700"},empty:"Set goals for your AI learning journey."}];function tw(){const{user:e}=Je(),{loading:t,addNote:n,updateNote:o,deleteNote:s,getNotesByCategory:r}=Zy(e==null?void 0:e.id),[a,c]=b.useState("save_time"),u=vr.find(m=>m.key===a);if(t)return i.jsx("div",{className:"flex-1 overflow-y-auto",children:i.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"mb-10",children:[i.jsx("div",{className:"h-12 w-48 bg-slate-200 rounded animate-pulse mb-3"}),i.jsx("div",{className:"h-6 w-96 bg-slate-100 rounded animate-pulse"})]}),i.jsx("div",{className:"flex gap-2 mb-8",children:[1,2,3,4].map(m=>i.jsx("div",{className:"h-10 w-32 bg-slate-100 rounded-lg animate-pulse"},m))}),i.jsx("div",{className:"h-72 bg-slate-100 rounded-lg animate-pulse"})]})});const d=vr.reduce((m,h)=>m+r(h.key).length,0);return i.jsx("div",{className:"flex-1 overflow-y-auto",style:{backgroundColor:l.colors.background.base},children:i.jsx("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12",children:i.jsxs("div",{className:"space-y-8",children:[i.jsx("div",{className:"rounded-2xl border-2 overflow-hidden",style:{backgroundColor:l.colors.background.card,borderColor:l.colors.accent.cyan},children:i.jsxs("div",{className:"relative p-8 lg:p-12",children:[i.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:`linear-gradient(135deg, ${l.colors.accent.cyan} 0%, ${l.colors.primary.electric} 100%)`}}),i.jsxs("div",{className:"relative",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4",style:{backgroundColor:`${l.colors.accent.cyan}15`,border:`1px solid ${l.colors.accent.cyan}30`},children:[i.jsx(jm,{size:14,style:{color:l.colors.accent.cyan}}),i.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",style:{color:l.colors.accent.cyan},children:"Personal Workspace"})]}),i.jsx("h1",{className:"text-3xl lg:text-5xl font-bold mb-3",style:{color:l.colors.text.primary,letterSpacing:"-0.02em"},children:"Notes"}),i.jsx("p",{className:"text-lg leading-relaxed max-w-2xl mb-6",style:{color:l.colors.text.secondary},children:"Capture your reflections and ideas as you learn. Build a personal knowledge base that grows with your journey."}),i.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:`${l.colors.accent.cyan}10`,border:`1px solid ${l.colors.accent.cyan}30`},children:[i.jsx("span",{className:"text-2xl font-bold",style:{color:l.colors.accent.cyan},children:d}),i.jsx("span",{className:"text-sm font-semibold",style:{color:l.colors.text.secondary},children:d===1?"note saved":"notes saved"})]})]})]})}),i.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3",children:vr.map(m=>{const h=m.icon,g=a===m.key,p=r(m.key).length;return i.jsxs("button",{onClick:()=>c(m.key),className:`p-4 rounded-xl border-2 text-left transition-all ${g?"shadow-lg scale-[1.02]":"hover:shadow-md hover:scale-[1.01]"}`,style:{backgroundColor:g?l.colors.background.card:l.colors.background.subtle,borderColor:g?m.accent.border.replace("border-","#"):l.colors.border.subtle},children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx(h,{size:20,style:{color:g?m.accent.text.replace("text-","#"):l.colors.text.muted}}),p>0&&i.jsx("span",{className:"px-2 py-0.5 text-xs font-bold rounded-full",style:{backgroundColor:g?`${m.accent.border.replace("border-","#")}20`:l.colors.background.card,color:g?m.accent.text.replace("text-","#"):l.colors.text.muted},children:p})]}),i.jsx("p",{className:"font-semibold text-sm",style:{color:g?l.colors.text.primary:l.colors.text.secondary},children:m.label})]},m.key)})}),i.jsx("div",{children:i.jsx(ew,{category:u,notes:r(u.key),onAdd:m=>n(u.key,m),onUpdate:o,onDelete:s},u.key)})]})})})}const nw="/app/assets/app-framework-D0BCrkQe.pdf";function ow(){return Je(),i.jsx("div",{className:"flex-1 overflow-y-auto",style:{backgroundColor:l.colors.background.base},children:i.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12",children:i.jsxs("div",{className:"space-y-8",children:[i.jsx("div",{className:"rounded-2xl border-2 overflow-hidden",style:{backgroundColor:l.colors.background.card,borderColor:l.colors.accent.coral},children:i.jsxs("div",{className:"relative p-8 lg:p-12",children:[i.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:`linear-gradient(135deg, ${l.colors.accent.coral} 0%, ${l.colors.primary.electric} 100%)`}}),i.jsxs("div",{className:"relative",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4",style:{backgroundColor:`${l.colors.accent.coral}15`,border:`1px solid ${l.colors.accent.coral}30`},children:[i.jsx(ro,{size:14,style:{color:l.colors.accent.coral}}),i.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",style:{color:l.colors.accent.coral},children:"Learning Resources"})]}),i.jsx("h1",{className:"text-3xl lg:text-5xl font-bold mb-3",style:{color:l.colors.text.primary,letterSpacing:"-0.02em"},children:"Resources"}),i.jsx("p",{className:"text-lg leading-relaxed max-w-2xl",style:{color:l.colors.text.secondary},children:"Tools, templates, and guides to support your learning journey and maximize the value of your training."})]})]})}),i.jsxs("div",{className:"grid gap-6",children:[i.jsx("div",{className:"p-6 lg:p-8 rounded-xl border-2",style:{backgroundColor:l.colors.background.card,borderColor:l.colors.border.subtle},children:i.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[i.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",style:{backgroundColor:`${l.colors.primary.electric}15`},children:i.jsx(_n,{size:24,style:{color:l.colors.primary.electric}})}),i.jsxs("div",{className:"flex-1",children:[i.jsx("h2",{className:"text-xl font-bold mb-2",style:{color:l.colors.text.primary},children:"Learner Profile Templates"}),i.jsx("p",{className:"leading-relaxed mb-4",style:{color:l.colors.text.secondary},children:"Create your learner profile to personalize your AI learning experience and track your progress effectively."}),i.jsx("p",{className:"text-sm px-4 py-3 rounded-lg",style:{color:l.colors.text.muted,backgroundColor:l.colors.background.subtle},children:"Coming soon: Downloadable templates for personalizing your learning journey"})]})]})}),i.jsx("div",{className:"p-6 lg:p-8 rounded-xl border-2",style:{backgroundColor:l.colors.background.card,borderColor:l.colors.border.subtle},children:i.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[i.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",style:{backgroundColor:`${l.colors.accent.cyan}15`},children:i.jsx(_n,{size:24,style:{color:l.colors.accent.cyan}})}),i.jsxs("div",{className:"flex-1",children:[i.jsx("h2",{className:"text-xl font-bold mb-2",style:{color:l.colors.text.primary},children:"AI Response Prompts"}),i.jsx("p",{className:"leading-relaxed mb-4",style:{color:l.colors.text.secondary},children:"Pre-built prompts to use with AI for explaining course content, generating examples, and deepening your understanding."}),i.jsx("p",{className:"text-sm px-4 py-3 rounded-lg",style:{color:l.colors.text.muted,backgroundColor:l.colors.background.subtle},children:"Coming soon: Curated AI prompt templates for enhanced learning"})]})]})}),i.jsxs("div",{className:"p-6 lg:p-8 rounded-xl border-2 transition-all hover:shadow-lg",style:{backgroundColor:l.colors.background.card,borderColor:l.colors.accent.coral},children:[i.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[i.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",style:{backgroundColor:`${l.colors.accent.coral}15`},children:i.jsx(_n,{size:24,style:{color:l.colors.accent.coral}})}),i.jsxs("div",{className:"flex-1",children:[i.jsx("h2",{className:"text-xl font-bold mb-2",style:{color:l.colors.text.primary},children:"How-To Guides"}),i.jsx("p",{className:"leading-relaxed",style:{color:l.colors.text.secondary},children:"Step-by-step guides for getting the most out of the course and applying AI concepts to your work."})]})]}),i.jsx("div",{className:"p-5 rounded-xl border-2 transition-all hover:shadow-md",style:{backgroundColor:l.colors.background.subtle,borderColor:l.colors.border.subtle},children:i.jsxs("div",{className:"flex items-center justify-between gap-6",children:[i.jsxs("div",{className:"flex-1",children:[i.jsx("h3",{className:"text-lg font-bold mb-2",style:{color:l.colors.text.primary},children:"The APP Framework"}),i.jsx("p",{className:"text-sm leading-relaxed",style:{color:l.colors.text.secondary},children:"A comprehensive framework for understanding and applying key AI concepts in your workflow"})]}),i.jsxs("a",{href:nw,download:"app-framework.pdf",className:"group flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold transition-all hover:scale-105 flex-shrink-0",style:{background:`linear-gradient(135deg, ${l.colors.accent.coral} 0%, ${l.colors.primary.electric} 100%)`},children:[i.jsx(Tm,{size:18}),i.jsx("span",{children:"Download PDF"})]})]})})]})]})]})})})}const Kc="eae_prompts";function iw(e){const[t,n]=b.useState([]),[o,s]=b.useState(!0);b.useEffect(()=>{if(!e){s(!1);return}const m=localStorage.getItem(`${Kc}_${e}`);n(m?JSON.parse(m):[]),s(!1)},[e]);const r=m=>{n(m),localStorage.setItem(`${Kc}_${e}`,JSON.stringify(m))};return{prompts:t,loading:o,addPrompt:async(m,h,g)=>{const p={id:Date.now().toString(),user_id:e,category:m,title:h,content:g,created_at:new Date().toISOString()};return r([p,...t]),p},updatePrompt:async(m,h,g)=>{const p=t.map(v=>v.id===m?{...v,title:h,content:g,updated_at:new Date().toISOString()}:v);return r(p),p.find(v=>v.id===m)},deletePrompt:async m=>{r(t.filter(h=>h.id!==m))},getPromptsByCategory:m=>t.filter(h=>h.category===m)}}function sw({prompt:e,accent:t,onUpdate:n,onDelete:o}){const[s,r]=b.useState(!1),[a,c]=b.useState(e.title),[u,d]=b.useState(e.content),[m,h]=b.useState(!1),[g,p]=b.useState(!1),[v,x]=b.useState(!1),A=async()=>{if(u.trim()){h(!0);try{await n(e.id,a.trim(),u.trim()),r(!1)}catch(k){console.error("Error updating prompt:",k)}finally{h(!1)}}},y=async()=>{try{await o(e.id)}catch(k){console.error("Error deleting prompt:",k)}},f=()=>{navigator.clipboard.writeText(e.content),x(!0),setTimeout(()=>x(!1),2e3)},w=()=>{c(e.title),d(e.content),r(!1)};return s?i.jsxs("div",{className:`p-4 rounded-lg border-2 ${t.border} ${t.bg}`,children:[i.jsx("input",{autoFocus:!0,value:a,onChange:k=>c(k.target.value),placeholder:"Prompt title...",className:`w-full p-2 mb-2 border ${t.border} rounded text-sm font-semibold text-slate-800 focus:outline-none`}),i.jsx("textarea",{value:u,onChange:k=>d(k.target.value),className:`w-full p-2 border ${t.border} rounded resize-none focus:outline-none text-sm text-slate-800 min-h-[80px]`,onKeyDown:k=>{k.key==="Enter"&&(k.metaKey||k.ctrlKey)&&A(),k.key==="Escape"&&w()}}),i.jsxs("div",{className:"flex gap-2 justify-end mt-2",children:[i.jsx("button",{onClick:w,className:"p-1.5 text-slate-500 hover:text-slate-700 transition-colors",children:i.jsx(pt,{size:16})}),i.jsx("button",{onClick:A,disabled:!u.trim()||m,className:`p-1.5 ${t.text} hover:opacity-80 transition-colors disabled:opacity-50`,children:i.jsx(Xo,{size:16})})]})]}):i.jsxs("div",{className:"group p-4 rounded-lg border border-slate-200 hover:border-slate-300 bg-white transition-all duration-200",children:[i.jsxs("div",{className:"flex items-start justify-between gap-3",children:[i.jsxs("div",{className:"flex-1 min-w-0",children:[e.title&&i.jsx("h4",{className:"text-sm font-bold text-slate-900 mb-1.5",children:e.title}),i.jsx("p",{className:"text-sm text-slate-700 whitespace-pre-wrap leading-relaxed",children:e.content})]}),i.jsx("button",{onClick:f,className:`flex-shrink-0 p-2 rounded-lg transition-all duration-200 ${v?`${t.bg} ${t.text}`:"bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600"}`,title:"Copy prompt",children:v?i.jsx(Vf,{size:16}):i.jsx(ya,{size:16})})]}),i.jsxs("div",{className:"flex items-center justify-between mt-3 pt-2 border-t border-slate-100",children:[i.jsx("span",{className:"text-xs text-slate-400",children:new Date(e.updated_at).toLocaleDateString(void 0,{month:"short",day:"numeric"})}),i.jsx("div",{className:"flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity",children:g?i.jsxs("div",{className:"flex items-center gap-1 text-xs",children:[i.jsx("span",{className:"text-red-500 font-medium",children:"Delete?"}),i.jsx("button",{onClick:y,className:"p-1 text-red-500 hover:text-red-700 transition-colors",children:i.jsx(Xo,{size:14})}),i.jsx("button",{onClick:()=>p(!1),className:"p-1 text-slate-400 hover:text-slate-600 transition-colors",children:i.jsx(pt,{size:14})})]}):i.jsxs(i.Fragment,{children:[i.jsx("button",{onClick:()=>{c(e.title),d(e.content),r(!0)},className:"p-1 text-slate-400 hover:text-slate-600 transition-colors",children:i.jsx(Pm,{size:14})}),i.jsx("button",{onClick:()=>p(!0),className:"p-1 text-slate-400 hover:text-red-500 transition-colors",children:i.jsx(Wm,{size:14})})]})})]})]})}function rw({category:e,prompts:t,onAdd:n,onUpdate:o,onDelete:s}){const[r,a]=b.useState(!1),[c,u]=b.useState(""),[d,m]=b.useState(""),[h,g]=b.useState(!1),p=async()=>{if(d.trim()){g(!0);try{await n(c.trim(),d.trim()),u(""),m(""),a(!1)}catch(x){console.error("Error adding prompt:",x)}finally{g(!1)}}},v=()=>{u(""),m(""),a(!1)};return i.jsxs("div",{className:`border-2 ${e.accent.border} rounded-lg bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl`,children:[i.jsxs("div",{className:`p-5 ${e.accent.bg} border-b-2 ${e.accent.border} flex items-center justify-between`,children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:`w-3 h-3 rounded-full ${e.accent.dot}`}),i.jsx("h2",{className:`text-lg font-bold ${e.accent.text}`,children:e.title})]}),i.jsxs("span",{className:`text-sm font-semibold ${e.accent.text} opacity-70`,children:[t.length," ",t.length===1?"prompt":"prompts"]})]}),i.jsxs("div",{className:"p-5 space-y-3",children:[t.length===0&&!r&&i.jsx("p",{className:"text-slate-400 text-sm italic py-4 text-center",children:e.empty}),t.map(x=>i.jsx(sw,{prompt:x,accent:e.accent,onUpdate:o,onDelete:s},x.id)),r?i.jsxs("div",{className:"space-y-3",children:[i.jsx("input",{autoFocus:!0,value:c,onChange:x=>u(x.target.value),placeholder:"Prompt title (optional)...",className:`w-full p-3 border-2 ${e.accent.border} rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 text-sm font-semibold text-slate-800 placeholder-slate-400`}),i.jsx("textarea",{value:d,onChange:x=>m(x.target.value),placeholder:"Write your prompt...",className:`w-full p-3 border-2 ${e.accent.border} rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-offset-1 text-sm text-slate-800 placeholder-slate-400 min-h-[100px]`,onKeyDown:x=>{x.key==="Enter"&&(x.metaKey||x.ctrlKey)&&p(),x.key==="Escape"&&v()}}),i.jsxs("div",{className:"flex gap-2 justify-end",children:[i.jsx("button",{onClick:v,className:"px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors font-medium",children:"Cancel"}),i.jsx("button",{onClick:p,disabled:!d.trim()||h,className:`px-4 py-1.5 text-sm text-white rounded-lg transition-colors font-medium ${e.accent.button} disabled:opacity-50`,children:h?"Saving...":"Save"})]})]}):i.jsxs("button",{onClick:()=>a(!0),className:`w-full flex items-center justify-center gap-2 py-2.5 border-2 border-dashed ${e.accent.border} rounded-lg ${e.accent.text} hover:${e.accent.bg} transition-colors text-sm font-semibold opacity-70 hover:opacity-100`,children:[i.jsx(Rm,{size:16}),"Add Prompt"]})]})]})}const br=[{key:"productivity",label:"Productivity",icon:xn,title:"Speed up your workflow",accent:{border:"border-teal-400",bg:"bg-teal-50",text:"text-teal-700",button:"bg-teal-600 hover:bg-teal-700",light:"bg-teal-100",dot:"bg-teal-500",ring:"ring-teal-400",tabActive:"bg-teal-600 text-white",tabHover:"hover:bg-teal-50 hover:text-teal-700"},empty:"Save prompts that help you get things done faster."},{key:"writing",label:"Writing",icon:ay,title:"Writing and communication",accent:{border:"border-blue-400",bg:"bg-blue-50",text:"text-blue-700",button:"bg-blue-600 hover:bg-blue-700",light:"bg-blue-100",dot:"bg-blue-500",ring:"ring-blue-400",tabActive:"bg-blue-600 text-white",tabHover:"hover:bg-blue-50 hover:text-blue-700"},empty:"Store prompts for emails, articles, reports, and more."},{key:"analysis",label:"Analysis",icon:Im,title:"Research and analysis",accent:{border:"border-amber-400",bg:"bg-amber-50",text:"text-amber-700",button:"bg-amber-600 hover:bg-amber-700",light:"bg-amber-100",dot:"bg-amber-500",ring:"ring-amber-400",tabActive:"bg-amber-600 text-white",tabHover:"hover:bg-amber-50 hover:text-amber-700"},empty:"Collect prompts for data analysis, research, and critical thinking."},{key:"creative",label:"Creative",icon:xl,title:"Creative and brainstorming",accent:{border:"border-emerald-400",bg:"bg-emerald-50",text:"text-emerald-700",button:"bg-emerald-600 hover:bg-emerald-700",light:"bg-emerald-100",dot:"bg-emerald-500",ring:"ring-emerald-400",tabActive:"bg-emerald-600 text-white",tabHover:"hover:bg-emerald-50 hover:text-emerald-700"},empty:"Keep prompts for ideation, brainstorming, and creative work."},{key:"custom",label:"Custom",icon:zm,title:"Your custom prompts",accent:{border:"border-slate-400",bg:"bg-slate-50",text:"text-slate-700",button:"bg-slate-600 hover:bg-slate-700",light:"bg-slate-100",dot:"bg-slate-500",ring:"ring-slate-400",tabActive:"bg-slate-600 text-white",tabHover:"hover:bg-slate-50 hover:text-slate-700"},empty:"A catch-all for any prompts that don't fit other categories."}];function aw(){const{user:e}=Je(),{loading:t,addPrompt:n,updatePrompt:o,deletePrompt:s,getPromptsByCategory:r}=iw(e==null?void 0:e.id),[a,c]=b.useState("productivity"),u=br.find(m=>m.key===a);if(t)return i.jsx("div",{className:"flex-1 overflow-y-auto",children:i.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"mb-10",children:[i.jsx("div",{className:"h-12 w-48 bg-slate-200 rounded animate-pulse mb-3"}),i.jsx("div",{className:"h-6 w-96 bg-slate-100 rounded animate-pulse"})]}),i.jsx("div",{className:"flex gap-2 mb-8",children:[1,2,3,4,5].map(m=>i.jsx("div",{className:"h-10 w-28 bg-slate-100 rounded-lg animate-pulse"},m))}),i.jsx("div",{className:"h-72 bg-slate-100 rounded-lg animate-pulse"})]})});const d=br.reduce((m,h)=>m+r(h.key).length,0);return i.jsx("div",{className:"flex-1 overflow-y-auto",style:{backgroundColor:l.colors.background.base},children:i.jsx("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12",children:i.jsxs("div",{className:"space-y-8",children:[i.jsx("div",{className:"rounded-2xl border-2 overflow-hidden",style:{backgroundColor:l.colors.background.card,borderColor:l.colors.primary.electric},children:i.jsxs("div",{className:"relative p-8 lg:p-12",children:[i.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:`linear-gradient(135deg, ${l.colors.primary.electric} 0%, ${l.colors.accent.cyan} 100%)`}}),i.jsxs("div",{className:"relative",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4",style:{backgroundColor:`${l.colors.primary.electric}15`,border:`1px solid ${l.colors.primary.electric}30`},children:[i.jsx(ey,{size:14,style:{color:l.colors.primary.electric}}),i.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",style:{color:l.colors.primary.electric},children:"Prompt Library"})]}),i.jsx("h1",{className:"text-3xl lg:text-5xl font-bold mb-3",style:{color:l.colors.text.primary,letterSpacing:"-0.02em"},children:"Prompt Vault"}),i.jsx("p",{className:"text-lg leading-relaxed max-w-2xl mb-6",style:{color:l.colors.text.secondary},children:"Build your personal library of AI prompts. Save, organize, and reuse your best prompts with one click."}),i.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:`${l.colors.primary.electric}10`,border:`1px solid ${l.colors.primary.electric}30`},children:[i.jsx("span",{className:"text-2xl font-bold",style:{color:l.colors.primary.electric},children:d}),i.jsx("span",{className:"text-sm font-semibold",style:{color:l.colors.text.secondary},children:d===1?"prompt saved":"prompts saved"})]})]})]})}),i.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-5 gap-3",children:br.map(m=>{const h=m.icon,g=a===m.key,p=r(m.key).length;return i.jsxs("button",{onClick:()=>c(m.key),className:`p-4 rounded-xl border-2 text-left transition-all ${g?"shadow-lg scale-[1.02]":"hover:shadow-md hover:scale-[1.01]"}`,style:{backgroundColor:g?l.colors.background.card:l.colors.background.subtle,borderColor:g?m.accent.border.replace("border-","#"):l.colors.border.subtle},children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx(h,{size:20,style:{color:g?m.accent.text.replace("text-","#"):l.colors.text.muted}}),p>0&&i.jsx("span",{className:"px-2 py-0.5 text-xs font-bold rounded-full",style:{backgroundColor:g?`${m.accent.border.replace("border-","#")}20`:l.colors.background.card,color:g?m.accent.text.replace("text-","#"):l.colors.text.muted},children:p})]}),i.jsx("p",{className:"font-semibold text-sm",style:{color:g?l.colors.text.primary:l.colors.text.secondary},children:m.label})]},m.key)})}),i.jsx("div",{children:i.jsx(rw,{category:u,prompts:r(u.key),onAdd:(m,h)=>n(u.key,m,h),onUpdate:o,onDelete:s},u.key)})]})})})}const Oe={bg:l.colors.background.light||l.colors.background.base,cardBg:l.colors.background.card,textPrimary:l.colors.text.primary,textSecondary:l.colors.text.secondary,accent:l.colors.accent.cyan,primary:l.colors.primary.deep,primaryElectric:l.colors.primary.electric,border:l.colors.border.subtle,success:l.colors.status.success,shadow:gy("large")};function lw(){const{user:e}=Je(),{completions:t,loading:n}=di(e==null?void 0:e.id,[]),[o,s]=b.useState(""),[r,a]=b.useState(!1),c=b.useRef(null),u=Um(t),d=u.percentComplete===100;b.useEffect(()=>{e!=null&&e.username&&s(e.username)},[e]);const m=(()=>{var x;if(!d)return null;const v=t.filter(A=>A.completed&&A.category==="lesson"&&A.completed_at).sort((A,y)=>new Date(y.completed_at)-new Date(A.completed_at));return(x=v[0])!=null&&x.completed_at?new Date(v[0].completed_at):new Date})(),h=e!=null&&e.id?e.id.substring(0,8).toUpperCase():"",g=()=>{window.print()},p=()=>{navigator.clipboard.writeText("I completed the Strategic AI Mastery program by Energise AI -- 44 lessons across 8 modules of hands-on AI strategy."),a(!0),setTimeout(()=>a(!1),3e3)};return n?i.jsx("div",{className:"flex-1 flex items-center justify-center",children:i.jsx("div",{className:"text-slate-500",children:"Loading..."})}):d?i.jsxs("div",{className:"flex-1 overflow-y-auto",children:[i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12",children:[i.jsxs("div",{className:"text-center mb-8",children:[i.jsx("h1",{className:"text-4xl sm:text-5xl font-black text-slate-900 mb-3",style:{letterSpacing:"-0.02em"},children:"Your Certificate"}),i.jsx("p",{className:"text-lg text-slate-600",children:"Congratulations on completing the full program"})]}),i.jsxs("div",{className:"flex justify-center gap-3 mb-8",children:[i.jsxs("button",{onClick:g,className:"flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors text-sm",children:[i.jsx(Tm,{size:16}),"Print / Save PDF"]}),i.jsxs("button",{onClick:p,className:"flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors text-sm",children:[i.jsx(Mm,{size:16}),r?"Copied!":"Copy Share Text"]})]}),i.jsx("div",{ref:c,id:"certificate",className:"certificate-print",children:i.jsxs("div",{className:"relative mx-auto rounded-2xl overflow-hidden",style:{background:"linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",boxShadow:Oe.shadow,maxWidth:"800px"},children:[i.jsxs("div",{className:"absolute inset-0 opacity-10",children:[i.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 rounded-full",style:{background:`radial-gradient(circle, ${Oe.accent}40, transparent 70%)`,transform:"translate(30%, -30%)"}}),i.jsx("div",{className:"absolute bottom-0 left-0 w-80 h-80 rounded-full",style:{background:`radial-gradient(circle, ${Oe.primaryElectric}40, transparent 70%)`,transform:"translate(-30%, 30%)"}})]}),i.jsxs("div",{className:"relative px-8 sm:px-16 py-12 sm:py-16",children:[i.jsxs("div",{className:"text-center mb-10",children:[i.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6",children:[i.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center",style:{background:`linear-gradient(135deg, ${Oe.accent}, ${Oe.primaryElectric})`},children:i.jsx(fa,{size:22,className:"text-white"})}),i.jsx("span",{className:"text-white font-bold text-lg tracking-wide",children:"ENERGISE AI"})]}),i.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.3em] mb-2",style:{color:Oe.accent},children:"Certificate of Completion"}),i.jsx("div",{className:"w-16 h-0.5 mx-auto rounded-full",style:{background:`linear-gradient(90deg, transparent, ${Oe.accent}, transparent)`}})]}),i.jsxs("div",{className:"text-center mb-10",children:[i.jsx("p",{className:"text-slate-400 text-sm mb-3",children:"This certifies that"}),i.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-white mb-3",style:{letterSpacing:"-0.02em"},children:o||"Learner"}),i.jsx("div",{className:"w-48 h-px mx-auto bg-slate-600 mb-6"}),i.jsx("p",{className:"text-slate-400 text-sm leading-relaxed max-w-md mx-auto",children:"has successfully completed all 44 lessons across 8 modules of the"}),i.jsx("h3",{className:"text-xl sm:text-2xl font-bold mt-3",style:{color:Oe.accent},children:"Strategic AI Mastery Program"})]}),i.jsx("div",{className:"grid grid-cols-3 gap-4 mb-10",children:[{label:"Lessons",value:"44"},{label:"Modules",value:"8"},{label:"Completed",value:(m==null?void 0:m.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}))||""}].map(v=>i.jsxs("div",{className:"text-center p-3 rounded-lg bg-white/5",children:[i.jsx("p",{className:"text-lg sm:text-xl font-bold text-white",children:v.value}),i.jsx("p",{className:"text-xs text-slate-400 uppercase tracking-wider mt-1",children:v.label})]},v.label))}),i.jsxs("div",{className:"flex items-center justify-between pt-6 border-t border-slate-700",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-xs text-slate-500",children:"Certificate ID"}),i.jsx("p",{className:"text-sm font-mono text-slate-400",children:h})]}),i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsx(yn,{size:14,style:{color:Oe.success}}),i.jsx("span",{className:"text-xs font-semibold",style:{color:Oe.success},children:"Verified"})]})]})]})]})})]}),i.jsx("style",{children:`
        @media print {
          body * { visibility: hidden; }
          .certificate-print, .certificate-print * { visibility: visible; }
          .certificate-print { position: absolute; left: 0; top: 0; width: 100%; padding: 2rem; }
        }
      `})]}):i.jsx("div",{className:"flex-1 overflow-y-auto",children:i.jsxs("div",{className:"max-w-2xl mx-auto px-8 py-16 text-center",children:[i.jsx("div",{className:"w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6",children:i.jsx(wn,{size:32,className:"text-slate-400"})}),i.jsx("h1",{className:"text-4xl font-black text-slate-900 mb-4",style:{letterSpacing:"-0.02em"},children:"Certificate Locked"}),i.jsxs("p",{className:"text-lg text-slate-600 mb-8 leading-relaxed",children:["Complete all 44 lessons to unlock your Strategic AI Mastery certificate. You've completed ",u.lessonsCompleted," so far -- ",44-u.lessonsCompleted," to go."]}),i.jsx("div",{className:"w-full bg-slate-100 rounded-full h-4 mb-8 overflow-hidden",children:i.jsx("div",{className:"h-full rounded-full transition-all duration-700",style:{width:`${u.percentComplete}%`,background:`linear-gradient(90deg, ${Oe.accent}, ${Oe.primaryElectric})`}})}),i.jsx(G,{to:"/progress",className:"inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors",children:"Continue Learning"})]})})}const q={primary:"#2563EB",primaryHover:"#1D4ED8",primaryLight:"#EFF6FF",success:"#16A34A",successLight:"#DCFCE7",error:"#EF4444",errorLight:"#FEE2E2",bg:"#F8FAFC",secondaryBg:"#FFFFFF",cardBg:"#FFFFFF",text:"#1E293B",textSecondary:"#64748B",textMuted:"#94A3B8",border:"#E2E8F0",borderFocus:"#2563EB"},O={xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"3rem"},D={fontFamily:"'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",heading:"1.75rem",subheading:"1.25rem",body:"1rem",small:"0.875rem",tiny:"0.75rem",lineHeightTight:"1.25",lineHeightNormal:"1.5",lineHeightRelaxed:"1.75",normal:"400",medium:"500",semibold:"600",bold:"700"},Vc="0.75rem",jn="0.5rem",xr={sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",focus:"0 0 0 3px rgba(99, 102, 241, 0.3)"},Wi={fast:"150ms ease",normal:"200ms ease",slow:"300ms ease"},cw=({lessonData:e,onBack:t})=>{const[n,o]=b.useState(0),[s,r]=b.useState({}),[a,c]=b.useState(!1),[u,d]=b.useState(!1),[m,h]=b.useState(null),[g,p]=b.useState(""),v=e.questions[n],x=e.questions.length,A=(n+1)/x*100,y=(v==null?void 0:v.type)==="mcq"?m!==null:g.trim().length>0,f=I=>{a||h(I===m?null:I)},w=I=>{p(I.target.value)},k=()=>{const I=v.type==="mcq"?m:g;r(M=>({...M,[v.id]:I})),c(!0)},S=()=>{n<x-1?(o(I=>I+1),c(!1),h(null),p("")):d(!0)},T=()=>{o(0),r({}),c(!1),d(!1),h(null),p("")},N=I=>{I.key==="Enter"&&!I.shiftKey&&y&&!a&&(I.preventDefault(),k())},R=()=>{let I=0,M=0,_=0;e.questions.forEach(ke=>{ke.type==="mcq"?s[ke.id]===ke.correct?I++:M++:_++});const Y=e.questions.filter(ke=>ke.type==="mcq").length;return{correct:I,incorrect:M,shortAnswerCount:_,totalMCQ:Y}},C={container:{minHeight:"100vh",backgroundColor:q.bg,fontFamily:D.fontFamily,padding:O.lg,boxSizing:"border-box"},innerContainer:{maxWidth:"800px",margin:"0 auto"},header:{marginBottom:O.xl},lessonTitle:{fontSize:D.heading,fontWeight:D.bold,color:q.text,marginBottom:O.sm,lineHeight:D.lineHeightTight},progressContainer:{display:"flex",alignItems:"center",gap:O.md,marginBottom:O.md},progressBar:{flex:1,height:"8px",backgroundColor:q.border,borderRadius:"4px",overflow:"hidden"},progressFill:{height:"100%",backgroundColor:q.primary,borderRadius:"4px",transition:`width ${Wi.normal}`,width:`${A}%`},progressText:{fontSize:D.small,color:q.textSecondary,fontWeight:D.medium,whiteSpace:"nowrap"},questionCard:{backgroundColor:q.cardBg,borderRadius:Vc,boxShadow:xr.md,padding:O.xl,marginBottom:O.lg},questionType:{display:"inline-block",fontSize:D.tiny,fontWeight:D.semibold,color:q.primary,backgroundColor:q.primaryLight,padding:`${O.xs} ${O.sm}`,borderRadius:jn,marginBottom:O.md,textTransform:"uppercase",letterSpacing:"0.05em"},questionText:{fontSize:D.subheading,fontWeight:D.semibold,color:q.text,lineHeight:D.lineHeightRelaxed,marginBottom:O.lg},optionsContainer:{display:"flex",flexDirection:"column",gap:O.sm},optionButton:(I,M,_,Y)=>({display:"flex",alignItems:"flex-start",gap:O.md,padding:O.md,border:`2px solid ${Y&&M?q.success:Y&&_?q.error:I?q.primary:q.border}`,borderRadius:jn,backgroundColor:Y&&M?q.successLight:Y&&_?q.errorLight:I?q.primaryLight:q.secondaryBg,cursor:Y?"default":"pointer",transition:`all ${Wi.fast}`,textAlign:"left",width:"100%",fontFamily:D.fontFamily,fontSize:D.body}),optionLetter:(I,M,_,Y)=>({display:"flex",alignItems:"center",justifyContent:"center",minWidth:"28px",height:"28px",borderRadius:"50%",backgroundColor:Y&&M?q.success:Y&&_?q.error:I?q.primary:q.border,color:Y&&(M||_)||I?"#fff":q.textSecondary,fontSize:D.small,fontWeight:D.semibold,flexShrink:0}),optionText:{flex:1,lineHeight:D.lineHeightNormal,color:q.text},textArea:{width:"100%",minHeight:"150px",padding:O.md,border:`2px solid ${q.border}`,borderRadius:jn,fontSize:D.body,fontFamily:D.fontFamily,lineHeight:D.lineHeightRelaxed,resize:"vertical",boxSizing:"border-box",transition:`border-color ${Wi.fast}`,outline:"none"},answerReveal:{marginTop:O.lg,padding:O.lg,backgroundColor:q.successLight,borderRadius:jn,borderLeft:`4px solid ${q.success}`},answerLabel:{fontSize:D.small,fontWeight:D.semibold,color:q.success,marginBottom:O.xs,textTransform:"uppercase",letterSpacing:"0.05em"},answerText:{fontSize:D.body,color:q.text,lineHeight:D.lineHeightRelaxed,marginBottom:O.md},explanationLabel:{fontSize:D.small,fontWeight:D.semibold,color:q.textSecondary,marginBottom:O.xs,textTransform:"uppercase",letterSpacing:"0.05em"},explanationText:{fontSize:D.small,color:q.textSecondary,lineHeight:D.lineHeightRelaxed},buttonContainer:{display:"flex",justifyContent:"flex-end",gap:O.md},button:(I,M)=>({padding:`${O.md} ${O.xl}`,borderRadius:jn,fontSize:D.body,fontWeight:D.semibold,fontFamily:D.fontFamily,cursor:M?"not-allowed":"pointer",transition:`all ${Wi.fast}`,backgroundColor:I?M?q.textMuted:q.primary:q.secondaryBg,color:I?"#fff":q.text,boxShadow:I&&!M?xr.sm:"none",border:I?"none":`2px solid ${q.border}`,opacity:M?.6:1}),resultsContainer:{backgroundColor:q.cardBg,borderRadius:Vc,boxShadow:xr.lg,padding:O.xxl,textAlign:"center"},resultsTitle:{fontSize:D.heading,fontWeight:D.bold,color:q.text,marginBottom:O.lg},scoreDisplay:{fontSize:"4rem",fontWeight:D.bold,color:q.primary,marginBottom:O.md},scoreLabel:{fontSize:D.body,color:q.textSecondary,marginBottom:O.xl},statsGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:O.md,marginBottom:O.xl},statBox:I=>({padding:O.lg,backgroundColor:I==="success"?q.successLight:I==="error"?q.errorLight:q.primaryLight,borderRadius:jn}),statNumber:I=>({fontSize:D.heading,fontWeight:D.bold,color:I==="success"?q.success:I==="error"?q.error:q.primary}),statLabel:{fontSize:D.small,color:q.textSecondary,marginTop:O.xs},resultsButtons:{display:"flex",justifyContent:"center",gap:O.md,flexWrap:"wrap"},mcqResultIndicator:I=>({display:"flex",alignItems:"center",gap:O.xs,fontSize:D.small,fontWeight:D.semibold,color:I?q.success:q.error,marginTop:O.sm})};if(u){const{correct:I,incorrect:M,shortAnswerCount:_,totalMCQ:Y}=R(),ke=Y>0?Math.round(I/Y*100):0;return i.jsx("div",{style:C.container,children:i.jsx("div",{style:C.innerContainer,children:i.jsxs("div",{style:C.resultsContainer,children:[i.jsx("h1",{style:C.resultsTitle,children:"Quiz Complete! 🎉"}),i.jsxs("div",{style:C.scoreDisplay,children:[ke,"%"]}),i.jsxs("p",{style:C.scoreLabel,children:["You scored ",I," out of ",Y," multiple choice questions"]}),i.jsxs("div",{style:C.statsGrid,children:[i.jsxs("div",{style:C.statBox("success"),children:[i.jsx("div",{style:C.statNumber("success"),children:I}),i.jsx("div",{style:C.statLabel,children:"Correct"})]}),i.jsxs("div",{style:C.statBox("primary"),children:[i.jsx("div",{style:C.statNumber("primary"),children:_}),i.jsx("div",{style:C.statLabel,children:"Short Answer"})]}),i.jsxs("div",{style:C.statBox("error"),children:[i.jsx("div",{style:C.statNumber("error"),children:M}),i.jsx("div",{style:C.statLabel,children:"Incorrect"})]})]}),i.jsxs("div",{style:C.resultsButtons,children:[i.jsx("button",{style:C.button(!1,!1),onClick:T,onMouseOver:Te=>Te.target.style.backgroundColor=q.bg,onMouseOut:Te=>Te.target.style.backgroundColor=q.secondaryBg,children:"Restart Quiz"}),t&&i.jsx("button",{style:C.button(!0,!1),onClick:t,onMouseOver:Te=>Te.target.style.backgroundColor=q.primaryHover,onMouseOut:Te=>Te.target.style.backgroundColor=q.primary,children:"Back to Lessons"})]})]})})})}return i.jsx("div",{style:C.container,children:i.jsxs("div",{style:C.innerContainer,children:[i.jsxs("div",{style:C.header,children:[i.jsxs("h1",{style:C.lessonTitle,children:["Lesson ",e.lesson,": ",e.title]}),i.jsxs("div",{style:C.progressContainer,children:[i.jsx("div",{style:C.progressBar,children:i.jsx("div",{style:C.progressFill})}),i.jsxs("span",{style:C.progressText,children:["Question ",n+1," of ",x]})]})]}),i.jsxs("div",{style:C.questionCard,children:[i.jsx("span",{style:C.questionType,children:v.type==="mcq"?"Multiple Choice":"Short Answer"}),i.jsx("p",{style:C.questionText,children:v.question}),v.type==="mcq"&&i.jsx("div",{style:C.optionsContainer,children:v.options.map((I,M)=>{const _=m===M,Y=a&&M===v.correct,ke=a&&_&&M!==v.correct,Te=["A","B","C","D"];return i.jsxs("button",{style:C.optionButton(_,Y,ke,a),onClick:()=>f(M),disabled:a,children:[i.jsx("span",{style:C.optionLetter(_,Y,ke,a),children:Te[M]}),i.jsx("span",{style:C.optionText,children:I})]},M)})}),v.type==="short"&&!a&&i.jsx("textarea",{style:C.textArea,value:g,onChange:w,onKeyDown:N,placeholder:"Type your answer here...",onFocus:I=>I.target.style.borderColor=q.borderFocus,onBlur:I=>I.target.style.borderColor=q.border}),a&&i.jsx("div",{style:C.answerReveal,children:v.type==="mcq"?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:C.mcqResultIndicator(s[v.id]===v.correct),children:s[v.id]===v.correct?i.jsx(i.Fragment,{children:"✓ Correct!"}):i.jsx(i.Fragment,{children:"✗ Incorrect"})}),i.jsxs("div",{style:{marginTop:O.md},children:[i.jsx("div",{style:C.explanationLabel,children:"Explanation"}),i.jsx("p",{style:C.explanationText,children:v.explanation})]})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{style:C.answerLabel,children:"Expected Answer"}),i.jsx("p",{style:C.answerText,children:v.explanation}),g&&i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{...C.explanationLabel,marginTop:O.md},children:"Your Answer"}),i.jsx("p",{style:C.explanationText,children:g})]})]})})]}),i.jsx("div",{style:C.buttonContainer,children:a?i.jsx("button",{style:C.button(!0,!1),onClick:S,onMouseOver:I=>I.target.style.backgroundColor=q.primaryHover,onMouseOut:I=>I.target.style.backgroundColor=q.primary,children:n<x-1?"Next Question":"View Results"}):i.jsx("button",{style:C.button(!0,!y),onClick:k,disabled:!y,onMouseOver:I=>{y&&(I.target.style.backgroundColor=q.primaryHover)},onMouseOut:I=>{y&&(I.target.style.backgroundColor=q.primary)},children:"Submit Answer"})})]})})},uw={lesson:1,title:"What is AI?",questions:[{id:"L1Q1",question:"A hospital is considering whether to use AI or human doctors for different tasks. Based on what AI is good and bad at, which task would be MOST appropriate for AI to handle?",type:"mcq",options:["Deciding whether to prioritize one patient's life over another in an emergency","Scanning thousands of medical research papers to find studies about a rare disease","Comforting a patient who just received devastating news about their health","Diagnosing an entirely new disease that has never been seen before"],correct:1,explanation:"AI excels at pattern recognition in massive datasets and can process information faster than humans. Options A and C require moral judgment and emotional understanding (where humans are better), and D requires handling completely new problems different from training data (also a human strength)."},{id:"L1Q2",question:"Your grandmother complains that young people can't navigate without GPS, while her generation could read paper maps perfectly. Your response using concepts from the lesson would be:",type:"mcq",options:['"GPS is worse than paper maps because it makes people lazy"',`"Technology like GPS replaces certain thinking functions (remembering routes, calculating directions) just like cars replaced walking long distances - it's a natural pattern when technology makes tasks easier"`,`"AI will eventually replace all human thinking, so navigation skills don't matter anymore"`,'"Paper maps are better because older technology is always more reliable"'],correct:1,explanation:"The lesson teaches that technology replaces old ways when it makes life easier, and AI specifically replaces certain types of thinking (like remembering and repetitive tasks) but not all thinking - similar to how cars replaced walking for long distances but not all leg functions."},{id:"L1Q3",question:"A company creates a customer service chatbot. To test if it passes the Turing Test, they should:",type:"mcq",options:["Check if the chatbot can answer questions faster than humans","See if the chatbot stores more information than human employees","Have customers chat with it and see if they can tell whether they're talking to a bot or a human employee","Measure whether the chatbot makes fewer mistakes than humans"],correct:2,explanation:"The Turing Test, proposed by Alan Turing in 1950, is specifically about whether humans can distinguish between a machine and a human in conversation. If they can't tell the difference, the machine can be considered intelligent. Speed, storage, or accuracy aren't part of this test."},{id:"L1Q4",question:'In the 1960s, scientists tried to create AI using thousands of "if-then" rules. This failed because real-world situations were too complex. Machine learning solved this problem by:',type:"mcq",options:["Creating even more detailed if-then rules for every possible situation","Making AI learn from data through methods like supervised learning (showing examples), unsupervised learning (finding patterns independently), and reinforcement learning (trial and error)","Giving up on AI and waiting for better computers","Teaching AI to only handle simple, predictable tasks"],correct:1,explanation:"The lesson explains that rule-based AI hit a wall because you'd need impossible amounts of rules for every situation. Machine learning introduced a new approach where AI learns from data through different methods (supervised, unsupervised, reinforcement) rather than being programmed with explicit rules."},{id:"L1Q5",question:"A school wants to create an AI system that can recognize students' faces for attendance. Using deep learning principles, the neural network layers would work by:",type:"mcq",options:["Each layer doing the exact same thing to double-check the answer","Starting with complex patterns (identifying specific students) and working down to simple patterns (detecting edges)","Each layer recognizing increasingly complex patterns: first edges, then facial features, then combinations of features, finally recognizing individual student faces","Processing everything in a single layer to work faster"],correct:2,explanation:"Deep learning uses hierarchical layers where each layer builds on the previous one, starting with simple patterns (edges) and progressing to more complex ones (shapes, objects, specific identities) - like LEGO blocks stacking to make bigger structures, as explained in the lesson."},{id:"L1Q6",question:'Before 2017, AI struggled to understand this sentence: "Sarah went to the bank to deposit money, but it was closed, so she went home." The old AI would forget what "it" and "she" referred to. Transformers solved this by:',type:"mcq",options:["Processing words one at a time in order like reading a book",'Using attention mechanisms to understand relationships between all words simultaneously, knowing "it" refers to "bank" and "she" refers to "Sarah"',"Memorizing every possible sentence pattern in advance","Breaking sentences into smaller pieces that are easier to process"],correct:1,explanation:'Transformers use attention mechanisms that let the AI look at all words in a sentence at once and understand which words are related to each other, solving the problem of tracking references like "it" and "she" across the sentence.'},{id:"L1Q7",question:"When ChatGPT writes a response to your question, it:",type:"mcq",options:["Searches the internet for the best answer and copies it","Breaks your question into tokens, then predicts the most likely next token repeatedly (word by word or part by part) until it completes the response","Understands what you mean emotionally and writes from personal experience","Remembers similar conversations it had with other users and adapts those answers"],correct:1,explanation:"LLMs work by breaking text into tokens and using next-token prediction - predicting what token comes next, adding it, then predicting the next one, over and over. They don't search the internet in real-time, don't have emotions, and don't remember other users' conversations."},{id:"L1Q8",question:'What is an "AI winter" and why did they happen historically?',type:"mcq",options:["Periods when AI computers overheated and stopped working in summer","Periods when AI funding and interest collapsed because the technology couldn't deliver on its promises","Times when AI researchers took breaks during winter holidays","Phases when AI became too expensive for anyone to use"],correct:1,explanation:"AI winters were periods when excitement about AI crashed because the technology couldn't meet the hype and expectations. Funding dried up and research stalled. This happened multiple times in AI history before modern breakthroughs."},{id:"L1Q9",question:`Your friend says "AI is so smart now, it's basically thinking just like humans do." Using what you learned, explain why this statement is incorrect and what AI is actually doing instead.`,type:"short",explanation:`AI doesn't actually think or feel - it recognizes patterns from massive amounts of training data and replicates those patterns. When AI seems to "understand" you, it's really predicting what response typically follows similar inputs based on patterns it learned. Humans think with understanding, emotions, and consciousness. AI processes numbers and patterns without any actual comprehension or feeling - it's very good at appearing intelligent by matching patterns, but that's not the same as genuine thinking.`},{id:"L1Q10",question:"Imagine you want to train an AI to recognize which emails are spam. Using supervised learning concepts, explain what data you would need and how the AI would learn from it.",type:"short",explanation:`You'd need a large training dataset of emails where each one is labeled as either "spam" or "not spam" by humans. The AI would study thousands of these labeled examples, learning patterns that distinguish spam (like certain words, suspicious links, urgent language) from legitimate emails. After training on enough examples, the AI can predict whether new, unlabeled emails are spam by recognizing those same patterns.`},{id:"L1Q11",question:"The lesson mentions four key factors that came together to enable modern AI. Identify TWO of these factors and briefly explain why each one was necessary for AI to finally work.",type:"short",explanation:"Pick any 2 of 4: (1) Datafication: The internet created massive amounts of digital text, images, and data that AI could learn from - without huge datasets, pattern recognition doesn't work well. (2) Computational power: Modern GPUs and cloud computing made it possible to process billions of calculations needed for deep learning - old computers couldn't handle it. (3) Increased investment: Tech companies invested billions in AI research and development, allowing breakthrough projects that were previously impossible. (4) Technical breakthroughs: Innovations like transformers and attention mechanisms solved problems that stumped AI for decades, like understanding context in language."},{id:"L1Q12",question:'Your little cousin (age 10) asks: "How does ChatGPT write stories? Does it think about the characters like I do?" Write a simple explanation for them about how ChatGPT actually works. Include why it sometimes makes strange mistakes.',type:"short",explanation:`ChatGPT is an LLM (Large Language Model) that writes by guessing what word comes next, like playing "finish the sentence." It breaks language into tokens (chunks like words or word-parts). It read millions of examples to learn patterns, then predicts: "If I write 'The dog,' the next token is probably 'ran' or 'barked.'" It does this over and over - next token, then next token - building sentences and paragraphs. It makes mistakes because it's only guessing patterns from what it learned, not actually understanding. Sometimes patterns it saw were wrong, or it mixes up patterns in weird ways, like putting a banana on a flower.`}]},dw={lesson:2,title:"Today's AI",questions:[{id:"L2Q1",question:'Maya types "I love playing football" into an AI chatbot. Before the AI can process this message, what must happen first?',type:"mcq",options:["The AI translates the sentence into a different language",'The AI breaks the sentence into tokens (like "I", "love", "play", "ing", "foot", "ball") and converts them into numbers for mathematical processing',"The AI searches the internet to understand what football means","The AI memorizes the sentence word-by-word in English"],correct:1,explanation:"The lesson explains that AI doesn't understand any language directly - it only understands numbers. Text must first be broken into tokens (chunks of words or word parts), then converted into numbers that AI can mathematically process."},{id:"L2Q2",question:`Tom has been chatting with ChatGPT for 30 minutes about his history project. He asks: "Can you summarize what we've discussed?" ChatGPT provides a comprehensive summary of their entire conversation. Then Tom asks: "Why did you recommend that book?" and ChatGPT knows exactly which book Tom means. This works because:`,type:"mcq",options:["ChatGPT has been learning and updating its knowledge throughout the conversation","ChatGPT's context window processes all tokens from the entire conversation, maintaining short-term memory of what was said, and it predicts responses based on this complete context","ChatGPT saves Tom's conversations permanently in a special database","Tom's computer stores the conversation locally and feeds it back to ChatGPT"],correct:1,explanation:'The context window acts as short-term memory, processing all tokens from the conversation up to that point. This allows AI to understand references like "that book" by looking at the entire conversation context, while generating responses through next-token prediction based on this context.'},{id:"L2Q3",question:`Priya discovers a fascinating fact about quantum physics and excitedly shares it with ChatGPT in detail. The next day, she opens a new conversation and asks ChatGPT about quantum physics. ChatGPT doesn't mention anything from yesterday's conversation. Priya's friend says "ChatGPT must have forgotten." What's the most accurate explanation?`,type:"mcq",options:["ChatGPT forgot because its memory gets erased every night",`ChatGPT never "learned" from the conversation - chatting with users doesn't update the model's training, it only stays in temporary short-term memory`,"ChatGPT is punishing Priya for starting a new conversation","Priya needs to pay for a premium version that remembers conversations"],correct:1,explanation:"Training (learning patterns) happened once in the past and is expensive. Using AI (chatting) is cheap and instant but doesn't update the model. Conversations exist only in short-term context window memory, which resets with each new chat. The model itself doesn't change from user conversations."},{id:"L2Q4",question:"Developers create a base language model by training it on billions of web pages. When they test it, the model can write fluently but often produces unhelpful, rude, or irrelevant responses. To fix this, they use RLHF (Reinforcement Learning from Human Feedback). What does this process do?",type:"mcq",options:["It teaches the AI to search the internet faster","Humans rank many AI responses as helpful vs unhelpful, and the AI learns to generate responses that humans rate as more helpful, training it to be a useful assistant","It adds more web pages to the training data","It makes the AI smaller and faster"],correct:1,explanation:"RLHF is the process where humans evaluate and rank AI outputs, teaching the model which types of responses are helpful versus unhelpful. This additional training turns a base model (knows patterns but not how to assist) into a fine-tuned model (knows how to be helpful)."},{id:"L2Q5",question:"Three AI systems: System A answers questions about recipes. System B automatically orders groceries following a shopping list you created. System C plans your weekly meals, checks your pantry inventory, creates shopping lists, and orders groceries - deciding what you need. Which autonomy levels do these represent?",type:"mcq",options:["A: Level 1 (LLM), B: Level 2 (Workflow), C: Level 3 (Agent)","A: Level 3, B: Level 1, C: Level 2","A: Level 2, B: Level 3, C: Level 1","All three are Level 1 LLMs"],correct:0,explanation:"System A just generates answers (Level 1 LLM). System B takes actions but follows predetermined steps you set (Level 2 Workflow). System C makes its own decisions about what meals to plan and what to buy (Level 3 Agent)."},{id:"L2Q6",question:"Your school is considering three AI tutoring systems: System X answers student questions. System Y follows a predetermined 5-step homework help process. System Z evaluates student needs and independently decides which learning resources to provide. What's the MOST important supervision consideration?",type:"mcq",options:["System X needs the most supervision because it only answers questions","System Z needs the most supervision because it makes its own decisions and could choose inappropriate resources","System Y needs the most supervision because following steps is complex","All three need exactly the same amount of supervision"],correct:1,explanation:"Agents (Level 3) like System Z make their own decisions and can make mistakes - they might misjudge a student's needs or select inappropriate materials. LLMs (X) and Workflows (Y) have limitations but don't make independent decisions, so their failure modes are more predictable."},{id:"L2Q7",question:'An AI agent helps manage your study schedule. When you say "I need to finish my science project by Friday," it checks what tasks you have left, looks at your calendar, realizes Friday is already full, uses a tool to find free time on Thursday, and schedules 3 hours then. Which agent components worked together here?',type:"mcq",options:["Only the Brain (LLM) was needed","Brain processed request, Memory checked project status and calendar, Tools scheduled the time, Knowledge contained information about the project","Only Tools were used to schedule time","Only Memory was needed to remember the deadline"],correct:1,explanation:"This demonstrates multiple agent components working together: Brain (LLM) understands the request and reasons about priorities, Memory checks what's stored about the project and calendar, Tools take action to schedule time, and Knowledge contains project-specific information not in the base training."},{id:"L2Q8",question:"Your friend is excited about a new AI homework tool but doesn't understand how it works. Using the five evaluation questions, which question would reveal whether the tool can actually complete tasks or just give advice?",type:"mcq",options:["What patterns did it learn from?","Is it just generating responses or can it take actions?","What does it remember and for how long?","Who's making the decisions?"],correct:1,explanation:'Question 2 ("Is it just generating or can it take action?") directly reveals whether the system is an LLM that only provides text responses, a Workflow that executes tasks, or an Agent that acts with decision-making capability.'},{id:"L2Q9",question:`Your teacher asks: "Why can't ChatGPT remember our conversation from last week when I open a new chat today?" Explain the concept of context windows and why conversations don't persist across different chats.`,type:"short",explanation:"ChatGPT's context window is like short-term memory - it can only hold tokens from the current conversation, like a box with limited space. Each new chat starts with an empty box. Conversations from last week aren't stored permanently because chatting doesn't update the model - only training does that, which happened once in the past. The context window resets every new conversation, so ChatGPT can't access previous chats unless they're in the current context window."},{id:"L2Q10",question:"Explain the difference between what an LLM can do versus what a Workflow can do, using a homework example for each.",type:"short",explanation:"LLM (Level 1): You ask it to explain a difficult math concept and it generates a clear explanation - but you have to read it, understand it, and apply it yourself. It just provides information through text. Workflow (Level 2): You activate your homework helper workflow: it automatically (1) scans your assignment, (2) breaks it into steps, (3) finds relevant resources, (4) creates a checklist, (5) saves everything to your notes folder - following predetermined steps you or someone set up. It takes actions but can't adapt if something unexpected happens."},{id:"L2Q11",question:"Design a simple AI agent to help you track your reading progress for English class. Describe which THREE of the five agent components it needs and explain briefly what each one does.",type:"short",explanation:`Pick any 3 of 5 components: (1) Brain (LLM): Processes your requests like "add my current chapter" or "when should I finish the book?" and reasons about reading pace. (2) Memory: Stores which books you're reading, what chapter you're on, your typical reading speed, deadlines. (3) Tools: Can add books to your reading list, set calendar reminders, calculate how many pages per day you need. (4) Prompt: Job description like "You help students stay on track with reading assignments, be encouraging but realistic about deadlines". (5) Knowledge: Has information about your specific books, class syllabus, reading deadlines.`},{id:"L2Q12",question:"Compare the limitations of three systems: (A) an LLM that explains recipes, (B) a Workflow that automatically orders groceries from your saved list, (C) an Agent that decides what groceries you need and orders them. Identify ONE specific limitation or risk for EACH system.",type:"short",explanation:"(A) LLM limitation: Can only generate recipe explanations - can't actually check your pantry, create shopping lists, or place orders. You must do all the actions yourself. (B) Workflow limitation: Can only follow the exact shopping list you gave it - can't adapt if items are out of stock, can't notice you forgot milk, can't make decisions. (C) Agent limitation: Makes its own decisions about what to buy - might make wrong choices (orders expensive items, chooses brands you dislike, misunderstands dietary needs). Needs supervision to verify choices are sensible."},{id:"L2Q13",question:'Describe how the five agent components work together when a student says to their study agent: "I have a test next Friday - help me prepare."',type:"short",explanation:`Brain (LLM): Processes the request, understands "test Friday" means plan preparation. Memory: Checks what subject the test is on (maybe mentioned before), recalls student's study preferences, checks calendar. Tools: (1) Accesses the syllabus to see test topics, (2) creates study schedule in calendar, (3) finds relevant notes and practice questions. Prompt: Follows its job description (e.g., "create realistic study plans, prioritize weak areas"). Knowledge: Has information about test material, student's grades in that subject. All components work together: Brain decides strategy → checks Memory for context → uses Tools to take actions → operates within its Prompt guidelines → draws on stored Knowledge.`},{id:"L2Q14",question:"Your friend wants to create a personal AI agent that accesses their email, calendar, and bank account to automatically manage their schedule and pay bills. Using what you learned about training vs using AI and agent privacy considerations, explain TWO important things they should understand before setting this up.",type:"short",explanation:`(1) Chatting doesn't train the agent: If they tell the agent their preferences (like "always pay rent on the 1st"), it only remembers during that conversation unless the agent has proper long-term memory storage. They need to verify it actually saves preferences permanently, not just in the short-term context window. (2) Privacy and supervision with sensitive access: Giving an agent access to email, calendar, and bank means trusting it to make good decisions with very sensitive information. Agents can make mistakes - might schedule things wrong, miss important emails, make incorrect payment decisions, or misunderstand instructions. They should think about: what data they're comfortable sharing, whether they trust the agent's judgment, what happens if it makes a financial mistake, and whether they'll supervise sensitive tasks rather than full automation.`},{id:"L2Q15",question:`Your school purchases a new AI tool called "StudyBuddy" but doesn't explain how it works. Using the five evaluation questions from the lesson, explain how asking these questions would help you understand the tool's capabilities and decide how to use it effectively. Give one specific insight each question would reveal.`,type:"short",explanation:"(1) What patterns did it learn from? Reveals what it's good/bad at. If it learned from science textbooks, it'll explain biology well; if it learned from math problems, it'll help with equations. This shows which subjects to use it for. (2) Can it just generate or take action? Shows use cases. If it only generates study guides, YOU save and organize them. If it can take action, it might automatically add study sessions to your calendar. (3) What does it remember and for how long? Shows how to interact. Context window only means explain your situation each conversation; long-term memory means it learns your strengths/weaknesses over time. (4) What tools does it have access to? Shows what's possible. No tools = just conversations and suggestions. Many tools (calendar, gradebook access, quiz generator) = can complete complex study tasks. (5) Who makes decisions? Shows needed supervision. If YOU decide, full control but more work. If AI decides (agent), need to verify its study plan makes sense."}]},mw={lesson:3,title:"The AI Market",questions:[{id:"L3Q1",question:"A school creates a homework help app that needs to answer student questions. Instead of building their own AI from scratch, they connect to GPT-4. What is the technical term for the connection that lets their app communicate with GPT-4?",type:"mcq",options:["An AI bridge","An API (Application Programming Interface)","A neural network link","A cloud connector"],correct:1,explanation:'An API (Application Programming Interface) is what allows one piece of software to request services from another. It acts as the "waiter" between the product and the AI model, taking requests and delivering responses.'},{id:"L3Q2",question:"Three different companies all use GPT-4: Company A makes a legal document assistant, Company B makes a creative writing tool, Company C makes a customer service chatbot. How is this possible, and what does it reveal about the AI market structure?",type:"mcq",options:["They all illegally copied the same AI","The AI market pyramid: one model (GPT-4) at the top powers many different products in the middle, showing that few companies create models while many companies build specialized products using them","They all trained their own identical versions of AI","GPT-4 can only do one thing so all three products work the same way"],correct:1,explanation:"This demonstrates the market pyramid structure: a few companies create foundation models (like OpenAI with GPT-4), many companies build specialized products using those models via APIs, and millions of users interact with the products. One model can power many different products because products add specialized features and interfaces."},{id:"L3Q3",question:"ChatGPT can help you with homework, write emails, code, explain concepts, and many other tasks. It's a separate app you open specifically to use AI. What type of AI product is this?",type:"mcq",options:["Type 1: Generalist Standalone","Type 2: Specialist Standalone","Type 3: Generalist Integrated","Type 4: Specialist Integrated"],correct:0,explanation:"ChatGPT is Type 1 (Generalist Standalone) because it's generalist (does many different things) and standalone (you go to a separate app/website to use it, it's not built into another tool you already use)."},{id:"L3Q4",question:"A music streaming app has a feature that uses AI specifically to identify songs by listening to a few seconds of audio - it does only this one thing. This feature is built directly into the app. What type is this?",type:"mcq",options:["Type 1: Generalist Standalone","Type 2: Specialist Standalone","Type 3: Generalist Integrated","Type 4: Specialist Integrated"],correct:3,explanation:"This is Type 4 (Specialist Integrated) because it's specialist (does one specific thing: song identification) and integrated (built into an existing app, not a separate product you have to open)."},{id:"L3Q5",question:'In Product A, users can only use the AI by clicking "Generate" buttons in predefined places. In Product B, users can write any prompt they want and the AI responds flexibly. In Product C, users give high-level goals and the AI independently figures out how to achieve them. Which describes the control levels correctly?',type:"mcq",options:["A: Full company control, B: Guided user control, C: Full user control","A: Guided user control, B: Full user control, C: AI autonomy","All three give users the same level of control","A: Full user control, B: Company control, C: Guided control"],correct:1,explanation:"Product A gives Guided User Control (company-designed workflows), Product B gives Full User Control (open-ended LLM), and Product C demonstrates AI Autonomy (agent making decisions). This maps to typical patterns: workflows/specialists often have guided control, LLMs offer full user control, agents have autonomy."},{id:"L3Q6",question:"Why do only a few major companies (OpenAI, Google, Anthropic, Meta) create foundation AI models instead of thousands of companies doing it?",type:"mcq",options:["Creating AI models is illegal unless you have special permission","Training foundation models requires hundreds of millions of dollars for computing power and data, making it affordable only to well-funded companies","The technology is too complicated for smaller companies to understand","Users prefer having fewer options"],correct:1,explanation:"Training foundation models is extremely expensive - requiring massive computational resources, huge datasets, and significant time. This high barrier to entry means only companies with substantial funding can afford to create foundation models, explaining the pyramid structure of the market."},{id:"L3Q7",question:"Many AI companies offer free versions of their products. Which business model BEST explains how they make money despite offering free access?",type:"mcq",options:["They make money by selling user data to advertisers","Freemium model: free version attracts users, some upgrade to paid premium versions with better features, or they sell enterprise versions to companies","They're all charities that don't need to make money","Free users watch mandatory advertisements"],correct:1,explanation:"Most AI products use a freemium model: free versions attract users and demonstrate value, then revenue comes from premium subscriptions or enterprise sales. Some may also use free products as loss leaders to build user base. (Note: While data monetization exists in some tech, it's not the primary AI product business model.)"},{id:"L3Q8",question:"Explain the journey of how AI goes from a research lab to becoming a tool you use in your everyday life. Use a specific example like Grammarly or a homework help app.",type:"short",explanation:"Example (Grammarly): (1) Lab: Researchers create and train a language model on massive text data to understand grammar patterns. (2) Model: The trained model exists but isn't user-friendly yet. (3) API: The model is made accessible through an API so other companies can use it. (4) Product: Grammarly builds an interface, adds features (browser extension, tone detection), and creates a business model around the AI. (5) User: You install Grammarly and it checks your writing in real-time. The API acts as the connection between the model and the product, allowing Grammarly to send your text to the AI and receive corrections without rebuilding the AI from scratch."},{id:"L3Q9",question:`Categorize these three products and explain your reasoning: (A) Microsoft Copilot built into Word that helps with many writing tasks (B) A separate app called "Grammar Fix Pro" that only corrects grammar (C) Google Search's AI Overview feature that answers questions`,type:"short",explanation:"(A) Type 3 - Generalist Integrated: Helps with many writing tasks (generalist), built into Word (integrated into existing tool). (B) Type 2 - Specialist Standalone: Only corrects grammar (specialist), separate app (standalone). (C) Type 4 - Specialist Integrated: Answers questions specifically in search context (specialist function), built into Google Search (integrated into existing tool you already use)."},{id:"L3Q10",question:`Compare the level of control you have in these two scenarios: (1) Using ChatGPT where you write any prompt you want, (2) Using your school's AI homework helper that only has buttons like "Explain this concept," "Check my work," or "Create practice questions." Explain which gives you more control and which might be better for which situations.`,type:"short",explanation:`ChatGPT (Full User Control): You have complete freedom - can ask anything, adjust prompts, explore creatively. Better for: open-ended exploration, complex tasks, when you know exactly what you need. School Homework Helper (Guided User Control): The school designed specific workflows. Less flexible but clearer structure. Better for: when you're not sure what to ask, following school-approved processes, ensuring consistent quality, beginners who need guidance. Trade-off: Full control = more powerful but requires skill. Guided control = easier to use but limited options. The "better" choice depends on your skill level and task needs.`},{id:"L3Q11",question:'Explain why understanding "frameworks" (like generalist vs specialist, standalone vs integrated) is more useful than just memorizing the names of specific AI tools.',type:"short",explanation:"Specific tools change constantly - new ones launch, old ones disappear, features update. If you only memorize tool names, your knowledge becomes outdated quickly. Frameworks give you a way to understand and evaluate ANY tool, even ones that don't exist yet. When you see a new product, you can immediately categorize it (Is it generalist or specialist? Standalone or integrated? What control level?), understand its business model, and predict how it will work. Frameworks are transferable mental models that stay useful regardless of which specific products exist - you're learning how to think about AI tools, not just memorizing a list."}]},pw={lesson:4,title:"When to Use AI",questions:[{id:"L4Q1",question:"According to the lesson, what is the core principle that determines what AI can and cannot do?",type:"mcq",options:["AI can only work with numbers and calculations","AI recognizes patterns and replicates them – if there's no pattern, AI fails","AI is creative but bad at following rules","AI can think like humans but is slower"],correct:1,explanation:"AI works by recognizing patterns from millions of examples and replicating those patterns. Tasks with predictable patterns work well; tasks without clear patterns (like original thinking) don't."},{id:"L4Q2",question:"Which of these is an example of HEAD work that AI excels at?",type:"mcq",options:["Deciding what's most important to include in your university application","Understanding why you're struggling with a particular subject","Checking your essay for grammatical errors and formatting consistency","Figuring out which career path aligns with your values"],correct:2,explanation:"Grammar checking and formatting are mechanical, rule-based tasks that follow clear patterns (HEAD work). The other options require personal judgment, self-understanding, and values-based thinking (HEART work)."},{id:"L4Q3",question:'Your teacher assigns practice problems to help you learn algebra. What is the "real goal" versus the "surface goal," and how should this affect your AI use?',type:"mcq",options:["Real goal: get correct answers. Use AI to solve all problems quickly.","Real goal: learn how to solve problems yourself. Don't use AI for the solving process, though AI could check your work afterward.","Real goal: finish homework fast. Use AI for everything.","There is no difference between real and surface goals."],correct:1,explanation:"The surface goal is completing the assignment; the real goal is learning problem-solving skills. Using AI to solve the problems defeats the purpose and prevents skill development (it's HEART work - learning and growth)."},{id:"L4Q4",question:"You're writing an essay about climate change. Which breakdown correctly identifies HEAD work vs HEART work?",type:"mcq",options:["HEAD: developing your main argument, AI helps with: formatting citations","HEAD: choosing your position on climate change, AI helps with: everything else","HEAD: expressing your original ideas, AI helps with: generating all arguments","Use AI for the entire essay since it's faster"],correct:0,explanation:"Developing arguments, choosing positions, and expressing original ideas are HEART work (original thinking, personal voice). Formatting citations is mechanical HEAD work where AI assistance is appropriate."},{id:"L4Q5",question:'What is the "Hallucination Trap"?',type:"mcq",options:["AI making you see things that aren't there","AI confidently generating false information that sounds true because it's pattern-matching, not fact-checking","AI refusing to answer your questions","AI getting tired and making random mistakes"],correct:1,explanation:`AI generates answers based on patterns of what true answers look like, but doesn't actually verify truth. It can confidently produce convincing but completely false information - this is "hallucination."`},{id:"L4Q6",question:"You catch yourself automatically opening ChatGPT for every question before even trying to think about it yourself. What trap is this, and what's one tactic to prevent it?",type:"mcq",options:["Hallucination Trap; cross-check all answers","Trigger-Happy Trap; use a 30-second deliberate delay before using AI","Automation-of-Joy Trap; only use AI for work you dislike","Invisible Decay Trap; take weekly tests"],correct:1,explanation:`Reflexively using AI for everything without thinking is the Trigger-Happy Trap. The Deliberate Delay tactic (pausing 30 seconds to ask "Should I use AI for this? What's the real goal?") prevents thoughtless AI use.`},{id:"L4Q7",question:"Jamie loves drawing original character designs for hours - it's their favorite creative outlet. Recently, AI image generators create better-looking art in seconds, so Jamie starts using AI instead. What's the problem according to this lesson?",type:"mcq",options:["There's no problem - AI makes Jamie more efficient","Automation-of-Joy Trap - Jamie is outsourcing something they genuinely enjoyed, losing what made them special","Hallucination Trap - the AI might generate false information","Jamie should never use any AI tools"],correct:1,explanation:"This demonstrates the Automation-of-Joy Trap: using AI for work you actually enjoy removes the personal satisfaction and unique human contribution. Jamie's losing both the joy and the developing skill that made them special."},{id:"L4Q8",question:"As AI gets better at pattern-based work, what happens to the value of uniquely human skills?",type:"mcq",options:["Human skills become worthless because AI can do everything","Human skills (judgment, creativity, relationships, original thinking) become MORE valuable because they remain scarce while AI abilities grow","All skills become equally valuable","Only technical skills remain valuable"],correct:1,explanation:"As AI handles more pattern-based work, the work AI can't do (requiring human judgment, relationships, original thinking, emotional intelligence) becomes more valuable, not less, because it's increasingly scarce."},{id:"L4Q9",question:"Explain the difference between HEAD work and HEART work in your own words, and give one example of each from your own life.",type:"short",explanation:"HEAD work is mechanical, pattern-based tasks where there's a right answer or standard method (like organizing notes, checking spelling, or finding information). HEART work is personal, growth-focused tasks that require judgment, creativity, or original thinking (like deciding what essay argument to make, understanding why I'm struggling with something, or building friendships). Examples will vary: HEAD - formatting a bibliography, solving standard math problems with known methods. HEART - writing about a personal experience, deciding future goals, learning from mistakes."},{id:"L4Q10",question:"Your friend wants AI to write their entire personal statement for university applications. Using concepts from this lesson, explain why this is problematic and suggest a better way to use AI for this task.",type:"short",explanation:"Why problematic: A personal statement is HEART work - it needs to show who they genuinely are, their experiences, values, and voice. AI can't create authentic personal content. The real goal (showing universities who you are) is defeated if AI writes it. Also, it prevents skill development in expressing yourself clearly. Better approach: Break it down - HEART work (developing main points, choosing stories, expressing authentic voice) = YOU. HEAD work (checking grammar, improving sentence flow, formatting) = AI can assist. Write the authentic content yourself, then use AI to polish it."},{id:"L4Q11",question:"You use AI to research facts for a science presentation. Identify which trap you need to watch out for and describe ONE specific action you should take to avoid it.",type:"short",explanation:"Trap: Hallucination Trap - AI might confidently generate false scientific information because it's pattern-matching, not verifying facts. Prevention action: Cross-check important claims against authoritative sources. For example, if AI says a specific temperature or date, verify it through academic sources, textbooks, or scientific databases before including it in your presentation. Don't just assume AI facts are accurate because they sound convincing."},{id:"L4Q12",question:`Explain the "Invisible Decay Trap" and suggest one specific way a student could check whether they're experiencing it.`,type:"short",explanation:"Invisible Decay Trap: Your skills gradually deteriorate from AI over-reliance, but you don't notice because AI still produces good outputs. You think you're capable, but you've actually lost the ability to do things independently. Check method: Weekly self-test - try doing tasks without AI that you normally use AI for. Example: If you use AI for essay writing, try writing a practice essay with no AI help. If you struggle significantly with things you used to do easily, your skills are decaying. Or try solving math problems manually if you normally use AI calculators."},{id:"L4Q13",question:'The lesson states that as AI advances, HEART work becomes more valuable while HEAD work becomes less valuable. Explain why this happens using the principle that AI is a "pattern machine."',type:"short",explanation:"AI is fundamentally a pattern recognition and replication machine - it learns from millions of examples and replicates those patterns. This makes AI excellent at HEAD work (pattern-based, mechanical tasks like calculations, formatting, standard analysis) because these tasks have consistent, recognizable patterns. But HEART work (original thinking, moral judgment, personal relationships, emotional intelligence) doesn't work on predictable patterns - it requires genuine human qualities AI can't replicate. As AI gets better at pattern work, that work becomes abundant (less scarce), so it's worth less. Meanwhile, uniquely human capabilities remain scarce, making them more valuable. What AI can't do becomes more precious than what it can."}]},hw={lesson:5,title:"Speaking AI",questions:[{id:"L5Q1",question:'Sarah asks an AI: "Tell me about healthy eating." Her friend Maya asks: "Explain three practical meal-prep strategies for a busy college student on a £40 weekly budget who wants to eat more vegetables but dislikes cooking." Why will Maya likely get a more useful response?',type:"mcq",options:["Maya's AI is more advanced than Sarah's","Maya provided specific context, constraints, and goals while Sarah's prompt was vague","Sarah's question is too difficult for AI to answer","Maya used more polite language in her prompt"],correct:1,explanation:"The lesson emphasizes that specific prompts with clear context, goals, audience, and constraints produce tailored, useful outputs, while vague prompts generate generic responses. Maya's prompt includes all necessary details; Sarah's doesn't."},{id:"L5Q2",question:"Using the CO-STAR framework, which prompt is BEST structured?",type:"mcq",options:['"Write something about climate change"',`"I'm a Year 11 student creating a presentation for my class (Context). I need three key facts about climate change impacts (Objective). Use simple language with examples (Style). Keep it informative but not scary (Tone). My audience is 15-year-olds (Audience). Present as bullet points with one example per fact (Response format)."`,'"Tell me facts about climate change for my presentation"','"Climate change presentation facts please"'],correct:1,explanation:"Option B includes all CO-STAR elements: Context (who you are, situation), Objective (what you need), Style (approach), Tone (emotional quality), Audience (who it's for), and Response format (how to structure output). The other options lack most of these elements."},{id:"L5Q3",question:`You ask AI to "write a recommendation letter." It produces a generic letter that doesn't match your situation. Which element should you add first to get better results?`,type:"mcq",options:["Request a different tone","Provide detailed context: who the letter is for, what they achieved, what program they're applying to, your relationship to them","Change the response format","Make the prompt shorter"],correct:1,explanation:"Context is the most powerful element in prompting. Without knowing the specific situation, AI can only generate generic content. Adding context (who, what, why, relationship) transforms the output from generic to relevant."},{id:"L5Q4",question:"You get an unhelpful response from AI. What's the MOST effective next step according to the lesson?",type:"mcq",options:["Give up and try a completely different topic","Ask the AI to analyze what was missing from your original prompt and suggest improvements (meta-prompting), then refine based on that feedback","Use the exact same prompt again hoping for better luck","Switch to a different AI tool"],correct:1,explanation:"The lesson teaches iterative refinement and meta-prompting. Instead of abandoning the task, ask AI to help improve your prompt (meta-prompting), identify what's missing, then refine. This is more effective than starting over or hoping repetition works."},{id:"L5Q5",question:'Compare these two prompts: Prompt A: "Explain photosynthesis" Prompt B: "You are a biology teacher explaining to Year 9 students. Explain photosynthesis in 3 short paragraphs using a simple analogy. Keep it engaging and conversational." What techniques does Prompt B use that Prompt A lacks?',type:"mcq",options:["Role prompting (assigning a specific role) and output control (format, length, tone, style)","Only length requirements","Only tone requirements","No meaningful difference between the prompts"],correct:0,explanation:'Prompt B uses role prompting ("You are a biology teacher") which improves response quality by giving AI a perspective. It also specifies output control elements: format (3 paragraphs), length (short), style (simple analogy), and tone (engaging, conversational).'},{id:"L5Q6",question:"You want AI to write in a specific style but struggle to describe it. What technique should you use?",type:"mcq",options:["Give up because AI can't match styles","Use few-shot prompting: show AI 2-3 examples of the style you want, then ask it to match that style",'Just ask for "good writing"',"Use more complex vocabulary in your prompt"],correct:1,explanation:"Few-shot prompting means showing examples rather than trying to describe what you want. If you provide 2-3 examples of the desired style/format/tone, AI can pattern-match to produce similar output - easier and more effective than verbal descriptions."},{id:"L5Q7",question:"For which task would chain-of-thought prompting (asking AI to show its reasoning step-by-step) be MOST helpful?",type:"mcq",options:[`"What's the capital of France?"`,'"Solve this complex word problem: If a train leaves London at 9am traveling 80mph, and another leaves Manchester at 9:30am traveling 90mph toward London, when do they meet? Show your reasoning step by step."','"Write a creative story about a dragon"','"Translate this sentence to Spanish"'],correct:1,explanation:"Chain-of-thought prompting is most valuable for complex problems requiring multi-step reasoning. The train problem needs sequential calculations and logical steps. Simple factual questions, creative tasks, and translations don't benefit as much from step-by-step reasoning displays."},{id:"L5Q8",question:"You're deciding between two summer programs. What prompting technique would give you the most comprehensive decision-making help?",type:"mcq",options:["Ask AI to pick the best one immediately","Use self-consistency: Ask AI to analyze the decision from 3 different perspectives (career development, personal growth, social benefits), then compare the approaches","Ask for a simple yes/no answer","Avoid using AI for personal decisions"],correct:1,explanation:"Self-consistency (requesting multiple approaches/perspectives, then comparing) is specifically designed for complex decisions. Getting AI to analyze from different angles helps you see all considerations rather than jumping to a single answer."},{id:"L5Q9",question:'Your classmate complains: "AI always gives me useless generic answers." Explain the "garbage in, garbage out" principle and give them one specific piece of advice using an example.',type:"short",explanation:`"Garbage in, garbage out" means if you give AI vague, unclear prompts, you get vague, generic responses. If you give detailed, specific prompts, you get tailored, useful responses. The quality of output directly depends on quality of input. Advice example: Instead of "Help with my homework," try "I'm working on a Year 10 chemistry assignment about acids and bases. I understand the basic pH scale but I'm confused about why strong acids fully dissociate while weak acids partially dissociate. Can you explain this using a simple analogy and then give me one practice question to test my understanding?" The second prompt gives context (what level, what subject, what specific confusion) and objective (explanation + practice), so AI can give a targeted response instead of generic homework help.`},{id:"L5Q10",question:"You need AI to help create revision flashcards for your history exam on World War II. Write a prompt that includes at least four CO-STAR elements and explain why including context is most important.",type:"short",explanation:`Example prompt: "I'm a Year 11 student preparing for my GCSE history exam (Context). Create 10 flashcards covering the main causes of World War II (Objective). Use clear, concise language with specific dates and events (Style). Keep it factual and exam-focused (Tone). I need question on front, answer on back, formatted for Quizlet (Response format)." Why context matters most: Context tells AI who I am (Year 11 = knowledge level), what situation (GCSE exam = appropriate depth and focus), which subject area (WW2 causes, not battles or consequences). Without context, AI doesn't know whether to write for university students or Year 7s, whether to focus on social/economic/political causes, or what exam board's emphasis to match. Context transforms generic flashcards into ones actually useful for MY specific situation.`},{id:"L5Q11",question:"Describe the iterative refinement process for prompting. Then identify what mistake someone is making if they ask AI one question, get a poor answer, then immediately ask a completely different question.",type:"short",explanation:`Iterative refinement process: (1) Create initial prompt with best guess at what's needed. (2) Analyze the output: What's missing? Wrong tone? Wrong level? Too vague? (3) Adjust prompt to fix the specific problem (add context, specify format, change role, etc.). (4) Repeat until output quality improves. Mistake identified: They're making the error of "jumping between questions instead of refining." When you get a poor response, the problem is usually your prompt, not AI's inability. Abandoning the question and asking something else means you never learn to prompt better. You should stick with the original question and refine the prompt until you get quality output - this builds your prompting skills.`},{id:"L5Q12",question:`Explain what the "constraint paradox" means and give an example of how adding constraints could actually make AI's output MORE creative rather than less.`,type:"short",explanation:`Constraint paradox: It seems like fewer rules = more creativity, but actually, adding specific constraints forces AI (and humans) to be MORE creative by eliminating generic/obvious solutions and requiring original problem-solving within boundaries. Example: Vague prompt: "Write a story" → AI produces generic fantasy adventure. Constrained prompt: "Write a story where the main character can't speak, set entirely in a library, where the conflict is resolved using only three objects: a paper clip, a book on origami, and a jar of honey" → AI must create unique plot because constraints eliminate clichéd solutions, forcing creative problem-solving. The constraints make the output more original because AI can't rely on standard story patterns - it must innovate within the specific boundaries.`},{id:"L5Q13",question:"You're asking AI to solve a complex maths problem and to write social media captions. Which task should use chain-of-thought prompting and which should use few-shot prompting? Explain why each technique fits its task.",type:"short",explanation:'Complex maths problem → Chain-of-thought prompting. Why: Maths requires logical, sequential reasoning. Asking AI to "show your working step-by-step" or "explain your reasoning" helps catch errors and lets you follow the logic. Chain-of-thought is for complex problems needing transparent reasoning. Social media captions → Few-shot prompting. Why: Caption style is hard to describe ("be engaging but not try-hard") but easy to show. Provide 3 examples of captions you like, then ask AI to match that style. Few-shot (showing examples) is perfect for stylistic tasks where demonstration works better than description.'},{id:"L5Q14",question:"Your friend is frustrated because they keep getting unhelpful responses from AI. They show you their process: they ask a question, get a bad answer, then immediately ask a completely different question hoping it will work better. Identify what mistake they're making and explain what they should do instead.",type:"short",explanation:`Mistake: "Jumping between questions instead of refining" - they're abandoning prompts rather than improving them. This prevents learning and assumes the problem is AI's fault rather than prompt quality. What to do instead: Stick with the original question and use iterative refinement: (1) Analyze why the output isn't working (wrong tone? too vague? missing information?). (2) Adjust the prompt to fix that specific issue (add context, specify format, change role). (3) Try again. (4) Repeat until you get quality results. This teaches you to prompt better. Each refinement cycle improves your skill. Constantly switching questions means you never learn what makes prompts effective.`}]},gw={lesson:6,title:"How to Use AI - Becoming a Tier 3 User",questions:[{id:"L6Q1",question:"Three students approach learning a new coding language. Maya tries five different AI coding assistants but never masters any. Jamal uses one AI tool well for coding tasks. Chen builds an integrated system where AI helps him learn concepts, debug errors, and refine code in one workflow. Who represents which tier?",type:"mcq",options:["Maya: Tier 3, Jamal: Tier 1, Chen: Tier 2","Maya: Tier 1, Jamal: Tier 2, Chen: Tier 3","Maya: Tier 2, Jamal: Tier 3, Chen: Tier 1","All three are Tier 2 because they all use AI"],correct:1,explanation:"Maya is a Tier 1 Dabbler (chasing tools, mastering nothing), Jamal is a Tier 2 Skilled User (uses AI well reactively for tasks), and Chen is Tier 3 Elite (builds systems that integrate AI smoothly into workflows)."},{id:"L6Q2",question:"Your friend subscribes to 15 AI newsletters, spends two hours daily reading updates, and feels overwhelmed. What approach would a Tier 3 user recommend?",type:"mcq",options:["Subscribe to even more sources to stay fully informed","Set a 15-30 minute weekly budget with 1-2 curated sources, focus on tools that improve existing workflows","Stop following AI news entirely to avoid distraction","Only try tools that are most popular on social media"],correct:1,explanation:'Tier 3 users employ strategic filtering with a "news budget" – limited weekly time (15-30 minutes) using 1-2 trusted sources, focusing on evidence-based tools that integrate with existing systems rather than chasing everything.'},{id:"L6Q3",question:"You discover a new AI study tool. It has flashy marketing but no clear examples. You try it for 45 minutes on real homework. The outputs need heavy fixing and the setup is confusing. What should you do?",type:"mcq",options:["Keep trying because new tools need time to learn","Park it to revisit in 3-6 months when it might improve","Reject it immediately – red flags indicate it fails the test","Adopt it because AI tools are always worth using"],correct:2,explanation:"The scenario shows multiple red flags (heavy marketing, no clear examples, complex setup, outputs need massive fixing). Tier 3 users reject tools that fail proper trials and don't meet standards, moving on quickly rather than wasting time."},{id:"L6Q4",question:"Compare two setups: Setup A uses five separate AI tools requiring constant login switching and copy-pasting between apps. Setup B has AI integrated into the main workspace with research, writing, and editing flowing continuously. What principle does Setup B demonstrate?",type:"mcq",options:["Using more advanced AI technology","Creating a system that flows rather than tools that fragment","Being a Tier 1 Dabbler with many tools","Avoiding AI to work manually"],correct:1,explanation:'The lesson emphasizes "flow" – systems where AI integrates smoothly into existing work (Setup B) versus fragmented tool collections requiring switching and lost context (Setup A). Tier 3 users prioritize seamless integration.'},{id:"L6Q5",question:"AI generates a history essay for you. Before submitting, which question is LEAST important according to Tier 3 evaluation criteria?",type:"mcq",options:["Are the historical facts and dates accurate?","Does this answer the specific question asked?","Did the AI use the most recent software version?","Does this make unfair assumptions or show bias?"],correct:2,explanation:"Tier 3 users evaluate outputs using five criteria: relevance, factual accuracy, completeness, clarity, and bias check. The software version used is not part of these evaluation standards – what matters is the quality and appropriateness of the output itself."},{id:"L6Q6",question:"You need to: (a) brainstorm video ideas for fun, (b) write an important university application, (c) draft a group project proposal. How should your AI approach differ?",type:"mcq",options:["Let AI fully handle all three since it's faster","(a) AI-led, (b) human-led with AI assistance, (c) human-in-the-loop verification","Never use AI for any of these tasks","Use exactly the same verification level for all three"],correct:1,explanation:"Tier 3 users calibrate for stakes. Low stakes (brainstorming) = AI-led, move fast. High stakes (university application you're accountable for) = human-led, AI assists. Medium stakes (group project) = human-in-the-loop, review and verify."},{id:"L6Q7",question:"Two students write monthly blog posts. Student A starts from scratch each time, making the same decisions. Student B created a documented 5-step process showing what they do and what AI does at each stage, refining it monthly. After six months, what's the likely outcome?",type:"mcq",options:["Both will produce similar quality since they write the same number of posts","Student A will be better due to fresh approaches each time","Student B will have a compound advantage with faster, higher-quality output","Student B will be worse because following steps limits creativity"],correct:2,explanation:"Student B built a playbook that creates compound advantages. Each use refines the process, making future uses better. While Student A restarts constantly, Student B's system improves over time, demonstrating the Tier 3 compound effect."},{id:"L6Q8",question:`Your classmate says "I've tried 12 different AI tools this month but I'm not seeing great results." Using concepts from this lesson, explain what mistake they're making and suggest a better approach.`,type:"short",explanation:"They're acting like a Tier 1 Dabbler – chasing many tools but mastering nothing. Constantly trying new things prevents deep skill development and creates shallow understanding of everything. Better approach: Strategic filtering – see what's available lightly through limited news time (15-30 min weekly), try only 1-2 tools that address real needs in your actual workflow, then go deep and master what works rather than collecting tools. Focus on integration and depth, not breadth."},{id:"L6Q9",question:"You're testing a new AI homework helper. Describe what you would do during a proper 30-60 minute trial, what your decision options are afterward, and one red flag and one green flag you'd watch for.",type:"short",explanation:`Trial process: Test it on 1-3 real homework examples (not hypotheticals) with a defined goal like "Does this save significant time while maintaining quality?" Use actual assignments you need to complete. Decision options after trial: Adopt (Integrate into regular workflow), Park (Interesting but not ready; revisit in 3-6 months), Reject (Doesn't pass test; move on). Red flag example: Outputs need massive fixing before use, setup is confusing, heavy marketing with no substance. Green flag example: Consistent time savings, clear user interface, concrete examples of good results.`},{id:"L6Q10",question:'Describe a current process you use regularly (like studying, creating content, or organizing tasks). Explain how a "fragmented" approach with multiple separate tools would create problems versus an "integrated flow" approach.',type:"short",explanation:"Example (studying for tests): Fragmented approach: Use one app for flashcards (Quizlet), different tool for note summaries (Notion), separate AI for practice questions (ChatGPT) – requires remembering what's where, copying content between apps, loses context about what I've already studied, constant login switching breaks concentration. Integrated flow: Everything happens in one notebook app with AI built in (like Notion AI) – my notes, AI-generated quizzes, and summaries all connect, AI remembers what I struggled with, smooth continuous process, no friction. (Other valid examples: content creation with writing/editing/formatting tools, project management with different trackers/calendars/communication apps)"},{id:"L6Q11",question:"You use AI for three tasks: generating funny captions for social media posts, researching for a science presentation, and writing a personal statement for a summer program. For ONE of these tasks, explain what stake level it is and what specific verification steps you should take before using the output.",type:"short",explanation:"Example chosen: Science presentation (Medium stakes). Stake level: Medium stakes – it's graded work affecting my grade, but not life-changing consequences. Verification approach: Human-in-the-loop. Specific steps: (1) Relevance check: Does this directly address my specific topic or is it too general? (2) Factual accuracy: Fact-check key scientific claims against trusted sources (textbooks, scientific databases) – AI can hallucinate scientific facts. (3) Completeness: Does it miss important concepts I know should be included? (4) Clarity: Is the explanation clear for my audience (Year 10 classmates)? (5) Bias check: Does it present scientific consensus or cherry-pick information? (Other valid examples: Social media captions = Low stakes, AI-led with quick review; Personal statement = High stakes, human-led, AI only assists with polish)"},{id:"L6Q12",question:"You regularly create revision materials before exams (reading notes, making summaries, creating practice questions). Explain what a playbook for this process would include and why having one creates a compound advantage over time.",type:"short",explanation:"Playbook would include: Step-by-step documentation showing division of labor: Step 1: I review lecture notes and identify key concepts; AI summarizes dense textbook sections. Step 2: I create main question list; AI generates 10 practice questions per topic. Step 3: I test myself; AI explains answers I got wrong. Step 4: I identify weak areas; AI creates additional practice for those specific topics. Compound advantage: Each exam I use this, I refine what works – maybe adjust AI prompts for better questions, reorder steps for efficiency, add a new checking step. Next exam is faster AND better quality because I'm not starting from scratch or making same decisions again. The system continuously improves. After 5 exams, my playbook is highly optimized while classmates still figure out their study approach from scratch each time."},{id:"L6Q13",question:"Explain why a Tier 3 user might choose NOT to adopt a powerful new AI tool that many people are excited about, and how this decision relates to building long-term advantage.",type:"short",explanation:`Reasons to reject despite hype: Doesn't fit existing system (requires whole new setup, breaks current workflow), Lacks concrete evidence beyond marketing hype, Addresses tasks that aren't priorities or pain points, Integration costs (time to learn, setup complexity) outweigh benefits. Connection to long-term advantage: Tier 3 users focus on building deep, integrated systems that compound over time rather than collecting tools. While others chase new things constantly (staying at Level 1, mastering nothing), the Tier 3 user masters their system deeply. Over time this creates greater advantage – they're building a castle while others are still collecting bricks. Saying "no" to shiny new tools (strategic filtering) protects their focus and allows continuous improvement of what actually works.`}]},fw={lesson:7,title:"Getting Ahead with AI",questions:[{id:"L7Q1",question:"Two professionals have identical qualifications. Person A can complete tasks that used to take 10 hours in just 2 hours using AI tools. Person B doesn't use AI. When companies hire, what does this demonstrate about AI's impact on career value?",type:"mcq",options:["Both are equally valuable because their qualifications are the same","AI creates a multiplier effect – AI-enabled professionals deliver more value per hour, making them more competitive","Person B is better because they can work without technology","Qualifications don't matter in the AI age"],correct:1,explanation:"The lesson explains that AI acts as a value multiplier – same skills produce dramatically more output. This makes AI-enabled professionals more competitive because they deliver higher value per hour, even with identical underlying qualifications."},{id:"L7Q2",question:"An accountant fears AI will take their job because software can now do basic bookkeeping. Using concepts from the lesson, what's the best response to this concern?",type:"mcq",options:["The fear is correct – all accounting jobs will disappear","Roles will transform rather than vanish – routine bookkeeping may be automated, but strategic financial advice, client relationships, and complex judgment become more valuable","Ignore AI and continue doing things the traditional way","Switch careers entirely since accounting has no future"],correct:1,explanation:"The lesson teaches that AI transforms roles rather than simply eliminating them. Routine tasks get automated, but uniquely human work (strategic thinking, relationships, complex judgment) becomes more valuable. Professionals who adapt thrive."},{id:"L7Q3",question:'"Being early to AI skills creates compound advantages" – what does this mean practically for a student starting now versus one who waits five years?',type:"mcq",options:["It doesn't matter when you start since AI skills are easy to learn","Starting now means skills build on each other over time, creating exponentially greater capability versus someone starting fresh in five years","Waiting is better because AI will be more advanced and easier to use later","The main advantage is just having five more years of experience listed on a CV"],correct:1,explanation:"Compound advantages mean early skills create a foundation for more advanced skills, which build further capabilities – like compound interest. Someone starting now develops AI intuition, systems, and deep expertise that compounds, while someone starting in five years begins at the basics despite AI being more advanced."},{id:"L7Q4",question:`Which career positioning strategy does this represent: "A marketing professional who can use AI to analyze customer data, create personalized campaigns, and automate reporting – skills that many traditional marketers don't have"?`,type:"mcq",options:["T-shaped professional (deep marketing expertise + broad AI application)","Pure specialist (only knows one thing deeply)","Generalist (knows a little about everything)","Someone who should switch to a completely different career"],correct:0,explanation:"This describes a T-shaped professional: deep expertise in their domain (marketing) combined with broad AI capabilities (data analysis, automation, personalization). This makes them more valuable than specialists without AI skills or generalists without deep expertise."},{id:"L7Q5",question:"Company X can now produce with AI in 2 hours what used to take 10 hours. They're deciding between two strategies: cut staff by 80% (efficiency play) or keep staff and produce 5x more output (growth play). What does the lesson suggest is typically the better strategy for professionals to aim for?",type:"mcq",options:["Efficiency play is always better for companies","Growth play – expanding capabilities to serve more people or create higher-quality outputs – tends to create more opportunities","Neither matters since AI will handle everything","Professionals have no influence over which strategy companies choose"],correct:1,explanation:'The lesson emphasizes "growth play" thinking – using AI to do more, serve more people, or create higher quality outputs rather than just cutting costs. This mindset creates more opportunities and tends to be more valuable long-term than pure efficiency/cost-cutting.'},{id:"L7Q6",question:"An architect uses AI to generate design options quickly but their unique value comes from understanding client needs, navigating building regulations, and making aesthetic judgments AI can't replicate. This demonstrates:",type:"mcq",options:["AI will replace architects entirely",'The "AI-enhanced expertise" model where professionals combine AI capabilities with uniquely human skills',"Architects should stop using AI to protect their jobs","Technical skills are no longer valuable"],correct:1,explanation:'This shows "AI-enhanced expertise" – using AI for what it does well (generating options quickly) while contributing irreplaceable human value (understanding needs, judgment, relationships). This combination makes professionals more valuable, not less.'},{id:"L7Q7",question:"You're planning your career development. Which approach aligns with the lesson's guidance on building AI advantage?",type:"mcq",options:["Focus only on technical AI skills since those are most important","Develop domain expertise AND AI capabilities, focusing on how to integrate AI into your field rather than just knowing AI tools generically","Ignore AI completely and focus on traditional skills","Wait until AI is more mature before learning anything"],correct:1,explanation:"The lesson emphasizes being T-shaped: deep domain expertise plus broad AI capabilities, with focus on integration (how AI applies to YOUR field). Generic AI tool knowledge is less valuable than understanding how AI transforms your specific domain."},{id:"L7Q8",question:'Explain the difference between "efficiency play" and "growth play" thinking when it comes to AI in careers. Give an example of each using a student or professional scenario.',type:"short",explanation:"Efficiency play: Using AI to do the same work faster/cheaper – focused on reduction. Example: A student uses AI to finish homework in half the time, then does nothing extra with saved time. A professional uses AI to handle their workload with less effort but doesn't expand what they offer. Growth play: Using AI to do MORE – expand capabilities, serve more people, create higher quality. Example: A student uses AI to finish homework faster AND uses saved time to study additional topics, take on extra projects, or develop new skills. A professional uses AI efficiency to take on more clients, offer new services, or produce higher-quality work than before. Growth play tends to create more career opportunities and value."},{id:"L7Q9",question:`A friend says "I'll learn AI skills later when they become essential for my job – right now I'm focusing on my core professional skills." Using concepts about compound advantages, explain why this waiting strategy might be risky.`,type:"short",explanation:`Waiting is risky because of compound advantages: AI skills build on each other over time – foundational skills enable intermediate skills, which enable advanced applications. Starting now means by the time AI becomes "essential," you have years of built-up capability while others start from scratch. Like compound interest: Person A investing $100/month from age 18 vs Person B starting at 25 – even with the same monthly investment later, Person A ends up far ahead. Additionally: the job market is already changing. By the time waiting friend realizes AI is "essential," AI-capable competitors may have already taken opportunities. Being early matters precisely because advantages compound – you're not just 5 years ahead, you're exponentially ahead.`},{id:"L7Q10",question:'Describe what a "T-shaped professional" is and explain why this profile is becoming more valuable in the AI era. Include how this relates to your own career planning.',type:"short",explanation:"T-shaped professional: Deep expertise in one domain (vertical bar of T) combined with broad capabilities across other areas, particularly AI (horizontal bar of T). Example: Deep marketing expertise + broad AI skills, or deep engineering knowledge + AI application capabilities. Why more valuable in AI era: Specialists without AI skills can be outperformed by AI-enhanced competitors. Generalists without depth can't provide expert-level value. T-shaped professionals combine irreplaceable domain expertise (what AI can't replicate) with AI capabilities that multiply their impact. Personal career planning connection: I should develop deep expertise in my chosen field while building broad AI capabilities – understanding how AI specifically transforms my industry rather than just generic AI tool knowledge. This makes me valuable for human expertise while being competitive through AI enhancement."},{id:"L7Q11",question:"You're advising a Year 10 student who's worried AI will take all jobs by the time they graduate. Using concepts from this lesson, explain how they should think about career planning in an AI-transformed world.",type:"short",explanation:"Key reassurance: AI transforms roles rather than simply eliminating them. Here's how to think about career planning: (1) Focus on uniquely human skills that remain valuable – judgment, creativity, relationships, emotional intelligence, complex problem-solving. These become MORE valuable as routine work is automated. (2) Start building AI capabilities NOW – compound advantages mean early skills create exponentially greater capability over time. You'll have 5+ years of AI experience by graduation. (3) Think T-shaped – develop deep expertise in your passion area AND broad AI capabilities. The combination makes you more competitive than either alone. (4) Adopt growth-play thinking – use AI to expand what you can do, not just do same things faster. (5) Stay adaptable – specific jobs may change, but professionals who can learn, adapt, and integrate new tools will always have opportunities. The advantage goes to those who adapt early."},{id:"L7Q12",question:'A professional in your desired career field says "AI tools are just a fad – real expertise matters more than knowing the latest technology." Construct a thoughtful response that acknowledges their expertise while explaining why AI capabilities matter alongside traditional skills.',type:"short",explanation:"Acknowledge first: You're right that deep expertise is irreplaceable – AI can't replicate years of experience, professional judgment, relationship-building, or understanding of nuanced situations. Real expertise will always matter. Why AI matters alongside: AI acts as a multiplier on existing expertise. Two professionals with identical expertise – one AI-enabled can deliver 5x the output, serve more clients, and produce higher quality in less time. Markets reward higher value delivery. It's not either/or – it's AND. AI doesn't replace expertise; it amplifies it. Professionals who combine deep expertise with AI capabilities can outcompete those with expertise alone. The combination creates the most value. Future perspective: Even if current AI tools change, the pattern of AI augmenting professional work is established. Early adopters who understand AI integration will adapt to new tools more easily. Building AI fluency now creates compound advantages for whatever tools come next."}]},yw={1:uw,2:dw,3:mw,4:pw,5:hw,6:gw,7:fw},ww=()=>{const{lessonNumber:e}=li(),t=Nt();Ve();const n=parseInt(e),o=yw[n];return o?i.jsx("div",{style:{position:"relative"},children:i.jsx("div",{style:{position:"relative",zIndex:10},children:i.jsx(cw,{lessonData:o,onBack:()=>t(-1)})})}):i.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Plus Jakarta Sans', sans-serif",backgroundColor:"#F8FAFC"},children:i.jsxs("div",{style:{textAlign:"center",padding:"2rem",backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[i.jsx("h2",{style:{color:"#EF4444",marginBottom:"1rem"},children:"Quiz Not Found"}),i.jsxs("p",{style:{color:"#64748B",marginBottom:"1.5rem"},children:["Lesson ",e," quiz is not available."]}),i.jsx("button",{onClick:()=>t(-1),style:{padding:"0.75rem 1.5rem",backgroundColor:"#2563EB",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"600"},children:"Back to Lessons"})]})})};function vw(){const{pathname:e}=Ve();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null}const bw=[3,4,5,6,7,8];function xw({children:e}){const{moduleId:t}=li();return bw.includes(parseInt(t))?i.jsx(nn,{to:`/modules/${t}`,replace:!0}):e}function at({children:e}){const{user:t,loading:n}=Je();return n?i.jsx("div",{className:"min-h-screen flex items-center justify-center",children:i.jsx("p",{children:"Loading..."})}):t?e:i.jsx(nn,{to:"/login",replace:!0})}function kw(){const{user:e,loading:t,signOut:n}=Je();return t?i.jsx("div",{className:"min-h-screen flex items-center justify-center",children:i.jsx("p",{children:"Loading..."})}):i.jsx(my,{children:i.jsxs(zf,{basename:"/app",children:[i.jsx(vw,{}),i.jsxs(lf,{children:[i.jsx(oe,{path:"/",element:e?i.jsx(nn,{to:"/hub",replace:!0}):i.jsx(nn,{to:"/login",replace:!0})}),i.jsx(oe,{path:"/ai-education-landing",element:i.jsx(yy,{})}),i.jsx(oe,{path:"/program-curriculum",element:i.jsx(vy,{})}),i.jsx(oe,{path:"/ai-education",element:i.jsx(Iy,{})}),i.jsx(oe,{path:"/ai-strategy",element:i.jsx(Cy,{})}),i.jsx(oe,{path:"/ai-implementation",element:i.jsx(Ny,{})}),i.jsx(oe,{path:"/ai-solutions",element:i.jsx(Py,{})}),i.jsx(oe,{path:"/ai-security",element:i.jsx(Ry,{})}),i.jsx(oe,{path:"/login",element:e?i.jsx(nn,{to:"/hub",replace:!0}):i.jsx(Wy,{})}),i.jsx(oe,{path:"/hub",element:i.jsx(at,{children:i.jsx(Gy,{})})}),i.jsx(oe,{path:"/progress",element:i.jsx(at,{children:i.jsx(ht,{user:e,onSignOut:n,children:i.jsx(Uy,{})})})}),i.jsx(oe,{path:"/dashboard",element:i.jsx(nn,{to:"/progress",replace:!0})}),i.jsx(oe,{path:"/modules/:moduleId",element:i.jsx(at,{children:i.jsx(ht,{user:e,onSignOut:n,children:i.jsx(Ky,{})})})}),i.jsx(oe,{path:"/modules/:moduleId/lessons/:lessonId",element:i.jsx(at,{children:i.jsx(xw,{children:i.jsx(ht,{user:e,onSignOut:n,children:i.jsx(Yy,{})})})})}),i.jsx(oe,{path:"/modules/:moduleId/recap",element:i.jsx(at,{children:i.jsx(ht,{user:e,onSignOut:n,children:i.jsx(Jy,{})})})}),i.jsx(oe,{path:"/notes",element:i.jsx(at,{children:i.jsx(ht,{user:e,onSignOut:n,children:i.jsx(tw,{})})})}),i.jsx(oe,{path:"/resources",element:i.jsx(at,{children:i.jsx(ht,{user:e,onSignOut:n,children:i.jsx(ow,{})})})}),i.jsx(oe,{path:"/prompts",element:i.jsx(at,{children:i.jsx(ht,{user:e,onSignOut:n,children:i.jsx(aw,{})})})}),i.jsx(oe,{path:"/certificate",element:i.jsx(at,{children:i.jsx(ht,{user:e,onSignOut:n,children:i.jsx(lw,{})})})}),i.jsx(oe,{path:"/quiz/lesson/:lessonNumber",element:i.jsx(at,{children:i.jsx(ht,{user:e,onSignOut:n,children:i.jsx(ww,{})})})}),i.jsx(oe,{path:"*",element:i.jsx(nn,{to:"/",replace:!0})})]})]})})}cm(document.getElementById("root")).render(i.jsx(b.StrictMode,{children:i.jsx(kw,{})}));
