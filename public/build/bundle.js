var app=function(){"use strict";function t(){}function e(t){return t()}function s(){return Object.create(null)}function n(t){t.forEach(e)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function l(t,e,s){t.insertBefore(e,s||null)}function o(t){t.parentNode.removeChild(t)}function r(t){return document.createElement(t)}function v(){return t=" ",document.createTextNode(t);var t}function h(t,e,s){null==s?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}let d;function g(t){d=t}const p=[],u=[],f=[],m=[],w=Promise.resolve();let k=!1;function b(t){f.push(t)}let C=!1;const z=new Set;function $(){if(!C){C=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];g(e),x(e.$$)}for(g(null),p.length=0;u.length;)u.pop()();for(let t=0;t<f.length;t+=1){const e=f[t];z.has(e)||(z.add(e),e())}f.length=0}while(p.length);for(;m.length;)m.pop()();k=!1,C=!1,z.clear()}}function x(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const y=new Set;function M(t,e){t&&t.i&&(y.delete(t),t.i(e))}function j(t,e,s,n){if(t&&t.o){if(y.has(t))return;y.add(t),undefined.c.push((()=>{y.delete(t),n&&(s&&t.d(1),n())})),t.o(e)}}function _(t){t&&t.c()}function L(t,s,c,i){const{fragment:l,on_mount:o,on_destroy:r,after_update:v}=t.$$;l&&l.m(s,c),i||b((()=>{const s=o.map(e).filter(a);r?r.push(...s):n(s),t.$$.on_mount=[]})),v.forEach(b)}function S(t,e){const s=t.$$;null!==s.fragment&&(n(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&(p.push(t),k||(k=!0,w.then($)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,a,c,i,l,r,v,h=[-1]){const p=d;g(e);const u=e.$$={fragment:null,ctx:null,props:r,update:t,not_equal:l,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:a.context||[]),callbacks:s(),dirty:h,skip_bound:!1,root:a.target||p.$$.root};v&&v(u.root);let f=!1;if(u.ctx=c?c(e,a.props||{},((t,s,...n)=>{const a=n.length?n[0]:s;return u.ctx&&l(u.ctx[t],u.ctx[t]=a)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](a),f&&H(e,t)),s})):[],u.update(),f=!0,n(u.before_update),u.fragment=!!i&&i(u.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);u.fragment&&u.fragment.l(t),t.forEach(o)}else u.fragment&&u.fragment.c();a.intro&&M(e.$$.fragment),L(e,a.target,a.anchor,a.customElement),$()}g(p)}class B{$destroy(){S(this,1),this.$destroy=t}$on(t,e){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(e),()=>{const t=s.indexOf(e);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function I(e){let s;return{c(){s=r("div"),s.innerHTML='<nav class="navigation-bar svelte-1qfn9lh"><a class="navbar-link svelte-1qfn9lh" href="#">Welcome</a> \n        <a class="navbar-link svelte-1qfn9lh" href="#about">About</a> \n        <a class="navbar-link svelte-1qfn9lh" href="#skills">Skills</a> \n        <a class="navbar-link svelte-1qfn9lh" href="#projects">Projects</a> \n        <a class="navbar-link svelte-1qfn9lh" href="#contact">Contact</a></nav>',h(s,"class","navigation-bar-container svelte-1qfn9lh")},m(t,e){l(t,s,e)},p:t,i:t,o:t,d(t){t&&o(s)}}}class P extends B{constructor(t){super(),V(this,t,null,I,c,{})}}function T(e){let s;return{c(){s=r("div"),s.innerHTML='<svg width="328" height="368" viewBox="0 0 328 368" xmlns="http://www.w3.org/2000/svg" id="logo" class="svelte-p75hal"><g><path id="logo-path" d="M134.015 82.5174C137.643 121.896 143.026 161.079 148.566 200.225C155.324 245.741 162.326 291.223 169.81 336.626C171.043 343.938 172.35 351.238 173.65 358.539C176.091 372.248 195.478 368.796 193.038 355.087C191.753 347.869 190.46 340.652 189.241 333.423C181.78 288.167 174.801 242.833 168.064 197.465C162.61 158.937 157.331 120.373 153.687 81.6232C153.055 67.7128 133.383 68.607 134.015 82.5174Z" class="svelte-p75hal"></path><path id="logo-path" d="M95.5772 233.886C97.5979 233.631 99.629 233.448 101.639 233.12C120.469 230.047 139.208 225.43 157.254 219.25C167.749 215.656 178.214 211.904 188.348 207.396C199.905 202.256 210.945 196.027 222.244 190.342C233.108 183.274 244.389 176.809 254.836 169.138C273.343 155.548 291.515 139.359 305.406 120.892C315.812 107.059 325.939 89.052 327.276 71.163C327.889 62.9531 325.176 54.8319 324.126 46.6664C319.359 39.4591 316.093 30.9932 309.825 25.0444C293.29 9.35003 270.982 3.12849 248.96 0.917283C220.119 -1.97867 185.507 2.35398 157.62 8.71109C141.491 12.3879 125.898 18.1124 110.037 22.813C74.6917 37.2926 64.1088 40.1281 32.069 58.6398C22.7372 64.0315 14.0258 70.4321 5.00424 76.3283C-6.64025 83.964 4.15833 100.432 15.8028 92.7961C24.2578 87.2322 32.4147 81.1865 41.1677 76.1044C71.7298 58.3597 81.9259 55.5919 115.663 41.6846C130.697 37.1734 145.476 31.7068 160.764 28.151C186.837 22.0869 217.798 18.126 244.805 20.1664C261.986 21.4646 279.966 25.614 293.847 36.5554C298.335 40.0931 301.076 45.4088 304.69 49.8355C305.863 55.3024 308.39 60.6479 308.209 66.2364C307.724 81.2555 299.276 96.2226 290.728 107.763C277.939 125.03 261.234 139.959 244.071 152.648C234.233 159.922 223.603 166.058 213.369 172.763C202.685 178.176 192.25 184.111 181.317 189.001C171.653 193.325 161.67 196.922 151.66 200.369C133.138 206.747 113.922 211.398 94.5422 214.22C80.6367 214.952 81.6717 234.618 95.5772 233.886V233.886Z" class="svelte-p75hal"></path></g></svg> \n    <div id="h2-container" class="svelte-p75hal"><h2 id="hey" class="svelte-p75hal">Hey, I&#39;m Pere</h2> \n        <p id="hook" class="svelte-p75hal">I do software development</p></div>',h(s,"class","info-container svelte-p75hal"),h(s,"id","welcome")},m(t,e){l(t,s,e)},p:t,i:t,o:t,d(t){t&&o(s)}}}class q extends B{constructor(t){super(),V(this,t,null,T,c,{})}}function A(e){let s;return{c(){s=r("div"),s.innerHTML='<h1 class="section-title">About Me</h1> \n    <p>I&#39;m a sixteen-year-old software developer based in Lincoln, Nebraska.\n        I&#39;ve been programming since the age of nine and since then it has been my primary passion throughout life.\n        Pursuing software development as a career has always been something I have wanted to do.\n        I&#39;m skilled and very comfortable with languages such as Python and JavaScript, but learning new languages and technologies has been always been something I enjoy doing to a great degree.\n        I have a hunger to push myself and learn as much as I possibly can.\n        I am very good at researching problems I encounter and can normally fix them very quickly, I would consider this one of my biggest strengths.\n        Learning and programming are two things I&#39;m extremely passionate about in my life, and I&#39;m always very happy at the opportunity to work on a new project.</p>',h(s,"class","info-container"),h(s,"id","about")},m(t,e){l(t,s,e)},p:t,i:t,o:t,d(t){t&&o(s)}}}class E extends B{constructor(t){super(),V(this,t,null,A,c,{})}}function G(e){let s;return{c(){s=r("div"),s.innerHTML='<h1 class="section-title">Skills</h1> \n    \n    <div class="languages-container"><h2 class="section-title">Languages 💬</h2> \n        <div class="info-card-container svelte-1vk70wz"><a class="link-button info-card svelte-1vk70wz" id="python" href="https://www.python.org/"><h3 class="svelte-1vk70wz">Python 🐍</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="rust" href="https://www.rust-lang.org/"><h3 class="svelte-1vk70wz">Rust 🦀</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="java_script" href="https://www.javascript.com/"><h3 class="svelte-1vk70wz">JavaScript ☕</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="type_script" href="https://www.typescriptlang.org/"><h3 class="svelte-1vk70wz">TypeScript 📰</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="html" href="https://en.wikipedia.org/wiki/HTML"><h3 class="svelte-1vk70wz">HTML 📄</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="css" href="https://en.wikipedia.org/wiki/CSS"><h3 class="svelte-1vk70wz">CSS 📑</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="sql" href="https://en.wikipedia.org/wiki/SQL"><h3 class="svelte-1vk70wz">SQL 📂</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="c" href="https://en.wikipedia.org/wiki/C_(programming_language)"><h3 class="svelte-1vk70wz">C 🔧</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="cpp" href="https://en.wikipedia.org/wiki/C%2B%2B"><h3 class="svelte-1vk70wz">C++ 🔨</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="c_sharp" href="https://docs.microsoft.com/en-us/dotnet/csharp/"><h3 class="svelte-1vk70wz">C# 🌳</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="lua" href="https://www.lua.org/"><h3 class="svelte-1vk70wz">Lua 🌌</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="gdscript" href="https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/index.html"><h3 class="svelte-1vk70wz">GDScript 🎮</h3></a></div></div> \n    <div class="libraies-engines-and-frameworks-container"><h2 class="section-title">Libraries, Engines &amp; Frameworks 📚</h2> \n        <div class="info-card-container svelte-1vk70wz"><a class="link-button info-card svelte-1vk70wz" id="matplotlib" href="https://matplotlib.org/"><h3 class="svelte-1vk70wz">Matplotlib 📈</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="pandas" href="https://pandas.pydata.org/"><h3 class="svelte-1vk70wz">Pandas 🐼</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="numpy" href="https://numpy.org/"><h3 class="svelte-1vk70wz">NumPy 🧮</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="opencv" href="https://opencv.org/"><h3 class="svelte-1vk70wz">OpenCV 📷</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="mediapipe" href="https://google.github.io/mediapipe/"><h3 class="svelte-1vk70wz">Mediapipe 🔬</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="flask" href="https://github.com/pallets/flask/"><h3 class="svelte-1vk70wz">Flask 🧪</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="sqlite" href="https://sqlite.org/index.html"><h3 class="svelte-1vk70wz">SQLite 💾</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="react" href="https://reactjs.org/"><h3 class="svelte-1vk70wz">React ⚡</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="vue" href="https://vuejs.org/"><h3 class="svelte-1vk70wz">Vue 🌴</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="svelte" href="https://svelte.dev/"><h3 class="svelte-1vk70wz">Svelte 📙</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="tailwind" href="https://tailwindcss.com/"><h3 class="svelte-1vk70wz">Tailwind 🍃</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="sass" href="https://sass-lang.com/"><h3 class="svelte-1vk70wz">Sass 💄</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="godot" href="https://godotengine.org/"><h3 class="svelte-1vk70wz">Godot 🤖</h3></a></div></div> \n    <div class="misc-tech-container"><h2 class="section-title">Miscellaneous Technologies ❓</h2> \n        <div class="info-card-container svelte-1vk70wz"><a class="link-button info-card svelte-1vk70wz" id="google" href="https://google.com"><h3 class="svelte-1vk70wz">Google 🔍</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="git" href="https://git-scm.com/"><h3 class="svelte-1vk70wz">Git 💻</h3></a> \n            <a class="link-button info-card svelte-1vk70wz" id="npm" href="https://www.npmjs.com/"><h3 class="svelte-1vk70wz">NPM 📦</h3></a></div></div>',h(s,"class","info-container svelte-1vk70wz"),h(s,"id","skills")},m(t,e){l(t,s,e)},p:t,i:t,o:t,d(t){t&&o(s)}}}class N extends B{constructor(t){super(),V(this,t,null,G,c,{})}}function R(e){let s;return{c(){s=r("div"),s.innerHTML='<h1 class="section-title">Projects</h1> \n    <div class="project-card-container svelte-1xpvgdf"><div class="project-card svelte-1xpvgdf"><div class="bg-image svelte-1xpvgdf" id="portfolio-image"></div> \n            <div class="project-card-details"><h1>Portfolio</h1> \n                <p>My personal portfolio site, the site you&#39;re seeing right now.</p> \n                <div class="logo-link-container svelte-1xpvgdf"><a href="https://github.com/c1m50c/portfolio" class="logo-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="github-logo logo svelte-1xpvgdf"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path></svg></a></div></div></div> \n        <div class="project-card svelte-1xpvgdf"><div class="bg-image svelte-1xpvgdf" id="cellular-automata-image"></div> \n            <div class="project-card-details"><h1>Cellular Automata</h1> \n                <p>Python project implementing Conway&#39;s Game of Life with PyGame.</p> \n                <div class="logo-link-container svelte-1xpvgdf"><a href="https://github.com/c1m50c/cellular-automata" class="logo-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="github-logo logo svelte-1xpvgdf"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path></svg></a></div></div></div> \n        <div class="project-card svelte-1xpvgdf"><div class="bg-image svelte-1xpvgdf" id="sorting-algorithm-visualizer-image"></div> \n            <div class="project-card-details"><h1>Sorting Algorithm Visualizer</h1> \n                <p>Visualizes various sorting algorithms using Matplotlib and Python.</p> \n                <img src="https://github.com/c1m50c/sorting-algorithm-visualizer/actions/workflows/tests.yml/badge.svg?branch=main" alt="Tests Status"/> \n                <div class="logo-link-container svelte-1xpvgdf"><a href="https://github.com/c1m50c/sorting-algorithm-visualizer" class="logo-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="github-logo logo svelte-1xpvgdf"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path></svg></a></div></div></div> \n        <div class="project-card svelte-1xpvgdf"><div class="bg-image svelte-1xpvgdf" id="rust-algorithms-image"></div> \n            <div class="project-card-details"><h1>Rust Algorithms</h1> \n                <p>A Rust library implementing various algorithms.</p> \n                <img src="https://github.com/c1m50c/rust-algorithms/actions/workflows/build.yml/badge.svg?branch=main" alt="Build Status"/> \n                <div class="logo-link-container svelte-1xpvgdf"><a href="https://github.com/c1m50c/rust-algorithms" class="logo-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="github-logo logo svelte-1xpvgdf"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path></svg></a></div></div></div> \n        <div class="project-card svelte-1xpvgdf"><div class="bg-image svelte-1xpvgdf" id="rust-data-structures-image"></div> \n            <div class="project-card-details"><h1>Rust Data Structures</h1> \n                <p>A library implementing various Data Structures in Rust, made strictly for learning purposes.</p> \n                <img src="https://github.com/c1m50c/rust-data-structures/actions/workflows/build.yml/badge.svg?branch=main" alt="Build Status"/> \n                <div class="logo-link-container svelte-1xpvgdf"><a href="https://github.com/c1m50c/rust-data-structures" class="logo-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="github-logo logo svelte-1xpvgdf"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path></svg></a></div></div></div></div>',h(s,"class","info-container"),h(s,"id","projects")},m(t,e){l(t,s,e)},p:t,i:t,o:t,d(t){t&&o(s)}}}class Z extends B{constructor(t){super(),V(this,t,null,R,c,{})}}function O(e){let s,n,a,c,d,g;return{c(){s=r("div"),n=r("div"),n.innerHTML='<a href="https://github.com/c1m50c" id="github-profile-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="logo svelte-bicgh9" id="github-logo"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path></svg></a> \n        <a href="https://www.hackerrank.com/c1m50c" id="hacker-rank-profile-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hacker-rank-logo logo svelte-bicgh9"><path d="M11.9985 2.25C10.6688 2.25 4.1514 5.98793 3.49365 7.12793C2.83515 8.26868 2.83515 15.7373 3.49365 16.8735C4.1544 18.0128 10.6718 21.75 11.9985 21.75C13.3215 21.75 19.8389 18.015 20.5019 16.8765C21.1672 15.735 21.1672 8.26054 20.5019 7.12354V7.12207C19.8337 5.98432 13.317 2.25 11.9985 2.25ZM11.9971 3.75879C13.2698 4.02354 18.3133 6.91257 19.1968 7.88232C19.6018 9.11307 19.601 14.8832 19.1968 16.1162C18.3193 17.0845 13.2713 19.9772 11.9971 20.2412C10.7236 19.9787 5.67929 17.0874 4.80029 16.1177C4.39904 14.8817 4.39904 9.11682 4.80029 7.88232C5.67704 6.91257 10.7228 4.02129 11.9971 3.75879ZM9.74999 6.75L8.24999 8.25H8.99999V15.75H10.5V12.75H13.5V15.75H12.75L14.25 17.25L15.75 15.75H15V9H13.5V11.25H10.5V8.25H11.25L9.74999 6.75Z"></path></svg></a> \n        <a href="https://www.linkedin.com/in/pere-wells" id="linked-in-profile-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="linkedin-logo logo svelte-bicgh9"><path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path></svg></a>',a=v(),c=r("button"),c.textContent=`${D}`,h(n,"class","logo-link-container svelte-bicgh9"),h(c,"id","email"),h(c,"class","svelte-bicgh9"),h(s,"class","info-container svelte-bicgh9"),h(s,"id","contact")},m(t,o){var r,v,h,p;l(t,s,o),i(s,n),i(s,a),i(s,c),d||(r=c,v="click",h=e[0],r.addEventListener(v,h,p),g=()=>r.removeEventListener(v,h,p),d=!0)},p:t,i:t,o:t,d(t){t&&o(s),d=!1,g()}}}let D="pereiswell@gmail.com";function Q(t){return[()=>{var t;t=D,navigator.clipboard.writeText(t)}]}class F extends B{constructor(t){super(),V(this,t,Q,O,c,{})}}function J(e){let s,n,a,c,d,g,p,u,f,m,w,k,b;return s=new P({}),c=new q({}),g=new E({}),u=new N({}),m=new Z({}),k=new F({}),{c(){_(s.$$.fragment),n=v(),a=r("main"),_(c.$$.fragment),d=v(),_(g.$$.fragment),p=v(),_(u.$$.fragment),f=v(),_(m.$$.fragment),w=v(),_(k.$$.fragment),h(a,"class","svelte-4zakh4")},m(t,e){L(s,t,e),l(t,n,e),l(t,a,e),L(c,a,null),i(a,d),L(g,a,null),i(a,p),L(u,a,null),i(a,f),L(m,a,null),i(a,w),L(k,a,null),b=!0},p:t,i(t){b||(M(s.$$.fragment,t),M(c.$$.fragment,t),M(g.$$.fragment,t),M(u.$$.fragment,t),M(m.$$.fragment,t),M(k.$$.fragment,t),b=!0)},o(t){j(s.$$.fragment,t),j(c.$$.fragment,t),j(g.$$.fragment,t),j(u.$$.fragment,t),j(m.$$.fragment,t),j(k.$$.fragment,t),b=!1},d(t){S(s,t),t&&o(n),t&&o(a),S(c),S(g),S(u),S(m),S(k)}}}return new class extends B{constructor(t){super(),V(this,t,null,J,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
