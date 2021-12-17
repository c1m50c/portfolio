var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let o,l;function i(t,n){return o||(o=document.createElement("a")),o.href=n,t===o.href}function c(t,n){t.appendChild(n)}function g(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function f(){return p(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t){l=t}const k=[],w=[],v=[],b=[],C=Promise.resolve();let y=!1;function x(t){v.push(t)}let S=!1;const j=new Set;function L(){if(!S){S=!0;do{for(let t=0;t<k.length;t+=1){const n=k[t];h(n),P(n.$$)}for(h(null),k.length=0;w.length;)w.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];j.has(n)||(j.add(n),n())}v.length=0}while(k.length);for(;b.length;)b.pop()();y=!1,S=!1,j.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const G=new Set;function M(t,n){t&&t.i&&(G.delete(t),t.i(n))}function _(t,n,e,r){if(t&&t.o){if(G.has(t))return;G.add(t),undefined.c.push((()=>{G.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function H(t){t&&t.c()}function T(t,e,s,o){const{fragment:l,on_mount:i,on_destroy:c,after_update:g}=t.$$;l&&l.m(e,s),o||x((()=>{const e=i.map(n).filter(a);c?c.push(...e):r(e),t.$$.on_mount=[]})),g.forEach(x)}function V(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function q(t,n){-1===t.$$.dirty[0]&&(k.push(t),y||(y=!0,C.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function A(n,a,s,o,i,c,g,m=[-1]){const $=l;h(n);const p=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map($?$.$$.context:a.context||[]),callbacks:e(),dirty:m,skip_bound:!1,root:a.target||$.$$.root};g&&g(p.root);let f=!1;if(p.ctx=s?s(n,a.props||{},((t,e,...r)=>{const a=r.length?r[0]:e;return p.ctx&&i(p.ctx[t],p.ctx[t]=a)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](a),f&&q(n,t)),e})):[],p.update(),f=!0,r(p.before_update),p.fragment=!!o&&o(p.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();a.intro&&M(n.$$.fragment),T(n,a.target,a.anchor,a.customElement),L()}h($)}class R{$destroy(){V(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function E(n){let e;return{c(){e=m("div"),e.innerHTML='<nav class="navigation-bar svelte-1qfn9lh"><a class="navbar-link svelte-1qfn9lh" href="#">Welcome</a> \n        <a class="navbar-link svelte-1qfn9lh" href="#skills">Skills</a> \n        <a class="navbar-link svelte-1qfn9lh" href="#projects">Projects</a> \n        <a class="navbar-link svelte-1qfn9lh" href="#contact">Contact</a></nav>',d(e,"class","navigation-bar-container svelte-1qfn9lh")},m(t,n){g(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}class z extends R{constructor(t){super(),A(this,t,null,E,s,{})}}function B(n){let e;return{c(){e=m("div"),e.innerHTML='<svg width="328" height="368" viewBox="0 0 328 368" xmlns="http://www.w3.org/2000/svg" id="logo" class="svelte-p75hal"><g><path id="logo-path" d="M134.015 82.5174C137.643 121.896 143.026 161.079 148.566 200.225C155.324 245.741 162.326 291.223 169.81 336.626C171.043 343.938 172.35 351.238 173.65 358.539C176.091 372.248 195.478 368.796 193.038 355.087C191.753 347.869 190.46 340.652 189.241 333.423C181.78 288.167 174.801 242.833 168.064 197.465C162.61 158.937 157.331 120.373 153.687 81.6232C153.055 67.7128 133.383 68.607 134.015 82.5174Z" class="svelte-p75hal"></path><path id="logo-path" d="M95.5772 233.886C97.5979 233.631 99.629 233.448 101.639 233.12C120.469 230.047 139.208 225.43 157.254 219.25C167.749 215.656 178.214 211.904 188.348 207.396C199.905 202.256 210.945 196.027 222.244 190.342C233.108 183.274 244.389 176.809 254.836 169.138C273.343 155.548 291.515 139.359 305.406 120.892C315.812 107.059 325.939 89.052 327.276 71.163C327.889 62.9531 325.176 54.8319 324.126 46.6664C319.359 39.4591 316.093 30.9932 309.825 25.0444C293.29 9.35003 270.982 3.12849 248.96 0.917283C220.119 -1.97867 185.507 2.35398 157.62 8.71109C141.491 12.3879 125.898 18.1124 110.037 22.813C74.6917 37.2926 64.1088 40.1281 32.069 58.6398C22.7372 64.0315 14.0258 70.4321 5.00424 76.3283C-6.64025 83.964 4.15833 100.432 15.8028 92.7961C24.2578 87.2322 32.4147 81.1865 41.1677 76.1044C71.7298 58.3597 81.9259 55.5919 115.663 41.6846C130.697 37.1734 145.476 31.7068 160.764 28.151C186.837 22.0869 217.798 18.126 244.805 20.1664C261.986 21.4646 279.966 25.614 293.847 36.5554C298.335 40.0931 301.076 45.4088 304.69 49.8355C305.863 55.3024 308.39 60.6479 308.209 66.2364C307.724 81.2555 299.276 96.2226 290.728 107.763C277.939 125.03 261.234 139.959 244.071 152.648C234.233 159.922 223.603 166.058 213.369 172.763C202.685 178.176 192.25 184.111 181.317 189.001C171.653 193.325 161.67 196.922 151.66 200.369C133.138 206.747 113.922 211.398 94.5422 214.22C80.6367 214.952 81.6717 234.618 95.5772 233.886V233.886Z" class="svelte-p75hal"></path></g></svg> \n    <div id="h2-container" class="svelte-p75hal"><h2 id="hey" class="svelte-p75hal">Hey, I&#39;m Pere</h2> \n        <p id="hook" class="svelte-p75hal">I do software development</p></div>',d(e,"class","info-container svelte-p75hal"),d(e,"id","welcome")},m(t,n){g(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}class J extends R{constructor(t){super(),A(this,t,null,B,s,{})}}function N(n){let e,r,a,s;return{c(){e=m("a"),r=m("h3"),a=p(n[1]),d(r,"class","svelte-bfpjql"),d(e,"class",s="link-button skill-button "+n[0]+" svelte-bfpjql"),d(e,"href",n[2])},m(t,n){g(t,e,n),c(e,r),c(r,a)},p(t,[n]){2&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(a,t[1]),1&n&&s!==(s="link-button skill-button "+t[0]+" svelte-bfpjql")&&d(e,"class",s),4&n&&d(e,"href",t[2])},i:t,o:t,d(t){t&&u(e)}}}var Q,I;function Z(t,n,e){let{background:r}=n,{name:a}=n,{link:s}=n;return t.$$set=t=>{"background"in t&&e(0,r=t.background),"name"in t&&e(1,a=t.name),"link"in t&&e(2,s=t.link)},[r,a,s]}!function(t){t.Python="python",t.Rust="rust",t.Go="go",t.JavaScript="java-script",t.TypeScript="type-script",t.HTML="html",t.CSS="css",t.SQL="sql",t.C="c",t.CPlusPlus="cpp",t.CSharp="c-sharp",t.Lua="lua",t.Godot="godot",t.Google="google",t.Git="git",t.WebAssembly="web-assembly"}(Q||(Q={}));class O extends R{constructor(t){super(),A(this,t,Z,N,s,{background:0,name:1,link:2})}}function W(n){let e,r,a,s,o,l,i,$,p,h,k,w,v,b,C,y,x,S,j,L,P,G,q,A,R,E,z,B,J,N,I,Z,W,D,F,K,U,X,Y,tt,nt,et,rt,at,st,ot,lt,it,ct,gt,ut,mt,$t,pt,ft,dt,ht,kt,wt,vt,bt,Ct,yt,xt,St,jt,Lt,Pt,Gt,Mt,_t,Ht,Tt,Vt,qt,At,Rt,Et,zt;return $=new O({props:{background:Q.Python,name:"Python 🐍",link:"https://www.python.org/"}}),h=new O({props:{background:Q.Rust,name:"Rust 🦀",link:"https://www.rust-lang.org/"}}),w=new O({props:{background:Q.Go,name:"Go 💨",link:"https://golang.org/"}}),b=new O({props:{background:Q.JavaScript,name:"JavaScript ☕",link:"https://www.javascript.com/"}}),y=new O({props:{background:Q.TypeScript,name:"TypeScript 📰",link:"https://www.typescriptlang.org/"}}),S=new O({props:{background:Q.HTML,name:"HTML 📄",link:"https://en.wikipedia.org/wiki/HTML"}}),L=new O({props:{background:Q.CSS,name:"CSS 📑",link:"https://en.wikipedia.org/wiki/CSS"}}),G=new O({props:{background:Q.SQL,name:"SQL 📂",link:"https://en.wikipedia.org/wiki/SQL"}}),A=new O({props:{background:Q.C,name:"C 🔧",link:"https://en.wikipedia.org/wiki/C_(programming_background)"}}),E=new O({props:{background:Q.CPlusPlus,name:"C++ 🔨",link:"https://en.wikipedia.org/wiki/C%2B%2B"}}),B=new O({props:{background:Q.CSharp,name:"C# 🌳",link:"https://docs.microsoft.com/en-us/dotnet/csharp/"}}),N=new O({props:{background:Q.Lua,name:"Lua 🌌",link:"https://www.lua.org/"}}),Z=new O({props:{background:Q.Godot,name:"GDScript 🎮",link:"https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/index.html"}}),X=new O({props:{background:Q.Python,name:"Matplotlib 📊",link:"https://matplotlib.org"}}),tt=new O({props:{background:Q.Python,name:"Pandas 🐼",link:"https://pandas.pydata.org/"}}),et=new O({props:{background:Q.Python,name:"NumPy 🧮",link:"https://numpy.org/"}}),at=new O({props:{background:Q.Python,name:"PyTest 🥼",link:"https://github.com/pytest-dev/pytest"}}),ot=new O({props:{background:Q.Python,name:"OpenCV 📸",link:"https://opencv.org/"}}),it=new O({props:{background:Q.Python,name:"Mediapipe 🔬",link:"https://google.github.io/mediapipe/"}}),gt=new O({props:{background:Q.Python,name:"Flask 🧪",link:"https://github.com/pallets/flask/"}}),mt=new O({props:{background:Q.Rust,name:"CPython 🔗",link:"https://github.com/dgrunwald/rust-cpython"}}),pt=new O({props:{background:Q.SQL,name:"SQLite 💾",link:"https://sqlite.org/index.html"}}),dt=new O({props:{background:Q.JavaScript,name:"React ⚡",link:"https://reactjs.org/"}}),kt=new O({props:{background:Q.JavaScript,name:"Vue 🌴",link:"https://vuejs.org/"}}),vt=new O({props:{background:Q.JavaScript,name:"Svelte 📙",link:"https://svelte.dev/"}}),Ct=new O({props:{background:Q.CSS,name:"Tailwind 🍃",link:"https://tailwindcss.com/"}}),xt=new O({props:{background:Q.CSS,name:"SASS 💄",link:"https://sass-lang.com/"}}),jt=new O({props:{background:Q.Godot,name:"Godot 🤖",link:"https://godotengine.org/"}}),Ht=new O({props:{background:Q.Google,name:"Google 🔍",link:"https://google.com"}}),Vt=new O({props:{background:Q.Git,name:"Git 💻",link:"https://git-scm.com/"}}),At=new O({props:{background:Q.JavaScript,name:"NPM 📦",link:"https://www.npmjs.com/"}}),Et=new O({props:{background:Q.WebAssembly,name:"WebAssembly 🏭",link:"https://webassembly.org/"}}),{c(){e=m("div"),r=m("h1"),r.textContent="Skills",a=f(),s=m("div"),o=m("h2"),o.textContent="Languages 💬",l=f(),i=m("div"),H($.$$.fragment),p=f(),H(h.$$.fragment),k=f(),H(w.$$.fragment),v=f(),H(b.$$.fragment),C=f(),H(y.$$.fragment),x=f(),H(S.$$.fragment),j=f(),H(L.$$.fragment),P=f(),H(G.$$.fragment),q=f(),H(A.$$.fragment),R=f(),H(E.$$.fragment),z=f(),H(B.$$.fragment),J=f(),H(N.$$.fragment),I=f(),H(Z.$$.fragment),W=f(),D=m("div"),F=m("h2"),F.textContent="Libraries, Engines & Frameworks 📚",K=f(),U=m("div"),H(X.$$.fragment),Y=f(),H(tt.$$.fragment),nt=f(),H(et.$$.fragment),rt=f(),H(at.$$.fragment),st=f(),H(ot.$$.fragment),lt=f(),H(it.$$.fragment),ct=f(),H(gt.$$.fragment),ut=f(),H(mt.$$.fragment),$t=f(),H(pt.$$.fragment),ft=f(),H(dt.$$.fragment),ht=f(),H(kt.$$.fragment),wt=f(),H(vt.$$.fragment),bt=f(),H(Ct.$$.fragment),yt=f(),H(xt.$$.fragment),St=f(),H(jt.$$.fragment),Lt=f(),Pt=m("div"),Gt=m("h2"),Gt.textContent="Miscellaneous Technologies ❓",Mt=f(),_t=m("div"),H(Ht.$$.fragment),Tt=f(),H(Vt.$$.fragment),qt=f(),H(At.$$.fragment),Rt=f(),H(Et.$$.fragment),d(r,"class","section-title svelte-8j7hs"),d(o,"class","section-title svelte-8j7hs"),d(i,"class","info-card-container svelte-8j7hs"),d(s,"class","languages-container"),d(F,"class","section-title svelte-8j7hs"),d(U,"class","info-card-container svelte-8j7hs"),d(D,"class","libraies-engines-and-frameworks-container"),d(Gt,"class","section-title svelte-8j7hs"),d(_t,"class","info-card-container svelte-8j7hs"),d(Pt,"class","misc-tech-container"),d(e,"class","info-container svelte-8j7hs"),d(e,"id","skills")},m(t,n){g(t,e,n),c(e,r),c(e,a),c(e,s),c(s,o),c(s,l),c(s,i),T($,i,null),c(i,p),T(h,i,null),c(i,k),T(w,i,null),c(i,v),T(b,i,null),c(i,C),T(y,i,null),c(i,x),T(S,i,null),c(i,j),T(L,i,null),c(i,P),T(G,i,null),c(i,q),T(A,i,null),c(i,R),T(E,i,null),c(i,z),T(B,i,null),c(i,J),T(N,i,null),c(i,I),T(Z,i,null),c(e,W),c(e,D),c(D,F),c(D,K),c(D,U),T(X,U,null),c(U,Y),T(tt,U,null),c(U,nt),T(et,U,null),c(U,rt),T(at,U,null),c(U,st),T(ot,U,null),c(U,lt),T(it,U,null),c(U,ct),T(gt,U,null),c(U,ut),T(mt,U,null),c(U,$t),T(pt,U,null),c(U,ft),T(dt,U,null),c(U,ht),T(kt,U,null),c(U,wt),T(vt,U,null),c(U,bt),T(Ct,U,null),c(U,yt),T(xt,U,null),c(U,St),T(jt,U,null),c(e,Lt),c(e,Pt),c(Pt,Gt),c(Pt,Mt),c(Pt,_t),T(Ht,_t,null),c(_t,Tt),T(Vt,_t,null),c(_t,qt),T(At,_t,null),c(_t,Rt),T(Et,_t,null),zt=!0},p:t,i(t){zt||(M($.$$.fragment,t),M(h.$$.fragment,t),M(w.$$.fragment,t),M(b.$$.fragment,t),M(y.$$.fragment,t),M(S.$$.fragment,t),M(L.$$.fragment,t),M(G.$$.fragment,t),M(A.$$.fragment,t),M(E.$$.fragment,t),M(B.$$.fragment,t),M(N.$$.fragment,t),M(Z.$$.fragment,t),M(X.$$.fragment,t),M(tt.$$.fragment,t),M(et.$$.fragment,t),M(at.$$.fragment,t),M(ot.$$.fragment,t),M(it.$$.fragment,t),M(gt.$$.fragment,t),M(mt.$$.fragment,t),M(pt.$$.fragment,t),M(dt.$$.fragment,t),M(kt.$$.fragment,t),M(vt.$$.fragment,t),M(Ct.$$.fragment,t),M(xt.$$.fragment,t),M(jt.$$.fragment,t),M(Ht.$$.fragment,t),M(Vt.$$.fragment,t),M(At.$$.fragment,t),M(Et.$$.fragment,t),zt=!0)},o(t){_($.$$.fragment,t),_(h.$$.fragment,t),_(w.$$.fragment,t),_(b.$$.fragment,t),_(y.$$.fragment,t),_(S.$$.fragment,t),_(L.$$.fragment,t),_(G.$$.fragment,t),_(A.$$.fragment,t),_(E.$$.fragment,t),_(B.$$.fragment,t),_(N.$$.fragment,t),_(Z.$$.fragment,t),_(X.$$.fragment,t),_(tt.$$.fragment,t),_(et.$$.fragment,t),_(at.$$.fragment,t),_(ot.$$.fragment,t),_(it.$$.fragment,t),_(gt.$$.fragment,t),_(mt.$$.fragment,t),_(pt.$$.fragment,t),_(dt.$$.fragment,t),_(kt.$$.fragment,t),_(vt.$$.fragment,t),_(Ct.$$.fragment,t),_(xt.$$.fragment,t),_(jt.$$.fragment,t),_(Ht.$$.fragment,t),_(Vt.$$.fragment,t),_(At.$$.fragment,t),_(Et.$$.fragment,t),zt=!1},d(t){t&&u(e),V($),V(h),V(w),V(b),V(y),V(S),V(L),V(G),V(A),V(E),V(B),V(N),V(Z),V(X),V(tt),V(et),V(at),V(ot),V(it),V(gt),V(mt),V(pt),V(dt),V(kt),V(vt),V(Ct),V(xt),V(jt),V(Ht),V(Vt),V(At),V(Et)}}}class D extends R{constructor(t){super(),A(this,t,null,W,s,{})}}function F(t){let n,e;return{c(){n=$("svg"),e=$("path"),d(e,"d","M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"),d(n,"xmlns","http://www.w3.org/2000/svg"),d(n,"viewBox","0 0 30 30"),d(n,"class","linkedin-logo logo")},m(t,r){g(t,n,r),c(n,e)},d(t){t&&u(n)}}}function K(t){let n,e;return{c(){n=$("svg"),e=$("path"),d(e,"d","M11.9985 2.25C10.6688 2.25 4.1514 5.98793 3.49365 7.12793C2.83515 8.26868 2.83515 15.7373 3.49365 16.8735C4.1544 18.0128 10.6718 21.75 11.9985 21.75C13.3215 21.75 19.8389 18.015 20.5019 16.8765C21.1672 15.735 21.1672 8.26054 20.5019 7.12354V7.12207C19.8337 5.98432 13.317 2.25 11.9985 2.25ZM11.9971 3.75879C13.2698 4.02354 18.3133 6.91257 19.1968 7.88232C19.6018 9.11307 19.601 14.8832 19.1968 16.1162C18.3193 17.0845 13.2713 19.9772 11.9971 20.2412C10.7236 19.9787 5.67929 17.0874 4.80029 16.1177C4.39904 14.8817 4.39904 9.11682 4.80029 7.88232C5.67704 6.91257 10.7228 4.02129 11.9971 3.75879ZM9.74999 6.75L8.24999 8.25H8.99999V15.75H10.5V12.75H13.5V15.75H12.75L14.25 17.25L15.75 15.75H15V9H13.5V11.25H10.5V8.25H11.25L9.74999 6.75Z"),d(n,"xmlns","http://www.w3.org/2000/svg"),d(n,"viewBox","0 0 24 24"),d(n,"class","hacker-rank-logo logo")},m(t,r){g(t,n,r),c(n,e)},d(t){t&&u(n)}}}function U(t){let n,e;return{c(){n=$("svg"),e=$("path"),d(e,"d","M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"),d(n,"xmlns","http://www.w3.org/2000/svg"),d(n,"viewBox","0 0 24 24"),d(n,"class","logo github-logo")},m(t,r){g(t,n,r),c(n,e)},d(t){t&&u(n)}}}function X(n){let e,r;function a(t,n){return t[1]==I.Github?U:t[1]==I.HackerRank?K:t[1]==I.LinkedIn?F:void 0}let s=a(n),o=s&&s(n);return{c(){e=m("a"),o&&o.c(),d(e,"href",n[0]),d(e,"class",r=n[1]+" logo-link")},m(t,n){g(t,e,n),o&&o.m(e,null)},p(t,[n]){s!==(s=a(t))&&(o&&o.d(1),o=s&&s(t),o&&(o.c(),o.m(e,null))),1&n&&d(e,"href",t[0]),2&n&&r!==(r=t[1]+" logo-link")&&d(e,"class",r)},i:t,o:t,d(t){t&&u(e),o&&o.d()}}}function Y(t,n,e){let{link:r}=n,{icon:a}=n;return t.$$set=t=>{"link"in t&&e(0,r=t.link),"icon"in t&&e(1,a=t.icon)},[r,a]}!function(t){t.Github="github-link",t.HackerRank="hacker-rank-link",t.LinkedIn="linked-in-link"}(I||(I={}));class tt extends R{constructor(t){super(),A(this,t,Y,X,s,{link:0,icon:1})}}function nt(n){let e,r,a,s,o,l,i,$,p,h,k;return h=new tt({props:{link:et,icon:I.Github}}),{c(){e=m("div"),r=m("div"),a=f(),s=m("div"),o=m("h1"),o.textContent="Portfolio",l=f(),i=m("p"),i.textContent="My personal portfolio site, the site you're seeing right now.",$=f(),p=m("div"),H(h.$$.fragment),d(r,"class","bg-image svelte-14u3mrf"),d(p,"class","logo-link-container"),d(s,"class","project-card-details"),d(e,"class","project-card")},m(t,n){g(t,e,n),c(e,r),c(e,a),c(e,s),c(s,o),c(s,l),c(s,i),c(s,$),c(s,p),T(h,p,null),k=!0},p:t,i(t){k||(M(h.$$.fragment,t),k=!0)},o(t){_(h.$$.fragment,t),k=!1},d(t){t&&u(e),V(h)}}}const et="https://github.com/c1m50c/portfolio";class rt extends R{constructor(t){super(),A(this,t,null,nt,s,{})}}function at(n){let e,r,a,s,o,l,i,$,p,h,k;return h=new tt({props:{link:st,icon:I.Github}}),{c(){e=m("div"),r=m("div"),a=f(),s=m("div"),o=m("h1"),o.textContent="Cellular Automata",l=f(),i=m("p"),i.textContent="Python project implementing Conway's Game of Life with PyGame.",$=f(),p=m("div"),H(h.$$.fragment),d(r,"class","bg-image svelte-13cr5qx"),d(p,"class","logo-link-container"),d(s,"class","project-card-details"),d(e,"class","project-card")},m(t,n){g(t,e,n),c(e,r),c(e,a),c(e,s),c(s,o),c(s,l),c(s,i),c(s,$),c(s,p),T(h,p,null),k=!0},p:t,i(t){k||(M(h.$$.fragment,t),k=!0)},o(t){_(h.$$.fragment,t),k=!1},d(t){t&&u(e),V(h)}}}const st="https://github.com/c1m50c/cellular-automata";class ot extends R{constructor(t){super(),A(this,t,null,at,s,{})}}function lt(n){let e,r,a,s,o,l,$,p,h,k,w,v,b,C;return b=new tt({props:{link:it,icon:I.Github}}),{c(){e=m("div"),r=m("div"),a=f(),s=m("div"),o=m("h1"),o.textContent="Sorting Algorithm Visualizer",l=f(),$=m("p"),$.textContent="Visualizes various sorting algorithms using Matplotlib and Python.",p=f(),h=m("img"),w=f(),v=m("div"),H(b.$$.fragment),d(r,"class","bg-image svelte-1nvfjgr"),i(h.src,k="https://github.com/c1m50c/sorting-algorithm-visualizer/actions/workflows/tests.yml/badge.svg?branch=main")||d(h,"src","https://github.com/c1m50c/sorting-algorithm-visualizer/actions/workflows/tests.yml/badge.svg?branch=main"),d(h,"alt","Tests Status"),d(v,"class","logo-link-container"),d(s,"class","project-card-details"),d(e,"class","project-card")},m(t,n){g(t,e,n),c(e,r),c(e,a),c(e,s),c(s,o),c(s,l),c(s,$),c(s,p),c(s,h),c(s,w),c(s,v),T(b,v,null),C=!0},p:t,i(t){C||(M(b.$$.fragment,t),C=!0)},o(t){_(b.$$.fragment,t),C=!1},d(t){t&&u(e),V(b)}}}const it="https://github.com/c1m50c/sorting-algorithm-visualizer";class ct extends R{constructor(t){super(),A(this,t,null,lt,s,{})}}function gt(n){let e,r,a,s,o,l,$,p,h,k,w,v,b,C;return b=new tt({props:{link:ut,icon:I.Github}}),{c(){e=m("div"),r=m("div"),a=f(),s=m("div"),o=m("h1"),o.textContent="Rust Algorithms",l=f(),$=m("p"),$.textContent="A Rust library implementing various algorithms.",p=f(),h=m("img"),w=f(),v=m("div"),H(b.$$.fragment),d(r,"class","bg-image svelte-1f750u"),i(h.src,k="https://github.com/c1m50c/rust-algorithms/actions/workflows/build.yml/badge.svg?branch=main")||d(h,"src","https://github.com/c1m50c/rust-algorithms/actions/workflows/build.yml/badge.svg?branch=main"),d(h,"alt","Build Status"),d(v,"class","logo-link-container"),d(s,"class","project-card-details"),d(e,"class","project-card")},m(t,n){g(t,e,n),c(e,r),c(e,a),c(e,s),c(s,o),c(s,l),c(s,$),c(s,p),c(s,h),c(s,w),c(s,v),T(b,v,null),C=!0},p:t,i(t){C||(M(b.$$.fragment,t),C=!0)},o(t){_(b.$$.fragment,t),C=!1},d(t){t&&u(e),V(b)}}}const ut="https://github.com/c1m50c/rust-algorithms";class mt extends R{constructor(t){super(),A(this,t,null,gt,s,{})}}function $t(n){let e,r,a,s,o,l,$,p,h,k,w,v,b,C;return b=new tt({props:{link:pt,icon:I.Github}}),{c(){e=m("div"),r=m("div"),a=f(),s=m("div"),o=m("h1"),o.textContent="Rust Data Structures",l=f(),$=m("p"),$.textContent="A library implementing various Data Structures in Rust, made strictly for learning purposes.",p=f(),h=m("img"),w=f(),v=m("div"),H(b.$$.fragment),d(r,"class","bg-image svelte-s6pt6f"),i(h.src,k="https://github.com/c1m50c/rust-data-structures/actions/workflows/build.yml/badge.svg?branch=main")||d(h,"src","https://github.com/c1m50c/rust-data-structures/actions/workflows/build.yml/badge.svg?branch=main"),d(h,"alt","Build Status"),d(v,"class","logo-link-container"),d(s,"class","project-card-details"),d(e,"class","project-card")},m(t,n){g(t,e,n),c(e,r),c(e,a),c(e,s),c(s,o),c(s,l),c(s,$),c(s,p),c(s,h),c(s,w),c(s,v),T(b,v,null),C=!0},p:t,i(t){C||(M(b.$$.fragment,t),C=!0)},o(t){_(b.$$.fragment,t),C=!1},d(t){t&&u(e),V(b)}}}const pt="https://github.com/c1m50c/rust-data-structures";class ft extends R{constructor(t){super(),A(this,t,null,$t,s,{})}}function dt(n){let e,r,a,s,o,l,i,$,p,h,k,w,v,b;return o=new rt({}),i=new ot({}),p=new ct({}),k=new mt({}),v=new ft({}),{c(){e=m("div"),r=m("h1"),r.textContent="Projects",a=f(),s=m("div"),H(o.$$.fragment),l=f(),H(i.$$.fragment),$=f(),H(p.$$.fragment),h=f(),H(k.$$.fragment),w=f(),H(v.$$.fragment),d(r,"class","section-title"),d(s,"class","project-card-container svelte-1dbgb3v"),d(e,"class","info-container"),d(e,"id","projects")},m(t,n){g(t,e,n),c(e,r),c(e,a),c(e,s),T(o,s,null),c(s,l),T(i,s,null),c(s,$),T(p,s,null),c(s,h),T(k,s,null),c(s,w),T(v,s,null),b=!0},p:t,i(t){b||(M(o.$$.fragment,t),M(i.$$.fragment,t),M(p.$$.fragment,t),M(k.$$.fragment,t),M(v.$$.fragment,t),b=!0)},o(t){_(o.$$.fragment,t),_(i.$$.fragment,t),_(p.$$.fragment,t),_(k.$$.fragment,t),_(v.$$.fragment,t),b=!1},d(t){t&&u(e),V(o),V(i),V(p),V(k),V(v)}}}class ht extends R{constructor(t){super(),A(this,t,null,dt,s,{})}}function kt(n){let e,r,a,s,o,l,i,$,p,h,k,w;return a=new tt({props:{link:vt,icon:I.Github}}),o=new tt({props:{link:bt,icon:I.HackerRank}}),i=new tt({props:{link:Ct,icon:I.LinkedIn}}),{c(){e=m("div"),r=m("div"),H(a.$$.fragment),s=f(),H(o.$$.fragment),l=f(),H(i.$$.fragment),$=f(),p=m("button"),p.textContent=`${wt}`,d(r,"class","logo-link-container svelte-12j0kmi"),d(p,"id","email"),d(p,"class","svelte-12j0kmi"),d(e,"class","info-container svelte-12j0kmi"),d(e,"id","contact")},m(t,u){var m,f,d,v;g(t,e,u),c(e,r),T(a,r,null),c(r,s),T(o,r,null),c(r,l),T(i,r,null),c(e,$),c(e,p),h=!0,k||(m=p,f="click",d=n[0],m.addEventListener(f,d,v),w=()=>m.removeEventListener(f,d,v),k=!0)},p:t,i(t){h||(M(a.$$.fragment,t),M(o.$$.fragment,t),M(i.$$.fragment,t),h=!0)},o(t){_(a.$$.fragment,t),_(o.$$.fragment,t),_(i.$$.fragment,t),h=!1},d(t){t&&u(e),V(a),V(o),V(i),k=!1,w()}}}const wt="pereiswell@gmail.com",vt="https://github.com/c1m50c",bt="https://www.hackerrank.com/c1m50c",Ct="https://www.linkedin.com/in/pere-wells";function yt(t){return[()=>{var t;t=wt,navigator.clipboard.writeText(t)}]}class xt extends R{constructor(t){super(),A(this,t,yt,kt,s,{})}}function St(n){let e,r,a,s,o,l,i,$,p,h,k;return e=new z({}),s=new J({}),l=new D({}),$=new ht({}),h=new xt({}),{c(){H(e.$$.fragment),r=f(),a=m("main"),H(s.$$.fragment),o=f(),H(l.$$.fragment),i=f(),H($.$$.fragment),p=f(),H(h.$$.fragment),d(a,"class","svelte-f4k8w6")},m(t,n){T(e,t,n),g(t,r,n),g(t,a,n),T(s,a,null),c(a,o),T(l,a,null),c(a,i),T($,a,null),c(a,p),T(h,a,null),k=!0},p:t,i(t){k||(M(e.$$.fragment,t),M(s.$$.fragment,t),M(l.$$.fragment,t),M($.$$.fragment,t),M(h.$$.fragment,t),k=!0)},o(t){_(e.$$.fragment,t),_(s.$$.fragment,t),_(l.$$.fragment,t),_($.$$.fragment,t),_(h.$$.fragment,t),k=!1},d(t){V(e,t),t&&u(r),t&&u(a),V(s),V(l),V($),V(h)}}}return new class extends R{constructor(t){super(),A(this,t,null,St,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
