define(["exports","event-emitter-object","local-storage-pro","visibility-state-listener","basekits"],(function(t,e,i,r,n){"use strict";function s(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var a=s(e),o=s(i),c=s(r);function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.default.call(this,{}),this.window=t.window||("undefined"==typeof window?void 0:window),this.document=t.document||("undefined"==typeof document?void 0:document),this.memory={events:[],referrer:null},this.isBusy=!1,this.storageKeys={id:"LA_ID",userTimestamp:"LA_USER_TIMESTAMP",sessionTimestamp:"LA_SESSION_TIMESTAMP"},this.sessionLifetime=1800,this.identify(),this.context={id:null,firstVisit:!1},this.visibilityState="visible",this.listenVisibilityChanges(),this.timer=null,this.startTimer(),this.queue=[],this.services=[]}function u(){this.timeout=1e4}p.prototype=Object.create(a.default.prototype),p.prototype.constructor=p,p.prototype.identify=function(){var t=o.default.getItem(this.storageKeys.id);if(t)this.updateContext({id:t});else{var e=((t=21)=>{let e="",i=t;for(;i--;)e+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return e})();this.updateContext({id:e}),o.default.setItem(this.storageKeys.id,e)}var i=this.getTimestamp(),r=o.default.getItem(this.storageKeys.userTimestamp);n.validationkit.isEmpty(r)&&(o.default.setItem(this.storageKeys.userTimestamp,i),this.updateContext({firstVisit:!0}));var s=o.default.getItem(this.storageKeys.sessionTimestamp);(n.validationkit.isEmpty(s)||this.getTimeDiff(i,s)>this.sessionLifetime)&&o.default.setItem(this.storageKeys.sessionTimestamp,i),n.validationkit.isNotEmpty(this.document)&&(this.memory.referrer=this.document.referrer)},p.prototype.listenVisibilityChanges=function(){var t=this,e=c.default({window:this.window,document:this.document});e.start(),e.emitter.on("update",(function(){var i=e.getState();i!=t.visibilityState&&(t.visibilityState=i,t.event("visibilityChange",{value:t.visibilityState}),t.emit("visibilityChange",t.visibilityState))}))},p.prototype.getVisibilityState=function(){return this.visibilityState},p.prototype.setContext=function(t){return n.typekit.isObject(t)&&(this.context=t),this},p.prototype.updateContext=function(t){return n.typekit.isObject(t)&&(this.context=Object.assign({},this.context,t)),this},p.prototype.install=function(){var t=this;return Promise.all(this.services.map((function(e){return e.install?e.install(t):Promise.resolve()})))},p.prototype.addService=function(t){return this.services.push(t),this},p.prototype.startTimer=function(){this.timer=setInterval(function(){this.emit("online"),this.event("online",{})}.bind(this),15e3)},p.prototype.clearTimer=function(){return n.validationkit.isNotEmpty(this.timer)&&(clearInterval(this.timer),this.timer=null),this},p.prototype.isFirstVisit=function(){return this.context.firstVisit},p.prototype.event=function(t,e){return this.addToQueue({name:t,params:e}),this},p.prototype.addToQueue=function(t){return this.queue.push(t),this.processQueue(),!0},p.prototype.processQueue=function(){if(!0!==this.isBusy){this.isBusy=!0;var t=this.queue.shift();return this.processEvent(t.name,t.params),this.isBusy=!1,this.queue.length>0&&this.processQueue(),!0}},p.prototype.processEvent=function(t,e){var i=n.typekit.isString(t)&&n.typekit.isNotEmpty(t)?t:void 0,r=n.typekit.isObject(e)?Object.assign({},this.context,e):void 0;if(i){var s=this.getTimestamp(),a=n.objectkit.getProp(this.getLastEvent(),"_timestamp",s),o=this.getTimeDiff(s,a),c=n.objectkit.getProp(this.getEvent(i),"_timestamp",s),p=this.getTimeDiff(s,c),u={name:i,params:r,_timestamp:s,_timeDiffFromLastEvent:o,_timeDiffFromSameEvent:p};this.memory.events.push(u),0!==this.services.length?Promise.all(this.services.map(function(t){return t.event(i,r)}.bind(this))):this.emit("error",["NO_SERVICE_INSTALLED",new Error("NO_SERVICE_INSTALLED")])}else this.emit("error",["INVALID_EVENT_NAME",new Error("INVALID_EVENT_NAME"),{name:i}])},p.prototype.getEvent=function(t){var e=this.memory.events.length;if(!(e<1))for(var i=e-1;i>=0;i--)if(this.memory.events[i].name==t)return this.memory.events[i]},p.prototype.getLastEvent=function(){var t=this.memory.events.length;return t>0?this.memory.events[t-1]:void 0},p.prototype.getTimestamp=function(){return Date.now()},p.prototype.getTimeDiff=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"seconds",r="seconds"==i?1e3:1;return Math.floor((t-e)/r)},u.prototype.reCSSExt=/(.css)/,u.prototype.supportedLocations=["bodyEnd","bodyStart","headEnd"],u.prototype.inject=function(t,e){var i=this;if(!e.id)throw new Error("Missing id for an injected script.");var r=i.reCSSExt.test(t),n=r?"link":"script";return new Promise((function(s,a){if(document.getElementById(e.id))return s(e.id);var o=setTimeout((function(){return a(new Error("TIMEOUT"))}),i.timeout),c=document.createElement(n);function p(){return r&&(c.media=e.media||"all"),clearTimeout(o),s(e.id)}c.id=e.id,"link"==n&&(c.rel="stylesheet",c.href=t,c.media="only x"),"script"==n&&(c.type=e.type||"text/javascript",c.async=!e.hasOwnProperty("async")||e.async),e.attrs&&Object.keys(e.attrs).map((function(t){return c.setAttribute(t,e.attrs[t])})),c.addEventListener?c.addEventListener("load",p,!1):c.readyState?c.onreadystatechange=p:c.onload&&(c.onload=p),c.onerror&&(c.onerror=function(t){return clearTimeout(o),a(t)}),"script"==n&&(c.src=t),i.injectToLocation(c,e.location)}))},u.prototype.injectJSONLD=function(t,e){if(e.id&&document.getElementById(e.id))return null;var i=document.createElement("script");i.type="application/ld+json",e.id&&(i.id=e.id),e.attrs&&Object.keys(e.attrs).map((function(t){return i.setAttribute(t,e.attrs[t])})),i.text="string"==typeof t?t:JSON.stringify(t),this.injectToLocation(i,e.location)},u.prototype.injectToLocation=function(t,e){var i=e||this.supportedLocations[0];if(-1!==this.supportedLocations.indexOf(i)){var r=document.getElementsByTagName("head")[0],n=document.getElementsByTagName("body")[0];"headEnd"==i?r.insertBefore(t,null):"bodyEnd"==i?n.insertBefore(t,null):"bodyStart"==i&&n.insertBefore(t,n.firstChild)}},u.prototype.remove=function(t){var e=document.getElementById(t);e&&e.parentNode.removeChild(e)};var m=new u;function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.id=t.id,this.userID=t.userID,this.initOpts={send_page_view:!1},this.userID&&(this.initOpts.user_id=this.userID),this.ready=!1,this.client=null,this.scriptTagID="lighthouse-service-google-analytics",this.scriptURL="https://www.googletagmanager.com/gtag/js?id="+this.id,this.reservedEventNames={screenView:"screen_view",time:"timing_complete",error:"exception",share:"share",search:"search",login:"login",signup:"sign_up"},this.parameterReference={screen_view:{params:["screen_name","app_name","app_id","app_version","app_installer_id"],match:{title:"screen_name",appName:"app_name",appID:"app_id",appVersion:"app_version",appInstallerID:"app_installer_id"},requiredParams:["screen_name","app_name"]},timing_complete:{params:["name","value","event_category","event_label"],match:{name:"event_category",category:"name",value:"value"},requiredParams:["name","value"]},exception:{params:["description","fatal"],match:{debug:"description"},requiredParams:["description"]},share:{params:["method","content_id","content_type"],match:{channel:"method",id:"content_id"},requiredParams:["method"]},search:{params:["term"],match:{term:"term"},requiredParams:["term"]}}}d.prototype.install=function(t){var e=this;return e.client=t,e.client.window.dataLayer=e.client.window.dataLayer||[],e.client.window.gtag=function(){dataLayer.push(arguments)},e.client.window.gtag("js",new Date),e.client.window.gtag("config",e.id,e.initOpts),new Promise((function(t,i){m.inject(e.scriptURL,{id:e.scriptTagID,location:"bodyEnd"}).then((function(){return e.ready=!0,t()})).catch((function(i){return e.client.emit("error",i),t()}))}))},d.prototype.event=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!0===this.ready){var i=this.findLocalEventName(t,e);if("screen_view"==i){var r=this.generatePageLoadParams(e);n.typekit.isObject(r)&&this.client.window.gtag("config",this.id,r)}var s=this.generateLocalParams(i,e);if(!n.typekit.isUndefined(s)){var a=this.parameterReference.hasOwnProperty(i);if(a){var o=this.parameterReference[i];if(o.hasOwnProperty("requiredParams")){var c=o.requiredParams.filter((function(t){return!0!==s.hasOwnProperty(t)}));if(c&&c.length>0)return void this.client.emit("error",[new Error("MISSING_PARAMS"),c.join(",")])}}this.client.window.gtag("event",i,s)}}},d.prototype.findLocalEventName=function(t,e){return"view"==t&&"screen"==n.objectkit.getProp(e,"category","")?this.reservedEventNames.screenView:this.reservedEventNames.hasOwnProperty(t)?this.reservedEventNames[t]:t},d.prototype.generateLocalParams=function(t,e){this.client.kit;var i=this.parameterReference.hasOwnProperty(t);if(i||e.hasOwnProperty("value")){if(!i&&e.hasOwnProperty("value"))return Object.assign({},{event_callback:function(){}},{event_label:e.value,event_category:"engagement"});var r=this.parameterReference[t],s=n.typekit.isObject(e.googleAnalytics)?e.googleAnalytics:{},a=Object.keys(r.match).reduce((function(t,i){return e.hasOwnProperty(i)&&(t[r.match[i]]=e[i]),t}),{});return Object.assign({},{event_callback:function(){}},a,s)}},d.prototype.generatePageLoadParams=function(t){this.client.kit;if(t.hasOwnProperty("path")&&n.validationkit.isNotEmpty(t.path)){var e={page_path:t.path,page_title:t.title};return n.validationkit.isNotEmpty(t.url)&&(e.page_location=t.url),e}},t.LAGoogleAnalytics=d,t.LighthouseAnalytics=p,Object.defineProperty(t,"__esModule",{value:!0})}));
