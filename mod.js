// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":u(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,h,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),e.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,y,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):f.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,_=isNaN,E=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,i,a,u,f,l,s,p,g,d,y;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",f=1,l=0;l<e.length;l++)if(n=e[l],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+m(y):m(y)+p)),u+=n.arg||"",f+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function k(e){var r,t,n,o;for(t=[],o=0,n=x.exec(e);n;)(r=e.slice(o,x.lastIndex-n[0].length)).length&&t.push(r),t.push(P(n)),o=x.lastIndex,n=x.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function T(e){var r,t;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[k(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return O.apply(null,r)}var R,L=Object.prototype,A=L.toString,V=L.__defineGetter__,F=L.__defineSetter__,G=L.__lookupGetter__,N=L.__lookupSetter__;R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(G.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=L,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(e,r,t.get),a&&F&&F.call(e,r,t.set),e};var C=R;function I(e,r,t,n){C(e,r,{configurable:!1,enumerable:!1,get:t,set:n})}function $(e,r,t){C(e,r,{configurable:!1,enumerable:!1,get:t})}function B(e,r,t){C(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z=/./;function M(e){return"boolean"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return U&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(e,r){return null!=e&&z.call(e,r)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=W()?function(e){var r,t,n;if(null==e)return X.call(e);t=e[H],r=q(e,H);try{e[H]=void 0}catch(r){return X.call(e)}return n=X.call(e),r?e[H]=t:delete e[H],n}:function(e){return X.call(e)},K=Boolean,Q=Boolean.prototype.toString;var Y=W();function ee(e){return"object"==typeof e&&(e instanceof K||(Y?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function re(e){return M(e)||ee(e)}B(re,"isPrimitive",M),B(re,"isObject",ee);var te="object"==typeof self?self:null,ne="object"==typeof window?window:null,oe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ie="object"==typeof oe?oe:null,ae="object"==typeof globalThis?globalThis:null;var ce=function(e){if(arguments.length){if(!M(e))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ae)return ae;if(te)return te;if(ne)return ne;if(ie)return ie;throw new Error("unexpected error. Unable to resolve global object.")}(),ue=ce.document&&ce.document.childNodes,fe=Int8Array;function le(){return/^\s*function\s*([^(]*)/i}var se=/^\s*function\s*([^(]*)/i;B(le,"REGEXP",se);var pe=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};function ge(e){return null!==e&&"object"==typeof e}function de(e){var r,t,n,o;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=se.exec(n.toString()))return r[1]}return ge(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}B(ge,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!pe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ge));var ye="function"==typeof Z||"object"==typeof fe||"function"==typeof ue?function(e){return de(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?de(e).toLowerCase():r};function be(e){return"function"===ye(e)}var he=Object;var ve,we=Object.getPrototypeOf;ve=be(Object.getPrototypeOf)?we:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===J(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var me=ve;var je=Object.prototype;function _e(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!pe(e)}(e)&&(r=function(e){return null==e?null:(e=he(e),me(e))}(e),!r||!q(e,"constructor")&&q(r,"constructor")&&be(r.constructor)&&"[object Function]"===J(r.constructor)&&q(r,"isPrototypeOf")&&be(r.isPrototypeOf)&&(r===je||function(e){var r;for(r in e)if(!q(e,r))return!1;return!0}(e)))}function Ee(){}function Se(e,r,t,n){var o,i,a,c,u,f,l,s,p,g,d,y,b,h;if(!((b=r[0])<=0))for(u=(o=t[0])<0?(1-b)*o:0,f=(i=t[1])<0?(1-b)*i:0,l=(a=t[2])<0?(1-b)*a:0,s=(c=t[3])<0?(1-b)*c:0,p=e[0],g=e[1],d=e[2],y=e[3],h=0;h<b;h++)y[s]=n(p[u],g[f],d[l]),u+=o,f+=i,l+=a,s+=c}function Oe(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}function xe(e){if(!be(e))throw new TypeError(Oe("1rt3c",e));if(t="factory",null==(r=e)||(r=he(r),"symbol"!=typeof t&&(t=String(t)),!(t in r)||!be(r[t])))throw new TypeError(Oe("1rtFM","factory"));var r,t;return function(){var r,t;if(arguments.length>0){if(!_e(t=arguments[0]))throw new TypeError(Oe("1rt2V",t));r=e.factory(t)}else t={},r=e;t&&t.prng?(B(n,"seed",null),B(n,"seedLength",null),I(n,"state",function(e){return function(){return e}}(null),Ee),B(n,"stateLength",null),B(n,"byteLength",null)):($(n,"seed",(function(){return n.PRNG.seed})),$(n,"seedLength",(function(){return n.PRNG.seedLength})),I(n,"state",(function(){return n.PRNG.state}),(function(e){n.PRNG.state=e})),$(n,"stateLength",(function(){return n.PRNG.stateLength})),$(n,"byteLength",(function(){return n.PRNG.byteLength})));return B(n,"PRNG",r.PRNG),B(n,"ndarray",(function(e,t,n,o,i,a,c,u,f,l,s,p,g){return Se.ndarray([t,i,u,s],[e],[n,a,f,p],[o,c,l,g],r),s})),n;function n(e,t,n,o,i,a,c,u,f){return Se([t,o,a,u],[e],[n,i,c,f],r),u}}}B(Se,"ndarray",(function(e,r,t,n,o){var i,a,c,u,f,l,s,p,g,d,y,b,h,v;if(!((h=r[0])<=0))for(f=n[0],l=n[1],s=n[2],p=n[3],i=t[0],a=t[1],c=t[2],u=t[3],g=e[0],d=e[1],y=e[2],b=e[3],v=0;v<h;v++)b[p]=o(g[f],d[l],y[s]),f+=i,l+=a,s+=c,p+=u}));export{xe as default};
//# sourceMappingURL=mod.js.map
