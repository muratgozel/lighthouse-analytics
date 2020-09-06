"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("event-emitter-object"),e=require("local-storage-pro"),n=require("visibility-state-listener"),r=require("basekits");function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=i(t),a=i(e),c=i(n),s=function(t){try{return!!t()}catch(t){return!0}},u={}.toString,f=function(t){return u.call(t).slice(8,-1)},l="".split,p=s((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==f(t)?l.call(t,""):Object(t)}:Object,h=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},d=function(t){return p(h(t))},v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function y(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var m,g=function(t){return t&&t.Math==Math&&t},b=g("object"==typeof globalThis&&globalThis)||g("object"==typeof window&&window)||g("object"==typeof self&&self)||g("object"==typeof v&&v)||Function("return this")(),w=!s((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),E=function(t){return"object"==typeof t?null!==t:"function"==typeof t},S=b.document,j=E(S)&&E(S.createElement),O=function(t){return j?S.createElement(t):{}},x=!w&&!s((function(){return 7!=Object.defineProperty(O("div"),"a",{get:function(){return 7}}).a})),T=function(t){if(!E(t))throw TypeError(String(t)+" is not an object");return t},_=function(t,e){if(!E(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!E(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!E(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!E(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},P=Object.defineProperty,I={f:w?P:function(t,e,n){if(T(t),e=_(e,!0),T(n),x)try{return P(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},L=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},A=w?function(t,e,n){return I.f(t,e,L(1,n))}:function(t,e,n){return t[e]=n,t},k=function(t,e){try{A(b,t,e)}catch(n){b[t]=e}return e},R=b["__core-js_shared__"]||k("__core-js_shared__",{}),N=y((function(t){(t.exports=function(t,e){return R[t]||(R[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),C={}.hasOwnProperty,M=function(t,e){return C.call(t,e)},D=0,V=Math.random(),q=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++D+V).toString(36)},F=!!Object.getOwnPropertySymbols&&!s((function(){return!String(Symbol())})),B=F&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,U=N("wks"),G=b.Symbol,K=B?G:G&&G.withoutSetter||q,z=function(t){return M(U,t)||(F&&M(G,t)?U[t]=G[t]:U[t]=K("Symbol."+t)),U[t]},H=Math.ceil,Q=Math.floor,W=function(t){return isNaN(t=+t)?0:(t>0?Q:H)(t)},Y=Math.min,$=function(t){return t>0?Y(W(t),9007199254740991):0},J=Math.max,X=Math.min,Z=function(t){return function(e,n,r){var i,o=d(e),a=$(o.length),c=function(t,e){var n=W(t);return n<0?J(n+e,0):X(n,e)}(r,a);if(t&&n!=n){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((t||c in o)&&o[c]===n)return t||c||0;return!t&&-1}},tt={includes:Z(!0),indexOf:Z(!1)},et={},nt=tt.indexOf,rt=function(t,e){var n,r=d(t),i=0,o=[];for(n in r)!M(et,n)&&M(r,n)&&o.push(n);for(;e.length>i;)M(r,n=e[i++])&&(~nt(o,n)||o.push(n));return o},it=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ot=Object.keys||function(t){return rt(t,it)},at=w?Object.defineProperties:function(t,e){T(t);for(var n,r=ot(e),i=r.length,o=0;i>o;)I.f(t,n=r[o++],e[n]);return t},ct=b,st=function(t){return"function"==typeof t?t:void 0},ut=function(t,e){return arguments.length<2?st(ct[t])||st(b[t]):ct[t]&&ct[t][e]||b[t]&&b[t][e]},ft=ut("document","documentElement"),lt=N("keys"),pt=function(t){return lt[t]||(lt[t]=q(t))},ht=pt("IE_PROTO"),dt=function(){},vt=function(t){return"<script>"+t+"<\/script>"},yt=function(){try{m=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;yt=m?function(t){t.write(vt("")),t.close();var e=t.parentWindow.Object;return t=null,e}(m):((e=O("iframe")).style.display="none",ft.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(vt("document.F=Object")),t.close(),t.F);for(var n=it.length;n--;)delete yt.prototype[it[n]];return yt()};et[ht]=!0;var mt=Object.create||function(t,e){var n;return null!==t?(dt.prototype=T(t),n=new dt,dt.prototype=null,n[ht]=t):n=yt(),void 0===e?n:at(n,e)},gt=z("unscopables"),bt=Array.prototype;null==bt[gt]&&I.f(bt,gt,{configurable:!0,value:mt(null)});var wt=function(t){bt[gt][t]=!0},Et={},St=Function.toString;"function"!=typeof R.inspectSource&&(R.inspectSource=function(t){return St.call(t)});var jt,Ot,xt,Tt=R.inspectSource,_t=b.WeakMap,Pt="function"==typeof _t&&/native code/.test(Tt(_t)),It=b.WeakMap;if(Pt){var Lt=new It,At=Lt.get,kt=Lt.has,Rt=Lt.set;jt=function(t,e){return Rt.call(Lt,t,e),e},Ot=function(t){return At.call(Lt,t)||{}},xt=function(t){return kt.call(Lt,t)}}else{var Nt=pt("state");et[Nt]=!0,jt=function(t,e){return A(t,Nt,e),e},Ot=function(t){return M(t,Nt)?t[Nt]:{}},xt=function(t){return M(t,Nt)}}var Ct,Mt,Dt,Vt={set:jt,get:Ot,has:xt,enforce:function(t){return xt(t)?Ot(t):jt(t,{})},getterFor:function(t){return function(e){var n;if(!E(e)||(n=Ot(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},qt={}.propertyIsEnumerable,Ft=Object.getOwnPropertyDescriptor,Bt={f:Ft&&!qt.call({1:2},1)?function(t){var e=Ft(this,t);return!!e&&e.enumerable}:qt},Ut=Object.getOwnPropertyDescriptor,Gt={f:w?Ut:function(t,e){if(t=d(t),e=_(e,!0),x)try{return Ut(t,e)}catch(t){}if(M(t,e))return L(!Bt.f.call(t,e),t[e])}},Kt=y((function(t){var e=Vt.get,n=Vt.enforce,r=String(String).split("String");(t.exports=function(t,e,i,o){var a=!!o&&!!o.unsafe,c=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof i&&("string"!=typeof e||M(i,"name")||A(i,"name",e),n(i).source=r.join("string"==typeof e?e:"")),t!==b?(a?!s&&t[e]&&(c=!0):delete t[e],c?t[e]=i:A(t,e,i)):c?t[e]=i:k(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||Tt(this)}))})),zt=it.concat("length","prototype"),Ht={f:Object.getOwnPropertyNames||function(t){return rt(t,zt)}},Qt={f:Object.getOwnPropertySymbols},Wt=ut("Reflect","ownKeys")||function(t){var e=Ht.f(T(t)),n=Qt.f;return n?e.concat(n(t)):e},Yt=function(t,e){for(var n=Wt(e),r=I.f,i=Gt.f,o=0;o<n.length;o++){var a=n[o];M(t,a)||r(t,a,i(e,a))}},$t=/#|\.prototype\./,Jt=function(t,e){var n=Zt[Xt(t)];return n==ee||n!=te&&("function"==typeof e?s(e):!!e)},Xt=Jt.normalize=function(t){return String(t).replace($t,".").toLowerCase()},Zt=Jt.data={},te=Jt.NATIVE="N",ee=Jt.POLYFILL="P",ne=Jt,re=Gt.f,ie=function(t,e){var n,r,i,o,a,c=t.target,s=t.global,u=t.stat;if(n=s?b:u?b[c]||k(c,{}):(b[c]||{}).prototype)for(r in e){if(o=e[r],i=t.noTargetGet?(a=re(n,r))&&a.value:n[r],!ne(s?r:c+(u?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;Yt(o,i)}(t.sham||i&&i.sham)&&A(o,"sham",!0),Kt(n,r,o,t)}},oe=function(t){return Object(h(t))},ae=!s((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),ce=pt("IE_PROTO"),se=Object.prototype,ue=ae?Object.getPrototypeOf:function(t){return t=oe(t),M(t,ce)?t[ce]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?se:null},fe=z("iterator"),le=!1;[].keys&&("next"in(Dt=[].keys())?(Mt=ue(ue(Dt)))!==Object.prototype&&(Ct=Mt):le=!0),null==Ct&&(Ct={}),M(Ct,fe)||A(Ct,fe,(function(){return this}));var pe={IteratorPrototype:Ct,BUGGY_SAFARI_ITERATORS:le},he=I.f,de=z("toStringTag"),ve=function(t,e,n){t&&!M(t=n?t:t.prototype,de)&&he(t,de,{configurable:!0,value:e})},ye=pe.IteratorPrototype,me=function(){return this},ge=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return T(n),function(t){if(!E(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(r),e?t.call(n,r):n.__proto__=r,n}}():void 0),be=pe.IteratorPrototype,we=pe.BUGGY_SAFARI_ITERATORS,Ee=z("iterator"),Se=function(){return this},je=function(t,e,n,r,i,o,a){!function(t,e,n){var r=e+" Iterator";t.prototype=mt(ye,{next:L(1,n)}),ve(t,r,!1),Et[r]=me}(n,e,r);var c,s,u,f=function(t){if(t===i&&v)return v;if(!we&&t in h)return h[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},l=e+" Iterator",p=!1,h=t.prototype,d=h[Ee]||h["@@iterator"]||i&&h[i],v=!we&&d||f(i),y="Array"==e&&h.entries||d;if(y&&(c=ue(y.call(new t)),be!==Object.prototype&&c.next&&(ue(c)!==be&&(ge?ge(c,be):"function"!=typeof c[Ee]&&A(c,Ee,Se)),ve(c,l,!0))),"values"==i&&d&&"values"!==d.name&&(p=!0,v=function(){return d.call(this)}),h[Ee]!==v&&A(h,Ee,v),Et[e]=v,i)if(s={values:f("values"),keys:o?v:f("keys"),entries:f("entries")},a)for(u in s)(we||p||!(u in h))&&Kt(h,u,s[u]);else ie({target:e,proto:!0,forced:we||p},s);return s},Oe=Vt.set,xe=Vt.getterFor("Array Iterator"),Te=je(Array,"Array",(function(t,e){Oe(this,{type:"Array Iterator",target:d(t),index:0,kind:e})}),(function(){var t=xe(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");Et.Arguments=Et.Array,wt("keys"),wt("values"),wt("entries");var _e,Pe,Ie=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Le=function(t,e,n){if(Ie(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}},Ae=Array.isArray||function(t){return"Array"==f(t)},ke=z("species"),Re=function(t,e){var n;return Ae(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Ae(n.prototype)?E(n)&&null===(n=n[ke])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},Ne=[].push,Ce=function(t){var e=1==t,n=2==t,r=3==t,i=4==t,o=6==t,a=5==t||o;return function(c,s,u,f){for(var l,h,d=oe(c),v=p(d),y=Le(s,u,3),m=$(v.length),g=0,b=f||Re,w=e?b(c,m):n?b(c,0):void 0;m>g;g++)if((a||g in v)&&(h=y(l=v[g],g,d),t))if(e)w[g]=h;else if(h)switch(t){case 3:return!0;case 5:return l;case 6:return g;case 2:Ne.call(w,l)}else if(i)return!1;return o?-1:r||i?i:w}},Me={forEach:Ce(0),map:Ce(1),filter:Ce(2),some:Ce(3),every:Ce(4),find:Ce(5),findIndex:Ce(6)},De=ut("navigator","userAgent")||"",Ve=b.process,qe=Ve&&Ve.versions,Fe=qe&&qe.v8;Fe?Pe=(_e=Fe.split("."))[0]+_e[1]:De&&(!(_e=De.match(/Edge\/(\d+)/))||_e[1]>=74)&&(_e=De.match(/Chrome\/(\d+)/))&&(Pe=_e[1]);var Be=Pe&&+Pe,Ue=z("species"),Ge=function(t){return Be>=51||!s((function(){var e=[];return(e.constructor={})[Ue]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Ke=Object.defineProperty,ze={},He=function(t){throw t},Qe=function(t,e){if(M(ze,t))return ze[t];e||(e={});var n=[][t],r=!!M(e,"ACCESSORS")&&e.ACCESSORS,i=M(e,0)?e[0]:He,o=M(e,1)?e[1]:void 0;return ze[t]=!!n&&!s((function(){if(r&&!w)return!0;var t={length:-1};r?Ke(t,1,{enumerable:!0,get:He}):t[1]=1,n.call(t,i,o)}))},We=Me.map,Ye=Ge("map"),$e=Qe("map");ie({target:"Array",proto:!0,forced:!Ye||!$e},{map:function(t){return We(this,t,arguments.length>1?arguments[1]:void 0)}});var Je=I.f,Xe=Function.prototype,Ze=Xe.toString,tn=/^\s*function ([^ (]*)/;w&&!("name"in Xe)&&Je(Xe,"name",{configurable:!0,get:function(){try{return Ze.call(this).match(tn)[1]}catch(t){return""}}});var en=Object.assign,nn=Object.defineProperty,rn=!en||s((function(){if(w&&1!==en({b:1},en(nn({},"a",{enumerable:!0,get:function(){nn(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=en({},t)[n]||ot(en({},e)).join("")!=r}))?function(t,e){for(var n=oe(t),r=arguments.length,i=1,o=Qt.f,a=Bt.f;r>i;)for(var c,s=p(arguments[i++]),u=o?ot(s).concat(o(s)):ot(s),f=u.length,l=0;f>l;)c=u[l++],w&&!a.call(s,c)||(n[c]=s[c]);return n}:en;ie({target:"Object",stat:!0,forced:Object.assign!==rn},{assign:rn});var on={};on[z("toStringTag")]="z";var an="[object z]"===String(on),cn=z("toStringTag"),sn="Arguments"==f(function(){return arguments}()),un=an?f:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),cn))?n:sn?f(e):"Object"==(r=f(e))&&"function"==typeof e.callee?"Arguments":r},fn=an?{}.toString:function(){return"[object "+un(this)+"]"};an||Kt(Object.prototype,"toString",fn,{unsafe:!0});var ln=b.Promise,pn=z("species"),hn=z("iterator"),dn=Array.prototype,vn=z("iterator"),yn=function(t,e,n,r){try{return r?e(T(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&T(i.call(t)),e}},mn=y((function(t){var e=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,n,r,i,o){var a,c,s,u,f,l,p,h,d=Le(n,r,i?2:1);if(o)a=t;else{if("function"!=typeof(c=function(t){if(null!=t)return t[vn]||t["@@iterator"]||Et[un(t)]}(t)))throw TypeError("Target is not iterable");if(void 0!==(h=c)&&(Et.Array===h||dn[hn]===h)){for(s=0,u=$(t.length);u>s;s++)if((f=i?d(T(p=t[s])[0],p[1]):d(t[s]))&&f instanceof e)return f;return new e(!1)}a=c.call(t)}for(l=a.next;!(p=l.call(a)).done;)if("object"==typeof(f=yn(a,d,p.value,i))&&f&&f instanceof e)return f;return new e(!1)}).stop=function(t){return new e(!0,t)}})),gn=z("iterator"),bn=!1;try{var wn=0,En={next:function(){return{done:!!wn++}},return:function(){bn=!0}};En[gn]=function(){return this},Array.from(En,(function(){throw 2}))}catch(t){}var Sn,jn,On,xn=z("species"),Tn=/(iphone|ipod|ipad).*applewebkit/i.test(De),_n=b.location,Pn=b.setImmediate,In=b.clearImmediate,Ln=b.process,An=b.MessageChannel,kn=b.Dispatch,Rn=0,Nn={},Cn=function(t){if(Nn.hasOwnProperty(t)){var e=Nn[t];delete Nn[t],e()}},Mn=function(t){return function(){Cn(t)}},Dn=function(t){Cn(t.data)},Vn=function(t){b.postMessage(t+"",_n.protocol+"//"+_n.host)};Pn&&In||(Pn=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return Nn[++Rn]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},Sn(Rn),Rn},In=function(t){delete Nn[t]},"process"==f(Ln)?Sn=function(t){Ln.nextTick(Mn(t))}:kn&&kn.now?Sn=function(t){kn.now(Mn(t))}:An&&!Tn?(On=(jn=new An).port2,jn.port1.onmessage=Dn,Sn=Le(On.postMessage,On,1)):!b.addEventListener||"function"!=typeof postMessage||b.importScripts||s(Vn)||"file:"===_n.protocol?Sn="onreadystatechange"in O("script")?function(t){ft.appendChild(O("script")).onreadystatechange=function(){ft.removeChild(this),Cn(t)}}:function(t){setTimeout(Mn(t),0)}:(Sn=Vn,b.addEventListener("message",Dn,!1)));var qn,Fn,Bn,Un,Gn,Kn,zn,Hn,Qn={set:Pn,clear:In},Wn=Gt.f,Yn=Qn.set,$n=b.MutationObserver||b.WebKitMutationObserver,Jn=b.process,Xn=b.Promise,Zn="process"==f(Jn),tr=Wn(b,"queueMicrotask"),er=tr&&tr.value;er||(qn=function(){var t,e;for(Zn&&(t=Jn.domain)&&t.exit();Fn;){e=Fn.fn,Fn=Fn.next;try{e()}catch(t){throw Fn?Un():Bn=void 0,t}}Bn=void 0,t&&t.enter()},Zn?Un=function(){Jn.nextTick(qn)}:$n&&!Tn?(Gn=!0,Kn=document.createTextNode(""),new $n(qn).observe(Kn,{characterData:!0}),Un=function(){Kn.data=Gn=!Gn}):Xn&&Xn.resolve?(zn=Xn.resolve(void 0),Hn=zn.then,Un=function(){Hn.call(zn,qn)}):Un=function(){Yn.call(b,qn)});var nr,rr,ir,or,ar=er||function(t){var e={fn:t,next:void 0};Bn&&(Bn.next=e),Fn||(Fn=e,Un()),Bn=e},cr=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=Ie(e),this.reject=Ie(n)},sr={f:function(t){return new cr(t)}},ur=function(t,e){if(T(t),E(e)&&e.constructor===t)return e;var n=sr.f(t);return(0,n.resolve)(e),n.promise},fr=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},lr=Qn.set,pr=z("species"),hr="Promise",dr=Vt.get,vr=Vt.set,yr=Vt.getterFor(hr),mr=ln,gr=b.TypeError,br=b.document,wr=b.process,Er=ut("fetch"),Sr=sr.f,jr=Sr,Or="process"==f(wr),xr=!!(br&&br.createEvent&&b.dispatchEvent),Tr=ne(hr,(function(){if(!(Tt(mr)!==String(mr))){if(66===Be)return!0;if(!Or&&"function"!=typeof PromiseRejectionEvent)return!0}if(Be>=51&&/native code/.test(mr))return!1;var t=mr.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[pr]=e,!(t.then((function(){}))instanceof e)})),_r=Tr||!function(t,e){if(!e&&!bn)return!1;var n=!1;try{var r={};r[gn]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n}((function(t){mr.all(t).catch((function(){}))})),Pr=function(t){var e;return!(!E(t)||"function"!=typeof(e=t.then))&&e},Ir=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;ar((function(){for(var i=e.value,o=1==e.state,a=0;r.length>a;){var c,s,u,f=r[a++],l=o?f.ok:f.fail,p=f.resolve,h=f.reject,d=f.domain;try{l?(o||(2===e.rejection&&Rr(t,e),e.rejection=1),!0===l?c=i:(d&&d.enter(),c=l(i),d&&(d.exit(),u=!0)),c===f.promise?h(gr("Promise-chain cycle")):(s=Pr(c))?s.call(c,p,h):p(c)):h(i)}catch(t){d&&!u&&d.exit(),h(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&Ar(t,e)}))}},Lr=function(t,e,n){var r,i;xr?((r=br.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),b.dispatchEvent(r)):r={promise:e,reason:n},(i=b["on"+t])?i(r):"unhandledrejection"===t&&function(t,e){var n=b.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}("Unhandled promise rejection",n)},Ar=function(t,e){lr.call(b,(function(){var n,r=e.value;if(kr(e)&&(n=fr((function(){Or?wr.emit("unhandledRejection",r,t):Lr("unhandledrejection",t,r)})),e.rejection=Or||kr(e)?2:1,n.error))throw n.value}))},kr=function(t){return 1!==t.rejection&&!t.parent},Rr=function(t,e){lr.call(b,(function(){Or?wr.emit("rejectionHandled",t):Lr("rejectionhandled",t,e.value)}))},Nr=function(t,e,n,r){return function(i){t(e,n,i,r)}},Cr=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,Ir(t,e,!0))},Mr=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw gr("Promise can't be resolved itself");var i=Pr(n);i?ar((function(){var r={done:!1};try{i.call(n,Nr(Mr,t,r,e),Nr(Cr,t,r,e))}catch(n){Cr(t,r,n,e)}})):(e.value=n,e.state=1,Ir(t,e,!1))}catch(n){Cr(t,{done:!1},n,e)}}};Tr&&(mr=function(t){!function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}(this,mr,hr),Ie(t),nr.call(this);var e=dr(this);try{t(Nr(Mr,this,e),Nr(Cr,this,e))}catch(t){Cr(this,e,t)}},(nr=function(t){vr(this,{type:hr,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(t,e,n){for(var r in e)Kt(t,r,e[r],n);return t}(mr.prototype,{then:function(t,e){var n,r,i,o=yr(this),a=Sr((n=mr,void 0===(i=T(this).constructor)||null==(r=T(i)[xn])?n:Ie(r)));return a.ok="function"!=typeof t||t,a.fail="function"==typeof e&&e,a.domain=Or?wr.domain:void 0,o.parent=!0,o.reactions.push(a),0!=o.state&&Ir(this,o,!1),a.promise},catch:function(t){return this.then(void 0,t)}}),rr=function(){var t=new nr,e=dr(t);this.promise=t,this.resolve=Nr(Mr,t,e),this.reject=Nr(Cr,t,e)},sr.f=Sr=function(t){return t===mr||t===ir?new rr(t):jr(t)},"function"==typeof ln&&(or=ln.prototype.then,Kt(ln.prototype,"then",(function(t,e){var n=this;return new mr((function(t,e){or.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof Er&&ie({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return ur(mr,Er.apply(b,arguments))}}))),ie({global:!0,wrap:!0,forced:Tr},{Promise:mr}),ve(mr,hr,!1),function(t){var e=ut(t),n=I.f;w&&e&&!e[pn]&&n(e,pn,{configurable:!0,get:function(){return this}})}(hr),ir=ut(hr),ie({target:hr,stat:!0,forced:Tr},{reject:function(t){var e=Sr(this);return e.reject.call(void 0,t),e.promise}}),ie({target:hr,stat:!0,forced:Tr},{resolve:function(t){return ur(this,t)}}),ie({target:hr,stat:!0,forced:_r},{all:function(t){var e=this,n=Sr(e),r=n.resolve,i=n.reject,o=fr((function(){var n=Ie(e.resolve),o=[],a=0,c=1;mn(t,(function(t){var s=a++,u=!1;o.push(void 0),c++,n.call(e,t).then((function(t){u||(u=!0,o[s]=t,--c||r(o))}),i)})),--c||r(o)}));return o.error&&i(o.value),n.promise},race:function(t){var e=this,n=Sr(e),r=n.reject,i=fr((function(){var i=Ie(e.resolve);mn(t,(function(t){i.call(e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}});var Dr=function(t){return function(e,n){var r,i,o=String(h(e)),a=W(n),c=o.length;return a<0||a>=c?t?"":void 0:(r=o.charCodeAt(a))<55296||r>56319||a+1===c||(i=o.charCodeAt(a+1))<56320||i>57343?t?o.charAt(a):r:t?o.slice(a,a+2):i-56320+(r-55296<<10)+65536}},Vr={codeAt:Dr(!1),charAt:Dr(!0)},qr=Vr.charAt,Fr=Vt.set,Br=Vt.getterFor("String Iterator");je(String,"String",(function(t){Fr(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=Br(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=qr(n,r),e.index+=t.length,{value:t,done:!1})}));var Ur={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Gr=z("iterator"),Kr=z("toStringTag"),zr=Te.values;for(var Hr in Ur){var Qr=b[Hr],Wr=Qr&&Qr.prototype;if(Wr){if(Wr[Gr]!==zr)try{A(Wr,Gr,zr)}catch(t){Wr[Gr]=zr}if(Wr[Kr]||A(Wr,Kr,Hr),Ur[Hr])for(var Yr in Te)if(Wr[Yr]!==Te[Yr])try{A(Wr,Yr,Te[Yr])}catch(t){Wr[Yr]=Te[Yr]}}}var $r=[].slice,Jr=/MSIE .\./.test(De),Xr=function(t){return function(e,n){var r=arguments.length>2,i=r?$r.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,i)}:e,n)}};ie({global:!0,bind:!0,forced:Jr},{setTimeout:Xr(b.setTimeout),setInterval:Xr(b.setInterval)});function Zr(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o.default.call(this,{}),this.window=t.window||("undefined"==typeof window?void 0:window),this.document=t.document||("undefined"==typeof document?void 0:document),this.memory={events:[],referrer:null},this.isBusy=!1,this.storageKeys={id:"LA_ID",userTimestamp:"LA_USER_TIMESTAMP",sessionTimestamp:"LA_SESSION_TIMESTAMP"},this.sessionLifetime=1800,this.identify(),this.context={id:null,firstVisit:!1},this.visibilityState="visible",this.listenVisibilityChanges(),this.timer=null,this.startTimer(),this.queue=[],this.services=[]}Zr.prototype=Object.create(o.default.prototype),Zr.prototype.constructor=Zr,Zr.prototype.identify=function(){var t=a.default.getItem(this.storageKeys.id);if(t)this.updateContext({id:t});else{var e=((t=21)=>{let e="",n=t;for(;n--;)e+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return e})();this.updateContext({id:e}),a.default.setItem(this.storageKeys.id,e)}var n=this.getTimestamp(),i=a.default.getItem(this.storageKeys.userTimestamp);r.validationkit.isEmpty(i)&&(a.default.setItem(this.storageKeys.userTimestamp,n),this.updateContext({firstVisit:!0}));var o=a.default.getItem(this.storageKeys.sessionTimestamp);(r.validationkit.isEmpty(o)||this.getTimeDiff(n,o)>this.sessionLifetime)&&a.default.setItem(this.storageKeys.sessionTimestamp,n),r.validationkit.isNotEmpty(this.document)&&(this.memory.referrer=this.document.referrer)},Zr.prototype.listenVisibilityChanges=function(){var t=this,e=c.default({window:this.window,document:this.document});e.start(),e.emitter.on("update",(function(){var n=e.getState();n!=t.visibilityState&&(t.visibilityState=n,t.event("visibilityChange",{value:t.visibilityState}),t.emit("visibilityChange",t.visibilityState))}))},Zr.prototype.getVisibilityState=function(){return this.visibilityState},Zr.prototype.setContext=function(t){return r.typekit.isObject(t)&&(this.context=t),this},Zr.prototype.updateContext=function(t){return r.typekit.isObject(t)&&(this.context=Object.assign({},this.context,t)),this},Zr.prototype.install=function(){return Promise.all(this.services.map(function(t){return t.install?t.install(this):Promise.resolve()}.bind(this)))},Zr.prototype.addService=function(t){return this.services.push(t),this},Zr.prototype.startTimer=function(){this.timer=setInterval(function(){this.emit("online"),this.event("online",{})}.bind(this),15e3)},Zr.prototype.clearTimer=function(){return r.validationkit.isNotEmpty(this.timer)&&(clearInterval(this.timer),this.timer=null),this},Zr.prototype.isFirstVisit=function(){return this.context.firstVisit},Zr.prototype.event=function(t,e){return this.addToQueue({name:t,params:e}),this},Zr.prototype.addToQueue=function(t){return this.queue.push(t),this.processQueue(),!0},Zr.prototype.processQueue=function(){if(!0!==this.isBusy){this.isBusy=!0;var t=this.queue.shift();return this.processEvent(t.name,t.params),this.isBusy=!1,this.queue.length>0&&this.processQueue(),!0}},Zr.prototype.processEvent=function(t,e){var n=r.typekit.isString(t)&&r.typekit.isNotEmpty(t)?t:void 0,i=r.typekit.isObject(e)?Object.assign({},this.context,e):void 0;if(n){var o=this.getTimestamp(),a=r.objectkit.getProp(this.getLastEvent(),"_timestamp",o),c=this.getTimeDiff(o,a),s=r.objectkit.getProp(this.getEvent(n),"_timestamp",o),u=this.getTimeDiff(o,s),f={name:n,params:i,_timestamp:o,_timeDiffFromLastEvent:c,_timeDiffFromSameEvent:u};this.memory.events.push(f),0!==this.services.length?Promise.all(this.services.map(function(t){return t.event(n,i)}.bind(this))):this.emit("error",["NO_SERVICE_INSTALLED",new Error("NO_SERVICE_INSTALLED")])}else this.emit("error",["INVALID_EVENT_NAME",new Error("INVALID_EVENT_NAME"),{name:n}])},Zr.prototype.getEvent=function(t){var e=this.memory.events.length;if(!(e<1))for(var n=e-1;n>=0;n--)if(this.memory.events[n].name==t)return this.memory.events[n]},Zr.prototype.getLastEvent=function(){var t=this.memory.events.length;return t>0?this.memory.events[t-1]:void 0},Zr.prototype.getTimestamp=function(){return Date.now()},Zr.prototype.getTimeDiff=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"seconds",r="seconds"==n?1e3:1;return Math.floor((t-e)/r)};var ti=Me.filter,ei=Ge("filter"),ni=Qe("filter");ie({target:"Array",proto:!0,forced:!ei||!ni},{filter:function(t){return ti(this,t,arguments.length>1?arguments[1]:void 0)}});var ri=function(t,e){var n=[][t];return!!n&&s((function(){n.call(null,e||function(){throw 1},1)}))},ii=[].join,oi=p!=Object,ai=ri("join",",");ie({target:"Array",proto:!0,forced:oi||!ai},{join:function(t){return ii.call(d(this),void 0===t?",":t)}});var ci=function(t){return function(e,n,r,i){Ie(n);var o=oe(e),a=p(o),c=$(o.length),s=t?c-1:0,u=t?-1:1;if(r<2)for(;;){if(s in a){i=a[s],s+=u;break}if(s+=u,t?s<0:c<=s)throw TypeError("Reduce of empty array with no initial value")}for(;t?s>=0:c>s;s+=u)s in a&&(i=n(i,a[s],s,o));return i}},si={left:ci(!1),right:ci(!0)}.left,ui=ri("reduce"),fi=Qe("reduce",{1:0});ie({target:"Array",proto:!0,forced:!ui||!fi},{reduce:function(t){return si(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}});var li=s((function(){ot(1)}));ie({target:"Object",stat:!0,forced:li},{keys:function(t){return ot(oe(t))}});var pi=function(){var t=T(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function hi(t,e){return RegExp(t,e)}var di,vi,yi={UNSUPPORTED_Y:s((function(){var t=hi("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:s((function(){var t=hi("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},mi=RegExp.prototype.exec,gi=String.prototype.replace,bi=mi,wi=(di=/a/,vi=/b*/g,mi.call(di,"a"),mi.call(vi,"a"),0!==di.lastIndex||0!==vi.lastIndex),Ei=yi.UNSUPPORTED_Y||yi.BROKEN_CARET,Si=void 0!==/()??/.exec("")[1];(wi||Si||Ei)&&(bi=function(t){var e,n,r,i,o=this,a=Ei&&o.sticky,c=pi.call(o),s=o.source,u=0,f=t;return a&&(-1===(c=c.replace("y","")).indexOf("g")&&(c+="g"),f=String(t).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==t[o.lastIndex-1])&&(s="(?: "+s+")",f=" "+f,u++),n=new RegExp("^(?:"+s+")",c)),Si&&(n=new RegExp("^"+s+"$(?!\\s)",c)),wi&&(e=o.lastIndex),r=mi.call(a?n:o,f),a?r?(r.input=r.input.slice(u),r[0]=r[0].slice(u),r.index=o.lastIndex,o.lastIndex+=r[0].length):o.lastIndex=0:wi&&r&&(o.lastIndex=o.global?r.index+r[0].length:e),Si&&r&&r.length>1&&gi.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r});var ji=bi;ie({target:"RegExp",proto:!0,forced:/./.exec!==ji},{exec:ji});var Oi=z("species"),xi=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),Ti="$0"==="a".replace(/./,"$0"),_i=z("replace"),Pi=!!/./[_i]&&""===/./[_i]("a","$0"),Ii=!s((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),Li=Vr.charAt,Ai=function(t,e,n){return e+(n?Li(t,e).length:1)},ki=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==f(t))throw TypeError("RegExp#exec called on incompatible receiver");return ji.call(t,e)};function Ri(){this.timeout=1e4}!function(t,e,n,r){var i=z(t),o=!s((function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})),a=o&&!s((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[Oi]=function(){return n},n.flags="",n[i]=/./[i]),n.exec=function(){return e=!0,null},n[i](""),!e}));if(!o||!a||"replace"===t&&(!xi||!Ti||Pi)||"split"===t&&!Ii){var c=/./[i],u=n(i,""[t],(function(t,e,n,r,i){return e.exec===ji?o&&!i?{done:!0,value:c.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:Ti,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Pi}),f=u[0],l=u[1];Kt(String.prototype,t,f),Kt(RegExp.prototype,i,2==e?function(t,e){return l.call(t,this,e)}:function(t){return l.call(t,this)})}r&&A(RegExp.prototype[i],"sham",!0)}("match",1,(function(t,e,n){return[function(e){var n=h(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=T(t),o=String(this);if(!i.global)return ki(i,o);var a=i.unicode;i.lastIndex=0;for(var c,s=[],u=0;null!==(c=ki(i,o));){var f=String(c[0]);s[u]=f,""===f&&(i.lastIndex=Ai(o,$(i.lastIndex),a)),u++}return 0===u?null:s}]})),Ri.prototype.reCSSExt=/(.css)/,Ri.prototype.supportedLocations=["bodyEnd","bodyStart","headEnd"],Ri.prototype.inject=function(t,e){var n=this;if(!e.id)throw new Error("Missing id for an injected script.");var r=n.reCSSExt.test(t),i=r?"link":"script";return new Promise((function(o,a){if(document.getElementById(e.id))return o(e.id);var c=setTimeout((function(){return a(new Error("TIMEOUT"))}),n.timeout),s=document.createElement(i);function u(){return r&&(s.media=e.media||"all"),clearTimeout(c),o(e.id)}s.id=e.id,"link"==i&&(s.rel="stylesheet",s.href=t,s.media="only x"),"script"==i&&(s.type=e.type||"text/javascript",s.async=!e.hasOwnProperty("async")||e.async),e.attrs&&Object.keys(e.attrs).map((function(t){return s.setAttribute(t,e.attrs[t])})),s.addEventListener?s.addEventListener("load",u,!1):s.readyState?s.onreadystatechange=u:s.onload&&(s.onload=u),s.onerror&&(s.onerror=function(t){return clearTimeout(c),a(t)}),"script"==i&&(s.src=t),n.injectToLocation(s,e.location)}))},Ri.prototype.injectJSONLD=function(t,e){if(e.id&&document.getElementById(e.id))return null;var n=document.createElement("script");n.type="application/ld+json",e.id&&(n.id=e.id),e.attrs&&Object.keys(e.attrs).map((function(t){return n.setAttribute(t,e.attrs[t])})),n.text="string"==typeof t?t:JSON.stringify(t),this.injectToLocation(n,e.location)},Ri.prototype.injectToLocation=function(t,e){var n=e||this.supportedLocations[0];if(-1!==this.supportedLocations.indexOf(n)){var r=document.getElementsByTagName("head")[0],i=document.getElementsByTagName("body")[0];"headEnd"==n?r.insertBefore(t,null):"bodyEnd"==n?i.insertBefore(t,null):"bodyStart"==n&&i.insertBefore(t,i.firstChild)}},Ri.prototype.remove=function(t){var e=document.getElementById(t);e&&e.parentNode.removeChild(e)};var Ni=new Ri;function Ci(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.id=t.id,this.userID=t.userID,this.initOpts={send_page_view:!1},this.userID&&(this.initOpts.user_id=this.userID),this.ready=!1,this.client=null,this.scriptTagID="lighthouse-service-google-analytics",this.scriptURL="https://www.googletagmanager.com/gtag/js?id="+this.id,this.reservedEventNames={screenView:"screen_view",time:"timing_complete",error:"exception",share:"share",search:"search",login:"login",signup:"sign_up"},this.parameterReference={screen_view:{params:["screen_name","app_name","app_id","app_version","app_installer_id"],match:{title:"screen_name",appName:"app_name",appID:"app_id",appVersion:"app_version",appInstallerID:"app_installer_id"},requiredParams:["screen_name","app_name"]},timing_complete:{params:["name","value","event_category","event_label"],match:{name:"event_category",category:"name",value:"value"},requiredParams:["name","value"]},exception:{params:["description","fatal"],match:{debug:"description"},requiredParams:["description"]},share:{params:["method","content_id","content_type"],match:{channel:"method",id:"content_id"},requiredParams:["method"]},search:{params:["term"],match:{term:"term"},requiredParams:["term"]}}}Ci.prototype.install=function(t){var e=this;return e.client=t,e.client.window.dataLayer=e.client.window.dataLayer||[],e.client.window.gtag=function(){dataLayer.push(arguments)},e.client.window.gtag("js",new Date),e.client.window.gtag("config",e.id,e.initOpts),new Promise((function(t,n){Ni.inject(e.scriptURL,{id:e.scriptTagID,location:"afterScript"}).then((function(){return e.ready=!0,t()})).catch((function(n){return e.client.emit("error",n),t()}))}))},Ci.prototype.event=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!0===this.ready){var n=this.findLocalEventName(t,e);if("screen_view"==n){var i=this.generatePageLoadParams(e);r.typekit.isObject(i)&&self.client.window.gtag("config",this.id,i)}var o=this.generateLocalParams(n,e);if(!r.typekit.isUndefined(o)){var a=this.parameterReference.hasOwnProperty(n);if(a){var c=this.parameterReference[n];if(c.hasOwnProperty("requiredParams")){var s=c.requiredParams.filter((function(t){return!0!==o.hasOwnProperty(t)}));if(s&&s.length>0)return void this.client.emit("error",[new Error("MISSING_PARAMS"),s.join(",")])}}self.client.window.gtag("event",n,o)}}},Ci.prototype.findLocalEventName=function(t,e){return"view"==t&&"screen"==r.objectkit.getProp(e,"category","")?this.reservedEventNames.screenView:this.reservedEventNames.hasOwnProperty(t)?this.reservedEventNames[t]:t},Ci.prototype.generateLocalParams=function(t,e){this.client.kit;var n=this.parameterReference.hasOwnProperty(t);if(n||e.hasOwnProperty("value")){if(!n&&e.hasOwnProperty("value"))return Object.assign({},{event_callback:function(){}},{event_label:e.value,event_category:"engagement"});var i=this.parameterReference[t],o=r.typekit.isObject(e.googleAnalytics)?e.googleAnalytics:{},a=Object.keys(i.match).reduce((function(t,n){return e.hasOwnProperty(n)&&(t[i.match[n]]=e[n]),t}),{});return Object.assign({},{event_callback:function(){}},a,o)}},Ci.prototype.generatePageLoadParams=function(t){this.client.kit;if(t.hasOwnProperty("path")&&r.validationkit.isNotEmpty(t.path)){var e={page_path:t.path,page_title:t.title};return r.validationkit.isNotEmpty(t.url)&&(e.page_location=t.url),e}},exports.LAGoogleAnalytics=Ci,exports.LighthouseAnalytics=Zr;
