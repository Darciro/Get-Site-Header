/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});


/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.9
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.Popper = factory());
}(this, (function () { 'use strict';

    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
    var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
    var timeoutDuration = 0;
    for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
        if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
            timeoutDuration = 1;
            break;
        }
    }

    function microtaskDebounce(fn) {
        var called = false;
        return function () {
            if (called) {
                return;
            }
            called = true;
            window.Promise.resolve().then(function () {
                called = false;
                fn();
            });
        };
    }

    function taskDebounce(fn) {
        var scheduled = false;
        return function () {
            if (!scheduled) {
                scheduled = true;
                setTimeout(function () {
                    scheduled = false;
                    fn();
                }, timeoutDuration);
            }
        };
    }

    var supportsMicroTasks = isBrowser && window.Promise;

    /**
     * Create a debounced version of a method, that's asynchronously deferred
     * but called in the minimum time possible.
     *
     * @method
     * @memberof Popper.Utils
     * @argument {Function} fn
     * @returns {Function}
     */
    var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

    /**
     * Check if the given variable is a function
     * @method
     * @memberof Popper.Utils
     * @argument {Any} functionToCheck - variable to check
     * @returns {Boolean} answer to: is a function?
     */
    function isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }

    /**
     * Get CSS computed property of the given element
     * @method
     * @memberof Popper.Utils
     * @argument {Eement} element
     * @argument {String} property
     */
    function getStyleComputedProperty(element, property) {
        if (element.nodeType !== 1) {
            return [];
        }
        // NOTE: 1 DOM access here
        var css = getComputedStyle(element, null);
        return property ? css[property] : css;
    }

    /**
     * Returns the parentNode or the host of the element
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @returns {Element} parent
     */
    function getParentNode(element) {
        if (element.nodeName === 'HTML') {
            return element;
        }
        return element.parentNode || element.host;
    }

    /**
     * Returns the scrolling parent of the given element
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @returns {Element} scroll parent
     */
    function getScrollParent(element) {
        // Return body, `getScroll` will take care to get the correct `scrollTop` from it
        if (!element) {
            return document.body;
        }

        switch (element.nodeName) {
            case 'HTML':
            case 'BODY':
                return element.ownerDocument.body;
            case '#document':
                return element.body;
        }

        // Firefox want us to check `-x` and `-y` variations as well

        var _getStyleComputedProp = getStyleComputedProperty(element),
            overflow = _getStyleComputedProp.overflow,
            overflowX = _getStyleComputedProp.overflowX,
            overflowY = _getStyleComputedProp.overflowY;

        if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
            return element;
        }

        return getScrollParent(getParentNode(element));
    }

    /**
     * Returns the offset parent of the given element
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @returns {Element} offset parent
     */
    function getOffsetParent(element) {
        // NOTE: 1 DOM access here
        var offsetParent = element && element.offsetParent;
        var nodeName = offsetParent && offsetParent.nodeName;

        if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
            if (element) {
                return element.ownerDocument.documentElement;
            }

            return document.documentElement;
        }

        // .offsetParent will return the closest TD or TABLE in case
        // no offsetParent is present, I hate this job...
        if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
            return getOffsetParent(offsetParent);
        }

        return offsetParent;
    }

    function isOffsetContainer(element) {
        var nodeName = element.nodeName;

        if (nodeName === 'BODY') {
            return false;
        }
        return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
    }

    /**
     * Finds the root node (document, shadowDOM root) of the given element
     * @method
     * @memberof Popper.Utils
     * @argument {Element} node
     * @returns {Element} root node
     */
    function getRoot(node) {
        if (node.parentNode !== null) {
            return getRoot(node.parentNode);
        }

        return node;
    }

    /**
     * Finds the offset parent common to the two provided nodes
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element1
     * @argument {Element} element2
     * @returns {Element} common offset parent
     */
    function findCommonOffsetParent(element1, element2) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
            return document.documentElement;
        }

        // Here we make sure to give as "start" the element that comes first in the DOM
        var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
        var start = order ? element1 : element2;
        var end = order ? element2 : element1;

        // Get common ancestor container
        var range = document.createRange();
        range.setStart(start, 0);
        range.setEnd(end, 0);
        var commonAncestorContainer = range.commonAncestorContainer;

        // Both nodes are inside #document

        if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
            if (isOffsetContainer(commonAncestorContainer)) {
                return commonAncestorContainer;
            }

            return getOffsetParent(commonAncestorContainer);
        }

        // one of the nodes is inside shadowDOM, find which one
        var element1root = getRoot(element1);
        if (element1root.host) {
            return findCommonOffsetParent(element1root.host, element2);
        } else {
            return findCommonOffsetParent(element1, getRoot(element2).host);
        }
    }

    /**
     * Gets the scroll value of the given element in the given side (top and left)
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @argument {String} side `top` or `left`
     * @returns {number} amount of scrolled pixels
     */
    function getScroll(element) {
        var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

        var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
        var nodeName = element.nodeName;

        if (nodeName === 'BODY' || nodeName === 'HTML') {
            var html = element.ownerDocument.documentElement;
            var scrollingElement = element.ownerDocument.scrollingElement || html;
            return scrollingElement[upperSide];
        }

        return element[upperSide];
    }

    /*
     * Sum or subtract the element scroll values (left and top) from a given rect object
     * @method
     * @memberof Popper.Utils
     * @param {Object} rect - Rect object you want to change
     * @param {HTMLElement} element - The element from the function reads the scroll values
     * @param {Boolean} subtract - set to true if you want to subtract the scroll values
     * @return {Object} rect - The modifier rect object
     */
    function includeScroll(rect, element) {
        var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        var modifier = subtract ? -1 : 1;
        rect.top += scrollTop * modifier;
        rect.bottom += scrollTop * modifier;
        rect.left += scrollLeft * modifier;
        rect.right += scrollLeft * modifier;
        return rect;
    }

    /*
     * Helper to detect borders of a given element
     * @method
     * @memberof Popper.Utils
     * @param {CSSStyleDeclaration} styles
     * Result of `getStyleComputedProperty` on the given element
     * @param {String} axis - `x` or `y`
     * @return {number} borders - The borders size of the given axis
     */

    function getBordersSize(styles, axis) {
        var sideA = axis === 'x' ? 'Left' : 'Top';
        var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

        return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
    }

    /**
     * Tells if you are running Internet Explorer 10
     * @method
     * @memberof Popper.Utils
     * @returns {Boolean} isIE10
     */
    var isIE10 = undefined;

    var isIE10$1 = function () {
        if (isIE10 === undefined) {
            isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
        }
        return isIE10;
    };

    function getSize(axis, body, html, computedStyle) {
        return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
    }

    function getWindowSizes() {
        var body = document.body;
        var html = document.documentElement;
        var computedStyle = isIE10$1() && getComputedStyle(html);

        return {
            height: getSize('Height', body, html, computedStyle),
            width: getSize('Width', body, html, computedStyle)
        };
    }

    var classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };

    var createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();





    var defineProperty = function (obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    };

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    /**
     * Given element offsets, generate an output similar to getBoundingClientRect
     * @method
     * @memberof Popper.Utils
     * @argument {Object} offsets
     * @returns {Object} ClientRect like output
     */
    function getClientRect(offsets) {
        return _extends({}, offsets, {
            right: offsets.left + offsets.width,
            bottom: offsets.top + offsets.height
        });
    }

    /**
     * Get bounding client rect of given element
     * @method
     * @memberof Popper.Utils
     * @param {HTMLElement} element
     * @return {Object} client rect
     */
    function getBoundingClientRect(element) {
        var rect = {};

        // IE10 10 FIX: Please, don't ask, the element isn't
        // considered in DOM in some circumstances...
        // This isn't reproducible in IE10 compatibility mode of IE11
        if (isIE10$1()) {
            try {
                rect = element.getBoundingClientRect();
                var scrollTop = getScroll(element, 'top');
                var scrollLeft = getScroll(element, 'left');
                rect.top += scrollTop;
                rect.left += scrollLeft;
                rect.bottom += scrollTop;
                rect.right += scrollLeft;
            } catch (err) {}
        } else {
            rect = element.getBoundingClientRect();
        }

        var result = {
            left: rect.left,
            top: rect.top,
            width: rect.right - rect.left,
            height: rect.bottom - rect.top
        };

        // subtract scrollbar size from sizes
        var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
        var width = sizes.width || element.clientWidth || result.right - result.left;
        var height = sizes.height || element.clientHeight || result.bottom - result.top;

        var horizScrollbar = element.offsetWidth - width;
        var vertScrollbar = element.offsetHeight - height;

        // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
        // we make this check conditional for performance reasons
        if (horizScrollbar || vertScrollbar) {
            var styles = getStyleComputedProperty(element);
            horizScrollbar -= getBordersSize(styles, 'x');
            vertScrollbar -= getBordersSize(styles, 'y');

            result.width -= horizScrollbar;
            result.height -= vertScrollbar;
        }

        return getClientRect(result);
    }

    function getOffsetRectRelativeToArbitraryNode(children, parent) {
        var isIE10 = isIE10$1();
        var isHTML = parent.nodeName === 'HTML';
        var childrenRect = getBoundingClientRect(children);
        var parentRect = getBoundingClientRect(parent);
        var scrollParent = getScrollParent(children);

        var styles = getStyleComputedProperty(parent);
        var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
        var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

        var offsets = getClientRect({
            top: childrenRect.top - parentRect.top - borderTopWidth,
            left: childrenRect.left - parentRect.left - borderLeftWidth,
            width: childrenRect.width,
            height: childrenRect.height
        });
        offsets.marginTop = 0;
        offsets.marginLeft = 0;

        // Subtract margins of documentElement in case it's being used as parent
        // we do this only on HTML because it's the only element that behaves
        // differently when margins are applied to it. The margins are included in
        // the box of the documentElement, in the other cases not.
        if (!isIE10 && isHTML) {
            var marginTop = parseFloat(styles.marginTop, 10);
            var marginLeft = parseFloat(styles.marginLeft, 10);

            offsets.top -= borderTopWidth - marginTop;
            offsets.bottom -= borderTopWidth - marginTop;
            offsets.left -= borderLeftWidth - marginLeft;
            offsets.right -= borderLeftWidth - marginLeft;

            // Attach marginTop and marginLeft because in some circumstances we may need them
            offsets.marginTop = marginTop;
            offsets.marginLeft = marginLeft;
        }

        if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
            offsets = includeScroll(offsets, parent);
        }

        return offsets;
    }

    function getViewportOffsetRectRelativeToArtbitraryNode(element) {
        var html = element.ownerDocument.documentElement;
        var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
        var width = Math.max(html.clientWidth, window.innerWidth || 0);
        var height = Math.max(html.clientHeight, window.innerHeight || 0);

        var scrollTop = getScroll(html);
        var scrollLeft = getScroll(html, 'left');

        var offset = {
            top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
            left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
            width: width,
            height: height
        };

        return getClientRect(offset);
    }

    /**
     * Check if the given element is fixed or is inside a fixed parent
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @argument {Element} customContainer
     * @returns {Boolean} answer to "isFixed?"
     */
    function isFixed(element) {
        var nodeName = element.nodeName;
        if (nodeName === 'BODY' || nodeName === 'HTML') {
            return false;
        }
        if (getStyleComputedProperty(element, 'position') === 'fixed') {
            return true;
        }
        return isFixed(getParentNode(element));
    }

    /**
     * Computed the boundaries limits and return them
     * @method
     * @memberof Popper.Utils
     * @param {HTMLElement} popper
     * @param {HTMLElement} reference
     * @param {number} padding
     * @param {HTMLElement} boundariesElement - Element used to define the boundaries
     * @returns {Object} Coordinates of the boundaries
     */
    function getBoundaries(popper, reference, padding, boundariesElement) {
        // NOTE: 1 DOM access here
        var boundaries = { top: 0, left: 0 };
        var offsetParent = findCommonOffsetParent(popper, reference);

        // Handle viewport case
        if (boundariesElement === 'viewport') {
            boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
        } else {
            // Handle other cases based on DOM element used as boundaries
            var boundariesNode = void 0;
            if (boundariesElement === 'scrollParent') {
                boundariesNode = getScrollParent(getParentNode(reference));
                if (boundariesNode.nodeName === 'BODY') {
                    boundariesNode = popper.ownerDocument.documentElement;
                }
            } else if (boundariesElement === 'window') {
                boundariesNode = popper.ownerDocument.documentElement;
            } else {
                boundariesNode = boundariesElement;
            }

            var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

            // In case of HTML, we need a different computation
            if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
                var _getWindowSizes = getWindowSizes(),
                    height = _getWindowSizes.height,
                    width = _getWindowSizes.width;

                boundaries.top += offsets.top - offsets.marginTop;
                boundaries.bottom = height + offsets.top;
                boundaries.left += offsets.left - offsets.marginLeft;
                boundaries.right = width + offsets.left;
            } else {
                // for all the other DOM elements, this one is good
                boundaries = offsets;
            }
        }

        // Add paddings
        boundaries.left += padding;
        boundaries.top += padding;
        boundaries.right -= padding;
        boundaries.bottom -= padding;

        return boundaries;
    }

    function getArea(_ref) {
        var width = _ref.width,
            height = _ref.height;

        return width * height;
    }

    /**
     * Utility used to transform the `auto` placement to the placement with more
     * available space.
     * @method
     * @memberof Popper.Utils
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
        var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

        if (placement.indexOf('auto') === -1) {
            return placement;
        }

        var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

        var rects = {
            top: {
                width: boundaries.width,
                height: refRect.top - boundaries.top
            },
            right: {
                width: boundaries.right - refRect.right,
                height: boundaries.height
            },
            bottom: {
                width: boundaries.width,
                height: boundaries.bottom - refRect.bottom
            },
            left: {
                width: refRect.left - boundaries.left,
                height: boundaries.height
            }
        };

        var sortedAreas = Object.keys(rects).map(function (key) {
            return _extends({
                key: key
            }, rects[key], {
                area: getArea(rects[key])
            });
        }).sort(function (a, b) {
            return b.area - a.area;
        });

        var filteredAreas = sortedAreas.filter(function (_ref2) {
            var width = _ref2.width,
                height = _ref2.height;
            return width >= popper.clientWidth && height >= popper.clientHeight;
        });

        var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

        var variation = placement.split('-')[1];

        return computedPlacement + (variation ? '-' + variation : '');
    }

    /**
     * Get offsets to the reference element
     * @method
     * @memberof Popper.Utils
     * @param {Object} state
     * @param {Element} popper - the popper element
     * @param {Element} reference - the reference element (the popper will be relative to this)
     * @returns {Object} An object containing the offsets which will be applied to the popper
     */
    function getReferenceOffsets(state, popper, reference) {
        var commonOffsetParent = findCommonOffsetParent(popper, reference);
        return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
    }

    /**
     * Get the outer sizes of the given element (offset size + margins)
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @returns {Object} object containing width and height properties
     */
    function getOuterSizes(element) {
        var styles = getComputedStyle(element);
        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
        var result = {
            width: element.offsetWidth + y,
            height: element.offsetHeight + x
        };
        return result;
    }

    /**
     * Get the opposite placement of the given one
     * @method
     * @memberof Popper.Utils
     * @argument {String} placement
     * @returns {String} flipped placement
     */
    function getOppositePlacement(placement) {
        var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
        return placement.replace(/left|right|bottom|top/g, function (matched) {
            return hash[matched];
        });
    }

    /**
     * Get offsets to the popper
     * @method
     * @memberof Popper.Utils
     * @param {Object} position - CSS position the Popper will get applied
     * @param {HTMLElement} popper - the popper element
     * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
     * @param {String} placement - one of the valid placement options
     * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
     */
    function getPopperOffsets(popper, referenceOffsets, placement) {
        placement = placement.split('-')[0];

        // Get popper node sizes
        var popperRect = getOuterSizes(popper);

        // Add position, width and height to our offsets object
        var popperOffsets = {
            width: popperRect.width,
            height: popperRect.height
        };

        // depending by the popper placement we have to compute its offsets slightly differently
        var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
        var mainSide = isHoriz ? 'top' : 'left';
        var secondarySide = isHoriz ? 'left' : 'top';
        var measurement = isHoriz ? 'height' : 'width';
        var secondaryMeasurement = !isHoriz ? 'height' : 'width';

        popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
        if (placement === secondarySide) {
            popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
        } else {
            popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
        }

        return popperOffsets;
    }

    /**
     * Mimics the `find` method of Array
     * @method
     * @memberof Popper.Utils
     * @argument {Array} arr
     * @argument prop
     * @argument value
     * @returns index or -1
     */
    function find(arr, check) {
        // use native find if supported
        if (Array.prototype.find) {
            return arr.find(check);
        }

        // use `filter` to obtain the same behavior of `find`
        return arr.filter(check)[0];
    }

    /**
     * Return the index of the matching object
     * @method
     * @memberof Popper.Utils
     * @argument {Array} arr
     * @argument prop
     * @argument value
     * @returns index or -1
     */
    function findIndex(arr, prop, value) {
        // use native findIndex if supported
        if (Array.prototype.findIndex) {
            return arr.findIndex(function (cur) {
                return cur[prop] === value;
            });
        }

        // use `find` + `indexOf` if `findIndex` isn't supported
        var match = find(arr, function (obj) {
            return obj[prop] === value;
        });
        return arr.indexOf(match);
    }

    /**
     * Loop trough the list of modifiers and run them in order,
     * each of them will then edit the data object.
     * @method
     * @memberof Popper.Utils
     * @param {dataObject} data
     * @param {Array} modifiers
     * @param {String} ends - Optional modifier name used as stopper
     * @returns {dataObject}
     */
    function runModifiers(modifiers, data, ends) {
        var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

        modifiersToRun.forEach(function (modifier) {
            if (modifier['function']) {
                // eslint-disable-line dot-notation
                console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            }
            var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
            if (modifier.enabled && isFunction(fn)) {
                // Add properties to offsets to make them a complete clientRect object
                // we do this before each modifier to make sure the previous one doesn't
                // mess with these values
                data.offsets.popper = getClientRect(data.offsets.popper);
                data.offsets.reference = getClientRect(data.offsets.reference);

                data = fn(data, modifier);
            }
        });

        return data;
    }

    /**
     * Updates the position of the popper, computing the new offsets and applying
     * the new style.<br />
     * Prefer `scheduleUpdate` over `update` because of performance reasons.
     * @method
     * @memberof Popper
     */
    function update() {
        // if popper is destroyed, don't perform any further update
        if (this.state.isDestroyed) {
            return;
        }

        var data = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: false,
            offsets: {}
        };

        // compute reference element offsets
        data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

        // compute auto placement, store placement inside the data object,
        // modifiers will be able to edit `placement` if needed
        // and refer to originalPlacement to know the original value
        data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

        // store the computed placement inside `originalPlacement`
        data.originalPlacement = data.placement;

        // compute the popper offsets
        data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
        data.offsets.popper.position = 'absolute';

        // run the modifiers
        data = runModifiers(this.modifiers, data);

        // the first `update` will call `onCreate` callback
        // the other ones will call `onUpdate` callback
        if (!this.state.isCreated) {
            this.state.isCreated = true;
            this.options.onCreate(data);
        } else {
            this.options.onUpdate(data);
        }
    }

    /**
     * Helper used to know if the given modifier is enabled.
     * @method
     * @memberof Popper.Utils
     * @returns {Boolean}
     */
    function isModifierEnabled(modifiers, modifierName) {
        return modifiers.some(function (_ref) {
            var name = _ref.name,
                enabled = _ref.enabled;
            return enabled && name === modifierName;
        });
    }

    /**
     * Get the prefixed supported property name
     * @method
     * @memberof Popper.Utils
     * @argument {String} property (camelCase)
     * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
     */
    function getSupportedPropertyName(property) {
        var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
        var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

        for (var i = 0; i < prefixes.length - 1; i++) {
            var prefix = prefixes[i];
            var toCheck = prefix ? '' + prefix + upperProp : property;
            if (typeof document.body.style[toCheck] !== 'undefined') {
                return toCheck;
            }
        }
        return null;
    }

    /**
     * Destroy the popper
     * @method
     * @memberof Popper
     */
    function destroy() {
        this.state.isDestroyed = true;

        // touch DOM only if `applyStyle` modifier is enabled
        if (isModifierEnabled(this.modifiers, 'applyStyle')) {
            this.popper.removeAttribute('x-placement');
            this.popper.style.left = '';
            this.popper.style.position = '';
            this.popper.style.top = '';
            this.popper.style[getSupportedPropertyName('transform')] = '';
        }

        this.disableEventListeners();

        // remove the popper if user explicity asked for the deletion on destroy
        // do not use `remove` because IE11 doesn't support it
        if (this.options.removeOnDestroy) {
            this.popper.parentNode.removeChild(this.popper);
        }
        return this;
    }

    /**
     * Get the window associated with the element
     * @argument {Element} element
     * @returns {Window}
     */
    function getWindow(element) {
        var ownerDocument = element.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView : window;
    }

    function attachToScrollParents(scrollParent, event, callback, scrollParents) {
        var isBody = scrollParent.nodeName === 'BODY';
        var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
        target.addEventListener(event, callback, { passive: true });

        if (!isBody) {
            attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
        }
        scrollParents.push(target);
    }

    /**
     * Setup needed event listeners used to update the popper position
     * @method
     * @memberof Popper.Utils
     * @private
     */
    function setupEventListeners(reference, options, state, updateBound) {
        // Resize event listener on window
        state.updateBound = updateBound;
        getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

        // Scroll event listener on scroll parents
        var scrollElement = getScrollParent(reference);
        attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
        state.scrollElement = scrollElement;
        state.eventsEnabled = true;

        return state;
    }

    /**
     * It will add resize/scroll events and start recalculating
     * position of the popper element when they are triggered.
     * @method
     * @memberof Popper
     */
    function enableEventListeners() {
        if (!this.state.eventsEnabled) {
            this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
        }
    }

    /**
     * Remove event listeners used to update the popper position
     * @method
     * @memberof Popper.Utils
     * @private
     */
    function removeEventListeners(reference, state) {
        // Remove resize event listener on window
        getWindow(reference).removeEventListener('resize', state.updateBound);

        // Remove scroll event listener on scroll parents
        state.scrollParents.forEach(function (target) {
            target.removeEventListener('scroll', state.updateBound);
        });

        // Reset state
        state.updateBound = null;
        state.scrollParents = [];
        state.scrollElement = null;
        state.eventsEnabled = false;
        return state;
    }

    /**
     * It will remove resize/scroll events and won't recalculate popper position
     * when they are triggered. It also won't trigger onUpdate callback anymore,
     * unless you call `update` method manually.
     * @method
     * @memberof Popper
     */
    function disableEventListeners() {
        if (this.state.eventsEnabled) {
            cancelAnimationFrame(this.scheduleUpdate);
            this.state = removeEventListeners(this.reference, this.state);
        }
    }

    /**
     * Tells if a given input is a number
     * @method
     * @memberof Popper.Utils
     * @param {*} input to check
     * @return {Boolean}
     */
    function isNumeric(n) {
        return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
    }

    /**
     * Set the style to the given popper
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element - Element to apply the style to
     * @argument {Object} styles
     * Object with a list of properties and values which will be applied to the element
     */
    function setStyles(element, styles) {
        Object.keys(styles).forEach(function (prop) {
            var unit = '';
            // add unit if the value is numeric and is one of the following
            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
                unit = 'px';
            }
            element.style[prop] = styles[prop] + unit;
        });
    }

    /**
     * Set the attributes to the given popper
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element - Element to apply the attributes to
     * @argument {Object} styles
     * Object with a list of properties and values which will be applied to the element
     */
    function setAttributes(element, attributes) {
        Object.keys(attributes).forEach(function (prop) {
            var value = attributes[prop];
            if (value !== false) {
                element.setAttribute(prop, attributes[prop]);
            } else {
                element.removeAttribute(prop);
            }
        });
    }

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @argument {Object} data.styles - List of style properties - values to apply to popper element
     * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The same data object
     */
    function applyStyle(data) {
        // any property present in `data.styles` will be applied to the popper,
        // in this way we can make the 3rd party modifiers add custom styles to it
        // Be aware, modifiers could override the properties defined in the previous
        // lines of this modifier!
        setStyles(data.instance.popper, data.styles);

        // any property present in `data.attributes` will be applied to the popper,
        // they will be set as HTML attributes of the element
        setAttributes(data.instance.popper, data.attributes);

        // if arrowElement is defined and arrowStyles has some properties
        if (data.arrowElement && Object.keys(data.arrowStyles).length) {
            setStyles(data.arrowElement, data.arrowStyles);
        }

        return data;
    }

    /**
     * Set the x-placement attribute before everything else because it could be used
     * to add margins to the popper margins needs to be calculated to get the
     * correct popper offsets.
     * @method
     * @memberof Popper.modifiers
     * @param {HTMLElement} reference - The reference element used to position the popper
     * @param {HTMLElement} popper - The HTML element used as popper.
     * @param {Object} options - Popper.js options
     */
    function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
        // compute reference element offsets
        var referenceOffsets = getReferenceOffsets(state, popper, reference);

        // compute auto placement, store placement inside the data object,
        // modifiers will be able to edit `placement` if needed
        // and refer to originalPlacement to know the original value
        var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

        popper.setAttribute('x-placement', placement);

        // Apply `position` to popper before anything else because
        // without the position applied we can't guarantee correct computations
        setStyles(popper, { position: 'absolute' });

        return options;
    }

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function computeStyle(data, options) {
        var x = options.x,
            y = options.y;
        var popper = data.offsets.popper;

        // Remove this legacy support in Popper.js v2

        var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
            return modifier.name === 'applyStyle';
        }).gpuAcceleration;
        if (legacyGpuAccelerationOption !== undefined) {
            console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
        }
        var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

        var offsetParent = getOffsetParent(data.instance.popper);
        var offsetParentRect = getBoundingClientRect(offsetParent);

        // Styles
        var styles = {
            position: popper.position
        };

        // floor sides to avoid blurry text
        var offsets = {
            left: Math.floor(popper.left),
            top: Math.floor(popper.top),
            bottom: Math.floor(popper.bottom),
            right: Math.floor(popper.right)
        };

        var sideA = x === 'bottom' ? 'top' : 'bottom';
        var sideB = y === 'right' ? 'left' : 'right';

        // if gpuAcceleration is set to `true` and transform is supported,
        //  we use `translate3d` to apply the position to the popper we
        // automatically use the supported prefixed version if needed
        var prefixedProperty = getSupportedPropertyName('transform');

        // now, let's make a step back and look at this code closely (wtf?)
        // If the content of the popper grows once it's been positioned, it
        // may happen that the popper gets misplaced because of the new content
        // overflowing its reference element
        // To avoid this problem, we provide two options (x and y), which allow
        // the consumer to define the offset origin.
        // If we position a popper on top of a reference element, we can set
        // `x` to `top` to make the popper grow towards its top instead of
        // its bottom.
        var left = void 0,
            top = void 0;
        if (sideA === 'bottom') {
            top = -offsetParentRect.height + offsets.bottom;
        } else {
            top = offsets.top;
        }
        if (sideB === 'right') {
            left = -offsetParentRect.width + offsets.right;
        } else {
            left = offsets.left;
        }
        if (gpuAcceleration && prefixedProperty) {
            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
            styles[sideA] = 0;
            styles[sideB] = 0;
            styles.willChange = 'transform';
        } else {
            // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
            var invertTop = sideA === 'bottom' ? -1 : 1;
            var invertLeft = sideB === 'right' ? -1 : 1;
            styles[sideA] = top * invertTop;
            styles[sideB] = left * invertLeft;
            styles.willChange = sideA + ', ' + sideB;
        }

        // Attributes
        var attributes = {
            'x-placement': data.placement
        };

        // Update `data` attributes, styles and arrowStyles
        data.attributes = _extends({}, attributes, data.attributes);
        data.styles = _extends({}, styles, data.styles);
        data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

        return data;
    }

    /**
     * Helper used to know if the given modifier depends from another one.<br />
     * It checks if the needed modifier is listed and enabled.
     * @method
     * @memberof Popper.Utils
     * @param {Array} modifiers - list of modifiers
     * @param {String} requestingName - name of requesting modifier
     * @param {String} requestedName - name of requested modifier
     * @returns {Boolean}
     */
    function isModifierRequired(modifiers, requestingName, requestedName) {
        var requesting = find(modifiers, function (_ref) {
            var name = _ref.name;
            return name === requestingName;
        });

        var isRequired = !!requesting && modifiers.some(function (modifier) {
            return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
        });

        if (!isRequired) {
            var _requesting = '`' + requestingName + '`';
            var requested = '`' + requestedName + '`';
            console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
        }
        return isRequired;
    }

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function arrow(data, options) {
        var _data$offsets$arrow;

        // arrow depends on keepTogether in order to work
        if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
            return data;
        }

        var arrowElement = options.element;

        // if arrowElement is a string, suppose it's a CSS selector
        if (typeof arrowElement === 'string') {
            arrowElement = data.instance.popper.querySelector(arrowElement);

            // if arrowElement is not found, don't run the modifier
            if (!arrowElement) {
                return data;
            }
        } else {
            // if the arrowElement isn't a query selector we must check that the
            // provided DOM node is child of its popper node
            if (!data.instance.popper.contains(arrowElement)) {
                console.warn('WARNING: `arrow.element` must be child of its popper element!');
                return data;
            }
        }

        var placement = data.placement.split('-')[0];
        var _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;

        var isVertical = ['left', 'right'].indexOf(placement) !== -1;

        var len = isVertical ? 'height' : 'width';
        var sideCapitalized = isVertical ? 'Top' : 'Left';
        var side = sideCapitalized.toLowerCase();
        var altSide = isVertical ? 'left' : 'top';
        var opSide = isVertical ? 'bottom' : 'right';
        var arrowElementSize = getOuterSizes(arrowElement)[len];

        //
        // extends keepTogether behavior making sure the popper and its
        // reference have enough pixels in conjuction
        //

        // top/left side
        if (reference[opSide] - arrowElementSize < popper[side]) {
            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
        }
        // bottom/right side
        if (reference[side] + arrowElementSize > popper[opSide]) {
            data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
        }
        data.offsets.popper = getClientRect(data.offsets.popper);

        // compute center of the popper
        var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

        // Compute the sideValue using the updated popper offsets
        // take popper margin in account because we don't have this info available
        var css = getStyleComputedProperty(data.instance.popper);
        var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
        var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
        var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

        // prevent arrowElement from being placed not contiguously to its popper
        sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

        data.arrowElement = arrowElement;
        data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

        return data;
    }

    /**
     * Get the opposite placement variation of the given one
     * @method
     * @memberof Popper.Utils
     * @argument {String} placement variation
     * @returns {String} flipped placement variation
     */
    function getOppositeVariation(variation) {
        if (variation === 'end') {
            return 'start';
        } else if (variation === 'start') {
            return 'end';
        }
        return variation;
    }

    /**
     * List of accepted placements to use as values of the `placement` option.<br />
     * Valid placements are:
     * - `auto`
     * - `top`
     * - `right`
     * - `bottom`
     * - `left`
     *
     * Each placement can have a variation from this list:
     * - `-start`
     * - `-end`
     *
     * Variations are interpreted easily if you think of them as the left to right
     * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
     * is right.<br />
     * Vertically (`left` and `right`), `start` is top and `end` is bottom.
     *
     * Some valid examples are:
     * - `top-end` (on top of reference, right aligned)
     * - `right-start` (on right of reference, top aligned)
     * - `bottom` (on bottom, centered)
     * - `auto-right` (on the side with more space available, alignment depends by placement)
     *
     * @static
     * @type {Array}
     * @enum {String}
     * @readonly
     * @method placements
     * @memberof Popper
     */
    var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
    var validPlacements = placements.slice(3);

    /**
     * Given an initial placement, returns all the subsequent placements
     * clockwise (or counter-clockwise).
     *
     * @method
     * @memberof Popper.Utils
     * @argument {String} placement - A valid placement (it accepts variations)
     * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
     * @returns {Array} placements including their variations
     */
    function clockwise(placement) {
        var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var index = validPlacements.indexOf(placement);
        var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
        return counter ? arr.reverse() : arr;
    }

    var BEHAVIORS = {
        FLIP: 'flip',
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise'
    };

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function flip(data, options) {
        // if `inner` modifier is enabled, we can't use the `flip` modifier
        if (isModifierEnabled(data.instance.modifiers, 'inner')) {
            return data;
        }

        if (data.flipped && data.placement === data.originalPlacement) {
            // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
            return data;
        }

        var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

        var placement = data.placement.split('-')[0];
        var placementOpposite = getOppositePlacement(placement);
        var variation = data.placement.split('-')[1] || '';

        var flipOrder = [];

        switch (options.behavior) {
            case BEHAVIORS.FLIP:
                flipOrder = [placement, placementOpposite];
                break;
            case BEHAVIORS.CLOCKWISE:
                flipOrder = clockwise(placement);
                break;
            case BEHAVIORS.COUNTERCLOCKWISE:
                flipOrder = clockwise(placement, true);
                break;
            default:
                flipOrder = options.behavior;
        }

        flipOrder.forEach(function (step, index) {
            if (placement !== step || flipOrder.length === index + 1) {
                return data;
            }

            placement = data.placement.split('-')[0];
            placementOpposite = getOppositePlacement(placement);

            var popperOffsets = data.offsets.popper;
            var refOffsets = data.offsets.reference;

            // using floor because the reference offsets may contain decimals we are not going to consider here
            var floor = Math.floor;
            var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

            var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
            var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
            var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
            var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

            var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

            // flip the variation if required
            var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
            var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

            if (overlapsRef || overflowsBoundaries || flippedVariation) {
                // this boolean to detect any flip loop
                data.flipped = true;

                if (overlapsRef || overflowsBoundaries) {
                    placement = flipOrder[index + 1];
                }

                if (flippedVariation) {
                    variation = getOppositeVariation(variation);
                }

                data.placement = placement + (variation ? '-' + variation : '');

                // this object contains `position`, we want to preserve it along with
                // any additional property we may add in the future
                data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

                data = runModifiers(data.instance.modifiers, data, 'flip');
            }
        });
        return data;
    }

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function keepTogether(data) {
        var _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;

        var placement = data.placement.split('-')[0];
        var floor = Math.floor;
        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        var side = isVertical ? 'right' : 'bottom';
        var opSide = isVertical ? 'left' : 'top';
        var measurement = isVertical ? 'width' : 'height';

        if (popper[side] < floor(reference[opSide])) {
            data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
        }
        if (popper[opSide] > floor(reference[side])) {
            data.offsets.popper[opSide] = floor(reference[side]);
        }

        return data;
    }

    /**
     * Converts a string containing value + unit into a px value number
     * @function
     * @memberof {modifiers~offset}
     * @private
     * @argument {String} str - Value + unit string
     * @argument {String} measurement - `height` or `width`
     * @argument {Object} popperOffsets
     * @argument {Object} referenceOffsets
     * @returns {Number|String}
     * Value in pixels, or original string if no values were extracted
     */
    function toValue(str, measurement, popperOffsets, referenceOffsets) {
        // separate value from unit
        var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
        var value = +split[1];
        var unit = split[2];

        // If it's not a number it's an operator, I guess
        if (!value) {
            return str;
        }

        if (unit.indexOf('%') === 0) {
            var element = void 0;
            switch (unit) {
                case '%p':
                    element = popperOffsets;
                    break;
                case '%':
                case '%r':
                default:
                    element = referenceOffsets;
            }

            var rect = getClientRect(element);
            return rect[measurement] / 100 * value;
        } else if (unit === 'vh' || unit === 'vw') {
            // if is a vh or vw, we calculate the size based on the viewport
            var size = void 0;
            if (unit === 'vh') {
                size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            } else {
                size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            }
            return size / 100 * value;
        } else {
            // if is an explicit pixel unit, we get rid of the unit and keep the value
            // if is an implicit unit, it's px, and we return just the value
            return value;
        }
    }

    /**
     * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
     * @function
     * @memberof {modifiers~offset}
     * @private
     * @argument {String} offset
     * @argument {Object} popperOffsets
     * @argument {Object} referenceOffsets
     * @argument {String} basePlacement
     * @returns {Array} a two cells array with x and y offsets in numbers
     */
    function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
        var offsets = [0, 0];

        // Use height if placement is left or right and index is 0 otherwise use width
        // in this way the first offset will use an axis and the second one
        // will use the other one
        var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

        // Split the offset string to obtain a list of values and operands
        // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
        var fragments = offset.split(/(\+|\-)/).map(function (frag) {
            return frag.trim();
        });

        // Detect if the offset string contains a pair of values or a single one
        // they could be separated by comma or space
        var divider = fragments.indexOf(find(fragments, function (frag) {
            return frag.search(/,|\s/) !== -1;
        }));

        if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
            console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        }

        // If divider is found, we divide the list of values and operands to divide
        // them by ofset X and Y.
        var splitRegex = /\s*,\s*|\s+/;
        var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

        // Convert the values with units to absolute pixels to allow our computations
        ops = ops.map(function (op, index) {
            // Most of the units rely on the orientation of the popper
            var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
            var mergeWithPrevious = false;
            return op
            // This aggregates any `+` or `-` sign that aren't considered operators
            // e.g.: 10 + +5 => [10, +, +5]
                .reduce(function (a, b) {
                    if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
                        a[a.length - 1] = b;
                        mergeWithPrevious = true;
                        return a;
                    } else if (mergeWithPrevious) {
                        a[a.length - 1] += b;
                        mergeWithPrevious = false;
                        return a;
                    } else {
                        return a.concat(b);
                    }
                }, [])
                // Here we convert the string values into number values (in px)
                .map(function (str) {
                    return toValue(str, measurement, popperOffsets, referenceOffsets);
                });
        });

        // Loop trough the offsets arrays and execute the operations
        ops.forEach(function (op, index) {
            op.forEach(function (frag, index2) {
                if (isNumeric(frag)) {
                    offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
                }
            });
        });
        return offsets;
    }

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @argument {Number|String} options.offset=0
     * The offset value as described in the modifier description
     * @returns {Object} The data object, properly modified
     */
    function offset(data, _ref) {
        var offset = _ref.offset;
        var placement = data.placement,
            _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;

        var basePlacement = placement.split('-')[0];

        var offsets = void 0;
        if (isNumeric(+offset)) {
            offsets = [+offset, 0];
        } else {
            offsets = parseOffset(offset, popper, reference, basePlacement);
        }

        if (basePlacement === 'left') {
            popper.top += offsets[0];
            popper.left -= offsets[1];
        } else if (basePlacement === 'right') {
            popper.top += offsets[0];
            popper.left += offsets[1];
        } else if (basePlacement === 'top') {
            popper.left += offsets[0];
            popper.top -= offsets[1];
        } else if (basePlacement === 'bottom') {
            popper.left += offsets[0];
            popper.top += offsets[1];
        }

        data.popper = popper;
        return data;
    }

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function preventOverflow(data, options) {
        var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

        // If offsetParent is the reference element, we really want to
        // go one step up and use the next offsetParent as reference to
        // avoid to make this modifier completely useless and look like broken
        if (data.instance.reference === boundariesElement) {
            boundariesElement = getOffsetParent(boundariesElement);
        }

        var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
        options.boundaries = boundaries;

        var order = options.priority;
        var popper = data.offsets.popper;

        var check = {
            primary: function primary(placement) {
                var value = popper[placement];
                if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
                    value = Math.max(popper[placement], boundaries[placement]);
                }
                return defineProperty({}, placement, value);
            },
            secondary: function secondary(placement) {
                var mainSide = placement === 'right' ? 'left' : 'top';
                var value = popper[mainSide];
                if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
                    value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
                }
                return defineProperty({}, mainSide, value);
            }
        };

        order.forEach(function (placement) {
            var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
            popper = _extends({}, popper, check[side](placement));
        });

        data.offsets.popper = popper;

        return data;
    }

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function shift(data) {
        var placement = data.placement;
        var basePlacement = placement.split('-')[0];
        var shiftvariation = placement.split('-')[1];

        // if shift shiftvariation is specified, run the modifier
        if (shiftvariation) {
            var _data$offsets = data.offsets,
                reference = _data$offsets.reference,
                popper = _data$offsets.popper;

            var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
            var side = isVertical ? 'left' : 'top';
            var measurement = isVertical ? 'width' : 'height';

            var shiftOffsets = {
                start: defineProperty({}, side, reference[side]),
                end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
            };

            data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
        }

        return data;
    }

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function hide(data) {
        if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
            return data;
        }

        var refRect = data.offsets.reference;
        var bound = find(data.instance.modifiers, function (modifier) {
            return modifier.name === 'preventOverflow';
        }).boundaries;

        if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
            // Avoid unnecessary DOM access if visibility hasn't changed
            if (data.hide === true) {
                return data;
            }

            data.hide = true;
            data.attributes['x-out-of-boundaries'] = '';
        } else {
            // Avoid unnecessary DOM access if visibility hasn't changed
            if (data.hide === false) {
                return data;
            }

            data.hide = false;
            data.attributes['x-out-of-boundaries'] = false;
        }

        return data;
    }

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function inner(data) {
        var placement = data.placement;
        var basePlacement = placement.split('-')[0];
        var _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;

        var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

        var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

        popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

        data.placement = getOppositePlacement(placement);
        data.offsets.popper = getClientRect(popper);

        return data;
    }

    /**
     * Modifier function, each modifier can have a function of this type assigned
     * to its `fn` property.<br />
     * These functions will be called on each update, this means that you must
     * make sure they are performant enough to avoid performance bottlenecks.
     *
     * @function ModifierFn
     * @argument {dataObject} data - The data object generated by `update` method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {dataObject} The data object, properly modified
     */

    /**
     * Modifiers are plugins used to alter the behavior of your poppers.<br />
     * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
     * needed by the library.
     *
     * Usually you don't want to override the `order`, `fn` and `onLoad` props.
     * All the other properties are configurations that could be tweaked.
     * @namespace modifiers
     */
    var modifiers = {
        /**
         * Modifier used to shift the popper on the start or end of its reference
         * element.<br />
         * It will read the variation of the `placement` property.<br />
         * It can be one either `-end` or `-start`.
         * @memberof modifiers
         * @inner
         */
        shift: {
            /** @prop {number} order=100 - Index used to define the order of execution */
            order: 100,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: shift
        },

        /**
         * The `offset` modifier can shift your popper on both its axis.
         *
         * It accepts the following units:
         * - `px` or unitless, interpreted as pixels
         * - `%` or `%r`, percentage relative to the length of the reference element
         * - `%p`, percentage relative to the length of the popper element
         * - `vw`, CSS viewport width unit
         * - `vh`, CSS viewport height unit
         *
         * For length is intended the main axis relative to the placement of the popper.<br />
         * This means that if the placement is `top` or `bottom`, the length will be the
         * `width`. In case of `left` or `right`, it will be the height.
         *
         * You can provide a single value (as `Number` or `String`), or a pair of values
         * as `String` divided by a comma or one (or more) white spaces.<br />
         * The latter is a deprecated method because it leads to confusion and will be
         * removed in v2.<br />
         * Additionally, it accepts additions and subtractions between different units.
         * Note that multiplications and divisions aren't supported.
         *
         * Valid examples are:
         * ```
         * 10
         * '10%'
         * '10, 10'
         * '10%, 10'
         * '10 + 10%'
         * '10 - 5vh + 3%'
         * '-10px + 5vh, 5px - 6%'
         * ```
         * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
         * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
         * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
         *
         * @memberof modifiers
         * @inner
         */
        offset: {
            /** @prop {number} order=200 - Index used to define the order of execution */
            order: 200,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: offset,
            /** @prop {Number|String} offset=0
             * The offset value as described in the modifier description
             */
            offset: 0
        },

        /**
         * Modifier used to prevent the popper from being positioned outside the boundary.
         *
         * An scenario exists where the reference itself is not within the boundaries.<br />
         * We can say it has "escaped the boundaries" — or just "escaped".<br />
         * In this case we need to decide whether the popper should either:
         *
         * - detach from the reference and remain "trapped" in the boundaries, or
         * - if it should ignore the boundary and "escape with its reference"
         *
         * When `escapeWithReference` is set to`true` and reference is completely
         * outside its boundaries, the popper will overflow (or completely leave)
         * the boundaries in order to remain attached to the edge of the reference.
         *
         * @memberof modifiers
         * @inner
         */
        preventOverflow: {
            /** @prop {number} order=300 - Index used to define the order of execution */
            order: 300,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: preventOverflow,
            /**
             * @prop {Array} [priority=['left','right','top','bottom']]
             * Popper will try to prevent overflow following these priorities by default,
             * then, it could overflow on the left and on top of the `boundariesElement`
             */
            priority: ['left', 'right', 'top', 'bottom'],
            /**
             * @prop {number} padding=5
             * Amount of pixel used to define a minimum distance between the boundaries
             * and the popper this makes sure the popper has always a little padding
             * between the edges of its container
             */
            padding: 5,
            /**
             * @prop {String|HTMLElement} boundariesElement='scrollParent'
             * Boundaries used by the modifier, can be `scrollParent`, `window`,
             * `viewport` or any DOM element.
             */
            boundariesElement: 'scrollParent'
        },

        /**
         * Modifier used to make sure the reference and its popper stay near eachothers
         * without leaving any gap between the two. Expecially useful when the arrow is
         * enabled and you want to assure it to point to its reference element.
         * It cares only about the first axis, you can still have poppers with margin
         * between the popper and its reference element.
         * @memberof modifiers
         * @inner
         */
        keepTogether: {
            /** @prop {number} order=400 - Index used to define the order of execution */
            order: 400,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: keepTogether
        },

        /**
         * This modifier is used to move the `arrowElement` of the popper to make
         * sure it is positioned between the reference element and its popper element.
         * It will read the outer size of the `arrowElement` node to detect how many
         * pixels of conjuction are needed.
         *
         * It has no effect if no `arrowElement` is provided.
         * @memberof modifiers
         * @inner
         */
        arrow: {
            /** @prop {number} order=500 - Index used to define the order of execution */
            order: 500,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: arrow,
            /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
            element: '[x-arrow]'
        },

        /**
         * Modifier used to flip the popper's placement when it starts to overlap its
         * reference element.
         *
         * Requires the `preventOverflow` modifier before it in order to work.
         *
         * **NOTE:** this modifier will interrupt the current update cycle and will
         * restart it if it detects the need to flip the placement.
         * @memberof modifiers
         * @inner
         */
        flip: {
            /** @prop {number} order=600 - Index used to define the order of execution */
            order: 600,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: flip,
            /**
             * @prop {String|Array} behavior='flip'
             * The behavior used to change the popper's placement. It can be one of
             * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
             * placements (with optional variations).
             */
            behavior: 'flip',
            /**
             * @prop {number} padding=5
             * The popper will flip if it hits the edges of the `boundariesElement`
             */
            padding: 5,
            /**
             * @prop {String|HTMLElement} boundariesElement='viewport'
             * The element which will define the boundaries of the popper position,
             * the popper will never be placed outside of the defined boundaries
             * (except if keepTogether is enabled)
             */
            boundariesElement: 'viewport'
        },

        /**
         * Modifier used to make the popper flow toward the inner of the reference element.
         * By default, when this modifier is disabled, the popper will be placed outside
         * the reference element.
         * @memberof modifiers
         * @inner
         */
        inner: {
            /** @prop {number} order=700 - Index used to define the order of execution */
            order: 700,
            /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
            enabled: false,
            /** @prop {ModifierFn} */
            fn: inner
        },

        /**
         * Modifier used to hide the popper when its reference element is outside of the
         * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
         * be used to hide with a CSS selector the popper when its reference is
         * out of boundaries.
         *
         * Requires the `preventOverflow` modifier before it in order to work.
         * @memberof modifiers
         * @inner
         */
        hide: {
            /** @prop {number} order=800 - Index used to define the order of execution */
            order: 800,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: hide
        },

        /**
         * Computes the style that will be applied to the popper element to gets
         * properly positioned.
         *
         * Note that this modifier will not touch the DOM, it just prepares the styles
         * so that `applyStyle` modifier can apply it. This separation is useful
         * in case you need to replace `applyStyle` with a custom implementation.
         *
         * This modifier has `850` as `order` value to maintain backward compatibility
         * with previous versions of Popper.js. Expect the modifiers ordering method
         * to change in future major versions of the library.
         *
         * @memberof modifiers
         * @inner
         */
        computeStyle: {
            /** @prop {number} order=850 - Index used to define the order of execution */
            order: 850,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: computeStyle,
            /**
             * @prop {Boolean} gpuAcceleration=true
             * If true, it uses the CSS 3d transformation to position the popper.
             * Otherwise, it will use the `top` and `left` properties.
             */
            gpuAcceleration: true,
            /**
             * @prop {string} [x='bottom']
             * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
             * Change this if your popper should grow in a direction different from `bottom`
             */
            x: 'bottom',
            /**
             * @prop {string} [x='left']
             * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
             * Change this if your popper should grow in a direction different from `right`
             */
            y: 'right'
        },

        /**
         * Applies the computed styles to the popper element.
         *
         * All the DOM manipulations are limited to this modifier. This is useful in case
         * you want to integrate Popper.js inside a framework or view library and you
         * want to delegate all the DOM manipulations to it.
         *
         * Note that if you disable this modifier, you must make sure the popper element
         * has its position set to `absolute` before Popper.js can do its work!
         *
         * Just disable this modifier and define you own to achieve the desired effect.
         *
         * @memberof modifiers
         * @inner
         */
        applyStyle: {
            /** @prop {number} order=900 - Index used to define the order of execution */
            order: 900,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: applyStyle,
            /** @prop {Function} */
            onLoad: applyStyleOnLoad,
            /**
             * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
             * @prop {Boolean} gpuAcceleration=true
             * If true, it uses the CSS 3d transformation to position the popper.
             * Otherwise, it will use the `top` and `left` properties.
             */
            gpuAcceleration: undefined
        }
    };

    /**
     * The `dataObject` is an object containing all the informations used by Popper.js
     * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
     * @name dataObject
     * @property {Object} data.instance The Popper.js instance
     * @property {String} data.placement Placement applied to popper
     * @property {String} data.originalPlacement Placement originally defined on init
     * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
     * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
     * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
     * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
     * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
     * @property {Object} data.boundaries Offsets of the popper boundaries
     * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
     * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
     * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
     * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
     */

    /**
     * Default options provided to Popper.js constructor.<br />
     * These can be overriden using the `options` argument of Popper.js.<br />
     * To override an option, simply pass as 3rd argument an object with the same
     * structure of this object, example:
     * ```
     * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
     * ```
     * @type {Object}
     * @static
     * @memberof Popper
     */
    var Defaults = {
        /**
         * Popper's placement
         * @prop {Popper.placements} placement='bottom'
         */
        placement: 'bottom',

        /**
         * Whether events (resize, scroll) are initially enabled
         * @prop {Boolean} eventsEnabled=true
         */
        eventsEnabled: true,

        /**
         * Set to true if you want to automatically remove the popper when
         * you call the `destroy` method.
         * @prop {Boolean} removeOnDestroy=false
         */
        removeOnDestroy: false,

        /**
         * Callback called when the popper is created.<br />
         * By default, is set to no-op.<br />
         * Access Popper.js instance with `data.instance`.
         * @prop {onCreate}
         */
        onCreate: function onCreate() {},

        /**
         * Callback called when the popper is updated, this callback is not called
         * on the initialization/creation of the popper, but only on subsequent
         * updates.<br />
         * By default, is set to no-op.<br />
         * Access Popper.js instance with `data.instance`.
         * @prop {onUpdate}
         */
        onUpdate: function onUpdate() {},

        /**
         * List of modifiers used to modify the offsets before they are applied to the popper.
         * They provide most of the functionalities of Popper.js
         * @prop {modifiers}
         */
        modifiers: modifiers
    };

    /**
     * @callback onCreate
     * @param {dataObject} data
     */

    /**
     * @callback onUpdate
     * @param {dataObject} data
     */

// Utils
// Methods
    var Popper = function () {
        /**
         * Create a new Popper.js instance
         * @class Popper
         * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
         * @param {HTMLElement} popper - The HTML element used as popper.
         * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
         * @return {Object} instance - The generated Popper.js instance
         */
        function Popper(reference, popper) {
            var _this = this;

            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            classCallCheck(this, Popper);

            this.scheduleUpdate = function () {
                return requestAnimationFrame(_this.update);
            };

            // make update() debounced, so that it only runs at most once-per-tick
            this.update = debounce(this.update.bind(this));

            // with {} we create a new object with the options inside it
            this.options = _extends({}, Popper.Defaults, options);

            // init state
            this.state = {
                isDestroyed: false,
                isCreated: false,
                scrollParents: []
            };

            // get reference and popper elements (allow jQuery wrappers)
            this.reference = reference && reference.jquery ? reference[0] : reference;
            this.popper = popper && popper.jquery ? popper[0] : popper;

            // Deep merge modifiers options
            this.options.modifiers = {};
            Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
                _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
            });

            // Refactoring modifiers' list (Object => Array)
            this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
                return _extends({
                    name: name
                }, _this.options.modifiers[name]);
            })
            // sort the modifiers by order
                .sort(function (a, b) {
                    return a.order - b.order;
                });

            // modifiers have the ability to execute arbitrary code when Popper.js get inited
            // such code is executed in the same order of its modifier
            // they could add new properties to their options configuration
            // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
            this.modifiers.forEach(function (modifierOptions) {
                if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
                    modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
                }
            });

            // fire the first update to position the popper in the right place
            this.update();

            var eventsEnabled = this.options.eventsEnabled;
            if (eventsEnabled) {
                // setup event listeners, they will take care of update the position in specific situations
                this.enableEventListeners();
            }

            this.state.eventsEnabled = eventsEnabled;
        }

        // We can't use class properties because they don't get listed in the
        // class prototype and break stuff like Sinon stubs


        createClass(Popper, [{
            key: 'update',
            value: function update$$1() {
                return update.call(this);
            }
        }, {
            key: 'destroy',
            value: function destroy$$1() {
                return destroy.call(this);
            }
        }, {
            key: 'enableEventListeners',
            value: function enableEventListeners$$1() {
                return enableEventListeners.call(this);
            }
        }, {
            key: 'disableEventListeners',
            value: function disableEventListeners$$1() {
                return disableEventListeners.call(this);
            }

            /**
             * Schedule an update, it will run on the next UI update available
             * @method scheduleUpdate
             * @memberof Popper
             */


            /**
             * Collection of utilities useful when writing custom modifiers.
             * Starting from version 1.7, this method is available only if you
             * include `popper-utils.js` before `popper.js`.
             *
             * **DEPRECATION**: This way to access PopperUtils is deprecated
             * and will be removed in v2! Use the PopperUtils module directly instead.
             * Due to the high instability of the methods contained in Utils, we can't
             * guarantee them to follow semver. Use them at your own risk!
             * @static
             * @private
             * @type {Object}
             * @deprecated since version 1.8
             * @member Utils
             * @memberof Popper
             */

        }]);
        return Popper;
    }();

    /**
     * The `referenceObject` is an object that provides an interface compatible with Popper.js
     * and lets you use it as replacement of a real DOM node.<br />
     * You can use this method to position a popper relatively to a set of coordinates
     * in case you don't have a DOM node to use as reference.
     *
     * ```
     * new Popper(referenceObject, popperNode);
     * ```
     *
     * NB: This feature isn't supported in Internet Explorer 10
     * @name referenceObject
     * @property {Function} data.getBoundingClientRect
     * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
     * @property {number} data.clientWidth
     * An ES6 getter that will return the width of the virtual reference element.
     * @property {number} data.clientHeight
     * An ES6 getter that will return the height of the virtual reference element.
     */


    Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
    Popper.placements = placements;
    Popper.Defaults = Defaults;

    return Popper;

})));
//# sourceMappingURL=popper.js.map

/*!
  * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)
  * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
var bootstrap = (function (exports,$,Popper) {
    'use strict';

    $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
    Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta.2): util.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Util = function ($$$1) {
        /**
         * ------------------------------------------------------------------------
         * Private TransitionEnd Helpers
         * ------------------------------------------------------------------------
         */
        var transition = false;
        var MAX_UID = 1000000;
        var TransitionEndEvent = {
            WebkitTransition: 'webkitTransitionEnd',
            transition: 'transitionend' // shoutout AngusCroll (https://goo.gl/pxwQGp)

        };

        function toType(obj) {
            return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
        }

        function getSpecialTransitionEndEvent() {
            return {
                bindType: transition.end,
                delegateType: transition.end,
                handle: function handle(event) {
                    if ($$$1(event.target).is(this)) {
                        return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
                    }

                    return undefined; // eslint-disable-line no-undefined
                }
            };
        }

        function transitionEndTest() {
            if (window.QUnit) {
                return false;
            }

            var el = document.createElement('bootstrap');

            for (var name in TransitionEndEvent) {
                if (typeof el.style[name] !== 'undefined') {
                    return {
                        end: TransitionEndEvent[name]
                    };
                }
            }

            return false;
        }

        function transitionEndEmulator(duration) {
            var _this = this;

            var called = false;
            $$$1(this).one(Util.TRANSITION_END, function () {
                called = true;
            });
            setTimeout(function () {
                if (!called) {
                    Util.triggerTransitionEnd(_this);
                }
            }, duration);
            return this;
        }

        function setTransitionEndSupport() {
            transition = transitionEndTest();
            $$$1.fn.emulateTransitionEnd = transitionEndEmulator;

            if (Util.supportsTransitionEnd()) {
                $$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
            }
        }

        function escapeId(selector) {
            // we escape IDs in case of special selectors (selector = '#myId:something')
            // $.escapeSelector does not exist in jQuery < 3
            selector = typeof $$$1.escapeSelector === 'function' ? $$$1.escapeSelector(selector).substr(1) : selector.replace(/(:|\.|\[|\]|,|=|@)/g, '\\$1');
            return selector;
        }
        /**
         * --------------------------------------------------------------------------
         * Public Util Api
         * --------------------------------------------------------------------------
         */


        var Util = {
            TRANSITION_END: 'bsTransitionEnd',
            getUID: function getUID(prefix) {
                do {
                    // eslint-disable-next-line no-bitwise
                    prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
                } while (document.getElementById(prefix));

                return prefix;
            },
            getSelectorFromElement: function getSelectorFromElement(element) {
                var selector = element.getAttribute('data-target');

                if (!selector || selector === '#') {
                    selector = element.getAttribute('href') || '';
                } // if it's an ID


                if (selector.charAt(0) === '#') {
                    selector = escapeId(selector);
                }

                try {
                    var $selector = $$$1(document).find(selector);
                    return $selector.length > 0 ? selector : null;
                } catch (error) {
                    return null;
                }
            },
            reflow: function reflow(element) {
                return element.offsetHeight;
            },
            triggerTransitionEnd: function triggerTransitionEnd(element) {
                $$$1(element).trigger(transition.end);
            },
            supportsTransitionEnd: function supportsTransitionEnd() {
                return Boolean(transition);
            },
            isElement: function isElement(obj) {
                return (obj[0] || obj).nodeType;
            },
            typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
                for (var property in configTypes) {
                    if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
                        var expectedTypes = configTypes[property];
                        var value = config[property];
                        var valueType = value && Util.isElement(value) ? 'element' : toType(value);

                        if (!new RegExp(expectedTypes).test(valueType)) {
                            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
                        }
                    }
                }
            }
        };
        setTransitionEndSupport();
        return Util;
    }($);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta.2): alert.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Alert = function ($$$1) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'alert';
        var VERSION = '4.0.0-beta.2';
        var DATA_KEY = 'bs.alert';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var TRANSITION_DURATION = 150;
        var Selector = {
            DISMISS: '[data-dismiss="alert"]'
        };
        var Event = {
            CLOSE: "close" + EVENT_KEY,
            CLOSED: "closed" + EVENT_KEY,
            CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            ALERT: 'alert',
            FADE: 'fade',
            SHOW: 'show'
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };

        var Alert =
            /*#__PURE__*/
            function () {
                function Alert(element) {
                    this._element = element;
                } // getters


                var _proto = Alert.prototype;

                // public
                _proto.close = function close(element) {
                    element = element || this._element;

                    var rootElement = this._getRootElement(element);

                    var customEvent = this._triggerCloseEvent(rootElement);

                    if (customEvent.isDefaultPrevented()) {
                        return;
                    }

                    this._removeElement(rootElement);
                };

                _proto.dispose = function dispose() {
                    $$$1.removeData(this._element, DATA_KEY);
                    this._element = null;
                }; // private


                _proto._getRootElement = function _getRootElement(element) {
                    var selector = Util.getSelectorFromElement(element);
                    var parent = false;

                    if (selector) {
                        parent = $$$1(selector)[0];
                    }

                    if (!parent) {
                        parent = $$$1(element).closest("." + ClassName.ALERT)[0];
                    }

                    return parent;
                };

                _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
                    var closeEvent = $$$1.Event(Event.CLOSE);
                    $$$1(element).trigger(closeEvent);
                    return closeEvent;
                };

                _proto._removeElement = function _removeElement(element) {
                    var _this = this;

                    $$$1(element).removeClass(ClassName.SHOW);

                    if (!Util.supportsTransitionEnd() || !$$$1(element).hasClass(ClassName.FADE)) {
                        this._destroyElement(element);

                        return;
                    }

                    $$$1(element).one(Util.TRANSITION_END, function (event) {
                        return _this._destroyElement(element, event);
                    }).emulateTransitionEnd(TRANSITION_DURATION);
                };

                _proto._destroyElement = function _destroyElement(element) {
                    $$$1(element).detach().trigger(Event.CLOSED).remove();
                }; // static


                Alert._jQueryInterface = function _jQueryInterface(config) {
                    return this.each(function () {
                        var $element = $$$1(this);
                        var data = $element.data(DATA_KEY);

                        if (!data) {
                            data = new Alert(this);
                            $element.data(DATA_KEY, data);
                        }

                        if (config === 'close') {
                            data[config](this);
                        }
                    });
                };

                Alert._handleDismiss = function _handleDismiss(alertInstance) {
                    return function (event) {
                        if (event) {
                            event.preventDefault();
                        }

                        alertInstance.close(this);
                    };
                };

                _createClass(Alert, null, [{
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                }]);
                return Alert;
            }();
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        $$$1(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $$$1.fn[NAME] = Alert._jQueryInterface;
        $$$1.fn[NAME].Constructor = Alert;

        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Alert._jQueryInterface;
        };

        return Alert;
    }($);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta.2): button.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Button = function ($$$1) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'button';
        var VERSION = '4.0.0-beta.2';
        var DATA_KEY = 'bs.button';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var ClassName = {
            ACTIVE: 'active',
            BUTTON: 'btn',
            FOCUS: 'focus'
        };
        var Selector = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: 'input',
            ACTIVE: '.active',
            BUTTON: '.btn'
        };
        var Event = {
            CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
            FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY)
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };

        var Button =
            /*#__PURE__*/
            function () {
                function Button(element) {
                    this._element = element;
                } // getters


                var _proto = Button.prototype;

                // public
                _proto.toggle = function toggle() {
                    var triggerChangeEvent = true;
                    var addAriaPressed = true;
                    var rootElement = $$$1(this._element).closest(Selector.DATA_TOGGLE)[0];

                    if (rootElement) {
                        var input = $$$1(this._element).find(Selector.INPUT)[0];

                        if (input) {
                            if (input.type === 'radio') {
                                if (input.checked && $$$1(this._element).hasClass(ClassName.ACTIVE)) {
                                    triggerChangeEvent = false;
                                } else {
                                    var activeElement = $$$1(rootElement).find(Selector.ACTIVE)[0];

                                    if (activeElement) {
                                        $$$1(activeElement).removeClass(ClassName.ACTIVE);
                                    }
                                }
                            }

                            if (triggerChangeEvent) {
                                if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
                                    return;
                                }

                                input.checked = !$$$1(this._element).hasClass(ClassName.ACTIVE);
                                $$$1(input).trigger('change');
                            }

                            input.focus();
                            addAriaPressed = false;
                        }
                    }

                    if (addAriaPressed) {
                        this._element.setAttribute('aria-pressed', !$$$1(this._element).hasClass(ClassName.ACTIVE));
                    }

                    if (triggerChangeEvent) {
                        $$$1(this._element).toggleClass(ClassName.ACTIVE);
                    }
                };

                _proto.dispose = function dispose() {
                    $$$1.removeData(this._element, DATA_KEY);
                    this._element = null;
                }; // static


                Button._jQueryInterface = function _jQueryInterface(config) {
                    return this.each(function () {
                        var data = $$$1(this).data(DATA_KEY);

                        if (!data) {
                            data = new Button(this);
                            $$$1(this).data(DATA_KEY, data);
                        }

                        if (config === 'toggle') {
                            data[config]();
                        }
                    });
                };

                _createClass(Button, null, [{
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                }]);
                return Button;
            }();
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
            event.preventDefault();
            var button = event.target;

            if (!$$$1(button).hasClass(ClassName.BUTTON)) {
                button = $$$1(button).closest(Selector.BUTTON);
            }

            Button._jQueryInterface.call($$$1(button), 'toggle');
        }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
            var button = $$$1(event.target).closest(Selector.BUTTON)[0];
            $$$1(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $$$1.fn[NAME] = Button._jQueryInterface;
        $$$1.fn[NAME].Constructor = Button;

        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Button._jQueryInterface;
        };

        return Button;
    }($);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta.2): carousel.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Carousel = function ($$$1) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'carousel';
        var VERSION = '4.0.0-beta.2';
        var DATA_KEY = 'bs.carousel';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var TRANSITION_DURATION = 600;
        var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

        var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

        var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

        var Default = {
            interval: 5000,
            keyboard: true,
            slide: false,
            pause: 'hover',
            wrap: true
        };
        var DefaultType = {
            interval: '(number|boolean)',
            keyboard: 'boolean',
            slide: '(boolean|string)',
            pause: '(string|boolean)',
            wrap: 'boolean'
        };
        var Direction = {
            NEXT: 'next',
            PREV: 'prev',
            LEFT: 'left',
            RIGHT: 'right'
        };
        var Event = {
            SLIDE: "slide" + EVENT_KEY,
            SLID: "slid" + EVENT_KEY,
            KEYDOWN: "keydown" + EVENT_KEY,
            MOUSEENTER: "mouseenter" + EVENT_KEY,
            MOUSELEAVE: "mouseleave" + EVENT_KEY,
            TOUCHEND: "touchend" + EVENT_KEY,
            LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
            CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            CAROUSEL: 'carousel',
            ACTIVE: 'active',
            SLIDE: 'slide',
            RIGHT: 'carousel-item-right',
            LEFT: 'carousel-item-left',
            NEXT: 'carousel-item-next',
            PREV: 'carousel-item-prev',
            ITEM: 'carousel-item'
        };
        var Selector = {
            ACTIVE: '.active',
            ACTIVE_ITEM: '.active.carousel-item',
            ITEM: '.carousel-item',
            NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
            INDICATORS: '.carousel-indicators',
            DATA_SLIDE: '[data-slide], [data-slide-to]',
            DATA_RIDE: '[data-ride="carousel"]'
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };

        var Carousel =
            /*#__PURE__*/
            function () {
                function Carousel(element, config) {
                    this._items = null;
                    this._interval = null;
                    this._activeElement = null;
                    this._isPaused = false;
                    this._isSliding = false;
                    this.touchTimeout = null;
                    this._config = this._getConfig(config);
                    this._element = $$$1(element)[0];
                    this._indicatorsElement = $$$1(this._element).find(Selector.INDICATORS)[0];

                    this._addEventListeners();
                } // getters


                var _proto = Carousel.prototype;

                // public
                _proto.next = function next() {
                    if (!this._isSliding) {
                        this._slide(Direction.NEXT);
                    }
                };

                _proto.nextWhenVisible = function nextWhenVisible() {
                    // Don't call next when the page isn't visible
                    // or the carousel or its parent isn't visible
                    if (!document.hidden && $$$1(this._element).is(':visible') && $$$1(this._element).css('visibility') !== 'hidden') {
                        this.next();
                    }
                };

                _proto.prev = function prev() {
                    if (!this._isSliding) {
                        this._slide(Direction.PREV);
                    }
                };

                _proto.pause = function pause(event) {
                    if (!event) {
                        this._isPaused = true;
                    }

                    if ($$$1(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
                        Util.triggerTransitionEnd(this._element);
                        this.cycle(true);
                    }

                    clearInterval(this._interval);
                    this._interval = null;
                };

                _proto.cycle = function cycle(event) {
                    if (!event) {
                        this._isPaused = false;
                    }

                    if (this._interval) {
                        clearInterval(this._interval);
                        this._interval = null;
                    }

                    if (this._config.interval && !this._isPaused) {
                        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
                    }
                };

                _proto.to = function to(index) {
                    var _this = this;

                    this._activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];

                    var activeIndex = this._getItemIndex(this._activeElement);

                    if (index > this._items.length - 1 || index < 0) {
                        return;
                    }

                    if (this._isSliding) {
                        $$$1(this._element).one(Event.SLID, function () {
                            return _this.to(index);
                        });
                        return;
                    }

                    if (activeIndex === index) {
                        this.pause();
                        this.cycle();
                        return;
                    }

                    var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

                    this._slide(direction, this._items[index]);
                };

                _proto.dispose = function dispose() {
                    $$$1(this._element).off(EVENT_KEY);
                    $$$1.removeData(this._element, DATA_KEY);
                    this._items = null;
                    this._config = null;
                    this._element = null;
                    this._interval = null;
                    this._isPaused = null;
                    this._isSliding = null;
                    this._activeElement = null;
                    this._indicatorsElement = null;
                }; // private


                _proto._getConfig = function _getConfig(config) {
                    config = $$$1.extend({}, Default, config);
                    Util.typeCheckConfig(NAME, config, DefaultType);
                    return config;
                };

                _proto._addEventListeners = function _addEventListeners() {
                    var _this2 = this;

                    if (this._config.keyboard) {
                        $$$1(this._element).on(Event.KEYDOWN, function (event) {
                            return _this2._keydown(event);
                        });
                    }

                    if (this._config.pause === 'hover') {
                        $$$1(this._element).on(Event.MOUSEENTER, function (event) {
                            return _this2.pause(event);
                        }).on(Event.MOUSELEAVE, function (event) {
                            return _this2.cycle(event);
                        });

                        if ('ontouchstart' in document.documentElement) {
                            // if it's a touch-enabled device, mouseenter/leave are fired as
                            // part of the mouse compatibility events on first tap - the carousel
                            // would stop cycling until user tapped out of it;
                            // here, we listen for touchend, explicitly pause the carousel
                            // (as if it's the second time we tap on it, mouseenter compat event
                            // is NOT fired) and after a timeout (to allow for mouse compatibility
                            // events to fire) we explicitly restart cycling
                            $$$1(this._element).on(Event.TOUCHEND, function () {
                                _this2.pause();

                                if (_this2.touchTimeout) {
                                    clearTimeout(_this2.touchTimeout);
                                }

                                _this2.touchTimeout = setTimeout(function (event) {
                                    return _this2.cycle(event);
                                }, TOUCHEVENT_COMPAT_WAIT + _this2._config.interval);
                            });
                        }
                    }
                };

                _proto._keydown = function _keydown(event) {
                    if (/input|textarea/i.test(event.target.tagName)) {
                        return;
                    }

                    switch (event.which) {
                        case ARROW_LEFT_KEYCODE:
                            event.preventDefault();
                            this.prev();
                            break;

                        case ARROW_RIGHT_KEYCODE:
                            event.preventDefault();
                            this.next();
                            break;

                        default:
                            return;
                    }
                };

                _proto._getItemIndex = function _getItemIndex(element) {
                    this._items = $$$1.makeArray($$$1(element).parent().find(Selector.ITEM));
                    return this._items.indexOf(element);
                };

                _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
                    var isNextDirection = direction === Direction.NEXT;
                    var isPrevDirection = direction === Direction.PREV;

                    var activeIndex = this._getItemIndex(activeElement);

                    var lastItemIndex = this._items.length - 1;
                    var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

                    if (isGoingToWrap && !this._config.wrap) {
                        return activeElement;
                    }

                    var delta = direction === Direction.PREV ? -1 : 1;
                    var itemIndex = (activeIndex + delta) % this._items.length;
                    return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
                };

                _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
                    var targetIndex = this._getItemIndex(relatedTarget);

                    var fromIndex = this._getItemIndex($$$1(this._element).find(Selector.ACTIVE_ITEM)[0]);

                    var slideEvent = $$$1.Event(Event.SLIDE, {
                        relatedTarget: relatedTarget,
                        direction: eventDirectionName,
                        from: fromIndex,
                        to: targetIndex
                    });
                    $$$1(this._element).trigger(slideEvent);
                    return slideEvent;
                };

                _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
                    if (this._indicatorsElement) {
                        $$$1(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

                        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

                        if (nextIndicator) {
                            $$$1(nextIndicator).addClass(ClassName.ACTIVE);
                        }
                    }
                };

                _proto._slide = function _slide(direction, element) {
                    var _this3 = this;

                    var activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];

                    var activeElementIndex = this._getItemIndex(activeElement);

                    var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

                    var nextElementIndex = this._getItemIndex(nextElement);

                    var isCycling = Boolean(this._interval);
                    var directionalClassName;
                    var orderClassName;
                    var eventDirectionName;

                    if (direction === Direction.NEXT) {
                        directionalClassName = ClassName.LEFT;
                        orderClassName = ClassName.NEXT;
                        eventDirectionName = Direction.LEFT;
                    } else {
                        directionalClassName = ClassName.RIGHT;
                        orderClassName = ClassName.PREV;
                        eventDirectionName = Direction.RIGHT;
                    }

                    if (nextElement && $$$1(nextElement).hasClass(ClassName.ACTIVE)) {
                        this._isSliding = false;
                        return;
                    }

                    var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

                    if (slideEvent.isDefaultPrevented()) {
                        return;
                    }

                    if (!activeElement || !nextElement) {
                        // some weirdness is happening, so we bail
                        return;
                    }

                    this._isSliding = true;

                    if (isCycling) {
                        this.pause();
                    }

                    this._setActiveIndicatorElement(nextElement);

                    var slidEvent = $$$1.Event(Event.SLID, {
                        relatedTarget: nextElement,
                        direction: eventDirectionName,
                        from: activeElementIndex,
                        to: nextElementIndex
                    });

                    if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.SLIDE)) {
                        $$$1(nextElement).addClass(orderClassName);
                        Util.reflow(nextElement);
                        $$$1(activeElement).addClass(directionalClassName);
                        $$$1(nextElement).addClass(directionalClassName);
                        $$$1(activeElement).one(Util.TRANSITION_END, function () {
                            $$$1(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);
                            $$$1(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);
                            _this3._isSliding = false;
                            setTimeout(function () {
                                return $$$1(_this3._element).trigger(slidEvent);
                            }, 0);
                        }).emulateTransitionEnd(TRANSITION_DURATION);
                    } else {
                        $$$1(activeElement).removeClass(ClassName.ACTIVE);
                        $$$1(nextElement).addClass(ClassName.ACTIVE);
                        this._isSliding = false;
                        $$$1(this._element).trigger(slidEvent);
                    }

                    if (isCycling) {
                        this.cycle();
                    }
                }; // static


                Carousel._jQueryInterface = function _jQueryInterface(config) {
                    return this.each(function () {
                        var data = $$$1(this).data(DATA_KEY);

                        var _config = $$$1.extend({}, Default, $$$1(this).data());

                        if (typeof config === 'object') {
                            $$$1.extend(_config, config);
                        }

                        var action = typeof config === 'string' ? config : _config.slide;

                        if (!data) {
                            data = new Carousel(this, _config);
                            $$$1(this).data(DATA_KEY, data);
                        }

                        if (typeof config === 'number') {
                            data.to(config);
                        } else if (typeof action === 'string') {
                            if (typeof data[action] === 'undefined') {
                                throw new Error("No method named \"" + action + "\"");
                            }

                            data[action]();
                        } else if (_config.interval) {
                            data.pause();
                            data.cycle();
                        }
                    });
                };

                Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
                    var selector = Util.getSelectorFromElement(this);

                    if (!selector) {
                        return;
                    }

                    var target = $$$1(selector)[0];

                    if (!target || !$$$1(target).hasClass(ClassName.CAROUSEL)) {
                        return;
                    }

                    var config = $$$1.extend({}, $$$1(target).data(), $$$1(this).data());
                    var slideIndex = this.getAttribute('data-slide-to');

                    if (slideIndex) {
                        config.interval = false;
                    }

                    Carousel._jQueryInterface.call($$$1(target), config);

                    if (slideIndex) {
                        $$$1(target).data(DATA_KEY).to(slideIndex);
                    }

                    event.preventDefault();
                };

                _createClass(Carousel, null, [{
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                }, {
                    key: "Default",
                    get: function get() {
                        return Default;
                    }
                }]);
                return Carousel;
            }();
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
        $$$1(window).on(Event.LOAD_DATA_API, function () {
            $$$1(Selector.DATA_RIDE).each(function () {
                var $carousel = $$$1(this);

                Carousel._jQueryInterface.call($carousel, $carousel.data());
            });
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $$$1.fn[NAME] = Carousel._jQueryInterface;
        $$$1.fn[NAME].Constructor = Carousel;

        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Carousel._jQueryInterface;
        };

        return Carousel;
    }($);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta.2): collapse.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Collapse = function ($$$1) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'collapse';
        var VERSION = '4.0.0-beta.2';
        var DATA_KEY = 'bs.collapse';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var TRANSITION_DURATION = 600;
        var Default = {
            toggle: true,
            parent: ''
        };
        var DefaultType = {
            toggle: 'boolean',
            parent: '(string|element)'
        };
        var Event = {
            SHOW: "show" + EVENT_KEY,
            SHOWN: "shown" + EVENT_KEY,
            HIDE: "hide" + EVENT_KEY,
            HIDDEN: "hidden" + EVENT_KEY,
            CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            SHOW: 'show',
            COLLAPSE: 'collapse',
            COLLAPSING: 'collapsing',
            COLLAPSED: 'collapsed'
        };
        var Dimension = {
            WIDTH: 'width',
            HEIGHT: 'height'
        };
        var Selector = {
            ACTIVES: '.show, .collapsing',
            DATA_TOGGLE: '[data-toggle="collapse"]'
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };

        var Collapse =
            /*#__PURE__*/
            function () {
                function Collapse(element, config) {
                    this._isTransitioning = false;
                    this._element = element;
                    this._config = this._getConfig(config);
                    this._triggerArray = $$$1.makeArray($$$1("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
                    var tabToggles = $$$1(Selector.DATA_TOGGLE);

                    for (var i = 0; i < tabToggles.length; i++) {
                        var elem = tabToggles[i];
                        var selector = Util.getSelectorFromElement(elem);

                        if (selector !== null && $$$1(selector).filter(element).length > 0) {
                            this._triggerArray.push(elem);
                        }
                    }

                    this._parent = this._config.parent ? this._getParent() : null;

                    if (!this._config.parent) {
                        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
                    }

                    if (this._config.toggle) {
                        this.toggle();
                    }
                } // getters


                var _proto = Collapse.prototype;

                // public
                _proto.toggle = function toggle() {
                    if ($$$1(this._element).hasClass(ClassName.SHOW)) {
                        this.hide();
                    } else {
                        this.show();
                    }
                };

                _proto.show = function show() {
                    var _this = this;

                    if (this._isTransitioning || $$$1(this._element).hasClass(ClassName.SHOW)) {
                        return;
                    }

                    var actives;
                    var activesData;

                    if (this._parent) {
                        actives = $$$1.makeArray($$$1(this._parent).children().children(Selector.ACTIVES));

                        if (!actives.length) {
                            actives = null;
                        }
                    }

                    if (actives) {
                        activesData = $$$1(actives).data(DATA_KEY);

                        if (activesData && activesData._isTransitioning) {
                            return;
                        }
                    }

                    var startEvent = $$$1.Event(Event.SHOW);
                    $$$1(this._element).trigger(startEvent);

                    if (startEvent.isDefaultPrevented()) {
                        return;
                    }

                    if (actives) {
                        Collapse._jQueryInterface.call($$$1(actives), 'hide');

                        if (!activesData) {
                            $$$1(actives).data(DATA_KEY, null);
                        }
                    }

                    var dimension = this._getDimension();

                    $$$1(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
                    this._element.style[dimension] = 0;

                    if (this._triggerArray.length) {
                        $$$1(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
                    }

                    this.setTransitioning(true);

                    var complete = function complete() {
                        $$$1(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
                        _this._element.style[dimension] = '';

                        _this.setTransitioning(false);

                        $$$1(_this._element).trigger(Event.SHOWN);
                    };

                    if (!Util.supportsTransitionEnd()) {
                        complete();
                        return;
                    }

                    var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
                    var scrollSize = "scroll" + capitalizedDimension;
                    $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
                    this._element.style[dimension] = this._element[scrollSize] + "px";
                };

                _proto.hide = function hide() {
                    var _this2 = this;

                    if (this._isTransitioning || !$$$1(this._element).hasClass(ClassName.SHOW)) {
                        return;
                    }

                    var startEvent = $$$1.Event(Event.HIDE);
                    $$$1(this._element).trigger(startEvent);

                    if (startEvent.isDefaultPrevented()) {
                        return;
                    }

                    var dimension = this._getDimension();

                    this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
                    Util.reflow(this._element);
                    $$$1(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

                    if (this._triggerArray.length) {
                        for (var i = 0; i < this._triggerArray.length; i++) {
                            var trigger = this._triggerArray[i];
                            var selector = Util.getSelectorFromElement(trigger);

                            if (selector !== null) {
                                var $elem = $$$1(selector);

                                if (!$elem.hasClass(ClassName.SHOW)) {
                                    $$$1(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
                                }
                            }
                        }
                    }

                    this.setTransitioning(true);

                    var complete = function complete() {
                        _this2.setTransitioning(false);

                        $$$1(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
                    };

                    this._element.style[dimension] = '';

                    if (!Util.supportsTransitionEnd()) {
                        complete();
                        return;
                    }

                    $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
                };

                _proto.setTransitioning = function setTransitioning(isTransitioning) {
                    this._isTransitioning = isTransitioning;
                };

                _proto.dispose = function dispose() {
                    $$$1.removeData(this._element, DATA_KEY);
                    this._config = null;
                    this._parent = null;
                    this._element = null;
                    this._triggerArray = null;
                    this._isTransitioning = null;
                }; // private


                _proto._getConfig = function _getConfig(config) {
                    config = $$$1.extend({}, Default, config);
                    config.toggle = Boolean(config.toggle); // coerce string values

                    Util.typeCheckConfig(NAME, config, DefaultType);
                    return config;
                };

                _proto._getDimension = function _getDimension() {
                    var hasWidth = $$$1(this._element).hasClass(Dimension.WIDTH);
                    return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
                };

                _proto._getParent = function _getParent() {
                    var _this3 = this;

                    var parent = null;

                    if (Util.isElement(this._config.parent)) {
                        parent = this._config.parent; // it's a jQuery object

                        if (typeof this._config.parent.jquery !== 'undefined') {
                            parent = this._config.parent[0];
                        }
                    } else {
                        parent = $$$1(this._config.parent)[0];
                    }

                    var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
                    $$$1(parent).find(selector).each(function (i, element) {
                        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
                    });
                    return parent;
                };

                _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
                    if (element) {
                        var isOpen = $$$1(element).hasClass(ClassName.SHOW);

                        if (triggerArray.length) {
                            $$$1(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
                        }
                    }
                }; // static


                Collapse._getTargetFromElement = function _getTargetFromElement(element) {
                    var selector = Util.getSelectorFromElement(element);
                    return selector ? $$$1(selector)[0] : null;
                };

                Collapse._jQueryInterface = function _jQueryInterface(config) {
                    return this.each(function () {
                        var $this = $$$1(this);
                        var data = $this.data(DATA_KEY);

                        var _config = $$$1.extend({}, Default, $this.data(), typeof config === 'object' && config);

                        if (!data && _config.toggle && /show|hide/.test(config)) {
                            _config.toggle = false;
                        }

                        if (!data) {
                            data = new Collapse(this, _config);
                            $this.data(DATA_KEY, data);
                        }

                        if (typeof config === 'string') {
                            if (typeof data[config] === 'undefined') {
                                throw new Error("No method named \"" + config + "\"");
                            }

                            data[config]();
                        }
                    });
                };

                _createClass(Collapse, null, [{
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                }, {
                    key: "Default",
                    get: function get() {
                        return Default;
                    }
                }]);
                return Collapse;
            }();
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
            // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
            if (event.currentTarget.tagName === 'A') {
                event.preventDefault();
            }

            var $trigger = $$$1(this);
            var selector = Util.getSelectorFromElement(this);
            $$$1(selector).each(function () {
                var $target = $$$1(this);
                var data = $target.data(DATA_KEY);
                var config = data ? 'toggle' : $trigger.data();

                Collapse._jQueryInterface.call($target, config);
            });
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $$$1.fn[NAME] = Collapse._jQueryInterface;
        $$$1.fn[NAME].Constructor = Collapse;

        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Collapse._jQueryInterface;
        };

        return Collapse;
    }($);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta.2): dropdown.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Dropdown = function ($$$1) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'dropdown';
        var VERSION = '4.0.0-beta.2';
        var DATA_KEY = 'bs.dropdown';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

        var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

        var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

        var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

        var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

        var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

        var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
        var Event = {
            HIDE: "hide" + EVENT_KEY,
            HIDDEN: "hidden" + EVENT_KEY,
            SHOW: "show" + EVENT_KEY,
            SHOWN: "shown" + EVENT_KEY,
            CLICK: "click" + EVENT_KEY,
            CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
            KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
            KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            DISABLED: 'disabled',
            SHOW: 'show',
            DROPUP: 'dropup',
            DROPRIGHT: 'dropright',
            DROPLEFT: 'dropleft',
            MENURIGHT: 'dropdown-menu-right',
            MENULEFT: 'dropdown-menu-left'
        };
        var Selector = {
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: '.dropdown form',
            MENU: '.dropdown-menu',
            NAVBAR_NAV: '.navbar-nav',
            VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
        };
        var AttachmentMap = {
            TOP: 'top-start',
            TOPEND: 'top-end',
            BOTTOM: 'bottom-start',
            BOTTOMEND: 'bottom-end',
            RIGHT: 'right-start',
            RIGHTEND: 'right-end',
            LEFT: 'left-start',
            LEFTEND: 'left-end'
        };
        var Default = {
            offset: 0,
            flip: true
        };
        var DefaultType = {
            offset: '(number|string|function)',
            flip: 'boolean'
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };

        var Dropdown =
            /*#__PURE__*/
            function () {
                function Dropdown(element, config) {
                    this._element = element;
                    this._popper = null;
                    this._config = this._getConfig(config);
                    this._menu = this._getMenuElement();
                    this._inNavbar = this._detectNavbar();

                    this._addEventListeners();
                } // getters


                var _proto = Dropdown.prototype;

                // public
                _proto.toggle = function toggle() {
                    if (this._element.disabled || $$$1(this._element).hasClass(ClassName.DISABLED)) {
                        return;
                    }

                    var parent = Dropdown._getParentFromElement(this._element);

                    var isActive = $$$1(this._menu).hasClass(ClassName.SHOW);

                    Dropdown._clearMenus();

                    if (isActive) {
                        return;
                    }

                    var relatedTarget = {
                        relatedTarget: this._element
                    };
                    var showEvent = $$$1.Event(Event.SHOW, relatedTarget);
                    $$$1(parent).trigger(showEvent);

                    if (showEvent.isDefaultPrevented()) {
                        return;
                    } // Disable totally Popper.js for Dropdown in Navbar


                    if (!this._inNavbar) {
                        /**
                         * Check for Popper dependency
                         * Popper - https://popper.js.org
                         */
                        if (typeof Popper === 'undefined') {
                            throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)');
                        }

                        var element = this._element; // for dropup with alignment we use the parent as popper container

                        if ($$$1(parent).hasClass(ClassName.DROPUP)) {
                            if ($$$1(this._menu).hasClass(ClassName.MENULEFT) || $$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
                                element = parent;
                            }
                        }

                        this._popper = new Popper(element, this._menu, this._getPopperConfig());
                    } // if this is a touch-enabled device we add extra
                    // empty mouseover listeners to the body's immediate children;
                    // only needed because of broken event delegation on iOS
                    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


                    if ('ontouchstart' in document.documentElement && !$$$1(parent).closest(Selector.NAVBAR_NAV).length) {
                        $$$1('body').children().on('mouseover', null, $$$1.noop);
                    }

                    this._element.focus();

                    this._element.setAttribute('aria-expanded', true);

                    $$$1(this._menu).toggleClass(ClassName.SHOW);
                    $$$1(parent).toggleClass(ClassName.SHOW).trigger($$$1.Event(Event.SHOWN, relatedTarget));
                };

                _proto.dispose = function dispose() {
                    $$$1.removeData(this._element, DATA_KEY);
                    $$$1(this._element).off(EVENT_KEY);
                    this._element = null;
                    this._menu = null;

                    if (this._popper !== null) {
                        this._popper.destroy();

                        this._popper = null;
                    }
                };

                _proto.update = function update() {
                    this._inNavbar = this._detectNavbar();

                    if (this._popper !== null) {
                        this._popper.scheduleUpdate();
                    }
                }; // private


                _proto._addEventListeners = function _addEventListeners() {
                    var _this = this;

                    $$$1(this._element).on(Event.CLICK, function (event) {
                        event.preventDefault();
                        event.stopPropagation();

                        _this.toggle();
                    });
                };

                _proto._getConfig = function _getConfig(config) {
                    config = $$$1.extend({}, this.constructor.Default, $$$1(this._element).data(), config);
                    Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
                    return config;
                };

                _proto._getMenuElement = function _getMenuElement() {
                    if (!this._menu) {
                        var parent = Dropdown._getParentFromElement(this._element);

                        this._menu = $$$1(parent).find(Selector.MENU)[0];
                    }

                    return this._menu;
                };

                _proto._getPlacement = function _getPlacement() {
                    var $parentDropdown = $$$1(this._element).parent();
                    var placement = AttachmentMap.BOTTOM; // Handle dropup

                    if ($parentDropdown.hasClass(ClassName.DROPUP)) {
                        placement = AttachmentMap.TOP;

                        if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
                            placement = AttachmentMap.TOPEND;
                        }
                    } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
                        placement = AttachmentMap.RIGHT;
                    } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
                        placement = AttachmentMap.LEFT;
                    } else if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
                        placement = AttachmentMap.BOTTOMEND;
                    }

                    return placement;
                };

                _proto._detectNavbar = function _detectNavbar() {
                    return $$$1(this._element).closest('.navbar').length > 0;
                };

                _proto._getPopperConfig = function _getPopperConfig() {
                    var _this2 = this;

                    var offsetConf = {};

                    if (typeof this._config.offset === 'function') {
                        offsetConf.fn = function (data) {
                            data.offsets = $$$1.extend({}, data.offsets, _this2._config.offset(data.offsets) || {});
                            return data;
                        };
                    } else {
                        offsetConf.offset = this._config.offset;
                    }

                    var popperConfig = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: offsetConf,
                            flip: {
                                enabled: this._config.flip
                            }
                        }
                    };
                    return popperConfig;
                }; // static


                Dropdown._jQueryInterface = function _jQueryInterface(config) {
                    return this.each(function () {
                        var data = $$$1(this).data(DATA_KEY);

                        var _config = typeof config === 'object' ? config : null;

                        if (!data) {
                            data = new Dropdown(this, _config);
                            $$$1(this).data(DATA_KEY, data);
                        }

                        if (typeof config === 'string') {
                            if (typeof data[config] === 'undefined') {
                                throw new Error("No method named \"" + config + "\"");
                            }

                            data[config]();
                        }
                    });
                };

                Dropdown._clearMenus = function _clearMenus(event) {
                    if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
                        return;
                    }

                    var toggles = $$$1.makeArray($$$1(Selector.DATA_TOGGLE));

                    for (var i = 0; i < toggles.length; i++) {
                        var parent = Dropdown._getParentFromElement(toggles[i]);

                        var context = $$$1(toggles[i]).data(DATA_KEY);
                        var relatedTarget = {
                            relatedTarget: toggles[i]
                        };

                        if (!context) {
                            continue;
                        }

                        var dropdownMenu = context._menu;

                        if (!$$$1(parent).hasClass(ClassName.SHOW)) {
                            continue;
                        }

                        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $$$1.contains(parent, event.target)) {
                            continue;
                        }

                        var hideEvent = $$$1.Event(Event.HIDE, relatedTarget);
                        $$$1(parent).trigger(hideEvent);

                        if (hideEvent.isDefaultPrevented()) {
                            continue;
                        } // if this is a touch-enabled device we remove the extra
                        // empty mouseover listeners we added for iOS support


                        if ('ontouchstart' in document.documentElement) {
                            $$$1('body').children().off('mouseover', null, $$$1.noop);
                        }

                        toggles[i].setAttribute('aria-expanded', 'false');
                        $$$1(dropdownMenu).removeClass(ClassName.SHOW);
                        $$$1(parent).removeClass(ClassName.SHOW).trigger($$$1.Event(Event.HIDDEN, relatedTarget));
                    }
                };

                Dropdown._getParentFromElement = function _getParentFromElement(element) {
                    var parent;
                    var selector = Util.getSelectorFromElement(element);

                    if (selector) {
                        parent = $$$1(selector)[0];
                    }

                    return parent || element.parentNode;
                };

                Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
                    // If not input/textarea:
                    //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
                    // If input/textarea:
                    //  - If space key => not a dropdown command
                    //  - If key is other than escape
                    //    - If key is not up or down => not a dropdown command
                    //    - If trigger inside the menu => not a dropdown command
                    if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $$$1(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
                        return;
                    }

                    event.preventDefault();
                    event.stopPropagation();

                    if (this.disabled || $$$1(this).hasClass(ClassName.DISABLED)) {
                        return;
                    }

                    var parent = Dropdown._getParentFromElement(this);

                    var isActive = $$$1(parent).hasClass(ClassName.SHOW);

                    if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
                        if (event.which === ESCAPE_KEYCODE) {
                            var toggle = $$$1(parent).find(Selector.DATA_TOGGLE)[0];
                            $$$1(toggle).trigger('focus');
                        }

                        $$$1(this).trigger('click');
                        return;
                    }

                    var items = $$$1(parent).find(Selector.VISIBLE_ITEMS).get();

                    if (!items.length) {
                        return;
                    }

                    var index = items.indexOf(event.target);

                    if (event.which === ARROW_UP_KEYCODE && index > 0) {
                        // up
                        index--;
                    }

                    if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
                        // down
                        index++;
                    }

                    if (index < 0) {
                        index = 0;
                    }

                    items[index].focus();
                };

                _createClass(Dropdown, null, [{
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                }, {
                    key: "Default",
                    get: function get() {
                        return Default;
                    }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return DefaultType;
                    }
                }]);
                return Dropdown;
            }();
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        $$$1(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
            event.preventDefault();
            event.stopPropagation();

            Dropdown._jQueryInterface.call($$$1(this), 'toggle');
        }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
            e.stopPropagation();
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $$$1.fn[NAME] = Dropdown._jQueryInterface;
        $$$1.fn[NAME].Constructor = Dropdown;

        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Dropdown._jQueryInterface;
        };

        return Dropdown;
    }($, Popper);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta.2): modal.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Modal = function ($$$1) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'modal';
        var VERSION = '4.0.0-beta.2';
        var DATA_KEY = 'bs.modal';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var TRANSITION_DURATION = 300;
        var BACKDROP_TRANSITION_DURATION = 150;
        var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

        var Default = {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: true
        };
        var DefaultType = {
            backdrop: '(boolean|string)',
            keyboard: 'boolean',
            focus: 'boolean',
            show: 'boolean'
        };
        var Event = {
            HIDE: "hide" + EVENT_KEY,
            HIDDEN: "hidden" + EVENT_KEY,
            SHOW: "show" + EVENT_KEY,
            SHOWN: "shown" + EVENT_KEY,
            FOCUSIN: "focusin" + EVENT_KEY,
            RESIZE: "resize" + EVENT_KEY,
            CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
            KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
            MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
            CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
            BACKDROP: 'modal-backdrop',
            OPEN: 'modal-open',
            FADE: 'fade',
            SHOW: 'show'
        };
        var Selector = {
            DIALOG: '.modal-dialog',
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
            STICKY_CONTENT: '.sticky-top',
            NAVBAR_TOGGLER: '.navbar-toggler'
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };

        var Modal =
            /*#__PURE__*/
            function () {
                function Modal(element, config) {
                    this._config = this._getConfig(config);
                    this._element = element;
                    this._dialog = $$$1(element).find(Selector.DIALOG)[0];
                    this._backdrop = null;
                    this._isShown = false;
                    this._isBodyOverflowing = false;
                    this._ignoreBackdropClick = false;
                    this._originalBodyPadding = 0;
                    this._scrollbarWidth = 0;
                } // getters


                var _proto = Modal.prototype;

                // public
                _proto.toggle = function toggle(relatedTarget) {
                    return this._isShown ? this.hide() : this.show(relatedTarget);
                };

                _proto.show = function show(relatedTarget) {
                    var _this = this;

                    if (this._isTransitioning || this._isShown) {
                        return;
                    }

                    if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE)) {
                        this._isTransitioning = true;
                    }

                    var showEvent = $$$1.Event(Event.SHOW, {
                        relatedTarget: relatedTarget
                    });
                    $$$1(this._element).trigger(showEvent);

                    if (this._isShown || showEvent.isDefaultPrevented()) {
                        return;
                    }

                    this._isShown = true;

                    this._checkScrollbar();

                    this._setScrollbar();

                    this._adjustDialog();

                    $$$1(document.body).addClass(ClassName.OPEN);

                    this._setEscapeEvent();

                    this._setResizeEvent();

                    $$$1(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
                        return _this.hide(event);
                    });
                    $$$1(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
                        $$$1(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
                            if ($$$1(event.target).is(_this._element)) {
                                _this._ignoreBackdropClick = true;
                            }
                        });
                    });

                    this._showBackdrop(function () {
                        return _this._showElement(relatedTarget);
                    });
                };

                _proto.hide = function hide(event) {
                    var _this2 = this;

                    if (event) {
                        event.preventDefault();
                    }

                    if (this._isTransitioning || !this._isShown) {
                        return;
                    }

                    var hideEvent = $$$1.Event(Event.HIDE);
                    $$$1(this._element).trigger(hideEvent);

                    if (!this._isShown || hideEvent.isDefaultPrevented()) {
                        return;
                    }

                    this._isShown = false;
                    var transition = Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE);

                    if (transition) {
                        this._isTransitioning = true;
                    }

                    this._setEscapeEvent();

                    this._setResizeEvent();

                    $$$1(document).off(Event.FOCUSIN);
                    $$$1(this._element).removeClass(ClassName.SHOW);
                    $$$1(this._element).off(Event.CLICK_DISMISS);
                    $$$1(this._dialog).off(Event.MOUSEDOWN_DISMISS);

                    if (transition) {
                        $$$1(this._element).one(Util.TRANSITION_END, function (event) {
                            return _this2._hideModal(event);
                        }).emulateTransitionEnd(TRANSITION_DURATION);
                    } else {
                        this._hideModal();
                    }
                };

                _proto.dispose = function dispose() {
                    $$$1.removeData(this._element, DATA_KEY);
                    $$$1(window, document, this._element, this._backdrop).off(EVENT_KEY);
                    this._config = null;
                    this._element = null;
                    this._dialog = null;
                    this._backdrop = null;
                    this._isShown = null;
                    this._isBodyOverflowing = null;
                    this._ignoreBackdropClick = null;
                    this._scrollbarWidth = null;
                };

                _proto.handleUpdate = function handleUpdate() {
                    this._adjustDialog();
                }; // private


                _proto._getConfig = function _getConfig(config) {
                    config = $$$1.extend({}, Default, config);
                    Util.typeCheckConfig(NAME, config, DefaultType);
                    return config;
                };

                _proto._showElement = function _showElement(relatedTarget) {
                    var _this3 = this;

                    var transition = Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE);

                    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
                        // don't move modals dom position
                        document.body.appendChild(this._element);
                    }

                    this._element.style.display = 'block';

                    this._element.removeAttribute('aria-hidden');

                    this._element.scrollTop = 0;

                    if (transition) {
                        Util.reflow(this._element);
                    }

                    $$$1(this._element).addClass(ClassName.SHOW);

                    if (this._config.focus) {
                        this._enforceFocus();
                    }

                    var shownEvent = $$$1.Event(Event.SHOWN, {
                        relatedTarget: relatedTarget
                    });

                    var transitionComplete = function transitionComplete() {
                        if (_this3._config.focus) {
                            _this3._element.focus();
                        }

                        _this3._isTransitioning = false;
                        $$$1(_this3._element).trigger(shownEvent);
                    };

                    if (transition) {
                        $$$1(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
                    } else {
                        transitionComplete();
                    }
                };

                _proto._enforceFocus = function _enforceFocus() {
                    var _this4 = this;

                    $$$1(document).off(Event.FOCUSIN) // guard against infinite focus loop
                        .on(Event.FOCUSIN, function (event) {
                            if (document !== event.target && _this4._element !== event.target && !$$$1(_this4._element).has(event.target).length) {
                                _this4._element.focus();
                            }
                        });
                };

                _proto._setEscapeEvent = function _setEscapeEvent() {
                    var _this5 = this;

                    if (this._isShown && this._config.keyboard) {
                        $$$1(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
                            if (event.which === ESCAPE_KEYCODE) {
                                event.preventDefault();

                                _this5.hide();
                            }
                        });
                    } else if (!this._isShown) {
                        $$$1(this._element).off(Event.KEYDOWN_DISMISS);
                    }
                };

                _proto._setResizeEvent = function _setResizeEvent() {
                    var _this6 = this;

                    if (this._isShown) {
                        $$$1(window).on(Event.RESIZE, function (event) {
                            return _this6.handleUpdate(event);
                        });
                    } else {
                        $$$1(window).off(Event.RESIZE);
                    }
                };

                _proto._hideModal = function _hideModal() {
                    var _this7 = this;

                    this._element.style.display = 'none';

                    this._element.setAttribute('aria-hidden', true);

                    this._isTransitioning = false;

                    this._showBackdrop(function () {
                        $$$1(document.body).removeClass(ClassName.OPEN);

                        _this7._resetAdjustments();

                        _this7._resetScrollbar();

                        $$$1(_this7._element).trigger(Event.HIDDEN);
                    });
                };

                _proto._removeBackdrop = function _removeBackdrop() {
                    if (this._backdrop) {
                        $$$1(this._backdrop).remove();
                        this._backdrop = null;
                    }
                };

                _proto._showBackdrop = function _showBackdrop(callback) {
                    var _this8 = this;

                    var animate = $$$1(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

                    if (this._isShown && this._config.backdrop) {
                        var doAnimate = Util.supportsTransitionEnd() && animate;
                        this._backdrop = document.createElement('div');
                        this._backdrop.className = ClassName.BACKDROP;

                        if (animate) {
                            $$$1(this._backdrop).addClass(animate);
                        }

                        $$$1(this._backdrop).appendTo(document.body);
                        $$$1(this._element).on(Event.CLICK_DISMISS, function (event) {
                            if (_this8._ignoreBackdropClick) {
                                _this8._ignoreBackdropClick = false;
                                return;
                            }

                            if (event.target !== event.currentTarget) {
                                return;
                            }

                            if (_this8._config.backdrop === 'static') {
                                _this8._element.focus();
                            } else {
                                _this8.hide();
                            }
                        });

                        if (doAnimate) {
                            Util.reflow(this._backdrop);
                        }

                        $$$1(this._backdrop).addClass(ClassName.SHOW);

                        if (!callback) {
                            return;
                        }

                        if (!doAnimate) {
                            callback();
                            return;
                        }

                        $$$1(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
                    } else if (!this._isShown && this._backdrop) {
                        $$$1(this._backdrop).removeClass(ClassName.SHOW);

                        var callbackRemove = function callbackRemove() {
                            _this8._removeBackdrop();

                            if (callback) {
                                callback();
                            }
                        };

                        if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE)) {
                            $$$1(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
                        } else {
                            callbackRemove();
                        }
                    } else if (callback) {
                        callback();
                    }
                }; // ----------------------------------------------------------------------
                // the following methods are used to handle overflowing modals
                // todo (fat): these should probably be refactored out of modal.js
                // ----------------------------------------------------------------------


                _proto._adjustDialog = function _adjustDialog() {
                    var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

                    if (!this._isBodyOverflowing && isModalOverflowing) {
                        this._element.style.paddingLeft = this._scrollbarWidth + "px";
                    }

                    if (this._isBodyOverflowing && !isModalOverflowing) {
                        this._element.style.paddingRight = this._scrollbarWidth + "px";
                    }
                };

                _proto._resetAdjustments = function _resetAdjustments() {
                    this._element.style.paddingLeft = '';
                    this._element.style.paddingRight = '';
                };

                _proto._checkScrollbar = function _checkScrollbar() {
                    var rect = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
                    this._scrollbarWidth = this._getScrollbarWidth();
                };

                _proto._setScrollbar = function _setScrollbar() {
                    var _this9 = this;

                    if (this._isBodyOverflowing) {
                        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
                        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
                        // Adjust fixed content padding
                        $$$1(Selector.FIXED_CONTENT).each(function (index, element) {
                            var actualPadding = $$$1(element)[0].style.paddingRight;
                            var calculatedPadding = $$$1(element).css('padding-right');
                            $$$1(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
                        }); // Adjust sticky content margin

                        $$$1(Selector.STICKY_CONTENT).each(function (index, element) {
                            var actualMargin = $$$1(element)[0].style.marginRight;
                            var calculatedMargin = $$$1(element).css('margin-right');
                            $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
                        }); // Adjust navbar-toggler margin

                        $$$1(Selector.NAVBAR_TOGGLER).each(function (index, element) {
                            var actualMargin = $$$1(element)[0].style.marginRight;
                            var calculatedMargin = $$$1(element).css('margin-right');
                            $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this9._scrollbarWidth + "px");
                        }); // Adjust body padding

                        var actualPadding = document.body.style.paddingRight;
                        var calculatedPadding = $$$1('body').css('padding-right');
                        $$$1('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
                    }
                };

                _proto._resetScrollbar = function _resetScrollbar() {
                    // Restore fixed content padding
                    $$$1(Selector.FIXED_CONTENT).each(function (index, element) {
                        var padding = $$$1(element).data('padding-right');

                        if (typeof padding !== 'undefined') {
                            $$$1(element).css('padding-right', padding).removeData('padding-right');
                        }
                    }); // Restore sticky content and navbar-toggler margin

                    $$$1(Selector.STICKY_CONTENT + ", " + Selector.NAVBAR_TOGGLER).each(function (index, element) {
                        var margin = $$$1(element).data('margin-right');

                        if (typeof margin !== 'undefined') {
                            $$$1(element).css('margin-right', margin).removeData('margin-right');
                        }
                    }); // Restore body padding

                    var padding = $$$1('body').data('padding-right');

                    if (typeof padding !== 'undefined') {
                        $$$1('body').css('padding-right', padding).removeData('padding-right');
                    }
                };

                _proto._getScrollbarWidth = function _getScrollbarWidth() {
                    // thx d.walsh
                    var scrollDiv = document.createElement('div');
                    scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
                    document.body.appendChild(scrollDiv);
                    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
                    document.body.removeChild(scrollDiv);
                    return scrollbarWidth;
                }; // static


                Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
                    return this.each(function () {
                        var data = $$$1(this).data(DATA_KEY);

                        var _config = $$$1.extend({}, Modal.Default, $$$1(this).data(), typeof config === 'object' && config);

                        if (!data) {
                            data = new Modal(this, _config);
                            $$$1(this).data(DATA_KEY, data);
                        }

                        if (typeof config === 'string') {
                            if (typeof data[config] === 'undefined') {
                                throw new Error("No method named \"" + config + "\"");
                            }

                            data[config](relatedTarget);
                        } else if (_config.show) {
                            data.show(relatedTarget);
                        }
                    });
                };

                _createClass(Modal, null, [{
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                }, {
                    key: "Default",
                    get: function get() {
                        return Default;
                    }
                }]);
                return Modal;
            }();
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
            var _this10 = this;

            var target;
            var selector = Util.getSelectorFromElement(this);

            if (selector) {
                target = $$$1(selector)[0];
            }

            var config = $$$1(target).data(DATA_KEY) ? 'toggle' : $$$1.extend({}, $$$1(target).data(), $$$1(this).data());

            if (this.tagName === 'A' || this.tagName === 'AREA') {
                event.preventDefault();
            }

            var $target = $$$1(target).one(Event.SHOW, function (showEvent) {
                if (showEvent.isDefaultPrevented()) {
                    // only register focus restorer if modal will actually get shown
                    return;
                }

                $target.one(Event.HIDDEN, function () {
                    if ($$$1(_this10).is(':visible')) {
                        _this10.focus();
                    }
                });
            });

            Modal._jQueryInterface.call($$$1(target), config, this);
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $$$1.fn[NAME] = Modal._jQueryInterface;
        $$$1.fn[NAME].Constructor = Modal;

        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Modal._jQueryInterface;
        };

        return Modal;
    }($);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta.2): tooltip.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Tooltip = function ($$$1) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'tooltip';
        var VERSION = '4.0.0-beta.2';
        var DATA_KEY = 'bs.tooltip';
        var EVENT_KEY = "." + DATA_KEY;
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var TRANSITION_DURATION = 150;
        var CLASS_PREFIX = 'bs-tooltip';
        var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
        var DefaultType = {
            animation: 'boolean',
            template: 'string',
            title: '(string|element|function)',
            trigger: 'string',
            delay: '(number|object)',
            html: 'boolean',
            selector: '(string|boolean)',
            placement: '(string|function)',
            offset: '(number|string)',
            container: '(string|element|boolean)',
            fallbackPlacement: '(string|array)'
        };
        var AttachmentMap = {
            AUTO: 'auto',
            TOP: 'top',
            RIGHT: 'right',
            BOTTOM: 'bottom',
            LEFT: 'left'
        };
        var Default = {
            animation: true,
            template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
            trigger: 'hover focus',
            title: '',
            delay: 0,
            html: false,
            selector: false,
            placement: 'top',
            offset: 0,
            container: false,
            fallbackPlacement: 'flip'
        };
        var HoverState = {
            SHOW: 'show',
            OUT: 'out'
        };
        var Event = {
            HIDE: "hide" + EVENT_KEY,
            HIDDEN: "hidden" + EVENT_KEY,
            SHOW: "show" + EVENT_KEY,
            SHOWN: "shown" + EVENT_KEY,
            INSERTED: "inserted" + EVENT_KEY,
            CLICK: "click" + EVENT_KEY,
            FOCUSIN: "focusin" + EVENT_KEY,
            FOCUSOUT: "focusout" + EVENT_KEY,
            MOUSEENTER: "mouseenter" + EVENT_KEY,
            MOUSELEAVE: "mouseleave" + EVENT_KEY
        };
        var ClassName = {
            FADE: 'fade',
            SHOW: 'show'
        };
        var Selector = {
            TOOLTIP: '.tooltip',
            TOOLTIP_INNER: '.tooltip-inner',
            ARROW: '.arrow'
        };
        var Trigger = {
            HOVER: 'hover',
            FOCUS: 'focus',
            CLICK: 'click',
            MANUAL: 'manual'
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };

        var Tooltip =
            /*#__PURE__*/
            function () {
                function Tooltip(element, config) {
                    /**
                     * Check for Popper dependency
                     * Popper - https://popper.js.org
                     */
                    if (typeof Popper === 'undefined') {
                        throw new Error('Bootstrap tooltips require Popper.js (https://popper.js.org)');
                    } // private


                    this._isEnabled = true;
                    this._timeout = 0;
                    this._hoverState = '';
                    this._activeTrigger = {};
                    this._popper = null; // protected

                    this.element = element;
                    this.config = this._getConfig(config);
                    this.tip = null;

                    this._setListeners();
                } // getters


                var _proto = Tooltip.prototype;

                // public
                _proto.enable = function enable() {
                    this._isEnabled = true;
                };

                _proto.disable = function disable() {
                    this._isEnabled = false;
                };

                _proto.toggleEnabled = function toggleEnabled() {
                    this._isEnabled = !this._isEnabled;
                };

                _proto.toggle = function toggle(event) {
                    if (!this._isEnabled) {
                        return;
                    }

                    if (event) {
                        var dataKey = this.constructor.DATA_KEY;
                        var context = $$$1(event.currentTarget).data(dataKey);

                        if (!context) {
                            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                            $$$1(event.currentTarget).data(dataKey, context);
                        }

                        context._activeTrigger.click = !context._activeTrigger.click;

                        if (context._isWithActiveTrigger()) {
                            context._enter(null, context);
                        } else {
                            context._leave(null, context);
                        }
                    } else {
                        if ($$$1(this.getTipElement()).hasClass(ClassName.SHOW)) {
                            this._leave(null, this);

                            return;
                        }

                        this._enter(null, this);
                    }
                };

                _proto.dispose = function dispose() {
                    clearTimeout(this._timeout);
                    $$$1.removeData(this.element, this.constructor.DATA_KEY);
                    $$$1(this.element).off(this.constructor.EVENT_KEY);
                    $$$1(this.element).closest('.modal').off('hide.bs.modal');

                    if (this.tip) {
                        $$$1(this.tip).remove();
                    }

                    this._isEnabled = null;
                    this._timeout = null;
                    this._hoverState = null;
                    this._activeTrigger = null;

                    if (this._popper !== null) {
                        this._popper.destroy();
                    }

                    this._popper = null;
                    this.element = null;
                    this.config = null;
                    this.tip = null;
                };

                _proto.show = function show() {
                    var _this = this;

                    if ($$$1(this.element).css('display') === 'none') {
                        throw new Error('Please use show on visible elements');
                    }

                    var showEvent = $$$1.Event(this.constructor.Event.SHOW);

                    if (this.isWithContent() && this._isEnabled) {
                        $$$1(this.element).trigger(showEvent);
                        var isInTheDom = $$$1.contains(this.element.ownerDocument.documentElement, this.element);

                        if (showEvent.isDefaultPrevented() || !isInTheDom) {
                            return;
                        }

                        var tip = this.getTipElement();
                        var tipId = Util.getUID(this.constructor.NAME);
                        tip.setAttribute('id', tipId);
                        this.element.setAttribute('aria-describedby', tipId);
                        this.setContent();

                        if (this.config.animation) {
                            $$$1(tip).addClass(ClassName.FADE);
                        }

                        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

                        var attachment = this._getAttachment(placement);

                        this.addAttachmentClass(attachment);
                        var container = this.config.container === false ? document.body : $$$1(this.config.container);
                        $$$1(tip).data(this.constructor.DATA_KEY, this);

                        if (!$$$1.contains(this.element.ownerDocument.documentElement, this.tip)) {
                            $$$1(tip).appendTo(container);
                        }

                        $$$1(this.element).trigger(this.constructor.Event.INSERTED);
                        this._popper = new Popper(this.element, tip, {
                            placement: attachment,
                            modifiers: {
                                offset: {
                                    offset: this.config.offset
                                },
                                flip: {
                                    behavior: this.config.fallbackPlacement
                                },
                                arrow: {
                                    element: Selector.ARROW
                                }
                            },
                            onCreate: function onCreate(data) {
                                if (data.originalPlacement !== data.placement) {
                                    _this._handlePopperPlacementChange(data);
                                }
                            },
                            onUpdate: function onUpdate(data) {
                                _this._handlePopperPlacementChange(data);
                            }
                        });
                        $$$1(tip).addClass(ClassName.SHOW); // if this is a touch-enabled device we add extra
                        // empty mouseover listeners to the body's immediate children;
                        // only needed because of broken event delegation on iOS
                        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

                        if ('ontouchstart' in document.documentElement) {
                            $$$1('body').children().on('mouseover', null, $$$1.noop);
                        }

                        var complete = function complete() {
                            if (_this.config.animation) {
                                _this._fixTransition();
                            }

                            var prevHoverState = _this._hoverState;
                            _this._hoverState = null;
                            $$$1(_this.element).trigger(_this.constructor.Event.SHOWN);

                            if (prevHoverState === HoverState.OUT) {
                                _this._leave(null, _this);
                            }
                        };

                        if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {
                            $$$1(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
                        } else {
                            complete();
                        }
                    }
                };

                _proto.hide = function hide(callback) {
                    var _this2 = this;

                    var tip = this.getTipElement();
                    var hideEvent = $$$1.Event(this.constructor.Event.HIDE);

                    var complete = function complete() {
                        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
                            tip.parentNode.removeChild(tip);
                        }

                        _this2._cleanTipClass();

                        _this2.element.removeAttribute('aria-describedby');

                        $$$1(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

                        if (_this2._popper !== null) {
                            _this2._popper.destroy();
                        }

                        if (callback) {
                            callback();
                        }
                    };

                    $$$1(this.element).trigger(hideEvent);

                    if (hideEvent.isDefaultPrevented()) {
                        return;
                    }

                    $$$1(tip).removeClass(ClassName.SHOW); // if this is a touch-enabled device we remove the extra
                    // empty mouseover listeners we added for iOS support

                    if ('ontouchstart' in document.documentElement) {
                        $$$1('body').children().off('mouseover', null, $$$1.noop);
                    }

                    this._activeTrigger[Trigger.CLICK] = false;
                    this._activeTrigger[Trigger.FOCUS] = false;
                    this._activeTrigger[Trigger.HOVER] = false;

                    if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {
                        $$$1(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
                    } else {
                        complete();
                    }

                    this._hoverState = '';
                };

                _proto.update = function update() {
                    if (this._popper !== null) {
                        this._popper.scheduleUpdate();
                    }
                }; // protected


                _proto.isWithContent = function isWithContent() {
                    return Boolean(this.getTitle());
                };

                _proto.addAttachmentClass = function addAttachmentClass(attachment) {
                    $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
                };

                _proto.getTipElement = function getTipElement() {
                    this.tip = this.tip || $$$1(this.config.template)[0];
                    return this.tip;
                };

                _proto.setContent = function setContent() {
                    var $tip = $$$1(this.getTipElement());
                    this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
                    $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
                };

                _proto.setElementContent = function setElementContent($element, content) {
                    var html = this.config.html;

                    if (typeof content === 'object' && (content.nodeType || content.jquery)) {
                        // content is a DOM node or a jQuery
                        if (html) {
                            if (!$$$1(content).parent().is($element)) {
                                $element.empty().append(content);
                            }
                        } else {
                            $element.text($$$1(content).text());
                        }
                    } else {
                        $element[html ? 'html' : 'text'](content);
                    }
                };

                _proto.getTitle = function getTitle() {
                    var title = this.element.getAttribute('data-original-title');

                    if (!title) {
                        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
                    }

                    return title;
                }; // private


                _proto._getAttachment = function _getAttachment(placement) {
                    return AttachmentMap[placement.toUpperCase()];
                };

                _proto._setListeners = function _setListeners() {
                    var _this3 = this;

                    var triggers = this.config.trigger.split(' ');
                    triggers.forEach(function (trigger) {
                        if (trigger === 'click') {
                            $$$1(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
                                return _this3.toggle(event);
                            });
                        } else if (trigger !== Trigger.MANUAL) {
                            var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
                            var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;
                            $$$1(_this3.element).on(eventIn, _this3.config.selector, function (event) {
                                return _this3._enter(event);
                            }).on(eventOut, _this3.config.selector, function (event) {
                                return _this3._leave(event);
                            });
                        }

                        $$$1(_this3.element).closest('.modal').on('hide.bs.modal', function () {
                            return _this3.hide();
                        });
                    });

                    if (this.config.selector) {
                        this.config = $$$1.extend({}, this.config, {
                            trigger: 'manual',
                            selector: ''
                        });
                    } else {
                        this._fixTitle();
                    }
                };

                _proto._fixTitle = function _fixTitle() {
                    var titleType = typeof this.element.getAttribute('data-original-title');

                    if (this.element.getAttribute('title') || titleType !== 'string') {
                        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
                        this.element.setAttribute('title', '');
                    }
                };

                _proto._enter = function _enter(event, context) {
                    var dataKey = this.constructor.DATA_KEY;
                    context = context || $$$1(event.currentTarget).data(dataKey);

                    if (!context) {
                        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                        $$$1(event.currentTarget).data(dataKey, context);
                    }

                    if (event) {
                        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
                    }

                    if ($$$1(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
                        context._hoverState = HoverState.SHOW;
                        return;
                    }

                    clearTimeout(context._timeout);
                    context._hoverState = HoverState.SHOW;

                    if (!context.config.delay || !context.config.delay.show) {
                        context.show();
                        return;
                    }

                    context._timeout = setTimeout(function () {
                        if (context._hoverState === HoverState.SHOW) {
                            context.show();
                        }
                    }, context.config.delay.show);
                };

                _proto._leave = function _leave(event, context) {
                    var dataKey = this.constructor.DATA_KEY;
                    context = context || $$$1(event.currentTarget).data(dataKey);

                    if (!context) {
                        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                        $$$1(event.currentTarget).data(dataKey, context);
                    }

                    if (event) {
                        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
                    }

                    if (context._isWithActiveTrigger()) {
                        return;
                    }

                    clearTimeout(context._timeout);
                    context._hoverState = HoverState.OUT;

                    if (!context.config.delay || !context.config.delay.hide) {
                        context.hide();
                        return;
                    }

                    context._timeout = setTimeout(function () {
                        if (context._hoverState === HoverState.OUT) {
                            context.hide();
                        }
                    }, context.config.delay.hide);
                };

                _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
                    for (var trigger in this._activeTrigger) {
                        if (this._activeTrigger[trigger]) {
                            return true;
                        }
                    }

                    return false;
                };

                _proto._getConfig = function _getConfig(config) {
                    config = $$$1.extend({}, this.constructor.Default, $$$1(this.element).data(), config);

                    if (typeof config.delay === 'number') {
                        config.delay = {
                            show: config.delay,
                            hide: config.delay
                        };
                    }

                    if (typeof config.title === 'number') {
                        config.title = config.title.toString();
                    }

                    if (typeof config.content === 'number') {
                        config.content = config.content.toString();
                    }

                    Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
                    return config;
                };

                _proto._getDelegateConfig = function _getDelegateConfig() {
                    var config = {};

                    if (this.config) {
                        for (var key in this.config) {
                            if (this.constructor.Default[key] !== this.config[key]) {
                                config[key] = this.config[key];
                            }
                        }
                    }

                    return config;
                };

                _proto._cleanTipClass = function _cleanTipClass() {
                    var $tip = $$$1(this.getTipElement());
                    var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

                    if (tabClass !== null && tabClass.length > 0) {
                        $tip.removeClass(tabClass.join(''));
                    }
                };

                _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
                    this._cleanTipClass();

                    this.addAttachmentClass(this._getAttachment(data.placement));
                };

                _proto._fixTransition = function _fixTransition() {
                    var tip = this.getTipElement();
                    var initConfigAnimation = this.config.animation;

                    if (tip.getAttribute('x-placement') !== null) {
                        return;
                    }

                    $$$1(tip).removeClass(ClassName.FADE);
                    this.config.animation = false;
                    this.hide();
                    this.show();
                    this.config.animation = initConfigAnimation;
                }; // static


                Tooltip._jQueryInterface = function _jQueryInterface(config) {
                    return this.each(function () {
                        var data = $$$1(this).data(DATA_KEY);

                        var _config = typeof config === 'object' && config;

                        if (!data && /dispose|hide/.test(config)) {
                            return;
                        }

                        if (!data) {
                            data = new Tooltip(this, _config);
                            $$$1(this).data(DATA_KEY, data);
                        }

                        if (typeof config === 'string') {
                            if (typeof data[config] === 'undefined') {
                                throw new Error("No method named \"" + config + "\"");
                            }

                            data[config]();
                        }
                    });
                };

                _createClass(Tooltip, null, [{
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                }, {
                    key: "Default",
                    get: function get() {
                        return Default;
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        return NAME;
                    }
                }, {
                    key: "DATA_KEY",
                    get: function get() {
                        return DATA_KEY;
                    }
                }, {
                    key: "Event",
                    get: function get() {
                        return Event;
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function get() {
                        return EVENT_KEY;
                    }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return DefaultType;
                    }
                }]);
                return Tooltip;
            }();
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */


        $$$1.fn[NAME] = Tooltip._jQueryInterface;
        $$$1.fn[NAME].Constructor = Tooltip;

        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Tooltip._jQueryInterface;
        };

        return Tooltip;
    }($, Popper);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta.2): popover.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Popover = function ($$$1) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'popover';
        var VERSION = '4.0.0-beta.2';
        var DATA_KEY = 'bs.popover';
        var EVENT_KEY = "." + DATA_KEY;
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var CLASS_PREFIX = 'bs-popover';
        var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
        var Default = $$$1.extend({}, Tooltip.Default, {
            placement: 'right',
            trigger: 'click',
            content: '',
            template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
        });
        var DefaultType = $$$1.extend({}, Tooltip.DefaultType, {
            content: '(string|element|function)'
        });
        var ClassName = {
            FADE: 'fade',
            SHOW: 'show'
        };
        var Selector = {
            TITLE: '.popover-header',
            CONTENT: '.popover-body'
        };
        var Event = {
            HIDE: "hide" + EVENT_KEY,
            HIDDEN: "hidden" + EVENT_KEY,
            SHOW: "show" + EVENT_KEY,
            SHOWN: "shown" + EVENT_KEY,
            INSERTED: "inserted" + EVENT_KEY,
            CLICK: "click" + EVENT_KEY,
            FOCUSIN: "focusin" + EVENT_KEY,
            FOCUSOUT: "focusout" + EVENT_KEY,
            MOUSEENTER: "mouseenter" + EVENT_KEY,
            MOUSELEAVE: "mouseleave" + EVENT_KEY
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };

        var Popover =
            /*#__PURE__*/
            function (_Tooltip) {
                _inheritsLoose(Popover, _Tooltip);

                function Popover() {
                    return _Tooltip.apply(this, arguments) || this;
                }

                var _proto = Popover.prototype;

                // overrides
                _proto.isWithContent = function isWithContent() {
                    return this.getTitle() || this._getContent();
                };

                _proto.addAttachmentClass = function addAttachmentClass(attachment) {
                    $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
                };

                _proto.getTipElement = function getTipElement() {
                    this.tip = this.tip || $$$1(this.config.template)[0];
                    return this.tip;
                };

                _proto.setContent = function setContent() {
                    var $tip = $$$1(this.getTipElement()); // we use append for html objects to maintain js events

                    this.setElementContent($tip.find(Selector.TITLE), this.getTitle());

                    var content = this._getContent();

                    if (typeof content === 'function') {
                        content = content.call(this.element);
                    }

                    this.setElementContent($tip.find(Selector.CONTENT), content);
                    $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
                }; // private


                _proto._getContent = function _getContent() {
                    return this.element.getAttribute('data-content') || this.config.content;
                };

                _proto._cleanTipClass = function _cleanTipClass() {
                    var $tip = $$$1(this.getTipElement());
                    var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

                    if (tabClass !== null && tabClass.length > 0) {
                        $tip.removeClass(tabClass.join(''));
                    }
                }; // static


                Popover._jQueryInterface = function _jQueryInterface(config) {
                    return this.each(function () {
                        var data = $$$1(this).data(DATA_KEY);

                        var _config = typeof config === 'object' ? config : null;

                        if (!data && /destroy|hide/.test(config)) {
                            return;
                        }

                        if (!data) {
                            data = new Popover(this, _config);
                            $$$1(this).data(DATA_KEY, data);
                        }

                        if (typeof config === 'string') {
                            if (typeof data[config] === 'undefined') {
                                throw new Error("No method named \"" + config + "\"");
                            }

                            data[config]();
                        }
                    });
                };

                _createClass(Popover, null, [{
                    key: "VERSION",
                    // getters
                    get: function get() {
                        return VERSION;
                    }
                }, {
                    key: "Default",
                    get: function get() {
                        return Default;
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        return NAME;
                    }
                }, {
                    key: "DATA_KEY",
                    get: function get() {
                        return DATA_KEY;
                    }
                }, {
                    key: "Event",
                    get: function get() {
                        return Event;
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function get() {
                        return EVENT_KEY;
                    }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return DefaultType;
                    }
                }]);
                return Popover;
            }(Tooltip);
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */


        $$$1.fn[NAME] = Popover._jQueryInterface;
        $$$1.fn[NAME].Constructor = Popover;

        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Popover._jQueryInterface;
        };

        return Popover;
    }($);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta.2): scrollspy.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var ScrollSpy = function ($$$1) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'scrollspy';
        var VERSION = '4.0.0-beta.2';
        var DATA_KEY = 'bs.scrollspy';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var Default = {
            offset: 10,
            method: 'auto',
            target: ''
        };
        var DefaultType = {
            offset: 'number',
            method: 'string',
            target: '(string|element)'
        };
        var Event = {
            ACTIVATE: "activate" + EVENT_KEY,
            SCROLL: "scroll" + EVENT_KEY,
            LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            DROPDOWN_ITEM: 'dropdown-item',
            DROPDOWN_MENU: 'dropdown-menu',
            ACTIVE: 'active'
        };
        var Selector = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: '.active',
            NAV_LIST_GROUP: '.nav, .list-group',
            NAV_LINKS: '.nav-link',
            NAV_ITEMS: '.nav-item',
            LIST_ITEMS: '.list-group-item',
            DROPDOWN: '.dropdown',
            DROPDOWN_ITEMS: '.dropdown-item',
            DROPDOWN_TOGGLE: '.dropdown-toggle'
        };
        var OffsetMethod = {
            OFFSET: 'offset',
            POSITION: 'position'
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };

        var ScrollSpy =
            /*#__PURE__*/
            function () {
                function ScrollSpy(element, config) {
                    var _this = this;

                    this._element = element;
                    this._scrollElement = element.tagName === 'BODY' ? window : element;
                    this._config = this._getConfig(config);
                    this._selector = this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.LIST_ITEMS + ",") + (this._config.target + " " + Selector.DROPDOWN_ITEMS);
                    this._offsets = [];
                    this._targets = [];
                    this._activeTarget = null;
                    this._scrollHeight = 0;
                    $$$1(this._scrollElement).on(Event.SCROLL, function (event) {
                        return _this._process(event);
                    });
                    this.refresh();

                    this._process();
                } // getters


                var _proto = ScrollSpy.prototype;

                // public
                _proto.refresh = function refresh() {
                    var _this2 = this;

                    var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;
                    var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
                    var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
                    this._offsets = [];
                    this._targets = [];
                    this._scrollHeight = this._getScrollHeight();
                    var targets = $$$1.makeArray($$$1(this._selector));
                    targets.map(function (element) {
                        var target;
                        var targetSelector = Util.getSelectorFromElement(element);

                        if (targetSelector) {
                            target = $$$1(targetSelector)[0];
                        }

                        if (target) {
                            var targetBCR = target.getBoundingClientRect();

                            if (targetBCR.width || targetBCR.height) {
                                // todo (fat): remove sketch reliance on jQuery position/offset
                                return [$$$1(target)[offsetMethod]().top + offsetBase, targetSelector];
                            }
                        }

                        return null;
                    }).filter(function (item) {
                        return item;
                    }).sort(function (a, b) {
                        return a[0] - b[0];
                    }).forEach(function (item) {
                        _this2._offsets.push(item[0]);

                        _this2._targets.push(item[1]);
                    });
                };

                _proto.dispose = function dispose() {
                    $$$1.removeData(this._element, DATA_KEY);
                    $$$1(this._scrollElement).off(EVENT_KEY);
                    this._element = null;
                    this._scrollElement = null;
                    this._config = null;
                    this._selector = null;
                    this._offsets = null;
                    this._targets = null;
                    this._activeTarget = null;
                    this._scrollHeight = null;
                }; // private


                _proto._getConfig = function _getConfig(config) {
                    config = $$$1.extend({}, Default, config);

                    if (typeof config.target !== 'string') {
                        var id = $$$1(config.target).attr('id');

                        if (!id) {
                            id = Util.getUID(NAME);
                            $$$1(config.target).attr('id', id);
                        }

                        config.target = "#" + id;
                    }

                    Util.typeCheckConfig(NAME, config, DefaultType);
                    return config;
                };

                _proto._getScrollTop = function _getScrollTop() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                };

                _proto._getScrollHeight = function _getScrollHeight() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                };

                _proto._getOffsetHeight = function _getOffsetHeight() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                };

                _proto._process = function _process() {
                    var scrollTop = this._getScrollTop() + this._config.offset;

                    var scrollHeight = this._getScrollHeight();

                    var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

                    if (this._scrollHeight !== scrollHeight) {
                        this.refresh();
                    }

                    if (scrollTop >= maxScroll) {
                        var target = this._targets[this._targets.length - 1];

                        if (this._activeTarget !== target) {
                            this._activate(target);
                        }

                        return;
                    }

                    if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
                        this._activeTarget = null;

                        this._clear();

                        return;
                    }

                    for (var i = this._offsets.length; i--;) {
                        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

                        if (isActiveTarget) {
                            this._activate(this._targets[i]);
                        }
                    }
                };

                _proto._activate = function _activate(target) {
                    this._activeTarget = target;

                    this._clear();

                    var queries = this._selector.split(','); // eslint-disable-next-line arrow-body-style


                    queries = queries.map(function (selector) {
                        return selector + "[data-target=\"" + target + "\"]," + (selector + "[href=\"" + target + "\"]");
                    });
                    var $link = $$$1(queries.join(','));

                    if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
                        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
                        $link.addClass(ClassName.ACTIVE);
                    } else {
                        // Set triggered link as active
                        $link.addClass(ClassName.ACTIVE); // Set triggered links parents as active
                        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

                        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ", " + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE); // Handle special case when .nav-link is inside .nav-item

                        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
                    }

                    $$$1(this._scrollElement).trigger(Event.ACTIVATE, {
                        relatedTarget: target
                    });
                };

                _proto._clear = function _clear() {
                    $$$1(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
                }; // static


                ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
                    return this.each(function () {
                        var data = $$$1(this).data(DATA_KEY);

                        var _config = typeof config === 'object' && config;

                        if (!data) {
                            data = new ScrollSpy(this, _config);
                            $$$1(this).data(DATA_KEY, data);
                        }

                        if (typeof config === 'string') {
                            if (typeof data[config] === 'undefined') {
                                throw new Error("No method named \"" + config + "\"");
                            }

                            data[config]();
                        }
                    });
                };

                _createClass(ScrollSpy, null, [{
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                }, {
                    key: "Default",
                    get: function get() {
                        return Default;
                    }
                }]);
                return ScrollSpy;
            }();
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        $$$1(window).on(Event.LOAD_DATA_API, function () {
            var scrollSpys = $$$1.makeArray($$$1(Selector.DATA_SPY));

            for (var i = scrollSpys.length; i--;) {
                var $spy = $$$1(scrollSpys[i]);

                ScrollSpy._jQueryInterface.call($spy, $spy.data());
            }
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $$$1.fn[NAME] = ScrollSpy._jQueryInterface;
        $$$1.fn[NAME].Constructor = ScrollSpy;

        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return ScrollSpy._jQueryInterface;
        };

        return ScrollSpy;
    }($);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta.2): tab.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Tab = function ($$$1) {
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        var NAME = 'tab';
        var VERSION = '4.0.0-beta.2';
        var DATA_KEY = 'bs.tab';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var TRANSITION_DURATION = 150;
        var Event = {
            HIDE: "hide" + EVENT_KEY,
            HIDDEN: "hidden" + EVENT_KEY,
            SHOW: "show" + EVENT_KEY,
            SHOWN: "shown" + EVENT_KEY,
            CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            DROPDOWN_MENU: 'dropdown-menu',
            ACTIVE: 'active',
            DISABLED: 'disabled',
            FADE: 'fade',
            SHOW: 'show'
        };
        var Selector = {
            DROPDOWN: '.dropdown',
            NAV_LIST_GROUP: '.nav, .list-group',
            ACTIVE: '.active',
            ACTIVE_UL: '> li > .active',
            DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            DROPDOWN_TOGGLE: '.dropdown-toggle',
            DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };

        var Tab =
            /*#__PURE__*/
            function () {
                function Tab(element) {
                    this._element = element;
                } // getters


                var _proto = Tab.prototype;

                // public
                _proto.show = function show() {
                    var _this = this;

                    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $$$1(this._element).hasClass(ClassName.ACTIVE) || $$$1(this._element).hasClass(ClassName.DISABLED)) {
                        return;
                    }

                    var target;
                    var previous;
                    var listElement = $$$1(this._element).closest(Selector.NAV_LIST_GROUP)[0];
                    var selector = Util.getSelectorFromElement(this._element);

                    if (listElement) {
                        var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
                        previous = $$$1.makeArray($$$1(listElement).find(itemSelector));
                        previous = previous[previous.length - 1];
                    }

                    var hideEvent = $$$1.Event(Event.HIDE, {
                        relatedTarget: this._element
                    });
                    var showEvent = $$$1.Event(Event.SHOW, {
                        relatedTarget: previous
                    });

                    if (previous) {
                        $$$1(previous).trigger(hideEvent);
                    }

                    $$$1(this._element).trigger(showEvent);

                    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
                        return;
                    }

                    if (selector) {
                        target = $$$1(selector)[0];
                    }

                    this._activate(this._element, listElement);

                    var complete = function complete() {
                        var hiddenEvent = $$$1.Event(Event.HIDDEN, {
                            relatedTarget: _this._element
                        });
                        var shownEvent = $$$1.Event(Event.SHOWN, {
                            relatedTarget: previous
                        });
                        $$$1(previous).trigger(hiddenEvent);
                        $$$1(_this._element).trigger(shownEvent);
                    };

                    if (target) {
                        this._activate(target, target.parentNode, complete);
                    } else {
                        complete();
                    }
                };

                _proto.dispose = function dispose() {
                    $$$1.removeData(this._element, DATA_KEY);
                    this._element = null;
                }; // private


                _proto._activate = function _activate(element, container, callback) {
                    var _this2 = this;

                    var activeElements;

                    if (container.nodeName === 'UL') {
                        activeElements = $$$1(container).find(Selector.ACTIVE_UL);
                    } else {
                        activeElements = $$$1(container).children(Selector.ACTIVE);
                    }

                    var active = activeElements[0];
                    var isTransitioning = callback && Util.supportsTransitionEnd() && active && $$$1(active).hasClass(ClassName.FADE);

                    var complete = function complete() {
                        return _this2._transitionComplete(element, active, isTransitioning, callback);
                    };

                    if (active && isTransitioning) {
                        $$$1(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
                    } else {
                        complete();
                    }

                    if (active) {
                        $$$1(active).removeClass(ClassName.SHOW);
                    }
                };

                _proto._transitionComplete = function _transitionComplete(element, active, isTransitioning, callback) {
                    if (active) {
                        $$$1(active).removeClass(ClassName.ACTIVE);
                        var dropdownChild = $$$1(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

                        if (dropdownChild) {
                            $$$1(dropdownChild).removeClass(ClassName.ACTIVE);
                        }

                        if (active.getAttribute('role') === 'tab') {
                            active.setAttribute('aria-selected', false);
                        }
                    }

                    $$$1(element).addClass(ClassName.ACTIVE);

                    if (element.getAttribute('role') === 'tab') {
                        element.setAttribute('aria-selected', true);
                    }

                    if (isTransitioning) {
                        Util.reflow(element);
                        $$$1(element).addClass(ClassName.SHOW);
                    } else {
                        $$$1(element).removeClass(ClassName.FADE);
                    }

                    if (element.parentNode && $$$1(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
                        var dropdownElement = $$$1(element).closest(Selector.DROPDOWN)[0];

                        if (dropdownElement) {
                            $$$1(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
                        }

                        element.setAttribute('aria-expanded', true);
                    }

                    if (callback) {
                        callback();
                    }
                }; // static


                Tab._jQueryInterface = function _jQueryInterface(config) {
                    return this.each(function () {
                        var $this = $$$1(this);
                        var data = $this.data(DATA_KEY);

                        if (!data) {
                            data = new Tab(this);
                            $this.data(DATA_KEY, data);
                        }

                        if (typeof config === 'string') {
                            if (typeof data[config] === 'undefined') {
                                throw new Error("No method named \"" + config + "\"");
                            }

                            data[config]();
                        }
                    });
                };

                _createClass(Tab, null, [{
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                }]);
                return Tab;
            }();
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
            event.preventDefault();

            Tab._jQueryInterface.call($$$1(this), 'show');
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $$$1.fn[NAME] = Tab._jQueryInterface;
        $$$1.fn[NAME].Constructor = Tab;

        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Tab._jQueryInterface;
        };

        return Tab;
    }($);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-alpha.6): index.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    (function ($$$1) {
        if (typeof $$$1 === 'undefined') {
            throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
        }

        var version = $$$1.fn.jquery.split(' ')[0].split('.');
        var minMajor = 1;
        var ltMajor = 2;
        var minMinor = 9;
        var minPatch = 1;
        var maxMajor = 4;

        if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
            throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
        }
    })($);

    exports.Util = Util;
    exports.Alert = Alert;
    exports.Button = Button;
    exports.Carousel = Carousel;
    exports.Collapse = Collapse;
    exports.Dropdown = Dropdown;
    exports.Modal = Modal;
    exports.Popover = Popover;
    exports.Scrollspy = ScrollSpy;
    exports.Tab = Tab;
    exports.Tooltip = Tooltip;

    return exports;

}({},jQuery,Popper));
//# sourceMappingURL=bootstrap.js.map


(function ($) {
    $(document).ready(function () {
        $('body').addClass('document-is-ready');
        $('#view-tools .icon-show-search-on-list').on('click', function () {
            i
            $('body').removeClass('body-show-search-on-map');
            $('body').addClass('body-show-search-on-list');
        });
        $('#view-tools .icon-show-search-on-map').on('click', function () {
            i
            $('body').addClass('body-show-search-on-map');
            $('body').removeClass('body-show-search-on-list');
        });
    });
})(jQuery);