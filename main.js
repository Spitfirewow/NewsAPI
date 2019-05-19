/*! For license information please see main.js.LICENSE */
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){t.exports=n(7)},function(t,e){function n(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)})}}},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"body{\n    margin: 0 auto;\n    min-width: 700px;\n}\n\n.requestWrapper{\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.request{\n    display: flex;\n    justify-content: center;\n    width: 90%;\n    height: 45px;\n    padding: 10px 0;\n    padding-bottom: 0;\n    max-width: 1100px;\n}\n\n.requestInput{\n    width: 90%;\n    border-width: 3px;\n    border-right: 0;\n    border-style: solid;\n    border-color: #c20855;\n    padding-left: 10px;\n    box-sizing: border-box;\n}\n\n.requestBtn{\n    width: 100px;\n    background-color: #c20855;\n    border: none;\n}\n\n.requestBtn:active{\n    background-color: #830137;\n}\n\n.requestBtn, .requestInput{\n    color: black;\n    font-size: 19px;\n    outline: none;\n}\n\n.sourceFilterWrapper{\n    margin: 30px 0;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.sourceFilter{\n    outline: none;\n    display: flex;\n    flex-wrap: nowrap;\n    width: 90%;\n    max-width: 1100px;\n    height: 90px;\n    overflow: auto;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    border-width: 0px 0px 0px 0px;\n    border-style: solid;\n    border-color: #dae2e3;\n}\n\n.sourceBtn{\n    height: 45px;\n    background: 0;\n    box-sizing: border-box;\n    border-width: 3px;\n    border-style: solid;\n    border-color: #c20855;\n    outline: none;\n    margin-left: 10px;\n    padding: 5px;\n    font-size: 20px;\n    cursor: pointer;\n    white-space: nowrap;\n}\n\n.sourceBtn:first-child{\n    margin-left: 0;\n}\n\n.newWrapper{\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    margin: 10px 0 15px 0;\n}\n\n.news{\n    width: 90%;\n    max-width: 1100px;\n    display: flex;\n    justify-content: center;\n    -webkit-box-shadow: 5px 5px 5px 0px rgba(166,166,166,0.82);\n    -moz-box-shadow: 5px 5px 5px 0px rgba(166,166,166,0.82);\n    box-shadow: 5px 5px 5px 0px rgba(166,166,166,0.82);\n    box-sizing: border-box;\n}\n\n.newHeadline{\n    margin: 0;\n    margin-bottom: 5px;\n}\n\n.newPicture{\n    width: 30%;\n    min-height: 100px;\n    background-size: cover;\n}\n\n.newSource{\n    display: block;\n    color: #a2a2a2;\n    margin-bottom: 20px;\n}\n\n.newDescription{\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial,sans-serif;\n    font-size: 17px;\n    padding-bottom: 25px;\n}\n\n.newContent{\n    box-sizing: border-box;\n    width: 70%;\n    word-wrap: break-word;\n    padding: 10px;\n}\n\n.buttonWrapper{\n    margin: 20px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.moreBtn{\n    font-size: 75px;\n    background: none;\n    border: none;\n    outline: none;\n    color: \t#c20855;\n    padding: 0;\n}\n\n.moreBtn:active{\n    color: #86043b;\n}\n\n.moreBtn:hover{\n    cursor: pointer;\n}\n\n.newLink{\n    display: block;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n    color:inherit;\n}\n\n.failMsgWrapper{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n}\n\n.failMsg{\n    width: 100%;\n    text-align: center;\n}\n\n.newsContainer{\n    margin: 0;\n    width: 100%;\n}\n\n.poweredBy{\n    font-size: 20px;\n    text-align: center;\n}\n\n.poweredBy a{\n    text-decoration: none;\n    color: red;\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),s=null,u=0,l=[],f=n(6);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:c}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function h(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertAt.before,n);n.insertBefore(e,o)}}function y(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return v(e,t.attrs),h(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=u++;n=s||(s=m(e)),r=b.bind(null,n,a,!1),o=b.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n,e),o=function(){y(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){y(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(c=i[a.id]).refs--,r.push(c)}t&&p(d(t,e),e);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var w,x=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function b(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new B(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?d:f,s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",f="suspendedYield",p="executing",d="completed",h={};function y(){}function m(){}function v(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(N([])));x&&x!==n&&r.call(x,i)&&(g=x);var b=v.prototype=y.prototype=Object.create(g);function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){var e;this._invoke=function(n,o){function i(){return new Promise(function(e,i){!function e(n,o,i,a){var c=u(t[n],t,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){s.value=t,i(s)},function(t){return e("throw",t,i,a)})}a(c.arg)}(n,o,e,i)})}return e=e?e.then(i,i):i()}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return m.prototype=b.constructor=v,v.constructor=m,v[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,n,r,o){var i=new E(s(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},L(b),b[c]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=N,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";n.r(e);n(2);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),c="5c8375b6786a4a189c5ee937d297e674";function s(){this.currNews=[],this.sources=[]}s.prototype.GetSources=a()(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://newsapi.org/v2/sources?apiKey=".concat(c),n=new Request(e),t.next=4,fetch(n);case 4:return t.next=6,t.sent.json();case 6:this.sources=t.sent.sources;case 7:case"end":return t.stop()}},t,this)})),s.prototype.Load=function(){var t=a()(o.a.mark(function t(e){var n,r,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://newsapi.org/v2/".concat(e,"&apiKey=").concat(c),r=new Request(n),t.next=4,fetch(r);case 4:return t.next=6,t.sent.json();case 6:i=t.sent.articles,this.currNews=i&&i.length?i:[];case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();function u(t){this.model=t,this.currDisplayed=0}function l(t){document.querySelector(t).style.display="none"}function f(t){document.querySelector(t).style.display="unset"}function p(t,e){return t.querySelector(".newPicture").style.backgroundImage='url("'.concat(e.urlToImage,'")'),t.querySelector(".newLink").setAttribute("href",e.url),t.querySelector(".newHeadline").textContent=e.title,t.querySelector(".newSource").textContent=e.source.name,t.querySelector(".newDescription").textContent=e.description,t}u.prototype.RemoveNews=function(){for(var t=document.getElementsByClassName("newWrapper");t.length;)t[0].parentNode.removeChild(t[0]);this.currDisplayed=0,f(".failMsg"),l(".moreBtn")},u.prototype.DisplayNews=function(){for(var t=5,e=document.getElementById("newsContainer"),n=document.createDocumentFragment(),r=document.getElementById("newTpl");t--&&this.currDisplayed<this.model.currNews.length&&this.currDisplayed<40;)n.appendChild(p(r.content.cloneNode(!0),this.model.currNews[this.currDisplayed++]));e.appendChild(n),this.currDisplayed==this.model.currNews.length||40==this.currDisplayed?l(".moreBtn"):f(".moreBtn")},u.prototype.DisplaySources=a()(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.model.GetSources();case 2:e=document.getElementById("sourceTpl"),n=document.getElementById("sourceFilter"),this.model.sources.forEach(function(t){var r=e.content.cloneNode(!0).querySelector(".sourceBtn");r.textContent=t.name,r.id=t.id,n.appendChild(r)});case 5:case"end":return t.stop()}},t,this)})),u.prototype.DisplayRequest=function(){var t=a()(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.model.Load(e);case 2:this.RemoveNews(),this.model.currNews.length&&(l(".failMsg"),this.DisplayNews());case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();var d=new u(new s);document.getElementById("moreBtn").onclick=d.DisplayNews.bind(d),d.DisplaySources(),d.DisplayRequest("top-headlines?country=us"),document.getElementById("sourceFilter").addEventListener("click",function(t){d.DisplayRequest("everything?sources=".concat(t.target.id))}),document.getElementById("requestBtn").addEventListener("click",function(t){t.preventDefault();var e=document.getElementById("requestInput").value;e.trim()?d.DisplayRequest("top-headlines?q=".concat(e)):d.DisplayRequest("top-headlines?country=us")}),document.getElementById("requestInput").addEventListener("keyup",function(t){t.preventDefault(),13==t.keyCode&&document.getElementById("requestBtn").click()})}]);