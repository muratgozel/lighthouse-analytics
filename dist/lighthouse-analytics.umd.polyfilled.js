!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("event-emitter-object"),require("local-storage-pro"),require("visibility-state-listener"),require("basekits")):"function"==typeof define&&define.amd?define(["exports","event-emitter-object","local-storage-pro","visibility-state-listener","basekits"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).LighthouseAnalytics={},t.EventEmitterObject,t.LocalStoragePro,t.VisibilityStateListener,t.Basekits)}(this,(function(t,e,n,r,i){"use strict";function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var a=o(e),c=o(n),s=o(r),u=function(t){try{return!!t()}catch(t){return!0}},f={}.toString,l=function(t){return f.call(t).slice(8,-1)},p="".split,h=u((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==l(t)?p.call(t,""):Object(t)}:Object,d=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},v=function(t){return h(d(t))},y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function m(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var g,b=function(t){return t&&t.Math==Math&&t},w=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof y&&y)||Function("return this")(),E=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),S=function(t){return"object"==typeof t?null!==t:"function"==typeof t},j=w.document,O=S(j)&&S(j.createElement),T=function(t){return O?j.createElement(t):{}},x=!E&&!u((function(){return 7!=Object.defineProperty(T("div"),"a",{get:function(){return 7}}).a})),_=function(t){if(!S(t))throw TypeError(String(t)+" is not an object");return t},P=function(t,e){if(!S(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!S(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!S(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!S(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},I=Object.defineProperty,L={f:E?I:function(t,e,n){if(_(t),e=P(e,!0),_(n),x)try{return I(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},A=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},k=E?function(t,e,n){return L.f(t,e,A(1,n))}:function(t,e,n){return t[e]=n,t},R=function(t,e){try{k(w,t,e)}catch(n){w[t]=e}return e},N="__core-js_shared__",C=w[N]||R(N,{}),M=m((function(t){(t.exports=function(t,e){return C[t]||(C[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),D={}.hasOwnProperty,V=function(t,e){return D.call(t,e)},q=0,B=Math.random(),F=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++q+B).toString(36)},U=!!Object.getOwnPropertySymbols&&!u((function(){return!String(Symbol())})),G=U&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,K=M("wks"),z=w.Symbol,H=G?z:z&&z.withoutSetter||F,Q=function(t){return V(K,t)||(U&&V(z,t)?K[t]=z[t]:K[t]=H("Symbol."+t)),K[t]},W=Math.ceil,Y=Math.floor,$=function(t){return isNaN(t=+t)?0:(t>0?Y:W)(t)},J=Math.min,X=function(t){return t>0?J($(t),9007199254740991):0},Z=Math.max,tt=Math.min,et=function(t){return function(e,n,r){var i,o=v(e),a=X(o.length),c=function(t,e){var n=$(t);return n<0?Z(n+e,0):tt(n,e)}(r,a);if(t&&n!=n){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((t||c in o)&&o[c]===n)return t||c||0;return!t&&-1}},nt={includes:et(!0),indexOf:et(!1)},rt={},it=nt.indexOf,ot=function(t,e){var n,r=v(t),i=0,o=[];for(n in r)!V(rt,n)&&V(r,n)&&o.push(n);for(;e.length>i;)V(r,n=e[i++])&&(~it(o,n)||o.push(n));return o},at=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ct=Object.keys||function(t){return ot(t,at)},st=E?Object.defineProperties:function(t,e){_(t);for(var n,r=ct(e),i=r.length,o=0;i>o;)L.f(t,n=r[o++],e[n]);return t},ut=w,ft=function(t){return"function"==typeof t?t:void 0},lt=function(t,e){return arguments.length<2?ft(ut[t])||ft(w[t]):ut[t]&&ut[t][e]||w[t]&&w[t][e]},pt=lt("document","documentElement"),ht=M("keys"),dt=function(t){return ht[t]||(ht[t]=F(t))},vt=dt("IE_PROTO"),yt=function(){},mt=function(t){return"<script>"+t+"</"+"script>"},gt=function(){try{g=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;gt=g?function(t){t.write(mt("")),t.close();var e=t.parentWindow.Object;return t=null,e}(g):((e=T("iframe")).style.display="none",pt.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(mt("document.F=Object")),t.close(),t.F);for(var n=at.length;n--;)delete gt.prototype[at[n]];return gt()};rt[vt]=!0;var bt=Object.create||function(t,e){var n;return null!==t?(yt.prototype=_(t),n=new yt,yt.prototype=null,n[vt]=t):n=gt(),void 0===e?n:st(n,e)},wt=Q("unscopables"),Et=Array.prototype;null==Et[wt]&&L.f(Et,wt,{configurable:!0,value:bt(null)});var St=function(t){Et[wt][t]=!0},jt={},Ot=Function.toString;"function"!=typeof C.inspectSource&&(C.inspectSource=function(t){return Ot.call(t)});var Tt,xt,_t,Pt=C.inspectSource,It=w.WeakMap,Lt="function"==typeof It&&/native code/.test(Pt(It)),At=w.WeakMap;if(Lt){var kt=new At,Rt=kt.get,Nt=kt.has,Ct=kt.set;Tt=function(t,e){return Ct.call(kt,t,e),e},xt=function(t){return Rt.call(kt,t)||{}},_t=function(t){return Nt.call(kt,t)}}else{var Mt=dt("state");rt[Mt]=!0,Tt=function(t,e){return k(t,Mt,e),e},xt=function(t){return V(t,Mt)?t[Mt]:{}},_t=function(t){return V(t,Mt)}}var Dt,Vt,qt,Bt={set:Tt,get:xt,has:_t,enforce:function(t){return _t(t)?xt(t):Tt(t,{})},getterFor:function(t){return function(e){var n;if(!S(e)||(n=xt(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},Ft={}.propertyIsEnumerable,Ut=Object.getOwnPropertyDescriptor,Gt={f:Ut&&!Ft.call({1:2},1)?function(t){var e=Ut(this,t);return!!e&&e.enumerable}:Ft},Kt=Object.getOwnPropertyDescriptor,zt={f:E?Kt:function(t,e){if(t=v(t),e=P(e,!0),x)try{return Kt(t,e)}catch(t){}if(V(t,e))return A(!Gt.f.call(t,e),t[e])}},Ht=m((function(t){var e=Bt.get,n=Bt.enforce,r=String(String).split("String");(t.exports=function(t,e,i,o){var a=!!o&&!!o.unsafe,c=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof i&&("string"!=typeof e||V(i,"name")||k(i,"name",e),n(i).source=r.join("string"==typeof e?e:"")),t!==w?(a?!s&&t[e]&&(c=!0):delete t[e],c?t[e]=i:k(t,e,i)):c?t[e]=i:R(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||Pt(this)}))})),Qt=at.concat("length","prototype"),Wt={f:Object.getOwnPropertyNames||function(t){return ot(t,Qt)}},Yt={f:Object.getOwnPropertySymbols},$t=lt("Reflect","ownKeys")||function(t){var e=Wt.f(_(t)),n=Yt.f;return n?e.concat(n(t)):e},Jt=function(t,e){for(var n=$t(e),r=L.f,i=zt.f,o=0;o<n.length;o++){var a=n[o];V(t,a)||r(t,a,i(e,a))}},Xt=/#|\.prototype\./,Zt=function(t,e){var n=ee[te(t)];return n==re||n!=ne&&("function"==typeof e?u(e):!!e)},te=Zt.normalize=function(t){return String(t).replace(Xt,".").toLowerCase()},ee=Zt.data={},ne=Zt.NATIVE="N",re=Zt.POLYFILL="P",ie=Zt,oe=zt.f,ae=function(t,e){var n,r,i,o,a,c=t.target,s=t.global,u=t.stat;if(n=s?w:u?w[c]||R(c,{}):(w[c]||{}).prototype)for(r in e){if(o=e[r],i=t.noTargetGet?(a=oe(n,r))&&a.value:n[r],!ie(s?r:c+(u?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;Jt(o,i)}(t.sham||i&&i.sham)&&k(o,"sham",!0),Ht(n,r,o,t)}},ce=function(t){return Object(d(t))},se=!u((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),ue=dt("IE_PROTO"),fe=Object.prototype,le=se?Object.getPrototypeOf:function(t){return t=ce(t),V(t,ue)?t[ue]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?fe:null},pe=Q("iterator"),he=!1;[].keys&&("next"in(qt=[].keys())?(Vt=le(le(qt)))!==Object.prototype&&(Dt=Vt):he=!0),null==Dt&&(Dt={}),V(Dt,pe)||k(Dt,pe,(function(){return this}));var de={IteratorPrototype:Dt,BUGGY_SAFARI_ITERATORS:he},ve=L.f,ye=Q("toStringTag"),me=function(t,e,n){t&&!V(t=n?t:t.prototype,ye)&&ve(t,ye,{configurable:!0,value:e})},ge=de.IteratorPrototype,be=function(){return this},we=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return _(n),function(t){if(!S(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(r),e?t.call(n,r):n.__proto__=r,n}}():void 0),Ee=de.IteratorPrototype,Se=de.BUGGY_SAFARI_ITERATORS,je=Q("iterator"),Oe="keys",Te="values",xe="entries",_e=function(){return this},Pe=function(t,e,n,r,i,o,a){!function(t,e,n){var r=e+" Iterator";t.prototype=bt(ge,{next:A(1,n)}),me(t,r,!1),jt[r]=be}(n,e,r);var c,s,u,f=function(t){if(t===i&&v)return v;if(!Se&&t in h)return h[t];switch(t){case Oe:case Te:case xe:return function(){return new n(this,t)}}return function(){return new n(this)}},l=e+" Iterator",p=!1,h=t.prototype,d=h[je]||h["@@iterator"]||i&&h[i],v=!Se&&d||f(i),y="Array"==e&&h.entries||d;if(y&&(c=le(y.call(new t)),Ee!==Object.prototype&&c.next&&(le(c)!==Ee&&(we?we(c,Ee):"function"!=typeof c[je]&&k(c,je,_e)),me(c,l,!0))),i==Te&&d&&d.name!==Te&&(p=!0,v=function(){return d.call(this)}),h[je]!==v&&k(h,je,v),jt[e]=v,i)if(s={values:f(Te),keys:o?v:f(Oe),entries:f(xe)},a)for(u in s)(Se||p||!(u in h))&&Ht(h,u,s[u]);else ae({target:e,proto:!0,forced:Se||p},s);return s},Ie="Array Iterator",Le=Bt.set,Ae=Bt.getterFor(Ie),ke=Pe(Array,"Array",(function(t,e){Le(this,{type:Ie,target:v(t),index:0,kind:e})}),(function(){var t=Ae(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");jt.Arguments=jt.Array,St("keys"),St("values"),St("entries");var Re,Ne,Ce=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Me=function(t,e,n){if(Ce(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}},De=Array.isArray||function(t){return"Array"==l(t)},Ve=Q("species"),qe=function(t,e){var n;return De(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!De(n.prototype)?S(n)&&null===(n=n[Ve])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},Be=[].push,Fe=function(t){var e=1==t,n=2==t,r=3==t,i=4==t,o=6==t,a=5==t||o;return function(c,s,u,f){for(var l,p,d=ce(c),v=h(d),y=Me(s,u,3),m=X(v.length),g=0,b=f||qe,w=e?b(c,m):n?b(c,0):void 0;m>g;g++)if((a||g in v)&&(p=y(l=v[g],g,d),t))if(e)w[g]=p;else if(p)switch(t){case 3:return!0;case 5:return l;case 6:return g;case 2:Be.call(w,l)}else if(i)return!1;return o?-1:r||i?i:w}},Ue={forEach:Fe(0),map:Fe(1),filter:Fe(2),some:Fe(3),every:Fe(4),find:Fe(5),findIndex:Fe(6)},Ge=lt("navigator","userAgent")||"",Ke=w.process,ze=Ke&&Ke.versions,He=ze&&ze.v8;He?Ne=(Re=He.split("."))[0]+Re[1]:Ge&&(!(Re=Ge.match(/Edge\/(\d+)/))||Re[1]>=74)&&(Re=Ge.match(/Chrome\/(\d+)/))&&(Ne=Re[1]);var Qe=Ne&&+Ne,We=Q("species"),Ye=function(t){return Qe>=51||!u((function(){var e=[];return(e.constructor={})[We]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},$e=Object.defineProperty,Je={},Xe=function(t){throw t},Ze=function(t,e){if(V(Je,t))return Je[t];e||(e={});var n=[][t],r=!!V(e,"ACCESSORS")&&e.ACCESSORS,i=V(e,0)?e[0]:Xe,o=V(e,1)?e[1]:void 0;return Je[t]=!!n&&!u((function(){if(r&&!E)return!0;var t={length:-1};r?$e(t,1,{enumerable:!0,get:Xe}):t[1]=1,n.call(t,i,o)}))},tn=Ue.map,en=Ye("map"),nn=Ze("map");ae({target:"Array",proto:!0,forced:!en||!nn},{map:function(t){return tn(this,t,arguments.length>1?arguments[1]:void 0)}});var rn=L.f,on=Function.prototype,an=on.toString,cn=/^\s*function ([^ (]*)/,sn="name";E&&!(sn in on)&&rn(on,sn,{configurable:!0,get:function(){try{return an.call(this).match(cn)[1]}catch(t){return""}}});var un=Object.assign,fn=Object.defineProperty,ln=!un||u((function(){if(E&&1!==un({b:1},un(fn({},"a",{enumerable:!0,get:function(){fn(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=un({},t)[n]||ct(un({},e)).join("")!=r}))?function(t,e){for(var n=ce(t),r=arguments.length,i=1,o=Yt.f,a=Gt.f;r>i;)for(var c,s=h(arguments[i++]),u=o?ct(s).concat(o(s)):ct(s),f=u.length,l=0;f>l;)c=u[l++],E&&!a.call(s,c)||(n[c]=s[c]);return n}:un;ae({target:"Object",stat:!0,forced:Object.assign!==ln},{assign:ln});var pn={};pn[Q("toStringTag")]="z";var hn="[object z]"===String(pn),dn=Q("toStringTag"),vn="Arguments"==l(function(){return arguments}()),yn=hn?l:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),dn))?n:vn?l(e):"Object"==(r=l(e))&&"function"==typeof e.callee?"Arguments":r},mn=hn?{}.toString:function(){return"[object "+yn(this)+"]"};hn||Ht(Object.prototype,"toString",mn,{unsafe:!0});var gn=w.Promise,bn=Q("species"),wn=Q("iterator"),En=Array.prototype,Sn=Q("iterator"),jn=function(t,e,n,r){try{return r?e(_(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&_(i.call(t)),e}},On=m((function(t){var e=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,n,r,i,o){var a,c,s,u,f,l,p,h,d=Me(n,r,i?2:1);if(o)a=t;else{if("function"!=typeof(c=function(t){if(null!=t)return t[Sn]||t["@@iterator"]||jt[yn(t)]}(t)))throw TypeError("Target is not iterable");if(void 0!==(h=c)&&(jt.Array===h||En[wn]===h)){for(s=0,u=X(t.length);u>s;s++)if((f=i?d(_(p=t[s])[0],p[1]):d(t[s]))&&f instanceof e)return f;return new e(!1)}a=c.call(t)}for(l=a.next;!(p=l.call(a)).done;)if("object"==typeof(f=jn(a,d,p.value,i))&&f&&f instanceof e)return f;return new e(!1)}).stop=function(t){return new e(!0,t)}})),Tn=Q("iterator"),xn=!1;try{var _n=0,Pn={next:function(){return{done:!!_n++}},return:function(){xn=!0}};Pn[Tn]=function(){return this},Array.from(Pn,(function(){throw 2}))}catch(t){}var In,Ln,An,kn=Q("species"),Rn=/(iphone|ipod|ipad).*applewebkit/i.test(Ge),Nn=w.location,Cn=w.setImmediate,Mn=w.clearImmediate,Dn=w.process,Vn=w.MessageChannel,qn=w.Dispatch,Bn=0,Fn={},Un="onreadystatechange",Gn=function(t){if(Fn.hasOwnProperty(t)){var e=Fn[t];delete Fn[t],e()}},Kn=function(t){return function(){Gn(t)}},zn=function(t){Gn(t.data)},Hn=function(t){w.postMessage(t+"",Nn.protocol+"//"+Nn.host)};Cn&&Mn||(Cn=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return Fn[++Bn]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},In(Bn),Bn},Mn=function(t){delete Fn[t]},"process"==l(Dn)?In=function(t){Dn.nextTick(Kn(t))}:qn&&qn.now?In=function(t){qn.now(Kn(t))}:Vn&&!Rn?(An=(Ln=new Vn).port2,Ln.port1.onmessage=zn,In=Me(An.postMessage,An,1)):!w.addEventListener||"function"!=typeof postMessage||w.importScripts||u(Hn)||"file:"===Nn.protocol?In=Un in T("script")?function(t){pt.appendChild(T("script")).onreadystatechange=function(){pt.removeChild(this),Gn(t)}}:function(t){setTimeout(Kn(t),0)}:(In=Hn,w.addEventListener("message",zn,!1)));var Qn,Wn,Yn,$n,Jn,Xn,Zn,tr,er={set:Cn,clear:Mn},nr=zt.f,rr=er.set,ir=w.MutationObserver||w.WebKitMutationObserver,or=w.process,ar=w.Promise,cr="process"==l(or),sr=nr(w,"queueMicrotask"),ur=sr&&sr.value;ur||(Qn=function(){var t,e;for(cr&&(t=or.domain)&&t.exit();Wn;){e=Wn.fn,Wn=Wn.next;try{e()}catch(t){throw Wn?$n():Yn=void 0,t}}Yn=void 0,t&&t.enter()},cr?$n=function(){or.nextTick(Qn)}:ir&&!Rn?(Jn=!0,Xn=document.createTextNode(""),new ir(Qn).observe(Xn,{characterData:!0}),$n=function(){Xn.data=Jn=!Jn}):ar&&ar.resolve?(Zn=ar.resolve(void 0),tr=Zn.then,$n=function(){tr.call(Zn,Qn)}):$n=function(){rr.call(w,Qn)});var fr,lr,pr,hr,dr=ur||function(t){var e={fn:t,next:void 0};Yn&&(Yn.next=e),Wn||(Wn=e,$n()),Yn=e},vr=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=Ce(e),this.reject=Ce(n)},yr={f:function(t){return new vr(t)}},mr=function(t,e){if(_(t),S(e)&&e.constructor===t)return e;var n=yr.f(t);return(0,n.resolve)(e),n.promise},gr=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},br=er.set,wr=Q("species"),Er="Promise",Sr=Bt.get,jr=Bt.set,Or=Bt.getterFor(Er),Tr=gn,xr=w.TypeError,_r=w.document,Pr=w.process,Ir=lt("fetch"),Lr=yr.f,Ar=Lr,kr="process"==l(Pr),Rr=!!(_r&&_r.createEvent&&w.dispatchEvent),Nr="unhandledrejection",Cr=ie(Er,(function(){if(!(Pt(Tr)!==String(Tr))){if(66===Qe)return!0;if(!kr&&"function"!=typeof PromiseRejectionEvent)return!0}if(Qe>=51&&/native code/.test(Tr))return!1;var t=Tr.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[wr]=e,!(t.then((function(){}))instanceof e)})),Mr=Cr||!function(t,e){if(!e&&!xn)return!1;var n=!1;try{var r={};r[Tn]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n}((function(t){Tr.all(t).catch((function(){}))})),Dr=function(t){var e;return!(!S(t)||"function"!=typeof(e=t.then))&&e},Vr=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;dr((function(){for(var i=e.value,o=1==e.state,a=0;r.length>a;){var c,s,u,f=r[a++],l=o?f.ok:f.fail,p=f.resolve,h=f.reject,d=f.domain;try{l?(o||(2===e.rejection&&Ur(t,e),e.rejection=1),!0===l?c=i:(d&&d.enter(),c=l(i),d&&(d.exit(),u=!0)),c===f.promise?h(xr("Promise-chain cycle")):(s=Dr(c))?s.call(c,p,h):p(c)):h(i)}catch(t){d&&!u&&d.exit(),h(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&Br(t,e)}))}},qr=function(t,e,n){var r,i;Rr?((r=_r.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),w.dispatchEvent(r)):r={promise:e,reason:n},(i=w["on"+t])?i(r):t===Nr&&function(t,e){var n=w.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}("Unhandled promise rejection",n)},Br=function(t,e){br.call(w,(function(){var n,r=e.value;if(Fr(e)&&(n=gr((function(){kr?Pr.emit("unhandledRejection",r,t):qr(Nr,t,r)})),e.rejection=kr||Fr(e)?2:1,n.error))throw n.value}))},Fr=function(t){return 1!==t.rejection&&!t.parent},Ur=function(t,e){br.call(w,(function(){kr?Pr.emit("rejectionHandled",t):qr("rejectionhandled",t,e.value)}))},Gr=function(t,e,n,r){return function(i){t(e,n,i,r)}},Kr=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,Vr(t,e,!0))},zr=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw xr("Promise can't be resolved itself");var i=Dr(n);i?dr((function(){var r={done:!1};try{i.call(n,Gr(zr,t,r,e),Gr(Kr,t,r,e))}catch(n){Kr(t,r,n,e)}})):(e.value=n,e.state=1,Vr(t,e,!1))}catch(n){Kr(t,{done:!1},n,e)}}};Cr&&(Tr=function(t){!function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}(this,Tr,Er),Ce(t),fr.call(this);var e=Sr(this);try{t(Gr(zr,this,e),Gr(Kr,this,e))}catch(t){Kr(this,e,t)}},(fr=function(t){jr(this,{type:Er,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(t,e,n){for(var r in e)Ht(t,r,e[r],n);return t}(Tr.prototype,{then:function(t,e){var n,r,i,o=Or(this),a=Lr((n=Tr,void 0===(i=_(this).constructor)||null==(r=_(i)[kn])?n:Ce(r)));return a.ok="function"!=typeof t||t,a.fail="function"==typeof e&&e,a.domain=kr?Pr.domain:void 0,o.parent=!0,o.reactions.push(a),0!=o.state&&Vr(this,o,!1),a.promise},catch:function(t){return this.then(void 0,t)}}),lr=function(){var t=new fr,e=Sr(t);this.promise=t,this.resolve=Gr(zr,t,e),this.reject=Gr(Kr,t,e)},yr.f=Lr=function(t){return t===Tr||t===pr?new lr(t):Ar(t)},"function"==typeof gn&&(hr=gn.prototype.then,Ht(gn.prototype,"then",(function(t,e){var n=this;return new Tr((function(t,e){hr.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof Ir&&ae({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return mr(Tr,Ir.apply(w,arguments))}}))),ae({global:!0,wrap:!0,forced:Cr},{Promise:Tr}),me(Tr,Er,!1),function(t){var e=lt(t),n=L.f;E&&e&&!e[bn]&&n(e,bn,{configurable:!0,get:function(){return this}})}(Er),pr=lt(Er),ae({target:Er,stat:!0,forced:Cr},{reject:function(t){var e=Lr(this);return e.reject.call(void 0,t),e.promise}}),ae({target:Er,stat:!0,forced:Cr},{resolve:function(t){return mr(this,t)}}),ae({target:Er,stat:!0,forced:Mr},{all:function(t){var e=this,n=Lr(e),r=n.resolve,i=n.reject,o=gr((function(){var n=Ce(e.resolve),o=[],a=0,c=1;On(t,(function(t){var s=a++,u=!1;o.push(void 0),c++,n.call(e,t).then((function(t){u||(u=!0,o[s]=t,--c||r(o))}),i)})),--c||r(o)}));return o.error&&i(o.value),n.promise},race:function(t){var e=this,n=Lr(e),r=n.reject,i=gr((function(){var i=Ce(e.resolve);On(t,(function(t){i.call(e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}});var Hr=function(t){return function(e,n){var r,i,o=String(d(e)),a=$(n),c=o.length;return a<0||a>=c?t?"":void 0:(r=o.charCodeAt(a))<55296||r>56319||a+1===c||(i=o.charCodeAt(a+1))<56320||i>57343?t?o.charAt(a):r:t?o.slice(a,a+2):i-56320+(r-55296<<10)+65536}},Qr={codeAt:Hr(!1),charAt:Hr(!0)},Wr=Qr.charAt,Yr="String Iterator",$r=Bt.set,Jr=Bt.getterFor(Yr);Pe(String,"String",(function(t){$r(this,{type:Yr,string:String(t),index:0})}),(function(){var t,e=Jr(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=Wr(n,r),e.index+=t.length,{value:t,done:!1})}));var Xr={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Zr=Q("iterator"),ti=Q("toStringTag"),ei=ke.values;for(var ni in Xr){var ri=w[ni],ii=ri&&ri.prototype;if(ii){if(ii[Zr]!==ei)try{k(ii,Zr,ei)}catch(t){ii[Zr]=ei}if(ii[ti]||k(ii,ti,ni),Xr[ni])for(var oi in ke)if(ii[oi]!==ke[oi])try{k(ii,oi,ke[oi])}catch(t){ii[oi]=ke[oi]}}}var ai=[].slice,ci=/MSIE .\./.test(Ge),si=function(t){return function(e,n){var r=arguments.length>2,i=r?ai.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,i)}:e,n)}};ae({global:!0,bind:!0,forced:ci},{setTimeout:si(w.setTimeout),setInterval:si(w.setInterval)});function ui(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.default.call(this,{}),this.window=t.window||("undefined"==typeof window?void 0:window),this.document=t.document||("undefined"==typeof document?void 0:document),this.memory={events:[],referrer:null},this.isBusy=!1,this.storageKeys={id:"LA_ID",userTimestamp:"LA_USER_TIMESTAMP",sessionTimestamp:"LA_SESSION_TIMESTAMP"},this.sessionLifetime=1800,this.identify(),this.context={id:null,firstVisit:!1},this.visibilityState="visible",this.listenVisibilityChanges(),this.timer=null,this.startTimer(),this.queue=[],this.services=[]}ui.prototype=Object.create(a.default.prototype),ui.prototype.constructor=ui,ui.prototype.identify=function(){var t=c.default.getItem(this.storageKeys.id);if(t)this.updateContext({id:t});else{var e=((t=21)=>{let e="",n=t;for(;n--;)e+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return e})();this.updateContext({id:e}),c.default.setItem(this.storageKeys.id,e)}var n=this.getTimestamp(),r=c.default.getItem(this.storageKeys.userTimestamp);i.validationkit.isEmpty(r)&&(c.default.setItem(this.storageKeys.userTimestamp,n),this.updateContext({firstVisit:!0}));var o=c.default.getItem(this.storageKeys.sessionTimestamp);(i.validationkit.isEmpty(o)||this.getTimeDiff(n,o)>this.sessionLifetime)&&c.default.setItem(this.storageKeys.sessionTimestamp,n),i.validationkit.isNotEmpty(this.document)&&(this.memory.referrer=this.document.referrer)},ui.prototype.listenVisibilityChanges=function(){var t=this,e=s.default({window:this.window,document:this.document});e.start(),e.emitter.on("update",(function(){var n=e.getState();n!=t.visibilityState&&(t.visibilityState=n,t.event("visibilityChange",{value:t.visibilityState}),t.emit("visibilityChange",t.visibilityState))}))},ui.prototype.getVisibilityState=function(){return this.visibilityState},ui.prototype.setContext=function(t){return i.typekit.isObject(t)&&(this.context=t),this},ui.prototype.updateContext=function(t){return i.typekit.isObject(t)&&(this.context=Object.assign({},this.context,t)),this},ui.prototype.install=function(){var t=this;return Promise.all(this.services.map((function(e){return e.install?e.install(t):Promise.resolve()})))},ui.prototype.addService=function(t){return this.services.push(t),this},ui.prototype.startTimer=function(){this.timer=setInterval(function(){this.emit("online"),this.event("online",{})}.bind(this),15e3)},ui.prototype.clearTimer=function(){return i.validationkit.isNotEmpty(this.timer)&&(clearInterval(this.timer),this.timer=null),this},ui.prototype.isFirstVisit=function(){return this.context.firstVisit},ui.prototype.event=function(t,e){return this.addToQueue({name:t,params:e}),this},ui.prototype.addToQueue=function(t){return this.queue.push(t),this.processQueue(),!0},ui.prototype.processQueue=function(){if(!0!==this.isBusy){this.isBusy=!0;var t=this.queue.shift();return this.processEvent(t.name,t.params),this.isBusy=!1,this.queue.length>0&&this.processQueue(),!0}},ui.prototype.processEvent=function(t,e){var n=i.typekit.isString(t)&&i.typekit.isNotEmpty(t)?t:void 0,r=i.typekit.isObject(e)?Object.assign({},this.context,e):void 0;if(n){var o=this.getTimestamp(),a=i.objectkit.getProp(this.getLastEvent(),"_timestamp",o),c=this.getTimeDiff(o,a),s=i.objectkit.getProp(this.getEvent(n),"_timestamp",o),u=this.getTimeDiff(o,s),f={name:n,params:r,_timestamp:o,_timeDiffFromLastEvent:c,_timeDiffFromSameEvent:u};this.memory.events.push(f),0!==this.services.length?Promise.all(this.services.map(function(t){return t.event(n,r)}.bind(this))):this.emit("error",["NO_SERVICE_INSTALLED",new Error("NO_SERVICE_INSTALLED")])}else this.emit("error",["INVALID_EVENT_NAME",new Error("INVALID_EVENT_NAME"),{name:n}])},ui.prototype.getEvent=function(t){var e=this.memory.events.length;if(!(e<1))for(var n=e-1;n>=0;n--)if(this.memory.events[n].name==t)return this.memory.events[n]},ui.prototype.getLastEvent=function(){var t=this.memory.events.length;return t>0?this.memory.events[t-1]:void 0},ui.prototype.getTimestamp=function(){return Date.now()},ui.prototype.getTimeDiff=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"seconds",r="seconds"==n?1e3:1;return Math.floor((t-e)/r)};var fi=Ue.filter,li=Ye("filter"),pi=Ze("filter");ae({target:"Array",proto:!0,forced:!li||!pi},{filter:function(t){return fi(this,t,arguments.length>1?arguments[1]:void 0)}});var hi=function(t,e){var n=[][t];return!!n&&u((function(){n.call(null,e||function(){throw 1},1)}))},di=[].join,vi=h!=Object,yi=hi("join",",");ae({target:"Array",proto:!0,forced:vi||!yi},{join:function(t){return di.call(v(this),void 0===t?",":t)}});var mi=function(t){return function(e,n,r,i){Ce(n);var o=ce(e),a=h(o),c=X(o.length),s=t?c-1:0,u=t?-1:1;if(r<2)for(;;){if(s in a){i=a[s],s+=u;break}if(s+=u,t?s<0:c<=s)throw TypeError("Reduce of empty array with no initial value")}for(;t?s>=0:c>s;s+=u)s in a&&(i=n(i,a[s],s,o));return i}},gi={left:mi(!1),right:mi(!0)}.left,bi=hi("reduce"),wi=Ze("reduce",{1:0});ae({target:"Array",proto:!0,forced:!bi||!wi},{reduce:function(t){return gi(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}});var Ei=u((function(){ct(1)}));ae({target:"Object",stat:!0,forced:Ei},{keys:function(t){return ct(ce(t))}});var Si=function(){var t=_(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function ji(t,e){return RegExp(t,e)}var Oi,Ti,xi={UNSUPPORTED_Y:u((function(){var t=ji("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:u((function(){var t=ji("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},_i=RegExp.prototype.exec,Pi=String.prototype.replace,Ii=_i,Li=(Oi=/a/,Ti=/b*/g,_i.call(Oi,"a"),_i.call(Ti,"a"),0!==Oi.lastIndex||0!==Ti.lastIndex),Ai=xi.UNSUPPORTED_Y||xi.BROKEN_CARET,ki=void 0!==/()??/.exec("")[1];(Li||ki||Ai)&&(Ii=function(t){var e,n,r,i,o=this,a=Ai&&o.sticky,c=Si.call(o),s=o.source,u=0,f=t;return a&&(-1===(c=c.replace("y","")).indexOf("g")&&(c+="g"),f=String(t).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==t[o.lastIndex-1])&&(s="(?: "+s+")",f=" "+f,u++),n=new RegExp("^(?:"+s+")",c)),ki&&(n=new RegExp("^"+s+"$(?!\\s)",c)),Li&&(e=o.lastIndex),r=_i.call(a?n:o,f),a?r?(r.input=r.input.slice(u),r[0]=r[0].slice(u),r.index=o.lastIndex,o.lastIndex+=r[0].length):o.lastIndex=0:Li&&r&&(o.lastIndex=o.global?r.index+r[0].length:e),ki&&r&&r.length>1&&Pi.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r});var Ri=Ii;ae({target:"RegExp",proto:!0,forced:/./.exec!==Ri},{exec:Ri});var Ni=Q("species"),Ci=!u((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),Mi="$0"==="a".replace(/./,"$0"),Di=Q("replace"),Vi=!!/./[Di]&&""===/./[Di]("a","$0"),qi=!u((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),Bi=Qr.charAt,Fi=function(t,e,n){return e+(n?Bi(t,e).length:1)},Ui=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==l(t))throw TypeError("RegExp#exec called on incompatible receiver");return Ri.call(t,e)};function Gi(){this.timeout=1e4}!function(t,e,n,r){var i=Q(t),o=!u((function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})),a=o&&!u((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[Ni]=function(){return n},n.flags="",n[i]=/./[i]),n.exec=function(){return e=!0,null},n[i](""),!e}));if(!o||!a||"replace"===t&&(!Ci||!Mi||Vi)||"split"===t&&!qi){var c=/./[i],s=n(i,""[t],(function(t,e,n,r,i){return e.exec===Ri?o&&!i?{done:!0,value:c.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:Mi,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Vi}),f=s[0],l=s[1];Ht(String.prototype,t,f),Ht(RegExp.prototype,i,2==e?function(t,e){return l.call(t,this,e)}:function(t){return l.call(t,this)})}r&&k(RegExp.prototype[i],"sham",!0)}("match",1,(function(t,e,n){return[function(e){var n=d(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=_(t),o=String(this);if(!i.global)return Ui(i,o);var a=i.unicode;i.lastIndex=0;for(var c,s=[],u=0;null!==(c=Ui(i,o));){var f=String(c[0]);s[u]=f,""===f&&(i.lastIndex=Fi(o,X(i.lastIndex),a)),u++}return 0===u?null:s}]})),Gi.prototype.reCSSExt=/(.css)/,Gi.prototype.supportedLocations=["bodyEnd","bodyStart","headEnd"],Gi.prototype.inject=function(t,e){var n=this;if(!e.id)throw new Error("Missing id for an injected script.");var r=n.reCSSExt.test(t),i=r?"link":"script";return new Promise((function(o,a){if(document.getElementById(e.id))return o(e.id);var c=setTimeout((function(){return a(new Error("TIMEOUT"))}),n.timeout),s=document.createElement(i);function u(){return r&&(s.media=e.media||"all"),clearTimeout(c),o(e.id)}s.id=e.id,"link"==i&&(s.rel="stylesheet",s.href=t,s.media="only x"),"script"==i&&(s.type=e.type||"text/javascript",s.async=!e.hasOwnProperty("async")||e.async),e.attrs&&Object.keys(e.attrs).map((function(t){return s.setAttribute(t,e.attrs[t])})),s.addEventListener?s.addEventListener("load",u,!1):s.readyState?s.onreadystatechange=u:s.onload&&(s.onload=u),s.onerror&&(s.onerror=function(t){return clearTimeout(c),a(t)}),"script"==i&&(s.src=t),n.injectToLocation(s,e.location)}))},Gi.prototype.injectJSONLD=function(t,e){if(e.id&&document.getElementById(e.id))return null;var n=document.createElement("script");n.type="application/ld+json",e.id&&(n.id=e.id),e.attrs&&Object.keys(e.attrs).map((function(t){return n.setAttribute(t,e.attrs[t])})),n.text="string"==typeof t?t:JSON.stringify(t),this.injectToLocation(n,e.location)},Gi.prototype.injectToLocation=function(t,e){var n=e||this.supportedLocations[0];if(-1!==this.supportedLocations.indexOf(n)){var r=document.getElementsByTagName("head")[0],i=document.getElementsByTagName("body")[0];"headEnd"==n?r.insertBefore(t,null):"bodyEnd"==n?i.insertBefore(t,null):"bodyStart"==n&&i.insertBefore(t,i.firstChild)}},Gi.prototype.remove=function(t){var e=document.getElementById(t);e&&e.parentNode.removeChild(e)};var Ki=new Gi;function zi(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.id=t.id,this.userID=t.userID,this.initOpts={send_page_view:!1},this.userID&&(this.initOpts.user_id=this.userID),this.ready=!1,this.client=null,this.scriptTagID="lighthouse-service-google-analytics",this.scriptURL="https://www.googletagmanager.com/gtag/js?id="+this.id,this.reservedEventNames={screenView:"screen_view",time:"timing_complete",error:"exception",share:"share",search:"search",login:"login",signup:"sign_up"},this.parameterReference={screen_view:{params:["screen_name","app_name","app_id","app_version","app_installer_id"],match:{title:"screen_name",appName:"app_name",appID:"app_id",appVersion:"app_version",appInstallerID:"app_installer_id"},requiredParams:["screen_name","app_name"]},timing_complete:{params:["name","value","event_category","event_label"],match:{name:"event_category",category:"name",value:"value"},requiredParams:["name","value"]},exception:{params:["description","fatal"],match:{debug:"description"},requiredParams:["description"]},share:{params:["method","content_id","content_type"],match:{channel:"method",id:"content_id"},requiredParams:["method"]},search:{params:["term"],match:{term:"term"},requiredParams:["term"]}}}zi.prototype.install=function(t){var e=this;return e.client=t,e.client.window.dataLayer=e.client.window.dataLayer||[],e.client.window.gtag=function(){dataLayer.push(arguments)},e.client.window.gtag("js",new Date),e.client.window.gtag("config",e.id,e.initOpts),new Promise((function(t,n){Ki.inject(e.scriptURL,{id:e.scriptTagID,location:"headEnd"}).then((function(){return e.ready=!0,t()})).catch((function(n){return e.client.emit("error",n),t()}))}))},zi.prototype.event=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!0===this.ready){var n=this.findLocalEventName(t,e);if("screen_view"==n){var r=this.generatePageLoadParams(e);i.typekit.isObject(r)&&this.client.window.gtag("config",this.id,r)}var o=this.generateLocalParams(n,e);if(!i.typekit.isUndefined(o)){var a=this.parameterReference.hasOwnProperty(n);if(a){var c=this.parameterReference[n];if(c.hasOwnProperty("requiredParams")){var s=c.requiredParams.filter((function(t){return!0!==o.hasOwnProperty(t)}));if(s&&s.length>0)return void this.client.emit("error",[new Error("MISSING_PARAMS"),s.join(",")])}}this.client.window.gtag("event",n,o)}}},zi.prototype.findLocalEventName=function(t,e){return"view"==t&&"screen"==i.objectkit.getProp(e,"category","")?this.reservedEventNames.screenView:this.reservedEventNames.hasOwnProperty(t)?this.reservedEventNames[t]:t},zi.prototype.generateLocalParams=function(t,e){this.client.kit;var n=this.parameterReference.hasOwnProperty(t);if(n||e.hasOwnProperty("value")){if(!n&&e.hasOwnProperty("value"))return Object.assign({},{event_callback:function(){}},{event_label:e.value,event_category:"engagement"});var r=this.parameterReference[t],o=i.typekit.isObject(e.googleAnalytics)?e.googleAnalytics:{},a=Object.keys(r.match).reduce((function(t,n){return e.hasOwnProperty(n)&&(t[r.match[n]]=e[n]),t}),{});return Object.assign({},{event_callback:function(){}},a,o)}},zi.prototype.generatePageLoadParams=function(t){this.client.kit;if(t.hasOwnProperty("path")&&i.validationkit.isNotEmpty(t.path)){var e={page_path:t.path,page_title:t.title};return i.validationkit.isNotEmpty(t.url)&&(e.page_location=t.url),e}},t.LAGoogleAnalytics=zi,t.LighthouseAnalytics=ui,Object.defineProperty(t,"__esModule",{value:!0})}));
