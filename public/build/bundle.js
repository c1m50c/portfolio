var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let a,i;function l(t,n){return a||(a=document.createElement("a")),a.href=n,t===a.href}function c(t,n,e,r){if(t){const o=g(t,n,e,r);return t[0](o)}}function g(t,n,e,r){return t[1]&&r?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](r(n))):e.ctx}function u(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(void 0===n.dirty)return o;if("object"==typeof o){const t=[],e=Math.max(n.dirty.length,o.length);for(let r=0;r<e;r+=1)t[r]=n.dirty[r]|o[r];return t}return n.dirty|o}return n.dirty}function $(t,n,e,r,o,s){if(o){const a=g(n,e,r,s);t.p(a,o)}}function m(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function p(t,n){t.appendChild(n)}function f(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function k(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function w(){return b(" ")}function v(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function C(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function y(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}function x(t){i=t}const L=[],M=[],S=[],j=[],V=Promise.resolve();let _=!1;function P(t){S.push(t)}let G=!1;const H=new Set;function T(){if(!G){G=!0;do{for(let t=0;t<L.length;t+=1){const n=L[t];x(n),A(n.$$)}for(x(null),L.length=0;M.length;)M.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];H.has(n)||(H.add(n),n())}S.length=0}while(L.length);for(;j.length;)j.pop()();_=!1,G=!1,H.clear()}}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(P)}}const q=new Set;function B(t,n){t&&t.i&&(q.delete(t),t.i(n))}function R(t,n,e,r){if(t&&t.o){if(q.has(t))return;q.add(t),undefined.c.push((()=>{q.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function z(t){t&&t.c()}function E(t,e,s,a){const{fragment:i,on_mount:l,on_destroy:c,after_update:g}=t.$$;i&&i.m(e,s),a||P((()=>{const e=l.map(n).filter(o);c?c.push(...e):r(e),t.$$.on_mount=[]})),g.forEach(P)}function I(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function O(t,n){-1===t.$$.dirty[0]&&(L.push(t),_||(_=!0,V.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function J(n,o,s,a,l,c,g,u=[-1]){const $=i;x(n);const m=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map($?$.$$.context:o.context||[]),callbacks:e(),dirty:u,skip_bound:!1,root:o.target||$.$$.root};g&&g(m.root);let p=!1;if(m.ctx=s?s(n,o.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return m.ctx&&l(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),p&&O(n,t)),e})):[],m.update(),p=!0,r(m.before_update),m.fragment=!!a&&a(m.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);m.fragment&&m.fragment.l(t),t.forEach(d)}else m.fragment&&m.fragment.c();o.intro&&B(n.$$.fragment),E(n,o.target,o.anchor,o.customElement),T()}x($)}class N{$destroy(){I(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Q(n){let e;return{c(){e=h("div"),e.innerHTML='<nav class="navigation-bar svelte-1qfn9lh"><a class="navbar-link svelte-1qfn9lh" href="#">Welcome</a> \n        <a class="navbar-link svelte-1qfn9lh" href="#skills">Skills</a> \n        <a class="navbar-link svelte-1qfn9lh" href="#projects">Projects</a> \n        <a class="navbar-link svelte-1qfn9lh" href="#contact">Contact</a></nav>',v(e,"class","navigation-bar-container svelte-1qfn9lh")},m(t,n){f(t,e,n)},p:t,i:t,o:t,d(t){t&&d(e)}}}class Z extends N{constructor(t){super(),J(this,t,null,Q,s,{})}}function W(n){let e;return{c(){e=h("div"),e.innerHTML='<svg width="328" height="368" viewBox="0 0 328 368" xmlns="http://www.w3.org/2000/svg" id="logo" class="svelte-p75hal"><g><path id="logo-path" d="M134.015 82.5174C137.643 121.896 143.026 161.079 148.566 200.225C155.324 245.741 162.326 291.223 169.81 336.626C171.043 343.938 172.35 351.238 173.65 358.539C176.091 372.248 195.478 368.796 193.038 355.087C191.753 347.869 190.46 340.652 189.241 333.423C181.78 288.167 174.801 242.833 168.064 197.465C162.61 158.937 157.331 120.373 153.687 81.6232C153.055 67.7128 133.383 68.607 134.015 82.5174Z" class="svelte-p75hal"></path><path id="logo-path" d="M95.5772 233.886C97.5979 233.631 99.629 233.448 101.639 233.12C120.469 230.047 139.208 225.43 157.254 219.25C167.749 215.656 178.214 211.904 188.348 207.396C199.905 202.256 210.945 196.027 222.244 190.342C233.108 183.274 244.389 176.809 254.836 169.138C273.343 155.548 291.515 139.359 305.406 120.892C315.812 107.059 325.939 89.052 327.276 71.163C327.889 62.9531 325.176 54.8319 324.126 46.6664C319.359 39.4591 316.093 30.9932 309.825 25.0444C293.29 9.35003 270.982 3.12849 248.96 0.917283C220.119 -1.97867 185.507 2.35398 157.62 8.71109C141.491 12.3879 125.898 18.1124 110.037 22.813C74.6917 37.2926 64.1088 40.1281 32.069 58.6398C22.7372 64.0315 14.0258 70.4321 5.00424 76.3283C-6.64025 83.964 4.15833 100.432 15.8028 92.7961C24.2578 87.2322 32.4147 81.1865 41.1677 76.1044C71.7298 58.3597 81.9259 55.5919 115.663 41.6846C130.697 37.1734 145.476 31.7068 160.764 28.151C186.837 22.0869 217.798 18.126 244.805 20.1664C261.986 21.4646 279.966 25.614 293.847 36.5554C298.335 40.0931 301.076 45.4088 304.69 49.8355C305.863 55.3024 308.39 60.6479 308.209 66.2364C307.724 81.2555 299.276 96.2226 290.728 107.763C277.939 125.03 261.234 139.959 244.071 152.648C234.233 159.922 223.603 166.058 213.369 172.763C202.685 178.176 192.25 184.111 181.317 189.001C171.653 193.325 161.67 196.922 151.66 200.369C133.138 206.747 113.922 211.398 94.5422 214.22C80.6367 214.952 81.6717 234.618 95.5772 233.886V233.886Z" class="svelte-p75hal"></path></g></svg> \n    <div id="h2-container" class="svelte-p75hal"><h2 id="hey" class="svelte-p75hal">Hey, I&#39;m Pere</h2> \n        <p id="hook" class="svelte-p75hal">I do software development</p></div>',v(e,"class","info-container svelte-p75hal"),v(e,"id","welcome")},m(t,n){f(t,e,n)},p:t,i:t,o:t,d(t){t&&d(e)}}}class D extends N{constructor(t){super(),J(this,t,null,W,s,{})}}function F(n){let e,r,o,s;return{c(){e=h("a"),r=h("h3"),o=b(n[1]),v(r,"class","svelte-bfpjql"),v(e,"class",s="link-button skill-button "+n[0]+" svelte-bfpjql"),v(e,"href",n[2])},m(t,n){f(t,e,n),p(e,r),p(r,o)},p(t,[n]){2&n&&C(o,t[1]),1&n&&s!==(s="link-button skill-button "+t[0]+" svelte-bfpjql")&&v(e,"class",s),4&n&&v(e,"href",t[2])},i:t,o:t,d(t){t&&d(e)}}}var K,U;function X(t,n,e){let{background:r}=n,{name:o}=n,{link:s}=n;return t.$$set=t=>{"background"in t&&e(0,r=t.background),"name"in t&&e(1,o=t.name),"link"in t&&e(2,s=t.link)},[r,o,s]}!function(t){t.Python="python",t.Rust="rust",t.Go="go",t.JavaScript="java-script",t.TypeScript="type-script",t.HTML="html",t.CSS="css",t.SQL="sql",t.C="c",t.CPlusPlus="cpp",t.CSharp="c-sharp",t.Lua="lua",t.Godot="godot",t.Google="google",t.Git="git",t.WebAssembly="web-assembly"}(K||(K={}));class Y extends N{constructor(t){super(),J(this,t,X,F,s,{background:0,name:1,link:2})}}function tt(n){let e,r,o,s,a,i,l,c,g,u,$,m,k,b,C,y,x,L,M,S,j,V,_,P,G,H,T,A,q,O,J,N,Q,Z,W,D,F,U,X,tt,nt,et,rt,ot,st,at,it,lt,ct,gt,ut,$t,mt,pt,ft,dt,ht,kt,bt,wt,vt,Ct,yt,xt,Lt,Mt,St,jt,Vt,_t,Pt,Gt,Ht,Tt,At,qt,Bt,Rt,zt;return c=new Y({props:{background:K.Python,name:"Python 🐍",link:"https://www.python.org/"}}),u=new Y({props:{background:K.Rust,name:"Rust 🦀",link:"https://www.rust-lang.org/"}}),m=new Y({props:{background:K.Go,name:"Go 💨",link:"https://golang.org/"}}),b=new Y({props:{background:K.JavaScript,name:"JavaScript ☕",link:"https://www.javascript.com/"}}),y=new Y({props:{background:K.TypeScript,name:"TypeScript 📰",link:"https://www.typescriptlang.org/"}}),L=new Y({props:{background:K.HTML,name:"HTML 📄",link:"https://en.wikipedia.org/wiki/HTML"}}),S=new Y({props:{background:K.CSS,name:"CSS 📑",link:"https://en.wikipedia.org/wiki/CSS"}}),V=new Y({props:{background:K.SQL,name:"SQL 📂",link:"https://en.wikipedia.org/wiki/SQL"}}),P=new Y({props:{background:K.C,name:"C 🔧",link:"https://en.wikipedia.org/wiki/C_(programming_background)"}}),H=new Y({props:{background:K.CPlusPlus,name:"C++ 🔨",link:"https://en.wikipedia.org/wiki/C%2B%2B"}}),A=new Y({props:{background:K.CSharp,name:"C# 🌳",link:"https://docs.microsoft.com/en-us/dotnet/csharp/"}}),O=new Y({props:{background:K.Lua,name:"Lua 🌌",link:"https://www.lua.org/"}}),N=new Y({props:{background:K.Godot,name:"GDScript 🎮",link:"https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/index.html"}}),U=new Y({props:{background:K.Python,name:"Matplotlib 📊",link:"https://matplotlib.org"}}),tt=new Y({props:{background:K.Python,name:"Pandas 🐼",link:"https://pandas.pydata.org/"}}),et=new Y({props:{background:K.Python,name:"NumPy 🧮",link:"https://numpy.org/"}}),ot=new Y({props:{background:K.Python,name:"PyTest 🥼",link:"https://github.com/pytest-dev/pytest"}}),at=new Y({props:{background:K.Python,name:"OpenCV 📸",link:"https://opencv.org/"}}),lt=new Y({props:{background:K.Python,name:"Mediapipe 🔬",link:"https://google.github.io/mediapipe/"}}),gt=new Y({props:{background:K.Python,name:"Flask 🧪",link:"https://github.com/pallets/flask/"}}),$t=new Y({props:{background:K.Rust,name:"CPython 🔗",link:"https://github.com/dgrunwald/rust-cpython"}}),pt=new Y({props:{background:K.SQL,name:"SQLite 💾",link:"https://sqlite.org/index.html"}}),dt=new Y({props:{background:K.JavaScript,name:"React ⚡",link:"https://reactjs.org/"}}),kt=new Y({props:{background:K.JavaScript,name:"Vue 🌴",link:"https://vuejs.org/"}}),wt=new Y({props:{background:K.JavaScript,name:"Svelte 📙",link:"https://svelte.dev/"}}),Ct=new Y({props:{background:K.CSS,name:"Tailwind 🍃",link:"https://tailwindcss.com/"}}),xt=new Y({props:{background:K.CSS,name:"SASS 💄",link:"https://sass-lang.com/"}}),Mt=new Y({props:{background:K.Godot,name:"Godot 🤖",link:"https://godotengine.org/"}}),Gt=new Y({props:{background:K.Google,name:"Googling 🔍",link:"https://google.com"}}),Tt=new Y({props:{background:K.Git,name:"Git 💻",link:"https://git-scm.com/"}}),qt=new Y({props:{background:K.JavaScript,name:"NPM 📦",link:"https://www.npmjs.com/"}}),Rt=new Y({props:{background:K.WebAssembly,name:"WebAssembly 🏭",link:"https://webassembly.org/"}}),{c(){e=h("div"),r=h("h1"),r.textContent="Skills",o=w(),s=h("div"),a=h("h2"),a.textContent="Languages 💬",i=w(),l=h("div"),z(c.$$.fragment),g=w(),z(u.$$.fragment),$=w(),z(m.$$.fragment),k=w(),z(b.$$.fragment),C=w(),z(y.$$.fragment),x=w(),z(L.$$.fragment),M=w(),z(S.$$.fragment),j=w(),z(V.$$.fragment),_=w(),z(P.$$.fragment),G=w(),z(H.$$.fragment),T=w(),z(A.$$.fragment),q=w(),z(O.$$.fragment),J=w(),z(N.$$.fragment),Q=w(),Z=h("div"),W=h("h2"),W.textContent="Libraries, Engines & Frameworks 📚",D=w(),F=h("div"),z(U.$$.fragment),X=w(),z(tt.$$.fragment),nt=w(),z(et.$$.fragment),rt=w(),z(ot.$$.fragment),st=w(),z(at.$$.fragment),it=w(),z(lt.$$.fragment),ct=w(),z(gt.$$.fragment),ut=w(),z($t.$$.fragment),mt=w(),z(pt.$$.fragment),ft=w(),z(dt.$$.fragment),ht=w(),z(kt.$$.fragment),bt=w(),z(wt.$$.fragment),vt=w(),z(Ct.$$.fragment),yt=w(),z(xt.$$.fragment),Lt=w(),z(Mt.$$.fragment),St=w(),jt=h("div"),Vt=h("h2"),Vt.textContent="Miscellaneous Technologies ❓",_t=w(),Pt=h("div"),z(Gt.$$.fragment),Ht=w(),z(Tt.$$.fragment),At=w(),z(qt.$$.fragment),Bt=w(),z(Rt.$$.fragment),v(r,"class","section-title svelte-8j7hs"),v(a,"class","section-title svelte-8j7hs"),v(l,"class","info-card-container svelte-8j7hs"),v(s,"class","languages-container"),v(W,"class","section-title svelte-8j7hs"),v(F,"class","info-card-container svelte-8j7hs"),v(Z,"class","libraies-engines-and-frameworks-container"),v(Vt,"class","section-title svelte-8j7hs"),v(Pt,"class","info-card-container svelte-8j7hs"),v(jt,"class","misc-tech-container"),v(e,"class","info-container svelte-8j7hs"),v(e,"id","skills")},m(t,n){f(t,e,n),p(e,r),p(e,o),p(e,s),p(s,a),p(s,i),p(s,l),E(c,l,null),p(l,g),E(u,l,null),p(l,$),E(m,l,null),p(l,k),E(b,l,null),p(l,C),E(y,l,null),p(l,x),E(L,l,null),p(l,M),E(S,l,null),p(l,j),E(V,l,null),p(l,_),E(P,l,null),p(l,G),E(H,l,null),p(l,T),E(A,l,null),p(l,q),E(O,l,null),p(l,J),E(N,l,null),p(e,Q),p(e,Z),p(Z,W),p(Z,D),p(Z,F),E(U,F,null),p(F,X),E(tt,F,null),p(F,nt),E(et,F,null),p(F,rt),E(ot,F,null),p(F,st),E(at,F,null),p(F,it),E(lt,F,null),p(F,ct),E(gt,F,null),p(F,ut),E($t,F,null),p(F,mt),E(pt,F,null),p(F,ft),E(dt,F,null),p(F,ht),E(kt,F,null),p(F,bt),E(wt,F,null),p(F,vt),E(Ct,F,null),p(F,yt),E(xt,F,null),p(F,Lt),E(Mt,F,null),p(e,St),p(e,jt),p(jt,Vt),p(jt,_t),p(jt,Pt),E(Gt,Pt,null),p(Pt,Ht),E(Tt,Pt,null),p(Pt,At),E(qt,Pt,null),p(Pt,Bt),E(Rt,Pt,null),zt=!0},p:t,i(t){zt||(B(c.$$.fragment,t),B(u.$$.fragment,t),B(m.$$.fragment,t),B(b.$$.fragment,t),B(y.$$.fragment,t),B(L.$$.fragment,t),B(S.$$.fragment,t),B(V.$$.fragment,t),B(P.$$.fragment,t),B(H.$$.fragment,t),B(A.$$.fragment,t),B(O.$$.fragment,t),B(N.$$.fragment,t),B(U.$$.fragment,t),B(tt.$$.fragment,t),B(et.$$.fragment,t),B(ot.$$.fragment,t),B(at.$$.fragment,t),B(lt.$$.fragment,t),B(gt.$$.fragment,t),B($t.$$.fragment,t),B(pt.$$.fragment,t),B(dt.$$.fragment,t),B(kt.$$.fragment,t),B(wt.$$.fragment,t),B(Ct.$$.fragment,t),B(xt.$$.fragment,t),B(Mt.$$.fragment,t),B(Gt.$$.fragment,t),B(Tt.$$.fragment,t),B(qt.$$.fragment,t),B(Rt.$$.fragment,t),zt=!0)},o(t){R(c.$$.fragment,t),R(u.$$.fragment,t),R(m.$$.fragment,t),R(b.$$.fragment,t),R(y.$$.fragment,t),R(L.$$.fragment,t),R(S.$$.fragment,t),R(V.$$.fragment,t),R(P.$$.fragment,t),R(H.$$.fragment,t),R(A.$$.fragment,t),R(O.$$.fragment,t),R(N.$$.fragment,t),R(U.$$.fragment,t),R(tt.$$.fragment,t),R(et.$$.fragment,t),R(ot.$$.fragment,t),R(at.$$.fragment,t),R(lt.$$.fragment,t),R(gt.$$.fragment,t),R($t.$$.fragment,t),R(pt.$$.fragment,t),R(dt.$$.fragment,t),R(kt.$$.fragment,t),R(wt.$$.fragment,t),R(Ct.$$.fragment,t),R(xt.$$.fragment,t),R(Mt.$$.fragment,t),R(Gt.$$.fragment,t),R(Tt.$$.fragment,t),R(qt.$$.fragment,t),R(Rt.$$.fragment,t),zt=!1},d(t){t&&d(e),I(c),I(u),I(m),I(b),I(y),I(L),I(S),I(V),I(P),I(H),I(A),I(O),I(N),I(U),I(tt),I(et),I(ot),I(at),I(lt),I(gt),I($t),I(pt),I(dt),I(kt),I(wt),I(Ct),I(xt),I(Mt),I(Gt),I(Tt),I(qt),I(Rt)}}}class nt extends N{constructor(t){super(),J(this,t,null,tt,s,{})}}function et(n){let e,r,o;return{c(){e=k("svg"),r=k("path"),o=k("path"),v(r,"d","M10 7L14.5 5L19.25 7L24 9V15V21L19.5 23L14.5 25L10 23L5 20.5V15L10 13V10.5V7Z"),v(o,"d","M10 7L14.5 5L19.25 7M10 7L14.5 9M10 7V10.5M14.5 9L10 10.5M14.5 9L19 11M14.5 9L19.25 7M10 10.5L14.5 12.5M10 10.5V13M10 17L14.5 19M10 17V23M10 17L5 15M10 17V13M14.5 19V12.5M14.5 19L19.25 17M14.5 19V25M14.5 12.5L19 11M24 9V15M24 9L19.25 7M24 9L19.25 10.9M24 15V21L19.5 23M24 15L19.5 16.8947M19 11L19.25 10.9M19.25 10.9V17M19.25 17L19.5 16.8947M19.5 23V16.8947M19.5 23L14.5 25M14.5 25L10 23M10 23L5 20.5V15M5 15L10 13"),v(o,"stroke","black"),v(o,"stroke-width","0.25"),v(o,"stroke-linejoin","round"),v(e,"xmlns","http://www.w3.org/2000/svg"),v(e,"viewBox","0 0 30 30"),v(e,"class","crates-io-logo logo")},m(t,n){f(t,e,n),p(e,r),p(e,o)},p:t,d(t){t&&d(e)}}}function rt(t){let n,e,r;return{c(){n=k("svg"),e=k("path"),v(e,"d","M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"),v(n,"xmlns","http://www.w3.org/2000/svg"),v(n,"viewBox","0 0 30 30"),v(n,"class",r=t[1]+"-logo logo")},m(t,r){f(t,n,r),p(n,e)},p(t,e){2&e&&r!==(r=t[1]+"-logo logo")&&v(n,"class",r)},d(t){t&&d(n)}}}function ot(t){let n,e,r;return{c(){n=k("svg"),e=k("path"),v(e,"d","M11.9985 2.25C10.6688 2.25 4.1514 5.98793 3.49365 7.12793C2.83515 8.26868 2.83515 15.7373 3.49365 16.8735C4.1544 18.0128 10.6718 21.75 11.9985 21.75C13.3215 21.75 19.8389 18.015 20.5019 16.8765C21.1672 15.735 21.1672 8.26054 20.5019 7.12354V7.12207C19.8337 5.98432 13.317 2.25 11.9985 2.25ZM11.9971 3.75879C13.2698 4.02354 18.3133 6.91257 19.1968 7.88232C19.6018 9.11307 19.601 14.8832 19.1968 16.1162C18.3193 17.0845 13.2713 19.9772 11.9971 20.2412C10.7236 19.9787 5.67929 17.0874 4.80029 16.1177C4.39904 14.8817 4.39904 9.11682 4.80029 7.88232C5.67704 6.91257 10.7228 4.02129 11.9971 3.75879ZM9.74999 6.75L8.24999 8.25H8.99999V15.75H10.5V12.75H13.5V15.75H12.75L14.25 17.25L15.75 15.75H15V9H13.5V11.25H10.5V8.25H11.25L9.74999 6.75Z"),v(n,"xmlns","http://www.w3.org/2000/svg"),v(n,"viewBox","0 0 24 24"),v(n,"class",r=t[1]+"-logo logo")},m(t,r){f(t,n,r),p(n,e)},p(t,e){2&e&&r!==(r=t[1]+"-logo logo")&&v(n,"class",r)},d(t){t&&d(n)}}}function st(t){let n,e,r;return{c(){n=k("svg"),e=k("path"),v(e,"d","M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"),v(n,"xmlns","http://www.w3.org/2000/svg"),v(n,"viewBox","0 0 24 24"),v(n,"class",r=t[1]+"-logo logo")},m(t,r){f(t,n,r),p(n,e)},p(t,e){2&e&&r!==(r=t[1]+"-logo logo")&&v(n,"class",r)},d(t){t&&d(n)}}}function at(n){let e,r;function o(t,n){return t[1]==U.Github?st:t[1]==U.HackerRank?ot:t[1]==U.LinkedIn?rt:t[1]==U.CratesIO?et:void 0}let s=o(n),a=s&&s(n);return{c(){e=h("a"),a&&a.c(),v(e,"href",n[0]),v(e,"class",r=n[1]+"-link logo-link")},m(t,n){f(t,e,n),a&&a.m(e,null)},p(t,[n]){s===(s=o(t))&&a?a.p(t,n):(a&&a.d(1),a=s&&s(t),a&&(a.c(),a.m(e,null))),1&n&&v(e,"href",t[0]),2&n&&r!==(r=t[1]+"-link logo-link")&&v(e,"class",r)},i:t,o:t,d(t){t&&d(e),a&&a.d()}}}function it(t,n,e){let{link:r}=n,{icon:o}=n;return t.$$set=t=>{"link"in t&&e(0,r=t.link),"icon"in t&&e(1,o=t.icon)},[r,o]}!function(t){t.Github="github",t.HackerRank="hacker-rank",t.LinkedIn="linked-in",t.CratesIO="crates-io"}(U||(U={}));class lt extends N{constructor(t){super(),J(this,t,it,at,s,{link:0,icon:1})}}const ct=t=>({}),gt=t=>({class:"logo-link-container svelte-2oibxt"}),ut=t=>({}),$t=t=>({});function mt(t){let n,e,r,o,s,a,i,l,g,k,x,L;const M=t[4]["status-badge"],S=c(M,t,t[3],$t),j=t[4]["logo-link-container"],V=c(j,t,t[3],gt);return{c(){n=h("div"),e=h("div"),r=w(),o=h("div"),s=h("h1"),a=b(t[0]),i=w(),l=h("p"),g=b(t[1]),k=w(),S&&S.c(),x=w(),V&&V.c(),v(e,"class","bg-image svelte-2oibxt"),y(e,"background-image","url("+t[2]+")"),v(o,"class","project-card-details"),v(n,"class","project-card svelte-2oibxt")},m(t,c){f(t,n,c),p(n,e),p(n,r),p(n,o),p(o,s),p(s,a),p(o,i),p(o,l),p(l,g),p(o,k),S&&S.m(o,null),p(o,x),V&&V.m(o,null),L=!0},p(t,[n]){(!L||4&n)&&y(e,"background-image","url("+t[2]+")"),(!L||1&n)&&C(a,t[0]),(!L||2&n)&&C(g,t[1]),S&&S.p&&(!L||8&n)&&$(S,M,t,t[3],L?u(M,t[3],n,ut):m(t[3]),$t),V&&V.p&&(!L||8&n)&&$(V,j,t,t[3],L?u(j,t[3],n,ct):m(t[3]),gt)},i(t){L||(B(S,t),B(V,t),L=!0)},o(t){R(S,t),R(V,t),L=!1},d(t){t&&d(n),S&&S.d(t),V&&V.d(t)}}}function pt(t,n,e){let{$$slots:r={},$$scope:o}=n,{title:s}=n,{description:a}=n,{background_url:i}=n;return t.$$set=t=>{"title"in t&&e(0,s=t.title),"description"in t&&e(1,a=t.description),"background_url"in t&&e(2,i=t.background_url),"$$scope"in t&&e(3,o=t.$$scope)},[s,a,i,o,r]}class ft extends N{constructor(t){super(),J(this,t,pt,mt,s,{title:0,description:1,background_url:2})}}function dt(t){let n;return{c(){n=h("div"),n.innerHTML='<img src="https://img.shields.io/github/license/c1m50c/portfolio?color=blue&amp;style=for-the-badge" alt="License"/> \n        <img src="https://img.shields.io/tokei/lines/github/c1m50c/portfolio?style=for-the-badge" alt="Lines of Code"/>',v(n,"slot","status-badge")},m(t,e){f(t,n,e)},d(t){t&&d(n)}}}function ht(n){let e,r,o;return r=new lt({props:{link:"https://github.com/c1m50c/portfolio",icon:U.Github}}),{c(){e=h("div"),z(r.$$.fragment),v(e,"slot","logo-link-container")},m(t,n){f(t,e,n),E(r,e,null),o=!0},p:t,i(t){o||(B(r.$$.fragment,t),o=!0)},o(t){R(r.$$.fragment,t),o=!1},d(t){t&&d(e),I(r)}}}function kt(t){let n,e;return n=new ft({props:{title:"Portfolio",description:"My personal portfolio site, the site you're seeing right now.",background_url:"./projects/portfolio.png",$$slots:{"logo-link-container":[ht],"status-badge":[dt]},$$scope:{ctx:t}}}),{c(){z(n.$$.fragment)},m(t,r){E(n,t,r),e=!0},p(t,[e]){const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){e||(B(n.$$.fragment,t),e=!0)},o(t){R(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}class bt extends N{constructor(t){super(),J(this,t,null,kt,s,{})}}function wt(n){let e,r,o;return r=new lt({props:{link:"https://github.com/c1m50c/cellular-automata",icon:U.Github}}),{c(){e=h("div"),z(r.$$.fragment),v(e,"slot","logo-link-container")},m(t,n){f(t,e,n),E(r,e,null),o=!0},p:t,i(t){o||(B(r.$$.fragment,t),o=!0)},o(t){R(r.$$.fragment,t),o=!1},d(t){t&&d(e),I(r)}}}function vt(t){let n,e;return n=new ft({props:{title:"Cellular Automata",description:"Python project implementing Conway's Game of Life with PyGame.",background_url:"./projects/cellular-automata.gif",$$slots:{"logo-link-container":[wt]},$$scope:{ctx:t}}}),{c(){z(n.$$.fragment)},m(t,r){E(n,t,r),e=!0},p(t,[e]){const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){e||(B(n.$$.fragment,t),e=!0)},o(t){R(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}class Ct extends N{constructor(t){super(),J(this,t,null,vt,s,{})}}function yt(t){let n,e;return{c(){n=h("img"),v(n,"slot","status-badge"),l(n.src,e="https://github.com/c1m50c/sorting-algorithm-visualizer/actions/workflows/tests.yml/badge.svg?branch=main")||v(n,"src","https://github.com/c1m50c/sorting-algorithm-visualizer/actions/workflows/tests.yml/badge.svg?branch=main"),v(n,"alt","Tests Status")},m(t,e){f(t,n,e)},d(t){t&&d(n)}}}function xt(n){let e,r,o;return r=new lt({props:{link:"https://github.com/c1m50c/sorting-algorithm-visualizer",icon:U.Github}}),{c(){e=h("div"),z(r.$$.fragment),v(e,"slot","logo-link-container")},m(t,n){f(t,e,n),E(r,e,null),o=!0},p:t,i(t){o||(B(r.$$.fragment,t),o=!0)},o(t){R(r.$$.fragment,t),o=!1},d(t){t&&d(e),I(r)}}}function Lt(t){let n,e;return n=new ft({props:{title:"Sorting Algorithm Visualizer",description:"Visualizes various sorting algorithms using Matplotlib and Python.",background_url:"./projects/sorting-algorithm-visualizer.gif",$$slots:{"logo-link-container":[xt],"status-badge":[yt]},$$scope:{ctx:t}}}),{c(){z(n.$$.fragment)},m(t,r){E(n,t,r),e=!0},p(t,[e]){const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){e||(B(n.$$.fragment,t),e=!0)},o(t){R(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}class Mt extends N{constructor(t){super(),J(this,t,null,Lt,s,{})}}function St(t){let n,e;return{c(){n=h("img"),v(n,"slot","status-badge"),l(n.src,e="https://github.com/c1m50c/rust-algorithms/actions/workflows/build.yml/badge.svg?branch=main")||v(n,"src","https://github.com/c1m50c/rust-algorithms/actions/workflows/build.yml/badge.svg?branch=main"),v(n,"alt","Build Status")},m(t,e){f(t,n,e)},d(t){t&&d(n)}}}function jt(n){let e,r,o;return r=new lt({props:{link:"https://github.com/c1m50c/rust-algorithms",icon:U.Github}}),{c(){e=h("div"),z(r.$$.fragment),v(e,"slot","logo-link-container")},m(t,n){f(t,e,n),E(r,e,null),o=!0},p:t,i(t){o||(B(r.$$.fragment,t),o=!0)},o(t){R(r.$$.fragment,t),o=!1},d(t){t&&d(e),I(r)}}}function Vt(t){let n,e;return n=new ft({props:{title:"Rust Algorithms",description:"A Rust library implementing various algorithms.",background_url:"./projects/rust-algorithms.png",$$slots:{"logo-link-container":[jt],"status-badge":[St]},$$scope:{ctx:t}}}),{c(){z(n.$$.fragment)},m(t,r){E(n,t,r),e=!0},p(t,[e]){const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){e||(B(n.$$.fragment,t),e=!0)},o(t){R(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}class _t extends N{constructor(t){super(),J(this,t,null,Vt,s,{})}}function Pt(t){let n,e;return{c(){n=h("img"),v(n,"slot","status-badge"),l(n.src,e="https://github.com/c1m50c/rust-data-structures/actions/workflows/build.yml/badge.svg?branch=main")||v(n,"src","https://github.com/c1m50c/rust-data-structures/actions/workflows/build.yml/badge.svg?branch=main"),v(n,"alt","Build Status")},m(t,e){f(t,n,e)},d(t){t&&d(n)}}}function Gt(n){let e,r,o;return r=new lt({props:{link:"https://github.com/c1m50c/rust-data-structures",icon:U.Github}}),{c(){e=h("div"),z(r.$$.fragment),v(e,"slot","logo-link-container")},m(t,n){f(t,e,n),E(r,e,null),o=!0},p:t,i(t){o||(B(r.$$.fragment,t),o=!0)},o(t){R(r.$$.fragment,t),o=!1},d(t){t&&d(e),I(r)}}}function Ht(t){let n,e;return n=new ft({props:{title:"Rust Data Structures",description:"A library implementing various Data Structures in Rust, made strictly for learning purposes.",background_url:"./projects/rust-data-structures.png",$$slots:{"logo-link-container":[Gt],"status-badge":[Pt]},$$scope:{ctx:t}}}),{c(){z(n.$$.fragment)},m(t,r){E(n,t,r),e=!0},p(t,[e]){const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){e||(B(n.$$.fragment,t),e=!0)},o(t){R(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}class Tt extends N{constructor(t){super(),J(this,t,null,Ht,s,{})}}function At(t){let n;return{c(){n=h("div"),n.innerHTML='<img src="https://img.shields.io/github/workflow/status/c1m50c/fixed-vectors/Build?style=for-the-badge" alt="Build"/> \n        <img src="https://img.shields.io/crates/v/fixed-vectors?color=orange&amp;style=for-the-badge" alt="CratesIO"/> \n        <img src="https://img.shields.io/crates/l/fixed-vectors?style=for-the-badge" alt="License"/> \n        <img src="https://img.shields.io/tokei/lines/github/c1m50c/fixed-vectors?style=for-the-badge" alt="Lines of Code"/> \n        <img src="https://img.shields.io/github/stars/c1m50c/fixed-vectors?style=for-the-badge" alt="Github Stars"/>',v(n,"slot","status-badge")},m(t,e){f(t,n,e)},d(t){t&&d(n)}}}function qt(n){let e,r,o,s,a;return r=new lt({props:{link:"https://github.com/c1m50c/fixed-vectors",icon:U.Github}}),s=new lt({props:{link:"https://crates.io/crates/fixed-vectors/",icon:U.CratesIO}}),{c(){e=h("div"),z(r.$$.fragment),o=w(),z(s.$$.fragment),v(e,"slot","logo-link-container")},m(t,n){f(t,e,n),E(r,e,null),p(e,o),E(s,e,null),a=!0},p:t,i(t){a||(B(r.$$.fragment,t),B(s.$$.fragment,t),a=!0)},o(t){R(r.$$.fragment,t),R(s.$$.fragment,t),a=!1},d(t){t&&d(e),I(r),I(s)}}}function Bt(t){let n,e;return n=new ft({props:{title:"Fixed Vectors",description:"Library implementing fixed-length Vectors meant for representing dimensional values. ",background_url:"./projects/fixed-vectors.png",$$slots:{"logo-link-container":[qt],"status-badge":[At]},$$scope:{ctx:t}}}),{c(){z(n.$$.fragment)},m(t,r){E(n,t,r),e=!0},p(t,[e]){const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){e||(B(n.$$.fragment,t),e=!0)},o(t){R(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}class Rt extends N{constructor(t){super(),J(this,t,null,Bt,s,{})}}function zt(n){let e,r,o,s,a,i,l,c,g,u,$,m,k,b,C,y;return a=new bt({}),l=new Rt({}),g=new Mt({}),$=new Ct({}),k=new _t({}),C=new Tt({}),{c(){e=h("div"),r=h("h1"),r.textContent="Projects",o=w(),s=h("div"),z(a.$$.fragment),i=w(),z(l.$$.fragment),c=w(),z(g.$$.fragment),u=w(),z($.$$.fragment),m=w(),z(k.$$.fragment),b=w(),z(C.$$.fragment),v(r,"class","section-title"),v(s,"class","project-card-container svelte-alykgw"),v(e,"class","info-container"),v(e,"id","projects")},m(t,n){f(t,e,n),p(e,r),p(e,o),p(e,s),E(a,s,null),p(s,i),E(l,s,null),p(s,c),E(g,s,null),p(s,u),E($,s,null),p(s,m),E(k,s,null),p(s,b),E(C,s,null),y=!0},p:t,i(t){y||(B(a.$$.fragment,t),B(l.$$.fragment,t),B(g.$$.fragment,t),B($.$$.fragment,t),B(k.$$.fragment,t),B(C.$$.fragment,t),y=!0)},o(t){R(a.$$.fragment,t),R(l.$$.fragment,t),R(g.$$.fragment,t),R($.$$.fragment,t),R(k.$$.fragment,t),R(C.$$.fragment,t),y=!1},d(t){t&&d(e),I(a),I(l),I(g),I($),I(k),I(C)}}}class Et extends N{constructor(t){super(),J(this,t,null,zt,s,{})}}function It(n){let e,r,o,s,a,i,l,c,g,u,$,m;return o=new lt({props:{link:Jt,icon:U.Github}}),a=new lt({props:{link:Nt,icon:U.HackerRank}}),l=new lt({props:{link:Qt,icon:U.LinkedIn}}),{c(){e=h("div"),r=h("div"),z(o.$$.fragment),s=w(),z(a.$$.fragment),i=w(),z(l.$$.fragment),c=w(),g=h("button"),g.textContent=`${Ot}`,v(r,"class","logo-link-container svelte-12j0kmi"),v(g,"id","email"),v(g,"class","svelte-12j0kmi"),v(e,"class","info-container svelte-12j0kmi"),v(e,"id","contact")},m(t,d){var h,k,b,w;f(t,e,d),p(e,r),E(o,r,null),p(r,s),E(a,r,null),p(r,i),E(l,r,null),p(e,c),p(e,g),u=!0,$||(h=g,k="click",b=n[0],h.addEventListener(k,b,w),m=()=>h.removeEventListener(k,b,w),$=!0)},p:t,i(t){u||(B(o.$$.fragment,t),B(a.$$.fragment,t),B(l.$$.fragment,t),u=!0)},o(t){R(o.$$.fragment,t),R(a.$$.fragment,t),R(l.$$.fragment,t),u=!1},d(t){t&&d(e),I(o),I(a),I(l),$=!1,m()}}}const Ot="pereiswell@gmail.com",Jt="https://github.com/c1m50c",Nt="https://www.hackerrank.com/c1m50c",Qt="https://www.linkedin.com/in/pere-wells";function Zt(t){return[()=>{var t;t=Ot,navigator.clipboard.writeText(t)}]}class Wt extends N{constructor(t){super(),J(this,t,Zt,It,s,{})}}function Dt(n){let e,r,o,s,a,i,l,c,g,u,$;return e=new Z({}),s=new D({}),i=new nt({}),c=new Et({}),u=new Wt({}),{c(){z(e.$$.fragment),r=w(),o=h("main"),z(s.$$.fragment),a=w(),z(i.$$.fragment),l=w(),z(c.$$.fragment),g=w(),z(u.$$.fragment),v(o,"class","svelte-9a4bv3")},m(t,n){E(e,t,n),f(t,r,n),f(t,o,n),E(s,o,null),p(o,a),E(i,o,null),p(o,l),E(c,o,null),p(o,g),E(u,o,null),$=!0},p:t,i(t){$||(B(e.$$.fragment,t),B(s.$$.fragment,t),B(i.$$.fragment,t),B(c.$$.fragment,t),B(u.$$.fragment,t),$=!0)},o(t){R(e.$$.fragment,t),R(s.$$.fragment,t),R(i.$$.fragment,t),R(c.$$.fragment,t),R(u.$$.fragment,t),$=!1},d(t){I(e,t),t&&d(r),t&&d(o),I(s),I(i),I(c),I(u)}}}return new class extends N{constructor(t){super(),J(this,t,null,Dt,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
