var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let o,l;function i(t,n){return o||(o=document.createElement("a")),o.href=n,t===o.href}function c(t,n){t.appendChild(n)}function g(t,n,e){t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function f(){return p(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t){l=t}const k=[],w=[],v=[],b=[],C=Promise.resolve();let y=!1;function x(t){v.push(t)}let j=!1;const S=new Set;function M(){if(!j){j=!0;do{for(let t=0;t<k.length;t+=1){const n=k[t];h(n),_(n.$$)}for(h(null),k.length=0;w.length;)w.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];S.has(n)||(S.add(n),n())}v.length=0}while(k.length);for(;b.length;)b.pop()();y=!1,j=!1,S.clear()}}function _(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const L=new Set;function V(t,n){t&&t.i&&(L.delete(t),t.i(n))}function H(t,n,e,r){if(t&&t.o){if(L.has(t))return;L.add(t),undefined.c.push((()=>{L.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function I(t){t&&t.c()}function P(t,e,s,o){const{fragment:l,on_mount:i,on_destroy:c,after_update:g}=t.$$;l&&l.m(e,s),o||x((()=>{const e=i.map(n).filter(a);c?c.push(...e):r(e),t.$$.on_mount=[]})),g.forEach(x)}function q(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function A(t,n){-1===t.$$.dirty[0]&&(k.push(t),y||(y=!0,C.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function T(n,a,s,o,i,c,g,u=[-1]){const $=l;h(n);const p=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map($?$.$$.context:a.context||[]),callbacks:e(),dirty:u,skip_bound:!1,root:a.target||$.$$.root};g&&g(p.root);let f=!1;if(p.ctx=s?s(n,a.props||{},((t,e,...r)=>{const a=r.length?r[0]:e;return p.ctx&&i(p.ctx[t],p.ctx[t]=a)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](a),f&&A(n,t)),e})):[],p.update(),f=!0,r(p.before_update),p.fragment=!!o&&o(p.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);p.fragment&&p.fragment.l(t),t.forEach(m)}else p.fragment&&p.fragment.c();a.intro&&V(n.$$.fragment),P(n,a.target,a.anchor,a.customElement),M()}h($)}class z{$destroy(){q(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function E(n){let e;return{c(){e=u("div"),e.innerHTML='<nav class="navigation-bar svelte-1qfn9lh"><a class="navbar-link svelte-1qfn9lh" href="#">Welcome</a> \n        <a class="navbar-link svelte-1qfn9lh" href="#about">About</a> \n        <a class="navbar-link svelte-1qfn9lh" href="#skills">Skills</a> \n        <a class="navbar-link svelte-1qfn9lh" href="#projects">Projects</a> \n        <a class="navbar-link svelte-1qfn9lh" href="#contact">Contact</a></nav>',d(e,"class","navigation-bar-container svelte-1qfn9lh")},m(t,n){g(t,e,n)},p:t,i:t,o:t,d(t){t&&m(e)}}}class B extends z{constructor(t){super(),T(this,t,null,E,s,{})}}function N(n){let e;return{c(){e=u("div"),e.innerHTML='<svg width="328" height="368" viewBox="0 0 328 368" xmlns="http://www.w3.org/2000/svg" id="logo" class="svelte-p75hal"><g><path id="logo-path" d="M134.015 82.5174C137.643 121.896 143.026 161.079 148.566 200.225C155.324 245.741 162.326 291.223 169.81 336.626C171.043 343.938 172.35 351.238 173.65 358.539C176.091 372.248 195.478 368.796 193.038 355.087C191.753 347.869 190.46 340.652 189.241 333.423C181.78 288.167 174.801 242.833 168.064 197.465C162.61 158.937 157.331 120.373 153.687 81.6232C153.055 67.7128 133.383 68.607 134.015 82.5174Z" class="svelte-p75hal"></path><path id="logo-path" d="M95.5772 233.886C97.5979 233.631 99.629 233.448 101.639 233.12C120.469 230.047 139.208 225.43 157.254 219.25C167.749 215.656 178.214 211.904 188.348 207.396C199.905 202.256 210.945 196.027 222.244 190.342C233.108 183.274 244.389 176.809 254.836 169.138C273.343 155.548 291.515 139.359 305.406 120.892C315.812 107.059 325.939 89.052 327.276 71.163C327.889 62.9531 325.176 54.8319 324.126 46.6664C319.359 39.4591 316.093 30.9932 309.825 25.0444C293.29 9.35003 270.982 3.12849 248.96 0.917283C220.119 -1.97867 185.507 2.35398 157.62 8.71109C141.491 12.3879 125.898 18.1124 110.037 22.813C74.6917 37.2926 64.1088 40.1281 32.069 58.6398C22.7372 64.0315 14.0258 70.4321 5.00424 76.3283C-6.64025 83.964 4.15833 100.432 15.8028 92.7961C24.2578 87.2322 32.4147 81.1865 41.1677 76.1044C71.7298 58.3597 81.9259 55.5919 115.663 41.6846C130.697 37.1734 145.476 31.7068 160.764 28.151C186.837 22.0869 217.798 18.126 244.805 20.1664C261.986 21.4646 279.966 25.614 293.847 36.5554C298.335 40.0931 301.076 45.4088 304.69 49.8355C305.863 55.3024 308.39 60.6479 308.209 66.2364C307.724 81.2555 299.276 96.2226 290.728 107.763C277.939 125.03 261.234 139.959 244.071 152.648C234.233 159.922 223.603 166.058 213.369 172.763C202.685 178.176 192.25 184.111 181.317 189.001C171.653 193.325 161.67 196.922 151.66 200.369C133.138 206.747 113.922 211.398 94.5422 214.22C80.6367 214.952 81.6717 234.618 95.5772 233.886V233.886Z" class="svelte-p75hal"></path></g></svg> \n    <div id="h2-container" class="svelte-p75hal"><h2 id="hey" class="svelte-p75hal">Hey, I&#39;m Pere</h2> \n        <p id="hook" class="svelte-p75hal">I do software development</p></div>',d(e,"class","info-container svelte-p75hal"),d(e,"id","welcome")},m(t,n){g(t,e,n)},p:t,i:t,o:t,d(t){t&&m(e)}}}class G extends z{constructor(t){super(),T(this,t,null,N,s,{})}}function R(n){let e;return{c(){e=u("div"),e.innerHTML='<h1 class="section-title">About Me</h1> \n    <p>I&#39;m a sixteen-year-old software developer based in Lincoln, Nebraska.\n        I&#39;ve been programming since the age of nine and since then it has been my primary passion throughout life.\n        Pursuing software development as a career has always been something I have wanted to do.\n        I&#39;m skilled and very comfortable with languages such as Python and JavaScript, but learning new languages and technologies has been always been something I enjoy doing to a great degree.\n        I have a hunger to push myself and learn as much as I possibly can.\n        I am very good at researching problems I encounter and can normally fix them very quickly, I would consider this one of my biggest strengths.\n        Learning and programming are two things I&#39;m extremely passionate about in my life, and I&#39;m always very happy at the opportunity to work on a new project.</p>',d(e,"class","info-container"),d(e,"id","about")},m(t,n){g(t,e,n)},p:t,i:t,o:t,d(t){t&&m(e)}}}class Z extends z{constructor(t){super(),T(this,t,null,R,s,{})}}function O(n){let e,r,a,s;return{c(){e=u("a"),r=u("h3"),a=p(n[1]),d(r,"class","svelte-bty7xe"),d(e,"class",s="link-button skill-button "+n[0]+" svelte-bty7xe"),d(e,"href",n[2])},m(t,n){g(t,e,n),c(e,r),c(r,a)},p(t,[n]){2&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(a,t[1]),1&n&&s!==(s="link-button skill-button "+t[0]+" svelte-bty7xe")&&d(e,"class",s),4&n&&d(e,"href",t[2])},i:t,o:t,d(t){t&&m(e)}}}function D(t,n,e){let{background:r}=n,{name:a}=n,{link:s}=n;return t.$$set=t=>{"background"in t&&e(0,r=t.background),"name"in t&&e(1,a=t.name),"link"in t&&e(2,s=t.link)},[r,a,s]}class Q extends z{constructor(t){super(),T(this,t,D,O,s,{background:0,name:1,link:2})}}function J(n){let e,r,a,s,o,l,i,$,p,h,k,w,v,b,C,y,x,j,S,M,_,L,A,T,z,E,B,N,G,R,Z,O,D,J,F,W,K,U,X,Y,tt,nt,et,rt,at,st,ot,lt,it,ct,gt,mt,ut,$t,pt,ft,dt,ht,kt,wt,vt,bt,Ct,yt,xt,jt,St,Mt,_t,Lt,Vt;return $=new Q({props:{background:"python",name:"Python 🐍",link:"https://www.python.org/"}}),h=new Q({props:{background:"rust",name:"Rust 🦀",link:"https://www.rust-lang.org/"}}),w=new Q({props:{background:"java-script",name:"JavaScript ☕",link:"https://www.javascript.com/"}}),b=new Q({props:{background:"type-script",name:"TypeScript 📰",link:"https://www.typescriptlang.org/"}}),y=new Q({props:{background:"html",name:"HTML 📄",link:"https://en.wikipedia.org/wiki/HTML"}}),j=new Q({props:{background:"css",name:"CSS 📑",link:"https://en.wikipedia.org/wiki/CSS"}}),M=new Q({props:{background:"sql",name:"SQL 📂",link:"https://en.wikipedia.org/wiki/SQL"}}),L=new Q({props:{background:"c",name:"C 🔧",link:"https://en.wikipedia.org/wiki/C_(programming_background)"}}),T=new Q({props:{background:"cpp",name:"C++ 🔨",link:"https://en.wikipedia.org/wiki/C%2B%2B"}}),E=new Q({props:{background:"c-sharp",name:"C# 🌳",link:"https://docs.microsoft.com/en-us/dotnet/csharp/"}}),N=new Q({props:{background:"lua",name:"Lua 🌌",link:"https://www.lua.org/"}}),R=new Q({props:{background:"gdscript",name:"GDScript 🎮",link:"https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/index.html"}}),W=new Q({props:{background:"python",name:"Matplotlib 📊",link:"https://matplotlib.org"}}),U=new Q({props:{background:"python",name:"Pandas 🐼",link:"https://pandas.pydata.org/"}}),Y=new Q({props:{background:"python",name:"NumPy 🧮",link:"https://numpy.org/"}}),nt=new Q({props:{background:"python",name:"OpenCV 📸",link:"https://opencv.org/"}}),rt=new Q({props:{background:"python",name:"mediapipe 🔬",link:"https://google.github.io/mediapipe/"}}),st=new Q({props:{background:"python",name:"flask 🧪",link:"https://github.com/pallets/flask/"}}),lt=new Q({props:{background:"sql",name:"SQLite 💾",link:"https://sqlite.org/index.html"}}),ct=new Q({props:{background:"java-script",name:"React ⚡",link:"https://reactjs.org/"}}),mt=new Q({props:{background:"java-script",name:"Vue 🌴",link:"https://vuejs.org/"}}),$t=new Q({props:{background:"java-script",name:"Svelte 📙",link:"https://svelte.dev/"}}),ft=new Q({props:{background:"css",name:"Tailwind 🍃",link:"https://tailwindcss.com/"}}),ht=new Q({props:{background:"css",name:"SASS 💄",link:"https://sass-lang.com/"}}),wt=new Q({props:{background:"gdscript",name:"Godot 🤖",link:"https://godotengine.org/"}}),jt=new Q({props:{background:"google",name:"Google 🔍",link:"https://google.com"}}),Mt=new Q({props:{background:"git",name:"Git 💻",link:"https://git-scm.com/"}}),Lt=new Q({props:{background:"java-script",name:"NPM 📦",link:"https://www.npmjs.com/"}}),{c(){e=u("div"),r=u("h1"),r.textContent="Skills",a=f(),s=u("div"),o=u("h2"),o.textContent="Languages 💬",l=f(),i=u("div"),I($.$$.fragment),p=f(),I(h.$$.fragment),k=f(),I(w.$$.fragment),v=f(),I(b.$$.fragment),C=f(),I(y.$$.fragment),x=f(),I(j.$$.fragment),S=f(),I(M.$$.fragment),_=f(),I(L.$$.fragment),A=f(),I(T.$$.fragment),z=f(),I(E.$$.fragment),B=f(),I(N.$$.fragment),G=f(),I(R.$$.fragment),Z=f(),O=u("div"),D=u("h2"),D.textContent="Libraries, Engines & Frameworks 📚",J=f(),F=u("div"),I(W.$$.fragment),K=f(),I(U.$$.fragment),X=f(),I(Y.$$.fragment),tt=f(),I(nt.$$.fragment),et=f(),I(rt.$$.fragment),at=f(),I(st.$$.fragment),ot=f(),I(lt.$$.fragment),it=f(),I(ct.$$.fragment),gt=f(),I(mt.$$.fragment),ut=f(),I($t.$$.fragment),pt=f(),I(ft.$$.fragment),dt=f(),I(ht.$$.fragment),kt=f(),I(wt.$$.fragment),vt=f(),bt=u("div"),Ct=u("h2"),Ct.textContent="Miscellaneous Technologies ❓",yt=f(),xt=u("div"),I(jt.$$.fragment),St=f(),I(Mt.$$.fragment),_t=f(),I(Lt.$$.fragment),d(r,"class","section-title"),d(o,"class","section-title"),d(i,"class","info-card-container svelte-1ekngr8"),d(s,"class","languages-container"),d(D,"class","section-title"),d(F,"class","info-card-container svelte-1ekngr8"),d(O,"class","libraies-engines-and-frameworks-container"),d(Ct,"class","section-title"),d(xt,"class","info-card-container svelte-1ekngr8"),d(bt,"class","misc-tech-container"),d(e,"class","info-container svelte-1ekngr8"),d(e,"id","skills")},m(t,n){g(t,e,n),c(e,r),c(e,a),c(e,s),c(s,o),c(s,l),c(s,i),P($,i,null),c(i,p),P(h,i,null),c(i,k),P(w,i,null),c(i,v),P(b,i,null),c(i,C),P(y,i,null),c(i,x),P(j,i,null),c(i,S),P(M,i,null),c(i,_),P(L,i,null),c(i,A),P(T,i,null),c(i,z),P(E,i,null),c(i,B),P(N,i,null),c(i,G),P(R,i,null),c(e,Z),c(e,O),c(O,D),c(O,J),c(O,F),P(W,F,null),c(F,K),P(U,F,null),c(F,X),P(Y,F,null),c(F,tt),P(nt,F,null),c(F,et),P(rt,F,null),c(F,at),P(st,F,null),c(F,ot),P(lt,F,null),c(F,it),P(ct,F,null),c(F,gt),P(mt,F,null),c(F,ut),P($t,F,null),c(F,pt),P(ft,F,null),c(F,dt),P(ht,F,null),c(F,kt),P(wt,F,null),c(e,vt),c(e,bt),c(bt,Ct),c(bt,yt),c(bt,xt),P(jt,xt,null),c(xt,St),P(Mt,xt,null),c(xt,_t),P(Lt,xt,null),Vt=!0},p:t,i(t){Vt||(V($.$$.fragment,t),V(h.$$.fragment,t),V(w.$$.fragment,t),V(b.$$.fragment,t),V(y.$$.fragment,t),V(j.$$.fragment,t),V(M.$$.fragment,t),V(L.$$.fragment,t),V(T.$$.fragment,t),V(E.$$.fragment,t),V(N.$$.fragment,t),V(R.$$.fragment,t),V(W.$$.fragment,t),V(U.$$.fragment,t),V(Y.$$.fragment,t),V(nt.$$.fragment,t),V(rt.$$.fragment,t),V(st.$$.fragment,t),V(lt.$$.fragment,t),V(ct.$$.fragment,t),V(mt.$$.fragment,t),V($t.$$.fragment,t),V(ft.$$.fragment,t),V(ht.$$.fragment,t),V(wt.$$.fragment,t),V(jt.$$.fragment,t),V(Mt.$$.fragment,t),V(Lt.$$.fragment,t),Vt=!0)},o(t){H($.$$.fragment,t),H(h.$$.fragment,t),H(w.$$.fragment,t),H(b.$$.fragment,t),H(y.$$.fragment,t),H(j.$$.fragment,t),H(M.$$.fragment,t),H(L.$$.fragment,t),H(T.$$.fragment,t),H(E.$$.fragment,t),H(N.$$.fragment,t),H(R.$$.fragment,t),H(W.$$.fragment,t),H(U.$$.fragment,t),H(Y.$$.fragment,t),H(nt.$$.fragment,t),H(rt.$$.fragment,t),H(st.$$.fragment,t),H(lt.$$.fragment,t),H(ct.$$.fragment,t),H(mt.$$.fragment,t),H($t.$$.fragment,t),H(ft.$$.fragment,t),H(ht.$$.fragment,t),H(wt.$$.fragment,t),H(jt.$$.fragment,t),H(Mt.$$.fragment,t),H(Lt.$$.fragment,t),Vt=!1},d(t){t&&m(e),q($),q(h),q(w),q(b),q(y),q(j),q(M),q(L),q(T),q(E),q(N),q(R),q(W),q(U),q(Y),q(nt),q(rt),q(st),q(lt),q(ct),q(mt),q($t),q(ft),q(ht),q(wt),q(jt),q(Mt),q(Lt)}}}class F extends z{constructor(t){super(),T(this,t,null,J,s,{})}}function W(n){let e,r,a;return{c(){e=u("a"),r=$("svg"),a=$("path"),d(a,"d","M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"),d(r,"xmlns","http://www.w3.org/2000/svg"),d(r,"viewBox","0 0 24 24"),d(r,"class","logo github-logo"),d(e,"href",n[0]),d(e,"class","github-link logo-link")},m(t,n){g(t,e,n),c(e,r),c(r,a)},p(t,[n]){1&n&&d(e,"href",t[0])},i:t,o:t,d(t){t&&m(e)}}}function K(t,n,e){let{link:r}=n;return t.$$set=t=>{"link"in t&&e(0,r=t.link)},[r]}class U extends z{constructor(t){super(),T(this,t,K,W,s,{link:0})}}function X(n){let e,r,a,s,o,l,i,$,p,h,k;return h=new U({props:{link:Y}}),{c(){e=u("div"),r=u("div"),a=f(),s=u("div"),o=u("h1"),o.textContent="Portfolio",l=f(),i=u("p"),i.textContent="My personal portfolio site, the site you're seeing right now.",$=f(),p=u("div"),I(h.$$.fragment),d(r,"class","bg-image svelte-14u3mrf"),d(p,"class","logo-link-container"),d(s,"class","project-card-details"),d(e,"class","project-card")},m(t,n){g(t,e,n),c(e,r),c(e,a),c(e,s),c(s,o),c(s,l),c(s,i),c(s,$),c(s,p),P(h,p,null),k=!0},p:t,i(t){k||(V(h.$$.fragment,t),k=!0)},o(t){H(h.$$.fragment,t),k=!1},d(t){t&&m(e),q(h)}}}const Y="https://github.com/c1m50c/portfolio";class tt extends z{constructor(t){super(),T(this,t,null,X,s,{})}}function nt(n){let e,r,a,s,o,l,i,$,p,h,k;return h=new U({props:{link:et}}),{c(){e=u("div"),r=u("div"),a=f(),s=u("div"),o=u("h1"),o.textContent="Cellular Automata",l=f(),i=u("p"),i.textContent="Python project implementing Conway's Game of Life with PyGame.",$=f(),p=u("div"),I(h.$$.fragment),d(r,"class","bg-image svelte-13cr5qx"),d(p,"class","logo-link-container"),d(s,"class","project-card-details"),d(e,"class","project-card")},m(t,n){g(t,e,n),c(e,r),c(e,a),c(e,s),c(s,o),c(s,l),c(s,i),c(s,$),c(s,p),P(h,p,null),k=!0},p:t,i(t){k||(V(h.$$.fragment,t),k=!0)},o(t){H(h.$$.fragment,t),k=!1},d(t){t&&m(e),q(h)}}}const et="https://github.com/c1m50c/cellular-automata";class rt extends z{constructor(t){super(),T(this,t,null,nt,s,{})}}function at(n){let e,r,a,s,o,l,$,p,h,k,w,v,b,C;return b=new U({props:{link:st}}),{c(){e=u("div"),r=u("div"),a=f(),s=u("div"),o=u("h1"),o.textContent="Sorting Algorithm Visualizer",l=f(),$=u("p"),$.textContent="Visualizes various sorting algorithms using Matplotlib and Python.",p=f(),h=u("img"),w=f(),v=u("div"),I(b.$$.fragment),d(r,"class","bg-image svelte-1nvfjgr"),i(h.src,k="https://github.com/c1m50c/sorting-algorithm-visualizer/actions/workflows/tests.yml/badge.svg?branch=main")||d(h,"src","https://github.com/c1m50c/sorting-algorithm-visualizer/actions/workflows/tests.yml/badge.svg?branch=main"),d(h,"alt","Tests Status"),d(v,"class","logo-link-container"),d(s,"class","project-card-details"),d(e,"class","project-card")},m(t,n){g(t,e,n),c(e,r),c(e,a),c(e,s),c(s,o),c(s,l),c(s,$),c(s,p),c(s,h),c(s,w),c(s,v),P(b,v,null),C=!0},p:t,i(t){C||(V(b.$$.fragment,t),C=!0)},o(t){H(b.$$.fragment,t),C=!1},d(t){t&&m(e),q(b)}}}const st="https://github.com/c1m50c/sorting-algorithm-visualizer";class ot extends z{constructor(t){super(),T(this,t,null,at,s,{})}}function lt(n){let e,r,a,s,o,l,$,p,h,k,w,v,b,C;return b=new U({props:{link:it}}),{c(){e=u("div"),r=u("div"),a=f(),s=u("div"),o=u("h1"),o.textContent="Rust Algorithms",l=f(),$=u("p"),$.textContent="A Rust library implementing various algorithms.",p=f(),h=u("img"),w=f(),v=u("div"),I(b.$$.fragment),d(r,"class","bg-image svelte-1f750u"),i(h.src,k="https://github.com/c1m50c/rust-algorithms/actions/workflows/build.yml/badge.svg?branch=main")||d(h,"src","https://github.com/c1m50c/rust-algorithms/actions/workflows/build.yml/badge.svg?branch=main"),d(h,"alt","Build Status"),d(v,"class","logo-link-container"),d(s,"class","project-card-details"),d(e,"class","project-card")},m(t,n){g(t,e,n),c(e,r),c(e,a),c(e,s),c(s,o),c(s,l),c(s,$),c(s,p),c(s,h),c(s,w),c(s,v),P(b,v,null),C=!0},p:t,i(t){C||(V(b.$$.fragment,t),C=!0)},o(t){H(b.$$.fragment,t),C=!1},d(t){t&&m(e),q(b)}}}const it="https://github.com/c1m50c/rust-algorithms";class ct extends z{constructor(t){super(),T(this,t,null,lt,s,{})}}function gt(n){let e,r,a,s,o,l,$,p,h,k,w,v,b,C;return b=new U({props:{link:mt}}),{c(){e=u("div"),r=u("div"),a=f(),s=u("div"),o=u("h1"),o.textContent="Rust Data Structures",l=f(),$=u("p"),$.textContent="A library implementing various Data Structures in Rust, made strictly for learning purposes.",p=f(),h=u("img"),w=f(),v=u("div"),I(b.$$.fragment),d(r,"class","bg-image svelte-s6pt6f"),i(h.src,k="https://github.com/c1m50c/rust-data-structures/actions/workflows/build.yml/badge.svg?branch=main")||d(h,"src","https://github.com/c1m50c/rust-data-structures/actions/workflows/build.yml/badge.svg?branch=main"),d(h,"alt","Build Status"),d(v,"class","logo-link-container"),d(s,"class","project-card-details"),d(e,"class","project-card")},m(t,n){g(t,e,n),c(e,r),c(e,a),c(e,s),c(s,o),c(s,l),c(s,$),c(s,p),c(s,h),c(s,w),c(s,v),P(b,v,null),C=!0},p:t,i(t){C||(V(b.$$.fragment,t),C=!0)},o(t){H(b.$$.fragment,t),C=!1},d(t){t&&m(e),q(b)}}}const mt="https://github.com/c1m50c/rust-data-structures";class ut extends z{constructor(t){super(),T(this,t,null,gt,s,{})}}function $t(n){let e,r,a,s,o,l,i,$,p,h,k,w,v,b;return o=new tt({}),i=new rt({}),p=new ot({}),k=new ct({}),v=new ut({}),{c(){e=u("div"),r=u("h1"),r.textContent="Projects",a=f(),s=u("div"),I(o.$$.fragment),l=f(),I(i.$$.fragment),$=f(),I(p.$$.fragment),h=f(),I(k.$$.fragment),w=f(),I(v.$$.fragment),d(r,"class","section-title"),d(s,"class","project-card-container svelte-1e7nfnc"),d(e,"class","info-container"),d(e,"id","projects")},m(t,n){g(t,e,n),c(e,r),c(e,a),c(e,s),P(o,s,null),c(s,l),P(i,s,null),c(s,$),P(p,s,null),c(s,h),P(k,s,null),c(s,w),P(v,s,null),b=!0},p:t,i(t){b||(V(o.$$.fragment,t),V(i.$$.fragment,t),V(p.$$.fragment,t),V(k.$$.fragment,t),V(v.$$.fragment,t),b=!0)},o(t){H(o.$$.fragment,t),H(i.$$.fragment,t),H(p.$$.fragment,t),H(k.$$.fragment,t),H(v.$$.fragment,t),b=!1},d(t){t&&m(e),q(o),q(i),q(p),q(k),q(v)}}}class pt extends z{constructor(t){super(),T(this,t,null,$t,s,{})}}function ft(n){let e,r,a;return{c(){e=u("a"),r=$("svg"),a=$("path"),d(a,"d","M11.9985 2.25C10.6688 2.25 4.1514 5.98793 3.49365 7.12793C2.83515 8.26868 2.83515 15.7373 3.49365 16.8735C4.1544 18.0128 10.6718 21.75 11.9985 21.75C13.3215 21.75 19.8389 18.015 20.5019 16.8765C21.1672 15.735 21.1672 8.26054 20.5019 7.12354V7.12207C19.8337 5.98432 13.317 2.25 11.9985 2.25ZM11.9971 3.75879C13.2698 4.02354 18.3133 6.91257 19.1968 7.88232C19.6018 9.11307 19.601 14.8832 19.1968 16.1162C18.3193 17.0845 13.2713 19.9772 11.9971 20.2412C10.7236 19.9787 5.67929 17.0874 4.80029 16.1177C4.39904 14.8817 4.39904 9.11682 4.80029 7.88232C5.67704 6.91257 10.7228 4.02129 11.9971 3.75879ZM9.74999 6.75L8.24999 8.25H8.99999V15.75H10.5V12.75H13.5V15.75H12.75L14.25 17.25L15.75 15.75H15V9H13.5V11.25H10.5V8.25H11.25L9.74999 6.75Z"),d(r,"xmlns","http://www.w3.org/2000/svg"),d(r,"viewBox","0 0 24 24"),d(r,"class","hacker-rank-logo logo"),d(e,"href",n[0]),d(e,"id","hacker-rank-link logo-link")},m(t,n){g(t,e,n),c(e,r),c(r,a)},p(t,[n]){1&n&&d(e,"href",t[0])},i:t,o:t,d(t){t&&m(e)}}}function dt(t,n,e){let{link:r}=n;return t.$$set=t=>{"link"in t&&e(0,r=t.link)},[r]}class ht extends z{constructor(t){super(),T(this,t,dt,ft,s,{link:0})}}function kt(n){let e,r,a;return{c(){e=u("a"),r=$("svg"),a=$("path"),d(a,"d","M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"),d(r,"xmlns","http://www.w3.org/2000/svg"),d(r,"viewBox","0 0 30 30"),d(r,"class","linkedin-logo logo"),d(e,"href",n[0]),d(e,"id","linked-in-link logo-link")},m(t,n){g(t,e,n),c(e,r),c(r,a)},p(t,[n]){1&n&&d(e,"href",t[0])},i:t,o:t,d(t){t&&m(e)}}}function wt(t,n,e){let{link:r}=n;return t.$$set=t=>{"link"in t&&e(0,r=t.link)},[r]}class vt extends z{constructor(t){super(),T(this,t,wt,kt,s,{link:0})}}function bt(n){let e,r,a,s,o,l,i,$,p,h,k,w;return a=new U({props:{link:yt}}),o=new ht({props:{link:xt}}),i=new vt({props:{link:jt}}),{c(){e=u("div"),r=u("div"),I(a.$$.fragment),s=f(),I(o.$$.fragment),l=f(),I(i.$$.fragment),$=f(),p=u("button"),p.textContent=`${Ct}`,d(r,"class","logo-link-container svelte-12j0kmi"),d(p,"id","email"),d(p,"class","svelte-12j0kmi"),d(e,"class","info-container svelte-12j0kmi"),d(e,"id","contact")},m(t,m){var u,f,d,v;g(t,e,m),c(e,r),P(a,r,null),c(r,s),P(o,r,null),c(r,l),P(i,r,null),c(e,$),c(e,p),h=!0,k||(u=p,f="click",d=n[0],u.addEventListener(f,d,v),w=()=>u.removeEventListener(f,d,v),k=!0)},p:t,i(t){h||(V(a.$$.fragment,t),V(o.$$.fragment,t),V(i.$$.fragment,t),h=!0)},o(t){H(a.$$.fragment,t),H(o.$$.fragment,t),H(i.$$.fragment,t),h=!1},d(t){t&&m(e),q(a),q(o),q(i),k=!1,w()}}}const Ct="pereiswell@gmail.com",yt="https://github.com/c1m50c",xt="https://www.hackerrank.com/c1m50c",jt="https://www.linkedin.com/in/pere-wells";function St(t){return[()=>{var t;t=Ct,navigator.clipboard.writeText(t)}]}class Mt extends z{constructor(t){super(),T(this,t,St,bt,s,{})}}function _t(n){let e,r,a,s,o,l,i,$,p,h,k,w,v;return e=new B({}),s=new G({}),l=new Z({}),$=new F({}),h=new pt({}),w=new Mt({}),{c(){I(e.$$.fragment),r=f(),a=u("main"),I(s.$$.fragment),o=f(),I(l.$$.fragment),i=f(),I($.$$.fragment),p=f(),I(h.$$.fragment),k=f(),I(w.$$.fragment),d(a,"class","svelte-4zakh4")},m(t,n){P(e,t,n),g(t,r,n),g(t,a,n),P(s,a,null),c(a,o),P(l,a,null),c(a,i),P($,a,null),c(a,p),P(h,a,null),c(a,k),P(w,a,null),v=!0},p:t,i(t){v||(V(e.$$.fragment,t),V(s.$$.fragment,t),V(l.$$.fragment,t),V($.$$.fragment,t),V(h.$$.fragment,t),V(w.$$.fragment,t),v=!0)},o(t){H(e.$$.fragment,t),H(s.$$.fragment,t),H(l.$$.fragment,t),H($.$$.fragment,t),H(h.$$.fragment,t),H(w.$$.fragment,t),v=!1},d(t){q(e,t),t&&m(r),t&&m(a),q(s),q(l),q($),q(h),q(w)}}}return new class extends z{constructor(t){super(),T(this,t,null,_t,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
