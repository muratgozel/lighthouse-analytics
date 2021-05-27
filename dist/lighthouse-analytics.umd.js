!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("event-emitter-object"),require("visibility-state-listener"),require("basekits")):"function"==typeof define&&define.amd?define(["exports","event-emitter-object","visibility-state-listener","basekits"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).LighthouseAnalytics={},e.EventEmitterObject,e.VisibilityStateListener,e.Basekits)}(this,(function(e,t,n,r){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(n),a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=Object.assign?Object.assign:function(e,t,n,r){for(var i=1;i<arguments.length;i++)p(Object(arguments[i]),(function(t,n){e[n]=t}));return e},u=function(){if(Object.create)return function(e,t,n,r){var i=d(arguments,1);return c.apply(this,[Object.create(e)].concat(i))};{function e(){}return function(t,n,r,i){var o=d(arguments,1);return e.prototype=t,c.apply(this,[new e].concat(o))}}}(),s=String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},l="undefined"!=typeof window?window:a,f={assign:c,create:u,trim:s,bind:function(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}},slice:d,each:p,map:function(e,t){var n=m(e)?[]:{};return g(e,(function(e,r){return n[r]=t(e,r),!1})),n},pluck:g,isList:m,isFunction:function(e){return e&&"[object Function]"==={}.toString.call(e)},isObject:function(e){return e&&"[object Object]"==={}.toString.call(e)},Global:l};function d(e,t){return Array.prototype.slice.call(e,t||0)}function p(e,t){g(e,(function(e,n){return t(e,n),!1}))}function g(e,t){if(m(e)){for(var n=0;n<e.length;n++)if(t(e[n],n))return e[n]}else for(var r in e)if(e.hasOwnProperty(r)&&t(e[r],r))return e[r]}function m(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length}var y=f.slice,v=f.pluck,h=f.each,b=f.bind,w=f.create,j=f.isList,_=f.isFunction,S=f.isObject,E={createStore:P},O={version:"2.0.12",enabled:!1,get:function(e,t){var n=this.storage.read(this._namespacePrefix+e);return this._deserialize(n,t)},set:function(e,t){return void 0===t?this.remove(e):(this.storage.write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this.storage.remove(this._namespacePrefix+e)},each:function(e){var t=this;this.storage.each((function(n,r){e.call(t,t._deserialize(n),(r||"").replace(t._namespaceRegexp,""))}))},clearAll:function(){this.storage.clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},createStore:function(){return P.apply(this,arguments)},addPlugin:function(e){this._addPlugin(e)},namespace:function(e){return P(this.storage,this.plugins,e)}};function P(e,t,n){n||(n=""),e&&!j(e)&&(e=[e]),t&&!j(t)&&(t=[t]);var r=n?"__storejs_"+n+"_":"",i=n?new RegExp("^"+r):null;if(!/^[a-zA-Z0-9_\-]*$/.test(n))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var o=w({_namespacePrefix:r,_namespaceRegexp:i,_testStorage:function(e){try{var t="__storejs__test__";e.write(t,t);var n=e.read(t)===t;return e.remove(t),n}catch(e){return!1}},_assignPluginFnProp:function(e,t){var n=this[t];this[t]=function(){var t=y(arguments,0),r=this;function i(){if(n)return h(arguments,(function(e,n){t[n]=e})),n.apply(r,t)}var o=[i].concat(t);return e.apply(r,o)}},_serialize:function(e){return JSON.stringify(e)},_deserialize:function(e,t){if(!e)return t;var n="";try{n=JSON.parse(e)}catch(t){n=e}return void 0!==n?n:t},_addStorage:function(e){this.enabled||this._testStorage(e)&&(this.storage=e,this.enabled=!0)},_addPlugin:function(e){var t=this;if(j(e))h(e,(function(e){t._addPlugin(e)}));else if(!v(this.plugins,(function(t){return e===t}))){if(this.plugins.push(e),!_(e))throw new Error("Plugins must be function values that return objects");var n=e.call(this);if(!S(n))throw new Error("Plugins must return an object of function properties");h(n,(function(n,r){if(!_(n))throw new Error("Bad plugin property: "+r+" from plugin "+e.name+". Plugins should only return functions.");t._assignPluginFnProp(n,r)}))}},addStorage:function(e){!function(){var e="undefined"==typeof console?null:console;if(e){(e.warn?e.warn:e.log).apply(e,arguments)}}("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(e)}},O,{plugins:[]});return o.raw={},h(o,(function(e,t){_(e)&&(o.raw[t]=b(o,e))})),h(e,(function(e){o._addStorage(e)})),h(t,(function(e){o._addPlugin(e)})),o}var k=f.Global,I={name:"localStorage",read:x,write:function(e,t){return A().setItem(e,t)},each:function(e){for(var t=A().length-1;t>=0;t--){var n=A().key(t);e(x(n),n)}},remove:function(e){return A().removeItem(e)},clearAll:function(){return A().clear()}};function A(){return k.localStorage}function x(e){return A().getItem(e)}var T=f.Global,N={name:"sessionStorage",read:R,write:function(e,t){return G().setItem(e,t)},each:function(e){for(var t=G().length-1;t>=0;t--){var n=G().key(t);e(R(n),n)}},remove:function(e){return G().removeItem(e)},clearAll:function(){return G().clear()}};function G(){return T.sessionStorage}function R(e){return G().getItem(e)}var L=f.trim,B={name:"cookieStorage",read:function(e){if(!e||!D(e))return null;var t="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(F.cookie.replace(new RegExp(t),"$1"))},write:function(e,t){if(!e)return;F.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/"},each:C,remove:M,clearAll:function(){C((function(e,t){M(t)}))}},F=f.Global.document;function C(e){for(var t=F.cookie.split(/; ?/g),n=t.length-1;n>=0;n--)if(L(t[n])){var r=t[n].split("="),i=unescape(r[0]);e(unescape(r[1]),i)}}function M(e){e&&D(e)&&(F.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function D(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(F.cookie)}var q={name:"memoryStorage",read:function(e){return z[e]},write:function(e,t){z[e]=t},each:function(e){for(var t in z)z.hasOwnProperty(t)&&e(z[t],t)},remove:function(e){delete z[e]},clearAll:function(e){z={}}},z={};var V,J=E.createStore([I,N,B,q],[]),U=function(e,t){var n="000000000"+e;return n.substr(n.length-t)},$=U,H="object"==typeof window?window:self,K=Object.keys(H).length,X=$(((navigator.mimeTypes?navigator.mimeTypes.length:0)+navigator.userAgent.length).toString(36)+K.toString(36),4),Z="undefined"!=typeof window&&(window.crypto||window.msCrypto)||"undefined"!=typeof self&&self.crypto;if(Z){var W=Math.pow(2,32)-1;V=function(){return Math.abs(Z.getRandomValues(new Uint32Array(1))[0]/W)}}else V=Math.random;var Y=function(){return X},Q=U,ee=V,te=0,ne=Math.pow(36,4);function re(){return Q((ee()*ne<<0).toString(36),4)}function ie(){return te=te<ne?te:0,++te-1}function oe(){return"c"+(new Date).getTime().toString(36)+Q(ie().toString(36),4)+Y()+(re()+re())}oe.slug=function(){var e=(new Date).getTime().toString(36),t=ie().toString(36).slice(-4),n=Y().slice(0,1)+Y().slice(-1),r=re().slice(-2);return e.slice(-2)+t+n+r},oe.isCuid=function(e){return"string"==typeof e&&!!e.startsWith("c")},oe.isSlug=function(e){if("string"!=typeof e)return!1;var t=e.length;return t>=7&&t<=10},oe.fingerprint=Y;var ae=oe;var ce=function(){var e=0,t=["bodyEnd","bodyStart","headEnd"];function n(e){return e.split("/").reverse()[0].split("?")[0]}function r(t){return t.replace(/[^a-zA-Z0-9]/g,"-").split("-").reverse().join("-")+"-"+e}return{create:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o={timeout:3e3};function a(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,c={id:null,type:"text/javascript",async:!0,attrs:{},location:t[0],global:null};return"[object Object]"===Object.prototype.toString.call(a)&&Object.keys(c).map((function(e){a.hasOwnProperty(e)&&(c[e]=a[e])})),c.id||(c.id=r(n(i)),e+=1),new Promise((function(e,t){if(document.getElementById(c.id))return e(c.id);var n=setTimeout((function(){return t(new Error("Inject timeout."))}),o.timeout),r=document.createElement("script");function a(){if(clearTimeout(n),!c.global)return e(c.id);var r=0,i=setInterval((function(){return r+=1,window[c.global]?(clearInterval(i),e(c.id)):r>=20?t(new Error("Max call size exceeded. Given up looking for global property.")):void 0}),100)}r.id=c.id,r.type=c.type,r.async=c.async,c.attrs&&Object.keys(c.attrs).map((function(e){r.setAttribute(e,c.attrs[e])})),r.addEventListener?r.addEventListener("load",a,!1):r.readyState?r.onreadystatechange=a:r.onload&&(r.onload=a),r.onerror&&(r.onerror=function(e){return clearTimeout(n),t(e)}),r.src=i,l(r,c.location)}))}function c(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,c={id:null,type:"text/css",media:"all",attrs:{},location:t[0]};return"[object Object]"===Object.prototype.toString.call(a)&&Object.keys(c).map((function(e){a.hasOwnProperty(e)&&(c[e]=a[e])})),c.id||(c.id=r(n(i)),e+=1),new Promise((function(e,t){if(document.getElementById(c.id))return e(c.id);var n=setTimeout((function(){return t(new Error("Inject timeout."))}),o.timeout),r=document.createElement("link");function a(){return r.media=c.media,clearTimeout(n),e(c.id)}r.id=c.id,r.rel="stylesheet",r.href=i,r.media="only x",c.attrs&&Object.keys(c.attrs).map((function(e){r.setAttribute(e,c.attrs[e])})),r.addEventListener?r.addEventListener("load",a,!1):r.readyState?r.onreadystatechange=a:r.onload&&(r.onload=a),r.onerror&&(r.onerror=function(e){return clearTimeout(n),t(e)}),l(r,c.location)}))}function u(n,r){var i={id:null,type:"application/ld+json",attrs:{},location:t[0]};if("[object Object]"===Object.prototype.toString.call(r)&&Object.keys(i).map((function(e){r.hasOwnProperty(e)&&(i[e]=r[e])})),i.id||(i.id=e,e+=1),document.getElementById(i.id))return i.id;var o=document.createElement("script");return o.id=i.id,o.type=i.type,o.text="string"==typeof n?n:JSON.stringify(n),i.attrs&&Object.keys(i.attrs).map((function(e){o.setAttribute(e,i.attrs[e])})),l(o,i.location),i.id}function s(e){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}function l(e,t){var n=document.getElementsByTagName("head")[0],r=document.getElementsByTagName("body")[0];"headEnd"==t?n.insertBefore(e,null):"bodyEnd"==t?r.insertBefore(e,null):"bodyStart"==t&&r.insertBefore(e,r.firstChild)}return"[object Object]"===Object.prototype.toString.call(i)&&Object.keys(o).map((function(e){i.hasOwnProperty(e)&&(o[e]=i[e])})),{injectjs:a,injectcss:c,injectjsonld:u,remove:s}}}}();e.GoogleAnalytics=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(r.typekit.isEmpty(e.property))throw new Error("Specify Google Analytics property.");var t=ce.create(),n={name:"Google Analytics",property:e.property,userID:r.objectkit.getProp(e,"userID",null),localEventNames:{SCREEN:"screen_view",TIMING:"timing_complete",EXCEPTION:"exception",SHARE:"share",SEARCH:"search",SIGNIN:"login",SIGNUP:"sign_up"}};function i(){window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",n.property,{send_page_view:!1,user_id:n.userID});var e="https://www.googletagmanager.com/gtag/js?id="+n.property;return t.injectjs(e,{id:"lighthouse-service-google-analytics",location:"headEnd"})}function o(e,t){var i=r.objectkit.getProp(n.localEventNames,e.name,e.name),o={};if("SCREEN"==e.name){var a={title:r.objectkit.getProp(e.params,"title",document.title),page_location:r.objectkit.getProp(e.params,"url",location.href),page_path:r.objectkit.getProp(e.params,"path",location.pathname)};window.gtag("config",n.property,a),o.screen_name=r.objectkit.getProp(e.params,"title",document.title),t.app.name&&(o.app_name=t.app.name),t.app.version&&(o.app_version=t.app.version)}else"EXCEPTION"==e.name?o.description=e.params.error.message:"SHARE"==e.name?(o.event_category=e.params.channel,o.event_label=r.objectkit.getProp(e.params,"url",location.href)):"SEARCH"==e.name?(o.event_category="engagement",o.event_label=e.params.query):"SIGNIN"==e.name||"SIGNUP"==e.name?(o.event_category="engagement",o.event_label=e.params.method):(o.event_category="engagement",o.event_label=e.params.value||"");window.gtag("event",i,o)}function a(){window["ga-disable-"+n.property]=!0}function c(){window["ga-disable-"+n.property]=!1}return{name:n.name,init:i,send:o,disable:a,enable:c}},e.LighthouseAnalytics=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};function n(){var e={},t=0,n=0;return{enqueue:function(t){e[n]=t,n++},dequeue:function(){var n=e[t];return delete e[t],t++,n},peek:function(){return e[t]},length:function(){return n-t}}}var i={trackVisibility:!0,collectReferrer:!0},a=Object.assign({},i,e),c=t.create();a.window||"undefined"==typeof window||window;var u=a.document||("undefined"==typeof document?void 0:document),s={storageKeys:{did:"LA_DID"}},l=[],f=n(),d={did:null,new:!1,user:{id:null},app:{name:null,version:null,id:null}};function p(){var e=J.get(s.storageKeys.did);r.validationkit.isEmpty(e)&&(d.new=!0,e=ae(),J.set(s.storageKeys.did,e)),d.did=e,a.collectReferrer&&(d.referrer=u.referrer)}function g(e){e.hasOwnProperty("id")&&(d.user.id=e.id)}function m(e){Object.keys(d.app).map((function(t){e.hasOwnProperty(t)&&(d.app[t]=e[t])}))}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Date.now(),i={name:e,timestamp:n,params:t};0===f.length()&&(i.firstVisitMaybe=d.new,a.collectReferrer&&(i.referrer=r.validationkit.isNotEmpty(d.referrer)?d.referrer:null)),f.enqueue(i),l.length>0&&l.map((function(e){return e.send(f.dequeue(),d)})),c.emit("activity",[i,d])}function v(e){return l.push(e)&&e.init()}return p(),a.trackVisibility&&(d.currentVisibility="visible",o.default.on("update",(function(e){d.currentVisibility=e,c.emit("visibility",[e]),y("VISIBILITY",{value:e})})),o.default.start()),{on:c.on,newActivity:y,setUser:g,setApp:m,newService:v}},Object.defineProperty(e,"__esModule",{value:!0})}));
